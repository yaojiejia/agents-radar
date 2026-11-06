# 📡 AI Ecosystem Digest — 2026-11-06

> Generated 2026-11-06 03:14 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 154,686 | 18 | 31 | 1 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 133,368 | 20 | 0 | 47 | 4 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,745 | 0 | 0 | 7 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,361 | 9 | 1 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 224,823 | 13 | 23 | 11 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 29,035 | 22 | 20 | 2 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 393,996 | 166 | 242 | 151 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 260,914 | 23 | 2 | 1 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 96,425 | 32 | 19 | 47 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,509 | 24 | 16 | 31 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 133,498 | 18 | 18 | 42 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 186,043 | 6 | 13 | 7 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 62,796 | 16 | 17 | 69 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,087 | 10 | 7 | 92 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,182 | 3 | 0 | 1 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,404 | 14 | 33 | 6 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released versions [rust-v0.167.0](https://github.com/openai/codex/releases/tag/rust-v0.167.0), [rust-v0.168.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.7), and others.
- **GitHub Copilot CLI** announced release [v1.0.106](https://github.com/github/copilot-cli/releases/tag/v1.0.106).
- **Qwen Code** launched multiple releases, including [v0.26.8](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.8) and associated nightly builds.
- **OpenClaw** introduced [v2026.11.1](https://github.com/openclaw/openclaw/releases/tag/v2026.11.1) as its latest release.
- A new issue in **OpenCode** concerning "Tool Result Processing Error" has garnered significant attention with [7 comments](https://github.com/anomalyco/opencode/issues/62215).

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 154,686 · **Open issues:** 16,690 · **Last push:** 3h ago

On November 6, 2026, there were no new releases for Claude Code; however, a significant feature was merged with PR #107768, introducing a new privacy mod. Among the newly reported issues, #107757 raised concerns about a privacy violation in the User-Agent header, while #107820 highlighted unsubstantiated security claims from the AI assistant following the implementation of the Send Invites feature. Other notable issues include #107611, which addresses a problem with the desktop app's Code tab not displaying sessions correctly, and #107767, which reported that the auto-update restart on Windows is disabling Remote Control across existing sessions. Overall, while the day was largely routine in terms of releases, the focus on privacy and session management remains critical.

#### ✅ Merged PRs
- [#107768](https://github.com/anthropics/claude-code/pull/107768) mods: add the privacy mod

#### 🐛 New Issues
- [#107757](https://github.com/anthropics/claude-code/issues/107757) Bug Report: Privacy violation in User-Agent header `bug` `platform:macos` `area:tools` `area:security` 💬32
- [#107611](https://github.com/anthropics/claude-code/issues/107611) Desktop app Code tab doesn't show sessions from the CLI or VS Code extension; one shared session list across all three `enhancement` `platform:macos` `platform:vscode` `area:desktop` 💬1
- [#107555](https://github.com/anthropics/claude-code/issues/107555) [MODEL] Turns a one-off correction into a permanent rule (memory, skills) and later cites it as the user's decision `bug` `platform:macos` `area:model` `memory` 💬2
- [#107811](https://github.com/anthropics/claude-code/issues/107811) [FEATURE] Mods: hover previews for a mod's links, and a section in the desktop session rail `enhancement` `area:plugins` `area:desktop` 💬1
- [#107820](https://github.com/anthropics/claude-code/issues/107820) [Bug] Security claims from AI assistant unsubstantiated after implementing Send Invites feature `bug` `platform:linux` `area:model` 💬1
- [#107767](https://github.com/anthropics/claude-code/issues/107767) [BUG] Desktop (Windows): auto-update restart turns Remote Control off for all existing sessions, with no setting to keep it on `bug` `platform:windows` `area:desktop` 💬1
- [#107504](https://github.com/anthropics/claude-code/issues/107504) [Desktop] After an update, Remote Control turns off on every existing session; phone shows none until each is used `bug` `platform:macos` `area:desktop` 💬1
- [#107830](https://github.com/anthropics/claude-code/issues/107830) [Bug] Account incorrectly flagged for non-frontier model use `bug` `platform:macos` `area:auth`
- [#107829](https://github.com/anthropics/claude-code/issues/107829) [FEATURE] You should know: expose the side agent's token usage/cost (statusline JSON or plugin store) `enhancement` `platform:linux` `area:cost` `area:plugins`
- [#107828](https://github.com/anthropics/claude-code/issues/107828) [FEATURE] Web session list: "working" indicator is hard to see after the change from green dot to shimmer animation `enhancement` `area:claude-code-web` `platform:web`
- [#107827](https://github.com/anthropics/claude-code/issues/107827) [BUG] WebFetch domain check refuses web.archive.org ("Claude Code is unable to fetch from web.archive.org") `bug` `platform:linux` `area:tools`
- [#107826](https://github.com/anthropics/claude-code/issues/107826) [BUG] Desktop (Windows): audio/video sent with SendUserFile takes ~10 s to start playing, even for an 80 KB file `bug` `platform:windows` `performance` `area:desktop`
- [#107825](https://github.com/anthropics/claude-code/issues/107825) [BUG] Desktop: overnight auto-update restart turns Remote Control off for every session and never reconnects them `bug` `platform:macos` `area:desktop`
- [#107824](https://github.com/anthropics/claude-code/issues/107824) [GitHub integration] `bug` `area:claude-code-web` `github-integration`
- [#107823](https://github.com/anthropics/claude-code/issues/107823) [Bug] Direct AWS Identity Center permission deletion ignored CLAUDE.md rules `bug` `platform:windows` `area:model` `area:permissions`
- [#107822](https://github.com/anthropics/claude-code/issues/107822) [BUG] Foreground Bash calls that already returned appear as 'Running' in the Background tasks panel and can't be stopped (Linux, 2.1.314) `bug` `platform:linux` `area:tools`
- [#107821](https://github.com/anthropics/claude-code/issues/107821) Bash permission prompts appear despite --dangerously-skip-permissions when a command cd's outside the working directories `bug` `platform:macos` `area:bash` `area:permissions`
- [#107819](https://github.com/anthropics/claude-code/issues/107819) [FEATURE] Show last activity and live status for each session in the desktop sidebar `enhancement` `area:desktop`

#### 🔒 Closed Issues
- [#92210](https://github.com/anthropics/claude-code/issues/92210) Desktop 1.46388: claude://code/new?folder= starts a scratch workspace when the folder equals the currently selected folder
- [#106479](https://github.com/anthropics/claude-code/issues/106479) [BUG] Windows desktop app: dead keys don't work, can't type accented letters (á, é, í, ó, ú) with Spanish (Latin America) keyboard
- [#102703](https://github.com/anthropics/claude-code/issues/102703) Desktop (Code tab): Routines sidebar section is hidden and cannot be re-enabled
- [#102735](https://github.com/anthropics/claude-code/issues/102735) [BUG] Desktop: Routines sidebar section is hidden and there is no visible way to turn it back on
- [#99301](https://github.com/anthropics/claude-code/issues/99301) [BUG] Windows/Git Bash: shell snapshot silently writes the raw Windows PATH when the PATH probe times out, so ls/grep/date are "command not found" for the whole session
- [#97884](https://github.com/anthropics/claude-code/issues/97884) Auto mode: server-side safety classifier repeatedly returns no verdict, blocking all write/exec tool calls (Edit, Bash, PowerShell)
- [#107611](https://github.com/anthropics/claude-code/issues/107611) Desktop app Code tab doesn't show sessions from the CLI or VS Code extension; one shared session list across all three
- [#106725](https://github.com/anthropics/claude-code/issues/106725) [FEATURE] Browser pane (Claude_Browser MCP): file_upload tool like Claude in Chrome's
- [#106029](https://github.com/anthropics/claude-code/issues/106029) Agent ran `pkill -f 'cat'` and SIGTERMed nearly every app on macOS; the shell pkill guard can't fire on macOS
- [#103455](https://github.com/anthropics/claude-code/issues/103455) [BUG] Claude in Chrome and the desktop built-in browser block all of naver.com ("not allowed due to safety restrictions")
- [#98285](https://github.com/anthropics/claude-code/issues/98285) [Desktop] `claude://code/new?folder=…&q=…` intermittently starts the session in a scratch workspace instead of the folder
- [#101891](https://github.com/anthropics/claude-code/issues/101891) [Feature Request] Desktop split view: new session should open in the focused pane
- [#100320](https://github.com/anthropics/claude-code/issues/100320) [BUG] Desktop app, third-party (gateway) mode: Ultracode never appears in the Code tab effort slider because the public model catalog has no ultracode effort option
- [#106074](https://github.com/anthropics/claude-code/issues/106074) [BUG] [Claude Desktop] Tab on the slash-command menu runs the command (Windows and macOS) — /cl + Tab wipes the conversation via /clear
- [#107820](https://github.com/anthropics/claude-code/issues/107820) [Bug] Security claims from AI assistant unsubstantiated after implementing Send Invites feature
- [#107767](https://github.com/anthropics/claude-code/issues/107767) [BUG] Desktop (Windows): auto-update restart turns Remote Control off for all existing sessions, with no setting to keep it on
- [#107504](https://github.com/anthropics/claude-code/issues/107504) [Desktop] After an update, Remote Control turns off on every existing session; phone shows none until each is used
- [#103785](https://github.com/anthropics/claude-code/issues/103785) [BUG] Desktop Browser pane ignores target="_blank": links open in the same tab instead of a new pane tab
- [#107136](https://github.com/anthropics/claude-code/issues/107136) [FEATURE] custom themes / accent color in the desktop app
- [#104757](https://github.com/anthropics/claude-code/issues/104757) [FEATURE] Ability to change the accent color
- [#106664](https://github.com/anthropics/claude-code/issues/106664) [BUG] Claude in Chrome blocks naver.com ("not allowed due to safety restrictions")
- [#107179](https://github.com/anthropics/claude-code/issues/107179) [Desktop app / Code tab] Project .mcp.json MCP servers are killed after the first turn in pre-warmed (spare) sessions and never restarted
- [#107060](https://github.com/anthropics/claude-code/issues/107060) [Desktop] Project `.mcp.json` server is stopped after the first turn in sessions started from a pre-warmed spare, and never comes back
- [#104434](https://github.com/anthropics/claude-code/issues/104434) Windows: session CLI walks scratch/session trees with per-file opens, exhausting NTFS nonpaged pool (NtFC)
- [#106943](https://github.com/anthropics/claude-code/issues/106943) [BUG] Desktop preview: a dev server whose / redirects never becomes ready (stuck on "Starting...")
- [#107014](https://github.com/anthropics/claude-code/issues/107014) [Desktop/Linux] Persian/Arabic text in the Code tab now renders with DejaVu Sans instead of the system's fontconfig choice
- [#103738](https://github.com/anthropics/claude-code/issues/103738) [BUG] Claude Desktop: plugin headersHelper gets CLAUDE_PLUGIN_ROOT with every "1" replaced by "REDACTED"
- [#104632](https://github.com/anthropics/claude-code/issues/104632) [BUG] Desktop split view: Cmd+K session switcher always replaces the LEFT pane, not the focused one
- [#104671](https://github.com/anthropics/claude-code/issues/104671) [BUG] Desktop: collapsed sidebar group hides gray unread dots, but still shows blue ones
- [#105746](https://github.com/anthropics/claude-code/issues/105746) [BUG] Desktop: the X on the code review findings bar dismisses every finding, with no confirmation or undo
- [#100949](https://github.com/anthropics/claude-code/issues/100949) [BUG] Desktop app (Code tab): search mixes Archive and Delete actions into results, one click archived my session

### OpenAI Codex (`openai/codex`)

**Stars:** 133,368 · **Open issues:** 26,638 · **Last push:** <1h ago

Today, OpenAI Codex released version rust-v0.167.0, introducing several key features such as the ability to open the agent command center without a daemon and a new terminal session picker that retains drafts during backend switches. Additionally, local image attachments can now be previewed while composing on supported terminals. In merged pull requests, notable improvements include support for optional thread IDs in hosted file uploads (#59795) and centralized managed proxy preparation (#59792). The development team is also addressing important issues, including a reported memory leak in the codexcli (#59656) and system freezes on Windows devices using Ryzen processors (#59705).

#### 🚀 New Releases
- [rust-v0.167.0](https://github.com/openai/codex/releases/tag/rust-v0.167.0) 0.167.0
- [rust-v0.168.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.7) 0.168.0-alpha.7
- [rust-v0.168.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.6) 0.168.0-alpha.6
- [rust-v0.167.0-alpha.3.2](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.3.2) 0.167.0-alpha.3.2

#### ✅ Merged PRs
- [#59805](https://github.com/openai/codex/pull/59805) Pack relative relocations in x86-64 musl release builds
- [#59795](https://github.com/openai/codex/pull/59795) Support optional thread IDs in hosted file uploads
- [#59794](https://github.com/openai/codex/pull/59794) Check extension budgets before model generation requests
- [#59793](https://github.com/openai/codex/pull/59793) Support update-boundary paging across forked thread histories
- [#59792](https://github.com/openai/codex/pull/59792) Centralize managed proxy preparation and sandbox routing
- [#59789](https://github.com/openai/codex/pull/59789) Render delegated thread messages as Markdown in the TUI
- [#59787](https://github.com/openai/codex/pull/59787) Support credential export commands for gateway authentication
- [#59785](https://github.com/openai/codex/pull/59785) Decouple message lifecycle state from model-visible item IDs
- [#59784](https://github.com/openai/codex/pull/59784) Support multiple side chats in the TUI sidebar
- [#59783](https://github.com/openai/codex/pull/59783) Tie gRPC code-mode connection lifetime to live sessions
- [#59780](https://github.com/openai/codex/pull/59780) Enable safe identical code folding for x86-64 musl releases
- [#59779](https://github.com/openai/codex/pull/59779) Add provider configuration editing to the TUI
- [#59778](https://github.com/openai/codex/pull/59778) Expose acceptance metadata and code-cell links in rollout traces
- [#59776](https://github.com/openai/codex/pull/59776) Allow selecting a configured provider in `model/list`
- [#59774](https://github.com/openai/codex/pull/59774) Remove the legacy Seatbelt command wrapper
- [#59772](https://github.com/openai/codex/pull/59772) Remove the legacy sandbox policy constructor
- [#59770](https://github.com/openai/codex/pull/59770) Add shared service-tier support for host-owned agents
- [#59769](https://github.com/openai/codex/pull/59769) Reuse decoded WebSocket event kinds in telemetry
- [#59768](https://github.com/openai/codex/pull/59768) Stop prefetching plugin discovery at app-server startup
- [#59767](https://github.com/openai/codex/pull/59767) Add sidebar tabs and nonblocking side-chat creation
- [#59759](https://github.com/openai/codex/pull/59759) Update WebSocket dependency forks
- [#59754](https://github.com/openai/codex/pull/59754) Enforce host-required cyber access programs per thread
- [#59752](https://github.com/openai/codex/pull/59752) Configure the Opus Bazel patch and isolate auth tests
- [#59750](https://github.com/openai/codex/pull/59750) Stop Noise relay recovery on rejected executor credentials
- [#59749](https://github.com/openai/codex/pull/59749) Use runtime authentication for OpenAI MCP and app requests
- [#59746](https://github.com/openai/codex/pull/59746) Add typed Cloud user-message submission receipts
- [#59745](https://github.com/openai/codex/pull/59745) Repair legacy Windows sandbox bin permissions for SYSTEM
- [#59743](https://github.com/openai/codex/pull/59743) Forward explicit cyber access programs with header authentication
- [#59739](https://github.com/openai/codex/pull/59739) Add a sidebar chooser and floating workspace shortcut panels
- [#59737](https://github.com/openai/codex/pull/59737) Restrict Guardian native multi-agent history to the OpenAI provider
- [#59736](https://github.com/openai/codex/pull/59736) Stabilize the unreadable-glob traversal error test
- [#59735](https://github.com/openai/codex/pull/59735) Support direct Guardian review of recorded MCP calls
- [#59732](https://github.com/openai/codex/pull/59732) Omit native multi-agent guidance when native tools are disabled
- [#59728](https://github.com/openai/codex/pull/59728) Use Codex releases as the primary libcap source for musl builds
- [#59726](https://github.com/openai/codex/pull/59726) Prevent idle Windows MCP pipes from blocking unrelated I/O
- [#59725](https://github.com/openai/codex/pull/59725) Add host reporting for terminal agent turn outcomes
- [#59722](https://github.com/openai/codex/pull/59722) Allow choosing the default provider for new chats in the TUI
- [#59714](https://github.com/openai/codex/pull/59714) Set `output_deferred` to false for cloud thread items
- [#59713](https://github.com/openai/codex/pull/59713) Clarify message board notification delivery documentation
- [#59711](https://github.com/openai/codex/pull/59711) Expand Linux sandbox deny globs in process
- [#59709](https://github.com/openai/codex/pull/59709) Prioritize filename matches in fuzzy file search
- [#59700](https://github.com/openai/codex/pull/59700) Fix TUI assistant messages interrupted by tool execution
- [#59698](https://github.com/openai/codex/pull/59698) Fix reasoning summary restoration in the TUI
- [#59693](https://github.com/openai/codex/pull/59693) Support Cloud conversation requests in the app-server client
- [#59691](https://github.com/openai/codex/pull/59691) Split MCP direct-mode exposure coverage into separate test cases
- [#59688](https://github.com/openai/codex/pull/59688) Extract channel notification formatting into `PostPreview`
- [#59677](https://github.com/openai/codex/pull/59677) Remove the legacy sandbox policy summary helper

#### 🐛 New Issues
- [#59781](https://github.com/openai/codex/issues/59781) Desktop: exec_command returns only 'blocked by policy' before execution, with no review correlation ID `bug` `windows-os` `sandbox` `tool-calls` 💬6
- [#59656](https://github.com/openai/codex/issues/59656) codexcli：Memory Leak Issue `bug` `CLI` `performance` 💬3
- [#59591](https://github.com/openai/codex/issues/59591) Outbound network connections fail in the cloud computer terminal `bug` `codex-web` `connectivity` `computer-use` 💬2
- [#59705](https://github.com/openai/codex/issues/59705) [Windows] System freezes and multiple BSODs during Codex use on Ryzen 9 9950X3D `bug` `windows-os` `sandbox` `app` 💬2
- [#59806](https://github.com/openai/codex/issues/59806) Selected model is at capacity. Please try a different model. `bug` `rate-limits` `app` 💬1
- [#59804](https://github.com/openai/codex/issues/59804) Suspected false-positive cybersecurity flag interrupts presentation-only UI review after passing checks `bug` `code-review` `app` `safety-check` 💬1
- [#59799](https://github.com/openai/codex/issues/59799) [CLI 0.167.0][macOS] Chrome plugin still fails: browser access host unavailable — please fix CLI support and stop the restart loop `bug` `CLI` `computer-use` `browser` 💬1
- [#59791](https://github.com/openai/codex/issues/59791) Windows Computer Use: Chrome URL verification fails on 26.1103.31037; app screenshots also time out `bug` `windows-os` `app` `computer-use` 💬1
- [#59788](https://github.com/openai/codex/issues/59788) Codex chats stall after a WebSocket disconnect `bug` `windows-os` `app` `connectivity` 💬1
- [#59803](https://github.com/openai/codex/issues/59803) [Windows][Browser] chatgpt.com blocked by browser host restrictions gate `bug` `windows-os` `app` `browser`
- [#59802](https://github.com/openai/codex/issues/59802) Desktop DOCX preview separates cover but displays body continuously, ignoring chapter page breaks `bug` `app`
- [#59801](https://github.com/openai/codex/issues/59801) Desktop account data export returns reauth_required immediately after fresh sign-in; web export succeeds `bug` `windows-os` `auth` `app`
- [#59800](https://github.com/openai/codex/issues/59800) [Feature Request] Stronger aesthetic judgment, multimodal visual reasoning, and self-improving creative workflows in Codex `enhancement` `model-behavior` `skills` `memory`
- [#59798](https://github.com/openai/codex/issues/59798) Large screenshot Ctrl+V paste fails over macOS Ghostty → SSH/tmux → headless Linux (X11 INCR timeout) `bug` `TUI` `CLI` `remote`
- [#59797](https://github.com/openai/codex/issues/59797) HTTP transport discards underlying response-body error causes `bug` `connectivity`
- [#59796](https://github.com/openai/codex/issues/59796) Windows: node_repl minimal JavaScript times out after successful reset; computer-use unavailable `bug` `windows-os` `tool-calls` `app`
- [#59790](https://github.com/openai/codex/issues/59790) Ultrafast option missing in the Windows desktop app with a Pro $500 subscription `bug` `windows-os` `app`
- [#59786](https://github.com/openai/codex/issues/59786) [Windows MXC / Codex CLI] Nested cmd.exe fails with ACCESS_DENIED under :root=deny; succeeds in :workspace `bug` `windows-os` `sandbox` `CLI`
- [#59782](https://github.com/openai/codex/issues/59782) [Bug] 0.166.0-alpha.6: all gpt-6.1-sol turns fail with "Function 'web.run' is reserved for use by this model and must match the configured schema" (custom Responses provider) `bug` `custom-model` `tool-calls` `app`
- [#59777](https://github.com/openai/codex/issues/59777) Sudden crash of codex session `bug` `CLI`

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,745 · **Open issues:** 773 · **Last push:** 2h ago

On November 6, 2026, there were no new releases for Gemini CLI, but several important pull requests were merged. The merged fixes included improvements to the CLI's handling of editor selections, ensuring that pending tool confirmations are preserved, and enhancements to the processing of piped stdin to avoid premature destruction of process.stdin. Additionally, the core saw updates that prevent false positives in Windows PowerShell substitutions and refine policy handling, along with adjustments to preserve leading and trailing whitespace in @file references. The changelogs for versions v0.68.0-preview.0 and v0.67.0 were also updated, marking a routine day for the project with focused maintenance on existing features.

#### ✅ Merged PRs
- [#30147](https://github.com/google-gemini/gemini-cli/pull/30147) fix(cli): preserve pending tool confirmation when escaping editor selection
- [#30163](https://github.com/google-gemini/gemini-cli/pull/30163) fix(cli): wait for piped stdin EOF and avoid destroying process.stdin
- [#30153](https://github.com/google-gemini/gemini-cli/pull/30153) fix(core): prevent thoughtSignature-only turns and preserve multimodal tool responses
- [#30150](https://github.com/google-gemini/gemini-cli/pull/30150) fix(cli): preserve leading and trailing whitespace in @file references
- [#30110](https://github.com/google-gemini/gemini-cli/pull/30110) fix(core): fix Windows PowerShell substitution false positives and policy handling
- [#30146](https://github.com/google-gemini/gemini-cli/pull/30146) Changelog for v0.68.0-preview.0
- [#30145](https://github.com/google-gemini/gemini-cli/pull/30145) Changelog for v0.67.0

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,361 · **Open issues:** 2,195 · **Last push:** 1h ago

On November 5, 2026, GitHub Copilot CLI released version 1.0.106, introducing inline image rendering in Rex terminals through Kitty direct placements and adding a /code command for opening the current session in VS Code. This update also introduced a Fusion tier setting in `copilot config`, enhanced the /settings command to access a unified dashboard, and provided interactive program status updates to supporting terminals. The 1.0.106-11 revision addressed several issues, including ensuring that removed or replaced images do not send with messages and improving text pasting behavior by excluding certain control characters. Among the new issues logged, the most significant is #5362, which requests functionality for the model to replace junk tool results with concise one-line summaries, highlighting the ongoing focus on improving output quality.

#### 🚀 New Releases
- [v1.0.106](https://github.com/github/copilot-cli/releases/tag/v1.0.106) 1.0.106
- [v1.0.106-11](https://github.com/github/copilot-cli/releases/tag/v1.0.106-11) 1.0.106-11

#### 🐛 New Issues
- [#5362](https://github.com/github/copilot-cli/issues/5362) Let the model replace a junk tool result with a one-line summary (model-judged context pruning) `triage` 💬2
- [#5360](https://github.com/github/copilot-cli/issues/5360) Error executing prompt: Error: Managed sandbox policy changed during options update; retry the update 💬1
- [#5368](https://github.com/github/copilot-cli/issues/5368) Sandbox enforcement probe fails with CreateProcessW error 2 on Windows when `failIfUnavailable: true` (managed settings) `triage`
- [#5367](https://github.com/github/copilot-cli/issues/5367) Agent regularly loses MCP tool schemas `triage`
- [#5366](https://github.com/github/copilot-cli/issues/5366) Remote MCP OAuth (Microsoft Entra): calls fail after the access token expires while mcp.list still says connected; only restartServer recovers `triage`
- [#5365](https://github.com/github/copilot-cli/issues/5365) Sandbox: report the extra temp-storage read-write rule in sandbox.decision, and allow opting out `triage`
- [#5363](https://github.com/github/copilot-cli/issues/5363) ACP `session/new` reports a `model` that the session is not running `triage`
- [#5361](https://github.com/github/copilot-cli/issues/5361) After the 5 hour session limit reset the Copilot CLI failed: Execution failed: 400 The requested model is not available for integrator "copilot-developer-cli". Verify the correct Copilot-Integration-Id header is being sent. `triage`
- [#5359](https://github.com/github/copilot-cli/issues/5359) Resumed session fails every request with 400 "Tool reference '...' not found in available tools" after an MCP server's tools change between launches `area:sessions` `area:mcp`

#### 🔒 Closed Issues
- [#5360](https://github.com/github/copilot-cli/issues/5360) Error executing prompt: Error: Managed sandbox policy changed during options update; retry the update

### OpenCode (`anomalyco/opencode`)

**Stars:** 224,823 · **Open issues:** 4,062 · **Last push:** <1h ago

On November 6, 2026, OpenCode released process-daemon v0.5.0, alongside the update of opencode-pty to version 0.5.0 with protocol 8. Key merged features include a fix that enables transcript jumps in subagent sessions (#60817), improvements to the TUI for honoring configured agent colors (#62067), and updates to the opencode.ai site deployment processes (#62209). Among the new issues, a critical concern emerged regarding session data management, highlighting unbounded growth without proper cleanup (#62214), indicating a need for urgent attention. Other notable issues include network failures that require service restarts (#62232) and policy management conflicts in subagent writes (#62213).

#### 🚀 New Releases
- [process-daemon-v0.5.0](https://github.com/anomalyco/opencode/releases/tag/process-daemon-v0.5.0) process-daemon v0.5.0

#### ✅ Merged PRs
- [#60817](https://github.com/anomalyco/opencode/pull/60817) fix(tui): enable transcript jumps in subagent sessions
- [#62231](https://github.com/anomalyco/opencode/pull/62231) chore: bench with strobe 0.11.0
- [#62067](https://github.com/anomalyco/opencode/pull/62067) fix(tui): honor configured agent colors in Mini
- [#62221](https://github.com/anomalyco/opencode/pull/62221) docs(console): add Crouton Alpha Free to Go
- [#59770](https://github.com/anomalyco/opencode/pull/59770) fix(tui): navigate the transcript with keypad Home and End
- [#62219](https://github.com/anomalyco/opencode/pull/62219) feat(site): bring services/site up to date with the latest site work
- [#62216](https://github.com/anomalyco/opencode/pull/62216) chore: bench with strobe 0.10.0
- [#61911](https://github.com/anomalyco/opencode/pull/61911) fix(cli): rewrite noninteractive run and remove the V1 bridge
- [#62204](https://github.com/anomalyco/opencode/pull/62204) fix(core): ask external_directory before session_move leaves the project
- [#62209](https://github.com/anomalyco/opencode/pull/62209) feat(site): deploy the opencode.ai site separately from the docs
- [#62207](https://github.com/anomalyco/opencode/pull/62207) fix(www): make site tests pass on Windows

#### 🐛 New Issues
- [#62215](https://github.com/anomalyco/opencode/issues/62215) OpenCode Tool Result Processing Error - Invalid ID Field Format 💬7
- [#62232](https://github.com/anomalyco/opencode/issues/62232) Network failure when calling database cli until `opencode service restart` `pending close` `triaging` 💬6
- [#62213](https://github.com/anomalyco/opencode/issues/62213) Subagent writes denied: built-in tester policy 'edit * deny' is appended after agent rules, overriding agent allows (last-match-wins) `triaging` 💬6
- [#62211](https://github.com/anomalyco/opencode/issues/62211) `edit` tool: documented "space-variant" matching is narrower than its description and error imply (source-cited) 💬5
- [#62234](https://github.com/anomalyco/opencode/issues/62234) desktop browser: preview reloads every ~60s because re-attach disposes tunnels 💬3
- [#62228](https://github.com/anomalyco/opencode/issues/62228) websocket: Bun Desktop does not forward custom Upgrade headers 💬2
- [#62214](https://github.com/anomalyco/opencode/issues/62214) Critical: Session Data Management Issues - Unbounded Growth & No Cleanup `triaging` 💬2
- [#62236](https://github.com/anomalyco/opencode/issues/62236) windows desktop: new project from directory picker stores worktree C:/ instead of the selected folder `pending close` `triaging` 💬1
- [#62233](https://github.com/anomalyco/opencode/issues/62233) no se actualiza el tiempo de uso `pending close` `triaging` 💬1
- [#62225](https://github.com/anomalyco/opencode/issues/62225) MCP: do not send codemode query to LaunchDarkly's hosted server `reproduced` 💬1
- [#62224](https://github.com/anomalyco/opencode/issues/62224) Refund request - no response from help@anoma.ly `pending close` `triaging` 💬1
- [#62220](https://github.com/anomalyco/opencode/issues/62220) [FEATURE]: Add Nimble as a built-in web search provider 💬1
- [#62218](https://github.com/anomalyco/opencode/issues/62218) compaction: auto-compaction triggers far below the threshold after session revert / model refresh `pending close` `triaging` 💬1

#### 🔒 Closed Issues
- [#61902](https://github.com/anomalyco/opencode/issues/61902) Free usage limit not resetting in OpenCode VS Code
- [#61845](https://github.com/anomalyco/opencode/issues/61845) opencode-go: gemini-4-argon returns 403 Endpoint is unavailable, other Go models work
- [#42064](https://github.com/anomalyco/opencode/issues/42064) [FEATURE]: let opencode run ignore an unused inherited stdin pipe
- [#56890](https://github.com/anomalyco/opencode/issues/56890) Using Home/End to move cursor to start or end of line breaks after submitting prompt
- [#61688](https://github.com/anomalyco/opencode/issues/61688) desktop: renderer stuck at ~100% CPU on launch, "server thrashing" crash loop, UI never renders (v2.2.5, Linux)
- [#55533](https://github.com/anomalyco/opencode/issues/55533) tui: NumPad End/Home ignored under kitty keyboard protocol (Windows Terminal reports KP_END 57424)
- [#61867](https://github.com/anomalyco/opencode/issues/61867) mcp: remote SSE-only servers fail with HTTP 405 (V1 SSE fallback missing in V2)
- [#61842](https://github.com/anomalyco/opencode/issues/61842) models: deepseek-v4.1-flash-free rejects image input though advertised as image-capable
- [#61323](https://github.com/anomalyco/opencode/issues/61323) 工作区一直创建失败
- [#61829](https://github.com/anomalyco/opencode/issues/61829) claude-agent: valid Claude Code login rejected on macOS desktop
- [#60727](https://github.com/anomalyco/opencode/issues/60727) [Bug] Opencode2 inside subagent pos1 and end shortcut dont work
- [#61319](https://github.com/anomalyco/opencode/issues/61319) mcp: {env:VAR} in remote headers resolves empty while the service has the variable
- [#61881](https://github.com/anomalyco/opencode/issues/61881) Free Usage Limit (One Message Sent HAPPENED Three TIMES In A Row)
- [#61873](https://github.com/anomalyco/opencode/issues/61873) Go plan: gemini-4-argon returns 403 "Endpoint is unavailable" while other Go models return 200
- [#61872](https://github.com/anomalyco/opencode/issues/61872) 1.19.3 When processing local documents, it often feeds back issues from historical files into the new version of the file
- [#62228](https://github.com/anomalyco/opencode/issues/62228) websocket: Bun Desktop does not forward custom Upgrade headers
- [#61870](https://github.com/anomalyco/opencode/issues/61870) Feedback on Free Message Limit and Daily Lockout
- [#61843](https://github.com/anomalyco/opencode/issues/61843) "tools" entry sent to model without tools capability
- [#61841](https://github.com/anomalyco/opencode/issues/61841) TUI crash: EISDIR: illegal operation on a directory, watch '\home\user\.orca-relay\opencode-overlays\d50fa1d1a99b45960b0360cd4bd58214'
- [#62214](https://github.com/anomalyco/opencode/issues/62214) Critical: Session Data Management Issues - Unbounded Growth & No Cleanup
- [#61807](https://github.com/anomalyco/opencode/issues/61807) mini does not use configured agent colors
- [#59287](https://github.com/anomalyco/opencode/issues/59287) cli: opencode run hangs before session creation on Linux VPS (v2.1.4 / v2.0.32)
- [#56120](https://github.com/anomalyco/opencode/issues/56120) fix(cli): run adds literal quotes to spaced prompt arguments

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 29,035 · **Open issues:** 2,124 · **Last push:** <1h ago

On November 6, 2026, Qwen Code released version 0.26.8, which introduced features such as the ability to run prompt.submit hooks in the OpenTUI terminal and enhanced command handling in the Ink TUI. The desktop version also updated to 0.26.8, featuring a refactored session event delivery loop. Additionally, several key performance improvements were merged, including optimizing native journal snapshots management and enabling batch processing for the Ink TUI. Among the new issues, a critical bug was reported regarding repeated auto-compaction, which turns review-only skills into unauthorized source-code implementations, raising concerns over security and performance.

#### 🚀 New Releases
- [v0.26.8](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.8) Release v0.26.8
- [v0.26.8-nightly.20261105.7bd78683e6](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.8-nightly.20261105.7bd78683e6) Release v0.26.8-nightly.20261105.7bd78683e6
- [sdk-typescript-v0.1.28](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.28) SDK TypeScript Release v0.1.28
- [desktop-v0.26.8](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.26.8) Qwen Code Desktop v0.26.8

#### ✅ Merged PRs
- [#16385](https://github.com/QwenLM/qwen-code/pull/16385) feat(cli): have an Ink TUI turn await its shared tool batch
- [#16410](https://github.com/QwenLM/qwen-code/pull/16410) perf(managed-agent): take native journal snapshots off the tenant guards

#### 🐛 New Issues
- [#16377](https://github.com/QwenLM/qwen-code/issues/16377) Main CI failed: Managed Agent gate — ChildWorkspaceServiceTest.aBusyStorageParksTheStepWithoutSpendingAnAttempt `status/needs-triage` `type/bug` 💬11
- [#16387](https://github.com/QwenLM/qwen-code/issues/16387) Web Shell hooks approval card never shows in multi-workspace hosts: qualified GET /workspaces/:id/hooks returns 403 when folder trust is enabled and the folder is untrusted `priority/P1` `type/bug` `category/security` `scope/trusted-folders` 💬3
- [#16418](https://github.com/QwenLM/qwen-code/issues/16418) Critical: repeated auto-compaction turns review-only skill into unauthorized source-code implementation `priority/P1` `type/bug` `category/core` `scope/session-management` 💬2
- [#16417](https://github.com/QwenLM/qwen-code/issues/16417) Reject an oversized write_file before generating it, not after: no pre-flight check against the output budget `status/need-information` `priority/P2` `category/core` `scope/token-management` 💬2
- [#16392](https://github.com/QwenLM/qwen-code/issues/16392) Let the model replace a junk tool result with a one-line summary (model-judged context pruning) `priority/P2` `type/feature-request` `category/core` `scope/token-management` 💬2
- [#16405](https://github.com/QwenLM/qwen-code/issues/16405) [Test] Publication lifecycle fixture misses the tenant guard it waits for `status/in-review` `priority/P2` `type/bug` `category/development` 💬2
- [#16393](https://github.com/QwenLM/qwen-code/issues/16393) GitHub channel: inbound task recovery never runs again after the task store recovers from a read failure at start-up `priority/P2` `type/bug` `category/integration` `status/ready-for-agent` 💬2
- [#16398](https://github.com/QwenLM/qwen-code/issues/16398) Desktop 0.26.5: UI language is stored per daemon port, so general.language is ignored after every restart `priority/P2` `type/bug` `category/ui` `scope/themes` 💬2
- [#16394](https://github.com/QwenLM/qwen-code/issues/16394) GitHub channel: a pending reply can be posted twice when the pending-delivery file cannot be rewritten after an ambiguous answer `priority/P3` `type/bug` `category/integration` `daemon` 💬2
- [#16359](https://github.com/QwenLM/qwen-code/issues/16359) fix(core): the date reminder repeats the startup date on every session's first turn `priority/P2` `type/bug` `category/core` `status/ready-for-human` 💬2
- [#16380](https://github.com/QwenLM/qwen-code/issues/16380) main Java CI red: ChildWorkspaceServiceTest busy-storage assertion expects a message the code no longer produces `priority/P1` `type/bug` `category/development` `scope/testing` 💬2
- [#16383](https://github.com/QwenLM/qwen-code/issues/16383) Web Shell: hidden execution workspace makes scheduled tasks appear workspace-free `priority/P3` `type/feature-request` `category/ui` `need-discussion` 💬2
- [#16379](https://github.com/QwenLM/qwen-code/issues/16379) Web Shell: rail layout renders no Session source switch, hiding non-default session catalogs from the session list `priority/P3` `type/feature-request` `category/ui` `scope/session-management` 💬2
- [#16371](https://github.com/QwenLM/qwen-code/issues/16371) ci: nightly fault-gate / E2E lanes stay red on a rotating set of timing-sensitive tests `priority/P1` `type/bug` `category/development` `scope/testing` 💬2
- [#16368](https://github.com/QwenLM/qwen-code/issues/16368) Daemon: active /load waits on discarded transcript reads, while replay ring retains large command snapshots `priority/P1` `type/bug` `category/performance` `scope/session-management` 💬2
- [#16425](https://github.com/QwenLM/qwen-code/issues/16425) Workflow agent permission approval never renders — the run hangs indefinitely while the status bar shows it needs approval (observed 0.26.6; reproduced 0.26.8) `priority/P1` `type/bug` `category/core` `scope/interactive` 💬1
- [#16400](https://github.com/QwenLM/qwen-code/issues/16400) Release Failed for v0.26.8 on 2026-11-05 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#16397](https://github.com/QwenLM/qwen-code/issues/16397) Release Failed for v0.26.8 on 2026-11-05 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#16419](https://github.com/QwenLM/qwen-code/issues/16419) Main CI failed: SDK Java — ToolPublicationLifecycleMySqlIT.receiptAndReplayDoNotDeadlockWithSameTenantLifecycleCompletion(boolean)[1] (+2 more) `status/needs-triage` `type/bug`
- [#16399](https://github.com/QwenLM/qwen-code/issues/16399) Strict Skill invocation contract: publish command kind + maxSkills, and require all selected Skills to load before submitting the turn `status/needs-triage` `type/feature-request`
- [#16396](https://github.com/QwenLM/qwen-code/issues/16396) Headless and daemon/ACP runs silently drop stacked /skill tokens past MAX_STACKED_SKILLS `status/needs-triage` `type/bug`
- [#16391](https://github.com/QwenLM/qwen-code/issues/16391) Main CI failed: SDK Java — ChildWorkspaceServiceTest.aBusyStorageParksTheStepWithoutSpendingAnAttempt `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#15173](https://github.com/QwenLM/qwen-code/issues/15173) Main CI failed: E2E Tests — no test identified (latest: 2026-11-03)
- [#16322](https://github.com/QwenLM/qwen-code/issues/16322) Main CI failed: E2E Tests — cli/tool-hook-context.test.ts > … > ACP: delivers PreToolUse and PostToolUseFailure context on a returned err… (+1 more)
- [#14104](https://github.com/QwenLM/qwen-code/issues/14104) Main CI failed: SDK Java — HostedShellLifecycleRecoveryIT.publicDeletionRecoversOriginalResources(String)[1] (+3 more)
- [#14796](https://github.com/QwenLM/qwen-code/issues/14796) Main CI failed: Qwen Code CI — no test identified (latest: 2026-10-28)
- [#13370](https://github.com/QwenLM/qwen-code/issues/13370) Main CI failed: SDK Java — HostedProcessCrashIT.processCrashesNeverReplayHostedToolsOnMySql
- [#14749](https://github.com/QwenLM/qwen-code/issues/14749) Main CI failed: Managed Agent gate — EventTransportMultiNodeGate.aLongBrokerOutageLeavesTheFlagAsTheWayBack
- [#14791](https://github.com/QwenLM/qwen-code/issues/14791) Main CI failed: SDK Java — HostedHookFaultGatesIT.fg13cWorkerKillLeavesTheHookUnknownAndKeepsTheSessionOnMySql (+6 more)
- [#16208](https://github.com/QwenLM/qwen-code/issues/16208) Review request: #15635 (QQ channel proactive delivery) is merge-ready but stalled on two approvals
- [#16091](https://github.com/QwenLM/qwen-code/issues/16091) Main CI failed: Qwen Code CI — src/utils/bun-pty.node-bun.test.ts > … > 'node': 300 no-gap toggles during a 5000-line flood stay byte-exact (+1 more)
- [#15132](https://github.com/QwenLM/qwen-code/issues/15132) Main CI failed: SDK Java — HostedShellLifecycleRecoveryIT.publicDeletionRecoversOriginalResources(String)[2]
- [#16387](https://github.com/QwenLM/qwen-code/issues/16387) Web Shell hooks approval card never shows in multi-workspace hosts: qualified GET /workspaces/:id/hooks returns 403 when folder trust is enabled and the folder is untrusted
- [#15038](https://github.com/QwenLM/qwen-code/issues/15038) Main CI failed: Qwen Code CI on a0e414945502
- [#15262](https://github.com/QwenLM/qwen-code/issues/15262) Main CI failed: Managed Agent gate on c81d9ff6d1ea
- [#15281](https://github.com/QwenLM/qwen-code/issues/15281) Main CI failed: Managed Agent gate on 49f1f623c2e9
- [#16308](https://github.com/QwenLM/qwen-code/issues/16308) bug(core): Llama 3.2 Vision, Llama 4, LLaVA, Pixtral and Mistral Small 3.1/3.2 are treated as text-only
- [#16393](https://github.com/QwenLM/qwen-code/issues/16393) GitHub channel: inbound task recovery never runs again after the task store recovers from a read failure at start-up
- [#16359](https://github.com/QwenLM/qwen-code/issues/16359) fix(core): the date reminder repeats the startup date on every session's first turn
- [#16380](https://github.com/QwenLM/qwen-code/issues/16380) main Java CI red: ChildWorkspaceServiceTest busy-storage assertion expects a message the code no longer produces
- [#16166](https://github.com/QwenLM/qwen-code/issues/16166) Main CI failed: tui-parity — installed/npm-distribution.test.ts > global-lifecycle-enabled native uses actual installed entry and exits na…
- [#15680](https://github.com/QwenLM/qwen-code/issues/15680) Main CI failed: SDK Java — ManagedExtensionCreationMySqlIT.pinsInitialPackagesInTheCreationReceiptAndOnlyPermitsTheirFirstBootstrap

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

**Stars:** 393,996 · **Open issues:** 7,626 · **Last push:** <1h ago

On November 6, 2026, OpenClaw released version 2026.11.1, which enhances safety by preventing failed configuration saves from overwriting secrets, and ensures Gateway authentication remains intact when Tailscale exposure is disabled. Key merged updates include the addition of Gateway membership authority under a Labs flag, as well as significant bug fixes, such as resolving memory issues with commented wiki links and ensuring that interrupted updates do not stop the Gateway. However, the day also saw the emergence of a critical bug where users faced an "invalid-config" issue during candidate admission after upgrading to beta version 2026.11.5-beta.1, indicating ongoing challenges in configuration stability.

#### 🚀 New Releases
- [v2026.11.1](https://github.com/openclaw/openclaw/releases/tag/v2026.11.1) openclaw 2026.11.1

#### ✅ Merged PRs
- [#192335](https://github.com/openclaw/openclaw/pull/192335) feat(openclaw-id): add Gateway membership authority and publication behind the Labs flag
- [#193916](https://github.com/openclaw/openclaw/pull/193916) chore(ui): refresh control ui locales
- [#193893](https://github.com/openclaw/openclaw/pull/193893) fix(infer): forward interrupt signal to audio transcription requests
- [#193904](https://github.com/openclaw/openclaw/pull/193904) fix(pr): accept historical CI after later branch pushes
- [#193852](https://github.com/openclaw/openclaw/pull/193852) fix(ui): navigate images across loaded chat threads
- [#193842](https://github.com/openclaw/openclaw/pull/193842) fix(postgres): settle staged authority at physical commit
- [#193892](https://github.com/openclaw/openclaw/pull/193892) feat(models): end the first provider add in a working chat
- [#193760](https://github.com/openclaw/openclaw/pull/193760) fix(update): Gateway stays stopped when an update is interrupted during Doctor
- [#193843](https://github.com/openclaw/openclaw/pull/193843) fix(ui): keep asset hash renames out of size budgets
- [#193469](https://github.com/openclaw/openclaw/pull/193469) fix(memory-wiki): ignore commented and escaped wikilinks
- [#193887](https://github.com/openclaw/openclaw/pull/193887) test(qa): retire the redundant Swift portability adapter
- [#193795](https://github.com/openclaw/openclaw/pull/193795) fix(release): accept qualified candidate plugin artifacts without repacking
- [#193895](https://github.com/openclaw/openclaw/pull/193895) perf(ui): avoid Chat stylesheet invalidation in Dashboards
- [#193878](https://github.com/openclaw/openclaw/pull/193878) fix(oc-path): stop extra path segments from overwriting frontmatter
- [#193897](https://github.com/openclaw/openclaw/pull/193897) chore(ui): refresh control ui locales
- [#193778](https://github.com/openclaw/openclaw/pull/193778) feat: preview recommended templates in a compact dialog
- [#193838](https://github.com/openclaw/openclaw/pull/193838) improve(ci): avoid application copies in PR routing fixtures
- [#193881](https://github.com/openclaw/openclaw/pull/193881) fix(test): stop launcher disconnect fixture from timing out
- [#193781](https://github.com/openclaw/openclaw/pull/193781) perf: reduce style matching during Control UI interactions
- [#193784](https://github.com/openclaw/openclaw/pull/193784) fix: avoid full-tree work when refreshing prepared workers
- [#193835](https://github.com/openclaw/openclaw/pull/193835) fix: show manual-only skills in composer completions
- [#193883](https://github.com/openclaw/openclaw/pull/193883) perf(skills): avoid rebuilding row status on every search character
- [#193888](https://github.com/openclaw/openclaw/pull/193888) chore(ui): refresh control ui locales
- [#193849](https://github.com/openclaw/openclaw/pull/193849) fix: capitalize Search tooltip label
- [#192331](https://github.com/openclaw/openclaw/pull/192331) fix(onboarding): keep npx Gateway services running after cache cleanup
- [#193864](https://github.com/openclaw/openclaw/pull/193864) fix(ui): preserve compact task progress markers
- [#193836](https://github.com/openclaw/openclaw/pull/193836) fix(mattermost): person posts with a link-preview card are dropped as system posts
- [#193745](https://github.com/openclaw/openclaw/pull/193745) fix(update): cleanup blocks forever on a rollback original already gone after an interrupted cleanup
- [#193802](https://github.com/openclaw/openclaw/pull/193802) refactor(agents): separate exec result data contracts
- [#193865](https://github.com/openclaw/openclaw/pull/193865) improve(ci): select node contract proof owners on pull requests
- [#193834](https://github.com/openclaw/openclaw/pull/193834) feat(ci): select independent Android test owners
- [#193846](https://github.com/openclaw/openclaw/pull/193846) test(qa): retire the orphan MCP fixture gate
- [#193861](https://github.com/openclaw/openclaw/pull/193861) perf(ui): reduce style work during typing and navigation
- [#193839](https://github.com/openclaw/openclaw/pull/193839) fix(ci): remove unused Talk catalog test helper
- [#193820](https://github.com/openclaw/openclaw/pull/193820) fix(cron): keep saved group and icon across fresh runs
- [#193856](https://github.com/openclaw/openclaw/pull/193856) fix(ui): allow deleting agents from settings menu
- [#193800](https://github.com/openclaw/openclaw/pull/193800) fix(release): defer plugin OIDC auth failures
- [#193853](https://github.com/openclaw/openclaw/pull/193853) fix(chat): hide restart recovery input from the chat feed
- [#193830](https://github.com/openclaw/openclaw/pull/193830) feat(ci): select Python skill suites by changed owner
- [#193533](https://github.com/openclaw/openclaw/pull/193533) improve(ui): promote the Open in session submenu
- [#193310](https://github.com/openclaw/openclaw/pull/193310) fix(ui): return focus to the People filter trigger after selection
- [#193848](https://github.com/openclaw/openclaw/pull/193848) fix(ui): restore native link menu icon spacing
- [#193416](https://github.com/openclaw/openclaw/pull/193416) perf(control-ui): keep warm composer controls stable through reconnect
- [#193748](https://github.com/openclaw/openclaw/pull/193748) fix(ci): drain sibling runs after aggregate rejection
- [#193807](https://github.com/openclaw/openclaw/pull/193807) perf(ui): speed up theme color readback and audit native rendering work
- [#193826](https://github.com/openclaw/openclaw/pull/193826) fix(ci): select tests for affected package source exports
- [#193743](https://github.com/openclaw/openclaw/pull/193743) fix(update): after a reboot, update cleanup can never reclaim older rollback backups
- [#193750](https://github.com/openclaw/openclaw/pull/193750) fix(release): wait for expanding artifact job inventories
- [#193786](https://github.com/openclaw/openclaw/pull/193786) fix: MCP App selections disappear from sent message history
- [#193794](https://github.com/openclaw/openclaw/pull/193794) fix(context-engine): durable turn commits drop prompt usage, so engines never see real prompt size
- [#193803](https://github.com/openclaw/openclaw/pull/193803) fix(cron): preserve failure alert topic when cloning
- [#193386](https://github.com/openclaw/openclaw/pull/193386) test(ui): verify typing caret animation states
- [#157114](https://github.com/openclaw/openclaw/pull/157114) refactor(gateway): make fixture teardown wait for owned work
- [#193791](https://github.com/openclaw/openclaw/pull/193791) fix(ci): repair state worker and release validation fixtures
- [#188057](https://github.com/openclaw/openclaw/pull/188057) feat(knowledge): add decision-model recall gate
- [#193767](https://github.com/openclaw/openclaw/pull/193767) fix(release): restore missing 11.5 release tooling
- [#193639](https://github.com/openclaw/openclaw/pull/193639) fix: reduce standalone metadata lookup cost
- [#193640](https://github.com/openclaw/openclaw/pull/193640) fix: restore standalone AOT module loading
- [#193689](https://github.com/openclaw/openclaw/pull/193689) perf(ui): reduce medium transcript fragment work
- [#193764](https://github.com/openclaw/openclaw/pull/193764) fix(release): backport remaining tooling repairs to 2026.11.2
- [#193600](https://github.com/openclaw/openclaw/pull/193600) fix(ios): keep New session options reachable at accessibility sizes
- [#193070](https://github.com/openclaw/openclaw/pull/193070) fix(ui): keep catalog and stale-chunk recovery windows on monotonic time
- [#193774](https://github.com/openclaw/openclaw/pull/193774) fix: reduce repeated repository scans during cloud startup
- [#193777](https://github.com/openclaw/openclaw/pull/193777) feat(openclaw-id): protocol for owner reset vouched for by the Gateway key
- [#193805](https://github.com/openclaw/openclaw/pull/193805) fix(ci): stop flagging the prepared workspace preload as unused
- [#193797](https://github.com/openclaw/openclaw/pull/193797) improve: install fewer dependencies for mobile releases
- [#193658](https://github.com/openclaw/openclaw/pull/193658) fix: enable dictation for session-scoped guests
- [#193707](https://github.com/openclaw/openclaw/pull/193707) fix(browser): navigation fails with stale tool invocation authority after the first call
- [#193792](https://github.com/openclaw/openclaw/pull/193792) test(ui): include moved elements in Systems layout failures
- [#193116](https://github.com/openclaw/openclaw/pull/193116) fix(knowledge): remember retries fail after interrupted publication
- [#193068](https://github.com/openclaw/openclaw/pull/193068) fix(browser): navigation fails with Invalid InterceptionId when a page cancels a document request
- [#193779](https://github.com/openclaw/openclaw/pull/193779) fix(agents): normal turns ignore a model's context cap when only contextWindow is configured
- [#184755](https://github.com/openclaw/openclaw/pull/184755) fix(knowledge): show read and write settings enabled on first install
- [#193771](https://github.com/openclaw/openclaw/pull/193771) improve: rank Control UI CPU costs across census flows
- [#193645](https://github.com/openclaw/openclaw/pull/193645) fix(update): repair refuses forever when plugin files, config or snapshots changed after the update
- [#193773](https://github.com/openclaw/openclaw/pull/193773) fix: MCP App workspaces show extra page chrome and generic icons
- [#193780](https://github.com/openclaw/openclaw/pull/193780) docs: clarify fixes in v2026.11.1 patch release notes
- [#193765](https://github.com/openclaw/openclaw/pull/193765) test: reconcile approved inherited test-line ceiling
- [#193782](https://github.com/openclaw/openclaw/pull/193782) chore(ui): refresh control ui locales
- [#193763](https://github.com/openclaw/openclaw/pull/193763) fix(ci): isolate closeout tests from host ripgrep
- [#193742](https://github.com/openclaw/openclaw/pull/193742) feat(knowledge): keyword search finds current records through superseded wording
- [#193732](https://github.com/openclaw/openclaw/pull/193732) improve(mobile): scope release-note history to public baselines
- [#193762](https://github.com/openclaw/openclaw/pull/193762) docs: include agent Templates in ClawHub skill
- [#187423](https://github.com/openclaw/openclaw/pull/187423) fix(knowledge): keep display truncation surrogate-safe
- [#193758](https://github.com/openclaw/openclaw/pull/193758) fix(ui): preserve slash-command keyboard selection after native select events
- [#193756](https://github.com/openclaw/openclaw/pull/193756) fix(workers): avoid repeated snapshot verification and expose preparation phases
- [#193768](https://github.com/openclaw/openclaw/pull/193768) chore(ui): refresh control ui locales
- [#193665](https://github.com/openclaw/openclaw/pull/193665) feat(chat): send pending steers now without stopping the run
- [#193728](https://github.com/openclaw/openclaw/pull/193728) feat(openclaw-id): advertise accepted protocol versions in the signed snapshot
- [#193735](https://github.com/openclaw/openclaw/pull/193735) fix: retain PostgreSQL admission errors at retry deadline
- [#193754](https://github.com/openclaw/openclaw/pull/193754) test(ui): wait for owner assignment submenu readiness
- [#193662](https://github.com/openclaw/openclaw/pull/193662) fix(workers): avoid rehashing unchanged snapshot workspaces
- [#193755](https://github.com/openclaw/openclaw/pull/193755) chore(ui): refresh control ui locales
- [#193705](https://github.com/openclaw/openclaw/pull/193705) fix(ci): account for gateway ingress recovery SDK type
- [#193718](https://github.com/openclaw/openclaw/pull/193718) refactor(talk): separate provider host contexts
- [#193694](https://github.com/openclaw/openclaw/pull/193694) feat(plugins): add short starter prompts with activation confirmation
- [#193733](https://github.com/openclaw/openclaw/pull/193733) fix(ci): isolate ratchet fixtures from release targets
- [#193724](https://github.com/openclaw/openclaw/pull/193724) test(queue): remove the retired Slack enqueue helper
- [#193730](https://github.com/openclaw/openclaw/pull/193730) fix: preserve crash recovery through slow database preparation
- [#193667](https://github.com/openclaw/openclaw/pull/193667) fix: reuse ready cloud workers across repository commits
- [#193710](https://github.com/openclaw/openclaw/pull/193710) fix: warn at startup for missing Node certificate patches
- [#193449](https://github.com/openclaw/openclaw/pull/193449) fix(release): remove the 2026.11.1 notes attribution exception
- [#193723](https://github.com/openclaw/openclaw/pull/193723) chore(release): update appcast for 2026.11.1
- [#193691](https://github.com/openclaw/openclaw/pull/193691) fix(test): recognize Knowledge directory sync dependency
- [#193731](https://github.com/openclaw/openclaw/pull/193731) chore(ui): measure native paste and WebKit giant runs
- [#193313](https://github.com/openclaw/openclaw/pull/193313) fix: stop replaying messages discarded by queue caps
- [#193711](https://github.com/openclaw/openclaw/pull/193711) fix(oc-path): Markdown field unions miss wildcard alternatives
- [#193664](https://github.com/openclaw/openclaw/pull/193664) fix(gateway): bound memory when publishing large workspace results
- [#191552](https://github.com/openclaw/openclaw/pull/191552) fix(cli): setup continues before the Gateway is ready after gateway install
- [#187884](https://github.com/openclaw/openclaw/pull/187884) fix: require approval for dynamic shell predicates
- [#191554](https://github.com/openclaw/openclaw/pull/191554) fix(openai): Codex login says manual entry is required while browser sign-in still works
- [#193702](https://github.com/openclaw/openclaw/pull/193702) fix(update): a leftover snapshot copy fails the update even though the state read succeeded
- [#191550](https://github.com/openclaw/openclaw/pull/191550) fix(onboard): Quick start disappears after Ctrl-C during a first run
- [#193677](https://github.com/openclaw/openclaw/pull/193677) feat: expire disposable agent scratch after 24 hours
- [#193654](https://github.com/openclaw/openclaw/pull/193654) fix(triage): closing the terminal leaves Doctor's snapshot copy on disk
- [#193676](https://github.com/openclaw/openclaw/pull/193676) fix: completed task worktrees and artifacts remain after merge
- [#193656](https://github.com/openclaw/openclaw/pull/193656) fix(sqlite): inspection tasks that run out of time leave their snapshot copy behind
- [#193716](https://github.com/openclaw/openclaw/pull/193716) perf(gateway): account shared session list selection references
- [#193381](https://github.com/openclaw/openclaw/pull/193381) fix(agents): preserve unanswered chat input through replay
- [#193632](https://github.com/openclaw/openclaw/pull/193632) fix(update): repair refuses forever when a plugin changed after the update
- [#193657](https://github.com/openclaw/openclaw/pull/193657) fix: quiet automatic session observer failures in chat
- [#193653](https://github.com/openclaw/openclaw/pull/193653) fix(crabbox): keep warm-image capture working with stale node PIDs
- [#193688](https://github.com/openclaw/openclaw/pull/193688) feat(openclaw-id): version-specific protocol validation and versioning rules
- [#192601](https://github.com/openclaw/openclaw/pull/192601) fix(ci): route npm release source check per dispatch and serialize its oxlint shards
- [#193706](https://github.com/openclaw/openclaw/pull/193706) chore(ui): refresh control ui locales
- [#193692](https://github.com/openclaw/openclaw/pull/193692) perf(gateway): share equivalent session broadcast delivery plans
- [#193696](https://github.com/openclaw/openclaw/pull/193696) perf(gateway): pack nine ASCII characters in row delta fields
- [#193652](https://github.com/openclaw/openclaw/pull/193652) fix(sqlite): Gateway never frees snapshot copies left in other cache namespaces
- [#193695](https://github.com/openclaw/openclaw/pull/193695) perf(gateway): avoid copying session partitions before filtering
- [#193624](https://github.com/openclaw/openclaw/pull/193624) fix: preserve plugin APIs in trimmed AOT builds
- [#193625](https://github.com/openclaw/openclaw/pull/193625) fix(telegram): release polling bindings when startup is canceled
- [#193686](https://github.com/openclaw/openclaw/pull/193686) fix(test): align bundled recovery with stable service runtime
- [#193564](https://github.com/openclaw/openclaw/pull/193564) fix: preserve queued messages during failed preparation and reload
- [#193628](https://github.com/openclaw/openclaw/pull/193628) refactor(media): separate provider contracts from request data
- [#193674](https://github.com/openclaw/openclaw/pull/193674) perf(gateway): avoid duplicate sidebar recipient vectors
- [#193558](https://github.com/openclaw/openclaw/pull/193558) fix: preserve crash recovery across chat turns and commands
- [#193698](https://github.com/openclaw/openclaw/pull/193698) fix: label sidebar command palette button as search
- [#193687](https://github.com/openclaw/openclaw/pull/193687) fix(knowledge): tools fail with "authority no longer active" after the first turn of a warm Claude Code session
- [#193675](https://github.com/openclaw/openclaw/pull/193675) perf(gateway): reuse prepared run state when presenting session rows
- [#193174](https://github.com/openclaw/openclaw/pull/193174) fix: interrupted triage leaves full-size SQLite snapshot copies in the cache
- [#193504](https://github.com/openclaw/openclaw/pull/193504) fix(ios): clear stale folder errors after Load More succeeds
- [#193663](https://github.com/openclaw/openclaw/pull/193663) fix(ci): remove unused helpers blocking dependency checks
- [#193666](https://github.com/openclaw/openclaw/pull/193666) fix(ui): keep shared Markdown from loading Chat on other pages
- [#193683](https://github.com/openclaw/openclaw/pull/193683) fix(test): align scheduled child tools with retained admin authority
- [#193680](https://github.com/openclaw/openclaw/pull/193680) perf(gateway): reuse captured model account source config
- [#193681](https://github.com/openclaw/openclaw/pull/193681) perf(control-ui): avoid owner roster reads for unchanged nonowners
- [#193690](https://github.com/openclaw/openclaw/pull/193690) chore(i18n): refresh native locales
- [#193648](https://github.com/openclaw/openclaw/pull/193648) fix(doctor): inspection stages a full copy of the live state database on every run
- [#193605](https://github.com/openclaw/openclaw/pull/193605) fix(ui): converted sessions show import controls instead of native actions
- [#193229](https://github.com/openclaw/openclaw/pull/193229) fix: leftover SQLite snapshot copies from Doctor and triage are never reclaimed
- [#193646](https://github.com/openclaw/openclaw/pull/193646) fix(ui): stop WebKit resize errors while scrolling transcripts

#### 🐛 New Issues
- [#193157](https://github.com/openclaw/openclaw/issues/193157) [Bug]: Update to 2026.11.5-beta.1 refused at candidate admission (invalid-config) while config still has retired agents.defaults.heartbeat `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬6
- [#193659](https://github.com/openclaw/openclaw/issues/193659) [Bug]: Rabbit R1 photos are processed but missing from Control UI chat history `bug` `no-stale` `bug:behavior` `P2` 💬5
- [#193158](https://github.com/openclaw/openclaw/issues/193158) [Bug]: Telegram: callbacks run inside a reply run lose the plugin instance, so spooled-update retries fail with "Telegram runtime not initialized" `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#193591](https://github.com/openclaw/openclaw/issues/193591) Update failure: package-update (2026.10.10) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#193262](https://github.com/openclaw/openclaw/issues/193262) [Bug]: Docker startup fails when the state dir is bind-mounted from a Windows drive (ENOENT fstat after atomic write) `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#193727](https://github.com/openclaw/openclaw/issues/193727) [Bug]: iMessage DM replies (incl. /new, /status) fail same-account binding when the previous message's cached selectors don't match the chat_id target `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬3
- [#193744](https://github.com/openclaw/openclaw/issues/193744) [Bug]: Android xAI Talk closes with "no live response owner" — correlated client/gateway logs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬3
- [#193725](https://github.com/openclaw/openclaw/issues/193725) [Bug]: gateway-relay Talk closes after talk.event ECONNRESET during agent consult `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬3
- [#193627](https://github.com/openclaw/openclaw/issues/193627) proc-safe: 'incomplete: unterminated Darwin environment' on macOS 15.x when reading environment keys (process census fails, blocks doctor/update maintenance) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#193429](https://github.com/openclaw/openclaw/issues/193429) Telegram polling can hold gateway shutdown while bot initialization is pending `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#193401](https://github.com/openclaw/openclaw/issues/193401) [Bug]: update repair self-fences when current and legacy executor custody resolve to the same database `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#193383](https://github.com/openclaw/openclaw/issues/193383) doctor:skill-workshop-tool-policy fails with "Cannot verify the installed tool authority" for a configured agent — survives --fix and --session-sqlite recover `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬3
- [#193163](https://github.com/openclaw/openclaw/issues/193163) [Bug]: Git update swaps the live checkout of a serving Gateway before a fallible database backup, then rolls back (two unclean restarts) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬3
- [#193252](https://github.com/openclaw/openclaw/issues/193252) [Bug]: Sandboxed agent file delivery fails: all four Markdown deliverables show File not found `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬3
- [#193446](https://github.com/openclaw/openclaw/issues/193446) [Feature]: Preserve native browser identity for managed headless website logins `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬2
- [#193824](https://github.com/openclaw/openclaw/issues/193824) [Bug]: macOS app: reopening a closed Dashboard (remote Gateway) starts a new WebKit process and leaves the old one resident `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#193845](https://github.com/openclaw/openclaw/issues/193845) Shared-state WAL warning repeats every maintenance pass when Litestream holds a reader (WAL bounded) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#193734](https://github.com/openclaw/openclaw/issues/193734) package-swap permanently refuses updates on user-owned npm-global install: 'Package publication recovery permissions are unsafe' (2026.9.8 first hop, 10+ attempts, post-repair re-fire included) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#193789](https://github.com/openclaw/openclaw/issues/193789) [Bug]: iOS Sessions presents an incomplete list as complete after a later-page failure `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#193303](https://github.com/openclaw/openclaw/issues/193303) "Merged and removed orphaned user message" writes a leaf rewind, which marks the transcript index for a full rebuild; on large sessions the UI shows "session history is rebuilding" for minutes and the turn waits `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#193722](https://github.com/openclaw/openclaw/issues/193722) [Feature]: Optional host-owned single-attempt delivery for direct channel replies `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#193516](https://github.com/openclaw/openclaw/issues/193516) [Bug]: model assignment not persisting after 2026.10.10 `bug` `regression` 💬2
- [#193159](https://github.com/openclaw/openclaw/issues/193159) [Bug]: Telegram: an incomplete ask_user reply gets no "answer was not accepted" notice and is replayed into the next message `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#193684](https://github.com/openclaw/openclaw/issues/193684) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬2
- [#193673](https://github.com/openclaw/openclaw/issues/193673) [Bug]: Windows update backup capture stops on EBUSY without identifying file `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬2
- [#193172](https://github.com/openclaw/openclaw/issues/193172) Telegram inbound media silently fails on NFS-backed state (renameat2 RENAME_NOREPLACE → EINVAL): 5 weeks of dead media, zero error lines; link+unlink fallback shim verified in production `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#193462](https://github.com/openclaw/openclaw/issues/193462) [Bug]: plugins install fails when ~/.openclaw is a symlink — "Atomic replace parent must be a real directory" `P2` `impact:ux-friction` 💬2
- [#193594](https://github.com/openclaw/openclaw/issues/193594) [Bug]: Memory Core CLI ignores configured systemAgent for single-agent commands `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#193194](https://github.com/openclaw/openclaw/issues/193194) [Bug]: Provider 403 "Endpoint is unavailable" is treated as an auth failure and blocks every model on the provider `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#193535](https://github.com/openclaw/openclaw/issues/193535) cli: infer web search/fetch --provider rejects valid provider ids with different casing `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#193377](https://github.com/openclaw/openclaw/issues/193377) [Bug]: 2026.10.10 Codex local-relay 502 recurs after Continue; merged recovery fix absent from bundle `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#193454](https://github.com/openclaw/openclaw/issues/193454) [Feature]: BeLive AI Hub named model-provider integration `P3` `impact:ux-friction` 💬2
- [#193497](https://github.com/openclaw/openclaw/issues/193497) [Bug]: Old Git plugin folder remains after an update timeout and recovery `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#193441](https://github.com/openclaw/openclaw/issues/193441) Update failure: package-update (2026.10.10) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#193366](https://github.com/openclaw/openclaw/issues/193366) Gateway restart leaves a 'running' but non-listening process (port never bound); daemon restart refuses with GATEWAY_RESTART_PREPARATION_REFUSED yet launchd restart actually succeeds `P1` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#193305](https://github.com/openclaw/openclaw/issues/193305) [Feature]: Extend gateway suspension so host supervisors can respect a maintenance window `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#193155](https://github.com/openclaw/openclaw/issues/193155) Active Memory trigger recall never matches Chinese or Japanese triggers in unspaced messages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#193914](https://github.com/openclaw/openclaw/issues/193914) [Feature]: Default contextTokens cap (128k) and Control UI slider for metered API providers `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#193900](https://github.com/openclaw/openclaw/issues/193900) Control UI "Add to chat" selection comments are silently dropped when the session is busy: orphan repair merges only text, so attachment-only user messages vanish `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193770](https://github.com/openclaw/openclaw/issues/193770) [Bug]: Missing account pin blocks model recovery `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193891](https://github.com/openclaw/openclaw/issues/193891) [Bug]: advisor review fork fails 100% of the time — prepared model runtime owner was not published (not fixed in 2026.11.1) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#193877](https://github.com/openclaw/openclaw/issues/193877) before_tool_call: ctx.requester empty for CLI-backend (claude-cli) tool calls `P2` `impact:security` `issue-rating: 🦪 silver shellfish` 💬1
- [#193811](https://github.com/openclaw/openclaw/issues/193811) [Bug]: Mattermost drops user posts that carry a message attachment (type "slack_attachment") `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193879](https://github.com/openclaw/openclaw/issues/193879) [Bug]: macOS node worker rescans Claude session folders every second after the Claude sessions list is shown once `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193868](https://github.com/openclaw/openclaw/issues/193868) [Bug]: exec code-mode bridge corrupts after hours of uptime — every shell call fails with zsh parse errors (2026.10.10 regression) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#193862](https://github.com/openclaw/openclaw/issues/193862) [Bug]: Native chat rebuilds every reply's source cards each time a transcript message arrives `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193857](https://github.com/openclaw/openclaw/issues/193857) [Bug]: sessions_spawn completion that lands during sessions_yield settle never wakes the parent (2026.10.5) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#193858](https://github.com/openclaw/openclaw/issues/193858) [Bug]: Every SQLite connection open on macOS forks `mount` synchronously, even for local APFS state `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193855](https://github.com/openclaw/openclaw/issues/193855) [Feature]: Let scheduled agent turns follow their agent's inference account instead of a per-job binding `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#193850](https://github.com/openclaw/openclaw/issues/193850) [Bug]: Control UI reload applies the same accent palette three times and forces extra style recalculation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193840](https://github.com/openclaw/openclaw/issues/193840) [Bug]: Config snapshot reads run a sync filesystem case probe for every agent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193793](https://github.com/openclaw/openclaw/issues/193793) [Bug]: Cloning a cron job drops its failure-alert topic `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193832](https://github.com/openclaw/openclaw/issues/193832) [Feature]: Keep the IP address parser out of the Control UI chat boot bundle `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193828](https://github.com/openclaw/openclaw/issues/193828) [Bug]: Android Archived threads stops at 200 conversations without indicating more are available `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193831](https://github.com/openclaw/openclaw/issues/193831) [Feature]: Operator-approved bounded session facts for user-installed plugins `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#193821](https://github.com/openclaw/openclaw/issues/193821) [Bug]: iOS Share removes indentation and blank lines from imported text `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193813](https://github.com/openclaw/openclaw/issues/193813) [Bug]: iOS deletes a finished voice note when other attachments fill the upload budget `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193817](https://github.com/openclaw/openclaw/issues/193817) [Bug]: iOS Rewind overwrites text and attachments added while the request is pending `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193810](https://github.com/openclaw/openclaw/issues/193810) [Bug]: Android accepts video attachments that exceed its WebSocket limit and remain queued `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193825](https://github.com/openclaw/openclaw/issues/193825) [Bug]: First chat can fail when the paired workspace node disconnects during skill discovery `P1` `clawsweeper:source-repro` `impact:message-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#193822](https://github.com/openclaw/openclaw/issues/193822) [Feature]: expose cron.list's sessionKey filter in the cron tool's list and openclaw cron list `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#193806](https://github.com/openclaw/openclaw/issues/193806) [Bug]: Windows Gmail dependency lookup ignores PATH installation priority `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193799](https://github.com/openclaw/openclaw/issues/193799) [Bug]: Native chat removes literal timestamps and message IDs from fenced code blocks `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193796](https://github.com/openclaw/openclaw/issues/193796) [Bug]: macOS dark appearance makes the chat typing box nearly invisible `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#193788](https://github.com/openclaw/openclaw/issues/193788) [Bug]: Prompt-injection classifiers flag normal agent turns because of OpenClaw's own injected wording `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-info` 💬1
- [#193785](https://github.com/openclaw/openclaw/issues/193785) [Bug]: Windows read corrupts ANSI text when PATH omits PowerShell `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193772](https://github.com/openclaw/openclaw/issues/193772) [Bug]: Codex plugin install fails under sandbox that denies exec: platform check uses access(X_OK) and gets EPERM `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193766](https://github.com/openclaw/openclaw/issues/193766) Feature: WhatsApp group description is discarded before any agent or plugin can read it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193761](https://github.com/openclaw/openclaw/issues/193761) [P1] Running Codex helper locks users out of parent conversation: new messages fail instead of being accepted `P1` `impact:session-state` `impact:message-loss` 💬1
- [#193753](https://github.com/openclaw/openclaw/issues/193753) memory-host-sdk: export memory-core's hybrid ranking so a memory corpus supplement can rank like memory_search `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193740](https://github.com/openclaw/openclaw/issues/193740) [Bug]: Native chat re-parses message Markdown for citations on every row render `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193737](https://github.com/openclaw/openclaw/issues/193737) [Feature]: Compile constant chat preview regexes once instead of per call `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193736](https://github.com/openclaw/openclaw/issues/193736) [Bug]: gateway emits repeated File descriptor N closed but not opened in unmanaged mode warnings during plugin source materialization `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#193726](https://github.com/openclaw/openclaw/issues/193726) CLI runner: apply #36280's skill-key strip to the CLI-backend child `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#193717](https://github.com/openclaw/openclaw/issues/193717) Scope a skill's injected key to that skill's own processes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#193708](https://github.com/openclaw/openclaw/issues/193708) Broadcast a warning to configured channels/agents before deferred config-restart restarts fire `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193709](https://github.com/openclaw/openclaw/issues/193709) [Bug]: Recovery bootstrap blocked after state migration on 2026.10.2 when targeting 2026.10.10 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193693](https://github.com/openclaw/openclaw/issues/193693) [Feature]: Control UI: keep conversation history before an automatic idle/daily reset reachable `P2` `impact:ux-friction` 💬1
- [#193492](https://github.com/openclaw/openclaw/issues/193492) [Bug]: Skill Workshop experience review reads unbounded model context and exhausts transcript worker on large sessions (2026.10.10) `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#193641](https://github.com/openclaw/openclaw/issues/193641) [i18n] User-facing status and error messages are English-only, no locale hook `bug` `regression` `P2` `impact:ux-friction` 💬1
- [#193620](https://github.com/openclaw/openclaw/issues/193620) test: make device-token authority regression deterministic `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193612](https://github.com/openclaw/openclaw/issues/193612) [Bug]: Cron trigger cache reuses stale sandbox identity in backend-replacement reproduction 💬1
- [#193489](https://github.com/openclaw/openclaw/issues/193489) Let the model replace a junk tool result with a one-line summary (model-judged context pruning) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193517](https://github.com/openclaw/openclaw/issues/193517) Cron automations fail with 'no recorded inference account' after stale per-agent auth-profile state goes unnoticed by doctor --lint `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#193540](https://github.com/openclaw/openclaw/issues/193540) [Bug]: Starting with version 2026.11.1, the iOS 18 web UI is no longer accessible. `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#193528](https://github.com/openclaw/openclaw/issues/193528) telegram: ordered lists with nested bullets get a blank line between each item and its sub-bullets `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193593](https://github.com/openclaw/openclaw/issues/193593) Codex app-server stdio spawns (and procfs checks) run `child_process.spawn` on the gateway main thread; ~15% of main-thread CPU on a large gateway `P2` `impact:crash-loop` 💬1
- [#193193](https://github.com/openclaw/openclaw/issues/193193) [Bug]: 2026.10.10 materializes every compressed session archive into /tmp — 495 files / ~620 MB on a 1 GiB tmpfs, 24h TTL, no size cap `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#193590](https://github.com/openclaw/openclaw/issues/193590) [Bug]: 2026.11.1 retained-session rehearsal stalls before inference; CPU dominated by admission publish `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#193585](https://github.com/openclaw/openclaw/issues/193585) [Bug]: Config-driven directory query misses canonically equivalent (NFD/NFC) group names `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193339](https://github.com/openclaw/openclaw/issues/193339) image_generate, video_generate and music_generate are missing when the provider key is set only in models.providers.<id>.apiKey `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193580](https://github.com/openclaw/openclaw/issues/193580) GitHub Copilot: Claude Opus 5.5 tool loops re-write the whole prompt cache on every request `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193576](https://github.com/openclaw/openclaw/issues/193576) [Bug]: OAuth profile round-robin stops rotating after the shared auth store moves to the state database `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193571](https://github.com/openclaw/openclaw/issues/193571) voice-call: optional Twilio STIR/SHAKEN attestation requirement for inbound call admission `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#193560](https://github.com/openclaw/openclaw/issues/193560) Update failure: gateway-recovery-verification (2026.10.10) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#193534](https://github.com/openclaw/openclaw/issues/193534) config: get/set/unset cannot address a mixed-case agents.entries key by the id agents list shows `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193527](https://github.com/openclaw/openclaw/issues/193527) nodes: macOS node host version shown as ui instead of core in nodes describe/status `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193526](https://github.com/openclaw/openclaw/issues/193526) [Bug]: [Bug]: Windows browser control blocked by listener-owner verification `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#193529](https://github.com/openclaw/openclaw/issues/193529) plugins: uninstall leaves home-relative (~/...) load paths, plugin stays discovered `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193521](https://github.com/openclaw/openclaw/issues/193521) [Bug]: proc-safe prebuilt requires GLIBC_2.33/2.34, unusable on glibc 2.32 hosts `bug` `regression` `P1` `impact:other` 💬1
- [#193511](https://github.com/openclaw/openclaw/issues/193511) Update failure: invalid-config (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#193503](https://github.com/openclaw/openclaw/issues/193503) [Feature]: Add primary and fallback model support for Exec Guardian auto-review `enhancement` `P2` `impact:auth-provider` 💬1
- [#193500](https://github.com/openclaw/openclaw/issues/193500) [Bug]: iOS Files repeats the final page after an insertion shifts pagination `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193490](https://github.com/openclaw/openclaw/issues/193490) [Bug]: iOS Custom Headers accepts an invalid name then silently discards it `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193485](https://github.com/openclaw/openclaw/issues/193485) [Bug]: iOS New session options clips controls at accessibility text sizes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193481](https://github.com/openclaw/openclaw/issues/193481) [Bug]: message tool send without final:false ends the turn under automatic visible-replies, silently dropping the final text (10.10 regression) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193478](https://github.com/openclaw/openclaw/issues/193478) fix(discord): bare usernames ending in digits are never resolved via directory lookup `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193477](https://github.com/openclaw/openclaw/issues/193477) [Bug] Feishu inbound is not persisted before dispatch: a failed dispatch loses the message with no retry and no dead-letter (the "Retry the message." text is not implemented) `P1` `impact:message-loss` 💬1
- [#193471](https://github.com/openclaw/openclaw/issues/193471) Windows MSIX 2026.10.9 returns approval-request-failed after recording allow-once `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#193465](https://github.com/openclaw/openclaw/issues/193465) [Bug]: claude-cli turns lose Claude Code's native WebSearch since managed mediation, and `managedNativeTools` cannot restore it (Agent/Workflow only) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#193460](https://github.com/openclaw/openclaw/issues/193460) [Bug]: image_generate logs 'completion wake failed … handoff deadline' while completion is only deferred behind the requester run (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#193439](https://github.com/openclaw/openclaw/issues/193439) Gateway: disconnected requests can be reported as “Gateway requester profile changed” during iOS background refresh `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193444](https://github.com/openclaw/openclaw/issues/193444) [Bug]: Host Desktop readiness probes leave VncAuth handshakes incomplete and trigger TigerVNC loopback blacklisting `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193445](https://github.com/openclaw/openclaw/issues/193445) [Bug]: Patched direct dependencies leave affected transitive copies installed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193419](https://github.com/openclaw/openclaw/issues/193419) [Bug]: Background skill review sends an unsupported `offset` argument to skill_workshop, logging two Code Mode errors per pass `P3` `impact:other` 💬1
- [#193418](https://github.com/openclaw/openclaw/issues/193418) [Bug]: Legacy automations fail after upgrade with no account authorization in Control UI `P1` `impact:auth-provider` `impact:ux-friction` 💬1
- [#193407](https://github.com/openclaw/openclaw/issues/193407) [needs-security-review] Clarify external Slack cross-channel own-post edit/delete authority `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#193402](https://github.com/openclaw/openclaw/issues/193402) [Bug]: fenced IDENTITY.md examples overwrite live identity and are removed by updates `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193394](https://github.com/openclaw/openclaw/issues/193394) [Feature]: Final request-overhead budget contract for first context-engine assembly `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193395](https://github.com/openclaw/openclaw/issues/193395) [Feature]: Stable task and attempt-completion facts in subagent listings `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193396](https://github.com/openclaw/openclaw/issues/193396) [Feature]: Host-admitted current-automation read scope for plugin tools `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#193387](https://github.com/openclaw/openclaw/issues/193387) [Feature]: Explicit default-thinking policy for isolated plugin completions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193388](https://github.com/openclaw/openclaw/issues/193388) [Feature]: Distinguish empty sessions from unobserved context usage `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193379](https://github.com/openclaw/openclaw/issues/193379) [Bug]: TTS-only replay loses voice-delivery context in OpenAI Completions `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#193368](https://github.com/openclaw/openclaw/issues/193368) [Feature]: List and fetch session artifacts from the CLI (sessions artifacts) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#193364](https://github.com/openclaw/openclaw/issues/193364) Expose explicit MCP OAuth refresh-token lifetime in operator status `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193332](https://github.com/openclaw/openclaw/issues/193332) [Feature]: Endpoint grouping by environment with bulk operations (dev/staging/prod/personal/work) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#193362](https://github.com/openclaw/openclaw/issues/193362) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#193357](https://github.com/openclaw/openclaw/issues/193357) Update failure: managed-service-preflight (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#193355](https://github.com/openclaw/openclaw/issues/193355) [Bug]: GPT-Live Mac Talk answers as ChatGPT instead of the configured agent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#193347](https://github.com/openclaw/openclaw/issues/193347) [Bug]: iOS Files suggests binary or oversized content for a missing file `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193345](https://github.com/openclaw/openclaw/issues/193345) Scheduled automations fail with 'no recorded inference account' after grant regeneration on subscription/OAuth auth; documented fixes (automations edit --model @profile, doctor --fix) don't record it `P1` `impact:auth-provider` 💬1
- [#193329](https://github.com/openclaw/openclaw/issues/193329) [Feature]: Import and export endpoint configurations as JSON for portability and team sharing `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193333](https://github.com/openclaw/openclaw/issues/193333) [Feature]: Sidebar endpoint switcher with keyboard shortcut for quick endpoint rotation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#193328](https://github.com/openclaw/openclaw/issues/193328) [Feature]: Endpoint templates with one-click presets for common self-hosted backends (Ollama, vLLM, LM Studio, Jan, LocalAI) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#193334](https://github.com/openclaw/openclaw/issues/193334) [Bug]: iOS All Sessions hides loaded conversations after a rejected Pin `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193331](https://github.com/openclaw/openclaw/issues/193331) [Feature]: Per-endpoint usage and cost tracking in the WebUI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#193330](https://github.com/openclaw/openclaw/issues/193330) [Feature]: Full auth-method management in the endpoint editor (API key, Bearer, OAuth2, custom headers) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#193327](https://github.com/openclaw/openclaw/issues/193327) [Feature]: Per-conversation endpoint override without changing the global default `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#193322](https://github.com/openclaw/openclaw/issues/193322) [Feature]: WebUI CRUD form for adding, editing, and deleting custom API endpoints without editing config.yaml `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#193325](https://github.com/openclaw/openclaw/issues/193325) [Feature]: Live health probes and status indicators for every configured endpoint `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#193323](https://github.com/openclaw/openclaw/issues/193323) [Feature]: Auto-discover and list available models from any configured endpoint `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#193316](https://github.com/openclaw/openclaw/issues/193316) [Feature]: WebUI CRUD form for adding, editing, and deleting custom API endpoints without editing config.yaml `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:auth-provider` 💬1
- [#193321](https://github.com/openclaw/openclaw/issues/193321) [Feature]: WebUI CRUD form for adding, editing, and deleting custom API endpoints without editing config.yaml 💬1
- [#193320](https://github.com/openclaw/openclaw/issues/193320) [Feature]: WebUI CRUD form for adding, editing, and deleting custom API endpoints without editing config.yaml 💬1
- [#193319](https://github.com/openclaw/openclaw/issues/193319) [Feature]: WebUI CRUD form for adding, editing, and deleting custom API endpoints without editing config.yaml 💬1
- [#193318](https://github.com/openclaw/openclaw/issues/193318) [Feature]: WebUI CRUD form for adding, editing, and deleting custom API endpoints without editing config.yaml 💬1
- [#193317](https://github.com/openclaw/openclaw/issues/193317) [Feature]: Auto-discover and list available models from any configured endpoint 💬1
- [#193171](https://github.com/openclaw/openclaw/issues/193171) [Bug]: Gateway startup fails on every host reboot when third-party tooling writes retired config keys (meta.lastTouchedAt, gateway.controlUi.allowInsecureAuth); retired-key stripping only runs in doctor, not at config load `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#193281](https://github.com/openclaw/openclaw/issues/193281) Android reconnects with no delay when the Gateway closes right after hello `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193282](https://github.com/openclaw/openclaw/issues/193282) [Bug]: Android large file and audio downloads fail after 20 seconds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193280](https://github.com/openclaw/openclaw/issues/193280) Android calendar.add puts an all-day event on the wrong day when the time has a positive UTC offset `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193278](https://github.com/openclaw/openclaw/issues/193278) [Bug]: iOS Files keeps a stale error after Load More succeeds `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193251](https://github.com/openclaw/openclaw/issues/193251) [Bug]: Task progress card reports 4/5 completed when only 3/5 tasks are complete 💬1
- [#193270](https://github.com/openclaw/openclaw/issues/193270) [Bug]: Agent relays a background command's late failure after the user says it is obsolete `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193267](https://github.com/openclaw/openclaw/issues/193267) [Bug]: Android chat: reloaded Claude CLI tool calls show under raw MCP bridge names (Mcp Openclaw Exec) and lose their command row `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193260](https://github.com/openclaw/openclaw/issues/193260) [Feature]: Configure chat command discovery visibility without changing authorization `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193259](https://github.com/openclaw/openclaw/issues/193259) [Feature]: Let automations updates require a caller-reviewed revision and absent tool authority `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193243](https://github.com/openclaw/openclaw/issues/193243) [Bug]: Zen model-access refusals suppress healthy configured siblings `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193236](https://github.com/openclaw/openclaw/issues/193236) Telegram reply: queued system events are inserted between the "#<id>:" header and the user's text `P2` `impact:message-loss` 💬1
- [#193175](https://github.com/openclaw/openclaw/issues/193175) [Bug]: path set writes redaction markers in JSON object keys `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193221](https://github.com/openclaw/openclaw/issues/193221) [Feature]: List and read session workspace files from the CLI (sessions files) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#193196](https://github.com/openclaw/openclaw/issues/193196) [Bug]: Legacy cron jobs with no stored tool cap fail scheduled channel reads with an unactionable error `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#193161](https://github.com/openclaw/openclaw/issues/193161) [Bug]: ChatGPT wiki re-import freezes transcript after a Notes marker in code `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193168](https://github.com/openclaw/openclaw/issues/193168) [Feature]: Inspect the root memory selection recorded for a run `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193167](https://github.com/openclaw/openclaw/issues/193167) [Feature]: Forward existing Discord messages as native snapshots `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1

#### 🔒 Closed Issues
- [#140129](https://github.com/openclaw/openclaw/issues/140129) [Bug] 2026.9.2 Anthropic cache stuck at ~46k tools+system prefix on long sessions — session:sanitized rewrites history fingerprints
- [#141973](https://github.com/openclaw/openclaw/issues/141973) `tools.exec.notifyOnExit`: add a failure-only / user-requested-only mode, and stop relaying SIGTERM-at-drain exits to the owner
- [#143274](https://github.com/openclaw/openclaw/issues/143274) maybeRetryTransient accepts full rate-limit Retry-After in 2026.9.3, disabling auth-profile rotation failover
- [#150743](https://github.com/openclaw/openclaw/issues/150743) [Discussion] QQ channel sustainability: the Tencent handoff has stalled — please clarify the long-term support plan
- [#146124](https://github.com/openclaw/openclaw/issues/146124) Control UI: heartbeat sessions bypass System and Automation filters
- [#143784](https://github.com/openclaw/openclaw/issues/143784) file_fetch always inlines images, making the documented mediaId -> file_write copy path unusable for image files
- [#138630](https://github.com/openclaw/openclaw/issues/138630) [Bug]: Discord Working previews remain beside normal replies after heartbeat timeouts on 2026.9.1
- [#126874](https://github.com/openclaw/openclaw/issues/126874) Windows CI runs 66 of 10,979 test files, and a skipped checks-windows counts as a passing gate
- [#135117](https://github.com/openclaw/openclaw/issues/135117) [Bug]: 2026.8.1 heartbeat replays delivered async results into the wrong Discord channel
- [#149806](https://github.com/openclaw/openclaw/issues/149806) run_stalled takeover: message hides the cause, takeover is absent from gateway.log, thresholds unconfigurable
- [#148033](https://github.com/openclaw/openclaw/issues/148033) Context-engine assemble() does not receive runtimeContext.senderId (afterTurn does), breaking sender-scoped recall
- [#147732](https://github.com/openclaw/openclaw/issues/147732) Control UI chat: paragraph-level (auto) RTL direction for mixed Persian/Arabic + English messages
- [#139262](https://github.com/openclaw/openclaw/issues/139262) [Bug]: macOS desktop app opens Dashboard instead of downloading attachments from a remote Gateway
- [#139505](https://github.com/openclaw/openclaw/issues/139505) cron: config_revision is a content hash that cycles, so there is no monotonic witness for scheduler mutations
- [#135679](https://github.com/openclaw/openclaw/issues/135679) [Feature]: Batched bounded queries for sessions_search (up to 8 per call)
- [#134113](https://github.com/openclaw/openclaw/issues/134113) [Feature]: Incremental transcript index reconcile for append-lagging sessions after imports
- [#130061](https://github.com/openclaw/openclaw/issues/130061) [Bug]: GPT-5.6 Responses lacks explicit cache breakpoints
- [#182246](https://github.com/openclaw/openclaw/issues/182246) [Bug]: Queue cap drops replay durable ingress until retries exhaust
- [#148559](https://github.com/openclaw/openclaw/issues/148559) gpt-5.4-nano resolves to an indeterminate OpenAI route without an authored baseUrl, rejecting every credential
- [#147304](https://github.com/openclaw/openclaw/issues/147304) [Bug]: exec session stays "running" while detached children hold stdio; kill reports "No active session found"
- [#144582](https://github.com/openclaw/openclaw/issues/144582) macOS app: Control UI "New window" / "New tab" always fails with "Allow pop-ups for this site, then try again."
- [#144556](https://github.com/openclaw/openclaw/issues/144556) Codex Telegram photo follow-ups replay older image attachments
- [#143155](https://github.com/openclaw/openclaw/issues/143155) [Bug]: System prompt execution bias conflicts with mandatory multi-skill workflow gates
- [#142268](https://github.com/openclaw/openclaw/issues/142268) Queued follow-up delivery drops the implicit reply target that the normal path injects
- [#140464](https://github.com/openclaw/openclaw/issues/140464) [Bug]: Usage tab counts cron prompt twice
- [#140128](https://github.com/openclaw/openclaw/issues/140128) [Bug]: macOS managed CLI inspection replaces an existing CLI selection
- [#136733](https://github.com/openclaw/openclaw/issues/136733) USER.md bootstrap injection capped at 4,000 chars in 2026.8.2; bootstrapMaxChars cannot raise it
- [#134502](https://github.com/openclaw/openclaw/issues/134502) [Bug]: Automations list reports caller-scoped totals without disclosing its restricted view
- [#128665](https://github.com/openclaw/openclaw/issues/128665) [Bug]: DeepSeek V4 catalog costs miss published rates — 2026.7.1-2 overstates pro 4.1×, main understates it 2.3×–4.5×
- [#128530](https://github.com/openclaw/openclaw/issues/128530) [Bug]: Newer Control UI sends client.timeZone that older gateways reject outright - closed connect schema has no version-skew path
- [#150322](https://github.com/openclaw/openclaw/issues/150322) [Bug]: Inbound media://inbound attachment cannot be opened from the Control UI file panel — sessions.files.get returns 'session file not found'
- [#150142](https://github.com/openclaw/openclaw/issues/150142) google-meet: progressive captions stored as duplicate utterances, and Meet notices/UI labels stored as speech
- [#149887](https://github.com/openclaw/openclaw/issues/149887) Control UI: cached rejected IndexedDB open permanently disables attachment staging
- [#149383](https://github.com/openclaw/openclaw/issues/149383) Android node events cause high-frequency main heartbeat runs and Telegram typing indicators
- [#147997](https://github.com/openclaw/openclaw/issues/147997) [Bug]: Plugin-deferred embedded runs inherit released root-work ALS context → spurious GatewayDrainingError after /new (2026.9.4)
- [#146824](https://github.com/openclaw/openclaw/issues/146824) [Bug]: Teams meetings rejects newer Microsoft work meeting links
- [#146282](https://github.com/openclaw/openclaw/issues/146282) [Feature]: Activate a plugin-provided sandbox backend from agents.*.sandbox.backend at Gateway startup
- [#146173](https://github.com/openclaw/openclaw/issues/146173) nodes.invoke: queue background-capable commands when an iOS node is asleep instead of dropping them
- [#146023](https://github.com/openclaw/openclaw/issues/146023) [Bug]: Skill collection review inherits bootstrap instructions outside its restricted Workshop root
- [#144331](https://github.com/openclaw/openclaw/issues/144331) buzz: all threads in a room share one session, so concurrent thread conversations serialize (distinct from #144203)
- [#144118](https://github.com/openclaw/openclaw/issues/144118) Internal fallback text (settled-finalization / storage-failure) is delivered to channel-bound sessions
- [#143100](https://github.com/openclaw/openclaw/issues/143100) [Bug]: worker desktop observe and launch skip the stale-build admission that tunnels and attach enforce
- [#140295](https://github.com/openclaw/openclaw/issues/140295) [Bug]: Codex image transport returns 941x1672/medium despite 2160x3840/high request
- [#139574](https://github.com/openclaw/openclaw/issues/139574) web.whatsapp.keepAliveIntervalMs (and connectTimeoutMs/defaultQueryTimeoutMs) no longer accepted in config schema as of 2026.9.1 — apparent regression from #73580
- [#139521](https://github.com/openclaw/openclaw/issues/139521) [Feature]: Same-model transient retry for CLI-backend runs before advancing the model fallback chain
- [#139152](https://github.com/openclaw/openclaw/issues/139152) [Bug]: Slack drops thread follow-ups before the first bot reply
- [#139066](https://github.com/openclaw/openclaw/issues/139066) [Bug]: voice-call `sendDtmf` tears down the realtime media stream — pressing a key kills the call
- [#138224](https://github.com/openclaw/openclaw/issues/138224) OpenClaw Node scheduled-task health check via powershell -EncodedCommand triggers Windows Defender false positive
- [#137651](https://github.com/openclaw/openclaw/issues/137651) [Bug]: Buzz agents never receive the message a reply points at
- [#137207](https://github.com/openclaw/openclaw/issues/137207) [Regression]: visible sessions_spawn child shows Off and the wrong runtime after #78176
- [#137366](https://github.com/openclaw/openclaw/issues/137366) [Bug]: `memory_search` triggers full source reconciliation while dirty, causing CPU starvation and timeouts
- [#135242](https://github.com/openclaw/openclaw/issues/135242) [Feature]: Wake Gateway sessions when worker background commands finish
- [#132572](https://github.com/openclaw/openclaw/issues/132572) [Feature]: Show exact active run IDs in the Debug overlay
- [#130250](https://github.com/openclaw/openclaw/issues/130250) Exec approval cards have no compact/batch mode; multi-command plans flood the channel (63 cards on one task)
- [#130198](https://github.com/openclaw/openclaw/issues/130198) [Feature]: Add --follow to openclaw channels logs
- [#129034](https://github.com/openclaw/openclaw/issues/129034) bundled himalaya skill docs use pre-2.1.0 config.toml schema, breaks silently on current himalaya
- [#128875](https://github.com/openclaw/openclaw/issues/128875) [Bug]: WhatsApp read receipts (blue ticks) delayed until agent reply, not on message receipt
- [#128267](https://github.com/openclaw/openclaw/issues/128267) [Feature]: Conditioning and cooldown for the cron announce delivery path
- [#126785](https://github.com/openclaw/openclaw/issues/126785) [Feature]: claws add cannot install a Claw into a directory whose files already match the package
- [#188647](https://github.com/openclaw/openclaw/issues/188647) [Bug]: Model fallback can finish silently before dispatching the backup
- [#150247](https://github.com/openclaw/openclaw/issues/150247) OAuth: publish a Client ID Metadata Document so CIMD-only MCP servers work without a manual URL
- [#150139](https://github.com/openclaw/openclaw/issues/150139) google-meet: no way to set the caption (spoken) language; forced hl=en leaves captions in English
- [#149941](https://github.com/openclaw/openclaw/issues/149941) [Bug]: exec workdir is rejected under sandbox.docker.binds targets while file tools accept them
- [#149927](https://github.com/openclaw/openclaw/issues/149927) [Bug]: Configured retired NVIDIA models remain listed without an unavailable status after refresh
- [#149923](https://github.com/openclaw/openclaw/issues/149923) [Bug]: NVIDIA model catalog omits current chat models present in /v1/models
- [#149215](https://github.com/openclaw/openclaw/issues/149215) [Bug]: dreaming rejects an already-owned primary workspace in explicit multi-agent configurations
- [#148527](https://github.com/openclaw/openclaw/issues/148527) OpenAI image generation over ChatGPT sign-in silently ignores `model`, `size` and `quality`, and OpenClaw reports the request as if honoured
- [#147938](https://github.com/openclaw/openclaw/issues/147938) Session progress cards are never reconciled at end of turn, so successful runs routinely end understated (2026.9.4)
- [#147906](https://github.com/openclaw/openclaw/issues/147906) feishu: final replies with code fences are routed to interactive cards, losing Feishu's native language label + copy button
- [#147349](https://github.com/openclaw/openclaw/issues/147349) [Feature]: memory_search needs real abstention — strictMinScore / emptyWhenBelowThreshold, minScore cannot silence noise
- [#147340](https://github.com/openclaw/openclaw/issues/147340) Mattermost: reactions on bot messages are unobservable — no reactionNotifications gate and the reactions list action is rejected (2026.9.2)
- [#147089](https://github.com/openclaw/openclaw/issues/147089) [Feature]: Install a skill from a git repository subdirectory (git: source subpath)
- [#146426](https://github.com/openclaw/openclaw/issues/146426) [Bug]: buildExecExitOutcome coerces null exitCode to 0, reporting kills as completed
- [#173061](https://github.com/openclaw/openclaw/issues/173061) [Bug]: a parked "plugins reload --wait" holds the plugin-replacement gate with no deadline and blocks the start of every isolated agent run on the Gateway
- [#142188](https://github.com/openclaw/openclaw/issues/142188) Auto-TTS is skipped entirely when a reply carries an attachment, so the answer arrives silent
- [#144812](https://github.com/openclaw/openclaw/issues/144812) [Bug]: Interleaved widget cards move away from their progress text in Control UI
- [#144597](https://github.com/openclaw/openclaw/issues/144597) Talk relay can lose readiness while accepting the WebRTC answer
- [#144353](https://github.com/openclaw/openclaw/issues/144353) buzz: make the room-history budget (ENTRY_BYTES/CONTEXT_BYTES) configurable per account; 1 KB truncates the messages an agent is asked about
- [#144191](https://github.com/openclaw/openclaw/issues/144191) install: fail closed when npm latest has no matching git tag
- [#143078](https://github.com/openclaw/openclaw/issues/143078) Heartbeat turns repeatedly post duplicate/fallback messages every cycle since 9.x (regression from 8.1)
- [#142647](https://github.com/openclaw/openclaw/issues/142647) Markdown tables: bare cell delimiters pair across generated row-label markers in bullets mode
- [#140843](https://github.com/openclaw/openclaw/issues/140843) before_tool_call { block: false } is documented as no decision but records an enforced allow receipt
- [#140253](https://github.com/openclaw/openclaw/issues/140253) [Bug]: sessions.patch cannot clear delivery.thread / threadId
- [#137843](https://github.com/openclaw/openclaw/issues/137843) [Bug]: iOS branch picker remains enabled during active agent runs
- [#136739](https://github.com/openclaw/openclaw/issues/136739) Codex context-engine bootstrap projection can bury the current request in historical tool payloads
- [#136013](https://github.com/openclaw/openclaw/issues/136013) [Bug]: iOS hides Archive while Delete remains available for active sessions
- [#135330](https://github.com/openclaw/openclaw/issues/135330) [Feature]: Expose provider messageId and conversationId on PluginCommandContext
- [#135310](https://github.com/openclaw/openclaw/issues/135310) Codex supervision errors hide the incompatible binding policy
- [#134487](https://github.com/openclaw/openclaw/issues/134487) [Bug]: Tool Search schema permits requests rejected at runtime
- [#133270](https://github.com/openclaw/openclaw/issues/133270) [Feature]: Deliver outbound location pins on Matrix to match Telegram, LINE, and WhatsApp
- [#131355](https://github.com/openclaw/openclaw/issues/131355) Telegram threaded DM sessions inherit parent /model override across topics
- [#130952](https://github.com/openclaw/openclaw/issues/130952) command no longer exists, but CLI gives no migration hint
- [#130899](https://github.com/openclaw/openclaw/issues/130899) status: expose when a config reload was rejected and runtime differs from disk
- [#130113](https://github.com/openclaw/openclaw/issues/130113) [Bug]: macOS local Gateway duplicates Codex sessions through its own app node
- [#130054](https://github.com/openclaw/openclaw/issues/130054) voice-call: realtime voice is one global setting; per-call selection has no path though the core session request already accepts req.voice (2026.7.1)
- [#128824](https://github.com/openclaw/openclaw/issues/128824) Fast auto-off does not drop service tier inside a running Codex turn; interrupt-and-continue hard cutoff proposal
- [#128534](https://github.com/openclaw/openclaw/issues/128534) [Bug]: Discord emoji-list in DM-bound sessions errors with misleading channel-id guidance instead of asking for guildId
- [#127977](https://github.com/openclaw/openclaw/issues/127977) [Feature]: Add plugin-scoped durable session-extension access
- [#127308](https://github.com/openclaw/openclaw/issues/127308) WhatsApp group gating ignores channels.whatsapp.implicitMentions (replies always count as mentions)
- [#125824](https://github.com/openclaw/openclaw/issues/125824) Direct-mode message delivery does not honor idempotencyKey as an at-most-once delivery identity
- [#181032](https://github.com/openclaw/openclaw/issues/181032) [Bug]: server class machines, no avx
- [#142789](https://github.com/openclaw/openclaw/issues/142789) [Bug] Control UI "Toggle terminal" fails with "no explicit owner" in multi-agent fleets (ownership: explicit)
- [#150591](https://github.com/openclaw/openclaw/issues/150591) [Bug]: Mattermost message read ignores --message-id and returns recent channel history
- [#150353](https://github.com/openclaw/openclaw/issues/150353) [Bug]: Mixed config writes flatten-refuse include-owned provider catalogs
- [#150189](https://github.com/openclaw/openclaw/issues/150189) [Feature]: Configurable Talk reply timeout shared by all clients (Android native Talk hard-codes 30 s)
- [#150178](https://github.com/openclaw/openclaw/issues/150178) [Bug]: Talk prepends fixed instructions, including a stale ElevenLabs voice hint, to the user's visible chat message
- [#150140](https://github.com/openclaw/openclaw/issues/150140) Meeting transcripts: title is always "${providerName} meeting" and is overwritten on stop; no supported rename
- [#149512](https://github.com/openclaw/openclaw/issues/149512) [Bug]: pluginToolDenylist skips plugins at construction time with zero diagnostics — a scope-level deny: ["*"] silently voids that scope's entire tools.allow, and nothing is logged at any level
- [#149391](https://github.com/openclaw/openclaw/issues/149391) Duplicate/phantom "workspace" project directory in Claude Code sidebar caused by wrong cwd in internal openclaw reserved agent
- [#149341](https://github.com/openclaw/openclaw/issues/149341) [Bug]: sessions.list reports the agent default model without marking it as a fallback
- [#148869](https://github.com/openclaw/openclaw/issues/148869) diagnostics-otel: infra events (phase / liveness) become independent root traces
- [#148323](https://github.com/openclaw/openclaw/issues/148323) [Bug]: Expired xAI OAuth profile cannot reconnect from Models
- [#148186](https://github.com/openclaw/openclaw/issues/148186) Memory promotion can persist YAML frontmatter as durable memory
- [#147895](https://github.com/openclaw/openclaw/issues/147895) [Bug]: Feishu mid-turn text is never delivered when streaming.block.enabled is unset; agents.defaults.blockStreamingDefault is ignored
- [#147435](https://github.com/openclaw/openclaw/issues/147435) [Bug]: startup crash-loops on unconfigured secret provider after green validate+audit — fail once with remediation, check at validate time
- [#147131](https://github.com/openclaw/openclaw/issues/147131) [Feature]: make the hook block notice prefix and "(blocked by <plugin>)" suffix configurable
- [#147128](https://github.com/openclaw/openclaw/issues/147128) [Bug]: Telegram text edits reach no plugin hook while location edits emit message_received
- [#147010](https://github.com/openclaw/openclaw/issues/147010) ACP hook timeout or error can replay a task through the ordinary runtime
- [#146985](https://github.com/openclaw/openclaw/issues/146985) Memory index: one error message for six conditions, whole run aborts on one bad batch, no debug output for remote embedding providers
- [#146441](https://github.com/openclaw/openclaw/issues/146441) [Bug]: Discord isLikelyUsername matches any digit-suffixed string
- [#146440](https://github.com/openclaw/openclaw/issues/146440) [Bug]: Doctor WhatsApp-responsiveness check silently disabled on Windows
- [#146439](https://github.com/openclaw/openclaw/issues/146439) [Bug]: Slack thread seeding discards retained history for threads over 3 pages
- [#146418](https://github.com/openclaw/openclaw/issues/146418) [Bug]: Stale positive run-to-session cache never expires after session delete
- [#146287](https://github.com/openclaw/openclaw/issues/146287) [Bug]: cron completion announcements ignore `inheritSessionThread`, so Slack Agent View pulls every scheduled brief into one DM thread
- [#145289](https://github.com/openclaw/openclaw/issues/145289) memory-core: dreaming promotion silently drops to candidates=0 when workspace is bind-mounted at two paths (workspace state keyed by path string, not inode)
- [#144872](https://github.com/openclaw/openclaw/issues/144872) Workboard: cards run as view-only subagents and cannot be continued when dispatched from automation/heartbeat
- [#144608](https://github.com/openclaw/openclaw/issues/144608) Tool policy hooks cannot distinguish native preflight from host execution
- [#142734](https://github.com/openclaw/openclaw/issues/142734) [Bug]: A LINE reply is pushed one request per part, so a card with its caption and image costs three monthly messages
- [#142588](https://github.com/openclaw/openclaw/issues/142588) Heartbeat silence is unenforced: a turn that omits HEARTBEAT_OK is delivered verbatim (26 of 27 scheduled runs posted narration)
- [#142356](https://github.com/openclaw/openclaw/issues/142356) [Bug]: LINE treats an unreadable credential file as configured, and offers the model a message tool that cannot send
- [#140944](https://github.com/openclaw/openclaw/issues/140944) [Bug]: Reclamation regression tests use a 500 ms wall-clock ceiling that misses on-thread reclamation and fails correct code in CI
- [#139504](https://github.com/openclaw/openclaw/issues/139504) cron: a booked manual run is unobservable until it starts — the returned runId matches no row, and cron_run_receipts has no queued state
- [#139209](https://github.com/openclaw/openclaw/issues/139209) [Bug]: Native Telegram plugin commands lose replied-message context
- [#138936](https://github.com/openclaw/openclaw/issues/138936) [Bug]: iOS node reports location permission false while precise location.get succeeds
- [#138686](https://github.com/openclaw/openclaw/issues/138686) [Bug]: terminated Windows PID returns EPERM and blocks stale-owner recovery
- [#136996](https://github.com/openclaw/openclaw/issues/136996) [Bug]: Quiet-hours heartbeat skips are recorded as status='failed' in task_runs while cron stores correctly say 'skipped'
- [#135427](https://github.com/openclaw/openclaw/issues/135427) sessions_send should honor agentId over a non-empty label instead of failing with 'No session found with label'
- [#193401](https://github.com/openclaw/openclaw/issues/193401) [Bug]: update repair self-fences when current and legacy executor custody resolve to the same database
- [#158262](https://github.com/openclaw/openclaw/issues/158262) [Bug]: voice-call Twilio <Say> fallback: initial greeting cut off by second live TwiML update; call hangs up 5s after each reply
- [#135333](https://github.com/openclaw/openclaw/issues/135333) [Bug]: Unresolvable self-hosted Firecrawl baseUrl reported as "not private" instead of a DNS failure
- [#134239](https://github.com/openclaw/openclaw/issues/134239) [Bug]: the message tool's target description names seven channels and ignores the target hint every channel declares
- [#134217](https://github.com/openclaw/openclaw/issues/134217) [Bug]: a LINE quote reaches the agent without the message it points at
- [#133836](https://github.com/openclaw/openclaw/issues/133836) [Bug]: Discord `discord:<id>` target is silently assumed to be a user, breaking thread delivery (defaultKind ignored)
- [#133658](https://github.com/openclaw/openclaw/issues/133658) [Bug]: removing a channel account leaves its durable ingress rows behind forever
- [#133371](https://github.com/openclaw/openclaw/issues/133371) [Feature]: Include session colors in sessions_list readback
- [#133227](https://github.com/openclaw/openclaw/issues/133227) [Feature]: Show selected Vault provider alias in status output
- [#132721](https://github.com/openclaw/openclaw/issues/132721) [Bug]: Codex agent_end omits structured abort metadata
- [#131030](https://github.com/openclaw/openclaw/issues/131030) [Bug]: claude-mythos-5 catalog entry missing contextWindows picker that opus-5/sonnet-5/fable-5 expose
- [#130751](https://github.com/openclaw/openclaw/issues/130751) Telegram DM autoTopicLabel should enforce length and avoid overwriting manual edits
- [#130750](https://github.com/openclaw/openclaw/issues/130750) Telegram message tool does not expose native topic icon parameters
- [#130671](https://github.com/openclaw/openclaw/issues/130671) [Bug]: Anthropic CLI auth leaves per-agent Claude model refs unmigrated
- [#130255](https://github.com/openclaw/openclaw/issues/130255) browser: default attachOnly:true when cdpUrl is set; the local-Chrome launch fallback collides with the configured endpoint (PortInUseError)
- [#129602](https://github.com/openclaw/openclaw/issues/129602) [Bug]: owner MCP overlays drop Agent Plugin PLUGIN_DATA binding
- [#128924](https://github.com/openclaw/openclaw/issues/128924) [Bug]: Cron delivery-failure alerts on the fallback route fire on every failed run with no threshold or cooldown
- [#128922](https://github.com/openclaw/openclaw/issues/128922) [Bug]: macOS app only receives Control UI accent changes while a Settings view is open - chat-only sessions stay stale forever
- [#128772](https://github.com/openclaw/openclaw/issues/128772) channels status stays green with pending outbound iMessage queue
- [#127929](https://github.com/openclaw/openclaw/issues/127929) [Bug] fs-safe symlink tests are not fully Windows-compatible
- [#127143](https://github.com/openclaw/openclaw/issues/127143) sessions_list lacks a post-filter completeness signal at its output limit
- [#126850](https://github.com/openclaw/openclaw/issues/126850) [Bug] Loading spinner next to session name stays spinning after agent finishes responding
- [#126635](https://github.com/openclaw/openclaw/issues/126635) [Feature]: Allow assemble-only engines to skip durable transcript advancement
- [#126553](https://github.com/openclaw/openclaw/issues/126553) [Bug]: Removing auth rotation tuning makes third ordered profile unreachable
- [#158116](https://github.com/openclaw/openclaw/issues/158116) [Bug]: diagnostics-otel content capture blocks the gateway for ~150 s after each model call on large sessions
- [#124705](https://github.com/openclaw/openclaw/issues/124705) doctor: configured multi-account Telegram reported as first-time setup
- [#193446](https://github.com/openclaw/openclaw/issues/193446) [Feature]: Preserve native browser identity for managed headless website logins
- [#193054](https://github.com/openclaw/openclaw/issues/193054) Knowledge search should follow superseded_by to the current record
- [#193303](https://github.com/openclaw/openclaw/issues/193303) "Merged and removed orphaned user message" writes a leaf rewind, which marks the transcript index for a full rebuild; on large sessions the UI shows "session history is rebuilding" for minutes and the turn waits
- [#193516](https://github.com/openclaw/openclaw/issues/193516) [Bug]: model assignment not persisting after 2026.10.10
- [#192566](https://github.com/openclaw/openclaw/issues/192566) scripts/pr: review workspace outside worktree-isolated agents' sandbox
- [#192564](https://github.com/openclaw/openclaw/issues/192564) release: publish recovery gaps (postpublish EPIPE, orphan bootstrap child, resume command, publish watcher)
- [#189087](https://github.com/openclaw/openclaw/issues/189087) [Bug]: Knowledge cannot provision stores on Windows (directory fsync EPERM)
- [#187841](https://github.com/openclaw/openclaw/issues/187841) [Bug]: macOS app onboarding "Will attach" rewrites openclaw.json without gateway.mode, and the CLI-managed Gateway won't start
- [#193172](https://github.com/openclaw/openclaw/issues/193172) Telegram inbound media silently fails on NFS-backed state (renameat2 RENAME_NOREPLACE → EINVAL): 5 weeks of dead media, zero error lines; link+unlink fallback shim verified in production
- [#193462](https://github.com/openclaw/openclaw/issues/193462) [Bug]: plugins install fails when ~/.openclaw is a symlink — "Atomic replace parent must be a real directory"
- [#193194](https://github.com/openclaw/openclaw/issues/193194) [Bug]: Provider 403 "Endpoint is unavailable" is treated as an auth failure and blocks every model on the provider
- [#157364](https://github.com/openclaw/openclaw/issues/157364) [Bug]: tool calls dispatched alongside an accepted sessions_yield are aborted in preflight and their side effects are silently lost
- [#179515](https://github.com/openclaw/openclaw/issues/179515) Backport request: extended-stable 2026.9.33 still ships the worker-isolate memory regression (3 OOM kills in 48h on a host with 4x the common deployment RAM) — please backport #174718 / #179119 / #171354
- [#193366](https://github.com/openclaw/openclaw/issues/193366) Gateway restart leaves a 'running' but non-listening process (port never bound); daemon restart refuses with GATEWAY_RESTART_PREPARATION_REFUSED yet launchd restart actually succeeds
- [#187400](https://github.com/openclaw/openclaw/issues/187400) Streamed replies that mix inline code with a `<` comparison re-parse the whole answer per delta (45 s at 128 KB)
- [#193155](https://github.com/openclaw/openclaw/issues/193155) Active Memory trigger recall never matches Chinese or Japanese triggers in unspaced messages
- [#189735](https://github.com/openclaw/openclaw/issues/189735) `skills.status` (and cron turns) fail with "Skills discovery was retired before publication" when a config write commits mid-read
- [#181524](https://github.com/openclaw/openclaw/issues/181524) [Bug]: Secret egress proxy closes Node fetch CONNECT tunnels to loopback HTTP (UND_ERR_SOCKET)
- [#186598](https://github.com/openclaw/openclaw/issues/186598) [Bug]: repeated paragraphs with inline code re-collapse the whole streamed reply per delta (91 s at 64 KB)
- [#183031](https://github.com/openclaw/openclaw/issues/183031) [Bug]: Android reports a superseded chat.metadata read as a model-refresh failure
- [#141038](https://github.com/openclaw/openclaw/issues/141038) [Bug]: Windows cron command jobs are persisted with hardcoded ["sh", "-lc", ...] and fail with permanent ENOENT at every run
- [#191449](https://github.com/openclaw/openclaw/issues/191449) [Bug]: iOS app is frozen while stuck on "Connecting" to a gateway that doesn't answer
- [#191147](https://github.com/openclaw/openclaw/issues/191147) [Bug]: Claude CLI models are never listed when no Anthropic model is pinned to Claude CLI, although Claude Code is signed in
- [#192328](https://github.com/openclaw/openclaw/issues/192328) npx Quick start cannot keep the Gateway running after the terminal closes
- [#193811](https://github.com/openclaw/openclaw/issues/193811) [Bug]: Mattermost drops user posts that carry a message attachment (type "slack_attachment")
- [#193793](https://github.com/openclaw/openclaw/issues/193793) [Bug]: Cloning a cron job drops its failure-alert topic
- [#193761](https://github.com/openclaw/openclaw/issues/193761) [P1] Running Codex helper locks users out of parent conversation: new messages fail instead of being accepted
- [#191551](https://github.com/openclaw/openclaw/issues/191551) [Bug]: `openclaw gateway install` returns before the Gateway is ready
- [#191553](https://github.com/openclaw/openclaw/issues/191553) [Bug]: Codex login says "Manual OAuth entry required" while browser sign-in still works
- [#191549](https://github.com/openclaw/openclaw/issues/191549) [Bug]: Quick start is no longer offered after Ctrl-C during a first run
- [#192562](https://github.com/openclaw/openclaw/issues/192562) ci: npm release source check loses Blacksmith runners; hosted fallback lacks ripgrep
- [#193693](https://github.com/openclaw/openclaw/issues/193693) [Feature]: Control UI: keep conversation history before an automatic idle/daily reset reachable
- [#193492](https://github.com/openclaw/openclaw/issues/193492) [Bug]: Skill Workshop experience review reads unbounded model context and exhausts transcript worker on large sessions (2026.10.10)
- [#193641](https://github.com/openclaw/openclaw/issues/193641) [i18n] User-facing status and error messages are English-only, no locale hook
- [#193620](https://github.com/openclaw/openclaw/issues/193620) test: make device-token authority regression deterministic
- [#191975](https://github.com/openclaw/openclaw/issues/191975) [Feature]: Host-exec restricts build tasks to 4.8 GiB on a 20 GB RAM / 28 GB swap server
- [#193612](https://github.com/openclaw/openclaw/issues/193612) [Bug]: Cron trigger cache reuses stale sandbox identity in backend-replacement reproduction
- [#193517](https://github.com/openclaw/openclaw/issues/193517) Cron automations fail with 'no recorded inference account' after stale per-agent auth-profile state goes unnoticed by doctor --lint
- [#193528](https://github.com/openclaw/openclaw/issues/193528) telegram: ordered lists with nested bullets get a blank line between each item and its sub-bullets
- [#186047](https://github.com/openclaw/openclaw/issues/186047) Details panel jumps in height when its content first loads
- [#193593](https://github.com/openclaw/openclaw/issues/193593) Codex app-server stdio spawns (and procfs checks) run `child_process.spawn` on the gateway main thread; ~15% of main-thread CPU on a large gateway
- [#193193](https://github.com/openclaw/openclaw/issues/193193) [Bug]: 2026.10.10 materializes every compressed session archive into /tmp — 495 files / ~620 MB on a 1 GiB tmpfs, 24h TTL, no size cap
- [#193339](https://github.com/openclaw/openclaw/issues/193339) image_generate, video_generate and music_generate are missing when the provider key is set only in models.providers.<id>.apiKey
- [#191414](https://github.com/openclaw/openclaw/issues/191414) [Bug]: Onboarding says no AI access was detected and recommends Ollama while Ollama is running with no model loaded
- [#191413](https://github.com/openclaw/openclaw/issues/191413) [Docs]: CLI onboarding says Quick start detects installed local models, but it needs loaded ones
- [#193526](https://github.com/openclaw/openclaw/issues/193526) [Bug]: [Bug]: Windows browser control blocked by listener-owner verification
- [#193521](https://github.com/openclaw/openclaw/issues/193521) [Bug]: proc-safe prebuilt requires GLIBC_2.33/2.34, unusable on glibc 2.32 hosts
- [#193503](https://github.com/openclaw/openclaw/issues/193503) [Feature]: Add primary and fallback model support for Exec Guardian auto-review
- [#193477](https://github.com/openclaw/openclaw/issues/193477) [Bug] Feishu inbound is not persisted before dispatch: a failed dispatch loses the message with no retry and no dead-letter (the "Retry the message." text is not implemented)
- [#193460](https://github.com/openclaw/openclaw/issues/193460) [Bug]: image_generate logs 'completion wake failed … handoff deadline' while completion is only deferred behind the requester run (2026.10.5)
- [#193419](https://github.com/openclaw/openclaw/issues/193419) [Bug]: Background skill review sends an unsupported `offset` argument to skill_workshop, logging two Code Mode errors per pass
- [#193418](https://github.com/openclaw/openclaw/issues/193418) [Bug]: Legacy automations fail after upgrade with no account authorization in Control UI
- [#161205](https://github.com/openclaw/openclaw/issues/161205) [Bug]: Claude Code version probe for OAuth identity runs once per gateway process — CLI update or failed first probe ignored until restart
- [#184358](https://github.com/openclaw/openclaw/issues/184358) [Bug]: Cron trigger condition times out on every tick when runtime preparation exceeds the 30 s trigger budget
- [#193345](https://github.com/openclaw/openclaw/issues/193345) Scheduled automations fail with 'no recorded inference account' after grant regeneration on subscription/OAuth auth; documented fixes (automations edit --model @profile, doctor --fix) don't record it
- [#193321](https://github.com/openclaw/openclaw/issues/193321) [Feature]: WebUI CRUD form for adding, editing, and deleting custom API endpoints without editing config.yaml
- [#193320](https://github.com/openclaw/openclaw/issues/193320) [Feature]: WebUI CRUD form for adding, editing, and deleting custom API endpoints without editing config.yaml
- [#193319](https://github.com/openclaw/openclaw/issues/193319) [Feature]: WebUI CRUD form for adding, editing, and deleting custom API endpoints without editing config.yaml
- [#193318](https://github.com/openclaw/openclaw/issues/193318) [Feature]: WebUI CRUD form for adding, editing, and deleting custom API endpoints without editing config.yaml
- [#193317](https://github.com/openclaw/openclaw/issues/193317) [Feature]: Auto-discover and list available models from any configured endpoint
- [#185913](https://github.com/openclaw/openclaw/issues/185913) [Bug]: Windows: state-directory guard compares paths case-sensitively and falsely blocks configure
- [#186333](https://github.com/openclaw/openclaw/issues/186333) [Bug]: Microsoft Teams stops applying startup-resolved allowlists after an unrelated config reload
- [#193251](https://github.com/openclaw/openclaw/issues/193251) [Bug]: Task progress card reports 4/5 completed when only 3/5 tasks are complete
- [#186708](https://github.com/openclaw/openclaw/issues/186708) [Bug]: Microsoft Teams accounts all fail to start when a named account uses /api/messages and the default account uses a custom path
- [#186601](https://github.com/openclaw/openclaw/issues/186601) [Bug]: streamed replies that quote a tool-call transcript in code re-parse the whole reply per delta (70 s at 32 KB)
- [#190719](https://github.com/openclaw/openclaw/issues/190719) [Bug]: memory forget --json has no record that the selected memory plugin was not covered
- [#188126](https://github.com/openclaw/openclaw/issues/188126) Discord: a channel configured by a non-Latin name resolves to a different channel
- [#186721](https://github.com/openclaw/openclaw/issues/186721) Control UI: Run history rows show a live Due or Next in label
- [#187531](https://github.com/openclaw/openclaw/issues/187531) [Bug]: memory_search times out while indexing through a same-host openai-compatible embedding server
- [#192756](https://github.com/openclaw/openclaw/issues/192756) [Bug]: memory.status reports embeddings pending after successful probe and complete fresh-note semantic search
- [#193236](https://github.com/openclaw/openclaw/issues/193236) Telegram reply: queued system events are inserted between the "#<id>:" header and the user's text
- [#193175](https://github.com/openclaw/openclaw/issues/193175) [Bug]: path set writes redaction markers in JSON object keys
- [#192759](https://github.com/openclaw/openclaw/issues/192759) [Bug]: 2026.11.5-beta.1 admits a left-behind Codex plugin, then every Codex turn fails (missing HEARTBEAT_RESPONSE_TOOL_NAME export)
- [#192851](https://github.com/openclaw/openclaw/issues/192851) [Bug]: 2026.10.10 macOS app re-signs codex-code-mode-host without JIT entitlements, so every Codex tool call fails (V8 "Failed to reserve virtual memory for CodeRange")
- [#182176](https://github.com/openclaw/openclaw/issues/182176) [Bug]: Ambient room events evict direct mentions from the follow-up queue; evicted mentions are replayed without sender or context
- [#193161](https://github.com/openclaw/openclaw/issues/193161) [Bug]: ChatGPT wiki re-import freezes transcript after a Notes marker in code
- [#192561](https://github.com/openclaw/openclaw/issues/192561) frv: rerun attempts spawn ghost duplicate jobs that make FRV children unsealable
- [#192563](https://github.com/openclaw/openclaw/issues/192563) release: plugin security-scan reviewed hashes drift with main's toolchain and only fail at publish
- [#188134](https://github.com/openclaw/openclaw/issues/188134) [Feature]: Android: End Talk should let accepted agent work finish (detach), with cancel as an explicit choice

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 260,914 · **Open issues:** 53,105 · **Last push:** <1h ago

On November 5, 2026, Hermes Agent released v0.23.0, dubbed "The Hearth Release," which marked significant progress with approximately 10,080 commits and the closure of around 850 issues, reflecting the collaborative effort of 666 contributors. This release celebrated the balance between Hermes and Hestia, symbolizing entry into a welcoming space while enhancing functionality. Among the merged pull requests, a notable change was made to optimize CI processes by merging small same-runner jobs, effectively cutting down on billed minutes. However, the day also presented challenges, as a new bug was reported (#149682) regarding group chat imports from standalone backends, where members' initial gateway turns failed due to runtime issues linked to session title collisions.

#### 🚀 New Releases
- [v0.23.0](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.0) Hermes Agent v0.23.0 — The Hearth Release

#### ✅ Merged PRs
- [#149786](https://github.com/NousResearch/hermes-agent/pull/149786) ci: merge small same-runner jobs into single jobs to cut billed minutes

#### 🐛 New Issues
- [#149682](https://github.com/NousResearch/hermes-agent/issues/149682) [Bug]: Group Chats imported from standalone backends: each member's first gateway turn fails with runtime_draining (room session title collides with the standalone-era 'Group: <room>' row) 💬3
- [#149784](https://github.com/NousResearch/hermes-agent/issues/149784) Desktop sessions become unrecoverable (`admission_conflict`) after 90-day pruning — routing entries never refreshed by desktop turns, restore refuses to self-heal 💬2
- [#149770](https://github.com/NousResearch/hermes-agent/issues/149770) [Bug]: Desktop local image uploads fail with "session not found" after a legacy remote profile connects 💬1
- [#149787](https://github.com/NousResearch/hermes-agent/issues/149787) Desktop Scheduled: script-only (no_agent) run rows can't be opened, and their preview is all header boilerplate 💬1
- [#149778](https://github.com/NousResearch/hermes-agent/issues/149778) shell.exec redacts structured plugin stdout: a 32-hex token becomes "abcd12...ef34" 💬1
- [#149812](https://github.com/NousResearch/hermes-agent/issues/149812) [Bug]: [Android Beta] Interactive terminal fails to start over SSH
- [#149818](https://github.com/NousResearch/hermes-agent/issues/149818) Desktop installer should update an existing outdated Hermes CLI
- [#149815](https://github.com/NousResearch/hermes-agent/issues/149815) Read-only API endpoints for the kanban board, running runs and memory entries
- [#149810](https://github.com/NousResearch/hermes-agent/issues/149810) [Bug]: `hermes webapp` reports "The gateway is not running" when `~/.hermes` is a symlink
- [#149809](https://github.com/NousResearch/hermes-agent/issues/149809) [Bug]: Desktop — the persisted unread watermark never starts by itself: opening a session writes nothing while last_read_at is NULL
- [#149808](https://github.com/NousResearch/hermes-agent/issues/149808) [Bug]: Windows Desktop download of a local MEDIA file card fails with WinError 123 - invalid path built by prefixing app install dir
- [#149807](https://github.com/NousResearch/hermes-agent/issues/149807) DeepSeek V4.x: literal image sentinel token in any text message permanently poisons the session (HTTP 400 on every turn, self-reinforcing across sessions)
- [#149804](https://github.com/NousResearch/hermes-agent/issues/149804) [Bug]: Dashboard Webhooks page ignores WEBHOOK_ENABLED and routes defined in config.yaml
- [#149799](https://github.com/NousResearch/hermes-agent/issues/149799) [Bug][iOS] SSH over WireGuard fails before connection with dashboard resolution error
- [#149798](https://github.com/NousResearch/hermes-agent/issues/149798) [Bug]: Desktop app TUI/PTY pane always disconnected (1006) — loopback WebSocket auth rejected (no_credential)
- [#149794](https://github.com/NousResearch/hermes-agent/issues/149794) [Bug]: Hosted-room rounds end with unheard seats — scheduling discards speaker order, stall is invisible
- [#149793](https://github.com/NousResearch/hermes-agent/issues/149793) [Bug]: Desktop model picker is silent with NVDA - search box has no combobox role or active-descendant `bug`
- [#149792](https://github.com/NousResearch/hermes-agent/issues/149792) [Bug]: Desktop Settings opens without moving keyboard or screen-reader focus into it (NVDA) `bug`
- [#149779](https://github.com/NousResearch/hermes-agent/issues/149779) [Bug]: Desktop — cross-profile wake leaves $newChatProfile pinned, so New Session lands in the woken profile
- [#149776](https://github.com/NousResearch/hermes-agent/issues/149776) [Bug]: Symlinked profile home loses its identity in three places under the 0.23 multiplexer — old sessions fail to reopen, Desktop sends refused (permission_denied)
- [#149774](https://github.com/NousResearch/hermes-agent/issues/149774) [Bug]: hermes doctor flags the desktop bundle's own ~/.local/bin/hermes link as "points to wrong target"
- [#149773](https://github.com/NousResearch/hermes-agent/issues/149773) [Bug]: Mirror-only networks: PM's locked syncs download from the files.pythonhosted.org URLs in uv.lock and never use the configured index
- [#149771](https://github.com/NousResearch/hermes-agent/issues/149771) [Bug]: mcp login stalls after the OAuth callback: an idle browser socket parks the callback listener and the synchronous server.shutdown() with it

#### 🔒 Closed Issues
- [#139818](https://github.com/NousResearch/hermes-agent/issues/139818) [Bug]: Remote-backend desktop sessions are unresumable from a local desktop — session.resume fails with not_found
- [#149787](https://github.com/NousResearch/hermes-agent/issues/149787) Desktop Scheduled: script-only (no_agent) run rows can't be opened, and their preview is all header boilerplate

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 96,425 · **Open issues:** 9,941 · **Last push:** <1h ago

On November 6, 2026, there were no new releases for vLLM; however, several important merged pull requests were documented. Key bug fixes included stopping the AITER FA from skipping one-token prompts in prefill/extend (#65722) and preventing catastrophic cancellation in the acceptance estimator (#65229). Performance improvements were made by rendering plain completion stream deltas from a template (#52875) and optimizing parallel decode for MiniMax-M3.1 (#65267). A notable new issue reported involved benchmark_moe.py failing with Ray 2.59 on ROCm, affecting environment variable management (#65919).

#### ✅ Merged PRs
- [#65722](https://github.com/vllm-project/vllm/pull/65722) [Bugfix][ROCm] Stop AITER FA from skipping 1-token prompts in prefill/extend
- [#65229](https://github.com/vllm-project/vllm/pull/65229) [Bugfix][Spec Decode] Avoid catastrophic cancellation in the acceptance estimator
- [#52875](https://github.com/vllm-project/vllm/pull/52875) [Perf][Frontend] Render plain completion stream deltas from a template
- [#64958](https://github.com/vllm-project/vllm/pull/64958) [ROCm][Kimi-K3] Support Mooncake consumers with specialized decode
- [#65988](https://github.com/vllm-project/vllm/pull/65988) [ROCm][CI] Let /ci rocm cache start its main build on AMD CI
- [#65386](https://github.com/vllm-project/vllm/pull/65386) Minimax m3.1 dspark drafter monokernel
- [#65267](https://github.com/vllm-project/vllm/pull/65267) [Perf][ROCm][MiniMax-M3.1] Add opt-in parallel decode top-k
- [#62517](https://github.com/vllm-project/vllm/pull/62517) [Bugfix][Parser] DeepSeek V4.1: don't leak a `<｜DSML｜ tool_calls>` opener into content
- [#65930](https://github.com/vllm-project/vllm/pull/65930) [Dependency] Upgrade FlashInfer to 0.7.3
- [#65806](https://github.com/vllm-project/vllm/pull/65806) [Bugfix][MiniMax-M3] Initialize the shard record in the indexer QKV layer
- [#65831](https://github.com/vllm-project/vllm/pull/65831) [Perf][Core] Reduce per-block CPU cost of KV block allocation and caching
- [#65968](https://github.com/vllm-project/vllm/pull/65968) [Docs][ROCm] Fix stale AMD recipe images for GLM-5 and GLM-5.1
- [#65725](https://github.com/vllm-project/vllm/pull/65725) [Recipe] Kimi-K3.1-Pro: add TPU serving via vllm-torchtpu
- [#64478](https://github.com/vllm-project/vllm/pull/64478) [XPU][UT] Temporarily Skip CUDA-IPC weight cache test
- [#65599](https://github.com/vllm-project/vllm/pull/65599) [ROCm][Step5] Use one warp for CSA prefill sparse attention on CDNA3/CDNA4
- [#65249](https://github.com/vllm-project/vllm/pull/65249) [ROCm][DSv4.1] Enable prefix-cache SWA replay on gfx942
- [#65554](https://github.com/vllm-project/vllm/pull/65554) [Bugfix] Fix startup illegal memory access from unaligned extensible KV cache segments
- [#65679](https://github.com/vllm-project/vllm/pull/65679) [Bugfix] Require fastokens >= 0.3.5 for VLLM_USE_FASTOKENS
- [#64886](https://github.com/vllm-project/vllm/pull/64886) [Bugfix][ROCm][Kimi-K3] Refresh derived weight copies after in-place weight writes
- [#65986](https://github.com/vllm-project/vllm/pull/65986) [Recipes] Update DeepSeek-V4.1-Flash AgentX presets for GB200 and B200
- [#54109](https://github.com/vllm-project/vllm/pull/54109) [MoE][DeepEPV2] Add PaddedStandard activation format
- [#64802](https://github.com/vllm-project/vllm/pull/64802) [Bugfix] Update humming-kernels version to 0.1.19
- [#65761](https://github.com/vllm-project/vllm/pull/65761) [Bugfix][Multimodal] Encoder CUDA graph: cap each graph's frame slots at its token budget
- [#65883](https://github.com/vllm-project/vllm/pull/65883) [Perf][MiniMax-M3] Don't sync when building sparse-attention prefill metadata
- [#65518](https://github.com/vllm-project/vllm/pull/65518) [Build] Bump vllm-flash-attn to compress fatbins with --compress-mode=size
- [#60372](https://github.com/vllm-project/vllm/pull/60372) [Kernel] Integrate FA4 SM90 FP8 MMA for Gemma-4 full attention
- [#65285](https://github.com/vllm-project/vllm/pull/65285) [Perf][Core] Cache parked async KV loads' admission reservations
- [#65539](https://github.com/vllm-project/vllm/pull/65539) [Bugfix][Distributed] Fix PP rank derivation when prefill context parallelism is enabled
- [#62759](https://github.com/vllm-project/vllm/pull/62759) [Quant] LUT-B MoE with MXFP8 activations: native Rubin kernel + emulation
- [#60882](https://github.com/vllm-project/vllm/pull/60882) [Perf][ToolParser] Scan required-tool streaming deltas incrementally
- [#65954](https://github.com/vllm-project/vllm/pull/65954) [Bugfix][Frontend] Accept Anthropic thinking.type=between_tools on the Messages API
- [#62717](https://github.com/vllm-project/vllm/pull/62717) [ROCm][Build][2/5] Speed up ROCm build: split the topk softplus-sqrt instantiations per dtype
- [#60487](https://github.com/vllm-project/vllm/pull/60487) [Bugfix][ROCm] Count attention sinks once in AITER FA chunked-context extend
- [#63364](https://github.com/vllm-project/vllm/pull/63364) [ROCm][Build][4/5] Speed up ROCm build: instantiate the int4 skinny GEMM per output width
- [#65825](https://github.com/vllm-project/vllm/pull/65825) [Bugfix][LoRA] Align GPT-OSS MXFP4 LoRA TP shards with base weights
- [#65442](https://github.com/vllm-project/vllm/pull/65442) [CI][Test] Skip unavailable models before spawning a test process
- [#65745](https://github.com/vllm-project/vllm/pull/65745) [Model] Add Ricursive Ripple-65B support
- [#65912](https://github.com/vllm-project/vllm/pull/65912) [ROCm][CI] Fix flaky streaming checks in test_translation_validation
- [#65276](https://github.com/vllm-project/vllm/pull/65276) [ROCm][CI] Cache a PR's ROCm base image for main with `/ci rocm cache`
- [#65160](https://github.com/vllm-project/vllm/pull/65160) [Feature][MooncakeStore] Add automatic deployment cache prefixes
- [#59041](https://github.com/vllm-project/vllm/pull/59041) [CI][Test] Use file:// rendezvous in the Ray multi-GPU test harness
- [#65631](https://github.com/vllm-project/vllm/pull/65631) [Bugfix][KV Offload] Keep whole-chunk max_load_tokens caps with sliding window groups
- [#65124](https://github.com/vllm-project/vllm/pull/65124) [Bugfix][KV Offload][P2P] Abort inbound loads when draining for a cache reset
- [#65908](https://github.com/vllm-project/vllm/pull/65908) [ROCm][CI] Fix flaky layer 0 bound in test_dsv4_mono_layers
- [#65916](https://github.com/vllm-project/vllm/pull/65916) [ROCm][CI] Shard Spec Decode AL MTP with pytest-shard after the Gemma4 dataset split
- [#65910](https://github.com/vllm-project/vllm/pull/65910) [CI][Step5] Pin the starting block size in the CSA tail ring test
- [#64689](https://github.com/vllm-project/vllm/pull/64689) [Feature][MoE] Allow a shared routed-expert row restorer

#### 🐛 New Issues
- [#65841](https://github.com/vllm-project/vllm/issues/65841) [Feature]: Support n > 1 sampling, multimodal processor kwargs, and output_mode: derender in vllm.Inference `multi-modality` 💬2
- [#65959](https://github.com/vllm-project/vllm/issues/65959) [RFC]: Switch Rust regex engine for response parsing `RFC` `rust` 💬2
- [#65919](https://github.com/vllm-project/vllm/issues/65919) [Bug]: benchmark_moe.py fails with Ray 2.59 on ROCm: it replaces HIP_VISIBLE_DEVICES with ROCR_VISIBLE_DEVICES `rocm` 💬2
- [#65811](https://github.com/vllm-project/vllm/issues/65811) [Bug]: Qwen3.5-122B + LoRA crashes at startup: _inject_lora_into_fused_moe asserts TritonExperts, but FlashInferExperts is auto-selected 💬1
- [#66023](https://github.com/vllm-project/vllm/issues/66023) [Feature]: Tighter integration with Compressed-Tensors by consolidating and converting targets to vLLM `feature request` 💬1
- [#66009](https://github.com/vllm-project/vllm/issues/66009) [Bug]: NixlConnector consumer reads remote KV after the producer lease expired and the blocks were recycled (silent KV corruption, NaN logits, illegal memory access) 💬1
- [#65967](https://github.com/vllm-project/vllm/issues/65967) [RFC]: Compute-free prefix KV lookup-and-pin for router-driven peer KV reuse `RFC` 💬1
- [#65969](https://github.com/vllm-project/vllm/issues/65969) [RFC][HiSparse] Selective shared KV offloading for DeepSeek V4.1 `deepseek` 💬1
- [#65952](https://github.com/vllm-project/vllm/issues/65952) [Bug]: [ROCm] GLM-5.3 TP8 hangs with MTP and CPU KV offload `rocm` `glm` 💬1
- [#65934](https://github.com/vllm-project/vllm/issues/65934) [Bug]: [InferHunt] olmo3 tool parser silently drops HTML-like plain text in streaming responses `tool-calling` 💬1
- [#65925](https://github.com/vllm-project/vllm/issues/65925) [Bug]: DeepSeek-V4.1 with DSpark adaptive verification crashes at startup on MI355X (TP8) with a GPU memory access fault `bug` `rocm` `deepseek` 💬1
- [#65886](https://github.com/vllm-project/vllm/issues/65886) [Feature]: Add gc-moe as an option for moe-backend `feature request` 💬1
- [#65807](https://github.com/vllm-project/vllm/issues/65807) [Bug]: cyankiwi/Qwen3.8-27B-AWQ-INT4输出混乱 `bug` `quantization` 💬1
- [#65813](https://github.com/vllm-project/vllm/issues/65813) [RFC]: Add a Tree Speculative Decoding Framework `speculative-decoding` 💬1
- [#66024](https://github.com/vllm-project/vllm/issues/66024) [CI Failure]: Entrypoints Integration - test_derender_parity.py::test_inline_derender_parity[n2] `ci-failure`
- [#66006](https://github.com/vllm-project/vllm/issues/66006) [Bug]: With `HF_HUB_OFFLINE=1`, a Hub-ID speculative draft model logs `ERROR ... Error retrieving safetensors: ... offline mode is enabled` twice (plus a 2 s retry sleep), although startup succeeds `speculative-decoding`
- [#65978](https://github.com/vllm-project/vllm/issues/65978) [Feature]: Unify activation-scheme handling across linear oracles (generalize the activation override + add a uniform selection gate) `quantization`
- [#65973](https://github.com/vllm-project/vllm/issues/65973) [Performance]: Hybrid models with prefix caching prefill chunks above the default cudagraph capture ceiling eagerly `kv-cache-manager`
- [#65966](https://github.com/vllm-project/vllm/issues/65966) [doc] out-of-tree quantization example imports FusedMoE, which the fused_moe package no longer exports `quantization`
- [#65946](https://github.com/vllm-project/vllm/issues/65946) [Bug]: Kimi-Linear ignores checkpoint FP8 KV-cache scales (compressed-tensors and ModelOpt): its MLA layer gets no KV-cache quant method `quantization` `kimi`
- [#65945](https://github.com/vllm-project/vllm/issues/65945) [Bug]: GPT-J silently ignores FP8 KV-cache scales from compressed-tensors (LLM Compressor) checkpoints `quantization`
- [#65944](https://github.com/vllm-project/vllm/issues/65944) [Bug]: ModelOpt FP8 KV-cache scales are not loaded into MLA attention (DeepSeek-V2/V3, GLM-4.7-Flash, A.X-K1, EAGLE-3 DeepSeek drafter) since v0.25.0 `speculative-decoding` `deepseek` `quantization` `kimi`
- [#65942](https://github.com/vllm-project/vllm/issues/65942) [doc] three core functions document a return value they cannot produce (moe_unpermute, CacheOnlyModel.forward, InputBatch.condense)
- [#65938](https://github.com/vllm-project/vllm/issues/65938) [Bug][KV Connector] Permanent stall: parked async KV loads exhaust the GPU pool and none can allocate its tail (OffloadingConnector, spec decode on, 0.31-0.33)
- [#65913](https://github.com/vllm-project/vllm/issues/65913) [RFC]: Deprecate and remove the torchao reload decorator in favor of reload_weights `RFC` `quantization`
- [#65907](https://github.com/vllm-project/vllm/issues/65907) [Bug]: v0.33.0: DeepSeek-V4.1 + DSpark speculative decoding OOMs at startup with `--gpu-memory-utilization=0.97` (worked in v0.32.0) — speculator CUDA-graph-capture allocation (~4 GiB in `sparse_attn_indexer`) not accounted for by memory profiling `bug` `speculative-decoding` `deepseek` `quantization`
- [#65906](https://github.com/vllm-project/vllm/issues/65906) [Bug]: Qwen3.5-122B-A10B-FP8 GSM8K accuracy decreases at commit 0fae39a `bug`
- [#65873](https://github.com/vllm-project/vllm/issues/65873) [Bug]: Nemotron-3.5-Super-VL-120B-A12B-NVFP4 native MTP fails to load: "start (0) + length (5376) exceeds dimension size (2688)" `bug` `quantization`
- [#65868](https://github.com/vllm-project/vllm/issues/65868) [Bug]: MRV2 extensible KV cache commits all KV before encoder CUDA graph capture, so cudagraph_mm_encoder OOMs at startup
- [#65856](https://github.com/vllm-project/vllm/issues/65856) [Bug]: Draft-model speculative decoding exceeds the token budget during warmup `bug` `speculative-decoding`
- [#65821](https://github.com/vllm-project/vllm/issues/65821) [Bug]: FP8 KV cache with `kv_cache_dtype_skip_layers` crashes FA3: "scheduler_metadata must have shape (metadata_size)"
- [#65797](https://github.com/vllm-project/vllm/issues/65797) [RFC]: Token-id parity with the Python frontend as a tested contract for the Rust frontend `rust` `kimi`

#### 🔒 Closed Issues
- [#58726](https://github.com/vllm-project/vllm/issues/58726) [Performance]: Weight loading is slow on GB10 (DGX Spark): per-tensor H2D copies straight from safetensors mmap views
- [#63944](https://github.com/vllm-project/vllm/issues/63944) [Bug]: int8_per_token_head scale-view fill overwrites Gated DeltaNet state in hybrid models
- [#49859](https://github.com/vllm-project/vllm/issues/49859) [Bug]: v0.26.0 EngineCore fails to start on SM90+ — _warmup_ll_bf16_router_gemm hits AttributeError: module 'cutlass.cute.core' has no attribute 'ThrMma' (nvidia-cutlass-dsl 4.6.0)
- [#47746](https://github.com/vllm-project/vllm/issues/47746) [Bug]: AnthropicContentBlock missing per-type field validation for tool_use blocks
- [#47783](https://github.com/vllm-project/vllm/issues/47783) [Bug]: DSV4 sparse MLA emits garbage (gsm8k ~0%) with the packed KV layout from #44577
- [#63467](https://github.com/vllm-project/vllm/issues/63467) [Bug]: Wrong token ids from fastokens' split cache before 0.3.4 (Rust frontend, VLLM_USE_FASTOKENS)
- [#47763](https://github.com/vllm-project/vllm/issues/47763) [Performance]: MiniMax-M3 verify-as-decode re-streams the sparse KV from HBM once per draft token
- [#47768](https://github.com/vllm-project/vllm/issues/47768) [RFC]: vLLM gRPC server API for downstream integrations
- [#47847](https://github.com/vllm-project/vllm/issues/47847) [Bug]: disable_flashinfer_q_quantization + fp8 KV + spec decode silently corrupts sliding-window models on SM100 (trtllm-gen); BF16-Q paths also mis-apply q/k/v scales
- [#47788](https://github.com/vllm-project/vllm/issues/47788) [Bug]: Qwen3-Omni use_audio_in_video via --mm-processor-kwargs is broken in online serving: engine crash at startup, audio silently never fed, interleave placeholder/mRoPE errors
- [#47918](https://github.com/vllm-project/vllm/issues/47918) [Bug]: V1 + Ray distributed executor + LoRA — execute_model returns NoneType on NVIDIA GPU
- [#60791](https://github.com/vllm-project/vllm/issues/60791) [Bug]: MiniMax-M3: PP startup, NIXL+PP prefill, NIXL/offload+HMA+DSpark, offload+PP, Mooncake recompute loop, MSA prefill OOM
- [#64546](https://github.com/vllm-project/vllm/issues/64546) Muse tool parser JSON-decodes Optional[str] parameters, so "10001" becomes 10001
- [#65811](https://github.com/vllm-project/vllm/issues/65811) [Bug]: Qwen3.5-122B + LoRA crashes at startup: _inject_lora_into_fused_moe asserts TritonExperts, but FlashInferExperts is auto-selected
- [#65324](https://github.com/vllm-project/vllm/issues/65324) [Bug]: Requests queued during level-2 sleep run before `reload_weights` and return wrong output with HTTP 200
- [#49216](https://github.com/vllm-project/vllm/issues/49216) [Bug]: Tools streaming internal error when `VLLM_ENFORCE_STRICT_TOOL_CALLING=false` and `tool_choice=required`
- [#65277](https://github.com/vllm-project/vllm/issues/65277) [Feature]: Rust frontend does not export `vllm:cache_config_info`
- [#61881](https://github.com/vllm-project/vllm/issues/61881) [Refactor]: Split MRV2 CUDA graph capture planning by batch type
- [#64639](https://github.com/vllm-project/vllm/issues/64639) [Bug]: 0.30.0 kimi-k3 PD分离 使用MLA-Block5草稿模型版本接收率基本为0

### SGLang (`sgl-project/sglang`)

**Stars:** 38,509 · **Open issues:** 6,535 · **Last push:** <1h ago

On November 6, 2026, there were no new releases for SGLang, but several important pull requests were merged, including the addition of MXFP8 W8A8 compressed-tensors and initial support for Cambricon MLUs. Significant developments also included the pruning of dead code in the diffusion tests and enhancements for background transfer capabilities. Noteworthy fixes addressed issues with LLaVA-1.5 and the optimization of KV-cache scales for various models. Among new issues, a critical bug was reported concerning the AttributeError in the QwenImagePipelineConfig, which could impact functionality.

#### ✅ Merged PRs
- [#48401](https://github.com/sgl-project/sglang/pull/48401) [Test] [Intel] jit: Stub tvm_ffi paths in test_jit_cache when tvm_ffi is absent
- [#46175](https://github.com/sgl-project/sglang/pull/46175) [CI] rust: Publish sglang-api-types on crates.io
- [#41532](https://github.com/sgl-project/sglang/pull/41532) [Feat] [XPU] quant: Add MXFP8 W8A8 compressed-tensors
- [#48758](https://github.com/sgl-project/sglang/pull/48758) [Refactor] utils: Move domain-dependent modules out of `srt.utils`
- [#33226](https://github.com/sgl-project/sglang/pull/33226) [Feat] cp: Support FlashInfer prefill context parallelism
- [#45149](https://github.com/sgl-project/sglang/pull/45149) [Feat] [MLU] platform: Add initial support for Cambricon MLUs
- [#45798](https://github.com/sgl-project/sglang/pull/45798) [Fix] llava: Load LLaVA-1.5 CLIP tower
- [#48756](https://github.com/sgl-project/sglang/pull/48756) [CI] spec: Shrink the radix workload in the EAGLE retract stress tests
- [#45945](https://github.com/sgl-project/sglang/pull/45945) [Feat] comm: Gated background transfers
- [#48366](https://github.com/sgl-project/sglang/pull/48366) [Refactor] kernels/diffusion/tests: Prune new dead code and make silently skipped tests run
- [#48692](https://github.com/sgl-project/sglang/pull/48692) [CI] [AMD] spur: Take HF_TOKEN from the runner environment
- [#48264](https://github.com/sgl-project/sglang/pull/48264) [Feat] beam: support LoRA for BF16 and FP8
- [#48450](https://github.com/sgl-project/sglang/pull/48450) [Fix] mem_cache: Order lazy unified-pool page reuse after the latest forward
- [#47724](https://github.com/sgl-project/sglang/pull/47724) [Perf] diffusion: qknorm_complex_rope keeps two Q/K rows in flight per half-warp
- [#48755](https://github.com/sgl-project/sglang/pull/48755) [Chore] utils: Guard `srt.utils` imports and remove dead code
- [#47963](https://github.com/sgl-project/sglang/pull/47963) [Fix] rust-server: Park the idle scheduler on its request ring only with --sleep-on-idle
- [#48722](https://github.com/sgl-project/sglang/pull/48722) [CI] [AMD] nightly-disagg: Install the checkout's runtime deps over the image
- [#48732](https://github.com/sgl-project/sglang/pull/48732) [Fix] gemm: Keep Kimi-K3's tiny GEMM shapes on SIMT at every batch size
- [#48719](https://github.com/sgl-project/sglang/pull/48719) [Fix] docker: update NVIDIA megakernel pin for Qwen3.5 follow-up kernels
- [#48037](https://github.com/sgl-project/sglang/pull/48037) [Perf] disaggregation: Cache host-staged decode admission accounting across a transfer pass
- [#48452](https://github.com/sgl-project/sglang/pull/48452) [Fix] disaggregation: Publish a yielded optimistic prefill's KV under a write-through cache
- [#48737](https://github.com/sgl-project/sglang/pull/48737) [Chore] ci: Cut deprecation warnings and TBO debug logs from CI output
- [#48734](https://github.com/sgl-project/sglang/pull/48734) [Fix] spec: Make per-step draft `out_cache_loc` contiguous for KV writes
- [#48606](https://github.com/sgl-project/sglang/pull/48606) [Refactor] scheduler: Release retracted, paused and chunked-aborted requests through RequestRetirer
- [#42718](https://github.com/sgl-project/sglang/pull/42718) [Fix] dsv41: Run DSpark compact verify by mapping packed verify tokens to their requests
- [#48622](https://github.com/sgl-project/sglang/pull/48622) [Perf] deepseek_v4: call the current DeepGEMM paged MQA API for DSv4.1 decode
- [#48738](https://github.com/sgl-project/sglang/pull/48738) [CI] rerun-test: Tag each test command with its registered CI stage
- [#48617](https://github.com/sgl-project/sglang/pull/48617) [CI] runners: Move base-b H100 tests to 1-gpu-small, extra-a, or nightly
- [#40421](https://github.com/sgl-project/sglang/pull/40421) [Perf] [NVIDIA] deepseek-v4.1: Reuse dequantized compressed KV in PD CP prefill (7/N)
- [#48491](https://github.com/sgl-project/sglang/pull/48491) [Refactor] scheduler: Release every PD disaggregation exit through RequestRetirer
- [#48718](https://github.com/sgl-project/sglang/pull/48718) [Test] Remove the unit tests that #48504 ports from the Kimi-K3.1 branch

#### 🐛 New Issues
- [#48635](https://github.com/sgl-project/sglang/issues/48635) [Bug] AttributeError: 'QwenImagePipelineConfig' object has no attribute 'sample_sigmas'。 💬2
- [#48557](https://github.com/sgl-project/sglang/issues/48557) [Bug] `/v1/responses` streaming returns HTTP 200 + `response.failed` for context-length-exceeded requests, while `/v1/chat/completions` returns HTTP 400 💬2
- [#48749](https://github.com/sgl-project/sglang/issues/48749) [Bug] Checkpoint FP8 KV-cache scales are ignored: attention built without quant_config (GLM-4.5, Llama 4, Qwen3-MoE, GPT-OSS, HunYuan, HY3, K-EXAONE, LFM2) 💬1
- [#48593](https://github.com/sgl-project/sglang/issues/48593) [Bug] Full prefill CUDA graph capture fails for hybrid linear attention models (IndexError in HybridLinearAttnBackend._replay_metadata) 💬1
- [#48581](https://github.com/sgl-project/sglang/issues/48581) [Feature] Honor chat-template stop strings when ChatCompletionRequest carries input_ids 💬1
- [#48791](https://github.com/sgl-project/sglang/issues/48791) [Bug] Reasoning parser splits on first occurrence of closing think tag: quoted </think> inside reasoning truncates reasoning_content and leaks the rest of the CoT into content
- [#48766](https://github.com/sgl-project/sglang/issues/48766) [Feature] Support SID-based generative retrieval with constrained decoding and optimized beam search
- [#48747](https://github.com/sgl-project/sglang/issues/48747) [Bug] FlashInfer and Triton apply checkpoint KV-cache scales to a BF16 KV cache, so decode output is garbage (default flags for fp8/Quark FP8-KV checkpoints)
- [#48705](https://github.com/sgl-project/sglang/issues/48705) [Tracking] Multimodal parity between the Rust and Python frontends
- [#48725](https://github.com/sgl-project/sglang/issues/48725) [Bug] NextN/MTP drafts of ModelOpt NVFP4 checkpoints get no KV-cache scales, so the draft's FP8 KV cache runs at 1.0
- [#48720](https://github.com/sgl-project/sglang/issues/48720) Kimi-K3.1 Issue Tracker
- [#48706](https://github.com/sgl-project/sglang/issues/48706) [Bug] GLM-4.7-Flash ignores ModelOpt FP8 KV-cache scales (self_attn.k_proj.k_scale / v_proj.v_scale)
- [#48707](https://github.com/sgl-project/sglang/issues/48707) [Bug] DeepSeek MLA FP8 KV cache: k/v_scale corrupt decode (ModelOpt names) or are dropped (compressed-tensors)
- [#48703](https://github.com/sgl-project/sglang/issues/48703) [Doc] sglang-diffusion guide subclasses ImageSamplingParams, which does not exist (the base class is SamplingParams)
- [#48677](https://github.com/sgl-project/sglang/issues/48677) [CI] attention/unittests/mla/test_flashinfer.py fails on main: FlashInfer MLA EAGLE draft CUDA-graph outputs mismatch on H100
- [#48626](https://github.com/sgl-project/sglang/issues/48626) [Tracking] Predictable long-context agent serving: APIs, cache usage, and resource lifetime
- [#48660](https://github.com/sgl-project/sglang/issues/48660) [Bug] TBO can change deterministic prefill outputs and drop speculative auxiliary hidden states
- [#48623](https://github.com/sgl-project/sglang/issues/48623) [Perf] radix cache: each eviction rebuilds a heap over all evictable leaves
- [#48618](https://github.com/sgl-project/sglang/issues/48618) [Bug]
- [#48603](https://github.com/sgl-project/sglang/issues/48603) [Bug] EPLB statistics include empty draft records during speculative decoding
- [#48601](https://github.com/sgl-project/sglang/issues/48601) [Bug] Decode HiCache returns HTTP 500 when a shorter prefix has no Mamba checkpoint
- [#48582](https://github.com/sgl-project/sglang/issues/48582) [RFC] Integrate MindIE-SD as an Acceleration Library for SGLang Diffusion
- [#48580](https://github.com/sgl-project/sglang/issues/48580) [Feature] Add per-request skip_detokenize option to sglang.api.v1.GenerateRequest
- [#48561](https://github.com/sgl-project/sglang/issues/48561) [Bug] DeepSeek V4.1: natural EOS with unclosed reasoning produces a successful empty answer

#### 🔒 Closed Issues
- [#31206](https://github.com/sgl-project/sglang/issues/31206) [Bug] sgl-router (PD): open circuit breaker still dispatches to decode, producing a permanent fake-dead prefill
- [#29857](https://github.com/sgl-project/sglang/issues/29857) [Bug] v0.5.14: With EAGLE/MTP on, KV pool profiler leaves ~50 GB VRAM idle on hybrid GDN model (Qwen3.6-27B NVFP4)
- [#33185](https://github.com/sgl-project/sglang/issues/33185) [Bug] DeepSeek-V4-Flash-0731: reasoning_effort mapped one level off — `high` is a no-op and vendor `max` is unreachable
- [#37326](https://github.com/sgl-project/sglang/issues/37326) [Bug] NEXTN/MTP draft acceptance decays to ~0 over server uptime on qwen4_exp (Qwen3.8-Flash-Next), fully restored by a restart
- [#38143](https://github.com/sgl-project/sglang/issues/38143) [Bug] MiniMax-M3 W4A16 (compressed-tensors) on 2x DGX Spark (sm_121, TP=2): serves but every token is id 0 — all-NUL output on the Triton MiniMaxSparse path; same weights correct on vLLM
- [#30550](https://github.com/sgl-project/sglang/issues/30550) [Bug] [MLX] SchedulerProfilerManager._start_profile returns success=False under mocked Metal capture
- [#36906](https://github.com/sgl-project/sglang/issues/36906) [Bug] GLM-5.3-Flash crashes at startup under pipeline parallelism — KeyError: 'residual'
- [#39173](https://github.com/sgl-project/sglang/issues/39173) [Bug] DeepSeek-V4.1-Flash + Engram: profiled SPS table (compact ragged verify) dies in CUDA-graph capture with "engram target-verify expects one equal block per request"
- [#38207](https://github.com/sgl-project/sglang/issues/38207) [Bug] GLM-5.3 DPC crashes
- [#32441](https://github.com/sgl-project/sglang/issues/32441) [Bug] [MLX] test_batched_decode_matches_solo asserts bitwise solo/batched token equality, which no batch-shape-varying backend can provide
- [#37892](https://github.com/sgl-project/sglang/issues/37892) [Bug] DeepSeek-V4 long-context prefill: illegal memory access in the DSA indexer top-k kernel (`topk_v1.cuh:348`); the paged prefill path can never reach the v2 kernel
- [#38029](https://github.com/sgl-project/sglang/issues/38029) [Bug] EAGLE DSA draft backend misses KVIndexTranslator in FP8 MHA prefix reads
- [#48344](https://github.com/sgl-project/sglang/issues/48344) [RFC] mem_cache: Cross-branch KV page splicing and cursor fork/rewind for hybrid models (Qwen3.5 / GDN)
- [#38236](https://github.com/sgl-project/sglang/issues/38236) [Bug] DeepseekV4ForCausalLM hook rejects `--speculative-algorithm NEXTN` because the NEXTN->EAGLE alias is resolved after model-specific hooks
- [#38196](https://github.com/sgl-project/sglang/issues/38196) [Bug] [NPU] ascend attention backend silently corrupts output with page_size 16 (128 OK, 1 rejected per #25169)
- [#43428](https://github.com/sgl-project/sglang/issues/43428) [Feature] Add native SmolLM3 support

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 133,498 · **Open issues:** 2,578 · **Last push:** <1h ago

In the last 24 hours, llama.cpp released several new versions, notably b12143 which introduced Vulkan FWHT kernels for block widths above 512 and added F16 input capabilities, and b12142 that improved the Vulkan FA dequant path by checking combined K+V f16 scratch size. Significant merged features included updates to the llama-server that now uses reference-counted checkpoints instead of deep copies, enhancing efficiency and reducing overhead. The day also saw the introduction of a new issue (#31734) regarding a bug in the CPU F16 dot product accumulations on ARM, which has drawn attention for its potential impact on performance. Overall, today's developments reflect ongoing enhancements in Vulkan support and server efficiency, alongside emerging concerns that may affect users running on specific hardware.

#### 🚀 New Releases
- [b12143](https://github.com/ggml-org/llama.cpp/releases/tag/b12143) b12143
- [b12142](https://github.com/ggml-org/llama.cpp/releases/tag/b12142) b12142
- [b12141](https://github.com/ggml-org/llama.cpp/releases/tag/b12141) b12141
- [b12140](https://github.com/ggml-org/llama.cpp/releases/tag/b12140) b12140
- [b12138](https://github.com/ggml-org/llama.cpp/releases/tag/b12138) b12138
- [b12137](https://github.com/ggml-org/llama.cpp/releases/tag/b12137) b12137
- [b12136](https://github.com/ggml-org/llama.cpp/releases/tag/b12136) b12136
- [b12135](https://github.com/ggml-org/llama.cpp/releases/tag/b12135) b12135
- [b12132](https://github.com/ggml-org/llama.cpp/releases/tag/b12132) b12132
- [b12131](https://github.com/ggml-org/llama.cpp/releases/tag/b12131) b12131

#### ✅ Merged PRs
- [#31589](https://github.com/ggml-org/llama.cpp/pull/31589) Add support for the xing4_0
- [#31744](https://github.com/ggml-org/llama.cpp/pull/31744) hexagon: Implement set_tensor_n and improve repacking/tiling robustness
- [#31760](https://github.com/ggml-org/llama.cpp/pull/31760) mtmd: enable cmake unity build
- [#31755](https://github.com/ggml-org/llama.cpp/pull/31755) tests : drop u8path()
- [#31705](https://github.com/ggml-org/llama.cpp/pull/31705) ci: fix build-cmake-pkg ccache
- [#31683](https://github.com/ggml-org/llama.cpp/pull/31683) llama: fix kv shifting, add tests, add per-model build_rope
- [#31749](https://github.com/ggml-org/llama.cpp/pull/31749) models : recursive fix
- [#31698](https://github.com/ggml-org/llama.cpp/pull/31698) llama, mtmd: (chatterbox) add use_classifier_free_guidance as gguf metadata
- [#31693](https://github.com/ggml-org/llama.cpp/pull/31693) llama: add graph build_rope
- [#31692](https://github.com/ggml-org/llama.cpp/pull/31692) model : add Ripple (ricursiveai)
- [#31733](https://github.com/ggml-org/llama.cpp/pull/31733) llama: refactoring: move model to class member of llm_graph_context
- [#31712](https://github.com/ggml-org/llama.cpp/pull/31712) ui: prevent a hidden sidebar from intercepting clicks
- [#31728](https://github.com/ggml-org/llama.cpp/pull/31728) server : simplify windows MCP command resolution
- [#31731](https://github.com/ggml-org/llama.cpp/pull/31731) vendor : update cpp-httplib to 0.65.0
- [#31005](https://github.com/ggml-org/llama.cpp/pull/31005) ggml-cuda: sanitize post-bias NaNs in MoE selection
- [#30769](https://github.com/ggml-org/llama.cpp/pull/30769) vulkan: Implement test-fusion interface
- [#31679](https://github.com/ggml-org/llama.cpp/pull/31679) CUDA: use highest compiled arch in get_mmvq_mmid_max_batch
- [#30280](https://github.com/ggml-org/llama.cpp/pull/30280) RDNA3/4 Vulkan Large-Tile Split-K Optimization
- [#31717](https://github.com/ggml-org/llama.cpp/pull/31717) gguf-py : external chat templates have precedence over tokenizer_config
- [#31615](https://github.com/ggml-org/llama.cpp/pull/31615) metal : fuse DeepSeek-V4/V4.1 and GLM MoE routing
- [#29050](https://github.com/ggml-org/llama.cpp/pull/29050) CUDA/HIP: matrix-core (MFMA) lightning indexer for CDNA2 (gfx90a)
- [#31047](https://github.com/ggml-org/llama.cpp/pull/31047) CUDA: linearize MoE data layout for MMQ/MMF
- [#29772](https://github.com/ggml-org/llama.cpp/pull/29772) vulkan: FWHT kernels for block widths above 512
- [#30487](https://github.com/ggml-org/llama.cpp/pull/30487) vulkan : check combined K+V f16 scratch size in FA dequant path
- [#30137](https://github.com/ggml-org/llama.cpp/pull/30137) llama-server: Use reference-counted checkpoints instead of deep-copies
- [#30206](https://github.com/ggml-org/llama.cpp/pull/30206) ggml : support `truncate=false` for YaRN
- [#31611](https://github.com/ggml-org/llama.cpp/pull/31611) conversion : resolve quantized_layers from source tensor names
- [#30982](https://github.com/ggml-org/llama.cpp/pull/30982) metal : use mul_mm for 32 <= K < 64
- [#31714](https://github.com/ggml-org/llama.cpp/pull/31714) server : reject non-object session updates
- [#31569](https://github.com/ggml-org/llama.cpp/pull/31569) fit : account for skipped NextN layers when setting n_gpu_layers
- [#31591](https://github.com/ggml-org/llama.cpp/pull/31591) webgpu : add MEAN support
- [#31660](https://github.com/ggml-org/llama.cpp/pull/31660) graph: store the MTP conv snapshots of every recurrent model in one set_rows
- [#31412](https://github.com/ggml-org/llama.cpp/pull/31412) ci : remove unused model generation
- [#31681](https://github.com/ggml-org/llama.cpp/pull/31681) common : drop u8path() and use generic_string()
- [#31682](https://github.com/ggml-org/llama.cpp/pull/31682) server : drop u8path() and use generic_string()
- [#31684](https://github.com/ggml-org/llama.cpp/pull/31684) rpc : align code with common.cpp
- [#31587](https://github.com/ggml-org/llama.cpp/pull/31587) vulkan: Re-enable large coopmat matmul configuration on fixed AMD proprietary drivers
- [#31426](https://github.com/ggml-org/llama.cpp/pull/31426) tests: fix CI flakes of TOPK_MOE caused by near ties
- [#31688](https://github.com/ggml-org/llama.cpp/pull/31688) metal: align command buffer splits on fusion groups for stable output
- [#31657](https://github.com/ggml-org/llama.cpp/pull/31657) qwen2 : add nvfp4 scales to build_ffn
- [#31694](https://github.com/ggml-org/llama.cpp/pull/31694) opencl: enable f32 and q5_k multi column GEMV by default for Adreno X2
- [#31687](https://github.com/ggml-org/llama.cpp/pull/31687) opencl: support non-contig sigmoid

#### 🐛 New Issues
- [#31734](https://github.com/ggml-org/llama.cpp/issues/31734) Eval bug: CPU F16 dot product accumulates in F16 on ARM (FP16 arithmetic, no SVE), overflows to inf `bug-unconfirmed` 💬4
- [#31711](https://github.com/ggml-org/llama.cpp/issues/31711) Misc. bug: CUDA decode fragmentation with non-unified KV and 32 variable-length requests 💬3
- [#31756](https://github.com/ggml-org/llama.cpp/issues/31756) Compile bug: CUDA11 sm_50 fails in lightning-indexer.cu `bug-unconfirmed`
- [#31739](https://github.com/ggml-org/llama.cpp/issues/31739) Eval bug: new Better UD 3.1 quants support on vulkan backend in AMD strix halo gfx1151 `bug-unconfirmed` 💬1
- [#31774](https://github.com/ggml-org/llama.cpp/issues/31774) Discussion: Possible fast paths for greedy and draft sampling
- [#31773](https://github.com/ggml-org/llama.cpp/issues/31773) Proposal: Investigate speculative decoding checkpoint initialization
- [#31772](https://github.com/ggml-org/llama.cpp/issues/31772) Proposal: Configurable resource limits for sequence-state I/O
- [#31771](https://github.com/ggml-org/llama.cpp/issues/31771) Discussion: KV capacity admission, slot restore, and per-sequence windowing
- [#31770](https://github.com/ggml-org/llama.cpp/issues/31770) Proposal: gfx906 MMVQ decode and fused glue kernels
- [#31769](https://github.com/ggml-org/llama.cpp/issues/31769) Proposal: Quantized-KV GQA flash attention for AMD gfx906 (MI50)
- [#31768](https://github.com/ggml-org/llama.cpp/issues/31768) Proposal: BF16 wire representation for HIP AllReduce in two-GPU tensor split
- [#31767](https://github.com/ggml-org/llama.cpp/issues/31767) Proposal: FastMTP speculative draft graph and scatter
- [#31766](https://github.com/ggml-org/llama.cpp/issues/31766) Proposal: CUDA GQA flash attention for q8_0 K / q4_0 V
- [#31765](https://github.com/ggml-org/llama.cpp/issues/31765) Proposal: Optimized gfx906 (MI50) decode kernels
- [#31754](https://github.com/ggml-org/llama.cpp/issues/31754) Feature Request: Implement OpenAI's TTS /v1/audio/speech API `enhancement`
- [#31713](https://github.com/ggml-org/llama.cpp/issues/31713) [ggml-cpu] AVX-512BW _1x8/_1x4/_1x3/_1x2 multi-column kernels, BMI2+SWAR IQ2_XXS sign unpacker & SwiGLU-H2 quantization for 284B DeepSeek-V4-Flash in 57.61 GiB RAM (+77.1% pp)
- [#31723](https://github.com/ggml-org/llama.cpp/issues/31723) rpc-server: document or release cached device memory after the last client disconnects?
- [#31710](https://github.com/ggml-org/llama.cpp/issues/31710) Feature Request: Either GPU alone produces perfect output. The corruption appears only when layers are split across both. `enhancement`

#### 🔒 Closed Issues
- [#21956](https://github.com/ggml-org/llama.cpp/issues/21956) (Planning) Support audio output in mtmd
- [#23609](https://github.com/ggml-org/llama.cpp/issues/23609) Feature Request: Expose Custom Parameters in Web GUI
- [#23622](https://github.com/ggml-org/llama.cpp/issues/23622) UI Bug: Editing assistant message duplicates reasoning block and corrupts stored content
- [#23854](https://github.com/ggml-org/llama.cpp/issues/23854) Misc. bug: The title should ideally be less than 64 characters in length
- [#29164](https://github.com/ggml-org/llama.cpp/issues/29164) Misc. bug: Model loads into mobile GPU CUDA0, but inference happens on iGPU
- [#30524](https://github.com/ggml-org/llama.cpp/issues/30524) Eval bug: CUDA: MUL_MAT_ID via MMVQ fails with "invalid argument" on Turing when device code is compiled for an older arch (e.g. 61-virtual)
- [#25097](https://github.com/ggml-org/llama.cpp/issues/25097) Misc. bug: tg in webui viewing in phone is consistently 10% higher than webui in desktop
- [#28214](https://github.com/ggml-org/llama.cpp/issues/28214) Vulkan: GPU firmware crashes on Imagination PowerVR C-series (Pixel 11 Pro, Tensor G6, subgroupSize 128)
- [#24345](https://github.com/ggml-org/llama.cpp/issues/24345) Feature: Improve Message Steering & Queuing features
- [#24348](https://github.com/ggml-org/llama.cpp/issues/24348) Feature: Improve Tool Permissions management & logic
- [#29241](https://github.com/ggml-org/llama.cpp/issues/29241) Eval bug: [SYCL][mtmd] llama-mtmd-cli aborts with 0xC0000409 after threadpool init on Intel Arc Pro B70 (Windows) — before image encode
- [#29194](https://github.com/ggml-org/llama.cpp/issues/29194) Feature Request: expose an OpenSearch description so browsers can add the llama.cpp WebUI as a search engine
- [#30998](https://github.com/ggml-org/llama.cpp/issues/30998) Misc. bug: https://llama.app/install.sh doesn't add `~/.local/bin` to path, cannot find llama after install
- [#30935](https://github.com/ggml-org/llama.cpp/issues/30935) Windows bundled llama-server.exe is missing `longPathAware`: GGUF paths > 260 chars fail with "No such file or directory" even when the file exists and LongPathsEnabled=1
- [#31603](https://github.com/ggml-org/llama.cpp/issues/31603) Eval bug: ~20% slower MoE prompt processing on RDNA1 (gfx1010) since #29948 (MMQ grid order change)
- [#31691](https://github.com/ggml-org/llama.cpp/issues/31691) Feature Request: ricursiveAI/Ripple-65B-Preview support
- [#30048](https://github.com/ggml-org/llama.cpp/issues/30048) Vulkan: FA quantized-KV dequant scratch can exceed maxBufferSize at long context
- [#31531](https://github.com/ggml-org/llama.cpp/issues/31531) Misc. bug: When the “--fit on” parameter is used, one layer is not offloaded to GPU (it remains on the CPU), which causes performance to drop by half.

### Ollama (`ollama/ollama`)

**Stars:** 186,043 · **Open issues:** 4,584 · **Last push:** 1h ago

On November 6, 2026, Ollama did not release any new versions, but significant progress was made with several important merged pull requests. Notably, PR #19539 ensures that the `/v1/models` endpoint returns an empty array when no models are installed, enhancing API reliability. Additionally, PR #19550 addresses the mlxrunner by closing the generation cache on shutdown, while PR #19545 allows parallel requests for recurrent and vision models, improving performance. A critical new issue, #19558, reports a crash of the llama-server when loading models on AMD Renoir iGPU, highlighting ongoing compatibility challenges. Overall, the day's focus was on optimizing existing features and addressing emerging concerns within the system.

#### ✅ Merged PRs
- [#19539](https://github.com/ollama/ollama/pull/19539) openai: return an empty array for /v1/models when no models are installed
- [#19501](https://github.com/ollama/ollama/pull/19501) openai: forward truncation option in responses requests
- [#19506](https://github.com/ollama/ollama/pull/19506) cmd/launch: add Kimi Code CLI support
- [#19550](https://github.com/ollama/ollama/pull/19550) mlxrunner: close generation cache on shutdown
- [#19478](https://github.com/ollama/ollama/pull/19478) cmd: restore the no-argument launcher
- [#19533](https://github.com/ollama/ollama/pull/19533) cmd/launch: show gateway model names in Claude Desktop's model picker
- [#19545](https://github.com/ollama/ollama/pull/19545) llama-server: allow parallel requests for recurrent and vision models

#### 🐛 New Issues
- [#19558](https://github.com/ollama/ollama/issues/19558) Vulkan backend: llama-server crashes (NTSTATUS 0xe06d7363) at model load on AMD Renoir iGPU (Ryzen 4700U, gfx90c) in 0.40.14 and 0.40.15-rc2 💬3
- [#19554](https://github.com/ollama/ollama/issues/19554) Support Hindsight's decision model, hs-decide-1-flash `feature request` `model`
- [#19551](https://github.com/ollama/ollama/issues/19551) mlxrunner: request stop sequences are ignored
- [#19549](https://github.com/ollama/ollama/issues/19549) gemma4: a string argument missing its opening `<|"|>` is dropped silently (repair keeps the model's closing delimiter)
- [#19537](https://github.com/ollama/ollama/issues/19537) 版本更新后效果更差了。因为资源占用更多、更死板了。
- [#19535](https://github.com/ollama/ollama/issues/19535) Feature request: Intel NPU backend (via OpenVINO) for local inference `feature request`

#### 🔒 Closed Issues
- [#18796](https://github.com/ollama/ollama/issues/18796) fails to run on a 2nd 'ollama run'
- [#19420](https://github.com/ollama/ollama/issues/19420) Fresh install of Ollama and trying to use Gemma4 but getting errors.
- [#19060](https://github.com/ollama/ollama/issues/19060) GPT-OSS 20B returns empty response on AMD Radeon Pro 5700 XT (16 GB) via Vulkan, while CPU inference works
- [#19067](https://github.com/ollama/ollama/issues/19067) Auto-Start of ollama without permisson
- [#19492](https://github.com/ollama/ollama/issues/19492) Responses API silently truncates oversized input with truncation disabled (0.40.13 and 0.40.14, Bonsai 27B)
- [#19483](https://github.com/ollama/ollama/issues/19483) Ollama GitHub Issues
- [#19353](https://github.com/ollama/ollama/issues/19353) `qwen3.8:27b-mlx` never emits `tool_calls` when the assistant produces free-text content first (only works when content is empty)
- [#18968](https://github.com/ollama/ollama/issues/18968) Ollama performs between 25% and 30% less in all models
- [#18922](https://github.com/ollama/ollama/issues/18922) proposal: add KailA (kail) architecture support to the llama.cpp compat layer
- [#19306](https://github.com/ollama/ollama/issues/19306) Expose renderer, parser, and template_source on ollama.com model library pages
- [#19381](https://github.com/ollama/ollama/issues/19381) OpenAI compat: `/v1/models` returns `"data": null` instead of `[]` when no models are installed
- [#19551](https://github.com/ollama/ollama/issues/19551) mlxrunner: request stop sequences are ignored
- [#19535](https://github.com/ollama/ollama/issues/19535) Feature request: Intel NPU backend (via OpenVINO) for local inference

### LiteLLM (`BerriAI/litellm`)

**Stars:** 62,796 · **Open issues:** 5,725 · **Last push:** <1h ago

Today, LiteLLM released version 1.108.1, which includes the introduction of cosign for signing all Docker images, enhancing security by ensuring image integrity with a cryptographic key linked to a previous commit. Significant merged features include a new proxy enhancement allowing clients to select only whitelisted S3 buckets and a notable beta language setting addition to the account menu. Several important fixes were implemented, particularly addressing issues with Bedrock's handling of encrypted agent messages and ensuring accurate routing behavior in the system. Among the new issues reported, the open bug regarding OpenRouter streaming, which emits an empty choice after processing, garnered considerable attention due to its implications for usage tracking.

#### 🚀 New Releases
- [v1.108.1](https://github.com/BerriAI/litellm/releases/tag/v1.108.1) v1.108.1

#### ✅ Merged PRs
- [#47496](https://github.com/BerriAI/litellm/pull/47496) feat(proxy)!: only let clients pick S3 buckets the admin allowed
- [#50307](https://github.com/BerriAI/litellm/pull/50307) test(copilot): seed direct access tokens in Copilot wire fixtures
- [#47601](https://github.com/BerriAI/litellm/pull/47601) fix(bedrock)!: use the S3 bucket passed to SDK file calls instead of requiring proxy config
- [#50137](https://github.com/BerriAI/litellm/pull/50137) fix(audio-transcription): keep transcripts out of transcription error messages
- [#50275](https://github.com/BerriAI/litellm/pull/50275) fix(router): drop supports_web_search false deployments for Anthropic web_search_* and Gemini googleSearch tools
- [#50309](https://github.com/BerriAI/litellm/pull/50309) feat(ui): add a beta language setting to the account menu
- [#50305](https://github.com/BerriAI/litellm/pull/50305) fix(proxy): probe scrypt instead of MD5 in the fips_mode OpenSSL check
- [#49872](https://github.com/BerriAI/litellm/pull/49872) feat(accounting)!: make the SpendLogs ledger the default accounting path
- [#50241](https://github.com/BerriAI/litellm/pull/50241) refactor(prompt_templates): move JSON schema helpers out of common_utils into json_schema_utils
- [#50222](https://github.com/BerriAI/litellm/pull/50222) feat(bedrock): default to native structured output on Opus 5 and Opus 4.8
- [#49749](https://github.com/BerriAI/litellm/pull/49749) feat(ui): allow custom user IDs in user invitations
- [#49748](https://github.com/BerriAI/litellm/pull/49748) fix(users)!: validate custom IDs and reject concurrent duplicate creation
- [#50302](https://github.com/BerriAI/litellm/pull/50302) fix(ui): center the deployment health banner icon on its title
- [#50195](https://github.com/BerriAI/litellm/pull/50195) feat(skills): add sortable Skills Hub catalog and publication audit
- [#50198](https://github.com/BerriAI/litellm/pull/50198) build(deps): bump @azure/msal-node to 7.x in vscode-extension to clear osv-scan
- [#50304](https://github.com/BerriAI/litellm/pull/50304) fix(ui): keep chat text sent back to the model in English
- [#50278](https://github.com/BerriAI/litellm/pull/50278) fix(router): let type checkers see the real Router constructor arguments
- [#50211](https://github.com/BerriAI/litellm/pull/50211) feat(skills): add authenticated install and share commands
- [#49605](https://github.com/BerriAI/litellm/pull/49605) feat(packaging): build litellm-proxy gateway wheels
- [#50303](https://github.com/BerriAI/litellm/pull/50303) feat(databricks): add databricks-kimi-k3-1-pro pricing
- [#50296](https://github.com/BerriAI/litellm/pull/50296) fix(azure): sync model retirement dates
- [#50295](https://github.com/BerriAI/litellm/pull/50295) fix(router-core): read time through the router's clock when routing
- [#50274](https://github.com/BerriAI/litellm/pull/50274) fix(types): define the responses compact call types for during_call guardrails and deployment hooks
- [#50261](https://github.com/BerriAI/litellm/pull/50261) test(router): expect a primary stream's stall to cool its deployment
- [#50276](https://github.com/BerriAI/litellm/pull/50276) fix(router): write the prompt caching pin when turn_off_message_logging is on
- [#50271](https://github.com/BerriAI/litellm/pull/50271) refactor(ui): move alerts page text onto i18n
- [#50265](https://github.com/BerriAI/litellm/pull/50265) fix(router): give the rust core's priority scheduler the router's redis cache
- [#50286](https://github.com/BerriAI/litellm/pull/50286) fix(responses): preserve native stream spend on guardrail rejection
- [#50264](https://github.com/BerriAI/litellm/pull/50264) fix(router): retry a team wildcard under the provider-prefixed name
- [#50263](https://github.com/BerriAI/litellm/pull/50263) fix(router): keep the request's metadata on rust core fallback hop kwargs
- [#50151](https://github.com/BerriAI/litellm/pull/50151) feat(interactions): forward continuation_token and type requires_continuation so callers can resume a long decode
- [#50285](https://github.com/BerriAI/litellm/pull/50285) test(copilot): align login guards with direct access tokens
- [#50262](https://github.com/BerriAI/litellm/pull/50262) fix(router): do not cool down a deployment on a 404 from a response id lookup
- [#50259](https://github.com/BerriAI/litellm/pull/50259) test(router): expect no fallback errors header for non-bool include_fallback_errors
- [#50291](https://github.com/BerriAI/litellm/pull/50291) fix(bedrock): add GovCloud Grok 4.7 batch prices
- [#50288](https://github.com/BerriAI/litellm/pull/50288) feat(bedrock): add us-gov.xai.grok-4.7 GovCloud pricing
- [#50144](https://github.com/BerriAI/litellm/pull/50144) fix(anthropic): report temperature/top_p as supported only when the model keeps them
- [#50178](https://github.com/BerriAI/litellm/pull/50178) refactor(router): delete the python router core
- [#50154](https://github.com/BerriAI/litellm/pull/50154) test(providers): expect 503 server_is_overloaded for an upstream overload
- [#50155](https://github.com/BerriAI/litellm/pull/50155) test(routing): expect 503 server_is_overloaded for an upstream overload
- [#50166](https://github.com/BerriAI/litellm/pull/50166) test(providers): expect 503 server_is_overloaded for an upstream overload on the responses bridge
- [#50175](https://github.com/BerriAI/litellm/pull/50175) test(translation): expect thinking usage fields on Bedrock chat
- [#50179](https://github.com/BerriAI/litellm/pull/50179) test(translation): expect thinking usage fields on Bedrock messages
- [#50181](https://github.com/BerriAI/litellm/pull/50181) test(translation): expect thinking usage fields on Bedrock responses
- [#50258](https://github.com/BerriAI/litellm/pull/50258) docs(pr-template): require rerunnable proof setup and collapsed long output
- [#50139](https://github.com/BerriAI/litellm/pull/50139) fix(zscaler_ai_guard)!: scan only the last user turn on requests
- [#50242](https://github.com/BerriAI/litellm/pull/50242) refactor(ui): move remaining Aria and admin text onto i18n
- [#50239](https://github.com/BerriAI/litellm/pull/50239) refactor(ui): move remaining playground, chat and compliance text onto i18n
- [#50238](https://github.com/BerriAI/litellm/pull/50238) refactor(ui): move remaining keys, teams and agents text onto i18n
- [#50148](https://github.com/BerriAI/litellm/pull/50148) refactor(ui): move remaining shell and nav text onto i18n
- [#50147](https://github.com/BerriAI/litellm/pull/50147) refactor(ui): move remaining models text onto i18n
- [#50146](https://github.com/BerriAI/litellm/pull/50146) refactor(ui): move remaining logs and usage text onto i18n
- [#50252](https://github.com/BerriAI/litellm/pull/50252) test(skills): assert patch publication and serialize preference writes
- [#50251](https://github.com/BerriAI/litellm/pull/50251) test(usage): assert per-user entity spend and metadata
- [#50254](https://github.com/BerriAI/litellm/pull/50254) fix(openai): add gpt-6-cyber max input tokens and the gpt-5.5-cyber-preview shutdown date
- [#50240](https://github.com/BerriAI/litellm/pull/50240) refactor(bedrock): drop the redundant $defs deep copy in tool conversion
- [#50245](https://github.com/BerriAI/litellm/pull/50245) chore(cost-map): rolling registry audit, add gpt-6-cyber, Kimi K3.1 Pro rows, Jina rerankers and capability flags
- [#50229](https://github.com/BerriAI/litellm/pull/50229) feat(gemini): add Omni 1.2 Flash pricing and update video model successors
- [#49604](https://github.com/BerriAI/litellm/pull/49604) feat(gateway): forward HTTP requests to the Python proxy
- [#50230](https://github.com/BerriAI/litellm/pull/50230) fix(accounting): keep spend commits working when prometheus_client is not installed
- [#50217](https://github.com/BerriAI/litellm/pull/50217) fix(passthrough): skip team deployments when picking proxy-wide pass-through credentials on lts/1.108.x
- [#50218](https://github.com/BerriAI/litellm/pull/50218) fix(openai): never send OPENAI_ADMIN_KEY as the bearer token for a deployment without an api_key
- [#50126](https://github.com/BerriAI/litellm/pull/50126) fix(github-copilot): send the GitHub token directly instead of exchanging it
- [#50183](https://github.com/BerriAI/litellm/pull/50183) docs(pr-template): drop the make-me-human-readable tags from the handwritten description
- [#50227](https://github.com/BerriAI/litellm/pull/50227) feat(vertex-ai): add published gemini omni 1.2 flash pricing and limits
- [#49889](https://github.com/BerriAI/litellm/pull/49889) test(integration): stop the wire peer from dropping requests whose bytes arrive late
- [#49464](https://github.com/BerriAI/litellm/pull/49464) fix(usage): restore per-user spend breakdown on the user aggregated route
- [#50208](https://github.com/BerriAI/litellm/pull/50208) fix(cost-map): add Gemini Flex long prompt prices, Live grounding prices, seven GMI rows and EmpirioLabs page prices
- [#50165](https://github.com/BerriAI/litellm/pull/50165) feat(skills): show download counts and history

#### 🐛 New Issues
- [#50156](https://github.com/BerriAI/litellm/issues/50156) [Bug]: OpenRouter streaming emits an empty post-finish choice without usage before the final usage chunk (v1.108.0) `bug` `llm translation` 💬4
- [#50248](https://github.com/BerriAI/litellm/issues/50248) [Bug]: COHERE_API_BASE is ignored for cohere embeddings (rerank honors it) `llm translation` 💬4
- [#50173](https://github.com/BerriAI/litellm/issues/50173) [Bug]: /v1/images/edits on vertex_ai Gemini with no image returns 500 (ValueError not mapped to 400) `llm translation` 💬3
- [#50219](https://github.com/BerriAI/litellm/issues/50219) [Bug]: vertex_ai text-to-speech ignores `vertex_location` when building the endpoint (always global unless `api_base` is the full URL) `llm translation` 💬3
- [#50224](https://github.com/BerriAI/litellm/issues/50224) [Bug]: Bedrock adapter turns encrypted agent messages into text and breaks task delivery `llm translation` 💬2
- [#50158](https://github.com/BerriAI/litellm/issues/50158) BitBucket prompt store ignores the configured `base_url` and always calls `api.bitbucket.org` 💬1
- [#50243](https://github.com/BerriAI/litellm/issues/50243) [Bug]: Chat→Responses bridge puts system prompts longer than 1,048,576 characters into `instructions`, which OpenAI rejects `bug` `llm translation` 💬1
- [#50167](https://github.com/BerriAI/litellm/issues/50167) [Bug]: extra_body.input overrides the Responses input that guardrails scan `llm translation` 💬1
- [#50317](https://github.com/BerriAI/litellm/issues/50317) [Bug]: Daily tag spend is lost after Redis dequeue if writer exits before DB commit
- [#50266](https://github.com/BerriAI/litellm/issues/50266) [Feature]: Inbuilt credential masking guardrails for OpenAI, Anthropic, and Gemini API keys `enhancement` `llm translation`
- [#50273](https://github.com/BerriAI/litellm/issues/50273) [Bug]: Credential create/update/delete can be undone in memory by a concurrent reload (credential endpoints don't take MODEL_RECONCILE_LOCK)
- [#50269](https://github.com/BerriAI/litellm/issues/50269) [Bug]: Guardrail write-back on /v1/messages drops tool_result.is_error and system output_config (seen with Headroom guardrail) `llm translation` `claude code`
- [#50270](https://github.com/BerriAI/litellm/issues/50270) [Feature]: Headroom guardrail should use Headroom session mode so Claude Code traffic is compressible without busting prompt cache `llm translation` `claude code`
- [#50216](https://github.com/BerriAI/litellm/issues/50216) [Bug]: ui_access_mode: "admin_only" inserts uninvited SSO users into LiteLLM_UserTable and mints session keys before returning 401
- [#50185](https://github.com/BerriAI/litellm/issues/50185) OpenAI workload identity tokens (#39966) can't be used for batches: OpenAI runs them with the expired creating token `llm translation`
- [#50176](https://github.com/BerriAI/litellm/issues/50176) [Feature]: Configurable TTFT timeout across streaming endpoints `llm translation`

#### 🔒 Closed Issues
- [#33167](https://github.com/BerriAI/litellm/issues/33167) [Bug]: v1.92.0 downloads Prisma Binaries at startup
- [#26444](https://github.com/BerriAI/litellm/issues/26444) [Bug]: get_supported_openai_params still reports 'temperature' as supported for Anthropic Claude Opus 4.7 — Anthropic rejects temperature on this model
- [#39736](https://github.com/BerriAI/litellm/issues/39736) [Bug]: mistral drops a named tool_choice, so the pinned tool is never called
- [#34076](https://github.com/BerriAI/litellm/issues/34076) [Feature]: allow overriding the UI login authentication with a custom function (`custom_ui_auth`)
- [#38982](https://github.com/BerriAI/litellm/issues/38982) [Bug]: Router ignores versioned Anthropic web-search capabilities
- [#34441](https://github.com/BerriAI/litellm/issues/34441) onthebench.ai benchmarks LiteLLM: a review of our setup for fairness
- [#35187](https://github.com/BerriAI/litellm/issues/35187) [Feature]: Allow Playground to Leverage Team-delivered models
- [#35191](https://github.com/BerriAI/litellm/issues/35191) [Bug]: OTel v2 drops allowlisted request metadata from boundary-born LLM spans
- [#35192](https://github.com/BerriAI/litellm/issues/35192) [Bug]: OTel v2 Langfuse mapper omits trace user, session, name, and tags
- [#35193](https://github.com/BerriAI/litellm/issues/35193) [Bug]: OTel v2 promotes gen_ai.request.model onto non-LLM spans
- [#35209](https://github.com/BerriAI/litellm/issues/35209) [Feature]: Add INCEPTION as a new LLM provider (Support Mercury-2 model)
- [#35213](https://github.com/BerriAI/litellm/issues/35213) [Bug]: Chat→Responses bridge omits required `annotations` field on `output_text` input items — strict Responses backends reject multi-turn requests
- [#35214](https://github.com/BerriAI/litellm/issues/35214) Bedrock Converse silently ignores response_format={"type": "json_object"}
- [#35242](https://github.com/BerriAI/litellm/issues/35242) [Feature]: Add `litellm router-explain` CLI subcommand for static router-config analysis
- [#35332](https://github.com/BerriAI/litellm/issues/35332) [Bug]: Bedrock guardrail silently drops image input — only text is sent to ApplyGuardrail
- [#35355](https://github.com/BerriAI/litellm/issues/35355) bug(proxy): user_api_key_metadata receives team metadata when key has non-empty metadata
- [#49093](https://github.com/BerriAI/litellm/issues/49093) [Bug]: Spend Per User table on User Usage is always empty for admins

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,087 · **Open issues:** 478 · **Last push:** <1h ago

On November 6, 2026, there were no new releases for Unsloth, but a variety of significant updates were merged, including PR #16849, which addresses slab compaction to prevent Out-Of-Memory (OOM) errors during large render tasks. Additionally, PR #16767 optimizes the installation of flash-attn's Triton AMD backend for improved performance on ROCm RDNA3 and RDNA4 hardware. Other noteworthy improvements include the implementation of context parallelism in the CPU backend and optimizations for video and diffusion processes, aiming to enhance speed and efficiency across different GPU architectures. Among the newly reported issues, #16770 highlights inconsistent application of the glass setting in the Unsloth Desktop UI, indicating potential user interface concerns that may need to be prioritized for a smoother user experience.

#### ✅ Merged PRs
- [#16849](https://github.com/unslothai/unsloth/pull/16849) Studio MiniMax-H3: price the slab compaction against the host reserve so a 16 GiB L4 render is not OOM-killed
- [#16805](https://github.com/unslothai/unsloth/pull/16805) Studio video memory plan: count the forward's headroom before keeping whole-module offload
- [#16859](https://github.com/unslothai/unsloth/pull/16859) Studio: let the floating browser go anywhere, and float per chat
- [#16763](https://github.com/unslothai/unsloth/pull/16763) Studio diffusion training: no per-micro-step host syncs, one decode per cached image, streamed int8 base load
- [#16858](https://github.com/unslothai/unsloth/pull/16858) Studio bookmarks test: click Follow link again when the click does not navigate
- [#16789](https://github.com/unslothai/unsloth/pull/16789) Studio sd.cpp: read the linked CUDA major from DT_NEEDED so a CUDA 13 build gets no cu12 cuDNN
- [#16788](https://github.com/unslothai/unsloth/pull/16788) Studio sd.cpp installer: retry a transient download failure before stepping down to the CPU build
- [#16802](https://github.com/unslothai/unsloth/pull/16802) CPU backend: context parallelism engages (or refuses) instead of silently running DDP; CP modules import
- [#16855](https://github.com/unslothai/unsloth/pull/16855) FP8 LoRA test: expect the kernel route when unsloth_zoo drops HF output flags
- [#16856](https://github.com/unslothai/unsloth/pull/16856) Studio tests: check family picker labels in backend CI, where families are added
- [#16773](https://github.com/unslothai/unsloth/pull/16773) Parallel capabilities: follow the measured composition evidence (packed CP, Unsloth checkpoint, tiling, block swap)
- [#16809](https://github.com/unslothai/unsloth/pull/16809) Studio: label the Chroma and Anima families in the family picker
- [#16766](https://github.com/unslothai/unsloth/pull/16766) Studio video: decode the VAE untiled on CPU hosts when it fits in RAM (Wan2.2 VAE decode 1.5x)
- [#16747](https://github.com/unslothai/unsloth/pull/16747) Studio video: opt-in Sol-H3-VAE decoder for MiniMax-H3
- [#16767](https://github.com/unslothai/unsloth/pull/16767) Studio: install flash-attn's Triton AMD backend on ROCm RDNA3 / RDNA4 (10-15% faster diffusion steps on gfx1151)
- [#16825](https://github.com/unslothai/unsloth/pull/16825) Studio diffusion: compiled int8 W8A8 linear on RDNA3 / RDNA4 ROCm (Qwen-Image-2.1 int8 21% faster per step on gfx1151, now ahead of bf16)
- [#16813](https://github.com/unslothai/unsloth/pull/16813) Studio: int8 activations on T4 for Qwen-Image-Edit (2.03x per step)
- [#16774](https://github.com/unslothai/unsloth/pull/16774) Studio CPU diffusion: one thread per logical CPU on small SMT hosts, for sd.cpp and torch (1.03x to 1.26x)
- [#16758](https://github.com/unslothai/unsloth/pull/16758) Studio sd.cpp: --mmap for CPU renders on builds whose --mmap keeps the CPU repack
- [#16785](https://github.com/unslothai/unsloth/pull/16785) Studio diffusion: fuse the SwiGLU product into the down projection's act quant on untuned sm80+ archs
- [#16711](https://github.com/unslothai/unsloth/pull/16711) Studio: apply ComfyUI LoRA and LoKR files to Anima, Krea 2 and MOSS-Image
- [#16838](https://github.com/unslothai/unsloth/pull/16838) Diffusion autoopt parity: add tf32 to the Anima and Chroma default-tier rows
- [#16791](https://github.com/unslothai/unsloth/pull/16791) Studio Images: pin the parked SAM 3 copy with registered host memory by default (unpark 0.36 -> 0.14 s)
- [#16787](https://github.com/unslothai/unsloth/pull/16787) Studio video: keep a streamed LTX-2 denoiser partly resident per request (21% faster per step)
- [#16786](https://github.com/unslothai/unsloth/pull/16786) Studio multi-GPU: split an even Lumina 2 batch across two cards (1.7-2.1x, fp-order only)
- [#16764](https://github.com/unslothai/unsloth/pull/16764) Studio video: MiniMax-H3 int8 video decoder on by default (30-33% faster decode, LPIPS 0.0004-0.0013)
- [#16762](https://github.com/unslothai/unsloth/pull/16762) Studio diffusion: TF32 matmuls on the default speed tier, not only max
- [#16760](https://github.com/unslothai/unsloth/pull/16760) Studio diffusion: fused FLUX AdaLN on by default on NVIDIA Linux (2.4% per eager step, fp32 error unchanged)
- [#16765](https://github.com/unslothai/unsloth/pull/16765) Studio: move MLX to mlx-vlm 0.7.12 and serve mlx-vlm-only text families
- [#16661](https://github.com/unslothai/unsloth/pull/16661) Studio Flows: reload and retry when a streamed load refuses a LoRA weight change
- [#16735](https://github.com/unslothai/unsloth/pull/16735) Avoid duplicate successful sandbox probes during refresh
- [#16748](https://github.com/unslothai/unsloth/pull/16748) Studio video: denormalize decoded frames slice by slice in the uint8 export
- [#16750](https://github.com/unslothai/unsloth/pull/16750) Studio diffusion: stream the LTX-2.5 encoder, cache and trim FLUX.3 prompt encodes
- [#16753](https://github.com/unslothai/unsloth/pull/16753) Decode: CUDA-graph replay for Qwen2 models
- [#16756](https://github.com/unslothai/unsloth/pull/16756) Studio: reuse an identical llama-server prompt count within a tool round
- [#16752](https://github.com/unslothai/unsloth/pull/16752) Fused LoRA backward: skip the gradient GEMMs of a frozen A or B
- [#16689](https://github.com/unslothai/unsloth/pull/16689) Studio: fit Auto context to system RAM on CPU-only machines
- [#16693](https://github.com/unslothai/unsloth/pull/16693) Studio: answer the first Compare message in both panes
- [#16726](https://github.com/unslothai/unsloth/pull/16726) Studio: size more audio.cpp music models from measured peaks and show the load estimate in the picker
- [#16757](https://github.com/unslothai/unsloth/pull/16757) Studio: quantize Qwen-Image-2.1-Turbo NVFP4 with the Qwen-Image-2.1 layer policy
- [#16684](https://github.com/unslothai/unsloth/pull/16684) perf(studio): stream MLX VLM SentencePiece tokens as they are sampled
- [#16629](https://github.com/unslothai/unsloth/pull/16629) Studio: fix two first-use regressions from deferred startup hardware detection
- [#16710](https://github.com/unslothai/unsloth/pull/16710) Studio: load Anima, Chroma, MOSS-Image and int4 Krea 2 ComfyUI single files
- [#16604](https://github.com/unslothai/unsloth/pull/16604) Studio: read adapter_config.json once per inference worker load
- [#16633](https://github.com/unslothai/unsloth/pull/16633) Studio: keep cancelled fine-tuning jobs in paginated results
- [#16683](https://github.com/unslothai/unsloth/pull/16683) perf(studio): queue MLX prompt-cache snapshots without waiting on the GPU
- [#16670](https://github.com/unslothai/unsloth/pull/16670) Studio: judge an HSA_OVERRIDE_GFX_VERSION GPU by its override in the cold engine status
- [#16685](https://github.com/unslothai/unsloth/pull/16685) Studio: browser dictation in Chrome no longer repeats the last word
- [#16607](https://github.com/unslothai/unsloth/pull/16607) Studio RAG: reuse one rag.db connection per thread within a linked-folder sync pass
- [#16606](https://github.com/unslothai/unsloth/pull/16606) Studio remote-code scan: read each Hub config once per scan request
- [#16615](https://github.com/unslothai/unsloth/pull/16615) Studio: read each thread's stored messages once per chat re-import
- [#16565](https://github.com/unslothai/unsloth/pull/16565) Studio: list a GGUF repo once for the mmproj, MTP, DSpark and DFlash lookups of one load
- [#16597](https://github.com/unslothai/unsloth/pull/16597) Studio: skip the NVML memory probe child when CUDA_VISIBLE_DEVICES is blank
- [#16746](https://github.com/unslothai/unsloth/pull/16746) Studio MLX images: faster GGUF to MLX bit packing, byte-identical output
- [#16775](https://github.com/unslothai/unsloth/pull/16775) Studio: the in-app browser can float over the chat as a small, resizable window
- [#16556](https://github.com/unslothai/unsloth/pull/16556) Studio: fingerprint the same manifest scopes the downgrade migration scan reads
- [#16613](https://github.com/unslothai/unsloth/pull/16613) Desktop: keep the bundled AppImage tray loader off the host's Ayatana
- [#16617](https://github.com/unslothai/unsloth/pull/16617) Studio: search for llama-server once per Decision API settings answer
- [#16349](https://github.com/unslothai/unsloth/pull/16349) GRPO: keep packed forwards off for models that mix tokens across packed rows
- [#16784](https://github.com/unslothai/unsloth/pull/16784) open_login test: bring its own Playwright error types so a leaked stub cannot break it
- [#16781](https://github.com/unslothai/unsloth/pull/16781) Studio: floating monitors stay under the pointer and land without a flash
- [#16662](https://github.com/unslothai/unsloth/pull/16662) Add opt-in BF16 AdamW with stochastic parameter updates
- [#16776](https://github.com/unslothai/unsloth/pull/16776) Bump docker/login-action in /
- [#16777](https://github.com/unslothai/unsloth/pull/16777) Bump step-security/harden-runner in /
- [#16778](https://github.com/unslothai/unsloth/pull/16778) Bump trufflesecurity/trufflehog in /
- [#16668](https://github.com/unslothai/unsloth/pull/16668) Studio: rename a managed account without recreating it
- [#16674](https://github.com/unslothai/unsloth/pull/16674) Studio: let an approved Python call reach a host outside the sandbox allowlist
- [#16751](https://github.com/unslothai/unsloth/pull/16751) Studio: glass theme dims the wallpaper instead of blurring it, page controls take the model button glass, Reduce motion off by default
- [#16780](https://github.com/unslothai/unsloth/pull/16780) Hide the Model hub scroll fade in glass themes
- [#16734](https://github.com/unslothai/unsloth/pull/16734) Context parallel: no graph break in compiled Ulysses attention on packed rows
- [#16698](https://github.com/unslothai/unsloth/pull/16698) Studio: answer Refresh and Edit in a Compare pane with its own model
- [#16768](https://github.com/unslothai/unsloth/pull/16768) Multi-account Playwright: an aborted /login must not use up the stalled-load retry
- [#16686](https://github.com/unslothai/unsloth/pull/16686) Studio: run each Compare model with its own recommended sampling
- [#16701](https://github.com/unslothai/unsloth/pull/16701) Keep reasoning when formatting chats with the gemma-4-thinking template
- [#15941](https://github.com/unslothai/unsloth/pull/15941) Unsloth Studio / Desktop: Flows Benchmark node scores a fine-tune on its held-out rows, and a Loop group feeds its failures into the next round
- [#16702](https://github.com/unslothai/unsloth/pull/16702) Studio: show the chat background in conversations on Windows at 100% scaling
- [#16695](https://github.com/unslothai/unsloth/pull/16695) Studio: keep the typed message when picking a saved prompt
- [#16694](https://github.com/unslothai/unsloth/pull/16694) Studio: stop silently dropping earlier replies sent as item references
- [#16739](https://github.com/unslothai/unsloth/pull/16739) Studio: load NVFP4 diffusion checkpoints from .safetensors only
- [#16733](https://github.com/unslothai/unsloth/pull/16733) Context parallel: compiled layers follow each packed row under Ulysses
- [#16730](https://github.com/unslothai/unsloth/pull/16730) CPU backend: install the every_n_layers gradient checkpointing router
- [#16738](https://github.com/unslothai/unsloth/pull/16738) Notebooks CI: refresh the Colab oracle snapshot to the torch 2.14.1 GPU runtime
- [#16731](https://github.com/unslothai/unsloth/pull/16731) CPU backend: honour unsloth_tiled_mlp and UNSLOTH_TILED_MLP in FastLanguageModel.from_pretrained
- [#16724](https://github.com/unslothai/unsloth/pull/16724) Studio video: report the dense bf16 text encoder when the automatic hosted fp8 encoder cannot be fetched
- [#16728](https://github.com/unslothai/unsloth/pull/16728) Kaggle Studio GPU CI: request hardware detection after sign-in
- [#16732](https://github.com/unslothai/unsloth/pull/16732) Scan baseline: re-review the five unsloth-zoo sites 2026.11.2 moved
- [#16708](https://github.com/unslothai/unsloth/pull/16708) Pipeline parallel: weight the MoE router aux loss per accumulation step as the model forward does
- [#16687](https://github.com/unslothai/unsloth/pull/16687) Studio diffusion: Automatic prefers one card plus a second-card copy over a layer split for FLUX when the primary holds the whole denoiser
- [#16682](https://github.com/unslothai/unsloth/pull/16682) Studio diffusion: Automatic partner card, FLUX batch split, LoRA scale mirror, CFG batching fallback
- [#16681](https://github.com/unslothai/unsloth/pull/16681) Studio diffusion: CFG-parallel for a group-offloaded denoiser
- [#16680](https://github.com/unslothai/unsloth/pull/16680) Studio diffusion: Automatic arms CFG-parallel on an idle card of the same model
- [#16679](https://github.com/unslothai/unsloth/pull/16679) Studio diffusion: CFG-parallel for U-Net families (SDXL) by batch split

#### 🐛 New Issues
- [#16770](https://github.com/unslothai/unsloth/issues/16770) [Bug] Glass setting not applied consistently across Unsloth Desktop UI `feature request` `bug` 💬5
- [#16820](https://github.com/unslothai/unsloth/issues/16820) [Bug] Glass theme makes entire background blur `feature request` `bug` 💬2
- [#16803](https://github.com/unslothai/unsloth/issues/16803) [Bug]: Image generation falls back to CPU/RAM on Windows 11 with RTX 3060 while text generation correctly uses GPU `feature request` `bug` 💬1
- [#16814](https://github.com/unslothai/unsloth/issues/16814) [Bug] Please fill in your issue title here. `feature request` `bug` 💬1
- [#16736](https://github.com/unslothai/unsloth/issues/16736) [Bug] (fix included) Background wallpaper hidden in active chats due to CSS specificity conflict `feature request` `bug` 💬1
- [#16860](https://github.com/unslothai/unsloth/issues/16860) [Feature / Bug] Context Window Temporary Quick Boost for when Initial Prompt Exceeds "Run Settings" Window amount `feature request`
- [#16850](https://github.com/unslothai/unsloth/issues/16850) [Feature] Optional Intelligent UI Components for Unsloth Studio & Desktop `feature request`
- [#16816](https://github.com/unslothai/unsloth/issues/16816) [Bug] Crash of Unsloth `feature request` `bug`
- [#16810](https://github.com/unslothai/unsloth/issues/16810) [Bug] Download never resumes `feature request` `bug`
- [#16769](https://github.com/unslothai/unsloth/issues/16769) [Feature] Native Persona Memories: Automatic Capture, Shared Profiles & Memory Manager `feature request`

#### 🔒 Closed Issues
- [#15999](https://github.com/unslothai/unsloth/issues/15999) [Bug] AppImage Unsloth Studio has very laggy UI
- [#16627](https://github.com/unslothai/unsloth/issues/16627) [Bug] Create Music Incorrect Reporting
- [#16605](https://github.com/unslothai/unsloth/issues/16605) [Bug] AppImage fails to start on Slackware64-current due to GLib/AppIndicator symbol lookup error
- [#16672](https://github.com/unslothai/unsloth/issues/16672) [Bug] Homebrew install command not working
- [#16632](https://github.com/unslothai/unsloth/issues/16632) [Bug] Studio fine-tuning jobs list drops a cancelled queued job when a newer job starts
- [#16636](https://github.com/unslothai/unsloth/issues/16636) [Feature] Ability to rename users without account recreation
- [#16625](https://github.com/unslothai/unsloth/issues/16625) [Feature] Add granularity to sandboxing

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,182 · **Open issues:** 396 · **Last push:** 22h ago

On November 6, 2026, there were no new releases for AIBrix, but significant development occurred with the merge of PR #3404, which added media wire schemas and fetch primitives to the OpenAI frontend. Several new issues were reported, including a bug in #3408 where request admission exceeds its 100 ms budget when Redis stops replying, which has garnered 4 comments. Additionally, #3407 highlighted a problem with the SGLang engine, as its health check is taking longer than the 1-second probe, and #3405 addressed an issue with the leastLatency adapter scheduler failing selection when a ready pod lacks latency metrics. These challenges suggest areas for critical improvements ahead.

#### ✅ Merged PRs
- [#3404](https://github.com/vllm-project/aibrix/pull/3404) feat(openai-frontend): add media wire schemas and fetch primitives

#### 🐛 New Issues
- [#3408](https://github.com/vllm-project/aibrix/issues/3408) [Bug] Request admission exceeds its 100 ms budget when Redis stops replying `kind/bug` `area/gateway` `triage/accepted` 💬4
- [#3407](https://github.com/vllm-project/aibrix/issues/3407) [Bug] An SGLang engine never reads ready, because its /health takes longer than the 1 s probe `kind/bug` `area/runtime` `area/orchestration` 💬3
- [#3405](https://github.com/vllm-project/aibrix/issues/3405) [Bug] leastLatency adapter scheduler fails the whole selection when one ready pod has no latency metrics `kind/bug` `area/gateway` `area/website` `area/orchestration` 💬1

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,404 · **Open issues:** 726 · **Last push:** 9h ago

There were no new releases for Semantic Router in the past 24 hours. Several important bug fixes were merged, including improvements to authorization conditions in CLI and Router validators (#5888), better sharing of request budgets (#5884), and enhanced monitoring of config files (#5881). A notable feature was introduced with the establishment of a unified catalog for models queried by the Router (#5853). Among the newly reported issues, the bug regarding the CLI's handling of authz conditions versus the Router's routing methods (#5887) stands out, highlighting an inconsistency that could affect operational integrity. Overall, today was primarily focused on resolving bugs and refining functionality within the system.

#### ✅ Merged PRs
- [#5888](https://github.com/vllm-project/semantic-router/pull/5888) [Bug] Resolve authz conditions against roles in the CLI and Router validators
- [#5884](https://github.com/vllm-project/semantic-router/pull/5884) [Bug] Share one native System One request budget
- [#5881](https://github.com/vllm-project/semantic-router/pull/5881) [Bug] Watch the config file before the Router reports serving
- [#5869](https://github.com/vllm-project/semantic-router/pull/5869) [Bug] Turn on the debug response headers only for callers the operator allows
- [#5853](https://github.com/vllm-project/semantic-router/pull/5853) [Feature] One catalog for the models the Router asks
- [#5872](https://github.com/vllm-project/semantic-router/pull/5872) [Bug] Keep identity headers from model providers and from clients of the CLI's Envoy listener

#### 🐛 New Issues
- [#5889](https://github.com/vllm-project/semantic-router/issues/5889) [Bug] cmd startup tests lose released ports to other sockets, and a lost management port exits the test binary silently `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#5879](https://github.com/vllm-project/semantic-router/issues/5879) [Docs] Run multi-model AI SDK agents with Runkite and vLLM Semantic Router `accepted` `in-progress` `wg/developer-experience-ecosystem` `documentation` 💬2
- [#5875](https://github.com/vllm-project/semantic-router/issues/5875) [Bug] Docs say a failed upstream call returns the client's API error format `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#5887](https://github.com/vllm-project/semantic-router/issues/5887) [Bug] The CLI validates authz conditions against role binding names, but the Router routes on roles `bug` `accepted` `wg/mom-routing` 💬1
- [#5885](https://github.com/vllm-project/semantic-router/issues/5885) [Feature] Make the decision model the first-class model for intelligent routing `enhancement` `accepted` `wg/mom-routing` 💬1
- [#5880](https://github.com/vllm-project/semantic-router/issues/5880) [Bug] The Router can miss a config file change written right after it reports ready `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#5867](https://github.com/vllm-project/semantic-router/issues/5867) [Bug] Any client can turn on the debug response headers, which name the guard rules its requests match `bug` `accepted` `wg/data-plane-networking` 💬1
- [#5882](https://github.com/vllm-project/semantic-router/issues/5882) [Bug] Operator: reconcile clobbers or ignores metadata on owned resources, and points pods at a missing ServiceAccount `bug` `needs-acceptance` `wg/enterprise-environment` 💬1
- [#5878](https://github.com/vllm-project/semantic-router/issues/5878) [Community] Request a Maintainer nomination for Wilson Wu (@wilsonwu) `needs-acceptance`
- [#5868](https://github.com/vllm-project/semantic-router/issues/5868) [Bug] Identity headers reach model providers, and the CLI's Envoy listener trusts identity the client sets `bug` `accepted` `wg/data-plane-networking` 💬1
- [#5891](https://github.com/vllm-project/semantic-router/issues/5891) [Bug] d3_runtime.py StateOnce: the cached convolution tail is a view that keeps each Gated DeltaNet layer's whole qkv projection on the GPU (state costs 16x the memory it needs) `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5877](https://github.com/vllm-project/semantic-router/issues/5877) [Bug] Model runtime calibration can silently discard valid peak-memory measurements when a probe returns None `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5871](https://github.com/vllm-project/semantic-router/issues/5871) [Feature] Serve vela3-fast-vision Choice and Noul decisions in the model runtime `needs-acceptance` `wg/router-models-inference-runtime`
- [#5866](https://github.com/vllm-project/semantic-router/issues/5866) [CI/Build] A pending PR Gate disappears when its check suite is rerun `bug` `needs-acceptance` `wg/evaluation-quality`

#### 🔒 Closed Issues
- [#3074](https://github.com/vllm-project/semantic-router/issues/3074) [Epic] Restore and maintain current zh-Hans documentation
- [#3345](https://github.com/vllm-project/semantic-router/issues/3345) [Research] Evaluate abstractive history summarization against extractive compression
- [#3282](https://github.com/vllm-project/semantic-router/issues/3282) [Feature] Train and register a residual-failure escalation classifier
- [#3196](https://github.com/vllm-project/semantic-router/issues/3196) [Feature] Qualify initial Router Model deployments with compatibility receipts and diagnostics
- [#3346](https://github.com/vllm-project/semantic-router/issues/3346) [Feature] Deduplicate repeated context without changing conversation semantics
- [#2568](https://github.com/vllm-project/semantic-router/issues/2568) [Feature] Add trained-classifier mode to the complexity signal
- [#4954](https://github.com/vllm-project/semantic-router/issues/4954) [Bug] README community calendar invites no longer resolve
- [#3336](https://github.com/vllm-project/semantic-router/issues/3336) [Feature] Expose typed embedding capabilities from native runtime bindings
- [#3194](https://github.com/vllm-project/semantic-router/issues/3194) [Epic] Measure and improve built-in Router Model quality
- [#2794](https://github.com/vllm-project/semantic-router/issues/2794) [Feature] Add typed Dashboard API contracts and capability discovery
- [#2783](https://github.com/vllm-project/semantic-router/issues/2783) [Feature] Isolate an internal BERT cross-encoder relevance-scoring primitive
- [#3036](https://github.com/vllm-project/semantic-router/issues/3036) [Epic] Make response caching safe, measurable, and lifecycle-aware
- [#3236](https://github.com/vllm-project/semantic-router/issues/3236) [CI] Separate trigger churn, product failures, infrastructure failures, and flakes
- [#3193](https://github.com/vllm-project/semantic-router/issues/3193) [Feature] Consolidate FleetSim into a Capacity Planning workspace with study history
- [#2394](https://github.com/vllm-project/semantic-router/issues/2394) [Research] Evaluate base + multi-LoRA serving for router classifier assets
- [#2745](https://github.com/vllm-project/semantic-router/issues/2745) [Feature] Emit request-scoped routing stage timings in decision diagnostics
- [#3224](https://github.com/vllm-project/semantic-router/issues/3224) [Epic] Remove stale parallel surfaces and contributor dead ends
- [#3031](https://github.com/vllm-project/semantic-router/issues/3031) [Epic] Reuse validated reasoning experiences for small-model inference
- [#5667](https://github.com/vllm-project/semantic-router/issues/5667) [Bug] HTTP embedding binding fails when llm_endpoint.address is a full URL and port is set
- [#2798](https://github.com/vllm-project/semantic-router/issues/2798) [Feature] Add OIDC provider login to the Dashboard
- [#2796](https://github.com/vllm-project/semantic-router/issues/2796) [Feature] Migrate Dashboard server state to the generated API client and query cache
- [#5824](https://github.com/vllm-project/semantic-router/issues/5824) [Feature] Share one native System One budget across signal calls, stages and transport retries
- [#3030](https://github.com/vllm-project/semantic-router/issues/3030) [Epic] Enable vLLM-Omni backends and modality-aware MoM pools
- [#3041](https://github.com/vllm-project/semantic-router/issues/3041) [Epic] Qualify optimized model-pool members against Mixture-of-Models objectives
- [#3091](https://github.com/vllm-project/semantic-router/issues/3091) [Epic] Build workload-driven capacity planning for inference fleets
- [#5666](https://github.com/vllm-project/semantic-router/issues/5666) [Bug] Remote embedding provider construction errors panic the binding pool instead of returning an error
- [#2718](https://github.com/vllm-project/semantic-router/issues/2718) [Feature] Add a lint gate that rejects direct content logging outside the approved helper
- [#5887](https://github.com/vllm-project/semantic-router/issues/5887) [Bug] The CLI validates authz conditions against role binding names, but the Router routes on roles
- [#5880](https://github.com/vllm-project/semantic-router/issues/5880) [Bug] The Router can miss a config file change written right after it reports ready
- [#5867](https://github.com/vllm-project/semantic-router/issues/5867) [Bug] Any client can turn on the debug response headers, which name the guard rules its requests match
- [#5833](https://github.com/vllm-project/semantic-router/issues/5833) [Feature] Resolve every decision-model-driven built-in signal through the decision-model deployment, including remote System One
- [#5837](https://github.com/vllm-project/semantic-router/issues/5837) [Feature] Unify model resources and model-driven signal configuration
- [#5868](https://github.com/vllm-project/semantic-router/issues/5868) [Bug] Identity headers reach model providers, and the CLI's Envoy listener trusts identity the client sets

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*