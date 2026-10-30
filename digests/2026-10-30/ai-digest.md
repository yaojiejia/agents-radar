# 📡 AI Ecosystem Digest — 2026-10-30

> Generated 2026-10-30 02:25 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 153,876 | 24 | 1 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 131,579 | 21 | 1 | 43 | 1 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,618 | 0 | 0 | 9 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,309 | 10 | 9 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 223,082 | 23 | 22 | 7 | 4 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,816 | 15 | 12 | 1 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 393,384 | 226 | 167 | 161 | 2 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 258,539 | 22 | 1 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 95,869 | 29 | 16 | 22 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,368 | 11 | 5 | 57 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 132,785 | 11 | 14 | 28 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 185,261 | 9 | 5 | 2 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 62,329 | 27 | 24 | 119 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,770 | 14 | 5 | 127 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,167 | 4 | 3 | 5 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,329 | 18 | 10 | 0 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.314](https://github.com/anthropics/claude-code/releases/tag/v2.1.314), introducing various improvements and bug fixes.
- **OpenAI Codex** released version [rust-v0.166.0](https://github.com/openai/codex/releases/tag/rust-v0.166.0), enhancing performance and stability.
- **OpenClaw** saw significant issues with [Flaky tests](https://github.com/openclaw/openclaw/issues/187490) reported in the latest release, with 6 comments highlighting community concerns.
- **Ollama** received a high-traffic issue with [Restoring a Model to previous version](https://github.com/ollama/ollama/issues/19385), accumulating 14 comments and indicating urgent user needs.
- **AIBrix** raised attention due to the issue on [PodAutoscaler counting errors](https://github.com/vllm-project/aibrix/issues/3351), which has generated 4 comments discussing the impact on scaling.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 153,876 · **Open issues:** 16,052 · **Last push:** 1h ago

Today, Claude Code released version v2.1.314, introducing the `permissions.blockWritesOutsideWorkingDirectories` feature, which restricts write operations outside designated directories, as well as an optional `groups` list for upstreams in Claude apps gateway to limit developer access. Key improvements also included the addition of `guardrail_trace` for Bedrock upstreams. In terms of issues, a notable bug was reported under #106087, indicating that a plugin cannot recover its MCP server after startup failures due to a failure cache blocking new sessions. Other emerging issues included #106084, where constant safeguard security flagging was preventing basic questions from being processed.

#### 🚀 New Releases
- [v2.1.314](https://github.com/anthropics/claude-code/releases/tag/v2.1.314) v2.1.314

#### 🐛 New Issues
- [#106087](https://github.com/anthropics/claude-code/issues/106087) [BUG] Plugin can't recover its own MCP server after a startup failure: $.mcp.connect doesn't retry, failure cache then blocks new sessions `bug` `platform:windows` `area:mcp` `area:plugins` 💬1
- [#105894](https://github.com/anthropics/claude-code/issues/105894) [BUG] A user message that was never recorded appeared in the model's context `bug` `platform:macos` `area:core` 💬1
- [#106086](https://github.com/anthropics/claude-code/issues/106086) Desktop app: next-step box reply button sometimes fills the input instead of sending `bug` `platform:windows` `area:ui` `area:desktop`
- [#106085](https://github.com/anthropics/claude-code/issues/106085) Idle sessions loop on git ls-remote --tags against a local directory marketplace, ~1.5 cores each `bug` `has repro` `platform:macos` `perf:cpu`
- [#106084](https://github.com/anthropics/claude-code/issues/106084) [Bug] Constant safeguard security flagging blocks basic questions `bug` `platform:linux` `area:model` `area:security`
- [#106083](https://github.com/anthropics/claude-code/issues/106083) [Desktop] Transcript jumps when scrolling up past a message drawn by a mod's ui.render hook `bug` `has repro` `platform:windows` `area:plugins`
- [#106082](https://github.com/anthropics/claude-code/issues/106082) [Bug] False-Positive Biological Safeguard Prompts Switch to Opus 5 `bug` `platform:macos` `area:model`
- [#106081](https://github.com/anthropics/claude-code/issues/106081) [Desktop] Deliverables list opens script files as text only - users are told to double-click to run and paste secrets into them `enhancement` `platform:windows` `area:security` `area:ui`
- [#106080](https://github.com/anthropics/claude-code/issues/106080) [FEATURE] Ultracode "Auto": let Claude judge per prompt whether a workflow is worth it, and stay solo otherwise `enhancement` `area:core`
- [#106079](https://github.com/anthropics/claude-code/issues/106079) `$.store.set` throws "Lock file is already being held" when another session writes the same plugin store `bug` `has repro` `platform:macos` `area:plugins`
- [#106078](https://github.com/anthropics/claude-code/issues/106078) [BUG] Cowork (Linux): starting the Cowork QEMU/KVM VM instantly crashes every running VirtualBox VM on the host `bug` `has repro` `platform:linux` `area:cowork`
- [#106077](https://github.com/anthropics/claude-code/issues/106077) Bug Report: Accidentally Submitted Report, Request to Close `invalid`
- [#106076](https://github.com/anthropics/claude-code/issues/106076) [BUG] CLI session ended ~3 min after a prompt with no response; 3 background agents + 1 background shell task stopped, their completion notices never delivered; model silently changed from Fable 5.1 to Sonnet 5.5 on resume `bug` `platform:macos` `area:core` `area:agents`
- [#106075](https://github.com/anthropics/claude-code/issues/106075) Claude installed one project's hooks at user scope and in a shared parent folder, so every project and every session on the machine ran them for 15 days `bug` `platform:windows` `area:hooks` `model`
- [#106074](https://github.com/anthropics/claude-code/issues/106074) [BUG] [Claude Desktop] Tab on the slash-command menu runs the command (Windows and macOS) — /cl + Tab wipes the conversation via /clear `bug` `has repro` `platform:windows` `platform:macos`
- [#106073](https://github.com/anthropics/claude-code/issues/106073) [Bug] CTF Flag Not Retrieved `question` `platform:macos` `area:sandbox`
- [#106072](https://github.com/anthropics/claude-code/issues/106072) [BUG] Projects (beta): cloud threads finish their work but don't post the result until they receive another message `bug` `area:cowork` `platform:web`
- [#106071](https://github.com/anthropics/claude-code/issues/106071) [Feature Request] Include Fast Mode in Max Plan Usage Limits `enhancement` `platform:windows` `area:cost`
- [#106070](https://github.com/anthropics/claude-code/issues/106070) Feature request: opt-in way to let Claude type passwords and emailed login codes for my own accounts `enhancement` `area:security` `area:permissions`
- [#106069](https://github.com/anthropics/claude-code/issues/106069) [GitHub integration] `bug` `needs-info` `github-integration`
- [#106068](https://github.com/anthropics/claude-code/issues/106068) [FEATURE] Separate Cowork and Code configuration profiles in the Desktop app (skills, connectors, plugins) `enhancement` `area:mcp` `area:cowork` `area:skills`
- [#106067](https://github.com/anthropics/claude-code/issues/106067) [Bug] Model switches from 5.5 to Opus 4.8 during refactoring `bug` `platform:windows` `area:model` `needs-info`
- [#106066](https://github.com/anthropics/claude-code/issues/106066) There is an issue with the timings. Chat says it will renew by Let's say 01:00 … `invalid`
- [#106065](https://github.com/anthropics/claude-code/issues/106065) Not properly starting work when prompted by the project coordinator agent, and … `bug` `area:agents` `needs-info`

#### 🔒 Closed Issues
- [#106077](https://github.com/anthropics/claude-code/issues/106077) Bug Report: Accidentally Submitted Report, Request to Close

### OpenAI Codex (`openai/codex`)

**Stars:** 131,579 · **Open issues:** 25,581 · **Last push:** 1h ago

In the last 24 hours, OpenAI Codex released rust-v0.166.0, which introduced keyboard-driven transcript selection with customizable shortcuts, consistent Markdown rendering in async interactions, and the addition of GPT-6.1 Terra to the model catalogs for Vertex AI and Amazon Bedrock. Significant merged PRs included enhancements to chat accessibility across model provider changes and the centralization of TOML config deserialization. A prominent new issue reported involved a Windows desktop UI startup failure that affected several users following an update. Other notable concerns included persistent auto-review issues and cybersecurity-related false positives disrupting engineering work.

#### 🚀 New Releases
- [rust-v0.166.0](https://github.com/openai/codex/releases/tag/rust-v0.166.0) 0.166.0

#### ✅ Merged PRs
- [#58202](https://github.com/openai/codex/pull/58202) Keep chats accessible across model provider changes
- [#58198](https://github.com/openai/codex/pull/58198) Centralize TOML config deserialization
- [#58196](https://github.com/openai/codex/pull/58196) Require Bazel release artifacts and publish DotSlash manifests
- [#58195](https://github.com/openai/codex/pull/58195) Preserve remote read compatibility with older executors
- [#58190](https://github.com/openai/codex/pull/58190) Allow providers to opt into Cyber access programs
- [#58189](https://github.com/openai/codex/pull/58189) Use turn-scoped permissions for standalone web search
- [#58182](https://github.com/openai/codex/pull/58182) Support managed network requirements under `permissions.network`
- [#58172](https://github.com/openai/codex/pull/58172) Validate trace completion records and payload UTF-8 during replay
- [#58171](https://github.com/openai/codex/pull/58171) Stabilize cancellation and tracing tests
- [#58168](https://github.com/openai/codex/pull/58168) Create missing parent directories for MXC deny paths on Windows
- [#58166](https://github.com/openai/codex/pull/58166) Make rollout recording failures and completion explicit
- [#58165](https://github.com/openai/codex/pull/58165) Keep remote plugin bundle URLs out of diagnostics
- [#58161](https://github.com/openai/codex/pull/58161) Include tool names and annotation hints in MCP approval metadata
- [#58159](https://github.com/openai/codex/pull/58159) Add a feature flag for code-mode host output truncation
- [#58157](https://github.com/openai/codex/pull/58157) Expose system proxy support as an experimental setting
- [#58147](https://github.com/openai/codex/pull/58147) Return standalone web search failures to the model
- [#58144](https://github.com/openai/codex/pull/58144) Record additional context counts, sizes, and truncation metrics
- [#58140](https://github.com/openai/codex/pull/58140) Route standalone web search through the thread's workspace context
- [#58134](https://github.com/openai/codex/pull/58134) Prefer documented replacements for deprecation-driven model migrations
- [#58130](https://github.com/openai/codex/pull/58130) Support pasted search text in the skills toggle view
- [#58129](https://github.com/openai/codex/pull/58129) Persist subagent relationships before creating child storage
- [#58127](https://github.com/openai/codex/pull/58127) Honor the tooltip preference for TUI startup help
- [#58125](https://github.com/openai/codex/pull/58125) Support negotiated server-side truncation in Code Mode clients
- [#58123](https://github.com/openai/codex/pull/58123) Add validated elastic section budget configuration for Guardian
- [#58122](https://github.com/openai/codex/pull/58122) Add an incremental exec tools feature flag
- [#58121](https://github.com/openai/codex/pull/58121) Centralize provider request preparation auth checks
- [#58119](https://github.com/openai/codex/pull/58119) Add experimental Guardian review for injected thread commands
- [#58110](https://github.com/openai/codex/pull/58110) Ignore RUSTSEC-2026-0418 for the Windows-only libz-sys dependency
- [#58091](https://github.com/openai/codex/pull/58091) Update default models for memory extraction and consolidation
- [#58083](https://github.com/openai/codex/pull/58083) Use a dedicated binary for Bazel schema generation
- [#58075](https://github.com/openai/codex/pull/58075) Use serving assessments for adaptive Guardian review
- [#58071](https://github.com/openai/codex/pull/58071) Share the Guardian context delivery token limit
- [#58057](https://github.com/openai/codex/pull/58057) Initialize `native_call` in agent host test fixtures
- [#58045](https://github.com/openai/codex/pull/58045) Add managed command checkpoints requiring fresh human approval
- [#58040](https://github.com/openai/codex/pull/58040) Preserve native tool-call evidence through Guardian review
- [#58034](https://github.com/openai/codex/pull/58034) Add an option to disable successful SSE delta logs
- [#58028](https://github.com/openai/codex/pull/58028) Add direct Guardian review of recorded exec calls
- [#58025](https://github.com/openai/codex/pull/58025) Add trace-safe diagnostics for Noise relay request progress
- [#58013](https://github.com/openai/codex/pull/58013) Fix argument comment lint tests after rust-clippy branch rename
- [#57985](https://github.com/openai/codex/pull/57985) Skip read-only volume-root expansion in the MXC sandbox
- [#57978](https://github.com/openai/codex/pull/57978) Add per-chat leases for shared MCP connections
- [#57974](https://github.com/openai/codex/pull/57974) Apply session plugin overrides during MCP config refresh
- [#57970](https://github.com/openai/codex/pull/57970) Add an experimental UI tree renderer for the status line

#### 🐛 New Issues
- [#58150](https://github.com/openai/codex/issues/58150) [Windows][VS Code] UI startup failure on 26.1021.22027; account requests and feedback fail on 26.1007.21434 `bug` `windows-os` `extension` `connectivity` 💬4
- [#58080](https://github.com/openai/codex/issues/58080) Windows desktop: auto-review still cites earlier read-only scope after direct in-chat authorization `bug` `windows-os` `sandbox` `app` 💬2
- [#58216](https://github.com/openai/codex/issues/58216) How to get Codex to show me the diff -> CR it -> apply `enhancement` `sandbox` `CLI` 💬1
- [#58201](https://github.com/openai/codex/issues/58201) [Windows desktop] After update, Settings shows Ultra but Astra chat slider stops at Extra High; configuration toggle unavailable `bug` `windows-os` `app` `config` 💬1
- [#58215](https://github.com/openai/codex/issues/58215) Fullsvreen Chatgpt Desktop Glitch `bug` `app` `pets` 💬1
- [#58115](https://github.com/openai/codex/issues/58115) sandboxing & rmcp-client: scoped unreadable directory globs omit (/.*)?$ subtree suffix in Seatbelt and bracketed [::1] OAuth callback binds 0.0.0.0 `bug` `auth` `mcp` `sandbox` 💬1
- [#58209](https://github.com/openai/codex/issues/58209) Suspected cybersecurity false positive repeatedly blocks ordinary engineering work and leaves Goal stalled `bug` `windows-os` `CLI` `safety-check` 💬1
- [#58204](https://github.com/openai/codex/issues/58204) Windows 26.1023: local projects disappear while SQLite retains 67 project records; restart does not reconcile catalog `bug` `windows-os` `app` `session` 💬1
- [#58193](https://github.com/openai/codex/issues/58193) [Bug] Pasting multiline text automatically submits multiple messages instead of inserting text `bug` `windows-os` `TUI` `CLI` 💬1
- [#58199](https://github.com/openai/codex/issues/58199) macOS Work: pasted images repeatedly inaccessible with GPT-6.1 Terra, readable with GPT-6.1 Sol `bug` `app` 💬1
- [#58217](https://github.com/openai/codex/issues/58217) chatgpt-win-bug-report `bug` `windows-os` `app` `performance`
- [#58214](https://github.com/openai/codex/issues/58214) Exec-policy approval response can persist a prefix different from the offered amendment `bug` `sandbox` `app-server`
- [#58213](https://github.com/openai/codex/issues/58213) Windows Desktop apply_patch rejects C: workspace symlink while effective writable root is D: `bug` `windows-os` `sandbox` `tool-calls`
- [#58212](https://github.com/openai/codex/issues/58212) Chrome @ tab references omit ordinary pages on chatgpt.com and learn.chatgpt.com `bug` `app` `browser`
- [#58211](https://github.com/openai/codex/issues/58211) Feature request: verifiable, scoped approval handoff from Codex Desktop to a local child process `enhancement` `windows-os` `app` `app-server`
- [#58210](https://github.com/openai/codex/issues/58210) [Windows][26.1027.3384.0] Regression: cannot open large HTML files in Codex desktop after update `bug` `windows-os` `app`
- [#58208](https://github.com/openai/codex/issues/58208) Feature request: Enable and disable MCP servers from /mcp `enhancement` `mcp` `TUI` `CLI`
- [#58207](https://github.com/openai/codex/issues/58207) [Windows] Blank main content after minimize/restore on mixed-DPI dual monitors — fixed by disabling NativeWinOcclusion `bug` `windows-os` `app`
- [#58206](https://github.com/openai/codex/issues/58206) [macOS][Chrome Browser Use] Reacquiring a background tab resets native focus behavior across turns `bug` `app` `browser`
- [#58205](https://github.com/openai/codex/issues/58205) [macOS] Desktop shows crash recovery page prompting Retry or Update ChatGPT when returning in the morning `bug` `app`
- [#58203](https://github.com/openai/codex/issues/58203) codex ui bug `bug` `TUI` `CLI`

#### 🔒 Closed Issues
- [#58199](https://github.com/openai/codex/issues/58199) macOS Work: pasted images repeatedly inaccessible with GPT-6.1 Terra, readable with GPT-6.1 Sol

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,618 · **Open issues:** 771 · **Last push:** 1h ago

On October 30, 2026, Gemini CLI released version v0.67.0-nightly.20261030.gb633c0703, which includes clarifications in the README regarding the tool's scope and limitations, a fix for inline history re-rendering based on terminal width changes, and improvements in handling surrogate pairs during display sanitization. Significant merged PRs include the implementation of a loading indicator to manage 429 rate limits, a refactor to decouple ToolGroupMessage from internal structures, and fixes addressing unexpected truncation behavior and instances of incorrect newline escape behavior in the CLI. The core functionality also saw enhancements, such as a fallback procedure for Windows IDE process lookup. Notably, no new issues were reported today, indicating a stable development environment.

#### 🚀 New Releases
- [v0.67.0-nightly.20261030.gb633c0703](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261030.gb633c0703) Release v0.67.0-nightly.20261030.gb633c0703

#### ✅ Merged PRs
- [#30012](https://github.com/google-gemini/gemini-cli/pull/30012) fix(cli): surface 429 rate limit cool-down and countdown in loading indicator
- [#30031](https://github.com/google-gemini/gemini-cli/pull/30031) fix(core): gate background log stream initialization on execution lifecycle transition
- [#30041](https://github.com/google-gemini/gemini-cli/pull/30041) refactor(cli): decouple ToolGroupMessage from internal type guards and payload structures
- [#29965](https://github.com/google-gemini/gemini-cli/pull/29965) fix(cli): Fixes unexpected truncation and toggle behavior in Expandab…
- [#30035](https://github.com/google-gemini/gemini-cli/pull/30035) fix(core): prevent $-pattern corruption in LLM prompt templates
- [#30023](https://github.com/google-gemini/gemini-cli/pull/30023) fix(ci,sdk): run SDK tests in PR CI and fix AgentLoopContext mock in session.test.ts
- [#30013](https://github.com/google-gemini/gemini-cli/pull/30013) fix(cli): anchor .git suffix removal to end of repo URL
- [#30006](https://github.com/google-gemini/gemini-cli/pull/30006) fix(core): use PowerShell CIM fallback for Windows IDE process lookup
- [#29989](https://github.com/google-gemini/gemini-cli/pull/29989) fix(core,cli): fix instances of incorrect \n escape behavior

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,309 · **Open issues:** 2,187 · **Last push:** 2d ago

On October 30, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI. The day saw the introduction of several new issues, including the notable #5290, which addresses a missing --fusion-tier argument, and #5293, highlighting that session/prompt responses are held until an async bash shell exits, causing client delays. Additionally, users reported issues with internal server errors during provisioning in #5289 and a regression in the /copy command as seen in #5288. Other emerging concerns include inability to configure keybindings and problems operating in sandbox mode, indicating ongoing challenges that may require attention in future updates. Overall, it was a routine maintenance day with a focus on emerging issues rather than significant development activity.

#### 🐛 New Issues
- [#5290](https://github.com/github/copilot-cli/issues/5290) missing --fusion-tier argument `triage` 💬1
- [#5293](https://github.com/github/copilot-cli/issues/5293) ACP: session/prompt response is held until an async bash shell exits, so clients appear stuck `triage`
- [#5292](https://github.com/github/copilot-cli/issues/5292) Automatic compaction repeatedly times out at 300s until sessions hit the hard context limit (1.0.91) `triage`
- [#5291](https://github.com/github/copilot-cli/issues/5291) Allow users to configure the shift+enter keybind to behave as submit rather than newline `triage`
- [#5289](https://github.com/github/copilot-cli/issues/5289) copilot --cloud fails immediately while provisioning: internal server error `triage`
- [#5288](https://github.com/github/copilot-cli/issues/5288) /copy command regression `triage`
- [#5287](https://github.com/github/copilot-cli/issues/5287) Publish schema for `providers.json` `triage`
- [#5286](https://github.com/github/copilot-cli/issues/5286) Unable to use gh in sandbox mode for enterprise setup `triage`
- [#5285](https://github.com/github/copilot-cli/issues/5285) cli cannot interact with sandbox `area:permissions` `area:enterprise` `area:platform-windows`
- [#5284](https://github.com/github/copilot-cli/issues/5284) MCP OAuth: expired dynamic client registration is reused forever (invalid_client), no re-registration `area:mcp`

#### 🔒 Closed Issues
- [#4851](https://github.com/github/copilot-cli/issues/4851) Azure MCP server fails sending HTTP request
- [#4710](https://github.com/github/copilot-cli/issues/4710) Runaway copilot-file-search thread consumes CPU and unbounded disk while session is idle
- [#4613](https://github.com/github/copilot-cli/issues/4613) High-severity 1.0.80+ regression: MCP schemas are eagerly injected, adding 354K startup tokens
- [#5058](https://github.com/github/copilot-cli/issues/5058) Datadog MCP (mcp.datadoghq.com) OAuth token exchange fails: invalid_grant
- [#5061](https://github.com/github/copilot-cli/issues/5061) Copilot CLI 1.0.92 rejects standard Entra api:// scopes for remote MCP servers
- [#4571](https://github.com/github/copilot-cli/issues/4571) Compaction is triggered at 50% with GPT-5.6 Luna Max
- [#3864](https://github.com/github/copilot-cli/issues/3864) Plugin cache_path stored as absolute path breaks in Docker/multi-HOME environments
- [#5056](https://github.com/github/copilot-cli/issues/5056) The new color theme introduced in October is a regression (accessibility/readability) to the one used in September
- [#5229](https://github.com/github/copilot-cli/issues/5229) ACP mode: expired MCP OAuth access token opens the browser authorization page instead of using the stored refresh token

### OpenCode (`anomalyco/opencode`)

**Stars:** 223,082 · **Open issues:** 3,802 · **Last push:** <1h ago

On October 30, 2026, OpenCode released version 2.2.2, introducing default image generation capabilities for agents when a connected provider supports image models, along with faster worktree selection on the new-session screen. Version 2.2.1 followed closely with enhancements like goal progress tracking that allows sessions to continue until objectives are met, and an experimental image generation feature. Significant merged pull requests included updates to the TUI design and critical fixes for issues related to typed tools, dynamic provider handling, and console behavior. However, a notable new issue emerged with version 2.2.2, where the side panel tabs cannot be closed and new tab launchers ignore clicks, indicating a regression that is currently causing frustration among users.

#### 🚀 New Releases
- [v2.2.2](https://github.com/anomalyco/opencode/releases/tag/v2.2.2) v2.2.2
- [v2.2.1](https://github.com/anomalyco/opencode/releases/tag/v2.2.1) v2.2.1
- [process-daemon-v0.4.0](https://github.com/anomalyco/opencode/releases/tag/process-daemon-v0.4.0) process-daemon v0.4.0
- [process-daemon-v0.3.3](https://github.com/anomalyco/opencode/releases/tag/process-daemon-v0.3.3) process-daemon v0.3.3

#### ✅ Merged PRs
- [#60393](https://github.com/anomalyco/opencode/pull/60393) feat(tui): mark the selected composer suggestion under new designs
- [#60390](https://github.com/anomalyco/opencode/pull/60390) fix(ai): accept typed tools in loop
- [#60380](https://github.com/anomalyco/opencode/pull/60380) fix(core): run dynamic provider npm fallback after external sdk hooks
- [#60397](https://github.com/anomalyco/opencode/pull/60397) fix(console): use default OG image on /go
- [#60327](https://github.com/anomalyco/opencode/pull/60327) test(app): mock persistent pty routes
- [#60376](https://github.com/anomalyco/opencode/pull/60376) fix(core): check redirects, PowerShell method calls, and dynamic directory changes
- [#60323](https://github.com/anomalyco/opencode/pull/60323) refactor(client): share the persistent pty protocol

#### 🐛 New Issues
- [#60381](https://github.com/anomalyco/opencode/issues/60381) desktop: side panel tabs can't be closed and New tab launchers ignore clicks (2.2.2 regression) 💬4
- [#60422](https://github.com/anomalyco/opencode/issues/60422) ECONNRESET on built-in Zen provider — works with VPN, fails without (same network, no rate-limit JSON) `pending close` `triaging` 💬2
- [#60398](https://github.com/anomalyco/opencode/issues/60398) Copy button does not work for user messages in sessions 💬2
- [#60297](https://github.com/anomalyco/opencode/issues/60297) console: free usage limit never resets across days and quota is undocumented `pending close` `triaging` 💬2
- [#60410](https://github.com/anomalyco/opencode/issues/60410) config: a project experimental block hides every global experimental option (fields are not merged) `reproduced` 💬2
- [#60413](https://github.com/anomalyco/opencode/issues/60413) client: a permanent 404 SessionNotFoundError is retried indefinitely with exponential backoff (one id: 94 requests / 43 min) 💬2
- [#60412](https://github.com/anomalyco/opencode/issues/60412) reached free limit without agent build anything??? `pending close` `triaging` 💬2
- [#60409](https://github.com/anomalyco/opencode/issues/60409) OpenCode falsely claiming no messages left when reset has literally just happened `pending close` `triaging` 💬2
- [#60285](https://github.com/anomalyco/opencode/issues/60285) OpenCode is not responding. `triaging` 💬2
- [#60427](https://github.com/anomalyco/opencode/issues/60427) websearch: random-mode caches provider that silently returns 0 results; no re-roll and no selectable provider route `pending close` `triaging` 💬1
- [#60426](https://github.com/anomalyco/opencode/issues/60426) Usage limit hit fast `pending close` `triaging` 💬1
- [#60424](https://github.com/anomalyco/opencode/issues/60424) agent: unintended skill(report) call at end of subagent completion 💬1
- [#60423](https://github.com/anomalyco/opencode/issues/60423) 任务是否结束的表示不明确 `triaging` 💬1
- [#60421](https://github.com/anomalyco/opencode/issues/60421) [Bug]: opencode-cli darwin-x64 crashes with SIGILL on pre-AVX Intel Macs (SSE4.2+POPCNT present; baseline build does not help) 💬1
- [#60420](https://github.com/anomalyco/opencode/issues/60420) 2.2.2版本内置浏览器 `pending close` `triaging` 💬1
- [#60419](https://github.com/anomalyco/opencode/issues/60419) Free usage limit reached despite zero usage shown (OpenCode 2.2.x) `pending close` `triaging` 💬1
- [#60418](https://github.com/anomalyco/opencode/issues/60418) [FEATURE]:language `pending close` `triaging` 💬1
- [#60417](https://github.com/anomalyco/opencode/issues/60417) The usage limit is extremely broken or is extremely unreasonable. `pending close` `triaging` 💬1
- [#60415](https://github.com/anomalyco/opencode/issues/60415) [FEATURE]: Make OpenCode TUI terminal title format configurable (drop the hardcoded 'OC |' prefix) 💬1
- [#60411](https://github.com/anomalyco/opencode/issues/60411) [FEATURE]: Report done and error over OSC 7501 for unread sessions 💬1
- [#60405](https://github.com/anomalyco/opencode/issues/60405) 没有免费额度 `pending close` `triaging` 💬1
- [#60402](https://github.com/anomalyco/opencode/issues/60402) Keeps on retrying multiple times `triaging` 💬1
- [#60399](https://github.com/anomalyco/opencode/issues/60399) cli: hangs before sending request on networks that drop fragmented TLS ClientHello (post-quantum key share) `reproduced` 💬1

#### 🔒 Closed Issues
- [#2999](https://github.com/anomalyco/opencode/issues/2999) Provide means to disable Ctrl-C
- [#33356](https://github.com/anomalyco/opencode/issues/33356) Unbounded growth of the `event` table: opencode.db reaches 13GB+, mostly `message.updated.1` snapshots (no retention/compaction)
- [#32149](https://github.com/anomalyco/opencode/issues/32149) Opencode Stops Processing Requests Without Response
- [#3176](https://github.com/anomalyco/opencode/issues/3176) Why is OpenCode massively abusing git?
- [#18654](https://github.com/anomalyco/opencode/issues/18654) [FEATURE]: To be able to remove or change email in OpenCode Zen
- [#6330](https://github.com/anomalyco/opencode/issues/6330) [FEATURE]: Generic UI Intent Channel for cross-client plugin-driven UX
- [#16626](https://github.com/anomalyco/opencode/issues/16626) [FEATURE]: add session.stopping plugin hook to allow re-entering the agent loop
- [#45417](https://github.com/anomalyco/opencode/issues/45417) Session cost excludes subagent cost (TUI sidebar, opencode stats, /export)
- [#26602](https://github.com/anomalyco/opencode/issues/26602) Desktop hits 5-minute Headers Timeout Error with slow local providers
- [#34207](https://github.com/anomalyco/opencode/issues/34207) Model selection silently reverts after answering a question
- [#16875](https://github.com/anomalyco/opencode/issues/16875) RTL language support (Persian/Arabic) - characters appear reversed and disconnected
- [#31554](https://github.com/anomalyco/opencode/issues/31554) MCP servers spawn 2-4 duplicate processes per server on startup, causing TasksMax exhaustion and EAGAIN errors
- [#27995](https://github.com/anomalyco/opencode/issues/27995) [FEATURE]: Agent Activity Panel -- sidebar view for monitoring running background agents
- [#60080](https://github.com/anomalyco/opencode/issues/60080) Instantly depleted free messages after sending a message shortly after they reset.
- [#60078](https://github.com/anomalyco/opencode/issues/60078) free messages aren't recharging
- [#60064](https://github.com/anomalyco/opencode/issues/60064) The 24-hour limit doesn't disappear even on v2.2.0!
- [#60062](https://github.com/anomalyco/opencode/issues/60062) [Bug] Free messages reset timer incorrectly adds 24 hours (+1 day)
- [#60076](https://github.com/anomalyco/opencode/issues/60076) [Zen/Go] `iceman-contributor-free`: any turn following a tool result fails with 422 "Endpoint is unavailable"
- [#42788](https://github.com/anomalyco/opencode/issues/42788) Plugin aisdk "sdk" hooks never run when the provider package is not on npm
- [#60068](https://github.com/anomalyco/opencode/issues/60068) worktree: worktree_create can pick a different clone of the same remote
- [#60059](https://github.com/anomalyco/opencode/issues/60059) desktop: MCP servers leak a full process set on every app reconnect, and never respawn after a child dies
- [#60402](https://github.com/anomalyco/opencode/issues/60402) Keeps on retrying multiple times

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,816 · **Open issues:** 2,058 · **Last push:** <1h ago

On October 30, 2026, Qwen Code released version 0.26.4, featuring enhancements like the Generated UI's ability to follow the host theme and a bounded autofix takeover in CI. The nightly release 0.26.4-nightly.20261029 introduced bounded SQL history queries and set Generated UI to turn on by default for improved user experience. Additionally, a major refactor was merged, removing persisted public message snapshots to streamline functionality. Among the new issues, #15861 reported a timeout on the Add Workspace dialog's web-shell host-directory-picker, indicating areas for urgent attention.

#### 🚀 New Releases
- [v0.26.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.4) Release v0.26.4
- [v0.26.4-nightly.20261029.70be140e14](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.4-nightly.20261029.70be140e14) Release v0.26.4-nightly.20261029.70be140e14
- [sdk-typescript-v0.1.26](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.26) SDK TypeScript Release v0.1.26
- [desktop-v0.26.4](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.26.4) Qwen Code Desktop v0.26.4

#### ✅ Merged PRs
- [#15870](https://github.com/QwenLM/qwen-code/pull/15870) refactor(managed): Remove persisted public message snapshots

#### 🐛 New Issues
- [#15861](https://github.com/QwenLM/qwen-code/issues/15861) ci(smoke): web-shell host-directory-picker smoke times out on Add Workspace dialog, PR-independent `priority/P1` `type/bug` `category/development` `scope/testing` 💬3
- [#15855](https://github.com/QwenLM/qwen-code/issues/15855) contextWindowSize gets automatically removed `status/need-information` `priority/P1` `type/bug` `category/configuration` 💬3
- [#15895](https://github.com/QwenLM/qwen-code/issues/15895) Deferred review findings from PR #15888: fix(ci): partition the complete macOS test suite into bounded jobs `priority/P3` `status/blocked` `type/bug` `category/development` 💬2
- [#15894](https://github.com/QwenLM/qwen-code/issues/15894) bug(loop): a stop sent as a user message does not cancel the pending loop_wakeup — self-paced /loop resumes itself after an explicit stop (0.26.1) `priority/P2` `type/bug` `category/core` `scope/session-management` 💬2
- [#15877](https://github.com/QwenLM/qwen-code/issues/15877) Web Shell remote daemon connection requires unclear listener and origin setup `priority/P2` `type/bug` `category/authentication` `scope/documentation` 💬2
- [#15875](https://github.com/QwenLM/qwen-code/issues/15875) SDK stream-json: text snapshot changes message id after thinking without a new message_start `priority/P2` `type/bug` `category/cli` `scope/non-interactive` 💬2
- [#15869](https://github.com/QwenLM/qwen-code/issues/15869) Review request: #14348 (base) and #15450 (stacked outbound media) have had no maintainer activity for 3 days `category/integration` `status/ready-for-human` `need-discussion` 💬2
- [#15867](https://github.com/QwenLM/qwen-code/issues/15867) bug(web-shell): align No-workspace sessions header with peer sidebar categories `priority/P3` `type/bug` `category/ui` `scope/session-management` 💬2
- [#15866](https://github.com/QwenLM/qwen-code/issues/15866) Web Shell: show Export and Restore inline on archived session rows `priority/P3` `type/feature-request` `category/ui` `scope/session-management` 💬2
- [#15847](https://github.com/QwenLM/qwen-code/issues/15847) release: select ossutil by runner architecture so the OSS mirrors can leave the hosted queue `priority/P2` `category/development` `scope/ci-cd` `type/enhancement` 💬2
- [#15844](https://github.com/QwenLM/qwen-code/issues/15844) Main CI failed: Managed Agent gate — WorkspaceCsiNativeActivationRenewalMySqlIT.lateJournalFailureRollsBackPinVersionHeadAndOriginalResourceReference (MySQL CHECK 3819/HY000 unmapped) `status/in-review` `priority/P1` `type/bug` `category/development` 💬2
- [#15840](https://github.com/QwenLM/qwen-code/issues/15840) release: VSCode/Chrome release notifiers file issues on cancellation and never close them after a passing re-run `priority/P2` `type/bug` `category/development` `scope/github-actions` 💬2
- [#15833](https://github.com/QwenLM/qwen-code/issues/15833) Cancelling a running shell command tells the model "The tool had already completed" although the command was killed `priority/P2` `type/bug` `category/core` `scope/interactive` 💬2
- [#15893](https://github.com/QwenLM/qwen-code/issues/15893) Main CI failed: Managed Agent gate — Issue13180InternalPortTest.eachSurfaceAnswersOnlyOnItsOwnListener (+56 more) `status/needs-triage` `type/bug`
- [#15892](https://github.com/QwenLM/qwen-code/issues/15892) Main CI failed: SDK Java — EventTransportMultiNodeGate.theFleetRollsTheFlagBackAndForth (+50 more) `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#15739](https://github.com/QwenLM/qwen-code/issues/15739) Main CI failed: E2E Tests — cli/workflow-mode.test.ts > … > rejects unavailable on before any provider request (+1 more)
- [#13175](https://github.com/QwenLM/qwen-code/issues/13175) Web Shell: keyboard shortcuts for Session Overview and Split View
- [#11878](https://github.com/QwenLM/qwen-code/issues/11878) Session Overview table never shows no-workspace (standalone) sessions, and even if it did, the row would open in the wrong context
- [#14620](https://github.com/QwenLM/qwen-code/issues/14620) Web Shell: floating approval card shows two nested scrollbars on file diffs
- [#13391](https://github.com/QwenLM/qwen-code/issues/13391) Web Shell: ru locale for Goal card labels + Goal verdict should inherit user output language
- [#12690](https://github.com/QwenLM/qwen-code/issues/12690) feat(desktop): extend the PATH of the daemon shell the Desktop spawns on macOS
- [#7959](https://github.com/QwenLM/qwen-code/issues/7959) Qwen 3.5 0.8b repeats inself into infinity
- [#15664](https://github.com/QwenLM/qwen-code/issues/15664) verify-pr: compare the report head OID against the round's own snapshot
- [#15793](https://github.com/QwenLM/qwen-code/issues/15793) Provider selection text overlaps in short terminals
- [#15735](https://github.com/QwenLM/qwen-code/issues/15735) Main CI failed: Desktop Checks — Desktop Checks > … > Run actions/checkout@df4cb1c069e1874edd31b4311f1884172cec0e10
- [#10511](https://github.com/QwenLM/qwen-code/issues/10511) Deferred review findings from PR #10455
- [#15804](https://github.com/QwenLM/qwen-code/issues/15804) VSCode IDE Companion Release Failed for 0.26.3 on 2026-10-28

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1245](https://github.com/anthropics/skills/pull/1245) Add notion-spec-to-implementation and quantitative-resume-auditor skills
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 393,384 · **Open issues:** 7,877 · **Last push:** <1h ago

On October 30, 2026, OpenClaw released version 2026.10.9, which patched several vulnerable runtime dependencies, ensuring improved security and reliability in handling malformed URI schemes, oversized collections in A2UI, and enhanced parsing for IMAP senders through updated libraries. Additionally, version 2026.9.36 was published as a gateway-only extended-stable release that focuses on critical security updates and new model support. Significant merged pull requests included fixes for preserving RFB stream ownership, ensuring appropriate updates in registry observations, and resolving memory overhead issues in transcript stats workers. Among the newly reported issues, a prominent concern was raised regarding a bug where the upgrade to 2026.10.9 only healed one of twelve tombstoned main sessions, leaving the others inoperable.

#### 🚀 New Releases
- [v2026.10.9](https://github.com/openclaw/openclaw/releases/tag/v2026.10.9) openclaw 2026.10.9
- [v2026.9.36](https://github.com/openclaw/openclaw/releases/tag/v2026.9.36) openclaw 2026.9.36

#### ✅ Merged PRs
- [#187417](https://github.com/openclaw/openclaw/pull/187417) fix(test): preserve RFB stream finalization ownership
- [#188021](https://github.com/openclaw/openclaw/pull/188021) fix(update): exclude resolved captures from recovery ambiguity
- [#188035](https://github.com/openclaw/openclaw/pull/188035) refactor(tests): share standalone metadata minification
- [#188024](https://github.com/openclaw/openclaw/pull/188024) fix(update): report failed scheduled registry observations
- [#188034](https://github.com/openclaw/openclaw/pull/188034) fix(update): retain authority through fallback publication
- [#188003](https://github.com/openclaw/openclaw/pull/188003) fix(msteams): match canonically equivalent names in live directory search
- [#187998](https://github.com/openclaw/openclaw/pull/187998) fix(update): preserve cancellation after ledger writes are deferred
- [#187942](https://github.com/openclaw/openclaw/pull/187942) fix(memory): reduce transcript stats worker overhead
- [#187409](https://github.com/openclaw/openclaw/pull/187409) fix(test): distinguish terminal escaping from JSON detail
- [#188017](https://github.com/openclaw/openclaw/pull/188017) fix: avoid duplicate dividers in session Advanced menu
- [#188036](https://github.com/openclaw/openclaw/pull/188036) chore(ui): refresh control ui locales
- [#188014](https://github.com/openclaw/openclaw/pull/188014) fix(ios): wait for host headroom before screenshot boot
- [#188010](https://github.com/openclaw/openclaw/pull/188010) fix(update): retry installation discovery after returned failures
- [#188023](https://github.com/openclaw/openclaw/pull/188023) fix: stop Code Mode after tool reply decoding runs out of memory
- [#188015](https://github.com/openclaw/openclaw/pull/188015) fix(update): retain run watching across transient ledger failures
- [#178226](https://github.com/openclaw/openclaw/pull/178226) improve: let chat drafts grow and resize message width from the border
- [#187980](https://github.com/openclaw/openclaw/pull/187980) fix: open retained managed files from chat links
- [#187896](https://github.com/openclaw/openclaw/pull/187896) fix: retain document context after sandbox setup failure
- [#187989](https://github.com/openclaw/openclaw/pull/187989) fix: keep slow history reads from blocking transcript writes
- [#187988](https://github.com/openclaw/openclaw/pull/187988) fix(ui): match canonical Unicode in place browser folder filter
- [#188001](https://github.com/openclaw/openclaw/pull/188001) refactor(test): share Doctor migration fixture calls
- [#188011](https://github.com/openclaw/openclaw/pull/188011) chore(ci): share setup for two selected type graphs
- [#187999](https://github.com/openclaw/openclaw/pull/187999) fix: show workspace SVG previews with generic text metadata
- [#187990](https://github.com/openclaw/openclaw/pull/187990) refactor(perf): reuse canonical heap sampling startup
- [#188005](https://github.com/openclaw/openclaw/pull/188005) fix(install): keep --beta on a fresh host instead of silently installing stable
- [#187966](https://github.com/openclaw/openclaw/pull/187966) fix: apply configuration when an unrelated older service is installed
- [#187981](https://github.com/openclaw/openclaw/pull/187981) fix: keep Doctor rehearsal fixtures until workers settle
- [#187992](https://github.com/openclaw/openclaw/pull/187992) test(lint): accept canonical Bun rule labels
- [#187993](https://github.com/openclaw/openclaw/pull/187993) chore(ui): refresh control ui locales
- [#187983](https://github.com/openclaw/openclaw/pull/187983) fix: metadata read test times out during shutdown
- [#187953](https://github.com/openclaw/openclaw/pull/187953) fix(channels): searches miss canonically equivalent Unicode
- [#187451](https://github.com/openclaw/openclaw/pull/187451) fix(projects): retry project listing reads that race a change
- [#187965](https://github.com/openclaw/openclaw/pull/187965) fix(slack): visible spawn completion opens a thread under a top-level request
- [#187979](https://github.com/openclaw/openclaw/pull/187979) fix: restore broad-read denial in guest handoff test
- [#187959](https://github.com/openclaw/openclaw/pull/187959) fix(cron): retry busy trigger checks before the next scheduled occurrence
- [#187717](https://github.com/openclaw/openclaw/pull/187717) fix(git): refresh cached diffs across clock changes
- [#187968](https://github.com/openclaw/openclaw/pull/187968) fix: align profiled Doctor publication fixture with installed service
- [#186874](https://github.com/openclaw/openclaw/pull/186874) improve: grow desktop chat drafts up to twelve lines
- [#187961](https://github.com/openclaw/openclaw/pull/187961) refactor(ui): load context inspector copy with its panel
- [#187883](https://github.com/openclaw/openclaw/pull/187883) fix: keep warnings out of terminal failure notices
- [#187970](https://github.com/openclaw/openclaw/pull/187970) chore: remove project picker proof images from the repository
- [#187971](https://github.com/openclaw/openclaw/pull/187971) refactor(tests): reuse state database directory cleanup
- [#187913](https://github.com/openclaw/openclaw/pull/187913) fix(codex): restore hosted tools for read-only plugins
- [#187199](https://github.com/openclaw/openclaw/pull/187199) fix(mattermost): match canonically equivalent names in live directory lookup
- [#187300](https://github.com/openclaw/openclaw/pull/187300) fix(gateway): match canonical NFC/NFD conversation list labels
- [#187785](https://github.com/openclaw/openclaw/pull/187785) fix(lobster): resolve literal workflow file paths without trimming
- [#187739](https://github.com/openclaw/openclaw/pull/187739) fix(lobster): resolve literal cwd values without trimming whitespace
- [#177886](https://github.com/openclaw/openclaw/pull/177886) fix(ui): prevent agent images from clipping in session rows
- [#187676](https://github.com/openclaw/openclaw/pull/187676) feat(knowledge): derive entity Timelines from records instead of page prose
- [#187967](https://github.com/openclaw/openclaw/pull/187967) fix: align task-owner tests with installed service environment
- [#187925](https://github.com/openclaw/openclaw/pull/187925) fix: allow guest tool previews for accessible sessions
- [#187661](https://github.com/openclaw/openclaw/pull/187661) fix(plugins): show tool guidance only while the tool is callable
- [#187957](https://github.com/openclaw/openclaw/pull/187957) fix(lint): satisfy type-aware extension checks
- [#187892](https://github.com/openclaw/openclaw/pull/187892) refactor(perf): share collected heap sampling startup
- [#181119](https://github.com/openclaw/openclaw/pull/181119) docs(workboard): clarify dependency promotion holds
- [#187956](https://github.com/openclaw/openclaw/pull/187956) chore(ui): refresh control ui locales
- [#180421](https://github.com/openclaw/openclaw/pull/180421) docs(memory): correct where dreaming keeps state and what schedules sweeps
- [#187951](https://github.com/openclaw/openclaw/pull/187951) fix: qualify Android TLS rejection before platform updates
- [#187943](https://github.com/openclaw/openclaw/pull/187943) refactor(ui): load English copy with cold chat owners
- [#156533](https://github.com/openclaw/openclaw/pull/156533) refactor(providers): strengthen fixture cleanup and contract tests
- [#187909](https://github.com/openclaw/openclaw/pull/187909) fix: session search on PostgreSQL scans every transcript row instead of using the text index
- [#177364](https://github.com/openclaw/openclaw/pull/177364) docs: correct CLI backend MCP runtime lifetime
- [#187948](https://github.com/openclaw/openclaw/pull/187948) fix(release): unblock candidate prepush gates
- [#187938](https://github.com/openclaw/openclaw/pull/187938) fix(gateway): recover every tombstoned main session at startup, not only those with a continuation
- [#187936](https://github.com/openclaw/openclaw/pull/187936) fix(doctor): bound Doctor startup waits and honor SIGTERM
- [#187926](https://github.com/openclaw/openclaw/pull/187926) fix: let common sandboxes run Chromium tests
- [#187890](https://github.com/openclaw/openclaw/pull/187890) fix: restore watched PR retention checks
- [#187946](https://github.com/openclaw/openclaw/pull/187946) chore(ui): refresh control ui locales
- [#187940](https://github.com/openclaw/openclaw/pull/187940) refactor(test): share historical Workshop schema fixture
- [#187944](https://github.com/openclaw/openclaw/pull/187944) fix(codex): backport hosted tool names for read-only plugins
- [#187899](https://github.com/openclaw/openclaw/pull/187899) fix(chat): same-user steering into a completion continuation falls back to a queued turn
- [#187916](https://github.com/openclaw/openclaw/pull/187916) fix: finish settled preparation timeouts without leaving updates running
- [#187822](https://github.com/openclaw/openclaw/pull/187822) fix: resume interrupted chats after database preparation
- [#187803](https://github.com/openclaw/openclaw/pull/187803) fix(supervisor): service-child anchors abort on Node 26 when stdin is /dev/null
- [#187921](https://github.com/openclaw/openclaw/pull/187921) perf(update): read candidate state inventory without copying the shared database
- [#187933](https://github.com/openclaw/openclaw/pull/187933) fix: restore shell keyboard checks with both skip links
- [#187934](https://github.com/openclaw/openclaw/pull/187934) fix(onboard): migrate legacy credentials during onboarding instead of looping on AUTH_PROFILE_MIGRATION_REQUIRED
- [#187907](https://github.com/openclaw/openclaw/pull/187907) fix(update): size backups realistically and restart the Gateway after a refused swap
- [#187798](https://github.com/openclaw/openclaw/pull/187798) feat(cron): apply configured default tools before approval
- [#187929](https://github.com/openclaw/openclaw/pull/187929) fix(release): stamp quoted schema history rows
- [#187923](https://github.com/openclaw/openclaw/pull/187923) test(plugins): share installed-global loader fixture
- [#187918](https://github.com/openclaw/openclaw/pull/187918) fix: avoid PR publication fallback on incidental Git output
- [#187920](https://github.com/openclaw/openclaw/pull/187920) improve(releases): skip unused TestFlight source checkouts
- [#187915](https://github.com/openclaw/openclaw/pull/187915) fix: preserve requested hosts in chat entry HTTP tests
- [#187710](https://github.com/openclaw/openclaw/pull/187710) [2026.10.10-beta.5] test: align Node runtime fixtures; drop false OPENCLAW_ env-name
- [#187880](https://github.com/openclaw/openclaw/pull/187880) fix(workboard): release owner slots held by completed legacy executions
- [#187901](https://github.com/openclaw/openclaw/pull/187901) fix(status): resolve installed service state from the service's own environment
- [#187864](https://github.com/openclaw/openclaw/pull/187864) fix(ios): keep native Talk working while the phone is locked
- [#187375](https://github.com/openclaw/openclaw/pull/187375) fix(codex): refresh connections after settled local transport failures
- [#187805](https://github.com/openclaw/openclaw/pull/187805) fix: omit PR attribution instructions when disabled
- [#187904](https://github.com/openclaw/openclaw/pull/187904) refactor(perf): share GC profile summaries
- [#187881](https://github.com/openclaw/openclaw/pull/187881) fix(matrix): live directory search misses rooms with canonically equivalent Unicode names
- [#187895](https://github.com/openclaw/openclaw/pull/187895) improve(releases): defer Git history until notes are needed
- [#187835](https://github.com/openclaw/openclaw/pull/187835) fix(github): agents lose their PR after a failed follow-up push
- [#187886](https://github.com/openclaw/openclaw/pull/187886) fix: keep unrelated services from blocking isolated Doctor migrations
- [#187873](https://github.com/openclaw/openclaw/pull/187873) fix: retain Codex terminal errors after stderr warnings
- [#187819](https://github.com/openclaw/openclaw/pull/187819) fix: prevent shared-state hangs after service installation drift
- [#187897](https://github.com/openclaw/openclaw/pull/187897) test(agents): reuse retained turn handover setup
- [#187867](https://github.com/openclaw/openclaw/pull/187867) fix: resume interrupted sessions after upgrading restart recovery
- [#187889](https://github.com/openclaw/openclaw/pull/187889) fix: clear Knowledge readiness export finding
- [#183706](https://github.com/openclaw/openclaw/pull/183706) fix: goals created mid-turn stop after delegated work
- [#187853](https://github.com/openclaw/openclaw/pull/187853) fix(normalization-core): blockquote marker leaks into plain-text previews without a following space
- [#187831](https://github.com/openclaw/openclaw/pull/187831) fix: preserve saved selections during native status inspection
- [#187877](https://github.com/openclaw/openclaw/pull/187877) fix: prevent startup rollback from hanging on usage backfill
- [#187870](https://github.com/openclaw/openclaw/pull/187870) fix: shared-state policy errors can abort Gateway startup
- [#187874](https://github.com/openclaw/openclaw/pull/187874) refactor(tests): reuse process presence checks
- [#187845](https://github.com/openclaw/openclaw/pull/187845) improve(ios): reuse release Swift package downloads
- [#187871](https://github.com/openclaw/openclaw/pull/187871) chore(ui): refresh control ui locales
- [#186651](https://github.com/openclaw/openclaw/pull/186651) fix: unnamed guests show anonymous labels in chat mentions
- [#187859](https://github.com/openclaw/openclaw/pull/187859) test(ci): share Git fixture construction
- [#180896](https://github.com/openclaw/openclaw/pull/180896) fix(ui): let keyboard users skip to the composer
- [#187860](https://github.com/openclaw/openclaw/pull/187860) chore(ui): refresh control ui locales
- [#187858](https://github.com/openclaw/openclaw/pull/187858) docs: add 2026.10.9 release notes
- [#187855](https://github.com/openclaw/openclaw/pull/187855) fix: restore Doctor JSON failure coverage
- [#187797](https://github.com/openclaw/openclaw/pull/187797) fix(memory): indexing still fails when a gateway truncates the embedding batch-limit error
- [#187846](https://github.com/openclaw/openclaw/pull/187846) fix: retire the unused unclaimed session-delivery producer
- [#187833](https://github.com/openclaw/openclaw/pull/187833) fix: overflow summaries lose the summarized message's sender and room-event context
- [#187840](https://github.com/openclaw/openclaw/pull/187840) fix: release failed Talk startup registrations
- [#187820](https://github.com/openclaw/openclaw/pull/187820) fix(tlon): keep automatic group replies at supported depth
- [#187830](https://github.com/openclaw/openclaw/pull/187830) refactor(ui): keep workspace conflict recovery outside chat boot
- [#187843](https://github.com/openclaw/openclaw/pull/187843) refactor(tests): reuse Gateway secret input cases
- [#185028](https://github.com/openclaw/openclaw/pull/185028) fix(browser): preserve native CORS preflights
- [#186953](https://github.com/openclaw/openclaw/pull/186953) fix(backup): redact bundled plugin credentials from Git exports
- [#187828](https://github.com/openclaw/openclaw/pull/187828) fix: dotted path insertions fail in JSON and YAML
- [#187821](https://github.com/openclaw/openclaw/pull/187821) fix(typesafe): prepare socket test policy before request deadlines
- [#187829](https://github.com/openclaw/openclaw/pull/187829) refactor(tests): reuse migration receipt assertions
- [#187762](https://github.com/openclaw/openclaw/pull/187762) fix: keep delivery intent batch reads internal
- [#187783](https://github.com/openclaw/openclaw/pull/187783) refactor(ui): load Template creator on first use
- [#187776](https://github.com/openclaw/openclaw/pull/187776) fix: resume Codex conversations after background cleanup settles
- [#187761](https://github.com/openclaw/openclaw/pull/187761) fix: remove unused restart title fixture
- [#187826](https://github.com/openclaw/openclaw/pull/187826) chore(ui): refresh control ui locales
- [#187724](https://github.com/openclaw/openclaw/pull/187724) fix(gateway): startup fails on a transient database lock while clearing stale turn claims
- [#187790](https://github.com/openclaw/openclaw/pull/187790) improve(ios): reuse Watch RTC libraries in release archives
- [#187818](https://github.com/openclaw/openclaw/pull/187818) refactor(tests): reuse plugin fixture JSON writer
- [#187799](https://github.com/openclaw/openclaw/pull/187799) fix(cli): help flags are missing from shell completion
- [#186092](https://github.com/openclaw/openclaw/pull/186092) fix(tlon): unlisted citations stay opaque when auto-discovery is off [AI]
- [#187137](https://github.com/openclaw/openclaw/pull/187137) fix: Gateway stops report cleanup failure after an exec is refused before launch
- [#187674](https://github.com/openclaw/openclaw/pull/187674) fix(ui): match canonical Unicode in workspace attachment search
- [#180692](https://github.com/openclaw/openclaw/pull/180692) fix(memory): avoid redundant Dreaming transcript inventory reads
- [#187726](https://github.com/openclaw/openclaw/pull/187726) fix(cli): stop pending cron inventory reads on interrupt
- [#187807](https://github.com/openclaw/openclaw/pull/187807) refactor(cli): reuse Workshop archive assertions
- [#185785](https://github.com/openclaw/openclaw/pull/185785) chore(android): refresh Markdown, WebView, and HTTP libraries
- [#187152](https://github.com/openclaw/openclaw/pull/187152) feat(github): expose observational publication readiness
- [#187732](https://github.com/openclaw/openclaw/pull/187732) fix(ui): preserve IME navigation in the worktree picker
- [#187764](https://github.com/openclaw/openclaw/pull/187764) feat(pr): publish signed candidates for pending package proof
- [#187791](https://github.com/openclaw/openclaw/pull/187791) chore(release): close out 2026.10.9 on main
- [#187682](https://github.com/openclaw/openclaw/pull/187682) [2026.10.9] test(cron): route codex group caps through the exec tool catalog
- [#187802](https://github.com/openclaw/openclaw/pull/187802) fix: recover Codex DMs after an interrupted tool turn
- [#187794](https://github.com/openclaw/openclaw/pull/187794) refactor(doctor): share bundled channel test fixture
- [#187775](https://github.com/openclaw/openclaw/pull/187775) fix(pr): avoid argument-limit failures on large squash merges
- [#187667](https://github.com/openclaw/openclaw/pull/187667) fix(signal): stop skipping inbound messages after reconnects
- [#187789](https://github.com/openclaw/openclaw/pull/187789) chore(release): update appcast for 2026.10.9
- [#187784](https://github.com/openclaw/openclaw/pull/187784) refactor(perf): share duration distribution summaries
- [#187656](https://github.com/openclaw/openclaw/pull/187656) fix: streamed replies with a literal [[ in prose no longer re-parse the whole answer
- [#156630](https://github.com/openclaw/openclaw/pull/156630) refactor(sms): join held test work before cleanup
- [#187763](https://github.com/openclaw/openclaw/pull/187763) fix(tests): keep explicit agent timeouts deterministic
- [#187743](https://github.com/openclaw/openclaw/pull/187743) fix(ci): skip npm-lock setup for unrelated root scripts
- [#187760](https://github.com/openclaw/openclaw/pull/187760) [2026.9.36] fix(qa): Telegram recovery scenario times out when the failure fallback is not a reply
- [#187759](https://github.com/openclaw/openclaw/pull/187759) fix(qa): Telegram recovery scenario times out when the failure fallback is not a reply
- [#187666](https://github.com/openclaw/openclaw/pull/187666) fix(templates): sanitize remote identity fields in CLI human-readable output
- [#187708](https://github.com/openclaw/openclaw/pull/187708) refactor(ui): keep tool catalog descriptions off chat boot path

#### 🐛 New Issues
- [#187490](https://github.com/openclaw/openclaw/issues/187490) Flaky tests seen in 2026.10.9 release validation `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬6
- [#187468](https://github.com/openclaw/openclaw/issues/187468) Update failure: package-swap (2026.9.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬6
- [#187579](https://github.com/openclaw/openclaw/issues/187579) [Bug]: Pi500 restart generates 1.5 GB of unnecessary writes and reports ready too early `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬5
- [#187900](https://github.com/openclaw/openclaw/issues/187900) doctor: hangs indefinitely at startup (all modes incl. --lint, PTY and non-interactive) on Linux host `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬4
- [#187919](https://github.com/openclaw/openclaw/issues/187919) [Bug]: upgrade to 2026.10.9 healed only 1 of 12 tombstoned main sessions — the other 11 still reject every turn `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬4
- [#187588](https://github.com/openclaw/openclaw/issues/187588) [Bug]: Telegram: a standalone MEDIA: line for an existing local PDF is never dispatched — text delivered, zero document send, no error logged `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬4
- [#187917](https://github.com/openclaw/openclaw/issues/187917) Update failure: updater-runtime-retention (2026.10.8) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬3
- [#187788](https://github.com/openclaw/openclaw/issues/187788) [Bug]: memory embedding split-on-error recovery never fires when a gateway truncates the provider error message `bug` `no-stale` `bug:behavior` `P2` 💬3
- [#187680](https://github.com/openclaw/openclaw/issues/187680) Doctor credential migration creates <provider>:models-json profile that shadows a valid shared profile (silent fallback loss) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬3
- [#187383](https://github.com/openclaw/openclaw/issues/187383) [Bug]: activation Doctor loses state lease heartbeat during database migrations `bug` `P1` `issue-rating: 🦪 silver shellfish` `impact:other` 💬3
- [#187330](https://github.com/openclaw/openclaw/issues/187330) [Bug]: cold transcript recovery test advances the wrong retry clock `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#188004](https://github.com/openclaw/openclaw/issues/188004) [Bug]: macOS agent-CLI shim pins the version-pinned Homebrew node path - a Homebrew node upgrade breaks every bare openclaw command until the Gateway restarts `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#187982](https://github.com/openclaw/openclaw/issues/187982) Fresh --beta installation silently switches to stable before npm exists `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#187995](https://github.com/openclaw/openclaw/issues/187995) [Bug]: trajectory_runtime_events destroyed by ON DELETE CASCADE with no archive (transcript tables have one) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#187945](https://github.com/openclaw/openclaw/issues/187945) [Bug]: Chat loses its reading position after switching through several sessions `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬2
- [#187903](https://github.com/openclaw/openclaw/issues/187903) onboard --auth-choice apiKey loops on AUTH_PROFILE_MIGRATION_REQUIRED (2026.10.2, Render/AlphaClaw template) `impact:auth-provider` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#187878](https://github.com/openclaw/openclaw/issues/187878) Doctor refuses isolated-state migration because it inherits caller paths for an unrelated service `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬2
- [#187866](https://github.com/openclaw/openclaw/issues/187866) Control UI: collapsed session subagents show 0 running while Subagents panel shows Active 1 `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#187736](https://github.com/openclaw/openclaw/issues/187736) sessions import --limit counts failed rows against the budget and skips healthy sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#187657](https://github.com/openclaw/openclaw/issues/187657) Update failure: requested (2026.9.33) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#187678](https://github.com/openclaw/openclaw/issues/187678) Installer reports Homebrew success and continues after its bootstrap fails `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#187681](https://github.com/openclaw/openclaw/issues/187681) Doctor groupAllowFrom migration overwrites an explicit empty list with DM allowFrom senders `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#187548](https://github.com/openclaw/openclaw/issues/187548) [Bug]: update repair deadlocks when multiple abandoned runs have mismatched hostnames `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#187613](https://github.com/openclaw/openclaw/issues/187613) Git main installer upgrades a runtime that passes source and SQLite requirements `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#187535](https://github.com/openclaw/openclaw/issues/187535) [Bug]: Queued follow-up run carries operator authority but no Gateway context — in-process Gateway tool calls fail for the whole run `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#187511](https://github.com/openclaw/openclaw/issues/187511) Android: native Talk is blocked when no realtime provider is ready, and barge-in (interruptOnSpeech) can never fire in native Talk `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#187519](https://github.com/openclaw/openclaw/issues/187519) Installer accepts Node 24.16–24.22.0 but every published package requires >=24.22.1 `clawsweeper:source-repro` `P0` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬2
- [#187237](https://github.com/openclaw/openclaw/issues/187237) Compaction summary serializer uses unescaped in-band role labels ([User]:) — provenance laundering on tool output `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#187431](https://github.com/openclaw/openclaw/issues/187431) fix: malformed update previews create state and scratch artifacts `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬2
- [#187400](https://github.com/openclaw/openclaw/issues/187400) Streamed replies that mix inline code with a `<` comparison re-parse the whole answer per delta (45 s at 128 KB) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#187390](https://github.com/openclaw/openclaw/issues/187390) [Bug]: Doctor session migration fails on 262-byte Matrix thread archive filename (ENAMETOOLONG) `bug` `no-stale` `bug:behavior` `P1` 💬2
- [#187333](https://github.com/openclaw/openclaw/issues/187333) fix: update dry-run rejects malformed config before returning its preview `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#187309](https://github.com/openclaw/openclaw/issues/187309) Recurring per-agent SQLite WAL/SHM identity mismatch after active-leases close receipts on 2026.10.8 `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#187774](https://github.com/openclaw/openclaw/issues/187774) [Feature]: Add an optional Cua Spaces worker provider `P3` 💬1
- [#187817](https://github.com/openclaw/openclaw/issues/187817) [Feature]: Generate short multi-speaker dialogue with the bundled ElevenLabs plugin `P3` `clawsweeper:bulk-filed` 💬1
- [#188038](https://github.com/openclaw/openclaw/issues/188038) [Bug]: Matrix progress streaming splits an image reply into an edited text draft and an uncaptioned image `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188031](https://github.com/openclaw/openclaw/issues/188031) [Bug]: Plugin tool catalog discovery freezes the Gateway event loop `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188032](https://github.com/openclaw/openclaw/issues/188032) [Bug]: Tool previews advertise tools excluded by required sandbox policy `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#188012](https://github.com/openclaw/openclaw/issues/188012) iOS screenshots can start Watch boot while host CPU remains saturated `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#188028](https://github.com/openclaw/openclaw/issues/188028) CI flakes seen during 2026.10.10-beta.5 release validation (gateway-server-parallel lanes, Doctor recovery, tooling cache) `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#188026](https://github.com/openclaw/openclaw/issues/188026) [Bug]: Plugins menu reports no servers when a guest cannot read configuration `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#187911](https://github.com/openclaw/openclaw/issues/187911) fix: recover guest tasks after concurrent managed-workspace edits `bug` `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187973](https://github.com/openclaw/openclaw/issues/187973) [Bug]: Later managed-file links bypass authenticated artifact actions `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187984](https://github.com/openclaw/openclaw/issues/187984) [Bug]: Workspace SVG files lack Preview with generic text metadata `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#187937](https://github.com/openclaw/openclaw/issues/187937) [Bug]: An unrelated older service can prevent configuration changes from applying `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#188007](https://github.com/openclaw/openclaw/issues/188007) Talk: spoken confirmation only accepts English ("yes", "confirm"…) — non-English users loop forever ("a newer confirmation request supersedes this one") `P2` `impact:ux-friction` 💬1
- [#188000](https://github.com/openclaw/openclaw/issues/188000) Update failure: package-install-omit-optional (2026.10.4) `P2` `impact:ux-friction` 💬1
- [#187879](https://github.com/openclaw/openclaw/issues/187879) [Bug]: Document context is lost after sandbox setup fails before the first model request `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#187974](https://github.com/openclaw/openclaw/issues/187974) Doctor rehearsal fixtures remove retained worker broker sockets `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#187987](https://github.com/openclaw/openclaw/issues/187987) [Feature]: Scope iMessage Read receipts to handled messages `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#187964](https://github.com/openclaw/openclaw/issues/187964) Slack: visible sessions_spawn completion opens a thread under a top-level request when replyToMode is off `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187975](https://github.com/openclaw/openclaw/issues/187975) PR-preparation handoff test rejects an intentionally permitted guest preview `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#187947](https://github.com/openclaw/openclaw/issues/187947) [Bug]: Busy cron condition checks consume occurrences without retry or visible skip `bug` `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187985](https://github.com/openclaw/openclaw/issues/187985) iOS screenshot CI repeats reusable Watch RTC builds and Swift package downloads `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187958](https://github.com/openclaw/openclaw/issues/187958) Service publication Doctor fixture expects an inherited caller profile `no-stale` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#187862](https://github.com/openclaw/openclaw/issues/187862) [Bug]: Long warning prefixes hide the cause in terminal run failure notices `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187978](https://github.com/openclaw/openclaw/issues/187978) [Feature]: Pin a dashboard so it is selectable as a panel from the + menu in any session `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#187977](https://github.com/openclaw/openclaw/issues/187977) [Feature]: Built-in read-only Maintenance / Ops overview (gateway health, automations, quota, sessions) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#187972](https://github.com/openclaw/openclaw/issues/187972) [Feature]: Codex native replay: preservation-safe pre-relay image budget `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#187969](https://github.com/openclaw/openclaw/issues/187969) Update failure: package-install-omit-optional (2026.10.5) `P0` `impact:ux-release-blocker` 💬1
- [#187949](https://github.com/openclaw/openclaw/issues/187949) Android TLS qualification fails without a platform blocklist update `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#187912](https://github.com/openclaw/openclaw/issues/187912) fix: guests cannot preview tools in their own sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#187950](https://github.com/openclaw/openclaw/issues/187950) [Feature]: Configurable shell for tools.exec on Windows (use PowerShell 7 when available) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#187922](https://github.com/openclaw/openclaw/issues/187922) [Bug]: Common sandbox image cannot launch repository Chromium tests `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#187908](https://github.com/openclaw/openclaw/issues/187908) sessions.search on PostgreSQL never uses the transcript GIN index (left() scope filter defeats the planner) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#187941](https://github.com/openclaw/openclaw/issues/187941) Chat UI: completed turn's final answer hidden behind collapsed Worked disclosure `P2` `impact:ux-friction` 💬1
- [#187809](https://github.com/openclaw/openclaw/issues/187809) Bug: restart recovery skips agent stores awaiting writable admission `bug` `P1` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#187939](https://github.com/openclaw/openclaw/issues/187939) Update failure: package-install-omit-optional (2026.10.4) `P2` `impact:ux-friction` 💬1
- [#187928](https://github.com/openclaw/openclaw/issues/187928) [Bug]: UI shell focus fixtures fail when both skip links are present `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#187767](https://github.com/openclaw/openclaw/issues/187767) [Feature]: Configurable default tools for newly constructed automations `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#187857](https://github.com/openclaw/openclaw/issues/187857) [Bug]: Same-user steering during completion turns queues on task-suggestion mode mismatch `bug` `bug:behavior` `P2` `clawsweeper:source-repro` 💬1
- [#187930](https://github.com/openclaw/openclaw/issues/187930) Context inspector E2E rejects intentional idle code warming `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187902](https://github.com/openclaw/openclaw/issues/187902) [Bug]: PR preparation mistakes Git progress for a permission refusal `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#187906](https://github.com/openclaw/openclaw/issues/187906) `openclaw memory search` CLI takes 35–47s while the same search via the running Gateway takes ~2s `P2` `impact:other` 💬1
- [#187905](https://github.com/openclaw/openclaw/issues/187905) [Bug]: HTML Files Preview blocks allowed relative CSS and scripts under authored CSP `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187832](https://github.com/openclaw/openclaw/issues/187832) [Bug]: Session PR actions say "no completed shared publication" after a later publish fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#187863](https://github.com/openclaw/openclaw/issues/187863) Codex app-server exit preview loses terminal cause after stderr warnings `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187898](https://github.com/openclaw/openclaw/issues/187898) [Bug]: Active Goal shows Pursuing with no continuation after required child quota failure `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#187887](https://github.com/openclaw/openclaw/issues/187887) Knowledge readiness export fails production dependency validation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187885](https://github.com/openclaw/openclaw/issues/187885) [Bug]: Watched PR retention fixture does not advance the elapsed cache clock `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#187891](https://github.com/openclaw/openclaw/issues/187891) Design: retained protected content prerequisite for native Codex coding `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#187882](https://github.com/openclaw/openclaw/issues/187882) [Bug]: Windows npm backup fails late on managed browser Cookies EBUSY without recovery guidance `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#187876](https://github.com/openclaw/openclaw/issues/187876) [Bug]: Telegram final reply lost ("unknown_after_send") right after a successful sendMessage in the same turn — 2026.10.7, includes #156842 `bug` `regression` `P1` `impact:message-loss` 💬1
- [#187868](https://github.com/openclaw/openclaw/issues/187868) [Bug]: setup-token login saves an unusable profile `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187861](https://github.com/openclaw/openclaw/issues/187861) fix: session tool preview omits managed GitHub tools `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#187851](https://github.com/openclaw/openclaw/issues/187851) Doctor JSON built-CLI test fails on the intentional blocked status `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187750](https://github.com/openclaw/openclaw/issues/187750) Unused unclaimed session-delivery producer fails the production export check `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#187838](https://github.com/openclaw/openclaw/issues/187838) Talk retains active work after synchronous consult preparation fails `bug` `P2` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#187847](https://github.com/openclaw/openclaw/issues/187847) CI: explicit timeout forwarding fixture leaves monotonic time running `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:not-repro-on-main` 💬1
- [#187849](https://github.com/openclaw/openclaw/issues/187849) [Bug]: Token budget under-counts Tangut, Khitan, and Nushu supplementary characters `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187850](https://github.com/openclaw/openclaw/issues/187850) [Bug]: Blockquote ">" marker leaks into plain-text previews without a following space `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187842](https://github.com/openclaw/openclaw/issues/187842) OpenClaw: message-tool sends from scheduled runs aren't recorded in the agent's chat `P2` `impact:session-state` 💬1
- [#187844](https://github.com/openclaw/openclaw/issues/187844) [Bug]: [Bug] 2026.10.8 billing failover reaches Anthropic but Main turn fails with prompt projection error `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#187841](https://github.com/openclaw/openclaw/issues/187841) [Bug]: macOS app onboarding "Will attach" rewrites openclaw.json without gateway.mode, and the CLI-managed Gateway won't start `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:data-loss` `impact:crash-loop` 💬1
- [#187837](https://github.com/openclaw/openclaw/issues/187837) [Feature]: ACP spawn: pass a session name and an allowed-tools allowlist to the agent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#187834](https://github.com/openclaw/openclaw/issues/187834) claude-cli: weekly-limit on first auth profile doesn't rotate to next same-provider profile in auth.order (and no return-to-primary after reset) `P2` `impact:session-state` `impact:auth-provider` 💬1
- [#187740](https://github.com/openclaw/openclaw/issues/187740) Unused restart-title fixture causes a dependency-check finding `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187827](https://github.com/openclaw/openclaw/issues/187827) [Bug]: Backport #175560 to 2026.10.x: claude-cli WebChat finals are dropped after final=false progress sends `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#187723](https://github.com/openclaw/openclaw/issues/187723) Gateway startup still fails on a transient database lock while clearing stale turn claims `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187811](https://github.com/openclaw/openclaw/issues/187811) [Feature]: Workboard lifecycle sweep reloads every card and all child tables every 60 s `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#187812](https://github.com/openclaw/openclaw/issues/187812) [Feature]: Guard the PostgreSQL memory binary prefilter against an HNSW index on embedding_bits (plus real 4096-d recall data) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#187815](https://github.com/openclaw/openclaw/issues/187815) Update failure: package-install-omit-optional (2026.10.5) `P0` `impact:ux-release-blocker` 💬1
- [#187813](https://github.com/openclaw/openclaw/issues/187813) [Bug]: Selected project skills are missing from Control UI $ autocomplete command catalog `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187814](https://github.com/openclaw/openclaw/issues/187814) Browser attachOnly fails on first call when the CDP browser starts on demand `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#187810](https://github.com/openclaw/openclaw/issues/187810) Update failure: package-install-omit-optional (2026.10.5) `P0` `impact:ux-release-blocker` 💬1
- [#187806](https://github.com/openclaw/openclaw/issues/187806) [Feature]: Plugin approvals: let before_tool_call's requireApproval set `detail` (refused, not truncated, past its cap) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#187796](https://github.com/openclaw/openclaw/issues/187796) Android: app.launch node command (open an app or a deep link by package) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#187665](https://github.com/openclaw/openclaw/issues/187665) Signal skips buffered inbound messages during native HTTP SSE reconnects `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187786](https://github.com/openclaw/openclaw/issues/187786) [Bug]: Screenshot sends accidentally trigger unrelated ClawHub plugin cards through optional search payload `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#187655](https://github.com/openclaw/openclaw/issues/187655) [Bug]: streamed replies with a literal [[ in prose re-parse the whole answer per delta (29 s at 64 KB) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187780](https://github.com/openclaw/openclaw/issues/187780) secrets store CLI leaks raw ENOENT with exit 1 for missing --value-file / --from paths `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187770](https://github.com/openclaw/openclaw/issues/187770) [Docs Bug]: macOS app requirement conflicts: install page says macOS 15+, docs say 26.2+ `bug` `docs` `no-stale` `P2` 💬1
- [#187773](https://github.com/openclaw/openclaw/issues/187773) voice-call: outbound realtime calls silent or choppy after 2026.10.8 (Twilio 11200/502 on webhook mid-call, stream never connects) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#187772](https://github.com/openclaw/openclaw/issues/187772) Discord realtime voice fails on 2026.10.8: GPT-Live OAuth refresh hits DataCloneError on Proxy-wrapped config (reported as 'authentication failed') `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#187756](https://github.com/openclaw/openclaw/issues/187756) [Bug]: Startup catch-up runs agent-bound `command` cron jobs before agent DB admission; occurrence is lost, not deferred (2026.10.8) `P2` `impact:other` 💬1
- [#187757](https://github.com/openclaw/openclaw/issues/187757) [Bug]: Stable 2026.10.8 still retains update runtimes on "Could not classify PID: could not read package identity" (#177407 not in stable); update.run reports skipped `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#187741](https://github.com/openclaw/openclaw/issues/187741) Unused chat-run fixture export fails the full-tree export check `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187744](https://github.com/openclaw/openclaw/issues/187744) [Bug]: Explicit Node test children miss diagnostics under Bun `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#187735](https://github.com/openclaw/openclaw/issues/187735) fix: QA poll cursor export fails unused-export checks `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#187731](https://github.com/openclaw/openclaw/issues/187731) Unused queued-input target type fails dependency checks `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#187728](https://github.com/openclaw/openclaw/issues/187728) openclaw agent waits silently until the question timeout when the model asks a structured question `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187663](https://github.com/openclaw/openclaw/issues/187663) [Bug]: CI unused-export check includes a retired RPC execution-start helper `bug` `no-stale` `P3` `clawsweeper:fix-shape-clear` 💬1
- [#187647](https://github.com/openclaw/openclaw/issues/187647) fix: Markdown attachment file links navigate to missing conversations `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187700](https://github.com/openclaw/openclaw/issues/187700) [Bug]: unused active-run predicate fails dead-code checks `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187696](https://github.com/openclaw/openclaw/issues/187696) [Bug]: UI dev launcher kills Vite before normal shutdown finishes `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187721](https://github.com/openclaw/openclaw/issues/187721) [Feature]: Mute the Android Talk microphone without ending the conversation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#187462](https://github.com/openclaw/openclaw/issues/187462) [Bug]: Retired workerBundle fixture remains an unused export `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187463](https://github.com/openclaw/openclaw/issues/187463) [Bug]: Redundant provisioning type fails production unused-export checks `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#187683](https://github.com/openclaw/openclaw/issues/187683) [Bug]: Catalog comparison helper fails unused-export checks `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187684](https://github.com/openclaw/openclaw/issues/187684) [Bug]: computer-use: node-side execution has no idle backstop; an orphaned execution locks the macOS node (COMPUTER_HOST_BUSY) until the worker is restarted `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#187455](https://github.com/openclaw/openclaw/issues/187455) Unused operator recovery byte-limit export fails the dependency audit `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187677](https://github.com/openclaw/openclaw/issues/187677) Telegram: forwarded rich messages bypass inbound debounce, so a forward burst yields one turn per message `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187598](https://github.com/openclaw/openclaw/issues/187598) [Bug]: Stop interrupts native Codex helpers but leaves their commands running `bug` `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187654](https://github.com/openclaw/openclaw/issues/187654) [Bug]: macOS 2026.10.8 protected node exec rejects direct absolute Node/script before approval `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#187359](https://github.com/openclaw/openclaw/issues/187359) [Bug]: Gateway RPC CLIENT_TIMEOUT during slow WhatsApp media uploads triggers duplicate delivery retries `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187658](https://github.com/openclaw/openclaw/issues/187658) Tlon plugin: make the group @mention requirement configurable, and stop automatic replies from being attached to replies (silently dropped) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#187649](https://github.com/openclaw/openclaw/issues/187649) [Bug]: BTW message-end drain fixture no longer matches paragraph chunking `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#187652](https://github.com/openclaw/openclaw/issues/187652) [2026.10.3][google-vertex] Runtime context becomes labeled user text; provenance loss may contribute to false attribution `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#187446](https://github.com/openclaw/openclaw/issues/187446) [Bug]: Orphan messageSource fixture fails the full-tree export check `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187575](https://github.com/openclaw/openclaw/issues/187575) [Bug]: Hosted Auto-device test leaks preferences into background session tests `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#187544](https://github.com/openclaw/openclaw/issues/187544) New Session reload forgets an explicit permission selection `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187645](https://github.com/openclaw/openclaw/issues/187645) [Bug]: Android app browser panel: "This tab is no longer available" on cold start, panel never re-attaches to new tab `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#187620](https://github.com/openclaw/openclaw/issues/187620) [Bug]: orphan completion reader fails the full-tree export check `bug` `no-stale` `P3` `clawsweeper:fix-shape-clear` 💬1
- [#187456](https://github.com/openclaw/openclaw/issues/187456) [Bug]: Restart resume text is reported as an unused export `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187457](https://github.com/openclaw/openclaw/issues/187457) Retired transcript recovery predicates remain production export findings `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187617](https://github.com/openclaw/openclaw/issues/187617) Files warning tests can fail before the lazy toast view finishes loading `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#187630](https://github.com/openclaw/openclaw/issues/187630) [Bug]: 2026.10.8 Control UI chat pane stuck on loading skeleton for every session (chat.startup succeeds, history never renders) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#187629](https://github.com/openclaw/openclaw/issues/187629) Align iOS app icon composition with Apple design guidelines `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#187628](https://github.com/openclaw/openclaw/issues/187628) [Feature]: allow deleting or editing a message cancelled just after sending (currently only copy-and-resend) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#187605](https://github.com/openclaw/openclaw/issues/187605) [Bug]: macOS node camera.snap/camera.clip/screen.record/location.get silently fall back to defaults when params are malformed, then report ok `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#187602](https://github.com/openclaw/openclaw/issues/187602) [Bug]: macOS app crashes at launch when gateway.customBindHost is a bracket-less IPv6 address (force-unwrapped URL) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#187616](https://github.com/openclaw/openclaw/issues/187616) Update failure: package-install-omit-optional (2026.10.5) `P0` `impact:ux-release-blocker` 💬1
- [#187597](https://github.com/openclaw/openclaw/issues/187597) [Bug]: macOS Tailscale "Exposure: Off" deletes the whole gateway.auth block and restarts the Gateway `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:data-loss` 💬1
- [#187609](https://github.com/openclaw/openclaw/issues/187609) [Bug]: macOS app cannot connect to a local Gateway with gateway.tls.enabled (self-signed cert): no pin path in local mode `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#187599](https://github.com/openclaw/openclaw/issues/187599) [Bug]: macOS Tailscale section shows "Tailnet (Serve)" for Gateways with no Tailscale config (hydrates a missing mode as serve; Gateway default is off) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#187603](https://github.com/openclaw/openclaw/issues/187603) [Bug]: macOS status menu session preview never refreshes once its submenu exists; closing the menu early leaves "Loading preview…" until reconnect `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#187604](https://github.com/openclaw/openclaw/issues/187604) [Bug]: macOS node screen.record reports the requested durationMs/fps instead of the clamped values it recorded `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#187606](https://github.com/openclaw/openclaw/issues/187606) [Bug]: macOS exec host drops requests larger than 256 KB without any response; node reports "outcome unknown" for a command that never ran `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#187600](https://github.com/openclaw/openclaw/issues/187600) [Bug]: macOS ConfigStore offline fallback writes "__OPENCLAW_REDACTED__" over real secrets in openclaw.json `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:data-loss` 💬1
- [#187608](https://github.com/openclaw/openclaw/issues/187608) [Bug]: macOS Agent Events window keys rows by per-run seq, so rows from different runs collide `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#187607](https://github.com/openclaw/openclaw/issues/187607) [Bug]: macOS status menu Thinking/Verbose submenus check "Off" for sessions that inherit the agent default `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#187601](https://github.com/openclaw/openclaw/issues/187601) [Bug]: macOS exec host returns empty stdout/stderr when command output contains any invalid or partial UTF-8 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#187386](https://github.com/openclaw/openclaw/issues/187386) CI reports an orphan pending-final clear export after restart recovery removal `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#187590](https://github.com/openclaw/openclaw/issues/187590) [Feature]: Don't let automatic session archiving pause a conversation's automations `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#187591](https://github.com/openclaw/openclaw/issues/187591) Update failure: package-install-omit-optional (2026.9.8) `P0` `impact:ux-release-blocker` 💬1
- [#187464](https://github.com/openclaw/openclaw/issues/187464) [Bug]: Unused restart sentinel continuation type exports fail the dependency check `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187559](https://github.com/openclaw/openclaw/issues/187559) fix: prevent long split-diff lines from overlapping in Review `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#187524](https://github.com/openclaw/openclaw/issues/187524) [Bug]: Parent dashboard publishing stops after subagent completion `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#187447](https://github.com/openclaw/openclaw/issues/187447) [Bug]: Dependency checks retain the retired reply admission ID helper `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#187334](https://github.com/openclaw/openclaw/issues/187334) [Bug]: one-shot session-target automations fail with "PostgreSQL connections must run in a worker" on PostgreSQL state `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#187452](https://github.com/openclaw/openclaw/issues/187452) [Bug]: retired recovery media collectors fail dead-code checks `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#187525](https://github.com/openclaw/openclaw/issues/187525) [Bug]: Backup test cleanup deletes inputs after retained reader close fails `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187557](https://github.com/openclaw/openclaw/issues/187557) [Feature]: Supported before_agent_finalize gate for blocking terminal success `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#187552](https://github.com/openclaw/openclaw/issues/187552) [Feature]: Option to keep chat message timestamps always visible in the Control UI (desktop) `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#187545](https://github.com/openclaw/openclaw/issues/187545) Update failure: gateway-recovery-verification (2026.10.7) `P1` `impact:ux-friction` 💬1
- [#187543](https://github.com/openclaw/openclaw/issues/187543) [Bug]: Native PDF toolbar downloads lose the original filename `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187541](https://github.com/openclaw/openclaw/issues/187541) [Feature]: Let the agent administer a Discord guild `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:security` 💬1
- [#187436](https://github.com/openclaw/openclaw/issues/187436) [Bug]: Internal session-send delivery types fail unused-export CI `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187538](https://github.com/openclaw/openclaw/issues/187538) timedOutByRunBudget kill provides no in-channel notice (silent mid-task abort) 💬1
- [#187537](https://github.com/openclaw/openclaw/issues/187537) [Bug]: cancelled Discord message tools remain waiting in REST queues and retry backoff `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187445](https://github.com/openclaw/openclaw/issues/187445) [Bug]: delivery fixture retains unused deliveryContext export `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187531](https://github.com/openclaw/openclaw/issues/187531) [Bug]: memory_search times out while indexing through a same-host openai-compatible embedding server `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187513](https://github.com/openclaw/openclaw/issues/187513) [Bug]: Scheduled automations keep running after their Telegram account is removed while a routing binding still names it `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#187520](https://github.com/openclaw/openclaw/issues/187520) CI: Bun gateway-client shard can hang after vitest worker termination timeout `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#187488](https://github.com/openclaw/openclaw/issues/187488) fix: retired boundary test blocks native validation planning `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187510](https://github.com/openclaw/openclaw/issues/187510) [Feature]: Localize general CLI command output (follow-up to wizard i18n) `P2` `impact:ux-friction` 💬1
- [#187441](https://github.com/openclaw/openclaw/issues/187441) [Bug]: CI omits the WebSocket retention proof from Node/V8 routing `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187494](https://github.com/openclaw/openclaw/issues/187494) [Bug]: Managed GitHub OAuth identity stays expired after a refresh fails during a network outage `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187482](https://github.com/openclaw/openclaw/issues/187482) [Bug]: macOS Canvas load failures are invisible and `canvas present` still returns ok (.md/.txt/.csv/.pdf are served as application/octet-stream) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187485](https://github.com/openclaw/openclaw/issues/187485) [Bug]: macOS Gateways menu re-selects a signed-out Gateway by replacing its window, cancelling the sign-in in progress and starting another `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187486](https://github.com/openclaw/openclaw/issues/187486) [Bug]: macOS ⌘N/⌘K pressed while the dashboard is loading is lost on token/password Gateways (dispatched at didFinish, before the Control UI shell listens) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187484](https://github.com/openclaw/openclaw/issues/187484) [Bug]: macOS signed-out page shows raw "The operation couldn’t be completed. (Swift.CancellationError error 1.)" when a browser sign-in is superseded `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187483](https://github.com/openclaw/openclaw/issues/187483) [Bug]: macOS Canvas applies `canvas present` placement one present late (panel is positioned before `preferredPlacement` is set) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187491](https://github.com/openclaw/openclaw/issues/187491) [Bug]: Heartbeat-only turns attribute unsent replies to user and persist unsupported tasks (Telegram, GLM-5.3-Flash) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#187396](https://github.com/openclaw/openclaw/issues/187396) [Bug]: detached memory rebuild notice test advances the wrong retry clock `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187437](https://github.com/openclaw/openclaw/issues/187437) [Bug]: Retired failed-placement adapter fails unused-export checks `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187387](https://github.com/openclaw/openclaw/issues/187387) [Bug]: unused session communication error export fails dependency checks `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187399](https://github.com/openclaw/openclaw/issues/187399) [Bug]: SQLite hardlink backup fixtures omit maintained scratch isolation `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187379](https://github.com/openclaw/openclaw/issues/187379) [Bug]: admission refusal internals cause production unused-export CI failures `bug` `no-stale` `P3` `clawsweeper:fix-shape-clear` 💬1
- [#187450](https://github.com/openclaw/openclaw/issues/187450) [Bug]:Android Talk uses a persistent device-associated session instead of the currently selected chat session `bug` `bug:behavior` `P2` `impact:session-state` 💬1
- [#187435](https://github.com/openclaw/openclaw/issues/187435) Telegram sendMessage regression — high failure rate after 2026.10.7 update `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#187201](https://github.com/openclaw/openclaw/issues/187201) [Bug]: Copying a message loses keyboard focus after the clipboard write settles `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#187378](https://github.com/openclaw/openclaw/issues/187378) fix: keep Workshop diet helpers private `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187343](https://github.com/openclaw/openclaw/issues/187343) [Bug]: CI export scans reject internal release provenance helpers `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#187377](https://github.com/openclaw/openclaw/issues/187377) [Bug]: dependency checks report an unused self-hold metadata type export `bug` `no-stale` `P3` `clawsweeper:fix-shape-clear` 💬1
- [#187376](https://github.com/openclaw/openclaw/issues/187376) Unused-file check misses the plugin-state authority measurement entrypoint `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#187380](https://github.com/openclaw/openclaw/issues/187380) [Bug]: Dead outbound-preparing-v1 shell row wedges a main session: restart recovery defers forever on pending_delivery `P1` `impact:session-state` `impact:message-loss` 💬1
- [#187373](https://github.com/openclaw/openclaw/issues/187373) Cron: in-process start retry marks live runs 'interrupted by gateway restart' (startup repair ignores same-process receipts; 2026.10.7) `P2` `impact:other` 💬1
- [#187368](https://github.com/openclaw/openclaw/issues/187368) [Feature]: Provider-neutral finite-input realtime transcription for plugins `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#187364](https://github.com/openclaw/openclaw/issues/187364) Update failure: package-install-omit-optional (2026.10.1) `P2` `impact:ux-friction` 💬1
- [#187355](https://github.com/openclaw/openclaw/issues/187355) CLI: `openclaw message send` needs ~17 s even with --dry-run and can keep running for minutes after the Gateway has delivered the message `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#187354](https://github.com/openclaw/openclaw/issues/187354) [Bug]: Code Mode invokes openclaw CLI inside Gateway container causing OOM 137, SQLite lease contention, and false positive confirmation on restart recovery `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#187358](https://github.com/openclaw/openclaw/issues/187358) [Bug]: Inbound vision media URI hidden from prompt text and UUIDv4 alphabetical sorting in ls prevents selecting latest media `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#187356](https://github.com/openclaw/openclaw/issues/187356) [Bug]: False-positive schema validation warnings logged on every turn for built-in exec tool under Google Gemini `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187357](https://github.com/openclaw/openclaw/issues/187357) [Bug]: Gemini 2.5 Flash returns 404 NOT_FOUND for new Google AI Studio API keys ("no longer available to new users") `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#187350](https://github.com/openclaw/openclaw/issues/187350) Plugin metadata snapshot rescans the entire plugin tree on every startup: runtimePluginMs 58s on a 6,495-file tree, 7× per-file cost on Docker/NAS `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#187245](https://github.com/openclaw/openclaw/issues/187245) [Bug]: Connect join lookup keeps waiting after an accepted interruption `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#187240](https://github.com/openclaw/openclaw/issues/187240) Dead-code checks flag an unused transcript iterator export `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187326](https://github.com/openclaw/openclaw/issues/187326) [Bug]: release-tag resume test uses branch context and fails CI `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#187321](https://github.com/openclaw/openclaw/issues/187321) [Bug]: Dead-code scan reports the documented history projection measurement as unused `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#187200](https://github.com/openclaw/openclaw/issues/187200) [Bug]: Systems machine search misses canonically equivalent Unicode names `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187329](https://github.com/openclaw/openclaw/issues/187329) [Bug]: automations tool advertises owner/scheduledToolPolicy as updateable but cron.update rejects them; stale owner session keys have no repair path `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#187320](https://github.com/openclaw/openclaw/issues/187320) [Bug]: Doctor idle eviction loses agent database maintenance scope `P2` `impact:other` 💬1
- [#187310](https://github.com/openclaw/openclaw/issues/187310) [Bug]: Config patch keeps waiting for stdin after an accepted interruption `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#187221](https://github.com/openclaw/openclaw/issues/187221) Bug: browser reload silently loses unsaved file-editor drafts `P2` `clawsweeper:source-repro` `impact:data-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#188043](https://github.com/openclaw/openclaw/issues/188043) [Bug]: Failed media understanding drops the provider's reason (quota, auth, rate limit) from the agent marker and the log

#### 🔒 Closed Issues
- [#186813](https://github.com/openclaw/openclaw/issues/186813) bug: In-chat managed update (`gateway.update.run`) hangs indefinitely in `epoll_wait` on SQLite transaction lock contention without timeout
- [#156635](https://github.com/openclaw/openclaw/issues/156635) Context budget stays at Copilot synthetic 128k fallback after account discovery publishes a larger limit
- [#187468](https://github.com/openclaw/openclaw/issues/187468) Update failure: package-swap (2026.9.8)
- [#169213](https://github.com/openclaw/openclaw/issues/169213) [Bug]: Discord /status falsely rejects unchanged auth selection because the session entry is cloned
- [#153502](https://github.com/openclaw/openclaw/issues/153502) Session SQLite migration recovery report (session-sqlite-1789884963743-ce317201)
- [#176080](https://github.com/openclaw/openclaw/issues/176080) sessions: archive/reconcile worker queues have no settlement timeout or admission bound — one native-stuck worker wedges lifecycle paths and accumulates external memory
- [#187919](https://github.com/openclaw/openclaw/issues/187919) [Bug]: upgrade to 2026.10.9 healed only 1 of 12 tombstoned main sessions — the other 11 still reject every turn
- [#169156](https://github.com/openclaw/openclaw/issues/169156) [Bug]: model.usage diagnostic event (cost tracking) never fires for internal/background agent-turn sessions (internal-session-effects:*)
- [#154787](https://github.com/openclaw/openclaw/issues/154787) [Bug]: Mac model picker omits active context budget because models.list details are not requested
- [#154610](https://github.com/openclaw/openclaw/issues/154610) [Bug]: Context window renders hardcoded 200k because the provenance reader rejects the "resolved" source its own producers write
- [#187122](https://github.com/openclaw/openclaw/issues/187122) doctor: exits rc=0 without performing migrations (non-interactive invocation; invalid config)
- [#169640](https://github.com/openclaw/openclaw/issues/169640) [Bug]: macOS app runs "Gateway update repair" on every launch – codex plugin data/settings migration stays pending
- [#42106](https://github.com/openclaw/openclaw/issues/42106) [Bug]: Block streaming can drop paragraph separators across streamed updates
- [#149940](https://github.com/openclaw/openclaw/issues/149940) [Bug]: scheduled-task and cron/exec heartbeat prompts lack heartbeat_respond tool-absent fallback, quiet checks still deliver prose
- [#148531](https://github.com/openclaw/openclaw/issues/148531) browser snapshot prints nothing and exits 0 when the capture fails
- [#177854](https://github.com/openclaw/openclaw/issues/177854) [Bug]: Sessions table agent image avatars are clipped to thin crescents
- [#173478](https://github.com/openclaw/openclaw/issues/173478) [Bug]: Resolving an unregistered CLI command captures every external plugin (~54k files, ~0.9 GB) and takes minutes before "unknown command"
- [#177072](https://github.com/openclaw/openclaw/issues/177072) skill-collection-review: silently succeeds when agent tool policy excludes `ls`
- [#187788](https://github.com/openclaw/openclaw/issues/187788) [Bug]: memory embedding split-on-error recovery never fires when a gateway truncates the provider error message
- [#187680](https://github.com/openclaw/openclaw/issues/187680) Doctor credential migration creates <provider>:models-json profile that shadows a valid shared profile (silent fallback loss)
- [#153594](https://github.com/openclaw/openclaw/issues/153594) Assistant-emitted tool-call markup (<invoke name=…>) is delivered verbatim to channels
- [#152791](https://github.com/openclaw/openclaw/issues/152791) [Bug]: OPENCLAW_ALLOW_OLDER_BINARY_DESTRUCTIVE_ACTIONS=1 does not allow an older binary to start against newer-migrated config
- [#150922](https://github.com/openclaw/openclaw/issues/150922) [Bug] Control UI dictation inserts the transcript twice into the composer on iOS Safari (macOS Chrome and Safari insert once)
- [#149942](https://github.com/openclaw/openclaw/issues/149942) [Bug]: Telegram provider startup blocks the gateway event loop on synchronous persisted thread-binding reads
- [#137197](https://github.com/openclaw/openclaw/issues/137197) [Bug]: inline /model parser treats ordinary prose as a model selection and aborts the turn
- [#150012](https://github.com/openclaw/openclaw/issues/150012) [Bug]: `openclaw sessions export-trajectory` changes agent and state SQLite files from 0640 to 0600 and opens the agent database writable
- [#187330](https://github.com/openclaw/openclaw/issues/187330) [Bug]: cold transcript recovery test advances the wrong retry clock
- [#182967](https://github.com/openclaw/openclaw/issues/182967) Update failure: invalid-config (2026.10.7)
- [#187982](https://github.com/openclaw/openclaw/issues/187982) Fresh --beta installation silently switches to stable before npm exists
- [#187945](https://github.com/openclaw/openclaw/issues/187945) [Bug]: Chat loses its reading position after switching through several sessions
- [#187903](https://github.com/openclaw/openclaw/issues/187903) onboard --auth-choice apiKey loops on AUTH_PROFILE_MIGRATION_REQUIRED (2026.10.2, Render/AlphaClaw template)
- [#184254](https://github.com/openclaw/openclaw/issues/184254) Update failure: gateway-recovery-verification (2026.10.6)
- [#187878](https://github.com/openclaw/openclaw/issues/187878) Doctor refuses isolated-state migration because it inherits caller paths for an unrelated service
- [#156803](https://github.com/openclaw/openclaw/issues/156803) [Bug]: MiMo V2.6 thinking blocks visible in UI despite reasoningDefault=off and /reasoning off
- [#187736](https://github.com/openclaw/openclaw/issues/187736) sessions import --limit counts failed rows against the budget and skips healthy sessions
- [#187657](https://github.com/openclaw/openclaw/issues/187657) Update failure: requested (2026.9.33)
- [#187678](https://github.com/openclaw/openclaw/issues/187678) Installer reports Homebrew success and continues after its bootstrap fails
- [#154371](https://github.com/openclaw/openclaw/issues/154371) [Bug]: Per-sender chat bubble tint ignores the active theme palette
- [#187681](https://github.com/openclaw/openclaw/issues/187681) Doctor groupAllowFrom migration overwrites an explicit empty list with DM allowFrom senders
- [#187548](https://github.com/openclaw/openclaw/issues/187548) [Bug]: update repair deadlocks when multiple abandoned runs have mismatched hostnames
- [#187613](https://github.com/openclaw/openclaw/issues/187613) Git main installer upgrades a runtime that passes source and SQLite requirements
- [#143214](https://github.com/openclaw/openclaw/issues/143214) [Bug]: google-vertex provider can't serve both Gemini 2.5 (regional) and Gemini 3.x (global) models at once
- [#150808](https://github.com/openclaw/openclaw/issues/150808) Cron/direct-announce delivery silently DROPS the entire remaining output when a turn's final text ends with a trailing silent token
- [#150962](https://github.com/openclaw/openclaw/issues/150962) [Bug]: MiniMax catalog discovery throws Invalid URL on an unparseable configured baseUrl instead of reporting the provider unavailable
- [#150550](https://github.com/openclaw/openclaw/issues/150550) [Bug]: Command palette icon is off-screen on mobile web — hidden behind the … menu in chat, absent from the sidebar drawer
- [#187519](https://github.com/openclaw/openclaw/issues/187519) Installer accepts Node 24.16–24.22.0 but every published package requires >=24.22.1
- [#151015](https://github.com/openclaw/openclaw/issues/151015) [Bug]: Kilo Gateway models without tool support still receive tool definitions
- [#187431](https://github.com/openclaw/openclaw/issues/187431) fix: malformed update previews create state and scratch artifacts
- [#187390](https://github.com/openclaw/openclaw/issues/187390) [Bug]: Doctor session migration fails on 262-byte Matrix thread archive filename (ENAMETOOLONG)
- [#187333](https://github.com/openclaw/openclaw/issues/187333) fix: update dry-run rejects malformed config before returning its preview
- [#188012](https://github.com/openclaw/openclaw/issues/188012) iOS screenshots can start Watch boot while host CPU remains saturated
- [#187973](https://github.com/openclaw/openclaw/issues/187973) [Bug]: Later managed-file links bypass authenticated artifact actions
- [#187984](https://github.com/openclaw/openclaw/issues/187984) [Bug]: Workspace SVG files lack Preview with generic text metadata
- [#187937](https://github.com/openclaw/openclaw/issues/187937) [Bug]: An unrelated older service can prevent configuration changes from applying
- [#188007](https://github.com/openclaw/openclaw/issues/188007) Talk: spoken confirmation only accepts English ("yes", "confirm"…) — non-English users loop forever ("a newer confirmation request supersedes this one")
- [#188000](https://github.com/openclaw/openclaw/issues/188000) Update failure: package-install-omit-optional (2026.10.4)
- [#187879](https://github.com/openclaw/openclaw/issues/187879) [Bug]: Document context is lost after sandbox setup fails before the first model request
- [#187974](https://github.com/openclaw/openclaw/issues/187974) Doctor rehearsal fixtures remove retained worker broker sockets
- [#187964](https://github.com/openclaw/openclaw/issues/187964) Slack: visible sessions_spawn completion opens a thread under a top-level request when replyToMode is off
- [#187975](https://github.com/openclaw/openclaw/issues/187975) PR-preparation handoff test rejects an intentionally permitted guest preview
- [#187947](https://github.com/openclaw/openclaw/issues/187947) [Bug]: Busy cron condition checks consume occurrences without retry or visible skip
- [#187958](https://github.com/openclaw/openclaw/issues/187958) Service publication Doctor fixture expects an inherited caller profile
- [#187862](https://github.com/openclaw/openclaw/issues/187862) [Bug]: Long warning prefixes hide the cause in terminal run failure notices
- [#187969](https://github.com/openclaw/openclaw/issues/187969) Update failure: package-install-omit-optional (2026.10.5)
- [#181100](https://github.com/openclaw/openclaw/issues/181100) docs(workboard): dependency promotion also moves backlog/triage children; document which statuses hold a dependent card
- [#180412](https://github.com/openclaw/openclaw/issues/180412) [Docs Bug]: cli/memory says the managed dreaming cron depends on heartbeat
- [#180411](https://github.com/openclaw/openclaw/issues/180411) [Docs Bug]: memory-config says dreaming writes machine state to memory/.dreams/
- [#187949](https://github.com/openclaw/openclaw/issues/187949) Android TLS qualification fails without a platform blocklist update
- [#187912](https://github.com/openclaw/openclaw/issues/187912) fix: guests cannot preview tools in their own sessions
- [#187922](https://github.com/openclaw/openclaw/issues/187922) [Bug]: Common sandbox image cannot launch repository Chromium tests
- [#187908](https://github.com/openclaw/openclaw/issues/187908) sessions.search on PostgreSQL never uses the transcript GIN index (left() scope filter defeats the planner)
- [#187941](https://github.com/openclaw/openclaw/issues/187941) Chat UI: completed turn's final answer hidden behind collapsed Worked disclosure
- [#187809](https://github.com/openclaw/openclaw/issues/187809) Bug: restart recovery skips agent stores awaiting writable admission
- [#187939](https://github.com/openclaw/openclaw/issues/187939) Update failure: package-install-omit-optional (2026.10.4)
- [#187928](https://github.com/openclaw/openclaw/issues/187928) [Bug]: UI shell focus fixtures fail when both skip links are present
- [#187767](https://github.com/openclaw/openclaw/issues/187767) [Feature]: Configurable default tools for newly constructed automations
- [#187857](https://github.com/openclaw/openclaw/issues/187857) [Bug]: Same-user steering during completion turns queues on task-suggestion mode mismatch
- [#187902](https://github.com/openclaw/openclaw/issues/187902) [Bug]: PR preparation mistakes Git progress for a permission refusal
- [#185664](https://github.com/openclaw/openclaw/issues/185664) [Bug]: iOS Talk audio cuts off about five seconds after locking with background audio enabled
- [#187023](https://github.com/openclaw/openclaw/issues/187023) Bug: Codex reuses the failed client after a settled parent-local transport error
- [#186997](https://github.com/openclaw/openclaw/issues/186997) [Feature]: Omit repeated PR attribution instructions when the feature is disabled
- [#187906](https://github.com/openclaw/openclaw/issues/187906) `openclaw memory search` CLI takes 35–47s while the same search via the running Gateway takes ~2s
- [#187832](https://github.com/openclaw/openclaw/issues/187832) [Bug]: Session PR actions say "no completed shared publication" after a later publish fails
- [#187863](https://github.com/openclaw/openclaw/issues/187863) Codex app-server exit preview loses terminal cause after stderr warnings
- [#187887](https://github.com/openclaw/openclaw/issues/187887) Knowledge readiness export fails production dependency validation
- [#183705](https://github.com/openclaw/openclaw/issues/183705) [Bug]: Goals created during a chat stop after delegated work returns
- [#187885](https://github.com/openclaw/openclaw/issues/187885) [Bug]: Watched PR retention fixture does not advance the elapsed cache clock
- [#187876](https://github.com/openclaw/openclaw/issues/187876) [Bug]: Telegram final reply lost ("unknown_after_send") right after a successful sendMessage in the same turn — 2026.10.7, includes #156842
- [#187851](https://github.com/openclaw/openclaw/issues/187851) Doctor JSON built-CLI test fails on the intentional blocked status
- [#187750](https://github.com/openclaw/openclaw/issues/187750) Unused unclaimed session-delivery producer fails the production export check
- [#187838](https://github.com/openclaw/openclaw/issues/187838) Talk retains active work after synchronous consult preparation fails
- [#187847](https://github.com/openclaw/openclaw/issues/187847) CI: explicit timeout forwarding fixture leaves monotonic time running
- [#187842](https://github.com/openclaw/openclaw/issues/187842) OpenClaw: message-tool sends from scheduled runs aren't recorded in the agent's chat
- [#187834](https://github.com/openclaw/openclaw/issues/187834) claude-cli: weekly-limit on first auth profile doesn't rotate to next same-provider profile in auth.order (and no return-to-primary after reset)
- [#187740](https://github.com/openclaw/openclaw/issues/187740) Unused restart-title fixture causes a dependency-check finding
- [#187723](https://github.com/openclaw/openclaw/issues/187723) Gateway startup still fails on a transient database lock while clearing stale turn claims
- [#187815](https://github.com/openclaw/openclaw/issues/187815) Update failure: package-install-omit-optional (2026.10.5)
- [#180657](https://github.com/openclaw/openclaw/issues/180657) [Bug] Dreaming requests per-transcript inventory revisions it discards before scanning
- [#187810](https://github.com/openclaw/openclaw/issues/187810) Update failure: package-install-omit-optional (2026.10.5)
- [#187665](https://github.com/openclaw/openclaw/issues/187665) Signal skips buffered inbound messages during native HTTP SSE reconnects
- [#187655](https://github.com/openclaw/openclaw/issues/187655) [Bug]: streamed replies with a literal [[ in prose re-parse the whole answer per delta (29 s at 64 KB)
- [#187756](https://github.com/openclaw/openclaw/issues/187756) [Bug]: Startup catch-up runs agent-bound `command` cron jobs before agent DB admission; occurrence is lost, not deferred (2026.10.8)
- [#187741](https://github.com/openclaw/openclaw/issues/187741) Unused chat-run fixture export fails the full-tree export check
- [#187744](https://github.com/openclaw/openclaw/issues/187744) [Bug]: Explicit Node test children miss diagnostics under Bun
- [#187735](https://github.com/openclaw/openclaw/issues/187735) fix: QA poll cursor export fails unused-export checks
- [#187731](https://github.com/openclaw/openclaw/issues/187731) Unused queued-input target type fails dependency checks
- [#187663](https://github.com/openclaw/openclaw/issues/187663) [Bug]: CI unused-export check includes a retired RPC execution-start helper
- [#187647](https://github.com/openclaw/openclaw/issues/187647) fix: Markdown attachment file links navigate to missing conversations
- [#187700](https://github.com/openclaw/openclaw/issues/187700) [Bug]: unused active-run predicate fails dead-code checks
- [#187696](https://github.com/openclaw/openclaw/issues/187696) [Bug]: UI dev launcher kills Vite before normal shutdown finishes
- [#187462](https://github.com/openclaw/openclaw/issues/187462) [Bug]: Retired workerBundle fixture remains an unused export
- [#187463](https://github.com/openclaw/openclaw/issues/187463) [Bug]: Redundant provisioning type fails production unused-export checks
- [#187683](https://github.com/openclaw/openclaw/issues/187683) [Bug]: Catalog comparison helper fails unused-export checks
- [#187455](https://github.com/openclaw/openclaw/issues/187455) Unused operator recovery byte-limit export fails the dependency audit
- [#187598](https://github.com/openclaw/openclaw/issues/187598) [Bug]: Stop interrupts native Codex helpers but leaves their commands running
- [#187359](https://github.com/openclaw/openclaw/issues/187359) [Bug]: Gateway RPC CLIENT_TIMEOUT during slow WhatsApp media uploads triggers duplicate delivery retries
- [#187649](https://github.com/openclaw/openclaw/issues/187649) [Bug]: BTW message-end drain fixture no longer matches paragraph chunking
- [#184474](https://github.com/openclaw/openclaw/issues/184474) [Feature]: Create single-use Discord channel invites with the message tool
- [#187446](https://github.com/openclaw/openclaw/issues/187446) [Bug]: Orphan messageSource fixture fails the full-tree export check
- [#187575](https://github.com/openclaw/openclaw/issues/187575) [Bug]: Hosted Auto-device test leaks preferences into background session tests
- [#187544](https://github.com/openclaw/openclaw/issues/187544) New Session reload forgets an explicit permission selection
- [#187620](https://github.com/openclaw/openclaw/issues/187620) [Bug]: orphan completion reader fails the full-tree export check
- [#187456](https://github.com/openclaw/openclaw/issues/187456) [Bug]: Restart resume text is reported as an unused export
- [#187457](https://github.com/openclaw/openclaw/issues/187457) Retired transcript recovery predicates remain production export findings
- [#187617](https://github.com/openclaw/openclaw/issues/187617) Files warning tests can fail before the lazy toast view finishes loading
- [#187616](https://github.com/openclaw/openclaw/issues/187616) Update failure: package-install-omit-optional (2026.10.5)
- [#187386](https://github.com/openclaw/openclaw/issues/187386) CI reports an orphan pending-final clear export after restart recovery removal
- [#187591](https://github.com/openclaw/openclaw/issues/187591) Update failure: package-install-omit-optional (2026.9.8)
- [#187464](https://github.com/openclaw/openclaw/issues/187464) [Bug]: Unused restart sentinel continuation type exports fail the dependency check
- [#187559](https://github.com/openclaw/openclaw/issues/187559) fix: prevent long split-diff lines from overlapping in Review
- [#187447](https://github.com/openclaw/openclaw/issues/187447) [Bug]: Dependency checks retain the retired reply admission ID helper
- [#187334](https://github.com/openclaw/openclaw/issues/187334) [Bug]: one-shot session-target automations fail with "PostgreSQL connections must run in a worker" on PostgreSQL state
- [#127446](https://github.com/openclaw/openclaw/issues/127446) Local PDF extraction cannot be preempted by its deadline or owning run cancellation
- [#187452](https://github.com/openclaw/openclaw/issues/187452) [Bug]: retired recovery media collectors fail dead-code checks
- [#187525](https://github.com/openclaw/openclaw/issues/187525) [Bug]: Backup test cleanup deletes inputs after retained reader close fails
- [#187545](https://github.com/openclaw/openclaw/issues/187545) Update failure: gateway-recovery-verification (2026.10.7)
- [#187436](https://github.com/openclaw/openclaw/issues/187436) [Bug]: Internal session-send delivery types fail unused-export CI
- [#187538](https://github.com/openclaw/openclaw/issues/187538) timedOutByRunBudget kill provides no in-channel notice (silent mid-task abort)
- [#187445](https://github.com/openclaw/openclaw/issues/187445) [Bug]: delivery fixture retains unused deliveryContext export
- [#187488](https://github.com/openclaw/openclaw/issues/187488) fix: retired boundary test blocks native validation planning
- [#187510](https://github.com/openclaw/openclaw/issues/187510) [Feature]: Localize general CLI command output (follow-up to wizard i18n)
- [#187441](https://github.com/openclaw/openclaw/issues/187441) [Bug]: CI omits the WebSocket retention proof from Node/V8 routing
- [#187396](https://github.com/openclaw/openclaw/issues/187396) [Bug]: detached memory rebuild notice test advances the wrong retry clock
- [#187437](https://github.com/openclaw/openclaw/issues/187437) [Bug]: Retired failed-placement adapter fails unused-export checks
- [#187387](https://github.com/openclaw/openclaw/issues/187387) [Bug]: unused session communication error export fails dependency checks
- [#187399](https://github.com/openclaw/openclaw/issues/187399) [Bug]: SQLite hardlink backup fixtures omit maintained scratch isolation
- [#187379](https://github.com/openclaw/openclaw/issues/187379) [Bug]: admission refusal internals cause production unused-export CI failures
- [#187450](https://github.com/openclaw/openclaw/issues/187450) [Bug]:Android Talk uses a persistent device-associated session instead of the currently selected chat session
- [#187201](https://github.com/openclaw/openclaw/issues/187201) [Bug]: Copying a message loses keyboard focus after the clipboard write settles
- [#187378](https://github.com/openclaw/openclaw/issues/187378) fix: keep Workshop diet helpers private
- [#187343](https://github.com/openclaw/openclaw/issues/187343) [Bug]: CI export scans reject internal release provenance helpers
- [#187377](https://github.com/openclaw/openclaw/issues/187377) [Bug]: dependency checks report an unused self-hold metadata type export
- [#187150](https://github.com/openclaw/openclaw/issues/187150) [Bug]: backup create: SQLite header probe uses one 10 s budget for the whole state dir, so backups fail once it holds a few hundred thousand files
- [#187376](https://github.com/openclaw/openclaw/issues/187376) Unused-file check misses the plugin-state authority measurement entrypoint
- [#187380](https://github.com/openclaw/openclaw/issues/187380) [Bug]: Dead outbound-preparing-v1 shell row wedges a main session: restart recovery defers forever on pending_delivery
- [#187373](https://github.com/openclaw/openclaw/issues/187373) Cron: in-process start retry marks live runs 'interrupted by gateway restart' (startup repair ignores same-process receipts; 2026.10.7)
- [#127534](https://github.com/openclaw/openclaw/issues/127534) Telegram delete reports failure when retry proves the message is already absent
- [#187154](https://github.com/openclaw/openclaw/issues/187154) [Bug]: Resume keeps its pre-TUI Gateway connection alive after interruption
- [#187364](https://github.com/openclaw/openclaw/issues/187364) Update failure: package-install-omit-optional (2026.10.1)
- [#187245](https://github.com/openclaw/openclaw/issues/187245) [Bug]: Connect join lookup keeps waiting after an accepted interruption
- [#187240](https://github.com/openclaw/openclaw/issues/187240) Dead-code checks flag an unused transcript iterator export
- [#187326](https://github.com/openclaw/openclaw/issues/187326) [Bug]: release-tag resume test uses branch context and fails CI
- [#187321](https://github.com/openclaw/openclaw/issues/187321) [Bug]: Dead-code scan reports the documented history projection measurement as unused
- [#187200](https://github.com/openclaw/openclaw/issues/187200) [Bug]: Systems machine search misses canonically equivalent Unicode names
- [#187153](https://github.com/openclaw/openclaw/issues/187153) [Bug]: Interrupting dashboard leaves Control UI document readiness running
- [#187320](https://github.com/openclaw/openclaw/issues/187320) [Bug]: Doctor idle eviction loses agent database maintenance scope
- [#187221](https://github.com/openclaw/openclaw/issues/187221) Bug: browser reload silently loses unsaved file-editor drafts

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 258,539 · **Open issues:** 51,930 · **Last push:** <1h ago

On October 30, 2026, there were no new releases or merged pull requests for Hermes Agent. The day saw the introduction of several new issues, with a focus on various bugs affecting the system's performance and usability. Notably, issue #146643 highlights a problem where the gateway re-reads the entire session history on every change, leading to increasing CPU and desktop timeouts as the store size grows. Additionally, issue #146668 details a hang in the WeCom proactive send process, which affects the cron delivery queue due to a lack of timeout in the `_dispatch_on_gateway_loop`. This cluster of issues indicates significant underlying performance challenges that may require urgent attention.

#### 🐛 New Issues
- [#146643](https://github.com/NousResearch/hermes-agent/issues/146643) [Bug]: Gateway re-reads the whole session history on every change; CPU and Desktop timeouts grow with store size `type/perf` `comp/gateway` `P2` `area/sessions` 💬5
- [#146428](https://github.com/NousResearch/hermes-agent/issues/146428) [Bug]: cron run wedges permanently and silently when the delivery lane raises UnscopedSecretError resolving a home-target (multiplexed profiles) `type/bug` `comp/cron` `area/auth` `P2` 💬5
- [#146668](https://github.com/NousResearch/hermes-agent/issues/146668) [Bug]: WeCom proactive send hangs and wedges the cron delivery queue — `_dispatch_on_gateway_loop` has no timeout `type/bug` `comp/gateway` `comp/tools` `tool/file` 💬2
- [#146507](https://github.com/NousResearch/hermes-agent/issues/146507) [Bug]: async-delegation ledger SQLite ops run on the gateway event loop (10 s busy timeout → 10–20 s stalls, Discord heartbeat blocked) `type/bug` `comp/gateway` `tool/delegate` `P2` 💬2
- [#146678](https://github.com/NousResearch/hermes-agent/issues/146678) Linux: "clear" translucency mode ignores platform support — desktop window starts fully transparent (the setting is hidden as unsupported, so there is no way to turn it off from the UI) `type/bug` `area/config` `P2` `comp/desktop` 💬1
- [#146699](https://github.com/NousResearch/hermes-agent/issues/146699) Cron: agents can't see their jobs' run history or whether a run was delivered or silenced `type/feature` `comp/tools` `comp/cron` `P3` 💬1
- [#146698](https://github.com/NousResearch/hermes-agent/issues/146698) Kanban managed worker drops the provider's `transport`/`api_mode`, so custom Anthropic-wire providers 404 `type/bug` `comp/agent` `P3` 💬1
- [#146612](https://github.com/NousResearch/hermes-agent/issues/146612) [Bug]: code health reports "(ok)" when it measured nothing — `base == head` exits 0 with no verdict `type/bug` `P2` 💬1
- [#146691](https://github.com/NousResearch/hermes-agent/issues/146691) Bot Chat delivery refused not_found for good when the canonical title is held by a CLOSED login-stamped Desktop row (#143715, closed dimension) `type/bug` `comp/gateway` `P2` `area/sessions` 💬1
- [#146682](https://github.com/NousResearch/hermes-agent/issues/146682) Desktop: 'resume failed 30s' + sticky 'backend checking' — background session.resume budget, frozen gui.log tail, and RPC pool starvation `type/perf` `P2` `comp/desktop` `area/sessions` 💬1
- [#146683](https://github.com/NousResearch/hermes-agent/issues/146683) [Bug]: Named profiles that borrow root's Anthropic OAuth row refresh it under their own auth.lock; concurrent refreshes revoke the grant (multi-profile `auth_permanent`) `type/bug` `comp/agent` `provider/anthropic` `area/auth` 💬1
- [#146676](https://github.com/NousResearch/hermes-agent/issues/146676) Cron ticker froze mid-sweep for 17h, silently — WITH the #60703 bounded jobs-lock fix present (0.22.5): what unbounded shared wait can park the sweep thread? `type/bug` `comp/cron` `P2` 💬1
- [#146716](https://github.com/NousResearch/hermes-agent/issues/146716) [Bug]: Telegram shutdown can return before admission claims release; queued cancellation leaks handler coroutine
- [#146712](https://github.com/NousResearch/hermes-agent/issues/146712) [Bug] Forked sessions inherit parent session timestamp instead of using fork creation time `type/bug` `P3` `area/sessions` `comp/tui-gateway`
- [#146710](https://github.com/NousResearch/hermes-agent/issues/146710) Removed `P3`
- [#146711](https://github.com/NousResearch/hermes-agent/issues/146711) On OAuth (Claude plan) logins the skills index renames the hermes-agent skill to claude-code `type/bug` `comp/agent` `tool/skills` `provider/anthropic`
- [#146709](https://github.com/NousResearch/hermes-agent/issues/146709) [Feature]: uv system certs by default `area/config` `P3` `area/install-update`
- [#146707](https://github.com/NousResearch/hermes-agent/issues/146707) [Feature]: Realtime voice on iPhone that routes through hearing aids (MFi / CallKit audio route) `type/feature` `comp/gateway` `tool/tts` `P3`
- [#146700](https://github.com/NousResearch/hermes-agent/issues/146700) Cron: let a run pause or finish its own job without enabling agent scheduling everywhere `type/feature` `comp/tools` `comp/cron` `P3`
- [#146696](https://github.com/NousResearch/hermes-agent/issues/146696) Async delegation results never delivered when session entry has origin=None (_route_owner AttributeError) `type/bug` `comp/gateway` `tool/delegate` `platform/telegram`
- [#146686](https://github.com/NousResearch/hermes-agent/issues/146686) [Bug]: Windows — a still-mapped hermes.exe.deleteme makes the store-pip launcher publication fall back to .cmd and retire hermes.exe `type/bug` `comp/cli` `P2` `area/install-update`
- [#146677](https://github.com/NousResearch/hermes-agent/issues/146677) [Bug]: Hermes v0.22.5 fails to send x-opencode-session header to OpenCode Go... `type/bug` `comp/agent` `P2`

#### 🔒 Closed Issues
- [#146710](https://github.com/NousResearch/hermes-agent/issues/146710) Removed

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 95,869 · **Open issues:** 9,629 · **Last push:** <1h ago

On October 30, 2026, there were no new releases for vLLM; however, several significant pull requests were merged, including bug fixes for the ROCm system and improvements to various performance aspects, such as allocating GDN core output uninitialized and deduping transfer regions in the NIXL backend. Notable issues raised include concerns about accuracy loss with the NIXL EP and per-tensor FP8, alongside a bug related to the vllm-rs render functionality that has generated active discussions. Overall, the day was marked by maintenance and enhancements aimed at improving system stability and performance, with the most pressing issues pointing towards the need for better handling of image serving and rendering features.

#### ✅ Merged PRs
- [#64425](https://github.com/vllm-project/vllm/pull/64425) [Perf] Qwen3.5 GDN: overlap in_proj_ba with in_proj_qkvz on the aux stream
- [#57662](https://github.com/vllm-project/vllm/pull/57662) [Bugfix][NIXL] Dedup transfer regions by (base_addr, block_len)
- [#64419](https://github.com/vllm-project/vllm/pull/64419) [Perf][GDN] Allocate GDN core output uninitialized, write FlashInfer prefill in place
- [#63054](https://github.com/vllm-project/vllm/pull/63054) [Bugfix][ROCm] Use 64-bit row offsets in the Triton W4A16 GEMM
- [#64615](https://github.com/vllm-project/vllm/pull/64615) [Bugfix][Frontend] Leave GLM-4.7 array and object tool arguments unpinned
- [#64553](https://github.com/vllm-project/vllm/pull/64553) [Kernel] Add CUDA routing kernel for Muse Spark Open
- [#64619](https://github.com/vllm-project/vllm/pull/64619) [CI][Kimi-K3] Add enable_adaptive_verification to the KDA checkpoint test stub
- [#64576](https://github.com/vllm-project/vllm/pull/64576) [CI][MoE] Start every MoE kernel test file from a clean GPU state
- [#64342](https://github.com/vllm-project/vllm/pull/64342) [CI] Fix mypy multimodels tests folder
- [#64582](https://github.com/vllm-project/vllm/pull/64582) [Bugfix][KV Connector][NIXL] Fix Mamba region stride on block-outermost layouts
- [#64544](https://github.com/vllm-project/vllm/pull/64544) [Docs][ROCm] Mistral Large 4 recipe: ROCm image tag, MI355X, TP4 replica launch
- [#64535](https://github.com/vllm-project/vllm/pull/64535) [Bugfix][Parser] Parse closed GLM-4.7 tool arguments once while streaming
- [#64555](https://github.com/vllm-project/vllm/pull/64555) [CI][KV Offload][P2P] Wait for the handshake in the idle peer-hit tests
- [#64115](https://github.com/vllm-project/vllm/pull/64115) [CI] Enroll two steps and two AMD mirrors in automatic sharding
- [#64101](https://github.com/vllm-project/vllm/pull/64101) [ROCm][Perf][DSv4.1] Mono decode at TP8 on MI355X
- [#64378](https://github.com/vllm-project/vllm/pull/64378) [ROCm][Quantization] NVFP4 MoE re-quantization and fused shared experts through online quantization
- [#64193](https://github.com/vllm-project/vllm/pull/64193) [KV Connector][Mooncake] Renew prefill KV leases from the decoder
- [#63816](https://github.com/vllm-project/vllm/pull/63816) [Bugfix][ROCm][DSv4.1] Guard NaN scores in gfx942 mono routing
- [#52838](https://github.com/vllm-project/vllm/pull/52838) [Bugfix][AMD] A GPU-CPU KV transfer fault in OffloadingConnector takes the engine down instead of degrading the cache.
- [#62359](https://github.com/vllm-project/vllm/pull/62359) [Perf][DSv4.1] Share Engram host tables as host-NUMA cuMem across DP ranks
- [#62481](https://github.com/vllm-project/vllm/pull/62481) [ROCm] Monitor FlyDSL JIT compilation after warmup
- [#62009](https://github.com/vllm-project/vllm/pull/62009) [Perf][EPLB][DSv4] Add a symm_mem weight-migration backend and fuse MegaMoE replica mapping

#### 🐛 New Issues
- [#64401](https://github.com/vllm-project/vllm/issues/64401) [RFC]: Large-page KV cache allocator: one KV cache group per spec `RFC` `kimi` 💬2
- [#64433](https://github.com/vllm-project/vllm/issues/64433) [Bug]: vllm-rs render drops tools for tool_choice "none" and rejects empty content, unlike the Python frontend `tool-calling` 💬3
- [#64489](https://github.com/vllm-project/vllm/issues/64489) [Bug]: vllm/vllm-openai:unlimited-ocr image cannot serve Unlimited-OCR model `bug` 💬2
- [#64523](https://github.com/vllm-project/vllm/issues/64523) [Feature]: Release-tagged ROCm 10 images for vllm/vllm-openai-rocm `rocm` 💬2
- [#64456](https://github.com/vllm-project/vllm/issues/64456) [Bug]: Accuracy loss with NIXL EP and per-tensor FP8 `bug` `kv-connector` `quantization` 💬2
- [#64632](https://github.com/vllm-project/vllm/issues/64632) [Tracking] Muse Spark Open Improvement `rocm` 💬1
- [#64565](https://github.com/vllm-project/vllm/issues/64565) [Bug]: [ROCm/MI250] Qwen3.8-Flash-Next worker SIGABRT in HIP async event thread: free(): invalid next size (fast) `rocm` `quantization` 💬1
- [#64546](https://github.com/vllm-project/vllm/issues/64546) Muse tool parser JSON-decodes Optional[str] parameters, so "10001" becomes 10001 `tool-calling` 💬1
- [#64549](https://github.com/vllm-project/vllm/issues/64549) [Bug][ROCm] GLM-5.3 TP8 hangs during OffloadingConnector CPU-GPU copies when other vLLM processes share the MI325X SR-IOV VFs (v0.32.0) `rocm` `glm` 💬1
- [#64460](https://github.com/vllm-project/vllm/issues/64460) [Feature]: KV-pool-saturated admission retries inflate decode TPOT ~2.3x: request automatic admission backoff 💬1
- [#64431](https://github.com/vllm-project/vllm/issues/64431) [Bug]: DeepSeek V4.1 Python renderer ignores add_generation_prompt and continue_final_message `deepseek` `DSv4.1` 💬1
- [#64469](https://github.com/vllm-project/vllm/issues/64469) [Doc]: MiniMax-M3 AMD docstrings cause seven cross-reference warnings and fail strict docs builds `rocm` `minimax` 💬1
- [#64432](https://github.com/vllm-project/vllm/issues/64432) [Bug]: vllm-rs render has no --reasoning-effort-map, so mapped reasoning_effort values return 400 `tool-calling` 💬1
- [#64440](https://github.com/vllm-project/vllm/issues/64440) [Feature]: [MRV2][DBO] Scoped eager decode overlap with attention-only LoRA 💬1
- [#64600](https://github.com/vllm-project/vllm/issues/64600) [RFC]: Accept already-decoded images over NIXL in the vllm-rs gRPC API `kv-connector`
- [#64584](https://github.com/vllm-project/vllm/issues/64584) [Bug]: DeepSeek-V4.1 decode logprobs drift after a prefix-cache hit with swa_bounded_replay (default) `deepseek` `DSv4.1`
- [#64572](https://github.com/vllm-project/vllm/issues/64572) [Performance]: Triton and other eager attention backends re-derive K/V cache views on every call (same class as #59534) `quantization`
- [#64570](https://github.com/vllm-project/vllm/issues/64570) [Bug]: EngineCore dies with KeyError in punica `convert_mapping` when a LoRA name is unloaded and loaded again while its requests are in flight
- [#64538](https://github.com/vllm-project/vllm/issues/64538) [Bug]: Rust vllm-bench silently ignores --dataset-path with synthetic datasets (benchmarks random prompts instead of the user's file) `bug` `rust`
- [#64541](https://github.com/vllm-project/vllm/issues/64541) [Bug]: dots.ocr produces identical "blurry image" output for every region with tensor-parallel size 2
- [#64517](https://github.com/vllm-project/vllm/issues/64517) [Bug]: Muse, MiniCPM5 and Poolside V1 tool parsers JSON-decode string parameters not declared as plain "type": "string" (e.g. Optional[str]) `tool-calling`
- [#64508](https://github.com/vllm-project/vllm/issues/64508) [RFC]: Checkpoint-internal paging for hybrid recurrent state `RFC` `quantization`
- [#64497](https://github.com/vllm-project/vllm/issues/64497) [Bug]: [CPU] DP×TP with explicit binds crashes with IndexError on 2-NUMA hosts `bug`
- [#64446](https://github.com/vllm-project/vllm/issues/64446) [Performance]: Evaluate SM90 TP2 mHC boundary fusion under rotating weights
- [#64439](https://github.com/vllm-project/vllm/issues/64439) [Feature]: [MRV2][DBO] Scoped eager decode overlap for hybrid attention/recurrent MoE models `quantization`
- [#64436](https://github.com/vllm-project/vllm/issues/64436) [Bug]: Gemma4 MoE cannot load PEFT expert LoRA adapters without --enable-mixed-moe-lora-format `intel-gpu`
- [#64427](https://github.com/vllm-project/vllm/issues/64427) [Bug][Spec Decode] Model Runner V2 + DSpark at n=8: target degenerates to one repeated token while acceptance reports 87.5% `quantization`
- [#64418](https://github.com/vllm-project/vllm/issues/64418) [RFC]: Load plan — an engine-neutral API for sharded weight transfer `RFC` `quantization` `kimi`
- [#64422](https://github.com/vllm-project/vllm/issues/64422) [Feature]: [MRV2][DBO] Report executed microbatch counts and decision reasons

#### 🔒 Closed Issues
- [#59062](https://github.com/vllm-project/vllm/issues/59062) [RFC]: Online quantization from arbitrary precision
- [#59764](https://github.com/vllm-project/vllm/issues/59764) [Bug]: Qwen3.6-35B-A3B (hybrid GDN + MoE): a prompt's logprobs move by up to 0.2 when another sequence shares its engine step (v0.30.0, sm_120)
- [#60450](https://github.com/vllm-project/vllm/issues/60450) [Bug]: Sparse MLA indexer's expanded_block_table_buffer is allocated after KV sizing (1 GiB at 1M context)
- [#57929](https://github.com/vllm-project/vllm/issues/57929) [Bug]: `/v1/completions/derender` drops requested `prompt_logprobs`
- [#63049](https://github.com/vllm-project/vllm/issues/63049) [Bug]: TritonW4A16 GEMM faults on ROCm once M × N or M × K passes 2^31
- [#60537](https://github.com/vllm-project/vllm/issues/60537) [Bug]: `DeepSeek-V4.1-Flash`: `/v1/messages` hoists mid-conversation system messages without `--chat-template`, breaking prefix caching
- [#57661](https://github.com/vllm-project/vllm/issues/57661) [Bug]: NIXL P/D disagg silently corrupts output when hybrid-attention layers share a storage base with different block lengths (DeepSeek-V4.1-Flash)
- [#52965](https://github.com/vllm-project/vllm/issues/52965) [Bug]: [Bug]: bare `@torch.compile` in `kimi_k25_vit` compiles outside the compilation lifecycle and pins `TRITON_CACHE_DIR` process-wide
- [#52846](https://github.com/vllm-project/vllm/issues/52846) [Bug]: DeepSeek V4 buffers long string tool arguments until </parameter>
- [#63663](https://github.com/vllm-project/vllm/issues/63663) [Feature]: Support thinking_token_budget in the Responses API (/v1/responses)
- [#64469](https://github.com/vllm-project/vllm/issues/64469) [Doc]: MiniMax-M3 AMD docstrings cause seven cross-reference warnings and fail strict docs builds
- [#64432](https://github.com/vllm-project/vllm/issues/64432) [Bug]: vllm-rs render has no --reasoning-effort-map, so mapped reasoning_effort values return 400
- [#63565](https://github.com/vllm-project/vllm/issues/63565) [Bug]: [KV Offload] Hybrid models: a revisit that diverges before the stored Mamba state never reuses the offloaded prefix
- [#62865](https://github.com/vllm-project/vllm/issues/62865) [Bug]: Compile mode 2 leads to incorrect kernels when the Transformers backend is used
- [#60162](https://github.com/vllm-project/vllm/issues/60162) [Bug]: Humming FP8 linear crashes on per-tensor/per-channel FP8 weights, so FP8 models cannot start with VLLM_BATCH_INVARIANT=1 on Ampere
- [#64319](https://github.com/vllm-project/vllm/issues/64319) [Bug]: Rust vllm-bench accepts --max-concurrency 0 and hangs forever (Python rejects it since #54887)

### SGLang (`sgl-project/sglang`)

**Stars:** 38,368 · **Open issues:** 6,277 · **Last push:** <1h ago

There were no new releases for SGLang in the past 24 hours, but several important pull requests were merged, including the consolidation of XPU enablements in PR #46623 and an update to the coverage baseline for the NPU in PR #47365. Significant fixes include adjustments to avoid double-counting in graph replay (PR #47216) and a crucial fix for the LingBot's QKV sharing and causal RoPE under specific conditions (PR #46601). Refactoring efforts continued with enhancements to the multimodal processing architecture, notably through a series of nine PRs focused on token-space strategies and processor management. Among new issues, the bug reported in #47218 regarding a scheduler crash due to multimodal offsets becoming None under concurrent streams is garnering attention, indicating a potentially critical area for further investigation.

#### ✅ Merged PRs
- [#46623](https://github.com/sgl-project/sglang/pull/46623) [Feat] xpu: Consolidate simple XPU enablements
- [#47365](https://github.com/sgl-project/sglang/pull/47365) [CI] [NPU] coverage: Refresh the coverage baseline every 2 days and raise the publish gate to 40%
- [#47135](https://github.com/sgl-project/sglang/pull/47135) [Feat] lora: upsert on /load_lora_adapter
- [#40746](https://github.com/sgl-project/sglang/pull/40746) [Fix] [NPU] mtp: fix darft fias-v2 branch when fias v2 on
- [#47216](https://github.com/sgl-project/sglang/pull/47216) [Fix] [NPU] dspark: Avoid double-counting verify KV lengths in graph replay
- [#47208](https://github.com/sgl-project/sglang/pull/47208) [CI] [PPU] slash-command: Register PPU with shared opt-in CI tiers
- [#44457](https://github.com/sgl-project/sglang/pull/44457) [Perf] attention: Skip the triton MLA K rescale when k_scale is 1.0
- [#47022](https://github.com/sgl-project/sglang/pull/47022) [Perf] joy-image: Fuse image MLP GELU on SM120 in high quality
- [#47300](https://github.com/sgl-project/sglang/pull/47300) [Fix] TensorMatcher: keep symbol device/dtype options; use kDLGPU aliases
- [#46456](https://github.com/sgl-project/sglang/pull/46456) [Perf] paged-experts: exact size pinning
- [#46601](https://github.com/sgl-project/sglang/pull/46601) [Fix] diffusion: LingBot QKV sharing, causal RoPE on no-cache path, uneven split guard
- [#43896](https://github.com/sgl-project/sglang/pull/43896) [Refactor] scheduler: Write every request finish state through Req methods
- [#46024](https://github.com/sgl-project/sglang/pull/46024) [Perf] mhc: Split hc_combine_norm_mxfp8 rows by batch size and zero padding scales in the kernel
- [#47338](https://github.com/sgl-project/sglang/pull/47338) [Refactor] detokenizer: Move the incremental decode state and step into incremental_detokenize.py
- [#47328](https://github.com/sgl-project/sglang/pull/47328) [Perf] [NVIDIA] deep_select: Add a 3-CTA tier for the paged indexer top-k
- [#47115](https://github.com/sgl-project/sglang/pull/47115) [Perf] moe: Fill padded rows of large narrow buffers with a strided grid
- [#47304](https://github.com/sgl-project/sglang/pull/47304) [Perf] dsv41: Drop per-layer routing glue under simulated routing with EPLB
- [#47335](https://github.com/sgl-project/sglang/pull/47335) [Test] managers: Check output_ids in the router grouping test
- [#46769](https://github.com/sgl-project/sglang/pull/46769) [Refactor] multimodal: [sglang-miles] [MM refactor 9/9] Expand only the new turn of a multimodal request
- [#46768](https://github.com/sgl-project/sglang/pull/46768) [Refactor] multimodal: [sglang-miles] [MM refactor 8/9] Check token-space Qwen output against the legacy processor
- [#46767](https://github.com/sgl-project/sglang/pull/46767) [Refactor] multimodal: [sglang-miles] [MM refactor 7/9] Add a token-space strategy for Qwen VL models
- [#46753](https://github.com/sgl-project/sglang/pull/46753) [Refactor] multimodal: [sglang-miles] [MM refactor 6/9] Serve token-space processors behind --enable-token-space-processor
- [#46729](https://github.com/sgl-project/sglang/pull/46729) [Refactor] multimodal: [sglang-miles] [MM refactor 5/9] Add a token-space multimodal processor
- [#46699](https://github.com/sgl-project/sglang/pull/46699) [Refactor] multimodal: [sglang-miles] [MM refactor 4/9] Split feature transport and preprocessing placement out of the base processor
- [#46696](https://github.com/sgl-project/sglang/pull/46696) [Refactor] multimodal: [sglang-miles] [MM refactor 3/9] Extract a shared multimodal processor mixin
- [#46681](https://github.com/sgl-project/sglang/pull/46681) [Refactor] multimodal: [sglang-miles] [MM refactor 2/9] Initialize multimodal processors from a processor config
- [#46680](https://github.com/sgl-project/sglang/pull/46680) [Refactor] multimodal: [sglang-miles] [MM refactor 1/9] Move multimodal enums to a shared module
- [#46184](https://github.com/sgl-project/sglang/pull/46184) [Perf] mamba: write the deduplicated conv verify window as one tile
- [#47286](https://github.com/sgl-project/sglang/pull/47286) [Fix] attention: Skip the MSA-v1 QMUL4 prefill case when QMUL4 is unavailable
- [#44200](https://github.com/sgl-project/sglang/pull/44200) [Feat] watermark: Add DSPARK speculative decoding support
- [#47249](https://github.com/sgl-project/sglang/pull/47249) [Refactor] scheduler: Drop the dead Req.decoded_text and BatchTokenIDOutput.decoded_texts
- [#43895](https://github.com/sgl-project/sglang/pull/43895) [Refactor] scheduler: Write every request KV length through ReqKvInfo methods
- [#46500](https://github.com/sgl-project/sglang/pull/46500) [Feat] LoRA: revamp LoRADrainer for better performance
- [#47178](https://github.com/sgl-project/sglang/pull/47178) [Perf] scheduler: Send the per-request output stats only when they may have changed
- [#34038](https://github.com/sgl-project/sglang/pull/34038) [Refactor] Spec: Resolve the ragged-verify graph tier at a single point
- [#46592](https://github.com/sgl-project/sglang/pull/46592) [Fix] eplb: Warm default-group P2P transports on multi-node layouts
- [#45434](https://github.com/sgl-project/sglang/pull/45434) [Feat] cp: Add KV layout hooks and padded storage accounting
- [#47124](https://github.com/sgl-project/sglang/pull/47124) [Feat] disaggregation: Decode host receive on the unified page-envelope host pool
- [#47158](https://github.com/sgl-project/sglang/pull/47158) [Refactor] engine: Make the follower-rank SIGTERM handler an overridable classmethod
- [#47107](https://github.com/sgl-project/sglang/pull/47107) [Refactor] tokenizer_manager: Move the crash-dump writer into a utils module
- [#47072](https://github.com/sgl-project/sglang/pull/47072) [Feat] scheduler: Add typed per-token and per-request customized_info values
- [#47015](https://github.com/sgl-project/sglang/pull/47015) [Perf] pd: Poll finished KV transfers while the prefill loop waits for a forward result
- [#47034](https://github.com/sgl-project/sglang/pull/47034) [Feat] [MUSA] breakable: Support portable capture status
- [#47303](https://github.com/sgl-project/sglang/pull/47303) [Doc] cookbook: Add MiniMax-M3.1-Flash B300 TP2 SPF AgentX points
- [#47169](https://github.com/sgl-project/sglang/pull/47169) [Feat] rust-server: Report the model's launch-time fields in /model_info
- [#47161](https://github.com/sgl-project/sglang/pull/47161) [Perf] rust-server: Pin frontend threads to one shared CPU set, not one core each
- [#47108](https://github.com/sgl-project/sglang/pull/47108) [Fix] rust-server: Admit a multimodal model's generations only once its MM processor is installed
- [#46968](https://github.com/sgl-project/sglang/pull/46968) [Feat] rust-server: Serve /start_profile and /stop_profile
- [#41389](https://github.com/sgl-project/sglang/pull/41389) [Feat] [AMD] Quark: Run Quark MXFP4 MoE as W4A16 via triton_kernels on RDNA (gfx1151)
- [#46868](https://github.com/sgl-project/sglang/pull/46868) [Feat] minimax-m3.1: Support DSpark on Hopper
- [#47244](https://github.com/sgl-project/sglang/pull/47244) [CI] [AMD] workflows: Run scheduled Extra tests, stop skipping nightly tests, merge MI35x 1-GPU jobs- #47238
- [#47162](https://github.com/sgl-project/sglang/pull/47162) [CI] [AMD] ci: Spread out tests and prefer today's images
- [#45802](https://github.com/sgl-project/sglang/pull/45802) [Fix] [AMD] quark: Skip no-copy loads after MXFP4 quantization
- [#45800](https://github.com/sgl-project/sglang/pull/45800) [Fix] GLM: Preserve NextN PTPC quantization for excluded experts
- [#45765](https://github.com/sgl-project/sglang/pull/45765) [Feat] glm5: Expose per-layer MLA key buffer and use_fused_topk in binding
- [#47092](https://github.com/sgl-project/sglang/pull/47092) [Fix] diffusion: fix colored seams in single-GPU Qwen-Image-2.1-Turbo VAE tiling
- [#47212](https://github.com/sgl-project/sglang/pull/47212) [Doc] cookbook: Add a new cookbook page (WIP)

#### 🐛 New Issues
- [#47218](https://github.com/sgl-project/sglang/issues/47218) [Bug] DeepSeek-V4 scheduler crash when multimodal offsets become None under concurrent aborted streams 💬3
- [#47289](https://github.com/sgl-project/sglang/issues/47289) [RFC] Add per-step TBO admission policy and fallback diagnostics 💬1
- [#47242](https://github.com/sgl-project/sglang/issues/47242) [Bug] On Python 3.13, installing sglang 0.5.22 requires a Rust toolchain (hidden, undocumented, caused by outlines==0.1.11 → outlines_core==0.1.26 exact pin) 💬1
- [#47357](https://github.com/sgl-project/sglang/issues/47357) Llama KV scale loader replaces tensor scales with floats and leaves host mirrors stale
- [#47297](https://github.com/sgl-project/sglang/issues/47297) [Bug] diffusion: LingBot-Video-MoE crashes in text encoding under default layerwise offload (tied vocab table on CPU)
- [#47294](https://github.com/sgl-project/sglang/issues/47294) [Bug] /start_profile with profile_by_stage=true and no num_steps crashes every scheduler (TypeError: NoneType += int)
- [#47205](https://github.com/sgl-project/sglang/issues/47205) [Bug] Reasoning grammar gate never opens when the think-end marker splits under split_special_tokens
- [#47245](https://github.com/sgl-project/sglang/issues/47245) A retracted + re-prefilled request restarts its sampling-penalty and `min_new_tokens` history from zero, silently changing its output
- [#47226](https://github.com/sgl-project/sglang/issues/47226) [Feature] Accept extra_params on /v1/audio/speech like vLLM-Omni (Qwen3-TTS currently ignores it without an error)
- [#47213](https://github.com/sgl-project/sglang/issues/47213) [Bug] Qwen3.5 prefix-cache reuse changes logprobs with deterministic inference enabled
- [#47207](https://github.com/sgl-project/sglang/issues/47207) [Feature] Evaluate a fused DeepSeek-V4.1 mHC boundary for SM90 TP2 low-token decode

#### 🔒 Closed Issues
- [#29738](https://github.com/sgl-project/sglang/issues/29738) [Bug] NameError: name 'deep_gemm' is not defined in tf32_hc_prenorm_gemm when SGLANG_ENABLE_JIT_DEEPGEMM=0
- [#36633](https://github.com/sgl-project/sglang/issues/36633) [CPU] FP8 KV store: keep fused decode path, stop using Python index_put
- [#36894](https://github.com/sgl-project/sglang/issues/36894) [Bug] /unload_lora_adapter permanently deadlocks the scheduler after parallel-sampling traffic (n > 1)
- [#35785](https://github.com/sgl-project/sglang/issues/35785) Triton version mismatch
- [#47289](https://github.com/sgl-project/sglang/issues/47289) [RFC] Add per-step TBO admission policy and fallback diagnostics

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 132,785 · **Open issues:** 2,576 · **Last push:** <1h ago

In the last 24 hours, llama.cpp released several new versions, including b11998, which introduced support for the mistral le chonk model and extended DSA and sdpark functionalities. The update b11997 focused on reusing the tensor staging buffer, optimizing performance. Notable merged features included support for the Limite 1B - Violetto model and the initial implementation of iq2 in OpenCL. New issues were raised, with #31385 highlighting a bug in the DeepSeek-V4.1-Flash-1017 GGUF, indicating ongoing challenges within the system. Overall, the updates reflect a commitment to enhancing performance and expanding model support in the ecosystem.

#### 🚀 New Releases
- [b11998](https://github.com/ggml-org/llama.cpp/releases/tag/b11998) b11998
- [b11997](https://github.com/ggml-org/llama.cpp/releases/tag/b11997) b11997
- [b11988](https://github.com/ggml-org/llama.cpp/releases/tag/b11988) b11988
- [b11986](https://github.com/ggml-org/llama.cpp/releases/tag/b11986) b11986
- [b11985](https://github.com/ggml-org/llama.cpp/releases/tag/b11985) b11985
- [b11982](https://github.com/ggml-org/llama.cpp/releases/tag/b11982) b11982
- [b11981](https://github.com/ggml-org/llama.cpp/releases/tag/b11981) b11981
- [b11980](https://github.com/ggml-org/llama.cpp/releases/tag/b11980) b11980
- [b11979](https://github.com/ggml-org/llama.cpp/releases/tag/b11979) b11979
- [b11978](https://github.com/ggml-org/llama.cpp/releases/tag/b11978) b11978

#### ✅ Merged PRs
- [#31374](https://github.com/ggml-org/llama.cpp/pull/31374) common : end reasoning budget forcing on an end tag from the prompt
- [#30761](https://github.com/ggml-org/llama.cpp/pull/30761) sycl: FLASH_ATTN_EXT failures
- [#30881](https://github.com/ggml-org/llama.cpp/pull/30881) ggml : add batched tensor copy API
- [#31373](https://github.com/ggml-org/llama.cpp/pull/31373) ROCm/HIP: add RDNA4_M family for gfx1170/gfx1171 targets
- [#27512](https://github.com/ggml-org/llama.cpp/pull/27512) Quant: OCP FP8 E4M3 support
- [#31376](https://github.com/ggml-org/llama.cpp/pull/31376) model: mistral large 4 le chonk
- [#31375](https://github.com/ggml-org/llama.cpp/pull/31375) skills: specify rule about ggml_build_forward_expand
- [#31321](https://github.com/ggml-org/llama.cpp/pull/31321) llama : reuse the tensor staging buffer and skip the direct-io bounce buffer
- [#31350](https://github.com/ggml-org/llama.cpp/pull/31350) server : restore the spec checkpoint for drafts longer than n_rs_seq
- [#31303](https://github.com/ggml-org/llama.cpp/pull/31303) ui: add MCP server checkboxes in tools settings and fix indeterminate checkbox colors
- [#31307](https://github.com/ggml-org/llama.cpp/pull/31307) ui: reveal the collapsed sidebar from its logo and toggle it there
- [#31311](https://github.com/ggml-org/llama.cpp/pull/31311) ui: keep chats at the bottom until the reader scrolls up
- [#31324](https://github.com/ggml-org/llama.cpp/pull/31324) ui: show submit button instead of mic and stop buttons when the input has content
- [#31360](https://github.com/ggml-org/llama.cpp/pull/31360) ggml-metal : fix unary kernels compile on older Metal toolchains
- [#31299](https://github.com/ggml-org/llama.cpp/pull/31299) ui: request persistent storage on startup
- [#31347](https://github.com/ggml-org/llama.cpp/pull/31347) docs: update ops for opencl backend
- [#31259](https://github.com/ggml-org/llama.cpp/pull/31259) HIP/CUDA: enable sparse attn on CDNA
- [#29433](https://github.com/ggml-org/llama.cpp/pull/29433) [Model] Support Limite 1B - Violetto
- [#30284](https://github.com/ggml-org/llama.cpp/pull/30284) common: select A100 cores for SpaceMiT default threads
- [#31267](https://github.com/ggml-org/llama.cpp/pull/31267) opencl: initial support for iq2
- [#31075](https://github.com/ggml-org/llama.cpp/pull/31075) metal : faster MXFP4 mat-vec, full threadgroups for unary/binary/GLU
- [#31357](https://github.com/ggml-org/llama.cpp/pull/31357) tests : remove duplicate FA test cases added in #31125
- [#31331](https://github.com/ggml-org/llama.cpp/pull/31331) hexagon: support for UPSCALE op
- [#31277](https://github.com/ggml-org/llama.cpp/pull/31277) hexagon: improve DDR bw utilization in transposed CONCAT
- [#31125](https://github.com/ggml-org/llama.cpp/pull/31125) [SYCL] add DPAS flash attention kernel for quantized KV cache
- [#30976](https://github.com/ggml-org/llama.cpp/pull/30976) sycl : vectorize reordered-layout dequantization stores (Q4_0, K-quants, IQ3, MXFP4)
- [#31344](https://github.com/ggml-org/llama.cpp/pull/31344) tests : fix comp_padding CUDA graph reservation
- [#31334](https://github.com/ggml-org/llama.cpp/pull/31334) ggml-openvino: slice view inputs of SCALE, CI fix

#### 🐛 New Issues
- [#31385](https://github.com/ggml-org/llama.cpp/issues/31385) Eval bug: DeepSeek-V4.1-Flash-1017 GGUF issues `bug-unconfirmed` 💬2
- [#31346](https://github.com/ggml-org/llama.cpp/issues/31346) Misc. bug: test-llama-context crashing on deepseek41-moe.gguf `bug-unconfirmed` 💬2
- [#31353](https://github.com/ggml-org/llama.cpp/issues/31353) Feature Request: injection at the start of the thinking process `enhancement` 💬1
- [#31351](https://github.com/ggml-org/llama.cpp/issues/31351) Misc. bug: router memory measurement leaves out the draft model 💬1
- [#31402](https://github.com/ggml-org/llama.cpp/issues/31402) Misc. bug: Eval bug: Vulkan DeviceLostError on AMD 8845HS (Radeon 780M) starting from b10369 `bug-unconfirmed`
- [#31396](https://github.com/ggml-org/llama.cpp/issues/31396) Feature Request: CUDA: faster token generation for Hadamard-rotated models (fused GPU kernels) `enhancement`
- [#31393](https://github.com/ggml-org/llama.cpp/issues/31393) Research: ggml-cuda shared-memory failure with Vulkan acceleration structures
- [#31392](https://github.com/ggml-org/llama.cpp/issues/31392) draft-mtp: unconditional sched_need_reserve in set_sampler() rebuilds the scheduler every request — host RSS grows per request, never released
- [#31388](https://github.com/ggml-org/llama.cpp/issues/31388) Misc. bug: gputop reports 2GB usage on second(SYCL1) and therd(SYCL2) card with --device SYCL0 `bug-unconfirmed`
- [#31384](https://github.com/ggml-org/llama.cpp/issues/31384) Created in error
- [#31369](https://github.com/ggml-org/llama.cpp/issues/31369) Eval bug: SYCL server-intel image crashes (SIGSEGV) in oneAPI 2026.1 persistent device code cache `bug-unconfirmed`

#### 🔒 Closed Issues
- [#22921](https://github.com/ggml-org/llama.cpp/issues/22921) Feature Request: Allow independent control of slots (-ns) and parallelism (-np)
- [#28196](https://github.com/ggml-org/llama.cpp/issues/28196) CUDA: qwen35 on RTX 5090 (sm_120) decodes at 76% of roofline on native Linux with MTP ~1.7x; Windows/Ollama path runs 1.5-1.6x slower at every draft depth
- [#31272](https://github.com/ggml-org/llama.cpp/issues/31272) Eval bug: Metal backend fails to initialize on macOS 14 / M2 Ultra: constexpr bfloat cast in unary.metal
- [#31328](https://github.com/ggml-org/llama.cpp/issues/31328) LFM3: any response_format (json_schema or json_object) fails with "Unexpected empty grammar stack after accepting piece: 6 (30)"
- [#26306](https://github.com/ggml-org/llama.cpp/issues/26306) Update vulkan SDK in Linux vulkan builders to latest 1.4.357 release..
- [#28877](https://github.com/ggml-org/llama.cpp/issues/28877) CUDA error: misaligned address in ggml_cuda_op_unary<op_sigmoid> with long prompts on RTX 5090 Laptop (sm_120) — regression between d3146f2b5 and ad6c66839
- [#28904](https://github.com/ggml-org/llama.cpp/issues/28904) Feature Request: Hexagon FP8 weight support and DiT optimizations for HTP v79+
- [#31290](https://github.com/ggml-org/llama.cpp/issues/31290) Compile bug: error: call to undeclared function '_mm512_storeu_si512'; in ggml.c (icx/clang in MSVC compat mode)
- [#28908](https://github.com/ggml-org/llama.cpp/issues/28908) rpc : single-threaded accept loop starves every connection after the first
- [#30757](https://github.com/ggml-org/llama.cpp/issues/30757) Misc. bug: SYCL FLASH_ATTN_EXT failures
- [#31155](https://github.com/ggml-org/llama.cpp/issues/31155) Eval bug: mtmd-cli reuses a stale mtmd batch after /clear: previous image's embeddings returned, or GGML_ASSERT(offset <= batch->output_embd.size())
- [#31160](https://github.com/ggml-org/llama.cpp/issues/31160) Eval bug: Corrupted output when mixing draft-mtp and ngram-mod
- [#31384](https://github.com/ggml-org/llama.cpp/issues/31384) Created in error
- [#29261](https://github.com/ggml-org/llama.cpp/issues/29261) Eval bug: Abort when loading any model on spacemit k3 : "thread_n x exceeds perfer_core_ids size 8"

### Ollama (`ollama/ollama`)

**Stars:** 185,261 · **Open issues:** 4,492 · **Last push:** <1h ago

On October 30, 2026, there were no new releases for Ollama; however, two important pull requests were merged. PR #19392 introduced chunked sorting for long top-k rows in the mlx subsystem, while PR #19192 aimed at preserving input content in readable responses for the OpenAI integration. New issues emerged, with the most notable being #19385, which seeks assistance in restoring a model to a previous version, drawing significant attention with 14 comments. The day was largely routine in terms of maintenance, but the discussions around model restoration indicate ongoing user engagement with system functionality.

#### ✅ Merged PRs
- [#19392](https://github.com/ollama/ollama/pull/19392) mlx: sort long top-k rows in chunks
- [#19192](https://github.com/ollama/ollama/pull/19192) openai: preserve readable Responses input content

#### 🐛 New Issues
- [#19385](https://github.com/ollama/ollama/issues/19385) [HELP] Restore a Model to previous version 💬14
- [#19390](https://github.com/ollama/ollama/issues/19390) video `feature request` `app` 💬1
- [#19388](https://github.com/ollama/ollama/issues/19388) ternary bonsai 2 `feature request` 💬1
- [#19380](https://github.com/ollama/ollama/issues/19380) OpenAI compat: assistant `reasoning` dropped — and reasoning-only turns deleted — when `content` is a content-parts array 💬1
- [#19377](https://github.com/ollama/ollama/issues/19377) go_template silently drops the whole assistant turn for qwen3 tool calls (empty content, tool_calls: null, eval_count > 0); llama.cpp template parses the same generation correctly 💬1
- [#19396](https://github.com/ollama/ollama/issues/19396) Proposal: streamed native audio answers from LFM3-Omni `feature request`
- [#19383](https://github.com/ollama/ollama/issues/19383) [Feature Request] Option to choose default startup tab: Apps or Chat `feature request`
- [#19381](https://github.com/ollama/ollama/issues/19381) OpenAI compat: `/v1/models` returns `"data": null` instead of `[]` when no models are installed
- [#19378](https://github.com/ollama/ollama/issues/19378) /api/chat silently ignores the `audio` field for models with the `audio` capability (audio only works via `images`)

#### 🔒 Closed Issues
- [#19385](https://github.com/ollama/ollama/issues/19385) [HELP] Restore a Model to previous version
- [#19375](https://github.com/ollama/ollama/issues/19375) Error reading GGUF metadata on large MoE model with MXFP4 format
- [#19295](https://github.com/ollama/ollama/issues/19295) [Feature Request] Add Korean language support for the new TTS (phonon) model
- [#19388](https://github.com/ollama/ollama/issues/19388) ternary bonsai 2
- [#19377](https://github.com/ollama/ollama/issues/19377) go_template silently drops the whole assistant turn for qwen3 tool calls (empty content, tool_calls: null, eval_count > 0); llama.cpp template parses the same generation correctly

### LiteLLM (`BerriAI/litellm`)

**Stars:** 62,329 · **Open issues:** 5,577 · **Last push:** <1h ago

Today, LiteLLM announced the release of version 1.108.0-rc.1, which includes the important update that all Docker images are now signed with cosign for added security, following the introduction of a new key. Significant recent updates include fixes for billing discrepancies with unspecified models, improvements to batch processing for Claude models, and the addition of the CLF AI Gateway as an OpenAI-compatible provider, which offers ten new models. Notably, new issues surfaced, including a critical bug in the background health checks of image generation models that could lead to substantial costs, indicating a regression that needs urgent attention. Additionally, other reported issues include problems with team settings that could interfere with user access to models and enforcement of request limits.

#### 🚀 New Releases
- [v1.108.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.108.0-rc.1) v1.108.0-rc.1

#### ✅ Merged PRs
- [#48900](https://github.com/BerriAI/litellm/pull/48900) fix(cost): bill the requested model's rates when the response names an unpriced model
- [#45715](https://github.com/BerriAI/litellm/pull/45715) fix(vertex_ai): batch Claude models in Anthropic's native row shape
- [#48080](https://github.com/BerriAI/litellm/pull/48080) fix: enforce LiteAdmin MCP route permissions
- [#39324](https://github.com/BerriAI/litellm/pull/39324) feat(providers): add CLF AI Gateway as an OpenAI-compatible provider with ten models
- [#48921](https://github.com/BerriAI/litellm/pull/48921) refactor(types): replace Any with proven types in 21 files
- [#49125](https://github.com/BerriAI/litellm/pull/49125) fix(cost-map): set together_ai Qwen3.7-Max back to the published price
- [#49124](https://github.com/BerriAI/litellm/pull/49124) chore(databricks): retirement dates for DeepSeek V4 Flash (0731), V4 Pro (0813) and Inkling
- [#49146](https://github.com/BerriAI/litellm/pull/49146) chore(cost-map): add fireworks ultramarine 1 flash us and date deepseek v4 flash
- [#47740](https://github.com/BerriAI/litellm/pull/47740) fix(batches): return real batch token counts next to OpenAI's batch usage fields
- [#49002](https://github.com/BerriAI/litellm/pull/49002) fix(streaming): rebuild each choice of an n>1 chat stream on its own
- [#49148](https://github.com/BerriAI/litellm/pull/49148) fix(wandb): set GLM-5.2 max_input_tokens from the CoreWeave Forge page
- [#49078](https://github.com/BerriAI/litellm/pull/49078) fix(ci): measure PR gates from the target branch's current tip
- [#47554](https://github.com/BerriAI/litellm/pull/47554) fix(token_counter): price PDF pages for OpenAI and Azure models the way they bill
- [#39540](https://github.com/BerriAI/litellm/pull/39540) fix(proxy)!: stop answering with the literal string "None" as error type and param on the proxy-server, auth, spend, and key health routes
- [#49137](https://github.com/BerriAI/litellm/pull/49137) build: allow filelock 4.x and sync package metadata
- [#48949](https://github.com/BerriAI/litellm/pull/48949) feat(lite): offer each model group's reasoning efforts in pi, OpenCode and Codex
- [#49143](https://github.com/BerriAI/litellm/pull/49143) test: update integration tests left stale by recent product changes
- [#48114](https://github.com/BerriAI/litellm/pull/48114) chore(caching)!: remove the disk cache backend
- [#46875](https://github.com/BerriAI/litellm/pull/46875) feat(pass-through): add eu/jev decision API pass-through with spend tracking
- [#48998](https://github.com/BerriAI/litellm/pull/48998) feat(dashscope): add image edits and text-to-speech
- [#49149](https://github.com/BerriAI/litellm/pull/49149) chore: bump litellm-enterprise 0.1.80 -> 0.1.81, litellm-proxy-extras 0.4.111 -> 0.4.112
- [#49073](https://github.com/BerriAI/litellm/pull/49073) fix(responses)!: keep the proxy's error body on litellm.responses errors from litellm_proxy models
- [#47861](https://github.com/BerriAI/litellm/pull/47861) fix(context_management)!: run clear_tool_uses in the gateway on the Responses API path
- [#49144](https://github.com/BerriAI/litellm/pull/49144) feat(ui): add i18next plumbing and move the Workflows page onto it
- [#49102](https://github.com/BerriAI/litellm/pull/49102) fix(anthropic): retry /v1/messages without strict when Claude rejects strict tools under drop_params
- [#45366](https://github.com/BerriAI/litellm/pull/45366) fix(proxy)!: bill streamed /v1/completions without stream_options like chat
- [#49136](https://github.com/BerriAI/litellm/pull/49136) fix(ci): build base native extension for OpenAPI lint
- [#48939](https://github.com/BerriAI/litellm/pull/48939) fix(mcp)!: restore upstream-token admission for legacy delegate servers
- [#48060](https://github.com/BerriAI/litellm/pull/48060) fix(guardrails): allow MCP call modes on the generic guardrail API
- [#49134](https://github.com/BerriAI/litellm/pull/49134) ci: run the extensions integration group with 48 workers
- [#49129](https://github.com/BerriAI/litellm/pull/49129) test(otel): fix main's Langfuse destination tests after the stdout opt-in change
- [#49112](https://github.com/BerriAI/litellm/pull/49112) fix(responses): only merge repeated Codex tools when drop_params is on
- [#48877](https://github.com/BerriAI/litellm/pull/48877) fix(caching): key cached async clients by a per-loop token instead of id(loop)
- [#48985](https://github.com/BerriAI/litellm/pull/48985) ci: run the integration groups on GitHub Actions
- [#48723](https://github.com/BerriAI/litellm/pull/48723) fix(otel)!: print OTel v2 spans to stdout only when the operator asks
- [#48952](https://github.com/BerriAI/litellm/pull/48952) feat(guardrails): scan sampled stream windows in the background
- [#48718](https://github.com/BerriAI/litellm/pull/48718) fix(otel)!: give key/team Langfuse destinations user, tags and session on OTel v2 without global Langfuse keys
- [#48944](https://github.com/BerriAI/litellm/pull/48944) fix(guardrails)!: make lakera_v2 on_flagged block reject PII-only detections, add mask
- [#48993](https://github.com/BerriAI/litellm/pull/48993) fix(cost): finalize synchronous response cost once for header, spend log and rollups
- [#48987](https://github.com/BerriAI/litellm/pull/48987) feat(router): infer custom classifier tiers from model mappings
- [#48986](https://github.com/BerriAI/litellm/pull/48986) docs: link README to Python SDK and autorouter guides
- [#49058](https://github.com/BerriAI/litellm/pull/49058) fix(proxy)!: honor litellm_settings.drop_params for Claude Code and Codex requests
- [#46219](https://github.com/BerriAI/litellm/pull/46219) feat(guardrails): opt-in response_masked_data on PANW Prisma AIRS block
- [#49059](https://github.com/BerriAI/litellm/pull/49059) fix(anthropic): keep Mistral thinking text on streaming /v1/messages
- [#48847](https://github.com/BerriAI/litellm/pull/48847) refactor(router): move router callers onto the entry points and invert the proxy imports
- [#40631](https://github.com/BerriAI/litellm/pull/40631) feat(vertex_ai)!: use HTTP/2 httpx client for search_api vector store
- [#45039](https://github.com/BerriAI/litellm/pull/45039) fix(proxy): keep the litellm command light so spawned workers answer uvicorn's first health ping
- [#32096](https://github.com/BerriAI/litellm/pull/32096) fix(caching): keep reasoning, citations, and audio on streamed cache hits
- [#48840](https://github.com/BerriAI/litellm/pull/48840) refactor(router): add router entry points and keep the old members as a deprecated mixin
- [#48925](https://github.com/BerriAI/litellm/pull/48925) fix!: retain unattributed daily activity across reports and exports
- [#48961](https://github.com/BerriAI/litellm/pull/48961) feat(proxy): replace the pre-migration row check with a rolled-back dry run of the pending migrations
- [#48988](https://github.com/BerriAI/litellm/pull/48988) fix(proxy): persist tag spend and drain success callbacks within the shutdown budget
- [#47812](https://github.com/BerriAI/litellm/pull/47812) feat(dashscope)!: derive protocol bases from one domain
- [#49035](https://github.com/BerriAI/litellm/pull/49035) fix(guardrails): scan and rewrite streamed /v1/completions under post_call guardrails
- [#47703](https://github.com/BerriAI/litellm/pull/47703) feat(secret_managers): resolve oidc/google api_key references per request
- [#46257](https://github.com/BerriAI/litellm/pull/46257) feat(router): opt in to non-chat deployment filtering
- [#47759](https://github.com/BerriAI/litellm/pull/47759) feat(vector_stores): add OpenSearch k-NN search as a vector store provider
- [#47166](https://github.com/BerriAI/litellm/pull/47166) fix(anthropic)!: send /v1/messages PDF documents to OpenAI-shaped providers as file parts
- [#32537](https://github.com/BerriAI/litellm/pull/32537) fix(exceptions)!: honor status code when mapping OpenAI invalid_request_error exceptions
- [#44822](https://github.com/BerriAI/litellm/pull/44822) feat(soniox): add realtime speech-to-text on /v1/realtime
- [#48908](https://github.com/BerriAI/litellm/pull/48908) ci(model-catalog): check the cost map by loading it through model-catalog
- [#48907](https://github.com/BerriAI/litellm/pull/48907) build(model-catalog): ship the cost map inside the native extension
- [#48999](https://github.com/BerriAI/litellm/pull/48999) fix(fallback): read stored router_settings from the database on fallback writes
- [#48928](https://github.com/BerriAI/litellm/pull/48928) refactor(types): replace Any with proven types in 14 files
- [#49022](https://github.com/BerriAI/litellm/pull/49022) ci: run the dashboard API types and Terraform endpoint checks on every change that can alter the spec
- [#48793](https://github.com/BerriAI/litellm/pull/48793) fix(anthropic)!: drop beta-gated body fields under drop_params
- [#49072](https://github.com/BerriAI/litellm/pull/49072) fix(bedrock)!: route region-prefixed embedding models to that region and bill its price
- [#43375](https://github.com/BerriAI/litellm/pull/43375) test(router_strategy): keep foreign asyncio task noise out of the budget limiter caplog asserts
- [#49009](https://github.com/BerriAI/litellm/pull/49009) fix(passthrough): forward OpenAI-Beta and default agents=v1 on the OpenAI passthrough
- [#48917](https://github.com/BerriAI/litellm/pull/48917) fix(caching): read the cache key's model group from the router's metadata for the call
- [#49010](https://github.com/BerriAI/litellm/pull/49010) fix(proxy): stream a guardrail block on /v1/messages as Anthropic events
- [#42417](https://github.com/BerriAI/litellm/pull/42417) fix(cost): bill a deployment's per-second rates on native Anthropic /v1/messages
- [#48978](https://github.com/BerriAI/litellm/pull/48978) fix(cohere): price native Cohere embed calls on Foundry relays and the Cohere passthrough
- [#48888](https://github.com/BerriAI/litellm/pull/48888) fix(logging): mark mirrored silent_model calls with is_silent_experiment in spend logs
- [#48897](https://github.com/BerriAI/litellm/pull/48897) fix(llms): move later developer messages for models declared system-first
- [#38885](https://github.com/BerriAI/litellm/pull/38885) fix(websearch)!: keep the provider prefix on the agentic follow-up model
- [#47761](https://github.com/BerriAI/litellm/pull/47761) fix(openai): warn when the GPT-5 reasoning effort gate drops a level under drop_params
- [#49001](https://github.com/BerriAI/litellm/pull/49001) feat(proxy): let a Claude Code gateway user choose the session team
- [#48916](https://github.com/BerriAI/litellm/pull/48916) fix(token_counter)!: keep a loaded Hugging Face tokenizer when a slower download fails
- [#48980](https://github.com/BerriAI/litellm/pull/48980) feat(proxy)!: general_settings.claude_code_marketplace_auth_required puts the Claude Code marketplace behind a LiteLLM key
- [#47708](https://github.com/BerriAI/litellm/pull/47708) feat(proxy)!: add suppress_startup_output to turn off startup prints
- [#44723](https://github.com/BerriAI/litellm/pull/44723) fix(github_copilot): treat a malformed api-key.json like a missing one
- [#44783](https://github.com/BerriAI/litellm/pull/44783) fix(vertex_ai): build the cachedContents collection URL under a custom api_base
- [#47108](https://github.com/BerriAI/litellm/pull/47108) test: fix flaky spend-log cleanup budget, login lockout, and wedged Redis tests
- [#48893](https://github.com/BerriAI/litellm/pull/48893) fix(anthropic): drop the non-spec custom object from /v1/messages tool definitions
- [#45330](https://github.com/BerriAI/litellm/pull/45330) fix(responses): drop a malformed prompt_cache_breakpoint under drop_params on the direct /v1/responses path
- [#48819](https://github.com/BerriAI/litellm/pull/48819) fix(responses): resume background response streams with stream and starting_after
- [#48912](https://github.com/BerriAI/litellm/pull/48912) fix(responses): replay the original Responses item order, phase, and boundaries on the next chat turn
- [#41233](https://github.com/BerriAI/litellm/pull/41233) fix(health)!: openai realtime health check reports healthy with a missing or invalid api key
- [#48563](https://github.com/BerriAI/litellm/pull/48563) feat(providers): add BigModel support and model pricing
- [#49006](https://github.com/BerriAI/litellm/pull/49006) fix(responses): keep each Codex tool once when its tool list repeats across turns
- [#48972](https://github.com/BerriAI/litellm/pull/48972) feat(responses): support Codex client tool_search on Anthropic and other bridged providers
- [#41959](https://github.com/BerriAI/litellm/pull/41959) fix(proxy)!: list every priced Vertex family under a vertex_ai/* grant
- [#43390](https://github.com/BerriAI/litellm/pull/43390) fix(cost_map): mark fireworks_ai/minimax-m3 as vision and pin capabilities verified against live calls
- [#48747](https://github.com/BerriAI/litellm/pull/48747) fix(responses): stream every citation batch before completion
- [#48302](https://github.com/BerriAI/litellm/pull/48302) build(deps): bump langgraph and tornado and add dated scan ignores to clear osv-scan and image-scan
- [#48915](https://github.com/BerriAI/litellm/pull/48915) fix(proxy): enforce team and key Allowed Vector Stores when no vector store registry is loaded
- [#49031](https://github.com/BerriAI/litellm/pull/49031) docs(qa): allow focused proof for mechanical PRs
- [#48771](https://github.com/BerriAI/litellm/pull/48771) fix(google_genai): read one-object and null spellings of repeated fields in countTokens and generateContent
- [#49030](https://github.com/BerriAI/litellm/pull/49030) fix(responses): call the renamed drops_params helper on the compact path
- [#48950](https://github.com/BerriAI/litellm/pull/48950) fix(credentials): keep the stored secret when PATCH echoes its masked read-back
- [#43370](https://github.com/BerriAI/litellm/pull/43370) test(json_fragment_accumulator): assert peak allocation instead of a drain timing ratio
- [#48739](https://github.com/BerriAI/litellm/pull/48739) fix(proxy)!: stop labelling management and health rejections as auth failures
- [#47857](https://github.com/BerriAI/litellm/pull/47857) fix(context_management)!: count the system prompt toward the clear_tool_uses input_tokens trigger
- [#48815](https://github.com/BerriAI/litellm/pull/48815) fix(proxy)!: enforce an end user's per-model budget from their linked budget
- [#48894](https://github.com/BerriAI/litellm/pull/48894) fix(cli): give lite codex aliases of a Codex-known model that model's catalog entry
- [#48783](https://github.com/BerriAI/litellm/pull/48783) fix(responses): drop the null created_by OpenAI rejects when output items are replayed
- [#36668](https://github.com/BerriAI/litellm/pull/36668) docs(adrs): add ADRs for the Python SDK and proxy, starting with provider usage extras
- [#47717](https://github.com/BerriAI/litellm/pull/47717) feat(azure_ai): reach Foundry agents through the project Responses API
- [#48926](https://github.com/BerriAI/litellm/pull/48926) feat(ocr)!: support outputContentFormat=markdown for Azure Document Intelligence
- [#45040](https://github.com/BerriAI/litellm/pull/45040) test(unit): keep unix socket paths in unit tests under the macOS AF_UNIX limit
- [#48957](https://github.com/BerriAI/litellm/pull/48957) feat(router): daily_reset_time picks when deployment rpd and tpd daily limits start over
- [#47697](https://github.com/BerriAI/litellm/pull/47697) fix(proxy): let typesafe/* allowlists cover /typesafe Jev calls and list Jev in the model picker
- [#41006](https://github.com/BerriAI/litellm/pull/41006) feat!: add StreamLake provider metadata
- [#48934](https://github.com/BerriAI/litellm/pull/48934) fix(guardrails): skip embeddings input in google_text_moderation
- [#48827](https://github.com/BerriAI/litellm/pull/48827) fix(guardrails): scan Responses tool results in texts-mode guardrails
- [#48876](https://github.com/BerriAI/litellm/pull/48876) fix(responses): drop params compact rejects and send Azure compaction to the v1 route
- [#48973](https://github.com/BerriAI/litellm/pull/48973) fix(logging): stop dumping the request body at every layer under --detailed_debug
- [#48955](https://github.com/BerriAI/litellm/pull/48955) fix(stream): the last usage frame carries litellm's bill in usage.cost

#### 🐛 New Issues
- [#49094](https://github.com/BerriAI/litellm/issues/49094) [Bug]: Saving unrelated team settings in the UI rewrites an unrestricted team (models: []) to ["no-default-models"], blocking all its keys 💬2
- [#49089](https://github.com/BerriAI/litellm/issues/49089) [Bug]: Background health checks execute live commercial rendering on image_generation models, burning thousands of dollars (litellm-internal-health-check regression in v1.106.3) `llm translation` 💬2
- [#49070](https://github.com/BerriAI/litellm/issues/49070) [Bug]: A team's max_parallel_requests is dropped by /team/new and /team/update and never enforced `bug` `llm translation` 💬2
- [#49066](https://github.com/BerriAI/litellm/issues/49066) [Bug]: When Opening Advanced Settings While Creating a Virtual Key in LiteLLM Proxy v1.107.0 `bug` 💬1
- [#49062](https://github.com/BerriAI/litellm/issues/49062) [Bug]: github_copilot — any forwarded client header wipes the Copilot auth headers ("missing Editor-Version header for IDE auth") `llm translation` 💬1
- [#49046](https://github.com/BerriAI/litellm/issues/49046) [Bug]: `chatgpt/` provider drops encrypted reasoning on `/v1/messages`, so it is never replayed between tool calls `bug` `llm translation` `claude code` 💬1
- [#49044](https://github.com/BerriAI/litellm/issues/49044) [Bug]: tool_choice is not pruned when a guardrail or the MCP tool filter removes a tool `llm translation` 💬1
- [#49040](https://github.com/BerriAI/litellm/issues/49040) [Bug]: A user's max_parallel_requests is stored but never enforced
- [#49093](https://github.com/BerriAI/litellm/issues/49093) [Bug]: Spend Per User table on User Usage is always empty for admins
- [#49127](https://github.com/BerriAI/litellm/issues/49127) [Feature]: Support all OpenAI Decisions request features on /v1/decisions (developer/system/tool items, input_json, prompt caching, image instructions, 400 questions) `llm translation`
- [#49126](https://github.com/BerriAI/litellm/issues/49126) [Bug]: Streamed file_citation annotations are stored in provider_specific_fields, so file-search cost is no longer detected `llm translation`
- [#49107](https://github.com/BerriAI/litellm/issues/49107) [Bug]: Gemini 4 Argon: CONTINUATION finish reason is mapped to "stop", so truncated output looks complete `llm translation`
- [#49103](https://github.com/BerriAI/litellm/issues/49103) [Bug]: Router retry reuses success logging state and drops later attempt cost
- [#49100](https://github.com/BerriAI/litellm/issues/49100) [Bug]: ToolPolicyGuardrail skips Stage 2 trust-chain check on /v1/messages & /v1/responses and allows blocked provider-native tools when mixed with custom tools `llm translation`
- [#49095](https://github.com/BerriAI/litellm/issues/49095) [Bug]: Vertex AI Gemini streams that stall before the first chunk hang until `request_timeout` on stable releases `bug` `llm translation`
- [#49091](https://github.com/BerriAI/litellm/issues/49091) [Feature]: Multiple budget windows per team member
- [#49090](https://github.com/BerriAI/litellm/issues/49090) [Feature]: Let a virtual key (including a key with no user_id) view its own /spend/logs, without an elevated role `enhancement`
- [#49083](https://github.com/BerriAI/litellm/issues/49083) [Bug]: bedrock/openai invoke route ignores model_id (application inference profile ARN) `llm translation`
- [#49063](https://github.com/BerriAI/litellm/issues/49063) [Bug]: responses() with Gemini fails with "Missing corresponding tool call" when a reasoning item sits between two function_call items `llm translation`
- [#49052](https://github.com/BerriAI/litellm/issues/49052) Commit that rotated the cosign key (e82a3c6, #48103) has an unverified signature; please anchor the new key
- [#49042](https://github.com/BerriAI/litellm/issues/49042) [Bug]: Responses API rejects a LiteLLM response id in prompt_cache_options.comparison_response_id `bug` `llm translation`
- [#49041](https://github.com/BerriAI/litellm/issues/49041) [Bug]: A team member's new rpm_limit doesn't reach keys already in use until their auth cache expires
- [#49038](https://github.com/BerriAI/litellm/issues/49038) Interactions spec canary is red
- [#49036](https://github.com/BerriAI/litellm/issues/49036) [Feature]: Prometheus metrics for model tool calls and consistent Logs page labels across series `enhancement` `llm translation` `claude code`
- [#49012](https://github.com/BerriAI/litellm/issues/49012) [Bug]: Gemini search usage and cost missing with include_server_side_tool_invocations and function calling `llm translation`
- [#48996](https://github.com/BerriAI/litellm/issues/48996) [Bug]: text.verbosity is dropped when /v1/responses is bridged to chat completions `bug` `llm translation`
- [#48994](https://github.com/BerriAI/litellm/issues/48994) [Bug]: least-busy undercounts a busy deployment after its in-flight counter key expires, so that deployment gets overloaded `bug` `llm translation`

#### 🔒 Closed Issues
- [#48394](https://github.com/BerriAI/litellm/issues/48394) filelock<4.0 cap keeps downstreams on a version with three open CVEs
- [#24987](https://github.com/BerriAI/litellm/issues/24987) [Bug]: Prompt Cache Not Working with GPT-5.4 via litellm proxy, but works with direct OpenAI API
- [#25372](https://github.com/BerriAI/litellm/issues/25372) [Feature]: Support Azure AI Foundry Agents v2 (Responses API with agent_reference)
- [#34872](https://github.com/BerriAI/litellm/issues/34872) [Bug]: Gemini context caching with custom api_base uses invalid cache URL and auth header
- [#22159](https://github.com/BerriAI/litellm/issues/22159) [Bug]: litellm is calling an http GET on module import
- [#18457](https://github.com/BerriAI/litellm/issues/18457) [Bug]: Child process died error after updating from litellm:v1.78.0-stable to litellm:v1.80.8-stable
- [#24680](https://github.com/BerriAI/litellm/issues/24680) [Bug]: Valid API key not accepted: "Invalid proxy server token passed"
- [#33347](https://github.com/BerriAI/litellm/issues/33347) [Bug]: /v2/user/info omits user-level rpm_limit and tpm_limit
- [#45671](https://github.com/BerriAI/litellm/issues/45671) [Bug]: Claude models on Vertex AI fail at batch creation (404 batchPredictionJobs) — OpenAI batch translation doesn't cover Anthropic's native schema
- [#47533](https://github.com/BerriAI/litellm/issues/47533) [Bug]: provider-reported usage.cost is ignored on non-streaming calls for OpenAI-compatible upstreams (spend/budget reads $0)
- [#38180](https://github.com/BerriAI/litellm/issues/38180) [Bug]: n>1 streamed requests are logged and billed as one merged completion
- [#31610](https://github.com/BerriAI/litellm/issues/31610) [Bug]: Redis Semantic cache not working as expected
- [#46100](https://github.com/BerriAI/litellm/issues/46100) [Bug]: Cost map guard treats provider-info-sync PRs as human PRs, so the bot contract never runs
- [#35233](https://github.com/BerriAI/litellm/issues/35233) [Feature]: Add optional strict authentication for Claude Code marketplace endpoint
- [#28906](https://github.com/BerriAI/litellm/issues/28906) [Bug]: Editing a reusable credential can overwrite real secrets with masked placeholders
- [#31842](https://github.com/BerriAI/litellm/issues/31842) [Bug]: model_max_budget enforcement for end-users (customers) is not working
- [#34269](https://github.com/BerriAI/litellm/issues/34269) [Bug] global_spend_refresh() leaks a PrismaClient/DB connection on every call
- [#32068](https://github.com/BerriAI/litellm/issues/32068) [Bug]: reasoning_content lost on streaming cache hit; FIX included
- [#34817](https://github.com/BerriAI/litellm/issues/34817) [Feature]: Add pricing for Soniox real-time STT model (soniox/stt-rt-v5)
- [#35793](https://github.com/BerriAI/litellm/issues/35793) stream_chunk_builder concatenates every choice into one message when n > 1
- [#49066](https://github.com/BerriAI/litellm/issues/49066) [Bug]: When Opening Advanced Settings While Creating a Virtual Key in LiteLLM Proxy v1.107.0
- [#38953](https://github.com/BerriAI/litellm/issues/38953) [Bug]: /v1/messages streaming guardrail block sends malformed SSE (no event: framing)
- [#38829](https://github.com/BerriAI/litellm/issues/38829) websearch_interception chat-completions agentic follow-up misroutes model: 'LLM Provider NOT provided ... model=mantle/...'
- [#48744](https://github.com/BerriAI/litellm/issues/48744) [Bug]: Responses bridge drops streamed citation events across annotation batches

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,770 · **Open issues:** 432 · **Last push:** <1h ago

On October 30, 2026, there were no new releases for Unsloth, but several significant features were merged, including the integration of batched MoE LoRA for optimized job handling and the introduction of int8 Qwen-Image text streaming, which improves performance under VRAM constraints. Notable enhancements in Studio included the ability to generate video exports that are byte-identical to stock outputs and improvements to the audio routing system for clearer function requests. A critical bug report surfaced regarding the AppImage version of Unsloth Studio exhibiting a notably laggy UI, indicating potential performance issues that could affect user experience.

#### ✅ Merged PRs
- [#16012](https://github.com/unslothai/unsloth/pull/16012) Batched MoE LoRA: every job's expert LoRA in one grouped pass on Zoo's kernels
- [#16033](https://github.com/unslothai/unsloth/pull/16033) Studio MCP: bound get_job wait_s with a fixed limit, not the patchable MAX_WAIT_S
- [#16027](https://github.com/unslothai/unsloth/pull/16027) Studio: int8 Qwen-Image text stream when the denoiser is streamed (1.24x under a 16 GiB budget)
- [#16030](https://github.com/unslothai/unsloth/pull/16030) Studio video: streamed mp4 byte-identical to the stock export on every render (cap libx264 at AVX2 on AVX-512 hosts)
- [#15889](https://github.com/unslothai/unsloth/pull/15889) Unsloth Studio: LFM3-Audio / LFM3-Omni on MLX, with spoken replies
- [#16024](https://github.com/unslothai/unsloth/pull/16024) Studio video: compare streamed frames without chunk-sized temporaries (H3 export stalls)
- [#15954](https://github.com/unslothai/unsloth/pull/15954) Studio: Neural Engine Prefill toggle for MLX models
- [#16023](https://github.com/unslothai/unsloth/pull/16023) Studio: hand the audio route's heal gate the request's contract, and follow the hoisted audio_base64 in the turn-scope check
- [#16025](https://github.com/unslothai/unsloth/pull/16025) Tests: read the training API job bodies fixture as UTF-8
- [#15988](https://github.com/unslothai/unsloth/pull/15988) T4: hand batch-4 NF4 decode to the bitsandbytes gemm_4bit where it runs
- [#15991](https://github.com/unslothai/unsloth/pull/15991) Studio: say why AI Assist cannot map a dataset with no prompt/response split
- [#15996](https://github.com/unslothai/unsloth/pull/15996) Studio: Use via API button on the Train page
- [#15920](https://github.com/unslothai/unsloth/pull/15920) Studio: batch MLX tool-protocol, response_format and video replies; several clips and Gemma 4 video on MLX
- [#15980](https://github.com/unslothai/unsloth/pull/15980) Studio video: request a hosted .safetensors twin before each declared prequant .pt
- [#15985](https://github.com/unslothai/unsloth/pull/15985) Studio diffusion: Qwen-Image text-to-image activation seeds keep part of the int8 DiT resident under a VRAM budget
- [#15950](https://github.com/unslothai/unsloth/pull/15950) Collapse blank line runs with a literal-led pattern (about 10x faster)
- [#16014](https://github.com/unslothai/unsloth/pull/16014) Tests: price the auto-context fit floor as the layer-split path on any host
- [#15861](https://github.com/unslothai/unsloth/pull/15861) Move the Unsloth Studio MLX pins to mlx-vlm 0.7.11
- [#15943](https://github.com/unslothai/unsloth/pull/15943) Studio: load the chat page on first use instead of in the startup bundle
- [#16013](https://github.com/unslothai/unsloth/pull/16013) Tests: keep the RAG query-packing test on vec0 while the in-memory cache builds in the background
- [#15813](https://github.com/unslothai/unsloth/pull/15813) fix(studio): attach an explicitly chosen MLX drafter even when it is priced not to fit
- [#15899](https://github.com/unslothai/unsloth/pull/15899) Studio: train single-string-column datasets as raw text
- [#15853](https://github.com/unslothai/unsloth/pull/15853) Studio diffusion: use an installed HIP SDK for the Windows ROCm sd.cpp build when its bin dir is not on PATH
- [#15947](https://github.com/unslothai/unsloth/pull/15947) Studio setup: skip the OXC validator npm ci when its installed tree is unchanged
- [#15975](https://github.com/unslothai/unsloth/pull/15975) Studio video: stage an fp32 encoder on the card when its dense cast would not fit host RAM
- [#15845](https://github.com/unslothai/unsloth/pull/15845) Studio: stop the Claude CLI billing line from breaking prompt caching
- [#15848](https://github.com/unslothai/unsloth/pull/15848) Studio: recommend a Hub GGUF quant that fits the Mac's Metal budget
- [#15972](https://github.com/unslothai/unsloth/pull/15972) Studio: reuse lexical passes and branch checks across a compaction and prune branch-run starts
- [#15995](https://github.com/unslothai/unsloth/pull/15995) Tests: plant uv.exe on Windows in the MLX repair minimal-PATH lookup test
- [#15844](https://github.com/unslothai/unsloth/pull/15844) Studio: load downloaded models with fewer Hugging Face requests
- [#15942](https://github.com/unslothai/unsloth/pull/15942) Studio: share one edge index for Recipe Studio node connection status
- [#15819](https://github.com/unslothai/unsloth/pull/15819) Studio: stop the KV cache type following the last model to the next one
- [#15842](https://github.com/unslothai/unsloth/pull/15842) Studio: keep the app responsive as an MLX or Transformers load finishes
- [#15977](https://github.com/unslothai/unsloth/pull/15977) Studio: nvfp4 safetensors twins: converter 0-dim compare, refuse a twin the installed torchao cannot unflatten
- [#15818](https://github.com/unslothai/unsloth/pull/15818) Studio: stop re-uploading the whole chat while a reply streams
- [#15820](https://github.com/unslothai/unsloth/pull/15820) Studio: test that escaped currency keeps long replies streaming fast
- [#15846](https://github.com/unslothai/unsloth/pull/15846) Studio: keep the loaded model if a GGUF download fails or is cancelled
- [#15987](https://github.com/unslothai/unsloth/pull/15987) Tests: make unsloth_cli/tests/test_start.py pass on Windows
- [#15847](https://github.com/unslothai/unsloth/pull/15847) Studio: restart a crashed GGUF model instead of showing it loaded
- [#15863](https://github.com/unslothai/unsloth/pull/15863) Studio: let unsloth start vibe start with smaller context windows
- [#15865](https://github.com/unslothai/unsloth/pull/15865) Studio: keep the user's git identity and gh login in unsloth start pi
- [#15992](https://github.com/unslothai/unsloth/pull/15992) Tests: keep tqdm's monitor thread out of the ShareGPT no-threads count
- [#15843](https://github.com/unslothai/unsloth/pull/15843) Studio: stop Auto context from reserving a model's whole window on a Mac
- [#15864](https://github.com/unslothai/unsloth/pull/15864) Let decision models export to GGUF on a fresh install
- [#15974](https://github.com/unslothai/unsloth/pull/15974) Studio diffusion: a first load downloads the weights before the small-host decision reads them
- [#15391](https://github.com/unslothai/unsloth/pull/15391) Studio: link to image training from the Train page
- [#15949](https://github.com/unslothai/unsloth/pull/15949) Studio: match linked-folder paths against .gitignore runs, not rule by rule
- [#15961](https://github.com/unslothai/unsloth/pull/15961) Studio: answer dense RAG search from an in-memory numpy matrix kept in sync by SQLite triggers
- [#15960](https://github.com/unslothai/unsloth/pull/15960) Studio: encode each recall query once per compaction and let archive widening widen
- [#15849](https://github.com/unslothai/unsloth/pull/15849) Studio: say when remote access Start automatically opens a public URL
- [#15951](https://github.com/unslothai/unsloth/pull/15951) CI: split Repo tests (CPU, rest) and (CPU, gloo) before they reach their 2100 s cap
- [#15956](https://github.com/unslothai/unsloth/pull/15956) Studio video: MiniMax-H3 unfused Q / K / V share one ConvRot rotation and act quant
- [#15955](https://github.com/unslothai/unsloth/pull/15955) Studio video: MiniMax-H3 conditioner pin yields to a streamed denoiser on a small host
- [#15959](https://github.com/unslothai/unsloth/pull/15959) Tests: mac tab walk waits for the sidebar to mount before judging a pinned row
- [#15874](https://github.com/unslothai/unsloth/pull/15874) Studio: skip the audio gallery prune's sidecar pass under both caps and list prepared inputs once per sweep
- [#15909](https://github.com/unslothai/unsloth/pull/15909) Studio: encode a batch's gallery PNGs concurrently
- [#15957](https://github.com/unslothai/unsloth/pull/15957) Tests: read _gpu_init.py as UTF-8 in the torchao-too-new test
- [#15930](https://github.com/unslothai/unsloth/pull/15930) Studio diffusion: run both guidance branches per streamed block upload for Qwen-Image-Edit under a VRAM budget
- [#15953](https://github.com/unslothai/unsloth/pull/15953) Studio: keep an appearance edit made while the personalization load is in flight
- [#15873](https://github.com/unslothai/unsloth/pull/15873) Studio: read the run history once per checkpoint listing
- [#15792](https://github.com/unslothai/unsloth/pull/15792) Studio: reuse the cached TLS context for llama-server health probes
- [#15926](https://github.com/unslothai/unsloth/pull/15926) Studio: write plain recipe export rows with one json.dumps call
- [#15939](https://github.com/unslothai/unsloth/pull/15939) Studio: accent update buttons, standard switches, one icon per meaning
- [#15904](https://github.com/unslothai/unsloth/pull/15904) Studio: greeting setting hides the whole greeting, composer at the bottom option, no model disclaimer
- [#15946](https://github.com/unslothai/unsloth/pull/15946) Tests: follow the media header's MediaHeaderActions row from #15919
- [#15948](https://github.com/unslothai/unsloth/pull/15948) Tests: baseline the torchao import probe from #15850, gate the PrefixGrouper CUDA test on a real card
- [#15944](https://github.com/unslothai/unsloth/pull/15944) Studio: matching Hugeicons permission icons, larger and top-aligned
- [#15821](https://github.com/unslothai/unsloth/pull/15821) Studio Desktop: sync pinned models and overrides after the backend port is known
- [#15824](https://github.com/unslothai/unsloth/pull/15824) Studio desktop: skip the device type read while the backend port is still unknown
- [#15902](https://github.com/unslothai/unsloth/pull/15902) Studio: skip the route's GPU probe when the GGUF fits in RAM
- [#15854](https://github.com/unslothai/unsloth/pull/15854) GRPO PrefixGrouper: fit the flex kernel on 101 KB shared-memory GPUs and stop its silent eager fallback
- [#15936](https://github.com/unslothai/unsloth/pull/15936) Studio: quantise an offloaded native int8 denoiser on the card, one linear at a time
- [#15808](https://github.com/unslothai/unsloth/pull/15808) Studio: skip the escaped-math parse when no escaped dollar pair can be math
- [#15875](https://github.com/unslothai/unsloth/pull/15875) Studio: keep audio gallery operations in the folder they resolved
- [#15793](https://github.com/unslothai/unsloth/pull/15793) Studio: walk the sandbox once per tool call boundary for the files card and file history
- [#15925](https://github.com/unslothai/unsloth/pull/15925) Studio: validate a recipe job's OXC batches in one Node process
- [#15896](https://github.com/unslothai/unsloth/pull/15896) install-kernels: skip the torch import when a kernel's extension is absent, and probe torch only when a wheel is needed
- [#15826](https://github.com/unslothai/unsloth/pull/15826) Studio tests: use a portable fake llama-server in the load cancel tests
- [#15794](https://github.com/unslothai/unsloth/pull/15794) Studio: share one in-flight /api/health read between the startup and route platform checks
- [#15859](https://github.com/unslothai/unsloth/pull/15859) Studio: store float32 RAG vectors from their buffer and pack the query once
- [#15868](https://github.com/unslothai/unsloth/pull/15868) Studio: preview local Parquet from its leading rows instead of loading it whole
- [#15812](https://github.com/unslothai/unsloth/pull/15812) Studio: skip the article and main scope passes when the page has no such tag
- [#15886](https://github.com/unslothai/unsloth/pull/15886) Studio: keep the Markdown block split linear after an unmatched $$
- [#15807](https://github.com/unslothai/unsloth/pull/15807) Studio: read only the run state for chunk-only chat run event batches
- [#15814](https://github.com/unslothai/unsloth/pull/15814) Studio: build the MCP apps on first use instead of at backend import
- [#15783](https://github.com/unslothai/unsloth/pull/15783) GGUF export: write the intermediate conversion inside the output folder so placing it is a rename
- [#15914](https://github.com/unslothai/unsloth/pull/15914) Studio: read the file digest cache once per reuse estimate
- [#15923](https://github.com/unslothai/unsloth/pull/15923) Studio: make the install-time bytecode precompile opt-in
- [#15850](https://github.com/unslothai/unsloth/pull/15850) Import fixes: disable a torchao too new for the installed torch instead of failing import unsloth
- [#15834](https://github.com/unslothai/unsloth/pull/15834) Tokenizer loading: skip the unused slow tokenizer load when the fast one is returned as is
- [#15933](https://github.com/unslothai/unsloth/pull/15933) Studio setup.ps1: install bun only when the frontend is built
- [#15790](https://github.com/unslothai/unsloth/pull/15790) Cleanup: remove 5 redundant pass statements that leave bytecode unchanged
- [#15884](https://github.com/unslothai/unsloth/pull/15884) Studio: stop re-hashing kept spills and re-reading the record on every prune
- [#15916](https://github.com/unslothai/unsloth/pull/15916) Studio: adopt the WAV save_from_media already transcoded instead of decoding it again
- [#15921](https://github.com/unslothai/unsloth/pull/15921) Studio: treat unknown parent liveness as alive in the llama-server reaper
- [#15885](https://github.com/unslothai/unsloth/pull/15885) Studio: wake admission waits on queue state changes instead of their next poll
- [#15929](https://github.com/unslothai/unsloth/pull/15929) Studio: make Recipes lint validators run on Windows and under a gitignored temp root
- [#15869](https://github.com/unslothai/unsloth/pull/15869) Studio: reuse recipe shard row counts while no shard changed
- [#15835](https://github.com/unslothai/unsloth/pull/15835) GRPO PrefixGrouper: build the shared-prefix layout from one host copy instead of per-token loops and per-segment device fills
- [#15871](https://github.com/unslothai/unsloth/pull/15871) Studio: write each training metrics flush and its run progress in one transaction
- [#15811](https://github.com/unslothai/unsloth/pull/15811) Studio: score unclosed Markdown link destinations in linear time
- [#15787](https://github.com/unslothai/unsloth/pull/15787) Studio: find VLM rows without an image or caption from Arrow validity
- [#15917](https://github.com/unslothai/unsloth/pull/15917) Studio: write transcoded WAV blocks raw and fix the header once on close
- [#15836](https://github.com/unslothai/unsloth/pull/15836) GRPO PrefixGrouper: import cleanly on torch 2.6 and keep it off below 2.7 with a log line
- [#15913](https://github.com/unslothai/unsloth/pull/15913) Studio: find a code block's backtick runs by regex when picking its fence
- [#15823](https://github.com/unslothai/unsloth/pull/15823) Studio desktop: ask desktop-capabilities in the launch probe on a capability cache miss
- [#15786](https://github.com/unslothai/unsloth/pull/15786) Studio: fetch ShareGPT+image row images concurrently, in row order
- [#15870](https://github.com/unslothai/unsloth/pull/15870) Studio: reuse the VLM URL probe's downloads in the conversion
- [#15781](https://github.com/unslothai/unsloth/pull/15781) Studio: fetch up to four Hub files at once over HTTP when partials resume
- [#15860](https://github.com/unslothai/unsloth/pull/15860) Studio: copy Whisper timestamp tokens to the host once per window
- [#15872](https://github.com/unslothai/unsloth/pull/15872) Studio: index the training history's resumed-later check
- [#15867](https://github.com/unslothai/unsloth/pull/15867) Studio: decode format-check preview rows once per request
- [#15919](https://github.com/unslothai/unsloth/pull/15919) Studio: Decision tab loads at once, System and settings polish, main-theme borders restored
- [#15905](https://github.com/unslothai/unsloth/pull/15905) Studio: one text and control width for every settings row
- [#15898](https://github.com/unslothai/unsloth/pull/15898) Studio: add a Quickstart heading over the API example tabs
- [#15915](https://github.com/unslothai/unsloth/pull/15915) Studio tests: give managed engines ports another worker cannot be handed
- [#15906](https://github.com/unslothai/unsloth/pull/15906) Studio: stop the first Wan2.2-A14B render from waiting for the second expert's pin
- [#15911](https://github.com/unslothai/unsloth/pull/15911) Studio diffusion: let a 12.7 GB host load FLUX.2-klein-9B by spilling the int8 denoiser to a scratch file
- [#15908](https://github.com/unslothai/unsloth/pull/15908) Studio: Qwen-Image-2.1 eager renders before the deferred compile now match ComfyUI
- [#15806](https://github.com/unslothai/unsloth/pull/15806) Studio: Images icon for Reference, file search icon for Chat with files
- [#15890](https://github.com/unslothai/unsloth/pull/15890) Studio: put a just-created API token in the Agents command and API examples
- [#15897](https://github.com/unslothai/unsloth/pull/15897) Studio: lead the Live monitor tiles with the reading, unrounded
- [#15903](https://github.com/unslothai/unsloth/pull/15903) Studio: restore the #15731 login layout
- [#15912](https://github.com/unslothai/unsloth/pull/15912) Studio tests: measure the int8 / fp8 dequant and nibble-swap peaks in a fresh process
- [#15910](https://github.com/unslothai/unsloth/pull/15910) Studio tests: keep GGUF loads off the host's Metal budget unless a test asks
- [#15891](https://github.com/unslothai/unsloth/pull/15891) Packed attention: varlen probes under fullgraph + dynamic=True compile
- [#15817](https://github.com/unslothai/unsloth/pull/15817) Studio: show why llama-server rejected a chat request

#### 🐛 New Issues
- [#15999](https://github.com/unslothai/unsloth/issues/15999) [Bug] AppImage Unsloth Studio has very laggy UI `feature request` `bug` 💬2
- [#16015](https://github.com/unslothai/unsloth/issues/16015) [Bug] Windows + AMD: llama-server holds ~16 GB commit charge after loading GGUF, even with "Don't reserve system RAM" — commit limit gets exhausted `feature request` `bug` 💬1
- [#16034](https://github.com/unslothai/unsloth/issues/16034) [Bug] Questionable trl version used in kaggle notebooks for muse glimmer `feature request` `bug` 💬1
- [#15901](https://github.com/unslothai/unsloth/issues/15901) [Bug] AI Assist cannot express a dataset that needs no column mapping, so it always fails on single-column datasets and discards the reason 💬1
- [#15894](https://github.com/unslothai/unsloth/issues/15894) [Bug] Train on completions drops 80%+ of an Alpaca dataset on any instruct model: the Alpaca template is never installed, but masking still looks for its markers 💬1
- [#15892](https://github.com/unslothai/unsloth/issues/15892) [Bug] A JSONL with a single text column cannot be trained: Format unknown, AI Assist declines, Start silently returns to the preview 💬1
- [#15989](https://github.com/unslothai/unsloth/issues/15989) [Bug] Model files larger than 50GB was blocked when ModelScope as Model source. `feature request` `bug` 💬1
- [#15932](https://github.com/unslothai/unsloth/issues/15932) [Bug] Previous working model doesnt load now! `feature request` `bug` 💬1
- [#15935](https://github.com/unslothai/unsloth/issues/15935) [Bug] MLX memory estimator reports 69.7 GiB for a model that loads on a 24 GB Mac `feature request` `bug` 💬1
- [#16045](https://github.com/unslothai/unsloth/issues/16045) [Feature] Relegate Holiday Aesthetics to Permanent Option `feature request`
- [#15895](https://github.com/unslothai/unsloth/issues/15895) [Bug] Train on completions drops 80%+ of an Alpaca dataset on any instruct model: the Alpaca template is never installed, but masking still looks for its markers
- [#16029](https://github.com/unslothai/unsloth/issues/16029) [Feature] Let the owner share MCP servers with managed accounts (private HTTP MCP not addable by managed accounts) `feature request`
- [#16028](https://github.com/unslothai/unsloth/issues/16028) [Bug] Unsloth Desktop (Linux): changing the theme aborts WebKitWebProcess and freezes the window `feature request` `bug`
- [#15982](https://github.com/unslothai/unsloth/issues/15982) [Bug] Eval dataset task names collide with later YAML tasks

#### 🔒 Closed Issues
- [#14411](https://github.com/unslothai/unsloth/issues/14411) [Bug] Since the updates in the last 2 weeks it core bumps
- [#15409](https://github.com/unslothai/unsloth/issues/15409) [Bug] MiniMax-M3.1 GGUF on Apple Silicon: NVFP4 CPU fallback despite 61/61 layers offloaded to GPU
- [#15901](https://github.com/unslothai/unsloth/issues/15901) [Bug] AI Assist cannot express a dataset that needs no column mapping, so it always fails on single-column datasets and discards the reason
- [#15894](https://github.com/unslothai/unsloth/issues/15894) [Bug] Train on completions drops 80%+ of an Alpaca dataset on any instruct model: the Alpaca template is never installed, but masking still looks for its markers
- [#15892](https://github.com/unslothai/unsloth/issues/15892) [Bug] A JSONL with a single text column cannot be trained: Format unknown, AI Assist declines, Start silently returns to the preview

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,167 · **Open issues:** 381 · **Last push:** 3h ago

On October 30, 2026, AIBrix did not release any new versions, but five pull requests were merged, addressing various bugs and introducing new features. Notably, merged PRs included the addition of an opt-in candidate stage that bounds gateway routing to K pods (#3292) and a fix that ensures the pending-replica guard applies to each metric before taking the maximum (#3338). Additionally, two significant bugs were resolved: one concerning the skipping of the priority tier on the /v1/decisions endpoint to document vLLM support (#3347) and another that splits a shared prefix's prefill cost across pods (#3334). Among new issues, the problem #3351, where the PodAutoscaler incorrectly counts pods instead of RoleSets for a StormService, has garnered significant attention due to its potential to lead to over-scaling.

#### ✅ Merged PRs
- [#3331](https://github.com/vllm-project/aibrix/pull/3331) [Docs] Add a sample for waiting on the vLLM-Omni master address
- [#3347](https://github.com/vllm-project/aibrix/pull/3347) [Bug] Skip the priority tier on /v1/decisions and document vLLM support
- [#3334](https://github.com/vllm-project/aibrix/pull/3334) [Bug] Split a shared prefix's prefill cost across the pods holding it
- [#3292](https://github.com/vllm-project/aibrix/pull/3292) [Feat] Add an opt-in candidate stage that bounds gateway routing to K pods
- [#3338](https://github.com/vllm-project/aibrix/pull/3338) [Bug] Apply the pending-replica guard to each metric before taking the max

#### 🐛 New Issues
- [#3351](https://github.com/vllm-project/aibrix/issues/3351) PodAutoscaler counts pods instead of RoleSets for a StormService (KPA over-scales, pending-replica guard bypassed) `kind/bug` `area/runtime` `area/orchestration` 💬4
- [#3345](https://github.com/vllm-project/aibrix/issues/3345) [Bug] HPA percent policies truncate scale rates, dropping a point or reaching zero `kind/bug` `triage/accepted` `area/orchestration` 💬4
- [#3344](https://github.com/vllm-project/aibrix/issues/3344) [Bug] Batch input validation accepts duplicate custom_id values `kind/bug` `area/batch` 💬2
- [#3346](https://github.com/vllm-project/aibrix/issues/3346) Flaky TestModelReplicaRequestsInflightLimit/concurrent_requests_beyond_cap_are_rejected `help wanted` `area/gateway` `area/testing` `kind/misc` 💬1

#### 🔒 Closed Issues
- [#3337](https://github.com/vllm-project/aibrix/issues/3337) With several metrics, the pending-replica guard can scale below what another metric asks for
- [#3182](https://github.com/vllm-project/aibrix/issues/3182) [Bug] TOS put_object recurses for objects at or above the multipart threshold
- [#3239](https://github.com/vllm-project/aibrix/issues/3239) [Bug] kvcache-watcher drops a cache pod's slot ranges when the pod owns the first and last slot

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,329 · **Open issues:** 878 · **Last push:** 7h ago

On October 30, 2026, there were no new releases or merged pull requests for Semantic Router. The day saw the creation of several new issues, notably #5598, which addresses the API budget constraints affecting community automation during peak hours, and #5601, focused on enhancing recipe diagnosis and establishing calibrated thresholds for recipe distribution. Additionally, issues like #5609 and #5636 highlight critical bugs related to session memory management and Vela 3.0 package verification, respectively. Overall, today was routine in terms of major updates, but the discussions around improving CI/CD processes and addressing existing bugs are particularly noteworthy.

#### 🐛 New Issues
- [#5598](https://github.com/vllm-project/semantic-router/issues/5598) [CI/Build] Community automation and PR qualification share one API budget that runs out at busy hours `bug` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#5601](https://github.com/vllm-project/semantic-router/issues/5601) [Feature] recipe-lab sub-issue 7: recipe diagnosis and distribution-calibrated thresholds `enhancement` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#5609](https://github.com/vllm-project/semantic-router/issues/5609) [Bug] Session memory sweeps every stored session under a global lock on each routed request `bug` `accepted` `in-progress` `wg/agentic-context` 💬2
- [#5636](https://github.com/vllm-project/semantic-router/issues/5636) [Bug] Vela 3.0 package verification accepts out-of-range marker IDs `bug` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5629](https://github.com/vllm-project/semantic-router/issues/5629) [Docs] The Vela model guide still names Vela 2.0 0.3B as the default and has no Vela 3.0 section `needs-acceptance` `wg/router-models-inference-runtime` `documentation` 💬1
- [#5596](https://github.com/vllm-project/semantic-router/issues/5596) [CI/Build] Changing the default signal models selects no recipe or signal E2E lane `bug` `accepted` `wg/evaluation-quality` 💬1
- [#5618](https://github.com/vllm-project/semantic-router/issues/5618) [Bug] Balance recipe live conformance fails after the default decision model moved to vela3-fast `bug` `accepted` `wg/mom-routing` 💬1
- [#5602](https://github.com/vllm-project/semantic-router/issues/5602) [Bug] Model Runtime Malformed Hub manifest JSON triggers unnecessary load retries `bug` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5630](https://github.com/vllm-project/semantic-router/issues/5630) [Governance] Seed the claimable pool: accepted issues pile up while ready-for-dev and good first issue are both 0 `needs-acceptance` `wg/developer-experience-ecosystem` `owner/maintainers`
- [#5628](https://github.com/vllm-project/semantic-router/issues/5628) [Bug] Cerebras Chat responses fail strict decoding on the top-level time_info object `bug` `needs-acceptance` `wg/data-plane-networking`
- [#5627](https://github.com/vllm-project/semantic-router/issues/5627) [Bug] Modality-detector guidance still prescribes Vela 2.0 0.3B's 0.51 threshold; the default vela3-fast is calibrated at 0.63 `bug` `needs-acceptance` `wg/mom-routing`
- [#5626](https://github.com/vllm-project/semantic-router/issues/5626) [Bug] Non-finite learning and protection tunables pass config validation and silently freeze model switching `bug` `needs-acceptance` `wg/mom-routing`
- [#5625](https://github.com/vllm-project/semantic-router/issues/5625) [Feature] Serve the vela3-fast-vision package and image inputs in the model runtime `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5624](https://github.com/vllm-project/semantic-router/issues/5624) [Bug] Grafana deployment dashboards keep three panels on retired windowed metrics `bug` `needs-acceptance` `wg/enterprise-environment`
- [#5623](https://github.com/vllm-project/semantic-router/issues/5623) [Bug] Community Label Sync stops the whole sweep on the first transient 5xx `needs-acceptance` `wg/evaluation-quality`
- [#5616](https://github.com/vllm-project/semantic-router/issues/5616) [Feature] Model runtime: install causal-conv1d in the CUDA router image `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5613](https://github.com/vllm-project/semantic-router/issues/5613) [Bug] vela3-fast on CPU peaks near 16 GiB on one 30K-token decision `needs-acceptance` `wg/router-models-inference-runtime`
- [#5611](https://github.com/vllm-project/semantic-router/issues/5611) [Feature] Model runtime: fold encoder LoRA scaling into the B factor `needs-acceptance` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#3787](https://github.com/vllm-project/semantic-router/issues/3787) [Research] Retrain the jailbreak detector on attack labels with encoder models
- [#3372](https://github.com/vllm-project/semantic-router/issues/3372) [Feature] Make classifier input truncation observable
- [#5145](https://github.com/vllm-project/semantic-router/issues/5145) [Feature] Model runtime: load NVFP4 Decision 3.0 packages
- [#5010](https://github.com/vllm-project/semantic-router/issues/5010) [Feature] Add a locked uv environment for the hallucination detection classifier
- [#3256](https://github.com/vllm-project/semantic-router/issues/3256) [Bug] model_fa_fp16.onnx holds FP32 weights in five of six published 32K heads
- [#5158](https://github.com/vllm-project/semantic-router/issues/5158) [Feature] NPU: register the fused rotate-half kernel
- [#5596](https://github.com/vllm-project/semantic-router/issues/5596) [CI/Build] Changing the default signal models selects no recipe or signal E2E lane
- [#5618](https://github.com/vllm-project/semantic-router/issues/5618) [Bug] Balance recipe live conformance fails after the default decision model moved to vela3-fast
- [#5350](https://github.com/vllm-project/semantic-router/issues/5350) [Feature] Let operators accept the tool-result failure loss so coding agents can use OpenAI-format backends
- [#5348](https://github.com/vllm-project/semantic-router/issues/5348) [Feature] Router Learning protection: hold each subagent on its own model

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*