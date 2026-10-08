# 📡 AI Ecosystem Digest — 2026-10-08

> Generated 2026-10-08 02:34 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 149,791 | 26 | 1 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 128,217 | 21 | 0 | 49 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,249 | 0 | 0 | 4 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,243 | 8 | 6 | 0 | 6 |
| [OpenCode](https://github.com/anomalyco/opencode) | 212,227 | 3 | 47 | 6 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,344 | 24 | 4 | 4 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 391,609 | 102 | 47 | 115 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 251,965 | 20 | 13 | 2 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,354 | 47 | 18 | 43 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,847 | 11 | 10 | 52 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 130,620 | 11 | 19 | 32 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 182,507 | 12 | 5 | 7 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 60,314 | 53 | 19 | 123 | 7 |
| [Unsloth](https://github.com/unslothai/unsloth) | 77,385 | 7 | 5 | 72 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,127 | 0 | 2 | 5 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,047 | 30 | 16 | 10 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.293](https://github.com/anthropics/claude-code/releases/tag/v2.1.293).
- **OpenAI Codex** released multiple updates including [rust-v0.162.0-alpha.20](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.20).
- **OpenClaw** released version [v2026.10.1-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.10.1-beta.2).
- **Qwen Code** saw significant new issues with [#13570](https://github.com/QwenLM/qwen-code/issues/13570) and [#13566](https://github.com/QwenLM/qwen-code/issues/13566), both garnering 6 comments each.
- **vLLM** faced several critical new issues including [#60357](https://github.com/vllm-project/vllm/issues/60357) concerning `logprob_token_ids` which attracted 6 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 149,791 · **Open issues:** 14,513 · **Last push:** 8h ago

On October 8, 2026, Claude Code released version v2.1.293, which introduced the new default Haiku model, Claude Haiku 5.5, featuring a 1M context and updated pricing structures. Additionally, the update added an `agentType` to the `subagentStatusLine` payload to differentiate custom subagent types and included the `isDeferred` attribute to enhance tool registration flexibility. While there were no merged pull requests today, the new issues include a significant bug report (#100373) regarding compatibility issues between the Claude desktop application and Chrome that disrupts Google Voice calling across both desktop and Android devices. Other notable bugs reported include memory errors causing crashes (#100197) and issues with Cowork VM startup on non-system drives (#100354).

#### 🚀 New Releases
- [v2.1.293](https://github.com/anthropics/claude-code/releases/tag/v2.1.293) v2.1.293

#### 🐛 New Issues
- [#100373](https://github.com/anthropics/claude-code/issues/100373) [BUG] Claude desktop + Claude in Chrome breaks Google Voice calling (desktop AND Android) `invalid` 💬2
- [#100197](https://github.com/anthropics/claude-code/issues/100197) [Bug] Out of Memory errors causing frequent crashes `bug` `has repro` `platform:macos` `area:desktop` 💬1
- [#100354](https://github.com/anthropics/claude-code/issues/100354) [BUG] Cowork VM cannot start on Windows when the default Appx volume is a non-system drive (package data forced EFS) `bug` `has repro` `platform:windows` `area:cowork` 💬1
- [#100377](https://github.com/anthropics/claude-code/issues/100377) [BUG] Remote Control: Projects threads on my computer fail with "CCR v2 worker registration failed ... 400"; self-started sessions on the same server register fine `bug` `platform:macos` `area:networking`
- [#100376](https://github.com/anthropics/claude-code/issues/100376) [GitHub integration] `invalid` `github-integration`
- [#100375](https://github.com/anthropics/claude-code/issues/100375) Desktop app: sidebar custom-group membership and session titles do not sync across devices; Remote Control rows cannot be grouped
- [#100374](https://github.com/anthropics/claude-code/issues/100374) Auto mode: classifier keeps denying actions after explicit user approval, with no approval path for a remote (project thread) user `bug` `platform:macos` `area:permissions`
- [#100372](https://github.com/anthropics/claude-code/issues/100372) [Bug] Session list in Omarchy only shows locally started sessions, not sessions from other clients `bug` `platform:linux` `area:tui`
- [#100371](https://github.com/anthropics/claude-code/issues/100371) [Bug] /model persists default model across all new sessions silently, causing unexpected usage `enhancement` `platform:macos` `area:cost` `area:tui`
- [#100370](https://github.com/anthropics/claude-code/issues/100370) Auto-mode classifier blocks merging a PR into the user's own repo even when the user's standing workflow requires it ("Merge Without Review") `enhancement` `area:mcp` `area:cowork` `area:permissions`
- [#100369](https://github.com/anthropics/claude-code/issues/100369) [BUG] Skill `paths` frontmatter is ignored for Plugin Skills (2.1.291) `bug` `has repro` `platform:macos` `area:skills`
- [#100368](https://github.com/anthropics/claude-code/issues/100368) Desktop app (Code tab): auto mode classifier returns "no verdict" for Write when the working directory is on a mapped network drive (works in CLI)[BUG] `bug` `platform:windows` `area:permissions` `area:desktop`
- [#100367](https://github.com/anthropics/claude-code/issues/100367) Agents view: MCP servers added mid-session never load (bg-spare keeps the config it started with, /exit doesn't end the process) `bug` `has repro` `platform:linux` `area:mcp`
- [#100366](https://github.com/anthropics/claude-code/issues/100366) [DOCS] Sub-agents page: omitClaudeMd and Explore do not stop a nested CLAUDE.md or path-scoped rule loaded after a Read; --agent session has no git status `bug` `documentation` `platform:macos` `area:agents`
- [#100365](https://github.com/anthropics/claude-code/issues/100365) Need more than 6 remote connect folders for projects to be truely useful. I wan… `enhancement` `area:claude-code-web`
- [#100364](https://github.com/anthropics/claude-code/issues/100364) 61 desktop Code sessions show 'Session not found on disk' after directory rename `bug` `platform:macos` `area:desktop`
- [#100363](https://github.com/anthropics/claude-code/issues/100363) [FEATURE] Add a link from a routine session to the routine edit screen `enhancement` `area:routines`
- [#100362](https://github.com/anthropics/claude-code/issues/100362) Remote Control always fails with HTTP 403 after restart; re-login on desktop and iOS does not recover `bug` `platform:windows` `area:auth`
- [#100361](https://github.com/anthropics/claude-code/issues/100361) [Bug] Workflow tool permission handler injects control characters on Windows, failing schema validation `bug` `platform:windows` `area:permissions`
- [#100360](https://github.com/anthropics/claude-code/issues/100360) Footer PR indicator stays pinned to the first PR of a long-running session `bug` `has repro` `platform:macos` `area:statusline`
- [#100359](https://github.com/anthropics/claude-code/issues/100359) [BUG] Desktop SSH remote: messages stuck at "Delivering to user@host…" and never reach ccd-cli stdin, while spawning new CLIs still works `bug` `platform:windows` `platform:macos` `area:desktop`
- [#100358](https://github.com/anthropics/claude-code/issues/100358) /doctor: make findings atomic — never bundle unrelated changes behind one confirmation `enhancement` `area:cli`
- [#100357](https://github.com/anthropics/claude-code/issues/100357) [Bug] Claude fabricates false reasons in code review dispositions `bug` `platform:macos` `area:model` `platform:vscode`
- [#100356](https://github.com/anthropics/claude-code/issues/100356) [BUG] Dictating at a cursor point deletes all whitespace (including newlines) prior to the cursor (Claude Code Desktop) `bug` `platform:macos` `area:desktop`
- [#100355](https://github.com/anthropics/claude-code/issues/100355) [Bug] Cyber false positive on CTF build; own skill edit flagged as poisoning `bug` `platform:macos` `area:model` `area:security`
- [#100353](https://github.com/anthropics/claude-code/issues/100353) Since 2.1.213, one connection error disables HTTP keep-alive for the rest of the process; long sessions then degrade into stream-idle-watchdog stalls and full-conversation resends until restart `bug` `has repro` `platform:linux` `area:core`

#### 🔒 Closed Issues
- [#98873](https://github.com/anthropics/claude-code/issues/98873) [BUG] Claude Desktop Code-tab sessions send an invalid bearer on OTLP exports to the Claude apps gateway (invalid_token), while Cowork from the same Desktop succeeds

### OpenAI Codex (`openai/codex`)

**Stars:** 128,217 · **Open issues:** 21,272 · **Last push:** <1h ago

On October 8, 2026, OpenAI Codex released several new versions, including rust-v0.162.0-alpha.20 and rust-v0.162.0-alpha.17.1, with significant updates featuring the GPT-6.1 Sol as the default model and new multi-agent reasoning capabilities in Amazon Bedrock. Key merged features included improved handling of asynchronous questions with #51908, dedicated matching for network domain policies with #51897, and enhanced sandbox integrity checks across different platforms, introducing a macOS Seatbelt backend and a bubblewrap backend. Notably, the issue #51601 arose, where the Windows app faced a sandbox setup failure due to a sharing violation when validating its active runtime, highlighting ongoing challenges in the Windows environment.

#### 🚀 New Releases
- [rust-v0.162.0-alpha.20](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.20) 0.162.0-alpha.20
- [rust-v0.162.0-alpha.17.1](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.17.1) 0.162.0-alpha.17.1
- [rust-v0.161.0](https://github.com/openai/codex/releases/tag/rust-v0.161.0) 0.161.0

#### ✅ Merged PRs
- [#51908](https://github.com/openai/codex/pull/51908) Honor the user input setting for asynchronous questions
- [#51897](https://github.com/openai/codex/pull/51897) Use a dedicated matcher for network domain policies
- [#51896](https://github.com/openai/codex/pull/51896) Preserve native errors in Windows sandbox ACL diagnostics
- [#51895](https://github.com/openai/codex/pull/51895) Report specific reasons for WebSocket continuation failures
- [#51893](https://github.com/openai/codex/pull/51893) Record metrics for incremental tool updates
- [#51892](https://github.com/openai/codex/pull/51892) Preserve tool call completeness when recorded arguments are truncated
- [#51890](https://github.com/openai/codex/pull/51890) Add the missing `mxc-sdk` UTF-8 resource patch for Bazel
- [#51884](https://github.com/openai/codex/pull/51884) Add experimental prediction forks that inherit parent context
- [#51872](https://github.com/openai/codex/pull/51872) Keep global app-server config independent of the launch directory
- [#51868](https://github.com/openai/codex/pull/51868) Record tool registration metrics for each sampling request
- [#51866](https://github.com/openai/codex/pull/51866) Preserve line breaks and links in multiline async questions
- [#51865](https://github.com/openai/codex/pull/51865) Use readable plugin mentions without suppressing same-name skills
- [#51857](https://github.com/openai/codex/pull/51857) Add an app-server prompt prefix compatibility test
- [#51856](https://github.com/openai/codex/pull/51856) Build Bazel release artifacts alongside Cargo artifacts
- [#51855](https://github.com/openai/codex/pull/51855) Add Bazel support to the Codex package build action
- [#51850](https://github.com/openai/codex/pull/51850) Add Bazel release staging archives
- [#51849](https://github.com/openai/codex/pull/51849) Fix package smoke tests for Cargo and Bazel debug symbols
- [#51848](https://github.com/openai/codex/pull/51848) Align Bazel release builds with Cargo and fix platform compatibility
- [#51847](https://github.com/openai/codex/pull/51847) Preserve Cargo package names in Bazel Rust builds
- [#51843](https://github.com/openai/codex/pull/51843) Run sandbox integrity checks before commands and filesystem operations
- [#51842](https://github.com/openai/codex/pull/51842) Add a sandbox integrity runner with outcome and timing metrics
- [#51841](https://github.com/openai/codex/pull/51841) Add a macOS Seatbelt backend for sandbox integrity
- [#51840](https://github.com/openai/codex/pull/51840) Add a bubblewrap backend for sandbox integrity checks
- [#51835](https://github.com/openai/codex/pull/51835) Enable code mode interruption by default
- [#51831](https://github.com/openai/codex/pull/51831) Add MXC sandbox integrity dependency and policy preparation
- [#51828](https://github.com/openai/codex/pull/51828) Add policy-based file contents integrity checks
- [#51823](https://github.com/openai/codex/pull/51823) Share MCP binding tool metadata with prepared calls
- [#51822](https://github.com/openai/codex/pull/51822) Avoid sharing violations when repairing Windows runtime ACLs
- [#51819](https://github.com/openai/codex/pull/51819) Migrate the MXC sandbox to the 1.0.0 SDK
- [#51812](https://github.com/openai/codex/pull/51812) Enable instant interrupts by default
- [#51808](https://github.com/openai/codex/pull/51808) Preserve diagnostic reasons for MCP user verification failures
- [#51800](https://github.com/openai/codex/pull/51800) Remove duplicate field initializers in extension registry tests
- [#51794](https://github.com/openai/codex/pull/51794) Advertise Ultrafast for GPT-6.1 Sol on Amazon Bedrock
- [#51786](https://github.com/openai/codex/pull/51786) Preserve sandbox overrides across execution requests
- [#51775](https://github.com/openai/codex/pull/51775) Prevent recursive Tokio tracing in telemetry and SQLite logs
- [#51768](https://github.com/openai/codex/pull/51768) Expand OpenAI Docs migration guidance to the GPT-6 model family
- [#51761](https://github.com/openai/codex/pull/51761) Reduce tool metadata cloning in the code-mode runtime
- [#51755](https://github.com/openai/codex/pull/51755) Reuse MCP handler metadata for cache comparisons
- [#51734](https://github.com/openai/codex/pull/51734) Load persisted sender context for Guardian reviews
- [#51710](https://github.com/openai/codex/pull/51710) Fix a discovery race in the external auth refresh test
- [#51704](https://github.com/openai/codex/pull/51704) Honor tool-description-first ordering in Code Mode
- [#51690](https://github.com/openai/codex/pull/51690) Add a feature flag for Code Mode tool description ordering
- [#51689](https://github.com/openai/codex/pull/51689) Wait for helper completion in HTTP header cancellation tests
- [#51683](https://github.com/openai/codex/pull/51683) Roll back stale Guardian reviews before reusing reviewer history
- [#51678](https://github.com/openai/codex/pull/51678) Move Windows sandbox tests into a dedicated integration binary
- [#51652](https://github.com/openai/codex/pull/51652) Record telemetry for AGENTS.md changes made by apply_patch
- [#51651](https://github.com/openai/codex/pull/51651) Persist Guardian review failures for reports across restarts
- [#51650](https://github.com/openai/codex/pull/51650) Require hostname authorization before proxy DNS lookups
- [#51642](https://github.com/openai/codex/pull/51642) Fix retained context handling for typed section content

#### 🐛 New Issues
- [#51601](https://github.com/openai/codex/issues/51601) Windows app 26.1002.51308: sandbox setup fails with sharing violation when validating its own active runtime `bug` `windows-os` `sandbox` `app` 💬56
- [#51590](https://github.com/openai/codex/issues/51590) Windows sandbox fails opening running node_repl.exe for ACL update (error 32); Computer Use and shell blocked `bug` `windows-os` `sandbox` `app` 💬23
- [#51778](https://github.com/openai/codex/issues/51778) Windows sandbox fails in Codex & OWL 26.1002.52244 `bug` `windows-os` `sandbox` `app` 💬8
- [#51722](https://github.com/openai/codex/issues/51722) Dots existing Local-task access: placement-format errors versus documented continuation and recovery `documentation` `app-server` `dots` 💬4
- [#51731](https://github.com/openai/codex/issues/51731) Dot cannot connect to codex conversations Error unsupported placement format version 3 `bug` `windows-os` `app` `dots` 💬3
- [#51719](https://github.com/openai/codex/issues/51719) Windows Computer Use fails during sandbox setup (os error 32) `bug` `windows-os` `sandbox` `app` 💬2
- [#51911](https://github.com/openai/codex/issues/51911) Windows ARM: commands fail with “setup refresh had errors” after desktop update `bug` `windows-os` `app` `remote` 💬2
- [#51919](https://github.com/openai/codex/issues/51919) [macOS] Quick Chat omits completed final answers and stays on thinking/search activity after reopening history `bug` `app` `session` 💬1
- [#51918](https://github.com/openai/codex/issues/51918) Profile page: oversized empty Featured Works section pushes Token Activity below the fold `enhancement` `app` 💬1
- [#51917](https://github.com/openai/codex/issues/51917) [Windows][26.1002.52244] Couldn't load workspace settings blocks sending messages (possible Cloudflare challenge) `bug` `windows-os` `app` `connectivity` 💬1
- [#51574](https://github.com/openai/codex/issues/51574) [Dots] Notifications appear on another device 30–60 minutes after messages were read `bug` `windows-os` `app` `dots` 💬1
- [#51916](https://github.com/openai/codex/issues/51916) [Windows] No window/UI/logs while cua_node runtime is materialized; killing ChatGPT.exe restarts the copy, preventing recovery `bug` `windows-os` `app` `performance` 💬1
- [#51889](https://github.com/openai/codex/issues/51889) macOS: chats develop repeated WebSocket Broken pipe failures during media work, despite reinstall `bug` `app` `connectivity` `session` 💬1
- [#51912](https://github.com/openai/codex/issues/51912) GPT-6 models reject all harmless prompts as policy violations `bug` `model-behavior` `windows-os` `app` 💬1
- [#51905](https://github.com/openai/codex/issues/51905) Windows + WSL: dot stays offline; plugin/installed times out during local executor startup `bug` `windows-os` `app` `skills` 💬1
- [#51913](https://github.com/openai/codex/issues/51913) [Codex] Windows: Sites packaging fails with “Unable to start the Sites workflow command” `bug` `windows-os` `app` `skills`
- [#51910](https://github.com/openai/codex/issues/51910) [Dots] Existing standing authorization is intermittently rejected for previously working cloud-browser checks `bug` `safety-check` `browser` `dots`
- [#51817](https://github.com/openai/codex/issues/51817) Dots: make Intelligent UI available in dot conversations `enhancement` `dots`
- [#51915](https://github.com/openai/codex/issues/51915) ChatGPT macOS: Dock badge “1” persists with no unread items and “Mark all read” disabled `bug` `app`
- [#51914](https://github.com/openai/codex/issues/51914) [macOS] Both-Command Appshots shortcut also activates Right Command dictation (26.1002.52244) `bug` `app`
- [#51909](https://github.com/openai/codex/issues/51909) Codex CLI TUI intermittently omits first character of Japanese reply `bug` `TUI` `CLI`

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,249 · **Open issues:** 771 · **Last push:** <1h ago

On October 8, 2026, Gemini CLI released version v0.65.0-nightly.20261008.g44d764ee5, which includes important updates such as a fix for the CI workflow to unassign inactive assignees and improvements to enforce terminal user turn invariants and normalize request contents. Notable features added include support for custom OTLP headers in telemetry configuration. Additionally, several merged pull requests addressed critical issues, including the prevention of infinite verification and OAuth retry loops. There were no new issues reported in the last 24 hours, indicating a stable day for the project.

#### 🚀 New Releases
- [v0.65.0-nightly.20261008.g44d764ee5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-nightly.20261008.g44d764ee5) Release v0.65.0-nightly.20261008.g44d764ee5

#### ✅ Merged PRs
- [#29655](https://github.com/google-gemini/gemini-cli/pull/29655) fix(auth): prevent infinite verification and OAuth retry loops
- [#29641](https://github.com/google-gemini/gemini-cli/pull/29641) `feat(telemetry): support custom OTLP headers in telemetry configuration`
- [#29612](https://github.com/google-gemini/gemini-cli/pull/29612) fix(core): enforce terminal user turn invariant and normalize request contents
- [#29609](https://github.com/google-gemini/gemini-cli/pull/29609) fix(ci): add missing loop in unassign-inactive-assignees workflow

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,243 · **Open issues:** 2,174 · **Last push:** <1h ago

On October 8, 2026, GitHub Copilot CLI released several updates, including version 1.0.94-3, which added the Claude Haiku 5.5 model to the model selection and implemented a policy warning when startup bypass-permission flags are suppressed by managed settings. Version 1.0.94-0 improved update guidance for managed settings without blocking normal prompts, while version 1.0.93 introduced enterprise permission limits for managed domain boundaries and enhanced command sandboxing features available to all users. Among the new issues, #5072 stands out, as it highlights the missing NSLocalNetworkUsageDescription in GitHub Copilot.app, preventing MCP servers and shell from accessing local-subnet hosts on macOS. Overall, today's developments focused on enhancing model support and addressing usability concerns.

#### 🚀 New Releases
- [v1.0.94-3](https://github.com/github/copilot-cli/releases/tag/v1.0.94-3) 1.0.94-3
- [v1.0.94-2](https://github.com/github/copilot-cli/releases/tag/v1.0.94-2) 1.0.94-2
- [v1.0.94-1](https://github.com/github/copilot-cli/releases/tag/v1.0.94-1) 1.0.94-1
- [v1.0.94-0](https://github.com/github/copilot-cli/releases/tag/v1.0.94-0) 1.0.94-0
- [v1.0.93](https://github.com/github/copilot-cli/releases/tag/v1.0.93) 1.0.93
- [v1.0.93-4](https://github.com/github/copilot-cli/releases/tag/v1.0.93-4) 1.0.93-4

#### 🐛 New Issues
- [#5076](https://github.com/github/copilot-cli/issues/5076) `/add-dir` does not add the directory to the sandbox allow list 💬3
- [#5075](https://github.com/github/copilot-cli/issues/5075) Hook event for turns that end by user abort (agentStop is skipped on Ctrl+C / Esc) `triage`
- [#5074](https://github.com/github/copilot-cli/issues/5074) Windows Terminal key-binding offer is preselected "Yes", so the first Enter of a typed prompt rewrites Windows Terminal settings.json `triage`
- [#5073](https://github.com/github/copilot-cli/issues/5073) / slash-command skill picker shows phantom skills mis-namespaced under wrong plugin `triage`
- [#5072](https://github.com/github/copilot-cli/issues/5072) GitHub Copilot.app is missing NSLocalNetworkUsageDescription — MCP servers and shell cannot reach local-subnet hosts on macOS `triage`
- [#5071](https://github.com/github/copilot-cli/issues/5071) Windows: /upgrade on a winget install replaces the WinGet\Links alias and leaves winget/Add-Remove Programs on the old version `triage`
- [#5069](https://github.com/github/copilot-cli/issues/5069) tool_search_tool reports "No tools found" for tools whose MCP server has not finished registering - indistinguishable from a genuine no-match `area:mcp` `area:tools`
- [#5070](https://github.com/github/copilot-cli/issues/5070) Native-quality terminal experience in VS Code for Copilot CLI integration `triage`

#### 🔒 Closed Issues
- [#4652](https://github.com/github/copilot-cli/issues/4652) Copilot CLI Reports 'Sandboxing is enabled but is not supported on this host' for latest Windows 25H2 build
- [#4731](https://github.com/github/copilot-cli/issues/4731) A tools/list refresh dispatched into a server still blocked by a just-cancelled tool call times out and permanently strips that server's tools for the life of the process
- [#3861](https://github.com/github/copilot-cli/issues/3861) Docs present local sandbox capabilities (per-host filtering, cross-platform isolation) as working, but they do not — please align docs with actual behavior
- [#4867](https://github.com/github/copilot-cli/issues/4867) It's a bug on the `/sandbox policy` command, but the option is being applied otherwise.
- [#4788](https://github.com/github/copilot-cli/issues/4788) Windows sandbox: git status fails with working-directory permission denied despite allowed paths
- [#4679](https://github.com/github/copilot-cli/issues/4679) Sandbox bug - blocking shell

### OpenCode (`anomalyco/opencode`)

**Stars:** 212,227 · **Open issues:** 6,198 · **Last push:** <1h ago

On October 8, 2026, there were no new releases for OpenCode; however, several significant pull requests were merged, including feature #53837, which introduces remote pairing through OpenTunnel, and #53257, which improves the user interface by ensuring one-time pairing links are correctly handled across the GUI. Other important fixes included #53825, which animates segmented controls and addresses button hit-testing issues, and #53422, which updates the CLI to provide plugins with the host's Effect. Additionally, a notable new issue was raised concerning permissions for reading a bundled skill reference, highlighted by the concerns in issue #53835.

#### ✅ Merged PRs
- [#53837](https://github.com/anomalyco/opencode/pull/53837) feat(cli): pair remotely through OpenTunnel
- [#53257](https://github.com/anomalyco/opencode/pull/53257) fix(app): handle one-time pairing links across the GUI
- [#53825](https://github.com/anomalyco/opencode/pull/53825) feat(ui): animate segmented control with solid-motion and fix button hit-testing
- [#53422](https://github.com/anomalyco/opencode/pull/53422) fix(cli): give plugins the host's Effect
- [#53815](https://github.com/anomalyco/opencode/pull/53815) fix(session-ui): show latest thinking summary heading while streaming
- [#53819](https://github.com/anomalyco/opencode/pull/53819) fix(core): drop early guarded plugin activation

#### 🐛 New Issues
- [#53835](https://github.com/anomalyco/opencode/issues/53835) permissions: reading a bundled skill reference asks for access to the plugin cache `pending close` 💬5
- [#53834](https://github.com/anomalyco/opencode/issues/53834) Desktop app: session list stuck on "Loading..." — window gets 401 from its own background service 💬3
- [#53839](https://github.com/anomalyco/opencode/issues/53839) config: project .opencode directory is never discovered (agents and opencode.jsonc not loaded) 💬1

#### 🔒 Closed Issues
- [#41011](https://github.com/anomalyco/opencode/issues/41011) Both OpenCode Go & Zen are down
- [#37771](https://github.com/anomalyco/opencode/issues/37771) OpenCode Go: kimi-k3, kimi-k2.6, kimi-k2.7-code, glm-5.2, grok-4.5, qwen3.7-max, hy3-preview all fail with 'Upstream request failed' — non-standard 'mcp'/'system' fields rejected by strict provider validators
- [#39522](https://github.com/anomalyco/opencode/issues/39522) Opencode Web Cannot Find My Project
- [#31307](https://github.com/anomalyco/opencode/issues/31307) Multiple opencode instances in the same project share the same session via SQLite database
- [#32548](https://github.com/anomalyco/opencode/issues/32548) Step-cap assistant message causes 400 on Claude models with thinking enabled
- [#39165](https://github.com/anomalyco/opencode/issues/39165) SQLite NOT NULL constraint failed: session_message.seq crash on first prompt after /model switch — silently breaks all further input
- [#41329](https://github.com/anomalyco/opencode/issues/41329) [FEATURE]: Please let me disable auto-update on Desktop
- [#33469](https://github.com/anomalyco/opencode/issues/33469) [FEATURE]: Desktop version side session support (like /btw in TUI)
- [#40865](https://github.com/anomalyco/opencode/issues/40865) [Bug] Reasoning content mixed into `content` field and pushed word-by-word, causing `Thought` block spam in TUI
- [#41273](https://github.com/anomalyco/opencode/issues/41273) Moonshot/Kimi models hang or fail in OpenCode while direct streaming via cURL works
- [#41318](https://github.com/anomalyco/opencode/issues/41318) [FEATURE]: Discover models from a built-in provider's own API when the models.dev catalog lags
- [#38015](https://github.com/anomalyco/opencode/issues/38015) [FEATURE]: Show current variant in TUI status bar
- [#41035](https://github.com/anomalyco/opencode/issues/41035) [Bug] OpenCode Go: kimi-k3 无法连接（AI_APICallError: Internal server error / Upstream request failed）
- [#40156](https://github.com/anomalyco/opencode/issues/40156) [FEATURE]: `opencode.jsonc` should support inheriting data from `anomalyco/models.dev` via properties when configuring provider models
- [#41043](https://github.com/anomalyco/opencode/issues/41043) opencode web 无法创建会话
- [#41041](https://github.com/anomalyco/opencode/issues/41041) Desktop (Windows): EPERM reading .config/opencode/opencode.jsonc even though Node reads it fine; rename+recreate (identical bytes) fixes it
- [#40858](https://github.com/anomalyco/opencode/issues/40858) [FEATURE]: Add opencode-analyze-image to the ecosystem list
- [#40814](https://github.com/anomalyco/opencode/issues/40814) [Bug] Web UI CSP blocks `blob:` URLs — dragging an image into chat fails with "NetworkError when attempting to fetch resource"
- [#41338](https://github.com/anomalyco/opencode/issues/41338) [FEATURE]: Add a way to make a subagent continue to work that's interrupted for some reason like internet or closed opencode or computer shutdown.
- [#41332](https://github.com/anomalyco/opencode/issues/41332) OpenCode Desktop prompt input textbox takes focus/changes cursor position while agent works(MacOS)
- [#41320](https://github.com/anomalyco/opencode/issues/41320) [BUG] Cloudflare 1010 blocks OpenAI Codex CLI from OpenCode Go API → "stream disconnected ... error decoding response body"
- [#41098](https://github.com/anomalyco/opencode/issues/41098) [FEATURE]: Reopening Allow editing MCP tool call content before execution when permission is 'ask' - #23790
- [#41087](https://github.com/anomalyco/opencode/issues/41087) [FEATURE]:AI无法查看图片
- [#41073](https://github.com/anomalyco/opencode/issues/41073) the open code doest work
- [#40235](https://github.com/anomalyco/opencode/issues/40235) Compaction permanently fails with 'Duplicate value for tool_call_id' after an interrupted tool run
- [#41066](https://github.com/anomalyco/opencode/issues/41066) server: orphaned serve --service busy-loops at 100% CPU in drain retry loop (high energy)
- [#41067](https://github.com/anomalyco/opencode/issues/41067) write/edit/read submit relative paths so absolute and ~ permission rules never match out-of-worktree files
- [#41063](https://github.com/anomalyco/opencode/issues/41063) Desktop reply box flashes and disappears — no error shown
- [#41061](https://github.com/anomalyco/opencode/issues/41061) [Bug] reasoning_content "invalid_request" on follow-up messages with OpenCodeZen DeepSeek-V4-Flash in thinking mode
- [#41052](https://github.com/anomalyco/opencode/issues/41052) SDK text/html guard misses responses with a charset parameter
- [#41050](https://github.com/anomalyco/opencode/issues/41050) CONTRIBUTING.md points to a TUI path that no longer exists
- [#41047](https://github.com/anomalyco/opencode/issues/41047) "Unavailable tool" error message lists every available tool, burning thousands of tokens on repeated occurrences
- [#40882](https://github.com/anomalyco/opencode/issues/40882) TUI attention sound plays repeatedly while idle with no events (WSL2)
- [#41026](https://github.com/anomalyco/opencode/issues/41026) Bun process memory exceeds 1GB and grows unboundedly — opencode 1.18.14 on Windows
- [#41348](https://github.com/anomalyco/opencode/issues/41348) [FEATURE]: PLEASE guard against accidental page refresh on web
- [#41334](https://github.com/anomalyco/opencode/issues/41334) Windows: Verbose Bun stack traces on every startup
- [#41327](https://github.com/anomalyco/opencode/issues/41327) [FEATURE]: Route Kimi K3 to the cheaper k3-256k endpoint below 256k context on Kimi for Coding
- [#41324](https://github.com/anomalyco/opencode/issues/41324) cli: Bun managed-service spawn drops runtime conditions
- [#41317](https://github.com/anomalyco/opencode/issues/41317) [FEATURE]: Control-plane operation to start or restart sync for a specific workspace
- [#41192](https://github.com/anomalyco/opencode/issues/41192) Desktop: right panel tab bar divider clashes with session header fade
- [#41089](https://github.com/anomalyco/opencode/issues/41089) [FEATURE]: High-Quality Armenian Localization Update (Replacing low-quality machine translation)
- [#41065](https://github.com/anomalyco/opencode/issues/41065) [FEATURE]: Allow normal email registration on website, please allow cryptocurrency as a payment option for apis.
- [#41051](https://github.com/anomalyco/opencode/issues/41051) v2 SDK message builder assigns the placeholder id "asdasd"
- [#41036](https://github.com/anomalyco/opencode/issues/41036) [FEATURE] More beginner-friendly UI and interaction patterns, closer to ChatGPT/Kimi-style GUI products
- [#41025](https://github.com/anomalyco/opencode/issues/41025) V2: Worktree directory labels missing from session picker
- [#41023](https://github.com/anomalyco/opencode/issues/41023) [FEATURE]: Allow to configure which members should be assigned OpenCode Go subscriptions
- [#41022](https://github.com/anomalyco/opencode/issues/41022) [Linux] Desktop app fails to start due to incorrect chrome-sandbox permissions

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,344 · **Open issues:** 1,716 · **Last push:** <1h ago

On October 8, 2026, Qwen Code released version v0.25.0-nightly.20261007.8003d28042, which notably improved agent functionality by allowing selected remote hosts to be replaced without losing bindings, alongside closing several testing gaps. Key merged pull requests included fixes for preserving text during file write failures and sanitizing model-supplied text in approval card render sites. A significant new issue raised concerns about the auto mode blocking inert text mentioning the amend phrase, which sparked discussion among users. Overall, the day featured important advancements and ongoing user-driven enhancements within the ecosystem.

#### 🚀 New Releases
- [v0.25.0-nightly.20261007.8003d28042](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.0-nightly.20261007.8003d28042) Release v0.25.0-nightly.20261007.8003d28042

#### ✅ Merged PRs
- [#13337](https://github.com/QwenLM/qwen-code/pull/13337) fix(feishu): preserve text and clean up failed inbound file writes
- [#13578](https://github.com/QwenLM/qwen-code/pull/13578) fix(web-shell): sanitise model-supplied text at the approval card's sibling render sites
- [#13631](https://github.com/QwenLM/qwen-code/pull/13631) docs(managed-agent): link every PR and issue reference in the delivery ledger
- [#13626](https://github.com/QwenLM/qwen-code/pull/13626) fix(ci): classify runner-acquisition failure as infrastructure (#13622)

#### 🐛 New Issues
- [#13570](https://github.com/QwenLM/qwen-code/issues/13570) Auto mode blocks inert text that merely mentions the amend phrase, ahead of the user's own ask rule and with no escape hatch `priority/P2` `type/bug` `category/security` `scope/shell` 💬6
- [#13566](https://github.com/QwenLM/qwen-code/issues/13566) web-shell: approval card leaves sibling model-supplied text unsanitised, and the command block comment overclaims coverage `priority/P2` `type/bug` `category/security` `scope/web-shell` 💬6
- [#13632](https://github.com/QwenLM/qwen-code/issues/13632) feat(mcp): refresh a server's tools on notifications/tools/list_changed `priority/P2` `type/feature-request` `category/tools` `scope/mcp` 💬5
- [#13633](https://github.com/QwenLM/qwen-code/issues/13633) feat(hooks): fire a hook when the user cancels a turn (Esc / Ctrl+C) `priority/P2` `type/feature-request` `category/core` `roadmap/hooks-events` 💬4
- [#13597](https://github.com/QwenLM/qwen-code/issues/13597) Subagent tool doesn't report error message to the main agent `priority/P2` `type/bug` `category/core` `roadmap/subagents-tools` 💬4
- [#13613](https://github.com/QwenLM/qwen-code/issues/13613) eval: model-facing text of session multi-agent collaboration before `agentCollaboration` graduates `priority/P2` `type/feature-request` `category/development` `scope/testing` 💬4
- [#13638](https://github.com/QwenLM/qwen-code/issues/13638) H5b/H5c channel runtime review backlog: 40 suggestion-level findings deferred from PR #13572 (review round 1) `priority/P3` `category/development` `scope/testing` `type/enhancement` 💬3
- [#13637](https://github.com/QwenLM/qwen-code/issues/13637) test(core): pin the managed-memory catalog paths left unwitnessed by #13521 `priority/P2` `status/blocked` `category/core` `scope/memory` 💬3
- [#13635](https://github.com/QwenLM/qwen-code/issues/13635) chore(core): deferred review Suggestions from #13599 (tool-output budgets + injected-result measurement) — 27 items, split out by the scope fuse `priority/P2` `status/blocked` `category/core` `category/tools` 💬3
- [#13634](https://github.com/QwenLM/qwen-code/issues/13634) Inconsistent /update behavior with general.enableAutoUpdate: false — interactive is gated, non-interactive installs `priority/P2` `type/bug` `category/cli` `scope/commands` 💬3
- [#13625](https://github.com/QwenLM/qwen-code/issues/13625) Desktop app login flow ignores Windows default browser and forces Microsoft Edge (breaks Firefox Portable) `status/need-information` `priority/P3` `type/bug` `category/authentication` 💬3
- [#13618](https://github.com/QwenLM/qwen-code/issues/13618) Harden legacy (unbound) Sessions to the actor-role vocabulary `priority/P2` `type/feature-request` `category/security` `scope/session-management` 💬3
- [#13617](https://github.com/QwenLM/qwen-code/issues/13617) Session handover command: transfer a bound Session's recorded owner between actors `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#13619](https://github.com/QwenLM/qwen-code/issues/13619) managed_agent_command idempotency key is not actor-scoped on the newly widened submitter family `priority/P2` `type/bug` `category/security` `daemon` 💬3
- [#13612](https://github.com/QwenLM/qwen-code/issues/13612) feat(memory): extraction cadence follow-ups after #13571 (boundary flushes, window bound, telemetry) `priority/P3` `type/feature-request` `category/core` `scope/memory` 💬3
- [#13611](https://github.com/QwenLM/qwen-code/issues/13611) LSP diagnostics: deferred review findings from #13128 (relevance attribution and failure rendering) `priority/P2` `type/bug` `category/core` `status/ready-for-human` 💬3
- [#13608](https://github.com/QwenLM/qwen-code/issues/13608) refactor(core): give the Code Mode tool-result subtype stamp a single writer-side owner `priority/P3` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#13640](https://github.com/QwenLM/qwen-code/issues/13640) test(memory): pin the #13004 extraction-cadence sites left unwitnessed by #13571 `priority/P3` `category/core` `scope/memory` `scope/testing` 💬2
- [#13622](https://github.com/QwenLM/qwen-code/issues/13622) Main CI failed: Qwen Code CI on c468f2ab66e3 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13629](https://github.com/QwenLM/qwen-code/issues/13629) Deferred review findings from PR #13481: fix(release): reclaim docker disk and gate the data root before the sandbox imag 💬2
- [#13623](https://github.com/QwenLM/qwen-code/issues/13623) Main CI failed: SDK Java on 57e347fae44d `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬2
- [#13641](https://github.com/QwenLM/qwen-code/issues/13641) fix(core): one mode- and scope-aware roster predicate for model-facing discovery hints 💬1
- [#13639](https://github.com/QwenLM/qwen-code/issues/13639) Deferred review findings from PR #13627: fix(ci): route the sdk-java MariaDB lane to the ECS pool (#13623) 💬1
- [#13620](https://github.com/QwenLM/qwen-code/issues/13620) Deferred review findings from PR #13554: feat(managed-agent): Collect retired stream-capture tool outputs (#13534) 💬1

#### 🔒 Closed Issues
- [#13334](https://github.com/QwenLM/qwen-code/issues/13334) bug(feishu): failed inbound file writes orphan temporary directories and drop text fallback
- [#11507](https://github.com/QwenLM/qwen-code/issues/11507) Deferred review findings from PR #11289: fix(web-shell): keep mid-turn messages the daemon rejects at idle
- [#13326](https://github.com/QwenLM/qwen-code/issues/13326) fix(managed-agent): a long assistant answer publishes fully via deltas, then fails the Turn at the 64KB journal inline limit
- [#13622](https://github.com/QwenLM/qwen-code/issues/13622) Main CI failed: Qwen Code CI on c468f2ab66e3

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments
- [#1703](https://github.com/anthropics/skills/pull/1703) Add md2video-audio skill

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 391,609 · **Open issues:** 9,496 · **Last push:** <1h ago

Today, OpenClaw released version 2026.10.1-beta.2, which brings significant updates, including improved session and memory management by preserving usage across registry changes and preventing queued cancellations from stalling active turns. Additionally, the release includes enhancements in delivering worker attachments from remote workspaces and aligning continuation signatures. Among the merged pull requests, key fixes include allowing authenticated UI tests to enter chats automatically and resolving issues with Gateway clients by reusing prepared runtime inputs. However, a notable new issue was raised concerning update failures, with #166554 reporting that version 2026.9.8 removes working codex plugins when certain conditions are met, blocking recovery paths.

#### 🚀 New Releases
- [v2026.10.1-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.10.1-beta.2) openclaw 2026.10.1-beta.2

#### ✅ Merged PRs
- [#166903](https://github.com/openclaw/openclaw/pull/166903) fix: let authenticated UI tests enter chats automatically
- [#166868](https://github.com/openclaw/openclaw/pull/166868) fix(codex): keep the current task after overload retries
- [#166862](https://github.com/openclaw/openclaw/pull/166862) refactor(cli): align diagnostic tests with report selection
- [#166888](https://github.com/openclaw/openclaw/pull/166888) fix: restore CI coverage for nonblocking session titles
- [#166864](https://github.com/openclaw/openclaw/pull/166864) fix(cli): reuse prepared runtime inputs for Gateway clients
- [#166878](https://github.com/openclaw/openclaw/pull/166878) fix: stop Code Mode timeout checks failing during slow startup
- [#166860](https://github.com/openclaw/openclaw/pull/166860) fix(state): serialize wake and hook database admission
- [#166883](https://github.com/openclaw/openclaw/pull/166883) fix: avoid foreign-listener race in Gateway acquisition proof
- [#166865](https://github.com/openclaw/openclaw/pull/166865) fix(ui): keep header and composer visible during session startup
- [#166884](https://github.com/openclaw/openclaw/pull/166884) chore(ui): refresh control ui locales
- [#166873](https://github.com/openclaw/openclaw/pull/166873) chore(i18n): refresh native locales
- [#166753](https://github.com/openclaw/openclaw/pull/166753) fix: stop yielded commands with their Gateway request
- [#166867](https://github.com/openclaw/openclaw/pull/166867) fix: preserve database admission for post-restart turns
- [#166872](https://github.com/openclaw/openclaw/pull/166872) fix(release): restore beta.2 updater inventory and Podman control
- [#166787](https://github.com/openclaw/openclaw/pull/166787) fix: preserve native prompt provenance through database aliases
- [#166829](https://github.com/openclaw/openclaw/pull/166829) fix(ui): stop image controls from obscuring previews
- [#166814](https://github.com/openclaw/openclaw/pull/166814) fix(ui): consolidate repeated browser connections in Activity
- [#166839](https://github.com/openclaw/openclaw/pull/166839) fix: allow Gateway startup with unbound legacy ACP metadata
- [#166128](https://github.com/openclaw/openclaw/pull/166128) fix: prevent sidebar errors during session deletion
- [#166849](https://github.com/openclaw/openclaw/pull/166849) fix(test): keep MCP validation connected after automatic pairing approval
- [#147244](https://github.com/openclaw/openclaw/pull/147244) feat(ios): connect Gateway through native Cloudflare Access
- [#166835](https://github.com/openclaw/openclaw/pull/166835) fix(exec): advertise hosts supported by the session
- [#166838](https://github.com/openclaw/openclaw/pull/166838) ci: advance shared Bun pin to fc53bf8c0f
- [#166846](https://github.com/openclaw/openclaw/pull/166846) fix(agents): reconcile interrupted subagents at startup
- [#157739](https://github.com/openclaw/openclaw/pull/157739) fix(build): serialize unified tsdown runtime bundles to cap peak memory
- [#165741](https://github.com/openclaw/openclaw/pull/165741) fix(plugins): use plain language for diagnostic checks
- [#166094](https://github.com/openclaw/openclaw/pull/166094) refactor(runtime): deslop standalone entrypoints
- [#166837](https://github.com/openclaw/openclaw/pull/166837) chore: restore Bun coverage for portable runtime tests
- [#165825](https://github.com/openclaw/openclaw/pull/165825) refactor: remove experimental fleet management
- [#165753](https://github.com/openclaw/openclaw/pull/165753) fix(text): keep prose between `<|` and `|>` operators in replies
- [#166784](https://github.com/openclaw/openclaw/pull/166784) fix(gateway): settle terminal runs before session mutations
- [#166836](https://github.com/openclaw/openclaw/pull/166836) fix(cron): stop policy warnings on command announcements
- [#166841](https://github.com/openclaw/openclaw/pull/166841) fix(logging): unblock production lint suppression checks
- [#155882](https://github.com/openclaw/openclaw/pull/155882) fix(slack): stop misclassifying bare channel names as ids
- [#166833](https://github.com/openclaw/openclaw/pull/166833) chore: exercise Gateway broker ownership on Bun
- [#166827](https://github.com/openclaw/openclaw/pull/166827) chore: run session reclamation safety tests on Bun
- [#166824](https://github.com/openclaw/openclaw/pull/166824) fix(ui): typing previews remain after sending with Enter
- [#147238](https://github.com/openclaw/openclaw/pull/147238) feat(ios): own Cloudflare Access browser and profile admission
- [#166821](https://github.com/openclaw/openclaw/pull/166821) fix: preserve model picker provider toggles on reopen
- [#166830](https://github.com/openclaw/openclaw/pull/166830) fix(config): stop recommending refused writes for managed metadata
- [#166613](https://github.com/openclaw/openclaw/pull/166613) feat: enforce required worker destinations before dispatch
- [#166811](https://github.com/openclaw/openclaw/pull/166811) fix: keep Doctor socket fixtures within platform path limits
- [#166822](https://github.com/openclaw/openclaw/pull/166822) perf(sessions): keep lifecycle counts off the archive queue
- [#166819](https://github.com/openclaw/openclaw/pull/166819) improve(ui): refine the mobile model picker highlight
- [#166783](https://github.com/openclaw/openclaw/pull/166783) fix(control-ui): restore operator chat deep links
- [#166792](https://github.com/openclaw/openclaw/pull/166792) improve: reduce local-state CLI test setup cost
- [#166786](https://github.com/openclaw/openclaw/pull/166786) fix(ci): refresh workboard assets and isolate Google Meet transport fixture
- [#166807](https://github.com/openclaw/openclaw/pull/166807) fix(ci): subagent cancellation test races child registration
- [#166478](https://github.com/openclaw/openclaw/pull/166478) fix(worker): background execs outlive cleanup budget when the worker anchor dies under load
- [#166751](https://github.com/openclaw/openclaw/pull/166751) perf(plugins): bound retained heap across runtime reloads
- [#166803](https://github.com/openclaw/openclaw/pull/166803) test(config,agents,gateway,plugins): remove low-value tests (batch d012)
- [#166785](https://github.com/openclaw/openclaw/pull/166785) fix(code-mode): preserve core coding signatures in bounded catalog
- [#165921](https://github.com/openclaw/openclaw/pull/165921) refactor(transcripts): move locked writes onto the worker owner
- [#166465](https://github.com/openclaw/openclaw/pull/166465) test(openai): GPT-Live peer-worker test fails under Bun when the far end sees the hang-up
- [#166778](https://github.com/openclaw/openclaw/pull/166778) perf(sessions): reduce allocations in compressed history reads
- [#166743](https://github.com/openclaw/openclaw/pull/166743) test(core,ai,plugins,ui): remove low-value tests (batch d008)
- [#165719](https://github.com/openclaw/openclaw/pull/165719) fix(irc): keep backslash sequences in sent messages and NickServ passwords
- [#166774](https://github.com/openclaw/openclaw/pull/166774) fix(ci): keep full release validation within measured budgets
- [#166762](https://github.com/openclaw/openclaw/pull/166762) test(gateway, state, plugins): remove low-value tests (batch d009)
- [#166726](https://github.com/openclaw/openclaw/pull/166726) chore(ui): refresh control ui locales
- [#166777](https://github.com/openclaw/openclaw/pull/166777) fix: prevent heartbeat live replies from abbreviating markers
- [#166625](https://github.com/openclaw/openclaw/pull/166625) fix(workboard): keep card notes selectable and give the notes editor room
- [#165721](https://github.com/openclaw/openclaw/pull/165721) fix(irc): log in to servers whose password contains spaces
- [#166759](https://github.com/openclaw/openclaw/pull/166759) refactor: consolidate operator recovery admission
- [#166738](https://github.com/openclaw/openclaw/pull/166738) chore(models): daily report suggesting recommended-models list changes
- [#166687](https://github.com/openclaw/openclaw/pull/166687) fix(plugins): reuse a verified native admission instead of re-capturing it on every catalog refresh
- [#166493](https://github.com/openclaw/openclaw/pull/166493) perf(markdown): split long formatted replies without re-rendering every prefix
- [#166755](https://github.com/openclaw/openclaw/pull/166755) fix(state): canonicalize the shared state database path so Windows path spellings share one write admission
- [#166283](https://github.com/openclaw/openclaw/pull/166283) perf(profiles): prepare disclosure through the profile reader
- [#165849](https://github.com/openclaw/openclaw/pull/165849) fix(ui): PR references open wrong repository beside explicit links
- [#166758](https://github.com/openclaw/openclaw/pull/166758) fix(sessions): Knowledge calls still fail mid-turn while the session's own bookkeeping publishes
- [#166400](https://github.com/openclaw/openclaw/pull/166400) fix(codex): native children fail with remote app-servers
- [#166730](https://github.com/openclaw/openclaw/pull/166730) fix(ci): rebalance slow process tests in selected shards
- [#166737](https://github.com/openclaw/openclaw/pull/166737) feat(catalog): publish curated recommended models per provider in catalog v2
- [#166549](https://github.com/openclaw/openclaw/pull/166549) fix(terminal): size multiline table cells by their widest line
- [#166563](https://github.com/openclaw/openclaw/pull/166563) fix(ui): widget error reports split emoji at the message limit
- [#166745](https://github.com/openclaw/openclaw/pull/166745) fix(cli): recognize unset root schema metadata
- [#166553](https://github.com/openclaw/openclaw/pull/166553) fix: preserve operator access after Control UI restart recovery
- [#166740](https://github.com/openclaw/openclaw/pull/166740) improve(ci): speed up release validation setup
- [#166736](https://github.com/openclaw/openclaw/pull/166736) fix(discord): keep health inspection from blocking Gateway connections
- [#166662](https://github.com/openclaw/openclaw/pull/166662) fix(cli): config set rejects ACP harness models for ACP agents
- [#166722](https://github.com/openclaw/openclaw/pull/166722) perf(cli): speed up gateway call cold starts
- [#166674](https://github.com/openclaw/openclaw/pull/166674) refactor(sessions): reduce SQLite write planning during chat turns
- [#166706](https://github.com/openclaw/openclaw/pull/166706) feat(anthropic): support Claude Haiku 5.5
- [#166635](https://github.com/openclaw/openclaw/pull/166635) perf(sessions): retain transcript previews across metadata edits
- [#166682](https://github.com/openclaw/openclaw/pull/166682) refactor(ui): consolidate page rendering and state ownership
- [#166633](https://github.com/openclaw/openclaw/pull/166633) refactor: consolidate Doctor and update CLI workflows
- [#166445](https://github.com/openclaw/openclaw/pull/166445) refactor(placement): migrate remaining native read callers
- [#166685](https://github.com/openclaw/openclaw/pull/166685) refactor(auto-reply): consolidate reply preparation and command flows
- [#166611](https://github.com/openclaw/openclaw/pull/166611) feat: enforce required worker policy before local inference
- [#166653](https://github.com/openclaw/openclaw/pull/166653) fix: session previews leak Markdown link markup around nested brackets
- [#165806](https://github.com/openclaw/openclaw/pull/165806) fix: desktop stream hangs when the gateway never acknowledges close
- [#166691](https://github.com/openclaw/openclaw/pull/166691) refactor(agents): consolidate lifecycle and tool execution
- [#166695](https://github.com/openclaw/openclaw/pull/166695) fix(update): refuse a non-elevated Windows update immediately and name elevation as the cause
- [#166617](https://github.com/openclaw/openclaw/pull/166617) perf(gateway): refresh derived plugin metadata after readiness
- [#166704](https://github.com/openclaw/openclaw/pull/166704) refactor(codex): share startup and projection owners
- [#166711](https://github.com/openclaw/openclaw/pull/166711) refactor(agents): consolidate runtime preparation and cleanup
- [#166701](https://github.com/openclaw/openclaw/pull/166701) perf(logging): speed up secret redaction for large text
- [#166698](https://github.com/openclaw/openclaw/pull/166698) fix(sqlite): avoid repeated validation after session tracker setup
- [#166609](https://github.com/openclaw/openclaw/pull/166609) fix: retain session custody until dispatch work settles
- [#166608](https://github.com/openclaw/openclaw/pull/166608) fix: stop device preparation when dispatch authority ends
- [#166606](https://github.com/openclaw/openclaw/pull/166606) fix: source workspace workers load from external working directories
- [#166259](https://github.com/openclaw/openclaw/pull/166259) refactor(conversations): move binding and delivery authority to workers
- [#166626](https://github.com/openclaw/openclaw/pull/166626) refactor(discord): consolidate shared transport and lifecycle paths
- [#166705](https://github.com/openclaw/openclaw/pull/166705) fix(openrouter): thinking levels collapse to "off, ultra" on a cold process
- [#166690](https://github.com/openclaw/openclaw/pull/166690) refactor(agents): consolidate embedded runner execution paths
- [#166699](https://github.com/openclaw/openclaw/pull/166699) fix(catalog): hosted model catalog stops updating once models.dev exceeds 5 MiB
- [#166679](https://github.com/openclaw/openclaw/pull/166679) refactor(android): consolidate phone and Wear feature paths
- [#166636](https://github.com/openclaw/openclaw/pull/166636) refactor(telegram): consolidate transport preparation and delivery
- [#166607](https://github.com/openclaw/openclaw/pull/166607) improve(release): restore CI optimizations to 2026.9.9
- [#166693](https://github.com/openclaw/openclaw/pull/166693) fix(codex): session stops responding after Codex unloads a thread with background terminals
- [#166680](https://github.com/openclaw/openclaw/pull/166680) refactor(ios): consolidate shared native feature handlers
- [#166539](https://github.com/openclaw/openclaw/pull/166539) refactor(device-identity): admit runtime identities through the shared worker
- [#166308](https://github.com/openclaw/openclaw/pull/166308) fix: generate chat titles from the supplied source message
- [#166689](https://github.com/openclaw/openclaw/pull/166689) test(core,ui): remove low-value tests (batch d007)

#### 🐛 New Issues
- [#166770](https://github.com/openclaw/openclaw/issues/166770) [Bug]: Watchdog ignores completed async tools when the enclosing response ends with length `bug` `no-stale` `P1` `clawsweeper:fix-shape-clear` 💬4
- [#166455](https://github.com/openclaw/openclaw/issues/166455) Update failure: doctor-failed (2026.9.5) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬4
- [#166771](https://github.com/openclaw/openclaw/issues/166771) [Bug]: Yielded requester run fence blocks settle wakes and later user replies `bug` `no-stale` `P1` `clawsweeper:fix-shape-clear` 💬3
- [#166898](https://github.com/openclaw/openclaw/issues/166898) Session-title hydration test expects expanded SQLite text for compressed previews `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#166585](https://github.com/openclaw/openclaw/issues/166585) claude-cli: no-output watchdog kills CLI after the final reply was already produced (background Agent tasks), turn marked failed `P1` `clawsweeper:needs-live-repro` `impact:message-loss` `issue-rating: 🐚 platinum hermit` 💬3
- [#166641](https://github.com/openclaw/openclaw/issues/166641) web_fetch cold fallback discovery synchronously captures unrelated plugins on Gateway main thread, causing liveness stalls `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬3
- [#166678](https://github.com/openclaw/openclaw/issues/166678) [Feature]: Hide agents from the agent picker (WebUI, macOS, iOS) while keeping them spawnable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#166651](https://github.com/openclaw/openclaw/issues/166651) [Bug]: (bedrock) settled-turn finalization fails when replayed tool history lacks toolConfig `bug` `no-stale` `bug:behavior` `P2` 💬3
- [#166598](https://github.com/openclaw/openclaw/issues/166598) Update failure: package-swap (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬3
- [#166554](https://github.com/openclaw/openclaw/issues/166554) [Bug]: 2026.9.8 update removes working codex plugin when ClawHub lacks the matching version; unfinished migration then blocks every recovery path `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:auth-provider` 💬3
- [#166896](https://github.com/openclaw/openclaw/issues/166896) Real-Gateway UI fixtures still require the obsolete manual login handoff `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166875](https://github.com/openclaw/openclaw/issues/166875) xAI OAuth (SuperGrok/Premium+): recommended path silently yields no usable models — catalog discovery rejected by cli-chat-proxy; acpx grok-build harness works `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#166670](https://github.com/openclaw/openclaw/issues/166670) CI: gateway-methods hits host OOM on Bun 667c; Node control passes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#166899](https://github.com/openclaw/openclaw/issues/166899) Shared-state reads hide newer schema refusal behind a legacy-index migration diagnostic `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166877](https://github.com/openclaw/openclaw/issues/166877) [Bug]: 2026.8.35 forces strict OpenAI tool schemas — one MCP tool with a regex lookaround pattern fails every OpenAI turn (7.35 downgraded strict) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166870](https://github.com/openclaw/openclaw/issues/166870) secret-exfiltration scanner false-positive on instructional .env substrings `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#166859](https://github.com/openclaw/openclaw/issues/166859) Slack progress shows a tool row for message react calls on the embedded runtime `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166809](https://github.com/openclaw/openclaw/issues/166809) Feishu WebSocket channels drop on every macOS DarkWake cycle (87/87 events matched, median 0s): post-thaw reconnect is deferred by its own "idle" condition, then killed by the 3s pong timeout `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#166816](https://github.com/openclaw/openclaw/issues/166816) [Bug]: config get advises a config set command the write guard always refuses for auto-managed meta paths `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166756](https://github.com/openclaw/openclaw/issues/166756) 2026.9.8: first cron condition-trigger eval per Gateway process loads the plugin registry synchronously on the main thread (~31 s), trigger times out and liveness fires `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166744](https://github.com/openclaw/openclaw/issues/166744) Steering with an unconfirmed receipt cancels running tools `bug` `no-stale` `P1` `clawsweeper:fix-shape-clear` 💬2
- [#166725](https://github.com/openclaw/openclaw/issues/166725) [Bug]: config get reports the documented root $schema key as an unknown path `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166605](https://github.com/openclaw/openclaw/issues/166605) config set rejects ACP harness model in agents.entries.<id>.model.primary that the docs say is supported `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166721](https://github.com/openclaw/openclaw/issues/166721) [Bug]: Authenticated Control UI requester identity is lost before plugin tool construction `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#166708](https://github.com/openclaw/openclaw/issues/166708) [Bug]: ChatGPT Responses websocket hits the 60-minute connection limit mid-stream; turn fails with no reconnect or model fallback `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166684](https://github.com/openclaw/openclaw/issues/166684) Browser URL globs can stall the Node event loop `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166672](https://github.com/openclaw/openclaw/issues/166672) Twitch-Plugin-Fehler `bug` `no-stale` `bug:behavior` `P1` 💬2
- [#166646](https://github.com/openclaw/openclaw/issues/166646) [Bug]: managed-profile tab cap closes the most recently used tabs, evicting other sessions' live tabs `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166638](https://github.com/openclaw/openclaw/issues/166638) Update failure: runtime-verification-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#166594](https://github.com/openclaw/openclaw/issues/166594) [Bug]: WhatsApp reply silently dropped when openai-completions model emits visible text before reasoning_content (textPhaseRequiresTerminal seals it as commentary) `bug` `bug:behavior` `P1` `impact:message-loss` 💬2
- [#166603](https://github.com/openclaw/openclaw/issues/166603) `tts.provider` silently ignored during plugin-inventory rebuilds — pinned local TTS provider falls through to the next provider by autoSelectOrder `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#166612](https://github.com/openclaw/openclaw/issues/166612) Telegram: quoted voice audio sends a second transcript echo under the follow-up message ID `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#166453](https://github.com/openclaw/openclaw/issues/166453) [Feature]: Local multimodal memory indexing via OpenAI-compatible embedding endpoints (e.g. EmbeddingGemma 2 on llama.cpp) `P3` 💬2
- [#166909](https://github.com/openclaw/openclaw/issues/166909) Control UI: channel-origin messages from the owner render as a separate person; voice messages render as an empty bubble 💬1
- [#166844](https://github.com/openclaw/openclaw/issues/166844) Branch graph qualification includes cold-worker scheduling in its one-second bound `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#166894](https://github.com/openclaw/openclaw/issues/166894) Gateway restart sometimes hangs 30+ minutes to 2 hours on Windows multi-agent installs (2026.9.8) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:crash-loop` 💬1
- [#166871](https://github.com/openclaw/openclaw/issues/166871) Slack DM: message react with user:U… or channel:D… fails for the npm-installed official Slack plugin `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#166866](https://github.com/openclaw/openclaw/issues/166866) Consolidate equivalent provider paths in Feishu, Teams, iMessage, and voice-call `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#166763](https://github.com/openclaw/openclaw/issues/166763) [Bug]: Wrapped node policy denials lose fatal cron outcome and structured diagnostics `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#166834](https://github.com/openclaw/openclaw/issues/166834) [Bug]: Doctor retains unbound legacy ACP rows that prevent Gateway startup after update `bug` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#166856](https://github.com/openclaw/openclaw/issues/166856) Update failure: gateway-recovery-verification (2026.9.8) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#166851](https://github.com/openclaw/openclaw/issues/166851) Update failure: gateway-recovery-verification (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#166848](https://github.com/openclaw/openclaw/issues/166848) [Bug]: Transient websocket failure pins long-lived sessions to SSE until restart, where a cumulative 16 MiB stream cap kills ~10-minute model calls `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166805](https://github.com/openclaw/openclaw/issues/166805) cron command announcements log [outbound/session] "Failed to preserve outbound session creation policy … Session key does not contain an agent id" on every delivery `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#166842](https://github.com/openclaw/openclaw/issues/166842) [Bug]: Control UI hold-to-dictate stops as soon as the mic button is released `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#166826](https://github.com/openclaw/openclaw/issues/166826) [Bug]: sessions.create always fails with "Session creation publication owner is no longer current" `bug` `regression` `impact:session-state` `P0` 💬1
- [#166815](https://github.com/openclaw/openclaw/issues/166815) [Bug]: Native Codex legacy collaboration carrier drops persona and memory guidance (SOUL/USER/IDENTITY, Compiled Wiki snapshot) for gpt-6.1-sol — fall back to thread developer instructions `P2` `impact:session-state` 💬1
- [#166788](https://github.com/openclaw/openclaw/issues/166788) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#166781](https://github.com/openclaw/openclaw/issues/166781) [Bug]: Streaming a reply that contains [[reply_to_current]] re-parses the whole reply on every delta `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#166780](https://github.com/openclaw/openclaw/issues/166780) test(ui): investigate intermittent file-tooltip Copied status assertion `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#166776](https://github.com/openclaw/openclaw/issues/166776) Azure Realtime Talk still targets retired preview endpoint `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#166773](https://github.com/openclaw/openclaw/issues/166773) Azure realtime Talk input transcription requires configurable deployment `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#166769](https://github.com/openclaw/openclaw/issues/166769) [Bug]: Code Mode JSON-whitespace loop exhausts output limit after retry and loses argument diagnostics `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#166768](https://github.com/openclaw/openclaw/issues/166768) [Bug]: Token-auth owners get 'Conversation unavailable' + Log in on every reload of a private /chat URL since #166049 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166492](https://github.com/openclaw/openclaw/issues/166492) [Bug]: Long formatted replies stall channel delivery for seconds while they are split into messages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#166656](https://github.com/openclaw/openclaw/issues/166656) [Bug]: Windows extended-length vs plain path aliasing still splits write admission for state/openclaw.sqlite in 2026.9.8 (follow-up to #147409) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#166767](https://github.com/openclaw/openclaw/issues/166767) Feature request: task-scoped governed metadata and execution identity for agent runs `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166766](https://github.com/openclaw/openclaw/issues/166766) [Bug]: Session clear shows stale resolved Codex migration warning from update history `bug` `bug:behavior` `P2` `clawsweeper:needs-info` 💬1
- [#166761](https://github.com/openclaw/openclaw/issues/166761) Update failure: runtime-verification-failed (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#166757](https://github.com/openclaw/openclaw/issues/166757) Control UI: support large chat attachments via configurable HTTP/streaming uploads `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166752](https://github.com/openclaw/openclaw/issues/166752) [Bug]: claude-cli agents lose their shell on 2026.10.1 when the tool policy doesn't grant exec `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166748](https://github.com/openclaw/openclaw/issues/166748) track Control Model renderer-neutral artifact projection ownership `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166746](https://github.com/openclaw/openclaw/issues/166746) cron implicit delivery session provenance can split attribution `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#166747](https://github.com/openclaw/openclaw/issues/166747) remove obsolete hook install archive fixtures `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#166542](https://github.com/openclaw/openclaw/issues/166542) Control UI turns lose operator.admin after automatic restart recovery `P1` `clawsweeper:source-repro` `impact:session-state` `impact:security` 💬1
- [#166734](https://github.com/openclaw/openclaw/issues/166734) sessions_send from an embedded-runtime run fails with 'session writer claim changed before transcript persistence': initial dispatch inherits the caller's owned transcript-write context (2026.9.8) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#166724](https://github.com/openclaw/openclaw/issues/166724) doctor migrates discord:user:<id> owner to discord:<id>, which breaks heartbeat owner route (no-route) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#166729](https://github.com/openclaw/openclaw/issues/166729) [Feature]: Configure custom decision-model providers in models.providers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166723](https://github.com/openclaw/openclaw/issues/166723) Update failure: managed-service-preflight (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#166718](https://github.com/openclaw/openclaw/issues/166718) config patch --dry-run passes but the write is refused by the size-drop guard; no way to allow an intended shrink `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166717](https://github.com/openclaw/openclaw/issues/166717) Attachment button hard-freezes the app — file picker never appears (WinUI, both Tray and main app) `bug` `bug:crash` `P2` `impact:crash-loop` 💬1
- [#166643](https://github.com/openclaw/openclaw/issues/166643) [Bug]: Session previews leak Markdown link markup and truncate later prose `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#166713](https://github.com/openclaw/openclaw/issues/166713) browser-automation skill: Tab Hygiene has no task-completion teardown rule, so renderers accumulate across tasks `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#166712](https://github.com/openclaw/openclaw/issues/166712) [Bug]: model.usage cost/tokens appear to reflect only the final real call of a multi-call turn, not the whole turn `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#166707](https://github.com/openclaw/openclaw/issues/166707) [Bug]: macOS app's local device-pairing connections (ui/node) never send their auth token, loop with token_missing indefinitely `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` `P0` 💬1
- [#166709](https://github.com/openclaw/openclaw/issues/166709) [Bug]: Subagent requester-settle turn runs unbounded on the user-facing session lane and blocks inbound human messages for many minutes `P1` `impact:session-state` 💬1
- [#166700](https://github.com/openclaw/openclaw/issues/166700) [Bug]: CLI MCP message sends to a named channel lose automatic thread/topic inheritance `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#166696](https://github.com/openclaw/openclaw/issues/166696) [Bug]: plugins uninstall --dry-run rejects shadowed installs with “no authoritative package-owner metadata” `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#166697](https://github.com/openclaw/openclaw/issues/166697) [Bug]: WebChat image completion inherits a saved WeChat route in a shared main session (2026.9.8) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166681](https://github.com/openclaw/openclaw/issues/166681) [Feature]: Group disposable workers by allocation-owned execution host (design request) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166664](https://github.com/openclaw/openclaw/issues/166664) [Bug]: Identical-argument tool loops are never blocked when results vary (generic_repeat only warns; thresholds no longer configurable) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166692](https://github.com/openclaw/openclaw/issues/166692) Feature request: attach cost to model.call.completed/model.call.error, same as model.usage already does `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166688](https://github.com/openclaw/openclaw/issues/166688) feat: identify unusable web_fetch pages with opt-in Decision assistance `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166686](https://github.com/openclaw/openclaw/issues/166686) feat(ui): per-agent accent color for pane headers, sidebar rows, and avatars `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166665](https://github.com/openclaw/openclaw/issues/166665) [Bug]: Failed byte-triggered compaction suppresses itself with no fallback, so a session's active transcript grows unbounded (150x maxActiveTranscriptBytes) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166676](https://github.com/openclaw/openclaw/issues/166676) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#166663](https://github.com/openclaw/openclaw/issues/166663) [Bug]: Native package update fails owned systemd stop on inspection deadline; standalone CLI stop succeeds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#166661](https://github.com/openclaw/openclaw/issues/166661) [Bug]: Session creation always fails on Windows with "Session creation publication owner is no longer current" (UNAVAILABLE); existing sessions work fine `bug` `bug:behavior` `impact:session-state` `P0` 💬1
- [#166652](https://github.com/openclaw/openclaw/issues/166652) macOS node exec collapses under concurrent node.invoke: "node pairing changed" flaps, node stays connected until the app is restarted `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#166647](https://github.com/openclaw/openclaw/issues/166647) [Bug]: openclaw agent --session-id: input queued behind an active turn is withdrawn (pending input state=cancelled) when the CLI --timeout elapses — message silently lost (2026.9.8) `P1` `clawsweeper:needs-info` `impact:session-state` `impact:message-loss` 💬1
- [#166648](https://github.com/openclaw/openclaw/issues/166648) [Bug]: chat.send queueMode "steer" still starts a separate turn instead of injecting into the active webchat run on 2026.9.8 (same symptom as #164571) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#166644](https://github.com/openclaw/openclaw/issues/166644) [Bug]: File-backed memory flush regains ring-zero execution tools after projection `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:security` 💬1
- [#166639](https://github.com/openclaw/openclaw/issues/166639) Settle continuation after sessions_yield loses all shell and file tools when a claude-cli requester falls back to another runtime `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#166634](https://github.com/openclaw/openclaw/issues/166634) [Bug]: Late reclamation commit checkpoint failure leaves agent unavailable after crash recovery `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:session-state` 💬1
- [#166628](https://github.com/openclaw/openclaw/issues/166628) [Feature]: Add a maintainer-approved path for proven main CI repairs `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166620](https://github.com/openclaw/openclaw/issues/166620) [Bug]: file-transfer policy reload blocked by five uninspectable retained work items `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#166624](https://github.com/openclaw/openclaw/issues/166624) [Docs Bug]: Clarify related-work research before opening issues and PRs `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#166623](https://github.com/openclaw/openclaw/issues/166623) Feature request: expose real per-call token usage (model_call_ended carries none, model.usage is turn-level only) `P3` `impact:other` 💬1
- [#166622](https://github.com/openclaw/openclaw/issues/166622) [Bug]: # Windows: sessions.create always fails with "Session creation publication owner is no longer current" `bug` `bug:behavior` `impact:session-state` `P0` 💬1
- [#166595](https://github.com/openclaw/openclaw/issues/166595) claude-cli: bare NO_REPLY on a user-triggered (inter-session) turn is treated as an empty response and fails over `P2` `impact:auth-provider` 💬1
- [#166596](https://github.com/openclaw/openclaw/issues/166596) Context engine silently degrades to legacy for the turn when the plugin-hosted engine instance is mid-retirement; failed drain replacements make the degradation persist across turns `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#166675](https://github.com/openclaw/openclaw/issues/166675) Update failure: global-install-failed (2026.9.4)

#### 🔒 Closed Issues
- [#159612](https://github.com/openclaw/openclaw/issues/159612) Subagent completion settlement retries forever: "owner changed before settlement" re-injects result every turn
- [#157818](https://github.com/openclaw/openclaw/issues/157818) [Bug]: 2026.9.4 → 2026.9.6 npm update still fails `doctor-failed` at the installed updater's hard 300 s canary cap on a 7-agent install. The #151295 fixes ship in 9.6 but cannot lift the 9.4 driver's budget.
- [#141129](https://github.com/openclaw/openclaw/issues/141129) [Bug]: SSH sessions SIGTSTP/SIGTERM on long-running commands since 8.x — regression from 7.1-2
- [#85668](https://github.com/openclaw/openclaw/issues/85668) bug: appendMissingToolResults synthesizes isError:true for tool results never written to storage
- [#89781](https://github.com/openclaw/openclaw/issues/89781) [Bug]: WebChat keeps a visible 'Tool output' block after the assistant reply is complete
- [#135434](https://github.com/openclaw/openclaw/issues/135434) Cron: disable-then-redeclare mints duplicate system-owned declarationKeys with no native repair path; heartbeat turns create task records docs say cannot exist
- [#166455](https://github.com/openclaw/openclaw/issues/166455) Update failure: doctor-failed (2026.9.5)
- [#138871](https://github.com/openclaw/openclaw/issues/138871) Auto-compaction gate goes blind when usage is stale and persisted totals fail the freshness check — status display and gate disagree by design
- [#137025](https://github.com/openclaw/openclaw/issues/137025) [Bug]: Crabbox worker cleanup never confirms a lease that no longer exists, wedging failed placements permanently
- [#134644](https://github.com/openclaw/openclaw/issues/134644) [Bug]: Slack mid-turn steering merges second answer into first assistant message
- [#166382](https://github.com/openclaw/openclaw/issues/166382) [Bug]: plugin source capture fails with EBADF on Linux reflink filesystems (fs-safe clone:auto returns write-only fd)
- [#135230](https://github.com/openclaw/openclaw/issues/135230) [Bug]: writeFileIfMissing throws EPERM (not EEXIST) on Windows NTFS
- [#135133](https://github.com/openclaw/openclaw/issues/135133) [Bug]: Docker Compose Doctor reports stale Gateway PID 8 and skips SQLite migrations
- [#166598](https://github.com/openclaw/openclaw/issues/166598) Update failure: package-swap (2026.9.7)
- [#166896](https://github.com/openclaw/openclaw/issues/166896) Real-Gateway UI fixtures still require the obsolete manual login handoff
- [#165463](https://github.com/openclaw/openclaw/issues/165463) [Bug]: Overload same-model retry omits latest user request and answers a previous task in a dashboard session
- [#165958](https://github.com/openclaw/openclaw/issues/165958) [Bug]: Deleting a session can leave a false child-list pagination error
- [#166816](https://github.com/openclaw/openclaw/issues/166816) [Bug]: config get advises a config set command the write guard always refuses for auto-managed meta paths
- [#166725](https://github.com/openclaw/openclaw/issues/166725) [Bug]: config get reports the documented root $schema key as an unknown path
- [#166605](https://github.com/openclaw/openclaw/issues/166605) config set rejects ACP harness model in agents.entries.<id>.model.primary that the docs say is supported
- [#136449](https://github.com/openclaw/openclaw/issues/136449) [Bug]: Incompatible Agent Sandbox backend is advertised as a cloud-worker profile
- [#141520](https://github.com/openclaw/openclaw/issues/141520) [Bug]: Control UI Pair setup code is pasteable into Gateway Token and fails as token_mismatch
- [#160602](https://github.com/openclaw/openclaw/issues/160602) [Bug]: Telegram topic node-exec completion sends error final to owner DM after thread-not-found failure
- [#166638](https://github.com/openclaw/openclaw/issues/166638) Update failure: runtime-verification-failed (2026.9.3)
- [#166453](https://github.com/openclaw/openclaw/issues/166453) [Feature]: Local multimodal memory indexing via OpenAI-compatible embedding endpoints (e.g. EmbeddingGemma 2 on llama.cpp)
- [#166834](https://github.com/openclaw/openclaw/issues/166834) [Bug]: Doctor retains unbound legacy ACP rows that prevent Gateway startup after update
- [#157782](https://github.com/openclaw/openclaw/issues/157782) [Bug]: pnpm build peaks at ~9.5GB in the tsdown-unified step since per-plugin unified bundles; OOMs 10GB hosts
- [#166856](https://github.com/openclaw/openclaw/issues/166856) Update failure: gateway-recovery-verification (2026.9.8)
- [#166805](https://github.com/openclaw/openclaw/issues/166805) cron command announcements log [outbound/session] "Failed to preserve outbound session creation policy … Session key does not contain an agent id" on every delivery
- [#166826](https://github.com/openclaw/openclaw/issues/166826) [Bug]: sessions.create always fails with "Session creation publication owner is no longer current"
- [#138355](https://github.com/openclaw/openclaw/issues/138355) [Bug]: Browser Talk loses confirmation IDs and creates duplicate approval proposals
- [#166815](https://github.com/openclaw/openclaw/issues/166815) [Bug]: Native Codex legacy collaboration carrier drops persona and memory guidance (SOUL/USER/IDENTITY, Compiled Wiki snapshot) for gpt-6.1-sol — fall back to thread developer instructions
- [#166492](https://github.com/openclaw/openclaw/issues/166492) [Bug]: Long formatted replies stall channel delivery for seconds while they are split into messages
- [#166656](https://github.com/openclaw/openclaw/issues/166656) [Bug]: Windows extended-length vs plain path aliasing still splits write admission for state/openclaw.sqlite in 2026.9.8 (follow-up to #147409)
- [#166542](https://github.com/openclaw/openclaw/issues/166542) Control UI turns lose operator.admin after automatic restart recovery
- [#135880](https://github.com/openclaw/openclaw/issues/135880) gateway: queued chat.send turns live only in memory and every restart destroys them with no transcript record
- [#166717](https://github.com/openclaw/openclaw/issues/166717) Attachment button hard-freezes the app — file picker never appears (WinUI, both Tray and main app)
- [#166643](https://github.com/openclaw/openclaw/issues/166643) [Bug]: Session previews leak Markdown link markup and truncate later prose
- [#166713](https://github.com/openclaw/openclaw/issues/166713) browser-automation skill: Tab Hygiene has no task-completion teardown rule, so renderers accumulate across tasks
- [#136480](https://github.com/openclaw/openclaw/issues/136480) [Feature]: Control UI: built-in agent presence layer (ambient animated avatar + activity-state effects)
- [#166709](https://github.com/openclaw/openclaw/issues/166709) [Bug]: Subagent requester-settle turn runs unbounded on the user-facing session lane and blocks inbound human messages for many minutes
- [#166661](https://github.com/openclaw/openclaw/issues/166661) [Bug]: Session creation always fails on Windows with "Session creation publication owner is no longer current" (UNAVAILABLE); existing sessions work fine
- [#133730](https://github.com/openclaw/openclaw/issues/133730) [Feature]: Support for Gemini interaction API endpoints
- [#166623](https://github.com/openclaw/openclaw/issues/166623) Feature request: expose real per-call token usage (model_call_ended carries none, model.usage is turn-level only)
- [#166622](https://github.com/openclaw/openclaw/issues/166622) [Bug]: # Windows: sessions.create always fails with "Session creation publication owner is no longer current"
- [#166595](https://github.com/openclaw/openclaw/issues/166595) claude-cli: bare NO_REPLY on a user-triggered (inter-session) turn is treated as an empty response and fails over
- [#166675](https://github.com/openclaw/openclaw/issues/166675) Update failure: global-install-failed (2026.9.4)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 251,965 · **Open issues:** 47,748 · **Last push:** <1h ago

On October 8, 2026, there were no new releases for Hermes Agent, but two important fixes were merged: PR #134852 addressed an issue where the scrolled-up composer would reappear on hover or focus, while PR #134847 ensured that switching models would no longer mistakenly show a failed-reply card. Among the new issues, #134822 reported two false-positive config warnings on the stock config.yaml for the desktop/TUI gateway, which garnered significant attention, while #134861 raised concerns about a long-lived gateway's OAuth MCP session dying permanently. Additionally, #134462 highlighted a critical bug where dashboard login failed after an update due to an unreachable provider, indicating ongoing challenges in system stability.

#### ✅ Merged PRs
- [#134852](https://github.com/NousResearch/hermes-agent/pull/134852) fix(desktop): scrolled-up composer comes back on hover, focus, or a 5s stall
- [#134847](https://github.com/NousResearch/hermes-agent/pull/134847) fix(desktop): switching models no longer shows a failed-reply card that then succeeds

#### 🐛 New Issues
- [#134822](https://github.com/NousResearch/hermes-agent/issues/134822) Two false-positive config warnings on a stock config.yaml (desktop/TUI gateway) `type/bug` `comp/tui` `area/config` `P3` 💬3
- [#134861](https://github.com/NousResearch/hermes-agent/issues/134861) Long-lived gateway's OAuth MCP session dies permanently on keepalive-reconnect (`RuntimeError: The current task is not holding this lock`) `type/bug` `duplicate` `comp/tools` `tool/mcp` 💬2
- [#134462](https://github.com/NousResearch/hermes-agent/issues/134462) [Bug] Dashboard login fails after update: Provider unreachable: Portal token endpoint unreachable: Error -3 while decompressing data: incorrect header check `type/bug` `duplicate` `comp/plugins` `area/auth` 💬2
- [#134867](https://github.com/NousResearch/hermes-agent/issues/134867) docs(whatsapp): add Agent Platform routing and terminal/Desktop setup `type/docs` `comp/gateway` `platform/whatsapp` `P3` 💬1
- [#134864](https://github.com/NousResearch/hermes-agent/issues/134864) MoA presets with whitespace in the name are hidden from every model picker (drop_unofferable_model_ids strips them, but _validate_moa accepts them) `type/bug` `comp/agent` `comp/cli` `P3` 💬1
- [#134858](https://github.com/NousResearch/hermes-agent/issues/134858) Cron: no-agent daily job silently skipped at scheduler level (3rd occurrence) — no executions.db row, no fire lock, sibling jobs fire normally `type/bug` `comp/cron` `P1` `sweeper:risk-automation` 💬1
- [#134837](https://github.com/NousResearch/hermes-agent/issues/134837) Log timestamps are offset from the OS zone by the gap to an assumed UTC-6 zone (1h off on a Pacific box) `type/bug` `comp/gateway` `P2` 💬1
- [#134836](https://github.com/NousResearch/hermes-agent/issues/134836) [Feature]: the update prompt is effectively always-on (one upstream commit = "update available") - make it release/cadence-based, add a real "don't ask again", and stop inviting users into a path known to fail `type/feature` `area/config` `P3` `comp/desktop` 💬1
- [#134831](https://github.com/NousResearch/hermes-agent/issues/134831) [Bug]: CLI oneshot never exits with memory toolset — hangs in Honcho shutdown thread join (answer delivered, exit wedged) `type/bug` `comp/cli` `comp/plugins` `tool/memory` 💬1
- [#134865](https://github.com/NousResearch/hermes-agent/issues/134865) [Bug]: Desktop project-tree projects.db SQLITE_NOTADB incorrectly quarantines healthy state.db and blocks chat `type/bug` `comp/agent` `comp/cli` `comp/tui`
- [#134866](https://github.com/NousResearch/hermes-agent/issues/134866) [Bug]: Recurring offset-5 TLS-shaped SQLite header corruption across four stores; writer still unattributed `type/bug` `comp/agent` `comp/gateway` `P2`
- [#134849](https://github.com/NousResearch/hermes-agent/issues/134849) [Bug]: Plugin approval can describe stale arguments while executing modified arguments `type/security` `comp/agent` `comp/tools` `comp/plugins`
- [#134850](https://github.com/NousResearch/hermes-agent/issues/134850) [Bug]: Malformed plugin approval decisions must fail closed `type/bug` `comp/agent` `P3` `codex`
- [#134855](https://github.com/NousResearch/hermes-agent/issues/134855) [Bug]: Windows MEDIA download fails for delivered /C:/ paths `type/bug` `P3` `sweeper:risk-platform-windows` `comp/desktop`
- [#134856](https://github.com/NousResearch/hermes-agent/issues/134856) [Bug]: Bot profile model picker fails to settle when provider loads before its catalog `type/bug` `P3` `comp/desktop` `area/profiles`
- [#134843](https://github.com/NousResearch/hermes-agent/issues/134843) [Bug]: release-swap self-update publishes a git checkout without origin, blocking Linux/VPS updates `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility`
- [#134844](https://github.com/NousResearch/hermes-agent/issues/134844) [Bug] opencode-go: Claude Haiku 5.5 routed to /v1/chat/completions (HTTP 400 ModelProtocolUnsupported) `type/bug` `comp/cli` `P3`
- [#134833](https://github.com/NousResearch/hermes-agent/issues/134833) RFC: experimental Tern/TSP native surface for Hermes TUI `type/feature` `innovation` `comp/tui` `P3`
- [#134827](https://github.com/NousResearch/hermes-agent/issues/134827) In-place compaction tells memory providers parent_session_id=<own session id> `type/bug` `comp/agent` `comp/plugins` `tool/memory`
- [#134826](https://github.com/NousResearch/hermes-agent/issues/134826) [Feature]: ACP external-runtime conformance contract for o8 and other orchestrators `type/feature` `comp/acp` `needs-decision` `P4`

#### 🔒 Closed Issues
- [#134128](https://github.com/NousResearch/hermes-agent/issues/134128) Dashboard OAuth login fails when the token response is gzip-encoded (incorrect header check)
- [#118901](https://github.com/NousResearch/hermes-agent/issues/118901) [Bug]: Composer timer continues ticking after task completion
- [#77312](https://github.com/NousResearch/hermes-agent/issues/77312) [Bug]: Desktop Window Translucency slider is unusable past its first step
- [#132742](https://github.com/NousResearch/hermes-agent/issues/132742) [Bug]: ssh backend remote cwd is validated as the local TERMINAL_CWD — "TERMINAL_CWD does not exist: /c/Users/Fors3t1" every turn
- [#126272](https://github.com/NousResearch/hermes-agent/issues/126272) [Bug]: Bot Chat can become permanently unopenable — roster click waits the full 60s hydration budget, then fails closed
- [#101216](https://github.com/NousResearch/hermes-agent/issues/101216) Desktop: Bot Mode "New chat with this bot" (roster right-click) flips Dark mode to Light — per-profile theme follows a gateway activation the user didn't ask for
- [#134861](https://github.com/NousResearch/hermes-agent/issues/134861) Long-lived gateway's OAuth MCP session dies permanently on keepalive-reconnect (`RuntimeError: The current task is not holding this lock`)
- [#134462](https://github.com/NousResearch/hermes-agent/issues/134462) [Bug] Dashboard login fails after update: Provider unreachable: Portal token endpoint unreachable: Error -3 while decompressing data: incorrect header check
- [#131760](https://github.com/NousResearch/hermes-agent/issues/131760) [Bug]: e050902e7c NVIDIA-XWayland ozone default SIGSEGVs gnome-shell on GB10 (aarch64, 580 open module) — 100% repro
- [#133130](https://github.com/NousResearch/hermes-agent/issues/133130) [Feature]: the "N files changed" card should show the agent's own diff for files outside a git repo
- [#131667](https://github.com/NousResearch/hermes-agent/issues/131667) DeepSeek per-session reasoning-effort pin leaks into the persisted desktop composer draft
- [#79958](https://github.com/NousResearch/hermes-agent/issues/79958) Shard apps/desktop/src/i18n/zh-hant.ts (2K-law violation — Pantheon of False Gods, fracture)
- [#134222](https://github.com/NousResearch/hermes-agent/issues/134222) Dashboard auth fails: httpx decompression error when Portal returns gzip-compressed response

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,354 · **Open issues:** 8,551 · **Last push:** <1h ago

On October 8, 2026, vLLM did not release any new versions but saw a productive day with several bug fixes and enhancements merged into the codebase. Notable fixes included the resolution of input parameter modifications in the LLM.score() function, which ensures caller parameters remain intact, and improvements in handling dynamic registration for BackendEnum. Additionally, the bugfix for the tool parser addresses issues where streaming dropped tool calls, enhancing the reliability of tool processing. Among new issues, a particularly significant one reported a TypeError during engine startup, indicating a need for further attention on unquantized MoE models, which could affect user experiences if not resolved promptly.

#### ✅ Merged PRs
- [#60507](https://github.com/vllm-project/vllm/pull/60507) [Bugfix][Frontend] Accept successful 2xx responses for batch output uploads
- [#51018](https://github.com/vllm-project/vllm/pull/51018) [BugFix] Pick the DP world-group port at bind time via the coordination store
- [#41091](https://github.com/vllm-project/vllm/pull/41091) [Platform] Allow BackendEnum dynamic register
- [#60389](https://github.com/vllm-project/vllm/pull/60389) [Bugfix][ROCm] Keep MLA derived weights in place on weight reload
- [#59959](https://github.com/vllm-project/vllm/pull/59959) [Bugfix][Frontend] Do not modify caller params in LLM.score()
- [#60398](https://github.com/vllm-project/vllm/pull/60398) [Core] Bound execute_dummy_batch RPC waits by the execute-model timeout
- [#60354](https://github.com/vllm-project/vllm/pull/60354) [Bugfix][ToolParser] Stream every tool call when one delta completes several
- [#60383](https://github.com/vllm-project/vllm/pull/60383) [TEST][XPU][CI] disable tests of unsupported quantization
- [#59180](https://github.com/vllm-project/vllm/pull/59180) [Bugfix][Frontend] Apply output_config and thinking in Anthropic count_tokens
- [#56775](https://github.com/vllm-project/vllm/pull/56775) [CI] Add headroom and selection coverage for H200 fast lanes
- [#58685](https://github.com/vllm-project/vllm/pull/58685) [Perf] JIT monitor: hook TileLang JITImpl.compile instead of __call__
- [#59655](https://github.com/vllm-project/vllm/pull/59655) [Bugfix] [Spec Decode] DeepSeek V4/V4.1 NVFP4: keep ignored MTP/DSpark experts on MXFP4
- [#59723](https://github.com/vllm-project/vllm/pull/59723) [Bugfix][Frontend] Fix Responses namespace aliases in named tool calling
- [#59749](https://github.com/vllm-project/vllm/pull/59749) [Bugfix] Validate tool-parser/tokenizer compatibility at startup
- [#56740](https://github.com/vllm-project/vllm/pull/56740) [quantization] Add per-token NVFP4 quantization MoE support for ReLU2
- [#58911](https://github.com/vllm-project/vllm/pull/58911) [Bugfix][Parser] Emit buffered post-reasoning text when no tool parser is configured
- [#60090](https://github.com/vllm-project/vllm/pull/60090) [CI/Build][NVIDIA] Build NIXL with NIXL EP from source in Rubin image
- [#59197](https://github.com/vllm-project/vllm/pull/59197) [Bugfix][DSv4.1] Skip SWA bounded replay for KV loads that carry the window
- [#60111](https://github.com/vllm-project/vllm/pull/60111) [Docs] Add disagg PD flow-example guidance to /pr-checklist skill
- [#60289](https://github.com/vllm-project/vllm/pull/60289) [Model] Streamline EmbeddingGemma 2 config resolution and harmonize Triton prefill attention
- [#59487](https://github.com/vllm-project/vllm/pull/59487) [CI] Stamp provenance labels on the torch-nightly image so Initialized Snapshot E2E can run
- [#60462](https://github.com/vllm-project/vllm/pull/60462) [CI] Fix failing test_deepseek_v4_rocm_dspark* tests
- [#46963](https://github.com/vllm-project/vllm/pull/46963) [Attention] Support NVFP4 KV cache on SM8x and SM12x with FlashInfer
- [#60281](https://github.com/vllm-project/vllm/pull/60281) [Bugfix] Limit GlmMoeDsaForCausalLM fp8 KV cache default to SM100
- [#58088](https://github.com/vllm-project/vllm/pull/58088) [Bugfix][KV Offload] Restore KVCR construction through the secondary-tier factory
- [#60152](https://github.com/vllm-project/vllm/pull/60152) [UX] Skip checkpoint shards an MTP head does not load
- [#59899](https://github.com/vllm-project/vllm/pull/59899) [KV Offload] Update KVCR adapter to pool-and-index API
- [#59074](https://github.com/vllm-project/vllm/pull/59074) [Bugfix] Respect Inductor deterministic mode in combo-kernel defaults
- [#60335](https://github.com/vllm-project/vllm/pull/60335) [Spec Decode] Rename AR speculators to StandaloneAR / TargetDependentAR
- [#60337](https://github.com/vllm-project/vllm/pull/60337) [Bugfix][Quantization] Accept folded NVFP4 scales for Humming A16
- [#58165](https://github.com/vllm-project/vllm/pull/58165) [Bugfix]Fix FlashInfer warmup crash: autotune(tuning_buckets=...) must round M up, not down (Invalid MXFP8 split-K tactic with spec-decode)
- [#57560](https://github.com/vllm-project/vllm/pull/57560) [ROCm][Perf] Add AITER FlyDSL GDN prefill backend
- [#55601](https://github.com/vllm-project/vllm/pull/55601) [Bugfix] Seed hybrid mamba state index with mamba_block_size on prefix-cache hits
- [#60381](https://github.com/vllm-project/vllm/pull/60381) [CI] Bump Transformers version to 5.19.0
- [#59285](https://github.com/vllm-project/vllm/pull/59285) [ROCm][Triton] Migrating MiniMax-M3 kernels from make_block_ptr to tensor descriptors
- [#55053](https://github.com/vllm-project/vllm/pull/55053) [Bugfix][KV Connector][ROCm] Fix MoRI-IO KV block-offset for speculative decoding (MTP)
- [#60416](https://github.com/vllm-project/vllm/pull/60416) [Docs] Add review areas for andylolu2
- [#53065](https://github.com/vllm-project/vllm/pull/53065) [XPU][MoE] Tune Triton fused MoE for Intel XPU
- [#57992](https://github.com/vllm-project/vllm/pull/57992) [Bugfix][MLA] Scope DSpark non-causal capability to builder layers
- [#60392](https://github.com/vllm-project/vllm/pull/60392) [CI][ROCm] Re-enable the DSv4.1 decoder replay graph test on ROCm
- [#59837](https://github.com/vllm-project/vllm/pull/59837) [Frontend][Rust] Add gRPC forbidden token sequences and cache usage
- [#59685](https://github.com/vllm-project/vllm/pull/59685) [ROCm][DSv4] AITER MegaMoEV2 Integration For DeepSeek V4
- [#58124](https://github.com/vllm-project/vllm/pull/58124) [Bugfix][Model Loader] Support reload_weights with runai_streamer load format

#### 🐛 New Issues
- [#60357](https://github.com/vllm-project/vllm/issues/60357) [Bug]: `rank` for `logprob_token_ids` entries is their position in the request list, not the vocab rank 💬6
- [#60432](https://github.com/vllm-project/vllm/issues/60432) [Bug]: moe_backend="batched_triton" crashes engine startup on unquantized MoE model — TypeError: BatchedTritonExperts.__init__() missing 2 required positional arguments `bug` 💬4
- [#60351](https://github.com/vllm-project/vllm/issues/60351) [Bug]: tool_choice="required"` streaming drops tool calls when one delta completes more than one call `bug` `tool-calling` 💬2
- [#60391](https://github.com/vllm-project/vllm/issues/60391) [Bug]: AOT-compiled artifact loading is decided per rank, so a partial load leaves ranks on different startup paths 💬2
- [#60346](https://github.com/vllm-project/vllm/issues/60346) [Bug]: `append_replayssm_ring` asserts for supported non-divisible Mamba group counts `bug` 💬2
- [#60421](https://github.com/vllm-project/vllm/issues/60421) [Bug]: Olmo3 tool parser corrupts string arguments with newlines and drops calls split across lines `tool-calling` 💬2
- [#60458](https://github.com/vllm-project/vllm/issues/60458) [Feature]: `feature request` 💬1
- [#60494](https://github.com/vllm-project/vllm/issues/60494) [Bug]: GLM-5.2-FP8 + prefix caching + FP8 KV cache returns empty content (gibberish reasoning) on repeated identical prompts `bug` `rocm` `tool-calling` `quantization` 💬1
- [#60476](https://github.com/vllm-project/vllm/issues/60476) [Bug]: `--long-prefill-token-threshold` no longer protects short requests behind a long prefill since v0.31.0 (lone-request exemption, #57951) 💬1
- [#60450](https://github.com/vllm-project/vllm/issues/60450) [Bug]: Sparse MLA indexer's expanded_block_table_buffer is allocated after KV sizing (1 GiB at 1M context) `bug` 💬1
- [#60474](https://github.com/vllm-project/vllm/issues/60474) [Bug][ROCm][MoRIIO] In READ mode, a TP1 decode paired with a TP2 prefill shuts down on its first request (NotImplementedError) instead of refusing the unsupported pairing `rocm` 💬1
- [#60473](https://github.com/vllm-project/vllm/issues/60473) [Bug][ROCm][MoRIIO] A decode whose notify port is already in use starts and reports healthy without its notify listener, so its WRITE requests hang `rocm` 💬1
- [#60451](https://github.com/vllm-project/vllm/issues/60451) [Bug]: Spec decode with structured outputs biases the sampling distribution (grammar-invalid drafts resampled from p instead of residual) `structured-output`
- [#60425](https://github.com/vllm-project/vllm/issues/60425) [Bug][ROCm][MoRIIO] In READ mode, a stopped prefill's KV cache stays allocated until the decode that read it exits, so the prefill cannot restart on the same GPU (in WRITE mode, the same happens to a stopped decode) `rocm` 💬1
- [#60396](https://github.com/vllm-project/vllm/issues/60396) Unvalidated passthrough in `_construct_message_from_response_item` lets 14 of 32 valid input item types reach the renderer — `KeyError: 'role'` for dicts, `TypeError: not subscriptable` for pydantic models 💬1
- [#60435](https://github.com/vllm-project/vllm/issues/60435) [Bug]: --convert classify with --runner generate crashes engine startup with a bare AssertionError (pooler_config is not None) `bug` 💬1
- [#60410](https://github.com/vllm-project/vllm/issues/60410) [Bug]: vllm_compile_cache.py is rewritten in place, so concurrent cold starts sharing a cache can read or write a partial file 💬1
- [#60408](https://github.com/vllm-project/vllm/issues/60408) [Bug][ROCm] gfx950: ROCM_AITER_UNIFIED_ATTN decode regressed in v0.31.0 (-19%, and MTP decode decays with context) - AITER 0.1.23's Gluon backend `rocm` 💬1
- [#60341](https://github.com/vllm-project/vllm/issues/60341) [Bug]: InternLM2 tool parser (streaming) drops all content after `<|action_start|>` when no `<|plugin|>` follows `bug` `tool-calling` 💬1
- [#60347](https://github.com/vllm-project/vllm/issues/60347) [Bug]: `TensorizerConfig(lora_dir=...)` leaves `tensorizer_dir=None` and breaks serialization round trips `bug` 💬1
- [#60366](https://github.com/vllm-project/vllm/issues/60366) [RFC]: Bounded prefix reuse for target-token prefill scoring 💬1
- [#60350](https://github.com/vllm-project/vllm/issues/60350) [Bug]: FP8 KV cache startup can OOM because CUDA graph memory is omitted from the cache budget `bug` 💬1
- [#60342](https://github.com/vllm-project/vllm/issues/60342) [Bug]: DeepSeek-V3 tool parser returns no tool calls when the JSON arguments span several lines `bug` `tool-calling` `deepseek` 💬1
- [#60349](https://github.com/vllm-project/vllm/issues/60349) [Bug]: `LLM.generate()` never returns when `max_num_scheduled_tokens=0` `bug` 💬1
- [#60457](https://github.com/vllm-project/vllm/issues/60457) [Feature]: `feature request`
- [#60521](https://github.com/vllm-project/vllm/issues/60521) [Feature]: Restore multimodal requests from processed state and existing KV `multi-modality`
- [#60518](https://github.com/vllm-project/vllm/issues/60518) [Bug]: WebM/MKV written to a pipe and raw H.264 load as a single frame with a negative `total_num_frames` (OpenCV loader)
- [#60508](https://github.com/vllm-project/vllm/issues/60508) [Bug]: API server leaks OTel meter objects per request when `--otlp-traces-endpoint` is set (OTel SDK 1.40.0 pinned in official image) → GC pauses → liveness restarts
- [#60499](https://github.com/vllm-project/vllm/issues/60499) [Performance]: RMSNorm and int8 quantization are never fused for W8A8 int8 models, and rms_norm_dynamic_per_token_quant is up to 2x slower than the unfused pair at prefill sizes (sm_89) `quantization`
- [#60495](https://github.com/vllm-project/vllm/issues/60495) [Bug]: A per-request client error raised by an inter-stage bridge kills the orchestrator (every in-flight request fails) `bug`
- [#60496](https://github.com/vllm-project/vllm/issues/60496) [Bug]: `stage_init_timeout` is ignored again (regressed in #3855); an init timeout leaves stage engine cores loading on the GPU and keeps launching stages after shutdown `bug`
- [#60489](https://github.com/vllm-project/vllm/issues/60489) [Bug]: Qwen4Exp (Qwen3.8-Flash-Next) QSA indexer prefill workspace is not seen by the memory profiler → OOM on first long prefill
- [#60471](https://github.com/vllm-project/vllm/issues/60471) [Bug]: FlashInfer CUTLASS MoE OOM during serving after successful memory profiling (NVFP4, DP+EP) `nvidia` `quantization`
- [#60460](https://github.com/vllm-project/vllm/issues/60460) [Bug]: CUTLASS MoE kernel benchmarks fail with ImportError: cannot import name 'fused_topk' `nvidia`
- [#60467](https://github.com/vllm-project/vllm/issues/60467) [Tracking Feature]: Support vLLM with Python 3.15 `feature request`
- [#60455](https://github.com/vllm-project/vllm/issues/60455) [Bug]: EPLB async expert rearrangement crashes engine with AssertionError in fused MoE shared_experts (GLM-5.3-Flash, v0.31.0, TP8/EP8 + MTP) `bug` `quantization` `glm`
- [#60420](https://github.com/vllm-project/vllm/issues/60420) [Bug]: HiSparse prefill can OOM a running server (unreserved host-history staging) `bug`
- [#60422](https://github.com/vllm-project/vllm/issues/60422) [RFC]: `RFC`
- [#60409](https://github.com/vllm-project/vllm/issues/60409) [Feature]: Load the score template declared by the checkpoint (follow-up to #31563) `feature request`
- [#60414](https://github.com/vllm-project/vllm/issues/60414) [Feature]: Report SLO attainment and output-token goodput in vllm bench serve
- [#60406](https://github.com/vllm-project/vllm/issues/60406) [Bug]: vllm/vllm-openai:v0.31.0-cu129 fails at startup: bundled torchcodec 0.17.0 is built against CUDA 13 (libcudart.so.13)
- [#60379](https://github.com/vllm-project/vllm/issues/60379) [Bug][XPU][MRV2]: engine dies at startup on the first PIECEWISE graph capture with TP=2 + MTP on a GDN/Mamba-hybrid model (oneCCL collective inside capture; regression from #56531; fixed by unmerged #58415) `intel-gpu`
- [#60370](https://github.com/vllm-project/vllm/issues/60370) [Bug]: CPU arm64 image fails to start on Apple M4: "no support for 'sme' without 'sve2'" (PyTorch Inductor + GCC 15)
- [#60348](https://github.com/vllm-project/vllm/issues/60348) [Bug]: InternLM2 streaming tool parser drops characters from function arguments `bug` `tool-calling`
- [#60344](https://github.com/vllm-project/vllm/issues/60344) [Bug]: `validate_regex_is_buildable` (outlines backend) misses `\b` and backreferences inside groups `bug` `structured-output`
- [#60343](https://github.com/vllm-project/vllm/issues/60343) [Bug]: xLAM tool parser (streaming) drops arguments nested deeper than two levels and truncates at a `}` inside a string `bug` `tool-calling`
- [#60340](https://github.com/vllm-project/vllm/issues/60340) [Bug]: Olmo3 reasoning parser drops the final streamed delta when it is a substring of `<think>`/`</think>` (e.g. "think") `bug` `tool-calling`

#### 🔒 Closed Issues
- [#55427](https://github.com/vllm-project/vllm/issues/55427) [Bug]: /v1/embeddings deadlocks when a truncated input follows a short one in the same request
- [#24704](https://github.com/vllm-project/vllm/issues/24704) [Bug]: Qwen3-Reranker: Process Hang with `/score` Endpoint for Specific Data
- [#60432](https://github.com/vllm-project/vllm/issues/60432) [Bug]: moe_backend="batched_triton" crashes engine startup on unquantized MoE model — TypeError: BatchedTritonExperts.__init__() missing 2 required positional arguments
- [#44376](https://github.com/vllm-project/vllm/issues/44376) [Bug]: [v0.22]MooncakeStoreConnector causes incorrect KV cache memory pre-check calculation for DeepSeek models(PP2 TP8) (fallback to MHA dimension)
- [#59087](https://github.com/vllm-project/vllm/issues/59087) [Bug]: `--tool-call-parser mistral` on a non-Mistral tokenizer can start but then answers EVERY chat request with 500
- [#45769](https://github.com/vllm-project/vllm/issues/45769) [Bug]: Qwen3.6 27B pd disagg failed
- [#44798](https://github.com/vllm-project/vllm/issues/44798) [Bug]: SamplingParams uses assert for input validation — silently skipped under python -O
- [#56077](https://github.com/vllm-project/vllm/issues/56077) [Bug]: ngram speculative decoding corrupts qwen3_coder tool-call parser output (empty/mangled arguments) for Qwen3.x models
- [#60351](https://github.com/vllm-project/vllm/issues/60351) [Bug]: tool_choice="required"` streaming drops tool calls when one delta completes more than one call
- [#47971](https://github.com/vllm-project/vllm/issues/47971) [Bug]: vLLM embedding hang with Qwen3-Embedding when chunked prefill is enabled
- [#60458](https://github.com/vllm-project/vllm/issues/60458) [Feature]:
- [#60067](https://github.com/vllm-project/vllm/issues/60067) [Bug]: Pooling request with prompt length == max_model_len is accepted but never fully scheduled (engine spins, request never finishes)
- [#60457](https://github.com/vllm-project/vllm/issues/60457) [Feature]:
- [#60495](https://github.com/vllm-project/vllm/issues/60495) [Bug]: A per-request client error raised by an inter-stage bridge kills the orchestrator (every in-flight request fails)
- [#60496](https://github.com/vllm-project/vllm/issues/60496) [Bug]: `stage_init_timeout` is ignored again (regressed in #3855); an init timeout leaves stage engine cores loading on the GPU and keeps launching stages after shutdown
- [#58087](https://github.com/vllm-project/vllm/issues/58087) [Bug]: KVCR secondary-tier configuration fails to start after the backpressure factory change
- [#55600](https://github.com/vllm-project/vllm/issues/55600) [Bug] Hybrid mamba prefix-cache hit reads out of bounds: add_request seeds the state index with cache_config.block_size after it was lowered below mamba_block_size (Xid 31 / illegal memory access)
- [#60304](https://github.com/vllm-project/vllm/issues/60304) [Bug]: `/cohere/v2/chat` returns HTTP 500 for invalid request parameters

### SGLang (`sgl-project/sglang`)

**Stars:** 36,847 · **Open issues:** 5,548 · **Last push:** <1h ago

On October 8, 2026, there were no new releases for SGLang, but several significant pull requests were merged, enhancing both features and refactoring existing code. Notably, the documentation for the Cookbook was updated to include interactive launches for the SemiAnalysis InferenceX AgentX for GLM-5.2 and DeepSeek-V4 models. In the diffusion framework, deduplication efforts led to streamlined initialization processes and shared checkpoint conversion I/O, simplifying future development. Additionally, a notable new issue was reported regarding the MiniMax-H3 model, which displayed a blocky moving face during pre-encode RGB at specific settings, prompting further investigation. Overall, it was a day focused on maintaining and improving the codebase without major releases or breaking changes.

#### ✅ Merged PRs
- [#40978](https://github.com/sgl-project/sglang/pull/40978) [Fix] MiMo-V2: accept checkpoints with the split attention layout
- [#35594](https://github.com/sgl-project/sglang/pull/35594) [Platform] Thread vendor KV pool classes through the in-tree builders; add PlatformCapabilities
- [#42726](https://github.com/sgl-project/sglang/pull/42726) [Docs] Cookbook: interactive SemiAnalysis InferenceX AgentX launches for GLM-5.2, DeepSeek-V4 and DeepSeek-V4.1
- [#42848](https://github.com/sgl-project/sglang/pull/42848) [diffusion] refactor: share sigma schedules and causal cross-attention
- [#42983](https://github.com/sgl-project/sglang/pull/42983) [diffusion] Deduplicate MOVA initialization
- [#42860](https://github.com/sgl-project/sglang/pull/42860) [diffusion] Deduplicate Qwen-VL inputs and component accuracy suites
- [#42856](https://github.com/sgl-project/sglang/pull/42856) [diffusion] refactor: share ModelOpt checkpoint conversion I/O
- [#42964](https://github.com/sgl-project/sglang/pull/42964) [diffusion] Reuse the single-process parallel test fixture
- [#42908](https://github.com/sgl-project/sglang/pull/42908) [diffusion] Deduplicate KL VAE attention processor management
- [#42794](https://github.com/sgl-project/sglang/pull/42794) [XPU][diffusion] Re-baseline Wan2.1-T2V-1.3B TextEncodingStage on B60
- [#42866](https://github.com/sgl-project/sglang/pull/42866) [diffusion] Deduplicate VAE resampling and LTX tiling
- [#42843](https://github.com/sgl-project/sglang/pull/42843) [diffusion] refactor: deduplicate Qwen Image RoPE and SenseNova backbones
- [#42988](https://github.com/sgl-project/sglang/pull/42988) [diffusion] Share stacked encoder weight loading
- [#43024](https://github.com/sgl-project/sglang/pull/43024) [CI] Split the shared Cargo target dir per glibc
- [#42990](https://github.com/sgl-project/sglang/pull/42990) [diffusion] Deduplicate realtime transport and LingBot tests
- [#42645](https://github.com/sgl-project/sglang/pull/42645) [Feature] Serve pplx-decider-v1.1 and update the pplx-decider cookbooks
- [#41819](https://github.com/sgl-project/sglang/pull/41819) [diffusion] Encode the MP4 while the VAE decodes (MiniMax-H3, Wan)
- [#42588](https://github.com/sgl-project/sglang/pull/42588) [Refactor] Retain process groups in parallel linear layers
- [#42590](https://github.com/sgl-project/sglang/pull/42590) [Refactor] Use destination layouts for model checkpoint mappings
- [#42589](https://github.com/sgl-project/sglang/pull/42589) [Refactor] Load auxiliary and expert checkpoints using owner partitions
- [#42587](https://github.com/sgl-project/sglang/pull/42587) [Refactor] Select parallel groups for remaining model projections
- [#42586](https://github.com/sgl-project/sglang/pull/42586) [Refactor] Let vision encoders select their parallel group
- [#42585](https://github.com/sgl-project/sglang/pull/42585) [Fix] Quantize reloaded FP8 weights after native sharding
- [#42484](https://github.com/sgl-project/sglang/pull/42484) [Refactor] Let MLA projections select their parallel group
- [#42468](https://github.com/sgl-project/sglang/pull/42468) [Refactor] Let model MLPs select their parallel group
- [#42426](https://github.com/sgl-project/sglang/pull/42426) [Refactor] Let linear layers select their parallel group
- [#42822](https://github.com/sgl-project/sglang/pull/42822) [Scheduler] Replace `extend_range` with `extend_end` derived from `prefix_len`
- [#42825](https://github.com/sgl-project/sglang/pull/42825) [Scheduler] Derive prefix KV indices from `last_node` at allocation; drop `Req.prefix_indices`
- [#42824](https://github.com/sgl-project/sglang/pull/42824) [Scheduler] Track prefill progress as `prefix_len`
- [#43015](https://github.com/sgl-project/sglang/pull/43015) [Docs] GLM-5.3-Flash: measured MI355X MXFP4 agentic recipe
- [#42823](https://github.com/sgl-project/sglang/pull/42823) [Scheduler] Fold match write-back into `match_kv_cache`
- [#42846](https://github.com/sgl-project/sglang/pull/42846) [dLLM] Keep the request row across FDFO blocks
- [#42408](https://github.com/sgl-project/sglang/pull/42408) [sglang-miles] Fix the bf16 triton MoE path and mhc_pre splitk for DeepSeek-V4.1
- [#42399](https://github.com/sgl-project/sglang/pull/42399) [HiCache] Add SeaweedFS L3 storage backend
- [#42958](https://github.com/sgl-project/sglang/pull/42958) [diffusion] Warm up CI cases at the request's quality level
- [#42437](https://github.com/sgl-project/sglang/pull/42437) [diffusion] Reset DiT cache state at the start of each request
- [#42931](https://github.com/sgl-project/sglang/pull/42931) [GLM-V] Shard the vision tower over the attention-TP group under DP attention
- [#41917](https://github.com/sgl-project/sglang/pull/41917) [Bugfix] [Diffusion] Fix hybrid SP+TP for I2V models
- [#42962](https://github.com/sgl-project/sglang/pull/42962) [Bugfix] Return None for empty reasoning_content outside K2 Horizon
- [#42518](https://github.com/sgl-project/sglang/pull/42518) [MemCache] test: require every ComponentData field to be classified by each split hook
- [#42706](https://github.com/sgl-project/sglang/pull/42706) [CI] Keep diffusion-only kernels and tests out of the srt stages
- [#38028](https://github.com/sgl-project/sglang/pull/38028) [diffusion] fix: do not interleave comfy-kitchen MXFP8 scales twice
- [#42859](https://github.com/sgl-project/sglang/pull/42859) [AMD][diffusion] Route bf16 fuse_scale_shift to the native fallback on gfx1250
- [#42858](https://github.com/sgl-project/sglang/pull/42858) [AMD][diffusion] VAE attention to the math SDPA backend on gfx1250
- [#42784](https://github.com/sgl-project/sglang/pull/42784) [Deps] Bump transformers to 5.19.0
- [#41585](https://github.com/sgl-project/sglang/pull/41585) The sgalng api specs
- [#42926](https://github.com/sgl-project/sglang/pull/42926) [FA4] Keep stream last in the SM100 MLA kernel so disk-cached objects load
- [#42832](https://github.com/sgl-project/sglang/pull/42832) [DSv4] Fix shared index cache accessor page size
- [#42747](https://github.com/sgl-project/sglang/pull/42747) [ROCm] Skip the tilelang act_quant in the DSA indexer on gfx1250
- [#39839](https://github.com/sgl-project/sglang/pull/39839) Cover SWA admission after declined HiCache restores
- [#15215](https://github.com/sgl-project/sglang/pull/15215) [diffusion] fix: honor the lazy transformer loader contract
- [#34903](https://github.com/sgl-project/sglang/pull/34903) [diffusion] cli: restore gated Diffusers model detection

#### 🐛 New Issues
- [#43007](https://github.com/sgl-project/sglang/issues/43007) MiniMax-H3: blocky moving face in pre-encode RGB at 32 steps / short_edge 768 (evidence pack; exact prompt withheld) 💬1
- [#43034](https://github.com/sgl-project/sglang/issues/43034) A question about SGLang and SGLang Omni
- [#43017](https://github.com/sgl-project/sglang/issues/43017) [Bug] dots and Muse Glimmer detectors rewrite string-typed argument values (null becomes None, JSON-looking strings coerced)
- [#42993](https://github.com/sgl-project/sglang/issues/42993) [Bug] [model-gateway] Removed worker gauges are overwritten by in-flight health checks and requests
- [#42981](https://github.com/sgl-project/sglang/issues/42981) [AMD] Fused FP8 prefix-valid commit kernel disagrees with eager on float8_e4m3fnuz overflow
- [#42961](https://github.com/sgl-project/sglang/issues/42961) [CI] test_reasoning.py fails on main: reasoning_content is '' instead of None
- [#42935](https://github.com/sgl-project/sglang/issues/42935) MLU CI Reliability Tracking
- [#42925](https://github.com/sgl-project/sglang/issues/42925) [CI] test_full_cuda_graph_prefill.py fails on main: FA4 MLA "Expects 18 parameters" after a disk-cached kernel load
- [#42917](https://github.com/sgl-project/sglang/issues/42917) [Bug] Qwen3.8-27B compressed-tensors W4A16 (int4, symmetric, group 128) serves with degraded quality on 0.5.19-0.5.21 (wikitext PPL 9.98 vs 6.05 on vLLM, same checkpoint)
- [#42915](https://github.com/sgl-project/sglang/issues/42915) [RFC] Use reasoning effort as an output-length hint for DP routing and retraction
- [#42907](https://github.com/sgl-project/sglang/issues/42907) [Bug] trigger_cuda_user_coredump misses the default pipe: driver creates corepipe_<host>_<pid>, helper expects documented corepipe.cuda.<host>.<pid>

#### 🔒 Closed Issues
- [#33800](https://github.com/sgl-project/sglang/issues/33800) [Bug] DSpark draft depth 5 (the checkpoint default) corrupts output on SM120 — depths 3, 4, 6, 7 are clean
- [#33711](https://github.com/sgl-project/sglang/issues/33711) [Feature] Support dense NVFP4 W4A16 (bf16 activations) GEMM on SM120
- [#32038](https://github.com/sgl-project/sglang/issues/32038) [Bug] DSpark speculative decoding causes accuracy regression on DeepSeek-V4-Flash (AIME25 97.08→93.96)
- [#34092](https://github.com/sgl-project/sglang/issues/34092) [Feature] Support config.json from transformers > 4.57 for DeepSeek V4
- [#33710](https://github.com/sgl-project/sglang/issues/33710) [Feature] Support B12X NVFP4 W4A16 (bf16 activations) MoE GEMM on SM120
- [#34113](https://github.com/sgl-project/sglang/issues/34113) [Bug] Stock `/abort_request` returns HTTP 200 even though the later abort path fails with `AttributeError`
- [#34104](https://github.com/sgl-project/sglang/issues/34104) [Bug] Follow-bootstrap-room routing selects inactive reserved DP slots
- [#41863](https://github.com/sgl-project/sglang/issues/41863) [Bug] [Diffusion] Hybrid SP+TP does not work correctly for the I2V models
- [#42961](https://github.com/sgl-project/sglang/issues/42961) [CI] test_reasoning.py fails on main: reasoning_content is '' instead of None
- [#42925](https://github.com/sgl-project/sglang/issues/42925) [CI] test_full_cuda_graph_prefill.py fails on main: FA4 MLA "Expects 18 parameters" after a disk-cached kernel load

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 130,620 · **Open issues:** 2,484 · **Last push:** <1h ago

On October 8, 2026, llama.cpp released several significant updates, including b11482, which introduces CUDA FWHT kernels for block widths above 512, enhancing performance for broader data processing. Other notable versions were b11480, adding a GPU cache for MoE experts in host memory, and b11462, which implemented cohere2 vision model support. Key merged features included improvements to the hexagon architecture for weight dequant speedup and enhanced GELU accuracy. However, the day also saw the emergence of critical evaluation bugs, notably issue #30091, which addresses a crash in the llama-server due to "bad allocation" during lengthy conversations.

#### 🚀 New Releases
- [b11482](https://github.com/ggml-org/llama.cpp/releases/tag/b11482) b11482
- [b11481](https://github.com/ggml-org/llama.cpp/releases/tag/b11481) b11481
- [b11480](https://github.com/ggml-org/llama.cpp/releases/tag/b11480) b11480
- [b11476](https://github.com/ggml-org/llama.cpp/releases/tag/b11476) b11476
- [b11475](https://github.com/ggml-org/llama.cpp/releases/tag/b11475) b11475
- [b11474](https://github.com/ggml-org/llama.cpp/releases/tag/b11474) b11474
- [b11472](https://github.com/ggml-org/llama.cpp/releases/tag/b11472) b11472
- [b11471](https://github.com/ggml-org/llama.cpp/releases/tag/b11471) b11471
- [b11469](https://github.com/ggml-org/llama.cpp/releases/tag/b11469) b11469
- [b11468](https://github.com/ggml-org/llama.cpp/releases/tag/b11468) b11468

#### ✅ Merged PRs
- [#30126](https://github.com/ggml-org/llama.cpp/pull/30126) hexagon: enable alloc_buffer_n
- [#30121](https://github.com/ggml-org/llama.cpp/pull/30121) hexagon: Q6_K weight dequant speedup
- [#30114](https://github.com/ggml-org/llama.cpp/pull/30114) model : add LiquidAI/d1-omni-600M decision model
- [#30115](https://github.com/ggml-org/llama.cpp/pull/30115) hexagon: support tiled Q4_K and Q6_K GET_ROWS
- [#30104](https://github.com/ggml-org/llama.cpp/pull/30104) hexagon: improved GELU accuracy
- [#29887](https://github.com/ggml-org/llama.cpp/pull/29887) llama : add a GPU cache for MoE experts kept in host memory
- [#30096](https://github.com/ggml-org/llama.cpp/pull/30096) chat: fix jinja parser for TranslateGemma
- [#30088](https://github.com/ggml-org/llama.cpp/pull/30088) chat : name tool and argument parser rules by index
- [#30110](https://github.com/ggml-org/llama.cpp/pull/30110) model : add LiquidAI/d1-3B decision model
- [#29100](https://github.com/ggml-org/llama.cpp/pull/29100) cuda: FWHT kernels for block widths above 512
- [#27069](https://github.com/ggml-org/llama.cpp/pull/27069) ggml-webgpu: no dawn native features on wasi
- [#30062](https://github.com/ggml-org/llama.cpp/pull/30062) mtmd: add cohere2 vision support
- [#29425](https://github.com/ggml-org/llama.cpp/pull/29425) cuda: update uncoalesced memory reads in pool2d
- [#29876](https://github.com/ggml-org/llama.cpp/pull/29876) server : accumulate generated text and tokens as parse input
- [#29928](https://github.com/ggml-org/llama.cpp/pull/29928) feat: add GLM5Next MTP, optimize
- [#30097](https://github.com/ggml-org/llama.cpp/pull/30097) llama: share the nextn tensor flags between models
- [#30065](https://github.com/ggml-org/llama.cpp/pull/30065) metal : few-row MMA mat-mul for the remaining src0 types
- [#30100](https://github.com/ggml-org/llama.cpp/pull/30100) metal : fix MUL_MAT+ADD fusion when the residual is itself a MUL_MAT
- [#29179](https://github.com/ggml-org/llama.cpp/pull/29179) qwen3tts : guard speaker_encoder_config patch for CustomVoice variant
- [#29797](https://github.com/ggml-org/llama.cpp/pull/29797) sampling : use greedy selection for eligible temperature-zero chains
- [#30090](https://github.com/ggml-org/llama.cpp/pull/30090) vocab : add plamo fim tokens
- [#29843](https://github.com/ggml-org/llama.cpp/pull/29843) convert : Fix token configuration for PLaMo-3
- [#30080](https://github.com/ggml-org/llama.cpp/pull/30080) musa: use the tile lightning indexer kernel
- [#30081](https://github.com/ggml-org/llama.cpp/pull/30081) vendor : update cpp-httplib to 0.60.0
- [#30079](https://github.com/ggml-org/llama.cpp/pull/30079) imatrix : include clocale for std::setlocale
- [#28205](https://github.com/ggml-org/llama.cpp/pull/28205) ggml-webgpu: fix flash_attn supports_op check for overlapping KV
- [#29923](https://github.com/ggml-org/llama.cpp/pull/29923) ci: retain the anchor when testing recurrent rollback
- [#29071](https://github.com/ggml-org/llama.cpp/pull/29071) [SYCL] fix the issue in mixed different model GPUs in FA
- [#29171](https://github.com/ggml-org/llama.cpp/pull/29171) sycl: accelerate GLM MLA prefill with MKL flash attention
- [#27689](https://github.com/ggml-org/llama.cpp/pull/27689) sycl: remove unused flash attention kv buffers
- [#30049](https://github.com/ggml-org/llama.cpp/pull/30049) vulkan: fix amd iGPU slow checkpoint read
- [#29500](https://github.com/ggml-org/llama.cpp/pull/29500) sycl: add IQ3_S multi-column MMVQ

#### 🐛 New Issues
- [#30091](https://github.com/ggml-org/llama.cpp/issues/30091) Eval bug: llama-server crashes due to "bad allocation" during long conversations `bug-unconfirmed` 💬3
- [#30118](https://github.com/ggml-org/llama.cpp/issues/30118) Misc. bug: Qwen3.6 tool calls leak into content when the model omits <tool_call> (fallback scoped out in #27679) 💬2
- [#30089](https://github.com/ggml-org/llama.cpp/issues/30089) Eval bug: llama.cpp server hangs (loops forever) at the same token when used from lm_eval `bug-unconfirmed` 💬1
- [#30082](https://github.com/ggml-org/llama.cpp/issues/30082) Eval bug: embeddinggemma-2 vision/audio encoders unreachable via server embeddings; /embedding silently ignores image_data 💬1
- [#30129](https://github.com/ggml-org/llama.cpp/issues/30129) Misc. bug: server: RAM prompt cache restores KV computed under a different LoRA configuration `bug-unconfirmed`
- [#30123](https://github.com/ggml-org/llama.cpp/issues/30123) Misc. bug: server: flush metrics more frequently `bug-unconfirmed`
- [#30093](https://github.com/ggml-org/llama.cpp/issues/30093) Eval bug: glm5-next + `--spec-type draft-dflash` aborts on first request: `GGML_ASSERT(t_layer_inp[il] != nullptr)` (glm5-next never sets `t_layer_inp`)
- [#30086](https://github.com/ggml-org/llama.cpp/issues/30086) Feature Request: exact chunked training for long windows (chunk x window memory, gradient carried through the cached K/V and recurrent state)
- [#30085](https://github.com/ggml-org/llama.cpp/issues/30085) Feature Request: backward ops to fine-tune hybrid gated delta-net models (GATED_DELTA_NET, CONCAT, SSM_CONV, L2_NORM, SIGMOID)
- [#30084](https://github.com/ggml-org/llama.cpp/issues/30084) Feature Request: CUDA OUT_PROD with a quantized src0 (LoRA training through a quantized base on NVIDIA)
- [#30083](https://github.com/ggml-org/llama.cpp/issues/30083) Misc. bug: ggml-opt gradient accumulators are never cleared between optimizer steps (llama_opt_epoch / llama-finetune)

#### 🔒 Closed Issues
- [#24429](https://github.com/ggml-org/llama.cpp/issues/24429) Misc. bug: mtmd video input hangs on Windows — probe() deadlocks on faststart MP4, decode emits 0 frames when MOOV at end
- [#28734](https://github.com/ggml-org/llama.cpp/issues/28734) Eval bug: qwen4exp (Qwen3.8-Flash-Next) CUDA: decode slows linearly with context
- [#27665](https://github.com/ggml-org/llama.cpp/issues/27665) WebUI: New 'Browser' tools are not opt-in, dispite the '--tools' CLI argument being omitted
- [#29654](https://github.com/ggml-org/llama.cpp/issues/29654) Eval bug: GPUs choking on PCIe (VK device lost)
- [#29967](https://github.com/ggml-org/llama.cpp/issues/29967) Eval bug: Segmentation fault if a tool named "call" is called on llama-server
- [#26809](https://github.com/ggml-org/llama.cpp/issues/26809) Misc. bug: Downloading a new model should be possible even if it would exceed models-max
- [#27479](https://github.com/ggml-org/llama.cpp/issues/27479) Compile bug: Unable to build SYCL build 10556, commit ff14356e0
- [#27517](https://github.com/ggml-org/llama.cpp/issues/27517) SYCL: MoE expert tensors never get the Q8_0 reorder path (opt_for_reorder_id)
- [#27458](https://github.com/ggml-org/llama.cpp/issues/27458) Eval bug: E ggml_vulkan: device lost on Vulkan0 when attempting to use DFlash
- [#30078](https://github.com/ggml-org/llama.cpp/issues/30078) qwen4exp (Qwen3.8-Flash-Next): stochastic tool-call emission returned as content (finish=stop) + nlohmann 302 mid-stream - silent tool-call drops
- [#25938](https://github.com/ggml-org/llama.cpp/issues/25938) RPC client: RPC_STATUS_ASSERT in ggml_backend_rpc_buffer_get_tensor() aborts entire process on any RPC failure, instead of returning an error
- [#27619](https://github.com/ggml-org/llama.cpp/issues/27619) Misc. bug: llama-server tool-calling grammar crashes with "Unexpected empty grammar stack" depending only on parameter description text
- [#27649](https://github.com/ggml-org/llama.cpp/issues/27649) Misc. bug: Performance regression: mtmd vision encode ~2.7x slower on master (b10516 -> a130532) with CPU-only Android build
- [#27653](https://github.com/ggml-org/llama.cpp/issues/27653) Misc. bug: Transfer of model data to RPC node is very slow.
- [#27662](https://github.com/ggml-org/llama.cpp/issues/27662) Feature Request: Q7 quants
- [#28429](https://github.com/ggml-org/llama.cpp/issues/28429) peg-native: GBNF rule-name sanitization collides on non-ASCII (e.g. Chinese) tool parameter names - parameter silently dropped from the grammar, constrained sampling forces wrong parameter names
- [#30064](https://github.com/ggml-org/llama.cpp/issues/30064) Eval bug: Clef-GGUF Q8_0 /v1/systemone probabilities collapse toward uniform, while BF16 gives correct ones.
- [#30082](https://github.com/ggml-org/llama.cpp/issues/30082) Eval bug: embeddinggemma-2 vision/audio encoders unreachable via server embeddings; /embedding silently ignores image_data
- [#29088](https://github.com/ggml-org/llama.cpp/issues/29088) Misc. bug: [convert_hf_to_gguf] KeyError: 'speaker_encoder_config' when converting Qwen3-TTS CustomVoice variant

### Ollama (`ollama/ollama`)

**Stars:** 182,507 · **Open issues:** 4,197 · **Last push:** 2h ago

Ollama released version 0.40.1 today, addressing key changes such as improved proxy cloud usage and balance APIs, a fix for clef head reads exceeding 2GiB on Windows, and the removal of the account registration step from CLI onboarding. Additionally, several merged pull requests optimized the documentation by fixing broken links and avoiding symlinks on Windows to enhance usability. However, a notable regression issue was reported under #18831, which has been traced back to version 0.35, highlighting ongoing challenges within the platform. Other emerging issues include error reports related to model updates and API responses, indicating areas that may require further attention from the development team.

#### 🚀 New Releases
- [v0.40.1](https://github.com/ollama/ollama/releases/tag/v0.40.1) v0.40.1

#### ✅ Merged PRs
- [#18739](https://github.com/ollama/ollama/pull/18739) README: add oxi to community integrations
- [#18854](https://github.com/ollama/ollama/pull/18854) mlx: drop carried metal residency patch now that it is upstream
- [#18233](https://github.com/ollama/ollama/pull/18233) docs: fix broken download links in app README
- [#18814](https://github.com/ollama/ollama/pull/18814) docs: fix 6 dead links in README community integrations list
- [#18852](https://github.com/ollama/ollama/pull/18852) manifest: avoid symlinks on Windows
- [#18826](https://github.com/ollama/ollama/pull/18826) cmd: remove account step from CLI onboarding
- [#18777](https://github.com/ollama/ollama/pull/18777) llama: fix clef head reads past 2GiB on windows

#### 🐛 New Issues
- [#18831](https://github.com/ollama/ollama/issues/18831) Regression“ und „since 0.35 `bug` 💬3
- [#18846](https://github.com/ollama/ollama/issues/18846) Version 0.40.0 stops with "Maximum threads" error after a minute. `bug` `macos` `mlx` 💬1
- [#18840](https://github.com/ollama/ollama/issues/18840) /api/chat returns HTTP 500 after llama-server completes normally (unexpected end of JSON input) with qwen3.8:27b `bug` 💬1
- [#18842](https://github.com/ollama/ollama/issues/18842) Can't pull/update models: Error: max retries exceeded `bug` 💬1
- [#18836](https://github.com/ollama/ollama/issues/18836) clef-flash: every /v1/systemone request fails with "Clef: non-finite logit" (CPU and GPU `bug` 💬1
- [#18858](https://github.com/ollama/ollama/issues/18858) Error when trying to use Clef-flash from my D drive `bug`
- [#18856](https://github.com/ollama/ollama/issues/18856) MLX runner panic with qwen3.6:35b-mlx in Ollama 0.40.x — regression from 0.35.0 `bug`
- [#18853](https://github.com/ollama/ollama/issues/18853) [Cloud] deepseek-v4.1-flash:cloud returns 500 (Internal Server Error, ref) for any request containing image input when the prompt exceeds ~655,360 tokens
- [#18847](https://github.com/ollama/ollama/issues/18847) Windows: model unusable after 0.40.0 migration writes its manifest as a symlink ("untrusted mount point") `bug` `windows`
- [#18850](https://github.com/ollama/ollama/issues/18850) Request for good models on the cloud like Qwen 3.8 flash next , mimo v2.6 , hy4 , stepfun , laguna , refelction ai etc etc
- [#18835](https://github.com/ollama/ollama/issues/18835) compilation fails: compatmigrate/disk_unix.go:13:9: invalid operation: st.Bavail * uint64(st.Bsize) (mismatched types int64 and uint64) github.com/charmbracelet/bubbletea
- [#18833](https://github.com/ollama/ollama/issues/18833) MLX: quantized decision models are slower than bf16 at prefill (M5 Pro)

#### 🔒 Closed Issues
- [#18769](https://github.com/ollama/ollama/issues/18769) `clef-flash` decision model always fails on `/v1/systemone` — "Clef: non-finite logit" (CUDA) / "Clef: cannot open model" (CPU)
- [#18808](https://github.com/ollama/ollama/issues/18808) Muse Glimmer 30B GGUF Broken
- [#18831](https://github.com/ollama/ollama/issues/18831) Regression“ und „since 0.35
- [#18836](https://github.com/ollama/ollama/issues/18836) clef-flash: every /v1/systemone request fails with "Clef: non-finite logit" (CPU and GPU
- [#18847](https://github.com/ollama/ollama/issues/18847) Windows: model unusable after 0.40.0 migration writes its manifest as a symlink ("untrusted mount point")

### LiteLLM (`BerriAI/litellm`)

**Stars:** 60,314 · **Open issues:** 5,293 · **Last push:** <1h ago

On October 8, 2026, LiteLLM released several updates, including v1.106.0-dev.1, v1.105.0-rc.2, and v1.104.1, all accompanied by enhanced Docker image signature verification using cosign. Significant merges included feature enhancements such as the simplification of deployment and first trace setup (#45230) and improved performance for faster trace opens and list pages at scale (#45228). Additionally, the redesign of the usage page with stacked model and agent charts (#45221) was implemented. A notably hot new issue arose regarding the Azure SDK Responses API calls, which were found to bypass the router and go directly to api.openai.com (#45033). Overall, the day reflected a focus on both version updates and continuous improvements to user experience and performance.

#### 🚀 New Releases
- [v1.106.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-dev.1) v1.106.0-dev.1
- [v1.105.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.105.0-rc.2) v1.105.0-rc.2
- [v1.104.1](https://github.com/BerriAI/litellm/releases/tag/v1.104.1) v1.104.1
- [v1.103.4](https://github.com/BerriAI/litellm/releases/tag/v1.103.4) v1.103.4
- [v1.102.3](https://github.com/BerriAI/litellm/releases/tag/v1.102.3) v1.102.3
- [v1.101.5](https://github.com/BerriAI/litellm/releases/tag/v1.101.5) v1.101.5
- [v1.100.5](https://github.com/BerriAI/litellm/releases/tag/v1.100.5) v1.100.5

#### ✅ Merged PRs
- [#45254](https://github.com/BerriAI/litellm/pull/45254) fix(lens-ui): open traces on the top-level step and stop showing model names as input
- [#44433](https://github.com/BerriAI/litellm/pull/44433) fix(proxy): keep idle responses websockets open until a configurable session limit
- [#44483](https://github.com/BerriAI/litellm/pull/44483) fix(proxy): accept router-wide default_litellm_params in required-param validation
- [#43688](https://github.com/BerriAI/litellm/pull/43688) fix(proxy): traceparent/baggage fallback must not override caller metadata
- [#45230](https://github.com/BerriAI/litellm/pull/45230) feat(lens): simplify deployment and first trace setup
- [#45177](https://github.com/BerriAI/litellm/pull/45177) fix(ollama): one stream id, 400 on non-text tool content, separated tool results, no empty message item
- [#45170](https://github.com/BerriAI/litellm/pull/45170) refactor(proxy): expose public names for private proxy helpers
- [#45228](https://github.com/BerriAI/litellm/pull/45228) perf(lens): faster trace opens and list pages at scale
- [#45229](https://github.com/BerriAI/litellm/pull/45229) fix(ui): address usage redesign review findings
- [#45221](https://github.com/BerriAI/litellm/pull/45221) feat(ui): redesign usage page with stacked model and agent charts
- [#45223](https://github.com/BerriAI/litellm/pull/45223) fix(bedrock_mantle): lower claude sonnet 5.5 cache read price to match bedrock runtime
- [#40032](https://github.com/BerriAI/litellm/pull/40032) fix(responses): keep cache breakpoints on blocks the bridge stringifies
- [#45212](https://github.com/BerriAI/litellm/pull/45212) chore(release): backport #40989 to stable/1.101.x and cut 1.101.6
- [#45216](https://github.com/BerriAI/litellm/pull/45216) fix(bedrock): lower claude sonnet 5.5 cache read price to the aws offer index
- [#45215](https://github.com/BerriAI/litellm/pull/45215) chore(release): backport #44508 to stable/1.102.x and cut 1.102.4
- [#45157](https://github.com/BerriAI/litellm/pull/45157) fix(bedrock): map Scheduled batch jobs to in_progress on retrieve
- [#45178](https://github.com/BerriAI/litellm/pull/45178) fix(anthropic): fail closed when a token-file or inline-token federation credential is missing a rule or organization id
- [#45217](https://github.com/BerriAI/litellm/pull/45217) fix(vertex-ai): halve claude-sonnet-5-5 cache read price
- [#45208](https://github.com/BerriAI/litellm/pull/45208) test: remove dead imports and helpers left behind by legacy test deletion
- [#45196](https://github.com/BerriAI/litellm/pull/45196) feat(proxy,ui): add Moyai to the view switcher with quick connect
- [#43061](https://github.com/BerriAI/litellm/pull/43061) fix(scheduler): remove a request's queue entry once it stops waiting
- [#44800](https://github.com/BerriAI/litellm/pull/44800) fix(anthropic): let /v1/messages mid-stream failures reach the proxy failure boundary
- [#45129](https://github.com/BerriAI/litellm/pull/45129) feat(decisions): add the OpenAI Decisions spec types and the System One translation
- [#45209](https://github.com/BerriAI/litellm/pull/45209) fix(ci): restore vertex model sets mutated by get_optional_params tests
- [#45206](https://github.com/BerriAI/litellm/pull/45206) fix(lens): preserve numeric tags and report OTLP error codes
- [#45166](https://github.com/BerriAI/litellm/pull/45166) fix(vertex_ai): dial the multi-region Live API host for realtime sessions
- [#45187](https://github.com/BerriAI/litellm/pull/45187) refactor(rust-bridge): share field and response marshaling
- [#45172](https://github.com/BerriAI/litellm/pull/45172) test(e2e): move the harness self-tests out of tests/e2e
- [#45207](https://github.com/BerriAI/litellm/pull/45207) chore(ui): bump next to 16.3.8
- [#45165](https://github.com/BerriAI/litellm/pull/45165) fix(mcp): honor scoped cache freshness
- [#45148](https://github.com/BerriAI/litellm/pull/45148) feat(lens): isolate ingestion and investigations in a Rust service
- [#45195](https://github.com/BerriAI/litellm/pull/45195) test: delete 73 legacy tests covered by e2e, unable to fail, or dead in CI
- [#45173](https://github.com/BerriAI/litellm/pull/45173) chore(codeowners): replace kerry-berri with kerrylu-berri
- [#45202](https://github.com/BerriAI/litellm/pull/45202) feat(lens): scope traces to one agent with a header picker
- [#45185](https://github.com/BerriAI/litellm/pull/45185) fix(anthropic): normalize images for provider token counting
- [#45034](https://github.com/BerriAI/litellm/pull/45034) fix(types): serialize deferred pydantic schema builds across threads
- [#44119](https://github.com/BerriAI/litellm/pull/44119) fix(responses): keep prompt_cache_breakpoint markers in the chat to responses bridge
- [#45180](https://github.com/BerriAI/litellm/pull/45180) fix(ci): align misc unit tests with NativeCall bridge and widened e2e diff gates
- [#44600](https://github.com/BerriAI/litellm/pull/44600) feat(mcp): rate limit all MCP operations and add server-level rpm
- [#45159](https://github.com/BerriAI/litellm/pull/45159) fix(mcp): preserve client application type during registration
- [#44924](https://github.com/BerriAI/litellm/pull/44924) feat(proxy): add denied_passthrough_routes deny list for custom pass-through endpoints
- [#45186](https://github.com/BerriAI/litellm/pull/45186) perf(lens): classify signals within seconds of a trace finishing
- [#45150](https://github.com/BerriAI/litellm/pull/45150) test(e2e): record steps for raw transport calls and poll helpers
- [#44130](https://github.com/BerriAI/litellm/pull/44130) fix(proxy): evict cached user on every proxy for tpm/rpm updates and edit limits in the users UI
- [#44989](https://github.com/BerriAI/litellm/pull/44989) fix(streaming): stop re-wrapping a bridged stream's MidStreamFallbackError
- [#44343](https://github.com/BerriAI/litellm/pull/44343) feat(guardrails): extend Akto guardrail to responses, MCP tools, attachments and masking
- [#43959](https://github.com/BerriAI/litellm/pull/43959) fix(router): resume sync streaming fallbacks without retrying primary
- [#45169](https://github.com/BerriAI/litellm/pull/45169) feat(lens): link traces to the conversation that started them
- [#45152](https://github.com/BerriAI/litellm/pull/45152) feat(ui): add auto-router usage and savings table
- [#45126](https://github.com/BerriAI/litellm/pull/45126) refactor(rust-bridge): unify native call inputs and Messages settings
- [#45151](https://github.com/BerriAI/litellm/pull/45151) fix(model_prices): consolidate claude-haiku-5-5 over-100k pricing and capability flags
- [#45090](https://github.com/BerriAI/litellm/pull/45090) test: move the unit half of 126 mixed legacy files into tests/unit
- [#43695](https://github.com/BerriAI/litellm/pull/43695) feat(guardrails): add logging_only_scope to observe input, output, or both
- [#44889](https://github.com/BerriAI/litellm/pull/44889) feat(ui): configure Anthropic workload identity federation from the dashboard
- [#45094](https://github.com/BerriAI/litellm/pull/45094) feat(lens): flag traces with global System 1 signals
- [#45149](https://github.com/BerriAI/litellm/pull/45149) ci(codeql): run the default suite on full scans and security-extended on PRs
- [#44291](https://github.com/BerriAI/litellm/pull/44291) fix(openai-compat): send provider attribution headers on the default SDK path (+ Perplexity)
- [#45079](https://github.com/BerriAI/litellm/pull/45079) fix(ollama): answer in text after a tool result and cover ollama e2e on all three endpoints
- [#45143](https://github.com/BerriAI/litellm/pull/45143) feat(lens-ui): show findings ranked by priority with frequency and highlighted evidence
- [#45088](https://github.com/BerriAI/litellm/pull/45088) perf(lens): bound single trace reads by the sampled start time
- [#45132](https://github.com/BerriAI/litellm/pull/45132) fix(logging): bound data URI regex so base64 truncation stays linear
- [#45087](https://github.com/BerriAI/litellm/pull/45087) perf(lens): prune ClickHouse partitions when sampling and sample in one pass
- [#45095](https://github.com/BerriAI/litellm/pull/45095) perf(lens): claim worker jobs from an indexed due queue instead of scanning every lens
- [#45114](https://github.com/BerriAI/litellm/pull/45114) fix(azure): correct azure_ai/claude-haiku-5-5 forced tool use and thinking flags
- [#44965](https://github.com/BerriAI/litellm/pull/44965) test(e2e): tag a2a, access_control, other, secret_manager and migrations tests with Subject metadata
- [#42242](https://github.com/BerriAI/litellm/pull/42242) feat(helm): allow custom labels, annotations, command and args on migrationJob
- [#45116](https://github.com/BerriAI/litellm/pull/45116) fix(vertex-ai): correct claude-haiku-5-5 thinking and forced tool flags
- [#45124](https://github.com/BerriAI/litellm/pull/45124) test(integration): hold the wire barrier until the test releases it or the wire closes
- [#45127](https://github.com/BerriAI/litellm/pull/45127) test(e2e): let the realtime send step accept input audio buffer frames
- [#44844](https://github.com/BerriAI/litellm/pull/44844) fix(realtime): run transcript guardrails on raw-path transcription sessions with a transcription-safe block
- [#45108](https://github.com/BerriAI/litellm/pull/45108) feat(model_prices): add claude-haiku-5-5 model pricing
- [#45121](https://github.com/BerriAI/litellm/pull/45121) fix(prompt-caching): default injected /v1/messages breakpoints to implicit lookup
- [#45104](https://github.com/BerriAI/litellm/pull/45104) test(integration): turn the model-info refresh off in every integration proxy config
- [#45113](https://github.com/BerriAI/litellm/pull/45113) fix(cost-map): lower anthropic claude-sonnet-5-5 cache read price
- [#45006](https://github.com/BerriAI/litellm/pull/45006) test(observability): wait for warm-up spend rows in capped and count only the post-wipe half in X4
- [#45008](https://github.com/BerriAI/litellm/pull/45008) test(mcp): fix stale bridge-hook, applied-guardrails and pagination-revoke integration tests
- [#44860](https://github.com/BerriAI/litellm/pull/44860) fix(prometheus): add model_group label to end-to-end latency metrics
- [#45106](https://github.com/BerriAI/litellm/pull/45106) test(integration): scope the team-scoped models upstream check to its own model
- [#44960](https://github.com/BerriAI/litellm/pull/44960) fix(router): preserve native baseline identity and accounting
- [#43878](https://github.com/BerriAI/litellm/pull/43878) fix(caching): skip the cache past max_messages and keep tool_result text in semantic prompts
- [#45013](https://github.com/BerriAI/litellm/pull/45013) chore(docker): bump pgbouncer to 1.26.0
- [#44966](https://github.com/BerriAI/litellm/pull/44966) test(e2e): tag the remaining quota_management tests and record budget and spend client steps
- [#45012](https://github.com/BerriAI/litellm/pull/45012) chore(docker): bump pgbouncer to 1.26.0
- [#44964](https://github.com/BerriAI/litellm/pull/44964) test(e2e): tag router, batches and mcp tests with Subject metadata and record client steps
- [#45011](https://github.com/BerriAI/litellm/pull/45011) chore(docker): bump pgbouncer to 1.26.0
- [#45010](https://github.com/BerriAI/litellm/pull/45010) chore(docker): bump pgbouncer to 1.26.0
- [#44963](https://github.com/BerriAI/litellm/pull/44963) test(e2e): tag guardrails and logging tests with Subject metadata and record client steps
- [#44962](https://github.com/BerriAI/litellm/pull/44962) test(e2e): tag management tests with Subject metadata and record management client steps
- [#44961](https://github.com/BerriAI/litellm/pull/44961) test(e2e): tag claude_code cells with Subject metadata and record CLI driver steps
- [#44950](https://github.com/BerriAI/litellm/pull/44950) test(e2e): tag llm_translation tests with Subject metadata and record harness steps
- [#45097](https://github.com/BerriAI/litellm/pull/45097) fix(tests): match the lowercased bind error in the owned-proxy port-race retry
- [#45091](https://github.com/BerriAI/litellm/pull/45091) fix(bedrock): take context and output limits from the Bedrock model cards
- [#45085](https://github.com/BerriAI/litellm/pull/45085) fix(proxy): opt-in Redis hash-tag grouping for v3 rate limiter
- [#45083](https://github.com/BerriAI/litellm/pull/45083) fix(ollama): let prompt-based tool calling answer in text after a tool result
- [#45089](https://github.com/BerriAI/litellm/pull/45089) fix(bedrock): add 2027-03-30 deprecation date to DeepSeek R1 and Qwen3 Coder rows
- [#45037](https://github.com/BerriAI/litellm/pull/45037) refactor(llms): expose public names for private provider helpers
- [#45078](https://github.com/BerriAI/litellm/pull/45078) fix(cost-map): add us data residency multiplier to anthropic claude-opus-5-5
- [#45077](https://github.com/BerriAI/litellm/pull/45077) fix(bedrock): update GovCloud OpenAI prices, add GPT-6 Astra ultrafast tier and Titan Image v2 EOL
- [#45053](https://github.com/BerriAI/litellm/pull/45053) fix(ollama): turn streamed prompt-based JSON tool calls into real tool calls
- [#44982](https://github.com/BerriAI/litellm/pull/44982) fix(health): attribute background health check results to their own deployment
- [#45020](https://github.com/BerriAI/litellm/pull/45020) fix(auth): clear the recent-miss user memo when /user/new creates the user
- [#45029](https://github.com/BerriAI/litellm/pull/45029) refactor(types): replace Any with proven types in 16 files
- [#45031](https://github.com/BerriAI/litellm/pull/45031) test(proxy): make the stagger-offset and linear-dedup guards independent of runner identity and load
- [#45007](https://github.com/BerriAI/litellm/pull/45007) ci: give the database-backed CircleCI jobs their own Postgres
- [#45017](https://github.com/BerriAI/litellm/pull/45017) refactor: remove fresh tech debt from the 2026-10-06 window
- [#45018](https://github.com/BerriAI/litellm/pull/45018) fix(azure): date claude-opus-5-5 and sonnet-5-5 and fill azure/eu/gpt-6-astra limits
- [#44668](https://github.com/BerriAI/litellm/pull/44668) refactor: expose public hidden_params accessors
- [#44608](https://github.com/BerriAI/litellm/pull/44608) ci: run integration-mcp on an xlarge machine
- [#44998](https://github.com/BerriAI/litellm/pull/44998) test(mcp): set server_id on openapi local fake tools
- [#44997](https://github.com/BerriAI/litellm/pull/44997) revert(docker): unpin openssl-3.6-dev in the pgbouncer-builder stage
- [#45002](https://github.com/BerriAI/litellm/pull/45002) fix(vertex-ai): correct input_cost_per_second on gemini-3.5 transcribe-live and live-translate
- [#41482](https://github.com/BerriAI/litellm/pull/41482) fix(ui): render team_metadata_schema keys as fixed labels
- [#44981](https://github.com/BerriAI/litellm/pull/44981) fix(ci): stop deferred pydantic builds leaking caller locals and add the missing Lens FK migration
- [#44843](https://github.com/BerriAI/litellm/pull/44843) fix(realtime): skip guardrail VAD session.update injection for transcription sessions
- [#44988](https://github.com/BerriAI/litellm/pull/44988) test(mcp): run the static root path issuer discovery test in-process
- [#44992](https://github.com/BerriAI/litellm/pull/44992) fix(azure): sync azure openai audio, realtime and image prices with azure pricing page
- [#44987](https://github.com/BerriAI/litellm/pull/44987) fix(bedrock): forward each Nova Sonic assistant sentence once over the realtime API
- [#44807](https://github.com/BerriAI/litellm/pull/44807) test: move whole-unit legacy test files into tests/unit and delete dead skips
- [#44990](https://github.com/BerriAI/litellm/pull/44990) feat(bedrock): add kimi k3 india cross-region row
- [#44991](https://github.com/BerriAI/litellm/pull/44991) fix(docker): pin openssl-3.6-dev in the pgbouncer-builder stage
- [#44986](https://github.com/BerriAI/litellm/pull/44986) fix(azure): set kimi-k2.7-code deprecation date from the models list API
- [#44635](https://github.com/BerriAI/litellm/pull/44635) feat(claude_code_gateway): issue rotating refresh tokens and a revocation endpoint
- [#44879](https://github.com/BerriAI/litellm/pull/44879) fix(exceptions): map upstream 402 to PaymentRequiredError and cool down 402 deployments

#### 🐛 New Issues
- [#45009](https://github.com/BerriAI/litellm/issues/45009) [Feature]: OpenAI Decisions API `enhancement` `llm translation`
- [#45022](https://github.com/BerriAI/litellm/issues/45022) [Feature]: Multiple team assignation for user created with JWT mapping `enhancement` 💬1
- [#45033](https://github.com/BerriAI/litellm/issues/45033) [Bug]: Azure SDK Responses API calls (/openai/responses) bypass the router and go to api.openai.com via OpenAI pass-through `bug` `llm translation` 💬1
- [#45028](https://github.com/BerriAI/litellm/issues/45028) Proxy starts without a default_on guardrail whose type is unknown (fail-open on an older release) 💬2
- [#45253](https://github.com/BerriAI/litellm/issues/45253) [Bug]: text_completion rejects a token ID prompt for hosted_vllm, the same prompt works with openai/ `llm translation` 💬1
- [#45065](https://github.com/BerriAI/litellm/issues/45065) [Bug]: Unrecoverable batch cost failures are retried indefinitely 💬1
- [#45058](https://github.com/BerriAI/litellm/issues/45058) [Bug]: Titan embedding batch results record zero token usage and cost `llm translation` 💬1
- [#45074](https://github.com/BerriAI/litellm/issues/45074) [Bug]: Long-context ultrafast pricing fields are dropped from model metadata 💬1
- [#45063](https://github.com/BerriAI/litellm/issues/45063) [Bug]: Expired batches with successful output are retired without recording spend 💬1
- [#45075](https://github.com/BerriAI/litellm/issues/45075) [Bug]: Responses WebSocket closes live prewarmed connections after 30 seconds 💬1
- [#45145](https://github.com/BerriAI/litellm/issues/45145) stale session pin on a cooldown row never refreshes, so every later call in the session re-shuffles the group `llm translation` 💬1
- [#45041](https://github.com/BerriAI/litellm/issues/45041) Add "glm-5.3" in "model_prices_and_context_window.json" 💬1
- [#45015](https://github.com/BerriAI/litellm/issues/45015) [Bug]: Customer ID is not logged and reflected anywhere even though passing them in the request `bug` 💬1
- [#45245](https://github.com/BerriAI/litellm/issues/45245) fix(proxy): restore configured CORS origins methods and headers
- [#45239](https://github.com/BerriAI/litellm/issues/45239) fix(guardrails): extract embedding input in the shared message helper
- [#45246](https://github.com/BerriAI/litellm/issues/45246) fix(logging): avoid the container stream field in printed payloads
- [#45243](https://github.com/BerriAI/litellm/issues/45243) fix(logging): redact Responses instructions and output in callback payloads
- [#45242](https://github.com/BerriAI/litellm/issues/45242) fix(router): keep deployment lists and indexes consistent during concurrent updates
- [#45240](https://github.com/BerriAI/litellm/issues/45240) fix(auth): retain full-table registry cache entries during virtual-key churn
- [#45238](https://github.com/BerriAI/litellm/issues/45238) fix(cache): accept explicit null cache settings when deriving namespaces
- [#45237](https://github.com/BerriAI/litellm/issues/45237) fix(proxy): reconcile missed configuration updates after Redis reconnect
- [#45236](https://github.com/BerriAI/litellm/issues/45236) fix(keys): preserve explicit expiration during key generation and updates
- [#45235](https://github.com/BerriAI/litellm/issues/45235) [Bug]: Streaming drops chunks whose delta carries only `refusal` — `CustomStreamWrapper.is_chunk_non_empty` never checks `delta.refusal` `llm translation`
- [#45232](https://github.com/BerriAI/litellm/issues/45232) [Feature]: One source of truth for the cost map schema, the test literal has drifted twice
- [#45182](https://github.com/BerriAI/litellm/issues/45182) [Feature]: Preserve and expose generic OTLP LogRecords in Lens independently of harness-specific conversation adapters `llm translation` `claude code`
- [#45102](https://github.com/BerriAI/litellm/issues/45102) [Bug]: truncate_base64_in_messages regex is quadratic — holds GIL for seconds, blocks event loop and fails liveness probes
- [#45122](https://github.com/BerriAI/litellm/issues/45122) [Bug]: Responses in-stream error event in OpenAI's top-level shape loses its code and becomes a fallback-eligible 500 `llm translation`
- [#45115](https://github.com/BerriAI/litellm/issues/45115) completion(num_retries=…) ignores the provider's retry-after on rate limits; only the Router honors it `llm translation`
- [#45103](https://github.com/BerriAI/litellm/issues/45103) [Bug]: Bedrock Converse streaming drops request timeout and can hang for 600s `bug` `llm translation`
- [#45084](https://github.com/BerriAI/litellm/issues/45084) enable_pre_call_checks context-window check on /v1/messages ignores top-level system and tools, so max_input_tokens is not enforced for real Claude Code traffic `llm translation` `claude code`
- [#45082](https://github.com/BerriAI/litellm/issues/45082) [Bug]: Anthropic streaming with response_format and tools reports finish_reason "stop" when a user tool is called `llm translation`
- [#45071](https://github.com/BerriAI/litellm/issues/45071) [Bug]: Allow provider-prefixed file routes to use configured ownership middleware `llm translation`
- [#45072](https://github.com/BerriAI/litellm/issues/45072) [Bug]: Validate managed file-list page limits instead of silently clamping them `llm translation`
- [#45073](https://github.com/BerriAI/litellm/issues/45073) [Bug]: Small managed file-list pages can hide readable files behind filtered rows
- [#45068](https://github.com/BerriAI/litellm/issues/45068) [Bug]: Expose guardrail response metadata to callers through an opt-in response field `llm translation`
- [#45070](https://github.com/BerriAI/litellm/issues/45070) [Bug]: Add opt-in per-user ownership isolation for provider-native passthrough resources
- [#45069](https://github.com/BerriAI/litellm/issues/45069) [Bug]: Internal LiteLLM parameters reach strict provider request bodies
- [#45067](https://github.com/BerriAI/litellm/issues/45067) [Bug]: Support operator-configured default route allowlists for generated keys
- [#45066](https://github.com/BerriAI/litellm/issues/45066) [Bug]: Unprocessable old batch rows prevent newer batches from being costed
- [#45061](https://github.com/BerriAI/litellm/issues/45061) [Bug]: Bedrock file routing drops configured S3 endpoint and bucket parameters `llm translation`
- [#45060](https://github.com/BerriAI/litellm/issues/45060) [Bug]: Malformed Bedrock batch JSONL returns a server error instead of a client error `llm translation`
- [#45064](https://github.com/BerriAI/litellm/issues/45064) [Bug]: Managed batch cost reconciliation omits configured success callbacks
- [#45059](https://github.com/BerriAI/litellm/issues/45059) [Bug]: Deleting a Bedrock-backed file fails because delete transforms are unimplemented `llm translation`
- [#45062](https://github.com/BerriAI/litellm/issues/45062) [Bug]: Credential serialization drops the configured S3 endpoint for batch output retrieval
- [#45057](https://github.com/BerriAI/litellm/issues/45057) [Bug]: Bedrock Scheduled batches are reported as validating `llm translation`
- [#45056](https://github.com/BerriAI/litellm/issues/45056) [Bug]: Bedrock batch requests ignore the configured control-plane endpoint `llm translation`
- [#45055](https://github.com/BerriAI/litellm/issues/45055) [Bug]: Bedrock batch signing ignores credentials configured on the deployment `llm translation`
- [#45054](https://github.com/BerriAI/litellm/issues/45054) [Bug]: Anthropic safeguards are dropped or sent without the required beta `llm translation`
- [#45047](https://github.com/BerriAI/litellm/issues/45047) [Bug]: Admin UI key edit sends `duration: ""` and fails with "Invalid duration format" when an upperbound duration is set
- [#45049](https://github.com/BerriAI/litellm/issues/45049) [Feature]: Opt-in setting to exempt proxy admins from upperbound_key_generate_params
- [#45021](https://github.com/BerriAI/litellm/issues/45021) Ollama: native prompt_eval_cached_count is never mapped into prompt_tokens_details.cached_tokens (cache reads always report 0) `llm translation`
- [#45001](https://github.com/BerriAI/litellm/issues/45001) [Feature]: per-call ssl_verify should be propogated to all the providers `enhancement` `llm translation`
- [#44996](https://github.com/BerriAI/litellm/issues/44996) [Bug]: dcr_bridge relay arm (oauth_delegate, no client_id) fails RFC 9207-strict clients: upstream iss doesn't match the gateway issuer `claude code`

#### 🔒 Closed Issues
- [#44182](https://github.com/BerriAI/litellm/issues/44182) [Bug]: Team ID not verified on JWT
- [#44154](https://github.com/BerriAI/litellm/issues/44154) [Bug]: Background health check results are attributed to every deployment sharing the same `litellm_params.model`
- [#31843](https://github.com/BerriAI/litellm/issues/31843) [Feature]: Add Terraform module for Azure
- [#31954](https://github.com/BerriAI/litellm/issues/31954) [Bug]: Wrong values for max_tokens in some models
- [#43059](https://github.com/BerriAI/litellm/issues/43059) [Bug]: Scheduler never removes admitted requests from the priority queue, so prioritized requests fail during cooldown and, with Redis, under normal traffic
- [#31838](https://github.com/BerriAI/litellm/issues/31838) [Bug]: Redis cache end_user_id:{id} not invalidated on /customer/new, /customer/update, /customer/delete
- [#31902](https://github.com/BerriAI/litellm/issues/31902) [Bug]: websearch_interception short-circuit uses last user message as the search query instead of the model's web_search tool-call query (Claude Code returns "Did 0 searches" / off-topic results with github_copilot)
- [#31934](https://github.com/BerriAI/litellm/issues/31934) [Bug]: Projected limit alerting ignores budget reset period (daily/weekly/monthly)
- [#31953](https://github.com/BerriAI/litellm/issues/31953) [Bug]: Admin Setting Option "Require authentication for public AI Hub" redirects to /ui instead of /ui/model_hub_table/ after successful login
- [#31976](https://github.com/BerriAI/litellm/issues/31976) [Bug]: `BedrockGuardrail` with `disable_exception_on_block=True` silently bypasses block on `/v1/messages` requests
- [#41749](https://github.com/BerriAI/litellm/issues/41749) [Bug]: Bedrock batch retrieve reports a queued job as validating
- [#31925](https://github.com/BerriAI/litellm/issues/31925) [Feature]: Attach the "OpenAI-Project: proj_xxx" header to Bedrock Mantle on a per-model basis.
- [#31936](https://github.com/BerriAI/litellm/issues/31936) [Bug]: Cache Analytics dashboard cards show 0 for provider prompt caching (reads wrong fields — `cache_hit_true_rows`/`cached_completion_tokens` instead of `cache_read_input_tokens`)
- [#41424](https://github.com/BerriAI/litellm/issues/41424) [Bug]: Anthropic /v1/messages → Responses bridge drops cache_control, so Claude Code gets zero prompt-cache reads on bedrock_mantle gpt-5.6
- [#44275](https://github.com/BerriAI/litellm/issues/44275) [Bug]: Trace detail returns HTTP 500 above 1,000 spans due to the ClickHouse reader row cap
- [#43990](https://github.com/BerriAI/litellm/issues/43990) Responses WebSocket closes pre-established connections after a hardcoded 30 seconds
- [#43945](https://github.com/BerriAI/litellm/issues/43945) [Bug]: Sync Router streaming fallback re-runs the failing group instead of falling back
- [#45102](https://github.com/BerriAI/litellm/issues/45102) [Bug]: truncate_base64_in_messages regex is quadratic — holds GIL for seconds, blocks event loop and fails liveness probes
- [#35711](https://github.com/BerriAI/litellm/issues/35711) [Bug]: `ollama/` streaming never reconstructs tool calls — tool call arrives as plain `delta.content` text with `finish_reason: "stop"`, while the non-streaming path reconstructs it correctly

### Unsloth (`unslothai/unsloth`)

**Stars:** 77,385 · **Open issues:** 896 · **Last push:** <1h ago

On October 8, 2026, Unsloth released v0.1.904-beta, introducing the ability to train custom Decision models that significantly boost accuracy from 30% to 80%, alongside enhancements to native ComfyUI models and diffusion improvements. Significant merged contributions included fixes to backend CI issues related to decision model merges and improvements in S3 dataset key management, enhancing overall reliability and security. Additionally, the ongoing development in the Studio brought updates like enabling decision models to be served through llama.cpp and exported to GGUF format. A notable new issue emerged regarding high CPU usage in the backend with a reported bug related to the v0.1.903-beta release, indicating potential performance concerns that may need immediate attention.

#### 🚀 New Releases
- [v0.1.904-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.904-beta) Train your own Decision model

#### ✅ Merged PRs
- [#12973](https://github.com/unslothai/unsloth/pull/12973) Stop test_dataset_cache_safe leaking the Hub no-symlink switch into later tests
- [#12974](https://github.com/unslothai/unsloth/pull/12974) tests: keep the Kaggle launcher's signal handlers out of the pytest worker
- [#12965](https://github.com/unslothai/unsloth/pull/12965) Installer differential: ignore winget spinner frames in the transcript
- [#12956](https://github.com/unslothai/unsloth/pull/12956) Baseline the two unsloth-zoo 2026.10.2 findings after review
- [#12958](https://github.com/unslothai/unsloth/pull/12958) Fix the backend CI guards main fails after the decision and ComfyUI merges
- [#12940](https://github.com/unslothai/unsloth/pull/12940) Studio: close managed-account and API-key gaps in owner-only routes
- [#12949](https://github.com/unslothai/unsloth/pull/12949) Decision models: follow-up fixes after #12772, #12876, #12939
- [#12936](https://github.com/unslothai/unsloth/pull/12936) Studio: harden S3 dataset keys, uv fallback, header reads and auth body cap
- [#12932](https://github.com/unslothai/unsloth/pull/12932) Studio frontend: bump proxy-addr, seroval and MCP SDK for npm advisories
- [#12948](https://github.com/unslothai/unsloth/pull/12948) install-kernels: tidy the sm75 mamba_ssm follow-ups
- [#12960](https://github.com/unslothai/unsloth/pull/12960) Bump install.sh / install.ps1 pins to unsloth>=2026.10.2
- [#12954](https://github.com/unslothai/unsloth/pull/12954) Repair four checks that went red on main with the decision-model merges
- [#12943](https://github.com/unslothai/unsloth/pull/12943) Studio: harden browser downloads after #12832
- [#12953](https://github.com/unslothai/unsloth/pull/12953) Studio: open Try a decision with the trained model after Use in Decision API
- [#12889](https://github.com/unslothai/unsloth/pull/12889) Studio: price the context meter off a tool loop's final pass, not the whole turn's completions
- [#12911](https://github.com/unslothai/unsloth/pull/12911) Studio: keep $PATH, $HOME and other shell variables as text, not maths
- [#12877](https://github.com/unslothai/unsloth/pull/12877) Studio: load ComfyUI nvfp4 and mxfp8 DiT single files
- [#12883](https://github.com/unslothai/unsloth/pull/12883) Studio: load ComfyUI text encoder and VAE files beside a single-file DiT
- [#12939](https://github.com/unslothai/unsloth/pull/12939) Serve decision models through llama.cpp in Studio, and export them to GGUF
- [#12772](https://github.com/unslothai/unsloth/pull/12772) Train a decision model from a plain language model
- [#12885](https://github.com/unslothai/unsloth/pull/12885) Studio: load ComfyUI Krea-2 and HunyuanImage-2.1 single-file DiTs
- [#12774](https://github.com/unslothai/unsloth/pull/12774) fix(studio): remember per-GPU layer ratios
- [#12879](https://github.com/unslothai/unsloth/pull/12879) Studio: load a single .safetensors DiT from any Hugging Face repo
- [#12888](https://github.com/unslothai/unsloth/pull/12888) Studio: load Wan2.2 hosted FP8 / INT8 files, and hosted files under low_vram
- [#12944](https://github.com/unslothai/unsloth/pull/12944) install-kernels: install mamba_ssm on sm75 with Triton 3.4+
- [#12945](https://github.com/unslothai/unsloth/pull/12945) Settings contract: read the embedding picker's stacking classes inside cn() too
- [#12893](https://github.com/unslothai/unsloth/pull/12893) Studio: update the audio.cpp runtime from the in-app update
- [#12894](https://github.com/unslothai/unsloth/pull/12894) Studio: show the hosted text encoder download in image load progress
- [#12904](https://github.com/unslothai/unsloth/pull/12904) studio: fix live monitor background in light mode
- [#12897](https://github.com/unslothai/unsloth/pull/12897) Studio: finish an update with the setup script it installed
- [#12598](https://github.com/unslothai/unsloth/pull/12598) Studio: read replies aloud without markdown symbols
- [#9812](https://github.com/unslothai/unsloth/pull/9812) Correct sample packing for hybrid models (gated-delta, Mamba2, short conv)
- [#12871](https://github.com/unslothai/unsloth/pull/12871) Studio: install transformers releases needing hub >= 1.31, and transformers main after consent
- [#12876](https://github.com/unslothai/unsloth/pull/12876) Train any text or vision LLM as a Clef decision model from Studio, with FastDecisionModel.predict and adapter saves
- [#12872](https://github.com/unslothai/unsloth/pull/12872) Studio: load Wan2.2-A14B expert pairs and tell LTX-2.3 distilled from dev by its weights
- [#12913](https://github.com/unslothai/unsloth/pull/12913) Studio: include the chat's system prompt in exports and training data
- [#12856](https://github.com/unslothai/unsloth/pull/12856) Keep flash attention from reading Qwen3.5 mRoPE position ids as packed sequences
- [#12934](https://github.com/unslothai/unsloth/pull/12934) fix(studio): honor llama.cpp update dismissal and snooze
- [#12873](https://github.com/unslothai/unsloth/pull/12873) Scope UNSLOTH_HIGH_PRECISION_LAYERNORM to the load that sets it
- [#12928](https://github.com/unslothai/unsloth/pull/12928) Studio: rebuild an image / video GGUF from the cached copy when only its header changed
- [#12887](https://github.com/unslothai/unsloth/pull/12887) Studio: key the diffusion compile cache by the loaded quant variant
- [#12924](https://github.com/unslothai/unsloth/pull/12924) studio: guard project submits during IME composition
- [#12938](https://github.com/unslothai/unsloth/pull/12938) Studio: show when Windows MXC already runs in the built-in container
- [#12922](https://github.com/unslothai/unsloth/pull/12922) studio: keep general settings from restoring stale tokens
- [#12925](https://github.com/unslothai/unsloth/pull/12925) studio: scope speech download cancellation to its attempt
- [#12912](https://github.com/unslothai/unsloth/pull/12912) Studio: turn [1]-style citations in replies into links
- [#12905](https://github.com/unslothai/unsloth/pull/12905) studio: install the gstreamer recording plugins with the deb package
- [#12878](https://github.com/unslothai/unsloth/pull/12878) Studio: recognise ComfyUI checkpoints by name and header, and list ComfyUI model folders
- [#12874](https://github.com/unslothai/unsloth/pull/12874) Studio: default Qwen-Image-2.1 int8 to the hosted ConvRot file, with shared rotations
- [#12832](https://github.com/unslothai/unsloth/pull/12832) Studio: confirm browser downloads, choose the download folder
- [#12916](https://github.com/unslothai/unsloth/pull/12916) Studio: try a decision from the Decision API settings
- [#12867](https://github.com/unslothai/unsloth/pull/12867) Gemma-4 26B/31B: train with the empty thought channel on non-thinking turns
- [#12921](https://github.com/unslothai/unsloth/pull/12921) install-kernels: skip mamba_ssm below sm80
- [#12875](https://github.com/unslothai/unsloth/pull/12875) Studio: embedding model picker, pins and eject in the RAG menu
- [#12841](https://github.com/unslothai/unsloth/pull/12841) fix(studio): preserve skill mention intent and denied preload context
- [#12931](https://github.com/unslothai/unsloth/pull/12931) Desktop contract: count #12927's scaled sidebar row
- [#12890](https://github.com/unslothai/unsloth/pull/12890) Studio: simpler icons for the audio pages, one audio icon in the Library
- [#12930](https://github.com/unslothai/unsloth/pull/12930) Tauri transport test: start the late backend after the old ladder is spent, not at 3s
- [#12929](https://github.com/unslothai/unsloth/pull/12929) Docker: allow unsloth_root_shim.py into the build context
- [#12926](https://github.com/unslothai/unsloth/pull/12926) Studio: Ask about this page on every page, desktop included
- [#12927](https://github.com/unslothai/unsloth/pull/12927) Studio: drag pinned pages in the sidebar like chats
- [#12907](https://github.com/unslothai/unsloth/pull/12907) Keep the notebook and saved model when unsloth-run runs a URL
- [#12914](https://github.com/unslothai/unsloth/pull/12914) Studio: hide the negative prompt on image models that ignore it
- [#12906](https://github.com/unslothai/unsloth/pull/12906) Studio: show the LAN address on the API page when LAN access is on
- [#12915](https://github.com/unslothai/unsloth/pull/12915) Use the requested max_seq_length for encoder embedding models
- [#12908](https://github.com/unslothai/unsloth/pull/12908) Studio: train transparent PNG and WebP images on white instead of black
- [#12909](https://github.com/unslothai/unsloth/pull/12909) Studio: keep each row's own question when training on a vision dataset
- [#12910](https://github.com/unslothai/unsloth/pull/12910) Studio: train prompt/completion message lists as one conversation
- [#12266](https://github.com/unslothai/unsloth/pull/12266) fix(studio): stop a managed runtime when the client drops its stream
- [#12900](https://github.com/unslothai/unsloth/pull/12900) Studio: pick the quant of a GGUF dictation model in Voice settings
- [#12902](https://github.com/unslothai/unsloth/pull/12902) Studio: support current native builds and preserve CPU asset selection
- [#12920](https://github.com/unslothai/unsloth/pull/12920) Composer settings driver: poll the submitted list instead of reading it once after the key press

#### 🐛 New Issues
- [#12977](https://github.com/unslothai/unsloth/issues/12977) [Feature] Unsloth Studio: Make it easy to duplicate a past training run into a new Configure draft `feature request` 💬1
- [#12942](https://github.com/unslothai/unsloth/issues/12942) [Bug] v0.1.903-beta: backend python.exe spins ~95% CPU across all cores at idle (no model loaded) — OPENBLAS_NUM_THREADS=1 has no effect `feature request` `bug` 💬1
- [#12941](https://github.com/unslothai/unsloth/issues/12941) [Bug] The MXC probe fails with `ReadGrantError` because it attempts to modify grants on the protected MS Store Python directory. `feature request` `bug` 💬1
- [#12935](https://github.com/unslothai/unsloth/issues/12935) [Bug] Studio (macOS/MPS): image generation with an input image fails — VAE tiling builds float64 weights on MPS 💬1
- [#13010](https://github.com/unslothai/unsloth/issues/13010) [Bug] Unsupported durable request fields: sandbox_level `feature request` `bug`
- [#12955](https://github.com/unslothai/unsloth/issues/12955) [Bug] int4 (compressed-tensors) loader doesn't validate group_size against the real weight_scale shape `feature request` `bug`
- [#12947](https://github.com/unslothai/unsloth/issues/12947) [Bug] AMD: pip install "unsloth[amd]" can still replace ROCm torch with CUDA torch from PyPI

#### 🔒 Closed Issues
- [#11671](https://github.com/unslothai/unsloth/issues/11671) [Feature] Option to disable toolcalls
- [#12547](https://github.com/unslothai/unsloth/issues/12547) [Bug] Hash hash asterisk underscore: Unsloth Desktop when using System TTS accidentally reads out the formatting
- [#11939](https://github.com/unslothai/unsloth/issues/11939) Dictation could not access the microphone.
- [#12623](https://github.com/unslothai/unsloth/issues/12623) [UI/UX Bug] Live Monitor widget overlaps and z-index collision with background download status popover or other popover
- [#12918](https://github.com/unslothai/unsloth/issues/12918) Your Ci/CD is Still SLOW AF

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,127 · **Open issues:** 376 · **Last push:** 10h ago

On October 8, 2026, there were no new releases for AIBrix. However, significant developments included the merging of several pull requests aimed at improving the system's reliability and test coverage. Notably, PR #2930 restored KV cache tests that had been previously obscured by module skips, while PR #2929 expanded the end-to-end test coverage for ModelClaim. Additionally, PR #2931 addressed a bug in the TestLatestPodReadySince by ensuring the test waits for the wall clock rather than assuming it has advanced. Overall, the day was marked by routine maintenance and enhancements without any new issues reported.

#### ✅ Merged PRs
- [#2930](https://github.com/vllm-project/aibrix/pull/2930) [CI] Restore KV cache tests hidden by module skips
- [#2929](https://github.com/vllm-project/aibrix/pull/2929) [Misc] Expand ModelClaim end-to-end test coverage
- [#2931](https://github.com/vllm-project/aibrix/pull/2931) [Bug] Wait for the wall clock in TestLatestPodReadySince instead of assuming it advanced
- [#2928](https://github.com/vllm-project/aibrix/pull/2928) [Misc] Expand ModelClaim integration test coverage
- [#2927](https://github.com/vllm-project/aibrix/pull/2927) [Misc] Fix KV event replay wiring in the semantic-router samples

#### 🔒 Closed Issues
- [#2779](https://github.com/vllm-project/aibrix/issues/2779) [Bug] StormServices in two namespaces seem to affect each other when they share a selector (deleting one kills the other's Pods)
- [#2874](https://github.com/vllm-project/aibrix/issues/2874) [Bug] ModelAdapter ignores matchExpressions in podSelector

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,047 · **Open issues:** 600 · **Last push:** 1h ago

On October 8, 2026, there were no new releases for Semantic Router. However, several important pull requests were merged, including a significant feature addition that allows users to choose the decision model with the command `vllm-sr serve --decision-model` (#4721), and another that implements the KV handoff eligibility contract (#4532). Notable bug fixes addressed issues such as ensuring that the router manages model deployments before reporting readiness (#4726) and fixing failures in model evaluation contract tests following system module changes (#4737). Among the new issues, the request to improve Mergify merge queue turnaround time (#4676) gained some traction, highlighting ongoing concerns with workflow efficiency. Overall, the day was marked by practical enhancements and important bug resolutions rather than significant new releases.

#### ✅ Merged PRs
- [#4731](https://github.com/vllm-project/semantic-router/pull/4731) [Test] E2E: compare the AI gateway guard with the decision model's threshold
- [#4715](https://github.com/vllm-project/semantic-router/pull/4715) [Bug] Router: skip cache identity work when the cache backend is disabled
- [#4532](https://github.com/vllm-project/semantic-router/pull/4532) [Feature] Add KV handoff eligibility contract
- [#4726](https://github.com/vllm-project/semantic-router/pull/4726) [Bug] Router: wait for the Router-managed model deployments before reporting ready
- [#4721](https://github.com/vllm-project/semantic-router/pull/4721) [Feature] Router: choose the decision model with vllm-sr serve --decision-model
- [#4706](https://github.com/vllm-project/semantic-router/pull/4706) [Bug] Model runtime: bound what a long input costs by what its model reads
- [#4723](https://github.com/vllm-project/semantic-router/pull/4723) [Bug] CLI, Router: fix the new-user findings for installation, standalone mode and the model runtime
- [#4614](https://github.com/vllm-project/semantic-router/pull/4614) [Bench] Remove superseded and broken bench/ scripts
- [#4724](https://github.com/vllm-project/semantic-router/pull/4724) [Bug] CLI: make the reference config pass the generated schema and run the CLI unit tests when it changes
- [#4725](https://github.com/vllm-project/semantic-router/pull/4725) [Bug] Recipes: pass live conformance on the Vela 2.0 0.3B defaults

#### 🐛 New Issues
- [#4665](https://github.com/vllm-project/semantic-router/issues/4665) [Feature] Move Ecosystem & partnerships into Community (after Build with us / Open positions) `enhancement` `accepted` `wg/developer-experience-ecosystem` 💬6
- [#4668](https://github.com/vllm-project/semantic-router/issues/4668) [Feature] Model runtime: cut Vela 2.0 0.3B's CPU latency as the built-in signal default `enhancement` `accepted` `wg/router-models-inference-runtime` 💬4
- [#4669](https://github.com/vllm-project/semantic-router/issues/4669) [Research] Measure cross-head error correlation from Vela's shared backbone `needs-acceptance` `research` `wg/router-models-inference-runtime` 💬3
- [#4737](https://github.com/vllm-project/semantic-router/issues/4737) [Bug] model_eval contract tests fail on main since the system modules moved to model_ref `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#4676](https://github.com/vllm-project/semantic-router/issues/4676) [Feature] Improve Mergify merge queue turnaround time `enhancement` `needs-acceptance` `owner/maintainers` 💬2
- [#4732](https://github.com/vllm-project/semantic-router/issues/4732) [Feature] Recipes: route a reasoning fleet with one decision-model call (decision-balance) `enhancement` `accepted` `wg/mom-routing` 💬1
- [#4713](https://github.com/vllm-project/semantic-router/issues/4713) [Bug] Recipes: maintained recipe probes fail live conformance after the Vela 2.0 0.3B default `bug` `accepted` `wg/mom-routing` 💬1
- [#4709](https://github.com/vllm-project/semantic-router/issues/4709) [Bug] Install: install.sh fails on Ubuntu and Debian hosts with Python but without python3-venv `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4710](https://github.com/vllm-project/semantic-router/issues/4710) [Bug] CLI: --target kubernetes commands need a chart directory that pip installs lack, and only serve accepts --chart-dir `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4714](https://github.com/vllm-project/semantic-router/issues/4714) [Bug] CLI unit tests fail on main: the model_catalog window schema rejects the reference configs `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4680](https://github.com/vllm-project/semantic-router/issues/4680) [Bug] Tool observability headers replace a dispatch failure with a request continue `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#4694](https://github.com/vllm-project/semantic-router/issues/4694) [Bug] Docs: the default docs describe a CLI that the stable release doesn't have `bug` `accepted` `wg/developer-experience-ecosystem` `documentation` 💬1
- [#4662](https://github.com/vllm-project/semantic-router/issues/4662) [Bug] Batch classification task_type "all" returns only intent results `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#4667](https://github.com/vllm-project/semantic-router/issues/4667) [Feature] Model runtime: report server-side time so transport and inference can be split `enhancement` `accepted` `wg/router-models-inference-runtime` 💬1
- [#4717](https://github.com/vllm-project/semantic-router/issues/4717) [Bug] RAG retrieval failures interpolate the internal error chain into the client 503 `needs-acceptance` `wg/data-plane-networking`
- [#4728](https://github.com/vllm-project/semantic-router/issues/4728) [Bug] Release: main's source Helm chart defaults to v0.4.0 images and the performance baseline predates the model runtime `bug` `accepted` `owner/maintainers`
- [#4719](https://github.com/vllm-project/semantic-router/issues/4719) [Feature] Router: choose the decision model with vllm-sr serve --decision-model `accepted` `wg/router-models-inference-runtime`
- [#4720](https://github.com/vllm-project/semantic-router/issues/4720) [Bug] Router: /ready reports ready before Router-managed models load, so early requests take the fallback route `bug` `accepted` `wg/router-models-inference-runtime`
- [#4703](https://github.com/vllm-project/semantic-router/issues/4703) [Bug] Model runtime: accept the Router's question fields and document Set and Span requests `bug` `accepted` `wg/router-models-inference-runtime`
- [#4695](https://github.com/vllm-project/semantic-router/issues/4695) [Bug] CLI: dev builds sort below the release they follow, so pip picks the release `bug` `accepted` `wg/developer-experience-ecosystem`
- [#4701](https://github.com/vllm-project/semantic-router/issues/4701) [Bug] CLI: the first standalone run warns about orphaned volumes and talks about Envoy `bug` `accepted` `wg/developer-experience-ecosystem`
- [#4699](https://github.com/vllm-project/semantic-router/issues/4699) [Bug] CLI: a restart-required change through config apply has no guided path `bug` `accepted` `wg/developer-experience-ecosystem`
- [#4698](https://github.com/vllm-project/semantic-router/issues/4698) [Bug] CLI: after config apply, the next vllm-sr serve cuts the CLI off from the Router `bug` `accepted` `wg/developer-experience-ecosystem`
- [#4697](https://github.com/vllm-project/semantic-router/issues/4697) [Bug] Router: the documented modality signal never matches, and nothing says why `bug` `accepted` `wg/mom-routing`
- [#4696](https://github.com/vllm-project/semantic-router/issues/4696) [Bug] CLI: config validate passes documents the Router then refuses `bug` `accepted` `wg/developer-experience-ecosystem`
- [#4700](https://github.com/vllm-project/semantic-router/issues/4700) [Bug] Router: undeclared domain labels match, and the declared other fallback misses `bug` `accepted` `wg/mom-routing`
- [#4690](https://github.com/vllm-project/semantic-router/issues/4690) [Bug] Router: garbage collection keeps standalone mode's p99 high at 32+ concurrent clients `bug` `accepted` `in-progress` `wg/data-plane-networking`
- [#4674](https://github.com/vllm-project/semantic-router/issues/4674) [Feature] Write up backbone-correlation research methodology and results `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#4718](https://github.com/vllm-project/semantic-router/issues/4718) [Bug] Model scores are accepted unvalidated and a NaN score freezes selection
- [#4716](https://github.com/vllm-project/semantic-router/issues/4716) [Bug] Shadow dispatch drops provider auth resolution failures with no server-side trace

#### 🔒 Closed Issues
- [#4654](https://github.com/vllm-project/semantic-router/issues/4654) [Bug] Model runtime: a 5 MiB input grows the embedding runtime by about 1.9 GB
- [#4713](https://github.com/vllm-project/semantic-router/issues/4713) [Bug] Recipes: maintained recipe probes fail live conformance after the Vela 2.0 0.3B default
- [#4709](https://github.com/vllm-project/semantic-router/issues/4709) [Bug] Install: install.sh fails on Ubuntu and Debian hosts with Python but without python3-venv
- [#4710](https://github.com/vllm-project/semantic-router/issues/4710) [Bug] CLI: --target kubernetes commands need a chart directory that pip installs lack, and only serve accepts --chart-dir
- [#4714](https://github.com/vllm-project/semantic-router/issues/4714) [Bug] CLI unit tests fail on main: the model_catalog window schema rejects the reference configs
- [#4667](https://github.com/vllm-project/semantic-router/issues/4667) [Feature] Model runtime: report server-side time so transport and inference can be split
- [#4719](https://github.com/vllm-project/semantic-router/issues/4719) [Feature] Router: choose the decision model with vllm-sr serve --decision-model
- [#4720](https://github.com/vllm-project/semantic-router/issues/4720) [Bug] Router: /ready reports ready before Router-managed models load, so early requests take the fallback route
- [#4703](https://github.com/vllm-project/semantic-router/issues/4703) [Bug] Model runtime: accept the Router's question fields and document Set and Span requests
- [#4695](https://github.com/vllm-project/semantic-router/issues/4695) [Bug] CLI: dev builds sort below the release they follow, so pip picks the release
- [#4701](https://github.com/vllm-project/semantic-router/issues/4701) [Bug] CLI: the first standalone run warns about orphaned volumes and talks about Envoy
- [#4699](https://github.com/vllm-project/semantic-router/issues/4699) [Bug] CLI: a restart-required change through config apply has no guided path
- [#4698](https://github.com/vllm-project/semantic-router/issues/4698) [Bug] CLI: after config apply, the next vllm-sr serve cuts the CLI off from the Router
- [#4697](https://github.com/vllm-project/semantic-router/issues/4697) [Bug] Router: the documented modality signal never matches, and nothing says why
- [#4696](https://github.com/vllm-project/semantic-router/issues/4696) [Bug] CLI: config validate passes documents the Router then refuses
- [#4700](https://github.com/vllm-project/semantic-router/issues/4700) [Bug] Router: undeclared domain labels match, and the declared other fallback misses

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*