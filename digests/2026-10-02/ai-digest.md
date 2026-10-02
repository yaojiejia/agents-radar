# 📡 AI Ecosystem Digest — 2026-10-02

> Generated 2026-10-02 02:02 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 148,873 | 33 | 5 | 1 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 127,550 | 23 | 10 | 48 | 10 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,219 | 1 | 2 | 8 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,237 | 10 | 7 | 0 | 3 |
| [OpenCode](https://github.com/anomalyco/opencode) | 211,344 | 19 | 23 | 10 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,270 | 23 | 6 | 5 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 391,167 | 181 | 165 | 194 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 250,618 | 23 | 6 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,041 | 28 | 13 | 34 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,704 | 32 | 5 | 59 | 1 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 130,096 | 13 | 17 | 35 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 182,027 | 2 | 3 | 3 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 60,013 | 23 | 17 | 80 | 2 |
| [Unsloth](https://github.com/unslothai/unsloth) | 77,121 | 14 | 12 | 97 | 2 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,121 | 8 | 2 | 9 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,996 | 7 | 9 | 5 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released multiple versions, including [rust-v0.162.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.2).
- **Claude Code** addressed user experience issues with the [merged PR #98555](https://github.com/anthropics/claude-code/pull/98555), improving dialog behavior when closing files.
- **OpenClaw** issued a critical bug fix with the release of [v2026.8.34](https://github.com/openclaw/openclaw/releases/tag/v2026.8.34) focusing on recovery diagnostics.
- A prominent issue in **OpenCode**, [#52595](https://github.com/anomalyco/opencode/issues/52595), related to subscription concerns, is drawing significant attention with 5 comments.
- **llama.cpp** faced a critical performance issue as indicated in the newly reported issue [#29786](https://github.com/ggml-org/llama.cpp/issues/29786), attracting 6 comments regarding Vulkan compatibility.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 148,873 · **Open issues:** 13,985 · **Last push:** 7h ago

On October 2, 2026, Claude Code released version 2.1.287, introducing significant updates including Claude Mods, which allow plugins to modify deeper agent behaviors, and a built-in mod called "You should know" that monitors for missing insights during sessions. Additionally, a new `n:<text>` filter was added to refine session name and task visibility in the agents view. Among the merged pull requests, a fix was made for a dialog issue that opened all listed files without proper closure feedback. Noteworthy new issues include a report (#98679) regarding a behavior shift in Claude Opus 5.5, which has been noted to exhibit increased thinking and output times yet show worse judgment since October 1, 2026.

#### 🚀 New Releases
- [v2.1.287](https://github.com/anthropics/claude-code/releases/tag/v2.1.287) v2.1.287

#### ✅ Merged PRs
- [#98555](https://github.com/anthropics/claude-code/pull/98555) diff: the dialog opens every file it lists, and says nothing when closed

#### 🐛 New Issues
- [#98679](https://github.com/anthropics/claude-code/issues/98679) [MODEL] Claude Opus 5.5 behavior shift starting 2026-10-01: ~2x thinking, ~1.6x output, worse judgment — also observed outside Claude Code `bug` `area:cost` `area:model` 💬3
- [#98836](https://github.com/anthropics/claude-code/issues/98836) spawn_task chip: starting via 'cloud' drops the prompt/brief from the spawned session `bug` `area:agents` 💬3
- [#98850](https://github.com/anthropics/claude-code/issues/98850) [BUG/FEATURE] claude.ai Cowork (web): dismissed banners keep coming back; need one global setting to turn off non-critical notices `enhancement` `user-experience` `area:claude-code-web` `area:cowork` 💬1
- [#98779](https://github.com/anthropics/claude-code/issues/98779) [BUG] MCP tool call: null inside an object argument has no effect on the server `bug` `area:mcp` `platform:wsl` 💬1
- [#98837](https://github.com/anthropics/claude-code/issues/98837) spawn_task chip via 'cloud': prompt text arrives, but the plan behind it does not `bug` `area:agents` 💬1
- [#98832](https://github.com/anthropics/claude-code/issues/98832) [BUG] Unrecognized TERM_PROGRAM=herdr adds ~3s to interactive startup; TERM_PROGRAM=ghostty starts immediately `bug` `has repro` `platform:macos` `area:tui` 💬1
- [#98815](https://github.com/anthropics/claude-code/issues/98815) Opus generates confident, unverified code: nine defects in one production session (nonexistent CLI flags, stderr capture, printf arity, broken scripted edits) `bug` `platform:macos` `area:model` `platform:vscode` 💬1
- [#98828](https://github.com/anthropics/claude-code/issues/98828) [BUG] Claude Desktop (Windows, MSIX): sessions vanished from about a dozen projects at once; project folder reported as "on another computer" `bug` `platform:windows` `area:cowork` `data-loss` 💬1
- [#98851](https://github.com/anthropics/claude-code/issues/98851) [FEATURE] Make session URL attribution use a settings toggle `enhancement` `user-experience`
- [#98849](https://github.com/anthropics/claude-code/issues/98849) [GitHub integration] `bug` `platform:web` `github-integration`
- [#98848](https://github.com/anthropics/claude-code/issues/98848) [Bug] Claude ignores language preference and responds in English despite Spanish instructions `bug` `platform:macos` `area:model`
- [#98847](https://github.com/anthropics/claude-code/issues/98847) [Bug] Cyber safeguards trigger on benign prompts such as "hi" across multiple models `bug` `duplicate` `platform:linux` `area:model`
- [#98846](https://github.com/anthropics/claude-code/issues/98846) Desktop app (Code tab): background subagent stalls silently, never notifies orchestrator, SendMessage status request goes unanswered — no stall detection `bug` `platform:macos` `area:agents` `area:desktop`
- [#98845](https://github.com/anthropics/claude-code/issues/98845) I need more information to generate a proper issue title. Could you please provide details about the bug you're experiencing, such as: - What were you trying to do? - What error or unexpected behavio `bug` `platform:macos` `needs-info`
- [#98844](https://github.com/anthropics/claude-code/issues/98844) [FEATURE] Allow persistent custom instructions for the built-in /code-review skill `enhancement` `area:skills`
- [#98843](https://github.com/anthropics/claude-code/issues/98843) [BUG] Bun 1.4.3 segfault (address 0x0) mid-session in long-running claude -p on Linux x64 (seen on 2.1.284 and 2.1.286) `bug` `platform:linux` `area:core` `area:packaging`
- [#98842](https://github.com/anthropics/claude-code/issues/98842) [Bug] Claude Opus 5.5 unable to perform defensive security auditing tasks `bug` `platform:macos` `area:model` `area:security`
- [#98605](https://github.com/anthropics/claude-code/issues/98605) [BUG] Desktop SSH session + Remote Control: "401 OAuth access token has expired" once the PC sleeps, although the remote host has its own valid login `bug` `has repro` `platform:windows` `platform:linux`
- [#98841](https://github.com/anthropics/claude-code/issues/98841) [BUG] Synced plugin MCP server hides a connected claude.ai connector with the same URL (no way to choose route) `bug` `platform:windows` `area:mcp` `area:plugins`
- [#98838](https://github.com/anthropics/claude-code/issues/98838) Stored credentials silently override apiKeyHelper: requests 401 in an unrecoverable retry loop
- [#98822](https://github.com/anthropics/claude-code/issues/98822) [BUG] Project-scoped MCP servers stay bound to the original checkout after EnterWorktree (follow-up to #32220) `bug` `has repro` `platform:macos` `area:mcp`
- [#98840](https://github.com/anthropics/claude-code/issues/98840) [BUG] `bug` `platform:windows` `platform:vscode` `area:plugins`
- [#98839](https://github.com/anthropics/claude-code/issues/98839) [BUG] Cowork (web): synced plugin re-sync moves hook scripts under a live session; every prompt is then blocked permanently
- [#98835](https://github.com/anthropics/claude-code/issues/98835) [BUG] Windows: nested CLAUDE.md is not loaded when a Read path uses an uppercase drive letter (`C:\` vs `c:\`) `bug` `has repro` `platform:windows` `platform:vscode`
- [#98613](https://github.com/anthropics/claude-code/issues/98613) [BUG] Cowork (Windows): VM ID derived from user SID only — second Claude Desktop instance can't start its VM (0x8037010f) `bug` `has repro` `platform:windows` `area:cowork`
- [#98834](https://github.com/anthropics/claude-code/issues/98834) [Bug] Permission approval not applied: migration remains denied despite explicit approval `bug` `platform:macos` `area:permissions`
- [#98833](https://github.com/anthropics/claude-code/issues/98833) Let Claude Code talk to the Claude Design agent (same desktop app, no bridge) `enhancement` `platform:windows` `area:integrations` `area:desktop`
- [#98744](https://github.com/anthropics/claude-code/issues/98744) [BUG] PostToolUse hooks no longer fire for MCP tools `bug` `has repro` `platform:macos` `area:mcp`
- [#98755](https://github.com/anthropics/claude-code/issues/98755) macOS 2.1.285: failed OAuth refresh empties sole Keychain credential with one observed session `bug` `platform:macos` `area:auth`
- [#98818](https://github.com/anthropics/claude-code/issues/98818) [FEATURE] MCP OAuth: allow overriding or omitting RFC 8707 `resource` (Entra ID AADSTS9010010) in Claude Code, Claude Desktop, and claude.ai `enhancement` `area:auth` `area:mcp`
- [#98831](https://github.com/anthropics/claude-code/issues/98831) [BUG] LSP tool drops non-file:// results (Roslyn source-generated code) via the gitignore filter `bug` `has repro` `platform:macos` `area:lsp`
- [#98829](https://github.com/anthropics/claude-code/issues/98829) [FEATURE] Bring back image attachments in "Reply to selection" (desktop app, Code tab) `enhancement` `area:ui` `area:desktop`
- [#98830](https://github.com/anthropics/claude-code/issues/98830) [BUG] 「不審なコンテンツが会話に混入した（プロンプトインジェクションの疑い）」 `bug` `platform:windows` `area:security` `platform:vscode`

#### 🔒 Closed Issues
- [#98836](https://github.com/anthropics/claude-code/issues/98836) spawn_task chip: starting via 'cloud' drops the prompt/brief from the spawned session
- [#98837](https://github.com/anthropics/claude-code/issues/98837) spawn_task chip via 'cloud': prompt text arrives, but the plan behind it does not
- [#98845](https://github.com/anthropics/claude-code/issues/98845) I need more information to generate a proper issue title. Could you please provide details about the bug you're experiencing, such as: - What were you trying to do? - What error or unexpected behavio
- [#95399](https://github.com/anthropics/claude-code/issues/95399) [Bug] Claude ignores explicit instruction to avoid rioplatense dialect in memory
- [#98613](https://github.com/anthropics/claude-code/issues/98613) [BUG] Cowork (Windows): VM ID derived from user SID only — second Claude Desktop instance can't start its VM (0x8037010f)

### OpenAI Codex (`openai/codex`)

**Stars:** 127,550 · **Open issues:** 20,050 · **Last push:** <1h ago

On October 2, 2026, the OpenAI Codex ecosystem saw the release of rust-v0.162.0-alpha.2, introducing a variety of features including a keyboard-accessible “Show more” action for browsing older tasks, support for selecting transcript text in fullscreen mode on Linux, and the ability to start sessions outside projects with workspace defaults. Significant merged PRs included enhancements like a new opt-in JSON diagnostics feature for TCP tunnels, centralized TUI loading glyphs, and improvements to the chat composer’s footer logic. However, several critical issues were reported, with #49988 highlighting that the code extension intermittently drops submitted messages after updates, raising further concerns about stability and user experience across platforms.

#### 🚀 New Releases
- [rust-v0.162.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.2) 0.162.0-alpha.2
- [rust-v0.160.0](https://github.com/openai/codex/releases/tag/rust-v0.160.0) 0.160.0
- [rust-v0.162.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.1) 0.162.0-alpha.1
- [rust-v0.161.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.9) 0.161.0-alpha.9
- [rust-v0.161.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.8) 0.161.0-alpha.8
- [rust-v0.161.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.7) 0.161.0-alpha.7
- [rust-v0.161.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.6) 0.161.0-alpha.6
- [rust-v0.161.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.13) 0.161.0-alpha.13
- [rust-v0.161.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.12) 0.161.0-alpha.12
- [rust-v0.161.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.11) 0.161.0-alpha.11

#### ✅ Merged PRs
- [#50140](https://github.com/openai/codex/pull/50140) Use the server permission catalog for TUI permission shortcuts
- [#50131](https://github.com/openai/codex/pull/50131) Add opt-in JSON diagnostics for TCP tunnels
- [#50129](https://github.com/openai/codex/pull/50129) Preserve Windows environment variables for remote MCP servers
- [#50128](https://github.com/openai/codex/pull/50128) Expose the model selected for a running turn's next step
- [#50113](https://github.com/openai/codex/pull/50113) Add a native gRPC client for cloud thread resume and attach
- [#50112](https://github.com/openai/codex/pull/50112) Centralize TUI loading glyphs and frame scheduling
- [#50109](https://github.com/openai/codex/pull/50109) Keep fullscreen prompts bounded and scrollable
- [#50105](https://github.com/openai/codex/pull/50105) Consolidate chat composer footer logic in `footer_state`
- [#50099](https://github.com/openai/codex/pull/50099) Add opt-in Decisions comparison for Guardian V2
- [#50094](https://github.com/openai/codex/pull/50094) Add attachment owner lookup to the app-server
- [#50093](https://github.com/openai/codex/pull/50093) Prevent shared instruction providers from delegating to themselves
- [#50087](https://github.com/openai/codex/pull/50087) Preserve queued agent mail across session eviction
- [#50083](https://github.com/openai/codex/pull/50083) Add paginated reverse lookup for thread attachments
- [#50082](https://github.com/openai/codex/pull/50082) Enable dynamic tool inheritance for fresh V2 subagents
- [#50061](https://github.com/openai/codex/pull/50061) Backport MXC PowerShell fix and safe alpha publishing to 0.159.0-alpha.12
- [#50066](https://github.com/openai/codex/pull/50066) Add a bounded Decisions transport for Guardian comparison classification
- [#50059](https://github.com/openai/codex/pull/50059) Fix Linux sandbox startup with multiple denied files
- [#50058](https://github.com/openai/codex/pull/50058) Upgrade Windows bindings to `windows-sys` 0.61.2
- [#50054](https://github.com/openai/codex/pull/50054) Check token estimate filtering directly on the tracing subscriber
- [#50052](https://github.com/openai/codex/pull/50052) Preserve question context in recovered TUI answer drafts
- [#50050](https://github.com/openai/codex/pull/50050) Keep plugin and skill snapshots scoped to each step
- [#50046](https://github.com/openai/codex/pull/50046) Stabilize Windows voice build cache keys across tool reinstalls
- [#50045](https://github.com/openai/codex/pull/50045) Keep transcript Find expansion scoped to the current match
- [#50039](https://github.com/openai/codex/pull/50039) Keep transcript Find results readable after closing the query
- [#50035](https://github.com/openai/codex/pull/50035) Follow MCP tool pagination in legacy protocol mode
- [#50026](https://github.com/openai/codex/pull/50026) Preserve user restrictions in Guardian handoff context
- [#50019](https://github.com/openai/codex/pull/50019) Protect the guardian decisions API key from environment forwarding
- [#50018](https://github.com/openai/codex/pull/50018) Use descriptor-safe helpers for executable test fixtures
- [#50013](https://github.com/openai/codex/pull/50013) Honor server model defaults when starting fresh TUI threads
- [#49993](https://github.com/openai/codex/pull/49993) Preserve the async Guardian history prefix as retained context changes
- [#49987](https://github.com/openai/codex/pull/49987) Add renewable EMA HTTP authentication and credential versioning
- [#49972](https://github.com/openai/codex/pull/49972) Share byte buffers across exec-server output chunks
- [#49959](https://github.com/openai/codex/pull/49959) Test session index thread-name append and removal
- [#49956](https://github.com/openai/codex/pull/49956) Cache the placeholder regex for MCP hook argument expansion
- [#49951](https://github.com/openai/codex/pull/49951) Include preceding assistant context in Guardian sender reviews
- [#49946](https://github.com/openai/codex/pull/49946) Prevent stale file search results from being labeled with a new query
- [#49939](https://github.com/openai/codex/pull/49939) Add per-turn Cyber access program selection to exec and the SDK
- [#49912](https://github.com/openai/codex/pull/49912) Respect approval policies in temporary structured threads
- [#49910](https://github.com/openai/codex/pull/49910) Preserve validation errors for invalid TUI keybindings
- [#49898](https://github.com/openai/codex/pull/49898) Scope extension filesystem access to callback permissions
- [#49894](https://github.com/openai/codex/pull/49894) Return world-state snapshots and context updates together
- [#49880](https://github.com/openai/codex/pull/49880) Bind permission grants to the originating turn
- [#49876](https://github.com/openai/codex/pull/49876) Remove personality plumbing from the TUI
- [#49875](https://github.com/openai/codex/pull/49875) Decouple TUI startup presentation from execution configuration
- [#49874](https://github.com/openai/codex/pull/49874) Point usage and credit links to ChatGPT settings
- [#49867](https://github.com/openai/codex/pull/49867) Update elevated-launch warning snapshot to use `⌃o` for copy
- [#49861](https://github.com/openai/codex/pull/49861) Add Daybreak state to the status line and terminal title
- [#49859](https://github.com/openai/codex/pull/49859) Honor Daybreak settings in TUI continuations and background tasks

#### 🐛 New Issues
- [#49988](https://github.com/openai/codex/issues/49988) Code extension intermittently drops submitted messages after update. `bug` `extension` 💬4
- [#50127](https://github.com/openai/codex/issues/50127) DOT: UNKNOWN task creation, stale disconnect notifications, ambiguous task reads, and Luna schema failures `bug` `model-behavior` `app` `connectivity` 💬4
- [#49877](https://github.com/openai/codex/issues/49877) Windows app requires taskkill to launch; New Chat fails; dot calls ring indefinitely `bug` `windows-os` `app` `connectivity` 💬4
- [#50118](https://github.com/openai/codex/issues/50118) VS Code Codex queues prompts after completed turn; thread remains markedStreaming=true `bug` `extension` `session` 💬4
- [#50104](https://github.com/openai/codex/issues/50104) macOS + Android: Codex Remote returns to Approve this phone after consent; controller list stays empty `bug` `auth` `app` `remote` 💬2
- [#50142](https://github.com/openai/codex/issues/50142) After updating and fully restarting, the same task can receive assistant continuation instructions, but direct user input still appears queued and cannot be sent. `bug` `app` `session` 💬2
- [#50139](https://github.com/openai/codex/issues/50139) [VS Code] Preserve and visibly queue follow-up prompts while Codex is working `enhancement` `extension` 💬2
- [#50117](https://github.com/openai/codex/issues/50117) [Windows][VS Code 26.928.31416] Repeated ResizeObserver errors flood Codex extension logs `bug` `windows-os` `extension` 💬2
- [#50071](https://github.com/openai/codex/issues/50071) Codex crashing every few minutes with thousands of ResizeObserver errors `bug` `app` `performance` 💬2
- [#50143](https://github.com/openai/codex/issues/50143) [Linux][In-app Browser] "admin-enforced policy could not be verified" is caused by ChatGPT project folder swap deleting node_repl's working directory `bug` `app` `app-server` `browser` 💬1
- [#49983](https://github.com/openai/codex/issues/49983) [Windows] Conversation scrollbar is covered by the fixed composer `bug` `windows-os` `app` 💬1
- [#50136](https://github.com/openai/codex/issues/50136) Cloud task visibility and read/send behavior differ across desktop, web, iOS, and dot `bug` `codex-web` `app-server` 💬1
- [#50133](https://github.com/openai/codex/issues/50133) ChatGPT/Codex app window stuck on OpenAI logo after launch on Windows 10 `bug` `windows-os` `app` 💬1
- [#50041](https://github.com/openai/codex/issues/50041) unified_exec: ExecCommandEnd aggregated_output silently loses chunks when the output watcher lags (Linux, unsandboxed) `bug` `CLI` `tool-calls` 💬1
- [#50132](https://github.com/openai/codex/issues/50132) Highlight to Copy - Add it back as an option please! `enhancement` `TUI` `CLI` `app` 💬1
- [#50130](https://github.com/openai/codex/issues/50130) [Dot][Cloud computer] Computer unavailable, native connection refused and browser Target closed `bug` `codex-web` `connectivity` `computer-use` 💬1
- [#50115](https://github.com/openai/codex/issues/50115) [Dots] Cloud Computer shows “Unavailable” while the Dot and ChatGPT app remain usable `bug` `app` `computer-use` 💬1
- [#50144](https://github.com/openai/codex/issues/50144) Allow dots to save discussions directly to ChatGPT Projects without a separate login `enhancement` `auth`
- [#50141](https://github.com/openai/codex/issues/50141) Windows: `codex exec` stays alive after `turn.completed` until a process started with `Start-Process -RedirectStandardOutput/-RedirectStandardError` exits `bug` `windows-os` `exec` `CLI`
- [#50138](https://github.com/openai/codex/issues/50138) Codex App: expose acknowledgment and follow-up acceptance for task-to-dot handoffs `enhancement` `app` `subagent`
- [#50137](https://github.com/openai/codex/issues/50137) Windows: text selection highlight is almost invisible in dark mode `bug` `windows-os` `app`
- [#50135](https://github.com/openai/codex/issues/50135) Ultrafast disappeared `bug` `app`
- [#50134](https://github.com/openai/codex/issues/50134) Codex app: Persian RTL assistant replies visually resemble user messages `bug` `app`

#### 🔒 Closed Issues
- [#48122](https://github.com/openai/codex/issues/48122) cmd + c not working for copying but ctrl + c work in mac
- [#47996](https://github.com/openai/codex/issues/47996) [macOS][CLI 0.157.0] Cmd+C no longer copies selected transcript text in iTerm2
- [#48097](https://github.com/openai/codex/issues/48097) CMD+C does not work in latest Codex CLI anymore
- [#48415](https://github.com/openai/codex/issues/48415) Please stop breaking basic macOS shortcuts — bring back Cmd+C
- [#50117](https://github.com/openai/codex/issues/50117) [Windows][VS Code 26.928.31416] Repeated ResizeObserver errors flood Codex extension logs
- [#48400](https://github.com/openai/codex/issues/48400) 0.157: TUI sessions created through the shared app-server daemon are recorded as `source: vscode` instead of `cli`
- [#48403](https://github.com/openai/codex/issues/48403) Feature request: render `$0$` and multiline `$$...$$` math in the TUI
- [#50132](https://github.com/openai/codex/issues/50132) Highlight to Copy - Add it back as an option please!
- [#50130](https://github.com/openai/codex/issues/50130) [Dot][Cloud computer] Computer unavailable, native connection refused and browser Target closed
- [#50135](https://github.com/openai/codex/issues/50135) Ultrafast disappeared

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,219 · **Open issues:** 785 · **Last push:** <1h ago

On October 2, 2026, Gemini CLI released version v0.64.0-nightly.20261002.gc9096a847, featuring significant enhancements such as append-only delta patching and bounded history windowing in the ChatRecordingService, alongside improvements in state persistence that ensure atomicity and backup recovery on corruption. Noteworthy merged pull requests included fixes for preserving scroll position, handling session failures, and retrying directory removal on Windows during extension updates. Additionally, Ctrl+C emergency abort functionality was improved to ensure it effectively reaches the cancellation handler during active operations. A new issue was reported regarding the formatDuration function incorrectly displaying "1000ms" and "60.0s" just below a unit boundary, indicating a potential area for further refinement in the CLI's output formatting.

#### 🚀 New Releases
- [v0.64.0-nightly.20261002.gc9096a847](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20261002.gc9096a847) Release v0.64.0-nightly.20261002.gc9096a847

#### ✅ Merged PRs
- [#29520](https://github.com/google-gemini/gemini-cli/pull/29520) fix(cli): preserve scroll position and partition pending height budget
- [#29580](https://github.com/google-gemini/gemini-cli/pull/29580) fix(acp): resolve session by exact id and handle listener cleanup on session failure
- [#29540](https://github.com/google-gemini/gemini-cli/pull/29540) fix(cli): retry directory removal on Windows locking errors during extension updates
- [#29586](https://github.com/google-gemini/gemini-cli/pull/29586) fix(cli): ensure Ctrl+C emergency abort reaches cancellation handler during active operations
- [#29560](https://github.com/google-gemini/gemini-cli/pull/29560) fix(ui): ensure Windows ConPTY forwards IME cursor position
- [#29558](https://github.com/google-gemini/gemini-cli/pull/29558) fix(cli): persist state atomically and recover from backup on corruption
- [#29581](https://github.com/google-gemini/gemini-cli/pull/29581) fix(cli): resolve @file:line references and prevent ghost text wrap hang
- [#29568](https://github.com/google-gemini/gemini-cli/pull/29568) fix(core): implement append-only delta patching and bounded history windowing in ChatRecordingService

#### 🐛 New Issues
- [#29600](https://github.com/google-gemini/gemini-cli/issues/29600) bug(cli): formatDuration shows "1000ms" and "60.0s" just below a unit boundary `status/need-triage` `area/core`

#### 🔒 Closed Issues
- [#28314](https://github.com/google-gemini/gemini-cli/issues/28314) GeminiCLI.com Feedback: [ISSUE]
- [#29318](https://github.com/google-gemini/gemini-cli/issues/29318) bug(cli): @ glob fallback parses LLM text and takes only first match

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,237 · **Open issues:** 2,181 · **Last push:** 4h ago

On October 2, 2026, GitHub Copilot CLI released versions 1.0.92-0 and 1.0.91-1, with key updates including fixes for the MCP tools maintaining functionality after OAuth reauthentication, and the introduction of `copilot sandbox ca` commands for managing proxy CA trust. Version 1.0.91 also improved telemetry handling during CLI shutdown and cleared session timelines of busy status post-interruptions. Notably, new issues emerged, including #5034, which requests a setting to hide verbose MCP status notifications, and #5031, addressing permission errors when autopilot is enabled during active tasks. Overall, the updates reflect continued enhancements to CLI stability and usability amid emerging user concerns.

#### 🚀 New Releases
- [v1.0.92-0](https://github.com/github/copilot-cli/releases/tag/v1.0.92-0) 1.0.92-0
- [v1.0.91](https://github.com/github/copilot-cli/releases/tag/v1.0.91) 1.0.91
- [v1.0.91-1](https://github.com/github/copilot-cli/releases/tag/v1.0.91-1) 1.0.91-1

#### 🐛 New Issues
- [#5034](https://github.com/github/copilot-cli/issues/5034) Add setting to hide verbose MCP status notifications `triage` 💬1
- [#5037](https://github.com/github/copilot-cli/issues/5037) Image pasted from clipboard lost after rwound `triage`
- [#5035](https://github.com/github/copilot-cli/issues/5035) CLI Updates Stop (events.jsonl keeps growing) `triage`
- [#5033](https://github.com/github/copilot-cli/issues/5033) Allow turning off "Task complete" summaries in /autopilot mode. `triage`
- [#5032](https://github.com/github/copilot-cli/issues/5032) Some agent-created commits break co-authorship due to `Copilot-Session` after `Co-authored-by` `triage`
- [#5031](https://github.com/github/copilot-cli/issues/5031) If autopilot is enabled while a task is running, tool calls start getting permission errors `triage`
- [#5030](https://github.com/github/copilot-cli/issues/5030) ACP mode: task tool cannot launch custom agents since 1.0.89 ("Unsupported native sessions host effect 'custom_agent_prompt'") `triage`
- [#5029](https://github.com/github/copilot-cli/issues/5029) Expose quota usage and billing-period timing in the status line payload `triage`
- [#5028](https://github.com/github/copilot-cli/issues/5028) Copilot App: create_pull_request fails with "runtime settings are not configured for this session" but the PR is created `triage`
- [#5027](https://github.com/github/copilot-cli/issues/5027) DNS broken for Linux Sandbox when using systemd-resolved stub resolver `triage`

#### 🔒 Closed Issues
- [#2905](https://github.com/github/copilot-cli/issues/2905) Up arrow to edit a queued message adds duplicate instead of replacing it
- [#2793](https://github.com/github/copilot-cli/issues/2793) [Bug] Agent internal markers leak into output due to PTY read boundary truncation on Linux （v1.0.28）
- [#4137](https://github.com/github/copilot-cli/issues/4137) Scheduled prompts remain queued and do not fire
- [#2303](https://github.com/github/copilot-cli/issues/2303) Unable to retrive old session by id
- [#3171](https://github.com/github/copilot-cli/issues/3171) [Windows] CMD windows flash on screen when MCP servers start
- [#4982](https://github.com/github/copilot-cli/issues/4982) AI model stuck indefinitely when using Read Search View/Rg tool calls
- [#4811](https://github.com/github/copilot-cli/issues/4811) /new fails to load STDIO MCP and requires /mcp reload

### OpenCode (`anomalyco/opencode`)

**Stars:** 211,344 · **Open issues:** 6,149 · **Last push:** <1h ago

On October 2, 2026, there were no new releases for OpenCode, but several important updates were merged, including a fix that enables Alibaba chat prompt caching and another that restores pre-extension behavior discovered during the A/B audit. Documentation improvements were also made, such as correcting shortcut references and aligning session methods with the API, while a feature was added to show last turn changes in the review panel. Among the new issues raised, the most prominent concern is related to subscription troubles, with a user reporting a double charge for usage, indicating ongoing challenges in the subscription management system.

#### ✅ Merged PRs
- [#52612](https://github.com/anomalyco/opencode/pull/52612) fix(ai): enable Alibaba chat prompt caching
- [#52620](https://github.com/anomalyco/opencode/pull/52620) fix(app): restore pre-extension behavior found in the A/B audit
- [#52606](https://github.com/anomalyco/opencode/pull/52606) docs(tui): correct shortcut reference
- [#52608](https://github.com/anomalyco/opencode/pull/52608) docs(compaction): use authenticated API command
- [#52607](https://github.com/anomalyco/opencode/pull/52607) docs(plugin): align session methods with API
- [#52604](https://github.com/anomalyco/opencode/pull/52604) docs(websearch): include TinyFish provider
- [#52603](https://github.com/anomalyco/opencode/pull/52603) docs(cli): fix command examples
- [#52602](https://github.com/anomalyco/opencode/pull/52602) docs(mcp): correct session metadata key
- [#52598](https://github.com/anomalyco/opencode/pull/52598) fix(ai): isolate Groq and Vertex metadata keys
- [#51640](https://github.com/anomalyco/opencode/pull/51640) feat(app): show last turn changes in review panel

#### 🐛 New Issues
- [#52595](https://github.com/anomalyco/opencode/issues/52595) Where's GO subscription??? `needs:compliance` 💬5
- [#52592](https://github.com/anomalyco/opencode/issues/52592) Had to pay twice for usage? `needs:compliance` 💬4
- [#52596](https://github.com/anomalyco/opencode/issues/52596) Why my subscription is gone? I paid 10d yesterday now say 403 `needs:compliance` 💬4
- [#52623](https://github.com/anomalyco/opencode/issues/52623) 使用额度异常 `needs:compliance` 💬3
- [#52597](https://github.com/anomalyco/opencode/issues/52597) core: tool failure message loses the reason when the 60m idle eviction interrupts a run 💬2
- [#52599](https://github.com/anomalyco/opencode/issues/52599) core: pending question forms cancelled by a location close get no cause or question content 💬2
- [#52593](https://github.com/anomalyco/opencode/issues/52593) Go subscription: "Could not load Go subscription status" and no models selectable (new subscriber, Indonesia) 💬2
- [#52619](https://github.com/anomalyco/opencode/issues/52619) [FEATURE]: Promise plugin logging without Effect 💬1
- [#52617](https://github.com/anomalyco/opencode/issues/52617) config: compatibility.supportsStore silently dropped from opencode.jsonc 💬1
- [#52618](https://github.com/anomalyco/opencode/issues/52618) plugin: session-hook plugin activation triggers failed reload and wipes provider registry 💬1
- [#52616](https://github.com/anomalyco/opencode/issues/52616) Fledge Alpha 💬1
- [#52615](https://github.com/anomalyco/opencode/issues/52615) Permission patterns truncated/skipped when parsing commands with tree-sitter-powershell (Windows) — allow rules never match 💬1
- [#52613](https://github.com/anomalyco/opencode/issues/52613) web: inline code containing a slash always renders as a dead local-file link `needs:compliance` 💬1
- [#52605](https://github.com/anomalyco/opencode/issues/52605) OpenCode Go subscription charged twice `needs:compliance` 💬1
- [#52601](https://github.com/anomalyco/opencode/issues/52601) Azure Foundry GPT-6.1 Sol 💬1
- [#52591](https://github.com/anomalyco/opencode/issues/52591) web: PDF preview blocked by CSP (missing frame-src/object-src) 💬1
- [#52589](https://github.com/anomalyco/opencode/issues/52589) Suscripción Go `needs:compliance` 💬1
- [#52586](https://github.com/anomalyco/opencode/issues/52586) [BUG/SECURITY]: redacted secrets persist in cleartext in the opencode.db event journal 💬1
- [#52590](https://github.com/anomalyco/opencode/issues/52590) V2: project formatter config replaces the global formatter config instead of merging

#### 🔒 Closed Issues
- [#29363](https://github.com/anomalyco/opencode/issues/29363) Bug: `limit.output` in config is silently capped at 32k; `OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX` is a poor workaround
- [#42787](https://github.com/anomalyco/opencode/issues/42787) Upstream request failed: Endpoint is unavailable.
- [#34407](https://github.com/anomalyco/opencode/issues/34407) CLI: LaTeX math formulas rendered as raw text instead of being rendered in terminal
- [#43355](https://github.com/anomalyco/opencode/issues/43355) [Desktop] UI freezes after agent turns finish — renderer stuck in ResizeObserver loop; only force-quit + relaunch recovers
- [#43102](https://github.com/anomalyco/opencode/issues/43102) Opencode is unavailable - Upstream request failed: Endpoint is unavailable.
- [#37628](https://github.com/anomalyco/opencode/issues/37628) When installed npm install -g opencode-ai getting 16bit issue
- [#42750](https://github.com/anomalyco/opencode/issues/42750) Upstream request failed: Endpoint is unavailable.
- [#49486](https://github.com/anomalyco/opencode/issues/49486) [CLI / TUI] LaTeX math formulas ($...$, ...) rendered as raw text without formatting
- [#44902](https://github.com/anomalyco/opencode/issues/44902) Desktop: file:// markdown links are not clickable
- [#42834](https://github.com/anomalyco/opencode/issues/42834) Mobile: reasoning-effort (variant) select overlaps the send button in prompt input
- [#38065](https://github.com/anomalyco/opencode/issues/38065) `@` autocomplete does not detect newly created files until OpenCode is restarted
- [#42190](https://github.com/anomalyco/opencode/issues/42190) Local MCP server spawned twice (duplicate process) on every Desktop restart
- [#39451](https://github.com/anomalyco/opencode/issues/39451) Kimi K3: HTTP 400 "assistant message must not be empty" when switching models mid-session
- [#42757](https://github.com/anomalyco/opencode/issues/42757) Upstream request failed: Endpoint is unavailable.
- [#48870](https://github.com/anomalyco/opencode/issues/48870) Sessions in a non-git parent directory are unattributable: `resolve` returns `global` before `project_directory` is consulted
- [#51725](https://github.com/anomalyco/opencode/issues/51725) chat: LaTeX math ($...$) is not rendered in messages
- [#52593](https://github.com/anomalyco/opencode/issues/52593) Go subscription: "Could not load Go subscription status" and no models selectable (new subscriber, Indonesia)
- [#42911](https://github.com/anomalyco/opencode/issues/42911) Upstream request failed: Endpoint is unavailable.
- [#48260](https://github.com/anomalyco/opencode/issues/48260) Mobile web UI: Send button overlaps thinking/token indicator on narrow viewport
- [#44494](https://github.com/anomalyco/opencode/issues/44494) File Picker (FFF) fails in root/home directories
- [#46577](https://github.com/anomalyco/opencode/issues/46577) Kimi (openai-compatible) rejects replayed reasoning+tool assistant turns: "message at position N with role 'assistant' must not be empty"
- [#52591](https://github.com/anomalyco/opencode/issues/52591) web: PDF preview blocked by CSP (missing frame-src/object-src)
- [#49720](https://github.com/anomalyco/opencode/issues/49720) [web] Send button overlaps the model reasoning/thinking-depth selector on mobile (iPhone), blocking Send and Stop

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,270 · **Open issues:** 1,591 · **Last push:** <1h ago

On October 2, 2026, Qwen Code released version v0.24.7-nightly.20261001.a7deb01bcb, which includes key fixes such as aligning Code Mode text with lazy tool discovery and honoring approved cross-directory tool calls. Significant merged features include the implementation of durable Hosted Hooks in PR #13129 and the allowance for concurrent Bash calls in Code Mode via PR #13151. Additionally, there was a notable new issue raised, #13157, which addresses the need for the confinement guard to run before the permission flow to prevent out-of-workspace calls from prematurely ending the run.

#### 🚀 New Releases
- [v0.24.7-nightly.20261001.a7deb01bcb](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20261001.a7deb01bcb) Release v0.24.7-nightly.20261001.a7deb01bcb

#### ✅ Merged PRs
- [#13129](https://github.com/QwenLM/qwen-code/pull/13129) feat(managed-agent): implement durable Hosted Hooks (H2)
- [#13151](https://github.com/QwenLM/qwen-code/pull/13151) feat(core): allow concurrent Bash calls in Code Mode
- [#13153](https://github.com/QwenLM/qwen-code/pull/13153) fix(core): align exec output with Codex
- [#13150](https://github.com/QwenLM/qwen-code/pull/13150) feat(core): support Freeform input in Code Mode
- [#13083](https://github.com/QwenLM/qwen-code/pull/13083) feat(managed-agent): Hosted Turn takeover and G1 failover E2E

#### 🐛 New Issues
- [#13157](https://github.com/QwenLM/qwen-code/issues/13157) Agent Host: run the confinement guard before the permission flow so out-of-workspace calls don't end the run `priority/P2` `status/blocked` `type/bug` `category/core` 💬5
- [#13180](https://github.com/QwenLM/qwen-code/issues/13180) feature(managed-agent): broker authentication and broker-provisioned writer credentials `priority/P2` `type/feature-request` `category/core` `category/security` 💬4
- [#13182](https://github.com/QwenLM/qwen-code/issues/13182) fix(managed-agent): retry loops without terminal states and a permanently wedged projection `priority/P2` `type/bug` `category/core` `scope/session-management` 💬4
- [#13162](https://github.com/QwenLM/qwen-code/issues/13162) fix(managed-agent): #13112 follow-ups: stop a bound Turn under refused authorization, align admission with the Workspace generation `status/in-progress` `priority/P2` `type/bug` `category/core` 💬4
- [#13160](https://github.com/QwenLM/qwen-code/issues/13160) feat(managed-agent): show the pending tool call's input on Hosted approval Actions `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬4
- [#13145](https://github.com/QwenLM/qwen-code/issues/13145) fix(memory): MEMORY.md index truncation cuts the link target and leaves a dangling ellipsis `priority/P2` `type/bug` `category/core` `scope/memory` 💬4
- [#13193](https://github.com/QwenLM/qwen-code/issues/13193) fix(managed-hooks): releaseEarlierOwners releases every earlier activation on each load and detach `priority/P2` `type/bug` `category/performance` `scope/session-management` 💬3
- [#13191](https://github.com/QwenLM/qwen-code/issues/13191) Follow-up: AgentDefinition review deferrals from PR #13142 `priority/P3` `scope/testing` `type/enhancement` `daemon` 💬3
- [#13189](https://github.com/QwenLM/qwen-code/issues/13189) Managed engine M5a follow-ups: blocked-session contract and worker settings `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#13187](https://github.com/QwenLM/qwen-code/issues/13187) Follow-up: 36 Suggestions from the post-merge review of #13083 (Hosted Turn takeover) `priority/P2` `type/bug` `category/cli` `scope/session-management` 💬3
- [#13190](https://github.com/QwenLM/qwen-code/issues/13190) Deferred review findings from PR #13158: memory extraction cooldown / recall selector experiments `priority/P3` `category/core` `scope/memory` `scope/testing` 💬3
- [#13186](https://github.com/QwenLM/qwen-code/issues/13186) Follow-up: workspace-trust grant review deferrals from PR #13146 `priority/P2` `category/security` `scope/trusted-folders` `scope/testing` 💬3
- [#13185](https://github.com/QwenLM/qwen-code/issues/13185) feature(sdk-java): static analysis gates and load-budget tests for managed broker endpoints `priority/P2` `type/feature-request` `category/development` `scope/testing` 💬3
- [#13184](https://github.com/QwenLM/qwen-code/issues/13184) fix(managed-agent): bounded growth for managed session stores and panel projection `priority/P2` `type/bug` `category/performance` `scope/session-management` 💬3
- [#13183](https://github.com/QwenLM/qwen-code/issues/13183) fix(runtime-broker): cross-process admit/release race, shared single-thread renewals, single-token HTTP `priority/P1` `type/bug` `category/core` `need-discussion` 💬3
- [#13181](https://github.com/QwenLM/qwen-code/issues/13181) fix(managed-agent): database amplification on session hot paths (snapshot rewrite, SSE, lists, publication) `priority/P2` `type/bug` `category/performance` `scope/sdk` 💬3
- [#13178](https://github.com/QwenLM/qwen-code/issues/13178) memory: index budget is duplicated between indexer.ts and prompt.ts, and the reader still cuts mid-line `priority/P3` `type/bug` `category/core` `scope/memory` 💬3
- [#13177](https://github.com/QwenLM/qwen-code/issues/13177) web-shell memory panel rewrites CRLF line endings on the first edit (mode=replace) `priority/P2` `type/bug` `category/ui` `scope/memory` 💬3
- [#13175](https://github.com/QwenLM/qwen-code/issues/13175) Web Shell: keyboard shortcuts for Session Overview and Split View `priority/P3` `type/feature-request` `category/ui` `scope/keybindings` 💬3
- [#13171](https://github.com/QwenLM/qwen-code/issues/13171) fix(managed-agent): the cancellation takeover never finishes against a replacement Broker `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#13164](https://github.com/QwenLM/qwen-code/issues/13164) feat(managed-agent): Archive, delete and unarchive Workspace-bound Sessions `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#13148](https://github.com/QwenLM/qwen-code/issues/13148) LSP: surface not-ready/failed servers on the ten non-diagnostics query paths `priority/P2` `type/bug` `category/core` `scope/core` 💬3
- [#13161](https://github.com/QwenLM/qwen-code/issues/13161) Deferred review findings from PR #13005: test(integration): deflake the monitor tool call E2E against provider latency (# 💬1

#### 🔒 Closed Issues
- [#13123](https://github.com/QwenLM/qwen-code/issues/13123) agent hosts: remote-connect allowHttp downgrades the leg that carries the enrollment token
- [#12606](https://github.com/QwenLM/qwen-code/issues/12606) /context shows a conversation-sized "Messages" row under "Estimated pre-conversation overhead" when usage is estimated
- [#12569](https://github.com/QwenLM/qwen-code/issues/12569) Deferred-tool bridge: a hidden tool whose schema left context via /compress is still invocable by name (remaining half of #11321)
- [#12472](https://github.com/QwenLM/qwen-code/issues/12472) test(core): nothing bounds a bundled skill's <available_skills> entry size, so the 8,000-char listing trim recovers budget from the user's own skills instead
- [#12925](https://github.com/QwenLM/qwen-code/issues/12925) Main CI failed: E2E Tests — cli/qwen-serve-streaming.test.ts > … > publishes session_died after the qwen --acp child is SIGKILL-ed
- [#13001](https://github.com/QwenLM/qwen-code/issues/13001) Main CI failed: E2E Tests — cli/advisor-tool.test.ts > … > discovers a deferred advisor and consults through the bridge without changing … (+2 more)

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments
- [#1703](https://github.com/anthropics/skills/pull/1703) Add md2video-audio skill

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 391,167 · **Open issues:** 9,147 · **Last push:** <1h ago

On October 2, 2026, OpenClaw released the gateway-only `extended-stable` version 2026.8.34, which includes critical security updates, reliability and performance enhancements, and new model support, following the latest version 2026.9.7. Significant merged changes today include the restoration of recovery diagnostics in isolated source harnesses (#163143), the addition of Discord and Slack session headers (#158742), and a fix to prevent cancelled turns from failing to settle (#163154). A notably contentious issue that emerged is the bug related to Native Codex completion handoff failures, which arises from a SESSION_WORK_START_CHANGED before source commitment (#162637).

#### 🚀 New Releases
- [v2026.8.34](https://github.com/openclaw/openclaw/releases/tag/v2026.8.34) openclaw 2026.8.34

#### ✅ Merged PRs
- [#156386](https://github.com/openclaw/openclaw/pull/156386) chore(line): simplify media and webhook test fixtures
- [#163159](https://github.com/openclaw/openclaw/pull/163159) chore(i18n): refresh native locales
- [#163143](https://github.com/openclaw/openclaw/pull/163143) fix(release): restore recovery diagnostics in isolated source harnesses
- [#163161](https://github.com/openclaw/openclaw/pull/163161) refactor(ui): deslop browser vocabulary and contract types
- [#162961](https://github.com/openclaw/openclaw/pull/162961) fix(qa): verify read-derived cron authority
- [#162949](https://github.com/openclaw/openclaw/pull/162949) fix(qa): accept natural model handoff wording
- [#158742](https://github.com/openclaw/openclaw/pull/158742) feat: return to Discord and Slack from session headers
- [#163154](https://github.com/openclaw/openclaw/pull/163154) fix(workers): cancelled turns fail to settle
- [#163156](https://github.com/openclaw/openclaw/pull/163156) fix(codex): distinguish client acquisition timeout stages
- [#163018](https://github.com/openclaw/openclaw/pull/163018) test(ui): prove usage overview release deterministically
- [#163032](https://github.com/openclaw/openclaw/pull/163032) fix: completion turns lose delegation tools after same-model retries
- [#163106](https://github.com/openclaw/openclaw/pull/163106) fix: native image turns unnecessarily fail media preprocessing
- [#163134](https://github.com/openclaw/openclaw/pull/163134) fix(state): retain loss context when heartbeat workers fail
- [#163129](https://github.com/openclaw/openclaw/pull/163129) fix(codex): avoid startup app-server bursts for idle agents
- [#163114](https://github.com/openclaw/openclaw/pull/163114) feat(macos): page, search, and scope the native sidebar roster
- [#143647](https://github.com/openclaw/openclaw/pull/143647) fix(models): purge plugin catalog credentials on logout
- [#163119](https://github.com/openclaw/openclaw/pull/163119) fix(sessions): keep Gateway responsive during restart recovery
- [#162799](https://github.com/openclaw/openclaw/pull/162799) fix(whatsapp): keep group activation account-scoped
- [#143991](https://github.com/openclaw/openclaw/pull/143991) fix(agents): agents add wizard fails to recreate a deleted agent when saving auth
- [#163127](https://github.com/openclaw/openclaw/pull/163127) fix(ci): keep unresolved compatibility removals in the review queue
- [#162695](https://github.com/openclaw/openclaw/pull/162695) docs(cron): scope consecutive-failure wait to failure alerts
- [#163075](https://github.com/openclaw/openclaw/pull/163075) refactor(plugins): drop pre-July-2026 plugin and channel migrations
- [#163086](https://github.com/openclaw/openclaw/pull/163086) fix(update): canonicalize package activation paths
- [#163039](https://github.com/openclaw/openclaw/pull/163039) fix(update): report dependency failures and retry stale caches
- [#163128](https://github.com/openclaw/openclaw/pull/163128) fix(llama-cpp): backport Windows VC runtime fallback to 2026.9.8
- [#163132](https://github.com/openclaw/openclaw/pull/163132) feat(openai): support GPT-6.1 Sol on 2026.9.8
- [#162537](https://github.com/openclaw/openclaw/pull/162537) fix: Bun diagnostics miss Gateways and include worker error stacks
- [#163087](https://github.com/openclaw/openclaw/pull/163087) refactor(ui): deslop chat identities, path labels and previews
- [#160878](https://github.com/openclaw/openclaw/pull/160878) fix(memory): restore embeddings with Codex OAuth
- [#163131](https://github.com/openclaw/openclaw/pull/163131) chore(ui): refresh control ui locales
- [#163077](https://github.com/openclaw/openclaw/pull/163077) fix(models): fallbacks add, remove and clear accept --agent but edit global defaults
- [#163015](https://github.com/openclaw/openclaw/pull/163015) refactor(doctor): drop pre-July-2026 config migrations
- [#162992](https://github.com/openclaw/openclaw/pull/162992) refactor(plugins): deslop feature plugin helpers
- [#163112](https://github.com/openclaw/openclaw/pull/163112) refactor(claws): move Gateway provenance writes to workers
- [#163076](https://github.com/openclaw/openclaw/pull/163076) fix(release): preserve extended-stable version context
- [#163115](https://github.com/openclaw/openclaw/pull/163115) refactor(sessions): await attempt entry and hierarchy reads
- [#163094](https://github.com/openclaw/openclaw/pull/163094) ci: share prepared SDK declarations across PR checks
- [#163084](https://github.com/openclaw/openclaw/pull/163084) refactor(gateway): prepare SSE visibility in history worker
- [#162975](https://github.com/openclaw/openclaw/pull/162975) refactor(workers): persist durable ACKs in SQLite workers
- [#163109](https://github.com/openclaw/openclaw/pull/163109) improve(ui): refresh and renew the community invitation
- [#161228](https://github.com/openclaw/openclaw/pull/161228) fix(agents): restore CLI sessions after finished orchestrator runs
- [#160926](https://github.com/openclaw/openclaw/pull/160926) fix(secrets): keep store entry kind when rotating a value (#158968)
- [#159988](https://github.com/openclaw/openclaw/pull/159988) perf(ci): run qualified unit tests with native Bun
- [#163093](https://github.com/openclaw/openclaw/pull/163093) fix(llama-cpp): managed server fails on clean Windows installs
- [#163110](https://github.com/openclaw/openclaw/pull/163110) refactor(ui): handle pane commands in the chat page owner
- [#162470](https://github.com/openclaw/openclaw/pull/162470) fix(gateway): session lists and health fail after a plugin reload retires an agent's plugin registry
- [#162968](https://github.com/openclaw/openclaw/pull/162968) fix(test): Telegram skill composition and launcher tests fail or hang on loaded hosts
- [#158929](https://github.com/openclaw/openclaw/pull/158929) fix(cron): surface unresolved exec failures in successful runs
- [#162484](https://github.com/openclaw/openclaw/pull/162484) fix(plugins): plugin reload hangs when plugin work it waits for calls the model
- [#162884](https://github.com/openclaw/openclaw/pull/162884) chore(deps): update jscpd to 5.3.2
- [#155591](https://github.com/openclaw/openclaw/pull/155591) fix: forked claude-cli conversation starts with an empty model context
- [#163113](https://github.com/openclaw/openclaw/pull/163113) test(doctor): expect the per-reason failed-update headline in stale run notes
- [#163049](https://github.com/openclaw/openclaw/pull/163049) refactor(gateway): await managed media ownership reads
- [#163111](https://github.com/openclaw/openclaw/pull/163111) test(doctor): assert the recorded reason code in stale update-run notes
- [#163014](https://github.com/openclaw/openclaw/pull/163014) refactor(cli): remove redundant progress lifecycle guards
- [#163101](https://github.com/openclaw/openclaw/pull/163101) ci: pin the OpenClaw Bun fork fc90 prerelease
- [#162945](https://github.com/openclaw/openclaw/pull/162945) fix(test): agent-exec, update candidate-state, handoff, and QA-lab Gateway tests fail on loaded hosts when fixture children outlast polling deadlines
- [#163095](https://github.com/openclaw/openclaw/pull/163095) refactor(sessions): share ordered session lookup keys
- [#163103](https://github.com/openclaw/openclaw/pull/163103) fix(state): retain first lease heartbeat loss diagnostics
- [#163045](https://github.com/openclaw/openclaw/pull/163045) refactor(sessions): move active accounting and companion reads to workers
- [#154384](https://github.com/openclaw/openclaw/pull/154384) fix(browser): let idle upload retention survive node updates
- [#163092](https://github.com/openclaw/openclaw/pull/163092) refactor(subagents): share ordered read membership
- [#162866](https://github.com/openclaw/openclaw/pull/162866) fix(git-hooks): use qualified tooling for missing formatter
- [#162986](https://github.com/openclaw/openclaw/pull/162986) fix: allow guests to notify owned child sessions
- [#163041](https://github.com/openclaw/openclaw/pull/163041) refactor(sessions): move cold inventory and restore keys to workers
- [#163052](https://github.com/openclaw/openclaw/pull/163052) fix(runtime): close Bun API cluster loader and fixture gaps
- [#163089](https://github.com/openclaw/openclaw/pull/163089) fix(test): expect model picker search autofocus
- [#163098](https://github.com/openclaw/openclaw/pull/163098) refactor(scripts): deslop update parsing and provider routing
- [#162376](https://github.com/openclaw/openclaw/pull/162376) fix: remote MCP plugins fail to start in native agent sessions
- [#163036](https://github.com/openclaw/openclaw/pull/163036) refactor(state): drop pre-July-2026 state migrations
- [#163046](https://github.com/openclaw/openclaw/pull/163046) fix(qa): judge the completed Discord final in the reply-shape scenario
- [#162973](https://github.com/openclaw/openclaw/pull/162973) fix(models): preserve explicit providers when aliases collide
- [#163013](https://github.com/openclaw/openclaw/pull/163013) fix(test): ACPX, Anthropic CLI, ONNX, voice, WhatsApp, and SQLite flip-proof tests fail on loaded hosts when fixtures outlast polling deadlines
- [#162948](https://github.com/openclaw/openclaw/pull/162948) fix(agentsapi): decouple session keys and report access errors
- [#163088](https://github.com/openclaw/openclaw/pull/163088) fix(codex): keep registration imports lightweight
- [#163070](https://github.com/openclaw/openclaw/pull/163070) refactor(cron): remove unused completion state argument
- [#163082](https://github.com/openclaw/openclaw/pull/163082) fix(release): resume after delayed npm readback
- [#163010](https://github.com/openclaw/openclaw/pull/163010) refactor(sessions): move Goal ingress receipt reads to workers
- [#159800](https://github.com/openclaw/openclaw/pull/159800) fix(test): retire MCP managers between shared test files
- [#163081](https://github.com/openclaw/openclaw/pull/163081) build(macos): pin the app runtime to OpenClaw Bun fc90aa4d9c
- [#163051](https://github.com/openclaw/openclaw/pull/163051) fix: resolve baseline-v3 Bun regressions
- [#163044](https://github.com/openclaw/openclaw/pull/163044) fix(test): Gateway run-loop, update executor, hooks, and ClawHub CLI process tests fail on loaded hosts when fixture children outlast polling deadlines
- [#163056](https://github.com/openclaw/openclaw/pull/163056) fix(test): pr wrapper tests fail with spawn ETXTBSY when a sibling test forks during a fixture copy
- [#160958](https://github.com/openclaw/openclaw/pull/160958) fix(ci): make PR runner capacity independent of author
- [#163062](https://github.com/openclaw/openclaw/pull/163062) fix(test): QA Lab Codex, MCP, Workboard, and voice-call e2e tests fail on loaded hosts when fixture children outlast polling deadlines
- [#159476](https://github.com/openclaw/openclaw/pull/159476) fix: auto-compaction honors configured thinking during active runs
- [#162930](https://github.com/openclaw/openclaw/pull/162930) chore(ci): finish grouping session-lifecycle agent tests in the agents-sessions type graph
- [#161446](https://github.com/openclaw/openclaw/pull/161446) fix: update managed Codex catalog and protocol to 0.159.1
- [#163055](https://github.com/openclaw/openclaw/pull/163055) refactor(core): deslop core
- [#163054](https://github.com/openclaw/openclaw/pull/163054) fix(artifacts): preserve the stored session address for run lookups
- [#163031](https://github.com/openclaw/openclaw/pull/163031) perf(sessions): yield between cold list page slices
- [#163073](https://github.com/openclaw/openclaw/pull/163073) perf(ui): render retained chat panes only while they are presented
- [#163063](https://github.com/openclaw/openclaw/pull/163063) fix(test): release-gated fixtures still poll release files; add release and exit receipts to the fixture receipt helper
- [#163033](https://github.com/openclaw/openclaw/pull/163033) fix(test): stabilize child-process fixture readiness
- [#163061](https://github.com/openclaw/openclaw/pull/163061) chore(ui): refresh control ui locales
- [#163050](https://github.com/openclaw/openclaw/pull/163050) chore(i18n): refresh native locales
- [#163071](https://github.com/openclaw/openclaw/pull/163071) test(ci): register the receipt-retirement Doctor suite in the commands test plan
- [#162887](https://github.com/openclaw/openclaw/pull/162887) fix(update): clarify runtime failures and recorded health
- [#163012](https://github.com/openclaw/openclaw/pull/163012) fix(matrix): fence encrypted sends against stale room readiness
- [#162595](https://github.com/openclaw/openclaw/pull/162595) refactor(sessions): migrate persisted scalar state in Doctor
- [#162984](https://github.com/openclaw/openclaw/pull/162984) fix: allow session-scoped shared publication reads
- [#161620](https://github.com/openclaw/openclaw/pull/161620) fix: mobile pairing loses the Control UI base path
- [#162889](https://github.com/openclaw/openclaw/pull/162889) refactor(compat): deslop retained compatibility callers
- [#163040](https://github.com/openclaw/openclaw/pull/163040) refactor(channels): deslop protocol and setup follow-ups
- [#153573](https://github.com/openclaw/openclaw/pull/153573) fix(heartbeat): select failure wording from prepared work
- [#162801](https://github.com/openclaw/openclaw/pull/162801) refactor(channels): deslop channel plugins
- [#159234](https://github.com/openclaw/openclaw/pull/159234) fix: first image turn loads every bundled media-understanding provider plugin even when the model handles the image natively
- [#163028](https://github.com/openclaw/openclaw/pull/163028) refactor(infra): remove unused listener classification port
- [#160949](https://github.com/openclaw/openclaw/pull/160949) fix(codex): preserve live-thread ownership across same-build module copies
- [#162428](https://github.com/openclaw/openclaw/pull/162428) fix(ui): keep chat and drafts usable when connections fail
- [#163019](https://github.com/openclaw/openclaw/pull/163019) fix(release): verify legacy published chunk ownership
- [#163023](https://github.com/openclaw/openclaw/pull/163023) fix(doctor): preserve symlinks during the NOCOW store rewrite
- [#163034](https://github.com/openclaw/openclaw/pull/163034) docs(bun): use the normal update command in the 2026.9.7 workaround
- [#162832](https://github.com/openclaw/openclaw/pull/162832) fix(ui): typing after opening the model picker edits the chat draft
- [#162869](https://github.com/openclaw/openclaw/pull/162869) fix(heartbeat): avoid unverified chat availability claims
- [#161783](https://github.com/openclaw/openclaw/pull/161783) fix(state): gate read-only agent database opens against quarantine
- [#162974](https://github.com/openclaw/openclaw/pull/162974) fix(config): preserve shorthand model primaries in path writes
- [#162958](https://github.com/openclaw/openclaw/pull/162958) fix(auth): normalize legacy credentials through Doctor
- [#163027](https://github.com/openclaw/openclaw/pull/163027) test(ci): source the package helper from the published-driver stub image helper
- [#163001](https://github.com/openclaw/openclaw/pull/163001) feat(macos): complete the native sidebar session menus
- [#163024](https://github.com/openclaw/openclaw/pull/163024) test(github-copilot): cover catalog presence of Sonnet 5.5 and Opus 5.5
- [#162927](https://github.com/openclaw/openclaw/pull/162927) fix(codex): retain context for scoped client timeouts
- [#163017](https://github.com/openclaw/openclaw/pull/163017) docs(bun): document 2026.9.7 update limitations on Bun
- [#162915](https://github.com/openclaw/openclaw/pull/162915) improve: reduce schema preflight test time
- [#163011](https://github.com/openclaw/openclaw/pull/163011) ci: pin the OpenClaw Bun fork 17c9 prerelease
- [#162427](https://github.com/openclaw/openclaw/pull/162427) refactor(config): migrate bare sender policy keys in Doctor
- [#162522](https://github.com/openclaw/openclaw/pull/162522) refactor(gateway): register worker-environment operations
- [#162771](https://github.com/openclaw/openclaw/pull/162771) fix(doctor): retire deferred receipts and track migration backups
- [#163016](https://github.com/openclaw/openclaw/pull/163016) fix(test): browser, Codex, Crabbox, and QA-lab extension tests fail on loaded hosts when fixture children outlast polling deadlines
- [#162774](https://github.com/openclaw/openclaw/pull/162774) chore(deps): update Undici to 8.11.2
- [#155424](https://github.com/openclaw/openclaw/pull/155424) fix(codex): avoid splitting emoji in catalog originator metadata
- [#162988](https://github.com/openclaw/openclaw/pull/162988) fix: enable guest shared PR publication in chat
- [#162591](https://github.com/openclaw/openclaw/pull/162591) chore(deps): update chrome-devtools-mcp to 1.10.1
- [#162171](https://github.com/openclaw/openclaw/pull/162171) fix(github-copilot): add Claude Sonnet 5.5 and Opus 5.5 to model catalog
- [#162942](https://github.com/openclaw/openclaw/pull/162942) chore(ui): refresh control ui locales
- [#162940](https://github.com/openclaw/openclaw/pull/162940) test(update): give the LaunchAgent activation fixture a real Node executable
- [#162838](https://github.com/openclaw/openclaw/pull/162838) fix(daemon): report the selected launchd job state
- [#162922](https://github.com/openclaw/openclaw/pull/162922) refactor(schemas): reuse remaining defaults and fields
- [#162926](https://github.com/openclaw/openclaw/pull/162926) chore(ui): refresh control ui locales
- [#162919](https://github.com/openclaw/openclaw/pull/162919) fix(doctor): repair large NOCOW stores after closing agent readers
- [#162863](https://github.com/openclaw/openclaw/pull/162863) refactor(state): split profile catalog projections
- [#162976](https://github.com/openclaw/openclaw/pull/162976) fix(e2e): restore generic survivor candidate identity checks
- [#163008](https://github.com/openclaw/openclaw/pull/163008) fix(update): avoid false rollback refusals after Doctor errors
- [#162962](https://github.com/openclaw/openclaw/pull/162962) fix(cron): spawn-only jobs fail when the subagent is spawned with cleanup delete
- [#162824](https://github.com/openclaw/openclaw/pull/162824) refactor(scripts): deslop shared tooling flows
- [#162965](https://github.com/openclaw/openclaw/pull/162965) ci: reduce published-driver PR validation cost
- [#156362](https://github.com/openclaw/openclaw/pull/156362) fix(macos): avoid SIGPIPE rejecting valid Cloud Worker signatures
- [#162624](https://github.com/openclaw/openclaw/pull/162624) fix: SQLite worker capacity errors trigger model fallback
- [#162983](https://github.com/openclaw/openclaw/pull/162983) refactor(infra): remove unused PATH existence option
- [#162967](https://github.com/openclaw/openclaw/pull/162967) fix(agents): bound shell snapshot memory in long-running Gateways
- [#162728](https://github.com/openclaw/openclaw/pull/162728) fix(release): release-decision tests fail on fork CI checkouts
- [#162981](https://github.com/openclaw/openclaw/pull/162981) fix(release): recognize reviewed 2026.9.8 CI exceptions
- [#162959](https://github.com/openclaw/openclaw/pull/162959) fix(release): backport P0/P1 reliability fixes for 2026.9.8
- [#161336](https://github.com/openclaw/openclaw/pull/161336) refactor(sessions): share session creation orchestration
- [#162990](https://github.com/openclaw/openclaw/pull/162990) fix(release): resume after delayed npm registry readback
- [#162951](https://github.com/openclaw/openclaw/pull/162951) fix(gateway): report approved-but-narrowed scope upgrades truthfully
- [#162936](https://github.com/openclaw/openclaw/pull/162936) perf(gateway): show the first chat sooner after a Gateway start
- [#162888](https://github.com/openclaw/openclaw/pull/162888) fix(test): checkout fixture tests fail healthy runs on loaded macOS hosts
- [#162978](https://github.com/openclaw/openclaw/pull/162978) refactor: share npm verification command execution
- [#162982](https://github.com/openclaw/openclaw/pull/162982) fix(browser): clear MCP runtime cache after profile tests
- [#156836](https://github.com/openclaw/openclaw/pull/156836) feat(tooling): collect local compiler performance evidence
- [#162804](https://github.com/openclaw/openclaw/pull/162804) refactor(schemas): deslop shared schema contracts
- [#162810](https://github.com/openclaw/openclaw/pull/162810) perf(gateway): reduce session publication allocations and repeated redaction scans
- [#162767](https://github.com/openclaw/openclaw/pull/162767) test(ui): record renderer stall evidence when Control UI e2e waits fail
- [#162906](https://github.com/openclaw/openclaw/pull/162906) feat(qa): drive forwarded text+photo bursts in Telegram userbot scenarios
- [#162570](https://github.com/openclaw/openclaw/pull/162570) build(macos): pin the app runtime to OpenClaw Bun 17c9ecf9eb
- [#162931](https://github.com/openclaw/openclaw/pull/162931) chore(release): prepare 2026.9.8 P0 hotfix
- [#162969](https://github.com/openclaw/openclaw/pull/162969) fix(test): frozen admission test fails with spawn ETXTBSY when a sibling test forks during the native parser copy
- [#162837](https://github.com/openclaw/openclaw/pull/162837) fix(ci): give direct published-driver callers the CI cell envelope
- [#162957](https://github.com/openclaw/openclaw/pull/162957) refactor(cli): remove unused stderr routing option
- [#162921](https://github.com/openclaw/openclaw/pull/162921) test(gateway): remove low-value tests (batch d136)
- [#159556](https://github.com/openclaw/openclaw/pull/159556) fix(control-ui): skip question-title encoding for ordinary messages
- [#162956](https://github.com/openclaw/openclaw/pull/162956) test(qa): join worker retain completion before status assertions
- [#162652](https://github.com/openclaw/openclaw/pull/162652) refactor(installer): share standalone shell installer policy
- [#162950](https://github.com/openclaw/openclaw/pull/162950) fix(state): finish cleanup after first database creation
- [#162964](https://github.com/openclaw/openclaw/pull/162964) test(gateway): remove low-value tests (batch d139)
- [#158753](https://github.com/openclaw/openclaw/pull/158753) refactor(parallels): reuse artifact expectation helpers
- [#162541](https://github.com/openclaw/openclaw/pull/162541) fix(cli): openclaw command fails to start on Bun-only installs without Node
- [#162953](https://github.com/openclaw/openclaw/pull/162953) test(android): wait for post-history branch phase
- [#162944](https://github.com/openclaw/openclaw/pull/162944) fix: avoid sidebar catalog errors for session-only users
- [#162955](https://github.com/openclaw/openclaw/pull/162955) fix(reef): admit gpt-6.1-sol as a documented immutable guard model
- [#162886](https://github.com/openclaw/openclaw/pull/162886) fix: Doctor leaves abandoned updater runtimes behind
- [#162644](https://github.com/openclaw/openclaw/pull/162644) fix(talk): preserve inherited realtime settings on upgrade
- [#162852](https://github.com/openclaw/openclaw/pull/162852) chore(ui): refresh control ui locales
- [#162831](https://github.com/openclaw/openclaw/pull/162831) chore(ui): refresh control ui locales
- [#162781](https://github.com/openclaw/openclaw/pull/162781) test: share cron and bash-tools fixtures and await exec scope instead of polling
- [#162765](https://github.com/openclaw/openclaw/pull/162765) fix(ci): reuse candidate artifacts for published-driver updates
- [#162738](https://github.com/openclaw/openclaw/pull/162738) fix(test): tsgo, tsdown, run-with-env, and lifecycle tooling tests fail on loaded hosts when fixture children outlast polling deadlines
- [#162711](https://github.com/openclaw/openclaw/pull/162711) test: complete reader pool lifecycle mocks so Bun runs the conservative close path
- [#162909](https://github.com/openclaw/openclaw/pull/162909) fix(update): await transferred progress before finalization
- [#162946](https://github.com/openclaw/openclaw/pull/162946) fix(doctor): recover zero-byte retained session transcripts
- [#162830](https://github.com/openclaw/openclaw/pull/162830) fix: DeepSeek tool calls lose empty string arguments
- [#162943](https://github.com/openclaw/openclaw/pull/162943) fix(test): ACP, cron, secrets, Gmail watcher, and worker runtime tests fail on loaded hosts when fixture children outlast polling deadlines
- [#151599](https://github.com/openclaw/openclaw/pull/151599) fix: avoid defaulting internal work to subagents

#### 🐛 New Issues
- [#162637](https://github.com/openclaw/openclaw/issues/162637) [Bug]: Native Codex completion handoff fails with SESSION_WORK_START_CHANGED before source commit `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬5
- [#162777](https://github.com/openclaw/openclaw/issues/162777) [Bug]: claude-cli runtime: subagent final answer always lost (terminal transcript row lacks __openclaw.runId) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#162737](https://github.com/openclaw/openclaw/issues/162737) candidate migration rehearsal still hits the flat 300 s cap with a verified-clean stopped Gateway, after `update repair` + `doctor --fix` both exit 0 `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬5
- [#162802](https://github.com/openclaw/openclaw/issues/162802) Codex session catalog: Gateway heap OOM ~4 min after start on a 739-agent state (resolveRequestOptions keeps a full config clone per agent) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬4
- [#162615](https://github.com/openclaw/openclaw/issues/162615) [Bug]: Changed-test runs serialize independent test groups `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬4
- [#163026](https://github.com/openclaw/openclaw/issues/163026) Codex session catalog: start() hydrates every agent/home at once; on a 739-agent state ~60 app-server processes, every thread/list times out, host out of memory in ~4 min `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬3
- [#162768](https://github.com/openclaw/openclaw/issues/162768) [Bug]: OpenAI Codex model discovery hardcodes `client_version=0.158.0`, ignoring the configured external Codex app-server `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬3
- [#162690](https://github.com/openclaw/openclaw/issues/162690) [Bug]: release-decision tests leak provenance state in shared core-tooling shard `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#162941](https://github.com/openclaw/openclaw/issues/162941) Plugin LLM completions from agent_end fail with "agent tool caller authority is no longer active" (post-turn work inherits the finished turn's caller identity) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬3
- [#162817](https://github.com/openclaw/openclaw/issues/162817) [Bug]: session-sqlite: retained_plugin_source_conflict loop on empty (0-byte) transcript, unresolvable via doctor --fix / recover `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#162853](https://github.com/openclaw/openclaw/issues/162853) [Bug]: Subagent-completion turns skip preflight compaction, so a session over its threshold is not compacted `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#162554](https://github.com/openclaw/openclaw/issues/162554) WhatsApp: PENDING_DELIVERY_NOTICE silently replaces the real reply instead of supplementing it, recurring far beyond restart boundaries `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#162416](https://github.com/openclaw/openclaw/issues/162416) [Bug]: Percent-encoded $ref in tool schemas loses types for Gemini and breaks argument coercion `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#163020](https://github.com/openclaw/openclaw/issues/163020) [Bug]: Same-model transient retry strips sessions_send/sessions_spawn from requester completion turns `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#163150](https://github.com/openclaw/openclaw/issues/163150) [Bug]: SQLite store worker exits are all counted as "exit" with no code or cause, and the broker never logs why a worker slot failed `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#163005](https://github.com/openclaw/openclaw/issues/163005) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#162448](https://github.com/openclaw/openclaw/issues/162448) [Bug]: Linux desktop app minimize, maximize, and close buttons are overlapping side panel controls `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#163029](https://github.com/openclaw/openclaw/issues/163029) [Bug]: 2026.9.7 still reloads an external plugin mid-turn (40–70 s main-thread stalls) in waves after Gateway start, despite #160658 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#162421](https://github.com/openclaw/openclaw/issues/162421) [Bug]: config set on a string model silently drops the primary when setting model.fallbacks `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#162811](https://github.com/openclaw/openclaw/issues/162811) [Bug]: Native Codex model placeholder selects Platform auth and rejects valid OAuth `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#162525](https://github.com/openclaw/openclaw/issues/162525) doctor --session-sqlite import silently imports nothing after an update leaves a permanent deferred-plugin-session-import receipt `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#162914](https://github.com/openclaw/openclaw/issues/162914) [Bug]: Intermittent "Aborted | sandbox_provisioning" run failures 5 to 7 s after start with rootless Podman sandbox `bug` `bug:behavior` `P1` `issue-rating: 🦪 silver shellfish` 💬2
- [#162908](https://github.com/openclaw/openclaw/issues/162908) [Bug]: Talk can release delegated terminal authority before tracked terminal writes drain `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#162880](https://github.com/openclaw/openclaw/issues/162880) Plugin API: make runContext set/get/clear late-callable for runtime hooks `P2` `impact:session-state` 💬2
- [#162822](https://github.com/openclaw/openclaw/issues/162822) Long-running Gateway: each native-loading CLI run (e.g. memory status) leaves a 0.6–1 GB plugin-captures instance the hourly sweep can't reclaim `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#162821](https://github.com/openclaw/openclaw/issues/162821) Windows: 9.7's longer compile-cache folder can hang start-up in Node's enableCompileCache (nodejs/node#66438) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#162891](https://github.com/openclaw/openclaw/issues/162891) [Bug]: sessions_history includes nested tool results when includeTools is false `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬2
- [#162907](https://github.com/openclaw/openclaw/issues/162907) [Bug]: Talk consult can fail before model execution when finalized speech races stale pre-run orphan repair `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#162899](https://github.com/openclaw/openclaw/issues/162899) [Bug][Windows] Control UI managed update repeatedly freezes in validating before package activation `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬2
- [#162393](https://github.com/openclaw/openclaw/issues/162393) [Bug]: Newline chunk mode breaks long fenced code blocks on Discord and LINE `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#162739](https://github.com/openclaw/openclaw/issues/162739) [Bug]: Control UI renders Codex reasoning activity as a tool card with TOOL INPUT {} `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#162752](https://github.com/openclaw/openclaw/issues/162752) Sandboxed agent never gets plugin-provided browser tool in its live tool catalog, despite every documented policy layer allowing it `P2` `impact:ux-friction` 💬2
- [#162585](https://github.com/openclaw/openclaw/issues/162585) [2026.9.7][Windows] Plugin source-capture staging re-materializes the plugin's own package into package-0/node_modules/<self> and never converges; large npm trees explode linearly (290 MB -> 612 MB+/24 min) so the gateway never turns healthy `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬2
- [#162636](https://github.com/openclaw/openclaw/issues/162636) 2026.9.7: every gateway stop/restart hits the ~325 s shutdown deadline — spawn-broker worker never exits (cleanup incomplete, SIGKILL) `P1` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#162770](https://github.com/openclaw/openclaw/issues/162770) Update failure: gateway-recovery-verification (2026.9.6) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬2
- [#162716](https://github.com/openclaw/openclaw/issues/162716) test(crabbox): align truncated download proof with retry lifecycle `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#162318](https://github.com/openclaw/openclaw/issues/162318) [Bug]: 2026.9.7 - channel agent turns aborted by external AbortError ~185ms after start (Windows) `bug` `regression` `P1` `impact:message-loss` 💬2
- [#162649](https://github.com/openclaw/openclaw/issues/162649) Nested ignore rules misinterpret pattern characters in directory names `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#162564](https://github.com/openclaw/openclaw/issues/162564) Native SQLite CI reports API misuse during connection setup `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#162555](https://github.com/openclaw/openclaw/issues/162555) [Bug]: /new resets are invisible to plugins - no reset generation/boundary in hook payloads, session-scoped memory documents accumulate across resets `P2` `impact:session-state` 💬2
- [#162529](https://github.com/openclaw/openclaw/issues/162529) [Feature]: Managed artifacts for safe plugin binary handoff `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#162324](https://github.com/openclaw/openclaw/issues/162324) [Bug]: Windows Companion typing feels slower when maximized on a 4K display `P2` `impact:ux-friction` 💬2
- [#162407](https://github.com/openclaw/openclaw/issues/162407) [Bug]: Telegram rich messages cannot produce mentions: tg://user links become URLs and linkPreview:false suppresses @username detection `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#162420](https://github.com/openclaw/openclaw/issues/162420) Daily reset rollover of a worker-placed dashboard session fails: "timed out draining work before reply session rollover" `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#162346](https://github.com/openclaw/openclaw/issues/162346) [Bug]: Codex harness exec auto-review gets no conversation transcript, so owner-requested commands are denied `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#163152](https://github.com/openclaw/openclaw/issues/163152) [Feature]: Keep more than one idle agent-DB native owner warm on multi-agent gateways (single process-wide idle slot forces reopens) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163151](https://github.com/openclaw/openclaw/issues/163151) [Bug]: "Agent database execution lost its native owner" fails the turn instead of reopening on a fresh native generation (2026.9.7) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#163144](https://github.com/openclaw/openclaw/issues/163144) [Bug]: A workspace skill named export-session duplicates Telegram's native command `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#163136](https://github.com/openclaw/openclaw/issues/163136) [Bug]: sessions_spawn runtime "acp" with expectsCompletionMessage:false still wakes the requester session on completion `P2` `impact:session-state` 💬1
- [#163139](https://github.com/openclaw/openclaw/issues/163139) [Bug]: Windows plugins.reload fails preparing host-package link with EPERM and stalls Gateway `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#163130](https://github.com/openclaw/openclaw/issues/163130) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#163125](https://github.com/openclaw/openclaw/issues/163125) Classic (non-add-on) Google Chat app: webhook always returns 403, no log output `P2` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#163122](https://github.com/openclaw/openclaw/issues/163122) Realtime voice audio stalls and transcript content or confirmations can be lost `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#163121](https://github.com/openclaw/openclaw/issues/163121) iOS chat loses history position, message order, and session UI state `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#163126](https://github.com/openclaw/openclaw/issues/163126) Classic (non-add-on) Google Chat app: webhook always returns 403, no log output 💬1
- [#163116](https://github.com/openclaw/openclaw/issues/163116) [Bug]: 2026.9.7 Doctor treats bind-mount aliases as separate SQLite databases and aborts backup `bug` `regression` `P0` `maturity:stable` 💬1
- [#163107](https://github.com/openclaw/openclaw/issues/163107) view_image on HEIC with no external converter fails and leaves ~250–400 MB RSS per attempt (2026.9.4) `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#163085](https://github.com/openclaw/openclaw/issues/163085) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#163068](https://github.com/openclaw/openclaw/issues/163068) Session controller: derive cloud worker turn cancellation and liveness from the controller operation `gateway` `maintainer` `no-stale` `P2` 💬1
- [#163066](https://github.com/openclaw/openclaw/issues/163066) Session controller: accept Talk consults through the mailbox and cancel them through Stop `gateway` `maintainer` `no-stale` `P2` 💬1
- [#163065](https://github.com/openclaw/openclaw/issues/163065) Session controller: run ACP turns, /acp steer, and /acp cancel through the target session's controller `agents` `maintainer` `no-stale` `P2` 💬1
- [#163064](https://github.com/openclaw/openclaw/issues/163064) Session controller: steer through one controller-owned injection path `agents` `maintainer` `no-stale` `P2` 💬1
- [#163060](https://github.com/openclaw/openclaw/issues/163060) Session controller: queue messages refused as question answers instead of consuming them `gateway` `agents` `maintainer` `no-stale` 💬1
- [#163078](https://github.com/openclaw/openclaw/issues/163078) [Feature]: Support persistent type: "acp" bindings for plain Telegram DMs (or document the supported shape) `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#163072](https://github.com/openclaw/openclaw/issues/163072) [Feature]: workboard — allow withholding a field or section from the worker prompt `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163069](https://github.com/openclaw/openclaw/issues/163069) Session controller: decide heartbeat skips in mailbox admission `agents` `maintainer` `no-stale` `P2` 💬1
- [#163067](https://github.com/openclaw/openclaw/issues/163067) Session controller: route the remaining direct run cancellations through the controller `agents` `maintainer` `no-stale` `P2` 💬1
- [#163058](https://github.com/openclaw/openclaw/issues/163058) Session controller: deliver subagent completions and sessions_yield continuations through the mailbox `agents` `maintainer` `no-stale` `P2` 💬1
- [#163059](https://github.com/openclaw/openclaw/issues/163059) Session controller: run main-session restart recovery as a controller turn `agents` `maintainer` `no-stale` `P2` 💬1
- [#163042](https://github.com/openclaw/openclaw/issues/163042) [Bug]: WebChat drops assistant text emitted before a tool call (2026.9.7 regression) - text persisted in transcript but lost from UI `P1` `clawsweeper:needs-live-repro` `impact:message-loss` `issue-rating: 🐚 platinum hermit` 💬1
- [#163025](https://github.com/openclaw/openclaw/issues/163025) Workboard: safely archive eligible history before refusing a near-budget mutation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#163022](https://github.com/openclaw/openclaw/issues/163022) [Bug]: Channel (Discord) reply dispatch dead-letters on primary auth-profile cooldown — reply-resolver pre-flight never consults configured cross-provider fallbacks `P1` `clawsweeper:needs-info` `impact:message-loss` `impact:auth-provider` 💬1
- [#162622](https://github.com/openclaw/openclaw/issues/162622) update cleanup does not see Doctor's *.pre-startup-migration-<id>.bak originals (no native retirement path) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162916](https://github.com/openclaw/openclaw/issues/162916) [Bug]: Session-scoped guests cannot use shared GitHub publication `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#163006](https://github.com/openclaw/openclaw/issues/163006) [Bug]: Amazon Bedrock Mantle provider 401s with "Invalid bearer token" when auth: "aws-sdk" is set `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#162582](https://github.com/openclaw/openclaw/issues/162582) [Bug]: `snapshotCache` in `src/agents/shell-snapshot.ts` is never evicted, so it retains one entry per distinct shell-snapshot key for the life of the process `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#162924](https://github.com/openclaw/openclaw/issues/162924) sessions_send notify requires broad write for an owned guest session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#162993](https://github.com/openclaw/openclaw/issues/162993) [Feature]: Remember Workboard search and filters across reloads `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162991](https://github.com/openclaw/openclaw/issues/162991) [Feature]: Configurable naming guideline for automatic dashboard session titles `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162893](https://github.com/openclaw/openclaw/issues/162893) [Bug]: Gateway trips RSS critical under fleet load before reaching heap cap 💬1
- [#162979](https://github.com/openclaw/openclaw/issues/162979) [Feature]: Inspect people’s assigned roles and permission limits `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#162977](https://github.com/openclaw/openclaw/issues/162977) npm install fails: openclaw 2026.9.6/2026.9.7 pin file-type to unpublished versions (ETARGET) `P0` `impact:ux-release-blocker` 💬1
- [#162972](https://github.com/openclaw/openclaw/issues/162972) Signal: support outbound native mentions in the message tool `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162970](https://github.com/openclaw/openclaw/issues/162970) [Bug]: Inline /exec approval directives are silently discarded in groups without a bot mention `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#162971](https://github.com/openclaw/openclaw/issues/162971) [Bug]: MCP node exec converts ask=always to on-miss and offers Allow always `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#162966](https://github.com/openclaw/openclaw/issues/162966) [Bug]: Codex harness: message-tool send with explicit `channel` to the current iMessage DM is not credited as the source reply, so settled-turn finalization posts a second reply (2026.9.7) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#162900](https://github.com/openclaw/openclaw/issues/162900) [Bug]: Sidebar requests external session catalogs without read authority `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#162947](https://github.com/openclaw/openclaw/issues/162947) [Bug]: Spoken confirmation still never clears on 2026.9.7: each retry mints a new ID (fixes for #159690 and #162039 are in the build) `bug` `regression` `P1` `impact:session-state` 💬1
- [#162861](https://github.com/openclaw/openclaw/issues/162861) Add an optional per-plugin agent allowlist for LLM completions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#162939](https://github.com/openclaw/openclaw/issues/162939) Control UI "Working status" live commentary leaks raw inbound turn context on Claude CLI backend `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬1
- [#162878](https://github.com/openclaw/openclaw/issues/162878) [Docs Bug]: Paused progress cards lack guidance to avoid repeated completion checks `bug` `docs` `no-stale` `P3` 💬1
- [#162734](https://github.com/openclaw/openclaw/issues/162734) [Bug]: Post-compaction AGENTS.md excerpts run past a top-level # heading and drop later sections `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#162895](https://github.com/openclaw/openclaw/issues/162895) [Bug] 2026.9.7 doctor --fix deadlocks during agent DB schema migration (21→24): admission stays permanently closed — "read admission is closed" blockingOwner:"unknown"; staged upgrade via 9.5 does not avoid it `impact:crash-loop` `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#162879](https://github.com/openclaw/openclaw/issues/162879) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#162875](https://github.com/openclaw/openclaw/issues/162875) [Bug]: decision_evaluate always fails in scheduled/CLI-started runs ("Gateway caller authority is no longer active") `P1` `impact:auth-provider` 💬1
- [#162732](https://github.com/openclaw/openclaw/issues/162732) [Bug]: File-based usage footer stops updating after an atomic save `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#162860](https://github.com/openclaw/openclaw/issues/162860) Update failure: doctor-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#162855](https://github.com/openclaw/openclaw/issues/162855) Chat replies arrive one message behind when a local/LAN model is served through the openai-completions adapter `P1` `impact:message-loss` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#162854](https://github.com/openclaw/openclaw/issues/162854) [Feature]: search bounded prefixes of large local skill instructions `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#162850](https://github.com/openclaw/openclaw/issues/162850) [Feature]: Add a dedicated label filter to Workboard `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162846](https://github.com/openclaw/openclaw/issues/162846) [Bug]: 026.9.7 doctor --fix loses agent database maintenance lease during plugin session repair (Linux arm64) `bug` `regression` `impact:session-state` `P0` 💬1
- [#162839](https://github.com/openclaw/openclaw/issues/162839) [Bug]: omitted skill directory still receives scan instructions `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#162740](https://github.com/openclaw/openclaw/issues/162740) [Bug]: Windows skill-watch refresh repeatedly blocks Gateway health and Discord `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#162797](https://github.com/openclaw/openclaw/issues/162797) [Bug]: WhatsApp announce/directory path fails with whatsapp_connection_owner_busy against the gateway's own lock (2026.9.5); retries re-run tool-less hand-off turns `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#162814](https://github.com/openclaw/openclaw/issues/162814) [Feature]: iOS app — search and filter on the Sessions screen and sidebar (text, agent, kind, channel) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162795](https://github.com/openclaw/openclaw/issues/162795) [Bug]: before_agent_finalize revise pass fails with "Session transcript projection is rebuilding" on the primary model; fallback answer ignores the revision (2026.9.5) `P2` `impact:session-state` 💬1
- [#162790](https://github.com/openclaw/openclaw/issues/162790) MSTeams: project authenticated tenant identity into hooks and support tenantAllowlist `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#162789](https://github.com/openclaw/openclaw/issues/162789) Bug: macOS node exec immediately fails with COMPANION_APP_UNAVAILABLE on 2026.9.7 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#162579](https://github.com/openclaw/openclaw/issues/162579) [Bug]: Stalled cron tool-call -> SQLite lock contention -> state.lease fails (busyTimeoutMs=0) -> agent-DB admission closes permanently ("Agent database execution admission is closed") `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` `impact:crash-loop` 💬1
- [#162785](https://github.com/openclaw/openclaw/issues/162785) [Bug]: Windows Gateway service never starts - CLI respawn layer breaks the wscript->cmd->node task-supervisor lineage (Windows task supervisor lost its original CMD launcher) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#162778](https://github.com/openclaw/openclaw/issues/162778) Update failure: gateway-recovery-verification (2026.9.6) `clawsweeper:needs-info` `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#162784](https://github.com/openclaw/openclaw/issues/162784) [Bug]: iOS Talk hard-codes a 30s run timeout (runTimeoutMs: 30000) that kills normal agent turns and every fallback `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#162773](https://github.com/openclaw/openclaw/issues/162773) [Bug]: Control UI terminal panel: keyboard input not sent to gateway (terminal.input never logged, all browsers) `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#162769](https://github.com/openclaw/openclaw/issues/162769) [Feature]: Give message-tool sends the destination channel's delivery-format contract the default route already gets `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162764](https://github.com/openclaw/openclaw/issues/162764) [Bug]: memory_search hybrid ranking drops the only chunk that contains the whole query `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162762](https://github.com/openclaw/openclaw/issues/162762) cli_budget compaction ignores claude-cli ownsNativeCompaction when model is anthropic/* with agentRuntime claude-cli (falls back to API, auth_failed) `P1` `impact:session-state` `impact:message-loss` `impact:auth-provider` 💬1
- [#162761](https://github.com/openclaw/openclaw/issues/162761) [Bug]: Same-owner followups revoke native subagent completion authority and stall authorized work `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#162754](https://github.com/openclaw/openclaw/issues/162754) Update failure: global-install-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#162751](https://github.com/openclaw/openclaw/issues/162751) Codex thread title stores the full assembled turn context, triplicated into title/first_user_message/preview `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#162745](https://github.com/openclaw/openclaw/issues/162745) RFC: keyless Copilot managed web-search provider (tools.web.search.provider: copilot) `P3` `impact:auth-provider` 💬1
- [#162731](https://github.com/openclaw/openclaw/issues/162731) Codex one-shot cleanup rejects a completed run on OpenClaw 2026.9.6 `P2` `impact:other` 💬1
- [#162730](https://github.com/openclaw/openclaw/issues/162730) [Docs Bug]: docs: macOS VM guide never explains how to open the dashboard from the host Mac `bug` `docs` `P2` `clawsweeper:source-repro` 💬1
- [#162723](https://github.com/openclaw/openclaw/issues/162723) OpenAI realtime transcription provider rejects OAuth for gpt-4o-transcribe `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162714](https://github.com/openclaw/openclaw/issues/162714) Discord and Mattermost ingress drains hold the channel lane through debounce deferral, so same-channel messages can never merge (Telegram/Slack/LINE/WhatsApp already release) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#162717](https://github.com/openclaw/openclaw/issues/162717) Image generation: support response_format config or url response parsing for custom OpenAI-compatible providers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162715](https://github.com/openclaw/openclaw/issues/162715) Gateway heap grows without bound: each model catalog build keeps the previous one alive (createFullModelCatalogAccess) `P1` `impact:other` 💬1
- [#162708](https://github.com/openclaw/openclaw/issues/162708) Update failure: package-permissions (2026.9.6) `P0` `impact:ux-release-blocker` 💬1
- [#162709](https://github.com/openclaw/openclaw/issues/162709) Memory leak: session-transcript.worker.js never retires workers (RSS climbs ~23 MB/min to CRITICAL) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#162698](https://github.com/openclaw/openclaw/issues/162698) [Feature]: Configurable end-user model picker without provider/auth/runtime metadata `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162699](https://github.com/openclaw/openclaw/issues/162699) Investigate lossless Control UI translation-memory compression tradeoffs `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162691](https://github.com/openclaw/openclaw/issues/162691) [Bug]: shared gateway shard invalidates state DB read admission between tests `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬1
- [#162438](https://github.com/openclaw/openclaw/issues/162438) [Bug]: Home path shortening corrupts paths when HOME=/ or the home is a prefix of another path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#162437](https://github.com/openclaw/openclaw/issues/162437) [Bug]: Root-anchored ignore rules like /build also hide nested skills such as deploy/build `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#162675](https://github.com/openclaw/openclaw/issues/162675) A managed env key supplied via the unit's EnvironmentFile= is deleted at Gateway startup, so auth-profile SecretRefs never resolve `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#162677](https://github.com/openclaw/openclaw/issues/162677) [Bug] Tool-call pipeline rewrites literal auth-scheme strings in executed code (Bearer -> ***), silently breaking outbound auth `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#162676](https://github.com/openclaw/openclaw/issues/162676) Stale subagent completion retried forever ("owner changed before settlement") stalls gateway `bug` `regression` `impact:session-state` `impact:message-loss` 💬1
- [#162672](https://github.com/openclaw/openclaw/issues/162672) [Bug] 2026.9.7: database identity checks using birthtimeNs break on Linux kernels without statx (Node reports birthtime == ctime) → Doctor restarts with "Existing shared-state database generation changed" `impact:crash-loop` `P0` `impact:ux-release-blocker` 💬1
- [#162657](https://github.com/openclaw/openclaw/issues/162657) [Bug]: Gateway health reports a context engine as quarantined after a failed plugin activation stops quarantining it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#162654](https://github.com/openclaw/openclaw/issues/162654) worker-placement cloud workspace recovery fails with SessionTranscriptWriterClaimReboundError on slow storage `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#162648](https://github.com/openclaw/openclaw/issues/162648) Binary availability reuses relative-PATH hits after the working directory changes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#162647](https://github.com/openclaw/openclaw/issues/162647) Skill Workshop: skill-collection-review job is enabled for agents whose tool policy cannot satisfy the maintenance toolset (permanent failures) `P2` `impact:other` 💬1
- [#162638](https://github.com/openclaw/openclaw/issues/162638) acpx: Codex ACP sessions ignore [apps]/[plugins] from ~/.codex/config.toml — disabled ChatGPT apps re-enabled (Slack connector posts as the owner) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:security` 💬1
- [#162543](https://github.com/openclaw/openclaw/issues/162543) [Bug]: IMAP watcher initializes an invalid cursor when UIDNEXT is unavailable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#162628](https://github.com/openclaw/openclaw/issues/162628) Linux 2026.9.5: /tmp/openclaw-plugin-build-* staging dirs never cleaned (317 dirs, 31 GB in ~15h); live plugin runs from a deleted dir `P1` `impact:other` 💬1
- [#162626](https://github.com/openclaw/openclaw/issues/162626) workboard_dispatch always fails: generated comment exceeds 2000-char limit `P1` `impact:other` 💬1
- [#162620](https://github.com/openclaw/openclaw/issues/162620) test(ui): pending-handoff locator also matches screen-reader announcement `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#162606](https://github.com/openclaw/openclaw/issues/162606) Browser Talk can hang during granted microphone and WebRTC startup `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#162600](https://github.com/openclaw/openclaw/issues/162600) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#162594](https://github.com/openclaw/openclaw/issues/162594) Agent session regression fixtures fail with retained worker readers and hashed claim errors `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#162596](https://github.com/openclaw/openclaw/issues/162596) [Feature]: Native ChatGPT/OpenAI compaction for the embedded OpenClaw runtime `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162588](https://github.com/openclaw/openclaw/issues/162588) macOS native tests: oversubscribed full suite wedges when WebKit's networking service starves inside a TestIsolation scope `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#162587](https://github.com/openclaw/openclaw/issues/162587) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#162547](https://github.com/openclaw/openclaw/issues/162547) [Bug]: Telegram DM shows no typing indicator while a message waits behind a long live run `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#162562](https://github.com/openclaw/openclaw/issues/162562) chat.send rejects `__controlUiReconnectResume` "at root" although the 9.7 build has a handler for it — wedges the desktop app on every reconnect (restart required) `P1` `impact:message-loss` `maturity:stable` `impact:ux-friction` 💬1
- [#162561](https://github.com/openclaw/openclaw/issues/162561) sessions_spawn from a claude-cli parent drops natively-provided coding tools from the child's tool ceiling `P1` `impact:other` 💬1
- [#162546](https://github.com/openclaw/openclaw/issues/162546) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#162514](https://github.com/openclaw/openclaw/issues/162514) [Bug]: 2026.9.6 (Windows): plugin source-capture rebuilds ~20k files on every start (320-520s), agent-turn cron jobs fail with DataCloneError, and 9.6->9.2 downgrade is blocked by state schema 18 vs 15 `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#162512](https://github.com/openclaw/openclaw/issues/162512) [Feature]: API Route external provider plugin and catalog eligibility `P3` `impact:ux-friction` 💬1
- [#162511](https://github.com/openclaw/openclaw/issues/162511) `openclaw backup create` hangs on the SQLite snapshot of live gateway-held WAL databases `P1` `impact:crash-loop` 💬1
- [#162510](https://github.com/openclaw/openclaw/issues/162510) Windows: 2026.9.7 regression — `sessions.create` always fails with "Session creation publication owner is no longer current" `impact:session-state` `P0` `impact:ux-release-blocker` 💬1
- [#162506](https://github.com/openclaw/openclaw/issues/162506) Update failure: gateway-recovery-verification (2026.9.7) `clawsweeper:needs-info` `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#162497](https://github.com/openclaw/openclaw/issues/162497) SQLite worker store capacity is fixed at 64 and reported as "overloaded", so gateways with ~64 agents fail every turn with "temporary internal error" `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#162499](https://github.com/openclaw/openclaw/issues/162499) Matrix: gallery messages from Element X (MSC4274) reach the agent as text only, and the images are dropped silently `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162498](https://github.com/openclaw/openclaw/issues/162498) workboard_comment returns the full card on every call (21 KB on average), which bloats agent context `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162492](https://github.com/openclaw/openclaw/issues/162492) [Bug]: Docker-wrapped stdio MCP servers still orphan containers on 2026.9.5 (follow-up to #75323 / #65694 / #86412) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#162482](https://github.com/openclaw/openclaw/issues/162482) [Bug]: Failed-subagent fallback notice "Please retry the task" is sent to the remote peer agent over a2a `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162462](https://github.com/openclaw/openclaw/issues/162462) GitHub Copilot test cleanup: consolidate coverage and repair masked assertions `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#162471](https://github.com/openclaw/openclaw/issues/162471) [Bug]: 2026.9.7 audio preflight accepts AbortSignal but does not propagate in-flight cancellation `P2` `impact:other` 💬1
- [#162458](https://github.com/openclaw/openclaw/issues/162458) [Bug]: `spawnedByCache` in `createAgentEventHandler` is never evicted, so it grows one permanent entry per spawned session `P2` `impact:other` `clawsweeper:bulk-filed` 💬1
- [#162465](https://github.com/openclaw/openclaw/issues/162465) A2A channel: allow sending structured data parts (and mediaType / taskId) from the message tool `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162459](https://github.com/openclaw/openclaw/issues/162459) Session reset drops registered plugin session state (`pluginExtensions`): both rebuild sites copy a field allowlist that omits it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#162452](https://github.com/openclaw/openclaw/issues/162452) Durable ingress can be committed after watchdog abort before agent adoption (2026.9.2) `impact:data-loss` `impact:message-loss` `P0` 💬1
- [#162447](https://github.com/openclaw/openclaw/issues/162447) [Bug]: 2026.8.x WhatsApp outbound rendering inserts a blank line before bullet lists and substitutes the bullet glyph (breaks receipt-bound verification) `P3` `impact:other` 💬1
- [#162422](https://github.com/openclaw/openclaw/issues/162422) [Bug]: OpenAI-compatible endpoints return 408 for valid large bodies that take longer than 30 seconds to upload `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#162419](https://github.com/openclaw/openclaw/issues/162419) claude-cli: native tool "allow-always" grants are lost every turn because they live in the per-turn live CLI session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#162415](https://github.com/openclaw/openclaw/issues/162415) Stuck-session recovery aborts live claude-cli runs: tool-progress tracking desync (phantom active tool call) `P1` `impact:session-state` 💬1
- [#162405](https://github.com/openclaw/openclaw/issues/162405) Update failure: unexpected-error (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#162370](https://github.com/openclaw/openclaw/issues/162370) Distribute daily Android Internal testing builds through Firebase `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#162373](https://github.com/openclaw/openclaw/issues/162373) Windows-only DataCloneError regression breaks webchat & heartbeat dispatch in 2026.9.7 `P1` `impact:message-loss` 💬1
- [#162362](https://github.com/openclaw/openclaw/issues/162362) Update failure: database-schema-preflight (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#163166](https://github.com/openclaw/openclaw/issues/163166) Update failure: gateway-recovery-verification (2026.9.7)

#### 🔒 Closed Issues
- [#141102](https://github.com/openclaw/openclaw/issues/141102) [Bug]: Collection-review jobs can remain enabled when rooted execution is deterministically rejected
- [#161953](https://github.com/openclaw/openclaw/issues/161953) [Bug]: Windows: sessions.create always fails with "Session creation publication owner is no longer current" on 2026.9.7 (win32 \\?\ SQLite path leaks into the creation-publication guard)
- [#112160](https://github.com/openclaw/openclaw/issues/112160) [Bug]: SSH sandbox does not stage inbound media into an existing remote workspace
- [#55694](https://github.com/openclaw/openclaw/issues/55694) Agent陷入工具调用失败死循环，导致重复发送消息刷屏
- [#142549](https://github.com/openclaw/openclaw/issues/142549) Messages duplicated 3-4 times in chat UI
- [#142421](https://github.com/openclaw/openclaw/issues/142421) [Bug]: models auth logout leaves plaintext credentials in plugin-model-catalog cache; doctor --fix resurrects them
- [#162047](https://github.com/openclaw/openclaw/issues/162047) [Bug]: Windows 2026.9.7 upgrade spends over 35 minutes in Doctor with repeated hardlink namespace validation
- [#162083](https://github.com/openclaw/openclaw/issues/162083) [Bug]: doctor's plugin session repair loses its own agent-database-maintenance lease (plugin-doctor-post-session-state step-refused)
- [#119382](https://github.com/openclaw/openclaw/issues/119382) [Bug]: WhatsApp durable ingress lane hold starves inbound debounce — same-chat bursts never merge and each message pays the full window
- [#82121](https://github.com/openclaw/openclaw/issues/82121) Leaked truncation sentinels (`...(truncated)...` / `[..., N more characters truncated]`) can appear in final assistant replies
- [#140877](https://github.com/openclaw/openclaw/issues/140877) [Bug]: Unhandled rejection in inbound-debounce runFlush exits the gateway when onFlush returns a handle without .admission
- [#162777](https://github.com/openclaw/openclaw/issues/162777) [Bug]: claude-cli runtime: subagent final answer always lost (terminal transcript row lacks __openclaw.runId)
- [#137294](https://github.com/openclaw/openclaw/issues/137294) [Bug]: Preflight compaction is aborted by the shorter ingress adoption watchdog
- [#142506](https://github.com/openclaw/openclaw/issues/142506) [Feature]: Shared mobile browser handoff for chat channels and native clients
- [#113983](https://github.com/openclaw/openclaw/issues/113983) [Bug]: 2026.7.1-2 gateway lock loop + signal plugin never loads after `openclaw update`
- [#162802](https://github.com/openclaw/openclaw/issues/162802) Codex session catalog: Gateway heap OOM ~4 min after start on a 739-agent state (resolveRequestOptions keeps a full config clone per agent)
- [#161869](https://github.com/openclaw/openclaw/issues/161869) doctor --fix: heap OOM in the runtime tool schema check on a 739-agent state (a plugin registry and config snapshot retained per agent workspace)
- [#162615](https://github.com/openclaw/openclaw/issues/162615) [Bug]: Changed-test runs serialize independent test groups
- [#122622](https://github.com/openclaw/openclaw/issues/122622) [Bug]: WhatsApp media upload always fails with 'Media upload failed on all hosts' when managed proxy is enabled (undici ProxyAgent vs Node-native https in baileys upload path)
- [#154278](https://github.com/openclaw/openclaw/issues/154278) secrets.egressProxy blocks ALL exec calls from cron/automation agentTurn runs ("Secret egress proxy requires an admitted agent run instance")
- [#152358](https://github.com/openclaw/openclaw/issues/152358) [Bug]: memory path search and schema check full-scan on a one-row sqlite_stat1 estimate; Gateway event loop blocked for 36 minutes
- [#138929](https://github.com/openclaw/openclaw/issues/138929) [Bug]: Model emits malformed pseudo tool-call text on first "read" tool use, causing "Agent couldn't generate a response"
- [#161770](https://github.com/openclaw/openclaw/issues/161770) [Bug]: `doctor --fix` keeps the managed Gateway stopped for ~3 s per retained transcript archive, even when no archive changes
- [#136653](https://github.com/openclaw/openclaw/issues/136653) Google Chat automatic replies can discard the typing thread
- [#163026](https://github.com/openclaw/openclaw/issues/163026) Codex session catalog: start() hydrates every agent/home at once; on a 739-agent state ~60 app-server processes, every thread/list times out, host out of memory in ~4 min
- [#162276](https://github.com/openclaw/openclaw/issues/162276) 2026.9.7: every agent turn fails with WorkerTaskError: DataCloneError (all channels)
- [#159424](https://github.com/openclaw/openclaw/issues/159424) [Bug]: In-run auto-compaction ignores `compaction.thinkingLevel` and its `low` default, summarizing at the session thinking level
- [#162690](https://github.com/openclaw/openclaw/issues/162690) [Bug]: release-decision tests leak provenance state in shared core-tooling shard
- [#162817](https://github.com/openclaw/openclaw/issues/162817) [Bug]: session-sqlite: retained_plugin_source_conflict loop on empty (0-byte) transcript, unresolvable via doctor --fix / recover
- [#150579](https://github.com/openclaw/openclaw/issues/150579) Pre-compaction/budget flush-hook token meter reads cumulative retained transcript events instead of the active window, spuriously firing budget compactions
- [#161100](https://github.com/openclaw/openclaw/issues/161100) [Bug]: Codex harness drops thinking level max (effort null) on reply-path turns (chat.send, channels, sessions.send)
- [#148967](https://github.com/openclaw/openclaw/issues/148967) Steering-skipped tool calls trigger misleading blocked warnings in Slack
- [#146859](https://github.com/openclaw/openclaw/issues/146859) Chat Completions usage parser omits contextUsage, causing heuristic fallback and premature context overflow
- [#158284](https://github.com/openclaw/openclaw/issues/158284) bug(slack/subagents): completion announce to a non-threaded Slack DM lands as a thread reply under the request message
- [#162099](https://github.com/openclaw/openclaw/issues/162099) [CI] src/infra/sqlite-snapshot-staging-owner.test.ts flakes on compact-large shards across unrelated PRs
- [#162416](https://github.com/openclaw/openclaw/issues/162416) [Bug]: Percent-encoded $ref in tool schemas loses types for Gemini and breaks argument coercion
- [#125873](https://github.com/openclaw/openclaw/issues/125873) Bedrock toolUse.input replayed unsanitized — poisons conversation history (sibling of #21873)
- [#122476](https://github.com/openclaw/openclaw/issues/122476) Single-character streamed prefix of NO_REPLY can render before suppression (Matrix and other delta-rendering channels)
- [#138955](https://github.com/openclaw/openclaw/issues/138955) [Bug]: Session group defaults show Git error instead of required admin permission
- [#135378](https://github.com/openclaw/openclaw/issues/135378) [Bug]: Session host picker offers ineligible devices and its tooltip names an already-satisfied config key
- [#122298](https://github.com/openclaw/openclaw/issues/122298) [Bug]: openclaw skills install --global writes files but skips skills.entries registration — skill invisible to gateway
- [#155193](https://github.com/openclaw/openclaw/issues/155193) browser/service: 'deferred tracked browser tab ... browser-identity-lookup-failed' warns every 5 min for up to 24h after a managed profile is stopped
- [#151792](https://github.com/openclaw/openclaw/issues/151792) Feishu: inbound files silently dropped when sent as rich-text `post` (multi-file or file + caption)
- [#159897](https://github.com/openclaw/openclaw/issues/159897) [Bug]: Stale managed-update handoff lease from a dead triage run blocks all updates; update repair does not clear it (Windows, 2026.9.5)
- [#120616](https://github.com/openclaw/openclaw/issues/120616) [Bug]: Gemini dotted cron update fields cause repeated patch-required failures
- [#143471](https://github.com/openclaw/openclaw/issues/143471) [Feature]: Manage Fleet cells on explicit paired-node targets
- [#143422](https://github.com/openclaw/openclaw/issues/143422) [Feature]: Repository-scoped attached resources for Cloud sessions
- [#143024](https://github.com/openclaw/openclaw/issues/143024) [Feature]: iOS native browser handoff flow
- [#143023](https://github.com/openclaw/openclaw/issues/143023) [Feature]: Android native browser handoff flow
- [#142676](https://github.com/openclaw/openclaw/issues/142676) Feature: Decouple typing indicator from room event suppression — show "is typing..." in public channels without enabling ambient reply flooding
- [#142531](https://github.com/openclaw/openclaw/issues/142531) [Feature]: Read-only Tailscale pairing preflight for externally managed Serve routes
- [#142529](https://github.com/openclaw/openclaw/issues/142529) [Bug]: Android resets the connection screen when Tailscale is unavailable
- [#163020](https://github.com/openclaw/openclaw/issues/163020) [Bug]: Same-model transient retry strips sessions_send/sessions_spawn from requester completion turns
- [#159661](https://github.com/openclaw/openclaw/issues/159661) [Bug]: claude-cli turns refused by a finished run's stale activeWriterRunId ("CLI history owner changed before preparation") → permanent fallback loop
- [#119255](https://github.com/openclaw/openclaw/issues/119255) [Feature]: Bring completed-turn "Worked for X" rollups to native Apple chat
- [#155590](https://github.com/openclaw/openclaw/issues/155590) Forking a claude-cli conversation starts the child with an empty model context
- [#158890](https://github.com/openclaw/openclaw/issues/158890) [Bug]: cron warning diagnostics are not recorded when an exec tool call fails input validation (the remedy cited when closing #121626 does not cover this path)
- [#153543](https://github.com/openclaw/openclaw/issues/153543) [Bug]: Failed agent-codex Discord turn delivered to user's Feishu DM with heartbeat-failure copy despite heartbeat disabled (normal failure mislabeled as heartbeat + cross-channel delivery)
- [#114029](https://github.com/openclaw/openclaw/issues/114029) deepseek provider: config apiKey 字段被静默忽略 + 默认 model 名 deepseek-chat 已被平台下线
- [#162421](https://github.com/openclaw/openclaw/issues/162421) [Bug]: config set on a string model silently drops the primary when setting model.fallbacks
- [#162525](https://github.com/openclaw/openclaw/issues/162525) doctor --session-sqlite import silently imports nothing after an update leaves a permanent deferred-plugin-session-import receipt
- [#162159](https://github.com/openclaw/openclaw/issues/162159) GitHub Copilot: claude-sonnet-5.5 missing from model catalog despite GA on Copilot (2026.9.7)
- [#162880](https://github.com/openclaw/openclaw/issues/162880) Plugin API: make runContext set/get/clear late-callable for runtime hooks
- [#162821](https://github.com/openclaw/openclaw/issues/162821) Windows: 9.7's longer compile-cache folder can hang start-up in Node's enableCompileCache (nodejs/node#66438)
- [#162891](https://github.com/openclaw/openclaw/issues/162891) [Bug]: sessions_history includes nested tool results when includeTools is false
- [#162393](https://github.com/openclaw/openclaw/issues/162393) [Bug]: Newline chunk mode breaks long fenced code blocks on Discord and LINE
- [#162739](https://github.com/openclaw/openclaw/issues/162739) [Bug]: Control UI renders Codex reasoning activity as a tool card with TOOL INPUT {}
- [#162752](https://github.com/openclaw/openclaw/issues/162752) Sandboxed agent never gets plugin-provided browser tool in its live tool catalog, despite every documented policy layer allowing it
- [#160609](https://github.com/openclaw/openclaw/issues/160609) Lost category update acknowledgements invalidate unrelated session reads
- [#113756](https://github.com/openclaw/openclaw/issues/113756) [Bug]: Message ordering conflict / out-of-order replies still occurring on 2026.7.1-2 (webchat)
- [#162716](https://github.com/openclaw/openclaw/issues/162716) test(crabbox): align truncated download proof with retry lifecycle
- [#114200](https://github.com/openclaw/openclaw/issues/114200) [Bug]: Structured output is dropped or malformed on OpenAI Responses paths
- [#159575](https://github.com/openclaw/openclaw/issues/159575) [Feature]: Add a host-owned quiet-period progress supervisor
- [#143236](https://github.com/openclaw/openclaw/issues/143236) anthropic catalog: sessions created by gateway SDK runtime (entrypoint sdk-ts) are invisible — long web sessions appear to 'lose' their thread
- [#151671](https://github.com/openclaw/openclaw/issues/151671) [Bug]: Spawn broker exits when an unbuffered (streaming) command hits EMFILE, ending every command it runs
- [#162555](https://github.com/openclaw/openclaw/issues/162555) [Bug]: /new resets are invisible to plugins - no reset generation/boundary in hook payloads, session-scoped memory documents accumulate across resets
- [#162267](https://github.com/openclaw/openclaw/issues/162267) Terminal sub-agent runs with suspended delivery keep ancestors counted as active for 7 days (maxChildrenPerAgent slot leak)
- [#141260](https://github.com/openclaw/openclaw/issues/141260) [Bug]: failover rate-limit copy drops the provider reset hint - aggregate "All models failed" string exceeds the 300-char guard
- [#162182](https://github.com/openclaw/openclaw/issues/162182) [Bug]: invalid config crashes the Gateway with exit 78 on any hook delivery — failure reporter re-reads the config that just failed
- [#157798](https://github.com/openclaw/openclaw/issues/157798) [Bug]: A value-identical config.apply invalidates every projected session row, stalling sessions.list
- [#162324](https://github.com/openclaw/openclaw/issues/162324) [Bug]: Windows Companion typing feels slower when maximized on a 4K display
- [#162130](https://github.com/openclaw/openclaw/issues/162130) [Bug]: 9.6 to 9.7 Windows update rolls back at Doctor; numeric/bigint lease-directory identities disagree
- [#112285](https://github.com/openclaw/openclaw/issues/112285) [Feature]: Control UI chat: reply to a selected passage instead of the whole message
- [#159861](https://github.com/openclaw/openclaw/issues/159861) Typecheck: media-generate-background-retention.test.ts calls .resolve() with wrong arity
- [#159089](https://github.com/openclaw/openclaw/issues/159089) [Bug]: contextPruning (cache-ttl) never prunes for OpenAI-compatible providers under a custom provider id
- [#161866](https://github.com/openclaw/openclaw/issues/161866) [Bug]: updater inherits TTY stdin but captures output, causing pnpm 12.1.0 terminal error
- [#135085](https://github.com/openclaw/openclaw/issues/135085) [Bug]: active-memory recall-intent patterns missing Portuguese (PT-BR) — default mode=escalate never fires for PT-BR users
- [#156888](https://github.com/openclaw/openclaw/issues/156888) Web Push re-sends "background task failed" for an already-failed subagent task on every gateway restart
- [#161761](https://github.com/openclaw/openclaw/issues/161761) Update failure: reconcile:abandoned (2026.9.6)
- [#161721](https://github.com/openclaw/openclaw/issues/161721) Update failure: reconcile:abandoned (2026.9.7)
- [#161090](https://github.com/openclaw/openclaw/issues/161090) Update failure: reconcile:abandoned (2026.9.6)
- [#162346](https://github.com/openclaw/openclaw/issues/162346) [Bug]: Codex harness exec auto-review gets no conversation transcript, so owner-requested commands are denied
- [#143990](https://github.com/openclaw/openclaw/issues/143990) [Bug]: agents add wizard cannot recreate a deleted agent id when it stores auth
- [#163136](https://github.com/openclaw/openclaw/issues/163136) [Bug]: sessions_spawn runtime "acp" with expectsCompletionMessage:false still wakes the requester session on completion
- [#127617](https://github.com/openclaw/openclaw/issues/127617) Eight models --agent alias/fallback mutations silently write global defaults
- [#163126](https://github.com/openclaw/openclaw/issues/163126) Classic (non-add-on) Google Chat app: webhook always returns 403, no log output
- [#158968](https://github.com/openclaw/openclaw/issues/158968) secrets: rotating a value without --kind converts protected entries to readable env entries
- [#163116](https://github.com/openclaw/openclaw/issues/163116) [Bug]: 2026.9.7 Doctor treats bind-mount aliases as separate SQLite databases and aborts backup
- [#154708](https://github.com/openclaw/openclaw/issues/154708) [Bug]: Provider-qualified model refs can be hijacked by slash-form aliases
- [#161617](https://github.com/openclaw/openclaw/issues/161617) Mobile pairing setup codes omit the configured Control UI base path
- [#159233](https://github.com/openclaw/openclaw/issues/159233) [Bug]: the first image-bearing turn in a fresh gateway process eagerly builds the full media-understanding provider registry, even when native vision skips it entirely
- [#127387](https://github.com/openclaw/openclaw/issues/127387) Agent read-only SQLite opens bypass corruption quarantine
- [#162622](https://github.com/openclaw/openclaw/issues/162622) update cleanup does not see Doctor's *.pre-startup-migration-<id>.bak originals (no native retirement path)
- [#162916](https://github.com/openclaw/openclaw/issues/162916) [Bug]: Session-scoped guests cannot use shared GitHub publication
- [#162582](https://github.com/openclaw/openclaw/issues/162582) [Bug]: `snapshotCache` in `src/agents/shell-snapshot.ts` is never evicted, so it retains one entry per distinct shell-snapshot key for the life of the process
- [#162924](https://github.com/openclaw/openclaw/issues/162924) sessions_send notify requires broad write for an owned guest session
- [#162893](https://github.com/openclaw/openclaw/issues/162893) [Bug]: Gateway trips RSS critical under fleet load before reaching heap cap
- [#115957](https://github.com/openclaw/openclaw/issues/115957) Bug: Cannot copy bot messages in Telegram DM (Copy button missing)
- [#162977](https://github.com/openclaw/openclaw/issues/162977) npm install fails: openclaw 2026.9.6/2026.9.7 pin file-type to unpublished versions (ETARGET)
- [#162900](https://github.com/openclaw/openclaw/issues/162900) [Bug]: Sidebar requests external session catalogs without read authority
- [#162947](https://github.com/openclaw/openclaw/issues/162947) [Bug]: Spoken confirmation still never clears on 2026.9.7: each retry mints a new ID (fixes for #159690 and #162039 are in the build)
- [#162878](https://github.com/openclaw/openclaw/issues/162878) [Docs Bug]: Paused progress cards lack guidance to avoid repeated completion checks
- [#162734](https://github.com/openclaw/openclaw/issues/162734) [Bug]: Post-compaction AGENTS.md excerpts run past a top-level # heading and drop later sections
- [#162895](https://github.com/openclaw/openclaw/issues/162895) [Bug] 2026.9.7 doctor --fix deadlocks during agent DB schema migration (21→24): admission stays permanently closed — "read admission is closed" blockingOwner:"unknown"; staged upgrade via 9.5 does not avoid it
- [#162875](https://github.com/openclaw/openclaw/issues/162875) [Bug]: decision_evaluate always fails in scheduled/CLI-started runs ("Gateway caller authority is no longer active")
- [#162732](https://github.com/openclaw/openclaw/issues/162732) [Bug]: File-based usage footer stops updating after an atomic save
- [#162846](https://github.com/openclaw/openclaw/issues/162846) [Bug]: 026.9.7 doctor --fix loses agent database maintenance lease during plugin session repair (Linux arm64)
- [#162795](https://github.com/openclaw/openclaw/issues/162795) [Bug]: before_agent_finalize revise pass fails with "Session transcript projection is rebuilding" on the primary model; fallback answer ignores the revision (2026.9.5)
- [#162579](https://github.com/openclaw/openclaw/issues/162579) [Bug]: Stalled cron tool-call -> SQLite lock contention -> state.lease fails (busyTimeoutMs=0) -> agent-DB admission closes permanently ("Agent database execution admission is closed")
- [#162762](https://github.com/openclaw/openclaw/issues/162762) cli_budget compaction ignores claude-cli ownsNativeCompaction when model is anthropic/* with agentRuntime claude-cli (falls back to API, auth_failed)
- [#113978](https://github.com/openclaw/openclaw/issues/113978) agentRuntime id replaces the configured provider in session state and user-facing model labels (2026.7.1-2)
- [#160626](https://github.com/openclaw/openclaw/issues/160626) [Bug] `waitForQueueDebounce` never settles after a backward wall-clock step, permanently stalling the follow-up queue
- [#162745](https://github.com/openclaw/openclaw/issues/162745) RFC: keyless Copilot managed web-search provider (tools.web.search.provider: copilot)
- [#162731](https://github.com/openclaw/openclaw/issues/162731) Codex one-shot cleanup rejects a completed run on OpenClaw 2026.9.6
- [#162715](https://github.com/openclaw/openclaw/issues/162715) Gateway heap grows without bound: each model catalog build keeps the previous one alive (createFullModelCatalogAccess)
- [#162708](https://github.com/openclaw/openclaw/issues/162708) Update failure: package-permissions (2026.9.6)
- [#162199](https://github.com/openclaw/openclaw/issues/162199) [Bug]: CLI-only modules are loaded eagerly (before the version fast path and for library imports); import-time side effects and stale deprecation deadline
- [#161891](https://github.com/openclaw/openclaw/issues/161891) [Bug]: 2026.9.7 debug log is ~98% "running event-loop-health" lines (~47 per second)
- [#162438](https://github.com/openclaw/openclaw/issues/162438) [Bug]: Home path shortening corrupts paths when HOME=/ or the home is a prefix of another path
- [#162437](https://github.com/openclaw/openclaw/issues/162437) [Bug]: Root-anchored ignore rules like /build also hide nested skills such as deploy/build
- [#160631](https://github.com/openclaw/openclaw/issues/160631) [Bug] Handler state is registered *after* dispatch starts, so `deferredLaneOccupancy: "release"` never actually releases the lane
- [#162676](https://github.com/openclaw/openclaw/issues/162676) Stale subagent completion retried forever ("owner changed before settlement") stalls gateway
- [#162672](https://github.com/openclaw/openclaw/issues/162672) [Bug] 2026.9.7: database identity checks using birthtimeNs break on Linux kernels without statx (Node reports birthtime == ctime) → Doctor restarts with "Existing shared-state database generation changed"
- [#132780](https://github.com/openclaw/openclaw/issues/132780) Subagent completion announce text-fallback silently drops media attachments (MEDIA: lines stripped, structured media ignored)
- [#158894](https://github.com/openclaw/openclaw/issues/158894) [Bug]: Image generation fails with ChatGPT OAuth when the plan does not offer gpt-6-astra
- [#162647](https://github.com/openclaw/openclaw/issues/162647) Skill Workshop: skill-collection-review job is enabled for agents whose tool policy cannot satisfy the maintenance toolset (permanent failures)
- [#148903](https://github.com/openclaw/openclaw/issues/148903) [Feature]: Query automation run history across jobs from the CLI
- [#150069](https://github.com/openclaw/openclaw/issues/150069) [Feature]: Search automation inventories from the CLI
- [#162628](https://github.com/openclaw/openclaw/issues/162628) Linux 2026.9.5: /tmp/openclaw-plugin-build-* staging dirs never cleaned (317 dirs, 31 GB in ~15h); live plugin runs from a deleted dir
- [#162626](https://github.com/openclaw/openclaw/issues/162626) workboard_dispatch always fails: generated comment exceeds 2000-char limit
- [#162594](https://github.com/openclaw/openclaw/issues/162594) Agent session regression fixtures fail with retained worker readers and hashed claim errors
- [#161999](https://github.com/openclaw/openclaw/issues/161999) [Feature]: Support structured input in Lobster workflows
- [#160749](https://github.com/openclaw/openclaw/issues/160749) [Bug]: message tool posts at the Slack channel root from a thread turn on CLI runtimes (claude-cli)
- [#121583](https://github.com/openclaw/openclaw/issues/121583) Add support for Novita AI DeepSeek v4 Flash (deepseek/deepseek-v4-flash-0731)
- [#114066](https://github.com/openclaw/openclaw/issues/114066) [Bug]: Markdown tables rendered in Telegram replies are unreadable (no column alignment)
- [#162562](https://github.com/openclaw/openclaw/issues/162562) chat.send rejects `__controlUiReconnectResume` "at root" although the 9.7 build has a handler for it — wedges the desktop app on every reconnect (restart required)
- [#162561](https://github.com/openclaw/openclaw/issues/162561) sessions_spawn from a claude-cli parent drops natively-provided coding tools from the child's tool ceiling
- [#160264](https://github.com/openclaw/openclaw/issues/160264) [Bug]: infer model run (modelRun) transient retry sends only the continuation prompt; original prompt lost, run returns ok
- [#158868](https://github.com/openclaw/openclaw/issues/158868) [Bug]: automations tool turns failureAlert null into false, silently disabling cron failure alerts
- [#157532](https://github.com/openclaw/openclaw/issues/157532) [Bug]: Control UI layout flickers when Browser is open in the dock and a chat side panel
- [#162512](https://github.com/openclaw/openclaw/issues/162512) [Feature]: API Route external provider plugin and catalog eligibility
- [#162511](https://github.com/openclaw/openclaw/issues/162511) `openclaw backup create` hangs on the SQLite snapshot of live gateway-held WAL databases
- [#162510](https://github.com/openclaw/openclaw/issues/162510) Windows: 2026.9.7 regression — `sessions.create` always fails with "Session creation publication owner is no longer current"
- [#162471](https://github.com/openclaw/openclaw/issues/162471) [Bug]: 2026.9.7 audio preflight accepts AbortSignal but does not propagate in-flight cancellation
- [#162458](https://github.com/openclaw/openclaw/issues/162458) [Bug]: `spawnedByCache` in `createAgentEventHandler` is never evicted, so it grows one permanent entry per spawned session
- [#162131](https://github.com/openclaw/openclaw/issues/162131) 2026.9.7 update: candidate Gateway startup fails; real error hidden behind first canary progress line (likely inherited owner lease)
- [#162452](https://github.com/openclaw/openclaw/issues/162452) Durable ingress can be committed after watchdog abort before agent adoption (2026.9.2)
- [#161978](https://github.com/openclaw/openclaw/issues/161978) doctor --fix "update gateway service config" writes gateway.auth.token into openclaw.json in PLAINTEXT, duplicating the secret-store entry
- [#162447](https://github.com/openclaw/openclaw/issues/162447) [Bug]: 2026.8.x WhatsApp outbound rendering inserts a blank line before bullet lists and substitutes the bullet glyph (breaks receipt-bound verification)
- [#161867](https://github.com/openclaw/openclaw/issues/161867) [Bug]: update progress polling repeatedly creates synchronous full SQLite snapshots and blocks preparation
- [#161979](https://github.com/openclaw/openclaw/issues/161979) 2026.9.7: session-repair overflows the stack (RangeError) on large-but-healthy agent DBs during update activation
- [#162415](https://github.com/openclaw/openclaw/issues/162415) Stuck-session recovery aborts live claude-cli runs: tool-progress tracking desync (phantom active tool call)
- [#160496](https://github.com/openclaw/openclaw/issues/160496) [Bug]: Visitor list shows invitation input instead of verified GitHub identity
- [#162370](https://github.com/openclaw/openclaw/issues/162370) Distribute daily Android Internal testing builds through Firebase
- [#162373](https://github.com/openclaw/openclaw/issues/162373) Windows-only DataCloneError regression breaks webchat & heartbeat dispatch in 2026.9.7

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 250,618 · **Open issues:** 48,171 · **Last push:** <1h ago

On October 2, 2026, Hermes Agent experienced a routine maintenance day with no new releases or merged pull requests. Notably, several new issues were raised, including #131033, which highlights a failure in the GPT to Claude fallback during sealed reasoning due to skipped recovery steps, and #131055, addressing Linux Desktop's sandbox fallback marker being poisoned by second-instance launches, causing a renderer error. Additional issues identified range from Windows Desktop losing dashboard attachments during HTTP timeouts (#130962) to bugs in the gateway handling of command prompts and session contexts (#131031 and #131051). Overall, the day's activity centered on critical bugs that may impact user experience, with particular attention on the implications of the noted failures.

#### 🐛 New Issues
- [#131033](https://github.com/NousResearch/hermes-agent/issues/131033) Bedrock: agent-loop Converse calls skip #116759's redacted-reasoning recovery, so GPT→Claude fallback fails 3× on sealed reasoning `type/bug` `comp/agent` `provider/bedrock` `P2` 💬3
- [#131055](https://github.com/NousResearch/hermes-agent/issues/131055) Linux Desktop: second-instance launches poison the sandbox fallback marker → sticky --no-sandbox → renderer SIGILL loop (/dev/shm ESRCH) `type/bug` `P2` `sweeper:risk-security-boundary` `comp/desktop` 💬2
- [#130962](https://github.com/NousResearch/hermes-agent/issues/130962) Bug: Windows Desktop loses an attached Dashboard during intermittent HTTP timeouts and superseded recovery attempts `type/bug` `P2` `needs-repro` `comp/desktop` 💬2
- [#130895](https://github.com/NousResearch/hermes-agent/issues/130895) Gateway: the turn after a compaction misses the prompt cache, and the compaction fallback retries the same model `type/perf` `comp/gateway` `P0` `sweeper:risk-caching` 💬2
- [#131051](https://github.com/NousResearch/hermes-agent/issues/131051) bug(gateway): plugin slash command silently swallowed while a turn is in flight `type/bug` `comp/gateway` `comp/plugins` `P3` 💬1
- [#131031](https://github.com/NousResearch/hermes-agent/issues/131031) [Bug]: gateway: an internal wake after /stop, /undo or /model re-renders the session-context prompt and breaks the prefix cache twice (A→B→A) `type/bug` `comp/gateway` `P0` `sweeper:risk-session-state` 💬1
- [#130970](https://github.com/NousResearch/hermes-agent/issues/130970) Plugin hooks for agent close cleanup and background-work status `type/feature` `comp/agent` `comp/gateway` `comp/plugins` 💬1
- [#131096](https://github.com/NousResearch/hermes-agent/issues/131096) [Bug]: A terminal command with a long blank-line run freezes the gateway in dangerous-command detection
- [#131094](https://github.com/NousResearch/hermes-agent/issues/131094) [Bug]: TTS mis-speaks money magnitudes ($5M → '5 dollars metres'), uppercase M as metres, and home-path tildes as 'about'
- [#131093](https://github.com/NousResearch/hermes-agent/issues/131093) [Bug]: Windows 中文用户名下 hermes 命令报「系统找不到指定的路径。」— .cmd 启动器按 UTF-8 无 BOM 写入，被 cmd 以 936 代码页误读
- [#131091](https://github.com/NousResearch/hermes-agent/issues/131091) [Bug]: streaming TTS reads fenced code blocks aloud (CLI, dashboard, gateway, desktop)
- [#131082](https://github.com/NousResearch/hermes-agent/issues/131082) [Bug]: Camofox browser_vision screenshots bypass cache/screenshots (missing in the Docker sandbox, never pruned) `type/bug` `tool/browser` `tool/vision` `backend/docker`
- [#131084](https://github.com/NousResearch/hermes-agent/issues/131084) [Bug]: cron report whose heading reads 'No reply:' (or ends on '- Silent') is suppressed as the silence marker `type/bug` `comp/gateway` `comp/cron` `P2`
- [#131089](https://github.com/NousResearch/hermes-agent/issues/131089) [Bug]: Startup auto-resume skips restored relay-backed Discord sessions through the direct adapter selector
- [#131070](https://github.com/NousResearch/hermes-agent/issues/131070) [Bug]: When using Hermes Desktop, selecting content in the workspace and right clicking will not result in menus such as copy, cut, paste, etc `type/bug` `P3` `comp/desktop` `platform/windows`
- [#131075](https://github.com/NousResearch/hermes-agent/issues/131075) [Bug]: `sessions export` silently skips pinned/archived sessions while `sessions prune --include-archived` deletes them — export→prune loses data with no warning `type/bug` `comp/cli` `P1` `sweeper:risk-session-state`
- [#131053](https://github.com/NousResearch/hermes-agent/issues/131053) computer_use fails with 'cua-driver session setup failed: fileno' when sys.stderr is replaced `type/bug` `comp/tools` `tool/mcp` `P2`
- [#131059](https://github.com/NousResearch/hermes-agent/issues/131059) [Bug]: opt-in shared-metrics telemetry emits no user-presence signals for CLI/TUI sessions while the desktop surface carries a full envelope — a human operator is indistinguishable from an agent loop `type/feature` `comp/cli` `comp/tui` `P3`
- [#131038](https://github.com/NousResearch/hermes-agent/issues/131038) [Feature]: settings lock should also govern runtime approval bypass (session/process YOLO) `type/feature` `comp/cli` `comp/gateway` `comp/tools`
- [#131023](https://github.com/NousResearch/hermes-agent/issues/131023) [Bug]: gateway: a /queue follow-up in the default busy mode is thrown away when a restart or stop drain ends the running turn `type/bug` `comp/gateway` `P2` `sweeper:risk-message-delivery`
- [#131026](https://github.com/NousResearch/hermes-agent/issues/131026) [Bug, comp/desktop]: startup source check seeds SOUL.md and skills/ into the local ~/.hermes even when the primary connection is remote (SSH) `type/bug` `comp/cli` `area/config` `P2`
- [#131016](https://github.com/NousResearch/hermes-agent/issues/131016) [Bug]: auxiliary custom-endpoint API keys are written in plaintext to config.yaml (hermes model aux picker and dashboard) `type/security` `comp/cli` `area/config` `P3`
- [#131019](https://github.com/NousResearch/hermes-agent/issues/131019) [Bug]: resume erases a killed turn's side-effecting tool call, so the model can repeat it (the UNKNOWN-effect recovery never runs) `type/bug` `comp/agent` `P2` `sweeper:risk-session-state`

#### 🔒 Closed Issues
- [#55377](https://github.com/NousResearch/hermes-agent/issues/55377) SMS standalone send crashes with NameError: re is used in _strip_markdown_for_sms but never imported
- [#61990](https://github.com/NousResearch/hermes-agent/issues/61990) [Bug]: No way to override email delivery truncation
- [#19689](https://github.com/NousResearch/hermes-agent/issues/19689) WeCom outbound markdown silently truncates long Hermes responses at 4000 characters
- [#107443](https://github.com/NousResearch/hermes-agent/issues/107443) [Bug]: both WeCom adapters silently truncate oversized outbound messages (AI Bot markdown at 4000 chars, callback text at 2048) — content past the limit is dropped with no error
- [#129587](https://github.com/NousResearch/hermes-agent/issues/129587) [Bug]: Acked cron timeout incident re-alerts every run because idle seconds vary
- [#62751](https://github.com/NousResearch/hermes-agent/issues/62751) Bug: SmsAdapter doesn't declare splits_long_messages, so cron/agent output over 4000 chars gets hard-truncated instead of chunked

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,041 · **Open issues:** 8,472 · **Last push:** <1h ago

On October 2, 2026, vLLM saw no new releases but several important merged pull requests contributed to ongoing enhancements and bug fixes. Notably, #58932 addressed a macOS build issue related to Apple Clang < 17, while #57693 improved the frontend by allowing Anthropic tool addition and removal content blocks. Considerable focus was also placed on performance optimizations, with #58874 adding KV-fetch stage gauges for async KV loads and #58330 enhancing caching strategies. Among new issues, #59665 proposed fast-tracking merging for Model Optimization PRs, highlighting the community's interest in accelerating development efficiency.

#### ✅ Merged PRs
- [#58932](https://github.com/vllm-project/vllm/pull/58932) [Bugfix][CPU] Fix macOS build on Apple Clang < 17: structured binding…
- [#59622](https://github.com/vllm-project/vllm/pull/59622) [TEST][CI] Fix serve rlhf tests subprocess import errors
- [#59556](https://github.com/vllm-project/vllm/pull/59556) [CI][XPU] Skip CUDA-IPC weight sync metrics test on Intel
- [#58874](https://github.com/vllm-project/vllm/pull/58874) [Metrics][P/D] Add KV-fetch stage gauges for async KV loads
- [#54805](https://github.com/vllm-project/vllm/pull/54805) [ROCm][BugFix] Revert AITER PA gluon decode from ROCM_AITER_FA
- [#59710](https://github.com/vllm-project/vllm/pull/59710) [ci] Update mergify to rebase if behind by 100 commits
- [#57693](https://github.com/vllm-project/vllm/pull/57693) [Bugfix][Frontend] Accept Anthropic tool_addition and tool_removal content blocks
- [#59700](https://github.com/vllm-project/vllm/pull/59700) [Bugfix][CI] Widen DBO+DP+EP GSM8K accuracy margin on ROCm
- [#49821](https://github.com/vllm-project/vllm/pull/49821) [Bugfix][CLI] Include inherited field docstrings in get_attr_docs
- [#59666](https://github.com/vllm-project/vllm/pull/59666) [ROCm][CI] Raise the MI355 DeepSeek-R1 GSM8K startup wait to 1800s
- [#59321](https://github.com/vllm-project/vllm/pull/59321) [Frontend] Port Step-3.5 parsers to the streaming parser engine
- [#57930](https://github.com/vllm-project/vllm/pull/57930) [Perf][HiSparse] Avoid repeated prefix scans and residency updates
- [#59300](https://github.com/vllm-project/vllm/pull/59300) [Attention][MiniMax-M3] NVFP4 KV cache on the MSA sparse attention path
- [#58875](https://github.com/vllm-project/vllm/pull/58875) [KVConnector][NIXL] Count completion notifications that arrive after KV expiry
- [#59652](https://github.com/vllm-project/vllm/pull/59652) [Bugfix][Responses] Use standard reasoning content-part events
- [#59593](https://github.com/vllm-project/vllm/pull/59593) [ROCm][CI] Drop two no-GPU AMD mirrors from the CPU test areas
- [#59480](https://github.com/vllm-project/vllm/pull/59480) [Bugfix] Support CuTe DSL 4.8.0 block-scale API
- [#59639](https://github.com/vllm-project/vllm/pull/59639) [Bugfix][Engram] Fix intermittent Triton 3.8 crash in the lookup kernel
- [#59402](https://github.com/vllm-project/vllm/pull/59402) [MyPy] Fix mypy errors in `vllm/model_executor/models/[kK]*`
- [#58769](https://github.com/vllm-project/vllm/pull/58769) [ROCm][Triton] Migrate Kimi-K3 kernels from make_block_ptr to tensor …
- [#59651](https://github.com/vllm-project/vllm/pull/59651) [HiSparse] Suggestion for #59450: keep spec expansion out of core KV cache sizing
- [#54483](https://github.com/vllm-project/vllm/pull/54483) [KV Connector][NIXL] Coalesce host-buffer KV copies across cache groups
- [#40337](https://github.com/vllm-project/vllm/pull/40337) [Perf] Integrate flash-maxsim Triton kernels for late-interaction scoring
- [#59641](https://github.com/vllm-project/vllm/pull/59641) [CI/Build] Add agents auto-label rule
- [#59494](https://github.com/vllm-project/vllm/pull/59494) [Bugfix][HiSparse] Fix a chunked-prefill preemption livelock
- [#57978](https://github.com/vllm-project/vllm/pull/57978) [ROCm][Perf] Parallelise AITER MLA page-index expansion over token chunks
- [#59638](https://github.com/vllm-project/vllm/pull/59638) [Agents] Expose PR checklist skill to Claude
- [#59454](https://github.com/vllm-project/vllm/pull/59454) [Bugfix][ROCm] Use a zero default for masked scales in the MXFP8 GEMM
- [#59555](https://github.com/vllm-project/vllm/pull/59555) [Bugfix][Frontend] Check reused prompt token ids against the vocab before streaming
- [#53020](https://github.com/vllm-project/vllm/pull/53020) [Bugfix] Tie lm_head.weight for Nemotron Parse when checkpoint omits it
- [#59536](https://github.com/vllm-project/vllm/pull/59536) [Bugfix][MRV2] Keep GDN prefill checkpoint metadata local to each cache group
- [#59595](https://github.com/vllm-project/vllm/pull/59595) [ROCm][CI] Drop four no-GPU CPU groups from the legacy AMD pipeline
- [#59419](https://github.com/vllm-project/vllm/pull/59419) [Bugfix][Frontend] Strip `x-anthropic-billing-header` billing header from `/v1/chatcompletions`
- [#59247](https://github.com/vllm-project/vllm/pull/59247) [Rust][Benchmark] Warn when temperature is left to the server default

#### 🐛 New Issues
- [#59665](https://github.com/vllm-project/vllm/issues/59665) [RFC]: Fast-Track Merging for Model Optimization PRs 💬4
- [#59566](https://github.com/vllm-project/vllm/issues/59566) Consolidate speculative decoding correctness and acceptance tests `speculative-decoding` 💬4
- [#59575](https://github.com/vllm-project/vllm/issues/59575) [ROCm][AMD] Qwen3.8-Flash-Next gfx950 / MI355X Performance Optimization `performance` `rocm` `quantization` 💬1
- [#59590](https://github.com/vllm-project/vllm/issues/59590) [Feature]: Logprobs on parsed path streaming `/derender` `feature request` 💬2
- [#59569](https://github.com/vllm-project/vllm/issues/59569) [Bug]: [KV Offload][P2P] Store-job timeout unpins slots under an in-flight transfer, which then reports success 💬1
- [#59647](https://github.com/vllm-project/vllm/issues/59647) [Bug]: Fast Start WeightCacheKey hashes only safetensors headers, so an ipc_cache engine can silently map another checkpoint's weights `bug` 💬1
- [#59640](https://github.com/vllm-project/vllm/issues/59640) [Performance]: Avoid runtime routed_scaling_factor multiply between all-reduce and GEMM (MoE) `performance` `rocm` 💬1
- [#59608](https://github.com/vllm-project/vllm/issues/59608) [Bug]: Structured output skips the `<tool_call>` that implicitly ends reasoning, so GLM-4.7/5.x `required`/named tool calls are lost `structured-output` `tool-calling` `glm` 💬1
- [#59539](https://github.com/vllm-project/vllm/issues/59539) [Bug]: GLM-5.3-Flash (Glm5Next): common non-square images (4032x3024, 3840x2160, A4 at 300 dpi) are refused with "exceeds the pre-allocated encoder cache size 7921" `glm` 💬1
- [#59560](https://github.com/vllm-project/vllm/issues/59560) [ROCm][Perf]: Tune FP8 Gemma4 MLP gate-up and down projs for prefills on gfx942 `feature request` `rocm` 💬1
- [#59534](https://github.com/vllm-project/vllm/issues/59534) [Performance]: FlashAttention backend rebuilds KV-cache views on every call (+~21 µs CPU/layer since #44455) `performance` 💬1
- [#59538](https://github.com/vllm-project/vllm/issues/59538) [RFC]: A Reusable KV Compression Layer for Transfer and Storage `RFC` `quantization`
- [#59708](https://github.com/vllm-project/vllm/issues/59708) [RFC]: Modular and Extensible APIs & Execution Surface for Orchestrator-Driven KV Hint Policies `RFC`
- [#59686](https://github.com/vllm-project/vllm/issues/59686) [Bug]: CUTLASS fp8 MoE corrupts valid tokens when CUDA-graph padding routes are `-1` (wrong `expert_first_token_offset` from `moe_permute`) `bug` `nvidia`
- [#59675](https://github.com/vllm-project/vllm/issues/59675) GitHub API version 2022-11-28 is retired in March 2028 (run_ci_command.py)
- [#59681](https://github.com/vllm-project/vllm/issues/59681) [Bug]: cudagraph_mode=FULL crashes on prefill with FlashInfer sparse MLA on SM100 `bug`
- [#59671](https://github.com/vllm-project/vllm/issues/59671) [Unconfirmed] Qwen2 key bias may degrade int4_per_token_head KV-cache accuracy `bug` `quantization`
- [#59662](https://github.com/vllm-project/vllm/issues/59662) [Feature]: Support DFlash speculative decoding with dual_key_gumbel watermarking `speculative-decoding`
- [#59642](https://github.com/vllm-project/vllm/issues/59642) [Bug]: Qwen3.8-flash-next 0% MTP acceptance rate in disaggregated PD serving `bug` `kv-connector`
- [#59609](https://github.com/vllm-project/vllm/issues/59609) [Bug]: DeepSeek V4/V4.1 with --enable-eplb never loads the redundant expert slots `deepseek` `DSv4`
- [#59607](https://github.com/vllm-project/vllm/issues/59607) [Bug]: Xid 31 MMU fault under load in multi-node Expert-Parallel (EP16) CUDA-graph replay (fused-MoE FP8 reduce_scatterv) — --enforce-eager clean `bug` `quantization`
- [#59606](https://github.com/vllm-project/vllm/issues/59606) [Bug]: --moe-backend b12x on SM121 (DGX Spark): illegal memory access in CUDA-graph capture with padded rows, worker crash on prefill
- [#59605](https://github.com/vllm-project/vllm/issues/59605) [Performance]: Qwen4Exp skinny decode GEMM has no SM12x plans; on GB10 (DGX Spark) BF16 projections fall back to cuBLAS SM80 WMMA kernels
- [#59562](https://github.com/vllm-project/vllm/issues/59562) [Bug]: MiniMax-M3 fails to start with transformers 5.18.0: MiniMaxM3VLVideoProcessor._preprocess() missing 'do_convert_rgb' `minimax`
- [#59576](https://github.com/vllm-project/vllm/issues/59576) [Bug]: Rust vllm-bench ignores usage.prompt_tokens, under-reporting total input tokens `rust`
- [#59551](https://github.com/vllm-project/vllm/issues/59551) [Bug]: Qwen3.6-35B-A3B model with TP 2 and DP 2 returns gibberish output on Intel B70 cards `bug` `intel-gpu` `quantization`
- [#59548](https://github.com/vllm-project/vllm/issues/59548) [Performance]: spec-decode boot-to-boot throughput dispersion on L4 (CV up to 13.92%), resolved in 0.30.0 `performance`
- [#59542](https://github.com/vllm-project/vllm/issues/59542) [RFC]: Opt-in return of the last hidden state at sampled positions, per request (Model Runner V2)

#### 🔒 Closed Issues
- [#44184](https://github.com/vllm-project/vllm/issues/44184) [Bug]: when set kv_cache_dtype to fp8 or fp8_e4m3 causes the d node to crash
- [#57324](https://github.com/vllm-project/vllm/issues/57324) [Bug]: Claude Code tool search: first request of every session rejected with 400 (tool_addition content blocks not accepted by /v1/messages)
- [#51193](https://github.com/vllm-project/vllm/issues/51193) [Parity with CUDA vLLM]: ROCm Mooncake out of the box in prebuilt Docker
- [#49817](https://github.com/vllm-project/vllm/issues/49817) [Bug]: vllm serve --help=Frontend misses docs for inherited fields from BaseFrontendArgs
- [#58135](https://github.com/vllm-project/vllm/issues/58135) [Bug]: `/score` Unicode truncation can exceed per-input token limits
- [#57726](https://github.com/vllm-project/vllm/issues/57726) [Bug]: with a `--reasoning-parser` configured, structured outputs on `/v1/completions` are not enforced, with no warnings
- [#59250](https://github.com/vllm-project/vllm/issues/59250) [Bug]: Kimi-K3 warmup imports Kimi code for every model; startup crashes as non-root / read-only (numba "no locator available")
- [#58886](https://github.com/vllm-project/vllm/issues/58886) [Bug][ROCm]: GPU memory fault in AITER MLA FP8 prefill under async scheduling (race on persistent PS metadata)
- [#58928](https://github.com/vllm-project/vllm/issues/58928) [Installation]: macOS CPU build fails with Apple Clang 16 (structured binding capture under OpenMP in fla.cpp)
- [#59671](https://github.com/vllm-project/vllm/issues/59671) [Unconfirmed] Qwen2 key bias may degrade int4_per_token_head KV-cache accuracy
- [#53019](https://github.com/vllm-project/vllm/issues/53019) [Bug]: NemotronParseForConditionalGeneration does not tie lm_head.weight to decoder.embed_tokens.weight, produces garbage output
- [#59452](https://github.com/vllm-project/vllm/issues/59452) [Doc]: Enabling VLLM Whitespace on small models
- [#59451](https://github.com/vllm-project/vllm/issues/59451) [Doc]: Enabling VLLM Whitespace on small models

### SGLang (`sgl-project/sglang`)

**Stars:** 36,704 · **Open issues:** 5,485 · **Last push:** <1h ago

On October 2, 2026, SGLang released version 0.5.21, highlighting contributions from 227 developers and introducing new models such as DeepSeek-V4.1 and GigaChat 3.5. Notable merged pull requests included significant optimizations like shared-expert fusion enhancements and various unified memory improvements. Among the issues reported, a significant bug was identified in DeepSeek-V4.1 regarding a detector that mishandles greedy name regex, leading to potential drops in call efficacy. Overall, the day showcased substantial advancements in model capabilities and a focus on refining existing functionalities.

#### 🚀 New Releases
- [v0.5.21](https://github.com/sgl-project/sglang/releases/tag/v0.5.21) v0.5.21

#### ✅ Merged PRs
- [#42128](https://github.com/sgl-project/sglang/pull/42128) [Fix][DSV4.1] SWA page size with bounded replay
- [#41533](https://github.com/sgl-project/sglang/pull/41533) [ROCm] Use the fused MLA absorb + RoPE + KV-write kernel for decode-sized forward modes only
- [#42109](https://github.com/sgl-project/sglang/pull/42109) [Docs] GLM-5.2 GB300 NVFP4: add env vars from InferenceX AgentX recipe
- [#42011](https://github.com/sgl-project/sglang/pull/42011) [AMD][V4.1][*/N] Fix shared-expert fusion accuracy and speed up MoE routing on ROCm
- [#41175](https://github.com/sgl-project/sglang/pull/41175) [qwen 3.8 next] Fuse NEXTN verify and draft graph input preparation
- [#40331](https://github.com/sgl-project/sglang/pull/40331) [unified-memory] Name the fused KV translate for what it computes (7/7)
- [#40330](https://github.com/sgl-project/sglang/pull/40330) [unified-memory] Stride the KV translate kernel and route every translate through it (6/7)
- [#40329](https://github.com/sgl-project/sglang/pull/40329) [unified-memory] Remove the kernel-page multiplier plumbing (5/7)
- [#40328](https://github.com/sgl-project/sglang/pull/40328) [unified-memory] Mark the write loc physical and check it at every write door (4/7)
- [#38592](https://github.com/sgl-project/sglang/pull/38592) [unified-memory] Token-major dense views for the unified memory pool (3/7)
- [#40327](https://github.com/sgl-project/sglang/pull/40327) [unified-memory] Build paged KV views through one helper (2/7)
- [#40326](https://github.com/sgl-project/sglang/pull/40326) [unified-memory] Derive KV row addresses from strides, not shapes (1/7)
- [#39388](https://github.com/sgl-project/sglang/pull/39388) [MegaMoE] Preserve W13 layout for ModelOpt NVFP4 experts
- [#39273](https://github.com/sgl-project/sglang/pull/39273) [AMD] [GLM-5.3-Flash] Enable FP8 and MXFP4 serving on gfx950
- [#41668](https://github.com/sgl-project/sglang/pull/41668) [Fix] Select the MXFP4 MoE runner for MiMo-V2 packed experts on SM100
- [#41996](https://github.com/sgl-project/sglang/pull/41996) [sgl-router] Support engines started with --api-key (--worker-api-key)
- [#41974](https://github.com/sgl-project/sglang/pull/41974) [sgl-router] Route to a specific DP rank inside multi-rank workers (--dp-aware)
- [#38187](https://github.com/sgl-project/sglang/pull/38187) [Bugfix] Llama4 local attention: read page ids from the graph tables in CUDA-graph capture/replay (page_size > 1)
- [#39130](https://github.com/sgl-project/sglang/pull/39130) Add triton autotune on the Mamba2 SSD kernels
- [#40648](https://github.com/sgl-project/sglang/pull/40648) fix(nccl): disable graph buffer registration for pausable graph pools
- [#42049](https://github.com/sgl-project/sglang/pull/42049) [Router] Document peer bootstrap: flags, RBAC, downward API, probe implications
- [#31801](https://github.com/sgl-project/sglang/pull/31801) [Bugfix] Fix DeepSeek V4 Pro TP24 vocabulary-padding failure on Hopper
- [#37827](https://github.com/sgl-project/sglang/pull/37827) NIXL: Use stride desc API
- [#41964](https://github.com/sgl-project/sglang/pull/41964) [Rust] Wire the gRPC server into the frontend lifecycle
- [#36406](https://github.com/sgl-project/sglang/pull/36406) Fix Kimi-K3 MLA output gate dispatch on non-CUDA devices
- [#40269](https://github.com/sgl-project/sglang/pull/40269) [Kimi-K3] Guard optimized paths by platform
- [#41528](https://github.com/sgl-project/sglang/pull/41528) [NPU] [Diffusion] Fix NPU multimodal-gen CI
- [#41613](https://github.com/sgl-project/sglang/pull/41613) [sgl-router] Enforce compatible PD version groups
- [#41612](https://github.com/sgl-project/sglang/pull/41612) [sgl-router] Fail fast and cancel decode when prefill fails
- [#41607](https://github.com/sgl-project/sglang/pull/41607) [Disagg] Validate state strides before Mooncake transfers
- [#41981](https://github.com/sgl-project/sglang/pull/41981) [AMD][V4.1][*/N] Greedy dspark draft/accept under SGLANG_SIMULATE_ACC_LEN
- [#41611](https://github.com/sgl-project/sglang/pull/41611) [sgl-router] Allow load-only routing without a tokenizer
- [#42017](https://github.com/sgl-project/sglang/pull/42017) [AMD][V4.1][*/N] OPUS sparse prefill on gfx950 through layout conversion
- [#42014](https://github.com/sgl-project/sglang/pull/42014) [AMD][V4.1][*/N] Build DSpark draft metadata inside the CUDA graph on ROCm
- [#41500](https://github.com/sgl-project/sglang/pull/41500) [CI][NPU][Diffusion] Bump ascend consistency GT to the CANN 9.1.0 baseline
- [#41970](https://github.com/sgl-project/sglang/pull/41970) [AMD][V4.1][*/N] Switch the fp8 dense GEMMs on gfx950 to aiter's MXFP8 GEMM
- [#41947](https://github.com/sgl-project/sglang/pull/41947) [AMD][V4.1][*/N] Route low-ratio indexer and candidate-block top-k through top-k v2
- [#42018](https://github.com/sgl-project/sglang/pull/42018) [Fix] Let the aiter DCP ASM decode test run without aiter
- [#41971](https://github.com/sgl-project/sglang/pull/41971) [AMD][V4.1][*/N] Pick the gfx950 wo_a batched gemm tile by row count
- [#42023](https://github.com/sgl-project/sglang/pull/42023) [AMD] Update aiter version for v41
- [#39721](https://github.com/sgl-project/sglang/pull/39721) [Qwen3.8 CP 1/4] Context parallelism for QSA attention and the sparse indexer
- [#41736](https://github.com/sgl-project/sglang/pull/41736) [DFlash] Keep grouped-conv taps inside each request's block so NaN/Inf cannot leak across requests
- [#41987](https://github.com/sgl-project/sglang/pull/41987) [DSA] Stop forcing the per-step CPU seq_lens sync for the k-pool indexer
- [#41337](https://github.com/sgl-project/sglang/pull/41337) [DSV4/DSA] Name the FlashMLA KV format and drop the V4.1 support probe
- [#39788](https://github.com/sgl-project/sglang/pull/39788) [PPU][1/N] CI: Add backend registration and runner preflight
- [#39166](https://github.com/sgl-project/sglang/pull/39166) [AMD][DSV4] feat: enable PD-disagg with fp8 unified_kv on gfx950
- [#41265](https://github.com/sgl-project/sglang/pull/41265) [DCP + L3 2/N] Support MLA DCP with Mooncake HiCache L3
- [#41610](https://github.com/sgl-project/sglang/pull/41610) [sgl-router] Exclude portless prefills and retry bootstrap discovery
- [#42010](https://github.com/sgl-project/sglang/pull/42010) [Router] Drop the snapshot client's redirect-following fallback
- [#41924](https://github.com/sgl-project/sglang/pull/41924) [PD] Fix block scale registration for mixed full/SWA KV dtypes
- [#41459](https://github.com/sgl-project/sglang/pull/41459) [KDA+Kimi K3] Speed up LTX-2.3 QK norm and split RoPE on H200
- [#41163](https://github.com/sgl-project/sglang/pull/41163) [DSV4] Reserve the FULL logical page in the c4 indexer pool like its KV pool
- [#41999](https://github.com/sgl-project/sglang/pull/41999) [Router] Harden peer-bootstrap edges: refuse redirects and metric docs
- [#40750](https://github.com/sgl-project/sglang/pull/40750) [AMD] AITER MLA DCP decode ASM path (opt-in)
- [#38991](https://github.com/sgl-project/sglang/pull/38991) [Kimi-K3][DCP][DSpark] fix eager mode nonetype crash due to no extend_prefix_lens
- [#41915](https://github.com/sgl-project/sglang/pull/41915) [XPU] Fix test_qsa_indexer_xpu after defer_expansion change
- [#40913](https://github.com/sgl-project/sglang/pull/40913) Declare HiCache host pools for DSA indexer
- [#40471](https://github.com/sgl-project/sglang/pull/40471) fix(dsv4): ship the fp8 unified_kv rope pool through the direct external linker
- [#41346](https://github.com/sgl-project/sglang/pull/41346) [HiSparse] fix: return HiSparse slots on PD decode waiting abort and DeepSeek V4 free

#### 🐛 New Issues
- [#42085](https://github.com/sgl-project/sglang/issues/42085) [Bug] `--bf16-gemm-backend gemv` is accepted but unquantized linear layers never use it 💬3
- [#42138](https://github.com/sgl-project/sglang/issues/42138) [Bug] deepseekv31 detector (streaming): greedy name regex drops a call and attaches the next call's arguments to it 💬1
- [#42110](https://github.com/sgl-project/sglang/issues/42110) [Bug] [Responses API] Replayed Codex turn is split into three assistant blocks (phase check in _merge_consecutive_assistant_messages), so the model learns to end its turn before the tool call 💬1
- [#42112](https://github.com/sgl-project/sglang/issues/42112) [Feature] Use the shared fused Triton decode-metadata kernel in the intel_xpu attention backend 💬1
- [#42012](https://github.com/sgl-project/sglang/issues/42012) [Bug] GLM-5.3-Flash on SM120: fa4 attention backend crashes at CUDA-graph capture (hybrid extend reshape) — triton is the only working backend 💬1
- [#42170](https://github.com/sgl-project/sglang/issues/42170) [Roadmap] DeepSeek V4.1 Optimization
- [#42162](https://github.com/sgl-project/sglang/issues/42162) [Bug] MiMo-V2.6 crashes on SM90 (H200) with automatic MoE runner selection: packed MXFP4 experts reach the Triton FP8 runner
- [#42153](https://github.com/sgl-project/sglang/issues/42153) [Bug][MLX] min_new_tokens allows early EOS and stop-token termination
- [#42146](https://github.com/sgl-project/sglang/issues/42146) [Bug] DeepSeek-V4 on SM120: the default SGLANG_FP8_PAGED_MQA_LOGITS_TORCH=True also turns off the C4 indexer's row-chunk planner (+3.3–3.8 GiB at 128k)
- [#42144](https://github.com/sgl-project/sglang/issues/42144) [Bug] XGrammarGrammarBackend._sanitize_structural_format` skips `optional`, `star`, `plus`, `repeat`, `dispatch`, `token_dispatch` and `token_triggered_tags`, so a `null` `json_schema` inside them is rejected
- [#42143](https://github.com/sgl-project/sglang/issues/42143) [Bug] HarmonyParser streaming: arguments of a tool call on the analysis channel are emitted as reasoning
- [#42142](https://github.com/sgl-project/sglang/issues/42142) [Bug] `get_hf_text_config` raises AttributeError when `thinker_config` holds a dict `text_config`
- [#42141](https://github.com/sgl-project/sglang/issues/42141) [Bug] Ollama streaming endpoints mangle the output when `--incremental-streaming-output` is on
- [#42140](https://github.com/sgl-project/sglang/issues/42140) [Bug] trinity detector removes `<think>` / `</think>` from inside tool-call arguments
- [#42139](https://github.com/sgl-project/sglang/issues/42139) [Bug] hunyuan detector (streaming): control characters in string arguments produce invalid, corrupted JSON
- [#42137](https://github.com/sgl-project/sglang/issues/42137) [Bug] deepseekv31 detector (streaming): greedy name regex drops a call and attaches the next call's arguments to it
- [#42136](https://github.com/sgl-project/sglang/issues/42136) [Bug] deepseekv31 detector (streaming) drops the text that shares a delta with the start of a tool call
- [#42135](https://github.com/sgl-project/sglang/issues/42135) [Bug] cohere_command4 detector (streaming) drops the tool call when text and the whole action block arrive in one chunk
- [#42134](https://github.com/sgl-project/sglang/issues/42134) [Bug] ChatCompletionRequest.set_json_schema mutates the caller's response_format schema (reused schemas change behaviour)
- [#42133](https://github.com/sgl-project/sglang/issues/42133) [Bug] Glm4MoeDetector changes string-typed argument values that look like JSON ("true" → "True", "1.50" → "1.5")
- [#42132](https://github.com/sgl-project/sglang/issues/42132) [Bug] Glm4MoeDetector streaming emits invalid JSON when a non-string parameter's value is not valid JSON
- [#42131](https://github.com/sgl-project/sglang/issues/42131) [Bug] DeepSeekV31Detector.structure_info() omits `<｜tool▁calls▁begin｜>`, so its own detect_and_parse returns no tool call
- [#42024](https://github.com/sgl-project/sglang/issues/42024) Benchmark: Qwen3.8-27B FP8 on H200 with bfloat16 SSM state (24 speed rows, 4 full GSM8K scores)
- [#42074](https://github.com/sgl-project/sglang/issues/42074) [Bug] DeepSeek-V4-Pro decode ~5% slower at concurrency 1 on GB300 after #39704
- [#42073](https://github.com/sgl-project/sglang/issues/42073) [Bug] `/send_weights_to_remote_instance` for a group that was never created kills the server (should return 400)
- [#42071](https://github.com/sgl-project/sglang/issues/42071) [Bug] The three *_expert_distribution_record routes kill the server on any engine started without --expert-distribution-recorder-mode
- [#42070](https://github.com/sgl-project/sglang/issues/42070) [Bug] HiCacheFile scans the whole store directory on every existence check, so the scheduler stalls as the store grows
- [#42068](https://github.com/sgl-project/sglang/issues/42068) [Bug] `/hicache/storage-backend/clear` returns "Hierarchical cache storage backend cleared." with a 400 when it did not clear anything
- [#42063](https://github.com/sgl-project/sglang/issues/42063) [Feature] Share Ruff lint configuration with editors
- [#42052](https://github.com/sgl-project/sglang/issues/42052) [Feature] Native GPT-Neo support
- [#42000](https://github.com/sgl-project/sglang/issues/42000) [Bug] Serving benchmark includes unmeasured zero TTFTs in latency statistics
- [#41995](https://github.com/sgl-project/sglang/issues/41995) [Bug] Security Report

#### 🔒 Closed Issues
- [#33033](https://github.com/sgl-project/sglang/issues/33033) [Bug] Gemma4 prefill materializes a quadratic dense image-attention mask
- [#41569](https://github.com/sgl-project/sglang/issues/41569) [Bug] MiMo-V2 selects the FP8 MoE runner for packed MXFP4 experts on SM100
- [#33283](https://github.com/sgl-project/sglang/issues/33283) [Bug] sglang hangs before server readiness when launched under Nsight Systems process-tree profiling
- [#42112](https://github.com/sgl-project/sglang/issues/42112) [Feature] Use the shared fused Triton decode-metadata kernel in the intel_xpu attention backend
- [#30165](https://github.com/sgl-project/sglang/issues/30165) SafeUnpickler deny-list bypass leads to Remote Code Execution via /load_lora_adapter_from_tensors

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 130,096 · **Open issues:** 2,524 · **Last push:** <1h ago

On October 2, 2026, llama.cpp released multiple updates, including version b11333, which added bfloat16 support for various operations in WebGPU, and b11332, which fixed an invalid assertion in recurrent memory. Noteworthy merged features included the addition of MTP in Qwen4Exp and enhancements to CUDA for improved compute handling, addressing issues such as the invalid assertion in recurrent memory and adjustments for non-causal model limitations. However, a critical new issue emerged regarding the Vulkan implementation, where it aborts without diagnostics on Qualcomm’s Adreno driver, signaling a need for attention from developers.

#### 🚀 New Releases
- [b11333](https://github.com/ggml-org/llama.cpp/releases/tag/b11333) b11333
- [b11332](https://github.com/ggml-org/llama.cpp/releases/tag/b11332) b11332
- [b11331](https://github.com/ggml-org/llama.cpp/releases/tag/b11331) b11331
- [b11330](https://github.com/ggml-org/llama.cpp/releases/tag/b11330) b11330
- [b11327](https://github.com/ggml-org/llama.cpp/releases/tag/b11327) b11327
- [b11326](https://github.com/ggml-org/llama.cpp/releases/tag/b11326) b11326
- [b11325](https://github.com/ggml-org/llama.cpp/releases/tag/b11325) b11325
- [b11324](https://github.com/ggml-org/llama.cpp/releases/tag/b11324) b11324
- [b11323](https://github.com/ggml-org/llama.cpp/releases/tag/b11323) b11323
- [b11322](https://github.com/ggml-org/llama.cpp/releases/tag/b11322) b11322

#### ✅ Merged PRs
- [#29819](https://github.com/ggml-org/llama.cpp/pull/29819) qwen4exp: fix tests
- [#29761](https://github.com/ggml-org/llama.cpp/pull/29761) Qwen4Exp: add MTP
- [#29717](https://github.com/ggml-org/llama.cpp/pull/29717) hexagon: add q2_k and q3_k quant type support
- [#29751](https://github.com/ggml-org/llama.cpp/pull/29751) llama: fix qwen4exp
- [#29803](https://github.com/ggml-org/llama.cpp/pull/29803) CUDA: fix 2 broken Volta FA cases
- [#29074](https://github.com/ggml-org/llama.cpp/pull/29074) llama: refer to segment documentation [no ci]
- [#29816](https://github.com/ggml-org/llama.cpp/pull/29816) common,rpc : fix cache dir creation through symlinks on buggy libstdc++
- [#29812](https://github.com/ggml-org/llama.cpp/pull/29812) ci: fix Fusion / metal by updating the qwen4exp baseline (MTL.csv)
- [#29808](https://github.com/ggml-org/llama.cpp/pull/29808) skill: note about model-specific CLI arguments + testings
- [#29805](https://github.com/ggml-org/llama.cpp/pull/29805) llama : clamp kpool re-pool bound to existing pools
- [#29685](https://github.com/ggml-org/llama.cpp/pull/29685) hexagon: shared strided DMA copy for CPY and CONCAT, any-dim CONCAT via DMA
- [#29060](https://github.com/ggml-org/llama.cpp/pull/29060) Update embeddings server: return HTTP 400 for invalid embedding requests
- [#29802](https://github.com/ggml-org/llama.cpp/pull/29802) convert : write Gemma embedding scale for DFlash drafts
- [#29773](https://github.com/ggml-org/llama.cpp/pull/29773) mtmd: cap max_image to ubatch for non_causal models
- [#29753](https://github.com/ggml-org/llama.cpp/pull/29753) cuda : route sm70 to the Turing MMVQ nwarps table
- [#29777](https://github.com/ggml-org/llama.cpp/pull/29777) metal : release temporary private transfer buffers
- [#29173](https://github.com/ggml-org/llama.cpp/pull/29173) CUDA: Handle compute type for NVFP4 on cublass path
- [#29358](https://github.com/ggml-org/llama.cpp/pull/29358) webgpu: add bfloat16 support for MUL_MAT/MUL_MAT_ID/GET_ROWS
- [#29799](https://github.com/ggml-org/llama.cpp/pull/29799) llama : fix invalid assert in recurrent memory
- [#29792](https://github.com/ggml-org/llama.cpp/pull/29792) CUDA: Make CCCL configurable + pin it to 3.4.3 for CI jobs
- [#29793](https://github.com/ggml-org/llama.cpp/pull/29793) meta: clear inactive AllReduce shards with FILL, not SCALE
- [#29776](https://github.com/ggml-org/llama.cpp/pull/29776) jinja : skip copying loop scope unless a loop filter needs it
- [#29749](https://github.com/ggml-org/llama.cpp/pull/29749) Avoid a second full-size copy of each tensor with direct-io
- [#29572](https://github.com/ggml-org/llama.cpp/pull/29572) HIP: avoid treating CDNA as dgx spark for gqa_ratio 20 in fattn_mma dqk 576
- [#28229](https://github.com/ggml-org/llama.cpp/pull/28229) bench : fix verbosity filter to show GGML_LOG_ERROR (#28107)
- [#29785](https://github.com/ggml-org/llama.cpp/pull/29785) hexagon: fix race condition in workqueue
- [#29640](https://github.com/ggml-org/llama.cpp/pull/29640) BLAS : Document AOCL-BLAS build and label the device AOCL-BLAS
- [#29681](https://github.com/ggml-org/llama.cpp/pull/29681) chat : add LLM-jp-4.1 parser
- [#29698](https://github.com/ggml-org/llama.cpp/pull/29698) opencl: mark vec subgroup bcast as supproted by Adreno E17 compiler
- [#29734](https://github.com/ggml-org/llama.cpp/pull/29734) vocab : honor BOS/EOS settings for PLaMo-2 and PLaMo-3
- [#29770](https://github.com/ggml-org/llama.cpp/pull/29770) metal : use bf16 math for mxfp4 mul-mat
- [#29464](https://github.com/ggml-org/llama.cpp/pull/29464) OoD documentation for llama-bench
- [#29666](https://github.com/ggml-org/llama.cpp/pull/29666) docs: refresh CPU backend support matrix (11 ops missing from CSV)
- [#28569](https://github.com/ggml-org/llama.cpp/pull/28569) model : re-enable -sm tensor for qwen4exp
- [#29750](https://github.com/ggml-org/llama.cpp/pull/29750) webgpu: fix SSM_SCAN binding aliasing

#### 🐛 New Issues
- [#29786](https://github.com/ggml-org/llama.cpp/issues/29786) Vulkan: aborts with no diagnostic on the Qualcomm Adreno driver (works on Turnip, same binary, same args) 💬6
- [#29783](https://github.com/ggml-org/llama.cpp/issues/29783) CUDA: Qwen3.5-122B-A10B (Gated DeltaNet) crashes at first request on sm_70 - no prefill progress, instant kernel-launch rejection `bug-unconfirmed` 💬5
- [#29811](https://github.com/ggml-org/llama.cpp/issues/29811) Eval bug: Assert at startup when running Qwen 3.8 flash with MTP `bug-unconfirmed` 💬2
- [#29782](https://github.com/ggml-org/llama.cpp/issues/29782) Misc. bug: CPU thread default undercounts cores on Apple chips with Super + Performance clusters `bug-unconfirmed` 💬1
- [#29830](https://github.com/ggml-org/llama.cpp/issues/29830) Eval bug: llama-server recurrent state not cleared when it holds NaN, garbling future requests `bug-unconfirmed`
- [#29829](https://github.com/ggml-org/llama.cpp/issues/29829) Feature Request: pipeline parallel encoding on single GPU `enhancement`
- [#29826](https://github.com/ggml-org/llama.cpp/issues/29826) Feature Request: CUDA: reduce VRAM usage of FA convert buffer for quantized KV caches `enhancement`
- [#29821](https://github.com/ggml-org/llama.cpp/issues/29821) vulkan: MUL_MAT_ID loses rows when an expert id appears more than once in a token's row and n > 8
- [#29820](https://github.com/ggml-org/llama.cpp/issues/29820) Feature Request: ROCm/HIP patch yields up to +44% t/s for Radeon AI PRO R9700 (gfx1201) `enhancement`
- [#29815](https://github.com/ggml-org/llama.cpp/issues/29815) Misc. bug: TOCTOU race in router mode worker port selection `bug-unconfirmed`
- [#29804](https://github.com/ggml-org/llama.cpp/issues/29804) Misc. bug: imatrix assertion failure in make_qkx3_quants `bug-unconfirmed`
- [#29798](https://github.com/ggml-org/llama.cpp/issues/29798) Eval bug: OpenCL set_tensor drops writes to q8_0 views, so restoring a sequence state with a q8_0 KV cache yields an empty cache
- [#29780](https://github.com/ggml-org/llama.cpp/issues/29780) [Bug]: Granite4 Vision mmproj with downsample_window_side=0 crashes at load (integer division by zero in warmup graph build) [refile of #27222]

#### 🔒 Closed Issues
- [#24712](https://github.com/ggml-org/llama.cpp/issues/24712) Eval bug: Warning Message - sched_reserve: layer 0 is assigned to device CPU but the fused Gated Delta Net tensor is assigned to device CUDA0 (usually due to missing support)
- [#24492](https://github.com/ggml-org/llama.cpp/issues/24492) Eval bug: Gemma 4 31B MTP (draft-mtp) crashes on Vulkan backend, pre-allocated tensor cannot run operation NONE
- [#25570](https://github.com/ggml-org/llama.cpp/issues/25570) Feature Request: Add an option to terminate idle router workers after --sleep-idle-seconds
- [#26902](https://github.com/ggml-org/llama.cpp/issues/26902) Eval bug: Glimmer Q8_0 on 4 x Tesla T10 tensor split: ggml-backend-meta.cpp:537: GGML_ASSERT(ret.axis != GGML_BACKEND_SPLIT_AXIS_UNKNOWN) failed
- [#26996](https://github.com/ggml-org/llama.cpp/issues/26996) win-rocm-7.14 Windows release missing hipblas.dll — GPU not detected, `--list-devices` returns empty
- [#26163](https://github.com/ggml-org/llama.cpp/issues/26163) Vulkan: AMD flash-attention tuning gated on `maxComputeSharedMemorySize == 65536` is skipped when driver reports 32768 (Vega/gfx90c, Adrenalin 26.5.2) - ~17% slowdown
- [#29759](https://github.com/ggml-org/llama.cpp/issues/29759) Misc. bug: 76a5bc86d1bdfae96feccdc7a41fea535e792e6e breaks symlinked cache dirs for RPC
- [#27279](https://github.com/ggml-org/llama.cpp/issues/27279) server: `response_format.json_schema` under `peg-native` — generation stops mid-object, then `common_chat_peg_parse` throws 500
- [#25713](https://github.com/ggml-org/llama.cpp/issues/25713) Eval bug: MTP decoding crash on pre-Ampere GPUs (with working patch!)
- [#28954](https://github.com/ggml-org/llama.cpp/issues/28954) Eval bug: Regression - Images above ~1.2 Mpx trigger ggml_assert with Gemma4 Models
- [#25318](https://github.com/ggml-org/llama.cpp/issues/25318) Misc. bug: RTX 5070 CUDA drivers crash with MTP
- [#27335](https://github.com/ggml-org/llama.cpp/issues/27335) Eval bug: crash on M2 Ultra for Qwen3.8 27B defaults
- [#27822](https://github.com/ggml-org/llama.cpp/issues/27822) Hybrid CPU/Metal: Metal OOM leads to EXC_BAD_ACCESS in ggml_compute_forward_mul_mat_id instead of a clean failure
- [#29771](https://github.com/ggml-org/llama.cpp/issues/29771) Eval bug: Metal aborts during long generation in ggml_metal_buffer_get_tensor
- [#27326](https://github.com/ggml-org/llama.cpp/issues/27326) Eval bug: WebUI Stop button cannot abort in-flight inference (incl. prefill) when API key auth is enabled
- [#29386](https://github.com/ggml-org/llama.cpp/issues/29386) Misc. bug: server dies under sustained image traffic — ubatch assert at small -ub, silent SIGKILL at large -ub (Gemma 12B QAT + mmproj)
- [#29731](https://github.com/ggml-org/llama.cpp/issues/29731) Misc. bug: add_bos_token / add_eos_token is missing after converting PLaMo-3 models to GGUF

### Ollama (`ollama/ollama`)

**Stars:** 182,027 · **Open issues:** 4,136 · **Last push:** <1h ago

On October 2, 2026, there were no new releases for Ollama. However, three significant pull requests were merged, including a fix for missing build context (#18742), the addition of clef support through llama-server (#18741), and a refinement to the server that now only reports decision capability for decision models (#18737). Notably, a couple of new issues were raised, with one particular highlight being issue #18729, which reports a regression in version 0.35.0 where model pulls bypass the HTTPS_PROXY for Cloudflare R2 downloads. Overall, the day was primarily focused on improving existing functionalities rather than introducing new versions or features.

#### ✅ Merged PRs
- [#18742](https://github.com/ollama/ollama/pull/18742) ci: fix missing build context
- [#18741](https://github.com/ollama/ollama/pull/18741) models: add clef support via llama-server
- [#18737](https://github.com/ollama/ollama/pull/18737) server: report only decision capability for decision models

#### 🐛 New Issues
- [#18728](https://github.com/ollama/ollama/issues/18728) [LLM-jp-4] parser for harmony output with a space after special tokens
- [#18729](https://github.com/ollama/ollama/issues/18729) Ollama 0.35.0 regression: model pulls bypass HTTPS_PROXY for Cloudflare R2 downloads `bug`

#### 🔒 Closed Issues
- [#14118](https://github.com/ollama/ollama/issues/14118) MLX Error
- [#18542](https://github.com/ollama/ollama/issues/18542) typical_p is no longer supported breaks existing clients that cannot omit the parameter
- [#18729](https://github.com/ollama/ollama/issues/18729) Ollama 0.35.0 regression: model pulls bypass HTTPS_PROXY for Cloudflare R2 downloads

### LiteLLM (`BerriAI/litellm`)

**Stars:** 60,013 · **Open issues:** 5,524 · **Last push:** <1h ago

On October 2, 2026, LiteLLM released v1.103.2 and v1.101.4, both of which emphasize the importance of verifying Docker image signatures using cosign for enhanced security. Among the notable merged pull requests, v1.103.2 introduces a feature allowing the `litellm.agent()` function to run various AI models through the AI gateway, while significant UI enhancements focus on improving key activity tracking and managing tracing functionality. Additionally, a critical bug was reported regarding Langfuse pass-through requests incorrectly being logged as LLM generations, highlighting the need for further attention on routing checks. Overall, the day showcased a blend of security upgrades and functional improvements amidst the regular maintenance activities.

#### 🚀 New Releases
- [v1.103.2](https://github.com/BerriAI/litellm/releases/tag/v1.103.2) v1.103.2
- [v1.101.4](https://github.com/BerriAI/litellm/releases/tag/v1.101.4) v1.101.4

#### ✅ Merged PRs
- [#44126](https://github.com/BerriAI/litellm/pull/44126) chore: bump litellm-enterprise 0.1.72 -> 0.1.73, litellm-proxy-extras 0.4.103 -> 0.4.104
- [#44114](https://github.com/BerriAI/litellm/pull/44114) fix(ui): split the KeyActivityPanel condition chains to bring the lint budget back under its ceiling
- [#44116](https://github.com/BerriAI/litellm/pull/44116) fix(ui): label lens trace services as agents
- [#43899](https://github.com/BerriAI/litellm/pull/43899) build(deps): bump oauthlib to 4.0.0 to clear osv-scan
- [#44109](https://github.com/BerriAI/litellm/pull/44109) fix(proxy-extras): bound the lock waits of the partitioned SpendLogs index build
- [#44117](https://github.com/BerriAI/litellm/pull/44117) perf(traces): recalculate ClickHouse TTL info only on retention changes
- [#44071](https://github.com/BerriAI/litellm/pull/44071) refactor(tracing): normalize agent spans in Rust
- [#44104](https://github.com/BerriAI/litellm/pull/44104) feat(rust): embed migration folders with a shared migrate! macro
- [#43969](https://github.com/BerriAI/litellm/pull/43969) fix(providers): keep thinking display updates beta
- [#44105](https://github.com/BerriAI/litellm/pull/44105) chore(cost-map): sync openrouter prices from the models API
- [#44097](https://github.com/BerriAI/litellm/pull/44097) build(docker): drop the no-op PROXY_EXTRAS_SOURCE switch from the non-root image
- [#44089](https://github.com/BerriAI/litellm/pull/44089) feat(lens): simplify setup and investigation workflow
- [#44072](https://github.com/BerriAI/litellm/pull/44072) fix(cost-map): restore later azure Models API retirement dates and date gpt-6.1-sol
- [#44065](https://github.com/BerriAI/litellm/pull/44065) fix(proxy): persist SSO display name as user_alias on login
- [#43409](https://github.com/BerriAI/litellm/pull/43409) feat(ui): usage pages consume bounded daily activity routes instead of storing all keys client-side
- [#43408](https://github.com/BerriAI/litellm/pull/43408) feat(proxy): bounded daily activity routes (aggregated, search, model_top_keys, export, cache_leakage_keys) for all usage entities
- [#43833](https://github.com/BerriAI/litellm/pull/43833) fix(bedrock): add beta for mid-conversation tool changes
- [#43398](https://github.com/BerriAI/litellm/pull/43398) refactor(repositories): daily activity repository with centralized bounded usage queries
- [#43911](https://github.com/BerriAI/litellm/pull/43911) feat(proxy): add LITELLM_DISABLE_LAZY_ROUTES to register optional routers at startup
- [#44082](https://github.com/BerriAI/litellm/pull/44082) test(e2e): keep 1ms-timeout deployments off the provider cache
- [#44090](https://github.com/BerriAI/litellm/pull/44090) feat(ui): add test trace, tracing key and otel endpoints to tracing setup
- [#43885](https://github.com/BerriAI/litellm/pull/43885) feat: add litellm.agent() to run claude code, codex, opencode and deep agents through the ai gateway
- [#43936](https://github.com/BerriAI/litellm/pull/43936) fix(bedrock): accept Converse messages with no content key
- [#43908](https://github.com/BerriAI/litellm/pull/43908) fix(mcp): resolve team-granted toolsets for non-admin keys and dashboard sessions
- [#43948](https://github.com/BerriAI/litellm/pull/43948) fix(proxy-extras): build the SpendLogs indexes in the migration job instead of in migrations
- [#44058](https://github.com/BerriAI/litellm/pull/44058) test(e2e): bill Sail windows that synchronous calls can still use
- [#44073](https://github.com/BerriAI/litellm/pull/44073) test(proxy-extras): run the db push timeout hint test without a database URL
- [#44068](https://github.com/BerriAI/litellm/pull/44068) feat(lens): move traces and setup into Lens
- [#43953](https://github.com/BerriAI/litellm/pull/43953) fix(proxy): enforce key/team vector_stores allowlist on /v1/rag/query
- [#43975](https://github.com/BerriAI/litellm/pull/43975) feat: improve trace ingestion and trace details
- [#44035](https://github.com/BerriAI/litellm/pull/44035) refactor(proxy): inject tracing receiver and access context
- [#44057](https://github.com/BerriAI/litellm/pull/44057) fix(auto-router): show actual and baseline spend for historical savings
- [#44052](https://github.com/BerriAI/litellm/pull/44052) feat(proxy): gzip buffered responses for clients that accept it
- [#43892](https://github.com/BerriAI/litellm/pull/43892) feat(tool-policies): show the user who owns the key that discovered a tool
- [#43907](https://github.com/BerriAI/litellm/pull/43907) fix(cost-map): add perplexity, openrouter, voyage and nebius models and fix registry metadata
- [#44064](https://github.com/BerriAI/litellm/pull/44064) fix(router): keep silent_model out of embedding provider requests
- [#44062](https://github.com/BerriAI/litellm/pull/44062) ci(circleci): test Redis behavior against local Redis and print short tracebacks
- [#43967](https://github.com/BerriAI/litellm/pull/43967) feat(ui): drop the Beta badge from the Cost Optimization nav item
- [#44059](https://github.com/BerriAI/litellm/pull/44059) feat(vertex-ai): add vertex_ai/xai/grok-4.7 pricing
- [#43971](https://github.com/BerriAI/litellm/pull/43971) chore(lint): remove the LIT002 mutable-construction rule
- [#44044](https://github.com/BerriAI/litellm/pull/44044) feat(ui): show daily token totals on the model leaderboard
- [#44055](https://github.com/BerriAI/litellm/pull/44055) docs(proxy): point mcp_server test references at tests/unit/proxy
- [#44056](https://github.com/BerriAI/litellm/pull/44056) chore(deps): drop unused pytest-postgresql dev dependency
- [#44033](https://github.com/BerriAI/litellm/pull/44033) chore(deps): bump pypdf from 6.16.2 to 6.19.0
- [#44054](https://github.com/BerriAI/litellm/pull/44054) fix(proxy): backport #43962 to rc/1.104.0
- [#44018](https://github.com/BerriAI/litellm/pull/44018) test(proxy): delete the legacy proxy test tree and shard tests/unit/proxy by glob
- [#44015](https://github.com/BerriAI/litellm/pull/44015) test(proxy): move middleware, spend_tracking, pass_through, common_utils and root proxy tests into tests/unit/proxy
- [#44012](https://github.com/BerriAI/litellm/pull/44012) test(proxy): move proxy_server, _experimental and db tests into tests/unit/proxy
- [#44006](https://github.com/BerriAI/litellm/pull/44006) test(proxy): move utils, agent_endpoints and endpoint tests into tests/unit/proxy
- [#44034](https://github.com/BerriAI/litellm/pull/44034) refactor(lens)!: rename internal engine code and API
- [#43748](https://github.com/BerriAI/litellm/pull/43748) feat(s3_v2): add s3_partition_granularity option for hourly S3 folders
- [#43972](https://github.com/BerriAI/litellm/pull/43972) feat(ui): agent traces open in a side drawer with a chat-style run view
- [#43983](https://github.com/BerriAI/litellm/pull/43983) test(ci): repair stale tests and flaky CI infrastructure
- [#44003](https://github.com/BerriAI/litellm/pull/44003) test(proxy): move management_endpoints, management_helpers and guardrails tests into tests/unit/proxy
- [#44036](https://github.com/BerriAI/litellm/pull/44036) fix(ui): give model leaderboard a distinct trophy icon
- [#43998](https://github.com/BerriAI/litellm/pull/43998) test(proxy): move auth, hooks, policy_engine and client tests into tests/unit/proxy
- [#43989](https://github.com/BerriAI/litellm/pull/43989) feat(lens): track worker spend through virtual keys
- [#43996](https://github.com/BerriAI/litellm/pull/43996) test(proxy): migrate DB and Redis backed proxy tests into tests/integration
- [#43920](https://github.com/BerriAI/litellm/pull/43920) fix(proxy): preserve decision request bodies under token limits
- [#43832](https://github.com/BerriAI/litellm/pull/43832) fix(bedrock): add beta header for thinking display updates
- [#43361](https://github.com/BerriAI/litellm/pull/43361) test(anthropic): native /v1/messages reasoning integration tests built on a captured Claude Code request
- [#44024](https://github.com/BerriAI/litellm/pull/44024) fix(cost-map): reprice fireworks deepseek v4.1 flash to the 2026-10-01 pricing update
- [#44007](https://github.com/BerriAI/litellm/pull/44007) test: inject the HIBP client and the MCP loop clock so two backend tests stop flaking
- [#43993](https://github.com/BerriAI/litellm/pull/43993) refactor: clean up fresh tech debt from 2026-09-30
- [#43965](https://github.com/BerriAI/litellm/pull/43965) fix(guardrails): scan Responses API input in Azure Text Moderation
- [#43786](https://github.com/BerriAI/litellm/pull/43786) fix(guardrails): scan Responses API input in Azure Prompt Shield
- [#43984](https://github.com/BerriAI/litellm/pull/43984) fix(proxy): backport #43962 to stable/1.103.x
- [#43942](https://github.com/BerriAI/litellm/pull/43942) feat(lens): investigate sampled traces and retain batch results
- [#43962](https://github.com/BerriAI/litellm/pull/43962) fix(proxy): restore pre-config-wins handling of pass-through endpoints
- [#43916](https://github.com/BerriAI/litellm/pull/43916) fix(cost-map): raise baseten DeepSeek-V4.1-Flash max output to 262144
- [#43898](https://github.com/BerriAI/litellm/pull/43898) chore(cost-map): add deprecation date for anthropic claude-sonnet-4-5
- [#43949](https://github.com/BerriAI/litellm/pull/43949) chore(cost-map): add fireworks inkling priority prices from the prices api
- [#43134](https://github.com/BerriAI/litellm/pull/43134) feat(guardrails): honor litellm_params.timeout in every HTTP guardrail
- [#42044](https://github.com/BerriAI/litellm/pull/42044) test(e2e): typed per-test metadata for the e2e suite
- [#43973](https://github.com/BerriAI/litellm/pull/43973) fix(caching): write the response-cache SET to Redis at once instead of on the post-call batch
- [#42949](https://github.com/BerriAI/litellm/pull/42949) feat(ui): filter tags by name and description on the Tag Management page
- [#43872](https://github.com/BerriAI/litellm/pull/43872) feat(providers): add Cortecs as an OpenAI-compatible provider
- [#42393](https://github.com/BerriAI/litellm/pull/42393) feat(e2e): record each e2e test's steps, starting with ProxyClient
- [#43063](https://github.com/BerriAI/litellm/pull/43063) feat(proxy): record in spend logs whether a request used a client-forwarded Anthropic OAuth token
- [#43958](https://github.com/BerriAI/litellm/pull/43958) test(ci): repair stale tests and move retired OpenAI text-completion fixtures

#### 🐛 New Issues
- [#44030](https://github.com/BerriAI/litellm/issues/44030) [Bug]: Langfuse pass-through requests are logged as LLM generations (is_langfuse_route checks target URL path) `bug` 💬1
- [#44032](https://github.com/BerriAI/litellm/issues/44032) [Bug]: Pass-through endpoints never get header-derived spend tags (extra_spend_tag_headers, user-agent) `bug` `llm translation` 💬1
- [#43992](https://github.com/BerriAI/litellm/issues/43992) [Feature]: OTEL v2 integration should export cache token counts as span attributes `llm translation` 💬1
- [#44093](https://github.com/BerriAI/litellm/issues/44093) [Bug]: MCP tool pin ignores annotations and outputSchema, so readOnlyHint can flip to destructive with no drift alert
- [#44069](https://github.com/BerriAI/litellm/issues/44069) [Bug]: websearch_interception agentic loop: follow-up loses its provider prefix on org-style model ids (BadRequestError swallowed into unbounded retry + dangling litellm_web_search call) `llm translation`
- [#44081](https://github.com/BerriAI/litellm/issues/44081) Responses API bridge: `incomplete_details` always null, truncated output reported as `completed`, request sampling params not echoed `llm translation`
- [#44080](https://github.com/BerriAI/litellm/issues/44080) [Feature]: Serve a Codex-native model catalog so Codex CLI can discover service tiers (e.g. /ultrafast) through the proxy `llm translation`
- [#44051](https://github.com/BerriAI/litellm/issues/44051) [Bug]: Vertex partner /v1/messages/count_tokens still drops system and tools (regression of #27113, reproduces on v1.100.0) `llm translation`
- [#44050](https://github.com/BerriAI/litellm/issues/44050) Cooldown deployment lookup fetches cooldown state for every router deployment, not just the current model group
- [#44049](https://github.com/BerriAI/litellm/issues/44049) /health/liveliness doesn't exercise the registry-load locks, so a stuck pod never self-heals
- [#44048](https://github.com/BerriAI/litellm/issues/44048) anyio has no declared floor, leaving litellm exposed to a known lock-waiter-deadlock bug (agronholm/anyio#1145)
- [#44047](https://github.com/BerriAI/litellm/issues/44047) New global registry-load locks (v1.101.0+) have no timeout, unlike the per-request reads they replaced
- [#44041](https://github.com/BerriAI/litellm/issues/44041) [Bug]: Managed Responses WebSocket errors omit status, leaving Codex waiting until timeout `llm translation`
- [#44038](https://github.com/BerriAI/litellm/issues/44038) [Bug]: Azure AI Foundry /v1/messages 400s on new Anthropic params (safeguards, output_config) passed through verbatim `llm translation`
- [#44029](https://github.com/BerriAI/litellm/issues/44029) [Bug]: /v1/messages streaming merges parallel tool_calls from one chunk into a single tool_use block (non-Anthropic providers) `llm translation` `claude code`
- [#44027](https://github.com/BerriAI/litellm/issues/44027) [Bug]: Anthropic pass-through stream with in-band `event: error` is logged as success (OTEL span OK, no failure callbacks) `llm translation`
- [#44025](https://github.com/BerriAI/litellm/issues/44025) [Feature]: Allow user to be deactivated `enhancement`
- [#44022](https://github.com/BerriAI/litellm/issues/44022) Add Azure Data Zone pricing for GPT-6.1 Sol `llm translation`
- [#44008](https://github.com/BerriAI/litellm/issues/44008) [Bug]: Snowflake embedding response transformation crashes with ValidationError on 1D vector responses
- [#44005](https://github.com/BerriAI/litellm/issues/44005) [Feature]: Support Databricks-hosted models with prefix of "system.ai." e.g (system.ai.gpt-5-5) `enhancement` `llm translation`
- [#44002](https://github.com/BerriAI/litellm/issues/44002) [Bug]: Bedrock Invoke route drops `region_name` `llm translation`
- [#43990](https://github.com/BerriAI/litellm/issues/43990) Responses WebSocket closes pre-established connections after a hardcoded 30 seconds `llm translation`
- [#43974](https://github.com/BerriAI/litellm/issues/43974) [Bug]: zai/glm-5.3 /v1/messages and /v1/responses are bridged through Chat Completions instead of native Z.AI endpoints `llm translation`

#### 🔒 Closed Issues
- [#20499](https://github.com/BerriAI/litellm/issues/20499) [Bug]: No invite mails sent on user creation
- [#25322](https://github.com/BerriAI/litellm/issues/25322) [Bug]: Gemini models degenerate in multi-turn tool-calling via /v1/messages — thoughtSignature not propagated from thought parts
- [#31279](https://github.com/BerriAI/litellm/issues/31279) [Bug]: `/v1/messages` adapter replays `thinking_blocks` to OpenAI-compatible backends, causing repetition loops on long tool chains
- [#24965](https://github.com/BerriAI/litellm/issues/24965) [Bug]: previous_models in metadata leaks cross-request data and bloats spend logs
- [#29320](https://github.com/BerriAI/litellm/issues/29320) feat: LLMLingua-2 in-place prompt compaction integration
- [#30729](https://github.com/BerriAI/litellm/issues/30729) [Bug]: OpenAI & Azure moderation guardrails only scan the trailing user turn — system/assistant content is never moderated
- [#30732](https://github.com/BerriAI/litellm/issues/30732) [Bug]: Tool permission/policy guardrails not applied on /v1/responses & /v1/messages routes; blocklist bypassed by name variants
- [#31378](https://github.com/BerriAI/litellm/issues/31378) [Bug]: Custom trace_id not taking effect in Langfuse when using LiteLLM wrapped OpenAI interface
- [#31385](https://github.com/BerriAI/litellm/issues/31385) [Bug]: completion_start_time (TTFT) falls back to end_time for streaming /v1/messages (agentic-hook path) and /v1/responses (always)
- [#31449](https://github.com/BerriAI/litellm/issues/31449) OCI provider: tool requests from coding agents fail — non-function tools hard-raise, complex function schemas rejected by OCI
- [#31475](https://github.com/BerriAI/litellm/issues/31475) [Bug]: bedrock-mantle SigV4 auth uses wrong signing service name ("bedrock" instead of "bedrock-mantle")
- [#41548](https://github.com/BerriAI/litellm/issues/41548) [Bug]: Migration 20260831120001 fails on partitioned "LiteLLM_SpendLogs" table (cannot create index concurrently)
- [#31398](https://github.com/BerriAI/litellm/issues/31398) [Feature]: CC Switch-like UI component to hot-switch active backend deployment for a model group
- [#31455](https://github.com/BerriAI/litellm/issues/31455) er
- [#31459](https://github.com/BerriAI/litellm/issues/31459) [Feature]: Add GLM 5.2 Fast router to Fireworks AI model registry
- [#31468](https://github.com/BerriAI/litellm/issues/31468) [Feature]: Helm Labels
- [#42946](https://github.com/BerriAI/litellm/issues/42946) [Feature]: Contains filters for tag name and description on the Tag Management page

### Unsloth (`unslothai/unsloth`)

**Stars:** 77,121 · **Open issues:** 1,132 · **Last push:** <1h ago

On October 2, 2026, Unsloth released v0.1.902-beta, which introduced a Command Palette for improved navigation and features like shareable run settings and enhanced clarity for error messages in the Desktop UI. This update significantly expedited Laya decision speeds by up to 4.1x and extended hosted Decision API support. Among the merged pull requests, notable enhancements include fixes for the Studio's blur modal titlebar and improvements to the Qwen-Image-2.1 image conditioning process, addressing prior performance issues. However, users reported a significant new bug (#12435), indicating that tool calls are randomly failing due to recent updates, highlighting the ongoing need for stability amidst feature development.

#### 🚀 New Releases
- [v0.1.902-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.902-beta) Command Palette + Desktop UI/UX
- [v0.1.901-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.901-beta) Command Palette + Desktop UI/UX

#### ✅ Merged PRs
- [#12477](https://github.com/unslothai/unsloth/pull/12477) Retry the NVIDIA probe control case past the Linux pwsh redirect race
- [#12446](https://github.com/unslothai/unsloth/pull/12446) Gate the sentence-transformers module types on the routes that delegate the load
- [#12433](https://github.com/unslothai/unsloth/pull/12433) Studio: blur modal titlebar background while keeping window controls sharp
- [#12464](https://github.com/unslothai/unsloth/pull/12464) Studio: stop a reopened chat from saving every replayed event, and let Stop reach it
- [#12359](https://github.com/unslothai/unsloth/pull/12359) Studio: avoid slow cold MIOpen searches on gfx1151
- [#12465](https://github.com/unslothai/unsloth/pull/12465) Studio: keep the app's titlebar chrome off the desktop update screen
- [#12360](https://github.com/unslothai/unsloth/pull/12360) Studio: keep Qwen-Image-2.1 image conditioning finite on ROCm
- [#12444](https://github.com/unslothai/unsloth/pull/12444) Check a sentence-transformers module config on every version, and confirm the resolved class
- [#12454](https://github.com/unslothai/unsloth/pull/12454) Pin the DeepSeek OCR module fetch and import it from that fetch
- [#12463](https://github.com/unslothai/unsloth/pull/12463) Wait for the chat-only export gate instead of counting it as the form appears
- [#12462](https://github.com/unslothai/unsloth/pull/12462) Give the NVIDIA probe control case a budget a loaded runner can meet
- [#12442](https://github.com/unslothai/unsloth/pull/12442) Studio: stop a recovered chat crashing on a duplicate tool call key
- [#12443](https://github.com/unslothai/unsloth/pull/12443) Studio: log a pending embedder download once instead of a traceback on every compaction
- [#10871](https://github.com/unslothai/unsloth/pull/10871) Add approved image attachment inputs for MCP tools
- [#12456](https://github.com/unslothai/unsloth/pull/12456) Record why the permission pill is missing after a reload, and reload once more only if the app never booted
- [#12453](https://github.com/unslothai/unsloth/pull/12453) Read auto_map at every config level in the remote code gate
- [#10870](https://github.com/unslothai/unsloth/pull/10870) fix(studio): include loaded llama extra args in active model baseline
- [#12452](https://github.com/unslothai/unsloth/pull/12452) Read supervision from labels or the mask column in the padding-free filter tests
- [#12447](https://github.com/unslothai/unsloth/pull/12447) Fix the tests left red on main by #12408, #12382 and #12436
- [#7108](https://github.com/unslothai/unsloth/pull/7108) Studio: persist Data Recipes and run history server-side
- [#8049](https://github.com/unslothai/unsloth/pull/8049) Stop enable_padding_free_metadata writing seq_lengths into the caller's examples
- [#12387](https://github.com/unslothai/unsloth/pull/12387) Studio: disclose required assets before media downloads
- [#12437](https://github.com/unslothai/unsloth/pull/12437) Studio: clip a scrolling dialog to the radius it draws, in Firefox only
- [#12441](https://github.com/unslothai/unsloth/pull/12441) Fix three tests red on main after #12431, #12408 and #12382
- [#12440](https://github.com/unslothai/unsloth/pull/12440) Format the desktop contract test to the ruff-format fixed point
- [#10847](https://github.com/unslothai/unsloth/pull/10847) fix(studio): serve desktop SPA on loopback listener
- [#11040](https://github.com/unslothai/unsloth/pull/11040) Count the final EOS token within the raw-text chunk budget
- [#12439](https://github.com/unslothai/unsloth/pull/12439) Bump install.sh / install.ps1 pin to unsloth>=2026.9.14
- [#12091](https://github.com/unslothai/unsloth/pull/12091) feat(studio): complete embedded image recipe and Recipe popover
- [#12436](https://github.com/unslothai/unsloth/pull/12436) Resolve a sentence-transformers modules.json module class through the same trust gate as upstream
- [#12431](https://github.com/unslothai/unsloth/pull/12431) Studio: keep rounded boxes rounded when they scroll
- [#10268](https://github.com/unslothai/unsloth/pull/10268) Collapse the llama.cpp install branch that never branched
- [#10837](https://github.com/unslothai/unsloth/pull/10837) fix(studio): retry custom gateways with max_completion_tokens after max_tokens 400 (#10787)
- [#12434](https://github.com/unslothai/unsloth/pull/12434) Prefetch Tauri NSIS and WebView2 tools before the Windows desktop build
- [#12362](https://github.com/unslothai/unsloth/pull/12362) Keep the GRPO eval batch a multiple of num_generations
- [#8278](https://github.com/unslothai/unsloth/pull/8278) Size the packed attention mask at the padded length, not the token count
- [#9887](https://github.com/unslothai/unsloth/pull/9887) Make the registry's default quant_type usable
- [#10048](https://github.com/unslothai/unsloth/pull/10048) Studio: browse temporary Linux mounts under /media and /mnt
- [#9346](https://github.com/unslothai/unsloth/pull/9346) fix(studio): use resolved public id in embeddings/completions monitor
- [#12432](https://github.com/unslothai/unsloth/pull/12432) Bump install.sh / install.ps1 pins to unsloth>=2026.9.13, unsloth-zoo>=2026.9.9
- [#9301](https://github.com/unslothai/unsloth/pull/9301) Studio: render MCP Apps widgets in the chat thread
- [#11972](https://github.com/unslothai/unsloth/pull/11972) perf(studio): reuse embeddings for identical files in linked folders
- [#10546](https://github.com/unslothai/unsloth/pull/10546) Studio: keep PyTorch mirror leaves out of query tokens
- [#12386](https://github.com/unslothai/unsloth/pull/12386) Unsloth Studio: return the spoken text from /audio/generate instead of a truncated label
- [#11499](https://github.com/unslothai/unsloth/pull/11499) feat(studio): configurable RAG upload extensions via RAG_UPLOAD_EXTS
- [#12426](https://github.com/unslothai/unsloth/pull/12426) Read the desktop New chat button contract token by token
- [#12408](https://github.com/unslothai/unsloth/pull/12408) Studio: Qwen-Image-2.1 placement from measured sizes, int8 under offload on torchao 0.17, balanced fit check
- [#12416](https://github.com/unslothai/unsloth/pull/12416) Studio: explain the all-columns-dropped recipe error in UI terms
- [#12430](https://github.com/unslothai/unsloth/pull/12430) Studio: move Blender MCP setup out of Manage MCP servers into the composer
- [#12428](https://github.com/unslothai/unsloth/pull/12428) Studio: keep the 1024 canvas when auto precision picked the Qwen-Image-2.1 quant
- [#12423](https://github.com/unslothai/unsloth/pull/12423) Studio: keep the sidebar's bottom fade in step with the list
- [#12393](https://github.com/unslothai/unsloth/pull/12393) fix: allow configuring Pi output token limit
- [#12427](https://github.com/unslothai/unsloth/pull/12427) Stop the model selector's format and quant suffix clipping descenders
- [#12380](https://github.com/unslothai/unsloth/pull/12380) Studio: make Compare in Chat load the full fine-tune that just finished
- [#12378](https://github.com/unslothai/unsloth/pull/12378) Studio: keep Word footnotes and endnotes in chats and knowledge bases
- [#12405](https://github.com/unslothai/unsloth/pull/12405) Studio: faster MiniMax-H3 GGUF renders (resident under memory auto, sd.cpp pin upgrade, speed_mode=max kernels)
- [#12425](https://github.com/unslothai/unsloth/pull/12425) Studio: remove the white seam above the chat panel on Windows dark mode
- [#12394](https://github.com/unslothai/unsloth/pull/12394) Keep an explicit HF_HUB_ENABLE_HF_TRANSFER and install hf_transfer in Core CI
- [#12420](https://github.com/unslothai/unsloth/pull/12420) Studio: keep the arrow cursor on a sent prompt's time
- [#12421](https://github.com/unslothai/unsloth/pull/12421) Studio: remove the Projects section setting from Chat settings
- [#12418](https://github.com/unslothai/unsloth/pull/12418) Studio: always show composer attachments as cards, rename sent layouts
- [#12352](https://github.com/unslothai/unsloth/pull/12352) Fix desktop icon clarity with supplied artwork and Tauri resource icons
- [#12346](https://github.com/unslothai/unsloth/pull/12346) Studio: fix PDF previews after a PDF attachment is extracted
- [#8373](https://github.com/unslothai/unsloth/pull/8373) Stop conversation_extension crashing when the caller keeps their columns
- [#12417](https://github.com/unslothai/unsloth/pull/12417) Studio: smaller scroll to bottom button, visible in dark mode, with a setting to hide it
- [#12413](https://github.com/unslothai/unsloth/pull/12413) Studio: warn that a Web share link from a remote Studio exposes its address
- [#12374](https://github.com/unslothai/unsloth/pull/12374) Studio: stop the backend crashing on startup when memory is tight
- [#10878](https://github.com/unslothai/unsloth/pull/10878) Restore full-rank gradients after Q-GaLore updates
- [#12371](https://github.com/unslothai/unsloth/pull/12371) Studio: continue finished replies and resume GGUF reasoning
- [#12390](https://github.com/unslothai/unsloth/pull/12390) fix(studio): keep scoped download progress tied to current files
- [#10742](https://github.com/unslothai/unsloth/pull/10742) Treat {{ and }} in a merged prompt as literal braces
- [#9950](https://github.com/unslothai/unsloth/pull/9950) Keep the MLX adamw_8bit optimizer instead of collapsing it to adamw
- [#12373](https://github.com/unslothai/unsloth/pull/12373) Studio: let the Decision API use TypeSafe, Liquid AI, OpenRouter and other System One servers
- [#12382](https://github.com/unslothai/unsloth/pull/12382) Studio: keep a local model's built-in system prompt when the date setting is on
- [#12412](https://github.com/unslothai/unsloth/pull/12412) Stop the Chat UI persisted-monitor reset from running script in the stale page
- [#12414](https://github.com/unslothai/unsloth/pull/12414) Studio: say Pin in model menus, and drop the border on right-click submenus
- [#12404](https://github.com/unslothai/unsloth/pull/12404) Seed preview: check path-backed image cells against the account's workspace
- [#12411](https://github.com/unslothai/unsloth/pull/12411) Compare Kaggle reference repo ids without case and prefetch the Qwen3 4bit repo under its new spelling
- [#12381](https://github.com/unslothai/unsloth/pull/12381) Studio: fix Base vs LoRA compare for voice messages on fine-tuned Whisper
- [#12379](https://github.com/unslothai/unsloth/pull/12379) Studio: train an uploaded CSV's NA, None and 00501 cells as written
- [#12406](https://github.com/unslothai/unsloth/pull/12406) Only turn on HF_HUB_ENABLE_HF_TRANSFER in synthetic.py when hf_transfer is installed
- [#12400](https://github.com/unslothai/unsloth/pull/12400) Create the SentencePiece scratch directory without a check-then-create race
- [#12399](https://github.com/unslothai/unsloth/pull/12399) Read a sign-flipped SVD basis as the same subspace in the Q-GaLore schedule
- [#12403](https://github.com/unslothai/unsloth/pull/12403) truststore: keep TLS verification on when handshakes overlap on one context
- [#11783](https://github.com/unslothai/unsloth/pull/11783) Remove xFormers built for another torch after Linux repair
- [#12402](https://github.com/unslothai/unsloth/pull/12402) Harden installer source selection, ROCm helper staging and npm scanner cleanup
- [#12376](https://github.com/unslothai/unsloth/pull/12376) Studio: keep <placeholder> and Vec<T> text in chat replies
- [#10150](https://github.com/unslothai/unsloth/pull/10150) studio: make media family overrides structural
- [#11710](https://github.com/unslothai/unsloth/pull/11710) Feat share model run settings through links
- [#12370](https://github.com/unslothai/unsloth/pull/12370) Studio: count companion assets in the Hub download size of image and video GGUFs
- [#12383](https://github.com/unslothai/unsloth/pull/12383) Studio: stop offering Claude sampling settings that are silently ignored
- [#12377](https://github.com/unslothai/unsloth/pull/12377) Studio: keep the answers typed into a PDF form when it is attached to a chat
- [#12375](https://github.com/unslothai/unsloth/pull/12375) Studio: open a skill when its row chevron is clicked
- [#12284](https://github.com/unslothai/unsloth/pull/12284) fix(device_type): flush and fence through the shared device helpers
- [#12355](https://github.com/unslothai/unsloth/pull/12355) Studio: compact context usage ring when the chat header is squeezed
- [#12396](https://github.com/unslothai/unsloth/pull/12396) Studio: keep the model name ahead of its format and quant when the header is tight
- [#12358](https://github.com/unslothai/unsloth/pull/12358) Studio: style canvas notices like toasts

#### 🐛 New Issues
- [#12435](https://github.com/unslothai/unsloth/issues/12435) [Bug] Projects / Code / Tool Calls randomly failing from recent updates. `feature request` `bug` 💬3
- [#12445](https://github.com/unslothai/unsloth/issues/12445) [Unsloth Bug] Studio: Qwen-Image-2.1 GGUF generation fails - 1-D norm weights never dequantized in no-conversion load path (4096 vs 8192) `feature request` `bug` 💬2
- [#12415](https://github.com/unslothai/unsloth/issues/12415) [Bug] Desktop: Hugging Face quant discovery blocks loading On Device models offline 💬2
- [#12468](https://github.com/unslothai/unsloth/issues/12468) [Bug] Tensor split decode up to 2.9x slower since b10715-mix-86bd2d3 possibly "max_cuda_graphs = 64" from #144 (2x RTX 5070 Ti, Windows/WSL2/Linux) 💬1
- [#12469](https://github.com/unslothai/unsloth/issues/12469) Your CI/CD Is Slow. Try This :-) 💬1
- [#12395](https://github.com/unslothai/unsloth/issues/12395) Search Filter in model hub for decision AI `feature request` 💬1
- [#12474](https://github.com/unslothai/unsloth/issues/12474) [Bug] Japanese IME confirmation Enter prematurely saves chat title in sidebar rename dialog `feature request` `bug`
- [#12470](https://github.com/unslothai/unsloth/issues/12470) [Feature] Studio Images: select text encoder / engine when downloading Qwen-Image-2.1 (avoid forced ~17GB dense TE)
- [#12473](https://github.com/unslothai/unsloth/issues/12473) Sandbox nul file breaks tools
- [#12467](https://github.com/unslothai/unsloth/issues/12467) [Bug] Companion-device mask widening (#11823) is skipped when the model has saved gpu_ids, so --mmproj-device CUDA1 is still rejected `feature request` `bug`
- [#12466](https://github.com/unslothai/unsloth/issues/12466) Unsloth Studio backend: Xet health probe stubs out Triton process-wide, breaking diffusers/xformers ("'function' object has no attribute 'fn'")
- [#12419](https://github.com/unslothai/unsloth/issues/12419) [Unsloth Bug] FastSentenceTransformer imports attacker-controlled modules.json "type" via import_from_string (bypasses sentence-transformers trust gate) `feature request` `bug`
- [#12392](https://github.com/unslothai/unsloth/issues/12392) [Unsloth Studio] UNSLOTH_LLAMA_FORCE_COMPILE=1 source build gets an unusable RUNPATH -- fails immediately with "cannot open shared object file"
- [#12391](https://github.com/unslothai/unsloth/issues/12391) unsloth_zoo's torch._grouped_mm support probe segfaults the whole process on ROCm (not a catchable exception)

#### 🔒 Closed Issues
- [#10390](https://github.com/unslothai/unsloth/issues/10390) Constant CPU usage
- [#11385](https://github.com/unslothai/unsloth/issues/11385) [Feature] Make RAG UPLOAD_EXTS configurable via environment variable
- [#11638](https://github.com/unslothai/unsloth/issues/11638) [Bug] AMD: on Windows, Qwen-Image-2.1 downloads the 16 GB text encoder because torchao can't load
- [#11981](https://github.com/unslothai/unsloth/issues/11981) [Feature] Unsloth Studio / Desktop: store the full generation settings in each image and show the workflow in Recipe
- [#10787](https://github.com/unslothai/unsloth/issues/10787) [Bug] Unsupported parameter: 'max_tokens' instead of 'max_completion_tokens'.
- [#12395](https://github.com/unslothai/unsloth/issues/12395) Search Filter in model hub for decision AI
- [#10516](https://github.com/unslothai/unsloth/issues/10516) UNSLOTH_PYTORCH_MIRROR with a query token: eight index URLs still concatenate the leaf into the token
- [#10786](https://github.com/unslothai/unsloth/issues/10786) [Bug] On web browser, UI returns 404 on loopback (127.0.0.1 / localhost) but serves fine on LAN IP
- [#12419](https://github.com/unslothai/unsloth/issues/12419) [Unsloth Bug] FastSentenceTransformer imports attacker-controlled modules.json "type" via import_from_string (bypasses sentence-transformers trust gate)
- [#9818](https://github.com/unslothai/unsloth/issues/9818) [Feature] - Support for Linux's Temporary Mounted Drives
- [#11639](https://github.com/unslothai/unsloth/issues/11639) [Bug] AMD: the Linux installer puts a CUDA build of xFormers on ROCm hosts
- [#8618](https://github.com/unslothai/unsloth/issues/8618) [Feature] [Bug] Allow users to specify family_name overrides for image models and similar through the UI.

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,121 · **Open issues:** 396 · **Last push:** <1h ago

On October 2, 2026, there were no new releases for AIBrix, but several significant pull requests were merged, enhancing the platform's functionality and addressing bugs. Notable feature enhancements included the addition of a new endpoint for elastic endpoint scaling state in the mocked vLLM app (#2869) and improvements in routing vLLM /pooling requests through the gateway (#2778). Bug fixes focused on correcting KPA scaling behavior to consider total load rather than per-pod average (#2884) and ensuring that the ModelAdapter resolves contexts correctly (#2871). Among the newly opened issues, the bug related to the pool policy not dropping activity records for inactive pods (#2883) garnered attention, indicating ongoing challenges in managing model states efficiently.

#### ✅ Merged PRs
- [#2886](https://github.com/vllm-project/aibrix/pull/2886) [Docs] Expand ModelClaim sample validation guide
- [#2769](https://github.com/vllm-project/aibrix/pull/2769) [API] Add ModelWarmup image preloading
- [#2884](https://github.com/vllm-project/aibrix/pull/2884) [Bug] Scale KPA on the total load, not the per-pod mean
- [#2885](https://github.com/vllm-project/aibrix/pull/2885) [Bug] Drop pool policy activity records of pods that stopped reporting
- [#2870](https://github.com/vllm-project/aibrix/pull/2870) [Misc] Run the Kubernetes catalog test against fake clusters
- [#2778](https://github.com/vllm-project/aibrix/pull/2778) [Feat] Route vLLM /pooling requests through the gateway
- [#2871](https://github.com/vllm-project/aibrix/pull/2871) [Bug] Propagate the reconcile context to the ModelAdapter model lookup
- [#2869](https://github.com/vllm-project/aibrix/pull/2869) [Feat] Add elastic EP scaling state endpoints to the mocked vLLM app
- [#2852](https://github.com/vllm-project/aibrix/pull/2852) [Feat] Count generated output in the token_load decode score

#### 🐛 New Issues
- [#2883](https://github.com/vllm-project/aibrix/issues/2883) [Bug][ModelClaim] The pool policy never drops the activity records of pods that are gone `kind/bug` `area/orchestration` 💬2
- [#2882](https://github.com/vllm-project/aibrix/issues/2882) [Feature][ModelClaim] Make room for a new model by putting idle ones to sleep `kind/feature` `area/orchestration` 💬1
- [#2881](https://github.com/vllm-project/aibrix/issues/2881) [Feature][ModelClaim] Let a sleeping model release its memory reservation `kind/feature` `area/orchestration` 💬1
- [#2880](https://github.com/vllm-project/aibrix/issues/2880) [Feature][ModelClaim] Wake a sleeping model through the controller, and move one that cannot wake `kind/feature` `area/orchestration` 💬1
- [#2879](https://github.com/vllm-project/aibrix/issues/2879) [Bug] KPA treats the per-pod mean as a total, so its replica count ignores the pod count `kind/bug` `area/orchestration` 💬1
- [#2876](https://github.com/vllm-project/aibrix/issues/2876) [Bug] Prefix cache delta sync drops blocks that change during a push `kind/bug` `area/gateway` `area/website` 💬1
- [#2874](https://github.com/vllm-project/aibrix/issues/2874) [Bug] ModelAdapter ignores matchExpressions in podSelector `kind/bug` `area/orchestration` 💬1
- [#2867](https://github.com/vllm-project/aibrix/issues/2867) [RFC]: Share the token_load decode ledger across gateway replicas `area/gateway` `kind/feature` `area/website` 💬1

#### 🔒 Closed Issues
- [#2883](https://github.com/vllm-project/aibrix/issues/2883) [Bug][ModelClaim] The pool policy never drops the activity records of pods that are gone
- [#2849](https://github.com/vllm-project/aibrix/issues/2849) [RFC]: Account for generated output in the token_load decode policy

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,996 · **Open issues:** 607 · **Last push:** <1h ago

On October 2, 2026, there were no new releases for Semantic Router, but several important pull requests were merged. Notably, PR #4438 addresses a bug that caused commands to exit with a zero status when interrupted by Ctrl-C, while PR #4409 fixes an issue with Router transport errors being exposed in Knowledge Bases responses. Additionally, PR #4000 enhances the system by enabling the parallelization of independent model artifact fingerprinting, improving efficiency. The day also saw the introduction of new issues, including #4437, which reports that vllm-sr commands improperly exit with a zero status when interrupted, highlighting a recurring concern in command handling.

#### ✅ Merged PRs
- [#4438](https://github.com/vllm-project/semantic-router/pull/4438) [Bug] Exit non-zero when Ctrl-C interrupts a vllm-sr command
- [#4082](https://github.com/vllm-project/semantic-router/pull/4082) [Research] Make agent task benchmark protocol-correct
- [#4000](https://github.com/vllm-project/semantic-router/pull/4000) [Feature] Parallelize independent model artifact fingerprinting
- [#4389](https://github.com/vllm-project/semantic-router/pull/4389) [Bug] Warn before leaving Builder and DSL pages with unsaved edits
- [#4409](https://github.com/vllm-project/semantic-router/pull/4409) [Bug] Hide Router transport errors from Knowledge Bases responses

#### 🐛 New Issues
- [#4437](https://github.com/vllm-project/semantic-router/issues/4437) [Bug] vllm-sr commands exit 0 when interrupted with Ctrl-C `bug` `wg/developer-experience-ecosystem` 💬1
- [#4441](https://github.com/vllm-project/semantic-router/issues/4441) [Bug] MCQ judge accepts word prefixes as answers and drops fullwidth-colon support `needs-acceptance` `wg/evaluation-quality` 💬1
- [#4444](https://github.com/vllm-project/semantic-router/issues/4444) [Bug] Make Redis StoreResponse creation atomic for duplicate IDs
- [#4439](https://github.com/vllm-project/semantic-router/issues/4439) [Bug] Playground weather tool returns raw fetch errors with proxy and request details `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#4434](https://github.com/vllm-project/semantic-router/issues/4434) [Bug] Memory and tool_selection plugin settings are dropped by the DSL compiler and partly ignored by the router `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#4430](https://github.com/vllm-project/semantic-router/issues/4430) [Bug] Builder Deploy erases ${VAR} references and rejects configs that require them `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#4424](https://github.com/vllm-project/semantic-router/issues/4424) [Bug] Half of the CLI unit tests never run in CI `bug` `accepted` `wg/evaluation-quality`

#### 🔒 Closed Issues
- [#4396](https://github.com/vllm-project/semantic-router/issues/4396) [Bug] Dashboard overview hides failed config and status requests
- [#4386](https://github.com/vllm-project/semantic-router/issues/4386) [Bug] Builder and DSL pages lose unsaved edits on refresh without a warning
- [#4383](https://github.com/vllm-project/semantic-router/issues/4383) [Bug] Chat response decoding drops vLLM's matched stop sequence, so Anthropic clients get end_turn
- [#4408](https://github.com/vllm-project/semantic-router/issues/4408) [Bug] Knowledge Bases pages show raw Router connection errors with internal addresses
- [#3845](https://github.com/vllm-project/semantic-router/issues/3845) [Feature] Parallelize independent model artifact fingerprinting during runtime preparation
- [#4437](https://github.com/vllm-project/semantic-router/issues/4437) [Bug] vllm-sr commands exit 0 when interrupted with Ctrl-C
- [#4404](https://github.com/vllm-project/semantic-router/issues/4404) [Bug] Community member cards truncate bios
- [#4444](https://github.com/vllm-project/semantic-router/issues/4444) [Bug] Make Redis StoreResponse creation atomic for duplicate IDs
- [#4424](https://github.com/vllm-project/semantic-router/issues/4424) [Bug] Half of the CLI unit tests never run in CI

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*