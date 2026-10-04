# 📡 AI Ecosystem Digest — 2026-10-04

> Generated 2026-10-04 02:27 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 149,239 | 31 | 0 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 127,760 | 20 | 2 | 24 | 2 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,226 | 1 | 1 | 0 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,235 | 4 | 7 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 211,641 | 29 | 9 | 1 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,288 | 31 | 5 | 0 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 391,246 | 179 | 103 | 189 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 250,995 | 34 | 7 | 1 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,132 | 12 | 25 | 15 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,757 | 9 | 20 | 52 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 130,234 | 18 | 17 | 11 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 182,128 | 5 | 1 | 2 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 60,094 | 8 | 31 | 25 | 3 |
| [Unsloth](https://github.com/unslothai/unsloth) | 77,180 | 7 | 4 | 71 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,121 | 3 | 0 | 10 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,019 | 22 | 5 | 7 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.289](https://github.com/anthropics/claude-code/releases/tag/v2.1.289).  
- **OpenAI Codex** published two releases: [rust-v0.162.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.11) and [rust-v0.162.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.10).  
- In **OpenClaw**, a new issue [#164394](https://github.com/openclaw/openclaw/issues/164394) regarding UI WebChat transcript jitters gained significant attention with 9 comments.  
- The **Hermes Agent** encountered a critical issue with [#132401](https://github.com/NousResearch/hermes-agent/issues/132401), where a scratch prune deletes multi-day agent work, leading to a high comment count of 15.  
- **Qwen Code** saw notable new feature requests including [#13300](https://github.com/QwenLM/qwen-code/issues/13300) related to managed-agent review follow-ups, resonating with users through 5 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 149,239 · **Open issues:** 14,155 · **Last push:** 3h ago

On October 4, 2026, Claude Code released version 2.1.289, which included crucial fixes such as ensuring that deny or ask rules on nested parts of compound shell commands apply correctly, resolving terminal freezing issues with short code blocks containing unclosed `<script>` tags, and correcting how `Read` deny rules apply to files accessed through symlinks. Additionally, various new issues were reported, with notable concerns including a bug where the macOS Claude CLI mistakenly registers as a foreground Ghostty instance, leading to duplicate Dock icons, and another bug involving unnecessary prompts in bypass mode for certain bash scripts. The ongoing enhancement of user experience is underscored by a feature request for supporting first-class Local Claude Code sessions as project threads. Overall, the day was marked by significant maintenance and the identification of pressing issues to address moving forward.

#### 🚀 New Releases
- [v2.1.289](https://github.com/anthropics/claude-code/releases/tag/v2.1.289) v2.1.289

#### 🐛 New Issues
- [#99140](https://github.com/anthropics/claude-code/issues/99140) [BUG] macOS: Claude CLI registers as a foreground Ghostty instance, leaving duplicate Dock icons `bug` `has repro` `platform:macos` `area:core` 💬2
- [#99320](https://github.com/anthropics/claude-code/issues/99320) Inline-shell rm check (2.1.288) asks in bypass mode on bash -c $'...' scripts that contain no rm `bug` `platform:linux` `area:security` `area:bash` 💬1
- [#99156](https://github.com/anthropics/claude-code/issues/99156) [FEATURE] Projects (beta): Support first-class Local Claude Code sessions as project threads `enhancement` `area:cowork` 💬1
- [#99332](https://github.com/anthropics/claude-code/issues/99332) [BUG][a11y] Desktop app: virtualized transcript unmounts what the screen reader is reading (root cause found + working workaround) 💬1
- [#99347](https://github.com/anthropics/claude-code/issues/99347) [BUG] Remote Control: session archived without user action after phone messages silently fail to send `bug` `has repro` `platform:windows` `platform:ios` 💬1
- [#99265](https://github.com/anthropics/claude-code/issues/99265) Desktop app draws a mod's AbovePrompt band in only one chat at a time `bug` `platform:windows` `area:plugins` `area:desktop` 💬1
- [#99363](https://github.com/anthropics/claude-code/issues/99363) [BUG] Desktop: heavy-work stats worker rescans every transcript (182 days) at each launch and holds ~2.8 GB until quit; pre-v5 stats-cache.json is rejected so the full scan always runs `bug` `has repro` `platform:macos` `perf:memory`
- [#99362](https://github.com/anthropics/claude-code/issues/99362) [BUG] Claude Desktop (Linux/GNOME Wayland): holds a Wayland idle inhibitor while idle — idle auto-lock never fires and a woken lock screen never powers off `bug` `platform:linux` `area:desktop`
- [#99361](https://github.com/anthropics/claude-code/issues/99361) Edit: after an escaped-form match, every non-ASCII character in new_string is written as a \uXXXX escape `bug` `has repro` `platform:macos` `area:tools`
- [#99360](https://github.com/anthropics/claude-code/issues/99360) Subagents use the 5-minute prompt cache while the main session uses 1-hour; slow responses cause repeated full-context cache rewrites `bug` `has repro` `platform:macos` `area:cost`
- [#99359](https://github.com/anthropics/claude-code/issues/99359) [Bug] Out of memory error with large conversations (62MB+) `bug` `duplicate` `platform:macos` `area:core`
- [#99358](https://github.com/anthropics/claude-code/issues/99358) [BUG] Desktop Browser pane: auth handshake redirect chain back to http://localhost loops (ERR_TOO_MANY_REDIRECTS) — Clerk dev instances unusable on localhost `bug` `has repro` `platform:macos` `regression`
- [#99357](https://github.com/anthropics/claude-code/issues/99357) [BUG] Remote Control: exiting one process ends the session another process just re-attached (2.1.288) `bug` `has repro` `platform:macos` `area:core`
- [#99356](https://github.com/anthropics/claude-code/issues/99356) [Bug] Safeguard Restrictions Blocking Legitimate Commercial Project Development `bug` `platform:windows` `area:model` `area:security`
- [#99354](https://github.com/anthropics/claude-code/issues/99354) [Bug] Docked Pane ignores light theme when theme is set to "auto" `bug` `platform:macos` `area:plugins` `area:ui`
- [#99353](https://github.com/anthropics/claude-code/issues/99353) [BUG] Skill allowed-tools rule is dropped when the Skill tool finishes before the response stream ends (2.1.289) `bug` `has repro` `platform:macos` `area:skills`
- [#99350](https://github.com/anthropics/claude-code/issues/99350) [BUG] /model says "saved as your default for new sessions with max effort", but max effort is session-only and is not saved `bug` `area:tui`
- [#99352](https://github.com/anthropics/claude-code/issues/99352) [FEATURE] Register a Gravatar for noreply@anthropic.com so Claude's commits have an avatar `enhancement`
- [#99351](https://github.com/anthropics/claude-code/issues/99351) [GitHub integration] `bug` `platform:web` `needs-info` `github-integration`
- [#99349](https://github.com/anthropics/claude-code/issues/99349) [BUG] Desktop (Linux): claude://resume handled twice imports a CLI worktree session without worktreePath, then "branch is checked out somewhere else" on every message `bug` `has repro` `platform:linux` `area:desktop`
- [#99348](https://github.com/anthropics/claude-code/issues/99348) Cowork and GitHub [GitHub integration] `bug` `area:cowork` `platform:web` `github-integration`
- [#99315](https://github.com/anthropics/claude-code/issues/99315) [BUG] Desktop (Code tab): desktop extension tools stay blocked — a legacy "server:tool" entry set to false cannot be cleared `bug` `has repro` `platform:macos` `area:mcp`
- [#99296](https://github.com/anthropics/claude-code/issues/99296) [BUG] proxyAuthHelper credential is applied only to model requests; bootstrap and feature-flag fetches CONNECT without Proxy-Authorization `bug` `has repro` `platform:macos` `area:networking`
- [#99319](https://github.com/anthropics/claude-code/issues/99319) claude.ai connector lost in Claude Code only after one failed token refresh; Reconnect in claude.ai does not restore it; `claude mcp list` still says Connected `bug` `has repro` `platform:linux` `area:mcp`
- [#99346](https://github.com/anthropics/claude-code/issues/99346) [BUG] Desktop app runs `git maintenance --task=loose-objects` on repos with Claude worktrees; resulting `loose-*` packs break Sublime Merge `bug`
- [#99345](https://github.com/anthropics/claude-code/issues/99345) [Bug] Anthropic API Error: frontier_llm - Unauthorized Model Access for Claude Opus 5.5 `bug` `platform:macos` `area:model`
- [#99344](https://github.com/anthropics/claude-code/issues/99344) [GitHub integration] `question` `github-integration`
- [#99343](https://github.com/anthropics/claude-code/issues/99343) [GitHub integration] `bug` `needs-info` `github-integration`
- [#99342](https://github.com/anthropics/claude-code/issues/99342) [FEATURE] Allow path exclusions for bashEditDiff `enhancement` `area:bash`
- [#99341](https://github.com/anthropics/claude-code/issues/99341) [Bug] System reminder prompt injection causes full KV cache miss during prefill phase `bug` `platform:macos` `area:cost` `area:core`
- [#99340](https://github.com/anthropics/claude-code/issues/99340) It seems as though sometimes there's a disconnect between the threads and the c… `bug` `area:agents` `needs-repro`

### OpenAI Codex (`openai/codex`)

**Stars:** 127,760 · **Open issues:** 20,440 · **Last push:** <1h ago

On October 4, 2026, OpenAI Codex released versions rust-v0.162.0-alpha.10 and rust-v0.162.0-alpha.11, but did not highlight any significant changes in these updates. Important merged pull requests included the implementation to show unavailable slash commands in side conversations and the decoding of Windows Terminal's mapped Shift+Enter sequence, enhancing user interaction. Notably, a critical issue emerged regarding the Codex VS Code extension, where submitted prompts frequently get stuck, disappear, or remain pending, prompting discussions among users for resolution.

#### 🚀 New Releases
- [rust-v0.162.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.11) 0.162.0-alpha.11
- [rust-v0.162.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.10) 0.162.0-alpha.10

#### ✅ Merged PRs
- [#50756](https://github.com/openai/codex/pull/50756) Show unavailable slash commands when searched in side conversations
- [#50741](https://github.com/openai/codex/pull/50741) Keep environment-backed tools exposed across readiness changes
- [#50727](https://github.com/openai/codex/pull/50727) Show model and reasoning effort near the top of task details
- [#50720](https://github.com/openai/codex/pull/50720) Decode Windows Terminal's mapped Shift+Enter sequence
- [#50700](https://github.com/openai/codex/pull/50700) Let the transport create the Windows remote-control socket directory
- [#50695](https://github.com/openai/codex/pull/50695) Preserve local Markdown link labels in the TUI
- [#50687](https://github.com/openai/codex/pull/50687) Keep third-party tools deferred in strict Code Mode Only
- [#50564](https://github.com/openai/codex/pull/50564) Allow transcript selection and copying while bottom modals are open
- [#50562](https://github.com/openai/codex/pull/50562) Keep Code Mode tool discovery guidance stable across catalog changes
- [#50559](https://github.com/openai/codex/pull/50559) Distinguish daemon release identity from executable contents
- [#50558](https://github.com/openai/codex/pull/50558) Avoid reading the current directory when resolving absolute paths
- [#50555](https://github.com/openai/codex/pull/50555) Skip daemon auto-start for Windows-mounted WSL homes
- [#50546](https://github.com/openai/codex/pull/50546) Keep MCP resource helpers available in code mode
- [#50540](https://github.com/openai/codex/pull/50540) Send incremental tool catalog updates in Responses Lite
- [#50536](https://github.com/openai/codex/pull/50536) Keep shared MCP types stable in Code Mode exec descriptions
- [#50531](https://github.com/openai/codex/pull/50531) Persist realtime transcript tails before closure without inference
- [#50525](https://github.com/openai/codex/pull/50525) Reject unknown TUI keys in strict config validation
- [#50516](https://github.com/openai/codex/pull/50516) Add scenario coverage for remote `/compact` context preservation
- [#50510](https://github.com/openai/codex/pull/50510) Require GovCloud guidance acknowledgment after Bedrock setup
- [#50507](https://github.com/openai/codex/pull/50507) Record Windows sandbox service stop diagnostics
- [#50505](https://github.com/openai/codex/pull/50505) Keep Command Center selection adjacent after task removal
- [#50504](https://github.com/openai/codex/pull/50504) Center TUI confirmations over their retained backdrop
- [#50503](https://github.com/openai/codex/pull/50503) Use Enter to accept transcript Find results and Escape to cancel
- [#50499](https://github.com/openai/codex/pull/50499) Include installer stderr in daemon update failures

#### 🐛 New Issues
- [#50653](https://github.com/openai/codex/issues/50653) Codex VS Code extension: submitted prompts get stuck, disappear, or remain as pending `bug` `windows-os` `extension` 💬3
- [#50660](https://github.com/openai/codex/issues/50660) Allow a dot to use additional owned computers, including existing headless Linux Codex Remotes `enhancement` `remote` `dots` 💬3
- [#50671](https://github.com/openai/codex/issues/50671) [macOS/dots] Tasks created by dots show Full access but delegated follow-up turns remain restricted `bug` `sandbox` `app` `dots` 💬3
- [#50544](https://github.com/openai/codex/issues/50544) [Windows][Dots] Restore local executor connectivity and support persistent local-thread workflows `bug` `windows-os` `app` `connectivity` 💬2
- [#50762](https://github.com/openai/codex/issues/50762) Plugin MCP tools partially missing from model-visible catalog despite successful discovery (24 tools vs 1) `bug` `mcp` `CLI` `skills` 💬1
- [#50761](https://github.com/openai/codex/issues/50761) [ChatGPT Plus][Work] Five-hour allowance drains unusually fast with GPT-6 Astra Max and GPT-6.1 Sol `bug` `rate-limits` 💬1
- [#50758](https://github.com/openai/codex/issues/50758) Cross-chat authorization inconsistency `bug` `agent` 💬1
- [#50753](https://github.com/openai/codex/issues/50753) ChatGPT Work: interrupted long-running tasks lack a reliable recovery checkpoint `bug` `model-behavior` `context` `session` 💬1
- [#50751](https://github.com/openai/codex/issues/50751) Windows proxy handling differs across Dot Cloud tasks, cua_repl, and standalone node_repl `bug` `windows-os` `app` `connectivity` 💬1
- [#50750](https://github.com/openai/codex/issues/50750) Feature request: quality-first Auto reasoning that adapts during task execution `enhancement` `agent` 💬1
- [#50749](https://github.com/openai/codex/issues/50749) Windows Computer Use: Notepad capture times out with FrameArrived / window capture errors `bug` `windows-os` `app` `computer-use` 💬1
- [#50748](https://github.com/openai/codex/issues/50748) Windows: follow-up messages to a dot-created desktop task remain failed after restart `bug` `windows-os` `app` `dots` 💬1
- [#50747](https://github.com/openai/codex/issues/50747) Windows Computer Use: runtime tools advertised locally but absent from fresh chats after restart and registration repair `bug` `windows-os` `mcp` `tool-calls` 💬1
- [#50746](https://github.com/openai/codex/issues/50746) VS Code Codex regression: follow-up prompts disappear after submission in 26.930.31730; downgrading to 26.917.62051 fixes it `bug` `extension` 💬1
- [#50745](https://github.com/openai/codex/issues/50745) Windows Desktop pre-execution policy rejection has no rationale or verified review route `bug` `windows-os` `sandbox` `tool-calls` 💬1
- [#50760](https://github.com/openai/codex/issues/50760) macOS 27.0.1: Mac wakes immediately after manual Sleep while ChatGPT desktop app is open, even with Remote Control disabled `bug` `app` `computer-use`
- [#50759](https://github.com/openai/codex/issues/50759) [Windows] Codex Micro device.status polling resets the system idle timer every ~60 seconds, preventing display sleep and pc sleep `bug` `windows-os` `app`
- [#50757](https://github.com/openai/codex/issues/50757) [Windows] Adobe Express tools in More tools fail on empty required arguments `bug` `windows-os` `tool-calls` `app`
- [#50755](https://github.com/openai/codex/issues/50755) **Codex on Windows: requested workspace-write became read-only — supported backend and policy provenance checks `bug` `windows-os` `sandbox` `exec`
- [#50752](https://github.com/openai/codex/issues/50752) GitHub connector: expose author and committer identities for commit-producing operations `enhancement`

#### 🔒 Closed Issues
- [#32279](https://github.com/openai/codex/issues/32279) Limits erroneously drawn to 0% in less than a few minutes when not using codex
- [#50746](https://github.com/openai/codex/issues/50746) VS Code Codex regression: follow-up prompts disappear after submission in 26.930.31730; downgrading to 26.917.62051 fixes it

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,226 · **Open issues:** 788 · **Last push:** 1d ago

On October 4, 2026, there were no new releases for the Gemini CLI, and no pull requests were merged. However, a new issue was opened, specifically #29624, which relates to a failed nightly release. This highlights a pressing concern for the ongoing development and stability of the Gemini CLI, as maintaining frequent nightly builds is crucial for identifying issues before official releases. Overall, the day was routine in terms of development activity, but the failed nightly release warrants attention to prevent further disruptions.

#### 🐛 New Issues
- [#29624](https://github.com/google-gemini/gemini-cli/issues/29624) Nightly Release Failed for on 2026-10-04 `priority/p0` `release-failure`

#### 🔒 Closed Issues
- [#5938](https://github.com/google-gemini/gemini-cli/issues/5938) Add support for local/offline language models (Ollola, LM Studio, etc.)

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,235 · **Open issues:** 2,176 · **Last push:** 1d ago

On October 4, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI, indicating a day of routine maintenance. However, several new issues were reported, including #5048, which raises a question about Aĺ, and #5050, addressing a case-sensitive matching error in the /mcp <server-name> command. Additionally, issue #5049 highlights the unavailability of the Computer Use plugin in ACP mode despite being enabled in CLI version 1.0.91, and #5047 requests the exposure of assisted approval in ACP mode. These issues suggest ongoing user concerns about functionality and compatibility within the system.

#### 🐛 New Issues
- [#5048](https://github.com/github/copilot-cli/issues/5048) Aĺ `invalid` 💬1
- [#5050](https://github.com/github/copilot-cli/issues/5050) /mcp <server-name> fails due to case sensitive matching `triage`
- [#5049](https://github.com/github/copilot-cli/issues/5049) Computer Use plugin unavailable in ACP mode despite being enabled in CLI (Windows, 1.0.91) `triage`
- [#5047](https://github.com/github/copilot-cli/issues/5047) Expose assisted approval in ACP mode `area:permissions` `area:non-interactive`

#### 🔒 Closed Issues
- [#2795](https://github.com/github/copilot-cli/issues/2795) --agent <agent name> does not work with --plugin-dir <dir> -p <prompt>
- [#4839](https://github.com/github/copilot-cli/issues/4839) Make option to disable taskbar icon
- [#4531](https://github.com/github/copilot-cli/issues/4531) Launching VS Code from Copilot CLI drops empty GIT_CONFIG_VALUE and breaks Git discovery
- [#2907](https://github.com/github/copilot-cli/issues/2907) Allow configuring MCP slow-connection warning threshold
- [#2067](https://github.com/github/copilot-cli/issues/2067) ask_user doesn't support multiple line free-form answer
- [#3369](https://github.com/github/copilot-cli/issues/3369) After copying Chinese, Japanese, or Korean from the terminal, pasting the content into the terminal may result in garbled text.
- [#5048](https://github.com/github/copilot-cli/issues/5048) Aĺ

### OpenCode (`anomalyco/opencode`)

**Stars:** 211,641 · **Open issues:** 6,285 · **Last push:** <1h ago

On October 4, 2026, there were no new releases for OpenCode, but several important merged pull requests included a fix for Windows that hides background subprocess windows (#52871). A notable new issue raised was #53011, concerning numeric replacements duplicating the changed value, which has already sparked some discussion. Other issues of interest include #53020, which addresses conflicts with the vscode-v2 extension related to server reloads, and #53042, proposing support for mid-turn steering in the ACP. Overall, the day reflected routine maintenance efforts with a focus on improving user experience and resolving critical bugs.

#### ✅ Merged PRs
- [#52871](https://github.com/anomalyco/opencode/pull/52871) fix(windows): hide background subprocess windows

#### 🐛 New Issues
- [#53011](https://github.com/anomalyco/opencode/issues/53011) edit: numeric replacements duplicate the changed value 💬4
- [#53036](https://github.com/anomalyco/opencode/issues/53036) edit: oldString with leading indentation fails to match ("Could not find oldString") 💬3
- [#53019](https://github.com/anomalyco/opencode/issues/53019) Plugins have no way to transform assistant text for display (or on completion) on v2 `needs:compliance` 💬1
- [#53020](https://github.com/anomalyco/opencode/issues/53020) vscode-v2 extension: fixed port 4096 conflicts on reload, server never killed 💬3
- [#53049](https://github.com/anomalyco/opencode/issues/53049) V2: MCP discovery can starve chat reads in the client request queue 💬2
- [#53060](https://github.com/anomalyco/opencode/issues/53060) agents: frontmatter model cached per session — unavailable model silently pins all later subagents to a fallback provider 💬2
- [#53044](https://github.com/anomalyco/opencode/issues/53044) [FEATURE]: opencode usage command for OpenCode Go limits (with --format json) 💬2
- [#53042](https://github.com/anomalyco/opencode/issues/53042) [FEATURE]: ACP: support mid-turn steering (_session/steering) 💬2
- [#53028](https://github.com/anomalyco/opencode/issues/53028) [FEATURE]: Spawn MCP servers on demand (first tool use) instead of eagerly at session start 💬2
- [#53024](https://github.com/anomalyco/opencode/issues/53024) [FEATURE]: Allow checking context window inside subagents 💬2
- [#53064](https://github.com/anomalyco/opencode/issues/53064) erro `needs:compliance` 💬1
- [#53053](https://github.com/anomalyco/opencode/issues/53053) Remote MCP servers fail to connect when endpoint RTT is above ~250ms (autoSelectFamilyAttemptTimeout too small) 💬1
- [#53063](https://github.com/anomalyco/opencode/issues/53063) session: full-text search across session message content (only titles are searchable today) `needs:compliance` 💬1
- [#53061](https://github.com/anomalyco/opencode/issues/53061) TUI: prompt rows wrap mid-word in narrow terminals 💬1
- [#53052](https://github.com/anomalyco/opencode/issues/53052) desktop: blank Notepad windows open at random intervals on Windows 💬1
- [#52961](https://github.com/anomalyco/opencode/issues/52961) [Bug] Classify provider error 1261 as context overflow 💬1
- [#53045](https://github.com/anomalyco/opencode/issues/53045) GUI extension SDK: follow-ups from the #52868 review 💬1
- [#53038](https://github.com/anomalyco/opencode/issues/53038) [Bug][Windows] Non-UTF8 PowerShell console output causes file tools and shell redirection to produce double-encoded UTF-8 mojibake 💬1
- [#53037](https://github.com/anomalyco/opencode/issues/53037) bug: OpenAI auth flow crashes 💬1
- [#53030](https://github.com/anomalyco/opencode/issues/53030) [FEATURE]: Notify subagents when their context are running out 💬1
- [#53023](https://github.com/anomalyco/opencode/issues/53023) Problème site `needs:compliance` 💬1
- [#53021](https://github.com/anomalyco/opencode/issues/53021) tui: Slash menu -> command description cut off 💬1
- [#53018](https://github.com/anomalyco/opencode/issues/53018) [FEATURE]: add skip option to permission prompts 💬1
- [#53017](https://github.com/anomalyco/opencode/issues/53017) server: a recorded worktree directory that was never created makes /api/model and /api/provider return 500 (DirectoryNotFoundError) `needs:compliance` 💬1
- [#53051](https://github.com/anomalyco/opencode/issues/53051) mcp: server error text can write config secrets into the local engine log
- [#53047](https://github.com/anomalyco/opencode/issues/53047) V2: failed session metadata cannot be retried without reloading
- [#53039](https://github.com/anomalyco/opencode/issues/53039) V2: subagent completion concatenates independent text blocks
- [#53034](https://github.com/anomalyco/opencode/issues/53034) [FEATURE]: v2: support cli.jsonc for the CLI settings file
- [#53025](https://github.com/anomalyco/opencode/issues/53025) V2: tool input repair uses the live schema instead of the request snapshot

#### 🔒 Closed Issues
- [#50924](https://github.com/anomalyco/opencode/issues/50924) cli: upgrade --method curl fails on Windows (mangled backslash path passed to bash)
- [#53036](https://github.com/anomalyco/opencode/issues/53036) edit: oldString with leading indentation fails to match ("Could not find oldString")
- [#52402](https://github.com/anomalyco/opencode/issues/52402) Probleme fonte forfait go , en un jour sans raison, logs normaux
- [#53024](https://github.com/anomalyco/opencode/issues/53024) [FEATURE]: Allow checking context window inside subagents
- [#53052](https://github.com/anomalyco/opencode/issues/53052) desktop: blank Notepad windows open at random intervals on Windows
- [#53045](https://github.com/anomalyco/opencode/issues/53045) GUI extension SDK: follow-ups from the #52868 review
- [#52815](https://github.com/anomalyco/opencode/issues/52815) update: /update fails on Windows when bash resolves to the WSL launcher
- [#53017](https://github.com/anomalyco/opencode/issues/53017) server: a recorded worktree directory that was never created makes /api/model and /api/provider return 500 (DirectoryNotFoundError)
- [#50950](https://github.com/anomalyco/opencode/issues/50950) cli: upgrade on Windows fails because the install script path is passed to bash with backslashes

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,288 · **Open issues:** 1,672 · **Last push:** <1h ago

On October 4, 2026, Qwen Code saw the release of version v0.24.7-nightly.20261003.2c591ecc08, which includes key fixes such as aligning Code Mode text with lazy tool discovery and ensuring approved cross-directory tool calls are honored. There were no merged pull requests in the last 24 hours, but a variety of new issues were reported, highlighting ongoing concerns such as the diagnostics capability that affects timeout scenarios and a bug with inbound file writes leading to orphaned temporary directories. Notably, issue #13300 addresses follow-ups for closed reviews, indicating ongoing refinements in the managed-agent functionality.

#### 🚀 New Releases
- [v0.24.7-nightly.20261003.2c591ecc08](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20261003.2c591ecc08) Release v0.24.7-nightly.20261003.2c591ecc08

#### 🐛 New Issues
- [#13300](https://github.com/QwenLM/qwen-code/issues/13300) feat(managed-agent): Close the H0c review follow-ups deferred from #12855 `priority/P2` `type/feature-request` `category/core` `scope/testing` 💬5
- [#13283](https://github.com/QwenLM/qwen-code/issues/13283) LSP diagnostics: pull capability is never read, so push-only servers cost a 15s timeout and veto workspace reports `priority/P2` `type/bug` `category/core` `status/ready-for-human` 💬4
- [#13340](https://github.com/QwenLM/qwen-code/issues/13340) [FEATURE]: Web Shell plan approval: render the plan as markdown and make Plan & Review enforce Todo structure `priority/P2` `type/feature-request` `category/ui` `scope/markdown` 💬4
- [#13334](https://github.com/QwenLM/qwen-code/issues/13334) bug(feishu): failed inbound file writes orphan temporary directories and drop text fallback `priority/P2` `type/bug` `category/integration` `scope/file-operations` 💬4
- [#13309](https://github.com/QwenLM/qwen-code/issues/13309) Markdown streaming splitter treats inline fence markers as code blocks `priority/P2` `type/bug` `category/ui` `scope/rendering` 💬4
- [#13275](https://github.com/QwenLM/qwen-code/issues/13275) runtime-broker: remaining test-oracle gaps and the reconcile=true fan-out decision (deferred from #13214) `priority/P3` `category/development` `scope/testing` `type/enhancement` 💬4
- [#13266](https://github.com/QwenLM/qwen-code/issues/13266) ci(serve-ab): ACP channel subprocess SIGKILLed during channel.initialize under runner load (infrastructure flake) `priority/P3` `type/bug` `category/development` `scope/testing` 💬4
- [#13358](https://github.com/QwenLM/qwen-code/issues/13358) Session writer lease: stale active lock (dead owner) under reclaimPolicy "never" = permanent 409, no recovery path `priority/P2` `category/core` `scope/session-management` `type/enhancement` 💬3
- [#13353](https://github.com/QwenLM/qwen-code/issues/13353) Web Shell: plan/todo surface not available in Split View panes (chat-only by design) `priority/P3` `type/feature-request` `category/ui` `scope/web-shell` 💬3
- [#13356](https://github.com/QwenLM/qwen-code/issues/13356) deflake: hook-runner.process reap assertion races kill propagation under runner load `priority/P3` `type/bug` `category/development` `scope/testing` 💬3
- [#13339](https://github.com/QwenLM/qwen-code/issues/13339) test(managed-agent): HostedWorkspaceToolTurnIT javaLoad 409 "hosted_turn_recovery_required" flakes on the MySQL 8.4 fault-gates lane `priority/P2` `type/bug` `category/integration` `scope/testing` 💬3
- [#13338](https://github.com/QwenLM/qwen-code/issues/13338) contextWindowSize survives a model change when the target's registry entry declares none (inherited via { ...parentConfig }) `priority/P2` `type/bug` `category/core` `scope/token-management` 💬3
- [#13333](https://github.com/QwenLM/qwen-code/issues/13333) fix(managed-agent): ≥8 concurrent Turns stall after the model answers on modest hardware (lock convoy in the store path) `priority/P1` `type/bug` `category/core` `scope/session-management` 💬3
- [#13328](https://github.com/QwenLM/qwen-code/issues/13328) feat(managed-agent): a second concurrent Session on the same Workspace mount should queue, not fail the Turn terminally `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#13321](https://github.com/QwenLM/qwen-code/issues/13321) Bound successful read-only exploration when an implementation task makes no progress `priority/P2` `type/feature-request` `category/core` `scope/token-management` 💬3
- [#13320](https://github.com/QwenLM/qwen-code/issues/13320) fix(managed-agent): mixed-version takeover refusal surfaces as opaque load 503 instead of a journal-compatibility error `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#13327](https://github.com/QwenLM/qwen-code/issues/13327) fix(managed-agent): a coordinator-only crash wedges the in-flight Turn even though the Harness survived `priority/P1` `type/bug` `category/core` `scope/session-management` 💬3
- [#13326](https://github.com/QwenLM/qwen-code/issues/13326) fix(managed-agent): a long assistant answer publishes fully via deltas, then fails the Turn at the 64KB journal inline limit `priority/P1` `type/bug` `category/core` `scope/session-management` 💬3
- [#13269](https://github.com/QwenLM/qwen-code/issues/13269) fix(managed-agent): #13163 follow-ups: cold-cache cancel and deferred review suggestions `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#13322](https://github.com/QwenLM/qwen-code/issues/13322) fix(managed-agent): a Turn behind an indefinitely-held model stream never settles — no deadline classification `status/need-information` `priority/P2` `type/bug` `category/core` 💬3
- [#13319](https://github.com/QwenLM/qwen-code/issues/13319) fix(managed-agent): a model retry landing after the first published chunk glues the orphaned prefix into the public transcript `status/need-information` `priority/P2` `type/bug` `category/core` 💬3
- [#13318](https://github.com/QwenLM/qwen-code/issues/13318) fix(managed-agent): takeover load must be idempotent — a lost reply wedges the Turn in a 409 hosted_session_already_attached loop `status/in-progress` `priority/P2` `type/bug` `category/core` 💬3
- [#13317](https://github.com/QwenLM/qwen-code/issues/13317) Add /目标 as a Chinese alias for /goal `priority/P3` `type/feature-request` `category/cli` `scope/commands` 💬3
- [#13313](https://github.com/QwenLM/qwen-code/issues/13313) [Backlog] sdk-java Hosted Harness client — 49 deferred review findings from #12654 post-merge review `priority/P3` `category/development` `scope/testing` `scope/documentation` 💬3
- [#13303](https://github.com/QwenLM/qwen-code/issues/13303) docs(mcp): document the restrictive registered-prefix fallback and the legacy long-name allow change `priority/P3` `status/blocked` `type/documentation` `category/core` 💬3
- [#13307](https://github.com/QwenLM/qwen-code/issues/13307) Hosted Shell: PR #12848 round-2 review follow-ups — R2-35 plus 35 standing Suggestions `priority/P1` `type/bug` `category/core` `scope/shell` 💬3
- [#13302](https://github.com/QwenLM/qwen-code/issues/13302) Tracking: design-level follow-ups from the PR #12692 R2 post-merge review `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#13258](https://github.com/QwenLM/qwen-code/issues/13258) test(managed-agent): real-model mode of run-managed-agent-server-e2e.ts fails out of the box `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#13295](https://github.com/QwenLM/qwen-code/issues/13295) Enable journal-head authorization after the fleet runs the V35 schema `priority/P2` `category/performance` `scope/latency` `type/enhancement` 💬3
- [#13316](https://github.com/QwenLM/qwen-code/issues/13316) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > reports and clears the unknown Hook fence (reload: true) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13360](https://github.com/QwenLM/qwen-code/issues/13360) Goal verifier treats aggregate wrapper results (agent/advisor/workflow/thread_read) as external_fact 💬1

#### 🔒 Closed Issues
- [#13252](https://github.com/QwenLM/qwen-code/issues/13252) Main-turn output clamp can exceed a user-configured small context window (MIN_CLAMPED_OUTPUT_TOKENS 4K floor) — second half of #13208
- [#13249](https://github.com/QwenLM/qwen-code/issues/13249) fix(ci): the nightly CodeQL scan can die silently — no notifier covers it, and a cancelled or empty run reads as green
- [#13266](https://github.com/QwenLM/qwen-code/issues/13266) ci(serve-ab): ACP channel subprocess SIGKILLed during channel.initialize under runner load (infrastructure flake)
- [#13258](https://github.com/QwenLM/qwen-code/issues/13258) test(managed-agent): real-model mode of run-managed-agent-server-e2e.ts fails out of the box
- [#13245](https://github.com/QwenLM/qwen-code/issues/13245) perf(ci): route trusted PR lanes off hosted runners onto the idle ECS pool

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

**Stars:** 391,246 · **Open issues:** 9,285 · **Last push:** <1h ago

On October 4, 2026, OpenClaw released version 2026.9.8, which included numerous refinements and bug fixes spanning 58 commits from 43 contributors. Key updates focused on refining session metadata migration through the Doctor, enhancing the management of legacy auth profiles, and improving memory management in session-file tests. Notable fixes addressed issues with beta release validation, restoring registration tests on Linux, and reducing Windows startup delays linked to installed plugins. Among the new issues, a significant bug was reported regarding the 2026.9.8 update rolling back due to activation Doctor errors, which has generated considerable discussion.

#### 🚀 New Releases
- [v2026.9.8](https://github.com/openclaw/openclaw/releases/tag/v2026.9.8) openclaw 2026.9.8

#### ✅ Merged PRs
- [#162920](https://github.com/openclaw/openclaw/pull/162920) refactor(acp): migrate legacy session metadata through Doctor
- [#164675](https://github.com/openclaw/openclaw/pull/164675) fix(ci): unblock beta release validation
- [#164588](https://github.com/openclaw/openclaw/pull/164588) refactor(auth-profiles): record shared auth-profile usage through workers
- [#164686](https://github.com/openclaw/openclaw/pull/164686) test(memory): speed up session-file tests
- [#162275](https://github.com/openclaw/openclaw/pull/162275) fix: finish Doctor upgrades for public plugin setup entries
- [#164677](https://github.com/openclaw/openclaw/pull/164677) fix(update): hand the private Node runtime to npm lifecycle children
- [#164520](https://github.com/openclaw/openclaw/pull/164520) refactor(runtime): deslop runtime caches
- [#164637](https://github.com/openclaw/openclaw/pull/164637) refactor(native): deslop macOS and Android shells
- [#164679](https://github.com/openclaw/openclaw/pull/164679) refactor(media): deslop media
- [#164649](https://github.com/openclaw/openclaw/pull/164649) fix(telegram): streamed reply vanishes when its replacement message never lands
- [#164676](https://github.com/openclaw/openclaw/pull/164676) fix: restore Codex registration tests on Linux
- [#164680](https://github.com/openclaw/openclaw/pull/164680) fix: reduce Windows startup delays with installed plugins
- [#164669](https://github.com/openclaw/openclaw/pull/164669) refactor(cli): deslop CLI and Doctor command flows
- [#164566](https://github.com/openclaw/openclaw/pull/164566) refactor(agents): deslop agents
- [#164664](https://github.com/openclaw/openclaw/pull/164664) fix: preserve Android screenshot release runner routing
- [#164662](https://github.com/openclaw/openclaw/pull/164662) fix: restore worker imports in plugin SDK loaders
- [#164605](https://github.com/openclaw/openclaw/pull/164605) perf(chat): inline reply previews and index message reads
- [#164663](https://github.com/openclaw/openclaw/pull/164663) fix: allow finished workers in voice-call fixture checks
- [#164633](https://github.com/openclaw/openclaw/pull/164633) fix(memory): inherit default context limits when an agent overrides one
- [#164567](https://github.com/openclaw/openclaw/pull/164567) fix: reclaim idle worker heap and admit recovered Bun tests
- [#164666](https://github.com/openclaw/openclaw/pull/164666) fix(ci): select mock consumers when module exports change
- [#164330](https://github.com/openclaw/openclaw/pull/164330) fix(update): refuse retired Voice state before replacing the Gateway
- [#164655](https://github.com/openclaw/openclaw/pull/164655) test(node-host): retain required process-tree cleanup contract
- [#164658](https://github.com/openclaw/openclaw/pull/164658) fix(release): trust immutable plugin npm preflight refs
- [#164654](https://github.com/openclaw/openclaw/pull/164654) chore(ui): refresh control ui locales
- [#164590](https://github.com/openclaw/openclaw/pull/164590) refactor(channels): deslop large channel plugins
- [#164575](https://github.com/openclaw/openclaw/pull/164575) fix(browser): host guidance conflicts with configured node routing
- [#164640](https://github.com/openclaw/openclaw/pull/164640) fix(linux): restore native onboarding CI coverage
- [#164626](https://github.com/openclaw/openclaw/pull/164626) refactor(llama-cpp): remove unused discovery timeout option
- [#164061](https://github.com/openclaw/openclaw/pull/164061) fix: restore subagent and background process side panels
- [#164538](https://github.com/openclaw/openclaw/pull/164538) refactor(infra): deslop infra
- [#164636](https://github.com/openclaw/openclaw/pull/164636) fix(update): never strand a non-root update on launcher ownership
- [#164622](https://github.com/openclaw/openclaw/pull/164622) test(doctor): cover accepted maintenance during drainage
- [#164503](https://github.com/openclaw/openclaw/pull/164503) fix(doctor): drain agent databases before maintenance release
- [#164634](https://github.com/openclaw/openclaw/pull/164634) test(infra,media,node-host): remove low-value tests (batch d185)
- [#164631](https://github.com/openclaw/openclaw/pull/164631) fix(android): allow store releases to finish on internal tracks
- [#164578](https://github.com/openclaw/openclaw/pull/164578) fix(scripts): speed up plugin SDK export validation
- [#164581](https://github.com/openclaw/openclaw/pull/164581) fix(android): unblock store screenshots after Settings redesign
- [#164544](https://github.com/openclaw/openclaw/pull/164544) refactor(infra): deslop infrastructure
- [#164524](https://github.com/openclaw/openclaw/pull/164524) chore(ui): refresh control ui locales
- [#164519](https://github.com/openclaw/openclaw/pull/164519) docs(sessions): define worker-owned transcript working sets
- [#164632](https://github.com/openclaw/openclaw/pull/164632) docs: clarify incomplete Sol support in 2026.9.8
- [#164604](https://github.com/openclaw/openclaw/pull/164604) feat(workboard): show boards in the sidebar and pin your own
- [#164606](https://github.com/openclaw/openclaw/pull/164606) ci: pin the OpenClaw Bun fork c999d9cb92 prerelease
- [#164587](https://github.com/openclaw/openclaw/pull/164587) fix(ci): allow Testbox queue admission for one hour
- [#164613](https://github.com/openclaw/openclaw/pull/164613) docs(cloud-workers): upgrade PATH-shadowing nvm Node in the setup recipe
- [#164424](https://github.com/openclaw/openclaw/pull/164424) refactor(media): track generated-HTML provenance through the shared-state worker
- [#164628](https://github.com/openclaw/openclaw/pull/164628) test(infra,workers): remove low-value tests (batch d184)
- [#164554](https://github.com/openclaw/openclaw/pull/164554) fix(update): activation Doctor falsely reports offline maintenance
- [#164441](https://github.com/openclaw/openclaw/pull/164441) fix: release discarded text behind cached previews and process output
- [#164514](https://github.com/openclaw/openclaw/pull/164514) perf(agents): run per-turn session-entry patches through the worker
- [#164600](https://github.com/openclaw/openclaw/pull/164600) feat: catch Android store screenshot failures in PR CI
- [#164616](https://github.com/openclaw/openclaw/pull/164616) fix(macos): fence app-owned service installs with the observed runtime pin
- [#164618](https://github.com/openclaw/openclaw/pull/164618) fix(release): tolerate transient Git failures after mobile uploads
- [#164602](https://github.com/openclaw/openclaw/pull/164602) fix(ui): recover model setup after Gateway restarts
- [#164623](https://github.com/openclaw/openclaw/pull/164623) chore(i18n): refresh native locales
- [#149048](https://github.com/openclaw/openclaw/pull/149048) improve: uplift notification quiet hours settings design
- [#164537](https://github.com/openclaw/openclaw/pull/164537) fix: queued workers miss cooperative checkpoints under shared pressure
- [#164573](https://github.com/openclaw/openclaw/pull/164573) perf(sessions): compact shared lists and apply row deltas
- [#164561](https://github.com/openclaw/openclaw/pull/164561) fix(agents): keep private runtime entries out of saved context
- [#164612](https://github.com/openclaw/openclaw/pull/164612) fix(release): isolate 2026.9.9 activation fixture
- [#164320](https://github.com/openclaw/openclaw/pull/164320) refactor(testing): deslop test-only production seams
- [#164619](https://github.com/openclaw/openclaw/pull/164619) chore(ui): refresh control ui locales
- [#164614](https://github.com/openclaw/openclaw/pull/164614) refactor(agents): deslop agent runners
- [#164521](https://github.com/openclaw/openclaw/pull/164521) fix(worktrees): keep the allocation lease alive through slow session preparation
- [#163863](https://github.com/openclaw/openclaw/pull/163863) fix(telegram): photo albums split into several replies when the Gateway is under CPU load
- [#164368](https://github.com/openclaw/openclaw/pull/164368) fix(mcp): preserve App pagination cursor bytes
- [#162204](https://github.com/openclaw/openclaw/pull/162204) fix(ollama): /think max falls back to high when the ollama provider points at ollama.com
- [#164594](https://github.com/openclaw/openclaw/pull/164594) fix: Gateway stalls when background runs start outside the agent workspace
- [#164509](https://github.com/openclaw/openclaw/pull/164509) fix(doctor): quarantine an unusable agent deletion journal instead of blocking the update
- [#164522](https://github.com/openclaw/openclaw/pull/164522) fix(gateway): stop portal proof timeouts from cascading through Gateway test shards
- [#164576](https://github.com/openclaw/openclaw/pull/164576) feat: play YouTube videos inline in Control UI chats
- [#164591](https://github.com/openclaw/openclaw/pull/164591) feat(macos): show a web-style identity footer in the native sidebar
- [#164556](https://github.com/openclaw/openclaw/pull/164556) fix: Ultrafast hidden for config API keys and auto-selected on Codex
- [#164086](https://github.com/openclaw/openclaw/pull/164086) feat(code-mode): keep store/load values across cells, replies, and restarts
- [#164532](https://github.com/openclaw/openclaw/pull/164532) fix(ui): agent startup shows a panel error instead of loading automatically
- [#164586](https://github.com/openclaw/openclaw/pull/164586) refactor(config): retire per-agent agentRuntime and compaction from the authored config type
- [#164547](https://github.com/openclaw/openclaw/pull/164547) refactor(auto-reply): deslop auto-reply and channels
- [#164595](https://github.com/openclaw/openclaw/pull/164595) fix(release): preserve publication and source provenance contracts
- [#163201](https://github.com/openclaw/openclaw/pull/163201) fix(tui): preserve unsent slash-prefixed drafts while disconnected
- [#164286](https://github.com/openclaw/openclaw/pull/164286) refactor(schema): deslop duplicated schema types
- [#163545](https://github.com/openclaw/openclaw/pull/163545) fix: show authoritative tool outcomes
- [#164464](https://github.com/openclaw/openclaw/pull/164464) fix(release): seal exact plugin artifacts in FRV
- [#164553](https://github.com/openclaw/openclaw/pull/164553) fix(release): isolate plugin activation fixture
- [#164535](https://github.com/openclaw/openclaw/pull/164535) fix: stabilize worker and browser E2E fixtures
- [#155640](https://github.com/openclaw/openclaw/pull/155640) fix(ollama): /think max falls back to high on newer Ollama Cloud models
- [#164401](https://github.com/openclaw/openclaw/pull/164401) feat: use bundled Bun in the Linux companion
- [#162300](https://github.com/openclaw/openclaw/pull/162300) fix(ollama): thinking Off leaks GLM 5.3 reasoning into replies on Ollama Cloud
- [#156493](https://github.com/openclaw/openclaw/pull/156493) fix(models): refresh fails when an Anthropic profile is stored without an Anthropic model
- [#164534](https://github.com/openclaw/openclaw/pull/164534) fix(ui): show approval scope on standalone approval pages
- [#164539](https://github.com/openclaw/openclaw/pull/164539) refactor(zalo): remove unused API URL option
- [#164492](https://github.com/openclaw/openclaw/pull/164492) fix(backup): refuse restores that exceed target capacity
- [#164582](https://github.com/openclaw/openclaw/pull/164582) refactor(extensions): deslop non-channel tool extensions
- [#164560](https://github.com/openclaw/openclaw/pull/164560) fix(ui): ignore IME confirmation Enter in queued edits and side chat
- [#164496](https://github.com/openclaw/openclaw/pull/164496) feat(mcp): allow an App's tool calls while its view stays open
- [#164552](https://github.com/openclaw/openclaw/pull/164552) refactor(media): keep native media opener out of channel plugins
- [#164565](https://github.com/openclaw/openclaw/pull/164565) refactor(gateway): deslop gateway subdirectories
- [#164542](https://github.com/openclaw/openclaw/pull/164542) test(gateway,infra,outbound): remove low-value tests (batch d183)
- [#164549](https://github.com/openclaw/openclaw/pull/164549) fix(telegram): later same-sender messages stall and replay while an earlier turn waits
- [#164458](https://github.com/openclaw/openclaw/pull/164458) refactor(agents): persist progress cards through the agent writer
- [#164466](https://github.com/openclaw/openclaw/pull/164466) fix(plugin-sdk): API diff fails under load and on macOS temporary checkouts
- [#164541](https://github.com/openclaw/openclaw/pull/164541) test(gateway): stabilize 2026.9.9 verbose chat case
- [#164555](https://github.com/openclaw/openclaw/pull/164555) test(ui): update MCP App conformance for in-pane confirmations
- [#164311](https://github.com/openclaw/openclaw/pull/164311) fix(discord): keep long model IDs selectable
- [#164546](https://github.com/openclaw/openclaw/pull/164546) fix(gateway): reclaim a dead owner lease with the same liveness evidence as the state lock
- [#164543](https://github.com/openclaw/openclaw/pull/164543) fix(tooling): stale main-checkout packages break Crabbox in source-only worktrees despite a tooling root
- [#164399](https://github.com/openclaw/openclaw/pull/164399) refactor(workspace): retire pre-July setup sidecar discovery
- [#164491](https://github.com/openclaw/openclaw/pull/164491) docs(backup): explain generation-safe rollback restores
- [#164196](https://github.com/openclaw/openclaw/pull/164196) chore(release): remove obsolete release-train fixtures
- [#164530](https://github.com/openclaw/openclaw/pull/164530) fix: restore checkout ownership for retained AWS runners
- [#164517](https://github.com/openclaw/openclaw/pull/164517) perf(worktrees): reuse sandbox dependency templates
- [#164513](https://github.com/openclaw/openclaw/pull/164513) fix: keep Bun SDK resolver probes native
- [#164527](https://github.com/openclaw/openclaw/pull/164527) test(gateway): remove low-value tests (batch d182)
- [#164454](https://github.com/openclaw/openclaw/pull/164454) refactor(acp): persist parent-stream diagnostic batches through the agent writer
- [#164502](https://github.com/openclaw/openclaw/pull/164502) perf(sessions): share immutable initial transcript messages
- [#164479](https://github.com/openclaw/openclaw/pull/164479) chore(db): reclassify census-verified worker-only and maintenance inventory sites (round 5)
- [#162844](https://github.com/openclaw/openclaw/pull/162844) fix(mcp): skip response stream limits on non-ok HTTP responses
- [#164381](https://github.com/openclaw/openclaw/pull/164381) fix: honor longer Runway and Together video timeouts
- [#164391](https://github.com/openclaw/openclaw/pull/164391) refactor(plugins): settle native session bindings in the executing worker (compound 2a)
- [#164377](https://github.com/openclaw/openclaw/pull/164377) fix(agents): prevent concurrent workspace setup failures
- [#164387](https://github.com/openclaw/openclaw/pull/164387) fix(ci): restore Kova mock-provider validation
- [#164389](https://github.com/openclaw/openclaw/pull/164389) fix(baseten): restore a working default for new setups
- [#164376](https://github.com/openclaw/openclaw/pull/164376) fix: honor selected runtimes in Gateway and cache tests
- [#164291](https://github.com/openclaw/openclaw/pull/164291) refactor(gateway): persist Mention Inbox through workers
- [#164359](https://github.com/openclaw/openclaw/pull/164359) fix(ci): native release suites miss required inputs
- [#164358](https://github.com/openclaw/openclaw/pull/164358) chore(ui): refresh control ui locales
- [#164313](https://github.com/openclaw/openclaw/pull/164313) refactor(sessions): compare submitted inputs and recover dedupe through workers
- [#164331](https://github.com/openclaw/openclaw/pull/164331) fix: reconcile Windows node results in deeply nested repositories
- [#164448](https://github.com/openclaw/openclaw/pull/164448) refactor(workboard): read board snapshots and widget documents through the board worker
- [#164493](https://github.com/openclaw/openclaw/pull/164493) fix(ui): confirm app messages inside the app view instead of a native dialog
- [#163471](https://github.com/openclaw/openclaw/pull/163471) fix: prevent internal runtime context from appearing in replies
- [#164486](https://github.com/openclaw/openclaw/pull/164486) fix(ui): saved-message banner lingers after delivery and crowds the chat
- [#164488](https://github.com/openclaw/openclaw/pull/164488) fix: preserve explicit live model coverage
- [#164489](https://github.com/openclaw/openclaw/pull/164489) fix(test): refresh release worker fixtures
- [#164278](https://github.com/openclaw/openclaw/pull/164278) refactor(async): deslop retry, timeout, and abort handling
- [#164467](https://github.com/openclaw/openclaw/pull/164467) perf(memory): reduce transcript and schema cache retention
- [#164463](https://github.com/openclaw/openclaw/pull/164463) fix(agents): let visible children wait for incoming messages
- [#164487](https://github.com/openclaw/openclaw/pull/164487) fix(release): packed activation smoke reads shared state
- [#164482](https://github.com/openclaw/openclaw/pull/164482) fix(ios): watch snapshot acknowledgment test waits for the acknowledged snapshot
- [#164495](https://github.com/openclaw/openclaw/pull/164495) chore(ui): refresh control ui locales
- [#164414](https://github.com/openclaw/openclaw/pull/164414) refactor(telegram): normalize bot endpoint roots through Doctor
- [#164460](https://github.com/openclaw/openclaw/pull/164460) refactor(feishu): remove unused startup timeout option
- [#164206](https://github.com/openclaw/openclaw/pull/164206) fix(hooks): Gmail hook repeats the same error alert on every redelivery
- [#164469](https://github.com/openclaw/openclaw/pull/164469) fix(control-ui): show all people without pagination
- [#164481](https://github.com/openclaw/openclaw/pull/164481) chore(i18n): refresh native locales
- [#164450](https://github.com/openclaw/openclaw/pull/164450) fix(config): avoid restarts from unrelated preference changes
- [#164483](https://github.com/openclaw/openclaw/pull/164483) fix(ci): repair full release validation blockers
- [#164103](https://github.com/openclaw/openclaw/pull/164103) refactor(config): retire agents.list and default markers from the authored config type
- [#164457](https://github.com/openclaw/openclaw/pull/164457) chore(ci): pin OCM v0.2.48 for Kova performance
- [#162258](https://github.com/openclaw/openclaw/pull/162258) fix(update): avoid aborting schema inspection when a WAL database becomes active
- [#163487](https://github.com/openclaw/openclaw/pull/163487) fix(ui): sensitive config fields lock after the first typed character
- [#160619](https://github.com/openclaw/openclaw/pull/160619) fix(channels): resolve workspace-qualified Slack users in auto mode
- [#164451](https://github.com/openclaw/openclaw/pull/164451) fix: keep agent tools usable after forced plugin retirement
- [#164435](https://github.com/openclaw/openclaw/pull/164435) fix(mac): reconnect and switch gateways after trusted certificate renewal
- [#164440](https://github.com/openclaw/openclaw/pull/164440) fix(release): qualify frozen 2026.9.9 validation
- [#164436](https://github.com/openclaw/openclaw/pull/164436) feat(macos): show plugin session catalogs in the native sidebar
- [#164411](https://github.com/openclaw/openclaw/pull/164411) feat(ci): run advisory live and E2E checks on Bun
- [#164446](https://github.com/openclaw/openclaw/pull/164446) fix(release): isolate bundled plugin activation smoke
- [#164438](https://github.com/openclaw/openclaw/pull/164438) fix(update): accept a re-linked launcher during the swap and keep triage usable without safe mode
- [#164403](https://github.com/openclaw/openclaw/pull/164403) fix(gateway): finish restart cleanup and unblock database recovery
- [#164423](https://github.com/openclaw/openclaw/pull/164423) chore(deps): update OpenAI SDK to 7.23.0
- [#164259](https://github.com/openclaw/openclaw/pull/164259) fix: keep punctuated silent-reply fragments out of streaming previews
- [#164437](https://github.com/openclaw/openclaw/pull/164437) fix(ui): keep wait tool rows from appearing blank
- [#164430](https://github.com/openclaw/openclaw/pull/164430) improve(ui): show readable elapsed time in completed work summaries
- [#164419](https://github.com/openclaw/openclaw/pull/164419) perf(sessions): stop reading whole transcripts for Control UI history pages
- [#164432](https://github.com/openclaw/openclaw/pull/164432) fix(release): pin main closeout handoffs to exact SHAs
- [#164421](https://github.com/openclaw/openclaw/pull/164421) fix(qa): repair Telegram release validation fixtures
- [#164428](https://github.com/openclaw/openclaw/pull/164428) perf(models): reduce catalog worker standing heap
- [#164434](https://github.com/openclaw/openclaw/pull/164434) test(gateway): remove low-value tests (batch d181)
- [#164342](https://github.com/openclaw/openclaw/pull/164342) fix(release): allow 2026.9.9 channel waivers
- [#164264](https://github.com/openclaw/openclaw/pull/164264) fix(update): preserve failure reasons after report redaction
- [#163203](https://github.com/openclaw/openclaw/pull/163203) fix(whatsapp): migrate unscoped credentials through Doctor
- [#164413](https://github.com/openclaw/openclaw/pull/164413) chore(db): reclassify worker-only inventory sites with evidence (round 4)
- [#164325](https://github.com/openclaw/openclaw/pull/164325) fix(terminal): preserve RGB colors in local browser sessions
- [#164402](https://github.com/openclaw/openclaw/pull/164402) refactor(googlechat): remove unused error prefix option
- [#164418](https://github.com/openclaw/openclaw/pull/164418) fix(diagnostics): sample RPC heap deltas only for exclusive handler windows
- [#164378](https://github.com/openclaw/openclaw/pull/164378) fix: retain CLI conversations when child completions arrive
- [#164296](https://github.com/openclaw/openclaw/pull/164296) fix(worker): restore tool parity and compact presentation on nodes
- [#164306](https://github.com/openclaw/openclaw/pull/164306) feat(update): activate and recover sealed immutable generations
- [#164410](https://github.com/openclaw/openclaw/pull/164410) test(gateway,daemon): remove low-value tests (batch d180)
- [#164236](https://github.com/openclaw/openclaw/pull/164236) fix: preserve Gateway ownership with separate Docker CLI containers
- [#164350](https://github.com/openclaw/openclaw/pull/164350) fix(tests): avoid false transcript lock ordering failures
- [#164374](https://github.com/openclaw/openclaw/pull/164374) fix(build): speed up declaration input discovery
- [#164173](https://github.com/openclaw/openclaw/pull/164173) refactor(telegram): remove legacy reply-cache fallbacks
- [#163701](https://github.com/openclaw/openclaw/pull/163701) fix: every attachment send fails when a channel mediaMaxMb is 0
- [#164373](https://github.com/openclaw/openclaw/pull/164373) fix(ci): preserve measured work when release shards split
- [#162938](https://github.com/openclaw/openclaw/pull/162938) chore(deps): update @google/genai to 2.24.0
- [#164400](https://github.com/openclaw/openclaw/pull/164400) test(gateway,daemon,flows): remove low-value tests (batch d179)
- [#164398](https://github.com/openclaw/openclaw/pull/164398) perf(reply): share config snapshots across runs

#### 🐛 New Issues
- [#164394](https://github.com/openclaw/openclaw/issues/164394) [Bug]: Control UI WebChat transcript jitters continuously (micro up/down tremble) when scrolling into the middle of history `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬9
- [#164066](https://github.com/openclaw/openclaw/issues/164066) [Bug]: 2026.9.8 managed update still rolls back: activation Doctor refuses with "undergoing offline maintenance" (#160671 and #163803 are on main, not in 9.8) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬6
- [#164396](https://github.com/openclaw/openclaw/issues/164396) [Bug]: Openclaw 2026.9.8 refuses to connect to its local gateway after clean node 22 LTS and windows 11 install. `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬5
- [#164074](https://github.com/openclaw/openclaw/issues/164074) Native update recovery stuck at publication-complete when retained previous package fingerprint changes `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-info` 💬5
- [#164422](https://github.com/openclaw/openclaw/issues/164422) [Bug]: macOS non-root update self-poisons launcher group (wheel) - publication-intent check fails package-swap, blocks its own rollback, strands prepared anchor and gates all future updates (update-recovery-pending) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬4
- [#164188](https://github.com/openclaw/openclaw/issues/164188) [Bug]: package-swap permission failure does not identify rejected recovery object `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#164095](https://github.com/openclaw/openclaw/issues/164095) [Bug]: 2026.9.8 ships Codex 0.158.0 while advertising GPT-6.1 Sol OAuth; turns return 400 `P2` `impact:auth-provider` 💬3
- [#164250](https://github.com/openclaw/openclaw/issues/164250) Inbound user message becomes "orphaned" (invisible in next context assembly) when the model API rate-limits (429) `P1` `clawsweeper:needs-info` `impact:session-state` `impact:message-loss` 💬3
- [#164642](https://github.com/openclaw/openclaw/issues/164642) [Bug]: mcp reload disposes CLI-local runtimes, not the running Gateway cache `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#164528](https://github.com/openclaw/openclaw/issues/164528) [Bug]: openclaw update aborts during candidate validation/package-swap due to strict permission check on stale recovery directories `clawsweeper:needs-info` `P0` `issue-rating: 🦐 gold shrimp` `impact:ux-release-blocker` 💬3
- [#164397](https://github.com/openclaw/openclaw/issues/164397) [Bug]: Mobile Control UI composer bottom clipped with keyboard closed, visible with keyboard open `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#164316](https://github.com/openclaw/openclaw/issues/164316) [Bug]: Deletion-journal recovery holds coordination SQLite files and recommends a reserved agent ID `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬3
- [#164214](https://github.com/openclaw/openclaw/issues/164214) [Bug]: Package publication recovery permanently stuck in `publishing` after an external write to the live package (macOS, 2026.9.8) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬3
- [#164113](https://github.com/openclaw/openclaw/issues/164113) [Bug]: update fails at updater-runtime-retention with FICLONE EPERM inside an unprivileged LXC container (seccomp blocks ioctl) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬3
- [#164081](https://github.com/openclaw/openclaw/issues/164081) [Bug]: Background exec that times out without output never wakes the session (heartbeat retires the wake as no-pending-event) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#164091](https://github.com/openclaw/openclaw/issues/164091) [Bug]: Waiting serial tasks inherit the previous request context `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#164525](https://github.com/openclaw/openclaw/issues/164525) [Bug]: Private Node runtime is not propagated to npm lifecycle child processes `bug` `bug:behavior` `P2` `impact:ux-friction` 💬2
- [#164611](https://github.com/openclaw/openclaw/issues/164611) Gate superseded-preview delete on confirmed replacement delivery (draft-stream.ts) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164610](https://github.com/openclaw/openclaw/issues/164610) Streaming preview deleted without persistent replacement on harness turns `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164646](https://github.com/openclaw/openclaw/issues/164646) [Bug]: Activity E2E waits for a redundant session refresh `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164644](https://github.com/openclaw/openclaw/issues/164644) Android screenshot CI job bypasses release runner routing `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164651](https://github.com/openclaw/openclaw/issues/164651) synology-chat: replies silently dropped since v2026.9.7 — turn succeeds, "dispatch completed", but no HTTP request is ever made `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#164641](https://github.com/openclaw/openclaw/issues/164641) [Bug]: Code Mode browser snapshot/text return only stats, no page body `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#164453](https://github.com/openclaw/openclaw/issues/164453) Update failure: gateway-recovery-verification (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦐 gold shrimp` `impact:ux-release-blocker` 💬2
- [#164459](https://github.com/openclaw/openclaw/issues/164459) Update failure: update-executor-settlement (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#164420](https://github.com/openclaw/openclaw/issues/164420) Update failure: unexpected-error (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#164557](https://github.com/openclaw/openclaw/issues/164557) [Bug]: iOS app shows the Web Push Notifications page with "Not supported" and a Safari Add-to-Home-Screen hint `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164585](https://github.com/openclaw/openclaw/issues/164585) [Bug]: Web Push "Agent finished" fires while the same conversation is open and visible on the device `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#164515](https://github.com/openclaw/openclaw/issues/164515) [Bug]: Anthropic history cache invalidated when an inter-session user's active projection becomes replay history `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164499](https://github.com/openclaw/openclaw/issues/164499) [Bug]: Retained AWS runner ownership points to a temporary checkout `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164470](https://github.com/openclaw/openclaw/issues/164470) Copilot plugin/MCP tool calls fail from a session's 2nd turn onward ("Async work scope is closed") `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164148](https://github.com/openclaw/openclaw/issues/164148) [Bug]: Gmail Pub/Sub hook re-fires duplicate alerts for a single event, no dedupe on historyId/messageId `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#164404](https://github.com/openclaw/openclaw/issues/164404) [Bug]: config validate, plugin list, and doctor --lint all abort with "read failed: TypeError: reading 'trim'" on a config that health reports as healthy `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `maturity:stable` 💬2
- [#163961](https://github.com/openclaw/openclaw/issues/163961) [Bug]: Separate Docker CLI TUI launch is followed by persistent Gateway state-ownership failures on 2026.9.7 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#164346](https://github.com/openclaw/openclaw/issues/164346) [Bug]: Automations keeps stale model suggestions after team agent switch `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164328](https://github.com/openclaw/openclaw/issues/164328) [Bug]: thinking=off sends thinking disabled to always-reasoning GLM-5.x (400); zai/-prefixed ids defeat the plugin's reasoning-effort resolver `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164319](https://github.com/openclaw/openclaw/issues/164319) [Bug]: doctor --fix rejects SQLite snapshot during hard-link transfer on Linux without statx `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#164355](https://github.com/openclaw/openclaw/issues/164355) Plugin hooks: no extension point can append content after tool results in the in-flight request (appendContext lands before the tool loop, tool_result_persist only rewrites the transcript) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#164283](https://github.com/openclaw/openclaw/issues/164283) memory-core: session memory sync fails with too many SQL variables `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164315](https://github.com/openclaw/openclaw/issues/164315) [Bug]: macOS: short-lived worker churn (2026.9.x) accumulates kernel page tables (VM_KERN_MEMORY_PTE) until the host wedges — invisible to RSS/heap diagnostics `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬2
- [#164209](https://github.com/openclaw/openclaw/issues/164209) Update failure: package-doctor (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#164256](https://github.com/openclaw/openclaw/issues/164256) [Bug]: TTS-only [[tts:text]] replies fail as incomplete turns starting in 2026.9.6 `bug` `no-stale` `regression` `P1` 💬2
- [#164266](https://github.com/openclaw/openclaw/issues/164266) Slack socket-mode logs a WARN per ping frame from foreign undici instances (19% of gateway log lines) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164164](https://github.com/openclaw/openclaw/issues/164164) Updater repeats configuration, schema, and package metadata work `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#164115](https://github.com/openclaw/openclaw/issues/164115) [Bug]: Status summaries ignore agent-local model aliases `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164211](https://github.com/openclaw/openclaw/issues/164211) acpx: managed MCP bridges (`openclaw-plugin-tools`, `openclaw-tools`) fail with ERR_MODULE_NOT_FOUND on packaged installs — ACP agents get no plugin tools `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164201](https://github.com/openclaw/openclaw/issues/164201) [Feature]: Title: [UX] Main session (Home) cannot be deleted or archived — only workaround wipes all sessions `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#164147](https://github.com/openclaw/openclaw/issues/164147) [Bug]: Approval notifications skip iOS devices when production and sandbox relay registrations coexist `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164118](https://github.com/openclaw/openclaw/issues/164118) Update failure: pnpm-staging-preflight (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#164053](https://github.com/openclaw/openclaw/issues/164053) [Bug]: Mixed-script memory snippets sharing an English term are ranked as duplicates `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164100](https://github.com/openclaw/openclaw/issues/164100) test: stabilize beta FRV timing-sensitive lanes `P2` `issue-rating: 🦪 silver shellfish` 💬2
- [#164076](https://github.com/openclaw/openclaw/issues/164076) Memory index: sessions source is indexed while session search stays gated behind experimental.sessionMemory — content unretrievable and "Dirty: yes" never clears `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#164702](https://github.com/openclaw/openclaw/issues/164702) DataCloneError on Windows: is the "welded-in" Proxy behavior in `main` a long-term maintenance risk? `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#164703](https://github.com/openclaw/openclaw/issues/164703) [Bug]: Doctor audit-log migration fails on QNAP ZFS bind mount when RENAME_NOREPLACE returns EINVAL `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#164699](https://github.com/openclaw/openclaw/issues/164699) [Bug]: openclaw update rolls back with EXDEV at package-swap when the npm package was installed in a Docker image layer (overlayfs) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬1
- [#164696](https://github.com/openclaw/openclaw/issues/164696) [Bug]: claude-cli live session holds WhatsApp reply until the next inbound message (turn completion not observed) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#164695](https://github.com/openclaw/openclaw/issues/164695) [Bug]: macOS Desktop update hangs after package publication during post-core settlement `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#164693](https://github.com/openclaw/openclaw/issues/164693) fix(update): managed handoff hides early refusal reason and details `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#164690](https://github.com/openclaw/openclaw/issues/164690) [Bug] claude-cli runs spawn every stdio MCP server twice (Gateway policy runtime + CLI mcp.json); relay+anchor wrapper costs ~144 MB per stdio child, not configurable `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164672](https://github.com/openclaw/openclaw/issues/164672) [Bug]: npm update aborts at package-swap with "Package publication object has an unsafe identity" when the Node prefix bin/ and lib/node_modules are owned by another uid (nvm installed as root) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#164661](https://github.com/openclaw/openclaw/issues/164661) Voice-call fixture check fails when database workers finish before teardown `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164652](https://github.com/openclaw/openclaw/issues/164652) [Bug]: Android app "+" new session is created as child of the current session (parentSessionKey chains A→B→C) `P2` `impact:session-state` 💬1
- [#164650](https://github.com/openclaw/openclaw/issues/164650) [Bug]: Pre-compaction memory flush duplicates daily-note blocks (truncated read + whole-file rewrite) `P2` `clawsweeper:source-repro` `impact:session-state` `impact:data-loss` 💬1
- [#164568](https://github.com/openclaw/openclaw/issues/164568) [Bug]: Browser tool recommends host routing despite a configured node pin `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#164639](https://github.com/openclaw/openclaw/issues/164639) [Bug]: Aborted managed update / gateway restart leaves the Windows "OpenClaw Gateway" Scheduled Task permanently disabled `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:crash-loop` 💬1
- [#164629](https://github.com/openclaw/openclaw/issues/164629) [Bug]: Gateway start prunes the ACTIVE npm plugin generations after plugins update ("cleaned N retained npm plugin generation(s)") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#164536](https://github.com/openclaw/openclaw/issues/164536) [Bug]: Shared worker pressure repeatedly signals the same blocked exchange `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#164569](https://github.com/openclaw/openclaw/issues/164569) [Bug]: approvals from a sessions_spawn child never reach the chat that delegated the task `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164621](https://github.com/openclaw/openclaw/issues/164621) [Bug]: memory-core: session publication self-deadlocks for the busy timeout on rollback-journal agent databases ("database is locked") `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#164620](https://github.com/openclaw/openclaw/issues/164620) [Feature]: Setting to disable the hosted plugin catalog feed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164365](https://github.com/openclaw/openclaw/issues/164365) MCP App pagination drops empty cursors and trims opaque continuation tokens `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164609](https://github.com/openclaw/openclaw/issues/164609) Bound ACP harness without same-named configured agent bricks the chat `P1` `impact:message-loss` 💬1
- [#164596](https://github.com/openclaw/openclaw/issues/164596) [Bug]: macOS native Settings returns 404 with remote Control UI basePath (possible prefix omission) `clawsweeper:needs-info` `P0` `issue-rating: 🦐 gold shrimp` `impact:ux-release-blocker` 💬1
- [#164599](https://github.com/openclaw/openclaw/issues/164599) Update failure: plugin-target-unavailable (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#164583](https://github.com/openclaw/openclaw/issues/164583) OpenAI strict schemas: sessions_history receives placeholder anchors (messageId: "x", all-zero UUID), causing repeated identical calls `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#164579](https://github.com/openclaw/openclaw/issues/164579) [Bug]: Web Push from a Tailscale-authenticated browser: subscribe and "Send test" succeed, real notifications are silently dropped `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164580](https://github.com/openclaw/openclaw/issues/164580) [Bug]: Personal profile created by a one-off Tailscale sign-in cannot be removed or merged on a single-owner Gateway `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164571](https://github.com/openclaw/openclaw/issues/164571) [Bug]: chat.send queueMode steer treats a session busy with an agent-RPC turn as idle (only consults replyRunRegistry, no embedded-run fallback) `P2` `impact:session-state` `maturity:stable` `clawsweeper:bulk-filed` 💬1
- [#164572](https://github.com/openclaw/openclaw/issues/164572) [Bug]: Automations model suggestions drop provider identity for shared model IDs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164562](https://github.com/openclaw/openclaw/issues/164562) [Bug]: model.usage diagnostic event (cost tracking) never fires for sessions under a channel/topic model override `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#164559](https://github.com/openclaw/openclaw/issues/164559) agent_end plugin hook fires once per model attempt: a 429 attempt that fails over under the same runId reports success=false with no final/willRetry field `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164563](https://github.com/openclaw/openclaw/issues/164563) [Feature]: Support short decision codes (AO/AA/D) in /approve command `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#164309](https://github.com/openclaw/openclaw/issues/164309) [Bug]: Discord model picker emits invalid options for model IDs longer than 100 characters `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164545](https://github.com/openclaw/openclaw/issues/164545) Local plugins cannot opt in to api.runtime.gateway: dispatchTrustedPluginGatewayMethod accepts only bundled or trustedOfficialInstall, so no local plugin can steer or abort a running session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#164550](https://github.com/openclaw/openclaw/issues/164550) [Bug]: Session context token count does not update during a long agent turn `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#164540](https://github.com/openclaw/openclaw/issues/164540) browser tool returns 'Async work scope is closed' for every agent session after Codex harness preflight failure + claude-cli fallback (browser service itself healthy) `P1` `impact:other` 💬1
- [#164533](https://github.com/openclaw/openclaw/issues/164533) sessions_send to an active subagent fails with 'session writer claim changed before transcript persistence' (2026.9.8); retry after idle succeeds `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#164526](https://github.com/openclaw/openclaw/issues/164526) [Bug]: "Keep current restrictions" added an unrequested model declaration after OAuth login `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#164433](https://github.com/openclaw/openclaw/issues/164433) [Feature]: Versioned Upgrade Recipes with qualified execution and recovery `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#164516](https://github.com/openclaw/openclaw/issues/164516) Approved plugin tools lose registration-local consent after runtime preparation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164510](https://github.com/openclaw/openclaw/issues/164510) claude-cli runtime auto-declines every MCP elicitation instead of surfacing it to the user `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164508](https://github.com/openclaw/openclaw/issues/164508) [Feature]: a resolver hook for A2A peers, so a plugin can admit a peer by a key it proves `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#164505](https://github.com/openclaw/openclaw/issues/164505) [Bug]: Every `exec host=node` result warns "tools.exec.pathPrepend is ignored" although no pathPrepend is configured `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164475](https://github.com/openclaw/openclaw/issues/164475) [Bug]: LM Studio max/Ultra can select low when discovered efforts stop at medium `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164473](https://github.com/openclaw/openclaw/issues/164473) [Bug]: voice-call GPT-Live gateway-relay never runs agent consult on 2026.9.8 ("ignored an unsupported sideband event"); worked on 2026.9.6 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#164472](https://github.com/openclaw/openclaw/issues/164472) [UX]: Talk has no persistent working indicator while delegated backend work runs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164471](https://github.com/openclaw/openclaw/issues/164471) DuckDuckGo web_search returns provider_error due to spoofed User-Agent triggering bot challenge `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#164468](https://github.com/openclaw/openclaw/issues/164468) [Bug]: Microphone button is disabled in an initially empty Mac app chat until text is typed `P2` `impact:ux-friction` 💬1
- [#164456](https://github.com/openclaw/openclaw/issues/164456) Talk over WebRTC: no turn.ended, and transcript events carry no itemId or response id `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#164452](https://github.com/openclaw/openclaw/issues/164452) Bug: local nodes status/describe fail verified-user auth while direct node.list RPC succeeds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#164447](https://github.com/openclaw/openclaw/issues/164447) [Bug]: MCP App sandbox times out on WebKit (Safari, macOS app): proxy gets no referrer `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#164257](https://github.com/openclaw/openclaw/issues/164257) [Bug]: Punctuated silent-reply prefixes are sent as streaming previews `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164425](https://github.com/openclaw/openclaw/issues/164425) [Bug]: Plugin instances are force-retired at a fixed 5s drain budget independent of the 325s gateway shutdown budget `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164427](https://github.com/openclaw/openclaw/issues/164427) [Bug]: A single cron.history-maintenance sweep holds the state-DB writer lock 9.35s, exhausting the hard-coded 5s state.write busy timeout and aborting Gateway sidecar startup `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `impact:crash-loop` 💬1
- [#164426](https://github.com/openclaw/openclaw/issues/164426) [Bug]: A failed startup's diagnosable cause is replaced by the cleanup AggregateError ('Gateway startup failed and cleanup did not complete') `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#164429](https://github.com/openclaw/openclaw/issues/164429) Control UI: copy file paths directly from chat file links `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#164323](https://github.com/openclaw/openclaw/issues/164323) [Bug]: local browser terminal under-advertises RGB colors on headless hosts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164416](https://github.com/openclaw/openclaw/issues/164416) DataCloneError permanently poisons a session: every later message on \gent:main:main\ fails in under 7 seconds `clawsweeper:needs-info` `impact:session-state` `P0` `issue-rating: 🦐 gold shrimp` 💬1
- [#164412](https://github.com/openclaw/openclaw/issues/164412) [Bug]: Heartbeat flood guard retryAtMs can be in the past when clock is adjusted `P3` 💬1
- [#164405](https://github.com/openclaw/openclaw/issues/164405) [Bug]: ClawHub request timeout timer keeps process alive after response completes `P3` 💬1
- [#164362](https://github.com/openclaw/openclaw/issues/164362) Local TUI keeps the primary model during an in-flight fallback `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164393](https://github.com/openclaw/openclaw/issues/164393) `channels status --probe`: add a normalized "probe not supported" indication for channels/accounts without probeAccount `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#164392](https://github.com/openclaw/openclaw/issues/164392) Doctor can never complete deferred plugin migrations for plugins that are no longer installed — permanent warning, no prune path `P2` `impact:ux-friction` 💬1
- [#164390](https://github.com/openclaw/openclaw/issues/164390) [Bug]: Repeated host OOM kills of managed llama-server children on Linux (223 in one day) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#164388](https://github.com/openclaw/openclaw/issues/164388) [Feature]: Desktop sharing on Linux requires a VNC server, which cannot run on a Wayland-only host `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164149](https://github.com/openclaw/openclaw/issues/164149) [Bug]: Skill commands strip indentation and blank lines inside multiline arguments `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164383](https://github.com/openclaw/openclaw/issues/164383) [Bug]: failed config hot reload ("still has active retained work" / "cannot replace itself") is never retried; runtime snapshot stays stale `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#164384](https://github.com/openclaw/openclaw/issues/164384) [Feature]: active-memory: first lane-1 lookup on a dirty memory index always times out (inline sync inside the 1.5 s preflight) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164382](https://github.com/openclaw/openclaw/issues/164382) [Feature]: active-memory: log why lane 1 (trigger recall) was not attempted, e.g. agent not in config.agents `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#164379](https://github.com/openclaw/openclaw/issues/164379) [Bug]: Custom Bedrock provider id (api: bedrock-converse-stream) fails "No API provider registered" since 2026.9.3 — plugin never activates for non-stock provider ids `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#164375](https://github.com/openclaw/openclaw/issues/164375) [Docs Bug]: `bug` `docs` `P0` `impact:ux-release-blocker` 💬1
- [#164371](https://github.com/openclaw/openclaw/issues/164371) [Critical Bug] skill_workshop approval system broken for 14+ days - ALL proposals timeout `P2` `impact:other` 💬1
- [#164354](https://github.com/openclaw/openclaw/issues/164354) [Bug]: [Windows] WorkerTaskError DataCloneError "#<Object> could not be cloned" — Proxy env breaks TUI turns and all channel dispatch (9.7, still in 9.8) `bug` `regression` `impact:message-loss` `P0` 💬1
- [#164351](https://github.com/openclaw/openclaw/issues/164351) [Bug]: [Windows] "Session creation publication owner is no longer current" — every sessions.create aborts (9.7, still in 9.8) `bug` `regression` `impact:session-state` `P0` 💬1
- [#164347](https://github.com/openclaw/openclaw/issues/164347) [Bug]: Gateway heap grows ~4–6 MB per cron/hook run: pricing context cached per fresh config copy is never released `P1` `impact:crash-loop` 💬1
- [#164344](https://github.com/openclaw/openclaw/issues/164344) [Bug]: Codex completed finals accumulate in native payload construction after PR156144 (2026.9.7) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164343](https://github.com/openclaw/openclaw/issues/164343) [Bug]: volcengine-plan/coding-plan (Ark) reject replayed history with messages.tool_calls.type = "" — and the error is not classified, so failover never runs `P1` `clawsweeper:needs-info` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#164341](https://github.com/openclaw/openclaw/issues/164341) [Bug]: forra provider tool calls fail deterministically - "Provider returned an incomplete or malformed tool call" (both azure-kimi-k3 and gpt-5.5, same error hash) `P1` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#164338](https://github.com/openclaw/openclaw/issues/164338) Support custom WebSocket endpoint for realtime voice providers `P3` `impact:auth-provider` 💬1
- [#164339](https://github.com/openclaw/openclaw/issues/164339) Support custom WebSocket endpoint for realtime voice providers 💬1
- [#164334](https://github.com/openclaw/openclaw/issues/164334) [Bug]: completed child never wakes requester when a sibling in its frozen yield batch is paused by sessions_yield `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164327](https://github.com/openclaw/openclaw/issues/164327) [Bug]: Z.AI Coding-Plan-Global onboarding refuses a valid API key (probe fails on always-reasoning GLM-5.3/5.3-Flash) and drops the provider config `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:auth-provider` 💬1
- [#164324](https://github.com/openclaw/openclaw/issues/164324) Talk: the delegation holding line is hardcoded in Italian ("Un attimo, controllo.") `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164318](https://github.com/openclaw/openclaw/issues/164318) [Bug]: main lane stays jammed (queued=1, active=0) after a Codex app-server startup abort; agent silent until gateway restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#164314](https://github.com/openclaw/openclaw/issues/164314) [Bug]: Telegram channel reload deferred behind an in-turn config.set inherits the run's transcript-write context → that topic permanently fails with "attempt disposed before transcript write" (2026.9.6) `P1` `impact:session-state` `impact:message-loss` `maturity:stable` 💬1
- [#164310](https://github.com/openclaw/openclaw/issues/164310) [Bug]: sessions.create fails with "Session creation publication owner is no longer current" on 2026.9.8 — works on 2026.9.6 `bug` `regression` `impact:session-state` `P0` 💬1
- [#164308](https://github.com/openclaw/openclaw/issues/164308) Windows update snapshot rejects unchanged native companion after hard-link capture changes ctime `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬1
- [#164300](https://github.com/openclaw/openclaw/issues/164300) [Feature]: Add a per-session Preserve control independent of pinning `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164298](https://github.com/openclaw/openclaw/issues/164298) [Bug]: Customer API Provider not working as expected. `bug` `bug:crash` `P2` `impact:auth-provider` 💬1
- [#164294](https://github.com/openclaw/openclaw/issues/164294) Gateway state DB WAL auto-checkpoint never completes (pinned by in-process reader) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#164279](https://github.com/openclaw/openclaw/issues/164279) Self-learning: background experience review has 0% completion (50 consecutive failures since 2026-09-27) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#164273](https://github.com/openclaw/openclaw/issues/164273) Update failure: gateway-recovery-verification (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦐 gold shrimp` `maturity:stable` 💬1
- [#164267](https://github.com/openclaw/openclaw/issues/164267) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#164255](https://github.com/openclaw/openclaw/issues/164255) Update failure: activating (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#164254](https://github.com/openclaw/openclaw/issues/164254) [Bug]: Linux 2026.9.8 managed handoff lease database identity changed leaves update-recovery-pending `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#164241](https://github.com/openclaw/openclaw/issues/164241) [Bug]: Yielded subagent completion handoff remains pending with zero wake attempts after an aborted requester announce (2026.9.8) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#164232](https://github.com/openclaw/openclaw/issues/164232) Update failure: package-swap (2026.9.7) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#164227](https://github.com/openclaw/openclaw/issues/164227) [Feature Request] exec/read tool results: stable truncation flag for agent-facing payload `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164228](https://github.com/openclaw/openclaw/issues/164228) [Bug]: Claude CLI runtime shows injected ⟦openclaw:ctx⟧ requester block in user messages `bug` `bug:behavior` `P2` `impact:session-state` 💬1
- [#164220](https://github.com/openclaw/openclaw/issues/164220) Auto-compaction failure dead-ends every following turn; fall back to a deterministic reduction instead `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164215](https://github.com/openclaw/openclaw/issues/164215) [Bug]: claude-cli turns fail transcript persistence with writer claim rebound `P1` `impact:session-state` `impact:auth-provider` 💬1
- [#164212](https://github.com/openclaw/openclaw/issues/164212) [Feature]: make the host-local media type allowlist configurable (opt-in to send any file type) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#164191](https://github.com/openclaw/openclaw/issues/164191) Codex settled-turn finalization: one current-turn field over 64 KiB makes recovery context unavailable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164178](https://github.com/openclaw/openclaw/issues/164178) [Feature]: Make the task-runner bind address configurable `P2` `impact:security` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬1
- [#164179](https://github.com/openclaw/openclaw/issues/164179) Update failure: candidate-doctor (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#164176](https://github.com/openclaw/openclaw/issues/164176) Update failure: reconcile:abandoned (2026.9.6) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#164174](https://github.com/openclaw/openclaw/issues/164174) Update failure: gateway-recovery-verification (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#164172](https://github.com/openclaw/openclaw/issues/164172) [Bug]: claude-cli runtime shows every assistant reply twice (merged cli-assistant record does not match imported segments) `P2` `impact:session-state` `impact:ux-friction` 💬1
- [#164168](https://github.com/openclaw/openclaw/issues/164168) [Bug]: Channel reply dispatch fails with DataCloneError on 2026.9.7 (inbound Weixin, QQ and Feishu messages never get a reply) `bug` `regression` `P1` `impact:message-loss` 💬1
- [#164167](https://github.com/openclaw/openclaw/issues/164167) buzz: a mentioned agent gets no thread context (not the root, not the replied-to message), and historyLimit's 1 KB budget is too small to compensate `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164162](https://github.com/openclaw/openclaw/issues/164162) [Bug]: Core update converts managed Codex exact spec to floating spec and triggers audit warning `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164141](https://github.com/openclaw/openclaw/issues/164141) [Bug]: subagent completion delivery window (30 min) aborts the requester turn the completion started `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#164146](https://github.com/openclaw/openclaw/issues/164146) [Bug]: Backup and restore replace a supported older exec approval policy with deny-all `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:data-loss` 💬1
- [#164145](https://github.com/openclaw/openclaw/issues/164145) [Feature]: Remove unused exec approval branches and registration argument `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#164144](https://github.com/openclaw/openclaw/issues/164144) [Docs Bug]: exec-approvals promises automatic conversion of old policies that require doctor --fix `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#164143](https://github.com/openclaw/openclaw/issues/164143) [Docs Bug]: exec-approvals incorrectly says edits to approved command fields cause rejection `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#164132](https://github.com/openclaw/openclaw/issues/164132) claude-cli MCP bridge binds to the first client's scopes after gateway start (owner/admin turns then get 'missing scope: operator.admin') `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#164111](https://github.com/openclaw/openclaw/issues/164111) [Bug]: Control UI chat.send rejected with unexpected __controlUiReconnectResume after compaction/reconnect `bug` `regression` `impact:message-loss` `P0` 💬1
- [#164109](https://github.com/openclaw/openclaw/issues/164109) Telegram token redaction pattern masks Atlassian account IDs in tool results (breaks Jira assignee) `P2` `clawsweeper:source-repro` `impact:data-loss` `impact:security` 💬1
- [#164090](https://github.com/openclaw/openclaw/issues/164090) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#164065](https://github.com/openclaw/openclaw/issues/164065) Telegram requireMention does not gate bare slash commands in groups `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164060](https://github.com/openclaw/openclaw/issues/164060) openclaw-weixin: session-key normalization lowercases opaque peer IDs, breaking outbound sends (ret=-3 invalid arguments) `P1` `impact:message-loss` 💬1
- [#164713](https://github.com/openclaw/openclaw/issues/164713) Swift progress-card bootstrap test can assert before error publication
- [#164712](https://github.com/openclaw/openclaw/issues/164712) [Bug]: Worker deployment fixtures omit required artifacts
- [#164704](https://github.com/openclaw/openclaw/issues/164704) [Bug]: Optional-question number shortcuts redirect focus to the chat composer `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open`
- [#164711](https://github.com/openclaw/openclaw/issues/164711) XAI package boundary contract fails after gateway protocol mappings are added
- [#164709](https://github.com/openclaw/openclaw/issues/164709) Android model-selection test can lose its availability fixture during catalog refresh
- [#164681](https://github.com/openclaw/openclaw/issues/164681) openclaw update 2026.9.6: candidate canary times out after repair; --timeout does not affect 298s budget
- [#164170](https://github.com/openclaw/openclaw/issues/164170) Update failure: updater-runtime-retention (2026.9.7)

#### 🔒 Closed Issues
- [#137332](https://github.com/openclaw/openclaw/issues/137332) [Bug]: mixed terminal requester-settle batches retry forever after ownership check
- [#110190](https://github.com/openclaw/openclaw/issues/110190) Runtime context carrier positioned AFTER user message causes severe model confusion and reasoning token waste
- [#156341](https://github.com/openclaw/openclaw/issues/156341) [Feature]: RFC — task-scoped decision models and inspectable evaluation
- [#162031](https://github.com/openclaw/openclaw/issues/162031) [Bug]: 2026.9.7 gateway crash-loops with 'Unhandled promise rejection: undefined' during runtime tool assembly (repro: doctor --only core/doctor/runtime-tool-schemas, all plugins disabled)
- [#164422](https://github.com/openclaw/openclaw/issues/164422) [Bug]: macOS non-root update self-poisons launcher group (wheel) - publication-intent check fails package-swap, blocks its own rollback, strands prepared anchor and gates all future updates (update-recovery-pending)
- [#105228](https://github.com/openclaw/openclaw/issues/105228) fix(agents): missing AbortController propagation in ACPS subprocess spawner
- [#164095](https://github.com/openclaw/openclaw/issues/164095) [Bug]: 2026.9.8 ships Codex 0.158.0 while advertising GPT-6.1 Sol OAuth; turns return 400
- [#161930](https://github.com/openclaw/openclaw/issues/161930) Update failure: global-install-failed (2026.9.3)
- [#123499](https://github.com/openclaw/openclaw/issues/123499) [Bug]: Slack native task cards fall back to a root-channel preamble when thread replies are disabled
- [#164316](https://github.com/openclaw/openclaw/issues/164316) [Bug]: Deletion-journal recovery holds coordination SQLite files and recommends a reserved agent ID
- [#155644](https://github.com/openclaw/openclaw/issues/155644) Gateway owner-lease reclaim can never fire in Docker: owner.host is the container ID, which changes on every recreate
- [#163288](https://github.com/openclaw/openclaw/issues/163288) [Bug] QQ group chat messages fail with "No callable tools remain after resolving explicit tool allowlist (...); no registered tools matched" - persists across gateway restart, session reset, and lossless-claw hook fix
- [#164081](https://github.com/openclaw/openclaw/issues/164081) [Bug]: Background exec that times out without output never wakes the session (heartbeat retires the wake as no-pending-event)
- [#164091](https://github.com/openclaw/openclaw/issues/164091) [Bug]: Waiting serial tasks inherit the previous request context
- [#146012](https://github.com/openclaw/openclaw/issues/146012) Continue on Gateway cannot abandon a pending workspace result: drain rejects before abandonment runs
- [#161590](https://github.com/openclaw/openclaw/issues/161590) Update failure: global-install-failed (2026.9.3)
- [#164525](https://github.com/openclaw/openclaw/issues/164525) [Bug]: Private Node runtime is not propagated to npm lifecycle child processes
- [#164611](https://github.com/openclaw/openclaw/issues/164611) Gate superseded-preview delete on confirmed replacement delivery (draft-stream.ts)
- [#164610](https://github.com/openclaw/openclaw/issues/164610) Streaming preview deleted without persistent replacement on harness turns
- [#164646](https://github.com/openclaw/openclaw/issues/164646) [Bug]: Activity E2E waits for a redundant session refresh
- [#164644](https://github.com/openclaw/openclaw/issues/164644) Android screenshot CI job bypasses release runner routing
- [#157506](https://github.com/openclaw/openclaw/issues/157506) [Feature]: Make remaining optional bundled plugins removable
- [#164420](https://github.com/openclaw/openclaw/issues/164420) Update failure: unexpected-error (2026.9.4)
- [#157507](https://github.com/openclaw/openclaw/issues/157507) [Feature]: Support explicit bundled plugin and skill selection for Docker builds
- [#162205](https://github.com/openclaw/openclaw/issues/162205) [Bug]: Thinking Off (the default) still runs full reasoning on Ollama Cloud glm-5.3 and returns it as answer content
- [#157511](https://github.com/openclaw/openclaw/issues/157511) [Feature]: Support deployment-wide marketplace discovery controls through the feed/catalog owner
- [#157508](https://github.com/openclaw/openclaw/issues/157508) [Feature]: Derive channel setup choices from installed plugins and the selected catalog
- [#164499](https://github.com/openclaw/openclaw/issues/164499) [Bug]: Retained AWS runner ownership points to a temporary checkout
- [#164148](https://github.com/openclaw/openclaw/issues/164148) [Bug]: Gmail Pub/Sub hook re-fires duplicate alerts for a single event, no dedupe on historyId/messageId
- [#163961](https://github.com/openclaw/openclaw/issues/163961) [Bug]: Separate Docker CLI TUI launch is followed by persistent Gateway state-ownership failures on 2026.9.7
- [#163700](https://github.com/openclaw/openclaw/issues/163700) [Bug]: channel mediaMaxMb set to 0 makes every attachment send fail with a 0-byte limit
- [#164283](https://github.com/openclaw/openclaw/issues/164283) memory-core: session memory sync fails with too many SQL variables
- [#121132](https://github.com/openclaw/openclaw/issues/121132) [Bug]: Beam mirror can complete sessions that were not confirmed inactive
- [#164209](https://github.com/openclaw/openclaw/issues/164209) Update failure: package-doctor (2026.9.7)
- [#164256](https://github.com/openclaw/openclaw/issues/164256) [Bug]: TTS-only [[tts:text]] replies fail as incomplete turns starting in 2026.9.6
- [#164164](https://github.com/openclaw/openclaw/issues/164164) Updater repeats configuration, schema, and package metadata work
- [#162236](https://github.com/openclaw/openclaw/issues/162236) [Bug]: doctor --fix reports a failed gateway restoration after repairing state - its readiness wait is fixed and shorter than the host startup
- [#163708](https://github.com/openclaw/openclaw/issues/163708) Cloud worker-turn sessions: deliver MEDIA: attachments from the remote workspace (prepareReplyMedia, like Codex remote-exec)
- [#164115](https://github.com/openclaw/openclaw/issues/164115) [Bug]: Status summaries ignore agent-local model aliases
- [#162259](https://github.com/openclaw/openclaw/issues/162259) [Bug]: 2026.9.7 Docker activation conflicts with OPENCLAW_CONFIG_READONLY
- [#161924](https://github.com/openclaw/openclaw/issues/161924) [Bug]: Update recovery says healthy serving Gateway did not pass verification
- [#163958](https://github.com/openclaw/openclaw/issues/163958) [Bug]: Stale device-worker environments retry tunnel cleanup every 60s forever after node disables workerRuns
- [#163179](https://github.com/openclaw/openclaw/issues/163179) [Bug]: update fails on 2026.9.5 → 2026.9.7
- [#164053](https://github.com/openclaw/openclaw/issues/164053) [Bug]: Mixed-script memory snippets sharing an English term are ranked as duplicates
- [#132550](https://github.com/openclaw/openclaw/issues/132550) Stop cloud worker rejects idle cleanup with stale tunnel owner credentials
- [#162209](https://github.com/openclaw/openclaw/issues/162209) Update failure: candidate-state-snapshot (2026.9.6)
- [#162044](https://github.com/openclaw/openclaw/issues/162044) Update failure: doctor-failed (2026.9.4)
- [#162860](https://github.com/openclaw/openclaw/issues/162860) Update failure: doctor-failed (2026.9.3)
- [#162405](https://github.com/openclaw/openclaw/issues/162405) Update failure: unexpected-error (2026.9.4)
- [#162221](https://github.com/openclaw/openclaw/issues/162221) Update failure: unexpected-error (2026.9.4)
- [#161622](https://github.com/openclaw/openclaw/issues/161622) Update failure: unexpected-error (2026.9.4)
- [#162029](https://github.com/openclaw/openclaw/issues/162029) Update failure: runtime-verification-failed (2026.9.4)
- [#161906](https://github.com/openclaw/openclaw/issues/161906) Update failure: runtime-verification-failed (2026.9.3)
- [#162879](https://github.com/openclaw/openclaw/issues/162879) Update failure: global-install-failed (2026.9.4)
- [#163211](https://github.com/openclaw/openclaw/issues/163211) Update failure: global-install-failed (2026.9.4)
- [#161458](https://github.com/openclaw/openclaw/issues/161458) Update failure: global-install-failed (2026.9.3)
- [#163085](https://github.com/openclaw/openclaw/issues/163085) Update failure: global-install-failed (2026.9.4)
- [#161887](https://github.com/openclaw/openclaw/issues/161887) Update failure: global-install-failed (2026.9.4)
- [#163130](https://github.com/openclaw/openclaw/issues/163130) Update failure: global-install-failed (2026.9.4)
- [#164661](https://github.com/openclaw/openclaw/issues/164661) Voice-call fixture check fails when database workers finish before teardown
- [#164652](https://github.com/openclaw/openclaw/issues/164652) [Bug]: Android app "+" new session is created as child of the current session (parentSessionKey chains A→B→C)
- [#164568](https://github.com/openclaw/openclaw/issues/164568) [Bug]: Browser tool recommends host routing despite a configured node pin
- [#164536](https://github.com/openclaw/openclaw/issues/164536) [Bug]: Shared worker pressure repeatedly signals the same blocked exchange
- [#164569](https://github.com/openclaw/openclaw/issues/164569) [Bug]: approvals from a sessions_spawn child never reach the chat that delegated the task
- [#164365](https://github.com/openclaw/openclaw/issues/164365) MCP App pagination drops empty cursors and trims opaque continuation tokens
- [#164609](https://github.com/openclaw/openclaw/issues/164609) Bound ACP harness without same-named configured agent bricks the chat
- [#164599](https://github.com/openclaw/openclaw/issues/164599) Update failure: plugin-target-unavailable (2026.9.3)
- [#163199](https://github.com/openclaw/openclaw/issues/163199) [Bug]: TUI clears unsent slash-prefixed drafts while disconnected
- [#163543](https://github.com/openclaw/openclaw/issues/163543) [Bug]: Control UI shows known tool outcomes as unknown
- [#164571](https://github.com/openclaw/openclaw/issues/164571) [Bug]: chat.send queueMode steer treats a session busy with an agent-RPC turn as idle (only consults replyRunRegistry, no embedded-run fallback)
- [#164309](https://github.com/openclaw/openclaw/issues/164309) [Bug]: Discord model picker emits invalid options for model IDs longer than 100 characters
- [#164540](https://github.com/openclaw/openclaw/issues/164540) browser tool returns 'Async work scope is closed' for every agent session after Codex harness preflight failure + claude-cli fallback (browser service itself healthy)
- [#162001](https://github.com/openclaw/openclaw/issues/162001) Windows: injected runtime-facts context block breaks tool calling in local models
- [#164468](https://github.com/openclaw/openclaw/issues/164468) [Bug]: Microphone button is disabled in an initially empty Mac app chat until text is typed
- [#150152](https://github.com/openclaw/openclaw/issues/150152) [Bug]: macOS remote gateway pin prevents reconnect after normal TLS certificate renewal
- [#164257](https://github.com/openclaw/openclaw/issues/164257) [Bug]: Punctuated silent-reply prefixes are sent as streaming previews
- [#164323](https://github.com/openclaw/openclaw/issues/164323) [Bug]: local browser terminal under-advertises RGB colors on headless hosts
- [#164412](https://github.com/openclaw/openclaw/issues/164412) [Bug]: Heartbeat flood guard retryAtMs can be in the past when clock is adjusted
- [#164405](https://github.com/openclaw/openclaw/issues/164405) [Bug]: ClawHub request timeout timer keeps process alive after response completes
- [#164362](https://github.com/openclaw/openclaw/issues/164362) Local TUI keeps the primary model during an in-flight fallback
- [#164392](https://github.com/openclaw/openclaw/issues/164392) Doctor can never complete deferred plugin migrations for plugins that are no longer installed — permanent warning, no prune path
- [#164149](https://github.com/openclaw/openclaw/issues/164149) [Bug]: Skill commands strip indentation and blank lines inside multiline arguments
- [#164375](https://github.com/openclaw/openclaw/issues/164375) [Docs Bug]:
- [#164371](https://github.com/openclaw/openclaw/issues/164371) [Critical Bug] skill_workshop approval system broken for 14+ days - ALL proposals timeout
- [#164354](https://github.com/openclaw/openclaw/issues/164354) [Bug]: [Windows] WorkerTaskError DataCloneError "#<Object> could not be cloned" — Proxy env breaks TUI turns and all channel dispatch (9.7, still in 9.8)
- [#164351](https://github.com/openclaw/openclaw/issues/164351) [Bug]: [Windows] "Session creation publication owner is no longer current" — every sessions.create aborts (9.7, still in 9.8)
- [#164347](https://github.com/openclaw/openclaw/issues/164347) [Bug]: Gateway heap grows ~4–6 MB per cron/hook run: pricing context cached per fresh config copy is never released
- [#164338](https://github.com/openclaw/openclaw/issues/164338) Support custom WebSocket endpoint for realtime voice providers
- [#164339](https://github.com/openclaw/openclaw/issues/164339) Support custom WebSocket endpoint for realtime voice providers
- [#164314](https://github.com/openclaw/openclaw/issues/164314) [Bug]: Telegram channel reload deferred behind an in-turn config.set inherits the run's transcript-write context → that topic permanently fails with "attempt disposed before transcript write" (2026.9.6)
- [#164310](https://github.com/openclaw/openclaw/issues/164310) [Bug]: sessions.create fails with "Session creation publication owner is no longer current" on 2026.9.8 — works on 2026.9.6
- [#164298](https://github.com/openclaw/openclaw/issues/164298) [Bug]: Customer API Provider not working as expected.
- [#163810](https://github.com/openclaw/openclaw/issues/163810) [Bug]: real pnpm tarball test fails on Node layouts using npm PATH fallback
- [#164232](https://github.com/openclaw/openclaw/issues/164232) Update failure: package-swap (2026.9.7)
- [#164228](https://github.com/openclaw/openclaw/issues/164228) [Bug]: Claude CLI runtime shows injected ⟦openclaw:ctx⟧ requester block in user messages
- [#164215](https://github.com/openclaw/openclaw/issues/164215) [Bug]: claude-cli turns fail transcript persistence with writer claim rebound
- [#164172](https://github.com/openclaw/openclaw/issues/164172) [Bug]: claude-cli runtime shows every assistant reply twice (merged cli-assistant record does not match imported segments)
- [#164168](https://github.com/openclaw/openclaw/issues/164168) [Bug]: Channel reply dispatch fails with DataCloneError on 2026.9.7 (inbound Weixin, QQ and Feishu messages never get a reply)
- [#119853](https://github.com/openclaw/openclaw/issues/119853) [Feature]: Filter out cron-created sessions in the Android app session list
- [#164111](https://github.com/openclaw/openclaw/issues/164111) [Bug]: Control UI chat.send rejected with unexpected __controlUiReconnectResume after compaction/reconnect
- [#164060](https://github.com/openclaw/openclaw/issues/164060) openclaw-weixin: session-key normalization lowercases opaque peer IDs, breaking outbound sends (ret=-3 invalid arguments)
- [#164681](https://github.com/openclaw/openclaw/issues/164681) openclaw update 2026.9.6: candidate canary times out after repair; --timeout does not affect 298s budget
- [#164170](https://github.com/openclaw/openclaw/issues/164170) Update failure: updater-runtime-retention (2026.9.7)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 250,995 · **Open issues:** 47,868 · **Last push:** <1h ago

On October 4, 2026, there were no new releases for Hermes Agent; however, a significant merged pull request (#132457) addressed a critical issue by ensuring that the hermes -z command now properly closes its Relay session, fixing a long-standing bug (#79471). Among the new issues, #132401 stands out, highlighting a major flaw in the scratch prune functionality that can lead to the loss of multi-day agent work parked in TMPDIR without any log or quarantine actions. Other notable bugs reported include #132444, where the hardline blocklist inaccurately bans shell function definitions, and #132508, which reveals a limitation regarding SSH connection times during boot failures.

#### ✅ Merged PRs
- [#132457](https://github.com/NousResearch/hermes-agent/pull/132457) hermes -z now closes its Relay session (fixes #79471)

#### 🐛 New Issues
- [#132401](https://github.com/NousResearch/hermes-agent/issues/132401) scratch prune: 24h idle delete silently destroys multi-day agent work parked in TMPDIR-pointed scratch (no log, no quarantine, no keep-marker) `type/bug` `comp/agent` `P0` `needs-decision` 💬15
- [#132444](https://github.com/NousResearch/hermes-agent/issues/132444) [Bug]: hardline blocklist blocks shell function definitions and backticked prose as "system shutdown/reboot" `type/bug` `comp/tools` `tool/terminal` `P2` 💬5
- [#132068](https://github.com/NousResearch/hermes-agent/issues/132068) Bot mention autocomplete only lists @default and @hermes (plugin candidates self-filtered via claimedHandles) `type/bug` `comp/plugins` `P2` `comp/desktop` 💬3
- [#132508](https://github.com/NousResearch/hermes-agent/issues/132508) Desktop: SSH connect and forward budgets are fixed at 15 s with no override; slow links loop on boot failure `type/bug` `backend/ssh` `P2` `comp/desktop` 💬3
- [#132511](https://github.com/NousResearch/hermes-agent/issues/132511) Web toolset picker: "Active backend" ignores web.search_backend / web.extract_backend `type/bug` `tool/web` `area/config` `P3` 💬2
- [#132498](https://github.com/NousResearch/hermes-agent/issues/132498) [Bug]: kanban artifact examples send deliverables to ~/.hermes/cache/scratch, which the kernel never copies and prunes after 24h idle `type/bug` `comp/tools` `comp/cron` `P3` 💬2
- [#132206](https://github.com/NousResearch/hermes-agent/issues/132206) [Bug] Windows: gateway gets no graceful shutdown on OS shutdown/reboot — every cycle logs an UNCLEAN exit `type/bug` `comp/gateway` `P2` `sweeper:risk-message-delivery` 💬2
- [#132184](https://github.com/NousResearch/hermes-agent/issues/132184) [Feature]: keep bulky tool results out of the prompt by default (store them, send a receipt, fetch on demand) `type/feature` `comp/agent` `P3` `area/usage-cost` 💬2
- [#132431](https://github.com/NousResearch/hermes-agent/issues/132431) [Bug]: Interrupted source update leaves stale .js artifacts that shadow TypeScript sources `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility` 💬2
- [#132291](https://github.com/NousResearch/hermes-agent/issues/132291) [Bug]: smart approval fails open into a silent 300s wait when the guardian LLM is unreachable `type/bug` `comp/tools` `area/config` `P2` 💬1
- [#132504](https://github.com/NousResearch/hermes-agent/issues/132504) OpenRouter 403 "prompt injection patterns detected" from bundled skills containing <tool> — mislabelled as a firewall block, and it poisons the whole session `type/bug` `comp/agent` `tool/skills` `provider/openrouter` 💬1
- [#132502](https://github.com/NousResearch/hermes-agent/issues/132502) Maintainer triage request: fail-closed unattended review, no bypass requested `type/docs` `question` `comp/cron` `tool/terminal` 💬1
- [#132486](https://github.com/NousResearch/hermes-agent/issues/132486) [Bug]: [ASYNC DELEGATION BATCH COMPLETE] shows stale dispatch age when delivered late `type/bug` `comp/tools` `tool/delegate` `P3` 💬1
- [#132329](https://github.com/NousResearch/hermes-agent/issues/132329) [Bug] Desktop shows "The reply was cut off" (stream_drop) during context compaction: backend reports the session idle, no WebSocket drop `type/bug` `comp/agent` `comp/tui` `P1` 💬1
- [#132536](https://github.com/NousResearch/hermes-agent/issues/132536) [Bug]: hermes doctor reports the documented auxiliary provider 'main' as unresolvable
- [#132526](https://github.com/NousResearch/hermes-agent/issues/132526) Web toolset picker: "Ready" badge does not reflect actual backend availability `type/bug` `tool/web` `area/config` `P3`
- [#132532](https://github.com/NousResearch/hermes-agent/issues/132532) [Feature]: Installer resilience improvements for GitHub-restricted networks (mainland China) - stale script cache, no mirror fallback, misleading recovery hints
- [#132531](https://github.com/NousResearch/hermes-agent/issues/132531) [Bug]: bootstrap-installer.log garbles all non-ASCII output (UTF-8/GBK mixing) on Chinese-locale Windows
- [#132522](https://github.com/NousResearch/hermes-agent/issues/132522) [Bug]: Telegram DM topics are recreated as duplicates when the adapter is rebuilt after a network incident `type/bug` `comp/gateway` `platform/telegram` `P2`
- [#132515](https://github.com/NousResearch/hermes-agent/issues/132515) skills.external_dirs set via managed scope is recognized/enforced by config resolution but ignored by skill discovery `type/bug` `duplicate` `tool/skills` `area/config`
- [#132516](https://github.com/NousResearch/hermes-agent/issues/132516) [Bug]: exec-approval prompts are sent with disable_notification in Telegram "important" mode, so a degraded prompt times out unseen `type/bug` `comp/gateway` `platform/telegram` `P2`
- [#132517](https://github.com/NousResearch/hermes-agent/issues/132517) [Bug]: multiplexed gateway: a served profile's own quick_commands are never consulted (Unknown command) `type/bug` `comp/gateway` `P2` `area/profiles`
- [#132507](https://github.com/NousResearch/hermes-agent/issues/132507) approval: a plugin-escalated approval with no user present tells the agent to find another route and how to switch approvals to approve `type/bug` `comp/tools` `comp/plugins` `area/auth`
- [#132505](https://github.com/NousResearch/hermes-agent/issues/132505) [closed - accidental] throwaway write probe, please disregard
- [#132497](https://github.com/NousResearch/hermes-agent/issues/132497) [Bug]: explicit session archive only flips the flag, so runtime, active-session lease and transcript stay resident `type/bug` `comp/cli` `P2` `sweeper:risk-session-state`
- [#132499](https://github.com/NousResearch/hermes-agent/issues/132499) Proposal: opt-in descriptor-relative native file writes without symlink following `type/security` `tool/file` `backend/local` `P3`
- [#132494](https://github.com/NousResearch/hermes-agent/issues/132494) [Bug]: plugins check-updates shows "update available" from a PyPI row a catalog/lock-pinned plugin can never act on `type/bug` `comp/cli` `comp/plugins` `P3`
- [#132492](https://github.com/NousResearch/hermes-agent/issues/132492) bug: direct Browser Use Cloud browser_exec works, but 1Password vault fill cannot determine page origin `type/bug` `tool/browser` `area/auth` `P2`
- [#132488](https://github.com/NousResearch/hermes-agent/issues/132488) RFC: make file tools honor the active sandbox filesystem authority `type/feature` `tool/terminal` `tool/file` `P3`
- [#132483](https://github.com/NousResearch/hermes-agent/issues/132483) Docker destruction rules miss docker container rm, docker container prune and docker system prune `type/security` `tool/terminal` `P3`
- [#132484](https://github.com/NousResearch/hermes-agent/issues/132484) [Feature]: Desktop — keep the active (write-target) profile visible in the statusbar while "Show all profiles" is on `type/feature` `P3` `comp/desktop` `area/profiles`
- [#132477](https://github.com/NousResearch/hermes-agent/issues/132477) fix(agent): `_relay_thinking` still re-emits plain reply text as `reasoning.available` on master (structured-reasoning models) — reply fragments render twice in Desktop `type/bug` `comp/agent` `P2` `area/streaming`
- [#132480](https://github.com/NousResearch/hermes-agent/issues/132480) [Feature]: Add an option to disable sidebar hover reveal (Desktop) `type/feature` `area/config` `P3` `comp/desktop`
- [#132481](https://github.com/NousResearch/hermes-agent/issues/132481) 1 `invalid` `comp/cli` `P4`

#### 🔒 Closed Issues
- [#126063](https://github.com/NousResearch/hermes-agent/issues/126063) [Feature]: Ship a pre-installed "Hermes Ops" expert profile the main agent can consult + a proactive update reporter
- [#106017](https://github.com/NousResearch/hermes-agent/issues/106017) [Bug]: Desktop fleet + condensed profile dropdown omits the active gateway default profile
- [#79471](https://github.com/NousResearch/hermes-agent/issues/79471) [Bug]: One-shot execution exits without closing the Relay session lifecycle
- [#131745](https://github.com/NousResearch/hermes-agent/issues/131745) [Bug] Launcher published against e2e scratch Python — gateway exit-127 crash loop after reboot
- [#131632](https://github.com/NousResearch/hermes-agent/issues/131632) Desktop: fleet mode leaves the local default profile with no entry point in the profile picker
- [#131126](https://github.com/NousResearch/hermes-agent/issues/131126) [Bug]: hermes plugins install --force deletes the plugin's user files, and it is the only documented way to move a pinned plugin
- [#132505](https://github.com/NousResearch/hermes-agent/issues/132505) [closed - accidental] throwaway write probe, please disregard

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,132 · **Open issues:** 8,411 · **Last push:** <1h ago

On October 4, 2026, there were no new releases for vLLM, but several significant contributions were merged, including a bugfix to improve the FlashInfer all_reduce backend selection and a feature that releases the CUDA graph pool on sleep. The Transformers version was also updated to 5.18.0, enhancing compatibility and performance. Other notable fixes addressed issues like preserving async KV load efficiency and enhancing the deterministic behavior of the ROCm backend. In terms of new issues, #59876 highlighted a critical bug where multimodal chat requests were silently dropping images when certain request-level parameters were present, drawing attention from contributors for prompt resolution.

#### ✅ Merged PRs
- [#56891](https://github.com/vllm-project/vllm/pull/56891) [Bugfix] Fix FlashInfer all_reduce backend selection
- [#59160](https://github.com/vllm-project/vllm/pull/59160) [Feature] Release the CUDA graph pool on sleep
- [#59621](https://github.com/vllm-project/vllm/pull/59621) [CI] Bump Transformers version to 5.18.0
- [#59504](https://github.com/vllm-project/vllm/pull/59504) [Bugfix][Core] Exempt exactly the blocks an async KV load writes from zeroing
- [#59462](https://github.com/vllm-project/vllm/pull/59462) [DCP] Enable TokenSpeed MLA with block-interleaved DCP
- [#54706](https://github.com/vllm-project/vllm/pull/54706) [ROCm][RDNA3] Fix W4A16 split-K accuracy and determinism
- [#59441](https://github.com/vllm-project/vllm/pull/59441) [Bugfix][MoRIIO] Keep discovery heartbeats running while workers hold the GIL
- [#56984](https://github.com/vllm-project/vllm/pull/56984) [Feature] Per-row candidate IDs for prefill token scoring (M2 of #56860)
- [#58588](https://github.com/vllm-project/vllm/pull/58588) [Frontend] Add output_mode to /inference/v1/generate (RFC #56851 Phase 1)
- [#59347](https://github.com/vllm-project/vllm/pull/59347) [Bugfix][KV Connector][Mooncake] Suppress completion for empty pulls
- [#51274](https://github.com/vllm-project/vllm/pull/51274) [ROCm][Kimi-K3] Add opt-in gfx942 MXFP4-to-int4 conversion
- [#59850](https://github.com/vllm-project/vllm/pull/59850) [CI] Drop duplicate bf16 skinny GEMM test from Kimi K3 B200 job
- [#56679](https://github.com/vllm-project/vllm/pull/56679) [ROCm][CI] Extend AMD coverage for distributed, model, and eval tests
- [#59661](https://github.com/vllm-project/vllm/pull/59661) [Bugfix] Log CRIU failure details before snapshot cleanup
- [#59699](https://github.com/vllm-project/vllm/pull/59699) [Bugfix] Avoid InfiniBand state in TP1 snapshots

#### 🐛 New Issues
- [#59876](https://github.com/vllm-project/vllm/issues/59876) [Bug]: Multimodal chat requests silently drop all images when request-level chat_template_kwargs is present (v0.30.0, Gemma-4-26B-A4B) `bug` `multi-modality` `quantization` 💬2
- [#59887](https://github.com/vllm-project/vllm/issues/59887) [Bug]: flashinfer_moe_ep_cutedsl passes enable_in_kernel_fc2_reduce, which pinned FlashInfer 0.7.0.post1 does not accept 💬1
- [#59867](https://github.com/vllm-project/vllm/issues/59867) [Bug] GLM-5.3-Flash-NVFP4 + MTP: draft layer is BF16 in the checkpoint but vLLM builds its experts NVFP4-packed (128 vs 256 weight-load crash) `quantization` `glm` 💬1
- [#59907](https://github.com/vllm-project/vllm/issues/59907) [Bug]: Priority scheduling can un-schedule a request it already scheduled in the same step (encoder cache miss, prefix hits on unwritten KV, priority inversion)
- [#59905](https://github.com/vllm-project/vllm/issues/59905) [Bug]: Gemma 4 E4B AutoRound-GPTQ fails to load on 0.24.0 — audio_tower expects unquantized .weight `quantization`
- [#59904](https://github.com/vllm-project/vllm/issues/59904) [Bug]: flashinfer_moe_ep_mega_deep_gemm: 'ImportError: generic_type: type "Runtime" is already registered!' with vendored DeepGEMM `quantization`
- [#59903](https://github.com/vllm-project/vllm/issues/59903) [Bug]: flashinfer_moe_ep_cutedsl fails at model load because vLLM CUDA images don't ship nvshmem4py (No module named 'nvshmem')
- [#59897](https://github.com/vllm-project/vllm/issues/59897) [Usage]: How to serve qwen3.8-flash-next-fp8 on 2 A100 `usage`
- [#59872](https://github.com/vllm-project/vllm/issues/59872) [Bug]: NIXL pull: an aborted request whose READ never completes keeps its decode KV blocks until restart `kv-connector`
- [#59871](https://github.com/vllm-project/vllm/issues/59871) [Bug]: NIXL: heartbeats do not refresh `engine_ttl`, so a decode instance evicts and re-handshakes a prefill engine it is waiting on `kv-connector`
- [#59870](https://github.com/vllm-project/vllm/issues/59870) [Bug]: NIXL connector calls one NIXL agent from two threads, and the agent is created without a thread sync mode `kv-connector`
- [#59868](https://github.com/vllm-project/vllm/issues/59868) [Qwen4Exp] PLE pinned-host FP8 lookup will not compile on sm_86, so --engram-config cpu_offload is unusable on consumer Ampere `quantization`

#### 🔒 Closed Issues
- [#32732](https://github.com/vllm-project/vllm/issues/32732) [Bug]: Regression in v0.14.0: "No valid attention backend found" for nvidia/DeepSeek-R1-0528-NVFP4 on RTX Pro 6000 (Blackwell)
- [#36960](https://github.com/vllm-project/vllm/issues/36960) [Feature]: Add /health/ready endpoint for GPU health verification
- [#40807](https://github.com/vllm-project/vllm/issues/40807) [Bug]: TurboQuant KV + spec-decode + chunked-prefill crashes CUDA graph capture at query_start_loc.tolist() in continuation-prefill path (Qwen3-Next hybrid dense)
- [#32962](https://github.com/vllm-project/vllm/issues/32962) [Performance]: Custom Helion Kernels
- [#27178](https://github.com/vllm-project/vllm/issues/27178) [Bug]: torch._dynamo hit recompile_limit using FlexAttention backend
- [#39919](https://github.com/vllm-project/vllm/issues/39919) [Bug]: DeepSeek OCR doesn't work on vllm 0.19
- [#34518](https://github.com/vllm-project/vllm/issues/34518) [Feature]: [Whisper] Support for decoder prefix and custom task tokens in transcription API
- [#37581](https://github.com/vllm-project/vllm/issues/37581) [Bug]: /v1/chat/completions/render` crashes for Qwen/Qwen3-ASR-0.6B multimodal audio, and chat audio returns empty/junk
- [#37967](https://github.com/vllm-project/vllm/issues/37967) [Bug]: TypeError: transformers.tokenization_utils_tokenizers.TokenizersBackend._patch_mistral_regex() got multiple values for keyword argument 'fix_mistral_regex'
- [#38041](https://github.com/vllm-project/vllm/issues/38041) V2 model runner crashes on Qwen3.5 mixed attention (linear + full)
- [#41849](https://github.com/vllm-project/vllm/issues/41849) [Bug]: Engine crashes on startup with 'DeepGEMM backend not available' for standard bf16 models on H100
- [#41969](https://github.com/vllm-project/vllm/issues/41969) [Bug]: AsyncLLM silent-hangs on multimodal pooling requests when default max_num_batched_tokens too small (L4); sync LLM works on same hardware
- [#34351](https://github.com/vllm-project/vllm/issues/34351) [Installation]: MAC M1 installation fails because of bits-and-bytes
- [#41961](https://github.com/vllm-project/vllm/issues/41961) [ROCm/MI325X] DeepSeek-V4-Flash: NotImplementedError: mul_cuda not implemented for Float8_e8m0fnu in normalize_e4m3fn_to_e4m3fnuz
- [#42084](https://github.com/vllm-project/vllm/issues/42084) [Bug]: GDN attention `mamba_get_block_table_tensor` torch.gather index out of bounds when prefix caching + num_speculative_tokens>=10 (DFlash, DGX Spark sm_121a, Qwen3.6 hybrid)
- [#59027](https://github.com/vllm-project/vllm/issues/59027) [Bug][ROCm] v0.30.0: GLM-5.3-Flash cannot boot on gfx942 — ROCMAiterMLASparseImpl missing record_logical_topk_ready (#57252 not in the release)
- [#37551](https://github.com/vllm-project/vllm/issues/37551) [Bug] vLLM 0.17.1: `zai-org/GLM-OCR` has `mtp_graph < no_mtp_graph` despite high acceptance
- [#39039](https://github.com/vllm-project/vllm/issues/39039) [Bug]: vLLM attempts to download Hugging Face cache file during inference despite local model path (Gemma 4)
- [#40740](https://github.com/vllm-project/vllm/issues/40740) [Bug]: assert is_mixture_of_experts fails on vllm serve with --enable-eplb
- [#41862](https://github.com/vllm-project/vllm/issues/41862) [Bug]: EP Deadlock with Hybrid GDN/Mamba Architecture (Qwen3.5)
- [#59817](https://github.com/vllm-project/vllm/issues/59817) [Bug]: HiSparse cache-handle test passes a plain SparseMLAIndexGroup; follower path relies on an attribute only the leader writes
- [#59756](https://github.com/vllm-project/vllm/issues/59756) [Bug]: Qwen3.8-Flash-Next (Qwen4Exp) fails to load on main after #57387: `ValueError: Invalid layer_type indexed_attention`
- [#59834](https://github.com/vllm-project/vllm/issues/59834) [Bug]: Responses API streaming regenerates output item id/call_id in response.completed (breaks strict clients)
- [#59838](https://github.com/vllm-project/vllm/issues/59838) [Bug]: Malformed namespace tools cause early return validation bypass in ResponsesRequest
- [#59867](https://github.com/vllm-project/vllm/issues/59867) [Bug] GLM-5.3-Flash-NVFP4 + MTP: draft layer is BF16 in the checkpoint but vLLM builds its experts NVFP4-packed (128 vs 256 weight-load crash)

### SGLang (`sgl-project/sglang`)

**Stars:** 36,757 · **Open issues:** 5,511 · **Last push:** <1h ago

On October 4, 2026, there were no new releases for SGLang, but several significant pull requests were merged, including a fix for HiCache that carries registered Mamba slot side states through the host tier, and the addition of a nightly accuracy test for DeepSeek-V4.1-Flash MI35x. Notably, the Aot kernels were updated for Torch 2.14, while various enhancements and fixes were made across the AMD and diffusion components, like fusing Flux3 rowwise FP8 quantization with Triton. A significant new issue arose regarding the nvfp4 KV cache, which is reportedly causing deterministic long-context corruption due to improper handling of the checkpoint’s fp8-calibrated k/v_scale. Overall, while it was a routine day for releases, the ongoing improvements and notable issues highlight the project's active development landscape.

#### ✅ Merged PRs
- [#41296](https://github.com/sgl-project/sglang/pull/41296) docs: sync LMSYS SGLang blog cards
- [#39862](https://github.com/sgl-project/sglang/pull/39862) [Fix] HiCache: carry registered Mamba slot side states (Qwen4-Exp PLE) through the host tier
- [#41476](https://github.com/sgl-project/sglang/pull/41476) [AMD] Add DeepSeek-V4.1-Flash MI35x nightly accuracy test
- [#41931](https://github.com/sgl-project/sglang/pull/41931) [AMD] Keep aiter's tuned GEMM for the DeepSeek-V4 compressors
- [#41671](https://github.com/sgl-project/sglang/pull/41671) [diffusion] Fuse Flux3 rowwise FP8 quantization with Triton
- [#41707](https://github.com/sgl-project/sglang/pull/41707) [AMD] Use AITER ASM prefill for MiniMax-M3 HD128 attention
- [#42420](https://github.com/sgl-project/sglang/pull/42420) [HiCache] Fix cgroup page-cache accounting and the sizing fallback when cgroup discovery fails
- [#42405](https://github.com/sgl-project/sglang/pull/42405) Pick the default nccl_port below the kernel ephemeral range
- [#42348](https://github.com/sgl-project/sglang/pull/42348) [Refactor] Let the remaining placement consumers read the parallel context
- [#42276](https://github.com/sgl-project/sglang/pull/42276) [sgl-router] Credit routed prompts before their KV events arrive
- [#42347](https://github.com/sgl-project/sglang/pull/42347) [Fix] Skip a draft's decode recapture when it owns no decode graph
- [#42346](https://github.com/sgl-project/sglang/pull/42346) [Fix] Load a draft's tensor weight update from its deployment TP rank
- [#42427](https://github.com/sgl-project/sglang/pull/42427) chore: bump sgl-kernel version to 0.4.9
- [#42366](https://github.com/sgl-project/sglang/pull/42366) Update AOT kernels for Torch 2.14
- [#42354](https://github.com/sgl-project/sglang/pull/42354) [mem_cache] Run mamba models on `UnifiedRadixCache` when the radix cache is disabled
- [#42425](https://github.com/sgl-project/sglang/pull/42425) [Fix] Make Hf3fsMockClient reads and writes thread-safe with pread/pwrite
- [#41128](https://github.com/sgl-project/sglang/pull/41128) feat(metrics): expose deferred decode KV release metrics
- [#42275](https://github.com/sgl-project/sglang/pull/42275) [sgl-router] Repair KV-event sequence gaps from the engine's replay socket
- [#42299](https://github.com/sgl-project/sglang/pull/42299) [LoRA] Reorganize kernels and add CODEOWNERS
- [#42274](https://github.com/sgl-project/sglang/pull/42274) Advertise the KV-event replay endpoint in /server_info
- [#40543](https://github.com/sgl-project/sglang/pull/40543) fix(cuda-graph): remove unnecessary CP batch alignment
- [#39950](https://github.com/sgl-project/sglang/pull/39950) [AMD] Fix AITER weight slicing for CP decode TP
- [#34200](https://github.com/sgl-project/sglang/pull/34200) [AMD] Port CP V2 to the DeepSeek-V4 HIP backend
- [#42035](https://github.com/sgl-project/sglang/pull/42035) [PD] Keep ingesting requests while a prefill forward result is pending
- [#41925](https://github.com/sgl-project/sglang/pull/41925) [sglang-miles] Fix Kimi-K3 weight reloads after graph capture
- [#41961](https://github.com/sgl-project/sglang/pull/41961) Support post-capture KV sizing for the unified hybrid-SWA pool
- [#42264](https://github.com/sgl-project/sglang/pull/42264) [HiCache] Fix write-back SWA insert backups tripping the write-through pending-ack assert
- [#40703](https://github.com/sgl-project/sglang/pull/40703) [PD] Add opt-in prefill-complete decode KV allocation
- [#41660](https://github.com/sgl-project/sglang/pull/41660) [DSv4.1] Fused c1/c2 compress for eager extend, faster c2 decode
- [#41658](https://github.com/sgl-project/sglang/pull/41658) [DSv4.1] Faster fp4 index-K gather and combine_topk_swa_indices
- [#41657](https://github.com/sgl-project/sglang/pull/41657) [DSv4.1] Fold q_rope_store into fused_q_norm_rope
- [#42312](https://github.com/sgl-project/sglang/pull/42312) [Refactor] Drop the reduction-skip mechanisms stage boundaries no longer use
- [#42311](https://github.com/sgl-project/sglang/pull/42311) [Refactor] Build the ZAYA1, IQuest-Q1 and Gemma 4 decoders from stage boundaries
- [#42310](https://github.com/sgl-project/sglang/pull/42310) [Fix] GigaChat 3.5: apply the sandwich norms to the complete sums
- [#42309](https://github.com/sgl-project/sglang/pull/42309) [Refactor] Build the GLM-4, GLM-Image and Granite MoE hybrid decoders from stage boundaries
- [#42305](https://github.com/sgl-project/sglang/pull/42305) [Fix] EXAONE MoE under DP attention and DeepEP
- [#42308](https://github.com/sgl-project/sglang/pull/42308) [Refactor] Build the Llama and Nemotron-NAS decoders from stage boundaries
- [#42304](https://github.com/sgl-project/sglang/pull/42304) [Refactor] Build the ERNIE 4.5 VL MoE and EXAONE MoE decoders from stage boundaries
- [#42303](https://github.com/sgl-project/sglang/pull/42303) [Fix] EXAONE and ERNIE 4.5 VL MoE architecture, backend and PP issues
- [#42307](https://github.com/sgl-project/sglang/pull/42307) [Refactor] Build the Qwen2 decoders from stage boundaries
- [#42306](https://github.com/sgl-project/sglang/pull/42306) [Fix] Jet-Nemotron build and Granite MoE hybrid final norm
- [#42302](https://github.com/sgl-project/sglang/pull/42302) [Fix] Step-3.5 DeepEP routed scaling and Sarvam shared expert under dense TP1
- [#42301](https://github.com/sgl-project/sglang/pull/42301) [Refactor] Let stage boundaries complete every stage-output sum
- [#42300](https://github.com/sgl-project/sglang/pull/42300) [Refactor] Drop TBO op methods that no strategy ever schedules
- [#42362](https://github.com/sgl-project/sglang/pull/42362) [mem_cache] Replace `is_chunk_cache` / `is_tree_cache` with `supports_prefix_sharing`
- [#37077](https://github.com/sgl-project/sglang/pull/37077) [PD] Centralize drain-aware abort acknowledgements
- [#41985](https://github.com/sgl-project/sglang/pull/41985) [Diffusion][MiniMax-H3] Route SubBlock sparse attention in head chunks
- [#42203](https://github.com/sgl-project/sglang/pull/42203) [Fix] Guard DeepSeek NVFP4 shared-expert fusion for LoRA and FP4 backends
- [#42255](https://github.com/sgl-project/sglang/pull/42255) [diffusion] Fix native FP8 format handling for FLUX 3 rowwise linears
- [#42215](https://github.com/sgl-project/sglang/pull/42215) [HiCache] Fix DeepSeek-V4 storage backend crash from missing storage_format_tag
- [#42214](https://github.com/sgl-project/sglang/pull/42214) [Fix] Validate per-layer rope_parameters on transformers 5.17 (Laguna-S/XS-2.1 nightly)
- [#41870](https://github.com/sgl-project/sglang/pull/41870) [AMD] GLM-5.3-Flash: fuse shared expert and KDA projections on Quark MXFP4

#### 🐛 New Issues
- [#42369](https://github.com/sgl-project/sglang/issues/42369) [Bug][KV Cache] nvfp4 KV silently reuses the checkpoint's fp8-calibrated k/v_scale as NVFP4 global scale → deterministic long-context corruption (single-variable proof, sm_120) 💬3
- [#42392](https://github.com/sgl-project/sglang/issues/42392) [Feature] File-backed PLE table: concurrent host reads for cold rows (6.8x lower cold-prefill TTFT on GB10) 💬2
- [#42415](https://github.com/sgl-project/sglang/issues/42415) fix(mlx): repeated chat returns unrelated text after native generation
- [#42409](https://github.com/sgl-project/sglang/issues/42409) [Feature] Cloudflare Clef support
- [#42397](https://github.com/sgl-project/sglang/issues/42397) [Bug] --speculative-token-map crashes at TP>1 (device-side assert in init_lm_head): global hot-token ids index a vocab-sharded lm_head
- [#42373](https://github.com/sgl-project/sglang/issues/42373) [Bug] DeepSeekV31Detector streaming drops the arguments when a complete tool call arrives in one delta
- [#42367](https://github.com/sgl-project/sglang/issues/42367) [Bug] SM120: DeepSeek-V4.1-Flash decode CUDA graph capture fails with FlashInfer 0.7.0 because `_DECODE_DSV4_DISPATCH` is no longer iterable
- [#42364](https://github.com/sgl-project/sglang/issues/42364) [Bug] DeepSeek-V4.1 fails at attention backend init on SM12x (GB10): the candidate indexer requires DeepGEMM paged sparse MQA logits, which are SM100-only
- [#42361](https://github.com/sgl-project/sglang/issues/42361) [Bug] DeepSeek V4 Pro loading on Lustre takes 95 minutes despite prefetch; limiting tensor-copy workers reduces it to 3.3 minutes

#### 🔒 Closed Issues
- [#30093](https://github.com/sgl-project/sglang/issues/30093) [MLX] Overlap chained decode skips token accounting; decode-KV pool sync writes to unallocated or stale slots
- [#30570](https://github.com/sgl-project/sglang/issues/30570) [Bug] RuntimeError in DSA attention backend during EAGLE verify when sequence approaches `context-length` (tensor size mismatch 614406 vs 614408)
- [#33134](https://github.com/sgl-project/sglang/issues/33134) [Bug] DeepSeek-V4-Flash-0731 DSPARK on 2x DGX Spark (sm_121, TP=2): sparse-MLA prefill rejects topk=192 (config index_topk=512; kernel buckets 128/512/1024/2048)
- [#33207](https://github.com/sgl-project/sglang/issues/33207) [Bug] Unrecognized configuration class <class 'sglang.srt.utils.hf_transformers.common._DeepseekV4ConfigAlias'>
- [#33627](https://github.com/sgl-project/sglang/issues/33627) [Feature] Should we make the LM head GEMM output fp32 instead of bf16?
- [#31924](https://github.com/sgl-project/sglang/issues/31924) [diffusion] update_weights_from_disk transformer reload fails (shape mismatch 400) — diffusers checkpoint layout not reconciled with sglang params
- [#33563](https://github.com/sgl-project/sglang/issues/33563) [Bug] OpenAI completions reject per-prompt extra_key/cache_salt lists allowed by the schema
- [#33505](https://github.com/sgl-project/sglang/issues/33505) [Bug] The --json-model-override-args does not recursively update the model configuration.
- [#27740](https://github.com/sgl-project/sglang/issues/27740) PD MHA KV transfer may mis-detect draft KV layout for uneven PP full-attn layers
- [#33408](https://github.com/sgl-project/sglang/issues/33408) [Bug] Unlimited-OCR: server crashes when batching images with different gundam tile counts
- [#33603](https://github.com/sgl-project/sglang/issues/33603) [Bug] backend ignores bidirectional sliding window attention for encoder models
- [#33547](https://github.com/sgl-project/sglang/issues/33547) [MLX] Retracted request's decode KV can flush into a reused req_to_token row on the next extend forward
- [#33526](https://github.com/sgl-project/sglang/issues/33526) [docs] GLM-Image high-performance commands
- [#33528](https://github.com/sgl-project/sglang/issues/33528) [Bug] Encountered an error while loading the Minimaxh3 model.
- [#33357](https://github.com/sgl-project/sglang/issues/33357) [Temp][diffusion] model: Support MiniMax-H3 on Ascend A2/A3 Temporary Quick-Start Guide
- [#33504](https://github.com/sgl-project/sglang/issues/33504) Title: Inconsistent error response format with OpenAI standard for non-streaming requests
- [#33493](https://github.com/sgl-project/sglang/issues/33493) [Bug] DSPARK retrieves wrong key "acc_linear_penalities" from sampling_info
- [#33409](https://github.com/sgl-project/sglang/issues/33409) [RFC] Distributed multimodal preprocessing for large multi-image requests in multi-node TP deployments
- [#33464](https://github.com/sgl-project/sglang/issues/33464) [Bug] EXIF orientation is never applied when decoding images for VLM serving
- [#34758](https://github.com/sgl-project/sglang/issues/34758) [Feature] Router GEMM should keep fp32 output under deterministic inference (DeepSeek V3/V4)

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 130,234 · **Open issues:** 2,529 · **Last push:** 1h ago

On October 4, 2026, llama.cpp released several new versions, including b11382 which adds f16 support to fill/set_rows. Noteworthy bug fixes were addressed in b11381, correcting a deprecated strdup warning on Windows, and b11376, which resolved a flaky ADD_ADD issue in CI testing. Additionally, the ggml-openvino was updated to version 2026.4.1, optimizing performance and expanding operations. Among the newly reported issues, #29902 highlights a critical bug where the llama-server aborts when question batches exceed the model's n_ubatch capacity, indicating a pressing need for attention.

#### 🚀 New Releases
- [b11382](https://github.com/ggml-org/llama.cpp/releases/tag/b11382) b11382
- [b11381](https://github.com/ggml-org/llama.cpp/releases/tag/b11381) b11381
- [b11380](https://github.com/ggml-org/llama.cpp/releases/tag/b11380) b11380
- [b11379](https://github.com/ggml-org/llama.cpp/releases/tag/b11379) b11379
- [b11378](https://github.com/ggml-org/llama.cpp/releases/tag/b11378) b11378
- [b11377](https://github.com/ggml-org/llama.cpp/releases/tag/b11377) b11377
- [b11376](https://github.com/ggml-org/llama.cpp/releases/tag/b11376) b11376
- [b11375](https://github.com/ggml-org/llama.cpp/releases/tag/b11375) b11375
- [b11374](https://github.com/ggml-org/llama.cpp/releases/tag/b11374) b11374
- [b11372](https://github.com/ggml-org/llama.cpp/releases/tag/b11372) b11372

#### ✅ Merged PRs
- [#29897](https://github.com/ggml-org/llama.cpp/pull/29897) webgpu: add f16 support to fill/set_rows
- [#29863](https://github.com/ggml-org/llama.cpp/pull/29863) mtmd : fix deprecated strdup warning on Windows
- [#29886](https://github.com/ggml-org/llama.cpp/pull/29886) vendor : update cpp-httplib to 0.59.0
- [#29903](https://github.com/ggml-org/llama.cpp/pull/29903) server : fix laya abort by limiting n_batch to n_ubatch
- [#29860](https://github.com/ggml-org/llama.cpp/pull/29860) common : add common_is_tty() helper and fix warnings on Windows
- [#29813](https://github.com/ggml-org/llama.cpp/pull/29813) chat : honor json_schema in Ling 3.0 parser
- [#29904](https://github.com/ggml-org/llama.cpp/pull/29904) Fix CI: fix flaky ADD_ADD f16 by using the fused ADD tolerance
- [#29856](https://github.com/ggml-org/llama.cpp/pull/29856) graph: fix CI realloc abort by gathering the recurrent states once
- [#29852](https://github.com/ggml-org/llama.cpp/pull/29852) ggml-openvino: update to 2026.4.1, optimize performance, expand ops, improve device listing.
- [#29862](https://github.com/ggml-org/llama.cpp/pull/29862) model : Add LFM2.5-Encoder-350M and LFM2.5-Encoder-230M
- [#29825](https://github.com/ggml-org/llama.cpp/pull/29825) qwen4exp : halve the indexer score memory

#### 🐛 New Issues
- [#29922](https://github.com/ggml-org/llama.cpp/issues/29922) Feature Request: Aleph-Alpha/Kolibri-1 `enhancement` 💬1
- [#29893](https://github.com/ggml-org/llama.cpp/issues/29893) Feature Request: multi_logit_bias `enhancement` 💬3
- [#29899](https://github.com/ggml-org/llama.cpp/issues/29899) Conversion to GGUF bug: --mistral-format failed to be applied `bug-unconfirmed` 💬2
- [#29921](https://github.com/ggml-org/llama.cpp/issues/29921) Compile bug: vite.config.ts: test dependencies break non-test builds `bug-unconfirmed` 💬1
- [#29906](https://github.com/ggml-org/llama.cpp/issues/29906) Feature Request: gemma4 31B chat template quadratic scan cost `enhancement` 💬1
- [#29902](https://github.com/ggml-org/llama.cpp/issues/29902) Misc. bug: llama-server with laya model aborts when the questions of a batch exceed n_ubatch `bug-unconfirmed` 💬1
- [#29926](https://github.com/ggml-org/llama.cpp/issues/29926) Eval bug: ggml-vulkan ggml_vk_wait_for_fence spins forever when the driver never reports device loss after a GPU fault
- [#29917](https://github.com/ggml-org/llama.cpp/issues/29917) ggml-cpu: ggml_vec_dot_bf16 has no NEON implementation - BF16 weights fall back to scalar loop on ARM
- [#29916](https://github.com/ggml-org/llama.cpp/issues/29916) llama-quantize: GGML_ASSERT(size mismatch) when quantizing mmproj files containing 3D conv tensors (gemma4v audio conv1d)
- [#29914](https://github.com/ggml-org/llama.cpp/issues/29914) [RPC] PAD_REFLECT_1D can write past the destination tensor in release builds
- [#29909](https://github.com/ggml-org/llama.cpp/issues/29909) Compile bug: undeclared identifier ggml_vk_test_dequant and ggml_vk_test_dequant_matmul when compiling with -DGGML_VULKAN_RUN_TESTS=ON `bug-unconfirmed`
- [#29908](https://github.com/ggml-org/llama.cpp/issues/29908) Vulkan: decode MUL_MAT_VEC ~5-7x slower in-model than isolated on Arc Pro B50 `bug-unconfirmed`
- [#29894](https://github.com/ggml-org/llama.cpp/issues/29894) HIP/ROCm: llama-server hangs at init (single-thread spin, no I/O) with --load-mode mmap or --cpu-moe on qwen4exp / Strix Halo (gfx1151)
- [#29905](https://github.com/ggml-org/llama.cpp/issues/29905) [Security] Misc. bug: heap-buffer-overflow in pocket-tts gen-audio via a malformed mmproj `bug-unconfirmed`
- [#29890](https://github.com/ggml-org/llama.cpp/issues/29890) Misc. bug: cuda - Available devices: (none) since b11351 `bug-unconfirmed`
- [#29891](https://github.com/ggml-org/llama.cpp/issues/29891) Misc. bug: large pasted text preview overflowing in the webui `bug-unconfirmed`
- [#29892](https://github.com/ggml-org/llama.cpp/issues/29892) Misc. bug: Vulkan ~12% prefill regression on RDNA4 (RX 9070 XT) since #29182 (MoE-aware mul_mat_id tile selection) `bug-unconfirmed`
- [#29888](https://github.com/ggml-org/llama.cpp/issues/29888) Misc. bug: sycl: fix memory errors in mul_mat, split buffer, host pool `bug-unconfirmed`

#### 🔒 Closed Issues
- [#25030](https://github.com/ggml-org/llama.cpp/issues/25030) Feature Request: add builds for arm64 windows with CUDA
- [#24822](https://github.com/ggml-org/llama.cpp/issues/24822) Server: improve progress reporting
- [#26031](https://github.com/ggml-org/llama.cpp/issues/26031) Eval bug: Qwen3.6-35B-A3B-Q8_0.gguf multiple clients concurrently produce garbled output b9922 above（b9918 is ok）
- [#27367](https://github.com/ggml-org/llama.cpp/issues/27367) Bug: HTTP 500 when a system message appears mid-conversation (strict chat templates, e.g. Qwen3.x)
- [#25518](https://github.com/ggml-org/llama.cpp/issues/25518) Eval bug: Garbage output for model Qwen2.5-0.5B-Instruct-GGUF when -ngl > 0
- [#27460](https://github.com/ggml-org/llama.cpp/issues/27460) Eval bug: draft-mtp (self-speculative) models crash on Vulkan/RADV after Linux kernel bump 7.1.3 → 7.1.7 — same class as #24492, different GPU/model
- [#27425](https://github.com/ggml-org/llama.cpp/issues/27425) Feature Request: Autotune tool to determine best configuration for op offload min batch size
- [#27427](https://github.com/ggml-org/llama.cpp/issues/27427) Eval bug: A ~50 KB request causes a crash on llama-server, exit 139, OOMKilled=false, restart count 0 -> 1
- [#27431](https://github.com/ggml-org/llama.cpp/issues/27431) Eval bug: llama-cli and llama-server both crash when running unsloth/Qwen3.8-27B-UD-Q4_K_M.gguf on Vulkan (AMD R9700) on Windows
- [#27436](https://github.com/ggml-org/llama.cpp/issues/27436) Metrics gauges prompt_tokens_seconds / predicted_tokens_seconds are almost always 0, making live dashboards unusable
- [#27439](https://github.com/ggml-org/llama.cpp/issues/27439) Misc. bug: llama_state_seq_set_data_ext: invalid ON_DEVICE state can throw across the C API or abort
- [#27445](https://github.com/ggml-org/llama.cpp/issues/27445) qwen35 embedding models: llama_get_embeddings_seq returns NULL → fallback to ith limited to 512 tokens
- [#27463](https://github.com/ggml-org/llama.cpp/issues/27463) cant force stop localhost:8080 (llama-ui) no matter what i try
- [#29902](https://github.com/ggml-org/llama.cpp/issues/29902) Misc. bug: llama-server with laya model aborts when the questions of a batch exceed n_ubatch
- [#29894](https://github.com/ggml-org/llama.cpp/issues/29894) HIP/ROCm: llama-server hangs at init (single-thread spin, no I/O) with --load-mode mmap or --cpu-moe on qwen4exp / Strix Halo (gfx1151)
- [#29652](https://github.com/ggml-org/llama.cpp/issues/29652) Misc. bug: Ling 3.0 parser ignores response_format / json_schema
- [#29890](https://github.com/ggml-org/llama.cpp/issues/29890) Misc. bug: cuda - Available devices: (none) since b11351

### Ollama (`ollama/ollama`)

**Stars:** 182,128 · **Open issues:** 4,167 · **Last push:** 1h ago

On October 4, 2026, there were no new releases for Ollama. However, two significant pull requests were merged: PR #18776 introduced improvements to the decision model, while PR #18701 added support for System One. Among new issues reported, #18769 raised concerns about the `clef-flash` decision model failing on the `/v1/systemone` endpoint with errors related to model loading, indicating a potential reliability issue that may need urgent attention. Additionally, users reported problems with version compatibility in #18770, highlighting challenges in running specific models effectively.

#### ✅ Merged PRs
- [#18776](https://github.com/ollama/ollama/pull/18776) mlx: Decision model improvements
- [#18701](https://github.com/ollama/ollama/pull/18701) mlx: System one support

#### 🐛 New Issues
- [#18769](https://github.com/ollama/ollama/issues/18769) `clef-flash` decision model always fails on `/v1/systemone` — "Clef: non-finite logit" (CUDA) / "Clef: cannot open model" (CPU) 💬5
- [#18775](https://github.com/ollama/ollama/issues/18775) /api/generate accepts trailing non-JSON data after a valid JSON request body `bug` 💬1
- [#18770](https://github.com/ollama/ollama/issues/18770) 0.35.1 or 0.34.4 cannot run mistral-medium-3.5:128b correctly `bug` 💬1
- [#18774](https://github.com/ollama/ollama/issues/18774) Gemma4: JSON schema format is not enforced when think:true answers directly without reasoning `bug`
- [#18772](https://github.com/ollama/ollama/issues/18772) device index is incremented for filtered pseudo-devices `bug`

#### 🔒 Closed Issues
- [#17050](https://github.com/ollama/ollama/issues/17050) Qwen3.5:35b-mlx is much slower than Qwen3.5:35b; Qwen3.6:35b-mlx is unrunnable while Qwen3.6:35b can

### LiteLLM (`BerriAI/litellm`)

**Stars:** 60,094 · **Open issues:** 5,155 · **Last push:** <1h ago

On October 4, 2026, LiteLLM released version v1.105.0-rc.1 alongside v1.104.0 and v1.103.3, all signed with the same key for security assurance. Significant merged features include the introduction of a closable SidePanel for the trace drawer in PR #44473 and improved Lens development seeding and UI in PR #44468. Noteworthy fixes addressed issues such as preserving approved worker digests in PR #44467 and resolving hidden model group aliases in budget checks in PR #43741. Additionally, a troubling new bug was reported in issue #44336, where the vertex_ai/agent_engine silently drops content parts while returning a fabricated answer with an HTTP 200 status.

#### 🚀 New Releases
- [v1.105.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.105.0-rc.1) v1.105.0-rc.1
- [v1.104.0](https://github.com/BerriAI/litellm/releases/tag/v1.104.0) v1.104.0
- [v1.103.3](https://github.com/BerriAI/litellm/releases/tag/v1.103.3) v1.103.3

#### ✅ Merged PRs
- [#44473](https://github.com/BerriAI/litellm/pull/44473) feat(ui): share trace drawer as a closable SidePanel and polish Lens
- [#44470](https://github.com/BerriAI/litellm/pull/44470) test(ui): wait for step search value to settle in TraceDrawer test
- [#44468](https://github.com/BerriAI/litellm/pull/44468) feat: improve Lens dev seeding and live UI
- [#44467](https://github.com/BerriAI/litellm/pull/44467) fix(lens): preserve approved worker digests and harden its image
- [#43556](https://github.com/BerriAI/litellm/pull/43556) fix(caching): count tool_call cache_control marks in the injection census
- [#44466](https://github.com/BerriAI/litellm/pull/44466) chore(cost-map): sync openrouter prices from the models API
- [#44444](https://github.com/BerriAI/litellm/pull/44444) feat(enterprise): bundle LiteAdmin Slack with native gateway login
- [#44465](https://github.com/BerriAI/litellm/pull/44465) feat(roi): default people and branch lists to matched accounts
- [#43900](https://github.com/BerriAI/litellm/pull/43900) fix(vertex_ai): forward system and tools to partner model count_tokens
- [#44451](https://github.com/BerriAI/litellm/pull/44451) test(integration): exact four-part translation cases on a shared fake provider and shared YAML deployment
- [#44448](https://github.com/BerriAI/litellm/pull/44448) feat(anthropic): workload identity federation and pluggable identity sources
- [#44462](https://github.com/BerriAI/litellm/pull/44462) fix(tests): match the OS bind error in the owned-proxy port-race retry
- [#44419](https://github.com/BerriAI/litellm/pull/44419) fix(health): probe Bedrock Mantle Claude deployments over the Anthropic Messages API
- [#44428](https://github.com/BerriAI/litellm/pull/44428) feat(lens): coordinate worker releases and bundled installs
- [#44455](https://github.com/BerriAI/litellm/pull/44455) chore(cost-map): add azure_ai/kimi-k2-thinking retirement date from the Azure retired models page
- [#44456](https://github.com/BerriAI/litellm/pull/44456) fix(traces): reject conflicting spend aliases and unrelated HTTP siblings
- [#43741](https://github.com/BerriAI/litellm/pull/43741) fix(auth): resolve hidden model_group_alias entries in the zero-cost budget check
- [#44454](https://github.com/BerriAI/litellm/pull/44454) feat(ui): show invitation and reset password links in a copyable field
- [#44449](https://github.com/BerriAI/litellm/pull/44449) fix(azure): set text-embedding max input to 8192 from the models sold directly page
- [#44426](https://github.com/BerriAI/litellm/pull/44426) feat(roi): measure shipping velocity, quality, and recorded spend
- [#44421](https://github.com/BerriAI/litellm/pull/44421) fix(tracing): preserve spend identity and gateway correlation
- [#43646](https://github.com/BerriAI/litellm/pull/43646) fix(bedrock_mantle): route Claude chat completions to the native Messages endpoint
- [#44425](https://github.com/BerriAI/litellm/pull/44425) fix(mcp): preserve upstream tool schemas and parameter headers
- [#44307](https://github.com/BerriAI/litellm/pull/44307) feat(bedrock): serve gpt-5.6+ chat completions natively by default, with chat_completions/ opt-in for gpt-oss and grok
- [#44431](https://github.com/BerriAI/litellm/pull/44431) fix(lens): release budget reservations when the analysis model call fails

#### 🐛 New Issues
- [#44336](https://github.com/BerriAI/litellm/issues/44336) [Bug]: vertex_ai/agent_engine silently drops image/file/audio content parts and returns a fabricated answer (HTTP 200) `llm translation` 💬3
- [#44373](https://github.com/BerriAI/litellm/issues/44373) [Bug]: MCP tools/call returns 404 'Tool not found' after proxy restart for DB-managed servers (cold tool-name mapping) `claude code` 💬1
- [#44441](https://github.com/BerriAI/litellm/issues/44441) [Feature]: Lens coordination observability for OpenAI multi-agent workflows `llm translation`
- [#44435](https://github.com/BerriAI/litellm/issues/44435) [Bug]: Claude Code auto mode: dangerous-tool-use beta + output_config.format on Bedrock Haiku 4.5 returns "invalid beta flag" (beta forwarded without safeguards) `llm translation` `claude code`
- [#44392](https://github.com/BerriAI/litellm/issues/44392) [Bug]: Streamed tool call names and ids are rebuilt from their last fragment only `llm translation`
- [#44358](https://github.com/BerriAI/litellm/issues/44358) [Feature]: Filter native Slack budget alerts by virtual-key alias patterns
- [#44348](https://github.com/BerriAI/litellm/issues/44348) stream_chunk_builder loses finish_reason and prompt_tokens for streamed text completions with include_usage `llm translation`
- [#44316](https://github.com/BerriAI/litellm/issues/44316) [Bug]: Streaming callbacks log finish_reason "stop" for tool_calls and length when the provider's last chunk carries content and the finish reason `llm translation`

#### 🔒 Closed Issues
- [#28607](https://github.com/BerriAI/litellm/issues/28607) [Feature]: Support Anthropic Workload Identity Federation (OIDC JWT-bearer token exchange)
- [#29912](https://github.com/BerriAI/litellm/issues/29912) [Bug]: Internal-user max_budget blocks zero-cost models — _PROXY_MaxBudgetLimiter ignores skip_budget_checks
- [#38515](https://github.com/BerriAI/litellm/issues/38515) [Bug]: Zero-cost models are blocked once a user's personal `max_budget` is exhausted
- [#36854](https://github.com/BerriAI/litellm/issues/36854) /models endpoint response shape breaks OpenAI Codex CLI's model discovery
- [#31947](https://github.com/BerriAI/litellm/issues/31947) [Bug]: aws_bedrock_project_id sent as wrong header ("anthropic-workspace") to Bedrock Mantle — should be "anthropic-workspace-id"
- [#43010](https://github.com/BerriAI/litellm/issues/43010) [Bug]: /v1/responses streaming with Anthropic doubles thinking text in reasoning encrypted_content
- [#42725](https://github.com/BerriAI/litellm/issues/42725) [Bug]: Bedrock GPT-6 Sol/Luna tools are dropped on Converse, and temperature returns 400 even with drop_params
- [#24710](https://github.com/BerriAI/litellm/issues/24710) MCP UI: Edit Settings → Tool Configuration fails for OAuth2 M2M servers (credentials redacted)
- [#31510](https://github.com/BerriAI/litellm/issues/31510) [Bug] Model Armor guardrail does not screen /v1/responses input (reads messages, not input)
- [#31551](https://github.com/BerriAI/litellm/issues/31551) [Bug]: Anthropic /v1/messages returns APIError for valid OpenAI Responses API response
- [#41357](https://github.com/BerriAI/litellm/issues/41357) [Bug]: Proxy leaks one SlackAlerting.periodic_flush task every 30s when general_settings.alerting is set (grows until restart)
- [#38076](https://github.com/BerriAI/litellm/issues/38076) [Bug]: import litellm fails on Python 3.10 — NotRequired imported from stdlib typing without fallback
- [#35097](https://github.com/BerriAI/litellm/issues/35097) feat(router): required-AND tag routing via & prefix
- [#34799](https://github.com/BerriAI/litellm/issues/34799) [Bug]: model_prices_and_context_window.json: replicate model key typo makes gpt-oss-20b unresolvable
- [#32242](https://github.com/BerriAI/litellm/issues/32242) MCP gateway: 'int' object is not subscriptable — progressToken slice assumes str (server.py:735)
- [#32226](https://github.com/BerriAI/litellm/issues/32226) [Bug]: 大数据量 MCP 请求（超过 4KB）时，网关/服务端因 UTF-8 截断导致 500 错误
- [#31167](https://github.com/BerriAI/litellm/issues/31167) [Bug]: Cohere rerank v2 duplicates endpoint path for versioned api_base
- [#42868](https://github.com/BerriAI/litellm/issues/42868) [Bug]: s3_v2 async 500/503 retries are bypassed by HTTPStatusError
- [#38892](https://github.com/BerriAI/litellm/issues/38892) Python 3.10: `import litellm` fails, `NotRequired` imported from `typing`
- [#34394](https://github.com/BerriAI/litellm/issues/34394) [Feature]: GET /v2/team/list endpoint includes litellm_model_table relation
- [#33780](https://github.com/BerriAI/litellm/issues/33780) [Feature]: Support declaring `x-amz-server-side-encryption-aws-kms-key-id` in the `s3_v2` logging callback
- [#32246](https://github.com/BerriAI/litellm/issues/32246) fix(prometheus): skip budget metric DB/cache lookups when all budget gauges are NoOpMetric
- [#43316](https://github.com/BerriAI/litellm/issues/43316) [Bug]: Responses bridge returns a narrated tool call as TWO chat choices (text in choices[0] with finish_reason stop, function_call in choices[1]) so chat clients lose the tool call
- [#35937](https://github.com/BerriAI/litellm/issues/35937) [Bug]: timestamp_granularities=["segment", "word"] only returns the last granularity for Whisper
- [#38258](https://github.com/BerriAI/litellm/issues/38258) [Bug]: /vector_store/list prunes config.yaml-sourced vector stores from in-memory registry
- [#37738](https://github.com/BerriAI/litellm/issues/37738) [Feature]: size and quality keyed cost tracking for fal_ai gpt-image-2
- [#41827](https://github.com/BerriAI/litellm/issues/41827) bedrock_mantle: no Anthropic Messages API transformation for Claude models that require it (e.g. anthropic.claude-sonnet-5)
- [#44051](https://github.com/BerriAI/litellm/issues/44051) [Bug]: Vertex partner /v1/messages/count_tokens still drops system and tools (regression of #27113, reproduces on v1.100.0)
- [#44080](https://github.com/BerriAI/litellm/issues/44080) [Feature]: Serve a Codex-native model catalog so Codex CLI can discover service tiers (e.g. /ultrafast) through the proxy
- [#43856](https://github.com/BerriAI/litellm/issues/43856) [Feature]: Add reranking capabilities for Scaleway
- [#44316](https://github.com/BerriAI/litellm/issues/44316) [Bug]: Streaming callbacks log finish_reason "stop" for tool_calls and length when the provider's last chunk carries content and the finish reason

### Unsloth (`unslothai/unsloth`)

**Stars:** 77,180 · **Open issues:** 1,090 · **Last push:** <1h ago

On October 4, 2026, there were no new releases for Unsloth, but several significant pull requests were merged, enhancing the Studio's functionality. Key updates included improvements in the integration and performance of models, such as the ability to export GGUF formats for FastFlowLM Q4NX on AMD Ryzen AI NPUs and optimizations that reduced step times for MiniMax-H3 components. Notably, a fix was implemented to prevent Whisper from dropping sentences in longer clips, and a feature was added to allow small models to summarize long attached files. Among the new issues, a user-reported bug (#12638) indicates problems with the web search functionality due to a connection reset, which could impact users' experience with the software.

#### ✅ Merged PRs
- [#12655](https://github.com/unslothai/unsloth/pull/12655) Studio: rounder, roomier toasts
- [#12590](https://github.com/unslothai/unsloth/pull/12590) Studio: prefetch an image load's weights and upload host tensors through a pinned ring
- [#12541](https://github.com/unslothai/unsloth/pull/12541) Unsloth Studio: export or convert a GGUF to FastFlowLM Q4NX for the AMD Ryzen AI NPU
- [#12628](https://github.com/unslothai/unsloth/pull/12628) Accept a list train_dataset again on TRL 1.10+ (fixes vision notebooks)
- [#12481](https://github.com/unslothai/unsloth/pull/12481) Studio: stop Whisper dropping sentences from clips longer than 30 seconds
- [#12643](https://github.com/unslothai/unsloth/pull/12643) Record the Wan fused block's import_module in the risky loader baseline
- [#12536](https://github.com/unslothai/unsloth/pull/12536) Studio: keep the whole int8 Qwen-Image-2.1 denoiser resident at 12 GB, released only while the encoders run (298 to 212 ms per step)
- [#12591](https://github.com/unslothai/unsloth/pull/12591) studio: let vision models view workspace images in code mode
- [#12524](https://github.com/unslothai/unsloth/pull/12524) Studio: engage the fused int8 GEMM when the placement pins the whole denoiser, and restore torchao weights after an oversized request
- [#12580](https://github.com/unslothai/unsloth/pull/12580) Studio: let small models read a long attached file when asked to summarize it
- [#12635](https://github.com/unslothai/unsloth/pull/12635) Keep torch deprecation warnings at the caller through the __getattr__ wrapper
- [#12517](https://github.com/unslothai/unsloth/pull/12517) Studio: fuse MiniMax-H3's ConvRot rotation into the int8 activation quant
- [#12507](https://github.com/unslothai/unsloth/pull/12507) Studio: MiniMax-H3 int8 Linears take the fused-dequant int8 GEMM (A100 9% faster per step, ahead of ComfyUI)
- [#12459](https://github.com/unslothai/unsloth/pull/12459) Studio: MiniMax-H3 attention fast path and fused q/k norm + RoPE (5-7% faster per step)
- [#12568](https://github.com/unslothai/unsloth/pull/12568) Studio: hold cudnn.benchmark off for Qwen-Image, HunyuanVideo-1.5, FLUX.1, Z-Image and SDXL
- [#12565](https://github.com/unslothai/unsloth/pull/12565) Studio: hold cudnn.benchmark off for Wan so renders are reproducible across servers
- [#12561](https://github.com/unslothai/unsloth/pull/12561) Fix text-only VLM decoder saves reloading with random weights
- [#11591](https://github.com/unslothai/unsloth/pull/11591) Studio: serve multiple models at once
- [#12531](https://github.com/unslothai/unsloth/pull/12531) Studio: fused fp16 Wan block kernels on T4 (Wan2.2-5B 11.7 to 10.0 s per step, within base's spread)
- [#12636](https://github.com/unslothai/unsloth/pull/12636) Add a fast lint gate for risky loader call sites
- [#12633](https://github.com/unslothai/unsloth/pull/12633) Studio: make the fused int8 kernels bit-exact on torchao 0.17 and round int32 to bf16 twice like PyTorch
- [#12576](https://github.com/unslothai/unsloth/pull/12576) Studio: keep dark ink visible in transparent source images
- [#12525](https://github.com/unslothai/unsloth/pull/12525) Studio int8 GEMM: stop the device probe from reserving 0.7 to 1.4 GB of spill memory
- [#12588](https://github.com/unslothai/unsloth/pull/12588) Studio: pin inductor's dynamic_scale_rblock off so compiled renders match across servers
- [#12572](https://github.com/unslothai/unsloth/pull/12572) Studio: keep a load's diffusers / peft import off the post-warm import
- [#12603](https://github.com/unslothai/unsloth/pull/12603) Studio: decode a resident Wan2.2-TI2V-5B VAE untiled when it fits
- [#12617](https://github.com/unslothai/unsloth/pull/12617) Studio: move torchao int8 weights back to the GPU after an oversized request streams pinned groups
- [#12629](https://github.com/unslothai/unsloth/pull/12629) Keep the load-time gradient checkpointing mode in for_training
- [#12604](https://github.com/unslothai/unsloth/pull/12604) studio: allow full access for the installation owner
- [#12532](https://github.com/unslothai/unsloth/pull/12532) Studio small-host route: prefetch the streamed text encoder and fuse the int8 dequant (T4 FLUX.1-schnell 5.19 to 4.49 s per step, pixel-identical)
- [#12587](https://github.com/unslothai/unsloth/pull/12587) Point five mapper rows at their upstream repo instead of an unpublished unsloth 16bit name
- [#12551](https://github.com/unslothai/unsloth/pull/12551) Studio: stream a torchao denoiser from an unpinned host copy instead of leaving it on the GPU
- [#12639](https://github.com/unslothai/unsloth/pull/12639) Windows ROCm: use math attention where the fused SDPA kernels fail
- [#12555](https://github.com/unslothai/unsloth/pull/12555) Studio: stop the Load Model panel flagging Auto context loads as over VRAM
- [#12544](https://github.com/unslothai/unsloth/pull/12544) Unsloth Studio / Desktop: stop spam-clicking sidebar rows from queueing a navigation per click
- [#12574](https://github.com/unslothai/unsloth/pull/12574) Studio: keep earlier tool calls in chat history on safetensors and MLX models
- [#12616](https://github.com/unslothai/unsloth/pull/12616) Studio: use ComfyUI's default settings for FLUX.1, Qwen-Image, Z-Image, Ideogram 4, Wan2.2 and HunyuanVideo-1.5
- [#12619](https://github.com/unslothai/unsloth/pull/12619) Studio: renew the chat-run lease while long prefill is still advancing
- [#12527](https://github.com/unslothai/unsloth/pull/12527) Studio: MiniMax-H3 GGUF uses the BF16 cuBLAS matmul path by default on sm80+ (1.2 to 2.3x per step, closer to an F32 reference)
- [#12582](https://github.com/unslothai/unsloth/pull/12582) Let agent desktop apps use the model Unsloth is serving
- [#12546](https://github.com/unslothai/unsloth/pull/12546) Studio: keep the prompt queue's more menu open while queued prompts send
- [#12543](https://github.com/unslothai/unsloth/pull/12543) Unsloth Studio / Desktop: keep release-notes table links from splitting mid-word in the update popup
- [#12545](https://github.com/unslothai/unsloth/pull/12545) Studio: keep the VRAM figure visible on the Run preview hardware row
- [#12578](https://github.com/unslothai/unsloth/pull/12578) Studio: let API requests that ask for a JSON reply still call their tools
- [#12621](https://github.com/unslothai/unsloth/pull/12621) fix(studio): WSL2 Windows localhost hint in startup banner (#11187)
- [#12584](https://github.com/unslothai/unsloth/pull/12584) Studio: use the reply on screen when turning chats into training data
- [#12581](https://github.com/unslothai/unsloth/pull/12581) Studio: read text files saved in older Windows encodings correctly
- [#12613](https://github.com/unslothai/unsloth/pull/12613) fix(studio): prevent IME confirmation from submitting chat renames
- [#12618](https://github.com/unslothai/unsloth/pull/12618) Count only the lock's own waits in the unlockable-filesystem row
- [#12640](https://github.com/unslothai/unsloth/pull/12640) Chat UI: find the Full access consent dialog by its slots, not its wording
- [#12620](https://github.com/unslothai/unsloth/pull/12620) Studio: stop rejecting --mmproj-device CUDA1 when gpu_ids are saved
- [#12614](https://github.com/unslothai/unsloth/pull/12614) Studio: train a dataset's system column as the system prompt
- [#9554](https://github.com/unslothai/unsloth/pull/9554) Studio: consent dialog before FP8/FP4 llm-compressor install (Phase 2)
- [#12595](https://github.com/unslothai/unsloth/pull/12595) Studio: show NPU reply speeds and configure NPU models before loading
- [#12622](https://github.com/unslothai/unsloth/pull/12622) Studio: lift a carried model picker row like a sidebar chat, and lighten both drag copies
- [#12583](https://github.com/unslothai/unsloth/pull/12583) Studio: say so when the Audio page stops speech at Max tokens
- [#12575](https://github.com/unslothai/unsloth/pull/12575) Studio: stop training Gemma 4 on tool results
- [#12539](https://github.com/unslothai/unsloth/pull/12539) Studio: stop New chat from requesting a thread row that does not exist yet
- [#12573](https://github.com/unslothai/unsloth/pull/12573) Studio: stop unsloth start openclaw cutting every reply at 8,192 tokens
- [#12579](https://github.com/unslothai/unsloth/pull/12579) Studio: keep a tool call's answer after its result in JSONL chat exports
- [#12567](https://github.com/unslothai/unsloth/pull/12567) Studio: stop blaming Max Tokens when a connected model fills its context window
- [#12615](https://github.com/unslothai/unsloth/pull/12615) Parity: keep the reap-margin check off the edge of its own window
- [#12577](https://github.com/unslothai/unsloth/pull/12577) Studio: keep text placed over pictures when indexing a PDF
- [#12570](https://github.com/unslothai/unsloth/pull/12570) Studio tests: pin Z-Image's fp16 promotion in the calibrated-activation test
- [#12630](https://github.com/unslothai/unsloth/pull/12630) Studio: shorter permission menu, Learn more, calmer Full access
- [#12631](https://github.com/unslothai/unsloth/pull/12631) Studio: Skills pill in the composer for quick toggling
- [#12634](https://github.com/unslothai/unsloth/pull/12634) Studio: Skills dialog scrolls on its right edge
- [#12632](https://github.com/unslothai/unsloth/pull/12632) Studio: cleaner Deep research limits dialog
- [#12569](https://github.com/unslothai/unsloth/pull/12569) Revert 10 PRs merged before Codex review converged
- [#12564](https://github.com/unslothai/unsloth/pull/12564) Studio: search chats, projects, files and models from tabs in chat search
- [#12597](https://github.com/unslothai/unsloth/pull/12597) Check the sidebar pin follows the UI scale by property, not by its pinned length

#### 🐛 New Issues
- [#12638](https://github.com/unslothai/unsloth/issues/12638) [Bug] Web search fails: primp h2_client connection reset on v0.1.902-beta `feature request` `bug`
- [#12626](https://github.com/unslothai/unsloth/issues/12626) [Bug] tool_choice="none" can leave streamed tool calls without a terminal event `feature request` `bug`
- [#12625](https://github.com/unslothai/unsloth/issues/12625) [Feature] Unsloth Studio Context Length meter #2: Add a count for automatic compactions. `feature request`
- [#12624](https://github.com/unslothai/unsloth/issues/12624) [Feature] Unsloth Studio Context Length meter #1: Add a meter update when a tool call hands control to the sandbox. `feature request`
- [#12623](https://github.com/unslothai/unsloth/issues/12623) [UI/UX Bug] Live Monitor widget overlaps and z-index collision with background download status popover or other popover `feature request` `bug`
- [#12594](https://github.com/unslothai/unsloth/issues/12594) [Feature] Add a RLM feature to Unloth for keep improving model trajectory and provide model self -training loops training via API. So model can gain knowledge by itself without loosing its base model capability `feature request`
- [#12592](https://github.com/unslothai/unsloth/issues/12592) [Bug] stop generating buttons freeze. Keeps generating even after model unload and chat get freeze. `feature request` `bug`

#### 🔒 Closed Issues
- [#12372](https://github.com/unslothai/unsloth/issues/12372) [Unsloth Bug] Studio pages mmproj-F16.gguf from disk during generation — severe t/s regression since latest update; extra args shadow-stripped and --mlock rejected
- [#10983](https://github.com/unslothai/unsloth/issues/10983) Studio: durable chat runs persist an image_url or video_url data URI past the media gate
- [#12534](https://github.com/unslothai/unsloth/issues/12534) [Feature] Add Code tool for the vision capable LLM to automatically import an image.
- [#12554](https://github.com/unslothai/unsloth/issues/12554) [Bug] Problem saving and loading a text-only variant of a VLM (Gemma 3)

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,121 · **Open issues:** 402 · **Last push:** 11h ago

On October 4, 2026, AIBrix had a routine maintenance day with no new releases but notable developments in merged pull requests. Key updates included the fix for the bug addressed in PR #2875, which ensures the full pod selector is used when listing ModelAdapter pods, and enhancements to the autoscaling documentation with PR #2900 proposing @googs1025 for leadership in this area. Additionally, bug fixes like #2895 corrected the TOS V1 download issue and #2873 recreated missing model HTTPRoutes in the ModelRouter. However, new issues were reported, including bug #2906, which highlighted that KV event replay never applies the replayed batches, indicating a potential area for urgent attention.

#### ✅ Merged PRs
- [#2875](https://github.com/vllm-project/aibrix/pull/2875) [Bug] Use the full pod selector when listing ModelAdapter pods
- [#2901](https://github.com/vllm-project/aibrix/pull/2901) [Docs] Hand over autoscaling maintainership to @googs1025
- [#2602](https://github.com/vllm-project/aibrix/pull/2602) [UI] Batch: expose adaptive AIMD ramp-up controls
- [#2900](https://github.com/vllm-project/aibrix/pull/2900) [Docs] Propose @googs1025 to lead autoscaling
- [#2895](https://github.com/vllm-project/aibrix/pull/2895) [Bug] Fix TOS V1 download when part_chunksize is not set
- [#2647](https://github.com/vllm-project/aibrix/pull/2647) [API][Docs] Place a ModelClaim only where its card has room, and hold each engine to its share
- [#2873](https://github.com/vllm-project/aibrix/pull/2873) [Bug] Recreate missing model HTTPRoutes in ModelRouter
- [#2897](https://github.com/vllm-project/aibrix/pull/2897) [Misc] Re-enable completion streaming e2e test
- [#2896](https://github.com/vllm-project/aibrix/pull/2896) [CI] Run integration-tagged controller tests in CI
- [#2722](https://github.com/vllm-project/aibrix/pull/2722) [Bug] Reject mismatched RayClusterFleet selectors

#### 🐛 New Issues
- [#2906](https://github.com/vllm-project/aibrix/issues/2906) [Bug] KV event replay never applies the replayed batches `kind/bug` `area/gateway` 💬1
- [#2902](https://github.com/vllm-project/aibrix/issues/2902) [Bug] 100% doc change triggers full CI pipeline `kind/bug` `area/testing` `area/website` `area/cicd` 💬1
- [#2898](https://github.com/vllm-project/aibrix/issues/2898) [Bug] ModelAdapter webhook does not validate spec.podSelector `kind/misc` `area/orchestration`

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,019 · **Open issues:** 618 · **Last push:** 4h ago

On October 4, 2026, there were no new releases for Semantic Router; however, several significant features were merged, including the admission of TII Falcon models with source-backed evaluations and vLLM mappings, along with the first phase of a built-in model runtime to serve Decision 2.0 from vllm-sr. Additional enhancements included a session tool-set state model and trusted identity resolver, as well as updates to the CLI environment for model evaluation scripts. Notably, a bug was addressed that previously caused the CLI to fail to load when an invalid VLLM_SR_PORT_OFFSET was present. Among the new issues, the most urgent being the need to cover the CLI config hot-reload CAS flow with unit tests highlights ongoing development challenges.

#### ✅ Merged PRs
- [#4295](https://github.com/vllm-project/semantic-router/pull/4295) [Feature] Admit TII Falcon models with source backed evaluations and vLLM mappings
- [#4014](https://github.com/vllm-project/semantic-router/pull/4014) [#2976] Add paired bootstrap CIs for mapper eval
- [#3391](https://github.com/vllm-project/semantic-router/pull/3391) [Feature] Session tool-set state model, storage contracts, and trusted identity resolver (#3347 phase 1)
- [#4481](https://github.com/vllm-project/semantic-router/pull/4481) [Feature] Built-in model runtime, Phase 1: serve Decision 2.0 from vllm-sr
- [#4450](https://github.com/vllm-project/semantic-router/pull/4450) [Feature] Add a locked uv environment for the model_eval scripts
- [#4359](https://github.com/vllm-project/semantic-router/pull/4359) [Bug] Remove the inert MCP Auto Reconnect control
- [#3789](https://github.com/vllm-project/semantic-router/pull/3789) [Test] Add E2E coverage for the context signal

#### 🐛 New Issues
- [#4477](https://github.com/vllm-project/semantic-router/issues/4477) [Test] Cover the CLI config hot-reload CAS flow (plan, apply, versions, rollback) with unit tests `enhancement` `needs-acceptance` `wg/evaluation-quality` 💬5
- [#4480](https://github.com/vllm-project/semantic-router/issues/4480) [Docs] Document merge queue failure modes and the requeue workaround for contributors `accepted` `wg/developer-experience-ecosystem` `documentation` 💬5
- [#4496](https://github.com/vllm-project/semantic-router/issues/4496) [Feature] Built-in model runtime, Phases 2–4: Decision 1.0, Vela 1.0 and 2.0, and removal of the native bindings `enhancement` `accepted` `wg/router-models-inference-runtime` 💬4
- [#4511](https://github.com/vllm-project/semantic-router/issues/4511) [Bug] The CLI fails to load entirely when VLLM_SR_PORT_OFFSET is invalid `bug` `accepted` `wg/developer-experience-ecosystem` 💬3
- [#4519](https://github.com/vllm-project/semantic-router/issues/4519) [Feature] Enable safe local sticky tool selection in ExtProc (#3347 Phase 3) `enhancement` `needs-acceptance` `wg/agentic-context` 💬3
- [#4517](https://github.com/vllm-project/semantic-router/issues/4517) [Feature] Implement deterministic bounded sticky tool-set planning (#3347 Phase 2) `enhancement` `needs-acceptance` `wg/agentic-context` 💬3
- [#4484](https://github.com/vllm-project/semantic-router/issues/4484) [Bug] Contributor leaderboard refresh cannot open its PR; snapshot stale for 17 days `bug` `accepted` `wg/developer-experience-ecosystem` 💬3
- [#4476](https://github.com/vllm-project/semantic-router/issues/4476) [Docs] Use shields.io badge for a stable documentation badge image `accepted` `wg/developer-experience-ecosystem` `documentation` 💬3
- [#4499](https://github.com/vllm-project/semantic-router/issues/4499) [Bug] The label classifier reduces rejected backend bodies to a byte count, muting the json_schema rejection `bug` `needs-acceptance` `needs-info` `wg/data-plane-networking` 💬2
- [#4500](https://github.com/vllm-project/semantic-router/issues/4500) [Bug] Saving a Builder route turns NOT (a AND b) into NOT a AND b `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#4492](https://github.com/vllm-project/semantic-router/issues/4492) [Bug] Provider auth resolution failures return a bare 500 with no server-side log `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#4491](https://github.com/vllm-project/semantic-router/issues/4491) [Bug] config migrate reports success for output that fails canonical validation `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#4482](https://github.com/vllm-project/semantic-router/issues/4482) [Bug] Dashboard shutdown does not explicitly disconnect MCP clients `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬2
- [#4518](https://github.com/vllm-project/semantic-router/issues/4518) [Bug] Decision-2.0 identity check fails on Windows: path separator poisons model_sha256 `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#4516](https://github.com/vllm-project/semantic-router/issues/4516) [Bug] Chat response decoder rejects vLLM stop_reason strings over 128 bytes `bug` `accepted` `wg/data-plane-networking` 💬1
- [#4507](https://github.com/vllm-project/semantic-router/issues/4507) [Bug] Model runtime still runs a queued request after its client disconnects `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#4506](https://github.com/vllm-project/semantic-router/issues/4506) [Bug] Model runtime answers an unpaired surrogate in a request with 500 `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#4515](https://github.com/vllm-project/semantic-router/issues/4515) [Test] Streamed-body E2E cases still pass when chunk reassembly, SSE cache replay, or keyword routing is broken `enhancement` `needs-acceptance` `wg/evaluation-quality` 💬1
- [#4488](https://github.com/vllm-project/semantic-router/issues/4488) [Bug] Router Memory reflection underestimates CJK size for inject budget and dedup `bug` `accepted` `wg/agentic-context` 💬1
- [#4479](https://github.com/vllm-project/semantic-router/issues/4479) [Feature] Built-in model runtime, Phase 1: serve Decision 2.0 from vllm-sr `enhancement` `accepted` `wg/router-models-inference-runtime` 💬1
- [#4521](https://github.com/vllm-project/semantic-router/issues/4521) [Feature] Qualify sticky tool selection with provider-prefix E2E and operational telemetry (#3347 Phase 5) `enhancement` `needs-acceptance` `wg/mom-routing`
- [#4520](https://github.com/vllm-project/semantic-router/issues/4520) [Feature] Add Redis storage and bounded recovery for sticky tool sets (#3347 Phase 4) `enhancement` `needs-acceptance` `wg/mom-routing`

#### 🔒 Closed Issues
- [#3742](https://github.com/vllm-project/semantic-router/issues/3742) [Enhancement] Improve the field position or orientation while checking the Model Live Status
- [#4400](https://github.com/vllm-project/semantic-router/issues/4400) [Bug] MCP server security settings are stored but never enforced
- [#3392](https://github.com/vllm-project/semantic-router/issues/3392) [Feature] Define sticky tool-set state, storage, and trusted session identity
- [#4345](https://github.com/vllm-project/semantic-router/issues/4345) [Bug] MCP Auto Reconnect setting is dropped on save and never applied
- [#4479](https://github.com/vllm-project/semantic-router/issues/4479) [Feature] Built-in model runtime, Phase 1: serve Decision 2.0 from vllm-sr

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*