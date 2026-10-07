# 📡 AI Ecosystem Digest — 2026-10-07

> Generated 2026-10-07 02:08 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 149,643 | 26 | 4 | 1 | 2 |
| [OpenAI Codex](https://github.com/openai/codex) | 128,064 | 26 | 2 | 50 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,244 | 0 | 1 | 8 | 3 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,241 | 7 | 6 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 212,053 | 24 | 3 | 10 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,337 | 33 | 12 | 3 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 391,522 | 111 | 78 | 102 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 251,717 | 26 | 3 | 1 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,294 | 29 | 40 | 49 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,826 | 8 | 13 | 60 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 130,521 | 14 | 23 | 24 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 182,402 | 7 | 2 | 3 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 60,244 | 40 | 44 | 105 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 77,280 | 8 | 14 | 112 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,125 | 4 | 2 | 6 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,041 | 11 | 12 | 12 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released versions [rust-v0.162.0-alpha.18](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.18) and [rust-v0.162.0-alpha.17](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.17) as part of their ongoing improvements.
- **Claude Code** merged PR [#99206](https://github.com/anthropics/claude-code/pull/99206) which adjusts the docking behavior of the pane interface.
- **OpenClaw** faced user-reported issues with [#166360](https://github.com/openclaw/openclaw/issues/166360), where a paired node-worker E2E fixture omits prompt-context capability, attracting significant attention with 4 comments.
- **Hermes Agent** has a critical issue reported in [#134008](https://github.com/NousResearch/hermes-agent/issues/134008) regarding bot processing and the review pipeline, generating 11 comments.
- **vLLM** experienced a major report in [#60174](https://github.com/vllm-project/vllm/issues/60174) related to corrupt output issues, which has already received 12 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 149,643 · **Open issues:** 14,420 · **Last push:** 1h ago

On October 7, 2026, Claude Code released version 2.1.292, introducing several notable features, including the ability to specify a marketplace source with `--marketplace <source>` in the plugin installation command and an `effort` parameter for the Agent tool to control the operation of sub-agents. Additionally, version 2.1.291 addressed regressions from previous updates, fixing issues with dropped answers to permission prompts and lost session messages. A significant pull request (#99206) was merged, improving the docking behavior of panes within the interface. Among new issues, #100094 raised concerns regarding performance with the Max package on high effort, attracting attention from the community.

#### 🚀 New Releases
- [v2.1.292](https://github.com/anthropics/claude-code/releases/tag/v2.1.292) v2.1.292
- [v2.1.291](https://github.com/anthropics/claude-code/releases/tag/v2.1.291) v2.1.291

#### ✅ Merged PRs
- [#99206](https://github.com/anthropics/claude-code/pull/99206) diff: the docked pane starts at its header, under the engine's own head row

#### 🐛 New Issues
- [#100094](https://github.com/anthropics/claude-code/issues/100094) Hi, I purhcased Max package and used Fable 5.1 on high effort, however, it has … `question` `area:cost` `area:model` 💬1
- [#100091](https://github.com/anthropics/claude-code/issues/100091) [Feature Request] Add option to disable classifier `enhancement` `platform:macos` `area:permissions` 💬1
- [#100081](https://github.com/anthropics/claude-code/issues/100081) [GitHub integration] `bug` `platform:web` `needs-info` `github-integration` 💬1
- [#100105](https://github.com/anthropics/claude-code/issues/100105) Heads up: a second version of these rules got opened by mistake as PR #19. It b… `invalid`
- [#100104](https://github.com/anthropics/claude-code/issues/100104) [BUG] DISABLE_INSTALLATION_CHECKS=1 doesn't hide the 'was not created by the native installer' launcher warning `bug` `has repro` `platform:macos` `area:installation`
- [#100103](https://github.com/anthropics/claude-code/issues/100103) [FEATURE] Claude in Chrome file_upload: send files in chunks to lift the 10 MB cap `enhancement` `platform:windows` `area:chrome`
- [#100102](https://github.com/anthropics/claude-code/issues/100102) [Bug] Docked plugin panes render opaque background, ignoring terminal transparency `enhancement` `platform:macos` `area:plugins` `area:ui`
- [#100101](https://github.com/anthropics/claude-code/issues/100101) Desktop app: option to hide the branch / PR banners above the composer `enhancement` `area:ui` `area:desktop`
- [#100100](https://github.com/anthropics/claude-code/issues/100100) I don't see a bug report in your message. Please provide the bug report details so I can generate an appropriate GitHub issue title. `bug` `platform:macos` `platform:vscode` `needs-info`
- [#100099](https://github.com/anthropics/claude-code/issues/100099) [Feature Request] Support for Anthropic's extended model access (Mythos) in Claude Code CLI `enhancement` `platform:linux` `area:model`
- [#100098](https://github.com/anthropics/claude-code/issues/100098) Italta `invalid`
- [#100097](https://github.com/anthropics/claude-code/issues/100097) [GitHub integration] unable to merge stacked PR `bug` `github-integration`
- [#100096](https://github.com/anthropics/claude-code/issues/100096) [BUG] Cowork (claude.ai web, cloud sessions): a message one of my own sessions posts into another of my sessions is silently held ("peer_message_hold", "no-mode-asserted") with no way for the account owner to pre-authorise it `bug` `area:cowork` `platform:web`
- [#100095](https://github.com/anthropics/claude-code/issues/100095) [BUG] "Resets in" time inaccurate by 12+ hours `bug` `platform:macos` `platform:vscode` `area:ui`
- [#100093](https://github.com/anthropics/claude-code/issues/100093) [BUG] GitHub App shows "Configured" but repository not appearing in repo picker on claude.ai/code `duplicate` `area:claude-code-web` `platform:web` `github-integration`
- [#100092](https://github.com/anthropics/claude-code/issues/100092) [BUG] Desktop: project thread's PR bar shows Auto-fix CI unchecked while its Remote Control session's local monitor is on `bug` `platform:macos` `area:desktop`
- [#100087](https://github.com/anthropics/claude-code/issues/100087) message flagged - no reason `bug` `duplicate` `area:model`
- [#100090](https://github.com/anthropics/claude-code/issues/100090) Desktop Code tab: bring back the live token count (now only shows a timer) `duplicate` `platform:macos` `area:cost` `area:ui`
- [#100012](https://github.com/anthropics/claude-code/issues/100012) Claude in Chrome: „Allow all actions on <site> for this session“ hält nicht, jede Aktion fragt erneut `bug` `has repro` `platform:macos` `area:permissions`
- [#100089](https://github.com/anthropics/claude-code/issues/100089) [BUG] Desktop (Windows): Code tab sidebar collapses during computer use and stays collapsed in a maximized window `bug` `platform:windows` `area:ui` `area:desktop`
- [#100088](https://github.com/anthropics/claude-code/issues/100088) [BUG] Auto-update removes the macOS Desktop (Space) assignment for Claude `invalid`
- [#100086](https://github.com/anthropics/claude-code/issues/100086) [BUG] Desktop (macOS): main process repeatedly navigates the Code tab to nonexistent /epitaxy/n9, replacing the window with "Page not found" `bug` `has repro` `platform:macos` `area:desktop`
- [#100085](https://github.com/anthropics/claude-code/issues/100085) [Feature Request] Enable standard copy/paste keyboard shortcuts for space navigation `enhancement` `platform:linux` `area:tui`
- [#100084](https://github.com/anthropics/claude-code/issues/100084) [BUG] Windows desktop app: startup helper lists a remembered Code-tab folder on a Google Drive virtual drive, hangs unkillably, and blocks the app from relaunching `bug` `platform:windows` `area:desktop`
- [#100083](https://github.com/anthropics/claude-code/issues/100083) [BUG] $.model.fork misses the conversation prompt cache when Message Threads and a mid-conversation system message are both active (2.1.291) `bug` `has repro` `platform:macos` `area:cost`
- [#100082](https://github.com/anthropics/claude-code/issues/100082) Custom subagent frontmatter model (haiku/sonnet) ignored — subagents ran on parent Opus model (2.1.283–2.1.290) `duplicate` `platform:linux` `area:agents`

#### 🔒 Closed Issues
- [#83655](https://github.com/anthropics/claude-code/issues/83655) MCP tool call issued during session re-initialisation is silently discarded
- [#83636](https://github.com/anthropics/claude-code/issues/83636) Session cwd silently resets to original launch directory, discarding legitimate navigation (affects PreToolUse hook cwd for all tool types)
- [#83662](https://github.com/anthropics/claude-code/issues/83662) [BUG] JetBrains plugin: "Send to Claude Code" (Ctrl+Alt+K) does nothing when the Markdown preview pane is focused
- [#100087](https://github.com/anthropics/claude-code/issues/100087) message flagged - no reason

### OpenAI Codex (`openai/codex`)

**Stars:** 128,064 · **Open issues:** 20,999 · **Last push:** <1h ago

Today, OpenAI Codex released version rust-v0.162.0-alpha.18, along with updates to rust-v0.162.0-alpha.17 and rust-v0.161.0-alpha.13.1, introducing various enhancements and bug fixes. Significant merged features include the addition of a Windows MXC sandbox opt-out in pull request #51547, improvements to attachment handling in completion-aware contexts (#51539), and resolutions for file permissions on Windows systems (#51491). Notably, a new issue (#51533) has emerged concerning call failures across iOS/macOS platforms, triggering further investigation into compatibility and operational reliability.

#### 🚀 New Releases
- [rust-v0.162.0-alpha.18](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.18) 0.162.0-alpha.18
- [rust-v0.162.0-alpha.17](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.17) 0.162.0-alpha.17
- [rust-v0.161.0-alpha.13.1](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.13.1) 0.161.0-alpha.13.1

#### ✅ Merged PRs
- [#51547](https://github.com/openai/codex/pull/51547) Add a Windows MXC sandbox opt-out
- [#51539](https://github.com/openai/codex/pull/51539) Add completion-aware realtime attachment and session-scoped detach
- [#51527](https://github.com/openai/codex/pull/51527) Ignore ripgrep configuration when expanding sandbox deny globs
- [#51525](https://github.com/openai/codex/pull/51525) Preserve the CLI MXC preference in executor config reads
- [#51517](https://github.com/openai/codex/pull/51517) Pass thread persistence intent to attachment uploads
- [#51515](https://github.com/openai/codex/pull/51515) Expose detailed agent tree shutdown failure reports
- [#51512](https://github.com/openai/codex/pull/51512) Align Windows sandbox temp permissions with the child environment
- [#51511](https://github.com/openai/codex/pull/51511) Fix Windows 10 drive-letter opens for no-follow filesystem operations
- [#51510](https://github.com/openai/codex/pull/51510) Preserve live TUI settings when configuration reloads fail
- [#51503](https://github.com/openai/codex/pull/51503) Expose selected environments to MCP contributors
- [#51502](https://github.com/openai/codex/pull/51502) Bound relay connection attempts and handle pongs during blocked writes
- [#51500](https://github.com/openai/codex/pull/51500) Add shared task pinning to the agent command center
- [#51499](https://github.com/openai/codex/pull/51499) Load rollout history on a single blocking worker
- [#51493](https://github.com/openai/codex/pull/51493) Bind capability roots to environment selections
- [#51492](https://github.com/openai/codex/pull/51492) Remove obsolete fields from persisted turn context
- [#51491](https://github.com/openai/codex/pull/51491) Classify executor capability root ownership independently of parsing
- [#51483](https://github.com/openai/codex/pull/51483) Add correlated, credential-free rendezvous connection diagnostics
- [#51482](https://github.com/openai/codex/pull/51482) Use PathUri for skill identity and path matching
- [#51480](https://github.com/openai/codex/pull/51480) Preserve tool declaration mode across resumed context windows
- [#51473](https://github.com/openai/codex/pull/51473) Preserve URL destinations in wrapped hook details
- [#51472](https://github.com/openai/codex/pull/51472) Preserve clickable URLs in TUI selection rows
- [#51471](https://github.com/openai/codex/pull/51471) Preserve clickable URLs in pending input previews
- [#51470](https://github.com/openai/codex/pull/51470) Raise the managed app-server file descriptor limit on Unix
- [#51467](https://github.com/openai/codex/pull/51467) Keep submission logs useful without exposing payloads
- [#51466](https://github.com/openai/codex/pull/51466) Keep Guardian transcript records structured through budget recovery
- [#51465](https://github.com/openai/codex/pull/51465) Add an optional JSON transcript format for Guardian
- [#51463](https://github.com/openai/codex/pull/51463) Record resolved model and reasoning effort in sub-agent activity
- [#51460](https://github.com/openai/codex/pull/51460) Retry realtime sideband attachment while an existing call activates
- [#51459](https://github.com/openai/codex/pull/51459) Preserve wrapped help links in Windows sandbox prompts
- [#51458](https://github.com/openai/codex/pull/51458) Make URLs clickable in user verification prompts
- [#51457](https://github.com/openai/codex/pull/51457) Preserve status usage hyperlinks when the URL wraps
- [#51452](https://github.com/openai/codex/pull/51452) Make banner URLs clickable across wrapped lines
- [#51451](https://github.com/openai/codex/pull/51451) Make URLs in the TUI warnings viewer clickable
- [#51450](https://github.com/openai/codex/pull/51450) Make URLs clickable in MCP elicitation prompts
- [#51449](https://github.com/openai/codex/pull/51449) Make URLs clickable in TUI user input questions
- [#51441](https://github.com/openai/codex/pull/51441) Fix core integration tests for updated turn APIs
- [#51440](https://github.com/openai/codex/pull/51440) Honor Retry-After in WebSocket error events
- [#51439](https://github.com/openai/codex/pull/51439) Preserve clickable URLs in TUI approval headers
- [#51433](https://github.com/openai/codex/pull/51433) Show hook status messages as titles in the hooks browser
- [#51427](https://github.com/openai/codex/pull/51427) Prevent invalidated wakeups from starting a turn
- [#51425](https://github.com/openai/codex/pull/51425) Skip stable installer alias publishing for prereleases
- [#51426](https://github.com/openai/codex/pull/51426) Remove the Bazel JVM override for Windows ARM64 voice builds
- [#51422](https://github.com/openai/codex/pull/51422) Accept environment requests at thread and turn settings boundaries
- [#51421](https://github.com/openai/codex/pull/51421) Include root turn IDs in host-owned Apps tool calls
- [#51420](https://github.com/openai/codex/pull/51420) Finish idle thread unloads after slow shutdown
- [#51419](https://github.com/openai/codex/pull/51419) Preserve turn attribution when queued mail wakes durable sleep
- [#51415](https://github.com/openai/codex/pull/51415) Expose and persist turn lineage across the app server
- [#51411](https://github.com/openai/codex/pull/51411) Suppress repeated image paste presses in legacy terminals
- [#51407](https://github.com/openai/codex/pull/51407) Protect ripgrep lookup during Linux sandbox construction
- [#51402](https://github.com/openai/codex/pull/51402) Preserve turn attribution across recovery and compaction

#### 🐛 New Issues
- [#51533](https://github.com/openai/codex/issues/51533) [dot][Voice] Calls fail across iOS/macOS; web dot page also fails to load `bug` `app` `connectivity` `dots` 💬4
- [#51268](https://github.com/openai/codex/issues/51268) CLI: persist dismissal of "Set up security for Daybreak mode" reminder `enhancement` `TUI` `CLI` 💬2
- [#51372](https://github.com/openai/codex/issues/51372) dot cloud task creation and continuation fail with AppServerBackendRequestError / UNKNOWN while manual creation works `bug` `codex-web` `app-server` `dots` 💬2
- [#51549](https://github.com/openai/codex/issues/51549) Clicking upgrade when prompted your usage remaining is low, it redirects you to a new codex within your codex instead of pricing `bug` `rate-limits` `app` 💬1
- [#51543](https://github.com/openai/codex/issues/51543) ChatGPT iOS Work Mode: interrupted responses remain blank or show only “Working” `bug` `iOS` `connectivity` 💬1
- [#51536](https://github.com/openai/codex/issues/51536) [Docs][Scheduled] Reconcile file access, Chat/Work execution mode, and desktop/Codex scheduler terminology `documentation` `app` `automations` 💬1
- [#51535](https://github.com/openai/codex/issues/51535) Error message when i send message in codex `bug` `windows-os` `app` `app-server` 💬1
- [#51530](https://github.com/openai/codex/issues/51530) Existing Codex task cannot receive messages — invalid turn/start parameters `bug` `app` `app-server` 💬1
- [#51528](https://github.com/openai/codex/issues/51528) Windows: duplicate uninstall-listener ERROR_NO_TOKEN (1008) at boot; AppX 0x8007045B with ChatGPT installed `bug` `windows-os` `sandbox` `app` 💬1
- [#51522](https://github.com/openai/codex/issues/51522) [ChatGPT Scheduled] Loading Medium defaults and result-chat model labels obscure saved settings and execution `bug` `automations` 💬1
- [#51548](https://github.com/openai/codex/issues/51548) [Windows] Work/Codex blocked by “Unable to load account”; ChatGPT chat works, CLI login succeeds, Doctor reports 0 failures `bug` `windows-os` `auth` `app`
- [#51546](https://github.com/openai/codex/issues/51546) Agent Plugins v1 root manifests are recognized but ignored for host skill namespaces `bug` `skills`
- [#51545](https://github.com/openai/codex/issues/51545) TypeScript SDK: DEL characters produce invalid TOML overrides and corrupt escaped strings `bug` `CLI` `config`
- [#51542](https://github.com/openai/codex/issues/51542) Python SDK: cancelling stream_text leaves a blocked notification worker and retained turn subscription `bug` `app-server`
- [#51544](https://github.com/openai/codex/issues/51544) Shell installer: updating PATH replaces symlinked profiles and changes existing file permissions `bug` `CLI`
- [#51541](https://github.com/openai/codex/issues/51541) Git Bash on Windows: terminal enlarge/shrink breaks chat input and previous conversation scrolling `bug` `windows-os` `TUI` `CLI`
- [#51540](https://github.com/openai/codex/issues/51540) Dots: opaque “abuse prevention” breaks undermine always-on reliability; no usage meter or reset information `enhancement` `rate-limits` `app` `dots`
- [#51538](https://github.com/openai/codex/issues/51538) Shell installer: relative CODEX_HOME breaks package links and relative CODEX_INSTALL_DIR writes a cwd-dependent PATH `bug` `CLI`
- [#51537](https://github.com/openai/codex/issues/51537) TypeScript SDK: aborting after closing streamed events crashes the host with an unhandled AbortError `bug` `exec`
- [#51534](https://github.com/openai/codex/issues/51534) [App/Windows] Missing managed worktree remains watched after restart; cleanup rejected by ownership and absent from Settings `bug` `windows-os` `app` `session`
- [#51532](https://github.com/openai/codex/issues/51532) [app] list_threads fails with "Missing pinned thread" for client-ID aliases under Last updated sorting `bug` `tool-calls` `app` `session`
- [#51531](https://github.com/openai/codex/issues/51531) Accessibility: Codex IDE does not trigger VS Code "Chat Response Received" signal when a turn completes `bug` `extension`
- [#51529](https://github.com/openai/codex/issues/51529) Codex Windows Chrome attachment rejects an ordinary web tab as a foreign-extension URL `bug` `windows-os` `app` `browser`
- [#51526](https://github.com/openai/codex/issues/51526) [macOS][Desktop] Generated PPTX preview/comment UI no longer opens; open_in_codex stays queued `bug` `tool-calls` `app`
- [#51524](https://github.com/openai/codex/issues/51524) [Windows] Computer Use stops at get_window_state: cannot determine current browser URL (Chrome and Edge) `bug` `windows-os` `app` `computer-use`
- [#51523](https://github.com/openai/codex/issues/51523) [Dots][macOS] Reply silently missing, with no status or delivery warning `bug` `app` `dots`

#### 🔒 Closed Issues
- [#51533](https://github.com/openai/codex/issues/51533) [dot][Voice] Calls fail across iOS/macOS; web dot page also fails to load
- [#49448](https://github.com/openai/codex/issues/49448) ChatGPT Desktop: support /btw side conversations

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,244 · **Open issues:** 778 · **Last push:** <1h ago

On October 7, 2026, Gemini CLI released two notable versions: v0.65.0-nightly.20261007.gef59c532f and v0.64.0-preview.0. The latest nightly version includes crucial fixes such as enforcing read-only workspace settings in untrusted folders and preventing the deletion of resumed session history on quick exits. Additionally, the preview release introduces a refactor of the V1 to V2 settings migration logic. Among the significant merged pull requests, improvements were made to align OAuth callback parameter validation with RFC 9207 and to prevent unnecessary terminal clears during expansion. No new issues were reported today, indicating a stable development environment.

#### 🚀 New Releases
- [v0.65.0-nightly.20261007.gef59c532f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-nightly.20261007.gef59c532f) Release v0.65.0-nightly.20261007.gef59c532f
- [v0.64.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-preview.0) Release v0.64.0-preview.0
- [v0.63.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0) Release v0.63.0

#### ✅ Merged PRs
- [#29657](https://github.com/google-gemini/gemini-cli/pull/29657) chore(release): bump version to 0.65.0-nightly.20261006.gfb972b2f8
- [#29640](https://github.com/google-gemini/gemini-cli/pull/29640) fix(cli): prevent unnecessary terminal clears and scroll resets when expanding with Ctrl+O
- [#29616](https://github.com/google-gemini/gemini-cli/pull/29616) fix(core): align OAuth callback iss parameter validation with RFC 9207 metadata
- [#29659](https://github.com/google-gemini/gemini-cli/pull/29659) Changelog for v0.63.0
- [#29656](https://github.com/google-gemini/gemini-cli/pull/29656) Changelog for v0.64.0-preview.0
- [#29584](https://github.com/google-gemini/gemini-cli/pull/29584) fix(core): prevent deletion of resumed session history on quick exit (#29198)
- [#29618](https://github.com/google-gemini/gemini-cli/pull/29618) fix(core): avoid duplicate tool response turns when resuming sessions
- [#29583](https://github.com/google-gemini/gemini-cli/pull/29583) fix(cli): enforce read-only workspace settings in untrusted folders

#### 🔒 Closed Issues
- [#29574](https://github.com/google-gemini/gemini-cli/issues/29574) bug(core): 400 Bad Request "Requests ending with a model turn are not supported" when reading image files via ReadFile tool

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,241 · **Open issues:** 2,172 · **Last push:** <1h ago

On October 7, 2026, GitHub Copilot CLI released version 1.0.93-3, which improved the MCP server configuration by allowing changes to be applied between turns without restarting the session. Additionally, version 1.0.93-2 introduced the enterprise permissions.limitTo feature to enforce managed domain boundaries for network requests and updated the model picker to prioritize GPT-6.1 Sol, GPT-6 Astra/Luna, and Claude 5.5 models. While there were no merged pull requests today, several new issues emerged, notably #5066, which addresses an assisted permissions regression, and #5068, which reports a sign-in failure on Windows due to scope validation issues. Other issues include feature requests for cumulative token usage tracking and command approval mechanisms, indicating ongoing development and user feedback engagement.

#### 🚀 New Releases
- [v1.0.93-3](https://github.com/github/copilot-cli/releases/tag/v1.0.93-3) 1.0.93-3
- [v1.0.93-2](https://github.com/github/copilot-cli/releases/tag/v1.0.93-2) 1.0.93-2

#### 🐛 New Issues
- [#5066](https://github.com/github/copilot-cli/issues/5066) Assisted permissions regression `triage` 💬3
- [#5068](https://github.com/github/copilot-cli/issues/5068) Windows: MCP Entra sign-in fails with "this server's advertised scopes could not be safely validated for the account broker" `triage`
- [#5067](https://github.com/github/copilot-cli/issues/5067) reconstruction of context `triage`
- [#5065](https://github.com/github/copilot-cli/issues/5065) Include cumulative token usage in session.usage_checkpoint `triage`
- [#5064](https://github.com/github/copilot-cli/issues/5064) Let the agent suggest /compact as a prompt I approve inside the CLI, so it runs while the cache is warm `triage`
- [#5063](https://github.com/github/copilot-cli/issues/5063) OverridesBuiltInTool is ignored for store_memory / vote_memory; calls run the built-in memory executor `triage`
- [#5062](https://github.com/github/copilot-cli/issues/5062) Allow commands to be approvable per-invocation but never persistently ('always approve' opt-out) `triage`

#### 🔒 Closed Issues
- [#3022](https://github.com/github/copilot-cli/issues/3022) --no-remote flag does not fully disable remote control
- [#4954](https://github.com/github/copilot-cli/issues/4954) Desktop app (Windows): enabling remote control fails with "Failed to set up remote session" — log shows "No authentication token available; remote export disabled"
- [#1300](https://github.com/github/copilot-cli/issues/1300) Can’t run `uv sync` in the sandbox due to file system access block
- [#3302](https://github.com/github/copilot-cli/issues/3302) Allow /research mode to access configured MCP servers
- [#1930](https://github.com/github/copilot-cli/issues/1930) Rider MCP tool schema mismatch with plugin v253.29346.144 (Rider 2025.3)
- [#1314](https://github.com/github/copilot-cli/issues/1314) Cli spawns windows temporarily for each mcp server

### OpenCode (`anomalyco/opencode`)

**Stars:** 212,053 · **Open issues:** 6,257 · **Last push:** <1h ago

On October 7, 2026, OpenCode released version v1.18.35, introducing improvements such as canonical redirects and support for JSON and Markdown data formats for agent-readable stats, while also addressing a bug where xAI tool results now include supported images. Significant merged features included the enhancement of the embedded web UI with Brotli compression and the ability to stream filesystem read responses with HTTP Range support. Notably, major features also included preview capabilities for Word, Excel, and PowerPoint files, alongside the addition of external credential references. Among new issues raised, a critical concern was identified regarding the V2 version's inability to import V1 MCP OAuth credentials, resulting in server authentication issues post-upgrade.

#### 🚀 New Releases
- [v1.18.35](https://github.com/anomalyco/opencode/releases/tag/v1.18.35) v1.18.35

#### ✅ Merged PRs
- [#53645](https://github.com/anomalyco/opencode/pull/53645) fix(cli): serve the embedded web UI brotli-compressed
- [#53644](https://github.com/anomalyco/opencode/pull/53644) fix(cli): compress the embedded web UI at brotli's best quality
- [#53643](https://github.com/anomalyco/opencode/pull/53643) fix(cli): embed the web UI as raw bytes instead of base64 strings
- [#53088](https://github.com/anomalyco/opencode/pull/53088) feat(server): stream fs.read responses with HTTP Range support
- [#53624](https://github.com/anomalyco/opencode/pull/53624) feat(core): add external credential references
- [#53305](https://github.com/anomalyco/opencode/pull/53305) feat(app): preview Word, Excel and PowerPoint files
- [#53603](https://github.com/anomalyco/opencode/pull/53603) fix(ai): drop empty unfinished reasoning items on replay
- [#53627](https://github.com/anomalyco/opencode/pull/53627) fix(desktop): fix browser bar review findings
- [#53621](https://github.com/anomalyco/opencode/pull/53621) fix(stats): attribute exo usage to an unknown provider
- [#53622](https://github.com/anomalyco/opencode/pull/53622) docs(web): add Exo Free to Zen docs

#### 🐛 New Issues
- [#53607](https://github.com/anomalyco/opencode/issues/53607) mcp: V2 does not import V1 MCP OAuth credentials from mcp-auth.json, servers drop to needs_auth after upgrade `needs:compliance` 💬4
- [#53657](https://github.com/anomalyco/opencode/issues/53657) [FEATURE]: Show a back shortcut hint on the TUI stats screen 💬2
- [#53653](https://github.com/anomalyco/opencode/issues/53653) [FEATURE]: single-press session abort keybind and /abort; a double Escape read as one key is dropped 💬2
- [#53652](https://github.com/anomalyco/opencode/issues/53652) TUI: no feedback between the second Escape and the session going idle 💬2
- [#53648](https://github.com/anomalyco/opencode/issues/53648) TUI shows LaTeX math in messages as raw source 💬2
- [#53649](https://github.com/anomalyco/opencode/issues/53649) /tui/select-session switches every attached TUI instead of one 💬2
- [#53647](https://github.com/anomalyco/opencode/issues/53647) Plugins with engines.opencode are skipped on prerelease builds 💬2
- [#53642](https://github.com/anomalyco/opencode/issues/53642) [FEATURE]: show and load the messages the TUI hides in long sessions 💬2
- [#53636](https://github.com/anomalyco/opencode/issues/53636) [FEATURE]: emit OSC 8 hyperlinks for URLs in TUI output 💬2
- [#53635](https://github.com/anomalyco/opencode/issues/53635) OpenCode edited code in plan mode 💬2
- [#53632](https://github.com/anomalyco/opencode/issues/53632) tui: stale Unicode text spills into sidebar in Herdr 💬2
- [#53631](https://github.com/anomalyco/opencode/issues/53631) 'Toggle Sidebar' still non-functional in 2.0.24 — sidebar.toggle has no webapp command (follow-up to #28971) 💬2
- [#53623](https://github.com/anomalyco/opencode/issues/53623) "Code Mode" instructions are confusing Gemma-4-31B 💬2
- [#53629](https://github.com/anomalyco/opencode/issues/53629) [FEATURE]: home returns to where end left a scrolled-up reader 💬2
- [#53617](https://github.com/anomalyco/opencode/issues/53617) desktop: stale cli/<version> binaries are never pruned, disk grows ~175 MB per update 💬2
- [#53614](https://github.com/anomalyco/opencode/issues/53614) sessions: long-running processes started outside the harness are invisible — no session-scoped process registry `needs:compliance` `2.0` 💬2
- [#53611](https://github.com/anomalyco/opencode/issues/53611) [FEATURE]: Show running subagents under the prompt 💬2
- [#53609](https://github.com/anomalyco/opencode/issues/53609) [FEATURE]: Setting to hide the tab agents / ctrl+p commands hints under the prompt 💬2
- [#53582](https://github.com/anomalyco/opencode/issues/53582) [Bug] Config-declared provider whose ID matches a catalog provider silently inherits the whole catalog model list — 389 unworkable models offered, then 400 💬2
- [#53604](https://github.com/anomalyco/opencode/issues/53604) config: project .opencode/ commands and config ignored when location is the global config directory 💬2
- [#53650](https://github.com/anomalyco/opencode/issues/53650) [FEATURE]: Add Foreman to ecosystem Projects 💬1
- [#53638](https://github.com/anomalyco/opencode/issues/53638) [FEATURE]: show the provider and model id in message footers 💬1
- [#53633](https://github.com/anomalyco/opencode/issues/53633) v2: Anthropic Messages transform throws on round-trip of provider-executed tool results it doesn't recognize, instead of degrading 💬1
- [#53616](https://github.com/anomalyco/opencode/issues/53616) mcp: `opencode mcp auth` fails with `client_id may not be blank` for plugin-managed auth 💬1

#### 🔒 Closed Issues
- [#48319](https://github.com/anomalyco/opencode/issues/48319) provider: stale composite reasoning item id (rs_A:rs_B) replayed after restart → invalid_request_error
- [#53631](https://github.com/anomalyco/opencode/issues/53631) 'Toggle Sidebar' still non-functional in 2.0.24 — sidebar.toggle has no webapp command (follow-up to #28971)
- [#53023](https://github.com/anomalyco/opencode/issues/53023) Problème site

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,337 · **Open issues:** 1,688 · **Last push:** <1h ago

On October 7, 2026, Qwen Code released version v0.25.1-preview.0, which includes a fix for replacing selected remote hosts without losing bindings and improvements in testing core components. Significant merged pull requests feature enhancements such as stopping unsupported LSP dynamic registration and ceasing JSONL prefix reads when budget constraints are met. Notably, new issues surfaced, most prominently #13527, which addresses concerns related to LSP diagnostics and the implications of a partial `extensionToLanguage` mapping. Overall, the day saw important updates and ongoing refinements, particularly in LSP functionalities and managed agent tests.

#### 🚀 New Releases
- [v0.25.1-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-preview.0) Release v0.25.1-preview.0

#### ✅ Merged PRs
- [#13551](https://github.com/QwenLM/qwen-code/pull/13551) test(managed-agent): commit authority-valid deltas in the restore byte-budget test
- [#13494](https://github.com/QwenLM/qwen-code/pull/13494) fix(core): stop advertising unsupported LSP dynamic registration
- [#13486](https://github.com/QwenLM/qwen-code/pull/13486) fix(core): stop JSONL prefix reads when their budget is met

#### 🐛 New Issues
- [#13527](https://github.com/QwenLM/qwen-code/issues/13527) LSP diagnostics: a partial extensionToLanguage mapping promotes one recognizable key to proof of complete ownership, so a server's own served extensions are declared foreign `priority/P2` `type/bug` `category/core` `status/ready-for-human` 💬4
- [#13519](https://github.com/QwenLM/qwen-code/issues/13519) Background agents lose the loop-detector name: loopType never reaches ForkedAgentResult `priority/P3` `status/blocked` `category/core` `scope/memory` 💬4
- [#13556](https://github.com/QwenLM/qwen-code/issues/13556) sed -i simulation misreads backslash escapes inside bracket expressions `priority/P1` `type/bug` `category/core` `scope/shell` 💬3
- [#13558](https://github.com/QwenLM/qwen-code/issues/13558) Markdown table with an unmatched backtick in a cell is not rendered as a table `status/in-review` `priority/P2` `type/bug` `category/ui` 💬3
- [#13542](https://github.com/QwenLM/qwen-code/issues/13542) test(managed-agent): holdsRestorePagesInsideThePerPageByteBudget broken on main by #13355 record validation `priority/P1` `type/bug` `category/development` `scope/testing` 💬3
- [#13491](https://github.com/QwenLM/qwen-code/issues/13491) LSP advertises dynamic registration support but rejects client/registerCapability `priority/P3` `type/bug` `category/core` 💬3
- [#13517](https://github.com/QwenLM/qwen-code/issues/13517) web-shell: the managed approval dialog's primary content path (tool.args) is not bidi/control-character escaped `priority/P2` `type/bug` `category/security` `scope/web-shell` 💬3
- [#13538](https://github.com/QwenLM/qwen-code/issues/13538) Side-query truncation is indistinguishable from success: generateText drops finishReason, so web-fetch can store a truncated page extract `priority/P2` `type/bug` `category/core` `scope/token-management` 💬3
- [#13537](https://github.com/QwenLM/qwen-code/issues/13537) feat(hosted): distinguish drive-intent recovery loads from query-only attachments when arming the undriven-takeover marker `priority/P2` `category/core` `scope/session-management` `type/enhancement` 💬3
- [#13533](https://github.com/QwenLM/qwen-code/issues/13533) fix(managed-agent): background-process exit observation and capture backpressure for H3 enablement `priority/P2` `type/feature-request` `category/core` `scope/shell` 💬3
- [#13535](https://github.com/QwenLM/qwen-code/issues/13535) feat(managed-agent): actor roles and tenant-isolation acceptance for production enablement `priority/P2` `type/feature-request` `category/core` `need-discussion` 💬3
- [#13534](https://github.com/QwenLM/qwen-code/issues/13534) feat(managed-agent): O4 retention and collection adapters for the remaining output producers `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#13532](https://github.com/QwenLM/qwen-code/issues/13532) test(managed-agent): H3 exact-head Linux physical acceptance for monitor_run enablement `priority/P2` `type/feature-request` `category/integration` `scope/session-management` 💬3
- [#13528](https://github.com/QwenLM/qwen-code/issues/13528) Deferred review findings from PR #13244 (side-query output budget): fabricated window term outranks a configured one, stale clamp/ceiling comments, silent exits `priority/P2` `status/blocked` `type/bug` `category/core` 💬3
- [#13524](https://github.com/QwenLM/qwen-code/issues/13524) Hosted glob results: relativizeGlobText half-rewrites a path containing a backslash (lookbehind class asymmetry), shipped to main via #13166 `priority/P2` `type/bug` `category/cli` `scope/file-operations` 💬3
- [#13503](https://github.com/QwenLM/qwen-code/issues/13503) Main CI failed: SDK Java on 0013e83635ed `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬3
- [#13514](https://github.com/QwenLM/qwen-code/issues/13514) Hosted Workspace search profile: PR #13166 deferred follow-ups - a standing errno path leak, a missing /2 route-level pin, and an owed doc sync `priority/P2` `status/blocked` `type/bug` `category/cli` 💬3
- [#13513](https://github.com/QwenLM/qwen-code/issues/13513) QWEN_CODE_SYSTEM_SETTINGS_PATH / QWEN_CODE_SYSTEM_DEFAULTS_PATH: env override is honored without any file-ownership check `priority/P3` `type/bug` `category/security` `scope/settings` 💬3
- [#13552](https://github.com/QwenLM/qwen-code/issues/13552) Main CI failed: E2E Tests — interactive/workflow-completion.test.ts > … > delivers 'WORKFLOW_MODEL_RESULT_12176' once `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13541](https://github.com/QwenLM/qwen-code/issues/13541) Release Failed for v0.25.0-nightly.20261006.ac497aeed9 on 2026-10-06 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13522](https://github.com/QwenLM/qwen-code/issues/13522) Main CI failed: Qwen Code CI — src/acp-integration/session/Session.test.ts > … > accounts for delegated work when a tool_call tool result re… (+1 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬2
- [#13518](https://github.com/QwenLM/qwen-code/issues/13518) Main CI failed: E2E Tests — cli/headless-workflow-skill.test.ts > … > exposes and expands a workflow Skill on the first natural-language … `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13509](https://github.com/QwenLM/qwen-code/issues/13509) feat(skills): add a /pr skill to publish the current branch as a PR 💬2
- [#13506](https://github.com/QwenLM/qwen-code/issues/13506) Main CI failed: SDK Java on 43a6e1e5e453 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13510](https://github.com/QwenLM/qwen-code/issues/13510) Main CI failed: SDK Java on 2ee56ab41b23 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13492](https://github.com/QwenLM/qwen-code/issues/13492) XML tool-call recovery dispatches markup quoted inside a parameter value `priority/P2` `type/bug` `category/core` `scope/core` 💬2
- [#13560](https://github.com/QwenLM/qwen-code/issues/13560) Deferred review findings from PR #13547: fix(ci): skip millisecond latency budgets on the release ECS pool (#13541) 💬1
- [#13553](https://github.com/QwenLM/qwen-code/issues/13553) Deferred review findings from PR #13472: fix(ci): raise Hosted verify step ceiling to 20 minutes (#13471) 💬1
- [#13546](https://github.com/QwenLM/qwen-code/issues/13546) Deferred review findings from PR #13314: fix(sdk-java): Close Hosted Harness review criticals from #12654 💬1
- [#13540](https://github.com/QwenLM/qwen-code/issues/13540) Deferred review findings from PR #13401: test(managed-agent): harden pinning witnesses and add renewal-arm pinning witnes 💬1
- [#13529](https://github.com/QwenLM/qwen-code/issues/13529) Deferred review findings from PR #13243: fix(cli): bound managed function-hook module evaluation and keep hold-fenced own 💬1
- [#13523](https://github.com/QwenLM/qwen-code/issues/13523) Deferred review findings from PR #13335: fix(managed-agent): config and API-surface hygiene from the #12692 R2 review 💬1
- [#13516](https://github.com/QwenLM/qwen-code/issues/13516) Deferred review findings from PR #13376: fix(managed-agent): check the replay before publishing a domain record 💬1

#### 🔒 Closed Issues
- [#13030](https://github.com/QwenLM/qwen-code/issues/13030) feat(managed-agent): Admit read-only search tools in a new Hosted Workspace profile
- [#13369](https://github.com/QwenLM/qwen-code/issues/13369) feat(managed-agent): Stage H2.5 — managed Hooks hardening between H2 and H3
- [#13527](https://github.com/QwenLM/qwen-code/issues/13527) LSP diagnostics: a partial extensionToLanguage mapping promotes one recognizable key to proof of complete ownership, so a server's own served extensions are declared foreign
- [#13209](https://github.com/QwenLM/qwen-code/issues/13209) models.dev catalog keys are not closed under normalize(): dotted qwen/glm/doubao spellings miss committed entries
- [#13542](https://github.com/QwenLM/qwen-code/issues/13542) test(managed-agent): holdsRestorePagesInsideThePerPageByteBudget broken on main by #13355 record validation
- [#13485](https://github.com/QwenLM/qwen-code/issues/13485) Bounded JSONL header reads consume the complete next physical line
- [#13491](https://github.com/QwenLM/qwen-code/issues/13491) LSP advertises dynamic registration support but rejects client/registerCapability
- [#13503](https://github.com/QwenLM/qwen-code/issues/13503) Main CI failed: SDK Java on 0013e83635ed
- [#13518](https://github.com/QwenLM/qwen-code/issues/13518) Main CI failed: E2E Tests — cli/headless-workflow-skill.test.ts > … > exposes and expands a workflow Skill on the first natural-language …
- [#13506](https://github.com/QwenLM/qwen-code/issues/13506) Main CI failed: SDK Java on 43a6e1e5e453
- [#13477](https://github.com/QwenLM/qwen-code/issues/13477) security: `memory.agentMaxTurns` / `agentTimeoutMinutes` are honored from Workspace scope, so a cloned repo can remove the turn and time caps on all five auto-approved memory agents
- [#13510](https://github.com/QwenLM/qwen-code/issues/13510) Main CI failed: SDK Java on 2ee56ab41b23

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

**Stars:** 391,522 · **Open issues:** 9,449 · **Last push:** <1h ago

On October 7, 2026, OpenClaw did not release any new versions but made significant strides in enhancing its functionality with various merged pull requests. Notable fixes included addressing issues with the claude-cli session tools that previously failed after an MCP loopback (PR #165432) and improving the handling of session patches that would hang during model catalog loading (PR #166376). Additionally, developers worked on refining the framework by sharing test executor fixtures (PR #166378) and addressing slow content-read attribution in journal logs (PR #166381). Among new issues, a concerning bug was reported regarding the egress proxy sentinel substitution being intermittently ineffective, causing calls to reach upstream APIs with outdated credentials (Issue #166137). Overall, the day was focused on optimizing existing features and resolving critical bugs.

#### ✅ Merged PRs
- [#162110](https://github.com/openclaw/openclaw/pull/162110) fix(browser): ignore extension pages during target enumeration
- [#150593](https://github.com/openclaw/openclaw/pull/150593) docs(google-vertex): document the ADC sentinel credential and required project/location env vars
- [#166338](https://github.com/openclaw/openclaw/pull/166338) fix(models): keep logged-out Claude CLI models listed with a login reason
- [#165432](https://github.com/openclaw/openclaw/pull/165432) fix(gateway): claude-cli session tools fail after the turn that started the MCP loopback ends
- [#166381](https://github.com/openclaw/openclaw/pull/166381) fix(git): expose slow content-read attribution in journal logs
- [#165993](https://github.com/openclaw/openclaw/pull/165993) perf(state): switching between agents reopens agent database executors on every request
- [#166104](https://github.com/openclaw/openclaw/pull/166104) fix: avoid heap-check stalls in busy Bun Gateways
- [#166378](https://github.com/openclaw/openclaw/pull/166378) refactor(config): share test executor fixture
- [#149992](https://github.com/openclaw/openclaw/pull/149992) docs(reference): clarify IDENTITY.md write-back behavior
- [#149719](https://github.com/openclaw/openclaw/pull/149719) docs: define compactionCount as total completions
- [#161740](https://github.com/openclaw/openclaw/pull/161740) fix(agents): model catalog worker crashes leave no trace in logs or status
- [#166222](https://github.com/openclaw/openclaw/pull/166222) fix(process): exec and MCP servers fail with ENOENT after a Homebrew Node upgrade
- [#166348](https://github.com/openclaw/openclaw/pull/166348) fix(release): preserve gateway fixture close callback
- [#166376](https://github.com/openclaw/openclaw/pull/166376) fix: session patches hang while the model catalog is loading
- [#166375](https://github.com/openclaw/openclaw/pull/166375) fix(workers): keep workspace recovery running during unrelated writes
- [#166294](https://github.com/openclaw/openclaw/pull/166294) fix(agents): clear empty uncharged recovery residue
- [#166373](https://github.com/openclaw/openclaw/pull/166373) test(chat): finish replacing wall-clock polls in the chat suites
- [#166316](https://github.com/openclaw/openclaw/pull/166316) fix(agents): agents delete fails when agents.entries is an $include
- [#166083](https://github.com/openclaw/openclaw/pull/166083) refactor(scripts): deslop scripts
- [#165596](https://github.com/openclaw/openclaw/pull/165596) fix(claude-cli): replies hang until the run times out when a background agent runs Bash
- [#166370](https://github.com/openclaw/openclaw/pull/166370) test(e2e): declare worker prompt-context capability
- [#166331](https://github.com/openclaw/openclaw/pull/166331) fix(sqlite): avoid main-thread stalls during maintenance lease checks
- [#166310](https://github.com/openclaw/openclaw/pull/166310) fix: avoid unrelated plugin capture during isolated completions
- [#166106](https://github.com/openclaw/openclaw/pull/166106) refactor(channels): deslop channels
- [#166372](https://github.com/openclaw/openclaw/pull/166372) docs(skills): auto-qa should not park approved PRs to ask for sign-off
- [#166060](https://github.com/openclaw/openclaw/pull/166060) fix(worktrees): parallel New Session worktrees are created one at a time
- [#165830](https://github.com/openclaw/openclaw/pull/165830) fix(update): let the operator's explicit TMPDIR win over the service default when planning the candidate snapshot
- [#165863](https://github.com/openclaw/openclaw/pull/165863) fix(update): restart the Gateway and record the interruption when the updater is signaled mid-activation
- [#166228](https://github.com/openclaw/openclaw/pull/166228) refactor(gateway): reuse shared SSE test fixture
- [#166362](https://github.com/openclaw/openclaw/pull/166362) fix: stop repeated browser replies after background child work
- [#165818](https://github.com/openclaw/openclaw/pull/165818) fix(proxy): emit subject/authority key identifiers so strict TLS clients trust the egress proxy
- [#166251](https://github.com/openclaw/openclaw/pull/166251) refactor(gateway): share successful agent test setup
- [#165820](https://github.com/openclaw/openclaw/pull/165820) fix(doctor): keep the pre-migration backup when the sqlite-vec extension cannot load on this host
- [#144951](https://github.com/openclaw/openclaw/pull/144951) fix(stepfun): resolve models.dev provider aliases
- [#144946](https://github.com/openclaw/openclaw/pull/144946) fix(together): resolve the models.dev togetherai provider alias
- [#166263](https://github.com/openclaw/openclaw/pull/166263) perf(gateway): bound anchored history pages and message groups
- [#162067](https://github.com/openclaw/openclaw/pull/162067) fix(gateway): session observer times out on CLI-backed utility models
- [#166264](https://github.com/openclaw/openclaw/pull/166264) perf(gateway): avoid missing-blob scans in PR statistics
- [#166363](https://github.com/openclaw/openclaw/pull/166363) refactor(extensions): deslop duplicate SDK helpers
- [#166342](https://github.com/openclaw/openclaw/pull/166342) fix(ci): finish merges when REST omits the merge commit
- [#166333](https://github.com/openclaw/openclaw/pull/166333) refactor(plugins): deslop non-channel tools and packages
- [#166345](https://github.com/openclaw/openclaw/pull/166345) refactor(native): deslop synthesized Codable keys and equality
- [#166343](https://github.com/openclaw/openclaw/pull/166343) refactor(agents): deslop promise setup and terminal branches
- [#166355](https://github.com/openclaw/openclaw/pull/166355) fix(memory-wiki): avoid full vault reads for multi-term metadata searches
- [#166353](https://github.com/openclaw/openclaw/pull/166353) chore(ui): refresh control ui locales
- [#166347](https://github.com/openclaw/openclaw/pull/166347) fix(ui): collapse empty child-attention gaps above composer
- [#162124](https://github.com/openclaw/openclaw/pull/162124) fix: preserve underlying failures in worker disposal errors
- [#149181](https://github.com/openclaw/openclaw/pull/149181) fix(ui): confirm before a dirty exec approvals target switch
- [#166327](https://github.com/openclaw/openclaw/pull/166327) refactor(prometheus): reuse shared string escaping
- [#166329](https://github.com/openclaw/openclaw/pull/166329) fix(memory-wiki): stop long searches on deadline or turn cancellation
- [#165334](https://github.com/openclaw/openclaw/pull/165334) fix(ui): revert Slack and Discord session return buttons
- [#153545](https://github.com/openclaw/openclaw/pull/153545) fix: preserve Claude CLI replies after long streamed turns
- [#166337](https://github.com/openclaw/openclaw/pull/166337) refactor(ui): deslop derived request state
- [#163004](https://github.com/openclaw/openclaw/pull/163004) test(gateway,desktop): remove low-value tests (batch d140)
- [#151152](https://github.com/openclaw/openclaw/pull/151152) test(worktrees): assert the hydration fetch starts no git maintenance child
- [#146155](https://github.com/openclaw/openclaw/pull/146155) fix(ui): keep effort selector after catalog refresh failure
- [#166341](https://github.com/openclaw/openclaw/pull/166341) fix(release): unblock 2026.9.9 full qualification
- [#151941](https://github.com/openclaw/openclaw/pull/151941) docs(media): explain that unset CLI placeholders become empty arguments
- [#166095](https://github.com/openclaw/openclaw/pull/166095) refactor(gateway): deslop gateway
- [#166199](https://github.com/openclaw/openclaw/pull/166199) fix: hide web search when no provider is configured
- [#166324](https://github.com/openclaw/openclaw/pull/166324) refactor(ui): deslop redundant styles
- [#166277](https://github.com/openclaw/openclaw/pull/166277) fix(test): restore registry IPC readiness
- [#166305](https://github.com/openclaw/openclaw/pull/166305) fix(models): recheck Claude CLI login for model lists after Gateway startup
- [#166257](https://github.com/openclaw/openclaw/pull/166257) fix(tooling): bootstrap workspace-owned dependencies from the donor
- [#166268](https://github.com/openclaw/openclaw/pull/166268) fix(node): reject incompatible worker prompt contexts before launch
- [#166319](https://github.com/openclaw/openclaw/pull/166319) docs: describe Claude CLI as a primary runtime with canonical model refs
- [#166315](https://github.com/openclaw/openclaw/pull/166315) fix(release): unblock stable validation evidence
- [#166261](https://github.com/openclaw/openclaw/pull/166261) fix(ui): keep chat at end after measured row growth
- [#166213](https://github.com/openclaw/openclaw/pull/166213) fix(ui): terminal disappears when docking from bottom to right
- [#166254](https://github.com/openclaw/openclaw/pull/166254) fix(gateway): verified Tailscale GitHub users are locked out of the Control UI during GitHub rate limits
- [#166312](https://github.com/openclaw/openclaw/pull/166312) fix(ui): align child error notices with the composer
- [#166175](https://github.com/openclaw/openclaw/pull/166175) fix(release): accept populated ghost rerun jobs
- [#166240](https://github.com/openclaw/openclaw/pull/166240) fix(e2e): avoid typed onboarding fixture port collisions
- [#166224](https://github.com/openclaw/openclaw/pull/166224) fix(ui): show child failures and attention in parent chat
- [#166299](https://github.com/openclaw/openclaw/pull/166299) fix(windows): release tests fail when foreign scheduled tasks are unreadable
- [#159815](https://github.com/openclaw/openclaw/pull/159815) feat(ui): add seven character variants to the Lobsterdex
- [#166301](https://github.com/openclaw/openclaw/pull/166301) fix(ui): gate content follow on height changes
- [#165271](https://github.com/openclaw/openclaw/pull/165271) improve(build): cut measured full-build time by 51–59%
- [#166217](https://github.com/openclaw/openclaw/pull/166217) fix(ci): clear MCP audit and service-worker test blockers
- [#166285](https://github.com/openclaw/openclaw/pull/166285) test(ui): await collaborator smooth follow
- [#163358](https://github.com/openclaw/openclaw/pull/163358) fix(llama-cpp): managed setup crashes and loops on macOS below 13.3
- [#166072](https://github.com/openclaw/openclaw/pull/166072) perf(worktrees): avoid full session parsing during GC
- [#166201](https://github.com/openclaw/openclaw/pull/166201) fix: inspect retained drafts in background-work tests
- [#166258](https://github.com/openclaw/openclaw/pull/166258) fix(ui): preserve follow intent across content growth
- [#166232](https://github.com/openclaw/openclaw/pull/166232) fix(update): inspect collected legacy service handoffs
- [#166195](https://github.com/openclaw/openclaw/pull/166195) perf(gateway): stream bounded link preview metadata
- [#166214](https://github.com/openclaw/openclaw/pull/166214) perf(diagnostics): release completed Git operation state
- [#166189](https://github.com/openclaw/openclaw/pull/166189) chore(deps): update fs-safe to 0.24.1 and clone plugin source captures
- [#166218](https://github.com/openclaw/openclaw/pull/166218) fix(test): stabilize remaining release shards
- [#163647](https://github.com/openclaw/openclaw/pull/163647) feat(clients): adopt worker-local inference placement
- [#166229](https://github.com/openclaw/openclaw/pull/166229) fix(test): prevent concurrent PowerShell completion stalls
- [#166239](https://github.com/openclaw/openclaw/pull/166239) fix(ui): preserve transcript scroll during interactions
- [#166179](https://github.com/openclaw/openclaw/pull/166179) fix: mobile gutter test can pass its collapse check when the click navigates away
- [#165733](https://github.com/openclaw/openclaw/pull/165733) refactor(sessions): persist run outcomes only; liveness comes from the run registry
- [#165780](https://github.com/openclaw/openclaw/pull/165780) fix(team-reports): keep the missed closed day when catch-up runs after midnight
- [#145538](https://github.com/openclaw/openclaw/pull/145538) fix(nodes): reject blank camera snap --facing
- [#145532](https://github.com/openclaw/openclaw/pull/145532) fix(logging): reject blank diagnostic stability query fields
- [#163577](https://github.com/openclaw/openclaw/pull/163577) fix(agents): clarify errors for malformed JSON-string edits
- [#157697](https://github.com/openclaw/openclaw/pull/157697) improve(anthropic): log Claude Code version probe failures
- [#159712](https://github.com/openclaw/openclaw/pull/159712) fix(agents): guide users after HTTP 400 prompt-size rejection
- [#107921](https://github.com/openclaw/openclaw/pull/107921) fix(memory): re-throw non-ENOENT/ENOTDIR errors in root memory file lookup
- [#145537](https://github.com/openclaw/openclaw/pull/145537) fix(cli): reject blank gateway stability --bundle

#### 🐛 New Issues
- [#166360](https://github.com/openclaw/openclaw/issues/166360) [Bug]: Paired node-worker E2E fixture omits prompt-context capability `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬4
- [#166137](https://github.com/openclaw/openclaw/issues/166137) Egress proxy sentinel substitution for exec runs intermittently ineffective — calls reach upstream APIs with unsubstituted/stale credentials (401) across runs and even across hosts within one run; self-heals after hours `P2` `clawsweeper:needs-info` `impact:security` `impact:auth-provider` 💬4
- [#166125](https://github.com/openclaw/openclaw/issues/166125) [Bug]: Failover to openai-api/gpt-6-astra sends reasoning_effort with function tools to /v1/chat/completions and is rejected with 400 `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#166246](https://github.com/openclaw/openclaw/issues/166246) Doctor skips its pre-repair state capture on Linux filesystems that reject RENAME_NOREPLACE `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#166302](https://github.com/openclaw/openclaw/issues/166302) [Bug]: memory-wiki: digest prefilter admits only exact-phrase matches, so multi-term wiki searches always read the whole vault `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#166279](https://github.com/openclaw/openclaw/issues/166279) [Feature]: Deliver memory prompt supplements (memory-wiki compiled digest) to native Codex harness with the legacy context engine `P2` `impact:session-state` 💬3
- [#166035](https://github.com/openclaw/openclaw/issues/166035) Gateway supervisor child processes (service-child-relay / service-child-group-anchor, comm=MainThread) accumulate without reclamation — 2,574 processes / 18.3 GB aggregate RSS over ~21 h, host swap exhausted `impact:crash-loop` `P0` 💬3
- [#165920](https://github.com/openclaw/openclaw/issues/165920) [Bug]: completionTarget "parent" on claude-cli: private completion turn is toolless and dropped; subagent_ended hook fails with "Queued registry write was superseded" (2026.9.8) `P1` `clawsweeper:needs-live-repro` `impact:session-state` `impact:message-loss` 💬3
- [#166242](https://github.com/openclaw/openclaw/issues/166242) [Bug]: doctor "invalid or inconsistent scheduled authority provenance" on command-payload cron jobs — suggested remediation cannot clear it `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#166216](https://github.com/openclaw/openclaw/issues/166216) Isolated heartbeat rollover drops sidebar category and icon while retaining label `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#166170](https://github.com/openclaw/openclaw/issues/166170) [Bug]: After brew upgrade node, running Gateway spawns children from removed Cellar path (spawn ENOENT) until restart `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166194](https://github.com/openclaw/openclaw/issues/166194) [Bug]: System-agent hook_block discards the conversation and invalidates session-bound approval follow-ups `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#165994](https://github.com/openclaw/openclaw/issues/165994) [Bug]: session entry revision guard throws invalid_state on any unrelated foreign commit to the agent DB (Codex spawns lost via PLUGIN_STATE_READ_FAILED) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:session-state` 💬2
- [#166344](https://github.com/openclaw/openclaw/issues/166344) Browser exec continuations repeat final replies after private child work `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166190](https://github.com/openclaw/openclaw/issues/166190) Update failure: runtime-verification-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#166208](https://github.com/openclaw/openclaw/issues/166208) Update failure: doctor-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#166206](https://github.com/openclaw/openclaw/issues/166206) Update failure: managed-service-preflight (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#166358](https://github.com/openclaw/openclaw/issues/166358) Update failure: previous-version-unverified (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#166303](https://github.com/openclaw/openclaw/issues/166303) [Bug]: memory-wiki: `wiki_search` drops the harness per-call abort signal and has no deadline owner, so an underfilled search runs unbounded (584 s observed) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#166323](https://github.com/openclaw/openclaw/issues/166323) [Bug]: Telegram DM topics (threaded mode): /acp spawn --bind here confirms binding but follow-ups still route to the default agent (2026.9.8) `P1` `clawsweeper:source-repro` `impact:session-state` `impact:message-loss` 💬2
- [#166304](https://github.com/openclaw/openclaw/issues/166304) [Feature]: Run memory-wiki whole-vault page reads and scoring off the gateway main thread (remaining after #152487) `P1` `clawsweeper:source-repro` `impact:crash-loop` `issue-rating: 🦞 diamond lobster` 💬2
- [#166230](https://github.com/openclaw/openclaw/issues/166230) Release-check flake: typed-onboarding OpenAI fixture collides on port 44190 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166271](https://github.com/openclaw/openclaw/issues/166271) [Bug]: before_prompt_build prependContext is not stored with the turn, so the next run rewrites history (prompt cache restart, thinking dropped on Opus 5.5 / Fable 5.1) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166256](https://github.com/openclaw/openclaw/issues/166256) [Bug]: iMessage self-chat: the agent's own sends are read back as operator input (echo loop) — DM echo probe never checks the chat_id scope, and C0 bytes survive echo-text normalization 💬2
- [#166215](https://github.com/openclaw/openclaw/issues/166215) [Bug]: Mattermost: mid-turn block replies fail with "Mattermost runtime not initialized" (streaming.mode "off" + block.enabled) while the final delivers `P1` `clawsweeper:source-repro` `impact:message-loss` `issue-rating: 🦞 diamond lobster` 💬2
- [#166244](https://github.com/openclaw/openclaw/issues/166244) [Bug]: Bundled peekaboo skill installs stale Peekaboo 4.5.0 from steipete/tap instead of openclaw/tap `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#166210](https://github.com/openclaw/openclaw/issues/166210) [Bug]: Local Comfy workflows with completed history and empty outputs poll until timeout `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166004](https://github.com/openclaw/openclaw/issues/166004) Windows: scheduled-task Gateway service won't start (readiness timeout / state-dir ownership); 2026.9.8 update rolls back with doctor-failed `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬2
- [#166141](https://github.com/openclaw/openclaw/issues/166141) [Bug]: NVIDIA models rejected by model catalog schema — remote bundle ships `cost: null` (2026.9.8) `P2` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬2
- [#166178](https://github.com/openclaw/openclaw/issues/166178) msteams: current channel-thread reply reactions target a nonexistent Graph message `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166197](https://github.com/openclaw/openclaw/issues/166197) [Bug]: Operator take-control pauses agent input only on cloud-worker desktops; node (and host) desktops keep receiving agent input and screenshots `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#166191](https://github.com/openclaw/openclaw/issues/166191) Background-work browser test cannot inspect the hidden parent draft `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166177](https://github.com/openclaw/openclaw/issues/166177) Queued agent cancellations omit execution phase during preparation `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166038](https://github.com/openclaw/openclaw/issues/166038) [Bug]: Manual /compact aborts the in-flight turn and silently drops the user's pending request `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166171](https://github.com/openclaw/openclaw/issues/166171) Mobile bubble margin assertions fail after activity links moved into the summary `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166162](https://github.com/openclaw/openclaw/issues/166162) CI: queued RPC restart test waits for completion before releasing its fixture `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166144](https://github.com/openclaw/openclaw/issues/166144) Real-Gateway UI fixtures bypass the new chat login handoff `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166143](https://github.com/openclaw/openclaw/issues/166143) CI: voice-call unused CallBrief export fails dependency checks `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166076](https://github.com/openclaw/openclaw/issues/166076) [Bug]: Tool-loop context-engine assemble ignores reserve and system prompt, so the mid-turn precheck trips `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166084](https://github.com/openclaw/openclaw/issues/166084) [Bug]: sessions.catalog.continue Gateway copies can wait indefinitely on model catalog publication `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#166138](https://github.com/openclaw/openclaw/issues/166138) System-agent runtime admission always fails (prepared model runtime plugin generation was superseded), with no publication diagnostic; manual plugin reloads separately time out on retained work `P0` `impact:ux-release-blocker` 💬2
- [#166134](https://github.com/openclaw/openclaw/issues/166134) [Bug]: Staged inbound image fails to reload on later turns; the history failure notice makes the model retract a correct image answer `bug` `no-stale` `bug:behavior` `P1` 💬2
- [#166117](https://github.com/openclaw/openclaw/issues/166117) [Bug]: 2026.9.8 claude-cli: plugin subagent completions (memory-core dreaming) never forward the auth profile → 401, silent fallback `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166382](https://github.com/openclaw/openclaw/issues/166382) [Bug]: plugin source capture fails with EBADF on Linux reflink filesystems (fs-safe clone:auto returns write-only fd) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#166203](https://github.com/openclaw/openclaw/issues/166203) [Bug]: Empty uncharged mainRestartRecovery aggregate makes every requester-settle wake fail SESSION_WORK_START_CHANGED; subagent result never delivered `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#166377](https://github.com/openclaw/openclaw/issues/166377) [Bug]: Package recovery record stuck in `prepared` — `repair` refuses (publication object changed) and `retire` refuses (cannot retire `prepared`) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#166330](https://github.com/openclaw/openclaw/issues/166330) [Bug]: SQLite maintenance ownership checks stall the main thread with redundant snapshots `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#166369](https://github.com/openclaw/openclaw/issues/166369) [Bug]: sessions.patch lifecycle mutation holders stay in phase run for hours; later patches time out until gateway restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#166367](https://github.com/openclaw/openclaw/issues/166367) [Feature]: Community Voice PE native Talk adapter — implementation and integration proposal `P3` 💬1
- [#166071](https://github.com/openclaw/openclaw/issues/166071) [Feature]: claude-cli: keep Claude Code's own memory (CLAUDE.md, auto memory) out of agent turns by default `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#165943](https://github.com/openclaw/openclaw/issues/165943) Feature: muse-system-settings bundle MCP mode for Muse CLI backends `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166354](https://github.com/openclaw/openclaw/issues/166354) Discord: a reply or send with several images is split into one message per image `P2` `impact:ux-friction` 💬1
- [#166351](https://github.com/openclaw/openclaw/issues/166351) [Bug]: sessions.send runs an undispatched session on the Gateway after sessions.dispatch to an isolation=container node was refused `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166349](https://github.com/openclaw/openclaw/issues/166349) Codex native children: define parent wake and restart recovery semantics `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166350](https://github.com/openclaw/openclaw/issues/166350) Codex native children: define persistent activity in chat history `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166336](https://github.com/openclaw/openclaw/issues/166336) Agent `automations` tool silently vanishes org-wide mid-session — run-level cron creator authority resolves falsy for every session (worker_turn_tool_authorities empty), persists across cold restarts, no config change and no logged event `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#166332](https://github.com/openclaw/openclaw/issues/166332) [Bug]: macOS app Peekaboo Bridge rejects current Peekaboo CLI 4.8.0 (versionMismatch), CLI reports a handshake timeout `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#166295](https://github.com/openclaw/openclaw/issues/166295) agents delete fails with CONFIG_INCLUDE_OWNERSHIP when agents.entries is an $include (collectInto treats undefined-valued keys as changes) `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#166328](https://github.com/openclaw/openclaw/issues/166328) workboard_list caps at 200 oldest-first with no offset/updatedAfter/label filter — newest cards are unreachable on larger boards `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166318](https://github.com/openclaw/openclaw/issues/166318) Bug: Android browser file picker greys out STL attachments in Control UI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#166219](https://github.com/openclaw/openclaw/issues/166219) CI flake: collaborator-scroll real-Gateway assertion drifts under full release validation `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#166300](https://github.com/openclaw/openclaw/issues/166300) [Bug] Restart recovery resumes a completed 70-day-old conversation after the run-outcome refactor `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#166314](https://github.com/openclaw/openclaw/issues/166314) Pause publication loses original acceptance during promotion: undeployed durability correction and design acceptance request `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166307](https://github.com/openclaw/openclaw/issues/166307) [Bug]: Telegram DM that reaches dispatch as the previous run ends gets the "couldn't produce or deliver a reply" notice, then a queued turn answers it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#166309](https://github.com/openclaw/openclaw/issues/166309) [Bug]: updater-runtime-retention aborts on FICLONE EPERM (ext4 in unprivileged LXC) — no plain-copy fallback for EPERM `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#166297](https://github.com/openclaw/openclaw/issues/166297) [Feature]: expose assertion inventory coverage and unused allowances `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#166231](https://github.com/openclaw/openclaw/issues/166231) [Bug]: Control UI Usage page: selecting a session always fetches and renders 1000 full log entries (hardcoded limit), making chart rendering slow on large sessions 💬1
- [#166296](https://github.com/openclaw/openclaw/issues/166296) [Feature]: Add Mistral Large 4 to the Mistral provider catalog `enhancement` `P2` `clawsweeper:needs-info` `impact:auth-provider` 💬1
- [#166288](https://github.com/openclaw/openclaw/issues/166288) OAuth refresh can discard a validated rotated credential after a transient settlement-store miss `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#166289](https://github.com/openclaw/openclaw/issues/166289) model.usage diagnostic event double-fires for some completions (identical cost/tokens, exactly 1ms apart) `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬1
- [#166290](https://github.com/openclaw/openclaw/issues/166290) refactor(gateway): remove workspace manifest assertion debt `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#166286](https://github.com/openclaw/openclaw/issues/166286) Memory leak in prepared-model-catalog worker under provider/model config churn (2026.9.6) `impact:crash-loop` `P0` 💬1
- [#166276](https://github.com/openclaw/openclaw/issues/166276) [Feature]: Mattermost: allow streaming.progress.commentary (and narration) — the lane is already wired `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166275](https://github.com/openclaw/openclaw/issues/166275) [Feature]: Fireworks image-generation provider (FLUX) `P3` 💬1
- [#166273](https://github.com/openclaw/openclaw/issues/166273) feishu plugin: ~60s load at startup and ~60s channel-start reload (28.8MB SDK bundle + heavy top-level evaluation); bot-info probe misreports network timeout under startup contention `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#166274](https://github.com/openclaw/openclaw/issues/166274) cron: script payload holds exclusive state.write transaction for its whole run (210s observed) - heartbeats starve, qqbot/webchat disconnected `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#166272](https://github.com/openclaw/openclaw/issues/166272) [Bug]: History image prune rewrites an older message when it leaves the 3-turn window, restarting the prompt cache mid-session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166267](https://github.com/openclaw/openclaw/issues/166267) [Bug]: finished subagents keep requesterSettleWake forever on a busy top-level requester; already-delivered results pile up in every turn and survive restart `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#166266](https://github.com/openclaw/openclaw/issues/166266) [Bug]: Automation model-policy allow-list rejects valid fallback because it checks the runtime-prefixed id (claude-cli/...) against provider-prefixed entries (anthropic/...) `P2` `impact:auth-provider` 💬1
- [#166247](https://github.com/openclaw/openclaw/issues/166247) chat.send rejects __controlUiReconnectResume before its resolver strips it (operator app sends fail after reconnect) `P1` `impact:message-loss` `impact:ux-friction` 💬1
- [#166220](https://github.com/openclaw/openclaw/issues/166220) CI flake: PowerShell completion runner fails readiness on Linux shard `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#166241](https://github.com/openclaw/openclaw/issues/166241) [Bug]: lossless-claw auto-compaction never fires on Discord channel sessions (2026.9.6); manual compaction aborted by 360s stuck-session guard `P1` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦐 gold shrimp` 💬1
- [#166237](https://github.com/openclaw/openclaw/issues/166237) [Bug]: Each plugin replacement (config hot reload) retains the old plugin instance for the life of the process `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#166225](https://github.com/openclaw/openclaw/issues/166225) [Bug]: strange behavior of reset my session while context overload `bug` `bug:behavior` `P2` `impact:session-state` 💬1
- [#166227](https://github.com/openclaw/openclaw/issues/166227) Release-check flake: gateway wizard cancellation E2E collides on fixed port 6032 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#166226](https://github.com/openclaw/openclaw/issues/166226) Release-check flake: diagnostics-prometheus managed install runtime hits 300s timeout `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#166221](https://github.com/openclaw/openclaw/issues/166221) [Bug]: Update 2026.9.4 → 2026.9.8 fails during SQLite preflight/candidate snapshot; standalone worker succeeds `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#166212](https://github.com/openclaw/openclaw/issues/166212) [Feature]: Optional UI workflow metadata for local Comfy PNG round-trip `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166207](https://github.com/openclaw/openclaw/issues/166207) Telegram outbound document/video upload fails for mp4 of ANY size (6.8MB included) while direct Bot API succeeds `P2` `impact:message-loss` 💬1
- [#166202](https://github.com/openclaw/openclaw/issues/166202) [Bug]: splitShellArgs drops empty quoted args and keeps backslash-newline `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#166205](https://github.com/openclaw/openclaw/issues/166205) Outbound attachment allowlist rejects .srt subtitle files (no config to extend) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166196](https://github.com/openclaw/openclaw/issues/166196) [Bug]: A wedged computer driver blocks every cloud-worker teardown (idle reclaim, Stop and `force`) while the summary still reports the desktop as usable `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#166204](https://github.com/openclaw/openclaw/issues/166204) doctor --fix aborts on already-migrated session stores: "Session recovery history cannot be verified; SQLite destination is not empty" `impact:session-state` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#166198](https://github.com/openclaw/openclaw/issues/166198) [Bug]: Windows cloud workers run `crabbox exec` in a 171–187-character workspace path, so programs started from it hit MAX_PATH (Error 206) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#166187](https://github.com/openclaw/openclaw/issues/166187) Crabbox wrapper fixture setup times out in full CI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#166181](https://github.com/openclaw/openclaw/issues/166181) [Bug]: Telegram forum final replies rejected by durable delivery while outbound sends succeed (2026.9.8) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#166176](https://github.com/openclaw/openclaw/issues/166176) google: Gemini turns discard context counts used for compaction `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#166164](https://github.com/openclaw/openclaw/issues/166164) Plugin copy mutation fixtures intermittently fail when ctime does not advance `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#166161](https://github.com/openclaw/openclaw/issues/166161) [Bug]: Default plugin approval decisions offer Allow Always, but `before_tool_call` approvals are never persisted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166159](https://github.com/openclaw/openclaw/issues/166159) [Feature]: Normalized browser `act` request for `before_tool_call` and a `browser-action` approval scope `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:security` 💬1
- [#166156](https://github.com/openclaw/openclaw/issues/166156) [Feature]: Talk: owner opt-out for the extra spoken confirmation (talk.voiceConfirmation: "off", default unchanged) `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#166160](https://github.com/openclaw/openclaw/issues/166160) [Feature]: Plugin approval approvers for channels beyond Slack, and fail fast when no approver can resolve a card `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#166158](https://github.com/openclaw/openclaw/issues/166158) [Feature]: Expose host-resolved `message` destinations (`derivedTargets`) to `before_tool_call` hooks `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166150](https://github.com/openclaw/openclaw/issues/166150) Buzz recovery socket test fails waiting for its first delivery `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#166145](https://github.com/openclaw/openclaw/issues/166145) Android progress-card disclosure regression test cannot locate the expand control `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#166146](https://github.com/openclaw/openclaw/issues/166146) [Bug]: macOS sidebar right-click appears to refresh UI and prevents normal context-menu selection `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#166136](https://github.com/openclaw/openclaw/issues/166136) [Bug]: Session-bound cron agentTurn fails with "Session transcript changed during context read" when an inbound message to that session is committed while the cron run holds the session lane `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#166135](https://github.com/openclaw/openclaw/issues/166135) [Bug]: Completed package-update receipt blocks updates after filesystem device ID changes (Linux/Btrfs) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬1
- [#166133](https://github.com/openclaw/openclaw/issues/166133) [Bug]: MCP tool_call wrapper coerces integer args to string, breaks MCP tools with integer params `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬1
- [#166130](https://github.com/openclaw/openclaw/issues/166130) claude-cli: transcript probe ignores CLAUDE_CONFIG_DIR, so a Gateway with a separate Claude config dir treats every session as transcript-missing (live-session failover + binding resets) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#166065](https://github.com/openclaw/openclaw/issues/166065) Simplify private infrastructure and plugin abstractions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1

#### 🔒 Closed Issues
- [#157126](https://github.com/openclaw/openclaw/issues/157126) [Bug]: claude-cli MCP bridge inherits the request scope that first started it; after a restart-recovery run, owner turns lose operator.admin
- [#154114](https://github.com/openclaw/openclaw/issues/154114) openclaw update: candidate rehearsal fails with 'No usable, authenticated, tool-capable inference route' despite live Gateway having working model auth
- [#165617](https://github.com/openclaw/openclaw/issues/165617) fs-safe no-replace root move fails with EINVAL on QNAP (ZFS-backed shares) while plain renameat2(RENAME_NOREPLACE) works
- [#150132](https://github.com/openclaw/openclaw/issues/150132) claude-cli: `--include-partial-messages` deltas are metered against the frozen 8 MiB per-turn stdout cap, so long tool-heavy turns (~100–130k chars of written code) lose their final reply; the cap has been non-configurable since #111382
- [#130971](https://github.com/openclaw/openclaw/issues/130971) Compaction timeout kills summarization streams that are merely slow — bound stalls (no-progress), not total time
- [#166360](https://github.com/openclaw/openclaw/issues/166360) [Bug]: Paired node-worker E2E fixture omits prompt-context capability
- [#166125](https://github.com/openclaw/openclaw/issues/166125) [Bug]: Failover to openai-api/gpt-6-astra sends reasoning_effort with function tools to /v1/chat/completions and is rejected with 400
- [#165807](https://github.com/openclaw/openclaw/issues/165807) [Bug]: Managed update environment overrides explicit CLI TMPDIR with service default
- [#166302](https://github.com/openclaw/openclaw/issues/166302) [Bug]: memory-wiki: digest prefilter admits only exact-phrase matches, so multi-term wiki searches always read the whole vault
- [#166279](https://github.com/openclaw/openclaw/issues/166279) [Feature]: Deliver memory prompt supplements (memory-wiki compiled digest) to native Codex harness with the legacy context engine
- [#166035](https://github.com/openclaw/openclaw/issues/166035) Gateway supervisor child processes (service-child-relay / service-child-group-anchor, comm=MainThread) accumulate without reclamation — 2,574 processes / 18.3 GB aggregate RSS over ~21 h, host swap exhausted
- [#161739](https://github.com/openclaw/openclaw/issues/161739) [Bug]: On macOS, plugin source captures write full copies instead of APFS clones (COPYFILE_FICLONE does not clone on darwin)
- [#162172](https://github.com/openclaw/openclaw/issues/162172) Separate scheduled heartbeat failures from useful updates using automation alert policy
- [#152957](https://github.com/openclaw/openclaw/issues/152957) Update failure: global-install-failed (2026.9.4)
- [#152422](https://github.com/openclaw/openclaw/issues/152422) Update failure: unexpected-error (2026.9.4)
- [#143764](https://github.com/openclaw/openclaw/issues/143764) [Docs Bug]: Vertex ADC path requires the literal credential value "gcp-vertex-credentials", undocumented
- [#154630](https://github.com/openclaw/openclaw/issues/154630) Bug: Gateway restart fails with version mismatch error after upgrade
- [#149979](https://github.com/openclaw/openclaw/issues/149979) [Bug]: IDENTITY.md template incorrectly says set-identity writes values back to the file
- [#166170](https://github.com/openclaw/openclaw/issues/166170) [Bug]: After brew upgrade node, running Gateway spawns children from removed Cellar path (spawn ENOENT) until restart
- [#165994](https://github.com/openclaw/openclaw/issues/165994) [Bug]: session entry revision guard throws invalid_state on any unrelated foreign commit to the agent DB (Codex spawns lost via PLUGIN_STATE_READ_FAILED)
- [#139151](https://github.com/openclaw/openclaw/issues/139151) [Bug]: Secret egress proxy generates CA/leaf certificates without RFC 5280 key identifiers; all OpenSSL 3.x clients fail TLS
- [#166344](https://github.com/openclaw/openclaw/issues/166344) Browser exec continuations repeat final replies after private child work
- [#166190](https://github.com/openclaw/openclaw/issues/166190) Update failure: runtime-verification-failed (2026.9.3)
- [#166208](https://github.com/openclaw/openclaw/issues/166208) Update failure: doctor-failed (2026.9.4)
- [#166206](https://github.com/openclaw/openclaw/issues/166206) Update failure: managed-service-preflight (2026.9.5)
- [#166358](https://github.com/openclaw/openclaw/issues/166358) Update failure: previous-version-unverified (2026.9.5)
- [#154648](https://github.com/openclaw/openclaw/issues/154648) Update failure: target-metadata-preflight (2026.9.4)
- [#166303](https://github.com/openclaw/openclaw/issues/166303) [Bug]: memory-wiki: `wiki_search` drops the harness per-call abort signal and has no deadline owner, so an underfilled search runs unbounded (584 s observed)
- [#151151](https://github.com/openclaw/openclaw/issues/151151) [Bug]: Worktree creation runs a full git gc on the partial-clone source repository on git 2.36 to 2.53
- [#151884](https://github.com/openclaw/openclaw/issues/151884) An unset {{Language}} templates to an empty CLI argument instead of being dropped
- [#166230](https://github.com/openclaw/openclaw/issues/166230) Release-check flake: typed-onboarding OpenAI fixture collides on port 44190
- [#153375](https://github.com/openclaw/openclaw/issues/153375) Update failure: reconcile:abandoned (2026.9.5)
- [#139711](https://github.com/openclaw/openclaw/issues/139711) [Bug]: workboard_promote force:true does not persist — dependency pass reverts the card to its held status seconds later
- [#166256](https://github.com/openclaw/openclaw/issues/166256) [Bug]: iMessage self-chat: the agent's own sends are read back as operator input (echo loop) — DM echo probe never checks the chat_id scope, and C0 bytes survive echo-text normalization
- [#128879](https://github.com/openclaw/openclaw/issues/128879) [Bug]: prebuilt Intel macOS llama-server binary requires macOS 13.3+ (LAPACK$ILP64 dyld crash on Monterey)
- [#153176](https://github.com/openclaw/openclaw/issues/153176) Update failure: repairing (2026.9.4)
- [#153077](https://github.com/openclaw/openclaw/issues/153077) Update failure: finalize:doctor (2026.9.5)
- [#164220](https://github.com/openclaw/openclaw/issues/164220) Auto-compaction failure dead-ends every following turn; fall back to a deterministic reduction instead
- [#166191](https://github.com/openclaw/openclaw/issues/166191) Background-work browser test cannot inspect the hidden parent draft
- [#166177](https://github.com/openclaw/openclaw/issues/166177) Queued agent cancellations omit execution phase during preparation
- [#166171](https://github.com/openclaw/openclaw/issues/166171) Mobile bubble margin assertions fail after activity links moved into the summary
- [#166162](https://github.com/openclaw/openclaw/issues/166162) CI: queued RPC restart test waits for completion before releasing its fixture
- [#166144](https://github.com/openclaw/openclaw/issues/166144) Real-Gateway UI fixtures bypass the new chat login handoff
- [#166143](https://github.com/openclaw/openclaw/issues/166143) CI: voice-call unused CallBrief export fails dependency checks
- [#159231](https://github.com/openclaw/openclaw/issues/159231) [Bug]: first image turn in a fresh gateway process loads the full model catalog even when the active model declares image input
- [#166084](https://github.com/openclaw/openclaw/issues/166084) [Bug]: sessions.catalog.continue Gateway copies can wait indefinitely on model catalog publication
- [#166138](https://github.com/openclaw/openclaw/issues/166138) System-agent runtime admission always fails (prepared model runtime plugin generation was superseded), with no publication diagnostic; manual plugin reloads separately time out on retained work
- [#151861](https://github.com/openclaw/openclaw/issues/151861) Provider-prefixed model reference is passed through verbatim => upstream API 400
- [#161738](https://github.com/openclaw/openclaw/issues/161738) [Bug]: Model-catalog worker failures are not logged or counted, so repeated worker replacement is invisible
- [#166203](https://github.com/openclaw/openclaw/issues/166203) [Bug]: Empty uncharged mainRestartRecovery aggregate makes every requester-settle wake fail SESSION_WORK_START_CHANGED; subagent result never delivered
- [#166330](https://github.com/openclaw/openclaw/issues/166330) [Bug]: SQLite maintenance ownership checks stall the main thread with redundant snapshots
- [#166367](https://github.com/openclaw/openclaw/issues/166367) [Feature]: Community Voice PE native Talk adapter — implementation and integration proposal
- [#165791](https://github.com/openclaw/openclaw/issues/165791) Doctor backup worker SIGILLs loading sqlite-vec on pre-AVX Intel Macs
- [#165943](https://github.com/openclaw/openclaw/issues/165943) Feature: muse-system-settings bundle MCP mode for Muse CLI backends
- [#166354](https://github.com/openclaw/openclaw/issues/166354) Discord: a reply or send with several images is split into one message per image
- [#127500](https://github.com/openclaw/openclaw/issues/127500) Switching exec-approvals target silently discards a dirty policy draft
- [#166295](https://github.com/openclaw/openclaw/issues/166295) agents delete fails with CONFIG_INCLUDE_OWNERSHIP when agents.entries is an $include (collectInto treats undefined-valued keys as changes)
- [#154102](https://github.com/openclaw/openclaw/issues/154102) [Bug]: updater lets the service unit's PATH select the Node runtime, so updates can run on a Node that fails the package's own engines constraint
- [#154027](https://github.com/openclaw/openclaw/issues/154027) Update failure: requested (2026.9.5)
- [#166219](https://github.com/openclaw/openclaw/issues/166219) CI flake: collaborator-scroll real-Gateway assertion drifts under full release validation
- [#166309](https://github.com/openclaw/openclaw/issues/166309) [Bug]: updater-runtime-retention aborts on FICLONE EPERM (ext4 in unprivileged LXC) — no plain-copy fallback for EPERM
- [#159814](https://github.com/openclaw/openclaw/issues/159814) Feature: add seven character variants to the Lobsterdex
- [#166231](https://github.com/openclaw/openclaw/issues/166231) [Bug]: Control UI Usage page: selecting a session always fetches and renders 1000 full log entries (hardcoded limit), making chart rendering slow on large sessions
- [#166286](https://github.com/openclaw/openclaw/issues/166286) Memory leak in prepared-model-catalog worker under provider/model config churn (2026.9.6)
- [#166275](https://github.com/openclaw/openclaw/issues/166275) [Feature]: Fireworks image-generation provider (FLUX)
- [#166266](https://github.com/openclaw/openclaw/issues/166266) [Bug]: Automation model-policy allow-list rejects valid fallback because it checks the runtime-prefixed id (claude-cli/...) against provider-prefixed entries (anthropic/...)
- [#152939](https://github.com/openclaw/openclaw/issues/152939) [Bug]: Gateway reports ready while default/system agent databases are refused; readiness omits agent admission
- [#166247](https://github.com/openclaw/openclaw/issues/166247) chat.send rejects __controlUiReconnectResume before its resolver strips it (operator app sends fail after reconnect)
- [#166220](https://github.com/openclaw/openclaw/issues/166220) CI flake: PowerShell completion runner fails readiness on Linux shard
- [#166225](https://github.com/openclaw/openclaw/issues/166225) [Bug]: strange behavior of reset my session while context overload
- [#152696](https://github.com/openclaw/openclaw/issues/152696) Config-reload restart forces after 300s and skips the active-work drain, with no remaining control since deferralTimeoutMs retirement
- [#153486](https://github.com/openclaw/openclaw/issues/153486) [Bug]: Edit tool silently drops model-sent JSON-string edits, fails with confusing validation error
- [#166207](https://github.com/openclaw/openclaw/issues/166207) Telegram outbound document/video upload fails for mp4 of ANY size (6.8MB included) while direct Bot API succeeds
- [#166187](https://github.com/openclaw/openclaw/issues/166187) Crabbox wrapper fixture setup times out in full CI
- [#166164](https://github.com/openclaw/openclaw/issues/166164) Plugin copy mutation fixtures intermittently fail when ctime does not advance
- [#166150](https://github.com/openclaw/openclaw/issues/166150) Buzz recovery socket test fails waiting for its first delivery
- [#166145](https://github.com/openclaw/openclaw/issues/166145) Android progress-card disclosure regression test cannot locate the expand control
- [#166065](https://github.com/openclaw/openclaw/issues/166065) Simplify private infrastructure and plugin abstractions

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 251,717 · **Open issues:** 47,735 · **Last push:** <1h ago

On October 7, 2026, there were no new releases for Hermes Agent, but a significant PR was merged, specifically #128515, which enhances the desktop version by pinning one backend per host across reconnect storms and the orphan reap. Several new critical issues were reported, the most significant being #134008, which outlines critical problems with the repo bot processing and review pipeline that can lead to silence and oversight. Additionally, a regression was noted in #133992 affecting macOS Desktop, where the update hand-off fails to recognize its own Hermes update, and #134175 reported that a typecheck issue on the web dashboard breaks the build, making it a priority for resolution.

#### ✅ Merged PRs
- [#128515](https://github.com/NousResearch/hermes-agent/pull/128515) test(desktop): pin one backend per host across reconnect storms and the orphan reap (#81275)

#### 🐛 New Issues
- [#134008](https://github.com/NousResearch/hermes-agent/issues/134008) [Bug] Critical issues with (hermes-agent) repo bot processing & review pipeline. They go silent and get forgotten `type/feature` `P3` `needs-decision` `sweeper:risk-automation` 💬11
- [#133992](https://github.com/NousResearch/hermes-agent/issues/133992) [Bug]: Regression of #78119 / #87514: macOS Desktop update hand-off refuses its own hermes update (custodian + second-resolution delegate ct) `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility` 💬5
- [#134175](https://github.com/NousResearch/hermes-agent/issues/134175) Web dashboard typecheck fails on new ChatSessionList.test.tsx (TS7017 + TS2339 ghost/outlined/size) — breaks web build `type/bug` `P1` `comp/dashboard` `area/install-update` 💬5
- [#134128](https://github.com/NousResearch/hermes-agent/issues/134128) Dashboard OAuth login fails when the token response is gzip-encoded (incorrect header check) `type/bug` `comp/plugins` `area/auth` `P3` 💬3
- [#133946](https://github.com/NousResearch/hermes-agent/issues/133946) [Bug]: pre_tool_call `approve` escalations never reach the selected approval transport (_ACTION_GATE transport=False) `type/bug` `comp/tools` `comp/plugins` `P3` 💬2
- [#134257](https://github.com/NousResearch/hermes-agent/issues/134257) [Bug]: /reasoning --global with no level errors instead of opening the picker (unlike /model --global) `type/bug` `comp/gateway` `platform/telegram` `area/config` 💬2
- [#134275](https://github.com/NousResearch/hermes-agent/issues/134275) feat(cli): doctor/sessions health check for state.db: snapshot-based probe, FTS integrity-check, scheduled last-good snapshots `type/feature` `comp/cli` `P3` `needs-decision` 💬1
- [#134251](https://github.com/NousResearch/hermes-agent/issues/134251) Allow execution middleware to deny a call (fail-open prevents spend guards) `duplicate` `type/feature` `comp/agent` `comp/cli` 💬1
- [#134265](https://github.com/NousResearch/hermes-agent/issues/134265) bug(pm/matrix): Matrix extra gated to sys_platform == 'linux' breaks unencrypted Matrix on macOS on every hermes update `type/bug` `duplicate` `comp/cli` `comp/plugins` 💬1
- [#134028](https://github.com/NousResearch/hermes-agent/issues/134028) [Bug]: Reasoning-only clean-stop promotion has no length gate — 14k monologue ships as a completed delegated-child summary `type/bug` `comp/agent` `tool/delegate` `P2` 💬1
- [#133855](https://github.com/NousResearch/hermes-agent/issues/133855) Desktop UI Fails to Reset Session on Launch — Stale History Persists Despite Clean Config `type/bug` `area/config` `P2` `needs-repro` 💬1
- [#133921](https://github.com/NousResearch/hermes-agent/issues/133921) [Bug] llama.cpp grammar classifier misses 'failed to parse grammar' — strip-and-retry recovery never fires `type/bug` `comp/agent` `P2` `area/local-models` 💬1
- [#133926](https://github.com/NousResearch/hermes-agent/issues/133926) router plugin: _DISK_TTL_SECONDS read at two sites, defined nowhere (NameError on the stale-mirror path) `type/bug` `comp/plugins` `P3` 💬1
- [#134243](https://github.com/NousResearch/hermes-agent/issues/134243) [Bug]: computer_use.no_overlay: false is a silent no-op in standard permission mode — no daemon exists to render the cursor, and the wrapper's own docstring recommends the setting `type/bug` `comp/tools` `area/config` `P3` 💬1
- [#133659](https://github.com/NousResearch/hermes-agent/issues/133659) [Bug] Windows/Edge real-profile snapshot launches signed-out (app-bound cookies don't decrypt) + agent-browser CDP attach race (10060) `type/bug` `comp/cli` `tool/browser` `area/config` 💬1
- [#134268](https://github.com/NousResearch/hermes-agent/issues/134268) [Bug]: Desktop hand-off exports the wrong pid as HERMES_UPDATE_HANDOFF_PID — every desktop-initiated update self-blocks with exit 2 `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility`
- [#134264](https://github.com/NousResearch/hermes-agent/issues/134264) [Bug]: Docker backend on a Windows host: sandbox paths (/workspace/...) never map to host files, so files made in the sandbox cannot be delivered `type/bug` `comp/gateway` `backend/docker` `P2`
- [#134258](https://github.com/NousResearch/hermes-agent/issues/134258) [Bug]: Discord /model provider selection times out due to duplicate select option value `type/bug` `comp/plugins` `platform/discord` `P3`
- [#134261](https://github.com/NousResearch/hermes-agent/issues/134261) [Bug]: DeepSeek content-moderation 400 ("Content Exists Risk") on a >50-message gateway session is misclassified as context overflow — turn not persisted, session wedges until /reset `type/bug` `comp/gateway` `provider/deepseek` `P1`
- [#134249](https://github.com/NousResearch/hermes-agent/issues/134249) NixOS: the tool closure can never be satisfied (check_runtime warns on every start; PM's downloader fails stub-ld) `type/bug` `comp/cli` `area/nix` `P2`
- [#134250](https://github.com/NousResearch/hermes-agent/issues/134250) Let transform_llm_output hooks chain instead of first-wins `type/feature` `comp/agent` `comp/plugins` `P3`
- [#134252](https://github.com/NousResearch/hermes-agent/issues/134252) Run LLM middleware for auxiliary client calls `type/feature` `comp/agent` `comp/plugins` `P3`
- [#134253](https://github.com/NousResearch/hermes-agent/issues/134253) Upstream lockfile bump request: npm vulnerabilities in agent-browser, web, and ui-tui workspaces `duplicate` `type/security` `comp/tui` `tool/browser`
- [#134246](https://github.com/NousResearch/hermes-agent/issues/134246) [Bug]: Windows ARM64: fresh install fails in npm ci on get-windows native build (follow-up to #82314) `type/bug` `P2` `sweeper:risk-compatibility` `sweeper:risk-platform-windows`
- [#134239](https://github.com/NousResearch/hermes-agent/issues/134239) Fresh-turn dispatch skips the compression-in-flight guard, so a second compression starts from a pre-commit snapshot and commits it (5.5 min stall + double compression) `type/bug` `comp/agent` `comp/gateway` `P1`
- [#134240](https://github.com/NousResearch/hermes-agent/issues/134240) [Bug]: plugin skills are missing from hermes skills list, GET /api/skills and GET /api/skills/content `type/bug` `comp/cli` `comp/plugins` `tool/skills`

#### 🔒 Closed Issues
- [#49769](https://github.com/NousResearch/hermes-agent/issues/49769) Recoverable 402 ("can only afford N tokens") is treated as terminal billing and drops the request
- [#108205](https://github.com/NousResearch/hermes-agent/issues/108205) Desktop: new sessions have cwd=NULL, so they don't group under their project
- [#130232](https://github.com/NousResearch/hermes-agent/issues/130232) Windows: plugin enable fails when PM copies the bundled Python tree past MAX_PATH (WinError 3)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,294 · **Open issues:** 8,479 · **Last push:** <1h ago

No new releases were made for vLLM in the last 24 hours, but a variety of significant updates were merged. Notably, PR #60307 implements a bug fix to ensure default penalties are honored in batch chat completions, while #57057 introduces an UltraQuant 4-bit KV cache backend designed for improved performance. Additionally, bug fixes such as #60280, which resolves a mypy safe-super error in EmbeddingGemma2Model, and #60254, which adds support for a multimodal pooling architecture in EmbeddingGemma2, were also noteworthy. Among new issues, #60174 highlights an output corruption bug in the DFlash2/DSpark setup related to prefix caching with specific model configurations, drawing attention for its potential impact on performance.

#### ✅ Merged PRs
- [#60215](https://github.com/vllm-project/vllm/pull/60215) [Perf][MRV2] Avoid stream syncs in NonUvaBuffer host-to-device copies
- [#58373](https://github.com/vllm-project/vllm/pull/58373) [Bugfix] Widen ep_gather output offset to int64
- [#60194](https://github.com/vllm-project/vllm/pull/60194) [Bugfix][MiniMax-M3] Fence decode indexer shared-memory stage reuse
- [#60323](https://github.com/vllm-project/vllm/pull/60323) [CI] Remove AMD mirror of CPU-only Rust frontend cargo steps
- [#52213](https://github.com/vllm-project/vllm/pull/52213) [CI][Releases] Trigger `perf-eval` Through Release Pipeline
- [#60201](https://github.com/vllm-project/vllm/pull/60201) [TEST][XPU][CI] Generalize model runner prefill tail classification tests to all platforms
- [#60310](https://github.com/vllm-project/vllm/pull/60310) [Bugfix][Frontend] Log the full request body when max_log_len is unset
- [#55708](https://github.com/vllm-project/vllm/pull/55708) [Bugfix][Core] Preserve speculative metrics when coalescing outputs
- [#55684](https://github.com/vllm-project/vllm/pull/55684) [Quantization] Layer re-quantization for linear layers through online quantization API (MXFP8 -> FP8 PTPC showcase)
- [#60307](https://github.com/vllm-project/vllm/pull/60307) [Bugfix][Frontend] Honor default penalties in batch chat completions
- [#59128](https://github.com/vllm-project/vllm/pull/59128) [Perf][MoE] Skip padded work in block-FP8 DeepGEMM experts
- [#60300](https://github.com/vllm-project/vllm/pull/60300) [Bugfix][MRV2][Spec Decode] Accept num_speculative_tokens in NgramGPUSpeculator.propose
- [#60295](https://github.com/vllm-project/vllm/pull/60295) [CI] Require transformers 5.19 for the EmbeddingGemma2 registry test
- [#57057](https://github.com/vllm-project/vllm/pull/57057) [Attention] Add UltraQuant 4-bit KV cache backend (FlyDSL D=256)
- [#40704](https://github.com/vllm-project/vllm/pull/40704) [ModelRunner V2] Speculative Decoding NGram GPU Implementations
- [#60114](https://github.com/vllm-project/vllm/pull/60114) [Misc] Add chat-completion options to gsm8k_eval.py CLI
- [#60029](https://github.com/vllm-project/vllm/pull/60029) Pad to 64 not 128 Q heads in flashMLA sparse
- [#56997](https://github.com/vllm-project/vllm/pull/56997) [Quantization] Prefer Humming before Marlin backends on SM90
- [#60280](https://github.com/vllm-project/vllm/pull/60280) [Bugfix][Model] Fix mypy safe-super error in EmbeddingGemma2Model
- [#56318](https://github.com/vllm-project/vllm/pull/56318) [Metrics] Expose cached prompt tokens by cache tier
- [#60254](https://github.com/vllm-project/vllm/pull/60254) [Model] Support EmbeddingGemma2 multimodal pooling architecture
- [#59541](https://github.com/vllm-project/vllm/pull/59541) [Bugfix][Spec Decode] Keep heterogeneous-vocab draft models on Model Runner V1
- [#57635](https://github.com/vllm-project/vllm/pull/57635) [Bugfix] Persist FlashInfer autotune cache per rank to fix the rank-0-only cache-hit deadlock
- [#60083](https://github.com/vllm-project/vllm/pull/60083) [Perf][HiSparse] Cache per-request residency instead of rescanning every page each step
- [#58181](https://github.com/vllm-project/vllm/pull/58181) [Frontend] Integer token IDs for generate output logprobs (GenerateLogProbs)
- [#60140](https://github.com/vllm-project/vllm/pull/60140) [GLM5.3 Perf] Switch to fp8 kv cache by default for GLM, 2.3%~5.5% E2E Throughput Improvement
- [#54857](https://github.com/vllm-project/vllm/pull/54857) [ROCm] Fuse MLA dual RMSNorm + FP8 group quant for DeepSeek-R1
- [#60241](https://github.com/vllm-project/vllm/pull/60241) [CI/Build] Warm the DP engines before measuring load balance in test_load
- [#58463](https://github.com/vllm-project/vllm/pull/58463) [Spec Decode] Remove eager metadata rebuild during MTP fused multi-step decode
- [#60240](https://github.com/vllm-project/vllm/pull/60240) [Bugfix] Warn only on per-request do_normalize/do_rescale overrides
- [#60190](https://github.com/vllm-project/vllm/pull/60190) Upgrade tpu-inference to v0.31.0
- [#48962](https://github.com/vllm-project/vllm/pull/48962) [Build] Migrate vendored DeepGEMM from pybind to TORCH_LIBRARY (abi3)
- [#56907](https://github.com/vllm-project/vllm/pull/56907) [NIXL] Bump NIXL version to 1.5.0
- [#60182](https://github.com/vllm-project/vllm/pull/60182) [CI][Rust Frontend] Pass `--locked` to cargo binstall
- [#59811](https://github.com/vllm-project/vllm/pull/59811) [Docs] Clarify that vLLM does not isolate tenants sharing a server
- [#49194](https://github.com/vllm-project/vllm/pull/49194) [Perf][MoE] Eliminate staging from NCCL symmetric reduce-scatter
- [#60235](https://github.com/vllm-project/vllm/pull/60235) [Docs] Run pr-checklist before opening a PR
- [#56301](https://github.com/vllm-project/vllm/pull/56301) [ROCm][Perf] W4A16: pad gfx11 weight and activation strides
- [#55937](https://github.com/vllm-project/vllm/pull/55937) [vllm-bench, feature] Added support for Mooncake-style, timed-traces replay.
- [#59061](https://github.com/vllm-project/vllm/pull/59061) [Bugfix][Structured Output] Flag multi-branch allOf as unsupported for xgrammar
- [#57786](https://github.com/vllm-project/vllm/pull/57786) [Docs] Add model recipes skill
- [#60071](https://github.com/vllm-project/vllm/pull/60071) [Bugfix][KV Offload] Honor speculative cacheability in SimpleCPU
- [#60129](https://github.com/vllm-project/vllm/pull/60129) [Deprecation] Deprecate sonet dataset as scheduled
- [#60080](https://github.com/vllm-project/vllm/pull/60080) [Model] LongCat-Flash: scale MLA norms while loading and drop the post-load sweep
- [#59992](https://github.com/vllm-project/vllm/pull/59992) [Bugfix][DiffusionGemma] Read the causal mask as int32 and compile the sample step
- [#54835](https://github.com/vllm-project/vllm/pull/54835) [Bugfix][Frontend] Apply model-default reasoning parser in GPU-less render server
- [#59886](https://github.com/vllm-project/vllm/pull/59886) Fix grammar in `BlockPool.reset_prefix_cache` docstring: "to invalid" → "to invalidate"
- [#60170](https://github.com/vllm-project/vllm/pull/60170) [CPU][Recipes] Detect model head constraints for automatic tensor parallel selection in vLLM Recipes Tool
- [#60203](https://github.com/vllm-project/vllm/pull/60203) [Rust Frontend] Pass tool defer_loading through to chat templates

#### 🐛 New Issues
- [#60174](https://github.com/vllm-project/vllm/issues/60174) [Bug] DFlash2/DSpark + prefix caching corrupt output after a cache hit on Qwen3.8-27B NVFP4 (compressed-tensors) on 0.30/0.31; 0.29, FP8 target and MTP are fine `kv-cache-manager` 💬12
- [#60197](https://github.com/vllm-project/vllm/issues/60197) [Bug]: PEFT sequence-classification LoRA adapters fail to load on RoBERTa / XLM-RoBERTa 💬7
- [#60160](https://github.com/vllm-project/vllm/issues/60160) [Bug][ROCm] Qwen3.8-27B-FP8 (TP4, MI355X) accuracy collapses at high concurrency with `VLLM_ROCM_USE_AITER=1`; fine with AITER off `bug` `rocm` 💬3
- [#60258](https://github.com/vllm-project/vllm/issues/60258) [ROCm][CI] ci_base images built from ROCm 10.0 nightly wheels have a non-reproducible ~9.5 GiB top layer `rocm` 💬2
- [#60264](https://github.com/vllm-project/vllm/issues/60264) [Performance]: Default CUDA graph capture size (2 * max_num_seqs) runs short prefills eagerly at small max_num_seqs 💬1
- [#60316](https://github.com/vllm-project/vllm/issues/60316) [Performance][ROCm] KV connectors rule out ROCM_ATTN, so PD workers decode on ROCM_AITER_UNIFIED_ATTN (1.9–3.2x the per-token time for Qwen3 models on MI355X) `rocm` 💬1
- [#60212](https://github.com/vllm-project/vllm/issues/60212) [Bug]: DeepStream video backend raises ZeroDivisionError on MP4s with moov at the end, and truncates fragmented MP4s 💬1
- [#60262](https://github.com/vllm-project/vllm/issues/60262) [Bug]: `kv_cache_dtype="fp8"` auto-selects the FLASHINFER attention backend without a usable FlashInfer JIT and crashes instead of falling back to TRITON_ATTN 💬1
- [#60261](https://github.com/vllm-project/vllm/issues/60261) [Bug]: Block-FP8 models crash on SM120 without a CUDA toolkit: DeepGEMM is selected although its JIT cannot run (no fallback to CUTLASS block FP8) `nvidia` 💬1
- [#60205](https://github.com/vllm-project/vllm/issues/60205) [Bug]: [KV Offload][P2P] After a peer's EngineCore stalls ~45 s, P2P transfers to and from it fail permanently, although the control session reconnects `bug` 💬1
- [#60204](https://github.com/vllm-project/vllm/issues/60204) [Bug]: [KV Offload][P2P] A NIXL error raised by `write_blocks` during a fetch is never reported to the requesting peer, so it waits the full round timeout `bug` `kv-connector` 💬1
- [#60165](https://github.com/vllm-project/vllm/issues/60165) [Bug]: Nomic pooling uses default RoPE despite rotary_scaling_factor=2 `pooling` 💬1
- [#60184](https://github.com/vllm-project/vllm/issues/60184) [Feature]: vllm run-batch --resume to continue an interrupted batch `feature request` 💬1
- [#60202](https://github.com/vllm-project/vllm/issues/60202) [Bug]: support_torch_compile's positional type check is off by one: each argument is checked against the previous parameter's annotation 💬1
- [#60189](https://github.com/vllm-project/vllm/issues/60189) [Bug]: NIXL DCP config checks don't apply to NixlPullConnector `kv-connector` 💬1
- [#60325](https://github.com/vllm-project/vllm/issues/60325) [Bug]: Default -O2 leaves DeepSeek MLA RoPE and KV-cache fusion off `deepseek`
- [#60305](https://github.com/vllm-project/vllm/issues/60305) [Bug]: DEBUG request-body log drops the closing brace when `--max-log-len` is unset
- [#60302](https://github.com/vllm-project/vllm/issues/60302) [Bug]: `/v1/chat/completions/batch` ignores `presence_penalty` / `frequency_penalty` defaults from the generation config
- [#60311](https://github.com/vllm-project/vllm/issues/60311) [Build]: Build macOS wheel using Python’s stable ABI `feature request`
- [#60304](https://github.com/vllm-project/vllm/issues/60304) [Bug]: `/cohere/v2/chat` returns HTTP 500 for invalid request parameters
- [#60303](https://github.com/vllm-project/vllm/issues/60303) [Bug]: Images above Pillow's pixel limit get HTTP 500 instead of 400
- [#60301](https://github.com/vllm-project/vllm/issues/60301) [Bug]: Engine core dies on `assert len(scheduled_loras) <= max_loras` with LoRA and pipeline parallelism
- [#60283](https://github.com/vllm-project/vllm/issues/60283) [Tracking] Nemotron Labs Diffusion: model support, fixes, and decision reads
- [#60260](https://github.com/vllm-project/vllm/issues/60260) [Bug]: `is_nvfp4_quantized` crashes on compressed-tensors configs whose `format` is a list (mixed NVFP4 + FP8 checkpoints) `quantization`
- [#60237](https://github.com/vllm-project/vllm/issues/60237) [Bug]: auto keeps xgrammar for a combinator with constraint keywords beside it, which xgrammar silently drops `structured-output`
- [#60223](https://github.com/vllm-project/vllm/issues/60223) [Bug]: LoRA adapters using PEFT features vLLM does not implement load without error and give wrong outputs `bug`
- [#60178](https://github.com/vllm-project/vllm/issues/60178) [Bug]: `vllm preload` daemon never matches a dense (non-MoE) engine with `--data-parallel-size > 1` (WeightCacheKey `dp_size` mismatch) `bug`
- [#60172](https://github.com/vllm-project/vllm/issues/60172) [Bug]: TRITON_MLA decode exceeds shared memory on sm_120 (RTX PRO 6000 / RTX 5090): "Required: 102400, Hardware limit: 101376"
- [#60162](https://github.com/vllm-project/vllm/issues/60162) [Bug]: Humming FP8 linear crashes on per-tensor/per-channel FP8 weights, so FP8 models cannot start with VLLM_BATCH_INVARIANT=1 on Ampere `quantization`

#### 🔒 Closed Issues
- [#57423](https://github.com/vllm-project/vllm/issues/57423) [Bug]: FlashInfer autotune config cache hits only on rank 0, deadlocking the engine launch
- [#44249](https://github.com/vllm-project/vllm/issues/44249) [Bug]: lmcache_connector.start_load_kv asserts on degraded LMCache instead of honoring "recompute" fallback
- [#44276](https://github.com/vllm-project/vllm/issues/44276) [RFC]: Model customized KVCache Planning
- [#57574](https://github.com/vllm-project/vllm/issues/57574) [Feature]: Integer token IDs for logprobs in `/inference/v1/generate` responses (`GenerateLogProbs`)
- [#56699](https://github.com/vllm-project/vllm/issues/56699) [Bug][HiSparse] Decode engine dies with cudaErrorLaunchFailure in the host-mirror path under sustained P/D host imports
- [#44889](https://github.com/vllm-project/vllm/issues/44889) [Bug]: [Bug] CUDA illegal memory access with Gemma-4-31B-it + RedHatAI/gemma-4-31B-it-speculator.dflash (DFlash)
- [#52682](https://github.com/vllm-project/vllm/issues/52682) [Bug]: Qwen3.8-27B-FP8 hangs indefinitely at startup during CUDA-graph capture on Ampere (RTX A5000, TP=4) — fixed by --enforce-eager
- [#49377](https://github.com/vllm-project/vllm/issues/49377) [Bug]: Token truncation leaves stale Request.block_hashes and can cause incorrect KV cache hits
- [#44209](https://github.com/vllm-project/vllm/issues/44209) [Bug]: Non-deterministic KV-cache reservation on hybrid GDN model (Qwen3.6) → CUDA-graph capture OOMs after /health passes → restart crash-loop (native full RTX 5090 / sm120)
- [#44294](https://github.com/vllm-project/vllm/issues/44294) [Bug][OffloadingConnector] _blocks_being_loaded serialises concurrent requests through a single load, causing 12× TTFT inflation
- [#44407](https://github.com/vllm-project/vllm/issues/44407) [Installation]: hint: `fastsafetensors` (v0.3.2) was included because `vllm` (v0.22.1rc1.dev123+g0e2b13103.d20260603) depends on `fastsafetensors`
- [#43786](https://github.com/vllm-project/vllm/issues/43786) [Feature]: Support for orthrus
- [#43962](https://github.com/vllm-project/vllm/issues/43962) [Bug]: Qwen3-1.7B silent correctness regression in vLLM 0.21.0: TP=2/4 and Triton attention produce wrong answer
- [#44318](https://github.com/vllm-project/vllm/issues/44318) [Bug]: GGUF model loading fails on XPU: `_C` namespace missing `ggml_dequantize` custom op
- [#44416](https://github.com/vllm-project/vllm/issues/44416) [Feature]: Streaming input for VLM models
- [#44711](https://github.com/vllm-project/vllm/issues/44711) [ROCm Test-First CI]: Day 0 vLLM MI455X UALoE72 Helios Rack open source community upstream CI by AMD Advancing AI July 22 2026
- [#56206](https://github.com/vllm-project/vllm/issues/56206) [Bug]: v0.29.0 fails to start on SM110 (AGX Thor) — illegal memory access in Qwen GDN prefill warmup
- [#44710](https://github.com/vllm-project/vllm/issues/44710) [ROCm CI] 90% parity on AMD's test group gating status/mirroring by AMD Advancing AI July 22 2026
- [#44705](https://github.com/vllm-project/vllm/issues/44705) [Performance][ModelOpt] B300 auto backend is suboptimal for Qwen-Image mixed NVFP4
- [#44712](https://github.com/vllm-project/vllm/issues/44712) [Bug][FP8] ScaledMMLinearKernel rejects valid non-contiguous batched activations
- [#44722](https://github.com/vllm-project/vllm/issues/44722) [Feature]: Add support for Bailing MTP speculative decoding
- [#44790](https://github.com/vllm-project/vllm/issues/44790) [RFC]: Support Bailing MTP (Multi-Token Prediction) for Ling-2.6-flash
- [#44826](https://github.com/vllm-project/vllm/issues/44826) [RFC]: MTP Routing for Qwen3.5 Series Multi-LoRA Deployments
- [#44827](https://github.com/vllm-project/vllm/issues/44827) [Bug]: Inference-time probabilistic error: pre-allocated buffer size mismatch in indexer
- [#44858](https://github.com/vllm-project/vllm/issues/44858) [Performance]: After enabling MTP on the Qwen3.5-27B model, the number of hit blocks for the prefix cache is one less compared to the scenario with MTP disabled. This is the current implementation. Can we optimize this behavior?
- [#44867](https://github.com/vllm-project/vllm/issues/44867) [Feature]: [CPU Backend] Support macOS x86 for CPU backend
- [#58849](https://github.com/vllm-project/vllm/issues/58849) [Performance]: WSL2: `VLLM_WSL2_ENABLE_PIN_MEMORY=1` makes the default V2 runner ~12% faster per decode step
- [#56556](https://github.com/vllm-project/vllm/issues/56556) [Bug]: JSON schema with multiple allOf branches is silently ignored by the xgrammar structured-output backend
- [#59222](https://github.com/vllm-project/vllm/issues/59222) [Bug]: Mistral pre-v11 tool parser fails the whole request on valid but unexpected tool call JSON
- [#48271](https://github.com/vllm-project/vllm/issues/48271) [Bug]: prompt_logprobs argmax disagrees with greedy decode for sequences ≥256 tokens — num_tokens-dependent block size in RMSNorm kernels defeats VLLM_BATCH_INVARIANT
- [#50837](https://github.com/vllm-project/vllm/issues/50837) [Bug]: Qwen3.5 DFlash speculative decoding produces repetitive/degenerate output
- [#53368](https://github.com/vllm-project/vllm/issues/53368) [Feature]: Expose CPU vs P2P attribution for multi-tier KV restores
- [#59241](https://github.com/vllm-project/vllm/issues/59241) [Bug]: /derender logprob token strings drop SentencePiece leading space
- [#47734](https://github.com/vllm-project/vllm/issues/47734) [Bug]: Mistral models with tool_choice=required + streaming generates invalid tool_call_id format
- [#59218](https://github.com/vllm-project/vllm/issues/59218) [Bug]: Engine-based parsers drop text after/between tool calls in non-streaming (streaming keeps it)
- [#59681](https://github.com/vllm-project/vllm/issues/59681) [Bug]: cudagraph_mode=FULL crashes on prefill with FlashInfer sparse MLA on SM100
- [#58365](https://github.com/vllm-project/vllm/issues/58365) [Bug] `ep_gather` output store overflows int32 with DeepEP v2 expanded layout (IMA in `_fwd_kernel_ep_gather`)
- [#60305](https://github.com/vllm-project/vllm/issues/60305) [Bug]: DEBUG request-body log drops the closing brace when `--max-log-len` is unset
- [#60302](https://github.com/vllm-project/vllm/issues/60302) [Bug]: `/v1/chat/completions/batch` ignores `presence_penalty` / `frequency_penalty` defaults from the generation config
- [#59991](https://github.com/vllm-project/vllm/issues/59991) [Bug]: CPU attention rejects DiffusionGemma int32 causal mask since #51994

### SGLang (`sgl-project/sglang`)

**Stars:** 36,826 · **Open issues:** 5,529 · **Last push:** <1h ago

On October 7, 2026, SGLang did not release any new versions, but several significant pull requests were merged, including #41704 which aims to trim the overhead of prefill model entries, and #42370, which introduces improved naming conventions for diffusion quality tiers based on their guarantees. Noteworthy fixes included #42765 and #42764, addressing errors with string parameter handling in Glm models, which could lead to unintended data manipulation. Additionally, a new issue was reported (#42752) highlighting flaky tests and CI infrastructure failures, indicating ongoing challenges in maintaining test reliability in the CI environment. Overall, it was a day focused on enhancements and addressing persistent bugs rather than major new features.

#### ✅ Merged PRs
- [#41704](https://github.com/sgl-project/sglang/pull/41704) [DSv4.1] Trim prefill model-entry overhead
- [#42370](https://github.com/sgl-project/sglang/pull/42370) [diffusion] Name the quality tiers after what they guarantee
- [#42826](https://github.com/sgl-project/sglang/pull/42826) Add Rust code owners and grant shodoco CI permissions
- [#42635](https://github.com/sgl-project/sglang/pull/42635) [AMD] Let AITER unified verify run without host seq_lens
- [#41670](https://github.com/sgl-project/sglang/pull/41670) [diffusion] docs: Add gfx1151 Strix Halo serving guidance
- [#42771](https://github.com/sgl-project/sglang/pull/42771) [AMD] ci: nightly-test the miles ROCm 10 MI30X image on MI300
- [#42495](https://github.com/sgl-project/sglang/pull/42495) [diffusion] CI: fix qwen cache-dit step 10/49 perf baselines
- [#42768](https://github.com/sgl-project/sglang/pull/42768) [diffusion] Simplify Kandinsky 6 models, SR sampling and tests
- [#42649](https://github.com/sgl-project/sglang/pull/42649) [PD] Stop reserving unallocated mamba spec-verify scratch in prefill KV sizing
- [#42827](https://github.com/sgl-project/sglang/pull/42827) build: use one DeepEP ref for implementation and packaging
- [#42757](https://github.com/sgl-project/sglang/pull/42757) [AMD][Docs] Add MI355X DeepSeek-V4 Pro PD recipes
- [#42633](https://github.com/sgl-project/sglang/pull/42633) [HiCache] Manage buffer-mode backups per storage pool
- [#39659](https://github.com/sgl-project/sglang/pull/39659) feat(grpc): expose follower metadata and node-local KV sources
- [#42625](https://github.com/sgl-project/sglang/pull/42625) [Scheduler] Gather prefill-delayer queue timeout across ranks
- [#41765](https://github.com/sgl-project/sglang/pull/41765) fix: route Thor SM110 FP8 and ModelOpt NVFP4 auto backends
- [#42695](https://github.com/sgl-project/sglang/pull/42695) Bind the MessageQueue remote socket atomically
- [#42799](https://github.com/sgl-project/sglang/pull/42799) [Scheduler] Track prefill progress as `prefix_len`; consume `prefix_indices` at allocation
- [#42801](https://github.com/sgl-project/sglang/pull/42801) [Scheduler] Fold match write-back into `Req.match_prefix`
- [#42661](https://github.com/sgl-project/sglang/pull/42661) [NVIDIA] Fix nightly-cu134 build and update
- [#42651](https://github.com/sgl-project/sglang/pull/42651) Back the DFlash-family draft KV pool to the post-capture token count
- [#42755](https://github.com/sgl-project/sglang/pull/42755) [Metrics] Add per-rank DP attention imbalance metrics
- [#42612](https://github.com/sgl-project/sglang/pull/42612) [Docker] Use uv-managed Python 3.12 and uv for all installs in the CUDA image
- [#42022](https://github.com/sgl-project/sglang/pull/42022) [Spec][MegaMoE] Let the speculative draft choose its own W4A4 MXFP4 MegaMoE MMA type
- [#42797](https://github.com/sgl-project/sglang/pull/42797) [Metrics] Read scheduled prefill KV tokens from batch `prefix_lens`
- [#42754](https://github.com/sgl-project/sglang/pull/42754) [HiCache] Resolve write_back to write_through under buffer_only host memory
- [#42682](https://github.com/sgl-project/sglang/pull/42682) [Bugfix] Guard merge_state sgl_kernel import on non-CUDA platforms
- [#42663](https://github.com/sgl-project/sglang/pull/42663) [rust-processor] Gate render, tokenizer and parser behind cargo features
- [#42659](https://github.com/sgl-project/sglang/pull/42659) perf(mla): use native SATFINITE FP8 conversion in MLA KV/Q preparation
- [#41927](https://github.com/sgl-project/sglang/pull/41927) [PD] Fix crash for allocation when mamba + pd + decode radix cache
- [#41605](https://github.com/sgl-project/sglang/pull/41605) [AMD] ci: build the miles ROCm 10 MI30X image nightly
- [#35108](https://github.com/sgl-project/sglang/pull/35108) [diffusion] Fix width/height silently dropped on multipart /v1/videos requests
- [#42556](https://github.com/sgl-project/sglang/pull/42556) [diffusion] fix: load community ComfyUI-GGUF Qwen-Image-2.1 transformers
- [#40888](https://github.com/sgl-project/sglang/pull/40888) fix(mimo-vl): keep multimodal features when capturing aux hidden states, and correct vision preprocessing
- [#42743](https://github.com/sgl-project/sglang/pull/42743) [diffusion] model: support Kandinsky 6
- [#42245](https://github.com/sgl-project/sglang/pull/42245) [DeepSeek-V4.1] Unify mHC into one state machine and drop medium-batch fusion variants
- [#42748](https://github.com/sgl-project/sglang/pull/42748) [diffusion] Skip zero blocks when hashing large conditioning inputs
- [#41655](https://github.com/sgl-project/sglang/pull/41655) [Diffusion] Default Qwen-Image 2.1 to VAE tiling on gfx1151
- [#40915](https://github.com/sgl-project/sglang/pull/40915) Declare hybrid Mamba indexer host pool
- [#36410](https://github.com/sgl-project/sglang/pull/36410) Allow platforms to declare Mamba extra-buffer support
- [#42756](https://github.com/sgl-project/sglang/pull/42756) [rust-processor] Fix chat-template precedence wording in the processor README
- [#42751](https://github.com/sgl-project/sglang/pull/42751) [sgl-router] Document and reject a zero request timeout
- [#42662](https://github.com/sgl-project/sglang/pull/42662) [rust-processor] Split sglang-processor into tokenizer, render and parser
- [#42750](https://github.com/sgl-project/sglang/pull/42750) [DSA] Fix pooled page table refresh for target verify CUDA graph replay
- [#42632](https://github.com/sgl-project/sglang/pull/42632) [sgl-router] Bound streaming time-to-headers by --request-timeout-secs (retry 5/5)
- [#42605](https://github.com/sgl-project/sglang/pull/42605) [AMD] M3-mxfp8 Nightly Test Update
- [#42602](https://github.com/sgl-project/sglang/pull/42602) [AMD] M3-MXFP4 Nightly Test
- [#42631](https://github.com/sgl-project/sglang/pull/42631) [sgl-router] Back off between retry attempts (retry 4/5)
- [#40671](https://github.com/sgl-project/sglang/pull/40671) [Fix] Don't let a failed deep_ep import-time check kill servers that never use DeepEP
- [#42467](https://github.com/sgl-project/sglang/pull/42467) [mem_cache] Keep prefix_indices current for chunked requests kept out of the tree
- [#42630](https://github.com/sgl-project/sglang/pull/42630) [sgl-router] Retry failed dispatches on another worker (retry 3/5)
- [#30487](https://github.com/sgl-project/sglang/pull/30487) [diffusion] Support Ideogram TurboTime LoRA inference
- [#17270](https://github.com/sgl-project/sglang/pull/17270) Harden OpenAI upload filename handling
- [#36854](https://github.com/sgl-project/sglang/pull/36854) fix(security): pin multimodal-gen ZMQ scheduler ingress to loopback on wildcard --host
- [#42686](https://github.com/sgl-project/sglang/pull/42686) [mem_cache] Hold a request's tree lock as one `TreeLock`
- [#42629](https://github.com/sgl-project/sglang/pull/42629) [sgl-router] Make one request dispatchable more than once (retry 2/5)
- [#41395](https://github.com/sgl-project/sglang/pull/41395) [PD] Wait for prefill completion before Mooncake early KV transfer
- [#42628](https://github.com/sgl-project/sglang/pull/42628) [sgl-router] Let selection skip workers a request already failed on (retry 1/5)
- [#42045](https://github.com/sgl-project/sglang/pull/42045) [CP 5/5] Test GLM-5.3-Flash CP4 with KDA and MoE TP4 on B200
- [#42723](https://github.com/sgl-project/sglang/pull/42723) [Fix] Add `maybe_hand_to_session` to the one-batch benchmark `TreeCacheNamespace`
- [#42704](https://github.com/sgl-project/sglang/pull/42704) [CI] Temporarily disable B300

#### 🐛 New Issues
- [#42752](https://github.com/sgl-project/sglang/issues/42752) [CI] Flaky tests and CI infrastructure failures seen while babysitting PRs 💬14
- [#42749](https://github.com/sgl-project/sglang/issues/42749) [CI] test_glm53_flash_b200.py (TestGLM53FlashB200DFlash2.test_gsm8k) fails on main: GSM8K ~0.87 < 0.93 since 2026-10-06 💬2
- [#42791](https://github.com/sgl-project/sglang/issues/42791) [Bug] gemma4 tool-call parser hangs forever on a stray "]" in an array argument
- [#42778](https://github.com/sgl-project/sglang/issues/42778) [Bug] Glm4MoeDetector: a string parameter whose value is valid JSON is rewritten (a quoted literal loses its quotes, true becomes True)
- [#42774](https://github.com/sgl-project/sglang/issues/42774) [Bug] Falcon-H1 crashes with an illegal memory access on the first request under the default breakable prefill CUDA graph
- [#42765](https://github.com/sgl-project/sglang/issues/42765) [Bug] Glm47MoeDetector: a string parameter whose value is a quoted literal loses its quotes
- [#42764](https://github.com/sgl-project/sglang/issues/42764) [Bug] Qwen3CoderDetector: a string parameter whose value is `null` becomes null, and an invalid boolean becomes false
- [#42741](https://github.com/sgl-project/sglang/issues/42741) [Bug] Model gateway drops x-override-priority and the chat body priority, so priority cannot be set behind it

#### 🔒 Closed Issues
- [#33656](https://github.com/sgl-project/sglang/issues/33656) [Bug] DeepSeek-V4 + hierarchical cache: deterministic SWA KV position corruption (kv-canary TAIL_K_SWA write_position), downstream NaN sampling crash
- [#32925](https://github.com/sgl-project/sglang/issues/32925) [RFC] Push-based Engine Load Reporting and Router Load Monitoring
- [#38300](https://github.com/sgl-project/sglang/issues/38300) TP2 hang with HiCache, breakable prefill CUDA graphs, and FlashInfer MNNVL on B300
- [#32549](https://github.com/sgl-project/sglang/issues/32549) [Bug] Decode starved to ~1 batch per 24s under sustained chunked-prefill load (strict prefill-first scheduling, spec decode)
- [#34025](https://github.com/sgl-project/sglang/issues/34025) Page-split kernel uses int32 byte-offset math, wraps at ~3.67M tokens/rank on large SM120 KV pools
- [#33927](https://github.com/sgl-project/sglang/issues/33927) [Bug][NPU][Diffusion] Missing ffprobe in the community image causes completed MiniMax-H3 T2VA outputs to be deleted
- [#33967](https://github.com/sgl-project/sglang/issues/33967) [Bug] It is defined as int32 in SGLang, but the kernel within `ascend_backend` reads it as int64, leading to incorrect memory‑address access.
- [#42749](https://github.com/sgl-project/sglang/issues/42749) [CI] test_glm53_flash_b200.py (TestGLM53FlashB200DFlash2.test_gsm8k) fails on main: GSM8K ~0.87 < 0.93 since 2026-10-06
- [#17267](https://github.com/sgl-project/sglang/issues/17267) [Bug] OpenAI multimodal upload filename allows path traversal write
- [#35970](https://github.com/sgl-project/sglang/issues/35970) Diffusion LoRA auto mode statically merges post-load FP8 weights and crashes
- [#34023](https://github.com/sgl-project/sglang/issues/34023) DSpark compact/confidence path silently ignores --speculative-dspark-block-size, locked to checkpoint-native gamma
- [#41764](https://github.com/sgl-project/sglang/issues/41764) [Bug] Thor SM110 auto backend selection crashes FP8 and ModelOpt NVFP4 MoE startup
- [#36855](https://github.com/sgl-project/sglang/issues/36855) [Bug] skip_radix_cache_insert livelocks and OOM-kills the scheduler on chunked prefill (reachable from any client via bootstrap_host="2.2.2.2")

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 130,521 · **Open issues:** 2,489 · **Last push:** 3h ago

On October 7, 2026, the llama.cpp project released versions b11457, b11456, b11455, and b11454, with notable enhancements including BF16 support for XIELU in CUDA and the implementation of a PLaMo-3 tokenizer pre-segmentation. Additionally, version b11454 added K2 Horizon support, improving model compatibility and performance. Key merged features included a GPU overhaul with DMA/HVX for hexagon operations, fixes for CLAMP functionality on non-contiguous views, and enhancements for the RPC backend. However, several critical issues emerged, particularly #30064, which reports a bug in Clef-GGUF probabilities collapsing toward uniform distribution, raising concerns about model evaluation consistency.

#### 🚀 New Releases
- [b11457](https://github.com/ggml-org/llama.cpp/releases/tag/b11457) b11457
- [b11456](https://github.com/ggml-org/llama.cpp/releases/tag/b11456) b11456
- [b11455](https://github.com/ggml-org/llama.cpp/releases/tag/b11455) b11455
- [b11454](https://github.com/ggml-org/llama.cpp/releases/tag/b11454) b11454
- [b11451](https://github.com/ggml-org/llama.cpp/releases/tag/b11451) b11451
- [b11450](https://github.com/ggml-org/llama.cpp/releases/tag/b11450) b11450
- [b11449](https://github.com/ggml-org/llama.cpp/releases/tag/b11449) b11449
- [b11448](https://github.com/ggml-org/llama.cpp/releases/tag/b11448) b11448
- [b11447](https://github.com/ggml-org/llama.cpp/releases/tag/b11447) b11447
- [b11446](https://github.com/ggml-org/llama.cpp/releases/tag/b11446) b11446

#### ✅ Merged PRs
- [#30067](https://github.com/ggml-org/llama.cpp/pull/30067) hexagon: CPY/CONCAT/CONT/DUP overhaul to use DMA/HVX for all cases
- [#29955](https://github.com/ggml-org/llama.cpp/pull/29955) cuda : add BF16 support for XIELU
- [#28782](https://github.com/ggml-org/llama.cpp/pull/28782) ggml-cuda: use per-thread stream for buffer-init padding memset
- [#30045](https://github.com/ggml-org/llama.cpp/pull/30045) vocab : implement PLaMo-3 tokenizer pre-segmentation
- [#29535](https://github.com/ggml-org/llama.cpp/pull/29535) model : add K2 Horizon dense and MoVA support
- [#30054](https://github.com/ggml-org/llama.cpp/pull/30054) model: support embeddinggemma2 (text+vision+audio)
- [#30042](https://github.com/ggml-org/llama.cpp/pull/30042) llama: remove the gather path of the glm5-next sparse attention
- [#30041](https://github.com/ggml-org/llama.cpp/pull/30041) opencl: fix OOB read in adreno xmem GEMM
- [#26610](https://github.com/ggml-org/llama.cpp/pull/26610) RPC: add `-sm tensor`
- [#29517](https://github.com/ggml-org/llama.cpp/pull/29517) ggml: fix CLAMP on non-contiguous views (CPU, CUDA)
- [#29442](https://github.com/ggml-org/llama.cpp/pull/29442) Feature: BF16/FP16 conversion to f32 chunking
- [#30044](https://github.com/ggml-org/llama.cpp/pull/30044) models: support pplx-decider
- [#29340](https://github.com/ggml-org/llama.cpp/pull/29340) metal : fix threadgroup memory overflow in quantized flash attention
- [#29872](https://github.com/ggml-org/llama.cpp/pull/29872) vulkan : check for null vkEnumerateInstanceVersion
- [#29795](https://github.com/ggml-org/llama.cpp/pull/29795) HIP: use -O0 for host code in debug builds
- [#30017](https://github.com/ggml-org/llama.cpp/pull/30017) models : consolidate nextn row cropping into shared helpers
- [#30038](https://github.com/ggml-org/llama.cpp/pull/30038) scripts : limit apiabi checks to libllama and libmtmd
- [#30040](https://github.com/ggml-org/llama.cpp/pull/30040) convert : add text_config as fallback [transformers 5.18]
- [#30020](https://github.com/ggml-org/llama.cpp/pull/30020) llama : re-reserve the sched when the nextn extraction flags change
- [#29943](https://github.com/ggml-org/llama.cpp/pull/29943) ggml: refactor selective expert copying to user code
- [#30034](https://github.com/ggml-org/llama.cpp/pull/30034) test-llama-archs : initialize backends before generating models
- [#30019](https://github.com/ggml-org/llama.cpp/pull/30019) vendor : update LibreSSL to 4.3.3
- [#30037](https://github.com/ggml-org/llama.cpp/pull/30037) ggml-openvino: fix CI tests; fix GPU regressions.
- [#29994](https://github.com/ggml-org/llama.cpp/pull/29994) llama: fix k-pool scatter data race on shared sequences

#### 🐛 New Issues
- [#30064](https://github.com/ggml-org/llama.cpp/issues/30064) Eval bug: Clef-GGUF Q8_0 /v1/systemone probabilities collapse toward uniform, while BF16 gives correct ones. `bug-unconfirmed` 💬1
- [#30033](https://github.com/ggml-org/llama.cpp/issues/30033) Eval bug: Performance degradation since (PR #29622) with unsloth/Qwen3.8-Flash-Next-GGUF:UD-IQ3_XXS and dual Intel B70 `bug-unconfirmed` 💬1
- [#30043](https://github.com/ggml-org/llama.cpp/issues/30043) Misc. bug: PLaMo3: tokenization results differ from the reference `bug-unconfirmed` 💬1
- [#30052](https://github.com/ggml-org/llama.cpp/issues/30052) RPC backend: "Remote RPC server crashed or returned malformed response" (ggml-rpc.cpp:566) at warmup decode with large MoE models on NVIDIA GB10 (DGX Spark) 💬1
- [#30075](https://github.com/ggml-org/llama.cpp/issues/30075) Eval bug: --split-mode tensor output degenerates into repeated garbage tokens after 2-3 requests (meta backend, 2x Tesla P100)
- [#30074](https://github.com/ggml-org/llama.cpp/issues/30074) qwen4exp: Metal decode depth-decay on M5 Max — free-form 26.9 t/s at 175K vs 73.9 t/s with n-gram spec vs 53.9 t/s MLX
- [#30073](https://github.com/ggml-org/llama.cpp/issues/30073) Eval bug: decision models fail on large input size `bug-unconfirmed`
- [#30070](https://github.com/ggml-org/llama.cpp/issues/30070) Misc. bug: default thread count ignores cgroup v2 CPU limits in containers
- [#30058](https://github.com/ggml-org/llama.cpp/issues/30058) vulkan: cm1 int8 mmq uses fp16 mmq wg denoms (tile split breaks when BN differs)
- [#30056](https://github.com/ggml-org/llama.cpp/issues/30056) Eval bug: server: tool-call grammar build fails with many tools (MAX_REPETITION_THRESHOLD) `bug-unconfirmed`
- [#30051](https://github.com/ggml-org/llama.cpp/issues/30051) Eval bug: `bug-unconfirmed`
- [#30048](https://github.com/ggml-org/llama.cpp/issues/30048) Vulkan: FA quantized-KV dequant scratch can exceed maxBufferSize at long context `bug-unconfirmed`
- [#30046](https://github.com/ggml-org/llama.cpp/issues/30046) Misc. bug: Heap out-of-bounds read in /v1/embeddings when started with --embeddings --rerank (RANK pooling) `bug-unconfirmed`
- [#30039](https://github.com/ggml-org/llama.cpp/issues/30039) Vulkan: ~45% prompt processing regression on RDNA1 (gfx1010) between b10455 and b11429 (v0.6.0) with a GDN-hybrid model; TG unchanged

#### 🔒 Closed Issues
- [#25973](https://github.com/ggml-org/llama.cpp/issues/25973) Misc. bug: SYCL: bad performance on newer oneAPI
- [#29424](https://github.com/ggml-org/llama.cpp/issues/29424) Feature Request: Add support for K2 Horizon (0.9B, 3.7B, 7B, 32B, 36B MoVA)
- [#26484](https://github.com/ggml-org/llama.cpp/issues/26484) Arm CPU backend: Effective decode bandwidth stays near 10 GB/s across quantizations on Pi 5
- [#26116](https://github.com/ggml-org/llama.cpp/issues/26116) allow `llama serve -hf` to use llama-server in router mode
- [#27584](https://github.com/ggml-org/llama.cpp/issues/27584) Feature Request: efficient MoE serving with bandwidth-adaptive CPU–GPU co-execution ( q ⋆ policy), full-layer double-buffered prefill streaming, global LRU expert caching, graph-compatible execution
- [#28361](https://github.com/ggml-org/llama.cpp/issues/28361) Eval bug: K2-Horizon models fail to load
- [#27616](https://github.com/ggml-org/llama.cpp/issues/27616) Feature Request: Copying prompt's KV-cache of the slots that are in use.
- [#26367](https://github.com/ggml-org/llama.cpp/issues/26367) ggml-backend-meta: `axis <= GGML_MAX_DIMS` off-by-one (inconsistent with ~21 other sites)
- [#27571](https://github.com/ggml-org/llama.cpp/issues/27571) Feature Request: --reasoning-budget like argument to control the budget based on the conversation length
- [#29087](https://github.com/ggml-org/llama.cpp/issues/29087) Eval bug: OpenVINO backend fails with "unable to create context" when KV cache exceeds CL_DEVICE_MAX_MEM_ALLOC_SIZE
- [#27117](https://github.com/ggml-org/llama.cpp/issues/27117) speculative: draft-dflash draft acceptance collapses under concurrent sequences (-np 16 pathological, -np 4 healthy, --spec-draft-n-max 1 recovers)
- [#27587](https://github.com/ggml-org/llama.cpp/issues/27587) Video input > ~10 s hangs llama-server forever, no response and no error (deadlock in mmproj video probe)
- [#27581](https://github.com/ggml-org/llama.cpp/issues/27581) Misc. bug: llama-server container ignores SIGINT when downloading models from huggingface
- [#27585](https://github.com/ggml-org/llama.cpp/issues/27585) Eval bug: rpc tensor caching is working but not using
- [#27597](https://github.com/ggml-org/llama.cpp/issues/27597) Misc. bug: GBNF parser rejects escaped hyphen (`\-`) in character classes
- [#27613](https://github.com/ggml-org/llama.cpp/issues/27613) server: generation terminates mid-tag (finish=stop) when reasoning stream contains DSML closing fragments — DeepSeek-V4-Flash, peg-native, long context
- [#27627](https://github.com/ggml-org/llama.cpp/issues/27627) Misc. bug: webui: attaching video file can wipe IndexedDB chat history
- [#27628](https://github.com/ggml-org/llama.cpp/issues/27628) Eval bug: Reasoning Canceled When Reading Image Tags From File
- [#27636](https://github.com/ggml-org/llama.cpp/issues/27636) Feature Request: example: single-binary Fun-ASR-Nano ASR (CPU + CUDA)
- [#29235](https://github.com/ggml-org/llama.cpp/issues/29235) Misc. bug: OpenVINO GPU code paths are silently disabled on GPU.N machines, causing wrong results and performance drops
- [#30043](https://github.com/ggml-org/llama.cpp/issues/30043) Misc. bug: PLaMo3: tokenization results differ from the reference
- [#29871](https://github.com/ggml-org/llama.cpp/issues/29871) Eval bug: ggml-vulkan crash with vulkan 1.0
- [#30029](https://github.com/ggml-org/llama.cpp/issues/30029) ??????

### Ollama (`ollama/ollama`)

**Stars:** 182,402 · **Open issues:** 4,187 · **Last push:** <1h ago

On October 7, 2026, Ollama did not release any new versions but saw significant development activity with key merged pull requests. Notably, PR #18829 introduced proxy cloud usage and balance APIs, while PR #18820 added support for multimodal embeddings, enhancing the platform's capabilities. Additionally, PR #18822 addressed a routing issue by fixing the handling of embed errors. Among the new issues, #18815 is particularly concerning, as it reports a critical `Clef: non-finite logit` error on Windows, affecting both CUDA and CPU-only setups, illustrating the ongoing challenges users face.

#### ✅ Merged PRs
- [#18829](https://github.com/ollama/ollama/pull/18829) server: proxy cloud usage and balance APIs
- [#18822](https://github.com/ollama/ollama/pull/18822) routes: fix embed 413 vs 400 routing
- [#18820](https://github.com/ollama/ollama/pull/18820) model: add multimodal embeddings

#### 🐛 New Issues
- [#18815](https://github.com/ollama/ollama/issues/18815) clef-flash: `Clef: non-finite logit` (HTTP 500) on /v1/systemone — Windows, reproduces on CUDA and CPU-only, also after full reinstall 💬6
- [#18817](https://github.com/ollama/ollama/issues/18817) Bug: "unsupported tensor size overflows" when importing GSQ-RCO quantized Qwen3.8-Flash-Next, despite qwen4exp architecture being supported `bug` 💬5
- [#18823](https://github.com/ollama/ollama/issues/18823) MLX runner: bf16 Gemma 4 decodes at ~1 tok/s on M2 Ultra; GPU idle ~96% of each step, runner waits in command-buffer submit `mlx` 💬3
- [#18825](https://github.com/ollama/ollama/issues/18825) Failed to pull `embeddinggemma-2:740m` on linux `bug` 💬1
- [#18830](https://github.com/ollama/ollama/issues/18830) ollama list / GET /api/tags show a duplicate model and a bogus llamacpp:<sha> tag after the local compat GGUF migration `bug`
- [#18824](https://github.com/ollama/ollama/issues/18824) gemma4: a Gemma 4 12B GGUF created under a name without "12b" gets the gemma4-small renderer (11.9B is under the 12.0B threshold)
- [#18821](https://github.com/ollama/ollama/issues/18821) llama-server segfault in ggml_gallocr_alloc_graph during clip_encode (qwen3-vl:8b) with a second model loaded; CUDA 'resource allocation failed'

#### 🔒 Closed Issues
- [#18815](https://github.com/ollama/ollama/issues/18815) clef-flash: `Clef: non-finite logit` (HTTP 500) on /v1/systemone — Windows, reproduces on CUDA and CPU-only, also after full reinstall
- [#18766](https://github.com/ollama/ollama/issues/18766) 1

### LiteLLM (`BerriAI/litellm`)

**Stars:** 60,244 · **Open issues:** 5,209 · **Last push:** <1h ago

Today, there were no new releases for LiteLLM; however, several updates and fixes were merged, most notably the upgrade to version 1.106.0, which includes enhancements to the lens UI and the addition of Mistral Large 4 (Le Chonk) support. Among the significant improvements, a portable catalog pagination feature was introduced, and various UI fixes were made to enhance usability, such as updates to the chat bridge and trace management tools. Additionally, a persistent bug affecting the streaming bridge's handling of sequence numbers was reported, highlighting ongoing issues with API interactions. Overall, it was a day of productive maintenance with several refinements aimed at improving system stability and user experience.

#### ✅ Merged PRs
- [#44446](https://github.com/BerriAI/litellm/pull/44446) feat(mcp): add portable catalog pagination
- [#44978](https://github.com/BerriAI/litellm/pull/44978) fix(ci): generate a master key for the migration startup jobs
- [#44972](https://github.com/BerriAI/litellm/pull/44972) fix(ui): give Lens traces a flush toolbar layout
- [#42568](https://github.com/BerriAI/litellm/pull/42568) fix(mcp): keep worker MCP configurations consistent via a catalog revision
- [#42281](https://github.com/BerriAI/litellm/pull/42281) fix(responses): preserve prompt cache reuse in chat bridge
- [#44870](https://github.com/BerriAI/litellm/pull/44870) feat(mistral): add Mistral Large 4 (Le Chonk) support
- [#44975](https://github.com/BerriAI/litellm/pull/44975) chore(cost-map): sync openrouter prices from the models API
- [#44905](https://github.com/BerriAI/litellm/pull/44905) test: fix shared-provider discovery, Codex catalog size and generated master key mismatches in CircleCI suites
- [#44949](https://github.com/BerriAI/litellm/pull/44949) test(e2e): add enum values, auto-discovering label gates and secret hiding for e2e metadata
- [#44956](https://github.com/BerriAI/litellm/pull/44956) fix(proxy): stop logging license values during verification
- [#44871](https://github.com/BerriAI/litellm/pull/44871) refactor: expose core private helpers under public names
- [#44487](https://github.com/BerriAI/litellm/pull/44487) fix(terraform): keep unconfigured allowed_routes plan-known and unsent
- [#44958](https://github.com/BerriAI/litellm/pull/44958) fix(lens): show the first user message as the run input
- [#44959](https://github.com/BerriAI/litellm/pull/44959) fix(cli): show full-session auto-router cost comparison
- [#44765](https://github.com/BerriAI/litellm/pull/44765) feat(lens): add datasets built from real traces
- [#44947](https://github.com/BerriAI/litellm/pull/44947) feat(lens-ui): replace the conversation view with a thread view
- [#44577](https://github.com/BerriAI/litellm/pull/44577) fix(proxy): resolve oidc/ pass-through credentials on every request
- [#44926](https://github.com/BerriAI/litellm/pull/44926) feat(otel): trace auto-router configuration and classifier failures
- [#44945](https://github.com/BerriAI/litellm/pull/44945) feat(lens): add Copy for agent to investigation details
- [#44450](https://github.com/BerriAI/litellm/pull/44450) fix(proxy): bound daily spend rollup row-lock waits with lock_timeout and requeue 55P03
- [#44900](https://github.com/BerriAI/litellm/pull/44900) fix(lens): refresh open traces without claiming session completion
- [#44897](https://github.com/BerriAI/litellm/pull/44897) fix(cost): price batch image output tokens at the batch image rate
- [#44942](https://github.com/BerriAI/litellm/pull/44942) chore: bump litellm-enterprise 0.1.73 -> 0.1.74, litellm-proxy-extras 0.4.105 -> 0.4.106, litellm 1.105.0 -> 1.106.0
- [#41325](https://github.com/BerriAI/litellm/pull/41325) fix(projects): show Projects to team and org admins and scope it correctly
- [#44940](https://github.com/BerriAI/litellm/pull/44940) fix(model_prices): drop /v1/batch from gemini/gemini-nano-banana-2.1
- [#44508](https://github.com/BerriAI/litellm/pull/44508) fix(logging): log spend once for large non-streaming requests on the chat to Responses bridge
- [#44937](https://github.com/BerriAI/litellm/pull/44937) feat(azure): add azure_ai/grok-4.7 and update grok-4.6 input price
- [#44935](https://github.com/BerriAI/litellm/pull/44935) perf(lens): reduce rendering on live investigations
- [#44911](https://github.com/BerriAI/litellm/pull/44911) fix(lens): use async-timeout on python 3.10 for budget reservation timeouts
- [#44930](https://github.com/BerriAI/litellm/pull/44930) fix(tracing): preserve optional provider evidence in fixture replay
- [#44928](https://github.com/BerriAI/litellm/pull/44928) fix(auto-router): separate tuning and select chained heuristic
- [#44895](https://github.com/BerriAI/litellm/pull/44895) fix(lens): preserve chronological order when grouping trace steps
- [#44894](https://github.com/BerriAI/litellm/pull/44894) fix(tracing): retain native logs and headless tool results
- [#44902](https://github.com/BerriAI/litellm/pull/44902) fix(lens): copy supported trace and span content requests
- [#44720](https://github.com/BerriAI/litellm/pull/44720) perf(types): defer pydantic schema builds via shared LiteLLMBaseModel
- [#44709](https://github.com/BerriAI/litellm/pull/44709) fix(caching): never store or serve a chat completion with no choices
- [#44738](https://github.com/BerriAI/litellm/pull/44738) fix(lens): correlate native gateway spend with exact call evidence
- [#44490](https://github.com/BerriAI/litellm/pull/44490) feat(auth): deny search tools by default when search_tool_deny_by_default is set
- [#44244](https://github.com/BerriAI/litellm/pull/44244) feat(proxy): add opt-in vector_store_deny_by_default for least-privilege vector store access
- [#44492](https://github.com/BerriAI/litellm/pull/44492) feat(otel): let team and key Arize callbacks choose the OTLP transport
- [#44906](https://github.com/BerriAI/litellm/pull/44906) refactor(rust_bridge): remove rule-gated native secret-manager selection
- [#44878](https://github.com/BerriAI/litellm/pull/44878) fix(lens): paginate visible conversation entries
- [#44778](https://github.com/BerriAI/litellm/pull/44778) fix(lens): reuse trace reviews and consolidate findings across runs
- [#44892](https://github.com/BerriAI/litellm/pull/44892) feat(vertex-ai): add gemini-nano-banana-2.1 and Nano Banana 2 priority pricing
- [#44891](https://github.com/BerriAI/litellm/pull/44891) fix(model_prices): correct supported_endpoints on gemini and vertex image rows
- [#44890](https://github.com/BerriAI/litellm/pull/44890) fix(ci): skip the generated dashboard bundle in the master key guard
- [#44868](https://github.com/BerriAI/litellm/pull/44868) chore(prices): add gemini/gemini-nano-banana-2.1 from the Gemini pricing page
- [#44718](https://github.com/BerriAI/litellm/pull/44718) fix(security): remove the publicly known master key from the repo
- [#44872](https://github.com/BerriAI/litellm/pull/44872) chore(pricing): add azure model-router and whisper rows
- [#44876](https://github.com/BerriAI/litellm/pull/44876) fix(azure): add model router flat fee to azure provider cost tracking
- [#44880](https://github.com/BerriAI/litellm/pull/44880) chore(model_prices): remove malformed, duplicate and decommissioned palm cost map entries
- [#44648](https://github.com/BerriAI/litellm/pull/44648) fix(ui): read MCP submission rules from bare-array /config/list response
- [#44873](https://github.com/BerriAI/litellm/pull/44873) refactor(rust): extract inference-testing crate
- [#44798](https://github.com/BerriAI/litellm/pull/44798) refactor(types): replace Any with proven types in 157 files
- [#44521](https://github.com/BerriAI/litellm/pull/44521) fix(ui): restore key activity search to the top of the tab and add model activity search
- [#44864](https://github.com/BerriAI/litellm/pull/44864) fix(cost-map): update together_ai Kimi-K3 and Qwen3.8-Flash prices to published rates
- [#44791](https://github.com/BerriAI/litellm/pull/44791) fix(responses): stop SDK retries nesting under router retries, and unbreak CircleCI integration tests
- [#39122](https://github.com/BerriAI/litellm/pull/39122) fix(sap): correctly handle cache_control
- [#44633](https://github.com/BerriAI/litellm/pull/44633) fix(model_prices): gemini deep research input limits, vertex flash retirement dates, azure data zone gpt-6.1-sol pricing
- [#44595](https://github.com/BerriAI/litellm/pull/44595) fix(otel): honor per-team Arize sampling rates in OTel v2 fan-out
- [#44596](https://github.com/BerriAI/litellm/pull/44596) fix(otel): gate the Arize OTel v2 exporter on operator credentials
- [#44605](https://github.com/BerriAI/litellm/pull/44605) fix(otel): name an Arize project on every OTel v2 Arize export
- [#44836](https://github.com/BerriAI/litellm/pull/44836) chore(rust): prune inference deps and rewrite layering docs
- [#44832](https://github.com/BerriAI/litellm/pull/44832) refactor(rust): extract inference-ocr crate
- [#44827](https://github.com/BerriAI/litellm/pull/44827) refactor(rust): extract inference-chat crate
- [#44818](https://github.com/BerriAI/litellm/pull/44818) refactor(rust): extract inference-messages crate
- [#44811](https://github.com/BerriAI/litellm/pull/44811) refactor(rust): extract inference-responses crate
- [#44809](https://github.com/BerriAI/litellm/pull/44809) refactor(rust): extract inference-transcription crate
- [#44802](https://github.com/BerriAI/litellm/pull/44802) refactor(rust): rename litellm-core to litellm-inference
- [#44840](https://github.com/BerriAI/litellm/pull/44840) test: deflake the JEV classifier select and two router tests that inherited leaked state
- [#44491](https://github.com/BerriAI/litellm/pull/44491) refactor(types): replace Any with proven types in 6 files
- [#44829](https://github.com/BerriAI/litellm/pull/44829) fix(azure): add gpt-6-sol priority processing prices
- [#44821](https://github.com/BerriAI/litellm/pull/44821) refactor: remove fresh tech debt from the 2026-10-05 window
- [#44803](https://github.com/BerriAI/litellm/pull/44803) chore(deps): refresh locked dependencies on rc/1.105.0
- [#44805](https://github.com/BerriAI/litellm/pull/44805) chore(docker): bump wolfi-base digest to pick up glibc 2.44-r6 (#42643)
- [#44804](https://github.com/BerriAI/litellm/pull/44804) chore(docker): bump wolfi-base digest to pick up glibc 2.44-r6 (#42643)
- [#44732](https://github.com/BerriAI/litellm/pull/44732) fix(router): price a model group from the deployments that serve it
- [#44777](https://github.com/BerriAI/litellm/pull/44777) chore(release): refresh dependencies on stable/1.104.x and cut 1.104.1
- [#44776](https://github.com/BerriAI/litellm/pull/44776) chore(release): refresh dependencies on stable/1.103.x and cut 1.103.4
- [#44775](https://github.com/BerriAI/litellm/pull/44775) chore(release): refresh dependencies on stable/1.102.x and cut 1.102.3
- [#44773](https://github.com/BerriAI/litellm/pull/44773) chore(release): refresh dependencies on stable/1.101.x and cut 1.101.5
- [#44774](https://github.com/BerriAI/litellm/pull/44774) chore(release): refresh dependencies on stable/1.100.x and cut 1.100.5
- [#44762](https://github.com/BerriAI/litellm/pull/44762) refactor(logging): load enterprise alerting loggers lazily so import litellm skips proxy types
- [#44740](https://github.com/BerriAI/litellm/pull/44740) refactor(types): import proxy-only types under TYPE_CHECKING in SDK modules
- [#44717](https://github.com/BerriAI/litellm/pull/44717) refactor(types): move SpanAttributes, SpecialHeaders and AllowedModelRegion out of proxy._types
- [#44789](https://github.com/BerriAI/litellm/pull/44789) fix(ui): polish Lens runs loading, reload, and time range menu
- [#39585](https://github.com/BerriAI/litellm/pull/39585) fix(chatgpt,github_copilot): refuse device-code login inside an event loop or worker thread
- [#44786](https://github.com/BerriAI/litellm/pull/44786) feat(ui): lead the Lens investigation detail with a run report
- [#44785](https://github.com/BerriAI/litellm/pull/44785) refactor(cache): remove dead Cache._native_cache runtime path
- [#44673](https://github.com/BerriAI/litellm/pull/44673) fix(vertex_ai): add regional endpoint uplift to gemini-3.1-flash-image
- [#41235](https://github.com/BerriAI/litellm/pull/41235) fix(responses): honor caller stream flag when provider forces SSE (internal copy of #34095)
- [#44710](https://github.com/BerriAI/litellm/pull/44710) feat(bedrock): add glm 5.3 cross-region rows and nova 2.5 sonic
- [#44750](https://github.com/BerriAI/litellm/pull/44750) test(integration): basic translation cases for the bedrock_mantle route
- [#44695](https://github.com/BerriAI/litellm/pull/44695) test(integration): keep scripted upstream connections open past the proxy's keepalive
- [#44749](https://github.com/BerriAI/litellm/pull/44749) feat(lens): add copy link button to trace header
- [#44679](https://github.com/BerriAI/litellm/pull/44679) fix(vertex_ai): apply regional endpoint uplift on image generation cost path
- [#43632](https://github.com/BerriAI/litellm/pull/43632) feat(proxy): cap batch file records, daily batch uploads, and per-file downloads
- [#44780](https://github.com/BerriAI/litellm/pull/44780) refactor(tests): extract Rust cache test split from #44714
- [#44751](https://github.com/BerriAI/litellm/pull/44751) test(integration): basic translation cases for the vertex_ai route
- [#44638](https://github.com/BerriAI/litellm/pull/44638) fix(proxy): judge the free-model budget waiver by the group an alias routes to
- [#44761](https://github.com/BerriAI/litellm/pull/44761) fix(ci): namespace claude session ids in tracing seeds and allowlist /v1/logs on backend
- [#44661](https://github.com/BerriAI/litellm/pull/44661) fix(gemini): stop replaying thinking block signatures to Gemini
- [#44752](https://github.com/BerriAI/litellm/pull/44752) test(integration): basic translation cases for the bedrock_invoke route
- [#44706](https://github.com/BerriAI/litellm/pull/44706) test(e2e): assert the sibling-replica cooldown through the router
- [#44758](https://github.com/BerriAI/litellm/pull/44758) feat(model_prices): add chatgpt subscription rows for the gpt-6 family

#### 🐛 New Issues
- [#44830](https://github.com/BerriAI/litellm/issues/44830) [Bug]: Character Sequence in API Key treated as special character `bug` `llm translation` 💬2
- [#44792](https://github.com/BerriAI/litellm/issues/44792) [Bug]: PATCH /model/{id}/update with only the blocked flag returns the auto-router refusal for non-admin team members `bug` 💬2
- [#44923](https://github.com/BerriAI/litellm/issues/44923) [Bug]: Responses streaming bridge omits serialized sequence_number fields and hardcodes output_item.done to 1 `llm translation` 💬1
- [#44888](https://github.com/BerriAI/litellm/issues/44888) [Bug]: Admin UI files truncated to 0 bytes at startup when SERVER_ROOT_PATH is set and --num_workers > 1 `bug` `llm translation` 💬1
- [#44852](https://github.com/BerriAI/litellm/issues/44852) [Bug]: Headroom guardrail skips tool-output-only OpenAI Responses requests `bug` `llm translation` 💬1
- [#44857](https://github.com/BerriAI/litellm/issues/44857) [Bug]: DeepEval callback logs NO_OUTPUT for native Responses API calls and drops tool calls `llm translation` 💬1
- [#44847](https://github.com/BerriAI/litellm/issues/44847) [Bug]: unifying the Bedrock chat-invoke beta filter (#26148 follow-up) will silently break native structured output, since bedrock.structured-outputs-2025-11-13 is null `llm translation` 💬1
- [#44831](https://github.com/BerriAI/litellm/issues/44831) [Bug]: MCP tools/call with an unprefixed tool name on /{server_name}/mcp resolves via the global tool-name mapping, not the server in the path (404 when cold, 403 when another server has a tool with the same name) `bug` 💬1
- [#44814](https://github.com/BerriAI/litellm/issues/44814) [Bug]: reasoning_effort on gemini/gemma-4-31b-it sends a thinking budget, which the model rejects (it takes thinkingLevel minimal or high) `llm translation` 💬1
- [#44979](https://github.com/BerriAI/litellm/issues/44979) [Bug]: /v1/messages drops `tool_result.is_error` when translating Anthropic → OpenAI tool messages `llm translation`
- [#44946](https://github.com/BerriAI/litellm/issues/44946) [Bug]: `modify_params=True` drops adaptive `thinking` when tool-call history has no thinking block `llm translation`
- [#44938](https://github.com/BerriAI/litellm/issues/44938) [Bug]: Scope /global/activity/cache_hits to the authenticated internal user
- [#44934](https://github.com/BerriAI/litellm/issues/44934) [Feature]: provider-neutral external source-rights evidence guardrail for MCP tool calls
- [#44922](https://github.com/BerriAI/litellm/issues/44922) [Bug]: Databricks OAuth M2M fetches a new access token for every completion despite a valid token lifetime `llm translation`
- [#44920](https://github.com/BerriAI/litellm/issues/44920) [Bug]: Proxy auth and dynamic rate-limit checks repeatedly bypass the Router model-group metadata cache `llm translation`
- [#44921](https://github.com/BerriAI/litellm/issues/44921) [Bug]: HiddenLayer JWT refresh blocks the event loop inside the async guardrail request
- [#44918](https://github.com/BerriAI/litellm/issues/44918) [Bug]: batch_completion_models returns the first-listed model rather than the first completed response `llm translation`
- [#44919](https://github.com/BerriAI/litellm/issues/44919) [Bug]: Concurrent budget checks deliver duplicate webhook alerts for the same entity and budget event
- [#44917](https://github.com/BerriAI/litellm/issues/44917) [Bug]: Usage-based routing loses TPM and RPM updates during concurrent Redis-backed success callbacks
- [#44916](https://github.com/BerriAI/litellm/issues/44916) [Bug]: Concurrent batch cache readers return a miss while another reader fetches an existing Redis value
- [#44915](https://github.com/BerriAI/litellm/issues/44915) [Bug]: Cache instances share the default supported_call_types list
- [#44912](https://github.com/BerriAI/litellm/issues/44912) [Bug]: The advertised litellm --test command raises Invalid test value before sending a request `llm translation`
- [#44914](https://github.com/BerriAI/litellm/issues/44914) [Bug]: Router.discard leaves least-busy strategy handlers in global callback lists
- [#44913](https://github.com/BerriAI/litellm/issues/44913) [Bug]: Constructing a Router with shared fallbacks changes an existing Router's default fallback
- [#44907](https://github.com/BerriAI/litellm/issues/44907) [Bug]: Gemini/Vertex tool schemas drop integer enums, although Gemini accepts them as `format: "enum"` `llm translation`
- [#44903](https://github.com/BerriAI/litellm/issues/44903) secret_redaction._SECRET_RE has no size cap — exception_type() and Router fallback redaction block the event loop for seconds on a large provider error `llm translation`
- [#44901](https://github.com/BerriAI/litellm/issues/44901) [Bug]: Scheduler Redis queue updates lose requests across replicas
- [#44869](https://github.com/BerriAI/litellm/issues/44869) [Feature]: complexity router replaces a caller's smaller max_tokens with the tier ceiling — could it clamp instead?
- [#44851](https://github.com/BerriAI/litellm/issues/44851) [Bug]: Headroom session affinity `bug`
- [#44850](https://github.com/BerriAI/litellm/issues/44850) [Feature]: Allow opt-in compression of the latest turn in the Headroom guardrail `enhancement`
- [#44846](https://github.com/BerriAI/litellm/issues/44846) [Feature]: additive registration of anthropic-beta headers via config, instead of shadowing the whole registry `llm translation`
- [#44845](https://github.com/BerriAI/litellm/issues/44845) [Feature]: Scheduled live capability checks for model_prices_and_context_window.json `llm translation`
- [#44835](https://github.com/BerriAI/litellm/issues/44835) [Bug]: /v1/messages streaming + tools via azure/responses/ bridge duplicates tool-call arguments (invalid JSON) `llm translation` `claude code`
- [#44834](https://github.com/BerriAI/litellm/issues/44834) [Bug]: websearch_interception follow-up on /v1/messages ignores client max_tokens, hardcoded 1024 cap `llm translation`
- [#44833](https://github.com/BerriAI/litellm/issues/44833) [Feature]: Carry selected fields from an upstream's /v1/models card (not only token limits) into model info `llm translation`
- [#44825](https://github.com/BerriAI/litellm/issues/44825) [Bug]: session.update instructions silently ignored for vertex_ai/gemini-live — need gemini_live_defer_setup documented + confirmed behavior and turn_detection not working like in sdk `bug` `llm translation`
- [#44824](https://github.com/BerriAI/litellm/issues/44824) [Bug]: langfuse_otel drops Responses API refusals and extra content parts, and raises IndexError on an empty message content list `llm translation`
- [#44815](https://github.com/BerriAI/litellm/issues/44815) [Feature]: do not fall back on UnsupportedParamsError (a config error is hidden behind a 200 from the fallback model) `llm translation`
- [#44799](https://github.com/BerriAI/litellm/issues/44799) helm: migrations job pod gets picked up by the PDB, PDB goes into SyncFailed
- [#44797](https://github.com/BerriAI/litellm/issues/44797) [Bug]: Client disconnect during body upload is processed as an empty request body `claude code`

#### 🔒 Closed Issues
- [#37039](https://github.com/BerriAI/litellm/issues/37039) [Bug]: chatgpt/* non-streaming chat completions fail with "Unknown items in responses API response: []" (streaming works)
- [#28750](https://github.com/BerriAI/litellm/issues/28750) [Feature]: Project-scoped end-user/customer budget limits
- [#31222](https://github.com/BerriAI/litellm/issues/31222) MCP per-user OAuth credential management UI removed with /chat route
- [#31827](https://github.com/BerriAI/litellm/issues/31827) [Feature]: Force override model parameters from proxy config
- [#31840](https://github.com/BerriAI/litellm/issues/31840) [Feature]: Document the include_cost_in_streaming_usage setting
- [#24769](https://github.com/BerriAI/litellm/issues/24769) MCP Registry: Browserbase server has wrong npm package name
- [#29168](https://github.com/BerriAI/litellm/issues/29168) [Bug]: LiteLLM Proxy doesn't drop 'minimum' or 'maximum' on Bedrock anymore
- [#31826](https://github.com/BerriAI/litellm/issues/31826) [Feature]: Protocol-aware deployment selection in Router
- [#31833](https://github.com/BerriAI/litellm/issues/31833) [Feature]: User self-service password change and reset password flow
- [#36426](https://github.com/BerriAI/litellm/issues/36426) [Bug]: Responses-API bridge drops the SpendLogs row for non-streaming /v1/chat/completions (standard_logging_object not found)
- [#26309](https://github.com/BerriAI/litellm/issues/26309) [Bug]: `chatgpt/gpt-5.4` throw exception when stream is `false`
- [#26320](https://github.com/BerriAI/litellm/issues/26320) fix(bedrock/messages): convert top-level `cache_control` to per-block caching when routing /v1/messages to Bedrock
- [#27005](https://github.com/BerriAI/litellm/issues/27005) [Bug]: Non-admin team admins cannot save Key Edit Settings — UI sends `allowed_routes`, but `UpdateKeyRequest` has no `key_type` to fall back to
- [#28732](https://github.com/BerriAI/litellm/issues/28732) Feature: Add MCP server trust scoring for proxy routing decisions
- [#29708](https://github.com/BerriAI/litellm/issues/29708) Integration: Agent Magnet - Self Learning Memory Layer for LiteLLM
- [#31744](https://github.com/BerriAI/litellm/issues/31744) Feature Request: Support drop_params in Gemini, Cohere, and Vertex AI pass-through endpoints
- [#31824](https://github.com/BerriAI/litellm/issues/31824) [Feature]: End-user self-service usage endpoint and dashboard
- [#31857](https://github.com/BerriAI/litellm/issues/31857) Router: `_unregister_router_selectors` drops old selectors from callbacks but never cancels their `_sync_task`, leaking asyncio tasks on `routing_groups`/`routing_strategy` updates
- [#31864](https://github.com/BerriAI/litellm/issues/31864) feat(logging): JSON log records have no request-scoped identifiers when JSON_LOGS=true
- [#31910](https://github.com/BerriAI/litellm/issues/31910) [Bug]: MCP auto-execute + stream:true leaks intermediate tool-call turn (finish_reason:"tool_calls") into client stream — chat UIs render empty messages
- [#44755](https://github.com/BerriAI/litellm/issues/44755) [Bug]: streamed Vertex AI pass-through spend ignores the regional endpoint uplift
- [#43473](https://github.com/BerriAI/litellm/issues/43473) [Bug]: Azure DeepSeek-V4.1-Flash cost map prices both Foundry paths from the Fireworks meter
- [#34797](https://github.com/BerriAI/litellm/issues/34797) [SAP provider] cache_control is stripped from messages — Anthropic prompt caching unusable
- [#34094](https://github.com/BerriAI/litellm/issues/34094) [Bug]: chatgpt/* ignores the client's stream:false since v1.90.0; /v1/responses returns raw SSE and /chat/completions raises "Unknown items in responses API response: []"
- [#31695](https://github.com/BerriAI/litellm/issues/31695) [Bug]: Logs page: search by request_id does not query the backend
- [#31696](https://github.com/BerriAI/litellm/issues/31696) [Bug]: Gemini via /responses endpoint returns "text": null in output_text content block — violates OpenAI Responses API spec and crashes downstream consumers
- [#31821](https://github.com/BerriAI/litellm/issues/31821) [Feature]: Monthly call count limits with overflow buffer for virtual keys
- [#31828](https://github.com/BerriAI/litellm/issues/31828) [Feature]: Object storage cold archive logging with queue buffering
- [#31829](https://github.com/BerriAI/litellm/issues/31829) [Feature]: Pricing tiers and display currency for spend tracking
- [#31830](https://github.com/BerriAI/litellm/issues/31830) [Feature]: Optional priority queue for proxy requests
- [#31832](https://github.com/BerriAI/litellm/issues/31832) [Feature]: Admin UI internationalization support
- [#31834](https://github.com/BerriAI/litellm/issues/31834) [Feature]: Team member and budget reconciliation tools
- [#31839](https://github.com/BerriAI/litellm/issues/31839) [Bug]: Redis counter spend:end_user:{id} not deleted on /customer/delete
- [#31851](https://github.com/BerriAI/litellm/issues/31851) [Bug]: Public model_hub_table health status does not match Admin UI / background health check cache
- [#31863](https://github.com/BerriAI/litellm/issues/31863) bug(bedrock-invoke): native structured output blocked for Claude 4 models; model-rename workaround forces tool-call path for all models
- [#31867](https://github.com/BerriAI/litellm/issues/31867) bug(litellm_proxy): tags and litellm_session_id silently dropped when upstream proxy forwards to downstream LiteLLM proxy in cascaded topology
- [#31869](https://github.com/BerriAI/litellm/issues/31869) [Bug]: ResetBudgetJob loads all expired teams into memory at once -> OOMKills & scheduler failure with large number of teams
- [#31870](https://github.com/BerriAI/litellm/issues/31870) bug(akto-guardrail): during_call mode silently no-ops; missing model-group scoping and O(n^2) streaming ingest
- [#31889](https://github.com/BerriAI/litellm/issues/31889) [Bug]: Potential Routing Bypass and Context Management Flaw in MCP Server Handler
- [#31890](https://github.com/BerriAI/litellm/issues/31890) [Bug] MiniMax streaming reasoning_content not extracted (reopened from #22392)
- [#44742](https://github.com/BerriAI/litellm/issues/44742) [Bug]: streamed /v1/messages call the provider drops mid-stream writes no spend log row and skips the failure hooks
- [#39514](https://github.com/BerriAI/litellm/issues/39514) [Bug]: chatgpt/ device-code auth is synchronous and blocks the proxy event loop for up to 900s, killing the worker
- [#44500](https://github.com/BerriAI/litellm/issues/44500) [Bug]: Chat→Responses bridge double-logs non-streaming requests whose messages reach 256 KiB of text (race in async success dedup), double-charging key/team budgets since v1.102.0
- [#44655](https://github.com/BerriAI/litellm/issues/44655) [Bug]: Response cache stores a chat completion with empty `choices`; each cache hit then returns 500 until the TTL ends

### Unsloth (`unslothai/unsloth`)

**Stars:** 77,280 · **Open issues:** 889 · **Last push:** 1h ago

On October 7, 2026, Unsloth released version 0.1.903-beta, introducing an integrated browser alongside the chat function, enabling users to conveniently access files, web pages, and model outputs directly during conversations. This update also features the new EmbeddingGemma 2 model and enhancements for audio processing and training efficiency. Significant merged pull requests include the addition of a new badge for audio in the sidebar and improvements in the way the Studio handles various embedding models. Among the reported issues, users flagged bugs related to window resizing and model loading failures following the latest update, indicating areas needing immediate attention.

#### 🚀 New Releases
- [v0.1.903-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.903-beta) New Browser + Voice Cloning

#### ✅ Merged PRs
- [#12891](https://github.com/unslothai/unsloth/pull/12891) Studio: add a New badge beside Audio in the sidebar
- [#12899](https://github.com/unslothai/unsloth/pull/12899) Run shell suites and Windows browser checks in parallel
- [#12903](https://github.com/unslothai/unsloth/pull/12903) Frontend test: give the cold Vite SSR render in reasoning-source-render room on a loaded runner
- [#12898](https://github.com/unslothai/unsloth/pull/12898) Studio: list every Transcribe ASR model in Voice settings
- [#12892](https://github.com/unslothai/unsloth/pull/12892) Studio: continue searching past unusable results and add a Wikipedia fallback
- [#12895](https://github.com/unslothai/unsloth/pull/12895) Studio: keep browser panel tooltips, toasts and menus visible over desktop web pages
- [#12896](https://github.com/unslothai/unsloth/pull/12896) Sandbox test: wait for the cache scan workers before counting them
- [#6879](https://github.com/unslothai/unsloth/pull/6879) Support every PEFT init_lora_weights option, with fast PiSSA and MiCA init
- [#12884](https://github.com/unslothai/unsloth/pull/12884) Baseline the eight unsloth-zoo 2026.10.1 findings after review
- [#12881](https://github.com/unslothai/unsloth/pull/12881) Studio: fill the Hebrew and Swedish strings that left the strict i18n check red on main
- [#12882](https://github.com/unslothai/unsloth/pull/12882) Tests: give the setup.ps1 download progress pwsh its own startup cache
- [#12863](https://github.com/unslothai/unsloth/pull/12863) Studio: free PyAV's per-thread scalers before a fork so preexec_fn spawns still exec
- [#12851](https://github.com/unslothai/unsloth/pull/12851) Studio: run ComfyUI-format video quants on the int8 / fp8 runtimes
- [#12868](https://github.com/unslothai/unsloth/pull/12868) Repair three checks that went red on main with the 10-06 Studio merges
- [#12870](https://github.com/unslothai/unsloth/pull/12870) Studio: list embeddinggemma-2 first in the embedding model picker
- [#12869](https://github.com/unslothai/unsloth/pull/12869) Bump install.sh / install.ps1 pins to unsloth>=2026.10.1, unsloth-zoo>=2026.10.1
- [#12866](https://github.com/unslothai/unsloth/pull/12866) Studio UI test: drive the sandbox level picker that replaced the menu switch
- [#12864](https://github.com/unslothai/unsloth/pull/12864) Studio: stop loading EmbeddingGemma in float16 in the RAG embedder
- [#12865](https://github.com/unslothai/unsloth/pull/12865) EmbeddingGemma 2 support and embedding improvements
- [#12778](https://github.com/unslothai/unsloth/pull/12778) Compile the Laya encoder for decision model training
- [#12848](https://github.com/unslothai/unsloth/pull/12848) Do not print the 16bit LoRA notice when a quantization_config still quantizes
- [#12833](https://github.com/unslothai/unsloth/pull/12833) Studio: keep GLM-5.3-Flash's MTP head in Auto
- [#12847](https://github.com/unslothai/unsloth/pull/12847) Studio: convert the decoded image to uint8 on the device
- [#12819](https://github.com/unslothai/unsloth/pull/12819) Studio: read chat replies aloud in a saved Audio voice
- [#12817](https://github.com/unslothai/unsloth/pull/12817) Studio: add audio translations and list audio workflows in /v1/models
- [#12858](https://github.com/unslothai/unsloth/pull/12858) Read the API monitor unload button's disabled terms, not its exact spelling
- [#12812](https://github.com/unslothai/unsloth/pull/12812) Studio: complete the OpenAI-compatible audio API
- [#12846](https://github.com/unslothai/unsloth/pull/12846) Studio Desktop: stop the launch-time PATH probe from rewriting shell history
- [#12850](https://github.com/unslothai/unsloth/pull/12850) tests: make the torchcodec provenance and mirror repair tests hermetic
- [#12854](https://github.com/unslothai/unsloth/pull/12854) Studio: size host RAM from the container's cgroup, and re-measure the MiniMax-H3 floor
- [#12849](https://github.com/unslothai/unsloth/pull/12849) install.ps1: guard the mirror env restore and run its test in Windows CI
- [#12838](https://github.com/unslothai/unsloth/pull/12838) Studio: sample Qwen-Image-2.1 and FLUX.1 dev at ComfyUI's fixed sigma schedule
- [#12814](https://github.com/unslothai/unsloth/pull/12814) Studio: show audio clip details, playback and runs in the Library
- [#12855](https://github.com/unslothai/unsloth/pull/12855) Studio: sandbox level picker and Settings > Sandbox cleanup
- [#12585](https://github.com/unslothai/unsloth/pull/12585) Studio: fine-tune Laya and Cloudflare Clef decision models and serve them
- [#12844](https://github.com/unslothai/unsloth/pull/12844) Studio: fix locale parity on main (Swedish sandbox strings, Manage files)
- [#12816](https://github.com/unslothai/unsloth/pull/12816) Studio: open audio models on their Audio page
- [#12837](https://github.com/unslothai/unsloth/pull/12837) Build flex attention masks without graph breaks under torch.compile
- [#12822](https://github.com/unslothai/unsloth/pull/12822) Studio: clone with 13 more audio.cpp models, convert with Tone-Color VC
- [#12852](https://github.com/unslothai/unsloth/pull/12852) Studio: tighten the browser address bar and clear it while typing
- [#12831](https://github.com/unslothai/unsloth/pull/12831) Runtime encoding lint: exempt the reviewed PyAV codec open
- [#12697](https://github.com/unslothai/unsloth/pull/12697) Call create_optimizer without a model in the embedding optim-bits test
- [#12809](https://github.com/unslothai/unsloth/pull/12809) Studio: say when the audio runtime is not the release Studio installs
- [#12834](https://github.com/unslothai/unsloth/pull/12834) Studio browser: mark the panel's fetches to unsloth.ai for a Cloudflare skip rule
- [#12823](https://github.com/unslothai/unsloth/pull/12823) Studio: close the MLX context compaction gaps left after #9399
- [#8561](https://github.com/unslothai/unsloth/pull/8561) Studio: import Cursor, Claude Code and Codex conversations from Settings
- [#12811](https://github.com/unslothai/unsloth/pull/12811) Studio: send audio clips, stems and transcripts to other Audio pages
- [#12843](https://github.com/unslothai/unsloth/pull/12843) Pin qwen-image-layered's VAE config for the seam guard, and check coverage in Backend CI
- [#6344](https://github.com/unslothai/unsloth/pull/6344) Studio: add Hebrew (he) display language
- [#12818](https://github.com/unslothai/unsloth/pull/12818) Studio: list every runnable audio.cpp-gguf model on its Audio pages
- [#12829](https://github.com/unslothai/unsloth/pull/12829) Studio: more browser settings
- [#12773](https://github.com/unslothai/unsloth/pull/12773) Send maskless causal flex calls to SDPA is_causal
- [#8937](https://github.com/unslothai/unsloth/pull/8937) Studio: discover models installed through oMLX
- [#12813](https://github.com/unslothai/unsloth/pull/12813) Studio: fix audio mic choice, reload page, tour copy and palette search
- [#8985](https://github.com/unslothai/unsloth/pull/8985) Studio: do not offer a local model that is short a shard
- [#12820](https://github.com/unslothai/unsloth/pull/12820) Studio: load the ComfyUI-format twin of a hosted image prequant, and run ComfyUI fp8 on the fp8 path
- [#11223](https://github.com/unslothai/unsloth/pull/11223) feat(studio): add model picker and reload shortcut to API monitor
- [#12802](https://github.com/unslothai/unsloth/pull/12802) Studio: Sandbox Low/High and Permissions under Settings > Sandbox
- [#9834](https://github.com/unslothai/unsloth/pull/9834) README: document Homebrew installation on macOS
- [#12786](https://github.com/unslothai/unsloth/pull/12786) Studio: compact long chats on API models too
- [#7795](https://github.com/unslothai/unsloth/pull/7795) Seq2Seq LoRA task type and GA token count for T5Gemma2
- [#12828](https://github.com/unslothai/unsloth/pull/12828) Studio: share one kernel install core with unsloth install-kernels
- [#10071](https://github.com/unslothai/unsloth/pull/10071) Studio: add Swedish locale
- [#12750](https://github.com/unslothai/unsloth/pull/12750) Fix managed vLLM startup in Windows Studio
- [#12752](https://github.com/unslothai/unsloth/pull/12752) Studio: run Qwen-Image-2.1 edits on 16 GB cards instead of refusing them
- [#12835](https://github.com/unslothai/unsloth/pull/12835) Wait on the pooled fetch itself in the closed-request browser test
- [#8917](https://github.com/unslothai/unsloth/pull/8917) fix(studio): resolve UUID-form CUDA_VISIBLE_DEVICES to physical GPU indices
- [#12795](https://github.com/unslothai/unsloth/pull/12795) Keep EmbeddingGemma and Qwen3-Embedding prompts when fine-tuning
- [#12804](https://github.com/unslothai/unsloth/pull/12804) Studio: open chat HTML in the Browser and remove Canvas
- [#9769](https://github.com/unslothai/unsloth/pull/9769) Clear the duplicate-definition backlog and gate it at zero
- [#12765](https://github.com/unslothai/unsloth/pull/12765) Studio: load ComfyUI-format int8_convrot / fp8 single-file DiTs instead of rendering noise
- [#12815](https://github.com/unslothai/unsloth/pull/12815) Studio: build each Qwen-Image-Edit variant on its own transformer config (2509 / original Edit no longer get 2511's zero_cond_t)
- [#12801](https://github.com/unslothai/unsloth/pull/12801) Studio: make the OS sandbox work in Colab and other containers
- [#12743](https://github.com/unslothai/unsloth/pull/12743) feat(studio): opt-in reasoning for Custom Chat Completions connections
- [#12793](https://github.com/unslothai/unsloth/pull/12793) Studio: keep a Library file's star, folder and name after an edit
- [#12758](https://github.com/unslothai/unsloth/pull/12758) Fix MXC inherited runtime permissions and pending grant recovery
- [#12756](https://github.com/unslothai/unsloth/pull/12756) Fix Windows MXC runtime grants for uv-managed Python
- [#7784](https://github.com/unslothai/unsloth/pull/7784) Studio: add custom validator blocks to Data Recipes
- [#9927](https://github.com/unslothai/unsloth/pull/9927) Improve Korean Studio translations
- [#12787](https://github.com/unslothai/unsloth/pull/12787) Studio: let safetensors vision models see every image in a chat
- [#12742](https://github.com/unslothai/unsloth/pull/12742) fast_inference for Qwen3.5 / 3.6 MoE and Gemma-4 MoE with LoRA on the experts
- [#9199](https://github.com/unslothai/unsloth/pull/9199) Studio: dismiss the llama.cpp update toast once the job finishes
- [#12754](https://github.com/unslothai/unsloth/pull/12754) Run narrow RMSNorm rows several per program, bit-identical (Qwen3 q/k norms)
- [#12830](https://github.com/unslothai/unsloth/pull/12830) Studio: Download history redesign with Show in Finder
- [#12826](https://github.com/unslothai/unsloth/pull/12826) Studio: dark dropdown glow, menu ticks and picker polish
- [#12825](https://github.com/unslothai/unsloth/pull/12825) Studio: add Manage files to Settings > Data and reorder Settings tabs
- [#12753](https://github.com/unslothai/unsloth/pull/12753) Studio: leave MiniMax-H3's unpinned streamed blocks to diffusers' onload
- [#12764](https://github.com/unslothai/unsloth/pull/12764) Studio: size seam-free VAE tiles from measured peaks (no slower than stock, no low-VRAM OOM)
- [#12827](https://github.com/unslothai/unsloth/pull/12827) Thread browser harnesses: reach Delete through the More menu, and attack Copy in the dismissal probe
- [#12808](https://github.com/unslothai/unsloth/pull/12808) Studio: save audio clips and stems through the desktop save dialog
- [#12777](https://github.com/unslothai/unsloth/pull/12777) Studio: Qwen-Image-Layered on the native sd.cpp engine
- [#12790](https://github.com/unslothai/unsloth/pull/12790) Studio: train Continued Pretraining on the body text column
- [#12775](https://github.com/unslothai/unsloth/pull/12775) Studio: Qwen-Image-Layered on the diffusers engine, GGUF included
- [#12776](https://github.com/unslothai/unsloth/pull/12776) Studio: route Qwen-Image-Edit / Edit-2509 / Edit-2511 and FLUX.1-Kontext GGUFs to the native sd.cpp engine
- [#12791](https://github.com/unslothai/unsloth/pull/12791) Studio: give API clients the same Qwen thinking sampling as Chat
- [#12766](https://github.com/unslothai/unsloth/pull/12766) Studio: CI guard that fails when any family's VAE decodes in tiles below the seam floor
- [#12794](https://github.com/unslothai/unsloth/pull/12794) Studio: chat with and export Mac LoRAs trained on base models
- [#9966](https://github.com/unslothai/unsloth/pull/9966) Studio: keep a trailing slash on Windows CUDA toolkit roots
- [#10196](https://github.com/unslothai/unsloth/pull/10196) Use a native template icon in the macOS menu bar
- [#12755](https://github.com/unslothai/unsloth/pull/12755) Studio: send an explicit CFG for every FLUX family on the sd.cpp engine
- [#12792](https://github.com/unslothai/unsloth/pull/12792) Studio: keep project folders on the Docker volume
- [#12805](https://github.com/unslothai/unsloth/pull/12805) Studio: 12px code font, context usage ring and small sizing fixes
- [#12806](https://github.com/unslothai/unsloth/pull/12806) Studio: show the close button in the mobile sidebar
- [#12807](https://github.com/unslothai/unsloth/pull/12807) Studio: open Audio from More and keep it in the sidebar while it is open
- [#12780](https://github.com/unslothai/unsloth/pull/12780) chore: pre-commit autoupdate
- [#12788](https://github.com/unslothai/unsloth/pull/12788) Studio: keep line breaks and ticked boxes in attached Word files
- [#12779](https://github.com/unslothai/unsloth/pull/12779) Studio: make adding files to a knowledge base discoverable from the chat
- [#12789](https://github.com/unslothai/unsloth/pull/12789) Studio: send blank seed cells to Data Recipe prompts as empty text
- [#12810](https://github.com/unslothai/unsloth/pull/12810) Frontend tests: read the composer shadow and palette seeds where #12800 left them
- [#12762](https://github.com/unslothai/unsloth/pull/12762) Studio: stop the Vulkan probe from popping "Entry point not found" on old Vulkan loaders
- [#12723](https://github.com/unslothai/unsloth/pull/12723) studio: keep the linux desktop window resizable
- [#12782](https://github.com/unslothai/unsloth/pull/12782) studio: even the gaps between the window button glyphs

#### 🐛 New Issues
- [#12845](https://github.com/unslothai/unsloth/issues/12845) [Bug] Unsloth Desktop AppImage v0.1.902-beta - Window Resize Problem `feature request` `bug` 💬1
- [#12836](https://github.com/unslothai/unsloth/issues/12836) [Feature] Unsloth docs: Document Intel GPU pin for Unsloth Studio install `feature request` 💬4
- [#12862](https://github.com/unslothai/unsloth/issues/12862) [Bug] Can't maximize, change screen size `feature request` `bug` 💬1
- [#12842](https://github.com/unslothai/unsloth/issues/12842) [Bug] Models not loading after the latest update `feature request` `bug` 💬1
- [#12918](https://github.com/unslothai/unsloth/issues/12918) Your Ci/CD is Still SLOW AF
- [#12901](https://github.com/unslothai/unsloth/issues/12901) [Bug] Studio macOS installer leaves llama-fit-params non-executable, reducing context to 8K
- [#12861](https://github.com/unslothai/unsloth/issues/12861) [Feature] Add a way to disable or manage spell check in unsloth desktop `feature request`
- [#12860](https://github.com/unslothai/unsloth/issues/12860) [Unsloth Bug] Studio (Windows): FP8 text-encoder pre-quantization can exhaust the commit limit (os error 1455), then cascades into a missing-shard load failure

#### 🔒 Closed Issues
- [#5156](https://github.com/unslothai/unsloth/issues/5156) Prepare Unsloth Studio desktop releases for Homebrew Cask submission
- [#6730](https://github.com/unslothai/unsloth/issues/6730) Feature Request: Support MiCA (Minor Component Adaptation)
- [#12845](https://github.com/unslothai/unsloth/issues/12845) [Bug] Unsloth Desktop AppImage v0.1.902-beta - Window Resize Problem
- [#9117](https://github.com/unslothai/unsloth/issues/9117) [Feature]We hope to add new model download sources
- [#12680](https://github.com/unslothai/unsloth/issues/12680) [Bug] Release Package for ARM64 is MacOs build not Linux as intended from the download links on website
- [#11614](https://github.com/unslothai/unsloth/issues/11614) [Tracking] AMD: training on RDNA 1 cards (RX 5700 XT, gfx1010)
- [#12862](https://github.com/unslothai/unsloth/issues/12862) [Bug] Can't maximize, change screen size
- [#8873](https://github.com/unslothai/unsloth/issues/8873) [Bug] UUID-form CUDA_VISIBLE_DEVICES silently hides the per-model GPU picker on a healthy multi-GPU CUDA host
- [#11189](https://github.com/unslothai/unsloth/issues/11189) [Feature] Load model button in API board
- [#8596](https://github.com/unslothai/unsloth/issues/8596) [Feature] FastSentenceTransformer: multimodal (vision) embedding fine-tuning (Qwen3-VL-Embedding)
- [#12369](https://github.com/unslothai/unsloth/issues/12369) [Feature Request] Auto-chunking or background processing for large text attachments
- [#12678](https://github.com/unslothai/unsloth/issues/12678) [Bug] Starting unsloth desktop clears bash history
- [#9751](https://github.com/unslothai/unsloth/issues/9751) [Tracking] The duplicate-definition backlog on `main` is acknowledged in lint-ci.yml but has no issue; the gate can never shrink it
- [#12714](https://github.com/unslothai/unsloth/issues/12714) drift loss curve for gemma4-12b text-only training

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,125 · **Open issues:** 378 · **Last push:** 5h ago

On October 7, 2026, AIBrix had a quiet day with no new releases. Key advancements included the merging of several bug fixes and features: the resolution of ModelClaim issues identified through a stress test in PR #2922, enhancements to multi-GPU pod management in PR #2923, and the introduction of on-demand model-list discovery in PR #2915. Additionally, new functionalities were added such as least-request-top-k routing in PR #2918 and a concurrent-admission test fix addressing expired Redis read budgets in PR #2920. Notably, new issues emerged surrounding ModelClaim residency policies, with discussions initiated on features that introduce Sleep and Wake tracks in PRs #2926, #2924, and #2925.

#### ✅ Merged PRs
- [#2687](https://github.com/vllm-project/aibrix/pull/2687) docs: fix broken relative links in docs
- [#2923](https://github.com/vllm-project/aibrix/pull/2923) [Bug] Make room for ModelClaims in a fairer order and on multi-GPU pods
- [#2922](https://github.com/vllm-project/aibrix/pull/2922) [Bug] Fix the ModelClaim problems found by a stress test
- [#2920](https://github.com/vllm-project/aibrix/pull/2920) [Bug] Stop the concurrent-admission test failing on an expired Redis read budget
- [#2915](https://github.com/vllm-project/aibrix/pull/2915) [Feat] Verify gateway model-list discovery on demand
- [#2918](https://github.com/vllm-project/aibrix/pull/2918) [Feat] Add least-request-top-k routing and use it as the auto-blend load scorer

#### 🐛 New Issues
- [#2926](https://github.com/vllm-project/aibrix/issues/2926) [Feature][ModelClaim] Introduce per-claim Residency Policy with Sleep and Wake tracks `kind/feature` `area/orchestration` 💬3
- [#2924](https://github.com/vllm-project/aibrix/issues/2924) [Feature][ModelClaim][Residency] Add per-claim Sleep Policy overrides `kind/feature` `area/orchestration` 💬3
- [#2925](https://github.com/vllm-project/aibrix/issues/2925) [Feature][ModelClaim][Residency] Add declarative Wake Policy `kind/feature` `area/orchestration` 💬3
- [#2921](https://github.com/vllm-project/aibrix/issues/2921) [Bug] ModelClaim problems found by a stress test `kind/bug` `area/orchestration` 💬2

#### 🔒 Closed Issues
- [#2921](https://github.com/vllm-project/aibrix/issues/2921) [Bug] ModelClaim problems found by a stress test
- [#2914](https://github.com/vllm-project/aibrix/issues/2914) [Feat] Report unavailable gateway model discovery from /v1/models

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,041 · **Open issues:** 611 · **Last push:** <1h ago

On October 7, 2026, there were no new releases for Semantic Router, but several significant updates were merged, including #4565, which addresses a bug with scoring the fact-check baseline on the corpus-matched suite test, and multiple features related to locked UV environments for various classifiers and scripts, particularly #4610 for the escalation risk classifier and #4576 for the fact-check LoRA scripts. Additionally, important bug fixes were implemented, such as #4544, which ensures the use of Router-generated IDs for fast-response and cache-hit responses, and #4462, which corrects the default omitted ingress service port setting. Among new issues, #4651 stands out, raising concerns about E2E testing failures in the response-api-redis profiles, which may impact system reliability. Overall, the day focused on bug resolution and feature enhancements, contributing to improved functionality.

#### ✅ Merged PRs
- [#4565](https://github.com/vllm-project/semantic-router/pull/4565) [Bug] Score the fact-check baseline on the corpus-matched suite test
- [#4610](https://github.com/vllm-project/semantic-router/pull/4610) [Feature] Add a locked uv environment for the escalation risk classifier (#3932)
- [#4577](https://github.com/vllm-project/semantic-router/pull/4577) [Feature] Add a locked uv environment for the PII LoRA scripts
- [#4559](https://github.com/vllm-project/semantic-router/pull/4559) [Feature] Send a per-task session ID on sr-bench subject calls
- [#4544](https://github.com/vllm-project/semantic-router/pull/4544) [Bug] Use Router-generated IDs for fast-response and cache-hit Responses
- [#4462](https://github.com/vllm-project/semantic-router/pull/4462) [Bug] Default omitted ingress servicePort to the API service port
- [#4461](https://github.com/vllm-project/semantic-router/pull/4461) [Bug] Clear openShiftFeatures status when routes are disabled
- [#4445](https://github.com/vllm-project/semantic-router/pull/4445) [Docs] Explain model routing and conversation continuity
- [#4443](https://github.com/vllm-project/semantic-router/pull/4443) [Test] Verify Semantic Router and llm-d endpoint composition
- [#4130](https://github.com/vllm-project/semantic-router/pull/4130) [Test] Extend multi-turn protection benchmark for progress gate
- [#4576](https://github.com/vllm-project/semantic-router/pull/4576) [Feature] Add a locked uv environment for the fact-check LoRA scripts
- [#4574](https://github.com/vllm-project/semantic-router/pull/4574) [Feature] Add a locked uv environment for the modality routing classifier (#3932)

#### 🐛 New Issues
- [#4621](https://github.com/vllm-project/semantic-router/issues/4621) [Test] Model runtime: validate the CUDA accelerator on NVIDIA GPUs `accepted` `in-progress` `wg/router-models-inference-runtime` 💬4
- [#4651](https://github.com/vllm-project/semantic-router/issues/4651) [Bug] E2E: the response-api-redis profiles fail 11 of 12 tests `bug` `accepted` `wg/agentic-context` 💬2
- [#4627](https://github.com/vllm-project/semantic-router/issues/4627) [Docs] Complete the first zh-Hans catch-up wave: docs pages, team strings, links `needs-acceptance` `wg/developer-experience-ecosystem` `documentation` 💬2
- [#4654](https://github.com/vllm-project/semantic-router/issues/4654) [Bug] Model runtime: a 5 MiB input grows the embedding runtime by about 1.9 GB `bug` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#4653](https://github.com/vllm-project/semantic-router/issues/4653) [Bug] Router: a Flow alias that names a backend model silently captures its traffic `bug` `needs-acceptance` `wg/mom-routing` 💬1
- [#4647](https://github.com/vllm-project/semantic-router/issues/4647) [Feature] Router: author custom request graphs in the routing configuration `enhancement` `needs-acceptance` `wg/mom-routing` 💬1
- [#4638](https://github.com/vllm-project/semantic-router/issues/4638) [Feature] Router: route on Vela 2.0 set and span answers `enhancement` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬1
- [#4639](https://github.com/vllm-project/semantic-router/issues/4639) [Feature] Router: make Vela 2.0 0.3B the default for the built-in signals once it is public `enhancement` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬1
- [#4644](https://github.com/vllm-project/semantic-router/issues/4644) [Feature] Router: let signal families register from outside the Router `enhancement` `accepted` `wg/mom-routing` 💬1
- [#4641](https://github.com/vllm-project/semantic-router/issues/4641) [Test] E2E: a stalled exec into the Router pod hangs the model-runtime lane until the job times out `accepted` `wg/router-models-inference-runtime` 💬1
- [#4623](https://github.com/vllm-project/semantic-router/issues/4623) [Feature] Router: standalone mode without Envoy, with in-process request graphs `enhancement` `accepted` `in-progress` `wg/data-plane-networking` 💬1

#### 🔒 Closed Issues
- [#4256](https://github.com/vllm-project/semantic-router/issues/4256) [Feature] Send a per-task session identity from sr-bench agent benchmarks
- [#2477](https://github.com/vllm-project/semantic-router/issues/2477) [CI] Restore ONNX Go test compilation and make it mandatory
- [#3216](https://github.com/vllm-project/semantic-router/issues/3216) [Feature] Ship the public vLLM-SR agent install and journey skill
- [#4516](https://github.com/vllm-project/semantic-router/issues/4516) [Bug] Chat response decoder rejects vLLM stop_reason strings over 128 bytes
- [#3679](https://github.com/vllm-project/semantic-router/issues/3679) [Bug] Preserve mmBERT availability across embedding initialization order
- [#4227](https://github.com/vllm-project/semantic-router/issues/4227) [Bug] Copilot CLI and Codex CLI fail Responses decoding on their custom apply_patch tool
- [#4589](https://github.com/vllm-project/semantic-router/issues/4589) [Bug] Dashboard External Models editor cannot save the shipped config
- [#4414](https://github.com/vllm-project/semantic-router/issues/4414) [Bug] Omitting ingress servicePort builds an Ingress the API server rejects
- [#4415](https://github.com/vllm-project/semantic-router/issues/4415) [Bug] status.openShiftFeatures is never cleared when Routes are disabled
- [#4543](https://github.com/vllm-project/semantic-router/issues/4543) [Bug] Fast-response and cache-hit Responses use IDs derived from x-request-id
- [#4641](https://github.com/vllm-project/semantic-router/issues/4641) [Test] E2E: a stalled exec into the Router pod hangs the model-runtime lane until the job times out
- [#4451](https://github.com/vllm-project/semantic-router/issues/4451) [Bug] Fix dead installation link in Vela AMD recipe README

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*