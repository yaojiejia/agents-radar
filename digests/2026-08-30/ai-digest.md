# 📡 AI Ecosystem Digest — 2026-08-30

> Generated 2026-08-30 01:07 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 143,397 | 20 | 10 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 119,814 | 22 | 1 | 17 | 4 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,740 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,123 | 1 | 0 | 1 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 202,401 | 29 | 8 | 1 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,489 | 20 | 26 | 1 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 388,016 | 114 | 78 | 137 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 238,142 | 27 | 7 | 5 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 90,428 | 19 | 30 | 26 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 32,766 | 8 | 17 | 44 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 126,257 | 24 | 2 | 8 | 8 |
| [Ollama](https://github.com/ollama/ollama) | 179,743 | 13 | 4 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 57,553 | 20 | 14 | 67 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 75,182 | 13 | 4 | 11 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,044 | 0 | 0 | 0 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,409 | 6 | 6 | 6 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released versions [rust-v0.151.0](https://github.com/openai/codex/releases/tag/rust-v0.151.0), [rust-v0.152.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.1), and [rust-v0.151.0-alpha.7.2](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7.2).
- **GitHub Copilot CLI** released [v1.0.82](https://github.com/github/copilot-cli/releases/tag/v1.0.82) and [v1.0.82-2](https://github.com/github/copilot-cli/releases/tag/v1.0.82-2).
- **OpenClaw** merged the feature [intelligent multi-agent communication](https://github.com/openclaw/openclaw/pull/113115) to enhance AI-guided participation control.
- **vLLM** introduced multiple fixes with merged PRs to address CUDA memory issues and enhance pipeline robustness, including [GLM-5.3-Flash nightly errors](https://github.com/vllm-project/vllm/issues/54317) that received 5 comments.
- **laama.cpp** faced a notable issue with [unable to open reasoning level selection menu](https://github.com/ggml-org/llama.cpp/issues/27981) garnering 7 comments from users seeking support.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 143,397 · **Open issues:** 15,422 · **Last push:** 1d ago

On August 30, 2026, there were no new releases or merged pull requests for Claude Code, indicating a routine maintenance day. However, several noteworthy issues were reported, including #90637, which highlights a problem where submitted messages become "Queued" and are subsequently lost or mishandled. Additionally, #90667 raised concerns about the default cleanup period permanently deleting critical conversations, leading to significant data loss. Other issues include bugs related to the Windows clipboard image paste in version 2.1.251 (#90657) and account management issues in #90647, where logging out or switching accounts discards MCP OAuth grants. The day concluded with several feature requests, notably #90665, which proposes a global setting to auto-enable "Auto-fix CI and address comments" for all pull requests.

#### 🐛 New Issues
- [#90637](https://github.com/anthropics/claude-code/issues/90637) Desktop: Submitted Message Becomes "Queued" and Is Lost or Mishandled `bug` `platform:windows` `area:desktop` 💬3
- [#90667](https://github.com/anthropics/claude-code/issues/90667) Default cleanupPeriodDays=30 silently and permanently deleted months of irreplaceable conversations, twice 💬1
- [#90647](https://github.com/anthropics/claude-code/issues/90647) [BUG] Claude account logout/switch discards all MCP OAuth grants (mcpOAuth is stored inside the account credential) `bug` `has repro` `platform:macos` `area:auth` 💬1
- [#90658](https://github.com/anthropics/claude-code/issues/90658) [Bug] Claude accesses files outside specified project scope in auto mode `bug` `platform:linux` `area:permissions` `needs-repro` 💬1
- [#90657](https://github.com/anthropics/claude-code/issues/90657) [BUG] Windows clipboard image paste broken in v2.1.251 — "no image found in clipboard" `duplicate` `platform:windows` `area:tui` 💬1
- [#90651](https://github.com/anthropics/claude-code/issues/90651) [BUG] Claude Code hangs indefinitely at "Setting up Claude Code..." with no error when Hardware Virtualization is disabled/unavailable `bug` `has repro` `platform:windows` `area:installation` 💬1
- [#90654](https://github.com/anthropics/claude-code/issues/90654) Add unified "Accept All / Reject All" review panel for agent changes (like Windsurf Cascade) `enhancement` `area:ide` `platform:vscode` 💬1
- [#90666](https://github.com/anthropics/claude-code/issues/90666) [BUG] Claude Code Crashing `duplicate` `platform:windows` `area:desktop`
- [#90665](https://github.com/anthropics/claude-code/issues/90665) Feature request: repo/global setting to auto-enable "Auto-fix CI and address comments" for every PR (incl. gh-created PRs) `duplicate` `enhancement` `area:desktop`
- [#90615](https://github.com/anthropics/claude-code/issues/90615) [BUG] Notion MCP connector toggle doesn't persist — reverts to enabledInChat:false repeatedly `bug` `area:mcp` `area:claude-code-web` `platform:web`
- [#90607](https://github.com/anthropics/claude-code/issues/90607) Inline plugins (zoom-plugin, pdf-viewer, prisma) reconnect after Disable; zoom-plugin has an Authorization header the account never set `duplicate` `platform:macos` `area:plugins`
- [#90664](https://github.com/anthropics/claude-code/issues/90664) [Feature Request] Implement token/cost limits and agent spawning controls to prevent runaway multi-agent operations `enhancement` `platform:macos` `area:cost` `area:agents`
- [#90663](https://github.com/anthropics/claude-code/issues/90663) [BUG] Model skips explicitly-provided reference files to save context, and drops self-announced follow-ups `bug` `platform:macos` `area:model`
- [#90662](https://github.com/anthropics/claude-code/issues/90662) [BUG] PreToolUse/PostToolUse inside a running subagent are sometimes reported under a different agent_id that has no SubagentStart, no agent_type, and never gets a SubagentStop `bug` `platform:macos` `area:hooks` `area:agents`
- [#90661](https://github.com/anthropics/claude-code/issues/90661) preview_start resolves .claude/launch.json from the session cwd, not the calling agent's, so concurrent worktree lanes must contend for one config file `bug` `has repro` `platform:macos` `area:agents`
- [#90660](https://github.com/anthropics/claude-code/issues/90660) [FEATURE] Graduated double-confirmation for wide-scope permission grants (e.g., trusting the home directory) `enhancement` `platform:macos` `area:security` `area:permissions`
- [#90659](https://github.com/anthropics/claude-code/issues/90659) Backgrounded Bash commands can report a false "exit code 0" completion when the command actually failed `bug` `has repro` `area:bash`
- [#90656](https://github.com/anthropics/claude-code/issues/90656) Three coupled defects around the 60s init budget: non-configurable initializeTimeoutMs, misleading error text, and spawnConfigProbe launching a full CLI on a 500ms timer `bug` `has repro` `platform:linux` `area:ide`
- [#90655](https://github.com/anthropics/claude-code/issues/90655) Feature request: Add Simplified Chinese (简体中文) to UI language options `enhancement` `area:tui`
- [#90653](https://github.com/anthropics/claude-code/issues/90653) [Bug] Multiple functionalities broken after upgrade from Opus 4.8 `bug` `platform:macos` `area:model` `needs-repro`

#### 🔒 Closed Issues
- [#61845](https://github.com/anthropics/claude-code/issues/61845) [Bug] Glob and Grep missing from Agent Teams deferred tools catalog
- [#74352](https://github.com/anthropics/claude-code/issues/74352) Feature request: /clear should preserve session color
- [#74357](https://github.com/anthropics/claude-code/issues/74357) Feature request: keybinding actions to jump between user messages in the chat scroll view
- [#74358](https://github.com/anthropics/claude-code/issues/74358) [FEATURE] Show which agent/subagent was invoked in the Background tasks panel
- [#90667](https://github.com/anthropics/claude-code/issues/90667) Default cleanupPeriodDays=30 silently and permanently deleted months of irreplaceable conversations, twice
- [#74335](https://github.com/anthropics/claude-code/issues/74335) Feature request: persist dynamic-workflow run state incrementally (and version the on-disk schema)
- [#74336](https://github.com/anthropics/claude-code/issues/74336) Feature request: plugin UI contribution point in the VS Code/Cursor extension (webview/panel)
- [#74354](https://github.com/anthropics/claude-code/issues/74354) [Feature Request] Allow socket monitoring for traffic analysis use cases
- [#74385](https://github.com/anthropics/claude-code/issues/74385) [FEATURE] 週間利用制限の警告バナーを非表示にする設定がほしい
- [#90653](https://github.com/anthropics/claude-code/issues/90653) [Bug] Multiple functionalities broken after upgrade from Opus 4.8

### OpenAI Codex (`openai/codex`)

**Stars:** 119,814 · **Open issues:** 14,402 · **Last push:** <1h ago

On August 30, 2026, Rust released version 0.151.0, introducing several notable features such as a configurable grace period for tool discovery from optional MCP servers and the ability for extensions to inspect or replace MCP tool results prior to model processing. Additionally, version 0.151.0 includes improvements in plugin catalogs by combining per-repository configurations and identifying invalid project marketplaces without obscuring valid plugins. Among the 14 merged PRs, a fix for proactive multi-agent instruction grammar and enhancements for diagnostic report uploads were key highlights. However, the day also saw the emergence of critical issues, including the Windows app experiencing crashes post-update and the Codex paginated rollout causing duplicate ordinals, which could result in a frozen thread history projection.

#### 🚀 New Releases
- [rust-v0.151.0](https://github.com/openai/codex/releases/tag/rust-v0.151.0) 0.151.0
- [rust-v0.152.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.1) 0.152.0-alpha.1
- [rust-v0.151.0-alpha.7.2](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7.2) 0.151.0-alpha.7.2
- [rust-v0.151.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.12) 0.151.0-alpha.12

#### ✅ Merged PRs
- [#41586](https://github.com/openai/codex/pull/41586) Add Vim search motions to the composer
- [#41570](https://github.com/openai/codex/pull/41570) Fix proactive multi-agent instruction grammar
- [#41569](https://github.com/openai/codex/pull/41569) Harden diagnostic report uploads
- [#41567](https://github.com/openai/codex/pull/41567) Restore thread cwd from owned settings snapshots
- [#41562](https://github.com/openai/codex/pull/41562) Preserve turn lineage across goal continuations
- [#41477](https://github.com/openai/codex/pull/41477) Organize bundled Rust resources under asset directories
- [#41476](https://github.com/openai/codex/pull/41476) Use rules_rs platforms for release binaries
- [#41467](https://github.com/openai/codex/pull/41467) Refresh the TUI model picker from the app server
- [#41464](https://github.com/openai/codex/pull/41464) Preserve permissions when updating session metadata
- [#41461](https://github.com/openai/codex/pull/41461) Source async user message descriptions from the model catalog
- [#41457](https://github.com/openai/codex/pull/41457) Source proactive multi-agent instructions from the model catalog
- [#41456](https://github.com/openai/codex/pull/41456) Support app targets in executor plugin hooks
- [#41454](https://github.com/openai/codex/pull/41454) Block goals after repeated execution host failures
- [#41452](https://github.com/openai/codex/pull/41452) Report code mode host request durations
- [#41449](https://github.com/openai/codex/pull/41449) Rename the read-only Seatbelt platform defaults policy
- [#41448](https://github.com/openai/codex/pull/41448) Clarify question handling in Default collaboration mode
- [#41447](https://github.com/openai/codex/pull/41447) Support `openai/elicitation` form requests

#### 🐛 New Issues
- [#41465](https://github.com/openai/codex/issues/41465) Windows floating pet remains click-through and cannot be dragged `bug` `windows-os` `app` `pets` 💬6
- [#41522](https://github.com/openai/codex/issues/41522) TUI: allow configuring or disabling the inline diff preview limit `enhancement` `TUI` `CLI` `config` 💬2
- [#41583](https://github.com/openai/codex/issues/41583) Windows App constantly crashing after today's update (feedback sent) `bug` `windows-os` `app` 💬3
- [#41532](https://github.com/openai/codex/issues/41532) Remote mobile Codex cannot preview image and video artifacts generated on the connected computer `bug` `windows-os` `app` `remote` 💬3
- [#41566](https://github.com/openai/codex/issues/41566) Codex paginated rollout can emit duplicate ordinal after unfinished turn, permanently freezing thread history projection `bug` `windows-os` `app` `session` 💬3
- [#41571](https://github.com/openai/codex/issues/41571) [Windows 10][26.825.5331.0] Codex stuck in repeating startup logo loop with Application Hang 1002 `bug` `windows-os` `app` 💬3
- [#41584](https://github.com/openai/codex/issues/41584) Bulk project archive only processes loaded tasks; stale entries fail with rollout_not_found `bug` `app` `session` 💬2
- [#41501](https://github.com/openai/codex/issues/41501) Windows pet overlay loses its hit region after the first drag `bug` `windows-os` `app` `pets` 💬2
- [#41565](https://github.com/openai/codex/issues/41565) [Desktop][Windows] Thread-control send/archive can hang without an observable result `bug` `windows-os` `tool-calls` `app` 💬2
- [#41585](https://github.com/openai/codex/issues/41585) [Codex Desktop][macOS] Prompt submission hangs when large pasted text becomes an attachment `bug` `tool-calls` `app` 💬1
- [#41578](https://github.com/openai/codex/issues/41578) Windows Desktop intermittently fails atomic global-state rename with EPERM and leaves large temp files `bug` `windows-os` `app` 💬1
- [#41581](https://github.com/openai/codex/issues/41581) [Windows][26.825.5331.0] Codex Desktop closes during long/tool-heavy sessions while CLI remains stable `bug` `windows-os` `app` `session` 💬1
- [#41580](https://github.com/openai/codex/issues/41580) [Regression] Remote CLI and /side can no longer coordinate Windows Desktop threads; updates break task continuity `bug` `windows-os` `CLI` `app` 💬1
- [#41579](https://github.com/openai/codex/issues/41579) [macOS App] Active task can silently stop making progress and remain active across an OS-update reboot `bug` `app` `session` 💬1
- [#41563](https://github.com/openai/codex/issues/41563) app-server external exec-server selected with externalSandbox, but model tool execution falls back to app-server host identity `bug` `windows-os` `sandbox` `CLI` 💬1
- [#41582](https://github.com/openai/codex/issues/41582) [macOS 26.825.32147] Browser plugin mention has insufficient contrast on black user-message bubble `bug` `app` `browser`
- [#41577](https://github.com/openai/codex/issues/41577) Windows Desktop bundled CLI doctor reports rg.exe missing even though Codex ships it `bug` `windows-os` `app`
- [#41576](https://github.com/openai/codex/issues/41576) $ opens Skills/Apps popup and cannot be disabled `bug` `app` `skills`
- [#41575](https://github.com/openai/codex/issues/41575) ChatGPT macOS app routes generic URLs to Chrome despite in-app browser configuration `bug` `app` `browser`
- [#41574](https://github.com/openai/codex/issues/41574) Copy/export current turn or last N turns including the full execution trace `enhancement` `CLI` `app` `session`
- [#41573](https://github.com/openai/codex/issues/41573) Remote SSH disconnects when large `plugin/list` response blocks WebSocket pongs `bug` `app` `skills` `connectivity`
- [#41572](https://github.com/openai/codex/issues/41572) Linux window controls ignore the system-configured button layout `bug` `app`

#### 🔒 Closed Issues
- [#39612](https://github.com/openai/codex/issues/39612) When in working mode, the operating system mouse cursor will flash wildly.

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,740 · **Open issues:** 872 · **Last push:** 23h ago

On August 30, 2026, Gemini CLI released version v0.59.0-nightly.20260829.g0bd1d4397, which introduced a key fix to enforce fail-closed workspace trust and filter mcpServers in restricted mode, enhancing security and functionality. There were no merged pull requests or new issues reported in the last 24 hours, indicating a day of routine maintenance following the new release. The focus on ensuring workspace trust is particularly noteworthy as it addresses potential security vulnerabilities within workspace operations.

#### 🚀 New Releases
- [v0.59.0-nightly.20260829.g0bd1d4397](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260829.g0bd1d4397) Release v0.59.0-nightly.20260829.g0bd1d4397

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,123 · **Open issues:** 2,244 · **Last push:** 1h ago

On August 29, 2026, GitHub Copilot CLI released version 1.0.82, which introduced several key changes including fixes for messages that previously disrupted the worktree switch during /worktree or /move commands and an update allowing Ctrl+E to expand the plan approval card to view the full plan again. An additional update, 1.0.82-2, confirmed the fix for the worktree message issue. In terms of development, merged pull request #4497 improved the handling of fork pull request associations in the invalid-label writer. Notably, a new issue was raised regarding failures in the remote ADO MCP server with the OAuth implementation used in version 1.0.81.

#### 🚀 New Releases
- [v1.0.82](https://github.com/github/copilot-cli/releases/tag/v1.0.82) 1.0.82
- [v1.0.82-2](https://github.com/github/copilot-cli/releases/tag/v1.0.82-2) 1.0.82-2

#### ✅ Merged PRs
- [#4497](https://github.com/github/copilot-cli/pull/4497) Handle fork PR associations in invalid-label writer

#### 🐛 New Issues
- [#4660](https://github.com/github/copilot-cli/issues/4660) Remote ADO MCP server with OAuth fails in v1.0.81 WAM implementation `triage` 💬1

### OpenCode (`anomalyco/opencode`)

**Stars:** 202,401 · **Open issues:** 5,644 · **Last push:** 4h ago

On August 30, 2026, OpenCode saw no new releases, but a significant pull request was merged, addressing an issue with preserving the Anthropic finish across usage deltas in the AI system. Among the newly opened issues, the most notable is #46153, requesting a GUI for configurable per-model profile parameters, which has already attracted considerable interest with six comments. Additionally, there are several feature requests that aim to enhance the user experience, such as restoring the LPU/Plugin tab menu in the Status popover (#46151) and implementing a dynamic two-row session bar (#46157). Several bug reports were also noted, including a critical issue with the Windows GUI where the Status popover Plugins tab appears empty despite loaded plugins (#46155).

#### ✅ Merged PRs
- [#46171](https://github.com/anomalyco/opencode/pull/46171) fix(ai): preserve Anthropic finish across usage deltas

#### 🐛 New Issues
- [#46153](https://github.com/anomalyco/opencode/issues/46153) [FEATURE]: GUI for per-model profile/context parameters (system prompt, temperature, context window) 💬6
- [#46151](https://github.com/anomalyco/opencode/issues/46151) [FEATURE]: Restore the LPU/Plugin tab button menu in the Status popover 💬5
- [#46157](https://github.com/anomalyco/opencode/issues/46157) [FEATURE]: Dynamic two-row session bar — auto-expands when session title width drops below threshold 💬5
- [#46155](https://github.com/anomalyco/opencode/issues/46155) [BUG/REGRESSION] Windows GUI: Status popover Plugins tab empty despite plugins loaded (race condition) 💬5
- [#46152](https://github.com/anomalyco/opencode/issues/46152) [FEATURE]: Default starting directory to ~/Documents/OpenCode/Projects/Default Project with plugin home 💬3
- [#46192](https://github.com/anomalyco/opencode/issues/46192) 窗口卡死 💬3
- [#46156](https://github.com/anomalyco/opencode/issues/46156) [FEATURE]: Plugin dataflow panel — reserved UI space for per-session metrics and data logs 💬2
- [#46154](https://github.com/anomalyco/opencode/issues/46154) [FEATURE]: Integrate opencode serve as a first-class monitor mode in the desktop client 💬2
- [#46184](https://github.com/anomalyco/opencode/issues/46184) Opencode-go has wrong percentage to more than 100% 💬2
- [#46174](https://github.com/anomalyco/opencode/issues/46174) Windows Desktop starts duplicate MCP processes at idle, causing multi-GB RAM usage 💬2
- [#46147](https://github.com/anomalyco/opencode/issues/46147) What happens: Whenever I need to call a tool (read, bash, edit, etc.), I frequently fail to actually execute the tool call. 💬2
- [#46149](https://github.com/anomalyco/opencode/issues/46149) Opencode go has 101% 💬2
- [#46190](https://github.com/anomalyco/opencode/issues/46190) MCP tools disappear after context compaction in long sessions (tool manifest drops to 0, server stays connected) 💬1
- [#46172](https://github.com/anomalyco/opencode/issues/46172) opencode 1.18.21 crashes with SIGILL at UD2 instruction 💬1
- [#46168](https://github.com/anomalyco/opencode/issues/46168) Web UI features fail over non-localhost HTTP origins: crypto.randomUUID unavailable in insecure context (session delete, file attach) `2.0` 💬1
- [#46169](https://github.com/anomalyco/opencode/issues/46169) API Key 401 Invalid API key — muse-spark-1.2-contributor models list works but chat rejected 💬1
- [#46163](https://github.com/anomalyco/opencode/issues/46163) question tool: aborting mid-question leaves the request pending forever and never publishes question.rejected 💬1
- [#46164](https://github.com/anomalyco/opencode/issues/46164) Manual /compact sends the full history to the compaction model without a context-fit check 💬1
- [#46198](https://github.com/anomalyco/opencode/issues/46198) [FEATURE]: Expose V2 session resume through the public API
- [#46195](https://github.com/anomalyco/opencode/issues/46195) Allow configuring the desktop dev remote-debugging port
- [#46194](https://github.com/anomalyco/opencode/issues/46194) Add --no-minify flag to the opencode CLI build script
- [#46189](https://github.com/anomalyco/opencode/issues/46189) .opencode/ dirs (plans + node_modules) duplicated in every opened project, no opt-out
- [#46187](https://github.com/anomalyco/opencode/issues/46187) One unreachable well-known origin hides every other integration `2.0`
- [#46178](https://github.com/anomalyco/opencode/issues/46178) DeepSeek V4 --variant none is accepted but does not disable thinking
- [#46176](https://github.com/anomalyco/opencode/issues/46176) Phantom task: model self-invoked unrelated skill after completing requested task
- [#46173](https://github.com/anomalyco/opencode/issues/46173) [FEATURE]: upload attachments to the server so agent tools can read them (managed per-session store)
- [#46166](https://github.com/anomalyco/opencode/issues/46166) Instance service init has no timeout and can hang the bootstrap layer indefinitely
- [#46161](https://github.com/anomalyco/opencode/issues/46161) Plugin init and config hook can block the opencode layer indefinitely
- [#46158](https://github.com/anomalyco/opencode/issues/46158) [FEATURE]:Add an opt-in "data-sharing free-tier fallback" for subscribed users during usage-limit windows

#### 🔒 Closed Issues
- [#46155](https://github.com/anomalyco/opencode/issues/46155) [BUG/REGRESSION] Windows GUI: Status popover Plugins tab empty despite plugins loaded (race condition)
- [#44923](https://github.com/anomalyco/opencode/issues/44923) Windows Terminal: every copy destroys the tab title and it never comes back
- [#46192](https://github.com/anomalyco/opencode/issues/46192) 窗口卡死
- [#43800](https://github.com/anomalyco/opencode/issues/43800) Agent gets stuck in a tool-call loop, repeating the same action and wasting tokens
- [#46184](https://github.com/anomalyco/opencode/issues/46184) Opencode-go has wrong percentage to more than 100%
- [#46147](https://github.com/anomalyco/opencode/issues/46147) What happens: Whenever I need to call a tool (read, bash, edit, etc.), I frequently fail to actually execute the tool call.
- [#46149](https://github.com/anomalyco/opencode/issues/46149) Opencode go has 101%
- [#46198](https://github.com/anomalyco/opencode/issues/46198) [FEATURE]: Expose V2 session resume through the public API

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,489 · **Open issues:** 1,271 · **Last push:** <1h ago

On August 30, 2026, there were no new releases for Qwen Code, but notable activity included the merging of PR #8789, which optimizes repeated inline image rendering in the CLI. The day also saw a spike in new issues, particularly #10520, which reports that a toolSearch threshold greater than 0 is causing a "failed to parse grammar" error with MCP tools, whereas a threshold of 0 functions correctly. Additional critical issues involve failed initializations in version 0.22.3 (issue #10530) and a series of failures in the main CI tests, which highlight ongoing stability challenges. Overall, it was a day of routine maintenance with significant attention on these emerging issues.

#### ✅ Merged PRs
- [#8789](https://github.com/QwenLM/qwen-code/pull/8789) fix(cli): optimize repeated inline image rendering

#### 🐛 New Issues
- [#10520](https://github.com/QwenLM/qwen-code/issues/10520) toolSearch threshold > 0 causes llama.cpp 400 "failed to parse grammar" with MCP tools; threshold 0 works `priority/P2` `type/bug` `category/tools` `scope/mcp` 💬4
- [#10530](https://github.com/QwenLM/qwen-code/issues/10530) 400 Failed to initialize samplers in 0.22.3 `priority/P2` `type/bug` `category/tools` `status/ready-for-human` 💬3
- [#10524](https://github.com/QwenLM/qwen-code/issues/10524) setup-worktree: corepack->npx fallback only fires on ENOENT; EACCES aborts bootstrap `priority/P3` `type/bug` `category/development` `scope/installation` 💬2
- [#10510](https://github.com/QwenLM/qwen-code/issues/10510) Main CI failed: E2E Tests on 553590daab4e `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10533](https://github.com/QwenLM/qwen-code/issues/10533) Main CI failed: E2E Tests on 413b6d15d3d7 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10531](https://github.com/QwenLM/qwen-code/issues/10531) Main CI failed: E2E Tests on 74735f643bd8 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10511](https://github.com/QwenLM/qwen-code/issues/10511) Deferred review findings from PR #10455 💬1
- [#10528](https://github.com/QwenLM/qwen-code/issues/10528) Main CI failed: E2E Tests on ad52c4e05547 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10529](https://github.com/QwenLM/qwen-code/issues/10529) Main CI failed: Qwen Code CI on 02f2101f4305 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10525](https://github.com/QwenLM/qwen-code/issues/10525) Main CI failed: E2E Tests on 1f2433b0ff56 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10521](https://github.com/QwenLM/qwen-code/issues/10521) Main CI failed: Qwen Code CI on 03b5ee771f9a `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬1
- [#10523](https://github.com/QwenLM/qwen-code/issues/10523) Main CI failed: Qwen Code CI on 265e7f1fbe67 `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬1
- [#10519](https://github.com/QwenLM/qwen-code/issues/10519) Main CI failed: E2E Tests on fe34a5cf22b0 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10515](https://github.com/QwenLM/qwen-code/issues/10515) Main CI failed: E2E Tests on f8bcdaae8f78 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10491](https://github.com/QwenLM/qwen-code/issues/10491) Main CI failed: E2E Tests on 379bef96030e `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10518](https://github.com/QwenLM/qwen-code/issues/10518) Main CI failed: E2E Tests on 66063621c11c `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10513](https://github.com/QwenLM/qwen-code/issues/10513) Main CI failed: E2E Tests on 006d51c0dd21 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10509](https://github.com/QwenLM/qwen-code/issues/10509) Main CI failed: Qwen Code CI on eaa2f5695fc2 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10508](https://github.com/QwenLM/qwen-code/issues/10508) Main CI failed: Qwen Code CI on 37e74913ccd5 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10496](https://github.com/QwenLM/qwen-code/issues/10496) Main CI failed: SDK Python on 49f946b44cba `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬1

#### 🔒 Closed Issues
- [#8625](https://github.com/QwenLM/qwen-code/issues/8625) windows 终端中输入中文时，显示拼音看不清
- [#10372](https://github.com/QwenLM/qwen-code/issues/10372) fix(vscode-ide-companion): closeDiff skips the workspace-relative path resolution showDiff performs
- [#8721](https://github.com/QwenLM/qwen-code/issues/8721) npm test doesn't run due to unkown flag
- [#9025](https://github.com/QwenLM/qwen-code/issues/9025) Keyless Vertex AI is not inferred from the environment, so headless ADC runs exit with no auth type selected
- [#8608](https://github.com/QwenLM/qwen-code/issues/8608) perf(cli): avoid repeated work and height jumps for inline images
- [#8172](https://github.com/QwenLM/qwen-code/issues/8172) Agent Team: teammate messages queue for the entire duration of a long multi-tool-call turn, not just the next response
- [#10373](https://github.com/QwenLM/qwen-code/issues/10373) fix(vscode-ide-companion): webview hardcodes html lang="en", making readLanguage() unable to resolve zh-CN
- [#10405](https://github.com/QwenLM/qwen-code/issues/10405) fix(web-shell): session-switch overlay stays permanently locked while daemon is unreachable (from PR #9811 JHQ)
- [#10385](https://github.com/QwenLM/qwen-code/issues/10385) fix(web-shell): message edit passes window-local turn index to session-global rewind snapshots
- [#10406](https://github.com/QwenLM/qwen-code/issues/10406) fix(web-shell): infinite re-render loop via persistent connection.error and inline onError (from PR #9811 JHV)
- [#8617](https://github.com/QwenLM/qwen-code/issues/8617) vscode插件的选择框会遮挡内容
- [#10073](https://github.com/QwenLM/qwen-code/issues/10073) Agent Team: send_message reports a background task error for a teammate destination
- [#9529](https://github.com/QwenLM/qwen-code/issues/9529) fix(acp): route-scope the session token-limit cache in Session.ts (#9454 follow-up)
- [#8748](https://github.com/QwenLM/qwen-code/issues/8748) bug(config): general.dynamicCommandTranslation is exposed but has no runtime effect
- [#8948](https://github.com/QwenLM/qwen-code/issues/8948) Provider update prompt promises a model switch the update no longer performs
- [#10386](https://github.com/QwenLM/qwen-code/issues/10386) Follow up surviving-hook supervisor hardening after #10288
- [#10208](https://github.com/QwenLM/qwen-code/issues/10208) Agent Team: failed concurrent spawn can persist a ghost member
- [#8426](https://github.com/QwenLM/qwen-code/issues/8426) Dev-only build warning ("Build timestamp file ... not found, run npm run build") shown by release installs via shared temp file
- [#10248](https://github.com/QwenLM/qwen-code/issues/10248) Web shell: DingTalk channel messages appear under Tasks instead of Channels
- [#9816](https://github.com/QwenLM/qwen-code/issues/9816) DaemonClient workspace file helpers throw "Invalid URL" with a relative daemon base URL
- [#10266](https://github.com/QwenLM/qwen-code/issues/10266) Daemon session initialization continues after timeout
- [#10438](https://github.com/QwenLM/qwen-code/issues/10438) Main CI failed: Qwen Code CI on 5ae363e2f906
- [#10515](https://github.com/QwenLM/qwen-code/issues/10515) Main CI failed: E2E Tests on f8bcdaae8f78
- [#10491](https://github.com/QwenLM/qwen-code/issues/10491) Main CI failed: E2E Tests on 379bef96030e
- [#10496](https://github.com/QwenLM/qwen-code/issues/10496) Main CI failed: SDK Python on 49f946b44cba
- [#9765](https://github.com/QwenLM/qwen-code/issues/9765) bug(core): DeepSeek provider forces temperature 0, causing reasoning models (deepseek-v4-flash) to loop in thinking

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

**Stars:** 388,016 · **Open issues:** 5,744 · **Last push:** <1h ago

Today, there were no new releases for OpenClaw, but several important fixes and features were merged. Notably, the PR #113115 introduced intelligent multi-agent communication through fast AI-guided participation control and fresh-message redrafting, enhancing the system's responsiveness. Additionally, fixes aimed at improving session management and plugin integration, such as PR #132804, which resolves issues with resuming sessions when trusted runtime plugins are missing, were included. Among the newly reported issues, #132762 highlights a bug where overflow retry can mistakenly end successfully without final delivery, indicating potential risks in workflow reliability that may need immediate attention. Overall, the day's updates focus on refining stability and performance amidst ongoing enhancements.

#### ✅ Merged PRs
- [#132954](https://github.com/openclaw/openclaw/pull/132954) fix(android): current-branch queued input fails after reconnect
- [#132804](https://github.com/openclaw/openclaw/pull/132804) fix: resume sessions with trusted runtime plugins absent at startup
- [#113115](https://github.com/openclaw/openclaw/pull/113115) feat(matrix): intelligent multi-agent communication via fast AI-guided participation control and fresh-message redrafting
- [#132949](https://github.com/openclaw/openclaw/pull/132949) fix(test): preserve shutdown fixture cancellation outcomes
- [#132940](https://github.com/openclaw/openclaw/pull/132940) perf(web): reuse basic HTML extraction work
- [#132935](https://github.com/openclaw/openclaw/pull/132935) test(mattermost): reuse slash handler imports with isolated state
- [#132925](https://github.com/openclaw/openclaw/pull/132925) fix(ci): keep changed plugin tests in PR fallback
- [#132929](https://github.com/openclaw/openclaw/pull/132929) test(tasks): skip empty writes when selecting durable fixtures
- [#132934](https://github.com/openclaw/openclaw/pull/132934) fix(doctor): preserve health repairs during stable upgrades
- [#132946](https://github.com/openclaw/openclaw/pull/132946) perf(agents): trim history without temporary arrays
- [#132922](https://github.com/openclaw/openclaw/pull/132922) fix(android): stop hiding reconnect fixture teardown failures
- [#132748](https://github.com/openclaw/openclaw/pull/132748) fix(release): retain bounded npm diagnostics per phase
- [#132950](https://github.com/openclaw/openclaw/pull/132950) fix(ci): route Android-only changed checks to Kotlin lint
- [#132592](https://github.com/openclaw/openclaw/pull/132592) fix(line): handle each event with the config that is live for it
- [#132938](https://github.com/openclaw/openclaw/pull/132938) refactor(agents): reuse usage predicate
- [#132936](https://github.com/openclaw/openclaw/pull/132936) [BACKPORT] fix(codex): Fix codex apps disappear when plugin is in read-only or prompt mode
- [#131351](https://github.com/openclaw/openclaw/pull/131351) fix(memory): indexing fails when provider API key uses a SecretRef
- [#132921](https://github.com/openclaw/openclaw/pull/132921) fix(ci): stop Workflow Sanity Git descendants before fallback
- [#130345](https://github.com/openclaw/openclaw/pull/130345) fix(qa): preserve prepared runtime during suites
- [#132899](https://github.com/openclaw/openclaw/pull/132899) fix(review): require patch-backed provenance
- [#132927](https://github.com/openclaw/openclaw/pull/132927) refactor(agents): reuse errno predicate
- [#130394](https://github.com/openclaw/openclaw/pull/130394) fix(codex): Fix codex apps disappear when plugin is in read-only or prompt mode
- [#132923](https://github.com/openclaw/openclaw/pull/132923) chore(ui): refresh control ui locales
- [#117176](https://github.com/openclaw/openclaw/pull/117176) fix(messages): thread-reply deliveries are not marked as current-source replies
- [#132902](https://github.com/openclaw/openclaw/pull/132902) perf(checks): scan deprecated API inputs once
- [#132802](https://github.com/openclaw/openclaw/pull/132802) perf(agents): defer unused Code Mode runtimes
- [#132915](https://github.com/openclaw/openclaw/pull/132915) fix(android): isolate bootstrap test gateway connections
- [#132920](https://github.com/openclaw/openclaw/pull/132920) test: batch boundary guard lint fixtures
- [#132919](https://github.com/openclaw/openclaw/pull/132919) refactor(agents): reuse auth profile listing
- [#132916](https://github.com/openclaw/openclaw/pull/132916) fix(gateway): stop restart loops for newer database schemas
- [#132858](https://github.com/openclaw/openclaw/pull/132858) fix(testing): reject invalid profiler CLI options
- [#132741](https://github.com/openclaw/openclaw/pull/132741) fix(ui): hide empty PR message for local-only branches
- [#132782](https://github.com/openclaw/openclaw/pull/132782) fix(qa): verify Slack verbose progress privacy
- [#132911](https://github.com/openclaw/openclaw/pull/132911) refactor(auth): consolidate provider compatibility checks
- [#132909](https://github.com/openclaw/openclaw/pull/132909) fix(gateway): reject stale node work before enqueue
- [#132032](https://github.com/openclaw/openclaw/pull/132032) fix(subagents): recognize requester replies when retrying settle-wake delivery
- [#132913](https://github.com/openclaw/openclaw/pull/132913) test(tasks): avoid redundant registry fixture initialization
- [#132501](https://github.com/openclaw/openclaw/pull/132501) fix(line): apply a group's configured skill scope
- [#132910](https://github.com/openclaw/openclaw/pull/132910) chore(ui): refresh control ui locales
- [#132885](https://github.com/openclaw/openclaw/pull/132885) test(cron): preserve Date-domain corruption fixtures
- [#132811](https://github.com/openclaw/openclaw/pull/132811) fix(plugins): preserve declared dependencies in source checkouts
- [#132875](https://github.com/openclaw/openclaw/pull/132875) chore(i18n): refresh native locales
- [#132891](https://github.com/openclaw/openclaw/pull/132891) fix(browser): avoid missing-directory diagnosis after native-host refusals
- [#132867](https://github.com/openclaw/openclaw/pull/132867) fix(test): isolate Vitest caches across linked checkouts
- [#132904](https://github.com/openclaw/openclaw/pull/132904) fix(ui): explain unavailable microphones on WebKit
- [#132900](https://github.com/openclaw/openclaw/pull/132900) fix(auto-reply): preserve code indentation before inference
- [#132892](https://github.com/openclaw/openclaw/pull/132892) fix(gateway): honor native Stop run ownership
- [#132832](https://github.com/openclaw/openclaw/pull/132832) fix(ui): stabilize readiness verification and media playback
- [#132872](https://github.com/openclaw/openclaw/pull/132872) fix(ui): keep native catalog continuations on the selected agent
- [#132897](https://github.com/openclaw/openclaw/pull/132897) fix(usage): preserve MiniMax reset alias order
- [#132296](https://github.com/openclaw/openclaw/pull/132296) fix(memory-wiki): publish dashboard snapshots
- [#132874](https://github.com/openclaw/openclaw/pull/132874) fix(test): isolate legacy agent directory overrides
- [#127280](https://github.com/openclaw/openclaw/pull/127280) fix(qa): reserve Matrix no-reply cleanup budget
- [#132770](https://github.com/openclaw/openclaw/pull/132770) refactor: consolidate plugin registry diagnostics
- [#132877](https://github.com/openclaw/openclaw/pull/132877) fix(gateway): avoid shutdown stalls with paired workers
- [#132836](https://github.com/openclaw/openclaw/pull/132836) fix(qa): retain debug logs across cleanup retries
- [#132890](https://github.com/openclaw/openclaw/pull/132890) fix: allow subagent spawns from system events
- [#132815](https://github.com/openclaw/openclaw/pull/132815) fix(chat): preserve fresh turn order after session reset
- [#132878](https://github.com/openclaw/openclaw/pull/132878) fix: isolate browser bindings and clipboard teardown
- [#132821](https://github.com/openclaw/openclaw/pull/132821) perf: reduce redundant cloud workspace transfer work
- [#132873](https://github.com/openclaw/openclaw/pull/132873) fix(android): delayed archive completion switches away from newer chat
- [#132882](https://github.com/openclaw/openclaw/pull/132882) refactor(tasks): share status cell formatting
- [#132880](https://github.com/openclaw/openclaw/pull/132880) test(codex): drop the duplicate channel-tool-progress lane entry
- [#132726](https://github.com/openclaw/openclaw/pull/132726) fix: release checks fail on valid Workshop abstention
- [#130285](https://github.com/openclaw/openclaw/pull/130285) fix: keep side chat available for large session tails
- [#132551](https://github.com/openclaw/openclaw/pull/132551) fix(line): send outbound media as the kind its URL proves
- [#128481](https://github.com/openclaw/openclaw/pull/128481) test(codex): lock advertised Ultra session intent
- [#132462](https://github.com/openclaw/openclaw/pull/132462) chore(ai): reduce duplicate Anthropic stream tests
- [#130349](https://github.com/openclaw/openclaw/pull/130349) fix(tui): reload auth store ownership after login
- [#132523](https://github.com/openclaw/openclaw/pull/132523) fix(release): validate extended-stable maintenance patches
- [#132871](https://github.com/openclaw/openclaw/pull/132871) refactor(plugins): reuse concurrency helper
- [#132776](https://github.com/openclaw/openclaw/pull/132776) fix(qa): prevent false Matrix bootstrap passes and leaked setup resources
- [#132870](https://github.com/openclaw/openclaw/pull/132870) chore(ui): refresh control ui locales
- [#131466](https://github.com/openclaw/openclaw/pull/131466) fix(macos): keep node connections working after app rebuilds
- [#132816](https://github.com/openclaw/openclaw/pull/132816) fix(release): unblock historical upgrade transcript and plugin checks
- [#132866](https://github.com/openclaw/openclaw/pull/132866) refactor(scripts): reuse dependency report CLI helpers
- [#132528](https://github.com/openclaw/openclaw/pull/132528) fix(tui): preserve large pasted drafts after blocked submit
- [#132460](https://github.com/openclaw/openclaw/pull/132460) test(ios): prune brittle root tabs source guards
- [#132856](https://github.com/openclaw/openclaw/pull/132856) fix(ci): restore post-update service fixture isolation
- [#132461](https://github.com/openclaw/openclaw/pull/132461) test(macos): remove test-only state seams
- [#132746](https://github.com/openclaw/openclaw/pull/132746) fix(test): prevent Gateway E2E worker exhaustion
- [#132814](https://github.com/openclaw/openclaw/pull/132814) chore(ui): refresh control ui locales
- [#132137](https://github.com/openclaw/openclaw/pull/132137) feat(ui): add task progress disclosure preference
- [#132835](https://github.com/openclaw/openclaw/pull/132835) fix(doctor): recover generated model metadata after upgrades
- [#132549](https://github.com/openclaw/openclaw/pull/132549) refactor(claws): share extension provenance SQL params
- [#132808](https://github.com/openclaw/openclaw/pull/132808) fix(test): join tsx fixture children before cleanup
- [#132792](https://github.com/openclaw/openclaw/pull/132792) fix(ui): align tool call icons with labels
- [#132850](https://github.com/openclaw/openclaw/pull/132850) fix(code-mode): keep truncation counts tied to original output
- [#132777](https://github.com/openclaw/openclaw/pull/132777) fix(test): avoid startup race in heartbeat routing verification
- [#132844](https://github.com/openclaw/openclaw/pull/132844) fix(sqlite): prevent WAL split-brain cleanup corruption
- [#132818](https://github.com/openclaw/openclaw/pull/132818) fix: worker sessions cannot message Gateway parents or siblings
- [#132638](https://github.com/openclaw/openclaw/pull/132638) fix(ci): stop downloading a second repository copy for the CI harness
- [#132812](https://github.com/openclaw/openclaw/pull/132812) docs: clarify agent ownership in session monitoring
- [#132800](https://github.com/openclaw/openclaw/pull/132800) fix(ui): keep Review file previews within panel
- [#132428](https://github.com/openclaw/openclaw/pull/132428) fix(ci): share Git ownership across workflow fetch policies
- [#132772](https://github.com/openclaw/openclaw/pull/132772) perf(scripts): skip irrelevant boundary report source reads
- [#132403](https://github.com/openclaw/openclaw/pull/132403) fix: preserve private hook checks and diagnostics
- [#132710](https://github.com/openclaw/openclaw/pull/132710) fix(qa): keep Telegram release bootstrap configs current
- [#132676](https://github.com/openclaw/openclaw/pull/132676) fix(qa): report temporary directory cleanup failures
- [#132694](https://github.com/openclaw/openclaw/pull/132694) fix(e2e): exclude dev tooling from prebuilt package fixtures
- [#132784](https://github.com/openclaw/openclaw/pull/132784) fix(cli): reduce gateway status memory on constrained hosts
- [#132121](https://github.com/openclaw/openclaw/pull/132121) fix: completed restart recovery no longer blocks sessions
- [#132824](https://github.com/openclaw/openclaw/pull/132824) fix(test): synchronize custom worker shutdown proof
- [#132084](https://github.com/openclaw/openclaw/pull/132084) fix(auto-reply): preserve successful compaction in terminal failures
- [#132419](https://github.com/openclaw/openclaw/pull/132419) fix(browser): worker targets no longer crash the gateway
- [#132820](https://github.com/openclaw/openclaw/pull/132820) test: restore native worker shutdown profiling coverage
- [#132760](https://github.com/openclaw/openclaw/pull/132760) test(gateway): restore event authorization fixture coverage
- [#132707](https://github.com/openclaw/openclaw/pull/132707) improve: verify Workshop review outcomes through the real runtime
- [#128350](https://github.com/openclaw/openclaw/pull/128350) fix(macos): keep CLI install complete when Gateway startup fails
- [#132733](https://github.com/openclaw/openclaw/pull/132733) fix: plugin conversation bindings fail for opaque targets
- [#132570](https://github.com/openclaw/openclaw/pull/132570) feat: per-session colors across web, macOS, iOS, Android with Claude Code import
- [#132757](https://github.com/openclaw/openclaw/pull/132757) fix(memory): preserve session excerpts across resets
- [#132732](https://github.com/openclaw/openclaw/pull/132732) fix: keep near-limit worker launches within transport bounds
- [#132698](https://github.com/openclaw/openclaw/pull/132698) fix: show Crabbox help before preparing remote execution
- [#132224](https://github.com/openclaw/openclaw/pull/132224) fix(workers): avoid provisioning during failed-dispatch cleanup
- [#132774](https://github.com/openclaw/openclaw/pull/132774) test: avoid duplicate async task registry resets
- [#132734](https://github.com/openclaw/openclaw/pull/132734) fix(plugins): keep concurrent catalog adoption scoped to each agent
- [#132715](https://github.com/openclaw/openclaw/pull/132715) fix(maintainers): compare gh and GraphQL repository identity by matching id shape
- [#132713](https://github.com/openclaw/openclaw/pull/132713) fix(macos): restore Codex catalogs on paired Macs
- [#132722](https://github.com/openclaw/openclaw/pull/132722) fix(qa): align release E2E fixtures with current contracts
- [#132691](https://github.com/openclaw/openclaw/pull/132691) refactor: simplify audio attachment projection
- [#132678](https://github.com/openclaw/openclaw/pull/132678) fix(sessions): adopt native threads with duplicate titles
- [#132684](https://github.com/openclaw/openclaw/pull/132684) test: honor explicit live profile credential mode
- [#132111](https://github.com/openclaw/openclaw/pull/132111) fix(subagents): resolve completion recovery by exact run identity
- [#132620](https://github.com/openclaw/openclaw/pull/132620) fix: prevent bounded transcript event ID reuse
- [#132656](https://github.com/openclaw/openclaw/pull/132656) perf(test): consolidate duplicate sweeper close-reopen proof
- [#132652](https://github.com/openclaw/openclaw/pull/132652) perf(test): avoid inventory scans for exact test validation
- [#130546](https://github.com/openclaw/openclaw/pull/130546) fix(ui): render model provider controls progressively
- [#128500](https://github.com/openclaw/openclaw/pull/128500) fix(claws): keep deletion fence through cleanup
- [#132504](https://github.com/openclaw/openclaw/pull/132504) fix(browser): preserve targets when relay clients share Chrome
- [#127074](https://github.com/openclaw/openclaw/pull/127074) fix(workboard): let proofId alone resolve an already-terminal proof [AI-assisted]
- [#132578](https://github.com/openclaw/openclaw/pull/132578) fix(channels): accept env SecretRefs with shared default aliases
- [#132771](https://github.com/openclaw/openclaw/pull/132771) test: share HTTP rejection resource cleanup proof
- [#132737](https://github.com/openclaw/openclaw/pull/132737) perf(ui): stage the next history page so back-scroll prepends land instantly
- [#132735](https://github.com/openclaw/openclaw/pull/132735) fix(test): preserve process fixture failures during cleanup
- [#132745](https://github.com/openclaw/openclaw/pull/132745) fix(codex): reaper could kill a recycled-pid process and skipped cleanup until next use
- [#132706](https://github.com/openclaw/openclaw/pull/132706) fix(worktrees): reclaim archived checkouts and bound disk allocation

#### 🐛 New Issues
- [#132762](https://github.com/openclaw/openclaw/issues/132762) [Bug]: overflow retry can end successfully on a tool result without final delivery `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬10
- [#132547](https://github.com/openclaw/openclaw/issues/132547) Cloud follow-up admission advances the transcript beneath an active worker turn `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬3
- [#132612](https://github.com/openclaw/openclaw/issues/132612) Microsoft Teams drops native voice-message intent `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬3
- [#132649](https://github.com/openclaw/openclaw/issues/132649) [Bug]: bench-agent-concurrency drain test flakes in CI shard core-unit-fast-1 (30s wait lapses with 1 active work item) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬3
- [#132828](https://github.com/openclaw/openclaw/issues/132828) [Bug]: `curl -fsSL https://openclaw.ai/install.sh | bash` fails to install, on `fedora:44`. `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#132924](https://github.com/openclaw/openclaw/issues/132924) [Bug]: Crabbox warm-image refresh loses failed checkpoint cleanup `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#132855](https://github.com/openclaw/openclaw/issues/132855) [Bug]: Profiler CLI accepts invalid options before config loading `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#132373](https://github.com/openclaw/openclaw/issues/132373) [Bug]: Directive preprocessing destroys code indentation before inference `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#132869](https://github.com/openclaw/openclaw/issues/132869) [Bug]: Native catalog continuation uses the default agent after selecting another agent `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#132864](https://github.com/openclaw/openclaw/issues/132864) [Bug]: Dev Git update fails build verification before detached restart starts `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#132826](https://github.com/openclaw/openclaw/issues/132826) [Bug]: QA cleanup retries erase preserved gateway logs `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#132819](https://github.com/openclaw/openclaw/issues/132819) [Bug]: Gateway shutdown rejects pending node completion replies during worker cleanup `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#132817](https://github.com/openclaw/openclaw/issues/132817) [Bug]: sessions_spawn from a cron systemEvent session fails with `invalid agent params: unknown channel: cron-event` `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#132810](https://github.com/openclaw/openclaw/issues/132810) [Bug]: Control UI reverses fresh turns after same-session reset `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#132837](https://github.com/openclaw/openclaw/issues/132837) [Bug]: Android delayed archive completion switches away from newer chat `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#132526](https://github.com/openclaw/openclaw/issues/132526) [Bug]: TUI retries can send a large-paste placeholder after blocked submit `maintainer` `P2` `clawsweeper:source-repro` `impact:message-loss` 💬2
- [#132865](https://github.com/openclaw/openclaw/issues/132865) [Bug]: full backup cannot preserve supported ~/.openclaw/skills symlinks to ~/.agents/skills `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#132862](https://github.com/openclaw/openclaw/issues/132862) [Bug]: Doctor repeatedly retries orphan Skill Workshop proposal migrations `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#132575](https://github.com/openclaw/openclaw/issues/132575) [Bug]: Code Mode re-truncates markers instead of preserving original output provenance `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#132766](https://github.com/openclaw/openclaw/issues/132766) Outbound delivery mirror takes its transcript writer fence with no arguments, so cross-session mirrors into a rebound target session are silently dropped `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#132616](https://github.com/openclaw/openclaw/issues/132616) [Bug]: configure crashes after writing config with "state.reclaimGuards is not iterable" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#132625](https://github.com/openclaw/openclaw/issues/132625) infer model run without --thinking sends enable_thinking:false to Z.AI GLM-5.x and fails with 400 (always-thinking models) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#132768](https://github.com/openclaw/openclaw/issues/132768) [Bug]: exec-approvals migration gate blocks doctor --fix and all exec operations — regression of #132495 `bug` `regression` `P1` `impact:other` 💬2
- [#132484](https://github.com/openclaw/openclaw/issues/132484) [Bug]: Chrome relay labeled screenshots fail after Playwright lists tabs `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#132674](https://github.com/openclaw/openclaw/issues/132674) [Bug]: Paired native Mac Codex catalog rejects Gateway agentId parameters `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#132708](https://github.com/openclaw/openclaw/issues/132708) [memory] openai-compatible embeddings need configurable throttle + honor Retry-After + enable Batch API `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#132670](https://github.com/openclaw/openclaw/issues/132670) [Bug]: archived worktrees and unbounded allocation can fill the Gateway disk `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#132669](https://github.com/openclaw/openclaw/issues/132669) [Bug]: Docs Agent counts canceled runs toward cadence and review history `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#132424](https://github.com/openclaw/openclaw/issues/132424) [Bug]: Codex drops offloaded images during same-turn steering `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#132631](https://github.com/openclaw/openclaw/issues/132631) [Bug]: Boundary preparation can still time out after native emit `bug` `maintainer` `P2` `clawsweeper:needs-live-repro` 💬2
- [#132667](https://github.com/openclaw/openclaw/issues/132667) [Bug]: QA cleanup hides temporary-directory removal failures `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#132714](https://github.com/openclaw/openclaw/issues/132714) [Bug]: Control UI keeps an old run-error banner after successful recovery `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#132423](https://github.com/openclaw/openclaw/issues/132423) [Bug]: Split-turn summaries duplicate canonical sections and poison later compaction `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#132677](https://github.com/openclaw/openclaw/issues/132677) [Bug]: adopting native sessions with duplicate titles fails `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#132629](https://github.com/openclaw/openclaw/issues/132629) [Bug]: tsgo test timeout skips process join and hides diagnostics `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#132597](https://github.com/openclaw/openclaw/issues/132597) [Bug]: Trailing runtime-context carrier relocation breaks local model (Ollama) replies on messaging channels (Telegram) `bug` `no-stale` `bug:behavior` `P1` 💬2
- [#132601](https://github.com/openclaw/openclaw/issues/132601) docs(plugin-sdk): clarify safe generated-video URL materialization `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#132586](https://github.com/openclaw/openclaw/issues/132586) [Bug]: Compaction reopens reset-discarded history and misorders boundary markers `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#132546](https://github.com/openclaw/openclaw/issues/132546) [Bug]: split-turn summaries omit custom focus in default compaction mode `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#132605](https://github.com/openclaw/openclaw/issues/132605) [Bug]: shared auth migration rejects a redundant legacy subset of a richer target `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#132948](https://github.com/openclaw/openclaw/issues/132948) [Bug]: Android fails current-branch queued input after reconnect `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#132963](https://github.com/openclaw/openclaw/issues/132963) [Bug]: Android offline history can revert after a delayed reconnect `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#132961](https://github.com/openclaw/openclaw/issues/132961) CLI session JSON omits stored session colors `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#132957](https://github.com/openclaw/openclaw/issues/132957) [Bug]: QA runtime directories reappear after successful cleanup `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#132952](https://github.com/openclaw/openclaw/issues/132952) cron: onTimer holds a global running flag across job execution, serializing all schedules behind one long job (maxConcurrentRuns has no effect) `P1` `impact:other` 💬1
- [#132930](https://github.com/openclaw/openclaw/issues/132930) Doctor aborts structured health repairs when stable Codex is retained during upgrade `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#132941](https://github.com/openclaw/openclaw/issues/132941) [Bug]: `openclaw mcp serve` hangs on pre-initialize `server/discover`, breaking ChatGPT Secure MCP Tunnel `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#132926](https://github.com/openclaw/openclaw/issues/132926) [Bug]: Model-context clipping can break fresh tool results and read continuations `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#132303](https://github.com/openclaw/openclaw/issues/132303) agents.list[].tools.deny is not enforced for the claude-cli backend (native tools stay always-on) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-security-review` 💬1
- [#132914](https://github.com/openclaw/openclaw/issues/132914) [Bug]: Gateway heap grows across repeated in-process restarts, including after forced GC `bug` `maintainer` `P2` `clawsweeper:current-main-repro` 💬1
- [#132898](https://github.com/openclaw/openclaw/issues/132898) Sandbox: session cwd reports a host path that does not exist in the container, so write succeeds and exec cannot run what it wrote `P1` `impact:security` `impact:message-loss` 💬1
- [#132496](https://github.com/openclaw/openclaw/issues/132496) channels.line.groups.<id>.skills validates and is documented, but never reaches the turn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#132889](https://github.com/openclaw/openclaw/issues/132889) [Bug]: Native-host refusal incorrectly reports missing Chrome user-data directories `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#132907](https://github.com/openclaw/openclaw/issues/132907) Non-bundled extension: `api.on("llm_output", ...)` silently drops registration under claude-cli backend 💬1
- [#132905](https://github.com/openclaw/openclaw/issues/132905) [Feature]: Deliver lifecycle statusReactions emojis on Mattermost to match Discord, Slack, Signal, Telegram, and WhatsApp `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#132893](https://github.com/openclaw/openclaw/issues/132893) [Bug]: Codex message forks reject supported paginated history `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#132888](https://github.com/openclaw/openclaw/issues/132888) Exec approval from a non-native approval channel is auto-cancelled (run-aborted) when the turn ends, so `/approve` can never succeed `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#132886](https://github.com/openclaw/openclaw/issues/132886) [Bug]: Channel recovery crash-loops on the abandoned task's still-registered HTTP route `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#132884](https://github.com/openclaw/openclaw/issues/132884) [Bug]: Codex process registration can mask a child’s SQLite startup failure `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#132863](https://github.com/openclaw/openclaw/issues/132863) Feature: configurable outbound filter for model self-narration blocks (meta-leak) `P3` 💬1
- [#132861](https://github.com/openclaw/openclaw/issues/132861) [Bug]: Deferred Skill Workshop review fails after plugin registry refresh `P2` `impact:session-state` 💬1
- [#132859](https://github.com/openclaw/openclaw/issues/132859) Heartbeat never fires a single tick, even with explicit short interval + fresh restart (v2026.7.1-2) `P1` `impact:other` 💬1
- [#132387](https://github.com/openclaw/openclaw/issues/132387) [Bug]: Pre-fix model metadata corruption survives upgrade and rejects supported Sol thinking `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#132788](https://github.com/openclaw/openclaw/issues/132788) [Bug]: Progress tool-call icon is vertically misaligned with its label `bug` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#132363](https://github.com/openclaw/openclaw/issues/132363) [Bug]: WAL split-brain tripwire can corrupt the main DB by closing a stale connection `bug` `maintainer` `regression` `clawsweeper:no-new-fix-pr` 💬1
- [#132797](https://github.com/openclaw/openclaw/issues/132797) [Bug]: Review file previews overflow their panel on narrow screens `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#132847](https://github.com/openclaw/openclaw/issues/132847) [Bug]: WebChat session reset between active sessions — history disappears, first message gets NO_REPLY `bug` `bug:behavior` `P2` `impact:session-state` 💬1
- [#132846](https://github.com/openclaw/openclaw/issues/132846) [Feature]: Make session action menus scope-explicit and behaviorally consistent `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#132845](https://github.com/openclaw/openclaw/issues/132845) [Feature]: Unify New Session and active chat composer interaction contracts `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#132842](https://github.com/openclaw/openclaw/issues/132842) [Bug]: System events lose durable custody between ingress claim completion and heartbeat consumption `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#132843](https://github.com/openclaw/openclaw/issues/132843) [Bug]: Unattended heartbeat can move its active workspace to Trash via an empty cleanup path `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#132840](https://github.com/openclaw/openclaw/issues/132840) [Bug]: Mattermost button clicks are acked with HTTP 200 then handled only from RAM; restart after the 200 silently loses the click `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#132841](https://github.com/openclaw/openclaw/issues/132841) [Bug]: Discord native command interactions are deferred then dispatched with no durable admission; restart after defer silently loses them `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#132834](https://github.com/openclaw/openclaw/issues/132834) [Bug]: `sessions_search` fails on multi-agent setups when using the implicit `global` session key 💬1
- [#132833](https://github.com/openclaw/openclaw/issues/132833) [Bug]: Control UI rejects active-run image batches at reconnect storage quota `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#132829](https://github.com/openclaw/openclaw/issues/132829) [Bug]: Paired node capability approval disappears after five minutes `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#132823](https://github.com/openclaw/openclaw/issues/132823) 2026.9.1-beta.1: restart-recovered turns abort on stale reply operations → replies silently dropped; reasoning stream delivered twice `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#132825](https://github.com/openclaw/openclaw/issues/132825) Empty-response model-fallback on claude-cli backend silently orphans session transcript `bug` `regression` `P1` `impact:session-state` 💬1
- [#132795](https://github.com/openclaw/openclaw/issues/132795) [Bug]: Inbox tabs shift when switching to an empty category `bug` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#132790](https://github.com/openclaw/openclaw/issues/132790) [Bug]: Sidebar session marquee measures before hover actions resize the title `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#132796](https://github.com/openclaw/openclaw/issues/132796) [Bug]: Composer stack regression coverage misses shared edges and surface `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#132791](https://github.com/openclaw/openclaw/issues/132791) [Bug]: Control UI sidebar sections use inconsistent horizontal alignment `bug` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#132785](https://github.com/openclaw/openclaw/issues/132785) [Bug]: Control UI flashes dark during hard reload on light systems `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#132786](https://github.com/openclaw/openclaw/issues/132786) Goal bar does not visually join the chat composer cleanly `bug` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#132783](https://github.com/openclaw/openclaw/issues/132783) [Bug]: New Session drops typing when composer is unfocused `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#132781](https://github.com/openclaw/openclaw/issues/132781) [Feature]: Use the latest commentary as the progress draft label when narration is unavailable `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#132779](https://github.com/openclaw/openclaw/issues/132779) Async media generation (image/video/music) delivered twice to the requesting chat: standalone pending-tool-media payload ignores MEDIA: directive lines in the agent's reply `P1` `impact:message-loss` 💬1
- [#132780](https://github.com/openclaw/openclaw/issues/132780) Subagent completion announce text-fallback silently drops media attachments (MEDIA: lines stripped, structured media ignored) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#132765](https://github.com/openclaw/openclaw/issues/132765) agents_wait ignores timeoutSeconds — dies after ~60s as a tool error instead of returning pending `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#132589](https://github.com/openclaw/openclaw/issues/132589) [Bug]: Bounded transcript hydration can reuse an omitted 8-character event ID `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#132725](https://github.com/openclaw/openclaw/issues/132725) [Feature]: Recreate only sandbox runtimes with image mismatches `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#132764](https://github.com/openclaw/openclaw/issues/132764) Subagent completion announce fails on both delivery paths when requester is yield-parked (queue: no_active_run, direct: active turn claim) `P1` `impact:session-state` `impact:message-loss` 💬1
- [#132767](https://github.com/openclaw/openclaw/issues/132767) Generic CLI host omits "assemble-before-prompt", so a context engine's systemPromptAddition only reaches the model one turn late (and never on single-turn sessions) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#132761](https://github.com/openclaw/openclaw/issues/132761) [Feature] Opt-in history bootstrap for new/empty sessions (`session.bootstrapHistory`) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#132759](https://github.com/openclaw/openclaw/issues/132759) [Feature] Mattermost: let channel/group thread replies inherit the parent channel session (`threadSessions: "inherit" | "scoped"`) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#132758](https://github.com/openclaw/openclaw/issues/132758) [Bug] claude-cli backend: conversation history not delivered to the model — structurally with `sessionMode: "none"`, intermittently with `"always"` (phantom resume) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#132751](https://github.com/openclaw/openclaw/issues/132751) [Bug]: a skill's binary requirement stays "missing" after a same-process install lands it `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:not-repro-on-main` 💬1
- [#132752](https://github.com/openclaw/openclaw/issues/132752) [Bug]: a self-hosted web-search provider's missing base URL is returned as a successful answer instead of falling back `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#132750](https://github.com/openclaw/openclaw/issues/132750) [Bug]: allowlisting a plugin's own `__`-namespaced tool builds no plugin tools for the attempt `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#132747](https://github.com/openclaw/openclaw/issues/132747) Feature Request: VooV Meeting (International) Integration `P3` 💬1
- [#132742](https://github.com/openclaw/openclaw/issues/132742) [Feature]: Add an openclaw environments CLI for worker placement facts (CLI parity with Control UI) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#132736](https://github.com/openclaw/openclaw/issues/132736) Auto-TTS supplement messages on Signal deliver as broken attachment (send hangs in signal-cli daemon) `P2` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#132739](https://github.com/openclaw/openclaw/issues/132739) [Feature]: Deliver the buttons and selects an agent reply offers on Matrix replies `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#132721](https://github.com/openclaw/openclaw/issues/132721) [Bug]: Codex agent_end omits structured abort metadata `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#132720](https://github.com/openclaw/openclaw/issues/132720) claude-cli 410 session_expired on 2026.9.1-beta.1 with valid paste-token (embedded runner); doctor migrates primary off claude-cli `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#132712](https://github.com/openclaw/openclaw/issues/132712) Prepare compiled subprocesses for finite source test runs `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#132633](https://github.com/openclaw/openclaw/issues/132633) [Bug]: Native merge waits past validated hosted CI `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#132695](https://github.com/openclaw/openclaw/issues/132695) [Feature]: Add multimodal model "deepseek/deepseek-v4-flash-vision-exp" `enhancement` `P3` 💬1
- [#132478](https://github.com/openclaw/openclaw/issues/132478) LINE replies drop every button and option they carry, and report the reply as delivered `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#132624](https://github.com/openclaw/openclaw/issues/132624) [Bug]: Telegram rich messages leak literal <details> tags when the block contains headings, code, quotes, or tables `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#132614](https://github.com/openclaw/openclaw/issues/132614) [Bug]: config unset rejects valid inherited agent default with "Unable to resolve authored model reference" `P2` `maturity:stable` `impact:ux-friction` 💬1
- [#132619](https://github.com/openclaw/openclaw/issues/132619) [Bug]: voice-call schema says agentId defaults to main, but multi-agent runtime requires an explicit owner `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#132615](https://github.com/openclaw/openclaw/issues/132615) openai-completions + thinking: onPartialReply never fires because textPhaseRequiresTerminal returns before emitAssistantStreamData `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#132617](https://github.com/openclaw/openclaw/issues/132617) [Bug]: doctor cannot migrate Telegram legacy allowFrom when legacy account id no longer exists `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1

#### 🔒 Closed Issues
- [#124788](https://github.com/openclaw/openclaw/issues/124788) beta.2 gateway: event loop blocks ~100s every ~10 min (anchored timer; string building + fs scan; persists with all memory plugins disabled)
- [#67750](https://github.com/openclaw/openclaw/issues/67750) [Bug]: Successful auto-compaction can still end in a 120s embedded timeout and generic `/new` fallback
- [#78537](https://github.com/openclaw/openclaw/issues/78537) [Docs]: `allowInsecurePath` Linux uid-check behavior is undocumented; users on Linux cannot use system-package binaries (e.g. /usr/bin/op) without it
- [#117154](https://github.com/openclaw/openclaw/issues/117154) thread-reply deliveries are not marked as current-source replies (follow-up to #116909)
- [#121825](https://github.com/openclaw/openclaw/issues/121825) [Bug]: macOS onboarding reports migrated OpenAI OAuth healthy until first chat fails
- [#120050](https://github.com/openclaw/openclaw/issues/120050) [Bug]: macOS onboarding reports Gateway-start failure although the local Gateway becomes healthy
- [#130188](https://github.com/openclaw/openclaw/issues/130188) [Bug]: Side chat rejects valid large-session tails when the 1 MiB page budget omits messages
- [#132649](https://github.com/openclaw/openclaw/issues/132649) [Bug]: bench-agent-concurrency drain test flakes in CI shard core-unit-fast-1 (30s wait lapses with 1 active work item)
- [#131459](https://github.com/openclaw/openclaw/issues/131459) [Bug]: rebuilding the macOS app can leave its node worker stale
- [#129749](https://github.com/openclaw/openclaw/issues/129749) [Bug]: Memory CLI omits provider API-key SecretRefs from its command target scope
- [#132855](https://github.com/openclaw/openclaw/issues/132855) [Bug]: Profiler CLI accepts invalid options before config loading
- [#132373](https://github.com/openclaw/openclaw/issues/132373) [Bug]: Directive preprocessing destroys code indentation before inference
- [#132869](https://github.com/openclaw/openclaw/issues/132869) [Bug]: Native catalog continuation uses the default agent after selecting another agent
- [#132826](https://github.com/openclaw/openclaw/issues/132826) [Bug]: QA cleanup retries erase preserved gateway logs
- [#132819](https://github.com/openclaw/openclaw/issues/132819) [Bug]: Gateway shutdown rejects pending node completion replies during worker cleanup
- [#132817](https://github.com/openclaw/openclaw/issues/132817) [Bug]: sessions_spawn from a cron systemEvent session fails with `invalid agent params: unknown channel: cron-event`
- [#132810](https://github.com/openclaw/openclaw/issues/132810) [Bug]: Control UI reverses fresh turns after same-session reset
- [#132837](https://github.com/openclaw/openclaw/issues/132837) [Bug]: Android delayed archive completion switches away from newer chat
- [#132526](https://github.com/openclaw/openclaw/issues/132526) [Bug]: TUI retries can send a large-paste placeholder after blocked submit
- [#132575](https://github.com/openclaw/openclaw/issues/132575) [Bug]: Code Mode re-truncates markers instead of preserving original output provenance
- [#127087](https://github.com/openclaw/openclaw/issues/127087) [Bug]: Browser extension relay retains detached child sessions
- [#132768](https://github.com/openclaw/openclaw/issues/132768) [Bug]: exec-approvals migration gate blocks doctor --fix and all exec operations — regression of #132495
- [#132126](https://github.com/openclaw/openclaw/issues/132126) [Bug]: Cloud-worker cleanup replays provisioning after failure
- [#132484](https://github.com/openclaw/openclaw/issues/132484) [Bug]: Chrome relay labeled screenshots fail after Playwright lists tabs
- [#132674](https://github.com/openclaw/openclaw/issues/132674) [Bug]: Paired native Mac Codex catalog rejects Gateway agentId parameters
- [#132670](https://github.com/openclaw/openclaw/issues/132670) [Bug]: archived worktrees and unbounded allocation can fill the Gateway disk
- [#132669](https://github.com/openclaw/openclaw/issues/132669) [Bug]: Docs Agent counts canceled runs toward cadence and review history
- [#132424](https://github.com/openclaw/openclaw/issues/132424) [Bug]: Codex drops offloaded images during same-turn steering
- [#132667](https://github.com/openclaw/openclaw/issues/132667) [Bug]: QA cleanup hides temporary-directory removal failures
- [#132714](https://github.com/openclaw/openclaw/issues/132714) [Bug]: Control UI keeps an old run-error banner after successful recovery
- [#132423](https://github.com/openclaw/openclaw/issues/132423) [Bug]: Split-turn summaries duplicate canonical sections and poison later compaction
- [#132677](https://github.com/openclaw/openclaw/issues/132677) [Bug]: adopting native sessions with duplicate titles fails
- [#123691](https://github.com/openclaw/openclaw/issues/123691) External state ownership blocks the Gateway audit worker because its reduced env drops OPENCLAW_SUPERVISOR_MODE
- [#132629](https://github.com/openclaw/openclaw/issues/132629) [Bug]: tsgo test timeout skips process join and hides diagnostics
- [#130018](https://github.com/openclaw/openclaw/issues/130018) [Bug]: auth migration canonicalizes profiles but leaves rotation state on openai-codex IDs
- [#129827](https://github.com/openclaw/openclaw/issues/129827) [Bug]: Shell command explainer overflows the stack while walking deeply nested parse trees
- [#119315](https://github.com/openclaw/openclaw/issues/119315) [Bug] plugins: one malformed configSchema in a plugin manifest throws out of the loader and crash-loops the gateway
- [#132597](https://github.com/openclaw/openclaw/issues/132597) [Bug]: Trailing runtime-context carrier relocation breaks local model (Ollama) replies on messaging channels (Telegram)
- [#132586](https://github.com/openclaw/openclaw/issues/132586) [Bug]: Compaction reopens reset-discarded history and misorders boundary markers
- [#131858](https://github.com/openclaw/openclaw/issues/131858) [Bug]: Cloud sessions reject image input
- [#132546](https://github.com/openclaw/openclaw/issues/132546) [Bug]: split-turn summaries omit custom focus in default compaction mode
- [#132948](https://github.com/openclaw/openclaw/issues/132948) [Bug]: Android fails current-branch queued input after reconnect
- [#132952](https://github.com/openclaw/openclaw/issues/132952) cron: onTimer holds a global running flag across job execution, serializing all schedules behind one long job (maxConcurrentRuns has no effect)
- [#132930](https://github.com/openclaw/openclaw/issues/132930) Doctor aborts structured health repairs when stable Codex is retained during upgrade
- [#131089](https://github.com/openclaw/openclaw/issues/131089) memory_embedding_cache grows unbounded: the prune is unreachable and only runs on full reindex
- [#130998](https://github.com/openclaw/openclaw/issues/130998) Doctor media migration overflows on SUM(created_at) and exits 0 after skipping agent DB
- [#132496](https://github.com/openclaw/openclaw/issues/132496) channels.line.groups.<id>.skills validates and is documented, but never reaches the turn
- [#132889](https://github.com/openclaw/openclaw/issues/132889) [Bug]: Native-host refusal incorrectly reports missing Chrome user-data directories
- [#132907](https://github.com/openclaw/openclaw/issues/132907) Non-bundled extension: `api.on("llm_output", ...)` silently drops registration under claude-cli backend
- [#132077](https://github.com/openclaw/openclaw/issues/132077) [Bug] memory-wiki: `wiki.importInsights` / `wiki.palace` re-parse the entire vault per call — multi-minute event-loop stalls on large vaults (remains after #91154)
- [#131965](https://github.com/openclaw/openclaw/issues/131965) [Bug]: requester settle-wake delivery re-delivers the same subagent completion up to 3 times (dedup misses a real parent reply)
- [#132863](https://github.com/openclaw/openclaw/issues/132863) Feature: configurable outbound filter for model self-narration blocks (meta-leak)
- [#132861](https://github.com/openclaw/openclaw/issues/132861) [Bug]: Deferred Skill Workshop review fails after plugin registry refresh
- [#132859](https://github.com/openclaw/openclaw/issues/132859) Heartbeat never fires a single tick, even with explicit short interval + fresh restart (v2026.7.1-2)
- [#132387](https://github.com/openclaw/openclaw/issues/132387) [Bug]: Pre-fix model metadata corruption survives upgrade and rejects supported Sol thinking
- [#132788](https://github.com/openclaw/openclaw/issues/132788) [Bug]: Progress tool-call icon is vertically misaligned with its label
- [#132363](https://github.com/openclaw/openclaw/issues/132363) [Bug]: WAL split-brain tripwire can corrupt the main DB by closing a stale connection
- [#120237](https://github.com/openclaw/openclaw/issues/120237) [Bug]: Session getting stuck and gateway getting stale when multiple users query at concurrent time even when the abort session fires
- [#132797](https://github.com/openclaw/openclaw/issues/132797) [Bug]: Review file previews overflow their panel on narrow screens
- [#132847](https://github.com/openclaw/openclaw/issues/132847) [Bug]: WebChat session reset between active sessions — history disappears, first message gets NO_REPLY
- [#131892](https://github.com/openclaw/openclaw/issues/131892) Regression: shared_worker/service_worker CDP guard from #46259 is absent in 2026.6.34 and main; gateway still crashes on a service_worker target
- [#132834](https://github.com/openclaw/openclaw/issues/132834) [Bug]: `sessions_search` fails on multi-agent setups when using the implicit `global` session key
- [#132825](https://github.com/openclaw/openclaw/issues/132825) Empty-response model-fallback on claude-cli backend silently orphans session transcript
- [#132779](https://github.com/openclaw/openclaw/issues/132779) Async media generation (image/video/music) delivered twice to the requesting chat: standalone pending-tool-media payload ignores MEDIA: directive lines in the agent's reply
- [#128009](https://github.com/openclaw/openclaw/issues/128009) signal: redelivery of a pending dual-identity message completes the pending row and drops the message
- [#132589](https://github.com/openclaw/openclaw/issues/132589) [Bug]: Bounded transcript hydration can reuse an omitted 8-character event ID
- [#132764](https://github.com/openclaw/openclaw/issues/132764) Subagent completion announce fails on both delivery paths when requester is yield-parked (queue: no_active_run, direct: active turn claim)
- [#132747](https://github.com/openclaw/openclaw/issues/132747) Feature Request: VooV Meeting (International) Integration
- [#132036](https://github.com/openclaw/openclaw/issues/132036) Quoting the LINE bot in a group is ignored: LINE is the only channel that produces no implicit-mention facts
- [#132633](https://github.com/openclaw/openclaw/issues/132633) [Bug]: Native merge waits past validated hosted CI
- [#132695](https://github.com/openclaw/openclaw/issues/132695) [Feature]: Add multimodal model "deepseek/deepseek-v4-flash-vision-exp"
- [#122569](https://github.com/openclaw/openclaw/issues/122569) [Bug]: Inherited auth-profile cooldown writes target the child store and silently no-op
- [#132478](https://github.com/openclaw/openclaw/issues/132478) LINE replies drop every button and option they carry, and report the reply as delivered
- [#117564](https://github.com/openclaw/openclaw/issues/117564) [Bug]: Compaction and branch-summary LLM calls discard response.usage from token accounting
- [#131065](https://github.com/openclaw/openclaw/issues/131065) [Bug]: Tavily plugin tools reject non-env SecretRefs and suppress the TAVILY_API_KEY fallback
- [#127985](https://github.com/openclaw/openclaw/issues/127985) tasks: standalone tasks maintenance --apply marks a running background command lost and discards its real completion
- [#132614](https://github.com/openclaw/openclaw/issues/132614) [Bug]: config unset rejects valid inherited agent default with "Unable to resolve authored model reference"
- [#126843](https://github.com/openclaw/openclaw/issues/126843) Provider overloaded (529-class) surfaces to the user after one attempt when no fallback candidates are configured — no same-candidate retry with backoff

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 238,142 · **Open issues:** 37,495 · **Last push:** <1h ago

On August 30, 2026, there were no new releases for Hermes Agent, but several important improvements were merged. Notably, PR #98185 addressed the TUI by enabling the rendering of nested todo subtasks via the parent field, while PR #98192 restored the setup_mcp’s never-hand-edit instruction for better user guidance. Additionally, PR #73345 fixed an issue with registering Alibaba China and Token Plan providers. Among new issues, #98146 reported a critical bug where the thinking spinner gets stuck indefinitely after a turn interruption, raising concerns about user experience during tool calls. Other significant issues include security vulnerabilities relating to managed files, as captured by issue #98161.

#### ✅ Merged PRs
- [#97966](https://github.com/NousResearch/hermes-agent/pull/97966) fix(memory): keep Mem0 OSS OpenAI requests direct
- [#73345](https://github.com/NousResearch/hermes-agent/pull/73345) fix(providers): register Alibaba China + Token Plan providers — 'Unknown provider' despite catalog entry (#73265)
- [#98192](https://github.com/NousResearch/hermes-agent/pull/98192) fix(tools): restore setup_mcp's never-hand-edit instruction
- [#98189](https://github.com/NousResearch/hermes-agent/pull/98189) docs: sync stale /background references with the /bg + /btw split
- [#98185](https://github.com/NousResearch/hermes-agent/pull/98185) fix(tui): render nested todo subtasks via the parent field

#### 🐛 New Issues
- [#98146](https://github.com/NousResearch/hermes-agent/issues/98146) [Bug][Desktop] Thinking spinner stuck forever after turn interruption / tool-call limit (DeepSeek, GLM Flash) `type/bug` `P2` `needs-repro` `comp/desktop` 💬3
- [#98220](https://github.com/NousResearch/hermes-agent/issues/98220) Images routed through auxiliary vision even when main model is vision-capable — how to turn off? `type/bug` `duplicate` `comp/agent` `tool/vision` 💬2
- [#98206](https://github.com/NousResearch/hermes-agent/issues/98206) [Bug]: skill_view can return a dedup stub after compression prunes the original skill content `type/bug` `comp/agent` `tool/skills` `P2` 💬2
- [#98171](https://github.com/NousResearch/hermes-agent/issues/98171) [Feature]: Publish prebuilt Linux Desktop packages alongside Windows and macOS downloads `type/feature` `P3` `comp/desktop` `area/install-update` 💬1
- [#98161](https://github.com/NousResearch/hermes-agent/issues/98161) [Security]: Dashboard managed-files sensitive-file guard misses third-party credential dotfiles (.discord_token) and lags agent/file_safety.py `type/security` `P3` `needs-repro` `comp/dashboard` 💬2
- [#98222](https://github.com/NousResearch/hermes-agent/issues/98222) [Bug]: execute_code remote kernel spawn always fails on Docker/SSH/Modal — _rewrite_compound_background corrupts commands with a statement after & `type/bug` `backend/ssh` `backend/modal` `comp/tools` 💬1
- [#97906](https://github.com/NousResearch/hermes-agent/issues/97906) [Bug]: Mem0 OSS OpenAI defaults misroute requests and send unsupported GPT-5 parameters `type/bug` `comp/plugins` `tool/memory` `provider/openrouter` 💬1
- [#97954](https://github.com/NousResearch/hermes-agent/issues/97954) [Feature]: /loop --start-now flag to run the first iteration immediately, then recurrently `type/feature` `comp/cli` `P3` `sweeper:risk-compatibility` 💬1
- [#98214](https://github.com/NousResearch/hermes-agent/issues/98214) update --check: shallow clone with local commits always reports "Update available" when the compare API can't resolve a local-only HEAD SHA `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility` 💬1
- [#98204](https://github.com/NousResearch/hermes-agent/issues/98204) [Bug]: Kanban drawer shows stale blocked summary as current while newer run is active `type/bug` `comp/cron` `P3` 💬1
- [#98196](https://github.com/NousResearch/hermes-agent/issues/98196) [Feature]: Native iPhone companion app for Hermes interaction `type/feature` `P3` `needs-decision` `comp/desktop` 💬1
- [#98124](https://github.com/NousResearch/hermes-agent/issues/98124) Windows Desktop renderer times out at 45s and never reattaches when local backend becomes ready later `type/bug` `P2` `sweeper:risk-platform-windows` `comp/desktop` 💬1
- [#98123](https://github.com/NousResearch/hermes-agent/issues/98123) Desktop Bot avatar hydration can start every dormant local profile backend `type/bug` `P2` `sweeper:risk-session-state` `sweeper:risk-platform-windows` 💬1
- [#98168](https://github.com/NousResearch/hermes-agent/issues/98168) Desktop Capabilities/Skills shows default-profile skills when a named profile is selected on a shared remote `type/bug` `P2` `sweeper:risk-compatibility` `comp/desktop` 💬1
- [#98163](https://github.com/NousResearch/hermes-agent/issues/98163) Desktop remote file panel: /api/fs/list reports symlinked directories as files → read-text 400 "Path points to a directory" `type/bug` `P3` `comp/dashboard` 💬1
- [#98224](https://github.com/NousResearch/hermes-agent/issues/98224) [Bug] Custom providers drop DeepSeek reasoning in streaming — delta has no reasoning field after first tool call `type/bug` `comp/agent` `provider/deepseek` `P3`
- [#98228](https://github.com/NousResearch/hermes-agent/issues/98228) [Bug]: Telegram in-flight progress and cleanup use retired adapter after replacement reconnect `type/bug` `comp/plugins` `platform/telegram` `P3`
- [#98218](https://github.com/NousResearch/hermes-agent/issues/98218) Voice Bridge Agent: Bidirectional voice integration with Voquill `type/feature` `question` `tool/tts` `P3`
- [#98221](https://github.com/NousResearch/hermes-agent/issues/98221) [Bug]: Direct-spawn Windows gateway can stop itself via terminal restart and never relaunch `type/bug` `comp/gateway` `tool/terminal` `P2`
- [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) Bot Group Chats should keep working after Desktop closes `type/feature` `innovation` `comp/gateway` `P3`
- [#98186](https://github.com/NousResearch/hermes-agent/issues/98186) [Bug]: provider_routing.only silently dropped on custom:openrouter → provider drift breaks prompt-cache continuity `type/bug` `comp/agent` `provider/openrouter` `area/config`
- [#98187](https://github.com/NousResearch/hermes-agent/issues/98187) Accidental test issue — please ignore `invalid` `P3`
- [#98184](https://github.com/NousResearch/hermes-agent/issues/98184) Enable web search and data extraction tools for Higgins agent `type/feature` `tool/web` `P3` `needs-decision`
- [#98139](https://github.com/NousResearch/hermes-agent/issues/98139) [Feature]: Add "YOLO Mode" Toggle to Command Approval Prompt for Mid-Task Activation `type/feature` `comp/cli` `area/config` `P3`
- [#98159](https://github.com/NousResearch/hermes-agent/issues/98159) [Feature]: `session_search` discover mode should support searching across all profiles `type/feature` `comp/tools` `P3` `sweeper:risk-session-state`
- [#98160](https://github.com/NousResearch/hermes-agent/issues/98160) [Bug]: Goal-mode Kanban task deadlocks on same-card request_review vs reviewer close-out `type/bug` `comp/cron` `P3`
- [#98152](https://github.com/NousResearch/hermes-agent/issues/98152) [Feature]: Allow /title to execute immediately during active turns `type/feature` `comp/cli` `comp/gateway` `P3`

#### 🔒 Closed Issues
- [#69323](https://github.com/NousResearch/hermes-agent/issues/69323) No native Alibaba Cloud Token Plan (Personal Edition) provider; qwen3.8-max-preview unavailable in hermes model
- [#73265](https://github.com/NousResearch/hermes-agent/issues/73265) alibaba-coding-plan-cn provider not registered in runtime despite being in models_dev_cache.json
- [#95731](https://github.com/NousResearch/hermes-agent/issues/95731) Slack: make link unfurling configurable and honor it in cron delivery
- [#81587](https://github.com/NousResearch/hermes-agent/issues/81587) Add QwenCloud Token Plan as native provider
- [#97906](https://github.com/NousResearch/hermes-agent/issues/97906) [Bug]: Mem0 OSS OpenAI defaults misroute requests and send unsupported GPT-5 parameters
- [#97954](https://github.com/NousResearch/hermes-agent/issues/97954) [Feature]: /loop --start-now flag to run the first iteration immediately, then recurrently
- [#98187](https://github.com/NousResearch/hermes-agent/issues/98187) Accidental test issue — please ignore

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 90,428 · **Open issues:** 7,193 · **Last push:** 1h ago

On August 30, 2026, there were no new releases for vLLM, but several significant changes were merged into the codebase. Notable updates included a bug fix in the Model Runner V2 for decoupling the gumbel noise stream (#54282) and improvements in front-end functionality, such as validating stop_token_ids against the vocabulary size (#54196). Performance enhancements were also made, particularly in reusing SparseMatrix routing metadata (#45457) and optimizing data transfer with pinned CPU tensors (#54299). A critical new issue surfaced regarding the GLM-5.3-Flash model, which reported recurring CUDA illegal memory access errors across several kernels (#54317).

#### ✅ Merged PRs
- [#53621](https://github.com/vllm-project/vllm/pull/53621) [CI][Ray] Fix flaky multi-node assignment test after placement-group teardown
- [#54312](https://github.com/vllm-project/vllm/pull/54312) [CI][Test] Deflake test_mem.py sleep-mode asserts via allocator bookeeping
- [#54282](https://github.com/vllm-project/vllm/pull/54282) [Bugfix][Model Runner V2][Spec Decode] Decouple the draft's gumbel noise stream from the target's
- [#52529](https://github.com/vllm-project/vllm/pull/52529) [Bugfix][Frontend] Only echo the assistant turn in batched chat completions
- [#54196](https://github.com/vllm-project/vllm/pull/54196) [Bugfix][Frontend] Validate stop_token_ids against vocab size
- [#45457](https://github.com/vllm-project/vllm/pull/45457) [Perf] Reuse topk SparseMatrix routing metadata in GPT-OSS MoE forward
- [#50611](https://github.com/vllm-project/vllm/pull/50611) [Nixl][PD] DCP support for MLA models
- [#54130](https://github.com/vllm-project/vllm/pull/54130) [Mypy] Fix typing for J models
- [#54231](https://github.com/vllm-project/vllm/pull/54231) [Multimodal] Deprecate PyAV video decoder backend
- [#50920](https://github.com/vllm-project/vllm/pull/50920) [ROCm][CI] Stage E gating
- [#50488](https://github.com/vllm-project/vllm/pull/50488) [Bugfix][Spec Decode] Capture the widest uniform decode batch by default
- [#54299](https://github.com/vllm-project/vllm/pull/54299) [Perf] Avoid h2d copies from non-pinned CPU tensors
- [#54293](https://github.com/vllm-project/vllm/pull/54293) [Perf][KV Connector] Pin token_indices before non_blocking H2D in hf3fs helper
- [#54310](https://github.com/vllm-project/vllm/pull/54310) [Test] Assert co-located RayExecutorV2 stores publish distinct ports
- [#54162](https://github.com/vllm-project/vllm/pull/54162) [Bugfix][MRV2] Release model and KV cache on in-process engine shutdown
- [#54284](https://github.com/vllm-project/vllm/pull/54284) [Bugfix][V1] Keep an encoder cache entry until its last occurrence is freed
- [#54277](https://github.com/vllm-project/vllm/pull/54277) [Attention][DCP] Enable FlashInfer MLA for DSpark drafting
- [#54160](https://github.com/vllm-project/vllm/pull/54160) [Hy4] support Hy4-preview model
- [#52367](https://github.com/vllm-project/vllm/pull/52367) [CI/Build] Use file rendezvous for UniProc loader fixtures
- [#50858](https://github.com/vllm-project/vllm/pull/50858) [BugFix] Disable TP for Qwen3-Omni audio encoder when heads % TP != 0
- [#54292](https://github.com/vllm-project/vllm/pull/54292) [Perf] Pin CPU tensors before non_blocking H2D in three MM paths
- [#52047](https://github.com/vllm-project/vllm/pull/52047) [Bugfix][AMD] Annotate draft KV cache groups on the hybrid grouping path
- [#51358](https://github.com/vllm-project/vllm/pull/51358) [Bugfix][Mooncake] Save exact Mamba boundary states
- [#53507](https://github.com/vllm-project/vllm/pull/53507) [Bugfix][Models] Register sleep-managed runtime buffers
- [#53324](https://github.com/vllm-project/vllm/pull/53324) [KV Connector] Support MooncakeStore with hybrid DCP prefix caching
- [#54295](https://github.com/vllm-project/vllm/pull/54295) [Perf][MLA Sparse] Pin req_id_per_token before non_blocking H2D on XPU and ROCm

#### 🐛 New Issues
- [#54317](https://github.com/vllm-project/vllm/issues/54317) [Bug]: GLM-5.3-Flash (glm5next) — recurring CUDA illegal memory access on 4xB200, surfacing in three unrelated kernels (KDA linear-attention, MHC TileLang, TRT-LLM fused MoE) `rocm` `kimi` `glm` 💬5
- [#54360](https://github.com/vllm-project/vllm/issues/54360) [Bug]: Speculative decoding (mtp and dflash) silently disables prefix-cache hits for hybrid GDN models on nightly; worked on v0.24.0 `speculative-decoding` 💬4
- [#54359](https://github.com/vllm-project/vllm/issues/54359) [Bug][ROCm] GLM-5.3-Flash kpool indexer overwrites its own KV cache: backend advertises a kernel block size the kernels do not use `rocm` `glm` 💬3
- [#54376](https://github.com/vllm-project/vllm/issues/54376) [ROCm] Fused shared experts unavailable for GLM-5.3-Flash: Fp8Config not handled by the FSE gate, and glm5next never wires it `rocm` `quantization` `glm` 💬2
- [#54318](https://github.com/vllm-project/vllm/issues/54318) [Bug]: Qwen3.8-Flash-Next-FP8 fails to start on 4x NVIDIA A100 due to fp8e4nv unsupported in SM80 `bug` `nvidia` 💬2
- [#54363](https://github.com/vllm-project/vllm/issues/54363) [RFC]: Data integrity and I/O liveness for the filesystem KV offload tier `RFC` 💬1
- [#54369](https://github.com/vllm-project/vllm/issues/54369) [Perf][ROCm] Sparse-MLA/kpool backends fall back to rebuilding attention metadata per draft step, capping useful MTP depth at k=4 `rocm` 💬1
- [#54337](https://github.com/vllm-project/vllm/issues/54337) [Bug]: Assistant `content=null` + `tool_calls` renders literal "None" into chat template context — degenerate outputs in agent workloads 💬1
- [#54349](https://github.com/vllm-project/vllm/issues/54349) [Bug]: [XPU] AWQ MoE selector (check_moe_marlin_supports_config) ignores XPU platform, crashes on Marlin path `intel-gpu` `quantization` 💬1
- [#54308](https://github.com/vllm-project/vllm/issues/54308) GDN / Qwen3-Next decode degenerates to a single repeated token on non-Blackwell GPUs with an fp32 SSM cache `rocm` 💬1
- [#54304](https://github.com/vllm-project/vllm/issues/54304) [Bug]: Quantized embeddings fail on many model types `bug` `quantization` 💬1
- [#54377](https://github.com/vllm-project/vllm/issues/54377) [Model] Cohere Transcribe fails to initialize on Turing (fp16): expected scalar type Float but found Half in RelPositionMultiHeadAttention
- [#54354](https://github.com/vllm-project/vllm/issues/54354) [Feature]: cannot budget KV cache per GPU when one card of a DP group is shared with another process
- [#54350](https://github.com/vllm-project/vllm/issues/54350) [Bug]: [XPU] moe_wna16 AWQ fallback compares CUDA device_capability, always -1 on XPU `intel-gpu` `quantization`
- [#54340](https://github.com/vllm-project/vllm/issues/54340) [Feature]: In the framework, there are many assert statements. How can we optimize the issue of service processes crashing due to asserts? `feature request`
- [#54333](https://github.com/vllm-project/vllm/issues/54333) [RFC]: Reduced sampling for tensor-parallel decoding `RFC`
- [#54331](https://github.com/vllm-project/vllm/issues/54331) [Bug]: sm_120 hybrid-GDN NVFP4 dies under sustained load whenever CUDA graphs are on — persists 0.26.0 → 0.28.0, clean on 0.24.0; PIECEWISE and TRITON_ATTN both fail, only enforce_eager survives `quantization`
- [#54311](https://github.com/vllm-project/vllm/issues/54311) [Bug]: Cutlass int8 kernel never declines on SM120, making the Triton int8 fallback unreachable `nvidia` `quantization`
- [#54305](https://github.com/vllm-project/vllm/issues/54305) [Bug]: Direct DCP A2A crashes on GLM sparse-MLA strided output `glm`

#### 🔒 Closed Issues
- [#35848](https://github.com/vllm-project/vllm/issues/35848) [RFC]: Revamp Ray Distributed Executor Backend (from Ray team)
- [#35104](https://github.com/vllm-project/vllm/issues/35104) [Bug]: V1 engine workers die after idle period (SystemError: PyCFunction / EngineDeadError) — TP=2, multiprocessing
- [#39010](https://github.com/vllm-project/vllm/issues/39010) [Bug]: Hang During CUDA Graph Capture on ROCM in 0.19
- [#39573](https://github.com/vllm-project/vllm/issues/39573) [Bug]: Thinking token budget not enforced with MTP speculative decoding (works without MTP)
- [#37167](https://github.com/vllm-project/vllm/issues/37167) [Bug]: responses API, combining of message and tool call
- [#38077](https://github.com/vllm-project/vllm/issues/38077) [Bug]: Qwen3.5-9B answer !!!!!!!!!
- [#39884](https://github.com/vllm-project/vllm/issues/39884) [RFC]: Automatic test target determination for CI
- [#39231](https://github.com/vllm-project/vllm/issues/39231) [Bug]: Qwen3.5 Text Only Model (Qwen3_5ForCausalLM)
- [#40182](https://github.com/vllm-project/vllm/issues/40182) [RFC]: Unified ModelOpt Quantization in vLLM
- [#35920](https://github.com/vllm-project/vllm/issues/35920) [Bug]: UMA Memory Profiling Misattributes OS Page Cache and Fails in Concurrent Deployments
- [#40587](https://github.com/vllm-project/vllm/issues/40587) [Bug]: `+rotary_embedding` error with DeepSeek-V3.2-NVFP4
- [#40953](https://github.com/vllm-project/vllm/issues/40953) [RFC]: Refactor PassManager infrastructure
- [#54259](https://github.com/vllm-project/vllm/issues/54259) [Bug]: intermittent ShmRingBuffer race on cold boot with TP=2 over Ray (sm_121 / unified memory)
- [#35767](https://github.com/vllm-project/vllm/issues/35767) [Enhancement]: Qwen3-ASR realtime endpoint produces degraded output — stateless segments, no cross-segment context, raw format leaks
- [#35992](https://github.com/vllm-project/vllm/issues/35992) [Doc]: Inconsistent hash notation in Prefix Caching "Time 5" diagram
- [#36880](https://github.com/vllm-project/vllm/issues/36880) [Bug]: Qwen1 use_logn_attn may be unsupported in vLLM
- [#37242](https://github.com/vllm-project/vllm/issues/37242) [Community] RTX 5090 (Blackwell sm_120) + WSL2 2.7.0: CUDA graphs work — benchmarks + full config
- [#53938](https://github.com/vllm-project/vllm/issues/53938) [RFC] Config-driven AITER auto-enable instead of a manual opt-in?
- [#39678](https://github.com/vllm-project/vllm/issues/39678) [RFC]: Async parallel startup for EngineCore processes in DP/TP scenarios
- [#40318](https://github.com/vllm-project/vllm/issues/40318) [Bug]: Mistral3 text-only startup fails when text_config.architectures is None
- [#40617](https://github.com/vllm-project/vllm/issues/40617) [vllm IR]: Remove `QuantFP8` in favour of direct `ir.ops` calls
- [#40937](https://github.com/vllm-project/vllm/issues/40937) [Bug]: profile_cudagraph_memory() ignores GPU memory clamp on sliced GPUs (HAMi/MIG/MPS) — --gpu-memory-utilization is inert with AutoRound INT4 + fp8_e5m2 KV + FlashInfer + CUDA graphs
- [#40954](https://github.com/vllm-project/vllm/issues/40954) [Usage]: We are using vLLM version 0.19.1. When attempting to run DeepSeek-V4-Flash with a 32k context window across eight RTX 4090 GPUs, we encountered an error indicating that the `transformers` library needed to be updated. We then updated the library using the command `uv pip install --no-cache-dir git+https://github.com/huggingface/transformers.git`, but the error persisted as shown below:
- [#54252](https://github.com/vllm-project/vllm/issues/54252) compressed-tensors config collapses GDN linear-attention token distinctness (qwen4exp/hybrid MoE models produce garbage; identical weights clean under fp8 config)
- [#38898](https://github.com/vllm-project/vllm/issues/38898) [Feature]: Mamba `DS` conv state layout | Support speculative decoding with `mamba_cache_mode=align`
- [#40978](https://github.com/vllm-project/vllm/issues/40978) [Bug]: Enhance KV cache load error handling with detailed error codes / information
- [#40988](https://github.com/vllm-project/vllm/issues/40988) [bug/perf] V4-Pro hangs ~60 min in post-shard-load weight materialization without --safetensors-load-strategy prefetch on EXT4
- [#40999](https://github.com/vllm-project/vllm/issues/40999) [Feature][FP8] Opt-in `ParallelLMHead` quantization in legacy `Fp8Config` (parity with AWQ-Marlin / GPTQ-Marlin / cpu_wna16)
- [#54199](https://github.com/vllm-project/vllm/issues/54199) [Bug]: RETRACTED — duplicate of #53142 (my "equal block sizes" premise was wrong; see closing comment)
- [#54195](https://github.com/vllm-project/vllm/issues/54195) [Bug]: Out-of-vocab stop_token_ids crashes the whole engine on backends with bounds-checked index kernels (single-request DoS)

### SGLang (`sgl-project/sglang`)

**Stars:** 32,766 · **Open issues:** 5,003 · **Last push:** <1h ago

On August 30, 2026, SGLang saw no new releases, but several significant changes were merged, including updates to memory caching and device compatibility. Notably, pull request #37054 introduces handling for unlimited tokenizer context lengths, while #36946 adds the installation of AI Dynamo nightly in Docker environments. The team also addressed performance issues with #35547, which added tests for Laguna-XS-2.1 / S-2.1 NVFP4, and #36798 aligned chunked CUDA host registrations within HiCache. Among the new issues, #36941 highlights a critical bug where long prefill sequences exhaust unified memory, leading to worker rank failures without traceback, raising concerns about system resilience under heavy loads.

#### ✅ Merged PRs
- [#36958](https://github.com/sgl-project/sglang/pull/36958) [mem_cache] Keep `req.kv` non-optional and key KV ownership on `req_pool_idx`
- [#33614](https://github.com/sgl-project/sglang/pull/33614) [Spec] Fix Dspark and Dflash state divergence across TP rank
- [#36979](https://github.com/sgl-project/sglang/pull/36979) [Test] Move `gpqa` and `aime25` onto sgl-eval, drop unused eval paths
- [#37054](https://github.com/sgl-project/sglang/pull/37054) Handle unlimited tokenizer context lengths
- [#37018](https://github.com/sgl-project/sglang/pull/37018) [Kernel] Fix SM90 FP8 decode regression with benchmarked M/K/N routing
- [#36946](https://github.com/sgl-project/sglang/pull/36946) [Docker] Install AI Dynamo nightly
- [#35760](https://github.com/sgl-project/sglang/pull/35760) [Perf] Tune the W4AFP8 DeepEP low-latency requant launch geometry
- [#29100](https://github.com/sgl-project/sglang/pull/29100) [NPU] fix: reach torch>=2.8 CUDA memory-pool APIs lazily via torch._C
- [#36768](https://github.com/sgl-project/sglang/pull/36768) :memo: [NPU] Use vendor-neutral wording in quantization comments
- [#36205](https://github.com/sgl-project/sglang/pull/36205) Gate the idle-loop tree-cache sanity check behind a default-off env
- [#37050](https://github.com/sgl-project/sglang/pull/37050) docs: state that HiCache L2 is instance-private and only L3 is shared
- [#36905](https://github.com/sgl-project/sglang/pull/36905) [Diffusion] Honor explicit offload in resident requirements
- [#36832](https://github.com/sgl-project/sglang/pull/36832) [Diffusion] Avoid direct GPU parameter copies
- [#36798](https://github.com/sgl-project/sglang/pull/36798) [HiCache] Align chunked CUDA host registrations
- [#36974](https://github.com/sgl-project/sglang/pull/36974) config: the dead record parameters go
- [#36975](https://github.com/sgl-project/sglang/pull/36975) config: the lazy imports that buy nothing become eager
- [#36973](https://github.com/sgl-project/sglang/pull/36973) config: six more runtime readers ask the bags
- [#36972](https://github.com/sgl-project/sglang/pull/36972) config: the resolution callbacks into the record go to zero
- [#36896](https://github.com/sgl-project/sglang/pull/36896) config: the resolution pipeline's dispatcher leaves the record
- [#35547](https://github.com/sgl-project/sglang/pull/35547) Add Laguna-XS-2.1 / S-2.1 NVFP4 nightly gsm8k tests
- [#36834](https://github.com/sgl-project/sglang/pull/36834) [HiCache] buffer mode: decide staged-fetch fate against the live tree
- [#34639](https://github.com/sgl-project/sglang/pull/34639) [BugFix] Allow model_loader_extra_config with remote_instance + modelexpress backend
- [#36170](https://github.com/sgl-project/sglang/pull/36170) [NPU] [BugFix] Fix discontinuous input for FIA operator in GLM4.7‑Flash
- [#36981](https://github.com/sgl-project/sglang/pull/36981) [CI] Temporarily disable GB300 jobs
- [#34599](https://github.com/sgl-project/sglang/pull/34599) [diffusion] Optimize Pi0.5 inference and bounded graph serving
- [#35739](https://github.com/sgl-project/sglang/pull/35739) [multimodal] Fix NVFP4 diffusion models on sm_120 (RTX PRO 6000 / RTX 50xx)
- [#36863](https://github.com/sgl-project/sglang/pull/36863) [diffusion] Fix image encoder parallel folding proposal
- [#36931](https://github.com/sgl-project/sglang/pull/36931) [diffusion] Honor explicit component offload
- [#36977](https://github.com/sgl-project/sglang/pull/36977) [Cookbook] Run accuracy benchmarks through sgl-eval
- [#36902](https://github.com/sgl-project/sglang/pull/36902) [Diffusion] Delegate recognized quantized components to Transformers
- [#36874](https://github.com/sgl-project/sglang/pull/36874) [Diffusion] Respect component weight overrides for upsamplers
- [#36883](https://github.com/sgl-project/sglang/pull/36883) [Diffusion] Resolve indexed component weight sets
- [#36915](https://github.com/sgl-project/sglang/pull/36915) [AMD] Fix eager metadata for AITER EAGLE draft extend
- [#36714](https://github.com/sgl-project/sglang/pull/36714) [AMD][Spec][PD] Enable the PD DSA fused-TopK seed remap on ROCm
- [#36963](https://github.com/sgl-project/sglang/pull/36963) [Fix] Fall back to the process-group broadcast for DSA topk when PyNCCL is absent
- [#36920](https://github.com/sgl-project/sglang/pull/36920) Add configurable HTTP/2 connection window
- [#35762](https://github.com/sgl-project/sglang/pull/35762) [PD] Pack DCP1→DCP-N PD KV transfers into dest-contiguous RDMA blocks
- [#35758](https://github.com/sgl-project/sglang/pull/35758) qwen 3.8 rebase
- [#35021](https://github.com/sgl-project/sglang/pull/35021) [NPU] add causal conv1d for ascend kda backend
- [#36950](https://github.com/sgl-project/sglang/pull/36950) [Docs] Restore the AIME25 label so GLM-5.3 FP8 and BF16 scores render again
- [#36940](https://github.com/sgl-project/sglang/pull/36940) [NPU] [DOC] udpate supported features on NPU
- [#35434](https://github.com/sgl-project/sglang/pull/35434) [CPU] Fix wrongly causal-masked bidirectional attention
- [#36476](https://github.com/sgl-project/sglang/pull/36476) [NPU] [DOC] update npu best practice
- [#36934](https://github.com/sgl-project/sglang/pull/36934) [Fix] Drop the duplicated DSpark draft sample_block call

#### 🐛 New Issues
- [#36941](https://github.com/sgl-project/sglang/issues/36941) [GB10] Long prefill (>40k tokens) exhausts unified memory and silently kills the worker rank — no traceback, no OOM record; cross-stack control passes at 54k 💬3
- [#37031](https://github.com/sgl-project/sglang/issues/37031) [Bug] MLX server crashes because MlxModelRunnerStub has no loader
- [#36938](https://github.com/sgl-project/sglang/issues/36938) [Bug] Prefill input logprobs are served from the wrong request when a batch member is retracted or finished 💬1
- [#37066](https://github.com/sgl-project/sglang/issues/37066) [Feature] compute-mamba-ratio skill: plain-spec D is off the slot budget; admission clamp needs a +1 slot margin
- [#37059](https://github.com/sgl-project/sglang/issues/37059) [Bug] MiMo-V2.5: any request with audio hangs the whole server under --enable-dp-attention (audio encoder reduces over the wrong TP group)
- [#37052](https://github.com/sgl-project/sglang/issues/37052) [Bug] Qwen3.8-Flash-Next + NEXTN full decode graph: repeated dual-rank invalid-probability asserts on GB10
- [#37022](https://github.com/sgl-project/sglang/issues/37022) [Bug] Prefill transfer failed with exception KVTransferError Decode instance could be dead, remote mooncake session ...:port is not alive
- [#36943](https://github.com/sgl-project/sglang/issues/36943) [Bug] --enable-symm-mem: all TP schedulers deadlock silently in ncclCommWindowRegister (blocking UDS recvmsg, no timeout) when the symmetric-memory pool grows at runtime

#### 🔒 Closed Issues
- [#33289](https://github.com/sgl-project/sglang/issues/33289) [Bug] Multi-node TP rank-divergence deadlock: one rank wedges in NCCL proxy append (logits all-gather), peer idles at request broadcast — DeepSeek-V4 + DSpark on 2× DGX Spark (GB10)
- [#29002](https://github.com/sgl-project/sglang/issues/29002) [Performance] MXFP8 performance slower than BF16
- [#25587](https://github.com/sgl-project/sglang/issues/25587) [Bug] [NPU] Hybrid-GDN MTP speculative decoding is not lossless on Ascend NPU
- [#31505](https://github.com/sgl-project/sglang/issues/31505) [Bug] how to use hicache l2(dram) to muti host(muti inference instances ,not pd ) share kvcache offload ?
- [#29695](https://github.com/sgl-project/sglang/issues/29695) [Bug] Speculative CUDA graph metadata buffers use context_len instead of req_to_token capacity across backends
- [#25579](https://github.com/sgl-project/sglang/issues/25579) [Feature] Support /v1/images/edits for GLM-Image.
- [#29347](https://github.com/sgl-project/sglang/issues/29347) [Bug] [AMD] [ROCm/MI300X] EAGLE speculative decoding + CUDA graph: non-deterministic deadlock in greedy verification fallback
- [#36480](https://github.com/sgl-project/sglang/issues/36480) [Bug] Qwen3.5 greedy outputs differ A LOT between v0.5.12 and v0.5.17.dev for the same multimodal request; v0.5.17.dev36 not self-consistent behind router
- [#29785](https://github.com/sgl-project/sglang/issues/29785) [Bug][AMD] EAGLE/MTP spec-v2 crashes on ROCm DSA draft-extend (init_forward_metadata: All of them must not be None)
- [#29748](https://github.com/sgl-project/sglang/issues/29748) [Bug] GPTQ gptq_gemm: uninitialized output accumulated into by multi-block atomicAdd (data race, silent wrong results)
- [#29746](https://github.com/sgl-project/sglang/issues/29746) [Feature] openPangu 2.0 Flash support
- [#29739](https://github.com/sgl-project/sglang/issues/29739) [Bug] [NPU] dont work profile withot flag profile-steps
- [#29731](https://github.com/sgl-project/sglang/issues/29731) [Bug] The load_weight process on the GBzz2 machine takes a relatively long time
- [#29725](https://github.com/sgl-project/sglang/issues/29725) [Bug] PD disaggregation + plain DP: prefill rejects/misroutes requests because sender uses `attn_dp_rank` instead of `system_dp_rank`
- [#29704](https://github.com/sgl-project/sglang/issues/29704) [Bug] 910B start qwen3.6-35b-w8a8 error
- [#36879](https://github.com/sgl-project/sglang/issues/36879) [Bug] GLM-5.3-Flash --enable-dp-attention: MHC communicator is missing two should_use_dp_reduce_scatterv() branches — MoE partials are never combined, and fixing only that arms a dense-MLP double reduction (PR #36507)
- [#36880](https://github.com/sgl-project/sglang/issues/36880) [Bug] KDA Triton backend remaps padding slot -1 to the last mamba pool slot, which is allocatable — padded rows can read and write a live request's SSM state (GLM-5.3-Flash, PR #36507)

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 126,257 · **Open issues:** 2,320 · **Last push:** <1h ago

On August 30, 2026, several new versions of Llama.cpp were released, including b10688, which introduced fa-vec tunings for the M2, and b10687, which improved the OpenCL matmul path for two Adreno GPU generations. Notable merged features included additional fa-vec tunings for the M4 Pro in b10685 and optimizations for the Metal and Vulkan backends. A key new issue reported was #27981, concerning inability to open the reasoning level selection menu on desktop, which has garnered attention within the community. Overall, the day featured significant performance enhancements, particularly for Apple Silicon devices, alongside user-reported bugs indicating areas needing further attention.

#### 🚀 New Releases
- [b10688](https://github.com/ggml-org/llama.cpp/releases/tag/b10688) b10688
- [b10687](https://github.com/ggml-org/llama.cpp/releases/tag/b10687) b10687
- [b10686](https://github.com/ggml-org/llama.cpp/releases/tag/b10686) b10686
- [b10685](https://github.com/ggml-org/llama.cpp/releases/tag/b10685) b10685
- [b10684](https://github.com/ggml-org/llama.cpp/releases/tag/b10684) b10684
- [b10683](https://github.com/ggml-org/llama.cpp/releases/tag/b10683) b10683
- [b10682](https://github.com/ggml-org/llama.cpp/releases/tag/b10682) b10682
- [b10681](https://github.com/ggml-org/llama.cpp/releases/tag/b10681) b10681

#### ✅ Merged PRs
- [#27940](https://github.com/ggml-org/llama.cpp/pull/27940) metal : add fa-vec tunings for M2
- [#27640](https://github.com/ggml-org/llama.cpp/pull/27640) opencl: use a better matmul path on two Adreno GPU generations
- [#27951](https://github.com/ggml-org/llama.cpp/pull/27951) metal : assert shared memory padding
- [#27915](https://github.com/ggml-org/llama.cpp/pull/27915) metal : add remaining fa-vec tunings for M4 Pro
- [#27932](https://github.com/ggml-org/llama.cpp/pull/27932) metal : add fa-vec tunings for M1 Max
- [#27629](https://github.com/ggml-org/llama.cpp/pull/27629) sycl: make --fit respect --fit-target better
- [#27526](https://github.com/ggml-org/llama.cpp/pull/27526) vulkan: combine duplicated fastdiv functions, rename the one optimizing small divs
- [#27925](https://github.com/ggml-org/llama.cpp/pull/27925) vulkan: Change mul_mat_id to pad K rather than N

#### 🐛 New Issues
- [#27981](https://github.com/ggml-org/llama.cpp/issues/27981) llama-ui : unable to open reasoning level selection menu on desktop `bug` 💬7
- [#27953](https://github.com/ggml-org/llama.cpp/issues/27953) Compile bug: qwen next flash cumpute buffer size issues `bug-unconfirmed` 💬2
- [#27998](https://github.com/ggml-org/llama.cpp/issues/27998) Vulkan GATED_DELTA_NET pipeline compile hangs on gfx1103 (RADV 780M) — llama-server never reaches listening `bug-unconfirmed` 💬1
- [#27976](https://github.com/ggml-org/llama.cpp/issues/27976) Misc. bug: prune-layers updates the block_count but not the per-layer array metadata which causes the output to not load. `bug-unconfirmed` 💬1
- [#27971](https://github.com/ggml-org/llama.cpp/issues/27971) Feature Request: report reasoning token count in usage (completion_tokens_details.reasoning_tokens) 💬1
- [#27931](https://github.com/ggml-org/llama.cpp/issues/27931) Eval bug: llama-server crashes (stack overflow / access violation) on hybrid recurrent models (qwen3_5_moe) with mmproj vision when alternating text and image turns `bug-unconfirmed`
- [#27994](https://github.com/ggml-org/llama.cpp/issues/27994) Eval bug: Parallel Runs with Unified KV Cache Cuases Loss of Coherency on qwen4exp `bug-unconfirmed`
- [#27993](https://github.com/ggml-org/llama.cpp/issues/27993) Qwen3.8-Flash-Next (GGUF): output degenerates to all zeros for prompts longer than ~2K tokens when model is split across RPC hosts (deterministic)
- [#27989](https://github.com/ggml-org/llama.cpp/issues/27989) webui: Use `toLocaleString()` format consistently across chat message statistics `enhancement`
- [#27987](https://github.com/ggml-org/llama.cpp/issues/27987) Feature Request: `--n-cpu-mode` FFN band selection for `--n-cpu-ffn` `enhancement`
- [#27982](https://github.com/ggml-org/llama.cpp/issues/27982) Compile bug: ARM64 GCC build fails with GGML_NATIVE=ON (dotprod/i8mm on armv8-a base) `bug-unconfirmed`
- [#27980](https://github.com/ggml-org/llama.cpp/issues/27980) qwen4exp: slow decode on Pascal (sm_61) — 18 tok/s vs 29.5 for same-class qwen3.5moe with more active params
- [#27979](https://github.com/ggml-org/llama.cpp/issues/27979) Misc. bug: Hexagon: dma_queue_push's stride overflow fallback breaks callee expectations `bug-unconfirmed`
- [#27975](https://github.com/ggml-org/llama.cpp/issues/27975) spec-dec: external DFlash drafter changes outputs at temperature 0 (verified spec-dec invariant violated) — Muse Glimmer 30B
- [#27972](https://github.com/ggml-org/llama.cpp/issues/27972) Eval bug: llama-server returns logprob 0.0 (p=1.0) for every token when speculative decoding is enabled
- [#27966](https://github.com/ggml-org/llama.cpp/issues/27966) llama-server: streamed parallel tool calls can reuse the same tool-call ID
- [#27964](https://github.com/ggml-org/llama.cpp/issues/27964) Eval bug: Qwen3.8-Flash-Next: --split-mode tensor aborts with SPLIT_AXIS_UNKNOWN on CUDA (2x RTX 5090) `bug-unconfirmed`
- [#27949](https://github.com/ggml-org/llama.cpp/issues/27949) Misc. bug: Metal MUL_MAT/MUL_MAT_ID with F16 src1 crashes when a mat-vec kernel is missing `bug-unconfirmed`
- [#27942](https://github.com/ggml-org/llama.cpp/issues/27942) Feature Request: Generalize per-sequence file payload from tokens to opaque bytes `enhancement`
- [#27939](https://github.com/ggml-org/llama.cpp/issues/27939) Eval bug: qwen4exp (Qwen3.8-Flash-Next) RPC crash while generating output, ggml-vulkan.cpp:8250: GGML_ASSERT `bug-unconfirmed`
- [#27938](https://github.com/ggml-org/llama.cpp/issues/27938) Feature Request: support Tencent/WeMM-Embedding multi-modal embedding model `enhancement`
- [#27937](https://github.com/ggml-org/llama.cpp/issues/27937) llama-tts: qwen3-tts default context (32768) allocates 3.5 GB of KV cache — 4096 would suffice
- [#27927](https://github.com/ggml-org/llama.cpp/issues/27927) ggml-openvino: AUTO/HETERO compound device fails with 'port_find.found()' on KV-cache tensors
- [#27923](https://github.com/ggml-org/llama.cpp/issues/27923) Misc. bug: ggml_cuda_init at boot races nvidia-uvm readiness — silent CPU fallback for systemd services (no retry, /health stays OK, --ngl silently ignored)

#### 🔒 Closed Issues
- [#27971](https://github.com/ggml-org/llama.cpp/issues/27971) Feature Request: report reasoning token count in usage (completion_tokens_details.reasoning_tokens)
- [#27873](https://github.com/ggml-org/llama.cpp/issues/27873) Misc. bug: excessive padding of multiplied tensors in vulkan causes "Requested preallocation size is too large" errors

### Ollama (`ollama/ollama`)

**Stars:** 179,743 · **Open issues:** 3,845 · **Last push:** 21h ago

On August 30, 2026, there were no new releases or merged pull requests for Ollama, indicating a routine maintenance day. However, several noteworthy issues were raised, including a critical regression (#18123) where users experienced timeouts while waiting for the llama-server to start. Additionally, a bug (#18117) was reported regarding Vulkan buffer allocation failures when using larger prompts, despite having sufficient VRAM available, which could impact performance for certain tasks. Another significant issue highlighted the linear memory leak (#18106) in the llama-server runner with increasing request counts, suggesting potential resource management concerns that need addressing.

#### 🐛 New Issues
- [#18123](https://github.com/ollama/ollama/issues/18123) Regression: timed out waiting for llama-server to start - `bug` 💬2
- [#18117](https://github.com/ollama/ollama/issues/18117) Bug: Vulkan buffer allocation fails (~900MB-1GB) with a larger prompt, despite >14GB VRAM free 💬1
- [#18106](https://github.com/ollama/ollama/issues/18106) llama-server runner leaks host memory linearly with request count (~5-12 MiB/req, invisible in RSS) 💬1
- [#18110](https://github.com/ollama/ollama/issues/18110) Nemotron Answering as Qwen `bug` 💬1
- [#18129](https://github.com/ollama/ollama/issues/18129) Scheduler restarts llama-server with default context (4096) immediately after a successful load, forcing a redundant reload on the next request
- [#18128](https://github.com/ollama/ollama/issues/18128) Add qwen-3.8 Flash next to cloud models
- [#18127](https://github.com/ollama/ollama/issues/18127) maybe rethink your building of the docker image layers `feature request`
- [#18126](https://github.com/ollama/ollama/issues/18126) Model "mukunthpr/gemma4-e4b-code" does not detect uploaded images `bug`
- [#18125](https://github.com/ollama/ollama/issues/18125) mlxrunner: num_ctx from Modelfile is not enforced, allowing prompts up to architecture max — causes Metal watchdog panic on long prefill
- [#18122](https://github.com/ollama/ollama/issues/18122) Windows: fully automatic update install, deferred while a model is loaded `feature request`
- [#18121](https://github.com/ollama/ollama/issues/18121) OpenAI compat: reasoning_effort low/high disable thinking for glm-5.3-flash:cloud (documented: low/medium/high all enable thinking)
- [#18107](https://github.com/ollama/ollama/issues/18107) Context truncation in `/v1/chat/completions` drops `user` message, causing misleading `HTTP 500: no user query found in messages` on agent tool use `bug`
- [#18111](https://github.com/ollama/ollama/issues/18111) nemotron-3-nano:4b in PT-BR

#### 🔒 Closed Issues
- [#15285](https://github.com/ollama/ollama/issues/15285) AMD APU bad allocation of gemma4:eXb models
- [#18095](https://github.com/ollama/ollama/issues/18095) Ollama 0.33.1: --load-mode none forced on all models, GPU detection broken
- [#18126](https://github.com/ollama/ollama/issues/18126) Model "mukunthpr/gemma4-e4b-code" does not detect uploaded images
- [#18107](https://github.com/ollama/ollama/issues/18107) Context truncation in `/v1/chat/completions` drops `user` message, causing misleading `HTTP 500: no user query found in messages` on agent tool use

### LiteLLM (`BerriAI/litellm`)

**Stars:** 57,553 · **Open issues:** 4,863 · **Last push:** <1h ago

On August 30, 2026, there were no new releases for LiteLLM, but several important pull requests were merged, particularly focusing on fixes and enhancements. Noteworthy changes include the backport of rc/1.99.0, which fixed the /v1/messages bridge translation for tool_result document blocks, and improvements to the admin UI, allowing for more configurable ingress paths in the componentized chart. Additionally, enhancements were made to the proxy, including maintaining per-window budget spend rows and enhancing routing handling for the Together AI service. A significant new issue raised involved the vertex_ai Gemini embeddings silently fusing list inputs into a single vector, prompting a request for better handling or warnings regarding this behavior.

#### ✅ Merged PRs
- [#38855](https://github.com/BerriAI/litellm/pull/38855) [Backport rc/1.99.0] fix(anthropic): translate tool_result document blocks in the /v1/messages bridge
- [#38847](https://github.com/BerriAI/litellm/pull/38847) fix(otel/v2): detach credential-routed tenant spans into their own trace
- [#38850](https://github.com/BerriAI/litellm/pull/38850) test(e2e): retry upstream-saturation failures in the claude CLI driver
- [#38854](https://github.com/BerriAI/litellm/pull/38854) fix(ui): drop stray text next to Close in the model connection test dialog
- [#38833](https://github.com/BerriAI/litellm/pull/38833) test(e2e): stop the reliability fallback tests flaking on gpt-5.5's reasoning budget
- [#35700](https://github.com/BerriAI/litellm/pull/35700) feat(helm): make extra ingress paths configurable in the componentized chart
- [#38852](https://github.com/BerriAI/litellm/pull/38852) fix(ui): drop stray text next to Close in the model connection test dialog
- [#38843](https://github.com/BerriAI/litellm/pull/38843) feat(ui): set a model access group's shared budget from the dashboard
- [#38444](https://github.com/BerriAI/litellm/pull/38444) feat(mcp): bulk-import Anthropic MCP connectors via API and admin UI
- [#38249](https://github.com/BerriAI/litellm/pull/38249) fix(proxy): list all non-team models for users with an empty model list
- [#38841](https://github.com/BerriAI/litellm/pull/38841) fix(guardrails): stop Lakera monitor mode forwarding unmasked PII on Responses-API bodies
- [#38846](https://github.com/BerriAI/litellm/pull/38846) chore: rebuild Admin UI bundle for the next release
- [#38848](https://github.com/BerriAI/litellm/pull/38848) fix(e2e): backport the vertex realtime and vision image fixture fixes to rc/1.99.0
- [#38837](https://github.com/BerriAI/litellm/pull/38837) fix(azure): flatten top-level tool schema combinators for Azure Responses GPT-4-family deployments
- [#38836](https://github.com/BerriAI/litellm/pull/38836) fix(anthropic): cap reasoning_effort thinking budget below max_tokens on /v1/messages
- [#38792](https://github.com/BerriAI/litellm/pull/38792) fix(openai): flatten top-level anyOf/oneOf/allOf in Responses API tool schemas
- [#38738](https://github.com/BerriAI/litellm/pull/38738) fix(batches): fill a managed batch page past rows that will not parse
- [#38739](https://github.com/BerriAI/litellm/pull/38739) fix(proxy): tag routing misses proxy-merged tags when chat requests carry litellm_metadata
- [#38820](https://github.com/BerriAI/litellm/pull/38820) fix(together_ai): stop writing context_length as max_output_tokens in the serverless sync
- [#38788](https://github.com/BerriAI/litellm/pull/38788) feat(policy_engine): execute post_call guardrail pipelines on streaming responses
- [#35887](https://github.com/BerriAI/litellm/pull/35887) perf(proxy): read budget-window spend from the maintained window table
- [#35886](https://github.com/BerriAI/litellm/pull/35886) feat(proxy): maintain per-window budget spend rows in the spend writer
- [#38804](https://github.com/BerriAI/litellm/pull/38804) fix(models): registry audit: new Together/Fireworks/Gemini/Mistral/xAI models, xai retirement repricing, bedrock grok-4.6 caching, deprecation dates
- [#35854](https://github.com/BerriAI/litellm/pull/35854) feat(proxy): add LiteLLM_BudgetWindowSpend table for per-window budget spend
- [#38830](https://github.com/BerriAI/litellm/pull/38830) fix(ui): keep a deleted-from search query instead of blanking the box
- [#38835](https://github.com/BerriAI/litellm/pull/38835) fix(proxy): count auto-router classifier cost in savings and benchmarks
- [#38741](https://github.com/BerriAI/litellm/pull/38741) fix(anthropic_endpoints): serialize dict-detail HTTPExceptions on /v1/messages like sibling surfaces
- [#38740](https://github.com/BerriAI/litellm/pull/38740) feat(vertex_ai): support gemini-3.5-transcribe on /v1/audio/transcriptions
- [#38821](https://github.com/BerriAI/litellm/pull/38821) fix(ui): backport the shadcn migration regression fixes onto 1.99.0
- [#38784](https://github.com/BerriAI/litellm/pull/38784) feat(budgets): enforce shared budgets on model access groups
- [#38473](https://github.com/BerriAI/litellm/pull/38473) fix(proxy): run SMTP send_email off the event loop with a connection timeout
- [#38809](https://github.com/BerriAI/litellm/pull/38809) fix(anthropic): emit signature-only thinking blocks on the /v1/messages bridge
- [#38803](https://github.com/BerriAI/litellm/pull/38803) fix(ui): allow in-place editing of classifier numeric inputs
- [#37208](https://github.com/BerriAI/litellm/pull/37208) fix(batches): aggregate reasoning tokens and per-line pass/fail counts
- [#38234](https://github.com/BerriAI/litellm/pull/38234) fix(proxy): give every `requests` call a timeout so a silent server cannot hang the caller
- [#30782](https://github.com/BerriAI/litellm/pull/30782) feat(vertex-ai): add veo 3.1 lite model metadata
- [#38426](https://github.com/BerriAI/litellm/pull/38426) ci: build the benchmark environment outside the CodSpeed runner
- [#38445](https://github.com/BerriAI/litellm/pull/38445) feat(proxy): cyberark conjur secret manager configuration via Admin UI
- [#38752](https://github.com/BerriAI/litellm/pull/38752) fix: bound Hugging Face config fetch and keep embedding tests off the network
- [#38670](https://github.com/BerriAI/litellm/pull/38670) fix(bedrock): route all cohere.embed models to the cohere embedding config
- [#35017](https://github.com/BerriAI/litellm/pull/35017) fix(headroom): resolve CCR retrieval on streaming /chat/completions
- [#38726](https://github.com/BerriAI/litellm/pull/38726) feat(mcp_gateway): add RFC 7662 introspection for gateway session tokens
- [#34440](https://github.com/BerriAI/litellm/pull/34440) fix(soniox): align synthesized SRT/VTT cues to real speech timing
- [#38285](https://github.com/BerriAI/litellm/pull/38285) fix(azure): use /openai/v1 image routes for v1, preview and latest api versions
- [#38782](https://github.com/BerriAI/litellm/pull/38782) fix(ui): restore the reopen control for the log drawer's trace sidebar
- [#38580](https://github.com/BerriAI/litellm/pull/38580) fix(proxy): pin model reconcile read to the writer DB so /model/new does not 500 under read replica lag
- [#34849](https://github.com/BerriAI/litellm/pull/34849) fix(managed resources): let keys with no user_id or team_id read their own batches and files
- [#38779](https://github.com/BerriAI/litellm/pull/38779) chore: bump litellm-enterprise 0.1.61 -> 0.1.62, litellm-proxy-extras 0.4.90 -> 0.4.91
- [#38743](https://github.com/BerriAI/litellm/pull/38743) refactor: clean up tech debt that landed on 2026-08-29
- [#38778](https://github.com/BerriAI/litellm/pull/38778) fix(ui): make the logs JSON viewer follow the theme in dark mode
- [#38626](https://github.com/BerriAI/litellm/pull/38626) feat(ui): link team and key model chips to the models page filtered to that group
- [#38594](https://github.com/BerriAI/litellm/pull/38594) fix(policy): let the AI policy suggester drop sampling params its model refuses
- [#38764](https://github.com/BerriAI/litellm/pull/38764) perf(rust): use pythonize for bridge serialization
- [#38771](https://github.com/BerriAI/litellm/pull/38771) fix(ui): make code blocks follow the theme in dark mode
- [#38728](https://github.com/BerriAI/litellm/pull/38728) feat(mcp): support asymmetric (RS256) signing for MCP gateway session tokens
- [#37640](https://github.com/BerriAI/litellm/pull/37640) fix(health): honor allow_requests_on_db_unavailable in readiness probe
- [#38552](https://github.com/BerriAI/litellm/pull/38552) test(e2e): add logging e2e coverage (s3_v2, gcs_bucket, team langfuse callback, datadog failure)
- [#35940](https://github.com/BerriAI/litellm/pull/35940) fix(databricks): derive OAuth token URL from workspace origin
- [#38148](https://github.com/BerriAI/litellm/pull/38148) feat(hosted_vllm): add vLLM-Omni videos API
- [#38501](https://github.com/BerriAI/litellm/pull/38501) refactor(types): replace Any with real types across 178 backend files
- [#38747](https://github.com/BerriAI/litellm/pull/38747) fix(aws): build every AWS endpoint and ARN from the region's partition (aws-cn, aws-us-gov)
- [#38727](https://github.com/BerriAI/litellm/pull/38727) fix(aws): forward aws_external_id in Bedrock embeddings and SageMaker credential loading
- [#38744](https://github.com/BerriAI/litellm/pull/38744) fix(bedrock): map real batch record counts and guard zero-count retire
- [#38742](https://github.com/BerriAI/litellm/pull/38742) fix(router): pin batch, file, and fine-tuning job ids to their owning model group on fallback
- [#38748](https://github.com/BerriAI/litellm/pull/38748) test(responses): adapt temperature tests to the gpt-5 reasoning validation
- [#38607](https://github.com/BerriAI/litellm/pull/38607) fix(proxy): trigger async_pre_call_hook on POST /v1/files uploads
- [#38715](https://github.com/BerriAI/litellm/pull/38715) chore(deps): raise RestrictedPython floor to 8.5

#### 🐛 New Issues
- [#38823](https://github.com/BerriAI/litellm/issues/38823) [Feature]: vertex_ai Gemini embeddings silently fuse list inputs into one vector — add per-input fan-out option or warning `llm translation` 💬1
- [#38731](https://github.com/BerriAI/litellm/issues/38731) [Bug]: litellm stops forwarding model requests `bug` `proxy` `claude code` 💬1
- [#38732](https://github.com/BerriAI/litellm/issues/38732) [Bug]: delete key confirmation dialog should ignore surrounding whitespace `bug` `ui-dashboard` 💬1
- [#38816](https://github.com/BerriAI/litellm/issues/38816) [Bug]: Auto-router savings and benchmarks omit classifier cost `bug` `proxy` `autorouter`
- [#38832](https://github.com/BerriAI/litellm/issues/38832) Complexity/auto-router: fallbacks look up the router name, not the selected tier
- [#38831](https://github.com/BerriAI/litellm/issues/38831) is_web_search_tool(_chat_completion) misses {type:function, function:{name: web_search}} web-search shape `llm translation`
- [#38829](https://github.com/BerriAI/litellm/issues/38829) websearch_interception chat-completions agentic follow-up misroutes model: 'LLM Provider NOT provided ... model=mantle/...' `llm translation`
- [#38828](https://github.com/BerriAI/litellm/issues/38828) websearch_interception chat-completions agentic follow-up crashes: acompletion() got multiple values for keyword argument 'aws_region_name' `llm translation`
- [#38817](https://github.com/BerriAI/litellm/issues/38817) [Bug]: Cost Optimization total adds non-additive savings metrics `bug` `ui-dashboard` `autorouter`
- [#38815](https://github.com/BerriAI/litellm/issues/38815) [Bug]: Explicit free cache reads are charged at the full input rate `bug` `proxy` `autorouter`
- [#38814](https://github.com/BerriAI/litellm/issues/38814) [Bug]: Adaptive and quality routers omit metadata required for savings `bug` `proxy` `autorouter`
- [#38813](https://github.com/BerriAI/litellm/issues/38813) [Bug]: Derived auto-router baseline underprices models with missing cache rates `bug` `proxy` `autorouter`
- [#38811](https://github.com/BerriAI/litellm/issues/38811) [Bug]: Auto-router savings conflates model identity with deployment identity `bug` `proxy` `llm translation` `autorouter`
- [#38802](https://github.com/BerriAI/litellm/issues/38802) [Bug]: DeepInfra usage.estimated_cost and service_tier are ignored — priority-tier traffic under-reported by 1.5x `llm translation`
- [#38799](https://github.com/BerriAI/litellm/issues/38799) [Bug]: Bedrock Converse rejects tool `custom` field ("tools.0.custom.strict: Extra inputs are not permitted") for cross-region inference profile Claude models `bug` `llm translation` `SDK`
- [#38781](https://github.com/BerriAI/litellm/issues/38781) [Bug]: proxy `--debug` is click-bound to the generic `DEBUG` env var — any unrelated shell `DEBUG=...` silently enables debug logging
- [#38761](https://github.com/BerriAI/litellm/issues/38761) [Bug]: Anthropic /v1/messages streaming leaks the backend model id in message_start (non-streaming returns the requested model) `proxy` `llm translation` `claude code`
- [#38759](https://github.com/BerriAI/litellm/issues/38759) [Bug]: /budget/update returns 500 for valid structured model_max_budget objects `llm translation`
- [#38760](https://github.com/BerriAI/litellm/issues/38760) [Feature]: Add merge-safe authority for user metadata with hidden SCIM roots
- [#38745](https://github.com/BerriAI/litellm/issues/38745) [Req]: SAP AI Core x LiteLLM Synchronization (Pt1)

#### 🔒 Closed Issues
- [#35766](https://github.com/BerriAI/litellm/issues/35766) [Bug]: LiteLLM_SpendLogs has no (api_key, startTime) index — budget-window spend reseed seq-scans the table and can saturate the DB (P2028)
- [#28553](https://github.com/BerriAI/litellm/issues/28553) [Bug]: Azure Responses API streaming fails with "Unknown parameter: stream_options.include_usage" — blocks Codex usage
- [#33199](https://github.com/BerriAI/litellm/issues/33199) Add "veo-3.1-lite-generate-001" in "model_prices_and_context_window.json"
- [#35823](https://github.com/BerriAI/litellm/issues/35823) [Bug]: Databricks AI Gateway - Failure when using M2M auth.
- [#38050](https://github.com/BerriAI/litellm/issues/38050) I deployed minnimax-h3 using VLLM OMNI and now I want to use LiteLLM as a proxy for it, but there is an error. What should I do
- [#28747](https://github.com/BerriAI/litellm/issues/28747) [Bug]: /eu.assemblyai passthrough resolves to default US AssemblyAI endpoint
- [#28756](https://github.com/BerriAI/litellm/issues/28756) use_chat_completions_url_for_anthropic_messages config key not loaded from proxy YAML
- [#38659](https://github.com/BerriAI/litellm/issues/38659) [Bug]: cohere.embed-english-v3 missing from Bedrock embedding param-support dispatch
- [#35428](https://github.com/BerriAI/litellm/issues/35428) [Bug][Proxy]: Azure v1 image generation and editing use deployment-scoped routes
- [#38556](https://github.com/BerriAI/litellm/issues/38556) [Bug]:
- [#30635](https://github.com/BerriAI/litellm/issues/30635) [Bug]: Batch API cost never tracked — background check_batch_cost poller gets 403 "User None does not have access" on managed batch retrieve (regression from #27004)
- [#38816](https://github.com/BerriAI/litellm/issues/38816) [Bug]: Auto-router savings and benchmarks omit classifier cost
- [#34934](https://github.com/BerriAI/litellm/issues/34934) [Bug]: `/health/readiness` returns 503 during a DB outage even with `allow_requests_on_db_unavailable: true`, pulling every pod out of rotation
- [#38745](https://github.com/BerriAI/litellm/issues/38745) [Req]: SAP AI Core x LiteLLM Synchronization (Pt1)

### Unsloth (`unslothai/unsloth`)

**Stars:** 75,182 · **Open issues:** 1,411 · **Last push:** <1h ago

On August 30, 2026, there were no new releases for Unsloth, but several important pull requests were merged, including PR #9121, which exposes the codex apply_patch functionality for local models, and PR #9905, which repairs the custom TTS endpoint test and playback in the studio. Other notable merges included enhancements for background updates in the studio (PR #9890) and the introduction of ordered arguments to MCP server settings (PR #9943). A new issue of significance was reported as #9986, highlighting a bug with Ollama integration that causes models to receive an incorrect "source" and crashes the schema, potentially impacting user experience. Overall, it was a routine day of maintenance with crucial updates and ongoing challenges in the development process.

#### ✅ Merged PRs
- [#9121](https://github.com/unslothai/unsloth/pull/9121) fix: expose codex apply_patch for local models (#9114)
- [#9908](https://github.com/unslothai/unsloth/pull/9908) Chat: let the LoRA compare rehydrate a pair the generalized compare saved
- [#9125](https://github.com/unslothai/unsloth/pull/9125) fix(studio): gate external tool nudges and preserve retry context
- [#8832](https://github.com/unslothai/unsloth/pull/8832) Serve every MiniMax H3 asset from unsloth rather than a community repack
- [#9890](https://github.com/unslothai/unsloth/pull/9890) Studio: update in the background and restart when ready
- [#9796](https://github.com/unslothai/unsloth/pull/9796) Studio: render escaped inline math in lists
- [#6239](https://github.com/unslothai/unsloth/pull/6239) Restore UNSLOTH_RETURN_LOGITS after prediction_step instead of forcing it to 0
- [#8938](https://github.com/unslothai/unsloth/pull/8938) deprecate unsupported custom prompt templates
- [#9905](https://github.com/unslothai/unsloth/pull/9905) fix(studio): repair custom TTS endpoint test and playback
- [#9892](https://github.com/unslothai/unsloth/pull/9892) studio: list route-aware models through the openai api
- [#9943](https://github.com/unslothai/unsloth/pull/9943) studio: add ordered arguments to mcp server settings

#### 🐛 New Issues
- [#9972](https://github.com/unslothai/unsloth/issues/9972) [Feature] Allow Manual Approval of "rm" Command. `feature request` 💬1
- [#9986](https://github.com/unslothai/unsloth/issues/9986) [Bug] Ollama integration in Studio: models get a wrong "source", crash the schema, and are almost always withheld from the inventory `feature request` `bug` 💬1
- [#9970](https://github.com/unslothai/unsloth/issues/9970) [Bug] llama update failed `feature request` `bug` 💬1
- [#9965](https://github.com/unslothai/unsloth/issues/9965) [Bug] so short model names and a lot of free space `feature request` `bug`
- [#9962](https://github.com/unslothai/unsloth/issues/9962) [Feature] Allow controlling spacing of images when processing video in chats (currently 0.5s) `feature request` 💬1
- [#9989](https://github.com/unslothai/unsloth/issues/9989) [Feature]ROCmFPX for AMD `feature request`
- [#9977](https://github.com/unslothai/unsloth/issues/9977) [Bug] Unsloth Desktop crashes when I try to load the LTX-2-GGUF video model on Windows. exit code: 0xc0000005 `feature request` `bug`
- [#9985](https://github.com/unslothai/unsloth/issues/9985) [Feature] Proactive context junk-trimming — write tool/search results & duplicate attachments to disk instead of holding them in the live context `feature request`
- [#9984](https://github.com/unslothai/unsloth/issues/9984) [Bug] Unsloth Studio duplicates the preceding user message (and its attachments) every time a response is regenerated, inflating context and token count `feature request` `bug`
- [#9955](https://github.com/unslothai/unsloth/issues/9955) [Bug] The concurrent issue is that only one concurrent process is always being executed `feature request` `bug`
- [#9954](https://github.com/unslothai/unsloth/issues/9954) [Feature] Selective Installation to reduce installation size (currently 8.2 GB, python taking 6.4 GB) `feature request`
- [#9948](https://github.com/unslothai/unsloth/issues/9948) [Bug] Settings are not saved properly `feature request` `bug`
- [#9947](https://github.com/unslothai/unsloth/issues/9947) [Bug] Search toggle appears to couple Project Sources RAG with web search `feature request` `bug`

#### 🔒 Closed Issues
- [#9114](https://github.com/unslothai/unsloth/issues/9114) [Bug] `apply_patch` tool not exposed when launching Codex via `unsloth codex .`
- [#9823](https://github.com/unslothai/unsloth/issues/9823) [Unsloth Bug] Compare panes render empty for a `model1`/`model2` pair; `LoraCompareContent` looks up `base`/`lora` thread types only
- [#9895](https://github.com/unslothai/unsloth/issues/9895) [Bug] TTS custom endpoint failures
- [#9737](https://github.com/unslothai/unsloth/issues/9737) [Feature] Unsloth Desktop - Add arguments field in MCP servers Settings

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,409 · **Open issues:** 375 · **Last push:** 2h ago

On August 30, 2026, there were no new releases for Semantic Router, but several significant developments occurred in the merge requests. Notably, PR #3102 introduced the Evaluation Plane to replace the legacy dashboard evaluation, while PR #3035 focused on ensuring that the full response_format is preserved during request parsing and mutations. Additional merges included improvements to connector stability with PR #3093 enforcing bounded I/O on the http_classify connector and bug fixes addressing state label management in PR #3095 and prompt guard mappings in PR #3085. Among the newly opened issues, #3100 stands out as it seeks to replace the legacy dashboard evaluation with a versioned Evaluation Plane, indicating ongoing improvements to the evaluation infrastructure. Overall, it was a productive day with important enhancements and fixes that continue to advance the project.

#### ✅ Merged PRs
- [#3035](https://github.com/vllm-project/semantic-router/pull/3035) [Bug] Preserve full response_format through request parsing and mutations
- [#3102](https://github.com/vllm-project/semantic-router/pull/3102) [Feature] Replace dashboard evaluation with the Evaluation Plane
- [#3093](https://github.com/vllm-project/semantic-router/pull/3093) [Feature] Enforce bounded I/O on the http_classify connector
- [#3095](https://github.com/vllm-project/semantic-router/pull/3095) [Bug] Clear pull request state labels once the pull request closes
- [#3090](https://github.com/vllm-project/semantic-router/pull/3090) [Bug] Remove multi-document separators from Helm values.yaml (#3071)
- [#3085](https://github.com/vllm-project/semantic-router/pull/3085) [Bug] Preserve the prompt guard mapping default

#### 🐛 New Issues
- [#3100](https://github.com/vllm-project/semantic-router/issues/3100) [Feature] Replace legacy dashboard evaluation with a versioned Evaluation Plane `enhancement` `accepted` `in-progress` `wg/evaluation-quality` 💬3
- [#3106](https://github.com/vllm-project/semantic-router/issues/3106) [Feature] Define backend error policy for classifier signals `needs-acceptance` `wg/router-models-inference-runtime` 💬2
- [#3097](https://github.com/vllm-project/semantic-router/issues/3097) [Bug] Request-path connectors read upstream responses without a byte ceiling `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#3103](https://github.com/vllm-project/semantic-router/issues/3103) [Bug] Anthropic outbound emit fails on non-JSON tool arguments, turning a successful response into api_error `needs-acceptance` `wg/data-plane-networking` 💬1
- [#3107](https://github.com/vllm-project/semantic-router/issues/3107) [Bug] Response API images sent by file_id or file_data never match image routing signals `bug` `needs-acceptance` `wg/mom-routing`
- [#3099](https://github.com/vllm-project/semantic-router/issues/3099) [Bug] Generic classifier signal ignores configured max_tokens `bug` `needs-acceptance` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#3024](https://github.com/vllm-project/semantic-router/issues/3024) [Bug] v0.3.0 auto-routing drops json_schema payload during model rewrite
- [#3100](https://github.com/vllm-project/semantic-router/issues/3100) [Feature] Replace legacy dashboard evaluation with a versioned Evaluation Plane
- [#2924](https://github.com/vllm-project/semantic-router/issues/2924) [Feature] Enforce bounded request byte-size limits on the http_classify connector
- [#3094](https://github.com/vllm-project/semantic-router/issues/3094) [Bug] Merged and closed pull requests keep their pr/* state label forever
- [#3071](https://github.com/vllm-project/semantic-router/issues/3071) [Bug] Helm v4 silently sets image.pullPolicy to Never from a malformed values.yaml
- [#3077](https://github.com/vllm-project/semantic-router/issues/3077) [Bug] operator-managed prompt_guard silently disables jailbreak detection by blanking jailbreak_mapping_path

_Quiet today: AIBrix_

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*