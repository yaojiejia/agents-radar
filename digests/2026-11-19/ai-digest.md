# 📡 AI Ecosystem Digest — 2026-11-19

> Generated 2026-11-19 03:59 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 156,195 | 25 | 3 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 135,812 | 25 | 1 | 49 | 2 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,932 | 0 | 0 | 3 | 2 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,435 | 7 | 8 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 227,857 | 35 | 18 | 7 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 30,770 | 25 | 12 | 6 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 394,774 | 143 | 122 | 174 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 264,533 | 24 | 4 | 2 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 97,190 | 41 | 15 | 50 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 39,044 | 17 | 6 | 48 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 135,626 | 14 | 20 | 33 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 187,565 | 8 | 3 | 2 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,512 | 36 | 38 | 136 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,756 | 11 | 19 | 138 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,193 | 6 | 1 | 1 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,505 | 39 | 34 | 13 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.328](https://github.com/anthropics/claude-code/releases/tag/v2.1.328) today, adding new features and improvements.  
- **OpenAI Codex** introduced two releases: [rust-v0.172.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.172.0-alpha.1) and [rust-v0.171.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.13).  
- **OpenClaw** also released [v2026.10.33](https://github.com/openclaw/openclaw/releases/tag/v2026.10.33), enhancing its capabilities.  
- A significant issue in **OpenAI Codex** regarding unsupported audio tool output has garnered attention, with [#62212](https://github.com/openai/codex/issues/62212) receiving 13 comments as users discuss the HTTP 400 errors encountered.  
- **Ollama's** issue [#19765](https://github.com/ollama/ollama/issues/19765) about silent truncation at 65,536 tokens has also attracted significant interest, sparking discussions among users with 3 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 156,195 · **Open issues:** 17,107 · **Last push:** <1h ago

On November 19, 2026, Claude Code released version 2.1.328, which introduced an auto mode for Claude Opus 4.6 and Sonnet 4.6 across several platforms, including Amazon Bedrock and Google Cloud's Agent Platform. This version also added a feature for `mcp_tool` hooks that blocks actions on call failures and included a warning mechanism for session messages. Notably, new issues reported today include a feature request for desktop scheduled tasks regarding model family aliases and a real-time bug affecting WordPress vulnerability research. A critical bug was also identified where cross-user prompt leakage occurred in the previous version, 2.1.327.

#### 🚀 New Releases
- [v2.1.328](https://github.com/anthropics/claude-code/releases/tag/v2.1.328) v2.1.328

#### 🐛 New Issues
- [#111079](https://github.com/anthropics/claude-code/issues/111079) [Feature] Desktop scheduled tasks: model family aliases ("Opus latest"), per-task effort, and model/effort via update_scheduled_task `enhancement` `area:desktop` 💬1
- [#111072](https://github.com/anthropics/claude-code/issues/111072) [Feature] Desktop Code tab: let a coordinator session start child sessions above its own model/effort `enhancement` `area:permissions` `area:desktop` 💬1
- [#111076](https://github.com/anthropics/claude-code/issues/111076) [Bug] Real-time cyber safeguard blocks legitimate WordPress vulnerability research and disclosure work `bug` `duplicate` `platform:macos` `area:model` 💬1
- [#111009](https://github.com/anthropics/claude-code/issues/111009) Windows/Git Bash: shell snapshot always times out when process creation is slow; orphaned shells and a -c script make the first Bash call take ~23 s `bug` `platform:windows` `area:bash` `perf:reliability` 💬1
- [#110985](https://github.com/anthropics/claude-code/issues/110985) Allow to export artifacts that were shared to you as html, md, pdf, same as one… `enhancement` 💬1
- [#111061](https://github.com/anthropics/claude-code/issues/111061) [BUG] Cross-user prompt leakage in Claude Code 2.1.327 (VS Code): other users’ Opus 4.7 requests appearing in local chat window (Remote Control disabled) `bug` `platform:macos` `area:security` `platform:vscode` 💬1
- [#111067](https://github.com/anthropics/claude-code/issues/111067) [BUG] Windows native: `claude update` / `claude install 2.1.327` fails with "Failed to create executable" after renaming claude.exe, leaving no claude on PATH `bug` `has repro` `platform:windows` `area:installation` 💬1
- [#111081](https://github.com/anthropics/claude-code/issues/111081) [BUG] terminal-browser plugin pane flickers on every frame in kitty; standalone terminal-browser does not `bug` `has repro` `platform:linux` `area:tui`
- [#111080](https://github.com/anthropics/claude-code/issues/111080) Claude deleted all interim file versions on a vague 'delete a lot' instruction, bypassing Recycle Bin (Sonnet 5.5, desktop app) `bug` `platform:windows` `area:model` `data-loss`
- [#111078](https://github.com/anthropics/claude-code/issues/111078) [Bug] Opus Refuses Kindle Jailbreak Assistance on Owned Device `bug` `platform:macos` `area:model`
- [#111077](https://github.com/anthropics/claude-code/issues/111077) MCP client ignores notifications/cancelled for requestId 0, so a pending elicitation dialog cannot be withdrawn `bug` `has repro` `platform:linux` `area:mcp`
- [#111075](https://github.com/anthropics/claude-code/issues/111075) [GitHub integration] `invalid` `github-integration`
- [#111074](https://github.com/anthropics/claude-code/issues/111074) Projects preview (Claude desktop app): no voice input, no effort picker in coordinator chat `enhancement` `platform:macos` `area:desktop`
- [#111073](https://github.com/anthropics/claude-code/issues/111073) [Bug] Overly Restrictive Refusal on Provided SQL File Work `bug` `platform:windows` `area:model`
- [#111071](https://github.com/anthropics/claude-code/issues/111071) [FEATURE] Mods: choose a pane's seat — dock side (left/right), top/bottom-of-window seats, and rows honoured in the dock `enhancement` `platform:macos` `area:tui`
- [#111070](https://github.com/anthropics/claude-code/issues/111070) Claude asserted 95 x $0.25 = $25 'exactly' in sworn-filing drafts (Sonnet 5.5, desktop app) `bug` `area:model`
- [#111069](https://github.com/anthropics/claude-code/issues/111069) [BUG] Linux/Wayland + Ghostty: copied selection can't be pasted inside Ghostty (built-in clipboard addon and OSC 52 both write the clipboard) `bug` `has repro` `platform:linux` `area:tui`
- [#111068](https://github.com/anthropics/claude-code/issues/111068) Deferred tools loaded via ToolSearch invalidate the whole prompt cache on local/third-party backends (regression since 2.1.310) `bug` `platform:macos` `area:tools` `regression`
- [#111066](https://github.com/anthropics/claude-code/issues/111066) Claude overstated a source document in sworn-filing drafts and misreported a failed export as success (Sonnet 5.5, desktop app) `bug` `platform:windows` `area:model`
- [#111065](https://github.com/anthropics/claude-code/issues/111065) Write tool result for new files renders without added-line (green) highlighting, unlike Edit `enhancement` `area:tui`
- [#111064](https://github.com/anthropics/claude-code/issues/111064) [BUG] Two @imports on consecutive lines of ~/.claude/CLAUDE.md both fail silently (Windows, desktop app) `bug` `has repro` `platform:windows` `memory`
- [#111063](https://github.com/anthropics/claude-code/issues/111063) [BUG] Custom connector shows connected but every tool call returns 'This connector requires authentication' in Claude Code (Desktop, Windows) `bug` `platform:windows` `area:auth` `area:mcp`
- [#111062](https://github.com/anthropics/claude-code/issues/111062) Desktop: mod Backdrop Svg scene is drawn but its CSS animations never run (works in browser and in AbovePrompt band) `bug` `platform:windows` `area:plugins` `area:desktop`
- [#111060](https://github.com/anthropics/claude-code/issues/111060) $.session.info().transcriptPath points at the pre-relocation folder after the desktop app moves a session `bug` `platform:macos` `area:hooks` `area:plugins`
- [#111059](https://github.com/anthropics/claude-code/issues/111059) [Bug] Remote Control "Always Allow" doesn't persist across sessions `bug` `platform:macos` `area:permissions`

#### 🔒 Closed Issues
- [#87777](https://github.com/anthropics/claude-code/issues/87777) [BUG] Desktop: Remote Control auto-enable only fires on a session's first turn, so the 900s idle teardown silently turns it off for good
- [#106718](https://github.com/anthropics/claude-code/issues/106718) [BUG] iOS app on iPhone Duo in landscape: conversation stays narrow and tables get cut off (Safari uses the width)
- [#111072](https://github.com/anthropics/claude-code/issues/111072) [Feature] Desktop Code tab: let a coordinator session start child sessions above its own model/effort

### OpenAI Codex (`openai/codex`)

**Stars:** 135,812 · **Open issues:** 27,852 · **Last push:** <1h ago

Today, OpenAI Codex released versions rust-v0.172.0-alpha.1 and rust-v0.171.0-alpha.13, with improvements focusing on performance and usability. Key merged pull requests included enhancements like support for nested Apps tool results in Code Mode sampling requests and enabling network access in the shell snapshot filesystem test. Notably, the update also removes the 4,000-byte prompt limit for `thread/sample`, enhancing flexibility for users. Among the new issues, a significant report highlights that the Codex desktop application experiences unresponsiveness when the Browser Use context loses its target on Windows, indicating potential challenges in multi-tasking scenarios.

#### 🚀 New Releases
- [rust-v0.172.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.172.0-alpha.1) 0.172.0-alpha.1
- [rust-v0.171.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.13) 0.171.0-alpha.13

#### ✅ Merged PRs
- [#62423](https://github.com/openai/codex/pull/62423) Include nested Apps tool results in Code Mode sampling requests
- [#62421](https://github.com/openai/codex/pull/62421) Reject provider query parameters for connector result passthrough
- [#62420](https://github.com/openai/codex/pull/62420) Box the future returned by response item injection
- [#62419](https://github.com/openai/codex/pull/62419) Allow per-sample model overrides in `thread/sample`
- [#62415](https://github.com/openai/codex/pull/62415) Enable network access in the shell snapshot filesystem test
- [#62407](https://github.com/openai/codex/pull/62407) Deduplicate large tool output strings in rollout traces
- [#62403](https://github.com/openai/codex/pull/62403) Reconcile unfinished Cloud replies in the TUI transcript
- [#62400](https://github.com/openai/codex/pull/62400) Test saved chat hover highlighting in the sidebar chooser
- [#62392](https://github.com/openai/codex/pull/62392) Pass eligible connector results through to ChatGPT Responses
- [#62390](https://github.com/openai/codex/pull/62390) Highlight clickable links and controls on hover in the fullscreen TUI
- [#62389](https://github.com/openai/codex/pull/62389) Pause runtime sandbox integrity checks
- [#62388](https://github.com/openai/codex/pull/62388) Support optional Apps tool results in Responses requests
- [#62387](https://github.com/openai/codex/pull/62387) Expose custom status lines in `/experimental`
- [#62386](https://github.com/openai/codex/pull/62386) Prepare managed proxy settings once per sandbox command
- [#62384](https://github.com/openai/codex/pull/62384) Centralize transcript overlay input routing
- [#62382](https://github.com/openai/codex/pull/62382) Skip the sandbox denial wait when unified exec output closes
- [#62378](https://github.com/openai/codex/pull/62378) Remove the 4,000-byte prompt limit for `thread/sample`
- [#62377](https://github.com/openai/codex/pull/62377) Preserve workspace roots across client and server platforms
- [#62376](https://github.com/openai/codex/pull/62376) Preserve sandbox writable roots across client and server platforms
- [#62375](https://github.com/openai/codex/pull/62375) Preserve app-server thread working directories across platforms
- [#62374](https://github.com/openai/codex/pull/62374) Reconsider denials in attached Guardian reviews
- [#62373](https://github.com/openai/codex/pull/62373) Add opt-in in-memory message boards for Guardian v3
- [#62372](https://github.com/openai/codex/pull/62372) Make Guardian V3 routing and retrieval guidance configurable
- [#62370](https://github.com/openai/codex/pull/62370) Share config layer entries across snapshots
- [#62366](https://github.com/openai/codex/pull/62366) Enable lazy startup for stdio MCP servers by default
- [#62362](https://github.com/openai/codex/pull/62362) Make sidebar file preview errors easier to act on
- [#62360](https://github.com/openai/codex/pull/62360) Allow per-tool approval reviewers for Codex apps
- [#62358](https://github.com/openai/codex/pull/62358) Reserve credential permission tables in Codex configuration
- [#62357](https://github.com/openai/codex/pull/62357) Report why turn critical path capture is incomplete
- [#62356](https://github.com/openai/codex/pull/62356) Surface Responses stream errors as soon as they arrive
- [#62354](https://github.com/openai/codex/pull/62354) Treat statusless bio and cyber policy errors as terminal
- [#62353](https://github.com/openai/codex/pull/62353) Add a shared sandbox launcher for Linux and macOS
- [#62350](https://github.com/openai/codex/pull/62350) Support piped I/O when starting Seatbelt sandbox commands
- [#62348](https://github.com/openai/codex/pull/62348) Preserve queued agent messages when a parent turn is interrupted
- [#62346](https://github.com/openai/codex/pull/62346) Verify dependency hashes when running Python repository tools
- [#62343](https://github.com/openai/codex/pull/62343) Add slash command argument completion to the TUI composer
- [#62338](https://github.com/openai/codex/pull/62338) Account for macOS voice build parallelism in Bazel
- [#62337](https://github.com/openai/codex/pull/62337) Box the config reload future for persistent MCP tool approvals
- [#62335](https://github.com/openai/codex/pull/62335) Let users open the command center from provider error screens
- [#62332](https://github.com/openai/codex/pull/62332) Open Codex thread links inside the TUI
- [#62331](https://github.com/openai/codex/pull/62331) Migrate the Windows MXC sandbox to the public V1 SDK
- [#62329](https://github.com/openai/codex/pull/62329) Report API spend limit errors by scope
- [#62326](https://github.com/openai/codex/pull/62326) Measure plugin recommendation latency during initial context setup
- [#62325](https://github.com/openai/codex/pull/62325) Accept inbound Noise connections in remote exec-server
- [#62320](https://github.com/openai/codex/pull/62320) Trace MCP binding capture and tool catalog refresh
- [#62317](https://github.com/openai/codex/pull/62317) Move sandbox preparation into platform backends
- [#62314](https://github.com/openai/codex/pull/62314) Keep authorization evidence local to agent forks
- [#62310](https://github.com/openai/codex/pull/62310) Use Guardian V3 board evidence for synchronous approvals
- [#62309](https://github.com/openai/codex/pull/62309) Use attached Guardian reviewers for synchronous approvals

#### 🐛 New Issues
- [#62212](https://github.com/openai/codex/issues/62212) Codex desktop: unsupported audio tool output causes later text-only turns to return HTTP 400 `bug` `tool-calls` `app` `session` 💬13
- [#62394](https://github.com/openai/codex/issues/62394) Feature Request: Adaptive Development Mode with Task-Aware Multi-Agent Orchestration and Model Routing `enhancement` `subagent` `plan` 💬2
- [#62187](https://github.com/openai/codex/issues/62187) Windows desktop: GPT-6.2 Astra/Sol absent from refreshed model catalog; updater reports up_to_date `bug` `windows-os` `app` `app-server` 💬2
- [#62416](https://github.com/openai/codex/issues/62416) app-server: streamed usage_limit_reached loses usageLimitExceeded and its reset; remote compaction drops the rate-limit update `bug` `rate-limits` `CLI` `app-server` 💬1
- [#62410](https://github.com/openai/codex/issues/62410) [Windows][Data loss] Automatic cleanup force-removes worktrees used by active chats and running workers `bug` `windows-os` `app` `session` 💬1
- [#62413](https://github.com/openai/codex/issues/62413) Windows desktop: existing chats fail to resume and new messages stall after restart `bug` `windows-os` `sandbox` `app` 💬1
- [#62412](https://github.com/openai/codex/issues/62412) macOS Codex stops exposing Computer Use when resuming an existing chat after app relaunch `bug` `app` `session` `computer-use` 💬1
- [#62411](https://github.com/openai/codex/issues/62411) Codex desktop cannot list PRs when local GitHub CLI networking is blocked and the GitHub connector cannot see the repo `bug` `sandbox` `app` `connectivity` 💬1
- [#62409](https://github.com/openai/codex/issues/62409) Computer Use freezes Windows app while traversing very large native ListView `bug` `windows-os` `app` `computer-use` 💬1
- [#62408](https://github.com/openai/codex/issues/62408) [Windows desktop] Full access selection becomes managed workspace-write in new chats; older chat remains unrestricted `bug` `windows-os` `sandbox` `app` 💬1
- [#62406](https://github.com/openai/codex/issues/62406) Desktop Work Mode rejects one-time sandbox escalation before prompting despite on-request configuration `bug` `sandbox` `app` `config` 💬1
- [#62404](https://github.com/openai/codex/issues/62404) [Windows] Deterministic single-screenshot reproduction of persistent Computer Use WGC yellow monitor border (26.1111.2228.0) `bug` `windows-os` `app` `computer-use` 💬1
- [#62262](https://github.com/openai/codex/issues/62262) [Windows][26.1111.21308] Codex Desktop becomes unresponsive after Browser Use loses its target `bug` `windows-os` `app` `browser` 💬1
- [#62399](https://github.com/openai/codex/issues/62399) Dot-delegated Windows task cannot start WSL inside the sandbox (CreateInstance/E_ACCESSDENIED) `bug` `windows-os` `sandbox` `app` 💬1
- [#62397](https://github.com/openai/codex/issues/62397) Windows: codex exec cannot run any shell command after the desktop app provisions the sandbox (setup helper exits 1, proxy_ports 3128/8081 vs none) `bug` `windows-os` `sandbox` `exec` 💬1
- [#62422](https://github.com/openai/codex/issues/62422) Can I copy and paste image files from Windows into the session when using remote development, running codex-cli on a server from Windows? `enhancement` `windows-os` `TUI` `CLI`
- [#62418](https://github.com/openai/codex/issues/62418) [Dots] Show the effective model and reasoning effort for main Dot replies `enhancement` `dots`
- [#62417](https://github.com/openai/codex/issues/62417) GPT-6.1 Sol rejects harmless prompts with Invalid Prompt error `bug` `model-behavior` `CLI`
- [#62414](https://github.com/openai/codex/issues/62414) Codex CLI TUI: keep the reading position when submitting a follow-up `enhancement` `TUI` `CLI`
- [#62405](https://github.com/openai/codex/issues/62405) [macOS] Codex desktop unexpectedly closes during a review turn `bug` `code-review` `app` `connectivity`
- [#62402](https://github.com/openai/codex/issues/62402) Windows Computer Use — indexed clicks need screenshots, UI observations can disagree, and confirmation guidance can go stale `bug` `windows-os` `app` `computer-use`
- [#62401](https://github.com/openai/codex/issues/62401) sugestion `enhancement` `model-behavior`
- [#62398](https://github.com/openai/codex/issues/62398) Plugin Eval 0.1.2 — benchmark cleanup, incorrect usage totals, and verifier portability `bug` `windows-os` `rate-limits` `CLI`
- [#62396](https://github.com/openai/codex/issues/62396) GPT-6.2 Astra ran git pull after the user repeatedly raised an audit-log concern `bug` `model-behavior` `windows-os` `app`
- [#62395](https://github.com/openai/codex/issues/62395) app-server discards provider diagnostics for typed context, quota and overload errors `bug` `CLI` `app-server`

#### 🔒 Closed Issues
- [#59605](https://github.com/openai/codex/issues/59605) Windows Desktop Full access ignored: workspace-write / granular policy blocks OS keychain registry reads (standalone Codex CLI works)

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,932 · **Open issues:** 737 · **Last push:** 1h ago

On November 19, 2026, Gemini CLI released version v0.70.0-preview.0, which included updated changelogs for previous versions and marked the transition to the v0.70.0-nightly branch. Additionally, version v0.69.0 was released, featuring a fix to preserve literal dollar signs during template placeholder replacement and the introduction of the /stats heatmap subcommand for monitoring daily token usage. In terms of merged pull requests, significant updates included adjustments to workspace dependency pins and a fix ensuring command prefix and regex rules accurately match top-level command arguments. There were no new issues reported for the day.

#### 🚀 New Releases
- [v0.70.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.70.0-preview.0) Release v0.70.0-preview.0
- [v0.69.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.69.0) Release v0.69.0

#### ✅ Merged PRs
- [#30356](https://github.com/google-gemini/gemini-cli/pull/30356) chore(deps): adjust workspace dependency pins and update simple-git
- [#30355](https://github.com/google-gemini/gemini-cli/pull/30355) fix(core): match commandPrefix and commandRegex rules against the top-level command argument
- [#30338](https://github.com/google-gemini/gemini-cli/pull/30338) fix(core): keep ASK_USER for shell commands with unresolved expansion

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,435 · **Open issues:** 2,182 · **Last push:** 21h ago

On November 18, 2026, GitHub Copilot CLI released version 1.0.114, which included various fixes and changes aimed at improving overall functionality. There were no merged pull requests reported in the last 24 hours. However, several new issues were raised, with #5517 standing out as users noted that pasted PDFs are counted at their encoded size in the context estimate, leading to unnecessary compactions. Other notable issues include #5516, which addresses user-scoped memory store failures, and #5510, which highlights sign-in stalls during Entra MCP browser sign-in in Linux/WSL environments. Overall, this day appears to be focused on addressing user-reported issues rather than significant feature advancements.

#### 🚀 New Releases
- [v1.0.114](https://github.com/github/copilot-cli/releases/tag/v1.0.114) 1.0.114

#### 🐛 New Issues
- [#5517](https://github.com/github/copilot-cli/issues/5517) Pasted PDF is counted at its encoded size in the context estimate and triggers an unnecessary compaction (620k estimated vs 31k real) `triage`
- [#5516](https://github.com/github/copilot-cli/issues/5516) store_memory offers user scope when user-level memory is unavailable; every user-scoped store fails with 404 `triage`
- [#5515](https://github.com/github/copilot-cli/issues/5515) /code opens a Linux path as a Windows path in WSL `triage`
- [#5514](https://github.com/github/copilot-cli/issues/5514) ACP: a failed session/request_permission is recorded as a user denial and silently ends the (sub)agent's turn `triage`
- [#5512](https://github.com/github/copilot-cli/issues/5512) A session started in an unselected iTerm2 tab keeps the plain look because a late color reply is dropped `triage`
- [#5511](https://github.com/github/copilot-cli/issues/5511) Organization-managed models show no reasoning-effort controls or context capacity in /model `triage`
- [#5510](https://github.com/github/copilot-cli/issues/5510) Linux/WSL: Entra MCP browser sign-in stalls silently when `xdg-open` is missing, and `/mcp` Authenticate shows a URL that fails with "State mismatch" `triage`

#### 🔒 Closed Issues
- [#4697](https://github.com/github/copilot-cli/issues/4697) /clear does not terminate previous stdio MCP server child processes (unlike /mcp reload )
- [#2949](https://github.com/github/copilot-cli/issues/2949) Background Agent MCP Connections Destroyed After Text-Only Turn
- [#3889](https://github.com/github/copilot-cli/issues/3889) Support stdio transport server on the session/new request in the acp mode.
- [#2960](https://github.com/github/copilot-cli/issues/2960) Authorization header length limit is too low to accomodate some Entra ID tokens
- [#5341](https://github.com/github/copilot-cli/issues/5341) CLI hangs at startup/resume after "Managed MCP policy application exceeded its settings settlement deadline"
- [#5464](https://github.com/github/copilot-cli/issues/5464) Stdio MCP server fails to connect when `server/discover` times out: legacy `initialize` fallback on the same connection is rejected with -32022
- [#5386](https://github.com/github/copilot-cli/issues/5386) A session created with `create_session` can't be resumed after `close_session` if the user had switched to it
- [#5209](https://github.com/github/copilot-cli/issues/5209) Unnecessarily short timeout for MCP server/discover endpoint

### OpenCode (`anomalyco/opencode`)

**Stars:** 227,857 · **Open issues:** 4,077 · **Last push:** <1h ago

On November 19, 2026, there were no new releases in OpenCode. Noteworthy merged pull requests include the addition of an experimental video generation tool (#63666) and a fix to ensure that the todo list remains opt-in only (#64775). Additionally, improvements to session management were made, such as waking a held watching session after a 30-minute quiet period (#64760) and allowing users to choose tools and Code Mode placements from the session's model (#64515). Among the newly reported issues, a significant concern arises with the tool I/O and logs potentially exposing credentials (#64745), which has attracted attention from the community.

#### ✅ Merged PRs
- [#64775](https://github.com/anomalyco/opencode/pull/64775) fix(core): keep todo opt-in only
- [#64515](https://github.com/anomalyco/opencode/pull/64515) feat(core): choose tools and Code Mode placement from the session's model
- [#64559](https://github.com/anomalyco/opencode/pull/64559) refactor(codemode): thread PsychoScript runs by program complexity
- [#64760](https://github.com/anomalyco/opencode/pull/64760) fix(core): wake a held watching session again after 30 quiet minutes
- [#64767](https://github.com/anomalyco/opencode/pull/64767) docs(console): add Tidepool Alpha Free
- [#63666](https://github.com/anomalyco/opencode/pull/63666) feat(core): add an experimental video generation tool
- [#64763](https://github.com/anomalyco/opencode/pull/64763) docs(console): add Gemini 4 Neon to Zen models

#### 🐛 New Issues
- [#64655](https://github.com/anomalyco/opencode/issues/64655) serve --service keeps restarting on long sessions (PRoot + inotify on Android/Termux) `triaging` `type/bug` `area/service` `version/v2` 💬11
- [#64724](https://github.com/anomalyco/opencode/issues/64724) opencode stops when the model thinks <|im_end|> `type/bug` `area/providers` `version/v2` `platform/linux` 💬9
- [#64695](https://github.com/anomalyco/opencode/issues/64695) Big Pickle rogue `triaging` `type/bug` `area/model-behavior` `inference/free-tier` 💬8
- [#64777](https://github.com/anomalyco/opencode/issues/64777) tui: local file content cached and not refreshed promptly `type/bug` `area/tui` `version/v2` `platform/windows` 💬4
- [#64745](https://github.com/anomalyco/opencode/issues/64745) Credential exposure in tool I/O and logs (CWE-532/CWE-200) + destructive `gh api` mutations auto-approved without confirmation `pending close` `triaging` `type/feature` `area/core` 💬4
- [#64631](https://github.com/anomalyco/opencode/issues/64631) cli: opencode stats reports no tool calls when all calls are still running `type/bug` `area/cli` `version/v2` `platform/windows` 💬4
- [#64773](https://github.com/anomalyco/opencode/issues/64773) Optional credential source for non-interactive admin tasks `type/feature` `area/core` `platform/windows` 💬4
- [#64676](https://github.com/anomalyco/opencode/issues/64676) Desktop 2.3.2: tool calls never execute, renderer hits RangeError: Maximum call stack size exceeded `type/bug` `area/core` `version/v2` `platform/windows` 💬4
- [#64702](https://github.com/anomalyco/opencode/issues/64702) models: enabling a model doesn't indicate required provider auth/credentials or cost `triaging` `type/bug` `area/providers` `version/v2` 💬4
- [#64765](https://github.com/anomalyco/opencode/issues/64765) [BUG] continually unreliable harness c.f. opencode.json and whitespace `triaging` `type/bug` `area/core` `inference/zen` 💬3
- [#64686](https://github.com/anomalyco/opencode/issues/64686) acp: every session method hangs forever on Windows (Bun fetch starved by the /global/event SSE stream) `severity:high` `type/bug` `area/ide-acp` `version/v2` 💬3
- [#64754](https://github.com/anomalyco/opencode/issues/64754) Free models repeatedly rate-limited with escalating cooldowns `triaging` `type/bug` `area/providers` `inference/free-tier` 💬3
- [#64783](https://github.com/anomalyco/opencode/issues/64783) GPT-6.2: system prompt in instructions not cached, need a opencode.jsonc flag to apply the new policy for custom router. `type/support` `area/providers` `version/v2` `platform/windows` 💬2
- [#64748](https://github.com/anomalyco/opencode/issues/64748) يوجد خطأ ازرار الاوامر العلوية تظهر متراكبة ولا يمكن استخدامها `triaging` `type/bug` `area/desktop` `platform/windows` 💬2
- [#64755](https://github.com/anomalyco/opencode/issues/64755) Serious Issue - Devs need to address immediately. `triaging` `platform/linux` 💬2
- [#64752](https://github.com/anomalyco/opencode/issues/64752) shell: output capture fails - missing ~/.local/share/opencode/shell directory `type/bug` `status/repro-simulated` `area/core` `version/v2` 💬2
- [#64762](https://github.com/anomalyco/opencode/issues/64762) Mistral Large 4 not visible in mobile app `type/bug` `area/mobile` 💬2
- [#64689](https://github.com/anomalyco/opencode/issues/64689) session import: model provider rewritten from opencode-go to opencode `type/bug` `area/sessions-storage` `inference/go` `version/v2` 💬2
- [#64683](https://github.com/anomalyco/opencode/issues/64683) FORCE_HYPERLINK=1 has no effect: OSC 8 links stay off unless XTVERSION names a known terminal (opencode 2.3.0) `type/bug` `area/tui` `version/v2` `platform/macos` 💬2
- [#64598](https://github.com/anomalyco/opencode/issues/64598) [Bug] GPT-6.2 compaction fails with "Compaction summary did not match the required template" `type/bug` `area/core` `version/v2` `platform/windows` 💬2
- [#64712](https://github.com/anomalyco/opencode/issues/64712) Web Mobile UI (v2.3.2): new bottom bar consumes ~8.5% of the viewport but adds no new capability `type/feature` `area/web` `version/v2` `platform/linux` 💬2
- [#64788](https://github.com/anomalyco/opencode/issues/64788) desktop: GUI plugin parts load only from the app's own sidecar, so remote-server plugins never get a GUI `type/feature` `area/plugins` `version/v2` `platform/macos` 💬1
- [#64787](https://github.com/anomalyco/opencode/issues/64787) [FEATURE]: Let plugins check permissions without prompting `type/feature` `area/plugins` `version/v2` 💬1
- [#64785](https://github.com/anomalyco/opencode/issues/64785) acp: model config option labels leak raw provider IDs instead of provider display names `type/feature` `area/ide-acp` `version/v2` `platform/macos` 💬1
- [#64782](https://github.com/anomalyco/opencode/issues/64782) opencode的管理者是猪吗？ `type/support` `area/providers` `inference/zen` `inference/go` 💬1
- [#64776](https://github.com/anomalyco/opencode/issues/64776) limit `triaging` `type/support` 💬1
- [#64772](https://github.com/anomalyco/opencode/issues/64772) Detects ai models that dont exist and cancels my session `triaging` `type/bug` `area/providers` 💬1
- [#64771](https://github.com/anomalyco/opencode/issues/64771) Empty assistant turns still reach providers: Bedrock "text content blocks must be non-empty", DeepSeek "all messages must have non-empty content" `type/bug` `status/repro-simulated` `area/providers` `version/v2` 💬1
- [#64768](https://github.com/anomalyco/opencode/issues/64768) [FEATURE]: `triaging` `type/feature` 💬1
- [#64769](https://github.com/anomalyco/opencode/issues/64769) desktop: add option to sort sidebar sessions by creation time instead of last activity `type/feature` `area/desktop` `version/v2` `platform/macos` 💬1
- [#64759](https://github.com/anomalyco/opencode/issues/64759) tui: todo sidebar is empty after reopening a session when the latest todowrite is outside the first loaded page of messages `type/bug` `status/repro-simulated` `area/tui` `version/v2` 💬1
- [#64758](https://github.com/anomalyco/opencode/issues/64758) snapshot: git init inside an open session is not detected, /undo cannot restore files until the location restarts `type/bug` `area/sessions-storage` `version/v2` `platform/macos` 💬1
- [#64757](https://github.com/anomalyco/opencode/issues/64757) Problem creating a project `type/bug` `area/desktop` `version/v2` `platform/windows` 💬1
- [#64756](https://github.com/anomalyco/opencode/issues/64756) Problem with free tiers `type/bug` `inference/free-tier` 💬1
- [#64753](https://github.com/anomalyco/opencode/issues/64753) [FEATURE]:Audit accumulated saved permissions without involving a model `type/feature` `area/core` `version/v2` 💬1

#### 🔒 Closed Issues
- [#64655](https://github.com/anomalyco/opencode/issues/64655) serve --service keeps restarting on long sessions (PRoot + inotify on Android/Termux)
- [#64724](https://github.com/anomalyco/opencode/issues/64724) opencode stops when the model thinks <|im_end|>
- [#64745](https://github.com/anomalyco/opencode/issues/64745) Credential exposure in tool I/O and logs (CWE-532/CWE-200) + destructive `gh api` mutations auto-approved without confirmation
- [#64631](https://github.com/anomalyco/opencode/issues/64631) cli: opencode stats reports no tool calls when all calls are still running
- [#64702](https://github.com/anomalyco/opencode/issues/64702) models: enabling a model doesn't indicate required provider auth/credentials or cost
- [#64754](https://github.com/anomalyco/opencode/issues/64754) Free models repeatedly rate-limited with escalating cooldowns
- [#64783](https://github.com/anomalyco/opencode/issues/64783) GPT-6.2: system prompt in instructions not cached, need a opencode.jsonc flag to apply the new policy for custom router.
- [#64748](https://github.com/anomalyco/opencode/issues/64748) يوجد خطأ ازرار الاوامر العلوية تظهر متراكبة ولا يمكن استخدامها
- [#64755](https://github.com/anomalyco/opencode/issues/64755) Serious Issue - Devs need to address immediately.
- [#64689](https://github.com/anomalyco/opencode/issues/64689) session import: model provider rewritten from opencode-go to opencode
- [#64683](https://github.com/anomalyco/opencode/issues/64683) FORCE_HYPERLINK=1 has no effect: OSC 8 links stay off unless XTVERSION names a known terminal (opencode 2.3.0)
- [#64598](https://github.com/anomalyco/opencode/issues/64598) [Bug] GPT-6.2 compaction fails with "Compaction summary did not match the required template"
- [#64788](https://github.com/anomalyco/opencode/issues/64788) desktop: GUI plugin parts load only from the app's own sidecar, so remote-server plugins never get a GUI
- [#64782](https://github.com/anomalyco/opencode/issues/64782) opencode的管理者是猪吗？
- [#64768](https://github.com/anomalyco/opencode/issues/64768) [FEATURE]:
- [#64758](https://github.com/anomalyco/opencode/issues/64758) snapshot: git init inside an open session is not detected, /undo cannot restore files until the location restarts
- [#64757](https://github.com/anomalyco/opencode/issues/64757) Problem creating a project
- [#64756](https://github.com/anomalyco/opencode/issues/64756) Problem with free tiers

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 30,770 · **Open issues:** 2,452 · **Last push:** <1h ago

On November 19, 2026, Qwen Code released v0.28.0-nightly.20261118.d9ac287c9f, featuring significant changes such as a new full-stack end-to-end test for the managed-agent and improvements to the shape guard for watch-state and container nonce verification. Notable merged pull requests included enhancements to the managed-agent for maintaining idle MCP connections and PR-watch bound-session private injection, as well as performance optimizations for serving bundled startup chunks. The most significant new issue reported was #17747, concerning Transcript JSONL write corruption, where a partial record being glued with the next record disrupts the parent chain, highlighting a critical concern for data integrity.

#### 🚀 New Releases
- [v0.28.0-nightly.20261118.d9ac287c9f](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.0-nightly.20261118.d9ac287c9f) Release v0.28.0-nightly.20261118.d9ac287c9f

#### ✅ Merged PRs
- [#17749](https://github.com/QwenLM/qwen-code/pull/17749) feat(managed-agent): keep idle MCP connections across suspension
- [#15339](https://github.com/QwenLM/qwen-code/pull/15339) fix(qqbot): accept QQ voice attachments from the voice CDN
- [#17720](https://github.com/QwenLM/qwen-code/pull/17720) perf(serve): Index bundled startup chunks
- [#17665](https://github.com/QwenLM/qwen-code/pull/17665) feat(managed-agent): add PR-watch bound-session private injection
- [#17709](https://github.com/QwenLM/qwen-code/pull/17709) feat(web-shell): add the daemon chat intent lifecycle core
- [#17689](https://github.com/QwenLM/qwen-code/pull/17689) feat(web-shell): open the session artifacts list in the right panel from the header entry

#### 🐛 New Issues
- [#17747](https://github.com/QwenLM/qwen-code/issues/17747) Transcript JSONL write corruption: a partial record glued with the next record breaks the parent chain (degraded_history) `priority/P1` `type/bug` `category/core` `scope/session-management` 💬6
- [#17734](https://github.com/QwenLM/qwen-code/issues/17734) Main CI failed: Managed Agent loop verification — no test identified (latest: 2026-11-18) `status/needs-triage` `scope/ci-cd` 💬5
- [#17769](https://github.com/QwenLM/qwen-code/issues/17769) Managed DingTalk registration-identity: deeper diagnostics/dedupe-scope follow-ups (deferred from #17742 review) `priority/P3` `category/integration` `type/enhancement` `area: managed` 💬4
- [#17699](https://github.com/QwenLM/qwen-code/issues/17699) deflake: packages/channels/dingtalk/src/managed-dingtalk-adapter.test.ts › managed DingTalk adapter outbox › keeps the recent window loadable at the shared cap (R2-1) `priority/P2` `type/bug` `category/development` `scope/testing` 💬4
- [#17750](https://github.com/QwenLM/qwen-code/issues/17750) managed-agent-server: ToolPublicationContract incompatible with networknt json-schema-validator 2.x (NoClassDefFoundError: SpecVersion$VersionFlag) `priority/P2` `type/bug` `category/core` `area: managed` 💬4
- [#17741](https://github.com/QwenLM/qwen-code/issues/17741) main is red on the export byte budget since 980bb332a9 (2146529 > 2146100), inheriting three red lanes into every PR `priority/P1` `type/bug` `category/development` `scope/build-system` 💬4
- [#17778](https://github.com/QwenLM/qwen-code/issues/17778) Managed workspace artifact library: test-hardening follow-ups from #17728 `priority/P3` `scope/testing` `type/enhancement` `area: managed` 💬3
- [#17781](https://github.com/QwenLM/qwen-code/issues/17781) test(serve): cover the deferred shutdown-tracker and clamp-fixture gaps from #17737 review `priority/P3` `category/cli` `scope/testing` `type/enhancement` 💬3
- [#17774](https://github.com/QwenLM/qwen-code/issues/17774) Model often tries to make tool calls with XML rather than JSON `priority/P3` `type/bug` `category/core` `scope/content-generation` 💬3
- [#17761](https://github.com/QwenLM/qwen-code/issues/17761) deflake: packages/cli/src/serve/server.test.ts › Unified SSE admission/occupancy (issue #17554) > clamps the pairing listener independently of the primary listener `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#17757](https://github.com/QwenLM/qwen-code/issues/17757) Do not follow rules `status/need-information` `priority/P2` `type/bug` `category/configuration` 💬3
- [#17727](https://github.com/QwenLM/qwen-code/issues/17727) bug(managed-agent): after a 409 on first message submit, "retry the same request" is always rejected by anti-replay — no user recovery path `status/need-information` `priority/P2` `type/bug` `category/core` 💬3
- [#17724](https://github.com/QwenLM/qwen-code/issues/17724) Custom themes: diff blocks unreadable, empty colours dropped silently, selection and cursor not themable `priority/P2` `type/bug` `category/ui` `scope/themes` 💬3
- [#17787](https://github.com/QwenLM/qwen-code/issues/17787) deflake: packages/cli/src/serve/managed-runtime-session-worker.process.test.ts › Managed Runtime tools › blocks the session when a call outcome cannot be learned `status/ready-for-agent` `autofix/in-progress` 💬2
- [#17772](https://github.com/QwenLM/qwen-code/issues/17772) Web Shell: Archived conversations panel has no search, no workspace filter, no sorting, and no archive time `priority/P2` `type/feature-request` `category/ui` `scope/session-management` 💬2
- [#17754](https://github.com/QwenLM/qwen-code/issues/17754) bug(managed-agent): executable extension modes leave ordinary Linux hosts with no option — linux-cgroup needs cgroup v2, developer-process-group is macOS-only `priority/P2` `type/bug` `category/platform` `scope/extensions` 💬2
- [#17731](https://github.com/QwenLM/qwen-code/issues/17731) Goal objective is unbounded on /goal set and /goal edit while the session-list projection copies it verbatim `priority/P3` `category/cli` `scope/commands` `scope/session-management` 💬2
- [#17739](https://github.com/QwenLM/qwen-code/issues/17739) Mods: bind consequential approvals to what the human actually saw `priority/P2` `type/feature-request` `category/security` `scope/interactive` 💬2
- [#17740](https://github.com/QwenLM/qwen-code/issues/17740) Post-merge concurrency groups key on ref, so a queued push run is cancelled and its regression witness lost `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬2
- [#17725](https://github.com/QwenLM/qwen-code/issues/17725) notebook_edit: cell-N fallback description omits restriction to cells without IDs `priority/P3` `type/bug` `category/tools` `status/ready-for-agent` 💬2
- [#17730](https://github.com/QwenLM/qwen-code/issues/17730) Russian CLI count forms and remaining ru copy after #17719 `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#17723](https://github.com/QwenLM/qwen-code/issues/17723) deflake: packages/cli/src/serve/server.test.ts › clamps the pairing listener independently of the primary listener `priority/P2` `type/bug` `category/development` `scope/testing` 💬2
- [#17717](https://github.com/QwenLM/qwen-code/issues/17717) Managed Web UI parity with the daemon: missing surfaces, stale parity rows, and un-wired local terminal `priority/P2` `type/feature-request` `category/ui` `scope/web-shell` 💬2
- [#17770](https://github.com/QwenLM/qwen-code/issues/17770) feat(ui): read-aloud (TTS) of assistant responses, with local/offline engine option `status/needs-triage` `type/feature-request` 💬1
- [#17755](https://github.com/QwenLM/qwen-code/issues/17755) Main CI failed: Qwen Code CI — src/serve/server.test.ts > … > clamps the pairing listener independently of the primary listener `status/needs-triage` `type/bug` 💬1

#### 🔒 Closed Issues
- [#16346](https://github.com/QwenLM/qwen-code/issues/16346) Main CI failed: Managed Agent gate — ClassSizeRatchetTest.productionClassesStayWithinTheirSizeRatchet
- [#15630](https://github.com/QwenLM/qwen-code/issues/15630) feat(channels): deliver an injected user message into the running turn via a per-session mid-turn queue
- [#15334](https://github.com/QwenLM/qwen-code/issues/15334) QQ voice attachments are dropped: the voice CDN host is missing from the attachment allowlist
- [#17741](https://github.com/QwenLM/qwen-code/issues/17741) main is red on the export byte budget since 980bb332a9 (2146529 > 2146100), inheriting three red lanes into every PR
- [#17761](https://github.com/QwenLM/qwen-code/issues/17761) deflake: packages/cli/src/serve/server.test.ts › Unified SSE admission/occupancy (issue #17554) > clamps the pairing listener independently of the primary listener
- [#17642](https://github.com/QwenLM/qwen-code/issues/17642) bug(sdk-java): file read responses join text lines with path separators
- [#17016](https://github.com/QwenLM/qwen-code/issues/17016) Main CI failed: Managed Agent gate — SessionRecoveryInitialStateTest.aPersistedEmptySessionRenameRemainsSendableAfterHarnessCacheLoss
- [#17564](https://github.com/QwenLM/qwen-code/issues/17564) SDK waitForExit confuses signal delivery with completed child shutdown
- [#17657](https://github.com/QwenLM/qwen-code/issues/17657) fix(web-shell): cancelled image batches keep starting queued file reads
- [#17562](https://github.com/QwenLM/qwen-code/issues/17562) SDK peer inbox accepts a completed line larger than its frame limit
- [#17567](https://github.com/QwenLM/qwen-code/issues/17567) Failed SDK permission callbacks retain their deadline and can trigger an unhandled rejection
- [#17568](https://github.com/QwenLM/qwen-code/issues/17568) Copy code and LaTeX commands treat fence-like content as a closing Markdown fence

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

**Stars:** 394,774 · **Open issues:** 8,383 · **Last push:** <1h ago

On November 19, 2026, OpenClaw released the gateway-only `extended-stable` version 2026.10.33, which includes critical security updates, reliability improvements, and new model support, while the latest version at this time remains 2026.11.5. Significant merged pull requests include fixes for retaining the selected model during service tier outages and enhancing performance by deferring transcript search snippets. The platform also addressed various bugs, notably the fix to prevent page text reads from returning incorrect content after navigation and enabling smoother session refreshes. However, the newly reported issue #201423 highlights a critical failure in spawning Codex harness child sessions, indicating that retrying with altered policy settings is necessary.

#### 🚀 New Releases
- [v2026.10.33](https://github.com/openclaw/openclaw/releases/tag/v2026.10.33) openclaw 2026.10.33

#### ✅ Merged PRs
- [#196659](https://github.com/openclaw/openclaw/pull/196659) fix(browser): stop page text reads from returning another page's text after a navigation
- [#201493](https://github.com/openclaw/openclaw/pull/201493) fix: keep ChatGPT model discovery independent of npm
- [#201566](https://github.com/openclaw/openclaw/pull/201566) perf: defer transcript search snippets and retain reader scope
- [#201596](https://github.com/openclaw/openclaw/pull/201596) Keep the selected model when faster service tiers are unavailable
- [#201548](https://github.com/openclaw/openclaw/pull/201548) fix(ci): register published plugin driver entry
- [#201591](https://github.com/openclaw/openclaw/pull/201591) improve: reduce CPU work when refreshing session lists
- [#201590](https://github.com/openclaw/openclaw/pull/201590) chore: keep the Gateway restart handoff test in step with restart markers
- [#198918](https://github.com/openclaw/openclaw/pull/198918) test: reduce overlapping agent policy and execution suites
- [#201563](https://github.com/openclaw/openclaw/pull/201563) fix: keep one child completion failure from dropping sibling results
- [#201578](https://github.com/openclaw/openclaw/pull/201578) fix: make release validation failures diagnosable
- [#201569](https://github.com/openclaw/openclaw/pull/201569) fix: make early chat metadata reads retryable during startup
- [#201568](https://github.com/openclaw/openclaw/pull/201568) test: account for unknown hook turn taint
- [#201567](https://github.com/openclaw/openclaw/pull/201567) fix: align Goal authority proof with admitted-run policy
- [#201463](https://github.com/openclaw/openclaw/pull/201463) fix: Git checkout updates no longer fail before the new release starts on a schema change or a busy database
- [#201557](https://github.com/openclaw/openclaw/pull/201557) fix(sqlite): let nested page reclamation finish
- [#186942](https://github.com/openclaw/openclaw/pull/186942) fix(ai): round-trip LiteLLM thought signatures on openai-completions routes
- [#196367](https://github.com/openclaw/openclaw/pull/196367) fix: reject message tables without a caption instead of silently dropping them
- [#201555](https://github.com/openclaw/openclaw/pull/201555) fix: open OpenClaw ID sign-in in your default browser from the macOS app
- [#201544](https://github.com/openclaw/openclaw/pull/201544) fix: preserve subagent outcomes across Gateway interruptions
- [#201550](https://github.com/openclaw/openclaw/pull/201550) fix: explain why Doctor cannot restore a scheduled job’s account
- [#197394](https://github.com/openclaw/openclaw/pull/197394) feat(cron): add up to eight runs past the default when memory is free
- [#200978](https://github.com/openclaw/openclaw/pull/200978) fix: remove updater-only restrictions from agent maintenance guidance
- [#201546](https://github.com/openclaw/openclaw/pull/201546) fix: avoid full sandbox checkouts when lockfiles change
- [#201491](https://github.com/openclaw/openclaw/pull/201491) fix: let remote Codex app-servers use library skills instead of an unreadable Gateway path
- [#201534](https://github.com/openclaw/openclaw/pull/201534) fix: clear stale cold-session markers after a Gateway restart
- [#201361](https://github.com/openclaw/openclaw/pull/201361) fix: keep a doubtful killed-update recovery on the repair path
- [#195275](https://github.com/openclaw/openclaw/pull/195275) fix(subagents): yielded parents lose subagent results when their run turns over
- [#197595](https://github.com/openclaw/openclaw/pull/197595) fix(discord): honor provider interruption policy
- [#197588](https://github.com/openclaw/openclaw/pull/197588) fix(openai): send session affinity on Sign in with ChatGPT requests
- [#197436](https://github.com/openclaw/openclaw/pull/197436) fix(test): UI test browser preflight fails without saying Chromium is missing system libraries
- [#196587](https://github.com/openclaw/openclaw/pull/196587) fix(ai): name the output cap when max_tokens cuts an Anthropic tool call
- [#200653](https://github.com/openclaw/openclaw/pull/200653) fix: keep carried-over scheduled jobs running after updates
- [#201523](https://github.com/openclaw/openclaw/pull/201523) fix: warn callers before retrying a tool action that lost its reply
- [#201533](https://github.com/openclaw/openclaw/pull/201533) fix: release PR lookup state when sessions retire
- [#201475](https://github.com/openclaw/openclaw/pull/201475) test(agents): check pending steering before admission deadline
- [#201527](https://github.com/openclaw/openclaw/pull/201527) fix(talk): let admitted consultations finish after revocation
- [#201531](https://github.com/openclaw/openclaw/pull/201531) fix: let compaction live tests reach replay checks
- [#201355](https://github.com/openclaw/openclaw/pull/201355) fix: wait the full hour and keep Hold for automatic owed-plugin retries on a schedule
- [#201474](https://github.com/openclaw/openclaw/pull/201474) fix(codex): keep resumed conversations on the same native writer
- [#201499](https://github.com/openclaw/openclaw/pull/201499) feat(codex): verify the admitted app server before sending credentials
- [#201520](https://github.com/openclaw/openclaw/pull/201520) fix: let Codex subagents start when an agent folder name uses capital letters
- [#199530](https://github.com/openclaw/openclaw/pull/199530) fix(agents): compact on predicted overflow instead of trimming tool results the provider already cached
- [#201354](https://github.com/openclaw/openclaw/pull/201354) fix: show the plugin-update restart countdown next to the update that needs it
- [#201515](https://github.com/openclaw/openclaw/pull/201515) refactor: retire tar and Arrow dependency patches
- [#201331](https://github.com/openclaw/openclaw/pull/201331) fix: let updates finish when plugins change no config and openclaw.json is read-only
- [#201504](https://github.com/openclaw/openclaw/pull/201504) fix(ui): keep consent assets off the Skills route
- [#201327](https://github.com/openclaw/openclaw/pull/201327) fix: let updates proceed while a busy agent database keeps writing
- [#201497](https://github.com/openclaw/openclaw/pull/201497) fix(ci): retire unused compaction export surfaces
- [#201081](https://github.com/openclaw/openclaw/pull/201081) feat: keep allowed MCP tools on the worker when other tools need approval
- [#201477](https://github.com/openclaw/openclaw/pull/201477) fix: resume persisted requests when transcript metadata advances
- [#201490](https://github.com/openclaw/openclaw/pull/201490) improve: reduce repeated work when searching session history
- [#201506](https://github.com/openclaw/openclaw/pull/201506) fix: run packed SDK consumer checks behind a proxy
- [#201500](https://github.com/openclaw/openclaw/pull/201500) fix: release completed callers held by plugin recovery
- [#201494](https://github.com/openclaw/openclaw/pull/201494) fix: stop a refused library skill create from leaving files on disk
- [#201256](https://github.com/openclaw/openclaw/pull/201256) fix: let Mac source builds package with the bundled Codex 0.169
- [#201420](https://github.com/openclaw/openclaw/pull/201420) improve: reduce streaming session broadcast work for multiple viewers
- [#201486](https://github.com/openclaw/openclaw/pull/201486) improve(state): reduce CPU spent admitting shared-state reads
- [#201487](https://github.com/openclaw/openclaw/pull/201487) fix: preserve complete Tool Search network pages
- [#197785](https://github.com/openclaw/openclaw/pull/197785) feat(doctor): check OpenClaw ID member roles and honor an optional roles default
- [#201482](https://github.com/openclaw/openclaw/pull/201482) fix: preserve startup admission and diagnostics during release checks
- [#197425](https://github.com/openclaw/openclaw/pull/197425) fix(state): PostgreSQL state created before Template bootstrap deferral is refused as schema drift
- [#201473](https://github.com/openclaw/openclaw/pull/201473) fix: restore projection tests for admitted operator requests
- [#198760](https://github.com/openclaw/openclaw/pull/198760) fix: managed nodes fail to start when a sandbox restricts IPC
- [#201304](https://github.com/openclaw/openclaw/pull/201304) fix: compact long-lived sessions without holding their whole history in Gateway memory
- [#201364](https://github.com/openclaw/openclaw/pull/201364) fix(worktrees): identify templates in preparation logs
- [#201460](https://github.com/openclaw/openclaw/pull/201460) fix: let resumed parents collect children stopped by restart
- [#201471](https://github.com/openclaw/openclaw/pull/201471) fix(ui): keep goal warnings on the status indicator
- [#201442](https://github.com/openclaw/openclaw/pull/201442) test(gateway): diagnose Talk parity await timeouts
- [#201465](https://github.com/openclaw/openclaw/pull/201465) fix(discord): reduce copying during voice capture
- [#201365](https://github.com/openclaw/openclaw/pull/201365) improve: load the mentions Inbox faster after reconnecting
- [#200317](https://github.com/openclaw/openclaw/pull/200317) fix(worktrees): restore PostgreSQL cleanup jobs
- [#200988](https://github.com/openclaw/openclaw/pull/200988) fix(models): relist provider model lists older than 15 minutes on picker reads
- [#198967](https://github.com/openclaw/openclaw/pull/198967) test: consolidate redundant coverage (198799, group E)
- [#189977](https://github.com/openclaw/openclaw/pull/189977) fix(clickclack): discussion rooms fail with PostgreSQL agents
- [#190124](https://github.com/openclaw/openclaw/pull/190124) fix(database): Team Reports fails to port to PostgreSQL after a successful dry run
- [#201445](https://github.com/openclaw/openclaw/pull/201445) fix: let queued chat writes run before background page cleanup
- [#201410](https://github.com/openclaw/openclaw/pull/201410) fix: shorten sandbox freezes when importing pull requests
- [#193596](https://github.com/openclaw/openclaw/pull/193596) fix(config): prevent PostgreSQL startup failure during backup recovery
- [#191463](https://github.com/openclaw/openclaw/pull/191463) improve: reduce PostgreSQL agent removal latency
- [#190129](https://github.com/openclaw/openclaw/pull/190129) fix(postgres): chat history slows under concurrent reads
- [#201374](https://github.com/openclaw/openclaw/pull/201374) fix: finish `database port --to postgres` in minutes instead of hours over a network link
- [#201352](https://github.com/openclaw/openclaw/pull/201352) fix(talk): load conversation history when starting a fresh call
- [#201373](https://github.com/openclaw/openclaw/pull/201373) fix(agents): stop sessions_send from blocking turns past its timeout
- [#189999](https://github.com/openclaw/openclaw/pull/189999) fix(voice): Discord controls and phone consults fail with PostgreSQL agent stores
- [#201330](https://github.com/openclaw/openclaw/pull/201330) fix: finish updates when another tool reads OpenClaw's databases during the update
- [#198469](https://github.com/openclaw/openclaw/pull/198469) fix(update): supervised PostgreSQL updates ignore server recovery captures and orphan them on finish
- [#201427](https://github.com/openclaw/openclaw/pull/201427) fix(test): identify restart completion notices reliably
- [#201416](https://github.com/openclaw/openclaw/pull/201416) test(codex): identify resident catalog CPU budget failures
- [#201434](https://github.com/openclaw/openclaw/pull/201434) fix: keep automations running when someone renames a session group or edits sharing
- [#189036](https://github.com/openclaw/openclaw/pull/189036) fix(talk): steering an active voice agent consult fails with PostgreSQL agent stores
- [#201299](https://github.com/openclaw/openclaw/pull/201299) fix: let upgraded state stores port to PostgreSQL
- [#197795](https://github.com/openclaw/openclaw/pull/197795) fix: PostgreSQL backup restore fails through a symlinked target
- [#201378](https://github.com/openclaw/openclaw/pull/201378) improve: make the new-worktree branch list readable and recent-first
- [#201441](https://github.com/openclaw/openclaw/pull/201441) chore(ui): refresh control ui locales
- [#201415](https://github.com/openclaw/openclaw/pull/201415) fix(discord): reconnect every account after a network outage
- [#201402](https://github.com/openclaw/openclaw/pull/201402) fix(test): preserve nested gateway execution observers
- [#193875](https://github.com/openclaw/openclaw/pull/193875) fix(postgres): preserve the first Gateway operation after host suspension
- [#201396](https://github.com/openclaw/openclaw/pull/201396) improve: drop the stray "Loading plugins…" line from the Plugins page
- [#201377](https://github.com/openclaw/openclaw/pull/201377) refactor(cron): keep occurrence authority fixed after admission
- [#201319](https://github.com/openclaw/openclaw/pull/201319) fix: show the Cmd+K empty state instead of a misleading archived-sessions notice
- [#201382](https://github.com/openclaw/openclaw/pull/201382) feat(ui): show live Swarm progress inside chat turns
- [#201043](https://github.com/openclaw/openclaw/pull/201043) fix: setup says which tool profile the agent has and what it allows
- [#201403](https://github.com/openclaw/openclaw/pull/201403) fix: keep New session Recent to five places without helper checkouts
- [#200940](https://github.com/openclaw/openclaw/pull/200940) fix: show the whole token conflict hint in openclaw status
- [#200936](https://github.com/openclaw/openclaw/pull/200936) fix: tell agents which setting hides a tool and how to add it back
- [#201386](https://github.com/openclaw/openclaw/pull/201386) test(ui): diagnose required human action timeouts
- [#198706](https://github.com/openclaw/openclaw/pull/198706) refactor(workboard): drop the unused claim and observation records
- [#201252](https://github.com/openclaw/openclaw/pull/201252) improve: ship less JavaScript for sidebar previews in Chat and New Session
- [#201363](https://github.com/openclaw/openclaw/pull/201363) fix(discord): show busy notices on session initialization conflicts
- [#200976](https://github.com/openclaw/openclaw/pull/200976) chore(memory): cover CLI searches for newly added Harness notes
- [#200878](https://github.com/openclaw/openclaw/pull/200878) fix: recognize image input for GPT-6.2 models routed through ClawRouter
- [#200329](https://github.com/openclaw/openclaw/pull/200329) fix(ui): guide Chat to setup when no model is connected
- [#201308](https://github.com/openclaw/openclaw/pull/201308) improve: ship less CSS when opening Chat or New Session
- [#201356](https://github.com/openclaw/openclaw/pull/201356) fix: deliver scheduled reports to unchanged Discord threads
- [#201375](https://github.com/openclaw/openclaw/pull/201375) improve(ui): keep image inspection labels short
- [#201379](https://github.com/openclaw/openclaw/pull/201379) chore(ui): refresh control ui locales
- [#200905](https://github.com/openclaw/openclaw/pull/200905) fix: tell a client waiting for pairing to approve it on the Gateway host
- [#201259](https://github.com/openclaw/openclaw/pull/201259) improve(ui): keep inspected image previews compact
- [#201258](https://github.com/openclaw/openclaw/pull/201258) improve(ui): separate chat activity groups and indent expanded operations
- [#201316](https://github.com/openclaw/openclaw/pull/201316) fix: keep the Automations sidebar list after returning to a background tab
- [#201187](https://github.com/openclaw/openclaw/pull/201187) fix: drop the generic hint under the agent name on new sessions
- [#201261](https://github.com/openclaw/openclaw/pull/201261) improve(ui): summarize file edits and writes together
- [#201371](https://github.com/openclaw/openclaw/pull/201371) fix: keep the Slack question when someone who may not answer presses its button
- [#201372](https://github.com/openclaw/openclaw/pull/201372) chore(ui): refresh control ui locales
- [#201305](https://github.com/openclaw/openclaw/pull/201305) improve: stop shipping the full Gateway capability list to the browser
- [#201322](https://github.com/openclaw/openclaw/pull/201322) improve: shrink the JavaScript loaded for chat Markdown
- [#195679](https://github.com/openclaw/openclaw/pull/195679) fix(gateway): config changes no longer exhaust session discovery with GitHub publication refreshes
- [#201346](https://github.com/openclaw/openclaw/pull/201346) fix: keep the chat composer width steady on reload
- [#201303](https://github.com/openclaw/openclaw/pull/201303) fix: make the "OpenClaw was updated" notice easy to see above the composer
- [#201220](https://github.com/openclaw/openclaw/pull/201220) feat: show installed plugins in the Customize sidebar
- [#201353](https://github.com/openclaw/openclaw/pull/201353) test(gateway): expose auth removal refresh warnings
- [#201334](https://github.com/openclaw/openclaw/pull/201334) refactor(gateway): keep operator authority fixed per request
- [#201301](https://github.com/openclaw/openclaw/pull/201301) fix: wait for Git command cleanup before releasing custody
- [#201270](https://github.com/openclaw/openclaw/pull/201270) fix(ci): isolate hosted Gateway method shards
- [#200857](https://github.com/openclaw/openclaw/pull/200857) fix: reflect failed access checks in provider status
- [#200859](https://github.com/openclaw/openclaw/pull/200859) fix: keep setup diagnostics separate from progress output
- [#201004](https://github.com/openclaw/openclaw/pull/201004) fix(macos): defer Local Network permission until discovery starts
- [#201271](https://github.com/openclaw/openclaw/pull/201271) fix(sessions): keep the running turn when a command is delivered mid-turn
- [#200858](https://github.com/openclaw/openclaw/pull/200858) fix: show onboarding completion only once
- [#200836](https://github.com/openclaw/openclaw/pull/200836) fix(macos): show full icon captions in the DMG installer
- [#201347](https://github.com/openclaw/openclaw/pull/201347) improve(gateway): avoid scanning parked workspaces for run leases
- [#200994](https://github.com/openclaw/openclaw/pull/200994) fix: let the next update finish a killed update after the machine restarted
- [#201333](https://github.com/openclaw/openclaw/pull/201333) fix: keep recently used session worktrees from idle cleanup
- [#201343](https://github.com/openclaw/openclaw/pull/201343) fix(release): accept only exact low-risk beta test failures
- [#201312](https://github.com/openclaw/openclaw/pull/201312) fix: keep startup alive when model preparation is superseded
- [#201196](https://github.com/openclaw/openclaw/pull/201196) fix(release): show the active step while FRV is running
- [#201197](https://github.com/openclaw/openclaw/pull/201197) fix(release): allow release push audits from shallow clones
- [#201200](https://github.com/openclaw/openclaw/pull/201200) fix(test): retain direct consumers alongside conventional owners
- [#201201](https://github.com/openclaw/openclaw/pull/201201) fix(release): retain npm registry failure diagnostics
- [#201202](https://github.com/openclaw/openclaw/pull/201202) fix(qa): match the canonical restart recovery prompt
- [#201341](https://github.com/openclaw/openclaw/pull/201341) fix: honor approved 2026.11.6 validation exceptions
- [#201306](https://github.com/openclaw/openclaw/pull/201306) fix: make the Codex plugin usable again after a session reset blocked its update
- [#201325](https://github.com/openclaw/openclaw/pull/201325) fix(test): keep worker catalog discovery offline
- [#201314](https://github.com/openclaw/openclaw/pull/201314) fix: let updates from 2026.11.4 and older finish when the old Gateway left a plugin lease behind
- [#201336](https://github.com/openclaw/openclaw/pull/201336) fix: let the next update recover from an interrupted update after a reboot renumbers the disk
- [#200716](https://github.com/openclaw/openclaw/pull/200716) improve(ui): show dictation status beside Stop and Send so the composer keeps its height
- [#201178](https://github.com/openclaw/openclaw/pull/201178) fix: let automatic updates finish plugin updates that an earlier update left owed
- [#201329](https://github.com/openclaw/openclaw/pull/201329) fix(memory): retain settled watcher invalidation
- [#201321](https://github.com/openclaw/openclaw/pull/201321) improve: reduce duplicate work when refreshing the Mentions Inbox
- [#195612](https://github.com/openclaw/openclaw/pull/195612) fix(auto-reply): a message sent after /stop is not answered when the Stop reply is delivered late
- [#201272](https://github.com/openclaw/openclaw/pull/201272) fix(state): join retained creators during agent preparation
- [#201208](https://github.com/openclaw/openclaw/pull/201208) feat: open Sessions from its own rail icon and keep the avatar for switching agents
- [#201240](https://github.com/openclaw/openclaw/pull/201240) improve: shrink sidebar code loaded with Chat and New Session
- [#201241](https://github.com/openclaw/openclaw/pull/201241) improve: shrink transcript and draft code loaded with Chat
- [#201239](https://github.com/openclaw/openclaw/pull/201239) improve: ship less hashing code when opening Chat or New Session
- [#201222](https://github.com/openclaw/openclaw/pull/201222) fix: align subagent custody tests with task-end cleanup
- [#201229](https://github.com/openclaw/openclaw/pull/201229) fix: preserve credentials while preparing model catalogs
- [#201203](https://github.com/openclaw/openclaw/pull/201203) fix(release): explain shallow history failures in release notes
- [#201309](https://github.com/openclaw/openclaw/pull/201309) fix(update): bridge 2026.10.33 extended-stable updaters
- [#201313](https://github.com/openclaw/openclaw/pull/201313) fix(ci): recover WebKit downloads in release E2E
- [#201291](https://github.com/openclaw/openclaw/pull/201291) fix(ui): keep the New Session composer above the mobile keyboard
- [#200234](https://github.com/openclaw/openclaw/pull/200234) improve(ui): show the voice level as a timeline across the composer
- [#201199](https://github.com/openclaw/openclaw/pull/201199) fix(update): isolate malformed retained-install markers
- [#201207](https://github.com/openclaw/openclaw/pull/201207) fix: keep My sessions within the selected agent

#### 🐛 New Issues
- [#201423](https://github.com/openclaw/openclaw/issues/201423) [Bug]: 2026.11.5 every sessions_spawn to a Codex-harness child fails with "Codex requester policy changed; retry the turn to prepare current policy." `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬5
- [#201540](https://github.com/openclaw/openclaw/issues/201540) [Bug]: Main session actor permanently rejects all turns via session-rebound; heartbeat and memory dreaming blocked with no operator recovery path `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬4
- [#201251](https://github.com/openclaw/openclaw/issues/201251) `openclaw update` 2026.11.3 → 2026.11.5: the baseline capture walks every file of the protected roots, and the DB set is copied 5 times; our window took 5409 s `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#201085](https://github.com/openclaw/openclaw/issues/201085) [Bug]: failed auto-update leaves Gateway stopped — managed handoff runtime cannot read migrated state (schema 36 vs 22) and recovery probe throws captureExchange is not a function `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬4
- [#201561](https://github.com/openclaw/openclaw/issues/201561) Windows npm upgrade to 2026.11.5: doctor --fix leaves Gateway stopped; abandoned update still targets 2026.11.3 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬3
- [#201058](https://github.com/openclaw/openclaw/issues/201058) [Bug]: cold Gateway startup on PostgreSQL fails during secrets plugin metadata preparation `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#201549](https://github.com/openclaw/openclaw/issues/201549) kimi-claw: image_generate tool calls dropped (xml_tool_call heuristic treats registered tool call as text) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#201369](https://github.com/openclaw/openclaw/issues/201369) [Bug]: update status repeats filename/header ID mismatch warnings after verified SQLite import `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#201394](https://github.com/openclaw/openclaw/issues/201394) [Bug]: onboard --install-daemon --skip-health reports a freshly started Gateway as unreachable (single 1.5s probe, no startup wait) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#201247](https://github.com/openclaw/openclaw/issues/201247) [Bug]: claude-cli: aborting a turn during live session construction logs "service child cleanup identity lost … restart the Gateway before retrying" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬3
- [#201124](https://github.com/openclaw/openclaw/issues/201124) [Bug]: /stop during preflight compaction silently drops the user message that started the turn (not in transcript, not in interrupted inputs) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬3
- [#201057](https://github.com/openclaw/openclaw/issues/201057) Update failure: update (2026.11.2) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `P0` 💬3
- [#201053](https://github.com/openclaw/openclaw/issues/201053) [Bug]: config patch rejects GPT-6.2 models served by an installed newer Codex `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#201593](https://github.com/openclaw/openclaw/issues/201593) [Bug]: Doctor imports docs-only legacy heartbeat scaffold as nonempty cron scratch `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#201571](https://github.com/openclaw/openclaw/issues/201571) [Bug]: memory index on PostgreSQL agent stores hits ERR_WORKER_OUT_OF_MEMORY (hardcoded 512 MB transcript worker heap) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#201558](https://github.com/openclaw/openclaw/issues/201558) [Bug]: OpenAI OAuth re-login (`openclaw models auth login --provider openai --method oauth`) rewrites configured model rows' `thinkingLevelMap` (adds `{}`, drops `off: null`) `bug` `no-stale` `regression` `P2` 💬2
- [#201513](https://github.com/openclaw/openclaw/issues/201513) [Bug]: `openai/gpt-6-luna` rejected with "does not support chat inference" on the ChatGPT/Codex subscription route since 2026.11.5 `bug` `no-stale` `regression` `P2` 💬2
- [#201521](https://github.com/openclaw/openclaw/issues/201521) Sessions sidebar UX: hidden Home-linked dashboard sessions, sticky agent roster, missing "All owners" (2026.11.5) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#201468](https://github.com/openclaw/openclaw/issues/201468) fix(macos): launch alert gives generic credential recovery steps when the bundled CLI refuses a schema migration for an older Gateway service `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#201467](https://github.com/openclaw/openclaw/issues/201467) Update failure: snapshot-space-preflight (2026.10.4) `P2` `impact:ux-friction` 💬2
- [#201401](https://github.com/openclaw/openclaw/issues/201401) [Bug]: onboard --secret-input-mode ref silently ignores a provider API key flag when the env var holds a different key `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#201388](https://github.com/openclaw/openclaw/issues/201388) [Bug]: install-cli.sh --onboard fails under the documented curl | bash form (onboarding gets the pipe, not the TTY) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#201339](https://github.com/openclaw/openclaw/issues/201339) [Bug]: Subagent completion marked `permanent_failure` ("recovered requester completed without durable final delivery evidence") although the result is delivered moments later via `subagent_settle` `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#201183](https://github.com/openclaw/openclaw/issues/201183) Restart recovery replays weeks-old sessions forever when a `deliver:false` reply leaves `pendingFinalDelivery` in `prepared` `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#201215](https://github.com/openclaw/openclaw/issues/201215) [Bug]: Windows autologon stops working after install - isolated agent session account starts before console logon `P2` `impact:other` 💬2
- [#201153](https://github.com/openclaw/openclaw/issues/201153) [Bug]: doctor --lint still fails with retained-snapshot-changed on stable 2026.11.5 (e13cf15, root): #193014 fix missing from the release build `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:not-repro-on-main` 💬2
- [#201149](https://github.com/openclaw/openclaw/issues/201149) [Bug]: 2026.11.3 -> 2026.11.5 update fails: media-persistence rejects memory_index_chunks_revision triggers that 2026.11.3 creates `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#201012](https://github.com/openclaw/openclaw/issues/201012) [Bug]: Slack Socket Mode input stuck after 59/60 retries on 2026.11.5; restart ineffective, operator-skipped restores service `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#201016](https://github.com/openclaw/openclaw/issues/201016) Update failure: managed-service-stop-failed (2026.10.9) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬2
- [#200982](https://github.com/openclaw/openclaw/issues/200982) Update failure: runtime-artifact-publication (2026.10.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#201599](https://github.com/openclaw/openclaw/issues/201599) [Windows] Windows Defender real-time scan blocks OpenClaw node — CLI, gateway startup, and update repair all hang silently (2026.11.5) `clawsweeper:needs-info` `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#201480](https://github.com/openclaw/openclaw/issues/201480) [Bug]: ChatGPT model discovery depends on npm and can hide newer models `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#201592](https://github.com/openclaw/openclaw/issues/201592) [Bug]: Plain inbound chat message recorded during a running turn still kills the turn with SqliteTranscriptMutationConflictError (2026.11.5; #201271 covers command exchanges only) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#201589](https://github.com/openclaw/openclaw/issues/201589) [Bug]: Windows — plugin peer-link audit compares host paths case-sensitively; channel stays blocked after update `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201588](https://github.com/openclaw/openclaw/issues/201588) 2026.11.5: Gateway keeps unlinked read-only SQLite snapshots open (database.sqlite + owner.sqlite, deleted); 23 GB pinned after 35 h, invisible to du `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201585](https://github.com/openclaw/openclaw/issues/201585) [Bug]: Session observer utility calls ignore the session owner's linked model account (multi-user Gateway) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201580](https://github.com/openclaw/openclaw/issues/201580) [Feature]: expose the delivery intent to reply_payload_sending so plugins can tell a Codex async agent message from streamed block output `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201581](https://github.com/openclaw/openclaw/issues/201581) 2026.11.5: feature-plugin operation errors reach the caller only as "plugin session action failed" (message hidden) `P2` `impact:ux-friction` 💬1
- [#201576](https://github.com/openclaw/openclaw/issues/201576) [Bug]: Reply stall watchdog (~360s) aborts embedded auto-compaction before the configured compaction.timeoutSeconds (600s) can take effect `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#201574](https://github.com/openclaw/openclaw/issues/201574) [Bug]: doctor doesn't prepare Matrix account-scoped state roots for database port (retired tables, stray .bak/state.* dirs, stale credential receipts after a move) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#201572](https://github.com/openclaw/openclaw/issues/201572) [Bug]: NUL (U+0000) in session-derived memory/FTS text blocks database port and the PostgreSQL memory rebuild `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201575](https://github.com/openclaw/openclaw/issues/201575) [Bug]: database port post-port memory rebuild fails: "Runtime config is not prepared" (embeddings unavailable) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201573](https://github.com/openclaw/openclaw/issues/201573) [Bug]: database port calls setval(seq, 0) for AUTOINCREMENT tables with sqlite_sequence = 0, aborting the port `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201565](https://github.com/openclaw/openclaw/issues/201565) [Feature]: Live MCP reconnect for Codex conversations, including external credential changes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201559](https://github.com/openclaw/openclaw/issues/201559) [Bug]: Ollama Cloud balance silently missing from `/status` and `status --usage` when `models.providers.ollama.apiKey` is a file SecretRef `bug` `regression` `P2` `impact:auth-provider` 💬1
- [#201552](https://github.com/openclaw/openclaw/issues/201552) [Feature]: Let read-only session batches bypass per-agent SQLite writer admission (Control UI reads convoy behind agent writes) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#201543](https://github.com/openclaw/openclaw/issues/201543) Update failure: gateway-recovery-verification (2026.11.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#201541](https://github.com/openclaw/openclaw/issues/201541) /btw side questions ignore the model fallback chain: fail on 429 while main turns succeed via fallback `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201528](https://github.com/openclaw/openclaw/issues/201528) Mac packaging fails with "Unexpected end of JSON input" when the checkout path goes through a symlink `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#201530](https://github.com/openclaw/openclaw/issues/201530) [Bug]: 2026.11.3 to 2026.11.5 update blocked by legacy sqlite_stat4 on official Node 26.13.0 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201526](https://github.com/openclaw/openclaw/issues/201526) [Feature]: Unify OpenClaw ID member roles on the Gateway profile; close invited-member authority leaks `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#201517](https://github.com/openclaw/openclaw/issues/201517) [Bug] 2026.11.5 macOS arm64: code-mode host fails; suspected recurrence of missing JIT entitlements (#192851) `P1` `clawsweeper:source-repro` `impact:crash-loop` `issue-rating: 🦞 diamond lobster` 💬1
- [#201516](https://github.com/openclaw/openclaw/issues/201516) Plugin SDK: scoped background lifecycle access for extension-linked regular sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#201511](https://github.com/openclaw/openclaw/issues/201511) Control UI 2026.11.5: routed plugin page never mounts on direct link/reload when a workspace replacement uses mountDefault (blank page) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201255](https://github.com/openclaw/openclaw/issues/201255) Mac source packaging fails on Codex 0.169's voice helper rpaths `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#201481](https://github.com/openclaw/openclaw/issues/201481) Android onboarding stays on node approval after Camera is approved `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` `P0` 💬1
- [#201479](https://github.com/openclaw/openclaw/issues/201479) Empty chats display message-loading skeletons `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#201472](https://github.com/openclaw/openclaw/issues/201472) fix(doctor): a dead Gateway lock without processNamespace blocks maintenance and rolls back the 2026.11.5 update `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬1
- [#201466](https://github.com/openclaw/openclaw/issues/201466) fix(docs): automatic-update docs omit the activation-failure pause and leave the candidate-Doctor pause unscoped `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201461](https://github.com/openclaw/openclaw/issues/201461) Control UI: Files panel should browse to the parent folder of the opened file `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201249](https://github.com/openclaw/openclaw/issues/201249) [Bug]: `database port --to postgres`: transcript projection rebuild sends one INSERT per row, so ports over WAN take hours `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201446](https://github.com/openclaw/openclaw/issues/201446) [Bug]: Completion turns don't record the session's context size, so the next preflight compaction check reads a stale total and skips `P1` `impact:session-state` 💬1
- [#201443](https://github.com/openclaw/openclaw/issues/201443) [Bug]: model fallback records candidate_succeeded after a failed run (billing 402 → rotate_profile → transcript error), next fallback never tried `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201250](https://github.com/openclaw/openclaw/issues/201250) [Bug]: `database port --to postgres` fails on the state store when `state.schema.contentVersion` lags `user_version` ("PostgreSQL state metadata mismatch") `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201437](https://github.com/openclaw/openclaw/issues/201437) [Bug]: Subagent registry holds the SQLite writer while waiting for initial host admission `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#201438](https://github.com/openclaw/openclaw/issues/201438) [Feature]: Add isolated native chat startup capture and strict request accounting tooling `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#201431](https://github.com/openclaw/openclaw/issues/201431) Control UI: 12h/24h time preference independent of UI language `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201425](https://github.com/openclaw/openclaw/issues/201425) Update failure: candidate-doctor (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#201042](https://github.com/openclaw/openclaw/issues/201042) [Bug]: Setup does not say which tool profile the agent has or what it allows `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#201413](https://github.com/openclaw/openclaw/issues/201413) [Feature]: WhatsApp reactionNotifications parity (inbound reactions are dropped) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201405](https://github.com/openclaw/openclaw/issues/201405) [Feature]: Expose run tool scope to prompt-build plugins `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#201406](https://github.com/openclaw/openclaw/issues/201406) New setups: offer Sign in with ChatGPT first for OpenAI `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#201404](https://github.com/openclaw/openclaw/issues/201404) Update failure: update (2026.11.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#201409](https://github.com/openclaw/openclaw/issues/201409) Update failure: candidate-doctor (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#201397](https://github.com/openclaw/openclaw/issues/201397) Compaction safeguard hard-caps summary reserve at 20k, overriding configured reserveTokens `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#201390](https://github.com/openclaw/openclaw/issues/201390) [Bug]: doctor recommends --fix for foreign launchd jobs even when --fix will refuse the repair `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201400](https://github.com/openclaw/openclaw/issues/201400) Update failure: update (2026.11.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#201387](https://github.com/openclaw/openclaw/issues/201387) [Bug]: doctor --lint gateway-health omits degraded plugins, child runtime and migration warnings that plain doctor reports `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201385](https://github.com/openclaw/openclaw/issues/201385) [Bug]: onboard --tailscale funnel error suggests --gateway-auth token, which Funnel silently overrides `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201384](https://github.com/openclaw/openclaw/issues/201384) [Feature]: Add suppression or deduplication for repeated bounded-context notices in chat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201368](https://github.com/openclaw/openclaw/issues/201368) [Bug]: Workspace-generated HTML attachment rejected before outbound trust registration (2026.11.3) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#201348](https://github.com/openclaw/openclaw/issues/201348) [Bug]: Slack: a denied question-button press overwrites the question message with "You are not authorized to use this control." `P1` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#201362](https://github.com/openclaw/openclaw/issues/201362) [Bug]: 2026.11.5: plugin `subagent.run` on an `agent:<id>:subagent:incognito-*` key never starts; nested session admission waits on its own claim (`claim-owned`) `P1` `impact:session-state` 💬1
- [#201360](https://github.com/openclaw/openclaw/issues/201360) [Bug]: Telegram avatar storage pollutes inbound media with repeated UUID copies (blocks ingestion workflow) `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#201359](https://github.com/openclaw/openclaw/issues/201359) [Bug]: Control UI activity summaries and observer drive hundreds of MiB of Codex background traffic `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#201358](https://github.com/openclaw/openclaw/issues/201358) Update failure: candidate-doctor (2026.11.4) `P2` `impact:ux-friction` 💬1
- [#201344](https://github.com/openclaw/openclaw/issues/201344) [Bug]: Owner-authenticated scheduled continuation rejects paired-node computer with owner-authority error `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#201337](https://github.com/openclaw/openclaw/issues/201337) [Bug]: Codex Doctor cannot migrate legacy turn_completed assignment records `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#201335](https://github.com/openclaw/openclaw/issues/201335) [Bug]: install.sh git installs ignore --beta and fall back to main when npm is missing `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201328](https://github.com/openclaw/openclaw/issues/201328) [Bug]: Text size setting ignores tool cards and secondary chat text (fixed px) despite docs saying they scale `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#201326](https://github.com/openclaw/openclaw/issues/201326) Candidate Doctor rejects plugin migration obligations with identical IDs and no reported changed fields `P1` `maturity:stable` `impact:ux-friction` 💬1
- [#201311](https://github.com/openclaw/openclaw/issues/201311) [Bug]: Native plugins pack requires tool/feature metadata for genuine channel plugins `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#201245](https://github.com/openclaw/openclaw/issues/201245) Qualify PostgreSQL cron finalization during graceful shutdown `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#201298](https://github.com/openclaw/openclaw/issues/201298) Update failure: candidate-doctor (2026.11.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#201267](https://github.com/openclaw/openclaw/issues/201267) macOS first run: a real Welcome and a one-screen AI picker `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201262](https://github.com/openclaw/openclaw/issues/201262) [Bug]: sessions_spawn rejected with "Requester provenance requires trusted in-process Gateway dispatch" on human-triggered turns when the agent runs on the Codex app-server runtime `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:security` 💬1
- [#201234](https://github.com/openclaw/openclaw/issues/201234) [Bug]: Regression in 2026.10+/11.x: `openclaw agent` called from an agent's exec tool is blocked ("would lose inter-session attribution"); sessions_spawn children get no tools under claude-cli runtime `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#201233](https://github.com/openclaw/openclaw/issues/201233) [Bug]: 2026.11.5 Tool Search dispatch_action -> sessions_spawn fails Gateway caller authority check `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#201210](https://github.com/openclaw/openclaw/issues/201210) [Bug]: Sidebar global search excludes archived sessions even with Status All `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#201206](https://github.com/openclaw/openclaw/issues/201206) [Bug]: teams-meetings can't reach talk-back on current Microsoft work meetings `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#201194](https://github.com/openclaw/openclaw/issues/201194) [Feature]: Allow fallbacks for decisionModel ({ primary, fallbacks } like agent model) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201190](https://github.com/openclaw/openclaw/issues/201190) [Bug]: Models from a registerCliBackend plugin are unknown to compaction and sessions_spawn even with modelCatalog declared `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#201192](https://github.com/openclaw/openclaw/issues/201192) [Bug]: Gateway restart deferred with no maximum wait while CLI sessions stay busy `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#201195](https://github.com/openclaw/openclaw/issues/201195) [Bug]: github_read always fails with an active-tool-invocation error when called through the MCP bridge from a CLI runtime `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201191](https://github.com/openclaw/openclaw/issues/201191) [Bug]: CLI backend killed at 180 s no-output on resumed tool-heavy turns; error does not name reliability.watchdog keys `P2` `impact:ux-friction` 💬1
- [#201180](https://github.com/openclaw/openclaw/issues/201180) doctor --fix fails on native Windows: EPERM fsync while capturing database recovery copy (2026.11.5) `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#201182](https://github.com/openclaw/openclaw/issues/201182) [Feature]: CLI onboarding should distinguish usable inference connections and operational readiness `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201170](https://github.com/openclaw/openclaw/issues/201170) [Bug]: macOS app sometimes pastes only a filename instead of attaching the copied file `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#201171](https://github.com/openclaw/openclaw/issues/201171) [Feature]: iOS chat needs Save and Share actions for assistant-sent images and videos `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#201174](https://github.com/openclaw/openclaw/issues/201174) [Bug]: Ask OpenClaw setup probe fails for a hosted-catalog-only OpenAI model ("Explicit auth order for openai has no usable profiles") while regular turns with the same agent, model and OAuth profile work `P2` `impact:auth-provider` 💬1
- [#201172](https://github.com/openclaw/openclaw/issues/201172) [Bug]: isolatedSession heartbeat on the codex runtime reuses one native Codex thread across runs (context grows to ~300K per heartbeat) `P2` `impact:session-state` 💬1
- [#201104](https://github.com/openclaw/openclaw/issues/201104) [Bug]: Scheduled (cron) runs never get the malformed-tool-call continuation: terminalReplyExpectation "optional" suppresses reply recovery (v2026.11.5) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201158](https://github.com/openclaw/openclaw/issues/201158) Update failure: invalid-config (2026.11.4) `P0` `impact:ux-release-blocker` 💬1
- [#201144](https://github.com/openclaw/openclaw/issues/201144) Update failure: gateway-recovery-verification (2026.11.5) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#201136](https://github.com/openclaw/openclaw/issues/201136) [Bug]: 2026.11.4 subagents deliveryStatus stays "pending" after the completion is delivered to the parent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#201139](https://github.com/openclaw/openclaw/issues/201139) update repair deadlocks on 2026.11.5: legacy Gateway custody fence acquires the same handoff store that settle's existingAuthority admission uses `P1` `impact:ux-friction` 💬1
- [#201135](https://github.com/openclaw/openclaw/issues/201135) Slack: gracefulStopSlackApp throws "Cannot set property shuttingDown of #<SocketModeClient>" → gateway shuts down / hangs on restart or reload `P1` `impact:crash-loop` 💬1
- [#201114](https://github.com/openclaw/openclaw/issues/201114) Hourly extension tests bypass the Boat start budget `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#201120](https://github.com/openclaw/openclaw/issues/201120) Update failure: package-update (2026.11.1) `P0` `impact:ux-release-blocker` 💬1
- [#201109](https://github.com/openclaw/openclaw/issues/201109) Plugin SDK: supported tool-free planner with original-request authority at final dispatch? `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#201108](https://github.com/openclaw/openclaw/issues/201108) Update failure: package-doctor (2026.11.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#201107](https://github.com/openclaw/openclaw/issues/201107) [Bug]: update: package-swap fails with "State schema inspection failed (exit): [redacted-diagnostic]" when a temp-root ancestor is group-writable; the real error is redacted `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201098](https://github.com/openclaw/openclaw/issues/201098) [Bug]: Control UI allows selecting GPT-6.2 Sol although the selected Codex route rejects it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#201092](https://github.com/openclaw/openclaw/issues/201092) [Feature Request]: content-free parent and completion-batch facts in selected subagent waits `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#201091](https://github.com/openclaw/openclaw/issues/201091) [Feature Request]: content-free original identity for committed ingress failures `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201082](https://github.com/openclaw/openclaw/issues/201082) [Bug]: Code Mode `skills.read()` rejects non-error skills_read results ("Installed skill instructions are unavailable.") `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬1
- [#201088](https://github.com/openclaw/openclaw/issues/201088) Voice call repeats assistant phrases and produces crackling audio 💬1
- [#201077](https://github.com/openclaw/openclaw/issues/201077) Update failure: service-revalidation-failed (2026.9.4) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#201069](https://github.com/openclaw/openclaw/issues/201069) [Feature]: Let plugins provide skill installers so brew-only skills can install on native Windows `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#201071](https://github.com/openclaw/openclaw/issues/201071) [Bug]: 2026.11.5 on native Windows: `config set` refuses its own write ("SQLite read-only worker cannot verify Gateway ownership") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#201065](https://github.com/openclaw/openclaw/issues/201065) Update failure: candidate-doctor (2026.9.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#201059](https://github.com/openclaw/openclaw/issues/201059) [Bug]: Codex profile health inspection requests a SQLite file snapshot on PostgreSQL `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201054](https://github.com/openclaw/openclaw/issues/201054) [Bug]: Subagent completion announce fails for ~33 min and is dropped when the requester session receives a newer user message `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#201055](https://github.com/openclaw/openclaw/issues/201055) [Bug]: before_tool_call requireApproval waits are killed by the 90 s Codex dynamic-tool timeout `P1` `impact:ux-friction` 💬1
- [#201048](https://github.com/openclaw/openclaw/issues/201048) Startup phase `sessions.materialize` blocks the main thread for about 5 minutes on a large install and logs no phase line (2026.11.3) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#201045](https://github.com/openclaw/openclaw/issues/201045) Long tool calls (>10 min) aborted as 'Reply operation expired as stale' — recordActivity() not called during tool execution; threshold not configurable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#201036](https://github.com/openclaw/openclaw/issues/201036) openclaw logs --limit/--max-bytes behaves differently per delivery path and the help documents no cap `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201035](https://github.com/openclaw/openclaw/issues/201035) openclaw mcp serve hangs every tools/call with no error when the Gateway is wedged `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200996](https://github.com/openclaw/openclaw/issues/200996) Feishu streaming card: reply text is duplicated (previous assistant messages repeated) when a turn contains multiple assistant messages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#200997](https://github.com/openclaw/openclaw/issues/200997) Feishu streaming card: writes continue after the card is closed, producing repeated `code=300309 streaming mode is closed` errors `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#200990](https://github.com/openclaw/openclaw/issues/200990) Qualify PostgreSQL completion failover and persisted auth health `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#201001](https://github.com/openclaw/openclaw/issues/201001) [Bug]: Group members are told to fix the gateway's model setup when its provider fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200986](https://github.com/openclaw/openclaw/issues/200986) [Bug]: Assistant content delivered mid-run is never memory-indexed when the run ends abnormally — silent recall loss `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1

#### 🔒 Closed Issues
- [#172986](https://github.com/openclaw/openclaw/issues/172986) [Bug]: WebChat renders long paths middle-truncated (U+2026) for file: links to OpenClaw special dirs; intermittent payload mutation
- [#194451](https://github.com/openclaw/openclaw/issues/194451) [Bug]: /think (and other directives) sent during an agent turn still kill the turn with SqliteTranscriptMutationConflictError — #192585 only covered /status
- [#164355](https://github.com/openclaw/openclaw/issues/164355) Plugin hooks: no extension point can append content after tool results in the in-flight request (appendContext lands before the tool loop, tool_result_persist only rewrites the transcript)
- [#180858](https://github.com/openclaw/openclaw/issues/180858) Codex GPT-Live WebRTC startup discards actionable provider error
- [#178717](https://github.com/openclaw/openclaw/issues/178717) [Bug]: Telegram 2026.10.5 intentional group silence triggers visible-answer retries and public error loops
- [#173839](https://github.com/openclaw/openclaw/issues/173839) Transport precheck rejects CJK-heavy payloads before graceful compaction can run
- [#177077](https://github.com/openclaw/openclaw/issues/177077) [Bug] v2026.10.5 still lacks the Chinese quota-exhaustion failover fix from #172173 — MiniMax 429 retries 9x before fallback
- [#169152](https://github.com/openclaw/openclaw/issues/169152) [Bug]: 2026.10.1 Windows multi-agent Gateway: delayed Telegram replies, high CPU and SQLite maintenance contention
- [#179034](https://github.com/openclaw/openclaw/issues/179034) [Feature]: restart recovery system messages should carry a timestamp (when the turn was interrupted)
- [#178914](https://github.com/openclaw/openclaw/issues/178914) [Feature]: builtin memory search ranking is not configurable (fixed 30-day decay, no hybrid weights/MMR) — recall regressed on large corpora
- [#178322](https://github.com/openclaw/openclaw/issues/178322) Doctor on read-only Docker root: writable path requirements and fatal openat2 EROFS
- [#177442](https://github.com/openclaw/openclaw/issues/177442) [Bug]: update repair skips maintenance after systemd inspection timeout; live Gateway retains state ownership
- [#177342](https://github.com/openclaw/openclaw/issues/177342) [Feature]: cron list supports filtering by schedule kind, run status, trigger, and sorting
- [#175281](https://github.com/openclaw/openclaw/issues/175281) [Bug]: projects.clone lease uses busyTimeoutMs 0 and fails sandboxed worktree spawns on ordinary SQLITE_BUSY
- [#173479](https://github.com/openclaw/openclaw/issues/173479) Control UI composer: textarea does not scroll when long text is prefilled (quick-prompt / slash-command prefill)
- [#165278](https://github.com/openclaw/openclaw/issues/165278) [Bug]: Automations schema grows under Control UI admin management=also on the same session
- [#201423](https://github.com/openclaw/openclaw/issues/201423) [Bug]: 2026.11.5 every sessions_spawn to a Codex-harness child fails with "Codex requester policy changed; retry the turn to prepare current policy."
- [#181160](https://github.com/openclaw/openclaw/issues/181160) [Feature]: Add a label filter to openclaw sessions
- [#181157](https://github.com/openclaw/openclaw/issues/181157) [Feature]: Add a last-activity field to nodes describe
- [#181155](https://github.com/openclaw/openclaw/issues/181155) [Feature]: Let sessions list show which workspace or worktree a session is bound to
- [#181148](https://github.com/openclaw/openclaw/issues/181148) [Feature]: Let the system agent read usage cost
- [#180970](https://github.com/openclaw/openclaw/issues/180970) [Feature]: Supported request-scoped transport handoff for channel plugins
- [#180532](https://github.com/openclaw/openclaw/issues/180532) Agent SQLite database reaches 1.5 GB in 17 days; transcript_events dominates and shutdown snapshot is slow
- [#180497](https://github.com/openclaw/openclaw/issues/180497) [Feature]: Conversation stall watcher — a heartbeat that wakes each stalled thread in its own session
- [#180243](https://github.com/openclaw/openclaw/issues/180243) [Feature]: Show plugin approval severity in approval history
- [#180242](https://github.com/openclaw/openclaw/issues/180242) [Feature]: Show exec approval warning text in approval history
- [#179822](https://github.com/openclaw/openclaw/issues/179822) diagnostics-otel: add channel, trigger, lane and fallback state to openclaw.model.call; add result size to openclaw.tool.execution
- [#179764](https://github.com/openclaw/openclaw/issues/179764) [Bug]: Android Talk hides GPT-Live usage_check_failed behind generic Realtime provider error
- [#178913](https://github.com/openclaw/openclaw/issues/178913) Session maintenance cleanup fails every pass: harness deletion hook trips its own owner scope check ("Session mutation harness owner changed: codex")
- [#178731](https://github.com/openclaw/openclaw/issues/178731) [Bug]: beta.2 native child completion resumes parent, then authority/hook failure and local 502 leave no final reply (patched installation)
- [#177482](https://github.com/openclaw/openclaw/issues/177482) [Bug]: 2026.9.7 to 2026.10.5 update fails candidate startup with SQLite snapshot stabilization error
- [#177287](https://github.com/openclaw/openclaw/issues/177287) [Feature]: Expose OPENCLAW_SQLITE_JOURNAL_MODE to force the SQLite journal mode
- [#177156](https://github.com/openclaw/openclaw/issues/177156) Streamable-HTTP MCP initialization fails under concurrent startup and does not honor Retry-After
- [#177061](https://github.com/openclaw/openclaw/issues/177061) [Bug]: chat.abort with a cron run's runId doesn't stop the run (only the session-wide abort does)
- [#176317](https://github.com/openclaw/openclaw/issues/176317) Claws v1: migrate/update refuse agents that inherit common agents.defaults (models runtime policy, thinkingDefault, userTimezone, compaction, modelPolicy)
- [#176315](https://github.com/openclaw/openclaw/issues/176315) [Bug]: Windows node exec stays pending in Code Mode while discovery and native session catalog work
- [#170328](https://github.com/openclaw/openclaw/issues/170328) Daily session reset keeps the sessionId (boundary only), contrary to schema.md — chat transcripts grow without bound
- [#169919](https://github.com/openclaw/openclaw/issues/169919) macOS app 2026.10.1: "Could not read the Gateway service ownership record" update window persists for an npm-global Node gateway
- [#188422](https://github.com/openclaw/openclaw/issues/188422) [Bug]: Codex native child completion is retired undelivered while a sibling native child still holds the parent ("claimed by active work")
- [#179999](https://github.com/openclaw/openclaw/issues/179999) [Feature]: Opt-in early concurrency admission for external message CLI invocations
- [#175803](https://github.com/openclaw/openclaw/issues/175803) [Feature]: Voice-scoped OAuth-only credential policy that fails closed before Platform fallback
- [#200469](https://github.com/openclaw/openclaw/issues/200469) Update failure: package-update (2026.11.2)
- [#200671](https://github.com/openclaw/openclaw/issues/200671) [fw5] Gateway startup failure exits 0 and restart-loops under systemd (1GB Raspberry Pi)
- [#166001](https://github.com/openclaw/openclaw/issues/166001) [Bug]: claude-cli turn fails "CLI history changed before preparation" when the previous run settles its transcript after the lane released
- [#186842](https://github.com/openclaw/openclaw/issues/186842) [Bug]: Gemini 3 behind a LiteLLM `openai-completions` provider stops thinking after the first tool call (thought signature lost, LiteLLM substitutes a placeholder)
- [#196544](https://github.com/openclaw/openclaw/issues/196544) [Bug]: Configured model without maxTokens silently gets an 8192 output cap; truncation mid tool call surfaces only as 'incomplete tool call'
- [#195361](https://github.com/openclaw/openclaw/issues/195361) Compaction parses a session's entire transcript onto the main thread, so a long-lived session lifts the gateway heap by about 1 GB on every compaction
- [#194303](https://github.com/openclaw/openclaw/issues/194303) [Bug]: `/stop` mirrors its command exchange after the next turn's persisted user message, so that turn fails replay admission and the message is never answered
- [#190640](https://github.com/openclaw/openclaw/issues/190640) [Bug]: WhatsApp connect/disconnect system events fill the agent main-session queue (20 entries) on quiet accounts
- [#201053](https://github.com/openclaw/openclaw/issues/201053) [Bug]: config patch rejects GPT-6.2 models served by an installed newer Codex
- [#200629](https://github.com/openclaw/openclaw/issues/200629) [Bug]: Cron recovery fix #194048 is missing from 2026.11.x releases; scheduler still stops after shared-state worker loss
- [#201593](https://github.com/openclaw/openclaw/issues/201593) [Bug]: Doctor imports docs-only legacy heartbeat scaffold as nonempty cron scratch
- [#140308](https://github.com/openclaw/openclaw/issues/140308) [Feature]: Fallback model pin is "sticky" — sessions never return to primary model after provider recovers
- [#195962](https://github.com/openclaw/openclaw/issues/195962) [Bug]: Windows `tui --local` fails with DataCloneError on stable 2026.10.10-2026.11.2; #175929 fix not backported from main
- [#196224](https://github.com/openclaw/openclaw/issues/196224) [Bug]: Knowledge scribe setup for one agent removes other agents' scheduled scribes
- [#200824](https://github.com/openclaw/openclaw/issues/200824) [Bug]: Sessions created before 2026.11.x are no longer returned by sessions.list
- [#196245](https://github.com/openclaw/openclaw/issues/196245) [Bug]: Gateway-started update (update.run) on PostgreSQL fails immediately with "PostgreSQL connections must run in a worker"
- [#162189](https://github.com/openclaw/openclaw/issues/162189) [Bug]: Discord accounts still wedge in READY-wait loop after DNS outage on 2026.9.4 (regression/incomplete fix of #125813)
- [#194306](https://github.com/openclaw/openclaw/issues/194306) [Bug]: Basic auth rejects protected sentinel for a pre-encoded full credential payload (2026.10.10)
- [#201153](https://github.com/openclaw/openclaw/issues/201153) [Bug]: doctor --lint still fails with retained-snapshot-changed on stable 2026.11.5 (e13cf15, root): #193014 fix missing from the release build
- [#194261](https://github.com/openclaw/openclaw/issues/194261) [Bug]: cron posts "did not start" notices for expected active-hours/busy skips, and heartbeat sessions repeat them back into Slack, growing each run (2026.11.5-beta.1)
- [#200475](https://github.com/openclaw/openclaw/issues/200475) [Bug]: Follow-up in the same chat reuses a closing claude-cli runtime, refuses the first tool as a user decline, then dies with a closed plugin scope
- [#196658](https://github.com/openclaw/openclaw/issues/196658) [Bug]: browser text read can return a different page's text when the tab navigates mid-read
- [#201480](https://github.com/openclaw/openclaw/issues/201480) [Bug]: ChatGPT model discovery depends on npm and can hide newer models
- [#201581](https://github.com/openclaw/openclaw/issues/201581) 2026.11.5: feature-plugin operation errors reach the caller only as "plugin session action failed" (message hidden)
- [#196312](https://github.com/openclaw/openclaw/issues/196312) Slack: presentation table block without caption is silently dropped while delivery reports sent
- [#201559](https://github.com/openclaw/openclaw/issues/201559) [Bug]: Ollama Cloud balance silently missing from `/status` and `status --usage` when `models.providers.ollama.apiKey` is a file SecretRef
- [#197532](https://github.com/openclaw/openclaw/issues/197532) Sign in with ChatGPT omits session affinity in OpenClaw runtime, causing repeated prompt-cache misses
- [#200600](https://github.com/openclaw/openclaw/issues/200600) Cron jobs created on 2026.11.4 are refused after updating to main: "runs on account ..., which was signed in again or replaced since the job recorded it"
- [#201255](https://github.com/openclaw/openclaw/issues/201255) Mac source packaging fails on Codex 0.169's voice helper rpaths
- [#194857](https://github.com/openclaw/openclaw/issues/194857) [Feature]: Tool Search: make the 20,000-character limit on dispatch_action results configurable
- [#196966](https://github.com/openclaw/openclaw/issues/196966) [Bug]: PostgreSQL git update to main ≥ caa978ca (#196392) refused at database-engine-preflight: "schema drift detected against generated DDL"
- [#200316](https://github.com/openclaw/openclaw/issues/200316) PostgreSQL worktree cleanup fails with ambiguous value_json
- [#188956](https://github.com/openclaw/openclaw/issues/188956) [Feature]: chat.history on PostgreSQL queues behind two history workers under concurrent reads
- [#201249](https://github.com/openclaw/openclaw/issues/201249) [Bug]: `database port --to postgres`: transcript projection rebuild sends one INSERT per row, so ports over WAN take hours
- [#201446](https://github.com/openclaw/openclaw/issues/201446) [Bug]: Completion turns don't record the session's context size, so the next preflight compaction check reads a stale total and skips
- [#198401](https://github.com/openclaw/openclaw/issues/198401) [Bug]: `update migrate` ignores database.postgres.recoveryCaptures "server" and exports every PostgreSQL store locally
- [#201250](https://github.com/openclaw/openclaw/issues/201250) [Bug]: `database port --to postgres` fails on the state store when `state.schema.contentVersion` lags `user_version` ("PostgreSQL state metadata mismatch")
- [#197779](https://github.com/openclaw/openclaw/issues/197779) [Bug]: backup restore --target refuses PostgreSQL archives when the target path goes through a symlink
- [#201042](https://github.com/openclaw/openclaw/issues/201042) [Bug]: Setup does not say which tool profile the agent has or what it allows
- [#200933](https://github.com/openclaw/openclaw/issues/200933) [Bug]: session_status capabilities says "messaging profile" without the config path or the alsoAllow fix
- [#198705](https://github.com/openclaw/openclaw/issues/198705) Workboard: drop the claim and observation records from #197471 before they ship
- [#200325](https://github.com/openclaw/openclaw/issues/200325) [Bug]: Chat reports rejected saved credentials when no model is connected
- [#200323](https://github.com/openclaw/openclaw/issues/200323) [Bug]: Chat shows an unconfigured built-in model as its selected default
- [#201348](https://github.com/openclaw/openclaw/issues/201348) [Bug]: Slack: a denied question-button press overwrites the question message with "You are not authorized to use this control."
- [#195649](https://github.com/openclaw/openclaw/issues/195649) [Bug]: A config change refreshes every remembered GitHub publication fact at once and fills the session target discovery lane (`worker task capacity reached` on user turns)
- [#201362](https://github.com/openclaw/openclaw/issues/201362) [Bug]: 2026.11.5: plugin `subagent.run` on an `agent:<id>:subagent:incognito-*` key never starts; nested session admission waits on its own claim (`claim-owned`)
- [#201358](https://github.com/openclaw/openclaw/issues/201358) Update failure: candidate-doctor (2026.11.4)
- [#200825](https://github.com/openclaw/openclaw/issues/200825) [Bug]: Database diagnostic appears inside the Quick start progress line
- [#200364](https://github.com/openclaw/openclaw/issues/200364) macOS: Local Network permission is requested before onboarding
- [#200826](https://github.com/openclaw/openclaw/issues/200826) [Bug]: Quick start prints “Everything’s in place.” twice after skipping AI setup
- [#200365](https://github.com/openclaw/openclaw/issues/200365) macOS: Default DMG window clips the OpenClaw and Applications captions
- [#200694](https://github.com/openclaw/openclaw/issues/200694) [Feature]: Control UI: show dictation status in the composer's button row
- [#201326](https://github.com/openclaw/openclaw/issues/201326) Candidate Doctor rejects plugin migration obligations with identical IDs and no reported changed fields
- [#200233](https://github.com/openclaw/openclaw/issues/200233) [Feature]: Control UI: show the voice level as a timeline across the composer
- [#201245](https://github.com/openclaw/openclaw/issues/201245) Qualify PostgreSQL cron finalization during graceful shutdown
- [#200663](https://github.com/openclaw/openclaw/issues/200663) Control UI: remove the circling border around the composer while dictating
- [#199088](https://github.com/openclaw/openclaw/issues/199088) [Bug]: iPhone Safari offers "AutoFill Contact" over the keyboard in the Control UI chat composer
- [#191678](https://github.com/openclaw/openclaw/issues/191678) [Bug]: Matrix polls show as "Unsupported event" in Element X
- [#201191](https://github.com/openclaw/openclaw/issues/201191) [Bug]: CLI backend killed at 180 s no-output on resumed tool-heavy turns; error does not name reliability.watchdog keys
- [#201174](https://github.com/openclaw/openclaw/issues/201174) [Bug]: Ask OpenClaw setup probe fails for a hosted-catalog-only OpenAI model ("Explicit auth order for openai has no usable profiles") while regular turns with the same agent, model and OAuth profile work
- [#201172](https://github.com/openclaw/openclaw/issues/201172) [Bug]: isolatedSession heartbeat on the codex runtime reuses one native Codex thread across runs (context grows to ~300K per heartbeat)
- [#201104](https://github.com/openclaw/openclaw/issues/201104) [Bug]: Scheduled (cron) runs never get the malformed-tool-call continuation: terminalReplyExpectation "optional" suppresses reply recovery (v2026.11.5)
- [#201158](https://github.com/openclaw/openclaw/issues/201158) Update failure: invalid-config (2026.11.4)
- [#201139](https://github.com/openclaw/openclaw/issues/201139) update repair deadlocks on 2026.11.5: legacy Gateway custody fence acquires the same handoff store that settle's existingAuthority admission uses
- [#201135](https://github.com/openclaw/openclaw/issues/201135) Slack: gracefulStopSlackApp throws "Cannot set property shuttingDown of #<SocketModeClient>" → gateway shuts down / hangs on restart or reload
- [#194825](https://github.com/openclaw/openclaw/issues/194825) [Bug]: Codex harness merges same-name bundle and configured MCP servers → "url is not supported for stdio"
- [#201114](https://github.com/openclaw/openclaw/issues/201114) Hourly extension tests bypass the Boat start budget
- [#201120](https://github.com/openclaw/openclaw/issues/201120) Update failure: package-update (2026.11.1)
- [#196222](https://github.com/openclaw/openclaw/issues/196222) Remove unused private media auth-source inputs
- [#200804](https://github.com/openclaw/openclaw/issues/200804) sms: inbound MMS fails, Twilio media redirects to mms.twiliocdn.com which the SSRF allowlist blocks
- [#201088](https://github.com/openclaw/openclaw/issues/201088) Voice call repeats assistant phrases and produces crackling audio
- [#199731](https://github.com/openclaw/openclaw/issues/199731) [Bug]: sessions_yield drops explicit waiting acknowledgments for already-pending children
- [#201055](https://github.com/openclaw/openclaw/issues/201055) [Bug]: before_tool_call requireApproval waits are killed by the 90 s Codex dynamic-tool timeout
- [#196193](https://github.com/openclaw/openclaw/issues/196193) feat: install unpublished local Templates through the running Gateway
- [#200996](https://github.com/openclaw/openclaw/issues/200996) Feishu streaming card: reply text is duplicated (previous assistant messages repeated) when a turn contains multiple assistant messages
- [#200997](https://github.com/openclaw/openclaw/issues/200997) Feishu streaming card: writes continue after the card is closed, producing repeated `code=300309 streaming mode is closed` errors
- [#200972](https://github.com/openclaw/openclaw/issues/200972) [Docs Bug]: Refresh bundled Codex versions and explain model upgrade requirements
- [#196577](https://github.com/openclaw/openclaw/issues/196577) refactor(acp): resolve TTS eligibility from the settings owner
- [#200934](https://github.com/openclaw/openclaw/issues/200934) Use the ChatGPT account catalog for opt-in OpenClaw sessions
- [#200990](https://github.com/openclaw/openclaw/issues/200990) Qualify PostgreSQL completion failover and persisted auth health
- [#200955](https://github.com/openclaw/openclaw/issues/200955) Qualify first simple-completion acquisition with PostgreSQL stores

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 264,533 · **Open issues:** 53,836 · **Last push:** <1h ago

On November 18, 2026, Hermes Agent released the canary version v0.23.2+canary.20261118T064620Z, bringing improvements and updates to the platform. Key merged pull requests included a fix to ensure archived sessions remain archived within the sidebar search and a CI update for Docker to reintegrate manifest-list jobs back into Blacksmith. Among the newly reported issues, a significant bug was identified where secret redaction processes failed to capture label-prefixed field dumps, allowing sensitive information to pass through verbatim. Other notable issues included problems with inline image handling in the classic CLI and plugin search functionalities.

#### 🚀 New Releases
- [v0.23.2+canary.20261118T064620Z](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.2%2Bcanary.20261118T064620Z) Hermes Agent canary v0.23.2+canary.20261118T064620Z

#### ✅ Merged PRs
- [#157649](https://github.com/NousResearch/hermes-agent/pull/157649) fix(desktop): keep archived sessions archived in sidebar search
- [#157551](https://github.com/NousResearch/hermes-agent/pull/157551) ci(docker): manifest-list jobs back on Blacksmith; PR image builds get the Blacksmith builder

#### 🐛 New Issues
- [#157615](https://github.com/NousResearch/hermes-agent/issues/157615) [Bug]: secret redaction misses label-prefixed field dumps: mid-line "field password: TYPE = "value"" passes verbatim `type/security` `comp/agent` `P3` 💬2
- [#157590](https://github.com/NousResearch/hermes-agent/issues/157590) [Bug]: `@file:` in a gateway message resolves against the gateway's home, so a multiplexed profile can read sibling profiles' files `type/security` `comp/gateway` `P3` `area/profiles` 💬1
- [#157632](https://github.com/NousResearch/hermes-agent/issues/157632) [Bug]: Classic CLI one-shot (chat -q … --oneshot) prints inline-image transmits as Python tuple text instead of drawing the image `type/bug` `comp/cli` `tool/vision` `P2` 💬1
- [#157583](https://github.com/NousResearch/hermes-agent/issues/157583) [Bug]: the turn after an image message misses the prompt cache (image rows are reloaded without their injected context) `type/perf` `comp/agent` `P2` `area/sessions` 💬1
- [#157605](https://github.com/NousResearch/hermes-agent/issues/157605) [Bug]: Inline images break inside Zellij under kitty (Unicode placeholders rejected) `type/bug` `comp/cli` `P2` 💬1
- [#157603](https://github.com/NousResearch/hermes-agent/issues/157603) [Bug]: Desktop Plugins search can't find an installed plugin by its id `type/bug` `P2` `comp/desktop` `desktop/settings` 💬1
- [#157598](https://github.com/NousResearch/hermes-agent/issues/157598) Streaming parser drops typed thinking content blocks (reasoning billed, never stored) `type/bug` `comp/agent` `tool/file` `P2` 💬1
- [#157661](https://github.com/NousResearch/hermes-agent/issues/157661) [Bug]: Hourly scratch prune leaves a zombie child in the process that spawned it `type/bug` `comp/gateway` `P2`
- [#157658](https://github.com/NousResearch/hermes-agent/issues/157658) [Bug]: Saving a GitHub Copilot default model persists alias `github-copilot` instead of canonical `copilot`, breaking Desktop provider matching & live catalog `type/bug` `comp/cli` `provider/copilot` `area/config`
- [#157652](https://github.com/NousResearch/hermes-agent/issues/157652) [Bug]: Resuming an ordinary chat opens the delegate subagent it spawned — child rows lose `_delegate_from` when a prompt-refresh sidecar lands before the constructor `type/bug` `comp/tools` `tool/delegate` `P2`
- [#157653](https://github.com/NousResearch/hermes-agent/issues/157653) Plugins: install once in the main home, show in every profile, enable/disable per profile (incl. ?profile= on dashboard toggle routes) `type/feature` `comp/cli` `comp/plugins` `area/config`
- [#157651](https://github.com/NousResearch/hermes-agent/issues/157651) [Bug]: Desktop pop-out Browser annotations fail after the source chat remounts `type/bug` `P2` `comp/desktop` `desktop/chat`
- [#157647](https://github.com/NousResearch/hermes-agent/issues/157647) Profile created via POST /api/profiles can be pinned to a plugin-provided model provider it cannot load ("Unknown provider") `type/bug` `comp/cli` `area/config` `P2`
- [#157644](https://github.com/NousResearch/hermes-agent/issues/157644) FR: retention knob for gateway request dumps (HERMES_DUMP_RETENTION_DAYS) `type/feature` `comp/agent` `area/config` `P3`
- [#157641](https://github.com/NousResearch/hermes-agent/issues/157641) [Feature]: Main profile identity — name it after the main bot by default, allow a color, and mark the managing card on the Kanban `type/feature` `comp/cron` `comp/plugins` `P3`
- [#157638](https://github.com/NousResearch/hermes-agent/issues/157638) Windows: pm install environments inherit a Low mandatory-integrity label; build chain runs Low -> NoWriteUp EPERM + pm label ops fail (WinError 1299) `type/security` `P3` `area/install-update` `os/windows`
- [#157635](https://github.com/NousResearch/hermes-agent/issues/157635) [Feature]: config default for the ACP edit-approval policy (acp.edit_approval_policy) `type/feature` `comp/gateway` `comp/acp` `area/config`
- [#157633](https://github.com/NousResearch/hermes-agent/issues/157633) Local terminal tool runs commands uncapped in the user's session scope — a heavy build can OOM-kill the whole desktop session `type/bug` `comp/tools` `tool/terminal` `backend/local`
- [#157629](https://github.com/NousResearch/hermes-agent/issues/157629) [Feature]: Add Haven as a messaging platform `type/feature` `comp/gateway` `P3`
- [#157627](https://github.com/NousResearch/hermes-agent/issues/157627) [Bug]: Post-interrupt redraw in the classic CLI repaints the transcript offset (unrecorded hint, off-loop redraw) `type/bug` `comp/cli` `P2`
- [#157628](https://github.com/NousResearch/hermes-agent/issues/157628) [Feature]: Full-resolution inline images inside Zellij (kitty transmit-by-id + placements) `type/feature` `comp/cli` `P3`
- [#157626](https://github.com/NousResearch/hermes-agent/issues/157626) kanban: allow `create --initial-status scheduled` so a parked card never emits a `blocked` event `type/feature` `comp/cli` `comp/cron` `tool/file`
- [#157625](https://github.com/NousResearch/hermes-agent/issues/157625) [Bug]: Desktop remote gateway over HTTPS LAN IP: every ws-ticket rejected no_cookie from first sign-in (Windows + macOS), browser tabs on the same URL work `type/bug` `area/auth` `P2` `comp/desktop`
- [#157606](https://github.com/NousResearch/hermes-agent/issues/157606) Resolve provider credentials and managed settings from the profile scope, not live os.environ `type/security` `comp/cli` `provider/openai` `area/auth`

#### 🔒 Closed Issues
- [#135872](https://github.com/NousResearch/hermes-agent/issues/135872) computer_use element clicks refused on cua-driver 0.34: 'unknown argument element_index'
- [#127389](https://github.com/NousResearch/hermes-agent/issues/127389) [Bug]: Desktop: a session that is archived stays invisible in the sidebar while it keeps running, and search hits offer Archive instead of Unarchive
- [#132876](https://github.com/NousResearch/hermes-agent/issues/132876) computer_use sends unsupported element_index to strict token-only CUA action schemas
- [#126587](https://github.com/NousResearch/hermes-agent/issues/126587) pm(cua-driver): pin can never advance — every upstream cua-driver-rs release is flagged `prerelease`, so `latest_versions()` always returns []

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 97,190 · **Open issues:** 10,649 · **Last push:** <1h ago

On November 19, 2026, there were no new releases for vLLM, but several significant pull requests were merged. Key updates included the enhancement of `SamplingMaskTensors` to utilize SYCL kernels on XPU and improvements in the `KV Cache` handling that prevent sizing issues and maintain empty reasoning blocks in responses. Bug fixes also addressed critical issues, such as ensuring `detokenizers` do not drop trailing characters and rectifying various performance-related concerns. Notably, a new high-priority issue was reported regarding `incremental detokenizers`, which drops a leading U+FFFD at the end of generation. Overall, the day was primarily focused on stability improvements and performance optimizations.

#### ✅ Merged PRs
- [#66975](https://github.com/vllm-project/vllm/pull/66975) [XPU][Test] Enable Ray-based test_comm_ops tests on XPU
- [#64231](https://github.com/vllm-project/vllm/pull/64231) [XPU] SamplingMaskTensors use sycl kernel on XPU
- [#68556](https://github.com/vllm-project/vllm/pull/68556) [Recipe] DeepSeek-V4.1-Flash: GB300 Dynamo AgentX presets from InferenceX #5015
- [#66444](https://github.com/vllm-project/vllm/pull/66444) [ROCm] wvSplitK: keep bf16 N=5 at YTILE 2 on wave64 to avoid VGPR spills
- [#67191](https://github.com/vllm-project/vllm/pull/67191) [ROCm][Muse Spark] Online MXFP4 target for the BF16 first/last-layer experts
- [#67153](https://github.com/vllm-project/vllm/pull/67153) [Perf][Frontend] Seed the fast detokenizer with a prompt tail, not the full prompt
- [#68049](https://github.com/vllm-project/vllm/pull/68049) [Model][LoRA] Enable LoRA for GTE (bert_with_rope) embedding and reranker models
- [#68533](https://github.com/vllm-project/vllm/pull/68533) [Bugfix][KV Cache] Don't size KV cache groups from draft-only sliding-window buckets
- [#64314](https://github.com/vllm-project/vllm/pull/64314) [Misc] Use torch 2.14 custom class API for LayerName registration
- [#63294](https://github.com/vllm-project/vllm/pull/63294) [EC Connector] Add ECTieringConnector filesystem tiering for encoder cache
- [#67174](https://github.com/vllm-project/vllm/pull/67174) [Bugfix][KV Connector] Fix MultiConnector handshake metadata routing
- [#67189](https://github.com/vllm-project/vllm/pull/67189) [Bugfix][Responses] Keep empty reasoning blocks in Responses output
- [#68296](https://github.com/vllm-project/vllm/pull/68296) [Model] Add HY4 Flash and multimodal support
- [#66951](https://github.com/vllm-project/vllm/pull/66951) [Bugfix][Spec Decode] Bound multi-module MTP re-prefill to valid request history
- [#67534](https://github.com/vllm-project/vllm/pull/67534) [CI] Enroll 8 CPU steps in automatic sharding
- [#64128](https://github.com/vllm-project/vllm/pull/64128) [CI] Enroll Entrypoints Integration (API Server) and Rust Frontend Serve/Admin in automatic sharding
- [#68208](https://github.com/vllm-project/vllm/pull/68208) [CI] Upload command spans first and give big job-end flushes more time
- [#68494](https://github.com/vllm-project/vllm/pull/68494) [CI] Move H100 fault tolerance E2E to nightly
- [#67995](https://github.com/vllm-project/vllm/pull/67995) [Multimodal] Allow disabling embed inputs per modality in `--limit-mm-per-prompt`
- [#63113](https://github.com/vllm-project/vllm/pull/63113) [Bugfix][Core] Drop streaming updates that would overflow max_model_len
- [#68526](https://github.com/vllm-project/vllm/pull/68526) [Perf][Ray] Kill RayExecutorV2 actors before joining the monitor thread
- [#68288](https://github.com/vllm-project/vllm/pull/68288) [Bugfix] Peek at the EngineCore exit status instead of reaping it in the liveness monitor
- [#66574](https://github.com/vllm-project/vllm/pull/66574) [Feature][KV Connector] Notify connectors after startup KV cache preparation
- [#66791](https://github.com/vllm-project/vllm/pull/66791) [Perf][Qwen4Exp] Fuse HyperConnection up projection and gate mix on SM90
- [#68200](https://github.com/vllm-project/vllm/pull/68200) [Multimodal] Pass placement with Omni embeddings to drop the audio-in-video host read
- [#67812](https://github.com/vllm-project/vllm/pull/67812) [Bugfix][Kernel] Apply beta after the K loop in chunk_scaled_dot_kkt
- [#63910](https://github.com/vllm-project/vllm/pull/63910) [ROCm][Perf][GLM-5.3-Flash] Drop int32/int64 copies in the kpool sparse indexer
- [#63544](https://github.com/vllm-project/vllm/pull/63544) [Perf][GLM-5.3-Flash] KDA decode and prefill through FlashInfer
- [#66717](https://github.com/vllm-project/vllm/pull/66717) [Quantization] Support ModelOpt INT8_PB_WO routed experts
- [#68480](https://github.com/vllm-project/vllm/pull/68480) [CI] Say when /ci rocm cache comes before the base image is pushed
- [#62728](https://github.com/vllm-project/vllm/pull/62728) [Frontend] Port the Muse Spark parsers to the streaming parser engine
- [#68376](https://github.com/vllm-project/vllm/pull/68376) [Bugfix] Fix GPU sync check failures in NemotronLabsDiffusion
- [#61690](https://github.com/vllm-project/vllm/pull/61690) [Feature] Add optional GPU timing to iteration metrics
- [#67335](https://github.com/vllm-project/vllm/pull/67335) [Feat] Support multiple structured-output backends on one server
- [#68484](https://github.com/vllm-project/vllm/pull/68484) [Structured Output] Simplify allocate_token_bitmask
- [#66158](https://github.com/vllm-project/vllm/pull/66158) [MoE][NVIDIA] Support MXFP4 experts on SM107 in flashinfer_moe_ep_cutedsl
- [#56074](https://github.com/vllm-project/vllm/pull/56074) [Bugfix][Core] Reject batch-sharded sampling with LoRA at startup
- [#62527](https://github.com/vllm-project/vllm/pull/62527) [ROCm][Test] Skip the AITER MoE alignment test where AITER isn't supported
- [#67156](https://github.com/vllm-project/vllm/pull/67156) [Bugfix] ParserEngine: scan for the tool name incrementally while streaming
- [#68019](https://github.com/vllm-project/vllm/pull/68019) [Quantization] Give linear kernels a common LinearKernel base class
- [#68487](https://github.com/vllm-project/vllm/pull/68487) [Recipe] MiniMax-M3.1-Flash: add H100 AgentX TP8 DSpark preset
- [#68486](https://github.com/vllm-project/vllm/pull/68486) [Recipe] MiniMax-M3.1-Flash: add H200 AgentX TP8 DSpark preset
- [#66011](https://github.com/vllm-project/vllm/pull/66011) [Bugfix][NIXL] Decline remote prefill reads after the producer's KV lease expired
- [#68211](https://github.com/vllm-project/vllm/pull/68211) [Frontend][DeepSeek-V4.1] Render tool search like deepseek-recipe
- [#67526](https://github.com/vllm-project/vllm/pull/67526) [Core] Log the backends each kind of layer selected after model load
- [#68359](https://github.com/vllm-project/vllm/pull/68359) [Bugfix][KV Offload] Report the final SWA tail in first_live_chunk_idx
- [#67916](https://github.com/vllm-project/vllm/pull/67916) [CI] Make the Nemotron GSM8K offload entries exercise the CPU reload
- [#66911](https://github.com/vllm-project/vllm/pull/66911) [ROCm][Recipe] Qwen3.8-Flash-Next: verify BF16 on MI325X with AITER
- [#68454](https://github.com/vllm-project/vllm/pull/68454) [Bugfix][ROCm][MiniMax-M3.1] Fix the decode glue crash with preshuffled MXFP8 weights
- [#64373](https://github.com/vllm-project/vllm/pull/64373) [Quantization][GLM-5.3] Let online quantization reach the BF16 attention projections

#### 🐛 New Issues
- [#68555](https://github.com/vllm-project/vllm/issues/68555) [CI Failure]: (MI355 DPX) Unlimited-OCR-2 - test_unlimited_ocr2_excess_markers_survive_preemption[ROCM_AITER_FA] `rocm` `ci-failure` 💬3
- [#68324](https://github.com/vllm-project/vllm/issues/68324) [Bug]: Incremental detokenizers drop a trailing U+FFFD at end of generation `bug` 💬3
- [#68341](https://github.com/vllm-project/vllm/issues/68341) [RFC]: Optional weight staging and trainer-managed pause for weight transfer engines `RFC` 💬2
- [#68316](https://github.com/vllm-project/vllm/issues/68316) [Bug]: Raw OOM with misleading hint when model weights nearly fill the GPU (lost "not enough GPU memory" message) `bug` `quantization` 💬2
- [#68561](https://github.com/vllm-project/vllm/issues/68561) [Bug]: HiSparse + DSpark (shared draft KV) crashes in extend_kv_cache: KeyError in bind_kv_caches for host-resident target layer `bug` `hisparse` 💬1
- [#68523](https://github.com/vllm-project/vllm/issues/68523) [Bug]: Gemma 4 NVFP4 with FP8 KV cache does not start on B300 with v0.34.0 (missing TRTLLM-GEN context kernel for head_dim 512; FlashInfer FP8-query assert when TRT-LLM attention is off) 💬1
- [#68544](https://github.com/vllm-project/vllm/issues/68544) [ROCm] [MonoKernel] Current Model MonoKernel Tracking `rocm` `kimi` 💬1
- [#68492](https://github.com/vllm-project/vllm/issues/68492) [Bug]: Model Runner V2 dies with cudaErrorContained when the GPU cannot read large pinned host buffers via UVA (M-RoPE prefill positions) 💬1
- [#68443](https://github.com/vllm-project/vllm/issues/68443) [Performance]: FA2 prefill uses a tile that fits one CTA/SM on 100 KB-smem GPUs (SM86/89/12x); num_splits=1 is 5-60% faster `performance` 💬1
- [#68424](https://github.com/vllm-project/vllm/issues/68424) [Bug]: stop strings silently ignored when no tokenizer is loaded `bug` 💬1
- [#68433](https://github.com/vllm-project/vllm/issues/68433) [Bug]: enabling OTLP tracing with offline LLM default statistics settings crashes request completion `bug` 💬1
- [#68438](https://github.com/vllm-project/vllm/issues/68438) [Bug]: unsupported flash_attn_version reaches attention forward and fails with a version-not-detected assertion `bug` 💬1
- [#68431](https://github.com/vllm-project/vllm/issues/68431) [Bug]: cudagraph_copy_inputs reuses an incompatible static buffer and crashes phi-2 initialization `bug` 💬1
- [#68411](https://github.com/vllm-project/vllm/issues/68411) [Bug]: apply_top_k_top_p_triton keeps the whole row when top-p normalization underflows `bug` 💬1
- [#68416](https://github.com/vllm-project/vllm/issues/68416) [Bug]: recurrent delta-rule kernels read the wrong state slots for strided index tables `bug` 💬1
- [#68415](https://github.com/vllm-project/vllm/issues/68415) [Bug]: fused_recurrent_kda allocates the wrong output shape when key and value sizes differ `bug` `kimi` 💬1
- [#68414](https://github.com/vllm-project/vllm/issues/68414) [Bug]: chunk_gated_delta_rule skips every sequence after a zero-length sequence in cu_seqlens `bug` 💬1
- [#68410](https://github.com/vllm-project/vllm/issues/68410) Triton backend rejects fp8_per_token_head KV cache on SM 8.x: the guard is one dtype predicate too wide `quantization` 💬1
- [#68413](https://github.com/vllm-project/vllm/issues/68413) [Bug]: decode_attention_fwd reads the wrong KV head when the GQA group is above 16 and not a multiple of 16 `bug` 💬1
- [#68412](https://github.com/vllm-project/vllm/issues/68412) [Bug]: causal_conv1d_fn writes before the state tensor for pad_slot_id=-1 `bug` 💬1
- [#68380](https://github.com/vllm-project/vllm/issues/68380) [Feature]: HY4 Flash on compute capability 12 (DGX Spark, RTX PRO 6000 Blackwell) and ModelOpt NVFP4 experts `quantization` 💬1
- [#68312](https://github.com/vllm-project/vllm/issues/68312) [ROCm][AMD] MiniMax-M3.1-Flash gfx950 / MI355X Performance Optimization (vLLM) `rocm` `minimax` 💬1
- [#68573](https://github.com/vllm-project/vllm/issues/68573) [Feature]: Add before/after model-load hooks for worker extensions `feature request`
- [#68546](https://github.com/vllm-project/vllm/issues/68546) [RFC]: Adaptive admission for RL rollout batches under KV pressure
- [#68549](https://github.com/vllm-project/vllm/issues/68549) [RFC]: Reuse-Prioritized LRU for Sparse KV Offloading `RFC`
- [#68542](https://github.com/vllm-project/vllm/issues/68542) [Feature]: FP32 pooling probabilities independently of head_dtype `pooling`
- [#68536](https://github.com/vllm-project/vllm/issues/68536) [RFC]: Add Time-to-Live (TTL) / Idle Eviction for GPU Prefix Cache `RFC` `kv-cache-manager`
- [#68428](https://github.com/vllm-project/vllm/issues/68428) [Feature]: Name every uncached item in the multimodal cache-miss error `multi-modality`
- [#68435](https://github.com/vllm-project/vllm/issues/68435) [Bug]: inactive ECTransferConfig is accepted but the scheduler unconditionally creates an EC connector `bug` `scheduler`
- [#68434](https://github.com/vllm-project/vllm/issues/68434) [Bug]: lm-format-enforcer integration imports a removed vLLM tokenizer module and incorrectly reports vLLM as missing `bug` `structured-output`
- [#68436](https://github.com/vllm-project/vllm/issues/68436) [Bug]: /v1/completions rejects "n": null and /v1/responses rejects "service_tier": null, though both are nullable in the OpenAI spec
- [#68427](https://github.com/vllm-project/vllm/issues/68427) [Bug]: compressed-tensors on a checkpoint without metadata raises an internal constructor TypeError `bug` `quantization`
- [#68381](https://github.com/vllm-project/vllm/issues/68381) [Bug]: Models without KV cache crash or return wrong embeddings when one step exceeds ~110k tokens (int32 indexing in torch.compile) `torch.compile`
- [#68372](https://github.com/vllm-project/vllm/issues/68372) [Usage]: What is the supported contract for layerwise KV cache loading? `usage`
- [#68370](https://github.com/vllm-project/vllm/issues/68370) [Bug]: First start with a cold Triton cache loses about 2.2 GiB of KV cache per GPU (autotune candidates raise the CUDA thread stack limit)
- [#68360](https://github.com/vllm-project/vllm/issues/68360) [RFC]: Near-Native Deterministic Serving on Hopper via Native Dispatch, Length-Keyed Split-KV, and KV Obligation Admission
- [#68343](https://github.com/vllm-project/vllm/issues/68343) [Bug][Rust Frontend] NIXL metrics silently dropped due to Python/Rust NixlStats schema mismatch (9 vs 7 fields) `bug` `kv-connector` `rust`
- [#68338](https://github.com/vllm-project/vllm/issues/68338) [Bug]: with the default bf16 SSM state cache, Falcon-H1-7B decode drifts from its own prefill (13–16× the fp32-cache gap at 2–4k tokens) and samples longer outputs; an fp32 state cache removes it (−5 % decode throughput, 2× SSM state memory) `quantization`
- [#68336](https://github.com/vllm-project/vllm/issues/68336) [Compatibility] Qwen3.6 MoE CT INT4 checkpoint stores a packed `shared_expert_gate`, but vLLM expects `weight` `quantization`
- [#68322](https://github.com/vllm-project/vllm/issues/68322) [Feature]: Add reasoning_content for message output content `feature request` `tool-calling`
- [#68305](https://github.com/vllm-project/vllm/issues/68305) [Bug]: Gemma 4 E4B recipe's chat template adds an empty thought channel, and E4B writes its reasoning into content `tool-calling`

#### 🔒 Closed Issues
- [#41373](https://github.com/vllm-project/vllm/issues/41373) [Installation]: GH200 nodes
- [#55152](https://github.com/vllm-project/vllm/issues/55152) [Bug]: guidance backend rejects tool-calling structural tags (KeyError: 'triggers') — strict/required/named tool_choice broken
- [#65193](https://github.com/vllm-project/vllm/issues/65193) [Bug][Quantization] MXFP8 linear kernel selection ignores the requested activation scheme — weight-only (W8A16) checkpoints silently run W8A8
- [#65385](https://github.com/vllm-project/vllm/issues/65385) [Bug]: GDN Triton/FLA prefill gives wrong, non-deterministic results on Hopper (H20) with triton 3.6: `chunk_scaled_dot_kkt_fwd` autotune configs with BK < K and num_warps >= 4 are broken
- [#66009](https://github.com/vllm-project/vllm/issues/66009) [Bug]: NixlConnector consumer reads remote KV after the producer lease expired and the blocks were recycled (silent KV corruption, NaN logits, illegal memory access)
- [#58657](https://github.com/vllm-project/vllm/issues/58657) Use-case proposal: payment-gated self-hosted vLLM for agents (HTTP 402 + Nano)
- [#66886](https://github.com/vllm-project/vllm/issues/66886) [Bug]: MultiModuleMTPSpeculator Leaks Stale Request State into New Draft Contexts
- [#62707](https://github.com/vllm-project/vllm/issues/62707) [Bug]: v0.25.1 streaming input beyond max_model_len produces negative scheduled token counts and crashes V2 runner
- [#61478](https://github.com/vllm-project/vllm/issues/61478) [Feature]: TTL-based Eviction for KV Cache Blocks
- [#56068](https://github.com/vllm-project/vllm/issues/56068) [Bug]: --enable-lora + --enable-batch-sharded-sampling crashes at the first sampling step (no startup validation)
- [#55994](https://github.com/vllm-project/vllm/issues/55994) [Bug][Rust Frontend] : /v1/chat/completions/render (and scale-out routes) return 404
- [#66377](https://github.com/vllm-project/vllm/issues/66377) [Bug]: Async EPLB worker asserts `device_index is not None` on Ascend NPU
- [#68428](https://github.com/vllm-project/vllm/issues/68428) [Feature]: Name every uncached item in the multimodal cache-miss error
- [#68152](https://github.com/vllm-project/vllm/issues/68152) [Feature]: Pass multimodal embeddings to NemotronH MTP for consistency with other drafters
- [#66239](https://github.com/vllm-project/vllm/issues/66239) [Bug][KV Offload] FS tier reports EIO instead of ENOSPC when the disk fills

### SGLang (`sgl-project/sglang`)

**Stars:** 39,044 · **Open issues:** 6,924 · **Last push:** <1h ago

On November 19, 2026, there were no new releases for SGLang, but several important changes were merged. Key updates included improvements in the Diffusion documentation clarifying image edit inputs and URL responses, as well as a fix to ensure the system exits nonzero when generate produces no results. Significant feature enhancements were made for unified-memory support with NIXL and Intel XPU in the EPD multimodal encoder path. Additionally, a new recipe for the RTX PRO 6000 was added to the DeepSeek-V4.1 cookbook. Among new issues, a notable bug was reported regarding degraded outputs with the DeepSeek-V2-Lite model when using fp8 KV cache, raising potential concerns for users relying on this configuration.

#### ✅ Merged PRs
- [#51358](https://github.com/sgl-project/sglang/pull/51358) [Doc] Diffusion: clarify image edit inputs and URL responses
- [#51361](https://github.com/sgl-project/sglang/pull/51361) [Doc] Diffusion: note Pi0.5 tokenizer access prerequisite
- [#51362](https://github.com/sgl-project/sglang/pull/51362) [Fix] Diffusion: exit nonzero when generate produces no results
- [#50767](https://github.com/sgl-project/sglang/pull/50767) [Feat] disaggregation: Support unified-memory PD with NIXL
- [#51410](https://github.com/sgl-project/sglang/pull/51410) [Doc] cookbook: Add an RTX PRO 6000 recipe for DeepSeek-V4.1
- [#51318](https://github.com/sgl-project/sglang/pull/51318) [Perf] diffusion: Serialize image responses with pybase64 and orjson
- [#47961](https://github.com/sgl-project/sglang/pull/47961) [Feat] [Intel] disaggregation: Support Intel XPU in the EPD multimodal encoder path
- [#49790](https://github.com/sgl-project/sglang/pull/49790) [Fix] [NPU] qwen3_5_mtp: adapt mtp.fc quantization as ReplicatedLinear
- [#51235](https://github.com/sgl-project/sglang/pull/51235) [Doc] Deepseekv4: modify dsv4 npu best practice
- [#49275](https://github.com/sgl-project/sglang/pull/49275) [Perf] [NVIDIA] quantization: Add tuned channelwise FP8 GEMM tile configs for RTX PRO 5000
- [#50220](https://github.com/sgl-project/sglang/pull/50220) [Test] [AMD] sana-video2: Skip the BF16 softmax attention test when the build is not CUDA
- [#50490](https://github.com/sgl-project/sglang/pull/50490) [CI] [AMD] nightly-benchmark: Run InferenceX's AgentX Kimi-K3.1-Pro MXFP4 DFlash curve on MI35x
- [#46499](https://github.com/sgl-project/sglang/pull/46499) [Feat] UnifiedL3: support mooncake storage backend
- [#46953](https://github.com/sgl-project/sglang/pull/46953) [Feat] weight_cache: Add the vmm_fd transport
- [#50440](https://github.com/sgl-project/sglang/pull/50440) [Fix] diffusion/qwen-image: Stream the DiT in auto mode when it does not fit the GPU
- [#45261](https://github.com/sgl-project/sglang/pull/45261) [Fix] [NVIDIA] deepseek_v4: Start DeepSeek-V4.1 on SM12x with TP8/EP8 defaults
- [#36088](https://github.com/sgl-project/sglang/pull/36088) [Fix] [AMD] distributed: Fix custom AR capture for DSA DP dual graphs
- [#51368](https://github.com/sgl-project/sglang/pull/51368) [CI] release: Run weekly, Arm64, MUSA and PPU suites on release branch cut, and test the cut branch
- [#51376](https://github.com/sgl-project/sglang/pull/51376) [cherrypick from #50126] [Perf] tokenizer: Return output sampling masks as flat arrays on request
- [#51120](https://github.com/sgl-project/sglang/pull/51120) [CI] sgl-router: Build a dispatched release from the router-v<version> tag, not a branch
- [#51311](https://github.com/sgl-project/sglang/pull/51311) [Fix] kimi-k3: Read load_format through the model namespace accessor
- [#51357](https://github.com/sgl-project/sglang/pull/51357) [Doc] ci: Add OSS CI Hub usage notice
- [#49748](https://github.com/sgl-project/sglang/pull/49748) [Feat] rust-server: The stateless /v1/responses API over the chat route
- [#49744](https://github.com/sgl-project/sglang/pull/49744) [Feat] rust-server: The Anthropic Messages API over HTTP and gRPC
- [#49747](https://github.com/sgl-project/sglang/pull/49747) [Feat] rust-server: Vertex and SageMaker generation wrappers, PUT /generate and slashed model ids
- [#49746](https://github.com/sgl-project/sglang/pull/49746) [Feat] rust-server: /v1/score, and the embeddings, classify, rerank and tokenize schema
- [#49745](https://github.com/sgl-project/sglang/pull/49745) [Feat] api: The OpenAI completions and chat completions schema and gRPC surface
- [#51038](https://github.com/sgl-project/sglang/pull/51038) [Fix] scheduler: Publish load on every idle batch result under DP attention
- [#50851](https://github.com/sgl-project/sglang/pull/50851) [Fix] rust-server: Report meta_info.dp_rank as null without data parallelism, as the Python server does
- [#50831](https://github.com/sgl-project/sglang/pull/50831) [Feat] rust-server: Record sglang:spec_verify_calls_total in the Rust frontend
- [#50854](https://github.com/sgl-project/sglang/pull/50854) [Fix] rust-server: Time the latency metrics from an HTTP layer's request start
- [#50832](https://github.com/sgl-project/sglang/pull/50832) [Feat] rust-server: Record on a generate request when it was handed to the scheduler
- [#50952](https://github.com/sgl-project/sglang/pull/50952) [Chore] rust-server: Update the known-gap reason for per-request speculative-decoding stats
- [#50853](https://github.com/sgl-project/sglang/pull/50853) [Feat] disaggregation: Report a full decode host pool and landed host-staged transfers in /v1/loads
- [#49743](https://github.com/sgl-project/sglang/pull/49743) [Feat] rust-server: The Ollama routes over HTTP and gRPC
- [#49742](https://github.com/sgl-project/sglang/pull/49742) [Feat] rust-server: configure_logging, the dumper routes, the HiCache L3 layout and elastic EP state
- [#49741](https://github.com/sgl-project/sglang/pull/49741) [Feat] rust-server: /open_session, /close_session and session_params on generate
- [#49740](https://github.com/sgl-project/sglang/pull/49740) [Feat] rust-server: External corpus routes for NGRAM speculative decoding
- [#49739](https://github.com/sgl-project/sglang/pull/49739) [Feat] rust-server: /parse_function_call and /separate_reasoning
- [#49737](https://github.com/sgl-project/sglang/pull/49737) [Feat] rust-server: pd_role_switch and update_weight_version over the model-facts cache
- [#49738](https://github.com/sgl-project/sglang/pull/49738) [Feat] rust-server: Weight reads, update groups, weight updates and LoRA refusals
- [#49736](https://github.com/sgl-project/sglang/pull/49736) [Feat] rust-server: set_internal_state, profiling, expert distribution, slow_down and memory occupation controls
- [#49735](https://github.com/sgl-project/sglang/pull/49735) [Feat] rust-server: Pause and continue generation, freeze_gc, ping and ready, and the frontend state
- [#49734](https://github.com/sgl-project/sglang/pull/49734) [Feat] api-codegen: Tagged payload presence rules and multi-arm untagged lists
- [#51080](https://github.com/sgl-project/sglang/pull/51080) [Perf] attention: Launch the qk-norm, KV-prepare and gate kernels with PDL
- [#50611](https://github.com/sgl-project/sglang/pull/50611) [Fix] minimax_h3: Keep the projected AdaLN LoRA in the adapter dtype
- [#50727](https://github.com/sgl-project/sglang/pull/50727) [CI] [AMD] spur: Stop the log streamer's SIGPIPE from cancelling healthy jobs
- [#50842](https://github.com/sgl-project/sglang/pull/50842) [Feat] kimi-k3: DWDP for KDA and shared-expert weights on PD prefill

#### 🐛 New Issues
- [#51278](https://github.com/sgl-project/sglang/issues/51278) [Bug] [AMD] aiter MLA decode: DeepSeek-V2-Lite outputs degrade with fp8 KV cache when SGLANG_AITER_MLA_PERSIST=0 💬2
- [#51218](https://github.com/sgl-project/sglang/issues/51218) [Bug] Legacy HTTP P/D router truncates SSE when a tool argument contains data: [DONE] 💬1
- [#51383](https://github.com/sgl-project/sglang/issues/51383) [Feature] [RFC] diffusion: Cold start in about 20 s for diffusion models (MiniMax-H3 80 → 20 s; same PRs on Wan 2.1 and LTX-2.5) 💬1
- [#51223](https://github.com/sgl-project/sglang/issues/51223) [Bug] /v1/responses subtracts 2 from max_output_tokens and rejects max_output_tokens=1 💬1
- [#51188](https://github.com/sgl-project/sglang/issues/51188) [Bug] [Diffusion] Host pin budget OOM-kills MiniMax-H3 on a 24 GB GPU + 32 GB host; server still reports ready and returns 503 💬1
- [#51184](https://github.com/sgl-project/sglang/issues/51184) [Bug] CUDA graph replay returns degenerate output (all token id 0) on sm_120 with NVFP4 + tilelang DSA + Mamba hybrid 💬1
- [#51395](https://github.com/sgl-project/sglang/issues/51395) [Bug] [NVIDIA] DSA `fast_topk_v2` changes output order across processes and makes sparse attention non-reproducible
- [#51385](https://github.com/sgl-project/sglang/issues/51385) [Feature] RFC: batched O_DIRECT (io_uring) row reader for the file-backed Qwen4-Exp PLE table
- [#51359](https://github.com/sgl-project/sglang/issues/51359) [Feature] [AMD] gfx1151: Run the Quark TokenPLE UINT4 checkpoint (amd/Qwen3.8-Flash-Next-Quark-TokenPLE-AWQ-UINT4)
- [#51333](https://github.com/sgl-project/sglang/issues/51333) [Tracking] Rust API stack #49748: weight-update safety, parity fixes, and shared API design
- [#51316](https://github.com/sgl-project/sglang/issues/51316) [Feature] api.v1: metadata-only media items on a P/D decode request
- [#51315](https://github.com/sgl-project/sglang/issues/51315) [Feature] api.v1: check the render fingerprint of the caller on Generate
- [#51308](https://github.com/sgl-project/sglang/issues/51308) [Bug] detokenizer: a token-id prompt that ends mid-character drops generated characters with byte-fallback tokenizers (Gemma-4)
- [#51275](https://github.com/sgl-project/sglang/issues/51275) [Bug] dsv41: Candidate graph variants can differ across attention-DP ranks (decode and DSpark verify)
- [#51271](https://github.com/sgl-project/sglang/issues/51271) [Bug] gc: Long-GC warning hook walks the whole heap three times inside the GC callback
- [#51208](https://github.com/sgl-project/sglang/issues/51208) [Perf][NVIDIA] GDN decode on SM120 stays on Triton by default and reaches only ~23% of the bandwidth roofline; flashinfer already ships cc=120 fused decode kernels
- [#51175](https://github.com/sgl-project/sglang/issues/51175) Speculative state reservation on hybrid-GDN targets scales with draft length; a block-16 draft does not fit on 72 GB

#### 🔒 Closed Issues
- [#32657](https://github.com/sgl-project/sglang/issues/32657) [RFC] A Unified KV-Cache Sparsity Framework for Post-Hoc Sparse Attention
- [#36840](https://github.com/sgl-project/sglang/issues/36840) TBO unreachable for GLM-5.3-Flash (DSA+mamba hybrid): silent --enable-dp-attention reset + missing Glm5NextDecoderLayer strategy
- [#39125](https://github.com/sgl-project/sglang/issues/39125) [Bug / Security] Potential DFA state explosion and CPU thread hanging in JSON Schema grammar compilation under deeply nested schemas
- [#40285](https://github.com/sgl-project/sglang/issues/40285) [Bug] glm5_next: MTP layer (layers.45) not skipped for 'model.language_model.*' names — local-inference-lab/GLM-5.3-Flash-NVFP4 (MXFP8 MTP experts) fails to load with a w2 shape mismatch
- [#40286](https://github.com/sgl-project/sglang/issues/40286) [Bug] GLM-5.3-Flash has no usable DSA attention backend on SM121 (DGX Spark): trtllm SM100-only, tilelang exceeds dynamic smem, triton ROCm-only, flashinfer_sparse_mla gated to GlmMoeDsa archs
- [#40305](https://github.com/sgl-project/sglang/issues/40305) [Feature] Make SGLANG_DEBUG_MEMORY_POOL effective on the default page_size=1 allocator

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 135,626 · **Open issues:** 2,614 · **Last push:** 2h ago

On November 19, 2026, llama.cpp saw the release of several updates, notably version b12531, which introduced support for the VoxCPM2 model and included various performance improvements and fixes. Additionally, version b12530 enhanced WebAssembly with relaxed SIMD support, also achieving several code optimizations. Key merged features include the fix for sticky NaN in recurrent states in pull request #31913 and a server-side fix for sleep state issues (#32567). The day also brought attention to a critical new issue (#32541) where the server crashes if a sleeping state occurs when a client connects to the /v1/realtime endpoint, highlighting ongoing challenges in stability for real-time interactions.

#### 🚀 New Releases
- [b12531](https://github.com/ggml-org/llama.cpp/releases/tag/b12531) b12531
- [b12530](https://github.com/ggml-org/llama.cpp/releases/tag/b12530) b12530
- [b12529](https://github.com/ggml-org/llama.cpp/releases/tag/b12529) b12529
- [b12528](https://github.com/ggml-org/llama.cpp/releases/tag/b12528) b12528
- [b12527](https://github.com/ggml-org/llama.cpp/releases/tag/b12527) b12527
- [b12521](https://github.com/ggml-org/llama.cpp/releases/tag/b12521) b12521
- [b12503](https://github.com/ggml-org/llama.cpp/releases/tag/b12503) b12503
- [b12502](https://github.com/ggml-org/llama.cpp/releases/tag/b12502) b12502
- [b12500](https://github.com/ggml-org/llama.cpp/releases/tag/b12500) b12500
- [b12499](https://github.com/ggml-org/llama.cpp/releases/tag/b12499) b12499

#### ✅ Merged PRs
- [#32443](https://github.com/ggml-org/llama.cpp/pull/32443) mtmd: support voxcpm2
- [#19590](https://github.com/ggml-org/llama.cpp/pull/19590) WASM Relaxed SIMD Enhancement
- [#31913](https://github.com/ggml-org/llama.cpp/pull/31913) llama : fix sticky NaN in recurrent state
- [#32567](https://github.com/ggml-org/llama.cpp/pull/32567) server: fix sleep state for v1/realtime
- [#32562](https://github.com/ggml-org/llama.cpp/pull/32562) limite : bound n_layer * n_mudd_taps to prevent out-of-bounds read on load
- [#31966](https://github.com/ggml-org/llama.cpp/pull/31966) ui : keep streaming reasoning box inside the viewport when zoomed
- [#32548](https://github.com/ggml-org/llama.cpp/pull/32548) ggml, ci : use llvm 22.1.8
- [#32563](https://github.com/ggml-org/llama.cpp/pull/32563) vendor : update cpp-httplib-0.67.0
- [#32553](https://github.com/ggml-org/llama.cpp/pull/32553) server : enable packing for d1-2B and d1-Omni-2B models
- [#32071](https://github.com/ggml-org/llama.cpp/pull/32071) model:add Zaya1 8B (Zyphra)
- [#30672](https://github.com/ggml-org/llama.cpp/pull/30672) [CUDA] : Add SKU-aware FP16/BF16 accumulation precision gating for NVIDIA GPUs
- [#32535](https://github.com/ggml-org/llama.cpp/pull/32535) webgpu: (fix CI) allow the FA mask to be broadcast over the Q batch
- [#32514](https://github.com/ggml-org/llama.cpp/pull/32514) ggml-cpu : use all threads for large GET_ROWS
- [#32544](https://github.com/ggml-org/llama.cpp/pull/32544) ui: install @ggml-org/llama-brand from npm
- [#32543](https://github.com/ggml-org/llama.cpp/pull/32543) ui: llama-chat publish drops the registry check, bin paths without ./
- [#32495](https://github.com/ggml-org/llama.cpp/pull/32495) gguf-py : fix tensor offset overflow in GGUFReader
- [#32527](https://github.com/ggml-org/llama.cpp/pull/32527) ui: hide Models and MCP behind settings, off by default
- [#32538](https://github.com/ggml-org/llama.cpp/pull/32538) ui: soften the tool permission card border and show the split-button divider in dark mode
- [#32524](https://github.com/ggml-org/llama.cpp/pull/32524) ui: run Llama Chat with npx @ggml-org/llama-chat
- [#29539](https://github.com/ggml-org/llama.cpp/pull/29539) Add LLAMA_MOE_RANDOM_ROUTING=1 for benchmark-only random expert selection
- [#32507](https://github.com/ggml-org/llama.cpp/pull/32507) server: fix transcription prompt for v1/realtime
- [#32525](https://github.com/ggml-org/llama.cpp/pull/32525) ui: run the Storybook deploy on HF Jobs, with a token that can write the Space
- [#31070](https://github.com/ggml-org/llama.cpp/pull/31070) unicode : add continuation check lambda
- [#32454](https://github.com/ggml-org/llama.cpp/pull/32454) cuda : fuse NORM + MUL (+ ADD)
- [#30962](https://github.com/ggml-org/llama.cpp/pull/30962) vocab : extract bpe_rank loading into function
- [#32202](https://github.com/ggml-org/llama.cpp/pull/32202) vulkan: add bfloat16 support to various ops
- [#32523](https://github.com/ggml-org/llama.cpp/pull/32523) ui: Storybook follow-ups: generated DESIGN.md tokens, shared helpers and one Llama Mono
- [#31352](https://github.com/ggml-org/llama.cpp/pull/31352) cuda : increase Pascal DP4A MMQ I tile for J=64
- [#32172](https://github.com/ggml-org/llama.cpp/pull/32172) ggml-openvino: expand model support, optimize NPU,GPU and memory usage
- [#32504](https://github.com/ggml-org/llama.cpp/pull/32504) CUDA: use MMQ for MoE on V100
- [#32485](https://github.com/ggml-org/llama.cpp/pull/32485) ui: a Storybook for Llama UI and Llama Chat
- [#32492](https://github.com/ggml-org/llama.cpp/pull/32492) cuda: decode the conv2d patch indices with fastdiv
- [#30824](https://github.com/ggml-org/llama.cpp/pull/30824) vulkan: run rms_norm with a runtime loop count

#### 🐛 New Issues
- [#32541](https://github.com/ggml-org/llama.cpp/issues/32541) Misc. bug: server crashes if a sleeping when client connects to /v1/realtime `bug-unconfirmed` 💬3
- [#32526](https://github.com/ggml-org/llama.cpp/issues/32526) spec: draft-dflash broken on the docs example pair (Qwen3-4B + z-lab/Qwen3-4B-DFlash-b16): acceptance ~6% instead of ~85%, greedy output divergence, ~5x slower 💬3
- [#32560](https://github.com/ggml-org/llama.cpp/issues/32560) Eval bug: Qwen3.8-Flash-Next draft-mtp + --kv-unified + -np 8 on HIP (W7900): GPU memory access fault when an LCP-reused slot and an LRU-cleared slot start in the same batch (v1.0.0) 💬1
- [#32569](https://github.com/ggml-org/llama.cpp/issues/32569) Feature Request: [CPU] Add a 4-Column Repack (GEMV/GEMM) for Q2_0 `enhancement` 💬1
- [#32561](https://github.com/ggml-org/llama.cpp/issues/32561) Gemma 4 tool calls: the grammar refuses JSON-quoted values, so the model loops until the token cap 💬1
- [#32534](https://github.com/ggml-org/llama.cpp/issues/32534) ROCm Windows large MoE crash after 4 GiB host buffer limit; `bug-unconfirmed`
- [#32584](https://github.com/ggml-org/llama.cpp/issues/32584) Crash loading cohere2moe model with --moe-cache-mib and KV cache q8_0 (0xC0000409) `bug-unconfirmed`
- [#32580](https://github.com/ggml-org/llama.cpp/issues/32580) Router-spawned model server crashes with 0xC0000409 in ucrtbase during long streaming generations on Windows
- [#32568](https://github.com/ggml-org/llama.cpp/issues/32568) Misc. bug: server: with parallel slots, some slots miss the checkpoint at the end of a shared system prompt and do not get it later `bug-unconfirmed`
- [#32556](https://github.com/ggml-org/llama.cpp/issues/32556) Feature Request: support Cloudflare/clef-omni on /v1/systemone
- [#32550](https://github.com/ggml-org/llama.cpp/issues/32550) Eval bug: Hang and OOM due to integer overflow in llama-grammar `bug-unconfirmed`
- [#32547](https://github.com/ggml-org/llama.cpp/issues/32547) Eval bug: qwen3 asr outputs `language English<asr_text>` prefix which clients do not expect and cannot handle `bug-unconfirmed`
- [#32539](https://github.com/ggml-org/llama.cpp/issues/32539) spam
- [#32537](https://github.com/ggml-org/llama.cpp/issues/32537) Eval bug: grep_search cannot retrieve matches beyond the first 100 results `bug-unconfirmed`

#### 🔒 Closed Issues
- [#24822](https://github.com/ggml-org/llama.cpp/issues/24822) Server: improve progress reporting
- [#29526](https://github.com/ggml-org/llama.cpp/issues/29526) [Bug] Vulkan backend: A770 long-running decode degradation (empty EOS replies) after ~7-8h
- [#27203](https://github.com/ggml-org/llama.cpp/issues/27203) Misc. bug: Overflow bypasing tensor dimension check
- [#28276](https://github.com/ggml-org/llama.cpp/issues/28276) Misc. bug: a restored slot state prevents the prompt cache lookup, so a longer cached state is never found
- [#29830](https://github.com/ggml-org/llama.cpp/issues/29830) Eval bug: llama-server recurrent state not cleared when it holds NaN, garbling future requests
- [#32541](https://github.com/ggml-org/llama.cpp/issues/32541) Misc. bug: server crashes if a sleeping when client connects to /v1/realtime
- [#32526](https://github.com/ggml-org/llama.cpp/issues/32526) spec: draft-dflash broken on the docs example pair (Qwen3-4B + z-lab/Qwen3-4B-DFlash-b16): acceptance ~6% instead of ~85%, greedy output divergence, ~5x slower
- [#29372](https://github.com/ggml-org/llama.cpp/issues/29372) Feature Request: split generation timings into reasoning and answer phases (rate and draft acceptance per phase)
- [#30007](https://github.com/ggml-org/llama.cpp/issues/30007) Eval bug: NemotronLabs-AI-for-Media-Sports-Tennis, loading issue
- [#32493](https://github.com/ggml-org/llama.cpp/issues/32493) Misc. bug: server: realtime transcription sessions drop the ASR instruction, so Gemma answers the audio instead of transcribing it
- [#29976](https://github.com/ggml-org/llama.cpp/issues/29976) Eval bug: llama-speculative tree mode aborts on missing logits
- [#29982](https://github.com/ggml-org/llama.cpp/issues/29982) Eval bug: Prompt processing speed halved with Muse Glimmer and dflash draft model after PR 28751
- [#30009](https://github.com/ggml-org/llama.cpp/issues/30009) vulkan: enable add_rms_fusion on Intel - test-backend-ops passes on Arc B580 (Xe2)
- [#30025](https://github.com/ggml-org/llama.cpp/issues/30025) Feature Request: Make mtmd_get_memory_usage suitable for C and FFI consumers
- [#30026](https://github.com/ggml-org/llama.cpp/issues/30026) Feature Request: Make llm_arch_supports_mixed_batch suitable for C and FFI consumers
- [#30811](https://github.com/ggml-org/llama.cpp/issues/30811) Misc. bug: Reasoning display scrolls in a weird way when the browser zoom is over 100%
- [#32069](https://github.com/ggml-org/llama.cpp/issues/32069) Feature Request: Support Zaya1 -8B Model
- [#32494](https://github.com/ggml-org/llama.cpp/issues/32494) Misc. bug: gguf-py GGUFReader reads incorrect tensor data after offset overflow
- [#32539](https://github.com/ggml-org/llama.cpp/issues/32539) spam
- [#30235](https://github.com/ggml-org/llama.cpp/issues/30235) CUDA: Pascal DP4A MMQ config uses I=64 for Q8_0; I=128 gives +12% pp512 on sm_61

### Ollama (`ollama/ollama`)

**Stars:** 187,565 · **Open issues:** 4,688 · **Last push:** 5h ago

On November 19, 2026, there were no new releases for Ollama; however, two important pull requests were merged. PR #19748 allows for sharing a single runner across different `shift` settings, while PR #19746 stabilizes the CI process by addressing a coverage issue with slow readers in speech. Among the new issues, #19765 highlights a significant bug related to silent truncation at 65,536 tokens when dealing with a context window of 147,456 tokens, which has raised concern in the community. Other notable new bugs include memory pressure on macOS due to large models (#19757) and the handling of duplicate GGUF keys (#19768).

#### ✅ Merged PRs
- [#19748](https://github.com/ollama/ollama/pull/19748) server, llm: share one runner across `shift` settings
- [#19746](https://github.com/ollama/ollama/pull/19746) CI flake: stabilize speech slow-reader coverage

#### 🐛 New Issues
- [#19765](https://github.com/ollama/ollama/issues/19765) Silent truncation at 65,536 tokens: 600k chars in, 65,538 tokens read, done_reason=stop, context window was 147,456 💬3
- [#19757](https://github.com/ollama/ollama/issues/19757) macOS: qwen3.8:27b with partial offload plans 18,306 MiB, llama-server reaches 21G and a 24 GB Mac hits critical memory pressure 💬3
- [#19751](https://github.com/ollama/ollama/issues/19751) app/ui: numbered lists rendered during real-time thinking get cut off `bug` `app` 💬2
- [#19771](https://github.com/ollama/ollama/issues/19771) HIGH CVE vulnerabilities reported in ollama gobinary
- [#19768](https://github.com/ollama/ollama/issues/19768) Duplicate GGUF keys are accepted and the two readers disagree (first-wins vs last-wins)
- [#19767](https://github.com/ollama/ollama/issues/19767) Qwen3.8 (qwen35): two agent sessions on the default single slot re-read every prompt from token 0; parallel slots lose part of the prompt cache `bug`
- [#19762](https://github.com/ollama/ollama/issues/19762) Qwen 3.8 system messages moved to start because of template error but Ollama never uses the template `bug`
- [#19759](https://github.com/ollama/ollama/issues/19759) Opt-in way to fail a model load instead of retrying with CPU projector offload `feature request`

#### 🔒 Closed Issues
- [#18950](https://github.com/ollama/ollama/issues/18950) Scheduler reloads the model when a request's `shift` differs from the loaded runner's; launch shift-capable and enforce `shift:false` per request instead
- [#19765](https://github.com/ollama/ollama/issues/19765) Silent truncation at 65,536 tokens: 600k chars in, 65,538 tokens read, done_reason=stop, context window was 147,456
- [#9720](https://github.com/ollama/ollama/issues/9720) Loading of models into main memory limited to 1-3GB even from fast storage media

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,512 · **Open issues:** 5,267 · **Last push:** <1h ago

Today, LiteLLM released version 1.109.2, which includes a backport of 16 merged fixes to the stable/1.109.x branch, enhancing overall stability. Significant changes in the merged pull requests include the ability for every key to read its own spend logs and the restoration of GPT-6.2 prompt caching, critical for maintaining message accuracy. Additionally, the testing framework was updated to better handle token usage in response to recent enhancements. Notably, a new bug was reported regarding priority routing groups, where deployment tpm limits are ignored, leading to early failover under usage-based-routing-v2, indicating ongoing challenges in resource management.

#### 🚀 New Releases
- [v1.109.2](https://github.com/BerriAI/litellm/releases/tag/v1.109.2) v1.109.2

#### ✅ Merged PRs
- [#52743](https://github.com/BerriAI/litellm/pull/52743) fix(responses): ignore dropped Messages placement parameters
- [#52510](https://github.com/BerriAI/litellm/pull/52510) fix(router): fall back by the group a pick was routed to, whatever fails after the reroute
- [#52509](https://github.com/BerriAI/litellm/pull/52509) refactor(router-core): hand the host to each routing call instead of keeping it on the router
- [#52223](https://github.com/BerriAI/litellm/pull/52223) feat(gateway): port the proxy's middleware onto the native app
- [#52754](https://github.com/BerriAI/litellm/pull/52754) test(auth): use the production cache in auth fixtures
- [#52739](https://github.com/BerriAI/litellm/pull/52739) fix(responses): restore GPT-6.2 prompt caching on /v1/messages with store:false on LTS 1.108
- [#52738](https://github.com/BerriAI/litellm/pull/52738) fix(responses): restore GPT-6.2 prompt caching on /v1/messages with store:false on 1.106 stable
- [#52449](https://github.com/BerriAI/litellm/pull/52449) feat(proxy)!: let every key read its own spend logs and return 403 for filters outside the caller's scope
- [#52229](https://github.com/BerriAI/litellm/pull/52229) feat(gateway): serve one native app in both modes, answering a master key caller's /v1/messages with it in front of Python
- [#52746](https://github.com/BerriAI/litellm/pull/52746) test(router): pin the clock in the usage-based-v2 RPM pre-call test
- [#52750](https://github.com/BerriAI/litellm/pull/52750) test(proxy): drain queued router accounting before comparing TPM sequences
- [#52749](https://github.com/BerriAI/litellm/pull/52749) build: refresh the Wolfi base image and bump litellm to 1.110.1 on stable/1.110.x
- [#52601](https://github.com/BerriAI/litellm/pull/52601) feat(customer-portal): show token usage and cache costs
- [#52748](https://github.com/BerriAI/litellm/pull/52748) chore: bump litellm-enterprise 0.1.86 -> 0.1.87, litellm-proxy-extras 0.4.117 -> 0.4.119, litellm 1.111.0 -> 1.112.0
- [#52717](https://github.com/BerriAI/litellm/pull/52717) fix(guardrails): check request body tool names next to function tools in tool_policy (lts/1.108.x)
- [#52413](https://github.com/BerriAI/litellm/pull/52413) fix(proxy): keep stored values under LITELLM_SALT_KEY when rotating the master key
- [#52742](https://github.com/BerriAI/litellm/pull/52742) test(bedrock): expect the fixed-sampling temperature message from #52341 in the Mantle wire test
- [#52741](https://github.com/BerriAI/litellm/pull/52741) fix(sap): accept list-shaped reasoning_content from Gemini 3.x
- [#52709](https://github.com/BerriAI/litellm/pull/52709) fix(logging): keep the resolved provider in both logged fields
- [#52720](https://github.com/BerriAI/litellm/pull/52720) ci: skip unit-core shards on test-only PRs
- [#52731](https://github.com/BerriAI/litellm/pull/52731) fix(chatgpt): preserve parallel_tool_calls and enforce Codex Responses-Lite contract
- [#52694](https://github.com/BerriAI/litellm/pull/52694) fix(responses): scope cacheable system input to stateless requests
- [#52599](https://github.com/BerriAI/litellm/pull/52599) fix(responses): send bridged system prompts as input messages so GPT-6.2 caches them
- [#52683](https://github.com/BerriAI/litellm/pull/52683) test: restore v1.109.1 system prompt expectations in two tests on stable/1.109.x
- [#52710](https://github.com/BerriAI/litellm/pull/52710) chore(model_prices): fill successor_model and deprecation_source for dated models
- [#52699](https://github.com/BerriAI/litellm/pull/52699) fix(cost-map): move azure/gpt-image-1.5 retirement to 2027-06-16 and add Codestral-2501 successor
- [#52609](https://github.com/BerriAI/litellm/pull/52609) ci(rust): run LiteLLM Rust DB on pushes to main only and cover release-line PRs
- [#52730](https://github.com/BerriAI/litellm/pull/52730) test(guardrails): give each Lakera outage burst call its own prompt
- [#52657](https://github.com/BerriAI/litellm/pull/52657) fix(responses): restore GPT-6.2 prompt caching for store:false on 1.111 RC
- [#52718](https://github.com/BerriAI/litellm/pull/52718) ci: reuse Rust bridge builds across PR pushes and refresh the Cargo cache
- [#52579](https://github.com/BerriAI/litellm/pull/52579) ci: stop running root entry limit on every PR
- [#52719](https://github.com/BerriAI/litellm/pull/52719) ci(unit): split core-router and core-auth-spend shards
- [#52715](https://github.com/BerriAI/litellm/pull/52715) chore(cost-map): add fal_ai speridlabs iris-z depth estimation rows
- [#52619](https://github.com/BerriAI/litellm/pull/52619) chore(cost-map): rolling registry audit 2026-11-18, Together/xAI/DeepSeek flags, Cohere limits, OpenRouter, Jina and Perplexity rows
- [#52687](https://github.com/BerriAI/litellm/pull/52687) chore(cost-map): price Cohere free-tier Command A Reasoning, Translate and Vision at zero
- [#52328](https://github.com/BerriAI/litellm/pull/52328) feat(messages): serve bedrock mantle messages on rust only
- [#52672](https://github.com/BerriAI/litellm/pull/52672) fix(ui): match Model Hub to the model catalog layout
- [#52707](https://github.com/BerriAI/litellm/pull/52707) fix(responses): bridge system prompts into input only when store is false on 1.109 stable
- [#52460](https://github.com/BerriAI/litellm/pull/52460) fix(proxy): skip prisma generate in the migration job when the prisma package is not writable
- [#52227](https://github.com/BerriAI/litellm/pull/52227) feat(gateway): verify the LiteLLM license once at boot
- [#52698](https://github.com/BerriAI/litellm/pull/52698) fix(responses): only send bridged system prompts as input when store is false on 1.106
- [#52621](https://github.com/BerriAI/litellm/pull/52621) fix(responses): cache bridged chat system prompts on lts/1.108.x
- [#52658](https://github.com/BerriAI/litellm/pull/52658) fix(responses): restore GPT-6.2 prompt caching on 1.110 stable
- [#52689](https://github.com/BerriAI/litellm/pull/52689) test(stable/1.109.x): update two stale system prompt test expectations
- [#52587](https://github.com/BerriAI/litellm/pull/52587) test(cost): add tier 1 cost tracking cases for gpt-6.2-sol, gpt-6.2-astra and azure_ai claude-opus-5-5
- [#52700](https://github.com/BerriAI/litellm/pull/52700) fix(gemini): drop logprobs on every model Google refuses them for
- [#52701](https://github.com/BerriAI/litellm/pull/52701) fix(proxy): count generateContent spend under its own endpoint
- [#52600](https://github.com/BerriAI/litellm/pull/52600) fix(proxy): release request bodies of failed calls without waiting for a full GC
- [#52686](https://github.com/BerriAI/litellm/pull/52686) test(perf): recalibrate the small-body Postgres statement ceiling
- [#52688](https://github.com/BerriAI/litellm/pull/52688) fix(proxy): cache customer app definition lookups
- [#52697](https://github.com/BerriAI/litellm/pull/52697) test(integration): expect the system prompt as the first Responses input message
- [#52419](https://github.com/BerriAI/litellm/pull/52419) fix(bedrock): send text.format.strict for GPT native structured output on Converse
- [#52432](https://github.com/BerriAI/litellm/pull/52432) fix(ollama): log missing prompt_eval_count through verbose_logger
- [#52635](https://github.com/BerriAI/litellm/pull/52635) feat(cost-map): add Databricks GPT-6.2 Astra and Sol Unity Gateway rows
- [#52693](https://github.com/BerriAI/litellm/pull/52693) test(responses): expect bridged system prompts as input messages in tests #52599 left stale
- [#52680](https://github.com/BerriAI/litellm/pull/52680) fix(azure-ai): send max_completion_tokens for GPT-5 Chat on Foundry
- [#52708](https://github.com/BerriAI/litellm/pull/52708) chore(cost-map): keep GovCloud Mantle Claude token counting in us-gov-west-1
- [#52706](https://github.com/BerriAI/litellm/pull/52706) test(prompt-templates): avoid exhausting recursion in regex coverage
- [#52523](https://github.com/BerriAI/litellm/pull/52523) perf(proxy): coalesce empty auto-router baseline recovery polls
- [#52704](https://github.com/BerriAI/litellm/pull/52704) feat(cost-map): add github_copilot/gemini-4-neon
- [#52685](https://github.com/BerriAI/litellm/pull/52685) test(auth): seed fallback budgets in the Rust repository fake
- [#52684](https://github.com/BerriAI/litellm/pull/52684) fix(proxy): backport #52005 and the slim UI image to stable/1.109.x
- [#52634](https://github.com/BerriAI/litellm/pull/52634) fix(cost-map): price fireworks_ai kimi-latest as Kimi K3.1 Pro
- [#52666](https://github.com/BerriAI/litellm/pull/52666) fix(anthropic): backport #47434 to lts/1.108.x
- [#52673](https://github.com/BerriAI/litellm/pull/52673) feat(proxy): report current budget-window spend on /user/info, /v2/user/info and /team/info
- [#50413](https://github.com/BerriAI/litellm/pull/50413) fix(guardrails): write rewritten tool_calls from the Generic Guardrail API back to the client
- [#52561](https://github.com/BerriAI/litellm/pull/52561) fix(router): backport #52461 to stable/1.109.x, do not retry a Responses stream after an output item reached the client
- [#52665](https://github.com/BerriAI/litellm/pull/52665) fix(responses): send bridged system prompts as input messages so GPT-6.2 caches them (stable/1.106.x backport of #52599)
- [#52671](https://github.com/BerriAI/litellm/pull/52671) test: stabilize the flaky prompt cache detector unit tests
- [#52622](https://github.com/BerriAI/litellm/pull/52622) fix(responses): log the resolved provider on Responses API calls
- [#52660](https://github.com/BerriAI/litellm/pull/52660) ci: fit the pull request gate into five minutes
- [#52514](https://github.com/BerriAI/litellm/pull/52514) fix(gemini): send minimal thinking to Nano and drop settings image models refuse
- [#52645](https://github.com/BerriAI/litellm/pull/52645) fix(voyage): honor VOYAGE_API_BASE for embeddings
- [#52654](https://github.com/BerriAI/litellm/pull/52654) fix(proxy): enforce a key's max_budget on custom auth requests
- [#52642](https://github.com/BerriAI/litellm/pull/52642) fix(docker): disable Prisma's update check so it stops leaving zombie processes
- [#52178](https://github.com/BerriAI/litellm/pull/52178) feat(auth): read projects, tags, access groups and object permissions through rust repositories
- [#52664](https://github.com/BerriAI/litellm/pull/52664) fix(responses): restore GPT-6.2 prompt caching on 1.109 stable
- [#52176](https://github.com/BerriAI/litellm/pull/52176) feat(auth): read teams, team memberships and organizations through rust repositories
- [#52170](https://github.com/BerriAI/litellm/pull/52170) feat(db): rust repositories for user, end user and budget auth objects
- [#52425](https://github.com/BerriAI/litellm/pull/52425) test(anthropic): cover adaptive thinking on tool turns under modify_params
- [#52617](https://github.com/BerriAI/litellm/pull/52617) fix(db): fail rust pool acquires at once on a refusing postgres, with #52532 integration follow-ups
- [#52655](https://github.com/BerriAI/litellm/pull/52655) fix(harness): surface Pi context compaction events
- [#52653](https://github.com/BerriAI/litellm/pull/52653) test(pricing): derive transcription charges from the cost map
- [#52652](https://github.com/BerriAI/litellm/pull/52652) test(management): isolate the seeded roster per test
- [#52650](https://github.com/BerriAI/litellm/pull/52650) test(configuration): initialize JSON startup databases before capture
- [#52616](https://github.com/BerriAI/litellm/pull/52616) fix(responses): prevent stream restarts after non-text output
- [#52427](https://github.com/BerriAI/litellm/pull/52427) fix(gateway-forward): keep x-litellm-api-key when the client names it in connection
- [#52648](https://github.com/BerriAI/litellm/pull/52648) feat(cost-map): add vertex_ai/gemini-4-neon
- [#52431](https://github.com/BerriAI/litellm/pull/52431) fix(groq): default service_tier when the reply omits it
- [#52631](https://github.com/BerriAI/litellm/pull/52631) docs(review): require live QA across shared translation routes
- [#52516](https://github.com/BerriAI/litellm/pull/52516) refactor(router): delete router code nothing calls
- [#52565](https://github.com/BerriAI/litellm/pull/52565) fix(bedrock): bill ConverseStream at the served tier
- [#52572](https://github.com/BerriAI/litellm/pull/52572) fix(gemini): bill cached input tokens on image generation
- [#52571](https://github.com/BerriAI/litellm/pull/52571) fix(cost): bill SVG authoring usage on OpenAI image responses
- [#52564](https://github.com/BerriAI/litellm/pull/52564) fix(tavily): price the search depth chosen automatically
- [#52640](https://github.com/BerriAI/litellm/pull/52640) feat(cost-map): add gemini/gemini-4-neon
- [#52597](https://github.com/BerriAI/litellm/pull/52597) fix(decisions): match OpenAI format answers to questions by name
- [#52615](https://github.com/BerriAI/litellm/pull/52615) fix(anthropic, bedrock): keep adaptive thinking when tool-call history has no thinking blocks
- [#52415](https://github.com/BerriAI/litellm/pull/52415) fix(datadog): send DD_TAGS on Datadog logs and LLM Observability spans
- [#51887](https://github.com/BerriAI/litellm/pull/51887) feat(model_armor): scan MCP tool results on post_mcp_call
- [#52496](https://github.com/BerriAI/litellm/pull/52496) feat(ui): list every application on the Applications sidebar page
- [#52608](https://github.com/BerriAI/litellm/pull/52608) feat(ui): improve customer budget editing and spend tables
- [#52592](https://github.com/BerriAI/litellm/pull/52592) fix(proxy): recover from a read replica reconnect that times out
- [#52605](https://github.com/BerriAI/litellm/pull/52605) fix(logging): redact generated images when message logging is turned off
- [#52492](https://github.com/BerriAI/litellm/pull/52492) feat(proxy): let an app set its own surcharge on customer requests
- [#52595](https://github.com/BerriAI/litellm/pull/52595) build(ui): run the UI image on slim nginx so it no longer ships curl [stable/1.110.x]
- [#52295](https://github.com/BerriAI/litellm/pull/52295) fix(proxy): apply a view-only Default Role to users with no stored role
- [#52524](https://github.com/BerriAI/litellm/pull/52524) fix(logging): stop keeping a full response copy nobody reads
- [#52614](https://github.com/BerriAI/litellm/pull/52614) fix(cost-map): set chatgpt/gpt-5.6 max_input_tokens to 922000 to match the openai rows
- [#52485](https://github.com/BerriAI/litellm/pull/52485) feat(proxy): let each app decide whether it may create unknown customers
- [#52461](https://github.com/BerriAI/litellm/pull/52461) fix(router): do not retry a Responses stream after an output item reached the client
- [#52570](https://github.com/BerriAI/litellm/pull/52570) fix(groq): restore Whisper transcription pricing
- [#52607](https://github.com/BerriAI/litellm/pull/52607) test(scim): give the group delete lock test two Prisma connections
- [#52433](https://github.com/BerriAI/litellm/pull/52433) test: turn off same-group retries in two stale Responses fallback tests on stable/1.109.x
- [#52594](https://github.com/BerriAI/litellm/pull/52594) ci: split the core router unit job into three
- [#52507](https://github.com/BerriAI/litellm/pull/52507) fix(ui): mark logging callbacks set in config.yaml and disable their delete
- [#52532](https://github.com/BerriAI/litellm/pull/52532) fix(integration): size rig pools for the rust connection share and stop the router importing the proxy
- [#52582](https://github.com/BerriAI/litellm/pull/52582) ci: run a core set of unit, lint and smoke jobs on pull requests and the rest on main
- [#52493](https://github.com/BerriAI/litellm/pull/52493) feat(ui): expose customer and app TPM/RPM budget limits
- [#52477](https://github.com/BerriAI/litellm/pull/52477) feat(customer portal): set budgets per customer and gateway app
- [#52563](https://github.com/BerriAI/litellm/pull/52563) feat(ui): offer Lens in the workspace switcher in place of Moyai
- [#52476](https://github.com/BerriAI/litellm/pull/52476) fix(azure_ai): backport model router native Responses on a Foundry project base to lts/1.108.x
- [#52574](https://github.com/BerriAI/litellm/pull/52574) fix(ui): recognize Bedrock ca. and in. inference profiles in auto router setup
- [#52406](https://github.com/BerriAI/litellm/pull/52406) feat(proxy): add a surcharge on customer requests
- [#52093](https://github.com/BerriAI/litellm/pull/52093) feat(vector_stores): add YAML-configured unified search fallbacks
- [#52467](https://github.com/BerriAI/litellm/pull/52467) feat(proxy): configure customer identity headers
- [#52474](https://github.com/BerriAI/litellm/pull/52474) fix(azure_ai)!: call Responses natively for a model router on a Foundry project or resource base
- [#33922](https://github.com/BerriAI/litellm/pull/33922) feat(moonshot): add Kimi K3 and Together AI Inkling model support
- [#36404](https://github.com/BerriAI/litellm/pull/36404) fix(a2a): stop sending stream in the JSON-RPC body for message/stream
- [#52557](https://github.com/BerriAI/litellm/pull/52557) chore(cost-map): drop claude-mythos-preview deprecation_date and add azure/us-gov/gpt-4o-mini
- [#52555](https://github.com/BerriAI/litellm/pull/52555) fix(cost): bill web and file search together
- [#49587](https://github.com/BerriAI/litellm/pull/49587) test(cost): add tier 1 cost tracking cases for gpt-6.1-terra and sync suite price fields
- [#45476](https://github.com/BerriAI/litellm/pull/45476) fix(cost): bill OpenRouter and Perplexity v1.1 decisions models
- [#52552](https://github.com/BerriAI/litellm/pull/52552) chore(cost-map): add AWS Bedrock Mantle GovCloud Nemotron Nano deprecation dates
- [#52458](https://github.com/BerriAI/litellm/pull/52458) chore(cost-map): fill Bedrock regional and Azure Government pricing gaps, rolling registry audit 2026-11-18
- [#49384](https://github.com/BerriAI/litellm/pull/49384) fix(responses): stop the background stream when a polling response is cancelled

#### 🐛 New Issues
- [#52548](https://github.com/BerriAI/litellm/issues/52548) [Bug]: Priority routing groups ignore deployment tpm limits and fail over early on rpm limits under usage-based-routing-v2 `llm translation` 💬4
- [#52456](https://github.com/BerriAI/litellm/issues/52456) [Bug] LiteLLM silently relabels out-of-order OpenAI Decisions answers `llm translation` 💬3
- [#52558](https://github.com/BerriAI/litellm/issues/52558) Lens worker aborts active analysis claims on SIGTERM 💬2
- [#52577](https://github.com/BerriAI/litellm/issues/52577) Budget holds from a crashed proxy stay in the spend counter while the team keeps sending requests `llm translation` 💬2
- [#52546](https://github.com/BerriAI/litellm/issues/52546) Image output survives message-logging redaction in Chat Completions and Responses 💬2
- [#52526](https://github.com/BerriAI/litellm/issues/52526) [Bug]: resize_image_high_res upscales images whose short side is already under the limit, inflating high-detail image token counts `llm translation` 💬2
- [#52490](https://github.com/BerriAI/litellm/issues/52490) [Bug]: Langfuse prompt management traces the `production` version when the request uses `prompt_label` (or `prompt_version`) `bug` `llm translation` 💬2
- [#52668](https://github.com/BerriAI/litellm/issues/52668) [Bug]: _handle_month_reset crashes on valid <n>mo budget_duration values other than 1 or 12 `bug` 💬1
- [#52667](https://github.com/BerriAI/litellm/issues/52667) [Bug]: Files/Batches API error messages list wrong/inconsistent supported providers `bug` `llm translation` 💬1
- [#52589](https://github.com/BerriAI/litellm/issues/52589) Responses disconnects price local token estimates as uncached provider usage `llm translation` 💬1
- [#52533](https://github.com/BerriAI/litellm/issues/52533) [Bug]: FLUX 2 image edit raises bare ValueErrors instead of 400s for missing/invalid input `llm translation` 💬1
- [#52453](https://github.com/BerriAI/litellm/issues/52453) [Bug]: TokenRetrievalError in litellm/llms/bedrock/base_aws_llm.py `bug` `llm translation` 💬1
- [#52525](https://github.com/BerriAI/litellm/issues/52525) [Bug]: Fal AI image edit raises a bare ValueError instead of a 400 when no image is given `llm translation` 💬1
- [#52585](https://github.com/BerriAI/litellm/issues/52585) [Bug]: Non-streaming POST /v1/messages omits x-litellm-cache-key on response-cache hits `llm translation`
- [#52560](https://github.com/BerriAI/litellm/issues/52560) [Bug]: MCP ImageContent and EmbeddedResource are replaced with placeholders during automatic tool execution `bug` `llm translation` 💬1
- [#52535](https://github.com/BerriAI/litellm/issues/52535) [Bug]: Bedrock Nova Canvas image edit raises a bare ValueError instead of a 400 when no image is given `llm translation` 💬1
- [#52534](https://github.com/BerriAI/litellm/issues/52534) [Bug]: Gemini (direct, non-Vertex) image edit raises a bare ValueError instead of a 400 when no image is given `llm translation` 💬1
- [#52522](https://github.com/BerriAI/litellm/issues/52522) [Bug]: Team budget is not removed from Team's metadata when deleting a Budget `bug` 💬1
- [#52716](https://github.com/BerriAI/litellm/issues/52716) [Bug]: Unhandled ValueError in file endpoints when custom_llm_provider is not in LlmProviders enum `bug`
- [#52714](https://github.com/BerriAI/litellm/issues/52714) [Bug]: Unanchored regex in duration_parser extracts arbitrary trailing text as time units `bug`
- [#52670](https://github.com/BerriAI/litellm/issues/52670) [Bug]: azure_ai/gpt-5-chat doesn't rename max_tokens to max_completion_tokens (sibling azure/ provider fixed in #36857) `bug` `llm translation`
- [#52551](https://github.com/BerriAI/litellm/issues/52551) [Bug]: Logging receives Python builtins.input instead of request input `llm translation`
- [#52669](https://github.com/BerriAI/litellm/issues/52669) [Bug]: drop_params_from_unprocessable_entity_error crashes with AttributeError on mixed dict/non-dict 422 detail list `bug` `llm translation`
- [#52644](https://github.com/BerriAI/litellm/issues/52644) [Bug]: /azure passthrough returns 500 "Provider openai not found" when body model is a non-Azure router group (regression in 1.109.1) `bug` `llm translation`
- [#52636](https://github.com/BerriAI/litellm/issues/52636) triton and databricks embedding configs reject the OpenAI SDK's default encoding_format='float' `llm translation`
- [#52603](https://github.com/BerriAI/litellm/issues/52603) [Bug]: LiteLLM Proxy cannot share an environment with Expression 6
- [#52598](https://github.com/BerriAI/litellm/issues/52598) Vertex Gemini image adapters silently replace or ignore invalid controls in strict mode `llm translation`
- [#52588](https://github.com/BerriAI/litellm/issues/52588) Proxy shutdown leaves s3_v2 callback queues undrained
- [#52543](https://github.com/BerriAI/litellm/issues/52543) Gemini assistant image history drops thought signatures during Chat Completions replay `llm translation`
- [#52540](https://github.com/BerriAI/litellm/issues/52540) [Feature]: Configurable owned_by per model in /v1/models `llm translation`
- [#52518](https://github.com/BerriAI/litellm/issues/52518) [Feature]: Nace NDI document parsing as an OCR provider (nace/parse-low, nace/parse-medium, nace/parse-high)
- [#52517](https://github.com/BerriAI/litellm/issues/52517) Post-call rejection erases known provider cost and usage and reports unknown cost as zero `llm translation`
- [#52505](https://github.com/BerriAI/litellm/issues/52505) Add Berget AI (api.berget.ai) as a provider `llm translation`
- [#52494](https://github.com/BerriAI/litellm/issues/52494) [Bug]: Over-budget caller can invoke a paid MCP tool when listed under a free server's prefixed name
- [#52468](https://github.com/BerriAI/litellm/issues/52468) [Feature]: Add Native Gnani AI Prisma Speech-to-Text Support (REST, Realtime, Batch) `enhancement` `llm translation`
- [#52452](https://github.com/BerriAI/litellm/issues/52452) [Feature]: Add native Sarvam AI speech-to-text (Saaras) and text-to-speech (Bulbul) `llm translation`

#### 🔒 Closed Issues
- [#52284](https://github.com/BerriAI/litellm/issues/52284) [Bug]: With DATABASE_URL_READ_REPLICA set, a reconnect cancelled by its 2 s timeout leaves the reader Prisma engine dead forever; reads never fall back to the writer and the proxy never self-heals
- [#36366](https://github.com/BerriAI/litellm/issues/36366) [Bug]: Azure Responses forwards empty namespace descriptions from additional_tools
- [#36765](https://github.com/BerriAI/litellm/issues/36765) OpenAPI→MCP tool generation drops request body schema when it uses $ref (FastAPI/Pydantic specs)
- [#37088](https://github.com/BerriAI/litellm/issues/37088) /v1/messages routes openai/ models with custom api_base to the Responses API; use_chat_completions_api returns empty content
- [#36842](https://github.com/BerriAI/litellm/issues/36842) Headroom CCR markers are not detected, so headroom_retrieve is never injected
- [#49411](https://github.com/BerriAI/litellm/issues/49411) [Bug]: voyage/ embeddings ignore VOYAGE_API_BASE
- [#45605](https://github.com/BerriAI/litellm/issues/45605) [Bug]: custom_auth_run_common_checks never runs the key max_budget check (virtual_key_max_budget_check) on custom-auth requests
- [#33414](https://github.com/BerriAI/litellm/issues/33414) [Bug]: Docker LiteLLM is leaving Zombie Processes alive
- [#52456](https://github.com/BerriAI/litellm/issues/52456) [Bug] LiteLLM silently relabels out-of-order OpenAI Decisions answers
- [#35909](https://github.com/BerriAI/litellm/issues/35909) [Bug]: sap provider transform_response fails on Gemini 3.5 Flash — list-shaped reasoning_content (thought signatures) breaks ModelResponse validation on tool-calling follow-up turns
- [#38612](https://github.com/BerriAI/litellm/issues/38612) [Bug]: chatgpt provider strips parallel_tool_calls — Codex Responses-Lite (gpt-5.6-*) requests always 400
- [#47076](https://github.com/BerriAI/litellm/issues/47076) [Bug]: Helm migration Job OOMKilled at 1Gi since v1.105.x — prisma_migration.py runs prisma generate after migrating (1.15 GiB peak for a step that can't succeed in the non_root image)
- [#52558](https://github.com/BerriAI/litellm/issues/52558) Lens worker aborts active analysis claims on SIGTERM
- [#36095](https://github.com/BerriAI/litellm/issues/36095) os.environ/ substitution in numeric litellm_params (weight/rpm/tpm) yields str, crashing simple_shuffle with TypeError at request time
- [#36463](https://github.com/BerriAI/litellm/issues/36463) [Bug]: Tool calling schema to ollama_chat being missing in the UI
- [#36683](https://github.com/BerriAI/litellm/issues/36683) [Bug]: IDE tools (Bash_ide, Skill_ide, Workflow_ide) unavailable when Claude Code routes through LiteLLM /v1/messages
- [#36746](https://github.com/BerriAI/litellm/issues/36746) OpenTelemetry: attributes written to ended parent_span — guard checks hasattr(set_status) instead of is_recording()
- [#36768](https://github.com/BerriAI/litellm/issues/36768) [Bug]: /v1/chat/completions stream: response.failed becomes HTTP 200 + empty finish_reason=stop (fallbacks never run)
- [#36786](https://github.com/BerriAI/litellm/issues/36786) When using local ollama model getting the error
- [#36794](https://github.com/BerriAI/litellm/issues/36794) [bug]: proxy uses request-body api_key without allow_client_side_credentials
- [#44946](https://github.com/BerriAI/litellm/issues/44946) [Bug]: `modify_params=True` drops adaptive `thinking` when tool-call history has no thinking block
- [#52546](https://github.com/BerriAI/litellm/issues/52546) Image output survives message-logging redaction in Chat Completions and Responses
- [#46483](https://github.com/BerriAI/litellm/issues/46483) [Bug]: Responses bridge drops assistant message phase on output and on replayed input
- [#42195](https://github.com/BerriAI/litellm/issues/42195) [Bug]: Cache hit crashes with `ModuleNotFoundError: fastapi` on a plain `pip install litellm` — the SDK cache-hit path imports proxy-only modules
- [#43119](https://github.com/BerriAI/litellm/issues/43119) Proposal: a Nano (XNO) 402 pay-per-token example for the LiteLLM gateway
- [#36758](https://github.com/BerriAI/litellm/issues/36758) [Bug]: `redact_user_api_key_info: true` does not filter sensitive metadata from OpenTelemetry spans
- [#36803](https://github.com/BerriAI/litellm/issues/36803) [Bug]: oauth_delegate MCP servers in v1.96.2 return upstream resource verbatim in PRM, breaking RFC 9728–strict clients
- [#45541](https://github.com/BerriAI/litellm/issues/45541) [Bug]: post_call holds a full copy of every response for the whole request
- [#52271](https://github.com/BerriAI/litellm/issues/52271) [Bug]: Users with user_role = null act as internal_user, ignoring the configured Default Role and LiteLLM's own internal_user_viewer default
- [#34730](https://github.com/BerriAI/litellm/issues/34730) [Bug]: Built-in tool cost calculation returns before summing independent tool charges
- [#44845](https://github.com/BerriAI/litellm/issues/44845) [Feature]: Scheduled live capability checks for model_prices_and_context_window.json
- [#49090](https://github.com/BerriAI/litellm/issues/49090) [Feature]: Let a virtual key (including a key with no user_id) view its own /spend/logs, without an elevated role
- [#51813](https://github.com/BerriAI/litellm/issues/51813) Native Gemini generateContent logs as acompletion with empty model_group, so Endpoint Activity omits it
- [#49848](https://github.com/BerriAI/litellm/issues/49848) [Bug]: Bedrock Converse omits strict field for native GPT JSON Schema output
- [#52670](https://github.com/BerriAI/litellm/issues/52670) [Bug]: azure_ai/gpt-5-chat doesn't rename max_tokens to max_completion_tokens (sibling azure/ provider fixed in #36857)
- [#43531](https://github.com/BerriAI/litellm/issues/43531) [Bug]: modify_params drops adaptive thinking after a thinking-less tool call, so Claude Opus 5.x reasons without streaming
- [#35953](https://github.com/BerriAI/litellm/issues/35953) [Bug]: bedrock_mantle deployments fall back to US pricing — no cost map entries for moonshotai.kimi-k2.5 / minimax.minimax-m2.5
- [#52540](https://github.com/BerriAI/litellm/issues/52540) [Feature]: Configurable owned_by per model in /v1/models

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,756 · **Open issues:** 490 · **Last push:** <1h ago

On November 19, 2026, there were no new releases for Unsloth, but several impactful pull requests were merged, enhancing various functionalities. Notably, the Studio now allows jobs to be revived from a cancelled state, improves the performance of INT8 attention in the Qwen-Image-2.1 block, and includes significant speed optimizations for diffusion training processes. Additionally, the Studio introduced better indexing across documentation tabs in knowledge bases, and improvements were made to load models more efficiently for video processing. Among the newly reported issues, a notable bug was identified where Unsloth Studio mistakenly loads decision-only GGUFs, masking a critical internal error, which could pose challenges for users relying on accurate model interactions.

#### ✅ Merged PRs
- [#18347](https://github.com/unslothai/unsloth/pull/18347) studio recipes: keep a queued job.started from reviving a cancelled run
- [#18384](https://github.com/unslothai/unsloth/pull/18384) Studio INT8 attention: Qwen-Image-2.1 block 0 keeps its incumbent under Auto (Turbo LPIPS max 0.270 to 0.076 on L4)
- [#18363](https://github.com/unslothai/unsloth/pull/18363) Studio: index all tabs of docs pages in knowledge bases
- [#18405](https://github.com/unslothai/unsloth/pull/18405) GRPO PrefixGrouper: group rows by prompt, gate on saved prompt tokens
- [#18389](https://github.com/unslothai/unsloth/pull/18389) Studio diffusion training: MOSS-Image LoRA training
- [#18380](https://github.com/unslothai/unsloth/pull/18380) Studio diffusion: compile the cold-card INT8 / ConvRot probe kernels on a thread pool (FLUX.3 klein INT8 cold start 132.6 s to 96.4 s on L4)
- [#18301](https://github.com/unslothai/unsloth/pull/18301) Studio diffusion training: keep block activations when the card has room (20-42% faster per step, bit-identical in deterministic mode)
- [#18378](https://github.com/unslothai/unsloth/pull/18378) Studio LTX-2.5: load the Gemma 4 tokenizer from the warm cache offline (offline loads failed with every file cached)
- [#18288](https://github.com/unslothai/unsloth/pull/18288) Studio video: load NVIDIA Cosmos3 Nano-FP8 and Edge-FP8 (ModelOpt FP8, bit-identical to the reference runtime's first steps)
- [#18388](https://github.com/unslothai/unsloth/pull/18388) Summary
- [#18393](https://github.com/unslothai/unsloth/pull/18393) ROCm packed varlen: use it inside compiled blocks only when its fake kernel matches its real outputs
- [#18303](https://github.com/unslothai/unsloth/pull/18303) Studio sd.cpp: let the VAE keep its own direct-conv choice on Vulkan (decode 5-6x faster on gfx1151, -21% per image)
- [#18302](https://github.com/unslothai/unsloth/pull/18302) Studio ROCm: run the compiled int8 tiers on Windows gfx1151 when the compile probe passes (Klein -28%, Qwen-Image-2.1 -23% per step)
- [#18387](https://github.com/unslothai/unsloth/pull/18387) GRPO: score kept-set old / ref logps with the zoo dispatcher under UNSLOTH_GRPO_LOGPROB_RECOMPUTE=1
- [#18345](https://github.com/unslothai/unsloth/pull/18345) Studio diffusion training: cast-once LoRA path and nf4 dequant cache (eager DiT LoRA 16-26% faster per step)
- [#18245](https://github.com/unslothai/unsloth/pull/18245) Studio: FLUX.3 Klein base per-step speed and process-to-process determinism
- [#18284](https://github.com/unslothai/unsloth/pull/18284) Studio MiniMax-H3-Image: keep more DiT blocks on streamed cards and keep the int8 GEMM when all fit (12-18% faster per step at 12-24 GB)
- [#18381](https://github.com/unslothai/unsloth/pull/18381) RAG upload CI: install Pillow, and check every harness import is installed
- [#18338](https://github.com/unslothai/unsloth/pull/18338) Studio tests: skip the trainer-backed num_proc veto tests where unsloth_zoo is absent
- [#18211](https://github.com/unslothai/unsloth/pull/18211) Studio: let a cloud connection drop whole oldest turns instead of summarizing
- [#18337](https://github.com/unslothai/unsloth/pull/18337) GRPO: install the vision image dedup on the trainer's model
- [#18373](https://github.com/unslothai/unsloth/pull/18373) view_image test: start the pixel budget check from an empty PNG memo
- [#18372](https://github.com/unslothai/unsloth/pull/18372) Picker contract test: follow the Ollama MLX tag predicate
- [#18336](https://github.com/unslothai/unsloth/pull/18336) GRPO kept-set refusals: name the automatic IS-correction case
- [#18369](https://github.com/unslothai/unsloth/pull/18369) GRPO autocast test: let the unlatched packing probe run without autocast
- [#18368](https://github.com/unslothai/unsloth/pull/18368) Tests: follow the NF4 dequant cache into the for_inference and fp8 backward harnesses
- [#18362](https://github.com/unslothai/unsloth/pull/18362) Tests: keep the ROCm packed attention tests passing now that torch varlen runs there
- [#18367](https://github.com/unslothai/unsloth/pull/18367) Saving routing tests: stub the NF4 dequant cache release
- [#18361](https://github.com/unslothai/unsloth/pull/18361) MLX backend tests: answer zoo _first_resolved in the inference stub
- [#18358](https://github.com/unslothai/unsloth/pull/18358) Keep the MLX install ordering tests independent of the runner certifi and pip
- [#18339](https://github.com/unslothai/unsloth/pull/18339) QAT LoRA: round the frozen base onto the fake quantization grid once, in place
- [#18256](https://github.com/unslothai/unsloth/pull/18256) Studio: keep tool screenshots in compacting GGUF chats so the prompt cache stays warm
- [#18253](https://github.com/unslothai/unsloth/pull/18253) feat(studio): list and load Ollama MLX-format tags, with their bundled drafters
- [#17751](https://github.com/unslothai/unsloth/pull/17751) Hybrid packing: drop the >2x faster claim on opt-in devices (ROCm)
- [#18360](https://github.com/unslothai/unsloth/pull/18360) lint_duplicate_definitions: a decorated def _ binds nothing
- [#18357](https://github.com/unslothai/unsloth/pull/18357) CLI eval tests: index staged tasks by their task key, like lm-eval
- [#18266](https://github.com/unslothai/unsloth/pull/18266) Studio: computer use on Wayland through the desktop portal
- [#18335](https://github.com/unslothai/unsloth/pull/18335) GRPO packing: turn packing off for models whose packed documents see each other
- [#18285](https://github.com/unslothai/unsloth/pull/18285) QLoRA: keep dequantized NF4 LoRA base weights in idle VRAM
- [#18313](https://github.com/unslothai/unsloth/pull/18313) ROCm: use flash varlen for packed rows so hybrid packing is faster than padding
- [#18354](https://github.com/unslothai/unsloth/pull/18354) Keep the MLX install ordering tests off the package index
- [#18344](https://github.com/unslothai/unsloth/pull/18344) Read the Unreal toolset as UTF-8 in its install test
- [#18283](https://github.com/unslothai/unsloth/pull/18283) Move the Unsloth Studio MLX pins to mlx-vlm 0.8.0
- [#18267](https://github.com/unslothai/unsloth/pull/18267) Desktop: step wheel scrolling when WebKitGTK is not compositing
- [#16692](https://github.com/unslothai/unsloth/pull/16692) Studio: read progress streams with CR-only line endings
- [#18287](https://github.com/unslothai/unsloth/pull/18287) FSDP2: lower the sharding-time memory peak (gather replicated tables without the chunk, expandable segments on every rank)
- [#18343](https://github.com/unslothai/unsloth/pull/18343) Comment the BLOCK constexpr on the bf16 stochastic rounding kernels
- [#18331](https://github.com/unslothai/unsloth/pull/18331) Studio: install a level-save toolset into Unreal projects
- [#18328](https://github.com/unslothai/unsloth/pull/18328) Studio: refuse large request bodies from callers without a credential before buffering them
- [#18329](https://github.com/unslothai/unsloth/pull/18329) Studio: keep the artifact page prelude regex linear
- [#18325](https://github.com/unslothai/unsloth/pull/18325) Studio: 50 tool calls per message by default, Max while MCP is on
- [#18327](https://github.com/unslothai/unsloth/pull/18327) Studio: lift base64 images out of JSON text MCP results
- [#18326](https://github.com/unslothai/unsloth/pull/18326) Studio: stream MCP tool arguments while the call waits for approval
- [#18322](https://github.com/unslothai/unsloth/pull/18322) Studio: keep managed-account tools off host Unix sockets
- [#18330](https://github.com/unslothai/unsloth/pull/18330) docker: remove the staged initial Studio password once it is stored
- [#18015](https://github.com/unslothai/unsloth/pull/18015) Studio: keep JSONL schema recovery working with a UTF-8 BOM
- [#18104](https://github.com/unslothai/unsloth/pull/18104) Studio: still try the last used model first when it is only listed by its HF cache path
- [#18270](https://github.com/unslothai/unsloth/pull/18270) Studio video VAE: fused LTX-2 decoder (1.7-1.8x), compact causal cache and deferred biases for Wan
- [#18333](https://github.com/unslothai/unsloth/pull/18333) Stub @/lib/sse-framing in the two chat-api tests that load it with stubs
- [#18274](https://github.com/unslothai/unsloth/pull/18274) Studio: overlap the grammar mask with the MLX forward
- [#18323](https://github.com/unslothai/unsloth/pull/18323) Studio: project changes cannot run a repository's git filter
- [#18286](https://github.com/unslothai/unsloth/pull/18286) QAT LoRA: fake-quantize the frozen base weight once instead of every forward
- [#17713](https://github.com/unslothai/unsloth/pull/17713) Warn when an MTP sidecar lookup fails
- [#17245](https://github.com/unslothai/unsloth/pull/17245) studio: let video datasets reach mlx vlm training
- [#18320](https://github.com/unslothai/unsloth/pull/18320) Studio: keep saved credentials with their account and destination
- [#18319](https://github.com/unslothai/unsloth/pull/18319) CLI eval: stage a standalone custom task YAML under a fixed file name
- [#18318](https://github.com/unslothai/unsloth/pull/18318) Studio: pin the native chat template reload to the reviewed commit
- [#17338](https://github.com/unslothai/unsloth/pull/17338) studio: keep inbound sse events whole across transport splits
- [#18282](https://github.com/unslothai/unsloth/pull/18282) bf16 stochastic rounding: one-pass AdamW kernel for torch AdamW, one-pass round for bitsandbytes
- [#18324](https://github.com/unslothai/unsloth/pull/18324) Multi-LoRA packing: load the num_proc policy without importing unsloth
- [#18315](https://github.com/unslothai/unsloth/pull/18315) Translate: keep the stable gutter without a :has() over the chat thread
- [#18314](https://github.com/unslothai/unsloth/pull/18314) Studio: make the model picker usable on phones
- [#17627](https://github.com/unslothai/unsloth/pull/17627) Lora: fail GGUF export when no .gguf is produced
- [#18299](https://github.com/unslothai/unsloth/pull/18299) AsyncGRPO fast_inference: keep decoding while the adapter is saved
- [#18307](https://github.com/unslothai/unsloth/pull/18307) Studio: let a tap open the composer model picker and other tooltip popovers on phones
- [#18261](https://github.com/unslothai/unsloth/pull/18261) Studio: keep the Older models header in view, frosted on Glass and clear of Tab focus
- [#18264](https://github.com/unslothai/unsloth/pull/18264) Studio: name Headless UI tab panels by their tab in web fetch
- [#18265](https://github.com/unslothai/unsloth/pull/18265) Studio: clear the open chat on every route into Compare
- [#18260](https://github.com/unslothai/unsloth/pull/18260) Studio: drop a chat model Translate evicted when the Model hub reads status
- [#17701](https://github.com/unslothai/unsloth/pull/17701) Unsloth Studio: tokenize in process when the trainer is too big in host RAM to fork
- [#18294](https://github.com/unslothai/unsloth/pull/18294) Pipeline parallel: build Gemma-4 per-layer inputs in the source table's dtype (fp16 step-1 grad blowup)
- [#17572](https://github.com/unslothai/unsloth/pull/17572) Studio: recognize Kromoss as MOSS-Image
- [#18308](https://github.com/unslothai/unsloth/pull/18308) Read the NPU compat fixtures as UTF-8
- [#18008](https://github.com/unslothai/unsloth/pull/18008) Studio: resolve S3 Parquet audio paths before loading
- [#17699](https://github.com/unslothai/unsloth/pull/17699) studio: clean up encoder snapshots when preparation fails
- [#18275](https://github.com/unslothai/unsloth/pull/18275) Studio: reuse llama.cpp's CUDA wheels for audio.cpp on Windows chat-only installs
- [#18304](https://github.com/unslothai/unsloth/pull/18304) Gate the split-GPU DPO prefix-share test on a real CUDA device
- [#17698](https://github.com/unslothai/unsloth/pull/17698) studio: preserve shared encoder tensors during release and reload
- [#17694](https://github.com/unslothai/unsloth/pull/17694) studio: use safe process checks for stale snapshots and downloads
- [#18293](https://github.com/unslothai/unsloth/pull/18293) Studio: redesign Translate with language tabs, growing panes and file uploads
- [#16703](https://github.com/unslothai/unsloth/pull/16703) Studio: keep RAG search working during a partial re-index
- [#16968](https://github.com/unslothai/unsloth/pull/16968) Studio: stop dropping SSE events on mixed line-ending boundaries
- [#18213](https://github.com/unslothai/unsloth/pull/18213) LongRoPE: install the long-factor rotary at model level, so Phi-3.5 switches past 4096 tokens
- [#18163](https://github.com/unslothai/unsloth/pull/18163) fix(kernels): broadcast qk rope positions before fallback
- [#18263](https://github.com/unslothai/unsloth/pull/18263) Studio: show the detected language in Translate and let swap use it
- [#18296](https://github.com/unslothai/unsloth/pull/18296) Studio: python tool screens the source the interpreter runs
- [#18297](https://github.com/unslothai/unsloth/pull/18297) Record the NPU detector's file load in the risky-loader baseline
- [#18257](https://github.com/unslothai/unsloth/pull/18257) Studio: keep decision-only GGUFs out of Chat and show llama-server's 501 message
- [#18050](https://github.com/unslothai/unsloth/pull/18050) [Bug] AMD NPU: hand-kept model lists drift from the installed FastFlowLM and converter (Qwen3 14B offered, LFM3 hidden)
- [#18295](https://github.com/unslothai/unsloth/pull/18295) Name the encoding on the sd.cpp nvidia-smi probe
- [#16837](https://github.com/unslothai/unsloth/pull/16837) Studio: clean up temporary exports after failed downloads
- [#18273](https://github.com/unslothai/unsloth/pull/18273) DPO prefix share: verify a split-GPU model's hidden states with the mask on their device
- [#18272](https://github.com/unslothai/unsloth/pull/18272) Left-padded training: pad queries attend only themselves
- [#18271](https://github.com/unslothai/unsloth/pull/18271) Apply SFTConfig.router_aux_loss_coef to MoE VLM wrappers on TRL 1.18
- [#17780](https://github.com/unslothai/unsloth/pull/17780) Native FSDP2 resume: undo Zoo's vanilla expert LoRA layout before loading
- [#17682](https://github.com/unslothai/unsloth/pull/17682) Studio: make the project source counters say what they count
- [#18268](https://github.com/unslothai/unsloth/pull/18268) Studio VAE: decode KL and FLUX.2 VAEs in strips with the 2x upsample written into the strip (3.5-7.4% faster, 36-43% lower peak)
- [#18291](https://github.com/unslothai/unsloth/pull/18291) Studio: show a code block's sideways scrollbar only on hover or focus
- [#18049](https://github.com/unslothai/unsloth/pull/18049) [Feature] Unsloth Studio / Desktop: unsloth list-npu-models lists the AMD NPU models with download and memory-fit state
- [#18289](https://github.com/unslothai/unsloth/pull/18289) Drive the clock by hand in the Hub backoff-window tests
- [#18179](https://github.com/unslothai/unsloth/pull/18179) Studio: stop Windows AMD from running the unsigned hipInfo.exe that Smart App Control blocks
- [#18210](https://github.com/unslothai/unsloth/pull/18210) Studio sd.cpp: a CPU torch on a 16 GB Vulkan card stops forcing MiniMax-H3-Image's 31 GB of weights into 15 GB of RAM (OOM kill to 18.1 s)
- [#18248](https://github.com/unslothai/unsloth/pull/18248) Studio: per-load INT8 attention Auto / On / Off, MiniMax-H3 video raced INT8 attention by default
- [#18196](https://github.com/unslothai/unsloth/pull/18196) [Feature] Unsloth Studio: show the FastFlowLM org avatar for NPU models in the model picker
- [#18048](https://github.com/unslothai/unsloth/pull/18048) [Feature] AMD NPU: unsloth run and unsloth chat accept the Hugging Face name Unsloth Studio shows for NPU models
- [#18227](https://github.com/unslothai/unsloth/pull/18227) Studio: read PDFs that Claude Code opens through /v1/messages
- [#18254](https://github.com/unslothai/unsloth/pull/18254) Pipeline parallel: keep the MoE router aux loss on TRL >= 1.18
- [#17784](https://github.com/unslothai/unsloth/pull/17784) FastModel generate: no static cache next to the caller's past_key_values or assisted decoding
- [#18217](https://github.com/unslothai/unsloth/pull/18217) Studio: let a model alias carry its own load settings
- [#18255](https://github.com/unslothai/unsloth/pull/18255) Studio: ask a Custom connection for its token count on every turn
- [#18228](https://github.com/unslothai/unsloth/pull/18228) Studio: fix prompt/completion datasets with text parts training as JSON
- [#17940](https://github.com/unslothai/unsloth/pull/17940) Cohere: apply q_norm and k_norm before the head transpose
- [#18258](https://github.com/unslothai/unsloth/pull/18258) Studio: center quant names and sizes in the Model hub quant dropdowns
- [#18247](https://github.com/unslothai/unsloth/pull/18247) Preserve literal answer strings in local eval tasks
- [#18244](https://github.com/unslothai/unsloth/pull/18244) Studio: schedule a task from a chat that replies in that chat
- [#18214](https://github.com/unslothai/unsloth/pull/18214) Studio: don't let computer use click a window that opened over its target
- [#18203](https://github.com/unslothai/unsloth/pull/18203) Studio: stop asking for MCP OAuth consent again after the token expires
- [#18205](https://github.com/unslothai/unsloth/pull/18205) Studio: replay Claude's compaction block byte-exact
- [#18195](https://github.com/unslothai/unsloth/pull/18195) Studio: price tool results on connections from the server's token count
- [#18222](https://github.com/unslothai/unsloth/pull/18222) Studio: stop repeating a two-minute wait on every message after a chat summary times out
- [#18171](https://github.com/unslothai/unsloth/pull/18171) Studio: stop asking for OAuth consent again when reconnecting to an MCP server
- [#18168](https://github.com/unslothai/unsloth/pull/18168) Studio: run audio.cpp on the GPU in chat-only Linux installs
- [#18235](https://github.com/unslothai/unsloth/pull/18235) Studio: put the Context slider on its own row in the Run settings sidebar
- [#18212](https://github.com/unslothai/unsloth/pull/18212) Studio: group older models under their own header in the model list
- [#18229](https://github.com/unslothai/unsloth/pull/18229) Studio: read every tab of Nextra docs pages in web fetch
- [#18220](https://github.com/unslothai/unsloth/pull/18220) Studio: sort Translate languages and show style and tone on the page
- [#18226](https://github.com/unslothai/unsloth/pull/18226) Studio: keep Translate's model out of Chat after visiting Model hub
- [#18225](https://github.com/unslothai/unsloth/pull/18225) Studio: stop Compare export from including an unrelated chat

#### 🐛 New Issues
- [#18321](https://github.com/unslothai/unsloth/issues/18321) [Feature] Model Picker UI Options `feature request` 💬1
- [#18249](https://github.com/unslothai/unsloth/issues/18249) [Bug] Unsloth Studio loads decision-only GGUFs (lfm3-d1 / d1-2B) in Chat and masks 501 /v1/systemone error as "An internal error occurred" `feature request` `bug` 💬3
- [#18403](https://github.com/unslothai/unsloth/issues/18403) [Bug] QLoRA on gfx1200 (RX 9060 XT, RDNA4) aborts with `HIP error: an illegal memory access` in three different fused kernels; plain PyTorch/PEFT has no SDPA kernel for this arch `feature request` `bug` 💬2
- [#18281](https://github.com/unslothai/unsloth/issues/18281) [Feature] Allow binding on localhost / 127.0.0.1 / 0.0.0.0 (from GUI) `feature request` 💬2
- [#18259](https://github.com/unslothai/unsloth/issues/18259) [Reddit Issue] Scrolling feels laggy/choppy 💬1
- [#18316](https://github.com/unslothai/unsloth/issues/18316) [Bug][Desktop][ROCm/gfx1151] `--fit on` plans ~52 GiB of device memory on a 64 GB Strix Halo APU -> system RAM goes 43 GB -> 57 GB while VRAM still shows ~9 GB free 💬1
- [#18298](https://github.com/unslothai/unsloth/issues/18298) [Bug] Model picker not accessible via android device on webui `feature request` `bug` 💬1
- [#18252](https://github.com/unslothai/unsloth/issues/18252) [UI Bug] Organization/model logos do not appear in Model Hub list or Chat model selector `feature request` `bug` 💬1
- [#18394](https://github.com/unslothai/unsloth/issues/18394) [Bug] Studio: prompt lists that share a name are merged after a CSV export and import `feature request` `bug`
- [#18306](https://github.com/unslothai/unsloth/issues/18306) [Bug] API/provider connections: compaction spends time generating a summary, then fails to write it `feature request` `bug`
- [#18251](https://github.com/unslothai/unsloth/issues/18251) [Feature Request] Add audio preview samples for built-in Text-to-Speech voices in Unsloth Studio `feature request`

#### 🔒 Closed Issues
- [#18189](https://github.com/unslothai/unsloth/issues/18189) [Bug] API/provider connections have lost the same compaction policy as local models (evict whole turns + searchable archive)
- [#18187](https://github.com/unslothai/unsloth/issues/18187) [Bug] use more space!!!
- [#18218](https://github.com/unslothai/unsloth/issues/18218) [Bug] After upgrading drivers to version 620.70.06-1 unsloth doesn't use the GPU anymore
- [#18221](https://github.com/unslothai/unsloth/issues/18221) [Feature] Computer use on Wayland (KDE Plasma, GNOME)
- [#18249](https://github.com/unslothai/unsloth/issues/18249) [Bug] Unsloth Studio loads decision-only GGUFs (lfm3-d1 / d1-2B) in Chat and masks 501 /v1/systemone error as "An internal error occurred"
- [#18164](https://github.com/unslothai/unsloth/issues/18164) [Bug] MCP OAuth: consent prompt shown on every connection instead of reusing stored token.
- [#18231](https://github.com/unslothai/unsloth/issues/18231) [Bug] KV cache invalidation after ~8 computer use calls — MAX_TOTAL_MODEL_IMAGES = 8 in mcp_images.py
- [#18198](https://github.com/unslothai/unsloth/issues/18198) [Feature] Unsloth Desktop Translation Mode Improvements Part 1
- [#18281](https://github.com/unslothai/unsloth/issues/18281) [Feature] Allow binding on localhost / 127.0.0.1 / 0.0.0.0 (from GUI)
- [#17664](https://github.com/unslothai/unsloth/issues/17664) Documentation missing for the project source screen in unsloth desktop
- [#17738](https://github.com/unslothai/unsloth/issues/17738) [Feature] ROCm: hybrid linear-attention packing opt-in passes the exactness probe but gives no net speedup on gfx1151
- [#18259](https://github.com/unslothai/unsloth/issues/18259) [Reddit Issue] Scrolling feels laggy/choppy
- [#18298](https://github.com/unslothai/unsloth/issues/18298) [Bug] Model picker not accessible via android device on webui
- [#18160](https://github.com/unslothai/unsloth/issues/18160) [Bug] fast_qk_norm_rope fallback path does not broadcast position_ids [1, seq_len] (wrong rows, out-of-bounds read)
- [#18055](https://github.com/unslothai/unsloth/issues/18055) fix(docs): API tool-policy guide describes obsolete defaults and overrides
- [#18252](https://github.com/unslothai/unsloth/issues/18252) [UI Bug] Organization/model logos do not appear in Model Hub list or Chat model selector
- [#18246](https://github.com/unslothai/unsloth/issues/18246) [Bug] `unsloth eval` mis-scores JSON array strings in local JSONL datasets
- [#18185](https://github.com/unslothai/unsloth/issues/18185) [Bug] API/provider connections: oversized tool results (search_conversation, web_search) dropped as "(output omitted … no context room left)" → infinite retry loop / no usable answer; same task on a local model works
- [#17820](https://github.com/unslothai/unsloth/issues/17820) [Reddit issue] Same model with different exposed configuration in api

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,193 · **Open issues:** 419 · **Last push:** 6h ago

Today’s updates in AIBrix include the merging of PR #3508, which addresses a bug by ensuring the model name is correctly copied out of the sonic request-body in the gateway. No new releases were recorded. However, multiple bugs were reported, notably in issue #3505, where gateway-tracked gauge series fail to disappear when a pod is deleted or relabeled, and #3506, which highlights a problem with the EmitMetricToPrometheus functionality dropping metrics with no definition entry. Additionally, there is a request for comments in issue #3507 regarding upgrading Envoy Gateway from v1.2.8 to v1.9.4, alongside an Envoy proxy upgrade from v1.33.2 to v1.39.6, indicating active interest in improving the system’s infrastructure.

#### ✅ Merged PRs
- [#3508](https://github.com/vllm-project/aibrix/pull/3508) [Bug] Copy the model name out of the sonic request-body copy in the gateway

#### 🐛 New Issues
- [#3505](https://github.com/vllm-project/aibrix/issues/3505) [Bug] Gateway-tracked gauge series never disappear when a pod is deleted or relabeled `kind/bug` `area/gateway` 💬2
- [#3507](https://github.com/vllm-project/aibrix/issues/3507) [RFC]: Upgrade Envoy Gateway (v1.2.8 → v1.9.4) and Envoy proxy (v1.33.2 → v1.39.6) `area/gateway` `triage/needs-information` `triage/accepted` `kind/feature` 💬2
- [#3501](https://github.com/vllm-project/aibrix/issues/3501) [Bug] `realtime_running_requests_drain_rate_1m` is missing from gateway plugin metrics `kind/bug` `area/gateway` 💬2
- [#3506](https://github.com/vllm-project/aibrix/issues/3506) [Bug] EmitMetricToPrometheus silently drops metrics with no definition entry `kind/bug` `area/gateway` 💬1
- [#3503](https://github.com/vllm-project/aibrix/issues/3503) [Bug] Gateway model-list endpoint returns 404 for /v1/models/ `kind/bug` `area/gateway` `bug` `triage` 💬1
- [#3498](https://github.com/vllm-project/aibrix/issues/3498) [Bug] `realtime_num_requests_running` is missing from gateway plugin metrics `kind/bug` `area/gateway` `triage/accepted` `bug` 💬1

#### 🔒 Closed Issues
- [#3120](https://github.com/vllm-project/aibrix/issues/3120) [Feat] Restrict gateway model discovery to one installation namespace

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,505 · **Open issues:** 644 · **Last push:** <1h ago

On November 19, 2026, there were no new releases for Semantic Router, but a notable series of merged pull requests marked the day. Key changes included bug fixes for tool calls, with PR #7062 addressing issues with model calls on response-format turns, and PR #7065 ensuring that tool calls that used the full output limit are now reported correctly. Additionally, improvements to the Requests Breakdown and the timeline interface were highlighted in PR #7075, aimed at enhancing usability. A significant new issue was flagged concerning the Router replay and protection mechanisms, detailed in issue #6933, which is expected to attract further attention from the development community. Overall, the day maintained a focus on stability and user experience enhancements.

#### ✅ Merged PRs
- [#7062](https://github.com/vllm-project/semantic-router/pull/7062) [Bug] Let the model call tools on a turn that carries a response format
- [#7075](https://github.com/vllm-project/semantic-router/pull/7075) [Feature] Redesign the Requests Breakdown, the run Timeline and Home's agents card
- [#7073](https://github.com/vllm-project/semantic-router/pull/7073) [Docs] State the guard's first-read cost and that each Router keeps its own window answers
- [#7065](https://github.com/vllm-project/semantic-router/pull/7065) [Bug] Report a tool call that used the whole output limit as cut by the limit
- [#7049](https://github.com/vllm-project/semantic-router/pull/7049) [Bug] Name OpenClaw's compaction as OpenClaw, in the session it summarizes
- [#6757](https://github.com/vllm-project/semantic-router/pull/6757) [CI/Build] Restore hidden pending PR Gates after Community reruns
- [#7067](https://github.com/vllm-project/semantic-router/pull/7067) [Bug] Accept a tool call the output limit cut in a client's history
- [#7060](https://github.com/vllm-project/semantic-router/pull/7060) [Bug] Close Responses stream items in order, stream reasoning text as a content part, and refuse conversation
- [#7058](https://github.com/vllm-project/semantic-router/pull/7058) [Bug] Send "usage": null on Chat stream chunks when the client asks for usage
- [#7056](https://github.com/vllm-project/semantic-router/pull/7056) [Bug] Refuse a tool call that no tool result answers
- [#7054](https://github.com/vllm-project/semantic-router/pull/7054) [Bug] Turn a decision's reasoning off for requests with stop sequences
- [#6796](https://github.com/vllm-project/semantic-router/pull/6796) [Docs] Document D3 language evaluation coverage
- [#6566](https://github.com/vllm-project/semantic-router/pull/6566) [Bug] Read a video rule's input from every turn and resolve what it cannot decode

#### 🐛 New Issues
- [#6933](https://github.com/vllm-project/semantic-router/issues/6933) [Bug] Router Replay and protection do not follow the model that answered or how upstream failed `bug` `accepted` `wg/data-plane-networking` 💬3
- [#6964](https://github.com/vllm-project/semantic-router/issues/6964) [Bug] System One: a question the model cannot answer is reported three ways on /v1/systemone `bug` `accepted` `wg/router-models-inference-runtime` 💬3
- [#6888](https://github.com/vllm-project/semantic-router/issues/6888) [Bug] A Chat and a System One entrypoint that share an alias stop the Router from starting `bug` `accepted` `wg/data-plane-networking` 💬3
- [#6935](https://github.com/vllm-project/semantic-router/issues/6935) [Feature] Show each tool call's own time and approval wait in the run view `enhancement` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#6934](https://github.com/vllm-project/semantic-router/issues/6934) [Bug] A block makes harnesses retry and refuses Claude Code's next prompt `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#6932](https://github.com/vllm-project/semantic-router/issues/6932) [Bug] Spend budgets miscount Looper runs and refuse in ways harnesses retry or hide `bug` `accepted` `wg/data-plane-networking` 💬2
- [#6965](https://github.com/vllm-project/semantic-router/issues/6965) [Feature] Serve an API under a configurable path prefix (e.g. /anthropic for Messages) `enhancement` `accepted` `wg/data-plane-networking` 💬2
- [#7071](https://github.com/vllm-project/semantic-router/issues/7071) [Feature] Read a session's long turn once across Router replicas: share the guard's window answers or keep a session on one replica `enhancement` `accepted` `wg/router-models-inference-runtime` 💬2
- [#6923](https://github.com/vllm-project/semantic-router/issues/6923) can not local deployment with muti gpu card `bug` `needs-info` `wg/mom-routing` 💬2
- [#6994](https://github.com/vllm-project/semantic-router/issues/6994) [Bug] Request text must never become a model control token (one rule for the model runtime and the Router) `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#6919](https://github.com/vllm-project/semantic-router/issues/6919) deepseek-harness plan not sync as real `bug` `needs-acceptance` `needs-info` `wg/mom-routing` 💬1
- [#6921](https://github.com/vllm-project/semantic-router/issues/6921) local deploy can not see backend log `bug` `needs-acceptance` `needs-info` 💬1
- [#6922](https://github.com/vllm-project/semantic-router/issues/6922) zcode can not use cloud system duo `bug` `needs-acceptance` `needs-info` `wg/mom-routing` 💬1
- [#6924](https://github.com/vllm-project/semantic-router/issues/6924) sometimes systemone local deployment model select wrong model with zcode `bug` `needs-acceptance` `needs-info` `wg/mom-routing` 💬1
- [#7074](https://github.com/vllm-project/semantic-router/issues/7074) [Feature] Make the Requests Breakdown, the agent run Timeline and Home's agent view readable at a glance `enhancement` `accepted` `wg/developer-experience-ecosystem`
- [#7066](https://github.com/vllm-project/semantic-router/issues/7066) [Bug] A request whose history keeps a tool call cut by the output limit is refused with invalid_tool_call `bug` `accepted` `wg/data-plane-networking`
- [#7063](https://github.com/vllm-project/semantic-router/issues/7063) [Bug] A tool call cut at the output limit reaches clients as a finished call with empty arguments `bug` `accepted` `wg/data-plane-networking`
- [#7061](https://github.com/vllm-project/semantic-router/issues/7061) [Bug] A request with tools and a response format never calls a tool `bug` `accepted` `wg/data-plane-networking`
- [#7059](https://github.com/vllm-project/semantic-router/issues/7059) [Bug] Responses streams from Chat backends close items only at the end, stream reasoning text without content parts, and accept conversation without its history `bug` `accepted` `wg/data-plane-networking`
- [#7057](https://github.com/vllm-project/semantic-router/issues/7057) [Bug] Chat stream chunks lack "usage": null when the client sets include_usage `bug` `accepted` `wg/data-plane-networking`
- [#7055](https://github.com/vllm-project/semantic-router/issues/7055) [Bug] A tool call without a tool result is accepted and sent to the backend `bug` `accepted` `wg/data-plane-networking`
- [#7053](https://github.com/vllm-project/semantic-router/issues/7053) [Bug] A stop sequence the reasoning writes ends the request before any answer `bug` `accepted` `wg/data-plane-networking`
- [#7050](https://github.com/vllm-project/semantic-router/issues/7050) [Bug] The operator's CRD refuses decision conditions of type agent `bug` `accepted` `wg/enterprise-environment`
- [#7044](https://github.com/vllm-project/semantic-router/issues/7044) [Bug] The Dashboard backend's and the operator's go.sum are not tidy after the control-token change `bug` `accepted` `wg/data-plane-networking`
- [#7036](https://github.com/vllm-project/semantic-router/issues/7036) [Bug] perf/go.sum is not tidy after the control-token change `bug` `accepted` `wg/data-plane-networking`
- [#6975](https://github.com/vllm-project/semantic-router/issues/6975) [Bug] Messages replies from Chat and Responses backends lack thinking signatures, msg_ and toolu_ ids, and message_start input usage `bug` `accepted` `wg/data-plane-networking`
- [#7025](https://github.com/vllm-project/semantic-router/issues/7025) [Bug] Guard rules read a long input's windows again on every turn of a session `bug` `accepted` `wg/mom-routing`
- [#7031](https://github.com/vllm-project/semantic-router/issues/7031) [Feature] Read Codex's and OpenClaw's compactions as request classes `enhancement` `accepted` `wg/agentic-context`
- [#7027](https://github.com/vllm-project/semantic-router/issues/7027) [Bug] The request estimate counts 8,192 tokens for every image, whatever its size `bug` `accepted` `wg/mom-routing`
- [#7023](https://github.com/vllm-project/semantic-router/issues/7023) [Bug] Router: control-token text in user and tool messages becomes a control token on vLLM backends `bug` `accepted` `wg/data-plane-networking`
- [#7020](https://github.com/vllm-project/semantic-router/issues/7020) [Feature] Show Requests as a session tree with agent runs, turns and shared agent events `enhancement` `accepted` `wg/developer-experience-ecosystem`
- [#7008](https://github.com/vllm-project/semantic-router/issues/7008) [Bug] Router System One: media refusals answer invalid_request instead of invalid_media or unsupported_media_type `bug` `accepted` `wg/router-models-inference-runtime`
- [#7001](https://github.com/vllm-project/semantic-router/issues/7001) [Bug] Model runtime: Vela 3.0 question validation (500 on a non-string type, non-string span labels, a blank state with an image) `bug` `accepted` `wg/router-models-inference-runtime`
- [#6999](https://github.com/vllm-project/semantic-router/issues/6999) [Bug] Model runtime: a raised span threshold returns fragments of an entity, and span edges drop marks and brackets `bug` `accepted` `wg/router-models-inference-runtime`
- [#7003](https://github.com/vllm-project/semantic-router/issues/7003) [Bug] Model runtime: a Box question without at answers for the video when the state also has an image `bug` `accepted` `wg/router-models-inference-runtime`
- [#7005](https://github.com/vllm-project/semantic-router/issues/7005) [Feature] Identify Cursor and OpenClaw requests, and record each call's agent facts in Router Replay `enhancement` `accepted` `wg/agentic-context`
- [#6995](https://github.com/vllm-project/semantic-router/issues/6995) [Bug] Model runtime: control tokens typed in System One request text act as control tokens `bug` `accepted` `wg/router-models-inference-runtime`
- [#7011](https://github.com/vllm-project/semantic-router/issues/7011) [Bug] Model runtime: d3 Box edges on wide, short images are wrong at high confidence `bug` `accepted` `wg/router-models-inference-runtime`
- [#6988](https://github.com/vllm-project/semantic-router/issues/6988) [Bug] E2E response-api-image-generation looks for the wire-format id in the capability error `bug` `accepted` `wg/data-plane-networking`

#### 🔒 Closed Issues
- [#6446](https://github.com/vllm-project/semantic-router/issues/6446) [Feature] Document which languages d3 has been evaluated in (Thai results attached)
- [#6872](https://github.com/vllm-project/semantic-router/issues/6872) [Feature] Let clients with a single base URL override reach the router with models it does not serve
- [#6888](https://github.com/vllm-project/semantic-router/issues/6888) [Bug] A Chat and a System One entrypoint that share an alias stop the Router from starting
- [#6537](https://github.com/vllm-project/semantic-router/issues/6537) [Bug] A keyword signal with no keywords matches every request
- [#5741](https://github.com/vllm-project/semantic-router/issues/5741) [Bug] A tool result with an image ends an agent session on Chat backends
- [#6923](https://github.com/vllm-project/semantic-router/issues/6923) can not local deployment with muti gpu card
- [#5866](https://github.com/vllm-project/semantic-router/issues/5866) [CI/Build] Community reruns can hide a pending PR Gate
- [#6544](https://github.com/vllm-project/semantic-router/issues/6544) [Bug] An input.video rule reads the last user turn only and never resolves the video it cannot read
- [#6994](https://github.com/vllm-project/semantic-router/issues/6994) [Bug] Request text must never become a model control token (one rule for the model runtime and the Router)
- [#6821](https://github.com/vllm-project/semantic-router/issues/6821) [Bug] Operator CRD rejects agent decision conditions
- [#7074](https://github.com/vllm-project/semantic-router/issues/7074) [Feature] Make the Requests Breakdown, the agent run Timeline and Home's agent view readable at a glance
- [#7066](https://github.com/vllm-project/semantic-router/issues/7066) [Bug] A request whose history keeps a tool call cut by the output limit is refused with invalid_tool_call
- [#7063](https://github.com/vllm-project/semantic-router/issues/7063) [Bug] A tool call cut at the output limit reaches clients as a finished call with empty arguments
- [#7061](https://github.com/vllm-project/semantic-router/issues/7061) [Bug] A request with tools and a response format never calls a tool
- [#7059](https://github.com/vllm-project/semantic-router/issues/7059) [Bug] Responses streams from Chat backends close items only at the end, stream reasoning text without content parts, and accept conversation without its history
- [#7057](https://github.com/vllm-project/semantic-router/issues/7057) [Bug] Chat stream chunks lack "usage": null when the client sets include_usage
- [#7055](https://github.com/vllm-project/semantic-router/issues/7055) [Bug] A tool call without a tool result is accepted and sent to the backend
- [#7053](https://github.com/vllm-project/semantic-router/issues/7053) [Bug] A stop sequence the reasoning writes ends the request before any answer
- [#7050](https://github.com/vllm-project/semantic-router/issues/7050) [Bug] The operator's CRD refuses decision conditions of type agent
- [#7044](https://github.com/vllm-project/semantic-router/issues/7044) [Bug] The Dashboard backend's and the operator's go.sum are not tidy after the control-token change
- [#7036](https://github.com/vllm-project/semantic-router/issues/7036) [Bug] perf/go.sum is not tidy after the control-token change
- [#6975](https://github.com/vllm-project/semantic-router/issues/6975) [Bug] Messages replies from Chat and Responses backends lack thinking signatures, msg_ and toolu_ ids, and message_start input usage
- [#7025](https://github.com/vllm-project/semantic-router/issues/7025) [Bug] Guard rules read a long input's windows again on every turn of a session
- [#7031](https://github.com/vllm-project/semantic-router/issues/7031) [Feature] Read Codex's and OpenClaw's compactions as request classes
- [#7027](https://github.com/vllm-project/semantic-router/issues/7027) [Bug] The request estimate counts 8,192 tokens for every image, whatever its size
- [#7023](https://github.com/vllm-project/semantic-router/issues/7023) [Bug] Router: control-token text in user and tool messages becomes a control token on vLLM backends
- [#7020](https://github.com/vllm-project/semantic-router/issues/7020) [Feature] Show Requests as a session tree with agent runs, turns and shared agent events
- [#7008](https://github.com/vllm-project/semantic-router/issues/7008) [Bug] Router System One: media refusals answer invalid_request instead of invalid_media or unsupported_media_type
- [#7001](https://github.com/vllm-project/semantic-router/issues/7001) [Bug] Model runtime: Vela 3.0 question validation (500 on a non-string type, non-string span labels, a blank state with an image)
- [#6999](https://github.com/vllm-project/semantic-router/issues/6999) [Bug] Model runtime: a raised span threshold returns fragments of an entity, and span edges drop marks and brackets
- [#7003](https://github.com/vllm-project/semantic-router/issues/7003) [Bug] Model runtime: a Box question without at answers for the video when the state also has an image
- [#7005](https://github.com/vllm-project/semantic-router/issues/7005) [Feature] Identify Cursor and OpenClaw requests, and record each call's agent facts in Router Replay
- [#6995](https://github.com/vllm-project/semantic-router/issues/6995) [Bug] Model runtime: control tokens typed in System One request text act as control tokens
- [#6988](https://github.com/vllm-project/semantic-router/issues/6988) [Bug] E2E response-api-image-generation looks for the wire-format id in the capability error

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*