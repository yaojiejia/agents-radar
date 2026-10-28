# 📡 AI Ecosystem Digest — 2026-10-28

> Generated 2026-10-28 02:02 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 153,615 | 19 | 1 | 1 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 131,287 | 20 | 1 | 50 | 5 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,583 | 0 | 3 | 7 | 3 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,300 | 10 | 3 | 0 | 4 |
| [OpenCode](https://github.com/anomalyco/opencode) | 222,402 | 12 | 7 | 14 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,757 | 23 | 10 | 1 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 393,225 | 120 | 103 | 202 | 3 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 257,768 | 21 | 3 | 3 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 95,720 | 39 | 44 | 30 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,289 | 18 | 23 | 56 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 132,573 | 12 | 13 | 33 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 185,031 | 9 | 6 | 3 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 62,191 | 31 | 47 | 78 | 4 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,648 | 13 | 2 | 128 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,163 | 2 | 3 | 4 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,280 | 21 | 2 | 1 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.312](https://github.com/anthropics/claude-code/releases/tag/v2.1.312) today.
- **OpenAI Codex** released several versions including [rust-v0.166.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.4).
- **LiteLLM** released version [v1.106.5](https://github.com/BerriAI/litellm/releases/tag/v1.106.5).
- **Ollama** addressed a major issue with [this model requires MLX support](https://github.com/ollama/ollama/issues/19343) which attracted 9 comments.
- **OpenClaw** has a critical bug report regarding Windows onboarding activation failure with [8 comments](https://github.com/openclaw/openclaw/issues/185819).

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 153,615 · **Open issues:** 15,803 · **Last push:** 3h ago

On October 28, 2026, Claude Code released version 2.1.312, which added the `oidc.user_id_claim` to the Claude apps gateway for improved user identification and introduced a click-to-send feature for queued messages in fullscreen mode. Additionally, the release fixed an issue with managed settings and organization policy not being fetched properly. The significant merged pull request today was #105303, which enables the installation of marketplace plugins from the official Claude plugins repository. Among the new issues reported, #105548 highlights a problem with GitHub integration, while #105556 raises a concern that the desktop "show sidebar" toggle icon appears too similar to a low-battery icon.

#### 🚀 New Releases
- [v2.1.312](https://github.com/anthropics/claude-code/releases/tag/v2.1.312) v2.1.312

#### ✅ Merged PRs
- [#105303](https://github.com/anthropics/claude-code/pull/105303) Install marketplace plugins from claude-plugins-official

#### 🐛 New Issues
- [#105548](https://github.com/anthropics/claude-code/issues/105548) [GitHub integration] `bug` `platform:web` `needs-info` `github-integration` 💬1
- [#105410](https://github.com/anthropics/claude-code/issues/105410) [GitHub integration] Scheduled cloud task gets invalid GH_TOKEN despite passing repo check `bug` `duplicate` `area:auth` `platform:web` 💬1
- [#105556](https://github.com/anthropics/claude-code/issues/105556) [FEATURE] Desktop: "show sidebar" toggle icon looks like a low-battery icon `enhancement` `platform:macos` `area:ui` `area:desktop`
- [#105555](https://github.com/anthropics/claude-code/issues/105555) [BUG] VS Code extension: bare /effort only prints usage instead of opening the Effort picker (works in the terminal) `bug` `platform:linux` `area:ide` `platform:vscode`
- [#105554](https://github.com/anthropics/claude-code/issues/105554) [BUG] Windows native auto-update interrupted mid-swap leaves claude.exe missing (no rollback) `bug` `platform:windows` `area:installation`
- [#105553](https://github.com/anthropics/claude-code/issues/105553) [MODEL] Fable 5.1 agent is not following its instructions any more for couple hours.. `bug` `area:model` `area:agents` `model`
- [#105551](https://github.com/anthropics/claude-code/issues/105551) [Windows] Bash tool calls stall for 10–17+ min before the shell starts after update to Claude Code 2.1.309 (Desktop 4.29.0) `bug` `has repro` `platform:windows` `area:bash`
- [#105552](https://github.com/anthropics/claude-code/issues/105552) [Feature Request] Repository refactoring support for non-LLM tasks `enhancement` `platform:linux`
- [#105550](https://github.com/anthropics/claude-code/issues/105550) Feature: Programmatic session self-rename for multi-session orchestration `duplicate` `enhancement` `platform:macos` `area:agents`
- [#105549](https://github.com/anthropics/claude-code/issues/105549) Plugin enabled only through a project's `enabledPlugins` doesn't load or install (headless, trusted or not) `bug` `has repro` `platform:macos` `area:plugins`
- [#105546](https://github.com/anthropics/claude-code/issues/105546) [BUG] [VS Code] A plugin's link above the prompt opens http://localhost in the system browser, not in VS Code's browser `bug` `platform:vscode` `area:plugins`
- [#105547](https://github.com/anthropics/claude-code/issues/105547) Claude in Chrome tools not registered at all (no mcp__claude-in-chrome__*, /chrome unknown) on 2.1.311/2.1.312, macOS + Dia `bug` `platform:macos` `area:mcp` `area:chrome`
- [#105533](https://github.com/anthropics/claude-code/issues/105533) [Bug] Overly broad content filter blocks benign computing content `bug` `platform:windows` `external` `area:model`
- [#105545](https://github.com/anthropics/claude-code/issues/105545) https://github.com/neka-nat/freecad-mcp `bug` `github-integration`
- [#105544](https://github.com/anthropics/claude-code/issues/105544) [Bug] Anthropic API Error: Overly aggressive `[cyber]` blocking for authorized security testing `bug` `duplicate` `platform:macos` `area:model`
- [#105543](https://github.com/anthropics/claude-code/issues/105543) General feedback: excellent session for non-lawyers navigating tax bureaucracy `enhancement`
- [#105542](https://github.com/anthropics/claude-code/issues/105542) [BUG] Bedrock: request sent with already-expired awsCredentialExport credentials while the refresh runs in the background `bug` `api:bedrock` `platform:linux` `area:auth`
- [#105541](https://github.com/anthropics/claude-code/issues/105541) [BUG] /terminal-setup refuses to run in Apple Terminal when the session runs on the background session host (no shift+enter in macos terminal) `bug` `platform:macos` `area:tui` `area:agent-view`
- [#105540](https://github.com/anthropics/claude-code/issues/105540) [BUG] Claude Code silently bills to an ANTHROPIC_API_KEY env var set for another app instead of the user's subscription `bug` `has repro` `platform:windows` `area:cost`

#### 🔒 Closed Issues
- [#105533](https://github.com/anthropics/claude-code/issues/105533) [Bug] Overly broad content filter blocks benign computing content

### OpenAI Codex (`openai/codex`)

**Stars:** 131,287 · **Open issues:** 25,130 · **Last push:** <1h ago

In the last 24 hours, OpenAI Codex released rust-v0.165.0, introducing several notable features including a built-in Google Cloud Vertex AI provider, GPT-6.1 Terra in the model catalogs, and improved navigation with a repository filter and directory grouping in the agent command center. Additionally, merged pull requests brought enhancements such as the addition of `codex doctor --network-only` for focused diagnostics, alongside support for catalog headings in saved command-prefix notices. One significant new issue reported is related to the VS Code extension 26.1021.22027, which is freezing the entire code-server editor, highlighting ongoing stability challenges with the tool's integration.

#### 🚀 New Releases
- [rust-v0.165.0](https://github.com/openai/codex/releases/tag/rust-v0.165.0) 0.165.0
- [rust-v0.166.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.4) 0.166.0-alpha.4
- [rust-v0.166.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.3) 0.166.0-alpha.3
- [rust-v0.166.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.2) 0.166.0-alpha.2
- [rust-v0.165.0-alpha.1.2](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1.2) 0.165.0-alpha.1.2

#### ✅ Merged PRs
- [#57618](https://github.com/openai/codex/pull/57618) Release sampling prompts after stream setup
- [#57615](https://github.com/openai/codex/pull/57615) Preserve rollout tracing across sub-agent reloads
- [#57612](https://github.com/openai/codex/pull/57612) Disable terminal status sequences on older VTE backends
- [#57607](https://github.com/openai/codex/pull/57607) Share runtime authentication with model providers and catalogs
- [#57606](https://github.com/openai/codex/pull/57606) Add `codex doctor --network-only` for focused network diagnostics
- [#57599](https://github.com/openai/codex/pull/57599) Support catalog headings for saved command-prefix notices
- [#57598](https://github.com/openai/codex/pull/57598) Cache empty remote skill discovery with filesystem watches
- [#57597](https://github.com/openai/codex/pull/57597) Preserve WebSocket probe evidence and redact diagnostic details
- [#57593](https://github.com/openai/codex/pull/57593) Remove empty local staging routing files
- [#57590](https://github.com/openai/codex/pull/57590) Ship `codex-exec-server` in CLI and app-server packages
- [#57589](https://github.com/openai/codex/pull/57589) Add a standalone `codex-exec-server` executable
- [#57586](https://github.com/openai/codex/pull/57586) Add host-reserved V2 child creation APIs
- [#57585](https://github.com/openai/codex/pull/57585) Replace unavailable image references in model requests
- [#57584](https://github.com/openai/codex/pull/57584) Preserve output boundaries through token truncation
- [#57581](https://github.com/openai/codex/pull/57581) Allow model catalogs to customize approval instruction headings
- [#57575](https://github.com/openai/codex/pull/57575) Refactor HTTP client construction and request execution
- [#57573](https://github.com/openai/codex/pull/57573) Add filesystem-free classification of intercepted patch commands
- [#57572](https://github.com/openai/codex/pull/57572) Support Apps tool catalogs without shared snapshots
- [#57569](https://github.com/openai/codex/pull/57569) Preserve process output and control replies under backpressure
- [#57568](https://github.com/openai/codex/pull/57568) Configure memory consolidation service tiers independently
- [#57567](https://github.com/openai/codex/pull/57567) Allow catalog URL overrides for the built-in OpenAI provider
- [#57564](https://github.com/openai/codex/pull/57564) Preserve rich composer content in Vim registers
- [#57563](https://github.com/openai/codex/pull/57563) Avoid retaining unneeded output items in HTTP response streams
- [#57554](https://github.com/openai/codex/pull/57554) Keep submitted prompts shaded when terminal colors are unavailable
- [#57553](https://github.com/openai/codex/pull/57553) Allow replacing dynamic tools between model steps
- [#57552](https://github.com/openai/codex/pull/57552) Expose and persist image generation IDs
- [#57542](https://github.com/openai/codex/pull/57542) Add model-gated literature search to standalone web search
- [#57538](https://github.com/openai/codex/pull/57538) Preserve host-assigned user input IDs in Responses messages
- [#57533](https://github.com/openai/codex/pull/57533) Release empty PID probe locks explicitly on Unix
- [#57522](https://github.com/openai/codex/pull/57522) Add isolated reviews to the guardian reviewer pool
- [#57519](https://github.com/openai/codex/pull/57519) Defer synchronous Guardian heartbeat compression to preparation
- [#57516](https://github.com/openai/codex/pull/57516) Add profile and provider status line items
- [#57515](https://github.com/openai/codex/pull/57515) Limit MXC volume expansion probes to symbolic links
- [#57514](https://github.com/openai/codex/pull/57514) Add experimental ChatGPT workspace switching to app-server
- [#57513](https://github.com/openai/codex/pull/57513) Replace the npm wrapper with the native binary using `execve`
- [#57512](https://github.com/openai/codex/pull/57512) Explicitly unlock daemon PID reservation probes on Unix
- [#57509](https://github.com/openai/codex/pull/57509) Extract Guardian planned-action assembly into the reviewer crate
- [#57508](https://github.com/openai/codex/pull/57508) Add a bounded V8 runtime for UI plugin processes
- [#57507](https://github.com/openai/codex/pull/57507) Resolve Guardian command path conventions inside `ReviewAction`
- [#57506](https://github.com/openai/codex/pull/57506) Move Guardian request mappings into the reviewer crate
- [#57504](https://github.com/openai/codex/pull/57504) Use the native clipboard for WSL SSH sessions with X11 forwarding
- [#57503](https://github.com/openai/codex/pull/57503) Fix macOS standalone release pruning
- [#57502](https://github.com/openai/codex/pull/57502) Preserve local image attachments when restoring killed text
- [#57501](https://github.com/openai/codex/pull/57501) Render escaped percent signs in TUI math
- [#57500](https://github.com/openai/codex/pull/57500) Add an option to omit descriptions from skill catalogs
- [#57494](https://github.com/openai/codex/pull/57494) Centralize synchronous Guardian context preparation
- [#57493](https://github.com/openai/codex/pull/57493) Move Guardian action JSON formatting into the reviewer crate
- [#57488](https://github.com/openai/codex/pull/57488) Move guardian prompt composition into the reviewer crate
- [#57483](https://github.com/openai/codex/pull/57483) Skip unrelated indexed rollouts during selected thread migration
- [#57478](https://github.com/openai/codex/pull/57478) Move Guardian approval request types into the reviewer crate

#### 🐛 New Issues
- [#57422](https://github.com/openai/codex/issues/57422) [VS Code / code-server] 26.1021.22027 (stable on Open VSX) freezes the entire code-server editor, not just the Codex view `bug` `windows-os` `extension` `performance` 💬6
- [#57610](https://github.com/openai/codex/issues/57610) Windows elevated sandbox: workspace root writable, nested directory access denied `bug` `windows-os` `extension` `sandbox` 💬2
- [#57368](https://github.com/openai/codex/issues/57368) VS Code extension 26.1021.22027 fails to load UI on Windows — renderer_ready_timeout `bug` `windows-os` `extension` 💬2
- [#57587](https://github.com/openai/codex/issues/57587) Codex 0.165.0: unmanaged Unix app-server retains a 1,024 FD soft limit `bug` `app` `app-server` 💬2
- [#57616](https://github.com/openai/codex/issues/57616) [Windows/Android Remote] Chat intermittently disappears from project list and never stays visibly pinned despite canonical Pinned section `bug` `windows-os` `app` `session` 💬1
- [#57617](https://github.com/openai/codex/issues/57617) Windows app 26.1023.6621.0: sandbox setup fails with helper_sandbox_lock_failed on protected .sandbox-bin ACL `bug` `windows-os` `sandbox` `app` 💬1
- [#57608](https://github.com/openai/codex/issues/57608) Automatic compaction loses active task: continuation receives environment-only user context despite preserved rollout `bug` `extension` `context` `session` 💬1
- [#57613](https://github.com/openai/codex/issues/57613) Windows Computer Use screenshots time out and mouse clicks fail while Browser Use works `bug` `windows-os` `app` `computer-use` 💬1
- [#57611](https://github.com/openai/codex/issues/57611) Subject: Windows in-app updates repeatedly fail; Microsoft Store “Retry” succeeds `bug` `windows-os` `app` 💬1
- [#57601](https://github.com/openai/codex/issues/57601) Dot cloud computer remains unavailable; browser-control calls time out while chat and connectors still work `bug` `windows-os` `iOS` `connectivity` 💬1
- [#57600](https://github.com/openai/codex/issues/57600) Codex could not start The extension could not start its user interface. `bug` `windows-os` `extension` 💬1
- [#57595](https://github.com/openai/codex/issues/57595) [Codex Desktop] 5-hour usage allowance drops to 0% almost instantly in one project (twice) `bug` `rate-limits` `app` 💬1
- [#57614](https://github.com/openai/codex/issues/57614) Windows: App Server command/exec times out on trivial cmd.exe command while standalone sandbox succeeds `bug` `windows-os` `sandbox` `CLI`
- [#57370](https://github.com/openai/codex/issues/57370) [Bug][Safari] Codex VS Code extension in browser-hosted VS Code cannot submit prompts: DisposableStack is undefined `bug` `extension`
- [#57609](https://github.com/openai/codex/issues/57609) macOS Connections: connected second Mac appears as generic “Mac,” obscuring successful pairing `bug` `app` `remote`
- [#57605](https://github.com/openai/codex/issues/57605) Restore an option to show colored host globes on every task, including Activity view `enhancement` `windows-os` `app` `remote`
- [#57604](https://github.com/openai/codex/issues/57604) Config option to set a minimum for the model's exec `yield_time_ms` `enhancement` `exec` `CLI` `config`
- [#57603](https://github.com/openai/codex/issues/57603) Windows stdio MCP initialize handshake closes in Codex — guidance on correlating launch diagnostics `documentation` `windows-os` `mcp` `connectivity`
- [#57602](https://github.com/openai/codex/issues/57602) [Dots][Voice] Delayed task-completion updates displace responses to the latest user turn `bug` `dots`
- [#57596](https://github.com/openai/codex/issues/57596) macOS desktop (Codex & OWL): typing ordinary letters unexpectedly switches views `bug` `app`

#### 🔒 Closed Issues
- [#55281](https://github.com/openai/codex/issues/55281) Codex / ChatGPT Work: Agent enters repetitive loops and rapidly exhausts usage limits

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,583 · **Open issues:** 782 · **Last push:** <1h ago

Today, Gemini CLI released version v0.67.0-nightly.20261028.gfa5c17365, which includes important fixes like allowing trusted system paths on Android for ripgrep resolution and normalizing CRLF line endings before diffing. The v0.67.0-preview.0 was also released, featuring updates to the changelogs for previous versions. Significant merged pull requests included a fix preventing duplicate history in the confirm_action flow and another that addresses handling terminals with ambiguous-width characters. There were no new issues reported in the last 24 hours.

#### 🚀 New Releases
- [v0.67.0-nightly.20261028.gfa5c17365](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261028.gfa5c17365) Release v0.67.0-nightly.20261028.gfa5c17365
- [v0.67.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-preview.0) Release v0.67.0-preview.0
- [v0.66.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0) Release v0.66.0

#### ✅ Merged PRs
- [#29995](https://github.com/google-gemini/gemini-cli/pull/29995) docs(readme): clarify Gemini CLI scope, limitations, and tool landscape
- [#29992](https://github.com/google-gemini/gemini-cli/pull/29992) Changelog for v0.66.0
- [#29990](https://github.com/google-gemini/gemini-cli/pull/29990) Changelog for v0.67.0-preview.0
- [#29974](https://github.com/google-gemini/gemini-cli/pull/29974) fix(cli): prevent duplicate history and double telemetry in confirm_action flow
- [#29905](https://github.com/google-gemini/gemini-cli/pull/29905) fix(cli): handle terminals that render ambiguous-width characters as wide
- [#29966](https://github.com/google-gemini/gemini-cli/pull/29966) fix(core): normalize CRLF line endings before diffing in getDiffContextSnippet
- [#29884](https://github.com/google-gemini/gemini-cli/pull/29884) fix(core): allow trusted system paths on Android (Termux) for ripgrep resolution (#21836)

#### 🔒 Closed Issues
- [#28805](https://github.com/google-gemini/gemini-cli/issues/28805) SUGESTÃO DE UX: Permitir renomear sessões no Session Browser de forma personalizada.
- [#28205](https://github.com/google-gemini/gemini-cli/issues/28205) bug: Gracefully handle failed extension updates in extension-manager.ts
- [#28798](https://github.com/google-gemini/gemini-cli/issues/28798) unassign-inactive-assignees treats any open PR as progress, so stale assignments never expire

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,300 · **Open issues:** 2,180 · **Last push:** 1h ago

On October 27, 2026, GitHub Copilot CLI released version v1.0.105, addressing an issue where selecting Copilot Fusion High or Max in the /model command now functions correctly during long-context sessions. This update was followed by v1.0.105-1, which included additional fixes, maintaining stability and performance. In terms of new issues, the most notable is #5270, which reports that the GPT-6.1 Sol is locking up during plan implementation, highlighting a significant challenge for users relying on this model. There were no merged PRs or other noteworthy features added to the system today, indicating a focus on resolving ongoing issues and improving existing functionality.

#### 🚀 New Releases
- [v1.0.105](https://github.com/github/copilot-cli/releases/tag/v1.0.105) 1.0.105
- [v1.0.105-1](https://github.com/github/copilot-cli/releases/tag/v1.0.105-1) 1.0.105-1
- [v1.0.105-0](https://github.com/github/copilot-cli/releases/tag/v1.0.105-0) 1.0.105-0
- [v1.0.104](https://github.com/github/copilot-cli/releases/tag/v1.0.104) 1.0.104

#### 🐛 New Issues
- [#5270](https://github.com/github/copilot-cli/issues/5270) GPT-6.1 Sol Locks up plan implementation `triage` 💬3
- [#5262](https://github.com/github/copilot-cli/issues/5262) 100 `invalid` 💬1
- [#5269](https://github.com/github/copilot-cli/issues/5269) ACP: plugin skills aren't available in ACP sessions, though the plugin's agents are `triage`
- [#5268](https://github.com/github/copilot-cli/issues/5268) ACP: /session delete, cleanup and prune fail with "sessionsApi ... is unavailable for this session" `triage`
- [#5267](https://github.com/github/copilot-cli/issues/5267) Org custom models on /chat/completions always fail with 400: CLI sends frequency_penalty/presence_penalty that providers reject (Google AI Studio, OpenAI-compatible) `triage`
- [#5266](https://github.com/github/copilot-cli/issues/5266) ACP: a retried model call streams the failed attempt's partial answer, the retry notice as answer text, then the full answer `triage`
- [#5265](https://github.com/github/copilot-cli/issues/5265) Input history (command-history-state.json) is last-writer-wins across concurrent copilot processes; prompts typed in one session are erased `triage`
- [#5264](https://github.com/github/copilot-cli/issues/5264) Prompt is discarded after 'Submission failed' (host-ack timeout): composer cleared, not saved to history, delivered late or never `triage`
- [#5263](https://github.com/github/copilot-cli/issues/5263) SessionClient poll loop keeps retrying after session disposal ("Cannot invoke native session after disposal has started"), leaking memory until heap OOM `triage`
- [#5261](https://github.com/github/copilot-cli/issues/5261) Hooks: include the tool call id in preToolUse, postToolUse and postToolUseFailure input `triage`

#### 🔒 Closed Issues
- [#310](https://github.com/github/copilot-cli/issues/310) Recurring Network error in Copilot CLI
- [#3869](https://github.com/github/copilot-cli/issues/3869) /ask feature un-useable due to answer being in a cramped text box
- [#5262](https://github.com/github/copilot-cli/issues/5262) 100

### OpenCode (`anomalyco/opencode`)

**Stars:** 222,402 · **Open issues:** 3,874 · **Last push:** <1h ago

On October 28, 2026, OpenCode released version 2.2.0, featuring the experimental capability to create, install, and share desktop plugins, along with a refreshed desktop app experience. Significant merged pull requests included fixes for the process-daemon, such as polling adjustments on Windows and block subscriptions instead of polling. Additionally, a notable fix addressed a changelog issue to maintain line breaks in code blocks. Among new issues, a concerning report was logged about OpenCode 2.1.4 potentially deleting all files associated with an active project without user warning.

#### 🚀 New Releases
- [v2.2.0](https://github.com/anomalyco/opencode/releases/tag/v2.2.0) v2.2.0

#### ✅ Merged PRs
- [#59702](https://github.com/anomalyco/opencode/pull/59702) fix(process-daemon): poll every 25 ms on Windows
- [#59701](https://github.com/anomalyco/opencode/pull/59701) fix(process-daemon): wait for readiness instead of polling
- [#59782](https://github.com/anomalyco/opencode/pull/59782) fix(ci): sign v1 with release environment credentials and publish only from v1
- [#59700](https://github.com/anomalyco/opencode/pull/59700) refactor(process-daemon): route stop and ownership through Control
- [#59768](https://github.com/anomalyco/opencode/pull/59768) fix(ci): import passwordless macOS signing certificate
- [#59764](https://github.com/anomalyco/opencode/pull/59764) feat(plugin): let composer pills render their own popover content
- [#59762](https://github.com/anomalyco/opencode/pull/59762) fix(changelog): keep line breaks in code blocks
- [#59761](https://github.com/anomalyco/opencode/pull/59761) fix(update): only apply minimum versions on stable channels
- [#59760](https://github.com/anomalyco/opencode/pull/59760) fix(ci): sign macOS builds with release environment credentials
- [#59728](https://github.com/anomalyco/opencode/pull/59728) chore: update nix node_modules hashes
- [#59744](https://github.com/anomalyco/opencode/pull/59744) chore(deps): refresh source-map-js in lockfile
- [#59698](https://github.com/anomalyco/opencode/pull/59698) fix(process-daemon): block subscriptions instead of polling
- [#59697](https://github.com/anomalyco/opencode/pull/59697) feat(process-daemon): support a private Unix socket directory
- [#59695](https://github.com/anomalyco/opencode/pull/59695) chore(process-daemon): publish from the monorepo

#### 🐛 New Issues
- [#59788](https://github.com/anomalyco/opencode/issues/59788) OpenCode (2.1.4) will delete all files on the same dish of an active project without noticing user `triaging` 💬3
- [#59796](https://github.com/anomalyco/opencode/issues/59796) opencode v2 (npm) error launch on windows `pending close` `triaging` 💬2
- [#59802](https://github.com/anomalyco/opencode/issues/59802) [FEATURE]: GUI plugins: a panel view on Home (Panel.home, layout.home) 💬1
- [#59801](https://github.com/anomalyco/opencode/issues/59801) [FEATURE]: GUI plugins: createVisitState for drafts, and layout.current() for the target on screen 💬1
- [#59800](https://github.com/anomalyco/opencode/issues/59800) [FEATURE]: GUI plugins: Command.scopeLabel, shown beside scoped shortcuts in Settings › Shortcuts 💬1
- [#59799](https://github.com/anomalyco/opencode/issues/59799) [FEATURE]: GUI plugins: let a source build omit a built-in GUI plugin 💬1
- [#59798](https://github.com/anomalyco/opencode/issues/59798) [FEATURE]: GUI plugins: let a LinkHandler claim external http(s) links from session content 💬1
- [#59797](https://github.com/anomalyco/opencode/issues/59797) [FEATURE]: GUI plugins: a text, path-matched file presentation (FileViewer covers binary kinds only) 💬1
- [#59791](https://github.com/anomalyco/opencode/issues/59791) web: side-panel "Open file" is a silent no-op on insecure HTTP origins (v2.2.0 regression) `reproduced` 💬1
- [#59794](https://github.com/anomalyco/opencode/issues/59794) session: all history images are re-sent on every request, permanently breaking sessions on image-capped backends 💬1
- [#59789](https://github.com/anomalyco/opencode/issues/59789) ACP: a failed model or agent switch still changes the selection `reproduced` 💬1
- [#59792](https://github.com/anomalyco/opencode/issues/59792) ACP: attachment filenames stay URL-encoded `reproduced` 💬1

#### 🔒 Closed Issues
- [#59796](https://github.com/anomalyco/opencode/issues/59796) opencode v2 (npm) error launch on windows
- [#59802](https://github.com/anomalyco/opencode/issues/59802) [FEATURE]: GUI plugins: a panel view on Home (Panel.home, layout.home)
- [#59801](https://github.com/anomalyco/opencode/issues/59801) [FEATURE]: GUI plugins: createVisitState for drafts, and layout.current() for the target on screen
- [#59800](https://github.com/anomalyco/opencode/issues/59800) [FEATURE]: GUI plugins: Command.scopeLabel, shown beside scoped shortcuts in Settings › Shortcuts
- [#59799](https://github.com/anomalyco/opencode/issues/59799) [FEATURE]: GUI plugins: let a source build omit a built-in GUI plugin
- [#59798](https://github.com/anomalyco/opencode/issues/59798) [FEATURE]: GUI plugins: let a LinkHandler claim external http(s) links from session content
- [#59797](https://github.com/anomalyco/opencode/issues/59797) [FEATURE]: GUI plugins: a text, path-matched file presentation (FileViewer covers binary kinds only)

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,757 · **Open issues:** 2,082 · **Last push:** <1h ago

On October 28, 2026, Qwen Code released version v0.26.3-preview.0, introducing an opt-in extraction cadence after a no-op run and fixing core issues regarding outer XML calls and tool shrinking. The previously released v0.26.2 included notable breaking changes that simplified Web Shell controls, while v0.26.2-preview.1 enhanced session permission rules and auto approval. Additionally, merged pull request #15422 added a persistent session Workflow mode, contributing to the overall feature set. A significant new issue emerged regarding a CI flaky with the web-shell history-viewport, which exhausted its time budget, highlighting ongoing challenges in performance stability.

#### 🚀 New Releases
- [v0.26.3-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.3-preview.0) Release v0.26.3-preview.0
- [v0.26.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.2) Release v0.26.2
- [v0.26.2-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.2-preview.1) Release v0.26.2-preview.1
- [sdk-typescript-v0.1.24](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.24) SDK TypeScript Release v0.1.24

#### ✅ Merged PRs
- [#15422](https://github.com/QwenLM/qwen-code/pull/15422) feat: add persistent session Workflow mode (DW-04A)

#### 🐛 New Issues
- [#15697](https://github.com/QwenLM/qwen-code/issues/15697) ci(flaky): web-shell history-viewport 200-record smoke case burns its 120s budget after Scroll to bottom `priority/P2` `type/bug` `category/development` `scope/testing` 💬4
- [#15690](https://github.com/QwenLM/qwen-code/issues/15690) Homebrew install of 0.26.1 cannot rewrite libopentui.dylib install name (@opentui/core-darwin-arm64 lacks -headerpad_max_install_names) `priority/P2` `type/bug` `category/platform` `scope/macos` 💬4
- [#15691](https://github.com/QwenLM/qwen-code/issues/15691) Follow up on simple composer coverage and UI polish `priority/P3` `status/on-hold` `category/ui` `scope/testing` 💬3
- [#15707](https://github.com/QwenLM/qwen-code/issues/15707) Deferred review Suggestions from PR #15625 (/verify-pr PR binding) `priority/P3` `type/documentation` `category/cli` `scope/commands` 💬3
- [#15739](https://github.com/QwenLM/qwen-code/issues/15739) Main CI failed: E2E Tests — cli/workflow-mode.test.ts > … > rejects unavailable on before any provider request (+1 more) `status/needs-triage` `type/bug` 💬2
- [#15742](https://github.com/QwenLM/qwen-code/issues/15742) bug(core): a native api.anthropic.com session 400s forever when a persisted thinking part lost its signature `priority/P1` `type/bug` `category/core` `scope/content-generation` 💬2
- [#15741](https://github.com/QwenLM/qwen-code/issues/15741) MCP: duplicate tool names discard the entire server and emit a misleading 'no tools' error `priority/P2` `type/bug` `category/tools` `scope/mcp` 💬2
- [#15738](https://github.com/QwenLM/qwen-code/issues/15738) Team mode: teammate messages are never delivered to the leader in ACP mode (`qwen serve --web`), and the team dies with the short-lived ACP child `priority/P2` `type/bug` `category/core` `roadmap/multi-agent` 💬2
- [#15705](https://github.com/QwenLM/qwen-code/issues/15705) release: close the failure-notification issue once a re-run of the same run succeeds `priority/P2` `type/bug` `scope/github-actions` `scope/ci-cd` 💬2
- [#15706](https://github.com/QwenLM/qwen-code/issues/15706) ci(flaky): ContextInstallationFaultGateTest lets an unattested managed worker become READY (SDK Java fault gates) `priority/P2` `type/bug` `category/development` `scope/testing` 💬2
- [#15704](https://github.com/QwenLM/qwen-code/issues/15704) bug(cli): session-token-limit and blocked-prompt refusals still replay the last answer in stream-json `priority/P2` `type/bug` `category/cli` `scope/non-interactive` 💬2
- [#15702](https://github.com/QwenLM/qwen-code/issues/15702) Expose capability-gated session-only model selection in daemon SDK `priority/P2` `type/feature-request` `category/integration` `scope/model-switching` 💬2
- [#15700](https://github.com/QwenLM/qwen-code/issues/15700) fix(managed-agent): close the deferred scanner summary-diagnostics suggestions from #15632 `priority/P3` `type/bug` `category/core` `scope/logging` 💬2
- [#15740](https://github.com/QwenLM/qwen-code/issues/15740) Release Failed for v0.26.2-nightly.20261027.127c2ab904 on 2026-10-27 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15727](https://github.com/QwenLM/qwen-code/issues/15727) Release Failed for v0.26.2 on 2026-10-27 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15726](https://github.com/QwenLM/qwen-code/issues/15726) Release Failed for v0.26.2-preview.1 on 2026-10-27 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15721](https://github.com/QwenLM/qwen-code/issues/15721) Release Failed for v0.26.2 on 2026-10-27 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#15698](https://github.com/QwenLM/qwen-code/issues/15698) Main CI failed: Qwen Code CI — scripts/tests/workflow-size.test.js > … > .github/workflows/ci.yml is within its baseline allowance `status/needs-triage` `type/bug` 💬1
- [#15744](https://github.com/QwenLM/qwen-code/issues/15744) Main CI failed: SDK Java — HostedWorkflowRelayFaultGatesIT.fg10bLostRepliesNeverRunAWorkflowTwiceOnMySql `status/needs-triage` `type/bug`
- [#15737](https://github.com/QwenLM/qwen-code/issues/15737) Main CI failed: Qwen Code CI — src/commands/review/cleanup.test.ts > … > keeps the run alive when the post-kill UNLINK fails `status/needs-triage` `type/bug`
- [#15735](https://github.com/QwenLM/qwen-code/issues/15735) Main CI failed: Desktop Checks — Desktop Checks > … > Run actions/checkout@df4cb1c069e1874edd31b4311f1884172cec0e10 `status/needs-triage` `type/bug`
- [#15722](https://github.com/QwenLM/qwen-code/issues/15722) Main CI failed: Managed Agent gate — HostedHarnessPoolClientTest.explicitTlsContextAuthenticatesPeerAndKeepsHostnameVerification(Path) `status/needs-triage` `type/bug`
- [#15712](https://github.com/QwenLM/qwen-code/issues/15712) Main CI failed: E2E Tests — interactive/tui-foreground-shell.test.ts > keeps PTY bytes and composer drafts with their actual input owner `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#15527](https://github.com/QwenLM/qwen-code/issues/15527) managed-agent: follow-ups recorded after the automation scanner row pool merged (#15442)
- [#2566](https://github.com/QwenLM/qwen-code/issues/2566) feat(core): dynamic tool output truncation based on context pressure
- [#15672](https://github.com/QwenLM/qwen-code/issues/15672) Release Failed for v0.26.2-preview.0 on 2026-10-26
- [#11056](https://github.com/QwenLM/qwen-code/issues/11056) Deferred review findings from PR #11046
- [#15677](https://github.com/QwenLM/qwen-code/issues/15677) ci(tui-parity): installed-distribution darwin-x64 leg fails 5 of 6 runs on GitHub-hosted macos-15-intel (30s ready-prompt budget)
- [#15647](https://github.com/QwenLM/qwen-code/issues/15647) feat(web-shell): add a configurable simple input mode
- [#15705](https://github.com/QwenLM/qwen-code/issues/15705) release: close the failure-notification issue once a re-run of the same run succeeds
- [#12667](https://github.com/QwenLM/qwen-code/issues/12667) Deferred review findings from PR #12183: feat(extensions): load deployment-managed extensions from a directory
- [#15087](https://github.com/QwenLM/qwen-code/issues/15087) Release Failed for v0.26.0 on 2026-10-21
- [#15698](https://github.com/QwenLM/qwen-code/issues/15698) Main CI failed: Qwen Code CI — scripts/tests/workflow-size.test.js > … > .github/workflows/ci.yml is within its baseline allowance

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

**Stars:** 393,225 · **Open issues:** 7,677 · **Last push:** <1h ago

On October 28, 2026, OpenClaw released version 2026.10.10-beta.4, which includes significant improvements to automations by preserving authenticated operator authority for scheduled follow-ups, as well as enhancements to gateway security. The previous release, 2026.10.8, addressed various update failures and improved the Gateway's recovery processes, ensuring smoother operation after updates. Key merged features included performance optimizations in session management and fixes for multiple bug reports related to Windows onboarding issues and the handling of memory indexes. Notably, a concerning new issue was raised regarding a silent exit of the command `openclaw memory index` on SIGTERM, which leads to an orphaned shadow database.

#### 🚀 New Releases
- [v2026.10.10-beta.4](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.4) openclaw 2026.10.10-beta.4
- [v2026.10.8](https://github.com/openclaw/openclaw/releases/tag/v2026.10.8) openclaw 2026.10.8
- [v2026.9.35](https://github.com/openclaw/openclaw/releases/tag/v2026.9.35) openclaw 2026.9.35

#### ✅ Merged PRs
- [#186429](https://github.com/openclaw/openclaw/pull/186429) refactor(test): flatten backup singleton cases
- [#186278](https://github.com/openclaw/openclaw/pull/186278) fix(sandbox): prevent missing workspace baselines after cleanup
- [#186402](https://github.com/openclaw/openclaw/pull/186402) docs: clarify Draft session startup
- [#186422](https://github.com/openclaw/openclaw/pull/186422) perf(sqlite): clone admission scope buckets directly
- [#186427](https://github.com/openclaw/openclaw/pull/186427) chore(i18n): refresh native locales
- [#184524](https://github.com/openclaw/openclaw/pull/184524) fix: streamed replies that quote an empty command output no longer re-scan the whole reply per delta
- [#186438](https://github.com/openclaw/openclaw/pull/186438) chore(ui): refresh control ui locales
- [#186240](https://github.com/openclaw/openclaw/pull/186240) fix(perf): discard terminated worker subtrees from native profiles
- [#186139](https://github.com/openclaw/openclaw/pull/186139) fix(update): preserve check budgets after slow candidate snapshots
- [#184502](https://github.com/openclaw/openclaw/pull/184502) fix(gateway): scope session events and mention notifications
- [#174828](https://github.com/openclaw/openclaw/pull/174828) docs(subagents): unclear which account a sessions_spawn child uses
- [#185945](https://github.com/openclaw/openclaw/pull/185945) fix(claude-cli): keep each steered input's own origin and context
- [#186421](https://github.com/openclaw/openclaw/pull/186421) perf(sessions): reuse owner selection facts revisions
- [#183737](https://github.com/openclaw/openclaw/pull/183737) docs: Windows token recovery uses the CMD launcher when PowerShell blocks openclaw
- [#186411](https://github.com/openclaw/openclaw/pull/186411) fix(update): stop update cleanup from failing its own destination check
- [#185966](https://github.com/openclaw/openclaw/pull/185966) fix(update): npm preinstall runs on the shell's older Node after the updater selects the managed Gateway Node
- [#186423](https://github.com/openclaw/openclaw/pull/186423) fix(test): join probe commands before fixture cleanup
- [#183557](https://github.com/openclaw/openclaw/pull/183557) fix(ios): show tool counts in completed work summaries
- [#186056](https://github.com/openclaw/openclaw/pull/186056) perf(control-ui): preserve cached header through reconnect
- [#178347](https://github.com/openclaw/openclaw/pull/178347) docs(update): image-based hosts stay down after an upgrade until Doctor runs
- [#183018](https://github.com/openclaw/openclaw/pull/183018) fix(ui): keep guest access guidance in Profile without Inbox warnings
- [#186400](https://github.com/openclaw/openclaw/pull/186400) fix(ci): dependency checks fail on recovery admission formatter
- [#181339](https://github.com/openclaw/openclaw/pull/181339) fix(ios): chat hides narration after a run finishes
- [#186337](https://github.com/openclaw/openclaw/pull/186337) fix: keep recovery notifications quiet on October backport
- [#186323](https://github.com/openclaw/openclaw/pull/186323) fix: previous chat answer stays hidden when a late exec completion arrives
- [#178715](https://github.com/openclaw/openclaw/pull/178715) fix: hear Google Meet participants using WebAudio playback
- [#186401](https://github.com/openclaw/openclaw/pull/186401) fix: preserve durable notes before context overflow recovery
- [#183267](https://github.com/openclaw/openclaw/pull/183267) fix(ui): chat hides narration after a run finishes
- [#186397](https://github.com/openclaw/openclaw/pull/186397) perf(cron): avoid repeated definition hashing during publication
- [#186406](https://github.com/openclaw/openclaw/pull/186406) refactor(test): share CLI process lifetime handling
- [#183239](https://github.com/openclaw/openclaw/pull/183239) feat(mattermost): stop bot-to-bot reply loops and add allowBots
- [#186398](https://github.com/openclaw/openclaw/pull/186398) perf(ai): reuse frozen Responses history conversions
- [#184611](https://github.com/openclaw/openclaw/pull/184611) fix: preserve agent idle budgets across wall-clock changes
- [#186037](https://github.com/openclaw/openclaw/pull/186037) fix(memory-lancedb): keep the cold-start embed deadline on the monotonic clock
- [#186403](https://github.com/openclaw/openclaw/pull/186403) fix: include observed usage in inference JSON
- [#186380](https://github.com/openclaw/openclaw/pull/186380) fix(cli): keep the conversation when a stopped first Claude CLI turn has no operator authority
- [#186279](https://github.com/openclaw/openclaw/pull/186279) chore(ci): trace database worker ratchet phases
- [#186394](https://github.com/openclaw/openclaw/pull/186394) perf(workboard): reuse static tool schemas across turns
- [#186368](https://github.com/openclaw/openclaw/pull/186368) fix: default cron retries leave time for model fallback
- [#186389](https://github.com/openclaw/openclaw/pull/186389) perf(gateway): reuse ancestor child contributions
- [#186375](https://github.com/openclaw/openclaw/pull/186375) fix: hide pending tool-call text from channel previews
- [#186404](https://github.com/openclaw/openclaw/pull/186404) chore(ui): refresh control ui locales
- [#186044](https://github.com/openclaw/openclaw/pull/186044) fix: show agent avatars with streamed responses
- [#186290](https://github.com/openclaw/openclaw/pull/186290) fix: keep dictation settings from changing the chat model
- [#186288](https://github.com/openclaw/openclaw/pull/186288) fix(agents): avoid oversized raw history in final answers
- [#186378](https://github.com/openclaw/openclaw/pull/186378) fix: same-requester guidance queues after reconnecting
- [#186382](https://github.com/openclaw/openclaw/pull/186382) fix(compaction): preserve terminal facts from long tool output
- [#183803](https://github.com/openclaw/openclaw/pull/183803) fix(a2a): complete tasks queued behind an active turn
- [#186395](https://github.com/openclaw/openclaw/pull/186395) fix(agents): personal_instructions fails every turn when a Gateway tool policy lists its actions
- [#186316](https://github.com/openclaw/openclaw/pull/186316) fix(ui): keep agent names through offline reloads and reconnects
- [#186374](https://github.com/openclaw/openclaw/pull/186374) perf(gateway): share retained membership participant projections
- [#186338](https://github.com/openclaw/openclaw/pull/186338) fix: keep conversation prompts stable across continuation turns
- [#185922](https://github.com/openclaw/openclaw/pull/185922) chore(release): close out 2026.10.8 on main
- [#186371](https://github.com/openclaw/openclaw/pull/186371) fix(ci): restore October backport CI coverage
- [#184835](https://github.com/openclaw/openclaw/pull/184835) docs: explain why explicit browser private-network false blocks hostnames
- [#183345](https://github.com/openclaw/openclaw/pull/183345) fix: reduce repeated scans in assistant prose streams
- [#144862](https://github.com/openclaw/openclaw/pull/144862) feat(notifications): identify completed sessions by explicit labels
- [#186030](https://github.com/openclaw/openclaw/pull/186030) fix(ui): identify source sessions in approval titles
- [#183637](https://github.com/openclaw/openclaw/pull/183637) feat(models): let a provider behind a local relay keep the hosted idle timeout
- [#186354](https://github.com/openclaw/openclaw/pull/186354) fix(cron): explain how to repair rejected reminder requests
- [#186081](https://github.com/openclaw/openclaw/pull/186081) fix(channels): stop repeating answered messages in recent chat history
- [#186340](https://github.com/openclaw/openclaw/pull/186340) fix(signal): container transport stops receiving messages after a silent network drop
- [#186351](https://github.com/openclaw/openclaw/pull/186351) fix(ios): generate Swift file lists without TSX
- [#186386](https://github.com/openclaw/openclaw/pull/186386) fix(update): report why SQLite snapshot stabilization gave up
- [#186108](https://github.com/openclaw/openclaw/pull/186108) fix(mcp): stop hiding tools selected by probe name
- [#186121](https://github.com/openclaw/openclaw/pull/186121) perf(agents): move sandbox pruning off run start
- [#183246](https://github.com/openclaw/openclaw/pull/183246) fix(plugins): tool hooks cannot tell the memory flush from a non-owner turn
- [#181528](https://github.com/openclaw/openclaw/pull/181528) fix(codex): preserve protected scheduled continuations
- [#186373](https://github.com/openclaw/openclaw/pull/186373) perf(process): avoid decoding child memory samples
- [#185293](https://github.com/openclaw/openclaw/pull/185293) fix: long streamed HTML/JSX replies no longer re-project the whole reply at every partial tag
- [#186379](https://github.com/openclaw/openclaw/pull/186379) test: consolidate repeated runtime and plugin fixtures
- [#186054](https://github.com/openclaw/openclaw/pull/186054) improve: compact model-change notices with provider logos
- [#186385](https://github.com/openclaw/openclaw/pull/186385) fix: restore subagent completion fallback coverage
- [#186298](https://github.com/openclaw/openclaw/pull/186298) fix: honor LM Studio thinking modes in chat
- [#186359](https://github.com/openclaw/openclaw/pull/186359) chore(release): update appcast for 2026.10.8
- [#186296](https://github.com/openclaw/openclaw/pull/186296) fix: keep session lists usable during provider reloads
- [#183547](https://github.com/openclaw/openclaw/pull/183547) fix(database): split punctuation-joined tokens in PostgreSQL keyword search like SQLite FTS5
- [#183380](https://github.com/openclaw/openclaw/pull/183380) docs: explain desktop chat shortcuts and IME confirmation
- [#186357](https://github.com/openclaw/openclaw/pull/186357) fix(ui): preserve Daybreak toggle activation during streamed updates
- [#186377](https://github.com/openclaw/openclaw/pull/186377) fix(ui): restore inherited active rail icon colors
- [#183490](https://github.com/openclaw/openclaw/pull/183490) fix(a2a): keep finished tasks available after Gateway restarts
- [#186370](https://github.com/openclaw/openclaw/pull/186370) perf(auth): reduce allocations from unrelated file watcher events
- [#186286](https://github.com/openclaw/openclaw/pull/186286) improve(android): shorten store release source checkout
- [#186306](https://github.com/openclaw/openclaw/pull/186306) fix(agents): retain skill guidance for reader-enabled routines
- [#183217](https://github.com/openclaw/openclaw/pull/183217) fix(telegram): table replies stall the Gateway on a long zero-width cell
- [#186223](https://github.com/openclaw/openclaw/pull/186223) fix(update): Android/Termux foreground Gateways cannot verify their identity for updates
- [#186225](https://github.com/openclaw/openclaw/pull/186225) fix(ui): keep sidebar status left without shifting titles
- [#186372](https://github.com/openclaw/openclaw/pull/186372) chore(ui): refresh control ui locales
- [#186300](https://github.com/openclaw/openclaw/pull/186300) fix: preserve output headroom during local-model tool calls
- [#186250](https://github.com/openclaw/openclaw/pull/186250) perf: share delegated update authority snapshots
- [#186297](https://github.com/openclaw/openclaw/pull/186297) fix(cli): report interrupted commands before cleanup
- [#181631](https://github.com/openclaw/openclaw/pull/181631) fix(ui): keep two-line sidebar titles readable with touch controls
- [#185007](https://github.com/openclaw/openclaw/pull/185007) fix(memory-core): dream diary writes fail when the gateway user doesn't own the workspace
- [#167122](https://github.com/openclaw/openclaw/pull/167122) feat(agent): read piped messages in ordinary agent turns
- [#186362](https://github.com/openclaw/openclaw/pull/186362) test(ui): update theme surface checks for participant palettes
- [#186274](https://github.com/openclaw/openclaw/pull/186274) improve(doctor): stop copying bundled plugin operation code on every Doctor contract load
- [#185477](https://github.com/openclaw/openclaw/pull/185477) feat: make busy-session messages automatic with coherent security presets
- [#183165](https://github.com/openclaw/openclaw/pull/183165) fix(agents): recover deferred tool calls through native correction
- [#186348](https://github.com/openclaw/openclaw/pull/186348) perf(state): attribute SQLite payload bytes by request class
- [#186342](https://github.com/openclaw/openclaw/pull/186342) fix(ui): prevent hidden-run read floods after reconnecting
- [#186312](https://github.com/openclaw/openclaw/pull/186312) fix(update): name the next step when update repair leaves the Gateway stopped
- [#186304](https://github.com/openclaw/openclaw/pull/186304) fix: avoid compaction from expired Anthropic runtime context
- [#186363](https://github.com/openclaw/openclaw/pull/186363) fix(ui): keep attachment regression checks aligned with preview design
- [#186025](https://github.com/openclaw/openclaw/pull/186025) fix(ui): show People totals only when collapsed
- [#186251](https://github.com/openclaw/openclaw/pull/186251) perf: avoid redundant update Doctor close probes
- [#185828](https://github.com/openclaw/openclaw/pull/185828) fix(update): keep package-manager discovery probes non-interactive
- [#186310](https://github.com/openclaw/openclaw/pull/186310) fix(memory): accept mixed-case none and auto providers
- [#186289](https://github.com/openclaw/openclaw/pull/186289) fix(discord): recover stalled inbound retries and report dead letters
- [#186329](https://github.com/openclaw/openclaw/pull/186329) fix(gateway): match canonically equivalent workspace filenames in file search
- [#186345](https://github.com/openclaw/openclaw/pull/186345) fix(ui): remove duplicate iPhone attachment choices
- [#186302](https://github.com/openclaw/openclaw/pull/186302) fix: keep channel restart recovery quiet until it settles
- [#186321](https://github.com/openclaw/openclaw/pull/186321) fix: publish and plugin-reload resumes lose owner access and falsely refuse publication
- [#186353](https://github.com/openclaw/openclaw/pull/186353) perf(sessions): select retained sidebar pages without sorting the roster
- [#186356](https://github.com/openclaw/openclaw/pull/186356) fix: stabilize Activity tests around queued live events
- [#186355](https://github.com/openclaw/openclaw/pull/186355) fix(update): recover when the package publication journal no longer matches the installation
- [#186322](https://github.com/openclaw/openclaw/pull/186322) test(ui): add required braces to palette browser fixtures
- [#186335](https://github.com/openclaw/openclaw/pull/186335) perf(gateway): reuse session delta hashes across row samples
- [#186221](https://github.com/openclaw/openclaw/pull/186221) fix(update): Windows package swap rolls back when a scanner holds a staged file
- [#184529](https://github.com/openclaw/openclaw/pull/184529) fix: block-streaming replies no longer post tool-call arguments
- [#185947](https://github.com/openclaw/openclaw/pull/185947) test(ui): prove resumed handoff list re-renders on child name and attention changes
- [#186294](https://github.com/openclaw/openclaw/pull/186294) perf(worktrees): avoid a duplicate cold object census
- [#186211](https://github.com/openclaw/openclaw/pull/186211) perf(state): coalesce neighboring audit writer requests
- [#186267](https://github.com/openclaw/openclaw/pull/186267) feat(knowledge): reloading Knowledge no longer waits for running agent turns
- [#186347](https://github.com/openclaw/openclaw/pull/186347) refactor: keep Knowledge scribe run prompt private
- [#186325](https://github.com/openclaw/openclaw/pull/186325) fix(ui): recover quickly when spotty connections return
- [#186275](https://github.com/openclaw/openclaw/pull/186275) fix(matrix): avoid deleted-message placeholders after streamed replies
- [#186336](https://github.com/openclaw/openclaw/pull/186336) fix(ui): keep Systems worker lifecycle current without reload
- [#186261](https://github.com/openclaw/openclaw/pull/186261) fix: recover sandbox startup when the host keyring quota is exhausted
- [#186315](https://github.com/openclaw/openclaw/pull/186315) perf(sessions): batch cold transcript restoration writes
- [#186237](https://github.com/openclaw/openclaw/pull/186237) fix(workspace): recover retained files across mounts
- [#186258](https://github.com/openclaw/openclaw/pull/186258) fix: refuse preparation after an imported PR changes base branch
- [#186245](https://github.com/openclaw/openclaw/pull/186245) perf(cron): reuse read workers and skip no-op scheduler refreshes
- [#186247](https://github.com/openclaw/openclaw/pull/186247) fix(sandbox): explain inaccessible skills mountpoints
- [#186201](https://github.com/openclaw/openclaw/pull/186201) fix(sqlite): reclaim abandoned fs-safe snapshot payloads
- [#186182](https://github.com/openclaw/openclaw/pull/186182) perf(gateway): reuse goal and model search vocabulary
- [#186299](https://github.com/openclaw/openclaw/pull/186299) perf(sandbox): skip probes for extinct stream writers
- [#186273](https://github.com/openclaw/openclaw/pull/186273) perf(gateway): skip unused patch response thinking projection
- [#186234](https://github.com/openclaw/openclaw/pull/186234) perf(state): compact actor lifecycle receipts
- [#186238](https://github.com/openclaw/openclaw/pull/186238) fix(agents): preserve child follow-ups across model changes
- [#186256](https://github.com/openclaw/openclaw/pull/186256) perf(gateway): skip redundant agent and mention list preparation
- [#186246](https://github.com/openclaw/openclaw/pull/186246) fix: source Gateway exits when another pnpm openclaw command runs in a dirty checkout
- [#186277](https://github.com/openclaw/openclaw/pull/186277) perf(agents): avoid plugin access checks for watchdog progress
- [#186293](https://github.com/openclaw/openclaw/pull/186293) perf(gateway): reuse selected rows during list preparation
- [#186232](https://github.com/openclaw/openclaw/pull/186232) fix(ui): composer jitters when a draft reaches its height cap in Safari
- [#186260](https://github.com/openclaw/openclaw/pull/186260) perf(agents): reuse Anthropic request bytes for diagnostics
- [#186292](https://github.com/openclaw/openclaw/pull/186292) perf(diagnostics): expose archive worker native buffer usage
- [#186305](https://github.com/openclaw/openclaw/pull/186305) fix(doctor): keep invalid heartbeat quiet hours instead of migrating them away
- [#186241](https://github.com/openclaw/openclaw/pull/186241) perf(gateway): reduce cached GitHub preview overhead
- [#186291](https://github.com/openclaw/openclaw/pull/186291) perf(state): omit duplicate pending-input replies
- [#186236](https://github.com/openclaw/openclaw/pull/186236) perf(plugins): reduce session-action JSON validation allocation
- [#186230](https://github.com/openclaw/openclaw/pull/186230) perf(plugins): skip writer requests for occupied state claims
- [#186320](https://github.com/openclaw/openclaw/pull/186320) perf(agents): defer Codex workspace readiness until tool execution
- [#186307](https://github.com/openclaw/openclaw/pull/186307) fix(doctor): keep a recreated HEARTBEAT.md from blocking after a completed cutover
- [#186343](https://github.com/openclaw/openclaw/pull/186343) docs: restore 2026.10.8 release counts
- [#186265](https://github.com/openclaw/openclaw/pull/186265) perf(gateway): reuse fixed board sandbox policy
- [#186287](https://github.com/openclaw/openclaw/pull/186287) fix(gateway): wait for recovery readiness in chat fixtures
- [#186330](https://github.com/openclaw/openclaw/pull/186330) fix: stabilize live-text subscription fixture
- [#186164](https://github.com/openclaw/openclaw/pull/186164) fix: open Tailscale conversation links without another login
- [#186280](https://github.com/openclaw/openclaw/pull/186280) perf(sessions): skip unchanged subagent timing writes
- [#186203](https://github.com/openclaw/openclaw/pull/186203) fix: path find matches nonexistent Markdown field suffixes
- [#186318](https://github.com/openclaw/openclaw/pull/186318) chore: register maintained performance analysis roots
- [#186319](https://github.com/openclaw/openclaw/pull/186319) chore(ui): refresh control ui locales
- [#186317](https://github.com/openclaw/openclaw/pull/186317) docs: use version-only release labels [skip ci]
- [#186210](https://github.com/openclaw/openclaw/pull/186210) perf(sessions): avoid rescanning clean checkout diffs
- [#186148](https://github.com/openclaw/openclaw/pull/186148) perf(gateway): skip empty search fields and parentless navigation work
- [#186249](https://github.com/openclaw/openclaw/pull/186249) perf(gateway): reduce allocation in tool-heavy chat history
- [#186032](https://github.com/openclaw/openclaw/pull/186032) fix(ui): keep repeated chat messages separate
- [#185821](https://github.com/openclaw/openclaw/pull/185821) fix(ui): keep chat colors and links readable across themes
- [#186160](https://github.com/openclaw/openclaw/pull/186160) fix(test): prevent cold artifact reads racing database preparation
- [#186268](https://github.com/openclaw/openclaw/pull/186268) perf(sessions): reuse message envelopes for append reload decisions
- [#186264](https://github.com/openclaw/openclaw/pull/186264) perf(workspace): skip unchanged base-refresh source preparation
- [#186035](https://github.com/openclaw/openclaw/pull/186035) fix(ui): keep delivery recovery actions from overlapping
- [#183867](https://github.com/openclaw/openclaw/pull/183867) perf(ui): stop shipping a duplicate keyboard-hint stylesheet
- [#186269](https://github.com/openclaw/openclaw/pull/186269) fix(test): identity menu keyboard test fails when navigation loads slowly
- [#186242](https://github.com/openclaw/openclaw/pull/186242) docs: add 2026.10.8 patch release notes
- [#186009](https://github.com/openclaw/openclaw/pull/186009) fix(ui): size approval details to their content
- [#185247](https://github.com/openclaw/openclaw/pull/185247) fix: make plugin detail URLs readable
- [#186220](https://github.com/openclaw/openclaw/pull/186220) perf(gateway): skip unused command payload copies
- [#186028](https://github.com/openclaw/openclaw/pull/186028) fix(ui): allow opening completion-toast sessions in new tabs
- [#185968](https://github.com/openclaw/openclaw/pull/185968) improve(memory): reuse unchanged chunks after ordinary edits
- [#186040](https://github.com/openclaw/openclaw/pull/186040) fix(ui): keep toast notifications at the viewport corner
- [#185918](https://github.com/openclaw/openclaw/pull/185918) feat(gateway): report yielded subagent children as paused on session rows
- [#185270](https://github.com/openclaw/openclaw/pull/185270) fix: adopt Bun runtime that rejects revoked TLS sessions
- [#186227](https://github.com/openclaw/openclaw/pull/186227) test: consolidate repeated fixtures and regression cases
- [#186222](https://github.com/openclaw/openclaw/pull/186222) perf(sessions): serialize diff cache request identity once
- [#186204](https://github.com/openclaw/openclaw/pull/186204) perf(state): skip leases for idle worktree artifact sweeps
- [#186226](https://github.com/openclaw/openclaw/pull/186226) fix(x): settle caller abort during subscription setup
- [#184500](https://github.com/openclaw/openclaw/pull/184500) fix(gateway): retain membership checks across session reads
- [#186276](https://github.com/openclaw/openclaw/pull/186276) fix: restore prepared runtime cleanup coverage
- [#186175](https://github.com/openclaw/openclaw/pull/186175) fix(ui): preserve active rail icon colors in dark themes
- [#186143](https://github.com/openclaw/openclaw/pull/186143) refactor(tests): consolidate IRC control checks
- [#186224](https://github.com/openclaw/openclaw/pull/186224) refactor(irc): test ingress through runtime-owned queues
- [#185995](https://github.com/openclaw/openclaw/pull/185995) fix(update): update verification retries a verified-user Gateway rejection
- [#186233](https://github.com/openclaw/openclaw/pull/186233) fix: restore prompt cache observation check after tool changes
- [#185495](https://github.com/openclaw/openclaw/pull/185495) docs(gateway): add optimal storage setup for team servers
- [#186083](https://github.com/openclaw/openclaw/pull/186083) fix(knowledge): keep emoji whole at free-text caps in cards, statements and excerpts
- [#185237](https://github.com/openclaw/openclaw/pull/185237) improve(database): rebuild ported memory indexes concurrently
- [#186058](https://github.com/openclaw/openclaw/pull/186058) improve: refine composer attachment previews
- [#186209](https://github.com/openclaw/openclaw/pull/186209) fix: keep prepared runtime tests within line budget
- [#183550](https://github.com/openclaw/openclaw/pull/183550) fix(ci): empty Bun shard when a changed-test row spans gateway-methods and its isolated sibling
- [#186198](https://github.com/openclaw/openclaw/pull/186198) docs: point logo work to the brand-kit README
- [#185886](https://github.com/openclaw/openclaw/pull/185886) fix(control-ui): prevent extra connections on cached reloads

#### 🐛 New Issues
- [#185819](https://github.com/openclaw/openclaw/issues/185819) [Bug]: Windows quick-start Codex onboarding completes device authorization, then fails activation with inactive harness runtime artifact (2026.10.7) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` `P0` 💬8
- [#185902](https://github.com/openclaw/openclaw/issues/185902) [Bug]: `openclaw memory index` exits silently (no output, exit 143) on SIGTERM, leaving an orphaned shadow database `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬7
- [#185713](https://github.com/openclaw/openclaw/issues/185713) [Feature]: Support per-profile CDP artifact directories for browsers running under a different Unix user `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬5
- [#185715](https://github.com/openclaw/openclaw/issues/185715) [Feature]: Let selected scheduled jobs use plugin-provided instructions with default fallback `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬5
- [#185817](https://github.com/openclaw/openclaw/issues/185817) Model setup wizard hangs at 'Testing your AI connection...' after its config write lands; the model change stays live after restart `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` `P0` 💬4
- [#186326](https://github.com/openclaw/openclaw/issues/186326) [Bug]: Windows managed update hits handoff SQLite file-lock timeout after npm layout repair (2026.10.10-beta.3 → beta.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#185578](https://github.com/openclaw/openclaw/issues/185578) [Bug]: Gateway heap floor only ratchets up - per-run system prompt/skills strings stay reachable after runs (~25 MiB/h until the V8 cap aborts) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#185953](https://github.com/openclaw/openclaw/issues/185953) [Bug]: one unbounded per-session transcript scan kills a shared SQLite worker slot, and the failure is replayed at 1 Hz by an innocent client `P2` `impact:crash-loop` 💬3
- [#185843](https://github.com/openclaw/openclaw/issues/185843) [Bug]: doctor still holds configured agent stores when agent_deletion_journal is empty (10.7 / #181804 does not cover it) `P1` `impact:crash-loop` `impact:ux-friction` 💬3
- [#185447](https://github.com/openclaw/openclaw/issues/185447) [Bug]: Copilot GitHub tool-order assertion fails on main with direct-before-catalog projection `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#186436](https://github.com/openclaw/openclaw/issues/186436) Ask OpenClaw greeting loads the main agent SOUL.md and IDENTITY.md and speaks as that agent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#186419](https://github.com/openclaw/openclaw/issues/186419) Update failure: pnpm-staging-preflight (2026.10.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#186255](https://github.com/openclaw/openclaw/issues/186255) [Bug]: Control UI hides the final answer in the next turn's "Worked for" fold when a late exec completion arrives `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#186244](https://github.com/openclaw/openclaw/issues/186244) [Bug]: Isolated finalization after message-tool reply bypasses context engine and sends ~850k uncached tokens from raw history `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#185656](https://github.com/openclaw/openclaw/issues/185656) [Bug]: Large zstd transcript archive still exceeds Node string limit in media-persistence migration on 2026.10.5 (regression of #170847), blocks update `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#185764](https://github.com/openclaw/openclaw/issues/185764) Update failure: requested (2026.9.4) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#186216](https://github.com/openclaw/openclaw/issues/186216) [Feature]: Scope staged inbound media per session when the sandbox workspace is read-write `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#186043](https://github.com/openclaw/openclaw/issues/186043) 2026.10.7 regression: heartbeat SessionBindingError (discord delivery resolves to nonexistent "default" account) + event-loop starvation via fetchWithSsrFGuard against dead provider host `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#186001](https://github.com/openclaw/openclaw/issues/186001) [Bug]: iOS photos.latest silently drops photos beyond a 340 KiB reply budget (limit: 2 returns 1) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#185610](https://github.com/openclaw/openclaw/issues/185610) [Bug]: SQLite worker OOM wedges ingress with idle leases; main fix absent from published releases `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#185919](https://github.com/openclaw/openclaw/issues/185919) [Bug]: concurrent first-use authorizations reject unchanged accounts `bug` `P1` `clawsweeper:source-repro` `impact:auth-provider` 💬2
- [#186088](https://github.com/openclaw/openclaw/issues/186088) [Bug]: Session-import archives remain protected/blocked with zero cleanup candidates despite healthy live stores `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#185726](https://github.com/openclaw/openclaw/issues/185726) [Bug]: image_generate action=list returns metadata tied to a closed plugin consumer `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#185844](https://github.com/openclaw/openclaw/issues/185844) [Bug]: Discord recent history re-injects processed messages into persistent Codex threads `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#186428](https://github.com/openclaw/openclaw/issues/186428) [Bug]: Discord message is lost when ingress retention pruning hits a locked state database `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186434](https://github.com/openclaw/openclaw/issues/186434) [Bug]: Claude 5.x via third-party Anthropic-compatible proxy answers the runtime-context carrier instead of the user message (consecutive user turns on non-direct `anthropic-messages` routes) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#185361](https://github.com/openclaw/openclaw/issues/185361) [Bug]: Telegram sendMediaGroup network failure leaves album outcome ambiguous; bounded transport diagnostics needed `P2` `impact:other` 💬1
- [#186424](https://github.com/openclaw/openclaw/issues/186424) [Feature]: show the target agent id in /subagents list rows `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#186425](https://github.com/openclaw/openclaw/issues/186425) [Bug]: Embedded runner same-model retry drops current user message (#166868 only fixed Codex) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#186418](https://github.com/openclaw/openclaw/issues/186418) [Bug]: agent.run callers that pin a model cannot supply a fallback ladder, so a quota-class 429 dead-ends `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#186413](https://github.com/openclaw/openclaw/issues/186413) Silent NO_REPLY on a sessions_send turn to a WebChat session fails as empty_response `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#186414](https://github.com/openclaw/openclaw/issues/186414) [Bug] Windows WhatsApp owner DM repeatedly fails keyed-user transcript assertion after session reset and 2026.10.8 upgrade `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#186408](https://github.com/openclaw/openclaw/issues/186408) Android/Termux node host: worker hosting disabled because fs-safe 0.25.0 rejects /data ancestors (fixed in fs-safe 0.26) `P2` `impact:other` 💬1
- [#185365](https://github.com/openclaw/openclaw/issues/185365) [Feature]: Decode managed inbound attachment filenames for display `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186257](https://github.com/openclaw/openclaw/issues/186257) Block-streaming previews briefly show plain-text tool-call text before deleting it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#186026](https://github.com/openclaw/openclaw/issues/186026) Agent avatar is missing until a streamed reply finishes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186399](https://github.com/openclaw/openclaw/issues/186399) Update failure: package-swap (2026.9.7) `P2` `impact:ux-friction` 💬1
- [#186396](https://github.com/openclaw/openclaw/issues/186396) [Bug]: Control UI Portals preview stops at ~720px instead of filling the window `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186392](https://github.com/openclaw/openclaw/issues/186392) [Bug]: iOS share with an image fails with AGENT_SELECTION_REQUIRED on multi-agent Gateways (agent.request resolves agent from raw session key) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186393](https://github.com/openclaw/openclaw/issues/186393) Update failure: package-install-omit-optional (2026.9.7) `P2` `impact:ux-friction` 💬1
- [#186029](https://github.com/openclaw/openclaw/issues/186029) Global approval modal omits the originating session and project `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186339](https://github.com/openclaw/openclaw/issues/186339) Signal container transport stops receiving messages after a silent network drop while status still shows connected `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186005](https://github.com/openclaw/openclaw/issues/186005) [Feature]: Compact model-change notices with provider logos `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#186285](https://github.com/openclaw/openclaw/issues/186285) Skills catalog disappears for routines with an explicit reader tool allowlist `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#186010](https://github.com/openclaw/openclaw/issues/186010) People count is shown only after expanding Chat Details `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#185807](https://github.com/openclaw/openclaw/issues/185807) [Bug]: npm update hangs while corepack waits on the pnpm download prompt `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#185792](https://github.com/openclaw/openclaw/issues/185792) [Bug]: update says it is using the managed gateway Node, then npm preinstall runs the older shell Node `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186365](https://github.com/openclaw/openclaw/issues/186365) Terminal run diagnostics lose owner-known cancellation and timeout causes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186314](https://github.com/openclaw/openclaw/issues/186314) Update failure: update-recovery-pending (2026.10.5) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#186361](https://github.com/openclaw/openclaw/issues/186361) [Bug]: Cron agent runs lose runtime authority mid-run; channel send fails and the run hangs until the 600 s reaper (2026.10.7) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#186358](https://github.com/openclaw/openclaw/issues/186358) [Bug]: Control UI shows "No provider credential" and rejects Claude CLI model selection with native-only Claude login `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186191](https://github.com/openclaw/openclaw/issues/186191) [Bug]: Matrix partial streaming with block streaming sends a stray draft after the last block, then redacts it (block offsets ignore the separators) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186235](https://github.com/openclaw/openclaw/issues/186235) [Bug]: prepare_pr reports prepared after an imported PR changes base branches `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#186349](https://github.com/openclaw/openclaw/issues/186349) llm_output can attribute a previous aborted assistant to a new run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186218](https://github.com/openclaw/openclaw/issues/186218) [Bug]: Heartbeat migration deletes an invalid quiet-hours window, so the automation runs with the defaults window or unrestricted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186185](https://github.com/openclaw/openclaw/issues/186185) [Bug]: An unreadable HEARTBEAT.md recreated after a completed heartbeat cutover makes `openclaw doctor --fix` fail and refuses updates `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186344](https://github.com/openclaw/openclaw/issues/186344) Subagent batch results silently dropped when the requester-settle runId exceeds 256 chars ("execution identity admission token violates its bounded contract") 💬1
- [#186162](https://github.com/openclaw/openclaw/issues/186162) Tailscale Serve conversation links require an extra login without saved browser credentials `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186333](https://github.com/openclaw/openclaw/issues/186333) [Bug]: Microsoft Teams stops applying startup-resolved allowlists after an unrelated config reload `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#186332](https://github.com/openclaw/openclaw/issues/186332) Update failure: package-install-omit-optional (2026.10.3) `P2` `impact:ux-friction` 💬1
- [#186331](https://github.com/openclaw/openclaw/issues/186331) [Bug]: MiniMax M3.1 5-level thinking profile + output_config.effort unreleased — GA id 'MiniMax-M3.1-Flash' resolves to adaptive-only (#176955 merged on main, in no published release) `P2` `impact:auth-provider` 💬1
- [#186313](https://github.com/openclaw/openclaw/issues/186313) Update failure: package-install (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#186311](https://github.com/openclaw/openclaw/issues/186311) [Bug]: Native child completion loses gateway binding after a Discord voice parent yields `P2` `impact:message-loss` 💬1
- [#186309](https://github.com/openclaw/openclaw/issues/186309) Compaction: 1M-window models produce oversized summarization requests (401 from provider), estimator fires compaction ~5x early on non-English/JSON transcripts, overflow-recovery dies on anchor guard `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#186018](https://github.com/openclaw/openclaw/issues/186018) Control UI collapses repeated chat messages into a count `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#186034](https://github.com/openclaw/openclaw/issues/186034) Control UI recovery actions overlap Discard in shared chats `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186003](https://github.com/openclaw/openclaw/issues/186003) Control UI: approval details stays too wide for short metadata `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#186281](https://github.com/openclaw/openclaw/issues/186281) Plugin scheduled command turns ignore the requester's tool policy and apply the guest `toolsBySender["*"]` entry `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#186020](https://github.com/openclaw/openclaw/issues/186020) [Bug]: Completion toast cannot open its session in a new tab `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186038](https://github.com/openclaw/openclaw/issues/186038) Toast notifications move into the command palette `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#185946](https://github.com/openclaw/openclaw/issues/185946) [Bug]: Update verifier retries AUTH_VERIFIED_USER_REQUIRED on healthy trusted-proxy Gateway (2026.10.7 → 10.8) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186263](https://github.com/openclaw/openclaw/issues/186263) [Feature]: Configurable primary + fallback chain for realtime Talk voice providers and models `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#186253](https://github.com/openclaw/openclaw/issues/186253) OK, I won't notify you again about this release, but will get in touch when a new version is available. If you'd rather skip all updates until the next major or minor version, let me know by commenting `@dependabot ignore this major version` or `@dependabot ignore this minor version`. You can also ignore all major, minor, or patch releases for a dependency by adding an [`ignore` condition](https://docs.github.com/en/code-security/supply-chain-security/configuration-options-for-dependency-updates#ignore) with the desired `update_types` to your config file. 💬1
- [#186228](https://github.com/openclaw/openclaw/issues/186228) Closed SQLite read-only AsyncLocalStorage scope leaks into later async work and rejects valid inspections `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#186144](https://github.com/openclaw/openclaw/issues/186144) [Bug]: Interrupted SQLite read-only snapshots leak forever ("Unrecognized snapshot artifact"), blocking updates with snapshot-capacity-insufficient `bug` `no-stale` `P1` `clawsweeper:fix-shape-clear` 💬1
- [#186215](https://github.com/openclaw/openclaw/issues/186215) [Bug]: macOS New Thread recursively calls createSession and exhausts memory `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186206](https://github.com/openclaw/openclaw/issues/186206) [Feature]: Distinguish $-referenceable skills from bundle promptTemplate commands in commands.list `P2` `impact:ux-friction` 💬1
- [#186205](https://github.com/openclaw/openclaw/issues/186205) Bedrock settled-turn finalization omits toolConfig, killing turns that end on a tool call `P2` `impact:auth-provider` 💬1
- [#186022](https://github.com/openclaw/openclaw/issues/186022) tools.invoke records operator calls in the agent session's tool-loop history: false "Loop warning" for the agent, and fewer slots for the agent's own loop detection `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186189](https://github.com/openclaw/openclaw/issues/186189) [Bug]: plugins install from npm skips the capability review when a Gateway is running `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#186186](https://github.com/openclaw/openclaw/issues/186186) [Bug]: Native Talk consults keep writing the old session store after a hot route change `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#186012](https://github.com/openclaw/openclaw/issues/186012) Control UI: pasted-text removal stays visible and lacks a clear outline `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186161](https://github.com/openclaw/openclaw/issues/186161) [Bug]: Auto-selected image model with a rejected API key fails every inbound photo and never tries another provider `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#186156](https://github.com/openclaw/openclaw/issues/186156) [Feature]: Upload existing audio to the current Discord server's Soundboard `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#186154](https://github.com/openclaw/openclaw/issues/186154) [Feature]: Preserve speaker turns in ElevenLabs batch transcripts `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#185973](https://github.com/openclaw/openclaw/issues/185973) Consolidate repeated query-expansion test cases `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#186129](https://github.com/openclaw/openclaw/issues/186129) cron: agent-turn jobs sharing a session:<id> fail with "changed while starting work" and page via failureAlert when another run is active, instead of waiting or skipping `P2` `impact:other` 💬1
- [#185984](https://github.com/openclaw/openclaw/issues/185984) Cron: a spawn-only run delivers the subagent's answer cut at 4,096 characters `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186118](https://github.com/openclaw/openclaw/issues/186118) Update failure: package-install-omit-optional (2026.10.4) `P2` `impact:ux-friction` 💬1
- [#186093](https://github.com/openclaw/openclaw/issues/186093) [Bug]: Shared final-tag scanner still scans every tag-shaped span for reasoning-only text and direct callers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#185457](https://github.com/openclaw/openclaw/issues/185457) [Bug]: Released updater drops config-only cron selection before candidate rehearsal `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#185926](https://github.com/openclaw/openclaw/issues/185926) [Feature]: msteams: upload private and shared channel files to the channel's own SharePoint site `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#186105](https://github.com/openclaw/openclaw/issues/186105) [Bug]: Channel wizard abandoned by a page reload holds setup admission forever; every later wizard.start fails until Gateway restart `P0` `impact:ux-release-blocker` 💬1
- [#186096](https://github.com/openclaw/openclaw/issues/186096) [Feature]: workboard.cards.list status filter (open cards only) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#186082](https://github.com/openclaw/openclaw/issues/186082) Align chat reactions with the opposite message edge `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186068](https://github.com/openclaw/openclaw/issues/186068) [Feature]: Deliver each person’s own USER.md with shared defaults and audience-safe Knowledge `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#186072](https://github.com/openclaw/openclaw/issues/186072) Update failure: git-clone (2026.10.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#186067](https://github.com/openclaw/openclaw/issues/186067) [Feature]: Keep two people’s personal Knowledge and LCM history separate in DMs and a shared room `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#186065](https://github.com/openclaw/openclaw/issues/186065) [Feature]: Retain an evidence-backed fact across Knowledge + LosslessClaw compaction and restart `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#186066](https://github.com/openclaw/openclaw/issues/186066) [Feature]: Share one person’s durable project knowledge between two authorized agents `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:security` 💬1
- [#186063](https://github.com/openclaw/openclaw/issues/186063) Update failure: package-install-omit-optional (2026.10.5) `P0` `impact:ux-release-blocker` 💬1
- [#185889](https://github.com/openclaw/openclaw/issues/185889) [Docs Bug]: Missing receipt-preserving recovery guidance for symlinked session migration archives `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186050](https://github.com/openclaw/openclaw/issues/186050) [Feature]: Expand Knowledge for single-player and multiplayer with LosslessClaw compatibility `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#186047](https://github.com/openclaw/openclaw/issues/186047) Details panel jumps in height when its content first loads `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#186021](https://github.com/openclaw/openclaw/issues/186021) Follow-up messages leave Queue before delivery is acknowledged `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#186024](https://github.com/openclaw/openclaw/issues/186024) Separate command palette Search and Compose modes `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#186008](https://github.com/openclaw/openclaw/issues/186008) Cron automation fails after gateway restart: "Scheduled account <name> is unavailable" despite healthy configured account `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#186011](https://github.com/openclaw/openclaw/issues/186011) [Bug]: Matrix: invalid cached access token is reused forever; `channels remove --delete` does not clear stored credentials `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186014](https://github.com/openclaw/openclaw/issues/186014) Chat hover and focus reveal actions on adjacent messages `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#186017](https://github.com/openclaw/openclaw/issues/186017) Control UI shows a redundant cancellation notice after explicit Stop `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#186013](https://github.com/openclaw/openclaw/issues/186013) Control UI: identify guests in the People list and activity hovercard `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#186006](https://github.com/openclaw/openclaw/issues/186006) Control UI reply attribution omits the original message excerpt `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#186002](https://github.com/openclaw/openclaw/issues/186002) [Feature]: Format Markdown in place while composing in the Control UI `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#185992](https://github.com/openclaw/openclaw/issues/185992) Update failure: package-install-omit-optional (2026.10.5) `P0` `impact:ux-release-blocker` 💬1
- [#185961](https://github.com/openclaw/openclaw/issues/185961) Subagents spawned by a run in a cron session die when that run ends ("Guarded request authority is no longer active") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#185962](https://github.com/openclaw/openclaw/issues/185962) PR tooling can retire live installs or lose its selected Git context `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#185956](https://github.com/openclaw/openclaw/issues/185956) [Bug]: Android chat: double-tapping Send stops the message it just sent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#185837](https://github.com/openclaw/openclaw/issues/185837) Update failure: package-install-omit-optional (2026.10.2) `clawsweeper:intake:bug` `clawsweeper:intake:needs-repro` 💬1
- [#185942](https://github.com/openclaw/openclaw/issues/185942) [Bug]: Talk realtime consults never apply session.reset (daily), so voice-only use keeps a stale session indefinitely `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#185864](https://github.com/openclaw/openclaw/issues/185864) [Feature]: GitLab connections and publication following the built-in GitHub workflow `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1

#### 🔒 Closed Issues
- [#118185](https://github.com/openclaw/openclaw/issues/118185) [Bug]: One claude-cli turn is written to the transcript twice by two writers that assemble the reply differently
- [#115642](https://github.com/openclaw/openclaw/issues/115642) Billing cooldown outlives the outage on subscription auth: add probe-based recovery, shorter TTL for usage-limit errors, and a manual reset command
- [#167410](https://github.com/openclaw/openclaw/issues/167410) [Bug]: Native Codex completion inherits an aborted run scope and fails before parent admission
- [#185902](https://github.com/openclaw/openclaw/issues/185902) [Bug]: `openclaw memory index` exits silently (no output, exit 143) on SIGTERM, leaving an orphaned shadow database
- [#153094](https://github.com/openclaw/openclaw/issues/153094) Update failure: runtime-verification-failed (2026.9.4)
- [#162822](https://github.com/openclaw/openclaw/issues/162822) Long-running Gateway: each native-loading CLI run (e.g. memory status) leaves a 0.6–1 GB plugin-captures instance the hourly sweep can't reclaim
- [#159276](https://github.com/openclaw/openclaw/issues/159276) Native Ollama: plugin runtime.llm.complete() does not serialize reasoning: off as think: false
- [#121795](https://github.com/openclaw/openclaw/issues/121795) [Feature]: Include usage in infer model run gateway JSON envelope
- [#98193](https://github.com/openclaw/openclaw/issues/98193) MCP toolFilter (mcp tools --include/--exclude) silently drops ALL of a server's tools when using probe's namespaced names
- [#169501](https://github.com/openclaw/openclaw/issues/169501) [Bug] Settled-turn finalization retry does not engage when stopReason=toolUse and all tools are settled — payloadCount counts toolUse message as payload
- [#183287](https://github.com/openclaw/openclaw/issues/183287) Idle watchdog: let a provider declare a loopback baseUrl as remote (local relay in front of a hosted API)
- [#143946](https://github.com/openclaw/openclaw/issues/143946) [Feature]: Web Push "Agent finished" notifications can't be attributed to a session, unlike other categories
- [#167076](https://github.com/openclaw/openclaw/issues/167076) [Feature]: Read piped messages in ordinary agent turns
- [#166099](https://github.com/openclaw/openclaw/issues/166099) [Bug]: Update waits ~11 minutes for previous Gateway with terminal plugin trust failure
- [#157643](https://github.com/openclaw/openclaw/issues/157643) Usage reports coincide with out-of-window cold restores and repeated refresh timeouts
- [#183425](https://github.com/openclaw/openclaw/issues/183425) memory-core: embedding provider failure is cached permanently and degrades to FTS-only **silently** (no log, no retry, no self-heal until gateway restart)
- [#169950](https://github.com/openclaw/openclaw/issues/169950) [Bug]: `openclaw status` keeps prescribing `openclaw update` for a weeks-old failed git update after the Gateway moved past it
- [#173476](https://github.com/openclaw/openclaw/issues/173476) Update failure: updater-runtime-retention (2026.9.7)
- [#175283](https://github.com/openclaw/openclaw/issues/175283) [Bug]: sessions_spawn worktree:true ignores cleanup:"delete" (reports keep; worktree left on disk)
- [#185953](https://github.com/openclaw/openclaw/issues/185953) [Bug]: one unbounded per-session transcript scan kills a shared SQLite worker slot, and the failure is replayed at 1 Hz by an innocent client
- [#160469](https://github.com/openclaw/openclaw/issues/160469) [Bug]: CUA standalone modifier taps on Wayland need the merged driver fix
- [#185843](https://github.com/openclaw/openclaw/issues/185843) [Bug]: doctor still holds configured agent stores when agent_deletion_journal is empty (10.7 / #181804 does not cover it)
- [#185447](https://github.com/openclaw/openclaw/issues/185447) [Bug]: Copilot GitHub tool-order assertion fails on main with direct-before-catalog projection
- [#184522](https://github.com/openclaw/openclaw/issues/184522) [Bug]: a streamed reply that quotes an empty command output blocks the Gateway for 13 s at 16 KB (4x per doubling)
- [#185145](https://github.com/openclaw/openclaw/issues/185145) [Bug]: update cleanup --yes invalidates its own destination check via -shm mtime
- [#186419](https://github.com/openclaw/openclaw/issues/186419) Update failure: pnpm-staging-preflight (2026.10.3)
- [#186255](https://github.com/openclaw/openclaw/issues/186255) [Bug]: Control UI hides the final answer in the next turn's "Worked for" fold when a late exec completion arrives
- [#114081](https://github.com/openclaw/openclaw/issues/114081) [Bug]: Pre-compaction memory flush never runs when the reactive overflow-recovery path fires (two disconnected compaction systems)
- [#186244](https://github.com/openclaw/openclaw/issues/186244) [Bug]: Isolated finalization after message-tool reply bypasses context engine and sends ~850k uncached tokens from raw history
- [#181888](https://github.com/openclaw/openclaw/issues/181888) [Bug]: LM Studio binary reasoning models still receive unsupported reasoning_effort values on the native provider route
- [#184867](https://github.com/openclaw/openclaw/issues/184867) memory-core: DREAMS.md writes chmod the agent workspace to 0700, failing with EPERM when the gateway user doesn't own it
- [#119592](https://github.com/openclaw/openclaw/issues/119592) fix(workboard): workboard_move to terminal status leaves live claim and running execution
- [#178004](https://github.com/openclaw/openclaw/issues/178004) Update failure: package-swap (2026.10.4)
- [#163982](https://github.com/openclaw/openclaw/issues/163982) Control UI should show worker lifecycle history and refresh terminal states
- [#184115](https://github.com/openclaw/openclaw/issues/184115) [Bug]: Sandboxed sessions cannot start when the generated-skills mountpoint is left root-owned ("path alias escape blocked")
- [#179289](https://github.com/openclaw/openclaw/issues/179289) Subagent completion announces fail with "Session capability metadata changed" in busy parent sessions
- [#182445](https://github.com/openclaw/openclaw/issues/182445) Bun runtime: preserve CA flag precedence when honoring NODE_OPTIONS exclusion
- [#185764](https://github.com/openclaw/openclaw/issues/185764) Update failure: requested (2026.9.4)
- [#183499](https://github.com/openclaw/openclaw/issues/183499) memory_search corpus=sessions times out on every call (large session store): pre-embedding hang, doomed catch-up churn, misleading provider-error diagnostic
- [#163569](https://github.com/openclaw/openclaw/issues/163569) [Bug]: Unix installer leaves openclaw off PATH with a custom ZDOTDIR
- [#183747](https://github.com/openclaw/openclaw/issues/183747) [Bug]: Session PR facts only read the `origin` remote, so a branch pushed to a fork under another remote name shows no pull request
- [#185919](https://github.com/openclaw/openclaw/issues/185919) [Bug]: concurrent first-use authorizations reject unchanged accounts
- [#185726](https://github.com/openclaw/openclaw/issues/185726) [Bug]: image_generate action=list returns metadata tied to a closed plugin consumer
- [#183555](https://github.com/openclaw/openclaw/issues/183555) iOS completed-work folds omit tool counts
- [#178681](https://github.com/openclaw/openclaw/issues/178681) Google Meet WebAudio playback is missed by DOM-only native input capture
- [#186408](https://github.com/openclaw/openclaw/issues/186408) Android/Termux node host: worker hosting disabled because fs-safe 0.25.0 rejects /data ancestors (fixed in fs-safe 0.26)
- [#183237](https://github.com/openclaw/openclaw/issues/183237) [Feature]: Mattermost bot-to-bot loop protection and allowBots
- [#186257](https://github.com/openclaw/openclaw/issues/186257) Block-streaming previews briefly show plain-text tool-call text before deleting it
- [#186026](https://github.com/openclaw/openclaw/issues/186026) Agent avatar is missing until a streamed reply finishes
- [#186399](https://github.com/openclaw/openclaw/issues/186399) Update failure: package-swap (2026.9.7)
- [#184790](https://github.com/openclaw/openclaw/issues/184790) Docs: explicit `browser.ssrfPolicy.dangerouslyAllowPrivateNetwork: false` enables strict hostname blocking, unlike leaving it unset
- [#186393](https://github.com/openclaw/openclaw/issues/186393) Update failure: package-install-omit-optional (2026.9.7)
- [#186029](https://github.com/openclaw/openclaw/issues/186029) Global approval modal omits the originating session and project
- [#186339](https://github.com/openclaw/openclaw/issues/186339) Signal container transport stops receiving messages after a silent network drop while status still shows connected
- [#185289](https://github.com/openclaw/openclaw/issues/185289) [Bug]: a partial HTML/JSX tag at a streamed delta boundary re-projects the whole reply (1.0 s at 64 KB, 15.1 s at 256 KB)
- [#186005](https://github.com/openclaw/openclaw/issues/186005) [Feature]: Compact model-change notices with provider logos
- [#183439](https://github.com/openclaw/openclaw/issues/183439) [Bug]: PostgreSQL memory keyword search misses tokens SQLite FTS matches (dates, paths, file names), so hybrid relevance regresses
- [#183371](https://github.com/openclaw/openclaw/issues/183371) [Docs Bug]: Chat guide omits desktop send shortcuts and IME confirmation guidance
- [#186285](https://github.com/openclaw/openclaw/issues/186285) Skills catalog disappears for routines with an explicit reader tool allowlist
- [#183085](https://github.com/openclaw/openclaw/issues/183085) [Bug]: Raw <tool_call> text ends the turn when the model calls a deferred Tool Search tool by name
- [#185044](https://github.com/openclaw/openclaw/issues/185044) [Bug]: maxActiveTranscriptBytes counts per-tool-round persisted openclaw.system-update runtime-context entries the model never sees (Anthropic routes), forcing early bounded-context mode
- [#186010](https://github.com/openclaw/openclaw/issues/186010) People count is shown only after expanding Chat Details
- [#185807](https://github.com/openclaw/openclaw/issues/185807) [Bug]: npm update hangs while corepack waits on the pnpm download prompt
- [#185792](https://github.com/openclaw/openclaw/issues/185792) [Bug]: update says it is using the managed gateway Node, then npm preinstall runs the older shell Node
- [#186314](https://github.com/openclaw/openclaw/issues/186314) Update failure: update-recovery-pending (2026.10.5)
- [#184528](https://github.com/openclaw/openclaw/issues/184528) [Bug]: block-streaming replies post internal tool-call syntax and arguments as chat messages
- [#186191](https://github.com/openclaw/openclaw/issues/186191) [Bug]: Matrix partial streaming with block streaming sends a stray draft after the last block, then redacts it (block offsets ignore the separators)
- [#186235](https://github.com/openclaw/openclaw/issues/186235) [Bug]: prepare_pr reports prepared after an imported PR changes base branches
- [#186218](https://github.com/openclaw/openclaw/issues/186218) [Bug]: Heartbeat migration deletes an invalid quiet-hours window, so the automation runs with the defaults window or unrestricted
- [#186185](https://github.com/openclaw/openclaw/issues/186185) [Bug]: An unreadable HEARTBEAT.md recreated after a completed heartbeat cutover makes `openclaw doctor --fix` fail and refuses updates
- [#186344](https://github.com/openclaw/openclaw/issues/186344) Subagent batch results silently dropped when the requester-settle runId exceeds 256 chars ("execution identity admission token violates its bounded contract")
- [#186162](https://github.com/openclaw/openclaw/issues/186162) Tailscale Serve conversation links require an extra login without saved browser credentials
- [#184892](https://github.com/openclaw/openclaw/issues/184892) [Bug]: Migration deletes truncateAfterCompaction: true without materializing maxActiveTranscriptBytes
- [#186332](https://github.com/openclaw/openclaw/issues/186332) Update failure: package-install-omit-optional (2026.10.3)
- [#186331](https://github.com/openclaw/openclaw/issues/186331) [Bug]: MiniMax M3.1 5-level thinking profile + output_config.effort unreleased — GA id 'MiniMax-M3.1-Flash' resolves to adaptive-only (#176955 merged on main, in no published release)
- [#186313](https://github.com/openclaw/openclaw/issues/186313) Update failure: package-install (2026.10.5)
- [#186311](https://github.com/openclaw/openclaw/issues/186311) [Bug]: Native child completion loses gateway binding after a Discord voice parent yields
- [#186018](https://github.com/openclaw/openclaw/issues/186018) Control UI collapses repeated chat messages into a count
- [#186034](https://github.com/openclaw/openclaw/issues/186034) Control UI recovery actions overlap Discard in shared chats
- [#186003](https://github.com/openclaw/openclaw/issues/186003) Control UI: approval details stays too wide for short metadata
- [#186020](https://github.com/openclaw/openclaw/issues/186020) [Bug]: Completion toast cannot open its session in a new tab
- [#186038](https://github.com/openclaw/openclaw/issues/186038) Toast notifications move into the command palette
- [#185946](https://github.com/openclaw/openclaw/issues/185946) [Bug]: Update verifier retries AUTH_VERIFIED_USER_REQUIRED on healthy trusted-proxy Gateway (2026.10.7 → 10.8)
- [#186253](https://github.com/openclaw/openclaw/issues/186253) OK, I won't notify you again about this release, but will get in touch when a new version is available. If you'd rather skip all updates until the next major or minor version, let me know by commenting `@dependabot ignore this major version` or `@dependabot ignore this minor version`. You can also ignore all major, minor, or patch releases for a dependency by adding an [`ignore` condition](https://docs.github.com/en/code-security/supply-chain-security/configuration-options-for-dependency-updates#ignore) with the desired `update_types` to your config file.
- [#186144](https://github.com/openclaw/openclaw/issues/186144) [Bug]: Interrupted SQLite read-only snapshots leak forever ("Unrecognized snapshot artifact"), blocking updates with snapshot-capacity-insufficient
- [#184864](https://github.com/openclaw/openclaw/issues/184864) [Bug]: session-state-history prune fails on PostgreSQL every hour: watermark batch compares bigint with an untyped (text) parameter
- [#186206](https://github.com/openclaw/openclaw/issues/186206) [Feature]: Distinguish $-referenceable skills from bundle promptTemplate commands in commands.list
- [#186205](https://github.com/openclaw/openclaw/issues/186205) Bedrock settled-turn finalization omits toolConfig, killing turns that end on a tool call
- [#186022](https://github.com/openclaw/openclaw/issues/186022) tools.invoke records operator calls in the agent session's tool-loop history: false "Loop warning" for the agent, and fewer slots for the agent's own loop detection
- [#182077](https://github.com/openclaw/openclaw/issues/182077) [Docs Bug]: Show same-model interactive and background provider routes
- [#186012](https://github.com/openclaw/openclaw/issues/186012) Control UI: pasted-text removal stays visible and lacks a clear outline
- [#185973](https://github.com/openclaw/openclaw/issues/185973) Consolidate repeated query-expansion test cases
- [#186129](https://github.com/openclaw/openclaw/issues/186129) cron: agent-turn jobs sharing a session:<id> fail with "changed while starting work" and page via failureAlert when another run is active, instead of waiting or skipping
- [#185984](https://github.com/openclaw/openclaw/issues/185984) Cron: a spawn-only run delivers the subagent's answer cut at 4,096 characters
- [#185275](https://github.com/openclaw/openclaw/issues/185275) [Bug]: A post-commit failure while adding a Claw MCP server reports failure without a ref, so rollback leaves the server live in the global config
- [#186118](https://github.com/openclaw/openclaw/issues/186118) Update failure: package-install-omit-optional (2026.10.4)
- [#185457](https://github.com/openclaw/openclaw/issues/185457) [Bug]: Released updater drops config-only cron selection before candidate rehearsal
- [#186105](https://github.com/openclaw/openclaw/issues/186105) [Bug]: Channel wizard abandoned by a page reload holds setup admission forever; every later wizard.start fails until Gateway restart
- [#186063](https://github.com/openclaw/openclaw/issues/186063) Update failure: package-install-omit-optional (2026.10.5)
- [#185889](https://github.com/openclaw/openclaw/issues/185889) [Docs Bug]: Missing receipt-preserving recovery guidance for symlinked session migration archives
- [#181968](https://github.com/openclaw/openclaw/issues/181968) [Bug]: silent local pairing also applies to non-loopback private peers (e.g. through a container bridge), while the docs say direct loopback only
- [#185992](https://github.com/openclaw/openclaw/issues/185992) Update failure: package-install-omit-optional (2026.10.5)
- [#185837](https://github.com/openclaw/openclaw/issues/185837) Update failure: package-install-omit-optional (2026.10.2)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 257,768 · **Open issues:** 51,505 · **Last push:** <1h ago

Today saw no new releases for Hermes Agent, but several important pull requests were merged, including fixes that enhance functionality and stability throughout the platform. Notable updates included improvements in the webapp for inspecting plugin repositories via the gateway and resolving a recurring issue with the Windows arm64 build that prevented unnecessary re-imports of hosted provider plugins. Meanwhile, the most pressing new issue reported is a bug in the webapp chat where long user messages on mobile devices fill nearly 90% of the viewport, adversely affecting the display of agent replies. Other reported bugs address session adoption failures from the iOS client and potential token redaction issues within Telegram integrations.

#### ✅ Merged PRs
- [#145770](https://github.com/NousResearch/hermes-agent/pull/145770) fix(webapp): inspect plugin repositories through the gateway
- [#145753](https://github.com/NousResearch/hermes-agent/pull/145753) fix(pm): a launcher waiting on a reclaimed install state's lock retries on the live file
- [#145772](https://github.com/NousResearch/hermes-agent/pull/145772) fix(providers): main's Windows arm64 red: a home rescan no longer re-imports a hosted provider plugin

#### 🐛 New Issues
- [#145593](https://github.com/NousResearch/hermes-agent/issues/145593) [Bug]: Webapp chat — long user messages render fully expanded; on mobile they fill ~90% of the viewport and squeeze the agent reply into a scrollable sliver `type/bug` `P2` `comp/dashboard` 💬5
- [#145474](https://github.com/NousResearch/hermes-agent/issues/145474) A session written by the iOS client (source='ios') cannot be adopted, so sidebar edits answer not_found `type/bug` `comp/gateway` `P3` `area/sessions` 💬2
- [#145763](https://github.com/NousResearch/hermes-agent/issues/145763) approval: command_allowlist shortcut treats single-quoted $(…)/backtick inside a test -v / [[ -v subscript as literal, but bash re-expands it `type/security` `comp/tools` `tool/terminal` `P3` 💬2
- [#145664](https://github.com/NousResearch/hermes-agent/issues/145664) [Bug]: Telegram token redaction masks digit suffixes inside ordinary identifiers `type/bug` `comp/agent` `area/auth` `P3` 💬2
- [#145761](https://github.com/NousResearch/hermes-agent/issues/145761) [Bug]: gateway_state.json reports session_store unavailable while every profile DB is readable `type/bug` `comp/gateway` `P2` `area/sessions` 💬2
- [#145472](https://github.com/NousResearch/hermes-agent/issues/145472) [Bug]: Desktop reactions are saved but never announced to the agent on the canonical gateway path `type/bug` `comp/gateway` `P2` 💬2
- [#145811](https://github.com/NousResearch/hermes-agent/issues/145811) [Bug] Dashboard stored-session picker lists `desktop` rows that the chat PTY can never resume (`error: not_found`) `type/bug` `comp/gateway` `area/auth` `P2` 💬1
- [#145807](https://github.com/NousResearch/hermes-agent/issues/145807) active_sessions.json corrupted by a stray TLS close_notify record at one-shot exit; gateway then refuses every new session `type/bug` `comp/agent` `tool/file` `P2` 💬1
- [#145808](https://github.com/NousResearch/hermes-agent/issues/145808) Clarify from a turn submitted by a disconnected WS client shows as "Skipped" in Desktop but holds the session lease for 3600s; Stop cannot release it `type/bug` `comp/gateway` `P2` `area/sessions` 💬1
- [#145793](https://github.com/NousResearch/hermes-agent/issues/145793) [Bug]: ascii-video shader examples lose odd-size contracts and default wipe to an unimplemented direction `type/bug` `tool/skills` `tool/vision` `P2` 💬1
- [#145789](https://github.com/NousResearch/hermes-agent/issues/145789) A2A: a task that outlives `A2A_REPLY_TIMEOUT` is marked failed and its late reply is discarded (also via SendStreamingMessage) `type/bug` `comp/plugins` `P2` `area/streaming` 💬1
- [#145786](https://github.com/NousResearch/hermes-agent/issues/145786) [Bug]: Profile-scoped auth priority changes inherited global order; need per-profile account policy in Desktop/CLI `type/bug` `comp/cli` `provider/openai` `area/auth` 💬1
- [#145791](https://github.com/NousResearch/hermes-agent/issues/145791) Cron monitor jobs leave an empty, never-closed session on every suppressed tick `type/bug` `comp/cron` `P2` `area/sessions` 💬1
- [#145810](https://github.com/NousResearch/hermes-agent/issues/145810) [Setup]: Supported channel for clarifying an administration restriction `comp/agent` `P3`
- [#145809](https://github.com/NousResearch/hermes-agent/issues/145809) [Feature]: Elevate the webapp to a first-class surface — server-hosted Hermes + browser-only users (desktop web & phone web) `P2` `comp/dashboard` `area/sessions`
- [#145797](https://github.com/NousResearch/hermes-agent/issues/145797) Desktop markdown tables inherit wrap-anywhere and split short labels into letters `type/bug` `P2` `comp/desktop` `desktop/chat`
- [#145792](https://github.com/NousResearch/hermes-agent/issues/145792) [Feature]: Desktop/mouse layout — clamp long sent user messages by default (single line + expand/collapse), parity with the touch clamp from #145123 `type/feature` `P3` `comp/dashboard`
- [#145790](https://github.com/NousResearch/hermes-agent/issues/145790) A2A Agent Card: let operators declare skills (description, examples) and `documentationUrl` instead of one skill per toolset `type/feature` `comp/plugins` `area/config` `P3`
- [#145785](https://github.com/NousResearch/hermes-agent/issues/145785) [Feature]: Anchor non-composer user input (clarify answers) in the desktop sticky prompt header `type/feature` `P3` `area/sessions` `comp/tui-gateway`
- [#145780](https://github.com/NousResearch/hermes-agent/issues/145780) api_server: a stopped non-streaming chat completion stores "Your request was not processed" instead of its partial reply `type/bug` `comp/agent` `P2` `area/sessions`
- [#145774](https://github.com/NousResearch/hermes-agent/issues/145774) [Bug]: Webapp mobile — per-tab session management menu (close / archive / delete) unreachable on touch; narrow viewports only offer tab switch + app-level menu `type/bug` `P2` `comp/desktop` `area/sessions`

#### 🔒 Closed Issues
- [#143331](https://github.com/NousResearch/hermes-agent/issues/143331) hermes update fails every run on Windows: stale gateway.pid beside a held lock aborts gateway pause (plus stable-channel downgrade refusal exits 1)
- [#145593](https://github.com/NousResearch/hermes-agent/issues/145593) [Bug]: Webapp chat — long user messages render fully expanded; on mobile they fill ~90% of the viewport and squeeze the agent reply into a scrollable sliver
- [#83582](https://github.com/NousResearch/hermes-agent/issues/83582) gateway(api_server): confirming main HEAD fix for port-conflict retry storm / fd leak observed on stale build

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 95,720 · **Open issues:** 9,556 · **Last push:** <1h ago

On October 28, 2026, there were no new releases for vLLM, but several important pull requests were merged that focused on bug fixes and performance enhancements. Notably, the fix for the Rust Frontend now correctly utilizes server-reported prompt tokens in vllm-bench (#59694), and adjustments were made to improve HiSparse handling and KV offloading, reducing overhead and memory issues in various areas. Significant fixes also addressed accuracy concerns with Kimi-K3 models under specific configurations (#64106) and ensured better functioning of the attention mechanism during decoding (#59392). Among new issues, a performance regression related to Triton MoE block assignments was reported, citing a potential slowdown of up to 2x (#63943), signaling a critical area for future work.

#### ✅ Merged PRs
- [#59694](https://github.com/vllm-project/vllm/pull/59694) [Bugfix][Rust Frontend] Use server-reported prompt_tokens in vllm-bench
- [#63819](https://github.com/vllm-project/vllm/pull/63819) [MRV2][Spec Decode] Close DFlash/DSpark and adaptive-verification JIT warmup gaps
- [#61659](https://github.com/vllm-project/vllm/pull/61659) [Bugfix][HiSparse] Pad staged prefill KV to avoid a trtllm-gen out-of-bounds read
- [#62739](https://github.com/vllm-project/vllm/pull/62739) [Bugfix][HiSparse] Read resident prefill rows by request state slot
- [#61831](https://github.com/vllm-project/vllm/pull/61831) [CI] Shard FP8 MoE kernels and L4 Humming eval automatically
- [#63872](https://github.com/vllm-project/vllm/pull/63872) [Bugfix][Bench] Support Muse balanced routing
- [#63735](https://github.com/vllm-project/vllm/pull/63735) [Bugfix][Perf][ROCm] RDNA launch config for kernel_paged_attention_2d
- [#64151](https://github.com/vllm-project/vllm/pull/64151) [Spec Decode] Disable batch-sharded draft logits for PCP
- [#59392](https://github.com/vllm-project/vllm/pull/59392) [Bugfix][Attention] Fix FlashInfer MLA DCP decode on ragged spec-decode batches
- [#63889](https://github.com/vllm-project/vllm/pull/63889) [Perf][KV Offload] Reduce KVCR adapter overhead
- [#63778](https://github.com/vllm-project/vllm/pull/63778) [MRV2] Let the runner decide whether to profile CUDA graph memory
- [#63989](https://github.com/vllm-project/vllm/pull/63989) [Bugfix][Kimi-K3] Reserve KDA prefill workspace before profiling
- [#63820](https://github.com/vllm-project/vllm/pull/63820) [Perf] Use TMA for MOE up/down proj, 3.1~3.4% E2E Throughput Improvement for GLM5.3
- [#64085](https://github.com/vllm-project/vllm/pull/64085) [Misc] Revert "[NIXL] Bump NIXL version to 1.5.1" (#63817)
- [#60960](https://github.com/vllm-project/vllm/pull/60960) [Bugfix] Bound prefix cache reuse by the first requested prompt score
- [#61557](https://github.com/vllm-project/vllm/pull/61557) [Bugfix][Spec Decode] Preserve grammar-invalid drafts for rejection sampling
- [#61258](https://github.com/vllm-project/vllm/pull/61258) [Feature][Core] Enable best-effort NUMA binding by default
- [#64081](https://github.com/vllm-project/vllm/pull/64081) [CI][Test] Adjust TRT-LLM and GDN numerical tolerances for Rubin
- [#62592](https://github.com/vllm-project/vllm/pull/62592) [Feature][HiSparse] Add a platform backend for device operations
- [#63841](https://github.com/vllm-project/vllm/pull/63841) [GLM5.3 Perf] Enable dspark fp8 kv cache for draft model, 5.38 GB GPU Memory saved per rank
- [#63409](https://github.com/vllm-project/vllm/pull/63409) [ROCm][Bugfix][Kimi-K3] Pass zero positions to the fused MLA decode q-prep kernel
- [#64107](https://github.com/vllm-project/vllm/pull/64107) [CI] Fix stale NVFP4 decode test selector on DGX Spark
- [#63155](https://github.com/vllm-project/vllm/pull/63155) [Perf][DSv4.1] Capture the decoder replay graphs on the model graphs' stream
- [#62464](https://github.com/vllm-project/vllm/pull/62464) [Perf] Avoid redundant tensor operations during serialization
- [#64114](https://github.com/vllm-project/vllm/pull/64114) [Doc] MiniMax-M3: GB200 AgentX presets (TP4/TP8)
- [#63709](https://github.com/vllm-project/vllm/pull/63709) [Rust Frontend] Detect Lark grammars like the Python engine
- [#60469](https://github.com/vllm-project/vllm/pull/60469) [KV Offload] Align KVCR cache recency with request prefixes
- [#63707](https://github.com/vllm-project/vllm/pull/63707) [Bugfix][Rust Frontend] Bump fastokens to 0.3.5
- [#62011](https://github.com/vllm-project/vllm/pull/62011) [Perf] Enable DeepGEMM sparse MQA logits on the FP8 indexer cache, DSv4.1
- [#62478](https://github.com/vllm-project/vllm/pull/62478) [Perf][KV Connector][Mooncake] Vectorize transfer descriptor build

#### 🐛 New Issues
- [#63943](https://github.com/vllm-project/vllm/issues/63943) [Performance]: Triton MoE naive block assignment re-reads shared experts for device-resident weights (8% to 2x slower decode on GB10) `performance` 💬4
- [#63917](https://github.com/vllm-project/vllm/issues/63917) [Bug][Rust Frontend] Differences from the Python frontend found in a side-by-side run `rust` 💬3
- [#63944](https://github.com/vllm-project/vllm/issues/63944) [Bug]: int8_per_token_head scale-view fill overwrites Gated DeltaNet state in hybrid models 💬2
- [#64002](https://github.com/vllm-project/vllm/issues/64002) [RFC] [DSV4.1] [Engram]: Share immutable host-backed Engram tables across independent instances `quantization` `DSv4.1` 💬2
- [#64106](https://github.com/vllm-project/vllm/issues/64106) [Bug]: Kimi-K3 on MI355X: --kv-cache-dtype fp8 silently breaks accuracy (GSM8K 0.975 -> 0.305) `rocm` `kimi` `k3` 💬2
- [#63968](https://github.com/vllm-project/vllm/issues/63968) [Feature] Per-request KV block visibility (deny list) for role-scoped RAG 💬2
- [#63948](https://github.com/vllm-project/vllm/issues/63948) [Bug]: KV offload P2P tier: reset_cache() fails an assert on a prefill node with stores waiting for the decoder 💬2
- [#64117](https://github.com/vllm-project/vllm/issues/64117) [Bug]: MooncakeStoreConnector silently corrupts KV under BHLNC: per-head segments are transferred with the whole-block stride as their length `bug` 💬1
- [#64090](https://github.com/vllm-project/vllm/issues/64090) [CI Failure]: flashinfer-nvfp4-xqa-dgx-spark - test_flashinfer_xqa_nvfp4_decode_correctness: 0 tests selected `ci-failure` 💬1
- [#64075](https://github.com/vllm-project/vllm/issues/64075) [Bug]: DeepSeek-OCR/DeepSeek-OCR-2 crashes on a zero-sum tiled image `bug` `deepseek` 💬1
- [#64018](https://github.com/vllm-project/vllm/issues/64018) [ROCm][AMD] Muse Spark Open PTPC-FP8 gfx942 Performance Optimization `performance` `rocm` 💬1
- [#63997](https://github.com/vllm-project/vllm/issues/63997) [Bug]: NixlConnector fails at startup with "KV cache view cannot be partitioned into NIXL regions" when KV cache groups have different block sizes (Gemma 4) `bug` `kv-connector` `quantization` 💬1
- [#64046](https://github.com/vllm-project/vllm/issues/64046) [Bug]: Ascend Triton: `_penalties_kernel` dies on chained `or` (first non-default penalty request kills TP/Engine) 💬1
- [#64014](https://github.com/vllm-project/vllm/issues/64014) [Bug]: /v1/messages does not return usage.metrics when --enable-per-request-metrics is enabled `bug` 💬1
- [#64009](https://github.com/vllm-project/vllm/issues/64009) [Bug]: The responses API doesn't support min_tokens for now `bug` 💬1
- [#63924](https://github.com/vllm-project/vllm/issues/63924) [Bug]: Pinned LoRA adapter makes the scheduler over-admit adapters: worker evicts one the batch needs and EngineCore dies with KeyError in convert_mapping `scheduler` 💬1
- [#63984](https://github.com/vllm-project/vllm/issues/63984) [Bug]: Flint fails to start with --tensor-parallel-size 4 (silu_and_mul assert); TP8 fails Triton compile 💬1
- [#64178](https://github.com/vllm-project/vllm/issues/64178) [Docs] Case 4 equations render as literal LaTeX on published Hybrid KV Cache Manager page `kv-cache-manager`
- [#64175](https://github.com/vllm-project/vllm/issues/64175) [RFC]: Serve requests on top of an externally computed KV cache (PrecomputedKVConnector) `quantization`
- [#64150](https://github.com/vllm-project/vllm/issues/64150) [RFC]: Pluggable KV cache eviction policy for hybrid models
- [#64103](https://github.com/vllm-project/vllm/issues/64103) [Bug]: cgroup memory limit is read at /sys/fs/cgroup only, not at the cgroup of the process
- [#64100](https://github.com/vllm-project/vllm/issues/64100) [Perf][DBO] Characterize the decode DBO crossover under FULL CUDA Graphs and multi-node EP
- [#64099](https://github.com/vllm-project/vllm/issues/64099) [RFC]: Consistent semantics for drafted, verified and accepted spec decode tokens
- [#64048](https://github.com/vllm-project/vllm/issues/64048) [Bug]: NixlConnector P/D on GH200 returns garbage when the KV cache base is 4 GiB-aligned (dma-buf MR wraps); UCX_CUDA_COPY_DMABUF=no avoids it
- [#63972](https://github.com/vllm-project/vllm/issues/63972) [CI Failure]: CPU-Spec Decode Tests - test_dflash2.py::test_dflash_fc_runs_fp32_target_hidden_states_in_draft_dtype `ci-failure`
- [#64058](https://github.com/vllm-project/vllm/issues/64058) [Performance]: FA3 runs long decodes without split-KV whenever a prefill chunk shares the batch `performance`
- [#64039](https://github.com/vllm-project/vllm/issues/64039) [RFC]: Disaggregated pre/post-processing for pooling IO Processor plugins `RFC` `kv-connector` `pooling`
- [#64038](https://github.com/vllm-project/vllm/issues/64038) [Bug]: `/v1/chat/completions/derender` usage omits `reasoning_tokens` and `cached_tokens` that `/v1/chat/completions` reports `bug`
- [#64034](https://github.com/vllm-project/vllm/issues/64034) [Bug]: RuntimeError: Already borrowed with --renderer-num-workers > 1 for non-HfRenderer renderers `bug`
- [#64012](https://github.com/vllm-project/vllm/issues/64012) [Bug]: v0.19.0 qwen3_xml corrupts separate tool calls across chunk boundaries (legacy/backport) `tool-calling`
- [#64005](https://github.com/vllm-project/vllm/issues/64005) [Bug][MRV2] Qwen3-32B BF16 TP=2 emits only token ID 0 on v0.28.0; MRV1 works `bug`
- [#63990](https://github.com/vllm-project/vllm/issues/63990) [Bug]: INC ignores per-layer datatype and packing-format overrides `quantization`
- [#63983](https://github.com/vllm-project/vllm/issues/63983) [Bug]: FunctionGemma tool parser drops every non-string argument (numbers, booleans, arrays, objects) `bug` `tool-calling`
- [#63958](https://github.com/vllm-project/vllm/issues/63958) [Performance]: SM120 FP8 KV cache prefill: widening the referenced pages to BF16 once and running BF16 FA2 is about 1.5× faster than FlashInfer's FP8-K/V FA2 path
- [#63945](https://github.com/vllm-project/vllm/issues/63945) [Bug]: FLEX_ATTENTION fails on EmbeddingGemma 2 (encoder-only): create_block_mask compiled with mode="reduce-overhead" returns CUDAGraph outputs that get overwritten
- [#63941](https://github.com/vllm-project/vllm/issues/63941) [Bug]: Kimi K3 non-streaming content leaks truncated XTML marker fragments `tool-calling` `kimi` `k3`
- [#63942](https://github.com/vllm-project/vllm/issues/63942) [Bug]: [MRV2] Spec-decode rejection sampling is not covered by profile_run
- [#63925](https://github.com/vllm-project/vllm/issues/63925) [Bug]: Tokenizer/processor snapshot (#60825) downloads model weights it doesn't ignore (`*.ot`, `*.tflite`, ...): ~1.57 GB extra for gpt2
- [#63906](https://github.com/vllm-project/vllm/issues/63906) [Bug]: FunctionGemma converts escape-delimited string literals into numbers, booleans and null `tool-calling`

#### 🔒 Closed Issues
- [#40809](https://github.com/vllm-project/vllm/issues/40809) [Feature]: Support DDTree speculative decoding
- [#40903](https://github.com/vllm-project/vllm/issues/40903) [Bug]: Deepseek-V4-Flash failed to load on 8*L20
- [#62818](https://github.com/vllm-project/vllm/issues/62818) [RFC]: Preserve output distribution under structured-output + speculative decoding
- [#41789](https://github.com/vllm-project/vllm/issues/41789) [Bug]: gemma4 31B MTP Avg Draft acceptance rate: 0.2%
- [#41784](https://github.com/vllm-project/vllm/issues/41784) [Performance]: KV prefetching not spawned on time can cause unnecessary GPU idle
- [#42449](https://github.com/vllm-project/vllm/issues/42449) [RFC]: Attention Backend Refactor
- [#40696](https://github.com/vllm-project/vllm/issues/40696) [Feature]: Prefix caching completely ineffective for Mamba-hybrid models (Qwen3.5) when prompt < block_size (528 tokens)
- [#60160](https://github.com/vllm-project/vllm/issues/60160) [Bug][ROCm] Qwen3.8-27B-FP8 (TP4, MI355X) accuracy collapses at high concurrency with `VLLM_ROCM_USE_AITER=1`; fine with AITER off
- [#40564](https://github.com/vllm-project/vllm/issues/40564) [Bug]: UX of Weight Prefetchers on Startup Failure
- [#40994](https://github.com/vllm-project/vllm/issues/40994) [Bug]: vllm does not expose /v1/audio/transcriptions for google/gemma-4-E4B-it
- [#43089](https://github.com/vllm-project/vllm/issues/43089) [Feature]: Integrate FlashQLA for fast linear attention
- [#43888](https://github.com/vllm-project/vllm/issues/43888) MLA: kv_b_proj.weight.dtype AttributeError on quantized ColumnParallelLinear in chunked prefill
- [#56217](https://github.com/vllm-project/vllm/issues/56217) [Feature]: DeepSeek-V4.1-Flash Kernels Integration & Optimization Tracker
- [#39863](https://github.com/vllm-project/vllm/issues/39863) [Bug]: V1 Engine: Child process (EngineCore) dies silently while parent (APIServer) remains alive and responds to health checks, causing service hang
- [#40736](https://github.com/vllm-project/vllm/issues/40736) [Bug]: GDN-based models (Qwen3.5/3.6 family) crash on the second request when running on multi-GPU XPU with prefix caching enabled
- [#40742](https://github.com/vllm-project/vllm/issues/40742) [Bug]: CUDA graph capture crashes during startup due to Inductor autotuning torch.cuda.synchronize() inside graph capture (FULL_DECODE_ONLY + MLA + FP8) when PDL is enabled
- [#41687](https://github.com/vllm-project/vllm/issues/41687) [Bug]: DeepEP MoE all-to-all backend integration is unusable on Blackwell (SM103 / GB300)
- [#42157](https://github.com/vllm-project/vllm/issues/42157) [Bug]: V1 Scheduler hard-fails on stale req_id in `_update_after_schedule` (defensive guard missing)
- [#59502](https://github.com/vllm-project/vllm/issues/59502) [RFC]: Weight Reload Refactor
- [#62116](https://github.com/vllm-project/vllm/issues/62116) [Bug]: GDN chunk/prefill path overflows fp16 with a large fp32 SSM state (chunk-path follow-up to #54146)
- [#40382](https://github.com/vllm-project/vllm/issues/40382) [Bug]: Gemma-4 + DFlash unservable on Ampere — non-causal + head_dim=256 has no compatible attention backend
- [#41271](https://github.com/vllm-project/vllm/issues/41271) releases/v0.11.1: CVE-2026-22807 trust_remote_code gate missing in transformers backend
- [#41273](https://github.com/vllm-project/vllm/issues/41273) Backport CVE-2026-22807 (transformers-backend trust_remote_code) to releases/v0.11.2?
- [#59065](https://github.com/vllm-project/vllm/issues/59065) [Bug]: FlashInfer MLA with DCP>1 crashes in kernel warmup on ragged spec/non-spec decode batch (`causal_seqlens_kv_global must have shape (9,), got (2,)`)
- [#60451](https://github.com/vllm-project/vllm/issues/60451) [Bug]: Spec decode with structured outputs biases the sampling distribution (grammar-invalid drafts resampled from p instead of residual)
- [#62417](https://github.com/vllm-project/vllm/issues/62417) [Bug][Spec Decode] DSpark corrupts thinking/chat outputs on DeepSeek-V4.1-Flash-1017 (all k; both v0.32.0 and nightly; clean without speculation)
- [#60261](https://github.com/vllm-project/vllm/issues/60261) [Bug]: Block-FP8 models crash on SM120 without a CUDA toolkit: DeepGEMM is selected although its JIT cannot run (no fallback to CUTLASS block FP8)
- [#48478](https://github.com/vllm-project/vllm/issues/48478) [RFC] Fail-Closed Graph Storage Contract for Weight Reload
- [#41420](https://github.com/vllm-project/vllm/issues/41420) Backport request: CVE-2026-24779 (urlparse → urllib3 parse_url) on releases/v0.9.0
- [#43634](https://github.com/vllm-project/vllm/issues/43634) [RFC]:Sequence Parallelism (SP) for Vision Transformers (ViT) in VLM Inference
- [#62828](https://github.com/vllm-project/vllm/issues/62828) [Bug][ROCm]: ROCM_ATTN sliding-window kernels output NaN when an out-of-window KV slot holds NaN/Inf
- [#61374](https://github.com/vllm-project/vllm/issues/61374) [Bug]: Regression after #58877: gpt-oss MXFP4 selects failing Triton MoE backend on Thor (SM110)
- [#64090](https://github.com/vllm-project/vllm/issues/64090) [CI Failure]: flashinfer-nvfp4-xqa-dgx-spark - test_flashinfer_xqa_nvfp4_decode_correctness: 0 tests selected
- [#61874](https://github.com/vllm-project/vllm/issues/61874) [Bug]: Disabled local media access returns HTTP 500 instead of 400
- [#54709](https://github.com/vllm-project/vllm/issues/54709) [Bug]: Qwen4Exp (Qwen3.8-Flash-Next) hard-refuses PP>1 for any PLE checkpoint, and its MTP draft head branches on the global `is_first_rank`
- [#59970](https://github.com/vllm-project/vllm/issues/59970) [Bug]: DeepSeek-V4.1 DSpark adaptive verification + FULL_AND_PIECEWISE: illegal memory access under concurrent prefill (FlashInfer sparse DSV41 builders declare ALWAYS)
- [#59576](https://github.com/vllm-project/vllm/issues/59576) [Bug]: Rust vllm-bench ignores usage.prompt_tokens, under-reporting total input tokens
- [#62965](https://github.com/vllm-project/vllm/issues/62965) [Feature]: Capture the DeepSeek-V4.1 decoder replay graphs on the model graphs' stream so they share its graph pool
- [#63972](https://github.com/vllm-project/vllm/issues/63972) [CI Failure]: CPU-Spec Decode Tests - test_dflash2.py::test_dflash_fc_runs_fp32_target_hidden_states_in_draft_dtype
- [#62308](https://github.com/vllm-project/vllm/issues/62308) [Bug]: Qwen3.8-Flash-Next checkpoints with quantized q/k/v and an unquantized QSA indexer fail to load since #59533 (v0.32.0)
- [#60489](https://github.com/vllm-project/vllm/issues/60489) [Bug]: Qwen4Exp (Qwen3.8-Flash-Next) QSA indexer prefill workspace is not seen by the memory profiler → OOM on first long prefill
- [#63744](https://github.com/vllm-project/vllm/issues/63744) [Feature]: [RFC / Performance] How LLM Agent Context Compaction Collapses Automatic Prefix Caching (APC)
- [#63743](https://github.com/vllm-project/vllm/issues/63743) [Feature]: [Case Study] Agent Context Compaction Breaks RadixAttention Prefix Caching (10.1% -> 99.6% Hit Rate)
- [#50079](https://github.com/vllm-project/vllm/issues/50079) RL Weight Update Tracker

### SGLang (`sgl-project/sglang`)

**Stars:** 38,289 · **Open issues:** 6,205 · **Last push:** <1h ago

Today saw no new releases for SGLang, but several important pull requests were merged. Notably, PR #46812 enhances the scheduler's performance by refreshing the PD prefill bootstrap-queue prefixes, while PR #46893 introduces the ability to select the location of Engram tables using the `--engram-config` option. Additionally, a fix was made in PR #41289 to serve split-expert MXFP4 MoE via FP4 Marlin, addressing a crucial functionality in the compressed-tensors module. On the issue front, #46806 highlights a bug where weight updates inadvertently load the target's weights into a DFLASH draft without a proper selector, posing a potential risk in weight management processes.

#### ✅ Merged PRs
- [#46641](https://github.com/sgl-project/sglang/pull/46641) [Perf] MOSS-Image: Fuse joint-block QKV projections in high quality
- [#46812](https://github.com/sgl-project/sglang/pull/46812) [Perf] scheduler: Refresh PD prefill bootstrap-queue prefixes in the waiting-prefix LRU pass
- [#46902](https://github.com/sgl-project/sglang/pull/46902) [Chore] [AMD] mono-kernel: Update sgl-amd-mono version
- [#41289](https://github.com/sgl-project/sglang/pull/41289) [Fix] compressed-tensors: Serve split-expert MXFP4 MoE via FP4 Marlin
- [#46897](https://github.com/sgl-project/sglang/pull/46897) [Fix] dsv4: Let the DSpark draft prep run without host lengths on every device
- [#46513](https://github.com/sgl-project/sglang/pull/46513) [Fix] rust-server: End a native /generate stream on a scheduler abort frame, as Python does
- [#46894](https://github.com/sgl-project/sglang/pull/46894) [Fix] lora: Keep per-expert MoE LoRA buffers for experts already wrapped
- [#44292](https://github.com/sgl-project/sglang/pull/44292) [Feat] [AMD] torch-profiler: Enable torch.profiler GPU tracing on torch 2.12 / ROCm 10.1
- [#46891](https://github.com/sgl-project/sglang/pull/46891) [Fix] dsv4: Build the DSpark draft block metadata without host sequence lengths
- [#46695](https://github.com/sgl-project/sglang/pull/46695) [Refactor] attention: Route every FlashAttention call through the selected kernel
- [#46750](https://github.com/sgl-project/sglang/pull/46750) [CI] [AMD] miles-nightly: Split the 8-GPU suite into two jobs
- [#46896](https://github.com/sgl-project/sglang/pull/46896) [Fix] dsv41: Use `--attn-dp-size` in the Engram docs and restore env overrides on exceptions
- [#46895](https://github.com/sgl-project/sglang/pull/46895) Revert "[Doc] beam: Use lmsysorg/sglang:dev image in the cookbook"
- [#45555](https://github.com/sgl-project/sglang/pull/45555) [Perf] [AMD] vattn-asm: Split small-batch MTP verify attention over all CUs on gfx950
- [#46886](https://github.com/sgl-project/sglang/pull/46886) [Doc] beam: Use lmsysorg/sglang:dev image in the cookbook
- [#46893](https://github.com/sgl-project/sglang/pull/46893) [Feat] dsv41: Choose where Engram tables live with `--engram-config`
- [#46774](https://github.com/sgl-project/sglang/pull/46774) [CI] [AMD] deps: Install openai 2.8.0 in AMD CI for the Responses API
- [#44797](https://github.com/sgl-project/sglang/pull/44797) [Fix] [AMD] moe/topk: Preserve fp32 bias across aiter routing paths
- [#46093](https://github.com/sgl-project/sglang/pull/46093) [Perf] moe: Always pass the global token count to the Mega MoE tile heuristic
- [#46497](https://github.com/sgl-project/sglang/pull/46497) [Perf] eplb: Fuse expert-count recording into one kernel on CUDA decode graphs
- [#43839](https://github.com/sgl-project/sglang/pull/43839) [Perf] [AMD] qwen3_5: Quantize the BF16 GDN projections to MXFP4 online
- [#43271](https://github.com/sgl-project/sglang/pull/43271) [Fix] DSA/KDA: Handle MoE padding in hybrid MTP verification
- [#46682](https://github.com/sgl-project/sglang/pull/46682) [Fix] distributed: Probe the TP group's node span on the first multimem all-gather
- [#46792](https://github.com/sgl-project/sglang/pull/46792) [Refactor] bcg: Delete capture leftovers and rename `capture_stub` to `on_capture`
- [#45474](https://github.com/sgl-project/sglang/pull/45474) [Perf] [NVIDIA] speculative: Move the host work between Qwen3.5 MTP decode graphs into the graphs (1/2)
- [#45753](https://github.com/sgl-project/sglang/pull/45753) [Perf] QSA: Remove the D2D copy in prefill generated kv gather
- [#45266](https://github.com/sgl-project/sglang/pull/45266) [Feat] [NVIDIA] megakernels: Qwen3.5 binding and EAGLE entry wiring for NVIDIA megakernel plugins
- [#46879](https://github.com/sgl-project/sglang/pull/46879) [Fix] rust-server: Report the launched --tokenizer-path from the info endpoints
- [#46719](https://github.com/sgl-project/sglang/pull/46719) [Refactor] bcg: Record graph breaks at capture without running them
- [#46863](https://github.com/sgl-project/sglang/pull/46863) [Feat] jit: Split a header-only module's kernel instantiations across parallel translation units
- [#45363](https://github.com/sgl-project/sglang/pull/45363) [Fix] eplb: Load all local replicas of each expert
- [#43450](https://github.com/sgl-project/sglang/pull/43450) [Feat] scheduler: Add forward observer and deferred responses for plugins
- [#46567](https://github.com/sgl-project/sglang/pull/46567) [Perf] paged-experts: fewer host syncs in host-planned steps
- [#45638](https://github.com/sgl-project/sglang/pull/45638) [Fix] diffusion: float32 Plucker rays for bf16 camera poses
- [#46600](https://github.com/sgl-project/sglang/pull/46600) [Fix] diffusion: HunyuanImage-3 MoE shared MLP and timestep schedule on CUDA
- [#45833](https://github.com/sgl-project/sglang/pull/45833) [Fix] diffusion: LoRA format alpha and rank scaling
- [#46036](https://github.com/sgl-project/sglang/pull/46036) [Feat] [AMD] mono-kernels: Register specs by model type
- [#45624](https://github.com/sgl-project/sglang/pull/45624) [Feat] model: Add Flint (RecursiveSI/flint) support
- [#44676](https://github.com/sgl-project/sglang/pull/44676) [Feat] dflash: Serve SpecForge MLA drafts through the target MLA attention
- [#46700](https://github.com/sgl-project/sglang/pull/46700) [Fix] mem_cache: Clamp SWA tombstone recovery to the request's protected prefix
- [#46689](https://github.com/sgl-project/sglang/pull/46689) [Perf] disaggregation: Restore host-received decode KV without blocking the scheduler
- [#46674](https://github.com/sgl-project/sglang/pull/46674) [Perf] radix-tree: Keep the GIL for tree-core flag, size and digest reads unless the core is busy
- [#46629](https://github.com/sgl-project/sglang/pull/46629) [Test] rust-server: Drop two unit tests that mirror one-line delegations
- [#42092](https://github.com/sgl-project/sglang/pull/42092) [Feat] [AMD] attention: Default consumer RDNA to Triton attention
- [#46686](https://github.com/sgl-project/sglang/pull/46686) [CI] [AMD] diffusion: Skip the CUDA-only Nomas fused-kernel and FlexAttention unit tests on ROCm
- [#46859](https://github.com/sgl-project/sglang/pull/46859) [Doc] cookbook: Add LFM3 cookbook
- [#46853](https://github.com/sgl-project/sglang/pull/46853) [Fix] custom-all-reduce: Remove multi-node VMM allocator gate
- [#46844](https://github.com/sgl-project/sglang/pull/46844) [CI] [NPU] precise-test: skip suites that register no PR test
- [#45678](https://github.com/sgl-project/sglang/pull/45678) [Fix] disaggregation: Avoid extra GPU contexts with PD
- [#46807](https://github.com/sgl-project/sglang/pull/46807) [Doc] cookbook: Refresh SemiAnalysis AgentX launches with DeepSeek-V4 B200 DSpark6 disagg and Muse Spark GB300 points
- [#46736](https://github.com/sgl-project/sglang/pull/46736) [Doc] [NPU] docs: update npu docs and fix some issues
- [#45735](https://github.com/sgl-project/sglang/pull/45735) [CI] slash-command: Drive opt-in CI tiers from a registry
- [#45576](https://github.com/sgl-project/sglang/pull/45576) [Perf] [AMD] rccl: upgrade rccl to 2.32.3 for rocm10.1
- [#43815](https://github.com/sgl-project/sglang/pull/43815) [Perf] [AMD] fp8: Use the AITER CK blockscale GEMM by default on gfx942
- [#44888](https://github.com/sgl-project/sglang/pull/44888) [Fix] diffusion: pipeline and model-helper bug fixes
- [#46457](https://github.com/sgl-project/sglang/pull/46457) [Perf] paged-experts: fuse slot lookup into decide

#### 🐛 New Issues
- [#46803](https://github.com/sgl-project/sglang/issues/46803) [Bug] FlashInfer `cascade` module JIT-compiles inside the first prefixed request (~4.5 s) on pip installs 💬1
- [#46806](https://github.com/sgl-project/sglang/issues/46806) [Bug] Weight updates silently load the target's weights into a DFLASH draft; `update_weights_from_disk` has no `selector` to prevent it 💬1
- [#46764](https://github.com/sgl-project/sglang/issues/46764) [RFC][Feature] SM90 Implementation Plan for the Q4 Agentic Cache Scheduling Roadmap 💬1
- [#46763](https://github.com/sgl-project/sglang/issues/46763) [Bug] Mooncake PD disaggregation: DSA_TAIL raises "DSA tail slot index missing" when Prefill/Decode seq_len diverge on last_chunk 💬1
- [#46900](https://github.com/sgl-project/sglang/issues/46900) [Feature] [AMD] RDNA3/RDNA4 (gfx1100/gfx1201) on main: CI and upstreaming plan
- [#46899](https://github.com/sgl-project/sglang/issues/46899) [Bug] HiCache Mooncake backend: with DP attention each DP rank mounts the full MOONCAKE_GLOBAL_SEGMENT_SIZE (README says total = global segment size)
- [#46869](https://github.com/sgl-project/sglang/issues/46869) [Tracking] MiniMax-M3.1-Flash support `new-model`
- [#46831](https://github.com/sgl-project/sglang/issues/46831) [Bug] ROCm DCP-PD allocator reserve growth precedes HIP resource aborts under burst load
- [#46829](https://github.com/sgl-project/sglang/issues/46829) [Bug] ROCm absorb-BMM hand config aborts Triton compilation at M=256 on gfx950
- [#46799](https://github.com/sgl-project/sglang/issues/46799) [Bug] hicache: Host cache initialization fails in TDX/CC when cudaHostRegister is unavailable
- [#46798](https://github.com/sgl-project/sglang/issues/46798) [Bug] [SM120]DeepSeek v4.1 flash Unstable FullTopK index order in C1 and C2 decode
- [#46793](https://github.com/sgl-project/sglang/issues/46793) [Bug] FlashInfer backend: Triton fallback in `_safe_merge_state` treats base-2 LSE as natural log
- [#46760](https://github.com/sgl-project/sglang/issues/46760) [Bug] HiCache L3 (Mooncake) backup fails for GDN models with PLE slot side states (L3 hit rate stuck at 0)
- [#46756](https://github.com/sgl-project/sglang/issues/46756) [PD Disaggregation] Decode server fails to start with CUDA OOM on hybrid mamba models (GLM-5.3-Flash): mamba memory budget ignores decode extra slots, pre-allocated speculative states, and MTP nextn layers
- [#46752](https://github.com/sgl-project/sglang/issues/46752) [Bug] DSPARK/DFLASH speculative decoding silently ignores repetition_penalty / frequency_penalty / presence_penalty
- [#46742](https://github.com/sgl-project/sglang/issues/46742) [Bug] qwen3.8-27b says "let me look at the file" but emits no tool call, then concludes without evidence (thinking-only / tool-call dropped)
- [#46732](https://github.com/sgl-project/sglang/issues/46732) [Feature] Installing the required packages supports a certain range.
- [#46715](https://github.com/sgl-project/sglang/issues/46715) [Feature] [Model Support] Native SGLang Support for MemT-1.0 (Nano and Flash)

#### 🔒 Closed Issues
- [#44070](https://github.com/sgl-project/sglang/issues/44070) [Bug] PD prefill: early cached-prefix send can transfer KV before the HiCache load-back finishes (stale KV on decode)
- [#27787](https://github.com/sgl-project/sglang/issues/27787) [Bug] BF16 RL weight update with non-routed `moe_runner_backend=flashinfer_trtllm` crashes in `_load_w13` with 64-vs-2048 shape mismatch (blocked/padded w13 layout not restored on the update_weights_from_tensor path)
- [#35148](https://github.com/sgl-project/sglang/issues/35148) [Bug] Qwen3.8-27B-FP8 reasoning content does not parse correctly in rust sgl-model-gateway
- [#34969](https://github.com/sgl-project/sglang/issues/34969) [Bug] HF3FS HiCache hits ZeroDivisionError with DeepSeek-V4 logical KV anchor
- [#36820](https://github.com/sgl-project/sglang/issues/36820) [Feature] Sparse destination-aware MoE dispatch to skip inactive EP ranks
- [#35564](https://github.com/sgl-project/sglang/issues/35564) [Bug] 8 tool-call parsers give wrong or missing calls in token-by-token streaming
- [#36511](https://github.com/sgl-project/sglang/issues/36511) [Feature/RFC] Optional fp8 (quantized) input embedding to free VRAM for large-vocab models on small GPUs
- [#36858](https://github.com/sgl-project/sglang/issues/36858) [Feature] Optimize the configuration and server startup of sgl-model-gateway
- [#35811](https://github.com/sgl-project/sglang/issues/35811) [Bug] Using hicache in the main branch of deepseekv4-flash will result in illegal memory access.
- [#36174](https://github.com/sgl-project/sglang/issues/36174) [Feature] Support deterministic inference for DeepSeek-V4
- [#35324](https://github.com/sgl-project/sglang/issues/35324) [Bug] Intermittent CUDA device-side crash with DSPARK speculative decoding on DeepSeek-V4-Flash-0731
- [#36598](https://github.com/sgl-project/sglang/issues/36598) [Bug] Disabling DSA via index_topk override with index_share_for_mtp_iteration=true asserts in scheduler (get_dsa_index_topk)
- [#44794](https://github.com/sgl-project/sglang/issues/44794) [Bug] [AMD] select_experts casts the fp32 MoE correction bias to bf16 before #37133's fp32 aiter path, so GLM-5.x still routes with a bf16 bias
- [#36841](https://github.com/sgl-project/sglang/issues/36841) Use `dtype` instead of deprecated `torch_dtype` for transformers >= 4.56
- [#36822](https://github.com/sgl-project/sglang/issues/36822) [Bug] GPTQ Marlin MoE fails or produces NaNs with BF16 and tensor parallelism
- [#35702](https://github.com/sgl-project/sglang/issues/35702) [Bug] `sharded_state` cannot save and load an MLA model
- [#36776](https://github.com/sgl-project/sglang/issues/36776) [Bug] False assertions exist in the mmlu test of PR:24689
- [#36764](https://github.com/sgl-project/sglang/issues/36764) [Bug] 374 MB of every `lmsysorg/sglang:latest` pull is three directories the Dockerfile deletes one layer too late
- [#36734](https://github.com/sgl-project/sglang/issues/36734) [Bug] Models fail to produce non-empty answer while evaluated for reasoning on long context.
- [#46764](https://github.com/sgl-project/sglang/issues/46764) [RFC][Feature] SM90 Implementation Plan for the Q4 Agentic Cache Scheduling Roadmap
- [#46461](https://github.com/sgl-project/sglang/issues/46461) [Bug] HunyuanImage-3 generates a noise texture on CUDA (shared MLP reads in-place FusedMoE output)
- [#44120](https://github.com/sgl-project/sglang/issues/44120) [Bug] qwen3_coder returns object and array arguments as strings in mixed unions
- [#46756](https://github.com/sgl-project/sglang/issues/46756) [PD Disaggregation] Decode server fails to start with CUDA OOM on hybrid mamba models (GLM-5.3-Flash): mamba memory budget ignores decode extra slots, pre-allocated speculative states, and MTP nextn layers

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 132,573 · **Open issues:** 2,583 · **Last push:** <1h ago

In the last 24 hours, llama.cpp released several noteworthy updates: the versions b11946 and b11945 introduced real-time conversation and transcription capabilities on the server, along with new LiquidAI models such as d1-2B and d1-omni-2B, enhancing the framework's flexibility in language tasks. Key merged features include improvements to chat template reasoning efforts with b11944 and support for deferred tools from b11940, enabling more robust interactions and tool references. Among the new issues, a significant bug was reported (#31245) regarding server crashes on Windows due to an assertion failure after extensive task execution, highlighting a critical area for developer attention.

#### 🚀 New Releases
- [b11946](https://github.com/ggml-org/llama.cpp/releases/tag/b11946) b11946
- [b11945](https://github.com/ggml-org/llama.cpp/releases/tag/b11945) b11945
- [b11944](https://github.com/ggml-org/llama.cpp/releases/tag/b11944) b11944
- [b11941](https://github.com/ggml-org/llama.cpp/releases/tag/b11941) b11941
- [b11940](https://github.com/ggml-org/llama.cpp/releases/tag/b11940) b11940
- [b11938](https://github.com/ggml-org/llama.cpp/releases/tag/b11938) b11938
- [b11936](https://github.com/ggml-org/llama.cpp/releases/tag/b11936) b11936
- [b11935](https://github.com/ggml-org/llama.cpp/releases/tag/b11935) b11935
- [b11934](https://github.com/ggml-org/llama.cpp/releases/tag/b11934) b11934
- [b11933](https://github.com/ggml-org/llama.cpp/releases/tag/b11933) b11933

#### ✅ Merged PRs
- [#31269](https://github.com/ggml-org/llama.cpp/pull/31269) server : add realtime conversation and transcription on /v1/realtime
- [#31275](https://github.com/ggml-org/llama.cpp/pull/31275) model : add LiquidAI/d1-2B and LiquidAI/d1-omni-2B
- [#31271](https://github.com/ggml-org/llama.cpp/pull/31271) server: expose the reasoning effort levels of the chat template
- [#31265](https://github.com/ggml-org/llama.cpp/pull/31265) tests: fix CI riscv timeout in test-llama-context
- [#31257](https://github.com/ggml-org/llama.cpp/pull/31257) model : add LiquidAI/LFM3-Audio-2B and LiquidAI/LFM3-Omni-2B
- [#31255](https://github.com/ggml-org/llama.cpp/pull/31255) HIP/CUDA: remove pragma unroll from loops in conv2d where itteration count cant be infered at compile time
- [#31256](https://github.com/ggml-org/llama.cpp/pull/31256) common : support deferred tools and tool_reference content parts
- [#31240](https://github.com/ggml-org/llama.cpp/pull/31240) snapdragon: switch QDC artifact upload and log download to v2 API
- [#31252](https://github.com/ggml-org/llama.cpp/pull/31252) model : add LiquidAI/LFM3-1.7B and LiquidAI/LFM3-VL-2B
- [#30751](https://github.com/ggml-org/llama.cpp/pull/30751) No wasi spawning
- [#31243](https://github.com/ggml-org/llama.cpp/pull/31243) llama : build the k-pool sparse selection independently of the kq_mask shape
- [#31204](https://github.com/ggml-org/llama.cpp/pull/31204) rpc : catch std::length_error in recv_msg
- [#31145](https://github.com/ggml-org/llama.cpp/pull/31145) tests : speed up tensor data generation and model saving
- [#31239](https://github.com/ggml-org/llama.cpp/pull/31239) vulkan: fix CI llvmpipe by allowing dim 3 broadcast in MUL_MAT
- [#21231](https://github.com/ggml-org/llama.cpp/pull/21231) server: add router device memory margin parameter for dynamic unloading
- [#31165](https://github.com/ggml-org/llama.cpp/pull/31165) mtmd-cli: Reduced scope of batch pointer (#31155)
- [#31216](https://github.com/ggml-org/llama.cpp/pull/31216) tests : fix multi-seq split replay and partial-state cases for trained models
- [#31246](https://github.com/ggml-org/llama.cpp/pull/31246) ui: fix system message row stretching to full prompt height in WebKit
- [#30980](https://github.com/ggml-org/llama.cpp/pull/30980) [Model] Add MiniCPM-OCR-Jev
- [#31242](https://github.com/ggml-org/llama.cpp/pull/31242) common : --model or -hf is required
- [#31009](https://github.com/ggml-org/llama.cpp/pull/31009) glm5-next : QSA without kq_mask (+ DSA)
- [#31230](https://github.com/ggml-org/llama.cpp/pull/31230) metal : add GGML_OP_TOP_K_MASK
- [#31231](https://github.com/ggml-org/llama.cpp/pull/31231) ci : use ccache depend mode for ROCm release builds
- [#31222](https://github.com/ggml-org/llama.cpp/pull/31222) ci : force python 3.12 on ubuntu 26.04
- [#31146](https://github.com/ggml-org/llama.cpp/pull/31146) ggml : relax scale to non-contiguous views
- [#31200](https://github.com/ggml-org/llama.cpp/pull/31200) llama : remove obsolete n_pad from memory instances
- [#31215](https://github.com/ggml-org/llama.cpp/pull/31215) ui: List org-less models first in the model selector
- [#31170](https://github.com/ggml-org/llama.cpp/pull/31170) opencl: refine mul mat id -1 index handling
- [#31172](https://github.com/ggml-org/llama.cpp/pull/31172) opencl: initial support for q3_k
- [#31212](https://github.com/ggml-org/llama.cpp/pull/31212) ui: Highlight reasoning toggle on hover and align it with model selector
- [#27401](https://github.com/ggml-org/llama.cpp/pull/27401) ui: add conversation compaction
- [#31176](https://github.com/ggml-org/llama.cpp/pull/31176) ui: Open model details in a drawer without leaving the page
- [#31187](https://github.com/ggml-org/llama.cpp/pull/31187) ui: use shared confirmation dialog for conversation deletion

#### 🐛 New Issues
- [#31263](https://github.com/ggml-org/llama.cpp/issues/31263) Eval bug: GSQ-RCO implementation of DSV4.1 does not load `bug-unconfirmed` 💬1
- [#31245](https://github.com/ggml-org/llama.cpp/issues/31245) Eval bug: GGML_ASSERT(t_start > 0) in server-common.h set_prompt_last aborts llama-server on Windows (0xc0000409) after ~1.5M tasks 💬1
- [#31281](https://github.com/ggml-org/llama.cpp/issues/31281) Eval bug: GLM 5.3 (non flash) doesn't load with Tensor Split and CUDA backend `bug-unconfirmed`
- [#31280](https://github.com/ggml-org/llama.cpp/issues/31280) Compile bug: Errors on glibc < 2.34 `bug-unconfirmed`
- [#31272](https://github.com/ggml-org/llama.cpp/issues/31272) Eval bug: Metal backend fails to initialize on macOS 14 / M2 Ultra: constexpr bfloat cast in unary.metal `bug-unconfirmed`
- [#31262](https://github.com/ggml-org/llama.cpp/issues/31262) Eval bug: SYCL llama-server prompt processing ~35% slower in b11804 than b11046 with CPU-offloaded MoE experts (-ncmoe), not reproduced by llama-bench
- [#31261](https://github.com/ggml-org/llama.cpp/issues/31261) Eval bug: Vulkan multi-GPU layer split on 2x Intel Arc Pro B65 (Battlemage, Mesa 26.2.5 ANV): decode drops ~35% and becomes unstable, degrades over repetitions
- [#31260](https://github.com/ggml-org/llama.cpp/issues/31260) Eval bug: GGML_VK_PERF_LOGGER=1 aborts with two Vulkan devices: GGML_ASSERT(ctx->compute_ctx.expired()) at ggml-vulkan.cpp:14341
- [#31238](https://github.com/ggml-org/llama.cpp/issues/31238) Eval bug: OpenVINO NPU not working in Windows `bug-unconfirmed`
- [#31232](https://github.com/ggml-org/llama.cpp/issues/31232) Eval bug: Stream resume produced no new bytes, giving up Llama.3.2.1Bl on llama-server returns error `bug-unconfirmed`
- [#31229](https://github.com/ggml-org/llama.cpp/issues/31229) Misc. bug: Op offload counts heads as batch size, creating isolated GPU splits in CPU layers `bug-unconfirmed`
- [#31228](https://github.com/ggml-org/llama.cpp/issues/31228) spec: DFlash drafters with attention_bias=true (the gpt-oss drafters) fail to load — "wrong number of tensors; expected 123, got 91"

#### 🔒 Closed Issues
- [#20632](https://github.com/ggml-org/llama.cpp/issues/20632) Feature Request: Graceful reasoning budget termination. Avoid mid-sentence cutoff.
- [#27462](https://github.com/ggml-org/llama.cpp/issues/27462) Eval bug: Bailing V3 (Ling 3.0) autoparser lacks a <tool_call> reasoning terminator but emits these often mid-reasoning
- [#24840](https://github.com/ggml-org/llama.cpp/issues/24840) Bug: server - update_slots(): batch_view offset is not propagated to ctx_dft
- [#28790](https://github.com/ggml-org/llama.cpp/issues/28790) Eval bug: MTP (--spec-type draft-mtp) causes ~57x prefill slowdown on a self-compiled Windows build (MSVC + CUDA 12.8)
- [#25227](https://github.com/ggml-org/llama.cpp/issues/25227) webui: model selector — org-less models visually attach to the previous org group
- [#25147](https://github.com/ggml-org/llama.cpp/issues/25147) Feature: Prompt compression context transform for efficient inference
- [#28804](https://github.com/ggml-org/llama.cpp/issues/28804) Feature Request: Support for fraunhofer-iis/elmod-2.7b-it
- [#28807](https://github.com/ggml-org/llama.cpp/issues/28807) Eval bug: Vulkan CONCAT (SSM conv input) hangs the GPU ring on gfx1010 / Navi 10
- [#28808](https://github.com/ggml-org/llama.cpp/issues/28808) Eval bug: Vulkan n_ubatch 512 hangs the GPU ring on gfx1010 / Navi 10 (384 is fine)
- [#31263](https://github.com/ggml-org/llama.cpp/issues/31263) Eval bug: GSQ-RCO implementation of DSV4.1 does not load
- [#28801](https://github.com/ggml-org/llama.cpp/issues/28801) Unexpected Subjectivity Emergence in Low-Precision Quantization
- [#28812](https://github.com/ggml-org/llama.cpp/issues/28812) Vulkan: enabling all supported device features (incl. protectedMemory) kills the process on Huawei Maleoon GPU
- [#28826](https://github.com/ggml-org/llama.cpp/issues/28826) Eval bug: segmentation fault with -sm tensor and DeepSeek V4 Flash

### Ollama (`ollama/ollama`)

**Stars:** 185,031 · **Open issues:** 4,467 · **Last push:** <1h ago

On October 28, 2026, there were no new releases for Ollama, but several important pull requests were merged, including fixes to the LFM3 GGUF and improvements to llama-server speech functionality. Additionally, new models were added alongside a fix for the OpenCode v2 launch and configuration parsing. Among the new issues raised, the most notable is #19343, which reports an error when pulling the `lfm3-audio:latest` model due to missing MLX runtime support, highlighting a significant integration challenge for users. Other issues address session management quirks and model loading errors that may affect user experience.

#### ✅ Merged PRs
- [#19344](https://github.com/ollama/ollama/pull/19344) llm: LFM3 GGUF fixes and llama-server speech
- [#19333](https://github.com/ollama/ollama/pull/19333) New models
- [#19310](https://github.com/ollama/ollama/pull/19310) cmd/launch: fix OpenCode v2 launch and config parsing

#### 🐛 New Issues
- [#19343](https://github.com/ollama/ollama/issues/19343) ollama run lfm3-audio:latest pulling manifest Error: this model requires MLX support, but the MLX runtime is not available `bug` 💬9
- [#19347](https://github.com/ollama/ollama/issues/19347) error loading model: unknown model architecture: 'lfm3' [v0.40.12] `bug` 💬1
- [#19340](https://github.com/ollama/ollama/issues/19340) ollama run: Ctrl+C during """ multiline input leaves session in multiline mode, so later input is swallowed or saved as the system message `bug` 💬1
- [#19345](https://github.com/ollama/ollama/issues/19345) Pulls from hf.co fail behind DNS64: the NAT64 addresses of the CDN are refused as non-public
- [#19342](https://github.com/ollama/ollama/issues/19342) ollama show --modelfile writes a Modelfile that ollama create rejects when a SYSTEM/TEMPLATE/LICENSE/MESSAGE value contains """ followed by whitespace `bug`
- [#19341](https://github.com/ollama/ollama/issues/19341) ollama run: after /load, the previous session system prompt is still shown and saved but no longer sent (until /clear restores it) `bug`
- [#19337](https://github.com/ollama/ollama/issues/19337) Restarting the server more than an hour into a pull breaks the resume: "remove ...-partial-0: cannot find the file" on every retry, or digest mismatch
- [#19329](https://github.com/ollama/ollama/issues/19329) 对于 adm radeon rx 6750 GRE10GB的支持 `feature request`
- [#19326](https://github.com/ollama/ollama/issues/19326) Scheduler evicts by model path when keep_alive ties, not by size or recency

#### 🔒 Closed Issues
- [#19281](https://github.com/ollama/ollama/issues/19281) Claude Code with cloud model
- [#13567](https://github.com/ollama/ollama/issues/13567) gpt-oss slow using vulkan
- [#19303](https://github.com/ollama/ollama/issues/19303) launch: `ollama launch opencode` fails on OpenCode v2 because `opencode debug config` returns an array
- [#19347](https://github.com/ollama/ollama/issues/19347) error loading model: unknown model architecture: 'lfm3' [v0.40.12]
- [#19151](https://github.com/ollama/ollama/issues/19151) OpenAI compat: assistant tool_calls attached to previous message when content is an empty array
- [#19155](https://github.com/ollama/ollama/issues/19155) Cloud Responses API returns HTTP 413 for ~10.7 MiB coding requests

### LiteLLM (`BerriAI/litellm`)

**Stars:** 62,191 · **Open issues:** 5,674 · **Last push:** <1h ago

Today, LiteLLM released version 1.106.5, which includes updates to logging and observability, continuing a theme from earlier versions. Notable merged features include #47091, which maps string stop parameters to lists of strings, and #48668, enhancing the interaction between Codex and system input items. A critical new issue was identified with the import functionality failing on Python 3.15 due to the removal of `sre_constants`, which could impact users on that version. The steady stream of updates reflects the team's ongoing commitment to improving functionality and addressing user concerns promptly.

#### 🚀 New Releases
- [v1.106.5](https://github.com/BerriAI/litellm/releases/tag/v1.106.5) v1.106.5
- [v1.105.6](https://github.com/BerriAI/litellm/releases/tag/v1.105.6) v1.105.6
- [v1.104.8](https://github.com/BerriAI/litellm/releases/tag/v1.104.8) v1.104.8
- [v1.103.10](https://github.com/BerriAI/litellm/releases/tag/v1.103.10) v1.103.10

#### ✅ Merged PRs
- [#47091](https://github.com/BerriAI/litellm/pull/47091) fix(cohere): map string stop parameter to list of strings for stop_sequences
- [#42697](https://github.com/BerriAI/litellm/pull/42697) fix(langfuse otel): emit request metadata under langfuse.observation.metadata and langfuse.trace.metadata on the OTEL v2 Langfuse mapper
- [#48688](https://github.com/BerriAI/litellm/pull/48688) fix(ui): keep guardrail wizard navigation within the dialog
- [#48684](https://github.com/BerriAI/litellm/pull/48684) fix(tavily): return raw_content, score, favicon and the response envelope from Tavily search
- [#48694](https://github.com/BerriAI/litellm/pull/48694) fix(databricks): price the openjev decision model at its published 0.6 DBU per 1M input tokens
- [#48690](https://github.com/BerriAI/litellm/pull/48690) fix(embeddings): forward Gemini and Vertex request timeouts
- [#48686](https://github.com/BerriAI/litellm/pull/48686) fix(responses): preserve typed parts when logprobs is omitted
- [#48692](https://github.com/BerriAI/litellm/pull/48692) chore: rebuild Admin UI bundle for 1.109.0
- [#48673](https://github.com/BerriAI/litellm/pull/48673) chore: bump litellm-enterprise 0.1.79 -> 0.1.80, litellm 1.108.0 -> 1.109.0
- [#48275](https://github.com/BerriAI/litellm/pull/48275) feat(passthrough): let upstreams report the model name via x-litellm-upstream-model
- [#48645](https://github.com/BerriAI/litellm/pull/48645) fix(router): keep session tier pins coherent across workers
- [#48674](https://github.com/BerriAI/litellm/pull/48674) feat(helm): route extra ingress paths to custom services
- [#48665](https://github.com/BerriAI/litellm/pull/48665) test: update stale integration and guardrail e2e tests to intended behavior
- [#47122](https://github.com/BerriAI/litellm/pull/47122) fix(guardrails)!: redact secrets in tool traffic and system prompts
- [#48484](https://github.com/BerriAI/litellm/pull/48484) fix: preserve media across Responses and Gemini conversions
- [#48676](https://github.com/BerriAI/litellm/pull/48676) feat(morph): support open models and cached input pricing
- [#42467](https://github.com/BerriAI/litellm/pull/42467) test(cost): cover unpriced provider slugs and explicit zero rates
- [#48266](https://github.com/BerriAI/litellm/pull/48266) fix: honor empty mock completion responses (#48162)
- [#48682](https://github.com/BerriAI/litellm/pull/48682) fix(bedrock): add token_count_model to three Mantle-native Claude rows
- [#48683](https://github.com/BerriAI/litellm/pull/48683) ci: run spend-logs-guard and cost-map-guard without installing the litellm project
- [#48662](https://github.com/BerriAI/litellm/pull/48662) fix(decisions): catch ValidationError from validate_json in transform_decisions_response (#48660)
- [#48677](https://github.com/BerriAI/litellm/pull/48677) feat(search): add native xAI X Search support (#38505)
- [#48669](https://github.com/BerriAI/litellm/pull/48669) fix(mcp): refuse calls to tools hidden by discovery guardrails
- [#48668](https://github.com/BerriAI/litellm/pull/48668) fix(chatgpt): send system input items to Codex as developer
- [#48634](https://github.com/BerriAI/litellm/pull/48634) fix(ui): omit blank expiry from key edit and regenerate payloads
- [#48640](https://github.com/BerriAI/litellm/pull/48640) fix(proxy): abort the request with a 499 when the client disconnects during the body upload
- [#48670](https://github.com/BerriAI/litellm/pull/48670) fix(ui): keep vendor names and agent instructions in AI wording under SI terminology
- [#47440](https://github.com/BerriAI/litellm/pull/47440) feat(ui): add LITELLM_UI_USE_SI_TERMINOLOGY to show SI instead of AI in the Admin UI
- [#48666](https://github.com/BerriAI/litellm/pull/48666) docs(router): clarify heuristic v2 keyword settings
- [#48663](https://github.com/BerriAI/litellm/pull/48663) test: remove checks that pin implementation details and add a shadcn testing rule
- [#36678](https://github.com/BerriAI/litellm/pull/36678) fix(streaming): dict-usage arm drops prompt_tokens_details/completion_tokens_details its sibling arms preserve
- [#48644](https://github.com/BerriAI/litellm/pull/48644) fix(router): keep a lone deployment warm under router allowed_fails unless the policy names the exception
- [#47035](https://github.com/BerriAI/litellm/pull/47035) fix(proxy): keep every startup line JSON when json_logs is on
- [#48628](https://github.com/BerriAI/litellm/pull/48628) fix(proxy): release concurrency slots when synthetic streams complete
- [#48622](https://github.com/BerriAI/litellm/pull/48622) fix(mcp): accept YAML OpenAPI documents
- [#48625](https://github.com/BerriAI/litellm/pull/48625) fix(mcp): enforce deny-first tool policy consistently
- [#48632](https://github.com/BerriAI/litellm/pull/48632) feat(router): respect caller output budgets in complexity routing
- [#48636](https://github.com/BerriAI/litellm/pull/48636) refactor(proxy-extras): drop the spend-log api_key special case from the row check remedy
- [#48630](https://github.com/BerriAI/litellm/pull/48630) fix(ui): percent-encode request id in spend log detail URL
- [#48627](https://github.com/BerriAI/litellm/pull/48627) fix(complexity_router): keep the held user_turn route for Codex compaction requests
- [#48650](https://github.com/BerriAI/litellm/pull/48650) fix(aiohttp_transport): close an owned aiohttp session when its evicted transport is collected
- [#48651](https://github.com/BerriAI/litellm/pull/48651) fix(cost-map): add 2026-11-06 deprecation_date to two together_ai rows
- [#48605](https://github.com/BerriAI/litellm/pull/48605) fix(proxy)!: backport #48599 to stable/1.106.x
- [#48604](https://github.com/BerriAI/litellm/pull/48604) fix(proxy)!: backport #48599 to stable/1.105.x
- [#48603](https://github.com/BerriAI/litellm/pull/48603) fix(proxy)!: backport #48599 to stable/1.104.x
- [#48633](https://github.com/BerriAI/litellm/pull/48633) fix(anthropic): make opening usage estimates opt-in
- [#48518](https://github.com/BerriAI/litellm/pull/48518) ci: spend-logs-guard requires kerry-berri approval on LiteLLM_SpendLogs schema and migration changes
- [#48613](https://github.com/BerriAI/litellm/pull/48613) fix(auth): log routine 401 rejections as one warning without a traceback
- [#48615](https://github.com/BerriAI/litellm/pull/48615) fix(mcp): load deprecated package aliases on demand
- [#48621](https://github.com/BerriAI/litellm/pull/48621) feat(hosted_vllm): accept images on decision deployments
- [#48629](https://github.com/BerriAI/litellm/pull/48629) fix(ui): expose the authorization MCP auth type in create and edit forms
- [#48599](https://github.com/BerriAI/litellm/pull/48599) fix(security)!: build proxy-only failure logs from an allowlist and drop caller guardrail info
- [#48479](https://github.com/BerriAI/litellm/pull/48479) fix(bedrock): correct gpt max_input_tokens and add Mantle token counting for claude-opus-5-5
- [#48624](https://github.com/BerriAI/litellm/pull/48624) fix(token_counter): count Anthropic-format tool_choice without KeyError
- [#48623](https://github.com/BerriAI/litellm/pull/48623) fix(proxy): return 403 naming the Enterprise licence for get_spend_routes without a licence
- [#48587](https://github.com/BerriAI/litellm/pull/48587) fix(vertex-ai): drop the floor retirement date from gemini-3.1-flash-lite-image
- [#48620](https://github.com/BerriAI/litellm/pull/48620) fix(logging): match extra_spend_tag_headers case-insensitively
- [#48618](https://github.com/BerriAI/litellm/pull/48618) fix(anthropic): estimate initial input tokens for bridged message streams
- [#48493](https://github.com/BerriAI/litellm/pull/48493) feat(proxy): refuse migrations that existing rows would make fail, before the first one runs
- [#48278](https://github.com/BerriAI/litellm/pull/48278) feat(bedrock): price native guardrailConfig trace usage into spend and x-litellm-response-cost
- [#48619](https://github.com/BerriAI/litellm/pull/48619) feat: generate provider_endpoints_support.json from the cost map
- [#48417](https://github.com/BerriAI/litellm/pull/48417) fix(responses): replay web_search_call input items that have no action
- [#46171](https://github.com/BerriAI/litellm/pull/46171) fix: correct Palm 'decommissioned' typo in error message
- [#48602](https://github.com/BerriAI/litellm/pull/48602) fix(proxy)!: backport #48599 to stable/1.103.x
- [#48513](https://github.com/BerriAI/litellm/pull/48513) refactor(mcp): drop the experimental label from the MCP server and client paths
- [#42705](https://github.com/BerriAI/litellm/pull/42705) fix(langfuse_otel)!: derive trace-level name, input, output and tags on traces litellm starts
- [#48510](https://github.com/BerriAI/litellm/pull/48510) refactor(anthropic): rename llms/anthropic/pass_through to llms/anthropic/messages
- [#48470](https://github.com/BerriAI/litellm/pull/48470) fix(router): preserve tag fail-open policy through affinity and cooldown
- [#48534](https://github.com/BerriAI/litellm/pull/48534) fix(messages): honor OpenAI stop_sequences (#37118)
- [#48527](https://github.com/BerriAI/litellm/pull/48527) fix(databricks): reuse base OAuth for decisions (#48395)
- [#48529](https://github.com/BerriAI/litellm/pull/48529) fix(azure): add keyless Decisions authentication (#48386)
- [#48532](https://github.com/BerriAI/litellm/pull/48532) fix(ui): honor dark and local logos across Connect and Chat
- [#48524](https://github.com/BerriAI/litellm/pull/48524) fix(decisions): preserve missing probabilities (#48449)
- [#48523](https://github.com/BerriAI/litellm/pull/48523) fix(vertex): keep Messages authentication off the event loop
- [#48528](https://github.com/BerriAI/litellm/pull/48528) fix(proxy): include Claude web search fees in streamed usage cost
- [#48522](https://github.com/BerriAI/litellm/pull/48522) fix(chatgpt): forward client credentials for image generation
- [#48526](https://github.com/BerriAI/litellm/pull/48526) fix(token-counter): count inline auto images safely (#48422)
- [#48448](https://github.com/BerriAI/litellm/pull/48448) feat(decisions): support LM Studio decision models

#### 🐛 New Issues
- [#48570](https://github.com/BerriAI/litellm/issues/48570) [Bug]: import litellm fails on Python 3.15 — sre_constants removed (unconditional import in complexity_router) 💬2
- [#48637](https://github.com/BerriAI/litellm/issues/48637) Databricks tool-only response crashes in resolve_reasoning_and_content with KeyError: content `llm translation` 💬2
- [#48543](https://github.com/BerriAI/litellm/issues/48543) OpenAI pass-through `POST /v1/decisions` is logged with $0 spend and no token usage `llm translation` 💬2
- [#48695](https://github.com/BerriAI/litellm/issues/48695) [Bug]: GET /customer/list (and /end_user/list) loads every end-user row in one request 💬1
- [#48667](https://github.com/BerriAI/litellm/issues/48667) [Feature]: Preserve Host header and SNI on outbound MCP requests when resolving to private IPs via `user_url_allowed_hosts` `enhancement` 💬1
- [#48660](https://github.com/BerriAI/litellm/issues/48660) [Bug]: BaseDecisionsConfig.transform_decisions_response raises unhandled ValidationError on non-JSON response bodies `bug` 💬1
- [#48678](https://github.com/BerriAI/litellm/issues/48678) [Bug]: Memory grows ~100 MB/min per pod and liveness fails after upgrading v1.105.1 → v1.106.4 (rollback fixes it) `llm translation` 💬1
- [#48649](https://github.com/BerriAI/litellm/issues/48649) [Bug]: failed sync completion() leaves exception/Logging reference cycle that pins request messages until a full GC `llm translation` 💬1
- [#48574](https://github.com/BerriAI/litellm/issues/48574) [Feature]: Accept images on /v1/systemone and /v1/decisions for hosted_vllm decision models `enhancement` `llm translation` 💬1
- [#48589](https://github.com/BerriAI/litellm/issues/48589) [Bug]: Sync Router.completion opens a new Redis connection on every call and never closes it when a deployment has an rpm/tpm limit `llm translation` 💬1
- [#48576](https://github.com/BerriAI/litellm/issues/48576) [Docs] `general_settings.require_key_mcp_access_defined` is not documented or declared 💬1
- [#48545](https://github.com/BerriAI/litellm/issues/48545) [Bug]: Bedrock rerank deployment with `model_id` + `base_model` is never created since v1.106.2: `_PricingModelInfo` rejects `mode='rerank'` `llm translation` 💬1
- [#48585](https://github.com/BerriAI/litellm/issues/48585) [Feature]: MCP: let admin callers reach every server, every tool and any access group 💬1
- [#48578](https://github.com/BerriAI/litellm/issues/48578) [Bug]: Batch cost poller mis-routes raw gs:// Vertex batches to the first model_list entry for that base model (same base model across projects/buckets is never costed) `bug` `llm translation` 💬1
- [#48569](https://github.com/BerriAI/litellm/issues/48569) [Feature]: Skip eager MCP tool listing or demote expected 401 for delegated-OAuth servers 💬1
- [#48568](https://github.com/BerriAI/litellm/issues/48568) [Bug]: github_copilot system messages with list-form content are passed through unflattened and ignored by the backend `llm translation` 💬1
- [#48550](https://github.com/BerriAI/litellm/issues/48550) [Bug]: DeploymentAffinityCheck narrows candidates before RouterBudgetLimiting when it runs first — an exhausted provider budget returns 429 instead of the healthy sibling `llm translation` 💬1
- [#48681](https://github.com/BerriAI/litellm/issues/48681) [Feature]: Add DeepSeek Search Fetch Tool `enhancement` `llm translation`
- [#48562](https://github.com/BerriAI/litellm/issues/48562) [Bug]: chatgpt/ provider rejects system and developer items in Responses API input — they are never extracted into instructions `llm translation`
- [#48653](https://github.com/BerriAI/litellm/issues/48653) \[Bug]: RuntimeError in litellm/llms/base_llm/base_model_iterator.py `bug` `llm translation`
- [#48607](https://github.com/BerriAI/litellm/issues/48607) [Feature]: MCP: configurable tools/list page size for the gateway, per access group
- [#48571](https://github.com/BerriAI/litellm/issues/48571) [Bug]: missing azure foundry price entries for GPT-6.1-terra `bug` `llm translation`
- [#48567](https://github.com/BerriAI/litellm/issues/48567) [Bug]: github_copilot usage normalization drops copilot_usage.token_details — prompt cache read/write tokens are never surfaced `llm translation`
- [#48561](https://github.com/BerriAI/litellm/issues/48561) [Bug]: intentional budget-enforcement rejections receive the one-click bug report banner `llm translation`
- [#48560](https://github.com/BerriAI/litellm/issues/48560) [Feature]: Let `logging_only` guardrails screen calls whose caller asked for message redaction `llm translation`
- [#48555](https://github.com/BerriAI/litellm/issues/48555) [Feature]: Query rewritting routing `enhancement`
- [#48554](https://github.com/BerriAI/litellm/issues/48554) [Feature]: Multi-currency settlement support (non-USD cost tracking) `enhancement`
- [#48552](https://github.com/BerriAI/litellm/issues/48552) [Bug]: OSV Scan fails across unrelated PRs on filelock, Pillow and MSAL vulnerabilities `llm translation`
- [#48540](https://github.com/BerriAI/litellm/issues/48540) [Feature]: Apply role_mappings to Microsoft Entra ID SSO logins
- [#48539](https://github.com/BerriAI/litellm/issues/48539) [Bug]: decisions (typesafe): items left from #48147 — an invalid 200 is raised as a 500 and loses its usage, the error body is only in the message, no response-size bound `llm translation`
- [#48530](https://github.com/BerriAI/litellm/issues/48530) [Bug]: jev classifier sends the current message and system prompt untrimmed, so the decision deployment returns 422 and routing falls back to the heuristic scorer `llm translation` `claude code`

#### 🔒 Closed Issues
- [#22984](https://github.com/BerriAI/litellm/issues/22984) [Bug]: Proper usage handling from VLLM (cached_tokens)
- [#42161](https://github.com/BerriAI/litellm/issues/42161) [Bug]: turn billed at 0 when provider_response_model is a slug missing from the price map (e.g. dated Anthropic builds)
- [#44869](https://github.com/BerriAI/litellm/issues/44869) [Feature]: complexity router replaces a caller's smaller max_tokens with the tier ceiling — could it clamp instead?
- [#39749](https://github.com/BerriAI/litellm/issues/39749) [Bug]: Spend logs silently dropped since v1.99.0 for providers returning id:null (Databricks-Gemini) — request_id becomes "None" and collides on primary key
- [#47011](https://github.com/BerriAI/litellm/issues/47011) [Bug]: /key/generate and /user/new answer a bare 500 "Internal Server Error." for the Enterprise-only `get_spend_routes` permission; the licence message only reaches the log
- [#40490](https://github.com/BerriAI/litellm/issues/40490) [Bug]: OpenAI provider path leaks an aiohttp ClientSession on every client-cache eviction (no AsyncHTTPHandler, no transport __del__, weakly-held evicted client)
- [#33690](https://github.com/BerriAI/litellm/issues/33690) [Bug]: Inconsistent SSO role value (`internal_user_view_only` vs `internal_user_viewer`) across docs and code, in `docs/proxy/admin_ui_sso.md`
- [#47308](https://github.com/BerriAI/litellm/issues/47308) [Bug]: Decisions feature not working with custom decision-capable model.
- [#48481](https://github.com/BerriAI/litellm/issues/48481) [Bug]: /v1/messages Chat Completions adapter sends message_start with usage.input_tokens 0
- [#47396](https://github.com/BerriAI/litellm/issues/47396) [Bug]: Budget reservation prices max_input_tokens when /v1/messages carries an Anthropic-format tool_choice (token_counter KeyError)
- [#46093](https://github.com/BerriAI/litellm/issues/46093) [Bug]: websearch_interception leaks one max_parallel_requests slot per streamed /v1/messages request carrying a web_search tool
- [#32332](https://github.com/BerriAI/litellm/issues/32332) [Bug]: Logs UI shows "Request/Response Data Not Available" when request_id contains #
- [#34763](https://github.com/BerriAI/litellm/issues/34763) [Bug] MCP server UI omits "authorization" auth_type — backend supports it, dropdown does not
- [#48449](https://github.com/BerriAI/litellm/issues/48449) [Bug]: Decisions transformations materialize missing probabilities as 0.0
- [#43711](https://github.com/BerriAI/litellm/issues/43711) Non-object JSON request body (e.g. [], 123) returns 500 instead of 400 (AttributeError: 'list' object has no attribute 'get' in pre_db_read_auth_checks)
- [#45564](https://github.com/BerriAI/litellm/issues/45564) [Bug]: Guardrail creation wizard clips content horizontally
- [#47300](https://github.com/BerriAI/litellm/issues/47300) [Bug]: gemini and vertex_ai embeddings ignore the `timeout` parameter (sync and async)
- [#48162](https://github.com/BerriAI/litellm/issues/48162) [Bug]: completion() sends the real request when mock_response is an empty string
- [#48171](https://github.com/BerriAI/litellm/issues/48171) [Bug]: MCP guardrails: a tool hidden from tools/list by a `pre_mcp_call` guardrail can still be called by exact name
- [#44527](https://github.com/BerriAI/litellm/issues/44527) complexity_router heuristic_v2: reasoning_override_min_score=0 does not promote to REASONING despite 2+ exact keyword matches
- [#48166](https://github.com/BerriAI/litellm/issues/48166) [Bug]: MCP: a tool on both `allowed_tools` and `disallowed_tools` is hidden from tools/list but can still be called by name
- [#48570](https://github.com/BerriAI/litellm/issues/48570) [Bug]: import litellm fails on Python 3.15 — sre_constants removed (unconditional import in complexity_router)
- [#47808](https://github.com/BerriAI/litellm/issues/47808) [Bug]: LiteLLM UI Logs: unable to query logs when model request ID contains special characters
- [#46847](https://github.com/BerriAI/litellm/issues/46847) [Bug]: case-sensitive header lookup in _get_extra_header_tags drops configured spend tags
- [#48413](https://github.com/BerriAI/litellm/issues/48413) [Bug]: /v1/responses fails with `ValidationError ... ResponseFunctionWebSearch action Field required` when Codex replays a `web_search_call` input item without `action`
- [#48364](https://github.com/BerriAI/litellm/issues/48364) [Bug]: Token spend/budget limit not enforced for keys created or used for Admin users level
- [#48386](https://github.com/BerriAI/litellm/issues/48386) [Feature]: Azure OpenAI Entra ID (keyless) auth for /v1/decisions and /v1/systemone
- [#46495](https://github.com/BerriAI/litellm/issues/46495) [Bug]: /v1/messages to vertex_ai Claude fetches the Google access token synchronously on the event loop (freezes the worker)
- [#46365](https://github.com/BerriAI/litellm/issues/46365) [Bug]: Streamed usage.cost leaves out the Claude web search fee (server_tool_use dropped)
- [#48374](https://github.com/BerriAI/litellm/issues/48374) [Bug]: Responses stream returns dict part when logprobs is omitted, breaking event.part.text
- [#48660](https://github.com/BerriAI/litellm/issues/48660) [Bug]: BaseDecisionsConfig.transform_decisions_response raises unhandled ValidationError on non-JSON response bodies
- [#37503](https://github.com/BerriAI/litellm/issues/37503) search_provider_cost_per_query only ever looks up <provider>/search — per-mode price entries (search-advanced, search-deep, search-pro) are unreachable
- [#45964](https://github.com/BerriAI/litellm/issues/45964) [Bug]: MCP REST OpenAPI loader rejects YAML documents
- [#47302](https://github.com/BerriAI/litellm/issues/47302) [Feature]: Auto Router should recognize Codex compaction as an agent lifecycle request
- [#48574](https://github.com/BerriAI/litellm/issues/48574) [Feature]: Accept images on /v1/systemone and /v1/decisions for hosted_vllm decision models
- [#46170](https://github.com/BerriAI/litellm/issues/46170) Typo in Palm decommission error: decommisioned → decommissioned
- [#46158](https://github.com/BerriAI/litellm/issues/46158) helm: Chart appVersion (v1.85.1) lags far behind current LiteLLM release (1.106.0)
- [#47831](https://github.com/BerriAI/litellm/issues/47831) [Bug]: RouterRateLimitError in litellm/router.py
- [#45807](https://github.com/BerriAI/litellm/issues/45807) [Feature]: Model Additon: Microsoft Decison 1
- [#48395](https://github.com/BerriAI/litellm/issues/48395) [Bug]: Databricks decisions route ignores OAuth M2M credentials and returns 401 "Missing API key"
- [#48446](https://github.com/BerriAI/litellm/issues/48446) [Feature]: Support LM Studio decision models through the Decisions API
- [#46977](https://github.com/BerriAI/litellm/issues/46977) [Bug]: Cohere chat sends a string stop as a string stop_sequences, the API expects a list
- [#38505](https://github.com/BerriAI/litellm/issues/38505) [Feature]: Native Search API support for xAI's x_search (Live Search)
- [#48562](https://github.com/BerriAI/litellm/issues/48562) [Bug]: chatgpt/ provider rejects system and developer items in Responses API input — they are never extracted into instructions
- [#45047](https://github.com/BerriAI/litellm/issues/45047) [Bug]: Admin UI key edit sends `duration: ""` and fails with "Invalid duration format" when an upperbound duration is set
- [#44797](https://github.com/BerriAI/litellm/issues/44797) [Bug]: Client disconnect during body upload is processed as an empty request body
- [#46316](https://github.com/BerriAI/litellm/issues/46316) Dark mode logo not used on Connect/Chat pages

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,648 · **Open issues:** 409 · **Last push:** <1h ago

On October 28, 2026, there were no new releases for Unsloth, but a series of significant updates were merged, including the feature allowing for auto-compaction of long chats on the SGLang engine and a fix that ensures chat pins persist across clients on the same server. Additionally, enhancements to the Studio features included asking for confirmation before clearing the transcript history and ensuring structured outputs are resumed after cut-off replies. Among the new issues, a bug was reported regarding the "Intel arc b580 gpu" preventing fine-tuning of LLM, highlighting ongoing challenges users face with hardware compatibility. Overall, the day featured routine maintenance with notable improvements aimed at enhancing usability and performance within the ecosystem.

#### ✅ Merged PRs
- [#15434](https://github.com/unslothai/unsloth/pull/15434) Studio: auto-compact long chats on the SGLang engine
- [#15570](https://github.com/unslothai/unsloth/pull/15570) Studio: ask before Clear all deletes the desktop transcript history
- [#15623](https://github.com/unslothai/unsloth/pull/15623) Video encoder pin test: read video.py as UTF-8
- [#15293](https://github.com/unslothai/unsloth/pull/15293) Persist chat pins across clients of the same Unsloth server
- [#15610](https://github.com/unslothai/unsloth/pull/15610) Studio: leave room for the whole reply cap in the estimated managed-engine fit
- [#15614](https://github.com/unslothai/unsloth/pull/15614) gpt-oss: refuse fused 4-bit with dtype float32 on GPUs without bfloat16
- [#15612](https://github.com/unslothai/unsloth/pull/15612) Studio video: price deferred pins at their bytes so a returning Wan load pins its text encoder
- [#15449](https://github.com/unslothai/unsloth/pull/15449) Studio: chat with a fine-tuned model by the name its job returns
- [#15342](https://github.com/unslothai/unsloth/pull/15342) fix(studio): make room for the MLX drafter in the auto offload plan
- [#15582](https://github.com/unslothai/unsloth/pull/15582) cuDNN SDPA DTensor test: gate on a real CUDA device
- [#15562](https://github.com/unslothai/unsloth/pull/15562) Studio diffusion: pin the up-front slabs in registered host memory (faster load, same bytes)
- [#15496](https://github.com/unslothai/unsloth/pull/15496) Unsloth: show complete chat error messages
- [#15452](https://github.com/unslothai/unsloth/pull/15452) Keep Codex MCP servers when running unsloth start codex
- [#15435](https://github.com/unslothai/unsloth/pull/15435) Studio: resume cut-off replies and structured output on vLLM and SGLang
- [#15441](https://github.com/unslothai/unsloth/pull/15441) Studio: keep linked folders syncing when files become ignored
- [#15358](https://github.com/unslothai/unsloth/pull/15358) Studio: keep the MLX chat context when an image or video model takes the GPU
- [#15531](https://github.com/unslothai/unsloth/pull/15531) GRPO kept-set refusals: drop the automatic-default wording
- [#15369](https://github.com/unslothai/unsloth/pull/15369) feat(studio): show MLX versions in Settings
- [#15344](https://github.com/unslothai/unsloth/pull/15344) Studio: train compatible queued fine-tuning jobs together with multi-LoRA
- [#15564](https://github.com/unslothai/unsloth/pull/15564) Studio video: pin MiniMax-H3's reduction-config filter (same seed, same clip across processes)
- [#15439](https://github.com/unslothai/unsloth/pull/15439) Studio: rewind files more than four folders deep
- [#15563](https://github.com/unslothai/unsloth/pull/15563) Studio video: map MiniMax-H3's hosted int8 checkpoint instead of reading it whole (faster load, same weights)
- [#15443](https://github.com/unslothai/unsloth/pull/15443) Studio: keep documents searchable after upgrading a Chat only install
- [#14907](https://github.com/unslothai/unsloth/pull/14907) Studio mermaid guard: a quoted @{ cannot hide a later remote image
- [#15478](https://github.com/unslothai/unsloth/pull/15478) Studio: enable packing and assistant-only training defaults where supported
- [#15507](https://github.com/unslothai/unsloth/pull/15507) feat(studio): store ComfyUI fp8 layers as fp8 on Apple MPS when the widened model would not fit
- [#15440](https://github.com/unslothai/unsloth/pull/15440) Studio: keep sidebar sections and favorites made in another window
- [#14948](https://github.com/unslothai/unsloth/pull/14948) Studio: keep chat-installed packages out of plugin discovery on approved host calls
- [#14881](https://github.com/unslothai/unsloth/pull/14881) Studio: keep llama-bench in the llama.cpp install
- [#15509](https://github.com/unslothai/unsloth/pull/15509) Studio engines: verify TLS against Studio's certifi bundle
- [#15508](https://github.com/unslothai/unsloth/pull/15508) fix(studio): price DeepSeek-V4.1 oQ quants as unsloth-zoo loads them
- [#15323](https://github.com/unslothai/unsloth/pull/15323) Studio: track MPS denoise progress with torch.mps events
- [#15451](https://github.com/unslothai/unsloth/pull/15451) Keep each unsloth eval run's results instead of overwriting the last
- [#15423](https://github.com/unslothai/unsloth/pull/15423) Studio: update managed Node to 24.22.1, apply new pins on every update path, and keep the pin current
- [#15442](https://github.com/unslothai/unsloth/pull/15442) Studio: start overlapping document chunks on a whole word
- [#15517](https://github.com/unslothai/unsloth/pull/15517) fix(studio): time a speculative vision batch row's prefill from before add()
- [#14880](https://github.com/unslothai/unsloth/pull/14880) Studio: respell user ngram-mod extra args for older llama.cpp builds
- [#15558](https://github.com/unslothai/unsloth/pull/15558) MXFP4 dequantize branch test: run the locals the branch reads ahead of it
- [#14775](https://github.com/unslothai/unsloth/pull/14775) Make the one scored completion GRPO test follow the TRL version
- [#14850](https://github.com/unslothai/unsloth/pull/14850) REAP: accept LoRA models merged on PEFT 0.18
- [#14956](https://github.com/unslothai/unsloth/pull/14956) Studio: keep a temporary chat's browser agent pages out of history
- [#15533](https://github.com/unslothai/unsloth/pull/15533) Studio diffusion: store chunked int8 W8A8 results straight into the output rows
- [#15433](https://github.com/unslothai/unsloth/pull/15433) Studio: thinking support for models served by the SGLang engine
- [#14645](https://github.com/unslothai/unsloth/pull/14645) Studio: queue OpenAI fine-tuning jobs while the GPU is busy
- [#15461](https://github.com/unslothai/unsloth/pull/15461) Studio native cache write: read each weight from the live module at write time so offload can reclaim VRAM
- [#14962](https://github.com/unslothai/unsloth/pull/14962) Studio: refuse a reused temp folder that other users can still read
- [#15432](https://github.com/unslothai/unsloth/pull/15432) Studio: show the chat Seed setting for vLLM models
- [#15445](https://github.com/unslothai/unsloth/pull/15445) cuDNN SDPA backward: give grad_output the output's layout on torch 2.6 - 2.13
- [#14858](https://github.com/unslothai/unsloth/pull/14858) Studio diffusion: keep reference headroom on multi-GPU FLUX.2 klein splits so edits are not refused
- [#15543](https://github.com/unslothai/unsloth/pull/15543) Studio diffusion: fused RMSNorm on the fp16 eager Z-Image path
- [#15424](https://github.com/unslothai/unsloth/pull/15424) Refuse Trainer(model_init=...) under UNSLOTH_TP_SIZE instead of silently skipping tensor parallel
- [#14368](https://github.com/unslothai/unsloth/pull/14368) Studio: keep browser tabs clickable on macOS with Safari 18.4 and earlier
- [#15526](https://github.com/unslothai/unsloth/pull/15526) Block compile: mark Unsloth's own compiled region apart from a user's enclosing compile
- [#15506](https://github.com/unslothai/unsloth/pull/15506) QK norm + RoPE backward: pin the dX contraction so compiled fp16 matches eager on ROCm
- [#15547](https://github.com/unslothai/unsloth/pull/15547) Studio video: MiniMax-H3 cache-only loads name the missing file and how to fix it
- [#15475](https://github.com/unslothai/unsloth/pull/15475) Studio training: describe public mirror access separately from model licensing
- [#14958](https://github.com/unslothai/unsloth/pull/14958) Studio video: drain palettegen per frame in the two-pass GIF export
- [#15465](https://github.com/unslothai/unsloth/pull/15465) Studio: size MIG CUDA instances from their own slice, never a physical card row
- [#15512](https://github.com/unslothai/unsloth/pull/15512) Studio: revealing a chat's sandbox folder is owner-only
- [#15288](https://github.com/unslothai/unsloth/pull/15288) Studio: neutralize DeepSeek-V4.1's image marker in replayed assistant text
- [#15542](https://github.com/unslothai/unsloth/pull/15542) Studio diffusion: shipped activation seed for Qwen-Image-Edit placement
- [#15548](https://github.com/unslothai/unsloth/pull/15548) Notebook sync durability test: pick the abandoned-restore victims in the state's own order
- [#15414](https://github.com/unslothai/unsloth/pull/15414) Packed attention: run the in-graph varlen probe with grad enabled, so a checkpoint's no_grad first trace keeps the varlen path
- [#14812](https://github.com/unslothai/unsloth/pull/14812) NVFP4 QAT: keep the fake-quantized linear out of compiled graphs
- [#15550](https://github.com/unslothai/unsloth/pull/15550) Desktop frontend contract: follow the media header links to their icon buttons
- [#15446](https://github.com/unslothai/unsloth/pull/15446) Studio diffusion: keep SDXL ControlNet running after the T4 resident promotion
- [#15450](https://github.com/unslothai/unsloth/pull/15450) Keep Unsloth Studio data when following the toolkit installer's command
- [#15431](https://github.com/unslothai/unsloth/pull/15431) FSDP2 SentenceTransformer save: honour create_model_card=False and keep training mode
- [#15429](https://github.com/unslothai/unsloth/pull/15429) Keep a wrapped Inductor pass's None uuid as a cache opt-out
- [#15549](https://github.com/unslothai/unsloth/pull/15549) Risky loader baseline: record the CPU backend dataprep loader from #15501
- [#15408](https://github.com/unslothai/unsloth/pull/15408) Studio: recognise model.safetensors-N-of-M shards for training resume (#15405)
- [#15511](https://github.com/unslothai/unsloth/pull/15511) Studio diffusion: do not cache a VAE rescaled for fp16 decode
- [#15427](https://github.com/unslothai/unsloth/pull/15427) FSDP2: keep the use_cpu reclaim reachable when only `import unsloth` wrapped the Trainer
- [#15403](https://github.com/unslothai/unsloth/pull/15403) RoPE override: normalise the legacy type key on per-layer-type configs
- [#15399](https://github.com/unslothai/unsloth/pull/15399) Fused LoRA: an unfrozen plain Linear after merge_and_unload / unload runs its own forward
- [#15544](https://github.com/unslothai/unsloth/pull/15544) Studio: heading for the API monitor card in Settings > API
- [#15540](https://github.com/unslothai/unsloth/pull/15540) Studio: Browser use switch on the browser's new tab page
- [#15402](https://github.com/unslothai/unsloth/pull/15402) Packed attention: recheck the SDPA policy before serving cached varlen metadata
- [#15401](https://github.com/unslothai/unsloth/pull/15401) Flex attention: keep float32 Gemma 3 off the sm86 / sm89 small tiles
- [#15501](https://github.com/unslothai/unsloth/pull/15501) CPU backend: export load_ebook_dataset, RawTextDataLoader and TextPreprocessor
- [#15363](https://github.com/unslothai/unsloth/pull/15363) float8_training: keep Accelerate dispatch hooks on converted layers
- [#15372](https://github.com/unslothai/unsloth/pull/15372) FP8 TMA block GEMM: cut per-call descriptor host cost
- [#15367](https://github.com/unslothai/unsloth/pull/15367) Full finetuning: dequantize block FP8 checkpoints on load
- [#15534](https://github.com/unslothai/unsloth/pull/15534) fix(studio): center header menu dots without enlarging them
- [#15530](https://github.com/unslothai/unsloth/pull/15530) Studio: preset and Inpaint icons, aligned preset save row, component file fields at select height
- [#15522](https://github.com/unslothai/unsloth/pull/15522) Studio: media rails keep their width when the scrollbar appears
- [#15519](https://github.com/unslothai/unsloth/pull/15519) Studio: More menu hover pill and row height, grouped chat options menu
- [#15520](https://github.com/unslothai/unsloth/pull/15520) Studio: Video Create and Train tabs, media header icons, Images and Video linked
- [#15456](https://github.com/unslothai/unsloth/pull/15456) Studio diffusion: keep the compiled int8 W8A8 linear at or below the eager peak, honor force-eager
- [#15377](https://github.com/unslothai/unsloth/pull/15377) Keep Mamba x_proj and out_proj unquantized for the fused mamba_ssm training path
- [#15523](https://github.com/unslothai/unsloth/pull/15523) Studio: tighter gap under the Chat with files header
- [#15528](https://github.com/unslothai/unsloth/pull/15528) fix(studio): center sidebar header icons in hover circles
- [#15524](https://github.com/unslothai/unsloth/pull/15524) Scan baseline: re-review the seven unsloth-zoo sites 2026.10.9 moved
- [#15458](https://github.com/unslothai/unsloth/pull/15458) Studio ROCm: tell self from cross attention without guarding the query length on the key length
- [#15487](https://github.com/unslothai/unsloth/pull/15487) Studio: account hosted quantized components of every image and video family in cache cleanup
- [#15463](https://github.com/unslothai/unsloth/pull/15463) Studio: classify host pinning by the target device, not the current one
- [#14648](https://github.com/unslothai/unsloth/pull/14648) Add batched multi-LoRA training kernels
- [#15516](https://github.com/unslothai/unsloth/pull/15516) MXFP4 low memory test: gate the chunked dX budget test on a real CUDA device
- [#15515](https://github.com/unslothai/unsloth/pull/15515) Precision conflict test: lift every loader.py helper from_pretrained reaches
- [#15476](https://github.com/unslothai/unsloth/pull/15476) Studio: use shared download manager for diffusion training
- [#15498](https://github.com/unslothai/unsloth/pull/15498) tests: stub the tensor parallel guard in the for_training extraction harness
- [#15495](https://github.com/unslothai/unsloth/pull/15495) Studio engines: certifi 2026.10.19 in the vLLM and SGLang locks
- [#15474](https://github.com/unslothai/unsloth/pull/15474) Studio video: size the hosted H3 text encoder before the unified-memory guard
- [#15493](https://github.com/unslothai/unsloth/pull/15493) for_training flag test: lift every _utils helper for_training reaches
- [#15437](https://github.com/unslothai/unsloth/pull/15437) Studio: keep timestamps off for every GPT transcription model on a connection
- [#15464](https://github.com/unslothai/unsloth/pull/15464) Studio video: size the VAE decode from free memory after the denoiser offload (wider tiles, same clip whether the CUDA graph is kept or dropped)
- [#15504](https://github.com/unslothai/unsloth/pull/15504) Studio: orange Full access in permission menus, sandbox docs link, Confirm
- [#15376](https://github.com/unslothai/unsloth/pull/15376) MXFP4 packed matmul: bound the dX decode like the forward below sm_80
- [#15499](https://github.com/unslothai/unsloth/pull/15499) FSDP2 sharded loading gloo test: barrier before a rank tears down its group
- [#15500](https://github.com/unslothai/unsloth/pull/15500) Settings contract tests: follow MonitorLink into the API page's access group
- [#15395](https://github.com/unslothai/unsloth/pull/15395) fast_inference under torchrun: every rank takes the same vLLM-or-HF path
- [#15387](https://github.com/unslothai/unsloth/pull/15387) Routing replay: score named PEFT reference adapters with their own routing
- [#15385](https://github.com/unslothai/unsloth/pull/15385) QAT: fake quantize embeddings under FSDP1 and torch.func.functional_call
- [#15361](https://github.com/unslothai/unsloth/pull/15361) FP8 block decode: keep the fused small-M kernel for fp16 when torchao is selected
- [#15459](https://github.com/unslothai/unsloth/pull/15459) Studio tests: probe int8 CPU quantize + flatten apart from the cache assertions
- [#15453](https://github.com/unslothai/unsloth/pull/15453) Studio tests: turn Hub telemetry off where mocked Hub requests are counted
- [#15438](https://github.com/unslothai/unsloth/pull/15438) Version compat: transformers 5.21.0 is tagged v5.21 upstream
- [#15378](https://github.com/unslothai/unsloth/pull/15378) Save: compare fused 4-bit expert bytes bitwise for float quant_storage
- [#15455](https://github.com/unslothai/unsloth/pull/15455) Studio diffusion: pin Qwen-Image-2.1's reduction-config filter (same seed, same image across processes)
- [#15486](https://github.com/unslothai/unsloth/pull/15486) Studio: size the Transcribe icon from its label
- [#15484](https://github.com/unslothai/unsloth/pull/15484) Studio: Audio Edit step numbers as text, standard Transcribe icon
- [#15467](https://github.com/unslothai/unsloth/pull/15467) Studio: API examples behind one tab row, an access group, API page fixes
- [#15470](https://github.com/unslothai/unsloth/pull/15470) Studio: solid primary buttons on update notifications
- [#15471](https://github.com/unslothai/unsloth/pull/15471) Studio: Library chat, project and section cards keep one size
- [#15468](https://github.com/unslothai/unsloth/pull/15468) Studio: top-align the settings rows the shared row components do not cover
- [#15472](https://github.com/unslothai/unsloth/pull/15472) Studio: Run settings divider, preset picker fill and a clearer Always load
- [#15469](https://github.com/unslothai/unsloth/pull/15469) Studio: a switch per permission mode in Settings > Sandbox
- [#15392](https://github.com/unslothai/unsloth/pull/15392) Studio: centre the chat column under classic scroll bars in WebKit

#### 🐛 New Issues
- [#15583](https://github.com/unslothai/unsloth/issues/15583) [Bug] How to finetune llm with "Intel arc b580 gpu" `feature request` `bug` 💬5
- [#15473](https://github.com/unslothai/unsloth/issues/15473) [Bug] Vision with Gemma 4 26B MLX model produce <unused6226> `feature request` `bug` 💬5
- [#15588](https://github.com/unslothai/unsloth/issues/15588) [Feature] Support LFM3-1.7B `feature request` 💬1
- [#15552](https://github.com/unslothai/unsloth/issues/15552) Studio on Windows floods the Recycle Bin with sqlite WAL/SHM temp files every second during training 💬1
- [#15621](https://github.com/unslothai/unsloth/issues/15621) [Bug] Images download toast shows original name after rename `feature request` `bug`
- [#15603](https://github.com/unslothai/unsloth/issues/15603) [Feature] Limit model downloding speed `feature request`
- [#15597](https://github.com/unslothai/unsloth/issues/15597) [Feature] Unsloth Translate: Dedicated Offline Translation Mode with Multimodal Support `feature request`
- [#15581](https://github.com/unslothai/unsloth/issues/15581) [Bug] Deep Research Failed to Call in Unsloth Desktop `feature request` `bug`
- [#15573](https://github.com/unslothai/unsloth/issues/15573) [Feature] Show actual percentage of audio transcribed `feature request`
- [#15538](https://github.com/unslothai/unsloth/issues/15538) [Bug] studio stack trace when training `feature request` `bug`
- [#15521](https://github.com/unslothai/unsloth/issues/15521) Opencode: request +1 on runtime model discovery for Unsloth Studio (opencode#59557)
- [#15532](https://github.com/unslothai/unsloth/issues/15532) [Feature] Optional Visual Computer Use for Local AI Agents
- [#15527](https://github.com/unslothai/unsloth/issues/15527) [Feature] Turboderp's exllama `feature request`

#### 🔒 Closed Issues
- [#15405](https://github.com/unslothai/unsloth/issues/15405) [Studio] Resume unavailable for Qwen3.5-2B: _MODEL_WEIGHT_RE misses model.safetensors-00001-of-00001.safetensors
- [#14314](https://github.com/unslothai/unsloth/issues/14314) [Bug] Unsloth Browser tabs can't be clicked easily and cant be closed at all due to this.

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,163 · **Open issues:** 382 · **Last push:** 6h ago

On October 28, 2026, AIBrix had no new releases but saw several significant bug fixes merged into the codebase. Notable updates included enhancements to make running-requests tracking more resilient to Redis failures (#3325) and adjustments to the session-key Redis read mechanism to improve performance (#3326). Additionally, the tracking of current replicas for pooled roles was corrected to derive data from their templates rather than statuses (#3309), and improvements were made to prevent priority inversions in ModelClaim soft-preemption wakes (#3273). A critical new issue emerged regarding the escalation of Gateway Redis load proportional to fleet size, which highlights a performance bottleneck as requests read across multiple pods repeatedly (#3322).

#### ✅ Merged PRs
- [#3325](https://github.com/vllm-project/aibrix/pull/3325) [Bug] Make running-requests tracking resilient to Redis failures
- [#3326](https://github.com/vllm-project/aibrix/pull/3326) [Bug] Give the session-key Redis read 500ms before falling back to rendezvous
- [#3309](https://github.com/vllm-project/aibrix/pull/3309) [Bug] Read a pooled role's current replicas from its template, not its status
- [#3273](https://github.com/vllm-project/aibrix/pull/3273) [Bug] Prevent priority inversions in ModelClaim soft-preemption wakes

#### 🐛 New Issues
- [#3322](https://github.com/vllm-project/aibrix/issues/3322) Gateway Redis load grows with fleet size: each request reads every pod up to 4 times, and the snapshot sync reads G×N keys 10 times a second `area/gateway` `triage/accepted` `kind/feature` 💬8
- [#3323](https://github.com/vllm-project/aibrix/issues/3323) prefix-cache-preble charges the full prefill cost of a shared prefix to every pod that holds it `kind/bug` `area/gateway` 💬2

#### 🔒 Closed Issues
- [#3308](https://github.com/vllm-project/aibrix/issues/3308) [Bug] Pooled StormService autoscaling reads current replicas from status, so a scale-down can skip the stabilization window
- [#3266](https://github.com/vllm-project/aibrix/issues/3266) Runtime fails to launch an s3:// model: the downloaded path is a Path, and the launch log line raises TypeError
- [#3302](https://github.com/vllm-project/aibrix/issues/3302) [Bug]: After SleepLowerPriority preemption, waking the victim puts a higher-priority model to sleep

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,280 · **Open issues:** 825 · **Last push:** 6h ago

On October 28, 2026, there were no new releases for Semantic Router. A significant merged pull request addressed a bug that ensures caller cancellation remains visible when a parallel step stops early. Among the new issues, the most noteworthy is issue #5535, which reports a hard-coded tool description limit of 16 KiB that is causing rejections for Claude Code's Artifact tool. Other notable issues include a local user guide feature request aimed at enhancing user operation with vLLM-SR and a bug concerning E2E unit gate failures on macOS due to skipped tests. The day was primarily one of maintenance, with the most interesting item being the merged PR focused on improving cancellation visibility.

#### ✅ Merged PRs
- [#5260](https://github.com/vllm-project/semantic-router/pull/5260) [Bug] Keep caller cancellation visible when a parallel step stops early

#### 🐛 New Issues
- [#5535](https://github.com/vllm-project/semantic-router/issues/5535) [Bug] Tool description limit (16 KiB) is hard-coded; rejects Claude Code's Artifact tool `needs-acceptance`
- [#5546](https://github.com/vllm-project/semantic-router/issues/5546) [Bug] E2E unit gate always fails on macOS because a /proc-only test skips `needs-acceptance` `wg/developer-experience-ecosystem` 💬2
- [#5531](https://github.com/vllm-project/semantic-router/issues/5531) [Feature] Add a local user guide: run vLLM-SR end to end with the default vela3-fast `enhancement` `accepted` `wg/router-models-inference-runtime` 💬2
- [#5544](https://github.com/vllm-project/semantic-router/issues/5544) [Bug] Agent tool loops fail on vllm-sr/auto: rejected message names, guard declines and recovery inside tool loops `bug` `accepted` `wg/data-plane-networking` 💬1
- [#5539](https://github.com/vllm-project/semantic-router/issues/5539) [Feature] Detect credentials and private keys in agent prompts and tool results, with route, withhold, warn and block actions `enhancement` `needs-acceptance` `wg/mom-routing` 💬1
- [#5549](https://github.com/vllm-project/semantic-router/issues/5549) [Bug] Partial Anthropic input-usage updates incorrectly abort streams with usage_decreased `bug` `needs-acceptance` `wg/data-plane-networking` 💬1
- [#5532](https://github.com/vllm-project/semantic-router/issues/5532) [Feature] Harness support table: verified versions, identity headers and routing granularity, checked against evidence `enhancement` `needs-acceptance` `wg/evaluation-quality` 💬1
- [#5525](https://github.com/vllm-project/semantic-router/issues/5525) [Bug] Fall back to extractive compression when trusted recovery scope is empty `needs-acceptance` `wg/agentic-context` 💬1
- [#5524](https://github.com/vllm-project/semantic-router/issues/5524) [Bug] Redact residual vsr_context_retrieve calls and preserve mixed assistant content `needs-acceptance` `wg/agentic-context` 💬1
- [#5523](https://github.com/vllm-project/semantic-router/issues/5523) [Bug] Use TargetFormat and protocolEngineForBackend during context recovery and redaction `needs-acceptance` `wg/agentic-context` 💬1
- [#5522](https://github.com/vllm-project/semantic-router/issues/5522) [Bug] Skip context compression and strip vsr_context_retrieve on recovery follow-up hops `needs-acceptance` `wg/agentic-context` 💬1
- [#5521](https://github.com/vllm-project/semantic-router/issues/5521) [Bug] Set response BodyMutation when context recovery or redaction replaces same-format Chat response `needs-acceptance` `wg/agentic-context` 💬1
- [#5520](https://github.com/vllm-project/semantic-router/issues/5520) [Bug] Selection-rejected requests (503 no_eligible_model) leave no record in router_replay when only per-decision replay plugins are configured `bug` `accepted` `wg/mom-routing` 💬1
- [#5550](https://github.com/vllm-project/semantic-router/issues/5550) [Feature] Model runtime: attend without dense masks on long vela3-fast rows `needs-acceptance` `wg/router-models-inference-runtime`
- [#5548](https://github.com/vllm-project/semantic-router/issues/5548) [Bug] Claude Code's mid-conversation system messages after tool_result clear active_tool_loop `bug` `needs-acceptance` `wg/mom-routing`
- [#5541](https://github.com/vllm-project/semantic-router/issues/5541) [Feature] Let a harness request a fresh routing decision within a session through request metadata `enhancement` `needs-acceptance` `wg/mom-routing`
- [#5540](https://github.com/vllm-project/semantic-router/issues/5540) [Research] Does switching models at a compaction or cleared conversation keep a coding agent's success? `needs-acceptance` `research` `wg/evaluation-quality`
- [#5537](https://github.com/vllm-project/semantic-router/issues/5537) [Feature] Run Codex CLI on Harbor tasks through the Router and report each trial `enhancement` `needs-acceptance` `wg/evaluation-quality`
- [#5536](https://github.com/vllm-project/semantic-router/issues/5536) [Feature] Translate Responses namespace tools so Codex CLI multi-agent and MCP tools pass the Router `enhancement` `needs-acceptance` `wg/data-plane-networking`
- [#5538](https://github.com/vllm-project/semantic-router/issues/5538) [Feature] Web search for coding agents through a pluggable MCP server (DuckDuckGo default, bring your own provider) `enhancement` `needs-acceptance` `wg/agentic-context`
- [#5533](https://github.com/vllm-project/semantic-router/issues/5533) [Feature] recipe-lab sub-issue 6: agentic routing evaluation - session attribution and task-level grading `enhancement` `needs-acceptance` `wg/evaluation-quality`

#### 🔒 Closed Issues
- [#4515](https://github.com/vllm-project/semantic-router/issues/4515) [Test] Streamed-body E2E cases still pass when chunk reassembly, SSE cache replay, or keyword routing is broken
- [#5214](https://github.com/vllm-project/semantic-router/issues/5214) [Bug] Parallel step can hide caller cancellation or wait for non-cooperative branches

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*