# 📡 AI Ecosystem Digest — 2026-09-09

> Generated 2026-09-09 01:04 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 144,465 | 20 | 13 | 0 | 2 |
| [OpenAI Codex](https://github.com/openai/codex) | 122,552 | 15 | 7 | 49 | 2 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,873 | 0 | 0 | 7 | 3 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,147 | 10 | 3 | 1 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 205,955 | 30 | 9 | 8 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,713 | 36 | 17 | 4 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 389,250 | 260 | 161 | 262 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 243,457 | 38 | 4 | 2 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 91,276 | 18 | 31 | 44 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 35,655 | 24 | 12 | 32 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 127,540 | 5 | 17 | 15 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 180,485 | 3 | 3 | 9 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 58,306 | 28 | 12 | 60 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 75,873 | 18 | 13 | 77 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,068 | 2 | 1 | 5 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,672 | 35 | 3 | 1 | 0 |

---

## ✨ Highlights

- **OpenClaw** released version [v2026.9.3](https://github.com/openclaw/openclaw/releases/tag/v2026.9.3), introducing new features and fixes.
- **Claude Code** made significant updates with releases [v2.1.266](https://github.com/anthropics/claude-code/releases/tag/v2.1.266) and [v2.1.265](https://github.com/anthropics/claude-code/releases/tag/v2.1.265).
- **Gemini CLI** released version [v0.60.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-preview.0), enhancing its functionality.
- A new issue in **OpenClaw** [#142037](https://github.com/openclaw/openclaw/issues/142037) has garnered attention with 9 comments regarding message-tool reply handling in the embedded runtime.
- **Semantic Router** is actively discussing a hot new issue [#3562](https://github.com/vllm-project/semantic-router/issues/3562) related to workgroup issues, attracting significant community input with 10 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 144,465 · **Open issues:** 12,542 · **Last push:** 1h ago

On September 9, 2026, Claude Code released version v2.1.266, which fixed a regression from v2.1.265 that caused the undocumented `CLAUDE_CODE_USE_GATEWAY` environment variable to incorrectly force Cloud-gateway sign-in for certain configurations. In v2.1.265, updates included adding `user.email` and `user.groups` to telemetry and support for dynamic loading of plugins from a specified directory. Among the new issues, the most notable is #92825, which reports that session transcripts in Claude Code Desktop can become permanently unavailable, citing issues with session ID management. Other new bugs reported include a failure in exposing execution modes in Cowork and issues with agent context loss during prolonged sessions.

#### 🚀 New Releases
- [v2.1.266](https://github.com/anthropics/claude-code/releases/tag/v2.1.266) v2.1.266
- [v2.1.265](https://github.com/anthropics/claude-code/releases/tag/v2.1.265) v2.1.265

#### 🐛 New Issues
- [#92825](https://github.com/anthropics/claude-code/issues/92825) [BUG] Claude Code Desktop: session transcripts silently become permanently unavailable (cliSessionId nulled, no local recovery path) — follow-up to anthropics/claude-code#79044 `bug` `has repro` `platform:macos` `data-loss` 💬4
- [#92885](https://github.com/anthropics/claude-code/issues/92885) [BUG] Cowork: expose execution mode (Local/Remote) as a visible per-project setting, and document what leaves the machine `enhancement` `platform:macos` `area:cowork` 💬3
- [#92947](https://github.com/anthropics/claude-code/issues/92947) Claude infers permission to touch an explicitly forbidden folder from an unrelated general statement `bug` `platform:windows` `area:model` 💬3
- [#92959](https://github.com/anthropics/claude-code/issues/92959) [BUG] 症状: チャット入力欄で日本語IME変換中に下線・色分けが表示されない `bug` `platform:windows` `area:a11y` `area:ide`
- [#92958](https://github.com/anthropics/claude-code/issues/92958) [BUG] Cowork Windows ARM64: add_plan9_shares reports success but attaches NO share (silent failure, no HRESULT) — triggered by KB5124012 (28000.2954), confirmed by A/B rollback `bug` `has repro` `platform:windows` `area:cowork`
- [#92957](https://github.com/anthropics/claude-code/issues/92957) [Bug] Anthropic API Error: Message flagged and auto-downgraded to Opus 4.8 during subtitle conversion tool testing `bug` `platform:windows` `area:model` `api:anthropic`
- [#92956](https://github.com/anthropics/claude-code/issues/92956) [Bug] Anthropic API Error: False-positive reasoning_extraction safeguard with Workflow tool plugin agentType `bug` `platform:macos` `area:model` `area:agents`
- [#92955](https://github.com/anthropics/claude-code/issues/92955) [Feature Request] Add /nuke command to delete client and server session copies on key compromise `enhancement` `platform:macos` `area:tui` `area:security`
- [#92954](https://github.com/anthropics/claude-code/issues/92954) iOS app shows a session's name as "2" instead of its title `bug` `platform:ios` `area:ui`
- [#92953](https://github.com/anthropics/claude-code/issues/92953) [Feature Request] Implement agent spawn validation to reduce unnecessary token usage `bug` `platform:windows` `area:tui` `area:agents`
- [#92952](https://github.com/anthropics/claude-code/issues/92952) [BUG] Agent task notification reports status=completed for an agent still waiting on its own background task `bug` `has repro` `area:agents`
- [#92801](https://github.com/anthropics/claude-code/issues/92801) [BUG] Workspace trust not persisted across sessions (Code tab, macOS 15.5) `bug` `has repro` `platform:macos` `area:desktop`
- [#92951](https://github.com/anthropics/claude-code/issues/92951) [Bug] Agent loses context and makes repeated mistakes during extended sessions `bug` `platform:macos` `area:model` `needs-repro`
- [#92950](https://github.com/anthropics/claude-code/issues/92950) [FEATURE] Persistent subagent inspector in the TUI — reopen any subagent's transcript, message it directly, edit its metadata `enhancement` `area:tui` `area:agents` `area:agent-view`
- [#92949](https://github.com/anthropics/claude-code/issues/92949) [BUG] Auto-compaction re-injects the CLAUDE.md/MEMORY.md copy from the last user prompt, not the on-disk file; disk re-read only happens at the next prompt `bug` `has repro` `area:core` `memory`
- [#92904](https://github.com/anthropics/claude-code/issues/92904) [BUG] Microsoft 365 connector unusable in Claude Code (works in Claude Desktop) `bug` `platform:macos` `area:mcp` `platform:vscode`
- [#92900](https://github.com/anthropics/claude-code/issues/92900) MCP (stdio): one boolean property schema silently drops ALL tools of the server (SDK 0.1.77; stdio twin of #88049, re-filing of #82949) `bug` `has repro` `platform:linux` `area:mcp`
- [#92934](https://github.com/anthropics/claude-code/issues/92934) Windows: synchronous command hooks wait for persistent descendants `bug` `has repro` `platform:windows` `area:hooks`
- [#92948](https://github.com/anthropics/claude-code/issues/92948) Cowork (claude.ai web): a single uploaded image is delivered to the model twice, causing it to assert the user sent two `bug` `area:claude-code-web` `area:cowork` `platform:web`
- [#92946](https://github.com/anthropics/claude-code/issues/92946) [Bug] Anthropic API Error: Content Blocked by Safety Filter on Legitimate Low-Level Debugging Code `bug` `platform:windows` `area:model`

#### 🔒 Closed Issues
- [#85434](https://github.com/anthropics/claude-code/issues/85434) [Bug][cyber] Safeguards trigger on local storage breakdown UI and redundancy coding (req_011CdtVjZMUpdEfEVKicVPec)
- [#85444](https://github.com/anthropics/claude-code/issues/85444) [Bug][cyber] False positive when configuring application disguise UI and launcher aliases (req_011Cdta2YM9Vdb8wengGyaXd)
- [#85482](https://github.com/anthropics/claude-code/issues/85482) [Bug] Claude Code unexpectedly deletes source files
- [#68465](https://github.com/anthropics/claude-code/issues/68465) Windows: agent/background-session TUI prints raw un-framed ANSI (dropped ESC) AND cross-session input bleed (2.1.177, WT Preview 1.25)
- [#78444](https://github.com/anthropics/claude-code/issues/78444) [BUG] Backgrounded/reconnected sessions do not use the configured proxy and fail to connect (ConnectionRefused)
- [#81662](https://github.com/anthropics/claude-code/issues/81662) Backgrounding an interactive session mints a new, unlinked session id; if the handoff worker is killed before its first durable write, the agents-view tile resumes "fresh" and the original transcript is unreachable
- [#77967](https://github.com/anthropics/claude-code/issues/77967) [BUG] Windows Terminal: Scrolling up in an AgentView agent session gets stuck in input box, cycling input history instead of scrolling chat
- [#85938](https://github.com/anthropics/claude-code/issues/85938) CI monitor reports job conclusions inherited from the enclosing workflow run, marking a passing required check as failed
- [#85929](https://github.com/anthropics/claude-code/issues/85929) [Bug] Anthropic API incorrectly flags benign Go code as cybersecurity risk
- [#85933](https://github.com/anthropics/claude-code/issues/85933) [BUG]
- [#85932](https://github.com/anthropics/claude-code/issues/85932) Feature: Expose VS Code session names in CLI and allow moving sessions across project contexts
- [#85931](https://github.com/anthropics/claude-code/issues/85931) Worktree isolation refuses loops and process substitution that touch no path; error always says "without the redirect"
- [#85922](https://github.com/anthropics/claude-code/issues/85922) Session recap (away summary) ignores ANTHROPIC_DEFAULT_HAIKU_MODEL and bills the session's main model

### OpenAI Codex (`openai/codex`)

**Stars:** 122,552 · **Open issues:** 16,071 · **Last push:** <1h ago

Today, OpenAI Codex released version 0.154.0-alpha.8, along with the previous 0.154.0-alpha.7. Significant merged pull requests include enhancements such as increasing the TUI thread capability test stack to 12 MiB, caching protected shell snapshots, and preserving per-image generation IDs in analytics. Notably, several new issues have emerged, including a bug where Codex Desktop conversations hang in a reconnect state on Windows (#43810) and another where recent conversation history disappears in the Codex desktop app (#43958). Overall, it has been a day of ongoing improvements and user-reported issues that highlight areas needing attention.

#### 🚀 New Releases
- [rust-v0.154.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.8) 0.154.0-alpha.8
- [rust-v0.154.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.7) 0.154.0-alpha.7

#### ✅ Merged PRs
- [#43956](https://github.com/openai/codex/pull/43956) Increase the TUI thread capability test stack to 12 MiB
- [#43954](https://github.com/openai/codex/pull/43954) Cache protected shell snapshots and harden capture cleanup
- [#43953](https://github.com/openai/codex/pull/43953) Preserve per-image generation IDs in image generation analytics
- [#43950](https://github.com/openai/codex/pull/43950) Keep app-server thread RPCs active until delegated work completes
- [#43949](https://github.com/openai/codex/pull/43949) Add transactional thread attachment mutations to the state runtime
- [#43948](https://github.com/openai/codex/pull/43948) Show configured app-server updater settings in doctor
- [#43947](https://github.com/openai/codex/pull/43947) Surface MCP reconnect signals when expired OAuth tokens cannot refresh
- [#43943](https://github.com/openai/codex/pull/43943) Gate new turn submissions on host shutdown admission
- [#43942](https://github.com/openai/codex/pull/43942) Show worktree owner details and add confirmed deletion
- [#43939](https://github.com/openai/codex/pull/43939) Add executor-context filesystem permission helpers
- [#43937](https://github.com/openai/codex/pull/43937) Tag TUI startup metrics with terminal and multiplexer categories
- [#43936](https://github.com/openai/codex/pull/43936) Stabilize subagent and unified exec test fixtures
- [#43934](https://github.com/openai/codex/pull/43934) Track voice session lifecycle metrics in the TUI
- [#43930](https://github.com/openai/codex/pull/43930) Avoid Windows sandbox setup for irrelevant proxy port changes
- [#43927](https://github.com/openai/codex/pull/43927) Rename thread artifacts to attachments in the state database
- [#43925](https://github.com/openai/codex/pull/43925) Add cancellation for native user-verification RPCs
- [#43921](https://github.com/openai/codex/pull/43921) Show streaming reasoning summaries in the TUI status row
- [#43918](https://github.com/openai/codex/pull/43918) Expose the queued event count on `CodexThread`
- [#43915](https://github.com/openai/codex/pull/43915) Remove the repository devcontainer configurations
- [#43913](https://github.com/openai/codex/pull/43913) Add tracing for project instructions and filesystem sandbox operations
- [#43912](https://github.com/openai/codex/pull/43912) Keep Guardian reviewers on summary-based compaction
- [#43909](https://github.com/openai/codex/pull/43909) Protect shell snapshots when credential brokerage is enabled
- [#43907](https://github.com/openai/codex/pull/43907) Preserve complete shell snapshot exports through filtering and replay
- [#43906](https://github.com/openai/codex/pull/43906) Scope model catalog caches to the current provider and auth identity
- [#43903](https://github.com/openai/codex/pull/43903) Extract Windows deny-read glob scan planning into protocol
- [#43900](https://github.com/openai/codex/pull/43900) Propagate Apps tool refreshes to existing threads
- [#43897](https://github.com/openai/codex/pull/43897) Persist provider and auth identity with model catalog caches
- [#43895](https://github.com/openai/codex/pull/43895) Preserve `__oailb` routing cookies in ChatGPT HTTP clients
- [#43894](https://github.com/openai/codex/pull/43894) Preserve thread identity in code-mode tool dispatch traces
- [#43889](https://github.com/openai/codex/pull/43889) Fix transcript viewer restoration and half-page scrolling
- [#43884](https://github.com/openai/codex/pull/43884) Close active network proxy connections on teardown
- [#43876](https://github.com/openai/codex/pull/43876) Detach Unix hook commands from the controlling terminal
- [#43873](https://github.com/openai/codex/pull/43873) Handle undefined values before JSON serialization in code mode
- [#43870](https://github.com/openai/codex/pull/43870) Close MCP stderr readers on client teardown
- [#43853](https://github.com/openai/codex/pull/43853) Add canonical permission translation for MXC execution requests
- [#43848](https://github.com/openai/codex/pull/43848) Preserve runtime workspace roots across thread resume
- [#43846](https://github.com/openai/codex/pull/43846) Include completed commentary in the `/copy` picker
- [#43844](https://github.com/openai/codex/pull/43844) Add staged enterprise OIDC login and coordinated logout
- [#43842](https://github.com/openai/codex/pull/43842) Wait for parent idle before rollback in guardian fork tests
- [#43827](https://github.com/openai/codex/pull/43827) Add memory dual writing and v2 readiness reporting
- [#43813](https://github.com/openai/codex/pull/43813) Add dedicated memory v2 consolidation and read prompts
- [#43808](https://github.com/openai/codex/pull/43808) Move v2 extraction chunking into the memory writer
- [#43806](https://github.com/openai/codex/pull/43806) Centralize Guardian transcript policy in context profiles
- [#43805](https://github.com/openai/codex/pull/43805) Centralize Guardian context composition
- [#43800](https://github.com/openai/codex/pull/43800) Add summary-only extraction for memory v2
- [#43799](https://github.com/openai/codex/pull/43799) Prioritize human evidence in memory v2 extraction
- [#43798](https://github.com/openai/codex/pull/43798) Batch non-user history eviction to preserve Guardian transcript deltas
- [#43797](https://github.com/openai/codex/pull/43797) Add configurable memory versions with isolated storage
- [#43796](https://github.com/openai/codex/pull/43796) Preserve reasoning effort through compaction and reset it on success

#### 🐛 New Issues
- [#43810](https://github.com/openai/codex/issues/43810) [Bug] Codex Desktop conversations repeatedly hang in reconnect state on Windows `bug` `windows-os` `app` `connectivity` 💬3
- [#43958](https://github.com/openai/codex/issues/43958) Recent conversation history repeatedly disappears in the Codex desktop app `bug` `app` `session` 💬2
- [#43783](https://github.com/openai/codex/issues/43783) [Codex App] Agent consumed Banked Full Reset without explicit redemption authorization `bug` `model-behavior` `rate-limits` `app` 💬2
- [#43910](https://github.com/openai/codex/issues/43910) [Windows 10] Chat stuck on Instant after Pro 5x cap reached; higher effort still works on web/mobile `bug` `windows-os` `rate-limits` `app` 💬2
- [#43946](https://github.com/openai/codex/issues/43946) Codex desktop on Windows `bug` `windows-os` `app` `session` 💬2
- [#43951](https://github.com/openai/codex/issues/43951) Codex desktop response-selection annotation control disappears mid-session `bug` `windows-os` `app` 💬1
- [#43955](https://github.com/openai/codex/issues/43955) Weekly limit disappeared - from 80% to 7% in under an hour with 3 threads running. `bug` `rate-limits` `CLI` 💬1
- [#43929](https://github.com/openai/codex/issues/43929) Linux sandbox: bwrap "Bad file descriptor" when a workspace root contains two or more denied files `bug` `sandbox` `CLI` 💬1
- [#43944](https://github.com/openai/codex/issues/43944) ChatGPT desktop app / Codex app-server task messaging `bug` `azure` `app` `app-server` 💬1
- [#43684](https://github.com/openai/codex/issues/43684) VS Code Remote-SSH: 26.901.22334 fails on Node 22; required rollback removes prompt editing `bug` `extension` `remote` 💬1
- [#43940](https://github.com/openai/codex/issues/43940) ChatGPT needs dubious access to other's app data while using Chrome extension `bug` `app` `browser` 💬1
- [#43957](https://github.com/openai/codex/issues/43957) Adding "Connections" to ssh server with fail2ban gets you banned constantly `bug` `app` `connectivity` `remote`
- [#43952](https://github.com/openai/codex/issues/43952) CLI: resume paints a permanent Working footer when the thread is Idle `bug` `TUI` `CLI` `app-server`
- [#43945](https://github.com/openai/codex/issues/43945) Windows: Chrome browsing history import fails with “Make sure Chrome is fully closed” despite unlocked, readable history databases `bug` `windows-os` `app` `browser`
- [#43941](https://github.com/openai/codex/issues/43941) [Linux/Hyprland] ChatGPT Desktop becomes the default HTTP/HTTPS browser after installation `bug` `app`

#### 🔒 Closed Issues
- [#22321](https://github.com/openai/codex/issues/22321) Add an Agent View for managing multiple Codex agents from the TUI
- [#30713](https://github.com/openai/codex/issues/30713) Feature Request: CLI Agent Dashboard / Thread View
- [#40589](https://github.com/openai/codex/issues/40589) Remote-control agent sessions cannot be stopped from codex agents
- [#42034](https://github.com/openai/codex/issues/42034) /agents: wrap long instructions in the input field
- [#43606](https://github.com/openai/codex/issues/43606) VS Code Extension repeats prior answers/responses immediately following context window compaction
- [#42235](https://github.com/openai/codex/issues/42235) Agents overview: left and right arrows do not move the New task cursor
- [#43684](https://github.com/openai/codex/issues/43684) VS Code Remote-SSH: 26.901.22334 fails on Node 22; required rollback removes prompt editing

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,873 · **Open issues:** 833 · **Last push:** 2h ago

On September 9, 2026, Gemini CLI released v0.60.0-preview.0, which includes critical improvements such as enhanced destination validation and connection routing in web fetch utilities, as well as stricter enforcement of RFC 9207 issuer identification in the MCP OAuth flow. Additionally, v0.60.0-nightly.20260908.g85aca163f and v0.59.0 were also released, with the latter addressing a security vulnerability related to SSRF in MCP OAuth metadata discovery. Significant merged pull requests included updates to preserve versioned Flash model IDs and enforce provenance for untrusted tool outputs. There were no new issues reported today, suggesting a smooth operational day for the project.

#### 🚀 New Releases
- [v0.60.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-preview.0) Release v0.60.0-preview.0
- [v0.60.0-nightly.20260908.g85aca163f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260908.g85aca163f) Release v0.60.0-nightly.20260908.g85aca163f
- [v0.59.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0) Release v0.59.0

#### ✅ Merged PRs
- [#29252](https://github.com/google-gemini/gemini-cli/pull/29252) fix(core): preserve explicit versioned Flash model IDs
- [#29253](https://github.com/google-gemini/gemini-cli/pull/29253) Changelog for v0.59.0
- [#29254](https://github.com/google-gemini/gemini-cli/pull/29254) chore(release): bump version to 0.61.0-nightly.20260908.gc647533d6
- [#29251](https://github.com/google-gemini/gemini-cli/pull/29251) Changelog for v0.60.0-preview.0
- [#29215](https://github.com/google-gemini/gemini-cli/pull/29215) fix(core): enforce envelope metadata provenance for untrusted tool outputs
- [#29216](https://github.com/google-gemini/gemini-cli/pull/29216) fix(cli): isolate settings directory in sandbox containers
- [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) fix(core): mitigate NTFS 8.3 short name (SFN) path

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,147 · **Open issues:** 2,318 · **Last push:** <1h ago

On September 9, 2026, GitHub Copilot CLI released versions v1.0.84-3 and v1.0.84-2, introducing a new Vim mode for modal editing, which can be activated via the `/vim` command, and improved reliability for OAuth-authenticated MCP server connections during session startup. Additionally, the update included a fix for the `/copy` command to include task completion messages when available. Among the merged pull requests, #4762 added support for reporting unsupported operating systems. Notably, new issues emerged, including #4765, which addresses a failure of the CLI to read config from non-repo root working directories, indicating a significant pain point for users. Other reported concerns include the MCP OAuth link not launching an authentication flow and problems with task completion indicators.

#### 🚀 New Releases
- [v1.0.84-3](https://github.com/github/copilot-cli/releases/tag/v1.0.84-3) 1.0.84-3
- [v1.0.84-2](https://github.com/github/copilot-cli/releases/tag/v1.0.84-2) 1.0.84-2

#### ✅ Merged PRs
- [#4762](https://github.com/github/copilot-cli/pull/4762) install: report unsupported operating systems

#### 🐛 New Issues
- [#4765](https://github.com/github/copilot-cli/issues/4765) copilot cli fails to read config from working directory which isn't a repo root `triage` 💬1
- [#4773](https://github.com/github/copilot-cli/issues/4773) Repeated MCP discovery reports "Found 0 tools" for an already-loaded namespace `triage`
- [#4772](https://github.com/github/copilot-cli/issues/4772) /clear and /restart breaks mcp integration `triage`
- [#4771](https://github.com/github/copilot-cli/issues/4771) Taskbar presence card stays at taskState 0 (spinner) when a turn ends via task_complete `triage`
- [#4769](https://github.com/github/copilot-cli/issues/4769) MCP Oauth fails when the server metadata URL is redirected `triage`
- [#4768](https://github.com/github/copilot-cli/issues/4768) MCP OAuth: 'needs authentication' link never launches any visible auth flow (Atlassian/Jira, macOS, CLI 1.0.83) `triage`
- [#4764](https://github.com/github/copilot-cli/issues/4764) Auto approval stops working after ~1 hour `triage`
- [#4767](https://github.com/github/copilot-cli/issues/4767) Support per-element theming: distinct colors for user prompts vs. assistant responses `triage`
- [#4766](https://github.com/github/copilot-cli/issues/4766) Initial prompt by --interactive has been dropped after CLI started `triage`
- [#4763](https://github.com/github/copilot-cli/issues/4763) <!-- مراجعة_تعليق --> `triage`

#### 🔒 Closed Issues
- [#4691](https://github.com/github/copilot-cli/issues/4691) Successful apply_patch writes are missing from session file attribution
- [#4702](https://github.com/github/copilot-cli/issues/4702) Windows: instruction file loaded twice due to \ vs / path-separator mismatch in dedup
- [#3710](https://github.com/github/copilot-cli/issues/3710) The script at https://gh.io/copilot-install thinks that FreeBSD is Windows

### OpenCode (`anomalyco/opencode`)

**Stars:** 205,955 · **Open issues:** 5,718 · **Last push:** <1h ago

In the latest updates from OpenCode, there were no new releases in the past 24 hours. However, several critical merges took place, including the addition of a browser shortcut to the new-tab menu (PR #48044) and the removal of the console command in the CLI (PR #48040). Noteworthy fixes included relocating the vertical tab update button to the footer (PR #48030) and normalizing promise API inputs in plugins (PR #48039). Among the new issues, the bug report regarding the inability to set a thinking budget for the @ai-sdk/anthropic package (issue #48019) gained particular attention, highlighting an ongoing challenge in user experience.

#### ✅ Merged PRs
- [#48044](https://github.com/anomalyco/opencode/pull/48044) feat(app): add browser shortcut to new-tab menu
- [#48040](https://github.com/anomalyco/opencode/pull/48040) refactor(cli): remove console command
- [#48030](https://github.com/anomalyco/opencode/pull/48030) fix(app): move vertical tab update button to footer
- [#48041](https://github.com/anomalyco/opencode/pull/48041) fix(core): discourage polling background shell commands
- [#48039](https://github.com/anomalyco/opencode/pull/48039) fix(plugin): normalize promise API inputs
- [#48038](https://github.com/anomalyco/opencode/pull/48038) fix(session-ui): show one count before used
- [#48032](https://github.com/anomalyco/opencode/pull/48032) fix(ui): unify composer submit button styles
- [#48029](https://github.com/anomalyco/opencode/pull/48029) fix(session-ui): emphasize mentions and soften at prefixes

#### 🐛 New Issues
- [#48035](https://github.com/anomalyco/opencode/issues/48035) . `needs:compliance` 💬3
- [#48036](https://github.com/anomalyco/opencode/issues/48036) .. `needs:compliance` 💬3
- [#48019](https://github.com/anomalyco/opencode/issues/48019) [BUG]「V2 (next-19296)」Cannot set thinking budget for @ai-sdk/anthropic package `2.0` 💬3
- [#48003](https://github.com/anomalyco/opencode/issues/48003) Check paths for corruption before showing permissions prompt 💬3
- [#47993](https://github.com/anomalyco/opencode/issues/47993) [FEATURE]:Conversation Outline 💬2
- [#47992](https://github.com/anomalyco/opencode/issues/47992) [OpenCode Go] muse-spark-1.3-contributor gets stuck in repeated Read/Search loops and fails to progress to edits 💬2
- [#47994](https://github.com/anomalyco/opencode/issues/47994) Error with Deepseek 4.0 Flash 💬2
- [#48012](https://github.com/anomalyco/opencode/issues/48012) Session-not-found errors are only detected in the exact V1 shape, other wrappers are missed 💬2
- [#47976](https://github.com/anomalyco/opencode/issues/47976) Nemotron 3.5 Lightning Free not working 💬2
- [#48049](https://github.com/anomalyco/opencode/issues/48049) Any read or edit permission rule written as an absolute path (~/.ssh, ~/.aws, /etc/hosts, etc.) silently never matches, including MDM managed rules 💬1
- [#48047](https://github.com/anomalyco/opencode/issues/48047) [BUG] Interactive response prompt freezes intermittently on Confirm or Esc 💬1
- [#48042](https://github.com/anomalyco/opencode/issues/48042) [Desktop App] Unexpected Server Error and File Listing Failure after Update `needs:compliance` 💬1
- [#48033](https://github.com/anomalyco/opencode/issues/48033) Open Code beeps but prompts not working `needs:compliance` 💬1
- [#48027](https://github.com/anomalyco/opencode/issues/48027) OpenCode Zen model picker does not show account-enabled models (Big Pickle, DeepSeek V4 Flash Free) 💬1
- [#48026](https://github.com/anomalyco/opencode/issues/48026) [FEATURE]: Desktop notifications on finish 💬1
- [#47965](https://github.com/anomalyco/opencode/issues/47965) [BUG] DeepSeek V4 Flash Vision Exp on OpenCode Go incorrectly limited to 4 images per request 💬1
- [#47988](https://github.com/anomalyco/opencode/issues/47988) beta: cancelled task remains running and blocks resume/amend `2.0` 💬1
- [#48004](https://github.com/anomalyco/opencode/issues/48004) Mouse capture blocks right-click paste in Windows Terminal 💬1
- [#47894](https://github.com/anomalyco/opencode/issues/47894) [FEATURE]: Show agent descriptions on hover in the Desktop agent picker
- [#48034](https://github.com/anomalyco/opencode/issues/48034) Message pagination accepts malformed cursor characters
- [#48028](https://github.com/anomalyco/opencode/issues/48028) [BUG] Agent switches to Plan mode mid-loop between tool calls without user action
- [#48025](https://github.com/anomalyco/opencode/issues/48025) The `/terminal` command is unavailable on fresh installs of OpenCode 1.18.x
- [#48022](https://github.com/anomalyco/opencode/issues/48022) Desktop skill slash commands should match TUI defaults
- [#48020](https://github.com/anomalyco/opencode/issues/48020) [Desktop][Linux] NodeService utility process SIGABRTs during native teardown on every close
- [#48018](https://github.com/anomalyco/opencode/issues/48018) deleted
- [#48016](https://github.com/anomalyco/opencode/issues/48016) OpenRouter route-modifier suffixes (:floor, :nitro, :exacto) can't be referenced in model IDs
- [#47998](https://github.com/anomalyco/opencode/issues/47998) tui: saved tabs are shared between local and remote servers `2.0`
- [#48014](https://github.com/anomalyco/opencode/issues/48014) Global event stream reconnects on a fixed 250ms timer with no backoff
- [#48011](https://github.com/anomalyco/opencode/issues/48011) [FEATURE]: ability to modify the path of "always allow" on file reads
- [#48007](https://github.com/anomalyco/opencode/issues/48007) Thinking heading text overflows the session timeline on long reasoning topics

#### 🔒 Closed Issues
- [#20695](https://github.com/anomalyco/opencode/issues/20695) Memory Megathread
- [#48035](https://github.com/anomalyco/opencode/issues/48035) .
- [#48036](https://github.com/anomalyco/opencode/issues/48036) ..
- [#48019](https://github.com/anomalyco/opencode/issues/48019) [BUG]「V2 (next-19296)」Cannot set thinking budget for @ai-sdk/anthropic package
- [#48003](https://github.com/anomalyco/opencode/issues/48003) Check paths for corruption before showing permissions prompt
- [#47992](https://github.com/anomalyco/opencode/issues/47992) [OpenCode Go] muse-spark-1.3-contributor gets stuck in repeated Read/Search loops and fails to progress to edits
- [#47994](https://github.com/anomalyco/opencode/issues/47994) Error with Deepseek 4.0 Flash
- [#47976](https://github.com/anomalyco/opencode/issues/47976) Nemotron 3.5 Lightning Free not working
- [#48018](https://github.com/anomalyco/opencode/issues/48018) deleted

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,713 · **Open issues:** 1,356 · **Last push:** <1h ago

On September 9, 2026, Qwen Code released version v0.23.2-preview.0, which includes a notable fix to isolate subprocess-heavy end-to-end tests from fork pressure. This follows the previous release of v0.23.1, which saw the retirement of the @qwen-code/webui and enhancements such as workflow visualization in the web-shell. Among the merged pull requests, several critical fixes were implemented, including preserving history anchors during slow rendering in the web-shell. The day also saw the emergence of key new issues, particularly issue #11335 regarding transcript column drift in the Web Shell, highlighting ongoing usability concerns.

#### 🚀 New Releases
- [v0.23.2-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.2-preview.0) Release v0.23.2-preview.0
- [v0.23.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1) Release v0.23.1
- [sdk-typescript-v0.1.9](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.9) SDK TypeScript Release v0.1.9
- [sdk-typescript-v0.1.10](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.10) SDK TypeScript Release v0.1.10

#### ✅ Merged PRs
- [#11406](https://github.com/QwenLM/qwen-code/pull/11406) fix(web-shell): Replace undefined mock in split rerender tests (#11404)
- [#10421](https://github.com/QwenLM/qwen-code/pull/10421) fix(review): screen content filters at every rewrite the probe authorises (#9558)
- [#11300](https://github.com/QwenLM/qwen-code/pull/11300) fix(core): keep branch commits made by a failing post-checkout hook
- [#11366](https://github.com/QwenLM/qwen-code/pull/11366) fix(web-shell): preserve history anchors during slow rendering

#### 🐛 New Issues
- [#11335](https://github.com/QwenLM/qwen-code/issues/11335) Web Shell: transcript column drifts half a rail width off the composer axis once the turn navigation rail is visible `priority/P3` `type/bug` `category/ui` `scope/web-shell` 💬4
- [#11410](https://github.com/QwenLM/qwen-code/issues/11410) Qwen Code (v0.23.1) `priority/P1` `type/bug` `category/tools` `status/ready-for-human` 💬3
- [#11405](https://github.com/QwenLM/qwen-code/issues/11405) Denied tool with a pattern, forces model to not use the tool at all `priority/P2` `type/bug` `category/core` `scope/settings` 💬3
- [#11394](https://github.com/QwenLM/qwen-code/issues/11394) test(e2e): sdk-typescript docker leg shares one QWEN_HOME; memory prefetch eats fake-server scripted responses `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#11386](https://github.com/QwenLM/qwen-code/issues/11386) feat(serve): scale daemon workspaces past 25 — decouple registration from live runtimes with an LRU live set `priority/P2` `type/feature-request` `category/core` `category/performance` 💬3
- [#11367](https://github.com/QwenLM/qwen-code/issues/11367) Main CI failed: Qwen Code CI on 7dedcbfd71ae `type/bug` `status/ready-for-agent` `autofix/skip` 💬3
- [#11352](https://github.com/QwenLM/qwen-code/issues/11352) [Windows] node-pty leaks the ConPTY host (conhost.exe) on natural shell exit — the baton is erased before onExit, so ClosePseudoConsole is unreachable from JS `priority/P1` `status/blocked` `type/bug` `category/performance` 💬3
- [#11336](https://github.com/QwenLM/qwen-code/issues/11336) chore: follow up deferred #11101 review suggestions `priority/P3` `category/development` `scope/build-system` `scope/testing` 💬3
- [#11403](https://github.com/QwenLM/qwen-code/issues/11403) ECS runner fleet is stale: the qwen update failed `type/bug` `scope/ci-cd` 💬2
- [#11399](https://github.com/QwenLM/qwen-code/issues/11399) docs(daemon): daemon docs reach the site without their navigation — _meta.ts is never synced `priority/P3` `type/documentation` `scope/documentation` `need-discussion` 💬2
- [#11389](https://github.com/QwenLM/qwen-code/issues/11389) Main CI failed: E2E Tests on 1a73f5bff620 `type/bug` `autofix/skip` 💬2
- [#11390](https://github.com/QwenLM/qwen-code/issues/11390) Web Shell session overview: follow-up coverage and rename interactions `priority/P3` `type/bug` `category/ui` `scope/testing` 💬2
- [#11385](https://github.com/QwenLM/qwen-code/issues/11385) Web shell: sidebar session spinner never shows during background-agent notification turns `priority/P2` `type/bug` `category/core` `scope/session-management` 💬2
- [#11377](https://github.com/QwenLM/qwen-code/issues/11377) Main CI failed: Qwen Code CI on bb79319ce5e0 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#11373](https://github.com/QwenLM/qwen-code/issues/11373) Main CI failed: Qwen Code CI on d7b36db889b2 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#11343](https://github.com/QwenLM/qwen-code/issues/11343) Main CI failed: E2E Tests on bbc8ea648820 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#11331](https://github.com/QwenLM/qwen-code/issues/11331) Main CI failed: E2E Tests on 73af28003476 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#11358](https://github.com/QwenLM/qwen-code/issues/11358) feat(serve): Support hosting a custom Web Shell distribution `priority/P3` `type/feature-request` `category/integration` `need-discussion` 💬2
- [#11364](https://github.com/QwenLM/qwen-code/issues/11364) Main CI failed: E2E Tests on 272de8ace6d6 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#11361](https://github.com/QwenLM/qwen-code/issues/11361) AskUserQuestion section in ACP/Zed `priority/P2` `type/bug` `category/integration` `scope/zed` 💬2
- [#11359](https://github.com/QwenLM/qwen-code/issues/11359) docs(daemon): Organize REST and SSE API documentation for integrators `priority/P3` `type/documentation` `scope/documentation` `need-discussion` 💬2
- [#11357](https://github.com/QwenLM/qwen-code/issues/11357) feat(web-shell): Support configuration-based branding customization `priority/P3` `type/feature-request` `category/ui` `scope/themes` 💬2
- [#11354](https://github.com/QwenLM/qwen-code/issues/11354) Web Shell sidebar: sessions inside a group do not visually nest under the group header `status/in-review` `priority/P3` `type/bug` `category/ui` 💬2
- [#11353](https://github.com/QwenLM/qwen-code/issues/11353) [Windows] WebTerminalRegistry holds an exited terminal's PTY resources until the 15-minute idle reclaim, unbounded inside that window `priority/P2` `type/bug` `category/platform` `scope/shell` 💬2
- [#11345](https://github.com/QwenLM/qwen-code/issues/11345) fix(dws): enforce disabled group and direct-message sources `priority/P2` `type/bug` `category/integration` `daemon` 💬2
- [#11404](https://github.com/QwenLM/qwen-code/issues/11404) Main CI failed: Qwen Code CI on 70cf3633950b `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11415](https://github.com/QwenLM/qwen-code/issues/11415) Main CI failed: Qwen Code CI on d670d47efe3d `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11414](https://github.com/QwenLM/qwen-code/issues/11414) Main CI failed: Qwen Code CI on 422929b3a7df `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11409](https://github.com/QwenLM/qwen-code/issues/11409) Release Failed for v0.23.1-nightly.20260908.1f890086f1 on 2026-09-08 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11407](https://github.com/QwenLM/qwen-code/issues/11407) Main CI failed: Qwen Code CI on 1f890086f1a4 `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬1
- [#11384](https://github.com/QwenLM/qwen-code/issues/11384) Main CI failed: E2E Tests on 7023bba7600f `type/bug` `autofix/skip` 💬1
- [#11363](https://github.com/QwenLM/qwen-code/issues/11363) Main CI failed: Qwen Code CI on cffc40495a34 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11347](https://github.com/QwenLM/qwen-code/issues/11347) Deferred review findings from PR #10504: feat(dingtalk): show dynamic lifecycle tags 💬1
- [#11346](https://github.com/QwenLM/qwen-code/issues/11346) Main CI failed: Qwen Code CI on 0d1e0fbfa6f3 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11408](https://github.com/QwenLM/qwen-code/issues/11408) Deferred review findings from PR #9466: refactor: anchor rewind mapping to stable prompt identity
- [#11402](https://github.com/QwenLM/qwen-code/issues/11402) SDK Release Failed for v0.1.10 on 2026-09-08

#### 🔒 Closed Issues
- [#11335](https://github.com/QwenLM/qwen-code/issues/11335) Web Shell: transcript column drifts half a rail width off the composer axis once the turn navigation rail is visible
- [#10995](https://github.com/QwenLM/qwen-code/issues/10995) customHeaders: support a ${session_id} template for per-conversation request headers
- [#11022](https://github.com/QwenLM/qwen-code/issues/11022) Publish a new @qwen-code/sdk release with the managed-memory and prompt-cache fixes
- [#11367](https://github.com/QwenLM/qwen-code/issues/11367) Main CI failed: Qwen Code CI on 7dedcbfd71ae
- [#11253](https://github.com/QwenLM/qwen-code/issues/11253) Branch creation rollback can discard commits made by a failing post-checkout hook
- [#9558](https://github.com/QwenLM/qwen-code/issues/9558) review: extend the content-filter screen to test-efficacy, scoped to repo-local config (not global)
- [#11389](https://github.com/QwenLM/qwen-code/issues/11389) Main CI failed: E2E Tests on 1a73f5bff620
- [#11377](https://github.com/QwenLM/qwen-code/issues/11377) Main CI failed: Qwen Code CI on bb79319ce5e0
- [#11373](https://github.com/QwenLM/qwen-code/issues/11373) Main CI failed: Qwen Code CI on d7b36db889b2
- [#11343](https://github.com/QwenLM/qwen-code/issues/11343) Main CI failed: E2E Tests on bbc8ea648820
- [#11331](https://github.com/QwenLM/qwen-code/issues/11331) Main CI failed: E2E Tests on 73af28003476
- [#11364](https://github.com/QwenLM/qwen-code/issues/11364) Main CI failed: E2E Tests on 272de8ace6d6
- [#11215](https://github.com/QwenLM/qwen-code/issues/11215) bug(core): statusless SSE throttling errors skip rate-limit retry
- [#10366](https://github.com/QwenLM/qwen-code/issues/10366) feat(dingtalk): show dynamic lifecycle tags for message and streaming-card responses
- [#11404](https://github.com/QwenLM/qwen-code/issues/11404) Main CI failed: Qwen Code CI on 70cf3633950b
- [#11384](https://github.com/QwenLM/qwen-code/issues/11384) Main CI failed: E2E Tests on 7023bba7600f
- [#11363](https://github.com/QwenLM/qwen-code/issues/11363) Main CI failed: Qwen Code CI on cffc40495a34

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

**Stars:** 389,250 · **Open issues:** 6,427 · **Last push:** <1h ago

OpenClaw released version 2026.9.3, introducing safer updates through isolated testing of core and plugin changes before activation, support for migrations from 2026.9.2, and improved performance by preserving warm prompt caches. Among the merged pull requests, significant fixes included normalizing padded managed-worktree IDs, addressing issues with chat composer attachments, and stabilizing various UI elements to enhance user experience. A notable new issue surfaced, involving duplicated messages in the chat UI, which has garnered significant attention from users. Overall, the day's updates reflect ongoing efforts to improve stability and user experience within the OpenClaw ecosystem.

#### 🚀 New Releases
- [v2026.9.3](https://github.com/openclaw/openclaw/releases/tag/v2026.9.3) openclaw 2026.9.3

#### ✅ Merged PRs
- [#142731](https://github.com/openclaw/openclaw/pull/142731) fix(release): source-qualify Telegram progress scenario
- [#142728](https://github.com/openclaw/openclaw/pull/142728) test(ui): settle attachment geometry before comparison
- [#142730](https://github.com/openclaw/openclaw/pull/142730) docs(plugins): split the plugin architecture internals by reader job
- [#141851](https://github.com/openclaw/openclaw/pull/141851) fix(ci): complete macOS CodeQL within hosted limits
- [#142721](https://github.com/openclaw/openclaw/pull/142721) test(live): backport unavailable-model drift to 7.33
- [#142717](https://github.com/openclaw/openclaw/pull/142717) test(live): backport safe MiniMax probes to 7.33
- [#141373](https://github.com/openclaw/openclaw/pull/141373) fix(gateway): normalize padded managed-worktree IDs
- [#142682](https://github.com/openclaw/openclaw/pull/142682) fix(models): disable Fast choices without a request mapping
- [#142708](https://github.com/openclaw/openclaw/pull/142708) fix: keep shipped SDK context aliases pending removal
- [#142248](https://github.com/openclaw/openclaw/pull/142248) fix(update): preflight Node requirements for dev candidates
- [#142658](https://github.com/openclaw/openclaw/pull/142658) fix: align chat composer attachments with draft text
- [#142637](https://github.com/openclaw/openclaw/pull/142637) fix(ui): prevent native URL tooltips on GitHub preview links
- [#142613](https://github.com/openclaw/openclaw/pull/142613) fix: stop showing unavailable while attachment previews load
- [#142645](https://github.com/openclaw/openclaw/pull/142645) fix(e2e): show frozen onboarding failure diagnostics
- [#142696](https://github.com/openclaw/openclaw/pull/142696) fix(agents): skip progress cards for trivial chat requests
- [#142382](https://github.com/openclaw/openclaw/pull/142382) fix: automations add fails under Codex when toolsAllow uses the catalog's namespaced tool names
- [#142703](https://github.com/openclaw/openclaw/pull/142703) docs(plugins): split the channel plugins SDK reference by reader job
- [#142683](https://github.com/openclaw/openclaw/pull/142683) fix(release): derive frozen target harness contracts
- [#142635](https://github.com/openclaw/openclaw/pull/142635) fix(ui): invalid message widths stretch the chat transcript
- [#142646](https://github.com/openclaw/openclaw/pull/142646) fix(ui): stop guessing model thinking capabilities
- [#142509](https://github.com/openclaw/openclaw/pull/142509) fix(ui): stabilize composer alignment browser test
- [#142685](https://github.com/openclaw/openclaw/pull/142685) test(live): avoid secret-shaped MiniMax tool probes
- [#142687](https://github.com/openclaw/openclaw/pull/142687) fix(release): source-qualify settled Telegram recovery
- [#142457](https://github.com/openclaw/openclaw/pull/142457) fix(update): surface retained official plugin pin advisories
- [#142634](https://github.com/openclaw/openclaw/pull/142634) fix(macos): close focused side-panel tabs with Cmd+W
- [#142523](https://github.com/openclaw/openclaw/pull/142523) fix(ci): stabilize mobile screenshot qualification
- [#142627](https://github.com/openclaw/openclaw/pull/142627) fix(feishu): preserve native rich-text inline styles
- [#131805](https://github.com/openclaw/openclaw/pull/131805) fix: keep new-session model display and routing aligned
- [#142686](https://github.com/openclaw/openclaw/pull/142686) fix(release): keep frozen Git admission explicit
- [#142659](https://github.com/openclaw/openclaw/pull/142659) refactor(tests): share release-note input fixtures
- [#142691](https://github.com/openclaw/openclaw/pull/142691) improve: speed up checks for larger core and UI changes
- [#142674](https://github.com/openclaw/openclaw/pull/142674) fix: preserve Mac text editing shortcuts in Control UI
- [#142690](https://github.com/openclaw/openclaw/pull/142690) refactor(tests): share scoped Discord action expectations
- [#142608](https://github.com/openclaw/openclaw/pull/142608) fix(browser): keep newer dialogs pending after earlier actions settle
- [#142672](https://github.com/openclaw/openclaw/pull/142672) fix(update): preserve Doctor diagnostics when finalization times out
- [#142540](https://github.com/openclaw/openclaw/pull/142540) fix(ui): consolidate skill import source controls
- [#142677](https://github.com/openclaw/openclaw/pull/142677) ci(labeler): label the child pages created by docs splits
- [#142675](https://github.com/openclaw/openclaw/pull/142675) fix(doctor): omit unrelated diagnostics during update repair
- [#142041](https://github.com/openclaw/openclaw/pull/142041) fix(tlon): prevent citations from fetching outside the cited post
- [#142364](https://github.com/openclaw/openclaw/pull/142364) fix(memory): use the fallback provider's embedding model
- [#138303](https://github.com/openclaw/openclaw/pull/138303) fix(ui): prevent loaded image skeletons after scrolling
- [#142679](https://github.com/openclaw/openclaw/pull/142679) feat(crabbox): advertise Windows (WSL2) cloud workers on Crabbox 0.53.1+
- [#142500](https://github.com/openclaw/openclaw/pull/142500) fix(plugins): reuse prewarmed catalog presentation
- [#142665](https://github.com/openclaw/openclaw/pull/142665) fix(ui): match loading attachment action to Open pill
- [#142669](https://github.com/openclaw/openclaw/pull/142669) fix: avoid redundant database scans during Doctor schema repair
- [#142422](https://github.com/openclaw/openclaw/pull/142422) fix(ui): prevent duplicate final replies after history hydration
- [#141268](https://github.com/openclaw/openclaw/pull/141268) fix(gateway): preserve length in chat completion responses
- [#142555](https://github.com/openclaw/openclaw/pull/142555) fix(skills): render ClawHub Markdown and compact actions
- [#141705](https://github.com/openclaw/openclaw/pull/141705) fix(agents): tell the settled-turn finalizer that tools are disabled
- [#142684](https://github.com/openclaw/openclaw/pull/142684) revert(ui): undo conversation rail spacing change
- [#142600](https://github.com/openclaw/openclaw/pull/142600) fix(signal): preserve final reply quotes after failed streamed sends
- [#142667](https://github.com/openclaw/openclaw/pull/142667) improve(ui): halve conversation position rail spacing
- [#142636](https://github.com/openclaw/openclaw/pull/142636) fix(plugins): retain registration work through final resource cleanup
- [#142536](https://github.com/openclaw/openclaw/pull/142536) fix: keep agent file preview headers compact on phones
- [#142577](https://github.com/openclaw/openclaw/pull/142577) fix: show attachment overflow after adding files or resizing chat
- [#142550](https://github.com/openclaw/openclaw/pull/142550) fix(ui): size skill readers to content and compact headers
- [#142666](https://github.com/openclaw/openclaw/pull/142666) docs(channels): split the Discord page by reader job
- [#142620](https://github.com/openclaw/openclaw/pull/142620) fix(plugin-sdk): restore writable catalog loader defaults
- [#142589](https://github.com/openclaw/openclaw/pull/142589) fix(security): preserve existing WhatsApp group allowlists
- [#142564](https://github.com/openclaw/openclaw/pull/142564) fix(ui): preserve settings drafts after array row removal
- [#142652](https://github.com/openclaw/openclaw/pull/142652) fix: allow independent worker and CLI runs to start from parent tools
- [#142648](https://github.com/openclaw/openclaw/pull/142648) refactor(codex): keep protocol maps within lint budget
- [#142554](https://github.com/openclaw/openclaw/pull/142554) fix(ui): Kind sorting and grouping misclassify cron sessions
- [#142629](https://github.com/openclaw/openclaw/pull/142629) fix(cli): correct misleading uninstall guidance
- [#142622](https://github.com/openclaw/openclaw/pull/142622) fix(models): isolate catalog refresh failures across source changes
- [#142276](https://github.com/openclaw/openclaw/pull/142276) fix(codex): restore workspace instructions for catalog-backed models
- [#142535](https://github.com/openclaw/openclaw/pull/142535) fix(skills): show body titles for accepted frontmatter formats
- [#142643](https://github.com/openclaw/openclaw/pull/142643) fix(ci): hydrate release ancestry branches independently
- [#142625](https://github.com/openclaw/openclaw/pull/142625) refactor(skills): unify package spec normalization
- [#142641](https://github.com/openclaw/openclaw/pull/142641) docs(plugins): split the SDK overview by reader job
- [#142612](https://github.com/openclaw/openclaw/pull/142612) fix: reduce cold presence work when viewing multiple sessions
- [#142541](https://github.com/openclaw/openclaw/pull/142541) docs: restore the v2026.9.3 release statistics label
- [#142499](https://github.com/openclaw/openclaw/pull/142499) refactor(infra): share diagnostic listener registration
- [#137664](https://github.com/openclaw/openclaw/pull/137664) fix(tlon): report missing outbound config fields
- [#142375](https://github.com/openclaw/openclaw/pull/142375) fix(models): stop model checks from rediscovering providers
- [#136545](https://github.com/openclaw/openclaw/pull/136545) fix(ui): distinguish Mac and iPad browser device labels
- [#142618](https://github.com/openclaw/openclaw/pull/142618) fix(ui): settings search loses phrases with middle tag filters
- [#142632](https://github.com/openclaw/openclaw/pull/142632) fix(mcp): drain admitted tool work before shutdown cleanup
- [#137485](https://github.com/openclaw/openclaw/pull/137485) fix(codex): stop marketplace polling when native plugins are disabled
- [#142609](https://github.com/openclaw/openclaw/pull/142609) fix(memory): align deep status with the published fallback index
- [#142278](https://github.com/openclaw/openclaw/pull/142278) fix(agents): explain returned fallback stops
- [#142066](https://github.com/openclaw/openclaw/pull/142066) fix(maturity): land Windows, ChromeOS, and durable-work corrections
- [#142573](https://github.com/openclaw/openclaw/pull/142573) fix(release): preserve frozen update compatibility
- [#142630](https://github.com/openclaw/openclaw/pull/142630) fix(ci): reduce shard planner work when test inventories grow
- [#142572](https://github.com/openclaw/openclaw/pull/142572) fix(channels): preserve 7.33 Telegram workspace media access
- [#142599](https://github.com/openclaw/openclaw/pull/142599) refactor(agents): simplify session tool-result bookkeeping
- [#138667](https://github.com/openclaw/openclaw/pull/138667) fix(cli-backends): apply effective fast mode at dispatch
- [#142601](https://github.com/openclaw/openclaw/pull/142601) refactor(apple): centralize gateway error overrides
- [#142418](https://github.com/openclaw/openclaw/pull/142418) fix(android): keep branch picker inside fold panes
- [#142527](https://github.com/openclaw/openclaw/pull/142527) fix(plugins): include assets in untracked source package builds
- [#142607](https://github.com/openclaw/openclaw/pull/142607) docs(plugins): split the SDK migration guide by reader job
- [#142335](https://github.com/openclaw/openclaw/pull/142335) fix(ui): remove unintended underlines from button links
- [#142472](https://github.com/openclaw/openclaw/pull/142472) fix(ci): keep hosted TypeScript preflight within runner limits
- [#142614](https://github.com/openclaw/openclaw/pull/142614) refactor(tests): retire duplicate deep import memory case
- [#142518](https://github.com/openclaw/openclaw/pull/142518) fix(mcp): node tool results copy large text twice
- [#142504](https://github.com/openclaw/openclaw/pull/142504) fix(telegram): stop adding blank lines inside code examples
- [#130494](https://github.com/openclaw/openclaw/pull/130494) fix(gateway): retain CLI metadata after history dedupe
- [#142604](https://github.com/openclaw/openclaw/pull/142604) refactor(tests): remove stale skills CLI terminal mocks
- [#140680](https://github.com/openclaw/openclaw/pull/140680) fix(ci): reuse verified runner toolchain archives
- [#142605](https://github.com/openclaw/openclaw/pull/142605) docs(plugins): split the hooks reference by reader job
- [#142436](https://github.com/openclaw/openclaw/pull/142436) fix: tool previews alter filenames and slow down on large batches
- [#142448](https://github.com/openclaw/openclaw/pull/142448) refactor(e2e): share plugin path containment checks
- [#142213](https://github.com/openclaw/openclaw/pull/142213) fix(chat): hide browser previews for non-web URLs
- [#142602](https://github.com/openclaw/openclaw/pull/142602) perf(tests): advance QA rich-observation deadlines deterministically
- [#142579](https://github.com/openclaw/openclaw/pull/142579) fix(codex): backport nonfatal optional app availability
- [#142566](https://github.com/openclaw/openclaw/pull/142566) fix(slack): backport Enterprise workspace resolution for heartbeat owner DMs
- [#142568](https://github.com/openclaw/openclaw/pull/142568) fix(plugin-state): reduce memory used by complete listings
- [#142570](https://github.com/openclaw/openclaw/pull/142570) perf(ui): share message preparation within each render
- [#142372](https://github.com/openclaw/openclaw/pull/142372) fix(ui): show catalog failures across model choices
- [#142338](https://github.com/openclaw/openclaw/pull/142338) perf(dev): defer compiler loading on clean launcher paths
- [#142587](https://github.com/openclaw/openclaw/pull/142587) refactor(plugins): unify startup contract membership checks
- [#142513](https://github.com/openclaw/openclaw/pull/142513) refactor(cli): finalize restart health snapshots once
- [#142562](https://github.com/openclaw/openclaw/pull/142562) fix(release): pin Node in Rocky installer smoke
- [#142563](https://github.com/openclaw/openclaw/pull/142563) fix(release): capability-bind Bun install runtime
- [#142520](https://github.com/openclaw/openclaw/pull/142520) fix(node-host): stabilize native CLI fixtures on Windows
- [#142557](https://github.com/openclaw/openclaw/pull/142557) fix(models): harden SDK catalog loads with passive defaults
- [#142538](https://github.com/openclaw/openclaw/pull/142538) docs: make extended-stable validation dispatch reliable
- [#142491](https://github.com/openclaw/openclaw/pull/142491) perf(ui): reuse speaker metadata during chat export
- [#142561](https://github.com/openclaw/openclaw/pull/142561) test(live): classify upstream unavailable models
- [#142537](https://github.com/openclaw/openclaw/pull/142537) fix(release): pin Kova release CPU calibration
- [#142558](https://github.com/openclaw/openclaw/pull/142558) fix(agents): clarify settled finalizer is text-only
- [#142488](https://github.com/openclaw/openclaw/pull/142488) perf(ui): merge Swarm roster sources in one pass
- [#142438](https://github.com/openclaw/openclaw/pull/142438) fix: hide phantom sidebar children after subagent deletion
- [#142578](https://github.com/openclaw/openclaw/pull/142578) fix: finish opening the mobile sidebar after a swipe
- [#142560](https://github.com/openclaw/openclaw/pull/142560) docs(help): link the allowlist env vars orphaned by the testing split
- [#142576](https://github.com/openclaw/openclaw/pull/142576) chore(ui): refresh control ui locales
- [#137678](https://github.com/openclaw/openclaw/pull/137678) fix(voice-call): keep unknown voice mappings string-valued
- [#142485](https://github.com/openclaw/openclaw/pull/142485) fix(a2a): honor stable peer bindings for inbound tasks
- [#137668](https://github.com/openclaw/openclaw/pull/137668) fix(gateway): honor mapped IPv4 CIDR ranges
- [#142478](https://github.com/openclaw/openclaw/pull/142478) test(agents): consolidate memory flush boundary coverage
- [#142546](https://github.com/openclaw/openclaw/pull/142546) refactor(qa): remove redundant Matrix scenario forwarder
- [#142496](https://github.com/openclaw/openclaw/pull/142496) fix(msteams): decode HTML-only message text correctly
- [#137679](https://github.com/openclaw/openclaw/pull/137679) fix(voice-call): prototype CallStatus is treated as terminal
- [#142057](https://github.com/openclaw/openclaw/pull/142057) chore(android): add a stateful branch proof scene
- [#142316](https://github.com/openclaw/openclaw/pull/142316) perf(ui): preload Inbox panel before opening
- [#142551](https://github.com/openclaw/openclaw/pull/142551) fix(release): honor frozen ClawHub request contract
- [#142143](https://github.com/openclaw/openclaw/pull/142143) fix(ui): align mobile cards, contain previews, and restore focus outlines
- [#142442](https://github.com/openclaw/openclaw/pull/142442) fix(ui): render Markdown in conversation position previews
- [#142505](https://github.com/openclaw/openclaw/pull/142505) fix(sessions): skip cleanup for newly protected history
- [#142542](https://github.com/openclaw/openclaw/pull/142542) perf(line): reuse prepared table cells
- [#142519](https://github.com/openclaw/openclaw/pull/142519) fix(plugins): retain replaced registries through cleanup
- [#142498](https://github.com/openclaw/openclaw/pull/142498) fix(gateway): keep secret recovery notices accurate for cold owners
- [#142508](https://github.com/openclaw/openclaw/pull/142508) fix: load the host SDK for plugins in sibling checkouts
- [#142544](https://github.com/openclaw/openclaw/pull/142544) fix(ui): add new-session action to Other sidebar group
- [#142543](https://github.com/openclaw/openclaw/pull/142543) feat(ui): add selected text to the main chat composer
- [#142525](https://github.com/openclaw/openclaw/pull/142525) fix(sessions): expose slow reclamation between writer scopes
- [#138350](https://github.com/openclaw/openclaw/pull/138350) chore: refresh Control UI mock fixtures
- [#142249](https://github.com/openclaw/openclaw/pull/142249) refactor(plugins): reuse prepared tool manifest lookup
- [#142419](https://github.com/openclaw/openclaw/pull/142419) fix: allow updates during agent database writes
- [#129610](https://github.com/openclaw/openclaw/pull/129610) fix(ui): stop cancelled subagents showing active text
- [#142482](https://github.com/openclaw/openclaw/pull/142482) fix(sessions): avoid premature daily resets before daylight-saving gaps
- [#142275](https://github.com/openclaw/openclaw/pull/142275) fix(ui): keep subagent task progress above the view-only footer
- [#142444](https://github.com/openclaw/openclaw/pull/142444) perf(ui): reuse prepared code block facts
- [#142475](https://github.com/openclaw/openclaw/pull/142475) improve: reuse successful docs checks before publishing
- [#142068](https://github.com/openclaw/openclaw/pull/142068) fix(maturity): cover durable work orchestration
- [#142065](https://github.com/openclaw/openclaw/pull/142065) fix(maturity): align current terminology contracts
- [#142494](https://github.com/openclaw/openclaw/pull/142494) refactor(system-agent): remove unused verification callback argument
- [#142456](https://github.com/openclaw/openclaw/pull/142456) fix(release): align frozen 7.33 Docker contracts
- [#142426](https://github.com/openclaw/openclaw/pull/142426) docs(concepts): split the QA end-to-end automation page by reader job
- [#142507](https://github.com/openclaw/openclaw/pull/142507) refactor(tests): remove unused Doctor config mocks
- [#142440](https://github.com/openclaw/openclaw/pull/142440) fix: remove per-file delays before cloud turns
- [#142480](https://github.com/openclaw/openclaw/pull/142480) fix(browser): report blocked and interrupted CLI actions
- [#142503](https://github.com/openclaw/openclaw/pull/142503) test: reuse compiled CLI for message cleanup cases
- [#142495](https://github.com/openclaw/openclaw/pull/142495) refactor(matrix): remove unreachable forced-reset repair retry
- [#142450](https://github.com/openclaw/openclaw/pull/142450) perf(agents): build converted messages in one array
- [#137806](https://github.com/openclaw/openclaw/pull/137806) fix(memory-lancedb): refresh the table version so recall observes external writes
- [#141899](https://github.com/openclaw/openclaw/pull/141899) fix(android): keep background tasks within fold panes
- [#142474](https://github.com/openclaw/openclaw/pull/142474) fix(release): unblock Codex plugin security validation
- [#142461](https://github.com/openclaw/openclaw/pull/142461) fix(release): keep 7.33 ClawHub bootstrap hermetic
- [#141896](https://github.com/openclaw/openclaw/pull/141896) fix(ui): gate GitHub preview loaders on shared success
- [#142441](https://github.com/openclaw/openclaw/pull/142441) fix(e2e): keep frozen survivor tooling coherent
- [#142471](https://github.com/openclaw/openclaw/pull/142471) fix(agents): preserve settled tool continuation boundary
- [#142428](https://github.com/openclaw/openclaw/pull/142428) fix(release): validate Bun-installed runtime under Bun
- [#142427](https://github.com/openclaw/openclaw/pull/142427) fix(installer): default 2026.6.35 installs to Node 24
- [#137974](https://github.com/openclaw/openclaw/pull/137974) fix(agents): preserve framing in workspace policy digests
- [#142465](https://github.com/openclaw/openclaw/pull/142465) fix(ui): prevent model picker lag with large catalogs
- [#141725](https://github.com/openclaw/openclaw/pull/141725) fix: report silent fallback outcomes accurately
- [#140719](https://github.com/openclaw/openclaw/pull/140719) feat(config): support externally managed read-only configuration
- [#142423](https://github.com/openclaw/openclaw/pull/142423) fix(plugins): release one-shot exporter resources after cleanup
- [#142469](https://github.com/openclaw/openclaw/pull/142469) refactor(agents): specialize extra bootstrap file loading
- [#142067](https://github.com/openclaw/openclaw/pull/142067) fix(maturity): include ChromeOS in Linux cohort
- [#142447](https://github.com/openclaw/openclaw/pull/142447) perf(discord): avoid temporary chunk validation arrays
- [#142467](https://github.com/openclaw/openclaw/pull/142467) fix(e2e): keep frozen typed onboarding helpers coherent
- [#141266](https://github.com/openclaw/openclaw/pull/141266) fix(ci): avoid unrelated catalog fetches in isolated fixtures
- [#142361](https://github.com/openclaw/openclaw/pull/142361) fix(memory-core): verify doctor readiness on continuously written agent databases
- [#142460](https://github.com/openclaw/openclaw/pull/142460) perf(plugins): keep provider discovery metadata lightweight
- [#141162](https://github.com/openclaw/openclaw/pull/141162) docs(gateway): split the security overview by reader job
- [#142279](https://github.com/openclaw/openclaw/pull/142279) feat(exec): give the auto-reviewer bounded conversation context
- [#137869](https://github.com/openclaw/openclaw/pull/137869) fix(daemon): skip systemd content repairs for masked units
- [#142466](https://github.com/openclaw/openclaw/pull/142466) refactor: remove unreachable process poll test branch
- [#142458](https://github.com/openclaw/openclaw/pull/142458) docs(release): verify exact ClawHub versions and publish sets
- [#142413](https://github.com/openclaw/openclaw/pull/142413) refactor(web): share bounded response byte consumption
- [#142404](https://github.com/openclaw/openclaw/pull/142404) refactor(telegram): skip unused draft prefix preparation
- [#117631](https://github.com/openclaw/openclaw/pull/117631) fix(cli): preserve context in plugin recovery guidance
- [#142455](https://github.com/openclaw/openclaw/pull/142455) refactor(queue): remove unused prompt deduplication mode
- [#142285](https://github.com/openclaw/openclaw/pull/142285) fix(models): preserve exact catalog row identities
- [#142179](https://github.com/openclaw/openclaw/pull/142179) fix: doctor read-only database inspections time out on large agent databases
- [#142405](https://github.com/openclaw/openclaw/pull/142405) fix(e2e): report completed package installs
- [#142433](https://github.com/openclaw/openclaw/pull/142433) fix(opencode-go): give 7.33 live probes stable session identity
- [#142451](https://github.com/openclaw/openclaw/pull/142451) perf(scripts): combine legacy file boundary scans
- [#137877](https://github.com/openclaw/openclaw/pull/137877) fix(auto-reply): show usage for invalid approval decisions
- [#142371](https://github.com/openclaw/openclaw/pull/142371) fix: avoid unnecessary diagnostic loading during CLI startup
- [#142391](https://github.com/openclaw/openclaw/pull/142391) refactor(agents): avoid unused history pruning copies
- [#142406](https://github.com/openclaw/openclaw/pull/142406) fix(markdown): align short columns in code tables
- [#136462](https://github.com/openclaw/openclaw/pull/136462) fix(reply): clarify unattributed reply failures
- [#142432](https://github.com/openclaw/openclaw/pull/142432) fix(ci): keep mobile beta authorization valid as main advances
- [#138211](https://github.com/openclaw/openclaw/pull/138211) refactor(doctor): remove unused runnable health-check adapter
- [#142387](https://github.com/openclaw/openclaw/pull/142387) refactor(ui): stop forwarded avatar selection at its existing limit
- [#142081](https://github.com/openclaw/openclaw/pull/142081) test(exec): compact inline eval detection cases
- [#142408](https://github.com/openclaw/openclaw/pull/142408) refactor(irc): derive config types from schema
- [#142082](https://github.com/openclaw/openclaw/pull/142082) test(gateway): compact network policy cases
- [#142437](https://github.com/openclaw/openclaw/pull/142437) docs: clarify the v2026.9.3 release statistics label
- [#142083](https://github.com/openclaw/openclaw/pull/142083) test(cli): compact config guard cases
- [#142084](https://github.com/openclaw/openclaw/pull/142084) test(whatsapp): compact text runtime cases
- [#141987](https://github.com/openclaw/openclaw/pull/141987) feat(exec): let the auto-reviewer allow, deny, or escalate commands
- [#142409](https://github.com/openclaw/openclaw/pull/142409) refactor(plugins): derive manifest registry records
- [#142410](https://github.com/openclaw/openclaw/pull/142410) refactor(skills): derive workshop store contracts
- [#142407](https://github.com/openclaw/openclaw/pull/142407) refactor(google-meet): derive resolved config contract
- [#142431](https://github.com/openclaw/openclaw/pull/142431) fix(release): pin trusted Node for frozen installer smokes
- [#142415](https://github.com/openclaw/openclaw/pull/142415) fix(tts): keep ordinary Markdown prose in spoken replies
- [#142138](https://github.com/openclaw/openclaw/pull/142138) fix(model-catalog): estimate costs for OpenRouter routing shortcuts
- [#142425](https://github.com/openclaw/openclaw/pull/142425) docs(tools): split the code mode page by reader job
- [#142227](https://github.com/openclaw/openclaw/pull/142227) feat(ui): replace chat timeline with compact left rail
- [#142135](https://github.com/openclaw/openclaw/pull/142135) fix(gateway): retain timeout notices after chat reload
- [#142350](https://github.com/openclaw/openclaw/pull/142350) ci: keep isolated UI unit changes out of E2E jobs
- [#141860](https://github.com/openclaw/openclaw/pull/141860) fix(android): keep Thinking controls clear of folds
- [#141224](https://github.com/openclaw/openclaw/pull/141224) docs(providers): split the OpenAI provider page by reader job
- [#142420](https://github.com/openclaw/openclaw/pull/142420) chore(ui): refresh control ui locales
- [#142402](https://github.com/openclaw/openclaw/pull/142402) refactor(agents): group equivalent Nodes dispatch cases
- [#142374](https://github.com/openclaw/openclaw/pull/142374) refactor(plugins): avoid temporary command alias collections
- [#142400](https://github.com/openclaw/openclaw/pull/142400) improve: reduce source downloads before docs sync
- [#142396](https://github.com/openclaw/openclaw/pull/142396) perf(plugins): reuse startup facts for shared config
- [#127254](https://github.com/openclaw/openclaw/pull/127254) docs: fix uninstall instructions for Git and prefix installs
- [#142411](https://github.com/openclaw/openclaw/pull/142411) refactor(tests): remove dead Telegram edit scaffolding
- [#142367](https://github.com/openclaw/openclaw/pull/142367) fix(cli): inspect the agent model catalog without readding excluded rows
- [#142384](https://github.com/openclaw/openclaw/pull/142384) fix(ui): avoid repeated model discovery when reopening Settings pickers
- [#142332](https://github.com/openclaw/openclaw/pull/142332) fix(ui): keep person mention suggestions stable while typing
- [#142388](https://github.com/openclaw/openclaw/pull/142388) fix(cli): dispose plugin resources after invocation cleanup
- [#142345](https://github.com/openclaw/openclaw/pull/142345) refactor(update): remove unused triage result field
- [#141221](https://github.com/openclaw/openclaw/pull/141221) docs(reference): split the testing reference by reader job
- [#142379](https://github.com/openclaw/openclaw/pull/142379) docs(cli): point the Gateway catalog link at a real anchor
- [#138689](https://github.com/openclaw/openclaw/pull/138689) fix(slack): resolve Enterprise workspace for heartbeat owner DMs
- [#142348](https://github.com/openclaw/openclaw/pull/142348) fix(release): pin complete 7.33 Kova compatibility ref
- [#142381](https://github.com/openclaw/openclaw/pull/142381) fix: carry reviewed native locale corrections
- [#142246](https://github.com/openclaw/openclaw/pull/142246) fix: align chat attachment spacing with message blocks
- [#136508](https://github.com/openclaw/openclaw/pull/136508) fix(slack): bound HTTP bodies before Bolt
- [#142344](https://github.com/openclaw/openclaw/pull/142344) fix(ci): retry performance artifact finalization
- [#142205](https://github.com/openclaw/openclaw/pull/142205) refactor(reply): remove redundant buffered duplicate sets
- [#141477](https://github.com/openclaw/openclaw/pull/141477) fix(auth): fence shared OAuth refresh generations
- [#142369](https://github.com/openclaw/openclaw/pull/142369) fix(matrix): keep escaped mentions literal after unmatched backticks
- [#142114](https://github.com/openclaw/openclaw/pull/142114) docs: update maturity scorecard
- [#142327](https://github.com/openclaw/openclaw/pull/142327) fix: clarify parent sessions in Control UI translations
- [#142353](https://github.com/openclaw/openclaw/pull/142353) fix(e2e): mount trusted registry module closure
- [#142385](https://github.com/openclaw/openclaw/pull/142385) chore: group TUI typechecks with command tests
- [#142376](https://github.com/openclaw/openclaw/pull/142376) refactor(tests): share cloud agent response fixtures
- [#142042](https://github.com/openclaw/openclaw/pull/142042) fix(control-ui): separate catalog header actions
- [#142354](https://github.com/openclaw/openclaw/pull/142354) improve(read): avoid duplicate copies of matching text results
- [#142378](https://github.com/openclaw/openclaw/pull/142378) fix(release): qualify frozen Telegram scenario selection
- [#137686](https://github.com/openclaw/openclaw/pull/137686) fix(accounts): preserve Unicode in display labels
- [#141689](https://github.com/openclaw/openclaw/pull/141689) fix(e2e): preserve typed onboarding install diagnostics
- [#129186](https://github.com/openclaw/openclaw/pull/129186) fix(talk): bind realtime delegation ownership
- [#142274](https://github.com/openclaw/openclaw/pull/142274) fix(ui): polish chat mention picker

#### 🐛 New Issues
- [#142037](https://github.com/openclaw/openclaw/issues/142037) Embedded runtime records explicit-route message-tool replies as "mute": Slack top-level inbound synthesizes currentThreadTs, so topLevel sends resolve to thread mismatch and the #113554 rescue never fires (v2026.9.2) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬9
- [#142336](https://github.com/openclaw/openclaw/issues/142336) [Bug]: Core /dashboard shadows Telegram Mini App launcher in 2026.9.2+ `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬6
- [#142549](https://github.com/openclaw/openclaw/issues/142549) Messages duplicated 3-4 times in chat UI `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬5
- [#142530](https://github.com/openclaw/openclaw/issues/142530) Telegram: animated/video stickers (.tgs/.webm) arrive as empty message bodies with no placeholder `P2` `impact:message-loss` 💬5
- [#142484](https://github.com/openclaw/openclaw/issues/142484) [Feature]: Explore scoped persistent-agent continuity across environments `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬3
- [#142310](https://github.com/openclaw/openclaw/issues/142310) WebChat: text before tool calls rendered twice (session observer invalid JSON on every turn) `bug` `regression` `P2` `impact:message-loss` 💬3
- [#142393](https://github.com/openclaw/openclaw/issues/142393) [Bug]: Deep-dreaming promotes low-value, zero-recall snippets into MEMORY.md and grows it past the bootstrap char cap `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#142268](https://github.com/openclaw/openclaw/issues/142268) Queued follow-up delivery drops the implicit reply target that the normal path injects `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#141813](https://github.com/openclaw/openclaw/issues/141813) [Bug]: Models page picker opens with only the configured models; the discovered catalog fills in only after an interaction, with no loading state `bug` `no-stale` `bug:behavior` `P2` 💬3
- [#142149](https://github.com/openclaw/openclaw/issues/142149) [Bug]: rawError=terminated can bypass settled-turn recovery and surface as LLM timeout when timedOut=false `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#141816](https://github.com/openclaw/openclaw/issues/141816) [Bug]: latest Windows hub install gateway failed，because of wrong node version `bug` `bug:crash` `P0` `impact:ux-release-blocker` 💬3
- [#141787](https://github.com/openclaw/openclaw/issues/141787) [Bug]: Dreaming on an untouched workspace creates memory/ and marks it configured, so BOOTSTRAP.md is spent before the first conversation `bug` `no-stale` `bug:behavior` `P2` 💬3
- [#142479](https://github.com/openclaw/openclaw/issues/142479) [Bug]: Active Memory skips model recall when optional trigger lookup times out `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#141739](https://github.com/openclaw/openclaw/issues/141739) [Bug]: memory-core managed 'Memory Dreaming Promotion' cron ignores plugins.entries.memory-core.config.dreaming.frequency — always re-declares default `0 3 * * *` `P2` `impact:ux-friction` 💬2
- [#142718](https://github.com/openclaw/openclaw/issues/142718) [Bug]: registerGatewayMethod return-value support is still rejected by the exported handler type `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142701](https://github.com/openclaw/openclaw/issues/142701) Gateway becomes unkillable during memory reindex; systemctl restart fails, sudo reboot required (lock files persist across restarts) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬2
- [#142574](https://github.com/openclaw/openclaw/issues/142574) imap: "sweep failed=Failed to parse HTML" on single-part HTML-only emails (entities@8 vs htmlparser2@10 fromCodePoint mismatch) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142619](https://github.com/openclaw/openclaw/issues/142619) codex: random subscription-route "subscription route requires ChatGPT auth in the native Codex home" failures under appServer.homeScope="user" `P2` `clawsweeper:needs-info` `impact:auth-provider` `issue-rating: 🦐 gold shrimp` 💬2
- [#142616](https://github.com/openclaw/openclaw/issues/142616) [Bug] openai-compat /v1/chat/completions: session keys containing ULID-shaped tokens are permanently fenced from the second turn (SessionWorkStartChangedError surfaced as opaque 500) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142610](https://github.com/openclaw/openclaw/issues/142610) Meeting voice consult always fails with "Gateway is draining": inherits released root-work admission context `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142598](https://github.com/openclaw/openclaw/issues/142598) Docs deployment speed: shipped PRs, before/after measurements, and freshness follow-up `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#142611](https://github.com/openclaw/openclaw/issues/142611) Control UI show background toggle does not persist across gateway restarts `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#142476](https://github.com/openclaw/openclaw/issues/142476) 2026.9.3: cron session reaper opens every agent database with a synchronous PRAGMA integrity_check, blocking the event loop 14-76s every few minutes on a 632-agent gateway `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142548](https://github.com/openclaw/openclaw/issues/142548) [Bug]: Telegram voice and M4A audio uploads can show 0:00 duration `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#142515](https://github.com/openclaw/openclaw/issues/142515) [Bug]: Configuration form controls and collection actions lack a consistent layout `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#142524](https://github.com/openclaw/openclaw/issues/142524) [Bug]: Kimi Coding usage-limit 403 is reported as an auth failure ("Re-authenticate the provider") and latches the provider off `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142481](https://github.com/openclaw/openclaw/issues/142481) Sandbox backend launchers inherit the Linux exec OOM-score wrapper `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142483](https://github.com/openclaw/openclaw/issues/142483) Voice agent consult fails when the requester session is model-selection-locked, even though it delegates to an independent agent `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142489](https://github.com/openclaw/openclaw/issues/142489) [Bug]: Slack — `statusReactions.enabled: false` also suppresses `messages.ackReaction` when `groupChat.visibleReplies: "message_tool"` `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142313](https://github.com/openclaw/openclaw/issues/142313) [Bug] No-caption image over the offload threshold is dropped by the empty-turn guard ("I didn't receive any text") `P2` `impact:message-loss` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#142452](https://github.com/openclaw/openclaw/issues/142452) [Bug]: doctor gateway-restart flow races the readiness probe (fixed 1500ms sleep + single-shot health check) → spurious "Health check failed" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142429](https://github.com/openclaw/openclaw/issues/142429) [Bug]: Models settings shows global defaults beneath an agent selector, obscuring per-agent overrides `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142462](https://github.com/openclaw/openclaw/issues/142462) [Feature]: Teammate mode — persistent worker computer and named Bots `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#141839](https://github.com/openclaw/openclaw/issues/141839) [Bug]: a turn killed by the run deadline leaves no assistant record in the session transcript `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142398](https://github.com/openclaw/openclaw/issues/142398) [Bug]: WhatsApp retries can change message identity after ambiguous failures `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142325](https://github.com/openclaw/openclaw/issues/142325) UI event-log fixture tears down globals before queued imports settle `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬2
- [#142283](https://github.com/openclaw/openclaw/issues/142283) [Bug]: Discord DM messages arrive with empty content in context, but bot still executes commands `bug` `bug:behavior` `P2` `clawsweeper:needs-info` 💬2
- [#141853](https://github.com/openclaw/openclaw/issues/141853) [Bug]: 2026.9.2 browser tool wedges for agent turns while the CLI path stays healthy — timeouts until gateway restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#142265](https://github.com/openclaw/openclaw/issues/142265) Share pinned sandbox filesystem operation encoding `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬2
- [#142200](https://github.com/openclaw/openclaw/issues/142200) Heartbeat lateness is used as an event-loop-health proxy, silently disabling stuck-session recovery on VMs `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142238](https://github.com/openclaw/openclaw/issues/142238) Share bounded session selection across CLI, status and Gateway `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬2
- [#142208](https://github.com/openclaw/openclaw/issues/142208) [Bug]: Node preflight failure hint recommends versions that do not satisfy the printed engine range `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142162](https://github.com/openclaw/openclaw/issues/142162) refactor(logging): share assignment detection between redaction outputs `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#141799](https://github.com/openclaw/openclaw/issues/141799) [Bug]: nested scope narrowing drops read authority implied by operator.write `maintainer` `P2` `clawsweeper:source-repro` `impact:security` 💬2
- [#141801](https://github.com/openclaw/openclaw/issues/141801) [Bug]: plugins install hot-reloads plugins.entries and restarts the live Telegram account mid-conversation `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#141795](https://github.com/openclaw/openclaw/issues/141795) [Bug]: /model <id> -s survives /new on the Telegram DM main session `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#142013](https://github.com/openclaw/openclaw/issues/142013) [Bug]: channel ingress drain re-claims the same message every ~40 ms while the gateway is draining (7,098 failures in three minutes) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142142](https://github.com/openclaw/openclaw/issues/142142) [Feature]: Add --offset and --limit pagination to automations list `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#141998](https://github.com/openclaw/openclaw/issues/141998) Telegram ingress drops later lines of multiline text-directive commands before the core boundary `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142116](https://github.com/openclaw/openclaw/issues/142116) restart recovery failure wedges telegram lane ingress: 300s claim→adoption stall, then update re-dispatched without reply payload `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#142107](https://github.com/openclaw/openclaw/issues/142107) [Bug]: Telegram DM topics share inbound buffers and cancellation `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#141976](https://github.com/openclaw/openclaw/issues/141976) [Bug]: v2026.9.2 智能体列表/设置中头像裂图 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#142002](https://github.com/openclaw/openclaw/issues/142002) [Bug]: Codex harness assistant replies do not mark Control UI sessions unread `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#141950](https://github.com/openclaw/openclaw/issues/141950) Maturity scorecard: reconcile post-May product and review drift `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#141907](https://github.com/openclaw/openclaw/issues/141907) Remove unreachable block-boundary logic from TUI streaming `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#141856](https://github.com/openclaw/openclaw/issues/141856) Reuse existing configuration writers in channel setup `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#141947](https://github.com/openclaw/openclaw/issues/141947) Archived sessions still offer a GitHub publication confirmation that the confirm action always rejects `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#141982](https://github.com/openclaw/openclaw/issues/141982) fix: retained catalog-worker mock breaks shared provider transport tests `maintainer` `P2` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬2
- [#141835](https://github.com/openclaw/openclaw/issues/141835) [Bug]: `openclaw message send` unusable on explicit multi-agent fleets — AgentSelectionRequiredError advises a `--agent` flag the command does not have `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#141842](https://github.com/openclaw/openclaw/issues/141842) Consolidate provider request secret-field ownership `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#141864](https://github.com/openclaw/openclaw/issues/141864) [Bug]: Windows Companion webchat clips assistant text at bubble edge instead of wrapping `P2` `impact:ux-friction` 💬2
- [#141807](https://github.com/openclaw/openclaw/issues/141807) [Bug]: sessions delete leaves the archived transcript in the memory index until memory forget `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#141753](https://github.com/openclaw/openclaw/issues/141753) config-audit.jsonl stops recording Aug 21; no live audit log resumes after the Sept 5 workspace migration `bug` `regression` `P2` `impact:ux-friction` 💬2
- [#141747](https://github.com/openclaw/openclaw/issues/141747) Runtime scaffolding (`<system-reminder>`) injects ~686 tokens/turn into model input with no opt-out `P2` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#142734](https://github.com/openclaw/openclaw/issues/142734) [Bug]: A LINE reply is pushed one request per part, so a card with its caption and image costs three monthly messages `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#142737](https://github.com/openclaw/openclaw/issues/142737) Gateway hangs and retains cron ticks when reservations make no progress `maintainer` 💬1
- [#142723](https://github.com/openclaw/openclaw/issues/142723) Feature: opt-in supervised TaskFlow with durable continuation and explicit endpoints `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:session-state` 💬1
- [#142341](https://github.com/openclaw/openclaw/issues/142341) Control UI startup reveals several mismatched loading layouts in succession `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142716](https://github.com/openclaw/openclaw/issues/142716) [Bug]: Chat Scroll to latest button disappears abruptly at the transcript end `bug` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#142715](https://github.com/openclaw/openclaw/issues/142715) Managed pnpm update leaves Gateway stopped after post-core handoff root mismatch `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬1
- [#142650](https://github.com/openclaw/openclaw/issues/142650) [Bug]: Chat composer attachment spacing is misaligned `bug` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#142615](https://github.com/openclaw/openclaw/issues/142615) [Bug]: GitHub chat links show a redundant URL tooltip after the rich preview closes `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#142596](https://github.com/openclaw/openclaw/issues/142596) Bug: Files reports video preview unavailable while metadata is still loading `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#142680](https://github.com/openclaw/openclaw/issues/142680) [Bug]: Task progress cards appear for trivial chat requests `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#142702](https://github.com/openclaw/openclaw/issues/142702) Managed update can leave Gateway stopped when pnpm handoff compares symlink paths `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬1
- [#142380](https://github.com/openclaw/openclaw/issues/142380) Codex: automations add rejects toolsAllow entries that use the catalog's openclaw__ namespace names `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#142704](https://github.com/openclaw/openclaw/issues/142704) Control UI: consolidate private route bridge restoration `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#142695](https://github.com/openclaw/openclaw/issues/142695) [Bug]: [Bug]: Direct Ollama provider ignores configured contextWindow, falls back to 200000 `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#142689](https://github.com/openclaw/openclaw/issues/142689) Changed core/UI checks repeat typed-lint startup for every eight files `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#142511](https://github.com/openclaw/openclaw/issues/142511) Import skill dialog stretches controls and exposes native file pickers `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142688](https://github.com/openclaw/openclaw/issues/142688) [Bug]: User avatar aligns with attachments instead of the text bubble `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#142514](https://github.com/openclaw/openclaw/issues/142514) [Bug]: ClawHub detail text overflows the dialog and separates related metadata `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142681](https://github.com/openclaw/openclaw/issues/142681) Update failure: doctor-failed (2026.9.2) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#142517](https://github.com/openclaw/openclaw/issues/142517) [Bug]: Agent file preview header crowds phone screens and loses identity in fullscreen `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#142676](https://github.com/openclaw/openclaw/issues/142676) Feature: Decouple typing indicator from room event suppression — show "is typing..." in public channels without enabling ambient reply flooding `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#142673](https://github.com/openclaw/openclaw/issues/142673) [Regression]: Root-only pin policy prevents pinning ordinary Home-parented sessions `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#142510](https://github.com/openclaw/openclaw/issues/142510) Skill reader headers stack Close and stretch short error content on mobile `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#142638](https://github.com/openclaw/openclaw/issues/142638) Bug: cron run timeout in `model-call-started` leaves `running_at_ms` set permanently — job wedged until gateway restart `P1` `impact:other` 💬1
- [#142663](https://github.com/openclaw/openclaw/issues/142663) [Bug]: Automations tool advertises `add` but runtime validator rejects action in 2026.9.2 `bug` `regression` `P1` `clawsweeper:needs-live-repro` 💬1
- [#142662](https://github.com/openclaw/openclaw/issues/142662) User file attachments render inside the text bubble `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#142655](https://github.com/openclaw/openclaw/issues/142655) [Bug]: Agent images garbled in dropdown `bug` `regression` `P2` `impact:ux-friction` 💬1
- [#142647](https://github.com/openclaw/openclaw/issues/142647) Markdown tables: bare cell delimiters pair across generated row-label markers in bullets mode `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#142653](https://github.com/openclaw/openclaw/issues/142653) memory-wiki bridge: false ENOENT for existing vault targets on WSL /mnt/c `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#142644](https://github.com/openclaw/openclaw/issues/142644) Control UI: allow drag-and-drop file attachments onto the chat composer `P3` `impact:ux-friction` 💬1
- [#141838](https://github.com/openclaw/openclaw/issues/141838) [Bug]: configured model fallback is skipped silently when a run ends on the agent deadline or the idle-timeout breaker `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#142633](https://github.com/openclaw/openclaw/issues/142633) [Bug]: 2026.9.3 candidate Gateway canary exits before readiness (Discord git-tree path install + isolated xAI OAuth) `clawsweeper:no-new-fix-pr` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#142597](https://github.com/openclaw/openclaw/issues/142597) [Bug]: Agent picker avatars remain blank on 2026.9.3 after #140954 `P2` `impact:ux-friction` 💬1
- [#142594](https://github.com/openclaw/openclaw/issues/142594) Centralize Apple Gateway error presentation overrides `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#142287](https://github.com/openclaw/openclaw/issues/142287) [Bug]: Control UI button links inherit text underlines `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#142617](https://github.com/openclaw/openclaw/issues/142617) [Feature]: Link-handling preference in macOS app — default to sidebar browser or system browser `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#142606](https://github.com/openclaw/openclaw/issues/142606) [Bug]: Dashboard HTML widget links (target="_blank") dead in native apps — host.open fails closed outside browser Control UI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#142603](https://github.com/openclaw/openclaw/issues/142603) [Bug]: iMessage typing and read receipts stay disabled after bridge recovery `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#142569](https://github.com/openclaw/openclaw/issues/142569) Avoid repeated preparation during Chat message rerenders `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142337](https://github.com/openclaw/openclaw/issues/142337) Development runner loads the checker compiler before AST work is needed `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142512](https://github.com/openclaw/openclaw/issues/142512) Consolidate Gateway restart snapshot finalization `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#142490](https://github.com/openclaw/openclaw/issues/142490) Avoid discarded display normalization during chat export `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142592](https://github.com/openclaw/openclaw/issues/142592) Feature: show video frame previews in composer attachments `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#142487](https://github.com/openclaw/openclaw/issues/142487) Avoid redundant collections during Swarm roster refresh `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#142593](https://github.com/openclaw/openclaw/issues/142593) fix: user video attachments appear as file cards inside chat bubbles `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#142588](https://github.com/openclaw/openclaw/issues/142588) Heartbeat silence is unenforced: a turn that omits HEARTBEAT_OK is delivered verbatim (26 of 27 scheduled runs posted narration) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#142582](https://github.com/openclaw/openclaw/issues/142582) [Regression]: 2026.9.3 Doctor still cannot persist agents.ownership for a legacy multi-agent roster `clawsweeper:source-repro` `P0` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬1
- [#142586](https://github.com/openclaw/openclaw/issues/142586) [Bug]: 2026.9.3 Doctor detects orphan task_delivery_state foreign keys but provides no supported recovery path `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#142585](https://github.com/openclaw/openclaw/issues/142585) [Regression]: 2026.9.3 Doctor refuses valid legacy workspace setup and attestation import when canonical rows are absent `impact:session-state` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#142584](https://github.com/openclaw/openclaw/issues/142584) [Bug]: Session SQLite migration rejects hard-linked artifacts without identifying aliases or providing safe recovery guidance `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#142583](https://github.com/openclaw/openclaw/issues/142583) [Bug]: 2026.9.3 Doctor reports Skill Workshop proposals as retargeted but immediately flags external targets again `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `maturity:stable` 💬1
- [#142477](https://github.com/openclaw/openclaw/issues/142477) Consolidate memory flush assertions at their existing owners `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#142580](https://github.com/openclaw/openclaw/issues/142580) [Regression]: 2026.9.3 upgrade can finish green while the main agent loses continuity `clawsweeper:needs-info` `impact:session-state` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#142501](https://github.com/openclaw/openclaw/issues/142501) [Bug]: Codex harness loses per-agent profiles when catalog collaboration guidance is present `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#142539](https://github.com/openclaw/openclaw/issues/142539) Retire redundant Matrix QA scenario forwarding layer `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#142565](https://github.com/openclaw/openclaw/issues/142565) Cron session not woken when descendants settle; cron-direct-delivery fallback delivers descendant text instead of cron's own reply `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#142575](https://github.com/openclaw/openclaw/issues/142575) ws: system-presence rejected "missing scope: operator.read" for PROBE-mode clients `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#142254](https://github.com/openclaw/openclaw/issues/142254) fix: Inbox delays opening while its panel loads `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142559](https://github.com/openclaw/openclaw/issues/142559) [Windows] Gateway logs 'http server listening' but never binds port (ECONNREFUSED) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬1
- [#142553](https://github.com/openclaw/openclaw/issues/142553) [Bug]: macOS approval panel stays open after the request is resolved by another client `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#142521](https://github.com/openclaw/openclaw/issues/142521) [Feature]: Support empty ephemeral and multi-repository cloud workspaces `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#142506](https://github.com/openclaw/openclaw/issues/142506) [Feature]: Shared mobile browser handoff for chat channels and native clients `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#142247](https://github.com/openclaw/openclaw/issues/142247) Plugin tool resolution rebuilds an already prepared manifest lookup `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142547](https://github.com/openclaw/openclaw/issues/142547) Security redaction incorrectly strips $(cat ...) from user scripts 💬1
- [#142392](https://github.com/openclaw/openclaw/issues/142392) Update schema preflight rejects continuously written large agent databases `maintainer` `clawsweeper:source-repro` `P0` `issue-rating: 🦞 diamond lobster` 💬1
- [#142216](https://github.com/openclaw/openclaw/issues/142216) [Bug]: Task progress is clipped below the view-only subagent notice `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#142531](https://github.com/openclaw/openclaw/issues/142531) [Feature]: Read-only Tailscale pairing preflight for externally managed Serve routes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#142528](https://github.com/openclaw/openclaw/issues/142528) [Feature]: Android TLS probe failures should offer connection recovery before manual SHA-256 entry `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#142529](https://github.com/openclaw/openclaw/issues/142529) [Bug]: Android resets the connection screen when Tailscale is unavailable `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#142526](https://github.com/openclaw/openclaw/issues/142526) [Bug]: Terminal mobile-pairing QR inside tmux is not recognized by Android `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#142443](https://github.com/openclaw/openclaw/issues/142443) Avoid redundant preparation while rendering chat code blocks `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142516](https://github.com/openclaw/openclaw/issues/142516) [Bug]: Android app posts no notification for gateway-injected assistant replies into its own node session (Wear companion does) `P2` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-friction` 💬1
- [#142493](https://github.com/openclaw/openclaw/issues/142493) Retire unreachable Matrix forced-reset repair retry `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#142449](https://github.com/openclaw/openclaw/issues/142449) Avoid an intermediate array when preparing model messages `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#142502](https://github.com/openclaw/openclaw/issues/142502) [Bug]: Codex dynamic tool bridge can stall before OpenClaw records tool.call `P1` `impact:session-state` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬1
- [#142492](https://github.com/openclaw/openclaw/issues/142492) Windows node approval replay rejects with possible prepared-plan sessionKey inconsistency `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#142468](https://github.com/openclaw/openclaw/issues/142468) Retire unused generic bootstrap discovery mode `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#142446](https://github.com/openclaw/openclaw/issues/142446) Reduce temporary allocation in Discord text formatting `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#142464](https://github.com/openclaw/openclaw/issues/142464) [Bug]: Astra interprets chat-routing restriction as prohibiting bundled gog Gmail sends `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#142412](https://github.com/openclaw/openclaw/issues/142412) Web response reading duplicates the shared bounded byte loop `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#142403](https://github.com/openclaw/openclaw/issues/142403) Telegram drafts prepare page prefixes without an HTML source `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142459](https://github.com/openclaw/openclaw/issues/142459) [Bug]: 2026.9.3 claude-cli agent backend produces no output — every run killed at the 480s watchdog (regression since 2026.9.2; CLI/env/argv proven fine by hand) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#142454](https://github.com/openclaw/openclaw/issues/142454) Retire unused private follow-up queue prompt deduplication `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#142390](https://github.com/openclaw/openclaw/issues/142390) History image pruning allocates unused scratch and content arrays `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142421](https://github.com/openclaw/openclaw/issues/142421) [Bug]: models auth logout leaves plaintext credentials in plugin-model-catalog cache; doctor --fix resurrects them `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#142386](https://github.com/openclaw/openclaw/issues/142386) Forwarded avatar selection materializes history beyond its existing limit `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142430](https://github.com/openclaw/openclaw/issues/142430) [Feature]: Add an editable per-agent thinking default in Agents Overview `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#142445](https://github.com/openclaw/openclaw/issues/142445) Subagent completion is discarded when 'requester settle wake deferred too many times' (2026.9.2 and 2026.9.3) `P1` `impact:session-state` `impact:message-loss` 💬1
- [#142439](https://github.com/openclaw/openclaw/issues/142439) [Bug]: Codex rejects fresh channel-owner automation authority in 2026.9.3 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#142207](https://github.com/openclaw/openclaw/issues/142207) Improve chat message navigation with a compact left rail `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#142435](https://github.com/openclaw/openclaw/issues/142435) Telegram ingress claim survives a restart when the container reuses the gateway PID `P1` `impact:message-loss` 💬1
- [#142397](https://github.com/openclaw/openclaw/issues/142397) Group repeated Nodes tool dispatch cases `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#142373](https://github.com/openclaw/openclaw/issues/142373) Plugin command matching rebuilds temporary alias membership collections `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142209](https://github.com/openclaw/openclaw/issues/142209) [Bug]: Control UI chat shows a preview card for about:blank `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142414](https://github.com/openclaw/openclaw/issues/142414) [Bug]: Local memory search reinitializes the same provider across registrations `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#142399](https://github.com/openclaw/openclaw/issues/142399) [Bug]: iMessage phone senders miss e164 tool policies `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#142212](https://github.com/openclaw/openclaw/issues/142212) fix: person mention search reloads complete results while typing `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#142394](https://github.com/openclaw/openclaw/issues/142394) [Bug] update.run to v2026.9.3 → EPIPE during shutdown, no auto-restart (managed-service-handoff-restore-failed) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-info` `impact:crash-loop` `P0` 💬1
- [#142222](https://github.com/openclaw/openclaw/issues/142222) [Bug]: chat attachment cards have uneven spacing beside message text `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142204](https://github.com/openclaw/openclaw/issues/142204) Remove duplicate key tracking from buffered block replies `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#142389](https://github.com/openclaw/openclaw/issues/142389) [Bug]: Dream diary narrative generation times out at a hardcoded 60s and writes fallback stub entries every night `bug` `bug:behavior` `P2` `impact:other` 💬1
- [#142211](https://github.com/openclaw/openclaw/issues/142211) Improve chat mention picker presence and avatar presentation `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#142370](https://github.com/openclaw/openclaw/issues/142370) Update failure: database-schema-preflight (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#142377](https://github.com/openclaw/openclaw/issues/142377) [Bug]: ChatGPT OAuth omits strict=false and makes optional tool parameters required `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#142362](https://github.com/openclaw/openclaw/issues/142362) Consolidate Android durable chat send dispatch `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#142351](https://github.com/openclaw/openclaw/issues/142351) Consolidate repeated plugin registration provenance types `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#142330](https://github.com/openclaw/openclaw/issues/142330) [Bug]: first-run recovery tests fail before asynchronous startup settles `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#142358](https://github.com/openclaw/openclaw/issues/142358) [Bug]: Deprecated browser.ssrfPolicy.hostnameAllowlist is written back to openclaw.json and then rejected by config validation `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#142356](https://github.com/openclaw/openclaw/issues/142356) [Bug]: LINE treats an unreadable credential file as configured, and offers the model a message tool that cannot send `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#142343](https://github.com/openclaw/openclaw/issues/142343) Models settings picker retains removed catalog APIs after owner migration `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#142244](https://github.com/openclaw/openclaw/issues/142244) Plugin-state live-row counts: extend the existing listing index `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#142340](https://github.com/openclaw/openclaw/issues/142340) Telegram: bundled Mini App /dashboard always rejected as conflicting; with commands.native=false the command becomes unreachable `P1` `impact:ux-friction` 💬1
- [#142333](https://github.com/openclaw/openclaw/issues/142333) [Bug]: bundle-mcp agent startup rejects valid OAuth token while mcp probe succeeds with the same credentials `bug` `bug:behavior` `P1` `impact:auth-provider` 💬1
- [#142331](https://github.com/openclaw/openclaw/issues/142331) Update failure: database-schema-preflight (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#142323](https://github.com/openclaw/openclaw/issues/142323) `allowTailscale` forces a multi-user GitHub-bound identity model onto a single-user self-hosted instance — severe, undocumented availability degradation `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬1
- [#142308](https://github.com/openclaw/openclaw/issues/142308) HTTP prompt preparation repeats normalized history array copies `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142317](https://github.com/openclaw/openclaw/issues/142317) [Bug]: backup create --dry-run exits 0 while the real run exits 1 (absolute symlinks rejected, no exclude option) `P2` `impact:other` 💬1
- [#142319](https://github.com/openclaw/openclaw/issues/142319) [Bug]: Model fallback/retry never engages for provider content-class failures (malformed tool JSON) — session wedges until /new `P1` `clawsweeper:source-repro` `impact:session-state` `impact:auth-provider` 💬1
- [#142320](https://github.com/openclaw/openclaw/issues/142320) [Bug]: Spurious '⚠️ Something went wrong' banner sent to Telegram DM after successful sessions_yield acknowledgment (SessionTranscriptProjectionUnavailableError) `P2` `impact:session-state` `impact:ux-friction` 💬1
- [#142312](https://github.com/openclaw/openclaw/issues/142312) claude-cli backend: assistant turn delivered twice when reply narrates before a tool call `P1` `impact:session-state` `impact:message-loss` 💬1
- [#142304](https://github.com/openclaw/openclaw/issues/142304) Tool call validation: tolerate nested arguments wrapper `enhancement` `P2` `impact:session-state` 💬1
- [#142257](https://github.com/openclaw/openclaw/issues/142257) Chat picker mouse cycles accumulate unused focus listeners `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142223](https://github.com/openclaw/openclaw/issues/142223) [Bug]: Control UI menu items use inconsistent hover colors across themes `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142251](https://github.com/openclaw/openclaw/issues/142251) Command transport projection repeats prepared rich-content normalization `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#142219](https://github.com/openclaw/openclaw/issues/142219) Avoid unused code-region scans during reply directive parsing `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142206](https://github.com/openclaw/openclaw/issues/142206) [Bug]: Online sidebar person names are underlined `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#141972](https://github.com/openclaw/openclaw/issues/141972) `mcp.servers.*.env` (and `.headers`) should accept SecretRef like the rest of the config `P2` `impact:security` `impact:auth-provider` 💬1
- [#142271](https://github.com/openclaw/openclaw/issues/142271) [Bug]: cron agentTurn on a CLI-backend model cannot exec when the secret egress proxy is active `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#142180](https://github.com/openclaw/openclaw/issues/142180) Automation scheduler warning omits the Gateway environment disable setting `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142164](https://github.com/openclaw/openclaw/issues/142164) status --all reports Gateway self as unknown when metadata is available `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#142256](https://github.com/openclaw/openclaw/issues/142256) `openclaw health` reports a channel healthy while the gateway has given up reconnecting it `P2` `impact:message-loss` 💬1
- [#142266](https://github.com/openclaw/openclaw/issues/142266) Finalizer generates forced fallback text even after explicit NO_REPLY (silent completion) 💬1
- [#142233](https://github.com/openclaw/openclaw/issues/142233) Sticker-selection CI omits its provider runtime prerequisite `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142241](https://github.com/openclaw/openclaw/issues/142241) [Bug]: gateway install rejects Home Manager-managed symlinked systemd drop-ins `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#142106](https://github.com/openclaw/openclaw/issues/142106) [Bug]: Skills discovery is stale on the first read after watcher acquisition `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#142226](https://github.com/openclaw/openclaw/issues/142226) [Bug]: session groups from other agents appear in the Control UI sidebar `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#142224](https://github.com/openclaw/openclaw/issues/142224) [Bug]: interrupted requester wakes re-admit keyed users after tool work `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#142110](https://github.com/openclaw/openclaw/issues/142110) [Bug]: cron machine-mode failures are framed as "Could not start the CLI" with Doctor and debug hints `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#142189](https://github.com/openclaw/openclaw/issues/142189) [Bug]: Parallel-task card implies the parent turn is complete while it is still running `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#142188](https://github.com/openclaw/openclaw/issues/142188) Auto-TTS is skipped entirely when a reply carries an attachment, so the answer arrives silent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#142181](https://github.com/openclaw/openclaw/issues/142181) Gateway event-loop deadlock via synchronous fs.open in WhatsApp/libsignal session path (8.1); service-env NODE_OPTIONS dropped for worker `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬1
- [#142111](https://github.com/openclaw/openclaw/issues/142111) [Bug]: --url without --token/--password is framed as a CLI startup crash instead of the producer remedy `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#142059](https://github.com/openclaw/openclaw/issues/142059) Bug: cron conditions fail to execute commands when secret egress proxy is enabled `P1` `clawsweeper:source-repro` `impact:security` `issue-rating: 🦞 diamond lobster` 💬1
- [#142175](https://github.com/openclaw/openclaw/issues/142175) [Feature]: Make "Opens as dashboard" opt-in per session (pinned board should not force dashboard view) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#142069](https://github.com/openclaw/openclaw/issues/142069) [Bug]: OSC 9;4 progress includes unsupported label field `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#142086](https://github.com/openclaw/openclaw/issues/142086) [Bug]: attach spawns Claude Code but local MCP bridge (127.0.0.1:<port>) never starts — ConnectionRefused, zero scoped tools `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#142146](https://github.com/openclaw/openclaw/issues/142146) [Bug]: 2026.9.2 bootstrap publication fails closed on filesystems without hard links, so every fresh workspace on a FUSE/network volume dies on turn one `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#142144](https://github.com/openclaw/openclaw/issues/142144) [Bug]: channels.line.streaming is rejected, so LINE cannot use the shared block streaming controls `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#142141](https://github.com/openclaw/openclaw/issues/142141) feat: add an autopilot viral clipper Agent Plugin bundle `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#142139](https://github.com/openclaw/openclaw/issues/142139) [Bug]: Codex runtime shows 18–26s inter-tool gaps and 300s pre-output stalls on 2026.9.2; switching runtime/model resolves it immediately `P1` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#142062](https://github.com/openclaw/openclaw/issues/142062) Automations UI ignores saved display names `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#142090](https://github.com/openclaw/openclaw/issues/142090) [Bug]: LINE replies never quote the message they answer, and channels.line.replyToMode is rejected `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#142080](https://github.com/openclaw/openclaw/issues/142080) [Bug]: Talk treats queued consult as empty completion and loses adopted-run reply `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#142014](https://github.com/openclaw/openclaw/issues/142014) Agent file preview tooltip keeps saying Expand after expansion `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#141988](https://github.com/openclaw/openclaw/issues/141988) [Bug]: partial vi.mock in prepared-model-catalog-worker.test.ts leaks into provider-transport-fetch.integration.test.ts in the non-isolated agents-core shard 💬1
- [#141996](https://github.com/openclaw/openclaw/issues/141996) Source CLI silently misses bundled skill edits with Unicode filenames `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#142012](https://github.com/openclaw/openclaw/issues/142012) [Feature]: expose the Discord ingress adoption stall timeout (5-minute default drops messages queued behind long turns) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#141981](https://github.com/openclaw/openclaw/issues/141981) [Bug]: Desktop Keyboard sends paste shortcut instead of clipboard text `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#142011](https://github.com/openclaw/openclaw/issues/142011) [Bug]: tools.deny ["secrets"] silently disables native Codex delegation (spawn_agent) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#142010](https://github.com/openclaw/openclaw/issues/142010) [Bug]: Codex runtime: secrets-store guidance makes the agent refuse the workspace's own credential files `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#142003](https://github.com/openclaw/openclaw/issues/142003) [Bug]: GitHub OAuth identity blocks exec despite credentialState=available `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#141983](https://github.com/openclaw/openclaw/issues/141983) System agent / `openclaw` tool permanently blocked on ambient AWS credentials: no execution-owner fingerprint for EKS Pod Identity / IRSA / instance roles `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#141914](https://github.com/openclaw/openclaw/issues/141914) Usage cost text omits incomplete cache state `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#141973](https://github.com/openclaw/openclaw/issues/141973) `tools.exec.notifyOnExit`: add a failure-only / user-requested-only mode, and stop relaying SIGTERM-at-drain exits to the owner `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#141975](https://github.com/openclaw/openclaw/issues/141975) Skill Workshop CLI (apply/reject/quarantine) bypasses approvalPolicy human-approval gate enforced on the MCP tool `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#141971](https://github.com/openclaw/openclaw/issues/141971) Skill collection review has no per-skill protection marker: autonomous rewrites cannot be opted out of for individual safety-bearing skills `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#141970](https://github.com/openclaw/openclaw/issues/141970) Skill Workshop: proposals that change a skill's `description` can never be applied (draft keeps the live description, breaking the candidate SHA contract) `impact:data-loss` `P0` 💬1
- [#141969](https://github.com/openclaw/openclaw/issues/141969) [Bug]: mid-turn overflow recovery and silent exec completion cause full-context LLM reruns `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#141956](https://github.com/openclaw/openclaw/issues/141956) [Feature]: Limit documentation search results from the CLI `P3` 💬1
- [#141959](https://github.com/openclaw/openclaw/issues/141959) [Bug]: Telegram direct replies can be lost after long 429 flood-wait; gateway restart leaves delivery unreplayed on 2026.9.1 `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#141952](https://github.com/openclaw/openclaw/issues/141952) [Feature]: Show native source timestamps in Fleet logs `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#141940](https://github.com/openclaw/openclaw/issues/141940) WebChat sessionTarget:current automation attempts spurious external Google Chat delivery, generating false delivery-failed alerts `P2` `impact:message-loss` 💬1
- [#141933](https://github.com/openclaw/openclaw/issues/141933) Memory full reindex loops forever on "Memory source changed while indexing" and stalls the cron scheduler `impact:message-loss` `impact:crash-loop` `P0` `impact:ux-release-blocker` 💬1
- [#141923](https://github.com/openclaw/openclaw/issues/141923) [Bug]: backup create fails permanently when the state directory contains any absolute symlink an asset doesn't own `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#141912](https://github.com/openclaw/openclaw/issues/141912) Failed openclaw update leaves orphaned activeRun stuck at 'requested' phase forever `P2` `maturity:stable` `impact:ux-friction` 💬1
- [#141897](https://github.com/openclaw/openclaw/issues/141897) [Bug]: forced reply cleanup can report delivery settled before it finishes `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#141898](https://github.com/openclaw/openclaw/issues/141898) [Bug]: requester settlement can acknowledge only part of a required child batch `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#141850](https://github.com/openclaw/openclaw/issues/141850) [Bug] npm update restart handoff crashes with ENOENT (swapped dist chunk), leaving Gateway stopped, LaunchAgent disabled, and a stale running update_runs row `impact:crash-loop` `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#141837](https://github.com/openclaw/openclaw/issues/141837) message tool: bare Discord channel ID is ambiguous — requires channel: prefix but error is only shown after the call 💬1
- [#141826](https://github.com/openclaw/openclaw/issues/141826) [Bug]: Task briefs lost in agent-to-agent handoff; no verification or notification when a scheduled task never starts `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#141817](https://github.com/openclaw/openclaw/issues/141817) [Bug]: Telegram polling reports connected/works but stops consuming inbound updates on two independent hosts simultaneously (2026.9.2) `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#141821](https://github.com/openclaw/openclaw/issues/141821) Matrix plugin renders markdown tables as raw text instead of HTML <table> `P2` `impact:ux-friction` 💬1
- [#141820](https://github.com/openclaw/openclaw/issues/141820) [Regression] 2026.8.2: GPT-5.6 Sol via native Codex is materially slower than the same model via OpenRouter `P2` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#141802](https://github.com/openclaw/openclaw/issues/141802) Matrix reaction listings show blank labels in the CLI `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#141729](https://github.com/openclaw/openclaw/issues/141729) Unify Profile identity-save lifecycle ownership `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#141812](https://github.com/openclaw/openclaw/issues/141812) [Bug]: channels add and the llama.cpp setup write plaintext secrets into openclaw.json that doctor then flags every heartbeat `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#141806](https://github.com/openclaw/openclaw/issues/141806) Unselected memory-core shadows custom memory plugins recall tools `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#141809](https://github.com/openclaw/openclaw/issues/141809) [Bug]: Control UI OpenAI sign-in auto-enables the Codex plugin without installing its managed runtime; observer logs "Managed Codex app-server binary was not found" `bug` `bug:behavior` `P2` `clawsweeper:needs-live-repro` 💬1
- [#141793](https://github.com/openclaw/openclaw/issues/141793) [Feature]: Non-interactive path for the managed llama.cpp embedding-only setup `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#141791](https://github.com/openclaw/openclaw/issues/141791) [Bug]: empty legacy auth_profile_store blocks every request, but dropping the table stops the gateway from starting (no valid state exists) `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#141765](https://github.com/openclaw/openclaw/issues/141765) [Feature]: Find people through your agent `P3` 💬1
- [#141748](https://github.com/openclaw/openclaw/issues/141748) Usage Sessions card reports matching rows as shown `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#141745](https://github.com/openclaw/openclaw/issues/141745) [Feature]: Query and page automation run history from the CLI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#141743](https://github.com/openclaw/openclaw/issues/141743) Default Ollama path: repeated unknown-tool calls run unbounded; loop detection is off by default and a block resets the two-strike counter `maintainer` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#141734](https://github.com/openclaw/openclaw/issues/141734) Share the local-onboarding decision between CLI entry points `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#141732](https://github.com/openclaw/openclaw/issues/141732) Share Slack reply segment projection while preserving delivery order `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1

#### 🔒 Closed Issues
- [#137813](https://github.com/openclaw/openclaw/issues/137813) [Bug]: Windows gateway never starts after 2026.9.1 update — new `--task-supervisor` flag exits 0 silently; child never spawns
- [#87109](https://github.com/openclaw/openclaw/issues/87109) [Bug]: Gateway heap grows to 1073MB+ at idle on macOS, cron jobs fail silently under memory pressure (ref #86613, #86509)
- [#86174](https://github.com/openclaw/openclaw/issues/86174) [Bug]: WebChat + New Session displays default model but inherits parent's model override
- [#142530](https://github.com/openclaw/openclaw/issues/142530) Telegram: animated/video stickers (.tgs/.webm) arrive as empty message bodies with no placeholder
- [#141694](https://github.com/openclaw/openclaw/issues/141694) [Bug]: Silent-fallback reply hardcodes "I couldn't reach the configured model backend" regardless of failure reason, naming a provider that returned HTTP 200 to every request
- [#10944](https://github.com/openclaw/openclaw/issues/10944) Feature Request: Add parseMode config for Telegram channels
- [#140879](https://github.com/openclaw/openclaw/issues/140879) Control UI agent picker: workspace-relative avatars 401 on 2026.9.2 — agents.list hands <img> an authenticated /avatar/<id> path
- [#124906](https://github.com/openclaw/openclaw/issues/124906) Support noninteractive MCP OAuth credential import
- [#125360](https://github.com/openclaw/openclaw/issues/125360) [Bug]: Codex Computer Use polls plugin/list for 60s when native plugins are disabled
- [#141813](https://github.com/openclaw/openclaw/issues/141813) [Bug]: Models page picker opens with only the configured models; the discovered catalog fills in only after an interaction, with no loading state
- [#141616](https://github.com/openclaw/openclaw/issues/141616) [Bug]: Known Responses DNS failures show a generic network connection error
- [#140052](https://github.com/openclaw/openclaw/issues/140052) Visible-answer retry overrides heartbeat NO_REPLY — unsolicited channel message delivered
- [#141564](https://github.com/openclaw/openclaw/issues/141564) [Bug]: Browser panel stays stale after screencast socket disconnects
- [#141816](https://github.com/openclaw/openclaw/issues/141816) [Bug]: latest Windows hub install gateway failed，because of wrong node version
- [#124919](https://github.com/openclaw/openclaw/issues/124919) [Feature]: Expose existing Discord permission-overwrite operations through the message action contract
- [#141739](https://github.com/openclaw/openclaw/issues/141739) [Bug]: memory-core managed 'Memory Dreaming Promotion' cron ignores plugins.entries.memory-core.config.dreaming.frequency — always re-declares default `0 3 * * *`
- [#142598](https://github.com/openclaw/openclaw/issues/142598) Docs deployment speed: shipped PRs, before/after measurements, and freshness follow-up
- [#126455](https://github.com/openclaw/openclaw/issues/126455) [Bug]: Deleted subagents leave a phantom sidebar child count
- [#135909](https://github.com/openclaw/openclaw/issues/135909) [Bug]: 8 tests in `chat.directive-tags.test.ts` leave an agent run's background delivery un-awaited, leaking an assistant transcript update into whichever test runs next
- [#137959](https://github.com/openclaw/openclaw/issues/137959) AGENTS.md policy digest drops the line that frames a quoted example, turning documentation into a live directive
- [#142462](https://github.com/openclaw/openclaw/issues/142462) [Feature]: Teammate mode — persistent worker computer and named Bots
- [#138721](https://github.com/openclaw/openclaw/issues/138721) [Feature]: Durable Reef plugin workflows with broker-backed guards
- [#141839](https://github.com/openclaw/openclaw/issues/141839) [Bug]: a turn killed by the run deadline leaves no assistant record in the session transcript
- [#142325](https://github.com/openclaw/openclaw/issues/142325) UI event-log fixture tears down globals before queued imports settle
- [#111407](https://github.com/openclaw/openclaw/issues/111407) CLI deadline re-runs an already-accepted prompt on a gateway-fallback session (duplicate-write hazard)
- [#142265](https://github.com/openclaw/openclaw/issues/142265) Share pinned sandbox filesystem operation encoding
- [#142238](https://github.com/openclaw/openclaw/issues/142238) Share bounded session selection across CLI, status and Gateway
- [#142162](https://github.com/openclaw/openclaw/issues/142162) refactor(logging): share assignment detection between redaction outputs
- [#141801](https://github.com/openclaw/openclaw/issues/141801) [Bug]: plugins install hot-reloads plugins.entries and restarts the live Telegram account mid-conversation
- [#141998](https://github.com/openclaw/openclaw/issues/141998) Telegram ingress drops later lines of multiline text-directive commands before the core boundary
- [#141976](https://github.com/openclaw/openclaw/issues/141976) [Bug]: v2026.9.2 智能体列表/设置中头像裂图
- [#134079](https://github.com/openclaw/openclaw/issues/134079) [Bug]: Missing vLLM option in interactive Model/auth provider menu during setup
- [#141907](https://github.com/openclaw/openclaw/issues/141907) Remove unreachable block-boundary logic from TUI streaming
- [#141856](https://github.com/openclaw/openclaw/issues/141856) Reuse existing configuration writers in channel setup
- [#141982](https://github.com/openclaw/openclaw/issues/141982) fix: retained catalog-worker mock breaks shared provider transport tests
- [#141835](https://github.com/openclaw/openclaw/issues/141835) [Bug]: `openclaw message send` unusable on explicit multi-agent fleets — AgentSelectionRequiredError advises a `--agent` flag the command does not have
- [#141842](https://github.com/openclaw/openclaw/issues/141842) Consolidate provider request secret-field ownership
- [#141864](https://github.com/openclaw/openclaw/issues/141864) [Bug]: Windows Companion webchat clips assistant text at bubble edge instead of wrapping
- [#130432](https://github.com/openclaw/openclaw/issues/130432) Google Chat: outbound space name is used verbatim, so a lowercased space id yields 403 PERMISSION_DENIED and the message is silently lost
- [#126733](https://github.com/openclaw/openclaw/issues/126733) [Bug]: Realtime Talk steering fails its own active run with tool_authority_mismatch
- [#141753](https://github.com/openclaw/openclaw/issues/141753) config-audit.jsonl stops recording Aug 21; no live audit log resumes after the Sept 5 workspace migration
- [#141709](https://github.com/openclaw/openclaw/issues/141709) Consolidate web_fetch HTML tag scanning without changing extraction
- [#138676](https://github.com/openclaw/openclaw/issues/138676) fix: agent deletion cannot purge its fenced session database
- [#123318](https://github.com/openclaw/openclaw/issues/123318) [Bug]: git updater: recreated upstream tags make `git fetch --tags` fail forever while `openclaw status` reports "up to date" from stale refs
- [#142650](https://github.com/openclaw/openclaw/issues/142650) [Bug]: Chat composer attachment spacing is misaligned
- [#142615](https://github.com/openclaw/openclaw/issues/142615) [Bug]: GitHub chat links show a redundant URL tooltip after the rich preview closes
- [#142596](https://github.com/openclaw/openclaw/issues/142596) Bug: Files reports video preview unavailable while metadata is still loading
- [#142680](https://github.com/openclaw/openclaw/issues/142680) [Bug]: Task progress cards appear for trivial chat requests
- [#142702](https://github.com/openclaw/openclaw/issues/142702) Managed update can leave Gateway stopped when pnpm handoff compares symlink paths
- [#142380](https://github.com/openclaw/openclaw/issues/142380) Codex: automations add rejects toolsAllow entries that use the catalog's openclaw__ namespace names
- [#142689](https://github.com/openclaw/openclaw/issues/142689) Changed core/UI checks repeat typed-lint startup for every eight files
- [#142511](https://github.com/openclaw/openclaw/issues/142511) Import skill dialog stretches controls and exposes native file pickers
- [#142514](https://github.com/openclaw/openclaw/issues/142514) [Bug]: ClawHub detail text overflows the dialog and separates related metadata
- [#141264](https://github.com/openclaw/openclaw/issues/141264) Chat Completions reports stop when a partial answer hits its output budget
- [#142517](https://github.com/openclaw/openclaw/issues/142517) [Bug]: Agent file preview header crowds phone screens and loses identity in fullscreen
- [#142510](https://github.com/openclaw/openclaw/issues/142510) Skill reader headers stack Close and stretch short error content on mobile
- [#142638](https://github.com/openclaw/openclaw/issues/142638) Bug: cron run timeout in `model-call-started` leaves `running_at_ms` set permanently — job wedged until gateway restart
- [#142655](https://github.com/openclaw/openclaw/issues/142655) [Bug]: Agent images garbled in dropdown
- [#142644](https://github.com/openclaw/openclaw/issues/142644) Control UI: allow drag-and-drop file attachments onto the chat composer
- [#136544](https://github.com/openclaw/openclaw/issues/136544) [Bug]: Devices page labels Apple Silicon app as MacIntel
- [#141838](https://github.com/openclaw/openclaw/issues/141838) [Bug]: configured model fallback is skipped silently when a run ends on the agent deadline or the idle-timeout breaker
- [#142597](https://github.com/openclaw/openclaw/issues/142597) [Bug]: Agent picker avatars remain blank on 2026.9.3 after #140954
- [#142594](https://github.com/openclaw/openclaw/issues/142594) Centralize Apple Gateway error presentation overrides
- [#142287](https://github.com/openclaw/openclaw/issues/142287) [Bug]: Control UI button links inherit text underlines
- [#130456](https://github.com/openclaw/openclaw/issues/130456) [Bug]: CLI history drops Claude session metadata when native rows deduplicate
- [#142569](https://github.com/openclaw/openclaw/issues/142569) Avoid repeated preparation during Chat message rerenders
- [#142337](https://github.com/openclaw/openclaw/issues/142337) Development runner loads the checker compiler before AST work is needed
- [#142512](https://github.com/openclaw/openclaw/issues/142512) Consolidate Gateway restart snapshot finalization
- [#142490](https://github.com/openclaw/openclaw/issues/142490) Avoid discarded display normalization during chat export
- [#142487](https://github.com/openclaw/openclaw/issues/142487) Avoid redundant collections during Swarm roster refresh
- [#138301](https://github.com/openclaw/openclaw/issues/138301) [Bug]: loaded chat images return to skeleton after virtual remount
- [#142477](https://github.com/openclaw/openclaw/issues/142477) Consolidate memory flush assertions at their existing owners
- [#142539](https://github.com/openclaw/openclaw/issues/142539) Retire redundant Matrix QA scenario forwarding layer
- [#142254](https://github.com/openclaw/openclaw/issues/142254) fix: Inbox delays opening while its panel loads
- [#142247](https://github.com/openclaw/openclaw/issues/142247) Plugin tool resolution rebuilds an already prepared manifest lookup
- [#142547](https://github.com/openclaw/openclaw/issues/142547) Security redaction incorrectly strips $(cat ...) from user scripts
- [#142392](https://github.com/openclaw/openclaw/issues/142392) Update schema preflight rejects continuously written large agent databases
- [#142216](https://github.com/openclaw/openclaw/issues/142216) [Bug]: Task progress is clipped below the view-only subagent notice
- [#142443](https://github.com/openclaw/openclaw/issues/142443) Avoid redundant preparation while rendering chat code blocks
- [#142493](https://github.com/openclaw/openclaw/issues/142493) Retire unreachable Matrix forced-reset repair retry
- [#142449](https://github.com/openclaw/openclaw/issues/142449) Avoid an intermediate array when preparing model messages
- [#137805](https://github.com/openclaw/openclaw/issues/137805) memory-lancedb: recall never observes rows written by another process until the gateway restarts
- [#141088](https://github.com/openclaw/openclaw/issues/141088) [Bug]: /models exposes claude-cli provider despite modelPolicy.allow[] excluding it (CLI runtime providers bypass visibility policy)
- [#140706](https://github.com/openclaw/openclaw/issues/140706) [Feature]: Generic read-only config mode for externally managed installs
- [#142468](https://github.com/openclaw/openclaw/issues/142468) Retire unused generic bootstrap discovery mode
- [#142446](https://github.com/openclaw/openclaw/issues/142446) Reduce temporary allocation in Discord text formatting
- [#128928](https://github.com/openclaw/openclaw/issues/128928) [Bug]: systemd service audit flags deliberately masked units with false repair recommendations
- [#142412](https://github.com/openclaw/openclaw/issues/142412) Web response reading duplicates the shared bounded byte loop
- [#142403](https://github.com/openclaw/openclaw/issues/142403) Telegram drafts prepare page prefixes without an HTML source
- [#142454](https://github.com/openclaw/openclaw/issues/142454) Retire unused private follow-up queue prompt deduplication
- [#142390](https://github.com/openclaw/openclaw/issues/142390) History image pruning allocates unused scratch and content arrays
- [#138176](https://github.com/openclaw/openclaw/issues/138176) Doctor: retire unused internal runnable health-check dialect
- [#142386](https://github.com/openclaw/openclaw/issues/142386) Forwarded avatar selection materializes history beyond its existing limit
- [#142445](https://github.com/openclaw/openclaw/issues/142445) Subagent completion is discarded when 'requester settle wake deferred too many times' (2026.9.2 and 2026.9.3)
- [#142207](https://github.com/openclaw/openclaw/issues/142207) Improve chat message navigation with a compact left rail
- [#142435](https://github.com/openclaw/openclaw/issues/142435) Telegram ingress claim survives a restart when the container reuses the gateway PID
- [#142397](https://github.com/openclaw/openclaw/issues/142397) Group repeated Nodes tool dispatch cases
- [#142373](https://github.com/openclaw/openclaw/issues/142373) Plugin command matching rebuilds temporary alias membership collections
- [#142209](https://github.com/openclaw/openclaw/issues/142209) [Bug]: Control UI chat shows a preview card for about:blank
- [#137665](https://github.com/openclaw/openclaw/issues/137665) [Bug]: gateway.trustedProxies never matches IPv4-mapped IPv6 CIDR ranges (::ffff:a.b.c.d/N), so proxied requests get 403 proxy_attribution_required
- [#142212](https://github.com/openclaw/openclaw/issues/142212) fix: person mention search reloads complete results while typing
- [#142222](https://github.com/openclaw/openclaw/issues/142222) [Bug]: chat attachment cards have uneven spacing beside message text
- [#142204](https://github.com/openclaw/openclaw/issues/142204) Remove duplicate key tracking from buffered block replies
- [#142389](https://github.com/openclaw/openclaw/issues/142389) [Bug]: Dream diary narrative generation times out at a hardcoded 60s and writes fallback stub entries every night
- [#142211](https://github.com/openclaw/openclaw/issues/142211) Improve chat mention picker presence and avatar presentation
- [#142362](https://github.com/openclaw/openclaw/issues/142362) Consolidate Android durable chat send dispatch
- [#142351](https://github.com/openclaw/openclaw/issues/142351) Consolidate repeated plugin registration provenance types
- [#142330](https://github.com/openclaw/openclaw/issues/142330) [Bug]: first-run recovery tests fail before asynchronous startup settles
- [#142244](https://github.com/openclaw/openclaw/issues/142244) Plugin-state live-row counts: extend the existing listing index
- [#142340](https://github.com/openclaw/openclaw/issues/142340) Telegram: bundled Mini App /dashboard always rejected as conflicting; with commands.native=false the command becomes unreachable
- [#142308](https://github.com/openclaw/openclaw/issues/142308) HTTP prompt preparation repeats normalized history array copies
- [#142317](https://github.com/openclaw/openclaw/issues/142317) [Bug]: backup create --dry-run exits 0 while the real run exits 1 (absolute symlinks rejected, no exclude option)
- [#142320](https://github.com/openclaw/openclaw/issues/142320) [Bug]: Spurious '⚠️ Something went wrong' banner sent to Telegram DM after successful sessions_yield acknowledgment (SessionTranscriptProjectionUnavailableError)
- [#142312](https://github.com/openclaw/openclaw/issues/142312) claude-cli backend: assistant turn delivered twice when reply narrates before a tool call
- [#142304](https://github.com/openclaw/openclaw/issues/142304) Tool call validation: tolerate nested arguments wrapper
- [#142257](https://github.com/openclaw/openclaw/issues/142257) Chat picker mouse cycles accumulate unused focus listeners
- [#142223](https://github.com/openclaw/openclaw/issues/142223) [Bug]: Control UI menu items use inconsistent hover colors across themes
- [#142251](https://github.com/openclaw/openclaw/issues/142251) Command transport projection repeats prepared rich-content normalization
- [#142219](https://github.com/openclaw/openclaw/issues/142219) Avoid unused code-region scans during reply directive parsing
- [#142206](https://github.com/openclaw/openclaw/issues/142206) [Bug]: Online sidebar person names are underlined
- [#142180](https://github.com/openclaw/openclaw/issues/142180) Automation scheduler warning omits the Gateway environment disable setting
- [#142164](https://github.com/openclaw/openclaw/issues/142164) status --all reports Gateway self as unknown when metadata is available
- [#141435](https://github.com/openclaw/openclaw/issues/141435) TUI footer keeps the previous model after an accepted fallback event
- [#142256](https://github.com/openclaw/openclaw/issues/142256) `openclaw health` reports a channel healthy while the gateway has given up reconnecting it
- [#142266](https://github.com/openclaw/openclaw/issues/142266) Finalizer generates forced fallback text even after explicit NO_REPLY (silent completion)
- [#142233](https://github.com/openclaw/openclaw/issues/142233) Sticker-selection CI omits its provider runtime prerequisite
- [#142106](https://github.com/openclaw/openclaw/issues/142106) [Bug]: Skills discovery is stale on the first read after watcher acquisition
- [#142110](https://github.com/openclaw/openclaw/issues/142110) [Bug]: cron machine-mode failures are framed as "Could not start the CLI" with Doctor and debug hints
- [#142111](https://github.com/openclaw/openclaw/issues/142111) [Bug]: --url without --token/--password is framed as a CLI startup crash instead of the producer remedy
- [#142059](https://github.com/openclaw/openclaw/issues/142059) Bug: cron conditions fail to execute commands when secret egress proxy is enabled
- [#142069](https://github.com/openclaw/openclaw/issues/142069) [Bug]: OSC 9;4 progress includes unsupported label field
- [#142062](https://github.com/openclaw/openclaw/issues/142062) Automations UI ignores saved display names
- [#142014](https://github.com/openclaw/openclaw/issues/142014) Agent file preview tooltip keeps saying Expand after expansion
- [#141988](https://github.com/openclaw/openclaw/issues/141988) [Bug]: partial vi.mock in prepared-model-catalog-worker.test.ts leaks into provider-transport-fetch.integration.test.ts in the non-isolated agents-core shard
- [#141996](https://github.com/openclaw/openclaw/issues/141996) Source CLI silently misses bundled skill edits with Unicode filenames
- [#141374](https://github.com/openclaw/openclaw/issues/141374) Chat Completions drops explicitly reported top-level cache-write usage
- [#141981](https://github.com/openclaw/openclaw/issues/141981) [Bug]: Desktop Keyboard sends paste shortcut instead of clipboard text
- [#141914](https://github.com/openclaw/openclaw/issues/141914) Usage cost text omits incomplete cache state
- [#141970](https://github.com/openclaw/openclaw/issues/141970) Skill Workshop: proposals that change a skill's `description` can never be applied (draft keeps the live description, breaking the candidate SHA contract)
- [#141956](https://github.com/openclaw/openclaw/issues/141956) [Feature]: Limit documentation search results from the CLI
- [#141940](https://github.com/openclaw/openclaw/issues/141940) WebChat sessionTarget:current automation attempts spurious external Google Chat delivery, generating false delivery-failed alerts
- [#141933](https://github.com/openclaw/openclaw/issues/141933) Memory full reindex loops forever on "Memory source changed while indexing" and stalls the cron scheduler
- [#140987](https://github.com/openclaw/openclaw/issues/140987) [Bug]: 5xx-wrapped request-validation errors are retried as timeouts
- [#133172](https://github.com/openclaw/openclaw/issues/133172) Repointed workspace aliases block inbound lanes for 24 hours with no repair path
- [#141912](https://github.com/openclaw/openclaw/issues/141912) Failed openclaw update leaves orphaned activeRun stuck at 'requested' phase forever
- [#141897](https://github.com/openclaw/openclaw/issues/141897) [Bug]: forced reply cleanup can report delivery settled before it finishes
- [#141898](https://github.com/openclaw/openclaw/issues/141898) [Bug]: requester settlement can acknowledge only part of a required child batch
- [#141850](https://github.com/openclaw/openclaw/issues/141850) [Bug] npm update restart handoff crashes with ENOENT (swapped dist chunk), leaving Gateway stopped, LaunchAgent disabled, and a stale running update_runs row
- [#141837](https://github.com/openclaw/openclaw/issues/141837) message tool: bare Discord channel ID is ambiguous — requires channel: prefix but error is only shown after the call
- [#141400](https://github.com/openclaw/openclaw/issues/141400) Shared CLI progress spinner floods narrow terminals with wrapped labels
- [#140940](https://github.com/openclaw/openclaw/issues/140940) [Bug]: isolated cron runs fail with "plugin generation was superseded" when a fallback provider's plugin is disabled (2026.9.x regression)
- [#141817](https://github.com/openclaw/openclaw/issues/141817) [Bug]: Telegram polling reports connected/works but stops consuming inbound updates on two independent hosts simultaneously (2026.9.2)
- [#141821](https://github.com/openclaw/openclaw/issues/141821) Matrix plugin renders markdown tables as raw text instead of HTML <table>
- [#141802](https://github.com/openclaw/openclaw/issues/141802) Matrix reaction listings show blank labels in the CLI
- [#141729](https://github.com/openclaw/openclaw/issues/141729) Unify Profile identity-save lifecycle ownership
- [#141765](https://github.com/openclaw/openclaw/issues/141765) [Feature]: Find people through your agent
- [#141748](https://github.com/openclaw/openclaw/issues/141748) Usage Sessions card reports matching rows as shown
- [#141734](https://github.com/openclaw/openclaw/issues/141734) Share the local-onboarding decision between CLI entry points
- [#141367](https://github.com/openclaw/openclaw/issues/141367) Code Mode truncates structured results to make room for JSON indentation
- [#141732](https://github.com/openclaw/openclaw/issues/141732) Share Slack reply segment projection while preserving delivery order
- [#141710](https://github.com/openclaw/openclaw/issues/141710) Agents list reports wildcard-bound channel accounts as unknown

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 243,457 · **Open issues:** 41,048 · **Last push:** <1h ago

On September 9, 2026, there were no new releases for Hermes Agent. However, two notable pull requests were merged, addressing important issues: PR #106185 resolved a problem with MCPP OAuth refresh that previously erased refresh tokens, and PR #106175 fixed false Windows update failures on desktop platforms. Among the newly reported issues, #105587 highlights a critical bug regarding the Windows desktop updater, which falsely claims that the updated executable is missing, while #106066 addresses a parsing issue with WhatsApp that drops text within ephemeralMessage wrappers. Additionally, #106166 presents a significant concern regarding the cron job execution, where manual runs can become permanently blocked due to a scheduling conflict.

#### ✅ Merged PRs
- [#106185](https://github.com/NousResearch/hermes-agent/pull/106185) MCP OAuth refresh no longer erases the refresh token (#62333)
- [#106175](https://github.com/NousResearch/hermes-agent/pull/106175) fix(desktop): stop false Windows update failures (salvage #105168)

#### 🐛 New Issues
- [#105587](https://github.com/NousResearch/hermes-agent/issues/105587) [Bug]: Windows desktop updater verify_windows_desktop_update false‑positive "The updated Desktop executable is missing"（v0.21.1） `type/bug` `duplicate` `comp/cli` `P2` 💬3
- [#106066](https://github.com/NousResearch/hermes-agent/issues/106066) [Bug]: WhatsApp quote parser drops text inside ephemeralMessage wrappers `type/bug` `comp/gateway` `platform/whatsapp` `P2` 💬3
- [#106166](https://github.com/NousResearch/hermes-agent/issues/106166) Bug (cron): manual `cron run` stamps execution with the NEXT scheduled instant, permanently blocking later manual runs ("already being fired") `type/bug` `duplicate` `comp/cron` `P1` 💬3
- [#106005](https://github.com/NousResearch/hermes-agent/issues/106005) Multiplex profiles: MCP connections, toolset resolution, and status are not profile-scoped — only the first profile gets tools `type/bug` `comp/gateway` `comp/tools` `tool/mcp` 💬3
- [#106182](https://github.com/NousResearch/hermes-agent/issues/106182) TUI child exits when full config contains YAML timestamps `type/bug` `duplicate` `comp/tui` `area/config` 💬2
- [#106097](https://github.com/NousResearch/hermes-agent/issues/106097) [Windows] Desktop-driven update always fails post-update verification: verify step runs with cwd=$HERMES_HOME, not the install root `type/bug` `duplicate` `comp/cli` `P1` 💬2
- [#106113](https://github.com/NousResearch/hermes-agent/issues/106113) Send per-conversation session_id in chat-completions body metadata for custom OpenAI-compatible providers (deployment affinity / prompt-cache locality) `type/feature` `comp/agent` `area/config` `P3` 💬2
- [#106153](https://github.com/NousResearch/hermes-agent/issues/106153) Signal reaction shows ❌ instead of ✅ for photo/media-only replies (delivery_attempted not set for attachments) `type/bug` `comp/gateway` `platform/signal` `P2` 💬1
- [#106115](https://github.com/NousResearch/hermes-agent/issues/106115) [Bug]: Gateway streaming TTS delays or drops acknowledgments at tool boundaries `type/bug` `comp/gateway` `tool/tts` `P2` 💬1
- [#105511](https://github.com/NousResearch/hermes-agent/issues/105511) Feature request: first-class Projects in Hermes Desktop (native parity with the `projects.*` surface) `type/feature` `P3` `comp/desktop` 💬1
- [#106163](https://github.com/NousResearch/hermes-agent/issues/106163) kanban_request_review(reviewer=<unknown>) silently parks task on nonexistent profile — review never spawns `type/bug` `comp/tools` `comp/cron` `P3` 💬1
- [#106165](https://github.com/NousResearch/hermes-agent/issues/106165) peer dm fails against gateways whose canonical Bot Chat is hidden (incomplete #91583 fix) `type/bug` `comp/cli` `comp/gateway` `P2` 💬1
- [#106162](https://github.com/NousResearch/hermes-agent/issues/106162) [Feature]: Desktop sidebar should distinguish auto-discovered and explicit projects `duplicate` `type/feature` `P3` `comp/desktop` 💬1
- [#106120](https://github.com/NousResearch/hermes-agent/issues/106120) Length continuation retries make the prompt LONGER when the prompt is what filled the window — 4 attempts, each worse than the last `type/bug` `comp/agent` `provider/ollama` `P2` 💬1
- [#106117](https://github.com/NousResearch/hermes-agent/issues/106117) WSLg Desktop uses llvmpipe despite an available D3D12 GPU `type/bug` `P3` `comp/desktop` 💬1
- [#106179](https://github.com/NousResearch/hermes-agent/issues/106179) [Bug]: Hermes Console cancel leaves executor worker and underlying LLM request running `type/bug` `comp/agent` `P2` `comp/dashboard`
- [#106181](https://github.com/NousResearch/hermes-agent/issues/106181) [Feature] render markdown tables as monospace-aligned blocks in Signal `type/feature` `comp/gateway` `platform/signal` `P3`
- [#106184](https://github.com/NousResearch/hermes-agent/issues/106184) [Desktop UI Bug] Model provider list incomplete - only shows 5 of 10 providers `type/bug` `P2` `needs-repro` `comp/desktop`
- [#106171](https://github.com/NousResearch/hermes-agent/issues/106171) [Bug]: Pinned bot-mode session is invisible in the sidebar — pinning never clears the hidden flag `type/bug` `P2` `sweeper:risk-session-state` `comp/desktop`
- [#106155](https://github.com/NousResearch/hermes-agent/issues/106155) [Feature] Save and revisit important chat messages with bookmarks `type/feature` `P3` `comp/desktop` `area/sessions`
- [#106164](https://github.com/NousResearch/hermes-agent/issues/106164) [Bug]: hermes debug share fallback to dpaste.com leaks logs for 7 days with no working delete path `type/bug` `comp/cli` `P2`
- [#106123](https://github.com/NousResearch/hermes-agent/issues/106123) Bug (desktop): cache unchanged transcript byte weights `type/perf` `P3` `comp/desktop` `area/sessions`
- [#106125](https://github.com/NousResearch/hermes-agent/issues/106125) Performance (desktop): index stable tool calls during streaming `type/perf` `P3` `comp/desktop` `area/streaming`
- [#106127](https://github.com/NousResearch/hermes-agent/issues/106127) Bug (desktop): serialize MCP log polling `type/bug` `tool/mcp` `P3` `comp/desktop`
- [#106129](https://github.com/NousResearch/hermes-agent/issues/106129) Bug (desktop): skip WSL distro discovery for drive paths `type/bug` `P3` `sweeper:risk-platform-windows` `comp/desktop`
- [#106131](https://github.com/NousResearch/hermes-agent/issues/106131) Bug (desktop): reuse the SSH bootstrap platform probe `type/perf` `backend/ssh` `P3` `comp/desktop`
- [#106133](https://github.com/NousResearch/hermes-agent/issues/106133) Performance (desktop): fetch roster profiles and install identity concurrently `type/perf` `P3` `comp/desktop`
- [#106135](https://github.com/NousResearch/hermes-agent/issues/106135) Bug (desktop): coalesce queued MCP health sweeps `type/bug` `tool/mcp` `P3` `comp/desktop`
- [#106137](https://github.com/NousResearch/hermes-agent/issues/106137) Performance (state): index compacted transcript display pages `type/perf` `comp/agent` `P3` `sweeper:risk-session-state`
- [#106139](https://github.com/NousResearch/hermes-agent/issues/106139) Bug (gateway): bound reconnect replay payload bytes `type/bug` `comp/tui` `P3` `area/sessions`
- [#106141](https://github.com/NousResearch/hermes-agent/issues/106141) Bug (gateway): isolate global broadcasts from slow peers `type/bug` `comp/tui` `P3` `comp/desktop`
- [#106143](https://github.com/NousResearch/hermes-agent/issues/106143) Bug (web): move log tail reads off the event loop `type/perf` `P3` `comp/dashboard`
- [#106150](https://github.com/NousResearch/hermes-agent/issues/106150) permission-probe-delete-me `duplicate` `invalid` `P3`
- [#106149](https://github.com/NousResearch/hermes-agent/issues/106149) permission-probe-delete-me `duplicate` `invalid` `P3`
- [#106148](https://github.com/NousResearch/hermes-agent/issues/106148) permission-probe-delete-me `duplicate` `invalid` `P3`
- [#106147](https://github.com/NousResearch/hermes-agent/issues/106147) permission-probe-delete-me `duplicate` `invalid` `P3`
- [#106146](https://github.com/NousResearch/hermes-agent/issues/106146) permission-probe-delete-me `duplicate` `invalid` `P3`
- [#106145](https://github.com/NousResearch/hermes-agent/issues/106145) permission-probe-delete-me `invalid` `P3`

#### 🔒 Closed Issues
- [#105145](https://github.com/NousResearch/hermes-agent/issues/105145) Windows desktop-driven `hermes update` always reports FAILED (exit 8) after a successful update - post-update verification resolves wrong working directory
- [#62333](https://github.com/NousResearch/hermes-agent/issues/62333) [Bug]: OAuth refresh_token erased on every token refresh - MCP servers die ~1h after login
- [#105587](https://github.com/NousResearch/hermes-agent/issues/105587) [Bug]: Windows desktop updater verify_windows_desktop_update false‑positive "The updated Desktop executable is missing"（v0.21.1）
- [#106097](https://github.com/NousResearch/hermes-agent/issues/106097) [Windows] Desktop-driven update always fails post-update verification: verify step runs with cwd=$HERMES_HOME, not the install root

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 91,276 · **Open issues:** 7,730 · **Last push:** <1h ago

On September 9, 2026, there were no new releases for vLLM. However, several significant improvements were made with merged pull requests, including enhancements to the CPU-GPU synchronization checks (#53491) and fixes for numerical precision issues in the recurrent state accumulation in QwenGatedDeltaNetAttention (#55792). Additionally, multi-stream performance improvements and fixes in ROCm (#55099) were implemented, along with various bug fixes covering aspects such as the preservation of target parallel configuration for DSpark (#55472) and resolution of embedding merge issues with OpenPangu (#55941). Notably, a bug was reported regarding vLLM’s QwenGatedDeltaNetAttention, highlighting discrepancies in logits compared to the Transformers implementation.

#### ✅ Merged PRs
- [#54522](https://github.com/vllm-project/vllm/pull/54522) [Docs][EC Connector] CPU EC Connector usage Docs
- [#55099](https://github.com/vllm-project/vllm/pull/55099) [ROCm][Perf][Bugfix] Multi-stream perf improvements; rocprofiler fixes
- [#55954](https://github.com/vllm-project/vllm/pull/55954) [Bugfix] Parse DSML tool calls when the model omits the tool_calls wrapper
- [#53491](https://github.com/vllm-project/vllm/pull/53491) [Core] Enhance cpu<->gpu sync checking to include paged async copies
- [#53319](https://github.com/vllm-project/vllm/pull/53319) [Kernel] Add NVFP4 support to the torch linear backend
- [#51925](https://github.com/vllm-project/vllm/pull/51925) [Kernel] Enable optimized FlashInfer add-RMSNorm NVFP4 fusion
- [#55472](https://github.com/vllm-project/vllm/pull/55472) [Bugfix][Spec Decode] Preserve target parallel config (DCP) for DSpark
- [#55941](https://github.com/vllm-project/vllm/pull/55941) [Bugfix] Fix OpenPangu multimodal embedding merge
- [#54788](https://github.com/vllm-project/vllm/pull/54788) [Bugfix][Spec Decode] Honour the draft's moe_backend on Model Runner V2
- [#55301](https://github.com/vllm-project/vllm/pull/55301) [Transformers] Generalize merged-column linear fusion
- [#55513](https://github.com/vllm-project/vllm/pull/55513) [Bugfix][Model] Fix block FP8 MTP in ModelOpt mixed checkpoints
- [#53195](https://github.com/vllm-project/vllm/pull/53195) [ROCm][DI][CI] Enable WideEP Intranode tests
- [#55877](https://github.com/vllm-project/vllm/pull/55877) [CI] Fix ARM64 test dependency builds with GCC 15
- [#49104](https://github.com/vllm-project/vllm/pull/49104) [Misc] Bump `openai` to `>=2.25.0` to support namespace tools types
- [#55223](https://github.com/vllm-project/vllm/pull/55223) [Perf] Eliminate full-history reasoning scans for structured outputs
- [#55924](https://github.com/vllm-project/vllm/pull/55924) [Kimi Bug] Fix kda ima `Triton Error [CUDA]: an illegal memory access was encountered`
- [#55919](https://github.com/vllm-project/vllm/pull/55919) [CI][ROCm] Increase timeouts for AMD MI300 jobs
- [#55780](https://github.com/vllm-project/vllm/pull/55780) [Attention] Require explicit DCP support from attention implementations
- [#55889](https://github.com/vllm-project/vllm/pull/55889) [CI] Reuse ColQwen3 models across pooling tests
- [#53007](https://github.com/vllm-project/vllm/pull/53007) [Core] Let SWA layers take the primary block size to avoid inflating the KV block LCM
- [#52346](https://github.com/vllm-project/vllm/pull/52346) [CI] Split long misc test groups by command
- [#55949](https://github.com/vllm-project/vllm/pull/55949) [Bugfix] Handle null RoPE parameters for NoPE layers
- [#53780](https://github.com/vllm-project/vllm/pull/53780) [2/N][KV Connector][NIXL] Support per-region transfer geometry
- [#54809](https://github.com/vllm-project/vllm/pull/54809) [Quant][Kernel] Remove GPTQ Group/Dynamic Activation Ordering
- [#54112](https://github.com/vllm-project/vllm/pull/54112) [ROCm] [Docker] Upgrade default AINIC repo to ship libionic 54.0-187-1
- [#55031](https://github.com/vllm-project/vllm/pull/55031) [Bugfix] speedup nvfp4 kv for FMHA
- [#55817](https://github.com/vllm-project/vllm/pull/55817) [Model] Enable torch.compile for Sarvam MLA
- [#55908](https://github.com/vllm-project/vllm/pull/55908) [Test] Dequantize NVFP4 KV cache scales in the layout the kernel writes
- [#55643](https://github.com/vllm-project/vllm/pull/55643) [Bugfix] Fix NVFP4 fused SiLU+mul scale allocation and global scale direction
- [#53941](https://github.com/vllm-project/vllm/pull/53941) [Refactor] Remove utils dead code
- [#54523](https://github.com/vllm-project/vllm/pull/54523) [Core] Scope PCP-DP validation to GPU manager
- [#55170](https://github.com/vllm-project/vllm/pull/55170) [Perf][Quant][NVFP4] Prefer W4A4 linear kernels over weight-only ones on SM120/121
- [#55890](https://github.com/vllm-project/vllm/pull/55890) [Qwen3.8-Flash-Next] Tune FP8 TP2/TP4 Triton MoE on B200
- [#55865](https://github.com/vllm-project/vllm/pull/55865) [LoRA] Clarify target module matching logic
- [#55774](https://github.com/vllm-project/vllm/pull/55774) [Kimi Bug] Fix kimi k3 startup cuda graph issue with recoverSSM
- [#50176](https://github.com/vllm-project/vllm/pull/50176) [4/N][warmup][DSv4] Migrate common attention kernels
- [#53379](https://github.com/vllm-project/vllm/pull/53379) [Bugfix] Fix Kimi K3 loading with interleaved weight streams
- [#53945](https://github.com/vllm-project/vllm/pull/53945) [Bugfix][Spec Decode] Cache the Mamba state at the block-grid position of EAGLE resume
- [#52156](https://github.com/vllm-project/vllm/pull/52156) [Bugfix] Apply attention sinks in the Transformers backend
- [#55629](https://github.com/vllm-project/vllm/pull/55629) [Perf] Fuse DeepEncoder relative bias in Triton attention
- [#54998](https://github.com/vllm-project/vllm/pull/54998) [Bugfix][KV Offload] Respect prefix-cache bypass in SimpleCPUOffload
- [#55715](https://github.com/vllm-project/vllm/pull/55715) [Perf][GDN] Enable the FlashInfer GDN prefill kernel on SM12x
- [#55808](https://github.com/vllm-project/vllm/pull/55808) [ROCm][Perf] Remove AITER paged-MQA outputs guard for DeepSeek-V4
- [#55878](https://github.com/vllm-project/vllm/pull/55878) [CI] Increase ColQwen3 pooling test memory budget on H200 MIG

#### 🐛 New Issues
- [#55792](https://github.com/vllm-project/vllm/issues/55792) [Bug]: vLLM's QwenGatedDeltaNetAttention has numerical precision issues in recurrent state accumulation, causing logits to diverge from the Transformers implementation for the Qwen3.5-MoE hybrid attention model. `bug` 💬2
- [#55951](https://github.com/vllm-project/vllm/issues/55951) [Bug] PP>1 + spec decode: mamba align postprocess indexes block table by batch row of a stale (pp_size-old) batch -> recurrent state copied to wrong blocks (NaN / silent recall loss) 💬1
- [#55950](https://github.com/vllm-project/vllm/issues/55950) [Bug]: License not included in official docker image `bug` 💬1
- [#55927](https://github.com/vllm-project/vllm/issues/55927) DeepSeek-V4-Flash-0731: deterministic wrong token on deep-context exact retrieval at 1-in-4 prompt lengths (reasoning off) — vLLM 0.28.0 + SGLang, reproduced on two hosted providers (DeepInfra, Baidu); one provider (OpenInference) is correct `tool-calling` `deepseek` `DSv4` 💬1
- [#55922](https://github.com/vllm-project/vllm/issues/55922) Qwen3.8-Flash-Next optimizations tracking issue `qwen` 💬1
- [#55933](https://github.com/vllm-project/vllm/issues/55933) [New Model]: rumik-oss-1 (Cohere2 + audio-token TTS) -- working out-of-tree plugin, proposing upstream support `quantization` 💬1
- [#55916](https://github.com/vllm-project/vllm/issues/55916) [RFC]: Add an RDNA4 FlyDSL all-reduce backend `rocm` 💬1
- [#55904](https://github.com/vllm-project/vllm/issues/55904) [Bug]: Persistent KV offload cache is not namespaced by KV cache layout `bug` 💬1
- [#55925](https://github.com/vllm-project/vllm/issues/55925) [CI Failure]: XPU Quantization Test `ci-failure` `quantization`
- [#55894](https://github.com/vllm-project/vllm/issues/55894) [Bug]: Hybrid Mamba + MTP silently corrupts requests when the drafter's attention backend lowers the batch-reorder threshold (decode rows run through Mamba prefill kernels)
- [#55870](https://github.com/vllm-project/vllm/issues/55870) [Bug]: Mooncake bootstrap and KV transfer failures can leave PD requests waiting without terminal error propagation `kv-connector`
- [#55855](https://github.com/vllm-project/vllm/issues/55855) [Feature]: Add RDMA-capable NIXL OBJ support for KV offload secondary tier `feature request` `kv-connector`
- [#55856](https://github.com/vllm-project/vllm/issues/55856) [Bug] v0.20.2 empty build incompatible with V1 engine (missing vllm._C)
- [#55845](https://github.com/vllm-project/vllm/issues/55845) [Bug] tencent/Hunyuan-A13B-Instruct fails with ImportError: cannot import name 'is_torch_fx_available' (trust_remote_code, transformers v5)
- [#55826](https://github.com/vllm-project/vllm/issues/55826) test-do-not-use
- [#55827](https://github.com/vllm-project/vllm/issues/55827) [Bug]: Starting two vLLM instances on one GPU at the same time makes each count the other's model loading as its own non-torch memory (KV cache shrinks or "No available memory for the cache blocks")
- [#55798](https://github.com/vllm-project/vllm/issues/55798) [Performance]: A performance optimization in the Scheduler regarding pad_spec_decode `performance` `scheduler`
- [#55800](https://github.com/vllm-project/vllm/issues/55800) [Bug]: DFlash2 spec-decode with a sliding-window drafter: admission (full_sequence_must_fit) and execution allocation both scale the drafter group's KV requirement with FULL sequence length -> admission deadlock above a block-size-dependent bound (~15.5K tokens at block-size 2304), engine crash on admission-clamp workarounds

#### 🔒 Closed Issues
- [#48953](https://github.com/vllm-project/vllm/issues/48953) [Bug][XPU]: zeMemOpenIpcHandle INVALID_ARGUMENT on 2x Arc B50 (Battlemage) TP=2
- [#45702](https://github.com/vllm-project/vllm/issues/45702) [RFC]: Partial Cache Hits for Hybrid Models
- [#41622](https://github.com/vllm-project/vllm/issues/41622) [Bug]: cuda graph capture hipErrorCapturedEvent crash on AMD ROCM when LoRA is enabled
- [#38820](https://github.com/vllm-project/vllm/issues/38820) [Usage]: port question
- [#37847](https://github.com/vllm-project/vllm/issues/37847) [Installation]: Documented v0.18.0 cu128 release wheel URL returns 404
- [#41494](https://github.com/vllm-project/vllm/issues/41494) [Bug]: Qwen3ForEmbedding no longer works
- [#48931](https://github.com/vllm-project/vllm/issues/48931) [Bug] DeepSeek-V4 tool-call parser leaks raw DSML into content when the model omits the `<｜DSML｜tool_calls>` START token (long context)
- [#40675](https://github.com/vllm-project/vllm/issues/40675) [RFC] Support Intel Quantization Toolkit AutoRound on Intel Platforms
- [#41817](https://github.com/vllm-project/vllm/issues/41817) [Bug]: OverflowError in mamba_utils.collect_mamba_copy_meta on XPU when device pointer ≥ 2^63 (hybrid models with align-mode prefix caching)
- [#45585](https://github.com/vllm-project/vllm/issues/45585) [RFC] RL CI Matrix for vLLM: Behavioral + Physical + Protocol Coverage
- [#37856](https://github.com/vllm-project/vllm/issues/37856) [Bug]: Shared Expert output is incorrect under Sequence Parallel MoE (EP + TP > 1 + DP > 1) for Qwen3.5 MoE models
- [#40689](https://github.com/vllm-project/vllm/issues/40689) [Bug]: Max token length incorrect when /nothink tag on Qwen3.5-4B
- [#40616](https://github.com/vllm-project/vllm/issues/40616) [Bug]: `/v2/embed` with `input_type` returns misleading 400 on nemotron-embed-vl
- [#55633](https://github.com/vllm-project/vllm/issues/55633) [Bug]: legacy qwen3_xml streaming parser emits whitespace-only content before the first tool call
- [#45902](https://github.com/vllm-project/vllm/issues/45902) [Bug]: vllm0.22.1 deploy deepseek-v4-flash,toolcall fuction is not smart than deepseek-ai offical api
- [#15658](https://github.com/vllm-project/vllm/issues/15658) [Feature]: Refactor the logic in tool parser manager and reasoning parser manager
- [#39474](https://github.com/vllm-project/vllm/issues/39474) [Bug] Regression: GPTQ models fail to load on Intel XPU in v0.19.0 (missing XPU branches in gptq.py)
- [#48058](https://github.com/vllm-project/vllm/issues/48058) [Bug][XPU] compressed-tensors FP8 W8A8 (dynamic) generates garbage output on Intel Arc Pro B70 (Battlemage)
- [#40869](https://github.com/vllm-project/vllm/issues/40869) [Bug]: QWEN3.5-27B fails to mount LoRA
- [#41670](https://github.com/vllm-project/vllm/issues/41670) Layerwise reload crashes with CUDA illegal memory access on compressed-tensors channel-wise FP8 MoE
- [#41704](https://github.com/vllm-project/vllm/issues/41704) [Bug]: SimpleCPUOffloadScheduler misses final full block when request finishes in the same scheduler step
- [#51071](https://github.com/vllm-project/vllm/issues/51071) [CI Failure]: LM Eval PCP (4xB200)
- [#51072](https://github.com/vllm-project/vllm/issues/51072) [CI Failure]: Kimi-Linear-48B-A3B Disaggregated DP EP
- [#55792](https://github.com/vllm-project/vllm/issues/55792) [Bug]: vLLM's QwenGatedDeltaNetAttention has numerical precision issues in recurrent state accumulation, causing logits to diverge from the Transformers implementation for the Qwen3.5-MoE hybrid attention model.
- [#41788](https://github.com/vllm-project/vllm/issues/41788) [Feature]: Add request-level OTel span attribute for cached prefix-cache input tokens
- [#41815](https://github.com/vllm-project/vllm/issues/41815) [Bug]: CUDA illegal instruction in Mamba2 mixed prefill/decode path
- [#52713](https://github.com/vllm-project/vllm/issues/52713) [Bug]: Marlin MoE support probe raises TypeError instead of returning a verdict for unset group_size
- [#51644](https://github.com/vllm-project/vllm/issues/51644) [CI Failure]: tests/kernels/moe/test_deepep_moe.py SIGSEGV on ROCm, drop the two teardown workarounds once the image ships rocm-systems#6942
- [#55733](https://github.com/vllm-project/vllm/issues/55733) [Bug]: Encoder-decoder encoder-cache budget (num_free_slots) inflates on every decode step, making admission control unsound
- [#55487](https://github.com/vllm-project/vllm/issues/55487) [RFC] Publish typed extra_keys in BlockStored KV events
- [#55826](https://github.com/vllm-project/vllm/issues/55826) test-do-not-use

### SGLang (`sgl-project/sglang`)

**Stars:** 35,655 · **Open issues:** 5,131 · **Last push:** <1h ago

On September 9, 2026, SGLang saw no new releases but notable progress in merged pull requests, including support for mixed INT8 embeddings (#38506) and MiniMax-H3 Singularity hybrid checkpoints (#38455). Furthermore, significant updates were made to the configuration system, retiring deprecated flags and the get_global_server_args method (#38375). There were also optimizations in diffusion-related processes with improvements to the VAE decode-dtype store (#38496) and a reversion related to PD disaggregation (#38572). Among the fresh issues, the regression of Rust TreeCore (v0.5.19) at high concurrency levels on small dense models (#38536) stands out as a key concern for developers.

#### ✅ Merged PRs
- [#38506](https://github.com/sgl-project/sglang/pull/38506) [Diffusion] Support mixed INT8 embeddings and Comfy NVFP4 encoders
- [#38455](https://github.com/sgl-project/sglang/pull/38455) [diffusion] Support MiniMax-H3 Singularity hybrid checkpoints
- [#38375](https://github.com/sgl-project/sglang/pull/38375) [Config] Retire get_global_server_args, and clear the deprecated flags that have a replacement
- [#36557](https://github.com/sgl-project/sglang/pull/36557) MiniMax-M3: Triton split-K router GEMV with in-kernel fixup
- [#36527](https://github.com/sgl-project/sglang/pull/36527) MiniMax-M3: share the sparse index top-k across layers and reuse the decode top-k buffer
- [#36229](https://github.com/sgl-project/sglang/pull/36229) [CP V1 Deprecation 4/5] Canonicalize prefill CP API names
- [#38572](https://github.com/sgl-project/sglang/pull/38572) Revert "PD disaggregation, isolated transfer, prefill OOM fixed."
- [#37500](https://github.com/sgl-project/sglang/pull/37500) support qwen 3.8 flash next
- [#38539](https://github.com/sgl-project/sglang/pull/38539) Point Ling-3.0-flash-VL cookbook install section at the model image
- [#33631](https://github.com/sgl-project/sglang/pull/33631) Keep fp32 routing weights in the fp8 block-scale and bf16 trtllm MoE
- [#36800](https://github.com/sgl-project/sglang/pull/36800) [HiCache] Add MLA host-dedup primitives
- [#38434](https://github.com/sgl-project/sglang/pull/38434) Add Ling-3.0-flash-VL cookbook
- [#37767](https://github.com/sgl-project/sglang/pull/37767) [DCP] Allow fi_a2a on single-node systems Blackwell without MNNVL fabric ( ex B200 B300)
- [#37789](https://github.com/sgl-project/sglang/pull/37789) [observability] Fix missing e2e/decode/inference latency span attributes
- [#38496](https://github.com/sgl-project/sglang/pull/38496) [Diffusion] Key the VAE decode-dtype store by module layout
- [#32758](https://github.com/sgl-project/sglang/pull/32758) fix(glm-5.2-nvfp4): bound Mooncake synchronous transfer batches
- [#32911](https://github.com/sgl-project/sglang/pull/32911) [Scheduler] Add HRRN schedule policy to significantly reduce TTFT
- [#37325](https://github.com/sgl-project/sglang/pull/37325) Disable Hopper GLM shared-expert fusion for modelopt_fp4 Marlin
- [#38422](https://github.com/sgl-project/sglang/pull/38422) [NPU] Phase A calibration: full GSM8K eval for dp_attention mixed-chunk
- [#38396](https://github.com/sgl-project/sglang/pull/38396) [Diffusion] Optimize LTX-2 QKNorm and split RoPE on Hopper
- [#38441](https://github.com/sgl-project/sglang/pull/38441) [Diffusion] Stream mapped weights on a shared host/device pool
- [#38457](https://github.com/sgl-project/sglang/pull/38457) [Diffusion][CI] Per-case timing tolerance for host-I/O-bound perf guards
- [#37465](https://github.com/sgl-project/sglang/pull/37465) [AMD] gfx950 assembly attention for EAGLE verify, draft extend and decode
- [#37140](https://github.com/sgl-project/sglang/pull/37140) [AMD] fix: use the hardware fp8 e4m3 convert on gfx950
- [#38467](https://github.com/sgl-project/sglang/pull/38467) [AMD] Skip AITER FP8 ASM prefill when GQA is unsupported
- [#38417](https://github.com/sgl-project/sglang/pull/38417) Fix DSA compression tail capacity for PD decode request slots
- [#38399](https://github.com/sgl-project/sglang/pull/38399) [Bench] Amortize the GDN ReplaySSM decode latency over the flush cycle
- [#35866](https://github.com/sgl-project/sglang/pull/35866) [Intel GPU] Add MLA support to Intel XPU Attention backend for Prefill
- [#38456](https://github.com/sgl-project/sglang/pull/38456) [AMD] Copy MoE weight views before H2D in slow-loading nightlies
- [#32207](https://github.com/sgl-project/sglang/pull/32207) 【NPU】Support EAGLE when PP enabled in prefill nodes
- [#38095](https://github.com/sgl-project/sglang/pull/38095) sglang-server remove opaque type
- [#36234](https://github.com/sgl-project/sglang/pull/36234) [rust-server] fix p/d bootstrap across dp listeners

#### 🐛 New Issues
- [#38536](https://github.com/sgl-project/sglang/issues/38536) Rust TreeCore (v0.5.19) shows e2e regression at concurrency on small dense model 💬2
- [#38450](https://github.com/sgl-project/sglang/issues/38450) [Bug] DeepSeek-V4-Flash-Vision preview image: multi-turn tool calls come back wrapped in {"arguments": {...}} 💬1
- [#38587](https://github.com/sgl-project/sglang/issues/38587) [Bug] Kimi-K3 strict tool-call grammar: additionalProperties dilutes a named property's type constraint
- [#38586](https://github.com/sgl-project/sglang/issues/38586) [Bug] mock_model/test_e2e_pd.py TestPdTransferChecksumFullRealData: kv_canary SWEEP_K_FULL chain-hash violation (slot 1 all-zero after PD transfer) since main 2026-09-08
- [#38580](https://github.com/sgl-project/sglang/issues/38580) [Feature] Enforce attention metadata consistency after post-plan padding
- [#38574](https://github.com/sgl-project/sglang/issues/38574) [Bug] compressed-tensors checkpoint + NEXTN/MTP head fails at construction with "No compressed-tensors compatible scheme was found" unless mtp.* is in `ignore` (module not named in the error)
- [#38573](https://github.com/sgl-project/sglang/issues/38573) [Bug] compressed-tensors W4AFP8 MoE: cutlass_w4a8_moe passes a literal chunk_size=128, so a group_size≠128 checkpoint loads clean and serves silently wrong output
- [#38561](https://github.com/sgl-project/sglang/issues/38561) [Bug] cache_salt in BlockStored KV events is undecodable with SGLang's exported msgspec types
- [#38557](https://github.com/sgl-project/sglang/issues/38557) [Playground] Verified cell: h100 / flash-vision / fp4 / balanced / single
- [#38552](https://github.com/sgl-project/sglang/issues/38552) Error deploy GPT OSS-120B with heterogeneous TP in a P/D
- [#38477](https://github.com/sgl-project/sglang/issues/38477) [Bug] FP8 MHA hybrid model crashes: HybridLinearAttnBackend has no forward_metadata
- [#38516](https://github.com/sgl-project/sglang/issues/38516) Diffusion CUDA JIT: rsqrt host/CRT clash burns tens of seconds before soft-fail (fail fast / skip on sm<80)
- [#38515](https://github.com/sgl-project/sglang/issues/38515) sgl_kernel AOT: rmsnorm NoKernelImage on sm_75 while silu_and_mul / gelu_and_mul work (per-op cubin gap)
- [#38514](https://github.com/sgl-project/sglang/issues/38514) Docs: official BFL FLUX.2-klein FP8 is Comfy split-QKV, not a packed SGLang --transformer-weights-path drop-in
- [#38513](https://github.com/sgl-project/sglang/issues/38513) supports_fp8() always True; _apply_fallback_scaled_mm still calls torch._scaled_mm (no escape on SM<89)
- [#38485](https://github.com/sgl-project/sglang/issues/38485) [Bug] ReplaySSM CPU backup/restore loses pending accepted updates
- [#38478](https://github.com/sgl-project/sglang/issues/38478) [Feature] Scheduler: opt-in NO_TOKEN admission lookahead with head-prefix pinning (head-of-line relief for prefill)
- [#38470](https://github.com/sgl-project/sglang/issues/38470) [Feature] HiCache: run the host->device load-back enqueue on a loader thread so it can overlap the forward
- [#38398](https://github.com/sgl-project/sglang/issues/38398) [Bug] bench_gdn_replayssm_decode.py never advances write_pos, so it times only the non-flush phase and overstates the speedup by up to 21%
- [#38452](https://github.com/sgl-project/sglang/issues/38452) [Bug] UnifiedRadixCache: L3 storage is never consulted when a prefix survives only as backuped stubs after host-tier eviction
- [#38448](https://github.com/sgl-project/sglang/issues/38448) [Bug] HiCache: prefill forward stalls behind the entire host-to-device load burst because round-head H2D copies are issued after the burst hand-over
- [#38428](https://github.com/sgl-project/sglang/issues/38428) [Bug] HiCache backup thread dies on any storage backend exception; queued backups and their host memory are never released
- [#38424](https://github.com/sgl-project/sglang/issues/38424) [First-time contributor] Looking for beginner-friendly issues to contribute
- [#38408](https://github.com/sgl-project/sglang/issues/38408) [Bug] test_expert_pack_mxfp4.py intermittently hangs while loading JIT extension

#### 🔒 Closed Issues
- [#30712](https://github.com/sgl-project/sglang/issues/30712) [Bug] DP attention state capturers crash when CUDA graph extent is not propagated: `cuda_graph_batch=None`
- [#30763](https://github.com/sgl-project/sglang/issues/30763) [Bug] MTP accept rate degrades to 0.19 on Qwen3.5 with GPQA dataset at 32K+ context
- [#30773](https://github.com/sgl-project/sglang/issues/30773) [Bug] one_batch.py is broken due to #28386
- [#28585](https://github.com/sgl-project/sglang/issues/28585) [RFC] Weight loading: separate loading from completeness verification
- [#30809](https://github.com/sgl-project/sglang/issues/30809) [Feature] Investigate CUTLASS 4.6 dynamic Epilogue Fusions and IKET profiling
- [#30634](https://github.com/sgl-project/sglang/issues/30634) [Diffusion] Support T2I dynamic batching for GLM-Image
- [#28427](https://github.com/sgl-project/sglang/issues/28427) [Bug] gemma4 cpu run fail
- [#30744](https://github.com/sgl-project/sglang/issues/30744) [Bug] Qwen3.5-9B runtime LoRA: tool calls swallowed into reasoning_content / malformed (4.8% defective turns); absent for base+identity on same server and for merged weights on vLLM/hosted
- [#30785](https://github.com/sgl-project/sglang/issues/30785) [Feature] Support Position-Independent Caching (PIC) and Chunk-based Reuse via LegoLink Architecture
- [#30644](https://github.com/sgl-project/sglang/issues/30644) [Bug] GLM tool-call parser corrupts string arguments that look like numbers with underscores (e.g. "123_456" -> "123456")
- [#38477](https://github.com/sgl-project/sglang/issues/38477) [Bug] FP8 MHA hybrid model crashes: HybridLinearAttnBackend has no forward_metadata
- [#38398](https://github.com/sgl-project/sglang/issues/38398) [Bug] bench_gdn_replayssm_decode.py never advances write_pos, so it times only the non-flush phase and overstates the speedup by up to 21%

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 127,540 · **Open issues:** 2,449 · **Last push:** 4h ago

On September 9, 2026, llama.cpp released several updates, including version b10867, which disables lazy tensor loading by default on iGPUs and reverts earlier changes while incorporating improvements in checkpoint eviction methods for prompts shorter than specified steps. Notable merged features included enhancements to the Vulkan implementation, such as the fusion of unary operations with multiplication and improved handling of non-contiguous inputs in OpenCL's conv2d. Additionally, important fixes addressed issues related to idle threads in Metal on specific hardware configurations, as well as general compilation errors due to missing headers. A significant new issue was reported regarding a crash in the DSpark + LFM2.5-8B-A1B model due to a dense LFM2.5 model issue, marking a notable point of concern for users.

#### 🚀 New Releases
- [b10867](https://github.com/ggml-org/llama.cpp/releases/tag/b10867) b10867
- [b10865](https://github.com/ggml-org/llama.cpp/releases/tag/b10865) b10865
- [b10864](https://github.com/ggml-org/llama.cpp/releases/tag/b10864) b10864
- [b10863](https://github.com/ggml-org/llama.cpp/releases/tag/b10863) b10863
- [b10859](https://github.com/ggml-org/llama.cpp/releases/tag/b10859) b10859
- [b10858](https://github.com/ggml-org/llama.cpp/releases/tag/b10858) b10858
- [b10857](https://github.com/ggml-org/llama.cpp/releases/tag/b10857) b10857
- [b10856](https://github.com/ggml-org/llama.cpp/releases/tag/b10856) b10856
- [b10855](https://github.com/ggml-org/llama.cpp/releases/tag/b10855) b10855
- [b10853](https://github.com/ggml-org/llama.cpp/releases/tag/b10853) b10853

#### ✅ Merged PRs
- [#28326](https://github.com/ggml-org/llama.cpp/pull/28326) llama: disable lazy tensor loading by default on iGPUs
- [#28600](https://github.com/ggml-org/llama.cpp/pull/28600) ci : disable npm gha cache
- [#28284](https://github.com/ggml-org/llama.cpp/pull/28284) fix the msvc clang compile test backend ops mismatch
- [#28604](https://github.com/ggml-org/llama.cpp/pull/28604) Revert "ggml-cuda : restore prop.integrated on HIP builds (#24233)"
- [#28302](https://github.com/ggml-org/llama.cpp/pull/28302) server : fix context checkpoint eviction on prompts shorter than checkpoint_min_step
- [#28086](https://github.com/ggml-org/llama.cpp/pull/28086) metal : fix idle threads in mul_mv_iq3_xxs for ne00 < 1024
- [#28390](https://github.com/ggml-org/llama.cpp/pull/28390) spec: single device drafter should create meta backend wrapper
- [#28566](https://github.com/ggml-org/llama.cpp/pull/28566) fix: add missing headers
- [#28603](https://github.com/ggml-org/llama.cpp/pull/28603) ci : add PYTEST_WORKERS=1 to fix server-self-hosted job
- [#27220](https://github.com/ggml-org/llama.cpp/pull/27220) vulkan : fuse UNARY(GELU|SIGMOID|SILU|SOFTPLUS) + MUL
- [#22892](https://github.com/ggml-org/llama.cpp/pull/22892) [ggml] Fix Vulkan-Hpp handle usage on 32-bit targets.
- [#27764](https://github.com/ggml-org/llama.cpp/pull/27764) chat : split specialized parsers into common/parsers
- [#28503](https://github.com/ggml-org/llama.cpp/pull/28503) opencl: properly handle non-contiguous inputs to conv2d
- [#26675](https://github.com/ggml-org/llama.cpp/pull/26675) ggml : update ggml_prec specification
- [#28466](https://github.com/ggml-org/llama.cpp/pull/28466) model : support Kimi-K3 recurrent-state rollback

#### 🐛 New Issues
- [#28614](https://github.com/ggml-org/llama.cpp/issues/28614) Eval bug: DSpark + LFM2.5-8B-A1B (MoE) crashes at graph_reserve — dense LFM2.5 models unaffected `bug-unconfirmed`
- [#28619](https://github.com/ggml-org/llama.cpp/issues/28619) Misc. bug: /slots save/restore never persists the draft-model context (ctx_dft) on speculative-decoding deployments
- [#28608](https://github.com/ggml-org/llama.cpp/issues/28608) ROCm/HIP: CLIP vision encoder crashes with HSA_STATUS_ERROR_MEMORY_APERTURE_VIOLATION in flash_attn_tile for large images `bug-unconfirmed`
- [#28602](https://github.com/ggml-org/llama.cpp/issues/28602) Misc. bug: MiniCPM3-4B crashes on Metal with automatic flash attention
- [#28590](https://github.com/ggml-org/llama.cpp/issues/28590) Misc. bug: Vulkan Validation Error VUID-RuntimeSpirv-cooperativeMatrixFlexibleDimensionsMaxDimension-10167 on Intel B70 Linux `bug-unconfirmed`

#### 🔒 Closed Issues
- [#25061](https://github.com/ggml-org/llama.cpp/issues/25061) Eval bug: CUDA error: unsupported value or parameter in cublasSgemm_v2 during large context processing
- [#25443](https://github.com/ggml-org/llama.cpp/issues/25443) Compile bug: stale tools/ui/dist fails the whole llama-server build even with LLAMA_BUILD_UI=OFF and LLAMA_USE_PREBUILT_UI=OFF
- [#24734](https://github.com/ggml-org/llama.cpp/issues/24734) Eval bug: Vulkan regression on AMD Strix Halo UMA between b9660 and b9672: model loads on GPU but inference shows no GPU compute
- [#28160](https://github.com/ggml-org/llama.cpp/issues/28160) Regression: --lazy-mode auto halves pp512 for qwen4exp on Vulkan (AMD iGPU)
- [#25804](https://github.com/ggml-org/llama.cpp/issues/25804) Performance issue with multi‑batch decoding
- [#27849](https://github.com/ggml-org/llama.cpp/issues/27849) Eval bug: Vulkan crash when prompt is read
- [#24932](https://github.com/ggml-org/llama.cpp/issues/24932) Misc. bug: Agent mode, shelling command executing can fail caused by whitespace in path
- [#28564](https://github.com/ggml-org/llama.cpp/issues/28564) Compile bug: error: use of undeclared identifier 'rand'/'RAND_MAX'
- [#28562](https://github.com/ggml-org/llama.cpp/issues/28562) Compile bug: error: use of undeclared identifier 'EXIT_FAILURE'
- [#28561](https://github.com/ggml-org/llama.cpp/issues/28561) Compile bug: error: use of undeclared identifier 'strtol'
- [#28560](https://github.com/ggml-org/llama.cpp/issues/28560) Compile bug: error: use of undeclared identifier 'posix_memalign'/'free'
- [#28559](https://github.com/ggml-org/llama.cpp/issues/28559) Compile bug: error: use of undeclared identifier 'getenv'/'atoi'
- [#28557](https://github.com/ggml-org/llama.cpp/issues/28557) Compile bug: error: use of undeclared identifier 'errno'
- [#28256](https://github.com/ggml-org/llama.cpp/issues/28256) Pathological reads on N-gram embedding model
- [#26106](https://github.com/ggml-org/llama.cpp/issues/26106) Eval bug: Starting from B9992, long contexts trigger a CUDA error: the function failed to launch on the GPU
- [#27194](https://github.com/ggml-org/llama.cpp/issues/27194) Feature Request: vulkan: fuse UNARY(SIGMOID|SILU) + MUL (CUDA parity)
- [#28461](https://github.com/ggml-org/llama.cpp/issues/28461) model: support bounded recurrent-state rollback for Kimi-K3

### Ollama (`ollama/ollama`)

**Stars:** 180,485 · **Open issues:** 3,936 · **Last push:** <1h ago

On September 9, 2026, there were no new releases for Ollama, but several important pull requests were merged that enhance functionality and fix critical issues. Notably, the integration with the OpenAI Codex was improved with the acceptance of plaintext-labeled agent messages and finalizing responses at the web search limit. The app also received an update to provide a first-use ChatGPT connection introduction and ensure that Codex configuration is preserved across host changes. Additionally, a fix addressing data races in progress and scheduling was implemented, which should enhance stability. However, a concerning new issue has been raised regarding the Responses API, where developer-role input items are being silently dropped without error, highlighting a potential problem that could affect user experience.

#### ✅ Merged PRs
- [#18329](https://github.com/ollama/ollama/pull/18329) openai: accept plaintext-labeled Codex agent messages
- [#18328](https://github.com/ollama/ollama/pull/18328) openai: finalize responses at the web search limit
- [#18321](https://github.com/ollama/ollama/pull/18321) app: add a first-use ChatGPT connection intro
- [#18325](https://github.com/ollama/ollama/pull/18325) app: align ChatGPT connection status copy with Claude
- [#18324](https://github.com/ollama/ollama/pull/18324) server: retry compaction after context overflow
- [#18323](https://github.com/ollama/ollama/pull/18323) app: open Codex by default for Ollama launches
- [#18319](https://github.com/ollama/ollama/pull/18319) fix data races in progress and sched
- [#18247](https://github.com/ollama/ollama/pull/18247) app: preserve Codex configuration across host changes
- [#18296](https://github.com/ollama/ollama/pull/18296) openai: use tsc_ prefix for tool search call IDs

#### 🐛 New Issues
- [#18305](https://github.com/ollama/ollama/issues/18305) openai: /v1/responses silently drops developer-role input items (200, no error) `responses` 💬1
- [#18306](https://github.com/ollama/ollama/issues/18306) Responses API: tools loaded by a client executed tool_search are never offered to the model
- [#18303](https://github.com/ollama/ollama/issues/18303) 500 "no user query found in messages" for tool-only turns on /v1/messages and /v1/chat/completions (no truncation required)

#### 🔒 Closed Issues
- [#18267](https://github.com/ollama/ollama/issues/18267) MLX runner: prefix-cache restore truncated to a multiple of 8192, costing a fixed 17-27 s re-prefill after every cold prompt
- [#15002](https://github.com/ollama/ollama/issues/15002) Window opens in wrong macOS Space (fullscreen Space affinity persists after close)
- [#18303](https://github.com/ollama/ollama/issues/18303) 500 "no user query found in messages" for tool-only turns on /v1/messages and /v1/chat/completions (no truncation required)

### LiteLLM (`BerriAI/litellm`)

**Stars:** 58,306 · **Open issues:** 4,978 · **Last push:** <1h ago

On September 9, 2026, there were no new releases for LiteLLM, but several significant changes were merged. Notable additions included enhancements to the auto router with an opt-in NON_REASONING tier below SIMPLE and support for MongoDB sidecar functionality, which has been backported to rc/1.101.0. Fixes also addressed multiple issues such as the prevention of budget reservations on token counting routes and the resolution of a TypeError in mlflow related to _stream_id_to_span leaks. Among new issues, a concerning bug was raised regarding the LiteLLM proxy corrupting streaming usage for reasoning models, indicating potential challenges that could need urgent attention.

#### ✅ Merged PRs
- [#40335](https://github.com/BerriAI/litellm/pull/40335) fix(otel v2): restore the Datadog auth span and the last-wins callback merge
- [#40298](https://github.com/BerriAI/litellm/pull/40298) feat(mcp): add schema discovery proxy mode
- [#40333](https://github.com/BerriAI/litellm/pull/40333) test(proxy): fix Prisma timeout cleanup after subreaper tests
- [#36718](https://github.com/BerriAI/litellm/pull/36718) fix(budget_reservation): don't reserve budget on token counting routes
- [#40273](https://github.com/BerriAI/litellm/pull/40273) feat(auto_router): opt-in NON_REASONING tier below SIMPLE
- [#40268](https://github.com/BerriAI/litellm/pull/40268) fix(fireworks_ai): fold instructions and developer items into one leading system message on the Responses path
- [#40320](https://github.com/BerriAI/litellm/pull/40320) test(azure_sentinel): pin batch_size as a per-request bound under concurrent events
- [#40323](https://github.com/BerriAI/litellm/pull/40323) chore(ci): merge main into internal staging
- [#40325](https://github.com/BerriAI/litellm/pull/40325) feat(team): backport team admin callbacks to rc/1.101.0 (#37667)
- [#40324](https://github.com/BerriAI/litellm/pull/40324) chore(ui): backport dashboard dependencies to rc/1.101.0 (#40312)
- [#39536](https://github.com/BerriAI/litellm/pull/39536) fix(proxy): stop shipping the literal string "None" as error type and param
- [#39654](https://github.com/BerriAI/litellm/pull/39654) feat(otel v2): send a key's or team's whole trace to its own destination
- [#40180](https://github.com/BerriAI/litellm/pull/40180) feat(bedrock): add TwelveLabs Marengo Embed 3.0 embeddings
- [#40321](https://github.com/BerriAI/litellm/pull/40321) feat(otel): backport tenant trace destinations to rc/1.101.0 (#39654)
- [#40312](https://github.com/BerriAI/litellm/pull/40312) chore(ui): update dashboard dependencies
- [#39049](https://github.com/BerriAI/litellm/pull/39049) fix(mlflow): prevent _stream_id_to_span leak and mlflow 2.x end_trace TypeError
- [#40316](https://github.com/BerriAI/litellm/pull/40316) feat: backport MongoDB sidecar to rc/1.101.0
- [#39556](https://github.com/BerriAI/litellm/pull/39556) fix(proxy): give each spend-log queue monitor its own flush event
- [#37667](https://github.com/BerriAI/litellm/pull/37667) feat(team): let a team admin manage their own team's logging callbacks
- [#40305](https://github.com/BerriAI/litellm/pull/40305) fix(a2a): forward caller identity headers on message/send and message/stream
- [#40285](https://github.com/BerriAI/litellm/pull/40285) fix(proxy): default max_idle_connection_lifetime on componentized DB URLs
- [#40306](https://github.com/BerriAI/litellm/pull/40306) fix(router): move retry-policy retries off the refusing deployment on every router entrypoint
- [#40311](https://github.com/BerriAI/litellm/pull/40311) perf: move Anthropic, Vertex Anthropic, Ollama and HF template fetches off the event loop
- [#40203](https://github.com/BerriAI/litellm/pull/40203) feat: move MongoDB vector search to an optional sidecar (BETA)
- [#40290](https://github.com/BerriAI/litellm/pull/40290) feat(otel): add http/json export protocol for OTel v2 traces
- [#38721](https://github.com/BerriAI/litellm/pull/38721) fix(policy_engine): execute post_call guardrail pipelines on responses and streams
- [#33738](https://github.com/BerriAI/litellm/pull/33738) fix(utils): honor string drop_params values from config and DB deployments
- [#39626](https://github.com/BerriAI/litellm/pull/39626) feat(ui): batch observability on the logs page
- [#40304](https://github.com/BerriAI/litellm/pull/40304) fix(proxy): keep team member budget enforced at the cap and across Redis counter expiry
- [#40226](https://github.com/BerriAI/litellm/pull/40226) fix(router): keep deployment tags out of retry and fallback tag routing
- [#40225](https://github.com/BerriAI/litellm/pull/40225) fix(router): give cost-based routing its own cache key so it stops overwriting latency samples
- [#40222](https://github.com/BerriAI/litellm/pull/40222) fix(router): let simple-shuffle weight by any deployment's weight/rpm/tpm
- [#40224](https://github.com/BerriAI/litellm/pull/40224) fix(router): count allowed_fails in the shared router cache so multi-worker proxies bench a deployment fleet-wide
- [#40229](https://github.com/BerriAI/litellm/pull/40229) fix(router): keep per-request routing_strategy override selectors out of global callbacks
- [#40286](https://github.com/BerriAI/litellm/pull/40286) feat(otel): make the OTel v2 trace export URL configurable
- [#40287](https://github.com/BerriAI/litellm/pull/40287) chore: bump litellm-proxy-extras 0.4.94 -> 0.4.95, litellm 1.101.0 -> 1.102.0
- [#40209](https://github.com/BerriAI/litellm/pull/40209) feat(router): resolve max_tokens to the tier model's ceiling on auto-routed requests
- [#40163](https://github.com/BerriAI/litellm/pull/40163) feat(deploy): metrics sidecar and separate metrics port in Helm and Terraform
- [#40205](https://github.com/BerriAI/litellm/pull/40205) feat(complexity_router): rebalance heuristic weights in the dashboard and grade custom dimensions by match count
- [#38856](https://github.com/BerriAI/litellm/pull/38856) fix(responses): record spend for native Responses API WebSocket sessions
- [#38226](https://github.com/BerriAI/litellm/pull/38226) fix(proxy): initialize string success/failure callbacks at startup after config load
- [#40269](https://github.com/BerriAI/litellm/pull/40269) fix(responses bridge): keep mid-conversation system messages in input instead of folding them into instructions
- [#40267](https://github.com/BerriAI/litellm/pull/40267) fix(guardrails): allow framework-supported logging-only mode
- [#40154](https://github.com/BerriAI/litellm/pull/40154) fix(ocr): run post-call logging hooks
- [#40211](https://github.com/BerriAI/litellm/pull/40211) fix(guardrails): keep guardrail telemetry when a policy pipeline blocks or modifies the response
- [#39384](https://github.com/BerriAI/litellm/pull/39384) fix(proxy-extras): rebuild indexes left INVALID by a migration deadlock
- [#40009](https://github.com/BerriAI/litellm/pull/40009) fix(least-busy): share in-flight request counts across proxy workers
- [#40025](https://github.com/BerriAI/litellm/pull/40025) fix(router): give cooldowns their own cache so siblings see a bench in ~1s
- [#39876](https://github.com/BerriAI/litellm/pull/39876) fix(proxy): load db credentials in the model reconcile so a worker never serves a model before its credential
- [#39509](https://github.com/BerriAI/litellm/pull/39509) fix(proxy): kill the whole prisma process group when a boot migration command times out
- [#40208](https://github.com/BerriAI/litellm/pull/40208) fix(tool_permission): log expected skip and deny events below WARNING
- [#40202](https://github.com/BerriAI/litellm/pull/40202) fix(router): rank streaming latency routing by raw TTFT, not TTFT per token
- [#39933](https://github.com/BerriAI/litellm/pull/39933) feat(mcp): start the named server's OAuth directly for a resource-scoped gateway flow
- [#40192](https://github.com/BerriAI/litellm/pull/40192) feat(ui): show auto-router classification rate
- [#40206](https://github.com/BerriAI/litellm/pull/40206) fix(spend): compare auto-router targets by deployment identity
- [#39668](https://github.com/BerriAI/litellm/pull/39668) fix(vertex_ai): support fine-tuned Gemini endpoints in managed batches
- [#40195](https://github.com/BerriAI/litellm/pull/40195) test: drop tests that only pin static cost-map values
- [#40181](https://github.com/BerriAI/litellm/pull/40181) test: add Rust extension pytest contract
- [#40167](https://github.com/BerriAI/litellm/pull/40167) fix(proxy): log budget reservation notice once at config load
- [#40156](https://github.com/BerriAI/litellm/pull/40156) feat(complexity_router): add declarative custom dimensions to the heuristic scorer

#### 🐛 New Issues
- [#40237](https://github.com/BerriAI/litellm/issues/40237) [Bug]: Complexity auto-router moves encrypted content follow-ups across model groups `proxy` `llm translation` 💬3
- [#40217](https://github.com/BerriAI/litellm/issues/40217) [Bug]: Auth rejections disclose the key hash (401) and the key's full model allowlist (403) 💬2
- [#40260](https://github.com/BerriAI/litellm/issues/40260) [Bug]: OpenAI/Azure clean stream EOF without finish_reason is reported as successful completion `llm translation` 💬1
- [#40279](https://github.com/BerriAI/litellm/issues/40279) [Bug]: gpt-6-astra rejects max_tokens (is_model_gpt_5_model / is_model_gpt_5_4_plus_model don't recognize gpt-6 family) `llm translation` 💬1
- [#40198](https://github.com/BerriAI/litellm/issues/40198) [Bug]: /v1/messages → Responses bridge folds per-turn mid-conversation system reminders into `instructions`, so the Azure/OpenAI prefix cache never engages (0% hits for Claude Code >= 2.1.237) `llm translation` `claude code`
- [#40234](https://github.com/BerriAI/litellm/issues/40234) Bedrock and Vertex AI batch file IDs produce URI-unsafe S3 log filenames `llm translation` 💬1
- [#40216](https://github.com/BerriAI/litellm/issues/40216) [Bug]: /spend/logs reports spend: 0 for the last day of every date range 💬1
- [#40201](https://github.com/BerriAI/litellm/issues/40201) [Bug]: PATCH /guardrails/{id} is not applied to the running guardrail — pii_entities_config changes silently ignored until restart (v1.99.0) 💬1
- [#40339](https://github.com/BerriAI/litellm/issues/40339) [Feature]: per-hook, per-callback request filters for guardrails and logging callbacks `proxy` `llm translation`
- [#40253](https://github.com/BerriAI/litellm/issues/40253) [Bug]: Chained LiteLLM proxy corrupts streaming usage for reasoning models `proxy` `llm translation`
- [#40277](https://github.com/BerriAI/litellm/issues/40277) [Bug]: cached_tokens can exceed input_tokens on the Responses API bridge (Bedrock cache-token basis mismatch) `llm translation`
- [#40288](https://github.com/BerriAI/litellm/issues/40288) [Bug]: reasoning items rebuilt from lossy summary text on every turn, breaking prompt-cache byte-stability for OpenAI reasoning models behind /v1/messages `llm translation` `claude code`
- [#40250](https://github.com/BerriAI/litellm/issues/40250) [Feature]: Add a fifth NON_REASONING tier to Auto Router `enhancement` `proxy` `claude code`
- [#40317](https://github.com/BerriAI/litellm/issues/40317) [Bug]: openai dependency still pinned to <3.0.0 in latest release, blocks packages requiring openai>=3.0.0 `llm translation`
- [#40308](https://github.com/BerriAI/litellm/issues/40308) Concern about bulk integration PRs and affiliation disclosure `llm translation`
- [#40297](https://github.com/BerriAI/litellm/issues/40297) [Feature]: Add "x-session-id" to list of valid session identifiers `enhancement` `proxy`
- [#40293](https://github.com/BerriAI/litellm/issues/40293) Prometheus failure metrics labeled with wrong deployment during TPM spillover (race condition)
- [#40291](https://github.com/BerriAI/litellm/issues/40291) TPM rate limit pre-call check reads local memory only, ignoring Redis in multi-replica deployments
- [#40292](https://github.com/BerriAI/litellm/issues/40292) model_id is empty in streaming callbacks — TPM counter never incremented for rate limiting `llm translation`
- [#40276](https://github.com/BerriAI/litellm/issues/40276) [Bug]: Empty choices list misreported as 500 no-choices error (Gemini safety-filtered responses) `llm translation`
- [#40272](https://github.com/BerriAI/litellm/issues/40272) [Bug]: v1.101.0-rc.1 migrations fail with P1011 using AWS RDS CA bundle after strict TLS translation `proxy`
- [#40265](https://github.com/BerriAI/litellm/issues/40265) [Bug]: Test Connection throws 403 for internal_user `bug` `ui-dashboard`
- [#40261](https://github.com/BerriAI/litellm/issues/40261) [Feature]: Proxy should honor custom_llm_provider from litellm_params for spend attribution on OpenAI-compatible deployments `llm translation`
- [#40247](https://github.com/BerriAI/litellm/issues/40247) [Bug]: JSON logging repeatedly scans unchanged strings for secrets `proxy`
- [#40213](https://github.com/BerriAI/litellm/issues/40213) LiteLLM / Groq model failures causing pipeline fallback to mock mode
- [#40221](https://github.com/BerriAI/litellm/issues/40221) [Bug]: Spend counter cache evicts active budget counters after 200 entries `proxy`
- [#40219](https://github.com/BerriAI/litellm/issues/40219) [Bug]: PATCH /guardrails/{id} accepts the POST body shape, returns 200, and applies nothing
- [#40212](https://github.com/BerriAI/litellm/issues/40212) [Bug]: Virtual Key UI cannot select no-default-models `llm translation` `ui-dashboard`

#### 🔒 Closed Issues
- [#25550](https://github.com/BerriAI/litellm/issues/25550) [Bug]: Model Access Groups leak into `/v1/models` response
- [#25204](https://github.com/BerriAI/litellm/issues/25204) [Bug]: custom_llm_provider "anthropic" bypasses input_cost_per_token: 0 — cost_per_token() dispatches to anthropic_cost_per_token() before checking custom pricing
- [#27917](https://github.com/BerriAI/litellm/issues/27917) [Bug]: Duplicate Usage Aggregation Across Billing Cycles (April/May)
- [#29570](https://github.com/BerriAI/litellm/issues/29570) [Feature]: Add support for the volcanic ark
- [#29588](https://github.com/BerriAI/litellm/issues/29588) [Bug]: MCP OAuth token endpoint returns 500 on upstream invalid_grant, breaking client re-auth
- [#32778](https://github.com/BerriAI/litellm/issues/32778) [Feature]: Tool Permission Guardrail logs expected/non-actionable events at WARNING, creating excessive log noise
- [#29593](https://github.com/BerriAI/litellm/issues/29593) [Bug]: Generic Guardrail API should extract and redact tool result content in Anthropic messages
- [#40135](https://github.com/BerriAI/litellm/issues/40135) [Bug]: All five `/v1/files` routes ship `type` and `param` as the literal string `"None"`, so every error body is unclassifiable
- [#40198](https://github.com/BerriAI/litellm/issues/40198) [Bug]: /v1/messages → Responses bridge folds per-turn mid-conversation system reminders into `instructions`, so the Azure/OpenAI prefix cache never engages (0% hits for Claude Code >= 2.1.237)
- [#39692](https://github.com/BerriAI/litellm/issues/39692) [Feature]: Complete MCP proxy mode with schema discovery
- [#40250](https://github.com/BerriAI/litellm/issues/40250) [Feature]: Add a fifth NON_REASONING tier to Auto Router
- [#38811](https://github.com/BerriAI/litellm/issues/38811) [Bug]: Auto-router savings conflates model identity with deployment identity

### Unsloth (`unslothai/unsloth`)

**Stars:** 75,873 · **Open issues:** 1,363 · **Last push:** <1h ago

On September 9, 2026, Unsloth released version v0.1.807-beta, featuring significant performance enhancements, including a 20% boost for AMD users and over 200 bug fixes, leading to 50% smaller binaries. Noteworthy merged pull requests include #10505, which allows recovery of compare-pane settings through a snapshot path, and #9449, which fixes the Studio port fallback on Windows. A critical new issue was raised (#10544) regarding conversation recall order in Windows, highlighting potential discrepancies when two turns occur in a single clock tick. Additionally, users reported a bug (#10479) where the model incorrectly thinks it is low on tool calls, suggesting ongoing challenges in resource management.

#### 🚀 New Releases
- [v0.1.807-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.807-beta) Large Perf Improvements + Fixes

#### ✅ Merged PRs
- [#10505](https://github.com/unslothai/unsloth/pull/10505) Studio: recover compare-pane settings through a snapshot path
- [#9449](https://github.com/unslothai/unsloth/pull/9449) Fix Studio port fallback on Windows
- [#9240](https://github.com/unslothai/unsloth/pull/9240) fix(desktop): trust the OS certificate store on the Linux desktop (#9218)
- [#10443](https://github.com/unslothai/unsloth/pull/10443) Studio: add opt-in first-use Blender MCP setup
- [#10453](https://github.com/unslothai/unsloth/pull/10453) Stop unsloth start from killing a model download that is still running
- [#10535](https://github.com/unslothai/unsloth/pull/10535) CI: assert the installed unsloth CLI runs on the virgin Windows lane
- [#10534](https://github.com/unslothai/unsloth/pull/10534) Make build.sh executable so ./build.sh publish works from a clone
- [#10532](https://github.com/unslothai/unsloth/pull/10532) Format two files that drifted from the pinned ruff on main
- [#10531](https://github.com/unslothai/unsloth/pull/10531) Keep the loggers stub a package so tests/studio can be collected in one process
- [#10530](https://github.com/unslothai/unsloth/pull/10530) Studio: make three RAG tests hold on Windows
- [#9447](https://github.com/unslothai/unsloth/pull/9447) Bind the amp helpers on the MLX runtime too
- [#5103](https://github.com/unslothai/unsloth/pull/5103) Add persistent wiki-RAG pipeline with vendored Graphify, lint-driven enrichment, and debug/maintenance APIs
- [#10523](https://github.com/unslothai/unsloth/pull/10523) Unbreak CI on main: name the encoding on four checked-in file reads, and make the ruff format hook executable
- [#10527](https://github.com/unslothai/unsloth/pull/10527) Release: do not fail the Windows Defender gate when the runner refuses real-time protection
- [#10490](https://github.com/unslothai/unsloth/pull/10490) Pin the accelerator index for torchao too, and let a starved index pin fall back
- [#10522](https://github.com/unslothai/unsloth/pull/10522) Fix main's red encoding guard, and the ruff drift in the same files
- [#10518](https://github.com/unslothai/unsloth/pull/10518) Keep scripts/run_ruff_format.py executable
- [#10524](https://github.com/unslothai/unsloth/pull/10524) Let the torch tag check tell the handoff restore from a conditional report
- [#10517](https://github.com/unslothai/unsloth/pull/10517) Studio: give the document upload simulations one deadline
- [#10519](https://github.com/unslothai/unsloth/pull/10519) Restore the executable bit on the formatter hook
- [#10521](https://github.com/unslothai/unsloth/pull/10521) Bump install.sh / install.ps1 pin to unsloth>=2026.9.3
- [#8066](https://github.com/unslothai/unsloth/pull/8066) Studio: record how a Windows install was launched and what it produced
- [#9885](https://github.com/unslothai/unsloth/pull/9885) Studio: quiet image and video generation logs
- [#10214](https://github.com/unslothai/unsloth/pull/10214) Desktop: fix NVIDIA X11 WebKit fence exhaustion
- [#10388](https://github.com/unslothai/unsloth/pull/10388) Drop late inference responses after their request is released
- [#10496](https://github.com/unslothai/unsloth/pull/10496) Studio: fix document upload stalls, races and text decoding
- [#10514](https://github.com/unslothai/unsloth/pull/10514) Tests: let the xFormers pin guards hold on both main and pip
- [#10512](https://github.com/unslothai/unsloth/pull/10512) Make the formatter refuse a ruff it is not pinned to, and re-format the four files that drifted
- [#10513](https://github.com/unslothai/unsloth/pull/10513) Merge main into pip
- [#10495](https://github.com/unslothai/unsloth/pull/10495) Docker Studio: keep the base image's CUDA llama.cpp instead of the CPU prebuilt
- [#10492](https://github.com/unslothai/unsloth/pull/10492) Docker Hub README: xformers is amd64 only, GB10 runs through PTX, canonical docs link
- [#10487](https://github.com/unslothai/unsloth/pull/10487) Studio: stop installing flash-linear-attention and tilelang, unsloth_zoo vendors the GDN kernels
- [#10488](https://github.com/unslothai/unsloth/pull/10488) Cache janitor: sweep every two hours, drop dead buildkit blobs on sight, keep one CodeQL overlay base
- [#10403](https://github.com/unslothai/unsloth/pull/10403) Studio: install the supported MLX stack on fresh macOS installs
- [#10447](https://github.com/unslothai/unsloth/pull/10447) Studio: recover saved context when switching back to a snapshot path
- [#10261](https://github.com/unslothai/unsloth/pull/10261) Studio: say when a file cannot be read instead of ignoring it
- [#10484](https://github.com/unslothai/unsloth/pull/10484) Fix the red parity gate: run_pwsh has to set the writing end of the pipe too
- [#10445](https://github.com/unslothai/unsloth/pull/10445) Studio: keep queued prompts when generation is stopped
- [#9402](https://github.com/unslothai/unsloth/pull/9402) fix(studio): refresh profile stats and mode-aware activity summary
- [#10485](https://github.com/unslothai/unsloth/pull/10485) Studio: ask for a password on a raw `-H 0.0.0.0` bind too
- [#7508](https://github.com/unslothai/unsloth/pull/7508) Studio: allow DoRA training on Apple Silicon
- [#4965](https://github.com/unslothai/unsloth/pull/4965) fix: private dataset splits/metadata not loading in Studio UI
- [#4881](https://github.com/unslothai/unsloth/pull/4881) Fix Windows setup access-denied on existing llama-server ACLs
- [#4235](https://github.com/unslothai/unsloth/pull/4235) Add Qwen3-Omni Support with Optimized MTP Fine-Tuning
- [#4247](https://github.com/unslothai/unsloth/pull/4247) docs: improve documentation on exporting models from Colab
- [#4259](https://github.com/unslothai/unsloth/pull/4259) [WIP] Apple Silicon (MPS/Metal) Support
- [#4248](https://github.com/unslothai/unsloth/pull/4248) bump trl version
- [#4443](https://github.com/unslothai/unsloth/pull/4443) Feat: add unsloth skill, fix cli
- [#5408](https://github.com/unslothai/unsloth/pull/5408) Refactor setup.sh into modular functions and restructure main execution flow
- [#10478](https://github.com/unslothai/unsloth/pull/10478) Scan release bundles for potentially unwanted applications too
- [#10477](https://github.com/unslothai/unsloth/pull/10477) Studio: harden the codec-audio eval config added in #10259
- [#10419](https://github.com/unslothai/unsloth/pull/10419) Assert the release publishing path uploads the wheel only
- [#10404](https://github.com/unslothai/unsloth/pull/10404) Recognise Windows code integrity blocks, and require the runtime we ship
- [#10457](https://github.com/unslothai/unsloth/pull/10457) Studio: show mlx-community models as MLX in the model picker
- [#10312](https://github.com/unslothai/unsloth/pull/10312) fix(tokenizer): enable add_bos_token for Gemma 4 base models
- [#10456](https://github.com/unslothai/unsloth/pull/10456) Studio: make the Min P and Repetition Penalty sliders work
- [#7474](https://github.com/unslothai/unsloth/pull/7474) torchcodec: cover torch 2.11 in the compatibility guard and pin per torch minor
- [#10482](https://github.com/unslothai/unsloth/pull/10482) Studio: keep the uploaded eval dataset for Whisper and audio VLM runs too
- [#10455](https://github.com/unslothai/unsloth/pull/10455) Studio: fix sending an image with no caption on Anthropic
- [#10463](https://github.com/unslothai/unsloth/pull/10463) Studio: keep an Ollama Modelfile SYSTEM prompt in force when the date line is on
- [#10451](https://github.com/unslothai/unsloth/pull/10451) Apply the load settings unsloth start dsh is given
- [#10452](https://github.com/unslothai/unsloth/pull/10452) Stop unsloth train from ignoring config keys it does not know
- [#10432](https://github.com/unslothai/unsloth/pull/10432) Make the venv-hardening decode strict, and say which codepoints differed
- [#10431](https://github.com/unslothai/unsloth/pull/10431) Pin tokenizers with transformers so Apple Silicon keeps Train and Export
- [#10409](https://github.com/unslothai/unsloth/pull/10409) Do not self-heal MLX into a --no-torch install
- [#10461](https://github.com/unslothai/unsloth/pull/10461) Studio: stop re-fetching every llama.cpp release from the GitHub API
- [#10483](https://github.com/unslothai/unsloth/pull/10483) Docker Studio: build the labextension with @jupyter/builder so it never reaches for GitHub
- [#10414](https://github.com/unslothai/unsloth/pull/10414) notebook_validator: read shell the way bash does, and state the torch/torchcodec contract
- [#10370](https://github.com/unslothai/unsloth/pull/10370) Studio: name the llama.cpp backend in the install log, and stop labelling Windows ROCm torch as CPU
- [#10476](https://github.com/unslothai/unsloth/pull/10476) Fix the red Cross-platform parity run: decode PowerShell stdout as UTF-8
- [#10254](https://github.com/unslothai/unsloth/pull/10254) Studio: let Deep Research write longer reports on saved connections
- [#10475](https://github.com/unslothai/unsloth/pull/10475) Studio: add GPT-6 Astra to the fallback catalog and reasoning controls
- [#10316](https://github.com/unslothai/unsloth/pull/10316) Stop unsloth start codex and openclaw from inheriting provider API keys
- [#9886](https://github.com/unslothai/unsloth/pull/9886) Clean up Hub runtime/config coupling
- [#10362](https://github.com/unslothai/unsloth/pull/10362) OpenAI stream: gate UI control frames behind X-Unsloth-Events opt-in
- [#10458](https://github.com/unslothai/unsloth/pull/10458) Studio: use every thinking level a local model offers
- [#10266](https://github.com/unslothai/unsloth/pull/10266) studio: use the hermes and deepseek logos in the agents picker

#### 🐛 New Issues
- [#10544](https://github.com/unslothai/unsloth/issues/10544) Windows: conversation recall order is not total when two turns land in one clock tick 💬2
- [#10470](https://github.com/unslothai/unsloth/issues/10470) [Feature] Small UI Change: "Used tool:" to "Using tool:" While Tool Call in Progress `feature request` 💬2
- [#10563](https://github.com/unslothai/unsloth/issues/10563) ROCm: fast_dequantize caches an import-time stream instead of using the live PyTorch stream 💬1
- [#10545](https://github.com/unslothai/unsloth/issues/10545) Security audit hf-stack lane is red on main: scan_packages baseline needs re-review after the unsloth-zoo bump 💬1
- [#10549](https://github.com/unslothai/unsloth/issues/10549) [Bug] Unsloth layer mode and tensor mode are the same, fake BF16mode `feature request` `bug` 💬1
- [#10529](https://github.com/unslothai/unsloth/issues/10529) Studio: an unanchored link definition probe can put an ordinary reply on the full-document render path 💬1
- [#10516](https://github.com/unslothai/unsloth/issues/10516) UNSLOTH_PYTORCH_MIRROR with a query token: eight index URLs still concatenate the leaf into the token 💬1
- [#10515](https://github.com/unslothai/unsloth/issues/10515) test_source_read_encoding fails on main: two read_text() calls in test_wheel_smoke_publish_guard.py have no encoding 💬1
- [#10479](https://github.com/unslothai/unsloth/issues/10479) [Bug] Model Thinks It's Running Low on Tool Calls / Has a Budget `feature request` `bug` 💬1
- [#10468](https://github.com/unslothai/unsloth/issues/10468) AMD6950XT DOES NOT SUPPORT? 💬1
- [#10567](https://github.com/unslothai/unsloth/issues/10567) Project recreated between the delete route's owner check and the scope purge loses RAG permanently
- [#10562](https://github.com/unslothai/unsloth/issues/10562) [Feature] add support for ifm k2 models `feature request`
- [#10559](https://github.com/unslothai/unsloth/issues/10559) [Unsloth Bug] llama-server crashes with GGML_ASSERT on image input for Gemma 4 (default ubatch too small) `feature request` `bug`
- [#10539](https://github.com/unslothai/unsloth/issues/10539) [Bug] Inline Graphs and Python visuals fail to Display in Unsloth Desktop `feature request` `bug`
- [#10520](https://github.com/unslothai/unsloth/issues/10520) [Bug] Unsloth Desktop fails with "Unsloth isn't running" due to aggressive local loopback/health-check timeout with third-party firewalls (Sphinx WFC) `feature request` `bug`
- [#10489](https://github.com/unslothai/unsloth/issues/10489) [Bug] Studio memory estimate conflicts with context warning and loader KV estimate
- [#10493](https://github.com/unslothai/unsloth/issues/10493) Linux torch repair can change the accelerator family without re-pinning torchao
- [#10481](https://github.com/unslothai/unsloth/issues/10481) [First-time contributor] Looking for beginner-friendly issues to contribute

#### 🔒 Closed Issues
- [#4846](https://github.com/unslothai/unsloth/issues/4846) [Bug] Windows: Access denied on llama-server.exe when Studio is run without admin after elevated install
- [#3636](https://github.com/unslothai/unsloth/issues/3636) [Feature] Qwen3-omni TTS Voice Cloning Support
- [#10449](https://github.com/unslothai/unsloth/issues/10449) [Bug] `unsloth studio update` hits the github api too hard
- [#4962](https://github.com/unslothai/unsloth/issues/4962) [Bug] Private Dataset Metadata Request Does not pass the hf token
- [#9218](https://github.com/unslothai/unsloth/issues/9218) [Bug] System locally trusted self-signed certificates are not trusted by Desktop
- [#4190](https://github.com/unslothai/unsloth/issues/4190) TRL Version Bump
- [#7903](https://github.com/unslothai/unsloth/issues/7903) [Bug] Gemma 4 base models are missing <bos> token in tokenizer config
- [#10515](https://github.com/unslothai/unsloth/issues/10515) test_source_read_encoding fails on main: two read_text() calls in test_wheel_smoke_publish_guard.py have no encoding
- [#9337](https://github.com/unslothai/unsloth/issues/9337) [Bug] Stats dont seem to be refreshing correctly
- [#10436](https://github.com/unslothai/unsloth/issues/10436) [Bug] Studio "Tell the model today's date" overrides SYSTEM prompt in remote Ollama models
- [#10415](https://github.com/unslothai/unsloth/issues/10415) [Bug] [AMD/ROCm] Wan2.2 TI2V video generation OOM due to missing fused attention kernel / SDPA math fallback
- [#10468](https://github.com/unslothai/unsloth/issues/10468) AMD6950XT DOES NOT SUPPORT?
- [#10245](https://github.com/unslothai/unsloth/issues/10245) [Bug] Deep Research incomplete reports, leaking reasoning conversation onto report, etc

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,068 · **Open issues:** 381 · **Last push:** 1h ago

On September 9, 2026, there were no new releases for AIBrix, but several key pull requests were merged. Notable updates include the addition of unit tests for pod key helpers and random pod selection (PR #2685), support for a custom image pull policy (PR #2683), and improvements to the deployment detail and Playground's integration with real data (PR #2679). Additionally, PR #2624 addressed a bug to ensure that the status shown by kubectl get modeladapter is accurate. A couple of new issues were raised, with the most significant being a bug related to the PD router scoring prefill candidates based on stale data under concurrent requests (issue #2677).

#### ✅ Merged PRs
- [#2685](https://github.com/vllm-project/aibrix/pull/2685) [Misc] Add unit tests for pod key helpers and random pod selection
- [#2683](https://github.com/vllm-project/aibrix/pull/2683) [feat]support custom imagepullpolicy
- [#2679](https://github.com/vllm-project/aibrix/pull/2679) [Bug] Wire deployment detail and Playground to real data
- [#2678](https://github.com/vllm-project/aibrix/pull/2678) [Bug] Register PD prefill/decode selections atomically with the selection
- [#2624](https://github.com/vllm-project/aibrix/pull/2624) [Bug][API] Make kubectl get modeladapter show a truthful status

#### 🐛 New Issues
- [#2677](https://github.com/vllm-project/aibrix/issues/2677) [Bug] PD router scores prefill/decode candidates on a stale tracker snapshot under concurrent requests
- [#2680](https://github.com/vllm-project/aibrix/issues/2680) [RFC]: Token-weighted prefill load policies for the PD router (token_load, hybrid_cache_load) `area/gateway`

#### 🔒 Closed Issues
- [#2677](https://github.com/vllm-project/aibrix/issues/2677) [Bug] PD router scores prefill/decode candidates on a stale tracker snapshot under concurrent requests

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,672 · **Open issues:** 546 · **Last push:** <1h ago

On September 9, 2026, there were no new releases for the Semantic Router; however, a noteworthy feature merge includes PR #3531, which moves hallucination detection into a response-stage signal. Several new issues have been opened, with #3562 marking the start of a community workgroup focused on addressing project issues during the week, while critical bugs such as #3625 highlight tool-output compression corrupting JSON scalars. Additionally, feature requests have been made to add support for GPT-6 Astra across various platforms, reflecting ongoing enhancements aimed at improving model integration and performance.

#### ✅ Merged PRs
- [#3531](https://github.com/vllm-project/semantic-router/pull/3531) [Feature] Move hallucination detection into a response-stage signal

#### 🐛 New Issues
- [#3562](https://github.com/vllm-project/semantic-router/issues/3562) [Community] Workgroup Issues · 2026-09-07 – 2026-09-13 `community` `accepted` `owner/maintainers` 💬10
- [#3567](https://github.com/vllm-project/semantic-router/issues/3567) [Bug] Prefer better-covered intelligence evidence when routing quality scores tie `bug` `accepted` `in-progress` `wg/mom-routing` 💬4
- [#3625](https://github.com/vllm-project/semantic-router/issues/3625) [Bug] Tool-output compression corrupts JSON scalars: valid JSON in, invalid JSON out `bug` `accepted` `wg/agentic-context` 💬3
- [#3629](https://github.com/vllm-project/semantic-router/issues/3629) [Feature] Make the Model Hub table fill its container responsively `enhancement` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#3633](https://github.com/vllm-project/semantic-router/issues/3633) [Bug] main is red: catalog inventory assertion still expects 1365 evaluations `bug` `accepted` `wg/evaluation-quality` 💬2
- [#3577](https://github.com/vllm-project/semantic-router/issues/3577) [Feature] Define the v1.0 intelligence benchmark pool for standalone models and MoMs `enhancement` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#3615](https://github.com/vllm-project/semantic-router/issues/3615) [Feature] Batch-reconcile accepted issue labels from /accept comments `enhancement` `accepted` `in-progress` `owner/maintainers` 💬2
- [#3566](https://github.com/vllm-project/semantic-router/issues/3566) [Feature] Add a provider-bound PII masking plugin `enhancement` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#3613](https://github.com/vllm-project/semantic-router/issues/3613) [Feature] Add initial Groq production model mappings `enhancement` `accepted` `wg/data-plane-networking` `catalog` 💬2
- [#3564](https://github.com/vllm-project/semantic-router/issues/3564) [Feature] Add GPT-6 Astra to OpenRouter built-in support `enhancement` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#3563](https://github.com/vllm-project/semantic-router/issues/3563) [Feature] Add GPT-6 Astra to Azure OpenAI built-in support `enhancement` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#3565](https://github.com/vllm-project/semantic-router/issues/3565) [Feature] Reproduce GPT-6 Astra across the six core benchmarks `enhancement` `accepted` `wg/evaluation-quality` 💬1
- [#3622](https://github.com/vllm-project/semantic-router/issues/3622) [Bug] make run-router exits 2: three targets pass a flag deleted in #1660 `wg/developer-experience-ecosystem` 💬1
- [#3573](https://github.com/vllm-project/semantic-router/issues/3573) [Bug] `chat_template_kwargs` is rejected with 400 and silently dropped when the router rewrites the model `bug` `accepted` `wg/data-plane-networking` 💬1
- [#3610](https://github.com/vllm-project/semantic-router/issues/3610) [Feature] Add Cloudflare Workers AI as a built-in serving provider `enhancement` `accepted` `wg/data-plane-networking` `catalog` 💬1
- [#3612](https://github.com/vllm-project/semantic-router/issues/3612) [Feature] Add initial Fireworks AI serverless model mappings `enhancement` `accepted` `wg/data-plane-networking` `catalog` 💬1
- [#3609](https://github.com/vllm-project/semantic-router/issues/3609) [Feature] Add Databricks Foundation Model APIs as a built-in serving provider `enhancement` `accepted` `wg/data-plane-networking` `catalog` 💬1
- [#3611](https://github.com/vllm-project/semantic-router/issues/3611) [Feature] Add initial Together AI serverless model mappings `enhancement` `accepted` `wg/data-plane-networking` `catalog` 💬1
- [#3606](https://github.com/vllm-project/semantic-router/issues/3606) [Feature] Admit Writer / Palmyra to the built-in Model Card catalog `enhancement` `accepted` `wg/evaluation-quality` `catalog` 💬1
- [#3608](https://github.com/vllm-project/semantic-router/issues/3608) [Feature] Add Snowflake Cortex AI as a built-in serving provider `enhancement` `accepted` `wg/data-plane-networking` `catalog` 💬1
- [#3607](https://github.com/vllm-project/semantic-router/issues/3607) [Feature] Add IBM watsonx.ai as a built-in serving provider `enhancement` `accepted` `wg/data-plane-networking` `catalog` 💬1
- [#3605](https://github.com/vllm-project/semantic-router/issues/3605) [Feature] Admit Ai2 / OLMo to the built-in Model Card catalog `enhancement` `accepted` `wg/evaluation-quality` `catalog` 💬1
- [#3604](https://github.com/vllm-project/semantic-router/issues/3604) [Feature] Admit TII / Falcon to the built-in Model Card catalog `enhancement` `accepted` `wg/evaluation-quality` `catalog` 💬1
- [#3603](https://github.com/vllm-project/semantic-router/issues/3603) [Feature] Admit Shanghai AI Laboratory / Intern to the built-in Model Card catalog `enhancement` `accepted` `wg/evaluation-quality` `catalog` 💬1
- [#3602](https://github.com/vllm-project/semantic-router/issues/3602) [Feature] Admit Perplexity / Sonar to the built-in Model Card catalog `enhancement` `accepted` `wg/evaluation-quality` `catalog` 💬1
- [#3601](https://github.com/vllm-project/semantic-router/issues/3601) [Feature] Admit IBM / Granite to the built-in Model Card catalog `enhancement` `accepted` `wg/evaluation-quality` `catalog` 💬1
- [#3596](https://github.com/vllm-project/semantic-router/issues/3596) [Feature] Expand Thinking Machines Lab Model Cards and reproduced v1 benchmark coverage `enhancement` `accepted` `wg/evaluation-quality` `catalog` 💬1
- [#3599](https://github.com/vllm-project/semantic-router/issues/3599) [Feature] Expand xAI Model Cards and reproduced v1 benchmark coverage `enhancement` `accepted` `wg/evaluation-quality` `catalog` 💬1
- [#3598](https://github.com/vllm-project/semantic-router/issues/3598) [Feature] Expand Z.ai / GLM Model Cards and reproduced v1 benchmark coverage `enhancement` `accepted` `wg/evaluation-quality` `catalog` 💬1
- [#3597](https://github.com/vllm-project/semantic-router/issues/3597) [Feature] Expand Xiaomi Model Cards and reproduced v1 benchmark coverage `enhancement` `accepted` `wg/evaluation-quality` `catalog` 💬1
- [#3595](https://github.com/vllm-project/semantic-router/issues/3595) [Feature] Expand Tencent / Hunyuan Model Cards and reproduced v1 benchmark coverage `enhancement` `accepted` `wg/evaluation-quality` `catalog` 💬1
- [#3593](https://github.com/vllm-project/semantic-router/issues/3593) [Feature] Expand OpenAI Model Cards and reproduced v1 benchmark coverage `enhancement` `accepted` `wg/evaluation-quality` `catalog` 💬1
- [#3592](https://github.com/vllm-project/semantic-router/issues/3592) [Feature] Expand NVIDIA Model Cards and reproduced v1 benchmark coverage `enhancement` `accepted` `wg/evaluation-quality` `catalog` 💬1
- [#3641](https://github.com/vllm-project/semantic-router/issues/3641) [Bug] Hallucination detection skips the part of an answer past the 512-token window `needs-acceptance` `wg/router-models-inference-runtime`
- [#3630](https://github.com/vllm-project/semantic-router/issues/3630) [Feature] Add full-screen benchmark dialogs to the Model Hub `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`

#### 🔒 Closed Issues
- [#3565](https://github.com/vllm-project/semantic-router/issues/3565) [Feature] Reproduce GPT-6 Astra across the six core benchmarks
- [#3622](https://github.com/vllm-project/semantic-router/issues/3622) [Bug] make run-router exits 2: three targets pass a flag deleted in #1660
- [#3573](https://github.com/vllm-project/semantic-router/issues/3573) [Bug] `chat_template_kwargs` is rejected with 400 and silently dropped when the router rewrites the model

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*