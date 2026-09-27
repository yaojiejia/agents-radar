# 📡 AI Ecosystem Digest — 2026-09-27

> Generated 2026-09-27 01:07 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 148,216 | 18 | 17 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 126,627 | 29 | 1 | 23 | 6 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,161 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,213 | 4 | 24 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 210,245 | 26 | 8 | 0 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,144 | 32 | 18 | 8 | 2 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 390,594 | 63 | 26 | 61 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 249,245 | 32 | 5 | 13 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 92,729 | 7 | 4 | 24 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,457 | 8 | 10 | 34 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 129,616 | 21 | 15 | 13 | 9 |
| [Ollama](https://github.com/ollama/ollama) | 181,776 | 6 | 0 | 1 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 59,676 | 7 | 19 | 75 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,836 | 10 | 15 | 80 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,113 | 2 | 1 | 7 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,916 | 25 | 25 | 13 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released multiple updates with versions [rust-v0.159.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.6), [rust-v0.159.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.5), [rust-v0.159.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.4), and others.
- **Gemini CLI** also released a new version, [v0.63.0-nightly.20260926.g2fe7c2d3f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0-nightly.20260926.g2fe7c2d3f).
- **vLLM** merged a notable PR addressing [CUSTOM_MEM_POOL support](https://github.com/vllm-project/vllm/pull/49300) in the project.
- **OpenCode** saw significant new issue activity with [#51529](https://github.com/anomalyco/opencode/issues/51529), reporting an OOM crash with multiple agents generating 5 comments.
- **AI Infrastructure** project **Semantic Router** attracted attention with the new issue [#4241](https://github.com/vllm-project/semantic-router/issues/4241) regarding an epic for unifying benchmarking, gathering 7 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 148,216 · **Open issues:** 13,248 · **Last push:** 3h ago

On September 27, 2026, Claude Code saw no new releases or merged pull requests, indicating a routine maintenance day. However, several new issues were reported, notably issue #97319 which highlights a bug where the MCP client rejects valid tools/list responses due to strict validation on the ttlMs and cacheScope fields, drawing significant attention with seven comments. Additionally, issue #97538 addresses a problem where the `claude self-hosted-runner` and `claude plugin eval` commands start processes without the required `CLAUDE_CODE_PROCESS_WRAPPER`, raising concerns about potential process management issues. Other issues included various GitHub integration bugs and feature requests, signaling ongoing development and user engagement in the community.

#### 🐛 New Issues
- [#97319](https://github.com/anthropics/claude-code/issues/97319) [BUG] MCP client rejects valid tools/list response due to strict validation of ttlMs/cacheScope fields (Roblox Studio MCP server) `bug` `has repro` `platform:windows` `area:mcp` 💬7
- [#97538](https://github.com/anthropics/claude-code/issues/97538) [BUG] `claude self-hosted-runner` and `claude plugin eval` start Claude Code processes without `CLAUDE_CODE_PROCESS_WRAPPER` `bug` `area:security` `area:plugins` `area:self-hosted-environments` 💬1
- [#97544](https://github.com/anthropics/claude-code/issues/97544) [GitHub integration] `question` `github-integration`
- [#97543](https://github.com/anthropics/claude-code/issues/97543) [GitHub integration] `bug` `platform:web` `github-integration`
- [#97542](https://github.com/anthropics/claude-code/issues/97542) Chat file links to non-ASCII (CJK) paths are silently no-ops (click does nothing) `duplicate` `platform:macos` `area:ide` `platform:vscode`
- [#97541](https://github.com/anthropics/claude-code/issues/97541) [Bug][cyber] False positive on troubleshooting USB hardware security key web sign-in (req_011CfSyQkBB2CcC3FWkF3Ajt) `bug` `duplicate` `platform:linux` `area:model`
- [#97540](https://github.com/anthropics/claude-code/issues/97540) [GitHub integration] `invalid` `github-integration`
- [#97539](https://github.com/anthropics/claude-code/issues/97539) [Bug] /clear command does not reset conversation session `duplicate` `platform:windows` `area:tui`
- [#97537](https://github.com/anthropics/claude-code/issues/97537) [BUG] claude.ai connectors missing in Claude Code: /v1/mcp_servers returns 2 of ~20 connected (since Customize/Cowork merge) `bug` `has repro` `platform:macos` `area:mcp`
- [#97536](https://github.com/anthropics/claude-code/issues/97536) [GitHub integration] `bug` `platform:web` `github-integration`
- [#97535](https://github.com/anthropics/claude-code/issues/97535) [FEATURE] VS Code extension: add a command to add a file or folder to the chat (like Codex's chatgpt.addFileToThread) `enhancement` `area:ide` `platform:vscode`
- [#97534](https://github.com/anthropics/claude-code/issues/97534) [Bug] Git reset --hard unintentionally discards uncommitted changes `bug` `platform:macos` `area:tools` `data-loss`
- [#97532](https://github.com/anthropics/claude-code/issues/97532) [retiré] `bug` `area:model` `area:security` `area:bash`
- [#97533](https://github.com/anthropics/claude-code/issues/97533) [Bug] Messages flagged in Anthropic cybersecurity program context `bug` `duplicate` `platform:macos` `area:model`
- [#97531](https://github.com/anthropics/claude-code/issues/97531) [GitHub integration] `bug` `platform:web` `github-integration`
- [#97530](https://github.com/anthropics/claude-code/issues/97530) Desktop app crashes (no clean shutdown) under concurrent session-spawn load; same mechanism causes session-switch lag `bug` `has repro` `platform:windows` `area:desktop`
- [#97529](https://github.com/anthropics/claude-code/issues/97529) [GitHub integration] `bug` `needs-info` `github-integration`
- [#97528](https://github.com/anthropics/claude-code/issues/97528) [Bug] Anthropic API Error: Invalid reasoning_extraction in response `bug` `duplicate` `platform:macos` `area:model`

#### 🔒 Closed Issues
- [#75360](https://github.com/anthropics/claude-code/issues/75360) Permission dialog silently steals focus and destroys typed input — accessibility issue
- [#75400](https://github.com/anthropics/claude-code/issues/75400) [BUG] /compact hangs indefinitely with no error in desktop local-agent (multi-session) mode — process alive, transcript frozen, UI counter climbs forever
- [#75330](https://github.com/anthropics/claude-code/issues/75330) [BUG] Claude performed actions that were not approved
- [#75271](https://github.com/anthropics/claude-code/issues/75271) Markdown file links with ~ (tilde) resolve relative to project root instead of home directory
- [#75510](https://github.com/anthropics/claude-code/issues/75510) Broken permission-request stream retried ~128 times with no backoff
- [#75533](https://github.com/anthropics/claude-code/issues/75533) [Bug] Plan mode: Assistant chat text not displayed when ExitPlanMode called with plan rejection
- [#75485](https://github.com/anthropics/claude-code/issues/75485) [BUG] Windows 11: Claude fails to install after 5 minutes
- [#88074](https://github.com/anthropics/claude-code/issues/88074) [BUG] Plugin install from a marketplace "source: url" entry does not clone git submodules — "skills path not found" (planetscale plugin)
- [#95597](https://github.com/anthropics/claude-code/issues/95597) [Bug] Anthropic API Error: Message Flagged - Research Project Blocked
- [#95533](https://github.com/anthropics/claude-code/issues/95533) [Bug] Excessive flagging on minimal input like "Hi"
- [#95591](https://github.com/anthropics/claude-code/issues/95591) [Bug] Model behavior inconsistency between individual and enterprise account configurations
- [#95574](https://github.com/anthropics/claude-code/issues/95574) completely fails : reset billed and charged, credits ineffective
- [#96396](https://github.com/anthropics/claude-code/issues/96396) [GitHub integration] unable to search across repos
- [#96369](https://github.com/anthropics/claude-code/issues/96369) [GitHub integration] Repository access not enabled for session despite repo being connected
- [#96358](https://github.com/anthropics/claude-code/issues/96358) [BUG] Claude Desktop (Windows, chat mode): "Always allow" for connector tool delete_emails does not persist; approval prompt reappears every time
- [#97296](https://github.com/anthropics/claude-code/issues/97296) Thank you
- [#97532](https://github.com/anthropics/claude-code/issues/97532) [retiré]

### OpenAI Codex (`openai/codex`)

**Stars:** 126,627 · **Open issues:** 19,036 · **Last push:** <1h ago

On September 27, 2026, several new alpha versions of the Rust framework were released, including rust-v0.159.0-alpha.6 and rust-v0.158.0-alpha.15.2, aimed at improving tool functionality and stability. Among the significant merged pull requests, updates included allowing provisioned executors more time to come online and fixing TUI math rendering for zero and big wedge expressions. A particularly notable new issue arose regarding the Windows Codex Desktop app, which is stuck on a startup spinner until the app-server codex.exe is terminated, impacting user experience significantly. This day showcased both ongoing enhancements and emerging challenges in user interactions with the platform.

#### 🚀 New Releases
- [rust-v0.159.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.6) 0.159.0-alpha.6
- [rust-v0.159.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.5) 0.159.0-alpha.5
- [rust-v0.159.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.4) 0.159.0-alpha.4
- [rust-v0.158.0-alpha.2.1](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.2.1) 0.158.0-alpha.2.1
- [rust-v0.158.0-alpha.15.2](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.15.2) 0.158.0-alpha.15.2
- [rust-v0.158.0-alpha.15.1](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.15.1) 0.158.0-alpha.15.1

#### ✅ Merged PRs
- [#48575](https://github.com/openai/codex/pull/48575) Allow provisioned executors more time to come online
- [#48574](https://github.com/openai/codex/pull/48574) Preserve deferred tool namespace names before descriptions
- [#48568](https://github.com/openai/codex/pull/48568) Allow exec-server to proxy permitted private IPs upstream
- [#48565](https://github.com/openai/codex/pull/48565) Allow macOS TLS trust evaluation in network-enabled Seatbelt profiles
- [#48562](https://github.com/openai/codex/pull/48562) Use a consistent borderless session header in the TUI
- [#48560](https://github.com/openai/codex/pull/48560) Keep working tips stable during transcript interaction
- [#48551](https://github.com/openai/codex/pull/48551) Fix TUI math rendering for zero and big wedge expressions
- [#48549](https://github.com/openai/codex/pull/48549) Preserve Markdown tables and whitespace when copying TUI responses
- [#48548](https://github.com/openai/codex/pull/48548) Preserve table cell source metadata through TUI rendering
- [#48547](https://github.com/openai/codex/pull/48547) Fade blossom replays back to the idle state
- [#48544](https://github.com/openai/codex/pull/48544) Make onboarding login links easier to copy
- [#48531](https://github.com/openai/codex/pull/48531) Add context to Windows sandbox runtime registration errors
- [#48513](https://github.com/openai/codex/pull/48513) Refresh the TUI welcome screen for new sessions
- [#48508](https://github.com/openai/codex/pull/48508) Preserve WebSocket continuations when steering a turn
- [#48502](https://github.com/openai/codex/pull/48502) Fix ChatGPT browser sign-in for local app servers
- [#48491](https://github.com/openai/codex/pull/48491) Fall back to embedded mode under restrictive Windows launchers
- [#48489](https://github.com/openai/codex/pull/48489) Fix Mermaid shape, relationship, and state description parsing
- [#48483](https://github.com/openai/codex/pull/48483) Prevent console windows for piped Windows child processes
- [#48469](https://github.com/openai/codex/pull/48469) Default to copying transcript selections in more terminals
- [#48353](https://github.com/openai/codex/pull/48353) Stabilize skill catalogs across executor availability changes
- [#48352](https://github.com/openai/codex/pull/48352) Show turn tips while working and after completion in the TUI
- [#48350](https://github.com/openai/codex/pull/48350) Display reconnect commands on a separate line
- [#48344](https://github.com/openai/codex/pull/48344) Preserve tool metadata for OpenAI provider endpoint overrides

#### 🐛 New Issues
- [#48333](https://github.com/openai/codex/issues/48333) [Windows] Codex Desktop 26.924.1866.0 stuck on startup spinner until app-server codex.exe is terminated `bug` `windows-os` `mcp` `app` 💬17
- [#48540](https://github.com/openai/codex/issues/48540) Windows: terminal window briefly flashes on every agent shell command after updating to 0.157.1 `bug` `windows-os` `CLI` `tool-calls` 💬2
- [#48542](https://github.com/openai/codex/issues/48542) Don't mess with my terminal, let me scroll normally `bug` `TUI` `CLI` 💬3
- [#48414](https://github.com/openai/codex/issues/48414) ChatGPT macOS v26.924.22138: Option+L doesn’t type “ł” in chat input (Polish Pro) `bug` `app` 💬3
- [#48554](https://github.com/openai/codex/issues/48554) [Linux Desktop][26.924] Electron runtime replaces libuv's SIGCHLD handler with an empty function: children are never reaped, so shell env times out, "Git is unavailable", threads never load `bug` `app` 💬2
- [#48415](https://github.com/openai/codex/issues/48415) Please stop breaking basic macOS shortcuts — bring back Cmd+C `bug` `TUI` `CLI` 💬3
- [#48466](https://github.com/openai/codex/issues/48466) [Windows 26.924] Every cold startup stalls on Loading; restarting only app-server restores UI `bug` `windows-os` `app` `app-server` 💬2
- [#48570](https://github.com/openai/codex/issues/48570) VS Code Codex intermittently returns 401 Incorrect API key while using ChatGPT Plus login `bug` `windows-os` `extension` `auth` 💬2
- [#48564](https://github.com/openai/codex/issues/48564) Windows: marketplace can never activate under a long CODEX_HOME ("Filename too long" on checkout), making #47735's re-clone loop permanent `bug` `windows-os` `CLI` `skills` 💬2
- [#48578](https://github.com/openai/codex/issues/48578) Windows Codex desktop app remains on a white loading screen; ending one Codex child process restores the UI `bug` `windows-os` `app` 💬1
- [#48581](https://github.com/openai/codex/issues/48581) [Windows][In-app browser] Browser Use clicks land ~48 CSS px above target in default viewport `bug` `windows-os` `app` `browser` 💬1
- [#48443](https://github.com/openai/codex/issues/48443) Windows/WSL: permission path cannot be represented losslessly prevents all local tool execution after update `bug` `windows-os` `sandbox` `tool-calls` 💬1
- [#48567](https://github.com/openai/codex/issues/48567) CLI: Support Esc Esc prompt editing in /side and /btw chats, with return to the original branch `enhancement` `TUI` `CLI` `session` 💬1
- [#48577](https://github.com/openai/codex/issues/48577) all new chats in the desktop app are local-only `bug` `windows-os` `app` `session` 💬1
- [#48576](https://github.com/openai/codex/issues/48576) Resume thread automatically when usage limits reset `enhancement` `rate-limits` `app` `session` 💬1
- [#48573](https://github.com/openai/codex/issues/48573) [Windows] Browser Use lists correct Chrome tabs but cannot request permission / verify saved browser permissions `bug` `windows-os` `app` `browser` 💬1
- [#48571](https://github.com/openai/codex/issues/48571) Unavailable — Codex Desktop cannot load account data, so no active Codex session is available for /feedback. `bug` `windows-os` `auth` `app` 💬1
- [#48566](https://github.com/openai/codex/issues/48566) Replit Plugin Failing in Codex Project `bug` `app` `skills` 💬1
- [#48558](https://github.com/openai/codex/issues/48558) [Windows] Codex App 26.924.2738.0 stuck indefinitely on startup spinner `bug` `windows-os` `app` 💬1
- [#48557](https://github.com/openai/codex/issues/48557) [Windows][26.924.2738.0] ChatGPT stuck on OpenAI logo/loading screen after update `bug` `windows-os` `app` 💬1
- [#48556](https://github.com/openai/codex/issues/48556) [Windows][26.924.2738.0] Persistent black window with spinner after update; survives reinstall and cold reboot `bug` `windows-os` `app` 💬1
- [#48582](https://github.com/openai/codex/issues/48582) Add a CLI command to check remaining account usage `enhancement` `rate-limits` `CLI`
- [#48580](https://github.com/openai/codex/issues/48580) Windows desktop: pinned chats show disconnected despite SSH access; duplicate catalog entries select older host `bug` `windows-os` `app` `session`
- [#48579](https://github.com/openai/codex/issues/48579) Windows Desktop: notification sounds ignore Windows sound controls and no sound setting is visible `bug` `windows-os` `app`
- [#48572](https://github.com/openai/codex/issues/48572) /compact silently drops trailing instructions intended for after compaction `bug` `context` `session`
- [#48569](https://github.com/openai/codex/issues/48569) cos `bug` `auth` `CLI`
- [#48563](https://github.com/openai/codex/issues/48563) [Windows desktop] Unanswered question card disappears after assistant sends subsequent text `bug` `windows-os` `app`
- [#48561](https://github.com/openai/codex/issues/48561) Return key inserts newline instead of sending in ChatGPT macOS app and Chat Bar `bug` `app`
- [#48559](https://github.com/openai/codex/issues/48559) Native visionOS UI for Codex Remote: comfortable controls alongside Mac Virtual Display `enhancement` `iOS` `remote`

#### 🔒 Closed Issues
- [#48576](https://github.com/openai/codex/issues/48576) Resume thread automatically when usage limits reset

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,161 · **Open issues:** 814 · **Last push:** 23h ago

On September 26, 2026, Gemini CLI released version v0.63.0-nightly.20260926.g2fe7c2d3f, which included a fix to remove an invalid `diff.external` override contributed by @urielefrenvirtusa. The release process also saw a version bump due to a prior release change managed by @gemini-cli-robot, along with an updated changelog for the recently released v0.62.0-preview.0. There were no merged pull requests or new issues reported in the last 24 hours, indicating a routine maintenance day for the project.

#### 🚀 New Releases
- [v0.63.0-nightly.20260926.g2fe7c2d3f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0-nightly.20260926.g2fe7c2d3f) Release v0.63.0-nightly.20260926.g2fe7c2d3f

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,213 · **Open issues:** 2,232 · **Last push:** 1d ago

On September 27, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI, reflecting a routine maintenance day. However, the team is currently addressing several notable new issues, including #4975, which highlights that Hydrafusion is not available in experimental mode, and #4974, where worktree sessions are omitting untracked files from source checkouts. Additionally, issue #4973 raises concerns about the AI getting stuck indefinitely when using search functionalities, while #4972 discusses a problem with the MCP worker surviving exit when launched through a wrapper on Windows. These issues suggest areas for improvement in functionality and user experience.

#### 🐛 New Issues
- [#4975](https://github.com/github/copilot-cli/issues/4975) Hydrafusion not available on experimental mode `triage`
- [#4974](https://github.com/github/copilot-cli/issues/4974) Worktree sessions omit untracked files from the source checkout `triage`
- [#4973](https://github.com/github/copilot-cli/issues/4973) When AI uses Search it gets stuck indefinitely `triage`
- [#4972](https://github.com/github/copilot-cli/issues/4972) Windows: MCP worker survives exit when launched through a wrapper `triage`

#### 🔒 Closed Issues
- [#4664](https://github.com/github/copilot-cli/issues/4664) Copilot CLI crashes with JavaScript heap out of memory when resuming a long-standing session
- [#1864](https://github.com/github/copilot-cli/issues/1864) Failed to resume session: Error: Session file is corrupted
- [#4370](https://github.com/github/copilot-cli/issues/4370) Copilot CLI 1.0.79-1 fails MCP initialization when `server/discover` returns `-32602`
- [#3712](https://github.com/github/copilot-cli/issues/3712) Question: ReFS / Dev Drive local-sandbox limitation on Windows - is it known, and could it be documented?
- [#4160](https://github.com/github/copilot-cli/issues/4160) Plan mode over-blocks read-only shell commands (keyword false positives)
- [#2368](https://github.com/github/copilot-cli/issues/2368) LSP server not found when configured via project-level .github/lsp.json
- [#1752](https://github.com/github/copilot-cli/issues/1752) Mismatched model names between cli and vs code
- [#3754](https://github.com/github/copilot-cli/issues/3754) [CLI] copilot --resume "Name With Spaces" fails silently with exit 1
- [#3306](https://github.com/github/copilot-cli/issues/3306) Error: Native addon "runtime" not found for win32-arm64
- [#2508](https://github.com/github/copilot-cli/issues/2508) esc to cancel is accidentally triggered too much
- [#4076](https://github.com/github/copilot-cli/issues/4076) Make the built-in research agent's MCP tools configurable
- [#1360](https://github.com/github/copilot-cli/issues/1360) Streamable HTTP error - Session not found
- [#4384](https://github.com/github/copilot-cli/issues/4384) Copilot CLI changes terminal title to "Windows PowerShell" when not launched in Windows Terminal
- [#4300](https://github.com/github/copilot-cli/issues/4300) Support bearerToken for BYO-K
- [#3656](https://github.com/github/copilot-cli/issues/3656) French voicemode model
- [#3362](https://github.com/github/copilot-cli/issues/3362) Changing workdir doesn't emit event anymore
- [#3054](https://github.com/github/copilot-cli/issues/3054) Checkpoints not getting recorded after compaction
- [#2844](https://github.com/github/copilot-cli/issues/2844) Bug: Cursor invisible + unresponsive to arrow keys — chalk level 0 disables all ANSI styling
- [#2298](https://github.com/github/copilot-cli/issues/2298) Allow to specify cmds that are approved
- [#2270](https://github.com/github/copilot-cli/issues/2270) PLAN mode not enforced when using /fleet -- agents apply code changes
- [#2172](https://github.com/github/copilot-cli/issues/2172) Compaction agent shouldn't be able to call ask_user, or any tools aside from reading files
- [#4650](https://github.com/github/copilot-cli/issues/4650) Blocked as auth fails whenever -p or --agent used (enterprise login)
- [#4608](https://github.com/github/copilot-cli/issues/4608) Hooks from a live path-sourced plugin do not run in a resumed session (regression in 1.0.81-8)
- [#4944](https://github.com/github/copilot-cli/issues/4944) Form fields don't support mouse click / cursor placement for inline text editing

### OpenCode (`anomalyco/opencode`)

**Stars:** 210,245 · **Open issues:** 6,227 · **Last push:** 4h ago

On September 27, 2026, OpenCode did not release any new versions or merge any pull requests. However, several new issues were logged, with #51529 highlighted for causing an out-of-memory crash when running eight parallel agents on Windows 11, which has garnered significant user discussion. Additionally, #51544 reports critical connectivity issues following an update, blocking the addition of new AI providers due to HTTP errors. Other noteworthy issues include #51550, which raises concerns over Qwen 3.8's weekly limits affecting access to other Go models, and #51568, where users report that their Go subscription was dropped before the completion of the billing cycle.

#### 🐛 New Issues
- [#51529](https://github.com/anomalyco/opencode/issues/51529) Desktop app OOM crash with 8 parallel agents (Windows 11, v1.18.32) 💬5
- [#51544](https://github.com/anomalyco/opencode/issues/51544) After update: all providers disconnect (HTTP 400/408), Atria-Dawn-Preview fails, and "unavailable on this server" error completely blocks adding any new AI provider 💬4
- [#51556](https://github.com/anomalyco/opencode/issues/51556) Withdrawn by author `needs:compliance` 💬3
- [#51567](https://github.com/anomalyco/opencode/issues/51567) Permission prompt stays visible after request is no longer found 💬2
- [#51552](https://github.com/anomalyco/opencode/issues/51552) Desktop file pane: no refresh / new-file detection; viewer-only — files created by the agent are invisible until restart 💬2
- [#51464](https://github.com/anomalyco/opencode/issues/51464) GitLab Responses: Astra fails fresh subagent creation while Opus succeeds 💬2
- [#51550](https://github.com/anomalyco/opencode/issues/51550) Qwen 3.8 Max weekly limit blocks all other Go models, including unused models 💬2
- [#51532](https://github.com/anomalyco/opencode/issues/51532) Context Windows Bug 💬2
- [#51526](https://github.com/anomalyco/opencode/issues/51526) Opencode version 2? 💬2
- [#51568](https://github.com/anomalyco/opencode/issues/51568) OpenCode Go subscription dropped before billing cycle ends 💬1
- [#51562](https://github.com/anomalyco/opencode/issues/51562) Paid $20 credits but balance remains $0 / Zen API returns 402 💬1
- [#51561](https://github.com/anomalyco/opencode/issues/51561) api: /api/fs/read returns 404 for ~-prefixed paths, hiding global AGENTS.md in context pane `needs:compliance` 💬1
- [#51560](https://github.com/anomalyco/opencode/issues/51560) Instance boot 500s when a registered project path is occupied by a plain file (ENOTDIR on <worktree>/opencode.jsonc at Config.loadInstanceState) 💬1
- [#51557](https://github.com/anomalyco/opencode/issues/51557) DigitalOcean Anthropic models (Claude Fable, etc.) never hit prompt cache in v2 💬1
- [#51555](https://github.com/anomalyco/opencode/issues/51555) tui: session tab list renders opaque separator/underline colors on transparent themes 💬1
- [#51553](https://github.com/anomalyco/opencode/issues/51553) npm 12 upgrade leaves the Windows executable stub 💬1
- [#51551](https://github.com/anomalyco/opencode/issues/51551) [FEATURE]: add option to disable dev-server health checks 💬1
- [#51545](https://github.com/anomalyco/opencode/issues/51545) Provider timeouts (chunkTimeout/headerTimeout) are ignored for cloudflare-ai-gateway models 💬1
- [#51541](https://github.com/anomalyco/opencode/issues/51541) reasoning_options=[toggle] yields zero variants for @ai-sdk/openai-compatible providers (485 models, e.g. all Xiaomi MiMo) 💬1
- [#51534](https://github.com/anomalyco/opencode/issues/51534) fix(core): empty `--project` makes session stats silently report zero 💬1
- [#51539](https://github.com/anomalyco/opencode/issues/51539) opencode CLI interface, it crashes 💬1
- [#51537](https://github.com/anomalyco/opencode/issues/51537) ECONNRESET when using Custom Provider: socket connection closed unexpectedly and custom server not detected correctly 💬1
- [#51564](https://github.com/anomalyco/opencode/issues/51564) Web UI: Markdown file preview renders frontmatter as a heading
- [#51563](https://github.com/anomalyco/opencode/issues/51563) TUI home screen: wrapped footer line overlaps the row above in short terminals
- [#51546](https://github.com/anomalyco/opencode/issues/51546) [FEATURE]: Add Mantle Chat to the ecosystem page
- [#51542](https://github.com/anomalyco/opencode/issues/51542) /thinking & /effort do the same

#### 🔒 Closed Issues
- [#51529](https://github.com/anomalyco/opencode/issues/51529) Desktop app OOM crash with 8 parallel agents (Windows 11, v1.18.32)
- [#51544](https://github.com/anomalyco/opencode/issues/51544) After update: all providers disconnect (HTTP 400/408), Atria-Dawn-Preview fails, and "unavailable on this server" error completely blocks adding any new AI provider
- [#51556](https://github.com/anomalyco/opencode/issues/51556) Withdrawn by author
- [#51567](https://github.com/anomalyco/opencode/issues/51567) Permission prompt stays visible after request is no longer found
- [#51552](https://github.com/anomalyco/opencode/issues/51552) Desktop file pane: no refresh / new-file detection; viewer-only — files created by the agent are invisible until restart
- [#51550](https://github.com/anomalyco/opencode/issues/51550) Qwen 3.8 Max weekly limit blocks all other Go models, including unused models
- [#51532](https://github.com/anomalyco/opencode/issues/51532) Context Windows Bug
- [#51526](https://github.com/anomalyco/opencode/issues/51526) Opencode version 2?

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,144 · **Open issues:** 1,492 · **Last push:** <1h ago

On September 27, 2026, Qwen Code released version v0.24.6-nightly.20260926.d6f414190a, which introduced fixes such as preserving registration URLs and closing fixture gaps. Additionally, the SDK TypeScript Release v0.1.16 bundled the CLI version 0.24.6. Significant merged features included enhancements in the acp-bridge for recovering quarantined paired channels and a fix in the core for more accurately classifying multi-address connect failures. Notably, a new issue was raised regarding the odd behavior of the /update command, which has garnered some attention. Overall, the updates reflect ongoing improvements and refinements within the Qwen Code ecosystem.

#### 🚀 New Releases
- [v0.24.6-nightly.20260926.d6f414190a](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.6-nightly.20260926.d6f414190a) Release v0.24.6-nightly.20260926.d6f414190a
- [sdk-typescript-v0.1.16](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.16) SDK TypeScript Release v0.1.16

#### ✅ Merged PRs
- [#12798](https://github.com/QwenLM/qwen-code/pull/12798) fix(sdk-java): reject unreadable decimal scales
- [#12795](https://github.com/QwenLM/qwen-code/pull/12795) feat(acp-bridge): recover quarantined paired channels and operate per engine
- [#12794](https://github.com/QwenLM/qwen-code/pull/12794) fix(core): classify multi-address connect failures by any attempt, not the first
- [#12767](https://github.com/QwenLM/qwen-code/pull/12767) feat(core): add local managed tool-result segment store
- [#12801](https://github.com/QwenLM/qwen-code/pull/12801) test(managed-agent): gate tool-driven failover E2E modes on Hosted no-tool slice
- [#12126](https://github.com/QwenLM/qwen-code/pull/12126) feat(mobile): support scoped native document selection (Phase 2)
- [#11965](https://github.com/QwenLM/qwen-code/pull/11965) fix(hooks): key enabled state by name, not identity
- [#12754](https://github.com/QwenLM/qwen-code/pull/12754) feat(managed-agent): wire private Workspace execution (W0c-3)

#### 🐛 New Issues
- [#12737](https://github.com/QwenLM/qwen-code/issues/12737) feat(acp-bridge): Stage B host integration for paired Legacy and Managed engines `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬8
- [#12727](https://github.com/QwenLM/qwen-code/issues/12727) The /update command is a littel weird for me `priority/P2` `type/bug` `category/platform` `scope/installation` 💬6
- [#12793](https://github.com/QwenLM/qwen-code/issues/12793) feat(managed-agent): Stage D public API contract, generated DTOs, Session query and event replay `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬5
- [#12792](https://github.com/QwenLM/qwen-code/issues/12792) EditTool reflows a whole file when its CRLF/LF endings are mixed `priority/P2` `type/bug` `category/tools` `scope/file-operations` 💬5
- [#12760](https://github.com/QwenLM/qwen-code/issues/12760) Model selection issue `priority/P2` `type/bug` `category/configuration` `scope/model-switching` 💬5
- [#12809](https://github.com/QwenLM/qwen-code/issues/12809) bug(core): under CodeModeOnly with a tools.eager allowlist omitting skill, the built-in general-purpose subagent is pointed at a skill it cannot load `priority/P2` `type/bug` `category/core` `roadmap/subagents-tools` 💬4
- [#12779](https://github.com/QwenLM/qwen-code/issues/12779) test(managed-agent): Align failover E2E modes with Hosted no-tool gate `priority/P3` `type/bug` `category/development` `scope/testing` 💬4
- [#12802](https://github.com/QwenLM/qwen-code/issues/12802) standalone-update: an aged .deferred marker blocks updates forever, and rollbackStandaloneUpdate's lock-liveness direction is unpinned `priority/P2` `type/bug` `category/platform` `scope/installation` 💬4
- [#12770](https://github.com/QwenLM/qwen-code/issues/12770) fix(core): extension lifecycle events ignore privacy.usageStatisticsEnabled and are uploaded to RUM `priority/P2` `type/bug` `category/telemetry` `scope/extensions` 💬4
- [#12735](https://github.com/QwenLM/qwen-code/issues/12735) Stale worktree cleanup deletes user-named worktrees with untracked files `priority/P1` `type/bug` `category/core` `scope/git` 💬4
- [#12758](https://github.com/QwenLM/qwen-code/issues/12758) Stale worktree startup sweep destroys git-ignored content (no --ignored), disagreeing with the daemon reaper's guard on the same sink `priority/P2` `type/bug` `category/core` `scope/git` 💬4
- [#12724](https://github.com/QwenLM/qwen-code/issues/12724) feat(managed-agent): W0c run each Session's tools in its Workspace binding's directory `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬4
- [#12796](https://github.com/QwenLM/qwen-code/issues/12796) runtime-broker persists BigDecimal scales its JSON codec cannot read `priority/P2` `type/bug` `category/core` `daemon` 💬3
- [#12806](https://github.com/QwenLM/qwen-code/issues/12806) Desktop releases: add linux-aarch64 (AppImage/deb) build to the release matrix `priority/P2` `type/feature-request` `category/platform` `scope/linux` 💬3
- [#12803](https://github.com/QwenLM/qwen-code/issues/12803) [FEATURE]: --agent <name> — run a named subagent headless with a given prompt, its declared tool constraints, and structured output `priority/P2` `type/feature-request` `category/cli` `scope/non-interactive` 💬3
- [#12790](https://github.com/QwenLM/qwen-code/issues/12790) Disable all skills, keep them disabled by default `priority/P3` `type/feature-request` `category/configuration` `scope/settings` 💬3
- [#12782](https://github.com/QwenLM/qwen-code/issues/12782) Runtime Broker: whole-second lease clock expires 1 s test leases at second boundaries (flaky ManagedContextRecoveryTest) `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#12781](https://github.com/QwenLM/qwen-code/issues/12781) tracking(core): system prompt simplification — three passes done, external comparison, and next directions `priority/P2` `model/long-context` `type/feature-request` `category/core` 💬3
- [#12778](https://github.com/QwenLM/qwen-code/issues/12778) test(cli): Cover remaining Managed Workspace activation refusals `priority/P3` `status/blocked` `category/development` `scope/testing` 💬3
- [#12762](https://github.com/QwenLM/qwen-code/issues/12762) managed-agent-server Flyway schema drifts from the Runtime Broker's JDBC schema; the Broker fails on MySQL once enabled `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#12765](https://github.com/QwenLM/qwen-code/issues/12765) Runtime Broker: HttpRuntimeTransport has no Session verbs, so no tool call can be dispatched through it `priority/P2` `type/feature-request` `category/core` `need-discussion` 💬3
- [#12766](https://github.com/QwenLM/qwen-code/issues/12766) Runtime Broker: a restarted Broker can neither adopt nor retire a local-process worker `priority/P2` `type/feature-request` `category/core` `need-discussion` 💬3
- [#12761](https://github.com/QwenLM/qwen-code/issues/12761) Follow-up: deferred findings from #12730 (W0c-2 managed-context Broker) `priority/P3` `category/core` `scope/session-management` `scope/testing` 💬3
- [#12748](https://github.com/QwenLM/qwen-code/issues/12748) test(runtime-broker): Stage F multi-process fault gates for the Broker and Runtime tool path `priority/P2` `type/feature-request` `category/development` `scope/testing` 💬3
- [#12756](https://github.com/QwenLM/qwen-code/issues/12756) WebFetch failed frequently `status/need-information` `priority/P3` `type/bug` `category/tools` 💬3
- [#12749](https://github.com/QwenLM/qwen-code/issues/12749) daemonBlockToPlainText leaks terminal escapes from tool preview content `priority/P2` `type/bug` `category/security` `scope/rendering` 💬3
- [#12813](https://github.com/QwenLM/qwen-code/issues/12813) channels/base: the responseBoundary adapter hook is skipped during cancelPending while the bridge still clears its chunks `priority/P3` `type/bug` `category/integration` `status/ready-for-human` 💬2
- [#12805](https://github.com/QwenLM/qwen-code/issues/12805) Managed/locked settings: enforced model-provider allowlist that user settings cannot override 💬2
- [#12800](https://github.com/QwenLM/qwen-code/issues/12800) Optimize context to get faster responses on slow local inference `status/needs-triage` `type/feature-request` 💬2
- [#12764](https://github.com/QwenLM/qwen-code/issues/12764) Main CI failed: E2E Tests on f915d346339c `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#12772](https://github.com/QwenLM/qwen-code/issues/12772) Main CI failed: Qwen Code CI on 939b4db6bc2a `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬2
- [#12812](https://github.com/QwenLM/qwen-code/issues/12812) Deferred review findings from PR #11959: feat(core): resolve model limits and modalities from a models.dev catalog

#### 🔒 Closed Issues
- [#11908](https://github.com/QwenLM/qwen-code/issues/11908) serve/acp: an oversized `available_commands_update` notification trips MAX_JSON_NODES, tears down the channel, and makes every later request 404 `No session with id`
- [#12727](https://github.com/QwenLM/qwen-code/issues/12727) The /update command is a littel weird for me
- [#12453](https://github.com/QwenLM/qwen-code/issues/12453) 当左侧边栏收起后，“新建任务”的图标与其他图标没有垂直对齐
- [#12720](https://github.com/QwenLM/qwen-code/issues/12720) web_fetch: connection-level classification reads only the top-level code of an AggregateError, so multi-address https→http fallback is attempt-order dependent
- [#12779](https://github.com/QwenLM/qwen-code/issues/12779) test(managed-agent): Align failover E2E modes with Hosted no-tool gate
- [#11902](https://github.com/QwenLM/qwen-code/issues/11902) hooks: a disabled hook's state is lost on reload when its command changes
- [#12306](https://github.com/QwenLM/qwen-code/issues/12306) Some settings in Web Shell settings panel remain in English when UI language is set to Chinese
- [#12496](https://github.com/QwenLM/qwen-code/issues/12496) # Bug: MCP client marks tools-only servers as disconnected (-32601 treated as transport error)
- [#12735](https://github.com/QwenLM/qwen-code/issues/12735) Stale worktree cleanup deletes user-named worktrees with untracked files
- [#12758](https://github.com/QwenLM/qwen-code/issues/12758) Stale worktree startup sweep destroys git-ignored content (no --ignored), disagreeing with the daemon reaper's guard on the same sink
- [#12796](https://github.com/QwenLM/qwen-code/issues/12796) runtime-broker persists BigDecimal scales its JSON codec cannot read
- [#12215](https://github.com/QwenLM/qwen-code/issues/12215) Fix sed --quiet/--silent classified as 'unknown' (SAFE_SED_OPTION whitelist unreachable)
- [#12631](https://github.com/QwenLM/qwen-code/issues/12631) runtime-broker accepts non-integer protocolVersion and epoch just above an integer
- [#12710](https://github.com/QwenLM/qwen-code/issues/12710) VS Code companion: edited sent message disappears from the chat view after sending the edit
- [#12678](https://github.com/QwenLM/qwen-code/issues/12678) desktop release: the node-pty degrade warning names the prebuild package even when the missing pin is @lydell/node-pty
- [#12146](https://github.com/QwenLM/qwen-code/issues/12146) fix(serve): align restore request fields across runtime, SDK, and OpenAPI
- [#12748](https://github.com/QwenLM/qwen-code/issues/12748) test(runtime-broker): Stage F multi-process fault gates for the Broker and Runtime tool path
- [#12764](https://github.com/QwenLM/qwen-code/issues/12764) Main CI failed: E2E Tests on f915d346339c

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

**Stars:** 390,594 · **Open issues:** 8,716 · **Last push:** <1h ago

There were no new releases for OpenClaw on September 27, 2026. However, a number of important pull requests were merged, including #159291, which refactors the gateway to share update watcher scheduling, and #159254, which improves plugins by avoiding blocking index reads during Claw cleanup. Significant fixes included #159244, which ensures that channel runtime logs are included in the logs, and #159216, which preserves uploaded image filenames in chat history. In terms of new issues, #158936 highlights a bug where the macOS app readiness watchdog SIGTERMs a slow-starting gateway, resulting in a restart loop, which has garnered considerable attention from the community.

#### ✅ Merged PRs
- [#159291](https://github.com/openclaw/openclaw/pull/159291) refactor(gateway): share update watcher scheduling
- [#159283](https://github.com/openclaw/openclaw/pull/159283) fix: keep short values readable in narrow chat tables
- [#159292](https://github.com/openclaw/openclaw/pull/159292) test(providers,media,i18n): remove low-value tests (batch d049)
- [#159281](https://github.com/openclaw/openclaw/pull/159281) fix(test): drain canonical state fixture directories
- [#159254](https://github.com/openclaw/openclaw/pull/159254) improve(plugins): avoid blocking index reads during Claw cleanup
- [#159266](https://github.com/openclaw/openclaw/pull/159266) fix(exec): only name approval surfaces that can answer exec approvals
- [#159244](https://github.com/openclaw/openclaw/pull/159244) fix(channels): include channel runtime logs in channels logs
- [#159242](https://github.com/openclaw/openclaw/pull/159242) fix(channels): list installed but disabled channel plugins as installed
- [#154372](https://github.com/openclaw/openclaw/pull/154372) docs: /acp steer runs after the in-flight ACP turn, not inside it
- [#159223](https://github.com/openclaw/openclaw/pull/159223) fix(cli): never fall back to local state when a remote Gateway is unreachable
- [#159275](https://github.com/openclaw/openclaw/pull/159275) refactor(gateway): schedule durable session delivery retries
- [#134406](https://github.com/openclaw/openclaw/pull/134406) fix(install): fail when OpenClaw is not on PATH
- [#158763](https://github.com/openclaw/openclaw/pull/158763) improve(state): speed up repeated session database cleanup
- [#159214](https://github.com/openclaw/openclaw/pull/159214) fix(cli): show the non-interactive setup command in root help
- [#159243](https://github.com/openclaw/openclaw/pull/159243) fix(channels): surface Gateway rejections from channels status
- [#159216](https://github.com/openclaw/openclaw/pull/159216) fix: preserve uploaded image filenames in chat history
- [#158267](https://github.com/openclaw/openclaw/pull/158267) ci: defer 195 slow integration tests from unrelated PRs
- [#157248](https://github.com/openclaw/openclaw/pull/157248) fix(claude-cli): preserve active foreground Agent calls past 15 minutes
- [#159269](https://github.com/openclaw/openclaw/pull/159269) perf(ui): stop republishing the theme on session navigation
- [#159259](https://github.com/openclaw/openclaw/pull/159259) docs(backup): give a working recovery step for malformed configs
- [#159067](https://github.com/openclaw/openclaw/pull/159067) refactor(nextcloud-talk): receive webhooks on Gateway routes
- [#159103](https://github.com/openclaw/openclaw/pull/159103) fix(plugins): reduce long garbage collection pauses during streaming
- [#159261](https://github.com/openclaw/openclaw/pull/159261) improve(ios): shorten CI failure diagnostic collection
- [#159260](https://github.com/openclaw/openclaw/pull/159260) fix(gateway): retain earliest scheduled deadlines
- [#159212](https://github.com/openclaw/openclaw/pull/159212) fix(cli): render JSON errors when agent rejects /compact
- [#159163](https://github.com/openclaw/openclaw/pull/159163) fix(chat): recover history reads across resets and rebuilds
- [#159166](https://github.com/openclaw/openclaw/pull/159166) fix(tui): keep history and sends on the selected session
- [#159225](https://github.com/openclaw/openclaw/pull/159225) refactor(codex): deslop codex harness fourth pass
- [#159152](https://github.com/openclaw/openclaw/pull/159152) improve(gateway): reduce repeated session ancestor traffic
- [#159105](https://github.com/openclaw/openclaw/pull/159105) fix: stop compaction recovery when a run times out
- [#159237](https://github.com/openclaw/openclaw/pull/159237) fix(gateway): report unknown model providers as invalid requests
- [#159065](https://github.com/openclaw/openclaw/pull/159065) fix(ios): stabilize native release qualification
- [#159060](https://github.com/openclaw/openclaw/pull/159060) fix(android): prevent Google Play App Actions rejection
- [#159241](https://github.com/openclaw/openclaw/pull/159241) chore(ui): refresh control ui locales
- [#158882](https://github.com/openclaw/openclaw/pull/158882) test(core,ui,plugins): remove low-value tests (batch d017)
- [#159200](https://github.com/openclaw/openclaw/pull/159200) fix(test): keep maintainer and cron fixtures isolated
- [#159102](https://github.com/openclaw/openclaw/pull/159102) perf(gateway): reduce stalls when many sessions start
- [#159155](https://github.com/openclaw/openclaw/pull/159155) perf(sessions): retain rows across unrelated config commits
- [#159235](https://github.com/openclaw/openclaw/pull/159235) fix(ui): simplify collaborator draft states and expiry
- [#159153](https://github.com/openclaw/openclaw/pull/159153) perf(sessions): reuse list selections across transcript updates
- [#159210](https://github.com/openclaw/openclaw/pull/159210) test: speed up supervisor process fixtures
- [#159213](https://github.com/openclaw/openclaw/pull/159213) fix(cli): reject unknown root options instead of launching onboarding
- [#159126](https://github.com/openclaw/openclaw/pull/159126) refactor(gateway): schedule media maintenance with the kernel
- [#158984](https://github.com/openclaw/openclaw/pull/158984) refactor(core): deslop system-agent, claws, talk, security and worker second pass
- [#159211](https://github.com/openclaw/openclaw/pull/159211) chore(i18n): refresh native locales
- [#158889](https://github.com/openclaw/openclaw/pull/158889) refactor(qa-lab): deslop qa-lab third pass
- [#159195](https://github.com/openclaw/openclaw/pull/159195) perf(crabbox): keep concurrent worktrees on warm source mirrors
- [#159198](https://github.com/openclaw/openclaw/pull/159198) fix(google): recover interrupted Interactions streams and release their reader
- [#131682](https://github.com/openclaw/openclaw/pull/131682) refactor(macos): keep signer-only fixtures with signing tests
- [#159098](https://github.com/openclaw/openclaw/pull/159098) test: accelerate provider shutdown recovery coverage
- [#158776](https://github.com/openclaw/openclaw/pull/158776) refactor(cron): own retained run transcript access
- [#159122](https://github.com/openclaw/openclaw/pull/159122) chore(ui): refresh control ui locales
- [#159008](https://github.com/openclaw/openclaw/pull/159008) test(telegram): await Gateway ingress fixture settlement
- [#158846](https://github.com/openclaw/openclaw/pull/158846) refactor(ui): deslop pages third pass
- [#159101](https://github.com/openclaw/openclaw/pull/159101) perf(team-reports): keep collection off the Gateway event loop
- [#159076](https://github.com/openclaw/openclaw/pull/159076) fix(memory): Chinese queries lose English terms written without spaces
- [#158939](https://github.com/openclaw/openclaw/pull/158939) refactor(msteams): receive webhooks on Gateway routes
- [#159033](https://github.com/openclaw/openclaw/pull/159033) fix(plugins): preserve source custody during concurrent repairs
- [#159185](https://github.com/openclaw/openclaw/pull/159185) fix(agents): record partial subagent completion delivery as incomplete
- [#159087](https://github.com/openclaw/openclaw/pull/159087) fix(workers): stop workspace transfers after caller authority closes
- [#159091](https://github.com/openclaw/openclaw/pull/159091) refactor(ios): deslop iOS app second pass

#### 🐛 New Issues
- [#158936](https://github.com/openclaw/openclaw/issues/158936) [Bug]: macOS app readiness watchdog SIGTERMs a slow-starting gateway, causing a restart loop until the app is quit `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬5
- [#158607](https://github.com/openclaw/openclaw/issues/158607) [Bug]: Deferred context maintenance loses admission ownership after caller release `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#158944](https://github.com/openclaw/openclaw/issues/158944) [Bug]: Expired (and cancelled) plugin approvals render as "Denied" in native channel approval cards `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#158710](https://github.com/openclaw/openclaw/issues/158710) [Bug]: Codex omits OAuth connect tool for second per-requester MCP when another is authenticated `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#158900](https://github.com/openclaw/openclaw/issues/158900) Mid-turn auto-compaction fails with "prompt too large (precheck)" when a single tool result pushes the prompt over `contextTokens`, although the model window is much larger `P1` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦐 gold shrimp` 💬3
- [#158922](https://github.com/openclaw/openclaw/issues/158922) claude-cli models report `available: false` after Gateway restart on main, hiding the Control UI Effort picker (regression after #157459) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#158874](https://github.com/openclaw/openclaw/issues/158874) [Bug]: video/music candidate failures log at debug without the error, while image logs at warn with it `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#158800](https://github.com/openclaw/openclaw/issues/158800) [Feature]: Browse and fork prior channel-chat segments after /new in Control UI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#158898](https://github.com/openclaw/openclaw/issues/158898) Runtime context message is rebuilt and appended last on every model call, so it is always uncached input (large cost on providers with prefix caching) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#158890](https://github.com/openclaw/openclaw/issues/158890) [Bug]: cron warning diagnostics are not recorded when an exec tool call fails input validation (the remedy cited when closing #121626 does not cover this path) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#158876](https://github.com/openclaw/openclaw/issues/158876) [Bug]: bundled openai video provider still advertises sora-2 after the OpenAI Videos API shut down `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#158788](https://github.com/openclaw/openclaw/issues/158788) Cron agent turns fail at setup with DataCloneError on Windows (2026.9.6) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#158675](https://github.com/openclaw/openclaw/issues/158675) [Bug]: Code Mode rejects require()/module access with no guidance on replacement tools, causing repeated agent failures `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#158759](https://github.com/openclaw/openclaw/issues/158759) Model fallback rejects the current keyed user after runtime-context injection `P1` `impact:session-state` `impact:auth-provider` 💬2
- [#158760](https://github.com/openclaw/openclaw/issues/158760) [Feature]: report subagent model-selection provenance `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#159276](https://github.com/openclaw/openclaw/issues/159276) Native Ollama: plugin runtime.llm.complete() does not serialize reasoning: off as think: false `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#158966](https://github.com/openclaw/openclaw/issues/158966) browser: credentialed CDP WebSocket URLs reach model-facing tab results 💬2
- [#158832](https://github.com/openclaw/openclaw/issues/158832) [Feature]: doctor warns for capability-gated core tool show_widget pulled in via group:openclaw, with no config-level way to resolve it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#158924](https://github.com/openclaw/openclaw/issues/158924) [Bug]: Control UI sidebar agent card renders image avatar as a cropped sliver (image box overflows its 28x28 container) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#158917](https://github.com/openclaw/openclaw/issues/158917) [Bug]: memory_search intermittently times out at 30s, returns late keyword-only partial results on Gemini `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#159278](https://github.com/openclaw/openclaw/issues/159278) [Bug]: 2026.9.6 Gateway continuously regrows plugin captures live (~2.4 GB/min); restart does not stop it `P1` `impact:other` 💬2
- [#158921](https://github.com/openclaw/openclaw/issues/158921) [Feature]: Native contributor admission, lifecycle and stop contract `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#158920](https://github.com/openclaw/openclaw/issues/158920) [Feature]: Supported recovery coverage for opaque Workboard and native-harness state `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#158897](https://github.com/openclaw/openclaw/issues/158897) feat(memory-core): make Dreaming MEMORY.md promotion size budget configurable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#159230](https://github.com/openclaw/openclaw/issues/159230) message_tool_only: stranded-reply recovery re-prompts the model to publish its private final and force-sends an English error notice to the DM (no config to disable) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#159229](https://github.com/openclaw/openclaw/issues/159229) [Bug]: backup create spins at 100% CPU in state-snapshot phase and never writes; FIFOs in state dir also stall archive `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#158894](https://github.com/openclaw/openclaw/issues/158894) [Bug]: Image generation fails with ChatGPT OAuth when the plan does not offer gpt-6-astra `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#159228](https://github.com/openclaw/openclaw/issues/159228) [Bug]: backup sqlite create --agent snapshots an empty agents/<id>/openclaw-agent.sqlite instead of the live agent store (verified but empty backups) `clawsweeper:needs-live-repro` `impact:session-state` `impact:data-loss` `P0` 💬2
- [#158875](https://github.com/openclaw/openclaw/issues/158875) [Bug]: task_runs.source_id and task status name the first candidate provider, not the provider that produced the media `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#158765](https://github.com/openclaw/openclaw/issues/158765) [Feature]: Add a low-memory Qwen3.8 27B profile for Desktop Local AI using PrismML Bonsai 2 `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#158668](https://github.com/openclaw/openclaw/issues/158668) Update failure: unexpected-error (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#158822](https://github.com/openclaw/openclaw/issues/158822) [Feature]: memory-lancedb should register a memory search runtime so the Control UI Memory page works `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#158851](https://github.com/openclaw/openclaw/issues/158851) [Bug]: Shutdown drain logs only task counts (discarding computed blocker names) and has no per-task deadline — a yielded subagent task blocks a stop indefinitely `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#158761](https://github.com/openclaw/openclaw/issues/158761) [Feature]: Make Desktop Local AI hardware-aware with multiple managed runtime profiles `enhancement` `P2` `impact:ux-friction` 💬2
- [#158855](https://github.com/openclaw/openclaw/issues/158855) Update failure: not-git-install (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#158550](https://github.com/openclaw/openclaw/issues/158550) Plugin approval requests fail permanently after the first CLI-turn client disconnects (claude-cli backend, MCP loopback) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-security-review` 💬2
- [#159184](https://github.com/openclaw/openclaw/issues/159184) [Bug]: HTTP 400 with transient inner `code` triggers 9 same-model retries (misclassified as rate_limit) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#158685](https://github.com/openclaw/openclaw/issues/158685) Curate plugin category ordering and add Computer use discovery `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬2
- [#159188](https://github.com/openclaw/openclaw/issues/159188) [Bug]: googlechat setup.test.ts lifecycle tests fail on a cold Vitest transform cache `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:not-repro-on-main` 💬2
- [#158540](https://github.com/openclaw/openclaw/issues/158540) [Feature]: Native Wayland Quick Chat shortcuts `enhancement` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬2
- [#159186](https://github.com/openclaw/openclaw/issues/159186) [Bug]: Transient `app/read` timeout during Codex plugin thread config build is treated as "app policy changed" and rotates the native thread (2026.9.5) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#159187](https://github.com/openclaw/openclaw/issues/159187) ci: full Testbox gate exits 255 at two hours without termination diagnostics `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#159080](https://github.com/openclaw/openclaw/issues/159080) [Bug]: Runtime-bound LINE conversations fail with AgentSelectionRequiredError on multi-agent installs `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#159256](https://github.com/openclaw/openclaw/issues/159256) claude-cli: output_tokens from final result event discarded, usage undercounted ~90-99% 💬1
- [#159252](https://github.com/openclaw/openclaw/issues/159252) secrets store list: help says "non-secret metadata" but env-kind values are printed in cleartext 💬1
- [#159257](https://github.com/openclaw/openclaw/issues/159257) Update failure: runtime-verification-failed (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#159249](https://github.com/openclaw/openclaw/issues/159249) zalouser: inbound files, photos and videos reach the agent only as a CDN link, never as media `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#159217](https://github.com/openclaw/openclaw/issues/159217) [Bug]: Delivered Discord sends appear as aborted by user in native Codex exec results `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#159264](https://github.com/openclaw/openclaw/issues/159264) Agent-DB cold open runs a synchronous full integrity check (~0.25 s/MB), blocking the reply path past the per-chat cap `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#159267](https://github.com/openclaw/openclaw/issues/159267) Anthropic model pickers offer models the configured API key cannot use (model not found, HTTP 404) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#159222](https://github.com/openclaw/openclaw/issues/159222) [Bug]: Windows 2026.9.6: `gateway restart` / `gateway stop` fail with "disk I/O error" (SQLITE_IOERR_TRUNCATE) — owner lease is read right after `schtasks /End` `bug` `regression` 💬1
- [#159238](https://github.com/openclaw/openclaw/issues/159238) [Feature]: configurable retention for rolling gateway logs (currently hard-coded 24 h) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#159233](https://github.com/openclaw/openclaw/issues/159233) [Bug]: the first image-bearing turn in a fresh gateway process eagerly builds the full media-understanding provider registry, even when native vision skips it entirely `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#159231](https://github.com/openclaw/openclaw/issues/159231) [Bug]: first image turn in a fresh gateway process loads the full model catalog even when the active model declares image input `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#159215](https://github.com/openclaw/openclaw/issues/159215) edit, apply_patch, and write let an agent submit a mutation without ever verifying the file's current content `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#159202](https://github.com/openclaw/openclaw/issues/159202) Docs never explain image replay cost with native-vision models or the tools.media.models[] opt-out `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#159203](https://github.com/openclaw/openclaw/issues/159203) extractStructuredWithModel fails on every provider except codex `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#159201](https://github.com/openclaw/openclaw/issues/159201) Images from a run-triggering user message replay at full token cost for the entire tool loop `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#159121](https://github.com/openclaw/openclaw/issues/159121) [Bug]: gateway probe / security audit --deep on loopback looks up the cached device token in the legacy table, attaches no identity, and reports missing scope: operator.read `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#159112](https://github.com/openclaw/openclaw/issues/159112) [Bug]: Doctor legacy capture cleanup blocked by unrelated macOS processes with unreadable argv `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#159196](https://github.com/openclaw/openclaw/issues/159196) Anthropic preserved thinking: replayed thinking blocks dropped on (nearly) every turn with Fable 5.1 — prefix invalidated by per-turn system prompt rebuild / transcript edits `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#159162](https://github.com/openclaw/openclaw/issues/159162) docs: explain Screenpipe recorder setup in MCP recipes `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#159172](https://github.com/openclaw/openclaw/issues/159172) secrets tool: request returns no_answer without ever rendering a masked prompt (channel-less Gateway) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1

#### 🔒 Closed Issues
- [#155753](https://github.com/openclaw/openclaw/issues/155753) [Bug]: Model-catalog expiry/rebuild loop pins one CPU core — readFullModelCatalog() re-triggers refreshExpiredCatalog() on every read (identifies worker in #154276 / #153422)
- [#139847](https://github.com/openclaw/openclaw/issues/139847) [Bug]: message sent while a reply run is active is dropped — "Reply operation has no active tool authority snapshot" (regression in 2026.9.2)
- [#157568](https://github.com/openclaw/openclaw/issues/157568) [Bug]: 2026.9.6 WSL Gateway regrows 7.5 GB of live plugin captures in 4 minutes despite 60s reclamation settings
- [#155728](https://github.com/openclaw/openclaw/issues/155728) [Bug]: Plugin artifact capture double-buffers large binary assets (~544 MiB allocation burst for Codex)
- [#157846](https://github.com/openclaw/openclaw/issues/157846) [Bug]: Upgrade migrates state and agent databases irreversibly before the new build is verified, leaving no downgrade path
- [#157209](https://github.com/openclaw/openclaw/issues/157209) claude-cli: foreground `Agent`/Task tool calls are killed by stuck-session recovery after 15 min, because subagent records (`parent_tool_use_id`) never count as progress
- [#138388](https://github.com/openclaw/openclaw/issues/138388) Auto-rotated auth profile IDs prevent active-turn steering
- [#101923](https://github.com/openclaw/openclaw/issues/101923) media:// image references bypass the resize ladder; media-understanding sends unresized images (oversized channel photos fail)
- [#157460](https://github.com/openclaw/openclaw/issues/157460) [Bug]: Resident session catalog keeps re-listing all ~10k native Codex threads after upgrading to 2026.9.6, pinning 1.5–2.5 CPU cores
- [#110974](https://github.com/openclaw/openclaw/issues/110974) [Bug]: Codex mid-turn usageLimitExceeded (willRetry) stalls the turn until an outer timeout instead of failing fast with the usage-limit error
- [#157811](https://github.com/openclaw/openclaw/issues/157811) `automations` tool returns a result violating its own outputSchema (`state.scheduleErrorCount`), making update/get unusable
- [#156023](https://github.com/openclaw/openclaw/issues/156023) openclaw update (npm) fails reproducibly at "global install swap" (global-install-failed); failure record's stderrTail is front-truncated, hiding the root cause
- [#159278](https://github.com/openclaw/openclaw/issues/159278) [Bug]: 2026.9.6 Gateway continuously regrows plugin captures live (~2.4 GB/min); restart does not stop it
- [#155347](https://github.com/openclaw/openclaw/issues/155347) 9.5 recurrence of #146851: 8 monitor heartbeats wedge into permanent 'running' for 12.7h (trace shape: job id / receipt / session / terminal outcome)
- [#151562](https://github.com/openclaw/openclaw/issues/151562) Normal steering queues during sustained automatic fallback despite unchanged model selection
- [#159080](https://github.com/openclaw/openclaw/issues/159080) [Bug]: Runtime-bound LINE conversations fail with AgentSelectionRequiredError on multi-agent installs
- [#152667](https://github.com/openclaw/openclaw/issues/152667) Update failure: doctor-failed (2026.9.3)
- [#155704](https://github.com/openclaw/openclaw/issues/155704) Update failure: finalize:doctor (2026.9.5)
- [#158376](https://github.com/openclaw/openclaw/issues/158376) Isolated-polling Telegram updates spooled but never dispatched to group-message handler for specific channel accounts
- [#154349](https://github.com/openclaw/openclaw/issues/154349) /acp steer does not reach the running ACP turn; it queues as a follow-up prompt
- [#157999](https://github.com/openclaw/openclaw/issues/157999) Update failure: invalid-config (2026.9.5)
- [#157974](https://github.com/openclaw/openclaw/issues/157974) [Bug]: Dedicated /goal composer silently no-ops during initial history loading
- [#154296](https://github.com/openclaw/openclaw/issues/154296) Update failure: unexpected-error (2026.9.4)
- [#155451](https://github.com/openclaw/openclaw/issues/155451) [Bug]: Native Control UI steer queue advances only one message per Stop
- [#148731](https://github.com/openclaw/openclaw/issues/148731) [Bug]: One queued follow-up globally disables steering for every newer message in the session
- [#153923](https://github.com/openclaw/openclaw/issues/153923) [Bug]: browser upload sends a filename ending in a dot or space when the name exceeds 180 bytes

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 249,245 · **Open issues:** 44,145 · **Last push:** <1h ago

On September 27, 2026, there were no new releases for Hermes Agent. Significant merged pull requests included crucial bug fixes, such as resolving a desktop app crash when printing from the Google Docs preview pane, and improvements in the plugin catalog with updates to various components, including Nerve to v0.3.0 and unitares to v0.3.1. The team also addressed issues related to the persistence of auxiliary model state after access failures, and the installation of glibc-only Python on musl Linux, which caused segfaults. Notably, there is a new high-priority issue regarding the pm-runtime launcher command line, which fails to be recognized by gateway identity matchers, potentially impacting its functionality.

#### ✅ Merged PRs
- [#102462](https://github.com/NousResearch/hermes-agent/pull/102462) fix: [Bug]: Desktop app crashes (SIGSEGV in macOS PrintCore) when printing a Google Doc from the preview pane (#101880)
- [#124591](https://github.com/NousResearch/hermes-agent/pull/124591) chore(plugin-catalog): bump Nerve to v0.3.0
- [#123012](https://github.com/NousResearch/hermes-agent/pull/123012) fix(uninstall): sweep both LaunchAgent labels and per-user app leftovers
- [#124534](https://github.com/NousResearch/hermes-agent/pull/124534) chore(plugin-catalog): bump unitares to 0.3.1
- [#124507](https://github.com/NousResearch/hermes-agent/pull/124507) catalog: pin secret-drop 1.4.0
- [#124504](https://github.com/NousResearch/hermes-agent/pull/124504) catalog: bump telegram-notify to v1.1.2
- [#124470](https://github.com/NousResearch/hermes-agent/pull/124470) catalog: update Pixel Worlds to v0.3.0
- [#123007](https://github.com/NousResearch/hermes-agent/pull/123007) fix(desktop): give approval.respond the backend's 300s deadline
- [#123003](https://github.com/NousResearch/hermes-agent/pull/123003) fix(mcp): kill Windows stdio MCP orphan trees (Job Object + tree reaping)
- [#124384](https://github.com/NousResearch/hermes-agent/pull/124384) chore(plugin-catalog): pin claude-subscription-directsdk to ef73726 (effort + shared cwd)
- [#124341](https://github.com/NousResearch/hermes-agent/pull/124341) feat(plugin-catalog): add cortexlayer memory-provider entry
- [#124336](https://github.com/NousResearch/hermes-agent/pull/124336) feat(plugin-catalog): bump sigrex to 1.0.1 (add banner)
- [#124282](https://github.com/NousResearch/hermes-agent/pull/124282) plugin-catalog: bump thomas to v0.1.1

#### 🐛 New Issues
- [#124029](https://github.com/NousResearch/hermes-agent/issues/124029) pm-runtime launcher cmdline is never recognized by gateway identity matchers; `live_gateway_pid_for_home()` can never verify a shim-launched gateway `type/bug` `comp/cli` `comp/gateway` `area/config` 💬5
- [#123362](https://github.com/NousResearch/hermes-agent/issues/123362) [Bug]: compression fallback state can remain latched after auxiliary model access failure `type/bug` `comp/agent` `P2` `sweeper:risk-session-state` 💬3
- [#123682](https://github.com/NousResearch/hermes-agent/issues/123682) [Bug]: PM installs glibc-only Python/uv on musl Linux (Void/Alpine) → segfault, hermes unusable after update `type/bug` `comp/cli` `P0` `sweeper:risk-compatibility` 💬3
- [#123547](https://github.com/NousResearch/hermes-agent/issues/123547) POSIX cron .py scripts lose the generation environment (ModuleNotFoundError) `type/bug` `comp/cron` `P2` `sweeper:risk-compatibility` 💬1
- [#124583](https://github.com/NousResearch/hermes-agent/issues/124583) terminal tool: background hint references non-existent tool name process(action=...) `type/bug` `comp/tools` `tool/terminal` `P3` 💬1
- [#123344](https://github.com/NousResearch/hermes-agent/issues/123344) Secondary managed environment staged without install-stamp.json → persistent version 'vunknown' (pm repair/install don't heal) `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility` 💬1
- [#124551](https://github.com/NousResearch/hermes-agent/issues/124551) [Bug]: hardline false positive — data-only heredoc payload written to a file trips the shutdown/reboot command-position rule `type/bug` `comp/tools` `tool/terminal` `P2` 💬1
- [#124291](https://github.com/NousResearch/hermes-agent/issues/124291) [Feature]: delegation — child-scoped iteration-budget checkpoint notice `type/feature` `comp/agent` `tool/delegate` `area/config` 💬1
- [#124462](https://github.com/NousResearch/hermes-agent/issues/124462) [Bug]: --ignore-rules / --safe-mode and cron without a workdir still inject AGENTS.md into every subagent `type/bug` `comp/agent` `tool/delegate` `area/config` 💬1
- [#124547](https://github.com/NousResearch/hermes-agent/issues/124547) [Bug]: macOS .DS_Store breaks pm tool install — flatten_single_dir skips flattening, node fails verification ("bin/node missing"), Hermes can't start after update `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility` 💬1
- [#124627](https://github.com/NousResearch/hermes-agent/issues/124627) Agent-run `hermes` executes the stale PM build snapshot; a gateway install from an agent pins launchd to it
- [#124623](https://github.com/NousResearch/hermes-agent/issues/124623) credential pool: plugin refresh_credential results can overwrite row identity and classification fields `type/bug` `comp/agent` `comp/plugins` `area/auth`
- [#124617](https://github.com/NousResearch/hermes-agent/issues/124617) Desktop: 'Update all instances' aborts when it can't terminate the Desktop-owned SSH remote serve `type/bug` `backend/ssh` `P2` `sweeper:risk-compatibility`
- [#124618](https://github.com/NousResearch/hermes-agent/issues/124618) Desktop: saved SSH connection keeps reconnecting about every minute after Hermes was uninstalled on the remote ('Unsafe remote Hermes home') `type/bug` `backend/ssh` `P2` `comp/desktop`
- [#124610](https://github.com/NousResearch/hermes-agent/issues/124610) Sibling delegate_task(goal=...) calls in one turn run sequentially; one delegate_task(tasks=[...]) runs them in parallel `type/feature` `comp/agent` `tool/delegate` `area/config`
- [#124597](https://github.com/NousResearch/hermes-agent/issues/124597) [Report]: an agent-driven maintenance session that broke a working install — incidents and the harness gaps that allowed them `type/bug` `comp/agent` `comp/cli` `comp/gateway`
- [#124600](https://github.com/NousResearch/hermes-agent/issues/124600) Telegram: add a plan-aware progress card for long-running turns `type/feature` `comp/gateway` `platform/telegram` `P3`
- [#124588](https://github.com/NousResearch/hermes-agent/issues/124588) Gateway wrongly reported stopped while running: launchd gateway's inline-source cmdline fails the gateway identity check, and the false verdict deletes gateway.pid `type/bug` `comp/cli` `comp/gateway` `area/config`
- [#124593](https://github.com/NousResearch/hermes-agent/issues/124593) [Bug]: Restore after fallback, delegation and direct alias still match a bare-custom pool by base_url alone `type/bug` `comp/agent` `comp/cli` `tool/delegate`
- [#124581](https://github.com/NousResearch/hermes-agent/issues/124581) [Bug]: Desktop About panel reports Version 0.0.0 while the release declares 0.17.6 `type/bug` `P3` `sweeper:risk-compatibility` `comp/desktop`
- [#124582](https://github.com/NousResearch/hermes-agent/issues/124582) memory tool: replace silently overwrites the whole entry on partial edits (silent fact loss) `type/feature` `comp/agent` `tool/memory` `P3`
- [#124584](https://github.com/NousResearch/hermes-agent/issues/124584) [Bug]: an install with no channel record defaults to main (bleeding edge), so plain updates pull unreleased builds `type/feature` `comp/cli` `area/config` `P2`
- [#124560](https://github.com/NousResearch/hermes-agent/issues/124560) Proposal: bounded public link metadata for automatic session titles `type/feature` `comp/agent` `P3` `needs-decision`
- [#124561](https://github.com/NousResearch/hermes-agent/issues/124561) feat(gateway): per-channel overrides for busy_input_mode and Slack reply_in_thread `type/feature` `comp/gateway` `comp/plugins` `platform/slack`
- [#124562](https://github.com/NousResearch/hermes-agent/issues/124562) security-guidance: restore source file-type filters for six JS/DOM rules `type/bug` `comp/plugins` `P3`
- [#124563](https://github.com/NousResearch/hermes-agent/issues/124563) [Feature]: Explicit endpoint concurrency capability for auxiliary title scheduling `type/feature` `comp/agent` `area/config` `P3`
- [#124564](https://github.com/NousResearch/hermes-agent/issues/124564) Full backup can publish a truncated but CRC-valid ZIP member after a read failure `type/bug` `comp/cli` `P1` `sweeper:risk-compatibility`
- [#124565](https://github.com/NousResearch/hermes-agent/issues/124565) Proposal: isolated multi-account 1Password vault handles and fill routing `type/feature` `comp/agent` `tool/browser` `area/auth`
- [#124545](https://github.com/NousResearch/hermes-agent/issues/124545) [Bug]: Desktop leaves a sticky "Runtime not ready" error toast when the startup readiness probes lose the cold-start race `type/bug` `P3` `comp/desktop`
- [#124550](https://github.com/NousResearch/hermes-agent/issues/124550) [Bug]: SQLite snapshots can restart indefinitely under successful WAL writes `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility`
- [#124553](https://github.com/NousResearch/hermes-agent/issues/124553) [Bug]: parked profile restart stays stopped and status hides force-started gateways `type/bug` `comp/cli` `comp/gateway` `P2`
- [#124552](https://github.com/NousResearch/hermes-agent/issues/124552) [Bug]: Telegram rich messages flatten non-1 ordered lists following prose labels `type/bug` `comp/plugins` `platform/telegram` `P3`

#### 🔒 Closed Issues
- [#101318](https://github.com/NousResearch/hermes-agent/issues/101318) [Bug]: macOS Desktop — bottom composer drag still too easy; add disable option
- [#61457](https://github.com/NousResearch/hermes-agent/issues/61457) Desktop: remote gateway session cookie never persists after basic-auth login — immediate 401 no_cookie loop
- [#62311](https://github.com/NousResearch/hermes-agent/issues/62311) Bug: Desktop updater aborts with "venv shim still locked" when external processes (gateway/dashboard) hold the venv on Windows
- [#101880](https://github.com/NousResearch/hermes-agent/issues/101880) [Bug]: Desktop app crashes (SIGSEGV in macOS PrintCore) when printing a Google Doc from the preview pane
- [#60654](https://github.com/NousResearch/hermes-agent/issues/60654) TUI gateway: WebSocket frame stalls >10s causing desktop freeze and "request timed out" toasts

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 92,729 · **Open issues:** 8,436 · **Last push:** <1h ago

On September 27, 2026, there were no new releases for vLLM, but several important features and bug fixes were merged. Notably, PR #49300 added support for CUSTOM_MEM_POOL, while PR #57251 introduced Prometheus metrics for the SimpleCPUOffloadConnector. Additional merges included security enhancements in PR #58830, which hardened message sanitization, and a performance improvement in PR #58720 that indexed expert mapping lookups in RoutedExperts. Among the new issues, #58824 highlighted a bug where llama3_json streaming drops assistant content that begins with '{', but this issue does not affect non-streaming returns.

#### ✅ Merged PRs
- [#49300](https://github.com/vllm-project/vllm/pull/49300) [mooncake] support CUSTOM_MEM_POOL in vllm
- [#57251](https://github.com/vllm-project/vllm/pull/57251) [Metrics][KV Offload] Add Prometheus metrics for SimpleCPUOffloadConnector
- [#58846](https://github.com/vllm-project/vllm/pull/58846) [Kernel] Bump FlashKDA to keep the recurrent state in fp32
- [#56723](https://github.com/vllm-project/vllm/pull/56723) [PCP][DCP] Support DCP target model with non-DCP Dspark
- [#58586](https://github.com/vllm-project/vllm/pull/58586) [Kernel][DSV4.1] Fuse MoE finalize into the TP all-reduce + mHC boundary
- [#58810](https://github.com/vllm-project/vllm/pull/58810) [CI] Stabilize batch submission in full CUDA graph tests
- [#58832](https://github.com/vllm-project/vllm/pull/58832) [Security] Harden message sanitization
- [#57263](https://github.com/vllm-project/vllm/pull/57263) [Spec Decode] Enable Gemma4 DSpark adaptive verification with FlashInfer
- [#58499](https://github.com/vllm-project/vllm/pull/58499) [Bugfix][DSV4.1] Avoid host sync in ViT CUDA graph replay metadata
- [#58594](https://github.com/vllm-project/vllm/pull/58594) [GLM5.3 Bug] Fix sparse indexer attn topk backend selection
- [#58749](https://github.com/vllm-project/vllm/pull/58749) [CI] Reduce CUDA graph mode test overhead
- [#58046](https://github.com/vllm-project/vllm/pull/58046) [Mypy] Fix mypy typing for Qwen and Qianfan models
- [#58754](https://github.com/vllm-project/vllm/pull/58754) [Bugfix][Frontend] Detect Anthropic inline-system merge against the resolved chat template
- [#58786](https://github.com/vllm-project/vllm/pull/58786) [Bugfix] Fix Anthropic Thinking Disabled with P/D
- [#58720](https://github.com/vllm-project/vllm/pull/58720) [Perf][MoE] Index expert mapping lookups in RoutedExperts.load_weights
- [#58803](https://github.com/vllm-project/vllm/pull/58803) [Refactor] Remove dead tests utils
- [#58473](https://github.com/vllm-project/vllm/pull/58473) [Elastic EP] Fix EPLB load statistics during scaling
- [#58830](https://github.com/vllm-project/vllm/pull/58830) [Security] Gate per-request multimodal processor kwargs
- [#58609](https://github.com/vllm-project/vllm/pull/58609) [CI] Split (B200) Miscellaneous Kernels into mHC, FLA Ops and Misc named jobs
- [#58764](https://github.com/vllm-project/vllm/pull/58764) [CI] Only isolate the registry tests that need a fresh process
- [#58316](https://github.com/vllm-project/vllm/pull/58316) [Bugfix][Frontend][Rust Frontend] Update DeepSeek V4.1 Flash reasoning effort mappings
- [#57071](https://github.com/vllm-project/vllm/pull/57071) [Bugfix][ROCm] AMD-Quark mixed-precision DeepSeek-V4.1 support
- [#51520](https://github.com/vllm-project/vllm/pull/51520) [RL] Add sharding-aware NCCL M2N weight transfer
- [#58678](https://github.com/vllm-project/vllm/pull/58678) [Perf][DSv4.1] Shard the Engram wkv projection across TP ranks

#### 🐛 New Issues
- [#58824](https://github.com/vllm-project/vllm/issues/58824) [Bug]: llama3_json streaming drops assistant content that starts with '{' but is not a tool call (non-streaming returns it) `tool-calling` 💬3
- [#58858](https://github.com/vllm-project/vllm/issues/58858) [Question][ROCm] GLM-5.3-Flash kpool indexer: does the 640-token block table reach 32-pool pages on gfx942/gfx950 too? `rocm` `glm` 💬1
- [#58841](https://github.com/vllm-project/vllm/issues/58841) [Tracking] Gemma4 AITER QK-norm+RoPE+KVCache fusion + RoPE IR-op migration (ROCm) `rocm` 💬1
- [#58864](https://github.com/vllm-project/vllm/issues/58864) [Bug]: GLM-5.3-MXFP4 DP8 without EP crashes during FlashInfer autotune with CUDA illegal memory access `bug` `glm`
- [#58850](https://github.com/vllm-project/vllm/issues/58850) [Bug]: Intermittent Xid 31 MMU fault in pynccl all_reduce during CUDA graph `bug`
- [#58849](https://github.com/vllm-project/vllm/issues/58849) [Performance]: WSL2: `VLLM_WSL2_ENABLE_PIN_MEMORY=1` makes the default V2 runner ~12% faster per decode step `performance`
- [#58825](https://github.com/vllm-project/vllm/issues/58825) [Bug]: gpt-oss (HarmonyParser): a stray 'commentary to=assistant' header is returned as a tool call named 'assistant<|channel|>analysis' `tool-calling` `gpt-oss`

#### 🔒 Closed Issues
- [#42803](https://github.com/vllm-project/vllm/issues/42803) [Bug] MiMoV2 load_weights: fused qkv_proj path uses naive chunk(tp,dim=0)[rank], misplaces Q values into K/V slots
- [#51798](https://github.com/vllm-project/vllm/issues/51798) [Bug]: Kimi-K3-NVFP4 on 8xB300 produces degenerate, incoherent output in the reasoning channel on v0.27.0
- [#43301](https://github.com/vllm-project/vllm/issues/43301) [Hybrid SSM] Investigate accuracy divergence between `mamba_chunk_scan` and `selective_state_update` kernels
- [#58727](https://github.com/vllm-project/vllm/issues/58727) [Bug][Frontend]: Anthropic /v1/messages always hoists inline system messages because merge detection checks the CLI --chat-template (None) instead of the model's template

### SGLang (`sgl-project/sglang`)

**Stars:** 36,457 · **Open issues:** 5,376 · **Last push:** <1h ago

On September 27, 2026, there were no new releases for SGLang. Significant merged pull requests included #41377, which adds support for an explicit triton moe_runner_backend for mxfp8 on ROCm, and #41325, which enhances sliding-window caching and speculative batch padding for better extensibility. A notable refactor is embodied in #41252, focusing on the preparation of attention and MLP steps at construction. Among the new issues, #41372 highlights a critical bug with the scheduler where Req.decoded_text is never written, leading to a deadlock situation in schedule_batch.py.

#### ✅ Merged PRs
- [#41377](https://github.com/sgl-project/sglang/pull/41377) [AMD] Honor an explicit triton moe_runner_backend for mxfp8 on ROCm
- [#41270](https://github.com/sgl-project/sglang/pull/41270) [cherrypick from #40986] [Sampling] Stream sampling masks as per-request arrays
- [#41328](https://github.com/sgl-project/sglang/pull/41328) [MemCache] Fix LMCache component cursors and per-cache backend selection
- [#41325](https://github.com/sgl-project/sglang/pull/41325) Make sliding-window caching and speculative batch padding extensible
- [#41356](https://github.com/sgl-project/sglang/pull/41356) [AMD] Fix jit broken on rocm env
- [#41292](https://github.com/sgl-project/sglang/pull/41292) Pin triton_kernels num_warps for MXFP4 MoE below Hopper (6x gpt-oss decode on RTX 4090)
- [#41321](https://github.com/sgl-project/sglang/pull/41321) [CI] Merge the Kimi-Linear PD DCP4 nightly tests and drop exact-token parity
- [#41271](https://github.com/sgl-project/sglang/pull/41271) [cherrypick from #41235] [PD] Keep the sampling mask of a replayed rebootstrap token
- [#41349](https://github.com/sgl-project/sglang/pull/41349) [CI] Move DeepSelect into the attention kernel group to fix the namespace test
- [#41342](https://github.com/sgl-project/sglang/pull/41342) [sgl-router] Book the input_ids forwarding outcome only for built bodies
- [#41341](https://github.com/sgl-project/sglang/pull/41341) [CI] Add __main__ entry to test_deep_select.py
- [#41261](https://github.com/sgl-project/sglang/pull/41261) [PD] fix: cache resumed decode-radix requests from root instead of an unlocked re-match
- [#41256](https://github.com/sgl-project/sglang/pull/41256) [Refactor] Pick the two-batch-overlap split's layout moves once and remove execute
- [#41257](https://github.com/sgl-project/sglang/pull/41257) [Refactor] Choose a dense layer's boundaries under attention DP from both sides' declarations
- [#41255](https://github.com/sgl-project/sglang/pull/41255) [Refactor] Run the LayerNorm SP region's boundary steps in the communicator itself
- [#41254](https://github.com/sgl-project/sglang/pull/41254) [Refactor] Declare at construction the layers whose FFN completes its own reduction
- [#41253](https://github.com/sgl-project/sglang/pull/41253) [Refactor] Drive an FFN exit's flags and its completion from one selection
- [#41252](https://github.com/sgl-project/sglang/pull/41252) [Refactor] Choose prepare_attn / prepare_mlp steps and fused kernels at construction
- [#40556](https://github.com/sgl-project/sglang/pull/40556) [DeepSeek V4.1] Add DeepSelect JIT kernel.
- [#41223](https://github.com/sgl-project/sglang/pull/41223) [Perf] Mamba2 selective_state_update up to 2x faster on B200 via 8x1 launch config for dstate 128 (+7.5% Nemotron-3-Super serving)
- [#41188](https://github.com/sgl-project/sglang/pull/41188) [Score API] Setwise scoring: CausalLM support (batched + --enable-mis)
- [#41311](https://github.com/sgl-project/sglang/pull/41311) [DSA] Fix the pooled-indexer breakable prefill bridge under DP attention
- [#41125](https://github.com/sgl-project/sglang/pull/41125) [DSv4.1] Move the low-ratio index top-k into dsv4/low_ratio_indexer
- [#41185](https://github.com/sgl-project/sglang/pull/41185) [sgl-router] Track input_ids forwarding outcomes per chat request
- [#41243](https://github.com/sgl-project/sglang/pull/41243) [Refactor] Restore logical kernel groups and test organization
- [#41298](https://github.com/sgl-project/sglang/pull/41298) [diffusion] Copy small files into overlay materialized trees instead of linking them
- [#41150](https://github.com/sgl-project/sglang/pull/41150) [Bug][Diffusion] Fix Qwen-Image 2.1 default RGBA output
- [#41276](https://github.com/sgl-project/sglang/pull/41276) [MemCache] Unify component eviction cursors and lock receipts
- [#36505](https://github.com/sgl-project/sglang/pull/36505) [ROCm][Perf] aiter: page-level KV view for gfx950 fp8 page-64 asm prefill
- [#41297](https://github.com/sgl-project/sglang/pull/41297) [Test] Remove more unit tests that mirror implementation or never run in CI
- [#40854](https://github.com/sgl-project/sglang/pull/40854) [DSA] Chunk the kpool indexer MQA logits by query rows under a free-memory budget
- [#41011](https://github.com/sgl-project/sglang/pull/41011) [diffusion] Add native Anima Base v1.0 support
- [#41291](https://github.com/sgl-project/sglang/pull/41291) [DSv4.1] Move the ratio-1/2 index top-k ops into kernels/ops/attention/dsv4
- [#40490](https://github.com/sgl-project/sglang/pull/40490) [diffusion] Fuse lossless Klein packed QK RMSNorm and RoPE on Hopper

#### 🐛 New Issues
- [#41372](https://github.com/sgl-project/sglang/issues/41372) [Bug]: scheduler Req.decoded_text is never written: dead stop-string fallback at schedule_batch.py:1846 and empty DecodeStatus seed on eviction re-init 💬1
- [#41351](https://github.com/sgl-project/sglang/issues/41351) [Bug] Potential hybrid GDN Radix-cache selected-logprob drift on repeated branch scoring 💬1
- [#41363](https://github.com/sgl-project/sglang/issues/41363) [CI] ltx_2_3_hq_pipeline perf checks fail on most diffusion PRs (load / decode / denoise variance)
- [#41332](https://github.com/sgl-project/sglang/issues/41332) Optional per-request settlement rail (HTTP 402) for metered self-hosted serving
- [#41317](https://github.com/sgl-project/sglang/issues/41317) [Bug] DeepSeek V3.2/V4 DSML detector strips whitespace (e.g. trailing newline) from string="true" parameter values
- [#41316](https://github.com/sgl-project/sglang/issues/41316) [Bug] Gemma4Detector returns null and exponent-notation numbers as strings
- [#41315](https://github.com/sgl-project/sglang/issues/41315) [Bug] gpt-oss detector misses tool calls that are the first message or lack <|constrain|>json
- [#41299](https://github.com/sgl-project/sglang/issues/41299) [Bug][ROCm] Qwen3.8-Flash-Next (qwen4_exp) crashes with HSAIL hardware exception 0x1016 on the first 16k prefill chunk, gfx950 TP1

#### 🔒 Closed Issues
- [#32569](https://github.com/sgl-project/sglang/issues/32569) [Bug] Kimi K3 DSPARK speculative decoding crashes with TypeError: 'NoneType' object is not callable in top_k_renorm_prob
- [#30936](https://github.com/sgl-project/sglang/issues/30936) [Bug] nvcc triger Segmentation fault
- [#32336](https://github.com/sgl-project/sglang/issues/32336) [Model] Support LingBot-Video Models
- [#32693](https://github.com/sgl-project/sglang/issues/32693) [Bug] HiCache NIXL clear() deletes ALL files under the base dir, including other models'/deployments' data on a shared mount
- [#32669](https://github.com/sgl-project/sglang/issues/32669) [Bug] DeepSeek-V4 non-EP TBO uses TP-wide metadata and combine for attention-TP > 1
- [#32666](https://github.com/sgl-project/sglang/issues/32666) [Bug] Frozen-KV MTP corrupts output at concurrency >=2 with NO grammar involved - gated on draft depth; depth 4 also fails verify-graph capture
- [#32652](https://github.com/sgl-project/sglang/issues/32652) [Bug] [Security tracking][PD disaggregation] Decode control-path failure can remain invisible to health checks
- [#32646](https://github.com/sgl-project/sglang/issues/32646) [Model] Support Microsoft Mage-VL (4B Codec-Native VLM)
- [#32519](https://github.com/sgl-project/sglang/issues/32519) [NPU] Day0 Support Kimi-K3 on NPU
- [#40949](https://github.com/sgl-project/sglang/issues/40949) ValueError: pool memory leak detected! crash with LMCache (MP mode) + EAGLE speculative decoding after a load-back hit (page_size > 1)

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 129,616 · **Open issues:** 2,560 · **Last push:** 4h ago

On September 27, 2026, version b11205 was released, providing support for Nemotron 3 Puzzle state size 96 in the ssm_scan operation. In addition, version b11203 introduced F16 input capability for the FWHT in CUDA, enhancing its functionality for tasks requiring reduced precision. Significant merged features include a fix for wake_fd warnings on Windows (#29479) and the implementation of a "sameas" test in jinja (#29448). A notable new issue has emerged concerning an evaluation bug on Snapdragon 7 Gen 4, where specific operations return infinite values, signaling potential instability in that environment.

#### 🚀 New Releases
- [b11205](https://github.com/ggml-org/llama.cpp/releases/tag/b11205) b11205
- [b11203](https://github.com/ggml-org/llama.cpp/releases/tag/b11203) b11203
- [b11202](https://github.com/ggml-org/llama.cpp/releases/tag/b11202) b11202
- [b11201](https://github.com/ggml-org/llama.cpp/releases/tag/b11201) b11201
- [b11200](https://github.com/ggml-org/llama.cpp/releases/tag/b11200) b11200
- [b11199](https://github.com/ggml-org/llama.cpp/releases/tag/b11199) b11199
- [b11195](https://github.com/ggml-org/llama.cpp/releases/tag/b11195) b11195
- [b11194](https://github.com/ggml-org/llama.cpp/releases/tag/b11194) b11194
- [b11193](https://github.com/ggml-org/llama.cpp/releases/tag/b11193) b11193

#### ✅ Merged PRs
- [#28717](https://github.com/ggml-org/llama.cpp/pull/28717) CUDA: support state size 96 for ssm_scan op for Nemotron 3 Puzzle
- [#29481](https://github.com/ggml-org/llama.cpp/pull/29481) musa: build the docker images from the PH1 MUSA SDK image
- [#29096](https://github.com/ggml-org/llama.cpp/pull/29096) cuda: add F16 input to the FWHT
- [#29479](https://github.com/ggml-org/llama.cpp/pull/29479) server : fix wake_fd warning on Windows
- [#29437](https://github.com/ggml-org/llama.cpp/pull/29437) Revert "Change max context length for auto-fitting with unified KV"
- [#27530](https://github.com/ggml-org/llama.cpp/pull/27530) llama : fix K/V and recurrent state cleanup after failed restores
- [#29448](https://github.com/ggml-org/llama.cpp/pull/29448) jinja : implement sameas test
- [#29468](https://github.com/ggml-org/llama.cpp/pull/29468) jinja : fix compile error
- [#29443](https://github.com/ggml-org/llama.cpp/pull/29443) jinja : support noncall test statements with arg
- [#28968](https://github.com/ggml-org/llama.cpp/pull/28968) llama-bench : add --repack switch option
- [#27851](https://github.com/ggml-org/llama.cpp/pull/27851) ggml-cpu: tiled mul_mat for k-quants
- [#29439](https://github.com/ggml-org/llama.cpp/pull/29439) opencl: add bin kernel `kernel_gemm_noshuffle_q8_0_q8_1_dp4a_ila_a8_bin`
- [#29449](https://github.com/ggml-org/llama.cpp/pull/29449) hexagon: find software divide calls using binary inspection tool

#### 🐛 New Issues
- [#29473](https://github.com/ggml-org/llama.cpp/issues/29473) Eval bug: ggml-hexagon on Snapdragon 7 Gen 4 (SM7750, HTP v73) - HMX MUL_MAT returns inf for n>=5, FLASH_ATTN_EXT and GATED_DELTA_NET fail, garbled output 💬2
- [#29452](https://github.com/ggml-org/llama.cpp/issues/29452) Misc. bug: [SYCL] failing on implicit GEMM / empty kernel during CONV_3D `bug-unconfirmed` 💬1
- [#29494](https://github.com/ggml-org/llama.cpp/issues/29494) Misc. bug: repeat_last_n / dry_penalty_last_n are not bounded, causing penalties/DRY sampler allocate multi-GB zero-filled buffer and server OOM `bug-unconfirmed` 💬1
- [#29487](https://github.com/ggml-org/llama.cpp/issues/29487) Misc. bug: Backend Top-K output buffer is still allocated at full vocabulary width `bug-unconfirmed` 💬1
- [#29455](https://github.com/ggml-org/llama.cpp/issues/29455) Eval bug: [Vulkan] startup crash after PR # 26081 (Confirmed regression via git bisect) `bug-unconfirmed` 💬1
- [#29456](https://github.com/ggml-org/llama.cpp/issues/29456) Misc. bug: llama-server does not cap logprobs / top_logprobs (n_probs) `bug-unconfirmed` 💬1
- [#29505](https://github.com/ggml-org/llama.cpp/issues/29505) Misc. bug: Dead link in tools/server/README.md `bug-unconfirmed`
- [#29501](https://github.com/ggml-org/llama.cpp/issues/29501) Eval bug: Gemma 4 assistant (draft-mtp) aborts with `--split-mode tensor` and an uneven `--tensor-split` `bug-unconfirmed`
- [#29499](https://github.com/ggml-org/llama.cpp/issues/29499) server: llama-server hangs before serving any request on Jetson Orin NX (aarch64, L4T 36.4.7) after the b8638->b9016 server rewrite
- [#29498](https://github.com/ggml-org/llama.cpp/issues/29498) bug: a client-set `X-Conversation-Id` disables disconnect-cancellation and accumulates uncapped resumable-stream sessions, can cause memory DoS `bug-unconfirmed`
- [#29495](https://github.com/ggml-org/llama.cpp/issues/29495) bug: the GBNF grammar-text parser recurses without a depth limit, can cause stack-overflows and crash server (SIGSEGV) `bug-unconfirmed`
- [#29493](https://github.com/ggml-org/llama.cpp/issues/29493) Eval bug: qwen35 dirty-ctx full-restore in test-recurrent-state-rollback fails deterministically (CPU+CUDA, q8_0+f16) while arch is whitelisted
- [#29491](https://github.com/ggml-org/llama.cpp/issues/29491) [RFC] Inkling architecture support with CPU-first implementation, split from #25731 `enhancement`
- [#29485](https://github.com/ggml-org/llama.cpp/issues/29485) Misc. bug: `llama-server` prints `llama_server: initializing ...` message with options such as `--completion-bash` `bug-unconfirmed`
- [#29484](https://github.com/ggml-org/llama.cpp/issues/29484) Eval bug: test-save-load-state aborts on hrm_text with GGML_SCHED_NO_REALLOC (input-layer tensor makes the backend assignment depend on batch size) `bug-unconfirmed`
- [#29466](https://github.com/ggml-org/llama.cpp/issues/29466) Eval bug: --split-mode tensor crashes with GGML_ASSERT(bcj.nodes[i]) on second request (2x/3x Tesla P100, CUDA) `bug-unconfirmed`
- [#29465](https://github.com/ggml-org/llama.cpp/issues/29465) Eval bug: Metal: per-file mmap mapping spans CPU-resident tensors, so a 27 GiB lazy-read table between GPU tensors counts against the GPU working set (Qwen3.8-Flash-Next OOM)
- [#29462](https://github.com/ggml-org/llama.cpp/issues/29462) bug: the json-schema/GBNF grammar builder does not bound the repetition count — a contradictory or huge `min*` makes it allocate unboundedly and OOM-kills the server `bug-unconfirmed`
- [#29458](https://github.com/ggml-org/llama.cpp/issues/29458) Misc. bug: `/infill` does not validate prompt token ids, it accepts out-of-range ids that `/completion` rejects `bug-unconfirmed`
- [#29457](https://github.com/ggml-org/llama.cpp/issues/29457) Misc. bug: a large `enum` in a json_schema makes grammar construction take superlinear time on the serving slot, a small request pins a core for tens of seconds (DoS) `bug-unconfirmed`
- [#29451](https://github.com/ggml-org/llama.cpp/issues/29451) Misc. bug: `usage.completion_tokens` counts only one choice, so it undercounts by a factor of `n` when `n > 1` `bug-unconfirmed`

#### 🔒 Closed Issues
- [#25807](https://github.com/ggml-org/llama.cpp/issues/25807) Misc. bug: ROCm-7.14 - > 'error while loading shared libraries: libhipblas.so.3'
- [#24946](https://github.com/ggml-org/llama.cpp/issues/24946) [SYCL/xe] -cb pins GPU at gt-c0 on Battlemage, prevents idle power savings
- [#24415](https://github.com/ggml-org/llama.cpp/issues/24415) Eval bug: can't load gemma-4-12B with OpenVINO (CPU, GPU and NPU)
- [#26027](https://github.com/ggml-org/llama.cpp/issues/26027) Eval bug: GLM-5.2 (glm_moe_dsa) dense-MLA CUDA path produces subtly corrupted output for ANY real transformer layer offloaded to GPU (partial coherent text mixed with garbage)
- [#26475](https://github.com/ggml-org/llama.cpp/issues/26475) Eval bug: using -devd CUDA0 on draft-dspark causes model to crash
- [#26747](https://github.com/ggml-org/llama.cpp/issues/26747) Feature Request: SYCL: use less VRAM
- [#29270](https://github.com/ggml-org/llama.cpp/issues/29270) Eval bug: ggml_vulkan: vk::Device::allocateMemory: ErrorOutOfDeviceMemory
- [#26988](https://github.com/ggml-org/llama.cpp/issues/26988) Misc. bug: --cors-origins does not follow spec
- [#26916](https://github.com/ggml-org/llama.cpp/issues/26916) Eval bug: Qwen3.5-Hybrid model (qwen3_5, SSM+Attention) fails to load — "tensor 'blk.32.attn_norm.weight' not found"
- [#26965](https://github.com/ggml-org/llama.cpp/issues/26965) Eval bug: DeepSeek V4 Flash tokenizer blows its stack on long tool output
- [#27748](https://github.com/ggml-org/llama.cpp/issues/27748) Official Windows prebuilt binaries crash with heap corruption (0xC0000374) on Windows 11 Insider build 26220 — LLVM OpenMP vs MSVC OpenMP
- [#26967](https://github.com/ggml-org/llama.cpp/issues/26967) DFlash: corrupted predicted_ms on some Q4/Metal requests
- [#26978](https://github.com/ggml-org/llama.cpp/issues/26978) Misc. bug: GGUF loader accepts a tensor size that wraps to 0 after padding
- [#26981](https://github.com/ggml-org/llama.cpp/issues/26981) Eval bug: gemma4uv mmproj + CUDA → SIGABRT in mtmd_helper_decode_image_chunk → llama_context::decode (workarounds from #24251 and #24314 do not help)
- [#27068](https://github.com/ggml-org/llama.cpp/issues/27068) Eval bug: failed slot restore leaves corrupted K/V data that breaks subsequent inference

### Ollama (`ollama/ollama`)

**Stars:** 181,776 · **Open issues:** 4,107 · **Last push:** 10h ago

On September 27, 2026, there were no new releases for Ollama. However, the noteworthy merged pull request included #17480, which implements the use of HumanEval patch prompts in the benchmarking process. Among the newly opened issues, #18672 highlights an Intel UHD 0x4626 detection problem with the Vulkan backend on Windows, and #18666 introduces a request for adding Perplexity agentic browsing capability in the ollama launch command for the Comet model. Overall, the day was largely routine maintenance, but the resolution of these new issues could significantly impact user experience.

#### ✅ Merged PRs
- [#17480](https://github.com/ollama/ollama/pull/17480) bench: use HumanEval patch prompts

#### 🐛 New Issues
- [#18672](https://github.com/ollama/ollama/issues/18672) Intel UHD 0x4626 not detected by Vulkan backend on Windows — Ollama 0.34.4 `bug`
- [#18669](https://github.com/ollama/ollama/issues/18669) Shared Model Weights for Concurrent MLX Inference on Apple Silicon `feature request`
- [#18667](https://github.com/ollama/ollama/issues/18667) ollama launch chrome `feature request`
- [#18666](https://github.com/ollama/ollama/issues/18666) Add Perplexity agentic browsing into ollama launch comet
- [#18659](https://github.com/ollama/ollama/issues/18659) glm-4.7: `</tool_call>` inside an `<arg_value>` ends the tool call early; the rest of the argument leaks into content
- [#18658](https://github.com/ollama/ollama/issues/18658) glm-4.7: tool-call parser strips a leading/trailing newline from string argument values

### LiteLLM (`BerriAI/litellm`)

**Stars:** 59,676 · **Open issues:** 5,307 · **Last push:** <1h ago

On September 27, 2026, there were no new releases for LiteLLM; however, several significant pull requests were merged, including the addition of OpenAI-like chat configuration foundations in PR #43379 and improvements to management routes in PR #43373. Notably, PR #42507 implemented a response stream guardrail designed to block pre-calls as SSE with typed output, and several fixes were made to integration testing, such as restoring functionality in PR #43382. Among the newly reported issues, #43325 highlights a bug where tool schemas in Gemini/Vertex drop essential constraints, which could impact schema validation and integrity. Overall, the day's developments centered on refining existing functionalities and addressing critical bugs.

#### ✅ Merged PRs
- [#43379](https://github.com/BerriAI/litellm/pull/43379) feat(rust): add the openai_like chat config foundation
- [#43373](https://github.com/BerriAI/litellm/pull/43373) feat(e2e): read management routes back from the control plane replicas
- [#42507](https://github.com/BerriAI/litellm/pull/42507) fix(responses): stream guardrail pre-call block as SSE with a typed output item
- [#43391](https://github.com/BerriAI/litellm/pull/43391) test(ci): fix the e2e and integration reds left on rc/1.103.0
- [#43389](https://github.com/BerriAI/litellm/pull/43389) chore(cost-map): drop stale cache hit field from openrouter deepseek-v4-pro-0813
- [#43385](https://github.com/BerriAI/litellm/pull/43385) revert(usage): remove the top-N key cap, its follow-ups and the daily global spend rollup code from rc/1.104.0
- [#43388](https://github.com/BerriAI/litellm/pull/43388) test(e2e): clear the two rc/1.103.0 e2e reds owned by upstream providers
- [#43384](https://github.com/BerriAI/litellm/pull/43384) chore(cost-map): sync openrouter prices for deepseek, minimax, qwen and glm rows
- [#43382](https://github.com/BerriAI/litellm/pull/43382) test(integration): make rc/1.103.0 integration groups collect and pass again
- [#43241](https://github.com/BerriAI/litellm/pull/43241) fix(mcp): align hub publication status and controls
- [#43342](https://github.com/BerriAI/litellm/pull/43342) fix(caching): stand default cache points down when extra_body hides a direct client mark
- [#43240](https://github.com/BerriAI/litellm/pull/43240) fix(mcp): report reachability without stored credentials
- [#43341](https://github.com/BerriAI/litellm/pull/43341) fix(caching): stand default cache points down when extra_body hides a direct client mark
- [#43366](https://github.com/BerriAI/litellm/pull/43366) chore: backport CircleCI speedups (#43347) and cost-map fixes (#42951) to rc/1.104.0
- [#43372](https://github.com/BerriAI/litellm/pull/43372) chore: rebuild Admin UI bundle for rc/1.104.0
- [#43322](https://github.com/BerriAI/litellm/pull/43322) fix(langtrace): deliver spans to app.langtrace.ai/api/trace with x-api-key
- [#43185](https://github.com/BerriAI/litellm/pull/43185) fix(openai): exclude fine-tuned and custom gpt-5-chat aliases from gpt-5 reasoning path
- [#43222](https://github.com/BerriAI/litellm/pull/43222) fix(params): validate stream_chunk_size once, before any provider call
- [#43352](https://github.com/BerriAI/litellm/pull/43352) test(integration): group /v1/messages contracts under tests/integration/messages_endpoint
- [#43346](https://github.com/BerriAI/litellm/pull/43346) fix(tests): stop VCR recording and replaying a test's own localhost upstream
- [#43354](https://github.com/BerriAI/litellm/pull/43354) fix(s3_v2): backport #43022 to rc/1.104.0
- [#43357](https://github.com/BerriAI/litellm/pull/43357) fix(cost-map): correct azure gpt-4o-mini tts, transcribe, alias and MAI-Image-2.5 prices
- [#43347](https://github.com/BerriAI/litellm/pull/43347) ci: cut CircleCI wall time without loosening test isolation
- [#43355](https://github.com/BerriAI/litellm/pull/43355) test: remove substring guard test_default_api_base
- [#43221](https://github.com/BerriAI/litellm/pull/43221) fix(params): keep _litellm_* kwargs out of provider request bodies by construction
- [#43351](https://github.com/BerriAI/litellm/pull/43351) docs(pr-template): add the backport-stable label only for a P0 regression
- [#43337](https://github.com/BerriAI/litellm/pull/43337) fix(cost-map): sync OpenRouter, Together, Cohere and Azure AI registry values with official sources
- [#39221](https://github.com/BerriAI/litellm/pull/39221) feat(proxy): add maximum_daily_tag_spend_retention_period cleanup setting
- [#43343](https://github.com/BerriAI/litellm/pull/43343) fix(jwt,otel): backport session conversation id and JWT team header selection to rc/1.103.0
- [#43271](https://github.com/BerriAI/litellm/pull/43271) feat(guardrails): scan retrieved vector store chunks with the request's pre-call guardrails
- [#43022](https://github.com/BerriAI/litellm/pull/43022) fix(s3_v2): upload fresh events first, drop terminal failures and hour-old retries by default, opt-in adaptive concurrency
- [#43263](https://github.com/BerriAI/litellm/pull/43263) fix(mcp): adopt shared server resolution and caller authorization
- [#43338](https://github.com/BerriAI/litellm/pull/43338) chore: backport CI fixes, #43206 and Rust changes to rc/1.104.0
- [#43344](https://github.com/BerriAI/litellm/pull/43344) test(logging): drain the logging worker after each logging callback test so no later test inherits its events
- [#42629](https://github.com/BerriAI/litellm/pull/42629) ci: fail on new unbounded SQL IN lists and add a Prisma chunking helper
- [#43262](https://github.com/BerriAI/litellm/pull/43262) refactor(mcp): add shared server resolver without changing callers
- [#43329](https://github.com/BerriAI/litellm/pull/43329) refactor(anthropic): rename experimental_pass_through to pass_through
- [#43261](https://github.com/BerriAI/litellm/pull/43261) test(mcp): pin server resolution and authorization behavior
- [#42840](https://github.com/BerriAI/litellm/pull/42840) feat(sail): add Sail as a provider with service_tier mapped to its completion window
- [#43280](https://github.com/BerriAI/litellm/pull/43280) fix(guardrails): block private destinations in custom code http_request and bound guardrail execution time
- [#43331](https://github.com/BerriAI/litellm/pull/43331) fix: backport five regression fixes to rc/1.103.0
- [#43270](https://github.com/BerriAI/litellm/pull/43270) fix(responses): run stream failure and success hooks on the iterating loop instead of blocking it
- [#43251](https://github.com/BerriAI/litellm/pull/43251) feat(proxy): add fail_closed_rate_limit_enforcement to reject requests with 503 while Redis rate limit counters are unreachable
- [#43328](https://github.com/BerriAI/litellm/pull/43328) chore: rebuild Admin UI bundle for rc/1.103.0
- [#43249](https://github.com/BerriAI/litellm/pull/43249) test(integration): pin the team-admin status-code matrix across every management route
- [#43326](https://github.com/BerriAI/litellm/pull/43326) revert(usage): remove the top-N key cap and global spend rollup code from rc/1.103.0
- [#43321](https://github.com/BerriAI/litellm/pull/43321) test(e2e): assert only litellm-owned batch behavior and move the blank S3 env pin to an integration test
- [#43323](https://github.com/BerriAI/litellm/pull/43323) fix(proxy): backport team member spend jsonb flush to rc/1.103.0 (#43029)
- [#43237](https://github.com/BerriAI/litellm/pull/43237) fix(otel): detach post-response service spans by request phase, name redis spans by operation
- [#43294](https://github.com/BerriAI/litellm/pull/43294) fix(ci): stop stale CI reds, keep unit tests off the host env, retry CyberArk policy conflicts
- [#43311](https://github.com/BerriAI/litellm/pull/43311) fix(cost-map): price fireworks deepseek v4.1 flash at the prices api value
- [#43254](https://github.com/BerriAI/litellm/pull/43254) fix(cost-map): registry audit 2026-09-26, MAI-Image-2.5-Flash price, Databricks Claude Opus 5.5, Azure Foundry retirement dates
- [#43302](https://github.com/BerriAI/litellm/pull/43302) test(proxy_behavior): scope the management proxy fixture to its package so its spend monitor cannot race the spend tests
- [#43151](https://github.com/BerriAI/litellm/pull/43151) refactor: daily fresh tech debt cleanup, rolling PR (2026-09-25)
- [#43295](https://github.com/BerriAI/litellm/pull/43295) refactor(rust): expand logging and test coverage across gateway and Anthropic messages
- [#43288](https://github.com/BerriAI/litellm/pull/43288) test(integration): run the Langfuse DB-callback test on its own scratch database
- [#42911](https://github.com/BerriAI/litellm/pull/42911) fix(e2e): resolve the blank-S3 gateway repo root from the litellm package location
- [#43273](https://github.com/BerriAI/litellm/pull/43273) fix(cost-map): remove duplicate openrouter/perceptron/perceptron-mk1.5 entry
- [#43289](https://github.com/BerriAI/litellm/pull/43289) feat(rust): add config, router and gateway crates
- [#43287](https://github.com/BerriAI/litellm/pull/43287) refactor(rust): prepare inference and auth foundations for the gateway
- [#43281](https://github.com/BerriAI/litellm/pull/43281) test: finish the non-proxy half of tests/test_litellm
- [#42931](https://github.com/BerriAI/litellm/pull/42931) test(e2e): accept the otel cost write as a linked root trace
- [#43282](https://github.com/BerriAI/litellm/pull/43282) test(integration): port langfuse callbacks-in-db coverage to the local harness
- [#43274](https://github.com/BerriAI/litellm/pull/43274) fix(callbacks-legacy-python): traverse and release the retained headers dict
- [#42665](https://github.com/BerriAI/litellm/pull/42665) feat(proxy): email alerts at configured percentages of a team member budget
- [#43272](https://github.com/BerriAI/litellm/pull/43272) ci: drop main and litellm_* branch filters from the CircleCI litellm-main workflows
- [#43265](https://github.com/BerriAI/litellm/pull/43265) fix(rust): preserve nested optional import failures
- [#43257](https://github.com/BerriAI/litellm/pull/43257) test: stop CI tests from downloading tokenizer files and images
- [#43267](https://github.com/BerriAI/litellm/pull/43267) test: backport stale and state-leaking test fixes to rc/1.104.0 (#43266)
- [#43269](https://github.com/BerriAI/litellm/pull/43269) refactor(rust): promote anthropic messages out of experimental_pass_through
- [#42951](https://github.com/BerriAI/litellm/pull/42951) fix(cost-map): retirement dates, chatgpt reasoning flags, bing pricing, bedrock mantle and mythos, azure gpt-5.6 alias, anthropic batch rates, new nebius, openrouter and xai rows
- [#43266](https://github.com/BerriAI/litellm/pull/43266) test: fix stale and state-leaking tests red on scheduled CircleCI
- [#43245](https://github.com/BerriAI/litellm/pull/43245) refactor(http): hand out an owned Client and route all providers through the pool
- [#43238](https://github.com/BerriAI/litellm/pull/43238) fix(router): hold Responses lifecycle events until output so a pre-output fallback announces one response
- [#43259](https://github.com/BerriAI/litellm/pull/43259) refactor(rust): move credential inheritance and SDK limits into a driver preflight

#### 🐛 New Issues
- [#43325](https://github.com/BerriAI/litellm/issues/43325) [Bug]: Gemini/Vertex tool schemas drop `enum`, `pattern` and min/max constraints on fields typed `["string", "null"]` `llm translation` 💬4
- [#43324](https://github.com/BerriAI/litellm/issues/43324) [Bug]: Message-level `cache_control` is dropped when the message's `content` is a list (Anthropic, Bedrock Converse) `llm translation` 💬1
- [#43316](https://github.com/BerriAI/litellm/issues/43316) [Bug]: Responses bridge returns a narrated tool call as TWO chat choices (text in choices[0] with finish_reason stop, function_call in choices[1]) so chat clients lose the tool call `llm translation` 💬1
- [#43285](https://github.com/BerriAI/litellm/issues/43285) [Bug]: llm_requests_hanging false positives under sustained load — completion-marker TTL (threshold+100) shorter than tracker TTL (1.5×threshold+60) with 20-oldest scan 💬1
- [#43374](https://github.com/BerriAI/litellm/issues/43374) [Bug]: Interrupted --pkce renewal leaves lite with no credential and a spent refresh token
- [#43336](https://github.com/BerriAI/litellm/issues/43336) [Bug]: Broken Doc Links - Litellm Admin Agent `bug`
- [#43303](https://github.com/BerriAI/litellm/issues/43303) [Feature]: Opt-in prompt and response logging for one authenticated JWT user

#### 🔒 Closed Issues
- [#28526](https://github.com/BerriAI/litellm/issues/28526) [Feature Request] Add i18n / Chinese language support for LiteLLM Dashboard
- [#20097](https://github.com/BerriAI/litellm/issues/20097) [Bug]: characters are truncated from anthropic models
- [#23757](https://github.com/BerriAI/litellm/issues/23757) [Bug]: TypeError: can only concatenate list (not "str") to list in map_system_message_pt when routing Anthropic-format messages to ChatGPT provider
- [#26155](https://github.com/BerriAI/litellm/issues/26155) [Bug]: MCP semantic tool filter crashloops at proxy startup with a large MCP server registry
- [#24235](https://github.com/BerriAI/litellm/issues/24235) [Feature]: Exclude BYOK models from team billing data
- [#25866](https://github.com/BerriAI/litellm/issues/25866) [Bug]: MCP Access Groups can't be assigned to key not in a team
- [#30538](https://github.com/BerriAI/litellm/issues/30538) [Feature]: Need GithubApp M2M for mcp hub
- [#29473](https://github.com/BerriAI/litellm/issues/29473) [Bug]: Claude Desktop UI shows "Writing..." indefinitely after stream completion when using hosted_vllm/ prefix
- [#30768](https://github.com/BerriAI/litellm/issues/30768) [Bug]: Incorrect cost tracking for Bedrock geo cross-region inference profiles (us./eu./ap.)
- [#39169](https://github.com/BerriAI/litellm/issues/39169) [Bug]: OpenRouter wildcard routing causes duplicated irrelevant warnings about unknown costs
- [#43201](https://github.com/BerriAI/litellm/issues/43201) [Bug]: test_unit_shard_missing_paths failed in the misc shard after #43186 — it inherited the job's UNIT_FLAG and reached a repo-relative unit_selection.sh
- [#30919](https://github.com/BerriAI/litellm/issues/30919) [Feature]:
- [#30932](https://github.com/BerriAI/litellm/issues/30932) [Bug]: Generic pass-through endpoints log model=unknown to Langfuse/SpendLogs
- [#38732](https://github.com/BerriAI/litellm/issues/38732) [Bug]: delete key confirmation dialog should ignore surrounding whitespace
- [#43192](https://github.com/BerriAI/litellm/issues/43192) [Bug]: mcp-integration is flaky on main since #42904 — test_cancellation_delivers_termination_over_tcp fails on ~19% of commits
- [#42714](https://github.com/BerriAI/litellm/issues/42714) [Bug]: rust-wheel OCR callback test expects swallowed logger exception to propagate
- [#39153](https://github.com/BerriAI/litellm/issues/39153) Translate CC Session id header to OpenRouter's session_id for sticky routing and tracing
- [#39158](https://github.com/BerriAI/litellm/issues/39158) [bug] setting forward_client_headers_to_llm_api unleashes sillines
- [#41394](https://github.com/BerriAI/litellm/issues/41394) [Bug]: All chatgpt/* models missing reasoning annotations present on their openai/ and azure/ twins

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,836 · **Open issues:** 1,260 · **Last push:** <1h ago

On September 27, 2026, there were no new releases for Unsloth, but significant progress was made with multiple merged pull requests. Key changes included updates to the Studio such as centering collapsed sidebar icons (#12031) and allowing Deep Research to finish turns handed off from chat generations (#11923). Several improvements were made for macOS functionality, including smoother navigation post-login (#12053) and resolving app menu chord issues (#12046). Additionally, new issues were raised, notably the bug where Unsloth Desktop's generation caps at 8192 tokens regardless of the max_tokens setting (#12009), signaling a need for urgent attention in the next development cycle.

#### ✅ Merged PRs
- [#12031](https://github.com/unslothai/unsloth/pull/12031) Studio: center collapsed sidebar icons and tighten the rail
- [#11923](https://github.com/unslothai/unsloth/pull/11923) Studio: let Deep Research finish a turn handed off from a chat generation
- [#12053](https://github.com/unslothai/unsloth/pull/12053) Let the macOS tab sampler ride out a navigation still in flight after login
- [#12050](https://github.com/unslothai/unsloth/pull/12050) Run the formatter fixed-point guard's batches side by side
- [#12049](https://github.com/unslothai/unsloth/pull/12049) Keep peft's is_torchao_available cache API through the stale-torchao patch
- [#12047](https://github.com/unslothai/unsloth/pull/12047) Advertise NVFP4 diffusion on the text encoder driver's mocked host
- [#12046](https://github.com/unslothai/unsloth/pull/12046) Resolve the macOS app menu's chords as a Mac in its test
- [#12042](https://github.com/unslothai/unsloth/pull/12042) Read the partial safetensors delete-menu guard by operator, not verbatim
- [#12045](https://github.com/unslothai/unsloth/pull/12045) Translate the Library toolbar Sort menu in every locale
- [#11740](https://github.com/unslothai/unsloth/pull/11740) Unsloth Studio: report the VAE decode on the image progress bar
- [#11558](https://github.com/unslothai/unsloth/pull/11558) Studio: stop trading the denoiser's quantisation away to pay for offload
- [#11959](https://github.com/unslothai/unsloth/pull/11959) Keep flash attention off sub-models that do not support it (LFM2.5-VL SigLIP2 tower)
- [#11997](https://github.com/unslothai/unsloth/pull/11997) Studio: fall back to native when SageAttention does not run on this GPU
- [#11528](https://github.com/unslothai/unsloth/pull/11528) Grouped-linear LoRA for DeepSeek-V4, remote-code shims for Step-3.7, and a real message for Mistral-format checkpoints
- [#11835](https://github.com/unslothai/unsloth/pull/11835) Studio: opt-in Hadamard rotation for Qwen-Image-2.1's int8 transformer so it matches bf16
- [#11867](https://github.com/unslothai/unsloth/pull/11867) SentenceTransformer: add opt-in FP32 merged-pair ranking loss
- [#11962](https://github.com/unslothai/unsloth/pull/11962) Studio: pass tool_result is_error through to the model on /v1/messages
- [#12038](https://github.com/unslothai/unsloth/pull/12038) Put back the unsloth_zoo modules the device map opt-in tests stub
- [#11861](https://github.com/unslothai/unsloth/pull/11861) Load only the language model for text_only on repo-code composites
- [#12006](https://github.com/unslothai/unsloth/pull/12006) Apply SFTConfig.router_aux_loss_coef to MoE models that cache it at init
- [#11644](https://github.com/unslothai/unsloth/pull/11644) Unsloth Studio: stop offering "Continue" on a base repo that only holds a GGUF's text encoder and VAE
- [#11994](https://github.com/unslothai/unsloth/pull/11994) Unsloth Studio / Desktop: log what an image load and each generation actually resolved to
- [#11880](https://github.com/unslothai/unsloth/pull/11880) Studio: stop MiniMax-H3 recompiling on the second caption and the first i2v
- [#11922](https://github.com/unslothai/unsloth/pull/11922) Studio: size the image memory plan at the dtype the pipeline loads in (SDXL resident on 24 GB)
- [#11842](https://github.com/unslothai/unsloth/pull/11842) Studio: stop the second prompt length recompiling Qwen-Image on the max tier and with int8
- [#11829](https://github.com/unslothai/unsloth/pull/11829) Unsloth Studio: refuse picking a hosted FP8/INT8 checkpoint repo as a pipeline before it downloads
- [#11999](https://github.com/unslothai/unsloth/pull/11999) Studio: decode Wan video in fp16 with channels_last_3d convs
- [#11950](https://github.com/unslothai/unsloth/pull/11950) Studio: stop edit_file writing a compacted-argument placeholder into files
- [#11976](https://github.com/unslothai/unsloth/pull/11976) Unsloth Desktop: show Stopping… after Stop so a pending cancel doesn't look ignored
- [#12034](https://github.com/unslothai/unsloth/pull/12034) Keep the conversion backfill's donor stub off the transformers package
- [#11830](https://github.com/unslothai/unsloth/pull/11830) Unsloth Studio: list a GGUF with no header metadata under On Device on the Images page
- [#11172](https://github.com/unslothai/unsloth/pull/11172) Studio: stop Python tool network calls from skipping the host allowlist
- [#11828](https://github.com/unslothai/unsloth/pull/11828) Unsloth Studio: a companion fetch with no denoiser no longer blocks deleting its base
- [#12029](https://github.com/unslothai/unsloth/pull/12029) Read the hot-path I/O cost at its steady minimum across repeats
- [#11946](https://github.com/unslothai/unsloth/pull/11946) Unsloth Studio (AMD): keep export off a GPU PyTorch has no kernels for, like the iGPU
- [#11368](https://github.com/unslothai/unsloth/pull/11368) Keep more VRAM headroom on Windows CUDA, and say when a hand-set context does not fit
- [#12021](https://github.com/unslothai/unsloth/pull/12021) Studio: name the Git Bash MXC incompatibility and stop re-probing it
- [#12023](https://github.com/unslothai/unsloth/pull/12023) Studio: shadow the dark mode composer so it stands off the chat
- [#12028](https://github.com/unslothai/unsloth/pull/12028) Studio media viewer: Zoom to fit at the bottom of the scale menu
- [#11945](https://github.com/unslothai/unsloth/pull/11945) Studio: keep a CSV seed's values as written when dropping its index column
- [#11935](https://github.com/unslothai/unsloth/pull/11935) Unsloth Studio installer (AMD/Linux): send RDNA 4 cards (RX 9000, R9700) to AMD's gfx120X wheels
- [#12026](https://github.com/unslothai/unsloth/pull/12026) Give the real-host NVIDIA probe test a budget that a busy driver can meet
- [#11966](https://github.com/unslothai/unsloth/pull/11966) Studio: download only one copy of a GGUF quant
- [#11944](https://github.com/unslothai/unsloth/pull/11944) Studio: keep a working GPU when one probe fails, and name the card behind no_gpu
- [#11963](https://github.com/unslothai/unsloth/pull/11963) Studio: support web_search_20260209 on /v1/messages
- [#11895](https://github.com/unslothai/unsloth/pull/11895) Studio: keep a 0 label and blank a NaN cell when mapping columns to chat roles
- [#11968](https://github.com/unslothai/unsloth/pull/11968) Studio: return an error when embeddings dimensions can't be honored
- [#11843](https://github.com/unslothai/unsloth/pull/11843) Studio: run image and video denoises on one render thread so cuDNN caches are reused
- [#11965](https://github.com/unslothai/unsloth/pull/11965) Studio: do not reapply ROCR_VISIBLE_DEVICES when picking the AMD card in setup.sh and the llama.cpp prebuilt probe
- [#11788](https://github.com/unslothai/unsloth/pull/11788) Studio CLI: stop `unsloth run` re-exec'ing itself forever when the Studio venv is a symlink
- [#12019](https://github.com/unslothai/unsloth/pull/12019) Record only the test thread's sleeps as Deep Research retry backoff
- [#12018](https://github.com/unslothai/unsloth/pull/12018) Add longcat_flash_lsa to the fused-MoE conversion snapshot
- [#12004](https://github.com/unslothai/unsloth/pull/12004) Studio setup: read the amd-smi index-space line without head -n 1
- [#12005](https://github.com/unslothai/unsloth/pull/12005) tests: make the ROCm install suite pass on Windows, macOS and arm64 runners
- [#12014](https://github.com/unslothai/unsloth/pull/12014) Skip Unsloth's generated compile cache in the exec-literal lint
- [#11786](https://github.com/unslothai/unsloth/pull/11786) feat(install): fall back to CERNET and npmmirror when package hosts are blocked or slow
- [#12013](https://github.com/unslothai/unsloth/pull/12013) Skip test_wait_for_settled when playwright.sync_api is only a stub
- [#12012](https://github.com/unslothai/unsloth/pull/12012) OpenVINO export: trust remote code only for a remote-code model, and decode the bounds probe as UTF-8
- [#12010](https://github.com/unslothai/unsloth/pull/12010) Keep the Kaggle GPU harness tests independent of the caller's CUDA_VISIBLE_DEVICES
- [#11761](https://github.com/unslothai/unsloth/pull/11761) feat(studio): ModelScope as a model source and a custom Hugging Face endpoint
- [#11885](https://github.com/unslothai/unsloth/pull/11885) Fix left-padded Online DPO scoring during training
- [#12003](https://github.com/unslothai/unsloth/pull/12003) Studio: size Library gallery items without resolving each file
- [#12002](https://github.com/unslothai/unsloth/pull/12002) Studio: Help menu items and a Go menu for desktop Help search
- [#12000](https://github.com/unslothai/unsloth/pull/12000) Studio: drop Move up / Move down from sidebar row menus
- [#11893](https://github.com/unslothai/unsloth/pull/11893) CLI: keep a reply's trailing '<' or '<th' once the stream has ended
- [#11996](https://github.com/unslothai/unsloth/pull/11996) Studio: line sidebar section headers up with row content
- [#11907](https://github.com/unslothai/unsloth/pull/11907) Export: add save_pretrained_openvino and push_to_hub_openvino support
- [#11991](https://github.com/unslothai/unsloth/pull/11991) Studio Playwright: condition waits and step budgets in thread_scoped_settings, mcp_arguments, chat_width
- [#11992](https://github.com/unslothai/unsloth/pull/11992) Studio Playwright: condition waits and per-step budgets in loaded_models_indicator and ui_font_scale
- [#11987](https://github.com/unslothai/unsloth/pull/11987) Studio Playwright: condition waits and per-step budgets in model_config and memory_estimate
- [#11990](https://github.com/unslothai/unsloth/pull/11990) Studio Playwright: condition waits and per-step budgets in extra_ui and update_banner_layout
- [#11983](https://github.com/unslothai/unsloth/pull/11983) Studio Playwright chat_ui: condition waits, per-step budgets, 25 s less in the theme step
- [#11979](https://github.com/unslothai/unsloth/pull/11979) Studio Playwright helpers: named per-step budgets, fail-fast step report, condition waits
- [#11989](https://github.com/unslothai/unsloth/pull/11989) CI: fix path filters that miss dependencies, and narrow three that are too broad
- [#11977](https://github.com/unslothai/unsloth/pull/11977) CI: only cancel superseded pull request runs, never dispatches or schedules
- [#11984](https://github.com/unslothai/unsloth/pull/11984) Studio: pin fine-tuned models in the model picker
- [#11985](https://github.com/unslothai/unsloth/pull/11985) Studio: open model row tooltips from the name only
- [#11949](https://github.com/unslothai/unsloth/pull/11949) Studio tests: read UI labels from the en catalog, and follow the response-details action into MessageMenuTime
- [#11988](https://github.com/unslothai/unsloth/pull/11988) Studio: sort projects in the sidebar and show pinned chats once
- [#11918](https://github.com/unslothai/unsloth/pull/11918) Studio: cap context checkpoints by host RAM for sliding-window and SSM models

#### 🐛 New Issues
- [#12041](https://github.com/unslothai/unsloth/issues/12041) 可以添加中国的模型镜像站吗？ `feature request` 💬1
- [#12009](https://github.com/unslothai/unsloth/issues/12009) [Bug] Unsloth Desktop "unsloth start opencode" generation always caps at 8192 tokens, ignoring max_tokens `feature request` `bug` 💬1
- [#12051](https://github.com/unslothai/unsloth/issues/12051) Context parallel does not support Qwen3.5 GatedDeltaNet 💬1
- [#12055](https://github.com/unslothai/unsloth/issues/12055) [Unsloth Bug] Studio trains a SQuAD answers dict's repr instead of the answer text when mapping columns to chat roles
- [#12054](https://github.com/unslothai/unsloth/issues/12054) Studio terminal: allow flutter/dart create or provide safe flutter helper
- [#12048](https://github.com/unslothai/unsloth/issues/12048) [Bug] Tool Calls Completely Halt Randomly (Stuck in 'Running' State) Even Past Max Tool Call Duration `feature request` `bug`
- [#12044](https://github.com/unslothai/unsloth/issues/12044) Supported native Windows / PyTorch 2.14 GPT-OSS 20B NF4/QLoRA training tuple?
- [#12025](https://github.com/unslothai/unsloth/issues/12025) [Bug] Toolbar toggle states indistinguishable on some color palettes; thinking no longer collapsible; long conversations cause UI lag (web + desktop) `feature request` `bug`
- [#12020](https://github.com/unslothai/unsloth/issues/12020) [Bug] Please fill in your issue title here. `feature request` `bug`
- [#11993](https://github.com/unslothai/unsloth/issues/11993) [Feature] Unsloth Studio / Desktop: image server logs don't record what a load or a generation actually resolved to

#### 🔒 Closed Issues
- [#11919](https://github.com/unslothai/unsloth/issues/11919) [Bug] Deep Research fails at completion when assistant message is also owned by chat_generation_runs
- [#11739](https://github.com/unslothai/unsloth/issues/11739) [Bug] Unsloth Studio: image generation sits at "Step N/N" through the VAE decode and looks hung
- [#11833](https://github.com/unslothai/unsloth/issues/11833) [Bug] UI: Search/Code toggle states indistinguishable; thinking not collapsible; long conversations cause UI lag in all web ui browsers
- [#11975](https://github.com/unslothai/unsloth/issues/11975) [Feature] Unsloth Studio / Desktop: Stop gives no feedback while a cancel is pending, so it looks like it needs a second click
- [#10696](https://github.com/unslothai/unsloth/issues/10696) Studio Hub: distinguish cached diffusion assets from an incomplete base-model download
- [#11826](https://github.com/unslothai/unsloth/issues/11826) [Bug] Unsloth Studio / Desktop: picking unsloth/Qwen-Image-2.1-FP8 as a model stages 14 GB, then the load 404s on model_index.json
- [#11839](https://github.com/unslothai/unsloth/issues/11839) [Bug] Tool Call Elision Mechanism Causing File Corruption When Using The "Edit_File" Tool
- [#11827](https://github.com/unslothai/unsloth/issues/11827) [Bug] Unsloth Studio / Desktop: the Qwen-Image-2.1 GGUF has no general.architecture, so the Images page's On Device tab hides it and Chat lists it instead
- [#10397](https://github.com/unslothai/unsloth/issues/10397) Make SSH restrictions consistent and allow approved deployments
- [#11825](https://github.com/unslothai/unsloth/issues/11825) [Bug] Unsloth Studio / Desktop: Qwen/Qwen-Image-2.1 can't be deleted because a hidden unsloth/Qwen-Image-2.1-FP8 fetch counts as a model that still needs it
- [#11870](https://github.com/unslothai/unsloth/issues/11870) [Bug] AMD: Unsloth Studio / Desktop GGUF export splits the model onto an iGPU the installed PyTorch has no kernels for, and fails with "invalid kernel file"
- [#11840](https://github.com/unslothai/unsloth/issues/11840) [Tracking] Unsloth Studio / Desktop: Qwen-Image-2.1 open issues and PRs, week of Sep 22
- [#11993](https://github.com/unslothai/unsloth/issues/11993) [Feature] Unsloth Studio / Desktop: image server logs don't record what a load or a generation actually resolved to
- [#11973](https://github.com/unslothai/unsloth/issues/11973) [Feature] Unsloth Studio / Desktop: put Reapply next to Generate instead of at the bottom of Advanced
- [#8777](https://github.com/unslothai/unsloth/issues/8777) [Feature] Unsloth Studio / Desktop: add GRPO (RL) as a training method, not just SFT

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,113 · **Open issues:** 385 · **Last push:** 1h ago

On September 27, 2026, there were no new releases for AIBrix; however, several important pull requests were merged. Notable enhancements included the introduction of the predictive autoscaling API in PR #2823, designed to optimize resources according to demand. Additionally, multiple bugs were addressed, such as fixing the gateway rate-limiter window boundary in PR #2816 and ensuring that KPA/APA replicas respect cooldown windows with PR #2822. Meanwhile, new issues were raised, including a critical bug reported in #2819 regarding the sync of prefix indexer hashes, which is essential to maintain system integrity.

#### ✅ Merged PRs
- [#2773](https://github.com/vllm-project/aibrix/pull/2773) [Bug] Repin the session-affinity Redis pin on a bypassed final target
- [#2813](https://github.com/vllm-project/aibrix/pull/2813) [Bug] Include prompt fields in prefix matching
- [#2816](https://github.com/vllm-project/aibrix/pull/2816) [Bug] Fix gateway rate-limiter window boundary
- [#2823](https://github.com/vllm-project/aibrix/pull/2823) [Feat] Add the predictive autoscaling API
- [#2822](https://github.com/vllm-project/aibrix/pull/2822) [Bug] Hold KPA/APA replicas within the scale-up/scale-down cooldown windows
- [#2811](https://github.com/vllm-project/aibrix/pull/2811) [Bug] Harden tokenizer pool capacity test and unlock before logging
- [#2809](https://github.com/vllm-project/aibrix/pull/2809) [Feat] Answer 503 with Retry-After for a model whose ModelClaim is not placed yet

#### 🐛 New Issues
- [#2819](https://github.com/vllm-project/aibrix/issues/2819) [Bug] Sync prefix indexer hashes every block of a BlockStored event against the first block's parent `area/gateway` `kind/misc` `area/batch` 💬2
- [#2821](https://github.com/vllm-project/aibrix/issues/2821) [Bug] KPA/APA cooldown windows are inverted, scale-down cooldown never holds replicas `kind/bug` `area/orchestration` 💬1

#### 🔒 Closed Issues
- [#2821](https://github.com/vllm-project/aibrix/issues/2821) [Bug] KPA/APA cooldown windows are inverted, scale-down cooldown never holds replicas

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,916 · **Open issues:** 527 · **Last push:** <1h ago

On September 27, 2026, there were no new releases for Semantic Router. However, significant progress was made with the merging of several key pull requests, including a fix for performance baselines in the upcoming v0.4 release and improvements to the CI process related to GitHub job output limits. Notably, PR #4007 introduced model evaluation quality checks and cost-aware config generation, enhancing the system's evaluation capabilities. The new epic #4241 was also created to unify the benchmarking workflows, indicating a strategic direction towards SR Bench 2.0. Overall, the day was characterized by important updates aimed at improving both functionality and usability within the Semantic Router ecosystem.

#### ✅ Merged PRs
- [#4270](https://github.com/vllm-project/semantic-router/pull/4270) [CI] Handle first release tag push package baseline
- [#4262](https://github.com/vllm-project/semantic-router/pull/4262) [CI] Qualify documented Guard gap for v0.4 release
- [#4253](https://github.com/vllm-project/semantic-router/pull/4253) [Website]: cap oversized blog post images
- [#4246](https://github.com/vllm-project/semantic-router/pull/4246) [Bug] Fix v0.4 release performance baseline
- [#4244](https://github.com/vllm-project/semantic-router/pull/4244) [Bugfix] Keep release CI plan under GitHub job output limit
- [#4242](https://github.com/vllm-project/semantic-router/pull/4242) [Docs] Split the sr-bench guide into task-oriented pages
- [#4238](https://github.com/vllm-project/semantic-router/pull/4238) [Docs] Select locally built images in contributor commands
- [#4203](https://github.com/vllm-project/semantic-router/pull/4203) [Feature] Configure streamed_body through the SemanticRouter CRD
- [#4007](https://github.com/vllm-project/semantic-router/pull/4007) [Feature] Add model_eval evaluation quality checks, cost-aware config generation, reasoning-mode eval
- [#4239](https://github.com/vllm-project/semantic-router/pull/4239) [Feature] Report model continuity per task in sr-bench
- [#4212](https://github.com/vllm-project/semantic-router/pull/4212) [Test] Replay captured agent-client tool loops through the Router
- [#4236](https://github.com/vllm-project/semantic-router/pull/4236) [Website] Fix blog post layout side gaps and headline wrap
- [#4198](https://github.com/vllm-project/semantic-router/pull/4198) [Docs] Add per-call model selection blog post

#### 🐛 New Issues
- [#4241](https://github.com/vllm-project/semantic-router/issues/4241) [Epic] SR Bench 2.0: unify bench/ into sr-bench and evaluate agent workflows `enhancement` `accepted` `in-progress` `wg/evaluation-quality` 💬7
- [#4229](https://github.com/vllm-project/semantic-router/issues/4229) [Bug] `hybrid_mode: rerank` and `algorithm: recency_semantic` in the reference config don't exist, and memory runs the defaults `bug` `accepted` `in-progress` `wg/agentic-context` 💬5
- [#4237](https://github.com/vllm-project/semantic-router/issues/4237) [Bug] Local development instructions build latest images but CLI selects release tags `accepted` `wg/developer-experience-ecosystem` 💬5
- [#4240](https://github.com/vllm-project/semantic-router/issues/4240) [Feature] Add per-entrypoint Bearer API keys and remove listener API keys `enhancement` `accepted` `wg/data-plane-networking` 💬5
- [#4252](https://github.com/vllm-project/semantic-router/issues/4252) [Website] Reduce oversized blog post images `accepted` `wg/developer-experience-ecosystem` 💬4
- [#4269](https://github.com/vllm-project/semantic-router/issues/4269) [CI] Qualify CLI package on first release tag push `priority/P1` `accepted` `in-progress` `release-blocker` 💬3
- [#4257](https://github.com/vllm-project/semantic-router/issues/4257) [Feature] Record call phases and cache-usage presence in sr-bench results `enhancement` `accepted` `wg/evaluation-quality` 💬3
- [#4235](https://github.com/vllm-project/semantic-router/issues/4235) [Website] Fix blog post layout: side gaps, headline wrap, and media alignment 💬3
- [#4230](https://github.com/vllm-project/semantic-router/issues/4230) [Bug] Codex CLI fails Responses decoding on text.verbosity with its catalog models `bug` `accepted` `wg/data-plane-networking` 💬3
- [#4267](https://github.com/vllm-project/semantic-router/issues/4267) [Bug] sr-bench reports a stopped ledger when its host port is taken `accepted` `wg/developer-experience-ecosystem` 💬2
- [#4263](https://github.com/vllm-project/semantic-router/issues/4263) [Bug] Trivy keeps two KSV-0049 alerts open for the scoped config-writer Role `accepted` `wg/evaluation-quality` 💬2
- [#4256](https://github.com/vllm-project/semantic-router/issues/4256) [Feature] Send a per-task session identity from sr-bench agent benchmarks `enhancement` `accepted` `wg/evaluation-quality` 💬2
- [#4249](https://github.com/vllm-project/semantic-router/issues/4249) [Feature] Warn when a vLLM backend serves less context than its Model Card `enhancement` `accepted` `wg/data-plane-networking` 💬2
- [#4247](https://github.com/vllm-project/semantic-router/issues/4247) [Feature] Report first false step and context seen in the trajectory bench `enhancement` `accepted` `wg/evaluation-quality` 💬2
- [#4231](https://github.com/vllm-project/semantic-router/issues/4231) [Feature] Report model continuity per task in sr-bench `enhancement` `accepted` `wg/evaluation-quality` 💬2
- [#4234](https://github.com/vllm-project/semantic-router/issues/4234) [Bug] Codex CLI turns fail on prompt_cache_key when routing picks an Anthropic model `bug` `accepted` `wg/data-plane-networking` 💬2
- [#4228](https://github.com/vllm-project/semantic-router/issues/4228) [Bug] Router Memory recalls 2 of 14 facts at the reference config's 0.74 threshold `bug` `accepted` `wg/agentic-context` 💬2
- [#4258](https://github.com/vllm-project/semantic-router/issues/4258) [Feature] Add a request-scoped fault schedule to the provider mocker for sr-bench runs `enhancement` `help wanted` `accepted` `ready-for-dev` 💬1
- [#4259](https://github.com/vllm-project/semantic-router/issues/4259) [Feature] Run the coding-agent session replay through sr-bench `enhancement` `accepted` `in-progress` `wg/evaluation-quality` 💬1
- [#4255](https://github.com/vllm-project/semantic-router/issues/4255) [Feature] Audit bench/ and record a keep, move or remove decision per area `enhancement` `accepted` `in-progress` `wg/evaluation-quality` 💬1
- [#4245](https://github.com/vllm-project/semantic-router/issues/4245) [Bug] Release performance baseline cannot compile against v0.3.0 `bug` `accepted` `wg/evaluation-quality` 💬1
- [#4243](https://github.com/vllm-project/semantic-router/issues/4243) [Bug] Release candidate plan exceeds GitHub Actions job output limit `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4232](https://github.com/vllm-project/semantic-router/issues/4232) [Bug] Qwen3 embeddings fail in flash-attn builds `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#4225](https://github.com/vllm-project/semantic-router/issues/4225) [Release] Prepare v0.4.0 version contract and catalog snapshot `accepted` `owner/maintainers` 💬1
- [#4227](https://github.com/vllm-project/semantic-router/issues/4227) [Bug] Copilot CLI and Codex CLI fail Responses decoding on their custom apply_patch tool `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1

#### 🔒 Closed Issues
- [#2365](https://github.com/vllm-project/semantic-router/issues/2365) [Feature] Add Router Memory extraction and persistence receipts
- [#4237](https://github.com/vllm-project/semantic-router/issues/4237) [Bug] Local development instructions build latest images but CLI selects release tags
- [#4252](https://github.com/vllm-project/semantic-router/issues/4252) [Website] Reduce oversized blog post images
- [#4138](https://github.com/vllm-project/semantic-router/issues/4138) [Feature] Evaluate hallucination detection over agent trajectories
- [#3350](https://github.com/vllm-project/semantic-router/issues/3350) [Feature] Add route-local provider-aware prompt-cache marker injection
- [#4235](https://github.com/vllm-project/semantic-router/issues/4235) [Website] Fix blog post layout: side gaps, headline wrap, and media alignment
- [#4230](https://github.com/vllm-project/semantic-router/issues/4230) [Bug] Codex CLI fails Responses decoding on text.verbosity with its catalog models
- [#3791](https://github.com/vllm-project/semantic-router/issues/3791) [Feature] streamed_body settings via SemanticRouter CRD
- [#4231](https://github.com/vllm-project/semantic-router/issues/4231) [Feature] Report model continuity per task in sr-bench
- [#4211](https://github.com/vllm-project/semantic-router/issues/4211) [Test] Replay real agent-client traffic in the protocol E2E suite
- [#4234](https://github.com/vllm-project/semantic-router/issues/4234) [Bug] Codex CLI turns fail on prompt_cache_key when routing picks an Anthropic model
- [#4197](https://github.com/vllm-project/semantic-router/issues/4197) [Blog] Per-call vs per-agent model choice in a multi-agent run
- [#4228](https://github.com/vllm-project/semantic-router/issues/4228) [Bug] Router Memory recalls 2 of 14 facts at the reference config's 0.74 threshold
- [#4184](https://github.com/vllm-project/semantic-router/issues/4184) [Feature] Use prompt_cache_key as a cache-affinity signal for agent clients
- [#4153](https://github.com/vllm-project/semantic-router/issues/4153) [Feature] Add a replayable coding-agent session fixture for routing evaluation
- [#4146](https://github.com/vllm-project/semantic-router/issues/4146) [Feature] Flag semantic hits the English negation guard can't judge
- [#4140](https://github.com/vllm-project/semantic-router/issues/4140) [Feature] Add OpenTelemetry GenAI attributes to upstream model spans
- [#4137](https://github.com/vllm-project/semantic-router/issues/4137) [Feature] Measure Router Memory cold-start coverage for persistent assistants
- [#4139](https://github.com/vllm-project/semantic-router/issues/4139) [Feature] Benchmark classification latency across long inputs
- [#4245](https://github.com/vllm-project/semantic-router/issues/4245) [Bug] Release performance baseline cannot compile against v0.3.0
- [#4243](https://github.com/vllm-project/semantic-router/issues/4243) [Bug] Release candidate plan exceeds GitHub Actions job output limit
- [#4005](https://github.com/vllm-project/semantic-router/issues/4005) [Feature] model_eval evaluation quality checks, cost-aware config generation, reasoning-mode eval
- [#4232](https://github.com/vllm-project/semantic-router/issues/4232) [Bug] Qwen3 embeddings fail in flash-attn builds
- [#4225](https://github.com/vllm-project/semantic-router/issues/4225) [Release] Prepare v0.4.0 version contract and catalog snapshot
- [#4158](https://github.com/vllm-project/semantic-router/issues/4158) [Test] Prove prompt compression never mutates upstream Chat or Responses bodies

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*