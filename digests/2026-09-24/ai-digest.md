# 📡 AI Ecosystem Digest — 2026-09-24

> Generated 2026-09-24 01:09 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 147,811 | 5 | 1 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 126,181 | 18 | 4 | 50 | 9 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,140 | 0 | 0 | 4 | 4 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,195 | 8 | 28 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 209,676 | 27 | 4 | 4 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,101 | 16 | 23 | 6 | 2 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 390,348 | 69 | 35 | 91 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 248,411 | 24 | 19 | 11 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 92,549 | 38 | 12 | 27 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,381 | 17 | 2 | 59 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 129,351 | 14 | 18 | 29 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 181,534 | 4 | 2 | 4 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 59,504 | 30 | 19 | 49 | 6 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,651 | 27 | 8 | 63 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,107 | 3 | 1 | 7 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,905 | 11 | 9 | 9 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.281](https://github.com/anthropics/claude-code/releases/tag/v2.1.281).
- **OpenAI Codex** had several releases, culminating in version [rust-v0.158.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.6).
- **OpenClaw** launched version [v2026.9.6](https://github.com/openclaw/openclaw/releases/tag/v2026.9.6).
- A new issue in **OpenClaw** about subprocess management, [#156712](https://github.com/openclaw/openclaw/issues/156712), accumulated 9 comments, indicating significant concern from users.
- The issue [#47699](https://github.com/openai/codex/issues/47699) in **OpenAI Codex** related to Windows 10 failures also gained traction, with 3 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 147,811 · **Open issues:** 12,475 · **Last push:** 5h ago

On September 24, 2026, Claude Code released version v2.1.281, which added support for Claude apps gateway with enhancements to `desktop` policy blocks, including features like `blockReadsOutsideWorkingDirectories` and `disableBypassPermissionsMode`. Additionally, the update introduced the `assume_role` capability on Claude apps gateway Bedrock upstreams, allowing the gateway to function as an IAM role via STS across different AWS accounts. There were no merged pull requests in the last 24 hours, but several new issues were raised, notably issue #96546 regarding agent sub-agent calls returning unrelated session content, indicating potential challenges with session handling.

#### 🚀 New Releases
- [v2.1.281](https://github.com/anthropics/claude-code/releases/tag/v2.1.281) v2.1.281

#### 🐛 New Issues
- [#96546](https://github.com/anthropics/claude-code/issues/96546) Workflow tool: agent() sub-agent calls in a run returned content from an unrelated, concurrent session `bug` `platform:macos` `area:agents`
- [#96545](https://github.com/anthropics/claude-code/issues/96545) [GitHub integration] hoho `invalid` `github-integration`
- [#96544](https://github.com/anthropics/claude-code/issues/96544) [BUG] agents-md: don't report when AGENTS.md was loaded instead of CLAUDE.md `bug` `area:cli`
- [#96542](https://github.com/anthropics/claude-code/issues/96542) [Bug] Remote session name not synced when local session name is updated `bug` `platform:macos` `area:agent-view`
- [#96543](https://github.com/anthropics/claude-code/issues/96543) [BUG] statusLine JSON has no rate_limits (or subscription_type) for Claude.ai enterprise login, while /usage shows Usage credits `bug` `platform:linux` `area:cost` `area:statusline`

#### 🔒 Closed Issues
- [#96545](https://github.com/anthropics/claude-code/issues/96545) [GitHub integration] hoho

### OpenAI Codex (`openai/codex`)

**Stars:** 126,181 · **Open issues:** 18,494 · **Last push:** <1h ago

Today, OpenAI Codex saw the release of rust-v0.156.1, which introduced the ability to choose between new models GPT-6 Sol and GPT-6 Luna from the model picker, alongside a new recommendation for GPT-6 Luna in the rate-limit switch prompt. Additionally, several alpha releases of rust-v0.158.0 were made, demonstrating ongoing development in that branch. Significant merges included enhancements to WebSocket connections, such as allowing idle threads to prewarm and repair them (#47701), and preserving the account network policy for ChatGPT backend requests (#47703). However, several notable issues emerged, including #47511, which addresses a missing button for git commit and push, indicating workflow disruptions for users.

#### 🚀 New Releases
- [rust-v0.156.1](https://github.com/openai/codex/releases/tag/rust-v0.156.1) 0.156.1
- [rust-v0.158.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.6) 0.158.0-alpha.6
- [rust-v0.158.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.5) 0.158.0-alpha.5
- [rust-v0.158.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.4) 0.158.0-alpha.4
- [rust-v0.158.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.3) 0.158.0-alpha.3
- [rust-v0.158.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.2) 0.158.0-alpha.2
- [rust-v0.157.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.11) 0.157.0-alpha.11
- [rust-v0.155.0-alpha.16.4](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.16.4) 0.155.0-alpha.16.4
- [rust-v0.155.0-alpha.16.3](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.16.3) 0.155.0-alpha.16.3

#### ✅ Merged PRs
- [#47709](https://github.com/openai/codex/pull/47709) Route resume prewarm through the cached WebSocket session
- [#47704](https://github.com/openai/codex/pull/47704) Fix spawn flag typing and isolate project configuration tests
- [#47703](https://github.com/openai/codex/pull/47703) Preserve account network policy for ChatGPT backend requests
- [#47701](https://github.com/openai/codex/pull/47701) Allow idle threads to prewarm and repair WebSocket connections
- [#47698](https://github.com/openai/codex/pull/47698) Allow WebSocket test server shutdown while waiting for requests
- [#47696](https://github.com/openai/codex/pull/47696) Avoid the shutdown timeout in the lagged-event test
- [#47695](https://github.com/openai/codex/pull/47695) Repair rejected Windows sandbox credentials during provisioning
- [#47693](https://github.com/openai/codex/pull/47693) Configure curl retries for DotSlash installation in CI
- [#47691](https://github.com/openai/codex/pull/47691) Materialize rollout persistence for pending inter-agent messages
- [#47690](https://github.com/openai/codex/pull/47690) Remove obsolete Guardian context capture mode branches
- [#47689](https://github.com/openai/codex/pull/47689) Make Guardian thread context capture unconditional
- [#47688](https://github.com/openai/codex/pull/47688) Remove legacy Guardian authorization evidence paths
- [#47686](https://github.com/openai/codex/pull/47686) Make thread-owned Guardian context always enabled
- [#47683](https://github.com/openai/codex/pull/47683) Add executor capability discovery V2 infrastructure
- [#47680](https://github.com/openai/codex/pull/47680) Add exec-server RPC timing and process startup tracing
- [#47679](https://github.com/openai/codex/pull/47679) Add extension hooks for model requests and response streams
- [#47678](https://github.com/openai/codex/pull/47678) Support quoted labels and ampersands in Mermaid flowcharts
- [#47677](https://github.com/openai/codex/pull/47677) Support model catalog overrides for MCP resource tool specs
- [#47673](https://github.com/openai/codex/pull/47673) Clarify registered Windows sandbox setup errors
- [#47672](https://github.com/openai/codex/pull/47672) Fix no-reparse directory opens on Windows 10
- [#47670](https://github.com/openai/codex/pull/47670) Support model-specific descriptions for agent message board tools
- [#47665](https://github.com/openai/codex/pull/47665) Preserve early unified exec output in completion events
- [#47663](https://github.com/openai/codex/pull/47663) Preserve managed network policy in route-aware transports
- [#47662](https://github.com/openai/codex/pull/47662) Expose tool dispatch and timing observations to extensions
- [#47657](https://github.com/openai/codex/pull/47657) Restrict the default Bedrock GovCloud model catalog
- [#47655](https://github.com/openai/codex/pull/47655) Bump the exec-server stable compatibility test to Codex 0.156.1
- [#47654](https://github.com/openai/codex/pull/47654) Make Linux descriptor cleanup fork-safe
- [#47653](https://github.com/openai/codex/pull/47653) Attach inherited rollout history to diagnostic reports
- [#47649](https://github.com/openai/codex/pull/47649) Add opt-in OTLP logging for final agent responses
- [#47648](https://github.com/openai/codex/pull/47648) Support bearer tokens for app-server executor connections
- [#47647](https://github.com/openai/codex/pull/47647) Apply Guardian computer-use review to the Browser connector
- [#47642](https://github.com/openai/codex/pull/47642) Add model-specific prefixes to indirect tool descriptions
- [#47641](https://github.com/openai/codex/pull/47641) Honor Retry-After and preserve server retry deadlines
- [#47639](https://github.com/openai/codex/pull/47639) Add configurable copy-on-select for transcript selections
- [#47638](https://github.com/openai/codex/pull/47638) Classify retryable exec-server preparation errors by type
- [#47635](https://github.com/openai/codex/pull/47635) Overlap startup WebSocket preconnect with tool discovery
- [#47633](https://github.com/openai/codex/pull/47633) Route message board agent resolution through the selected controller
- [#47630](https://github.com/openai/codex/pull/47630) Bind Guardian reviews to the action's target environment
- [#47629](https://github.com/openai/codex/pull/47629) Route V2 child loading through `AgentControl`
- [#47625](https://github.com/openai/codex/pull/47625) Allow history and notes without experimental context capability
- [#47624](https://github.com/openai/codex/pull/47624) Recognize `user_message` tools in Guardian authorization context
- [#47623](https://github.com/openai/codex/pull/47623) Fix read-only metadata mount ordering for nested writable roots
- [#47620](https://github.com/openai/codex/pull/47620) Add portable project trust lookup APIs
- [#47619](https://github.com/openai/codex/pull/47619) Add bounded buffering for global operation metrics
- [#47618](https://github.com/openai/codex/pull/47618) Prefer Shift-arrow hints for queued messages and questions
- [#47617](https://github.com/openai/codex/pull/47617) Route Linux PTY launches through the process setup helper
- [#47613](https://github.com/openai/codex/pull/47613) Expand Linux spawn-helper lifecycle test coverage
- [#47612](https://github.com/openai/codex/pull/47612) Launch Linux pipe processes through a fresh setup helper
- [#47611](https://github.com/openai/codex/pull/47611) Use the shared process launcher for Unix shell snapshots
- [#47610](https://github.com/openai/codex/pull/47610) Use native POSIX spawning for command hooks

#### 🐛 New Issues
- [#47511](https://github.com/openai/codex/issues/47511) Missing button for git commit and push `bug` `app` 💬3
- [#47676](https://github.com/openai/codex/issues/47676) CLI: make completion timestamps optional and expose clock format in config.toml `enhancement` `TUI` `CLI` `config` 💬3
- [#47699](https://github.com/openai/codex/issues/47699) Windows 10: Computer Use fails with SetIsBorderRequired 0x80004002; Appshots cannot attach `bug` `windows-os` `tool-calls` `app` 💬3
- [#47667](https://github.com/openai/codex/issues/47667) Quota Limit Bars in VS Code Extension not visible since extension version 26.5917 `bug` `extension` `rate-limits` 💬3
- [#47692](https://github.com/openai/codex/issues/47692) Codex SDK completes fileChange outside intended MCP-only tool set without approval callback `bug` `windows-os` `mcp` `sandbox` 💬2
- [#47681](https://github.com/openai/codex/issues/47681) bubblewrap error `bug` `windows-os` `extension` `sandbox` 💬1
- [#47708](https://github.com/openai/codex/issues/47708) codex sandbox fails with cannot establish app-server socket mount isolation on Btrfs subvolume layout `bug` `sandbox` `CLI` 💬1
- [#47707](https://github.com/openai/codex/issues/47707) Goals can repeat the same assistant response hundreds of times after automatic context compaction `bug` `model-behavior` `context` `app` 💬1
- [#47706](https://github.com/openai/codex/issues/47706) [Windows] Session Summary omits primary folder in multi-folder local projects `bug` `windows-os` `app` 💬1
- [#47705](https://github.com/openai/codex/issues/47705) [Windows] Session Summary omits primary folder in multi-folder local projects `bug` `windows-os` `app` 💬1
- [#47702](https://github.com/openai/codex/issues/47702) Respect default editor association when opening file links from Codex responses `enhancement` `extension` 💬1
- [#47687](https://github.com/openai/codex/issues/47687) Windows CLI: /model sent as chat text; repeated node_repl and cua_repl access-denied startup failures `bug` `windows-os` `mcp` `TUI` 💬1
- [#47685](https://github.com/openai/codex/issues/47685) Computer Use stops at the same URL-verification error in Chrome: Feedback ID 1a0d00a-59ce-7761-b18d-7e9aa4b799b1 `bug` `windows-os` `app` `computer-use` 💬1
- [#47682](https://github.com/openai/codex/issues/47682) codex send button greyed out `bug` 💬1
- [#47700](https://github.com/openai/codex/issues/47700) [macOS][Computer Use] Qt Creator crashes opening .cpp files; suspected accessibility interaction `bug` `app` `computer-use`
- [#47697](https://github.com/openai/codex/issues/47697) [Docs MCP] fetch_openai_doc appends .md to official llms.txt URLs and returns 404 `bug` `mcp` `tool-calls` `app`
- [#47694](https://github.com/openai/codex/issues/47694) Xcode 27 native Codex missing from Intelligence; manual executable override then keyring login resolves 401 `bug` `extension` `auth`
- [#47684](https://github.com/openai/codex/issues/47684) CLI stack overflow when confirming Astra selection in a local development build `bug` `TUI` `CLI` `custom-model`

#### 🔒 Closed Issues
- [#45857](https://github.com/openai/codex/issues/45857) [macOS / Pro] Spark limits show 100% remaining, but CLI 0.154.0 rejects gpt-5.3-codex-spark with HTTP 400
- [#47708](https://github.com/openai/codex/issues/47708) codex sandbox fails with cannot establish app-server socket mount isolation on Btrfs subvolume layout
- [#47706](https://github.com/openai/codex/issues/47706) [Windows] Session Summary omits primary folder in multi-folder local projects
- [#29748](https://github.com/openai/codex/issues/29748) Plugin icons are not rendered in Codex Plugins tab on Windows

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,140 · **Open issues:** 829 · **Last push:** <1h ago

On September 24, 2026, Gemini CLI released version v0.62.0-preview.0, which includes a critical fix in the a2a-server that adds an early return on unsupported stores in the tasks metadata endpoint. Additionally, the nightly build v0.62.0-nightly.20260923.g62364cb20 introduced a new feature supporting Gemini 3.8 Flash and Flash Lite. The release v0.61.0-preview.1 was also merged, which includes a cherry-pick patch to enhance the previous preview version. Significant merged pull requests involved improving the CLI experience with a retry progress indicator during connection recovery, as well as ensuring presence checks for VSC integration tests. Notably, no new issues were reported today.

#### 🚀 New Releases
- [v0.62.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-preview.0) Release v0.62.0-preview.0
- [v0.62.0-nightly.20260923.g62364cb20](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260923.g62364cb20) Release v0.62.0-nightly.20260923.g62364cb20
- [v0.61.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0) Release v0.61.0
- [v0.61.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-preview.1) Release v0.61.0-preview.1

#### ✅ Merged PRs
- [#29469](https://github.com/google-gemini/gemini-cli/pull/29469) Changelog for v0.61.0-preview.1
- [#29468](https://github.com/google-gemini/gemini-cli/pull/29468) fix(cli): display retry progress indicator during connection recovery (#28340)
- [#29462](https://github.com/google-gemini/gemini-cli/pull/29462) Check for vsc integration test presence when attempting to run.
- [#29455](https://github.com/google-gemini/gemini-cli/pull/29455) fix(patch): cherry-pick 62364cb to release/v0.61.0-preview.0-pr-29443 to patch version v0.61.0-preview.0 and create version 0.61.0-preview.1

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,195 · **Open issues:** 2,290 · **Last push:** 5h ago

On September 24, 2026, GitHub Copilot CLI released version 1.0.89-1, which included the addition of GPT-6 Sol and GPT-6 Luna to the model picker, along with several fixes that improved the handling of line ranges in the view tool and allowed for recalling pending messages in empty chat inputs during local sessions. While there were no merged pull requests reported, several new issues emerged, notably #4959 which highlights a problem where the enterprise-managed `model` setting is received but not applied in the Copilot app and non-interactive CLI. Other significant issues include #4956 concerning the reporting of resolved definition paths for custom agents and #4955, which indicates that interactive typing is not possible while an agent is running.

#### 🚀 New Releases
- [v1.0.89-1](https://github.com/github/copilot-cli/releases/tag/v1.0.89-1) 1.0.89-1

#### 🐛 New Issues
- [#4959](https://github.com/github/copilot-cli/issues/4959) Enterprise managed `model` setting is received but not applied in the Copilot app and non-interactive CLI `triage`
- [#4958](https://github.com/github/copilot-cli/issues/4958) Allow disabling one plugin's hooks without disabling the plugin `triage`
- [#4957](https://github.com/github/copilot-cli/issues/4957) 1.0.88: workspace MCP servers blocked at startup because managed policy is resolved before GitHub auth `triage`
- [#4956](https://github.com/github/copilot-cli/issues/4956) Report the resolved definition path (and content hash) for each custom agent `triage`
- [#4955](https://github.com/github/copilot-cli/issues/4955) Cannot type interactively while agent is running `triage`
- [#4954](https://github.com/github/copilot-cli/issues/4954) Desktop app (Windows): enabling remote control fails with "Failed to set up remote session" — log shows "No authentication token available; remote export disabled" `triage`
- [#4953](https://github.com/github/copilot-cli/issues/4953) Enterprise custom models with slash in the provider model ID can't be selected from /model picker (ID is served URL-encoded as %2F) `triage`
- [#4952](https://github.com/github/copilot-cli/issues/4952) Flip submit and newline key bindings `triage`

#### 🔒 Closed Issues
- [#2421](https://github.com/github/copilot-cli/issues/2421) HTTP/2 GOAWAY race condition causes cascading retry failures and silent premium request waste (consolidates #1743, #1754, #2050, #2101, #2189)
- [#2995](https://github.com/github/copilot-cli/issues/2995) Can´t use DeepSeek API
- [#2827](https://github.com/github/copilot-cli/issues/2827) Improve rate limit UI for all types of rate limit
- [#4535](https://github.com/github/copilot-cli/issues/4535) `store_memory` fails in v1.0.81 prereleases: `Instance id is required`
- [#1063](https://github.com/github/copilot-cli/issues/1063) Zsh completion broken and documentation URLs broken/removed
- [#4521](https://github.com/github/copilot-cli/issues/4521) Sandbox cannot be disabled
- [#3331](https://github.com/github/copilot-cli/issues/3331) Feature request: auto-update plugins on CLI startup via marketplace flag
- [#4605](https://github.com/github/copilot-cli/issues/4605) latest-prerelease lookup strands users on 1.0.81-9: releases share created_at, so GitHub ranks -10 below -2 and the first listed prerelease is chosen
- [#3877](https://github.com/github/copilot-cli/issues/3877) Auto-allow permissions on session start
- [#2141](https://github.com/github/copilot-cli/issues/2141) Auto model selection like the feature in Visual Studio Code IDE chat
- [#2533](https://github.com/github/copilot-cli/issues/2533) Blocking shell/tool call freezes agent — user messages unread until shell unblocks
- [#4843](https://github.com/github/copilot-cli/issues/4843) Copilot CLI colors don't respect terminal theme in Warp
- [#4213](https://github.com/github/copilot-cli/issues/4213) copilot cli drops enter and other key events when the terminal pane is unfocused
- [#2757](https://github.com/github/copilot-cli/issues/2757) /undo undid too much in a file
- [#2351](https://github.com/github/copilot-cli/issues/2351) Allow / commands (e.g. skills) mid prompt, not just at start
- [#2323](https://github.com/github/copilot-cli/issues/2323) Session resume permanently broken: tool_use/tool_result mismatch from interleaved sub-agent turns
- [#2197](https://github.com/github/copilot-cli/issues/2197) The `--config-dir=PATH` is not working as expected
- [#3779](https://github.com/github/copilot-cli/issues/3779) Feature Request: Add keyboard shortcut to open session picker and/or switch between sessions
- [#1903](https://github.com/github/copilot-cli/issues/1903) current_datetime injected as UTC — should use local timezone
- [#1133](https://github.com/github/copilot-cli/issues/1133) Add `/security-review` command for automated vulnerability detection
- [#4297](https://github.com/github/copilot-cli/issues/4297) Copilot crashes on launch if log level is set to any value other than "all" or "default"
- [#3933](https://github.com/github/copilot-cli/issues/3933) Drops out of autopilot after each request
- [#3023](https://github.com/github/copilot-cli/issues/3023) copilot plugin install does not load joinSession() extensions from installed-plugins/
- [#2645](https://github.com/github/copilot-cli/issues/2645) Subagent streaming deltas (assistant.message_delta) not emitted to SDK consumers
- [#4857](https://github.com/github/copilot-cli/issues/4857) Copilot switches to windows theme instead of staying dark
- [#1819](https://github.com/github/copilot-cli/issues/1819) Skill references trigger unnecessary directory access prompts
- [#4717](https://github.com/github/copilot-cli/issues/4717) Extension startup fails on large session histories
- [#1637](https://github.com/github/copilot-cli/issues/1637) codex models fail with unsupported_api_for_model when model list fetch is rate-limited

### OpenCode (`anomalyco/opencode`)

**Stars:** 209,676 · **Open issues:** 6,170 · **Last push:** <1h ago

On September 24, 2026, there were no new releases for OpenCode, but several important merged pull requests included fixes for starting MCP sign-in from row clicks (#51001), updating condition checks for the OpenAIPlugin (#50989), and redacting credentials in the debug configuration (#50956). Additionally, a fix was implemented to ignore blank subagent options (#50977). Among the new issues raised, the feature request to redact credential values in the opencode debug config (#50915) gained attention, highlighting ongoing concerns regarding security and privacy within the system. Overall, the day was characterized by routine maintenance focused on bug fixes and feature refinements.

#### ✅ Merged PRs
- [#51001](https://github.com/anomalyco/opencode/pull/51001) fix(app): start MCP sign-in from row click
- [#50989](https://github.com/anomalyco/opencode/pull/50989) fix: Update condition for OpenAIPlugin to check 'astra'
- [#50956](https://github.com/anomalyco/opencode/pull/50956) fix(opencode): redact credentials in debug config
- [#50977](https://github.com/anomalyco/opencode/pull/50977) fix(core): ignore blank subagent options

#### 🐛 New Issues
- [#50915](https://github.com/anomalyco/opencode/issues/50915) [FEATURE REQUEST]: Redact credential values in opencode debug config 💬5
- [#50934](https://github.com/anomalyco/opencode/issues/50934) vcs diff reports "no changes" when Git cannot read the repository 💬2
- [#50962](https://github.com/anomalyco/opencode/issues/50962) TUI: client.tui.showToast() from command.execute.before corrupts input box 💬2
- [#50964](https://github.com/anomalyco/opencode/issues/50964) [Desktop] Model picker missing in prompt box (models enabled in Settings, but can't select one) 💬1
- [#50969](https://github.com/anomalyco/opencode/issues/50969) tui: model favorites toggle missing hint and dead in /models dialog (2.0.13) 💬1
- [#51007](https://github.com/anomalyco/opencode/issues/51007) v2: session ID in the first instruction block defeats cross-session prompt caching
- [#51005](https://github.com/anomalyco/opencode/issues/51005) [FEATURE]: RTL (Right-to-Left) / Bidirectional text support for TUI input and chat rendering
- [#51003](https://github.com/anomalyco/opencode/issues/51003) mcp: global stdio servers spawn once per loaded directory and exhaust memory
- [#50999](https://github.com/anomalyco/opencode/issues/50999) migration: v1 sessions imported under project 'global' are invisible in project session lists
- [#50998](https://github.com/anomalyco/opencode/issues/50998) Community provider example: HAL SUPREME OpenAI-compatible peer (OpenCode-shaped JSON)
- [#50996](https://github.com/anomalyco/opencode/issues/50996) Rate limit exceeded. Please try again later.
- [#50995](https://github.com/anomalyco/opencode/issues/50995) agent: V2 base prompt has no question-tool guidance, so agents ask in prose
- [#50993](https://github.com/anomalyco/opencode/issues/50993) no puedo conectar proveedor personalizado
- [#50992](https://github.com/anomalyco/opencode/issues/50992) error provedor personalizado
- [#50991](https://github.com/anomalyco/opencode/issues/50991) Invalid API Key
- [#50990](https://github.com/anomalyco/opencode/issues/50990) error provedor personalizado
- [#50988](https://github.com/anomalyco/opencode/issues/50988) web: copy button on code blocks silently fails on insecure (non-HTTPS) origins
- [#50986](https://github.com/anomalyco/opencode/issues/50986) desktop: One Dark Pro workspace messages have low contrast
- [#50985](https://github.com/anomalyco/opencode/issues/50985) no respode
- [#50984](https://github.com/anomalyco/opencode/issues/50984) Plugins cannot publish tui.command.execute / tui.toast.show events (v1's client.tui.publish has no v2 equivalent)
- [#50980](https://github.com/anomalyco/opencode/issues/50980) migrate: V1-era session exists only in legacy table, invisible to V2 clients
- [#50979](https://github.com/anomalyco/opencode/issues/50979) project: session move into an empty git repo re-points the global project's worktree
- [#50975](https://github.com/anomalyco/opencode/issues/50975) [FEATURE]: docs: add Phoenix Grove to the providers page
- [#50966](https://github.com/anomalyco/opencode/issues/50966) Multiple fff engines per process watch the same base path, multiplying inotify watches 2-3x
- [#50967](https://github.com/anomalyco/opencode/issues/50967) εξαφανιζονται τα μοντελα
- [#50963](https://github.com/anomalyco/opencode/issues/50963) desktop: attach button in chat fails with "Desktop IPC handler failed" on Windows
- [#50960](https://github.com/anomalyco/opencode/issues/50960) AI SDK route (aisdk:@ai-sdk/openai-compatible) sends tool-result images as null content parts

#### 🔒 Closed Issues
- [#50915](https://github.com/anomalyco/opencode/issues/50915) [FEATURE REQUEST]: Redact credential values in opencode debug config
- [#47497](https://github.com/anomalyco/opencode/issues/47497) cli: concurrent session.json writes race on Windows → EPERM, TUI loses current session
- [#47516](https://github.com/anomalyco/opencode/issues/47516) tui: stale subagent sessions cause SessionNotFoundError unhandled rejection bursts
- [#50461](https://github.com/anomalyco/opencode/issues/50461) Service startup discards failures from overlapping contenders

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,101 · **Open issues:** 1,471 · **Last push:** <1h ago

On September 24, 2026, Qwen Code released version v0.24.4-nightly.20260923.d0cd622a68, which includes vital corrections to the deferred-tool bridge and an explanation regarding the capitalization of CI test times documented by @yiliang114. Additionally, the cua-driver-rs v0.20.11 was made available, featuring prebuilt binaries for macOS, Linux, and Windows. Significant merged pull requests included enhancements to the web-shell for model management controls, stability fixes in CoreToolScheduler across callback changes, and performance improvements in session workflow projections. Among the newly reported issues, #12514 highlighted a gap in the session-commit registration process leading to errors in commit amendments, attracting attention with several comments on its implications.

#### 🚀 New Releases
- [v0.24.4-nightly.20260923.d0cd622a68](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.4-nightly.20260923.d0cd622a68) Release v0.24.4-nightly.20260923.d0cd622a68
- [cua-driver-rs-v0.20.11](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.11) cua-driver-rs v0.20.11

#### ✅ Merged PRs
- [#12345](https://github.com/QwenLM/qwen-code/pull/12345) feat(web-shell): add host controls for model management
- [#12069](https://github.com/QwenLM/qwen-code/pull/12069) fix(cli): keep CoreToolScheduler stable across callback identity changes
- [#12182](https://github.com/QwenLM/qwen-code/pull/12182) fix(skills): reload changed content after refresh
- [#11237](https://github.com/QwenLM/qwen-code/pull/11237) perf(web-shell): derive the session workflow projection once and share it across surfaces (#10865)
- [#11765](https://github.com/QwenLM/qwen-code/pull/11765) fix(core): read a backslash inside single quotes as literal when splitting
- [#12567](https://github.com/QwenLM/qwen-code/pull/12567) fix(core): decide MCP media handling from the bytes, not the label

#### 🐛 New Issues
- [#12514](https://github.com/QwenLM/qwen-code/issues/12514) Session-commit registration does not cover every path or spelling that can land a commit (false "not made by the agent in this session" amend block) `priority/P2` `type/bug` `category/security` `scope/shell` 💬5
- [#12578](https://github.com/QwenLM/qwen-code/issues/12578) save-artifact's isSameFile overwrite guard has no hard-link witness (follow-up from #11848) `priority/P2` `category/development` `scope/file-operations` `scope/testing` 💬4
- [#12574](https://github.com/QwenLM/qwen-code/issues/12574) repo-context's two plan-identity guards still compare number-backed inodes and fail open above 2^53 (follow-up from #11848) `priority/P2` `type/bug` `category/security` `scope/file-operations` 💬4
- [#12558](https://github.com/QwenLM/qwen-code/issues/12558) feat(hooks): notify third parties when managed memories change `priority/P3` `type/feature-request` `category/core` `scope/memory` 💬4
- [#12530](https://github.com/QwenLM/qwen-code/issues/12530) Qwen Live: use the Web Shell endpoint everywhere, native macOS Host opt-in `priority/P2` `category/platform` `scope/macos` `type/enhancement` 💬4
- [#12579](https://github.com/QwenLM/qwen-code/issues/12579) Agent re-investigates things already in the conversation history, wasting tokens and time (especially on local LLMs) `priority/P3` `type/feature-request` `category/core` `scope/token-management` 💬3
- [#12576](https://github.com/QwenLM/qwen-code/issues/12576) Web Shell: bound scheduled-task controller sessions are absent from the session list — discoverability gap (PR #11635 closed unmerged) `priority/P2` `type/feature-request` `category/ui` `scope/session-management` 💬3
- [#12575](https://github.com/QwenLM/qwen-code/issues/12575) feat(desktop): allow opting out of the Desktop app update check (honor general.enableAutoUpdate) `priority/P3` `type/feature-request` `category/platform` `scope/settings` 💬3
- [#12569](https://github.com/QwenLM/qwen-code/issues/12569) Deferred-tool bridge: a hidden tool whose schema left context via /compress is still invocable by name (remaining half of #11321) `priority/P3` `category/tools` `type/enhancement` `need-discussion` 💬3
- [#12551](https://github.com/QwenLM/qwen-code/issues/12551) feat(web-shell): public sharing for HTML artifacts `priority/P3` `type/feature-request` `category/integration` `need-discussion` 💬3
- [#12550](https://github.com/QwenLM/qwen-code/issues/12550) perf(cli): reduce VP-mode TUI render overhead (incremental output + memoized history) `priority/P2` `category/performance` `scope/interactive` `scope/rendering` 💬3
- [#12554](https://github.com/QwenLM/qwen-code/issues/12554) docs: fix gemini-cli residue in quickstart, wrong /clear description, and outdated CLI name in CONTRIBUTING `priority/P2` `type/documentation` `category/cli` `scope/commands` 💬3
- [#12528](https://github.com/QwenLM/qwen-code/issues/12528) Qwen Live settings: configure the Realtime endpoint and model from the Web Shell `priority/P2` `type/feature-request` `category/configuration` `scope/settings` 💬3
- [#12553](https://github.com/QwenLM/qwen-code/issues/12553) bug(session): project rename or move makes saved sessions unreachable `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#12570](https://github.com/QwenLM/qwen-code/issues/12570) Deferred review findings from PR #12345: feat(web-shell): add host controls for model management 💬1
- [#12563](https://github.com/QwenLM/qwen-code/issues/12563) Deferred review findings from PR #12494: test(serve): tolerate workspace_runtime_stop envelope skew in capabilities basel 💬1

#### 🔒 Closed Issues
- [#12061](https://github.com/QwenLM/qwen-code/issues/12061) bug(cli): callback identity changes can replace an active tool scheduler
- [#10547](https://github.com/QwenLM/qwen-code/issues/10547) Deferred review findings from PR #10532
- [#11633](https://github.com/QwenLM/qwen-code/issues/11633) ECS runner fleet is stale: the qwen update failed
- [#10865](https://github.com/QwenLM/qwen-code/issues/10865) perf(web-shell): session workflow projection is derived three times per render
- [#12290](https://github.com/QwenLM/qwen-code/issues/12290) core: MCP inline-media bounding decides admission and labelling from the server-declared mime label, not the bytes
- [#12272](https://github.com/QwenLM/qwen-code/issues/12272) The "agent" function description is absurdly long
- [#11937](https://github.com/QwenLM/qwen-code/issues/11937) ci: "Run .github/scripts helper tests" fails repo-wide — review-runner-schedule gh shim is loaded as ESM
- [#12530](https://github.com/QwenLM/qwen-code/issues/12530) Qwen Live: use the Web Shell endpoint everywhere, native macOS Host opt-in
- [#8299](https://github.com/QwenLM/qwen-code/issues/8299) test(e2e): finish the deterministic fake-server migration and add a stable merge gate
- [#8389](https://github.com/QwenLM/qwen-code/issues/8389) feat: add an experimental Plan & Review workflow for daemon sessions
- [#11198](https://github.com/QwenLM/qwen-code/issues/11198) Usage-statistics telemetry uploads raw tool-error text (including shell command lines) to RUM without redaction
- [#12270](https://github.com/QwenLM/qwen-code/issues/12270) Windows lane red since #12067: bwrap execution suite runs on win32 and throws 'Sandbox assets are missing'
- [#11764](https://github.com/QwenLM/qwen-code/issues/11764) security: a Bash allow rule authorises a second command when the first ends with a backslash inside single quotes
- [#12231](https://github.com/QwenLM/qwen-code/issues/12231) feat(web-shell): search within the current conversation and jump to matching content
- [#10834](https://github.com/QwenLM/qwen-code/issues/10834) Images returned by MCP tools bypass the read_file image budget and enter the context at full resolution
- [#12528](https://github.com/QwenLM/qwen-code/issues/12528) Qwen Live settings: configure the Realtime endpoint and model from the Web Shell
- [#8946](https://github.com/QwenLM/qwen-code/issues/8946) Incremental (delta) review: review only new commits since the last reviewed SHA instead of restarting full passes
- [#9951](https://github.com/QwenLM/qwen-code/issues/9951) feat(external-context): Support open-source Mem0 protocol providers with configurable baseUrl
- [#11962](https://github.com/QwenLM/qwen-code/issues/11962) Release Failed for v0.23.5-preview.0 on 2026-09-15
- [#12448](https://github.com/QwenLM/qwen-code/issues/12448) Release Failed for N/A on 2026-09-22
- [#3958](https://github.com/QwenLM/qwen-code/issues/3958) Consolidate Qwen issue triage workflows to avoid duplicate automation and label races
- [#10960](https://github.com/QwenLM/qwen-code/issues/10960) Deferred review findings from PR #10458
- [#10045](https://github.com/QwenLM/qwen-code/issues/10045) Deferred review findings from PR #9891

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

**Stars:** 390,348 · **Open issues:** 8,410 · **Last push:** <1h ago

OpenClaw released version 2026.9.6, but caution is advised for macOS users as this update can cause the app to crash on launch, leading to its withdrawal from the Sparkle update feed; a hotfix, version 2026.9.7, is in progress. Among the significant merged features and fixes, improvements were made to speed up plugin rehearsal copies and ensure queued messages remain in conversation order. Additionally, session fixture management was enhanced for integration testing, and the issue of large document uploads was resolved for local file tools. A notable new issue emerged regarding the 2026.9.6 update, which has rendered OpenClaw unlaunchable on macOS, affecting user accessibility.

#### 🚀 New Releases
- [v2026.9.6](https://github.com/openclaw/openclaw/releases/tag/v2026.9.6) openclaw 2026.9.6

#### ✅ Merged PRs
- [#156877](https://github.com/openclaw/openclaw/pull/156877) improve(tests): reuse session fixtures for finalize integration cases
- [#156840](https://github.com/openclaw/openclaw/pull/156840) fix: images cannot be dropped into Side chat
- [#156793](https://github.com/openclaw/openclaw/pull/156793) improve(update): speed up plugin rehearsal copies
- [#155280](https://github.com/openclaw/openclaw/pull/155280) fix: plugin category filters wait for the full catalog
- [#156843](https://github.com/openclaw/openclaw/pull/156843) fix(ui): keep queued messages and activity in conversation order
- [#155743](https://github.com/openclaw/openclaw/pull/155743) fix(ci): limit security review source checkout
- [#156865](https://github.com/openclaw/openclaw/pull/156865) fix: include GitHub and transcript tools in Disable All
- [#156875](https://github.com/openclaw/openclaw/pull/156875) docs: add v2026.9.6 flat changelog
- [#156873](https://github.com/openclaw/openclaw/pull/156873) fix(update): record compatibility for the 2026.9.6 release
- [#131922](https://github.com/openclaw/openclaw/pull/131922) fix(pdf): surface partial document extraction
- [#156815](https://github.com/openclaw/openclaw/pull/156815) refactor: use one TCP port parser across CLI entry points
- [#156758](https://github.com/openclaw/openclaw/pull/156758) fix(codex): large document uploads are unavailable to local file tools
- [#156746](https://github.com/openclaw/openclaw/pull/156746) fix(decisions): preserve fallback on provider input rejection
- [#156828](https://github.com/openclaw/openclaw/pull/156828) fix(android): remove redundant expand badges from chat images
- [#156752](https://github.com/openclaw/openclaw/pull/156752) refactor(channels): deslop telegram and whatsapp transports
- [#156800](https://github.com/openclaw/openclaw/pull/156800) perf(code-mode): reuse warm workers across limits and bursts
- [#156764](https://github.com/openclaw/openclaw/pull/156764) fix: stop marking retained Codex background commands as failed
- [#156837](https://github.com/openclaw/openclaw/pull/156837) fix(tests): isolate session list fixture databases
- [#156391](https://github.com/openclaw/openclaw/pull/156391) fix(release): verify legacy plugin-owned chunks
- [#156827](https://github.com/openclaw/openclaw/pull/156827) fix(plugins): report reloads that still require a Gateway restart
- [#156783](https://github.com/openclaw/openclaw/pull/156783) chore(ci): run full main validation hourly
- [#156858](https://github.com/openclaw/openclaw/pull/156858) fix(chat): keep current session state when compaction finishes
- [#156704](https://github.com/openclaw/openclaw/pull/156704) fix: migrate workspace setup archives on Windows
- [#156817](https://github.com/openclaw/openclaw/pull/156817) perf(state): remove schema probes from warm session reads
- [#152323](https://github.com/openclaw/openclaw/pull/152323) refactor(oc-path): share JSONL line selection
- [#156863](https://github.com/openclaw/openclaw/pull/156863) fix(tests): avoid real channel bootstrap in WebChat cron previews
- [#155225](https://github.com/openclaw/openclaw/pull/155225) docs: add v2026.9.6 release notes
- [#156809](https://github.com/openclaw/openclaw/pull/156809) fix: restore strict lint for state and maintenance owners
- [#156472](https://github.com/openclaw/openclaw/pull/156472) fix(update): report unresolved repair ownership accurately
- [#156465](https://github.com/openclaw/openclaw/pull/156465) fix(backup): avoid per-file SQLite policy checks
- [#156447](https://github.com/openclaw/openclaw/pull/156447) fix(update): explain stale Git targets during dry-run
- [#156833](https://github.com/openclaw/openclaw/pull/156833) fix: wait for complete initial skill watcher readiness in tests
- [#156853](https://github.com/openclaw/openclaw/pull/156853) fix: deleting a large agent is rejected as a truncated config
- [#156686](https://github.com/openclaw/openclaw/pull/156686) refactor(agents): read sandbox reporting asynchronously
- [#156801](https://github.com/openclaw/openclaw/pull/156801) perf(cron): reuse receipt transactions for agent availability
- [#156646](https://github.com/openclaw/openclaw/pull/156646) fix(cli): preserve errors after an update replaces the installation
- [#156604](https://github.com/openclaw/openclaw/pull/156604) fix: preserve authorization codes for plugin model denials
- [#156640](https://github.com/openclaw/openclaw/pull/156640) perf(state): avoid main-thread waits during run cleanup
- [#156523](https://github.com/openclaw/openclaw/pull/156523) fix(update): avoid startup waits after preactivation failure
- [#156850](https://github.com/openclaw/openclaw/pull/156850) fix: stabilize foreground compaction disposal readiness checks
- [#156684](https://github.com/openclaw/openclaw/pull/156684) fix(sessions): restore sharing and notes for custom store aliases
- [#156846](https://github.com/openclaw/openclaw/pull/156846) refactor(feishu): share chat read authorization
- [#155875](https://github.com/openclaw/openclaw/pull/155875) fix(gateway): preserve worker inventory after refused database opens
- [#156612](https://github.com/openclaw/openclaw/pull/156612) fix(workers): derive live event acknowledgments from durable placement
- [#156725](https://github.com/openclaw/openclaw/pull/156725) fix(ui): release popup listeners after removal
- [#156852](https://github.com/openclaw/openclaw/pull/156852) chore(release): update appcast for 2026.9.6
- [#156830](https://github.com/openclaw/openclaw/pull/156830) perf(sessions): reduce main-thread cleanup reference scans
- [#156767](https://github.com/openclaw/openclaw/pull/156767) fix: reduce cloud snapshot setup latency
- [#156768](https://github.com/openclaw/openclaw/pull/156768) chore(autoreview): sync GPT-6 Sol and Luna defaults
- [#107070](https://github.com/openclaw/openclaw/pull/107070) refactor(whatsapp): centralize inbound turn admission and history finalization
- [#156543](https://github.com/openclaw/openclaw/pull/156543) fix(workers): bind workspace recovery to its session source
- [#155738](https://github.com/openclaw/openclaw/pull/155738) fix(ci): isolate native locale refresh inputs
- [#156784](https://github.com/openclaw/openclaw/pull/156784) perf(gateway): share model auth status preparation across clients
- [#156733](https://github.com/openclaw/openclaw/pull/156733) fix(qa): WhatsApp group broadcast fails config validation
- [#156311](https://github.com/openclaw/openclaw/pull/156311) refactor(agents): deslop agents
- [#156722](https://github.com/openclaw/openclaw/pull/156722) fix(qa): restore WhatsApp structured sticker replies
- [#156727](https://github.com/openclaw/openclaw/pull/156727) fix(qa): unblock WhatsApp status reaction scenarios
- [#156614](https://github.com/openclaw/openclaw/pull/156614) fix(ci): allow full Testbox proof to use its four-hour lease
- [#156777](https://github.com/openclaw/openclaw/pull/156777) refactor(matrix): deslop matrix
- [#156489](https://github.com/openclaw/openclaw/pull/156489) fix: prepare native worker code before selected tests start
- [#156700](https://github.com/openclaw/openclaw/pull/156700) fix(state): fail readiness on shared-state integrity loss
- [#156557](https://github.com/openclaw/openclaw/pull/156557) fix: avoid worker compilation for local media tests
- [#156773](https://github.com/openclaw/openclaw/pull/156773) refactor(slack): deslop Slack
- [#156717](https://github.com/openclaw/openclaw/pull/156717) feat(release): run the first-hop compat hops as parallel Docker lanes
- [#156029](https://github.com/openclaw/openclaw/pull/156029) feat: backport split storage to the September 4 release
- [#156662](https://github.com/openclaw/openclaw/pull/156662) perf(test): compare APFS clone bytes natively
- [#156679](https://github.com/openclaw/openclaw/pull/156679) perf(test): batch catalog publication fixture seeds
- [#156624](https://github.com/openclaw/openclaw/pull/156624) fix: local Codex agent turns fail before execution
- [#156643](https://github.com/openclaw/openclaw/pull/156643) perf(state): reuse admitted schema facts on database reads
- [#156680](https://github.com/openclaw/openclaw/pull/156680) fix(ui): prevent long status text from shrinking the working claw
- [#156742](https://github.com/openclaw/openclaw/pull/156742) refactor(browser): deslop browser
- [#156821](https://github.com/openclaw/openclaw/pull/156821) perf(worktrees): keep cleanup lease reads out of the writer queue
- [#156822](https://github.com/openclaw/openclaw/pull/156822) fix: selecting a reserved session group name opens New Group
- [#156823](https://github.com/openclaw/openclaw/pull/156823) fix(test): avoid cold model rebuild in reload context regression
- [#156816](https://github.com/openclaw/openclaw/pull/156816) fix(release): forward the operator lane waiver to publish children
- [#156588](https://github.com/openclaw/openclaw/pull/156588) fix: preserve original filenames in chat attachment downloads
- [#156805](https://github.com/openclaw/openclaw/pull/156805) test(gateway): await recorded completion facts in yield-resume and placement-cancel fixtures
- [#130596](https://github.com/openclaw/openclaw/pull/130596) docs: correct the Files panel navigation
- [#156775](https://github.com/openclaw/openclaw/pull/156775) chore(ui): refresh control ui locales
- [#156750](https://github.com/openclaw/openclaw/pull/156750) fix(ui): make chat tables readable without unnecessary scrolling
- [#154443](https://github.com/openclaw/openclaw/pull/154443) fix(control-ui): keep composer typing responsive in long chats
- [#156305](https://github.com/openclaw/openclaw/pull/156305) feat(release): treat Windows and macOS app lanes as advisory for npm publication and add per-job FRV reruns
- [#156067](https://github.com/openclaw/openclaw/pull/156067) fix: chat turns fail when session state is briefly busy
- [#156638](https://github.com/openclaw/openclaw/pull/156638) fix(gateway): stop reporting canceled queued chats as successful
- [#156760](https://github.com/openclaw/openclaw/pull/156760) fix(release): retry a pre-publish plugin child failure once instead of aborting the publish
- [#156685](https://github.com/openclaw/openclaw/pull/156685) test(agents): await completion after requester disposal
- [#156702](https://github.com/openclaw/openclaw/pull/156702) fix(macos): treat a vanished DMG mount as detached and force-detach by device node
- [#156708](https://github.com/openclaw/openclaw/pull/156708) fix(tests): avoid false CLI watchdog receipt timeouts
- [#156745](https://github.com/openclaw/openclaw/pull/156745) test: shorten child-session error browser test
- [#156579](https://github.com/openclaw/openclaw/pull/156579) refactor(discord): deslop Discord transport flows
- [#156728](https://github.com/openclaw/openclaw/pull/156728) fix(android): keep effort gauge in sync while dragging

#### 🐛 New Issues
- [#156712](https://github.com/openclaw/openclaw/issues/156712) openclaw triage: repair subprocess doesn't exit cleanly, holds gateway-lifecycle lock, blocks app restart `clawsweeper:needs-live-repro` `impact:crash-loop` `P0` `issue-rating: 🐚 platinum hermit` 💬9
- [#156674](https://github.com/openclaw/openclaw/issues/156674) [Bug]: 2026.9.5 macOS gateway resource pressure with long-lived Codex workers; stopping gateway restores system responsiveness `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬6
- [#156861](https://github.com/openclaw/openclaw/issues/156861) fix(macos): update to 2026.9.6 leaves OpenClaw completely unlaunchable on both Macs `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬6
- [#156699](https://github.com/openclaw/openclaw/issues/156699) plugins reload reports success but never swaps plugin code (ESM module cache not invalidated; restartRequired:false hardcoded) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬5
- [#156778](https://github.com/openclaw/openclaw/issues/156778) No way to force-stop a running sessions_spawn subagent (TaskStop doesn't recognize this runtime, no CLI kill/abort) `P2` `impact:other` 💬3
- [#156749](https://github.com/openclaw/openclaw/issues/156749) [Bug]: Extension relay Target.getTargets fails entirely while a non-debuggable tab (e.g. Chrome Web Store) is open `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#156424](https://github.com/openclaw/openclaw/issues/156424) [Bug]: Shared-state audit_events index corruption paralyses gateway while process/port stay live (2 incidents, 2026.9.4) `bug` `bug:crash` `impact:data-loss` `impact:message-loss` 💬3
- [#156209](https://github.com/openclaw/openclaw/issues/156209) [Bug]: memory-wiki OKF import does not preserve the required top-level `type` field, making imported pages fail OKF conformance on re-import `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#156762](https://github.com/openclaw/openclaw/issues/156762) [Bug]: 2026.9.5: update repair blocked by retained_plugin_source_conflict on macOS `bug` `bug:crash` `impact:session-state` `impact:crash-loop` 💬3
- [#156826](https://github.com/openclaw/openclaw/issues/156826) Update failure: post-update-plugins (2026.9.5) 💬2
- [#156849](https://github.com/openclaw/openclaw/issues/156849) Update failure: post-update-plugins (2026.9.5) 💬2
- [#156754](https://github.com/openclaw/openclaw/issues/156754) [Bug]: Command cron announce deliveries are not mirrored into the destination session transcript 💬2
- [#156606](https://github.com/openclaw/openclaw/issues/156606) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#156763](https://github.com/openclaw/openclaw/issues/156763) [Bug]: config patch refusals recommend --merge/--replace, which config patch does not accept `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#156803](https://github.com/openclaw/openclaw/issues/156803) [Bug]: MiMo V2.6 thinking blocks visible in UI despite reasoningDefault=off and /reasoning off `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:ux-friction` 💬2
- [#156753](https://github.com/openclaw/openclaw/issues/156753) Update failure: requested (2026.9.5) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#156765](https://github.com/openclaw/openclaw/issues/156765) [Bug]: Code Mode replaces a before_tool_call blockReason on MCP tools with "MCP namespace tool result is missing its owned guest projection" `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#156785](https://github.com/openclaw/openclaw/issues/156785) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#156269](https://github.com/openclaw/openclaw/issues/156269) [Feature]: Scoped guest model access and foreground-only work `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#156276](https://github.com/openclaw/openclaw/issues/156276) [Bug]: Control UI repeats workspace-icon 401 requests during startup (sanitized investigation handoff) `P2` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬2
- [#156264](https://github.com/openclaw/openclaw/issues/156264) [Bug]: Onboarding "Import from Hermes" on Windows aborts with EBUSY unlinking the staged openclaw-agent.sqlite and never commits config `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `P0` 💬2
- [#156230](https://github.com/openclaw/openclaw/issues/156230) [Bug]: Smaller-context model switch spends 27 minutes compacting before empty-summary failure `P2` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦐 gold shrimp` 💬2
- [#156701](https://github.com/openclaw/openclaw/issues/156701) Update failure: global-install-failed (2026.9.4) 💬2
- [#156641](https://github.com/openclaw/openclaw/issues/156641) Update failure: restart-unhealthy (2026.9.5) `clawsweeper:needs-live-repro` `P0` `issue-rating: 🐚 platinum hermit` `maturity:stable` 💬2
- [#156609](https://github.com/openclaw/openclaw/issues/156609) Update failure: doctor-failed (2026.9.5) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#156714](https://github.com/openclaw/openclaw/issues/156714) Update failure: finalize:doctor (2026.9.5) `P0` `impact:ux-release-blocker` 💬2
- [#156713](https://github.com/openclaw/openclaw/issues/156713) Update failure: runtime-verification-failed (2026.9.5) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#156705](https://github.com/openclaw/openclaw/issues/156705) [Bug]: Cron agentTurn jobs created from a chat channel fail with "user profile not found" when gateway.roles is configured `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#156888](https://github.com/openclaw/openclaw/issues/156888) Web Push re-sends "background task failed" for an already-failed subagent task on every gateway restart `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#156880](https://github.com/openclaw/openclaw/issues/156880) Update failure: managed-service-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#156883](https://github.com/openclaw/openclaw/issues/156883) [Bug]: Plugin lifecycle pass leaves stale plugin tool handles in live sessions ("was reloaded or disabled; use its current tools" every heartbeat until restart) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#156884](https://github.com/openclaw/openclaw/issues/156884) [Bug]: task_runs finalizes CLI-runtime rows with a generic terminal_summary and discards the reply/stdout, so a succeeded task cannot be verified from the ledger `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#156882](https://github.com/openclaw/openclaw/issues/156882) Update failure: global-install-foreign-destination (2026.9.6) `P0` `impact:ux-release-blocker` 💬1
- [#156878](https://github.com/openclaw/openclaw/issues/156878) [Bug]: macOS updater omits native update authority and rejects valid handoffs at activation `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#156806](https://github.com/openclaw/openclaw/issues/156806) Sessionful 'openclaw agent' command lacks ordered --fallback support (unlike 'agent exec') `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#156871](https://github.com/openclaw/openclaw/issues/156871) Configurable bounded pixel limit for inbound agent images `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#156794](https://github.com/openclaw/openclaw/issues/156794) [Feature]: Configurable colour for user message bubbles and sender avatars `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#156864](https://github.com/openclaw/openclaw/issues/156864) Per-agent tools.alsoAllow does not grant the browser plugin tool to the agent runtime `P1` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:ux-friction` 💬1
- [#156808](https://github.com/openclaw/openclaw/issues/156808) Feature request: per-provider-attempt hooks with resolved auth profile and guaranteed cleanup `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#156848](https://github.com/openclaw/openclaw/issues/156848) [Bug]: queue mode "steer" never reaches a running claude-cli turn, although the Claude Code live session supports mid-turn input `P2` `impact:ux-friction` 💬1
- [#156844](https://github.com/openclaw/openclaw/issues/156844) [Feature]: opus 5.5 `enhancement` `P2` `impact:auth-provider` 💬1
- [#156841](https://github.com/openclaw/openclaw/issues/156841) [Bug]: Android effort gauge stops reflecting Effort when Fast mode is on `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#156814](https://github.com/openclaw/openclaw/issues/156814) Restart recovery resumes after a transcript-missing reset, drops the interrupted request, and reports status=ok with no user-visible notice `P1` `clawsweeper:needs-info` `impact:session-state` `impact:message-loss` 💬1
- [#156831](https://github.com/openclaw/openclaw/issues/156831) [Bug]: Codex session catalog thread/list pages grow to 8-24 MB from long previews, fail to parse, and stall sessions.catalog.list `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#156780](https://github.com/openclaw/openclaw/issues/156780) Run full main CI hourly with an opt-in per-push rollback 💬1
- [#156818](https://github.com/openclaw/openclaw/issues/156818) [Bug]: Gateway fails to start on Linux kernels < 5.6 (Synology DSM 4.4): openat2 not implemented (ENOSYS) `bug` `regression` `impact:crash-loop` `P0` 💬1
- [#156766](https://github.com/openclaw/openclaw/issues/156766) [Bug]: Deferred context-engine maintenance is never queued before emergency assembly `P1` `impact:session-state` 💬1
- [#156751](https://github.com/openclaw/openclaw/issues/156751) [Feature]: Optional typed decision routing for specialist agents `P3` 💬1
- [#156107](https://github.com/openclaw/openclaw/issues/156107) [Feature]: Allow reviewed GitHub reports for warnings from successful updates `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#156796](https://github.com/openclaw/openclaw/issues/156796) web_search MCP tool errors on every query — backend requests a deprecated Gemini model `P2` `impact:auth-provider` 💬1
- [#156797](https://github.com/openclaw/openclaw/issues/156797) Control UI human discussion should not activate the agent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#156795](https://github.com/openclaw/openclaw/issues/156795) Control UI doesn't render MEDIA: directive video/audio attachments — shows raw text instead `P2` `impact:ux-friction` 💬1
- [#156789](https://github.com/openclaw/openclaw/issues/156789) [Bug]: macOS native chat hangs at 100% CPU while searching an inline-math transcript (2026.9.5) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#156787](https://github.com/openclaw/openclaw/issues/156787) Update failure: doctor-failed (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#156774](https://github.com/openclaw/openclaw/issues/156774) [Feature]: Admit an opt-in model + reasoning-effort choice per turn `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#156770](https://github.com/openclaw/openclaw/issues/156770) [Feature]: describe inbound video through the OpenRouter provider `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#156747](https://github.com/openclaw/openclaw/issues/156747) [Bug]: Codex Plugin Quickly Consumes Available Disk Space on Gateway Restart `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#156744](https://github.com/openclaw/openclaw/issues/156744) Update failure: activating (2026.9.5) 💬1
- [#156739](https://github.com/openclaw/openclaw/issues/156739) Update failure: finalize:targetConfigConvergence (2026.9.5) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#156738](https://github.com/openclaw/openclaw/issues/156738) Update failure: finalize:doctor (2026.9.5) 💬1
- [#156720](https://github.com/openclaw/openclaw/issues/156720) [Bug]: [2026.9.4] Codex policy handoff fails in new and existing conversations after adding second account `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#156721](https://github.com/openclaw/openclaw/issues/156721) [Bug]: --timeout-ms errors point at a --timeout flag the capability commands reject as unknown `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#156716](https://github.com/openclaw/openclaw/issues/156716) [Bug]: Gateway stalls for seconds to tens of seconds when a host has more than 64 agents: fixed agent DB handle cap plus synchronous integrity check on reopen `bug` `bug:crash` `P1` `impact:crash-loop` 💬1
- [#156710](https://github.com/openclaw/openclaw/issues/156710) [Bug]: Native exec fails when AsyncLocalStorage.bind receives an object instead of a callback `bug` `regression` `P1` `clawsweeper:needs-live-repro` 💬1
- [#156711](https://github.com/openclaw/openclaw/issues/156711) Update failure: finalize:doctor (2026.9.5) `impact:session-state` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#156697](https://github.com/openclaw/openclaw/issues/156697) feat: filter Session Share publication by person involvement `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#156694](https://github.com/openclaw/openclaw/issues/156694) agents.defaults.timeoutSeconds is overloaded across 3 unrelated timeout subsystems (CLI wait, run-abort, model-idle) with 3 different defaults `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#156678](https://github.com/openclaw/openclaw/issues/156678) [Feature]: Expose Google Gemini safetySettings via provider config `P2` `impact:auth-provider` 💬1
- [#156893](https://github.com/openclaw/openclaw/issues/156893) [Bug]: git update exits 79 as already-current when dist was built from another commit

#### 🔒 Closed Issues
- [#146394](https://github.com/openclaw/openclaw/issues/146394) Update failure: global-install-failed (2026.9.3)
- [#156699](https://github.com/openclaw/openclaw/issues/156699) plugins reload reports success but never swaps plugin code (ESM module cache not invalidated; restartRequired:false hardcoded)
- [#122105](https://github.com/openclaw/openclaw/issues/122105) Gateway restarts repeat full SQLite integrity snapshots after five minutes, causing GB-scale SSD writes
- [#145184](https://github.com/openclaw/openclaw/issues/145184) Gateway blocks its event loop 70-82 s after ready hydrating every agent's sessions, and 13-17 s every ~5 min in the session-list prewarm, on a 632-agent fleet (2026.9.3 and 2026.9.4, not the #142476 reaper)
- [#145244](https://github.com/openclaw/openclaw/issues/145244) Update failure: doctor-failed (2026.9.3)
- [#146331](https://github.com/openclaw/openclaw/issues/146331) [Bug]: Replay normalization leaves a stale turn boundary and drops current input/tool results
- [#147512](https://github.com/openclaw/openclaw/issues/147512) [Bug]: Control UI theme flashes config default then restores profile appearance on refresh
- [#156762](https://github.com/openclaw/openclaw/issues/156762) [Bug]: 2026.9.5: update repair blocked by retained_plugin_source_conflict on macOS
- [#146956](https://github.com/openclaw/openclaw/issues/146956) Packaged launcher kills the Gateway child about 2 seconds into shutdown, before its drain budget finishes
- [#146921](https://github.com/openclaw/openclaw/issues/146921) Gateway session ID resolution projects unrelated sessions before exact matching
- [#156606](https://github.com/openclaw/openclaw/issues/156606) Update failure: plugin-target-unavailable (2026.9.4)
- [#145777](https://github.com/openclaw/openclaw/issues/145777) Webchat: noticeable input lag when typing in the chat composer
- [#155975](https://github.com/openclaw/openclaw/issues/155975) [Bug]: Recover transient chat state-lifecycle contention safely and show actionable errors
- [#113530](https://github.com/openclaw/openclaw/issues/113530) [Bug]: Codex final is persisted but automatic reply queue is empty after successful source attachment sends
- [#55888](https://github.com/openclaw/openclaw/issues/55888) [Feature]: 🚀 [Performance Insight] Unlocking 26.7k Context Window on M4 Pro: Fixing the 8k Compaction Lag (64GB RAM Only)
- [#156714](https://github.com/openclaw/openclaw/issues/156714) Update failure: finalize:doctor (2026.9.5)
- [#156713](https://github.com/openclaw/openclaw/issues/156713) Update failure: runtime-verification-failed (2026.9.5)
- [#156882](https://github.com/openclaw/openclaw/issues/156882) Update failure: global-install-foreign-destination (2026.9.6)
- [#131910](https://github.com/openclaw/openclaw/issues/131910) fix(document-extraction): propagate truncation metadata
- [#156848](https://github.com/openclaw/openclaw/issues/156848) [Bug]: queue mode "steer" never reaches a running claude-cli turn, although the Claude Code live session supports mid-turn input
- [#156844](https://github.com/openclaw/openclaw/issues/156844) [Feature]: opus 5.5
- [#156780](https://github.com/openclaw/openclaw/issues/156780) Run full main CI hourly with an opt-in per-push rollback
- [#156818](https://github.com/openclaw/openclaw/issues/156818) [Bug]: Gateway fails to start on Linux kernels < 5.6 (Synology DSM 4.4): openat2 not implemented (ENOSYS)
- [#147157](https://github.com/openclaw/openclaw/issues/147157) memory-core dreaming-narrative hangs 994s per run and starves turn-slot budget across all agents
- [#156751](https://github.com/openclaw/openclaw/issues/156751) [Feature]: Optional typed decision routing for specialist agents
- [#156107](https://github.com/openclaw/openclaw/issues/156107) [Feature]: Allow reviewed GitHub reports for warnings from successful updates
- [#156796](https://github.com/openclaw/openclaw/issues/156796) web_search MCP tool errors on every query — backend requests a deprecated Gemini model
- [#156795](https://github.com/openclaw/openclaw/issues/156795) Control UI doesn't render MEDIA: directive video/audio attachments — shows raw text instead
- [#156787](https://github.com/openclaw/openclaw/issues/156787) Update failure: doctor-failed (2026.9.4)
- [#155473](https://github.com/openclaw/openclaw/issues/155473) [Bug]: Android composer effort gauge does not follow slider preview
- [#156744](https://github.com/openclaw/openclaw/issues/156744) Update failure: activating (2026.9.5)
- [#156739](https://github.com/openclaw/openclaw/issues/156739) Update failure: finalize:targetConfigConvergence (2026.9.5)
- [#156738](https://github.com/openclaw/openclaw/issues/156738) Update failure: finalize:doctor (2026.9.5)
- [#149551](https://github.com/openclaw/openclaw/issues/149551) [Bug]: ${VAR:-default} substitution silently passes through unresolved instead of erroring/warning
- [#156716](https://github.com/openclaw/openclaw/issues/156716) [Bug]: Gateway stalls for seconds to tens of seconds when a host has more than 64 agents: fixed agent DB handle cap plus synchronous integrity check on reopen

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 248,411 · **Open issues:** 44,007 · **Last push:** <1h ago

On September 24, 2026, there were no new releases for Hermes Agent, but several important features and fixes were merged into the codebase. Notably, the plugin catalog received enhancements with features such as the addition of the "hermes-workbench" community plugin and the update of the "bot-forge" to version 0.5.0. A significant fix was implemented for the TamaHermes session-end events, improving session persistence. Among new issues, the critical problem of real-world data loss due to proactive pruning and compression was raised, prompting immediate attention for a fleet incident. Overall, while it was a day without new releases, the merged changes reflect ongoing improvements and address pressing issues within the ecosystem.

#### ✅ Merged PRs
- [#120738](https://github.com/NousResearch/hermes-agent/pull/120738) fix(plugin-catalog): persist TamaHermes session-end events
- [#120697](https://github.com/NousResearch/hermes-agent/pull/120697) feat(catalog): list AgentPlaybooks portable agents
- [#120673](https://github.com/NousResearch/hermes-agent/pull/120673) chore(catalog): add AgentPlaybooks memory artwork and current README
- [#120654](https://github.com/NousResearch/hermes-agent/pull/120654) feat(plugin-catalog): bump provider-status to 1.5.8
- [#120617](https://github.com/NousResearch/hermes-agent/pull/120617) feat(catalog): add hermes-workbench community plugin
- [#120611](https://github.com/NousResearch/hermes-agent/pull/120611) feat(plugin-catalog): bump bot-forge to v0.5.0
- [#120555](https://github.com/NousResearch/hermes-agent/pull/120555) catalog: pin Orbit Desktop 0.2.6 — customizable themes and XP chrome
- [#120721](https://github.com/NousResearch/hermes-agent/pull/120721) Add storm-fusion-research to plugin catalog
- [#120553](https://github.com/NousResearch/hermes-agent/pull/120553) Add deepseek-whale to plugin catalog
- [#120825](https://github.com/NousResearch/hermes-agent/pull/120825) feat(webhook): replies to a webhook delivery can see what was delivered (opt-in mirror_to_session, salvage #106067)
- [#120326](https://github.com/NousResearch/hermes-agent/pull/120326) test: E2E suites for profile isolation, key routing, terminal transcripts, hermes update and live providers (core E2E wave 2)

#### 🐛 New Issues
- [#120582](https://github.com/NousResearch/hermes-agent/issues/120582) Real-world data loss from proactive prune + compression passes: tool results stubbed and args truncated mid-session (fleet incident, repro + state.db evidence) `type/bug` `comp/agent` `area/config` `P1` 💬4
- [#120691](https://github.com/NousResearch/hermes-agent/issues/120691) Local runtime: two managers from one app launch, each autoloading its own copy of the same model (2x26 GB), reported as "The local model server isn't running" `type/bug` `comp/cli` `P2` `comp/desktop` 💬2
- [#120828](https://github.com/NousResearch/hermes-agent/issues/120828) [Bug] Custom Ollama provider sends tool-only payload with no user message `type/bug` `comp/agent` `provider/ollama` `P2` 💬2
- [#120599](https://github.com/NousResearch/hermes-agent/issues/120599) [Support]: hermes CLI fails to open after update — Arch Linux (CachyOS), fish shell `type/bug` `comp/cli` `P2` `needs-repro` 💬1
- [#120334](https://github.com/NousResearch/hermes-agent/issues/120334) [Bug]: queued background-process heartbeat can run after the process exits `type/bug` `comp/gateway` `tool/terminal` `P2` 💬1
- [#120063](https://github.com/NousResearch/hermes-agent/issues/120063) session_search (discovery): queries whose hits are all excluded return a bare empty result with no hint — the no-hits case prints guidance, this case prints nothing `type/bug` `comp/agent` `tool/memory` `P2` 💬1
- [#120839](https://github.com/NousResearch/hermes-agent/issues/120839) [Bug]: Ctrl+G editor submit dispatches /compress mid-turn (classic CLI) `type/bug` `comp/cli` `P2` `sweeper:risk-session-state`
- [#120841](https://github.com/NousResearch/hermes-agent/issues/120841) [Bug]: approving a staged memory remove deletes a newer entry the approver never saw, silently `type/bug` `comp/agent` `tool/memory` `P1`
- [#120844](https://github.com/NousResearch/hermes-agent/issues/120844) [Bug]: Anthropic model discovery ignores ANTHROPIC_BASE_URL — picker serves the static catalog, and a declined probe is cached as live
- [#120826](https://github.com/NousResearch/hermes-agent/issues/120826) [Bug]: after an empty-response give-up or Stop, an already-executed tool call vanishes from the model's context and gets re-run `type/bug` `comp/agent` `P1` `sweeper:risk-session-state`
- [#120831](https://github.com/NousResearch/hermes-agent/issues/120831) [Bug]: TypeError: _find_all_skills() got an unexpected keyword argument 'include_editorial' in GET /v1/skills `type/bug` `duplicate` `comp/gateway` `tool/skills`
- [#120832](https://github.com/NousResearch/hermes-agent/issues/120832) delegation.orchestrator_enabled: 0 silently enables the kill switch `type/bug` `comp/tools` `tool/delegate` `area/config`
- [#120833](https://github.com/NousResearch/hermes-agent/issues/120833) [Bug]: ACP: picking a Local (managed llama.cpp) model sends it through `custom` and fails with 401 Invalid API Key `type/bug` `comp/cli` `comp/acp` `area/config`
- [#120823](https://github.com/NousResearch/hermes-agent/issues/120823) [Bug]: profile update deletes the user's own cron jobs, and profile install leaves shipped jobs running `type/bug` `comp/cli` `comp/cron` `P1`
- [#120810](https://github.com/NousResearch/hermes-agent/issues/120810) Desktop: a Bot Chat compression leaves two tabs captioned with the bot name; the lineage dedup guard from 202997b51d never sees a hidden lineage `type/bug` `P2` `sweeper:risk-session-state` `comp/desktop`
- [#120811](https://github.com/NousResearch/hermes-agent/issues/120811) [Bug]: a cp1252/latin-1 .env is silently corrupted (U+FFFD) by Hermes's own .env rewriters `type/bug` `comp/cli` `area/config` `P2`
- [#120813](https://github.com/NousResearch/hermes-agent/issues/120813) [Bug]: first update of a config.yaml without _config_version runs the whole migration ladder and rewrites user values `type/bug` `comp/cli` `area/config` `P1`
- [#120815](https://github.com/NousResearch/hermes-agent/issues/120815) [Bug]: a stale credential pool writes a spent OAuth refresh token over a newer rotation and the login is lost `type/bug` `comp/agent` `area/auth` `P1`
- [#119716](https://github.com/NousResearch/hermes-agent/issues/119716) Desktop: Codex interim commentary reappears inside Thinking after tool-call hydration `type/bug` `provider/openai` `P2` `comp/desktop`
- [#120786](https://github.com/NousResearch/hermes-agent/issues/120786) [Bug]: Group-chat reply read as silence when preflight compression shrinks the member session below the count baseline `type/bug` `comp/plugins` `P2` `sweeper:risk-session-state`
- [#120776](https://github.com/NousResearch/hermes-agent/issues/120776) fix(cli): emoji becomes ?? when submitting a message on Windows `type/bug` `comp/agent` `comp/cli` `P2`
- [#120757](https://github.com/NousResearch/hermes-agent/issues/120757) get_pricing_for_provider never resolves `custom:*` slugs → config-defined provider rows show no prices in picker `type/bug` `comp/cli` `area/config` `P2`
- [#120741](https://github.com/NousResearch/hermes-agent/issues/120741) [Bug]: A terminal Codex refresh on one pooled login quarantines an independent login `type/bug` `comp/agent` `provider/openai` `area/auth`
- [#120742](https://github.com/NousResearch/hermes-agent/issues/120742) A turn result carrying only 'error' reports success on the exit-code, runs-API, cron and TUI surfaces `type/bug` `comp/cli` `comp/gateway` `comp/tui`

#### 🔒 Closed Issues
- [#112274](https://github.com/NousResearch/hermes-agent/issues/112274) Webhook sessions are context-siloed — DM session can't reference the message that just arrived
- [#96177](https://github.com/NousResearch/hermes-agent/issues/96177) Windows cold-start: WS probe timeout (10s) vs 12-28s backend import + i18n locale fetch has no retry
- [#102910](https://github.com/NousResearch/hermes-agent/issues/102910) [Bug] Windows fr-FR: strftime("%Z") raises UnicodeEncodeError: surrogates not allowed and crashes the desktop gateway at every conversation start
- [#74582](https://github.com/NousResearch/hermes-agent/issues/74582) [Bug]: ACP _make_agent drops config agent.disabled_toolsets — tools can't be disabled for ACP/Buzz agents
- [#69162](https://github.com/NousResearch/hermes-agent/issues/69162) [Feature]: Add/Edit models on the Desktop GUI agent
- [#117487](https://github.com/NousResearch/hermes-agent/issues/117487) [HOLD] [Bug]: Hindsight auto-recall and auto-retain run on synthetic runtime turns, not just user input
- [#83851](https://github.com/NousResearch/hermes-agent/issues/83851) ## 🐛 Bug: Desktop `[gateway-crash]` — GBK encoding kills gateway on Chinese Windows
- [#53367](https://github.com/NousResearch/hermes-agent/issues/53367) fix: garbled Chinese text in Desktop projects list
- [#89980](https://github.com/NousResearch/hermes-agent/issues/89980) Desktop Appearance→Language selector missing fr/de/es despite backend i18n support
- [#75282](https://github.com/NousResearch/hermes-agent/issues/75282) [Feature] French (fr) locale missing from Desktop app (Electron) - only 5 languages supported
- [#100280](https://github.com/NousResearch/hermes-agent/issues/100280) [Bug][Desktop] Mixed Arabic/English text rendering is severely broken due to first-strong heuristic in unicode-bidi
- [#118742](https://github.com/NousResearch/hermes-agent/issues/118742) [Bug]: Desktop-only host (no gateway services) — inventory-less fleet_restart_pending marker never discharges; every later hermes update exits 1
- [#117801](https://github.com/NousResearch/hermes-agent/issues/117801) Desktop: hardcoded English stop-word list and non-configurable barge-in trigger break spoken stop / interrupt with non-English STT (RU)
- [#86602](https://github.com/NousResearch/hermes-agent/issues/86602) [Bug]: Desktop read-aloud speaks hardcoded English placeholders ("code block omitted", "link") and silently drops tables
- [#78314](https://github.com/NousResearch/hermes-agent/issues/78314) [Feature]: custom model
- [#83868](https://github.com/NousResearch/hermes-agent/issues/83868) [Bug][Desktop] Arabic/English mixed text renders incorrectly in Hermes Desktop (macOS) when English starts the message
- [#119716](https://github.com/NousResearch/hermes-agent/issues/119716) Desktop: Codex interim commentary reappears inside Thinking after tool-call hydration
- [#93912](https://github.com/NousResearch/hermes-agent/issues/93912) Desktop (macOS): packaged builds lose empty .lproj markers → Intl locale always en-US (AM/PM for all non-en users)
- [#79516](https://github.com/NousResearch/hermes-agent/issues/79516) ACP sessions ignore platform_toolsets.acp / agent.disabled_toolsets — terminal/execute_code always enabled regardless of profile config

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 92,549 · **Open issues:** 8,438 · **Last push:** <1h ago

On September 24, 2026, there were no new releases for vLLM, but several important pull requests were merged. Key updates include bug fixes for the EngineCore's input socket and alignment issues with the dummy idx_mapping dtype, which help prevent runtime errors. Additionally, the CI enhancements included skipping the Proton GPU test under certain conditions and improving the registration of JIT warmup, particularly for ROCm. A notable emerging issue is the request for increased review capacity within the vLLM team, which highlights the growing complexity and implementation demands of the project.

#### ✅ Merged PRs
- [#58215](https://github.com/vllm-project/vllm/pull/58215) [Bugfix][DSA] Bound DeepSelect sentinel columns in the sparse top-k remap
- [#58469](https://github.com/vllm-project/vllm/pull/58469) [CI] Share BF16 baselines across quantization comparison tests
- [#58455](https://github.com/vllm-project/vllm/pull/58455) [5/12][ci-selector][CI] Skip the Proton GPU test when another CUPTI tool is injected
- [#58462](https://github.com/vllm-project/vllm/pull/58462) [Bugfix][MRV2] Align dummy idx_mapping dtype to avoid runtime jit
- [#58452](https://github.com/vllm-project/vllm/pull/58452) [CI] Disable JIT warmup by default in VllmRunner
- [#58465](https://github.com/vllm-project/vllm/pull/58465) [CI][Bugfix] Limit MRV2 sampler JIT warmup registration to ROCm
- [#58419](https://github.com/vllm-project/vllm/pull/58419) [ROCm][Bugfix] Fix TileLang mHC fused RMSNorm on 64-wide wavefronts
- [#58093](https://github.com/vllm-project/vllm/pull/58093) [ROCm][Test] Cover MoRI graph replay and output lifetime
- [#55936](https://github.com/vllm-project/vllm/pull/55936) [Docs] Fix docstring typos (output_dytpe, kwrags, Abbrivations)
- [#49845](https://github.com/vllm-project/vllm/pull/49845) [Bugfix] Pick a KV block size supported by every attention backend
- [#58351](https://github.com/vllm-project/vllm/pull/58351) [CI] Select one GPU for the H200 initialized snapshot E2E step
- [#52988](https://github.com/vllm-project/vllm/pull/52988) [Spec decode] Support variable-length decode for Kimi-K3 adaptive ver
- [#57586](https://github.com/vllm-project/vllm/pull/57586) [Perf] Use breakable CUDA graphs (no torch.compile) by default under VLLM_BATCH_INVARIANT so the tuned matmul configs see the runtime M
- [#46466](https://github.com/vllm-project/vllm/pull/46466) Doc: add DiffusionGemma to supported models
- [#58091](https://github.com/vllm-project/vllm/pull/58091) [ROCm][Test] Check GDN prefill numerics and output ownership
- [#51800](https://github.com/vllm-project/vllm/pull/51800) [Quark] Remove quark-specific silent online quantization
- [#57923](https://github.com/vllm-project/vllm/pull/57923) [Bugfix][ROCm] Fix startup OOM in AITER MLA FP8 prefill workspace sizing
- [#58188](https://github.com/vllm-project/vllm/pull/58188) [Bugfix][NIXL] Restore successful push completion reporting
- [#58012](https://github.com/vllm-project/vllm/pull/58012) [CI][ROCm] Add an MI355 Kimi-K3 unit test group
- [#58095](https://github.com/vllm-project/vllm/pull/58095) [ROCm][CI] Validate Mooncake and NIXL prefill/decode accuracy
- [#50212](https://github.com/vllm-project/vllm/pull/50212) [ROCm][Perf] Extend QK-norm/RoPE/KV-cache fusion to MRoPE
- [#58054](https://github.com/vllm-project/vllm/pull/58054) [Quantization][Bugfix] Bump humming-kernels to 0.1.16
- [#57980](https://github.com/vllm-project/vllm/pull/57980) [MRV2] Miscellaneous code cleanup
- [#46528](https://github.com/vllm-project/vllm/pull/46528) [Quantization] Enable humming wNaM asymmetric quant (zero_point) with compressed-tensors
- [#56252](https://github.com/vllm-project/vllm/pull/56252) [CPU] Adds support for fp32 attention sinks
- [#58051](https://github.com/vllm-project/vllm/pull/58051) [Perf][MoE] Skip top-k slots routed to non-local experts in TritonExp…
- [#44229](https://github.com/vllm-project/vllm/pull/44229) [Feature][Frontend] Add DeepSeek-V4 FIM completion rendering

#### 🐛 New Issues
- [#58253](https://github.com/vllm-project/vllm/issues/58253) [RFC]: Increase vLLM Review Capacity with a Reviewer Role `RFC`
- [#58329](https://github.com/vllm-project/vllm/issues/58329) [RFC]: KVPP (KV pipeline parallel, LayerSplit) for vLLM `rocm` `RFC` 💬3
- [#58445](https://github.com/vllm-project/vllm/issues/58445) [Bug]: EngineCore input socket thread dies on an undecodable request and the core stays alive but stops accepting requests 💬2
- [#58406](https://github.com/vllm-project/vllm/issues/58406) [Bug]: Inconsistent merge/resolution semantics for flat and scoped `mm_processor_kwargs` `bug` 💬2
- [#58390](https://github.com/vllm-project/vllm/issues/58390) [Bug]: thinking_token_budget: generation collapses into a repetition loop exactly at budget exhaustion `tool-calling` 💬2
- [#58409](https://github.com/vllm-project/vllm/issues/58409) [ROCm][Perf][Tracking Issue]: GLM-5.3-Flash `feature request` `rocm` `glm` 💬2
- [#58394](https://github.com/vllm-project/vllm/issues/58394) [Bug]: Promoted partial prefix-cache entries reference a parent hash removed in the same batch 💬2
- [#58270](https://github.com/vllm-project/vllm/issues/58270) [Installation]: v0.30.0 CPU wheels now require manylinux_2_39 (glibc 2.39), breaking installation on Ubuntu 22.04/Rhel9 `installation` 💬2
- [#58267](https://github.com/vllm-project/vllm/issues/58267) [Bug]: CPU W4A16 Whisper fails: cpu_gemm_wna16 rejects 3-D encoder activations; packed k_proj bias is synthesized incorrectly `bug` `quantization` 💬2
- [#58441](https://github.com/vllm-project/vllm/issues/58441) [Bug]: Qwen4Exp PinnedHost PLE prefetch reads n-gram ids from graph-pool memory that later segments reuse 💬1
- [#58422](https://github.com/vllm-project/vllm/issues/58422) [Bug]: TP=1 silent engine wedge on Qwen3.8 GDN-hybrid MoE (MTP4, NVFP4-KV, FlashInfer, SM120) — frozen generation counter, running>0 waiting=0, health 200, no self-recovery on v0.27.2rc1.dev77 `quantization` 💬1
- [#58388](https://github.com/vllm-project/vllm/issues/58388) [Bug][XPU][MRV2]: engine dies when the first request after startup is a large prefill (eager all-reduce after XPU graph capture leaves the stream "Recording") `intel-gpu` `quantization` `kv-cache-manager` 💬1
- [#58391](https://github.com/vllm-project/vllm/issues/58391) [Bug]: DeepSeek-V4.1-Flash teacher-forced logprob shift on tool/structured text between nightlies dc36fcce and cd10ed6f (SM103, fp8_ds_mla) `tool-calling` `deepseek` `DSv4.1` 💬1
- [#58324](https://github.com/vllm-project/vllm/issues/58324) [Bug]: [Performance]: Realtime (streaming-input) sessions get ~3 ms slower per step for every minute of audio — O(n) scheduler work in strip_covered_mm_data `bug` `scheduler` 💬1
- [#58353](https://github.com/vllm-project/vllm/issues/58353) [Bug]: Qwen2-VL video sampling divides by zero after rounding a one-frame clip to zero frames `bug` 💬1
- [#58315](https://github.com/vllm-project/vllm/issues/58315) [Bug]: GLM required tool-call grammar accepts split marker tokens that the streaming parser treats as content `structured-output` `tool-calling` `glm` 💬1
- [#58280](https://github.com/vllm-project/vllm/issues/58280) [Bug]: DeepSeek-V4 chat template puts `tools` into a synthetic leading system message instead of on the existing system message (diverges from the reference encoder) `bug` `tool-calling` `deepseek` `DSv4` 💬1
- [#58233](https://github.com/vllm-project/vllm/issues/58233) [Performance]: 【求助】8卡H200跑DeepSeek-V4.1-Flash，并发才8就慢成狗，首字等好几分钟，有没有大佬遇到过？ `performance` `deepseek` `DSv4.1` 💬1
- [#58241](https://github.com/vllm-project/vllm/issues/58241) [Bug]: cutlass_scaled_mm_supports_block_fp8 excludes SM89 (Ada Lovelace) despite native FP8 tensor core support `bug` `quantization` 💬1
- [#58236](https://github.com/vllm-project/vllm/issues/58236) [Bug]: An error preventing the compilation of certain code about CUDA kernels soccurred with FlashInfer version 0.6.18, which was automatically installed alongside the precompiled vLLM version 0.29.0 `bug` 💬1
- [#58485](https://github.com/vllm-project/vllm/issues/58485) [Bug]: V1 thinking budget corrupts a multi-token reasoning_end_str under speculative decoding `speculative-decoding` `tool-calling`
- [#58479](https://github.com/vllm-project/vllm/issues/58479) [Bug]: Elastic EP scale up crashes with EAGLE3 when CUDA graphs are on
- [#58470](https://github.com/vllm-project/vllm/issues/58470) [Bug]: NIXL P/D mis-transfers a GQA draft's KV (e.g. DFlash) under an MLA target with prefill TP < decode TP `kv-connector`
- [#58423](https://github.com/vllm-project/vllm/issues/58423) [Feature]: instruction-preserving truncation for `/v1/chat/completions`, and document `truncate_prompt_tokens` semantics `feature request`
- [#58421](https://github.com/vllm-project/vllm/issues/58421) [Bug]: Responses API `truncation: "auto"` truncates at the token level from the left, dropping `instructions` first and cutting mid-item `bug`
- [#58384](https://github.com/vllm-project/vllm/issues/58384) [Bug]: Responses API Harmony output parser raises `ValueError: Unknown channel: comment` at response assembly and closes the /v1/responses SSE stream before `response.completed` `tool-calling` `gpt-oss`
- [#58365](https://github.com/vllm-project/vllm/issues/58365) [Bug] `ep_gather` output store overflows int32 with DeepEP v2 expanded layout (IMA in `_fwd_kernel_ep_gather`)
- [#58363](https://github.com/vllm-project/vllm/issues/58363) [Installation]: CPU source build fails on GCC < 15: sgl-kernels use AVX10.2 unconditionally `installation`
- [#58362](https://github.com/vllm-project/vllm/issues/58362) [Bug]: Mooncake connector misreads min()-collapsed cache_config.block_size as physical block size; hybrid models with mixed KV group sizes break PD transfer
- [#58313](https://github.com/vllm-project/vllm/issues/58313) [Feature]: Request observer hook for the Rust frontend `feature request` `rust`
- [#58303](https://github.com/vllm-project/vllm/issues/58303) [Bug/Perf]: the dense default chosen for Mamba + EAGLE reverts to 0% prefix reuse under interleaved long conversations `speculative-decoding`
- [#58290](https://github.com/vllm-project/vllm/issues/58290) [Bug]: Multi-node TP=8 (2 nodes x 4 H200) hangs in ncclCommInitRank during startup — even local_rank ranks complete Init COMPLETE, odd ranks block in graph-connect phase `bug`
- [#58273](https://github.com/vllm-project/vllm/issues/58273) [Bug]: Whisper LLM.generate has no HF generate_with_fallback (loops / empty EOT) `quantization`
- [#58266](https://github.com/vllm-project/vllm/issues/58266) [Performance]: multimodal preprocessing is single-threaded per API server; a wider thread pool does not help (GIL) — process pool for _mm_executor? `multi-modality`
- [#58263](https://github.com/vllm-project/vllm/issues/58263) [Feature]: Bind batch-invariant mode into KV-offload namespaces and KV-connector compatibility checks
- [#58246](https://github.com/vllm-project/vllm/issues/58246) [Bug]: An Anthropic messages test is not compatible with Anthropic SDK 1.x `bug`
- [#58240](https://github.com/vllm-project/vllm/issues/58240) [Feature] [KV Offload] Support sharing SimpleCPUOffload prefix caches across local DP replicas `feature request` `kv-cache-manager`
- [#58242](https://github.com/vllm-project/vllm/issues/58242) [Feature]: Improve engine RPC failure handling and shutdown `feature request`

#### 🔒 Closed Issues
- [#53119](https://github.com/vllm-project/vllm/issues/53119) [Bug]: Multi card issue and multi token prediction (mtp) issue with Intel/Qwen3.6-35B-A3B-int4-mixed-AutoRound
- [#39871](https://github.com/vllm-project/vllm/issues/39871) [RFC]: Replace Hardcoded Device Strings with current_platform and Implement Linting
- [#42338](https://github.com/vllm-project/vllm/issues/42338) [BUG] cu129 Nightly Installation Resolves to CUDA 13 Wheel
- [#42769](https://github.com/vllm-project/vllm/issues/42769) [Bug]: DeepSeek V4 load_weights UnboundLocalError: 'name_mapped' when expert mapping has no match
- [#58060](https://github.com/vllm-project/vllm/issues/58060) [Performance][ROCm]: Narrower KV tiles speed up Triton embedding/reranking attention on RDNA3/RDNA4
- [#57981](https://github.com/vllm-project/vllm/issues/57981) [Bug]: Humming linear backend breaks torch.compile — json.loads in humming_forward causes Dynamo graph break (W8A16-FP8 unusable)
- [#52631](https://github.com/vllm-project/vllm/issues/52631) [Performance][ROCm] shared_expert_gate ([1, K] weight) misses every skinny-GEMM path and costs 13.7% of the decode step
- [#38071](https://github.com/vllm-project/vllm/issues/38071) [Feature]: fused RMSNorm + fp8 block quantized kernel in Helion
- [#48286](https://github.com/vllm-project/vllm/issues/48286) DeepseekV32IndexerBackend requires --block-size 64 — not documented or auto-detected
- [#44228](https://github.com/vllm-project/vllm/issues/44228) [Feature]: Support DeepSeek-V4 FIM completion suffix rendering
- [#58280](https://github.com/vllm-project/vllm/issues/58280) [Bug]: DeepSeek-V4 chat template puts `tools` into a synthetic leading system message instead of on the existing system message (diverges from the reference encoder)
- [#56396](https://github.com/vllm-project/vllm/issues/56396) [Bug]: DeepSeek-V4.1-Flash: SimpleCPUOffloadConnector crashes with `assert block_size % hash_block_size == 0` (block_size=8, hash_block_size=32)

### SGLang (`sgl-project/sglang`)

**Stars:** 36,381 · **Open issues:** 5,372 · **Last push:** <1h ago

On September 24, 2026, there were no new releases for SGLang. Noteworthy developments included the merger of PR #40445, which fuses FIA KV-cache K/V writes into a single call, and PR #40921 addressing a bug in the trtllm_mha for H200 that caused incorrect completions in version v0.5.20. Additionally, the community is seeing active discussions around a new SGLang renderer as reflected in RFC #40920, which has sparked interest and three comments. Bug reports like #40926 highlighted critical issues with HiCache in hybrid mode, underscoring ongoing challenges in performance and stability.

#### ✅ Merged PRs
- [#40445](https://github.com/sgl-project/sglang/pull/40445) [NPU] Fuse FIA KV-cache K/V writes into one npu_scatter_pa_kv_cache call
- [#40989](https://github.com/sgl-project/sglang/pull/40989) [Fix] Recover from stale torch extension locks in every `cpp_extension` loader
- [#36549](https://github.com/sgl-project/sglang/pull/36549) MiniMax-M3: allocate the lightning-indexer K cache in fp8 on gfx95
- [#40969](https://github.com/sgl-project/sglang/pull/40969) [Doc] Add H200 recipes to MiMo-V2.6 cookbook
- [#40242](https://github.com/sgl-project/sglang/pull/40242) Resolve HF LoRA targets through model-aware normalization
- [#37284](https://github.com/sgl-project/sglang/pull/37284) [RL] Release the weight-checker snapshot once compare passes
- [#40649](https://github.com/sgl-project/sglang/pull/40649) fix(nccl): disable graph buffer registration when DP attention replays decode graphs
- [#40794](https://github.com/sgl-project/sglang/pull/40794) [Spec] Support DFLASH for Kimi K3
- [#40819](https://github.com/sgl-project/sglang/pull/40819) ci: reinstall torch/triton left incomplete by a cancelled job
- [#40976](https://github.com/sgl-project/sglang/pull/40976) [Test] Remove obsolete configuration migration guards
- [#40779](https://github.com/sgl-project/sglang/pull/40779) [RL] Keep pause_generation and weight updates from deadlocking each other
- [#40638](https://github.com/sgl-project/sglang/pull/40638) [Refactor] Read parallel placement in consumers
- [#36560](https://github.com/sgl-project/sglang/pull/36560) MiniMax-M3: wave64 histogram-select decode top-k, and raise kMaxNumBlocks for CUDA graphs
- [#36546](https://github.com/sgl-project/sglang/pull/36546) MiniMax-M3: run the sparse prefill main attention through AITER Gluon paged attention
- [#40798](https://github.com/sgl-project/sglang/pull/40798) [mem_cache] Free the rows below the SWA evict floor on all-SWA request release
- [#40971](https://github.com/sgl-project/sglang/pull/40971) [Refactor] Trim server configuration and runtime context comments
- [#40871](https://github.com/sgl-project/sglang/pull/40871) [Refactor] Move eleven more MoE models to LayerCommunicator.ffn_exit
- [#40870](https://github.com/sgl-project/sglang/pull/40870) [Refactor] Let LayerCommunicator own the FFN exit in Qwen3-MoE, DeepSeek-V2 and GLM4-MoE
- [#40869](https://github.com/sgl-project/sglang/pull/40869) [Refactor] Compare token layouts instead of group sizes when selecting communicator paths
- [#40868](https://github.com/sgl-project/sglang/pull/40868) [Fix] Stop deferring the last layer's FFN all-reduce in five models
- [#40867](https://github.com/sgl-project/sglang/pull/40867) [Refactor] Run Nemotron-H DP attention through the standard layer communicator
- [#40801](https://github.com/sgl-project/sglang/pull/40801) [Fix] Capture complete Nemotron auxiliary hidden states
- [#40800](https://github.com/sgl-project/sglang/pull/40800) [Fix] Reduce Nemotron MTP attention outputs once
- [#40799](https://github.com/sgl-project/sglang/pull/40799) [Fix] Avoid duplicate residual in LongCat MoE shortcut
- [#40807](https://github.com/sgl-project/sglang/pull/40807) [mem_cache] Remove unreachable RadixCache paths in KV canary and HiCache accessors
- [#40767](https://github.com/sgl-project/sglang/pull/40767) [JIT] Add an occupancy-preserving L1 carveout preference
- [#40802](https://github.com/sgl-project/sglang/pull/40802) [Metrics] Log forward and forward+idle occupancy over total wall time
- [#40851](https://github.com/sgl-project/sglang/pull/40851) [Fix] Give the full prefill CUDA graph replay view the captured bucket's input_ids
- [#40683](https://github.com/sgl-project/sglang/pull/40683) Allow attention layers to opt out of the prefill wrapper
- [#40700](https://github.com/sgl-project/sglang/pull/40700) [RL] Fix Kimi K3 expert-count lookup for routed-expert capture
- [#38891](https://github.com/sgl-project/sglang/pull/38891) feat: add kv hint envelope to request transport
- [#40895](https://github.com/sgl-project/sglang/pull/40895) Revert " [NPU] Enable piecewise CUDA graph support on NPU"
- [#40924](https://github.com/sgl-project/sglang/pull/40924) [Diffusion] Remove unused standalone benchmarks and deduplicate kernel tests
- [#40374](https://github.com/sgl-project/sglang/pull/40374) [Diffusion] Fuse lossless SenseNova RoPE for 5% faster H200 inference
- [#40844](https://github.com/sgl-project/sglang/pull/40844) [AMD] Add diffusion (Wan2.2) extras to gfx1151 Docker image
- [#40494](https://github.com/sgl-project/sglang/pull/40494) [Diffusion] Fuse Joy Image Edit QKV concatenation and avoid QK copies
- [#40386](https://github.com/sgl-project/sglang/pull/40386) [Diffusion] Accelerate Cosmos3 Edge on Hopper with lossless fusions
- [#40378](https://github.com/sgl-project/sglang/pull/40378) [Diffusion] Fuse rounded SwiGLU for quantized MiniMax-H3 MLPs
- [#40438](https://github.com/sgl-project/sglang/pull/40438) [NPU] Skip fused gmm1+swiglu for swiglu_limit (SiLU-with-clamp) checkpoints
- [#28417](https://github.com/sgl-project/sglang/pull/28417) [NPU] Enable piecewise CUDA graph support on NPU
- [#39804](https://github.com/sgl-project/sglang/pull/39804) [AMD] Fix DeepSeek-V4 accuracy by not passing num_token_non_padded to MoE topk
- [#38978](https://github.com/sgl-project/sglang/pull/38978) Reduce decode bootstrap latency with request-owned speculative KV
- [#38778](https://github.com/sgl-project/sglang/pull/38778) [Unified Cache] Dedup replicated MLA/DSA KV in the UMBP direct linker
- [#38340](https://github.com/sgl-project/sglang/pull/38340) [ROCm] Fuse the MLA q absorb into the RoPE + KV-write kernel on gfx950
- [#40879](https://github.com/sgl-project/sglang/pull/40879) [AMD] Drop the unreachable vLLM fallback from ROCm FP8 activation quant
- [#33723](https://github.com/sgl-project/sglang/pull/33723) [3/N] elastic-ep: Recapture decode CUDA graphs after scale-up
- [#39790](https://github.com/sgl-project/sglang/pull/39790) [ROCm] feat: enable aiter allreduce fusion for GLM models
- [#35958](https://github.com/sgl-project/sglang/pull/35958) [npu] decoding procedure optimization on qwen3.5/3.6
- [#39538](https://github.com/sgl-project/sglang/pull/39538) [CPU] Add fused_sigmod_mul_cpu operators to the Meta Muse Glimmer model.
- [#40831](https://github.com/sgl-project/sglang/pull/40831) [HiCache] ci: add HiCache and unified radix rerun group
- [#40862](https://github.com/sgl-project/sglang/pull/40862) [CI] Update GLM-5.3-Flash H200/B200 test args
- [#39781](https://github.com/sgl-project/sglang/pull/39781) [Intel GPU] Add DeepSeek-V2-Lite-Chat-FP8 gsm8k e2e accuracy nightly test on XPU
- [#31362](https://github.com/sgl-project/sglang/pull/31362) Speculative Decoding with NGRAM support for XPU
- [#40813](https://github.com/sgl-project/sglang/pull/40813) [AMD][DI][CI] Use a node-local model cache on the SPUR cluster
- [#40599](https://github.com/sgl-project/sglang/pull/40599) [Diffusion] Add a permanent lifetime for layerwise resident layers
- [#40466](https://github.com/sgl-project/sglang/pull/40466) [deepep_v2] support GLM-5.3-Flash (Glm5NextForConditionalGeneration)
- [#40743](https://github.com/sgl-project/sglang/pull/40743) [Hisparse] fix: account for MiniMax HiSparse full-pool memory
- [#40468](https://github.com/sgl-project/sglang/pull/40468) [Fix] Keep Inkling automatic tool grammar active across the response
- [#40792](https://github.com/sgl-project/sglang/pull/40792) Fix NIXL transfer of MXFP8 KV block scales

#### 🐛 New Issues
- [#40920](https://github.com/sgl-project/sglang/issues/40920) [RFC] SGLang renderer 💬3
- [#40921](https://github.com/sgl-project/sglang/issues/40921) [Bug] trtllm_mha for both prefill and decode on H200 (SM90) is accepted in v0.5.20 and returns wrong completions (gpt-oss-120b); v0.5.17 refused it; either half alone is correct 💬2
- [#40926](https://github.com/sgl-project/sglang/issues/40926) [Bug] HiCache + hybrid (SSM/Mamba): failed cudaHostRegister on a secondary host pool aborts the whole instance, and the error path throws TypeError thereby hiding the real rc 💬2
- [#40843](https://github.com/sgl-project/sglang/issues/40843) [Bug] Severe repetition and degenerate loops in reasoning/output when serving GLM-5.3 with DFLASH speculative decoding 💬1
- [#40897](https://github.com/sgl-project/sglang/issues/40897) [Bug] Inkling multimodal returns HTTP 500 instead of 400 for invalid image input 💬1
- [#40903](https://github.com/sgl-project/sglang/issues/40903) [Bug] DeepSeek chunked-prefix prefill merges base-2 LSE into a natural-log merge_state_v2 (silent accuracy loss on every prefix-cache hit) 💬1
- [#40901](https://github.com/sgl-project/sglang/issues/40901) [Bug]: abort chunk re-sends the full accumulated text under --incremental-streaming-output 💬1
- [#40973](https://github.com/sgl-project/sglang/issues/40973) [Bug] Large HiCache UCX startup timeout on downstream build; not reproduced on v0.5.20
- [#40966](https://github.com/sgl-project/sglang/issues/40966) [Bug] Gemma 4 31B (attention_k_eq_v) PEFT LoRA adapter fails to load: missing v_proj, wrong per-layer buffer dims, vision-tower tensors collide
- [#40959](https://github.com/sgl-project/sglang/issues/40959) [Bug] Anthropic `/v1/messages`: prior-turn thinking is spliced into content, which breaks the Qwen3.8 chat template (empty `<think>` + inline `<think>…</think>`); model starts emitting `</think>` as visible text
- [#40956](https://github.com/sgl-project/sglang/issues/40956) [RFC] Some details relates to SGLang renderer item 4
- [#40949](https://github.com/sgl-project/sglang/issues/40949) ValueError: pool memory leak detected! crash with LMCache (MP mode) + EAGLE speculative decoding after a load-back hit (page_size > 1)
- [#40948](https://github.com/sgl-project/sglang/issues/40948) [Bug] Triton kernel load_binary fails with "operation not permitted" during decode CUDA graph replay (QSA graph_metadata) on GB10/SM121, cascades into GPU-memory exhaustion and a full driver lockup requiring hard reboot
- [#40877](https://github.com/sgl-project/sglang/issues/40877) [SM120] Field report: DeepSeek-V4.1-Flash in production on 8x RTX PRO 6000 (PCIe, no NVLink) - working config, measured throughput, rejected topologies
- [#40865](https://github.com/sgl-project/sglang/issues/40865) [RFC] Explicit, budgeted tail-replay for Mamba/GDN state in UnifiedRadixCache
- [#40835](https://github.com/sgl-project/sglang/issues/40835) [Bug] LoRA adapters with use_rslora=True are served with the wrong scale
- [#40817](https://github.com/sgl-project/sglang/issues/40817) [Feature] Forward unknown tool calls by default; the parse-time drop kills agent loops

#### 🔒 Closed Issues
- [#30734](https://github.com/sgl-project/sglang/issues/30734) [Roadmap] GLM-5.2 + AMD/ROCm DSpark support
- [#32378](https://github.com/sgl-project/sglang/issues/32378) [Bug] mooncake with sglang:dev with glm-5.2-w4afp8 with pd error

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 129,351 · **Open issues:** 2,529 · **Last push:** 1h ago

Today, llama.cpp released version 0.5.0, which enhances backend performance and correctness while expanding model support, notably introducing HRM-Text (DFM Mimir 1B) and MiMo-V2.6 conversion capabilities. Key features include accelerated CUDA `conv2d`, multi-address HTTP binding, and improvements for the server/router operation. Significant merges include updates to testing options for specific backends and the addition of a new OpenCL binary kernel. However, a concerning new issue has emerged regarding a performance regression observed on CUDA with Blackwell architecture, which could impact users relying on that setup.

#### 🚀 New Releases
- [v0.5.0](https://github.com/ggml-org/llama.cpp/releases/tag/v0.5.0) v0.5.0
- [b11149](https://github.com/ggml-org/llama.cpp/releases/tag/b11149) b11149
- [b11147](https://github.com/ggml-org/llama.cpp/releases/tag/b11147) b11147
- [b11146](https://github.com/ggml-org/llama.cpp/releases/tag/b11146) b11146
- [b11140](https://github.com/ggml-org/llama.cpp/releases/tag/b11140) b11140
- [b11139](https://github.com/ggml-org/llama.cpp/releases/tag/b11139) b11139
- [b11138](https://github.com/ggml-org/llama.cpp/releases/tag/b11138) b11138
- [b11136](https://github.com/ggml-org/llama.cpp/releases/tag/b11136) b11136
- [b11135](https://github.com/ggml-org/llama.cpp/releases/tag/b11135) b11135
- [b11132](https://github.com/ggml-org/llama.cpp/releases/tag/b11132) b11132

#### ✅ Merged PRs
- [#29339](https://github.com/ggml-org/llama.cpp/pull/29339) convert : allow vision target for DFlash/DSpark
- [#29334](https://github.com/ggml-org/llama.cpp/pull/29334) server: allow preset to set log file
- [#27372](https://github.com/ggml-org/llama.cpp/pull/27372) tests: add `-b/--backend` option to test-llama-archs for testing a specific backend
- [#29297](https://github.com/ggml-org/llama.cpp/pull/29297) ci : use hf-jobs-cpu-xl runner in server sanitize workflow
- [#29333](https://github.com/ggml-org/llama.cpp/pull/29333) llama.cpp : bump version to 0.5.0
- [#29057](https://github.com/ggml-org/llama.cpp/pull/29057) opencl: add bin kernel `kernel_gemm_noshuffle_q6_k_q8_1_dp4a_ila_a8_bin`
- [#29331](https://github.com/ggml-org/llama.cpp/pull/29331) sync : ggml
- [#29317](https://github.com/ggml-org/llama.cpp/pull/29317) CUDA: add a reserve to avoid spurious warning on older GCC builds
- [#29320](https://github.com/ggml-org/llama.cpp/pull/29320) common : keep HF cache dir as path, expose UTF-8 only for logs
- [#29298](https://github.com/ggml-org/llama.cpp/pull/29298) CUDA: enable sparse-fa for dsv4 prefill (again)
- [#28741](https://github.com/ggml-org/llama.cpp/pull/28741) metal: add the missing f32 x bf16 mul_mv variants
- [#28432](https://github.com/ggml-org/llama.cpp/pull/28432) cuda: top-k MoE should always fire
- [#29309](https://github.com/ggml-org/llama.cpp/pull/29309) server: fix token counting API crash on sleep
- [#29244](https://github.com/ggml-org/llama.cpp/pull/29244) jinja : parse unary +/- before variables
- [#29075](https://github.com/ggml-org/llama.cpp/pull/29075) metal : key the fa-vec tuned table by family instead of SKU
- [#27921](https://github.com/ggml-org/llama.cpp/pull/27921) server: accept OpenAI video_url content type and data: video URIs
- [#27934](https://github.com/ggml-org/llama.cpp/pull/27934) server: Dedup the draft HF model via dedup-cache-models
- [#29299](https://github.com/ggml-org/llama.cpp/pull/29299) ci : fix build-cmake runner target
- [#29305](https://github.com/ggml-org/llama.cpp/pull/29305) model-conversion : add causal-compare-logits recipe
- [#29226](https://github.com/ggml-org/llama.cpp/pull/29226) model :support Gemma4 DSpark draft backbone
- [#29302](https://github.com/ggml-org/llama.cpp/pull/29302) ci : run python (jinja) test
- [#29300](https://github.com/ggml-org/llama.cpp/pull/29300) sync : ggml
- [#28415](https://github.com/ggml-org/llama.cpp/pull/28415) vulkan: add IQ4_XS MMQ/MMV matmul kernels
- [#29266](https://github.com/ggml-org/llama.cpp/pull/29266) ggml-meta: resolve multi buffer views
- [#29218](https://github.com/ggml-org/llama.cpp/pull/29218) [SYCL] support new UT case for mul_mat_hadamard fp16
- [#28931](https://github.com/ggml-org/llama.cpp/pull/28931) sycl: extend MMVQ GLU fusion to mixed quant types; add rms_norm+scale and ssm_conv+silu fusions
- [#25266](https://github.com/ggml-org/llama.cpp/pull/25266) [SYC:] support op get_rows_back, only support fp32/fp16
- [#29139](https://github.com/ggml-org/llama.cpp/pull/29139) vulkan: hide internal symbols to prevent duplicate-dlopen state destr…
- [#29285](https://github.com/ggml-org/llama.cpp/pull/29285) sampler: reduce the size of the probe to 128K

#### 🐛 New Issues
- [#29335](https://github.com/ggml-org/llama.cpp/issues/29335) Eval bug: Metal decode throughput collapses when several long sequences are batched (M3 Ultra; 2 separate -np 1 processes are 4.6x faster) 💬2
- [#29326](https://github.com/ggml-org/llama.cpp/issues/29326) Misc. bug: Qwen4exp PromptProcessing +20% increase, top_k_radix_cuda not compiled/used in Qwen4exp `bug-unconfirmed` 💬2
- [#29319](https://github.com/ggml-org/llama.cpp/issues/29319) Eval bug: MiMo-V2.6-Distill-Qwen-9B chat template misdetected as Qwen3-Coder (tool calls never complete) 💬1
- [#29345](https://github.com/ggml-org/llama.cpp/issues/29345) MiMo-V2.6-Flash-RL: sidecar MTP draft (-md mtp-*.gguf --spec-type draft-mtp) fails with "blk.0.attn_q not found" — draft should reuse main model weights `bug-unconfirmed`
- [#29342](https://github.com/ggml-org/llama.cpp/issues/29342) Vulkan int8-coopmat matmul on RDNA3 (#27952): RX 7900 XTX 27B benchmark data + a small boundary-safety fix
- [#29341](https://github.com/ggml-org/llama.cpp/issues/29341) Performance regression between b10655 and b11140 on CUDA (arm64, Blackwell)
- [#29324](https://github.com/ggml-org/llama.cpp/issues/29324) Misc. bug: Misc. bug: --cache-ram -1 is not "no limit": the token cap stays at n_ctx, and with hybrid models RAM grows ~640 MiB per short prompt `bug-unconfirmed`
- [#29323](https://github.com/ggml-org/llama.cpp/issues/29323) Misc. bug: CSS loading animation reduces local CUDA throughput on Windows (minimal reproduction) `bug-unconfirmed`
- [#29322](https://github.com/ggml-org/llama.cpp/issues/29322) Misc. bug: prompt cache (--cache-ram) is dropped on wake from --sleep-idle-seconds, but kept in RAM while sleeping `bug-unconfirmed`
- [#29318](https://github.com/ggml-org/llama.cpp/issues/29318) Feature Request: Show model download size in progress `enhancement`
- [#29314](https://github.com/ggml-org/llama.cpp/issues/29314) fattn failure on gfx1201 in test-backend-ops
- [#29313](https://github.com/ggml-org/llama.cpp/issues/29313) Eval bug: stale ggml_gallocr plan reused after OUTPUT flags change, corrupting EAGLE-3 draft candidates `bug-unconfirmed`
- [#29310](https://github.com/ggml-org/llama.cpp/issues/29310) Feature Request: Enable coopmat1 for vulkan on Intel Arrow lake processors in Linux `enhancement`
- [#29295](https://github.com/ggml-org/llama.cpp/issues/29295) tool_choice "required" is advisory, not grammar-enforced (Qwen3, --jinja); a warm KV-cache prefix reliably flips the same near-tie

#### 🔒 Closed Issues
- [#22197](https://github.com/ggml-org/llama.cpp/issues/22197) ggml-backend-meta: multi buffers are unsupported leading to vulkan segfault
- [#26129](https://github.com/ggml-org/llama.cpp/issues/26129) Feature Request: server: expose per-device memory usage (weights / context / compute)
- [#26402](https://github.com/ggml-org/llama.cpp/issues/26402) Misc. bug: llama-cpp loading model to dGPU VRAM, but using iGPU for inference when compressing KV-cache
- [#26685](https://github.com/ggml-org/llama.cpp/issues/26685) Eval bug: DeepSeek V4 garbled output with RPC Vulkan.
- [#28519](https://github.com/ggml-org/llama.cpp/issues/28519) Eval bug: SYCL backend core dumps with A770 - "failed to get device memory size"
- [#29188](https://github.com/ggml-org/llama.cpp/issues/29188) Eval bug: SIGSEGV in token-counting routes when the request arrives while the server is sleeping (stale vocab/mctx captured before the wake barrier)
- [#24902](https://github.com/ggml-org/llama.cpp/issues/24902) Feature Request: pre-select models in the webui using alias
- [#29335](https://github.com/ggml-org/llama.cpp/issues/29335) Eval bug: Metal decode throughput collapses when several long sequences are batched (M3 Ultra; 2 separate -np 1 processes are 4.6x faster)
- [#28772](https://github.com/ggml-org/llama.cpp/issues/28772) Refactor: continue modularization of model code
- [#26782](https://github.com/ggml-org/llama.cpp/issues/26782) Eval bug: Running gemma 4 12b with draft-mtp causes memory access fault
- [#26752](https://github.com/ggml-org/llama.cpp/issues/26752) Feature Request: Improve SYCL Host-to-Device Memory Access
- [#26777](https://github.com/ggml-org/llama.cpp/issues/26777) Eval bug: DSV4 state_read() clears the compressed KV cache of all sequences, silently desyncing other slots
- [#26817](https://github.com/ggml-org/llama.cpp/issues/26817) Eval bug: temp-0 tool-calling is nondeterministic for hybrid Qwen3.6-A3B on Vulkan — flips with prompt-cache mode and across restarts
- [#29319](https://github.com/ggml-org/llama.cpp/issues/29319) Eval bug: MiMo-V2.6-Distill-Qwen-9B chat template misdetected as Qwen3-Coder (tool calls never complete)
- [#29284](https://github.com/ggml-org/llama.cpp/issues/29284) VIRUS?
- [#29233](https://github.com/ggml-org/llama.cpp/issues/29233) Misc. bug: Jinja parser fails to parse unary minus before variables
- [#27846](https://github.com/ggml-org/llama.cpp/issues/27846) Misc. bug: Draft models won't get deduplicated when using `dedup-cache-models` in models preset configuration
- [#29138](https://github.com/ggml-org/llama.cpp/issues/29138) Misc. bug: ggml-rpc-server crashes on vulkan when a duplicate copy of libggml-vulkan is dlopened

### Ollama (`ollama/ollama`)

**Stars:** 181,534 · **Open issues:** 4,063 · **Last push:** 1h ago

On September 24, 2026, Ollama released version 0.34.4, which introduced crucial fixes to address intermittent "model not found" errors and improved the handling of structured outputs for thinking models in a single pass. Additionally, the launch process was updated to default Claude Code to client-side auto checks, enhancing performance and usability. Notable merged contributions included the update of the XGrammar to version 0.2.7 for structured outputs, as well as the introduction of a standalone CMake project for the native library. Among the newly reported issues, a bug concerning the glm-ocr was highlighted, where version 0.34.1+ was returning an HTTP 500 error for previously successful OCR requests, indicating a significant concern for users relying on this feature.

#### 🚀 New Releases
- [v0.34.4-rc1](https://github.com/ollama/ollama/releases/tag/v0.34.4-rc1) v0.34.4

#### ✅ Merged PRs
- [#18615](https://github.com/ollama/ollama/pull/18615) mlxrunner: Update XGrammar to 0.2.7 for structured outputs
- [#18596](https://github.com/ollama/ollama/pull/18596) launch: default Claude Code to client-side auto checks
- [#18611](https://github.com/ollama/ollama/pull/18611) xgrammar: add standalone CMake project for native library
- [#18501](https://github.com/ollama/ollama/pull/18501) docs: document thinking control discovery

#### 🐛 New Issues
- [#18612](https://github.com/ollama/ollama/issues/18612) Feature request: yield idle model VRAM under GPU-memory pressure `feature request`
- [#18616](https://github.com/ollama/ollama/issues/18616) Mimo-v2.6-Pro and Mimo-v2.6-Flash
- [#18609](https://github.com/ollama/ollama/issues/18609) glm-ocr: 0.34.1+ returns HTTP 500 "prediction aborted, token repeat limit reached" for OCR requests that succeeded on 0.34.0
- [#18605](https://github.com/ollama/ollama/issues/18605) gemma4: tool calls with 47+ string values are always dropped — placeholder index 44 (`,`) collides in `gemma4ArgsToJSON` `bug`

#### 🔒 Closed Issues
- [#18567](https://github.com/ollama/ollama/issues/18567) MLX engine: structured output (format/JSON schema) never terminates — model emits whitespace until num_predict is reached
- [#18605](https://github.com/ollama/ollama/issues/18605) gemma4: tool calls with 47+ string values are always dropped — placeholder index 44 (`,`) collides in `gemma4ArgsToJSON`

### LiteLLM (`BerriAI/litellm`)

**Stars:** 59,504 · **Open issues:** 5,197 · **Last push:** <1h ago

On September 24, 2026, LiteLLM released several new versions, including v1.104.0-dev.1, v1.102.1, v1.101.2, v1.101.1, v1.100.2, and v1.99.3, all of which emphasize security features by being signed with cosign for image verification. Noteworthy merged pull requests include enhancements to model management with #42833, which adds Gemini preview aliases, and #42832 that syncs OpenRouter prices for better consistency. Additionally, the fix in #42825 ensures that the model listing endpoints respect the discoverable flag, improving user experience. Among new issues, #42653 highlights a bug related to Redis coordination that can lead to budget allocation problems during pod startup, signifying potential disruptions in system performance.

#### 🚀 New Releases
- [v1.104.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.104.0-dev.1) v1.104.0-dev.1
- [v1.102.1](https://github.com/BerriAI/litellm/releases/tag/v1.102.1) v1.102.1
- [v1.101.2](https://github.com/BerriAI/litellm/releases/tag/v1.101.2) v1.101.2
- [v1.101.1](https://github.com/BerriAI/litellm/releases/tag/v1.101.1) v1.101.1
- [v1.100.2](https://github.com/BerriAI/litellm/releases/tag/v1.100.2) v1.100.2
- [v1.99.3](https://github.com/BerriAI/litellm/releases/tag/v1.99.3) v1.99.3

#### ✅ Merged PRs
- [#42833](https://github.com/BerriAI/litellm/pull/42833) feat(models): add gemini preview aliases and deep research 04-2026 rows
- [#42832](https://github.com/BerriAI/litellm/pull/42832) fix(models): sync openrouter prices from the models API
- [#42699](https://github.com/BerriAI/litellm/pull/42699) fix(proxy): gate disable_global_guardrails on keys and teams to proxy admins
- [#42837](https://github.com/BerriAI/litellm/pull/42837) feat(cost-map): add vertex ai llama 3.3 70b, veo 2/3, virtual try-on and 2.5 tts rows
- [#42825](https://github.com/BerriAI/litellm/pull/42825) feat(proxy): honor model_info.discoverable on the model listing endpoints
- [#42791](https://github.com/BerriAI/litellm/pull/42791) fix(mcp): reject duplicate MCP server names and aliases
- [#42793](https://github.com/BerriAI/litellm/pull/42793) feat(lint): add LIT013 flagging *-ok suppressions that suppress nothing and remove the 240 stale ones
- [#42638](https://github.com/BerriAI/litellm/pull/42638) fix(ui): show ten prompt caching requests per page
- [#42774](https://github.com/BerriAI/litellm/pull/42774) fix(shadow-eval): replay approved pre-call guardrail snapshots
- [#42639](https://github.com/BerriAI/litellm/pull/42639) fix(ui): prefer native providers in auto-router presets
- [#42755](https://github.com/BerriAI/litellm/pull/42755) fix(ui): hide LiteAdmin in Playground and add admin preference
- [#42828](https://github.com/BerriAI/litellm/pull/42828) revert: restore the full pull request template (reverts #42813)
- [#42826](https://github.com/BerriAI/litellm/pull/42826) fix(otel): root post-response service spans in their own trace linked to the request
- [#42781](https://github.com/BerriAI/litellm/pull/42781) test(straiker): deterministic integration audit of the v3 platform relay
- [#42813](https://github.com/BerriAI/litellm/pull/42813) docs: simplify pull request template into plain English questions
- [#36719](https://github.com/BerriAI/litellm/pull/36719) fix(key_management): invalidate cached object permissions on key update
- [#42795](https://github.com/BerriAI/litellm/pull/42795) chore(release): backport #42607 to stable/1.101.x and cut 1.101.2
- [#42806](https://github.com/BerriAI/litellm/pull/42806) chore(prices): sync OpenRouter prices: 1 model [17 held]
- [#42790](https://github.com/BerriAI/litellm/pull/42790) fix(mcp): keep tool attribution on guardrail-blocked REST calls
- [#42796](https://github.com/BerriAI/litellm/pull/42796) fix(proxy): apply user_api_key_cache_max_size to the key object partition
- [#40204](https://github.com/BerriAI/litellm/pull/40204) fix(redis): authenticate sync clusters with IAM credential providers
- [#42767](https://github.com/BerriAI/litellm/pull/42767) feat(bedrock): serve the OpenAI models on bedrock-runtime's native Responses API (internal copy of #38489)
- [#42805](https://github.com/BerriAI/litellm/pull/42805) feat(rust-bridge): extend native dispatch foundation to chat completions, responses, and messages
- [#42590](https://github.com/BerriAI/litellm/pull/42590) chore(prices): sync Fireworks AI prices: 2 models, 2 new [2 with gaps]
- [#42807](https://github.com/BerriAI/litellm/pull/42807) feat(models): add together_ai/together/Tev1-4B-experimental
- [#42787](https://github.com/BerriAI/litellm/pull/42787) fix(mcp): forward caller bearer on REST oauth_delegate tool calls
- [#42799](https://github.com/BerriAI/litellm/pull/42799) feat(embeddings): add native dispatch foundation
- [#42782](https://github.com/BerriAI/litellm/pull/42782) fix(mcp): return 401 challenge for REST token-exchange tool calls without a subject token
- [#42769](https://github.com/BerriAI/litellm/pull/42769) feat(cache): add a guarded native response-cache resolver foundation
- [#42798](https://github.com/BerriAI/litellm/pull/42798) feat(bedrock): add bare openai.gpt-6-sol and openai.gpt-6-luna cost map rows
- [#42771](https://github.com/BerriAI/litellm/pull/42771) chore(prices): sync Baseten prices: 1 model
- [#42773](https://github.com/BerriAI/litellm/pull/42773) ci: add tests-only CircleCI pipeline with coverage and docs validation
- [#42756](https://github.com/BerriAI/litellm/pull/42756) chore(prices): sync OpenRouter prices: 2 models, 2 deprecated [20 held]
- [#42785](https://github.com/BerriAI/litellm/pull/42785) test(integration): cover customer reported cache key, cache_control, bedrock request id, responses schema, scim and tag budget contracts
- [#42783](https://github.com/BerriAI/litellm/pull/42783) fix(anthropic): preserve MCP tool results in the non-Anthropic Messages bridge
- [#41880](https://github.com/BerriAI/litellm/pull/41880) feat(guardrails): straiker guardrail speaks the v3 platform API (/api/v3/detect)
- [#42775](https://github.com/BerriAI/litellm/pull/42775) test(rust): model the blocking OCR hook as a guardrail so its raise propagates
- [#42635](https://github.com/BerriAI/litellm/pull/42635) chore(release): backport #40639 to stable/1.101.x
- [#42652](https://github.com/BerriAI/litellm/pull/42652) fix(ui): keep per-user MCP credentials updatable and clearable after setup
- [#42764](https://github.com/BerriAI/litellm/pull/42764) fix(prices): add baseten/zai-org/GLM-5.3-Fast pricing
- [#42686](https://github.com/BerriAI/litellm/pull/42686) fix(bedrock): honour stream_chunk_size in Invoke streaming
- [#42658](https://github.com/BerriAI/litellm/pull/42658) fix(bedrock): backport the /v1/messages Invoke streaming pass-through to rc/1.103.0 (#42607)
- [#42452](https://github.com/BerriAI/litellm/pull/42452) fix(completion_extras): forward non-enum reasoning_effort through the Responses bridge instead of dropping it
- [#42709](https://github.com/BerriAI/litellm/pull/42709) ci: add merge smoke checks workflow with loopback-only harness and 11 curated cases
- [#42664](https://github.com/BerriAI/litellm/pull/42664) fix(params): stop stream_chunk_size reaching provider request bodies
- [#42759](https://github.com/BerriAI/litellm/pull/42759) feat(models): add openrouter/stealth/space-bunny-alpha
- [#42694](https://github.com/BerriAI/litellm/pull/42694) test(integration): regression tests for July cost tracking, budgeting and spend bugs
- [#42693](https://github.com/BerriAI/litellm/pull/42693) test(integration): regression tests for July provider translation, routing and streaming bugs
- [#42752](https://github.com/BerriAI/litellm/pull/42752) feat(gemini): add gemini-3.8-flash-tts and gemini-3.8-flash-lite-tts prices

#### 🐛 New Issues
- [#42653](https://github.com/BerriAI/litellm/issues/42653) [Bug]: coordination Redis from REDIS_* is probed once at boot, so a startup race leaves budgets per-pod for the life of the pod `llm translation` 💬4
- [#42757](https://github.com/BerriAI/litellm/issues/42757) [Bug]: Router: a failure inside fetch_stream() (Gemini/Vertex deferred stream) skips the failure callbacks and the cooldown `llm translation` 💬3
- [#42725](https://github.com/BerriAI/litellm/issues/42725) [Bug]: Bedrock GPT-6 Sol/Luna tools are dropped on Converse, and temperature returns 400 even with drop_params `llm translation`
- [#42819](https://github.com/BerriAI/litellm/issues/42819) [Bug]: sse_keepalive_ping_interval_seconds leaks a max_parallel_requests slot on every streamed request (keys 429 after N sequential calls) `llm translation` 💬1
- [#42804](https://github.com/BerriAI/litellm/issues/42804) [Bug]: Vertex/Gemini context caching skipped when marked messages < min tokens, though tools (moved into the cache) push it over the minimum `llm translation` 💬1
- [#42706](https://github.com/BerriAI/litellm/issues/42706) [Bug]: SSO login-code exchange overwrites the Secure token cookie with a non-Secure one 💬1
- [#42770](https://github.com/BerriAI/litellm/issues/42770) [Bug]: websearch_interception + use_chat_completions_api: streaming /v1/responses 500s — bridge returns non-async-iterable ResponsesAPIResponse `llm translation` 💬1
- [#42766](https://github.com/BerriAI/litellm/issues/42766) [Bug]: agent_access_groups cannot be set on DB agents via /v1/agents 💬1
- [#42765](https://github.com/BerriAI/litellm/issues/42765) [Bug]: Chat-to-Responses bridge should normalize overlong tool call IDs `bug` `llm translation` 💬1
- [#42742](https://github.com/BerriAI/litellm/issues/42742) [Bug]: When using `generic_guardrail_api` (or `headroom`) with `default_on: true`, requests containing Gemini-native tools like `{"googleSearch": {}}` fail with a 500 error: `bug` `llm translation` 💬1
- [#42739](https://github.com/BerriAI/litellm/issues/42739) [Bug]: Azure AI Anthropic replays OpenAI tool arguments as string instead of tool_use.input object `bug` `llm translation` 💬1
- [#42716](https://github.com/BerriAI/litellm/issues/42716) [Bug]: AutoRouter finishes with no content returned `bug` `llm translation` 💬1
- [#42678](https://github.com/BerriAI/litellm/issues/42678) Atlassian MCP: dcr_bridge fails — mcp.atlassian.com DCR clients not recognized by id.atlassian.com 💬1
- [#42657](https://github.com/BerriAI/litellm/issues/42657) [Bug]: refresh_model_info (#41508) polls /v1/models every 5 min with no opt-out, keeps scale-to-zero endpoints (RunPod Serverless) billing `llm translation` 💬1
- [#42663](https://github.com/BerriAI/litellm/issues/42663) [Bug]: Streamed Anthropic server-tool requests price only the message_start cache-write breakdown, under-reporting spend `llm translation` 💬1
- [#42823](https://github.com/BerriAI/litellm/issues/42823) Docs/example: HAL SUPREME as a custom OpenAI-compatible provider behind LiteLLM `llm translation`
- [#42768](https://github.com/BerriAI/litellm/issues/42768) [Test] Zapier SDK classification test — direct Python SDK usage `llm translation`
- [#42750](https://github.com/BerriAI/litellm/issues/42750) [Feature]: Let a custom callback hide models from the model listing endpoints `llm translation`
- [#42730](https://github.com/BerriAI/litellm/issues/42730) [Bug]: Team member "Allowed Models" dropdown ignores models granted via access groups (`access_group_ids`) `bug`
- [#42724](https://github.com/BerriAI/litellm/issues/42724) [Bug]: Proxy 500 on /v1/chat/completions stream when mid-stream fallback yields None -> 'async for' requires an object with __aiter__ method, got NoneType (responses_id_security) `llm translation`
- [#42721](https://github.com/BerriAI/litellm/issues/42721) [Feat]: Integrate Anthropic Claude Opus 5.5 `llm translation`
- [#42720](https://github.com/BerriAI/litellm/issues/42720) [Feature]: auto_router should reuse complexity_router's human-ask extraction (last user turn is harness noise in agent traffic) `claude code`
- [#42717](https://github.com/BerriAI/litellm/issues/42717) [Bug]: Bedrock Claude Opus 5.5 returns plain text for response_format json_schema because json_tool_call can't be forced `llm translation`
- [#42714](https://github.com/BerriAI/litellm/issues/42714) [Bug]: rust-wheel OCR callback test expects swallowed logger exception to propagate
- [#42690](https://github.com/BerriAI/litellm/issues/42690) [Feature]: Limit repeated failed API-key authentication per source address, like the Admin UI sign-in limit from #40982 `llm translation`
- [#42689](https://github.com/BerriAI/litellm/issues/42689) [Bug]: Every failed auth with an unknown key writes its own spend rows, so an unauthenticated client decides how large the usage tables grow `llm translation`
- [#42681](https://github.com/BerriAI/litellm/issues/42681) [Bug]: Content filter lacks word boundary matching, causing false positives on SQL injection keywords `bug`
- [#42679](https://github.com/BerriAI/litellm/issues/42679) [Bug]: Bedrock in-region (bare) Claude model IDs are priced at the global rate, but AWS bills 10% more `bug` `llm translation`
- [#42656](https://github.com/BerriAI/litellm/issues/42656) [Bug] OpenAI pass-through strips required id from standalone /alpha/search requests `llm translation`
- [#42655](https://github.com/BerriAI/litellm/issues/42655) [Bug]: MCP tools/call on a single-server endpoint returns 404 "Tool not found" when a different replica served tools/list (oauth_passthrough servers) `claude code`

#### 🔒 Closed Issues
- [#27846](https://github.com/BerriAI/litellm/issues/27846) [Bug]: Structured Output fails for Anthropic models on bedrock/converse
- [#37726](https://github.com/BerriAI/litellm/issues/37726) [Bug]: Azure Entra Redis auth (azure_redis_ad_token) cannot start the proxy in cluster mode — init_redis_cluster has no credential provider path
- [#24999](https://github.com/BerriAI/litellm/issues/24999) [Bug]: "Month to date" view includes usage for the last day of the previous month
- [#27852](https://github.com/BerriAI/litellm/issues/27852) [Bug]: Ghost models with --num_workers > 1 – Deleted models are not cleared from other workers' local cache (Redis Pub/Sub sync issue)
- [#29409](https://github.com/BerriAI/litellm/issues/29409) [Bug]: litellm-internal-health-check is crawling all configured AI models in config.yaml even i set disable_background_health_check
- [#25947](https://github.com/BerriAI/litellm/issues/25947) [Bug]: Vector stores from config.yaml are not added
- [#31184](https://github.com/BerriAI/litellm/issues/31184) Feature request: support x402-paid inference providers (no-account pay-per-call)
- [#38208](https://github.com/BerriAI/litellm/issues/38208) [Bug]: MCP sending x-litellm-api-key to a dcr_bridge server returns an empty tool list
- [#30707](https://github.com/BerriAI/litellm/issues/30707) generate_content adapter path raises ValueError: httpx_response is None in logging
- [#30720](https://github.com/BerriAI/litellm/issues/30720) [Feature]: DataDog metrics aggregates by virtual key identifyer
- [#30721](https://github.com/BerriAI/litellm/issues/30721) [Feature]: Allow using an existing secret for database credentials on the standalone Postgres path (helm chart)
- [#30724](https://github.com/BerriAI/litellm/issues/30724) [Bug]: Bedrock pass-through endpoint does not log request `messages` payload
- [#30730](https://github.com/BerriAI/litellm/issues/30730) [Bug]: Lakera v2 guardrail — flagged=True with empty payload takes mask-and-allow branch but masks nothing
- [#30753](https://github.com/BerriAI/litellm/issues/30753) [Bug]: image_config silently dropped on /v1/images/edits for OpenRouter image models (honored on /v1/images/generations)
- [#30754](https://github.com/BerriAI/litellm/issues/30754) [Feature]: Add support for WeiboAI VibeThinker models (1.5B, 3B)
- [#30771](https://github.com/BerriAI/litellm/issues/30771) [Bug]: POST /model/new silently skips DB write, returns 200 OK with db_model: false despite STORE_MODEL_IN_DB=True
- [#30778](https://github.com/BerriAI/litellm/issues/30778) [Bug]: `ssl_verify` not propagated in `BaseLLMAIOHTTPHandler`
- [#30781](https://github.com/BerriAI/litellm/issues/30781) [Bug]: Reusing a code_interpreter container on /v1/responses isn't routed/translated (Azure rejects the id)
- [#39829](https://github.com/BerriAI/litellm/issues/39829) [Bug]: Bedrock Converse does not drop temperature for reasoning models

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,651 · **Open issues:** 1,278 · **Last push:** <1h ago

On September 24, 2026, Unsloth released version v0.1.815-beta, introducing the ability to run Qwen-Image-2.1 locally, along with custom Agent Skills and enhanced chat/project management features. This update also significantly improved performance with reasoning blocks now operating at 60 FPS and included increased reliability for training and more straightforward Linux installation and updates. Key merged features included enhancements to the Studio environment, such as the rollback management for model switching and updated response APIs for custom providers. Notably, several new issues were raised, including a significant bug regarding image generation processes freezing during VAE decoding, which may impact user experience moving forward.

#### 🚀 New Releases
- [v0.1.815-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.815-beta) Qwen-Image-2.1 + Skills

#### ✅ Merged PRs
- [#11747](https://github.com/unslothai/unsloth/pull/11747) Anchor the GRPO MoE aux-loss fail-fast on the assignment, not its expression
- [#11741](https://github.com/unslothai/unsloth/pull/11741) studiobench: compare a code fence one arm scrolled past on its text
- [#11738](https://github.com/unslothai/unsloth/pull/11738) Studio: keep tracking a new chat's upload when its id commits late
- [#11735](https://github.com/unslothai/unsloth/pull/11735) Count the stripper's whole-buffer work instead of timing it
- [#11354](https://github.com/unslothai/unsloth/pull/11354) studio: add responses api selection for custom providers
- [#11729](https://github.com/unslothai/unsloth/pull/11729) Studio: do not roll back a model switch whose load got no answer
- [#11715](https://github.com/unslothai/unsloth/pull/11715) Classify uv's new --output-format as a value flag in the pip shim
- [#11711](https://github.com/unslothai/unsloth/pull/11711) Expect the unsloth Z-Image-Turbo mirror in the image download queue drive
- [#11708](https://github.com/unslothai/unsloth/pull/11708) Keep a test's fake pid identity out of the cached owner identity
- [#11700](https://github.com/unslothai/unsloth/pull/11700) Read the sidebar pin's width only where matchMedia exists, and expect the update card's scaled width
- [#11688](https://github.com/unslothai/unsloth/pull/11688) Give the ROCm bf16 chain test every name _gpu_init imports from device_type
- [#11680](https://github.com/unslothai/unsloth/pull/11680) Follow #11635's Diffusers prefetch and #11660's responsive classes in the tests
- [#11691](https://github.com/unslothai/unsloth/pull/11691) Revert "Studio: steady the Images and Video loading spinners, and tidy the progress card"
- [#11689](https://github.com/unslothai/unsloth/pull/11689) Bump install.sh / install.ps1 pin to unsloth>=2026.9.11
- [#11679](https://github.com/unslothai/unsloth/pull/11679) Wait for the model load before reading the unsloth run banner
- [#11687](https://github.com/unslothai/unsloth/pull/11687) Studio: use unsloth/Qwen-Image-2.1 mirror and pin it to the top of Images
- [#11682](https://github.com/unslothai/unsloth/pull/11682) Studio: show the hub's format dot only under All formats
- [#11667](https://github.com/unslothai/unsloth/pull/11667) studio: fix show in folder over settings and open the logs directory
- [#11681](https://github.com/unslothai/unsloth/pull/11681) Studio: rename the hub's Image generation capability to Image/video gen
- [#11626](https://github.com/unslothai/unsloth/pull/11626) Studio: show a toast as soon as an image or video model is picked
- [#11635](https://github.com/unslothai/unsloth/pull/11635) Studio: install the pinned Diffusers build before the backend imports what it replaces
- [#11595](https://github.com/unslothai/unsloth/pull/11595) Stop ignoring the min_p and stop settings the GRPO notebooks pass to vLLM
- [#11599](https://github.com/unslothai/unsloth/pull/11599) Studio: free the disk space when a GGUF quant is deleted or replaced
- [#11678](https://github.com/unslothai/unsloth/pull/11678) Compare the upgraded studio.db by the rows the old build wrote, not its bytes
- [#11676](https://github.com/unslothai/unsloth/pull/11676) Make the two ineffective import() calls static, fail the build on the next one, and re-measure the startup budget
- [#11647](https://github.com/unslothai/unsloth/pull/11647) Studio: make the contrast slider reach text and hover states
- [#11660](https://github.com/unslothai/unsloth/pull/11660) Studio: responsive layout for phones, tablets and ultrawide
- [#11673](https://github.com/unslothai/unsloth/pull/11673) Follow #11648's UI-scale layout and #11628's Code placement in the studio contracts
- [#11615](https://github.com/unslothai/unsloth/pull/11615) AMD RDNA1: turn Triton's buffer ops off on gfx101x before Triton loads
- [#11611](https://github.com/unslothai/unsloth/pull/11611) Read plain RoPE as rope_scaling None for 4.x-era remote configs on transformers 5
- [#11524](https://github.com/unslothai/unsloth/pull/11524) fix: context override from JIT API load
- [#11672](https://github.com/unslothai/unsloth/pull/11672) Give each spawn-probe build its own package in the shared modules cache
- [#11648](https://github.com/unslothai/unsloth/pull/11648) Studio: scale padding, icons and widths with the UI font size, and make interface scale work in the browser
- [#11670](https://github.com/unslothai/unsloth/pull/11670) Give the descendant-work health test room for its second interpreter to start
- [#11628](https://github.com/unslothai/unsloth/pull/11628) Fix Code tool placement for ChatGPT subscriptions
- [#11657](https://github.com/unslothai/unsloth/pull/11657) Studio: list the unsloth mirrors for curated BF16 image pipelines
- [#11518](https://github.com/unslothai/unsloth/pull/11518) Pin the last 53 mutable action tags, and give the cache lint the direction it lacked
- [#11469](https://github.com/unslothai/unsloth/pull/11469) Make Phi-4-reasoning-vision load and preprocess images on transformers 5
- [#11663](https://github.com/unslothai/unsloth/pull/11663) Read the picker's orderRecommendedRows arguments as a set
- [#11607](https://github.com/unslothai/unsloth/pull/11607) Name forks after the chat they came from, and close their inherited history
- [#11662](https://github.com/unslothai/unsloth/pull/11662) Give every GGUF cancel-drain test the loaded-runner budget
- [#11609](https://github.com/unslothai/unsloth/pull/11609) Recompute remote code's non-persistent buffers that transformers 5 leaves uninitialised
- [#11661](https://github.com/unslothai/unsloth/pull/11661) Stall the signalled launchers in slices, so a signal at READY is not deferred
- [#11602](https://github.com/unslothai/unsloth/pull/11602) Studio: show the real epoch for Mac training runs
- [#11625](https://github.com/unslothai/unsloth/pull/11625) Unsloth Studio: raise the huggingface_hub floor to what the pinned Diffusers main build needs
- [#11601](https://github.com/unslothai/unsloth/pull/11601) Export the trained weights when a full fine-tune loaded from a local folder is saved to GGUF
- [#11598](https://github.com/unslothai/unsloth/pull/11598) Studio: read web pages in the encoding the page itself declares
- [#11597](https://github.com/unslothai/unsloth/pull/11597) Studio: keep AI Assist label names and system prompt when the dataset format is Alpaca
- [#11596](https://github.com/unslothai/unsloth/pull/11596) Studio: keep each imported tool call's own result when a chat file reuses call ids
- [#11655](https://github.com/unslothai/unsloth/pull/11655) Bound the unreadable-sample stall test by the fault it guards
- [#11653](https://github.com/unslothai/unsloth/pull/11653) Studio: keep the segmented control track visible in the dark Settings pane
- [#11642](https://github.com/unslothai/unsloth/pull/11642) Studio: sort the image picker by the chosen Hub sort, keep unsloth rows on top, and drop the Recommended sort
- [#11656](https://github.com/unslothai/unsloth/pull/11656) Studio: keep the model selector on the left, and centre its name on the icon
- [#11652](https://github.com/unslothai/unsloth/pull/11652) Studio: copy a usable API key prefix, and show a new key from its start
- [#11645](https://github.com/unslothai/unsloth/pull/11645) Wait for the account-switch reload without evaluating across it
- [#11643](https://github.com/unslothai/unsloth/pull/11643) Studio: steady the Images and Video loading spinners, and tidy the progress card
- [#11608](https://github.com/unslothai/unsloth/pull/11608) Give a sidebar row one menu, and run it one step smaller
- [#11633](https://github.com/unslothai/unsloth/pull/11633) Close the WAL keepers a backend test opened before the next test runs
- [#11632](https://github.com/unslothai/unsloth/pull/11632) Record the settings search flash instead of polling for it
- [#11629](https://github.com/unslothai/unsloth/pull/11629) Retry opening the native Safari session, and only that
- [#11624](https://github.com/unslothai/unsloth/pull/11624) Wait for the stored context length after reload instead of reading it once
- [#11621](https://github.com/unslothai/unsloth/pull/11621) Pin the expression shapes a secret key may take, and read braced PowerShell env
- [#11619](https://github.com/unslothai/unsloth/pull/11619) Give the Docker Hub cleanup and ROCm README steps the key they read

#### 🐛 New Issues
- [#11671](https://github.com/unslothai/unsloth/issues/11671) [Feature] Option to disable toolcalls `feature request` 💬4
- [#11637](https://github.com/unslothai/unsloth/issues/11637) [Bug] Unsloth Studio / Desktop: Qwen-Image-2.1 shows as downloaded after the GGUF, then Run pulls another ~19 GB labelled only "Required assets" 💬1
- [#11734](https://github.com/unslothai/unsloth/issues/11734) [Bug] Unsloth Desktop: on Windows, the bottom strip of a maximized window ignores clicks, so the composer's "More" menu can't be opened 💬1
- [#11638](https://github.com/unslothai/unsloth/issues/11638) [Bug] AMD: Windows ROCm torch has no torch.distributed, so torchao fails to import and Qwen-Image-2.1 skips the hosted FP8 text encoder for the 16 GiB dense one 💬1
- [#11698](https://github.com/unslothai/unsloth/issues/11698) [Bug] save_pretrained_gguf on a peft PeftModel.from_pretrained wrapper silently exports the base model (LoRA not merged) 💬1
- [#11709](https://github.com/unslothai/unsloth/issues/11709) [Bug] This won’t take long... `feature request` `bug` 💬1
- [#11674](https://github.com/unslothai/unsloth/issues/11674) [Feature] Adreno Support `feature request` 💬1
- [#11646](https://github.com/unslothai/unsloth/issues/11646) [Feature] Unsloth Studio / Desktop: Benchmarks page, tracking config sweeps, llama-bench, and quality benchmarks (MMLU, GSM8K, HellaSwag, TruthfulQA) `feature request` 💬1
- [#11636](https://github.com/unslothai/unsloth/issues/11636) [Bug] AMD: Unsloth Studio / Desktop image generation turns on cudnn.benchmark under ROCm, so the first VAE decode runs MIOpen's exhaustive tuning for 10 to 23 minutes and crashed a gfx1030 💬1
- [#11745](https://github.com/unslothai/unsloth/issues/11745) [Feature] Unsloth Studio / Desktop: run React and TypeScript canvases, not just plain HTML
- [#11742](https://github.com/unslothai/unsloth/issues/11742) [Feature] Unsloth Studio / Desktop: create and edit skills from the Skills dialog instead of only from files or chat
- [#11739](https://github.com/unslothai/unsloth/issues/11739) [Bug] Unsloth Studio: image generation sits at "Step N/N" through the VAE decode and looks hung
- [#11728](https://github.com/unslothai/unsloth/issues/11728) Qwen3.8-27B-NVFP4 Safetensors cannot be loaded in Unsloth Desktop `feature request`
- [#11714](https://github.com/unslothai/unsloth/issues/11714) [Feature] Unsloth Studio: let the Images page pick the sampler (scheduler), not just the step count
- [#11707](https://github.com/unslothai/unsloth/issues/11707) FastLanguageModel.from_pretrained's 38-dependency fan-out has zero test coverage `feature request` `bug`
- [#11705](https://github.com/unslothai/unsloth/issues/11705) [Feature] Toggle to expose native llama.cpp API alongside OpenAI-compatible API `feature request`
- [#11703](https://github.com/unslothai/unsloth/issues/11703) [Feature] Add a collapsible, fixed-height Thinking panel in Unsloth Studio chat
- [#11683](https://github.com/unslothai/unsloth/issues/11683) [Feature] Option to disable automatic update checks for Unsloth Desktop, backend, and llama.cpp `feature request`
- [#11669](https://github.com/unslothai/unsloth/issues/11669) [Bug] Studio MLX: orphan tool result in replayed history breaks native chat template
- [#11665](https://github.com/unslothai/unsloth/issues/11665) [Feature] Option to disable auto chat scroll `feature request`
- [#11664](https://github.com/unslothai/unsloth/issues/11664) [Feature] Feature request: vLLM support — thinking depth selection and context auto-compression `feature request`
- [#11650](https://github.com/unslothai/unsloth/issues/11650) [Feature] Model ACLs for multi-user setups `feature request`
- [#11649](https://github.com/unslothai/unsloth/issues/11649) [Feature] Add support for model aliases `feature request`
- [#11630](https://github.com/unslothai/unsloth/issues/11630) [Feature] Image manipulation tools for editing reference images `feature request`
- [#11639](https://github.com/unslothai/unsloth/issues/11639) [Bug] xFormers can't load C++/CUDA extensions. `feature request` `bug`
- [#11623](https://github.com/unslothai/unsloth/issues/11623) [Studio/Windows] `_is_port_free` misses a listener on `0.0.0.0`, so the desktop backend takes over `127.0.0.1:8888` from another app
- [#11622](https://github.com/unslothai/unsloth/issues/11622) [Studio Bug] set HF_ENDPOINT=https://hf-mirror.com but it not work `feature request` `bug`

#### 🔒 Closed Issues
- [#5867](https://github.com/unslothai/unsloth/issues/5867) [Feature] Add benchmarking function
- [#11567](https://github.com/unslothai/unsloth/issues/11567) [Bug] Qwen-image-2.1 needs extra manual steps to run
- [#8495](https://github.com/unslothai/unsloth/issues/8495) [Bug] Desktop and Studio Dont Install on Snapdragon X2 Elite (Windows and Linux alike)
- [#11734](https://github.com/unslothai/unsloth/issues/11734) [Bug] Unsloth Desktop: on Windows, the bottom strip of a maximized window ignores clicks, so the composer's "More" menu can't be opened
- [#11514](https://github.com/unslothai/unsloth/issues/11514) Typo: “top-1% accuracy” should be “top-1 accuracy”
- [#10347](https://github.com/unslothai/unsloth/issues/10347) [Feature] Custom API providers need an endpoint/API type option (OpenAI Responses API) — gpt-5.6-luna on OpenCode Go returns 500
- [#11511](https://github.com/unslothai/unsloth/issues/11511) [Bug] Context override works from chat menu load model, not from JIT api load
- [#11557](https://github.com/unslothai/unsloth/issues/11557) [Studio Bug] Code enabled with ChatGPT/Codex but Python and Terminal are not exposed

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,107 · **Open issues:** 379 · **Last push:** <1h ago

On September 24, 2026, there were no new releases for AIBrix; however, several notable pull requests were merged that enhance functionality and improve stability. Key additions include a feature that maps request priority tiers to the vLLM request priority (#2787) and adjustments to drive gateway routing thresholds based on model configuration profiles (#2786). Additionally, bug fixes were implemented to recover panics in the queue router serve loop (#2781) and to ensure better handling of the RoundRobin channel-set specifications (#2790). Among the new issues, there is a significant feature request (#2795) aimed at improving how a card's key-value pairs are divided as engine loads change, reflecting ongoing development and community engagement.

#### ✅ Merged PRs
- [#2787](https://github.com/vllm-project/aibrix/pull/2787) [Feat] Map the request priority tier to the vLLM request priority
- [#2793](https://github.com/vllm-project/aibrix/pull/2793) [Misc] Accept [Feat] in the PR title prefix check
- [#2786](https://github.com/vllm-project/aibrix/pull/2786) [Feat] Drive gateway routing thresholds from model config profiles
- [#2790](https://github.com/vllm-project/aibrix/pull/2790) [Misc] Cover the growing half of the RoundRobin channel-set spec
- [#2789](https://github.com/vllm-project/aibrix/pull/2789) [Misc] Harden _write_json_file against newline translation
- [#2777](https://github.com/vllm-project/aibrix/pull/2777) [CI] Cancel superseded pull-request workflow runs
- [#2781](https://github.com/vllm-project/aibrix/pull/2781) [Bug] Recover panics in the queue router serve loop

#### 🐛 New Issues
- [#2795](https://github.com/vllm-project/aibrix/issues/2795) [Feature][ModelClaim] Divide a card's KV again as its engines and their load change `kind/feature` `area/orchestration` 💬3
- [#2783](https://github.com/vllm-project/aibrix/issues/2783) [Bug] PD router per-pod load state collides for same-named pods in different namespaces `kind/bug` `area/gateway` 💬1
- [#2782](https://github.com/vllm-project/aibrix/issues/2782) [Bug] Prefix-match routing ignores tools, so requests with different tool sets count as a full prefix match `kind/bug` `area/gateway` 💬1

#### 🔒 Closed Issues
- [#2759](https://github.com/vllm-project/aibrix/issues/2759) [Feature] Panic recovery for the gateway plugin gRPC server

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,905 · **Open issues:** 517 · **Last push:** <1h ago

On September 24, 2026, there were no new releases for Semantic Router, but several key PRs were merged. Significant bug fixes included support for accepting Anthropic direct tool caller provenance, preserving HPA-managed Deployment replicas in the operator, and handling Ollama tool call indexing within the chat codec. Additionally, documentation improvements were made with the addition of a Decision 1.0 speed demo and aligning documentation entry points. Among new issues, the evaluation and calibration of logical-model switching for multi-turn sessions raised attention, indicating ongoing research focus in the project. Overall, the day was primarily marked by routine maintenance and documentation enhancements.

#### ✅ Merged PRs
- [#4065](https://github.com/vllm-project/semantic-router/pull/4065) [Bug] Accept Anthropic direct tool caller provenance
- [#4059](https://github.com/vllm-project/semantic-router/pull/4059) [Bug] Preserve HPA-managed Deployment replicas in Operator
- [#4049](https://github.com/vllm-project/semantic-router/pull/4049) [Bug] Accept Ollama tool call index in the chat codec
- [#4074](https://github.com/vllm-project/semantic-router/pull/4074) [Docs] Add Decision 1.0 speed demo and deterministic docs builds
- [#4063](https://github.com/vllm-project/semantic-router/pull/4063) [CI/Build] Copy pkg/fallback and pkg/llmprotocol into Dashboard image build
- [#4068](https://github.com/vllm-project/semantic-router/pull/4068) [Docs] Align documentation entry points
- [#4066](https://github.com/vllm-project/semantic-router/pull/4066) [Website] Fix the comparison table's accent column and text casing
- [#4052](https://github.com/vllm-project/semantic-router/pull/4052) [Bug] Remove uploads for rejected ML requests
- [#3891](https://github.com/vllm-project/semantic-router/pull/3891) [Research] Add DistilBERT distillation candidate for modality routing (#3198)

#### 🐛 New Issues
- [#4080](https://github.com/vllm-project/semantic-router/issues/4080) [Research] Evaluate and calibrate logical-model switching for multi-turn sessions `enhancement` `accepted` `research` `wg/evaluation-quality` 💬2
- [#4079](https://github.com/vllm-project/semantic-router/issues/4079) [Feature] Reduce provider-mocker publication latency after source changes `enhancement` `needs-acceptance` `needs-info` `wg/evaluation-quality` 💬2
- [#4058](https://github.com/vllm-project/semantic-router/issues/4058) [Bug] Operator overwrites HPA-managed Deployment replicas `bug` `accepted` `wg/enterprise-environment` 💬2
- [#4072](https://github.com/vllm-project/semantic-router/issues/4072) [Bug] Config projection endpoint returns 500 on a fresh install `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#4067](https://github.com/vllm-project/semantic-router/issues/4067) [Bug] Align documentation entry points with current contracts `accepted` `wg/developer-experience-ecosystem` 💬2
- [#4062](https://github.com/vllm-project/semantic-router/issues/4062) [Bug] Dashboard image build fails: pkg/fallback not copied into backend-builder `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#4070](https://github.com/vllm-project/semantic-router/issues/4070) [Feature] Register Vela Shield as a selectable safety model next to Vela Safety, with e2e coverage `enhancement` `accepted` `wg/router-models-inference-runtime` 💬2
- [#4060](https://github.com/vllm-project/semantic-router/issues/4060) [Bug] vllm-sr package requests removed huggingface_hub CLI extra `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬1
- [#4077](https://github.com/vllm-project/semantic-router/issues/4077) [Docs] Prepare v0.4 Hermes release blog `accepted` `in-progress` `owner/maintainers` `documentation` 💬1
- [#4073](https://github.com/vllm-project/semantic-router/issues/4073) [Feature] Filter OMP tools while keeping provider configuration in OMP `enhancement` `needs-acceptance` `needs-info` `wg/mom-routing` 💬1
- [#4075](https://github.com/vllm-project/semantic-router/issues/4075) [Docs] Publish the Decision 1.0 speed demo and keep docs builds reproducible `accepted` `wg/developer-experience-ecosystem` `documentation` 💬1

#### 🔒 Closed Issues
- [#4033](https://github.com/vllm-project/semantic-router/issues/4033) [Website] Add a capability comparison to the homepage
- [#3418](https://github.com/vllm-project/semantic-router/issues/3418) [Bug] Anthropic responses carrying caller on tool_use fail decode, breaking Claude Code
- [#4003](https://github.com/vllm-project/semantic-router/issues/4003) [Bug] Vector store pagination is unstable when stores share the same creation timestamp
- [#4058](https://github.com/vllm-project/semantic-router/issues/4058) [Bug] Operator overwrites HPA-managed Deployment replicas
- [#4067](https://github.com/vllm-project/semantic-router/issues/4067) [Bug] Align documentation entry points with current contracts
- [#4062](https://github.com/vllm-project/semantic-router/issues/4062) [Bug] Dashboard image build fails: pkg/fallback not copied into backend-builder
- [#3563](https://github.com/vllm-project/semantic-router/issues/3563) [Feature] Add GPT-6 Astra to Azure OpenAI built-in support
- [#4048](https://github.com/vllm-project/semantic-router/issues/4048) [Bug] Ollama tool calls fail with 502 through the router
- [#4075](https://github.com/vllm-project/semantic-router/issues/4075) [Docs] Publish the Decision 1.0 speed demo and keep docs builds reproducible

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*