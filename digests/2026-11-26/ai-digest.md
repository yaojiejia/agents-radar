# 📡 AI Ecosystem Digest — 2026-11-26

> Generated 2026-11-26 04:43 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 157,111 | 38 | 1 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 136,489 | 10 | 8 | 49 | 2 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 109,142 | 0 | 0 | 3 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,473 | 12 | 3 | 0 | 6 |
| [OpenCode](https://github.com/anomalyco/opencode) | 229,237 | 26 | 13 | 16 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 30,949 | 33 | 11 | 11 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 395,239 | 171 | 105 | 184 | 2 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 266,148 | 25 | 2 | 3 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 97,581 | 29 | 19 | 31 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 39,068 | 21 | 22 | 31 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 136,303 | 15 | 23 | 44 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 188,155 | 10 | 2 | 2 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,927 | 32 | 30 | 107 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 80,267 | 21 | 8 | 209 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,207 | 5 | 15 | 14 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,532 | 11 | 15 | 7 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released versions [rust-v0.174.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.7) and [rust-v0.174.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.6).
- **GitHub Copilot CLI** announced multiple releases with the latest being [v1.0.117-2](https://github.com/github/copilot-cli/releases/tag/v1.0.117-2).
- **Qwen Code** introduced version [v1.0.0-preview.2](https://github.com/QwenLM/qwen-code/releases/tag/v1.0.0-preview.2) as a release.
- **OpenCode** addressed user feedback with merged PRs and reported a hot issue regarding session migration, specifically [#66449](https://github.com/anomalyco/opencode/issues/66449) about a drive deletion incident, which has gathered 7 comments.
- **vLLM** dealt with significant bug reports including [#69839](https://github.com/vllm-project/vllm/issues/69839), which highlights halved compute occupancy on specific GPUs, leading to 3 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 157,111 · **Open issues:** 16,323 · **Last push:** <1h ago

There were no new releases or merged pull requests for Claude Code in the last 24 hours. The team is currently addressing several issues, including a critical bug (#112264) in Code Mode where event nonces are re-minted with a per-process key, causing prompt cache rewrites. Additionally, a bug affecting VS Code (#112381) prevents renaming idle sessions when specific environment variables are set, while another issue (#112366) on macOS counts timeouts during periods when the Mac is asleep. Notably, a new feature request (#112377) seeks to clarify that the CLI command `claude -p` charges the ANTHROPIC_API_KEY even when declined in interactive mode. Overall, it seems to be a routine maintenance period with ongoing focus on resolving these issues.

#### 🐛 New Issues
- [#112264](https://github.com/anthropics/claude-code/issues/112264) [BUG] Code Mode: event nonces are re-minted with a per-process key, so every resume rewrites the prompt cache from the first such tool result `bug` `has repro` `platform:linux` `area:cost` 💬5
- [#112381](https://github.com/anthropics/claude-code/issues/112381) [BUG] [VS Code] Renaming an idle session fails with ENOENT when CLAUDE_CONFIG_DIR is set in claudeCode.environmentVariables `bug` `has repro` `platform:macos` `platform:vscode` 💬1
- [#112380](https://github.com/anthropics/claude-code/issues/112380) Plugin API: let a session.compact hook clear old tool results through cache edits, as microcompact does `enhancement` `platform:windows` `area:hooks` `area:plugins` 💬1
- [#112377](https://github.com/anthropics/claude-code/issues/112377) [FEATURE] Make it explicit that claude -p bills ANTHROPIC_API_KEY, even when the key was declined in interactive mode `bug` `has repro` `platform:linux` `area:cost` 💬1
- [#112366](https://github.com/anthropics/claude-code/issues/112366) [BUG] macOS: timeouts count time the Mac was asleep (MCP idle timeout, hook timeout, Bash limits) `bug` `has repro` `platform:macos` `area:mcp` 💬1
- [#112376](https://github.com/anthropics/claude-code/issues/112376) [MODEL] Fable 5.2 at high effort: five failed attempts at a logo landing page, brief ignored, heavy usage `bug` `platform:linux` `area:model` 💬1
- [#112374](https://github.com/anthropics/claude-code/issues/112374) [Bug] Parallel agents and long sessions cause untested, piled-up changes `bug` `platform:macos` `area:model` 💬1
- [#112372](https://github.com/anthropics/claude-code/issues/112372) Title: Auto-compaction runs silently in Projects beta threads, with no notice t… 💬1
- [#112400](https://github.com/anthropics/claude-code/issues/112400) Sidebar unread (blue dot) indicator persists on a session marked read, survives app restart `bug` `platform:windows` `area:desktop`
- [#112399](https://github.com/anthropics/claude-code/issues/112399) Background sessions inherit the launching terminal's pane env vars (HERDR_PANE_ID, TERM_PROGRAM, …) from the daemon, so terminal integrations attribute every bg session to one pane `bug` `has repro` `platform:macos` `area:agent-view`
- [#112398](https://github.com/anthropics/claude-code/issues/112398) [BUG] Interrupting a turn leaves its background Workflow running unseen; the session then reports it as not run, so a second session duplicates the work `bug` `platform:windows` `area:agents` `area:desktop`
- [#112397](https://github.com/anthropics/claude-code/issues/112397) [GitHub integration] `question` `github-integration`
- [#112396](https://github.com/anthropics/claude-code/issues/112396) [GitHub integration] `question` `github-integration`
- [#112395](https://github.com/anthropics/claude-code/issues/112395) [BUG] Slash-command palette empty in fresh sessions on Windows SSH remotes — populates only after the first message; CLI init event advertises all commands `bug` `platform:windows` `area:skills` `area:desktop`
- [#112394](https://github.com/anthropics/claude-code/issues/112394) [BUG] Desktop app keeps asking for permission despite "Bypass permissions" / "Always allow" `bug` `platform:macos` `regression` `area:permissions`
- [#112393](https://github.com/anthropics/claude-code/issues/112393) Remote Control: reconnecting a desktop session creates a new empty session on mobile and strands the old one `bug` `has repro` `platform:windows`
- [#112392](https://github.com/anthropics/claude-code/issues/112392) Desktop app git status polling passes -c core.fsmonitor=, forcing full tree scans on large repos `bug` `platform:macos` `perf:cpu` `git`
- [#112391](https://github.com/anthropics/claude-code/issues/112391) Safety checks repeatedly stop legitimate computational chemistry work `bug` `area:model`
- [#112387](https://github.com/anthropics/claude-code/issues/112387) [MODEL] Rebuilds components the upstream project already has, does compatibility work before a first release, and redesigns when asked for a small fix `bug` `platform:linux` `area:model`
- [#112390](https://github.com/anthropics/claude-code/issues/112390) Plugin API: say which model request a tool call came from `enhancement` `area:plugins`
- [#112389](https://github.com/anthropics/claude-code/issues/112389) Built-in rm safety check denies a Bash command that contains no `rm` (python heredoc doing `str.replace` over ssh) `bug` `platform:linux` `area:bash` `area:permissions`
- [#112388](https://github.com/anthropics/claude-code/issues/112388) Plugin API: a notice before idle compaction runs, and a setting for when it runs `enhancement` `area:hooks` `area:plugins`
- [#112385](https://github.com/anthropics/claude-code/issues/112385) [Feature Request] Support structured AskUserQuestion callback / pause-and-resume in headless (-p / stream-json) mode `enhancement` `area:agent-sdk` `area:cli`
- [#112386](https://github.com/anthropics/claude-code/issues/112386) [Feature Request] Add a native interactive PTY session tool (session handle, incremental prompt I/O, and EOF handoff) `enhancement` `area:tools` `area:bash`
- [#112384](https://github.com/anthropics/claude-code/issues/112384) [FEATURE] Artifact publish: accept AAC audio (.m4a / audio-only .mp4) `enhancement` `platform:windows` `area:desktop`
- [#112383](https://github.com/anthropics/claude-code/issues/112383) project mode has been shite compared to the old code mode. wasted so much time `bug`
- [#112382](https://github.com/anthropics/claude-code/issues/112382) Plugin API: let a session.compact hook clear old tool results through cache edits, as microcompact does `enhancement` `platform:windows` `area:plugins`
- [#112379](https://github.com/anthropics/claude-code/issues/112379) Desktop app: Full Disk Access granted to Claude.app doesn't apply to Claude Code, and the grant breaks on every update `bug` `platform:macos` `area:permissions` `area:desktop`
- [#112378](https://github.com/anthropics/claude-code/issues/112378) [Fable 5.2] Model refused to fill in a spreadsheet for the company I own and doubted my word `bug` `area:model` `model`
- [#112375](https://github.com/anthropics/claude-code/issues/112375) Bash sandbox refuses writes to $CLAUDE_JOB_DIR/tmp, the directory the background-session prompt names for temporary files `bug` `has repro` `platform:macos` `area:sandbox`
- [#112373](https://github.com/anthropics/claude-code/issues/112373) Feature request: a way to get the same tool prompts regardless of subscription plan (for reproducible evals) `enhancement` `platform:macos` `area:tools` `area:agents`
- [#112371](https://github.com/anthropics/claude-code/issues/112371) Add a CLI way to disable and enable an MCP server without removing it `enhancement` `platform:macos` `area:mcp` `area:cli`
- [#112370](https://github.com/anthropics/claude-code/issues/112370) Desktop Code tab: connectors switched off for Claude Code still list a few tools in new sessions `bug` `platform:macos` `area:mcp` `area:desktop`
- [#112369](https://github.com/anthropics/claude-code/issues/112369) [Bug] Opus 5.5 biology safeguards score the always-loaded skill/plugin listing, flagging unrelated sessions (measured: 9.5% of main sessions) `bug` `platform:macos` `area:model` `area:skills`
- [#112368](https://github.com/anthropics/claude-code/issues/112368) [BUG] Bun segfault (address 0x5) or SIGABRT hours into long interactive sessions: WSL2, Ubuntu 26.04.1 (glibc 2.43), 2.1.331 `bug` `area:core` `platform:wsl` `perf:reliability`
- [#112367](https://github.com/anthropics/claude-code/issues/112367) Desktop app over Remote Control: cannot start sessions or approve prompts from the phone `bug` `platform:windows` `area:permissions` `area:desktop`
- [#112365](https://github.com/anthropics/claude-code/issues/112365) [Desktop] Child session stuck on a permission prompt cannot be answered or stopped while the user is on Remote Control `bug` `has repro` `platform:windows` `area:desktop`
- [#112364](https://github.com/anthropics/claude-code/issues/112364) MCP HTTP connection fails with CERT_HAS_EXPIRED on Windows when the system store holds expired duplicates of a CA `bug` `platform:windows` `area:mcp` `area:networking`

#### 🔒 Closed Issues
- [#112380](https://github.com/anthropics/claude-code/issues/112380) Plugin API: let a session.compact hook clear old tool results through cache edits, as microcompact does

### OpenAI Codex (`openai/codex`)

**Stars:** 136,489 · **Open issues:** 28,660 · **Last push:** <1h ago

On November 26, 2026, the OpenAI Codex ecosystem saw the release of rust-v0.174.0-alpha.7 and rust-v0.174.0-alpha.6, with notable advancements from the previous version. Significant merged pull requests included enhancements to the TUI, such as the addition of mouse controls to hide and restore the sidebar (#64055) and the resolution of image attachments relative to the file search root (#64071). Additionally, fixes were made for Unicode fuzzy matching (#64058) and code fence tracking in the TUI streaming preview (#64067). Among new issues, users reported that the ChatGPT desktop application repeatedly displays "ChatGPT hit a snag" shortly after loading the home screen (#63869), indicating a potential usability concern.

#### 🚀 New Releases
- [rust-v0.174.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.7) 0.174.0-alpha.7
- [rust-v0.174.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.6) 0.174.0-alpha.6

#### ✅ Merged PRs
- [#64071](https://github.com/openai/codex/pull/64071) Resolve TUI image attachments relative to the file search root
- [#64069](https://github.com/openai/codex/pull/64069) Prevent Kitty pet animation flicker in tmux
- [#64067](https://github.com/openai/codex/pull/64067) Fix code fence tracking in the TUI streaming preview
- [#64058](https://github.com/openai/codex/pull/64058) Fix Unicode fuzzy matching and slash popup activation
- [#64055](https://github.com/openai/codex/pull/64055) Add mouse controls to hide and restore the TUI sidebar
- [#64054](https://github.com/openai/codex/pull/64054) Refactor TUI sidebar chooser input handling
- [#64053](https://github.com/openai/codex/pull/64053) Extract TUI sidebar input routing into its own module
- [#64052](https://github.com/openai/codex/pull/64052) Honor per-executor plugin settings in capability discovery
- [#64026](https://github.com/openai/codex/pull/64026) Show status for subagent waits without targets in the TUI
- [#64025](https://github.com/openai/codex/pull/64025) Show Command Center shortcuts that match focus and input
- [#64024](https://github.com/openai/codex/pull/64024) Show TUI shortcut hints for the focused pane
- [#64023](https://github.com/openai/codex/pull/64023) Support numeric MCP elicitation fields in the TUI
- [#64018](https://github.com/openai/codex/pull/64018) Keep interrupt guidance visible during TUI streaming
- [#64016](https://github.com/openai/codex/pull/64016) Bundle the Statsig client key in release builds
- [#64015](https://github.com/openai/codex/pull/64015) Show background command launches and late results in the TUI
- [#64014](https://github.com/openai/codex/pull/64014) Surface session lookup errors in the TUI
- [#64013](https://github.com/openai/codex/pull/64013) Preserve native exit codes in Windows PowerShell hooks
- [#64012](https://github.com/openai/codex/pull/64012) Move environment selection tests into a dedicated file
- [#64011](https://github.com/openai/codex/pull/64011) Clean up abandoned MCP sessions during HTTP recovery
- [#64010](https://github.com/openai/codex/pull/64010) Add inline badges to custom statuslines
- [#64009](https://github.com/openai/codex/pull/64009) Add flexible spacers to custom statusline layouts
- [#64008](https://github.com/openai/codex/pull/64008) Add a directional `box` element for custom status lines
- [#64007](https://github.com/openai/codex/pull/64007) Add `maxLines` to statusline text blocks
- [#64006](https://github.com/openai/codex/pull/64006) Update the Bazel `zstd` dependency to 1.6.0
- [#64005](https://github.com/openai/codex/pull/64005) Batch native scrollback replays during history refill
- [#64004](https://github.com/openai/codex/pull/64004) Update the TUI thread replay snapshot to include composer borders
- [#64003](https://github.com/openai/codex/pull/64003) Allow callers to redact encoded JSON request bodies from logs
- [#64002](https://github.com/openai/codex/pull/64002) Preserve initial turn input when suspension races with startup
- [#64001](https://github.com/openai/codex/pull/64001) Initialize Statsig feature gates across Codex launch modes
- [#64000](https://github.com/openai/codex/pull/64000) Skip `SessionEnd` hooks when child threads shut down
- [#63999](https://github.com/openai/codex/pull/63999) Preserve sidebar clicks when the terminal gains focus
- [#63998](https://github.com/openai/codex/pull/63998) Skip reasoning effort animations during TUI thread replay
- [#63997](https://github.com/openai/codex/pull/63997) Make TUI workspace divider drags more responsive
- [#63996](https://github.com/openai/codex/pull/63996) Fix clipboard notices in the transcript overlay
- [#63995](https://github.com/openai/codex/pull/63995) Notify extensions when Guardian policy changes the approvals reviewer
- [#63994](https://github.com/openai/codex/pull/63994) Avoid cloning thread metadata during rollout read repair
- [#63993](https://github.com/openai/codex/pull/63993) Remove the shadow skill ranking experiment
- [#63992](https://github.com/openai/codex/pull/63992) Suppress Kitty graphics replies on every pet image chunk
- [#63990](https://github.com/openai/codex/pull/63990) Use lightweight settings for app-server thread metadata
- [#63989](https://github.com/openai/codex/pull/63989) Keep TUI tool groups independent when results arrive late
- [#63988](https://github.com/openai/codex/pull/63988) Restart Guardian v3 shadow intake when Auto Review resumes
- [#63987](https://github.com/openai/codex/pull/63987) Harden Guardian v2 hosted messaging tests
- [#63986](https://github.com/openai/codex/pull/63986) Extract shared network policy types from the proxy crate
- [#63949](https://github.com/openai/codex/pull/63949) Add opt-in shadow intake for Guardian V3
- [#63948](https://github.com/openai/codex/pull/63948) Use reset checks for attached Guardian V3 reviews
- [#63942](https://github.com/openai/codex/pull/63942) Remove unused Guardian evidence write acknowledgments
- [#63941](https://github.com/openai/codex/pull/63941) Let Guardian V3 review actions while evidence routing is pending
- [#63940](https://github.com/openai/codex/pull/63940) Keep Guardian V3 verdicts valid across unrelated context updates
- [#63937](https://github.com/openai/codex/pull/63937) Limit the sandbox’s `codex-otel` dependency to Windows

#### 🐛 New Issues
- [#63869](https://github.com/openai/codex/issues/63869) The ChatGPT desktop application repeatedly displays "ChatGPT hit a snag" shortly after loading the home screen. `bug` `app` `dots` 💬5
- [#64040](https://github.com/openai/codex/issues/64040) Granting always allow for commands starting with `something ...` should apply to matching queued permissions requests `bug` `sandbox` `CLI` `subagent` 💬3
- [#63863](https://github.com/openai/codex/issues/63863) [Windows][ChatGPT Work] Local PowerShell fails to start with registry access error (exit 70) `bug` `windows-os` `tool-calls` 💬3
- [#63913](https://github.com/openai/codex/issues/63913) [Windows][26.1120.6357.0] ChatGPT desktop app hangs on every launch after update `bug` `windows-os` `app` 💬3
- [#64073](https://github.com/openai/codex/issues/64073) Windows Codex freezes after attaching 18 OneDrive images — 512 MiB serialization limit and SQLite recovery `bug` `windows-os` `app` `session` 💬2
- [#64074](https://github.com/openai/codex/issues/64074) [ChatGPT Work] Attached `Pasted text.txt` patch files are sometimes not resolved into the active turn `bug` `model-behavior` `context` 💬1
- [#64072](https://github.com/openai/codex/issues/64072) Windows Computer Use intermittently fails to verify Chrome URL `bug` `windows-os` `app` `computer-use` 💬1
- [#64066](https://github.com/openai/codex/issues/64066) Excessive cybersecurity restrictions in GPT-6 affecting legitimate academic security research in Codex `bug` `model-behavior` `app` `safety-check` 💬1
- [#64070](https://github.com/openai/codex/issues/64070) macOS app: Expanded mock carousel navigation covers the diagram and text `bug` `app`
- [#64068](https://github.com/openai/codex/issues/64068) Codex App: scheduled run chat stays untitled when session metadata is not ready `bug` `app` `session` `automations`

#### 🔒 Closed Issues
- [#42421](https://github.com/openai/codex/issues/42421) Severe input lag and dropped keystrokes in Codex TUI over SSH/Mosh while shell input is unaffected
- [#37737](https://github.com/openai/codex/issues/37737) [macOS desktop] Continue in new worktree fails with EISDIR when dirty checkout contains an untracked directory
- [#40835](https://github.com/openai/codex/issues/40835) Bug in Powershell
- [#46881](https://github.com/openai/codex/issues/46881) Codex CLI in Warp jumps to bottom when focus leaves a scrolled pane
- [#58259](https://github.com/openai/codex/issues/58259) CLI TUI stops accepting keyboard input when account/rateLimits/read times out
- [#47371](https://github.com/openai/codex/issues/47371) IDE Extension: Show feedback when “Add to Codex Thread” cannot attach a selection
- [#46391](https://github.com/openai/codex/issues/46391) `@`-attaching a local image silently becomes a plain-text path when the session cwd differs from the process working directory
- [#32196](https://github.com/openai/codex/issues/32196) Terminal hangs every time Codex update is available

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 109,142 · **Open issues:** 748 · **Last push:** 3h ago

On November 26, 2026, Gemini CLI did not release any new versions. However, several critical fixes were merged, including a change in PR #30454 that enforces origin consistency and displays the endpoint origin within the MCP OAuth flow. PR #30441 addressed consent handling to cover all extension content during installation and updates, while PR #30451 improved the inspection of shell wrapper variants for command substitution and policy checks. There were no new issues reported in this period, making it a day primarily focused on stability and minor improvements.

#### ✅ Merged PRs
- [#30454](https://github.com/google-gemini/gemini-cli/pull/30454) fix(core): enforce origin consistency and display endpoint origin in MCP OAuth flow
- [#30441](https://github.com/google-gemini/gemini-cli/pull/30441) fix(cli): cover all extension content in install and update consent
- [#30451](https://github.com/google-gemini/gemini-cli/pull/30451) fix(core): inspect shell wrapper variants for command substitution and policy checks

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,473 · **Open issues:** 2,178 · **Last push:** 2h ago

On November 26, 2026, GitHub Copilot CLI released three new versions: v1.0.117-2, v1.0.117-1, and v1.0.117-0, with key improvements including a fix for built-in searches failing with certain flags and explicit tool exposure for custom agents. Version v1.0.117-1 notably enhanced the /model picker by displaying service notices and warnings for retiring models, while addressing issues with error handling when switching providers. The day also saw the introduction of new issues, with #5571 highlighting an updater failure due to lack of a token for GitHub Enterprise login, indicating potential challenges for users in specific environments.

#### 🚀 New Releases
- [v1.0.117-2](https://github.com/github/copilot-cli/releases/tag/v1.0.117-2) 1.0.117-2
- [v1.0.117-1](https://github.com/github/copilot-cli/releases/tag/v1.0.117-1) 1.0.117-1
- [v1.0.117-0](https://github.com/github/copilot-cli/releases/tag/v1.0.117-0) 1.0.117-0
- [v1.0.116](https://github.com/github/copilot-cli/releases/tag/v1.0.116) 1.0.116
- [v1.0.116-5](https://github.com/github/copilot-cli/releases/tag/v1.0.116-5) 1.0.116-5
- [v1.0.116-4](https://github.com/github/copilot-cli/releases/tag/v1.0.116-4) 1.0.116-4

#### 🐛 New Issues
- [#5571](https://github.com/github/copilot-cli/issues/5571) Updater fails with GHE.com-only login: GitHub credential owner did not provide a token `triage` 💬1
- [#5577](https://github.com/github/copilot-cli/issues/5577) v1.0.115 remote CLI session switch hangs with reported memory leak and an auth-change log storm `triage` 💬1
- [#5582](https://github.com/github/copilot-cli/issues/5582) Unable to install anthropics/claude-plugins-official marketplace: Invalid marketplace.json: plugins.302.source: Invalid input `triage`
- [#5581](https://github.com/github/copilot-cli/issues/5581) Copilot Fusion never routes to a local OpenAI-compatible server (vLLM) configured in providers.json `triage`
- [#5580](https://github.com/github/copilot-cli/issues/5580) Windows sandbox blocks direct TCP connection despite hostname and IP allowlist `triage`
- [#5579](https://github.com/github/copilot-cli/issues/5579) External tool_search_tool override (overridesBuiltInTool: true) is bypassed on the generic-client tool search path `triage`
- [#5578](https://github.com/github/copilot-cli/issues/5578) Plugin skill slash command fails with "Unknown command" when arguments are given `triage`
- [#5576](https://github.com/github/copilot-cli/issues/5576) Option to restrict prompt history navigation to the current session `triage`
- [#5575](https://github.com/github/copilot-cli/issues/5575) Allow managed policy to pre-approve and require extensions from managed plugins (needed for prompt blocking) `triage`
- [#5574](https://github.com/github/copilot-cli/issues/5574) `-p` mode fails if agent succeeds but does not print any conclusion `triage`
- [#5573](https://github.com/github/copilot-cli/issues/5573) Support hold-Space and Ctrl+Space voice dictation in clarification-dialog "Other" and free-text answers `triage`
- [#5572](https://github.com/github/copilot-cli/issues/5572) Voice dictation sometimes transcribes accented English into another language `triage`

#### 🔒 Closed Issues
- [#5298](https://github.com/github/copilot-cli/issues/5298) --model fusion fails with "requires dynamic Auto tiers" unless undocumented DYNAMIC_AUTO_TIERS flag is set (1.0.105)
- [#4640](https://github.com/github/copilot-cli/issues/4640) userPromptTransformed hook is skipped for steering messages
- [#5074](https://github.com/github/copilot-cli/issues/5074) Windows Terminal key-binding offer is preselected "Yes", so the first Enter of a typed prompt rewrites Windows Terminal settings.json

### OpenCode (`anomalyco/opencode`)

**Stars:** 229,237 · **Open issues:** 4,193 · **Last push:** <1h ago

On November 26, 2026, OpenCode released version 2.4.2, incorporating a new system prompt for GPT-6.2 titled "Sol and Astra," and ensuring that the OpenCode Go model picker appears first after connection. Noteworthy merged features include enhancements to GUI themes for accessibility compliance, and the addition of a setting for users to opt in for install updates upon quitting. A significant fix addressed an installation issue with the Windows installer, providing a smoother progress experience. Among the new issues, a particularly concerning report highlights a Windows bash tool command that inadvertently deleted an entire drive root, resulting in substantial data loss.

#### 🚀 New Releases
- [v2.4.2](https://github.com/anomalyco/opencode/releases/tag/v2.4.2) v2.4.2

#### ✅ Merged PRs
- [#66521](https://github.com/anomalyco/opencode/pull/66521) feat(ui): calibrate non-default GUI themes for WCAG 2.2 contrast and elevation
- [#66451](https://github.com/anomalyco/opencode/pull/66451) feat(core): send question, answer, error and permission details in push data
- [#66519](https://github.com/anomalyco/opencode/pull/66519) fix(session-ui): keep the View code button on an open execute call's title line
- [#66498](https://github.com/anomalyco/opencode/pull/66498) refactor(core): gate VCS, Snapshot, Worktree, and Project on Environment
- [#66495](https://github.com/anomalyco/opencode/pull/66495) refactor(core): type Bus commit errors and settle OAuth Deferreds synchronously
- [#66513](https://github.com/anomalyco/opencode/pull/66513) test(app): mock /api/experimental/flag in e2e mock server
- [#66506](https://github.com/anomalyco/opencode/pull/66506) fix(desktop): smooth Windows installer progress bar with live status and throughput
- [#66501](https://github.com/anomalyco/opencode/pull/66501) feat(desktop): add opt-in install updates on quit setting
- [#66469](https://github.com/anomalyco/opencode/pull/66469) feat(server): expose resolved feature flags at /api/experimental/flag
- [#66217](https://github.com/anomalyco/opencode/pull/66217) feat(browser): stream remote browser traffic over multiplexed binary WebSocket
- [#66490](https://github.com/anomalyco/opencode/pull/66490) docs: add Seaglass Alpha Free
- [#66489](https://github.com/anomalyco/opencode/pull/66489) data: treat seaglass-alpha as a stealth model
- [#66278](https://github.com/anomalyco/opencode/pull/66278) feat(core): agent(), llm() and structured JSON Schema output in Code Mode
- [#66485](https://github.com/anomalyco/opencode/pull/66485) refactor(core): decouple Environment from Workspace via WorkspaceConnector
- [#66471](https://github.com/anomalyco/opencode/pull/66471) fix(core): ignore node_modules and .git in configured plugin directory watches
- [#66482](https://github.com/anomalyco/opencode/pull/66482) test(core): add snapshot-deserialized TestDatabase fixture helper

#### 🐛 New Issues
- [#66389](https://github.com/anomalyco/opencode/issues/66389) v1→v2 session migration marks client-executed tools as `executed: true`, wedging every OpenAI Chat session on 2.3.2 `pending close` `triaging` `type/bug` `area/sessions-storage` 💬7
- [#66449](https://github.com/anomalyco/opencode/issues/66449) [Windows] bash tool: "rd /s /q" with escaped quotes deleted an entire drive root (270k files lost) `pending close` `triaging` `type/bug` `area/core` 💬7
- [#66421](https://github.com/anomalyco/opencode/issues/66421) Usage limit appears to reset after restarting OpenCode while continuing the same session `pending close` `triaging` `type/bug` `version/v2` 💬5
- [#66522](https://github.com/anomalyco/opencode/issues/66522) A media part without inline data permanently fails a session (undefined is not an object (evaluating 'e.source.data.length')) `type/bug` `status/repro-simulated` `area/plugins` `version/v2` 💬3
- [#66524](https://github.com/anomalyco/opencode/issues/66524) Desktop app: allow custom sound files for notification events and persist them in shared config `type/feature` `area/desktop` `version/v2` `platform/windows` 💬2
- [#66484](https://github.com/anomalyco/opencode/issues/66484) [FEATURE]: The questions pop-up window is too tall, making it difficult to browse and read the chat content `pending close` `triaging` `type/feature` 💬3
- [#66523](https://github.com/anomalyco/opencode/issues/66523) Bug: OpenCode Desktop Opens Git Repository Root Instead of the Selected Subdirectory `type/bug` `area/desktop` `version/v2` `platform/windows` 💬2
- [#66518](https://github.com/anomalyco/opencode/issues/66518) plan: file edits bypass plan mode via shell/bash tool `type/bug` `area/core` `version/v2` `platform/wsl` 💬2
- [#66452](https://github.com/anomalyco/opencode/issues/66452) tui: click after the pointer enters from a second display repaints half the viewport (DEC 2026 rejection ignored) `triaging` `type/bug` `area/tui` `version/v2` 💬2
- [#66448](https://github.com/anomalyco/opencode/issues/66448) Model limit details stored in forked session, unable to change `triaging` `type/bug` `area/core` `version/v2` 💬2
- [#66442](https://github.com/anomalyco/opencode/issues/66442) app: deleted project directory is never archived and hangs the project picker `reproduced` `type/bug` `area/desktop` `version/v2` 💬2
- [#66491](https://github.com/anomalyco/opencode/issues/66491) [FEATURE]: desktop: bring back the Projects sidebar with "Add project", plus a project row context menu (reveal in file manager, copy path, remove) `type/feature` `area/desktop` `version/v2` `platform/windows` 💬2
- [#66527](https://github.com/anomalyco/opencode/issues/66527) desktop: add a move-to-project action for existing sessions `type/feature` `area/desktop` `version/v2` `platform/windows` 💬1
- [#66526](https://github.com/anomalyco/opencode/issues/66526) run: the agent acts on text the user never wrote, e.g. redoes a rejected .env read with cat `type/feature` `area/core` `version/v2` `platform/linux` 💬1
- [#66450](https://github.com/anomalyco/opencode/issues/66450) [FEATURE]: Push notifications should carry question choices and the final answer 💬1
- [#66520](https://github.com/anomalyco/opencode/issues/66520) mobile: pairing and manual auth fail behind a path prefix `type/bug` `version/v2` `platform/linux` `area/mobile` 💬1
- [#66512](https://github.com/anomalyco/opencode/issues/66512) OpenCode opens the wrong project directory instead of the selected project folder on Windows `type/bug` `area/core` `version/v2` `platform/windows` 💬1
- [#66510](https://github.com/anomalyco/opencode/issues/66510) CSV preview joins records in files with CR-only line endings `type/bug` `status/repro-plausible` `area/desktop` `version/v2` 💬1
- [#66508](https://github.com/anomalyco/opencode/issues/66508) app: assistant Markdown clipped by a 60px timeline row `type/bug` `area/web` `version/v2` `platform/linux` 💬1
- [#66507](https://github.com/anomalyco/opencode/issues/66507) OpenCode hangs indefinitely; built-in Azure and Shell plugins fail to initialize on Windows ; wrong working directory recognition `type/bug` `area/core` `version/v2` `platform/windows` 💬1
- [#66493](https://github.com/anomalyco/opencode/issues/66493) desktop: session isn't counted as working while a user shell command runs 💬1
- [#66488](https://github.com/anomalyco/opencode/issues/66488) tui: question form ignores theme selection background `type/feature` `area/tui` `version/v2` `platform/windows` 💬1
- [#66479](https://github.com/anomalyco/opencode/issues/66479) feat(codemode): reusable saved Code Mode scripts with typed args 💬1
- [#66478](https://github.com/anomalyco/opencode/issues/66478) feat(codemode): durable Code Mode execution (suspend on shutdown, resume on boot) 💬1
- [#66476](https://github.com/anomalyco/opencode/issues/66476) Desktop: the external-link banner asks on every click, and custom schemes never reach LinkHandler `type/feature` `area/desktop` `version/v2` `platform/macos` 💬1
- [#66475](https://github.com/anomalyco/opencode/issues/66475) console: Go vs Go Plus comparison bars on /console/go understate 4x limits due to log scaling `reproduced` `type/bug` `area/web` `inference/go` 💬1

#### 🔒 Closed Issues
- [#66389](https://github.com/anomalyco/opencode/issues/66389) v1→v2 session migration marks client-executed tools as `executed: true`, wedging every OpenAI Chat session on 2.3.2
- [#66449](https://github.com/anomalyco/opencode/issues/66449) [Windows] bash tool: "rd /s /q" with escaped quotes deleted an entire drive root (270k files lost)
- [#50986](https://github.com/anomalyco/opencode/issues/50986) desktop: One Dark Pro workspace messages have low contrast
- [#53567](https://github.com/anomalyco/opencode/issues/53567) desktop: chat text ignores theme color (One Dark renders #f8f9fa instead of #abb2bf)
- [#66523](https://github.com/anomalyco/opencode/issues/66523) Bug: OpenCode Desktop Opens Git Repository Root Instead of the Selected Subdirectory
- [#66518](https://github.com/anomalyco/opencode/issues/66518) plan: file edits bypass plan mode via shell/bash tool
- [#66452](https://github.com/anomalyco/opencode/issues/66452) tui: click after the pointer enters from a second display repaints half the viewport (DEC 2026 rejection ignored)
- [#66448](https://github.com/anomalyco/opencode/issues/66448) Model limit details stored in forked session, unable to change
- [#66527](https://github.com/anomalyco/opencode/issues/66527) desktop: add a move-to-project action for existing sessions
- [#66450](https://github.com/anomalyco/opencode/issues/66450) [FEATURE]: Push notifications should carry question choices and the final answer
- [#60799](https://github.com/anomalyco/opencode/issues/60799) 2.2.5: plugin tool definitions with JSON Schema $ref are all rejected ("evaluating 'a.ref'") and the tools vanish
- [#66512](https://github.com/anomalyco/opencode/issues/66512) OpenCode opens the wrong project directory instead of the selected project folder on Windows
- [#66507](https://github.com/anomalyco/opencode/issues/66507) OpenCode hangs indefinitely; built-in Azure and Shell plugins fail to initialize on Windows ; wrong working directory recognition

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 30,949 · **Open issues:** 2,623 · **Last push:** <1h ago

On November 26, 2026, Qwen Code released v1.0.0-preview.2, introducing support for the Qwen4-Max model, which features a 1M context window and capabilities for image and video input. Additionally, the update includes a reset countdown for when subscription credits run out and an `/upgrade` command to enhance user experience. Among the significant merged pull requests, the team implemented support for shared workspace input history across devices and improved error recovery explanations for repeated-tool-call rejections. Notably, several issues were reported today, including a main CI failure linked to the E2E tests, highlighting ongoing stability challenges.

#### 🚀 New Releases
- [v1.0.0-preview.2](https://github.com/QwenLM/qwen-code/releases/tag/v1.0.0-preview.2) Release v1.0.0-preview.2

#### ✅ Merged PRs
- [#18257](https://github.com/QwenLM/qwen-code/pull/18257) fix(core): append effective permission context before model requests
- [#18393](https://github.com/QwenLM/qwen-code/pull/18393) test(verify-pr): use reaped child PIDs for torn-down worker fixtures
- [#18317](https://github.com/QwenLM/qwen-code/pull/18317) fix(core): explain how to recover from a repeated-tool-call rejection
- [#18389](https://github.com/QwenLM/qwen-code/pull/18389) feat(managed-agent): support embedded external Runtime and Workspace execution
- [#18390](https://github.com/QwenLM/qwen-code/pull/18390) fix(managed-agent): preserve inherited approval modes
- [#18359](https://github.com/QwenLM/qwen-code/pull/18359) fix(web-shell): keep compact Git status badges visible and adapt status bar to width
- [#18353](https://github.com/QwenLM/qwen-code/pull/18353) fix(managed-agent): Restore Workspace registration for Action parking acceptance
- [#18120](https://github.com/QwenLM/qwen-code/pull/18120) feat(serve,web-shell): share workspace input history across devices
- [#18395](https://github.com/QwenLM/qwen-code/pull/18395) test(integration): skip input history suite in Docker
- [#18351](https://github.com/QwenLM/qwen-code/pull/18351) feat(qwen): add the Qwen Code CLI package on the Harness kernel
- [#18377](https://github.com/QwenLM/qwen-code/pull/18377) fix(web-shell): keep private core imports out of published declarations

#### 🐛 New Issues
- [#18342](https://github.com/QwenLM/qwen-code/issues/18342) Main CI failed: E2E Tests — no test identified (latest: 2026-11-26) `status/needs-triage` `scope/ci-cd` 💬10
- [#18350](https://github.com/QwenLM/qwen-code/issues/18350) Main CI failed: Managed Agent gate — HostedWorkflowFaultGatesIT.fg10aDigestIntegrityHoldsAcrossTamperAndFractionalArgsOnMySql (+158 more) `status/needs-triage` `type/bug` 💬5
- [#18356](https://github.com/QwenLM/qwen-code/issues/18356) Main CI failed: Managed Agent gate — WorkspaceCreationStoreTest.uncertainRegistrationResumesSameRootAndOperation (+158 more) `status/needs-triage` `type/bug` 💬3
- [#18402](https://github.com/QwenLM/qwen-code/issues/18402) deflake: packages/cli/src/commands/review/capture-tui.test.ts › capture-tui (real tmux) > dies OF the signal even when it lands during the render window `priority/P1` `type/bug` `scope/testing` `status/ready-for-agent` 💬2
- [#18401](https://github.com/QwenLM/qwen-code/issues/18401) [Bug] `/btw` is queued until the turn ends while a tool call is running, although the tip suggests it for the current work `priority/P2` `type/bug` `category/cli` `scope/commands` 💬2
- [#18379](https://github.com/QwenLM/qwen-code/issues/18379) `qwen -p` without `--approval-mode` reads files outside the workspace that `--approval-mode=default` declines `priority/P1` `type/bug` `category/security` `scope/non-interactive` 💬2
- [#18374](https://github.com/QwenLM/qwen-code/issues/18374) bug(web-shell): Keyboard repeat can cancel a prompt immediately after submission `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#18341](https://github.com/QwenLM/qwen-code/issues/18341) Main CI failed: Qwen Code CI — scripts/tests/install-script.test.js [ scripts/tests/install-script.test.js ] `status/needs-triage` `type/bug` 💬2
- [#18339](https://github.com/QwenLM/qwen-code/issues/18339) feat(extensions): support workspace-level extension installation in .qwen/extensions `status/needs-triage` `type/feature-request` 💬2
- [#18394](https://github.com/QwenLM/qwen-code/issues/18394) ci(web-shell): E2E smoke still fails on shared ARM64 pool from ERR_NETWORK_CHANGED storms (and 22 specs skip bootRetry) `priority/P2` `type/bug` `category/development` `scope/testing` 💬1
- [#18352](https://github.com/QwenLM/qwen-code/issues/18352) Main CI failed: Managed Agent gate — JdbcRuntimeBrokerMySqlIT.repositoriesPreserveTheirContractsOnMySql (+58 more) `status/needs-triage` `type/bug` 💬1
- [#18391](https://github.com/QwenLM/qwen-code/issues/18391) /language ui --global temporarily overrides the workspace UI language `priority/P2` `type/bug` `category/ui` `scope/settings` 💬1
- [#18386](https://github.com/QwenLM/qwen-code/issues/18386) feat(managed-agent): support embedded external Runtime and Workspace execution `priority/P2` `type/feature-request` `category/integration` `need-discussion` 💬1
- [#18382](https://github.com/QwenLM/qwen-code/issues/18382) bug(cli): Ctrl+letter shortcuts dead on non-Latin (Cyrillic) layouts — kitty CSI-u base-layout key is never requested `priority/P2` `type/bug` `scope/keybindings` `scope/linux` 💬1
- [#18369](https://github.com/QwenLM/qwen-code/issues/18369) docs(providers): document Weflayr under OpenAI-compatible providers `priority/P3` `type/documentation` `category/integration` `scope/documentation` 💬1
- [#18360](https://github.com/QwenLM/qwen-code/issues/18360) Web Shell uses the primary model on a locked secondary workspace welcome page 💬1
- [#18348](https://github.com/QwenLM/qwen-code/issues/18348) SDK Java cache write-back can report lock acquisition after queue admission fails `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬1
- [#18403](https://github.com/QwenLM/qwen-code/issues/18403) Release Failed for v0.28.6 on 2026-11-26 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#18396](https://github.com/QwenLM/qwen-code/issues/18396) Main CI failed: SDK Java — JdbcRuntimeBrokerMySqlIT.repositoriesPreserveTheirContractsOnMySql (+20 more) `status/needs-triage` `type/bug`
- [#18397](https://github.com/QwenLM/qwen-code/issues/18397) Daily dependency CVE audit failed `status/needs-triage` `scope/ci-cd`
- [#18392](https://github.com/QwenLM/qwen-code/issues/18392) Release Failed for v0.28.6 on 2026-11-26 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#18387](https://github.com/QwenLM/qwen-code/issues/18387) Main CI failed: SDK Java — HostedWorkflowFaultGatesIT.fg10aDigestIntegrityHoldsAcrossTamperAndFractionalArgsOnMySql (+158 more) `status/needs-triage` `type/bug`
- [#18385](https://github.com/QwenLM/qwen-code/issues/18385) Release Failed for v0.28.3-nightly.20261125.3e5b47163e on 2026-11-25 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#18384](https://github.com/QwenLM/qwen-code/issues/18384) Release Failed for v0.28.3-nightly.20261125.3e5b47163e on 2026-11-25 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#18383](https://github.com/QwenLM/qwen-code/issues/18383) Main CI failed: SDK Java — LocalStorageAliasTest.aSeededFailedBindingStillProtectsTheOtherAlias (+158 more) `status/needs-triage` `type/bug`
- [#18380](https://github.com/QwenLM/qwen-code/issues/18380) Main CI failed: Qwen Code CI — src/serve/server.test.ts > … > delivers the terminal eviction frame to a client that pauses then resumes (+5 more) `status/needs-triage` `type/bug`
- [#18381](https://github.com/QwenLM/qwen-code/issues/18381) Release Failed for v0.28.5 on 2026-11-25 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#18354](https://github.com/QwenLM/qwen-code/issues/18354) Release Failed for v0.28.5 on 2026-11-25 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#18375](https://github.com/QwenLM/qwen-code/issues/18375) Release Failed for N/A on 2026-11-25 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#18372](https://github.com/QwenLM/qwen-code/issues/18372) Release Failed for v0.28.5 on 2026-11-25 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#18368](https://github.com/QwenLM/qwen-code/issues/18368) Release Failed for v0.28.5 on 2026-11-25 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#18361](https://github.com/QwenLM/qwen-code/issues/18361) Release Failed for v0.28.5 on 2026-11-25 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#18357](https://github.com/QwenLM/qwen-code/issues/18357) Qwen Subscription: request rejected — max_completion_tokens [130270] must be greater than thinking_budget [131072] (effort high on qwen4-max) `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#13015](https://github.com/QwenLM/qwen-code/issues/13015) Main CI failed: E2E Tests — interactive/submitted-prompt-provenance.test.ts > … > keeps expanded file content out of submitted_prompt and…
- [#17781](https://github.com/QwenLM/qwen-code/issues/17781) test(serve): cover the deferred shutdown-tracker and clamp-fixture gaps from #17737 review
- [#18298](https://github.com/QwenLM/qwen-code/issues/18298) Web Shell renders an unset boolean setting as OFF, hiding that each surface applies its own default
- [#18295](https://github.com/QwenLM/qwen-code/issues/18295) Main CI failed: Qwen Code CI — src/serve/routes/scheduled-tasks.test.ts > … > flipping recurring→one-shot re-seats createdAt so it fires nex…
- [#18096](https://github.com/QwenLM/qwen-code/issues/18096) Keep compact Git status badges visible in the desktop toolbar
- [#18341](https://github.com/QwenLM/qwen-code/issues/18341) Main CI failed: Qwen Code CI — scripts/tests/install-script.test.js [ scripts/tests/install-script.test.js ]
- [#18354](https://github.com/QwenLM/qwen-code/issues/18354) Release Failed for v0.28.5 on 2026-11-25
- [#18375](https://github.com/QwenLM/qwen-code/issues/18375) Release Failed for N/A on 2026-11-25
- [#18372](https://github.com/QwenLM/qwen-code/issues/18372) Release Failed for v0.28.5 on 2026-11-25
- [#18368](https://github.com/QwenLM/qwen-code/issues/18368) Release Failed for v0.28.5 on 2026-11-25
- [#18361](https://github.com/QwenLM/qwen-code/issues/18361) Release Failed for v0.28.5 on 2026-11-25

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

**Stars:** 395,239 · **Open issues:** 9,218 · **Last push:** <1h ago

OpenClaw released version v2026.11.10, which includes significant updates with a total of 8,309 commits and enhancements. This release focuses on performance and reliability, alongside critical bug fixes, such as reducing memory usage during long conversation refreshes and improving role scope checks. Additionally, several fixes were merged, including addressing issues with session transcripts and ensuring better management of the workboard features. However, several new issues emerged, notably a bug where updating from version 2026.11.8 to 2026.11.10 resulted in the Docker entrypoint doctor hanging, preventing the gateway from listening.

#### 🚀 New Releases
- [v2026.11.10](https://github.com/openclaw/openclaw/releases/tag/v2026.11.10) openclaw 2026.11.10
- [v2026.10.34](https://github.com/openclaw/openclaw/releases/tag/v2026.10.34) openclaw 2026.10.34

#### ✅ Merged PRs
- [#205697](https://github.com/openclaw/openclaw/pull/205697) improve(usage): reduce memory use when refreshing long conversations
- [#205721](https://github.com/openclaw/openclaw/pull/205721) fix: align role scope checks with saved assignments
- [#205720](https://github.com/openclaw/openclaw/pull/205720) fix: remove unused role and workflow exports
- [#205728](https://github.com/openclaw/openclaw/pull/205728) fix: skip unused model rows during credential refresh
- [#205725](https://github.com/openclaw/openclaw/pull/205725) improve(auth): avoid copying shell key lists during provider discovery
- [#205707](https://github.com/openclaw/openclaw/pull/205707) fix(workboard): preserve pasted board names and column text
- [#205704](https://github.com/openclaw/openclaw/pull/205704) fix: preserve the full query when searching session transcripts
- [#205700](https://github.com/openclaw/openclaw/pull/205700) fix(workboard): let bulk label edits continue after a selected card is archived
- [#205717](https://github.com/openclaw/openclaw/pull/205717) chore(ui): refresh control ui locales
- [#205482](https://github.com/openclaw/openclaw/pull/205482) refactor(subagents): retire finished child rows by one rule instead of two handed-off flags
- [#205686](https://github.com/openclaw/openclaw/pull/205686) fix: keep complete meeting searches when pasting or reopening filters
- [#205693](https://github.com/openclaw/openclaw/pull/205693) improve: reduce sidebar work for large automation inventories
- [#204361](https://github.com/openclaw/openclaw/pull/204361) fix(i18n): translate the conversation People label as participants
- [#205703](https://github.com/openclaw/openclaw/pull/205703) fix: keep chat sending when the streaming formatter is unavailable
- [#196196](https://github.com/openclaw/openclaw/pull/196196) fix(markdown): an image whose alt text uses **bold** shows the asterisks
- [#193823](https://github.com/openclaw/openclaw/pull/193823) feat: confine native node worker filesystem access
- [#205401](https://github.com/openclaw/openclaw/pull/205401) fix: show every installed plugin in the Customize sidebar
- [#205699](https://github.com/openclaw/openclaw/pull/205699) fix: align role activation checks with saved assignments
- [#205557](https://github.com/openclaw/openclaw/pull/205557) fix(doctor): keep migration recovery available with stale FTS indexes
- [#205698](https://github.com/openclaw/openclaw/pull/205698) test(gateway): expect a revoked person's Goal retry to be hidden as not found
- [#203137](https://github.com/openclaw/openclaw/pull/203137) fix: keep browser disabled when only hardening relay authentication
- [#203149](https://github.com/openclaw/openclaw/pull/203149) fix: recover Linux stream automations after command-anchor crashes
- [#205381](https://github.com/openclaw/openclaw/pull/205381) fix(whatsapp): identify voice-note captions as text in delivery receipts
- [#205679](https://github.com/openclaw/openclaw/pull/205679) fix(test): unblock restart-auth plugin and worker publication qualification
- [#205691](https://github.com/openclaw/openclaw/pull/205691) chore(ui): refresh control ui locales
- [#201064](https://github.com/openclaw/openclaw/pull/201064) fix: reduce memory during SQLite usage refresh
- [#205266](https://github.com/openclaw/openclaw/pull/205266) fix(plugins): readmit native captures with a dangling host link
- [#205680](https://github.com/openclaw/openclaw/pull/205680) chore(i18n): refresh native locales
- [#204881](https://github.com/openclaw/openclaw/pull/204881) fix: keep daily skill maintenance running when a learned skill has Markdown files outside its support folders
- [#205668](https://github.com/openclaw/openclaw/pull/205668) fix(update): hash SQLite lock bytes as zeros so Windows exclusion cannot fail verification
- [#205655](https://github.com/openclaw/openclaw/pull/205655) fix: keep the resident launcher when reinstalling Gateway
- [#200932](https://github.com/openclaw/openclaw/pull/200932) fix(plugins): clarify dated SDK migration notices
- [#200455](https://github.com/openclaw/openclaw/pull/200455) fix: show the whole reply when you reopen a TUI session
- [#199502](https://github.com/openclaw/openclaw/pull/199502) fix(ui): wait for restored speech players after reload
- [#204301](https://github.com/openclaw/openclaw/pull/204301) feat: let agents post approved GitHub comments
- [#205663](https://github.com/openclaw/openclaw/pull/205663) fix(agents): honor imageMaxDimensionPx at the provider and CLI image handoffs
- [#205664](https://github.com/openclaw/openclaw/pull/205664) chore(ui): refresh control ui locales
- [#205364](https://github.com/openclaw/openclaw/pull/205364) fix(google): preserve playback when Google Live splits audio into parts
- [#205362](https://github.com/openclaw/openclaw/pull/205362) fix: show named characters in exported session messages
- [#205532](https://github.com/openclaw/openclaw/pull/205532) chore(ci): remove four unused exports flagged by dependency checks
- [#205604](https://github.com/openclaw/openclaw/pull/205604) fix(cli): help find disabled automations after a lookup miss
- [#205585](https://github.com/openclaw/openclaw/pull/205585) improve: avoid reloading unchanged Usage reports
- [#205646](https://github.com/openclaw/openclaw/pull/205646) fix(exec): still say a command timed out when its cleanup also fails
- [#204189](https://github.com/openclaw/openclaw/pull/204189) fix: keep Git-installed plugins working after an OpenClaw update
- [#204973](https://github.com/openclaw/openclaw/pull/204973) feat(macos): use the signed-in person's saved session pins
- [#205078](https://github.com/openclaw/openclaw/pull/205078) fix(update): a pnpm update no longer fails after activating when the installed release came from an update
- [#205605](https://github.com/openclaw/openclaw/pull/205605) fix: keep Browser panel previews and addresses current
- [#205359](https://github.com/openclaw/openclaw/pull/205359) fix(signal): preserve trailing spaces in inline code
- [#205574](https://github.com/openclaw/openclaw/pull/205574) refactor: trim low-value test permutations
- [#205613](https://github.com/openclaw/openclaw/pull/205613) fix: keep WebChat approvals from interrupting waiting turns
- [#205648](https://github.com/openclaw/openclaw/pull/205648) chore(ui): refresh control ui locales
- [#205393](https://github.com/openclaw/openclaw/pull/205393) fix: respect raw line endings in Apple code highlighting
- [#205587](https://github.com/openclaw/openclaw/pull/205587) fix: recover saved replies when a session update finishes a chat run
- [#205636](https://github.com/openclaw/openclaw/pull/205636) fix: keep the Settings agent selector still while loading
- [#205358](https://github.com/openclaw/openclaw/pull/205358) fix: show the full daily total in the Usage provider chart
- [#203453](https://github.com/openclaw/openclaw/pull/203453) feat: let administrators manage roles in Settings → Team → Roles
- [#205573](https://github.com/openclaw/openclaw/pull/205573) fix: reload repaired plugins without restarting the Gateway
- [#205621](https://github.com/openclaw/openclaw/pull/205621) fix: show who wrote each message when an agent reads Slack history
- [#205578](https://github.com/openclaw/openclaw/pull/205578) fix: restore only the failed update’s recorded files
- [#205628](https://github.com/openclaw/openclaw/pull/205628) fix(ui): await selected state in forced-colors checks
- [#203797](https://github.com/openclaw/openclaw/pull/203797) fix: align expanded Logbook activities with their titles
- [#205480](https://github.com/openclaw/openclaw/pull/205480) fix: keep the agent switcher available on missing pages
- [#205622](https://github.com/openclaw/openclaw/pull/205622) fix: explain what to do when an automation changes during editing
- [#205631](https://github.com/openclaw/openclaw/pull/205631) chore(ui): refresh control ui locales
- [#205114](https://github.com/openclaw/openclaw/pull/205114) fix(workboard): stop showing PR-loading warnings and apply agent filter before paging on Sessions boards
- [#205592](https://github.com/openclaw/openclaw/pull/205592) fix: recover automations from deleted accounts with configured keys
- [#205620](https://github.com/openclaw/openclaw/pull/205620) chore(ui): refresh control ui locales
- [#205596](https://github.com/openclaw/openclaw/pull/205596) fix: explain how to fix an automation before saving
- [#205612](https://github.com/openclaw/openclaw/pull/205612) fix(ui): align model metadata checks with the stacked layout
- [#205602](https://github.com/openclaw/openclaw/pull/205602) fix: explain how to correct an automation’s next check delay
- [#205555](https://github.com/openclaw/openclaw/pull/205555) fix: stop the terminal UI from re-showing old run errors after a reconnect
- [#205599](https://github.com/openclaw/openclaw/pull/205599) fix: explain when automation run history can’t load
- [#205593](https://github.com/openclaw/openclaw/pull/205593) fix: show an example for unreadable automation dates
- [#205335](https://github.com/openclaw/openclaw/pull/205335) fix: sessions_history no longer reports truncation for stripped usage metadata
- [#205586](https://github.com/openclaw/openclaw/pull/205586) fix: explain why a saved automation can’t start
- [#205583](https://github.com/openclaw/openclaw/pull/205583) fix: explain how to correct an automation webhook URL
- [#203794](https://github.com/openclaw/openclaw/pull/203794) fix: keep dashboard session choices compact and Close within reach
- [#205606](https://github.com/openclaw/openclaw/pull/205606) chore(i18n): refresh native locales
- [#205590](https://github.com/openclaw/openclaw/pull/205590) fix(cli): explain where to find an automation run after a wait timeout
- [#205594](https://github.com/openclaw/openclaw/pull/205594) fix(ui): stabilize Portal centering checks during opening
- [#203771](https://github.com/openclaw/openclaw/pull/203771) fix: keep the filename identifiable beside its Review changes
- [#205352](https://github.com/openclaw/openclaw/pull/205352) fix(message): preserve literal backslashes in poll labels
- [#205562](https://github.com/openclaw/openclaw/pull/205562) fix(ci): remove unused migration exports
- [#199120](https://github.com/openclaw/openclaw/pull/199120) fix(codex): avoid repeated discovery for unavailable plugin apps
- [#203755](https://github.com/openclaw/openclaw/pull/203755) fix: keep long file extensions from crowding the Chat Files list
- [#205588](https://github.com/openclaw/openclaw/pull/205588) chore(ui): refresh control ui locales
- [#204804](https://github.com/openclaw/openclaw/pull/204804) fix(ui): show the author's avatar on pending suggestions, like queued messages
- [#205355](https://github.com/openclaw/openclaw/pull/205355) fix: notify WhatsApp group members mentioned in italics
- [#204250](https://github.com/openclaw/openclaw/pull/204250) fix: let signed-in Gateway users connect personal MCP accounts
- [#205519](https://github.com/openclaw/openclaw/pull/205519) fix: explain how to correct a one-time automation schedule
- [#204953](https://github.com/openclaw/openclaw/pull/204953) feat(android): use the signed-in person's saved session pins
- [#203717](https://github.com/openclaw/openclaw/pull/203717) fix: keep session IDs clear of Running and Queued in Activity
- [#205560](https://github.com/openclaw/openclaw/pull/205560) fix(sessions): keep admitted pin requester and retry outside pin wakes
- [#205518](https://github.com/openclaw/openclaw/pull/205518) fix: explain how to correct CLI automation schedules
- [#205507](https://github.com/openclaw/openclaw/pull/205507) fix: explain how to correct a custom automation schedule
- [#205570](https://github.com/openclaw/openclaw/pull/205570) fix(ci): retire unused PostgreSQL upgrade validation
- [#205540](https://github.com/openclaw/openclaw/pull/205540) fix(ui): preserve one-shot cron times across editor time zone changes
- [#203704](https://github.com/openclaw/openclaw/pull/203704) fix: show the full file path when reading or editing a skill on phones
- [#205533](https://github.com/openclaw/openclaw/pull/205533) fix: fit PDF previews to the available pane width
- [#205530](https://github.com/openclaw/openclaw/pull/205530) test(ui): stop waiting for the retired cron.status startup read
- [#205550](https://github.com/openclaw/openclaw/pull/205550) fix(android): render display math in chats with carriage returns
- [#203703](https://github.com/openclaw/openclaw/pull/203703) fix: show the full session name and kind when expanding a row on phones
- [#205531](https://github.com/openclaw/openclaw/pull/205531) fix(android): keep turn recap tokens readable on narrow screens
- [#203696](https://github.com/openclaw/openclaw/pull/203696) fix: make the whole Model field tappable in Search settings on phones
- [#203690](https://github.com/openclaw/openclaw/pull/203690) fix: keep plugin result names compact beside Install
- [#203686](https://github.com/openclaw/openclaw/pull/203686) fix: keep notification agent choices compact and distinguish matching names
- [#205568](https://github.com/openclaw/openclaw/pull/205568) chore(ui): refresh control ui locales
- [#205559](https://github.com/openclaw/openclaw/pull/205559) test: trim redundant boundary coverage
- [#197064](https://github.com/openclaw/openclaw/pull/197064) fix(android): keep inline code in markdown plain-text extraction
- [#203685](https://github.com/openclaw/openclaw/pull/203685) fix: align project picker icons with single-line titles
- [#205478](https://github.com/openclaw/openclaw/pull/205478) fix: idle Gateway burns CPU scanning folders a shallow memory extraPaths pattern can never match
- [#203682](https://github.com/openclaw/openclaw/pull/203682) fix: keep the chosen runtime visible beside the model
- [#203680](https://github.com/openclaw/openclaw/pull/203680) fix: align Memory import filenames with their statuses
- [#203677](https://github.com/openclaw/openclaw/pull/203677) fix: keep Add server within reach after an MCP name conflict
- [#205534](https://github.com/openclaw/openclaw/pull/205534) fix: show an accepted suggestion as the approver's own message
- [#205545](https://github.com/openclaw/openclaw/pull/205545) fix(macos): show progress when reloading an unavailable dashboard
- [#205553](https://github.com/openclaw/openclaw/pull/205553) fix(test): retain startup RPC observations for Incognito
- [#205552](https://github.com/openclaw/openclaw/pull/205552) chore(ui): fit the Gridlines layout fixes in the Control UI CSS budget
- [#205536](https://github.com/openclaw/openclaw/pull/205536) chore: trim redundant agent test cases
- [#205508](https://github.com/openclaw/openclaw/pull/205508) fix(chat): keep repeated messages when loading older Apple chat history
- [#205488](https://github.com/openclaw/openclaw/pull/205488) fix(test): expect interrupted inline commands after Stop
- [#205174](https://github.com/openclaw/openclaw/pull/205174) fix: let plugins retry model calls after a dropped connection
- [#203700](https://github.com/openclaw/openclaw/pull/203700) fix: keep section help from covering approval settings on phones
- [#204378](https://github.com/openclaw/openclaw/pull/204378) fix: preserve profiles when Linux onboarding cannot install the Gateway service
- [#205546](https://github.com/openclaw/openclaw/pull/205546) chore(ui): refresh control ui locales
- [#205347](https://github.com/openclaw/openclaw/pull/205347) fix(gateway): handle skipped start dates in trailing usage reports
- [#204393](https://github.com/openclaw/openclaw/pull/204393) fix(ui): let Talk replies play after a stalled unlock clip
- [#205165](https://github.com/openclaw/openclaw/pull/205165) refactor(state): migrate in place and remove copy-and-swap
- [#205125](https://github.com/openclaw/openclaw/pull/205125) docs: explain where to find audit evidence
- [#202753](https://github.com/openclaw/openclaw/pull/202753) docs: send the multiplayer "Shared secret" link to gateway auth settings
- [#204436](https://github.com/openclaw/openclaw/pull/204436) fix(sessions): use requester pin order in Gateway tools and web
- [#205475](https://github.com/openclaw/openclaw/pull/205475) fix(test): catch non-fetch media failures
- [#205236](https://github.com/openclaw/openclaw/pull/205236) fix(agents): age usage-ranked newcomers from the agent's first sighting
- [#205481](https://github.com/openclaw/openclaw/pull/205481) fix: recognize Parallels preflight helpers in dead-code checks
- [#205522](https://github.com/openclaw/openclaw/pull/205522) test: trim redundant state and Cron fixture metadata
- [#205498](https://github.com/openclaw/openclaw/pull/205498) fix: stop the session sharing panel from freezing after you change someone's access
- [#205526](https://github.com/openclaw/openclaw/pull/205526) fix(test): align role admission refusals
- [#205345](https://github.com/openclaw/openclaw/pull/205345) fix: discard Matrix poll votes that include an unknown choice
- [#205463](https://github.com/openclaw/openclaw/pull/205463) fix: keep keyboard scrolling after jumping to the latest chat message
- [#204805](https://github.com/openclaw/openclaw/pull/204805) fix: send the desktop and GitHub tools only after a chat first uses them
- [#205509](https://github.com/openclaw/openclaw/pull/205509) improve: reduce Gateway presence broadcast allocations
- [#205476](https://github.com/openclaw/openclaw/pull/205476) fix: let an agent on a dedicated worker wait for its subagents
- [#205494](https://github.com/openclaw/openclaw/pull/205494) fix(chat): restore your reading position after an empty search
- [#205524](https://github.com/openclaw/openclaw/pull/205524) chore(ui): refresh control ui locales
- [#202817](https://github.com/openclaw/openclaw/pull/202817) fix: let plugin counters show a label set at 0 before its first event
- [#197489](https://github.com/openclaw/openclaw/pull/197489) perf(ci): reuse complete runtime for Mac recovery validation
- [#198869](https://github.com/openclaw/openclaw/pull/198869) fix(macos): keep speech authorization callback nonisolated
- [#198871](https://github.com/openclaw/openclaw/pull/198871) fix(cron): report undelivered native-only WebChat results
- [#205384](https://github.com/openclaw/openclaw/pull/205384) fix: keep selected-day usage in the correct timeline
- [#200958](https://github.com/openclaw/openclaw/pull/200958) fix(release): compare changelogs with the previous shipped release
- [#202921](https://github.com/openclaw/openclaw/pull/202921) fix(ui): move automation notices out of the Inbox
- [#154562](https://github.com/openclaw/openclaw/pull/154562) chore(qa): catalog memory dreaming provenance
- [#205515](https://github.com/openclaw/openclaw/pull/205515) improve: reduce Prometheus scrape and memory sample allocations
- [#202807](https://github.com/openclaw/openclaw/pull/202807) feat: let Talk and Discord request GPT-Live-1.1 with ChatGPT sign-in
- [#205483](https://github.com/openclaw/openclaw/pull/205483) refactor(plugins): plugin tools take the turn's owner bit; delete the requester-owner continuation (OA2 PR 6j)
- [#195179](https://github.com/openclaw/openclaw/pull/195179) fix(lobster): avoid skipped skill warnings during discovery
- [#205403](https://github.com/openclaw/openclaw/pull/205403) test: trim redundant Node tests
- [#205503](https://github.com/openclaw/openclaw/pull/205503) fix(test): observe background work history subscriptions
- [#205473](https://github.com/openclaw/openclaw/pull/205473) fix: stop reporting intentionally excluded MCP tools as failures
- [#203809](https://github.com/openclaw/openclaw/pull/203809) fix: keep device status and retry visible in the Portal panel
- [#205499](https://github.com/openclaw/openclaw/pull/205499) fix(test): catch dropped Tavily extract images
- [#203762](https://github.com/openclaw/openclaw/pull/203762) fix: open Knowledge previews in view and return to the selected activity
- [#203738](https://github.com/openclaw/openclaw/pull/203738) fix: stop browser test previews from reporting false plugin activation errors
- [#203472](https://github.com/openclaw/openclaw/pull/203472) feat: manage projects and who they are shared with from the Control UI
- [#205464](https://github.com/openclaw/openclaw/pull/205464) improve: reduce Gateway diagnostics and scheduler allocation
- [#205490](https://github.com/openclaw/openclaw/pull/205490) fix(test): catch missing Lobster timeout aborts
- [#205474](https://github.com/openclaw/openclaw/pull/205474) fix(test): use current warm-boot projection version
- [#203728](https://github.com/openclaw/openclaw/pull/203728) fix: keep wide tables readable in shared transcripts on phones
- [#205471](https://github.com/openclaw/openclaw/pull/205471) fix(test): acknowledge warm-history scope refresh
- [#203812](https://github.com/openclaw/openclaw/pull/203812) fix: line up questions with their answers on the summary page
- [#203595](https://github.com/openclaw/openclaw/pull/203595) fix: fork large conversations without exhausting the database worker
- [#203768](https://github.com/openclaw/openclaw/pull/203768) fix: keep the executable beside Back in the Processes reader
- [#205241](https://github.com/openclaw/openclaw/pull/205241) fix: keep hook mapping templates working with mixed-case header names
- [#203681](https://github.com/openclaw/openclaw/pull/203681) fix: keep Memory search paths compact until the matching file opens
- [#203824](https://github.com/openclaw/openclaw/pull/203824) fix: keep the selected size readable in the focused Desktop viewer
- [#202472](https://github.com/openclaw/openclaw/pull/202472) fix(cron): recover script runs after a Docker sandbox stops
- [#205468](https://github.com/openclaw/openclaw/pull/205468) fix: open Template automation instructions in a dialog
- [#203777](https://github.com/openclaw/openclaw/pull/203777) fix: keep similar subagent names distinct in compact rows
- [#205465](https://github.com/openclaw/openclaw/pull/205465) improve: speed up session catalog refreshes after edits
- [#203736](https://github.com/openclaw/openclaw/pull/203736) fix: make agent tool access easier to read on phones and remove dead preview links
- [#203766](https://github.com/openclaw/openclaw/pull/203766) fix: make Knowledge activity controls easier to tap
- [#205398](https://github.com/openclaw/openclaw/pull/205398) improve: register directory watches faster on Linux
- [#205458](https://github.com/openclaw/openclaw/pull/205458) fix(test): catch incompatible parity captures
- [#205313](https://github.com/openclaw/openclaw/pull/205313) fix(ci): align updater acceptance with the packaged candidate

#### 🐛 New Issues
- [#205441](https://github.com/openclaw/openclaw/issues/205441) Update failure: update (2026.11.6) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬5
- [#205402](https://github.com/openclaw/openclaw/issues/205402) [Bug]: 2026.11.8 -> 2026.11.10 in Docker: entrypoint doctor hangs at "Database engines", gateway never listens `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬5
- [#205501](https://github.com/openclaw/openclaw/issues/205501) deep_research (portable engine): search and model errors are swallowed, replaced by generic gap messages `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#205502](https://github.com/openclaw/openclaw/issues/205502) LLM idle / first-event timeout for cloud models is a hard-coded constant and not configurable `P3` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬4
- [#205202](https://github.com/openclaw/openclaw/issues/205202) [Bug]: 2026.11.9→2026.11.10 update blocked: candidate Doctor legacy-main migration throws 'cannot read legacy session store [redacted-path]' `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#205556](https://github.com/openclaw/openclaw/issues/205556) [Bug]: Android realtime Talk closes immediately (0.5–1.0s) over wired Android Auto `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#205542](https://github.com/openclaw/openclaw/issues/205542) Update failure: candidate-gateway-startup (2026.9.6) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬3
- [#205405](https://github.com/openclaw/openclaw/issues/205405) [Bug]: `openclaw update` to 2026.11.10 always fails `candidate-gateway-startup` when the live Gateway uses `gateway.tailscale.mode: "serve"` (port 443 ownership conflict) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#205223](https://github.com/openclaw/openclaw/issues/205223) media-understanding: audio transcription fails (ProviderHttpError) despite valid credentials and healthy endpoint `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬3
- [#205354](https://github.com/openclaw/openclaw/issues/205354) [Bug]: session corpus is written as .txt but the memory index only reads .md — recallCount stays 0 and the deep phase ranks 0 candidates `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬3
- [#205231](https://github.com/openclaw/openclaw/issues/205231) [Bug]: macOS app shows misleading "credentials need recovery" modal when CLI migrates schema ahead of app `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬3
- [#205162](https://github.com/openclaw/openclaw/issues/205162) [Bug]: Chat-triggered update fails with requester-revoked for a `discord:user:<id>` owner while the Discord plugin migration is pending; Gateway left stopped `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬3
- [#205745](https://github.com/openclaw/openclaw/issues/205745) [Bug]: Mobile Safari chat jumps while scrolling into older history `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#205715](https://github.com/openclaw/openclaw/issues/205715) [Bug]: 2026.11.10 Codex harness fails cron turns: "Codex uncommitted thread cleanup failed | Native history allowance cannot fit its omission notice", loops until Gateway restart `P1` `clawsweeper:source-repro` `impact:session-state` `impact:auth-provider` 💬2
- [#205716](https://github.com/openclaw/openclaw/issues/205716) [Bug]: 2026.11.10 cloud worker exec fails: Code Mode executor "quickjs" is unavailable or disabled on the worker `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#205537](https://github.com/openclaw/openclaw/issues/205537) Memory-index session worker OOMs on session files > ~250 MB (hard 512 MB heap + whole-file read) `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬2
- [#205724](https://github.com/openclaw/openclaw/issues/205724) [Bug]: 2026.11.2 gateway main heap retains every prepared-model-runtime generation (~1 per 6 min) until OOM `clawsweeper:intake:bug` `clawsweeper:intake:needs-repro` 💬2
- [#205695](https://github.com/openclaw/openclaw/issues/205695) [Bug]: Manual upgrade 2026.10.8 → 2026.11.10 cannot finish on an explicit multi-agent config: Doctor falls back to a default config without the systemAgent owner, so the legacy/heartbeat config write is refused (AGENT_SELECTION_REQUIRED → config-lock-refused) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#205267](https://github.com/openclaw/openclaw/issues/205267) [Bug]: An in-process plugin approval that times out reports "no approval route" and drops the plugin's timeoutReason `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬2
- [#205506](https://github.com/openclaw/openclaw/issues/205506) [Bug]: 2026.11.10 upgrade circular deadlock on malformed FTS5 indexes: doctor --fix fails pre-migration snapshot, doctor --session-sqlite recover blocked by pending state DB client-credentials migration `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#205683](https://github.com/openclaw/openclaw/issues/205683) Knowledge plugin: Control UI panel not registered (2026.11.10); tools need allow-list + restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#205642](https://github.com/openclaw/openclaw/issues/205642) Provider prompt-image handoff drops the image size limits, so `imageMaxDimensionPx: 2400` still resized at 1200 and two JPEGs came back larger than their source `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#205581](https://github.com/openclaw/openclaw/issues/205581) [Bug]: Knowledge "Learn from conversations" scribe learns from other agents' conversations `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#205438](https://github.com/openclaw/openclaw/issues/205438) [Bug] decision_evaluate rejects pre-dispatch (unsupported-input) when the selected decisionModel id is not in the provider catalog, with no capability diagnostics `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#205386](https://github.com/openclaw/openclaw/issues/205386) [Bug]: sessions_search without sessionKey fails with "Session search scope changed while reading" on a busy gateway (2026.11.7) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#205625](https://github.com/openclaw/openclaw/issues/205625) [Bug]: Claim of a failed run blocks a ready card; scheduled dispatch skips it silently (no startFailures) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#205619](https://github.com/openclaw/openclaw/issues/205619) [deep-research] Portable engine returns partial/empty for every model; never reaches search stage `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#205566](https://github.com/openclaw/openclaw/issues/205566) [Bug]: Control UI: replies never complete — 360s reply watchdog aborts pre-flight auto-compaction/memory flush on long sessions `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#205577](https://github.com/openclaw/openclaw/issues/205577) [Bug]: First compaction lazily creates the memory index FTS tables, and that schema change permanently invalidates live session delivery leases `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#205302](https://github.com/openclaw/openclaw/issues/205302) [Bug]: tools.allow dropping MCP prompt and resource tools on purpose makes the Codex harness tell the agent "Configured MCP is incomplete" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#205312](https://github.com/openclaw/openclaw/issues/205312) [Bug]: Update summary still lists "Plugin <id> is <old>, but a Gateway restart will load <new>" after the same run updated those plugins `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#205211](https://github.com/openclaw/openclaw/issues/205211) [Bug]: models list shows a synthetic 128k context for models Claude CLI lists but only the hosted catalog describes (Fable 5.2, Opus 4.6/4.7, Sonnet 4.6, Haiku 4.5) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#205430](https://github.com/openclaw/openclaw/issues/205430) [Bug]: 2026.11.3→2026.11.10 update blocked: candidate-doctor session repair throws "Agent database resources are closing" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#205288](https://github.com/openclaw/openclaw/issues/205288) [Bug]: macOS Dock icon opens a new window for a saved secondary Gateway instead of raising an open Primary Gateway window `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#205425](https://github.com/openclaw/openclaw/issues/205425) main: server.openclaw-id-session-invite.test.ts red (sandboxed guest turn wording) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#205360](https://github.com/openclaw/openclaw/issues/205360) [Feature] Cancel-only action for in-flight automation runs (supersedes stale-closed #164910) — verified still absent in 2026.11.6 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#205277](https://github.com/openclaw/openclaw/issues/205277) [Bug]: Codex "workspace is out of credits" limit gets 15 same-model retries before model fallback `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#205258](https://github.com/openclaw/openclaw/issues/205258) [Bug]: Stable 2026.11.10 shipped without the macOS app while its schema migration locks out the 2026.11.9 app `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#205299](https://github.com/openclaw/openclaw/issues/205299) [Bug]: AgentDatabaseAdmissionError "plugin load reentry detected for cache key" wedges one agent's lane until a full gateway stop/start — DB is clean, doctor --fix cannot complete `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#205132](https://github.com/openclaw/openclaw/issues/205132) Control UI: remove redundant Composer control dimensions `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#205182](https://github.com/openclaw/openclaw/issues/205182) memory_index_chunks_fts corrupts during normal runtime; row-count-based reconcile never self-heals it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#205153](https://github.com/openclaw/openclaw/issues/205153) [Bug]: macOS auto-update triggers QuickLook thumbnail storm — ~90 npm docs HTML files each spawn a WebContent.EnhancedSecurity process, load average 200 on 8 cores `bug` `security` `bug:crash` `P1` 💬2
- [#205087](https://github.com/openclaw/openclaw/issues/205087) Gateway can report startup failure after a clean SIGTERM stop during deferred model publication `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#205750](https://github.com/openclaw/openclaw/issues/205750) [Feature]: Persistent tool/provider failures (e.g. broken web_search auth) go silently undetected for weeks `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#205737](https://github.com/openclaw/openclaw/issues/205737) [Bug]: Bun catalog retention test still sees a superseded snapshot `bug` `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#205672](https://github.com/openclaw/openclaw/issues/205672) [Bug]: plugin policy is read by hand in three places, so the doctor scan and /tools notice disagree with what actually loads `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#205727](https://github.com/openclaw/openclaw/issues/205727) session_transcript_archives keeps growing; no supported way to prune rows already published to files `P2` `impact:other` 💬1
- [#205722](https://github.com/openclaw/openclaw/issues/205722) [Bug]: Telegram direct-chat outbound silently skipped — subagent windows re-create primary conversation bindings (currentBindingOnly ambiguity) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#205714](https://github.com/openclaw/openclaw/issues/205714) [Bug]: Running agents lose all tools after a plugin with a before_tool_call hook is reloaded, until their turn ends `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#205705](https://github.com/openclaw/openclaw/issues/205705) [Bug]: A helper woken by its background command is told to reply NO_REPLY, then that reply fails as an empty response and another model reruns the turn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#205708](https://github.com/openclaw/openclaw/issues/205708) [Bug] Feishu outbound route treats p2p chat_id (oc_ prefix) as group — dual session keys, DM replies silently dropped `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#205702](https://github.com/openclaw/openclaw/issues/205702) Control UI marks messages Not sent when the optional Markdown formatter fails to load `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#205706](https://github.com/openclaw/openclaw/issues/205706) Isolated heartbeat sessions: active-memory agent_end hook throws "Plugin invocation scope is closed"; heartbeat_respond rejected `P2` `impact:other` 💬1
- [#205392](https://github.com/openclaw/openclaw/issues/205392) [Bug]: Control UI Customize sidebar 'Installed' truncates at 8 plugins, diverges from Settings inventory, and misses deferred scroll-fade updates `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#205547](https://github.com/openclaw/openclaw/issues/205547) [Bug]: 2026.11.10 update: update-migrated-finalize.worker spins at ~100% CPU for 80+ min re-loading config for the rollback policy check; Gateway stays down, run ends failed/update-recovery-pending `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#205694](https://github.com/openclaw/openclaw/issues/205694) [Bug]: 2026.11.10 cannot start: state upgrade stops at agent-schema with "no such module: vec0" (schema 23, expected 42) `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#205167](https://github.com/openclaw/openclaw/issues/205167) [Bug]: pnpm: `openclaw update` from 2026.11.10 ends with `update-recovery-pending` although the new version is installed and running `P2` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#205684](https://github.com/openclaw/openclaw/issues/205684) [Bug]: Git upgrade reports unprepared cursor-cli Doctor source during automation account migration `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#205617](https://github.com/openclaw/openclaw/issues/205617) Bug: gateway install replaces the resident launcher with a release-slot entry after conversion `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#205638](https://github.com/openclaw/openclaw/issues/205638) [Feature]: Select bounded dictation writing profiles for the active application `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205656](https://github.com/openclaw/openclaw/issues/205656) [Bug]: Control UI Terminal shows Ghostty WASM 404 after offline-shell recovery `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205678](https://github.com/openclaw/openclaw/issues/205678) Update 2026.11.6 → 2026.11.10 fails at candidate-doctor: Agent database resources are closing `bug` `regression` `P2` `impact:ux-friction` 💬1
- [#205667](https://github.com/openclaw/openclaw/issues/205667) [Bug]: knowledge_grep never matches CJK words inside a sentence (FTS5 unicode61 has no CJK segmentation) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#205660](https://github.com/openclaw/openclaw/issues/205660) [Bug]: Cron jobs that target a conversation (session:<key>) end their turn on the first message-tool send; isolated jobs to the same target do not `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205661](https://github.com/openclaw/openclaw/issues/205661) [Bug]: The prepared-model-catalog worker rebuilds continuously and never serves a cache hit `bug` `bug:behavior` `P1` `impact:crash-loop` 💬1
- [#205627](https://github.com/openclaw/openclaw/issues/205627) [Bug]: A command that times out is reported only as a cleanup failure when its cleanup is slow `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#205544](https://github.com/openclaw/openclaw/issues/205544) deep_research: `capabilities` reports portable runtime `direct-provider`, but default requests run on `isolated-agent-runtime` `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205635](https://github.com/openclaw/openclaw/issues/205635) [Feature]: Remove speech disfluencies conservatively without changing dictated meaning `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205653](https://github.com/openclaw/openclaw/issues/205653) [Feature]: Nodecode as an official model provider (Cyber v1) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#205601](https://github.com/openclaw/openclaw/issues/205601) Browser panel shows false Lightpanda errors, stale addresses, and stale frames after tab switches `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#205610](https://github.com/openclaw/openclaw/issues/205610) WebChat /approve completes the command but fails the waiting turn and leaks into model context `P1` `clawsweeper:source-repro` `impact:session-state` `impact:message-loss` 💬1
- [#205582](https://github.com/openclaw/openclaw/issues/205582) Control UI can stop showing a run before recovering its saved reply `clawsweeper:intake:bug` `clawsweeper:intake:needs-environment` 💬1
- [#205632](https://github.com/openclaw/openclaw/issues/205632) Settings agent selector jumps when the agent list arrives `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#205650](https://github.com/openclaw/openclaw/issues/205650) Update failure: post-update-verification (2026.11.7) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#205567](https://github.com/openclaw/openclaw/issues/205567) Plugin reload: pending install timestamps make an unrelated quarantined plugin veto plugins.setEnabled `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205639](https://github.com/openclaw/openclaw/issues/205639) [Feature]: Expand explicitly spoken snippet names into reusable dictation text `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205645](https://github.com/openclaw/openclaw/issues/205645) [Feature]: Review explicit spoken self-corrections in the unsent dictation draft `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205637](https://github.com/openclaw/openclaw/issues/205637) [Feature]: Expose payload-free Prometheus counters for tool argument repair `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205569](https://github.com/openclaw/openclaw/issues/205569) Explicit plugin reload retains startup quarantine after a verified repair at the same install path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#205630](https://github.com/openclaw/openclaw/issues/205630) [Feature]: Add locale-aware punctuation and capitalization to intelligent dictation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205634](https://github.com/openclaw/openclaw/issues/205634) [Feature]: Render dictated paragraphs and lists with safe destination-aware formatting `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205633](https://github.com/openclaw/openclaw/issues/205633) [Feature]: Add authorized workspace dictionaries on top of personal dictation vocabulary `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205626](https://github.com/openclaw/openclaw/issues/205626) [Bug]: Missing card workspace kills every run with 'root dir not found', reason not recorded on the card `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205624](https://github.com/openclaw/openclaw/issues/205624) [Bug]: Workboard never promotes a parentless todo card to ready, so dispatch never starts it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205479](https://github.com/openclaw/openclaw/issues/205479) [Bug]: Control UI agent switcher is empty after opening an unknown URL `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#205579](https://github.com/openclaw/openclaw/issues/205579) Automations cannot recover from a deleted account using an existing static key `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#205611](https://github.com/openclaw/openclaw/issues/205611) [Bug]: Codex App Server does not inject MEMORY.md automatically `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#205271](https://github.com/openclaw/openclaw/issues/205271) sessions_history reports contentTruncated when only usage metadata was removed `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205597](https://github.com/openclaw/openclaw/issues/205597) [Bug]: claude-cli "allow always" grants die with the per-turn CLI live session; unattended runs stall on native tool approvals `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#205598](https://github.com/openclaw/openclaw/issues/205598) [Feature]: Gemini web_search: mark answers that have zero grounding citations `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205387](https://github.com/openclaw/openclaw/issues/205387) [Bug]: Compaction summarizer injects fabricated verification gates into Open TODOs, overriding explicit user approvals `bug` `P1` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#205563](https://github.com/openclaw/openclaw/issues/205563) [Feature]: Let macOS users show exec approvals in chat without a separate popup `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205565](https://github.com/openclaw/openclaw/issues/205565) [Bug]: Account-bound automations can't fall back at a subscription usage limit, so recurring jobs auto-disable `bug` `bug:behavior` `P2` `impact:auth-provider` 💬1
- [#205527](https://github.com/openclaw/openclaw/issues/205527) [TUI] Persisted run-error notifications re-render as fresh failures after gateway restart/reconnect `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205551](https://github.com/openclaw/openclaw/issues/205551) matrix: startup whoami fetch blocked by SSRF guard despite dangerouslyAllowPrivateNetwork opt-in (generation-prep window) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#205541](https://github.com/openclaw/openclaw/issues/205541) Update failure: unexpected-error (2026.9.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#205539](https://github.com/openclaw/openclaw/issues/205539) CLI plugin-source receipts lost on ported state stores: receipt path opens the store without engine config `P2` `clawsweeper:needs-live-repro` `impact:data-loss` `issue-rating: 🐚 platinum hermit` 💬1
- [#205543](https://github.com/openclaw/openclaw/issues/205543) deep_research (portable): one planning question over 500 characters rejects the whole plan, and the gap does not say why `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205124](https://github.com/openclaw/openclaw/issues/205124) Docs: explain where to find OpenClaw audit evidence `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#205538](https://github.com/openclaw/openclaw/issues/205538) In-port memory rebuild fails: "Runtime config is not prepared. Await captureRuntimeConfigAsyncReader()() first." `P2` `impact:session-state` 💬1
- [#205517](https://github.com/openclaw/openclaw/issues/205517) [Feature]: Opt-in Codex V2 compaction for openai-chatgpt-responses providers behind a Codex-compatible proxy `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205516](https://github.com/openclaw/openclaw/issues/205516) Session SQLite migration recovery report (session-sqlite-1795632691670-65493e1d) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#205504](https://github.com/openclaw/openclaw/issues/205504) [Bug]: sqlite-header-probe.worker.js aborts entire update/backup capture on a single EACCES file inside $OPENCLAW_STATE_DIR/workspace `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205510](https://github.com/openclaw/openclaw/issues/205510) [Feature]: Let realtime phone calls ignore background voices instead of answering them `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#205512](https://github.com/openclaw/openclaw/issues/205512) [Feature]: Check in before a realtime phone call hangs up for silence `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#205505](https://github.com/openclaw/openclaw/issues/205505) [Bug]: Post-failure openclaw triage times out (SIGTERM) on ~10 GiB agent DB, leaking multi-GB copies in ~/.cache/openclaw/ `P2` `impact:other` 💬1
- [#205486](https://github.com/openclaw/openclaw/issues/205486) [Bug]: /reasoning on or stream queues "Reasoning ON - include <think>." into the next turn, and Anthropic refuses it as reasoning_extraction for the rest of the session `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205487](https://github.com/openclaw/openclaw/issues/205487) [Bug]: claude-cli agent turns launch with --setting-sources "", so showThinkingSummaries never applies and Opus 5.5 thinking is always empty even with /reasoning on `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#205489](https://github.com/openclaw/openclaw/issues/205489) Update failure: package-update (2026.10.9) `P2` `impact:ux-friction` 💬1
- [#205485](https://github.com/openclaw/openclaw/issues/205485) [Bug]: Chat-requested update rolls back at post-install Doctor: the requester owner check rejects a retired config key before Doctor migrates it `P1` `maturity:stable` `impact:ux-friction` 💬1
- [#205469](https://github.com/openclaw/openclaw/issues/205469) Docs: add a hosting guide for boxd `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#205423](https://github.com/openclaw/openclaw/issues/205423) Add owner-reviewed recovery for quarantined workspace USER.md `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#205466](https://github.com/openclaw/openclaw/issues/205466) Embedded MCP client lacks elicitation support: Google Workspace MCP servers strip Gmail content and refuse Calendar writes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#205461](https://github.com/openclaw/openclaw/issues/205461) [Bug]: Discord reply delivered by message tool is posted again by isolated finalization `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#205462](https://github.com/openclaw/openclaw/issues/205462) [Bug]: Under Bun, memory-watch polling walks whole trees despite shallow extraPaths pattern (high idle CPU) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205459](https://github.com/openclaw/openclaw/issues/205459) [Bug]: Queued coordination input expiry gives no way to reconcile the target task's outcome `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#205460](https://github.com/openclaw/openclaw/issues/205460) [Bug]: Sandbox-masked Claude executable reported as absent `P3` 💬1
- [#205457](https://github.com/openclaw/openclaw/issues/205457) Control UI microphone does not respond in iPhone Home Screen web app `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#205456](https://github.com/openclaw/openclaw/issues/205456) [Bug]: : How to re-trust MEMORY.md / USER.md after memory provenance marks them untrusted (2026.11.10) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#205455](https://github.com/openclaw/openclaw/issues/205455) Update failure: database-schema-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#205454](https://github.com/openclaw/openclaw/issues/205454) [Feature]: Manual drag ordering for sessions inside custom groups (regression from pre-2026.10.10 sidebar) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205450](https://github.com/openclaw/openclaw/issues/205450) [Bug]: Fix for #189908 (Doctor skips codex-runtime automations) is on main but missing from v2026.11.8 and v2026.11.9; scheduled agent jobs are refused after upgrade `P2` `impact:auth-provider` 💬1
- [#205444](https://github.com/openclaw/openclaw/issues/205444) [Bug]: Linux service regeneration retains obsolete runtime PATH entries with no supported removal option `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205440](https://github.com/openclaw/openclaw/issues/205440) [Feature]: Make Deep Research’s maximum duration configurable for slower local models `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#205426](https://github.com/openclaw/openclaw/issues/205426) [Bug]: Linux: Doctor can't reclaim a dead gateway-owner state lease without processNamespace, so updates from 2026.9.8 roll back `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205435](https://github.com/openclaw/openclaw/issues/205435) [Bug] typesafe decision provider leaks prepared-generation-lease refs (owner unknown), so plugin reload always fails at drain `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#205427](https://github.com/openclaw/openclaw/issues/205427) [Bug]: Inline Canvas cards go blank after the sandbox iframe reloads `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#205417](https://github.com/openclaw/openclaw/issues/205417) Queued input start refusal: deliver the cause sentence to channels (R-UX2 part 2) `P2` `clawsweeper:source-repro` `impact:message-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#205251](https://github.com/openclaw/openclaw/issues/205251) [Bug]: HiDPI coordinate clicks miss HTML previews in the Files panel `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#205420](https://github.com/openclaw/openclaw/issues/205420) browser: extension profile stuck after failed stop ("lifecycle changed while work was pending (stop requested cleanup failed)"), survives gateway restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#205422](https://github.com/openclaw/openclaw/issues/205422) [Bug]: deep_research tool fails in Discord channel with "This operation requires a current authenticated profile." on single-owner Gateway `P2` `impact:other` 💬1
- [#205413](https://github.com/openclaw/openclaw/issues/205413) Doctor tells operators to replace a Gateway service that intentionally runs from a source checkout `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205410](https://github.com/openclaw/openclaw/issues/205410) [tools] process: bare session slug fails lookup with misleading 'no longer tracked / Gateway restarts' error `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205397](https://github.com/openclaw/openclaw/issues/205397) Update failure: package-update (2026.11.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#205396](https://github.com/openclaw/openclaw/issues/205396) CLI live-session host-memory guard failure is classified as rate_limit, triggering quota fallback/cooldown `bug` `bug:behavior` `P2` `impact:auth-provider` 💬1
- [#205388](https://github.com/openclaw/openclaw/issues/205388) [Bug]: openclaw.mjs and package.json go missing after Windows Server restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#205368](https://github.com/openclaw/openclaw/issues/205368) test(cron): CronService fixtures without occurrence admission fail after #205297 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205372](https://github.com/openclaw/openclaw/issues/205372) [Feature]: Explain pasted errors in Ask OpenClaw `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205371](https://github.com/openclaw/openclaw/issues/205371) [Bug]: doctor asks for skill_workshop in tools.allow while the skill-workshop plugin is disabled `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205369](https://github.com/openclaw/openclaw/issues/205369) Windows: fs.rm*({recursive:true}) in Electron-bundled Node follows junctions and silently deletes files outside the deleted tree (destroys install dir via state-dir migration cleanup) `impact:data-loss` 💬1
- [#205370](https://github.com/openclaw/openclaw/issues/205370) [Bug]: doctor warns ask_user is an unknown tools.allow entry, since its tool check has no session `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205361](https://github.com/openclaw/openclaw/issues/205361) Control UI keeps the previous topic’s title after `/new` in a Telegram DM `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205353](https://github.com/openclaw/openclaw/issues/205353) [Bug]: Ollama embeddings can succeed after silently truncating input `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#205269](https://github.com/openclaw/openclaw/issues/205269) [Bug]: openclaw logs --follow opens a new Gateway WebSocket every poll, so following the log adds one client connected info line per second `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205338](https://github.com/openclaw/openclaw/issues/205338) macOS 2026.11.9 shows credential recovery for valid 2026.11.10 migration metadata `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#205340](https://github.com/openclaw/openclaw/issues/205340) main: gateway protocol predicates.js is stale (build-artifacts red) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#205344](https://github.com/openclaw/openclaw/issues/205344) Update failure: gateway-recovery-verification (2026.11.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#205246](https://github.com/openclaw/openclaw/issues/205246) [Bug]: Feishu `message` send ignores the `filename` override — attachment is delivered under the media path basename `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205314](https://github.com/openclaw/openclaw/issues/205314) [Bug]: Telegram setup fails when botToken is a store SecretRef `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#205292](https://github.com/openclaw/openclaw/issues/205292) [Bug]: In the Codex harness's code mode, an OpenClaw tool's JSON result reaches the script as a string `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205290](https://github.com/openclaw/openclaw/issues/205290) agent-database-startup-verification test fails in CI when the checkpoint completes (16461 > 16461) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205281](https://github.com/openclaw/openclaw/issues/205281) [Bug]: Headed browser: navigating to a PDF opens Chrome's viewer and saves nothing; open never reports downloads `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#205245](https://github.com/openclaw/openclaw/issues/205245) Workboard foreign-key orphans block updates with no supported repair path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#205250](https://github.com/openclaw/openclaw/issues/205250) [Bug]: knowledge plugin ignores agents.defaults.systemAgent on explicit-ownership multi-agent configs (no knowledge_* tools) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205226](https://github.com/openclaw/openclaw/issues/205226) Failed TTS synthesis delivers a silent voice message instead of failing `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#205225](https://github.com/openclaw/openclaw/issues/205225) [[tts:]] directive produces no synthesis attempt and no error `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#205224](https://github.com/openclaw/openclaw/issues/205224) Write tool silently replaces the HTTP Authorization prefix literal with *** in file content `P2` `impact:data-loss` 💬1
- [#205213](https://github.com/openclaw/openclaw/issues/205213) [Bug]: Barnacle keeps `triage: blank-template` on a PR after its body is filled in `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#205212](https://github.com/openclaw/openclaw/issues/205212) Update failure: candidate-doctor (2026.10.7) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#205198](https://github.com/openclaw/openclaw/issues/205198) [Bug]: pnpm update fails at activation: post-swap Doctor ENOENT on retained native admission host link (node_modules/openclaw -> versioned .pnpm path of old release) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205163](https://github.com/openclaw/openclaw/issues/205163) Share existing heap-sampling setup across allocation benchmarks `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#205122](https://github.com/openclaw/openclaw/issues/205122) [Bug]: First click on an agent fallback’s remove button leaves the model configured `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#205186](https://github.com/openclaw/openclaw/issues/205186) [Bug]: Cron job bound to Codex OAuth profile on runtime openclaw intermittently fails 'route requires api-key authentication', self-recovers after ~1h `P2` `impact:auth-provider` 💬1
- [#205098](https://github.com/openclaw/openclaw/issues/205098) [Bug]: Fresh Terminal page leaves the current shell out of the sessions picker `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#205158](https://github.com/openclaw/openclaw/issues/205158) [Bug]: WebChat stranded-final retry selects API-key auth despite Codex pin `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#205157](https://github.com/openclaw/openclaw/issues/205157) Download the Copilot Desktop Appgh repo clone openclaw/openclaw 💬1
- [#205128](https://github.com/openclaw/openclaw/issues/205128) Update failure: gateway-recovery-verification (2026.11.8) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#205127](https://github.com/openclaw/openclaw/issues/205127) [Bug]: 2026.11.7: interrupted-reply recovery emits raw tool-call frames as message text `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#205113](https://github.com/openclaw/openclaw/issues/205113) Telegram: scheduled edits intermittently fail with “Plugin telegram alias authority is no longer active” `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#205112](https://github.com/openclaw/openclaw/issues/205112) Update failure: [redacted-command] (2026.11.7) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#205095](https://github.com/openclaw/openclaw/issues/205095) Docker activation can report SIGTERM exit 143 after Doctor has already reported a final validation error `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1

#### 🔒 Closed Issues
- [#182891](https://github.com/openclaw/openclaw/issues/182891) [Bug]: Prompt cache never reused — `cache read dropped N -> 0` on every request (envelope rewrites, runtimeContextCarrier changes, and unexplained within-turn drops)
- [#177094](https://github.com/openclaw/openclaw/issues/177094) [Bug]: Control UI webchat — system-notice delivery mirror displaces the turn's last answer into collapsed tool steps after restart/reload (transcript intact)
- [#162585](https://github.com/openclaw/openclaw/issues/162585) [2026.9.7][Windows] Plugin source-capture staging re-materializes the plugin's own package into package-0/node_modules/<self> and never converges; large npm trees explode linearly (290 MB -> 612 MB+/24 min) so the gateway never turns healthy
- [#191847](https://github.com/openclaw/openclaw/issues/191847) [Bug]: 2026.10.10 – large session repeatedly kills the 512 MB SQLite worker (ERR_WORKER_OUT_OF_MEMORY); every turn in that session fails with "admission is closed"
- [#163564](https://github.com/openclaw/openclaw/issues/163564) [Bug]: Completed terminal assistant reply can render without Reply/Copy actions
- [#167854](https://github.com/openclaw/openclaw/issues/167854) [Bug]: Home drops session notices once more than 20 sessions have pending activity (20-entry system-event queue)
- [#160522](https://github.com/openclaw/openclaw/issues/160522) prepared-model-catalog worker isolate reaches 1.15 GB despite maxOldGenerationSizeMb: 512
- [#166670](https://github.com/openclaw/openclaw/issues/166670) CI: gateway-methods hits host OOM on Bun 667c; Node control passes
- [#190536](https://github.com/openclaw/openclaw/issues/190536) Plugin compatibility notices cite retirement dates that have already passed, and still say "keeps working until then"
- [#169815](https://github.com/openclaw/openclaw/issues/169815) [Feature]: Feishu distinguish queued messages from confirmed run inclusion
- [#188305](https://github.com/openclaw/openclaw/issues/188305) [Bug]: claude-cli runs never release configured MCP servers on 2026.10.7–10.9, so mcp.sessionIdleTtlMs never evicts them
- [#205441](https://github.com/openclaw/openclaw/issues/205441) Update failure: update (2026.11.6)
- [#149894](https://github.com/openclaw/openclaw/issues/149894) WebUI: Home can end at the bottom after a staged older-history prepend
- [#191273](https://github.com/openclaw/openclaw/issues/191273) [Bug]: beta.5 SQLite worker OOM during session actor reads; bounded hydration fix absent from release
- [#142559](https://github.com/openclaw/openclaw/issues/142559) [Windows] Gateway logs 'http server listening' but never binds port (ECONNREFUSED)
- [#205502](https://github.com/openclaw/openclaw/issues/205502) LLM idle / first-event timeout for cloud models is a hard-coded constant and not configurable
- [#151970](https://github.com/openclaw/openclaw/issues/151970) [Bug]: Chat loses reading position when clearing or closing a search with no matches
- [#196061](https://github.com/openclaw/openclaw/issues/196061) [Bug]: Running Codex tasks stall after silent pauses; follow-ups and helper results are rejected
- [#185610](https://github.com/openclaw/openclaw/issues/185610) [Bug]: SQLite worker OOM wedges ingress with idle leases; main fix absent from published releases
- [#193824](https://github.com/openclaw/openclaw/issues/193824) [Bug]: macOS app: reopening a closed Dashboard (remote Gateway) starts a new WebKit process and leaves the old one resident
- [#204737](https://github.com/openclaw/openclaw/issues/204737) [Bug]: Skill Workshop daily maintenance aborts before its skip handler on learned skills with root-level support files (diet, undo and restore all fail)
- [#180815](https://github.com/openclaw/openclaw/issues/180815) [Bug]: Control UI chat: keyboard users must Tab through every transcript control before reaching the composer
- [#138113](https://github.com/openclaw/openclaw/issues/138113) [Feature]: Support per-requester MCP OAuth from authenticated Control UI profiles
- [#205556](https://github.com/openclaw/openclaw/issues/205556) [Bug]: Android realtime Talk closes immediately (0.5–1.0s) over wired Android Auto
- [#197806](https://github.com/openclaw/openclaw/issues/197806) macOS app crashes (SIGTRAP) when starting Talk Mode — Swift concurrency assertion in PermissionManager.ensureSpeechRecognition
- [#203842](https://github.com/openclaw/openclaw/issues/203842) [Bug]: Downloads always cancel when the Gateway runs in WSL2 and attaches to Windows Chrome over CDP (Linux downloadPath)
- [#195857](https://github.com/openclaw/openclaw/issues/195857) [Bug]: Control UI still repeats claude-cli narration at the top of MEDIA image replies on main (after #188333)
- [#205724](https://github.com/openclaw/openclaw/issues/205724) [Bug]: 2026.11.2 gateway main heap retains every prepared-model-runtime generation (~1 per 6 min) until OOM
- [#205506](https://github.com/openclaw/openclaw/issues/205506) [Bug]: 2026.11.10 upgrade circular deadlock on malformed FTS5 indexes: doctor --fix fails pre-migration snapshot, doctor --session-sqlite recover blocked by pending state DB client-credentials migration
- [#200408](https://github.com/openclaw/openclaw/issues/200408) [Bug]: TUI shows replies over 8,000 characters cut with "...(truncated)..." after reopening a session
- [#205642](https://github.com/openclaw/openclaw/issues/205642) Provider prompt-image handoff drops the image size limits, so `imageMaxDimensionPx: 2400` still resized at 1200 and two JPEGs came back larger than their source
- [#126242](https://github.com/openclaw/openclaw/issues/126242) [Bug]: expanding the last chat code block loses the visual scroll anchor
- [#129149](https://github.com/openclaw/openclaw/issues/129149) Sidebar owner filter resets after Control UI reload
- [#205302](https://github.com/openclaw/openclaw/issues/205302) [Bug]: tools.allow dropping MCP prompt and resource tools on purpose makes the Codex harness tell the agent "Configured MCP is incomplete"
- [#152831](https://github.com/openclaw/openclaw/issues/152831) WebUI: expanded activity groups lose their reading position after virtual remount
- [#205211](https://github.com/openclaw/openclaw/issues/205211) [Bug]: models list shows a synthetic 128k context for models Claude CLI lists but only the hosted catalog describes (Fable 5.2, Opus 4.6/4.7, Sonnet 4.6, Haiku 4.5)
- [#200590](https://github.com/openclaw/openclaw/issues/200590) [Bug]: service-child-group-anchor never drains on kernels without CONFIG_PROC_CHILDREN (Synology) — leaked anchors + zombie esbuild until OOM
- [#189517](https://github.com/openclaw/openclaw/issues/189517) [Bug]: Search boxes outside Sessions and Files still miss Greek sigma variants
- [#205277](https://github.com/openclaw/openclaw/issues/205277) [Bug]: Codex "workspace is out of credits" limit gets 15 same-model retries before model fallback
- [#205132](https://github.com/openclaw/openclaw/issues/205132) Control UI: remove redundant Composer control dimensions
- [#204826](https://github.com/openclaw/openclaw/issues/204826) Control UI: share the fixed runtime-config projection read contract
- [#205727](https://github.com/openclaw/openclaw/issues/205727) session_transcript_archives keeps growing; no supported way to prune rows already published to files
- [#204347](https://github.com/openclaw/openclaw/issues/204347) [Bug]: [Control UI] zh-CN translation: "People" shown as 人力资源 (Human Resources) in session details
- [#205702](https://github.com/openclaw/openclaw/issues/205702) Control UI marks messages Not sent when the optional Markdown formatter fails to load
- [#196194](https://github.com/openclaw/openclaw/issues/196194) Markdown image alt text shows literal Markdown, e.g. "![**Bold** chart](…)" renders as "**Bold** chart"
- [#205706](https://github.com/openclaw/openclaw/issues/205706) Isolated heartbeat sessions: active-memory agent_end hook throws "Plugin invocation scope is closed"; heartbeat_respond rejected
- [#205392](https://github.com/openclaw/openclaw/issues/205392) [Bug]: Control UI Customize sidebar 'Installed' truncates at 8 plugins, diverges from Settings inventory, and misses deferred scroll-fade updates
- [#202959](https://github.com/openclaw/openclaw/issues/202959) doctor --fix enables the bundled browser plugin and widens plugins.allow when only browser.extensionRelay.allowLegacyAuth: false is configured
- [#202900](https://github.com/openclaw/openclaw/issues/202900) [Bug]: A stream automation whose relay dies is marked restart-exhausted at once, and re-enabling it fails until a Gateway restart
- [#205617](https://github.com/openclaw/openclaw/issues/205617) Bug: gateway install replaces the resident launcher with a release-slot entry after conversion
- [#205678](https://github.com/openclaw/openclaw/issues/205678) Update 2026.11.6 → 2026.11.10 fails at candidate-doctor: Agent database resources are closing
- [#204268](https://github.com/openclaw/openclaw/issues/204268) [Feature] Add issue and PR comments to `github_publish`
- [#205661](https://github.com/openclaw/openclaw/issues/205661) [Bug]: The prepared-model-catalog worker rebuilds continuously and never serves a cache hit
- [#205627](https://github.com/openclaw/openclaw/issues/205627) [Bug]: A command that times out is reported only as a cleanup failure when its cleanup is slow
- [#204156](https://github.com/openclaw/openclaw/issues/204156) [Bug]: Managed Git plugins stay linked to the previous OpenClaw release after a host update
- [#205601](https://github.com/openclaw/openclaw/issues/205601) Browser panel shows false Lightpanda errors, stale addresses, and stale frames after tab switches
- [#205610](https://github.com/openclaw/openclaw/issues/205610) WebChat /approve completes the command but fails the waiting turn and leaks into model context
- [#205582](https://github.com/openclaw/openclaw/issues/205582) Control UI can stop showing a run before recovering its saved reply
- [#205632](https://github.com/openclaw/openclaw/issues/205632) Settings agent selector jumps when the agent list arrives
- [#205569](https://github.com/openclaw/openclaw/issues/205569) Explicit plugin reload retains startup quarantine after a verified repair at the same install path
- [#205479](https://github.com/openclaw/openclaw/issues/205479) [Bug]: Control UI agent switcher is empty after opening an unknown URL
- [#205579](https://github.com/openclaw/openclaw/issues/205579) Automations cannot recover from a deleted account using an existing static key
- [#205271](https://github.com/openclaw/openclaw/issues/205271) sessions_history reports contentTruncated when only usage metadata was removed
- [#196069](https://github.com/openclaw/openclaw/issues/196069) fix(android): wrap chat turn recap duration and token summary on compact widths
- [#196086](https://github.com/openclaw/openclaw/issues/196086) fix(android): preserve inline code text in markdown plain-text extraction
- [#205565](https://github.com/openclaw/openclaw/issues/205565) [Bug]: Account-bound automations can't fall back at a subscription usage limit, so recurring jobs auto-disable
- [#205527](https://github.com/openclaw/openclaw/issues/205527) [TUI] Persisted run-error notifications re-render as fresh failures after gateway restart/reconnect
- [#204390](https://github.com/openclaw/openclaw/issues/204390) Browser split Talk can go silent when the audio unlock clip stalls
- [#205124](https://github.com/openclaw/openclaw/issues/205124) Docs: explain where to find OpenClaw audit evidence
- [#205538](https://github.com/openclaw/openclaw/issues/205538) In-port memory rebuild fails: "Runtime config is not prepared. Await captureRuntimeConfigAsyncReader()() first."
- [#202749](https://github.com/openclaw/openclaw/issues/202749) [Docs Bug]: Multiplayer "Shared secret" link opens the model provider auth page
- [#150147](https://github.com/openclaw/openclaw/issues/150147) WebUI: Scroll to latest loses transcript keyboard focus
- [#202816](https://github.com/openclaw/openclaw/issues/202816) [Bug]: Plugin counter inc(labels, 0) is dropped, so a label set cannot be exported at 0 before its first event
- [#202913](https://github.com/openclaw/openclaw/issues/202913) Move automation notices out of the Control UI Inbox
- [#202806](https://github.com/openclaw/openclaw/issues/202806) [Feature]: Let Talk and Discord request GPT-Live-1.1 with ChatGPT sign-in
- [#205505](https://github.com/openclaw/openclaw/issues/205505) [Bug]: Post-failure openclaw triage times out (SIGTERM) on ~10 GiB agent DB, leaking multi-GB copies in ~/.cache/openclaw/
- [#205489](https://github.com/openclaw/openclaw/issues/205489) Update failure: package-update (2026.10.9)
- [#203591](https://github.com/openclaw/openclaw/issues/203591) Forking a large conversation exhausts the SQLite worker before native commit receipt
- [#205485](https://github.com/openclaw/openclaw/issues/205485) [Bug]: Chat-requested update rolls back at post-install Doctor: the requester owner check rejects a retired config key before Doctor migrates it
- [#204991](https://github.com/openclaw/openclaw/issues/204991) hooks: mapping templates drop mixed-case header references like {{headers.X-GitHub-Event}}
- [#202460](https://github.com/openclaw/openclaw/issues/202460) [Bug]: Cached cron script runtime keeps executing against a stopped Docker sandbox container
- [#205460](https://github.com/openclaw/openclaw/issues/205460) [Bug]: Sandbox-masked Claude executable reported as absent
- [#205450](https://github.com/openclaw/openclaw/issues/205450) [Bug]: Fix for #189908 (Doctor skips codex-runtime automations) is on main but missing from v2026.11.8 and v2026.11.9; scheduled agent jobs are refused after upgrade
- [#205251](https://github.com/openclaw/openclaw/issues/205251) [Bug]: HiDPI coordinate clicks miss HTML previews in the Files panel
- [#205422](https://github.com/openclaw/openclaw/issues/205422) [Bug]: deep_research tool fails in Discord channel with "This operation requires a current authenticated profile." on single-owner Gateway
- [#199440](https://github.com/openclaw/openclaw/issues/199440) [Bug]: Outbound chunking re-segments the entire remaining text per chunk (quadratic CPU and multi-GB RSS)
- [#205396](https://github.com/openclaw/openclaw/issues/205396) CLI live-session host-memory guard failure is classified as rate_limit, triggering quota fallback/cooldown
- [#205368](https://github.com/openclaw/openclaw/issues/205368) test(cron): CronService fixtures without occurrence admission fail after #205297
- [#205269](https://github.com/openclaw/openclaw/issues/205269) [Bug]: openclaw logs --follow opens a new Gateway WebSocket every poll, so following the log adds one client connected info line per second
- [#205246](https://github.com/openclaw/openclaw/issues/205246) [Bug]: Feishu `message` send ignores the `filename` override — attachment is delivered under the media path basename
- [#204001](https://github.com/openclaw/openclaw/issues/204001) [Bug]: Model fallback to a Codex candidate after an embedded candidate fails: "A captured user-turn model prompt projection cannot be changed"
- [#205224](https://github.com/openclaw/openclaw/issues/205224) Write tool silently replaces the HTTP Authorization prefix literal with *** in file content
- [#204880](https://github.com/openclaw/openclaw/issues/204880) feat: allow rollbacks across compatible database schema changes
- [#205163](https://github.com/openclaw/openclaw/issues/205163) Share existing heap-sampling setup across allocation benchmarks
- [#205186](https://github.com/openclaw/openclaw/issues/205186) [Bug]: Cron job bound to Codex OAuth profile on runtime openclaw intermittently fails 'route requires api-key authentication', self-recovers after ~1h
- [#204573](https://github.com/openclaw/openclaw/issues/204573) Qualify native Node compile-cache diagnostics before benchmark use
- [#205077](https://github.com/openclaw/openclaw/issues/205077) [Bug]: Simultaneous first visits with a Gateway token return one tab to sign-in
- [#205055](https://github.com/openclaw/openclaw/issues/205055) [Bug]: Live plugin side questions merge into the parent request on Chat Completions
- [#205063](https://github.com/openclaw/openclaw/issues/205063) [Bug]: Caps Lock makes chat composer Redo undo again after selecting a person
- [#205021](https://github.com/openclaw/openclaw/issues/205021) [Bug]: Reordering AGENTS.md sections never reaches existing chats
- [#205098](https://github.com/openclaw/openclaw/issues/205098) [Bug]: Fresh Terminal page leaves the current shell out of the sessions picker
- [#205157](https://github.com/openclaw/openclaw/issues/205157) Download the Copilot Desktop Appgh repo clone openclaw/openclaw
- [#202355](https://github.com/openclaw/openclaw/issues/202355) Skills mutation test can time out before its lazy detail dialog loads
- [#204884](https://github.com/openclaw/openclaw/issues/204884) `agent exec --json` reports `costUsd: 0` for a custom model with no configured price
- [#204923](https://github.com/openclaw/openclaw/issues/204923) [Bug]: Sidebar New session stays disabled after the Gateway connects

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 266,148 · **Open issues:** 54,623 · **Last push:** <1h ago

On November 25, 2026, Hermes Agent released version canary.20261125T064800Z-v0.23.4, incorporating a variety of improvements and fixes for macOS, including enhancements to git command handling. Significant merged pull requests addressed CI test compatibility on Windows arm64 and improved delegation text handling in the model. Among the newly reported issues, a notable bug was raised (#160067), highlighting that custom email subjects are being ignored and incorrectly placed in the message body. Additionally, performance concerns were flagged regarding idle gateway processes, which are consuming high CPU and memory resources on busy installations.

#### 🚀 New Releases
- [canary.20261125T064800Z-v0.23.4](https://github.com/nousresearch/hermes-agent/releases/tag/canary.20261125T064800Z-v0.23.4) Hermes Agent canary canary.20261125T064800Z-v0.23.4

#### ✅ Merged PRs
- [#159146](https://github.com/NousResearch/hermes-agent/pull/159146) fix(tests): make tests/ci and tests/scripts pass on Windows arm64 (salvage #146657)
- [#159834](https://github.com/NousResearch/hermes-agent/pull/159834) fix(platform): guard macOS /usr/bin/git CLT stub across runtime and doctor callers
- [#160256](https://github.com/NousResearch/hermes-agent/pull/160256) fix(delegation): correct the delegate_task text the model reads

#### 🐛 New Issues
- [#160067](https://github.com/NousResearch/hermes-agent/issues/160067) [Bug]: Custom email subject is ignored and placed in the message body instead `type/bug` `comp/gateway` `comp/tools` `comp/plugins` 💬2
- [#160281](https://github.com/NousResearch/hermes-agent/issues/160281) Idle gateway burns ~50-70% of a core and reads ~110 MB/s: change-watcher, /board diagnostics and /api/status lineage rebuild on a busy multi-profile install `type/perf` `comp/gateway` `P2` `area/sessions` 💬2
- [#160276](https://github.com/NousResearch/hermes-agent/issues/160276) [Bug]: Telegram: a buffered message is lost when handle_message raises anything but a cancel before accepting it `type/bug` `comp/plugins` `platform/telegram` `P2` 💬1
- [#160002](https://github.com/NousResearch/hermes-agent/issues/160002) hermes backup: a killed run leaves its hidden .partial archive and staged tmp*.db in backups/ forever `type/bug` `comp/cli` `tool/file` `P2` 💬1
- [#160293](https://github.com/NousResearch/hermes-agent/issues/160293) [Bug]: Windows: gateway ensure refuses a home whose Scheduled Task still runs the pre-wscript .cmd launcher (service_identity_unverified, "not wscript.exe") `type/bug` `comp/cli` `comp/gateway` `P3` 💬1
- [#160284](https://github.com/NousResearch/hermes-agent/issues/160284) [Feature]: Save passive Kanban notifications in the original Desktop/Web App Chat `type/feature` `comp/gateway` `P3` `area/webapp`
- [#160278](https://github.com/NousResearch/hermes-agent/issues/160278) [Withdrawn] Mobile app keeps showing a session as running after the turn completed `type/bug` `P2` `area/sessions` `comp/tui-gateway` 💬1
- [#160271](https://github.com/NousResearch/hermes-agent/issues/160271) Repo-inside-home dev installs: home_io_guard refuses PM's payload-marker probe and fails 72 tests in tests/pm (manifest.json) `type/bug` `tool/file` `P2` 💬1
- [#160311](https://github.com/NousResearch/hermes-agent/issues/160311) [Bug] Windows: _find_bash() prefers WindowsApps\bash.EXE App Execution Alias over real Git Bash — all terminal calls die with WinError 1920 (bootstrap deadlock) `type/bug` `comp/tools` `tool/terminal` `backend/local`
- [#160310](https://github.com/NousResearch/hermes-agent/issues/160310) Support reading multiple config keys as JSON in one CLI call `type/feature` `comp/cli` `area/config` `P3`
- [#160309](https://github.com/NousResearch/hermes-agent/issues/160309) [Bug]: Desktop transcript read 404s for a non-default profile session (request omits ?profile=) `type/bug` `comp/cli` `P2` `comp/desktop`
- [#160308](https://github.com/NousResearch/hermes-agent/issues/160308) [Bug]: ignore_other_user_mentions: true does not filter Slack subteam/group mentions (<!subteam^...>) `type/bug` `comp/gateway` `platform/slack` `P3`
- [#160304](https://github.com/NousResearch/hermes-agent/issues/160304) [Bug]: Concurrent callers sharing an in-flight admission waiter cause duplicate final delivery (text + MEDIA attachments) `type/bug` `comp/gateway` `platform/slack` `P2`
- [#160307](https://github.com/NousResearch/hermes-agent/issues/160307) probe-do-not-merge `P3`
- [#160303](https://github.com/NousResearch/hermes-agent/issues/160303) [Feature]: Desktop sidebar: group Scheduled Jobs into collapsible Daily / Weekly / Other categories `type/feature` `P3` `comp/desktop`
- [#160302](https://github.com/NousResearch/hermes-agent/issues/160302) feat(discord): no supported way to register a custom native slash command `type/feature` `comp/plugins` `platform/discord` `area/config`
- [#160292](https://github.com/NousResearch/hermes-agent/issues/160292) [Bug]: Desktop skills/plugins picker iframe 404s — /docs/skills?embed=picker is gone after the marketplace move `type/bug` `tool/web` `tool/skills` `P2`
- [#160289](https://github.com/NousResearch/hermes-agent/issues/160289) session.interrupt compute-host recovery can cancel and purge a successor turn (side effects run before the stale-turn check) `type/bug` `P3` `area/sessions` `comp/tui-gateway`
- [#160277](https://github.com/NousResearch/hermes-agent/issues/160277) [Bug]: Transcript page reads of a compressed session sort the whole lineage through a SQLite temp file (170 MB written per 120-row page) `type/perf` `P2` `area/sessions` `area/compression`
- [#160272](https://github.com/NousResearch/hermes-agent/issues/160272) Desktop (Microsoft Store) build v0.23.4 ships a non-relocatable venv - "install out of sync (venv: out of sync with uv.lock)" on every command `type/bug` `P2` `comp/desktop` `area/install-update`
- [#160270](https://github.com/NousResearch/hermes-agent/issues/160270) [Bug]: QQBot adapter permanently gives up after lid-closed sleep — each dark wake burns reconnect attempts and the backoff never resets `type/bug` `comp/plugins` `platform/qqbot` `P2`
- [#160266](https://github.com/NousResearch/hermes-agent/issues/160266) [Feature]: Desktop — agent-proposed reply drafts: Tab to accept, edit, Enter to send `type/feature` `P3` `comp/desktop` `desktop/chat`
- [#160264](https://github.com/NousResearch/hermes-agent/issues/160264) Gateway boot: failed launch-authority build calls registry.remove() on the launch slot, masking the real error `type/bug` `comp/gateway` `P2` `area/sessions`
- [#160261](https://github.com/NousResearch/hermes-agent/issues/160261) [Bug]: macOS setup app (Hermes-Setup) still ships hardcoded 0.0.1 in Info.plist — regression of #107177 (v0.21.2) `type/bug` `P2` `area/install-update` `os/macos`
- [#160255](https://github.com/NousResearch/hermes-agent/issues/160255) pm.activate() computes the venv verdict under the bare tools interpreter and reports 'install out of sync' on a healthy install (ModuleNotFoundError: ruamel) `type/bug` `comp/cli` `P2`

#### 🔒 Closed Issues
- [#160278](https://github.com/NousResearch/hermes-agent/issues/160278) [Withdrawn] Mobile app keeps showing a session as running after the turn completed
- [#160307](https://github.com/NousResearch/hermes-agent/issues/160307) probe-do-not-merge

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 97,581 · **Open issues:** 11,192 · **Last push:** <1h ago

On November 26, 2026, there were no new releases for vLLM; however, significant progress was made with multiple bug fixes and performance enhancements. Notably, merged pull requests included a fix for the logits soft cap application (#69674), a resolution for streamlining long Inkling tool arguments (#69297), and improvements to the FlashInfer SM90 sparse MLA backend (#61277). On the issue front, a notable bug was reported regarding the CUDA graph capture hanging at startup on SM120 hardware (#69890), drawing attention from the community. Overall, the day was primarily focused on refining features and addressing critical bugs within the system.

#### ✅ Merged PRs
- [#69653](https://github.com/vllm-project/vllm/pull/69653) [XPU] add spec decode UT
- [#69656](https://github.com/vllm-project/vllm/pull/69656) [Bugfix][UMBP] Keep synchronous load blocks out of block zeroing
- [#69674](https://github.com/vllm-project/vllm/pull/69674) [Bugfix] Apply the logits soft cap in place
- [#61087](https://github.com/vllm-project/vllm/pull/61087) [Perf][LoRA] Avoid empty split-K programs in shrink
- [#69297](https://github.com/vllm-project/vllm/pull/69297) [Bugfix][Parser] Stream long Inkling tool arguments without re-parsing
- [#65202](https://github.com/vllm-project/vllm/pull/65202) [ROCm][RDNA] Add gfx1170 and gfx1171 support
- [#63632](https://github.com/vllm-project/vllm/pull/63632) [Bugfix][Reasoning] Hunyuan A13B: detect reasoning end from token ids so structured output applies
- [#69926](https://github.com/vllm-project/vllm/pull/69926) [Refactor][Weight Transfer] Extract shared _LazyEngineFactory base class
- [#67972](https://github.com/vllm-project/vllm/pull/67972) [Bugfix][Tool Parser][Rust Frontend] Muse: map `<tool>.<suffix>` back to a registered bare tool
- [#63078](https://github.com/vllm-project/vllm/pull/63078) [Bugfix][Muse Spark] Keep the FP32 RoPE tables in FP32
- [#65123](https://github.com/vllm-project/vllm/pull/65123) [Bugfix][EC] Republish runner cache hits after CPU-tier eviction
- [#69901](https://github.com/vllm-project/vllm/pull/69901) [Bugfix][HiSparse][NIXL] Import shared host KV on every node's host leader
- [#61277](https://github.com/vllm-project/vllm/pull/61277) [HiSparse] Support the FlashInfer SM90 sparse MLA backend
- [#66159](https://github.com/vllm-project/vllm/pull/66159) [ROCm] Support DP-attention in AITER Triton W4A16 MoE
- [#69774](https://github.com/vllm-project/vllm/pull/69774) [Bugfix][Multimodal] Make vision FA3 batch invariant
- [#66884](https://github.com/vllm-project/vllm/pull/66884) [Perf][GLM-5.3-Flash] KDA: planar short conv for chunked prefill on SM10x
- [#69955](https://github.com/vllm-project/vllm/pull/69955) [Transformers backend] Fix `model_impl="transformers"` for architectures Transformers doesn't have
- [#69624](https://github.com/vllm-project/vllm/pull/69624) [Recipe] Kimi-K3.1-Pro: serve the model card's sampling defaults; Kimi-K3 / K3.1-Pro: opt-in strict tool calls
- [#67277](https://github.com/vllm-project/vllm/pull/67277) [Transformers backend] Migrate A.X-K1 to the Transformers modeling backend
- [#69086](https://github.com/vllm-project/vllm/pull/69086) [Perf][Attention] Enable ShardQ for SM90 FlashInfer NoPE sparse MLA prefill
- [#69929](https://github.com/vllm-project/vllm/pull/69929) [Model] Remove TeleFLM
- [#69868](https://github.com/vllm-project/vllm/pull/69868) [Transformers backend] Splice the fused MoE into the MoE block's traced forward
- [#69726](https://github.com/vllm-project/vllm/pull/69726) [Model] Decouple `nemotron_nas` from llama
- [#56914](https://github.com/vllm-project/vllm/pull/56914) [Frontend] Report time to first content token in per-request metrics
- [#67074](https://github.com/vllm-project/vllm/pull/67074) [Bugfix][ROCm][MoRIIO] Skip zeroing READ destinations and wait for their pending copies
- [#69642](https://github.com/vllm-project/vllm/pull/69642) [Bugfix][Nemotron Shortcut] Fix refits and match training video preprocessing
- [#69669](https://github.com/vllm-project/vllm/pull/69669) [Perf][Kimi K3] Specialized decode: compile each kernel once, only for captured sizes
- [#69116](https://github.com/vllm-project/vllm/pull/69116) [Perf][Multimodal] Reduce Qwen3 audio encoder overhead
- [#67216](https://github.com/vllm-project/vllm/pull/67216) [Bugfix][ROCm][MoRIIO] READ mode restore the cached recurrent state for hybrid prefixes that end on a block
- [#68365](https://github.com/vllm-project/vllm/pull/68365) [HY4 Flash] Allow fp8_ds_mla KV cache on Flash sliding-window MLA
- [#69918](https://github.com/vllm-project/vllm/pull/69918) [Bugfix][Transformers backend] Match ignored unexpected keys after renaming

#### 🐛 New Issues
- [#69876](https://github.com/vllm-project/vllm/issues/69876) [RFC]: Near memory-neutral NVFP4 x FP8 MoE prefill on Hopper: on-the-fly decode from Marlin tensors 💬3
- [#69839](https://github.com/vllm-project/vllm/issues/69839) [Bug][ROCm] num_compute_units() is half the card's CU count on gfx1201, so grid-sized ops run at half occupancy (4.3x measured) `rocm` 💬3
- [#69854](https://github.com/vllm-project/vllm/issues/69854) [RFC]: Low-Rank Recurrent State Compression for Mamba2 Hybrid Models (SPARE) `RFC` `quantization` 💬1
- [#69844](https://github.com/vllm-project/vllm/issues/69844) [RFC][Multimodal]: Preemptible vision encoding via zero-cross-frame micro-chunking and layer-boundary yields on colocated GPUs `multi-modality` 💬2
- [#69890](https://github.com/vllm-project/vllm/issues/69890) [Bug][SM120] CUDA graph capture hangs at startup on SM120 (shm_broadcast 60s loop), --enforce-eager works 💬2
- [#70030](https://github.com/vllm-project/vllm/issues/70030) [Bug]: DeepSeek-V3.2 chat completions return HTTP 500 for `[developer, user]` messages with thinking enabled `tool-calling` `deepseek` 💬1
- [#70029](https://github.com/vllm-project/vllm/issues/70029) [Bug]: Image request never gets a first token when embedding count equals batch budget but placeholder span exceeds it `rocm` 💬1
- [#70000](https://github.com/vllm-project/vllm/issues/70000) [Feature]: RowParallelLinear and RowParallelLinearWithLoRA: add the bias after the all-reduce; hook for out-of-tree LoRA layers 💬1
- [#69888](https://github.com/vllm-project/vllm/issues/69888) [RFC]: CPU Offloading Tier: Best-Effort KV Hint Retention `RFC` 💬1
- [#69933](https://github.com/vllm-project/vllm/issues/69933) [RFC]: Pinned-host all-reduce for TP=2 on GPUs without peer access 💬1
- [#69928](https://github.com/vllm-project/vllm/issues/69928) [RFC]: NixlConnector: KV block metadata pool for transfer content validation 💬1
- [#69914](https://github.com/vllm-project/vllm/issues/69914) [CI][ROCm] Cut the ROCm image build from 7 to ~4 min with build-agent changes `rocm` 💬1
- [#69855](https://github.com/vllm-project/vllm/issues/69855) [Bug]: /generative_scoring tokenizes oversized text before truncation, blocking the API server 💬1
- [#69860](https://github.com/vllm-project/vllm/issues/69860) [Bug]: VLLM_USE_MODELSCOPE requires ModelScope before checking local paths 💬1
- [#69829](https://github.com/vllm-project/vllm/issues/69829) [Bug][UMA][DGX Spark] Terminating a CPU-only process causes vLLM memory profiling assertion during startup `bug` 💬1
- [#69811](https://github.com/vllm-project/vllm/issues/69811) [RFC][LoRA]: Static 2-bucket slot pooling with upward overflow for heterogeneous-rank Multi-LoRA `pooling` 💬1
- [#70041](https://github.com/vllm-project/vllm/issues/70041) [Performance]: Add opt-in NUMA locality for API tokenization with Ray
- [#70013](https://github.com/vllm-project/vllm/issues/70013) [RFC]: Extend automatic NUMA binding to additional accelerator platforms `RFC`
- [#69827](https://github.com/vllm-project/vllm/issues/69827) [RFC]: Extend automatic NUMA binding to additional accelerator platforms
- [#69900](https://github.com/vllm-project/vllm/issues/69900) [Bug][HiSparse][NIXL]: Multi-node TP decode imports host KV only on node 0 since #68747; nodes after the first decode from unfilled host pools `kv-connector`
- [#69993](https://github.com/vllm-project/vllm/issues/69993) [Feature]: PD disagg with DeepSeek-V4.1-Flash and MoRI-IO `feature request` `rocm` `deepseek`
- [#69989](https://github.com/vllm-project/vllm/issues/69989) [Bug]: Illegal memory access in `copy_kv_cache_blocks_inplace` without pinned memory
- [#69981](https://github.com/vllm-project/vllm/issues/69981) [Bug][Nemotron Shortcut]: SDSA + pipeline parallelism fails at startup: "KV cache layout LBHNC cannot express this model's mixed page sizes"
- [#69924](https://github.com/vllm-project/vllm/issues/69924) [Performance]: Large CPU-to-GPU cache transfers stall the next decode step
- [#69902](https://github.com/vllm-project/vllm/issues/69902) [Bug]: I'm using the CPU version of vLLM, and the memory usage keeps growing continuously. Has anyone else encountered this issue `bug`
- [#69897](https://github.com/vllm-project/vllm/issues/69897) [Bug][XPU] Memory query remains free == total after allocations on WSL2, inflating KV cache budget `bug` `intel-gpu`
- [#69895](https://github.com/vllm-project/vllm/issues/69895) [RFC]: Qwen3.6-27B DMTP speculative decoding with native MTP and DFlash2 `speculative-decoding`
- [#69832](https://github.com/vllm-project/vllm/issues/69832) [Doc/UX] The --async-scheduling x speculative-decoding restriction is undocumented and its two failure modes are asymmetric
- [#69820](https://github.com/vllm-project/vllm/issues/69820) [Bug]: `created_cache_tokens` is 0 on a cold request for hybrid models with `--prefix-match-unit` `bug` `kimi`

#### 🔒 Closed Issues
- [#52150](https://github.com/vllm-project/vllm/issues/52150) [Bug][ROCm/gfx942]: GLM-5.2-FP8 — first request after GPU idle emits garbage; piecewise CUDA graph cold replay corrupts the request's own prefill (workaround: cudagraph_mode=FULL_DECODE_ONLY)
- [#69712](https://github.com/vllm-project/vllm/issues/69712) [RFC][XPU] Inkling 2 on Intel XPU: shared `inkling2/common/` implementation and PR series
- [#69267](https://github.com/vllm-project/vllm/issues/69267) [Bug]: Inkling tool parser re-parses the whole argument on every streamed delta; long tool calls stall the API server and /health
- [#63741](https://github.com/vllm-project/vllm/issues/63741) [RFC / Performance] How LLM Agent Context Compaction Collapses Automatic Prefix Caching (APC)
- [#69213](https://github.com/vllm-project/vllm/issues/69213) [Bug]: jamba tool parser, stream=true: text before <tool_calls> is dropped when it arrives in the same delta as the opener (e.g. stream_interval > 1)
- [#67227](https://github.com/vllm-project/vllm/issues/67227) [Performance]: Mamba1 packed prefill sizes the selective scan launch from the total packed length, so many short prompts prefill about 10x slower
- [#62003](https://github.com/vllm-project/vllm/issues/62003) [Bug]: mamba_ssm_cache_dtype="float16" crashes mamba-family models at startup — bare kernel assertion with an empty message (selective_scan_fwd.cu:791)
- [#53239](https://github.com/vllm-project/vllm/issues/53239) [Bug]: `bfloat16` Mamba cache dtype crashes `selective_scan_fwd` on NVIDIA L40S
- [#69890](https://github.com/vllm-project/vllm/issues/69890) [Bug][SM120] CUDA graph capture hangs at startup on SM120 (shm_broadcast 60s loop), --enforce-eager works
- [#67755](https://github.com/vllm-project/vllm/issues/67755) [Bug]: Tekken Mistral tokenizers garble emoji and other multi-byte characters when special tokens are kept
- [#69805](https://github.com/vllm-project/vllm/issues/69805) [Bug]: kv_connector_no_forward skips wait_for_save, so MooncakeStoreConnector never submits saves scheduled on no-forward steps
- [#65456](https://github.com/vllm-project/vllm/issues/65456) [CI Failure][ROCm]: MI355 spec decode tests OOM with the extensible KV cache
- [#61030](https://github.com/vllm-project/vllm/issues/61030) [Performance]: LoRA shrink launches empty split-K programs with the default config (split_k=64 > ceil(K/block_k))
- [#69391](https://github.com/vllm-project/vllm/issues/69391) [Feature]: Add native block-diffusion support for Clover-35B-A3B-Preview
- [#67962](https://github.com/vllm-project/vllm/issues/67962) [Bug]: Muse-Spark-Open emits tool names like `Bash.command`; the `muse` parser passes them through, so no tool matches
- [#69827](https://github.com/vllm-project/vllm/issues/69827) [RFC]: Extend automatic NUMA binding to additional accelerator platforms
- [#69900](https://github.com/vllm-project/vllm/issues/69900) [Bug][HiSparse][NIXL]: Multi-node TP decode imports host KV only on node 0 since #68747; nodes after the first decode from unfilled host pools
- [#68870](https://github.com/vllm-project/vllm/issues/68870) [Bug]: Qwen3.5 BF16 crashes with DEBUG logging on GB10: CUDA graph capture/replay input mismatch (v0.34.0)
- [#62815](https://github.com/vllm-project/vllm/issues/62815) [Feature]: Qwen4Exp PLE cpu_offload without UVA (NVIDIA Confidential Computing)

### SGLang (`sgl-project/sglang`)

**Stars:** 39,068 · **Open issues:** 7,428 · **Last push:** <1h ago

On November 26, 2026, SGLang had a day of routine maintenance with no new releases. Significant merged pull requests included the addition of GQA and MLA support for attention mechanisms (#49214) and updates to the NPU Docker environment, bumping the kernel to version 2026.11.0.post15 (#53102). Notably, the documentation for the diffusion model skill was aligned with the new model guide (#53174), enhancing usability. Additionally, a new roadmap issue (#53203) was opened to explore SGLang's expansion into Physical AI and Robotics Serving, signaling an exciting direction for future development.

#### ✅ Merged PRs
- [#52431](https://github.com/sgl-project/sglang/pull/52431) [CI] [NPU] tests: CANN 9.2.0 nightly images, scheduled PR-run detection, 397b w4a8 env cleanup
- [#53157](https://github.com/sgl-project/sglang/pull/53157) [Test] Diffusion: Refresh Wan2.1 I2V LoRA H100 reference frames
- [#53131](https://github.com/sgl-project/sglang/pull/53131) [Fix] [AMD] docker: Bump TileLang to v0.1.12 for apache-tvm-ffi 0.1.11
- [#49214](https://github.com/sgl-project/sglang/pull/49214) [Feat] [MLU] attention: Add GQA and MLA support
- [#53238](https://github.com/sgl-project/sglang/pull/53238) [Fix] qsa: Give the indexer test fake the index_n_heads that _forward_impl reads
- [#53195](https://github.com/sgl-project/sglang/pull/53195) [CI] [MLU] workflows: Update runner group and labels
- [#53225](https://github.com/sgl-project/sglang/pull/53225) [Fix] tests: Stabilize replay expiry and cover GigaChat4 streaming
- [#53213](https://github.com/sgl-project/sglang/pull/53213) [Test] [NPU] deepseek-v4-pro: Raise prefill mem-fraction-static to 0.85
- [#47939](https://github.com/sgl-project/sglang/pull/47939) [Fix] attention: Restore block pointers on Triton 3.9 for FLA kernels (cherry-pick #45470)
- [#50613](https://github.com/sgl-project/sglang/pull/50613) [Feat] gigachat4: Add GigaChat 4 support
- [#53201](https://github.com/sgl-project/sglang/pull/53201) [CI] permissions: set cooldown interval to 0 minutes for dlal-sgl
- [#38800](https://github.com/sgl-project/sglang/pull/38800) [Doc] [NPU] cookbook: add Qwen3-Next NPU deployment
- [#53160](https://github.com/sgl-project/sglang/pull/53160) [CI] cuda_graph: Compare the prebuilt-state line with its own rank's capture line
- [#51234](https://github.com/sgl-project/sglang/pull/51234) [Feat] pd: Transfer NVFP4 page-row KV between different attention TP sizes
- [#52451](https://github.com/sgl-project/sglang/pull/52451) [Perf] dsa: Compile the Prims-TS sparse MLA kernels when the backend is built, not on first use
- [#53196](https://github.com/sgl-project/sglang/pull/53196) [Perf] kimi_k3: Enable the SP collective for 2-rank attention groups
- [#50205](https://github.com/sgl-project/sglang/pull/50205) [Feat] [NPU] deepseek-v4.1: Support Ascend A3 W8A8 inference and DSpark
- [#53102](https://github.com/sgl-project/sglang/pull/53102) [CI] [NPU] docker: Bump NPU kernel to 2026.11.0.post15
- [#53174](https://github.com/sgl-project/sglang/pull/53174) [Doc] skills: Rename the diffusion add-model skill to add-diffusion-model and align it with the new-model guide
- [#53068](https://github.com/sgl-project/sglang/pull/53068) [Perf] rust-server: Decode large /generate bodies on the blocking pool
- [#53187](https://github.com/sgl-project/sglang/pull/53187) [Perf] [NVIDIA] kimi-k3: Run SP's side-stream reduce-scatter on 8 blocks
- [#33814](https://github.com/sgl-project/sglang/pull/33814) [Fix] scheduler: Fix context-boundary max_new_tokens clipping
- [#52926](https://github.com/sgl-project/sglang/pull/52926) [Fix] mem_cache: Size req_to_token rows from the per-decode allocation reach
- [#53185](https://github.com/sgl-project/sglang/pull/53185) [Fix] attention: Size per-request tables from the req_to_token row width
- [#52948](https://github.com/sgl-project/sglang/pull/52948) [Fix] kimi-k3: Reject a MegaMoE expert layout DeepGEMM cannot hold when the model is built
- [#52627](https://github.com/sgl-project/sglang/pull/52627) [Fix] kimi-k3: wait on the PDL primary before the first attention-residual bank load
- [#53019](https://github.com/sgl-project/sglang/pull/53019) [CI] pr-test: Prefetch each partition's Hugging Face models in a trusted step that alone holds the token
- [#52460](https://github.com/sgl-project/sglang/pull/52460) [Doc] [AMD] glm-5.2: PD disaggregation on MI355X with the Infera router
- [#51760](https://github.com/sgl-project/sglang/pull/51760) [Doc] [AMD] cookbook: Muse Spark Open MI355X HiCache frees out-of-window SWA slots
- [#53037](https://github.com/sgl-project/sglang/pull/53037) [Fix] disaggregation: Hold the status lock while clear() pops a room
- [#53132](https://github.com/sgl-project/sglang/pull/53132) [CI] mem_cache: Count the multicast gather copies as enqueued instead of profiled

#### 🐛 New Issues
- [#53203](https://github.com/sgl-project/sglang/issues/53203) [Roadmap] SGLang Diffusion Physical AI and Robotics Serving, Simulation, and Post-Training 💬1
- [#53215](https://github.com/sgl-project/sglang/issues/53215) [Bug] sgl-kernel 0.3.21: FA3 import fails with nvidia-cutlass-dsl>=4.8 because the FA4 guard only catches ImportError 💬1
- [#53151](https://github.com/sgl-project/sglang/issues/53151) [Feature] Ahead-of-Time (AOT) Pinned Prefix Caching via KV-Cartridges in RadixAttention 💬1
- [#53154](https://github.com/sgl-project/sglang/issues/53154) [Bug] Gumbel watermark initialization overflows int32 on multimodal padding IDs 💬1
- [#53240](https://github.com/sgl-project/sglang/issues/53240) [Feature] Hy4-flash sparse MLA on NVIDIA Ada (SM89 / L40)
- [#53229](https://github.com/sgl-project/sglang/issues/53229) [Bug] Hy-Nomas offline generation fails with VAE CPU offload
- [#53179](https://github.com/sgl-project/sglang/issues/53179) [Bug] Nemotron VL: a text prompt with several images puts every image at the first placeholder
- [#53178](https://github.com/sgl-project/sglang/issues/53178) [Bug] Nemotron 3.5 Super VL: video frames are resized to a 224 px square instead of the checkpoint's aspect-preserving size
- [#53177](https://github.com/sgl-project/sglang/issues/53177) [Bug] Nemotron VL: every video request returns HTTP 500 on the default GPU video decode
- [#53172](https://github.com/sgl-project/sglang/issues/53172) [VLM] Gemma 4 video preprocessing fails for Torch tensor frames
- [#53149](https://github.com/sgl-project/sglang/issues/53149) Hybrid SWA + state radix cache: windows on state-less nodes outlive prompt-end checkpoint windows, causing full prefix misses in multi-turn workloads
- [#53146](https://github.com/sgl-project/sglang/issues/53146) [Perf] DSpark verify builds full-vocab logprobs for selected tokens
- [#53123](https://github.com/sgl-project/sglang/issues/53123) [DSV4.1][SM90] Prefill indexer per-request torch loop dominates the scheduler thread; SGLANG_OPT_DSV41_SM90_DEEPGEMM_PREFILL=1 gives 50 → 65 QPS on H200 — why is it off by default?
- [#53122](https://github.com/sgl-project/sglang/issues/53122) [Question] Public kernel and benchmark for Strata Figure 5 (H200 GPU-assisted KV I/O)
- [#53092](https://github.com/sgl-project/sglang/issues/53092) [Bug] DeepSeek-V4.1 Flash with DSpark hits a CUDA gather assertion on H100
- [#53085](https://github.com/sgl-project/sglang/issues/53085) [Bug] Glm5Next compressed-tensors NVFP4 (RedHatAI/GLM-5.3-Flash-NVFP4): f_a_proj startup ValueError and silent output corruption from shared experts fusion
- [#53079](https://github.com/sgl-project/sglang/issues/53079) [Feature] rust/grpc: External DP-rank routing and disaggregation metadata parity on sglang.api.v1
- [#53078](https://github.com/sgl-project/sglang/issues/53078) [Feature] Precompile the Mamba2 prefill kernels for every Mamba2 model
- [#53066](https://github.com/sgl-project/sglang/issues/53066) [Feature] Discover individual workers from headless Service DNS in sgl-router
- [#53062](https://github.com/sgl-project/sglang/issues/53062) [Refactor] WIP features in PR50205
- [#53038](https://github.com/sgl-project/sglang/issues/53038) [Bug] HTTP tokenizer workers keep the listening port after the launcher receives SIGKILL

#### 🔒 Closed Issues
- [#40574](https://github.com/sgl-project/sglang/issues/40574) [Feature][DSv4.1] Tracking: every backend's two-level candidate indexer behind CandidateIndexer
- [#33355](https://github.com/sgl-project/sglang/issues/33355) [Feature][DCP] symm_a2a backend: peer-direct A2A for MLA decode on single-node NVLink/NVSwitch
- [#36889](https://github.com/sgl-project/sglang/issues/36889) [DFLASH] Mamba state cache silently caps effective concurrency on hybrid-KDA models — 5 state slots/request, info-level log only (+75% throughput hidden behind one flag)
- [#39402](https://github.com/sgl-project/sglang/issues/39402) [Bug] ep_scatter_from_psum missing expert_start/num_experts args → TypeError on deepep_v2 prefill
- [#37393](https://github.com/sgl-project/sglang/issues/37393) [Bug] Kimi-K3 chunked prefill submits different VocabParallelEmbedding ALLREDUCE sizes across TP ranks
- [#35562](https://github.com/sgl-project/sglang/issues/35562) [Bug] llama3 tool-call parser silently deletes any leading JSON object from message content
- [#35083](https://github.com/sgl-project/sglang/issues/35083) [Bug] Reasoning parsers: text before the opening think token is routed four different ways (chunk-dependent, and one-shot keeps the literal marker)
- [#31915](https://github.com/sgl-project/sglang/issues/31915) Tool-call parsers lose or corrupt data at streaming chunk boundaries (multiple detectors)
- [#42564](https://github.com/sgl-project/sglang/issues/42564) [Bug][ROCm] FLUX.2-dev fails on gfx1151: NVIDIA PTX inline assembly in residual_gate_add kernel
- [#33164](https://github.com/sgl-project/sglang/issues/33164) [Bug] --log-requests max_length truncation is bypassed for lists: elided long lists skip per-element truncation (JSON), text format never truncates list elements
- [#36853](https://github.com/sgl-project/sglang/issues/36853) [Bug][Diffusion] Qwen-Image native SP=4 is killed by host OOM while loading DiT on 4×48GB GPUs
- [#33577](https://github.com/sgl-project/sglang/issues/33577) [Bug] DCP a2a backend NCCL crash at conc=64 (​unhandled cuda error​)
- [#36797](https://github.com/sgl-project/sglang/issues/36797) [Performance] NVFP4 KV cache regresses Qwen4Exp decode ~29% on DGX Spark (SM121) vs fp8_e4m3 — consider arch-gating the default
- [#34448](https://github.com/sgl-project/sglang/issues/34448) [BUG] mxfp4 + sharded_state load format silently drops expert weights (gpt-oss-20b)
- [#41332](https://github.com/sgl-project/sglang/issues/41332) Optional per-request settlement rail (HTTP 402) for metered self-hosted serving
- [#41317](https://github.com/sgl-project/sglang/issues/41317) [Bug] DeepSeek V3.2/V4 DSML detector strips whitespace (e.g. trailing newline) from string="true" parameter values
- [#41316](https://github.com/sgl-project/sglang/issues/41316) [Bug] Gemma4Detector returns null and exponent-notation numbers as strings
- [#41315](https://github.com/sgl-project/sglang/issues/41315) [Bug] gpt-oss detector misses tool calls that are the first message or lack <|constrain|>json
- [#41299](https://github.com/sgl-project/sglang/issues/41299) [Bug][ROCm] Qwen3.8-Flash-Next (qwen4_exp) crashes with HSAIL hardware exception 0x1016 on the first 16k prefill chunk, gfx950 TP1
- [#53005](https://github.com/sgl-project/sglang/issues/53005) [CI] test_page_interleave_gather_multi_gpu.py fails on main: AssertionError (0, 15), no Memcpy PtoP events profiled
- [#52907](https://github.com/sgl-project/sglang/issues/52907) [CI] test_flashinfer_fa2_attention.py fails on main: No module named 'imageio'
- [#52883](https://github.com/sgl-project/sglang/issues/52883) [Bug] [XPU] TP2xPP2 stalls / DEVICE_LOST on Intel when a PP irecv is posted behind queued TP all-reduce

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 136,303 · **Open issues:** 2,645 · **Last push:** <1h ago

On November 26, 2026, the llama.cpp project updated to version 1.1.0, marking a significant release alongside several key enhancements including the addition of the hy_v4_flash model on the DSA iSWA cache and fixes for sequence state restoration with ON_DEVICE. Notably, merged features included enhancements in SYCL for F8 e4m3 support and the implementation of a backward pass for the TANH function. The day's most pressing issue reported was the failure of requests with certain tool choices that resulted in a 400 error, indicating ongoing challenges related to integration. Additionally, there were multiple bug reports concerning model performance and GPU allocation, reflecting the importance of stability in upcoming iterations.

#### 🚀 New Releases
- [b12755](https://github.com/ggml-org/llama.cpp/releases/tag/b12755) b12755
- [b12754](https://github.com/ggml-org/llama.cpp/releases/tag/b12754) b12754
- [b12753](https://github.com/ggml-org/llama.cpp/releases/tag/b12753) b12753
- [b12752](https://github.com/ggml-org/llama.cpp/releases/tag/b12752) b12752
- [b12751](https://github.com/ggml-org/llama.cpp/releases/tag/b12751) b12751
- [b12738](https://github.com/ggml-org/llama.cpp/releases/tag/b12738) b12738
- [b12734](https://github.com/ggml-org/llama.cpp/releases/tag/b12734) b12734
- [b12732](https://github.com/ggml-org/llama.cpp/releases/tag/b12732) b12732
- [b12728](https://github.com/ggml-org/llama.cpp/releases/tag/b12728) b12728
- [b12726](https://github.com/ggml-org/llama.cpp/releases/tag/b12726) b12726

#### ✅ Merged PRs
- [#32136](https://github.com/ggml-org/llama.cpp/pull/32136) ggml : add TANH backward pass
- [#31762](https://github.com/ggml-org/llama.cpp/pull/31762) sycl: add gated delta net ESIMD kernel
- [#31355](https://github.com/ggml-org/llama.cpp/pull/31355) sycl: fuse recurrent convolution windows
- [#33036](https://github.com/ggml-org/llama.cpp/pull/33036) ui: open settings, the + menu and the model picker as sheets on phones, and manage MCP from settings
- [#33034](https://github.com/ggml-org/llama.cpp/pull/33034) metal : spread the short mat-vec lanes over src1 rows
- [#31871](https://github.com/ggml-org/llama.cpp/pull/31871) [SYCL] F8 e4m3 initial support SET_ROWS, CPY, ADD, MUL_MAT, MUL_MAT_ID
- [#33055](https://github.com/ggml-org/llama.cpp/pull/33055) convert : map the Inkling-2 LoRA tensor names
- [#32176](https://github.com/ggml-org/llama.cpp/pull/32176) model : add RAON-1-mini-preview support
- [#33050](https://github.com/ggml-org/llama.cpp/pull/33050) Revert "metal: increase default command buffers on iPhone (#31815)"
- [#32955](https://github.com/ggml-org/llama.cpp/pull/32955) nix: fix build on darwin
- [#33013](https://github.com/ggml-org/llama.cpp/pull/33013) opencl: Adreno E17 compiler quirks off by default
- [#33051](https://github.com/ggml-org/llama.cpp/pull/33051) ui: stop the streaming reply with Escape
- [#33053](https://github.com/ggml-org/llama.cpp/pull/33053) model: use the indexed bias in the Inkling 2 graph
- [#32947](https://github.com/ggml-org/llama.cpp/pull/32947) metal : commit the graph in chunks with one command buffer thread
- [#32901](https://github.com/ggml-org/llama.cpp/pull/32901) CUDA: refactor & deduplicate FA data loading
- [#32960](https://github.com/ggml-org/llama.cpp/pull/32960) model : add hy_v4_flash on the DSA iSWA cache
- [#33002](https://github.com/ggml-org/llama.cpp/pull/33002) ggml-openvino: fix CI op tests and improve KV cache decode
- [#30318](https://github.com/ggml-org/llama.cpp/pull/30318) llama : fix seq state restore with ON_DEVICE
- [#33043](https://github.com/ggml-org/llama.cpp/pull/33043) llama.cpp : bump version to 1.1.0
- [#33038](https://github.com/ggml-org/llama.cpp/pull/33038) vocab : implement Metaspace prepend_scheme always for BPE
- [#33037](https://github.com/ggml-org/llama.cpp/pull/33037) ui: fix for a chat form update loop with large fonts and long model names (otherwise web interface gets Error 500)
- [#33042](https://github.com/ggml-org/llama.cpp/pull/33042) sync : ggml
- [#31986](https://github.com/ggml-org/llama.cpp/pull/31986) llama : honor metaspace_prepend_scheme for SPM
- [#33010](https://github.com/ggml-org/llama.cpp/pull/33010) ui: fix tool result media shown twice, uncapped and dropped after its run
- [#33014](https://github.com/ggml-org/llama.cpp/pull/33014) rename INFINITE to LQ_INFINITE in llama-quant.cpp to avoid macro collision on windows
- [#33030](https://github.com/ggml-org/llama.cpp/pull/33030) ui: show each tool group's loop time and the task time in reply statistics
- [#33032](https://github.com/ggml-org/llama.cpp/pull/33032) model : load YaRN hparams in llama_model_base::load_hparams
- [#33033](https://github.com/ggml-org/llama.cpp/pull/33033) ui: open the microphone ahead of a press only once the pointer rests on its button
- [#33023](https://github.com/ggml-org/llama.cpp/pull/33023) ui: add file extensions to the Vite config's local imports
- [#33025](https://github.com/ggml-org/llama.cpp/pull/33025) ci : revert disable musa.Dockerfile from docker.yml
- [#33017](https://github.com/ggml-org/llama.cpp/pull/33017) webgpu: (fix CI) add log1p for softplus
- [#33028](https://github.com/ggml-org/llama.cpp/pull/33028) ui: search home by default in the working-directory picker and pin tool call chevrons
- [#32080](https://github.com/ggml-org/llama.cpp/pull/32080) server : handle CTRL_BREAK_EVENT on Windows for clean shutdown
- [#32795](https://github.com/ggml-org/llama.cpp/pull/32795) deepseek41 : read quantized indexer K in place when fused_idx is set
- [#32796](https://github.com/ggml-org/llama.cpp/pull/32796) docs : fix stale CPU support in ops.md
- [#33016](https://github.com/ggml-org/llama.cpp/pull/33016) ggml-cpu : unskip the flash_attn_ext indexed-bias tests
- [#32908](https://github.com/ggml-org/llama.cpp/pull/32908) accept boolean "value": true JSON schema
- [#31564](https://github.com/ggml-org/llama.cpp/pull/31564) common : implement named tool choice
- [#32958](https://github.com/ggml-org/llama.cpp/pull/32958) ui: import conversations or settings by dropping them anywhere in the app
- [#30685](https://github.com/ggml-org/llama.cpp/pull/30685) ggml: allow input async copies
- [#31898](https://github.com/ggml-org/llama.cpp/pull/31898) ggml: allow reserving scratch memory in graph_optimize
- [#32967](https://github.com/ggml-org/llama.cpp/pull/32967) ui: edit the system message in the chat form when it is hidden in conversations
- [#31799](https://github.com/ggml-org/llama.cpp/pull/31799) SYCL : ROLL op handles permuted source
- [#33004](https://github.com/ggml-org/llama.cpp/pull/33004) ui: add --ui-agent for agent mode without server tools or the MCP proxy

#### 🐛 New Issues
- [#33018](https://github.com/ggml-org/llama.cpp/issues/33018) Misc. bug: requests with tool_choice "required" or response format "json_schema", "json_object" fail with 400 for add_space_prefix: true `bug-unconfirmed` 💬1
- [#33040](https://github.com/ggml-org/llama.cpp/issues/33040) Multi-GPU placement on looped/MoE models: inkling2_loop default split and --fit put every physical weight on device 0; --n-cpu-moe only unloads device 0; DS-V4 fused op pinned to device 0; Vulkan FA pipeline crash on Arc B70 💬2
- [#33029](https://github.com/ggml-org/llama.cpp/issues/33029) Misc. bug: qwen3-omni deepstack pair mismatch, allow audio and vision `bug-unconfirmed` 💬1
- [#33027](https://github.com/ggml-org/llama.cpp/issues/33027) Misc. bug: [SYCL] FLASH_ATTN_EXT segmentation fault `bug-unconfirmed` 💬1
- [#33008](https://github.com/ggml-org/llama.cpp/issues/33008) Eval bug: Ternary-Bonsai-2.5-27B -sm tensor failed `bug-unconfirmed`
- [#33079](https://github.com/ggml-org/llama.cpp/issues/33079) Eval bug: Ling 3.x VL GGUFs (bailingmoe3) rotate RoPE with half-split pairs, the model uses adjacent pairs -> repetition loops at long context `bug-unconfirmed`
- [#33075](https://github.com/ggml-org/llama.cpp/issues/33075) server: /v1/audio/transcriptions puts the 'prompt' (conditioning text) into the user turn — Qwen3-ASR echoes it back verbatim
- [#33066](https://github.com/ggml-org/llama.cpp/issues/33066) Misc. bug: HIP/ROCm : columns 15 and 16 src1 is about 3x slower `bug-unconfirmed`
- [#33054](https://github.com/ggml-org/llama.cpp/issues/33054) Misc. bug: convert_lora_to_gguf cannot convert an Inkling-2 LoRA (two unmapped names)
- [#33056](https://github.com/ggml-org/llama.cpp/issues/33056) Feature Request: plugin interface for drafters/spec decode interface `enhancement`
- [#33052](https://github.com/ggml-org/llama.cpp/issues/33052) Misc. bug: image placing in markdown in webui `bug-unconfirmed`
- [#33048](https://github.com/ggml-org/llama.cpp/issues/33048) Misc. bug:GGUFReader accepts tensor layouts rejected by the C reader `bug-unconfirmed`
- [#33039](https://github.com/ggml-org/llama.cpp/issues/33039) Windows ROCm 10.0 zips are missing ROCm libraries (rocBLAS, hipBLASLt, hipRTC, ...) → "no ROCm-capable device is detected", silent CPU fallback
- [#33009](https://github.com/ggml-org/llama.cpp/issues/33009) Eval bug: ggml-hexagon: HMX produces wrong results / kparams assert on Hexagon V73 (SM7675) `bug-unconfirmed`
- [#33005](https://github.com/ggml-org/llama.cpp/issues/33005) Feature Request: keep memory busy during quantized cache decode on Intel Xe2/Xe3 running Vulkan `enhancement`

#### 🔒 Closed Issues
- [#31560](https://github.com/ggml-org/llama.cpp/issues/31560) Vulkan: KHR_coopmat gives nondeterministic, wrong results on Intel Arc Pro B70 (BMG G31, Mesa 26.2.5) — encoder/decision model, F16 and Q8_0
- [#30163](https://github.com/ggml-org/llama.cpp/issues/30163) Feature Request: Allow `--moe-cache-mib` to be comma separated per-device.
- [#32361](https://github.com/ggml-org/llama.cpp/issues/32361) Misc. bug: Web UI becomes unresponsive (Svelte effect_update_depth_exceeded) when Chrome default font size is set to 24 or more
- [#29821](https://github.com/ggml-org/llama.cpp/issues/29821) vulkan: MUL_MAT_ID loses rows when an expert id appears more than once in a token's row and n > 8
- [#32041](https://github.com/ggml-org/llama.cpp/issues/32041) Misc. bug: scripts/moe-cache-tune.py crashes on Windows with "ValueError: Unsupported signal: 2" and leaves llama-server running
- [#27942](https://github.com/ggml-org/llama.cpp/issues/27942) Feature Request: Generalize per-sequence file payload from tokens to opaque bytes
- [#30422](https://github.com/ggml-org/llama.cpp/issues/30422) pooled embeddings / `--reranking` with decoder models copy n_vocab logits for every token to the host (~6x slower rerank)
- [#28144](https://github.com/ggml-org/llama.cpp/issues/28144) Misc. bug: ggml_cuda_compute_forward: SOFT_MAX failed / invalid argument on GLM-5.3-Flash (Turing, glm5next)
- [#30369](https://github.com/ggml-org/llama.cpp/issues/30369) llama-server: object-form named `tool_choice` still falls back to `auto` (re-filing #26535, closed as stale)
- [#30388](https://github.com/ggml-org/llama.cpp/issues/30388) llama batch incompatible sequence check is not covered
- [#30394](https://github.com/ggml-org/llama.cpp/issues/30394) Eval bug: draft-mtp with Qwen3.6-35B-A3B on 2x RTX 5060 Ti (layer split): "CUDA error: the launch timed out" in MTP path at ~88K context
- [#30402](https://github.com/ggml-org/llama.cpp/issues/30402) Eval bug: vllm-d3 answers change when a shorter request shares the batch (split_equal splits non-causal prompts)
- [#30406](https://github.com/ggml-org/llama.cpp/issues/30406) Misc. bug: ggml_backend_sched_new reserves a buffer sized for the graph's maximum capacity, which counts towards the commit charge on Windows
- [#31106](https://github.com/ggml-org/llama.cpp/issues/31106) Feature Request: Support for Raon-1 architecture
- [#30830](https://github.com/ggml-org/llama.cpp/issues/30830) deepseek2: YaRN beta_fast/beta_slow are never read from the GGUF (Kimi K2 specifies 1/1, the loader defaults to 32/1)
- [#33054](https://github.com/ggml-org/llama.cpp/issues/33054) Misc. bug: convert_lora_to_gguf cannot convert an Inkling-2 LoRA (two unmapped names)
- [#32882](https://github.com/ggml-org/llama.cpp/issues/32882) Misc. bug: mmBERT GGUFs converted since #23343 fail to load: "metaspace prepend_scheme 'always' is not supported for BPE vocab" (breaks ggml-org/Julia-1-GGUF)
- [#32907](https://github.com/ggml-org/llama.cpp/issues/32907) Eval bug: JSON schema error "schema must be an object"
- [#32999](https://github.com/ggml-org/llama.cpp/issues/32999) Misc. bug: CUDA supports_op returns true for strided XIELU/LEAKY_RELU views but aborts with GGML_ASSERT
- [#32998](https://github.com/ggml-org/llama.cpp/issues/32998) Misc. bug: GGML_OP_POOL_MAX -FLT_MAX sentinel returns wrong value on -inf (CPU/CUDA) and drops gradients in pool_2d_back
- [#32997](https://github.com/ggml-org/llama.cpp/issues/32997) Misc. bug: CUDA ggml_unary_inplace on strided views overwrites padding and skips strided rows
- [#32996](https://github.com/ggml-org/llama.cpp/issues/32996) Misc. bug: CUDA ggml_argmax returns -1 for nonempty rows of all -FLT_MAX
- [#31870](https://github.com/ggml-org/llama.cpp/issues/31870) Feature Request: SYCL support for OCP FP8 e4m3

### Ollama (`ollama/ollama`)

**Stars:** 188,155 · **Open issues:** 4,777 · **Last push:** 3h ago

On November 26, 2026, there were no new releases for Ollama, but several key updates were implemented in merged PRs, including the mlxrunner enhancement for compact Engram history buffers and the inkling2 optimization for faster short histories, draft proposals, and conversation snapshots. Among the new issues, a notable regression was reported for version 0.40.18 on Windows and ROCm, where JSON schema requests fail mid-load with an unexpected grammar stack error. Additionally, users reported a bug in the Laguna parser dropping tool-call arguments when they include a `<tool_call>` opener, along with a crash in phi4 when using the q8_0 cache type on Metal. Overall, while it was a routine day for releases, the issues raised signal important areas for troubleshooting in upcoming updates.

#### ✅ Merged PRs
- [#19913](https://github.com/ollama/ollama/pull/19913) mlxrunner: compact Engram history buffers
- [#19881](https://github.com/ollama/ollama/pull/19881) inkling2: faster short histories, draft proposals and conv snapshots

#### 🐛 New Issues
- [#19918](https://github.com/ollama/ollama/issues/19918) 0.40.18 regression (Windows, ROCm): json_schema requests fail mid-load with "Unexpected empty grammar stack after accepting piece: @ (31)" and return HTTP 200 with an empty body 💬1
- [#19902](https://github.com/ollama/ollama/issues/19902) [Bug]: Laguna parser drops tool-call arguments when the value contains a `<tool_call>` opener 💬1
- [#19905](https://github.com/ollama/ollama/issues/19905) phi4 crashes at load with OLLAMA_KV_CACHE_TYPE=q8_0 on Metal (abort in ggml_hash_find_or_insert) 💬1
- [#19899](https://github.com/ollama/ollama/issues/19899) [Windows][ROCm][RX 7800 XT] High host RAM usage from mapped model pages after 100% GPU offload (Ollama 0.40.18) `bug` 💬1
- [#19900](https://github.com/ollama/ollama/issues/19900) MLX: inkling-2-mini panics on M2 Pro (macOS 26.1) — Unable to load kernel custom_kernel_relative_attention_bf16_probabilities `bug` 💬1
- [#19915](https://github.com/ollama/ollama/issues/19915) Error: CUDA: GGML_ASSERT(s2 <= uint32_t::max()) While running Inkling-2-mini on DGX Spark `bug`
- [#19911](https://github.com/ollama/ollama/issues/19911) [Bug]: `/api/chat` with an image returns HTTP 400 when message text contains `[img-`
- [#19906](https://github.com/ollama/ollama/issues/19906) Withdrawn
- [#19895](https://github.com/ollama/ollama/issues/19895) subscription roken `bug` `cloud`
- [#19891](https://github.com/ollama/ollama/issues/19891) MLX runner: prefix-cache snapshots on qwen3.8-flash-next (qwen4_exp) are paged out but never evicted; memory grows ~0.6 GiB per distinct prompt, no tools `bug`

#### 🔒 Closed Issues
- [#19888](https://github.com/ollama/ollama/issues/19888) [Bug] `inkling2` architecture fails to load: `check_tensor_dims: tensor 'blk.24.attn_q.weight' not found` (Looped Transformer 18 physical blocks)
- [#19906](https://github.com/ollama/ollama/issues/19906) Withdrawn

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,927 · **Open issues:** 5,545 · **Last push:** <1h ago

On November 26, 2026, there were no new releases for LiteLLM, but several key pull requests were merged, including the addition of the Fireworks Kimi K3.1 Pro Ultra-fast to the cost map and enhancements in type handling for response models and parameter models. Notable fixes included ensuring that vLLM's prompt token IDs are preserved in the first streamed chat chunk and improvements to the handling of output configurations in messages. The day also saw significant bug reports, including an issue (#54435) where the `_sync_guardrail_info_to_logging_obj` function could lead to performance degradation and block the event loop when dealing with numerous guardrail records.

#### ✅ Merged PRs
- [#54627](https://github.com/BerriAI/litellm/pull/54627) feat(cost-map): add Fireworks Kimi K3.1 Pro Ultra-fast
- [#54620](https://github.com/BerriAI/litellm/pull/54620) refactor(types): type the dict-style accessors on the response models and their read sites
- [#54589](https://github.com/BerriAI/litellm/pull/54589) refactor(types): type the params models' get and read keys and base URLs through a str-or-None helper
- [#51087](https://github.com/BerriAI/litellm/pull/51087) fix(hosted_vllm): keep vLLM's prompt_token_ids on the first streamed chat chunk
- [#54594](https://github.com/BerriAI/litellm/pull/54594) fix(messages): honor an explicit output_config.effort beside a thinking budget (lts/1.108.x)
- [#49846](https://github.com/BerriAI/litellm/pull/49846) fix(messages): honor an explicit output_config.effort beside a thinking budget
- [#54564](https://github.com/BerriAI/litellm/pull/54564) fix(streaming): keep OpenRouter chunks that carry only reasoning_details on lts/1.108.x (#48412)
- [#48412](https://github.com/BerriAI/litellm/pull/48412) fix(streaming): keep OpenRouter chunks that carry only reasoning_details
- [#54586](https://github.com/BerriAI/litellm/pull/54586) refactor(typing): clear 102 basedpyright Any errors across 21 files
- [#54599](https://github.com/BerriAI/litellm/pull/54599) fix(langfuse_otel): keep the dropped attribute count on a call exported as its named trace's root
- [#54593](https://github.com/BerriAI/litellm/pull/54593) test(guardrails): count only the abandoned guardrail task in the bounded execution timeout tests
- [#53836](https://github.com/BerriAI/litellm/pull/53836) fix(bedrock): send pass-through calls the model id chat completions sends
- [#54383](https://github.com/BerriAI/litellm/pull/54383) fix(anthropic): backport rate-limit gauges for streamed /v1/messages and Foundry Claude to lts/1.108.x (#54373)
- [#54587](https://github.com/BerriAI/litellm/pull/54587) fix(mcp): handle the caller Authorization on chat and responses like native /mcp
- [#54591](https://github.com/BerriAI/litellm/pull/54591) refactor(ui): remove eight unused dashboard locals
- [#54373](https://github.com/BerriAI/litellm/pull/54373) fix(anthropic): update rate-limit gauges for streamed /v1/messages and Foundry Claude
- [#54572](https://github.com/BerriAI/litellm/pull/54572) fix(perplexity): backport #53952 and #54047 to lts/1.108.x
- [#53634](https://github.com/BerriAI/litellm/pull/53634) feat(mcp): preserve encrypted credentials across profile edits
- [#54428](https://github.com/BerriAI/litellm/pull/54428) build(docker): build OpenSSL 3.5 LTS from source for Prisma instead of Wolfi libssl3 3.6
- [#54426](https://github.com/BerriAI/litellm/pull/54426) build(docker): build OpenSSL 3.5 LTS from source for Prisma
- [#53506](https://github.com/BerriAI/litellm/pull/53506) feat(mcp): isolate client credentials tokens by auth profile
- [#54515](https://github.com/BerriAI/litellm/pull/54515) perf(model-catalog): read the bundled cost map lazily and without lowering rows
- [#53621](https://github.com/BerriAI/litellm/pull/53621) feat(mcp): validate named credentials within each server
- [#54351](https://github.com/BerriAI/litellm/pull/54351) refactor(gateway-auth): make Caller a credential plus what it belongs to
- [#54398](https://github.com/BerriAI/litellm/pull/54398) feat(gateway): check a request body before /v1/messages and /ocr read it
- [#54387](https://github.com/BerriAI/litellm/pull/54387) feat(gateway): serve natively when general_settings.allowed_ips is set
- [#52238](https://github.com/BerriAI/litellm/pull/52238) feat(auth): check a request body in the auth core from data the caller hands in
- [#53794](https://github.com/BerriAI/litellm/pull/53794) feat(gateway): serve natively when general_settings.allowed_routes is set
- [#53741](https://github.com/BerriAI/litellm/pull/53741) feat(auth): decide the proxy's IP and route allowlists in the auth core
- [#54555](https://github.com/BerriAI/litellm/pull/54555) fix(cost-map): move Azure gpt-chat-latest deprecation dates to the retirement schedule
- [#54570](https://github.com/BerriAI/litellm/pull/54570) fix(pass-through): keep the stream logging handler importable without fastapi
- [#54562](https://github.com/BerriAI/litellm/pull/54562) refactor(ui): migrate logging callback forms to the form kit
- [#53750](https://github.com/BerriAI/litellm/pull/53750) fix(ocr): read Azure Document Intelligence query options from extra_body on lts/1.108.x
- [#54568](https://github.com/BerriAI/litellm/pull/54568) fix(azure-di): fall back to line pages when layout page spans overlap
- [#53402](https://github.com/BerriAI/litellm/pull/53402) fix(azure): send the deployment's api_version on audio transcriptions (lts/1.108.x)
- [#50710](https://github.com/BerriAI/litellm/pull/50710) fix(proxy): count a contents-only body on /utils/token_counter
- [#53400](https://github.com/BerriAI/litellm/pull/53400) fix(azure): send the deployment's api_version on async audio transcriptions
- [#53912](https://github.com/BerriAI/litellm/pull/53912) fix(spend-logs): store no redaction marker in guardrail fields when prompts are not stored
- [#54408](https://github.com/BerriAI/litellm/pull/54408) feat(langfuse_otel): group calls that share a metadata trace_id into one trace
- [#54316](https://github.com/BerriAI/litellm/pull/54316) fix(mcp): resolve dashboard users for inference
- [#54367](https://github.com/BerriAI/litellm/pull/54367) fix(anthropic): map /v1/messages fields onto OpenAI Responses equivalents or reject them (lts/1.108.x)
- [#54547](https://github.com/BerriAI/litellm/pull/54547) refactor(ui): move cache, coordination Redis and logging settings onto the form kit
- [#54531](https://github.com/BerriAI/litellm/pull/54531) refactor(ui): migrate cost and model toggle forms to form kit
- [#54512](https://github.com/BerriAI/litellm/pull/54512) refactor(ui): move AI Hub visibility forms onto the form kit
- [#54558](https://github.com/BerriAI/litellm/pull/54558) chore(cost-map): date four together_ai rows Together removes from serverless on 2026-12-09
- [#54560](https://github.com/BerriAI/litellm/pull/54560) feat(cost-map): add Fireworks GLM 5.3 Flex, GLM 5.3 Flash Flex and the documented GLM 5.3 Spot id
- [#54545](https://github.com/BerriAI/litellm/pull/54545) fix(google_genai): log streamGenerateContent calls when the client disconnects early
- [#54551](https://github.com/BerriAI/litellm/pull/54551) fix(pass-through): bill OpenAI pass-through calls at the deployment's custom price
- [#54427](https://github.com/BerriAI/litellm/pull/54427) fix(cost): keep a deployment's custom pricing when its id is another provider's built-in model
- [#54416](https://github.com/BerriAI/litellm/pull/54416) fix(proxy): start and serve the proxy with a database on Python 3.10 and prisma 0.13+
- [#54556](https://github.com/BerriAI/litellm/pull/54556) test(cost): expect flat per-image costs as output cost in the stored breakdown
- [#54554](https://github.com/BerriAI/litellm/pull/54554) test(router): pin the clock in the mixed itpm and rpm limit test so a minute rollover cannot move its rpm counter
- [#54550](https://github.com/BerriAI/litellm/pull/54550) test(auth): write the fake key store's timestamps with +00:00 like the Rust key repository
- [#54506](https://github.com/BerriAI/litellm/pull/54506) refactor(ui): migrate admin display settings to the form kit
- [#54541](https://github.com/BerriAI/litellm/pull/54541) chore(ui): regenerate the dashboard API types for customer_budget_response_headers
- [#54248](https://github.com/BerriAI/litellm/pull/54248) fix(lens): use the dashboard session in embedded Lens
- [#54523](https://github.com/BerriAI/litellm/pull/54523) feat(gateway): honor user_api_key_cache_ttl and user_api_key_cache_max_size
- [#54532](https://github.com/BerriAI/litellm/pull/54532) test(access-groups): store the two groups in scan order instead of asserting the order Postgres chose
- [#54525](https://github.com/BerriAI/litellm/pull/54525) test(router): read usage across the minute the request ran in
- [#54502](https://github.com/BerriAI/litellm/pull/54502) fix(guardrails): stop Presidio logging_only from masking the client response
- [#54273](https://github.com/BerriAI/litellm/pull/54273) fix(embeddings): send request-shaped extra_body fields at the provider's documented path
- [#54434](https://github.com/BerriAI/litellm/pull/54434) fix(vertex_ai): cache the whole conversation prefix up to the cache_control block so Gemini sees turns in order
- [#54483](https://github.com/BerriAI/litellm/pull/54483) feat(proxy): opt-in response headers for app customer org and member budgets per window
- [#54510](https://github.com/BerriAI/litellm/pull/54510) fix(ui): remove the Customer Management beta badge
- [#54500](https://github.com/BerriAI/litellm/pull/54500) fix(caching): preserve caller message limits across chat bridges
- [#54493](https://github.com/BerriAI/litellm/pull/54493) fix(alerting): retire completed requests and prevent hanging alert starvation
- [#54417](https://github.com/BerriAI/litellm/pull/54417) fix(proxy): retry failed audit log writes and count the ones that stay lost
- [#54505](https://github.com/BerriAI/litellm/pull/54505) fix(alerting): skip budget alert email when no receiver email is set
- [#54508](https://github.com/BerriAI/litellm/pull/54508) test(integration): backport main's Gemini cut-stream vertex_ai assertion update to lts/1.108.x
- [#53429](https://github.com/BerriAI/litellm/pull/53429) fix(gemini): return an error instead of an empty 200 when a Gemini image request gets no image on lts/1.108.x
- [#29125](https://github.com/BerriAI/litellm/pull/29125) fix(gemini): return an error instead of an empty 200 when a Gemini image request gets no image
- [#54496](https://github.com/BerriAI/litellm/pull/54496) fix(responses): preserve refusal text in bridged chat streams
- [#54327](https://github.com/BerriAI/litellm/pull/54327) fix(guardrails): scan the system prompt and tool results in Bedrock during_call on /v1/messages (lts/1.108.x)
- [#54463](https://github.com/BerriAI/litellm/pull/54463) fix(streaming): keep streamed usage when SSE lines without data precede the usage event (lts/1.108.x)
- [#54052](https://github.com/BerriAI/litellm/pull/54052) fix(streaming): keep streamed usage when SSE lines without data precede the usage event
- [#54478](https://github.com/BerriAI/litellm/pull/54478) feat(otel): add option to disable background service spans
- [#53998](https://github.com/BerriAI/litellm/pull/53998) feat(gateway-inference): send the rest of the custom x-litellm headers
- [#53988](https://github.com/BerriAI/litellm/pull/53988) feat(gateway-inference): render response headers from the call record
- [#53984](https://github.com/BerriAI/litellm/pull/53984) feat(gateway-inference): record the served attempt
- [#53982](https://github.com/BerriAI/litellm/pull/53982) chore(rust): refuse a bare tokio::spawn
- [#54499](https://github.com/BerriAI/litellm/pull/54499) feat(cost-map): add Fireworks Inkling 2 Small serverless row
- [#54490](https://github.com/BerriAI/litellm/pull/54490) feat(mcp): add Granola, Attio and Pylon to the MCP catalog and preselect OAuth for hosted OAuth servers
- [#54470](https://github.com/BerriAI/litellm/pull/54470) fix(cost): store cost breakdown for image generation and edit calls
- [#54304](https://github.com/BerriAI/litellm/pull/54304) fix(bedrock): bill Nova audio and video embeddings by clip length when the deployment sets only a token price
- [#54489](https://github.com/BerriAI/litellm/pull/54489) fix(proxy): backport #54283 and #54298 to rc/1.112.0
- [#54323](https://github.com/BerriAI/litellm/pull/54323) fix(guardrails): keep /v1/messages tools the guardrail left unchanged exactly as sent (lts/1.108.x)
- [#54488](https://github.com/BerriAI/litellm/pull/54488) fix(prometheus): emit every declared label on litellm_deployment_cooled_down
- [#54173](https://github.com/BerriAI/litellm/pull/54173) fix(anthropic): map /v1/messages fields onto OpenAI Responses equivalents or reject them
- [#54449](https://github.com/BerriAI/litellm/pull/54449) refactor(ui): move MCP Tool Search, MCP Semantic Filter, and Web Search Interception settings onto the form kit
- [#54308](https://github.com/BerriAI/litellm/pull/54308) fix(proxy): fence the Gemini pass-through file list by owner
- [#54473](https://github.com/BerriAI/litellm/pull/54473) fix(ui): backport team service account key model edits to lts/1.108.x (#49970)
- [#54479](https://github.com/BerriAI/litellm/pull/54479) fix(proxy): keep guardrail prompt text out of no-log spend logs when the collector is on
- [#54368](https://github.com/BerriAI/litellm/pull/54368) refactor(ui): move the edit customer dialog onto the form kit
- [#49999](https://github.com/BerriAI/litellm/pull/49999) feat(otel): add Mixpanel OpenTelemetry v2 preset callback
- [#54475](https://github.com/BerriAI/litellm/pull/54475) test(bedrock_mantle): expect the error event a rejected /v1/messages stream retry now ends with
- [#54474](https://github.com/BerriAI/litellm/pull/54474) test(spend-logs): compare a failed batch's retry time with the clock read before the failure
- [#54472](https://github.com/BerriAI/litellm/pull/54472) fix(responses): forward a Responses input that is one object instead of failing with a 500
- [#54464](https://github.com/BerriAI/litellm/pull/54464) chore: bump litellm to 1.108.18 on lts/1.108.x
- [#54393](https://github.com/BerriAI/litellm/pull/54393) fix(accounting): initialize Prometheus collectors lazily instead of at import time
- [#53813](https://github.com/BerriAI/litellm/pull/53813) fix(cost): bill svg_usage on Responses image_generation tool calls
- [#54410](https://github.com/BerriAI/litellm/pull/54410) fix(caching): upgrade redisvl to 0.26.0 so the redis-semantic cache works with restricted Redis users
- [#54338](https://github.com/BerriAI/litellm/pull/54338) fix(cost-map): drop max_tokens from the huawei_maas rows and run the cost map tests on cost map PRs
- [#54213](https://github.com/BerriAI/litellm/pull/54213) feat(anthropic-messages): per-deployment deferred_tools handling on the /v1/messages bridge (lts/1.108.x)
- [#54183](https://github.com/BerriAI/litellm/pull/54183) feat(anthropic-messages): per-deployment deferred_tools handling on the /v1/messages bridge
- [#54401](https://github.com/BerriAI/litellm/pull/54401) fix(rate-limit): open the rate-limit window when a token charge finds none
- [#54105](https://github.com/BerriAI/litellm/pull/54105) fix(caching): release Redis caller frames without cyclic GC
- [#54454](https://github.com/BerriAI/litellm/pull/54454) fix(cost-map): point chatgpt deprecation_source at learn.chatgpt.com/docs/models

#### 🐛 New Issues
- [#54362](https://github.com/BerriAI/litellm/issues/54362) [Feature]: Show accounting delays on the admin Usage page 💬4
- [#54435](https://github.com/BerriAI/litellm/issues/54435) [Bug]: _sync_guardrail_info_to_logging_obj costs O(N³) per request and blocks the event loop when a guardrail records many entries 💬3
- [#54369](https://github.com/BerriAI/litellm/issues/54369) [Bug]: `import litellm` can crash with "cannot import name 'LoggerContext' from partially initialized module" when the cost-map fetch fails at import (1.105.3) 💬3
- [#54467](https://github.com/BerriAI/litellm/issues/54467) [Bug]: /team/update replaces team metadata instead of merging, silently dropping metadata.logging (incl. turn_off_message_logging) 💬2
- [#54390](https://github.com/BerriAI/litellm/issues/54390) [Bug]: OpenAI passthrough cost ignores the router deployment's custom pricing (model_info input/output costs) `llm translation` 💬2
- [#54389](https://github.com/BerriAI/litellm/issues/54389) [Bug]: deployment_pricing_model_info drops a deployment's custom pricing when its model_info.id is a built-in model name for another provider `llm translation` 💬2
- [#54411](https://github.com/BerriAI/litellm/issues/54411) [Bug]: MCP tool search results in 500 internal server error (bug or PEBCAK?) `bug` `llm translation` 💬2
- [#54592](https://github.com/BerriAI/litellm/issues/54592) [Bug]: Dashboard Lens sidebar tab shows installation instructions although GET /lens/service reports connected: true (v1.111.0, Lens 0.4.0) 💬1
- [#54561](https://github.com/BerriAI/litellm/issues/54561) [Bug]: Bedrock Converse rewrites tool root schemas, so signed thinking fails when a conversation moves between Bedrock and Vertex `llm translation` 💬1
- [#54595](https://github.com/BerriAI/litellm/issues/54595) [Bug]: Native Messages stream that ends without message_stop is recorded as a success `llm translation` 💬1
- [#54385](https://github.com/BerriAI/litellm/issues/54385) [Bug]: `bug` 💬1
- [#54438](https://github.com/BerriAI/litellm/issues/54438) [Bug]: Streamed Gemini (streamGenerateContent) calls lose their success logging when the client closes after the last event `bug` `llm translation` 💬1
- [#54442](https://github.com/BerriAI/litellm/issues/54442) [Feature]: `trim_messages()` should preserve assistant tool calls and their corresponding tool responses `enhancement` 💬1
- [#54391](https://github.com/BerriAI/litellm/issues/54391) [Bug]: Prometheus histograms missing in single-worker mode with PROMETHEUS_MULTIPROC_DIR (regression since v1.110.0) `llm translation` 💬1
- [#54441](https://github.com/BerriAI/litellm/issues/54441) [Bug]: Periodic MCP reload (30s) rebuilds stdio servers and freezes the event loop when updated_at is NULL `bug` 💬1
- [#54504](https://github.com/BerriAI/litellm/issues/54504) [Bug]: responses→chat bridge emits content-less assistant messages for dangling reasoning items — strict backends (llama.cpp) 400 `llm translation`
- [#54598](https://github.com/BerriAI/litellm/issues/54598) [Feature]: Datadog logger should apply secret redaction to messages and tool-call arguments
- [#54596](https://github.com/BerriAI/litellm/issues/54596) [Bug]: aresponses with mock_response ignores stream=True and mock_delay `llm translation`
- [#54597](https://github.com/BerriAI/litellm/issues/54597) [Feature]: Request-scoped deployment avoidance that feeds _excluded_deployment_ids before session affinity
- [#54576](https://github.com/BerriAI/litellm/issues/54576) [Feature]: Native Tripo passthrough routes with asynchronous credit billing
- [#54549](https://github.com/BerriAI/litellm/issues/54549) [Bug]: Vertex Interactions lose their deployment on ID-only proxy requests `llm translation`
- [#54462](https://github.com/BerriAI/litellm/issues/54462) [Feature]: Customer Management budget state as response headers (app customer org / member), incl. streaming and 422 `llm translation`
- [#54439](https://github.com/BerriAI/litellm/issues/54439) [Bug]: image_generation / image_edit calls store no cost_breakdown `llm translation`
- [#54494](https://github.com/BerriAI/litellm/issues/54494) [Bug]: 1.108 LTS: refused deployment pick is counted against the next fallback deployment and cools it down (please backport #46183)
- [#54436](https://github.com/BerriAI/litellm/issues/54436) [Bug]: vertex_ai Claude rows store "not sooner than" floors and wrong shutdown dates as deprecation_date `llm translation`
- [#54452](https://github.com/BerriAI/litellm/issues/54452) [Feature]: Show provider prompt cache tokens (read / write) in the Request Logs table and session totals `llm translation`
- [#54453](https://github.com/BerriAI/litellm/issues/54453) [Bug]: Home page still shown to internal users after being unchecked in Internal User Page Visibility `bug`
- [#54448](https://github.com/BerriAI/litellm/issues/54448) [Bug]: A2A agent card served as protocolVersion 1.0 still uses flat 0.3 securitySchemes/security (strict 1.0 parsers reject it) `bug`
- [#54404](https://github.com/BerriAI/litellm/issues/54404) [Perf]: Long Responses streams repeatedly scan optional choice metadata at EOF
- [#54421](https://github.com/BerriAI/litellm/issues/54421) [Bug]: /guardrails/apply_guardrail drops guardrail HTTPException headers (e.g. Retry-After) that /v1/chat/completions keeps `llm translation`
- [#54409](https://github.com/BerriAI/litellm/issues/54409) [Bug]: GitHub Copilot Responses-only models fail on /v1/chat/completions bridge when using GitHub App credential with uploaded private key
- [#54370](https://github.com/BerriAI/litellm/issues/54370) [Feature]: Add BeyondGuard as a guardrail provider `enhancement` `llm translation`

#### 🔒 Closed Issues
- [#47046](https://github.com/BerriAI/litellm/issues/47046) [Bug] Vertex/Gemini context caching reorders the conversation when the cache_control block is not a prefix, and modify_params drops system_instruction
- [#46059](https://github.com/BerriAI/litellm/issues/46059) [Bug]: watsonx streamed usage is lost; the proxy reports its own token estimate instead
- [#53079](https://github.com/BerriAI/litellm/issues/53079) [Bug]: Chat UI returns MCP permission 403 while the same user's team-bound key succeeds on /responses
- [#38689](https://github.com/BerriAI/litellm/issues/38689) [Bug]: Intermittent ~16.7s time-to-first-byte (TTFB) on streaming Anthropic /v1/messages requests, not reproducible against Bedrock directly
- [#47605](https://github.com/BerriAI/litellm/issues/47605) [Bug]: Presidio guardrail in logging_only mode masks the response returned to the client (streaming and non-streaming)
- [#43583](https://github.com/BerriAI/litellm/issues/43583) [Bug]: audit-log writes are fire-and-forget tasks, so a worker shutdown drops records for calls that returned 200
- [#35171](https://github.com/BerriAI/litellm/issues/35171) [Bug]: MCP tool_name_to_display_name is ignored for config.yaml servers
- [#37289](https://github.com/BerriAI/litellm/issues/37289) [Bug]: /{provider}/v1/files shadows the /anthropic passthrough → 422 "purpose Field required"
- [#54467](https://github.com/BerriAI/litellm/issues/54467) [Bug]: /team/update replaces team metadata instead of merging, silently dropping metadata.logging (incl. turn_off_message_logging)
- [#54390](https://github.com/BerriAI/litellm/issues/54390) [Bug]: OpenAI passthrough cost ignores the router deployment's custom pricing (model_info input/output costs)
- [#54389](https://github.com/BerriAI/litellm/issues/54389) [Bug]: deployment_pricing_model_info drops a deployment's custom pricing when its model_info.id is a built-in model name for another provider
- [#37479](https://github.com/BerriAI/litellm/issues/37479) additional_drop_params strips fields from message content blocks, not just top-level request params
- [#37578](https://github.com/BerriAI/litellm/issues/37578) SendGridEmailLogger: add Reply-To support via SENDGRID_REPLY_TO_EMAIL env var
- [#37581](https://github.com/BerriAI/litellm/issues/37581) [Bug]: A2A chat-completions shim ("model": "a2a/<name>") returns "no healthy deployments" when wildcard model groups exist
- [#37638](https://github.com/BerriAI/litellm/issues/37638) [Bug]: Guardrail mode=block silently behaves as redact on provider-native passthrough routes (e.g. Gemini generateContent) — only bedrock is wired up
- [#51207](https://github.com/BerriAI/litellm/issues/51207) [Bug]: redis-semantic cache can't start with a Redis user that excludes dangerous commands, because the Docker image ships redisvl 0.4.1
- [#54385](https://github.com/BerriAI/litellm/issues/54385) [Bug]:
- [#54438](https://github.com/BerriAI/litellm/issues/54438) [Bug]: Streamed Gemini (streamGenerateContent) calls lose their success logging when the client closes after the last event
- [#37599](https://github.com/BerriAI/litellm/issues/37599) [Bug]: Rate Limit Error Mapping
- [#37617](https://github.com/BerriAI/litellm/issues/37617) PATCH /update/mcp_semantic_filter_settings returns HTML 504 when enabling semantic filter
- [#54391](https://github.com/BerriAI/litellm/issues/54391) [Bug]: Prometheus histograms missing in single-worker mode with PROMETHEUS_MULTIPROC_DIR (regression since v1.110.0)
- [#53811](https://github.com/BerriAI/litellm/issues/53811) [Bug]: Responses image_generation tool with output_format=svg: svg_usage (the SVG author model's tokens) is never billed
- [#48366](https://github.com/BerriAI/litellm/issues/48366) [Bug]: Responses API chat completions bridge silently ignores a previous_response_id it cannot resolve
- [#39114](https://github.com/BerriAI/litellm/issues/39114) [Bug]: Prisma proxy client fails to connect with prisma>=0.13 due to mangled-attribute write
- [#54462](https://github.com/BerriAI/litellm/issues/54462) [Feature]: Customer Management budget state as response headers (app customer org / member), incl. streaming and 422
- [#49928](https://github.com/BerriAI/litellm/issues/49928) [Bug]: max_messages is counted on the translated chat messages for responses() and anthropic.messages on bridged providers
- [#44636](https://github.com/BerriAI/litellm/issues/44636) [Bug]: Hanging-request detector alerts completed requests and misses hangs behind the oldest batch
- [#39203](https://github.com/BerriAI/litellm/issues/39203) [Bug]: Chat-to-Responses stream bridge drops response.refusal events
- [#54439](https://github.com/BerriAI/litellm/issues/54439) [Bug]: image_generation / image_edit calls store no cost_breakdown
- [#49639](https://github.com/BerriAI/litellm/issues/49639) [Bug]: MCP gateway OAuth endpoints return error responses without logging why

### Unsloth (`unslothai/unsloth`)

**Stars:** 80,267 · **Open issues:** 652 · **Last push:** <1h ago

On November 26, 2026, Unsloth released version v0.1.925-beta, which introduced significant enhancements to Inkling finetuning, allowing users to fine-tune models 1.8 to 3.1 times faster while using 50% less VRAM, with improved training options available on Kaggle's cloud. Among the notable merged features, updates included enhancements to the Studio video progress tracking and the handling of LoRA updates during export, addressing efficiency and usability. Additionally, a bug was reported regarding decision models in the Clef framework, which involves discrepancies in how JSON string states are processed during training and prediction compared to exported models.

#### 🚀 New Releases
- [v0.1.925-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.925-beta) Inkling finetuning + perf fixes

#### ✅ Merged PRs
- [#19621](https://github.com/unslothai/unsloth/pull/19621) Studio video: count hosted prequant downloads in the load progress
- [#19480](https://github.com/unslothai/unsloth/pull/19480) Show Unsloth after Windows in-app updates
- [#19676](https://github.com/unslothai/unsloth/pull/19676) Report how much of a LoRA update survives FP8 / FP4 merged export
- [#19675](https://github.com/unslothai/unsloth/pull/19675) Block compile re-raises CheckpointError; ST unpadding honours cache=; drop CUTLASS-only compile knobs
- [#19690](https://github.com/unslothai/unsloth/pull/19690) Repeat failed document upload browser cases at the end of the driver log
- [#19686](https://github.com/unslothai/unsloth/pull/19686) Test the GRPO image guard by what it guards, not by its line number
- [#19684](https://github.com/unslothai/unsloth/pull/19684) Studio LTX vocoder: keep the deterministic cuDNN scope off on AMD SDK ROCm wheels
- [#19591](https://github.com/unslothai/unsloth/pull/19591) Studio Qwen-Image-2.1: keep one prefix K/V copy when one prompt renders n images
- [#19588](https://github.com/unslothai/unsloth/pull/19588) Studio diffusion: keep the sm120 fused W6A8 tile working on Triton 3.9 (no block pointers)
- [#19678](https://github.com/unslothai/unsloth/pull/19678) Expert parallel: unblock HunYuan-V1-MoE, refuse gpt-oss 4-bit per-expert experts early
- [#19682](https://github.com/unslothai/unsloth/pull/19682) Tests: read the saved-attention auto cards from the zoo table, now that sm120 is measured
- [#19681](https://github.com/unslothai/unsloth/pull/19681) Tests: size the auto-placement fake cards against a pinned per-card reserve, not the host OS
- [#19679](https://github.com/unslothai/unsloth/pull/19679) Tests: follow the video request size into its generateCanvas memo
- [#19559](https://github.com/unslothai/unsloth/pull/19559) EP: dense local routing weights for gpt-oss on transformers 4.x
- [#19670](https://github.com/unslothai/unsloth/pull/19670) Studio: read the prequant source etag through a Windows extended-length link target
- [#19674](https://github.com/unslothai/unsloth/pull/19674) Tests: pin the deb GStreamer recommends to the three packages generated videos need
- [#19672](https://github.com/unslothai/unsloth/pull/19672) Tests: skip the inductor LoRA weight-0 test where no host C++ compiler exists
- [#19673](https://github.com/unslothai/unsloth/pull/19673) i18n: translate the Desktop missing-video-decoders notice in every overlay
- [#19616](https://github.com/unslothai/unsloth/pull/19616) Studio Mac: keep the Qwen-Image VAE causal conv zero-pad patch on MPS
- [#19592](https://github.com/unslothai/unsloth/pull/19592) Studio LTX-2.5 vocoder: deterministic cuDNN algorithms on NVIDIA
- [#19560](https://github.com/unslothai/unsloth/pull/19560) GRPO: request untruncated vLLM rollout logprobs for the IS correction
- [#19585](https://github.com/unslothai/unsloth/pull/19585) PP env: opt-in interleaved1f1b schedule
- [#19565](https://github.com/unslothai/unsloth/pull/19565) Expert parallel x Ulysses context parallel on the same ranks
- [#19622](https://github.com/unslothai/unsloth/pull/19622) Studio video: MiniMax-H3 Match source sends the size the fields show
- [#19562](https://github.com/unslothai/unsloth/pull/19562) Block compile: build the rebuilt attention mask outside inference_mode
- [#19648](https://github.com/unslothai/unsloth/pull/19648) Studio diffusion: keep LoRAs unfused in speed mode Off, and show the fuse state in Loaded build
- [#19638](https://github.com/unslothai/unsloth/pull/19638) Studio: say in the GPU hints that multi-node is not part of this release
- [#19637](https://github.com/unslothai/unsloth/pull/19637) Studio diffusion training: show a finished or resumed run's family in the train form
- [#19636](https://github.com/unslothai/unsloth/pull/19636) Studio Desktop: recommend gst-libav in the deb and show the install command when it is missing
- [#19561](https://github.com/unslothai/unsloth/pull/19561) Optimizer state offload: fall back to serial copies when the staging ring does not fit
- [#19639](https://github.com/unslothai/unsloth/pull/19639) Tests: saved attention dispatch tests independent of the host GPU's automatic length
- [#19571](https://github.com/unslothai/unsloth/pull/19571) Studio diffusion: load LoRA files whose header was written by a newer PEFT
- [#19570](https://github.com/unslothai/unsloth/pull/19570) Studio MiniMax-H3 video: run the denoise in expandable allocator segments
- [#19569](https://github.com/unslothai/unsloth/pull/19569) Studio Windows: pair torch 2.15 with triton-windows 3.9
- [#19568](https://github.com/unslothai/unsloth/pull/19568) Vision: skip the backward of frozen vision and audio towers
- [#19589](https://github.com/unslothai/unsloth/pull/19589) GRPO: refuse TRL's in-place vLLM sync for quantized models on TRL 0.28 to 1.18
- [#19563](https://github.com/unslothai/unsloth/pull/19563) Studio MiniMax-H3 video: INT8 exact-start policy as a GPU lever golden cell
- [#19547](https://github.com/unslothai/unsloth/pull/19547) Studio diffusion: run the deferred int8 CUTLASS race before render 3 when renders come back to back
- [#19617](https://github.com/unslothai/unsloth/pull/19617) CI: move the test_cp_* gloo files into their own shard so gloo fits its cap
- [#19553](https://github.com/unslothai/unsloth/pull/19553) Studio: Krea 2 text fusion, text projection and rotary table once per prompt
- [#19095](https://github.com/unslothai/unsloth/pull/19095) Studio: retry a ROCm llama-server that hard-crashes at startup with the bundled runtime
- [#19554](https://github.com/unslothai/unsloth/pull/19554) Studio: fold the Wan-lineage VAE upsample into one transposed conv
- [#19552](https://github.com/unslothai/unsloth/pull/19552) Studio: FLUX.3 Klein Base guidance branches share one image prefix per step
- [#19601](https://github.com/unslothai/unsloth/pull/19601) CI: split test_pp_env_gloo.py into its own shard so gloo-pp fits its cap
- [#19549](https://github.com/unslothai/unsloth/pull/19549) Studio T4 small host: read the hosted INT8 ConvRot Qwen-Image-2.1 DiT at AUTO
- [#19594](https://github.com/unslothai/unsloth/pull/19594) CI: name a test that hangs in C code instead of timing out the CPU shard silently
- [#19460](https://github.com/unslothai/unsloth/pull/19460) Studio diffusion: single-process tensor parallelism for Qwen-Image-2.1 over two cards (opt-in)
- [#19508](https://github.com/unslothai/unsloth/pull/19508) Saved attention: register the ROCm SDPA selector in automatic mode
- [#19548](https://github.com/unslothai/unsloth/pull/19548) Expert parallel: refuse unsupported compositions at launch and at every entry point
- [#19556](https://github.com/unslothai/unsloth/pull/19556) Expert parallel: keep the expert dispatch out of compiled blocks and every rank in the collectives
- [#19555](https://github.com/unslothai/unsloth/pull/19555) Expert parallel: atomic checkpoint writes agreed across ranks
- [#19498](https://github.com/unslothai/unsloth/pull/19498) Expert parallel: find expert stacks by shape (Nemotron-H) and slice block-FP8 experts
- [#19558](https://github.com/unslothai/unsloth/pull/19558) Tests: read checked-in sources as utf-8 in the VAE no-clone and Qwen-Image-Edit tests
- [#19526](https://github.com/unslothai/unsloth/pull/19526) Layer split: each card's decoder layers read that card's RoPE tables
- [#19527](https://github.com/unslothai/unsloth/pull/19527) Context parallel: exact MoE router aux loss from statistics summed over the cp group
- [#19534](https://github.com/unslothai/unsloth/pull/19534) GRPO: restore the vLLM importance sampling correction as the default
- [#19539](https://github.com/unslothai/unsloth/pull/19539) Studio: render Qwen-Image-2.1 prompts of different text lengths in separate calls
- [#19530](https://github.com/unslothai/unsloth/pull/19530) Studio: pass mm_token_type_ids to the Qwen-Image-Edit text encoder
- [#19532](https://github.com/unslothai/unsloth/pull/19532) Studio: drop the input clone in Wan 2.2 / Qwen-Image-2.1 VAE residual blocks
- [#19540](https://github.com/unslothai/unsloth/pull/19540) Studio diffusion: keep a private copy of saved attention outputs around compiled blocks
- [#19531](https://github.com/unslothai/unsloth/pull/19531) Studio: compute SDXL LoRA noisy latents and v-target in fp32
- [#19503](https://github.com/unslothai/unsloth/pull/19503) Pipeline parallel: run the whole gradient accumulation window as one schedule step
- [#19542](https://github.com/unslothai/unsloth/pull/19542) Expert parallel: sum expert gradients over replicas in bounded buckets
- [#19507](https://github.com/unslothai/unsloth/pull/19507) FSDP2: keep trainable float32 A_log / dt_bias out of the 16-bit gather
- [#19466](https://github.com/unslothai/unsloth/pull/19466) Studio: speech filters and speaker split on Separate
- [#19541](https://github.com/unslothai/unsloth/pull/19541) Tests: read checked-in sources as utf-8 in the int8 nearest-family and parallel evidence tests
- [#19524](https://github.com/unslothai/unsloth/pull/19524) DDP: balance tokens across data-parallel ranks by default
- [#19491](https://github.com/unslothai/unsloth/pull/19491) Expert parallel tests: mixtral, qwen2_moe, qwen3_next, qwen3_5_moe, gemma4 and deepseek_v3 families
- [#19492](https://github.com/unslothai/unsloth/pull/19492) Expert parallel in the capability registry and Studio auto plan; refuse vLLM under EP
- [#19487](https://github.com/unslothai/unsloth/pull/19487) Expert parallel: load only each rank's experts for 16-bit and pre-quantized 4-bit checkpoints
- [#19493](https://github.com/unslothai/unsloth/pull/19493) parallel_capabilities: evidence cells for pp x tp, pp x dp and dp x tp
- [#19456](https://github.com/unslothai/unsloth/pull/19456) Clef decision models: read a string state as written, as serving does
- [#19533](https://github.com/unslothai/unsloth/pull/19533) Security audit: re-pin reviewed unsloth-zoo 2026.11.12 sites in the package scan baseline
- [#19517](https://github.com/unslothai/unsloth/pull/19517) AsyncGRPO: report logprobs_mode in server_info, as TRL main checks it
- [#19516](https://github.com/unslothai/unsloth/pull/19516) GRPO old / ref scoring: lay rows out by the zoo's real-token mask when pad == eos
- [#19511](https://github.com/unslothai/unsloth/pull/19511) Q-GaLore: restore weight, gradient and weight decay when a projected step fails
- [#19510](https://github.com/unslothai/unsloth/pull/19510) OOM no longer latches two fast paths off; prefill bias, ZeRO-3 prefix share, torch 2.6 FP8 op schema
- [#19528](https://github.com/unslothai/unsloth/pull/19528) Studio code blocks: a throttled refresh no longer replaces the exact result cached for the same body
- [#19479](https://github.com/unslothai/unsloth/pull/19479) Studio chat: tighter gap above the composer, no stuck padding after opening a chat
- [#19523](https://github.com/unslothai/unsloth/pull/19523) Decision models: name the triton check, so the compile gate test runs on hosts without triton
- [#19391](https://github.com/unslothai/unsloth/pull/19391) Studio: INT8 attention offers newer NVIDIA archs the nearest measured config
- [#19520](https://github.com/unslothai/unsloth/pull/19520) Lint CI: retry the compare API for the merge base, one file per page
- [#19490](https://github.com/unslothai/unsloth/pull/19490) ROCm: keep the static flex compile and Inkling 2 eager policy on AMD SDK / Radeon wheels
- [#19426](https://github.com/unslothai/unsloth/pull/19426) fix(studio): replay Inkling tool turns cleanly in the server tool loop
- [#19519](https://github.com/unslothai/unsloth/pull/19519) Tests: gate the PP router sync-free GPU test on the real CUDA probe
- [#19514](https://github.com/unslothai/unsloth/pull/19514) Ulysses CP: query-chunked sdpa mask for long packed or windowed sequences
- [#19502](https://github.com/unslothai/unsloth/pull/19502) Optimizer state offload: overlap chunk copies on FSDP2 DTensor state (2x T4 FSDP2 -14.8% per step)
- [#19500](https://github.com/unslothai/unsloth/pull/19500) GRPO scoring: free each padded-loop chunk's logits before the next forward
- [#19485](https://github.com/unslothai/unsloth/pull/19485) Fix chat jumping after scrolling to the bottom
- [#19504](https://github.com/unslothai/unsloth/pull/19504) GRPO: manual DDP gradient sync skips DDP-ignored parameters (expert parallel shards)
- [#19512](https://github.com/unslothai/unsloth/pull/19512) Tests: lift _model_forced_float32 into the forced float32 scaler harness
- [#19427](https://github.com/unslothai/unsloth/pull/19427) Studio: keep the AppImage on its bundled runtime without autoaudiosink
- [#19509](https://github.com/unslothai/unsloth/pull/19509) Follow #19464: remove the import metadata cache last again, and catch its tests up
- [#19417](https://github.com/unslothai/unsloth/pull/19417) Model picker: stop the list flickering while it opens, round full-bleed logos
- [#19489](https://github.com/unslothai/unsloth/pull/19489) PP router statistics: count unmasked expert assignments without a host sync
- [#19488](https://github.com/unslothai/unsloth/pull/19488) int4 packed: do not cache an OOM during the fast-path probe
- [#19506](https://github.com/unslothai/unsloth/pull/19506) Bump install.sh / install.ps1 pins to unsloth>=2026.11.12
- [#19505](https://github.com/unslothai/unsloth/pull/19505) Tests: follow #19464 in the from_pretrained precision harness and the fp8 fused-loss test
- [#19314](https://github.com/unslothai/unsloth/pull/19314) Studio: read a JSON or JSONL seed that starts with a UTF-8 BOM
- [#19390](https://github.com/unslothai/unsloth/pull/19390) Studio: a CPU test that fails a PR when it costs any GPU a speed lever
- [#19428](https://github.com/unslothai/unsloth/pull/19428) Studio: keep a tool's exit status when there is no room for its output
- [#19430](https://github.com/unslothai/unsloth/pull/19430) Studio: show in-app dictation on the API page and keep its llama-server log
- [#19411](https://github.com/unslothai/unsloth/pull/19411) Studio: T4 loads Qwen-Image-2.1's hosted INT8 DiT instead of quantizing the dense one
- [#19484](https://github.com/unslothai/unsloth/pull/19484) Studio: a --fit-target launch that crashes on Auto's pick retries on every card Auto could have used
- [#19483](https://github.com/unslothai/unsloth/pull/19483) Tests: stamp the forced float32 decision on the trainer block's fake model, as every Unsloth load does
- [#19443](https://github.com/unslothai/unsloth/pull/19443) Studio: pin MXC 1.1.0 where Windows has the built-in container, fall back to 1.0.1 elsewhere
- [#19445](https://github.com/unslothai/unsloth/pull/19445) Studio Translate: Hy-MT3 models, with the FP8 uploads on FP8-capable GPUs
- [#19468](https://github.com/unslothai/unsloth/pull/19468) Studio onboarding: one clean dialog edge, no click-outside hint
- [#19469](https://github.com/unslothai/unsloth/pull/19469) Studio Hub: show the unreachable message for failures without their own copy
- [#19467](https://github.com/unslothai/unsloth/pull/19467) Studio sd.cpp: cap prebuilt symlink chains at macOS's 32-link limit there
- [#19465](https://github.com/unslothai/unsloth/pull/19465) Studio: install the pinned sd.cpp prebuilt when the GitHub releases API is rate limited
- [#19464](https://github.com/unslothai/unsloth/pull/19464) Keep vLLM's cuDNN SDPA switch-off and zoo's fused forward to the models Unsloth loads
- [#19470](https://github.com/unslothai/unsloth/pull/19470) Studio Translate: Keyline swap icon, aligned swap button and BETA badge
- [#19453](https://github.com/unslothai/unsloth/pull/19453) Studio: recheck the resume weight index right before training
- [#19367](https://github.com/unslothai/unsloth/pull/19367) Studio: keep a tool-call example quoted in code in chat replies and history
- [#19478](https://github.com/unslothai/unsloth/pull/19478) Fix GRPO import on vLLM 0.11 - 0.15 with TRL >= 1.11 (missing vllm.distributed.weight_transfer)
- [#19416](https://github.com/unslothai/unsloth/pull/19416) Studio: re-land the chat Files menu (#19172) once long chats stream without stutter
- [#19462](https://github.com/unslothai/unsloth/pull/19462) Inkling 2: make LoRA GGUF export work (checkpoint names and per-expert factors for llama.cpp's converter)
- [#19471](https://github.com/unslothai/unsloth/pull/19471) Studio tests: fail the sd.cpp finalise step that runs on Windows too
- [#19458](https://github.com/unslothai/unsloth/pull/19458) Studio tests: undo a leaked SDPA align wrapper; video load tests independent of host RAM
- [#19363](https://github.com/unslothai/unsloth/pull/19363) Mount the host HF_HUB_CACHE in the Docker launcher
- [#19269](https://github.com/unslothai/unsloth/pull/19269) Studio: honour a per-GPU --fit-target on loads that fit
- [#19433](https://github.com/unslothai/unsloth/pull/19433) generate: turn MoE router logits off when TRL left them on (Qwen3.8-Flash-Next inference after SFT)
- [#19440](https://github.com/unslothai/unsloth/pull/19440) Studio: retry a transient cuMemSetAccess NOT_READY on Windows before unmapping a new stable range
- [#19437](https://github.com/unslothai/unsloth/pull/19437) Studio training: drop the Qwen-Image-2.1 text encoder lm_head while caching captions
- [#19419](https://github.com/unslothai/unsloth/pull/19419) Studio LTX-2.5: gather prompt rows from the text encoder's file-mapped embedding table
- [#19414](https://github.com/unslothai/unsloth/pull/19414) Studio LTX-2.3 / 2.5: run the audio vocoder in float32, as the reference does
- [#19435](https://github.com/unslothai/unsloth/pull/19435) Optimizer state offload: overlap chunk copies with the step (T4 -14%, L4 -31%, A100 -43% per step)
- [#19463](https://github.com/unslothai/unsloth/pull/19463) Studio tests: the MLX inference stub answers zoo's _LANE_LOW_ROWS
- [#19369](https://github.com/unslothai/unsloth/pull/19369) Studio: stop a filename column making a text dataset look like images
- [#19442](https://github.com/unslothai/unsloth/pull/19442) Trainers: decide forced float32 from the model being trained, not the process-wide flag
- [#19461](https://github.com/unslothai/unsloth/pull/19461) Studio tests: load the real streamer tokenizers under a per-repo lock and reject a half-downloaded cache
- [#19406](https://github.com/unslothai/unsloth/pull/19406) Pipeline parallel: fix loop schedules at pp 1 on torch 2.10 / 2.11 (gloo self P2P warm-up)
- [#19452](https://github.com/unslothai/unsloth/pull/19452) Studio: scan remote code along the whole adapter chain and in a drafter folder
- [#19451](https://github.com/unslothai/unsloth/pull/19451) Studio: managed accounts need a grant or their own access for cached gated repos
- [#19450](https://github.com/unslothai/unsloth/pull/19450) Studio: hide root-only system entries from managed tools on a root-run server
- [#19449](https://github.com/unslothai/unsloth/pull/19449) Refuse tokenizer files that name a host file outside the tokenizer folder
- [#19448](https://github.com/unslothai/unsloth/pull/19448) Studio: keep managed library ids and diffusion run records off share paths
- [#19447](https://github.com/unslothai/unsloth/pull/19447) Studio: catch mermaid image keys split by a directive
- [#19446](https://github.com/unslothai/unsloth/pull/19446) Studio: filter extra_body of provider-less recipe model configs on the local provider
- [#19459](https://github.com/unslothai/unsloth/pull/19459) Tests: give the extracted remote gradient checkpointing functions the cache kwarg helper
- [#19421](https://github.com/unslothai/unsloth/pull/19421) Studio MiniMax-H3: no registered host pins on Windows, and clear a failed unregister
- [#19454](https://github.com/unslothai/unsloth/pull/19454) Tests: build key-store paths from fragments (AV008) and accept the streaming chat backup save
- [#19399](https://github.com/unslothai/unsloth/pull/19399) Studio: keep the tool safety screen linear on nested brackets and long path chains
- [#19359](https://github.com/unslothai/unsloth/pull/19359) Studio: write llama-server logs under the expanded Studio home, not a directory named ~
- [#19358](https://github.com/unslothai/unsloth/pull/19358) Studio: accept seed -1 as random in image and video generation APIs and chat tools
- [#19444](https://github.com/unslothai/unsloth/pull/19444) Studio tests: give the CPU-only video load tests roomy host RAM
- [#19256](https://github.com/unslothai/unsloth/pull/19256) Keep model error diagnostics from overflowing the UI
- [#19356](https://github.com/unslothai/unsloth/pull/19356) Studio: count Vulkan and desktop VRAM in the shared Linux ROCm free-memory check
- [#19306](https://github.com/unslothai/unsloth/pull/19306) Studio: give browser use a page's whole paragraphs and code blocks
- [#19324](https://github.com/unslothai/unsloth/pull/19324) Studio: recover context-cut thoughts in GGUF chats with tools on
- [#19266](https://github.com/unslothai/unsloth/pull/19266) Fix saved-chat context fitting for managed SGLang and vLLM
- [#19307](https://github.com/unslothai/unsloth/pull/19307) Studio: start a long attachment's passages with its opening
- [#19355](https://github.com/unslothai/unsloth/pull/19355) Studio: load trusted-org remote code with HF_HUB_OFFLINE=on, and drop the private offline-mode copies
- [#19371](https://github.com/unslothai/unsloth/pull/19371) Keep unsloth chat on the model it loaded when Studio switches models
- [#19432](https://github.com/unslothai/unsloth/pull/19432) Studio onboarding: two outside clicks to dismiss, slightly wider panel
- [#19366](https://github.com/unslothai/unsloth/pull/19366) Studio: keep separated stem file names within 255 bytes
- [#19420](https://github.com/unslothai/unsloth/pull/19420) Read the KV cache under transformers 5.24's cache= name in fast generation
- [#19403](https://github.com/unslothai/unsloth/pull/19403) Inkling 2 exports from the pre-quantized bnb repo: merge cached snapshots into the original, LoRA GGUF reads only the base config
- [#19273](https://github.com/unslothai/unsloth/pull/19273) Studio chat: select a tool group's live-output flag, not the whole map
- [#19389](https://github.com/unslothai/unsloth/pull/19389) Studio: reuse checkpoint resume checks across training history polls
- [#19365](https://github.com/unslothai/unsloth/pull/19365) Studio: keep Hybrid search keyword matches while an embedder downloads
- [#19402](https://github.com/unslothai/unsloth/pull/19402) Studio: let the GGUF --fit on retry use the GPUs Auto left out
- [#19257](https://github.com/unslothai/unsloth/pull/19257) Studio tools: price non-ASCII and percent-escaped tool output from block sums, not a per-character loop
- [#19332](https://github.com/unslothai/unsloth/pull/19332) Show Unsloth repos first in Train model search
- [#19388](https://github.com/unslothai/unsloth/pull/19388) docker: run the entrypoint torch checks in one interpreter
- [#19357](https://github.com/unslothai/unsloth/pull/19357) Studio: show llama-server's error message, not its raw JSON body, on every passthrough route
- [#19246](https://github.com/unslothai/unsloth/pull/19246) Studio: analyse a python tool call's code once per call
- [#19441](https://github.com/unslothai/unsloth/pull/19441) Studio tests: uninstall a leaked SDPA-align wrapper so cache-tag tests do not depend on order
- [#19372](https://github.com/unslothai/unsloth/pull/19372) Studio: keep chat backups downloadable when chats hold large videos
- [#19361](https://github.com/unslothai/unsloth/pull/19361) Score multi-line answers in unsloth eval datasets
- [#19396](https://github.com/unslothai/unsloth/pull/19396) Studio: wake a chat run follower only for its own run's events
- [#19302](https://github.com/unslothai/unsloth/pull/19302) Studio: use knowledge base matches below the score cutoff
- [#19259](https://github.com/unslothai/unsloth/pull/19259) Allow selected MCP tools in scheduled tasks
- [#19364](https://github.com/unslothai/unsloth/pull/19364) Studio: test the API format being edited on a Custom connection
- [#19395](https://github.com/unslothai/unsloth/pull/19395) Studio: re-render only the tool card whose full output changed
- [#19305](https://github.com/unslothai/unsloth/pull/19305) Studio: cut long Translate documents between sentences
- [#19375](https://github.com/unslothai/unsloth/pull/19375) Studio: GPUs card on the Train page to see and choose multi-GPU training (DDP, FSDP2, TP, PP, CP, EP)
- [#19323](https://github.com/unslothai/unsloth/pull/19323) Studio: keep Ollama Modelfile instructions on Custom connections
- [#19354](https://github.com/unslothai/unsloth/pull/19354) Studio: mask signed URLs, URL passwords and Authorization headers in Hub download errors
- [#19261](https://github.com/unslothai/unsloth/pull/19261) Studio Translate: keep the model menu across keystrokes and streamed frames
- [#19360](https://github.com/unslothai/unsloth/pull/19360) Studio: keep passages that clear the score cutoff when results are capped
- [#19362](https://github.com/unslothai/unsloth/pull/19362) Keep piped input in the Docker launcher
- [#19434](https://github.com/unslothai/unsloth/pull/19434) Tests: build the TP LoRA rounding reference from PEFT own forward, whatever ran first
- [#19370](https://github.com/unslothai/unsloth/pull/19370) Studio: drop old Parquet files when republishing a Data Recipes dataset
- [#19392](https://github.com/unslothai/unsloth/pull/19392) Studio: finish Recipes runs as soon as the job stream reports the end
- [#19368](https://github.com/unslothai/unsloth/pull/19368) Studio: read scanned PDF pages with a selectable header or footer
- [#19303](https://github.com/unslothai/unsloth/pull/19303) Studio: generate recipe rows from every uploaded document
- [#19378](https://github.com/unslothai/unsloth/pull/19378) Studio: multi-GPU training backend (DDP, FSDP2, TP, PP, CP, EP) with an auto default
- [#19431](https://github.com/unslothai/unsloth/pull/19431) Studio video: gate the LTX-2.5 denoise allowance on is_rocm_torch
- [#19410](https://github.com/unslothai/unsloth/pull/19410) Studio: read macOS tool process identity from libproc and resolve Seatbelt paths once per render
- [#19409](https://github.com/unslothai/unsloth/pull/19409) Studio: hash wxc-exec once per Windows MXC launch and build the policy once per stage
- [#19408](https://github.com/unslothai/unsloth/pull/19408) Studio: cut the per-call overhead of sandboxed Python and Terminal calls
- [#19301](https://github.com/unslothai/unsloth/pull/19301) Studio: run a model picked inside a chat at its own recommended sampling
- [#19397](https://github.com/unslothai/unsloth/pull/19397) Studio: read the GGUF lookup-table architecture from the variant listing
- [#19258](https://github.com/unslothai/unsloth/pull/19258) Studio: let the RAG embedder run on a saved connection
- [#19304](https://github.com/unslothai/unsloth/pull/19304) Studio: keep training on the train split once a Hub dataset is cached
- [#19260](https://github.com/unslothai/unsloth/pull/19260) Studio Hub: share one in-flight media download plan between a card's two callers
- [#19424](https://github.com/unslothai/unsloth/pull/19424) Glass Lens: stop WebKit painting a square box behind rounded corners
- [#19418](https://github.com/unslothai/unsloth/pull/19418) Model pickers: fix the Image gen filter on Connected, add an Image/video gen format filter
- [#19425](https://github.com/unslothai/unsloth/pull/19425) Studio tests: fake only the shim launch in the auto-fit ngl Popen stub (macOS)
- [#19384](https://github.com/unslothai/unsloth/pull/19384) Mamba LoRA: follow transformers 5.24 cache_params -> cache rename
- [#19422](https://github.com/unslothai/unsloth/pull/19422) Studio tests: read video.py as UTF-8 in the VAE prebuild teardown test
- [#19405](https://github.com/unslothai/unsloth/pull/19405) Studio chat: keep the indent space SentencePiece tokenizers lose after each streamed newline
- [#19404](https://github.com/unslothai/unsloth/pull/19404) Honour an explicit quantization_config over the pre-quantized name remap
- [#19415](https://github.com/unslothai/unsloth/pull/19415) Revert "Studio: add a Files menu to chat (#19172)"
- [#19377](https://github.com/unslothai/unsloth/pull/19377) Studio LTX-2.5: render 768x512 clips on 6 GiB cards (leaner connectors, prompt rows released, VAE encoder parked, measured denoise price)
- [#19413](https://github.com/unslothai/unsloth/pull/19413) Risky loader baseline: re-record npu_detected spec_from_file_location after #19401
- [#19412](https://github.com/unslothai/unsloth/pull/19412) Studio frontend tests: derive the upgrade stub check type from TransformersUpgradeCheck

#### 🐛 New Issues
- [#19423](https://github.com/unslothai/unsloth/issues/19423) [Bug] Decision models (Clef): JSON string state is re-parsed and key-sorted in training/predict, but used verbatim by the exported GGUF `feature request` `bug` 💬4
- [#19455](https://github.com/unslothai/unsloth/issues/19455) [Feature] Allow LAN access per network interface `feature request` 💬2
- [#19567](https://github.com/unslothai/unsloth/issues/19567) [Bug] `SFTConfig.pad_to_multiple_of` is silently dropped with padded batches (unsloth-zoo 2026.11.12 and main) `feature request` `bug` 💬1
- [#19593](https://github.com/unslothai/unsloth/issues/19593) [Bug] Server-side tools interfere with client-provided MCP tools in OpenAI-compatible API `feature request` `bug` 💬1
- [#19590](https://github.com/unslothai/unsloth/issues/19590) [Bug] Offscreen start `feature request` `bug` 💬1
- [#19543](https://github.com/unslothai/unsloth/issues/19543) [Feature] Add multi-language spell check support (e.g., Russian, Spanish, etc.) `feature request`
- [#19660](https://github.com/unslothai/unsloth/issues/19660) torch and pyarrow imports exit 139 in the Studio virtual environment on Linux
- [#19581](https://github.com/unslothai/unsloth/issues/19581) [Bug] Masked diffusion drops an output-head hook installed after the first training batch
- [#19579](https://github.com/unslothai/unsloth/issues/19579) [Bug] BF16 stochastic rounding changes the next AdamW update after resume when a weight was inactive
- [#19564](https://github.com/unslothai/unsloth/issues/19564) [Feature] Unsloth Translate Language Support for More Languages `feature request`
- [#19550](https://github.com/unslothai/unsloth/issues/19550) [Bug] Studio chat: LaTeX containing `<` (e.g. `x_{<i}`) is cut off with a KaTeX ParseError
- [#19546](https://github.com/unslothai/unsloth/issues/19546) [Feature]Add GitHub Copilot as a provider `feature request`
- [#19522](https://github.com/unslothai/unsloth/issues/19522) [Feature] Add "update" option to chat's model picker `feature request`
- [#19515](https://github.com/unslothai/unsloth/issues/19515) [Bug] Tensor parallelism is not supported for Nemotro-3.5-transcribe-30B? (CUDA, Unsloth Studio) `feature request` `bug`
- [#19499](https://github.com/unslothai/unsloth/issues/19499) [Feature] Studio Images: keep the SDXL U-Net resident on 8 GB cards, then offer an opt-in int8 U-Net
- [#19486](https://github.com/unslothai/unsloth/issues/19486) [Feature] Expose thinking toggle for llama.cpp connections `feature request`
- [#19438](https://github.com/unslothai/unsloth/issues/19438) CSM-1B TTS notebook: every training clip ends with an off-distribution Mimi frame (pad audio to 1920 samples)
- [#19472](https://github.com/unslothai/unsloth/issues/19472) [Bug] Studio Translate treats valid CR-delimited WebVTT files as plain text
- [#19474](https://github.com/unslothai/unsloth/issues/19474) [Bug] Local eval gives an exact indented code completion a score of zero
- [#19476](https://github.com/unslothai/unsloth/issues/19476) [Bug] CSV type inference reverses exact-match scores for fixed-width answers
- [#19439](https://github.com/unslothai/unsloth/issues/19439) Qwen3-Omni: how to make Talker/MTP labels (a recipe and a voice fine-tuning example)

#### 🔒 Closed Issues
- [#18699](https://github.com/unslothai/unsloth/issues/18699) [Bug] Saw "A script was blocked" - `transformers==5.13.1` trips some scanners
- [#19137](https://github.com/unslothai/unsloth/issues/19137) [Studio Bug] Inkling 2 Mini GPU offloading regression after v0.1.923-beta: 40 → 12 tokens/s
- [#18948](https://github.com/unslothai/unsloth/issues/18948) [Bug] Studio llama-server crashes on ROCm when launched by Studio (system libamdhip64 gets loaded), works fine from shell
- [#6336](https://github.com/unslothai/unsloth/issues/6336) [Bug] DiffusionGemma: empty/garbled output on Apple Silicon (Metal GPU) — visual-server & llama-diffusion-cli; CPU (-ngl 0) works
- [#19140](https://github.com/unslothai/unsloth/issues/19140) Generated files during chats can be downloaded from a dedicated place in the UI.
- [#18647](https://github.com/unslothai/unsloth/issues/18647) [Bug] Studio: managed accounts cannot load models from subfolder repos (e.g. audio-cpp/audio.cpp-gguf)
- [#19455](https://github.com/unslothai/unsloth/issues/19455) [Feature] Allow LAN access per network interface
- [#19160](https://github.com/unslothai/unsloth/issues/19160) [Feature] Allow routing embedding model through connections

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,207 · **Open issues:** 427 · **Last push:** <1h ago

On November 26, 2026, there were no new releases for AIBrix, but several significant improvements were made through merged pull requests. Notably, PR #3608 raised the HTTP connection pool defaults for PD prefill, encode, and decode-abort, while PR #3599 introduced sharding for PD router selection locks by model across fixed stripes. Additionally, bug fixes addressed important issues such as ensuring gateway references comply with Kustomize naming conventions (PR #3612) and resolving a floating-point error issue in the pending-replica guard (PR #3271). Among new issues, PR #3611 highlights a bug where pod updates inadvertently remove LoRA adapters from the gateway cache, which received attention from the community.

#### ✅ Merged PRs
- [#3600](https://github.com/vllm-project/aibrix/pull/3600) [Bug] gateway: spread equal-running-count ties randomly instead of name-first
- [#3614](https://github.com/vllm-project/aibrix/pull/3614) [Bug] Remove unused gateway write permissions
- [#3580](https://github.com/vllm-project/aibrix/pull/3580) [BUG] propagate client cancellation to SGLang prefill
- [#3603](https://github.com/vllm-project/aibrix/pull/3603) [Misc] Move gateway error-response builders into errresp (PR 3a of #3557)
- [#3271](https://github.com/vllm-project/aibrix/pull/3271) [Bug] Stop the pending-replica guard holding a pod by floating-point error
- [#3612](https://github.com/vllm-project/aibrix/pull/3612) [Bug] Make gateway references follow Kustomize namespace and names
- [#3595](https://github.com/vllm-project/aibrix/pull/3595) [Bug] Key gateway PD load trackers by a unique id, not the client traceparent (#3586)
- [#3608](https://github.com/vllm-project/aibrix/pull/3608) [Feat] Raise PD prefill, encode, and decode-abort HTTP connection pool defaults (#3588)
- [#3604](https://github.com/vllm-project/aibrix/pull/3604) [Bug] Include Responses function-call items in the prefix-match text
- [#3607](https://github.com/vllm-project/aibrix/pull/3607) [CI] Run envtest-based tests on Kubernetes 1.31
- [#3602](https://github.com/vllm-project/aibrix/pull/3602) [Feat] Export the Pod watch progress age from the gateway discovery check
- [#3594](https://github.com/vllm-project/aibrix/pull/3594) [Misc] Group gateway test files by feature
- [#3599](https://github.com/vllm-project/aibrix/pull/3599) [Feat] Shard PD router selection lock by model across fixed stripes (#3588)
- [#3581](https://github.com/vllm-project/aibrix/pull/3581) [Misc] Extract the gateway async job registry into its own package

#### 🐛 New Issues
- [#3601](https://github.com/vllm-project/aibrix/issues/3601) [CI] Run the integration tests on envtest 1.31 or newer, so the watch progress idle test runs in CI `area/gateway` `triage/accepted` `area/testing` `kind/misc` 💬3
- [#3615](https://github.com/vllm-project/aibrix/issues/3615) [Feature]: Add ledger-only Redis read for PD token_load when RunningRequests snapshot is populated `area/gateway` `triage/accepted` `kind/feature` 💬2
- [#3611](https://github.com/vllm-project/aibrix/issues/3611) [Bug] A pod update drops the LoRA adapters it serves from the gateway cache until the ModelAdapter status changes `kind/bug` `area/gateway` `triage/accepted` 💬2
- [#3606](https://github.com/vllm-project/aibrix/issues/3606) podautoscaler: custom-metrics client ignores context, so collection deadlines don't bound CUSTOM scrapes `kind/misc` 💬1
- [#3605](https://github.com/vllm-project/aibrix/issues/3605) podautoscaler: metric-collection budget is per-source and can exceed the reconcile deadline with multiple sources `kind/misc` `area/orchestration` 💬1

#### 🔒 Closed Issues
- [#3536](https://github.com/vllm-project/aibrix/issues/3536) [bug] standalone envoy config: /healthz is matched by the /health prefix route, so it goes to vllm instead of returning envoy's {"status":"ok"}
- [#3574](https://github.com/vllm-project/aibrix/issues/3574) [Bug] Responses API function_call and function_call_output items are left out of the prefix-match text
- [#3584](https://github.com/vllm-project/aibrix/issues/3584) [Bug] Gateway buffers the entire non-streamed response body with no size limit
- [#3586](https://github.com/vllm-project/aibrix/issues/3586) [Bug] Client-supplied traceparent is used as the gateway request ID, colliding PD load-accounting state
- [#3588](https://github.com/vllm-project/aibrix/issues/3588) [RFC]: Remove global selectMu Redis I/O, redundant snapshots, and HTTP pool bottlenecks in PD routing
- [#3407](https://github.com/vllm-project/aibrix/issues/3407) [Bug] An SGLang engine never reads ready, because its /health takes longer than the 1 s probe
- [#3453](https://github.com/vllm-project/aibrix/issues/3453) [Bug] The gateway never registers the KV event sync metrics
- [#3521](https://github.com/vllm-project/aibrix/issues/3521) [Bug] Kustomize keeps hard-coded Envoy references when the namespace or resource names change
- [#3506](https://github.com/vllm-project/aibrix/issues/3506) [Bug] EmitMetricToPrometheus silently drops metrics with no definition entry
- [#3589](https://github.com/vllm-project/aibrix/issues/3589) [Feature] Export watch progress age, a free signal for a gateway replica whose watch is stuck
- [#3501](https://github.com/vllm-project/aibrix/issues/3501) [Bug] `realtime_running_requests_drain_rate_1m` is missing from gateway plugin metrics
- [#3405](https://github.com/vllm-project/aibrix/issues/3405) [Bug] leastLatency adapter scheduler fails the whole selection when one ready pod has no latency metrics
- [#3601](https://github.com/vllm-project/aibrix/issues/3601) [CI] Run the integration tests on envtest 1.31 or newer, so the watch progress idle test runs in CI
- [#3485](https://github.com/vllm-project/aibrix/issues/3485) ModelRouter and gateway hard-code the HTTPRoute namespace independently of the Helm Gateway
- [#3480](https://github.com/vllm-project/aibrix/issues/3480) [Feature]: Improve gateway shutdown ordering and add bounded request draining

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,532 · **Open issues:** 698 · **Last push:** <1h ago

On November 26, 2026, there were no new releases for the Semantic Router, but several significant features were merged into the project. Notably, four new Gemma 4 IT checkpoints were added to the Model Catalog, along with new models including Inkling 2 Small and updates for GPT-6.2 Astra and GPT-6.2 Sol. Additionally, the zentorch's BF16 linear implementation was integrated for the Decision 3.0 model runtime. Among the various bug fixes, one noteworthy issue was the scoping of guard window verdicts to named input prefixes. However, several new bugs were reported, including a critical issue (#7428) where the `vllm-sr serve` command halts the running Router before refusing a listener on the management API port.

#### ✅ Merged PRs
- [#7223](https://github.com/vllm-project/semantic-router/pull/7223) [Feature] Add four Gemma 4 IT checkpoints to the Model Catalog
- [#7315](https://github.com/vllm-project/semantic-router/pull/7315) [Feature] Model runtime: zentorch's BF16 linear for Decision 3.0, checked against its own references
- [#7187](https://github.com/vllm-project/semantic-router/pull/7187) [Feature] Add Inkling 2 Small to the Model Catalog
- [#7316](https://github.com/vllm-project/semantic-router/pull/7316) [Feature] Admit Meituan / LongCat to the Model Catalog
- [#7258](https://github.com/vllm-project/semantic-router/pull/7258) [Feature] Add GPT-6.2 Astra, GPT-6.2 Sol, and GPT-6.1 Terra to the model catalog
- [#7263](https://github.com/vllm-project/semantic-router/pull/7263) [Bug] Scope guard window verdicts to named input prefixes
- [#7427](https://github.com/vllm-project/semantic-router/pull/7427) [Bug] Report a pending restart in status on a --minimal stack

#### 🐛 New Issues
- [#7428](https://github.com/vllm-project/semantic-router/issues/7428) [Bug] `vllm-sr serve` stops the running Router before refusing a listener on the management API port `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬3
- [#7421](https://github.com/vllm-project/semantic-router/issues/7421) [Bug] vllm-sr serve --target k8s leaves a stale provider credential reference after upgrade `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬3
- [#7415](https://github.com/vllm-project/semantic-router/issues/7415) [Bug] Operator blocks image updates after the StorageClass of a bound model PVC is removed `bug` `accepted` `wg/enterprise-environment` 💬1
- [#7414](https://github.com/vllm-project/semantic-router/issues/7414) [Bug] Helm renders plaintext gRPC startup and readiness probes for TLS extproc `bug` `accepted` `wg/enterprise-environment` 💬1
- [#7413](https://github.com/vllm-project/semantic-router/issues/7413) [Bug] Helm creates an unused model PVC when a custom volume is mounted at /app/models `bug` `accepted` `wg/enterprise-environment` 💬1
- [#7412](https://github.com/vllm-project/semantic-router/issues/7412) [Bug] vllm-sr serve removes the running Router before pulling replacement images `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#7404](https://github.com/vllm-project/semantic-router/issues/7404) [Bug] The classify API never computes invalid_tool_call `bug` `accepted` `wg/data-plane-networking` 💬1
- [#7403](https://github.com/vllm-project/semantic-router/issues/7403) [Bug] invalid_tool_call misses parallel calls in a Responses turn `bug` `accepted` `wg/data-plane-networking` 💬1
- [#7402](https://github.com/vllm-project/semantic-router/issues/7402) [Bug] The output-limit reasoning rule is skipped on a Looper decision `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#7401](https://github.com/vllm-project/semantic-router/issues/7401) [Bug] A prefixed API mount answers 404 for GET <prefix>/v1/models `bug` `accepted` `wg/data-plane-networking` 💬1
- [#7400](https://github.com/vllm-project/semantic-router/issues/7400) [Bug] A Speech decision discards a healthy fallback candidate's audio `bug` `accepted` `wg/router-models-inference-runtime` 💬1

#### 🔒 Closed Issues
- [#7121](https://github.com/vllm-project/semantic-router/issues/7121) [Feature] System One auto: validate, route and accept Set, Span and Track questions
- [#6381](https://github.com/vllm-project/semantic-router/issues/6381) [Bug] Jailbreak classifier discards user/tool provenance before model evaluation
- [#7264](https://github.com/vllm-project/semantic-router/issues/7264) [Bug] vllm-sr serve fails on glibc < 2.32 (e.g. Ubuntu 20.04): os.chmod(follow_symlinks=False) is unsupported
- [#7328](https://github.com/vllm-project/semantic-router/issues/7328) [Bug] Standalone gateway returns an empty HTTP 200 for zero-length Chat Completions responses
- [#6339](https://github.com/vllm-project/semantic-router/issues/6339) [Bug] Windowed jailbreak scans flatten history and request into one state
- [#7341](https://github.com/vllm-project/semantic-router/issues/7341) [Bug] `vllm-sr status` hides a pending restart on a `--minimal` stack
- [#7165](https://github.com/vllm-project/semantic-router/issues/7165) [Feature] Add four Gemma 4 IT models to the Model Catalog
- [#7171](https://github.com/vllm-project/semantic-router/issues/7171) [Feature] Add Inkling 2 Small to the Model Catalog
- [#7166](https://github.com/vllm-project/semantic-router/issues/7166) [Feature] Add GPT-6.2 Astra, GPT-6.2 Sol, and GPT-6.1 Terra to the Model Catalog
- [#7177](https://github.com/vllm-project/semantic-router/issues/7177) [Feature] Review Meituan creator admission for LongCat-2.5
- [#6655](https://github.com/vllm-project/semantic-router/issues/6655) [Docs] Validate the skill suite and publish a measured technical walkthrough
- [#7331](https://github.com/vllm-project/semantic-router/issues/7331) [Bug] Operator deletes an externally managed HPA with the same name as a SemanticRouter
- [#6874](https://github.com/vllm-project/semantic-router/issues/6874) [Bug] Return 404 for missing Dashboard MCP servers
- [#6534](https://github.com/vllm-project/semantic-router/issues/6534) [Bug] A replay id reaches the Milvus expression unescaped
- [#7302](https://github.com/vllm-project/semantic-router/issues/7302) [Bug] A rejected streamed tool call logs no evidence of the failure

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*