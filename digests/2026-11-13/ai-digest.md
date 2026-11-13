# 📡 AI Ecosystem Digest — 2026-11-13

> Generated 2026-11-13 03:12 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 155,463 | 32 | 0 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 135,070 | 22 | 5 | 49 | 2 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,806 | 0 | 0 | 3 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,407 | 19 | 6 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 226,491 | 26 | 28 | 16 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 29,877 | 28 | 14 | 4 | 5 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 394,404 | 127 | 168 | 173 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 262,997 | 27 | 3 | 1 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 96,846 | 32 | 49 | 36 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,803 | 26 | 12 | 47 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 134,617 | 8 | 6 | 37 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 186,827 | 6 | 0 | 4 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,200 | 21 | 18 | 78 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,406 | 7 | 9 | 87 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,186 | 2 | 0 | 0 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,460 | 26 | 36 | 9 | 0 |

---

## ✨ Highlights

- **Qwen Code** released multiple updates: [v0.27.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.3), [sdk-typescript-v0.1.33](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.33), and [desktop-v0.27.3](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.27.3).
- **OpenAI Codex** merged several PRs, including [adding Win32 error codes](https://github.com/openai/codex/pull/61227) to MXC process launch failures and [including AppX event IDs](https://github.com/openai/codex/pull/61224) in Windows runtime registration errors.
- **GitHub Copilot CLI** released [v1.0.111-0](https://github.com/github/copilot-cli/releases/tag/v1.0.111-0) and noted a new issue regarding [out-of-memory crashes during long interactive sessions](https://github.com/github/copilot-cli/issues/5435) that gathered 1 comment.
- **Hermes Agent** introduced issues related to [regression after a commit](https://github.com/NousResearch/hermes-agent/issues/154701) that drives the GPU to 100% during streaming into minimized windows, which received 5 comments.
- **OpenClaw** saw significant activity with new issues, including an update failure related to package permissions noted in [#197935](https://github.com/openclaw/openclaw/issues/197935), which garnered 4 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 155,463 · **Open issues:** 17,052 · **Last push:** 1h ago

On November 13, 2026, Claude Code released version 2.1.323, introducing an experimental Code Mode that enables Claude to write JavaScript for tool interactions, as well as the addition of `engines["claude-code"]` to `plugin.json`, restricting plugin operations based on version compatibility. No pull requests were merged during this period, but there were several new issues reported, with notable concerns including a bug causing the removal of the `subagentStatusLine`, leaving essential per-agent context information invisible, and a bug related to repeated "ip_reminder" text appearing after tool results. Other issues raised featured requests for improved desktop remote control functionality and documentation errors related to the new Code Mode.

#### 🚀 New Releases
- [v2.1.323](https://github.com/anthropics/claude-code/releases/tag/v2.1.323) v2.1.323

#### 🐛 New Issues
- [#109433](https://github.com/anthropics/claude-code/issues/109433) 07fc386b-5c79-4849-910e-25847be56177 💬3
- [#109447](https://github.com/anthropics/claude-code/issues/109447) [BUG] KDE black icon on black panel `bug` `platform:linux` `regression` `area:desktop` 💬1
- [#109446](https://github.com/anthropics/claude-code/issues/109446) [BUG] 2.1.323 removed subagentStatusLine with no replacement: per-agent context, cost, model and effort are now invisible `bug` `platform:macos` `platform:linux` `area:tui` 💬1
- [#109437](https://github.com/anthropics/claude-code/issues/109437) `[bio]` safeguard flags editing, formatting, statistics and software tasks in biology-adjacent projects (Opus 5.5, Fable 5.1, Fable 5.2); `/feedback` refused for the account `bug` `platform:macos` `area:model` 💬1
- [#109431](https://github.com/anthropics/claude-code/issues/109431) [Bug] Repeated "ip_reminder" text injected after tool results `duplicate` `platform:macos` `area:model` 💬1
- [#109393](https://github.com/anthropics/claude-code/issues/109393) `--json-schema` is silently ignored under `--agent` when the agent restricts `tools:` `bug` `platform:windows` `area:tools` `area:agents` 💬1
- [#109449](https://github.com/anthropics/claude-code/issues/109449) [FEATURE] EndConversation: please reconsider leaving it out of -p runs and Haiku, and removing it under a deny-all rule `enhancement` `platform:linux` `area:tools` `area:permissions`
- [#109448](https://github.com/anthropics/claude-code/issues/109448) [BUG] Desktop Remote Control: an open tab silently goes dead after the remote session reconnects (messages spin forever, live session listed as a second same-named entry) `bug` `platform:windows` `area:desktop`
- [#109445](https://github.com/anthropics/claude-code/issues/109445) [DOCS] Claude Code 2.1.322: supported admission/retirement boundary for same-session payer changes `documentation` `question` `platform:macos` `area:docs`
- [#109444](https://github.com/anthropics/claude-code/issues/109444) [FEATURE] Computer use: let the model see what happened between screenshots `enhancement` `area:tools`
- [#109443](https://github.com/anthropics/claude-code/issues/109443) let us choose how long idle sessions can be swept, or let us disable this choic… `enhancement`
- [#109442](https://github.com/anthropics/claude-code/issues/109442) [DOCS] Code Mode - 404 error `bug` `documentation` `area:docs`
- [#109441](https://github.com/anthropics/claude-code/issues/109441) [Feature request] Claude desktop built-in browser pane: passkey (WebAuthn) and password manager sign-in support
- [#109439](https://github.com/anthropics/claude-code/issues/109439) Auto-compaction fires repeatedly at ~12% context usage, not the configured 80% threshold `bug` `platform:macos` `area:core` `area:agent-view`
- [#109440](https://github.com/anthropics/claude-code/issues/109440) [Bug] Ignores CLAUDE.md rules, acts without approval, and evades direct questions `bug` `platform:macos` `area:model`
- [#109438](https://github.com/anthropics/claude-code/issues/109438) [Bug] Cyber Safeguard False Positive Blocks Legitimate Security Work in Sonnet 5.5 `bug` `platform:macos` `area:model`
- [#109436](https://github.com/anthropics/claude-code/issues/109436) [BUG] Desktop: linked-computer shell and file-write tools disappear mid-task (macOS) `bug` `platform:macos` `area:cowork` `area:desktop`
- [#109435](https://github.com/anthropics/claude-code/issues/109435) [Bug] Overly aggressive guardrails case `bug` `platform:linux` `area:model` `area:permissions`
- [#109434](https://github.com/anthropics/claude-code/issues/109434) [Bug] Paste re-inserts removed content after repeated delete attempts `bug` `platform:windows` `area:tui`
- [#109432](https://github.com/anthropics/claude-code/issues/109432) [FEATURE] Desktop: keep Remote Control on for existing sessions after an app restart or auto-update `enhancement` `area:desktop`
- [#109430](https://github.com/anthropics/claude-code/issues/109430) [BUG] Remote Control: iOS Extra → High change does not sync to Claude Desktop after plan approval `bug` `platform:macos` `platform:ios` `area:desktop`
- [#109429](https://github.com/anthropics/claude-code/issues/109429) Extension Signature Verification Failed: Claude Code for VS Code `bug` `platform:linux` `platform:vscode` `area:installation`
- [#109428](https://github.com/anthropics/claude-code/issues/109428) [BUG] Projects: project chat stuck on original cloud environment; can’t choose environment at creation `bug` `area:claude-code-web` `platform:web` `area:networking`
- [#109427](https://github.com/anthropics/claude-code/issues/109427) An idle teammate stays in the Stop hook's `background_tasks` `bug` `has repro` `platform:macos` `area:hooks`
- [#109426](https://github.com/anthropics/claude-code/issues/109426) [BUG] Desktop app sets PYTHONDONTWRITEBYTECODE=1, so plugin hooks and MCP servers recompile Python on every run `bug` `has repro` `platform:windows` `area:mcp`
- [#109425](https://github.com/anthropics/claude-code/issues/109425) [BUG] Desktop: Mermaid widgets from show_widget are unreadable in dark mode (base theme keeps cream boxes, read_me template sets no palette) `bug` `has repro` `platform:linux` `area:desktop`
- [#109424](https://github.com/anthropics/claude-code/issues/109424) Desktop app (Code tab): pinned sessions do not show the PR state icon `bug` `platform:windows` `area:desktop`
- [#109423](https://github.com/anthropics/claude-code/issues/109423) [FEATURE] Make stratchpad available to all Claude Code users and allow stratchpad edits in plan mode `enhancement` `area:permissions`
- [#109422](https://github.com/anthropics/claude-code/issues/109422) [Bug] CLAUDE.md Guardrails Not Applied (Global and Project-Level) (245ffdbb-7a85-4a86-ab41-0ca373f5b74c) `bug` `platform:macos` `area:model` `needs-info`
- [#109421](https://github.com/anthropics/claude-code/issues/109421) pannell bug went gray on me `bug` `needs-info`
- [#109420](https://github.com/anthropics/claude-code/issues/109420) [BUG] Background sessions: attached clients receive corrupted terminal output (bytes dropped or repeated at 1024-byte chunk edges) `bug` `has repro` `platform:macos` `area:tui`
- [#109419](https://github.com/anthropics/claude-code/issues/109419) [BUG] Desktop (Windows): Remote Control turns off on all sessions while away, despite "Enable remote control by default" ON and sleep disabled `bug` `platform:windows` `regression` `area:desktop`

### OpenAI Codex (`openai/codex`)

**Stars:** 135,070 · **Open issues:** 27,480 · **Last push:** 1h ago

On November 13, 2026, OpenAI Codex released two new alpha versions: rust-v0.170.0-alpha.4 and rust-v0.170.0-alpha.3, though specific changes were not detailed in the release notes. Significant merged pull requests included the addition of SPIFFE JWT-SVID support for workload identity authentication (#61207) and enhancements to the TUI, such as preserving thread input across session resumes (#61216) and retaining delegation prompts in thread model history (#61210). Additionally, a pressing new issue was raised regarding a connectivity error with codex exec when using a custom model provider after the latest update (#61217), drawing immediate attention from the development team. Overall, the day featured routine updates with some noteworthy advancements in usability and authentication features.

#### 🚀 New Releases
- [rust-v0.170.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.4) 0.170.0-alpha.4
- [rust-v0.170.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.3) 0.170.0-alpha.3

#### ✅ Merged PRs
- [#61228](https://github.com/openai/codex/pull/61228) Add a missing semicolon in the realtime call test helper
- [#61227](https://github.com/openai/codex/pull/61227) Include Win32 error codes in MXC process launch failures
- [#61224](https://github.com/openai/codex/pull/61224) Include AppX event IDs in Windows runtime registration errors
- [#61222](https://github.com/openai/codex/pull/61222) Store rollout trace payloads in compressed shards
- [#61221](https://github.com/openai/codex/pull/61221) Forward repeated signals through the npm wrapper
- [#61220](https://github.com/openai/codex/pull/61220) Deduplicate overlapping Apps startup tool listings
- [#61219](https://github.com/openai/codex/pull/61219) Hide TUI status details for read-only history
- [#61218](https://github.com/openai/codex/pull/61218) Hide attached threads from the agents overview
- [#61216](https://github.com/openai/codex/pull/61216) Preserve thread input across TUI session resumes
- [#61215](https://github.com/openai/codex/pull/61215) Track dictation usage from accepted user inputs
- [#61213](https://github.com/openai/codex/pull/61213) Support model catalog Apps usage instructions
- [#61212](https://github.com/openai/codex/pull/61212) Add persistence support for status line provider selections
- [#61211](https://github.com/openai/codex/pull/61211) Add local status line provider configuration
- [#61210](https://github.com/openai/codex/pull/61210) Retain TUI delegation prompts in thread model history
- [#61207](https://github.com/openai/codex/pull/61207) Add SPIFFE JWT-SVID support for workload identity authentication
- [#61206](https://github.com/openai/codex/pull/61206) Enforce Linux seccomp restrictions for x32 syscalls
- [#61205](https://github.com/openai/codex/pull/61205) Upgrade the Rust toolchain to 1.99.1
- [#61201](https://github.com/openai/codex/pull/61201) Clean up Rust error handling and OTLP test assertions
- [#61200](https://github.com/openai/codex/pull/61200) Unify TUI status content and layout caching in `StatusLine`
- [#61199](https://github.com/openai/codex/pull/61199) Align rollout trace replay with the same-binary contract
- [#61198](https://github.com/openai/codex/pull/61198) Add graceful agent-tree suspension and recovery
- [#61197](https://github.com/openai/codex/pull/61197) Clarify remote message board and clock documentation
- [#61196](https://github.com/openai/codex/pull/61196) Clear inline image previews before history insertion can scroll them
- [#61195](https://github.com/openai/codex/pull/61195) Preserve permission profiles across working directory updates
- [#61194](https://github.com/openai/codex/pull/61194) Remove redundant legacy permission helpers
- [#61187](https://github.com/openai/codex/pull/61187) Add authenticated GCS caching for Bazel CI and releases
- [#61186](https://github.com/openai/codex/pull/61186) Keep plan item IDs unique after completion
- [#61185](https://github.com/openai/codex/pull/61185) Defer Guardian context limits to request preparation
- [#61183](https://github.com/openai/codex/pull/61183) Fix fork parent metadata in reconstructed TUI sessions
- [#61182](https://github.com/openai/codex/pull/61182) Support renaming cloud threads
- [#61181](https://github.com/openai/codex/pull/61181) Fix pagination for unindexed threads sorted by ascending recency
- [#61180](https://github.com/openai/codex/pull/61180) Reclaim abandoned trusted Git repositories
- [#61178](https://github.com/openai/codex/pull/61178) Enable conversation-scoped speed selection for Cloud turns
- [#61172](https://github.com/openai/codex/pull/61172) Negotiate realtime voice calls in the TUI
- [#61167](https://github.com/openai/codex/pull/61167) Refactor TUI sidebar layout and focus handling around panels
- [#61163](https://github.com/openai/codex/pull/61163) Reuse Guardian reviewer history for direct reviews
- [#61156](https://github.com/openai/codex/pull/61156) Ignore Hickory DNSSEC advisories while DNSSEC is disabled
- [#61153](https://github.com/openai/codex/pull/61153) Fix code-mode session admission retries for proxy HTTP 503 responses
- [#61144](https://github.com/openai/codex/pull/61144) Remove the legacy sandbox policy setter from `Config`
- [#61141](https://github.com/openai/codex/pull/61141) Preserve multiline status lines in unfocused chat panes
- [#61138](https://github.com/openai/codex/pull/61138) Centralize filesystem helper sandbox preparation
- [#61136](https://github.com/openai/codex/pull/61136) Compare resume sandbox overrides using permission profile labels
- [#61134](https://github.com/openai/codex/pull/61134) Normalize permission updates at session settings admission
- [#61133](https://github.com/openai/codex/pull/61133) Use permission profiles in sandbox tests and documentation
- [#61129](https://github.com/openai/codex/pull/61129) Simplify non-curated plugin cache refreshes
- [#61028](https://github.com/openai/codex/pull/61028) Add refreshable headers for OTLP HTTP exporters
- [#61018](https://github.com/openai/codex/pull/61018) Extract HTTP headers helper execution into a shared crate
- [#61017](https://github.com/openai/codex/pull/61017) Record reasoning replay removal metrics
- [#61014](https://github.com/openai/codex/pull/61014) Preserve active recovery turns when clients reconnect

#### 🐛 New Issues
- [#61100](https://github.com/openai/codex/issues/61100) Sign-in fails with "selected workspace missing from routing discovery": Business workspace omitted from /wham/accounts/check `bug` `auth` `app` 💬2
- [#61233](https://github.com/openai/codex/issues/61233) Windows: saved opaque sidebar color is not restored on launch; toggling "Translucent sidebar" fixes it temporarily `bug` `windows-os` `app` 💬2
- [#61217](https://github.com/openai/codex/issues/61217) codex exec fails with connectivity error using custom model provider (config.toml) after latest update `bug` `windows-os` `exec` `CLI` 💬2
- [#61191](https://github.com/openai/codex/issues/61191) Windows Full access: temporary cleanup rejected with "blocked by policy" and no decision rationale `bug` `windows-os` `sandbox` `tool-calls` 💬2
- [#61231](https://github.com/openai/codex/issues/61231) Windows: Saved sidebar colors are not applied after a full Codex restart `bug` `windows-os` `app` 💬1
- [#61229](https://github.com/openai/codex/issues/61229) Webull MCP authentication fails with OAuth authorization endpoint origin mismatch `bug` `auth` `mcp` `app` 💬1
- [#61075](https://github.com/openai/codex/issues/61075) Concurrent app-server config writes can both accept the same expected version `bug` `CLI` `app-server` 💬1
- [#61226](https://github.com/openai/codex/issues/61226) Pasting images into ChatGPT is slow `bug` `app` `performance` 💬1
- [#61024](https://github.com/openai/codex/issues/61024) [Windows] Codex Desktop 26.1106.6628.0 fails startup policy read with protocol error; rollback fixes it `bug` `windows-os` `app` `app-server` 💬1
- [#61214](https://github.com/openai/codex/issues/61214) [Windows] Enabling WSL integration causes Codex desktop startup failure `bug` `windows-os` `app` `config` 💬1
- [#61239](https://github.com/openai/codex/issues/61239) Codex changes the requested subject when filing a GitHub bug report `bug` `model-behavior` `app`
- [#61237](https://github.com/openai/codex/issues/61237) Investigate suspected potentially criminal interference with Codex responses about a paid OpenAI service `bug` `model-behavior` `windows-os` `app`
- [#61236](https://github.com/openai/codex/issues/61236) Phone verification country list missing +86 (China) blocks ChatGPT sign-in in VS Code Codex extension `bug` `enhancement` `extension` `auth`
- [#61235](https://github.com/openai/codex/issues/61235) [macOS][26.1106.51428] Sidebar PR state badges become generic links despite working GitHub CLI; rollback restores them `bug` `app`
- [#61234](https://github.com/openai/codex/issues/61234) [Windows][ChatGPT] Unread dot returns after leaving a viewed conversation without new messages `bug` `windows-os` `app` `session`
- [#61232](https://github.com/openai/codex/issues/61232) Support emoji icons for ChatGPT projects `enhancement` `app`
- [#61230](https://github.com/openai/codex/issues/61230) Windows desktop: /goal missing from composer (Nov 2026 report; Goals flag not explicitly set) `bug` `windows-os` `app` `config`
- [#61190](https://github.com/openai/codex/issues/61190) [iOS][ChatGPT] App exits to Home Screen during message composition; launch crash also reported `bug` `iOS`
- [#61225](https://github.com/openai/codex/issues/61225) Hooks: include the turn's client (clientInfo.name) in SessionStart and UserPromptSubmit input `enhancement` `hooks` `app-server`
- [#61223](https://github.com/openai/codex/issues/61223) [Windows 10 / VS Code] Slow startup and ~10s first response with renderer frame stalls after 26.1106.51428 update `bug` `windows-os` `extension` `performance`
- [#61209](https://github.com/openai/codex/issues/61209) Hooks: allow Stop/UserPromptSubmit to target one exact thread and confirm hooks run for app-server/automated turns `enhancement` `windows-os` `app` `hooks`
- [#61208](https://github.com/openai/codex/issues/61208) TUI wait_threads: add changed-only waiting for already-observed approval/input states `enhancement` `TUI` `CLI` `subagent`

#### 🔒 Closed Issues
- [#18547](https://github.com/openai/codex/issues/18547) Mac Codex App remote SSH on shared Linux host attaches to another user's session / home directory
- [#61233](https://github.com/openai/codex/issues/61233) Windows: saved opaque sidebar color is not restored on launch; toggling "Translucent sidebar" fixes it temporarily
- [#59557](https://github.com/openai/codex/issues/59557) [macOS][Dot] Desktop says "Messages aren't available for this account" while web works; persistent Statsig bootstrap timeout
- [#61217](https://github.com/openai/codex/issues/61217) codex exec fails with connectivity error using custom model provider (config.toml) after latest update
- [#60493](https://github.com/openai/codex/issues/60493) npm launcher fallback drops second SIGTERM while native child is still running

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,806 · **Open issues:** 712 · **Last push:** 1h ago

On November 13, 2026, there were no new releases for Gemini CLI. However, significant improvements were made with several merged pull requests, including a fix to restore workspace directories only after a successful resumeChat in PR #30259, and updates to report accurate output token limits in the models list with PR #30253. Additionally, PR #30258 adjusted the scaling of the undici bodyTimeout when request timeout exceeds the default of 300 seconds, enhancing overall reliability. There were no new issues reported today, indicating a routine maintenance day with a focus on performance enhancements.

#### ✅ Merged PRs
- [#30259](https://github.com/google-gemini/gemini-cli/pull/30259) fix(cli): restore workspace directories only after resumeChat succeeds
- [#30253](https://github.com/google-gemini/gemini-cli/pull/30253) fix(core,cli): report accurate output token limits in models list
- [#30258](https://github.com/google-gemini/gemini-cli/pull/30258) fix(core): scale undici bodyTimeout when request timeout exceeds 300s default

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,407 · **Open issues:** 2,218 · **Last push:** <1h ago

On November 13, 2026, GitHub Copilot CLI released version 1.0.111-0, introducing regular expression support for enterprise-managed Shell, Bash, and PowerShell permission rules, along with a new option to allow remote clients to create sessions on CLI hosts temporarily. This version also improved the display of organization support links in policy guidance and optimized indexed search availability post-restart. There were no merged pull requests today, but several new issues were reported, with #5435 highlighting a repeated out-of-memory crash during long interactive sessions in version 1.0.109 as particularly concerning. Other notable issues include silent ignoring of instructions in Agent Plugins and a problem with `task` children failing to authenticate with HTTP-OAuth servers.

#### 🚀 New Releases
- [v1.0.111-0](https://github.com/github/copilot-cli/releases/tag/v1.0.111-0) 1.0.111-0
- [v1.0.110](https://github.com/github/copilot-cli/releases/tag/v1.0.110) 1.0.110

#### 🐛 New Issues
- [#5435](https://github.com/github/copilot-cli/issues/5435) Repeated out-of-memory crash during a long interactive session in 1.0.109 `triage` 💬1
- [#5440](https://github.com/github/copilot-cli/issues/5440) Agent Plugins 1.0: `.instructions.md` files and `applyTo` frontmatter in `com.github.copilot/rules/` are silently ignored `triage`
- [#5448](https://github.com/github/copilot-cli/issues/5448) SDK/VS Code: attached async Bash command reported stopped without a matching stop_bash call `triage`
- [#5447](https://github.com/github/copilot-cli/issues/5447) ACP mode never attaches to the IDE: `--acp` skips `~/.copilot/ide` discovery, so ACP sessions have no IDE MCP server (no "Visual Studio Connected") `triage`
- [#5446](https://github.com/github/copilot-cli/issues/5446) MCP tool cache grows with temporary workspaces and can exhaust memory at startup `triage`
- [#5445](https://github.com/github/copilot-cli/issues/5445) /model --global does not persist selected model; new sessions open on a removed model `triage`
- [#5444](https://github.com/github/copilot-cli/issues/5444) Coordinated child session replies no longer reach the coordinator chat after latest update `triage`
- [#5443](https://github.com/github/copilot-cli/issues/5443) Reuse or release inactive worktrees to reduce disk usage across Copilot CLI sessions `triage`
- [#5442](https://github.com/github/copilot-cli/issues/5442) copilot vim mode `:q` and `:model` in normal mode `triage`
- [#5441](https://github.com/github/copilot-cli/issues/5441) General-purpose subagents refuse /tmp writes before tool execution despite allow-all; parent succeeds `triage`
- [#5439](https://github.com/github/copilot-cli/issues/5439) npm install -g @github/copilot `triage`
- [#5438](https://github.com/github/copilot-cli/issues/5438) npm install -g @github/copilot `triage`
- [#5437](https://github.com/github/copilot-cli/issues/5437) Delegated `task` children cannot authenticate HTTP-OAuth MCP servers: `<server>/*` gets 401, explicit refs work only on claude-fable-5.1 and only for some servers `triage`
- [#5436](https://github.com/github/copilot-cli/issues/5436) CLI masks structured OpenAI-compatible 403 error message as authentication failure `triage`
- [#5434](https://github.com/github/copilot-cli/issues/5434) macOS: copilot-mcp-oauth keychain prompt returns after "Always Allow"; many duplicate keychain items `triage`
- [#5433](https://github.com/github/copilot-cli/issues/5433) Ctrl+click cannot open Markdown file links in VS Code devcontainer (regression of #1974) `triage`
- [#5432](https://github.com/github/copilot-cli/issues/5432) Session prune gives no visible progress, leading to repeated invocations `triage`
- [#5431](https://github.com/github/copilot-cli/issues/5431) Startup policy and hook/host warnings persist with isolated configuration on 1.0.109 and 1.0.110-3 `triage`
- [#5430](https://github.com/github/copilot-cli/issues/5430) Autopilot: option to wake the session when a detached shell completes after task_complete `area:agents` `area:tools`

#### 🔒 Closed Issues
- [#5185](https://github.com/github/copilot-cli/issues/5185) P3 - container-runtime/copilot-runtime-bazel-cache-memory-usage-vs-limits-dotcom on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-3-gc-cus-02,kube_container_name:copilot-runtime-bazel-cache,kube_deployment:copilot-r... - 2026-10-18T14:11Z
- [#4515](https://github.com/github/copilot-cli/issues/4515) Copilot CLI exposes both MCP `content` and `structuredContent`
- [#5169](https://github.com/github/copilot-cli/issues/5169) P3 - container-runtime/copilot-runtime-bazel-cache-memory-usage-vs-limits-dotcom on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-1-gc-cus-02,kube_container_name:copilot-runtime-bazel-cache,kube_deployment:copilot-r... - 2026-10-16T17:32Z
- [#5170](https://github.com/github/copilot-cli/issues/5170) P3 - container-runtime/copilot-runtime-bazel-cache-memory-usage-vs-limits-dotcom on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-2-gc-cus-02,kube_container_name:copilot-runtime-bazel-cache,kube_deployment:copilot-r... - 2026-10-16T17:35Z
- [#5259](https://github.com/github/copilot-cli/issues/5259) P3 - container-runtime/copilot-runtime-bazel-cache-memory-usage-vs-limits-dotcom on catalog_service:copilot-runtime-bazel-cache,kube_cluster:dotcom-4-gc-cus-02,kube_container_name:copilot-runtime-bazel-cache,kube_deployment:copilot-r... - 2026-10-26T19:13Z
- [#5243](https://github.com/github/copilot-cli/issues/5243) Subagents started in the same turn as an approved exit_plan_mode get none of the built-in tools (regression after 1.0.95)

### OpenCode (`anomalyco/opencode`)

**Stars:** 226,491 · **Open issues:** 3,999 · **Last push:** <1h ago

On November 13, 2026, there were no new releases for OpenCode. Significant merged pull requests included #63655, which fixed a core issue by renaming rather than deleting files that only had case changes, and #63647, which added the exposure of shell exit codes, elapsed time, and log paths. Other notable fixes targeted session request hooks, brand colors in documentation, and plugin tool repairs in Code Mode. The new issues outlined several bugs and feature requests, with noteworthy concerns including #63632, which addressed unexpected session terminations, and #63568, highlighting a rate limit bug. The ongoing development reflects a focus on enhancing core functionality and addressing user concerns.

#### ✅ Merged PRs
- [#63655](https://github.com/anomalyco/opencode/pull/63655) fix(core): rename instead of deleting when a patch only changes a file's case
- [#63647](https://github.com/anomalyco/opencode/pull/63647) refactor(core): expose shell exit code, elapsed time, and log path
- [#63653](https://github.com/anomalyco/opencode/pull/63653) docs(protocol): describe parentID on session create
- [#63649](https://github.com/anomalyco/opencode/pull/63649) fix(site): update press email
- [#63590](https://github.com/anomalyco/opencode/pull/63590) fix(core): pass stored message metadata to session request hooks
- [#63634](https://github.com/anomalyco/opencode/pull/63634) refactor(ai): remove Gemini Veo and Runway video protocols
- [#63630](https://github.com/anomalyco/opencode/pull/63630) revert(core): restore tool dispatch before nested repair
- [#63436](https://github.com/anomalyco/opencode/pull/63436) feat(codemode): stream fetch response bodies
- [#63616](https://github.com/anomalyco/opencode/pull/63616) fix(core): return write confirmations as strings
- [#63628](https://github.com/anomalyco/opencode/pull/63628) chore(perf): bench with strobe 0.33.0
- [#63444](https://github.com/anomalyco/opencode/pull/63444) fix(core): honor plugin tool repairs in Code Mode
- [#63623](https://github.com/anomalyco/opencode/pull/63623) refactor(core): return directory and content from the skill tool
- [#63618](https://github.com/anomalyco/opencode/pull/63618) fix(core): return empty structured output from patch
- [#63621](https://github.com/anomalyco/opencode/pull/63621) docs(site): brand colors copy and agent style rules
- [#62874](https://github.com/anomalyco/opencode/pull/62874) feat(site): link the Android app on Google Play
- [#63220](https://github.com/anomalyco/opencode/pull/63220) fix(gui-plugins): keep the pairing QR code dark on light in every theme

#### 🐛 New Issues
- [#63506](https://github.com/anomalyco/opencode/issues/63506) desktop: prompt footer keeps stale model after a command sets its own model `type/bug` `area/desktop` `inference/go` `version/v2` 💬6
- [#63632](https://github.com/anomalyco/opencode/issues/63632) [2.0.22 / 2.0.27] Turns are aborted with nothing asking for it: the v2 report your tracker asked for twice `type/bug` `area/core` `version/v2` `platform/windows` 💬5
- [#63568](https://github.com/anomalyco/opencode/issues/63568) rate limit bug `pending close` `triaging` `type/bug` `inference/free-tier` 💬4
- [#63595](https://github.com/anomalyco/opencode/issues/63595) mine does send messging coding minecraft mod `triaging` `type/bug` 💬2
- [#63631](https://github.com/anomalyco/opencode/issues/63631) [FEATURE]: Advisor tool — let the session model consult a second model `type/feature` `area/plugins` `version/v2` 💬2
- [#63626](https://github.com/anomalyco/opencode/issues/63626) cli: `opencode upgrade` dumps raw npm EACCES when the global prefix is root-owned, and can leave an older v1 binary shadowing the new one on PATH `type/feature` `area/install-upgrade` `version/v2` `platform/linux` 💬2
- [#63576](https://github.com/anomalyco/opencode/issues/63576) [Desktop] Even very short prompts take a very long time to get a response in 2.2.7 `triaging` `type/bug` `area/desktop` `version/v2` 💬2
- [#63567](https://github.com/anomalyco/opencode/issues/63567) [FEATURE]: tui: image paste from clipboard does nothing on Wayland (GNOME) `triaging` `type/bug` `area/tui` `version/v2` 💬2
- [#63652](https://github.com/anomalyco/opencode/issues/63652) [FEATURE]:Can you support the Claude and Google AI Ultra Subscription usage inside the OpenCode just like OpenAI Account? `type/feature` `area/providers` 💬1
- [#63651](https://github.com/anomalyco/opencode/issues/63651) Feature request: plugin slots for the session's background-work panel (tab bar, rows, footer) `type/feature` `area/plugins` `version/v2` 💬1
- [#63650](https://github.com/anomalyco/opencode/issues/63650) Plugin API: stop a session until it is given work again (`session.stop`) `type/feature` `area/plugins` `version/v2` 💬1
- [#63644](https://github.com/anomalyco/opencode/issues/63644) web: scripts in HTML file previews never run (blob: frame inherits the web UI's CSP) `reproduced` `type/bug` `area/web` `version/v2` 💬1
- [#63643](https://github.com/anomalyco/opencode/issues/63643) Feature request: plugin hooks to merge queued prompts on delivery, and to take pending prompts back into the composer `type/feature` `area/plugins` `version/v2` 💬1
- [#63642](https://github.com/anomalyco/opencode/issues/63642) [FEATURE]: client-attached MCP: what a GUI client still needs to serve its tools to a running server `type/feature` `area/mcp` `version/v2` 💬1
- [#63639](https://github.com/anomalyco/opencode/issues/63639) [FEATURE]:‌I have already paid. but opencode shows failed – the checkout wasn't.email none response received `type/support` 💬1
- [#63638](https://github.com/anomalyco/opencode/issues/63638) recebo msg que o limite free atingido, nas tenho um plano valido... liberar em 24 horas ... `type/support` `area/auth` `inference/go` `inference/free-tier` 💬1
- [#63629](https://github.com/anomalyco/opencode/issues/63629) cli: Shift+Enter newline is ignored inside tmux with Kitty `type/bug` `area/tui` `version/v2` `platform/linux` 💬1
- [#63625](https://github.com/anomalyco/opencode/issues/63625) browser: tool namespace disappears in Desktop sessions `type/bug` `area/desktop` `version/v2` `platform/macos` 💬1
- [#63624](https://github.com/anomalyco/opencode/issues/63624) Faulty Menu Modals `type/bug` `area/desktop` 💬1
- [#63622](https://github.com/anomalyco/opencode/issues/63622) fix now `triaging` `type/bug` `area/desktop` `inference/free-tier` 💬1
- [#63617](https://github.com/anomalyco/opencode/issues/63617) simple use `type/bug` `inference/free-tier` 💬1
- [#63615](https://github.com/anomalyco/opencode/issues/63615) check-greys ignores stylesheet exceptions on Windows `type/bug` `status/repro-plausible` `version/v2` `platform/windows` 💬1
- [#63613](https://github.com/anomalyco/opencode/issues/63613) test(tui): go-upsell-art test fails when COLORTERM=truecolor is set `reproduced` `type/bug` `area/tui` `version/v2` 💬1
- [#63610](https://github.com/anomalyco/opencode/issues/63610) Desktop: never reloads files or file tree `type/bug` `area/desktop` `version/v2` `platform/windows` 💬1
- [#63603](https://github.com/anomalyco/opencode/issues/63603) Code Mode: a tool listed inline shows only its description's first line, so the model never reads rules further down `type/feature` `area/mcp` `version/v2` `platform/macos` 💬1
- [#63607](https://github.com/anomalyco/opencode/issues/63607) Nerd Font/PUA glyphs (U+E000–F8FF) invisible in output

#### 🔒 Closed Issues
- [#785](https://github.com/anomalyco/opencode/issues/785) Is there a way to disable streaming mode?
- [#48099](https://github.com/anomalyco/opencode/issues/48099) [FEATURE]: OpenCode desktop MSI installer
- [#35408](https://github.com/anomalyco/opencode/issues/35408) [FEATURE]: Add V2 model-context plugin hook
- [#63001](https://github.com/anomalyco/opencode/issues/63001) OpenCode Desktop window crashes on startup on Windows x64
- [#54670](https://github.com/anomalyco/opencode/issues/54670) [FEATURE]:Built-in GitHub OAuth login and automatic commit attribution to OpenCode identity
- [#63568](https://github.com/anomalyco/opencode/issues/63568) rate limit bug
- [#62948](https://github.com/anomalyco/opencode/issues/62948) server: git polling loop saturates CPU on large worktrees (snapshot dir inside project triggers rescan storm)
- [#35647](https://github.com/anomalyco/opencode/issues/35647) feat(v2): configure tool availability per session
- [#63312](https://github.com/anomalyco/opencode/issues/63312) [FEATURE]:历史项目清单怎么删除呢
- [#63252](https://github.com/anomalyco/opencode/issues/63252) [BUG]: context hook messages drop metadata, so per-message plugin context never reaches the model
- [#62967](https://github.com/anomalyco/opencode/issues/62967) feat(core): add EVREN LLM to /connect
- [#35640](https://github.com/anomalyco/opencode/issues/35640) V2 TUI: retry notice renders raw HTML from provider 503
- [#63126](https://github.com/anomalyco/opencode/issues/63126) patch: case-only rename deletes the file on case-insensitive filesystems
- [#63595](https://github.com/anomalyco/opencode/issues/63595) mine does send messging coding minecraft mod
- [#63626](https://github.com/anomalyco/opencode/issues/63626) cli: `opencode upgrade` dumps raw npm EACCES when the global prefix is root-owned, and can leave an older v1 binary shadowing the new one on PATH
- [#63576](https://github.com/anomalyco/opencode/issues/63576) [Desktop] Even very short prompts take a very long time to get a response in 2.2.7
- [#63567](https://github.com/anomalyco/opencode/issues/63567) [FEATURE]: tui: image paste from clipboard does nothing on Wayland (GNOME)
- [#63150](https://github.com/anomalyco/opencode/issues/63150) desktop: pairing QR code is inverted in dark theme and cannot be scanned by the Android app
- [#63652](https://github.com/anomalyco/opencode/issues/63652) [FEATURE]:Can you support the Claude and Google AI Ultra Subscription usage inside the OpenCode just like OpenAI Account?
- [#63639](https://github.com/anomalyco/opencode/issues/63639) [FEATURE]:‌I have already paid. but opencode shows failed – the checkout wasn't.email none response received
- [#63638](https://github.com/anomalyco/opencode/issues/63638) recebo msg que o limite free atingido, nas tenho um plano valido... liberar em 24 horas ...
- [#53025](https://github.com/anomalyco/opencode/issues/53025) V2: tool input repair uses the live schema instead of the request snapshot
- [#63625](https://github.com/anomalyco/opencode/issues/63625) browser: tool namespace disappears in Desktop sessions
- [#63624](https://github.com/anomalyco/opencode/issues/63624) Faulty Menu Modals
- [#62721](https://github.com/anomalyco/opencode/issues/62721) [FEATURE]: Publish OpenCode Mobile for Android (Google Play / beta APK)
- [#63617](https://github.com/anomalyco/opencode/issues/63617) simple use
- [#60799](https://github.com/anomalyco/opencode/issues/60799) 2.2.5: plugin tool definitions with JSON Schema $ref are all rejected ("evaluating 'a.ref'") and the tools vanish
- [#63610](https://github.com/anomalyco/opencode/issues/63610) Desktop: never reloads files or file tree

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 29,877 · **Open issues:** 2,226 · **Last push:** <1h ago

On November 13, 2026, Qwen Code released version 0.27.3, which introduces chips above the Web Shell composer to better manage unfinished tasks, and includes various fixes related to CI and agent enrollment processes. The associated SDK TypeScript release v0.1.33 bundles the new CLI version 0.27.3. In the merged pull requests, notable updates include a feature that allows client filesystems to be registered into managed sessions and a refactor optimizing AgentCore functionality. However, multiple issues emerged, the most critical being a bug with idle-unresponsive ACP session children following tool calls, which highlights a growing concern about agent stability under network conditions.

#### 🚀 New Releases
- [v0.27.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.3) Release v0.27.3
- [sdk-typescript-v0.1.33](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.33) SDK TypeScript Release v0.1.33
- [desktop-v0.27.3](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.27.3) Qwen Code Desktop v0.27.3
- [v1.0.0-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v1.0.0-preview.1) Release v1.0.0-preview.1
- [v0.27.2-nightly.20261112.70a487be84](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.2-nightly.20261112.70a487be84) Release v0.27.2-nightly.20261112.70a487be84

#### ✅ Merged PRs
- [#17075](https://github.com/QwenLM/qwen-code/pull/17075) refactor(managed-agent): delete the redundant JdbcRuntimeBrokerSchema alias
- [#16844](https://github.com/QwenLM/qwen-code/pull/16844) feat(managed-agent): register client filesystems into managed sessions
- [#17059](https://github.com/QwenLM/qwen-code/pull/17059) feat(core): run each AgentCore round in one runAgentLoop call
- [#16858](https://github.com/QwenLM/qwen-code/pull/16858) fix(permissions): judge user authorization in the AUTO classifier

#### 🐛 New Issues
- [#17045](https://github.com/QwenLM/qwen-code/issues/17045) tracking(core): land the 1.0 Preview loop kernel on main, one surface at a time `status/in-progress` `priority/P1` `type/feature-request` `category/core` 💬8
- [#17040](https://github.com/QwenLM/qwen-code/issues/17040) ACP session child goes idle-unresponsive after curl/network tool calls; daemon kills it via stats timeout (agent channel closed mid-request) `priority/P1` `type/bug` `category/core` `scope/shell` 💬5
- [#17090](https://github.com/QwenLM/qwen-code/issues/17090) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement @smoke `scope/testing` `duplicate` `status/ready-for-agent` `autofix/skip` 💬4
- [#17076](https://github.com/QwenLM/qwen-code/issues/17076) Main CI failed: Managed Agent gate — AliyunToolPublicationReadRetryTest.transientReadsRecoverWithTheRealSdk(String, int, String)[4] (+1 more) `status/needs-triage` `type/bug` 💬4
- [#17063](https://github.com/QwenLM/qwen-code/issues/17063) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement @smoke `priority/P1` `type/bug` `category/ui` `scope/testing` 💬4
- [#17077](https://github.com/QwenLM/qwen-code/issues/17077) Review request: #15634 (channels inject dispatch mode) is blocked on two approvals; branch re-synced with main after a conflict `status/in-review` `priority/P3` `category/integration` 💬4
- [#17037](https://github.com/QwenLM/qwen-code/issues/17037) ci: hz3 /tmp is out of inodes — leftover verify work trees hold 92% of the tmpfs `priority/P1` `type/bug` `scope/ci-cd` `status/ready-for-human` 💬4
- [#17092](https://github.com/QwenLM/qwen-code/issues/17092) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement `scope/testing` `duplicate` `status/ready-for-agent` `autofix/skip` 💬3
- [#17084](https://github.com/QwenLM/qwen-code/issues/17084) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement @smoke `scope/testing` `duplicate` `status/ready-for-agent` `autofix/skip` 💬3
- [#17056](https://github.com/QwenLM/qwen-code/issues/17056) Web Shell: side task named from the raw <quoted-message> chip serialization shows <quoted-messi… as the tab title (and the rename is rejected by the daemon) `priority/P3` `type/bug` `category/ui` `scope/web-shell` 💬3
- [#17079](https://github.com/QwenLM/qwen-code/issues/17079) deflake: packages/web-shell/client/e2e/web-shell.archived-settings.spec.ts › archive management remains reachable without a local workspace @smoke `type/bug` `scope/testing` `autofix/skip` `scope/web-shell` 💬3
- [#17046](https://github.com/QwenLM/qwen-code/issues/17046) deflake: scripts/tests/verify-pr-prepare.test.js › prepare (CLI) › resolves the coordinates and reports a container boundary `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#17057](https://github.com/QwenLM/qwen-code/issues/17057) deflake: packages/web-shell/client/e2e/web-shell.archived-settings.spec.ts › archive management remains reachable without a local workspace @smoke `priority/P1` `type/bug` `category/development` `scope/testing` 💬3
- [#17038](https://github.com/QwenLM/qwen-code/issues/17038) The CLI remains stuck in the login verification state `status/need-information` `priority/P2` `type/bug` `category/authentication` 💬3
- [#17095](https://github.com/QwenLM/qwen-code/issues/17095) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement @smoke `status/ready-for-agent` `autofix/in-progress` 💬2
- [#17093](https://github.com/QwenLM/qwen-code/issues/17093) run_shell_command returns empty output with exit code 0 when several tool calls end together (non-PTY path settles on exit, not close) `priority/P1` `type/bug` `category/core` `scope/non-interactive` 💬2
- [#17091](https://github.com/QwenLM/qwen-code/issues/17091) AUTO mode: the classifier cannot see a plan the user approved (`exit_plan_mode` is rendered as `{}`) `priority/P2` `type/bug` `category/security` `need-discussion` 💬2
- [#17086](https://github.com/QwenLM/qwen-code/issues/17086) qwen4-max-preview: server-side Chinese tool-URL rule (routify) leaks into context, model flags it as prompt injection and comments on it `priority/P2` `status/blocked` `category/integration` `scope/content-generation` 💬2
- [#16998](https://github.com/QwenLM/qwen-code/issues/16998) feat(managed-agent): H5d split long channel replies into multiple delivery segments instead of truncating `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬2
- [#17078](https://github.com/QwenLM/qwen-code/issues/17078) docs(design): translate acp-child-process-tree-reaping to Chinese `priority/P3` `type/documentation` `category/cli` `scope/documentation` 💬2
- [#17071](https://github.com/QwenLM/qwen-code/issues/17071) Feedback for “Qwen Code overview” `type/support` 💬2
- [#17054](https://github.com/QwenLM/qwen-code/issues/17054) [Feature Request] Interactive inline comments / annotations for Plan Mode and generated Markdown documents `priority/P3` `type/feature-request` `category/ui` `scope/markdown` 💬2
- [#17053](https://github.com/QwenLM/qwen-code/issues/17053) TypeScript SDK: transport negotiation can hang while reading the capabilities response body `priority/P2` `type/bug` `category/core` `daemon` 💬2
- [#17052](https://github.com/QwenLM/qwen-code/issues/17052) Heads-up: network activity observed from @qwen-code/qwen-code@0.27.2 in a clean environment (72h notice before publication) `priority/P2` `type/documentation` `category/telemetry` `scope/data-privacy` 💬2
- [#17039](https://github.com/QwenLM/qwen-code/issues/17039) ci: make the Managed Agent gate name stable so it can become a required check `priority/P1` `type/bug` `category/development` `scope/github-actions` 💬2
- [#17016](https://github.com/QwenLM/qwen-code/issues/17016) Main CI failed: Managed Agent gate — SessionRecoveryInitialStateTest.aPersistedEmptySessionRenameRemainsSendableAfterHarnessCacheLoss `status/needs-triage` `type/bug` 💬1
- [#17085](https://github.com/QwenLM/qwen-code/issues/17085) ECS runner fleet is stale: the qwen update failed `type/bug` `scope/ci-cd`
- [#17068](https://github.com/QwenLM/qwen-code/issues/17068) Main CI failed: Qwen Code CI — src/memory/manager.test.ts > … > reports a flush whose own deadline expired while the slot was held `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#16915](https://github.com/QwenLM/qwen-code/issues/16915) The qwen code task reports two errors and cannot continue.
- [#16908](https://github.com/QwenLM/qwen-code/issues/16908) Qwen Code always stuck and interrupted
- [#17090](https://github.com/QwenLM/qwen-code/issues/17090) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement @smoke
- [#17063](https://github.com/QwenLM/qwen-code/issues/17063) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement @smoke
- [#16405](https://github.com/QwenLM/qwen-code/issues/16405) [Test] Publication lifecycle fixture misses the tenant guard it waits for
- [#16816](https://github.com/QwenLM/qwen-code/issues/16816) bug(browser-use): Zod 4 hangs on the second parse of a deep locator plan
- [#17092](https://github.com/QwenLM/qwen-code/issues/17092) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement
- [#17084](https://github.com/QwenLM/qwen-code/issues/17084) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement @smoke
- [#17046](https://github.com/QwenLM/qwen-code/issues/17046) deflake: scripts/tests/verify-pr-prepare.test.js › prepare (CLI) › resolves the coordinates and reports a container boundary
- [#17057](https://github.com/QwenLM/qwen-code/issues/17057) deflake: packages/web-shell/client/e2e/web-shell.archived-settings.spec.ts › archive management remains reachable without a local workspace @smoke
- [#16497](https://github.com/QwenLM/qwen-code/issues/16497) AUTO mode: the classifier treats goal-related actions as user-authorized ("clean up my branch" → `git branch -D`)
- [#16998](https://github.com/QwenLM/qwen-code/issues/16998) feat(managed-agent): H5d split long channel replies into multiple delivery segments instead of truncating
- [#16875](https://github.com/QwenLM/qwen-code/issues/16875) Let the model run dynamic workflows in the background in ACP clients (Web Shell)
- [#16817](https://github.com/QwenLM/qwen-code/issues/16817) bug(web-shell): welcome Settings keeps stale Current model badge

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

**Stars:** 394,404 · **Open issues:** 8,068 · **Last push:** <1h ago

On November 13, 2026, there were no new releases for OpenClaw. However, several significant improvements and fixes were merged, notably the refactor of workspace access checks in PR #196302 and the enhancement to keep Gateway runtime checks off the main thread with PR #197975. Other important updates included a fix that addresses chat stability by preventing log tailing from stalling in Gateway chats (PR #198028) and improvements to the planner CLI flows (PR #195711). A pressing new issue reported is the backup SQLite header probe failing on large state trees due to a fixed 64 MiB buffer, which has sparked discussions within the community (#198005).

#### ✅ Merged PRs
- [#196302](https://github.com/openclaw/openclaw/pull/196302) refactor(agents): tidy workspace access checks and setup tests
- [#197975](https://github.com/openclaw/openclaw/pull/197975) fix: keep Gateway runtime checks off the main thread
- [#198029](https://github.com/openclaw/openclaw/pull/198029) fix: compaction fails for sandboxed sessions with selected skills
- [#197945](https://github.com/openclaw/openclaw/pull/197945) fix(wizard): zh-TW utility-only setup note uses mainland wording
- [#195711](https://github.com/openclaw/openclaw/pull/195711) improve(ci): measure complete planner CLI flows
- [#198025](https://github.com/openclaw/openclaw/pull/198025) improve(ci): keep stale packages out of hosted dependency caches
- [#198028](https://github.com/openclaw/openclaw/pull/198028) fix(logging): keep log tailing from stalling Gateway chats
- [#198045](https://github.com/openclaw/openclaw/pull/198045) chore(ui): refresh control ui locales
- [#198013](https://github.com/openclaw/openclaw/pull/198013) fix: recheck queued desktop launch requests before starting apps
- [#197942](https://github.com/openclaw/openclaw/pull/197942) improve: frame public shared conversations like chat
- [#198039](https://github.com/openclaw/openclaw/pull/198039) chore(i18n): refresh native locales
- [#197391](https://github.com/openclaw/openclaw/pull/197391) fix(knowledge): keep scribes current after updates, with fresh runs and clear update prompts
- [#198020](https://github.com/openclaw/openclaw/pull/198020) fix(test): clean up config patch fixtures when writes fail
- [#198019](https://github.com/openclaw/openclaw/pull/198019) fix(channels): cancel pending channels.stop on Ctrl+C
- [#198023](https://github.com/openclaw/openclaw/pull/198023) fix(ci): finish readiness fixture retries within the virtual deadline
- [#198008](https://github.com/openclaw/openclaw/pull/198008) fix(gateway): avoid redundant GitHub action authority work
- [#196200](https://github.com/openclaw/openclaw/pull/196200) fix(ui): manage agent GitHub accounts in Profile
- [#192242](https://github.com/openclaw/openclaw/pull/192242) improve: render chat composer mentions inline
- [#198017](https://github.com/openclaw/openclaw/pull/198017) fix(test): wait for Profile content before the first screenshot
- [#197906](https://github.com/openclaw/openclaw/pull/197906) feat(ui): choose the speech-to-text model from Settings → Talk
- [#198016](https://github.com/openclaw/openclaw/pull/198016) test(ui): honor reduced-motion transition timing
- [#198024](https://github.com/openclaw/openclaw/pull/198024) fix(ci): stop flagging the plugin-owned Codex benchmark dependency
- [#197904](https://github.com/openclaw/openclaw/pull/197904) feat(browser): open Chrome settings pages from the Control UI Browser panel
- [#197909](https://github.com/openclaw/openclaw/pull/197909) fix(status): cancel pending Gateway reads in status on Ctrl+C
- [#197887](https://github.com/openclaw/openclaw/pull/197887) perf(agents): reuse sealed nested tool-result payloads
- [#197983](https://github.com/openclaw/openclaw/pull/197983) fix(ui): desktop group search misses accented group names typed in another Unicode form
- [#195901](https://github.com/openclaw/openclaw/pull/195901) fix(cron): scheduled session failures lose their cause
- [#197825](https://github.com/openclaw/openclaw/pull/197825) fix(discord): keep slash command reply text when an attachment fails to load
- [#198007](https://github.com/openclaw/openclaw/pull/198007) fix(slack): recover Socket Mode 3.2 native reconnect failures
- [#167173](https://github.com/openclaw/openclaw/pull/167173) feat(ios): manage session groups directly from the group header
- [#197978](https://github.com/openclaw/openclaw/pull/197978) fix(logging): isolate Gateway logs by state directory
- [#198006](https://github.com/openclaw/openclaw/pull/198006) chore(ui): refresh control ui locales
- [#197992](https://github.com/openclaw/openclaw/pull/197992) fix: restore export checks for chat and proxy credit
- [#197998](https://github.com/openclaw/openclaw/pull/197998) test(ui): follow remote-access warning completion
- [#197997](https://github.com/openclaw/openclaw/pull/197997) test(ui): wait for child roster startup before measuring requests
- [#197993](https://github.com/openclaw/openclaw/pull/197993) fix: wait for lazy permission card in tool row test
- [#197917](https://github.com/openclaw/openclaw/pull/197917) fix(cron): resolve agent-less job owners through the system agent
- [#197969](https://github.com/openclaw/openclaw/pull/197969) fix(status): Ctrl-C does not stop openclaw status during the Gateway probe
- [#197986](https://github.com/openclaw/openclaw/pull/197986) fix: resume overlapping worktree cleanup waits independently
- [#197981](https://github.com/openclaw/openclaw/pull/197981) fix(release): warn when diagnostic receipts cannot seal
- [#197985](https://github.com/openclaw/openclaw/pull/197985) fix(test): agent artifact fixture uses the retired worker creation API
- [#197901](https://github.com/openclaw/openclaw/pull/197901) feat(ui): search Google from the Browser panel address bar
- [#197128](https://github.com/openclaw/openclaw/pull/197128) feat: add an opt-in usage-ranked tool index
- [#197954](https://github.com/openclaw/openclaw/pull/197954) fix(ui): preserve table expansion across reaction containers
- [#197976](https://github.com/openclaw/openclaw/pull/197976) fix(pr): retain OpenClaw ID validator sources in wrapper archives
- [#197962](https://github.com/openclaw/openclaw/pull/197962) fix(test): worktree recovery fixture loses its checkout to startup cleanup
- [#197965](https://github.com/openclaw/openclaw/pull/197965) improve(gateway): reduce Control UI PR subscription allocation
- [#197971](https://github.com/openclaw/openclaw/pull/197971) fix(diagnostics): retain callback owners in heap summaries
- [#197941](https://github.com/openclaw/openclaw/pull/197941) fix: reclaim older scratch before fresh worktrees after restart
- [#197961](https://github.com/openclaw/openclaw/pull/197961) fix: honor access changes for queued worker deletion
- [#197972](https://github.com/openclaw/openclaw/pull/197972) chore(ui): refresh control ui locales
- [#197936](https://github.com/openclaw/openclaw/pull/197936) fix(cli): restore lightweight help and cleanup test startup
- [#197956](https://github.com/openclaw/openclaw/pull/197956) chore(ui): refresh control ui locales
- [#197466](https://github.com/openclaw/openclaw/pull/197466) feat(ui): add optional inline command trail
- [#197697](https://github.com/openclaw/openclaw/pull/197697) feat(openclaw-id): member roles are opaque names in the protocol
- [#197340](https://github.com/openclaw/openclaw/pull/197340) fix(cron): keep condition checks running when all run slots are busy
- [#197918](https://github.com/openclaw/openclaw/pull/197918) chore(i18n): refresh native locales
- [#197931](https://github.com/openclaw/openclaw/pull/197931) fix(ui): stabilize idle command palette browser test
- [#197875](https://github.com/openclaw/openclaw/pull/197875) fix: keep worker creation tied to its original caller across restarts
- [#197929](https://github.com/openclaw/openclaw/pull/197929) fix(test): correct startup rollback and node expiry expectations
- [#196867](https://github.com/openclaw/openclaw/pull/196867) feat(identity): accept co-author credit from trusted-proxy headers
- [#197934](https://github.com/openclaw/openclaw/pull/197934) fix(test): isolate built-source worker cleanup fixture
- [#197527](https://github.com/openclaw/openclaw/pull/197527) improve(ui): show remote access setup steps in one card with details on demand
- [#197526](https://github.com/openclaw/openclaw/pull/197526) fix(update): updating from 2026.11.3 fails when Workboard is installed
- [#197933](https://github.com/openclaw/openclaw/pull/197933) chore(ui): refresh control ui locales
- [#197913](https://github.com/openclaw/openclaw/pull/197913) fix: guide agents to reuse shared repository checkouts
- [#197916](https://github.com/openclaw/openclaw/pull/197916) fix(pr): reduce baseline proof time spent resolving wrapper inventory
- [#193871](https://github.com/openclaw/openclaw/pull/193871) fix(text): streaming Markdown checkpoint must settle after a closed legacy bracket block
- [#196789](https://github.com/openclaw/openclaw/pull/196789) fix(templates): Template Add fails after review on multi-channel hosts when an automation announces to the last channel
- [#197817](https://github.com/openclaw/openclaw/pull/197817) improve(ui): refine the slash command menu
- [#197885](https://github.com/openclaw/openclaw/pull/197885) fix(oc-path): preserve the first line in newline-only JSONL files
- [#191637](https://github.com/openclaw/openclaw/pull/191637) fix(logging): preserve stuck-session recovery classification in automation failures
- [#197388](https://github.com/openclaw/openclaw/pull/197388) fix: preview plugin and personal themes with their own colors
- [#197897](https://github.com/openclaw/openclaw/pull/197897) fix(clawrouter): edit uploaded images with the selected OpenAI model
- [#195913](https://github.com/openclaw/openclaw/pull/195913) fix(signal): print reply author state degradation on the console
- [#197407](https://github.com/openclaw/openclaw/pull/197407) fix(ci): isolate Dashboard and repair native onboarding fixtures
- [#195923](https://github.com/openclaw/openclaw/pull/195923) fix(clickclack): show discussion attachment failures on the console
- [#196421](https://github.com/openclaw/openclaw/pull/196421) fix(cli): let image TTL sweep recur within a long-running process
- [#197823](https://github.com/openclaw/openclaw/pull/197823) improve(ui): show message reactions as one quiet tab on the bubble corner
- [#196060](https://github.com/openclaw/openclaw/pull/196060) fix(onboard): let Enter skip the skills dependency step
- [#183586](https://github.com/openclaw/openclaw/pull/183586) fix(talk): voice requests stall before the backing agent starts
- [#196058](https://github.com/openclaw/openclaw/pull/196058) fix(onboard): ask for the agent's model after a utility-only provider
- [#197908](https://github.com/openclaw/openclaw/pull/197908) feat(chat): edit queued messages and get rejected sends back in the composer
- [#196624](https://github.com/openclaw/openclaw/pull/196624) fix(text): gate delivery filters on real tag shape, not bare mentions
- [#196426](https://github.com/openclaw/openclaw/pull/196426) fix(cli): restart probe fails to report several Gateway auth rejections as auth-rejected
- [#197911](https://github.com/openclaw/openclaw/pull/197911) fix(ci): plan only executable infra tests
- [#197886](https://github.com/openclaw/openclaw/pull/197886) fix(ui): wait for transcript search before focus assertions
- [#191908](https://github.com/openclaw/openclaw/pull/191908) fix(skills): keep remote bin probe suppression on elapsed time
- [#196465](https://github.com/openclaw/openclaw/pull/196465) fix(doctor): surface agent-dir read failures in OAuth shadow scan
- [#197920](https://github.com/openclaw/openclaw/pull/197920) chore(ui): refresh control ui locales
- [#197821](https://github.com/openclaw/openclaw/pull/197821) fix(ui): keep subagent avatar icons visible in light themes
- [#197900](https://github.com/openclaw/openclaw/pull/197900) fix(sessions): reduce main-thread work when loading long transcripts
- [#197898](https://github.com/openclaw/openclaw/pull/197898) fix(worktrees): resume reclaim after Gateway startup
- [#197628](https://github.com/openclaw/openclaw/pull/197628) feat(openclaw-id): link your OpenClaw ID so your owner devices connect as you
- [#197883](https://github.com/openclaw/openclaw/pull/197883) fix: allow Gateway restart after late sidecar cleanup
- [#185963](https://github.com/openclaw/openclaw/pull/185963) fix: stop closed macOS dashboards reconnecting after native auth refusal
- [#197903](https://github.com/openclaw/openclaw/pull/197903) chore(ui): refresh control ui locales
- [#196539](https://github.com/openclaw/openclaw/pull/196539) fix(cron): let configured fallbacks on other providers run for account-bound automations
- [#197856](https://github.com/openclaw/openclaw/pull/197856) fix(agents): preserve steering refusal reasons
- [#197890](https://github.com/openclaw/openclaw/pull/197890) fix(knowledge): drop the Granola scribe's stop-when-context-is-short rule
- [#197848](https://github.com/openclaw/openclaw/pull/197848) fix(ui): keep Template review file rows visible on phones
- [#197846](https://github.com/openclaw/openclaw/pull/197846) feat(chat): keep composer drafts across app restarts
- [#197559](https://github.com/openclaw/openclaw/pull/197559) feat(openclaw-id): sign in with OpenClaw ID over a verified personal sign-in
- [#197384](https://github.com/openclaw/openclaw/pull/197384) fix(plugins): restore publisher badges on installed bundled plugins
- [#197877](https://github.com/openclaw/openclaw/pull/197877) fix(anthropic): keep scheduler inventory on the Gateway
- [#197772](https://github.com/openclaw/openclaw/pull/197772) fix(worktrees): reclaim scratch before the cleanup backlog
- [#197879](https://github.com/openclaw/openclaw/pull/197879) fix(ci): respect fixture readiness and resource ownership
- [#197596](https://github.com/openclaw/openclaw/pull/197596) fix(cron): give helpers spawned by linked automations their run's memory
- [#197862](https://github.com/openclaw/openclaw/pull/197862) fix: make failed workspace preparation diagnosable
- [#197873](https://github.com/openclaw/openclaw/pull/197873) fix(ci): keep the workflow below its size guard
- [#197869](https://github.com/openclaw/openclaw/pull/197869) fix(ui): default model save looks stuck while model discovery runs
- [#197839](https://github.com/openclaw/openclaw/pull/197839) fix(sessions): restore dependency checks for pending-input reads
- [#197833](https://github.com/openclaw/openclaw/pull/197833) fix(update): old updater runtimes pile up while the Gateway is running
- [#197579](https://github.com/openclaw/openclaw/pull/197579) improve: reduce memory churn during Responses continuation
- [#197863](https://github.com/openclaw/openclaw/pull/197863) feat(google): add Gemini 4 Hydrogen to the catalog
- [#192623](https://github.com/openclaw/openclaw/pull/192623) refactor(plugins): migrate binding and approval reads to async owners
- [#197842](https://github.com/openclaw/openclaw/pull/197842) fix(agents): let healthy proxy streams exceed 16 MiB
- [#197835](https://github.com/openclaw/openclaw/pull/197835) fix(agents): keep the session system prompt stable across completion wakes
- [#192613](https://github.com/openclaw/openclaw/pull/192613) refactor(agents): isolate CLI model capabilities
- [#192615](https://github.com/openclaw/openclaw/pull/192615) refactor(auth): isolate OpenAI route availability projection
- [#197815](https://github.com/openclaw/openclaw/pull/197815) fix(channels): cancel pending status read in channels list on Ctrl+C
- [#197840](https://github.com/openclaw/openclaw/pull/197840) perf(gateway): follow publication facts for passive PR subscriptions
- [#197841](https://github.com/openclaw/openclaw/pull/197841) fix(pr): preserve cache replacement refusal during metadata handoff
- [#197844](https://github.com/openclaw/openclaw/pull/197844) chore(update): record 2026.11.5-beta.2 in the update compat inventory
- [#184513](https://github.com/openclaw/openclaw/pull/184513) fix(agents): preserve invitation custody through transcript writes
- [#197786](https://github.com/openclaw/openclaw/pull/197786) fix(ci): right-size serial central type checks
- [#197749](https://github.com/openclaw/openclaw/pull/197749) fix(memory-wiki): cancel interrupted wiki status and doctor reads
- [#196028](https://github.com/openclaw/openclaw/pull/196028) fix(pr): refresh bound baselines for pending proof
- [#197804](https://github.com/openclaw/openclaw/pull/197804) feat(ui): toggle wrapping on code blocks in your own messages
- [#197831](https://github.com/openclaw/openclaw/pull/197831) test(update): keep cancellation fixture heartbeat on real time
- [#197834](https://github.com/openclaw/openclaw/pull/197834) chore(ui): refresh control ui locales
- [#197791](https://github.com/openclaw/openclaw/pull/197791) fix(cron): one-shot details omit seconds and milliseconds
- [#197784](https://github.com/openclaw/openclaw/pull/197784) fix(models): discovered models become "Unknown model" after restart or an ended sign-in
- [#197790](https://github.com/openclaw/openclaw/pull/197790) fix(plugin-state): guarded calls fail until Gateway restart after an unknown write outcome
- [#197653](https://github.com/openclaw/openclaw/pull/197653) improve(ui): cap long session menus and search groups
- [#197808](https://github.com/openclaw/openclaw/pull/197808) fix(browser): exclude partitioned cookies from explicit standalone acquisition
- [#197819](https://github.com/openclaw/openclaw/pull/197819) fix: plugin packaging fails on deduplicated dependency files
- [#197826](https://github.com/openclaw/openclaw/pull/197826) chore(i18n): refresh native locales
- [#197707](https://github.com/openclaw/openclaw/pull/197707) fix: stabilize fenced-code keyboard scroll test
- [#197809](https://github.com/openclaw/openclaw/pull/197809) fix(backup): runtime pin store is archived as opaque bytes with a warning on every backup
- [#197706](https://github.com/openclaw/openclaw/pull/197706) fix: stabilize background completion notification test
- [#197758](https://github.com/openclaw/openclaw/pull/197758) fix(cli): let interrupted session listings exit promptly
- [#197658](https://github.com/openclaw/openclaw/pull/197658) fix(subagents): a failed child's result is lost when its parent's turn already ended
- [#197667](https://github.com/openclaw/openclaw/pull/197667) fix(cron): automation runs fail after sessions_yield on a spawned subagent
- [#197780](https://github.com/openclaw/openclaw/pull/197780) test(postgres): qualify remote acceptance crash windows
- [#197783](https://github.com/openclaw/openclaw/pull/197783) perf(ci): trim plugin reload fixture compilation
- [#197788](https://github.com/openclaw/openclaw/pull/197788) fix(chat): hide untrusted frames in continue-imported Beam history
- [#197771](https://github.com/openclaw/openclaw/pull/197771) fix(test): assert tool-result fidelity at each output
- [#197738](https://github.com/openclaw/openclaw/pull/197738) fix(test): accept deferred pending-install receipts
- [#197747](https://github.com/openclaw/openclaw/pull/197747) fix(cli): let interrupted ID status checks exit promptly
- [#193561](https://github.com/openclaw/openclaw/pull/193561) docs: explain Python stdio bundle setup
- [#197774](https://github.com/openclaw/openclaw/pull/197774) fix(cron): wait for busy conversations before scheduled checks
- [#197750](https://github.com/openclaw/openclaw/pull/197750) fix(codex): stop interrupted session catalog reads
- [#197742](https://github.com/openclaw/openclaw/pull/197742) fix(logging): avoid main-thread stalls when resolving default log files
- [#197718](https://github.com/openclaw/openclaw/pull/197718) fix(test): align Decision fixtures with admitted request contracts
- [#196759](https://github.com/openclaw/openclaw/pull/196759) feat(macos): enroll Mac nodes through OpenClaw ID invitations, with native hosting onboarding
- [#184512](https://github.com/openclaw/openclaw/pull/184512) fix(sessions): commit selected invitations with original messages
- [#197523](https://github.com/openclaw/openclaw/pull/197523) improve: make Telegram tool progress easier to scan
- [#197734](https://github.com/openclaw/openclaw/pull/197734) fix(test): keep queued Stop cleanup on real timers
- [#197599](https://github.com/openclaw/openclaw/pull/197599) fix: keep usage pricing from blocking the Gateway on filesystem lookups
- [#197733](https://github.com/openclaw/openclaw/pull/197733) fix(agents): context-engine prompt additions never reach claude-cli turns
- [#197727](https://github.com/openclaw/openclaw/pull/197727) fix(pack): retain npm failure diagnostics
- [#197751](https://github.com/openclaw/openclaw/pull/197751) fix(gateway): subagent exec approvals fail with missing operator.approvals scope
- [#197757](https://github.com/openclaw/openclaw/pull/197757) refactor(ios): one meaning for the runtime reconnect flag
- [#197759](https://github.com/openclaw/openclaw/pull/197759) fix(agents): keep exec declarations stable across CLI completion turns
- [#197735](https://github.com/openclaw/openclaw/pull/197735) fix(claude-cli): saved history lost after message-tool replies
- [#197755](https://github.com/openclaw/openclaw/pull/197755) fix(ci): qualify exact main without a pull request
- [#197744](https://github.com/openclaw/openclaw/pull/197744) fix: restore native trust verifier lint gate
- [#183163](https://github.com/openclaw/openclaw/pull/183163) Track Slack interactions before ACK and through listener settlement
- [#197745](https://github.com/openclaw/openclaw/pull/197745) fix(claude-cli): WebChat shows a second native conclusion after a final message-tool reply
- [#195777](https://github.com/openclaw/openclaw/pull/195777) fix(android): discard unsaved wake-word drafts when switching gateways
- [#197731](https://github.com/openclaw/openclaw/pull/197731) fix(macos): keep idle socket listeners off cooperative executor
- [#197756](https://github.com/openclaw/openclaw/pull/197756) fix(test): supply renamed startup diagnostics to standalone metadata fixture

#### 🐛 New Issues
- [#197935](https://github.com/openclaw/openclaw/issues/197935) Update failure: package-permissions (2026.11.2) `P2` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬4
- [#197531](https://github.com/openclaw/openclaw/issues/197531) macOS TTS: reported truncated CAF from segmented MP3 despite successful conversion `P2` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬4
- [#197837](https://github.com/openclaw/openclaw/issues/197837) Control UI Browser: allow operator-only access to chrome://settings `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬3
- [#197691](https://github.com/openclaw/openclaw/issues/197691) Template agents are called "Assistant" in Control UI chat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#197907](https://github.com/openclaw/openclaw/issues/197907) [Bug]: Approval leaves the current topic in a private Telegram chat `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#197859](https://github.com/openclaw/openclaw/issues/197859) [Feature]: Set up speech-to-text model and OpenRouter key from Settings → Talk `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#197923](https://github.com/openclaw/openclaw/issues/197923) Telegram: support widgets in private-chat topics `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#198005](https://github.com/openclaw/openclaw/issues/198005) [Bug]: backup SQLite header probe fails on large state trees due to fixed 64 MiB buffer `P2` `impact:other` 💬2
- [#197910](https://github.com/openclaw/openclaw/issues/197910) [Bug]: macOS: update repair fails with ENOENT on <anchor>/launchers after APFS device renumbering (2026.11.3) `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#197884](https://github.com/openclaw/openclaw/issues/197884) Cron announce delivery from webchat-origin job fails to resolve a channel, but the run reports delivered:true (fallback masks failure) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#197847](https://github.com/openclaw/openclaw/issues/197847) [Feature]: ask_user — open-ended questions (no options), per-question required, batch context block, and user supplement note `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#197838](https://github.com/openclaw/openclaw/issues/197838) [Feature]: Per-group/room override for messages.groupChat.unmentionedInbound `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#197708](https://github.com/openclaw/openclaw/issues/197708) Released builds still lack #172632 admission recovery: main agent refused on every boot on 2026.10.10 and 2026.11.2 (Docker) `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#197816](https://github.com/openclaw/openclaw/issues/197816) [Bug]: openclaw update always fails on large state dirs — sqlite-header-probe spawnSync timeout (10s) vs unbounded path count `P2` `impact:ux-friction` 💬2
- [#197810](https://github.com/openclaw/openclaw/issues/197810) MCP loopback: claude-cli announce/settle turns get no OpenClaw tools — capability read after the first await escapes `withPreparedSessionCapabilityRead` (500 / -32603) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#197806](https://github.com/openclaw/openclaw/issues/197806) macOS app crashes (SIGTRAP) when starting Talk Mode — Swift concurrency assertion in PermissionManager.ensureSpeechRecognition `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#197760](https://github.com/openclaw/openclaw/issues/197760) classicslens_lookup: short definition missing for λεγω 💬2
- [#197767](https://github.com/openclaw/openclaw/issues/197767) [Bug]: with tools.fs.workspaceOnly the agent cannot load its own generated images (tool-image-generation outside workspace) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#197674](https://github.com/openclaw/openclaw/issues/197674) Exec approvals with `ask: "on-miss"` likely fail for spawned subagents on the `claude-cli` runtime: "Exec approval registration failed: … missing scope: operator.approvals" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#197512](https://github.com/openclaw/openclaw/issues/197512) spawn-broker: session MCP groups (service-child-group-anchor + stdio servers) not reaped after session end -> ~1GB/h leak `P1` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬2
- [#197763](https://github.com/openclaw/openclaw/issues/197763) [Bug]: Plugin OAuth credentials omitted from native Codex MCP projection — Atlassian authorized but no tools `bug` `no-stale` `bug:behavior` `P1` 💬2
- [#197730](https://github.com/openclaw/openclaw/issues/197730) Show linked Telegram and WebUI messages as the same person `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#197662](https://github.com/openclaw/openclaw/issues/197662) Control UI webchat: inline show_widget and [embed ref=cv_...] in assistant replies never render (claude-cli runtime) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#197741](https://github.com/openclaw/openclaw/issues/197741) [Bug]: macOS orphaned SSH git-upload-pack processes consume GBs of bandwidth; originating caller unknown `P2` `impact:other` 💬1
- [#198052](https://github.com/openclaw/openclaw/issues/198052) Browser panel: an action's error disappears while the page keeps streaming `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197939](https://github.com/openclaw/openclaw/issues/197939) zh-TW utility-only setup note uses inconsistent terminology `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198051](https://github.com/openclaw/openclaw/issues/198051) openclaw id rebind prints literal \n in multi-line publication/follow-up failures `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198050](https://github.com/openclaw/openclaw/issues/198050) [Bug]: Recovered tool warning marks delivered silent cron run failed and repeats report `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#198048](https://github.com/openclaw/openclaw/issues/198048) [Bug]: openclaw-tooltip hover card flickers on mouse move: interactionElements excludes host element, so sidebar build chip hover card cannot stay open `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#198046](https://github.com/openclaw/openclaw/issues/198046) [Bug]: Failed Telegram final photo send blocks document fallback with delivery_ambiguous and ends without final summary `P2` `impact:message-loss` `impact:ux-friction` 💬1
- [#198041](https://github.com/openclaw/openclaw/issues/198041) claude-cli: final assistant reply stored twice (imported CLI entry + live-run entry); iOS app shows duplicates `P2` `impact:session-state` `impact:ux-friction` 💬1
- [#198042](https://github.com/openclaw/openclaw/issues/198042) Baseten Chat Completions: retained session emits orphan DSML; request a supported run-scoped capture path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198001](https://github.com/openclaw/openclaw/issues/198001) [Bug]: Gemini 4 Hydrogen: xhigh thinking is refused or sent as HIGH, though Google accepts XHIGH `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197944](https://github.com/openclaw/openclaw/issues/197944) Markdown-table width regression on main after #197823 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198036](https://github.com/openclaw/openclaw/issues/198036) [Feature]: iOS Share Extension can't send to Cloudflare Access–protected Gateways (use the app's Access session or hand off to the app) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198032](https://github.com/openclaw/openclaw/issues/198032) [Docs Bug]: Codex troubleshooting reads the retired host-wide log path `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198026](https://github.com/openclaw/openclaw/issues/198026) Control UI Skills: "Needs Setup" counts skills excluded by the agent's skills allowlist `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197982](https://github.com/openclaw/openclaw/issues/197982) Control UI desktop "Move to group" search finds no group when the name and the query use different Unicode forms of the same accented letter `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198021](https://github.com/openclaw/openclaw/issues/198021) OpenRouter STT ignores providerOptions, preventing Scribe audio-event tags from being disabled `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197824](https://github.com/openclaw/openclaw/issues/197824) Discord slash command reply loses its text when an attachment fails to load `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197952](https://github.com/openclaw/openclaw/issues/197952) [Bug]: Slack Socket Mode never reconnects after a failed WSS URL refresh; the reconnect observer misses @slack/socket-mode 3.x start failures and status stays "connected" `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198010](https://github.com/openclaw/openclaw/issues/198010) [Bug]: npm installs of 2026.11.5-beta.x: Bonjour discovery fails with ERR_MODULE_NOT_FOUND for `@homebridge/ciao/native.js` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198002](https://github.com/openclaw/openclaw/issues/198002) Bug: shared browser tabs disappear when Chrome blocks debugger access `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#197989](https://github.com/openclaw/openclaw/issues/197989) [Bug]: `openclaw message send` waits ~10 s in CLI cleanup after the message is delivered (2026.10.9) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#198004](https://github.com/openclaw/openclaw/issues/198004) Browser: scoped 1Password cooperation can prevent protected-frame attachment loss `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🦪 silver shellfish` 💬1
- [#198000](https://github.com/openclaw/openclaw/issues/198000) [Bug]: Trusted tool policy approvals get no owner unless the policy sets pluginId itself ("signed plugin approval owner is unavailable") `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#197995](https://github.com/openclaw/openclaw/issues/197995) [Bug]: Answered Discord history resurfaces when internal turns exhaust the reconciliation lookup `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197994](https://github.com/openclaw/openclaw/issues/197994) [Bug]: Recent history re-quotes answered original requests after accepted steering `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197996](https://github.com/openclaw/openclaw/issues/197996) [Bug]: Discord/Codex recent-history context lacks an explicit current-request boundary `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197905](https://github.com/openclaw/openclaw/issues/197905) [Bug]: Automations fail to save with no agent selected on multi-agent gateways `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#197968](https://github.com/openclaw/openclaw/issues/197968) openclaw status ignores Ctrl-C during the Gateway probe when the Gateway does not answer: forced kill after 2 s, or about a minute of connections `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197895](https://github.com/openclaw/openclaw/issues/197895) [Feature]: Search Google from the Browser panel address bar and explain unsupported URLs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#197984](https://github.com/openclaw/openclaw/issues/197984) [Feature]: Serve a static App Home card in the Google Chat plugin `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197938](https://github.com/openclaw/openclaw/issues/197938) [Docs Bug]: How is the heartbeat checklist supposed to stay up to date? `bug` `docs` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#197966](https://github.com/openclaw/openclaw/issues/197966) Hardening: recheck an automation’s parent before owner-only effects `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#197963](https://github.com/openclaw/openclaw/issues/197963) [Bug]: Claude/Codex paired-Mac catalogs intermittently disappear with NODE_INVOKE_FAILED (2026.11.3) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#197958](https://github.com/openclaw/openclaw/issues/197958) talk.catalog: report which speech-to-text path Talk transcription uses `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#197940](https://github.com/openclaw/openclaw/issues/197940) [Bug]: Every plugin agent_end handler fails with "Plugin invocation scope is closed" after a turn that called dispatch_action `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197932](https://github.com/openclaw/openclaw/issues/197932) [Bug]: Provider wrappers and summaries lack owning session identity `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197926](https://github.com/openclaw/openclaw/issues/197926) Per-agent compaction model, or a per-agent opt-out so compaction follows the agent's own provider and auth profile `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197921](https://github.com/openclaw/openclaw/issues/197921) [Bug]: GPT-Live native delegation (gateway-control-v1) consults die with SqliteTranscriptMutationConflictError when the caller's final transcript lands after the consult starts `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#197915](https://github.com/openclaw/openclaw/issues/197915) [Bug]: UI Control issue `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#197902](https://github.com/openclaw/openclaw/issues/197902) Browser panel: let the user take over the agent's browser for a moment, without stopping the agent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197892](https://github.com/openclaw/openclaw/issues/197892) [Bug]: read cannot open media://inbound refs under tools.fs.workspaceOnly (host, no sandbox) — misleading ENOENT `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#197878](https://github.com/openclaw/openclaw/issues/197878) [Feature]: Guarded previous/next session shortcuts in Control UI `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#197888](https://github.com/openclaw/openclaw/issues/197888) Subagent completion handoff applies resetByType daily policy (ignoring resetByChannel.webchat) to a spawned dashboard session, rolling it to a new sessionId mid-turn: reply dropped as session-rebound, next turn starts with no history, nothing shown in UI (2026.9.7) `P1` `impact:session-state` `impact:message-loss` 💬1
- [#197880](https://github.com/openclaw/openclaw/issues/197880) [Feature]: diagnostics-prometheus: let plugins contribute their own metric families `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197881](https://github.com/openclaw/openclaw/issues/197881) [Feature]: Expose whether the current turn handled untrusted content on plugin hook context `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#197857](https://github.com/openclaw/openclaw/issues/197857) Control UI: “Discovering more models” makes a saved default model look stuck `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197882](https://github.com/openclaw/openclaw/issues/197882) [Feature]: Manifest configSignals should be able to test a value, not only presence `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197871](https://github.com/openclaw/openclaw/issues/197871) [Bug]: Nostr profile save rejects blank optional fields `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197870](https://github.com/openclaw/openclaw/issues/197870) Update failure: gateway-recovery-verification (2026.11.5-beta.2) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#197866](https://github.com/openclaw/openclaw/issues/197866) Show and edit per-agent utility models in Agents → Overview `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197861](https://github.com/openclaw/openclaw/issues/197861) [Bug]: Second message send in the same batch is dropped as "delivery_ambiguous / do not retry" although it was never sent `P1` `impact:message-loss` 💬1
- [#197858](https://github.com/openclaw/openclaw/issues/197858) [Bug]: Boot stuck after doctor complete `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#197860](https://github.com/openclaw/openclaw/issues/197860) [Bug]: Agent can copy historical co-author trailers despite current opt-out `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#197855](https://github.com/openclaw/openclaw/issues/197855) Outbound media loader doesn't apply tools.web.fetch.ssrfPolicy (blockedHostnames) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#197849](https://github.com/openclaw/openclaw/issues/197849) [Bug]: Managed workspace preparation hides clone failure details and retry cancels before agent startup `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#197843](https://github.com/openclaw/openclaw/issues/197843) [Bug]: Control UI dictation silently discards the whole transcript on window blur / page hidden (e.g. screensaver after 5 min) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197789](https://github.com/openclaw/openclaw/issues/197789) [Bug]: one-shot automation details omit configured seconds and milliseconds `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197829](https://github.com/openclaw/openclaw/issues/197829) // ... 122 more lines (total: 122) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197828](https://github.com/openclaw/openclaw/issues/197828) claude-cli: long subagent runs fail at the 8 MiB stream-json budget after all work is done — make it configurable or degrade instead of failing `P2` `impact:message-loss` 💬1
- [#197827](https://github.com/openclaw/openclaw/issues/197827) claude-cli: child-completion turn changes the main chat's system prompt, then the next normal turn changes it back (`system_changed` cache misses) `P2` `impact:other` 💬1
- [#197813](https://github.com/openclaw/openclaw/issues/197813) [Feature]: Control UI: semantic (hybrid) search over session transcripts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197778](https://github.com/openclaw/openclaw/issues/197778) PostgreSQL qualification: remote acceptance before local receipt `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#197794](https://github.com/openclaw/openclaw/issues/197794) Docker: keep bundled Chromium visible when /home/node is a volume (install to /opt, symlink the existing cache path) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197792](https://github.com/openclaw/openclaw/issues/197792) [Bug]: "couldn't finish this reply" recurs on 2026.11.2 — transcript append vs. history-rewrite race (UNIQUE constraint failed: transcript_events.session_id, transcript_events.seq) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#197787](https://github.com/openclaw/openclaw/issues/197787) [Bug]: Gateway restart while a run is parked in sessions_yield leaves the session permanently failing SESSION_WORK_START_CHANGED (2026.10.7) `P2` `impact:session-state` `impact:message-loss` 💬1
- [#197779](https://github.com/openclaw/openclaw/issues/197779) [Bug]: backup restore --target refuses PostgreSQL archives when the target path goes through a symlink `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197766](https://github.com/openclaw/openclaw/issues/197766) [Bug]: image/music generation completion always falls back off claude-cli ("CLI runtimes cannot enforce restart-safe tool restrictions") `P2` `impact:auth-provider` 💬1
- [#197650](https://github.com/openclaw/openclaw/issues/197650) [Bug]: Claude CLI shows a native final after a confirmed final message-tool reply in WebChat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#197761](https://github.com/openclaw/openclaw/issues/197761) Update failure: managed-service-preflight (2026.11.1) `P2` `impact:ux-friction` 💬1
- [#197743](https://github.com/openclaw/openclaw/issues/197743) Gateway main heap grows with use: finished runs kept alive by async context frames and fork snapshots; Playwright requests/pages kept until the 10k-per-type limit `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#197746](https://github.com/openclaw/openclaw/issues/197746) [Bug]: `bug` `regression` 💬1
- [#197715](https://github.com/openclaw/openclaw/issues/197715) [Feature]: add CLI read surface for agent workspace documents `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197710](https://github.com/openclaw/openclaw/issues/197710) [Bug]: Cron retry classification misses versioned HTTP 5xx status lines `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197685](https://github.com/openclaw/openclaw/issues/197685) [Bug]: backup verify and restore select the wrong archive through a symlink parent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197700](https://github.com/openclaw/openclaw/issues/197700) [Feature]: Adjustable chat line spacing in Appearance `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197701](https://github.com/openclaw/openclaw/issues/197701) [Feature]: voice-call: outbound dial policy for the voice_call tool (owner-only option, destination rule, daily cap) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#197591](https://github.com/openclaw/openclaw/issues/197591) [Bug] config hot-reload aborts in-flight cron runs and records a misleading "Gateway shutting down." error `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197675](https://github.com/openclaw/openclaw/issues/197675) [Bug]: Global trajectory retention does not enforce the 512 MiB budget on 2026.11.3: trajectory_runtime_events at 943 MB, oldest finished runs never evicted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#197669](https://github.com/openclaw/openclaw/issues/197669) [Bug]: Telegram message_sent plugin hooks receive no sessionKey `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197619](https://github.com/openclaw/openclaw/issues/197619) Qualify populated PostgreSQL startup webhook decisions `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#197665](https://github.com/openclaw/openclaw/issues/197665) [Bug]: Gateway runs the `stale-lease-full` agent-DB integrity scan synchronously on its main thread; 6.8 GB DB froze the whole Gateway for 390 s (2026.11.3) `P1` `impact:crash-loop` 💬1
- [#197664](https://github.com/openclaw/openclaw/issues/197664) Restart-recovery settlement refused during gateway stop: admission released/DB closed before settlement `P2` `impact:session-state` 💬1
- [#197660](https://github.com/openclaw/openclaw/issues/197660) Update failure: package-update (2026.10.10) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#197651](https://github.com/openclaw/openclaw/issues/197651) [Bug]: GPT-5.6 catalog normalization replaces an advertised 872k maximum with 372k `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#197571](https://github.com/openclaw/openclaw/issues/197571) Isolated cron run that fire-and-forget spawns (sessions_spawn expectsCompletionMessage=false) and ends with NO_REPLY fails as incomplete turn (2026.10.9) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197622](https://github.com/openclaw/openclaw/issues/197622) Update failure: managed-service-preflight (2026.9.3) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#197616](https://github.com/openclaw/openclaw/issues/197616) [Bug]: Control UI: changing thinking effort can permanently wedge the composer send queue `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#197610](https://github.com/openclaw/openclaw/issues/197610) [Performance/Bug]: configured stdio MCP servers eagerly spawn per session, causing transient RAM spikes `P2` `impact:other` 💬1
- [#197603](https://github.com/openclaw/openclaw/issues/197603) [Bug]: X Search gives no warning when xAI returns a different model `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197555](https://github.com/openclaw/openclaw/issues/197555) [Feature]: Rapid-MLX provider plugin (local Apple Silicon inference) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#197577](https://github.com/openclaw/openclaw/issues/197577) feat(state): make the agent database foreground startup budget configurable (currently hardcoded to 5s) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197578](https://github.com/openclaw/openclaw/issues/197578) fix(cron): startup catch-up launches `command` jobs before the owning agent database is admitted (released versions) `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#197558](https://github.com/openclaw/openclaw/issues/197558) [Bug]: Subagent registry sweep blocks the Gateway event loop for 16–18 s every ~76 s, and the stall grows with the number of subagent runs since start (2026.10.9) `P1` `impact:crash-loop` 💬1
- [#197552](https://github.com/openclaw/openclaw/issues/197552) [Bug]: Every isolated cron `agentTurn` gets zero tools since 2026.10.10 ("No callable tools remain … runtime toolsAllow: *"), masked by fallback as "incompatible with its recorded inference account and route" (still on 2026.11.3) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#197534](https://github.com/openclaw/openclaw/issues/197534) [Feature]: Inbox notice when personal USER.md is over the 4,000-character cap and not loaded `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#197532](https://github.com/openclaw/openclaw/issues/197532) Sign in with ChatGPT omits session affinity in OpenClaw runtime, causing repeated prompt-cache misses `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197525](https://github.com/openclaw/openclaw/issues/197525) [Bug]: Cancelled pending inputs render as a live user message bubble above the conversation after every /reset `P2` `impact:ux-friction` 💬1
- [#197517](https://github.com/openclaw/openclaw/issues/197517) Expose compaction reserve/trigger threshold as agents.defaults.compaction configuration `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197515](https://github.com/openclaw/openclaw/issues/197515) [Bug]: Codex "data/settings upgrade is unfinished" persists on 2026.11.3; merged fix #186506 is not in the release `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#197498](https://github.com/openclaw/openclaw/issues/197498) [Bug]: Published Feishu 2026.11.3 still skips captioned media blocks; merged fix #191585 is absent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#197493](https://github.com/openclaw/openclaw/issues/197493) Feature Request: Add explicit toggle to show message timestamps in Control UI chat `P3` `impact:ux-friction` 💬1
- [#197666](https://github.com/openclaw/openclaw/issues/197666) Update failure: package-swap (2026.9.8)
- [#197620](https://github.com/openclaw/openclaw/issues/197620) Withdrawn
- [#197608](https://github.com/openclaw/openclaw/issues/197608) Superseded — please disregard

#### 🔒 Closed Issues
- [#44309](https://github.com/openclaw/openclaw/issues/44309) [Feature]: Add one-way dispatch mode for A2A handoffs without reply-back ping-pong
- [#48920](https://github.com/openclaw/openclaw/issues/48920) [Bug]: Live Docs are ahead of release
- [#136311](https://github.com/openclaw/openclaw/issues/136311) memory-core: Gateway reacquires reindex lock on every start, making the index unrepairable; 19 GB of orphaned memory-reindex-* temp DBs accumulate
- [#192009](https://github.com/openclaw/openclaw/issues/192009) [Feature]: Explicitly authorize cross-provider cron fallback accounts
- [#125314](https://github.com/openclaw/openclaw/issues/125314) Codex direct message tool serializes its full manager schema on message-enabled attempts; deferred-tool guidance never asks for batching
- [#121232](https://github.com/openclaw/openclaw/issues/121232) memory-core dreaming: ranker nominates candidates the applier always rejects ("Ranked N, Promoted 0" forever)
- [#149153](https://github.com/openclaw/openclaw/issues/149153) [Bug]: WebChat renders final (non-commentary) assistant reply twice on 2026.9.4 — storage holds exactly one clean copy
- [#143640](https://github.com/openclaw/openclaw/issues/143640) memory-core: full index publish runs in a single IMMEDIATE transaction, exhausting the 5s busy timeout of concurrent agent DB writes
- [#125311](https://github.com/openclaw/openclaw/issues/125311) sessions tail should surface compact per-event metrics; harness trajectory recorder should be a revocable host capability
- [#124843](https://github.com/openclaw/openclaw/issues/124843) [Bug]: ACP control sync hard-fails a custom harness on a derived 'thinking' default (and pushes OpenClaw's own model ref) — ACP_BACKEND_UNSUPPORTED_CONTROL
- [#54409](https://github.com/openclaw/openclaw/issues/54409) [Bug]: Feishu plugin: per-chat serial queue prevents messages.queue.mode = "collect" from batching queued messages
- [#52732](https://github.com/openclaw/openclaw/issues/52732) Per-agent compaction and contextPruning overrides in agents.list
- [#142606](https://github.com/openclaw/openclaw/issues/142606) [Bug]: Dashboard HTML widget links (target="_blank") dead in native apps — host.open fails closed outside browser Control UI
- [#81892](https://github.com/openclaw/openclaw/issues/81892) [Bug]: Reasoning not delivered on Matrix channel (/reasoning on has no effect)
- [#50490](https://github.com/openclaw/openclaw/issues/50490) [Bug]: Feishu 群聊中 activation 模式切换无效，始终响应所有消息
- [#182712](https://github.com/openclaw/openclaw/issues/182712) [Feature]: Limit-aware model fallback — skip candidates on an exhausted provider account and prefer a different provider
- [#161277](https://github.com/openclaw/openclaw/issues/161277) [Feature]: Drop per-turn requester_profile block + instruction for verified requesters (token overhead, no information)
- [#125312](https://github.com/openclaw/openclaw/issues/125312) Terminal reads need cursor-paged output; automations tool needs run-completion wait and one-call inspect
- [#168101](https://github.com/openclaw/openclaw/issues/168101) [Bug] Rate-limit Retry-After ignores retry.provider.maxRetryDelayMs after a tool call (not replay-safe), holding the session lane for the full sleep
- [#197361](https://github.com/openclaw/openclaw/issues/197361) Update failure: package-update (2026.11.2)
- [#158143](https://github.com/openclaw/openclaw/issues/158143) Cron: fixed 8 concurrent isolated runs per gateway (cron.maxConcurrentRuns is dead config) starves automations when agent work loops run 1–2 h
- [#155163](https://github.com/openclaw/openclaw/issues/155163) 2026.9.5: orphaned subagent delivery pointers cannot be cleared once the task record is pruned (tasks dismiss: "Task not found"); context re-injects them for 30+ days
- [#149985](https://github.com/openclaw/openclaw/issues/149985) [Bug]: before_agent_reply claimed replies are delivered but missing from conversation history
- [#142653](https://github.com/openclaw/openclaw/issues/142653) memory-wiki bridge: false ENOENT for existing vault targets on WSL /mnt/c
- [#132767](https://github.com/openclaw/openclaw/issues/132767) Generic CLI host omits "assemble-before-prompt", so a context engine's systemPromptAddition only reaches the model one turn late (and never on single-turn sessions)
- [#39599](https://github.com/openclaw/openclaw/issues/39599) Cron allows invalid Feishu announce jobs without delivery.to, causing runtime delivery failure
- [#183597](https://github.com/openclaw/openclaw/issues/183597) [Bug]: Control UI Talk acknowledges requests but backing-agent admission waits indefinitely
- [#166039](https://github.com/openclaw/openclaw/issues/166039) [Feature]: Dashboards gallery cannot archive or delete a card and shows archived boards like active ones
- [#165865](https://github.com/openclaw/openclaw/issues/165865) Systems: reduce finished-worker clutter and identify runs by task/start time
- [#158832](https://github.com/openclaw/openclaw/issues/158832) [Feature]: doctor warns for capability-gated core tool show_widget pulled in via group:openclaw, with no config-level way to resolve it
- [#158917](https://github.com/openclaw/openclaw/issues/158917) [Bug]: memory_search intermittently times out at 30s, returns late keyword-only partial results on Gemini
- [#151852](https://github.com/openclaw/openclaw/issues/151852) [Bug]: OpenClaw won't execute commands using `gog`
- [#144395](https://github.com/openclaw/openclaw/issues/144395) [Bug]: Tapping an automation reply notification opens the correct conversation but it renders empty
- [#121230](https://github.com/openclaw/openclaw/issues/121230) [Bug]: Codex native compaction can occur before OpenClaw memory flush due to incorrect 1.05M context window resolution
- [#115034](https://github.com/openclaw/openclaw/issues/115034) [Bug]: cross-host `workdir` leaks to node → `spawn /bin/sh ENOENT`
- [#77343](https://github.com/openclaw/openclaw/issues/77343) [Bug]: openclaw-barnacle bot doesn't update labels after switching PR from draft to ready
- [#73478](https://github.com/openclaw/openclaw/issues/73478) [Bug]: openclaw gateway 没有输出图片信息
- [#183569](https://github.com/openclaw/openclaw/issues/183569) [Bug]: Isolated cron message send intermittently fails with "Cron receipt authority is unavailable" (2026.10.6)
- [#165845](https://github.com/openclaw/openclaw/issues/165845) [Bug]: PowerShell completion fixture times out after runner startup in nightly CI
- [#165459](https://github.com/openclaw/openclaw/issues/165459) [Bug]: Durable commitTurn messages carry no transcript entry ids
- [#192755](https://github.com/openclaw/openclaw/issues/192755) [Bug]: default Doctor fails retained-snapshot-changed while --all passes all 73 checks on 2026.11.5-beta.1
- [#162499](https://github.com/openclaw/openclaw/issues/162499) Matrix: gallery messages from Element X (MSC4274) reach the agent as text only, and the images are dropped silently
- [#165954](https://github.com/openclaw/openclaw/issues/165954) [Bug]: claude-cli history boundary never stored after /new on long sessions, and decays to unknown after message-tool sends
- [#131406](https://github.com/openclaw/openclaw/issues/131406) [Bug]: Native macOS app — document attachment links (assistant-media, target="_blank") unresponsive on click; server confirmed healthy
- [#196885](https://github.com/openclaw/openclaw/issues/196885) [Bug]: claude-cli manual compaction never reads the prompt cache (runs without the session's system prompt and MCP tools)
- [#197935](https://github.com/openclaw/openclaw/issues/197935) Update failure: package-permissions (2026.11.2)
- [#165649](https://github.com/openclaw/openclaw/issues/165649) fix: allocate Testboxes from available shared capacity
- [#149313](https://github.com/openclaw/openclaw/issues/149313) [Bug]: Feishu text-retry dedupe aliases distinct topic roots
- [#144959](https://github.com/openclaw/openclaw/issues/144959) tasks list --status failed counts intentional heartbeat "empty-heartbeat-file" skips as failed
- [#141795](https://github.com/openclaw/openclaw/issues/141795) [Bug]: /model <id> -s survives /new on the Telegram DM main session
- [#182395](https://github.com/openclaw/openclaw/issues/182395) Add DemonRoute as a custom provider option
- [#177964](https://github.com/openclaw/openclaw/issues/177964) [Bug] Approved CLI exec loses history admission; native auth marker sent as x-api-key
- [#126227](https://github.com/openclaw/openclaw/issues/126227) [Bug]: `toRetryError` declares a return type of `Error` but `Object.assign` lets an own `__proto__` key strip the Error identity
- [#186859](https://github.com/openclaw/openclaw/issues/186859) [Bug]: 2026.10.8 claude-cli still turns exact NO_REPLY into "CLI backend returned an empty response" on mentioned Slack thread turns (fix #170534 not in release line)
- [#182699](https://github.com/openclaw/openclaw/issues/182699) [Feature]: Opt-in zstd compression for openclaw backup archives
- [#182604](https://github.com/openclaw/openclaw/issues/182604) [Regression]: Discord ack reaction fires after session record instead of on receipt (~3s delay since 2026.10.x)
- [#182567](https://github.com/openclaw/openclaw/issues/182567) Explicit package update checks should discover a fresh release
- [#197837](https://github.com/openclaw/openclaw/issues/197837) Control UI Browser: allow operator-only access to chrome://settings
- [#165154](https://github.com/openclaw/openclaw/issues/165154) [Bug]: Cron command announcements repeat after a transient channel send failure
- [#154706](https://github.com/openclaw/openclaw/issues/154706) [Bug]: Later soft queue timeout overwrites a proven terminal completion outcome
- [#152245](https://github.com/openclaw/openclaw/issues/152245) [Bug]: gateway.publicOrigin not wired into LINE plugin outbound media (createHostedOutboundMediaStore unused)
- [#150087](https://github.com/openclaw/openclaw/issues/150087) [Bug]: A2A Agent Card advertises an http:// URL behind a TLS-terminating trusted proxy that sends X-Forwarded-Proto: https (advertisedUrl unset)
- [#149271](https://github.com/openclaw/openclaw/issues/149271) [Bug]: USER.MD instruction to agents is redundant to similar instructions in AGENTS.md
- [#144383](https://github.com/openclaw/openclaw/issues/144383) [Bug]: Review silently falls back to HEAD when the default branch cannot be resolved
- [#197691](https://github.com/openclaw/openclaw/issues/197691) Template agents are called "Assistant" in Control UI chat
- [#137486](https://github.com/openclaw/openclaw/issues/137486) [Bug]: WhatsApp group mention gating: bot's number "found" across unrelated digits, so digit-heavy messages trigger uninvited replies
- [#137215](https://github.com/openclaw/openclaw/issues/137215) [Bug]: Cron retries after timeout while the original execution can still complete
- [#184918](https://github.com/openclaw/openclaw/issues/184918) [Feature]: Skill picker hides user-invocable skills that set disable-model-invocation
- [#196321](https://github.com/openclaw/openclaw/issues/196321) [Bug]: openclaw update rootRedirect across NVM installs with systemd drop-in leaves active CLI on old version with broken plugin discovery and dead-end doctor guidance
- [#183657](https://github.com/openclaw/openclaw/issues/183657) [Bug]: Discord progress mode suppresses enabled compaction notices
- [#185430](https://github.com/openclaw/openclaw/issues/185430) [Bug]: macOS app never preloads the dashboard in remote connection mode
- [#183173](https://github.com/openclaw/openclaw/issues/183173) [Feature]: Resize oversized JPEG camera photos before Control UI upload (Android Chrome)
- [#183141](https://github.com/openclaw/openclaw/issues/183141) [Feature]: Use existing edit masks with the bundled OpenAI image provider
- [#183098](https://github.com/openclaw/openclaw/issues/183098) Feature: openclaw channels start|stop for non-destructive per-account recovery
- [#182966](https://github.com/openclaw/openclaw/issues/182966) [Feature]: Apply existing pronunciation dictionaries in ElevenLabs TTS
- [#182920](https://github.com/openclaw/openclaw/issues/182920) [Bug] `decision_evaluate` rejects a manifest-conformant call pre-dispatch (`unavailable / unsupported-input`) on 2026.10.7 — OpenRouter Jev route
- [#182869](https://github.com/openclaw/openclaw/issues/182869) [Feature]: Wrap-up reserve before timeoutSeconds, and expose the run deadline to plugins
- [#182833](https://github.com/openclaw/openclaw/issues/182833) computer tool: Gateway desktop provider can never register (commandAllowlist suppresses computerUse)
- [#182758](https://github.com/openclaw/openclaw/issues/182758) Feature: openclaw presence query (people/devices via presence.query)
- [#182718](https://github.com/openclaw/openclaw/issues/182718) Allow operators to enable <final>-tag enforcement for native-reasoning providers
- [#182691](https://github.com/openclaw/openclaw/issues/182691) before_dispatch hook context lacks the originating gateway connId
- [#182659](https://github.com/openclaw/openclaw/issues/182659) [Performance regression][2026.10.5] agent exec stalls before inference: slow database admission and ACP session reads (Ubuntu 24.04 WSL2)
- [#182654](https://github.com/openclaw/openclaw/issues/182654) Anthropic-compatible stop_reason "sensitive" becomes unknown error instead of provider refusal
- [#182642](https://github.com/openclaw/openclaw/issues/182642) Feature: `openclaw sessions processes list|stop` (expose sessions.processes.*)
- [#182640](https://github.com/openclaw/openclaw/issues/182640) Feature: `openclaw backup status` (ledger + schedules + storage locations)
- [#182614](https://github.com/openclaw/openclaw/issues/182614) Bug: openclaw pairing approve via docker compose exec times out (ETIMEDOUT) despite healthy gateway, then fails silently
- [#182568](https://github.com/openclaw/openclaw/issues/182568) Expose truthful companion app update status and capabilities in the Dashboard
- [#182559](https://github.com/openclaw/openclaw/issues/182559) [Feature]: Keyboard shortcut to jump to the next session waiting for me
- [#182558](https://github.com/openclaw/openclaw/issues/182558) Updates settings: coordinated Gateway and companion app experience
- [#182541](https://github.com/openclaw/openclaw/issues/182541) fix(diagnostics): tool error spans don't say whether a tool failed, was cancelled or timed out
- [#182414](https://github.com/openclaw/openclaw/issues/182414) [Feature]: compare chat images with a local reference by exact pixels
- [#182410](https://github.com/openclaw/openclaw/issues/182410) [Feature]: draw a freehand sketch from the Control UI composer
- [#182409](https://github.com/openclaw/openclaw/issues/182409) [Feature]: redact selected image pixels before sending in Control UI
- [#182389](https://github.com/openclaw/openclaw/issues/182389) Native Codex workers need isolated between-turn Fast routing
- [#182382](https://github.com/openclaw/openclaw/issues/182382) [Feature]: Expose documented K3.1 effort levels on the direct Moonshot route
- [#197859](https://github.com/openclaw/openclaw/issues/197859) [Feature]: Set up speech-to-text model and OpenRouter key from Settings → Talk
- [#198005](https://github.com/openclaw/openclaw/issues/198005) [Bug]: backup SQLite header probe fails on large state trees due to fixed 64 MiB buffer
- [#197816](https://github.com/openclaw/openclaw/issues/197816) [Bug]: openclaw update always fails on large state dirs — sqlite-header-probe spawnSync timeout (10s) vs unbounded path count
- [#197760](https://github.com/openclaw/openclaw/issues/197760) classicslens_lookup: short definition missing for λεγω
- [#197674](https://github.com/openclaw/openclaw/issues/197674) Exec approvals with `ask: "on-miss"` likely fail for spawned subagents on the `claude-cli` runtime: "Exec approval registration failed: … missing scope: operator.approvals"
- [#195803](https://github.com/openclaw/openclaw/issues/195803) CI: standalone metadata close check can fail after descriptor reuse
- [#129404](https://github.com/openclaw/openclaw/issues/129404) [Bug]: worktree sessions inject shared workspace bootstrap into the system prompt
- [#185547](https://github.com/openclaw/openclaw/issues/185547) [Bug]: media load failure in deliverReplies silently drops text reply (Telegram)
- [#190606](https://github.com/openclaw/openclaw/issues/190606) [Bug]: wiki_apply update_metadata replaces the whole claims/questions/contradictions/sourceIds list (silent data loss)
- [#184819](https://github.com/openclaw/openclaw/issues/184819) [Bug] Interactive reply file attachments >=5 MiB silently fail — core media store MAX_BYTES=5242880 caps channel delivery (channel/SDK never invoked)
- [#196964](https://github.com/openclaw/openclaw/issues/196964) [Bug]: Large skill reads lack budget-aware pagination and a supported continuation
- [#194873](https://github.com/openclaw/openclaw/issues/194873) [Bug]: Startup recovery inventory hits worker capacity; overload warning omits exhausted limit
- [#183904](https://github.com/openclaw/openclaw/issues/183904) [Bug]: A2A replies still complete the oldest pending task on stable 2026.10.5–2026.10.7 (#170469 not backported)
- [#183711](https://github.com/openclaw/openclaw/issues/183711) [Bug]: Outbound recovery loses its wake before an active send lease expires
- [#194032](https://github.com/openclaw/openclaw/issues/194032) [Bug]: Cron scheduler never recovers after its worker lease closes ("Shared-state worker lease is closed")
- [#183505](https://github.com/openclaw/openclaw/issues/183505) [Bug]: Control UI displays raw async exec completion events after the assistant’s final response
- [#180602](https://github.com/openclaw/openclaw/issues/180602) [Bug]: A main-session automation with no delivery config fails before the model call when the main session is used from a DM
- [#197181](https://github.com/openclaw/openclaw/issues/197181) [Bug]: 2026.11.5-beta.1 `message` tool always fails with "turn capability is no longer active" in scheduled heartbeat runs bound to the main session
- [#197168](https://github.com/openclaw/openclaw/issues/197168) [Bug]: claude-cli sessions auto-pinned to an expired token profile keep failing with "login reached its time limit" while the CLI login is valid
- [#197939](https://github.com/openclaw/openclaw/issues/197939) zh-TW utility-only setup note uses inconsistent terminology
- [#198046](https://github.com/openclaw/openclaw/issues/198046) [Bug]: Failed Telegram final photo send blocks document fallback with delivery_ambiguous and ends without final summary
- [#198041](https://github.com/openclaw/openclaw/issues/198041) claude-cli: final assistant reply stored twice (imported CLI entry + live-run entry); iOS app shows duplicates
- [#197944](https://github.com/openclaw/openclaw/issues/197944) Markdown-table width regression on main after #197823
- [#196136](https://github.com/openclaw/openclaw/issues/196136) Control UI: make personal, shared, and per-agent GitHub accounts clear in Settings
- [#197982](https://github.com/openclaw/openclaw/issues/197982) Control UI desktop "Move to group" search finds no group when the name and the query use different Unicode forms of the same accented letter
- [#195802](https://github.com/openclaw/openclaw/issues/195802) Scheduled supervision stops running, leaving ongoing work unattended
- [#197824](https://github.com/openclaw/openclaw/issues/197824) Discord slash command reply loses its text when an attachment fails to load
- [#197952](https://github.com/openclaw/openclaw/issues/197952) [Bug]: Slack Socket Mode never reconnects after a failed WSS URL refresh; the reconnect observer misses @slack/socket-mode 3.x start failures and status stays "connected"
- [#197905](https://github.com/openclaw/openclaw/issues/197905) [Bug]: Automations fail to save with no agent selected on multi-agent gateways
- [#197968](https://github.com/openclaw/openclaw/issues/197968) openclaw status ignores Ctrl-C during the Gateway probe when the Gateway does not answer: forced kill after 2 s, or about a minute of connections
- [#197895](https://github.com/openclaw/openclaw/issues/197895) [Feature]: Search Google from the Browser panel address bar and explain unsupported URLs
- [#197463](https://github.com/openclaw/openclaw/issues/197463) [Feature]: Optional inline command trail in the Control UI
- [#197320](https://github.com/openclaw/openclaw/issues/197320) [Bug]: `openclaw update` from 2026.11.3 to main fails: PostgreSQL Workboard install refuses an engine switch, SQLite Workboard install fails the second Doctor ("expected schema 41, found 0")
- [#196788](https://github.com/openclaw/openclaw/issues/196788) [Bug]: Template Add fails after review on multi-channel hosts when an automation announces to the last channel
- [#195577](https://github.com/openclaw/openclaw/issues/195577) Onboarding rejects Enter on “Skip for now” in the skills step
- [#195576](https://github.com/openclaw/openclaw/issues/195576) Mac QuickStart finishes without an agent model after accepting Apple Foundation Models
- [#197888](https://github.com/openclaw/openclaw/issues/197888) Subagent completion handoff applies resetByType daily policy (ignoring resetByChannel.webchat) to a spawned dashboard session, rolling it to a new sessionId mid-turn: reply dropped as session-rebound, next turn starts with no history, nothing shown in UI (2026.9.7)
- [#197857](https://github.com/openclaw/openclaw/issues/197857) Control UI: “Discovering more models” makes a saved default model look stuck
- [#192609](https://github.com/openclaw/openclaw/issues/192609) Reduce duplicated benchmark calculations and isolate runtime decision boundaries
- [#197861](https://github.com/openclaw/openclaw/issues/197861) [Bug]: Second message send in the same batch is dropped as "delivery_ambiguous / do not retry" although it was never sent
- [#197789](https://github.com/openclaw/openclaw/issues/197789) [Bug]: one-shot automation details omit configured seconds and milliseconds
- [#197828](https://github.com/openclaw/openclaw/issues/197828) claude-cli: long subagent runs fail at the 8 MiB stream-json budget after all work is done — make it configurable or degrade instead of failing
- [#197827](https://github.com/openclaw/openclaw/issues/197827) claude-cli: child-completion turn changes the main chat's system prompt, then the next normal turn changes it back (`system_changed` cache misses)
- [#197778](https://github.com/openclaw/openclaw/issues/197778) PostgreSQL qualification: remote acceptance before local receipt
- [#197454](https://github.com/openclaw/openclaw/issues/197454) [Bug]: a delayed question answer can resolve a recreated question with the same ID
- [#197787](https://github.com/openclaw/openclaw/issues/197787) [Bug]: Gateway restart while a run is parked in sessions_yield leaves the session permanently failing SESSION_WORK_START_CHANGED (2026.10.7)
- [#197766](https://github.com/openclaw/openclaw/issues/197766) [Bug]: image/music generation completion always falls back off claude-cli ("CLI runtimes cannot enforce restart-safe tool restrictions")
- [#197650](https://github.com/openclaw/openclaw/issues/197650) [Bug]: Claude CLI shows a native final after a confirmed final message-tool reply in WebChat
- [#195740](https://github.com/openclaw/openclaw/issues/195740) Android: Voice settings retains unsaved wake-word draft across gateway switch when word lists match
- [#197761](https://github.com/openclaw/openclaw/issues/197761) Update failure: managed-service-preflight (2026.11.1)
- [#197746](https://github.com/openclaw/openclaw/issues/197746) [Bug]:
- [#197685](https://github.com/openclaw/openclaw/issues/197685) [Bug]: backup verify and restore select the wrong archive through a symlink parent
- [#197141](https://github.com/openclaw/openclaw/issues/197141) [Docs Bug]: Claude CLI re-login troubleshooting still asks for a Gateway restart
- [#197591](https://github.com/openclaw/openclaw/issues/197591) [Bug] config hot-reload aborts in-flight cron runs and records a misleading "Gateway shutting down." error
- [#197619](https://github.com/openclaw/openclaw/issues/197619) Qualify populated PostgreSQL startup webhook decisions
- [#197169](https://github.com/openclaw/openclaw/issues/197169) [Bug]: Claude OAuth tokens stored as api-key profiles make every claude-cli turn fail with "Invalid API key"
- [#197665](https://github.com/openclaw/openclaw/issues/197665) [Bug]: Gateway runs the `stale-lease-full` agent-DB integrity scan synchronously on its main thread; 6.8 GB DB froze the whole Gateway for 390 s (2026.11.3)
- [#197664](https://github.com/openclaw/openclaw/issues/197664) Restart-recovery settlement refused during gateway stop: admission released/DB closed before settlement
- [#197442](https://github.com/openclaw/openclaw/issues/197442) Allow `sessions_spawn` to target a named paired device
- [#197571](https://github.com/openclaw/openclaw/issues/197571) Isolated cron run that fire-and-forget spawns (sessions_spawn expectsCompletionMessage=false) and ends with NO_REPLY fails as incomplete turn (2026.10.9)
- [#197426](https://github.com/openclaw/openclaw/issues/197426) Share the plugin cohort recovery owner-test fixture
- [#197610](https://github.com/openclaw/openclaw/issues/197610) [Performance/Bug]: configured stdio MCP servers eagerly spawn per session, causing transient RAM spikes
- [#195386](https://github.com/openclaw/openclaw/issues/195386) [Bug]: Tables overflow chat bubbles
- [#195899](https://github.com/openclaw/openclaw/issues/195899) [Bug]: ACP agent replies are recorded in the session but do not appear in the bound Telegram topic
- [#197558](https://github.com/openclaw/openclaw/issues/197558) [Bug]: Subagent registry sweep blocks the Gateway event loop for 16–18 s every ~76 s, and the stall grows with the number of subagent runs since start (2026.10.9)
- [#197166](https://github.com/openclaw/openclaw/issues/197166) [Bug]: claude-cli turns run under Claude Code's default system prompt and identity because OpenClaw's prompt is sent as appendSystemPrompt
- [#196190](https://github.com/openclaw/openclaw/issues/196190) [Bug]: Chat says "Interrupted" even though the task is still running in the background
- [#197525](https://github.com/openclaw/openclaw/issues/197525) [Bug]: Cancelled pending inputs render as a live user message bubble above the conversation after every /reset
- [#197473](https://github.com/openclaw/openclaw/issues/197473) [Bug]: Escaped backtick makes the TTS stream cleaner retain audio-only text and directive markers
- [#197493](https://github.com/openclaw/openclaw/issues/197493) Feature Request: Add explicit toggle to show message timestamps in Control UI chat
- [#197666](https://github.com/openclaw/openclaw/issues/197666) Update failure: package-swap (2026.9.8)
- [#197620](https://github.com/openclaw/openclaw/issues/197620) Withdrawn
- [#197608](https://github.com/openclaw/openclaw/issues/197608) Superseded — please disregard

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 262,997 · **Open issues:** 53,996 · **Last push:** <1h ago

On November 13, 2026, there were no new releases for Hermes Agent, but significant developments included the merging of PR #154488, which addressed an issue by ensuring the sudo password lines are sent correctly in the managed-modal request's stdin field. Among new issues, #154701 stands out, reporting a regression that drives the GPU to 100% in unpaced bursts when streaming into a minimized or hidden window on Linux with AMD hardware. Other notable issues include #154537, which highlights a bug where session tiles do not respect the specified maximum recording seconds for voice dictation, and #154628, detailing a problem with the Ink TUI losing streamed reasoning when display.show_reasoning is unset. As a whole, the day featured routine maintenance characterized by a mix of documentation and bug-related entries, punctuated by these key issues.

#### ✅ Merged PRs
- [#154488](https://github.com/NousResearch/hermes-agent/pull/154488) fix(managed-modal): send sudo password lines on the request's stdin field

#### 🐛 New Issues
- [#154701](https://github.com/NousResearch/hermes-agent/issues/154701) [Bug][Linux/AMD]: streaming into a minimized/hidden window drives the GPU to 100% in unpaced bursts (0↔100% sawtooth) — regression after 1c75623ca1 `type/perf` `P2` `comp/desktop` `area/streaming` 💬5
- [#154352](https://github.com/NousResearch/hermes-agent/issues/154352) Custom (OpenAI-compatible) providers: declare per-model reasoning-effort caps, validate in the composer pill `type/feature` `comp/agent` `area/config` `P2` 💬3
- [#154275](https://github.com/NousResearch/hermes-agent/issues/154275) The patchelf patch fails with patchelf-0.15.2 (which is currently on nixpkgs-unstable) `type/bug` `tool/file` `P2` `area/install-update` 💬2
- [#154628](https://github.com/NousResearch/hermes-agent/issues/154628) [Bug]: Ink TUI drops streamed reasoning when display.show_reasoning is unset — client hydration coerces the absent key to false while the server gate defaults it on `type/bug` `comp/gateway` `area/config` `P2` 💬2
- [#154612](https://github.com/NousResearch/hermes-agent/issues/154612) Bot Mode relay: deliveries into a Hermes Cloud agent are claimed by the Desktop app but never delivered (no error either side) `type/bug` `P3` `comp/desktop` `desktop/settings` 💬2
- [#154707](https://github.com/NousResearch/hermes-agent/issues/154707) [Bug]: Anthropic 401 help calls a key_cmd credential "Microsoft Entra ID" and suggests `az login` (missed by the e7a81e75 label fix) `type/bug` `comp/agent` `provider/anthropic` `area/auth` 💬1
- [#154715](https://github.com/NousResearch/hermes-agent/issues/154715) [Bug]: Dashboard Chat blames missing Node.js when the real cause is a missing TUI bundle (any SystemExit is misclassified) `type/bug` `comp/cli` `P2` `area/install-update` 💬1
- [#154716](https://github.com/NousResearch/hermes-agent/issues/154716) [Bug]: tui-notif-poller-<sid> threads leak for sessions without graceful termination `type/perf` `comp/gateway` `P2` `area/sessions` 💬1
- [#154718](https://github.com/NousResearch/hermes-agent/issues/154718) Documentation doesn't cover diffences `type/docs` `P3` 💬1
- [#154537](https://github.com/NousResearch/hermes-agent/issues/154537) [Bug]: Session tiles ignore voice.max_recording_seconds — dictation always stops at 120 s `type/bug` `tool/tts` `area/config` `P2` 💬1
- [#154691](https://github.com/NousResearch/hermes-agent/issues/154691) [Bug]: Desktop Files pane — double-clicking a file in a WSL (SSH) profile opens Preview unavailable with a raw 404 JSON body `type/bug` `tool/file` `P3` `comp/desktop` 💬1
- [#154609](https://github.com/NousResearch/hermes-agent/issues/154609) multiplex: env_loader secret-source caches use str(Path.resolve()) keys, not hermes_home_key() `type/security` `comp/cli` `tool/mcp` `P3` 💬1
- [#154516](https://github.com/NousResearch/hermes-agent/issues/154516) [Bug]: Desktop Read aloud beeps with xAI TTS (24kHz PCM stream not resampled to device rate) `type/bug` `comp/tools` `tool/file` `tool/tts` 💬1
- [#154625](https://github.com/NousResearch/hermes-agent/issues/154625) [Bug]: codex_responses silently drops web_search_call / web_fetch_call output items — no search progress is shown `type/bug` `comp/agent` `tool/web` `P2` 💬1
- [#154650](https://github.com/NousResearch/hermes-agent/issues/154650) [Bug] iOS Device Access reminder request stays pending while backgrounded, completes after foregrounding Hermes `type/bug` `comp/gateway` `comp/plugins` `P2` 💬1
- [#154320](https://github.com/NousResearch/hermes-agent/issues/154320) [Bug]: ACP: a failed turn returns `admitted_turn_failed` with no reason, and the CLI-oriented failure summary is streamed to the client as assistant text `type/bug` `comp/gateway` `comp/acp` `P2` 💬1
- [#154732](https://github.com/NousResearch/hermes-agent/issues/154732) Desktop: a non-active profile's gateway.ready wipes the active skin's customCSS (built-in-named user skins) `type/bug` `P2` `comp/desktop` `area/profiles` 💬1
- [#154794](https://github.com/NousResearch/hermes-agent/issues/154794) [Bug]: keyless `custom` provider sends placeholder `no-key-required` and 401s on every run — no credential guard at selection, cron keeps dispatching `type/bug` `comp/cli` `area/auth` `area/config`
- [#154793](https://github.com/NousResearch/hermes-agent/issues/154793) Kanban dispatcher records every transport outage as rate_limited ("quota wall") — incl. proxy 5xx wrapping connection errors `type/bug` `comp/cli` `P2`
- [#154787](https://github.com/NousResearch/hermes-agent/issues/154787) [Bug]: Desktop on a remote `hermes serve`: follow-up fails with "Legacy submission acknowledgement is unknown" after a session-not-found or busy refusal `type/bug` `P2` `comp/desktop` `area/sessions`
- [#154790](https://github.com/NousResearch/hermes-agent/issues/154790) [Bug]: Scaffold split depends on the process-local registry; a restart or eviction rewrites a sent turn under preserved thinking `type/bug` `comp/agent` `P2` `area/sessions`
- [#154786](https://github.com/NousResearch/hermes-agent/issues/154786) Gateway platform sessions don't resolve `model_aliases` for `model.default` — raw alias sent to the default provider (HTTP 400) `type/bug` `comp/gateway` `area/config` `P2`
- [#154774](https://github.com/NousResearch/hermes-agent/issues/154774) [Bug][memory/settings] Memory provider status conflates PM dependency-environment state with provider availability `type/bug` `comp/cli` `tool/memory` `P2`
- [#154784](https://github.com/NousResearch/hermes-agent/issues/154784) memory: recurring patch old_text mismatches block consolidation (§ separators, heading markers, transcription duplicates) `type/bug` `comp/agent` `comp/tools` `tool/file`
- [#154782](https://github.com/NousResearch/hermes-agent/issues/154782) install.sh: completion stage hard-fails on slow machines when web-UI (vite) build hits the SIGKILL watchdog, after 'Install complete' `type/bug` `comp/cli` `P2` `area/install-update`
- [#154768](https://github.com/NousResearch/hermes-agent/issues/154768) [Bug]: Weixin adapter 120-column hard-wrap splits inline code and prose paragraphs, and multi-backtick wrapped blocks render out of order in WeChat `type/bug` `platform/wecom` `P2`
- [#154763](https://github.com/NousResearch/hermes-agent/issues/154763) Desktop: a mid-turn message is re-injected into the live request multiple times (steer re-delivery; transcript stays clean) `type/perf` `comp/agent` `P2`

#### 🔒 Closed Issues
- [#151735](https://github.com/NousResearch/hermes-agent/issues/151735) Plain-text "yes" resolves a pending approval without the slash-command access check
- [#143037](https://github.com/NousResearch/hermes-agent/issues/143037) Desktop: running cron sessions are invisible in Sessions and the Bot roster (only reachable via Schedules → run history)
- [#142877](https://github.com/NousResearch/hermes-agent/issues/142877) Desktop SSH connection: pasted images never reach the backend (image not found)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 96,846 · **Open issues:** 10,254 · **Last push:** <1h ago

On November 13, 2026, no new versions of vLLM were released; however, several significant updates were merged, including enhancements for the Rust Frontend aimed at improving streaming capabilities and handling engine disconnections more gracefully. Notable bug fixes addressed critical operational issues, such as ensuring that cuBLAS workspaces are cleared during in-process shutdowns and preventing crashes related to handling LoRA adapters in certain scenarios. Among the new issues, a regression linked to the `--data-parallel-start-rank` parameter was identified, causing crashes under specific conditions. These developments reflect ongoing efforts to enhance stability and performance within the vLLM ecosystem.

#### ✅ Merged PRs
- [#65840](https://github.com/vllm-project/vllm/pull/65840) [XPU][Kimi-K3] Run KDA metadata tests on XPU
- [#65132](https://github.com/vllm-project/vllm/pull/65132) [ROCm][Perf] Build AITER MLA full-graph decode metadata in one kernel
- [#66530](https://github.com/vllm-project/vllm/pull/66530) [Rust Frontend] Stream Kimi K3 tool-call arguments
- [#66222](https://github.com/vllm-project/vllm/pull/66222) [Rust Frontend] Match response_template regexes with PCRE2 in the hf parser
- [#67187](https://github.com/vllm-project/vllm/pull/67187) [Rust Frontend] Fail in-flight requests when an engine disconnects
- [#66593](https://github.com/vllm-project/vllm/pull/66593) [Spec Decode][FLy][ROCm] Normalize the top-k entropy gate and allow a FLy cost overlay with synthetic acceptance
- [#67256](https://github.com/vllm-project/vllm/pull/67256) [Bugfix][Rust Frontend] Resolve auxiliary frames of add requests in the mock engine
- [#67331](https://github.com/vllm-project/vllm/pull/67331) [Bugfix] Shut down the executor when EngineCore fails to start
- [#67333](https://github.com/vllm-project/vllm/pull/67333) [Bugfix][KV Connector] Stop forwarding shutdown() to LMCache until it no longer aborts
- [#66982](https://github.com/vllm-project/vllm/pull/66982) [XPU][Test] Skip Unlimited-OCR-2 tests on non-CUDA platforms
- [#67148](https://github.com/vllm-project/vllm/pull/67148) [XPU][CI]Skip seed instability issue in Intel GPU CI
- [#67272](https://github.com/vllm-project/vllm/pull/67272) [Recipe] MiniMax-M3.1-Flash: MI355X Agent
- [#65461](https://github.com/vllm-project/vllm/pull/65461) [ROCm][Perf][DSv4.1] Mono: merge K2(l) and K1(l + 1) into one launch at TP8
- [#64531](https://github.com/vllm-project/vllm/pull/64531) [Perf] Zero bubble draft tokens handoff for structured outputs
- [#65998](https://github.com/vllm-project/vllm/pull/65998) [ROCm] Revert #59420: pass the (B, next_n) context lengths to AITER as is
- [#67279](https://github.com/vllm-project/vllm/pull/67279) [Bugfix] Clear cuBLAS workspaces at in-process shutdown to free the graph pool
- [#64286](https://github.com/vllm-project/vllm/pull/64286) [KV Offload] Add a store trigger and isolated store trigger handlers
- [#65607](https://github.com/vllm-project/vllm/pull/65607) [Perf][HiSparse] Batch the coordinator's per-page residency bookkeeping
- [#67068](https://github.com/vllm-project/vllm/pull/67068) [Bugfix][Elastic EP] Recreate stat loggers before starting new engines
- [#66830](https://github.com/vllm-project/vllm/pull/66830) [CI] Enroll 7 more jobs in automatic sharding
- [#66910](https://github.com/vllm-project/vllm/pull/66910) [CI] Run the NIXL PD tests as pytest and enroll every Disaggregated step
- [#67322](https://github.com/vllm-project/vllm/pull/67322) [Recipe] Use the inkling-2-small image for Inkling 2 Small
- [#66063](https://github.com/vllm-project/vllm/pull/66063) [Spec Decode][PP] Run draft models as a single pipeline stage
- [#62964](https://github.com/vllm-project/vllm/pull/62964) [Bugfix][Spec Decode] Keep FlashInfer CUDA graphs for drafters with their own head count
- [#61243](https://github.com/vllm-project/vllm/pull/61243) [HiSparse] GLM-5.3-Flash support
- [#67319](https://github.com/vllm-project/vllm/pull/67319) [Recipe] Add Inkling 2 Small
- [#67042](https://github.com/vllm-project/vllm/pull/67042) [Dependency] Upgrade FlashInfer to 0.7.4
- [#64331](https://github.com/vllm-project/vllm/pull/64331) [ROCm][RDNA][Perf] Bump triton_kernels to ROCm 3.8.x with the RDNA MXFP4 configs
- [#64055](https://github.com/vllm-project/vllm/pull/64055) [ROCm][RDNA][Perf][MoE] Use w2 scatter + topk sum for the tk 3.8 OAI MoE combine on RDNA
- [#65149](https://github.com/vllm-project/vllm/pull/65149) [Quantization][Fusion] Extend manual activation fusion to more NVFP4 linear backends
- [#67212](https://github.com/vllm-project/vllm/pull/67212) [Bugfix] build with param.dtype when one is not specified
- [#67056](https://github.com/vllm-project/vllm/pull/67056) [ROCm][DI-CI] Enable Kimi K3 in AMD DI CI pipeline for nightly runs
- [#67201](https://github.com/vllm-project/vllm/pull/67201) [Bugfix] Reset the global CUDA graph pool on engine shutdown
- [#50449](https://github.com/vllm-project/vllm/pull/50449) [ROCm] Unify ViT FlashAttention backend selection
- [#67226](https://github.com/vllm-project/vllm/pull/67226) [ROCm][RDNA] ROCM_RDNA_ATTN: work around an LLVM VGPR regression that spills decode kernels on gfx11
- [#67263](https://github.com/vllm-project/vllm/pull/67263) [CI][Quantization] Skip ModelOpt INT8_PB_WO routing test on ROCm

#### 🐛 New Issues
- [#67264](https://github.com/vllm-project/vllm/issues/67264) [Bug]: BLIP-2 tower/connector LoRA rejects a non-divisible encoder budget `bug` 💬3
- [#67330](https://github.com/vllm-project/vllm/issues/67330) [RFC]: Kernel-owned LoRA fusion for quantized linear layers, starting with gfx1151 W4A16 `rocm` `RFC` `quantization` 💬2
- [#67183](https://github.com/vllm-project/vllm/issues/67183) [Bug]: Regression from #47692 - `--data-parallel-start-rank 0` with `data_parallel_size == 1` crashes at startup ("data_parallel_external_lb can only be set when data_parallel_size > 1") 💬2
- [#67259](https://github.com/vllm-project/vllm/issues/67259) [Bug]: v0.32.0 GPU image ships incompatible OpenTelemetry dependencies `bug` 💬2
- [#67176](https://github.com/vllm-project/vllm/issues/67176) [RFC]: UltraQuant: the scale constant c = 0.156 is MSE-optimal before the UE8M0 snap, not after; c ≈ 0.2 cuts KV-quantization KL by 40–56% at no cost `quantization` 💬2
- [#67162](https://github.com/vllm-project/vllm/issues/67162) [Bug]: Gemma 4 placeholder count ignores `do_resize=False` `bug` 💬2
- [#67313](https://github.com/vllm-project/vllm/issues/67313) [Bug]: Tower/connector LoRA crashes or applies the wrong adapter when one step runs the MM encoder more than once 💬1
- [#67360](https://github.com/vllm-project/vllm/issues/67360) [Bug]: MiniCPM-V 4.7 canvas M-RoPE silently falls back to sequential positions when user text contains `</image>` (or `<image>`/`<slice>`/`</slice>`) before an image `rocm` 💬1
- [#67287](https://github.com/vllm-project/vllm/issues/67287) [Feature]: [KV Offload] Keep a request’s stored prefix when the request is larger than the CPU tier 💬1
- [#67275](https://github.com/vllm-project/vllm/issues/67275) [RFC][Performance] Generic batch-size-aware matmul configs for untuned batch-invariant shapes `batch-invariance` 💬1
- [#67298](https://github.com/vllm-project/vllm/issues/67298) [Bug]: `vllm bench forward` hangs intermittently on ROCm `bug` `rocm` 💬1
- [#67292](https://github.com/vllm-project/vllm/issues/67292) [Bug]: With chunked prefill off and async scheduling, a multimodal request deferred for encoder limits can be overtaken by later image requests without limit `bug` `multi-modality` 💬1
- [#67227](https://github.com/vllm-project/vllm/issues/67227) [Performance]: Mamba1 packed prefill sizes the selective scan launch from the total packed length, so many short prompts prefill about 10x slower `performance` 💬1
- [#67261](https://github.com/vllm-project/vllm/issues/67261) [RFC]: Clarify AMD target and architecture semantics across vLLM `rocm` `quantization` 💬1
- [#67220](https://github.com/vllm-project/vllm/issues/67220) [Tracking][Spec Decode] Context Aware Sparse LM Head Tracker `quantization` 💬1
- [#67197](https://github.com/vllm-project/vllm/issues/67197) [RFC]: Resource bound for the `/tokenize` endpoint 💬1
- [#67177](https://github.com/vllm-project/vllm/issues/67177) [Bug]: EngineCore fails to start on SM120 (Blackwell) due to unsupported PTX toolchain in FlashAttention `bug` 💬1
- [#67170](https://github.com/vllm-project/vllm/issues/67170) [Feature]: `feature request` 💬1
- [#67169](https://github.com/vllm-project/vllm/issues/67169) [ROCm][AMD] MiniMax-M3.1-Flash gfx950 / MI355X Performance Optimization (vLLM) `rocm` `minimax` 💬1
- [#67161](https://github.com/vllm-project/vllm/issues/67161) [Bug]: A text-only Gemma 4 class keeps `is_mm_prefix_lm` true when its text config says `use_bidirectional_attention: "vision"` `bug` 💬1
- [#67357](https://github.com/vllm-project/vllm/issues/67357) [RFC]: Decoder Append-Prefill for Multi-Turn Workloads in P/D Disaggregated Serving `RFC` `kv-connector`
- [#67307](https://github.com/vllm-project/vllm/issues/67307) [CI Failure]: NVIDIA nightly failures (build 102057, main 6d3eba0272) `ci-failure` `nvidia` `kimi`
- [#67334](https://github.com/vllm-project/vllm/issues/67334) [RFC]: Bidirectional attention spans, set per request `RFC`
- [#67290](https://github.com/vllm-project/vllm/issues/67290) [Feature]: Quantize MoE experts one at a time during loading for every online quantization scheme `quantization`
- [#67250](https://github.com/vllm-project/vllm/issues/67250) [Feature]: Honor request priority (`X-Vllm-Priority` / `priority`) on `/v1/audio/transcriptions` and `/v1/audio/translations`
- [#67247](https://github.com/vllm-project/vllm/issues/67247) [Bug]: Streaming `/inference/v1/generate` ignores `--enable-force-include-usage`: no usage without `stream_options` `bug`
- [#67231](https://github.com/vllm-project/vllm/issues/67231) [Feature]: Support Hugging Face Tokenizers v1 `feature request`
- [#67217](https://github.com/vllm-project/vllm/issues/67217) [RFC] Reuse vLLM vocab-parallel TopK for DFlash2 on Ascend
- [#67207](https://github.com/vllm-project/vllm/issues/67207) [RFC]: add chunked push for NixlPushConnector `kimi`
- [#67204](https://github.com/vllm-project/vllm/issues/67204) [Feature]: Add a workload-aware E+PD sizing example
- [#67192](https://github.com/vllm-project/vllm/issues/67192) [Bug]: top_k_per_row_prefill` (DSA sparse-attention indexer top-k) returns the selected indices in a non-deterministic order `bug` `batch-invariance`
- [#67157](https://github.com/vllm-project/vllm/issues/67157) [Bug]: Qwen3-0.6B with --tool-call-parser qwen3_xml returns an empty message (Python) / leaked text (Rust frontend) `tool-calling` `rust`

#### 🔒 Closed Issues
- [#45268](https://github.com/vllm-project/vllm/issues/45268) [Bug]: EngineDeadError after first L1 sleep/wake cycle with --kv-offloading-backend native + --enable-sleep-mode (v0.22.1)
- [#53488](https://github.com/vllm-project/vllm/issues/53488) [Bug]: `prompt_logprobs` silently corrupted for some requests when MTP speculative decoding is enabled (Qwen3.5-family, chunked prefill; two builds, two checkpoints)
- [#47846](https://github.com/vllm-project/vllm/issues/47846) [Feature]: model runner v2 support prefill context parallelism & cp8+tp8=worldsize8
- [#42186](https://github.com/vllm-project/vllm/issues/42186) [Bug][flashinfer 0.6.8]: worker hang on Qwen3.5-397B-A17B-NVFP4 EP=8 (B200 SM100) - bisected to flashinfer-python 0.6.7 → 0.6.8.post1
- [#45647](https://github.com/vllm-project/vllm/issues/45647) [Bug]: nvidia/Kimi-K2.6-nvfp4 & v0.23.0 cannot find huggingface downloader file
- [#46221](https://github.com/vllm-project/vllm/issues/46221) [Feature]: Add a 2-bit KV-cache quantisation backend from Together AI
- [#47749](https://github.com/vllm-project/vllm/issues/47749) [Bug]: RTX 5090 / SM120 ModelOpt mixed NVFP4 checkpoint falls back to Marlin W4A16 path and warns no native FP4 support
- [#43765](https://github.com/vllm-project/vllm/issues/43765) [Feature]: Support PD disaggregation / KV transfer for hybrid SSM/GDN models such as Qwen3.5-397B-A17B-W8A8
- [#43885](https://github.com/vllm-project/vllm/issues/43885) [Bug]: Qwen3.6-27B-FP8 on GB10: get_output() spin-loop on stuck CUDA stream during prefill burst (run<6, KV<5%)
- [#57224](https://github.com/vllm-project/vllm/issues/57224) [Bug]: Silent garbage output on GPUs in Confidential Computing mode: V2 model runner's UVA views of pinned host memory are stale under CC (works with VLLM_USE_V2_MODEL_RUNNER=0)
- [#44486](https://github.com/vllm-project/vllm/issues/44486) [Bug]: vllm process crashed because of dp coordinator receives unexpected message which send by safety scan software
- [#45405](https://github.com/vllm-project/vllm/issues/45405) [RFC]: Forward ReqContext from CPUOffloadingManager to CachePolicy for session-aware KV eviction
- [#46613](https://github.com/vllm-project/vllm/issues/46613) [RFC]: KVarN: a calibration-free, variance-normalized sub-8-bit KV-cache quantization backend
- [#47430](https://github.com/vllm-project/vllm/issues/47430) [Bug]: vllm==0.23.0 Qwen3.6-27B, system prompt same in multi requests, But prefix cache failure.
- [#48229](https://github.com/vllm-project/vllm/issues/48229) V1 multiprocess engine: sporadic 0.7-2s frozen engine step once per generate batch (absent with VLLM_ENABLE_V1_MULTIPROCESSING=0)
- [#42390](https://github.com/vllm-project/vllm/issues/42390) [Bug]: Gemma-4 MoE Initialization Hang and Segfault
- [#46985](https://github.com/vllm-project/vllm/issues/46985) [Bug]: Why does kv-cache-dtype=fp8 OOM more easily than bf16/fp16 on long-context GLM-5.1-AWQ runs?
- [#47264](https://github.com/vllm-project/vllm/issues/47264) [RFC]: Qwen3-ASR pseudo-streaming can repeat or miss segments
- [#45847](https://github.com/vllm-project/vllm/issues/45847) [Bug]: Kimi-K2.6 VIT attention dispatch asserts on SM120 in flash_fwd_sm100
- [#46631](https://github.com/vllm-project/vllm/issues/46631) [Bug]: Multimodal image inputs fail on /v1/responses while identical inputs work on /v1/chat/completions
- [#46641](https://github.com/vllm-project/vllm/issues/46641) [Bug]: gpt-oss-20b NVFP4 inference is broken
- [#42659](https://github.com/vllm-project/vllm/issues/42659) [RFC]: Per-Layer Parallelism Policy
- [#42821](https://github.com/vllm-project/vllm/issues/42821) [Bug]: `model.load_weights` silently corrupts MoE forward on second call
- [#45317](https://github.com/vllm-project/vllm/issues/45317) [Feature/Gap] DSA models (GLM-5.1 / DeepSeek-V3.2-family, use_sparse=True) cannot select any attention backend on SM121 (GB10 / DGX Spark)
- [#47600](https://github.com/vllm-project/vllm/issues/47600) [Bug]: ValueError: The supplied chat template string (examples/tool_chat_template_gemma4.jinja) appears path-like
- [#44290](https://github.com/vllm-project/vllm/issues/44290) [Feature]: Improving NVFP4 Quantization via Fast and Accurate Sweep on FP8 Block Scale
- [#45293](https://github.com/vllm-project/vllm/issues/45293) [Bug]:GGUF model crashes API on v0.22 with T4 GPU (worked on v0.21)
- [#47582](https://github.com/vllm-project/vllm/issues/47582) [RFC]: Opt-in incremental prompt encoding for multi-turn chat
- [#47620](https://github.com/vllm-project/vllm/issues/47620) [Bug]: collect_env.py crashes on Windows/macOS and pip-less uv environments
- [#47626](https://github.com/vllm-project/vllm/issues/47626) [Bug]: RuntimeError: scheduler_metadata must have shape (metadata_size) when using dspark speculative decoding with FP8 quantization on H20-3e
- [#48283](https://github.com/vllm-project/vllm/issues/48283) [Feature]: Folding per-platform default arguments into the vLLM engine
- [#59176](https://github.com/vllm-project/vllm/issues/59176) [Bug]: GLM-5.3-Flash with HiSparse has no compatible KV cache layout (LBHNC vs BLHNC)
- [#54761](https://github.com/vllm-project/vllm/issues/54761) [Bug]: On ROCm, DCP and non-FP8 KV dtypes are unreachable, but the errors suggest fixes that don't exist there
- [#44882](https://github.com/vllm-project/vllm/issues/44882) [Feature]: Avoid duplicate KV block allocation for shared external-prefix hits
- [#47651](https://github.com/vllm-project/vllm/issues/47651) [Bug]: `vllm bench sweep serve_workload` crashes with "non-positive request rate" when max throughput < 1 req/s (integer floor/ceil of rate anchors)
- [#48207](https://github.com/vllm-project/vllm/issues/48207) [Bug]: Analysis for an Automated Request Validation and Normalization Module at the Upstream of vLLM (Hard Interception) to Fundamentally Solve DSML Leakage, Garbled Output, and Empty Responses
- [#48208](https://github.com/vllm-project/vllm/issues/48208) [Feature]: Proposal for an Automated Request Validation and Normalization Module at the Upstream of vLLM (Hard Interception) to Fundamentally Solve DSML Leakage, Garbled Output, and Empty Responses
- [#58931](https://github.com/vllm-project/vllm/issues/58931) [Bug]: MooncakeStoreConnector crashes EngineCore when a request is preempted by `reset_prefix_cache(reset_running_requests=True)` and re-admitted in the next step
- [#64275](https://github.com/vllm-project/vllm/issues/64275) [Bug]: Adaptive-verification cost profiling OOMs at startup after KV-cache allocation (DeepSeek-V4.1-Flash-1017, ROCm)
- [#51205](https://github.com/vllm-project/vllm/issues/51205) [Bug]: Inkling-Small-NVFP4 wont start on 2 H200 GPUs.
- [#67121](https://github.com/vllm-project/vllm/issues/67121) [CI Failure]: V1 KV Connectors Shard 2/4 - test_lmcache_connector.py::test_engine_shutdown_stops_lmcache_threads
- [#55581](https://github.com/vllm-project/vllm/issues/55581) [Bug]: FlashInfer get_cudagraph_support() divides the *target* model's head count by the *draft* group's num_kv_heads, so spec-decode loses all CUDA graphs when the two models' head ratios differ (while the builder picks XQA and runs)
- [#67007](https://github.com/vllm-project/vllm/issues/67007) [Bug]: Scale-out `/render` endpoints and `/inference/v1/generate` ignore the `X-Vllm-Priority` header
- [#66990](https://github.com/vllm-project/vllm/issues/66990) [Feature]: EC events: publish encoder cache presence and eviction from the EC connector
- [#67177](https://github.com/vllm-project/vllm/issues/67177) [Bug]: EngineCore fails to start on SM120 (Blackwell) due to unsupported PTX toolchain in FlashAttention
- [#66349](https://github.com/vllm-project/vllm/issues/66349) [Bug]: granite_20b_fc chat template fails to render any conversation with a system message
- [#65531](https://github.com/vllm-project/vllm/issues/65531) [Bug]: Precomputed image or video embeddings crash the engine when the encoder CUDA graph is on
- [#67217](https://github.com/vllm-project/vllm/issues/67217) [RFC] Reuse vLLM vocab-parallel TopK for DFlash2 on Ascend
- [#67024](https://github.com/vllm-project/vllm/issues/67024) [Feature]: Super Prefill: keep generating on the prefill instance while the KV cache transfers (P/D, opt-in)

### SGLang (`sgl-project/sglang`)

**Stars:** 38,803 · **Open issues:** 6,726 · **Last push:** <1h ago

On November 13, 2026, SGLang did not see any new releases but made several significant updates through merged pull requests. Notably, fixes included aligning Cosmos3 request sizes to the 16-pixel latent grid and preserving per-layer AdaLN parameters with Cache-DiT. The introduction of an offline workflow converter for ComfyUI and enhancements like making the request-body cap configurable via SGLANG_ROUTER_MAX_BODY_BYTES were also noteworthy. Among the newly reported issues, the bug involving asynchronous input validation failures in the native runtime.v1 gRPC stands out, raising concerns about the system's robustness. Overall, the day's activity reflects ongoing improvements and refinements in the codebase without any major releases.

#### ✅ Merged PRs
- [#50107](https://github.com/sgl-project/sglang/pull/50107) [Fix] [NPU] kimi-k3: Skip the CuTe DSL TGV tactic registration on NPU
- [#48998](https://github.com/sgl-project/sglang/pull/48998) [Feat] comfyui: Add an offline workflow converter and reject weight patches on SGLD models
- [#50114](https://github.com/sgl-project/sglang/pull/50114) [Fix] diffusion: Align Cosmos3 request sizes to the 16-pixel latent grid
- [#50101](https://github.com/sgl-project/sglang/pull/50101) [Fix] diffusion: Keep fused QKNorm+RoPE rounding exact on SM100
- [#49189](https://github.com/sgl-project/sglang/pull/49189) [Refactor] cleanup: Prune dead code and env vars, fix silent failures found by the code-cleanup skill
- [#49417](https://github.com/sgl-project/sglang/pull/49417) [Perf] [NVIDIA] diffusion/joy: Enable packed-image QK normalization and RoPE on SM103
- [#49576](https://github.com/sgl-project/sglang/pull/49576) [Perf] diffusion: Make conditioning cache eviction O(1) and raise its entry limit to 4096
- [#49826](https://github.com/sgl-project/sglang/pull/49826) [Fix] minimax-h3: preserve per-layer AdaLN parameters with Cache-DiT
- [#50193](https://github.com/sgl-project/sglang/pull/50193) [CI] fa3: Build the sgl-fa3 wheel with Python 3.10 for cp310-abi3
- [#49927](https://github.com/sgl-project/sglang/pull/49927) [Doc] tool-parser: Clarify streamed argument completion
- [#50056](https://github.com/sgl-project/sglang/pull/50056) [Fix] hicache: resolve prefetch trailing-window keys before the storage read
- [#50185](https://github.com/sgl-project/sglang/pull/50185) [Doc] cookbook: Add Inkling-2-Small deployment recipes
- [#50161](https://github.com/sgl-project/sglang/pull/50161) [Feat] sgl-router: Make the request-body cap configurable via SGLANG_ROUTER_MAX_BODY_BYTES
- [#49078](https://github.com/sgl-project/sglang/pull/49078) [Perf] [ROCM] diffusion: Ring attention on aiter, and reuse the ring's K/V buffers
- [#49841](https://github.com/sgl-project/sglang/pull/49841) [Refactor] diffusion: Remove dead code in layers, quantization and runtime utils
- [#49842](https://github.com/sgl-project/sglang/pull/49842) [Refactor] diffusion: Remove dead code in configs and loaders
- [#49843](https://github.com/sgl-project/sglang/pull/49843) [Refactor] diffusion: Remove dead code in models and pipeline stages
- [#50052](https://github.com/sgl-project/sglang/pull/50052) [Fix] sgl-router: Close the PD gaps that block replacing sgl-model-gateway in CI
- [#49972](https://github.com/sgl-project/sglang/pull/49972) [CI] fa3: Add the sgl-fa3 release workflow
- [#49894](https://github.com/sgl-project/sglang/pull/49894) [Fix] entrypoints: Apply API keys in tokenizer workers and on WebSocket routes
- [#50144](https://github.com/sgl-project/sglang/pull/50144) [Feat] jit: Add SGLANG_JIT_ENABLE_LINEINFO for profiler source views
- [#49706](https://github.com/sgl-project/sglang/pull/49706) [CI] diffusion: run MiniMax-H3-Image T2I and edit in the B200 suite
- [#49430](https://github.com/sgl-project/sglang/pull/49430) [Feat] mem_cache: Evict Mamba states by GreedyDual-Size (--radix-eviction-policy gds)
- [#45730](https://github.com/sgl-project/sglang/pull/45730) [Fix] diffusion: Keep ComfyUI patches in the plugin and refresh H3 compatibility
- [#49839](https://github.com/sgl-project/sglang/pull/49839) [Chore] diffusion: Fix wrong and stale comments and docstrings in runtime
- [#49844](https://github.com/sgl-project/sglang/pull/49844) [Refactor] diffusion: Remove dead test helpers, orphan perf baselines and unused CI code
- [#49872](https://github.com/sgl-project/sglang/pull/49872) [Feat] diffusion: runway praxis 1 support
- [#50118](https://github.com/sgl-project/sglang/pull/50118) Revert "[Feat] mem_cache: Evict Mamba states by GreedyDual-Size (--radix-eviction-policy gds)"
- [#50041](https://github.com/sgl-project/sglang/pull/50041) [Doc] cookbook: Pin GLM-5.3-Flash high-throughput recipes to mamba ratio 0.9
- [#49890](https://github.com/sgl-project/sglang/pull/49890) [Fix] benchmark: Accept --dtype int4_w4a16 in tuning_fused_moe_triton_sep.py
- [#49798](https://github.com/sgl-project/sglang/pull/49798) [Fix] scheduler: Answer release_memory_occupation only after every pipeline stage released
- [#44753](https://github.com/sgl-project/sglang/pull/44753) [Refactor] RoPE: Support RotaryEmbedding class usage for DiT models
- [#50115](https://github.com/sgl-project/sglang/pull/50115) [CI] NPU: Scope CPU coverage to NPU unit tests
- [#50108](https://github.com/sgl-project/sglang/pull/50108) [CI] NPU: Add base-a CPU coverage collection
- [#48996](https://github.com/sgl-project/sglang/pull/48996) [Perf] [AMD] dsa: Default the DSA KV cache to fp8_e4m3 on gfx950
- [#48031](https://github.com/sgl-project/sglang/pull/48031) [Feat] [NPU] hicache: Support AIV transfers for MLA and DeepSeek V4
- [#41501](https://github.com/sgl-project/sglang/pull/41501) [Feat] diffusion/sana-video2: Support breakable CUDA graphs
- [#48412](https://github.com/sgl-project/sglang/pull/48412) [Feat] pp: Relay routed experts through pipeline-parallel stages
- [#49354](https://github.com/sgl-project/sglang/pull/49354) [Perf] [NVIDIA] diffusion/nomas: Fuse VAE QK normalization and MRoPE epilogue
- [#49456](https://github.com/sgl-project/sglang/pull/49456) [Perf] diffusion/ming: Fuse lossless RMSNorm scale and residual epilogues
- [#49808](https://github.com/sgl-project/sglang/pull/49808) [Perf] diffusion: Replay the Qwen3 text encoder from breakable CUDA graphs
- [#49714](https://github.com/sgl-project/sglang/pull/49714) [Fix] diffusion/zimage: Align request sizes to the 16-pixel patch grid
- [#50081](https://github.com/sgl-project/sglang/pull/50081) [Doc] cookbook: Refresh SemiAnalysis AgentX launches to InferenceX main f4c7f821
- [#49544](https://github.com/sgl-project/sglang/pull/49544) [Test] [NPU] qwen3.6-27b: enable expandable_segments for 1080p perf case
- [#49669](https://github.com/sgl-project/sglang/pull/49669) [Fix] disaggregation: Bound unsharded PD prefill prompts at bootstrap
- [#50018](https://github.com/sgl-project/sglang/pull/50018) [Perf] model_overrides: Default GLM-5.3-Flash to an agentic Mamba pool split
- [#49665](https://github.com/sgl-project/sglang/pull/49665) [Feat] dflash: Send the draft KV ring over PD disaggregation (Mooncake)

#### 🐛 New Issues
- [#50006](https://github.com/sgl-project/sglang/issues/50006) [Bug] Native runtime.v1 gRPC reports asynchronous input validation failures as INTERNAL 💬4
- [#50030](https://github.com/sgl-project/sglang/issues/50030) [Bug] --enable-hisparse fails at start-up for GLM-5.3-Flash: 'HybridLinearKVPool' object has no attribute 'register_mapping' 💬2
- [#50132](https://github.com/sgl-project/sglang/issues/50132) [Bug] router: non-idempotent POSTs are replayed after connection close even when the worker may have consumed them 💬1
- [#50045](https://github.com/sgl-project/sglang/issues/50045) SGLang 1.0 Release Tracker `roadmap` 💬1
- [#50131](https://github.com/sgl-project/sglang/issues/50131) [Bug] responses: truncated or malformed tool call arguments are silently rewritten to {} 💬1
- [#50130](https://github.com/sgl-project/sglang/issues/50130) [Bug] hicache: short Mooncake zero-copy reads are accepted as full cache hits 💬1
- [#50218](https://github.com/sgl-project/sglang/issues/50218) [CI] diffusion MiniMax-H3 tests fail on main: stale ComfyUI H3 SOURCE_SHA256 and B200 consistency mismatch
- [#50206](https://github.com/sgl-project/sglang/issues/50206) [Bug] loader: Target GDS option leaks into a different draft loader
- [#50171](https://github.com/sgl-project/sglang/issues/50171) [Feat] docker: add backwards-compatible ENTRYPOINT to engine images
- [#50136](https://github.com/sgl-project/sglang/issues/50136) [Bug] DP attention with --enable-prefill-delayer and --prefill-decode-interval-min-bs: ranks enter different collectives and the server aborts
- [#50139](https://github.com/sgl-project/sglang/issues/50139) [Bug] Session turn on a hybrid (Mamba/GDN) model keeps its state slot after admission is refused and later runs on it without a reset
- [#50138](https://github.com/sgl-project/sglang/issues/50138) [Bug] --enable-deterministic-inference: Mamba-1 logprobs of a request depend on whether it is decoded alone or in a batch
- [#50149](https://github.com/sgl-project/sglang/issues/50149) [Bug] dLLM with CUDA graphs: the first forward after an idle /flush_cache hits an illegal memory access and the server exits
- [#50137](https://github.com/sgl-project/sglang/issues/50137) [Bug] DP attention: an abort of a running request can be lost and the request runs to max_new_tokens
- [#50119](https://github.com/sgl-project/sglang/issues/50119) [Bug] GLM-5.3 low/high reasoning_effort emits <|assistant|> after final answer and continues generating
- [#50103](https://github.com/sgl-project/sglang/issues/50103) [Bug] Qwen3-VL on Hopper: the default prefill_decode_interval=22 lowers request throughput on long-prompt and text traffic (interval 0 is 9.5–36% faster)
- [#50100](https://github.com/sgl-project/sglang/issues/50100) [Bug] Host validation accepts unsupported shapes in sigmoid_gate_topk_renorm, causing Triton static_assert failure
- [#50083](https://github.com/sgl-project/sglang/issues/50083) [Tracking] Deterministic inference for GLM-5.3 on AMD MI350X / MI355X
- [#50091](https://github.com/sgl-project/sglang/issues/50091) [Bug] [PPU] DeepSeek-V4.1 (fp4 experts) cannot be served on T-HEAD SAIL with main
- [#50087](https://github.com/sgl-project/sglang/issues/50087) [Feature] Non-intrusive dumps cannot distinguish draft vs target model under DSPARK (both are TARGET_VERIFY)
- [#50073](https://github.com/sgl-project/sglang/issues/50073) [Bug] collective_rpc unreliable
- [#50070](https://github.com/sgl-project/sglang/issues/50070) [Bug] --grammar-backend llguidance/outlines with --reasoning-parser aborts structured output: no allocate_vocab_mask
- [#50057](https://github.com/sgl-project/sglang/issues/50057) tuning_block_wise_kernel.py cannot tune the [32, 32] block recipe (empty search space) and times candidates with the weight resident in L2
- [#50037](https://github.com/sgl-project/sglang/issues/50037) [Bug] Qwen3.5 long-context prefill can produce NaNs in the Blackwell CuTe DSL GDN inverse kernel
- [#50015](https://github.com/sgl-project/sglang/issues/50015) [Bug] Multi-GB cudaHostRegister fails intermittently on fragmented hosts: GUP FOLL_LONGTERM order-10 exhaustion (root cause + measurements)
- [#50010](https://github.com/sgl-project/sglang/issues/50010) [Feature] Share CUDA graph eager preparation across capture shapes

#### 🔒 Closed Issues
- [#50006](https://github.com/sgl-project/sglang/issues/50006) [Bug] Native runtime.v1 gRPC reports asynchronous input validation failures as INTERNAL
- [#39274](https://github.com/sgl-project/sglang/issues/39274) [Bug] DeepSeek-V4.1: user text containing the image placeholder token is rejected with 400 (encoding_dsv41)
- [#35826](https://github.com/sgl-project/sglang/issues/35826) [Bug] Grammar token sync initializes a singleton NCCL group under DP attention
- [#38815](https://github.com/sgl-project/sglang/issues/38815) [Bug] SWA branching attaches a later Mamba checkpoint to an earlier prefix
- [#39311](https://github.com/sgl-project/sglang/issues/39311) [Bug] DeepSeek-V4 checkpoint with fp8 routed experts scores 10pp lower on AIME25 than vLLM (same weights, same node, same harness)
- [#39279](https://github.com/sgl-project/sglang/issues/39279) [Feature] Interleaved Prefill Pipeline Parallelism for DeepSeek-V4.1: PP4 x CP2 with Two Virtual Stages per Rank
- [#39260](https://github.com/sgl-project/sglang/issues/39260) [Bug] Streaming top_logprobs reports the first token's alternatives for every token in a multi-token chunk
- [#49897](https://github.com/sgl-project/sglang/issues/49897) [Docs] Clarify streaming tool argument guarantees when a Chat Completions response ends with length
- [#45835](https://github.com/sgl-project/sglang/issues/45835) [Failure Tracker] PR Test (AMD)
- [#37451](https://github.com/sgl-project/sglang/issues/37451) [Failure Tracker] PR Test (AMD)
- [#40729](https://github.com/sgl-project/sglang/issues/40729) [Bug] PD decode scheduler crashes with NotImplementedError when retracting a request under --enable-hisparse
- [#49986](https://github.com/sgl-project/sglang/issues/49986) [CI] test_page_sharded_dsa_attention fails on main: stub backend lacks sparse_prefill_small_heads

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 134,617 · **Open issues:** 2,583 · **Last push:** 1h ago

On November 13, 2026, the llama.cpp project released version b12340, which includes a fix for SSRF vulnerability related to CORS proxy and media URLs, enhancing security measures. Other notable updates include version b12336, which ensures that an F32 position embedding is required for HunyuanVL to prevent tensor overflow issues during image requests, and version b12329, which optimizes the CUDA implementation of prefil by fusing operations for improved efficiency. Significant merged features include a server fix (#32115) that disallows reaching local addresses from the CORS proxy and an enhancement (#32131) enforcing the presence of necessary tensors in the HunyuanVL model. Additionally, new issues reported include a request for support of Qwen3-ForcedAligner-0.6B, indicating ongoing interest in extending model capabilities.

#### 🚀 New Releases
- [b12340](https://github.com/ggml-org/llama.cpp/releases/tag/b12340) b12340
- [b12336](https://github.com/ggml-org/llama.cpp/releases/tag/b12336) b12336
- [b12329](https://github.com/ggml-org/llama.cpp/releases/tag/b12329) b12329
- [b12328](https://github.com/ggml-org/llama.cpp/releases/tag/b12328) b12328
- [b12327](https://github.com/ggml-org/llama.cpp/releases/tag/b12327) b12327
- [b12323](https://github.com/ggml-org/llama.cpp/releases/tag/b12323) b12323
- [b12322](https://github.com/ggml-org/llama.cpp/releases/tag/b12322) b12322
- [b12321](https://github.com/ggml-org/llama.cpp/releases/tag/b12321) b12321
- [b12320](https://github.com/ggml-org/llama.cpp/releases/tag/b12320) b12320
- [b12319](https://github.com/ggml-org/llama.cpp/releases/tag/b12319) b12319

#### ✅ Merged PRs
- [#30335](https://github.com/ggml-org/llama.cpp/pull/30335) chat : accept </ifm|think> as K2 Horizon closer at medium/low effort
- [#32168](https://github.com/ggml-org/llama.cpp/pull/32168) server, fix CI: read a small temp file in the read_file tool test
- [#32167](https://github.com/ggml-org/llama.cpp/pull/32167) server, Fix CI: allow private media URLs in the vision tests
- [#32166](https://github.com/ggml-org/llama.cpp/pull/32166) server, Fix CI: skip LAN address tests when the host cannot reach it
- [#32011](https://github.com/ggml-org/llama.cpp/pull/32011) fix(hexagon): make host build work with clang-cl on Windows ARM64
- [#30565](https://github.com/ggml-org/llama.cpp/pull/30565) llama : prune
- [#29801](https://github.com/ggml-org/llama.cpp/pull/29801) ggml : prune
- [#32094](https://github.com/ggml-org/llama.cpp/pull/32094) hexagon: add Q5_0 and Q5_1 support
- [#32025](https://github.com/ggml-org/llama.cpp/pull/32025) server : cancel MCP tool calls on client disconnect or timeout
- [#32102](https://github.com/ggml-org/llama.cpp/pull/32102) qwen3.5: merge tensors on convert also
- [#31533](https://github.com/ggml-org/llama.cpp/pull/31533) Title: CUDA: few-row MMQ for BS 2-24
- [#32138](https://github.com/ggml-org/llama.cpp/pull/32138) ci : build ui on non-slim runner
- [#32115](https://github.com/ggml-org/llama.cpp/pull/32115) server: disallow reaching local addresses from CORS proxy and media URLs
- [#32113](https://github.com/ggml-org/llama.cpp/pull/32113) server: explicit opt-in tools via non-loopback addr, check cors host port
- [#32120](https://github.com/ggml-org/llama.cpp/pull/32120) server: disallow direct access child instance from browser
- [#32133](https://github.com/ggml-org/llama.cpp/pull/32133) server: keep the server awake while a request uses its state
- [#32131](https://github.com/ggml-org/llama.cpp/pull/32131) mtmd: require an F32 position embedding for HunyuanVL
- [#32132](https://github.com/ggml-org/llama.cpp/pull/32132) mtmd: read the MiniCPM-V projection width from ne[1]
- [#32129](https://github.com/ggml-org/llama.cpp/pull/32129) mtmd: require the MLP projector and patch embedding tensors
- [#32130](https://github.com/ggml-org/llama.cpp/pull/32130) mtmd: require a 2x2 spatial merge for the Qwen-VL projectors
- [#31897](https://github.com/ggml-org/llama.cpp/pull/31897) ggml : route GATED_DELTA_NET to the SpacemiT RVV kernel
- [#29357](https://github.com/ggml-org/llama.cpp/pull/29357) vulkan : Intel FA kernel for prefill.
- [#32128](https://github.com/ggml-org/llama.cpp/pull/32128) ggml-cpu: use the 4x4 simd_gemm tile on ARM NEON
- [#32013](https://github.com/ggml-org/llama.cpp/pull/32013) sycl : use cached device-id in set_main_device
- [#26048](https://github.com/ggml-org/llama.cpp/pull/26048) CUDA: Optimize prefil via fuse of w_s scale in epilogue MMQ for nvfp4 checkpoints
- [#32100](https://github.com/ggml-org/llama.cpp/pull/32100) ggml-backend : prefetch only inputs computed by earlier splits
- [#31929](https://github.com/ggml-org/llama.cpp/pull/31929) ggml : dispatch SpacemiT Q4_1 32x256
- [#32051](https://github.com/ggml-org/llama.cpp/pull/32051) ui: add search_chats tool
- [#32112](https://github.com/ggml-org/llama.cpp/pull/32112) ui: install llama-brand from a GitHub tarball so npm ci works without git
- [#32119](https://github.com/ggml-org/llama.cpp/pull/32119) server: when --tools-runtime is specified, ignore x-tool-runtime
- [#31915](https://github.com/ggml-org/llama.cpp/pull/31915) chat : refactor gemma4 to build loose schema rules and clean up
- [#32043](https://github.com/ggml-org/llama.cpp/pull/32043) llama : avoid touching unused graph metadata pages
- [#31138](https://github.com/ggml-org/llama.cpp/pull/31138) sycl: make oneDNN FA cache thread-safe and memoize runtime failures
- [#31873](https://github.com/ggml-org/llama.cpp/pull/31873) [SYCL] SYCL AOT (GGML_SYCL_DEVICE_ARCH=arl-h) produces garbage output (GGGG...) for models > 4 GB
- [#31919](https://github.com/ggml-org/llama.cpp/pull/31919) CUDA: add cuda debug buffer pool
- [#30947](https://github.com/ggml-org/llama.cpp/pull/30947) opencl: add bin kernel `kernel_gemm_noshuffle_q4_0_f32_32b_trans_ila_a7_bin`
- [#32067](https://github.com/ggml-org/llama.cpp/pull/32067) CUDA: skip empty MoE tiles in MMQ stream-k fixup

#### 🐛 New Issues
- [#32160](https://github.com/ggml-org/llama.cpp/issues/32160) Feature Request: ternary weights with a 1024-wide Hadamard rotation (one plane and multi-plane) - which way upstream? 💬1
- [#32124](https://github.com/ggml-org/llama.cpp/issues/32124) Misc. bug: Vulkan on Windows + AMD Strix Halo (APU): idle weights evicted from device-local memory within ~1.5 s; depends on commit headroom; ping keep-alive ineffective 💬1
- [#32158](https://github.com/ggml-org/llama.cpp/issues/32158) Misc. bug: tools/ui npm ci fails on npm 12 with EALLOWREMOTE after #32112 (llama-brand tarball dependency)
- [#32152](https://github.com/ggml-org/llama.cpp/issues/32152) Misc. bug: pplx-decider detection matches non-Qwen3.5 models by file names only, blocks conversion `bug-unconfirmed`
- [#32149](https://github.com/ggml-org/llama.cpp/issues/32149) { "kv_metadata": "426c351e4437c6084d7b67f0a55aa7ad206ecec619424e49ccb3763ecc47fa4f",
- [#32141](https://github.com/ggml-org/llama.cpp/issues/32141) Misc. bug: backend sampling ignores min_keep and drops all tokens with min_p = 1 `bug-unconfirmed`
- [#32139](https://github.com/ggml-org/llama.cpp/issues/32139) Eval bug: CUDA MoE MUL_MAT_ID crash on large ubatch `bug-unconfirmed`
- [#32127](https://github.com/ggml-org/llama.cpp/issues/32127) Feature Request: Support Qwen3-ForcedAligner-0.6B `enhancement`

#### 🔒 Closed Issues
- [#29419](https://github.com/ggml-org/llama.cpp/issues/29419) [speculative/mtp] Flash-Attention crash in gemma4-assistant: Query head dimension mismatch (neq0 != HSK / D=2048/4096)
- [#27408](https://github.com/ggml-org/llama.cpp/issues/27408) spec: mtmd image chunks leave positional holes in the draft KV cache -> llama_decode(ctx_dft) rc=-1 -> HTTP 500 with draft-dflash (CUDA); zero-fill patch crash-eliminating but no speculative benefit on images
- [#30246](https://github.com/ggml-org/llama.cpp/issues/30246) K2 Horizon: low/medium effort leaves final text and tool calls in reasoning_content
- [#31972](https://github.com/ggml-org/llama.cpp/issues/31972) Misc. bug: "Reporting a vulnerability" process is broken
- [#29689](https://github.com/ggml-org/llama.cpp/issues/29689) Misc. bug: llama-server --sleep-idle-seconds: a request that arrives as the server falls asleep is never processed
- [#32149](https://github.com/ggml-org/llama.cpp/issues/32149) { "kv_metadata": "426c351e4437c6084d7b67f0a55aa7ad206ecec619424e49ccb3763ecc47fa4f",

### Ollama (`ollama/ollama`)

**Stars:** 186,827 · **Open issues:** 4,647 · **Last push:** 3h ago

On November 13, 2026, Ollama did not release any new versions, but several key features were merged into the codebase. Notably, PR #19684 improved the renderer's functionality by mapping disabled thinking to the model's lowest supported level, while PR #19557 added help documentation for noninteractive bare invocations. Additionally, PR #19578 introduced support for deferred tool loading in the Claude code, and PR #18972 restructured the documentation to better delineate cloud features. Among new issues, #19674 was highlighted as a significant feature request to remove recommended models from Ollama's UI or provide a toggle for users to disable this option.

#### ✅ Merged PRs
- [#19684](https://github.com/ollama/ollama/pull/19684) renderers: map disabled thinking to the model's lowest supported level
- [#19557](https://github.com/ollama/ollama/pull/19557) cmd: show help for noninteractive bare invocations
- [#19578](https://github.com/ollama/ollama/pull/19578) Support deferred tool loading in claude code
- [#18972](https://github.com/ollama/ollama/pull/18972) docs: restructuring to separate out cloud features

#### 🐛 New Issues
- [#19674](https://github.com/ollama/ollama/issues/19674) FEATURE REQUEST: Remove recommended models from Ollama's UI (or create toggle to remove it) `feature request` 💬3
- [#19682](https://github.com/ollama/ollama/issues/19682) ChatGPT integration: Save & Restart ChatGPT leaves managed Codex daemon using stale model catalog `launch`
- [#19675](https://github.com/ollama/ollama/issues/19675) pull: an error answer from the blob download host is read as file data and reported as "max retries exceeded: EOF" `bug`
- [#19672](https://github.com/ollama/ollama/issues/19672) Cloud: mimo-v2.6-pro:cloud — tool-call flooding storm in agentic sessions (upstream defect; which checkpoint is being served?) `bug` `cloud`
- [#19673](https://github.com/ollama/ollama/issues/19673) Proposal: add Aetox harness to `ollama launch`
- [#19671](https://github.com/ollama/ollama/issues/19671) cloud: minimax-m3.1-flash keeps crashing `bug` `cloud`

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,200 · **Open issues:** 5,185 · **Last push:** <1h ago

On November 13, 2026, LiteLLM released version 1.108.7 (LTS), with users encouraged to pull the `ghcr.io/berriai/litellm:lts` image for the latest updates. Key merged features included enhancements to the UI for managing customer organizations, teams, and members, as well as improved budget utilization tracking. Additionally, several critical fixes were implemented, such as resolving issues with budget reservations in the `/v1/responses` endpoint and optimizing startup times for the proxy service. Notably, a new bug was reported regarding the Bedrock Llama native streaming feature, which drops provider usage and undercounts prompt tokens.

#### 🚀 New Releases
- [v1.108.7](https://github.com/BerriAI/litellm/releases/tag/v1.108.7) 1.108.7 (LTS)

#### ✅ Merged PRs
- [#51501](https://github.com/BerriAI/litellm/pull/51501) chore(cost-map): add together_ai/thinkingmachines/Inkling-2-Small from the Together models API
- [#51523](https://github.com/BerriAI/litellm/pull/51523) fix(ui): align customer member budget form with API contract
- [#51515](https://github.com/BerriAI/litellm/pull/51515) test(security): finish request accounting before changing Vault config
- [#51490](https://github.com/BerriAI/litellm/pull/51490) refactor(proxy): name customer member budget columns budget_id and budget_override_id
- [#51488](https://github.com/BerriAI/litellm/pull/51488) test: drop the unit tests that flaked on main this week
- [#51483](https://github.com/BerriAI/litellm/pull/51483) feat(ui): show customer organization usage and budget utilization
- [#51502](https://github.com/BerriAI/litellm/pull/51502) fix(router): validate request fields and ignore scalar fallback overrides
- [#51507](https://github.com/BerriAI/litellm/pull/51507) feat(ui): manage customer organizations, teams, and members
- [#51506](https://github.com/BerriAI/litellm/pull/51506) feat(ui): add deployment-wide Aria visibility setting
- [#51509](https://github.com/BerriAI/litellm/pull/51509) test(ui): give the skills panel's first render 5s to show the catalog
- [#51440](https://github.com/BerriAI/litellm/pull/51440) perf(rust): stop re-serializing the Messages request body in Python logging callbacks
- [#51493](https://github.com/BerriAI/litellm/pull/51493) feat(spend): add daily customer usage and budget resets
- [#51494](https://github.com/BerriAI/litellm/pull/51494) fix(dynamic_rate_limiter_v3): a capped borrower keeps its cap on its own counter and gets a fresh share at saturation
- [#51495](https://github.com/BerriAI/litellm/pull/51495) feat(proxy): add customer usage tracking and drilldowns
- [#51446](https://github.com/BerriAI/litellm/pull/51446) test(image): point admin MCP schema push at /app/litellm/schema.prisma
- [#51479](https://github.com/BerriAI/litellm/pull/51479) fix(cost): preserve Bedrock cross-region pricing for Messages
- [#51478](https://github.com/BerriAI/litellm/pull/51478) chore(cost-map): point the fireworks deepseek v4 flash successor at deepseek-v4p1-flash
- [#51486](https://github.com/BerriAI/litellm/pull/51486) chore: bump litellm-enterprise 0.1.83 -> 0.1.84, litellm-proxy-extras 0.4.114 -> 0.4.115, litellm 1.110.0 -> 1.111.0
- [#51435](https://github.com/BerriAI/litellm/pull/51435) fix(bedrock): send max_tokens and priority in Cohere embedding requests
- [#51335](https://github.com/BerriAI/litellm/pull/51335) fix(embeddings): unwrap extra_body for providers with their own embedding handlers
- [#51061](https://github.com/BerriAI/litellm/pull/51061) feat(ui): set per-threshold budget alert recipients on virtual keys
- [#51477](https://github.com/BerriAI/litellm/pull/51477) fix(fal_ai): bill Luma Ray v3.2 videos at fal's 540p default resolution
- [#51415](https://github.com/BerriAI/litellm/pull/51415) fix(dynamic_rate_limiter_v3): a borrower gets its full share back once the model saturates
- [#51417](https://github.com/BerriAI/litellm/pull/51417) feat(dynamic_rate_limiter_v3): prometheus share, borrowed and throttle metrics per team and model
- [#51108](https://github.com/BerriAI/litellm/pull/51108) feat(cost-map): load LITELLM_MODEL_COST_MAP_URL from gs:// with Google application default credentials
- [#51225](https://github.com/BerriAI/litellm/pull/51225) feat(fal_ai): bill flat per-video fal.ai models with output_cost_per_video
- [#51459](https://github.com/BerriAI/litellm/pull/51459) feat(proxy): customer org, team and member hierarchy with budget templates
- [#51474](https://github.com/BerriAI/litellm/pull/51474) fix(ui): remove the Chargebacks page from Customer Portal
- [#51475](https://github.com/BerriAI/litellm/pull/51475) fix(openai): point gpt-image-1-mini, gpt-image-1.5 and chatgpt-image-latest at gpt-image-2.6-sunburst as successor
- [#50290](https://github.com/BerriAI/litellm/pull/50290) feat(access-groups): grant vector stores through access groups
- [#51433](https://github.com/BerriAI/litellm/pull/51433) feat(model-catalog): read output_cost_per_video in the rust registry check
- [#51460](https://github.com/BerriAI/litellm/pull/51460) fix(azure): backport Azure OpenAI Decisions support to lts/1.108.x (#48529)
- [#51461](https://github.com/BerriAI/litellm/pull/51461) test(messages): expect rust to drop a null thinking signature on retry
- [#50758](https://github.com/BerriAI/litellm/pull/50758) fix(ui): serve navigation payloads under the ui prefix
- [#51428](https://github.com/BerriAI/litellm/pull/51428) fix(proxy): refuse blocked and over-limit keys before reading the request body
- [#51444](https://github.com/BerriAI/litellm/pull/51444) fix(model_prices): add Azure DeepSeek V4.1 Flash 1017 and two Perplexity Agent API rows
- [#51443](https://github.com/BerriAI/litellm/pull/51443) fix(otel): distinguish missing usage from prompt estimates on chat failures
- [#51453](https://github.com/BerriAI/litellm/pull/51453) test(integration): point database tests at the moved litellm/proxy-extras package
- [#51447](https://github.com/BerriAI/litellm/pull/51447) fix(token-counting): count mid-conversation tool changes
- [#51441](https://github.com/BerriAI/litellm/pull/51441) fix(anthropic_messages): preserve first-round web search spend logs
- [#51355](https://github.com/BerriAI/litellm/pull/51355) fix(messages): hand rust only the anthropic metadata user_id
- [#51349](https://github.com/BerriAI/litellm/pull/51349) fix(messages): keep signed empty thinking blocks on rust
- [#51438](https://github.com/BerriAI/litellm/pull/51438) fix(azure): strip GPT-5 routing marker from Responses deployments
- [#51430](https://github.com/BerriAI/litellm/pull/51430) fix(otel): report the provider model in experimental GenAI traces
- [#48968](https://github.com/BerriAI/litellm/pull/48968) fix(spend-logs): mask token-shaped secrets in stored request and resp…
- [#51351](https://github.com/BerriAI/litellm/pull/51351) test(providers): expect rust for anthropic messages after rust-only cutover
- [#51432](https://github.com/BerriAI/litellm/pull/51432) feat(vertex_ai): add vertex_ai/gemini-4-hydrogen from the Vertex pricing page
- [#51369](https://github.com/BerriAI/litellm/pull/51369) fix(proxy): fetch blog posts without blocking the event loop
- [#51416](https://github.com/BerriAI/litellm/pull/51416) fix(skills): honor dashboard user and team grants
- [#51418](https://github.com/BerriAI/litellm/pull/51418) feat(alerts): add management controls and opt-in daily summaries
- [#51426](https://github.com/BerriAI/litellm/pull/51426) refactor(ui): remove standalone Model Leaderboard
- [#51423](https://github.com/BerriAI/litellm/pull/51423) feat(gemini): add gemini/gemini-4-hydrogen from the Gemini API pricing page
- [#43905](https://github.com/BerriAI/litellm/pull/43905) feat(proxy): publish opted-in pass-through endpoints on the Model Hub
- [#51419](https://github.com/BerriAI/litellm/pull/51419) feat(ui): add daily model usage to customer pages
- [#51420](https://github.com/BerriAI/litellm/pull/51420) chore: bump litellm to 1.108.7 on lts/1.108.x
- [#51334](https://github.com/BerriAI/litellm/pull/51334) fix(token-counter): count Anthropic server tool history
- [#51358](https://github.com/BerriAI/litellm/pull/51358) fix(messages): name the deployment on a rust stream's transport error
- [#51340](https://github.com/BerriAI/litellm/pull/51340) fix(gemini): backport #51017, #51032 and #51279 to lts/1.108.x
- [#51410](https://github.com/BerriAI/litellm/pull/51410) feat(fal_ai): add Nano Banana 2.1, bill it from fal billable units, fix google/ routing
- [#51405](https://github.com/BerriAI/litellm/pull/51405) fix(auth): enforce customer budget rpm/tpm limits under JWT auth
- [#51160](https://github.com/BerriAI/litellm/pull/51160) feat(mcp): cache upstream tool lists with an admin-set lifetime
- [#51407](https://github.com/BerriAI/litellm/pull/51407) chore(cost-map): add 7 fal_ai rows for seedream 5.5, flux virtual try-on, patina material and vidu templates (fifth fal-ai sync)
- [#51360](https://github.com/BerriAI/litellm/pull/51360) feat(replicate): add video generation, image generation and text to speech through the predictions API
- [#51312](https://github.com/BerriAI/litellm/pull/51312) feat(skills): let authors edit and withdraw pending submissions
- [#51395](https://github.com/BerriAI/litellm/pull/51395) chore(cost-map): rolling registry audit 2026-11-12, xAI retired image rates, Kling 4, GMI rows and -latest aliases
- [#51365](https://github.com/BerriAI/litellm/pull/51365) feat(model-catalog): read output_cost_per_billable_unit in the rust registry check
- [#51367](https://github.com/BerriAI/litellm/pull/51367) fix(rate-limit): hold router fallbacks, nested calls, WebSocket turns and oversized prompts to a borrowing team's model share
- [#51366](https://github.com/BerriAI/litellm/pull/51366) feat(dynamic_rate_limiter_v3): priority_class_share_splits_equally_among_active_teams splits a priority class share among the teams active on a model
- [#51350](https://github.com/BerriAI/litellm/pull/51350) feat(dynamic_rate_limiter_v3): steer flexible teams to a permitted alternate when their preferred model is saturated
- [#51343](https://github.com/BerriAI/litellm/pull/51343) ci: stop PR runs from thrashing the Actions cache and stop smoke compiling from source
- [#51368](https://github.com/BerriAI/litellm/pull/51368) fix(gemini): add batch and priority image output token prices to gemini/gemini-2.5-flash-image
- [#51359](https://github.com/BerriAI/litellm/pull/51359) feat(rate-limit): team_model_limit_max_borrow_multiple caps how far a team borrows idle model capacity
- [#51364](https://github.com/BerriAI/litellm/pull/51364) test(providers): expect Rust routing for idle Messages streams
- [#51328](https://github.com/BerriAI/litellm/pull/51328) feat(rate-limit): team_model_limit_borrows_idle_capacity_from_other_teams lets a team's model TPM and RPM limits borrow idle capacity in the dynamic rate limiter
- [#51337](https://github.com/BerriAI/litellm/pull/51337) fix(anthropic): close strict JSON schemas on the Messages to Responses bridge
- [#51348](https://github.com/BerriAI/litellm/pull/51348) fix(fal_ai): give MiniMax H3 Max video endpoints their own resolution profile
- [#51338](https://github.com/BerriAI/litellm/pull/51338) fix(alerts): stop detecting traffic drops
- [#51006](https://github.com/BerriAI/litellm/pull/51006) chore: move scripts and runtime sources under litellm

#### 🐛 New Issues
- [#51456](https://github.com/BerriAI/litellm/issues/51456) [Bug]: Bedrock Llama native streaming drops provider usage and undercounts prompt tokens `llm translation` 💬2
- [#51396](https://github.com/BerriAI/litellm/issues/51396) [Bug]: A request with a non-list `fallbacks` or a non-integer `max_fallbacks` fails with a router-core shape error (HTTP 500) `llm translation` 💬2
- [#51469](https://github.com/BerriAI/litellm/issues/51469) [Bug]: Guardrails on /v1/messages drop Anthropic-only tool fields (defer_loading, strict, input_examples …) even when the guardrail changes nothing `bug` `llm translation` 💬1
- [#51445](https://github.com/BerriAI/litellm/issues/51445) [Bug]: /v1/responses budget reservation is sized from max_tokens, which is never forwarded, so concurrent calls overrun max_budget `llm translation` 💬1
- [#51458](https://github.com/BerriAI/litellm/issues/51458) [Bug]: Proxy startup takes ~2 min on Python 3.14: `prisma.types` is imported three times and each import takes ~40 s 💬1
- [#51455](https://github.com/BerriAI/litellm/issues/51455) [Bug]: Bedrock Titan embedding passthrough succeeds but fails success logging `llm translation` 💬1
- [#51391](https://github.com/BerriAI/litellm/issues/51391) [Feature]: Cursor CLI subscription passthrough `claude code`
- [#51404](https://github.com/BerriAI/litellm/issues/51404) [Bug]: Native Gemini generateContent route never puts a failed deployment into cooldown (model_info not passed to logging) `llm translation` 💬1
- [#51389](https://github.com/BerriAI/litellm/issues/51389) [Bug]: Shared YAML model_info alias causes cross-model metadata contamination and incorrect spend calculation `bug` `llm translation` 💬1
- [#51394](https://github.com/BerriAI/litellm/issues/51394) [Bug]: temperature=1 rejected for fixed-sampling Claude models in 1.110.0rc2 (works in 1.109.1) `llm translation` 💬1
- [#51393](https://github.com/BerriAI/litellm/issues/51393) [Bug]: Streaming request is no longer cancelled when the client disconnects before the first chunk (regression in 1.107.0) 💬1
- [#51534](https://github.com/BerriAI/litellm/issues/51534) [Bug]: Unprefixed partial wildcard (model_name: gemini-* -> openai/gemini-*) is never listed in /v1/models `llm translation`
- [#51476](https://github.com/BerriAI/litellm/issues/51476) Bedrock passthrough logging drops request messages/parameters and reports null stream `llm translation`
- [#51464](https://github.com/BerriAI/litellm/issues/51464) [Bug]: openai.omit in extra_headers fails validation for chat completions and embeddings since v1.108.1 `llm translation`
- [#51452](https://github.com/BerriAI/litellm/issues/51452) [Bug]: ModelNotMappedError in litellm/utils.py `bug` `llm translation`
- [#51450](https://github.com/BerriAI/litellm/issues/51450) [Bug]: Fireworks size-bucket pricing reads 1p5b as 5B, so small unmapped models are billed at the 4.1B-16B rate `llm translation`
- [#51448](https://github.com/BerriAI/litellm/issues/51448) [Bug]: Hugging Face chat ignores HUGGINGFACE_API_BASE and fails on huggingface/tgi when the endpoint comes from the environment
- [#51409](https://github.com/BerriAI/litellm/issues/51409) [Bug]: Quiz form submission blocked in iframe due to missing `allow-forms` permission `bug`
- [#51406](https://github.com/BerriAI/litellm/issues/51406) [Bug]: File retrieve, file content and file delete each leak a max_parallel_requests slot for an hour
- [#51379](https://github.com/BerriAI/litellm/issues/51379) [Bug]: Responses WebSocket overwrites team model aliases before routing `llm translation`
- [#51352](https://github.com/BerriAI/litellm/issues/51352) [Bug]: Cost map guard calls the old helper path after the repository move

#### 🔒 Closed Issues
- [#50877](https://github.com/BerriAI/litellm/issues/50877) [Feature]: Set per-model budgets within a team with custom reset intervals
- [#36182](https://github.com/BerriAI/litellm/issues/36182) [Bug]: `Invalid Value: 'tools.namespace'` with Codex CLI 0.147.0
- [#51029](https://github.com/BerriAI/litellm/issues/51029) [Bug]: OTel gen_ai.response.model holds the requested model group, not the model that generated the response
- [#47723](https://github.com/BerriAI/litellm/issues/47723) [Bug]: Anthropic count_tokens local fallback rejects tool_addition and tool_removal blocks
- [#50104](https://github.com/BerriAI/litellm/issues/50104) [Bug]: Claude on Bedrock behind the OpenAI Agents SDK: deferred tool not found after tool search, search record lost on later turns, compaction param dropped on /v1/messages
- [#51396](https://github.com/BerriAI/litellm/issues/51396) [Bug]: A request with a non-list `fallbacks` or a non-integer `max_fallbacks` fails with a router-core shape error (HTTP 500)
- [#32769](https://github.com/BerriAI/litellm/issues/32769) [Bug]: gemini-3.5-flash returns reasoning_tokens but reasoning_content=None (2.5-flash works)
- [#36179](https://github.com/BerriAI/litellm/issues/36179) Uvicorn workers die silently during long SSE streams, taking every in-flight stream with them (v1.90.6, --num_workers 2)
- [#51221](https://github.com/BerriAI/litellm/issues/51221) [Bug]: OTel span has no gen_ai.usage when a request times out after the backend processed the prompt
- [#46866](https://github.com/BerriAI/litellm/issues/46866) [Bug]: Azure Responses API sends the gpt5_series/ routing prefix to Azure as the deployment name
- [#49668](https://github.com/BerriAI/litellm/issues/49668) [Docs]: Add a silent_model comparison recipe with Langfuse and paired JSON output
- [#36190](https://github.com/BerriAI/litellm/issues/36190) [Feature]: /ui/usage should persist selected time range and activity tab across page reload
- [#36201](https://github.com/BerriAI/litellm/issues/36201) [Bug]: Anthropic streams bypass protocol-aware custom guardrail iterators
- [#46286](https://github.com/BerriAI/litellm/issues/46286) [Bug]: Bedrock /v1/messages spend priced at the global rate for cross-region (eu.) profiles; streamed usage.cost uses the eu. rate
- [#51297](https://github.com/BerriAI/litellm/issues/51297) [Bug]: token_counter rejects server tool blocks in assistant history, so the router skips its context-window check
- [#51265](https://github.com/BerriAI/litellm/issues/51265) [Bug]: Streamed /v1/messages on Bedrock leaks a background pump task, and its buffered request and response, per stuck stream
- [#50528](https://github.com/BerriAI/litellm/issues/50528) [Bug]: Responses client disconnect leaves full budget reservation after HTTP 499
- [#51200](https://github.com/BerriAI/litellm/issues/51200) [Bug]: Messages-to-Responses strict JSON skips recursive object closure performed by Messages-to-Chat

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,406 · **Open issues:** 502 · **Last push:** <1h ago

On November 13, 2026, there were no new releases for Unsloth, but several notable pull requests were merged, including updates to DeepSeek-V4.1, allowing the loading and training of models with LoRA/QLoRA, and enhancements to the Studio's chat import and export functionalities. Significant fixes included improvements to memory management with multi-LoRA configurations and ensuring compatibility with various tensor operations. Additionally, a prominent new issue was reported regarding version 0.1.917, which forces mmap usage despite explicit configuration to disable it, resulting in excessive RAM and SSD consumption. Other new feature requests included enhancing the desktop version with an option for model loading behavior and updating the Gemma 4 model family to Unsloth Dynamic UD3.1.

#### ✅ Merged PRs
- [#17625](https://github.com/unslothai/unsloth/pull/17625) DeepSeek-V4.1 (transformers port): load, place and train it with LoRA / QLoRA
- [#17153](https://github.com/unslothai/unsloth/pull/17153) Studio: keep legacy function calls and their results on chat import
- [#16971](https://github.com/unslothai/unsloth/pull/16971) Studio: read more chat export shapes without losing turns
- [#17609](https://github.com/unslothai/unsloth/pull/17609) Block compile: drop a caller's strict mark_dynamic so Qwen3.8-Flash-Next layers stay compiled
- [#17492](https://github.com/unslothai/unsloth/pull/17492) Strict Dynamo regions: turn suppress_errors off only where the flag exists
- [#17606](https://github.com/unslothai/unsloth/pull/17606) PEFT MoE snapshot: add transformers' Dots3NoteTextModel alias
- [#16655](https://github.com/unslothai/unsloth/pull/16655) Bound the batched multi-LoRA loss memory by chunking cross entropy
- [#16588](https://github.com/unslothai/unsloth/pull/16588) LoRA decode: return the caller's out tensor so batched decode keeps one mm per projection
- [#17157](https://github.com/unslothai/unsloth/pull/17157) Studio: keep tagged edit text lossless on a no-op save
- [#16651](https://github.com/unslothai/unsloth/pull/16651) Build multi-LoRA expert groups when the batch is set
- [#16654](https://github.com/unslothai/unsloth/pull/16654) Fix tensor parallel adapter save after the MoE expert LoRA factor swap
- [#17602](https://github.com/unslothai/unsloth/pull/17602) Tests: skip the case-kept clip sidecar test on a case-insensitive filesystem
- [#17601](https://github.com/unslothai/unsloth/pull/17601) Tests: check the MLX dataset slice through the shared slice_dataset_rows helper
- [#16969](https://github.com/unslothai/unsloth/pull/16969) Studio: decode UTF-16 without BOM and repair .doc pieces split mid-surrogate
- [#16645](https://github.com/unslothai/unsloth/pull/16645) Skip FP8 LoRA stats increments while compiling
- [#17565](https://github.com/unslothai/unsloth/pull/17565) Studio: keep a chat's own settings when its send waits on a model load
- [#16933](https://github.com/unslothai/unsloth/pull/16933) Normalize save_method before the merge so a respelled merged_16bit still writes config.json
- [#16575](https://github.com/unslothai/unsloth/pull/16575) Triton kernels: GPU guard against mid-generate recompiles, comment every tl.constexpr
- [#16652](https://github.com/unslothai/unsloth/pull/16652) Keep the user override when the torch config guard restores a deleted entry
- [#17582](https://github.com/unslothai/unsloth/pull/17582) Fix SDXL checkpoint selection for catalog downloads and Run
- [#17471](https://github.com/unslothai/unsloth/pull/17471) Guard OpenVINO exports on PEFT-wrapped bases
- [#16863](https://github.com/unslothai/unsloth/pull/16863) get_chat_template: write the chosen system message into the Ollama Modelfile
- [#16649](https://github.com/unslothai/unsloth/pull/16649) Multi-LoRA: keep the base output dtype on the PyTorch path under autocast
- [#17368](https://github.com/unslothai/unsloth/pull/17368) fix: expose shared VRAM budget in image settings
- [#17436](https://github.com/unslothai/unsloth/pull/17436) Studio: keep diffusion captions that hold U+2028, U+2029 or U+0085
- [#17052](https://github.com/unslothai/unsloth/pull/17052) Studio: keep imported system messages as system through save and load
- [#17285](https://github.com/unslothai/unsloth/pull/17285) Ollama Phi-4 template: write roles as text, not <|user|> pseudo tokens
- [#17115](https://github.com/unslothai/unsloth/pull/17115) Legacy CLI: accept true/false spellings for --use_gradient_checkpointing
- [#15981](https://github.com/unslothai/unsloth/pull/15981) Studio: send the OpenCode Go session header on the older /zen/go base URL
- [#17047](https://github.com/unslothai/unsloth/pull/17047) check_dataset: measure the text SFT trains on
- [#17557](https://github.com/unslothai/unsloth/pull/17557) Studio: honor Claude Code's thinking-off setting on /v1/messages
- [#17537](https://github.com/unslothai/unsloth/pull/17537) GRPO: log the clip_ratio metrics for loss_type luspo
- [#17591](https://github.com/unslothai/unsloth/pull/17591) Studio Desktop: bump zip, ctutils and rustix in Cargo.lock for security advisories
- [#17303](https://github.com/unslothai/unsloth/pull/17303) Studio: refuse a Train Split Start past the last row instead of training on one row
- [#17176](https://github.com/unslothai/unsloth/pull/17176) Llama 3.x and GPT-OSS templates: treat tool_calls None as no tool call
- [#17551](https://github.com/unslothai/unsloth/pull/17551) Images/Video: hide the pill's loaded state during eject and fix unload races
- [#16258](https://github.com/unslothai/unsloth/pull/16258) Studio frontend: bump node-forge to 1.4.3 and seroval to 1.7.5
- [#17316](https://github.com/unslothai/unsloth/pull/17316) Strip Llama 3's bos_token set statement when deduping a chat template
- [#17175](https://github.com/unslothai/unsloth/pull/17175) Let the qwen3 chat template render tool-call turns with null content
- [#17307](https://github.com/unslothai/unsloth/pull/17307) Studio: read decision JSONL rows that hold U+2028, U+2029 or U+0085
- [#17438](https://github.com/unslothai/unsloth/pull/17438) push_to_hub_gguf: put the user's tags in the README card
- [#16932](https://github.com/unslothai/unsloth/pull/16932) Qwen 2.5 template: use the chosen system message when tools are passed
- [#17116](https://github.com/unslothai/unsloth/pull/17116) CLI: refuse unsloth train when num_epochs and max_steps are both 0
- [#17592](https://github.com/unslothai/unsloth/pull/17592) Tests: read the titlebar-height mirror through fullscreen's customTop
- [#17567](https://github.com/unslothai/unsloth/pull/17567) Studio: preserve guidance for FLUX.1-dev single-file models
- [#17501](https://github.com/unslothai/unsloth/pull/17501) Studio: let an agent reply's round tail leave from the end of the list
- [#17496](https://github.com/unslothai/unsloth/pull/17496) Studio: persist local-checkpoint tier probe verdicts across workers
- [#17528](https://github.com/unslothai/unsloth/pull/17528) Honor the Vulkan opt-in for sd.cpp on Windows Intel GPUs
- [#17559](https://github.com/unslothai/unsloth/pull/17559) Studio: Stop and eject interrupt a running image generation
- [#17584](https://github.com/unslothai/unsloth/pull/17584) Bump github/codeql-action init and analyze to v4.39.3
- [#17498](https://github.com/unslothai/unsloth/pull/17498) Studio: stop each chat switch from keeping the previous thread alive
- [#17490](https://github.com/unslothai/unsloth/pull/17490) get_model_name: keep the fetched upstream mapper for an hour instead of refetching it on every load
- [#17494](https://github.com/unslothai/unsloth/pull/17494) Studio: memoize the RAG roster's cleaned document names
- [#17491](https://github.com/unslothai/unsloth/pull/17491) Studio: cache sd.cpp --help output per binary build
- [#17553](https://github.com/unslothai/unsloth/pull/17553) Studio: fit long tool results to the window on connections
- [#17544](https://github.com/unslothai/unsloth/pull/17544) Studio: keep formulas when the model reads a web page
- [#17403](https://github.com/unslothai/unsloth/pull/17403) Fix header gradient banding on plain glass backgrounds
- [#17555](https://github.com/unslothai/unsloth/pull/17555) Studio: keep a Python script's output when a terminal call times out
- [#17554](https://github.com/unslothai/unsloth/pull/17554) Studio: size Deep Research prompts to the window a self-hosted connection serves
- [#17213](https://github.com/unslothai/unsloth/pull/17213) Studio: toggle desktop fullscreen with F11
- [#17540](https://github.com/unslothai/unsloth/pull/17540) Studio: let unsloth start agents send images to a vision model
- [#17562](https://github.com/unslothai/unsloth/pull/17562) Studio: keep angle-bracket text in user turns on the safetensors fallback formatter
- [#17381](https://github.com/unslothai/unsloth/pull/17381) Clarify API Monitor navigation label
- [#17541](https://github.com/unslothai/unsloth/pull/17541) Studio: ask before Python deletes files through a passed function
- [#17561](https://github.com/unslothai/unsloth/pull/17561) Studio: stop tool images breaking chats on text-only connection models
- [#17560](https://github.com/unslothai/unsloth/pull/17560) Studio: show an unloading toast when the image or video model is ejected
- [#17542](https://github.com/unslothai/unsloth/pull/17542) Studio: answer on Mistral reasoning models instead of an internal error
- [#17564](https://github.com/unslothai/unsloth/pull/17564) Studio: keep the audio Eject during a running task so it can say to stop first
- [#17566](https://github.com/unslothai/unsloth/pull/17566) Studio: show the context DiffusionGemma is really running with
- [#17556](https://github.com/unslothai/unsloth/pull/17556) Studio: keep DeepSeek chats answering after a tool call
- [#16771](https://github.com/unslothai/unsloth/pull/16771) Bump the npm-oxc-validator group across 1 directory with 3 updates
- [#17545](https://github.com/unslothai/unsloth/pull/17545) Studio: web fetch reads forum threads and docs that keep their text in noscript
- [#17543](https://github.com/unslothai/unsloth/pull/17543) Studio: read large docs pages past their menus
- [#16772](https://github.com/unslothai/unsloth/pull/16772) Bump the cargo-tauri group across 1 directory with 7 updates
- [#17586](https://github.com/unslothai/unsloth/pull/17586) Bump docker/login-action in /
- [#17587](https://github.com/unslothai/unsloth/pull/17587) Dependabot: bump every sub-path of codeql-action and cache in one PR
- [#17574](https://github.com/unslothai/unsloth/pull/17574) Studio: tooltips switch to the hovered icon immediately
- [#17463](https://github.com/unslothai/unsloth/pull/17463) [Bug] Unsloth Studio: chat-only installs run llama.cpp on the CPU because the CUDA bundles ship no cudart/cublas
- [#17583](https://github.com/unslothai/unsloth/pull/17583) Studio: Steer now stops the response for a parked attachment send
- [#17581](https://github.com/unslothai/unsloth/pull/17581) studiobench: step back over a gap the completeness traversal skipped
- [#17579](https://github.com/unslothai/unsloth/pull/17579) Keep vendored Studio files byte-identical on Windows checkouts
- [#17563](https://github.com/unslothai/unsloth/pull/17563) Studio: fix MiniMax-H3-Image downloads, explicit FP8/INT8 and 16 MP sizes
- [#17578](https://github.com/unslothai/unsloth/pull/17578) Notebooks CI: refresh the Colab GPU oracle snapshot for cuDNN 9.28.1.4
- [#17576](https://github.com/unslothai/unsloth/pull/17576) Studio: keep the on-demand kernels install importable next to transformers
- [#17577](https://github.com/unslothai/unsloth/pull/17577) studiobench: overlap the completeness traversal stops on a windowed thread
- [#17569](https://github.com/unslothai/unsloth/pull/17569) Studio: let the background diffusers import finish before MiniMax-H3-Image imports diffusers
- [#17571](https://github.com/unslothai/unsloth/pull/17571) studiobench: residual stabilizer padding settles the windowed pin check

#### 🐛 New Issues
- [#17605](https://github.com/unslothai/unsloth/issues/17605) [Bug] Unsloth 0.1.917 forces mmap despite explicit --load-mode none, causing excessive RAM and SSD usage 💬2
- [#17590](https://github.com/unslothai/unsloth/issues/17590) [Feature] Add a way to clone model run settings `feature request`
- [#17640](https://github.com/unslothai/unsloth/issues/17640) [Feature] set ssl certfile and keyfile from config file or environment `feature request`
- [#17638](https://github.com/unslothai/unsloth/issues/17638) [Bug] in docker, audio.cpp update fails with "invalid cross-device link" `feature request` `bug`
- [#17614](https://github.com/unslothai/unsloth/issues/17614) [Feature] Unsloth Desktop: Option to not auto-load a model when one isn't selected upon sending a chat. `feature request`
- [#17598](https://github.com/unslothai/unsloth/issues/17598) [Bug] Studio Transcribe: MOSS-Transcribe-Diarize fails on long audio because Studio never sends max_tokens
- [#17573](https://github.com/unslothai/unsloth/issues/17573) [Feature] Update Gemma 4 model family to Unsloth Dynamic UD3.1 `feature request`

#### 🔒 Closed Issues
- [#5291](https://github.com/unslothai/unsloth/issues/5291) [Feature] Port GRPO chunked/hidden-state optimizations to ORPO/DPO/CPO trainers
- [#15767](https://github.com/unslothai/unsloth/issues/15767) [Bug] trouble using opencode models in unsloth desktop
- [#15839](https://github.com/unslothai/unsloth/issues/15839) [Feature Request] Model Archiving/Packing for Cold Storage
- [#17558](https://github.com/unslothai/unsloth/issues/17558) [Bug] DiffusionGemma load by Studio ignores selected context and parallelism settings
- [#315](https://github.com/unslothai/unsloth/issues/315) BurstAttention:An Efficient Distributed Attention Framework for Extremely Long Sequences
- [#16899](https://github.com/unslothai/unsloth/issues/16899) [Feature]: Add "Voice Design" (Prompt-to-Voice creation via text description)
- [#16925](https://github.com/unslothai/unsloth/issues/16925) [Bug] DiffusionGemma multi-GPU: prompts over ~1792 tokens abort the visual server (GGML_ASSERT n_ubatch >= n_tokens)
- [#15260](https://github.com/unslothai/unsloth/issues/15260) [Linux][Desktop] WebKitWebProcess crashes with SIGABRT when AT-SPI / atk-bridge is active (KDE Plasma)
- [#17016](https://github.com/unslothai/unsloth/issues/17016) [Feature] Add a fullscreen mode on the desktop software.

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,186 · **Open issues:** 414 · **Last push:** 1d ago

On November 13, 2026, there were no new releases or merged pull requests for AIBrix, indicating a routine maintenance day. However, two new issues were opened that could spark interest within the community. Issue #3457 pertains to moving CryptoShuffle out of the `pkg/utils` directory and into the fleet routing benchmark, which may improve organization and functionality. Additionally, issue #3461 requests support for vLLM-Omni's `POST /v1/videos/sync` endpoint in the openai_frontend, highlighting ongoing efforts to enhance compatibility with the latest API features.

#### 🐛 New Issues
- [#3457](https://github.com/vllm-project/aibrix/issues/3457) [Misc] Move CryptoShuffle out of pkg/utils into the fleet routing benchmark `good first issue` `area/gateway` `triage/accepted` `kind/feature` 💬4
- [#3461](https://github.com/vllm-project/aibrix/issues/3461) openai_frontend: support vLLM-Omni POST /v1/videos/sync `kind/feature` `area/batch` 💬1

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,460 · **Open issues:** 601 · **Last push:** <1h ago

On November 13, 2026, there were no new releases for Semantic Router. However, several important issues were addressed through merged pull requests, including enhancements to the Router Replay mechanism aimed at optimizing prompt checks and improving GPU placement metrics. Notably, fixes were made to align the v0.3 AutoMix documentation with established contracts and to refine caching behavior in response to usage extensions with DeepSeek prompts. A new significant issue raised involves making PR-to-merge times more predictable and addressing CI stalls, indicating ongoing efforts to streamline development processes. Overall, the day largely consisted of routine maintenance, but the attention to CI and operational efficiency remains a focal point.

#### ✅ Merged PRs
- [#5964](https://github.com/vllm-project/semantic-router/pull/5964) [Bug] Report the item metadata a streamed Responses reply drops
- [#5265](https://github.com/vllm-project/semantic-router/pull/5265) [Bug] Accept DeepSeek prompt cache token usage extensions
- [#5250](https://github.com/vllm-project/semantic-router/pull/5250) [Bug] Align v0.3 AutoMix docs with the six-field contract and guard against drift
- [#5322](https://github.com/vllm-project/semantic-router/pull/5322) [Bug] Count MemAvailable for integrated-GPU placement
- [#6403](https://github.com/vllm-project/semantic-router/pull/6403) [Bug] Let the measured pace alone decide Router Replay's prompt check once there is one
- [#6402](https://github.com/vllm-project/semantic-router/pull/6402) [Bug] Read a guard re-read due at once ahead of every window not yet sent, whatever rules share the deployment
- [#6244](https://github.com/vllm-project/semantic-router/pull/6244) [Bug] Bound request-named metric labels and read every image an input.image rule needs
- [#6243](https://github.com/vllm-project/semantic-router/pull/6243) [Bug] Apply the tools plugin on Looper decisions and to hosted tools, and keep a response-cache invalidate to one partition
- [#6241](https://github.com/vllm-project/semantic-router/pull/6241) [Bug] Bound standalone bodies, identity headers, cache entries and rate-limit buckets

#### 🐛 New Issues
- [#6383](https://github.com/vllm-project/semantic-router/issues/6383) [Epic] Make PR-to-merge time predictable and alert on CI stalls `enhancement` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬3
- [#6394](https://github.com/vllm-project/semantic-router/issues/6394) [Bug] Router Replay's prompt check re-reads every prompt after routing and slows the next requests' guard scans `accepted` `wg/enterprise-environment` 💬2
- [#6395](https://github.com/vllm-project/semantic-router/issues/6395) [Bug] Behind schedule, re-reads of runs close to their margin go before the runs still to read and undo the re-plan `accepted` `wg/router-models-inference-runtime` 💬2
- [#6389](https://github.com/vllm-project/semantic-router/issues/6389) [Bug] Guard windows grown to fit the deadline dilute an injection below the rule and read hardly more 💬2
- [#6373](https://github.com/vllm-project/semantic-router/issues/6373) [CI/Build] Leave Dashboard frontend lint to the Dashboard lane in CI `accepted` `wg/evaluation-quality` 💬2
- [#6372](https://github.com/vllm-project/semantic-router/issues/6372) [CI/Build] Run the issue title check only when a title can change `accepted` `wg/evaluation-quality` 💬2
- [#6371](https://github.com/vllm-project/semantic-router/issues/6371) [Test] Install the Router beside Envoy Gateway in E2E gateway profiles `accepted` `wg/evaluation-quality` 💬2
- [#6370](https://github.com/vllm-project/semantic-router/issues/6370) [Test] Compare the protocol codec differential bodies once, in parallel `accepted` `wg/evaluation-quality` 💬2
- [#6369](https://github.com/vllm-project/semantic-router/issues/6369) [CI/Build] Reuse the passed automatic checks when /ci run reruns a PR `accepted` `wg/evaluation-quality` 💬2
- [#6368](https://github.com/vllm-project/semantic-router/issues/6368) [CI/Build] Start the CUDA and ROCm image builds after the source checks `accepted` `wg/evaluation-quality` 💬2
- [#6352](https://github.com/vllm-project/semantic-router/issues/6352) [Bug] Flaky evaluation E2E: "Checking Evaluation" loading state races the capability probe `bug` `accepted` `wg/evaluation-quality` 💬2
- [#6400](https://github.com/vllm-project/semantic-router/issues/6400) [Bug] Router Replay skips its prompt check on a partial guard scan that says nothing about the prompt `accepted` `wg/enterprise-environment` 💬1
- [#6399](https://github.com/vllm-project/semantic-router/issues/6399) [Bug] A guard re-read due at once waits behind the input's windows when other guard rules share the deployment `accepted` `wg/router-models-inference-runtime` 💬1
- [#6398](https://github.com/vllm-project/semantic-router/issues/6398) [Feature] Answer a retryable error, not a refusal, when a fail-closed guard signal cannot be read because the decision runtime is overloaded `accepted` `wg/router-models-inference-runtime` 💬1
- [#6322](https://github.com/vllm-project/semantic-router/issues/6322) [Bug] After a fallback, the client gets the first model's 503 instead of the last model's 400 `bug` `accepted` `wg/data-plane-networking` 💬1
- [#6320](https://github.com/vllm-project/semantic-router/issues/6320) [Bug] A request too long for every model is refused only after the 45 s guard scan, as 422 or a relayed backend 400 `bug` `accepted` `wg/data-plane-networking` 💬1
- [#6319](https://github.com/vllm-project/semantic-router/issues/6319) [Bug] Requests that fit a model's context window are refused with 422, depending on what the Router served before `bug` `accepted` `wg/data-plane-networking` 💬1
- [#6362](https://github.com/vllm-project/semantic-router/issues/6362) [Bug] routing_input answers 400 no_route when every user message matches skip_user_messages_matching `bug` `accepted` `wg/mom-routing` 💬1
- [#6361](https://github.com/vllm-project/semantic-router/issues/6361) [Bug] On a 950K-token message the guard reads 41-124 of its 255 windows by the deadline: size the windows to the time left `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#6404](https://github.com/vllm-project/semantic-router/issues/6404) [Bug] Streamed OpenAI Responses replies with a reasoning item fail terminal validation because encrypted_content is re-encrypted per event `needs-acceptance` `wg/data-plane-networking`
- [#6392](https://github.com/vllm-project/semantic-router/issues/6392) [CI] Local Stack E2E: vllm-sr serve fails at the Grafana admin password sync `needs-acceptance`
- [#6386](https://github.com/vllm-project/semantic-router/issues/6386) [Epic] Build a reusable vLLM Semantic Router skills suite for configuration and evaluation `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem` `epic`
- [#6385](https://github.com/vllm-project/semantic-router/issues/6385) [Epic] Evaluate user-owned routing workloads end to end in the local Dashboard `enhancement` `needs-acceptance` `wg/evaluation-quality` `epic`
- [#6365](https://github.com/vllm-project/semantic-router/issues/6365) [Bug] The guard refuses a Messages request that ends with a system message, as Claude Code sends
- [#6381](https://github.com/vllm-project/semantic-router/issues/6381) [Bug] Jailbreak classifier discards user/tool provenance before model evaluation `needs-acceptance`
- [#6380](https://github.com/vllm-project/semantic-router/issues/6380) [Bug] Jailbreak classifier treats omitted non-text user/tool content as fully scanned `needs-acceptance`

#### 🔒 Closed Issues
- [#2946](https://github.com/vllm-project/semantic-router/issues/2946) [Bug] Automix docs advertise 14 YAML parameters but 8 are silently dropped (enable_cascade, verifier_server_url, use_pomdp_router, ...)
- [#3771](https://github.com/vllm-project/semantic-router/issues/3771) [Feature] Pass bounded prior user turns to learned signal backends (continuity as a routing signal)
- [#5963](https://github.com/vllm-project/semantic-router/issues/5963) [Bug] Streamed Responses replies drop tool-call metadata such as async without a diagnostic
- [#5298](https://github.com/vllm-project/semantic-router/issues/5298) [Bug] Model runtime: placement refuses integrated GPUs whose memory is held as page cache
- [#5251](https://github.com/vllm-project/semantic-router/issues/5251) [Bug] Accept DeepSeek prompt cache token usage extensions in chat completions
- [#6239](https://github.com/vllm-project/semantic-router/issues/6239) [Bug] Looper decisions skip the tools policy, mode none keeps hosted tools, and a cache invalidate without a partition clears everything
- [#6238](https://github.com/vllm-project/semantic-router/issues/6238) [Bug] Unknown model names open unbounded metric series, and an image rule answers on text alone when it cannot read the image
- [#6237](https://github.com/vllm-project/semantic-router/issues/6237) [Bug] The standalone listener, identity headers, the response cache and rate limiting hold state without bound
- [#6394](https://github.com/vllm-project/semantic-router/issues/6394) [Bug] Router Replay's prompt check re-reads every prompt after routing and slows the next requests' guard scans
- [#6395](https://github.com/vllm-project/semantic-router/issues/6395) [Bug] Behind schedule, re-reads of runs close to their margin go before the runs still to read and undo the re-plan
- [#6389](https://github.com/vllm-project/semantic-router/issues/6389) [Bug] Guard windows grown to fit the deadline dilute an injection below the rule and read hardly more
- [#6373](https://github.com/vllm-project/semantic-router/issues/6373) [CI/Build] Leave Dashboard frontend lint to the Dashboard lane in CI
- [#6372](https://github.com/vllm-project/semantic-router/issues/6372) [CI/Build] Run the issue title check only when a title can change
- [#6371](https://github.com/vllm-project/semantic-router/issues/6371) [Test] Install the Router beside Envoy Gateway in E2E gateway profiles
- [#6370](https://github.com/vllm-project/semantic-router/issues/6370) [Test] Compare the protocol codec differential bodies once, in parallel
- [#6369](https://github.com/vllm-project/semantic-router/issues/6369) [CI/Build] Reuse the passed automatic checks when /ci run reruns a PR
- [#6368](https://github.com/vllm-project/semantic-router/issues/6368) [CI/Build] Start the CUDA and ROCm image builds after the source checks
- [#6352](https://github.com/vllm-project/semantic-router/issues/6352) [Bug] Flaky evaluation E2E: "Checking Evaluation" loading state races the capability probe
- [#6305](https://github.com/vllm-project/semantic-router/issues/6305) [Test] Two Router tests fail when a short readiness wait runs out on a busy runner
- [#6285](https://github.com/vllm-project/semantic-router/issues/6285) [CI/Build] A Router request-path change runs no E2E
- [#6284](https://github.com/vllm-project/semantic-router/issues/6284) [Test] Coding-agent tool-output guards are checked on buffered Chat only
- [#6283](https://github.com/vllm-project/semantic-router/issues/6283) [Bug] A tool result the Router cannot read as text passes guards that read tool results
- [#6282](https://github.com/vllm-project/semantic-router/issues/6282) [Test] E2E profiles download real models for cases that test none
- [#6281](https://github.com/vllm-project/semantic-router/issues/6281) [Test] The pii-remote-backend E2E still relies on the old on_unscanned default
- [#6271](https://github.com/vllm-project/semantic-router/issues/6271) [Bug] The catalog snapshot test fails on a machine that signs git tags
- [#6264](https://github.com/vllm-project/semantic-router/issues/6264) [Test] E2E cases have no priority to scope a run by
- [#6263](https://github.com/vllm-project/semantic-router/issues/6263) [Test] Nothing sends the vSR plugin's decision requests to its runtime
- [#6262](https://github.com/vllm-project/semantic-router/issues/6262) [Test] No E2E covers masking or session protection on coding-agent traffic
- [#6400](https://github.com/vllm-project/semantic-router/issues/6400) [Bug] Router Replay skips its prompt check on a partial guard scan that says nothing about the prompt
- [#6399](https://github.com/vllm-project/semantic-router/issues/6399) [Bug] A guard re-read due at once waits behind the input's windows when other guard rules share the deployment
- [#6322](https://github.com/vllm-project/semantic-router/issues/6322) [Bug] After a fallback, the client gets the first model's 503 instead of the last model's 400
- [#6320](https://github.com/vllm-project/semantic-router/issues/6320) [Bug] A request too long for every model is refused only after the 45 s guard scan, as 422 or a relayed backend 400
- [#6319](https://github.com/vllm-project/semantic-router/issues/6319) [Bug] Requests that fit a model's context window are refused with 422, depending on what the Router served before
- [#6362](https://github.com/vllm-project/semantic-router/issues/6362) [Bug] routing_input answers 400 no_route when every user message matches skip_user_messages_matching
- [#6361](https://github.com/vllm-project/semantic-router/issues/6361) [Bug] On a 950K-token message the guard reads 41-124 of its 255 windows by the deadline: size the windows to the time left
- [#6365](https://github.com/vllm-project/semantic-router/issues/6365) [Bug] The guard refuses a Messages request that ends with a system message, as Claude Code sends

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*