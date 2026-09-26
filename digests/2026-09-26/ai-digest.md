# 📡 AI Ecosystem Digest — 2026-09-26

> Generated 2026-09-26 01:13 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 148,107 | 36 | 6 | 3 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 126,487 | 35 | 9 | 50 | 8 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,167 | 0 | 0 | 6 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,210 | 6 | 19 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 210,073 | 31 | 11 | 3 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,133 | 22 | 8 | 30 | 3 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 390,523 | 75 | 45 | 123 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 248,980 | 24 | 19 | 6 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 92,684 | 27 | 17 | 48 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,433 | 5 | 16 | 50 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 129,525 | 11 | 16 | 19 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 181,730 | 7 | 4 | 0 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 59,635 | 20 | 10 | 74 | 4 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,787 | 16 | 17 | 138 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,113 | 2 | 0 | 4 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,916 | 42 | 11 | 2 | 0 |

---

## ✨ Highlights

- **Ollama** released v0.40.0-rc0, enhancing its version capabilities.  
- **OpenAI Codex** had several significant releases, including rust-v0.159.0-alpha.3 and rust-v0.157.1.  
- **Llama.cpp** introduced a series of releases, including b11192, and the issue [Feature Request: Add support for K2 Horizon](https://github.com/ggml-org/llama.cpp/issues/29424) gained traction with 7 comments.  
- The issue [unexpected status 401 Unauthorized issue](https://github.com/openai/codex/issues/48237) in **OpenAI Codex** continues to attract attention, amassing 93 comments.  
- **OpenClaw** faced significant scrutiny with issue [2026.9.6: prepared-model-catalog worker retains ~77 MB per agent turn](https://github.com/openclaw/openclaw/issues/157842), which received 15 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 148,107 · **Open issues:** 13,068 · **Last push:** 2h ago

On September 26, 2026, Claude Code released version 2.1.283, which introduced features like the `x-claude-code-prompt-id` for LLM gateway request grouping and a new `availableModelsMatch` setting to control model version access. In merged pull requests, key updates included improvements to telemetry hooks for enhanced data collection and a focus on engine stamp identification within the focus hook. Notably, a significant issue arose regarding the model erroneously using the term "falsifiable" instead of "verifiable," which has been consistently reproduced over the past four months, highlighting a critical need for correction.

#### 🚀 New Releases
- [v2.1.283](https://github.com/anthropics/claude-code/releases/tag/v2.1.283) v2.1.283

#### ✅ Merged PRs
- [#96953](https://github.com/anthropics/claude-code/pull/96953) diff: the focus hook answers to either name the engine stamps on its elements
- [#96930](https://github.com/anthropics/claude-code/pull/96930) telemetry, agents-md: the test plugins hook and call the collector stream by name, and stand in for telemetry through its events
- [#96917](https://github.com/anthropics/claude-code/pull/96917) telemetry: log and mark are what the mod's hooks do, the noun added only where the engine has none

#### 🐛 New Issues
- [#97305](https://github.com/anthropics/claude-code/issues/97305) [MODEL] Model writes "falsifiable" when "verifiable" is the obviously intended word — reproduced 4x over 4 months, project-scoped correction doesn't transfer `bug` `platform:macos` `area:model` `memory` 💬5
- [#97117](https://github.com/anthropics/claude-code/issues/97117) Opus 5.5: Severe scope creep and task focus regression compared to Opus 4.6 `bug` `area:model` 💬3
- [#97310](https://github.com/anthropics/claude-code/issues/97310) [BUG] Desktop (macOS): global voice shortcut records nothing — "Speak to Claude" overlay appears, no transcript `invalid` 💬1
- [#97306](https://github.com/anthropics/claude-code/issues/97306) [GitHub integration] `bug` `duplicate` `github-integration` 💬1
- [#97320](https://github.com/anthropics/claude-code/issues/97320) Please delete - posted in error `bug` `area:tools` `area:security`
- [#97319](https://github.com/anthropics/claude-code/issues/97319) [BUG] MCP client rejects valid tools/list response due to strict validation of ttlMs/cacheScope fields (Roblox Studio MCP server) `bug` `has repro` `platform:windows` `area:mcp`
- [#97308](https://github.com/anthropics/claude-code/issues/97308) Cowork scheduled tasks: action classifier intermittently denies authorized browser writes to a logged-in CRM; same action succeeds when user is present; no trusted-site setting `bug` `platform:macos` `area:cowork` `area:permissions`
- [#97318](https://github.com/anthropics/claude-code/issues/97318) [GitHub integration] `bug` `platform:web` `github-integration`
- [#97317](https://github.com/anthropics/claude-code/issues/97317) [Bug] Repeated "busted down from 5.5 to 4.8" message on all inputs `bug` `platform:linux` `area:model`
- [#97316](https://github.com/anthropics/claude-code/issues/97316) Last turn Assistant messages and `turn_duration` may not be written to session transcript after /compact. Fragile/flaky, see repro inside. `bug` `has repro` `platform:macos` `area:core`
- [#97315](https://github.com/anthropics/claude-code/issues/97315) [GitHub integration] `invalid` `github-integration`
- [#97314](https://github.com/anthropics/claude-code/issues/97314) [BUG] Plugin MCP failure cache is machine-wide and silent: one failing session disables a plugin for every session (incl. --channels daemons) for 15 min `duplicate` `has repro` `platform:macos` `area:mcp`
- [#97307](https://github.com/anthropics/claude-code/issues/97307) [BUG] cli OAuth error: Invalid code. Please make sure the full code was copied `bug` `platform:linux` `area:auth` `area:cli`
- [#97313](https://github.com/anthropics/claude-code/issues/97313) [Desktop app, Windows] Browser pane rendered twice: in its split and over the transcript `bug` `platform:windows` `area:desktop`
- [#97312](https://github.com/anthropics/claude-code/issues/97312) spawn_task chip's "running task" badge never clears once the (in-thread-injected) work is verifiably complete — distinct from the closed stuck-spinner cluster `bug` `has repro` `platform:macos` `area:agents`
- [#97311](https://github.com/anthropics/claude-code/issues/97311) [BUG] A tool call cut off by a safeguards refusal still executes with truncated input (Edit/Write report success) `bug` `platform:linux` `area:tools` `area:core`
- [#97309](https://github.com/anthropics/claude-code/issues/97309) claude-in-chrome doesn't recognise connected browsers after switching Claude accounts, even after logout and clearing the cache `bug` `platform:windows` `area:auth` `area:chrome`
- [#97304](https://github.com/anthropics/claude-code/issues/97304) spawn_task suggestion chips are labeled "running task" from the moment they're created, before the user has chosen to start them `bug` `has repro` `platform:macos` `area:ui`
- [#97303](https://github.com/anthropics/claude-code/issues/97303) [Bug] Overly broad safeguard trigger on legitimate security instrumentation code `bug` `duplicate` `platform:windows` `area:model`
- [#97302](https://github.com/anthropics/claude-code/issues/97302) [GitHub integration] `invalid` `github-integration`
- [#97301](https://github.com/anthropics/claude-code/issues/97301) [BUG] SendUserFile never delivers files from sessions a `claude remote-control` server spawns `bug` `has repro` `platform:macos` `area:tools`
- [#97300](https://github.com/anthropics/claude-code/issues/97300) [BUG] Agent sessions are not persisted when canceled. `bug` `platform:linux` `area:agents`
- [#97299](https://github.com/anthropics/claude-code/issues/97299) [BUG] headersHelper silently ignoring env vars with SECRET in the name `bug` `has repro` `platform:macos` `area:mcp`
- [#97298](https://github.com/anthropics/claude-code/issues/97298) Paul Crane `invalid` `github-integration`
- [#97297](https://github.com/anthropics/claude-code/issues/97297) [BUG] Bash tool children inherit the TUI's real pty; ssh passphrase prompt breaks fullscreen mouse tracking and wedges the session across resumes (regression in 2.1.281) `bug` `has repro` `platform:linux` `area:tui`
- [#97296](https://github.com/anthropics/claude-code/issues/97296) Thank you `question`
- [#97295](https://github.com/anthropics/claude-code/issues/97295) [FEATURE] Desktop app: show Code sessions from all signed-in accounts on this machine `enhancement` `platform:macos` `area:desktop`
- [#97294](https://github.com/anthropics/claude-code/issues/97294) [BUG] Claude Desktop: Research mode can't use local (stdio) MCP servers, and nothing warns before the run starts `invalid`
- [#97292](https://github.com/anthropics/claude-code/issues/97292) Code tab (desktop app) still applies the model/effort pick globally across projects — the behaviour fixed in #20745 for the CLI `bug` `platform:macos` `area:desktop`
- [#97291](https://github.com/anthropics/claude-code/issues/97291) [GitHub integration] `bug` `platform:web` `github-integration`
- [#97290](https://github.com/anthropics/claude-code/issues/97290) [Bug] Rename command not synced to mobile sessions `bug` `platform:macos` `area:core` `area:cli`
- [#97289](https://github.com/anthropics/claude-code/issues/97289) [Bug] TUI text rendering missing when scrolling to older messages `bug` `platform:macos` `area:tui`
- [#97288](https://github.com/anthropics/claude-code/issues/97288) [BUG] VS Code /model fails with EPERM on Windows: Hebrew username is reversed in config path `bug` `has repro` `platform:windows` `area:ide`
- [#97287](https://github.com/anthropics/claude-code/issues/97287) [GitHub integration] `bug` `platform:web` `github-integration`
- [#97103](https://github.com/anthropics/claude-code/issues/97103) [Bug] Arrow keys switch plugin config tabs instead of cycling option values `bug` `has repro` `area:tui` `area:plugins`
- [#97282](https://github.com/anthropics/claude-code/issues/97282) MCP OAuth client invents `<gateway-origin>/authorize` instead of resolving the RFC 9728 discovery chain (authorization_servers → AS metadata) — non-compliant with MCP auth spec `bug` `duplicate` `has repro` `platform:macos`

#### 🔒 Closed Issues
- [#86464](https://github.com/anthropics/claude-code/issues/86464) [BUG] MCP progress notifications are received but discarded once a call is auto-backgrounded at 120s
- [#97320](https://github.com/anthropics/claude-code/issues/97320) Please delete - posted in error
- [#97318](https://github.com/anthropics/claude-code/issues/97318) [GitHub integration]
- [#97307](https://github.com/anthropics/claude-code/issues/97307) [BUG] cli OAuth error: Invalid code. Please make sure the full code was copied
- [#97287](https://github.com/anthropics/claude-code/issues/97287) [GitHub integration]
- [#97103](https://github.com/anthropics/claude-code/issues/97103) [Bug] Arrow keys switch plugin config tabs instead of cycling option values

### OpenAI Codex (`openai/codex`)

**Stars:** 126,487 · **Open issues:** 18,834 · **Last push:** <1h ago

On September 26, 2026, OpenAI Codex released version rust-v0.157.1, though specific release highlights were unavailable. The previous version, rust-v0.157.0, introduced significant features including GPT-6 Sol and Luna support, default fullscreen transcripts, and automatic background-server startup for eligible interactive sessions. Notable merged pull requests included enhancements such as preserving model and access program pairs during compaction and isolating executable fixture copies in CLI tests on Linux. However, users reported several urgent issues, notably related to 401 Unauthorized errors following the update, which affected Codex’s usability, including problems with API key authentication.

#### 🚀 New Releases
- [rust-v0.157.1](https://github.com/openai/codex/releases/tag/rust-v0.157.1) 0.157.1
- [rust-v0.157.0](https://github.com/openai/codex/releases/tag/rust-v0.157.0) 0.157.0
- [rust-v0.159.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.3) 0.159.0-alpha.3
- [rust-v0.159.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.2) 0.159.0-alpha.2
- [rust-v0.159.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.1) 0.159.0-alpha.1
- [rust-v0.158.0-alpha.15](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.15) 0.158.0-alpha.15
- [rust-v0.158.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.14) 0.158.0-alpha.14
- [rust-v0.158.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.13) 0.158.0-alpha.13

#### ✅ Merged PRs
- [#48318](https://github.com/openai/codex/pull/48318) Keep TUI reconnect attempts running until the shared deadline
- [#48272](https://github.com/openai/codex/pull/48272) Prevent Windows daemon launches from retaining launcher stdio
- [#48238](https://github.com/openai/codex/pull/48238) Suppress console windows for local Windows MCP servers
- [#48229](https://github.com/openai/codex/pull/48229) Extract Responses failure parsing into a dedicated module
- [#48224](https://github.com/openai/codex/pull/48224) Preserve model and access program pairs during compaction
- [#48222](https://github.com/openai/codex/pull/48222) Preserve late result metadata for truncated code-mode calls
- [#48213](https://github.com/openai/codex/pull/48213) Isolate executable fixture copies in CLI tests on Linux
- [#48211](https://github.com/openai/codex/pull/48211) Keep Codex visible during external editor handoff
- [#48207](https://github.com/openai/codex/pull/48207) Preserve queued output for observers during code-mode termination
- [#48206](https://github.com/openai/codex/pull/48206) Add a keep-and-next action to the warnings viewer
- [#48205](https://github.com/openai/codex/pull/48205) Dismiss viewed TUI warnings when closing the viewer
- [#48200](https://github.com/openai/codex/pull/48200) Extract Responses header conversion into a shared module
- [#48199](https://github.com/openai/codex/pull/48199) Keep archived threads with empty previews visible in listings
- [#48198](https://github.com/openai/codex/pull/48198) Honor execution environment proxy requirements
- [#48197](https://github.com/openai/codex/pull/48197) Optimize `blake3` in Bazel fastbuilds
- [#48190](https://github.com/openai/codex/pull/48190) Bound agent message board SSE frames before parsing
- [#48187](https://github.com/openai/codex/pull/48187) Fix zsh alias quoting in sourced shell snapshots
- [#48176](https://github.com/openai/codex/pull/48176) Protect `.aws` directories under sandbox writable roots
- [#48174](https://github.com/openai/codex/pull/48174) Preserve usage limit windows in turn and compaction analytics
- [#48168](https://github.com/openai/codex/pull/48168) Generate unique exec-server process IDs for every request
- [#48158](https://github.com/openai/codex/pull/48158) Fix Guardian retained context spacing and empty assistant handling
- [#48157](https://github.com/openai/codex/pull/48157) Allow Windows daemon launches with residual job membership
- [#48155](https://github.com/openai/codex/pull/48155) Preserve filesystem denials when preparing approved commands
- [#48151](https://github.com/openai/codex/pull/48151) Add item anchors to `thread/items/list` pagination
- [#48143](https://github.com/openai/codex/pull/48143) Preserve executor MCP credential boundaries across reconnects
- [#48141](https://github.com/openai/codex/pull/48141) Preempt model responses when new user input arrives
- [#48138](https://github.com/openai/codex/pull/48138) Suppress console windows when spawning the code-mode host on Windows
- [#48135](https://github.com/openai/codex/pull/48135) Add opt-in code-mode yielding on new user input
- [#48132](https://github.com/openai/codex/pull/48132) Allow Left to open the command center from read-only conversations
- [#48130](https://github.com/openai/codex/pull/48130) Use request notifications in the cloud config loader lifetime test
- [#48123](https://github.com/openai/codex/pull/48123) Add early yielding for code-mode observations
- [#48121](https://github.com/openai/codex/pull/48121) Keep startup drafts visible during command center session handoff
- [#48119](https://github.com/openai/codex/pull/48119) Prevent worker completion races in the guardian authorization test
- [#48118](https://github.com/openai/codex/pull/48118) Add configurable right-click paste to the fullscreen TUI
- [#48116](https://github.com/openai/codex/pull/48116) Allow reasoning shortcuts to reach Max
- [#48115](https://github.com/openai/codex/pull/48115) Preserve user text parts during local compaction
- [#48110](https://github.com/openai/codex/pull/48110) Deduplicate retained instructions in async Guardian context
- [#48109](https://github.com/openai/codex/pull/48109) Deduplicate retained instructions against Guardian transcripts
- [#48101](https://github.com/openai/codex/pull/48101) Show multiline command previews in `/ps`
- [#48100](https://github.com/openai/codex/pull/48100) Add an HTTP client for remote agent message boards
- [#48099](https://github.com/openai/codex/pull/48099) Honor shell environment policy in legacy snapshots
- [#48098](https://github.com/openai/codex/pull/48098) Preserve recent authorization context for Guardian reviews
- [#48078](https://github.com/openai/codex/pull/48078) Replay exec-server shell snapshots through unnamed files
- [#48077](https://github.com/openai/codex/pull/48077) Add Serde support to agent message board request types
- [#48073](https://github.com/openai/codex/pull/48073) Avoid stdin approval for runtime-only permission grants
- [#48072](https://github.com/openai/codex/pull/48072) Skip message-board notification previews when there are no recipients
- [#48069](https://github.com/openai/codex/pull/48069) Handle early command yields in the Guardian network approval test
- [#48060](https://github.com/openai/codex/pull/48060) Deduplicate retained instructions across Guardian reviews
- [#48035](https://github.com/openai/codex/pull/48035) Remove plugin extension metadata from discovery and summaries
- [#48017](https://github.com/openai/codex/pull/48017) Test same-cell permission grants and strict review in code mode

#### 🐛 New Issues
- [#48237](https://github.com/openai/codex/issues/48237) unexpected status 401 Unauthorized issue `bug` `auth` 💬93
- [#48043](https://github.com/openai/codex/issues/48043) [BUG] Codex CLI 0.157.0 fails to start on Windows with daemon privilege error (0.156.1 works) `bug` `windows-os` `CLI` `app-server` 💬9
- [#48059](https://github.com/openai/codex/issues/48059) [Windows][Codex CLI 0.157.0] Terminal windows repeatedly pop up during normal use `bug` `windows-os` `CLI` `app-server` 💬4
- [#48090](https://github.com/openai/codex/issues/48090) Windows managed daemon opens two visible console windows when starting Codex CLI `bug` `windows-os` `CLI` `app-server` 💬10
- [#48277](https://github.com/openai/codex/issues/48277) CLI: about 20 persistent terminal windows keep opening after an update, including while manually closing them `bug` `CLI` `Windows` 💬6
- [#48212](https://github.com/openai/codex/issues/48212) [Linux Desktop] 26.924.20706 Codex tasks stuck on "Starting your task"; CLI works `bug` `app` `app-server` 💬3
- [#48295](https://github.com/openai/codex/issues/48295) ChatGPT Pro OAuth succeeds, but Codex sends `sk-svcac...` credential and gets 401 — reproducible with clean CODEX_HOME `bug` `auth` `CLI` 💬6
- [#48305](https://github.com/openai/codex/issues/48305) URGENT: Codex Completely Unusable After Today’s Update – 401 Unauthorized / Invalid sk-svcacct Credential `bug` `auth` `app` 💬3
- [#48284](https://github.com/openai/codex/issues/48284) Unable to open previous chats or start new ones `bug` `app` `session` 💬3
- [#48126](https://github.com/openai/codex/issues/48126) GitHub plugin connection fails with “This app currently does not provide a browser setup URL” `bug` `windows-os` `auth` `app` 💬3
- [#48225](https://github.com/openai/codex/issues/48225) [Linux][Fedora Silverblue 44] 26.924.20706 regression: chats stuck loading, terminal unavailable, Git changes panel missing `bug` `app` `app-server` 💬2
- [#48306](https://github.com/openai/codex/issues/48306) Codex /responses returns 401 invalid_api_key with invariant sk-svcacct credential on a ChatGPT Plus account `bug` `windows-os` `auth` `app` 💬3
- [#48290](https://github.com/openai/codex/issues/48290) Problems with /compact authentication. It saids that im using a wrong API Key but thats incorrect cause im logged in with ChatGPT `bug` `auth` `CLI` `context` 💬3
- [#48285](https://github.com/openai/codex/issues/48285) Codex macOS app stuck reconnecting and returns 401 Unauthorized / incorrect sk-svcac API key `bug` `auth` `app` `connectivity` 💬3
- [#48308](https://github.com/openai/codex/issues/48308) # Bug Report: Codex 401 Unauthorized Error While Using ChatGPT Authentication `bug` `windows-os` `auth` `app` 💬2
- [#48313](https://github.com/openai/codex/issues/48313) [Windows][26.924.1866.0] App launches to a permanent blank white screen after update `bug` `windows-os` `app` 💬2
- [#48316](https://github.com/openai/codex/issues/48316) Codex Desktop on Windows silently replaces runtime executable, causing firewall block and misleading 401 API-key error `bug` `windows-os` `auth` `app` 💬1
- [#48299](https://github.com/openai/codex/issues/48299) Codex CLI 0.157.0: ChatGPT login succeeds, but requests fail with 401 using stale sk-svcac credential `bug` `auth` `CLI` `connectivity` 💬2
- [#48301](https://github.com/openai/codex/issues/48301) [Windows] Codex unusable in both Desktop and VS Code after recent update/backend failure `bug` `windows-os` `app` 💬2
- [#48215](https://github.com/openai/codex/issues/48215) Windows desktop app: uncaught "write EPIPE" in IpcRouter on every update restart `bug` `windows-os` `app` 💬1
- [#48319](https://github.com/openai/codex/issues/48319) Windows: Codex app sandbox setup/migration suspected of machine-wide ACL changes (Access denied for SYSTEM services and the user), leading to an unbootable PC `bug` `windows-os` `sandbox` `app` 💬1
- [#48317](https://github.com/openai/codex/issues/48317) Show the messages between main agent and subagent `enhancement` `app` `subagent` 💬1
- [#48315](https://github.com/openai/codex/issues/48315) Tmux native scroll is broken after update `bug` `TUI` `CLI` 💬1
- [#48310](https://github.com/openai/codex/issues/48310) codex-cli spawns many sub-process without windowstyle hidden `bug` `windows-os` `CLI` 💬1
- [#48312](https://github.com/openai/codex/issues/48312) [Windows] Auth reset after token_revoked strands valid local history with no import or reindex path `bug` `windows-os` `auth` `app` 💬1
- [#48309](https://github.com/openai/codex/issues/48309) Windows desktop: left sidebar cannot scroll by wheel, keyboard, or scrollbar drag `bug` `windows-os` `app` 💬1
- [#48304](https://github.com/openai/codex/issues/48304) [VS Code][Windows][Auth/Compaction] Remote compaction v2 returns 401 with sk-svcac credential; auth recovery not run `bug` `windows-os` `extension` `auth` 💬1
- [#48307](https://github.com/openai/codex/issues/48307) [Windows 11] Codex Desktop 26.924.20706: 401 Incorrect API key across all projects with ChatGPT sign-in `bug` `windows-os` `auth` `app` 💬1
- [#48302](https://github.com/openai/codex/issues/48302) [Windows] Codex 0.157.0 returns 401 with sk-svcac credential; downgrading CLI to 0.148.0 also restores Desktop auth `bug` `windows-os` `auth` `CLI` 💬1
- [#48298](https://github.com/openai/codex/issues/48298) [Windows] Codex Desktop/Work returns 401 `Incorrect API key` (`sk-svcac...`) while signed in with ChatGPT `bug` `windows-os` `auth` `app` 💬1
- [#48321](https://github.com/openai/codex/issues/48321) Add --effort CLI option for shared app-server sessions
- [#48320](https://github.com/openai/codex/issues/48320) [macOS/Windows 11] Project chats appear in global Recents; iOS and ChatGPT Classic still keep them separated `bug` `app` `session`
- [#48314](https://github.com/openai/codex/issues/48314) Desktop app (Windows, MSIX): codex_app MCP server fails to start — bundled plugin installed without server.mjs `bug` `windows-os` `mcp` `app`
- [#48311](https://github.com/openai/codex/issues/48311) [Windows] Built-in LaTeX compiler fails: Unable to find standard directories for platform `bug` `windows-os` `tool-calls` `app`
- [#48303](https://github.com/openai/codex/issues/48303) ChatGPT auth: every retry attempt runs a full reload+refresh auth recovery, so one failed turn triggers 6 oauth/token refreshes and 18 /responses calls `bug` `auth` `CLI` `connectivity`

#### 🔒 Closed Issues
- [#48295](https://github.com/openai/codex/issues/48295) ChatGPT Pro OAuth succeeds, but Codex sends `sk-svcac...` credential and gets 401 — reproducible with clean CODEX_HOME
- [#48284](https://github.com/openai/codex/issues/48284) Unable to open previous chats or start new ones
- [#48126](https://github.com/openai/codex/issues/48126) GitHub plugin connection fails with “This app currently does not provide a browser setup URL”
- [#48290](https://github.com/openai/codex/issues/48290) Problems with /compact authentication. It saids that im using a wrong API Key but thats incorrect cause im logged in with ChatGPT
- [#48285](https://github.com/openai/codex/issues/48285) Codex macOS app stuck reconnecting and returns 401 Unauthorized / incorrect sk-svcac API key
- [#48299](https://github.com/openai/codex/issues/48299) Codex CLI 0.157.0: ChatGPT login succeeds, but requests fail with 401 using stale sk-svcac credential
- [#48310](https://github.com/openai/codex/issues/48310) codex-cli spawns many sub-process without windowstyle hidden
- [#48304](https://github.com/openai/codex/issues/48304) [VS Code][Windows][Auth/Compaction] Remote compaction v2 returns 401 with sk-svcac credential; auth recovery not run
- [#48298](https://github.com/openai/codex/issues/48298) [Windows] Codex Desktop/Work returns 401 `Incorrect API key` (`sk-svcac...`) while signed in with ChatGPT

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,167 · **Open issues:** 811 · **Last push:** 2h ago

On September 26, 2026, Gemini CLI released v0.62.0-nightly.20260925.gbedef96ef, which included updates such as detailed changelogs for prior versions v0.61.0-preview.1 and v0.61.0, along with a fix to better distinguish between missing MCP enablement configurations and malformed JSON. Significant merged pull requests included #29506, which addressed policy redirection gates and path validation, and #29437, which improved resource management by cleaning up temporary directories after background shell executions. Additionally, version bumping for v0.63.0-nightly.20260923.gf50ba8608 was executed, along with a fix to remove an invalid diff.external override in #29467. No new issues were reported today, indicating a smooth operational day for the Gemini CLI.

#### 🚀 New Releases
- [v0.62.0-nightly.20260925.gbedef96ef](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260925.gbedef96ef) Release v0.62.0-nightly.20260925.gbedef96ef

#### ✅ Merged PRs
- [#29506](https://github.com/google-gemini/gemini-cli/pull/29506) fix(core): align policy redirection gates, path validation, and workflow parsing
- [#29463](https://github.com/google-gemini/gemini-cli/pull/29463) fix(acp): resolve session before config initialization and avoid same-minute filename collisions
- [#29437](https://github.com/google-gemini/gemini-cli/pull/29437) fix(core): clean up temporary directory when background shell execution exits
- [#29470](https://github.com/google-gemini/gemini-cli/pull/29470) Changelog for v0.62.0-preview.0
- [#29471](https://github.com/google-gemini/gemini-cli/pull/29471) chore(release): bump version to 0.63.0-nightly.20260923.gf50ba8608
- [#29467](https://github.com/google-gemini/gemini-cli/pull/29467) fix(core): remove invalid diff.external override

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,210 · **Open issues:** 2,252 · **Last push:** 4h ago

On September 26, 2026, GitHub Copilot CLI released version 1.0.89-4, which introduced new features such as auto-suggestions for routing tiers and a quick feedback prompt after switching to a manually selected model. Improvements included the ability to enable and disable direct plugin installs, while a fix was made to ensure the auto tier selection cycles correctly in the /model command. No pull requests were merged in the last 24 hours, but several new issues were reported, including #4969, which addresses a plugin marketplace failure when a single plugin description exceeds 1024 characters, and #4968, which highlights a port mismatch in the OAuth redirect URI affecting logins to MCP servers.

#### 🚀 New Releases
- [v1.0.89-4](https://github.com/github/copilot-cli/releases/tag/v1.0.89-4) 1.0.89-4

#### 🐛 New Issues
- [#4969](https://github.com/github/copilot-cli/issues/4969) plugin marketplace add fails entirely if any single plugin description exceeds 1024 chars `triage` 💬1
- [#4971](https://github.com/github/copilot-cli/issues/4971) Every hour I get Authorization error. Your credentials may be expired or invalid `triage`
- [#4970](https://github.com/github/copilot-cli/issues/4970) OTel: parent chat spans keep the last subagent model in gen_ai.request.model `triage`
- [#4968](https://github.com/github/copilot-cli/issues/4968) OAuth redirect URI port mismatch breaks login to most MCP servers `triage`
- [#4967](https://github.com/github/copilot-cli/issues/4967) feat(otel): allow Copilot CLI agents to enrich native spans with delivery context `triage`
- [#4966](https://github.com/github/copilot-cli/issues/4966) 1.0.88 regression: joinSession() stalls during extension startup, causing repeated 30s timeouts and delaying -i `triage`

#### 🔒 Closed Issues
- [#3501](https://github.com/github/copilot-cli/issues/3501) Scroll bar makes text unalign
- [#3123](https://github.com/github/copilot-cli/issues/3123) /research can't write it's research report
- [#2199](https://github.com/github/copilot-cli/issues/2199) Add Ctrl+Backspace key combo to delete whole word
- [#4103](https://github.com/github/copilot-cli/issues/4103) Plugin marketplace clone disables Git credential helpers, breaking private HTTPS repositories
- [#1569](https://github.com/github/copilot-cli/issues/1569) Agent Implementing in Plan Mode
- [#1373](https://github.com/github/copilot-cli/issues/1373) .github/lsp.json reports issues, while identical config works OK in ~/.copilot/lsp-config.json
- [#1023](https://github.com/github/copilot-cli/issues/1023) Feature: Prompt injection hooks for model
- [#1527](https://github.com/github/copilot-cli/issues/1527) CLI reads the same custom instruction files twice when run outside of a git repository
- [#4089](https://github.com/github/copilot-cli/issues/4089) Atlassian MCP server: OAuth succeeds but zero tools exposed to sessions
- [#2689](https://github.com/github/copilot-cli/issues/2689) Feature request: config option to exclude skill scan locations and/or support namespaced skill names (e.g. `ck:name`)
- [#4887](https://github.com/github/copilot-cli/issues/4887) GitHub Copilot CLI in Model mode Auto returns error if you are using /btw or /ask command
- [#3053](https://github.com/github/copilot-cli/issues/3053) Copilot selects wrong reasoning effort when changing from a different model
- [#1695](https://github.com/github/copilot-cli/issues/1695) Overusage display
- [#4440](https://github.com/github/copilot-cli/issues/4440) Read `.claude/rules`
- [#2927](https://github.com/github/copilot-cli/issues/2927) Session permanently lost after uncontrolled laptop shutdown — null bytes + metadata corruption still unhandled in v1.0.35
- [#2885](https://github.com/github/copilot-cli/issues/2885) /ask responses should not prompt for follow-up interaction
- [#2647](https://github.com/github/copilot-cli/issues/2647) preToolUse "ask" feedback is not shown to the agent
- [#1793](https://github.com/github/copilot-cli/issues/1793) skills warnings and errors distort the /skills menu
- [#4831](https://github.com/github/copilot-cli/issues/4831) One pasted image and claude-opus-5 won't look at any more images

### OpenCode (`anomalyco/opencode`)

**Stars:** 210,073 · **Open issues:** 6,253 · **Last push:** <1h ago

On September 26, 2026, there were no releases for OpenCode, but several significant pull requests were merged, including a core refactor to share a browser opener between the main project and the TUI (#51414) and another refactor that extends this functionality across the CLI, TUI, and core components (#51412). Additionally, a fix was made for decoding legacy media in compaction checkpoints (#51409). Among the new issues raised, the most noteworthy is #51419, which reports an incorrect API key being provided, potentially impacting user access and functionality. Also, there are discussions around developing a feature for an element annotation queue with visual markers, similar to Codex, under issue #51421.

#### ✅ Merged PRs
- [#51414](https://github.com/anomalyco/opencode/pull/51414) refactor(core): share a browser opener across opencode and tui
- [#51409](https://github.com/anomalyco/opencode/pull/51409) fix(core): decode legacy media in compaction checkpoints
- [#51412](https://github.com/anomalyco/opencode/pull/51412) refactor(util): share a browser opener across cli, tui, and core

#### 🐛 New Issues
- [#51419](https://github.com/anomalyco/opencode/issues/51419) Incorrect API key provided: sk `needs:compliance` 💬7
- [#51421](https://github.com/anomalyco/opencode/issues/51421) [FEATURE]: Element annotation queue with visual markers (Codex-like) 💬3
- [#51306](https://github.com/anomalyco/opencode/issues/51306) Zen Go /v1/responses returns 503 for GLM-5.3 and GLM-5.3-Flash 💬3
- [#51423](https://github.com/anomalyco/opencode/issues/51423) App frequently becomes unresponsive when opening a session in Desktop V2 💬2
- [#51361](https://github.com/anomalyco/opencode/issues/51361) [BUG]: Subagent (task) dispatch never uses the main agent's current model — main/sub model mismatch 💬2
- [#51341](https://github.com/anomalyco/opencode/issues/51341) config: instructions field does not load instruction files (v2.0.16) 💬2
- [#51420](https://github.com/anomalyco/opencode/issues/51420) AI having rigid "developer constraints" 💬2
- [#51404](https://github.com/anomalyco/opencode/issues/51404) session: legacy sessions written after the v2 backfill are never re-imported 💬2
- [#51411](https://github.com/anomalyco/opencode/issues/51411) Bug: stale event sequence permanently rejects new session events 💬2
- [#51403](https://github.com/anomalyco/opencode/issues/51403) Zen - Members cannot create their own api keys 💬2
- [#51268](https://github.com/anomalyco/opencode/issues/51268) subagent: local models receive no tool definitions — single-turn text reply, 0 tool calls 💬2
- [#51274](https://github.com/anomalyco/opencode/issues/51274) Preview URL fails with "Relay tunnel is not connected" : Not able to access the URL : 521 Development VM is offline 💬2
- [#51391](https://github.com/anomalyco/opencode/issues/51391) error on deepseek opencode go global zone 💬2
- [#51343](https://github.com/anomalyco/opencode/issues/51343) core: 60m idle location eviction interrupts a running session and rejects pending questions 💬2
- [#51381](https://github.com/anomalyco/opencode/issues/51381) TUI crash: TextBuffer is destroyed 💬2
- [#51427](https://github.com/anomalyco/opencode/issues/51427) skills: documented slash frontmatter is not implemented in v2.0.18 `needs:compliance` 💬1
- [#51428](https://github.com/anomalyco/opencode/issues/51428) لا يوجد اتصال هل يوجد حل لهذه المشكله `needs:compliance` 💬1
- [#51425](https://github.com/anomalyco/opencode/issues/51425) Windows: plugin install staging dirs (packages/<spec>.staging-*) leak unbounded — ~38 GB accumulated `needs:compliance` 💬1
- [#51424](https://github.com/anomalyco/opencode/issues/51424) OpenCode Go models return "Insufficient account funds" with active subscription and 0% usage 💬1
- [#51416](https://github.com/anomalyco/opencode/issues/51416) [FEATURE]: Expose the LSP runtime to plugins (ctx.lsp) 💬1
- [#51415](https://github.com/anomalyco/opencode/issues/51415) Attention sound plays once per open TUI window, overlapping into a chorus 💬1
- [#51410](https://github.com/anomalyco/opencode/issues/51410) [FEATURE]: v2 plugin API: expose credential list/activate on ctx.integration 💬1
- [#51408](https://github.com/anomalyco/opencode/issues/51408) Preview relay tunnel is not connected (request_preview) 💬1
- [#51398](https://github.com/anomalyco/opencode/issues/51398) [Bug] Auto-approve permissions is not sticky for long autonomous runs — agent stalls on permission prompt without the user noticing 💬1
- [#51399](https://github.com/anomalyco/opencode/issues/51399) [FEATURE]: Documented, user-facing "full-auto" mode for unattended agents (Claude Code parity) 💬1
- [#51396](https://github.com/anomalyco/opencode/issues/51396) v2 2.0.16: todowrite state not persisted to project-todos store — client UI (OpenChamber) todo panel always empty 💬1
- [#51397](https://github.com/anomalyco/opencode/issues/51397) pty: console panel stays black - POST /api/pty fails with TypeError in Pty.create 💬1
- [#51395](https://github.com/anomalyco/opencode/issues/51395) [OpenCode Go] Account blocked, support unanswered, subscription charged while blocked 💬1
- [#51392](https://github.com/anomalyco/opencode/issues/51392) [FEATURE]: TUI plugin API (v2): a way to take text input, including paste 💬1
- [#51400](https://github.com/anomalyco/opencode/issues/51400) desktop: notification counter on Ubuntu dock increments every turn and never clears
- [#51393](https://github.com/anomalyco/opencode/issues/51393) [FEATURE]: Docs: add opencode-cockpit to the Ecosystem page

#### 🔒 Closed Issues
- [#42759](https://github.com/anomalyco/opencode/issues/42759) GitHub Copilot grok-4.5 fails: not accessible via /chat/completions
- [#51306](https://github.com/anomalyco/opencode/issues/51306) Zen Go /v1/responses returns 503 for GLM-5.3 and GLM-5.3-Flash
- [#51219](https://github.com/anomalyco/opencode/issues/51219) Cant use free version after upgrading
- [#44103](https://github.com/anomalyco/opencode/issues/44103) fix(github-copilot): Grok models get endpoint error due to defaulting to generic OpenAI SDK
- [#51361](https://github.com/anomalyco/opencode/issues/51361) [BUG]: Subagent (task) dispatch never uses the main agent's current model — main/sub model mismatch
- [#51420](https://github.com/anomalyco/opencode/issues/51420) AI having rigid "developer constraints"
- [#51404](https://github.com/anomalyco/opencode/issues/51404) session: legacy sessions written after the v2 backfill are never re-imported
- [#51403](https://github.com/anomalyco/opencode/issues/51403) Zen - Members cannot create their own api keys
- [#51391](https://github.com/anomalyco/opencode/issues/51391) error on deepseek opencode go global zone
- [#51381](https://github.com/anomalyco/opencode/issues/51381) TUI crash: TextBuffer is destroyed
- [#49059](https://github.com/anomalyco/opencode/issues/49059) Windows arm64 desktop installer (1.18.31) never places OpenCode.exe; x64 is fine

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,133 · **Open issues:** 1,486 · **Last push:** <1h ago

On September 26, 2026, Qwen Code released v0.24.6, introducing several enhancements such as the addition of the Hosted Harness private client and a managed runtime attestation client in the SDK for Java. The desktop version also saw updates, including improved session diagnostics and functionality for the web-shell. Noteworthy merged features included the Durable Managed Session journal and failover capabilities, alongside a refreshed Managing Runtime contract in the CLI. However, the day brought attention to a significant issue regarding the fresh global installation of ripgrep, with users reporting that it shipped without the correct execute bit, leading to execution errors in self-update processes.

#### 🚀 New Releases
- [v0.24.6](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.6) Release v0.24.6
- [desktop-v0.24.6](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.6) Qwen Code Desktop v0.24.6
- [v0.24.5-nightly.20260925.c3a4058a0c](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.5-nightly.20260925.c3a4058a0c) Release v0.24.5-nightly.20260925.c3a4058a0c

#### ✅ Merged PRs
- [#12722](https://github.com/QwenLM/qwen-code/pull/12722) chore(release): v0.24.6
- [#12700](https://github.com/QwenLM/qwen-code/pull/12700) feat(cli): Define the managed-context/1 envelope contract
- [#12693](https://github.com/QwenLM/qwen-code/pull/12693) feat(core): Durable Managed Session journal and failover
- [#12692](https://github.com/QwenLM/qwen-code/pull/12692) feat(managed-agent): Spring control plane and dual-path WebShell
- [#12689](https://github.com/QwenLM/qwen-code/pull/12689) fix(core): rank PreToolUse permissionDecision most-restrictive in hook aggregation
- [#12688](https://github.com/QwenLM/qwen-code/pull/12688) feat: complete Advisor consultation behavior and usage limits
- [#12681](https://github.com/QwenLM/qwen-code/pull/12681) feat(sdk-java): Add the W0a Managed Workspace binding contract
- [#12680](https://github.com/QwenLM/qwen-code/pull/12680) perf(cli): keep running in place when env files only hold model credentials
- [#12675](https://github.com/QwenLM/qwen-code/pull/12675) fix(cli): resolve npm's global config when npm refuses to print it
- [#12674](https://github.com/QwenLM/qwen-code/pull/12674) feat(scripts): check in the startup benchmark harness
- [#12673](https://github.com/QwenLM/qwen-code/pull/12673) fix(cli): restore ripgrep exec bit on managed npm update activation
- [#12671](https://github.com/QwenLM/qwen-code/pull/12671) feat(cli): Mount the v2 tool operations on the Managed Runtime worker
- [#12666](https://github.com/QwenLM/qwen-code/pull/12666) fix(cli): notify when the Linux clipboard tool is found but its query fails
- [#12656](https://github.com/QwenLM/qwen-code/pull/12656) test(java): wait for a renewal at the advanced time in lease renewal tests
- [#12653](https://github.com/QwenLM/qwen-code/pull/12653) chore(desktop): rename packages/desktop-shell to packages/desktop
- [#12649](https://github.com/QwenLM/qwen-code/pull/12649) fix(standalone): pin @lydell/node-pty-linux-arm64 and fail release on missing prebuilds
- [#12638](https://github.com/QwenLM/qwen-code/pull/12638) perf(serve): coalesce in-flight extension status loads
- [#12637](https://github.com/QwenLM/qwen-code/pull/12637) feat(sdk-java): Add the v2 tool operations to the runtime transport
- [#12636](https://github.com/QwenLM/qwen-code/pull/12636) fix(web-shell): allow deleting the current session from sidebar and picker
- [#12630](https://github.com/QwenLM/qwen-code/pull/12630) feat(cli): Declare the v2 execute/status/cancel Managed Runtime contract
- [#12627](https://github.com/QwenLM/qwen-code/pull/12627) feat(sdk-java): Reconcile and adopt restored Runtime bindings
- [#12626](https://github.com/QwenLM/qwen-code/pull/12626) fix(web-shell): fall back to a plain draft for New task in a Live chat without a draft target
- [#12622](https://github.com/QwenLM/qwen-code/pull/12622) perf(cli): halve fresh-startup time to typeable and cut RSS by 60%
- [#12605](https://github.com/QwenLM/qwen-code/pull/12605) fix(cli): keep one-shot system-reminder prefixes out of shell mode
- [#12540](https://github.com/QwenLM/qwen-code/pull/12540) fix(cli): close the deferred /context accounting follow-ups
- [#12539](https://github.com/QwenLM/qwen-code/pull/12539) fix(core): keep the deferred-tool bridge halves on the same tool
- [#12492](https://github.com/QwenLM/qwen-code/pull/12492) feat(cli): agent-prepared Batch API workflow (/batch-api)
- [#10942](https://github.com/QwenLM/qwen-code/pull/10942) feat(cli): list managed Agent View sessions in qwen sessions ps
- [#9636](https://github.com/QwenLM/qwen-code/pull/9636) feat: add native advisor tool
- [#9531](https://github.com/QwenLM/qwen-code/pull/9531) fix(cli): make the Agent Team teammate tab transcript scrollable in VP mode

#### 🐛 New Issues
- [#12679](https://github.com/QwenLM/qwen-code/issues/12679) Fresh global install ships vendored ripgrep at 0644 — no path restores the exec bit (self-update heal does not cover it) `priority/P1` `type/bug` `category/platform` `scope/installation` 💬4
- [#12699](https://github.com/QwenLM/qwen-code/issues/12699) [Bug] web_fetch: https-upgrade fallback misses EHOSTUNREACH/ENETUNREACH, plain-http hosts unreachable on 443 never retried `priority/P3` `type/bug` `category/tools` `scope/web-search` 💬4
- [#12683](https://github.com/QwenLM/qwen-code/issues/12683) PreToolUse hook decisions race: with multiple hooks on one tool call, the last-completed hook wins — a deny can be silently overridden by another hook's allow `priority/P1` `type/bug` `category/security` `scope/settings` 💬4
- [#12668](https://github.com/QwenLM/qwen-code/issues/12668) Self-update drops execute bit on vendored ripgrep binaries - EACCES, ripgrep unavailable `priority/P1` `type/bug` `category/platform` `scope/installation` 💬4
- [#12687](https://github.com/QwenLM/qwen-code/issues/12687) Update failed `priority/P2` `type/bug` `category/platform` `scope/installation` 💬4
- [#12721](https://github.com/QwenLM/qwen-code/issues/12721) refactor(core): consolidate the hand-mirrored copies of the subagent tool-declaration policy `priority/P3` `category/core` `type/enhancement` `roadmap/subagents-tools` 💬3
- [#12720](https://github.com/QwenLM/qwen-code/issues/12720) web_fetch: connection-level classification reads only the top-level code of an AggregateError, so multi-address https→http fallback is attempt-order dependent `priority/P3` `type/bug` `category/tools` `scope/web-search` 💬3
- [#12714](https://github.com/QwenLM/qwen-code/issues/12714) Main CI failed: Qwen Code CI — src/llm.test.tsx > … > routes 'plain one-shot prompt' to 'in-process' (+145 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬3
- [#12716](https://github.com/QwenLM/qwen-code/issues/12716) docs: seven dead links in the GitHub Action, extensions, and privacy pages `priority/P3` `type/documentation` `category/integration` `scope/extensions` 💬3
- [#12710](https://github.com/QwenLM/qwen-code/issues/12710) VS Code companion: edited sent message disappears from the chat view after sending the edit `priority/P2` `type/bug` `category/ui` `scope/vscode` 💬3
- [#12707](https://github.com/QwenLM/qwen-code/issues/12707) qwen batch: follow-ups deferred from the #12492 maintainer verification `priority/P3` `status/blocked` `type/bug` `category/cli` 💬3
- [#12704](https://github.com/QwenLM/qwen-code/issues/12704) docs: reconcile prompt verification runbooks after second-pass compression `priority/P3` `type/documentation` `category/core` `scope/documentation` 💬3
- [#12701](https://github.com/QwenLM/qwen-code/issues/12701) test(core): cover unfinished invocation guard before turn reclamation `priority/P3` `status/blocked` `category/development` `scope/testing` 💬3
- [#12702](https://github.com/QwenLM/qwen-code/issues/12702) fix(core): deferred tools lose their "use me instead of X" rules — guidance line gated away, reminder keeps only description line 1 `priority/P2` `type/bug` `category/core` `need-discussion` 💬3
- [#12696](https://github.com/QwenLM/qwen-code/issues/12696) feat(web-shell): guide desktop relay connection from HTTP IP access `priority/P3` `status/blocked` `type/feature-request` `category/ui` 💬3
- [#12690](https://github.com/QwenLM/qwen-code/issues/12690) feat(desktop): extend the PATH of the daemon shell the Desktop spawns on macOS `priority/P2` `type/feature-request` `category/platform` `scope/shell` 💬3
- [#12682](https://github.com/QwenLM/qwen-code/issues/12682) feat(web-shell): quote a selected part of a message into the prompt composer `priority/P3` `type/feature-request` `category/ui` `scope/web-shell` 💬3
- [#12677](https://github.com/QwenLM/qwen-code/issues/12677) follow-up(batch-api): test gaps and robustness items deferred from #12492 `priority/P3` `status/blocked` `type/feature-request` `category/cli` 💬3
- [#12678](https://github.com/QwenLM/qwen-code/issues/12678) desktop release: the node-pty degrade warning names the prebuild package even when the missing pin is @lydell/node-pty `priority/P3` `type/bug` `category/platform` `scope/packaging` 💬3
- [#12670](https://github.com/QwenLM/qwen-code/issues/12670) Runtime Broker: an execution in flight at host reboot pins the LOST binding forever `priority/P2` `type/bug` `category/core` `need-discussion` 💬3
- [#12669](https://github.com/QwenLM/qwen-code/issues/12669) web-shell: delete the current no-workspace session by leaving it first (option B follow-up to #12636) `priority/P3` `type/feature-request` `category/ui` `scope/session-management` 💬3
- [#12708](https://github.com/QwenLM/qwen-code/issues/12708) Deferred review findings from PR #12615: fix(serve): Restore transcript reads for standalone sessions 💬2

#### 🔒 Closed Issues
- [#11872](https://github.com/QwenLM/qwen-code/issues/11872) Web Terminal shows "[Error: PTY not available]" — @lydell/node-pty is declared but not bundled, and macOS code signing blocks locally installed prebuilds
- [#10603](https://github.com/QwenLM/qwen-code/issues/10603) ToolSearch will trigger full-prompt reprocessing (prefill).
- [#12683](https://github.com/QwenLM/qwen-code/issues/12683) PreToolUse hook decisions race: with multiple hooks on one tool call, the last-completed hook wins — a deny can be silently overridden by another hook's allow
- [#12668](https://github.com/QwenLM/qwen-code/issues/12668) Self-update drops execute bit on vendored ripgrep binaries - EACCES, ripgrep unavailable
- [#12619](https://github.com/QwenLM/qwen-code/issues/12619) Web Shell and Desktop cannot delete the currently selected session
- [#12620](https://github.com/QwenLM/qwen-code/issues/12620) New task in a Live Voice session fails with "Live Voice is unavailable"
- [#11626](https://github.com/QwenLM/qwen-code/issues/11626) fix(cli): system-reminder prefixes reach bash in shell mode
- [#9507](https://github.com/QwenLM/qwen-code/issues/9507) Agent Team: teammate tab output isn't scrollable — content that scrolls off screen is permanently lost

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments
- [#1703](https://github.com/anthropics/skills/pull/1703) Add md2video-audio skill

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 390,523 · **Open issues:** 8,657 · **Last push:** <1h ago

On September 26, 2026, there were no new releases for OpenClaw, but several critical merged pull requests improved the project's performance and reliability. Notable changes included a fix for maintaining native session responsiveness during database contention (#158396) and an enhancement that skips unchanged streaming snapshot preparations (#158492). Additionally, a fix ensured OAuth refresh after original turn ends (#158458), improving user experience. Among new issues, #157842 emerged, highlighting a memory retention problem in the prepared-model-catalog worker that persists 77 MB per agent turn, exceeding its 512 MB limit.

#### ✅ Merged PRs
- [#158396](https://github.com/openclaw/openclaw/pull/158396) fix: keep native sessions responsive during database contention
- [#158492](https://github.com/openclaw/openclaw/pull/158492) improve(chat): skip unchanged streaming snapshot preparation
- [#158444](https://github.com/openclaw/openclaw/pull/158444) perf(state): reduce path normalization during session reads
- [#158458](https://github.com/openclaw/openclaw/pull/158458) fix(codex): refresh OAuth after the original turn ends
- [#158430](https://github.com/openclaw/openclaw/pull/158430) refactor(azure-speech): consolidate voice timeout tests
- [#158451](https://github.com/openclaw/openclaw/pull/158451) fix(update): guard config-read children without import.meta.url queries and transport results without fd 3
- [#158423](https://github.com/openclaw/openclaw/pull/158423) refactor(gateway): own companion timed work in the kernel scheduler
- [#157543](https://github.com/openclaw/openclaw/pull/157543) fix(gateway): keep Incognito agent turns out of task records and logs
- [#150621](https://github.com/openclaw/openclaw/pull/150621) fix(workers): discard SSH identities after their invocation closes
- [#158493](https://github.com/openclaw/openclaw/pull/158493) refactor(deepgram): remove duplicate JSON syntax test
- [#158498](https://github.com/openclaw/openclaw/pull/158498) chore(ui): refresh control ui locales
- [#156919](https://github.com/openclaw/openclaw/pull/156919) fix: return child followup results after yielding
- [#144511](https://github.com/openclaw/openclaw/pull/144511) fix(codex): release compaction writer before continuation
- [#158452](https://github.com/openclaw/openclaw/pull/158452) fix(qa): allow standalone utility completions after observing sessions
- [#158448](https://github.com/openclaw/openclaw/pull/158448) fix(cli): finish help rendering after descendants exit
- [#158480](https://github.com/openclaw/openclaw/pull/158480) fix(codex): restore Computer Use after signed Desktop layout updates
- [#158311](https://github.com/openclaw/openclaw/pull/158311) fix(qa): diagnose missing cached Convex launchers
- [#158462](https://github.com/openclaw/openclaw/pull/158462) refactor(elevenlabs): consolidate HTTP diagnostic tests
- [#156558](https://github.com/openclaw/openclaw/pull/156558) refactor(lmstudio): consolidate preload tests and join cleanup
- [#157946](https://github.com/openclaw/openclaw/pull/157946) feat: show plugin tool inputs in detail previews
- [#158453](https://github.com/openclaw/openclaw/pull/158453) fix(qa): restore exact file approval transport coverage
- [#158422](https://github.com/openclaw/openclaw/pull/158422) fix(doctor): compare Windows task definitions by Task Scheduler semantics
- [#157690](https://github.com/openclaw/openclaw/pull/157690) fix(state): legacy identity migration fails without native moves
- [#158457](https://github.com/openclaw/openclaw/pull/158457) fix(clawrouter): enable transport logs in managed Gateway test
- [#158349](https://github.com/openclaw/openclaw/pull/158349) test: speed up PR publication recovery fixtures
- [#158456](https://github.com/openclaw/openclaw/pull/158456) fix(whatsapp): prevent undefined close reasons in connection tests
- [#156946](https://github.com/openclaw/openclaw/pull/156946) docs: keep release policy public and maintainer procedures in skills
- [#155072](https://github.com/openclaw/openclaw/pull/155072) fix(computer): blank selectors prevent computer tool calls
- [#158425](https://github.com/openclaw/openclaw/pull/158425) perf(auth): avoid rewriting every paired device during reconnect
- [#158368](https://github.com/openclaw/openclaw/pull/158368) fix: keep native PR checks on the captured main base
- [#158338](https://github.com/openclaw/openclaw/pull/158338) fix: Git updates fail on abandoned plugin runtime staging
- [#158420](https://github.com/openclaw/openclaw/pull/158420) perf(gateway): keep large chat uploads responsive
- [#158164](https://github.com/openclaw/openclaw/pull/158164) refactor(channels): deslop telegram, matrix and feishu second pass
- [#158440](https://github.com/openclaw/openclaw/pull/158440) fix(test): avoid unhandled catalog startup rejection
- [#158455](https://github.com/openclaw/openclaw/pull/158455) fix(update): keep config field details and distinguish read failures from invalid config
- [#158286](https://github.com/openclaw/openclaw/pull/158286) fix: keep gateway running when native completions hit database contention
- [#158217](https://github.com/openclaw/openclaw/pull/158217) refactor(ui): retire the global Tasks workspace
- [#158410](https://github.com/openclaw/openclaw/pull/158410) perf(agents): keep buffered Anthropic streams responsive
- [#158404](https://github.com/openclaw/openclaw/pull/158404) perf(gateway): keep roster discovery off the main thread
- [#158365](https://github.com/openclaw/openclaw/pull/158365) refactor: reuse shared readers, replay helpers, and deadlines
- [#158466](https://github.com/openclaw/openclaw/pull/158466) chore(ui): refresh control ui locales
- [#158446](https://github.com/openclaw/openclaw/pull/158446) fix(update): keep gateway running when main is reserved
- [#157555](https://github.com/openclaw/openclaw/pull/157555) refactor(gateway): simplify HTTP admission helpers
- [#158433](https://github.com/openclaw/openclaw/pull/158433) perf(sessions): reuse discovery workers during session creation
- [#158435](https://github.com/openclaw/openclaw/pull/158435) fix(browser): preserve selected-tab creation navigation
- [#157956](https://github.com/openclaw/openclaw/pull/157956) feat: show declared plugin capabilities and setup guides
- [#158275](https://github.com/openclaw/openclaw/pull/158275) refactor(gateway): distinguish internal auth rate limiter
- [#158428](https://github.com/openclaw/openclaw/pull/158428) perf(agents): unblock session lanes after no-progress loops
- [#158427](https://github.com/openclaw/openclaw/pull/158427) refactor(parallels): share dev update assertions
- [#158393](https://github.com/openclaw/openclaw/pull/158393) improve(chat): reuse streaming text segmentation within a view update
- [#158413](https://github.com/openclaw/openclaw/pull/158413) ci: bound hourly iOS proof and accept coalesced jobs
- [#157864](https://github.com/openclaw/openclaw/pull/157864) fix: restore blocking release validation and remove publication waivers
- [#158282](https://github.com/openclaw/openclaw/pull/158282) test(doctor): stabilize OAuth and manual repair fixtures
- [#158363](https://github.com/openclaw/openclaw/pull/158363) fix: long-running tasks fail to resume after a restart
- [#156731](https://github.com/openclaw/openclaw/pull/156731) refactor(media): consolidate provider test cases
- [#158204](https://github.com/openclaw/openclaw/pull/158204) refactor(ios): remove unused stats event envelope
- [#157856](https://github.com/openclaw/openclaw/pull/157856) fix: authenticate transitive Windows repair proof modules
- [#156573](https://github.com/openclaw/openclaw/pull/156573) refactor(twitch): strengthen channel test assertions
- [#158409](https://github.com/openclaw/openclaw/pull/158409) fix(ci): catch generated SQLite fixture regressions before merge
- [#158340](https://github.com/openclaw/openclaw/pull/158340) improve(update): prepare retained runtime directories once
- [#157285](https://github.com/openclaw/openclaw/pull/157285) fix(test): unblock sandbox and session-reload release checks
- [#158308](https://github.com/openclaw/openclaw/pull/158308) fix(memory): accept snake_case search arguments from local models
- [#158385](https://github.com/openclaw/openclaw/pull/158385) improve: reduce database admission work for managed nodes
- [#158397](https://github.com/openclaw/openclaw/pull/158397) perf(sessions): avoid whole-store reloads for subagent context
- [#158399](https://github.com/openclaw/openclaw/pull/158399) perf(worktrees): speed up repeated branch lookups
- [#158394](https://github.com/openclaw/openclaw/pull/158394) perf(beam): reuse session catalog metadata between polls
- [#158361](https://github.com/openclaw/openclaw/pull/158361) fix(diagnostics): report CPU profiler start blocking
- [#158209](https://github.com/openclaw/openclaw/pull/158209) fix(agents): replies stall when a chat is marked read as a turn starts
- [#157886](https://github.com/openclaw/openclaw/pull/157886) fix: preserve config reload diagnostics in tests
- [#158364](https://github.com/openclaw/openclaw/pull/158364) improve(memory): speed up batched session indexing
- [#158354](https://github.com/openclaw/openclaw/pull/158354) fix(update): record terminal failures before offering reports
- [#154229](https://github.com/openclaw/openclaw/pull/154229) feat(agentsapi): transfer attachments and hosted files
- [#123159](https://github.com/openclaw/openclaw/pull/123159) fix(imessage): honor bound routes before agent selection
- [#158381](https://github.com/openclaw/openclaw/pull/158381) refactor(test): remove unused MCP workspace fixtures
- [#158382](https://github.com/openclaw/openclaw/pull/158382) fix(webchat): keep failed sends out of newer Goal drafts
- [#158374](https://github.com/openclaw/openclaw/pull/158374) improve: speed up freeform frontmatter recovery
- [#158347](https://github.com/openclaw/openclaw/pull/158347) fix(tests): wait for queued RPC admission before restart
- [#158366](https://github.com/openclaw/openclaw/pull/158366) perf(doctor): avoid duplicate agent integrity scans
- [#158233](https://github.com/openclaw/openclaw/pull/158233) refactor(channels): extract ingress record codecs
- [#158296](https://github.com/openclaw/openclaw/pull/158296) improve(update): avoid repeated shared-chunk validation during builds
- [#158283](https://github.com/openclaw/openclaw/pull/158283) fix(test): avoid one-shot catalog watcher setup records
- [#158292](https://github.com/openclaw/openclaw/pull/158292) fix: unblock stream and Telegram delivery lint checks
- [#157852](https://github.com/openclaw/openclaw/pull/157852) fix: prevent hourly CI from claiming full validation
- [#158346](https://github.com/openclaw/openclaw/pull/158346) improve: reduce Gateway CPU overhead during streamed replies
- [#158289](https://github.com/openclaw/openclaw/pull/158289) fix(test): detect ignored Anthropic prefix-binding predicates
- [#158258](https://github.com/openclaw/openclaw/pull/158258) fix: stabilize shared skill rescan test roots
- [#158264](https://github.com/openclaw/openclaw/pull/158264) chore(ui): refresh control ui locales
- [#154848](https://github.com/openclaw/openclaw/pull/154848) fix(ui): stop status updates after sidebar removal
- [#158218](https://github.com/openclaw/openclaw/pull/158218) fix: gateway status fails on root-owned environment files
- [#158230](https://github.com/openclaw/openclaw/pull/158230) chore(deps): update Tauri updater with Windows launch recovery
- [#157683](https://github.com/openclaw/openclaw/pull/157683) fix(release): isolate baseline lookup from npm age filters
- [#158236](https://github.com/openclaw/openclaw/pull/158236) chore(ui): refresh control ui locales
- [#158367](https://github.com/openclaw/openclaw/pull/158367) perf(process): avoid OOM shell execs in spawn helpers
- [#158371](https://github.com/openclaw/openclaw/pull/158371) improve: speed up image discovery in conversations with mostly text
- [#157734](https://github.com/openclaw/openclaw/pull/157734) fix: preserve compact plugin tool argument types for Codex
- [#158377](https://github.com/openclaw/openclaw/pull/158377) chore(i18n): refresh native locales
- [#158355](https://github.com/openclaw/openclaw/pull/158355) refactor(test): consolidate session projection fixtures
- [#154929](https://github.com/openclaw/openclaw/pull/154929) improve: reuse session placement facts after transcript writes
- [#158335](https://github.com/openclaw/openclaw/pull/158335) fix(webchat): preserve quoted replies when restoring drafts
- [#158325](https://github.com/openclaw/openclaw/pull/158325) fix: automations rejects disabled failure alerts
- [#158326](https://github.com/openclaw/openclaw/pull/158326) improve(sessions): reduce temporary memory used by projection reads
- [#158345](https://github.com/openclaw/openclaw/pull/158345) improve(sessions): reduce database work when changing large groups
- [#157771](https://github.com/openclaw/openclaw/pull/157771) fix: avoid false busy errors after failed plugin reloads
- [#158280](https://github.com/openclaw/openclaw/pull/158280) improve: run more PR tests on Bun and speed up IRC smoke imports
- [#158327](https://github.com/openclaw/openclaw/pull/158327) fix(crabbox): bound regular source staging allocations
- [#158288](https://github.com/openclaw/openclaw/pull/158288) refactor(channels): read failed ingress health in worker
- [#158203](https://github.com/openclaw/openclaw/pull/158203) refactor(channels): separate ingress record types
- [#157687](https://github.com/openclaw/openclaw/pull/157687) refactor(state): consolidate sandbox read dispatch
- [#158336](https://github.com/openclaw/openclaw/pull/158336) fix(ci): avoid unrelated suite scans during narrow test planning
- [#157799](https://github.com/openclaw/openclaw/pull/157799) improve(android): streamline the chat composer and attachment menu
- [#158344](https://github.com/openclaw/openclaw/pull/158344) test(agents): join subagent completion before assertions
- [#158343](https://github.com/openclaw/openclaw/pull/158343) test: keep pure relay helpers outside storage setup
- [#158337](https://github.com/openclaw/openclaw/pull/158337) fix: prevent chat freezes on incomplete reply directives
- [#158324](https://github.com/openclaw/openclaw/pull/158324) fix(release): preserve frozen installer smoke channel
- [#152327](https://github.com/openclaw/openclaw/pull/152327) feat(meetings): add durable participation foundation
- [#157884](https://github.com/openclaw/openclaw/pull/157884) fix: let CLI commands exit during cache maintenance
- [#157461](https://github.com/openclaw/openclaw/pull/157461) fix: restore bundled Mermaid parser license notices
- [#158098](https://github.com/openclaw/openclaw/pull/158098) fix(packaging): accept frozen releases with their shipped MCP patches
- [#158228](https://github.com/openclaw/openclaw/pull/158228) refactor(gateway): deslop gateway
- [#149456](https://github.com/openclaw/openclaw/pull/149456) fix(ui): preserve failures during cloud test cleanup
- [#157300](https://github.com/openclaw/openclaw/pull/157300) chore: verify catalog capture reuse across agents and scopes
- [#158321](https://github.com/openclaw/openclaw/pull/158321) refactor(test): consolidate non-Error cause coverage
- [#157764](https://github.com/openclaw/openclaw/pull/157764) fix(qa): Telegram validation fails after isolated auth staging

#### 🐛 New Issues
- [#157842](https://github.com/openclaw/openclaw/issues/157842) 2026.9.6: prepared-model-catalog worker retains ~77 MB per agent turn (heap never released, exceeds its 512 MB limit) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `impact:crash-loop` 💬15
- [#158421](https://github.com/openclaw/openclaw/issues/158421) [Bug]: configured default model @profile is resolved as an explicit user pin, blocking cross-provider (claude-cli) fallback `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬5
- [#158099](https://github.com/openclaw/openclaw/issues/158099) [Bug]: Gateway start runs `git rev-parse` and `npm root -g` unconditionally; `update.checkOnStart: false` does not stop it (macOS: triggers the Command Line Tools install dialog) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#158271](https://github.com/openclaw/openclaw/issues/158271) [Bug]: `openclaw agent` turns flip messageToolPolicyHash, invalidating the claude-cli session (reason=message-policy) on every switch with chat/sessions.send turns `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#158114](https://github.com/openclaw/openclaw/issues/158114) [Bug]: Interrupted startup migration leaves the gateway permanently unstartable - "startup migration lease was lost" / "gateway requires state migration" `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬5
- [#158320](https://github.com/openclaw/openclaw/issues/158320) Git updates fail when plugin rehearsal traverses abandoned runtime staging `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#158190](https://github.com/openclaw/openclaw/issues/158190) [Bug]: Control UI marks an accepted queued message 'Waiting for reconnect' on a live connection and can hold the queue behind it `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:ux-friction` 💬4
- [#158231](https://github.com/openclaw/openclaw/issues/158231) Update failure: managed-service-preflight (2026.9.5) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬4
- [#158442](https://github.com/openclaw/openclaw/issues/158442) [Bug]: Opening an unread session bumps its Last updated timestamp and sidebar position `bug` 💬3
- [#158339](https://github.com/openclaw/openclaw/issues/158339) [Bug]: Bun updater recursively spawns config readers when import.meta.url loses query marker `bug` `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#157873](https://github.com/openclaw/openclaw/issues/157873) Update failure: invalid-config (2026.9.6) `clawsweeper:needs-live-repro` `P0` `issue-rating: 🐚 platinum hermit` `maturity:stable` 💬3
- [#158261](https://github.com/openclaw/openclaw/issues/158261) [Bug]: memory_search rejects snake_case args (min_score, max_results) from local models before any before_tool_call hook can normalize them `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#158358](https://github.com/openclaw/openclaw/issues/158358) [Bug]: claude-cli spawns Claude 5 models without [1m] despite contextWindowDefault "1m" — runs at 200k while OpenClaw budgets/reports 1M `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#158359](https://github.com/openclaw/openclaw/issues/158359) [Bug]: 2026.9.6 doctor --fix pass 1 always exits 1 on 7.x agent databases (schema 1): auth-profile migration and session repair open them before their media migration `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` `P0` 💬3
- [#158095](https://github.com/openclaw/openclaw/issues/158095) [Bug]: A gateway worker keeps state-lifecycle after acquireSqliteWorkerLifecycle; every later acquire fails until restart `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬3
- [#158262](https://github.com/openclaw/openclaw/issues/158262) [Bug]: voice-call Twilio <Say> fallback: initial greeting cut off by second live TwiML update; call hangs up 5s after each reply `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#158351](https://github.com/openclaw/openclaw/issues/158351) Session SQLite migration recovery report (session-sqlite-1790369664564-117e401f) `impact:session-state` `P0` `impact:ux-release-blocker` 💬2
- [#158417](https://github.com/openclaw/openclaw/issues/158417) Plugin re-materialisation fills /tmp and nothing ever cleans it up (and duplicates module graphs in-process) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:data-loss` 💬2
- [#158474](https://github.com/openclaw/openclaw/issues/158474) [Bug]: OpenAI OAuth subscription runs return service-account-key 401 while separate Codex CLI succeeds (2026.9.6) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬2
- [#158461](https://github.com/openclaw/openclaw/issues/158461) [Bug] Feishu/Lark final replies (slash-command output) generated and queued but never delivered — stuck at send_attempt_started, survives restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#158468](https://github.com/openclaw/openclaw/issues/158468) Control UI: the main session cannot be moved into a custom group (category assignment silently has no effect) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#158386](https://github.com/openclaw/openclaw/issues/158386) [Bug]: Windows Doctor reports omitted-default task XML fields as drift and fails task refresh verification `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬2
- [#158281](https://github.com/openclaw/openclaw/issues/158281) [Bug]: Source update discovers retained dist-artifact lock only after stopping Gateway and migrating state `bug` `clawsweeper:source-repro` `impact:crash-loop` `P0` 💬2
- [#158191](https://github.com/openclaw/openclaw/issues/158191) Update failure: invalid-config (2026.9.6) `P0` `impact:ux-release-blocker` 💬2
- [#158384](https://github.com/openclaw/openclaw/issues/158384) [Bug]: 2026.9.6 Discord sessions report messaging-only tools after upgrade (default-path regression unconfirmed) `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#158352](https://github.com/openclaw/openclaw/issues/158352) Update failure: managed-service-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#158398](https://github.com/openclaw/openclaw/issues/158398) refactor(channels): deslop small channel and access plugins `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬2
- [#158400](https://github.com/openclaw/openclaw/issues/158400) Expose scheduler-owned occurrence state for retained one-shot jobs `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#158411](https://github.com/openclaw/openclaw/issues/158411) Update failure: gateway-recovery-verification (2026.9.6) `P2` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-friction` 💬2
- [#158390](https://github.com/openclaw/openclaw/issues/158390) plugin-captures tmp dirs not GC'd after build/catalog operations — disk fills indefinitely `P1` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬2
- [#157815](https://github.com/openclaw/openclaw/issues/157815) [Bug]: OpenClaw 2026.9.6: ~138 s Gateway startup, ~1.5 GiB main-process PSS, and 20–60+ s health CLI latency in a arm64 small machine `bug` `bug:behavior` `P1` `issue-rating: 🦪 silver shellfish` 💬2
- [#158376](https://github.com/openclaw/openclaw/issues/158376) Isolated-polling Telegram updates spooled but never dispatched to group-message handler for specific channel accounts `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#158362](https://github.com/openclaw/openclaw/issues/158362) [Feature]: Observe image persistence outcomes with original invocation identity `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#158356](https://github.com/openclaw/openclaw/issues/158356) [Feature]: Host-bound nonpublishing preparation for Automation creation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#158353](https://github.com/openclaw/openclaw/issues/158353) [Bug]: /status "Compactions" never counts Claude CLI auto-compactions on claude-cli live sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#158224](https://github.com/openclaw/openclaw/issues/158224) automations tool rejects documented failureAlert:false while cron.add RPC accepts it `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#158350](https://github.com/openclaw/openclaw/issues/158350) [Bug]: Slack: mid-turn message clears the thread's 'is working' status, and follow-up turns never show typing (claude-cli) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬2
- [#158373](https://github.com/openclaw/openclaw/issues/158373) [Bug]: 2026.9.5 → 2026.9.6 offline update fails at media-persistence after Gateway stop `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#158370](https://github.com/openclaw/openclaw/issues/158370) [Feature]: Collapsible sections for plugin pages in the Control UI sidebar `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#158287](https://github.com/openclaw/openclaw/issues/158287) Update failure: gateway-recovery-verification (2026.9.6) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#158246](https://github.com/openclaw/openclaw/issues/158246) Update failure: runtime-verification-failed (2026.9.5) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#158154](https://github.com/openclaw/openclaw/issues/158154) Telegram: subagent result announcements expire undelivered after 30 min; announce:requester-settle retries stall topic lanes for hours `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#158187](https://github.com/openclaw/openclaw/issues/158187) Update failure: not-recorded (2026.9.6) `P2` `impact:ux-friction` 💬2
- [#158318](https://github.com/openclaw/openclaw/issues/158318) Targeted plugin reload: pause dispatch, drain retained work, then resume durable ingress `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#158183](https://github.com/openclaw/openclaw/issues/158183) [Bug]: maxOldGenerationSizeMb does not bound external memory; the memory diagnostic reports workerHeap=0 (an RSS blowup has no per-worker attribution) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#158127](https://github.com/openclaw/openclaw/issues/158127) [Bug]: 2026.9.6 multi-agent Codex turns fail with runtime publication superseded or app-server initialize timeout `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#158284](https://github.com/openclaw/openclaw/issues/158284) bug(slack/subagents): completion announce to a non-threaded Slack DM lands as a thread reply under the request message `P1` `clawsweeper:source-repro` `impact:message-loss` `issue-rating: 🦞 diamond lobster` 💬2
- [#158519](https://github.com/openclaw/openclaw/issues/158519) Update failure: managed-service-preflight (2026.9.5) 💬1
- [#158517](https://github.com/openclaw/openclaw/issues/158517) [Bug]: memory-wiki search falls back to parsing every vault page on the gateway main thread, saturating the event loop for over a minute 💬1
- [#158507](https://github.com/openclaw/openclaw/issues/158507) Telegram: new bot's first updates dropped after bot identity change (stale ingress spool tombstones) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#158499](https://github.com/openclaw/openclaw/issues/158499) Reduce direct dependencies for task lists, sequencing, and duration helpers `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#158506](https://github.com/openclaw/openclaw/issues/158506) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#158415](https://github.com/openclaw/openclaw/issues/158415) claude-cli: automations with toolsAllow drop mcp.servers tools `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-security-review` 💬1
- [#158418](https://github.com/openclaw/openclaw/issues/158418) Health reports permanent delivery-queue tombstones as failures `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#158424](https://github.com/openclaw/openclaw/issues/158424) [Bug]: Codex OAuth refresh fails with "Async work scope is closed" after retained client outlives a turn `bug` `P1` `clawsweeper:needs-live-repro` `impact:auth-provider` 💬1
- [#158494](https://github.com/openclaw/openclaw/issues/158494) Codex async question visible in Control UI but not observed in originating Discord thread (single incident) `P2` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#158485](https://github.com/openclaw/openclaw/issues/158485) [Bug] macOS Gateway 2026.9.4: all exec tool calls fail with `write EPIPE` after ~3.5 days uptime, progressing to system-wide `fork: resource temporarily unavailable`; only a reboot restores `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#158484](https://github.com/openclaw/openclaw/issues/158484) Update failure: managed-service-preflight (2026.9.5) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#158406](https://github.com/openclaw/openclaw/issues/158406) Update failure: managed-service-preflight (2026.9.5) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#158463](https://github.com/openclaw/openclaw/issues/158463) Update failure: global-install-swap (2026.9.5) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#158431](https://github.com/openclaw/openclaw/issues/158431) message_sending hook context for cron announce deliveries carries no cron identity (jobId/runId/trigger) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#158426](https://github.com/openclaw/openclaw/issues/158426) Update failure: managed-service-preflight (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#158329](https://github.com/openclaw/openclaw/issues/158329) Memory: reduce repeated corpus scans during batched session indexing `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#158388](https://github.com/openclaw/openclaw/issues/158388) [Feature]: Support capturing multiple displays in Logbook `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#158383](https://github.com/openclaw/openclaw/issues/158383) [Bug]: Gateway down after update to 2026.9.6 — startup migrations refuse ready on orphaned codex session bindings `impact:crash-loop` `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#158379](https://github.com/openclaw/openclaw/issues/158379) Concurrent first-session creation fails when another agent opens its store `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#158375](https://github.com/openclaw/openclaw/issues/158375) [Bug] followup queue drain loops for 5+ hours on stale plugin instance after Gateway restart (36k errors, ends in self-restart) `P1` `clawsweeper:source-repro` `impact:message-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#158342](https://github.com/openclaw/openclaw/issues/158342) [Bug]: macOS: gateway socket close() deadlocks with the kernel inbound packet path — every socket op on the host then blocks forever (hard reboot required) `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#158341](https://github.com/openclaw/openclaw/issues/158341) exec denied: allowlist miss is thrown for three different outcomes and the log redacts the command, so a PATH miss reads as a lost permission `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#158332](https://github.com/openclaw/openclaw/issues/158332) [Bug]: Message-less inter-session deliveries force terminal output; reply-to-source delivery of contentless replies sustains politeness loops between sessions `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#158333](https://github.com/openclaw/openclaw/issues/158333) [Feature]: Grant spawned subagent children a session-messaging tool for child-to-child coordination `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#158331](https://github.com/openclaw/openclaw/issues/158331) [Bug]: Generic-repeat breaker does not catch counter-drifting repeated tool calls (identical arguments, incrementing result) `P2` `impact:other` 💬1
- [#158330](https://github.com/openclaw/openclaw/issues/158330) [Feature]: Define supported existing-run-only steering for channel plugins `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#158306](https://github.com/openclaw/openclaw/issues/158306) [Feature]: Per-message Steer / Queue choice in the composer (touch-friendly, works on mobile) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#158293](https://github.com/openclaw/openclaw/issues/158293) [Bug]: update.status omits known scheduler policy before discovery `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1

#### 🔒 Closed Issues
- [#157603](https://github.com/openclaw/openclaw/issues/157603) Update failure: repairing (2026.9.5) Saved sanitized report: /home/user/.openclaw/update-reports/10ab6a7430da41e2cd36a16f8b4994bdc6c03d46038fcba3b400279a66c8b1a6.7830d737d2cd7f5455f14dbc229d287a45091d2b8653dcb39a63b0904f5d75ca.md
- [#14438](https://github.com/openclaw/openclaw/issues/14438) [Feature]: Plugin hot-reload without container restart (jiti cache invalidation)
- [#154381](https://github.com/openclaw/openclaw/issues/154381) [Bug]: 2026.9.4 updater cannot reach the 2026.9.5 timeout fix: candidate validation still capped at 300 seconds
- [#154460](https://github.com/openclaw/openclaw/issues/154460) Update failure: repairing (2026.9.4)
- [#155290](https://github.com/openclaw/openclaw/issues/155290) Update failure: global-install-failed (2026.9.4)
- [#158320](https://github.com/openclaw/openclaw/issues/158320) Git updates fail when plugin rehearsal traverses abandoned runtime staging
- [#154066](https://github.com/openclaw/openclaw/issues/154066) plugins.allow` regenerated on every gateway start silently drops `browser` (and CLI enable does not stick)`
- [#153270](https://github.com/openclaw/openclaw/issues/153270) Update failure: global-install-failed (2026.9.4)
- [#157761](https://github.com/openclaw/openclaw/issues/157761) [Bug]: config set --dry-run reports success for a target path the identical command rejects without --dry-run
- [#158339](https://github.com/openclaw/openclaw/issues/158339) [Bug]: Bun updater recursively spawns config readers when import.meta.url loses query marker
- [#155061](https://github.com/openclaw/openclaw/issues/155061) computer tool: blank target/node/environmentId from a schema-filling model fails every call
- [#158261](https://github.com/openclaw/openclaw/issues/158261) [Bug]: memory_search rejects snake_case args (min_score, max_results) from local models before any before_tool_call hook can normalize them
- [#154573](https://github.com/openclaw/openclaw/issues/154573) Update failure: runtime-verification-failed (2026.9.4)
- [#154926](https://github.com/openclaw/openclaw/issues/154926) Update failure: finalize:targetConfigConvergence (2026.9.5)
- [#153896](https://github.com/openclaw/openclaw/issues/153896) [Bug]: sessions_spawn outputSchema keeps patternProperties after normalization — WARN on every google run, and the recommended linter reports nothing
- [#153770](https://github.com/openclaw/openclaw/issues/153770) [Bug]: WorkerTaskPool: a task that never settles pins a worker thread at ~100% CPU forever and is never retired (thread leak)
- [#157491](https://github.com/openclaw/openclaw/issues/157491) [Bug]: Identical progress-card updates evade enabled loop protection as revisions change
- [#157519](https://github.com/openclaw/openclaw/issues/157519) [Bug]: Failed migrating legacy device identity: FsSafeError: native no-replace move is unavailable
- [#158191](https://github.com/openclaw/openclaw/issues/158191) Update failure: invalid-config (2026.9.6)
- [#155084](https://github.com/openclaw/openclaw/issues/155084) Update failure: managed-service-preflight (2026.9.4)
- [#154294](https://github.com/openclaw/openclaw/issues/154294) Update failure: global-install-failed (2026.9.4)
- [#158224](https://github.com/openclaw/openclaw/issues/158224) automations tool rejects documented failureAlert:false while cron.add RPC accepts it
- [#158187](https://github.com/openclaw/openclaw/issues/158187) Update failure: not-recorded (2026.9.6)
- [#154226](https://github.com/openclaw/openclaw/issues/154226) Update failure: managed-service-handoff-unavailable (2026.9.4)
- [#154128](https://github.com/openclaw/openclaw/issues/154128) Update failure: post-update-plugins (2026.9.5)
- [#153316](https://github.com/openclaw/openclaw/issues/153316) Update failure: unexpected-error (2026.9.3)
- [#153132](https://github.com/openclaw/openclaw/issues/153132) [Bug]: Telegram forum-topic group messages silently dropped pre-dispatch (spooled, never inbound) — worked hours earlier
- [#153639](https://github.com/openclaw/openclaw/issues/153639) [Bug]: Model catalog is not ready when selecting another model in a session
- [#158506](https://github.com/openclaw/openclaw/issues/158506) Update failure: plugin-target-unavailable (2026.9.4)
- [#158424](https://github.com/openclaw/openclaw/issues/158424) [Bug]: Codex OAuth refresh fails with "Async work scope is closed" after retained client outlives a turn
- [#158484](https://github.com/openclaw/openclaw/issues/158484) Update failure: managed-service-preflight (2026.9.5)
- [#158406](https://github.com/openclaw/openclaw/issues/158406) Update failure: managed-service-preflight (2026.9.5)
- [#155172](https://github.com/openclaw/openclaw/issues/155172) Update failure: doctor-failed (2026.9.4)
- [#158463](https://github.com/openclaw/openclaw/issues/158463) Update failure: global-install-swap (2026.9.5)
- [#158426](https://github.com/openclaw/openclaw/issues/158426) Update failure: managed-service-preflight (2026.9.4)
- [#158329](https://github.com/openclaw/openclaw/issues/158329) Memory: reduce repeated corpus scans during batched session indexing
- [#158383](https://github.com/openclaw/openclaw/issues/158383) [Bug]: Gateway down after update to 2026.9.6 — startup migrations refuse ready on orphaned codex session bindings
- [#158331](https://github.com/openclaw/openclaw/issues/158331) [Bug]: Generic-repeat breaker does not catch counter-drifting repeated tool calls (identical arguments, incrementing result)
- [#154357](https://github.com/openclaw/openclaw/issues/154357) Update failure: finalize:doctor (2026.9.5)
- [#154297](https://github.com/openclaw/openclaw/issues/154297) Update failure: finalize:doctor (2026.9.5)
- [#154329](https://github.com/openclaw/openclaw/issues/154329) Update failure: post-update-plugins (2026.9.5)
- [#158293](https://github.com/openclaw/openclaw/issues/158293) [Bug]: update.status omits known scheduler policy before discovery
- [#152534](https://github.com/openclaw/openclaw/issues/152534) [Bug]: /model <id> -a persists a model id the provider rejects, and the resulting failure names agents.defaults.model although the value is on agents.entries.<agent>.model
- [#151369](https://github.com/openclaw/openclaw/issues/151369) [Bug]: doctor --fix reports a completed meeting transcript migration as refused and skips later repairs when its scratch file cannot be deleted
- [#151451](https://github.com/openclaw/openclaw/issues/151451) [Bug]: Chat messages sit too close together on mobile

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 248,980 · **Open issues:** 43,325 · **Last push:** <1h ago

There were no new releases for Hermes Agent on September 26, 2026, but several important pull requests were merged, including fixes for desktop functionality that improved the authorization process for secondary-profile bots and addressed timing issues with approval responses behind stalled WebSocket writes. Notably, the fixes also ensured custom user CSS survives desktop updates and resolved issues with macOS keychain CAs for remote gateways. Among the newly reported issues, a significant bug (#122183) related to the Windows gateway crash due to a missing module indicates ongoing compatibility challenges within the environment. The Hermes team continues to address both systemic fixes and new feature requests while managing emerging bugs across platforms.

#### ✅ Merged PRs
- [#122550](https://github.com/NousResearch/hermes-agent/pull/122550) fix(gateway): secondary-profile bots authorize button taps against their own allowlist (#120639, salvage #120642)
- [#121635](https://github.com/NousResearch/hermes-agent/pull/121635) fix(update): stop reading gateway identity off the Windows restart watcher's argv (#107002)
- [#123020](https://github.com/NousResearch/hermes-agent/pull/123020) fix(skins): carry customCSS end-to-end so user CSS survives desktop updates
- [#122899](https://github.com/NousResearch/hermes-agent/pull/122899) fix(desktop): stop approval.respond timing out behind stalled WS writes
- [#122912](https://github.com/NousResearch/hermes-agent/pull/122912) fix(desktop): trust macOS keychain CAs for remote gateways like Windows
- [#122859](https://github.com/NousResearch/hermes-agent/pull/122859) fix(desktop): deliver /background results to the originating conversation

#### 🐛 New Issues
- [#122183](https://github.com/NousResearch/hermes-agent/issues/122183) [Bug]: Windows gateway on the PM runtime prepends the pre-PM venv and crashes hosted_room_worker (No module named 'pydantic_core._pydantic_core') `type/bug` `comp/cli` `comp/gateway` `P1` 💬14
- [#123225](https://github.com/NousResearch/hermes-agent/issues/123225) Desktop: 'Save and reconnect' doesn't persist a changed remote gateway URL across restart; boot loop flashes error page too fast to use `type/bug` `comp/gateway` `area/config` `P2` 💬3
- [#122609](https://github.com/NousResearch/hermes-agent/issues/122609) [skills-index-watchdog] Skills index is stale or degraded (degraded) `type/bug` `tool/skills` `P3` `sweeper:risk-automation` 💬3
- [#122783](https://github.com/NousResearch/hermes-agent/issues/122783) [Bug]: PM-managed install never re-execs into its environment venv, so the gateway runs on the bare runtime interpreter (memory provider dead, cron workers missing dependencies, version reports unknown) `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility` 💬3
- [#123210](https://github.com/NousResearch/hermes-agent/issues/123210) [Bug]: OpenAI Codex OAuth returns HTTP 401 after successful re-authentication `type/bug` `comp/agent` `comp/cli` `provider/openai` 💬2
- [#122513](https://github.com/NousResearch/hermes-agent/issues/122513) prepare_launch() compares Path.absolute() instead of Path.resolve(), causing a self-relaunch loop on every venv-based Hermes launch `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility` 💬2
- [#123229](https://github.com/NousResearch/hermes-agent/issues/123229) [Bug]: Gateway: busy-demoted event hot-loops through the adapter drain (~250/s), flooding logs and opening a new discord.com connection per iteration `type/bug` `comp/gateway` `platform/discord` `P1` 💬1
- [#123165](https://github.com/NousResearch/hermes-agent/issues/123165) NOUS RESEARCH HERMES-AGENT FEATURE REQUEST `type/feature` `innovation` `comp/agent` `P3` 💬1
- [#122736](https://github.com/NousResearch/hermes-agent/issues/122736) [Windows] Gateway on the managed store Python (3.14) overlays the in-tree 3.11 venv site-packages → hosted_room_worker dies on pydantic_core ABI mismatch `type/bug` `duplicate` `comp/cli` `comp/gateway` 💬1
- [#123201](https://github.com/NousResearch/hermes-agent/issues/123201) "hermes update" on git-checkout Linux/Docker installs skips main venv rebuild after a Python-version bump (only checks dep stamp, not interpreter version) `type/bug` `comp/cli` `area/docker` `P2` 💬1
- [#123265](https://github.com/NousResearch/hermes-agent/issues/123265) [Bug]: Importing `model_tools` creates and migrates `state.db` (async-delegation restore runs in the `ProcessRegistry` constructor)
- [#123264](https://github.com/NousResearch/hermes-agent/issues/123264) [Bug]: A failed cron run's stderr, host paths and unrecognised tokens reach the chat notice, `last_error` and `GET /api/jobs`
- [#123261](https://github.com/NousResearch/hermes-agent/issues/123261) [Bug]: Telegram model picker buttons can be tapped by group members who are not on the allowlist
- [#123249](https://github.com/NousResearch/hermes-agent/issues/123249) [Bug]: Desktop — two windows can drop a queued prompt or send it twice (same-session queue race and cross-window double drain after #122953) `type/bug` `P2` `sweeper:risk-session-state` `comp/desktop`
- [#123254](https://github.com/NousResearch/hermes-agent/issues/123254) hermes update can never succeed on a stale shallow install: main fetch pulls ~full history and hits the 300s cap before the post-update unshallow step can run `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility`
- [#123245](https://github.com/NousResearch/hermes-agent/issues/123245) Plugin session state cannot follow /new or /reset: the plugin-command scope binds no session id `type/bug` `comp/gateway` `comp/tui` `comp/plugins`
- [#123247](https://github.com/NousResearch/hermes-agent/issues/123247) Managed local runtime can't serve ternary-quant GGUFs; manual fork-server workaround splits engine from model identity `type/bug` `comp/cli` `P2` `area/local-models`
- [#123238](https://github.com/NousResearch/hermes-agent/issues/123238) [Bug]: Launching under a different HERMES_HOME rebinds the checkout's shared launchers to that home's Python; a deleted temp home then bricks hermes `type/bug` `comp/cli` `area/config` `P2`
- [#123231](https://github.com/NousResearch/hermes-agent/issues/123231) [Bug]: Mattermost downloads and caches inbound attachments before the sender is authorized, with no size cap `type/security` `comp/gateway` `comp/plugins` `area/auth`
- [#123236](https://github.com/NousResearch/hermes-agent/issues/123236) Cron Error: Python Cron Schedule Execution Error!!! ModuleNotFoundError `type/bug` `duplicate` `comp/cron` `P2`
- [#123222](https://github.com/NousResearch/hermes-agent/issues/123222) [Bug]: profiles.get_asset builds its path from an unchecked asset name and reads images outside the profile `type/bug` `comp/tui` `P3` `sweeper:risk-security-boundary`
- [#123226](https://github.com/NousResearch/hermes-agent/issues/123226) [Bug]: MCP OAuth state is keyed by server name only; re-pointing a name at a new URL reuses the old server's tokens `type/bug` `tool/mcp` `area/auth` `P2`
- [#123216](https://github.com/NousResearch/hermes-agent/issues/123216) [Bug]: Windows Desktop update always exits 124 - assert-dist-built spawns one node --check per renderer chunk (~960 spawns, twice), silent far past the 600s idle watchdog `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility`
- [#123217](https://github.com/NousResearch/hermes-agent/issues/123217) Peer messaging (#106423): retain queued messages when receive/steer fails `type/bug` `comp/tools` `P3` `sweeper:risk-message-delivery`

#### 🔒 Closed Issues
- [#73985](https://github.com/NousResearch/hermes-agent/issues/73985) [Bug]: xAI streaming TTS can never produce audio (removed websockets kwarg, rejected handshake, invented wire protocol)
- [#120639](https://github.com/NousResearch/hermes-agent/issues/120639) [Bug]: Telegram inline callbacks refuse allowlisted user when a secondary profile owns its own bot under multiplex (callback auth runs outside profile secret scope)
- [#53013](https://github.com/NousResearch/hermes-agent/issues/53013) [Bug] User custom CSS lost after every update (no persistence mechanism)
- [#55433](https://github.com/NousResearch/hermes-agent/issues/55433) Bug: "无法发送审批响应 / request timed out: approval.respond" when WS stalls during long LLM streams
- [#57241](https://github.com/NousResearch/hermes-agent/issues/57241) [Bug]: Desktop app ignores macOS keychain CA for remote gateway TLS (unable to get local issuer certificate)
- [#91717](https://github.com/NousResearch/hermes-agent/issues/91717) [Bug]: Misleading "Response truncated due to output length limit" in cronjob after transport timeout
- [#102766](https://github.com/NousResearch/hermes-agent/issues/102766) [Bug]: "Response truncated — stream ended before completion" conflates two distinct failure modes; type-2 (clean EOF, no finish_reason) needs its own diagnostics and is mislabeled as a network drop
- [#52589](https://github.com/NousResearch/hermes-agent/issues/52589) Desktop app-global workspace overrides profile-specific terminal.cwd
- [#59848](https://github.com/NousResearch/hermes-agent/issues/59848) [Bug]: `hermes desktop` prints traceback on Ctrl-C after Linux Electron systemd scope error
- [#58275](https://github.com/NousResearch/hermes-agent/issues/58275) `hermes desktop` launcher doesn't detach on Windows — leaks Electron/Python zombies and dies when parent shell closes
- [#68261](https://github.com/NousResearch/hermes-agent/issues/68261) [Bug]: TUI skill credential prompts can be routed to the wrong session
- [#85331](https://github.com/NousResearch/hermes-agent/issues/85331) [Bug]: Desktop sidebar renders ghost title-less rows after manual compression-chain reorganization (backend returns correct rows)
- [#57444](https://github.com/NousResearch/hermes-agent/issues/57444) Desktop app: /background completed tasks never show result panel
- [#75417](https://github.com/NousResearch/hermes-agent/issues/75417) Wake-word cycles leave a dead cached recorder InputStream on macOS
- [#73962](https://github.com/NousResearch/hermes-agent/issues/73962) [Bug]: streaming TTS puts the Gemini API key in request URLs and speaks unterminated think blocks aloud
- [#90215](https://github.com/NousResearch/hermes-agent/issues/90215) Stream drop log lines overstate attempt number by one (drop on first execution logs "attempt 2/3")
- [#95369](https://github.com/NousResearch/hermes-agent/issues/95369) [Bug]: Duplicate final-response tail when generation completes but stream delivery fails (queued re-send + "continue" prompt both fire)
- [#85163](https://github.com/NousResearch/hermes-agent/issues/85163) Desktop Inbox Archive also resumes and briefly restores the session
- [#82750](https://github.com/NousResearch/hermes-agent/issues/82750) [Bug]: Desktop: first-ever chat bypasses the opt-in user-profile onboarding flow

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 92,684 · **Open issues:** 8,435 · **Last push:** <1h ago

On September 26, 2026, there were no new releases for vLLM, but significant progress was made with several important merged pull requests. Notably, PR #58779 improved the handling of draft-token RPC waits by enforcing a timeout based on the execute-model duration, which enhances model performance and efficiency. Additionally, PR #58788 fixed a frontend bug that led to the leaking of the Inkling tool name into generated content after reasoning, addressing user experience concerns. A particularly pressing new issue emerged regarding slow weight loading on the GB10 platform, identified in issue #58726, which highlights ongoing performance challenges in loading tensor data efficiently.

#### ✅ Merged PRs
- [#58687](https://github.com/vllm-project/vllm/pull/58687) [Docs] Add return annotation to `fused_mm_input_norm_triton`
- [#58205](https://github.com/vllm-project/vllm/pull/58205) [AuxOutput] Only require Model Runner V2 on GPU platform
- [#58779](https://github.com/vllm-project/vllm/pull/58779) [Core] Bound draft-token RPC waits by the execute-model timeout
- [#58792](https://github.com/vllm-project/vllm/pull/58792) [Bugfix][Frontend] Fix Inkling tool name leaking into content after reasoning
- [#57054](https://github.com/vllm-project/vllm/pull/57054) [CI] Split (H200 MIG/MI300) Basic Correctness into named jobs
- [#58372](https://github.com/vllm-project/vllm/pull/58372) [Bugfix][Reasoning] Count Kimi K3 reasoning tokens
- [#48419](https://github.com/vllm-project/vllm/pull/48419) [Bugfix] V1: fix allowed_token_ids_mask aliasing in InputBatch.swap_states
- [#52580](https://github.com/vllm-project/vllm/pull/52580) [Performance] use startswith(x, i) instead of string slicing to avoid O(N^2)
- [#57664](https://github.com/vllm-project/vllm/pull/57664) [Pooling] Preserve BERT-family heads for raw logits
- [#58788](https://github.com/vllm-project/vllm/pull/58788) [Bugfix][Frontend] Document 404 response for `/generative_scoring`
- [#57982](https://github.com/vllm-project/vllm/pull/57982) [Bugfix] Don't drop the rest of the allocator config when toggling expandable segments
- [#56809](https://github.com/vllm-project/vllm/pull/56809) [watermarking] golden tests for backwards compatibility
- [#57241](https://github.com/vllm-project/vllm/pull/57241) [Bugfix] Default missing detail for Responses API input images
- [#56067](https://github.com/vllm-project/vllm/pull/56067) [Perf][Frontend] Defer reasoning usage recounts for non-continuous chat streams
- [#58551](https://github.com/vllm-project/vllm/pull/58551) [Bugfix][Frontend] Respect max_output_tokens in the Harmony tool-call loop
- [#55957](https://github.com/vllm-project/vllm/pull/55957) [Feature][Frontend] Add granite_thinking_parser reasoning parser for Granite 4.2
- [#50605](https://github.com/vllm-project/vllm/pull/50605) [ROCm] Bump torch 2.13, triton 3.8, torchaudio, torchvision
- [#58717](https://github.com/vllm-project/vllm/pull/58717) [ROCm][CI] Run the MLA attention+quant fusion test on ROCm
- [#58701](https://github.com/vllm-project/vllm/pull/58701) [Bugfix][CI] Report subprocess test skips as skips, not passes
- [#57735](https://github.com/vllm-project/vllm/pull/57735) [CI] [MRV2] Restore MRV2 pp dp coverage
- [#57599](https://github.com/vllm-project/vllm/pull/57599) [ROCm][CI] Expand single-GPU coverage on MI355 DPX
- [#58226](https://github.com/vllm-project/vllm/pull/58226) [Perf] DiffusionGemma: one-pass sampler statistics kernel
- [#58434](https://github.com/vllm-project/vllm/pull/58434) [Bugfix][MRV2] Treat padded prompt tails as spec-decode rows for hybrid models
- [#58740](https://github.com/vllm-project/vllm/pull/58740) [ROCm][CI] Test AMD DeepSeek V4 MoE routing against a PyTorch reference
- [#58748](https://github.com/vllm-project/vllm/pull/58748) [ROCm][CI] Add quantized MoE serving test for gfx950
- [#58724](https://github.com/vllm-project/vllm/pull/58724) [ROCm][CI] Cover the AITER MQA logits dispatch on gfx950
- [#58045](https://github.com/vllm-project/vllm/pull/58045) [ROCm][Kimi-K3] Optimize low-concurrency speculative KDA
- [#58292](https://github.com/vllm-project/vllm/pull/58292) [Bugfix][KV Connector] Reap expired NIXL leases behind a heartbeated head
- [#58450](https://github.com/vllm-project/vllm/pull/58450) [GLM5.3 Perf] Optimize glm 5.3 metadata op, 1.6~4.8x kernel level performance improvement
- [#58454](https://github.com/vllm-project/vllm/pull/58454) [Bugfix][GLM-5.3-Flash] kpool corruption with speculative decoding
- [#58112](https://github.com/vllm-project/vllm/pull/58112) [Benchmark] Record model_id in bench latency/throughput --output-json
- [#58704](https://github.com/vllm-project/vllm/pull/58704) [Bugfix][GLM-5.3-Flash] SM90 sparse MLA: index_kpool mismatch leads to corruption via unread query token
- [#58583](https://github.com/vllm-project/vllm/pull/58583) [Bugfix][Frontend] Keep logprobs of parser-suppressed streaming chunks
- [#58430](https://github.com/vllm-project/vllm/pull/58430) [Bugfix] Stop allocator fragmentation from shrinking the KV cache during memory profiling
- [#57957](https://github.com/vllm-project/vllm/pull/57957) [Core][Logging] Fix JSON logging process decoration
- [#58194](https://github.com/vllm-project/vllm/pull/58194) [Perf][Kernel] Vectorized flat abs-max for dynamic per-tensor FP8 quantization
- [#55330](https://github.com/vllm-project/vllm/pull/55330) [Kernel][Perf] Register-resident path for per-token-group 8-bit quant
- [#57666](https://github.com/vllm-project/vllm/pull/57666) [Pooling] Preserve reranker tokenization with document limits
- [#57729](https://github.com/vllm-project/vllm/pull/57729) [Bugfix] Fix generative scoring body cancellation
- [#58610](https://github.com/vllm-project/vllm/pull/58610) [MRV2] Minor model_runner.py code cleanup
- [#57934](https://github.com/vllm-project/vllm/pull/57934) [SpecDecode] Add LiLiCorr drafter
- [#56680](https://github.com/vllm-project/vllm/pull/56680) [UX][Frontend] Introduce `vllm preload` cli for fast restart
- [#58698](https://github.com/vllm-project/vllm/pull/58698) [ROCm][CI] Pass weight_shape in MXFP8 block32 linear tests
- [#57205](https://github.com/vllm-project/vllm/pull/57205) [Core] Model console logging as CLI configuration
- [#58645](https://github.com/vllm-project/vllm/pull/58645) [CI] Shard (H100) Helion Kernels five ways
- [#57744](https://github.com/vllm-project/vllm/pull/57744) [ROCm][Build] Filter crate tags from vLLM version detection
- [#58635](https://github.com/vllm-project/vllm/pull/58635) [MoE] Defer the TRTLLM-Gen top-k finalize on the modular path
- [#58621](https://github.com/vllm-project/vllm/pull/58621) [Perf][DSv4] Fuse inverse RoPE + FP8 quant into FlashInfer sparse MLA

#### 🐛 New Issues
- [#58726](https://github.com/vllm-project/vllm/issues/58726) [Performance]: Weight loading is slow on GB10 (DGX Spark): per-tensor H2D copies straight from safetensors mmap views 💬3
- [#58719](https://github.com/vllm-project/vllm/issues/58719) [Bug]: MFU/MBU counts speculative-decoding steps as prefill (`is_prefill = num_tokens > 1`) 💬3
- [#58647](https://github.com/vllm-project/vllm/issues/58647) [RFC]: Hardening /v1/messages (Anthropic API) for Claude Code across model families `RFC` `frontend` `kimi` `k3` 💬2
- [#58694](https://github.com/vllm-project/vllm/issues/58694) [Bug]: Guidance feature gate mistakes property names and literal data for `patternProperties` `structured-output` 💬3
- [#58688](https://github.com/vllm-project/vllm/issues/58688) [Bug][ROCm]: Qwen3.8-Flash-Next-FP8 cannot load on ROCm, the AMD Qwen4ExpNGramEmbedding has no FP8 weight_scale `bug` `rocm` 💬3
- [#58755](https://github.com/vllm-project/vllm/issues/58755) [Bug]: v0.30.0 ships transformers 5.17, Pixtral-based models (LightOnOCR, Mistral3) fail with ImportError PixtralRotaryEmbedding `mistral` 💬2
- [#58742](https://github.com/vllm-project/vllm/issues/58742) [Bug]: MFU/MBU silently drops attention and FFN for GPTQ, AWQ, gpt-oss, DeepSeek-V4 FP8 and online-quantized models `deepseek` `gpt-oss` `quantization` `DSv4` 💬2
- [#58728](https://github.com/vllm-project/vllm/issues/58728) [Bug]: client-supplied kv_transfer_params.remote_prefill_cached_tokens can forge prompt_tokens_details.cached_tokens 💬2
- [#58695](https://github.com/vllm-project/vllm/issues/58695) [Bug]: Guidance `disable_additional_properties` rewrites `const` and `enum` literal values 💬2
- [#58804](https://github.com/vllm-project/vllm/issues/58804) [Performance][Bug]: Tiered Offloading `bug` 💬1
- [#58677](https://github.com/vllm-project/vllm/issues/58677) Speculative-decoding draft model (EAGLE/MTP head) compile cache key flips between two values with byte-identical startup args — shared `VllmConfig` mutated in-place during main-model full-compile startup (v0.27.1; deterministic on 0.29) `speculative-decoding` `quantization` 💬1
- [#58733](https://github.com/vllm-project/vllm/issues/58733) [Bug]: DeepSeek-V4-Flash + DFlash speculator fails at startup (fp8_ds_mla draft KV dtype; 16384 vs 4096 hidden states) `bug` `deepseek` `DSv4` 💬1
- [#58751](https://github.com/vllm-project/vllm/issues/58751) [RFC]: Universal Triton kernel autotuning at warmup `RFC`
- [#58727](https://github.com/vllm-project/vllm/issues/58727) [Bug][Frontend]: Anthropic /v1/messages always hoists inline system messages because merge detection checks the CLI --chat-template (None) instead of the model's template `bug` 💬1
- [#58680](https://github.com/vllm-project/vllm/issues/58680) [Bug]: Rust frontend: top_logprobs repeats the sampled token; prompt + max_tokens over max_model_len silently accepted `rust` 💬1
- [#58692](https://github.com/vllm-project/vllm/issues/58692) [Bug]: Dynamic SD (num_speculative_tokens_per_batch_size) + MTP on V2 runner crashes with ZeroDivisionError in SpeculatorCudaGraphManager._init_candidates 💬1
- [#58697](https://github.com/vllm-project/vllm/issues/58697) [RFC]: Shared JSON Schema structure for structured-output checks and transformations `structured-output` 💬1
- [#58653](https://github.com/vllm-project/vllm/issues/58653) [Hybrid GDN] Explicit --block-size misaligned with mamba page makes SimpleCPU KV offload silently write-only; startup should reject or warn 💬1
- [#58807](https://github.com/vllm-project/vllm/issues/58807) [Bug]: MTP fails to load dense BF16 MTP head on compressed-tensors pack-quantized checkpoints (no module or parameter named 'fc.weight') `quantization`
- [#58799](https://github.com/vllm-project/vllm/issues/58799) [Performance]: Suboptimal SM90 FP8 CUTLASS MoE dispatch on H20 EP8 — upstream fix proposed `nvidia`
- [#58789](https://github.com/vllm-project/vllm/issues/58789) [Bug]: moe_permute can divide by zero with no tokens
- [#58776](https://github.com/vllm-project/vllm/issues/58776) [Bug]: Resumable session that stops while preempted is dropped from every queue, and folds at num_computed_tokens=0
- [#58774](https://github.com/vllm-project/vllm/issues/58774) [RFC]: Native span pooling for contextual chunk embeddings
- [#58729](https://github.com/vllm-project/vllm/issues/58729) [Bug]: GLM MXFP4 returns 0 GSM8K on GB200 (DEP8+EP8, vLLM 0.30.0) `bug` `glm`
- [#58675](https://github.com/vllm-project/vllm/issues/58675) [Bug]: `--hf-overrides '{"rope_scaling": ...}'` drops `rope_theta` under Transformers v5; models without a per-file default silently run with base 10000
- [#58657](https://github.com/vllm-project/vllm/issues/58657) Use-case proposal: payment-gated self-hosted vLLM for agents (HTTP 402 + Nano)
- [#58644](https://github.com/vllm-project/vllm/issues/58644) [CI] test_mtp_sharded_sampling_equivalence diverges intermittently (2 failures on 2026-09-24)

#### 🔒 Closed Issues
- [#43398](https://github.com/vllm-project/vllm/issues/43398) SyntaxWarning: invalid escape sequence and spurious trust_remote_code warnings on startup
- [#43411](https://github.com/vllm-project/vllm/issues/43411) [Bug]: OpenAIServingChat silently requires new openai_serving_render kwarg since v0.18
- [#43396](https://github.com/vllm-project/vllm/issues/43396) CUDA illegal memory access in FP8 MoE moe_permute with cutlass backend at batch size 8192
- [#43400](https://github.com/vllm-project/vllm/issues/43400) [Usage]: vLLM 启动后 69GB 是总占用，其中 62.18GiB 是 KV cache 预留池。 单个请求只用了约 50MiB KV cache。 我是否可以理解为：62.18GiB 大部分是预分配但当前空闲的 blocks，而当前请求活跃显存约等于 non_kv_cache_memory + request KV cache？
- [#43456](https://github.com/vllm-project/vllm/issues/43456) [deepseek_v4] DeepSeekV4MTP loader silently skips top-level head.weight + embed.weight → 0% MTP draft acceptance with no error
- [#43470](https://github.com/vllm-project/vllm/issues/43470) [Feature]: [RFC] Bottleneck-aware expansion for PD disaggregation
- [#43497](https://github.com/vllm-project/vllm/issues/43497) [Feature]: Porting `QKNormRoPEFusionPass` to manual fusion
- [#43502](https://github.com/vllm-project/vllm/issues/43502) [Feature]: Porting `AttnQuantFusionPass` to manual fusion
- [#58755](https://github.com/vllm-project/vllm/issues/58755) [Bug]: v0.30.0 ships transformers 5.17, Pixtral-based models (LightOnOCR, Mistral3) fail with ImportError PixtralRotaryEmbedding
- [#43545](https://github.com/vllm-project/vllm/issues/43545) [RFC]: Add Gumiho speculative decoding to vLLM
- [#43563](https://github.com/vllm-project/vllm/issues/43563) [Usage]: Intel Xeon Prefill Decode Disaggregation
- [#58441](https://github.com/vllm-project/vllm/issues/58441) [Bug]: Qwen4Exp PinnedHost PLE prefetch reads n-gram ids from graph-pool memory that later segments reuse
- [#44156](https://github.com/vllm-project/vllm/issues/44156) Bug: missing colon in logits processor FQCN crashes engine init with unhelpful ValueError
- [#44154](https://github.com/vllm-project/vllm/issues/44154) BUG: ValueError (not enough values to unpack) when logits processor FQCN is missing ':' separator
- [#58222](https://github.com/vllm-project/vllm/issues/58222) [Bug] NIXL lease reaper strands expired KV blocks behind a heartbeated head entry
- [#58100](https://github.com/vllm-project/vllm/issues/58100) [Feature]: Record model_id in bench latency/throughput --output-json
- [#57955](https://github.com/vllm-project/vllm/issues/57955) [Bug]: decorate_logs corrupts JSON log output

### SGLang (`sgl-project/sglang`)

**Stars:** 36,433 · **Open issues:** 5,389 · **Last push:** <1h ago

There were no new releases for SGLang today, but several important pull requests were merged, enhancing various functionalities. Notable changes include the hardening of the CI for the `/rerun-test` dispatch in PR #41285 and updates to LoRA backends to support DP attention in PR #36389. Additionally, numerous fixes were made to improve system resilience, like resolving CI failures introduced by previous merges in PR #41287, and addressing key issues with multimodal features. Among the new issues reported today, bug #41211 highlights a critical problem where the `return_logprob` function returns empty log probabilities without the correct sampling flag, leading to server errors. Overall, today's developments reflect significant behind-the-scenes enhancements and a focus on bug resolution.

#### ✅ Merged PRs
- [#41285](https://github.com/sgl-project/sglang/pull/41285) [CI] Harden `/rerun-test` dispatch and partitioning
- [#39731](https://github.com/sgl-project/sglang/pull/39731) [DCP] Use logical token capacity for PD admission and load reporting
- [#41018](https://github.com/sgl-project/sglang/pull/41018) dsv4.1-amd: gfx950 MXFP8 matmul kernels and fp8-grid producers
- [#41286](https://github.com/sgl-project/sglang/pull/41286) [Test] Remove unit tests that only mirror implementation or never run in CI
- [#41284](https://github.com/sgl-project/sglang/pull/41284) [misc] Call all_gather_single / reduce_scatter_single to drop torch deprecation warnings
- [#39660](https://github.com/sgl-project/sglang/pull/39660) [PD] Share one head-slice helper across mooncake, mori, and nixl
- [#41287](https://github.com/sgl-project/sglang/pull/41287) [Fix] Fix cpu CI fail introduced by pr #38652
- [#41280](https://github.com/sgl-project/sglang/pull/41280) [Test] Route all sgl-eval benchmarks through run_sgl_eval and deprecate run_eval
- [#36389](https://github.com/sgl-project/sglang/pull/36389) [sglang][lora] Support DP attention in LoRA backends
- [#38652](https://github.com/sgl-project/sglang/pull/38652) [LMCache] Support lmcache unified radix cache
- [#39379](https://github.com/sgl-project/sglang/pull/39379) [LoRA] Size dense row/column-parallel LoRA buffers from the base linear's real shard
- [#41216](https://github.com/sgl-project/sglang/pull/41216) [Test] Add in-process sgl-eval adapter and move validated GSM8K tests to it
- [#40786](https://github.com/sgl-project/sglang/pull/40786) [Diffusion][sglang-miles] Bring sglang-miles-h3 H3 rollout commits onto sglang-miles + LoRA-wrap fixes
- [#41215](https://github.com/sgl-project/sglang/pull/41215) [Test] Remove dead eval modules and point GSM8K/MMLU docs to sgl-eval
- [#41246](https://github.com/sgl-project/sglang/pull/41246) [Rust frontend] Decode input_ids without untagged buffering
- [#40986](https://github.com/sgl-project/sglang/pull/40986) [Sampling] Stream sampling masks as per-request arrays
- [#40621](https://github.com/sgl-project/sglang/pull/40621) Fix multimodal feature offload races
- [#41248](https://github.com/sgl-project/sglang/pull/41248) [unified-memory] Honor move gates in float relocation and size auto HiCache from host capacity
- [#28131](https://github.com/sgl-project/sglang/pull/28131) fix(multimodal): return 400 for corrupt image inputs
- [#41159](https://github.com/sgl-project/sglang/pull/41159) [AMD] Fix int32 offset overflow in Triton DSv4 KV store kernels
- [#39064](https://github.com/sgl-project/sglang/pull/39064) [ROCm][Bugfix] Keep quantization for mixed Quark Qwen3.5 MTP checkpoints
- [#41132](https://github.com/sgl-project/sglang/pull/41132) Revert "[NPU] Fuse FIA KV-cache K/V writes into one npu_scatter_pa_kv_cache call"
- [#41247](https://github.com/sgl-project/sglang/pull/41247) Fix KV offload synchronization
- [#34417](https://github.com/sgl-project/sglang/pull/34417) [Diffusion] Fix AttributeError in grouped forward_batch by installing the residency manager
- [#40486](https://github.com/sgl-project/sglang/pull/40486) [diffusion] Enable lossless Cosmos3 Super T2I QK fusion on Hopper TP2
- [#41224](https://github.com/sgl-project/sglang/pull/41224) [XPU] Disable test_ngram_corpus on XPU and extend XPU CI path filter
- [#41200](https://github.com/sgl-project/sglang/pull/41200) [Refactor] Decide an FFN exit's completion once and declare the group it owes
- [#41199](https://github.com/sgl-project/sglang/pull/41199) [Refactor] Take a layer's last-layer fact from its scatter-mode plan
- [#41191](https://github.com/sgl-project/sglang/pull/41191) [Refactor] Build prepare_mlp and the layout moves from named steps
- [#41198](https://github.com/sgl-project/sglang/pull/41198) [Refactor] Move Step-3.5, GLM5-Next, Dots3, MiniMax-M3 and Qwen3.5 onto ffn_exit
- [#41197](https://github.com/sgl-project/sglang/pull/41197) [Refactor] Leave the FFN reduction to the next layer under attention DP
- [#41196](https://github.com/sgl-project/sglang/pull/41196) [Refactor] Carry a deferred FFN all-reduce as UnreducedOutput and complete it in the next layer without the fused kernel
- [#41195](https://github.com/sgl-project/sglang/pull/41195) [Fix] Stop counting a deferred FFN sum more than once: replicated TP1 shared expert, dense reduce_scatterv
- [#41194](https://github.com/sgl-project/sglang/pull/41194) [Fix] Plan NextN / MTP draft layers as one-layer models and fix the Bailing V2 NextN draft
- [#41193](https://github.com/sgl-project/sglang/pull/41193) [Fix] Complete the all-reduce when the flashinfer fused norm declines a batch
- [#35619](https://github.com/sgl-project/sglang/pull/35619) [AMD] Integrate Aiter MegaMoEv2 for DeepSeek-V4
- [#41092](https://github.com/sgl-project/sglang/pull/41092) [HiCache] fix: Drain pending backups before internal Mamba write-back
- [#40456](https://github.com/sgl-project/sglang/pull/40456) [HiCache] Give trailing sidecar storage transfers a contiguous prefix_keys chain
- [#41067](https://github.com/sgl-project/sglang/pull/41067) [diffusion] Add native Ming-Image Design and Design-Layer support
- [#41074](https://github.com/sgl-project/sglang/pull/41074) fix: load fused shared-expert LoRA weights and bound expert indices
- [#41201](https://github.com/sgl-project/sglang/pull/41201) [DeepEP v2] Let a model package supply its per-rank prefill dispatch bound
- [#28135](https://github.com/sgl-project/sglang/pull/28135) fix(openai): reject request-supplied chat_template by default
- [#41208](https://github.com/sgl-project/sglang/pull/41208) [Feature] Add a System One compatible /v1/systemone route
- [#41062](https://github.com/sgl-project/sglang/pull/41062) [Fix] Keep the target's DP sync slot in draft scopes
- [#41207](https://github.com/sgl-project/sglang/pull/41207) [CI] Move GLM-5.2 layer-split test to extra-b-test-8-gpu-b300
- [#41061](https://github.com/sgl-project/sglang/pull/41061) [Perf] Lazy-load built-in model definitions and nixl_ep at startup
- [#40793](https://github.com/sgl-project/sglang/pull/40793) [PD] Honor gracefully_exit in disaggregation event loops and keep non-zero-rank launchers alive on SIGTERM
- [#32269](https://github.com/sgl-project/sglang/pull/32269) Support XQA backend for SpecDec verify
- [#40821](https://github.com/sgl-project/sglang/pull/40821) [sglang-miles] Colocated RL for hybrid-state models: flush order and bf16 MoE weight-update layout
- [#41095](https://github.com/sgl-project/sglang/pull/41095) [diffusion] Add opt-in SRT prompt enhancement to image and video APIs

#### 🐛 New Issues
- [#41211](https://github.com/sgl-project/sglang/issues/41211) [Bug][MLX] return_logprob silently returns empty logprobs without --mlx-enable-sampling, so /v1/score answers 500 💬2
- [#41227](https://github.com/sgl-project/sglang/issues/41227) [Bug] `--json-model-override-args '{"rope_scaling": ...}'` drops `rope_theta` for models without a per-model fallback: Llama-3.2-3B-Instruct GSM8K 161 → 106 (first 200) 💬1
- [#41236](https://github.com/sgl-project/sglang/issues/41236) [Bug] streaming silently loses up to 5 tokens of text when detokenizer state is evicted mid-request 💬1
- [#41260](https://github.com/sgl-project/sglang/issues/41260) Does a keyless upstream have to go without model discovery?
- [#41244](https://github.com/sgl-project/sglang/issues/41244) [Bug] Interrupted Mooncake trace download is reused as a complete cache

#### 🔒 Closed Issues
- [#36537](https://github.com/sgl-project/sglang/issues/36537) [Bug] Qwen3.8-Flash-Next thinking + qwen3_coder tool parser loops on token ID 0
- [#31051](https://github.com/sgl-project/sglang/issues/31051) Weight Loader v2 — protocol and migration plan (PR1–PR6)
- [#36531](https://github.com/sgl-project/sglang/issues/36531) [Bug] Qwen3.8-Flash-Next QSA fallback selects incompatible pip FA4 path on SM120
- [#31774](https://github.com/sgl-project/sglang/issues/31774) [RFC] Backend, KV dtype and platform compatibility is checked case by case, and the responses are inconsistent
- [#32548](https://github.com/sgl-project/sglang/issues/32548) [Kimi-K3][AMD] Day 0 and Performance Tracking
- [#32553](https://github.com/sgl-project/sglang/issues/32553) [Bug] --enable-prefill-cp --cp-strategy interleave crashes on DeepSeek-V4-Flash-FP8 (v0.5.16)
- [#32475](https://github.com/sgl-project/sglang/issues/32475) [Bug] KV metrics report token capacity as block capacity when `page_size > 1`
- [#32493](https://github.com/sgl-project/sglang/issues/32493) [Bug] Text-only requests on a multimodal-capable checkpoint pay two extra full-context tokenizations (rising TTFT floor on long conversations)
- [#32572](https://github.com/sgl-project/sglang/issues/32572) [Bug] LoRA support for Qwen3 VL - Missing lora adapter layers mapping
- [#32521](https://github.com/sgl-project/sglang/issues/32521) [Bug] [MLX] Hunyuan cannot be served: auto_map fails in kv_cache_builder.resolve_transformers_arch
- [#32507](https://github.com/sgl-project/sglang/issues/32507) [Bug] CPU OffloaderV2 with DeepEP fails when local expert count is not in copy_to_gpu_no_ce supported sizes
- [#32486](https://github.com/sgl-project/sglang/issues/32486) [Bug] Object-store speculative draft metadata is not downloaded before worker startup
- [#32485](https://github.com/sgl-project/sglang/issues/32485) [Feature] Select only required RunAI shards for MTP draft models
- [#36532](https://github.com/sgl-project/sglang/issues/36532) [Bug] FlashInfer GDN prefill/decode state dtype requirements conflict on SM120
- [#38253](https://github.com/sgl-project/sglang/issues/38253) [Bug] glm5_next qkvbfg fusion disabled on FP8 GLM-5.3-Flash: gate checks global quant_config, not per-layer
- [#39800](https://github.com/sgl-project/sglang/issues/39800) HellaSwag accuracy test cannot run: rowanz/hellaswag is blocked (HTTP 451), breaking base-a and stage-a-amd on every PR

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 129,525 · **Open issues:** 2,528 · **Last push:** <1h ago

On September 26, 2026, the llama.cpp repository released two new versions, b11192 and b11191, with b11192 focusing on updating cpp-httplib to version 0.58.0, while b11191 simplified the `fs_create_directory_with_parents()` function to improve compatibility with Unicode paths on Windows. Additionally, several significant merged features included the fix for the mel preprocessor in LFM2 audio in b11190, which addressed discrepancies in English and Japanese transcripts, as well as the introduction of new OpenCL binary kernels and improvements to the Vulkan build process. Notably, a new issue surfaced requesting support for K2 Horizon models, highlighting ongoing interest in expanding llama.cpp's capabilities.

#### 🚀 New Releases
- [b11192](https://github.com/ggml-org/llama.cpp/releases/tag/b11192) b11192
- [b11191](https://github.com/ggml-org/llama.cpp/releases/tag/b11191) b11191
- [b11190](https://github.com/ggml-org/llama.cpp/releases/tag/b11190) b11190
- [b11189](https://github.com/ggml-org/llama.cpp/releases/tag/b11189) b11189
- [b11188](https://github.com/ggml-org/llama.cpp/releases/tag/b11188) b11188
- [b11185](https://github.com/ggml-org/llama.cpp/releases/tag/b11185) b11185
- [b11184](https://github.com/ggml-org/llama.cpp/releases/tag/b11184) b11184
- [b11183](https://github.com/ggml-org/llama.cpp/releases/tag/b11183) b11183
- [b11182](https://github.com/ggml-org/llama.cpp/releases/tag/b11182) b11182
- [b11181](https://github.com/ggml-org/llama.cpp/releases/tag/b11181) b11181

#### ✅ Merged PRs
- [#29407](https://github.com/ggml-org/llama.cpp/pull/29407) vendor : update cpp-httplib to 0.58.0
- [#29432](https://github.com/ggml-org/llama.cpp/pull/29432) common,rpc : simplify fs_create_directory_with_parents()
- [#29403](https://github.com/ggml-org/llama.cpp/pull/29403) audio: fix mel preprocessor in LFM2 audio
- [#29401](https://github.com/ggml-org/llama.cpp/pull/29401) opencl: add bin kernel `kernel_gemm_noshuffle_q5_k_f32_32b_trans_ila_a8_bin`, `kernel_gemm_noshuffle_q5_k_q8_1_dp4a_ila_a8_bin`
- [#29409](https://github.com/ggml-org/llama.cpp/pull/29409) Fixing the vulkan build issue of legacy GLSLC version that has no cooperativeMatrix API support (https://github.com/ggml-org/llama.cpp/issues/29373)
- [#29422](https://github.com/ggml-org/llama.cpp/pull/29422) gguf-py : ByteLevel processing defaults bos/eos to False
- [#29417](https://github.com/ggml-org/llama.cpp/pull/29417) gguf-py : TemplateProcessing has final word on add_special_token
- [#29294](https://github.com/ggml-org/llama.cpp/pull/29294) llama : fix tensor split for fused qkv with uneven K/V head sizes
- [#29415](https://github.com/ggml-org/llama.cpp/pull/29415) common : extract shared unicode path/string helpers
- [#29095](https://github.com/ggml-org/llama.cpp/pull/29095) metal: FWHT kernels for block widths above 512
- [#29329](https://github.com/ggml-org/llama.cpp/pull/29329) metal : split fa kernels into per-dtype libraries
- [#24364](https://github.com/ggml-org/llama.cpp/pull/24364) Force NVFP4 W4A8 path for NVFP4_W4A16 layers on Blackwell, where NVFP4 normally uses the native W4A4 path.
- [#29231](https://github.com/ggml-org/llama.cpp/pull/29231) HIP: bump HIP_VERSION requried for fp8 to avoid missing __hip_fp8_e4m3 support in 6.2
- [#29283](https://github.com/ggml-org/llama.cpp/pull/29283) rpc: include nb in the get_alloc_size cache key and floor the result at ggml_nbytes
- [#28796](https://github.com/ggml-org/llama.cpp/pull/28796) [SYCL] support sparse FA
- [#29193](https://github.com/ggml-org/llama.cpp/pull/29193) musa: fix PH1 (MTT S5000) operator failures and build issues
- [#29393](https://github.com/ggml-org/llama.cpp/pull/29393) CUDA: fuse RMS_NORM + SCALE into one kernel
- [#29123](https://github.com/ggml-org/llama.cpp/pull/29123) hexagon: add q5_k quant type support
- [#29404](https://github.com/ggml-org/llama.cpp/pull/29404) hexagon: use DMA for contiguous dim1 CONCAT

#### 🐛 New Issues
- [#29424](https://github.com/ggml-org/llama.cpp/issues/29424) Feature Request: Add support for K2 Horizon (0.9B, 3.7B, 7B, 32B, 36B MoVA) `enhancement` 💬7
- [#29419](https://github.com/ggml-org/llama.cpp/issues/29419) [SYCL] Abort with "Not support Flash-Attention" in ggml-sycl/fattn.cpp:318 during speculative draft decoding (MTP) with tensor split `bug-unconfirmed` 💬2
- [#29441](https://github.com/ggml-org/llama.cpp/issues/29441) Non-uniform pressure `enhancement` 💬2
- [#29410](https://github.com/ggml-org/llama.cpp/issues/29410) Eval bug: RX 7800 XT Vulkan decode and MTP slower on 84e76d8a2 than c77ae695c; #27952 prefill gain not seen 💬2
- [#29411](https://github.com/ggml-org/llama.cpp/issues/29411) Misc. bug: Hexagon ADD reads wrong rows when dim 1 broadcasts across dim 2 slices 💬1
- [#29445](https://github.com/ggml-org/llama.cpp/issues/29445) webui: MP4 selected via Images action makes later PNG fail in the same chat
- [#29438](https://github.com/ggml-org/llama.cpp/issues/29438) CPU backend: null-pointer crash in ggml_backend_sched_graph_compute_async on first llama_decode (iOS, A15, v0.1.2) `bug-unconfirmed`
- [#29436](https://github.com/ggml-org/llama.cpp/issues/29436) Feature Request: can you add model of to run on Qualcomm NPU `enhancement`
- [#29431](https://github.com/ggml-org/llama.cpp/issues/29431) Misc. bug: Vulkan ARGSORT ne=[2048,1,1,1] only sorts half of the array on some devices `bug-unconfirmed`
- [#29418](https://github.com/ggml-org/llama.cpp/issues/29418) [Vulkan] GGML_ASSERT(neq0 == HSK) failed in ggml-vulkan.cpp during speculative draft decoding (MTP) with tensor split `bug-unconfirmed`
- [#29406](https://github.com/ggml-org/llama.cpp/issues/29406) Eval bug: CUDA ROUND rounds half to even with an MSVC host compiler (test-backend-ops ROUND f16 fails)

#### 🔒 Closed Issues
- [#25807](https://github.com/ggml-org/llama.cpp/issues/25807) Misc. bug: ROCm-7.14 - > 'error while loading shared libraries: libhipblas.so.3'
- [#24946](https://github.com/ggml-org/llama.cpp/issues/24946) [SYCL/xe] -cb pins GPU at gt-c0 on Battlemage, prevents idle power savings
- [#24415](https://github.com/ggml-org/llama.cpp/issues/24415) Eval bug: can't load gemma-4-12B with OpenVINO (CPU, GPU and NPU)
- [#26027](https://github.com/ggml-org/llama.cpp/issues/26027) Eval bug: GLM-5.2 (glm_moe_dsa) dense-MLA CUDA path produces subtly corrupted output for ANY real transformer layer offloaded to GPU (partial coherent text mixed with garbage)
- [#26475](https://github.com/ggml-org/llama.cpp/issues/26475) Eval bug: using -devd CUDA0 on draft-dspark causes model to crash
- [#26435](https://github.com/ggml-org/llama.cpp/issues/26435) Eval bug: HIP/ROCm: Regression in prompt processing MI210
- [#26747](https://github.com/ggml-org/llama.cpp/issues/26747) Feature Request: SYCL: use less VRAM
- [#26916](https://github.com/ggml-org/llama.cpp/issues/26916) Eval bug: Qwen3.5-Hybrid model (qwen3_5, SSM+Attention) fails to load — "tensor 'blk.32.attn_norm.weight' not found"
- [#26965](https://github.com/ggml-org/llama.cpp/issues/26965) Eval bug: DeepSeek V4 Flash tokenizer blows its stack on long tool output
- [#26988](https://github.com/ggml-org/llama.cpp/issues/26988) Misc. bug: --cors-origins does not follow spec
- [#27979](https://github.com/ggml-org/llama.cpp/issues/27979) Misc. bug: Hexagon: dma_queue_push's stride overflow fallback breaks callee expectations
- [#26967](https://github.com/ggml-org/llama.cpp/issues/26967) DFlash: corrupted predicted_ms on some Q4/Metal requests
- [#26978](https://github.com/ggml-org/llama.cpp/issues/26978) Misc. bug: GGUF loader accepts a tensor size that wraps to 0 after padding
- [#26981](https://github.com/ggml-org/llama.cpp/issues/26981) Eval bug: gemma4uv mmproj + CUDA → SIGABRT in mtmd_helper_decode_image_chunk → llama_context::decode (workarounds from #24251 and #24314 do not help)
- [#26982](https://github.com/ggml-org/llama.cpp/issues/26982) HIP: check why the pertubation from -funsafe-math-optimizations is so large
- [#27303](https://github.com/ggml-org/llama.cpp/issues/27303) HIP build fails on ROCm 6.2.x — `vendors/hip.h` typedefs `__hip_fp8_e4m3`, which does not exist before ROCm 6.3.0

### Ollama (`ollama/ollama`)

**Stars:** 181,730 · **Open issues:** 4,093 · **Last push:** 3h ago

On September 26, 2026, Ollama released version v0.40.0-rc0, introducing a key change that allows models running on Apple Silicon devices to automatically utilize the MLX runtime, enhancing performance and efficiency. This upgrade simplifies operations for users with compatible hardware, as they can now seamlessly execute commands like `ollama pull qwen3.8` and `ollama run qwen3.8`. No pull requests were merged in the last 24 hours, but several new issues were reported, including a significant bug (#18642) related to CUDA illegal memory access on RTX 5090 with the Cohere MoE architecture in Windows, which has drawn attention from the community. Other notable reports encompass concerns with the MLX pull path not detecting disk full conditions (#18644) and regressions in feature availability since version 0.34.2.

#### 🚀 New Releases
- [v0.40.0-rc0](https://github.com/ollama/ollama/releases/tag/v0.40.0-rc0) v0.40.0

#### 🐛 New Issues
- [#18644](https://github.com/ollama/ollama/issues/18644) MLX pull path doesn't detect disk full `bug` `mlx` 💬6
- [#18642](https://github.com/ollama/ollama/issues/18642) [Bug] CUDA illegal memory access (MUL_MAT) on RTX 5090 with Cohere MoE architecture (Windows) `bug` 💬2
- [#18655](https://github.com/ollama/ollama/issues/18655) OpenAI-compatible endpoint: response ids have only 999 possible values (chatcmpl-rand.Intn(999))
- [#18653](https://github.com/ollama/ollama/issues/18653) Cloud API: expose credit balance & true spend after pay-as-you-go migration
- [#18649](https://github.com/ollama/ollama/issues/18649) gemma4 parser: valid tool call rejected due to trailing garbage tokens after closing braces
- [#18637](https://github.com/ollama/ollama/issues/18637) [Cloud] deepseek-v4.1-flash silently discards image input again — regression of #18527
- [#18638](https://github.com/ollama/ollama/issues/18638) From 0.34.2 onwards the good feature of chat,code ,&work is missing `feature request`

#### 🔒 Closed Issues
- [#18509](https://github.com/ollama/ollama/issues/18509) Ollama refusing toolcalls, which always worked fine in llama.cpp with qwen.
- [#18387](https://github.com/ollama/ollama/issues/18387) More than ten ellipses between Titles and Page Numbers in Table of Contents will cause ollama 'cancel task'
- [#18637](https://github.com/ollama/ollama/issues/18637) [Cloud] deepseek-v4.1-flash silently discards image input again — regression of #18527
- [#18638](https://github.com/ollama/ollama/issues/18638) From 0.34.2 onwards the good feature of chat,code ,&work is missing

### LiteLLM (`BerriAI/litellm`)

**Stars:** 59,635 · **Open issues:** 5,291 · **Last push:** <1h ago

Today, LiteLLM released several new versions, including v1.104.0-dev.2, v1.100.3, v1.99.4, and v1.98.1, all of which feature signed Docker images for enhanced security. Significant merged pull requests included a refactoring of credential inheritance in PR #43259 and the addition of typesafe support for jev-router in cost mapping through PR #43248. Noteworthy fixes addressed logging redaction in PR #43219 and router behavior in PR #43215, which improves parsing classifier verdicts. Among new issues, bug #43165 highlights problems with the router fallback mechanism returning null response bodies after timeouts, indicating a potentially critical area for further investigation.

#### 🚀 New Releases
- [v1.104.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.104.0-dev.2) v1.104.0-dev.2
- [v1.100.3](https://github.com/BerriAI/litellm/releases/tag/v1.100.3) v1.100.3
- [v1.99.4](https://github.com/BerriAI/litellm/releases/tag/v1.99.4) v1.99.4
- [v1.98.1](https://github.com/BerriAI/litellm/releases/tag/v1.98.1) v1.98.1

#### ✅ Merged PRs
- [#43259](https://github.com/BerriAI/litellm/pull/43259) refactor(rust): move credential inheritance and SDK limits into a driver preflight
- [#43253](https://github.com/BerriAI/litellm/pull/43253) fix(cost-map): correct fireworks_ai deepseek-v4p1-flash pricing
- [#43252](https://github.com/BerriAI/litellm/pull/43252) chore(cost-map): add fireworks priority prices for muse glimmer 30b and deepseek v4 flash vision exp
- [#43248](https://github.com/BerriAI/litellm/pull/43248) feat(openrouter): add typesafe/jev-router to the cost map
- [#43246](https://github.com/BerriAI/litellm/pull/43246) chore(cost-map): sync openrouter prices and add perceptron-mk1.5
- [#43247](https://github.com/BerriAI/litellm/pull/43247) chore(cost-map): add fireworks us-only deepseek v4.1 flash priority prices
- [#43199](https://github.com/BerriAI/litellm/pull/43199) test: move tests/test_litellm core utils, routing, responses, caching and rust_bridge into tests/unit
- [#43231](https://github.com/BerriAI/litellm/pull/43231) fix(proxy): keep the submitted body out of 422 validation errors
- [#43235](https://github.com/BerriAI/litellm/pull/43235) test(zerobus): move tests into active CI selection
- [#43215](https://github.com/BerriAI/litellm/pull/43215) fix(router): parse the classifier verdict out of surrounding prose instead of falling to the default tier
- [#43219](https://github.com/BerriAI/litellm/pull/43219) fix(logging): redact raw_request when turn_off_message_logging is set in the proxy config
- [#41826](https://github.com/BerriAI/litellm/pull/41826) fix(proxy): send a real error event when a /v1/messages stream fails
- [#42812](https://github.com/BerriAI/litellm/pull/42812) feat(xai): add native xAI batches and files support
- [#42803](https://github.com/BerriAI/litellm/pull/42803) fix(vertex_ai): keep legacy bucket_name in credential resolution and add GCS_BATCH_BUCKET_NAME env var
- [#42013](https://github.com/BerriAI/litellm/pull/42013) feat(integrations): add Databricks Zerobus trace logging callback
- [#43206](https://github.com/BerriAI/litellm/pull/43206) fix(jwt): let x-litellm-team-id select DB membership teams when the token also carries a team claim
- [#43213](https://github.com/BerriAI/litellm/pull/43213) fix(bedrock): surface a converse-stream 200 that decodes to no events as a 502 instead of an empty turn
- [#36741](https://github.com/BerriAI/litellm/pull/36741) feat(langfuse)!: migrate the sdk callback to langfuse v4
- [#43123](https://github.com/BerriAI/litellm/pull/43123) fix(sentry): scrub PII and secrets inside object reprs and nested locals, add SENTRY_SEND_DEFAULT_PII opt-in
- [#43133](https://github.com/BerriAI/litellm/pull/43133) fix(responses): fall back on pre-output stream drops, fail truncated streams, honor request_timeout
- [#38172](https://github.com/BerriAI/litellm/pull/38172) fix(router): count provider budget spend on every API surface
- [#43212](https://github.com/BerriAI/litellm/pull/43212) fix(tests): drop the repeated UNIT_FLAG key in test_unit_shard_missing_paths
- [#43140](https://github.com/BerriAI/litellm/pull/43140) fix(proxy): record streamed /v1/responses container ownership before the response.completed frame
- [#43169](https://github.com/BerriAI/litellm/pull/43169) feat(mcp): configure protocol versions and capability discovery
- [#43194](https://github.com/BerriAI/litellm/pull/43194) test: move tests/test_litellm integrations and secret_managers into tests/unit
- [#43191](https://github.com/BerriAI/litellm/pull/43191) test: move tests/test_litellm/llms into tests/unit/llms
- [#43126](https://github.com/BerriAI/litellm/pull/43126) fix(anthropic): surface Responses bridge stream failures as Anthropic error events
- [#43193](https://github.com/BerriAI/litellm/pull/43193) refactor(framer): replace Framer trait with tokio-util codecs
- [#43150](https://github.com/BerriAI/litellm/pull/43150) fix(sso): gate /sso/debug routes behind ENABLE_SSO_DEBUG, off by default
- [#43186](https://github.com/BerriAI/litellm/pull/43186) test: move tests/test_litellm root and small trees into tests/unit
- [#43182](https://github.com/BerriAI/litellm/pull/43182) ci: run migrated unit selections on every event in legacy GHA shards
- [#43181](https://github.com/BerriAI/litellm/pull/43181) feat(testkit): agent clients for Claude Code, Codex and opencode
- [#43178](https://github.com/BerriAI/litellm/pull/43178) feat(rust): hand upstream response headers to the native Messages stream
- [#41768](https://github.com/BerriAI/litellm/pull/41768) fix(proxy): give SpendLogToolIndex its own share of the cleanup budget and log a per-run summary
- [#43177](https://github.com/BerriAI/litellm/pull/43177) test(rust): reorganize core crate tests and split cache and OCR suites
- [#43136](https://github.com/BerriAI/litellm/pull/43136) feat(model-catalog): add Rust registry validation
- [#43110](https://github.com/BerriAI/litellm/pull/43110) fix(caching): propagate auth cache invalidation over Redis Cluster via a node-level pub/sub client
- [#43089](https://github.com/BerriAI/litellm/pull/43089) feat(mcp): share compatibility-aware result conversion across tool surfaces
- [#43023](https://github.com/BerriAI/litellm/pull/43023) fix(presidio): mask streamed /v1/messages output when the first upstream read is a keepalive, a data-less ping, or a split utf8 character
- [#43008](https://github.com/BerriAI/litellm/pull/43008) fix(ui): group cost optimization cache leakage by model group
- [#41231](https://github.com/BerriAI/litellm/pull/41231) fix(key_management): count team unified access group MCP servers when validating key MCP grants
- [#43143](https://github.com/BerriAI/litellm/pull/43143) chore(cost-map): add openai cached image input prices from the pricing page
- [#43132](https://github.com/BerriAI/litellm/pull/43132) chore(release): backport #39631, #39729, #40639 to stable/1.100.x and cut 1.100.3
- [#43131](https://github.com/BerriAI/litellm/pull/43131) chore(release): backport #39631, #39729, #40639 to stable/1.99.x and cut 1.99.4
- [#43130](https://github.com/BerriAI/litellm/pull/43130) chore(release): backport #39631, #39729, #40639 to stable/1.98.x
- [#43125](https://github.com/BerriAI/litellm/pull/43125) fix(router): await budget redis pipeline before sync reads (internal copy of #32618)
- [#43122](https://github.com/BerriAI/litellm/pull/43122) test(e2e): cover Azure code_interpreter container files by native id with a service-account key
- [#43135](https://github.com/BerriAI/litellm/pull/43135) fix(together_ai): backfill deprecation_date from Together deprecation history
- [#33227](https://github.com/BerriAI/litellm/pull/33227) feat(providers): add Nadir intelligent-router provider (nadir/auto)
- [#42630](https://github.com/BerriAI/litellm/pull/42630) fix(anthropic): keep the replayed prefix byte-stable for preserved thinking on chat completions
- [#43121](https://github.com/BerriAI/litellm/pull/43121) ci: cut rc/<X.Y.0> off main every Friday at 3am Pacific
- [#43108](https://github.com/BerriAI/litellm/pull/43108) feat(mcp): allow ["*"] wildcard in mcp_tool_permissions to grant all current and future tools
- [#43127](https://github.com/BerriAI/litellm/pull/43127) chore(cost-map): add together-ai deprecation dates for gpt-oss-20b and gemma-4-31B-it
- [#43129](https://github.com/BerriAI/litellm/pull/43129) refactor(rust): extract the host coroutine into its own crate
- [#43114](https://github.com/BerriAI/litellm/pull/43114) fix(cost): apply a deployment's pricing override to realtime sessions
- [#43120](https://github.com/BerriAI/litellm/pull/43120) chore: bump litellm-enterprise 0.1.70 -> 0.1.71, litellm-proxy-extras 0.4.101 -> 0.4.102
- [#42843](https://github.com/BerriAI/litellm/pull/42843) refactor(types): declare litellm-owned kwargs as typed objects and derive the lists from their fields
- [#43111](https://github.com/BerriAI/litellm/pull/43111) fix(router): honor disable_fallbacks on mid-stream fallback
- [#43079](https://github.com/BerriAI/litellm/pull/43079) fix(vertex_ai): stop advertising OpenAI platform-only params on Gemma and Llama routes
- [#43117](https://github.com/BerriAI/litellm/pull/43117) chore(cost-map): add azure retirement dates for command-r-plus and gpt-4
- [#43049](https://github.com/BerriAI/litellm/pull/43049) fix(proxy): authorize key model aliases the same way as team aliases
- [#43116](https://github.com/BerriAI/litellm/pull/43116) chore(cost-map): add computer-use-preview deprecation date from the openai deprecations page
- [#43101](https://github.com/BerriAI/litellm/pull/43101) fix(fal_ai): price nano-banana-2 and nano-banana-pro image generations by resolution
- [#43104](https://github.com/BerriAI/litellm/pull/43104) chore(cost-map): add azure retirement dates from the retired Foundry models page
- [#43075](https://github.com/BerriAI/litellm/pull/43075) fix(vertex_ai): surface the Gemma container's own error inside a 200 :predict response
- [#42555](https://github.com/BerriAI/litellm/pull/42555) feat(proxy): let team admins update member key budgets when enabled
- [#43103](https://github.com/BerriAI/litellm/pull/43103) chore(cost-map): add gemini tts batch output prices from the Gemini API pricing page
- [#43102](https://github.com/BerriAI/litellm/pull/43102) chore(cost-map): add openai deprecation dates from the deprecations page
- [#42650](https://github.com/BerriAI/litellm/pull/42650) feat(lint): cap comprehensions at one for and one if clause (LIT014)
- [#43100](https://github.com/BerriAI/litellm/pull/43100) fix(vertex_ai): return chunk content, extractive text, and structData from search_api vector store hits
- [#43093](https://github.com/BerriAI/litellm/pull/43093) test(e2e): pin end-user and tag attribution from Codex-style headers on /v1/responses
- [#40541](https://github.com/BerriAI/litellm/pull/40541) fix(spend): attribute CLI session spend to the per-user cli-session alias instead of the hashed session token
- [#43081](https://github.com/BerriAI/litellm/pull/43081) refactor(ocr): remove the Python OCR execution path and require the Rust route
- [#43057](https://github.com/BerriAI/litellm/pull/43057) feat(rust_bridge): read secrets through Python from Rust routes and declare Rust-only routes with NO_PYTHON

#### 🐛 New Issues
- [#43165](https://github.com/BerriAI/litellm/issues/43165) [Bug]: Router fallback returns null response body after successful fallback on primary timeout (non-streaming) `llm translation` 💬12
- [#43157](https://github.com/BerriAI/litellm/issues/43157) sanitize_input_schema_for_anthropic drops root anyOf/$ref and ships empty properties for union tools `llm translation` 💬5
- [#43146](https://github.com/BerriAI/litellm/issues/43146) [Bug]: Databricks model map needs to be updated for Unity Gateway `bug` 💬4
- [#43166](https://github.com/BerriAI/litellm/issues/43166) [Feature]: Support Gemini Live Avatar (avatar_config / customized_avatar) in realtime Gemini/Vertex integration `llm translation` 💬2
- [#43153](https://github.com/BerriAI/litellm/issues/43153) [Bug]: Router retries re-execute auto-approved MCP tools after a failed follow-up model call `llm translation` 💬2
- [#43155](https://github.com/BerriAI/litellm/issues/43155) _handle_invalid_parallel_tool_calls shift off-by-one leaves leftover multi_tool_use.parallel `llm translation` 💬1
- [#43156](https://github.com/BerriAI/litellm/issues/43156) Gemini tool translate maps empty arguments="" to args={"type":"object"} instead of {} `llm translation` 💬1
- [#43124](https://github.com/BerriAI/litellm/issues/43124) [Bug]: /chat/completions rejects tool_choice type allowed_tools (valid OpenAI spec, works on gpt-5.6) `llm translation` 💬1
- [#43256](https://github.com/BerriAI/litellm/issues/43256) [Feature]: Change a virtual key's owner to yourself or to a service account from the Admin UI
- [#43228](https://github.com/BerriAI/litellm/issues/43228) Feature request: configurable self-serve budget adjustment policy for a key's own owner
- [#43214](https://github.com/BerriAI/litellm/issues/43214) RouterBudgetLimiting treats max_budget=0 as unlimited instead of blocking all spend (provider/deployment/tag) `llm translation`
- [#43207](https://github.com/BerriAI/litellm/issues/43207) [Bug]: DashScope image generation nests provider params under `parameters.extra_body`, so `watermark` / `negative_prompt` / `seed` / `prompt_extend` are silently ignored `llm translation`
- [#43203](https://github.com/BerriAI/litellm/issues/43203) [Feature]: Graph tokens per second over time by model and provider `enhancement` `ui-dashboard`
- [#43201](https://github.com/BerriAI/litellm/issues/43201) [Bug]: misc / Run tests fails on every main commit since #43186 — test_unit_shard_missing_paths cannot find .circleci/scripts/unit_selection.sh
- [#43188](https://github.com/BerriAI/litellm/issues/43188) [Bug]: DualCache writes Redis entries with `default_in_memory_ttl`, so a configured `default_redis_ttl` never takes effect `llm translation`
- [#43192](https://github.com/BerriAI/litellm/issues/43192) [Bug]: mcp-integration is flaky on main since #42904 — test_cancellation_delivers_termination_over_tcp fails on ~19% of commits
- [#43190](https://github.com/BerriAI/litellm/issues/43190) [Bug]: max_iterations and max_budget_per_session are shared by every agent in the same trace
- [#43187](https://github.com/BerriAI/litellm/issues/43187) [Bug]: DualCache writes Redis entries with `default_in_memory_ttl`, so a configured `default_redis_ttl` never takes effect `llm translation`
- [#43128](https://github.com/BerriAI/litellm/issues/43128) [Bug]: Databricks chat response missing content raises APIConnectionError `llm translation`
- [#43119](https://github.com/BerriAI/litellm/issues/43119) Proposal: a Nano (XNO) 402 pay-per-token example for the LiteLLM gateway

#### 🔒 Closed Issues
- [#24123](https://github.com/BerriAI/litellm/issues/24123) [Feature]: Support Langfuse Python SDK v4
- [#33383](https://github.com/BerriAI/litellm/issues/33383) Upgrade Langfuse integration to Python SDK v4 and v4 OTel ingestion
- [#30882](https://github.com/BerriAI/litellm/issues/30882) [Bug]: Extra inputs are not permitted with mistral/mistral-large-latest
- [#37877](https://github.com/BerriAI/litellm/issues/37877) [Bug]: provider budget never counts embedding or rerank spend — RouterBudgetLimiting raises "custom_llm_provider is required"
- [#26701](https://github.com/BerriAI/litellm/issues/26701) [Bug] custom_llm_provider not propagated to budget_limiter.async_log_success_event for /v1/messages + /v1/embeddings
- [#30276](https://github.com/BerriAI/litellm/issues/30276) [Bug]: provider_budget_config raises 'custom_llm_provider is required' on every successful embedding call
- [#39703](https://github.com/BerriAI/litellm/issues/39703) [Bug]: /v1/messages Responses bridge hides upstream failures — response.failed becomes stop_reason "end_turn" (<=1.96) / the raise is swallowed leaving an unterminated stream (1.97+)
- [#38176](https://github.com/BerriAI/litellm/issues/38176) [Bug]: provider budgets never count /v1/responses or /v1/messages spend, so agent traffic bypasses the cap entirely
- [#43188](https://github.com/BerriAI/litellm/issues/43188) [Bug]: DualCache writes Redis entries with `default_in_memory_ttl`, so a configured `default_redis_ttl` never takes effect
- [#32614](https://github.com/BerriAI/litellm/issues/32614) [Bug]: Router budget sync can overwrite memory cache with stale Redis spend

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,787 · **Open issues:** 1,298 · **Last push:** <1h ago

On September 26, 2026, there were no new releases for Unsloth. Among the significant developments, the merged pull requests included enhancements to the Studio interface, such as a tidier toolbar menu and updated card icons (#11978), as well as the installation of flashinfer on demand for NVFP4 (#11730). A major bug fix addressed silent exports of base models in PEFT (#11781). The team also tackled several new issues, with a particularly notable bug reported regarding the ROCm Docker image misidentifying model versions, which could lead to failures in loading Qwen-Image-2.1 (#11890). Overall, the day was largely focused on interface improvements and fixes in response to user feedback.

#### ✅ Merged PRs
- [#11978](https://github.com/unslothai/unsloth/pull/11978) Studio: Library grid Sort menu, tidier toolbar menus and card icons
- [#10889](https://github.com/unslothai/unsloth/pull/10889) Studio: compile the VAE decode for DiT families, from the NVFP4 time budget pass
- [#11986](https://github.com/unslothai/unsloth/pull/11986) Studio: steady pinned model drop line and pill-shaped project drop highlight
- [#11730](https://github.com/unslothai/unsloth/pull/11730) Studio: install flashinfer on demand for NVFP4 without moving torch
- [#11781](https://github.com/unslothai/unsloth/pull/11781) Fix PEFT base export targets silently exporting the base model
- [#11896](https://github.com/unslothai/unsloth/pull/11896) Studio: read text, Markdown and HTML uploads in the encoding they were written in
- [#11818](https://github.com/unslothai/unsloth/pull/11818) Studio: keep inline HTML text in its line when parsing an upload
- [#10731](https://github.com/unslothai/unsloth/pull/10731) Studio: NVFP4 flashinfer backend kernel items (device guard, persistent barrier, bias path, cached dispatch)
- [#10730](https://github.com/unslothai/unsloth/pull/10730) Studio: per-layer NVFP4 image policies, flashinfer FP4 backend and a gated auto row
- [#10729](https://github.com/unslothai/unsloth/pull/10729) Studio: whole-model NVFP4 for the video families with hosted pre-quantized denoisers
- [#11390](https://github.com/unslothai/unsloth/pull/11390) Studio: add Windows MXC Preview sandboxing
- [#11209](https://github.com/unslothai/unsloth/pull/11209) Studio: minimal OS sandbox for Python and Terminal tools on Linux and macOS
- [#11836](https://github.com/unslothai/unsloth/pull/11836) Load 4.x-era configs that transformers 5 strict validation rejects (Llama 4 attn_temperature_tuning)
- [#11898](https://github.com/unslothai/unsloth/pull/11898) Divide by gradient accumulation for forwards that take **kwargs but return a mean loss
- [#11883](https://github.com/unslothai/unsloth/pull/11883) Studio: run Qwen-Image-2.1 int8/fp8 on 24 GB cards with the transformer resident and the text encoder streamed
- [#11592](https://github.com/unslothai/unsloth/pull/11592) Load NVIDIA ModelOpt FP8 checkpoints through the transformers fp8 quantizer
- [#11957](https://github.com/unslothai/unsloth/pull/11957) Pin the compiled mask wrapper only when it is compiled
- [#11383](https://github.com/unslothai/unsloth/pull/11383) fix(studio): recover from a dead Metal GPU queue instead of failing every later request
- [#11860](https://github.com/unslothai/unsloth/pull/11860) Keep the training state intact across a standalone evaluate() / predict()
- [#11938](https://github.com/unslothai/unsloth/pull/11938) fix(studio): retain GGUF quants across cache-folder switches
- [#11523](https://github.com/unslothai/unsloth/pull/11523) Hand a composition with no forward of its own to its thinker (Qwen3-Omni)
- [#11620](https://github.com/unslothai/unsloth/pull/11620) Load and fine-tune LongCat-Flash-Lite-Sparse on transformers' longcat_flash
- [#11955](https://github.com/unslothai/unsloth/pull/11955) Format the two files #11526 left off the formatter's fixed point
- [#11776](https://github.com/unslothai/unsloth/pull/11776) Studio: open Images and Video previews in the Library viewer
- [#11771](https://github.com/unslothai/unsloth/pull/11771) Studio: Library settings, storage and sortable list columns
- [#11543](https://github.com/unslothai/unsloth/pull/11543) Resolve remote-code model classes, reach per-expert submodules with LoRA, run the root dispatch hook on the embedding's device (Nemotron-Labs-Teacher)
- [#11770](https://github.com/unslothai/unsloth/pull/11770) Studio: Library page for files, media and fine-tunes
- [#11888](https://github.com/unslothai/unsloth/pull/11888) Studio: Qwen-Image-2.1 RoPE in real arithmetic inside the compiled blocks
- [#11748](https://github.com/unslothai/unsloth/pull/11748) Studio: static step skip for video generation
- [#11737](https://github.com/unslothai/unsloth/pull/11737) Studio: static step skip for image models that keeps CUDA graphs
- [#11531](https://github.com/unslothai/unsloth/pull/11531) Finish a 16bit load of a static per-tensor fp8 checkpoint (Mistral-Small-4)
- [#11526](https://github.com/unslothai/unsloth/pull/11526) Load and train remote-code multimodal wrappers: Phi-4-reasoning-vision in 4-bit and Nemotron-3-Nano-Omni
- [#11798](https://github.com/unslothai/unsloth/pull/11798) Studio: tile the VAE instead of refusing oversized upscales, and in-app remedies for image refusals
- [#11819](https://github.com/unslothai/unsloth/pull/11819) Studio: keep bf16 for auto precision on image families that cannot compile
- [#11904](https://github.com/unslothai/unsloth/pull/11904) Studio: apply remembered settings for MLX and safetensors models to API loads
- [#11712](https://github.com/unslothai/unsloth/pull/11712) Studio: run an explicit int8 under offload on NVIDIA as torchao-free W8A8
- [#11802](https://github.com/unslothai/unsloth/pull/11802) Studio: count the hosted text encoder and keep the GGUF denoiser resident when only the encoder does not fit
- [#11631](https://github.com/unslothai/unsloth/pull/11631) Unsloth Studio (AMD): allow INT8 / FP8 image and video precision without torchao
- [#11903](https://github.com/unslothai/unsloth/pull/11903) fix(studio): classify MLX requests from the applied chat template override
- [#11844](https://github.com/unslothai/unsloth/pull/11844) Studio: cache text-encoder outputs so repeat prompts skip the encoder
- [#11791](https://github.com/unslothai/unsloth/pull/11791) Studio: auto step cache (FBCache) only on the max speed tier
- [#11877](https://github.com/unslothai/unsloth/pull/11877) fix(grpo): use the evaluated model's output head for log-probs
- [#11801](https://github.com/unslothai/unsloth/pull/11801) Studio: faster MiniMax-H3 video VAE encode and decode
- [#11790](https://github.com/unslothai/unsloth/pull/11790) Studio: release VRAM when an image model is unloaded mid-render
- [#11824](https://github.com/unslothai/unsloth/pull/11824) Studio: HunyuanVideo-1.5 padded-text trim on the max speed tier
- [#11586](https://github.com/unslothai/unsloth/pull/11586) Point -bf16 4-bit requests at quantization_config, and warn when a bitsandbytes load quantized nothing
- [#10794](https://github.com/unslothai/unsloth/pull/10794) fix(studio): count rendered GGUF prompts before shared-KV admission
- [#11766](https://github.com/unslothai/unsloth/pull/11766) Studio: pin the kept offload weights on first onload when host RAM allows
- [#11764](https://github.com/unslothai/unsloth/pull/11764) Studio: whole-model offload points weights back at their host tensors instead of copying them
- [#11899](https://github.com/unslothai/unsloth/pull/11899) Studio: compile the diffusion denoiser on fp16 GPUs when a speed tier is picked (T4 and other pre-Ampere cards)
- [#11881](https://github.com/unslothai/unsloth/pull/11881) Studio: opt-in NVENC for the video mp4 export
- [#11603](https://github.com/unslothai/unsloth/pull/11603) Studio: serve the Jev API locally with Laya
- [#11658](https://github.com/unslothai/unsloth/pull/11658) Load 4.x remote code and config-only remote code on transformers 5 (Trinity-Large, MiniMax-M3)
- [#11911](https://github.com/unslothai/unsloth/pull/11911) Pin the ARM64 Arrow overlay to a commit before its wheels are signed
- [#11702](https://github.com/unslothai/unsloth/pull/11702) fix(studio): show compaction notices for tool-loop checkpoints
- [#11886](https://github.com/unslothai/unsloth/pull/11886) Studio: video status reports CUDA graphs off when they never engage
- [#11841](https://github.com/unslothai/unsloth/pull/11841) Dequantize FP8 weights left raw by text_only and offloaded loads
- [#11882](https://github.com/unslothai/unsloth/pull/11882) Studio: stop a compiled Qwen-Image-2.1 render holding 2 GiB of prefix K/V it does not need
- [#11851](https://github.com/unslothai/unsloth/pull/11851) Studio: fix vision training with evaluation on when there is no eval split
- [#11555](https://github.com/unslothai/unsloth/pull/11555) Walk every sub-config when deciding whether a config carries remote code
- [#11743](https://github.com/unslothai/unsloth/pull/11743) Studio: add chat on the AMD Ryzen AI NPU through Lemonade and FastFlowLM
- [#11795](https://github.com/unslothai/unsloth/pull/11795) Studio: return freed host memory to the OS after diffusion and video unload
- [#11910](https://github.com/unslothai/unsloth/pull/11910) Prevent setup-size flash during desktop startup
- [#11666](https://github.com/unslothai/unsloth/pull/11666) Studio: propagate the Ollama CUDA runtime to llama-server (replacement for #7563)
- [#11075](https://github.com/unslothai/unsloth/pull/11075) Studio: add HTTP recording fallback to Dictate
- [#11847](https://github.com/unslothai/unsloth/pull/11847) Studio: skip xFormers when its torch requirement is unmet
- [#11916](https://github.com/unslothai/unsloth/pull/11916) Installer: stop picking cu126 when a slow NVIDIA driver times out CUDA detection
- [#11584](https://github.com/unslothai/unsloth/pull/11584) Plan a device map for text_only loads of vision-language models
- [#11686](https://github.com/unslothai/unsloth/pull/11686) Rebuild byte-level tokenizers that transformers v5 loads as LlamaTokenizer
- [#11694](https://github.com/unslothai/unsloth/pull/11694) Studio: show the full URL while a web fetch waits for approval
- [#11942](https://github.com/unslothai/unsloth/pull/11942) Studio: draw one drop line per gap when dragging sidebar rows
- [#11796](https://github.com/unslothai/unsloth/pull/11796) Studio: reuse unchanged files from an older snapshot instead of re-downloading them
- [#11936](https://github.com/unslothai/unsloth/pull/11936) Studio: list the Images workflows in the phone sidebar again
- [#11874](https://github.com/unslothai/unsloth/pull/11874) Studio: stop rewriting the compile-cache bundle on every warm start, and bound its disk use
- [#11943](https://github.com/unslothai/unsloth/pull/11943) Studio: fix pinned rows in the model picker
- [#11879](https://github.com/unslothai/unsloth/pull/11879) Studio: convert decoded video frames to uint8 on the GPU before the mp4 encode
- [#11941](https://github.com/unslothai/unsloth/pull/11941) Studio: drag to reorder pinned models in the model picker
- [#11693](https://github.com/unslothai/unsloth/pull/11693) Accept block_sequence_ids in chunked causal masks on transformers 5.17
- [#11933](https://github.com/unslothai/unsloth/pull/11933) Studio: translate the inline Read aloud and Edit response settings
- [#11692](https://github.com/unslothai/unsloth/pull/11692) Cast fp16 leftovers to the requested dtype after a text_only pre-quantized load
- [#11581](https://github.com/unslothai/unsloth/pull/11581) Studio: show context checkpoints apart from the KV cache in the memory estimate
- [#11884](https://github.com/unslothai/unsloth/pull/11884) Studio: load the hosted INT8 pre-quant checkpoints on torchao 0.18 and later
- [#11928](https://github.com/unslothai/unsloth/pull/11928) Studio: show when a response was written, in its More menu
- [#11725](https://github.com/unslothai/unsloth/pull/11725) Studio: keep all text when adding Word files to a knowledge base
- [#11807](https://github.com/unslothai/unsloth/pull/11807) Studio: build the ConvRot rotation from its definition
- [#11934](https://github.com/unslothai/unsloth/pull/11934) Embed server tests: intercept only the server's own Popen
- [#11900](https://github.com/unslothai/unsloth/pull/11900) Studio: stream durable chat runs at display frame rate
- [#11927](https://github.com/unslothai/unsloth/pull/11927) Studio: add a multiline send shortcut and spell out what each one does
- [#11295](https://github.com/unslothai/unsloth/pull/11295) Studio: keep a chat's attached files when you fork it
- [#11931](https://github.com/unslothai/unsloth/pull/11931) Studio: show example prompts as placeholder hints
- [#11476](https://github.com/unslothai/unsloth/pull/11476) Studio: keep a Codex chat working after a tool returns an image on a text-only model
- [#11466](https://github.com/unslothai/unsloth/pull/11466) Studio: guard export operations when the Hub is unreachable
- [#11350](https://github.com/unslothai/unsloth/pull/11350) studio: allow local imatrix files for gguf export
- [#11926](https://github.com/unslothai/unsloth/pull/11926) Studio: make the composer the same width as the chat column
- [#11920](https://github.com/unslothai/unsloth/pull/11920) Studio: move Read aloud and Edit response into the More menu
- [#11932](https://github.com/unslothai/unsloth/pull/11932) UI scale contract: count the save-temporary-chat button among the chat header's 30px controls
- [#11930](https://github.com/unslothai/unsloth/pull/11930) Studio: clicking a gallery item keeps the typed prompt
- [#11779](https://github.com/unslothai/unsloth/pull/11779) Stop the Starling, Yi-chat and LFM2 templates leaking whitespace
- [#11921](https://github.com/unslothai/unsloth/pull/11921) Studio: show Theme first in Settings > Appearance
- [#11831](https://github.com/unslothai/unsloth/pull/11831) Studio: video auto precision keeps a resident bf16 DiT
- [#11571](https://github.com/unslothai/unsloth/pull/11571) Unsloth Studio (AMD/ROCm): warn about, and refuse, a GPU the installed PyTorch has no kernels for
- [#11925](https://github.com/unslothai/unsloth/pull/11925) Studio: style the chat scrollbar like Run settings
- [#11917](https://github.com/unslothai/unsloth/pull/11917) Studio: align the model selector label and truncate long project names
- [#11924](https://github.com/unslothai/unsloth/pull/11924) Studio: start settings labels with the setting, not "Show"
- [#11803](https://github.com/unslothai/unsloth/pull/11803) Studio: read DOCX content controls, tracked insertions and text boxes
- [#11834](https://github.com/unslothai/unsloth/pull/11834) Unsloth Studio (AMD): floor torch at 2.11 on the gfx103X-all and gfx110X-all families too
- [#11613](https://github.com/unslothai/unsloth/pull/11613) Load a VLM through its native image-text class when the repo's auto_map class is untrusted
- [#11887](https://github.com/unslothai/unsloth/pull/11887) Studio: build Qwen-Image-2.1's token layout once per render instead of every step
- [#11289](https://github.com/unslothai/unsloth/pull/11289) Studio: fix login failures during slow startup
- [#11296](https://github.com/unslothai/unsloth/pull/11296) Studio: find older chats by title in chat search
- [#11812](https://github.com/unslothai/unsloth/pull/11812) Split the flash-attn prebuilt wheel build across parallel ccache jobs
- [#11487](https://github.com/unslothai/unsloth/pull/11487) Studio: keep the model's own chat template when the Unsloth one can't render the rows
- [#11902](https://github.com/unslothai/unsloth/pull/11902) Studio: add File and View menu items to the macOS desktop app
- [#11684](https://github.com/unslothai/unsloth/pull/11684) Fix text_only 4-bit load and generate for Gemma-4 and other VLM text configs
- [#11914](https://github.com/unslothai/unsloth/pull/11914) Studio: restyle the save temporary chat popup as a standard dialog
- [#11908](https://github.com/unslothai/unsloth/pull/11908) Studio: verify the Diffusers main zip against a pinned SHA-256
- [#11560](https://github.com/unslothai/unsloth/pull/11560) Accept the transformers 5.0 ignore_keys argument in validate_rope
- [#11797](https://github.com/unslothai/unsloth/pull/11797) Studio Hub: show a running download as Downloading, not as a paused partial
- [#11901](https://github.com/unslothai/unsloth/pull/11901) Studio: let a temporary chat be saved to history
- [#11854](https://github.com/unslothai/unsloth/pull/11854) Studio: follow the JSON format a client asks for on /v1/messages
- [#11850](https://github.com/unslothai/unsloth/pull/11850) Studio: train audio datasets on the columns the dataset check found
- [#11853](https://github.com/unslothai/unsloth/pull/11853) Studio: fix document search for embedding models other than the default
- [#11889](https://github.com/unslothai/unsloth/pull/11889) Studio: stop inflating chat images by re-encoding every one to PNG
- [#11838](https://github.com/unslothai/unsloth/pull/11838) Studio: initialize new chats before attaching documents
- [#11866](https://github.com/unslothai/unsloth/pull/11866) SentenceTransformer: preserve masks for patched Gemma3 attention
- [#11852](https://github.com/unslothai/unsloth/pull/11852) Studio: use the browser's timezone for today's date in chat
- [#11875](https://github.com/unslothai/unsloth/pull/11875) Studio: stop opening a saved chat from re-running a Max Tokens reply
- [#11894](https://github.com/unslothai/unsloth/pull/11894) Parallel-isolation guard: exempt the resolver's back-dated staleness precondition
- [#11892](https://github.com/unslothai/unsloth/pull/11892) studiobench: image_upload closes the menu it opened when it gives up
- [#11872](https://github.com/unslothai/unsloth/pull/11872) Studio: stop rescanning every model folder on each request that names a model not on disk
- [#11862](https://github.com/unslothai/unsloth/pull/11862) Studio: say the installer script is missing instead of showing the PowerShell logo
- [#11859](https://github.com/unslothai/unsloth/pull/11859) Studio: stop holding a passthrough response 5 s when a watcher swallows its cancel
- [#11873](https://github.com/unslothai/unsloth/pull/11873) Studio: stop unsloth start announcing a switch when --model names the file already loaded
- [#11675](https://github.com/unslothai/unsloth/pull/11675) Give vLLM a valid top_k when fast_inference enables it in the GRPO trainer
- [#11640](https://github.com/unslothai/unsloth/pull/11640) Studio: give the Windows ROCm torchao stub a version transformers 5 can parse
- [#9123](https://github.com/unslothai/unsloth/pull/9123) fix(studio): keep Stop generating visible while queuing
- [#11878](https://github.com/unslothai/unsloth/pull/11878) Agent guides CI: pass optional installer flags only while the installer takes them
- [#11876](https://github.com/unslothai/unsloth/pull/11876) Studio: a sandbox read waits out a legacy move's staging window

#### 🐛 New Issues
- [#11890](https://github.com/unslothai/unsloth/issues/11890) [Bug] AMD: the ROCm Docker image loads the Qwen-Image-2.1 GGUF as Qwen-Image 1.x and fails on a shape mismatch `feature request` `bug` 💬2
- [#11906](https://github.com/unslothai/unsloth/issues/11906) Fix: Unsloth Desktop Qwen Image 2.1 Fails with "diffusers 0.40.0" Error 💬1
- [#11993](https://github.com/unslothai/unsloth/issues/11993) [Feature] Unsloth Studio / Desktop: image server logs don't record what a load or a generation actually resolved to
- [#11982](https://github.com/unslothai/unsloth/issues/11982) [Feature] Unsloth Studio / Desktop: Cancel load button is jammed against the model panel divider
- [#11981](https://github.com/unslothai/unsloth/issues/11981) [Feature] Unsloth Studio / Desktop: store the full generation settings in each image and show the workflow in Recipe
- [#11975](https://github.com/unslothai/unsloth/issues/11975) [Feature] Unsloth Studio / Desktop: Stop gives no feedback while a cancel is pending, so it looks like it needs a second click
- [#11973](https://github.com/unslothai/unsloth/issues/11973) [Feature] Unsloth Studio / Desktop: put Reapply next to Generate instead of at the bottom of Advanced
- [#11980](https://github.com/unslothai/unsloth/issues/11980) [Bug] ARM64 Linux (GB10 / ASUS GX10): unsloth>=2026.9.11 pins torch==2.9.0a0+50eac811a6.nv25.9, install unsatisfiable `feature request` `bug`
- [#11953](https://github.com/unslothai/unsloth/issues/11953) [Bug] Unsloth Studio / Desktop: the dense-quant capability probe pins a CUDA context on every GPU of a multi-GPU host, so an idle Studio holds ~360 MB on a 3090 + 3060
- [#11913](https://github.com/unslothai/unsloth/issues/11913) [Bug] Windows winget package installs ARM64 package despite user CPU. `feature request` `bug`
- [#11939](https://github.com/unslothai/unsloth/issues/11939) Dictation could not access the microphone. `feature request` `bug`
- [#11952](https://github.com/unslothai/unsloth/issues/11952) [Bug] Getting error "indices should be either on cpu or on the same device as the indexed tensor (cuda:0)" when trying to train Gemma 4 31b since upgrading to v0.1.806-beta `feature request` `bug`
- [#11948](https://github.com/unslothai/unsloth/issues/11948) CSV export issue & Potential solution
- [#11947](https://github.com/unslothai/unsloth/issues/11947) Which auth_kind does a provider with no key carry?
- [#11919](https://github.com/unslothai/unsloth/issues/11919) [Bug] Deep Research fails at completion when assistant message is also owned by chat_generation_runs `feature request` `bug`
- [#11909](https://github.com/unslothai/unsloth/issues/11909) [Feature] Ability to export a sample script for training `feature request`

#### 🔒 Closed Issues
- [#8225](https://github.com/unslothai/unsloth/issues/8225) [Bug] Studio video: Wan2.2-TI2V-5B requests 71 GB on a 16 GB card: SDPA falls back to the math kernel on ROCm gfx1200
- [#9926](https://github.com/unslothai/unsloth/issues/9926) [Bug] Error when trying to train a model using an AMD RX 7600
- [#8945](https://github.com/unslothai/unsloth/issues/8945) [Bug] Unsloth Desktop sometimes stops working while executing prompts
- [#11778](https://github.com/unslothai/unsloth/issues/11778) [Unsloth Desktop ] Thinking UI text rendering stutters new thinking ui at 30/60 FPS"
- [#11698](https://github.com/unslothai/unsloth/issues/11698) [Bug] save_pretrained_gguf on a peft PeftModel.from_pretrained wrapper silently exports the base model (LoRA not merged)
- [#8780](https://github.com/unslothai/unsloth/issues/8780) [Bug] Unsloth Desktop hangs in responses
- [#10450](https://github.com/unslothai/unsloth/issues/10450) [Feature] AMD: Unsloth Studio / Desktop installs CUDA torch on a mixed NVIDIA+AMD host and has no way to train on the AMD card
- [#9717](https://github.com/unslothai/unsloth/issues/9717) [Issue] (GUI/Studio) No way to use imatrix file converting "Local Model" to/via "GGUF/Llama.cpp"
- [#10437](https://github.com/unslothai/unsloth/issues/10437) [Studio Bug] GGUF quantizations disappear after switching the model download folder
- [#11821](https://github.com/unslothai/unsloth/issues/11821) [Bug] Studio: "Remember for this model" never mirrors settings to the server for MLX models, so API auto-switch loads them with defaults
- [#11820](https://github.com/unslothai/unsloth/issues/11820) [Bug] Studio API (MLX): with a chat template override, a thinking-off answer is returned as `reasoning_content` and `content` is empty
- [#10824](https://github.com/unslothai/unsloth/issues/10824) [Feature / Bug] Voice Typing over LAN does not work
- [#11569](https://github.com/unslothai/unsloth/issues/11569) Unsloth Studio (AMD/ROCm): a second AMD GPU the installed PyTorch cannot run is still offered for training, and the installer never warns
- [#11814](https://github.com/unslothai/unsloth/issues/11814) [Bug] Unsloth Studio (AMD/Windows): a gfx103X / gfx110X / gfx908 / gfx90a venv can stay on torch 2.10.0+rocm7.13.0, whose `_grouped_mm` access-violates, so `import unsloth` crashes
- [#11321](https://github.com/unslothai/unsloth/issues/11321) [Bug] The response marker '<|turn>model\n' was not found in any sample
- [#11809](https://github.com/unslothai/unsloth/issues/11809) [Unsloth Bug] Streaming response body is held ~5 s after the headers when the request declares large tool schemas
- [#9089](https://github.com/unslothai/unsloth/issues/9089) Studio: typing in the composer during a reply removes the Stop generating button

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,113 · **Open issues:** 388 · **Last push:** 3h ago

On September 26, 2026, AIBrix had a quiet day with no new releases. Among the merged pull requests, notable changes include bug fixes such as purging a pod's prefix cache when the engine enters sleep state (#2735) and scoping StormService RoleSet lookups to the respective StormService (#2792). Additionally, improvements were made to the test suite with the re-enabling of prefix cache indexer unit tests (#2815) and the serialization of the poetry install in the Python tests workflow (#2810). The most significant new issue reported concerns a model claim bug, where a runtime non-responsiveness can hold the controller for up to 60 seconds per read (#2817).

#### ✅ Merged PRs
- [#2735](https://github.com/vllm-project/aibrix/pull/2735) [Bug] Purge a pod's prefix cache when the engine sleep-state metric shows it went to sleep
- [#2815](https://github.com/vllm-project/aibrix/pull/2815) [Misc] Re-enable prefix cache indexer unit tests
- [#2810](https://github.com/vllm-project/aibrix/pull/2810) [CI] Serialize the poetry install in the Python tests workflow
- [#2792](https://github.com/vllm-project/aibrix/pull/2792) [Bug] Scope StormService RoleSet lookups to the owning StormService

#### 🐛 New Issues
- [#2817](https://github.com/vllm-project/aibrix/issues/2817) [Bug][ModelClaim] One runtime that does not answer holds the controller for up to 60 seconds per read `kind/bug` `area/orchestration`
- [#2814](https://github.com/vllm-project/aibrix/issues/2814) [RFC]: Agent-Aware KV Cache Affinity Scheduling and Lifecycle Management `area/gateway` `kind/feature` `area/testing` `area/runtime`

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,916 · **Open issues:** 582 · **Last push:** 3h ago

Today was a routine maintenance day for Semantic Router with no releases, but several important developments emerged from the merged pull requests and new issues. Notable fixes include a change allowing request bodies up to the codec limit to reach the Router (#4187), alongside an updated blog article layout for wide screens (#4131). The new issues include a critical bug where vllm-sr-dev fails in wizmap-builder if certain directories exist locally (#4191) and another where the runtime config lock is rejected if paths contain ".." (#4207), highlighting ongoing challenges in managing configuration and dependencies.

#### ✅ Merged PRs
- [#4187](https://github.com/vllm-project/semantic-router/pull/4187) [Bug] Let request bodies up to the codec limit reach the Router
- [#4131](https://github.com/vllm-project/semantic-router/pull/4131) [Docs] Centre blog article layout on wide screens

#### 🐛 New Issues
- [#4191](https://github.com/vllm-project/semantic-router/issues/4191) [Bug] make vllm-sr-dev fails in wizmap-builder when dashboard/wizmap/node_modules exists locally `bug` `accepted` `wg/developer-experience-ecosystem` 💬5
- [#4207](https://github.com/vllm-project/semantic-router/issues/4207) [Bug] vllm-sr serve rejects its runtime config lock when paths contain .. `bug` `accepted` `wg/developer-experience-ecosystem` 💬3
- [#4189](https://github.com/vllm-project/semantic-router/issues/4189) [Bug] Claude Code's adaptive thinking can't reach Chat or Responses backends `bug` `accepted` `wg/data-plane-networking` 💬2
- [#4209](https://github.com/vllm-project/semantic-router/issues/4209) [Bug] Copilot CLI's Responses turns fail on reasoning.summary `bug` `accepted` `wg/data-plane-networking` 💬2
- [#4204](https://github.com/vllm-project/semantic-router/issues/4204) [Feature] Accept Azure OpenAI Responses and v1 paths for Copilot BYOK clients `enhancement` `accepted` `wg/data-plane-networking` 💬2
- [#4185](https://github.com/vllm-project/semantic-router/issues/4185) [Bug] Request bodies over 4 MiB get an empty HTTP 500 `bug` `accepted` `wg/data-plane-networking` 💬2
- [#4172](https://github.com/vllm-project/semantic-router/issues/4172) [Feature] Accept native Azure OpenAI ingress paths for Copilot BYOK clients `enhancement` `accepted` `wg/data-plane-networking` 💬2
- [#4179](https://github.com/vllm-project/semantic-router/issues/4179) [Bug] Raw Envoy STREAMED mode drops Semantic Router's credential, path and routing headers `bug` `accepted` `wg/data-plane-networking` 💬2
- [#4159](https://github.com/vllm-project/semantic-router/issues/4159) [Bug] Any GET path that starts with /v1/models returns the model list `bug` `accepted` `wg/data-plane-networking` 💬2
- [#4144](https://github.com/vllm-project/semantic-router/issues/4144) [Bug] Dashboard "Router API Docs" returns a raw 502 in setup mode `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#4168](https://github.com/vllm-project/semantic-router/issues/4168) [Bug] Prompt compression undercounts tokens in JSON and code `bug` `accepted` `wg/agentic-context` 💬2
- [#4157](https://github.com/vllm-project/semantic-router/issues/4157) [Bug] Streamed body size and timeout guards do not return the documented 413 or 408 `bug` `accepted` `wg/data-plane-networking` 💬2
- [#4166](https://github.com/vllm-project/semantic-router/issues/4166) [Bug] Ollama's empty content deltas break streamed Messages and repeat Chat stream endings `bug` `accepted` `wg/data-plane-networking` 💬2
- [#4177](https://github.com/vllm-project/semantic-router/issues/4177) [Bug] BERT embeddings average padding tokens and misrank memory recall `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#4180](https://github.com/vllm-project/semantic-router/issues/4180) [Bug] Output token limits don't reach Ollama backends `bug` `accepted` `wg/data-plane-networking` 💬2
- [#4195](https://github.com/vllm-project/semantic-router/issues/4195) [Bug] vllm-sr image build fails when bookworm-security publishes arm64 libssl before amd64 `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#4193](https://github.com/vllm-project/semantic-router/issues/4193) [Bug] Copilot CLI with a GPT model ID fails Chat decoding on its custom apply_patch tool `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#4170](https://github.com/vllm-project/semantic-router/issues/4170) [Bug] Memory retrieval falls back to 0.6 instead of the 0.70 default `bug` `accepted` `in-progress` `wg/agentic-context` 💬2
- [#4141](https://github.com/vllm-project/semantic-router/issues/4141) [Bug] Codex CLI requests fail Responses decoding on fields it always sends `bug` `accepted` `wg/data-plane-networking` 💬2
- [#4135](https://github.com/vllm-project/semantic-router/issues/4135) [Bug] Valkey memory migration docs point to a memory import API that doesn't exist `bug` `accepted` `wg/agentic-context` 💬2
- [#4160](https://github.com/vllm-project/semantic-router/issues/4160) [Docs] Correct the claim that streamed concrete-model requests pass through `accepted` `wg/data-plane-networking` `documentation` 💬1
- [#4156](https://github.com/vllm-project/semantic-router/issues/4156) [Docs] Explain how the 98x paper setup maps to current recipes and compression defaults `accepted` `wg/router-models-inference-runtime` `documentation` 💬1
- [#4150](https://github.com/vllm-project/semantic-router/issues/4150) [Feature] Router Memory gives no warning when a remote embedding model changes `enhancement` `accepted` `wg/agentic-context` 💬1
- [#4220](https://github.com/vllm-project/semantic-router/issues/4220) [Bug] Copilot CLI's Responses tool loop fails on turn two because input.status is rejected `bug` `accepted` `wg/data-plane-networking` 💬1
- [#4218](https://github.com/vllm-project/semantic-router/issues/4218) [Bug] OpenAI Responses replies fail strict decoding on fields OpenAI now returns `bug` `accepted` `wg/data-plane-networking` 💬1
- [#4217](https://github.com/vllm-project/semantic-router/issues/4217) [Bug] Requests encoded for OpenAI Responses carry invented item ids that OpenAI rejects `bug` `accepted` `wg/data-plane-networking` 💬1
- [#4216](https://github.com/vllm-project/semantic-router/issues/4216) [Bug] Every Anthropic reply fails decoding on Anthropic's new top-level diagnostics field `bug` `accepted` `wg/data-plane-networking` 💬1
- [#4215](https://github.com/vllm-project/semantic-router/issues/4215) [Bug] Claude Code's per-message effort fails decoding on every backend `bug` `accepted` `wg/data-plane-networking` 💬1
- [#4214](https://github.com/vllm-project/semantic-router/issues/4214) [Bug] Copilot CLI's zero sampling penalties block Responses and Anthropic backends `bug` `accepted` `wg/data-plane-networking` 💬1
- [#4213](https://github.com/vllm-project/semantic-router/issues/4213) [Bug] OpenRouter replies fail strict decoding on the fields OpenRouter adds to every response `bug` `accepted` `wg/data-plane-networking` 💬1
- [#4219](https://github.com/vllm-project/semantic-router/issues/4219) [Bug] Zero sampling penalties block Copilot CLI's Chat requests from reaching Anthropic backends 💬1
- [#4147](https://github.com/vllm-project/semantic-router/issues/4147) [Docs] Agent clients can't tell what limits a virtual model supports `accepted` `wg/agentic-context` `documentation` 💬1
- [#4221](https://github.com/vllm-project/semantic-router/issues/4221) [Bug] Streamed Responses tool calls fail because OpenAI and Azure OpenAI no longer send name on the done event `needs-acceptance` `wg/data-plane-networking`
- [#4206](https://github.com/vllm-project/semantic-router/issues/4206) [Feature] Measure streamed body arrival before adding incremental preprocessing `enhancement` `needs-acceptance` `wg/data-plane-networking`
- [#4205](https://github.com/vllm-project/semantic-router/issues/4205) [Feature] Add an action signal so coding requests can route by operation `enhancement` `needs-acceptance` `wg/mom-routing`
- [#4211](https://github.com/vllm-project/semantic-router/issues/4211) [Test] Replay real agent-client traffic in the protocol E2E suite `enhancement` `needs-acceptance` `wg/data-plane-networking`
- [#4181](https://github.com/vllm-project/semantic-router/issues/4181) [Bug] HTTP MCP client loads only the first page of tools, resources and prompts `bug` `wg/agentic-context`
- [#4161](https://github.com/vllm-project/semantic-router/issues/4161) [Bug] Router Memory injects superseded facts beside later corrections `bug` `needs-acceptance` `wg/agentic-context`
- [#4184](https://github.com/vllm-project/semantic-router/issues/4184) [Feature] Use prompt_cache_key as a cache-affinity signal for agent clients `enhancement` `needs-acceptance` `wg/mom-routing`
- [#4158](https://github.com/vllm-project/semantic-router/issues/4158) [Test] Prove prompt compression never mutates upstream Chat or Responses bodies `enhancement` `needs-acceptance` `wg/data-plane-networking`
- [#4153](https://github.com/vllm-project/semantic-router/issues/4153) [Feature] Add a replayable coding-agent session fixture for routing evaluation `enhancement` `needs-acceptance` `wg/evaluation-quality`
- [#4146](https://github.com/vllm-project/semantic-router/issues/4146) [Feature] Flag semantic hits the English negation guard can't judge `enhancement` `needs-acceptance` `wg/data-plane-networking`

#### 🔒 Closed Issues
- [#4112](https://github.com/vllm-project/semantic-router/issues/4112) [Feature] Blog article layout leaves a large unused gap on the right on wide screens
- [#4191](https://github.com/vllm-project/semantic-router/issues/4191) [Bug] make vllm-sr-dev fails in wizmap-builder when dashboard/wizmap/node_modules exists locally
- [#4127](https://github.com/vllm-project/semantic-router/issues/4127) [Bug] Merging one catalog PR makes the others conflict, and the README card count drifts unchecked
- [#4185](https://github.com/vllm-project/semantic-router/issues/4185) [Bug] Request bodies over 4 MiB get an empty HTTP 500
- [#4179](https://github.com/vllm-project/semantic-router/issues/4179) [Bug] Raw Envoy STREAMED mode drops Semantic Router's credential, path and routing headers
- [#4159](https://github.com/vllm-project/semantic-router/issues/4159) [Bug] Any GET path that starts with /v1/models returns the model list
- [#4144](https://github.com/vllm-project/semantic-router/issues/4144) [Bug] Dashboard "Router API Docs" returns a raw 502 in setup mode
- [#4135](https://github.com/vllm-project/semantic-router/issues/4135) [Bug] Valkey memory migration docs point to a memory import API that doesn't exist
- [#4219](https://github.com/vllm-project/semantic-router/issues/4219) [Bug] Zero sampling penalties block Copilot CLI's Chat requests from reaching Anthropic backends
- [#4147](https://github.com/vllm-project/semantic-router/issues/4147) [Docs] Agent clients can't tell what limits a virtual model supports
- [#4181](https://github.com/vllm-project/semantic-router/issues/4181) [Bug] HTTP MCP client loads only the first page of tools, resources and prompts

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*