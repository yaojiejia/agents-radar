# 📡 AI Ecosystem Digest — 2026-10-20

> Generated 2026-10-20 01:37 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 152,670 | 28 | 1 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 129,944 | 13 | 0 | 50 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,458 | 0 | 0 | 2 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,276 | 10 | 2 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 217,850 | 5 | 42 | 6 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,586 | 39 | 14 | 10 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 392,674 | 188 | 96 | 70 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 255,285 | 28 | 1 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 94,160 | 20 | 36 | 46 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 37,448 | 19 | 14 | 45 | 1 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 131,738 | 23 | 12 | 25 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 183,875 | 12 | 3 | 3 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 61,592 | 21 | 27 | 105 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,276 | 8 | 63 | 106 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,152 | 11 | 5 | 12 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,219 | 16 | 1 | 3 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.304](https://github.com/anthropics/claude-code/releases/tag/v2.1.304), addressing several user feedback and bug reports.
- **OpenAI Codex** merged the PR [#55413](https://github.com/openai/codex/pull/55413), enhancing runtime authentication across requests for improved user experience.
- **vLLM** experienced significant activity with the new issue [#62383](https://github.com/vllm-project/vllm/issues/62383) reporting a crash due to a memory access violation, which has drawn considerable attention with 7 comments.
- **Qwen Code** released multiple versions, including [v0.25.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.3), while also addressing critical bugs in its desktop application.
- The **OpenClaw** project is dealing with several high-traffic issues, notably [#177707](https://github.com/openclaw/openclaw/issues/177707), which reports a disk filling bug during updates, attracting 5 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 152,670 · **Open issues:** 15,345 · **Last push:** 2h ago

On October 20, 2026, Claude Code released version v2.1.304, which introduced several key updates including a transcript line for plugins that skip mod hooks, the addition of `decider: "person"` to mod's `tool.check` answers for permission approvals, and the inclusion of `e.isReadOnly` in the `tool.check` event for better context. There were no merged pull requests in the last 24 hours, but the issue tracker saw new reports of a runaway polling loop in Opus 5.5, causing premature session exhaustion, as well as a significant spike in Claude Code usage on Max 5x. Other notable issues reported include sign-in failures with permission errors on macOS and Linux, and UX concerns regarding the permission prompt management.

#### 🚀 New Releases
- [v2.1.304](https://github.com/anthropics/claude-code/releases/tag/v2.1.304) v2.1.304

#### 🐛 New Issues
- [#103406](https://github.com/anthropics/claude-code/issues/103406) BUG REPORT: Runaway Opus 5.5 polling loop & premature 5-hour session exhaustion ($4.88 / 195 requests for 32 LOC) `bug` `platform:linux` `area:cost` `area:agents` 💬2
- [#103437](https://github.com/anthropics/claude-code/issues/103437) [BUG] Sudden massive increase in Claude Code usage consumption on Max 5x since mid-October 2026 `bug` `platform:macos` `area:cost` 💬2
- [#103625](https://github.com/anthropics/claude-code/issues/103625) [BUG] Sign-in fails with permission_error / sign_in_not_permitted from verify_magic_link on macOS and Linux `bug` `platform:macos` `platform:linux` `area:auth` 💬1
- [#103624](https://github.com/anthropics/claude-code/issues/103624) is totally useless, basically orchestrator do nothing, asking constantly everyt… `bug` `area:agents` `area:permissions` `needs-repro` 💬1
- [#103615](https://github.com/anthropics/claude-code/issues/103615) Permission prompt UX: "Always Allow" is one click, one-time "Allow" is buried in a dropdown, and "Always Allow" silently escalates session permission mode `bug` `area:tui` `area:permissions` 💬1
- [#103610](https://github.com/anthropics/claude-code/issues/103610) [BUG] Projects + Remote Control: messages between the project thread and the Remote Control session are lost or delayed in both directions `bug` `platform:macos` `area:cowork` 💬1
- [#103503](https://github.com/anthropics/claude-code/issues/103503) [BUG] Scripted text replacement bounded by the next top-level def silently deleted 17 unrelated test functions `bug` `platform:macos` `area:model` `data-loss` 💬1
- [#103623](https://github.com/anthropics/claude-code/issues/103623) [Bug] Sonnet 5.5 blocked by safeguards despite active Cyber Verification Program `duplicate` `platform:linux` `area:model` `area:security`
- [#103622](https://github.com/anthropics/claude-code/issues/103622) [Bug] Cyber safeguard false positive on routine git polling downgrades Opus 5.5 to Opus 4.8 `bug` `platform:windows` `area:model` `area:security`
- [#103621](https://github.com/anthropics/claude-code/issues/103621) Background subagent stops on network error (ENOTFOUND) and never retries or resumes after network returns `bug` `has repro` `platform:macos` `area:agents`
- [#103620](https://github.com/anthropics/claude-code/issues/103620) Remote Control mobile app: terminal-style output detail levels (off / low / med / full) and a split view with a live terminal pane `enhancement` `area:tui` `platform:android`
- [#103619](https://github.com/anthropics/claude-code/issues/103619) [FEATURE] Remote Control (mobile): let the user answer an AskUserQuestion card in the normal chat box, with voice `enhancement` `platform:linux` `platform:wsl` `area:ui`
- [#103618](https://github.com/anthropics/claude-code/issues/103618) [Bug] False positive bio safeguard triggered in cryptography project `bug` `platform:macos` `area:model`
- [#103617](https://github.com/anthropics/claude-code/issues/103617) [Bug] /mcp lists plugin mod-registered tools under "Built-in" server named after plugin `bug` `platform:macos` `area:mcp` `area:plugins`
- [#103616](https://github.com/anthropics/claude-code/issues/103616) [Bug] Claude Code generates excessive comments, inflating code and token usage `duplicate` `platform:windows` `area:model`
- [#103614](https://github.com/anthropics/claude-code/issues/103614) Fullscreen TUI: split mouse/focus reports are inserted into the prompt as text (`^[[<35;5;7M`, `^[[I`) `bug` `has repro` `platform:macos` `area:tui`
- [#103613](https://github.com/anthropics/claude-code/issues/103613) [FEATURE] Slash autocomplete: list /remote-control before /remote-env when typing /remote `enhancement` `platform:linux` `area:cli`
- [#103612](https://github.com/anthropics/claude-code/issues/103612) [Bug] Unexpected permission prompt when accessing user's own model `bug` `platform:windows` `needs-info` `area:permissions`
- [#103611](https://github.com/anthropics/claude-code/issues/103611) [Bug] False Positive Cybersecurity Flag Triggered Without Cause `bug` `platform:macos` `area:model` `area:security`
- [#103609](https://github.com/anthropics/claude-code/issues/103609) [Bug] Page Up/Page Down scroll input history instead of conversation by default `bug` `platform:linux` `area:tui` `keybindings`
- [#103607](https://github.com/anthropics/claude-code/issues/103607) [BUG] Claude Desktop: Code tab sidebar no longer lists scheduled routine sessions after auto-update to 2.42304.2 (Windows 11); data intact `bug` `platform:windows` `area:desktop` `area:routines`
- [#103608](https://github.com/anthropics/claude-code/issues/103608) [FEATURE] claude.ai: restore one-click local upload (+ > "Upload or add files" now opens a Drive picker first) `invalid`
- [#103606](https://github.com/anthropics/claude-code/issues/103606) [BUG] Desktop 2.42304.2 (macOS): Outputs section removed from session panel - no UI access to session-generated files `invalid`
- [#103605](https://github.com/anthropics/claude-code/issues/103605) SubagentHandback is accepted while the subagent's own background children are still running, so the parent sees an unfinished subagent as done `bug` `has repro` `platform:linux` `area:agents`
- [#103604](https://github.com/anthropics/claude-code/issues/103604) not uploading document or even simple instruction `bug` `needs-info` `needs-repro`
- [#103603](https://github.com/anthropics/claude-code/issues/103603) [MODEL] Left a schedule row saying "in progress" after the pull request it named merged `bug` `area:model`
- [#103602](https://github.com/anthropics/claude-code/issues/103602) the thread ignore the folder instructions to deploy sub-agents for implementati… `bug` `area:agents` `area:claude-code-web` `needs-repro`
- [#103601](https://github.com/anthropics/claude-code/issues/103601) [GitHub integration] `invalid` `github-integration`

#### 🔒 Closed Issues
- [#103406](https://github.com/anthropics/claude-code/issues/103406) BUG REPORT: Runaway Opus 5.5 polling loop & premature 5-hour session exhaustion ($4.88 / 195 requests for 32 LOC)

### OpenAI Codex (`openai/codex`)

**Stars:** 129,944 · **Open issues:** 23,560 · **Last push:** <1h ago

On October 20, 2026, the OpenAI Codex project released three alpha versions of Rust: 0.164.0-alpha.6, 0.164.0-alpha.5, and 0.164.0-alpha.4. Among the 20 merged pull requests, notable updates included the enhancement of runtime authentication handling across requests (#55413), improved rendering of asynchronous question prompts in the TUI as Markdown (#55411), and the introduction of ephemeral runtime registration for signed assertions (#55402). Additionally, a significant new issue was reported related to the Codex App sandbox failing to execute commands on Windows, which has already drawn attention from multiple users (#55230).

#### 🚀 New Releases
- [rust-v0.164.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.6) 0.164.0-alpha.6
- [rust-v0.164.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.5) 0.164.0-alpha.5
- [rust-v0.164.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.4) 0.164.0-alpha.4

#### ✅ Merged PRs
- [#55413](https://github.com/openai/codex/pull/55413) Share runtime authentication across requests and credential refreshes
- [#55411](https://github.com/openai/codex/pull/55411) Render async question prompts as Markdown in the TUI
- [#55410](https://github.com/openai/codex/pull/55410) Track credential sources separately from auth owners
- [#55409](https://github.com/openai/codex/pull/55409) Retry TUI startup after a server shutdown refusal
- [#55407](https://github.com/openai/codex/pull/55407) Clarify API key login and status messages
- [#55406](https://github.com/openai/codex/pull/55406) Trace harness-side Noise handshake failures
- [#55402](https://github.com/openai/codex/pull/55402) Add ephemeral runtime registration and signed assertions
- [#55401](https://github.com/openai/codex/pull/55401) Defer environment disconnect notifications until recovery fails
- [#55398](https://github.com/openai/codex/pull/55398) Add wire types for runtime agent registration
- [#55397](https://github.com/openai/codex/pull/55397) Record OAuth provenance and login identity for account tokens
- [#55396](https://github.com/openai/codex/pull/55396) Prefetch sibling rollout paths when reading history pages
- [#55395](https://github.com/openai/codex/pull/55395) Roll back interrupted Guardian reviews to preserve evidence
- [#55394](https://github.com/openai/codex/pull/55394) Use thread connections for enterprise MCP status listings
- [#55391](https://github.com/openai/codex/pull/55391) Deduplicate native agent messages in Guardian review context
- [#55388](https://github.com/openai/codex/pull/55388) Mark `transcript_v2` as removed
- [#55387](https://github.com/openai/codex/pull/55387) Add support for Academic Researchers plans
- [#55384](https://github.com/openai/codex/pull/55384) Reject replaceable symlinks in pre-sandbox executable lookup
- [#55381](https://github.com/openai/codex/pull/55381) Manage TUI backend sessions independently
- [#55380](https://github.com/openai/codex/pull/55380) Preserve thread metadata before rollout files are materialized
- [#55379](https://github.com/openai/codex/pull/55379) Handle response body failures in OpenAI docs downloads
- [#55378](https://github.com/openai/codex/pull/55378) Migrate the Windows MXC sandbox to `mxc-sdk`
- [#55375](https://github.com/openai/codex/pull/55375) Add configured thread environment inheritance for subagents
- [#55372](https://github.com/openai/codex/pull/55372) Fix recall of command-line initial prompts in the TUI
- [#55368](https://github.com/openai/codex/pull/55368) Enable incremental tools by default for Responses Lite
- [#55366](https://github.com/openai/codex/pull/55366) Support catalog templates for approved command prefixes
- [#55365](https://github.com/openai/codex/pull/55365) Import only the continuation of backgrounded Claude sessions
- [#55358](https://github.com/openai/codex/pull/55358) Add a shared cleanup lock guard for local log directories
- [#55357](https://github.com/openai/codex/pull/55357) Prepare skill catalogs before building step tools
- [#55355](https://github.com/openai/codex/pull/55355) Remove the long-thread accuracy warning after compaction
- [#55351](https://github.com/openai/codex/pull/55351) Reduce path storage in the file-search index
- [#55347](https://github.com/openai/codex/pull/55347) Add Guardian retry metrics and preserve turn attribution
- [#55342](https://github.com/openai/codex/pull/55342) Consolidate cached and fetched Codex manual handling
- [#55339](https://github.com/openai/codex/pull/55339) Add experimental `thread/sample` requests to the app server
- [#55334](https://github.com/openai/codex/pull/55334) Enable enterprise-managed authorization for MCP connections
- [#55331](https://github.com/openai/codex/pull/55331) Use step environment snapshots for subagent inheritance
- [#55330](https://github.com/openai/codex/pull/55330) Expose skill installations and stabilize package aliases
- [#55327](https://github.com/openai/codex/pull/55327) Add configured thread environment inheritance for subagents
- [#55324](https://github.com/openai/codex/pull/55324) Remove thread title generation spinners from the TUI
- [#55322](https://github.com/openai/codex/pull/55322) Integrate discovery V2 with step-scoped skill catalogs
- [#55320](https://github.com/openai/codex/pull/55320) Enable GitHub Actions OIDC authentication in the Responses API proxy
- [#55304](https://github.com/openai/codex/pull/55304) Reject TUI events from a different backend
- [#55303](https://github.com/openai/codex/pull/55303) Route skill reads by alias source
- [#55302](https://github.com/openai/codex/pull/55302) Stop the closest remote SHA search at zero distance
- [#55301](https://github.com/openai/codex/pull/55301) Reconcile V2 executor plugins with cloud catalogs
- [#55300](https://github.com/openai/codex/pull/55300) Add one-shot app-server startup configuration discovery
- [#55299](https://github.com/openai/codex/pull/55299) Refresh rejected proxy credentials and back off failed renewals
- [#55298](https://github.com/openai/codex/pull/55298) Add renewable federated auth primitives to the Responses API proxy
- [#55297](https://github.com/openai/codex/pull/55297) Add GitHub Actions OIDC token acquisition to the responses API proxy
- [#55296](https://github.com/openai/codex/pull/55296) Encapsulate Responses API proxy authentication
- [#55293](https://github.com/openai/codex/pull/55293) Keep only the latest adjacent reasoning effort update in requests

#### 🐛 New Issues
- [#55230](https://github.com/openai/codex/issues/55230) [Windows] Codex App sandbox fails to execute commands (HRESULT 0x80070020) `bug` `windows-os` `sandbox` `app` 💬3
- [#55404](https://github.com/openai/codex/issues/55404) Windows: Sites blocked because sandbox_approval is false `bug` `windows-os` `sandbox` `tool-calls` 💬2
- [#55417](https://github.com/openai/codex/issues/55417) [Windows][Desktop] Identical codex-app-tools refresh fails with unlink EBUSY during Local Work startup `bug` `windows-os` `app` `skills` 💬1
- [#55416](https://github.com/openai/codex/issues/55416) Daily repeated desktop disconnections, 12+ failures per day blocking client work `bug` `app` `connectivity` 💬1
- [#55362](https://github.com/openai/codex/issues/55362) [macOS][Desktop] Settings → File viewers always shows “Couldn’t load file handlers”; Retry does nothing `bug` `app` 💬1
- [#55415](https://github.com/openai/codex/issues/55415) Safety check blocks authorized local UI automation test in Codex CLI `bug` `windows-os` `mcp` `CLI` 💬1
- [#55414](https://github.com/openai/codex/issues/55414) Agent repeatedly over-engineers and fails to converge: roughly 24 hours on an API URL migration `bug` `model-behavior` `app` 💬1
- [#55408](https://github.com/openai/codex/issues/55408) [Windows][Dots][Auto-review] Delegated notification consent rejected as untrusted, requiring repeated direct authorization `bug` `windows-os` `sandbox` `app` 💬1
- [#55405](https://github.com/openai/codex/issues/55405) [CLI 0.163.0] Daybreak Blue session blocked by cyber_policy when starting a new campaign `bug` `CLI` `safety-check` 💬1
- [#55420](https://github.com/openai/codex/issues/55420) File preview does not detect language from shebang `bug` `app`
- [#55419](https://github.com/openai/codex/issues/55419) ChatGPT Chrome Web Store listing has a broken support link `documentation`
- [#55418](https://github.com/openai/codex/issues/55418) ChatGPT browser extension loops between session expired and login: SameSite=Lax epoch cookie unavailable to embedded JavaScript `bug` `auth`
- [#55412](https://github.com/openai/codex/issues/55412) [Dots] GitHub connector `create_tree` approval prompt loops forever and the session hangs `bug` `tool-calls` `app` `dots`

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,458 · **Open issues:** 753 · **Last push:** <1h ago

On October 20, 2026, Gemini CLI released version v0.66.0-nightly.20261020.g76e4d7c04, which introduced important fixes aimed at enhancing user experience. Notably, the UI has been improved to preserve terminal scrollback during viewport refreshes, addressing a common usability concern. Additionally, the CLI now decodes streamed Node HTTP activity chunks with StringDecoder to provide better handling of data streams. There were no new issues reported today, indicating a smooth operational day for the Gemini CLI team.

#### 🚀 New Releases
- [v0.66.0-nightly.20261020.g76e4d7c04](https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0-nightly.20261020.g76e4d7c04) Release v0.66.0-nightly.20261020.g76e4d7c04

#### ✅ Merged PRs
- [#29827](https://github.com/google-gemini/gemini-cli/pull/29827) fix(cli): decode streamed Node HTTP activity chunks with StringDecoder
- [#29792](https://github.com/google-gemini/gemini-cli/pull/29792) fix(ui): preserve terminal scrollback during viewport refreshes

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,276 · **Open issues:** 2,225 · **Last push:** 4h ago

On October 20, 2026, GitHub Copilot CLI released version 1.0.101-0, introducing native structured output for dynamic workflow subagents on supported models and an assistedApprovalInstructions setting to aid in Assisted Permissions confirmation decisions. Additionally, this update addressed shared MCP authentication errors related to client sign-in settings and fixed a critical bug where switching from GPT models to Gemini would fail under specific conditions. Notable new issues reported include #5192, which highlights that the MCP OAuth token is not persisting after sign-in, leading to repeated browser sessions, as well as #5194, where copilot plugin updates fail on Windows while sessions are active. Overall, it was a day marked by significant updates and emerging issues that warrant attention.

#### 🚀 New Releases
- [v1.0.101-0](https://github.com/github/copilot-cli/releases/tag/v1.0.101-0) 1.0.101-0
- [v1.0.100](https://github.com/github/copilot-cli/releases/tag/v1.0.100) 1.0.100

#### 🐛 New Issues
- [#5192](https://github.com/github/copilot-cli/issues/5192) ACP mode: MCP OAuth token is never persisted after successful sign-in — every new session re-opens the browser `triage` 💬1
- [#5194](https://github.com/github/copilot-cli/issues/5194) Windows: copilot plugin update fails with os error 5 while any CLI session is running 💬1
- [#5189](https://github.com/github/copilot-cli/issues/5189) /clear shouldn't change the model being used `triage`
- [#5197](https://github.com/github/copilot-cli/issues/5197) Voice server segfaults (signal 11) on WSL2 after updating to 1.0.100; /voice stuck on 'Fetching voice models' `triage`
- [#5196](https://github.com/github/copilot-cli/issues/5196) File links not clickable in VS Code Remote-SSH terminal (Windows client, macOS remote): UriError / file not found `triage`
- [#5195](https://github.com/github/copilot-cli/issues/5195) Selecting a custom agent disables deferred MCP tool loading from the second model call (all MCP tools loaded into context) `triage`
- [#5193](https://github.com/github/copilot-cli/issues/5193) Document COPILOT_AGENT_SESSION_ID for stdio MCP servers, and give MCP servers a supported way to read the effective sandbox policy `triage`
- [#5191](https://github.com/github/copilot-cli/issues/5191) tool_search_tool - child agent MCP tool discovery appears scoped to parent’s tools `triage`
- [#5190](https://github.com/github/copilot-cli/issues/5190) Automode's Task complete feature hides model output `triage`
- [#5188](https://github.com/github/copilot-cli/issues/5188) [Bug]: Ctrl+G external-editor failure can silently discard saved prompt text `triage`

#### 🔒 Closed Issues
- [#5105](https://github.com/github/copilot-cli/issues/5105) macOS sandbox blocks Gradle daemon connection despite local networking being allowed
- [#5194](https://github.com/github/copilot-cli/issues/5194) Windows: copilot plugin update fails with os error 5 while any CLI session is running

### OpenCode (`anomalyco/opencode`)

**Stars:** 217,850 · **Open issues:** 4,309 · **Last push:** <1h ago

On October 20, 2026, there were no new releases for OpenCode, but several important changes were merged. Notable fixes included the removal of the channel logo from the titlebar (#57238), adjustments to the user interface like positioning the sidebar channel icon under macOS traffic lights (#57235), and making links in user messages clickable (#57211). Additionally, a significant refactor addressed the removal of recent elements from compaction messages and events (#57203). Among the new issues, the urgent report (#57243) regarding the desktop application merging all projects into one view without an option to restore per-project windows is drawing immediate attention.

#### ✅ Merged PRs
- [#57238](https://github.com/anomalyco/opencode/pull/57238) fix(app): remove channel logo from titlebar
- [#57235](https://github.com/anomalyco/opencode/pull/57235) fix(app): put the sidebar channel icon under the macOS traffic lights
- [#57203](https://github.com/anomalyco/opencode/pull/57203) refactor(schema): remove recent from compaction messages and events
- [#57227](https://github.com/anomalyco/opencode/pull/57227) fix(tui): color the selected file in the diff tree
- [#57166](https://github.com/anomalyco/opencode/pull/57166) feat(console): drop enterprise form spam before it reaches Salesforce
- [#57211](https://github.com/anomalyco/opencode/pull/57211) fix(app): make links in user messages clickable

#### 🐛 New Issues
- [#57092](https://github.com/anomalyco/opencode/issues/57092) client: session.sync replaces unchanged sessions, re-sorting the list and notifying all consumers `reproduced` 💬2
- [#56950](https://github.com/anomalyco/opencode/issues/56950) tui: approval prompt decision payload missing decision key `triaging` 💬2
- [#57243](https://github.com/anomalyco/opencode/issues/57243) URGENT: Desktop merges all projects into one view - no option to restore per-project windows `pending close` `triaging` 💬1
- [#57240](https://github.com/anomalyco/opencode/issues/57240) agent: empty <conversation-checkpoint> replies after compaction/revert are marked succeeded (no tools, no output) 💬1
- [#57244](https://github.com/anomalyco/opencode/issues/57244) codemode: Uint8Array.from ignores its mapper and thisArg

#### 🔒 Closed Issues
- [#6152](https://github.com/anomalyco/opencode/issues/6152) [FEATURE]: Session context usage (similar to /context in Claude)
- [#266](https://github.com/anomalyco/opencode/issues/266) gemini doesn't handle edit tool very well
- [#43295](https://github.com/anomalyco/opencode/issues/43295) Web UI V2 prompt controls overlap the send button on narrow displays
- [#56371](https://github.com/anomalyco/opencode/issues/56371) Requests always timeout on opencode cli
- [#42501](https://github.com/anomalyco/opencode/issues/42501) [Bug] Mouse wheel dead in the TUI inside the VS Code integrated terminal since 1.105, root cause is xterm not opencode
- [#40236](https://github.com/anomalyco/opencode/issues/40236) Payment successful via Stripe, Go subscription not activated, 500 error followed by Uncaught Client Exception
- [#40146](https://github.com/anomalyco/opencode/issues/40146) Turns truncated at the output limit are recorded as normal completions
- [#44857](https://github.com/anomalyco/opencode/issues/44857) tui: clipboard-pasted text lands with multi-second delay in question dialog answer field
- [#38570](https://github.com/anomalyco/opencode/issues/38570) Limit calculation bug: 47% consumed but only $1.50 used
- [#44092](https://github.com/anomalyco/opencode/issues/44092) core(v2): "unknown finish reason" error omits raw provider finish_reason
- [#39989](https://github.com/anomalyco/opencode/issues/39989) [Billing/Subscription] Active OpenCode Go subscription not recognized
- [#44873](https://github.com/anomalyco/opencode/issues/44873) Global font setting does not apply to the input box
- [#56912](https://github.com/anomalyco/opencode/issues/56912) Top-level "policies" array is silently ignored; only experimental.policies is read (v2.0.26)
- [#56916](https://github.com/anomalyco/opencode/issues/56916) [Bug]: False positive IP abuse detection blocking free models when not using VPN/Proxy
- [#44673](https://github.com/anomalyco/opencode/issues/44673) Keybinds docs are missing 32 of the 184 defined keybinds
- [#45215](https://github.com/anomalyco/opencode/issues/45215) perf: bound instance SSE subscriber queues
- [#44851](https://github.com/anomalyco/opencode/issues/44851) OpenCode Go subscription not activated after successful renewal payment
- [#44847](https://github.com/anomalyco/opencode/issues/44847) OpenCode Zen muse-spark-1.2-contributor-free suddenly returns HTTP 500 with OpenAI-compatible provider
- [#43609](https://github.com/anomalyco/opencode/issues/43609) Usage percentage appears to be significantly higher than actual model cost
- [#41064](https://github.com/anomalyco/opencode/issues/41064) [FEATURE]: 想要左侧竖向的会话列表，像codex那样 0.0
- [#45562](https://github.com/anomalyco/opencode/issues/45562) references: Git branches are not refreshed when an existing reference is attached
- [#44975](https://github.com/anomalyco/opencode/issues/44975) v2: duplicate plugin ID hangs the server — activation defect never opens readiness latch
- [#44931](https://github.com/anomalyco/opencode/issues/44931) subagent: background subagents hang silently on repeated upstream 429s; no error or completion notification surfaces
- [#45185](https://github.com/anomalyco/opencode/issues/45185) grep tool searches the whole parent directory when path points to a file
- [#44578](https://github.com/anomalyco/opencode/issues/44578) TUI crash: Object.entries requires that input parameter not be null or undefined
- [#44920](https://github.com/anomalyco/opencode/issues/44920) v2: deferred plugin transform failure leaves readiness latch closed and bricks catalog
- [#45231](https://github.com/anomalyco/opencode/issues/45231) plugin docs list three hooks as subscribable events
- [#44751](https://github.com/anomalyco/opencode/issues/44751) Docs: hidden is documented as subagent-only, but the TUI applies it to every mode
- [#43940](https://github.com/anomalyco/opencode/issues/43940) Gemini reuses tool call IDs (tool_0), colliding in the global job registry and hanging shell tool calls forever
- [#43553](https://github.com/anomalyco/opencode/issues/43553) tui: cannot close tab for active conversation — tab reappears after clicking X
- [#43267](https://github.com/anomalyco/opencode/issues/43267) diff: add configurable half-page scrolling keybindings
- [#43585](https://github.com/anomalyco/opencode/issues/43585) GitHub Copilot compatibility issue with streaming responses containing empty choices chunks
- [#57092](https://github.com/anomalyco/opencode/issues/57092) client: session.sync replaces unchanged sessions, re-sorting the list and notifying all consumers
- [#56950](https://github.com/anomalyco/opencode/issues/56950) tui: approval prompt decision payload missing decision key
- [#56610](https://github.com/anomalyco/opencode/issues/56610) [BUG]: 19 locale dictionaries carry 116 entries for key families English no longer defines
- [#56180](https://github.com/anomalyco/opencode/issues/56180) TUI: util/error.ts tagged/name duplicate logic
- [#45548](https://github.com/anomalyco/opencode/issues/45548) opencode2: auto-update only triggers on second launch when background server is already running
- [#44239](https://github.com/anomalyco/opencode/issues/44239) desktop (beta): DrizzleError "Failed to run the query 'begin'" uncaught exception on every app quit
- [#45232](https://github.com/anomalyco/opencode/issues/45232) tool_output config option is undocumented
- [#44082](https://github.com/anomalyco/opencode/issues/44082) TUI crash: undefined is not an object (evaluating 'D().unread[B]')
- [#44421](https://github.com/anomalyco/opencode/issues/44421) [BUG]: Open project dialog does not scroll with touch
- [#44335](https://github.com/anomalyco/opencode/issues/44335) docs: internal links target missing or incorrect anchors

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,586 · **Open issues:** 1,951 · **Last push:** <1h ago

On October 20, 2026, Qwen Code released version 0.25.3, which introduced optional model-generated layouts to the Test Failure Explorer, enhancing usability with validation and fallback options. The nightly build v0.25.3-nightly.20261019 included support for session-targeted Skill and Extension refresh, along with several bug fixes aimed at improving performance. Merged pull requests featured significant contributions, such as indexing managed Session history reads and compacting managed activation journals. Additionally, a new issue was raised regarding a flashing login/token screen on the desktop application, which has attracted some attention from users.

#### 🚀 New Releases
- [v0.25.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.3) Release v0.25.3
- [v0.25.3-nightly.20261019.5dcf7c7cb1](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.3-nightly.20261019.5dcf7c7cb1) Release v0.25.3-nightly.20261019.5dcf7c7cb1
- [sdk-typescript-v0.1.21](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.21) SDK TypeScript Release v0.1.21
- [desktop-v0.25.3](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.25.3) Qwen Code Desktop v0.25.3

#### ✅ Merged PRs
- [#14767](https://github.com/QwenLM/qwen-code/pull/14767) perf(core): Index managed Session history reads
- [#14766](https://github.com/QwenLM/qwen-code/pull/14766) test(managed-agent): Verify private media retention boundaries
- [#14760](https://github.com/QwenLM/qwen-code/pull/14760) fix(core): Compact managed activation and inbox journals
- [#14801](https://github.com/QwenLM/qwen-code/pull/14801) fix(ci): wait 90 minutes for the sdk-java host lock (#14787)
- [#14814](https://github.com/QwenLM/qwen-code/pull/14814) docs(managed-agent): record the FG13f remaining-arm coverage
- [#14590](https://github.com/QwenLM/qwen-code/pull/14590) fix(ci): repair main's Prettier step and deflake the hook-cancel fence test (#14581)
- [#14811](https://github.com/QwenLM/qwen-code/pull/14811) docs(managed-agent): pin the reconcile-before-refusal and the OBJECT_PUT admission
- [#14659](https://github.com/QwenLM/qwen-code/pull/14659) docs(managed-agent): propose bounded retention for session state
- [#14763](https://github.com/QwenLM/qwen-code/pull/14763) fix(managed-agent): Reconcile parked Turn cancels from durable results
- [#14739](https://github.com/QwenLM/qwen-code/pull/14739) feat(serve): add local daemon discovery and control commands

#### 🐛 New Issues
- [#14755](https://github.com/QwenLM/qwen-code/issues/14755) Desktop: login/token screen flashes briefly on every launch before the workspace appears `priority/P3` `type/bug` `category/ui` `scope/web-shell` 💬5
- [#14751](https://github.com/QwenLM/qwen-code/issues/14751) LSP: Config.shutdown() leaves language servers running `priority/P2` `type/bug` `category/core` `status/ready-for-agent` 💬4
- [#14722](https://github.com/QwenLM/qwen-code/issues/14722) Show per-model TTFT and output speed in Web Shell Token Usage (TTFT is currently the whole request for tool-call-only responses) `priority/P2` `type/feature-request` `category/telemetry` `scope/content-generation` 💬4
- [#14699](https://github.com/QwenLM/qwen-code/issues/14699) Main CI failed: Managed Agent gate — HostedSessionRelayFaultGatesIT.fg9bRefusedJournalCommitsHealOnlyThroughTheOriginalCommandOnMySql (+3 more) `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬3
- [#14785](https://github.com/QwenLM/qwen-code/issues/14785) Main CI failed: Managed Agent gate — HostedHookFaultGatesIT.fg13cWorkerKillLeavesTheHookUnknownAndKeepsTheSessionOnMySql (+6 more) `type/bug` `status/ready-for-agent` 💬2
- [#14791](https://github.com/QwenLM/qwen-code/issues/14791) Main CI failed: SDK Java — HostedHookFaultGatesIT.fg13cWorkerKillLeavesTheHookUnknownAndKeepsTheSessionOnMySql (+6 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14807](https://github.com/QwenLM/qwen-code/issues/14807) test(ci): fail-closed no-AK gate membership and collection-resolution guard `priority/P2` `status/blocked` `category/development` `scope/testing` 💬2
- [#14713](https://github.com/QwenLM/qwen-code/issues/14713) Main CI failed: Managed Agent gate — HostedMcpStoreFaultGatesIT.storeRejectDrainedKeepsTheOwnerAndHasNoDrainReceiptOnMySql `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬2
- [#14769](https://github.com/QwenLM/qwen-code/issues/14769) Main CI failed: Qwen Code CI — src/managed-runtime/embedded-harness-scheduler.test.ts > … > does not halt when disposal races the failure th… `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14775](https://github.com/QwenLM/qwen-code/issues/14775) Web Shell: add a session to Split View from the session context menu `priority/P3` `type/feature-request` `category/ui` `roadmap/session-management` 💬2
- [#14759](https://github.com/QwenLM/qwen-code/issues/14759) chore(web-shell): session-recap follow-up (test coverage, robustness, docs) `priority/P3` `category/ui` `scope/testing` `scope/documentation` 💬2
- [#14753](https://github.com/QwenLM/qwen-code/issues/14753) Main CI failed: SDK Java — EventTransportBrokerGate.thePostCommitPathDoesNotRegress (Mockito WrongTypeOfReturnValue) `priority/P2` `type/bug` `category/development` `scope/testing` 💬2
- [#14742](https://github.com/QwenLM/qwen-code/issues/14742) follow-up(#14545): size-telemetry signal gaps from the final self-review `priority/P2` `type/bug` `category/telemetry` `scope/metrics` 💬2
- [#14787](https://github.com/QwenLM/qwen-code/issues/14787) Main CI failed: Managed Agent gate on c64163bcea58 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#14779](https://github.com/QwenLM/qwen-code/issues/14779) Main CI failed: Managed Agent gate — DurableLocalProcessRuntimeProvisionerTest.failedSpawnDoesNotRetryReconciliationForever (+1 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬1
- [#14789](https://github.com/QwenLM/qwen-code/issues/14789) Main CI failed: Managed Agent gate — HostedHookFaultGatesIT.fg13cWorkerKillLeavesTheHookUnknownAndKeepsTheSessionOnMySql (+5 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#14782](https://github.com/QwenLM/qwen-code/issues/14782) Main CI failed: Managed Agent gate — HostedSessionRelayFaultGatesIT.fg9bRefusedJournalCommitsHealOnlyThroughTheOriginalCommandOnMySql (+6 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#14780](https://github.com/QwenLM/qwen-code/issues/14780) Main CI failed: E2E Tests — interactive/workflow-completion.test.ts > … > delivers 'WORKFLOW_MODEL_RESULT_12176' once (+1 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬1
- [#14809](https://github.com/QwenLM/qwen-code/issues/14809) Main CI failed: Managed Agent gate — HttpRuntimeTransportTest.exchangesToolV3WithTheRealTypeScriptHandler `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#14810](https://github.com/QwenLM/qwen-code/issues/14810) Main CI failed: Managed Agent gate on f36d2ee77c24 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#14790](https://github.com/QwenLM/qwen-code/issues/14790) Main CI failed: Managed Agent gate — ManagedChannelServiceTest.keepsTheOwnershipGuardAtomicAgainstARacingBind `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#14786](https://github.com/QwenLM/qwen-code/issues/14786) Main CI failed: Managed Agent gate — HostedHookFaultGatesIT.fg13cWorkerKillLeavesTheHookUnknownAndKeepsTheSessionOnMySql (+5 more) `type/bug` `status/ready-for-agent` 💬1
- [#14788](https://github.com/QwenLM/qwen-code/issues/14788) Main CI failed: Managed Agent gate — HostedHookFaultGatesIT.fg13cWorkerKillLeavesTheHookUnknownAndKeepsTheSessionOnMySql (+6 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#14796](https://github.com/QwenLM/qwen-code/issues/14796) Main CI failed: Qwen Code CI on 5dcf7c7cb162 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#14793](https://github.com/QwenLM/qwen-code/issues/14793) Main CI failed: Desktop Checks — Desktop Checks > … > Prepare bundled runtime (+1 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#14795](https://github.com/QwenLM/qwen-code/issues/14795) Main CI failed: Managed Agent gate on 257e38fd09de `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#14798](https://github.com/QwenLM/qwen-code/issues/14798) Main CI failed: Managed Agent gate on 5b115ee04257 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#14784](https://github.com/QwenLM/qwen-code/issues/14784) Main CI failed: Managed Agent gate — HostedHookFaultGatesIT.fg13cWorkerKillLeavesTheHookUnknownAndKeepsTheSessionOnMySql (+6 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#14797](https://github.com/QwenLM/qwen-code/issues/14797) Main CI failed: Managed Agent gate on 5e1e9299df94 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#14794](https://github.com/QwenLM/qwen-code/issues/14794) Main CI failed: Managed Agent gate on 5dfc011e63af `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#14781](https://github.com/QwenLM/qwen-code/issues/14781) Main CI failed: Managed Agent gate — HostedSessionRelayFaultGatesIT.fg9bRefusedJournalCommitsHealOnlyThroughTheOriginalCommandOnMySql (+4 more) `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬1
- [#14724](https://github.com/QwenLM/qwen-code/issues/14724) Main CI failed: Managed Agent gate — HostedAutomationSpringCrashIT.fg11c2SpringKillBeforeAnswerNeverFiresTwice (+2 more) `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬1
- [#14772](https://github.com/QwenLM/qwen-code/issues/14772) Main CI failed: Managed Agent gate on 81e83de6b6ec `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#14774](https://github.com/QwenLM/qwen-code/issues/14774) Main CI failed: Managed Agent gate on 380ec2b28c41 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#14773](https://github.com/QwenLM/qwen-code/issues/14773) Main CI failed: Managed Agent gate on 5f037be3b74f `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#14768](https://github.com/QwenLM/qwen-code/issues/14768) Main CI failed: Managed Agent gate on 564b13761921 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#14754](https://github.com/QwenLM/qwen-code/issues/14754) Main CI failed: Managed Agent gate on a250fd033941 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#14729](https://github.com/QwenLM/qwen-code/issues/14729) Main CI failed: Managed Agent gate — HostedExtensionsIT.disconnectedMcpEffectIsNotReplayedAfterHarnessReplacementOnMySql (+1 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#14749](https://github.com/QwenLM/qwen-code/issues/14749) Main CI failed: Managed Agent gate — EventTransportMultiNodeGate.aLongBrokerOutageLeavesTheFlagAsTheWayBack `type/bug` `status/ready-for-agent` 💬1

#### 🔒 Closed Issues
- [#14166](https://github.com/QwenLM/qwen-code/issues/14166) feat(managed-agent): D7-2 original-command reconciliation for java_durable operations
- [#14722](https://github.com/QwenLM/qwen-code/issues/14722) Show per-model TTFT and output speed in Web Shell Token Usage (TTFT is currently the whole request for tool-call-only responses)
- [#13884](https://github.com/QwenLM/qwen-code/issues/13884) feat(managed-agent): O4 retention and collection for media and shared output (#13534 P3)
- [#13464](https://github.com/QwenLM/qwen-code/issues/13464) Deferred review findings from PR #13352: feat(managed-agent): prove Shell process-group stops with a worker ledger (M5c)
- [#14161](https://github.com/QwenLM/qwen-code/issues/14161) Web Shell slash commands lose highlighting after submission
- [#14699](https://github.com/QwenLM/qwen-code/issues/14699) Main CI failed: Managed Agent gate — HostedSessionRelayFaultGatesIT.fg9bRefusedJournalCommitsHealOnlyThroughTheOriginalCommandOnMySql (+3 more)
- [#14508](https://github.com/QwenLM/qwen-code/issues/14508) Telemetry: emit reasoning effort as a span attribute (`gen_ai.request.reasoning_effort`)
- [#14769](https://github.com/QwenLM/qwen-code/issues/14769) Main CI failed: Qwen Code CI — src/managed-runtime/embedded-harness-scheduler.test.ts > … > does not halt when disposal races the failure th…
- [#9679](https://github.com/QwenLM/qwen-code/issues/9679) Deferred review findings from PR #9596
- [#14787](https://github.com/QwenLM/qwen-code/issues/14787) Main CI failed: Managed Agent gate on c64163bcea58
- [#14779](https://github.com/QwenLM/qwen-code/issues/14779) Main CI failed: Managed Agent gate — DurableLocalProcessRuntimeProvisionerTest.failedSpawnDoesNotRetryReconciliationForever (+1 more)
- [#14789](https://github.com/QwenLM/qwen-code/issues/14789) Main CI failed: Managed Agent gate — HostedHookFaultGatesIT.fg13cWorkerKillLeavesTheHookUnknownAndKeepsTheSessionOnMySql (+5 more)
- [#14782](https://github.com/QwenLM/qwen-code/issues/14782) Main CI failed: Managed Agent gate — HostedSessionRelayFaultGatesIT.fg9bRefusedJournalCommitsHealOnlyThroughTheOriginalCommandOnMySql (+6 more)
- [#14729](https://github.com/QwenLM/qwen-code/issues/14729) Main CI failed: Managed Agent gate — HostedExtensionsIT.disconnectedMcpEffectIsNotReplayedAfterHarnessReplacementOnMySql (+1 more)

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

**Stars:** 392,674 · **Open issues:** 9,585 · **Last push:** <1h ago

On October 20, 2026, OpenClaw released version 2026.10.10-beta.2, which notably enhances workspace safety by rejecting multi-file `apply_patch` operations if a later update target is missing or its context does not match, thus preserving the original workspace state. Among the significant merged pull requests, feature addition #172001 enables the system agent to expose gateway health, improving observability. Additionally, an important bug fix in #177210 addresses issues in the web chat system, where continuation turns acted on stale echoed user requests, resulting in duplicate responses. The new issue #177707 highlights a bug where updates with TMPDIR set fill the home disk, stopping progress on update recovery, raising concerns over the update process's efficiency.

#### 🚀 New Releases
- [v2026.10.10-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.2) openclaw 2026.10.10-beta.2

#### ✅ Merged PRs
- [#177803](https://github.com/openclaw/openclaw/pull/177803) fix(gateway): settle restart resends canceled during preparation
- [#177878](https://github.com/openclaw/openclaw/pull/177878) refactor(ui): remove unused manual chat metadata refresh
- [#177899](https://github.com/openclaw/openclaw/pull/177899) refactor(ui): derive Sessions view props from the page owner
- [#172001](https://github.com/openclaw/openclaw/pull/172001) feat(agents): expose gateway health to the system agent
- [#177872](https://github.com/openclaw/openclaw/pull/177872) refactor: consolidate core runtime collection owners
- [#177898](https://github.com/openclaw/openclaw/pull/177898) refactor(chat): remove unused presentation inputs
- [#177902](https://github.com/openclaw/openclaw/pull/177902) refactor(ui): derive chat result types from their producers
- [#177795](https://github.com/openclaw/openclaw/pull/177795) fix(macos): use shared exec policy with PostgreSQL
- [#174184](https://github.com/openclaw/openclaw/pull/174184) fix(native-hook-relay): rearm relay expiry on monotonic clock
- [#177840](https://github.com/openclaw/openclaw/pull/177840) refactor: fold private operation handoffs into existing owners
- [#177892](https://github.com/openclaw/openclaw/pull/177892) refactor(ui): inline chat pane transcript props
- [#177906](https://github.com/openclaw/openclaw/pull/177906) refactor(agents): keep media request identity with its operation
- [#177564](https://github.com/openclaw/openclaw/pull/177564) fix(codex): restore session replies after native child recovery
- [#175276](https://github.com/openclaw/openclaw/pull/175276) feat(plugins): expose requester-bound native delegation
- [#177846](https://github.com/openclaw/openclaw/pull/177846) refactor: remove unused Gateway implementation selectors
- [#172283](https://github.com/openclaw/openclaw/pull/172283) fix(buzz): preserve literal credential-file paths
- [#177786](https://github.com/openclaw/openclaw/pull/177786) refactor(ui): consume canonical session group responses
- [#177904](https://github.com/openclaw/openclaw/pull/177904) fix: prevent PostgreSQL Doctor conformance timeouts
- [#177875](https://github.com/openclaw/openclaw/pull/177875) refactor(agents): reuse Code Mode wait owners
- [#175810](https://github.com/openclaw/openclaw/pull/175810) fix(codex): web chat messages queue behind active turns
- [#177720](https://github.com/openclaw/openclaw/pull/177720) chore(ui): refresh control ui locales
- [#177731](https://github.com/openclaw/openclaw/pull/177731) refactor(ui): remove leaf component native adapters
- [#177693](https://github.com/openclaw/openclaw/pull/177693) fix(ui): revalidate model catalogs after stale reads and preloads
- [#177805](https://github.com/openclaw/openclaw/pull/177805) refactor: remove unread private cleanup reports
- [#177731](https://github.com/openclaw/openclaw/pull/177731) refactor(ui): remove leaf component native adapters
- [#177693](https://github.com/openclaw/openclaw/pull/177693) fix(ui): revalidate model catalogs after stale reads and preloads
- [#177805](https://github.com/openclaw/openclaw/pull/177805) refactor: remove unread private cleanup reports
- [#177857](https://github.com/openclaw/openclaw/pull/177857) fix(database): correct worker inventory classifications
- [#177897](https://github.com/openclaw/openclaw/pull/177897) fix(cron): unblock isolated-run diagnostic tests
- [#177889](https://github.com/openclaw/openclaw/pull/177889) refactor(agents): remove duplicate facts cleanup
- [#177832](https://github.com/openclaw/openclaw/pull/177832) refactor: remove unused CLI output runtime arguments
- [#177873](https://github.com/openclaw/openclaw/pull/177873) perf(database): remove redundant admission and cleanup statements
- [#177883](https://github.com/openclaw/openclaw/pull/177883) refactor: consolidate plugin-private runtime helpers
- [#177866](https://github.com/openclaw/openclaw/pull/177866) refactor(plugins): remove unread activation explanations
- [#177649](https://github.com/openclaw/openclaw/pull/177649) refactor(ui): trust canonical question request validation
- [#177811](https://github.com/openclaw/openclaw/pull/177811) fix(auth): keep Codex disclosure checks off the Gateway thread
- [#177881](https://github.com/openclaw/openclaw/pull/177881) refactor(ui): derive model setup props from owner
- [#177874](https://github.com/openclaw/openclaw/pull/177874) refactor(agents): plan tool-result truncation directly on messages
- [#177623](https://github.com/openclaw/openclaw/pull/177623) refactor(ui): project avatar overlay visibility
- [#177862](https://github.com/openclaw/openclaw/pull/177862) refactor(ui): share activity and session input validators
- [#177619](https://github.com/openclaw/openclaw/pull/177619) refactor(ui): derive capabilities from their operation owners
- [#177817](https://github.com/openclaw/openclaw/pull/177817) refactor(ui): derive cron actions from their owner
- [#177816](https://github.com/openclaw/openclaw/pull/177816) refactor(ui): share settings request lifecycles
- [#177835](https://github.com/openclaw/openclaw/pull/177835) refactor: finish parked runtime cleanup cutovers
- [#177824](https://github.com/openclaw/openclaw/pull/177824) refactor(ui): unify Sessions page presentation state
- [#177794](https://github.com/openclaw/openclaw/pull/177794) refactor(ui): consume canonical cron response contracts
- [#177828](https://github.com/openclaw/openclaw/pull/177828) refactor: reuse the canonical SHA-256 hex owner
- [#177601](https://github.com/openclaw/openclaw/pull/177601) refactor(ui): render chat leaves without native adapters
- [#177831](https://github.com/openclaw/openclaw/pull/177831) refactor: remove redundant runtime and maintenance work
- [#177762](https://github.com/openclaw/openclaw/pull/177762) perf(sessions): reuse diff results across checkout churn
- [#177717](https://github.com/openclaw/openclaw/pull/177717) refactor(ui): simplify chat recovery and tool output hosts
- [#177814](https://github.com/openclaw/openclaw/pull/177814) refactor(agents): share isolated completion deadline owner
- [#177851](https://github.com/openclaw/openclaw/pull/177851) test(release): include restart selector phase in recovery harness
- [#177848](https://github.com/openclaw/openclaw/pull/177848) fix(backup): preserve legacy socket paths for credential migration
- [#177841](https://github.com/openclaw/openclaw/pull/177841) fix(state): retain read snapshots until transport shutdown completes
- [#177826](https://github.com/openclaw/openclaw/pull/177826) refactor(agents): bind registry events and warnings to native owners
- [#177314](https://github.com/openclaw/openclaw/pull/177314) feat(agents): expose system overview as a read action for the system agent
- [#177763](https://github.com/openclaw/openclaw/pull/177763) fix(agents): release completed turn memory
- [#177830](https://github.com/openclaw/openclaw/pull/177830) chore(xai): repair monotonic polling regression test after #174227
- [#177737](https://github.com/openclaw/openclaw/pull/177737) refactor: reuse secrets page state in its view
- [#177791](https://github.com/openclaw/openclaw/pull/177791) refactor(ui): share approval validator compilation
- [#165797](https://github.com/openclaw/openclaw/pull/165797) feat(subagents): carry a machine-readable reason on a registry-settled yielded collector
- [#177815](https://github.com/openclaw/openclaw/pull/177815) refactor: reuse debug page request lifecycle
- [#177821](https://github.com/openclaw/openclaw/pull/177821) improve(test): speed up package recovery integrity assertions
- [#165798](https://github.com/openclaw/openclaw/pull/165798) feat(subagents): show how long a continuable yielded leaf has been paused
- [#164442](https://github.com/openclaw/openclaw/pull/164442) fix(sessions): long transcripts pin a database read snapshot while being decoded
- [#164792](https://github.com/openclaw/openclaw/pull/164792) perf(memory): evict superseded embedding cache rows first at the cap
- [#175907](https://github.com/openclaw/openclaw/pull/175907) improve(memory): faster repeated memory keyword searches
- [#177788](https://github.com/openclaw/openclaw/pull/177788) refactor(ui): reuse cron owner validation and payloads
- [#177799](https://github.com/openclaw/openclaw/pull/177799) refactor(ui): reuse catalog reader on Agents page

#### 🐛 New Issues
- [#177707](https://github.com/openclaw/openclaw/issues/177707) [Bug]: Update with TMPDIR set still fills the home disk and stops on update-recovery-pending `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬5
- [#177505](https://github.com/openclaw/openclaw/issues/177505) skill_workshop background experience-review retries on invalid tool-call arguments, no visible retry/turn cap `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬5
- [#176872](https://github.com/openclaw/openclaw/issues/176872) [Bug]: Windows gateway install --force fails with "Task launcher changed during publication" (fs-safe refreshes mtimeMs) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#177742](https://github.com/openclaw/openclaw/issues/177742) [Bug]: Codex app-server 0.163.0 warns against the managed runtime pin 0.160.0 `P3` `impact:ux-friction` 💬4
- [#177011](https://github.com/openclaw/openclaw/issues/177011) Windows 2026.10.5: doctor contract load for acpx fails with EEXIST in the capture dedup workspace, refusing plugin migrations and blocking the rest of the upgrade repairs `P2` `impact:ux-friction` 💬4
- [#177506](https://github.com/openclaw/openclaw/issues/177506) Skill Workshop reviews break the prompt-cache prefix on both sessions (measured: ~16.7M tokens dropped in one evening) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#177854](https://github.com/openclaw/openclaw/issues/177854) [Bug]: Sessions table agent image avatars are clipped to thin crescents `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#177531](https://github.com/openclaw/openclaw/issues/177531) Picker offers xhigh for meta/muse-* but sessions.patch rejects it on the muse runtime `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#177210](https://github.com/openclaw/openclaw/issues/177210) [Bug]: Webchat continuation turn acts on a stale echoed user request from injected runtime context, producing an unrequested duplicate answer `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#177068](https://github.com/openclaw/openclaw/issues/177068) Deep-consolidation LLM budget in memory-core dreaming is hardcoded to 60 s — no config knob, unlike the narrative phases fixed in #167984 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#177440](https://github.com/openclaw/openclaw/issues/177440) gateway bootstrap failures print no diagnostic — 'The CLI command failed.' hides the exception during restart loops `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#177078](https://github.com/openclaw/openclaw/issues/177078) [Bug]: Quoting a file message on DingTalk fails with "Transcript idempotency key ... conflicts with the admitted message" `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#177056](https://github.com/openclaw/openclaw/issues/177056) [Bug]: Database page-cache warm fails every 15 min on stock WSL kernels: ENOENT /proc/self/io (CONFIG_TASKSTATS disabled) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#177100](https://github.com/openclaw/openclaw/issues/177100) [Bug]: Control UI final rendering corrupts PowerShell code containing an Authorization Bearer prefix `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#176925](https://github.com/openclaw/openclaw/issues/176925) Scheduled live runtime QA hits the 45-minute limit before restart checks and report generation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬3
- [#176889](https://github.com/openclaw/openclaw/issues/176889) [Bug]: Workboard dispatch cannot start a card whose fixed worker session is archived; each rejection consumes the retry budget `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#176778](https://github.com/openclaw/openclaw/issues/176778) Workspace synchronization captures retained test compiler caches `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#177182](https://github.com/openclaw/openclaw/issues/177182) [Bug]: Trusted tool wrappers lose canonical scheduled shell capability metadata `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#177876](https://github.com/openclaw/openclaw/issues/177876) [Bug]: 2026.10.5 Doctor runtime cleanup blocked by sd-pam with systemd --user --deserialize `bug` `no-stale` `bug:behavior` `P1` 💬2
- [#177627](https://github.com/openclaw/openclaw/issues/177627) `gateway restart --safe` on a busy macOS Gateway ends as a forced restart with a 5 s drain (launchd ExitTimeOut=20); active runs are cancelled and the requester is not logged `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#177697](https://github.com/openclaw/openclaw/issues/177697) [Bug]: Update canary lint tells a lan gateway it is loopback-only `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#177712](https://github.com/openclaw/openclaw/issues/177712) Model configured `reasoning: false` that actually emits reasoning gets its reasoning channel discarded, producing malformed structured output with no warning `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#177634](https://github.com/openclaw/openclaw/issues/177634) [Feature]: Let plugins send referenced image evidence to hosted TypeSafe Jev `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#177663](https://github.com/openclaw/openclaw/issues/177663) Codex runtime artifact capture rejects the official standalone installer layout (codex -> bin/codex) that stock prefers via PATH `P2` `impact:auth-provider` 💬2
- [#177442](https://github.com/openclaw/openclaw/issues/177442) [Bug]: update repair skips maintenance after systemd inspection timeout; live Gateway retains state ownership `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#177510](https://github.com/openclaw/openclaw/issues/177510) [Bug]: exec-completion wake loses exec under toolsBySender wildcard deny `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬2
- [#177547](https://github.com/openclaw/openclaw/issues/177547) System-agent restart proposal stuck: approved in UI stays 'pending apply', withdraw returns same proposalId 💬2
- [#177535](https://github.com/openclaw/openclaw/issues/177535) claude-cli: an agent with exec security `deny` cannot use native Read, so a read-only reviewer agent is impossible (the only alternative, `full`, also enables Bash/Write/Edit because of #132303) `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#177519](https://github.com/openclaw/openclaw/issues/177519) [Feature]: Audit trail for automation (cron) job changes — record actor/origin on enable, disable, edit, add, remove `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#177465](https://github.com/openclaw/openclaw/issues/177465) Shared-state WAL never resets/truncates on Windows; grows to multi-GB and stalls gateway restart after unclean shutdown (2026.10.3) `P1` `impact:crash-loop` 💬2
- [#177387](https://github.com/openclaw/openclaw/issues/177387) [Bug]: Bundled MiniMax catalog keys M3.1 on the "MiniMax-M3.1-Flash-Preview" id only, so the documented "MiniMax-M3.1-Flash" id silently loses the 5-level thinking profile, the output_config stream patch, and all M3.1 defaults `P2` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬2
- [#177352](https://github.com/openclaw/openclaw/issues/177352) [Bug]: Doctor duplicate-archive settlement performs quadratic artifact lookup and times out before plugin convergence `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#177341](https://github.com/openclaw/openclaw/issues/177341) [Bug]: MS Teams group-chat message with mentions and an emoji gets a phantom "[msteams 2 attachments unavailable]" notice `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#177303](https://github.com/openclaw/openclaw/issues/177303) Pre-prompt precheck picks route=compact_then_truncate but compaction never dispatches — session deadlocks at context limit, every turn fails until manual reset `P1` `impact:session-state` 💬2
- [#177225](https://github.com/openclaw/openclaw/issues/177225) [Bug]: Managed update snapshot watchdog discards last-phase diagnostics on abort (2026.10.4) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#177335](https://github.com/openclaw/openclaw/issues/177335) [Bug]: Anthropic 400 role 'system' placement poisons Telegram main session on 2026.10.4 (subagent announces / requester-settle / after fallback) `P1` `impact:auth-provider` 💬2
- [#177156](https://github.com/openclaw/openclaw/issues/177156) Streamable-HTTP MCP initialization fails under concurrent startup and does not honor Retry-After `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#177275](https://github.com/openclaw/openclaw/issues/177275) [Bug]: defineToolPlugin drops resultContentSource for network-derived tool results `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#177094](https://github.com/openclaw/openclaw/issues/177094) [Bug]: Control UI webchat — system-notice delivery mirror displaces the turn's last answer into collapsed tool steps after restart/reload (transcript intact) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#177065](https://github.com/openclaw/openclaw/issues/177065) [Bug]: No idle sessions.changed push after a run the Gateway starts itself (exec completion) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#177163](https://github.com/openclaw/openclaw/issues/177163) [Feature]: Complete model management in Control UI (custom providers, model discovery, reasoning levels) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` `impact:auth-provider` 💬2
- [#177077](https://github.com/openclaw/openclaw/issues/177077) [Bug] v2026.10.5 still lacks the Chinese quota-exhaustion failover fix from #172173 — MiniMax 429 retries 9x before fallback `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#176813](https://github.com/openclaw/openclaw/issues/176813) [Bug]: 2026.10.4 → 2026.10.5 managed update stalls in candidate-state-snapshot with >1 TB of repeated SQLite writes `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#176827](https://github.com/openclaw/openclaw/issues/176827) Guard: unbounded plugin prependSystemContext can brick the first turn (measured 824k chars → "prompt too large") `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#177918](https://github.com/openclaw/openclaw/issues/177918) [Bug]: Scheduler cannot run any job on Android/Termux: "cron run cannot acquire a durable fence without process start identity" `bug` `bug:behavior` `clawsweeper:intake:bug` 💬1
- [#177917](https://github.com/openclaw/openclaw/issues/177917) [Bug]: Event-loop-health worker sample continuation has no .catch, so a throwing worker-registry read becomes a process-level unhandled rejection `bug` `bug:behavior` `clawsweeper:intake:bug` 💬1
- [#177656](https://github.com/openclaw/openclaw/issues/177656) Native host exec returns shared-state integrity-admission error on 2026.10.5 without a child result `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#177909](https://github.com/openclaw/openclaw/issues/177909) [Bug]: transcript idempotency conflict is treated as a model failure and walks the cross-provider fallback chain (2026.10.5) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#177865](https://github.com/openclaw/openclaw/issues/177865) Update failure: clean-check (2026.9.9) `P2` `impact:ux-friction` 💬1
- [#177896](https://github.com/openclaw/openclaw/issues/177896) Update failure: invalid-config (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#177239](https://github.com/openclaw/openclaw/issues/177239) Update failure: global-install-foreign-destination (2026.10.4) `P2` `impact:ux-friction` 💬1
- [#177790](https://github.com/openclaw/openclaw/issues/177790) workboard: refreshDiagnostics bumps updatedAt on every card, which makes stranded_ready flap and floods diagnostic events `clawsweeper:intake:bug` 💬1
- [#177894](https://github.com/openclaw/openclaw/issues/177894) Update failure: gateway-recovery-verification (2026.10.3) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#177884](https://github.com/openclaw/openclaw/issues/177884) [Bug]: Matrix: two-member room DM promotion follows a stale cached name; user-target sends map rooms regardless of name `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#177885](https://github.com/openclaw/openclaw/issues/177885) [Bug]: scheduler automation-repair brief renders as raw prompt text (untrusted-text wrappers, schedule JSON, internal ids) in the visible chat `P2` `impact:ux-friction` 💬1
- [#177882](https://github.com/openclaw/openclaw/issues/177882) memory_search: read-only SQLite worker scope closed during startup admission churn and never re-opened (2026.10.2) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#177870](https://github.com/openclaw/openclaw/issues/177870) [Feature]: openclaw pairing dismiss to remove a pending DM pairing request from the CLI `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#177867](https://github.com/openclaw/openclaw/issues/177867) Windows: openclaw update repair can never settle a failed update because the handoff process census treats Microsoft Defender's protected DefenderSessionHelper.exe as an unverified descendant `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#177860](https://github.com/openclaw/openclaw/issues/177860) [Bug]: `openclaw doctor --fix` calls a models.json with comments "invalid JSON" and skips the stale model reference repair `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#177859](https://github.com/openclaw/openclaw/issues/177859) [Feature]: Opt in to private Proxmox Crabbox workers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#177856](https://github.com/openclaw/openclaw/issues/177856) [Bug]: Large managed ref inventories block worktree session startup `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#177273](https://github.com/openclaw/openclaw/issues/177273) [Feature]: Let the system agent read the system overview `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#177852](https://github.com/openclaw/openclaw/issues/177852) [Bug]: 2026.10.5 regression hides Discord progress for accepted unmentioned requests `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#177845](https://github.com/openclaw/openclaw/issues/177845) [Bug]: Control UI Activity tabs are vertically clipped beneath the page subtitle `P3` `impact:ux-friction` 💬1
- [#177849](https://github.com/openclaw/openclaw/issues/177849) [Bug]: openai-completions replay drops vLLM `reasoning` (sanitizer deletes it; rename only for opencode-go) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#177847](https://github.com/openclaw/openclaw/issues/177847) Update failure: update-executor-settlement (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#177443](https://github.com/openclaw/openclaw/issues/177443) [Bug]: Discord native command continuations fail on active conversation targets in 2026.10.5 `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬1
- [#177822](https://github.com/openclaw/openclaw/issues/177822) [Bug]: Windows: state DB WAL checkpoints repeatedly blocked; WAL grows and CLI cleanup times out `bug` `bug:behavior` `P2` `impact:other` 💬1
- [#177818](https://github.com/openclaw/openclaw/issues/177818) Update failure: gateway-recovery-verification (2026.10.5) `P0` `impact:ux-release-blocker` 💬1
- [#177789](https://github.com/openclaw/openclaw/issues/177789) OpenClaw Gateway crash loop (exit 78) on Docker/Swarm host after pending agent DB schema migration (v24→v25) + missing plugin-captures directory `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#177782](https://github.com/openclaw/openclaw/issues/177782) [Bug]: Matrix agent keeps seeing a room's old name after the room is renamed, until the Gateway restarts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#177765](https://github.com/openclaw/openclaw/issues/177765) Maintainer landing skill conflates unrelated CI failures with missing merge authorization `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#177778](https://github.com/openclaw/openclaw/issues/177778) [Bug]: keep-files agents.delete stalls shared-state writer and loses its deletion lease on Windows 10.5 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#177766](https://github.com/openclaw/openclaw/issues/177766) Private subagent completion turn (completionTarget: "parent") renders its internal reply in Control UI; NO_REPLY there fails as "CLI backend returned an empty response" on claude-cli `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#177755](https://github.com/openclaw/openclaw/issues/177755) [Feature]: Per-agent opt-out from shared/ambient API keys for inference `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#177758](https://github.com/openclaw/openclaw/issues/177758) [Bug]: #172975 (held deleted-agent schema fix) missing from 2026.10.5 stable — update still leaves Gateway offline `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#177743](https://github.com/openclaw/openclaw/issues/177743) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#177739](https://github.com/openclaw/openclaw/issues/177739) [Bug]: CLI Node runtime recovery rejects every runtime when launched from / (launchd jobs exit 1) `bug` `no-stale` `bug:behavior` `P1` 💬1
- [#177740](https://github.com/openclaw/openclaw/issues/177740) Session Files uses the agent workspace for an isolated sandbox `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#177732](https://github.com/openclaw/openclaw/issues/177732) memory search: let a note's frontmatter status (e.g. superseded) lower the rank of all its chunks `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#177456](https://github.com/openclaw/openclaw/issues/177456) [Bug]: Control UI CI details do not revalidate the session pull request after loading `bug` `bug:behavior` `clawsweeper:bulk-filed` 💬1
- [#177706](https://github.com/openclaw/openclaw/issues/177706) [Bug]: 2026.10.10-beta.2 still retains update runtimes when a Node process has no package.json `P2` `impact:other` 💬1
- [#177703](https://github.com/openclaw/openclaw/issues/177703) Feature: quiet mode for Skill Workshop Learned notices `P3` `impact:ux-friction` 💬1
- [#177701](https://github.com/openclaw/openclaw/issues/177701) [Bug]: Selected 200K context window is ignored on the direct Anthropic route after live model discovery fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#177696](https://github.com/openclaw/openclaw/issues/177696) [Bug]: 2026.10.10-beta.2 still tells Debian to restore the pacman database `P2` `impact:ux-friction` 💬1
- [#177685](https://github.com/openclaw/openclaw/issues/177685) memory search: search-triggered sync is fire-and-forget and is lost when the CLI exits `P2` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬1
- [#177684](https://github.com/openclaw/openclaw/issues/177684) [Bug]: repaired updater cancellation lineage still blocks subsequent updates `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#177686](https://github.com/openclaw/openclaw/issues/177686) memory watcher can end without logging; gateway stops refreshing memory sources `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#177669](https://github.com/openclaw/openclaw/issues/177669) Allow consented native-runtime harnesses (e.g. Muse) in supervised spawned children `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#177633](https://github.com/openclaw/openclaw/issues/177633) [Bug]: Meeting bidi audio capture pull times out after the join returns, closing the realtime bridge `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬1
- [#177622](https://github.com/openclaw/openclaw/issues/177622) Manual /compact still launches Claude Code with bypassPermissions (fails on root-run gateways) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#177604](https://github.com/openclaw/openclaw/issues/177604) OpenClaw Windows Gateway: gog with secret egress proxy enabled fails TLS — `x509: certificate signed by unknown authority` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#177612](https://github.com/openclaw/openclaw/issues/177612) Per-agent verboseDefault is ignored at run time (replies, /verbose, /status, openclaw agent) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#177587](https://github.com/openclaw/openclaw/issues/177587) [Bug]: 2026.10.5 stable still leaves a superseded deferred agent preparation degraded until restart (#171054 is only on main) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#177539](https://github.com/openclaw/openclaw/issues/177539) [Bug]: Session-scoped operators cannot steer their own active sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#177576](https://github.com/openclaw/openclaw/issues/177576) synology-chat: outbound sends never report a message identity, causing false delivery failures `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#177569](https://github.com/openclaw/openclaw/issues/177569) Heartbeat failure message claims "The main chat session remains available" when it is not `P2` `impact:ux-friction` 💬1
- [#177559](https://github.com/openclaw/openclaw/issues/177559) Update failure: package-swap (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#177552](https://github.com/openclaw/openclaw/issues/177552) [Bug]: saved session settings revert after chat /new, /reset, or an automatic session reset `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#177546](https://github.com/openclaw/openclaw/issues/177546) [Bug]: Automation runs answer from configured fallbacks when the session's user-pinned model fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#177540](https://github.com/openclaw/openclaw/issues/177540) [Bug]: Control UI shows a queued "Run now" as a red error alert `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#177541](https://github.com/openclaw/openclaw/issues/177541) [Bug]: Control UI: the MCP server trash button deletes the saved config on one click, with no confirmation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#177542](https://github.com/openclaw/openclaw/issues/177542) [Bug]: Enter that confirms IME input runs the field action with unconverted text in Search settings and the folder browser `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#177517](https://github.com/openclaw/openclaw/issues/177517) [Bug]: Agents API runtime: cron job stops right after sending to its own delivery target `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#177523](https://github.com/openclaw/openclaw/issues/177523) [Bug]: Session automations ignore the session's selected context window on native runs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#177495](https://github.com/openclaw/openclaw/issues/177495) [Bug]: `openclaw directory` rewrites openclaw.json and enables the bundled `codex` plugin `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#177498](https://github.com/openclaw/openclaw/issues/177498) [UX] 2026.10.5 Dashboard sidebar session filter default view causes historical conversations to appear missing `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#177487](https://github.com/openclaw/openclaw/issues/177487) fal video, Qwen video and Vydra send the API key and prompt to the hosted default host when the configured baseUrl is invalid `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#177486](https://github.com/openclaw/openclaw/issues/177486) Setting to restrict which GitHub identities can be connected (e.g. personal-only publishing) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:security` 💬1
- [#177482](https://github.com/openclaw/openclaw/issues/177482) [Bug]: 2026.9.7 to 2026.10.5 update fails candidate startup with SQLite snapshot stabilization error `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#177470](https://github.com/openclaw/openclaw/issues/177470) Update failure: gateway-recovery-verification (2026.10.5) `P0` `impact:ux-release-blocker` 💬1
- [#177458](https://github.com/openclaw/openclaw/issues/177458) [Bug]: Host skill library publication guard no longer revalidates state admission or physical database identity `bug` `bug:behavior` `P3` `clawsweeper:bulk-filed` 💬1
- [#177455](https://github.com/openclaw/openclaw/issues/177455) [Bug]: Chat metadata catch-up can overwrite a publication failure with "available" `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#177467](https://github.com/openclaw/openclaw/issues/177467) Native runtime (Muse) runs without nativeRuntimeConsent when the session is not Full Access `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#177449](https://github.com/openclaw/openclaw/issues/177449) [Bug]: Windows 2026.10.4 to 2026.10.5 update strands migrated state after Codex doctor-contract EEXIST and migration refusal `P1` `impact:crash-loop` `impact:ux-friction` 💬1
- [#177447](https://github.com/openclaw/openclaw/issues/177447) [Bug]: Responses (ChatGPT route): tool turns fail with "changed output item identity" and "completed with unresolved tool calls" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#177441](https://github.com/openclaw/openclaw/issues/177441) forced close with in-flight writes logs "completed cleanly" before the checkpoint completes; WAL frames land after the banner `P2` `clawsweeper:needs-info` `impact:data-loss` `impact:crash-loop` 💬1
- [#177431](https://github.com/openclaw/openclaw/issues/177431) Update failure: candidate-gateway-startup (2026.10.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#177432](https://github.com/openclaw/openclaw/issues/177432) [Feature]: Config option to omit the "Current model identity" line from the system prompt `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#177434](https://github.com/openclaw/openclaw/issues/177434) MiniMax M3.1: official GA model id `MiniMax-M3.1-Flash` not recognized by the thinking adapter — thinking-off turns fail with HTTP 400 (2013) `P2` `impact:auth-provider` 💬1
- [#177418](https://github.com/openclaw/openclaw/issues/177418) [Bug]: Shared 10s GitHub App deadline aborts a valid token mint on slow verification `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#177416](https://github.com/openclaw/openclaw/issues/177416) [Bug]: Bounded seed preparation aborts the turn when a host agent-event observer throws `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#177393](https://github.com/openclaw/openclaw/issues/177393) [Bug]: Model fallback restoration notice is committed after the model selection changes mid-write `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#177410](https://github.com/openclaw/openclaw/issues/177410) [Bug]: Image-heavy sessions never compact: the bounded history load counts stored base64 bytes, drops rows silently and rewrites the prompt cache on every slide `P2` `impact:session-state` 💬1
- [#177405](https://github.com/openclaw/openclaw/issues/177405) Update failure: package-doctor (2026.10.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#177404](https://github.com/openclaw/openclaw/issues/177404) [Feature]: Show an agent-written explanation on exec approval cards, labelled and excluded from authorization `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#177394](https://github.com/openclaw/openclaw/issues/177394) OpenClaw model inference times out when IPv4 is unresponsive but IPv6 works — DNS-pinned lookup prefers IPv4 `bug` `bug:crash` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#177363](https://github.com/openclaw/openclaw/issues/177363) [Bug]: 2026.10.5 — `SQLite session write failed` (`session.maintenance.plan`) when a cron run finishes: "automatic maintenance activity changed before age consumption" `P2` `impact:other` 💬1
- [#177358](https://github.com/openclaw/openclaw/issues/177358) [Bug]: New paired-node Codex sessions stay absent from warm catalog until direct thread opening (2026.10.4) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#177353](https://github.com/openclaw/openclaw/issues/177353) [Bug]: before_tool_call hook context has no requester on the MCP loopback (CLI harness) path `P2` `clawsweeper:source-repro` `impact:security` `issue-rating: 🦞 diamond lobster` 💬1
- [#177298](https://github.com/openclaw/openclaw/issues/177298) [Bug]: Ordinary Codex runs discard dynamic-tool cleanup failures `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#177342](https://github.com/openclaw/openclaw/issues/177342) [Feature]: cron list supports filtering by schedule kind, run status, trigger, and sorting `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#177344](https://github.com/openclaw/openclaw/issues/177344) [Feature]: Bind plugin steering to a previously captured run and preserve uncertain outcomes `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#177337](https://github.com/openclaw/openclaw/issues/177337) [Bug]: [Bug] Codex app-server hangs and aborts despite healthy Gateway and working standalone Codex `bug` `bug:crash` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#177327](https://github.com/openclaw/openclaw/issues/177327) openai-completions streaming never receives `usage` because the client does not send `stream_options.include_usage`, so per-turn token/cache/context metrics are all zero `P2` `impact:session-state` 💬1
- [#177325](https://github.com/openclaw/openclaw/issues/177325) [Feature]: Bounded batch JSON tasks in llm-task `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#177277](https://github.com/openclaw/openclaw/issues/177277) [Regression]: Feishu tool rows lost per-tool emoji prefixes after 2026.10.5 core display refactor `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#177311](https://github.com/openclaw/openclaw/issues/177311) sessions list shows the raw model alias under the default provider (openai/opus) for sessions with no persisted model: resolveSessionDisplayDefaults skips alias resolution `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#177302](https://github.com/openclaw/openclaw/issues/177302) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#177299](https://github.com/openclaw/openclaw/issues/177299) [Feature]: Define structured CUA result provenance for failures and observation targets `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#177295](https://github.com/openclaw/openclaw/issues/177295) [Feature]: Microsoft Teams native extended Markdown opt-in `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#177287](https://github.com/openclaw/openclaw/issues/177287) [Feature]: Expose OPENCLAW_SQLITE_JOURNAL_MODE to force the SQLite journal mode `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#177288](https://github.com/openclaw/openclaw/issues/177288) [Feature]: Containerized deployment docs — upgrade sequencing and SQLite storage requirements `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#177286](https://github.com/openclaw/openclaw/issues/177286) [Feature]: openclaw doctor checks state on NAS/network storage for SQLite WAL risk `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#177269](https://github.com/openclaw/openclaw/issues/177269) Failover: in-stream "Provider returned error" from Cloudflare Workers AI (openai-completions provider) does not trigger configured fallbacks `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#177204](https://github.com/openclaw/openclaw/issues/177204) [Feature]: scoped access to isolated session workers `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#177171](https://github.com/openclaw/openclaw/issues/177171) Command terminal handoffs lose internal missing-result notice suppression `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#177220](https://github.com/openclaw/openclaw/issues/177220) Update failure: candidate-gateway-startup (2026.10.4) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#177222](https://github.com/openclaw/openclaw/issues/177222) [Feature]: Preserve live caller attribution when a plugin tool dispatches an agent run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#177218](https://github.com/openclaw/openclaw/issues/177218) Windows: the CLI startup path runs twice per Scheduled Task restart (supervisor ~77s + child ~45s); related to #162785 `P2` `impact:ux-friction` 💬1
- [#177196](https://github.com/openclaw/openclaw/issues/177196) [Bug]: tool_choice from OpenAI-compatible endpoints never reaches Anthropic `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#177180](https://github.com/openclaw/openclaw/issues/177180) [Bug]: Scheduled Codex turn times out after a final defer response, with delivery unknown `P2` `clawsweeper:needs-info` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#177183](https://github.com/openclaw/openclaw/issues/177183) Service-managed exec: timeout/abort kill does not reach command process group (orphans stay in gateway cgroup) 💬1
- [#177176](https://github.com/openclaw/openclaw/issues/177176) [Feature]: Opt-in verified-and-delivered handoff contract on top of Workboard `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#177172](https://github.com/openclaw/openclaw/issues/177172) [Feature]: Mobile app UX inspired by Meta Muse / OpenAI Dots — Goals, Feed, live browser preview (self-hosted, BYOK) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#177157](https://github.com/openclaw/openclaw/issues/177157) claude-cli model-specific usage limit ("reached your Fable limit") misclassified as unknown → auth profile cooldown ignores model scope `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#177164](https://github.com/openclaw/openclaw/issues/177164) [Bug] Provider transport model-fetch (GET /models) missing Authorization header for OpenRouter `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#177162](https://github.com/openclaw/openclaw/issues/177162) [Bug]: Restart-recovery claim has no TTL: after a forced 5 s drain, every new Telegram turn is refused for 17 min until an operator abort + reset (2026.10.4) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#177044](https://github.com/openclaw/openclaw/issues/177044) Measure Decision transport connection reuse across matched revisions `P3` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#176994](https://github.com/openclaw/openclaw/issues/176994) QA: subagent handoff times out without identifying which transition was missing `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#176960](https://github.com/openclaw/openclaw/issues/176960) [Bug]: sandbox process cleanup fails during a workspace checkpoint pause `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#176922](https://github.com/openclaw/openclaw/issues/176922) [Bug]: Generated document replies can appear twice after an attachment `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#176966](https://github.com/openclaw/openclaw/issues/176966) [Bug]: update status replays `active_sqlite_transcript_jsonl` warnings from a completed manifest after the JSONL files are gone; the suggested `recover` is a no-op `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#177093](https://github.com/openclaw/openclaw/issues/177093) [Bug]: CLI turn with message_tool_only source reply records the sends joined as its final row; CLI final text dropped `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#176927](https://github.com/openclaw/openclaw/issues/176927) Auto Review disappears after a guest background command completes `bug` `P2` `clawsweeper:source-repro` `impact:security` 💬1
- [#177073](https://github.com/openclaw/openclaw/issues/177073) skill-collection-review: agent workspace instruction files leak into reviewer context `P2` `impact:other` 💬1
- [#177074](https://github.com/openclaw/openclaw/issues/177074) skill-collection-review: no per-agent opt-out 💬1
- [#177072](https://github.com/openclaw/openclaw/issues/177072) skill-collection-review: silently succeeds when agent tool policy excludes `ls` `P3` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬1
- [#177061](https://github.com/openclaw/openclaw/issues/177061) [Bug]: chat.abort with a cron run's runId doesn't stop the run (only the session-wide abort does) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#177057](https://github.com/openclaw/openclaw/issues/177057) Workspace synchronization captures disposable build caches `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#177021](https://github.com/openclaw/openclaw/issues/177021) [Bug]: agents.delete refuses (OpenClawAgentDatabaseLeaseActiveError) after dreaming/session backfill: worker-held leases checked before worker pools are closed `P2` `impact:ux-friction` 💬1
- [#176970](https://github.com/openclaw/openclaw/issues/176970) [Bug]: Files has no direct recovery after a failed listing `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#177000](https://github.com/openclaw/openclaw/issues/177000) Update failure: package-swap (2026.9.8) `P0` `impact:ux-release-blocker` 💬1
- [#176991](https://github.com/openclaw/openclaw/issues/176991) Update failure: update-executor-settlement (2026.10.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#176919](https://github.com/openclaw/openclaw/issues/176919) Avoid duplicate macOS Periphery index builds `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#176951](https://github.com/openclaw/openclaw/issues/176951) Update failure: gateway-recovery-verification (2026.10.5) `P0` `impact:ux-release-blocker` 💬1
- [#176947](https://github.com/openclaw/openclaw/issues/176947) docs: add Abstract provider guide `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#176944](https://github.com/openclaw/openclaw/issues/176944) [Bug]: A new message waits for background context-engine maintenance that is blocked in a host LLM request `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#176932](https://github.com/openclaw/openclaw/issues/176932) Copilot provider: support selecting the default (shorter) context tier, not just long_context `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#176940](https://github.com/openclaw/openclaw/issues/176940) [Bug]: Double-tapping Send on iOS stops the message it just sent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#176930](https://github.com/openclaw/openclaw/issues/176930) [Bug]: Native Sites tools absent from previously working scheduled workflow after model/auth transition `P2` `impact:auth-provider` 💬1
- [#176924](https://github.com/openclaw/openclaw/issues/176924) [Windows] SQLite WAL Reader Leak in Cached Read-Only Connections (2026.10.2 – 2026.10.5) `P2` `impact:other` 💬1
- [#176882](https://github.com/openclaw/openclaw/issues/176882) [Bug]: Sandbox workspace preparation loses its lease after temporary SQLite contention `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#176808](https://github.com/openclaw/openclaw/issues/176808) fix: workspace sync loses retained directories after deleting their last file `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#176884](https://github.com/openclaw/openclaw/issues/176884) Update failure: database-schema-preflight (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#177914](https://github.com/openclaw/openclaw/issues/177914) [Bug]: Question prompt is delivered after the question was already answered on another path `bug` `bug:behavior` `clawsweeper:bulk-filed`
- [#177916](https://github.com/openclaw/openclaw/issues/177916) [Bug]: Failed gateway restart-intent clear is silently swallowed by an empty catch `bug` `bug:behavior` `P2` `impact:other`
- [#176963](https://github.com/openclaw/openclaw/issues/176963) OpenAI attribution sends the product version, so ChatGPT refuses every model

#### 🔒 Closed Issues
- [#140738](https://github.com/openclaw/openclaw/issues/140738) [Bug]: Talk confirmations repeatedly superseded; confirmed cross-session actions never execute
- [#173082](https://github.com/openclaw/openclaw/issues/173082) [Bug]: doctor retains an update runtime when a Node process has no package.json
- [#158898](https://github.com/openclaw/openclaw/issues/158898) Runtime context message is rebuilt and appended last on every model call, so it is always uncached input (large cost on providers with prefix caching)
- [#169937](https://github.com/openclaw/openclaw/issues/169937) Update failure: gateway-recovery-verification (2026.9.9)
- [#140928](https://github.com/openclaw/openclaw/issues/140928) [Feature] doctor: migrate shared auth-profile plaintext to SecretRef
- [#164250](https://github.com/openclaw/openclaw/issues/164250) Inbound user message becomes "orphaned" (invisible in next context assembly) when the model API rate-limits (429)
- [#169406](https://github.com/openclaw/openclaw/issues/169406) Gateway startup: ~65-72 s per boot in a no-op legacy webhookListeners migration that never records completion (Windows, 2026.10.1)
- [#176872](https://github.com/openclaw/openclaw/issues/176872) [Bug]: Windows gateway install --force fails with "Task launcher changed during publication" (fs-safe refreshes mtimeMs)
- [#173997](https://github.com/openclaw/openclaw/issues/173997) Update failure: package-backup-retention (2026.10.3)
- [#177011](https://github.com/openclaw/openclaw/issues/177011) Windows 2026.10.5: doctor contract load for acpx fails with EEXIST in the capture dedup workspace, refusing plugin migrations and blocking the rest of the upgrade repairs
- [#164946](https://github.com/openclaw/openclaw/issues/164946) [Bug]: Discord reply-ping from another bot forces a visible answer (NO_REPLY rejected), causing endless bot-to-bot loops
- [#162764](https://github.com/openclaw/openclaw/issues/162764) [Bug]: memory_search hybrid ranking drops the only chunk that contains the whole query
- [#160044](https://github.com/openclaw/openclaw/issues/160044) `image_generate` background task ends in `blocked`: media is generated but the completion never reaches the requester (4/4 reproductions)
- [#144536](https://github.com/openclaw/openclaw/issues/144536) Update failure: database-schema-preflight (2026.9.3)
- [#132471](https://github.com/openclaw/openclaw/issues/132471) Cloud Stop waits behind in-flight provisioning instead of cancelling it
- [#176479](https://github.com/openclaw/openclaw/issues/176479) gateway install persists caller process-owned secret-egress-proxy NODE_EXTRA_CA_CERTS into the service unit
- [#142820](https://github.com/openclaw/openclaw/issues/142820) [Bug]: claude-cli — Telegram inbound turns receive an API-key credential that identical RPC turns do not
- [#168978](https://github.com/openclaw/openclaw/issues/168978) [Bug]: claude-cli history guard rejects valid turn across an owned transcript append
- [#176778](https://github.com/openclaw/openclaw/issues/176778) Workspace synchronization captures retained test compiler caches
- [#171971](https://github.com/openclaw/openclaw/issues/171971) [Feature]: Let the system agent read gateway health
- [#171467](https://github.com/openclaw/openclaw/issues/171467) [Bug]: memory session indexing holds an agent-database read snapshot while a whole transcript is decoded and parsed, so passive WAL checkpoints cannot complete
- [#166267](https://github.com/openclaw/openclaw/issues/166267) [Bug]: finished subagents keep requesterSettleWake forever on a busy top-level requester; already-delivered results pile up in every turn and survive restart
- [#150560](https://github.com/openclaw/openclaw/issues/150560) [Feature]: Allow `sessions_send` to target thread-scoped sessions
- [#177663](https://github.com/openclaw/openclaw/issues/177663) Codex runtime artifact capture rejects the official standalone installer layout (codex -> bin/codex) that stock prefers via PATH
- [#161211](https://github.com/openclaw/openclaw/issues/161211) Cloud-worker model fallback relaunches on the admission base and fails with `stale-base-leaf`
- [#177547](https://github.com/openclaw/openclaw/issues/177547) System-agent restart proposal stuck: approved in UI stays 'pending apply', withdraw returns same proposalId
- [#169209](https://github.com/openclaw/openclaw/issues/169209) [Bug]: Orphan workspace-result cleanup reports completion after a workspace-resolution failure
- [#177465](https://github.com/openclaw/openclaw/issues/177465) Shared-state WAL never resets/truncates on Windows; grows to multi-GB and stalls gateway restart after unclean shutdown (2026.10.3)
- [#176200](https://github.com/openclaw/openclaw/issues/176200) [Bug]: openclaw approvals --gateway --node <node> silently ignores --node and operates on gateway policy
- [#170430](https://github.com/openclaw/openclaw/issues/170430) cloud-workers list hangs with high CPU on 2026.10.2 while environments.list answers in 2 s
- [#131992](https://github.com/openclaw/openclaw/issues/131992) [Bug]: Cloud session stays draining after Gateway restart
- [#132514](https://github.com/openclaw/openclaw/issues/132514) Cloud workers: support cancelling provisioning from Stop
- [#168255](https://github.com/openclaw/openclaw/issues/168255) Worker placement docs retain outdated claims and repeated stack details
- [#177352](https://github.com/openclaw/openclaw/issues/177352) [Bug]: Doctor duplicate-archive settlement performs quadratic artifact lookup and times out before plugin convergence
- [#177303](https://github.com/openclaw/openclaw/issues/177303) Pre-prompt precheck picks route=compact_then_truncate but compaction never dispatches — session deadlocks at context limit, every turn fails until manual reset
- [#177225](https://github.com/openclaw/openclaw/issues/177225) [Bug]: Managed update snapshot watchdog discards last-phase diagnostics on abort (2026.10.4)
- [#177335](https://github.com/openclaw/openclaw/issues/177335) [Bug]: Anthropic 400 role 'system' placement poisons Telegram main session on 2026.10.4 (subagent announces / requester-settle / after fallback)
- [#115207](https://github.com/openclaw/openclaw/issues/115207) [Feature]:show tokens/sec in Control UI and TUI session card
- [#138381](https://github.com/openclaw/openclaw/issues/138381) [Feature]: Channel health reflects actual post-reload routing with a per-channel reload verdict
- [#160561](https://github.com/openclaw/openclaw/issues/160561) [Bug]: update status keeps transcript_missing migration warnings after sessions cleanup --fix-missing removed the rows
- [#142826](https://github.com/openclaw/openclaw/issues/142826) [Bug] openclaw mcp doctor --probe leaks stdio server child processes under a live gateway
- [#142890](https://github.com/openclaw/openclaw/issues/142890) [Bug] skill_workshop update action: support_files[].content validator fails on long strings with CJK characters
- [#176813](https://github.com/openclaw/openclaw/issues/176813) [Bug]: 2026.10.4 → 2026.10.5 managed update stalls in candidate-state-snapshot with >1 TB of repeated SQLite writes
- [#176827](https://github.com/openclaw/openclaw/issues/176827) Guard: unbounded plugin prependSystemContext can brick the first turn (measured 824k chars → "prompt too large")
- [#127987](https://github.com/openclaw/openclaw/issues/127987) compaction: a summarization response cut off at max_tokens is committed as a complete summary
- [#176743](https://github.com/openclaw/openclaw/issues/176743) [Bug]: Windows backup scratch cleanup repeatedly fails with EPERM on reserved retirement directory
- [#177790](https://github.com/openclaw/openclaw/issues/177790) workboard: refreshDiagnostics bumps updatedAt on every card, which makes stranded_ready flap and floods diagnostic events
- [#177885](https://github.com/openclaw/openclaw/issues/177885) [Bug]: scheduler automation-repair brief renders as raw prompt text (untrusted-text wrappers, schedule JSON, internal ids) in the visible chat
- [#177273](https://github.com/openclaw/openclaw/issues/177273) [Feature]: Let the system agent read the system overview
- [#177845](https://github.com/openclaw/openclaw/issues/177845) [Bug]: Control UI Activity tabs are vertically clipped beneath the page subtitle
- [#177822](https://github.com/openclaw/openclaw/issues/177822) [Bug]: Windows: state DB WAL checkpoints repeatedly blocked; WAL grows and CLI cleanup times out
- [#177818](https://github.com/openclaw/openclaw/issues/177818) Update failure: gateway-recovery-verification (2026.10.5)
- [#177765](https://github.com/openclaw/openclaw/issues/177765) Maintainer landing skill conflates unrelated CI failures with missing merge authorization
- [#177456](https://github.com/openclaw/openclaw/issues/177456) [Bug]: Control UI CI details do not revalidate the session pull request after loading
- [#177706](https://github.com/openclaw/openclaw/issues/177706) [Bug]: 2026.10.10-beta.2 still retains update runtimes when a Node process has no package.json
- [#177703](https://github.com/openclaw/openclaw/issues/177703) Feature: quiet mode for Skill Workshop Learned notices
- [#177696](https://github.com/openclaw/openclaw/issues/177696) [Bug]: 2026.10.10-beta.2 still tells Debian to restore the pacman database
- [#177539](https://github.com/openclaw/openclaw/issues/177539) [Bug]: Session-scoped operators cannot steer their own active sessions
- [#177569](https://github.com/openclaw/openclaw/issues/177569) Heartbeat failure message claims "The main chat session remains available" when it is not
- [#164452](https://github.com/openclaw/openclaw/issues/164452) Bug: local nodes status/describe fail verified-user auth while direct node.list RPC succeeds
- [#173893](https://github.com/openclaw/openclaw/issues/173893) [Bug]: `openclaw node run` startup failure prints only "The CLI command failed." with no reason, so a node host service restarts with no cause in its logs
- [#177470](https://github.com/openclaw/openclaw/issues/177470) Update failure: gateway-recovery-verification (2026.10.5)
- [#177458](https://github.com/openclaw/openclaw/issues/177458) [Bug]: Host skill library publication guard no longer revalidates state admission or physical database identity
- [#177449](https://github.com/openclaw/openclaw/issues/177449) [Bug]: Windows 2026.10.4 to 2026.10.5 update strands migrated state after Codex doctor-contract EEXIST and migration refusal
- [#177434](https://github.com/openclaw/openclaw/issues/177434) MiniMax M3.1: official GA model id `MiniMax-M3.1-Flash` not recognized by the thinking adapter — thinking-off turns fail with HTTP 400 (2013)
- [#159215](https://github.com/openclaw/openclaw/issues/159215) edit, apply_patch, and write let an agent submit a mutation without ever verifying the file's current content
- [#177410](https://github.com/openclaw/openclaw/issues/177410) [Bug]: Image-heavy sessions never compact: the bounded history load counts stored base64 bytes, drops rows silently and rewrites the prompt cache on every slide
- [#177363](https://github.com/openclaw/openclaw/issues/177363) [Bug]: 2026.10.5 — `SQLite session write failed` (`session.maintenance.plan`) when a cron run finishes: "automatic maintenance activity changed before age consumption"
- [#177327](https://github.com/openclaw/openclaw/issues/177327) openai-completions streaming never receives `usage` because the client does not send `stream_options.include_usage`, so per-turn token/cache/context metrics are all zero
- [#177171](https://github.com/openclaw/openclaw/issues/177171) Command terminal handoffs lose internal missing-result notice suppression
- [#177218](https://github.com/openclaw/openclaw/issues/177218) Windows: the CLI startup path runs twice per Scheduled Task restart (supervisor ~77s + child ~45s); related to #162785
- [#177183](https://github.com/openclaw/openclaw/issues/177183) Service-managed exec: timeout/abort kill does not reach command process group (orphans stay in gateway cgroup)
- [#157426](https://github.com/openclaw/openclaw/issues/157426) Add native Levanto Sage decision provider
- [#176994](https://github.com/openclaw/openclaw/issues/176994) QA: subagent handoff times out without identifying which transition was missing
- [#176960](https://github.com/openclaw/openclaw/issues/176960) [Bug]: sandbox process cleanup fails during a workspace checkpoint pause
- [#170203](https://github.com/openclaw/openclaw/issues/170203) [Bug]: Remount recovery rejects retained original launcher with recorded symlink mode 0755 vs 0700
- [#176922](https://github.com/openclaw/openclaw/issues/176922) [Bug]: Generated document replies can appear twice after an attachment
- [#176966](https://github.com/openclaw/openclaw/issues/176966) [Bug]: update status replays `active_sqlite_transcript_jsonl` warnings from a completed manifest after the JSONL files are gone; the suggested `recover` is a no-op
- [#168637](https://github.com/openclaw/openclaw/issues/168637) claude-cli exec completion wake fails with SESSION_DELIVERY_GENERATION_UNAVAILABLE
- [#176927](https://github.com/openclaw/openclaw/issues/176927) Auto Review disappears after a guest background command completes
- [#177073](https://github.com/openclaw/openclaw/issues/177073) skill-collection-review: agent workspace instruction files leak into reviewer context
- [#177074](https://github.com/openclaw/openclaw/issues/177074) skill-collection-review: no per-agent opt-out
- [#177021](https://github.com/openclaw/openclaw/issues/177021) [Bug]: agents.delete refuses (OpenClawAgentDatabaseLeaseActiveError) after dreaming/session backfill: worker-held leases checked before worker pools are closed
- [#169256](https://github.com/openclaw/openclaw/issues/169256) [Bug]: Pinned scheduled exec silently rewrites host=node calls to the Gateway
- [#176970](https://github.com/openclaw/openclaw/issues/176970) [Bug]: Files has no direct recovery after a failed listing
- [#177000](https://github.com/openclaw/openclaw/issues/177000) Update failure: package-swap (2026.9.8)
- [#176740](https://github.com/openclaw/openclaw/issues/176740) Deepgram: array-valued providerOptions (e.g. keyterm) are sent as one comma-joined query parameter, so multi-term keyterm prompting silently does nothing
- [#176919](https://github.com/openclaw/openclaw/issues/176919) Avoid duplicate macOS Periphery index builds
- [#176951](https://github.com/openclaw/openclaw/issues/176951) Update failure: gateway-recovery-verification (2026.10.5)
- [#176930](https://github.com/openclaw/openclaw/issues/176930) [Bug]: Native Sites tools absent from previously working scheduled workflow after model/auth transition
- [#176924](https://github.com/openclaw/openclaw/issues/176924) [Windows] SQLite WAL Reader Leak in Cached Read-Only Connections (2026.10.2 – 2026.10.5)
- [#176882](https://github.com/openclaw/openclaw/issues/176882) [Bug]: Sandbox workspace preparation loses its lease after temporary SQLite contention
- [#176808](https://github.com/openclaw/openclaw/issues/176808) fix: workspace sync loses retained directories after deleting their last file
- [#176144](https://github.com/openclaw/openclaw/issues/176144) [Bug]: Completion source replies reject media, attachments and replyTo, so requested photos are never sent
- [#176024](https://github.com/openclaw/openclaw/issues/176024) [Bug]: Active Memory recall runs are indexed as conversations and pollute memory_search
- [#176963](https://github.com/openclaw/openclaw/issues/176963) OpenAI attribution sends the product version, so ChatGPT refuses every model

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 255,285 · **Open issues:** 50,097 · **Last push:** <1h ago

On October 20, 2026, there were no new releases or merged pull requests for Hermes Agent, indicating a day of routine maintenance. However, several significant new issues were reported, with the most notable being #141705, which addresses a bug in managed workers where the 'RuntimeSessionStore' object lacks the 'search_messages' attribute. Additionally, issue #141503 highlights the critical problem of silently swallowed exceptions in the LCM engine constructor that can lead to a corrupted lcm.db file, resulting in fallback issues for the built-in compressor. Other important bugs raised include #141786, which discusses issues with OAuth login due to a miswritten numeric client ID, and #141769, detailing a network-related warning flood triggered by unreachable MCP servers.

#### 🐛 New Issues
- [#141705](https://github.com/NousResearch/hermes-agent/issues/141705) [Bug]: session_search fails in managed workers: 'RuntimeSessionStore' object has no attribute 'search_messages' `type/bug` `comp/agent` `comp/tools` `P2` 💬5
- [#141633](https://github.com/NousResearch/hermes-agent/issues/141633) [Bug]: tool-loop guardrail never hard-stops a repeated search_files/read_file call, because the tool's own refusal embeds a rising counter that changes the result hash `type/bug` `comp/agent` `tool/file` `P2` 💬3
- [#141503](https://github.com/NousResearch/hermes-agent/issues/141503) [Bug]: silently swallowed LCM engine constructor exceptions turn a corrupt lcm.db into days of silent built-in-compressor fallback (doctor repair unreachable) `type/bug` `comp/plugins` `P2` 💬3
- [#141634](https://github.com/NousResearch/hermes-agent/issues/141634) Custom providers: fixed max_tokens=65536 sent per request ignores server-advertised max_tokens_default — starves small-slot inference engines `type/perf` `comp/agent` `area/config` `P2` 💬2
- [#141806](https://github.com/NousResearch/hermes-agent/issues/141806) [Bug]: streamed replies skip extract_images — markdown images arrive as '!alt' text on Discord `type/bug` `comp/gateway` `platform/discord` `P2` 💬2
- [#141482](https://github.com/NousResearch/hermes-agent/issues/141482) [Feature]: Document a fail-closed current-worker ownership API for native plugins `type/feature` `comp/agent` `tool/delegate` `P3` 💬2
- [#141781](https://github.com/NousResearch/hermes-agent/issues/141781) Messaging card: secondary-profile Email adapter shows permanent "Restart needed" — initial-connect path never writes runtime status `type/bug` `comp/gateway` `platform/email` `P2` 💬2
- [#141786](https://github.com/NousResearch/hermes-agent/issues/141786) hermes config set writes a numeric `oauth.client_id` as an int, breaking MCP OAuth login `type/bug` `comp/cli` `tool/mcp` `area/auth` 💬2
- [#141769](https://github.com/NousResearch/hermes-agent/issues/141769) [Bug]: After a gateway restart, one unreachable MCP server makes open TUIs retry reload.mcp every 5 s (mcp_servers_unavailable WARNING flood) `type/perf` `comp/gateway` `tool/mcp` `P2` 💬2
- [#141753](https://github.com/NousResearch/hermes-agent/issues/141753) Linux + NVIDIA: the SwiftShader fallback becomes permanent when the app version is a constant, and the fallback burns 4-9 CPU cores `type/perf` `P2` `comp/desktop` `desktop/shell` 💬2
- [#141562](https://github.com/NousResearch/hermes-agent/issues/141562) [Bug]: Background completions pinned to a reset session are refused admission_conflict forever — never delivered, never dropped `type/bug` `comp/gateway` `P2` `area/sessions` 💬2
- [#141694](https://github.com/NousResearch/hermes-agent/issues/141694) [Bug]: hermes model --refresh wipes provider_models_cache.json and never rebuilds it for config-declared providers `type/bug` `comp/cli` `area/config` `P2` 💬2
- [#141772](https://github.com/NousResearch/hermes-agent/issues/141772) [Bug]: The bash/sh excute script alias is a horror story bloating ps, top, btop output with 7.6k long lines and quintuple quoted nonsense `type/perf` `comp/cli` `comp/tools` `P2` 💬1
- [#141763](https://github.com/NousResearch/hermes-agent/issues/141763) [Bug]: video_analyze silently sends empty request via Gemini native adapter (video_url parts dropped) `type/bug` `comp/agent` `tool/file` `tool/vision` 💬1
- [#141808](https://github.com/NousResearch/hermes-agent/issues/141808) Cron loses typed connection-failure classification when a failed turn is returned as a dict `type/bug` `comp/agent` `comp/cron` `P2` 💬1
- [#141803](https://github.com/NousResearch/hermes-agent/issues/141803) [Bug]: v0.22.2 release follow-up: onboarding Path import still breaks supported Python 3.12 (fix already on main) `type/bug` `P2` `comp/tui-gateway` 💬1
- [#141792](https://github.com/NousResearch/hermes-agent/issues/141792) Email adapter inherits voice.auto_tts, synthesizes an MP3 per turn, then emails "Couldn't deliver the audio attachment" to the sender `type/bug` `comp/gateway` `tool/tts` `platform/email` 💬1
- [#141364](https://github.com/NousResearch/hermes-agent/issues/141364) API server: persist all run state + make approvals a resource (completes the run-discovery gap tracked in #109222) `type/bug` `comp/gateway` `P2` `area/sessions` 💬1
- [#141782](https://github.com/NousResearch/hermes-agent/issues/141782) [Bug]: /models returning a bare JSON array silently freezes model discovery (Together AI) — probe_api_models assumes {"data": [...]} `type/bug` `comp/cli` `P2` 💬1
- [#141758](https://github.com/NousResearch/hermes-agent/issues/141758) [Bug]: kanban dispatcher marks a live worker 'crashed: pid not alive' under load and reaps it; retry spawns duplicate reviewer `type/bug` `comp/cli` `backend/local` `P2` 💬1
- [#141819](https://github.com/NousResearch/hermes-agent/issues/141819) [Bug]: Linux x64 CUDA engine (b11370) requires GLIBC_2.38 — managed local runtime is uninstallable on Ubuntu 22.04/Debian 12/RHEL 9 NVIDIA hosts, and `auto` won't fall back to the working Vulkan build
- [#141816](https://github.com/NousResearch/hermes-agent/issues/141816) [Feature]: Translate the reasoning/thinking display (opt-in) — and a reasoning contribution area for the desktop plugin SDK `type/feature` `P3` `comp/desktop` `area/streaming`
- [#141813](https://github.com/NousResearch/hermes-agent/issues/141813) Stock Desktop conversations can remain on Loading session when switching tabs `type/bug` `P2` `comp/desktop` `area/sessions`
- [#141807](https://github.com/NousResearch/hermes-agent/issues/141807) [Bug]: ChatGPT OAuth gpt-image-2 requests disconnect near 60s despite 300s read timeout (v0.22.2) `type/bug` `comp/plugins` `tool/vision` `provider/openai`
- [#141799](https://github.com/NousResearch/hermes-agent/issues/141799) Desktop 'Branch in new chat': branch mis-positioned when the clicked message lies inside a compacted region `type/bug` `P2` `comp/desktop` `area/sessions`
- [#141793](https://github.com/NousResearch/hermes-agent/issues/141793) Kanban managed-worker policy removes delegation from every card; disabled-tool diagnostic says call it directly `type/bug` `comp/agent` `comp/tools` `tool/delegate`
- [#141790](https://github.com/NousResearch/hermes-agent/issues/141790) [Feature]: per-source (DM / owner) toolset + server_actions overrides for Discord `type/security` `comp/gateway` `comp/tools` `comp/plugins`
- [#141779](https://github.com/NousResearch/hermes-agent/issues/141779) Bug: Kanban subagent attributed an unrelated stop instruction from another task `type/bug` `comp/agent` `comp/cron` `comp/plugins`

#### 🔒 Closed Issues
- [#141634](https://github.com/NousResearch/hermes-agent/issues/141634) Custom providers: fixed max_tokens=65536 sent per request ignores server-advertised max_tokens_default — starves small-slot inference engines

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 94,160 · **Open issues:** 9,098 · **Last push:** <1h ago

On October 20, 2026, vLLM observed a routine day with no new releases. Key merged pull requests included enhancements for ROCm support and the introduction of various bug fixes, such as including RoPE parameters in the IPC cache key and synchronizing ranks before profiled calls, which collectively aim to improve performance and reliability. Additionally, the documentation was updated to cover new disaggregated profiles for the DeepSeek-V4.1-Flash configurations. A notable issue that emerged was the bug report regarding Qwen4Exp, where a single prefill crossing the 262,144 native boundary resulted in a CUDA illegal memory access crash, garnering considerable attention from the community.

#### ✅ Merged PRs
- [#60731](https://github.com/vllm-project/vllm/pull/60731) [ROCm][Perf][DSv4.1] Mono decode on MI300X and MI325X (gfx942)
- [#60823](https://github.com/vllm-project/vllm/pull/60823) [Chore] Port more vendored configs and processors to upstream Transformers
- [#62422](https://github.com/vllm-project/vllm/pull/62422) [CI][XPU] Ignore test_weight_cache.py in Intel CI
- [#60994](https://github.com/vllm-project/vllm/pull/60994) [Bugfix][Weight Cache] Include RoPE parameters in IPC cache key
- [#62561](https://github.com/vllm-project/vllm/pull/62561) [Doc] Document DeepSeek-V4.1-Flash B300 and GB300 Dynamo disaggregated profiles
- [#58471](https://github.com/vllm-project/vllm/pull/58471) [Bugfix][KV Connector][NIXL] Shard a GQA draft's KV by head under an MLA target
- [#62489](https://github.com/vllm-project/vllm/pull/62489) [Bugfix][AuxOutput] Send routed-experts block hashes only for computed or scheduled blocks
- [#59489](https://github.com/vllm-project/vllm/pull/59489) [Rust][Benchmark] Add openai-responses backend to vllm-bench
- [#58984](https://github.com/vllm-project/vllm/pull/58984) [Perf][Spec Decode] Avoid target request padding in DP drafter
- [#61983](https://github.com/vllm-project/vllm/pull/61983) [CI] Bump Transformers version to 5.20.2
- [#62567](https://github.com/vllm-project/vllm/pull/62567) [CI] Keep the AMD mirrors of the nightly-only 4xL4 steps on PRs
- [#62564](https://github.com/vllm-project/vllm/pull/62564) [CI] Run the heaviest 4xL4 steps nightly only
- [#61254](https://github.com/vllm-project/vllm/pull/61254) [Docs] Add Gemma-2, Granite SWA, Qwen3-0.6B to batch invariance validated models
- [#58219](https://github.com/vllm-project/vllm/pull/58219) [Docs] explain parser boundary tokens in custom grammars
- [#62547](https://github.com/vllm-project/vllm/pull/62547) [Security][CI/Build] Add pre-commit check for hardcoded trust_remote_code=True
- [#62534](https://github.com/vllm-project/vllm/pull/62534) [Doc] Document DeepSeek-V4.1-Flash Dynamo sidecar serving / 记录 DeepSeek-V4.1-Flash Dynamo sidecar 部署
- [#60767](https://github.com/vllm-project/vllm/pull/60767) [Bugfix][V1] Null sliding-window block-table entries below the window
- [#57001](https://github.com/vllm-project/vllm/pull/57001) [Bugfix][Test] Synchronise ranks before the profiled call in profile_…
- [#62208](https://github.com/vllm-project/vllm/pull/62208) [Bugfix][DeepSeek V4.1] Inject Engram at pipeline stage entry
- [#61442](https://github.com/vllm-project/vllm/pull/61442) [CI][Tests] Add SM107a to DeepEP build
- [#62528](https://github.com/vllm-project/vllm/pull/62528) [Doc] Document Kimi-K3 GB300 disaggregated AgentX profile
- [#62090](https://github.com/vllm-project/vllm/pull/62090) [CI][Unit Test] Patch MoE layer unit tests for Blackwell and Rubin
- [#59737](https://github.com/vllm-project/vllm/pull/59737) [Perf] Enable PDL for fused MoE top-k gating
- [#62520](https://github.com/vllm-project/vllm/pull/62520) [CI][ROCm] Raise data_parallel_offline.py --timeout in AMD Torchrun + Examples
- [#60886](https://github.com/vllm-project/vllm/pull/60886) [ROCm][MoE] Add AITER MXFP4 W4A16/W4A4 modular-kernel test coverage
- [#62508](https://github.com/vllm-project/vllm/pull/62508) [Misc] Fix failing weight cache RoPE test on main
- [#62461](https://github.com/vllm-project/vllm/pull/62461) [Bugfix][Test] Stop requesting capfd in the subprocess weight cache test
- [#62250](https://github.com/vllm-project/vllm/pull/62250) [Pooling] Improve SPLADE throughput 3.6% to 7.8%
- [#62467](https://github.com/vllm-project/vllm/pull/62467) [Bugfix][Kernel] persistent_topk: don't select float4 tail lanes past the row length
- [#60362](https://github.com/vllm-project/vllm/pull/60362) [Bugfix][Tool Parser] Parse multi-line JSON arguments in the DeepSeek V3 and V3.1 parsers
- [#62390](https://github.com/vllm-project/vllm/pull/62390) [Frontend] Consolidate startup utils.
- [#62392](https://github.com/vllm-project/vllm/pull/62392) [Perf][AuxOutput] Do not rescan referenced keys in the routed-experts store
- [#61465](https://github.com/vllm-project/vllm/pull/61465) [Bugfix] Require cudnn-frontend >=1.31.0: cuDNN could replay an unloaded kernel from a CUDA graph
- [#59635](https://github.com/vllm-project/vllm/pull/59635) [KV Connector] Support sleep mode with the NIXL pull connector
- [#62329](https://github.com/vllm-project/vllm/pull/62329) [Model] Support hotwords for MOSS-Transcribe-Diarize
- [#62237](https://github.com/vllm-project/vllm/pull/62237) [Model] Add ColUltraVBERT late-interaction retrieval model
- [#62199](https://github.com/vllm-project/vllm/pull/62199) [Bugfix][Frontend] Match DeepSeek-V4.1 encoder to the 1017 reference encoding
- [#60805](https://github.com/vllm-project/vllm/pull/60805) [Bugfix] Size the HiSparse hot buffer from the rounded sparse top-k width
- [#62200](https://github.com/vllm-project/vllm/pull/62200) [Bugfix][Rust Frontend] Match DeepSeek-V4.1 renderer to the 1017 reference encoding
- [#60374](https://github.com/vllm-project/vllm/pull/60374) [Bugfix][KV Offload][P2P] Report NIXL submission failures and escalate persistent faults to session teardown
- [#62273](https://github.com/vllm-project/vllm/pull/62273) [Doc][ROCm] Align Kimi-K3 MI355X recipe with InferenceX #4215
- [#56270](https://github.com/vllm-project/vllm/pull/56270) [Bugfix][Tool Calling] Tool parser non-streaming parse drops post-tool-call text that streaming returns
- [#62206](https://github.com/vllm-project/vllm/pull/62206) [Bugfix][Core] Keep the EAGLE-reachable SWA tail at a shared-prefix junction
- [#61345](https://github.com/vllm-project/vllm/pull/61345) [ROCm][DSv4] Require explicit MXFP4 opt-in for MegaMoE shared-expert fusion
- [#62253](https://github.com/vllm-project/vllm/pull/62253) [Bugfix][Frontend] Preserve scheduling priority for online and offline beam search
- [#62276](https://github.com/vllm-project/vllm/pull/62276) [ROCm][CI] Bump the ROCm 10 image to torch 2.13

#### 🐛 New Issues
- [#62383](https://github.com/vllm-project/vllm/issues/62383) [Bug]: Qwen4Exp (Qwen3.8-Flash-Next) — single prefill crossing the 262,144 native boundary crashes the engine with CUDA illegal memory access (v0.32.0 and nightly, OK on v0.31.1) 💬7
- [#62442](https://github.com/vllm-project/vllm/issues/62442) [Perf]: ~2x decode throughput regression for structured outputs since #45424 (apply_grammar_bitmask staging), not fixed by #49919 `structured-output` 💬5
- [#62558](https://github.com/vllm-project/vllm/issues/62558) [Bug]: TurboQuant on hybrid (GDN) models: manager block cannot be split into kernel blocks, and a quantized-KV drafter inflates all KV pages (pool 97k vs 235k tokens) `bug` `rocm` `quantization` 💬2
- [#62466](https://github.com/vllm-project/vllm/issues/62466) [Bug]: persistent_topk returns indices past the row length when length % 4 != 0 and fewer than k scores are above -inf 💬2
- [#62484](https://github.com/vllm-project/vllm/issues/62484) [Bug]: CPU build fails with 'Torch not compiled with CUDA enabled' in gumbel_sample when an NVIDIA driver is visible (e.g. WSL2) `nvidia` 💬2
- [#62482](https://github.com/vllm-project/vllm/issues/62482) [Bug]: First ngram proposal can overwrite Torch thread limit during Numba OpenMP initialization 💬2
- [#62460](https://github.com/vllm-project/vllm/issues/62460) [Bug][Rust Frontend] /v1/completions rejects an array of prompts `rust` 💬2
- [#62559](https://github.com/vllm-project/vllm/issues/62559) [Bug]: Mooncake example proxy commits HTTP 200 before decode failures 💬1
- [#62483](https://github.com/vllm-project/vllm/issues/62483) [Bug][Structured Outputs] Parser._apply_structural_tag overrides a request's response_format when tools are present — schema not enforced (GLM-5.3) `structured-output` `tool-calling` `glm` 💬1
- [#62510](https://github.com/vllm-project/vllm/issues/62510) [KV offload] OffloadingEventsTracker emits placeholder BlockStored for SSM-group checkpoints; routers cannot see where a hybrid prefix is reusable 💬1
- [#62417](https://github.com/vllm-project/vllm/issues/62417) [Bug][Spec Decode] DSpark corrupts thinking/chat outputs on DeepSeek-V4.1-Flash-1017 (all k; both v0.32.0 and nightly; clean without speculation) `tool-calling` `deepseek` `DSv4.1` 💬1
- [#62389](https://github.com/vllm-project/vllm/issues/62389) [Bug]: HF3FS metadata server never frees pages; every save fails once the page pool is used up 💬1
- [#62420](https://github.com/vllm-project/vllm/issues/62420) [Bug]: EXIF-oriented images (orientation != 1) return 500 on mistral-tokenizer models: "Expected there to be 1 prompt placeholders ... found 0" `bug` `mistral` 💬1
- [#62582](https://github.com/vllm-project/vllm/issues/62582) [Bug]: float32 models: Triton attention, prefill attention and fused-MoE kernels compute `tl.dot` in TF32 (~1e-2 error relative to output RMS instead of ~1e-5)
- [#62574](https://github.com/vllm-project/vllm/issues/62574) [Performance]: Long-prefill decode starvation survives prefill/decode interleaving — head-to-head from two stacks on 2× GB10, plus a 4×98k-prefill OOM boundary
- [#62556](https://github.com/vllm-project/vllm/issues/62556) [Performance discussion] Should the default CUDA graph grid include larger sizes?
- [#62554](https://github.com/vllm-project/vllm/issues/62554) [Bug]: Packed NCCL weight sync can corrupt MoE weights under layerwise reload (receive buffer reused while replay is pending)
- [#62532](https://github.com/vllm-project/vllm/issues/62532) [RFC]: [V1 Scheduler][KV Offload] Eliminate 1.0–1.8s Re-Queueing Stall for Completed Async KV Pulls via Front-of-Queue Re-Admission `RFC` `scheduler`
- [#62388](https://github.com/vllm-project/vllm/issues/62388) [Feature]: HF3FSKVConnector: support models with more than one KV cache shape (e.g. MLA + DSA indexer)
- [#62387](https://github.com/vllm-project/vllm/issues/62387) [Bug]: HF3FSKVConnector ignores hf3fs_metadata_server_url (both metadata clients use localhost:18000)

#### 🔒 Closed Issues
- [#54906](https://github.com/vllm-project/vllm/issues/54906) [Bug]: thinking_token_budget ignored by Model Runner V2 with Qwen3.8 NVFP4 + MTP
- [#45800](https://github.com/vllm-project/vllm/issues/45800) [Bug]: MiniMax-M3-MXFP8 hangs on FlashInfer MNNVL all-reduce (torch symmetric_memory rendezvous) during CUDA graph capture on 2-node TP=8 non-MNNVL setup; fuse_allreduce_rms=False does not help
- [#48019](https://github.com/vllm-project/vllm/issues/48019) [Bug]: Text PEFT LoRAs can silently no-op for wrapper models whose LM is mounted under language_model
- [#45258](https://github.com/vllm-project/vllm/issues/45258) [RFC]: FULL cudagraph support for spec-decode drafter chain steps (currently PIECEWISE-only; measured ~15-18% of decode step time)
- [#45808](https://github.com/vllm-project/vllm/issues/45808) [Feature][Observability][Frontend]: Propagate OpenTelemetry Spans to IOProcessor for Custom Sub-Span Creation
- [#46036](https://github.com/vllm-project/vllm/issues/46036) [Bug]: [quantization] The Qwen3 4B model quantized for vLLM inference encounters errors.
- [#60560](https://github.com/vllm-project/vllm/issues/60560) [Bug][Spec Decode] DFlash2 acceptance drops ~5.5 points when the hybrid KV cache manager makes its sliding-window draft a real SWA group (BLHNC, NIXL P/D)
- [#57099](https://github.com/vllm-project/vllm/issues/57099) [Bug]: Encountered `openai_harmony.HarmonyError` when using GPT-OSS-120B.
- [#45098](https://github.com/vllm-project/vllm/issues/45098) [RFC]: Image Token Pruning for Multimodal Models
- [#45871](https://github.com/vllm-project/vllm/issues/45871) [Bug][ROCm][gfx1151] sampler.cu: topKPerRowDecode<1024> exceeds local memory limit on Wave32 GPUs
- [#45997](https://github.com/vllm-project/vllm/issues/45997) [RFC]: Kernel-agnostic constant-stride (layer-major) KV cache layout for KV connectors
- [#46193](https://github.com/vllm-project/vllm/issues/46193) [Bug]: OTEL "Dynamo bytecode transform" span reports wildly incorrect duration (tens of thousands of days)
- [#61806](https://github.com/vllm-project/vllm/issues/61806) [Bug]: DSpark draft token count inflated by reusing target DP sync state with adaptive verification
- [#60101](https://github.com/vllm-project/vllm/issues/60101) [Bug][ROCm][MoRIIO] WRITE mode never completes with a TP4 prefill and a TP8 decode: only half of the decode ranks receive KV
- [#61373](https://github.com/vllm-project/vllm/issues/61373) [Bug] TieringOffloadingSpec fs-tier lookup succeeds but never triggers a promotion job (active_promotion_jobs stays 0)
- [#45021](https://github.com/vllm-project/vllm/issues/45021) [Bug]: vllm 0.22 nccl error: invalid usage
- [#45125](https://github.com/vllm-project/vllm/issues/45125) [Bug]: Reducing block sizes or `num_stages` may help.
- [#45872](https://github.com/vllm-project/vllm/issues/45872) [RFC]: A registry + CI ratchet so tuned Triton kernel configs cannot silently rot
- [#45888](https://github.com/vllm-project/vllm/issues/45888) [Bug]: Kimi K2.5 garbage output with default flashinfer cutlass linear backend when flashinfer autotune enabled with full and piecewise cuda compilation
- [#45987](https://github.com/vllm-project/vllm/issues/45987) [Bug]: Repeated `start_profile`/`stop_profile` in the same process produces no trace files
- [#46016](https://github.com/vllm-project/vllm/issues/46016) [RFC]: Cross-connector KV transfer QoS — plumb request priority to the connector layer
- [#46028](https://github.com/vllm-project/vllm/issues/46028) [Bug]:[Anthropic API] ValidationError in message_stream_converter masks underlying 500 error when serving GLM-5.2
- [#46131](https://github.com/vllm-project/vllm/issues/46131) [Bug]: Segfault in DNNL matmul during mixed-batch GQA after #43032 (v0.23.0 regression)
- [#49354](https://github.com/vllm-project/vllm/issues/49354) [Bug]: Qwen3.5 / Qwen3.6 hybrid-GDN LoRA: vLLM `enable_lora` does not change generations vs base, while HF Peft does
- [#61673](https://github.com/vllm-project/vllm/issues/61673) [Bug]: with Cascade attention + `SimpleCPUOffloadConnector`, a request is decoded against another request's KV prefix!
- [#62466](https://github.com/vllm-project/vllm/issues/62466) [Bug]: persistent_topk returns indices past the row length when length % 4 != 0 and fewer than k scores are above -inf
- [#62482](https://github.com/vllm-project/vllm/issues/62482) [Bug]: First ngram proposal can overwrite Torch thread limit during Numba OpenMP initialization
- [#60342](https://github.com/vllm-project/vllm/issues/60342) [Bug]: DeepSeek-V3 tool parser returns no tool calls when the JSON arguments span several lines
- [#60204](https://github.com/vllm-project/vllm/issues/60204) [Bug]: [KV Offload][P2P] A NIXL error raised by `write_blocks` during a fetch is never reported to the requesting peer, so it waits the full round timeout
- [#61443](https://github.com/vllm-project/vllm/issues/61443) [Bug][Spec Decode] DFlash2 (SWA) draft group is never annotated `is_eagle_group` under the generic packed KV layout (GLM-5.3-Flash shape)
- [#62339](https://github.com/vllm-project/vllm/issues/62339) [Feature][ROCm] Fuse MLA attention with AITER static FP8 output quant
- [#61850](https://github.com/vllm-project/vllm/issues/61850) [Bug]: Zamba2 does not support LoRA but rejects it via a bare `assert` deep inside the model constructor — opaque `Engine core initialization failed` instead of a config-time error
- [#58470](https://github.com/vllm-project/vllm/issues/58470) [Bug]: NIXL P/D mis-transfers a GQA draft's KV (e.g. DFlash) under an MLA target with prefill TP < decode TP
- [#60178](https://github.com/vllm-project/vllm/issues/60178) [Bug]: `vllm preload` daemon never matches a dense (non-MoE) engine with `--data-parallel-size > 1` (WeightCacheKey `dp_size` mismatch)
- [#61964](https://github.com/vllm-project/vllm/issues/61964) [Bug]: [CPU] W8A8 Whisper fails on AMX CPUs: int8_scaled_mm_with_quant rejects 3-D encoder activations
- [#58384](https://github.com/vllm-project/vllm/issues/58384) [Bug]: Responses API Harmony output parser raises `ValueError: Unknown channel: comment` at response assembly and closes the /v1/responses SSE stream before `response.completed`

### SGLang (`sgl-project/sglang`)

**Stars:** 37,448 · **Open issues:** 5,944 · **Last push:** <1h ago

On October 20, 2026, SGLang released version 0.5.22, highlighting the contribution of 950 PRs from 245 contributors and introducing new models such as Clef/Clef Flash and PPLX-Decider v1.1, along with EmbeddingGemma 2. Significant merges included support for Muse and LTX models on CPU (PR #44624 and #36632) and various fixes related to memory caches and performance improvements. Additionally, there were notable changes in error handling, with PR #40899 addressing response codes for unfetchable multimodal inputs. A critical new issue emerged regarding qwen3_coder, where a strict tool under certain conditions could lead to unintended arguments being generated (issue #45235).

#### 🚀 New Releases
- [v0.5.22](https://github.com/sgl-project/sglang/releases/tag/v0.5.22) v0.5.22

#### ✅ Merged PRs
- [#41233](https://github.com/sgl-project/sglang/pull/41233) [Fix] glm47: Disable tool grammar for `tool_choice="none"`
- [#44514](https://github.com/sgl-project/sglang/pull/44514) [Fix] runtime: Version FlashInfer caches for default-tactic tuning.
- [#40535](https://github.com/sgl-project/sglang/pull/40535) [Perf] [NPU] mem_cache: Add optional ScatterPa KV cache writes
- [#40899](https://github.com/sgl-project/sglang/pull/40899) [Fix] inkling: Return 400 instead of 500 for unfetchable/undecodable multimodal input
- [#45153](https://github.com/sgl-project/sglang/pull/45153) [CI] npu: Move llada2-mini FDFO test to full test
- [#44624](https://github.com/sgl-project/sglang/pull/44624) [Feat] [CPU] model: Support Muse models on CPU
- [#36632](https://github.com/sgl-project/sglang/pull/36632) [Feat] [CPU] model: Support LTX and MOVA models on CPU
- [#45112](https://github.com/sgl-project/sglang/pull/45112) [Refactor] kernels: Regroup operators by computation and dissolve ops/muse_spark
- [#45236](https://github.com/sgl-project/sglang/pull/45236) [CI] radix-cache: Split unified radix cache unit tests into topic files and a shared kit
- [#44913](https://github.com/sgl-project/sglang/pull/44913) [Refactor] moe: Scope shared-expert configuration to each model
- [#44912](https://github.com/sgl-project/sglang/pull/44912) [Refactor] moe: Split the two meanings of num_fused_shared_experts
- [#44904](https://github.com/sgl-project/sglang/pull/44904) [Fix] moe: Renormalize per-rank shared-slot routing over routed experts only
- [#44901](https://github.com/sgl-project/sglang/pull/44901) [Fix] moe: Count routed_scaling_factor once when top-k folds it
- [#44681](https://github.com/sgl-project/sglang/pull/44681) [Fix] symm-mem: Name the window registration in the scheduler watchdog dump
- [#45245](https://github.com/sgl-project/sglang/pull/45245) [Doc] cookbook: Default Qwen3.8-Flash-Next datacenter recipes to FP8 KV cache and QSA indexer
- [#45247](https://github.com/sgl-project/sglang/pull/45247) [Perf] deepseek-v4.1: Reset request-window tags without a host sync
- [#45246](https://github.com/sgl-project/sglang/pull/45246) [Doc] tpu: Introduce SGLang-TorchTPU in README and TPU guide
- [#33007](https://github.com/sgl-project/sglang/pull/33007) [Fix] attention: Honor selected FlashAttention implementation
- [#43438](https://github.com/sgl-project/sglang/pull/43438) [Fix] attn_residual: int64 program ids in the score/combine kernels (int32 overflow at 37,451 tokens)
- [#39592](https://github.com/sgl-project/sglang/pull/39592) [Fix] dLLM: Preserve prompt tails and literal mask tokens across prefix reuse
- [#45234](https://github.com/sgl-project/sglang/pull/45234) [Perf] dspark: Make the prefill SWA valid-from update sync-free
- [#44663](https://github.com/sgl-project/sglang/pull/44663) [Fix] metrics: record HTTP request metrics in tokenizer workers
- [#44393](https://github.com/sgl-project/sglang/pull/44393) [CI] python: Move the remaining CUDA build paths off Python 3.10
- [#45232](https://github.com/sgl-project/sglang/pull/45232) [CI] radix-cache: Drop redundant unified radix cache unit tests
- [#44975](https://github.com/sgl-project/sglang/pull/44975) [CI] tests: Re-enable muse spark B300 PD coverage
- [#45223](https://github.com/sgl-project/sglang/pull/45223) [Perf] deepseek-v4.1: Check request-window SWA history without per-layer host syncs
- [#45018](https://github.com/sgl-project/sglang/pull/45018) [Fix] kda: Keep FlashInfer prefill off its grouped kernel's bf16/flat-dt_bias contract
- [#45107](https://github.com/sgl-project/sglang/pull/45107) [Perf] deepseek-v4.1: Run decoder replay tail graphs in prefill-graph steps and under DP attention
- [#44138](https://github.com/sgl-project/sglang/pull/44138) [Fix] moe: gated NVFP4 MoE intermediate alignment for FlashInfer TRTLLM
- [#44150](https://github.com/sgl-project/sglang/pull/44150) [Fix] Qwen3.8next: Stop retaining per-size PLE outputs in breakable prefill CUDA graphs
- [#42702](https://github.com/sgl-project/sglang/pull/42702) [Fix] PD: retraction restores racing the in-flight decode forward
- [#44945](https://github.com/sgl-project/sglang/pull/44945) [Feat] [NVIDIA] megakernels: Add --enable-nvidia-megakernel and a layer for NVIDIA megakernel plugins
- [#44689](https://github.com/sgl-project/sglang/pull/44689) [Feat] sgl-model-gateway: Add --decode-dispatch-limit to pick PD decode workers near KV arrival
- [#44672](https://github.com/sgl-project/sglang/pull/44672) [Fix] [AMD] diffusion: Accept residual and skip_bias in the ROCm Conv3d-to-Conv2d VAE patch
- [#44671](https://github.com/sgl-project/sglang/pull/44671) [Fix] [AMD] diffusion: Keep gfx1250 FlyDSL BF16 attention out of torch.compile
- [#45102](https://github.com/sgl-project/sglang/pull/45102) [Feat] sgl-router: Add --pd-stream-after-prefill
- [#44019](https://github.com/sgl-project/sglang/pull/44019) [CI] [NPU] npu-coverage: run only coverage-recommended tests on PRs (precise test selection)
- [#42557](https://github.com/sgl-project/sglang/pull/42557) [Feat] paged-experts: Serve MoE models whose weights do not fit VRAM
- [#44618](https://github.com/sgl-project/sglang/pull/44618) [Perf] deepseek_v4: size the masked silu-mul-quant grid to the GPU, not the padded capacity
- [#44286](https://github.com/sgl-project/sglang/pull/44286) [Fix] diffusion: Fix VMoBA chunk selection bugs
- [#41229](https://github.com/sgl-project/sglang/pull/41229) [Perf] [AMD] attention: Spread uneven Triton decode batches across XCDs
- [#44564](https://github.com/sgl-project/sglang/pull/44564) [Fix] dsa-eagle-topk: Copy token keys and scales when relocating index cache
- [#44500](https://github.com/sgl-project/sglang/pull/44500) [Fix] nvfp4: Own streamed tensors while waiting for paired weights
- [#45100](https://github.com/sgl-project/sglang/pull/45100) [Fix] sgl-router: Keep the kv-indexer connection through bursts of cancelled prefix queries
- [#43837](https://github.com/sgl-project/sglang/pull/43837) [Fix] [NPU] kimi-k3: skip fused gmm1 for situ activation in Ascend runner

#### 🐛 New Issues
- [#45235](https://github.com/sgl-project/sglang/issues/45235) [Bug] qwen3_coder: one `strict: true` tool under tool_choice="auto" makes a non-strict zero-argument tool get invented arguments 💬2
- [#45119](https://github.com/sgl-project/sglang/issues/45119) sglang:cache_hit_rate gauge drops to 0.0 on prefill reports with zero tokens 💬1
- [#45155](https://github.com/sgl-project/sglang/issues/45155) [Perf] KV sharding overpads all-gather for shared prefixes 💬1
- [#45159](https://github.com/sgl-project/sglang/issues/45159) [Bug] GLM-5.3-Flash on 8×H20 (TP8/EP8) with EAGLE: CUDA illegal memory access in run_eagle_verify → build_grammar_vocab_mask 💬1
- [#45162](https://github.com/sgl-project/sglang/issues/45162) [Bug] PP + EAGLE/MTP: --speculative-use-block-verification / --speculative-use-rejection-sampling crash on first sampled request (PP relay drops draft_probs) 💬1
- [#45128](https://github.com/sgl-project/sglang/issues/45128) [RFC] linker: Prefetch SSD-resident KV while the request is queued
- [#45077](https://github.com/sgl-project/sglang/issues/45077) [Bug] Unbounded compiled-grammar cache in BaseGrammarBackend leaks host memory with per-request JSON schemas 💬1
- [#45226](https://github.com/sgl-project/sglang/issues/45226) qwen3_coder streaming detector adds an extra `}` to arguments when a stray `</function>` follows a completed call
- [#45225](https://github.com/sgl-project/sglang/issues/45225) qwen3_coder structural tag triggers on the text `<tool_call>\n<function=`; use the `<tool_call>` token (xgrammar token_markers)
- [#45224](https://github.com/sgl-project/sglang/issues/45224) Strict tool constraint fails the whole request when one tool schema does not compile
- [#45209](https://github.com/sgl-project/sglang/issues/45209) [Test] PD: Cover cancellation through KV page reuse in CPU CI
- [#45206](https://github.com/sgl-project/sglang/issues/45206) Arbitrary local file read via image_url/video_url/audio_url bypasses the media SSRF allowlist
- [#45189](https://github.com/sgl-project/sglang/issues/45189) [RFC]: Programmable KV Cache: Composable Policies for Agentic Serving
- [#45197](https://github.com/sgl-project/sglang/issues/45197) [Tracking] Frozen-KV MTP (Gemma 4) performance on non-Blackwell GPUs (Triton path)
- [#45186](https://github.com/sgl-project/sglang/issues/45186) [Bug] Streaming gpt-oss Responses report zero token usage
- [#45182](https://github.com/sgl-project/sglang/issues/45182) [Feature] Validate empty and non-mapping diffusion config files
- [#45094](https://github.com/sgl-project/sglang/issues/45094) [Feature] Reduce redundant tokenizer initialization during startup
- [#45074](https://github.com/sgl-project/sglang/issues/45074) [Feature] Offline batch runner for OpenAI batch files (follow-up to #7427)
- [#45066](https://github.com/sgl-project/sglang/issues/45066) [Feature] jit: Probe-once fail-fast when the toolchain cannot compile anything (glibc 2.42 rsqrt clash)

#### 🔒 Closed Issues
- [#32607](https://github.com/sgl-project/sglang/issues/32607) [Feature] Kimi K3 Roadmap
- [#34112](https://github.com/sgl-project/sglang/issues/34112) [Bug] Cancelling the tail request in a chunked-prefill batch still leaks one visible token and leaves negative scheduler output ids
- [#40897](https://github.com/sgl-project/sglang/issues/40897) [Bug] Inkling multimodal returns HTTP 500 instead of 400 for invalid image/audio input
- [#34899](https://github.com/sgl-project/sglang/issues/34899) [Feature] Bit-exact correctness coverage for Unified Radix Cache
- [#35189](https://github.com/sgl-project/sglang/issues/35189) [Bug] NIXL/UCX prefill segfault (nixlUcxSharedThread -> cuEventQuery) is not fixed — reproduces on v0.5.17 / CUDA 13.0 / B200; #23489 and #23499 were closed without a root cause
- [#35648](https://github.com/sgl-project/sglang/issues/35648) [Feature] [RFC] Same-GPU model replicas with managed CUDA MPS and a shared KV pool
- [#35723](https://github.com/sgl-project/sglang/issues/35723) [Bug] 0.5.17: generation degenerates into token loops on Qwen3.5-arch model (works on 0.5.6.dev, with/without DFLASH)
- [#35709](https://github.com/sgl-project/sglang/issues/35709) [RFC][NPU] Ascend Cross-Generation Device Adaptation
- [#35691](https://github.com/sgl-project/sglang/issues/35691) [Feature] Support Custom OTLP Trace Service Name
- [#35673](https://github.com/sgl-project/sglang/issues/35673) [Bug] Gemma-4-31B-it TP=8 hangs in the vision path on AMD/ROCm
- [#35620](https://github.com/sgl-project/sglang/issues/35620) [RFC] Integrating Ascend MemCache as an HiCache L3 Backend
- [#41151](https://github.com/sgl-project/sglang/issues/41151) [Perf] Padded decode CUDA-graph slots cost more with longer contexts on the triton backend (bs 5 on the bs-8 graph: 27.7 -> 35.9 ms/token at 30K)
- [#39355](https://github.com/sgl-project/sglang/issues/39355) [Feature] [NPU] Add ScatterPaKvCache as an optional KV-cache write backend
- [#32970](https://github.com/sgl-project/sglang/issues/32970) Kimi-K3 bug tracking

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 131,738 · **Open issues:** 2,556 · **Last push:** 1h ago

Today, llama.cpp released versions b11748, b11747, and b11744, introducing key improvements such as a fix for get_rows on reordered quantized weights and enhancements for the transformers Qwen-VL resize feature. Significant merges include the addition of cooperative-k dp4a GEMM support for various quantization levels and a fix for attachment text preview issues on the UI. A notable new issue was reported regarding a slowdown in model serving after the first request when using Vulkan multigpu with the MOE architecture, which has sparked discussions in the community. Overall, the day saw important updates aimed at refining performance and addressing user-reported bugs.

#### 🚀 New Releases
- [b11748](https://github.com/ggml-org/llama.cpp/releases/tag/b11748) b11748
- [b11747](https://github.com/ggml-org/llama.cpp/releases/tag/b11747) b11747
- [b11744](https://github.com/ggml-org/llama.cpp/releases/tag/b11744) b11744
- [b11742](https://github.com/ggml-org/llama.cpp/releases/tag/b11742) b11742
- [b11741](https://github.com/ggml-org/llama.cpp/releases/tag/b11741) b11741
- [b11740](https://github.com/ggml-org/llama.cpp/releases/tag/b11740) b11740
- [b11739](https://github.com/ggml-org/llama.cpp/releases/tag/b11739) b11739
- [b11738](https://github.com/ggml-org/llama.cpp/releases/tag/b11738) b11738
- [b11734](https://github.com/ggml-org/llama.cpp/releases/tag/b11734) b11734
- [b11732](https://github.com/ggml-org/llama.cpp/releases/tag/b11732) b11732

#### ✅ Merged PRs
- [#30430](https://github.com/ggml-org/llama.cpp/pull/30430) sycl : fix get_rows on reordered quantized weights
- [#30736](https://github.com/ggml-org/llama.cpp/pull/30736) mtmd : match the transformers Qwen-VL resize
- [#30754](https://github.com/ggml-org/llama.cpp/pull/30754) ci, docs: add WASI CI and docs
- [#30713](https://github.com/ggml-org/llama.cpp/pull/30713) ci : re-enable type/lint-check for skills
- [#28277](https://github.com/ggml-org/llama.cpp/pull/28277) server: add --connect, allow p2p access to server outside LAN
- [#30806](https://github.com/ggml-org/llama.cpp/pull/30806) ui : fix attachment text preview clipped when a line is longer than the container
- [#30637](https://github.com/ggml-org/llama.cpp/pull/30637) Replace MoE LRU cache with a 50/50 SLRU cache
- [#30825](https://github.com/ggml-org/llama.cpp/pull/30825) hybrid dna tokenizer fixes
- [#30741](https://github.com/ggml-org/llama.cpp/pull/30741) opencl: add cooperative-k dp4a gemm for q4_0, q4_k and q6_k
- [#30756](https://github.com/ggml-org/llama.cpp/pull/30756) opencl: add get_rows for i32, cpy for i32 and f32
- [#30819](https://github.com/ggml-org/llama.cpp/pull/30819) jinja : implement `unique` filter
- [#30666](https://github.com/ggml-org/llama.cpp/pull/30666) server : fix swa checkpoint invalidation logic
- [#30785](https://github.com/ggml-org/llama.cpp/pull/30785) vendor : update cpp-httplib to 0.62.0
- [#30795](https://github.com/ggml-org/llama.cpp/pull/30795) metal : fix moe_reduce fusion race when dst aliases its inputs
- [#25273](https://github.com/ggml-org/llama.cpp/pull/25273) CANN: Refactor `#ifdef` blocks to avoid unreachable code after `return`
- [#30705](https://github.com/ggml-org/llama.cpp/pull/30705) tests: add big-endian conversion tests
- [#30774](https://github.com/ggml-org/llama.cpp/pull/30774) CUDA: fix warning for nonexistent extra semicolon
- [#30791](https://github.com/ggml-org/llama.cpp/pull/30791) ggml-cpu(s390x): vectorize various vec functions
- [#30764](https://github.com/ggml-org/llama.cpp/pull/30764) tests : update Metal fusion baseline for beam
- [#30553](https://github.com/ggml-org/llama.cpp/pull/30553) cuda: cap MMQ Stream-K blocks at available work
- [#30607](https://github.com/ggml-org/llama.cpp/pull/30607) qwen3 : bidirectional attention and dense_2 output projection
- [#30687](https://github.com/ggml-org/llama.cpp/pull/30687) ui: Fix markdown tables and lists being cut off on phones
- [#30497](https://github.com/ggml-org/llama.cpp/pull/30497) Reject truncated GGUF tensor data in split and export tools
- [#30762](https://github.com/ggml-org/llama.cpp/pull/30762) pi : turn .pi/gg into a system prompt addendum
- [#30573](https://github.com/ggml-org/llama.cpp/pull/30573) CUDA: fix shared-memory WAR hazard in flash_attn_ext_vec

#### 🐛 New Issues
- [#30799](https://github.com/ggml-org/llama.cpp/issues/30799) Eval bug: serve slow down after 1st request vulkan multigpu moe `bug-unconfirmed` 💬4
- [#30794](https://github.com/ggml-org/llama.cpp/issues/30794) RPC: DeepSeek V4 output degenerates to a repeated token with two RPC workers after a long prompt, and the slot stays corrupted 💬3
- [#30805](https://github.com/ggml-org/llama.cpp/issues/30805) Eval bug: DIMWIT llamacpp + CRIMINAL huggingface international hijackers break model when people update their models in HF. `bug-unconfirmed` 💬3
- [#30787](https://github.com/ggml-org/llama.cpp/issues/30787) Misc. bug: Tokenizer (GPT-4o and Tekken pre-tokenizers): token IDs differ from HF because combining marks are split off their letters (Hindi, Thai) `bug-unconfirmed` 💬2
- [#30807](https://github.com/ggml-org/llama.cpp/issues/30807) Feature Request: llama-server Model ADMIN API `enhancement` 💬2
- [#30839](https://github.com/ggml-org/llama.cpp/issues/30839) Compile bug: Fail to build with mma.cuh:1424 v0.7.0 gfx1151 `bug-unconfirmed` 💬2
- [#30827](https://github.com/ggml-org/llama.cpp/issues/30827) Feature Request: Add i18n / multi-language support to Web UI for Chinese and other languages 💬2
- [#30844](https://github.com/ggml-org/llama.cpp/issues/30844) tq2 `bug-unconfirmed`
- [#30796](https://github.com/ggml-org/llama.cpp/issues/30796) Misc. bug: WebUI - unable to see attachment text if it contains very long lines `bug-unconfirmed`
- [#30841](https://github.com/ggml-org/llama.cpp/issues/30841) Misc. bug: Vulkan GPU device ordering affects PP performance `bug-unconfirmed`
- [#30838](https://github.com/ggml-org/llama.cpp/issues/30838) Misc. bug: Perf: ROCm/RDNA4 (gfx1201) FlashAttention prefill with head size 512 (Gemma 4 global layers) is ~4x less efficient than head 256 `bug-unconfirmed`
- [#30835](https://github.com/ggml-org/llama.cpp/issues/30835) Misc. bug: Missing range check on grammar_triggers[].type allows remote SIGABRT in llama-server `bug-unconfirmed`
- [#30834](https://github.com/ggml-org/llama.cpp/issues/30834) Misc. bug: llama-server: Unbounded from_json recursion causes SIGSEGV `bug-unconfirmed`
- [#30833](https://github.com/ggml-org/llama.cpp/issues/30833) Misc. bug: llama-server: Unbounded dry_sequence_breakers causes CPU and memory exhaustion `bug-unconfirmed`
- [#30832](https://github.com/ggml-org/llama.cpp/issues/30832) Vulkan] Fix severe RDNA2 Flash Attention bottleneck/slowdown by bypassing strict shmem limits and enabling native Wave32 subgroup execution. `bug-unconfirmed`
- [#30830](https://github.com/ggml-org/llama.cpp/issues/30830) deepseek2: YaRN beta_fast/beta_slow are never read from the GGUF (Kimi K2 specifies 1/1, the loader defaults to 32/1)
- [#30822](https://github.com/ggml-org/llama.cpp/issues/30822) Feature Request: Add i18n / multi-language support to Web UI for Chinese and other languages
- [#30816](https://github.com/ggml-org/llama.cpp/issues/30816) Misc. bug: llama-server /v1/rerank pastes the document into a query that contains the literal text {document}
- [#30793](https://github.com/ggml-org/llama.cpp/issues/30793) Regression: first-inference TTFT 10s → 60s+ with large CPU-resident MoE weights after #30449
- [#30811](https://github.com/ggml-org/llama.cpp/issues/30811) Misc. bug: Reasoning display scrolls in a weird way when the browser zoom is over 100% `bug-unconfirmed`
- [#30798](https://github.com/ggml-org/llama.cpp/issues/30798) Feature Request: architecture 'nemotron_h_moe' tensor support `enhancement`
- [#30790](https://github.com/ggml-org/llama.cpp/issues/30790) Feature Request: native q8_0 KV in the CUDA flash-attention TILE kernel (bs=1 decode) `enhancement`
- [#30786](https://github.com/ggml-org/llama.cpp/issues/30786) Misc. bug: Incorrect affected and patched versions in security advisories `bug-unconfirmed`

#### 🔒 Closed Issues
- [#20176](https://github.com/ggml-org/llama.cpp/issues/20176) Eval bug: Qwen 3.5 Loading checkpoints causes a crash
- [#21779](https://github.com/ggml-org/llama.cpp/issues/21779) (Planning) add model management API to server
- [#27678](https://github.com/ggml-org/llama.cpp/issues/27678) Misc. bug: CUDA FlashAttention synccheck reports divergent __syncthreads
- [#30404](https://github.com/ggml-org/llama.cpp/issues/30404) Eval bug: CUDA illegal memory access (MUL_MAT) on RTX 5090 with cohere2moe
- [#30807](https://github.com/ggml-org/llama.cpp/issues/30807) Feature Request: llama-server Model ADMIN API
- [#30827](https://github.com/ggml-org/llama.cpp/issues/30827) Feature Request: Add i18n / multi-language support to Web UI for Chinese and other languages
- [#30744](https://github.com/ggml-org/llama.cpp/issues/30744) Refactor: Remove extra ; as it give a warning when compling with CUDA
- [#28167](https://github.com/ggml-org/llama.cpp/issues/28167) Eval bug: Linux version of webui (llama-server) is "inventing" prompt tokens (more than 200 "extra" tokens) and output gets degraded
- [#29826](https://github.com/ggml-org/llama.cpp/issues/29826) Feature Request: CUDA: reduce VRAM usage of FA convert buffer for quantized KV caches
- [#30428](https://github.com/ggml-org/llama.cpp/issues/30428) Misc. bug: [SYCL] GET_ROWS returns wrong values or NaN on weights reordered by MUL_MAT
- [#30796](https://github.com/ggml-org/llama.cpp/issues/30796) Misc. bug: WebUI - unable to see attachment text if it contains very long lines
- [#30605](https://github.com/ggml-org/llama.cpp/issues/30605) Qwen3 embeddings with bidirectional attention and an output projection

### Ollama (`ollama/ollama`)

**Stars:** 183,875 · **Open issues:** 4,364 · **Last push:** 1h ago

On October 20, 2026, there were no new releases for Ollama, but several important pull requests were merged, including #19150, which ensures the CLAUDE_CODE_AUTO_COMPACT_WINDOW remains within allowed values, and #19144, which implements a cancellation of remote inference when clients disconnect. Additionally, #19003 allows the OpenAI integration to accept foreign compaction in response history. Among the new issues reported, #19139 highlights a connection reset problem on Windows with large prompts, which has garnered attention from users. Another interesting discussion is sparked by #19136, a feature request for a local MoE PCIe Prefetcher that promises a 46% increase in token speed, introduced by a 16-year-old developer.

#### ✅ Merged PRs
- [#19150](https://github.com/ollama/ollama/pull/19150) Clamp CLAUDE_CODE_AUTO_COMPACT_WINDOW between allowed values
- [#19144](https://github.com/ollama/ollama/pull/19144) server: cancel remote inference when clients disconnect
- [#19003](https://github.com/ollama/ollama/pull/19003) openai: accept foreign compaction in Responses history

#### 🐛 New Issues
- [#19137](https://github.com/ollama/ollama/issues/19137) Ollama Generate node turns red when using (keep_context) and switching between models in current session `bug` 💬5
- [#19139](https://github.com/ollama/ollama/issues/19139) Windows: Ollama /api/chat connection resets after approximately 15 seconds with large prompts `bug` 💬4
- [#19136](https://github.com/ollama/ollama/issues/19136) Feature Request: Local MoE PCIe Prefetcher (+46% tok/s) built by a 16yo! `feature request` 💬1
- [#19156](https://github.com/ollama/ollama/issues/19156) Cloud: deepseek-v4.1-flash (:1017-cloud and :cloud) returns corrupted text when a system message constrains the reply — output breaks mid-token, sometimes leaks server error strings
- [#19155](https://github.com/ollama/ollama/issues/19155) Cloud Responses API returns HTTP 413 for ~10.7 MiB coding requests
- [#19151](https://github.com/ollama/ollama/issues/19151) OpenAI compat: assistant tool_calls attached to previous message when content is an empty array
- [#19128](https://github.com/ollama/ollama/issues/19128) mlx: create refuses MLX checkpoints whose config.json gives only model_type
- [#19124](https://github.com/ollama/ollama/issues/19124) Proposal: add Mux coding agent to ollama launch `feature request`
- [#19126](https://github.com/ollama/ollama/issues/19126) mlxrunner: fused linear-attention kernels skip float16 activations
- [#19127](https://github.com/ollama/ollama/issues/19127) mlxrunner: Qwen 3.5 vision scrambles mlx-vlm's channels-last patch embedding
- [#19129](https://github.com/ollama/ollama/issues/19129) mlxrunner: Qwen3 runtime ignores YaRN rope scaling
- [#19138](https://github.com/ollama/ollama/issues/19138) Nemotron-3.5-bolt:latest crashes llama server on Apple Silicon with prompts longer than 42 characters `bug`

#### 🔒 Closed Issues
- [#18642](https://github.com/ollama/ollama/issues/18642) [Bug] CUDA illegal memory access (MUL_MAT) on RTX 5090 with Cohere MoE architecture (Windows)
- [#19136](https://github.com/ollama/ollama/issues/19136) Feature Request: Local MoE PCIe Prefetcher (+46% tok/s) built by a 16yo!
- [#19138](https://github.com/ollama/ollama/issues/19138) Nemotron-3.5-bolt:latest crashes llama server on Apple Silicon with prompts longer than 42 characters

### LiteLLM (`BerriAI/litellm`)

**Stars:** 61,592 · **Open issues:** 5,554 · **Last push:** <1h ago

Today saw no new releases for LiteLLM, but several important merges were made, including the addition of EOL deprecation dates for Palmyra models in PR #47462 and fixes to token counting to restore compatibility with Google's request format on stable/1.104.x in PR #47446. PR #47460 also addressed billing issues related to text embeddings on Google Cloud, while multiple performance improvements were implemented, such as resolving deployment usage limits more efficiently with PR #47393. Among new issues, notable bugs include #47332, which highlights a streaming bug affecting usage logging and cached tokens, and #47340 concerning token limit refill issues in an in-memory cache. Overall, the day's focus was on stability and performance enhancements rather than new features.

#### ✅ Merged PRs
- [#47462](https://github.com/BerriAI/litellm/pull/47462) chore(bedrock): add Model EOL deprecation dates for Palmyra X4, X5 and Pegasus v1.2
- [#47463](https://github.com/BerriAI/litellm/pull/47463) test(images): stop writing image edit responses to disk
- [#45092](https://github.com/BerriAI/litellm/pull/45092) fix(friendliai): drop litellm-internal message fields before sending
- [#47455](https://github.com/BerriAI/litellm/pull/47455) test(e2e/perf): read the memory baseline after a one minute warm-up
- [#47460](https://github.com/BerriAI/litellm/pull/47460) fix(vertex_ai): bill per-character text embeddings on Google's billableCharacterCount
- [#47420](https://github.com/BerriAI/litellm/pull/47420) test: catch regressions in the validation lines #44798 added
- [#47456](https://github.com/BerriAI/litellm/pull/47456) fix(logging): do not stamp a provider handoff when pre_call runs for a proxy-only failure
- [#47454](https://github.com/BerriAI/litellm/pull/47454) fix(proxy): restore legacy token count input precedence
- [#47393](https://github.com/BerriAI/litellm/pull/47393) perf(router): resolve deployment usage limits once per deployment instead of every request
- [#47452](https://github.com/BerriAI/litellm/pull/47452) chore: add yassin-berriai as code owner for helm/ and terraform/
- [#47447](https://github.com/BerriAI/litellm/pull/47447) fix(vertex-ai): drop floor deprecation_date from gemini-3.8-live
- [#44951](https://github.com/BerriAI/litellm/pull/44951) chore(hooks): drop Conventional Branches pre-push hook in favor of litellm_ prefix
- [#47446](https://github.com/BerriAI/litellm/pull/47446) fix(count_tokens): restore Google request compatibility on stable/1.104.x
- [#47373](https://github.com/BerriAI/litellm/pull/47373) fix(cost): bill Gemini audio/image/video prompt tokens at the resolved input rate when no modality rate exists
- [#47423](https://github.com/BerriAI/litellm/pull/47423) fix(exa): return highlights, highlight scores, score and the response envelope from Exa search
- [#47400](https://github.com/BerriAI/litellm/pull/47400) perf(savings): read deployment pricing from the router's cached model info
- [#47435](https://github.com/BerriAI/litellm/pull/47435) fix(proxy): price the estimated input tokens on a read-timed-out request's spend row
- [#47394](https://github.com/BerriAI/litellm/pull/47394) fix(anthropic): apply tool_config cache-control points on chat and /v1/messages
- [#47427](https://github.com/BerriAI/litellm/pull/47427) perf(gateway): store each prometheus label set once and share it across metrics
- [#44551](https://github.com/BerriAI/litellm/pull/44551) fix(speech)!: correctly propagate spend logging and usage for Gemini TTS bridge
- [#46293](https://github.com/BerriAI/litellm/pull/46293) feat(proxy)!: personal keys inherit MCP server, MCP tool and agent access from the owner's teams
- [#46649](https://github.com/BerriAI/litellm/pull/46649) fix(mcp)!: retry upstream 429 on tools/list and error when every server fails
- [#47425](https://github.com/BerriAI/litellm/pull/47425) test(perf): stop flagging load-balanced worker reads as restarts in database upgrade test
- [#46738](https://github.com/BerriAI/litellm/pull/46738) fix(scim)!: store PATCH enterprise extension attributes in metadata.scim_enterprise
- [#47389](https://github.com/BerriAI/litellm/pull/47389) fix(count_tokens): backport October 19 fixes to stable/1.104.x
- [#35643](https://github.com/BerriAI/litellm/pull/35643) fix(proxy): refresh cached team on /team/block and /team/unblock
- [#47412](https://github.com/BerriAI/litellm/pull/47412) test(integration): wait for every worker to report the websocket session cap instead of sleeping
- [#47385](https://github.com/BerriAI/litellm/pull/47385) feat(cli): add lite claude --subscription and pkce config default
- [#47410](https://github.com/BerriAI/litellm/pull/47410) test(integration): read stream stall spend rows from the proxy that served them
- [#47408](https://github.com/BerriAI/litellm/pull/47408) test(ui-e2e): read the virtual key from its own pre in the Save your Key dialog
- [#47407](https://github.com/BerriAI/litellm/pull/47407) test(integration): expect the requested model in streamed Responses events on the arize v2 rig
- [#47409](https://github.com/BerriAI/litellm/pull/47409) test(integration): check SSO sign-in removal without reaching the public internet
- [#47171](https://github.com/BerriAI/litellm/pull/47171) fix(proxy): stop billing every OpenAI pass-through /responses sub-route as a Responses call
- [#46552](https://github.com/BerriAI/litellm/pull/46552) fix(managed_files): send provider file ids when creating a fine-tuning job from managed files
- [#47348](https://github.com/BerriAI/litellm/pull/47348) fix(azure): cache the remaining per-request Entra credentials and keep token refresh off the event loop
- [#47355](https://github.com/BerriAI/litellm/pull/47355) fix(gateway): stop serving routes outside the hooks and return reservations of failed requests
- [#47403](https://github.com/BerriAI/litellm/pull/47403) perf(gateway): run admission hooks concurrently
- [#47406](https://github.com/BerriAI/litellm/pull/47406) feat(router): let a deployment set a timeout per service_tier
- [#47197](https://github.com/BerriAI/litellm/pull/47197) perf(gateway): admit rate limits in one redis round trip and send scripts by hash
- [#47384](https://github.com/BerriAI/litellm/pull/47384) fix(prometheus): label deployment failures with the deployment's provider instead of None
- [#47183](https://github.com/BerriAI/litellm/pull/47183) fix(decisions): log every request field the caller sent on /v1/systemone and /v1/decisions
- [#47347](https://github.com/BerriAI/litellm/pull/47347) fix(anthropic)!: answer 400 for a malformed tool_result text on /v1/messages and count_tokens
- [#47404](https://github.com/BerriAI/litellm/pull/47404) fix(vertex-ai): drop floor deprecation_date from gemini-4-argon
- [#47182](https://github.com/BerriAI/litellm/pull/47182) fix(logging): report the cost-map entry billing used in model_map_information
- [#47401](https://github.com/BerriAI/litellm/pull/47401) feat(search): add DeepSeek as a /v1/search provider
- [#47395](https://github.com/BerriAI/litellm/pull/47395) chore(pricing): add meta sam-3.1 image segmentation price
- [#43935](https://github.com/BerriAI/litellm/pull/43935) fix(openai): drop unsupported reasoning effort for gpt-6.1-sol
- [#47303](https://github.com/BerriAI/litellm/pull/47303) test(integration): hold the upstream until the disconnect is settled before reading its spend row
- [#47120](https://github.com/BerriAI/litellm/pull/47120) fix(router): record cooled deployments on the all-cooled failure row
- [#47362](https://github.com/BerriAI/litellm/pull/47362) feat(loadtest): chat completions parity check between the python proxy and the gateway
- [#47388](https://github.com/BerriAI/litellm/pull/47388) feat(gateway): land the chat provider series and full-feature load test on the poc branch
- [#47367](https://github.com/BerriAI/litellm/pull/47367) fix(gateway): estimate stream usage an openai-compatible provider does not send
- [#47368](https://github.com/BerriAI/litellm/pull/47368) fix(gateway): keep drop_params and its siblings out of the openai request
- [#47366](https://github.com/BerriAI/litellm/pull/47366) fix(gateway): translated chat answers carry a chatcmpl id and object
- [#47365](https://github.com/BerriAI/litellm/pull/47365) fix(gateway): bedrock chat uses the aws settings in the deployment config
- [#47378](https://github.com/BerriAI/litellm/pull/47378) fix(deps): require anyio>=4.14.0 to rule out the lock-waiter deadlock
- [#44763](https://github.com/BerriAI/litellm/pull/44763) feat(proxy): opt-in self-serve budget edits for key owners on /key/update
- [#47056](https://github.com/BerriAI/litellm/pull/47056) fix(helm): stop litellm-helm from injecting placeholder models into every install
- [#47344](https://github.com/BerriAI/litellm/pull/47344) fix(proxy): backport #47067 team-scoped batch model access to stable/1.104.x for v1.104.4
- [#47371](https://github.com/BerriAI/litellm/pull/47371) fix(cost-map): add fireworks minimax m3.1 flash standard prices
- [#47370](https://github.com/BerriAI/litellm/pull/47370) chore(pricing): add github_copilot/claude-opus-4.8 deprecation date
- [#47369](https://github.com/BerriAI/litellm/pull/47369) build(deps): bump aiohttp to 3.14.5 to clear osv-scan
- [#47342](https://github.com/BerriAI/litellm/pull/47342) test(cost): add vertex claude-haiku-5-5 long context cases and wire gpt and gemini-3.8-flash bridge legs
- [#47099](https://github.com/BerriAI/litellm/pull/47099) feat(gateway): native chat for openai-compatible providers
- [#47098](https://github.com/BerriAI/litellm/pull/47098) feat(gateway): gemini chat completions on google ai studio and vertex ai
- [#47207](https://github.com/BerriAI/litellm/pull/47207) feat(loadtest): full-feature mode with recorded-data verification
- [#47220](https://github.com/BerriAI/litellm/pull/47220) fix(gateway): stop hooks pinning connection read buffers for a stream's life
- [#47236](https://github.com/BerriAI/litellm/pull/47236) feat(loadtest): bifrost as a third side of the full-feature run
- [#47206](https://github.com/BerriAI/litellm/pull/47206) fix(gateway): find anthropic stream usage by event name
- [#47101](https://github.com/BerriAI/litellm/pull/47101) feat(gateway): claude chat completions on vertex ai
- [#47088](https://github.com/BerriAI/litellm/pull/47088) feat(gateway): full openai chat request translation for anthropic and bedrock
- [#47326](https://github.com/BerriAI/litellm/pull/47326) fix(cost-map): enable function calling + tool choice for fireworks deepseek-v4p1-flash-1017
- [#47074](https://github.com/BerriAI/litellm/pull/47074) feat(gateway): azure openai chat completions through the openai passthrough
- [#47077](https://github.com/BerriAI/litellm/pull/47077) feat(gateway): anthropic and bedrock chat completions streaming
- [#47044](https://github.com/BerriAI/litellm/pull/47044) feat(gateway): enforce key, team, user, member and end-user budgets on shared spend counters
- [#47063](https://github.com/BerriAI/litellm/pull/47063) feat(gateway): s3_v2 observer writing the proxy's logging payload to S3
- [#47055](https://github.com/BerriAI/litellm/pull/47055) feat(gateway): model capacity hook, the proxy's dynamic rate limiter
- [#47060](https://github.com/BerriAI/litellm/pull/47060) feat(gateway): prometheus observer with the proxy's metric and label names
- [#47050](https://github.com/BerriAI/litellm/pull/47050) feat(gateway): enforce key, user, team, member and end-user rate limits on shared counters
- [#47173](https://github.com/BerriAI/litellm/pull/47173) fix(count_tokens)!: count tools the way DeepSeek V4 and Qwen3.5 chat templates render them
- [#47041](https://github.com/BerriAI/litellm/pull/47041) feat(gateway): write spend to the proxy's database from a native observer
- [#47054](https://github.com/BerriAI/litellm/pull/47054) feat(gateway): configurable header, spend metadata and provider metadata hooks
- [#47032](https://github.com/BerriAI/litellm/pull/47032) feat(gateway): hooks and observers around inference requests, with usage and cost
- [#44666](https://github.com/BerriAI/litellm/pull/44666) feat(ui): show kubernetes pods on the model page
- [#44393](https://github.com/BerriAI/litellm/pull/44393) feat(router): keep a session on one kubernetes pod
- [#44342](https://github.com/BerriAI/litellm/pull/44342) feat(router): discover kubernetes pods behind a headless service api_base
- [#46945](https://github.com/BerriAI/litellm/pull/46945) fix(baseten): list current Model APIs instead of retired 2023 deployment IDs
- [#47145](https://github.com/BerriAI/litellm/pull/47145) perf(streaming): reuse the built choice and delta on plain openai-compatible chunks
- [#47346](https://github.com/BerriAI/litellm/pull/47346) chore(cost-map): add fireworks minimax m3.1 flash priority prices from the prices api
- [#47218](https://github.com/BerriAI/litellm/pull/47218) refactor(rust): fold inference-chat prepare into its handler
- [#47217](https://github.com/BerriAI/litellm/pull/47217) refactor(rust): fold inference-messages prepare into its handler
- [#47216](https://github.com/BerriAI/litellm/pull/47216) refactor(rust): fold inference-ocr prepare into its handler
- [#47215](https://github.com/BerriAI/litellm/pull/47215) refactor(rust): fold inference-responses prepare into its handler
- [#47214](https://github.com/BerriAI/litellm/pull/47214) refactor(rust): fold inference-transcription prepare into its handler
- [#45727](https://github.com/BerriAI/litellm/pull/45727) fix(router)!: count native Responses WebSocket turns toward deployment limits and budgets
- [#46421](https://github.com/BerriAI/litellm/pull/46421) fix(azure): reuse the cached Entra token provider on the Responses path
- [#47316](https://github.com/BerriAI/litellm/pull/47316) fix(azure): route WebRTC client_secrets and calls to the GA v1 realtime API
- [#47318](https://github.com/BerriAI/litellm/pull/47318) chore(pricing): add meta muse-image-1.0 per-image price
- [#44795](https://github.com/BerriAI/litellm/pull/44795) fix(vertex_ai): price streamed pass-through calls with the regional uplift
- [#46190](https://github.com/BerriAI/litellm/pull/46190) fix(proxy): sanitize unexpected database errors from /key/info
- [#47294](https://github.com/BerriAI/litellm/pull/47294) fix(vertex-ai): drop floor deprecation_date from gemini-3.8-flash
- [#47292](https://github.com/BerriAI/litellm/pull/47292) fix(azure): set azure/container code interpreter session price from the azure openai pricing page
- [#47291](https://github.com/BerriAI/litellm/pull/47291) feat(cost-map): add together_ai DeepSeek-V4.1-Flash-1017
- [#46572](https://github.com/BerriAI/litellm/pull/46572) feat(rust): encode LiteLLM response ids on native responses
- [#46567](https://github.com/BerriAI/litellm/pull/46567) test(rust): native vs Python parity harness for responses

#### 🐛 New Issues
- [#47332](https://github.com/BerriAI/litellm/issues/47332) [Bug]: Stream cut after finish_reason but before the include_usage chunk is logged as success with locally counted usage (cached_tokens lost, billed at full input rate) `llm translation` 💬3
- [#47327](https://github.com/BerriAI/litellm/issues/47327) [Bug]: token_counter rejects image detail "original", so pre-call checks log ERROR and skip the context window check `llm translation` 💬3
- [#47320](https://github.com/BerriAI/litellm/issues/47320) [Bug]: generic_api logger drops a full-queue batch when the logging worker times it out `bug` `llm translation`
- [#47396](https://github.com/BerriAI/litellm/issues/47396) [Bug]: Budget reservation prices max_input_tokens when /v1/messages carries an Anthropic-format tool_choice (token_counter KeyError) `llm translation` 💬2
- [#47340](https://github.com/BerriAI/litellm/issues/47340) tpm_limit never refills with in-memory cache: token window does not roll, only resets on /key/update 💬2
- [#47308](https://github.com/BerriAI/litellm/issues/47308) [Bug]: Decisions feature not working with custom decision-capable model. `bug` `llm translation` 💬2
- [#47374](https://github.com/BerriAI/litellm/issues/47374) [Bug]: A slow logging callback cancels the proxy's spend-log write (LoggingWorker timeout covers all callbacks in one coroutine) `llm translation` 💬1
- [#47301](https://github.com/BerriAI/litellm/issues/47301) [Bug]: cohere embeddings ignore the `timeout` parameter in the sync path `llm translation` 💬1
- [#47300](https://github.com/BerriAI/litellm/issues/47300) [Bug]: gemini and vertex_ai embeddings ignore the `timeout` parameter (sync and async) `llm translation` 💬1
- [#47299](https://github.com/BerriAI/litellm/issues/47299) [Bug]: huggingface embeddings ignore the `timeout` parameter (sync and async) `llm translation` 💬1
- [#47295](https://github.com/BerriAI/litellm/issues/47295) [Bug]: Prometheus budget remaining hours gauges are off by the host's UTC offset when the proxy's TZ is not UTC `llm translation` 💬1
- [#47431](https://github.com/BerriAI/litellm/issues/47431) `image_generation`: `max_retries` is ignored for OpenAI-compatible providers (always 2 retries) `llm translation`
- [#47421](https://github.com/BerriAI/litellm/issues/47421) [Feature]: Skip prompt_caching pre-call checks for single-deployment model groups `enhancement` `llm translation`
- [#47414](https://github.com/BerriAI/litellm/issues/47414) Custom batch threshold prices are dropped by get_model_info `llm translation`
- [#47413](https://github.com/BerriAI/litellm/issues/47413) [Bug]: End-user restricted registry lookup scans large EndUser tables on cache reload
- [#47397](https://github.com/BerriAI/litellm/issues/47397) [Bug]: /v1/messages forwards messages[].output_config to Bedrock/Vertex models that reject it; no fallback to strip it `llm translation` `claude code`
- [#47382](https://github.com/BerriAI/litellm/issues/47382) [Bug]: Bedrock /v1/messages: claude-opus-5-5 rejects thinking.type=enabled, no adaptive translation and output_config is stripped `llm translation` `claude code`
- [#47381](https://github.com/BerriAI/litellm/issues/47381) [Bug]: Bedrock /v1/messages: strip-and-resign retry after invalid thinking signature reuses stale SigV4 Authorization (InvalidSignatureException) `llm translation` `claude code`
- [#47339](https://github.com/BerriAI/litellm/issues/47339) reset_budget_windows() raises on every run: where={"budget_limits": {"not": None}} is not a valid Prisma null filter
- [#47302](https://github.com/BerriAI/litellm/issues/47302) [Feature]: Auto Router should recognize Codex compaction as an agent lifecycle request `llm translation`
- [#47297](https://github.com/BerriAI/litellm/issues/47297) [Bug]: Disk cache runs code from a tampered cache entry (CVE-2025-69872) `bug`

#### 🔒 Closed Issues
- [#24659](https://github.com/BerriAI/litellm/issues/24659) [Bug]: Azure openai realtime WebRTC flow
- [#44546](https://github.com/BerriAI/litellm/issues/44546) [Bug]: aspeech calls a synchronous speech provider twice (Gemini TTS billed twice upstream)
- [#33212](https://github.com/BerriAI/litellm/issues/33212) [Bug]: Non-admin users cannot set max_budget on personal keys via UI
- [#40388](https://github.com/BerriAI/litellm/issues/40388) [Bug]: MockValSer is not an instance of SchemaSerializer (SAP AI Core)
- [#27292](https://github.com/BerriAI/litellm/issues/27292) [Bug]: UI forces team selection for personal keys even when user has model access
- [#33074](https://github.com/BerriAI/litellm/issues/33074) [Bug]: LiteLLM v1.92 budget_fallbacks issue
- [#47332](https://github.com/BerriAI/litellm/issues/47332) [Bug]: Stream cut after finish_reason but before the include_usage chunk is logged as success with locally counted usage (cached_tokens lost, billed at full input rate)
- [#42770](https://github.com/BerriAI/litellm/issues/42770) [Bug]: websearch_interception + use_chat_completions_api: streaming /v1/responses 500s — bridge returns non-async-iterable ResponsesAPIResponse
- [#44755](https://github.com/BerriAI/litellm/issues/44755) [Bug]: streamed Vertex AI pass-through spend ignores the regional endpoint uplift
- [#33220](https://github.com/BerriAI/litellm/issues/33220) [Feature]: Support AWS IAM Outbound Identity Federation as an OIDC identity provider (oidc/aws/)
- [#44048](https://github.com/BerriAI/litellm/issues/44048) anyio has no declared floor, leaving litellm exposed to a known lock-waiter-deadlock bug (agronholm/anyio#1145)
- [#43228](https://github.com/BerriAI/litellm/issues/43228) Feature request: configurable self-serve budget adjustment policy for a key's own owner
- [#44847](https://github.com/BerriAI/litellm/issues/44847) [Bug]: unifying the Bedrock chat-invoke beta filter (#26148 follow-up) will silently break native structured output, since bedrock.structured-outputs-2025-11-13 is null
- [#33159](https://github.com/BerriAI/litellm/issues/33159) [Feature]: Allow read-only users to view the Models list in Proxy UI
- [#33161](https://github.com/BerriAI/litellm/issues/33161) [Feature]: Configurable weekly budget reset day (currently hardcoded to Monday based on config timezone)
- [#33166](https://github.com/BerriAI/litellm/issues/33166) [BUG] prompt_tokens_details silently reset to None in streaming usage aggregation when a later chunk omits it
- [#33211](https://github.com/BerriAI/litellm/issues/33211) [Bug]: Incorrect Bedrock geo cross-region inference ID for Amazon Nova 2 Lite (apac. doesn't exist, jp. is missing)
- [#33273](https://github.com/BerriAI/litellm/issues/33273) Router mid-stream fallback drops pre-fallback partial token usage from combined usage
- [#37502](https://github.com/BerriAI/litellm/issues/37502) Exa AI search: highlights, score, and response metadata (costDollars, requestId) silently dropped in transform_search_response
- [#38531](https://github.com/BerriAI/litellm/issues/38531) [Bug]: litellm_deployment_failure_responses_total emits api_provider="None" when a resolved deployment fails without custom_llm_provider set
- [#46627](https://github.com/BerriAI/litellm/issues/46627) [Bug]: System One questions are omitted from standard logging and S3 callback payloads
- [#46651](https://github.com/BerriAI/litellm/issues/46651) [Bug]: Deployment custom pricing is billed correctly but callback and spend-log model-map rates use backend prices
- [#43910](https://github.com/BerriAI/litellm/issues/43910) [Bug]: GPT-6.1 Sol forwards unsupported none/minimal reasoning effort on Chat Completions and Responses
- [#46419](https://github.com/BerriAI/litellm/issues/46419) [Bug]: Azure Responses API with enable_azure_ad_token_refresh fetches a new Entra token on every request, blocking the event loop
- [#44547](https://github.com/BerriAI/litellm/issues/44547) [Bug]: /v1/audio/speech through the Gemini speech-to-completion bridge writes no spend log
- [#35565](https://github.com/BerriAI/litellm/issues/35565) [Bug]: Team block and unblock leave cached auth state unchanged
- [#46205](https://github.com/BerriAI/litellm/issues/46205) [Feature]: Let a deployment set a different timeout per service_tier (e.g. longer for flex)

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,276 · **Open issues:** 319 · **Last push:** <1h ago

On October 20, 2026, Unsloth released version v0.1.909-beta, featuring updates to DeepSeek-V4.1 with enhanced capabilities such as running locally, support for images and videos in chat, and multi-GPU training with FSDP2 in alpha. Key merged features included improvements to the handling of external library compatibility, optimization for chat generation to avoid unnecessary reindexing, and enhancements to the FSDP2 for better performance during model training. Notably, new bugs were reported, including issues with the Model Hub filters and an unresponsive "Max Tool Call Duration" slider for HTTP/SSE MCP tools. The team continues to address these challenges while pushing the boundaries of functionality.

#### 🚀 New Releases
- [v0.1.909-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.909-beta) DeepSeek-V4.1 & FLUX-3

#### ✅ Merged PRs
- [#14302](https://github.com/unslothai/unsloth/pull/14302) whisper.cpp: skip the macOS release walk when llama.cpp is ahead of every release
- [#14299](https://github.com/unslothai/unsloth/pull/14299) Import fix: torchao 0.17+ on torch 2.6 (torch.utils._pytree.register_constant)
- [#14266](https://github.com/unslothai/unsloth/pull/14266) Studio: update external llama.cpp default port to 9931
- [#14217](https://github.com/unslothai/unsloth/pull/14217) Avoid unnecessary attachment reindexing on chat generation
- [#14098](https://github.com/unslothai/unsloth/pull/14098) fix(rag): avoid long CPU stalls when archiving tool calls
- [#14294](https://github.com/unslothai/unsloth/pull/14294) Retry the audio.cpp server on a new port when its port is taken
- [#14192](https://github.com/unslothai/unsloth/pull/14192) GRPO: reduce the IS ratio metric per sequence for geometric modes and the env override
- [#14165](https://github.com/unslothai/unsloth/pull/14165) FSDP2 QLoRA: keep packed 4-bit bytes out of the loader dtype pass, fix merged_4bit save
- [#14225](https://github.com/unslothai/unsloth/pull/14225) Studio: change Parallel Slots from the API page's Slots readout
- [#14240](https://github.com/unslothai/unsloth/pull/14240) CI: raise the Core zoo job cap from 25 to 35 minutes
- [#14226](https://github.com/unslothai/unsloth/pull/14226) Review follow-ups: fused LoRA dropout/bias under compile and 4-bit, Q-GaLore offload, GRPO truncated support, CP save on transformers 4.x
- [#14201](https://github.com/unslothai/unsloth/pull/14201) Optimizer parking outside inference mode; refuse fp16 params with unquantized adamw_flash moments
- [#14188](https://github.com/unslothai/unsloth/pull/14188) Large head attention follow-ups: compiled kill switch, 4-bit shard self check, forced float32 skip
- [#14205](https://github.com/unslothai/unsloth/pull/14205) FSDP2: gather for push_to_hub, refuse GGUF / torchao exports, size offloaded state and 4-bit counts per shard
- [#14275](https://github.com/unslothai/unsloth/pull/14275) gpt-oss MXFP4 without triton_kernels on transformers 4.x: keep dense expert biases in the model dtype
- [#14233](https://github.com/unslothai/unsloth/pull/14233) GatedDeltaNet fla op engages in training; large-head self-check survives a non-reentrant checkpoint
- [#14231](https://github.com/unslothai/unsloth/pull/14231) QLoRA quant-state fallback: gate per weight, not a process-global flag
- [#14236](https://github.com/unslothai/unsloth/pull/14236) Studio: accept a quoted local training base and name single-file checkpoints in the refusal
- [#14276](https://github.com/unslothai/unsloth/pull/14276) Bump install.sh / install.ps1 pins to unsloth>=2026.10.7, unsloth-zoo>=2026.10.7
- [#14271](https://github.com/unslothai/unsloth/pull/14271) Tests: start every diffusion_segment test with no GPU arbiter resident
- [#14259](https://github.com/unslothai/unsloth/pull/14259) Studio: a chat remembers the model it last used, not only the one it started on
- [#14237](https://github.com/unslothai/unsloth/pull/14237) unsloth start vscode: print the group instead of writing a dead file inside a plain container
- [#14270](https://github.com/unslothai/unsloth/pull/14270) Format the two files #14247 left off the formatter fixed point
- [#14254](https://github.com/unslothai/unsloth/pull/14254) Studio: timestamp every other sampled video frame for GGUF chat
- [#14272](https://github.com/unslothai/unsloth/pull/14272) Tests: make image-engine-choice and image-mask-from-text typecheck
- [#14269](https://github.com/unslothai/unsloth/pull/14269) Tests: echo gguf_filename in the image text encoder Playwright status stub
- [#14268](https://github.com/unslothai/unsloth/pull/14268) Tests: a grandchild reaped while its /proc stat is read counts as gone
- [#12586](https://github.com/unslothai/unsloth/pull/12586) Unsloth Studio / Desktop: name chat exports after model, title and day, and reopen the last save folder
- [#14161](https://github.com/unslothai/unsloth/pull/14161) Studio: eject a model with a running chat from the Loaded models card
- [#14238](https://github.com/unslothai/unsloth/pull/14238) Studio: let an approved rm run, never a recursive one
- [#14207](https://github.com/unslothai/unsloth/pull/14207) MFU logging under fullgraph, NCCL logs under distributed debug, token-budget metrics across ranks
- [#14199](https://github.com/unslothai/unsloth/pull/14199) Decode: cover explicit positions past the lazy RoPE cache in Gemma2, Cohere, Granite and FalconH1
- [#14234](https://github.com/unslothai/unsloth/pull/14234) Studio: a kept load short on its own GPU no longer unloads models on other GPUs or on the CPU
- [#14152](https://github.com/unslothai/unsloth/pull/14152) Context parallel: wrap trainer methods only once a trainer enables CP (torch 2.10 step time)
- [#14241](https://github.com/unslothai/unsloth/pull/14241) Studio: show the end of long prompts in the API monitor
- [#14248](https://github.com/unslothai/unsloth/pull/14248) Studio installer: show the previous unsloth version next to the new one
- [#14235](https://github.com/unslothai/unsloth/pull/14235) Studio: make inpaint and localized-edit masks from text with SAM 3
- [#14264](https://github.com/unslothai/unsloth/pull/14264) Studio: raise the startup bundle budget for #11937
- [#14260](https://github.com/unslothai/unsloth/pull/14260) Studio: wire in DeepSeek-V4.1-Flash-1017 (deepseek41)
- [#14232](https://github.com/unslothai/unsloth/pull/14232) Studio Images: per-load engine choice for GGUF picks (native sd.cpp for LoRA)
- [#14223](https://github.com/unslothai/unsloth/pull/14223) Studio: delete selected recipe blocks with the Delete key
- [#14263](https://github.com/unslothai/unsloth/pull/14263) CI: keep one generation of prefix-restored caches, share Core's pip cache
- [#11937](https://github.com/unslothai/unsloth/pull/11937) feat(studio): add a setting to hide the macOS menu bar icon
- [#14021](https://github.com/unslothai/unsloth/pull/14021) Honor layers_to_transform and finetune_last_n_layers with regex target_modules
- [#14258](https://github.com/unslothai/unsloth/pull/14258) Studio: raise the startup bundle budget for #14247
- [#14247](https://github.com/unslothai/unsloth/pull/14247) Studio: Developer mode opt-in for experimental CPU video generation
- [#14204](https://github.com/unslothai/unsloth/pull/14204) FSDP2 QLoRA: give the all-gathered 4-bit weight back its Params4bit class and 3D shape
- [#14239](https://github.com/unslothai/unsloth/pull/14239) Studio: build the OpenAPI schema off the event loop
- [#14249](https://github.com/unslothai/unsloth/pull/14249) pre-commit: cut the kwarg formatter's CPU 6.5x and stop the ruff fork bomb (#14174)
- [#14216](https://github.com/unslothai/unsloth/pull/14216) Studio: route clicks and scrolls to the browser page on macOS 27
- [#14242](https://github.com/unslothai/unsloth/pull/14242) Studio: keep code colour while scrolling long chats
- [#14191](https://github.com/unslothai/unsloth/pull/14191) Studio: keep the Read aloud speech model loaded beside the chat model
- [#14156](https://github.com/unslothai/unsloth/pull/14156) Qwen3 decode: size the RoPE read by the explicit position, not only the KV length
- [#13873](https://github.com/unslothai/unsloth/pull/13873) Studio: choose working folders when creating projects
- [#14220](https://github.com/unslothai/unsloth/pull/14220) FP8 GEMV long-indexing test: seeded inputs and a last-bit tolerance
- [#14206](https://github.com/unslothai/unsloth/pull/14206) RoPE: build grown caches on the GPU again, 32768 rows at a time
- [#14164](https://github.com/unslothai/unsloth/pull/14164) doctor --gpus: read NVML P2P enum constants as ints
- [#14155](https://github.com/unslothai/unsloth/pull/14155) Optimizer state offload: track DTensor state loaded on the host when resuming
- [#14212](https://github.com/unslothai/unsloth/pull/14212) Studio: stage prebuilt installs in dirs that inherit the parent ACL on Windows
- [#14142](https://github.com/unslothai/unsloth/pull/14142) Prebuilt wheels: drop -lineinfo, unreachable SASS and flash-attn PTX; add extension-free mamba-ssm
- [#14158](https://github.com/unslothai/unsloth/pull/14158) Attention: GQA never forces SDPA math, cuDNN-over-varlen on sm100 only, native before xformers
- [#13971](https://github.com/unslothai/unsloth/pull/13971) Studio: restore Qwen causal-conv1d on demand, narrow fatal mamba-ssm, provision SSM kernels in export
- [#13919](https://github.com/unslothai/unsloth/pull/13919) Studio: fix chat scrollbar freezes on long code fences
- [#14230](https://github.com/unslothai/unsloth/pull/14230) Studio: multi-image editing for Qwen-Image-Edit
- [#14195](https://github.com/unslothai/unsloth/pull/14195) Block compile: keep the GatedDeltaNet self-check out of a non-reentrant checkpoint
- [#14209](https://github.com/unslothai/unsloth/pull/14209) fix(studio): reject oversized Metal alongside loads before startup
- [#14150](https://github.com/unslothai/unsloth/pull/14150) Pass layers_to_transform, use_rslora and modules_to_save to LoraConfig on the SentenceTransformer fast encoder path
- [#14202](https://github.com/unslothai/unsloth/pull/14202) head_dim 512 attention: use the kernel for masks made under inference mode
- [#14193](https://github.com/unslothai/unsloth/pull/14193) Context parallelism: drop the SDPA wrappers each ring step leaves in torch's registry
- [#14224](https://github.com/unslothai/unsloth/pull/14224) unsloth run: pass llama-server short flags like -ctv, -dev, -ctxcp through whole
- [#14135](https://github.com/unslothai/unsloth/pull/14135) Studio: keep reading durable chat output while its events are being saved
- [#14213](https://github.com/unslothai/unsloth/pull/14213) Studio: export token usage from Profile stats as CSV
- [#14200](https://github.com/unslothai/unsloth/pull/14200) Fused QKNorm + RoPE: keep type promotion for mixed dtype tables, reuse grad in the trainable norm fallback
- [#14151](https://github.com/unslothai/unsloth/pull/14151) Studio: keep users signed in when auth.db is busy
- [#14112](https://github.com/unslothai/unsloth/pull/14112) GRPO: file compute_loss metrics by model.training, not control.should_evaluate
- [#14018](https://github.com/unslothai/unsloth/pull/14018) Studio: fix browser toolbar alignment and narrow layouts
- [#13906](https://github.com/unslothai/unsloth/pull/13906) Fix padded prefill sliding window being one key too wide
- [#14208](https://github.com/unslothai/unsloth/pull/14208) Studio: start the FLUX.3 prompt upsampler while Enhance prompt is on
- [#14157](https://github.com/unslothai/unsloth/pull/14157) Studio: install the S3 SDK on demand
- [#14210](https://github.com/unslothai/unsloth/pull/14210) Studio: follow a same-model MLX reload in the KV width and int8 prefill settings
- [#13454](https://github.com/unslothai/unsloth/pull/13454) Copy the residual before the in-place norm in Granite fast decode
- [#14211](https://github.com/unslothai/unsloth/pull/14211) Studio: compile FLUX.3 Klein once for every prompt length
- [#13956](https://github.com/unslothai/unsloth/pull/13956) Hybrid packing + block compile: fix the guard crash, the skipped varlen, and the cross-document leak
- [#14203](https://github.com/unslothai/unsloth/pull/14203) Studio: raise the startup bundle budget for #14197
- [#14143](https://github.com/unslothai/unsloth/pull/14143) Studio: strip tool markup from streamed text without rescanning the whole turn per token
- [#14197](https://github.com/unslothai/unsloth/pull/14197) Studio: keep the FLUX.3 Image Klein GGUF row under its Fast FP8 row at the top of the Images picker
- [#14198](https://github.com/unslothai/unsloth/pull/14198) Studio: raise the startup bundle budget for #14190
- [#14190](https://github.com/unslothai/unsloth/pull/14190) Studio: open //host links as web links; run apt-get by absolute path; ignore the dev Studio home
- [#14187](https://github.com/unslothai/unsloth/pull/14187) Studio: managed accounts use the server's own HF endpoint for recipe seeds
- [#14182](https://github.com/unslothai/unsloth/pull/14182) Notebooks CI: refresh the Colab oracle snapshots to the current GPU runtime
- [#14189](https://github.com/unslothai/unsloth/pull/14189) Studio: update Lemonade to 2026.42.1 and FastFlowLM to v1.0.9
- [#14168](https://github.com/unslothai/unsloth/pull/14168) Studio: keep the prompt upsampler client out of the startup chunks, reset the startup budget to the build
- [#14186](https://github.com/unslothai/unsloth/pull/14186) Desktop: bump rustls to 0.23.46 and quinn-proto to 0.11.19 for RustSec advisories
- [#14184](https://github.com/unslothai/unsloth/pull/14184) Studio: pin FLUX.3 Image Klein (Fast FP8) to the top of the Images picker
- [#14172](https://github.com/unslothai/unsloth/pull/14172) Studio: one tooltip design everywhere, matching chat's text colours in light and dark
- [#14176](https://github.com/unslothai/unsloth/pull/14176) Studio: run the Windows sandbox (MXC) on ARM64 PCs with Microsoft's ARM64 build
- [#14178](https://github.com/unslothai/unsloth/pull/14178) CLI: doctor --mcp sends the API key only to a Studio that proves its identity
- [#14183](https://github.com/unslothai/unsloth/pull/14183) Studio: darker unselected model picker toggle, collapse icon for Compact conversation
- [#14141](https://github.com/unslothai/unsloth/pull/14141) Desktop: keep DMA-BUF off on NVIDIA Wayland when compositing is turned off by the environment
- [#14113](https://github.com/unslothai/unsloth/pull/14113) Studio: match letter shortcuts by the letter the layout types
- [#14179](https://github.com/unslothai/unsloth/pull/14179) Studio: label the Chat with files composer pill Files instead of RAG
- [#14177](https://github.com/unslothai/unsloth/pull/14177) Studio: download the UD-Q4_K_XL FLUX.3 prompt upsampler by default
- [#14173](https://github.com/unslothai/unsloth/pull/14173) Studio: load the retired FLUX.3 full copies through their base
- [#14170](https://github.com/unslothai/unsloth/pull/14170) Studio: add Edit image to Library image menus
- [#14175](https://github.com/unslothai/unsloth/pull/14175) Studio MCP: keep one [code] tag on audio errors
- [#14107](https://github.com/unslothai/unsloth/pull/14107) Studio: MCP agents upload datasets, load what they trained, and download models ahead of time

#### 🐛 New Issues
- [#14221](https://github.com/unslothai/unsloth/issues/14221) [Bug] Model Hub filters not working as expected + regression found 💬2
- [#14298](https://github.com/unslothai/unsloth/issues/14298) [Bug] "Max Tool Call Duration" slider is ignored for HTTP/SSE MCP tools - calls always cap at 5 minutes `feature request` `bug` 💬1
- [#14257](https://github.com/unslothai/unsloth/issues/14257) [Feature]: Add a setting to allow localhost sites to be opened in the built-in browser `feature request` 💬1
- [#14303](https://github.com/unslothai/unsloth/issues/14303) [Bug] ChatML to Alpaca conversion drops all turns when role names are capitalized
- [#14267](https://github.com/unslothai/unsloth/issues/14267) [Bug] Diffusion unified-memory guard blocks Qwen-Image; add persistent desktop "Load anyway" override
- [#14194](https://github.com/unslothai/unsloth/issues/14194) [Feature] Allow using external connections from the Audio tools `feature request`
- [#14261](https://github.com/unslothai/unsloth/issues/14261) [Feature] Allow unsloth-studio to select linked folder from server `feature request`
- [#14196](https://github.com/unslothai/unsloth/issues/14196) [Feature] Add ability to share external connections `feature request`

#### 🔒 Closed Issues
- [#12845](https://github.com/unslothai/unsloth/issues/12845) [Bug] Unsloth Desktop AppImage v0.1.902-beta - Window Resize Problem
- [#8865](https://github.com/unslothai/unsloth/issues/8865) [Feature] Unsloth Portable Edition - All Unsloth Files and Most Dependencies in one Master Folder
- [#7214](https://github.com/unslothai/unsloth/issues/7214) [Feature] Comprehensive Token Usage Analytics & Global Usage Guardrails
- [#7371](https://github.com/unslothai/unsloth/issues/7371) [Bug] Performance regression on Strix Halo + ROCm — prebuilt b10079
- [#9257](https://github.com/unslothai/unsloth/issues/9257) [Feature] Support concurrent multi-model loading with per-model device pinning
- [#9284](https://github.com/unslothai/unsloth/issues/9284) [Feature] Continue generation from an existing or edited assistant response
- [#9103](https://github.com/unslothai/unsloth/issues/9103) [Feature Request] Unsloth Desktop as thin client for a remote Unsloth server (remote code execution like Codex/Claude Code)
- [#14052](https://github.com/unslothai/unsloth/issues/14052) [Bug] AMD: The audio runtime is not installed. Run unsloth studio update to install it.
- [#9605](https://github.com/unslothai/unsloth/issues/9605) Why can't I just use the stable diffusion model I want to use, from the file I want
- [#7589](https://github.com/unslothai/unsloth/issues/7589) [Feature] Per-model extended parameter settings
- [#7752](https://github.com/unslothai/unsloth/issues/7752) Feedback/suggestions
- [#13997](https://github.com/unslothai/unsloth/issues/13997) [Feature] make all popups use chosen theme
- [#10067](https://github.com/unslothai/unsloth/issues/10067) [Feature] Markdown rendering + formatting toolbar for user messages in Studio Chat
- [#11239](https://github.com/unslothai/unsloth/issues/11239) [Feature]Proxy Support
- [#8909](https://github.com/unslothai/unsloth/issues/8909) [Feature] Force Load "Metadata Mismatch" MMProj File
- [#9972](https://github.com/unslothai/unsloth/issues/9972) [Feature] Allow Manual Approval of "rm" Command.
- [#13746](https://github.com/unslothai/unsloth/issues/13746) [Feature] Let chat models generate images and videos with Studio's own diffusion models (built-in tool)
- [#10052](https://github.com/unslothai/unsloth/issues/10052) [Feature] Better support for VS Code integration "Discover Models" and "Load Models"
- [#9985](https://github.com/unslothai/unsloth/issues/9985) [Feature] Proactive context junk-trimming — write tool/search results & duplicate attachments to disk instead of holding them in the live context
- [#9962](https://github.com/unslothai/unsloth/issues/9962) [Feature] Allow controlling spacing of images when processing video in chats (currently 0.5s)
- [#9898](https://github.com/unslothai/unsloth/issues/9898) [Feature] Increase sizes.
- [#9211](https://github.com/unslothai/unsloth/issues/9211) [Feature]Add More Features To Data Recipes
- [#10157](https://github.com/unslothai/unsloth/issues/10157) [Feature] Ability to disable the Menu bar icon on macOS
- [#9712](https://github.com/unslothai/unsloth/issues/9712) Studio backend stalls for 10-33s on macOS CI, serving nothing, then recovers
- [#13629](https://github.com/unslothai/unsloth/issues/13629) Unsloth Desktop integrated browser does not respond to mouse clicks on Mac OS Golden Gate
- [#9523](https://github.com/unslothai/unsloth/issues/9523) [Feature]Environmental directory and voice input function
- [#10068](https://github.com/unslothai/unsloth/issues/10068) [Feature] Subtle fade-in animation for new assistant messages in Studio Chat
- [#9935](https://github.com/unslothai/unsloth/issues/9935) [Feature] Set dir for studio files
- [#10178](https://github.com/unslothai/unsloth/issues/10178) Working with a repository - Add sandbox directory manually
- [#8896](https://github.com/unslothai/unsloth/issues/8896) [Feature] Unsloth pip package without studio?
- [#9359](https://github.com/unslothai/unsloth/issues/9359) [Feature ] API section open side-by-side with the chat interface
- [#7159](https://github.com/unslothai/unsloth/issues/7159) [Feature] Add native Inkling LoRA/QLoRA fine-tuning support
- [#8268](https://github.com/unslothai/unsloth/issues/8268) UI: Align expandable sidebar chevrons for more consistent navigation
- [#8864](https://github.com/unslothai/unsloth/issues/8864) [Feature] Configurable number of api slots
- [#10103](https://github.com/unslothai/unsloth/issues/10103) [Feature] Chat Saving Format and Location
- [#14154](https://github.com/unslothai/unsloth/issues/14154) [Bug] When multiple models are loaded if one goes rogue there is not way to unload it
- [#9910](https://github.com/unslothai/unsloth/issues/9910) [Feature] Unsloth studio installer shoud show current version and version installing
- [#9295](https://github.com/unslothai/unsloth/issues/9295) Studio Images: expose native sd.cpp for GGUF LoRA inference
- [#9458](https://github.com/unslothai/unsloth/issues/9458) [Feature]Add Developer Mode to enable CPU-only video generation with warning prompt
- [#9163](https://github.com/unslothai/unsloth/issues/9163) [Feature] Allow TTS models to stay loaded in VRAM similar to STT models
- [#10211](https://github.com/unslothai/unsloth/issues/10211) Feature: Add Parallel's free authless Search MCP as a built-in web search option
- [#9917](https://github.com/unslothai/unsloth/issues/9917) feat: Add Magma (Momentum-aligned Gradient Masking) optimizer integration
- [#10174](https://github.com/unslothai/unsloth/issues/10174) [Feature] How about bundling the runtime environment into the windows desktop installer?
- [#10295](https://github.com/unslothai/unsloth/issues/10295) [Feature] Show all the files for the same detected quantization level
- [#9109](https://github.com/unslothai/unsloth/issues/9109) [Feature] Creation and display of documents in the canvas on the right
- [#9644](https://github.com/unslothai/unsloth/issues/9644) [Feature] Allow admins to link folders into RAG within Studio for host directories
- [#14120](https://github.com/unslothai/unsloth/issues/14120) [Bug] Studio: an alongside load that does not fit in memory takes down the host (macOS, M4 Max 64 GB)
- [#10293](https://github.com/unslothai/unsloth/issues/10293) [Feature] Give the user the option to select file extensions for RAG Linked local folders
- [#8885](https://github.com/unslothai/unsloth/issues/8885) [Feature] Proxy support inside unsloth desktop
- [#8039](https://github.com/unslothai/unsloth/issues/8039) Studio: reconcile the per-model load settings group after a same-model reload
- [#9112](https://github.com/unslothai/unsloth/issues/9112) [Feature Request] Configurable step size for the Context Window slider in Unsloth Studio
- [#9203](https://github.com/unslothai/unsloth/issues/9203) [Studio Feature] Advanced transcription suite: Timestamps, multi-format export (.srt, .vtt, .json), and interactive sync
- [#9232](https://github.com/unslothai/unsloth/issues/9232) Studio: the model picker's On Device list is not virtualized, so opening it still costs O(models on disk)
- [#7824](https://github.com/unslothai/unsloth/issues/7824) [Feature] Can I work on adding Schedule-Free AdamW ?
- [#7792](https://github.com/unslothai/unsloth/issues/7792) [Bug] Gemma-2 attention-only LoRA merge -> GGUF export produces incoherent output once training progresses, despite bit-exact weights/metadata/tokenization (related to #976)
- [#7921](https://github.com/unslothai/unsloth/issues/7921) [Feature] Does it have DwarfStar integrated?
- [#7654](https://github.com/unslothai/unsloth/issues/7654) [Feature] Feature Request: Improved Command-Line Interface (CLI) for model selection
- [#13684](https://github.com/unslothai/unsloth/issues/13684) [Feature] Stream chat responses from external connections
- [#14109](https://github.com/unslothai/unsloth/issues/14109) [Bug] P100 now crashing since last update
- [#14035](https://github.com/unslothai/unsloth/issues/14035) [Bug] keyboard shortcuts UI does not match key labels on alternative keyboard layouts
- [#7832](https://github.com/unslothai/unsloth/issues/7832) [Feature] Use SAM3.1 for generating a prompt-based mask for inpainting
- [#8987](https://github.com/unslothai/unsloth/issues/8987) [Feature] Able to put in multiple images into Image Generator
- [#8903](https://github.com/unslothai/unsloth/issues/8903) [Docs] Align pricing with current open-source multi-GPU support

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,152 · **Open issues:** 370 · **Last push:** 2h ago

On October 20, 2026, there were no new releases for AIBrix. However, several significant bug fixes were merged, including improvements such as checking TPM before user RPM slot allocation, avoiding success metrics for incomplete canceled requests, and maintaining a saved startup KV ceiling during transient identity-read failures. Among the new issues reported, a notable concern is the bug (#3186) where batch templates emit rejected arguments by SGLang 0.5.22 and vLLM 0.32.0, which has sparked discussion and attention within the community. This day primarily involved routine maintenance with a focus on enhancing stability and performance through various fixes.

#### ✅ Merged PRs
- [#3179](https://github.com/vllm-project/aibrix/pull/3179) [Bug] Check TPM before taking the user's RPM slot
- [#3176](https://github.com/vllm-project/aibrix/pull/3176) [Bug] Avoid success metrics for incomplete canceled requests
- [#3170](https://github.com/vllm-project/aibrix/pull/3170) [Bug] Keep a saved startup KV ceiling across a transient identity-read failure
- [#3168](https://github.com/vllm-project/aibrix/pull/3168) [Misc] Count TPM increments that fail after the response is served
- [#3169](https://github.com/vllm-project/aibrix/pull/3169) [Bug] Default an unset RayClusterFleet strategy to a 25% RollingUpdate
- [#3156](https://github.com/vllm-project/aibrix/pull/3156) [Bug] Aggregate SGLang DP-attention request and KV pool gauges
- [#3159](https://github.com/vllm-project/aibrix/pull/3159) [Bug] Credit a prefix only to a pod that admitted the request
- [#3157](https://github.com/vllm-project/aibrix/pull/3157) [Bug] Join pod and service addresses with net.JoinHostPort
- [#3161](https://github.com/vllm-project/aibrix/pull/3161) [Bug] Keep a served response when the TPM increment fails
- [#3162](https://github.com/vllm-project/aibrix/pull/3162) [Gateway] Bound gateway_first_token_delay_over_1s_total cardinality
- [#3146](https://github.com/vllm-project/aibrix/pull/3146) [Bug] Delete terminated pods so a PodSet can replace them
- [#3150](https://github.com/vllm-project/aibrix/pull/3150) [Bug] Keep total load in KPA and APA metric windows

#### 🐛 New Issues
- [#3186](https://github.com/vllm-project/aibrix/issues/3186) [Bug] Batch templates emit arguments rejected by SGLang 0.5.22 and vLLM 0.32.0 `kind/bug` `area/batch` 💬4
- [#3175](https://github.com/vllm-project/aibrix/issues/3175) [Bug] Gateway counts ImmediateResponse failures as successful requests `kind/bug` `area/gateway` `area/runtime` 💬3
- [#3182](https://github.com/vllm-project/aibrix/issues/3182) [Bug] TOS put_object recurses for objects at or above the multipart threshold `kind/bug` `area/batch` 💬2
- [#3180](https://github.com/vllm-project/aibrix/issues/3180) AIBRIX_PREFIX_CACHE_REMOTE_TOKENIZER_ENDPOINT is never consumed; remote tokenize calls all land on one pod `kind/bug` `area/gateway` 💬2
- [#3172](https://github.com/vllm-project/aibrix/issues/3172) [Bug] ModelAdapter rejects the gs:// artifact URL that the docs recommend `kind/bug` `triage/needs-information` `area/website` `area/runtime` 💬2
- [#3190](https://github.com/vllm-project/aibrix/issues/3190) [RFC]: Correct batch engine argument mappings and reject removed vLLM settings `kind/feature` `area/kv-cache` `area/batch` 💬1
- [#3189](https://github.com/vllm-project/aibrix/issues/3189) [RFC]: Queuing, Autoscaling, and Request Deadlines `area/gateway` `kind/feature` 💬1
- [#3188](https://github.com/vllm-project/aibrix/issues/3188) [RFC]: Don’t Rank the Entire Fleet for Every Request `area/gateway` `kind/feature` 💬1
- [#3187](https://github.com/vllm-project/aibrix/issues/3187) [RFC]: Traffic-Aware Scale-Down and Proactive Draining `area/gateway` `kind/feature` 💬1
- [#3178](https://github.com/vllm-project/aibrix/issues/3178) [Bug] A request rejected for TPM keeps the user's RPM slot `kind/bug` `area/gateway` 💬1
- [#3166](https://github.com/vllm-project/aibrix/issues/3166) [Feat] Track remaining SGLang DP-attention metric aggregation and mapping gaps `kind/bug` `area/gateway` 💬1

#### 🔒 Closed Issues
- [#2419](https://github.com/vllm-project/aibrix/issues/2419) [Testing] KVCacheD multi-model testing
- [#3175](https://github.com/vllm-project/aibrix/issues/3175) [Bug] Gateway counts ImmediateResponse failures as successful requests
- [#2420](https://github.com/vllm-project/aibrix/issues/2420) [Testing] vllm sleep/wakeup testing
- [#3149](https://github.com/vllm-project/aibrix/issues/3149) [Bug] KPA and APA keep scaling under steady load because the metric windows hold per-pod means
- [#2198](https://github.com/vllm-project/aibrix/issues/2198) [RFC]: AIBrix console deployment Provider Abstraction with Kubernetes Implementation

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,219 · **Open issues:** 658 · **Last push:** <1h ago

On October 20, 2026, there were no new releases for Semantic Router, but several significant pull requests were merged, including an improvement to the model runtime with the addition of NVFP4 Decision 3.0 package loading and a new feature that enhances error handling with the `reject on_unknown` functionality across producers. Notably, the documentation was updated to include d3 quantized latency details, enhancing user understanding of the model's performance. However, the day also saw the emergence of notable issues, particularly a bug where SGLang Chat responses fail to decode due to `matched_stop` and `weight_versions` metadata, which received three comments, highlighting its impact on users. Other critical bugs related to response decoding and runtime performance were also reported, indicating ongoing challenges in the system's stability and functionality.

#### ✅ Merged PRs
- [#5270](https://github.com/vllm-project/semantic-router/pull/5270) [Docs] Model runtime: d3 quantized latency from the runs the cards cite
- [#3249](https://github.com/vllm-project/semantic-router/pull/3249) [Feature] Reject on_unknown with on_error across producers
- [#5225](https://github.com/vllm-project/semantic-router/pull/5225) [Feature] Model runtime: load NVFP4 Decision 3.0 packages

#### 🐛 New Issues
- [#5262](https://github.com/vllm-project/semantic-router/issues/5262) [Bug] Responses decoding rejects recorded vLLM and SGLang responses on extension fields, reasoning parts, and timestamps `accepted` `in-progress` `wg/data-plane-networking` 💬4
- [#5261](https://github.com/vllm-project/semantic-router/issues/5261) [Bug] SGLang Chat responses fail decoding on matched_stop and weight_versions metadata `accepted` `wg/data-plane-networking` 💬3
- [#5282](https://github.com/vllm-project/semantic-router/issues/5282) [Bug] Task-head package parser accepts duplicate numeric id2label indices `bug` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5278](https://github.com/vllm-project/semantic-router/issues/5278) [Bug] vector_store supported_formats accepts formats with no text extractor `bug` `accepted` `wg/data-plane-networking` 💬1
- [#5256](https://github.com/vllm-project/semantic-router/issues/5256) [Bug] Exact percentile assertions fail with ARM64 floating-point rounding `needs-acceptance` `wg/developer-experience-ecosystem` 💬1
- [#5272](https://github.com/vllm-project/semantic-router/issues/5272) [Feature] Model runtime: serve d3-turbo (state-once Decision 3.0, Box and track, long context) `enhancement` `accepted` `wg/router-models-inference-runtime` 💬1
- [#5252](https://github.com/vllm-project/semantic-router/issues/5252) [Bug] Chat and Responses requests with LiteLLM-style list metadata fail strict decoding `bug` `needs-acceptance` `wg/data-plane-networking` 💬1
- [#5251](https://github.com/vllm-project/semantic-router/issues/5251) [Bug] Accept DeepSeek prompt cache token usage extensions in chat completions `bug` `needs-acceptance` `wg/data-plane-networking` 💬1
- [#5247](https://github.com/vllm-project/semantic-router/issues/5247) [Feature] Expose response cache inspection and lifecycle commands via vllm-sr CLI `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem` 💬1
- [#5285](https://github.com/vllm-project/semantic-router/issues/5285) [Bug] Model runtime: CPU forwards pay an OpenMP wake-up per parallel region because d3 preprocessing keeps a second thread team `needs-acceptance` `wg/router-models-inference-runtime`
- [#5283](https://github.com/vllm-project/semantic-router/issues/5283) [Bug] vllm-sr advertises a Grafana URL whose application assets return 404 `needs-acceptance` `wg/developer-experience-ecosystem`
- [#5277](https://github.com/vllm-project/semantic-router/issues/5277) [Bug] Check the input of the default decision deployment at config load `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5273](https://github.com/vllm-project/semantic-router/issues/5273) [Bug] Model runtime: the smaller d3 packages fail CPU readiness on AVX-512 BF16 hosts `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5266](https://github.com/vllm-project/semantic-router/issues/5266) [Bug] PR CI Status fails on every fork pull request `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#5254](https://github.com/vllm-project/semantic-router/issues/5254) [Bug] Immediate error responses default to HTTP 200 and lose cancellation causes `needs-acceptance` `wg/data-plane-networking`
- [#5249](https://github.com/vllm-project/semantic-router/issues/5249) [Bug] Dashboard Playground adds the port offset to a standalone Router's in-network port `bug` `needs-acceptance` `wg/developer-experience-ecosystem`

#### 🔒 Closed Issues
- [#5155](https://github.com/vllm-project/semantic-router/issues/5155) [Bug] request_params accepts a zero or negative max_tokens_limit and max_n

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*