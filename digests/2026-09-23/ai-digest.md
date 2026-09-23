# 📡 AI Ecosystem Digest — 2026-09-23

> Generated 2026-09-23 01:17 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 147,660 | 28 | 0 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 125,970 | 21 | 2 | 46 | 9 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,130 | 1 | 0 | 1 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,195 | 16 | 16 | 0 | 3 |
| [OpenCode](https://github.com/anomalyco/opencode) | 209,424 | 29 | 13 | 10 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,072 | 27 | 15 | 7 | 5 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 390,262 | 43 | 22 | 125 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 248,120 | 28 | 1 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 92,452 | 29 | 21 | 42 | 1 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,333 | 13 | 18 | 56 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 129,229 | 11 | 13 | 23 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 181,492 | 8 | 9 | 7 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 59,424 | 18 | 24 | 153 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,597 | 16 | 11 | 97 | 3 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,104 | 2 | 1 | 6 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,900 | 8 | 5 | 8 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released multiple updates, including [rust-v0.157.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.10) and [rust-v0.156.0](https://github.com/openai/codex/releases/tag/rust-v0.156.0).  
- **Claude Code** and **Qwen Code** also released new versions, with [Claude Code v2.1.280](https://github.com/anthropics/claude-code/releases/tag/v2.1.280) and [Qwen Code v0.24.5-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.5-preview.0).  
- **GitHub Copilot CLI** introduced critical updates with the release of [v1.0.89-0](https://github.com/github/copilot-cli/releases/tag/v1.0.89-0).  
- A significant issue was raised in **OpenClaw** regarding the [2026.9.5 update being blocked](https://github.com/openclaw/openclaw/issues/155764), attracting a high response count of 7 comments.  
- **VLLM** reported a bug issue about [unauthenticated inference on a server using `/invocations`](https://github.com/vllm-project/vllm/issues/58144), sparking user attention with 2 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 147,660 · **Open issues:** 12,249 · **Last push:** 8h ago

On September 23, 2026, Claude Code released version 2.1.280, introducing the default Claude Opus 5.5 model with a 1M context and new pricing, as well as improved mouse support in fullscreen mode for the `/skills` list and `/plugin` state options. The update also included a new configuration option, `CLAUDE_CODE_MAX_MCP_DESCRIPTION_LENGTH`, allowing users to adjust the 2,048-character cap on MCP tool descriptions. In the new issues category, a significant bug (#95975) was reported regarding a connectivity issue with the Claude extension in Vivaldi, highlighting ongoing challenges with the platform's compatibility. Other notable new issues include feature requests for inline autocomplete and improved user feedback mechanisms, indicating active engagement from the community.

#### 🚀 New Releases
- [v2.1.280](https://github.com/anthropics/claude-code/releases/tag/v2.1.280) v2.1.280

#### 🐛 New Issues
- [#95975](https://github.com/anthropics/claude-code/issues/95975) [BUG] Claude in Chrome 1.0.94: side panel shows "Can't reach the Claude extension." in Vivaldi; classic side panel opt-out removed `bug` `has repro` `platform:macos` `regression` 💬2
- [#96185](https://github.com/anthropics/claude-code/issues/96185) [FEATURE] Plugin-provided inline autocomplete with custom trigger (e.g. `#` for issues) `enhancement` `area:tui` `area:plugins` 💬1
- [#96181](https://github.com/anthropics/claude-code/issues/96181) [BUG] iOS Code tab: session list stays "Waiting for you" after /clear, while the session view correctly shows Context cleared `bug` `has repro` `platform:ios` `area:ui` 💬1
- [#96204](https://github.com/anthropics/claude-code/issues/96204) [BUG] Session crons fire from the idle timer at ~1/5 the interactive rate in a forked background job (silent monitoring outage) `bug` `has repro` `area:core` `area:agent-view`
- [#96203](https://github.com/anthropics/claude-code/issues/96203) [MODEL] Over-refusal: Opus 5.5 refuses personal translation of Anthropic's public System Card (and MT tool route), citing copyright `bug` `platform:windows` `area:model`
- [#96202](https://github.com/anthropics/claude-code/issues/96202) [FEATURE] VS Code extension: Explorer and Source Control follow the active session's folder `enhancement` `area:ide` `platform:vscode`
- [#96201](https://github.com/anthropics/claude-code/issues/96201) ignore the [Bug] Claude ignores repetition and style instructions, continues generating verbose output `bug` `platform:windows` `area:model` `platform:vscode`
- [#96200](https://github.com/anthropics/claude-code/issues/96200) [Bug] Terminal freeze when audio input conflicts with response completion and sound notification `bug` `platform:macos` `area:tui` `area:hooks`
- [#96199](https://github.com/anthropics/claude-code/issues/96199) [Feature Request] Add user feedback mechanism for positive experiences `enhancement`
- [#96198](https://github.com/anthropics/claude-code/issues/96198) [Feature Request] Support SHIFT+ENTER for multiline input instead of CTRL+J `duplicate` `platform:windows` `area:tui` `keybindings`
- [#96197](https://github.com/anthropics/claude-code/issues/96197) [FEATURE] Agent worktree isolation from a non-git workspace root: let isolation target a nested repo `enhancement` `area:agents`
- [#96196](https://github.com/anthropics/claude-code/issues/96196) [BUG] Scheduled task (trigger) never completes Gmail send/draft actions — stuck in PENDING indefinitely (7/7 failures) `bug` `area:routines`
- [#96195](https://github.com/anthropics/claude-code/issues/96195) EnterWorktree intermittently refuses a valid, already-registered worktree with "git identity could not be verified" `bug` `platform:windows` `area:core`
- [#96191](https://github.com/anthropics/claude-code/issues/96191) [BUG] Desktop app Update button does nothing; old install never gets replaced or unpinned `bug` `platform:windows` `area:installation` `area:desktop`
- [#96194](https://github.com/anthropics/claude-code/issues/96194) zsh shell snapshot drops user-defined _-prefixed functions that captured functions call -> command not found in Bash tool `bug` `has repro` `platform:macos` `area:bash`
- [#96193](https://github.com/anthropics/claude-code/issues/96193) Hook JSON with top-level additionalContext is silently dropped (no warning), context never reaches the model `bug` `has repro` `platform:macos` `area:hooks`
- [#96192](https://github.com/anthropics/claude-code/issues/96192) CLAUDE.md @import path containing a space silently loads nothing (escape undocumented, no warning) `bug` `has repro` `platform:macos` `area:core`
- [#96190](https://github.com/anthropics/claude-code/issues/96190) Desktop/VS Code sidebar: expanded session-group header row blends into its child session rows `enhancement` `platform:vscode` `area:ui` `area:desktop`
- [#96189](https://github.com/anthropics/claude-code/issues/96189) [Feature Request] Add /restart command to quickly resume latest conversation `enhancement` `platform:macos` `area:tui`
- [#96188](https://github.com/anthropics/claude-code/issues/96188) [BUG] Main composer doesn't scroll with cursor position — content above visible window becomes inaccessible while typing long prompts `bug` `platform:macos` `area:tui`
- [#96187](https://github.com/anthropics/claude-code/issues/96187) [BUG] [Claude Desktop] [Cowork] Automatic update moved sessions to the cloud; file tools act on copies and device_commit_files leaves old bytes `bug` `has repro` `platform:windows` `area:cowork`
- [#96186](https://github.com/anthropics/claude-code/issues/96186) I keep getting approval requests for basic web fetch. Auto mode seems to not be… `bug` `needs-info` `area:permissions`
- [#96184](https://github.com/anthropics/claude-code/issues/96184) [FEATURE] allow disabling the periodic background git diff refresh in the Code tab `enhancement` `area:desktop`
- [#96183](https://github.com/anthropics/claude-code/issues/96183) MCP: Claude Code sends legacy 'initialize' after successful modern 'server/discover', breaking modern-only servers `bug` `has repro` `platform:macos` `area:mcp`
- [#96182](https://github.com/anthropics/claude-code/issues/96182) Opus 4.6 regression since ~Sep 16 2026: precision loss, hallucinations, personality degradation `duplicate` `area:model` `area:claude-code-web`
- [#96180](https://github.com/anthropics/claude-code/issues/96180) I don't see a bug report in your message. Please provide the bug report details so I can generate an appropriate GitHub issue title. `bug` `platform:linux` `needs-info`
- [#96179](https://github.com/anthropics/claude-code/issues/96179) Opus 4.6 regression since ~Sep 16: hallucinating dates and degraded accuracy `bug` `area:model` `area:mcp`
- [#96178](https://github.com/anthropics/claude-code/issues/96178) Opus 4.6 regression: hallucinating dates and degraded accuracy after recent update `bug` `area:model` `area:mcp` `area:claude-code-web`

### OpenAI Codex (`openai/codex`)

**Stars:** 125,970 · **Open issues:** 18,320 · **Last push:** <1h ago

On September 23, 2026, OpenAI Codex released rust-v0.156.0, introducing an optional fullscreen UI with features such as transcript search and voice conversations enabled by default, complemented by a versatile `/voice settings` picker. The day also saw several alpha releases for rust-v0.157.0, including alpha.10, signaling ongoing development efforts. Key merged features included support for Shift-click to extend transcript selections and the enforcement of application network policies throughout various requests. Among the newly reported issues, users highlighted the inability to select a different model when connecting to a proxy, making it a notable concern for future resolutions.

#### 🚀 New Releases
- [rust-v0.156.0](https://github.com/openai/codex/releases/tag/rust-v0.156.0) 0.156.0
- [rust-v0.157.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.9) 0.157.0-alpha.9
- [rust-v0.157.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.8) 0.157.0-alpha.8
- [rust-v0.157.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.7) 0.157.0-alpha.7
- [rust-v0.157.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.6) 0.157.0-alpha.6
- [rust-v0.157.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.5) 0.157.0-alpha.5
- [rust-v0.157.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.4) 0.157.0-alpha.4
- [rust-v0.157.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.3) 0.157.0-alpha.3
- [rust-v0.157.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.10) 0.157.0-alpha.10

#### ✅ Merged PRs
- [#47414](https://github.com/openai/codex/pull/47414) Support Shift-click to extend transcript selections
- [#47413](https://github.com/openai/codex/pull/47413) Cache decrypted gateway OAuth secrets per backend
- [#47411](https://github.com/openai/codex/pull/47411) Apply shared network policy throughout embedded Codex startup
- [#47410](https://github.com/openai/codex/pull/47410) Honor network policy in remote control and recover remote execution
- [#47408](https://github.com/openai/codex/pull/47408) Enforce application network policy for AWS auth and telemetry
- [#47407](https://github.com/openai/codex/pull/47407) Enforce application network policy across app-server requests
- [#47399](https://github.com/openai/codex/pull/47399) Respect tmux mouse settings in fullscreen and overlays
- [#47397](https://github.com/openai/codex/pull/47397) Refresh bundled model metadata and instructions
- [#47393](https://github.com/openai/codex/pull/47393) Retry transient OpenAI file blob upload failures
- [#47389](https://github.com/openai/codex/pull/47389) Enforce network policy throughout HTTP and WebSocket requests
- [#47384](https://github.com/openai/codex/pull/47384) Restore composer hints after clearing selection at the transcript bottom
- [#47382](https://github.com/openai/codex/pull/47382) Show a voice badge in the agents overview
- [#47381](https://github.com/openai/codex/pull/47381) Keep voice conversations running across TUI thread navigation
- [#47380](https://github.com/openai/codex/pull/47380) Route TUI voice controls through the app
- [#47377](https://github.com/openai/codex/pull/47377) Add opt-in reasoning status for realtime V3 delegations
- [#47375](https://github.com/openai/codex/pull/47375) Add an opt-in preference for the local MXC sandbox
- [#47369](https://github.com/openai/codex/pull/47369) Overlap agent metadata reads when resuming a V2 root
- [#47365](https://github.com/openai/codex/pull/47365) Resume model context from the latest compaction boundary
- [#47362](https://github.com/openai/codex/pull/47362) Bound inbound exec-server requests across client transports
- [#47361](https://github.com/openai/codex/pull/47361) Restrict Windows sandbox default object access to the logon session
- [#47360](https://github.com/openai/codex/pull/47360) Preserve user prompt URL destinations across terminal widths
- [#47358](https://github.com/openai/codex/pull/47358) Color paths and URLs in `codex doctor` by check status
- [#47355](https://github.com/openai/codex/pull/47355) Reserve spacing after recaps at the transcript tail
- [#47353](https://github.com/openai/codex/pull/47353) Preserve `invalid_prompt` as a distinct error classification
- [#47350](https://github.com/openai/codex/pull/47350) Reuse cloud skill catalogs across turns until invalidated
- [#47349](https://github.com/openai/codex/pull/47349) Move plugin recommendations into developer context
- [#47348](https://github.com/openai/codex/pull/47348) Overlap subagent spawn persistence and clean up cancelled children
- [#47347](https://github.com/openai/codex/pull/47347) Add GPT-6 Sol and Luna to Amazon Bedrock catalogs
- [#47342](https://github.com/openai/codex/pull/47342) Skip stored title lookups for ephemeral forks
- [#47340](https://github.com/openai/codex/pull/47340) Add conditional turn interruption that preserves pending input
- [#47338](https://github.com/openai/codex/pull/47338) Move the activity inspection hint into keyboard shortcut help
- [#47332](https://github.com/openai/codex/pull/47332) Add GPT-6 Sol and Luna to the model catalog
- [#47331](https://github.com/openai/codex/pull/47331) Avoid redundant spacing above the transcript composer
- [#47330](https://github.com/openai/codex/pull/47330) Identify failed SQLite databases in `codex doctor` output
- [#47329](https://github.com/openai/codex/pull/47329) Standardize TUI menu description wording and punctuation
- [#47327](https://github.com/openai/codex/pull/47327) Preserve image generation request IDs on failure
- [#47326](https://github.com/openai/codex/pull/47326) Restrict MCP OAuth authorization endpoints to HTTP(S)
- [#47325](https://github.com/openai/codex/pull/47325) Keep report reason tags within Sentry limits
- [#47323](https://github.com/openai/codex/pull/47323) Persist resume metadata in compaction checkpoints
- [#47322](https://github.com/openai/codex/pull/47322) Render TUI Markdown lists with Unicode bullets and checkboxes
- [#47321](https://github.com/openai/codex/pull/47321) Honor the system clock preference across more TUI timestamps
- [#47320](https://github.com/openai/codex/pull/47320) Fix Escape navigation in read-only agent sessions
- [#47319](https://github.com/openai/codex/pull/47319) Match agent status symbols to the selected row style
- [#47318](https://github.com/openai/codex/pull/47318) Offer explicit recovery for incompatible background servers
- [#47317](https://github.com/openai/codex/pull/47317) Enable `/import` in remote and local daemon sessions
- [#47303](https://github.com/openai/codex/pull/47303) Clean up legacy Guardian thread metadata in SQLite

#### 🐛 New Issues
- [#47386](https://github.com/openai/codex/issues/47386) Not able to select a different model when connecting to proxy `bug` `CLI` `custom-model` 💬2
- [#47228](https://github.com/openai/codex/issues/47228) Missing Model: 5.6 Luna `bug` `app` 💬2
- [#47412](https://github.com/openai/codex/issues/47412) unexpected status 404 Not Found: The model `gpt-6-sol` does not exist or you do not have access to it., url: https://chatgpt.com/backend-api/codex/responses, cf-ray: a3f5889c29462adf-LAX, request id: 60bc52ae-61e5-4f32-80a6-e48ed795d28d `bug` `app` `connectivity` 💬2
- [#47406](https://github.com/openai/codex/issues/47406) Codex Desktop main thread receives read-only reviewer instructions and cannot resume implementation (provenance unclear) `bug` `app` `subagent` 💬2
- [#47415](https://github.com/openai/codex/issues/47415) Linux/Btrfs: sandbox rejects app-server socket mount when fstat device differs from mountinfo `bug` `sandbox` `CLI` 💬1
- [#47409](https://github.com/openai/codex/issues/47409) Feature request: keep one shared right-side panel open across conversations `enhancement` `app` 💬1
- [#47403](https://github.com/openai/codex/issues/47403) [macOS][Chat] Ghost/deleted conversations remain in Recents despite clean reinstall `bug` `app` `session` 💬1
- [#47396](https://github.com/openai/codex/issues/47396) Feature request: continuous dictation mode for Codex Voice `enhancement`
- [#47394](https://github.com/openai/codex/issues/47394) When handing off to an existing wortree the task CWD does not change `bug` `app` `session`
- [#47374](https://github.com/openai/codex/issues/47374) 0.155.1 -> 0.156.0 regression. selected workspace missing from routing discovery `bug` `windows-os` `auth` `CLI` 💬1
- [#47383](https://github.com/openai/codex/issues/47383) Windows 10 desktop 26.917.6896.0: registered Core setup fails and blocks approval modes `bug` `windows-os` `sandbox` `app` 💬1
- [#47416](https://github.com/openai/codex/issues/47416) Windows Remote Control fails in both daemon and foreground modes despite valid private socket ACL `bug` `windows-os` `CLI` `app-server`
- [#47402](https://github.com/openai/codex/issues/47402) Sandbox fails under Termux + proot Debian: cannot establish app-server socket mount isolation `bug` `sandbox` `CLI`
- [#47400](https://github.com/openai/codex/issues/47400) Voice chat fails to start with prepare Codex `bug` `app`
- [#47395](https://github.com/openai/codex/issues/47395) Allow PostToolUse hooks to request active-turn reasoning-effort updates `enhancement` `hooks`
- [#47392](https://github.com/openai/codex/issues/47392) [macOS] Session Summary omits primary Git repository when a secondary repository has changes `bug` `app`
- [#47391](https://github.com/openai/codex/issues/47391) [macOS] Japanese IME preedit text in integrated terminal is rendered white-on-black `bug` `app`
- [#47390](https://github.com/openai/codex/issues/47390) TUI: add config to disable collapsed diffs in full-screen transcript `enhancement` `TUI` `CLI` `config`
- [#47388](https://github.com/openai/codex/issues/47388) [Linux App] In-app browser registers extension action shortcuts but does not activate them `bug` `app` `browser`
- [#47387](https://github.com/openai/codex/issues/47387) [macOS] Codex UI stops accepting clicks while thread spinners keep animating `bug` `app` `performance`
- [#47379](https://github.com/openai/codex/issues/47379) [Bug + Solution] Conversation preview uses the second message after a storage error `bug` `CLI` `session`

#### 🔒 Closed Issues
- [#44398](https://github.com/openai/codex/issues/44398) [Bug] Astra composer sparkle animation prevents mouse text selection in kitty (0.154.0)
- [#44668](https://github.com/openai/codex/issues/44668) Astra reasoning level frequently reset to Medium

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,130 · **Open issues:** 833 · **Last push:** <1h ago

On September 23, 2026, Gemini CLI released version v0.62.0-nightly.20260922.gd5b3e3acc, which includes important fixes such as normalizing proxy-agent esbuild interop for environment proxy resolution and ensuring that tool_call updates are emitted prior to request_permission in ACP mode. Additionally, a significant feature was merged, aimed at enhancing compatibility with Gemini 3.8 for Flash 3.5 and Flash Lite. A notable new issue was raised, requesting the addition of interactive file path autocomplete for the @ symbol in the CLI, indicating user interest in improving command-line efficiency. Overall, the day saw meaningful improvements and user engagement with feature requests.

#### 🚀 New Releases
- [v0.62.0-nightly.20260922.gd5b3e3acc](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260922.gd5b3e3acc) Release v0.62.0-nightly.20260922.gd5b3e3acc

#### ✅ Merged PRs
- [#29443](https://github.com/google-gemini/gemini-cli/pull/29443) Feat/gemini 3.8 flash 3.5 flash lite

#### 🐛 New Issues
- [#29453](https://github.com/google-gemini/gemini-cli/issues/29453) Feature Request: Add interactive file path autocomplete (tab-completion or dropdown) for the @ symbol in the CLI. `priority/p3` `area/core` `status/bot-triaged` `kind/enhancement` 💬1

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,195 · **Open issues:** 2,306 · **Last push:** 3h ago

On September 23, 2026, GitHub Copilot CLI released version 1.0.89-0, adding support for the claude-opus-5.5 and improving the user experience by showing managed Connector consent progress with a copyable authorization URL during connect and reconnect. The previous version, 1.0.88, introduced optional OSC 777 terminal notifications for direct Ghostty and WezTerm sessions, as well as fixes for text selection in bottom-anchored dialogs. Meanwhile, several new issues were reported, with notable concern raised in issue #4929 regarding the process-local auth token failing to refresh, leading to all prompts stalling until a restart is performed. Overall, the day saw a mix of enhancements and emerging challenges for the Copilot CLI ecosystem.

#### 🚀 New Releases
- [v1.0.89-0](https://github.com/github/copilot-cli/releases/tag/v1.0.89-0) 1.0.89-0
- [v1.0.88](https://github.com/github/copilot-cli/releases/tag/v1.0.88) 1.0.88
- [v1.0.88-2](https://github.com/github/copilot-cli/releases/tag/v1.0.88-2) 1.0.88-2

#### 🐛 New Issues
- [#4929](https://github.com/github/copilot-cli/issues/4929) Process-local auth token stops refreshing; all prompts fail until restart `triage` 💬2
- [#4946](https://github.com/github/copilot-cli/issues/4946) HTTP 400 `content[].thinking` after a background shell completion notification `triage` 💬1
- [#4931](https://github.com/github/copilot-cli/issues/4931) Cloud agent: the built-in Playwright MCP session is already closed at the first tool call, and recovery reports it as browser OAuth required `triage` 💬1
- [#4945](https://github.com/github/copilot-cli/issues/4945) Cancelling/closing an ask_user form silently discards all previously answered fields `triage`
- [#4944](https://github.com/github/copilot-cli/issues/4944) Form fields don't support mouse click / cursor placement for inline text editing `triage`
- [#4943](https://github.com/github/copilot-cli/issues/4943) ask_user form: pressing Esc silently discards the entire form instead of clearing current input `triage`
- [#4942](https://github.com/github/copilot-cli/issues/4942) `session_store_sql` returns deleted sessions forever: no DELETE verb on `POST /agents/analytics/query` or `/agents/sessions/*` `triage`
- [#4941](https://github.com/github/copilot-cli/issues/4941) reasoning_effort binding to claude-haiku-4.5 model fails on sub-agent invocation `triage`
- [#4940](https://github.com/github/copilot-cli/issues/4940) Allow subagents.maxConcurrency for BYOK / non usage-based accounts (currently hard-capped at 2) `triage`
- [#4939](https://github.com/github/copilot-cli/issues/4939) Unable to delete old remote sessions `triage`
- [#4938](https://github.com/github/copilot-cli/issues/4938) SessionConfig.GitHubToken / GitHubTokenProvider still route to api.github.com instead of the GHEC Data Residency tenant endpoint, even with CopilotClientMode.Empty — same defect class as #4527, unresolved on the SDK session-level path `triage`
- [#4937](https://github.com/github/copilot-cli/issues/4937) Failed to install plugin: Access is denied. (os error 5) `triage`
- [#4936](https://github.com/github/copilot-cli/issues/4936) Allow a credential command in providers.json and managed settings so BYOK providers work without a per-invocation launcher `triage`
- [#4933](https://github.com/github/copilot-cli/issues/4933) Managed plugins are never re-synced from the server after install — local edits/deletions to plugin content are neither detected nor corrected (enforcement silently defeatable) `triage`
- [#4935](https://github.com/github/copilot-cli/issues/4935) Built-in Slack MCP integration requests full scope superset even when only read tools are exposed `triage`
- [#4934](https://github.com/github/copilot-cli/issues/4934) Passive Prompt Coaching for Copilot CLI `triage`

#### 🔒 Closed Issues
- [#2714](https://github.com/github/copilot-cli/issues/2714) Feature Request: Allow toggling plugins enabled/disabled
- [#2980](https://github.com/github/copilot-cli/issues/2980) postToolUse hook additionalContext not injected into agent context window
- [#3932](https://github.com/github/copilot-cli/issues/3932) Display monthly AIC quota and usage in Copilot CLI (like IDE plugins do)
- [#3750](https://github.com/github/copilot-cli/issues/3750) Hardcoded colors in 1.0.61 break the light themed CLI
- [#4590](https://github.com/github/copilot-cli/issues/4590) Extension SDK reconnects dispose the session hook processor: "Hook processor is not configured for session id"
- [#3344](https://github.com/github/copilot-cli/issues/3344) Messages submitted while background subagents are running get stranded in the Queued (N) UI region and only drain via bg-agent completion (workaround: 'submit another message' is a placebo)
- [#3736](https://github.com/github/copilot-cli/issues/3736) Thinking Tokens/Text never appears with BYOK models regardless of endpoint type
- [#4268](https://github.com/github/copilot-cli/issues/4268) Regression: exit summary not shown after upgrading to 1.0.74 / 1.0.75
- [#3890](https://github.com/github/copilot-cli/issues/3890) WebFetchRedirectError: Redirects are not followed for OpenAI documentation URLs
- [#3722](https://github.com/github/copilot-cli/issues/3722) `ask_user` User input formatting issues
- [#3456](https://github.com/github/copilot-cli/issues/3456) Concurrent refresh-token requests against the same parent RT kill the OAuth chain on MCP servers with strict reuse detection
- [#3330](https://github.com/github/copilot-cli/issues/3330) macOS: explicit `tls.getCACertificates("system")` call adds 5+ seconds to every CLI invocation
- [#2910](https://github.com/github/copilot-cli/issues/2910) /diff viewer shows only leaf filename in tab bar — ambiguous for lib.rs, mod.rs, etc.
- [#3918](https://github.com/github/copilot-cli/issues/3918) /cd autocomplete: Enter behavior depends on highlighted-index position; Tab completes text but doesn't select; Escape doesn't dismiss the menu
- [#3848](https://github.com/github/copilot-cli/issues/3848) /voice no funciona bien
- [#2658](https://github.com/github/copilot-cli/issues/2658) /resume fails after CLI restart on Windows when session event contains raw U+2028

### OpenCode (`anomalyco/opencode`)

**Stars:** 209,424 · **Open issues:** 6,105 · **Last push:** <1h ago

On September 23, 2026, there were no new releases for OpenCode, but several important pull requests were merged, including fixes for displaying API error messages across the CLI and TUI, as well as enhancements to logging for OAuth and credential failures in the core module. Notably, a feature was added that allows metadata updates for session management. Among the new issues, the most concerning appears to be #50756, which highlights a problem where a malformed recognized value in configuration normalization can lead to a bad package ID silently dropping an entire provider, indicating a significant oversight in error reporting. Overall, the day was primarily focused on addressing bugs and enhancing functionality rather than introducing new features.

#### ✅ Merged PRs
- [#50783](https://github.com/anomalyco/opencode/pull/50783) fix: show API error messages in remaining CLI and TUI paths
- [#50778](https://github.com/anomalyco/opencode/pull/50778) fix(tui): show API error messages in toasts
- [#50767](https://github.com/anomalyco/opencode/pull/50767) fix(core): log error messages for MCP OAuth and credential failures
- [#50733](https://github.com/anomalyco/opencode/pull/50733) fix(tui): export complete session transcript
- [#50763](https://github.com/anomalyco/opencode/pull/50763) fix(app): keep Console sign-in visible when a Zen API key is stored
- [#50383](https://github.com/anomalyco/opencode/pull/50383) fix(ai): replay Kimi reasoning details without the streaming index
- [#50765](https://github.com/anomalyco/opencode/pull/50765) fix(tui): show latest step in turn token summary
- [#50754](https://github.com/anomalyco/opencode/pull/50754) fix(core): install git plugins from branch subdirectories
- [#50752](https://github.com/anomalyco/opencode/pull/50752) fix(acp): forward provider retry status to clients
- [#50025](https://github.com/anomalyco/opencode/pull/50025) feat(session): allow metadata updates

#### 🐛 New Issues
- [#50756](https://github.com/anomalyco/opencode/issues/50756) config: normalization diagnostic 'skipped malformed recognized value' doesn't name the offending field — bad package id silently drops whole provider 💬3
- [#50720](https://github.com/anomalyco/opencode/issues/50720) paid yesterday cant use today 💬3
- [#50777](https://github.com/anomalyco/opencode/issues/50777) [v2] No idle-time compaction: a large session is re-sent uncached after its prompt cache expires 💬2
- [#50747](https://github.com/anomalyco/opencode/issues/50747) Persian/Farsi text is not displayed RTL (right-to-left) correctly 💬2
- [#50753](https://github.com/anomalyco/opencode/issues/50753) Feature Request: Voice Mode, First-Class Browser Automation, Goal-Driven Task Loop, and In-App Plugin Discovery 💬2
- [#50766](https://github.com/anomalyco/opencode/issues/50766) Upstream request failed: Insufficient account funds `needs:compliance` 💬2
- [#50715](https://github.com/anomalyco/opencode/issues/50715) HTTP auth accepts Basic credentials via `?auth_token=` query parameter | 💬2
- [#50718](https://github.com/anomalyco/opencode/issues/50718) приложение не работает 💬2
- [#50721](https://github.com/anomalyco/opencode/issues/50721) opencode serve forces Basic Auth with no way to disable it 💬2
- [#50780](https://github.com/anomalyco/opencode/issues/50780) server: no SIGTERM handling, MCP stdio (docker) children orphaned on every stop/restart 💬1
- [#50779](https://github.com/anomalyco/opencode/issues/50779) beep, each message has no response `needs:compliance` 💬1
- [#50773](https://github.com/anomalyco/opencode/issues/50773) Cannot connect to API: Connect Timeout Error (attempted addresses: 172.65.90.23:443, 172.65.90.22:443, 172.65.90.20:443, timeout: 10000ms) `needs:compliance` 💬1
- [#50770](https://github.com/anomalyco/opencode/issues/50770) GREP `needs:compliance` 💬1
- [#50769](https://github.com/anomalyco/opencode/issues/50769) OpenCode changed the selected models by itself `needs:compliance` 💬1
- [#50764](https://github.com/anomalyco/opencode/issues/50764) TaskTool foreground path reports false "completed" with empty output when background job is missing from registry 💬1
- [#50758](https://github.com/anomalyco/opencode/issues/50758) server: stdio MCP child processes not terminated on service restart / config reload 💬1
- [#50743](https://github.com/anomalyco/opencode/issues/50743) ACP: forward provider retry status to the client during a turn
- [#50751](https://github.com/anomalyco/opencode/issues/50751) subagent: background subagent's resumed turn completes but the parent session never receives the completion notification 💬1
- [#50750](https://github.com/anomalyco/opencode/issues/50750) instructions: RangeError stack overflow activating AGENTS.md for case-variant Windows location 💬1
- [#50744](https://github.com/anomalyco/opencode/issues/50744) Config schema for V2 💬1
- [#50746](https://github.com/anomalyco/opencode/issues/50746) [FEATURE]:Persian/Farsi text is not displayed RTL (right-to-left) correctly 💬1
- [#50781](https://github.com/anomalyco/opencode/issues/50781) desktop(browser): screenshot refuses with "needs a visible tab" when the review pane is not displaying the tab (fromSurface)
- [#50775](https://github.com/anomalyco/opencode/issues/50775) Failed to drain Session: one malformed tool result wedges the whole session
- [#50772](https://github.com/anomalyco/opencode/issues/50772) [FEATURE]: Add i18n dictionary parity regression tests for app/ui locales
- [#50771](https://github.com/anomalyco/opencode/issues/50771) Fetch method in codemode can access the host
- [#50768](https://github.com/anomalyco/opencode/issues/50768) In-progress thinking truncated when joining a running session
- [#50761](https://github.com/anomalyco/opencode/issues/50761) provider: opencode-go route-dependent context limits cause unparseable HTTP 400 in long sessions
- [#50759](https://github.com/anomalyco/opencode/issues/50759) V2 provider OAuth refresh races across locations and processes
- [#50748](https://github.com/anomalyco/opencode/issues/50748) Prompt caching for Mistral is silently disabled: @ai-sdk/mistral 3.x drops promptCacheKey, and 4.x requires a spec-v4 core

#### 🔒 Closed Issues
- [#41857](https://github.com/anomalyco/opencode/issues/41857) [FEATURE]: Add opencode-pr-tracker to the ecosystem
- [#50756](https://github.com/anomalyco/opencode/issues/50756) config: normalization diagnostic 'skipped malformed recognized value' doesn't name the offending field — bad package id silently drops whole provider
- [#50720](https://github.com/anomalyco/opencode/issues/50720) paid yesterday cant use today
- [#50747](https://github.com/anomalyco/opencode/issues/50747) Persian/Farsi text is not displayed RTL (right-to-left) correctly
- [#50753](https://github.com/anomalyco/opencode/issues/50753) Feature Request: Voice Mode, First-Class Browser Automation, Goal-Driven Task Loop, and In-App Plugin Discovery
- [#47517](https://github.com/anomalyco/opencode/issues/47517) plugin: Git subdirectory package fails to install from GitHub
- [#50715](https://github.com/anomalyco/opencode/issues/50715) HTTP auth accepts Basic credentials via `?auth_token=` query parameter |
- [#50718](https://github.com/anomalyco/opencode/issues/50718) приложение не работает
- [#50721](https://github.com/anomalyco/opencode/issues/50721) opencode serve forces Basic Auth with no way to disable it
- [#50232](https://github.com/anomalyco/opencode/issues/50232) ai: Kimi K3 tool-loop 400 because reasoning_details replay includes streaming index
- [#48133](https://github.com/anomalyco/opencode/issues/48133) plugins: private GitHub install fails after codeload 404
- [#50743](https://github.com/anomalyco/opencode/issues/50743) ACP: forward provider retry status to the client during a turn
- [#50744](https://github.com/anomalyco/opencode/issues/50744) Config schema for V2

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,072 · **Open issues:** 1,517 · **Last push:** <1h ago

On September 23, 2026, Qwen Code released version v0.24.5-preview.0, which corrected issues related to the deferred-tool bridge and provided insights into CI test timing, alongside the general availability of v0.24.4 that introduced features like a monitoring tool for system prompt guidance. Significant changes included the decoupling of group-member access from sender policies and various fixes such as improving clipboard functionality and handling stale tool dispatch in merged pull requests. Noteworthy issues emerged, including the clipboard paste failures on Linux/WSL which received attention, indicating that users are experiencing critical disruptions in functionality. Overall, while largely routine, the day highlighted ongoing refinements and the continual adaptation of features to user needs.

#### 🚀 New Releases
- [v0.24.5-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.5-preview.0) Release v0.24.5-preview.0
- [v0.24.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.4) Release v0.24.4
- [v0.24.4-nightly.20260922.99bf4ce86b](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.4-nightly.20260922.99bf4ce86b) Release v0.24.4-nightly.20260922.99bf4ce86b
- [v0.24.3-nightly.20260922.c5920f479b](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.3-nightly.20260922.c5920f479b) Release v0.24.3-nightly.20260922.c5920f479b
- [desktop-v0.24.4](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.4) Qwen Code Desktop v0.24.4

#### ✅ Merged PRs
- [#12475](https://github.com/QwenLM/qwen-code/pull/12475) feat(channels): decouple group-member access from senderPolicy
- [#12456](https://github.com/QwenLM/qwen-code/pull/12456) docs(verify-pr): add persisted-state, steady-state and skip-coverage rules
- [#12491](https://github.com/QwenLM/qwen-code/pull/12491) fix(review): Move trusted state outside workspaces
- [#12478](https://github.com/QwenLM/qwen-code/pull/12478) fix(java): Make JDBC lease clocks timezone and storage safe
- [#12498](https://github.com/QwenLM/qwen-code/pull/12498) fix(cli): hide external editor option when the configured editor is unavailable
- [#12477](https://github.com/QwenLM/qwen-code/pull/12477) fix(java): Fence stale tool dispatch owners
- [#12485](https://github.com/QwenLM/qwen-code/pull/12485) chore(vscode-ide-companion): regenerate NOTICES.txt after dependency reorder (#12481)

#### 🐛 New Issues
- [#12449](https://github.com/QwenLM/qwen-code/issues/12449) TUI eats one transcript line per rows-only shrink (mobile soft keyboard / Termux): bundled ink 7.0.3 predates the upstream rows-shrink fix (#1031) `priority/P3` `type/bug` `category/ui` `scope/interactive` 💬10
- [#12488](https://github.com/QwenLM/qwen-code/issues/12488) [Bug] Clipboard paste silently fails on Linux/WSL when wl-paste/xclip is missing (swallows Ctrl+V without error or fallback) `priority/P2` `type/bug` `category/cli` `scope/interactive` 💬6
- [#12435](https://github.com/QwenLM/qwen-code/issues/12435) fix(core): warn when dynamic tools.eager entries match no discovered tool `priority/P3` `type/bug` `category/core` `scope/settings` 💬5
- [#12453](https://github.com/QwenLM/qwen-code/issues/12453) 当左侧边栏收起后，“新建任务”的图标与其他图标没有垂直对齐 `priority/P3` `type/bug` `category/ui` `welcome-pr` 💬5
- [#12505](https://github.com/QwenLM/qwen-code/issues/12505) [Bug] Clipboard image paste still fails silently when the tool is found but its query fails, when the native module throws, and on the OpenTUI renderer `priority/P2` `type/bug` `category/cli` `scope/interactive` 💬4
- [#12504](https://github.com/QwenLM/qwen-code/issues/12504) [Bug] On Linux the clipboard-unavailable message names the wrong cause ("native clipboard module could not be loaded") `priority/P2` `type/bug` `category/cli` `scope/interactive` 💬4
- [#12460](https://github.com/QwenLM/qwen-code/issues/12460) git commit --amend gate in Auto mode: sessionCommitShas is never populated — "made by the agent in this session" exemption is dead code `priority/P2` `type/bug` `category/security` `scope/git` 💬4
- [#12440](https://github.com/QwenLM/qwen-code/issues/12440) Live Voice session cannot be opened on a daemon serving a single workspace `priority/P1` `type/bug` `category/cli` `scope/session-management` 💬4
- [#12503](https://github.com/QwenLM/qwen-code/issues/12503) [Feature] WSL2/Linux clipboard: powershell.exe interop fallback, and don't swallow Ctrl+V when the clipboard holds no image `priority/P3` `type/feature-request` `category/cli` `scope/interactive` 💬3
- [#12501](https://github.com/QwenLM/qwen-code/issues/12501) vscode companion: editing a message always fails with "Failed to edit the message. Please try again." `priority/P2` `type/bug` `category/integration` `scope/vscode` 💬3
- [#12496](https://github.com/QwenLM/qwen-code/issues/12496) # Bug: MCP client marks tools-only servers as disconnected (-32601 treated as transport error) `priority/P2` `type/bug` `category/tools` `scope/mcp` 💬3
- [#12479](https://github.com/QwenLM/qwen-code/issues/12479) Main CI failed: Qwen Code CI on 1b26d38b5c47 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬3
- [#12472](https://github.com/QwenLM/qwen-code/issues/12472) test(core): nothing bounds a bundled skill's <available_skills> entry size, so the 8,000-char listing trim recovers budget from the user's own skills instead `priority/P3` `category/core` `scope/testing` `type/enhancement` 💬3
- [#12467](https://github.com/QwenLM/qwen-code/issues/12467) LSP diagnostics can report a clean result after failed or unavailable queries `priority/P2` `type/bug` `category/core` `status/ready-for-human` 💬3
- [#12471](https://github.com/QwenLM/qwen-code/issues/12471) bug(core): an MCP image between 100 MiB and 128 MiB never reaches the omni upload funnel — it is placeholdered on the producer side `priority/P2` `type/bug` `category/core` `scope/mcp` 💬3
- [#12470](https://github.com/QwenLM/qwen-code/issues/12470) maxParallelAgentsByModel is ignored for foreground agents (a skill can bypass the limit) `priority/P2` `type/bug` `category/tools` `roadmap/multi-agent` 💬3
- [#12457](https://github.com/QwenLM/qwen-code/issues/12457) Running Qwen Code on untrusted input: PreToolUse hooks fail open, hook allow does not override the serve classifier, no positive tool allowlist `priority/P2` `type/feature-request` `category/security` `scope/settings` 💬3
- [#12444](https://github.com/QwenLM/qwen-code/issues/12444) feat(web-shell): support pinning workspaces/projects to the top of the sidebar `priority/P3` `type/feature-request` `category/ui` `roadmap/session-management` 💬3
- [#12490](https://github.com/QwenLM/qwen-code/issues/12490) Main CI failed: E2E Tests — cli/qwen-serve-routes.test.ts > … > advertises all baseline capabilities `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#12480](https://github.com/QwenLM/qwen-code/issues/12480) VSCode IDE Companion Release Failed for 0.24.4 on 2026-09-22 💬2
- [#12486](https://github.com/QwenLM/qwen-code/issues/12486) Main CI failed: Qwen Code CI on 9923f6ef08b3 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#12481](https://github.com/QwenLM/qwen-code/issues/12481) Main CI failed: Qwen Code CI on 8af8b9df3a57 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#12459](https://github.com/QwenLM/qwen-code/issues/12459) Main CI failed: Qwen Code CI on 74b5eb9e6db9 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#12448](https://github.com/QwenLM/qwen-code/issues/12448) Release Failed for N/A on 2026-09-22 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#12469](https://github.com/QwenLM/qwen-code/issues/12469) feat(channels): allow independent access policies for group vs direct messages `status/needs-triage` `type/feature-request` 💬1
- [#12493](https://github.com/QwenLM/qwen-code/issues/12493) Deferred review findings from PR #12439: fix(web-shell): settle stale streaming messages when idle 💬1
- [#12436](https://github.com/QwenLM/qwen-code/issues/12436) Main CI failed: Qwen Code CI — scripts/tests/package-scripts.test.js > … > selects the CLI dependency closure without selecting the same-nam… (+2 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1

#### 🔒 Closed Issues
- [#7040](https://github.com/QwenLM/qwen-code/issues/7040) RFC: Reliable auto-memory recall — timing, quality, and telemetry
- [#12425](https://github.com/QwenLM/qwen-code/issues/12425) bug(core): the workflow keyword bridge sentence names tools CodeModeOnly hides and refuses
- [#12435](https://github.com/QwenLM/qwen-code/issues/12435) fix(core): warn when dynamic tools.eager entries match no discovered tool
- [#12440](https://github.com/QwenLM/qwen-code/issues/12440) Live Voice session cannot be opened on a daemon serving a single workspace
- [#5626](https://github.com/QwenLM/qwen-code/issues/5626) Proposal: Revive Chrome Extension via Daemon + WebUI Architecture
- [#12332](https://github.com/QwenLM/qwen-code/issues/12332) web-shell: publish verifier rejects wildcard export targets
- [#8699](https://github.com/QwenLM/qwen-code/issues/8699) Proposal: Qwen WebBridge — direct browser control similar to Kimi WebBridge
- [#10745](https://github.com/QwenLM/qwen-code/issues/10745) Bug: Edit confirmation offers "Modify with external editor" when the configured editor is unavailable
- [#12479](https://github.com/QwenLM/qwen-code/issues/12479) Main CI failed: Qwen Code CI on 1b26d38b5c47
- [#12406](https://github.com/QwenLM/qwen-code/issues/12406) Desktop app: UI font is too small and there is no way to adjust it
- [#12480](https://github.com/QwenLM/qwen-code/issues/12480) VSCode IDE Companion Release Failed for 0.24.4 on 2026-09-22
- [#12481](https://github.com/QwenLM/qwen-code/issues/12481) Main CI failed: Qwen Code CI on 8af8b9df3a57
- [#11766](https://github.com/QwenLM/qwen-code/issues/11766) Web Shell: an attachment queue row wedges at "Submitting…" with disabled actions after one failed pending-prompts refresh
- [#12469](https://github.com/QwenLM/qwen-code/issues/12469) feat(channels): allow independent access policies for group vs direct messages
- [#12436](https://github.com/QwenLM/qwen-code/issues/12436) Main CI failed: Qwen Code CI — scripts/tests/package-scripts.test.js > … > selects the CLI dependency closure without selecting the same-nam… (+2 more)

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1703](https://github.com/anthropics/skills/pull/1703) Add md2video-audio skill
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 390,262 · **Open issues:** 8,294 · **Last push:** <1h ago

On September 23, 2026, there were no new releases for OpenClaw but several notable updates were made in the form of merged pull requests. Key changes included the introduction of a feature that exports committed plugin inventory for resource coverage and a fix to improve agent steering behavior post-turn. Additionally, significant attention was given to addressing issues such as the restoration of GPT-6 subscription discovery and ensuring that cold child compilation is excluded from CI test deadlines. Among the new critical issues reported is a bug concerning the blocked update to version 2026.9.5 due to a retained_plugin_source_conflict, indicating potential troubles in the upgrade process. Overall, the day was marked by ongoing development efforts focused on enhancing functionality and resolving bugs.

#### ✅ Merged PRs
- [#156033](https://github.com/openclaw/openclaw/pull/156033) chore(qa): qualify execution identity across live boundaries
- [#155775](https://github.com/openclaw/openclaw/pull/155775) feat: export committed plugin inventory for resource coverage
- [#156012](https://github.com/openclaw/openclaw/pull/156012) refactor: move Kysely type checks to compiler contracts
- [#153738](https://github.com/openclaw/openclaw/pull/153738) fix(agents): defer steering after a turn finishes or hands off
- [#156004](https://github.com/openclaw/openclaw/pull/156004) refactor(tests): keep tool config type proof in compiler checks
- [#156040](https://github.com/openclaw/openclaw/pull/156040) fix(ci): avoid dependency warnings from unrelated main updates
- [#155901](https://github.com/openclaw/openclaw/pull/155901) fix(skills): track coverage loss after watcher readiness
- [#155866](https://github.com/openclaw/openclaw/pull/155866) fix(ci): expose Windows Testbox spawn failures
- [#156011](https://github.com/openclaw/openclaw/pull/156011) fix: keep cold child compilation outside CI test deadlines
- [#155326](https://github.com/openclaw/openclaw/pull/155326) fix(ui): keep task progress collapsed when sending messages
- [#156013](https://github.com/openclaw/openclaw/pull/156013) fix(ci): report elapsed tooling file times
- [#155996](https://github.com/openclaw/openclaw/pull/155996) ci: defer slow real-Gateway UI proofs to release validation
- [#156021](https://github.com/openclaw/openclaw/pull/156021) fix: preserve Git identity for Linux AWS commands
- [#155957](https://github.com/openclaw/openclaw/pull/155957) fix(gateway): avoid rereading session rows after refresh yields
- [#155905](https://github.com/openclaw/openclaw/pull/155905) chore(test): retain Windows wrapper startup stages
- [#156028](https://github.com/openclaw/openclaw/pull/156028) fix(tests): reload task fixtures without closing live storage
- [#155995](https://github.com/openclaw/openclaw/pull/155995) perf(gateway): reduce session list work during progress updates
- [#152085](https://github.com/openclaw/openclaw/pull/152085) fix(codex): allow consent for permitted reads under destructive denial
- [#155965](https://github.com/openclaw/openclaw/pull/155965) fix(tests): wait for committed Discord ingress retries
- [#155998](https://github.com/openclaw/openclaw/pull/155998) fix(sessions): reduce history stalls during cron cleanup
- [#156027](https://github.com/openclaw/openclaw/pull/156027) refactor(agents): colocate shared harness unit tests
- [#156018](https://github.com/openclaw/openclaw/pull/156018) feat(diagnostics): identify agents across message and model-call traces
- [#155989](https://github.com/openclaw/openclaw/pull/155989) fix(codex): restore GPT-6 subscription discovery
- [#155923](https://github.com/openclaw/openclaw/pull/155923) fix(ci): qualify retained lock report snapshots
- [#155985](https://github.com/openclaw/openclaw/pull/155985) fix(ci): reduce packed Node test tails
- [#155886](https://github.com/openclaw/openclaw/pull/155886) fix(sessions): keep stored sessions stable across alias changes
- [#155922](https://github.com/openclaw/openclaw/pull/155922) fix(ci): join Doctor corpus fixtures before teardown
- [#156010](https://github.com/openclaw/openclaw/pull/156010) perf(test): compare llama download buffers natively
- [#155972](https://github.com/openclaw/openclaw/pull/155972) improve: reduce package profile test setup
- [#155981](https://github.com/openclaw/openclaw/pull/155981) fix(imessage): avoid blocking Gateway on message references
- [#155966](https://github.com/openclaw/openclaw/pull/155966) feat(anthropic): support Claude Opus 5.5
- [#152181](https://github.com/openclaw/openclaw/pull/152181) refactor(agents): share external harness session and attempt machinery
- [#156006](https://github.com/openclaw/openclaw/pull/156006) chore(i18n): refresh native locales
- [#155944](https://github.com/openclaw/openclaw/pull/155944) chore(test): retain Doctor fixture settlement diagnostics
- [#155987](https://github.com/openclaw/openclaw/pull/155987) perf(codex): reuse unchanged inference request bytes
- [#155785](https://github.com/openclaw/openclaw/pull/155785) fix(state): avoid repeated integrity scans with peer worker leases
- [#155973](https://github.com/openclaw/openclaw/pull/155973) improve(tests): speed up snapshot ownership checks
- [#156001](https://github.com/openclaw/openclaw/pull/156001) fix(ci): keep package builds out of stable macOS test budget
- [#155014](https://github.com/openclaw/openclaw/pull/155014) perf(test): consolidate channel registry coverage
- [#155292](https://github.com/openclaw/openclaw/pull/155292) fix(runtime): preserve Node worker dependencies and cleanup diagnostics
- [#155928](https://github.com/openclaw/openclaw/pull/155928) chore(test): reduce large-index GC startup overhead
- [#153253](https://github.com/openclaw/openclaw/pull/153253) fix(ui): open browser cards after delayed panel renders
- [#155977](https://github.com/openclaw/openclaw/pull/155977) fix(update): retain the running updater by hard link instead of copying the package
- [#155134](https://github.com/openclaw/openclaw/pull/155134) feat(decisions): add explicit evaluation and Labs opt-in foundation
- [#153756](https://github.com/openclaw/openclaw/pull/153756) fix: keep ACP harness models out of native calls
- [#155731](https://github.com/openclaw/openclaw/pull/155731) improve: reuse shared tooling fixtures and defer legacy updater proof
- [#155979](https://github.com/openclaw/openclaw/pull/155979) improve(ui): reduce real-Gateway test preparation
- [#155740](https://github.com/openclaw/openclaw/pull/155740) perf(state): move session RPC SQL off the Gateway main thread
- [#155980](https://github.com/openclaw/openclaw/pull/155980) docs(freebsd): explain native Codex runtime limits
- [#155796](https://github.com/openclaw/openclaw/pull/155796) refactor: remove subagent registry dependency overrides
- [#155976](https://github.com/openclaw/openclaw/pull/155976) fix(qa): count Code Mode nested tool activity as transcript tool evidence
- [#155967](https://github.com/openclaw/openclaw/pull/155967) feat: support GPT-6 Sol and Luna
- [#155974](https://github.com/openclaw/openclaw/pull/155974) test: consolidate chat failure transcript assertions
- [#155912](https://github.com/openclaw/openclaw/pull/155912) chore(ui): refresh control ui locales
- [#155955](https://github.com/openclaw/openclaw/pull/155955) fix(telegram): wait on the queued-turn lifecycle instead of a 1s poll
- [#155960](https://github.com/openclaw/openclaw/pull/155960) fix(test): widen the subagent registry root-work teardown fence
- [#155947](https://github.com/openclaw/openclaw/pull/155947) fix(backup): recover scratch reclaimed during creation
- [#154835](https://github.com/openclaw/openclaw/pull/154835) fix(pr): preserve prepared evidence during refusal recovery
- [#155962](https://github.com/openclaw/openclaw/pull/155962) fix(tests): release retired fixtures after removal errors
- [#155968](https://github.com/openclaw/openclaw/pull/155968) fix: dispose session fixtures after UI tests
- [#155963](https://github.com/openclaw/openclaw/pull/155963) fix(ui): keep chat search compact and centered
- [#155301](https://github.com/openclaw/openclaw/pull/155301) feat(ui): group decision models by provider
- [#155897](https://github.com/openclaw/openclaw/pull/155897) fix(ui): queued inputs sort above the existing conversation when accepted before later turns
- [#155936](https://github.com/openclaw/openclaw/pull/155936) test: finish UI fixture work before cleanup
- [#155389](https://github.com/openclaw/openclaw/pull/155389) fix(update): report deferred repairs as warnings and clear resolved notices
- [#155932](https://github.com/openclaw/openclaw/pull/155932) fix: enable update failure reports for named administrators
- [#155789](https://github.com/openclaw/openclaw/pull/155789) fix(ui): keep mobile goal controls above expanded text
- [#155948](https://github.com/openclaw/openclaw/pull/155948) fix: Keep Slack bold formatting consistent on the release branch
- [#155938](https://github.com/openclaw/openclaw/pull/155938) fix: Slack replies render intended bold text as italics
- [#155945](https://github.com/openclaw/openclaw/pull/155945) improve: speed up backup CLI process tests
- [#155943](https://github.com/openclaw/openclaw/pull/155943) fix(ci): apply storage file-limit assertion to GitHub jobs
- [#155940](https://github.com/openclaw/openclaw/pull/155940) fix(release): probe installed bundled channel entries on plain Node
- [#155741](https://github.com/openclaw/openclaw/pull/155741) fix(agents): session-ID lookup loses partition ownership
- [#155925](https://github.com/openclaw/openclaw/pull/155925) fix(plugins): share the runtime execution frame constructor across module graphs
- [#155107](https://github.com/openclaw/openclaw/pull/155107) improve(tests): skip excluded files before planning extension runs
- [#155949](https://github.com/openclaw/openclaw/pull/155949) fix: prevent picker browser tests from inheriting old mounts
- [#155934](https://github.com/openclaw/openclaw/pull/155934) fix(tests): drain persistence deliveries before fixture cleanup
- [#155913](https://github.com/openclaw/openclaw/pull/155913) fix(tests): drain Gateway abort deliveries before teardown
- [#155199](https://github.com/openclaw/openclaw/pull/155199) fix(ui): preserve message footer focus outlines
- [#155931](https://github.com/openclaw/openclaw/pull/155931) fix(test): give the bundled MCP tarball checks time on Windows runners
- [#155786](https://github.com/openclaw/openclaw/pull/155786) improve: explain where session catalog requests spend time
- [#155924](https://github.com/openclaw/openclaw/pull/155924) fix(release): retain due plugin compatibility records
- [#155871](https://github.com/openclaw/openclaw/pull/155871) fix(test): prevent Gateway server suite heap exhaustion
- [#155872](https://github.com/openclaw/openclaw/pull/155872) fix(tui): preserve resolved session ownership
- [#154853](https://github.com/openclaw/openclaw/pull/154853) test(codex): assert late-abort interrupt identity
- [#155414](https://github.com/openclaw/openclaw/pull/155414) fix(cron): avoid blocking Gateway during retention discovery
- [#155910](https://github.com/openclaw/openclaw/pull/155910) fix(tests): drain subagent deliveries before teardown
- [#155921](https://github.com/openclaw/openclaw/pull/155921) fix(ci): recover Security Review when GitHub diff data settles slowly
- [#155919](https://github.com/openclaw/openclaw/pull/155919) fix(ci): recover Security Review after checkout failures
- [#155403](https://github.com/openclaw/openclaw/pull/155403) ci: pack test jobs and add opt-in Spot cron routing
- [#150237](https://github.com/openclaw/openclaw/pull/150237) fix(gateway): retain approval authority across storage waits
- [#155471](https://github.com/openclaw/openclaw/pull/155471) fix(gateway): keep concurrent session descriptions responsive
- [#155638](https://github.com/openclaw/openclaw/pull/155638) test(media): isolate base64 memory measurements
- [#155888](https://github.com/openclaw/openclaw/pull/155888) fix: settle subagent steer tests before teardown
- [#155735](https://github.com/openclaw/openclaw/pull/155735) test(ci): respect retained command worker caps
- [#133194](https://github.com/openclaw/openclaw/pull/133194) fix: surface aborted partials that fail to persist
- [#137483](https://github.com/openclaw/openclaw/pull/137483) fix(recovery): preserve restart-safe tool ownership
- [#153652](https://github.com/openclaw/openclaw/pull/153652) refactor(doctor): move sandbox registry imports off thread
- [#154640](https://github.com/openclaw/openclaw/pull/154640) fix: preserve higher plugin API requirements during release sync
- [#155779](https://github.com/openclaw/openclaw/pull/155779) perf(infra): reuse SQLite readers in detached Gateway callbacks
- [#149068](https://github.com/openclaw/openclaw/pull/149068) fix(pr): admit reviewed corrections without rewriting incoming verdicts
- [#155686](https://github.com/openclaw/openclaw/pull/155686) perf(ui): reuse automation inventory and host CPU identity
- [#155892](https://github.com/openclaw/openclaw/pull/155892) fix(release): repair 2026.9.6 plugin shard and FaceTime manifest validation
- [#154911](https://github.com/openclaw/openclaw/pull/154911) test(codex): use canonical RPC replies in Computer Use cancellation tests
- [#155830](https://github.com/openclaw/openclaw/pull/155830) feat(test): share the measured Gateway host across plugin workloads
- [#155904](https://github.com/openclaw/openclaw/pull/155904) refactor: reuse SQLite kernel in Workboard notification tests
- [#155837](https://github.com/openclaw/openclaw/pull/155837) fix(cloud): preserve supported filenames in workspace recovery
- [#155046](https://github.com/openclaw/openclaw/pull/155046) improve(tests): finish composer animation before measuring geometry
- [#155809](https://github.com/openclaw/openclaw/pull/155809) fix(state): avoid loading unrelated modules during agent cleanup
- [#155821](https://github.com/openclaw/openclaw/pull/155821) feat: expose streamed reply source occurrences
- [#155692](https://github.com/openclaw/openclaw/pull/155692) fix(update): explain foreign destination refusals
- [#155842](https://github.com/openclaw/openclaw/pull/155842) fix(telegram): keep rapid message chunks in one turn
- [#155553](https://github.com/openclaw/openclaw/pull/155553) test(gateway): prove approval startup ordering and settle requests
- [#153337](https://github.com/openclaw/openclaw/pull/153337) fix(gateway): preserve admitted worker history during transcript changes
- [#155887](https://github.com/openclaw/openclaw/pull/155887) fix(ci): keep workflow shell scratch outside checkout
- [#154851](https://github.com/openclaw/openclaw/pull/154851) improve(tests): advance Browser connection retry clocks
- [#155818](https://github.com/openclaw/openclaw/pull/155818) fix(release): repair 2026.9.6 validation failures
- [#155814](https://github.com/openclaw/openclaw/pull/155814) fix(test): pin the worker SDK witness to source bundled plugins
- [#155771](https://github.com/openclaw/openclaw/pull/155771) chore(deps): adopt fs-safe 0.18.1 identity repair
- [#155798](https://github.com/openclaw/openclaw/pull/155798) fix(release): forward the stable soak waiver through the candidate helper
- [#155883](https://github.com/openclaw/openclaw/pull/155883) refactor: consolidate wrapper import closure checks
- [#155870](https://github.com/openclaw/openclaw/pull/155870) fix(gateway): offload incremental history visibility reads
- [#155601](https://github.com/openclaw/openclaw/pull/155601) fix(qa): reject stale Telegram credential archives
- [#154746](https://github.com/openclaw/openclaw/pull/154746) fix(plugins): keep independent cleanup failures
- [#155787](https://github.com/openclaw/openclaw/pull/155787) fix(meetings): wait for pending audio setup on leave

#### 🐛 New Issues
- [#155764](https://github.com/openclaw/openclaw/issues/155764) [Bug]: OpenClaw 2026.9.5 update blocked by retained_plugin_source_conflict `bug` `regression` `impact:session-state` `impact:crash-loop` 💬7
- [#156007](https://github.com/openclaw/openclaw/issues/156007) [Bug]: upgrade was **2026.9.3 → 2026.9.5**. It failed **before activation** `bug` `regression` `clawsweeper:needs-live-repro` `P0` 💬4
- [#155920](https://github.com/openclaw/openclaw/issues/155920) Control UI model providers page polls models.authStatus and models.list every ~2.7 s, and each poll stages a full state-DB snapshot `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬4
- [#155937](https://github.com/openclaw/openclaw/issues/155937) [Bug]: GPT-6 embedded support: Sol rejected despite OAuth discovery; Luna needs verification `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬4
- [#156041](https://github.com/openclaw/openclaw/issues/156041) Update failure: post-update-plugins (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬3
- [#156038](https://github.com/openclaw/openclaw/issues/156038) [Bug]: before_model_resolve never runs for CLI-backed models (claude-cli) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#155956](https://github.com/openclaw/openclaw/issues/155956) web_search auto-detect prefers Tavily env over Grok OAuth (order 30 vs 70) on 2026.9.5 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#156002](https://github.com/openclaw/openclaw/issues/156002) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬3
- [#155347](https://github.com/openclaw/openclaw/issues/155347) 9.5 recurrence of #146851: 8 monitor heartbeats wedge into permanent 'running' for 12.7h (trace shape: job id / receipt / session / terminal outcome) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#155930](https://github.com/openclaw/openclaw/issues/155930) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬3
- [#155880](https://github.com/openclaw/openclaw/issues/155880) update repair stuck: "Deferred plugin session import has no verified source index" after 2026.9.2→2026.9.5; code-mode cron triggers fail with "Plugin runtime changed" `clawsweeper:needs-live-repro` `impact:session-state` `impact:crash-loop` `P0` 💬3
- [#155451](https://github.com/openclaw/openclaw/issues/155451) [Bug]: Native Control UI steer queue advances only one message per Stop `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#155946](https://github.com/openclaw/openclaw/issues/155946) claude-cli backend: before_tool_call never fires for mcp.servers tools — the CLI holds those MCP clients, so plugin policy cannot gate them `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:security` 💬2
- [#156046](https://github.com/openclaw/openclaw/issues/156046) Deferred plugin migration is permanently blocked when the original sessions.json inode is missing `bug` `regression` `impact:session-state` `P0` 💬2
- [#155411](https://github.com/openclaw/openclaw/issues/155411) [Bug]: Discord runtime inspection takes tens of seconds on Windows before JSON output `bug` `bug:behavior` `P2` `issue-rating: 🦪 silver shellfish` 💬2
- [#155416](https://github.com/openclaw/openclaw/issues/155416) Update failure: doctor-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#156032](https://github.com/openclaw/openclaw/issues/156032) Update failure: unexpected-error (2026.9.2) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#155993](https://github.com/openclaw/openclaw/issues/155993) [Bug]: Workboard view freezes for 10+ s per visit: ResizeObserver feedback loop in labelOverflowRef (2026.9.5) 💬2
- [#155999](https://github.com/openclaw/openclaw/issues/155999) Update failure: [redacted-command] (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#155362](https://github.com/openclaw/openclaw/issues/155362) Slack plugin rejects JSON-escaped string params (after/before) — double-encoded tool args throw instead of being unescaped `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#155361](https://github.com/openclaw/openclaw/issues/155361) [Bug]: Native Codex parent loses child access after automatic completion changes tool catalog `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#155861](https://github.com/openclaw/openclaw/issues/155861) [Bug]: Named administrators cannot report update failures through trusted-proxy Control UI `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#155954](https://github.com/openclaw/openclaw/issues/155954) Issue on docs 💬2
- [#155774](https://github.com/openclaw/openclaw/issues/155774) Export committed plugin inventory for resource coverage `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#156051](https://github.com/openclaw/openclaw/issues/156051) [Bug]: Control UI chat — own sent message bubble disappears before reading (optimistic bubble retired without canonical row attached) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#156031](https://github.com/openclaw/openclaw/issues/156031) [Bug]: Built-in shorthand 'sonnet' resolves to claude-sonnet-4-6 via vercel-ai-gateway but claude-sonnet-5 via anthropic; bare 'opus' still pins claude-opus-5 after Opus 5.5 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#156026](https://github.com/openclaw/openclaw/issues/156026) [Bug]: runtime.llm.complete inherits retired plugin inventory after hot reload `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#156023](https://github.com/openclaw/openclaw/issues/156023) openclaw update (npm) fails reproducibly at "global install swap" (global-install-failed); failure record's stderrTail is front-truncated, hiding the root cause `clawsweeper:needs-info` `P0` `issue-rating: 🦐 gold shrimp` `maturity:stable` 💬1
- [#156016](https://github.com/openclaw/openclaw/issues/156016) deferred-plugin-session-import receipt is captured from a live session index, so a concurrent write permanently deadlocks plugin state migration `impact:session-state` `P0` `impact:ux-release-blocker` 💬1
- [#156009](https://github.com/openclaw/openclaw/issues/156009) [Bug]: Plugin build finalize leaves staged dist trees incomplete (ERR_MODULE_NOT_FOUND) and re-stages endlessly — ~44 GB tmp churn on 2026.9.5 (macOS Homebrew) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#156008](https://github.com/openclaw/openclaw/issues/156008) [Bug]: Mattermost channel reactions land in the parent session instead of the message's thread session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#155992](https://github.com/openclaw/openclaw/issues/155992) Feature request: `workboard_board_move` — move a card between boards without changing status `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#155990](https://github.com/openclaw/openclaw/issues/155990) [Feature]: add `workboard_unlink` / fix `workboard_link` to atomically replace a reversed dependency link `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#155984](https://github.com/openclaw/openclaw/issues/155984) [Bug]: Copilot encrypted_content still middle-ellipsized when 416-char reasoning IDs bypass sanitizer `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#155975](https://github.com/openclaw/openclaw/issues/155975) [Bug]: Recover transient chat state-lifecycle contention safely and show actionable errors `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#155970](https://github.com/openclaw/openclaw/issues/155970) [Bug]: Internal context block delivered without user message text (discord) `bug` `bug:behavior` `P1` `impact:message-loss` 💬1
- [#155941](https://github.com/openclaw/openclaw/issues/155941) CI planner test rejects valid hybrid storage partitions above 64 files `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#155953](https://github.com/openclaw/openclaw/issues/155953) [Bug]: [UX] Sidebar information architecture: "Home" labeling, and "Groups" backed by three unrelated mechanisms `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#155958](https://github.com/openclaw/openclaw/issues/155958) [Feature]: Control UI polish — per-item colored sidebar nav icons, always-on context meter, complete zh-CN coverage `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#155942](https://github.com/openclaw/openclaw/issues/155942) Session SQLite migration recovery report (session-sqlite-1790108684484-5aafea3b) `P2` `impact:ux-friction` 💬1
- [#155939](https://github.com/openclaw/openclaw/issues/155939) [Bug]: OpenClaw 2026.9.5: Cron Script Payload Does Not Materialize bundle-MCP Tools `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#155893](https://github.com/openclaw/openclaw/issues/155893) [Bug]: [Regression] Gateway refuses to start after 7.1.2 → 9.5 upgrade — `retained_plugin_source_conflict` blocks `openclaw doctor --session-sqlite import` indefinitely `bug` `regression` `clawsweeper:needs-live-repro` `impact:session-state` 💬1
- [#155983](https://github.com/openclaw/openclaw/issues/155983) remove

#### 🔒 Closed Issues
- [#153377](https://github.com/openclaw/openclaw/issues/153377) [Bug]: update repair self-contends at finalize:doctor while owning gateway-lifecycle
- [#37966](https://github.com/openclaw/openclaw/issues/37966) [Bug]: cacheRetention ignored for LiteLLM-proxied Anthropic models
- [#112391](https://github.com/openclaw/openclaw/issues/112391) [Bug]: Docker :latest tag regressed from 2026.7.1 to 2026.6.33, triggering downgrade guard and blocking startup
- [#55943](https://github.com/openclaw/openclaw/issues/55943) subagent sessions don't trigger session-memory hook
- [#72133](https://github.com/openclaw/openclaw/issues/72133) Feature request: per-message token/cost metadata in mobile app and channel surfaces
- [#94241](https://github.com/openclaw/openclaw/issues/94241) [Feature]: Add plain-English doctor --explain diagnostics with focused repair prompts
- [#98427](https://github.com/openclaw/openclaw/issues/98427) [Enhancement] Add per-provider `stream: false` config to disable streaming at request level (not just channel rendering)
- [#136367](https://github.com/openclaw/openclaw/issues/136367) Slack Socket Mode: auth.test times out in gateway, apps.connections.open returns 408 — both work from standalone Node.js
- [#156002](https://github.com/openclaw/openclaw/issues/156002) Update failure: plugin-target-unavailable (2026.9.4)
- [#156046](https://github.com/openclaw/openclaw/issues/156046) Deferred plugin migration is permanently blocked when the original sessions.json inode is missing
- [#134700](https://github.com/openclaw/openclaw/issues/134700) [Bug]: memory.search.provider set to a custom provider inherits its baseUrl but drops auth -> openai-compatible 401
- [#96559](https://github.com/openclaw/openclaw/issues/96559) [Feature]: Have web_search support Google Enterprise ADC
- [#155861](https://github.com/openclaw/openclaw/issues/155861) [Bug]: Named administrators cannot report update failures through trusted-proxy Control UI
- [#155954](https://github.com/openclaw/openclaw/issues/155954) Issue on docs
- [#155774](https://github.com/openclaw/openclaw/issues/155774) Export committed plugin inventory for resource coverage
- [#156016](https://github.com/openclaw/openclaw/issues/156016) deferred-plugin-session-import receipt is captured from a live session index, so a concurrent write permanently deadlocks plugin state migration
- [#134352](https://github.com/openclaw/openclaw/issues/134352) Isolated automation returning the silent token NO_REPLY is counted as a delivery failure and trips cron.failureAlert
- [#153217](https://github.com/openclaw/openclaw/issues/153217) runtime.type="acp" agents can leak into a live Codex/OpenAI dispatch attempt using the harness-specific model ref
- [#155941](https://github.com/openclaw/openclaw/issues/155941) CI planner test rejects valid hybrid storage partitions above 64 files
- [#155942](https://github.com/openclaw/openclaw/issues/155942) Session SQLite migration recovery report (session-sqlite-1790108684484-5aafea3b)
- [#155939](https://github.com/openclaw/openclaw/issues/155939) [Bug]: OpenClaw 2026.9.5: Cron Script Payload Does Not Materialize bundle-MCP Tools
- [#155983](https://github.com/openclaw/openclaw/issues/155983) remove

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 248,120 · **Open issues:** 44,049 · **Last push:** <1h ago

Today was a routine maintenance day for Hermes Agent, with no releases or merged pull requests to report. However, several new issues were raised, notably the Todoist MCP OAuth failure due to the missing 'code_challenge' for public clients, as well as a problematic mid-stream drop related to completed streams when a superseded writer interferes. Other significant issues include the persistent bug regarding the settings model profile picker that continues to write the launch profile’s config.yaml, and a desktop chat bug that causes freezes on busy hosts. The proposal for Brazilian Portuguese documentation also garners attention, highlighting ongoing efforts to enhance localization support.

#### 🐛 New Issues
- [#119661](https://github.com/NousResearch/hermes-agent/issues/119661) Todoist MCP OAuth fails: 'code_challenge is required for public clients' 💬6
- [#119663](https://github.com/NousResearch/hermes-agent/issues/119663) Completed stream discarded as a mid-stream drop when a superseded writer fends the terminal chunk 💬5
- [#119561](https://github.com/NousResearch/hermes-agent/issues/119561) plugin-catalog: browserclaw and hermes-kame-api-rotation fail pinned-source-validate in CI 💬5
- [#119411](https://github.com/NousResearch/hermes-agent/issues/119411) [Bug]: Settings → Models profile picker still writes the launch profile's config.yaml (v0.21.4, single host backend) `type/bug` `area/config` `P2` `sweeper:risk-compatibility` 💬4
- [#119070](https://github.com/NousResearch/hermes-agent/issues/119070) kanban: card whose run was rate-limited then succeeded is parked as blocker_auth forever (reviewer never spawns) `type/bug` `comp/cli` `comp/cron` `P3` 💬3
- [#119643](https://github.com/NousResearch/hermes-agent/issues/119643) [Bug]: Desktop chat freezes for minutes on a busy host; generated replies can be dropped from the UI `bug` 💬2
- [#119681](https://github.com/NousResearch/hermes-agent/issues/119681) reasoning_effort silently dropped for bare named providers (providers: entries) — delegate_task children and desktop sessions get no profile 💬2
- [#119701](https://github.com/NousResearch/hermes-agent/issues/119701) [Bug]: Desktop profile rail colours collide (hue = name hash) and a bot's identity is tooltip-only 💬1
- [#119295](https://github.com/NousResearch/hermes-agent/issues/119295) [i18n] Proposal: Brazilian Portuguese (pt-BR) docs locale — starter subset + staged plan `type/docs` `P3` `needs-decision` `area/i18n` 💬1
- [#119627](https://github.com/NousResearch/hermes-agent/issues/119627) mem0 provider: sync_turn hardcodes infer=True, inconsistent with mem0_add and costly at scale 💬1
- [#119640](https://github.com/NousResearch/hermes-agent/issues/119640) [Bug] tool_call rejects a JSON-string calls payload without attempting repair (10 failures in one session) 💬1
- [#119658](https://github.com/NousResearch/hermes-agent/issues/119658) migrate_config stamps _config_version to latest even when a migration step failed and was skipped, so the skipped step never re-runs 💬1
- [#119664](https://github.com/NousResearch/hermes-agent/issues/119664) Desktop re-asserts last session's main model on boot — writes primary config.yaml with no user action 💬1
- [#119704](https://github.com/NousResearch/hermes-agent/issues/119704) [Bug]: Lazy install of platform.telegram hard-fails on pip.conf-mirrored indexes — exclude-newer quarantines every tornado release ("there are no versions of tornado")
- [#119703](https://github.com/NousResearch/hermes-agent/issues/119703) [Bug]: capability_fingerprint does not cover model.supports_vision — Bot Chat prompt never rebuilds on a vision-override flip
- [#119694](https://github.com/NousResearch/hermes-agent/issues/119694) [Bug]: pinned cron jobs store the billing-class provider 'custom' instead of the named custom provider, then silently fall back
- [#119686](https://github.com/NousResearch/hermes-agent/issues/119686) Desktop: live assistant bubble is deleteMessage'd on rewrite until a later reply lands
- [#119683](https://github.com/NousResearch/hermes-agent/issues/119683) Support model-blind handoff of SMS/email codes to browser_vault_enter_code
- [#119682](https://github.com/NousResearch/hermes-agent/issues/119682) browser_vault_enter_code can select an OTP form on the wrong tab
- [#119678](https://github.com/NousResearch/hermes-agent/issues/119678) [Feature]: Support OpenRouter Decisions-API models for aux tasks (e.g. mcp_approval)
- [#119668](https://github.com/NousResearch/hermes-agent/issues/119668) [Bug]: a Journey memory edit/delete rewrites the whole file unlocked — concurrent memories and hand-edited content are silently lost
- [#119641](https://github.com/NousResearch/hermes-agent/issues/119641) [Docs]: Clarify background-review safeguards when memory.write_approval is false
- [#119638](https://github.com/NousResearch/hermes-agent/issues/119638) Late MCP OAuth attempts are not scoped by profile
- [#119619](https://github.com/NousResearch/hermes-agent/issues/119619) [Bug]: a dispatcher-owned kanban worker exits rc=1 before its session when a pinned `--skills` name no longer resolves
- [#119617](https://github.com/NousResearch/hermes-agent/issues/119617) [Bug]: kanban stop-gate nudge orders a terminal call on a phantom `HERMES_KANBAN_TASK` — then names a card no board has
- [#119620](https://github.com/NousResearch/hermes-agent/issues/119620) [Bug]: SSH file sync can silently revert newer local writes (self-sync onto the same host, stale bulk pushes, stale sync_back snapshots)
- [#119618](https://github.com/NousResearch/hermes-agent/issues/119618) [Bug]: kanban crash diagnostics report an older attempt's output \u2014 the worker log is append-mode and the extractor cuts at the LAST exit summary
- [#119614](https://github.com/NousResearch/hermes-agent/issues/119614) [Bug]: cross-VM 9p check refuses WAL inside gVisor (runsc) sandboxes, where 9p is a same-kernel mount

#### 🔒 Closed Issues
- [#100302](https://github.com/NousResearch/hermes-agent/issues/100302) [Bug][Desktop]: DOM normalizer removes Chromium's active caret node and typing stops

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 92,452 · **Open issues:** 8,346 · **Last push:** <1h ago

The release of vLLM version 0.30.0 introduced 762 commits and 315 contributors, showcasing several significant updates, including new models like DeepSeek-V4.1-Flash and DeepGEMM Mega-mHC, alongside async Engram prefetching capabilities. Noteworthy merged PRs include bug fixes for better ROCm support, enhancements in heterogeneous vocabulary speculative decoding, and improvements to performance through the removal of CPU-GPU synchronization. Additionally, a critical new issue was raised regarding the v0.30 dependency that is said to elevate the effective compiler floor above GCC 11.3, potentially impacting user experiences.

#### 🚀 New Releases
- [v0.30.0](https://github.com/vllm-project/vllm/releases/tag/v0.30.0) v0.30.0

#### ✅ Merged PRs
- [#57887](https://github.com/vllm-project/vllm/pull/57887) [EPD] Support metadata-only audio inputs
- [#58212](https://github.com/vllm-project/vllm/pull/58212) [Bugfix] Skip VllmConfig re-validation for with_hf_config submodel views
- [#52052](https://github.com/vllm-project/vllm/pull/52052) [ROCm] Use silu_and_mul_with_clamp's torch._C op
- [#51915](https://github.com/vllm-project/vllm/pull/51915) [ROCm][Model][Bugfix] Enable GLM-5.2-MXFP4 on the deepseek_v32 path and fix sparse attention correctness
- [#58153](https://github.com/vllm-project/vllm/pull/58153) [Bugfix][ROCm] Use the platform FP8 range in the concat MLA q test
- [#58006](https://github.com/vllm-project/vllm/pull/58006) [ROCm][Build][The Rock] Bump Triton version to 3.8.x tip-of-tree with source build in The Rock image
- [#57396](https://github.com/vllm-project/vllm/pull/57396) [Perf] Remove CPU-GPU sync in heterogeneous vocabulary speculative decoding
- [#58193](https://github.com/vllm-project/vllm/pull/58193) [CI] Shard (H200 MIG 18GB) Spec Decode Draft Model across whole-directory replicas
- [#57113](https://github.com/vllm-project/vllm/pull/57113) [CI] Split LM Eval TurboQuant KV Cache into per-config jobs
- [#58197](https://github.com/vllm-project/vllm/pull/58197) [Core] Disable JIT warmup in eager mode
- [#58189](https://github.com/vllm-project/vllm/pull/58189) [Bugfix] Backport Inductor custom-op pattern matching fix
- [#58204](https://github.com/vllm-project/vllm/pull/58204) [CI] Build the torch-nightly image on Ubuntu 24.04
- [#58001](https://github.com/vllm-project/vllm/pull/58001) [Kernel] Remove AllSpark INT8 W8A16 GEMM backend
- [#55442](https://github.com/vllm-project/vllm/pull/55442) [Bugfix][Model][Spec Decode] Defer disposable GLM MTP head
- [#57250](https://github.com/vllm-project/vllm/pull/57250) [Core] structured generation mode for DiffusionGemma model (Jev-like)
- [#58002](https://github.com/vllm-project/vllm/pull/58002) [Refactor] Remove dead code multiple places
- [#58149](https://github.com/vllm-project/vllm/pull/58149) [Bugfix][V1] Read ModelState max_model_len from model config
- [#58030](https://github.com/vllm-project/vllm/pull/58030) [ROCm][CI] Add GELU activation for AiterExperts in the modular-kernel coverage
- [#55146](https://github.com/vllm-project/vllm/pull/55146) [Bugfix][V1] Honor enable_jit_warmup for V2 kernel warmup
- [#57834](https://github.com/vllm-project/vllm/pull/57834) [MRV2] Release weight offloader on shutdown
- [#58179](https://github.com/vllm-project/vllm/pull/58179) [Bugfix] batch_invariant: keep non-AllReduce collectives enabled on NCCL >= 2.31
- [#57386](https://github.com/vllm-project/vllm/pull/57386) [Fast Start] Support data parallelism in the weight cache daemon
- [#43462](https://github.com/vllm-project/vllm/pull/43462) [Bugfix] hadacore_transform: respect inplace parameter to fix garbage outputs with QuIP transforms
- [#57435](https://github.com/vllm-project/vllm/pull/57435) [ROCm][DSv4.1][Perf] Fuse the inverse RoPE into the sparse decode reduce
- [#58136](https://github.com/vllm-project/vllm/pull/58136) [Bugfix][ROCm] Dispatch the QuantFP8 CUDA fallback on the class
- [#57914](https://github.com/vllm-project/vllm/pull/57914) [Bugfix][Engram] Fall back when /dev/shm is absent before sharing tables
- [#56579](https://github.com/vllm-project/vllm/pull/56579) [Bugfix][Attention] Avoid NaN in the Triton softcap for large attention logits
- [#58073](https://github.com/vllm-project/vllm/pull/58073) [Bugfix] prioritize architecture capability before DeepGEMM availability check
- [#58150](https://github.com/vllm-project/vllm/pull/58150) [Bugfix] Narrow AuxOutput KV restrictions to known PD connectors
- [#58166](https://github.com/vllm-project/vllm/pull/58166) [SpecDecode] Restore residual-logits comments in _resample_kernel
- [#55881](https://github.com/vllm-project/vllm/pull/55881) [Feat][XPU] VLLM_BATCH_INVARIANT support for Dense/MoE models
- [#56250](https://github.com/vllm-project/vllm/pull/56250) [Bugfix][Structured Output] Disallow MRV1 + PP>1 + async sched + structured output
- [#58061](https://github.com/vllm-project/vllm/pull/58061) [Bugfix][GLM-5.3-Flash] Run the dense MLP layers on the sequence-parallel shard
- [#57945](https://github.com/vllm-project/vllm/pull/57945) [Build] Fix CUDA 12 KV connector dependency selection
- [#47450](https://github.com/vllm-project/vllm/pull/47450) [Bugfix][Structured Outputs] Reject empty `structural_tag` at request validation
- [#58050](https://github.com/vllm-project/vllm/pull/58050) [XPU][CI]Remove model_runner_v2 test from Intel GPU CI
- [#55931](https://github.com/vllm-project/vllm/pull/55931) [BugFix][Core] Make the structured-output grammar poll non-blocking
- [#58109](https://github.com/vllm-project/vllm/pull/58109) [Rust Frontend] Construct model-owned vision processors through specs
- [#56547](https://github.com/vllm-project/vllm/pull/56547) [CPU] Add device-memory-utilization CLI alias
- [#55385](https://github.com/vllm-project/vllm/pull/55385) [perf] wire FA and FlashMLA for sm90 GLM5Next NoPE SparseMLA
- [#58097](https://github.com/vllm-project/vllm/pull/58097) [CI] Emit a kernel symbol map from the csrc build (opt-in, for test selection)
- [#57428](https://github.com/vllm-project/vllm/pull/57428) [Kernel][DSV4.1] Fuse MXFP8 wo_b GEMM with sequence-parallel reduce-scatter

#### 🐛 New Issues
- [#58060](https://github.com/vllm-project/vllm/issues/58060) [Performance][ROCm]: Narrower KV tiles speed up Triton embedding/reranking attention on RDNA3/RDNA4 `performance` `rocm` 💬4
- [#58105](https://github.com/vllm-project/vllm/issues/58105) [Bug]: Qwen streaming loses tool calls when text grammar permits ordinary-token delimiters `structured-output` `tool-calling` `qwen` 💬3
- [#58144](https://github.com/vllm-project/vllm/issues/58144) [Bug]: `--api-key` is bypassed by `/invocations`, unauthenticated inference on a server that requires a key `bug` 💬2
- [#58160](https://github.com/vllm-project/vllm/issues/58160) [Docs] Feedback for `/en/stable/serving/data_parallel_deployment/` load balancing with respect to vllm-router `documentation` 💬2
- [#58158](https://github.com/vllm-project/vllm/issues/58158) [Bug]: v0.30 dependencies raise the effective compiler floor above GCC 11.3 💬2
- [#58080](https://github.com/vllm-project/vllm/issues/58080) [Bug] MTP draft model does not inherit --hf-overrides (YaRN): length gate + dummy-0 drafts silently kill speculative acceptance beyond the draft's max_model_len `speculative-decoding` 💬2
- [#58211](https://github.com/vllm-project/vllm/issues/58211) [CI Failure]: (DGX) Spark GPQA Eval (GPT-OSS) test_gpqa_corectness `ci-failure` `gpt-oss` 💬1
- [#58214](https://github.com/vllm-project/vllm/issues/58214) [Bug][CPU][Spec Decode]: PR #56323 left 6 CPU Triton fallbacks patching module globals that are no longer read — spec decode broken on arm64 💬1
- [#58191](https://github.com/vllm-project/vllm/issues/58191) [Bug]: New watermarking feature (v0.30.0) allows per-request opt-out even when server enforces --watermark-config `bug` 💬1
- [#58192](https://github.com/vllm-project/vllm/issues/58192) [Bug]: --max-num-queued-reqs is checked before the render but only counted after it, so a burst renders requests it then refuses (503 after 4–9 s of multimodal preprocessing) `multi-modality` 💬1
- [#58155](https://github.com/vllm-project/vllm/issues/58155) [Bug]: vLLM does not ignore temperature, presence_penalty, and frequency_penalty for DeepSeek V4 series thinking mode, unlike the official DeepSeek API `bug` `tool-calling` `deepseek` `DSv4` 💬1
- [#58178](https://github.com/vllm-project/vllm/issues/58178) [Feature/Design]: UVA weight offload on quantized MoE — pin_memory() power-of-two rounding wastes ~35% host RAM, and MXFP4 process_weights_after_loading silently un-offloads layers via replace_parameter `quantization` 💬1
- [#58171](https://github.com/vllm-project/vllm/issues/58171) [Feature]: Add a built-in JSON logging formatter 💬1
- [#58170](https://github.com/vllm-project/vllm/issues/58170) [ROCm][Perf]: GLM-5.3-Flash should use AITER topk kernel during decode `feature request` `rocm` `glm` 💬1
- [#58147](https://github.com/vllm-project/vllm/issues/58147) [Bug]: Qwen3 parser turns tool-call markup the model quotes into real tool calls (names outside request.tools, and duplicates of offered ones) `tool-calling` 💬1
- [#58145](https://github.com/vllm-project/vllm/issues/58145) [Bug]: Mistral's "always adjust_request" grammar path rebuilds the tool parser and compiles regex over the full vocab on the main event loop, on every request — even tool_choice="none" `bug` `structured-output` `tool-calling` `mistral` 💬1
- [#58138](https://github.com/vllm-project/vllm/issues/58138) [Bug]: Cross-encoder `padding="max_length"` produces incorrect `token_type_ids` `bug` 💬1
- [#58134](https://github.com/vllm-project/vllm/issues/58134) [CI Failure]: (MI355) Core Operation Kernels Shard 1: kernels/test_concat_mla_q.py::test_concat_mla_q_fp8_nope_and_rope `rocm` `ci-failure` `quantization` 💬1
- [#58063](https://github.com/vllm-project/vllm/issues/58063) [Bug] NixlConnector on MNNVL/GB200: remote engine state is released only on new-engine handshake or shutdown, deadlocking P/D prefill replacement 💬1
- [#58228](https://github.com/vllm-project/vllm/issues/58228) [Bug]: finish_reason is "tool_calls" for a turn truncated at max_tokens, hiding the length stop from clients `tool-calling`
- [#58227](https://github.com/vllm-project/vllm/issues/58227) [Bug]: an unclosed <tool_call> opener written in prose holds the Qwen3 parser in tool state and swallows a later genuine tool call `tool-calling`
- [#58222](https://github.com/vllm-project/vllm/issues/58222) [Bug] NIXL lease reaper strands expired KV blocks behind a heartbeated head entry `kv-connector`
- [#58203](https://github.com/vllm-project/vllm/issues/58203) [Bug]: Qwen3.5/3.8 multimodal + native MTP crashes in profile_run — 'NoneType' object has no attribute 'size' `multi-modality`
- [#58135](https://github.com/vllm-project/vllm/issues/58135) [Bug]: `/score` Unicode truncation can exceed per-input token limits `bug`
- [#58127](https://github.com/vllm-project/vllm/issues/58127) [Bug]: Hunyuan A13B streaming leaks `</answer>` into `content` `bug` `tool-calling`
- [#58119](https://github.com/vllm-project/vllm/issues/58119) [Bug]: Partial cache events can reference unreported parent hashes `bug`
- [#58100](https://github.com/vllm-project/vllm/issues/58100) [Feature]: Record model_id in bench latency/throughput --output-json `feature request`
- [#58087](https://github.com/vllm-project/vllm/issues/58087) [Bug]: KVCR secondary-tier configuration fails to start after the backpressure factory change
- [#58077](https://github.com/vllm-project/vllm/issues/58077) [Feature]: Per-priority observability for --scheduling-policy priority

#### 🔒 Closed Issues
- [#46249](https://github.com/vllm-project/vllm/issues/46249) [Bug]: [Regression] Qwen3.6-27B tool calls fail on Responses API when MTP is enabled
- [#48197](https://github.com/vllm-project/vllm/issues/48197) [RFC]: StructuredOutputManager x Speculative Decoding Refactor
- [#42949](https://github.com/vllm-project/vllm/issues/42949) [Bug]: DeepSeek-V4-Flash for L20,RuntimeError: Worker failed with error 'AssertionError: auto_functionalized was not removed', please check the stack trace above for the root cause
- [#43189](https://github.com/vllm-project/vllm/issues/43189) [Usage]: DeepSeek-V4 startup takes ~8 min — guidance on reducing initialization time
- [#43364](https://github.com/vllm-project/vllm/issues/43364) [Bug]: [ROCm CI] HuggingFace dataset loading fails with "Feature type 'List' not found"
- [#43390](https://github.com/vllm-project/vllm/issues/43390) [Bug]: integer overflow in fused_add_rms_norm
- [#57532](https://github.com/vllm-project/vllm/issues/57532) [Bug]: GLM-5.3-Flash NVFP4 + MTP fails to load on main: NVFP4 weight_scale for 'parallel_lm_head' was never loaded (still NaN)
- [#43263](https://github.com/vllm-project/vllm/issues/43263) [Bug]: AttributeError in mla_attention.py L2094 (_compute_prefill_context) on long prefill with AWQ model — regression after PR #34695
- [#43315](https://github.com/vllm-project/vllm/issues/43315) [Bug]: b12x NSA+MTP speculative decoding hangs on PCIe TP=8 — NCCL topology-aware scheduling fix
- [#43412](https://github.com/vllm-project/vllm/issues/43412) [Bug]: When will the RTX Pro 6000 support the deepseek-v4-flash model? There are too many versions of the vLLM framework right now, and I’m wondering when a vLLM image specifically optimized for the Pro 6000 will be released.
- [#48826](https://github.com/vllm-project/vllm/issues/48826) [Feature]: Migration plan for ROCm 7.14 / TheRock production release (containers + wheels)
- [#45911](https://github.com/vllm-project/vllm/issues/45911) [Feature]: Multi tier kv offload: storage throttling and async lookup performance improvements
- [#43323](https://github.com/vllm-project/vllm/issues/43323) [Feature]: Performance Tiers: Apple-style hardware requirements for stable inference
- [#43347](https://github.com/vllm-project/vllm/issues/43347) [CI Failure]: Spec Decode Draft Mode and Spec Decode Draft Model Nightly B200 failing with low match ratio
- [#43353](https://github.com/vllm-project/vllm/issues/43353) [CI Failure]: Multiple Gemma4 tests fail due to insufficient permissions
- [#43370](https://github.com/vllm-project/vllm/issues/43370) prompt_tokens_details.cached_tokens always reports prompt_tokens - 1 in disaggregated prefill/decode mode
- [#43450](https://github.com/vllm-project/vllm/issues/43450) [Performance]: V1 sample_tokens p99 can include sampled-output readiness; moving the wait to get_output did not improve serving throughput in my setup
- [#57034](https://github.com/vllm-project/vllm/issues/57034) [Bug]: V2 model runner keeps stale ModelState.max_model_len after auto-fit -> AssertionError in DeepSeek-V4 sparse MLA (C128A) during CUDA graph capture
- [#50495](https://github.com/vllm-project/vllm/issues/50495) [Bug]: nvidia/NV-Embed-v2 fails to start: `_LazyConfigMapping` pickle error during engine-core subprocess spawn
- [#56578](https://github.com/vllm-project/vllm/issues/56578) [Bug]: Triton attention softcap returns NaN for large attention logits
- [#45014](https://github.com/vllm-project/vllm/issues/45014) [Bug]: Structured outputs + pipeline parallelism on the V1 model runner: xgrammar FSM desync ("Failed to advance FSM")

### SGLang (`sgl-project/sglang`)

**Stars:** 36,333 · **Open issues:** 5,337 · **Last push:** <1h ago

On September 23, 2026, there were no new releases for SGLang, but several important pull requests were merged. Notable updates include the removal of deprecated endpoints and environment variables in PR #40795, improvements to the FP4 indexer in PR #40431, and various fixes related to memory caching and the MXFP4 layer. Several bugs were reported, including a critical issue in version 0.5.19 where the tokenizer hangs and another where users experience severe accuracy regressions with MegaMoE in Kimi-K3. These developments indicate ongoing maintenance and improvements in both functionality and performance of the SGLang framework.

#### ✅ Merged PRs
- [#40795](https://github.com/sgl-project/sglang/pull/40795) [misc] Remove deprecated endpoints, env vars and aliases past two releases
- [#40791](https://github.com/sgl-project/sglang/pull/40791) ci: stop Runner Utilization Report from draining the shared API quota
- [#37704](https://github.com/sgl-project/sglang/pull/37704) [sglang-miles] Kimi K3 colocated RL: LoRA fixes and in-place MXFP4 Marlin reload
- [#40431](https://github.com/sgl-project/sglang/pull/40431) [dsv4.1]Optimize FP4 indexer by skipping invisible tiles
- [#40787](https://github.com/sgl-project/sglang/pull/40787) [HiCache] Remove the unused HiRadixCache
- [#40672](https://github.com/sgl-project/sglang/pull/40672) [Fix] Decide the MoE padded-row bound from the layer scatter mode
- [#40780](https://github.com/sgl-project/sglang/pull/40780) [mem_cache] Clean up SWA/Mamba radix cache leftovers and drop SGLANG_ENABLE_UNIFIED_RADIX_TREE
- [#39632](https://github.com/sgl-project/sglang/pull/39632) fix(function_call): buffer complete DeepSeek DSML invokes
- [#40357](https://github.com/sgl-project/sglang/pull/40357) [MM] Keep scheduler padding in packed token arrays
- [#39779](https://github.com/sgl-project/sglang/pull/39779) [AMD] [GLM-5.3-Flash Day 0] Load the MXFP4 MTP draft layer
- [#40644](https://github.com/sgl-project/sglang/pull/40644) fix(grpc): expose native response timeout as a server argument
- [#40775](https://github.com/sgl-project/sglang/pull/40775) [mem_cache] Remove the experimental C++ radix tree
- [#40770](https://github.com/sgl-project/sglang/pull/40770) Add GB200/GB300 hardware to Qwen3.5
- [#40655](https://github.com/sgl-project/sglang/pull/40655) docs: sync LMSYS SGLang blog cards
- [#40114](https://github.com/sgl-project/sglang/pull/40114) [Docs] Fix benchmark table column overflow in cookbook deployment panel
- [#39341](https://github.com/sgl-project/sglang/pull/39341) [AMD] [GLM-5.3-Flash Day 0] Enable the k-pool DSA indexer on gfx950
- [#39778](https://github.com/sgl-project/sglang/pull/39778) [AMD] [GLM-5.3-Flash Day 0] Enable speculative decoding (MTP) on ROCm
- [#38547](https://github.com/sgl-project/sglang/pull/38547) [AMD] [GLM-5.3-Flash Day 0] Enable zero-RoPE TileLang DSA on gfx950
- [#40637](https://github.com/sgl-project/sglang/pull/40637) [Fix] Handle chunked paged MQA metadata in DSV4.1 eager forwards
- [#39901](https://github.com/sgl-project/sglang/pull/39901) [AMD] Reuse KV gather indices across ASM context prefill layers
- [#40686](https://github.com/sgl-project/sglang/pull/40686) [Router] Keep e2e workers inside the job's CUDA_VISIBLE_DEVICES allotment
- [#40725](https://github.com/sgl-project/sglang/pull/40725) Fix the Inkling per-expert sync test and collect it in the weekly CPU run
- [#40680](https://github.com/sgl-project/sglang/pull/40680) [HiCache] Demote internal-node mamba states on write_back eviction
- [#40707](https://github.com/sgl-project/sglang/pull/40707) Take the model config out of the parallel group build, and finish retiring the parallel getters
- [#40260](https://github.com/sgl-project/sglang/pull/40260) [Feature] Support --tokenizer-worker-num > 1 in the offline Engine API
- [#40747](https://github.com/sgl-project/sglang/pull/40747) [rust-renderer] decouple renderer sampling from protocols
- [#40639](https://github.com/sgl-project/sglang/pull/40639) [ci] publish renderer image
- [#40636](https://github.com/sgl-project/sglang/pull/40636) [ci] run cpu ci for renderer-only changes
- [#40501](https://github.com/sgl-project/sglang/pull/40501) [Qwen3.8-Next] Pipeline-parallel serving and PD-prefill MTP for Qwen4-Exp
- [#40647](https://github.com/sgl-project/sglang/pull/40647) [DOC] Update quickstart guide to use `sglang serve` for launching the server
- [#40352](https://github.com/sgl-project/sglang/pull/40352) [DSv4.1] Score prefill consumer index layers on candidate blocks with DeepGEMM
- [#40593](https://github.com/sgl-project/sglang/pull/40593) [Diffusion] Correct the resident-layer help text to match its scope
- [#40133](https://github.com/sgl-project/sglang/pull/40133) [NPU][CI] Constrain evalscope dependency versions
- [#40309](https://github.com/sgl-project/sglang/pull/40309) [Fix] Missing SWA eviction during decode preallocation
- [#38468](https://github.com/sgl-project/sglang/pull/38468) [kv-shard 3/4] Enable Control plane
- [#40592](https://github.com/sgl-project/sglang/pull/40592) [diffusion] feat: allow a component use retain its layerwise resident set
- [#40711](https://github.com/sgl-project/sglang/pull/40711) [PD] Simplify late-abort quiescent ack branch to else
- [#40714](https://github.com/sgl-project/sglang/pull/40714) [NPU] [DOC] Remove duplicated features in npu docs
- [#40645](https://github.com/sgl-project/sglang/pull/40645) [PD] Preserve abort ACKs until in-flight KV transfers drain
- [#40175](https://github.com/sgl-project/sglang/pull/40175) [diffusion] attention: add fp8_fa_sm120 FP8 backend for SM120 GPUs
- [#40557](https://github.com/sgl-project/sglang/pull/40557) [AMD] Drop the redundant scale zero-fill before AITER per-tensor FP8 quant
- [#40123](https://github.com/sgl-project/sglang/pull/40123) [AMD] Register unified KV page-zeroing test in PR CI
- [#40641](https://github.com/sgl-project/sglang/pull/40641) [AMD][DI] Keep loopback in UCX_NET_DEVICES
- [#35872](https://github.com/sgl-project/sglang/pull/35872) [AMD] Skip full-vocab softmax in EAGLE topk==1 draft on ROCm
- [#39503](https://github.com/sgl-project/sglang/pull/39503) [AMD] Use exact CU share for gfx950 segment-plan headroom
- [#40111](https://github.com/sgl-project/sglang/pull/40111) avoid host sync in DSpark prefill slot expansion
- [#39525](https://github.com/sgl-project/sglang/pull/39525) [AMD] Fix deferred Kimi-K3 forget gate in fused in-projection
- [#39902](https://github.com/sgl-project/sglang/pull/39902) [AMD] Pack Qwen3.5 GDN input projections on ROCm
- [#39973](https://github.com/sgl-project/sglang/pull/39973) [PD] Validate Mooncake EFA allocator compatibility
- [#39312](https://github.com/sgl-project/sglang/pull/39312) [observability] Fix negative queue_time for retracted requests
- [#39066](https://github.com/sgl-project/sglang/pull/39066) [AMD][Kimi-K3] Fix deferred KDA gate projection and update DCP cookbook
- [#40685](https://github.com/sgl-project/sglang/pull/40685) [KDA] Fix missing beta sigmoid in PTX prefill
- [#40658](https://github.com/sgl-project/sglang/pull/40658) [DSpark] Fix draft CUDA graph stream explosion
- [#40684](https://github.com/sgl-project/sglang/pull/40684) [router] Decode tagged-map KV events alongside legacy tagged arrays
- [#40497](https://github.com/sgl-project/sglang/pull/40497) [Docs] GLM-5.3/5.3-Flash cookbooks: enable reasoning/tool-call parsers by default via auto
- [#31446](https://github.com/sgl-project/sglang/pull/31446) [HiSparse] Add MHA hisparse support for MiniMax M3

#### 🐛 New Issues
- [#40789](https://github.com/sgl-project/sglang/issues/40789) [Bug] /v1/responses: accepted `xhigh` reasoning effort aborts the stream inside ResponseCreatedEvent
- [#40809](https://github.com/sgl-project/sglang/issues/40809) [Bug] v0.5.19 tokenizer hang
- [#40808](https://github.com/sgl-project/sglang/issues/40808) [Bug] v0.5.19 can't decode image
- [#40797](https://github.com/sgl-project/sglang/issues/40797) [Bug] Sglang 0.5.17 crashing with the following stack trace
- [#40751](https://github.com/sgl-project/sglang/issues/40751) [Bug] Kimi-K3 EP32: severe repetition and accuracy regression with MegaMoE, not observed with DeepEP
- [#40744](https://github.com/sgl-project/sglang/issues/40744) [Bug] DSV v4.1 Flash 2x4 H200 TP8/EP8 + DSPARK causes startup deadlock after DSpark draft weight load on dev-cu13-dsv41 and latest dev-cu13 image
- [#40739](https://github.com/sgl-project/sglang/issues/40739) [Bug] `qwen3_coder` non-streaming parser drops visible text after a valid tool call
- [#40735](https://github.com/sgl-project/sglang/issues/40735) [Bug] MiniMax-M3 incorrectly routes Ascend FuseEP through the normal MoE path
- [#40730](https://github.com/sgl-project/sglang/issues/40730) [Bug] PD retract rebootstrap is not pinned to the bound prefill DP rank unless the client supplied disagg_prefill_dp_rank
- [#40729](https://github.com/sgl-project/sglang/issues/40729) [Bug] PD decode scheduler crashes with NotImplementedError when retracting a request under --enable-hisparse
- [#40728](https://github.com/sgl-project/sglang/issues/40728) [Bug] `input_embeds` requests through `/open_session` crash the scheduler
- [#40723](https://github.com/sgl-project/sglang/issues/40723) [Bug] Leaked sgl_shm_mm_* segments fill /dev/shm -> permanent crashloop (load snapshot SIGBUS / NCCL ENOSPC) after a scheduler crash
- [#40706](https://github.com/sgl-project/sglang/issues/40706) [Feature] Add FP8 SSM state pool (`--mamba-ssm-dtype float8`) for GDN hybrid models

#### 🔒 Closed Issues
- [#29465](https://github.com/sgl-project/sglang/issues/29465) Fully migrate IPC to msgpack: eliminate remaining PickleWrapper workarounds and flip default
- [#29272](https://github.com/sgl-project/sglang/issues/29272) [Bug] --load-format fastsafetensors crashes on multi-node TP — uses global rank instead of local rank as CUDA device index, and lacks GDS fallback
- [#29960](https://github.com/sgl-project/sglang/issues/29960) [Bug] [Perf] Long non-overlapped cudaGraphLaunch in GLM-5.1 MTP target verify; propose pipelined two-graph decode replay
- [#30432](https://github.com/sgl-project/sglang/issues/30432) [Refactor] Confusing name: `global_num_tokens` collapses to `[local_num_tokens]` in pure DP+EP layout
- [#32291](https://github.com/sgl-project/sglang/issues/32291) [Feature] cp layer split only support layer first , but mooncacke can not support layer first
- [#31103](https://github.com/sgl-project/sglang/issues/31103) [Bug] qwen3.6-35b-a3b-fp8 still error with sglang 0.5.15
- [#26794](https://github.com/sgl-project/sglang/issues/26794) [Bug] update_weights_from_disk crashes for FusedMoE DeepseekV3.2 with 'narrow exceeds dim_size' (initial load OK)
- [#32335](https://github.com/sgl-project/sglang/issues/32335) [RFC]: Native Heterogeneous Weight Conversion in SGLang
- [#32200](https://github.com/sgl-project/sglang/issues/32200) [Feature] NCCL SYMM: Add one-sided RMA support
- [#32328](https://github.com/sgl-project/sglang/issues/32328) [Feature] NCCL EP — Add NCCL EP as an optional MoE dispatch/combine backend
- [#32312](https://github.com/sgl-project/sglang/issues/32312) [Feature] [Kernel] cursor warp decode kernel for low latency small batch MOE inference
- [#32311](https://github.com/sgl-project/sglang/issues/32311) [Bug] deepseek v4 flash hang on 4rtx 6000 pro with limited host ram
- [#32309](https://github.com/sgl-project/sglang/issues/32309) [Feature] --enable-dsa-cache-layer-split support single deploy
- [#32290](https://github.com/sgl-project/sglang/issues/32290) [Bug] OpenAI top_logprobs: entries silently collapse when top-k candidates decode to identical text (dict keyed by decoded string)
- [#32276](https://github.com/sgl-project/sglang/issues/32276) [Bug] MiniMax-M3: `thinking: {"type":"disabled"}` is silently ignored, model keeps reasoning
- [#32271](https://github.com/sgl-project/sglang/issues/32271) [RFC][Feature] Topology-transparent multi-NIC HTTP ingress with a single logical scheduling queue
- [#38785](https://github.com/sgl-project/sglang/issues/38785) pp scheduler in prefill node
- [#34192](https://github.com/sgl-project/sglang/issues/34192) [Bug] Llama4 NVFP4 MoE crashes on SM120/SM121: apply_router_weight_on_input is not supported for Flashinfer

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 129,229 · **Open issues:** 2,528 · **Last push:** 2h ago

On September 23, 2026, llama.cpp released several updates, including version b11115, which added a new OpenCL binary kernel for enhanced performance (`kernel_gemm_noshuffle_q4_k_q8_1_dp4a_ila_a8_bin`). Version b11114 addressed router eviction race conditions in the server's queue system, ensuring smoother model loading processes. Notable merged changes included optimizations for Intel Xe flash attention kernels in Vulkan and various sanity checks in the mtmd module. The day also saw the emergence of several new issues, particularly a performance regression related to CUDA sparse flash attention, identified as #29281, which revealed that decoding has become 1.6 times slower compared to earlier releases.

#### 🚀 New Releases
- [b11115](https://github.com/ggml-org/llama.cpp/releases/tag/b11115) b11115
- [b11114](https://github.com/ggml-org/llama.cpp/releases/tag/b11114) b11114
- [b11113](https://github.com/ggml-org/llama.cpp/releases/tag/b11113) b11113
- [b11112](https://github.com/ggml-org/llama.cpp/releases/tag/b11112) b11112
- [b11111](https://github.com/ggml-org/llama.cpp/releases/tag/b11111) b11111
- [b11110](https://github.com/ggml-org/llama.cpp/releases/tag/b11110) b11110
- [b11109](https://github.com/ggml-org/llama.cpp/releases/tag/b11109) b11109
- [b11108](https://github.com/ggml-org/llama.cpp/releases/tag/b11108) b11108
- [b11105](https://github.com/ggml-org/llama.cpp/releases/tag/b11105) b11105
- [b11104](https://github.com/ggml-org/llama.cpp/releases/tag/b11104) b11104

#### ✅ Merged PRs
- [#29282](https://github.com/ggml-org/llama.cpp/pull/29282) hex-dma: introduce direct-mapped DMA cache that is better suited for HVX FA mask handling
- [#27962](https://github.com/ggml-org/llama.cpp/pull/27962) HIP : optimize IQ2/IQ3 (`__vsub4` `__vcmpne4`) using SWAR
- [#29279](https://github.com/ggml-org/llama.cpp/pull/29279) jinja : fix dangling reference warning in for_statement
- [#29056](https://github.com/ggml-org/llama.cpp/pull/29056) opencl: add bin kernel `kernel_gemm_noshuffle_q4_k_q8_1_dp4a_ila_a8_bin`
- [#29217](https://github.com/ggml-org/llama.cpp/pull/29217) server: fix router eviction races with the existing queue
- [#29212](https://github.com/ggml-org/llama.cpp/pull/29212) server: do not pass log file to children
- [#22575](https://github.com/ggml-org/llama.cpp/pull/22575) server: support input_image in function_call_output (#20663)
- [#24406](https://github.com/ggml-org/llama.cpp/pull/24406) vulkan: add Intel Xe flash attention optimization kernels (2/3, Xe-LPG Plus/Xe2/Xe3)
- [#29276](https://github.com/ggml-org/llama.cpp/pull/29276) mtmd: add various sanity checks
- [#29271](https://github.com/ggml-org/llama.cpp/pull/29271) jinja: use const for statement::execute and ::visit
- [#29029](https://github.com/ggml-org/llama.cpp/pull/29029) metal : gate mul_mm_id src1 rescale behind ggml_prec
- [#28706](https://github.com/ggml-org/llama.cpp/pull/28706) ggml-quant: Quant creation speed, IQ1_M build prefix sums once per block
- [#28450](https://github.com/ggml-org/llama.cpp/pull/28450) Performance tune for gemma4-26b-a4b flash attention shape.
- [#28622](https://github.com/ggml-org/llama.cpp/pull/28622) ui : Accept WEBM video files
- [#28690](https://github.com/ggml-org/llama.cpp/pull/28690) server: Add support for binding to multiple addresses
- [#29242](https://github.com/ggml-org/llama.cpp/pull/29242) chat : Fix Muse Glimmer tool-call first parser error
- [#28890](https://github.com/ggml-org/llama.cpp/pull/28890) spec : support DFlash for HunyuanOCR
- [#29257](https://github.com/ggml-org/llama.cpp/pull/29257) convert: add MiMo-V2.6 support
- [#29228](https://github.com/ggml-org/llama.cpp/pull/29228) cmake : allow repeated find_package calls for llama
- [#29007](https://github.com/ggml-org/llama.cpp/pull/29007) ci: publish snapdragon builds in release workflow
- [#28246](https://github.com/ggml-org/llama.cpp/pull/28246) ui: add close button to UI toasts
- [#29055](https://github.com/ggml-org/llama.cpp/pull/29055) opencl: add bin kernel `kernel_gemm_noshuffle_q4_0_q8_1_dp4a_ila_a8_bin`
- [#29230](https://github.com/ggml-org/llama.cpp/pull/29230) ci : update Level Zero SDK to v1.33.1 and enable the L0/oneDNN CMake flags in the SYCL job

#### 🐛 New Issues
- [#29288](https://github.com/ggml-org/llama.cpp/issues/29288) Misc. bug: Openvino cannot run gemma on intel core 7 155h `bug-unconfirmed` 💬3
- [#29262](https://github.com/ggml-org/llama.cpp/issues/29262) Feature Request: Add a think level directly in the UX like Hermes Agent `enhancement` 💬1
- [#29289](https://github.com/ggml-org/llama.cpp/issues/29289) Feature Request: Independent `bash-completion` for each executable `enhancement`
- [#29284](https://github.com/ggml-org/llama.cpp/issues/29284) VIRUS? `bug-unconfirmed`
- [#29281](https://github.com/ggml-org/llama.cpp/issues/29281) Misc. bug: Performance regression: CUDA sparse flash attention decode 1.6x slower (b11047 -> b11062)
- [#29277](https://github.com/ggml-org/llama.cpp/issues/29277) Misc. bug: Vulkan: ggml_backend_vk_get_device_memory reports free > total when the driver's heapBudget exceeds heap size (Intel iGPU, Windows); downstream consumers underflow
- [#29270](https://github.com/ggml-org/llama.cpp/issues/29270) Eval bug: ggml_vulkan: vk::Device::allocateMemory: ErrorOutOfDeviceMemory `bug-unconfirmed`
- [#29260](https://github.com/ggml-org/llama.cpp/issues/29260) Eval bug: ROCm error: an illegal memory access was encountered 0.4.1 `bug-unconfirmed`
- [#29264](https://github.com/ggml-org/llama.cpp/issues/29264) Feature Request: Add /think command to control reasoning and hide <think> tags `enhancement`
- [#29261](https://github.com/ggml-org/llama.cpp/issues/29261) Eval bug: Abort when loading any model on spacemit k3 : "thread_n x exceeds perfer_core_ids size 8" `bug-unconfirmed`
- [#29259](https://github.com/ggml-org/llama.cpp/issues/29259) Eval bug: Nemotron-3-Nano-30B-A3B fails to load only in server mode. `bug-unconfirmed`

#### 🔒 Closed Issues
- [#26129](https://github.com/ggml-org/llama.cpp/issues/26129) Feature Request: server: expose per-device memory usage (weights / context / compute)
- [#26685](https://github.com/ggml-org/llama.cpp/issues/26685) Eval bug: DeepSeek V4 garbled output with RPC Vulkan.
- [#29091](https://github.com/ggml-org/llama.cpp/issues/29091) Misc. bug: [llama-server] /v1/models metadata serializes "vocab_type" as boolean true instead of integer enum
- [#24902](https://github.com/ggml-org/llama.cpp/issues/24902) Feature Request: pre-select models in the webui using alias
- [#27796](https://github.com/ggml-org/llama.cpp/issues/27796) ggml-hip: quantized KV cache decodes slower than f16 on RDNA4 (gfx1201), worse the more unpacking the type needs
- [#29240](https://github.com/ggml-org/llama.cpp/issues/29240) Eval bug: Muse Glimmer unparsed peg-negative output
- [#26752](https://github.com/ggml-org/llama.cpp/issues/26752) Feature Request: Improve SYCL Host-to-Device Memory Access
- [#26777](https://github.com/ggml-org/llama.cpp/issues/26777) Eval bug: DSV4 state_read() clears the compressed KV cache of all sequences, silently desyncing other slots
- [#26817](https://github.com/ggml-org/llama.cpp/issues/26817) Eval bug: temp-0 tool-calling is nondeterministic for hybrid Qwen3.6-A3B on Vulkan — flips with prompt-cache mode and across restarts
- [#26782](https://github.com/ggml-org/llama.cpp/issues/26782) Eval bug: Running gemma 4 12b with draft-mtp causes memory access fault
- [#28076](https://github.com/ggml-org/llama.cpp/issues/28076) Misc. bug: Web UI silently drops .webm video file attachments
- [#28698](https://github.com/ggml-org/llama.cpp/issues/28698) Eval bug: tick() evicts models which are being requested -> requests fail due to http client error
- [#29260](https://github.com/ggml-org/llama.cpp/issues/29260) Eval bug: ROCm error: an illegal memory access was encountered 0.4.1

### Ollama (`ollama/ollama`)

**Stars:** 181,492 · **Open issues:** 4,058 · **Last push:** <1h ago

On September 23, 2026, the Ollama ecosystem saw significant development with the merging of several important pull requests, including optimizations in prompt processing for Qwen 3.8 and dynamic image resolution selection for Gemma 4. Notable updates also included a version bump for mlx and llama.cpp, alongside fixes to intermittent "model not found" errors and improvements to structured outputs for thinking models. However, the day was also marked by the emergence of several new issues, the most pressing of which involves the macOS app 0.34 where the user interface hangs due to ChatGPT/Codex detection running osascript on the main thread. Overall, there were no releases today, indicating a focus on refining existing features and addressing emerging concerns within the community.

#### ✅ Merged PRs
- [#18550](https://github.com/ollama/ollama/pull/18550) mlx: speed up Qwen 3.8 prompt processing
- [#18603](https://github.com/ollama/ollama/pull/18603) mlx: select Gemma 4 image resolution dynamically
- [#18576](https://github.com/ollama/ollama/pull/18576) MLX: version bump
- [#18577](https://github.com/ollama/ollama/pull/18577) llama.cpp: version update
- [#18601](https://github.com/ollama/ollama/pull/18601) app: avoid System Events for ChatGPT/Codex detection
- [#18479](https://github.com/ollama/ollama/pull/18479) server: apply structured outputs in a single pass on thinking models
- [#18438](https://github.com/ollama/ollama/pull/18438) server: fix intermittent "model not found" errors.

#### 🐛 New Issues
- [#18593](https://github.com/ollama/ollama/issues/18593) macOS app 0.34: UI hangs because ChatGPT/Codex detection runs osascript on the main thread 💬4
- [#18597](https://github.com/ollama/ollama/issues/18597) homebrew installed ollama cannot provide structured output when running mlx model `bug` 💬3
- [#18595](https://github.com/ollama/ollama/issues/18595) macOS 0.33.0: no garbage collection for orphaned blobs — found a live 21GB orphan via manifest audit `bug` 💬1
- [#18590](https://github.com/ollama/ollama/issues/18590) top_logprobs is capped at 20, but nothing downstream requires that 💬1
- [#18579](https://github.com/ollama/ollama/issues/18579) Cannot get the log probability of a specific token unless it ranks in top_logprobs 💬1
- [#18581](https://github.com/ollama/ollama/issues/18581) Windows CUDA discovery fails (0 B VRAM / CPU fallback) on NVIDIA RTX 50-Series (Blackwell) with Driver 616.92 `bug`
- [#18594](https://github.com/ollama/ollama/issues/18594) System 1 Models
- [#18584](https://github.com/ollama/ollama/issues/18584) The current .sh file to install Ollama fails repeatedly with bad Internet connection, use this script `bug`

#### 🔒 Closed Issues
- [#15626](https://github.com/ollama/ollama/issues/15626) Expose `max_soft_tokens` (image token budget) as a runtime parameter for Gemma 4 models
- [#10929](https://github.com/ollama/ollama/issues/10929) Ollama produces invalid JSON when using thinking mode with structured output
- [#18593](https://github.com/ollama/ollama/issues/18593) macOS app 0.34: UI hangs because ChatGPT/Codex detection runs osascript on the main thread
- [#17152](https://github.com/ollama/ollama/issues/17152) [Bug] Ollama hardcodes Gemma 4 image token budget (max_soft_tokens=280), breaking OCR on high-resolution images
- [#14196](https://github.com/ollama/ollama/issues/14196) Delayed Constrained Decoding for Thinking with JSON/Structured Outputs
- [#17544](https://github.com/ollama/ollama/issues/17544) /api/generate silently ignores think when format is set; /api/chat does not
- [#18590](https://github.com/ollama/ollama/issues/18590) top_logprobs is capped at 20, but nothing downstream requires that
- [#18579](https://github.com/ollama/ollama/issues/18579) Cannot get the log probability of a specific token unless it ranks in top_logprobs
- [#18447](https://github.com/ollama/ollama/issues/18447) Intermittent "model xxx not found" errors

### LiteLLM (`BerriAI/litellm`)

**Stars:** 59,424 · **Open issues:** 5,142 · **Last push:** <1h ago

On September 23, 2026, LiteLLM released version v1.102.0, incorporating an important update that all Docker images are now signed with cosign for enhanced security verification. Key merged features include the addition of a native LiteAdmin assistant and improvements to the auto-router setup for user interfaces. Notable fixes addressed issues with AWS environment variables in batch jobs, as well as ensuring that duplicate cache keys are removed from price maps. A significant new issue has emerged regarding the MCP OAuth2 token exchange failing to recognize valid tokens, which has been flagged for urgent attention.

#### 🚀 New Releases
- [v1.102.0](https://github.com/BerriAI/litellm/releases/tag/v1.102.0) v1.102.0

#### ✅ Merged PRs
- [#42563](https://github.com/BerriAI/litellm/pull/42563) fix(mcp): preserve credential authority in DCR bridge authentication
- [#42443](https://github.com/BerriAI/litellm/pull/42443) feat(ui): add native LiteAdmin assistant
- [#42625](https://github.com/BerriAI/litellm/pull/42625) feat(ui): simplify auto-router setup and clarify feature limits
- [#42503](https://github.com/BerriAI/litellm/pull/42503) test(e2e): add secret manager lanes for HashiCorp Vault and CyberArk Conjur
- [#42535](https://github.com/BerriAI/litellm/pull/42535) fix(utils): isolate callback errors in async_post_call_success_deployment_hook
- [#42593](https://github.com/BerriAI/litellm/pull/42593) fix(proxy): keep the in-flight daily spend batch when shutdown cancels the flush
- [#42603](https://github.com/BerriAI/litellm/pull/42603) ci(test-unit): drop dead misc shard paths and skip missing paths with a warning
- [#42528](https://github.com/BerriAI/litellm/pull/42528) fix(bedrock): treat blank AWS_S3_* env vars as unset for batch jobs
- [#42624](https://github.com/BerriAI/litellm/pull/42624) test(realtime): drop legacy InvalidStatusCode tests and pin websockets imports
- [#40452](https://github.com/BerriAI/litellm/pull/40452) fix(s3): replace colons in generated log filenames
- [#42623](https://github.com/BerriAI/litellm/pull/42623) fix: drop duplicate cache_read_input_token_cost_batches keys from the price maps
- [#42617](https://github.com/BerriAI/litellm/pull/42617) test: point CircleCI-only suites at models still in the cost map
- [#42602](https://github.com/BerriAI/litellm/pull/42602) fix: answer get_api_base for github_copilot and chatgpt without running the login flow
- [#41979](https://github.com/BerriAI/litellm/pull/41979) fix(ollama): send PNG and JPEG images without requiring Pillow.
- [#42612](https://github.com/BerriAI/litellm/pull/42612) test(utils): accept the per-size image cost keys in the price-map schema check
- [#42615](https://github.com/BerriAI/litellm/pull/42615) test(cost_calculator): point image-generation deployment price test at a live gemini row
- [#41687](https://github.com/BerriAI/litellm/pull/41687) fix(ui): let the Create Key user picker find users by user_id, not just email
- [#42605](https://github.com/BerriAI/litellm/pull/42605) feat(rust): add immutable model catalog crate
- [#42606](https://github.com/BerriAI/litellm/pull/42606) test(bedrock): point unit tests at model ids still in the cost map
- [#41715](https://github.com/BerriAI/litellm/pull/41715) feat(logging): add normalized_error cluster key to error_information
- [#42604](https://github.com/BerriAI/litellm/pull/42604) feat(rust): add standalone cost calculator
- [#42420](https://github.com/BerriAI/litellm/pull/42420) fix(anthropic): return 400 instead of 500 when a content list holds a bare string
- [#42497](https://github.com/BerriAI/litellm/pull/42497) fix(spend): return 400 from /spend/calculate for a model with no pricing row
- [#42431](https://github.com/BerriAI/litellm/pull/42431) fix(otel): record the GenAI exception event through the Logs API on both OpenTelemetry lines
- [#42591](https://github.com/BerriAI/litellm/pull/42591) chore(prices): sync xAI prices: 3 models, 3 new [3 with gaps]
- [#42571](https://github.com/BerriAI/litellm/pull/42571) fix(caching): keep embedding cache hits aligned with request inputs
- [#42518](https://github.com/BerriAI/litellm/pull/42518) test(e2e): run the memory cell alone on the shared stack
- [#42570](https://github.com/BerriAI/litellm/pull/42570) test: count a zombie grandchild as gone in the migrate deploy timeout test
- [#42581](https://github.com/BerriAI/litellm/pull/42581) test(proxy): make two proxy-infra tests independent of sibling-test state
- [#42553](https://github.com/BerriAI/litellm/pull/42553) feat(proxy): configurable key_alias_pattern for key generate, update, and regenerate
- [#42599](https://github.com/BerriAI/litellm/pull/42599) feat(cost-map): add Claude Opus 5.5 for Vertex AI and Azure AI
- [#42552](https://github.com/BerriAI/litellm/pull/42552) test(e2e): hold every worker under an idle RSS budget before any traffic
- [#42588](https://github.com/BerriAI/litellm/pull/42588) feat(bedrock): add Claude Opus 5.5 pricing and capabilities
- [#42531](https://github.com/BerriAI/litellm/pull/42531) fix(anthropic): backport #42152 and #42288 to stable/1.99.x for v1.99.2
- [#42532](https://github.com/BerriAI/litellm/pull/42532) fix(anthropic): backport #42152 and #42288 to stable/1.100.x for v1.100.2
- [#42533](https://github.com/BerriAI/litellm/pull/42533) fix(anthropic): backport #42152 and #42288 to stable/1.101.x for v1.101.1
- [#42538](https://github.com/BerriAI/litellm/pull/42538) fix(anthropic): backport #42152 and #42288 to stable/1.102.x for v1.102.1
- [#42584](https://github.com/BerriAI/litellm/pull/42584) fix(proxy_cli): import proxy_server once on script-style boot
- [#42541](https://github.com/BerriAI/litellm/pull/42541) fix(mcp): preserve discovery attribution and sanitize logging headers
- [#42537](https://github.com/BerriAI/litellm/pull/42537) fix(otel): keep text completion choice fields beside the synthesized message
- [#42542](https://github.com/BerriAI/litellm/pull/42542) test(vcr): guard leaked cassette patches and make injected-transport embedding tests immune
- [#42435](https://github.com/BerriAI/litellm/pull/42435) chore(cost-map): remove models past their deprecation date
- [#41077](https://github.com/BerriAI/litellm/pull/41077) fix(proxy): attribute provider and model_info on pre_call_hook rejections
- [#42577](https://github.com/BerriAI/litellm/pull/42577) chore(prices): sync Vertex AI prices: 20 models
- [#42556](https://github.com/BerriAI/litellm/pull/42556) fix(proxy): honor DATABASE_DISABLE_PREPARED_STATEMENTS in the litellm CLI
- [#42572](https://github.com/BerriAI/litellm/pull/42572) fix(gateway): expose /api/event_logging/batch on the gateway allowlist
- [#42543](https://github.com/BerriAI/litellm/pull/42543) fix(model_prices): registry audit 2026-09-22, absorb open pricing PRs
- [#42508](https://github.com/BerriAI/litellm/pull/42508) fix(ssrf): point the blocked-address remediation at litellm_settings
- [#42557](https://github.com/BerriAI/litellm/pull/42557) chore(prices): sync OpenAI prices: 3 models
- [#42106](https://github.com/BerriAI/litellm/pull/42106) fix(otel): honor SSL_CERT_FILE and ssl_verify in OTLP HTTP exporters
- [#42578](https://github.com/BerriAI/litellm/pull/42578) chore(prices): sync Baseten prices: 4 models, 4 new [enrichment failed: Baseten, 3 held]
- [#41530](https://github.com/BerriAI/litellm/pull/41530) fix(mcp): apply post-call rewrites without stale structured output
- [#42540](https://github.com/BerriAI/litellm/pull/42540) test(e2e): one request lands the same spend on every surface
- [#41033](https://github.com/BerriAI/litellm/pull/41033) feat: add configurable provider affinity header mapping
- [#42516](https://github.com/BerriAI/litellm/pull/42516) fix(proxy): share model rate-limit buckets between a model_group_alias and its target
- [#42437](https://github.com/BerriAI/litellm/pull/42437) fix: enforce disable_custom_api_keys from general_settings
- [#42558](https://github.com/BerriAI/litellm/pull/42558) chore(prices): sync Baseten prices: 12 models, 9 new [enrichment failed: Baseten, 15 held]
- [#42370](https://github.com/BerriAI/litellm/pull/42370) fix(ui): rename reminder markers to Ignore Custom Tags
- [#42512](https://github.com/BerriAI/litellm/pull/42512) fix(fal_ai): honour global api_base for image generation and reject non-string reasoning_effort with 400
- [#42530](https://github.com/BerriAI/litellm/pull/42530) refactor(rust): align the cache crates with Python and wire every native backend
- [#42511](https://github.com/BerriAI/litellm/pull/42511) fix(fal_ai): reuse the status client and headers on the video result probe
- [#42505](https://github.com/BerriAI/litellm/pull/42505) fix(fal_ai): align /fal_ai queue gate with the pricer and normalise resolution type
- [#42378](https://github.com/BerriAI/litellm/pull/42378) feat(router): add group-scoped priority routing strategy
- [#42520](https://github.com/BerriAI/litellm/pull/42520) test(google_genai): move unified_google_tests to gemini-3.5-flash-lite
- [#42506](https://github.com/BerriAI/litellm/pull/42506) fix(e2e): route credential, cost map, and UI login calls to the control plane
- [#42491](https://github.com/BerriAI/litellm/pull/42491) feat(logs): add span type filter to request logs
- [#42327](https://github.com/BerriAI/litellm/pull/42327) feat(proxy): opt-in include_guardrail_response returns guardrail_information in the response
- [#42422](https://github.com/BerriAI/litellm/pull/42422) test(e2e): assert a cooldown reaches a sibling replica within the 1s Redis read interval
- [#42428](https://github.com/BerriAI/litellm/pull/42428) feat(errors): add stream and safe config flags to the bug report link
- [#41711](https://github.com/BerriAI/litellm/pull/41711) fix(websearch_interception): keep intercepted searches under the parent request's session and trace
- [#42536](https://github.com/BerriAI/litellm/pull/42536) test(rust_bridge): drop route dispatch assertions, test the bridge directly
- [#42519](https://github.com/BerriAI/litellm/pull/42519) fix(proxy): make the lazy OpenAPI snapshot byte-identical on every Python version
- [#42424](https://github.com/BerriAI/litellm/pull/42424) fix(langsmith): json.dumps with default=str so non-serializable metadata does not crash batch flush
- [#42510](https://github.com/BerriAI/litellm/pull/42510) feat(rust): add python-compat crate for Python data formats
- [#42454](https://github.com/BerriAI/litellm/pull/42454) fix(aws_secret_manager_v2): restore secret scheduled for deletion instead of failing CreateSecret
- [#42521](https://github.com/BerriAI/litellm/pull/42521) chore(pricing): remove retired models flagged by the provider sync
- [#42440](https://github.com/BerriAI/litellm/pull/42440) feat(proxy): admin-only /debug/report sharing the bug report environment
- [#42517](https://github.com/BerriAI/litellm/pull/42517) fix(rust_bridge): keep Messages, token counter and tokenizer routes on Python
- [#42504](https://github.com/BerriAI/litellm/pull/42504) fix(fal_ai): handle seconds=auto and oversized sizes for minimax h3 videos
- [#42446](https://github.com/BerriAI/litellm/pull/42446) fix(proxy): write key deleted audit logs for cascade and alias key deletions
- [#42330](https://github.com/BerriAI/litellm/pull/42330) fix(streaming): let a later usage event zero out stale cache counts (#40736)
- [#42509](https://github.com/BerriAI/litellm/pull/42509) fix(router): explain fallback outcome in plain words in the raised error
- [#42515](https://github.com/BerriAI/litellm/pull/42515) feat(openai): add GPT-6 Sol and GPT-6 Luna
- [#39311](https://github.com/BerriAI/litellm/pull/39311) fix(cost): honor deployment pricing for image generation
- [#42388](https://github.com/BerriAI/litellm/pull/42388) fix(realtime): surface an upstream handshake refusal as an error event and policy close
- [#42500](https://github.com/BerriAI/litellm/pull/42500) chore(prices): sync Google Gemini prices: 13 models
- [#42382](https://github.com/BerriAI/litellm/pull/42382) fix(mcp): restore legacy SSE and bounded cancellation cleanup
- [#42453](https://github.com/BerriAI/litellm/pull/42453) feat(terraform): expose server_metadata on litellm_key so undeclared metadata is visible
- [#42398](https://github.com/BerriAI/litellm/pull/42398) feat(router): time-windowed team reservation of deployments via model_info.access_windows
- [#42501](https://github.com/BerriAI/litellm/pull/42501) chore(prices): sync OpenAI prices: 25 models [enrichment failed: OpenAI, 32 held]
- [#42502](https://github.com/BerriAI/litellm/pull/42502) chore(prices): sync Azure prices: 34 models
- [#42465](https://github.com/BerriAI/litellm/pull/42465) fix(gemini): simplify model version check
- [#42430](https://github.com/BerriAI/litellm/pull/42430) test(proxy): give every ui settings endpoint test a fresh settings store
- [#38220](https://github.com/BerriAI/litellm/pull/38220) fix(ui): surface the owner's user budget on keys without their own budget
- [#42495](https://github.com/BerriAI/litellm/pull/42495) fix(jwt): say x-litellm-team-id matched no team id or alias in the 403
- [#42492](https://github.com/BerriAI/litellm/pull/42492) fix(utils): stop a nested additional_drop_params entry from crashing openai-compatible calls
- [#42429](https://github.com/BerriAI/litellm/pull/42429) test(response_metadata): make the detailed-timing receive-anchor test timezone independent
- [#42444](https://github.com/BerriAI/litellm/pull/42444) fix(otel v2): map rerank and search output and the OCR, image edit and search input onto the Langfuse generation
- [#39861](https://github.com/BerriAI/litellm/pull/39861) fix(cost): bill batch prompts above 272K at OpenAI's long-context batch tier
- [#42493](https://github.com/BerriAI/litellm/pull/42493) fix(proxy): never render credential-bearing config keys in the bug report
- [#42489](https://github.com/BerriAI/litellm/pull/42489) feat(anthropic): add Claude Opus 5.5
- [#31203](https://github.com/BerriAI/litellm/pull/31203) fix(bedrock/claude_platform): strip body params the AWS endpoint rejects
- [#42405](https://github.com/BerriAI/litellm/pull/42405) test(unit): make bedrock collector and secret scan timing tests deterministic
- [#42383](https://github.com/BerriAI/litellm/pull/42383) feat(arize): per-team success and error sampling rates for the Arize AX callback
- [#42485](https://github.com/BerriAI/litellm/pull/42485) chore(prices): sync OpenRouter prices: 1 model [enrichment failed: OpenRouter, 5 held]
- [#42480](https://github.com/BerriAI/litellm/pull/42480) feat(rust): align secret manager operation contexts
- [#42438](https://github.com/BerriAI/litellm/pull/42438) chore(prices): sync OpenRouter prices: 14 models, 1 deprecated [enrichment failed: OpenRouter, 5 held]
- [#42445](https://github.com/BerriAI/litellm/pull/42445) fix(jwt): accept a team alias in x-litellm-team-id
- [#42441](https://github.com/BerriAI/litellm/pull/42441) fix(guardrails): store the masked output in spend logs when Presidio masks the response
- [#42442](https://github.com/BerriAI/litellm/pull/42442) ci(code-quality): allowlist _render_json in the recursive detector
- [#42299](https://github.com/BerriAI/litellm/pull/42299) fix(mcp): keep config-defined servers read-only
- [#42074](https://github.com/BerriAI/litellm/pull/42074) feat(router): native compact-to-fit across conversation APIs
- [#42423](https://github.com/BerriAI/litellm/pull/42423) fix(e2e-stack): print add-mask lines only under GitHub Actions
- [#42410](https://github.com/BerriAI/litellm/pull/42410) fix(proxy): answer 503 no_db_connection on management routes when the caller's user read hits a database outage
- [#42359](https://github.com/BerriAI/litellm/pull/42359) test(e2e): add conversational matrix across chat, messages and responses
- [#42065](https://github.com/BerriAI/litellm/pull/42065) feat(errors): prefilled GitHub issue link on unmapped internal errors
- [#42418](https://github.com/BerriAI/litellm/pull/42418) chore(prices): sync OpenRouter prices: 2 models
- [#42403](https://github.com/BerriAI/litellm/pull/42403) fix(cost): honor per-second custom pricing on chat completions for every provider
- [#42394](https://github.com/BerriAI/litellm/pull/42394) fix(otel v2): map completions, images, speech, transcription and moderation output onto the Langfuse generation output
- [#42174](https://github.com/BerriAI/litellm/pull/42174) feat(tokenizer): preserve Python defaults with opt-in Rust dispatch
- [#42351](https://github.com/BerriAI/litellm/pull/42351) fix(presidio): mask PII in streaming /v1/messages output
- [#42406](https://github.com/BerriAI/litellm/pull/42406) ci: skip cost map file checks on PRs that leave the cost map untouched
- [#42407](https://github.com/BerriAI/litellm/pull/42407) chore(prices): sync OpenRouter prices: 2 models, 2 new
- [#41099](https://github.com/BerriAI/litellm/pull/41099) feat(proxy): add TinyFish Agent API passthrough with per-step billing
- [#42404](https://github.com/BerriAI/litellm/pull/42404) feat(sdk): add fusion virtual model
- [#42381](https://github.com/BerriAI/litellm/pull/42381) chore(prices): sync OpenRouter prices: 2 models, 2 deprecated
- [#42401](https://github.com/BerriAI/litellm/pull/42401) fix(anthropic_adapter): keep reasoning_effort a string for targets that stay on chat completions
- [#42402](https://github.com/BerriAI/litellm/pull/42402) fix(bedrock): price bedrock/mantle/<model> deployments from the base model row
- [#41526](https://github.com/BerriAI/litellm/pull/41526) test(pricing): assert cache-priced vertex grok rows advertise supports_prompt_caching
- [#42328](https://github.com/BerriAI/litellm/pull/42328) feat(rust-bridge): add cache and secret migration foundations
- [#42399](https://github.com/BerriAI/litellm/pull/42399) fix(proxy): surface a database outage from the user read as 503 no_db_connection
- [#42396](https://github.com/BerriAI/litellm/pull/42396) test(integration): chain a proxy-issued previous_response_id in the cost suite
- [#42397](https://github.com/BerriAI/litellm/pull/42397) test(e2e-ui): check the MCP Tools tab against the upstream's own tools/list
- [#42360](https://github.com/BerriAI/litellm/pull/42360) feat(fal_ai): add queue-only /fal_ai pass-through route with spend tracking
- [#42390](https://github.com/BerriAI/litellm/pull/42390) fix(responses): drop client_metadata and merge system messages for Databricks chat-only models
- [#42307](https://github.com/BerriAI/litellm/pull/42307) refactor(agentic-loop): build follow-up kwargs in one place so no executor can repeat a request param
- [#42344](https://github.com/BerriAI/litellm/pull/42344) fix(auth): fail closed when the JWT single-team fallback or compact editor membership read hits a DB outage
- [#42395](https://github.com/BerriAI/litellm/pull/42395) test(integration): move Xiaomi MiMo coverage from live e2e to the providers wire shard
- [#42304](https://github.com/BerriAI/litellm/pull/42304) fix(proxy): release unclaimed budget reservations at request end
- [#42345](https://github.com/BerriAI/litellm/pull/42345) feat(cost): warn and count $0 cost on billable requests
- [#42301](https://github.com/BerriAI/litellm/pull/42301) feat(openrouter): price typesafe/jev-1.13 and add an openrouter decisions pass-through
- [#41944](https://github.com/BerriAI/litellm/pull/41944) fix(proxy): drop cost-map metadata echoed back on model save
- [#42336](https://github.com/BerriAI/litellm/pull/42336) fix(fal_ai): price non-canonical image sizes from the nearest row and honour dump options
- [#42391](https://github.com/BerriAI/litellm/pull/42391) feat(proxy): opt-in litellm_call_id in JSON error bodies
- [#42334](https://github.com/BerriAI/litellm/pull/42334) feat(fal_ai): add flux-lora-depth image edits and moondream3 chat completions
- [#42342](https://github.com/BerriAI/litellm/pull/42342) fix(bedrock): sign batch S3 requests with s3_access_key_id and s3_secret_access_key
- [#42376](https://github.com/BerriAI/litellm/pull/42376) fix(bedrock): send every Mantle beta in the anthropic-beta header on the bedrock/mantle route
- [#42385](https://github.com/BerriAI/litellm/pull/42385) fix(logging): price terminal Responses stream events from their inner response
- [#42352](https://github.com/BerriAI/litellm/pull/42352) fix(mcp): return camelCase tool keys from /v1/mcp/tools after the SDK 2 upgrade
- [#42389](https://github.com/BerriAI/litellm/pull/42389) test(proxy): isolate the agent read-through singleton between unknown-agent tests
- [#42384](https://github.com/BerriAI/litellm/pull/42384) feat(pricing): add xai grok-4.20 aliases and image token prices from /v1/language-models
- [#42386](https://github.com/BerriAI/litellm/pull/42386) fix(openrouter): remove the retired stealth/union-alpha model from the cost map
- [#39578](https://github.com/BerriAI/litellm/pull/39578) feat(jwt-key-mapping): accept token_id as an alternative to the plaintext key

#### 🐛 New Issues
- [#42400](https://github.com/BerriAI/litellm/issues/42400) [Bug]: Provider-specific optional params (e.g. ollama `num_ctx`) are silently excluded from cache keys by default — cached responses generated under different settings get served `llm translation` 💬3
- [#42477](https://github.com/BerriAI/litellm/issues/42477) [Bug]: MCP oauth2/authorization_code token exchange fails with generic "no usable access_token" even when the upstream IdP returns a fully valid token `bug` 💬1
- [#42409](https://github.com/BerriAI/litellm/issues/42409) [Bug]: Azure requests include internal model_alias_map when a model alias resolves through LiteLLM `bug` `llm translation` 💬1
- [#42550](https://github.com/BerriAI/litellm/issues/42550) Anthropic /v1/messages: signed thinking blocks with empty text (default display=omitted) are stripped before dispatch, discarding replayed reasoning `llm translation`
- [#42551](https://github.com/BerriAI/litellm/issues/42551) Anthropic /v1/messages: invalid-thinking 400 is retried without thinking blocks even when the client set prefix_mismatch_behavior=error (debug-level only) `llm translation`
- [#42627](https://github.com/BerriAI/litellm/issues/42627) [Bug]: Completed batch can be skipped by model budget after logging cancellation
- [#42582](https://github.com/BerriAI/litellm/issues/42582) [Feature]: Add Microsoft Web IQ as a native search provider
- [#42573](https://github.com/BerriAI/litellm/issues/42573) README "Deploy on Railway" button opens a template that cannot deploy
- [#42566](https://github.com/BerriAI/litellm/issues/42566) [Bug]: Two proxies on one host share the auto-created PROMETHEUS_MULTIPROC_DIR and the second boot wipes the first proxy's counters `bug` `llm translation`
- [#42546](https://github.com/BerriAI/litellm/issues/42546) [Bug]: prometheus_initialize_budget_metrics never retracts budget gauges for deleted keys
- [#42484](https://github.com/BerriAI/litellm/issues/42484) Responses API streaming bridge crashes on usage-only chunks (choices: []) — fix in #34455 unreleased until 1.103.0rc1 `llm translation`
- [#42476](https://github.com/BerriAI/litellm/issues/42476) [Bug]: Anthropic /v1/messages passthrough streams bypass post-call guardrails, so output_parse_pii leaks masked placeholders `bug` `llm translation` `claude code`
- [#42469](https://github.com/BerriAI/litellm/issues/42469) [Bug]: Missing eu-west-2 Bedrock pricing for NVIDIA Nemotron Super 3 120B `llm translation`
- [#42460](https://github.com/BerriAI/litellm/issues/42460) [Bug]: Zero data on /user/daily/activity/aggregated when filtered by user_id `bug` `llm translation`
- [#42457](https://github.com/BerriAI/litellm/issues/42457) [Feature]: Let a team admin call POST /team/update for their own team
- [#42432](https://github.com/BerriAI/litellm/issues/42432) [Bug]: Anthropic→OpenAI translation can emit a `messages` array with no `user`/`system` role; the resulting upstream 400 is then reported as HTTP 500 and cools the deployment down `bug` `llm translation`
- [#42426](https://github.com/BerriAI/litellm/issues/42426) [Bug]: ollama embeddings ignore encoding_format, silently truncating vectors to a quarter width via the openai SDK `llm translation`
- [#42408](https://github.com/BerriAI/litellm/issues/42408) [Bug]: Proxy streaming response crashes when late response payload is a dict `bug` `llm translation`

#### 🔒 Closed Issues
- [#27183](https://github.com/BerriAI/litellm/issues/27183) [Bug]: Ollama Vision VLM calls not working due to missing pillow
- [#23022](https://github.com/BerriAI/litellm/issues/23022) [Feature]: `config.yaml`'s JSON Schema
- [#30280](https://github.com/BerriAI/litellm/issues/30280) [Bug]: DashscopeException - 'function' is a required property, expected an object - 'tools.7'
- [#30456](https://github.com/BerriAI/litellm/issues/30456) [Feature]: please support Fusion
- [#33871](https://github.com/BerriAI/litellm/issues/33871) [Bug]: project spend is never tracked, so project budgets and alerts never enforce
- [#40649](https://github.com/BerriAI/litellm/issues/40649) [Bug]: Admin UI model edit persists derived pricing; price-map reload then records Azure spend as $0`
- [#29844](https://github.com/BerriAI/litellm/issues/29844) Add GreenPT provider
- [#30004](https://github.com/BerriAI/litellm/issues/30004) EmbeddingResponse(**response_json) fails with `must be a mapping, not list` when using openai_like/lm_studio provider with llama.cpp server
- [#30442](https://github.com/BerriAI/litellm/issues/30442) [Bug]: Dashboard calls admin-only routes for non-admin users, flooding logs with ERROR stacktraces
- [#40736](https://github.com/BerriAI/litellm/issues/40736) [Bug]: Streaming usage merger retains stale cache-write tokens after explicit zero update
- [#42347](https://github.com/BerriAI/litellm/issues/42347) [Bug]: Databricks non-GPT models 400 with reasoning_effort must be a string when reasoning.summary is set
- [#42200](https://github.com/BerriAI/litellm/issues/42200) [Feature]: Cost tracking for Jev when using OpenRouter
- [#31184](https://github.com/BerriAI/litellm/issues/31184) Feature request: support x402-paid inference providers (no-account pay-per-call)
- [#38208](https://github.com/BerriAI/litellm/issues/38208) [Bug]: MCP sending x-litellm-api-key to a dcr_bridge server returns an empty tool list
- [#42094](https://github.com/BerriAI/litellm/issues/42094) [Bug]: Anthropic is_pdf_used raises TypeError (500) when a message content list contains a plain string
- [#40746](https://github.com/BerriAI/litellm/issues/40746) [Feature]: Add inception/mercury-2.5 pricing and model settings to the model cost map
- [#40234](https://github.com/BerriAI/litellm/issues/40234) Bedrock and Vertex AI batch file IDs produce URI-unsafe S3 log filenames
- [#30662](https://github.com/BerriAI/litellm/issues/30662) [Bug]: Anthropic /v1/messages passthrough serializes callback-injected non-serializable metadata into the request body
- [#33400](https://github.com/BerriAI/litellm/issues/33400) [Bug]: async_post_mcp_tool_call_hook return value is discarded — a modified MCP tool response never reaches the client
- [#41032](https://github.com/BerriAI/litellm/issues/41032) [Feature]: Map stable session IDs to configurable provider affinity headers
- [#32984](https://github.com/BerriAI/litellm/issues/32984) voyage-4-large missing from model_prices_and_context_window.json, so mode/pricing is unset
- [#40556](https://github.com/BerriAI/litellm/issues/40556) Add "deep-seek-flash" in "model_prices_and_context_window.json"
- [#41435](https://github.com/BerriAI/litellm/issues/41435) [Bug]: Fix "vertex_ai/xai/grok-4.6" entry in "model_prices_and_context_window.json" — missing supports_prompt_caching
- [#39313](https://github.com/BerriAI/litellm/issues/39313) [Bug]: image generation deployments with their own output_cost_per_image bill $0 or the map price

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,597 · **Open issues:** 1,225 · **Last push:** <1h ago

On September 23, 2026, Unsloth released version v0.1.814-beta of Qwen-Image-2.1, enhancing local execution capabilities with custom Agent Skills, doubled reasoning speed, and improved reliability in training and installation processes. This version also addressed specific issues with the diffusers and GGUF, which were noted as highlights. Merged pull requests included updates to the README to enhance documentation clarity and fixes to various Studio functionalities, notably for Qwen-Image-2.1 edits and sidebar interactions. A significant new issue has emerged regarding extra manual steps needed to run Qwen-Image-2.1, alongside concerns regarding training stability on AMD GPUs, particularly under the ROCm environment.

#### 🚀 New Releases
- [v0.1.814-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.814-beta) Qwen-Image-2.1 + Skills
- [v0.1.813-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.813-beta) Qwen-Image-2.1 + Skills
- [v0.1.812-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.812-beta) Qwen-Image-2.1 + Skills

#### ✅ Merged PRs
- [#11618](https://github.com/unslothai/unsloth/pull/11618) Point the README contracts at the pages that now carry the detail, and count the drop-cue row
- [#11605](https://github.com/unslothai/unsloth/pull/11605) Keep the browser matrix TMPDIR out of the checkout
- [#11610](https://github.com/unslothai/unsloth/pull/11610) Inject the schema fault where get_progress gets its connection
- [#11617](https://github.com/unslothai/unsloth/pull/11617) Format the two Qwen-Image-2.1 edit files the formatter check flags
- [#11616](https://github.com/unslothai/unsloth/pull/11616) Bump install.sh / install.ps1 pin to unsloth>=2026.9.10
- [#11612](https://github.com/unslothai/unsloth/pull/11612) Studio: unbreak the drag planner's diff, and key the tail where ids cannot reach
- [#11589](https://github.com/unslothai/unsloth/pull/11589) Studio: make sidebar drop cues say where the row actually lands
- [#11583](https://github.com/unslothai/unsloth/pull/11583) Studio: show the curated model fit estimate in picker warnings
- [#11579](https://github.com/unslothai/unsloth/pull/11579) Studio: install the pinned Diffusers build on startup when an old installer skipped it
- [#11587](https://github.com/unslothai/unsloth/pull/11587) Studio: add Qwen-Image-2.1 image editing
- [#11606](https://github.com/unslothai/unsloth/pull/11606) Studio: recommend the repo's default GGUF quant instead of the largest that fits
- [#11590](https://github.com/unslothai/unsloth/pull/11590) Probe Studio before reading the deadline in unsloth-studio-update
- [#11588](https://github.com/unslothai/unsloth/pull/11588) Import the row fork's modules statically, which puts main back under the startup budget
- [#11604](https://github.com/unslothai/unsloth/pull/11604) Studio: load Qwen-Image-2.1 GGUFs through diffusers on GPU hosts
- [#11564](https://github.com/unslothai/unsloth/pull/11564) Studio: fork a chat from its row menu
- [#11582](https://github.com/unslothai/unsloth/pull/11582) Do not scan a dep that only an extra installs, platform marker or not
- [#11578](https://github.com/unslothai/unsloth/pull/11578) Compare a full pass to a skipping one without the click both record as unmet
- [#11580](https://github.com/unslothai/unsloth/pull/11580) Expect Dense (bf16) after a declined encoder precision
- [#11577](https://github.com/unslothai/unsloth/pull/11577) Baseline the seven unsloth-zoo 2026.9.7 findings after re-review
- [#11576](https://github.com/unslothai/unsloth/pull/11576) Let the stdout guard read writes, not flushes
- [#11575](https://github.com/unslothai/unsloth/pull/11575) Keep scrolling to the end of the reasoning transcript in the thread settings driver
- [#11572](https://github.com/unslothai/unsloth/pull/11572) Let the composite renaming tests run inside the transformers 5.4 window
- [#11573](https://github.com/unslothai/unsloth/pull/11573) Repair the four a-k checks the Qwen-Image-2.1 wave left red
- [#11568](https://github.com/unslothai/unsloth/pull/11568) Studio: hold the sidebar drag escape click guard until the button comes up
- [#11470](https://github.com/unslothai/unsloth/pull/11470) Keep weight_decay when embedding_learning_rate is set
- [#11561](https://github.com/unslothai/unsloth/pull/11561) Studio: drag sidebar rows in the desktop app, and drop the drag hint
- [#11570](https://github.com/unslothai/unsloth/pull/11570) Bump install.sh / install.ps1 pin to unsloth>=2026.9.9
- [#11566](https://github.com/unslothai/unsloth/pull/11566) Studio: finish an update with the installer it installs
- [#11565](https://github.com/unslothai/unsloth/pull/11565) Studio: install the pinned Diffusers commit from a zip when there is no git
- [#11552](https://github.com/unslothai/unsloth/pull/11552) Stub the low-disk check in the tool-approval harness
- [#11550](https://github.com/unslothai/unsloth/pull/11550) Bump install.sh / install.ps1 pin to unsloth>=2026.9.8
- [#11548](https://github.com/unslothai/unsloth/pull/11548) Unsloth Studio: give the memory planner the companion split on a pipeline image load
- [#11546](https://github.com/unslothai/unsloth/pull/11546) Qwen-Image-2.1 fails every render at 20+ steps: FBCache cannot run on a prefix KV cache
- [#11525](https://github.com/unslothai/unsloth/pull/11525) Studio: reuse one database connection per thread for durable chat generation runs
- [#10365](https://github.com/unslothai/unsloth/pull/10365) feat(chat): make agentic turns survive tab-close
- [#11482](https://github.com/unslothai/unsloth/pull/11482) Fix push_to_hub_merged for full fine-tunes on transformers 5
- [#11544](https://github.com/unslothai/unsloth/pull/11544) Lift the Classic light muted token to clear AA
- [#11541](https://github.com/unslothai/unsloth/pull/11541) Make the thinking trace read as a trace, not as the answer
- [#11452](https://github.com/unslothai/unsloth/pull/11452) Load prequantized multimodal checkpoints correctly on transformers 5.4 and 5.5
- [#10213](https://github.com/unslothai/unsloth/pull/10213) Avoid 8-bit training optimizer on XPU
- [#11542](https://github.com/unslothai/unsloth/pull/11542) Pin the Dynamic 2.0 4-bit text encoder for Qwen-Image-2.1's native route
- [#11539](https://github.com/unslothai/unsloth/pull/11539) Studio: take the hosted pre-cast fp8 text encoder by default on Qwen-Image-2.1
- [#11535](https://github.com/unslothai/unsloth/pull/11535) Load the published Qwen-Image-2.1 INT8 checkpoint, and four more follow-ups
- [#11516](https://github.com/unslothai/unsloth/pull/11516) Keep the compiler on for native architectures loaded with trust_remote_code = True
- [#9595](https://github.com/unslothai/unsloth/pull/9595) Studio: validate the reasoning controls instead of coercing them
- [#11538](https://github.com/unslothai/unsloth/pull/11538) Make the GPU probe harness name the helper it failed to extract
- [#11534](https://github.com/unslothai/unsloth/pull/11534) Read the packing blocker's branch by behaviour, not by its spelling
- [#11532](https://github.com/unslothai/unsloth/pull/11532) Export into a directory the temp-file test owns
- [#11540](https://github.com/unslothai/unsloth/pull/11540) Make main formatter-clean so pre-commit stops rewriting every PR
- [#11480](https://github.com/unslothai/unsloth/pull/11480) Studio: load a 16-bit Continued Pretraining run in 16-bit in Chat
- [#11522](https://github.com/unslothai/unsloth/pull/11522) Studio: replace reasoning pagination with a continuous transcript
- [#11536](https://github.com/unslothai/unsloth/pull/11536) Install a prebuilt wheel's declared runtime dependencies before smoke importing it
- [#11450](https://github.com/unslothai/unsloth/pull/11450) Warn when the installed transformers drops a pre-quantized checkpoint's bnb quant state
- [#11461](https://github.com/unslothai/unsloth/pull/11461) fix(grpo): autocast with DEVICE_TYPE_TORCH instead of a pinned "cuda"
- [#11507](https://github.com/unslothai/unsloth/pull/11507) Route Qwen-Image-2.1 GGUFs to the sd.cpp engine
- [#11483](https://github.com/unslothai/unsloth/pull/11483) Studio: stop one audio chat from blocking every other chat
- [#11467](https://github.com/unslothai/unsloth/pull/11467) Resolve the auto class for omni checkpoints, and guard embedding lookups
- [#11405](https://github.com/unslothai/unsloth/pull/11405) Add the Qwen-Image-2.1 family, and the Diffusers it needs by default
- [#11439](https://github.com/unslothai/unsloth/pull/11439) Studio: warn when the disk is running low, and point at the caches
- [#11454](https://github.com/unslothai/unsloth/pull/11454) Let a hosted pre-cast text encoder be safetensors, not only a pickle
- [#11502](https://github.com/unslothai/unsloth/pull/11502) Rework Studio dark mode onto a single surface and text scale
- [#11394](https://github.com/unslothai/unsloth/pull/11394) Let a pre-quant checkpoint be safetensors instead of a pickle
- [#11484](https://github.com/unslothai/unsloth/pull/11484) Docker: pass JUPYTER_PORT and the notebook skip options through run.sh
- [#11479](https://github.com/unslothai/unsloth/pull/11479) Studio: chat with a full fine-tune in 16-bit instead of a 4-bit copy
- [#9534](https://github.com/unslothai/unsloth/pull/9534) Fixes to XPU offloading during training
- [#11451](https://github.com/unslothai/unsloth/pull/11451) Report a Linux ROCm APU host-backed pool of zero as measured, not unknown
- [#11399](https://github.com/unslothai/unsloth/pull/11399) Studio tool loop: close two gaps in the static screens that gate model-written code
- [#11448](https://github.com/unslothai/unsloth/pull/11448) Find a GGUF companion published after the weights on the chat load route
- [#11468](https://github.com/unslothai/unsloth/pull/11468) Do not auto-enable padding-free for a model whose forward cannot take it
- [#11527](https://github.com/unslothai/unsloth/pull/11527) Install the import-time Python dependencies before smoke testing a prebuilt wheel
- [#11519](https://github.com/unslothai/unsloth/pull/11519) Keep generated RL configs on the reentrant gradient checkpoint path
- [#11494](https://github.com/unslothai/unsloth/pull/11494) Skip TRL's redundant kbit prep for models Unsloth already prepared
- [#11521](https://github.com/unslothai/unsloth/pull/11521) Give the Docker step harnesses the environment those steps now declare
- [#11520](https://github.com/unslothai/unsloth/pull/11520) Let the cache row's path label follow the interface font size
- [#11515](https://github.com/unslothai/unsloth/pull/11515) Build and publish signed prebuilt CUDA 13 wheels for torch 2.13 and 2.14
- [#5886](https://github.com/unslothai/unsloth/pull/5886) Studio: resolve upstream llama.cpp releases, assets and digests without the GitHub API
- [#11508](https://github.com/unslothai/unsloth/pull/11508) studio: revamp the logs tab
- [#11337](https://github.com/unslothai/unsloth/pull/11337) Stop dividing the GRPO eval loss by the accumulation steps
- [#11517](https://github.com/unslothai/unsloth/pull/11517) Keep credentials out of cached directories, and audit the org against the miri cache disclosure
- [#11505](https://github.com/unslothai/unsloth/pull/11505) Studio: read the scaled lengths and colours the UI contracts were written against
- [#11510](https://github.com/unslothai/unsloth/pull/11510) Fix the update card clipping its own buttons at the 20px interface size
- [#11504](https://github.com/unslothai/unsloth/pull/11504) Cut CI queue: scope push triggers, and rebalance Repo tests (CPU) on measured runner time
- [#11489](https://github.com/unslothai/unsloth/pull/11489) Unsloth Studio: make a newly created API key selectable when the clipboard is unavailable
- [#11477](https://github.com/unslothai/unsloth/pull/11477) Stop unsloth chat and unsloth inference reloading a 16-bit model in 4-bit
- [#10528](https://github.com/unslothai/unsloth/pull/10528) Studio: show what the caches cost and let them be cleared
- [#11446](https://github.com/unslothai/unsloth/pull/11446) Stop the installers importing the download stack just to be imported
- [#10494](https://github.com/unslothai/unsloth/pull/10494) Repair a quarantined llama.cpp runtime at launch instead of failing at model load
- [#5637](https://github.com/unslothai/unsloth/pull/5637) studio/frontend: keep shutdown dialog open when server-stop fails
- [#11334](https://github.com/unslothai/unsloth/pull/11334) Studio: promote -ts into tensor_split before manual strip
- [#11462](https://github.com/unslothai/unsloth/pull/11462) fix(studio): track the repository resolved by the training loader
- [#11423](https://github.com/unslothai/unsloth/pull/11423) Studio: keep a streaming code fence highlighted, and window its spans
- [#11481](https://github.com/unslothai/unsloth/pull/11481) Studio: keep <think> text visible in the reply when Thinking is off
- [#11478](https://github.com/unslothai/unsloth/pull/11478) Stop unsloth chat and unsloth inference ignoring the model's recommended settings
- [#11503](https://github.com/unslothai/unsloth/pull/11503) Studio: make the drag preferences test compile, and ask the stricter question
- [#11458](https://github.com/unslothai/unsloth/pull/11458) Studio: scale spacing with the UI font size
- [#11459](https://github.com/unslothai/unsloth/pull/11459) Studio: make the contrast slider reach surfaces and controls
- [#11495](https://github.com/unslothai/unsloth/pull/11495) Studio: anchor the worker source read on the test file, not the working directory

#### 🐛 New Issues
- [#11567](https://github.com/unslothai/unsloth/issues/11567) [Bug] Qwen-image-2.1 needs extra manual steps to run `feature request` `bug` 💬2
- [#11498](https://github.com/unslothai/unsloth/issues/11498) ROCm: Unsloth Studio QLoRA training repeatedly triggers AMDGPU VM fault/reset on RX 7900 XTX while equivalent Transformers/PEFT training succeeds 💬1
- [#11554](https://github.com/unslothai/unsloth/issues/11554) Wire the chunked generalized JSD into the GKD path 💬1
- [#11614](https://github.com/unslothai/unsloth/issues/11614) AMD: training on RDNA1 (RX 5700 XT, gfx1010)
- [#11569](https://github.com/unslothai/unsloth/issues/11569) Unsloth Studio (AMD/ROCm): a second AMD GPU the installed PyTorch cannot run is still offered for training, and the installer never warns
- [#11557](https://github.com/unslothai/unsloth/issues/11557) [Studio Bug] Code enabled with ChatGPT/Codex but Python and Terminal are not exposed
- [#11556](https://github.com/unslothai/unsloth/issues/11556) Distil from a teacher that never enters training memory: offline top-k logprobs and served teachers
- [#11551](https://github.com/unslothai/unsloth/issues/11551) [Bug] Previously working models fail to load after recent updates (401 errors and invalid repository resolution) `feature request` `bug`
- [#11547](https://github.com/unslothai/unsloth/issues/11547) [Bug] Unsloth Studio: a pipeline image load can never pick group offload, so Qwen-Image-2.1 falls to whole-module offload on a 40 GB A100
- [#11545](https://github.com/unslothai/unsloth/issues/11545) [Bug] LLM CUDA works, image model import fails after Repair. `feature request` `bug`
- [#11529](https://github.com/unslothai/unsloth/issues/11529) [Bug] Make Hugging Face search work for blocked countries `feature request` `bug`
- [#11514](https://github.com/unslothai/unsloth/issues/11514) Typo: “top-1% accuracy” should be “top-1 accuracy”
- [#11513](https://github.com/unslothai/unsloth/issues/11513) [Feature] Omnivoice TTS fine tuning notebook `feature request`
- [#11511](https://github.com/unslothai/unsloth/issues/11511) [Bug] Context override works from chat menu load model, not from JIT api load `feature request` `bug`
- [#11497](https://github.com/unslothai/unsloth/issues/11497) [Feature]UI optimization suggestions `feature request`
- [#11496](https://github.com/unslothai/unsloth/issues/11496) [Unsloth Bug] Open chat does not reconcile externally updated saved assistant messages `feature request` `bug`

#### 🔒 Closed Issues
- [#7485](https://github.com/unslothai/unsloth/issues/7485) [Bug] Latest llama.cpp build broke AMD GPU detection
- [#7164](https://github.com/unslothai/unsloth/issues/7164) [Bug] Models keep going in and out of VRAM
- [#3008](https://github.com/unslothai/unsloth/issues/3008) Knowledge Distillation Feature in Unsloth, Utilizing Unsloths Incredible Memory Efficiency
- [#7525](https://github.com/unslothai/unsloth/issues/7525) [Feature] llama-server args forward for unsloth studio
- [#11387](https://github.com/unslothai/unsloth/issues/11387) [Bug] Created API Keys cannot be copied
- [#11547](https://github.com/unslothai/unsloth/issues/11547) [Bug] Unsloth Studio: a pipeline image load can never pick group offload, so Qwen-Image-2.1 falls to whole-module offload on a 40 GB A100
- [#10021](https://github.com/unslothai/unsloth/issues/10021) [Bug] Intel XPU: default adamw_8bit optimizer crashes training at optimizer.step(), default optimizer is compatible with NVIDIA, not Vulkan
- [#9524](https://github.com/unslothai/unsloth/issues/9524) [Bug] qLora training on XPU Fails due to tensor (off)loading issue
- [#10599](https://github.com/unslothai/unsloth/issues/10599) [Bug] Unsloth Studio / Desktop: a model downloaded before its MTP head or mmproj existed never picks them up, only delete + redownload fixes it
- [#9899](https://github.com/unslothai/unsloth/issues/9899) [Feature] Turn API Token into selectable text
- [#11330](https://github.com/unslothai/unsloth/issues/11330) [Bug] Studio backend strips explicit --tensor-split / -ts flag, causing OOM on multi-GPU MoE with CPU offload

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,104 · **Open issues:** 372 · **Last push:** 4h ago

On September 23, 2026, there were no new releases for AIBrix, but several significant pull requests were merged. Key updates include enhancements to gateway performance with #2771 focusing on score load-balancing and #2774 introducing queue observability metrics which bolster the SLO. Additionally, #2776 addresses recovery from panics on the gateway plugin request path, while #2762 improves configurability for the Kubernetes API client related to gateway plugins. Notably, new issues were raised, including #2780, which highlights a bug concerning the PodAutoscaler potentially multiplying replicas incorrectly when spec.mode is unset, and #2779 that reports interference between StormServices in different namespaces sharing selectors.

#### ✅ Merged PRs
- [#2771](https://github.com/vllm-project/aibrix/pull/2771) [Gateway] Score load-balance on output-token rate, committed work, and KV pressure
- [#2774](https://github.com/vllm-project/aibrix/pull/2774) [Misc] Add queue observability metrics to the gateway SLO queue
- [#2776](https://github.com/vllm-project/aibrix/pull/2776) [Feat] Recover panics on the gateway plugin request path
- [#2762](https://github.com/vllm-project/aibrix/pull/2762) [CLI] Make gateway-plugin Kubernetes API client QPS and burst configurable
- [#2775](https://github.com/vllm-project/aibrix/pull/2775) [Bug] Strip query string before matching request paths
- [#2768](https://github.com/vllm-project/aibrix/pull/2768) [Bug] Gate the session-affinity Redis refresh on the stored value

#### 🐛 New Issues
- [#2780](https://github.com/vllm-project/aibrix/issues/2780) [Bug] With spec.mode unset and replicas > 1, a role-level PodAutoscaler seems to multiply the replica count by N `kind/bug` `area/orchestration` 💬3
- [#2779](https://github.com/vllm-project/aibrix/issues/2779) [Bug] StormServices in two namespaces seem to affect each other when they share a selector (deleting one kills the other's Pods) `kind/bug` `area/orchestration` 💬3

#### 🔒 Closed Issues
- [#2708](https://github.com/vllm-project/aibrix/issues/2708) [TEST] Add Gateway Plugin integration and functional regression coverage

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,900 · **Open issues:** 512 · **Last push:** 5h ago

On September 23, 2026, there were no new releases for Semantic Router; however, several important updates were merged, including a fix for handling non-positive topK values in hybrid search (#4025) and introducing a bounded upstream-error fallback across supported protocols (#3937). Documentation improvements were also made, with the publication of the Decision 1.0 technical report and an introduction to Open Decision Foundation Models (#4044 and #4041). Notably, a significant new issue was reported regarding a panic in the apiserver when accessing a typed-nil classification service (#4054), drawing attention to potential vulnerabilities in the system. Overall, the updates emphasize ongoing efforts to enhance functionality and reliability within the Semantic Router framework.

#### ✅ Merged PRs
- [#4025](https://github.com/vllm-project/semantic-router/pull/4025) [Bug] Handle non-positive topK in hybrid search
- [#3937](https://github.com/vllm-project/semantic-router/pull/3937) [Feature] Define bounded upstream-error fallback across supported protocols
- [#4044](https://github.com/vllm-project/semantic-router/pull/4044) [Docs] Publish Decision 1.0 technical report and PDF reader
- [#4041](https://github.com/vllm-project/semantic-router/pull/4041) [Docs] Introduce Decision 1.0: Open Decision Foundation Models
- [#4039](https://github.com/vllm-project/semantic-router/pull/4039) [Bug] Keep concurrent ML jobs from sharing an ID
- [#4021](https://github.com/vllm-project/semantic-router/pull/4021) [Test] Exercise the public installer with the candidate CLI wheel
- [#3992](https://github.com/vllm-project/semantic-router/pull/3992) [Feature] Prepare missing datasets when creating evaluations
- [#4020](https://github.com/vllm-project/semantic-router/pull/4020) [CI/Build] Keep RISC-V checks runnable on a clean checkout

#### 🐛 New Issues
- [#4033](https://github.com/vllm-project/semantic-router/issues/4033) [Website] Add a capability comparison to the homepage `enhancement` `accepted` `wg/developer-experience-ecosystem` 💬5
- [#4054](https://github.com/vllm-project/semantic-router/issues/4054) apiserver: /api/v1/eval panics on a typed-nil classification service when construction fails `needs-acceptance` 💬1
- [#4024](https://github.com/vllm-project/semantic-router/issues/4024) [Bug] Hybrid search panics or truncates results for non-positive topK `accepted` `wg/data-plane-networking` 💬1
- [#4048](https://github.com/vllm-project/semantic-router/issues/4048) [Bug] Ollama tool calls fail with 502 through the router `bug` `accepted` `wg/data-plane-networking` 💬1
- [#4043](https://github.com/vllm-project/semantic-router/issues/4043) [Bug] sr-bench replays creates a run after shutdown closes admission `needs-acceptance` `wg/evaluation-quality`
- [#4028](https://github.com/vllm-project/semantic-router/issues/4028) [Bug] Local E2E fails with workspace models due to duplicate /app/models Helm mount, missing HF_ENDPOINT, and restrictive dir permissions `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#4027](https://github.com/vllm-project/semantic-router/issues/4027) Dashboard config editor cannot save in Docker/CLI deployments: rename() over single-file bind mount fails (EBUSY) `needs-acceptance`
- [#4023](https://github.com/vllm-project/semantic-router/issues/4023) [Bug] sr-bench write routes silently ignore unknown request fields `needs-acceptance` `wg/evaluation-quality`

#### 🔒 Closed Issues
- [#2294](https://github.com/vllm-project/semantic-router/issues/2294) [Feature] Define bounded upstream-error fallback across supported protocols
- [#4010](https://github.com/vllm-project/semantic-router/issues/4010) [Bug] `make harness-check` fails on a clean checkout because `.agent-harness` is never created
- [#4024](https://github.com/vllm-project/semantic-router/issues/4024) [Bug] Hybrid search panics or truncates results for non-positive topK
- [#3979](https://github.com/vllm-project/semantic-router/issues/3979) [Bug] Default Envoy image exits with SIGSEGV on Linux ARM64
- [#3939](https://github.com/vllm-project/semantic-router/issues/3939) [Feature] Record which window decided a windowed guard score

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*