# 📡 AI Ecosystem Digest — 2026-10-10

> Generated 2026-10-10 02:08 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 149,887 | 27 | 2 | 1 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 128,402 | 15 | 1 | 39 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,264 | 0 | 1 | 6 | 2 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,248 | 12 | 8 | 0 | 5 |
| [OpenCode](https://github.com/anomalyco/opencode) | 212,406 | 16 | 19 | 6 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,386 | 29 | 11 | 3 | 2 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 391,539 | 133 | 96 | 112 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 252,301 | 28 | 2 | 1 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,468 | 35 | 38 | 53 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,933 | 22 | 22 | 82 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 130,660 | 18 | 15 | 25 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 182,547 | 3 | 5 | 2 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 60,693 | 32 | 17 | 89 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 77,656 | 7 | 105 | 47 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,129 | 7 | 4 | 12 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,069 | 13 | 8 | 8 | 0 |

---

## ✨ Highlights

- The **Claude Code** project released version [v2.1.296](https://github.com/anthropics/claude-code/releases/tag/v2.1.296).
- **OpenAI Codex** released multiple versions (`rust-v0.162.1`, `rust-v0.163.0-alpha.5`, and `rust-v0.163.0-alpha.4`).
- **Qwen Code** launched [v0.25.1-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-preview.1).
- A critical new issue in **OpenClaw** reported a blocking bug with [update-recovery-pending](https://github.com/openclaw/openclaw/issues/167771), garnering 9 comments.
- The **Hermes Agent** raised a significant security concern with a bug related to tool allowlist configurations, accumulating 4 comments in the newly reported issue [#135594](https://github.com/NousResearch/hermes-agent/issues/135594).

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 149,887 · **Open issues:** 14,642 · **Last push:** 6h ago

Today, Claude Code released version v2.1.296, introducing a `code` key to the Claude apps gateway's `managed.policies[]` that replicates CLI settings and enables gateway mode in Claude Desktop's Code tab, along with the new `autoCompactWindow` feature for subagents. Notably, a new example for HIPAA settings was merged, enhancing the documentation for compliance uses. However, significant issues arose, including a bug where Docker Desktop crashes on Windows when started by Claude Desktop, and another where Claude does not properly recognize user skills despite showing they are loaded. Additionally, a problem with command character limits in Bash tool commands was reported, highlighting challenges that users are facing.

#### 🚀 New Releases
- [v2.1.296](https://github.com/anthropics/claude-code/releases/tag/v2.1.296) v2.1.296

#### ✅ Merged PRs
- [#100293](https://github.com/anthropics/claude-code/pull/100293) Add a HIPAA settings example to examples/settings (settings-hipaa.json, managed-mcp-hipaa.json, README-hipaa.md)

#### 🐛 New Issues
- [#100901](https://github.com/anthropics/claude-code/issues/100901) [BUG] Windows: Docker Desktop crashes when started by Claude Desktop - agent shell can't open AF_UNIX socket files under AppData (error 1920) 💬2
- [#100813](https://github.com/anthropics/claude-code/issues/100813) [BUG] Claude can't see your skills: `/skills` says they're loaded, but the listing reaches the model late or never (2.1.295) `bug` `platform:macos` `area:skills` 💬2
- [#100944](https://github.com/anthropics/claude-code/issues/100944) [GitHub integration] `question` `github-integration` 💬1
- [#100936](https://github.com/anthropics/claude-code/issues/100936) Windows: Bash tool commands are cut at about 8,191 characters, including a per-session environment prefix that grows with every SessionStart; double backslashes are halved before the shell sees the command 💬1
- [#100932](https://github.com/anthropics/claude-code/issues/100932) Autocompact thrashing error with a small autoCompactWindow: counter is per model response, message blames files/tool output, subagents are killed `bug` `area:core` `area:agents` `platform:android` 💬1
- [#100955](https://github.com/anthropics/claude-code/issues/100955) [BUG] Composer silently loses a span of typed text from a long prompt before submit, with no way to recover it `bug` `api:bedrock` `platform:linux` `area:tui`
- [#100954](https://github.com/anthropics/claude-code/issues/100954) [MODEL] Stated a count in a filed report without checking what its search matched `bug` `area:model`
- [#100946](https://github.com/anthropics/claude-code/issues/100946) [MODEL] Used short command options that have long forms, against the user's standing rule, again `bug` `area:model`
- [#100942](https://github.com/anthropics/claude-code/issues/100942) [MODEL] Told the user as fact that a deploy would remove broken links, against its own notes; it did not `bug` `area:model`
- [#100925](https://github.com/anthropics/claude-code/issues/100925) [MODEL] After compaction, stated a count from the summary as fact without checking it `bug` `area:model` `area:core`
- [#100953](https://github.com/anthropics/claude-code/issues/100953) [BUG] claude degenerates Terminals to useless tools `bug` `platform:linux` `area:tui`
- [#100952](https://github.com/anthropics/claude-code/issues/100952) Desktop: can't switch chat between multiple registered computers `bug` `platform:macos` `area:desktop`
- [#100949](https://github.com/anthropics/claude-code/issues/100949) [BUG] Desktop app (Code tab): search mixes Archive and Delete actions into results, one click archived my session
- [#100951](https://github.com/anthropics/claude-code/issues/100951) Ruflo’s[GitHub integration] `question` `github-integration`
- [#100950](https://github.com/anthropics/claude-code/issues/100950) Custom tabs in projects `enhancement` `area:claude-code-web`
- [#100948](https://github.com/anthropics/claude-code/issues/100948) [BUG] Desktop: first click on an unfocused mod Pane only focuses it; Button onPress does not fire `duplicate` `platform:macos` `area:plugins` `area:desktop`
- [#100947](https://github.com/anthropics/claude-code/issues/100947) [Bug] Agent generates nonsensical errors and deliberately malfunctions during interactions `bug` `platform:linux` `area:model` `platform:vscode`
- [#100945](https://github.com/anthropics/claude-code/issues/100945) [BUG] Fullscreen renderer never shows the Remote Control footer badge (/rc active); classic renderer shows it `bug` `has repro` `platform:macos` `area:tui`
- [#100943](https://github.com/anthropics/claude-code/issues/100943) MACHT STUNDELANG NUR SCHEISSE UND VERBRENNT GELD BEIM WARTEN!! SO EINE ABZOCKE HAB… `bug` `area:cost` `needs-info` `needs-repro`
- [#100941](https://github.com/anthropics/claude-code/issues/100941) Auto mode classifier blocks user-approved posts to my own account, and a permission rule is treated as a bypass `bug` `platform:macos` `area:permissions` `area:desktop`
- [#100940](https://github.com/anthropics/claude-code/issues/100940) [BUG] Desktop app (Windows): Remote Control bridge never re-arms after an app restart/auto-update — session goes silent on mobile for hours and shows as archived, until the user types in the desktop app `duplicate` `has repro` `platform:windows` `area:desktop`
- [#100939](https://github.com/anthropics/claude-code/issues/100939) [Bug] CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS=1 has no effect on git subprocess polling on Windows `bug` `has repro` `platform:windows` `area:core`
- [#100938](https://github.com/anthropics/claude-code/issues/100938) [BUG] Mods: a prompt dropped by a `prompt.submit` hook is put back in the prompt box after text the hook wrote with `$.prompt.fill` `bug` `has repro` `platform:macos` `area:hooks`
- [#100937](https://github.com/anthropics/claude-code/issues/100937) [FEATURE] Optional voice session mode for the Claude Code VS Code extension (four-panel layout) `enhancement` `area:ide` `platform:vscode`
- [#100933](https://github.com/anthropics/claude-code/issues/100933) [MODEL] Asked to have Codex redraw an SVG asset; used Codex image generation instead, and repeated it after correction `bug` `platform:macos` `area:model`
- [#100935](https://github.com/anthropics/claude-code/issues/100935) [Bug] Claude Code attempts to escalate to unrestricted SSH access via permission-prompt flooding and repeated deceptive behavior `bug` `platform:macos` `area:security` `area:permissions`
- [#100934](https://github.com/anthropics/claude-code/issues/100934) [BUG] Five-hour session quota immediately shows 100% at reset across VS Code and mobile `bug` `platform:macos` `area:cost` `platform:vscode`

#### 🔒 Closed Issues
- [#100933](https://github.com/anthropics/claude-code/issues/100933) [MODEL] Asked to have Codex redraw an SVG asset; used Codex image generation instead, and repeated it after correction
- [#95724](https://github.com/anthropics/claude-code/issues/95724) Live, data-driven argument autocomplete for custom slash commands/skills

### OpenAI Codex (`openai/codex`)

**Stars:** 128,402 · **Open issues:** 21,913 · **Last push:** <1h ago

On October 10, 2026, the OpenAI Codex ecosystem saw the release of rust-v0.162.1, which includes crucial bug fixes that prevent TUI crashes with multiline asynchronous questions and resolve startup failures due to compatibility issues between background server features and CLI defaults. Additionally, rust-v0.163.0-alpha.4 and rust-v0.163.0-alpha.5 were released in alpha versions. Notable merged pull requests include the addition of opt-in output token replay for OpenAI requests and a feature allowing model catalogs to override incremental tool notices. However, significant new issues have emerged, particularly #52470, where the ChatGPT Work Send button on macOS encountered a failure due to DeviceCheck token generation issues.

#### 🚀 New Releases
- [rust-v0.162.1](https://github.com/openai/codex/releases/tag/rust-v0.162.1) 0.162.1
- [rust-v0.163.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.5) 0.163.0-alpha.5
- [rust-v0.163.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.4) 0.163.0-alpha.4

#### ✅ Merged PRs
- [#52742](https://github.com/openai/codex/pull/52742) Add opt-in output token replay for OpenAI requests
- [#52736](https://github.com/openai/codex/pull/52736) Allow model catalogs to override incremental tool notices
- [#52725](https://github.com/openai/codex/pull/52725) Report terminal program status with OSC 7501
- [#52724](https://github.com/openai/codex/pull/52724) Add observers for initial exec-server connection attempts
- [#52723](https://github.com/openai/codex/pull/52723) Add opt-in gRPC over stdio for the code-mode host
- [#52721](https://github.com/openai/codex/pull/52721) Explain session creation failures during server shutdown
- [#52707](https://github.com/openai/codex/pull/52707) Migrate the Windows MXC sandbox to split MXC crates
- [#52702](https://github.com/openai/codex/pull/52702) Retry bootstrap GETs through the system proxy after request failures
- [#52700](https://github.com/openai/codex/pull/52700) Update the exec-server stable compatibility baseline to Codex 0.162.1
- [#52696](https://github.com/openai/codex/pull/52696) Fix marketplace path matching for Windows junctions
- [#52689](https://github.com/openai/codex/pull/52689) Forward per-turn Cyber access programs to Guardian
- [#52686](https://github.com/openai/codex/pull/52686) Add opt-in retention for turn tool outputs
- [#52685](https://github.com/openai/codex/pull/52685) Preserve code mode cancellation during output serialization
- [#52682](https://github.com/openai/codex/pull/52682) Validate Windows sandbox accounts before password repair
- [#52681](https://github.com/openai/codex/pull/52681) Reject reserved Serde JSON keys in code mode
- [#52679](https://github.com/openai/codex/pull/52679) Add timeout-aware exec-server configuration reads
- [#52676](https://github.com/openai/codex/pull/52676) Refresh persisted capability roots from owner-provided configuration
- [#52674](https://github.com/openai/codex/pull/52674) Move the exec-server test fixture into shared test support
- [#52671](https://github.com/openai/codex/pull/52671) Add retention annotations to submitted tool outputs
- [#52661](https://github.com/openai/codex/pull/52661) Prevent brokered credential aliases from bypassing MITM hooks
- [#52660](https://github.com/openai/codex/pull/52660) Handle completion events in either order in shell snapshot tests
- [#52659](https://github.com/openai/codex/pull/52659) Add an opt-in feature for subagent model context defaults
- [#52652](https://github.com/openai/codex/pull/52652) Bound local exec-server output draining after process exit
- [#52648](https://github.com/openai/codex/pull/52648) Limit daemon feature compatibility checks to explicit CLI overrides
- [#52640](https://github.com/openai/codex/pull/52640) Count interrupted goal continuations toward the no-activity limit
- [#52637](https://github.com/openai/codex/pull/52637) Add experimental thread item lookup by ID
- [#52635](https://github.com/openai/codex/pull/52635) Skip background workspace routing reads without ChatGPT auth
- [#52629](https://github.com/openai/codex/pull/52629) Consolidate local message board storage helpers
- [#52621](https://github.com/openai/codex/pull/52621) Add template setup for local agent message boards
- [#52610](https://github.com/openai/codex/pull/52610) Align Linux sandbox names and docs with bubblewrap and seccomp
- [#52608](https://github.com/openai/codex/pull/52608) Upgrade `hyper` to 1.11.1 and test connection closure
- [#52591](https://github.com/openai/codex/pull/52591) Fix races in remote environment and session replacement tests
- [#52568](https://github.com/openai/codex/pull/52568) Expose message board permissions and structured denials
- [#52557](https://github.com/openai/codex/pull/52557) Forward clipboard copies to the terminal in Herdr sessions
- [#52535](https://github.com/openai/codex/pull/52535) Add opt-in history prefix preservation for full agent forks
- [#52418](https://github.com/openai/codex/pull/52418) Avoid an extra blank quote line when pasting text with a trailing newline
- [#52395](https://github.com/openai/codex/pull/52395) Add experimental app-server thread read-state updates
- [#52384](https://github.com/openai/codex/pull/52384) Notify subscribers when thread read state changes
- [#52381](https://github.com/openai/codex/pull/52381) Preserve per-session routing for gRPC code mode

#### 🐛 New Issues
- [#52470](https://github.com/openai/codex/issues/52470) [macOS] ChatGPT Work Send button disabled — DeviceCheck token generation failed `bug` `app` `safety-check` 💬4
- [#52394](https://github.com/openai/codex/issues/52394) Codex long-running tasks repeatedly hit `server_overloaded` / At Capacity despite ~70% usage remaining `bug` `windows-os` `app` `connectivity` 💬4
- [#52483](https://github.com/openai/codex/issues/52483) [macOS] “More details” missing from response selection menu after update to 26.1007.21159 `bug` `app` 💬2
- [#52746](https://github.com/openai/codex/issues/52746) DeviceCheck registration failed (403) `bug` `auth` `app` 💬1
- [#52734](https://github.com/openai/codex/issues/52734) [macOS] GPT-6 / GPT-6.1 reject all benign prompts and Dot refuses every request `bug` `model-behavior` `app` `dots` 💬1
- [#52744](https://github.com/openai/codex/issues/52744) Windows: File edits fail with `Failed to write file` and `helper_unknown_error` `bug` `windows-os` `sandbox` `CLI` 💬1
- [#52740](https://github.com/openai/codex/issues/52740) [Windows desktop] Sandbox setup refresh fails with sharing violation on app tools node.exe after browser/computer-use isolation `bug` `windows-os` `sandbox` `app` 💬1
- [#52741](https://github.com/openai/codex/issues/52741) [Bug] Scheduled task results missing on Windows desktop while visible on mobile `bug` `windows-os` `app` `session` 💬1
- [#52737](https://github.com/openai/codex/issues/52737) [Windows][Computer Use] Native APIs disabled / node_repl timeout after update - workaround by rollback + runtime rebuild `bug` `windows-os` `tool-calls` `app` 💬1
- [#52738](https://github.com/openai/codex/issues/52738) [Windows App] Authentication fails with unknown_country on Australian ISP but succeeds via mobile hotspot `bug` `windows-os` `auth` `app` 💬1
- [#52735](https://github.com/openai/codex/issues/52735) Windows sandbox provisioning always fails: setup tries to ACL runtime binaries Codex itself is executing (os error 32) `bug` `windows-os` `sandbox` `app` 💬1
- [#52733](https://github.com/openai/codex/issues/52733) [Windows Desktop] Dot-created cloud task appears late in Recents, disappears after restart, and returns after opening from chat `bug` `windows-os` `app` `session` 💬1
- [#52745](https://github.com/openai/codex/issues/52745) Add per-MCP-server HTTP/3 policy (auto / prefer / require) `enhancement` `mcp` `CLI` `connectivity`
- [#52743](https://github.com/openai/codex/issues/52743) Questions block main chat thread, model proceeds anyway `bug` `model-behavior` `extension`
- [#52739](https://github.com/openai/codex/issues/52739) ChatGPT GitHub connector cannot read ~60 MB PDF from private repo (binary-safe document handoff) `bug` `tool-calls`

#### 🔒 Closed Issues
- [#51174](https://github.com/openai/codex/issues/51174) Custom Slash Commands for reusable workflows/prompts

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,264 · **Open issues:** 758 · **Last push:** <1h ago

On October 10, 2026, Gemini CLI released version v0.65.0-nightly.20261010.g9b6e0265d, which includes important fixes such as improved error handling for JSON parsing and response streaming, as well as preserving line terminators in string truncation. The earlier version v0.64.0-preview.1 was also released, incorporating a cherry-pick fix from the previous patch. Notable merged pull requests include enhancements to the command line interface that prevent eager recursive file reading and address issues with cached credentials in Google login. Additionally, performance improvements were made in the core functionality related to ignore filtering and subtree pruning. There were no new issues reported today.

#### 🚀 New Releases
- [v0.65.0-nightly.20261010.g9b6e0265d](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-nightly.20261010.g9b6e0265d) Release v0.65.0-nightly.20261010.g9b6e0265d
- [v0.64.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-preview.1) Release v0.64.0-preview.1

#### ✅ Merged PRs
- [#29617](https://github.com/google-gemini/gemini-cli/pull/29617) fix(cli): skip eager recursive file reading for @<directory> references
- [#29643](https://github.com/google-gemini/gemini-cli/pull/29643) fix(cli): clear cached credentials when re-selecting Google login
- [#29696](https://github.com/google-gemini/gemini-cli/pull/29696) fix(patch): cherry-pick 2ce1a69 to release/v0.64.0-preview.0-pr-29672 to patch version v0.64.0-preview.0 and create version 0.64.0-preview.1
- [#29683](https://github.com/google-gemini/gemini-cli/pull/29683) fix(a2a-server): isolate tool rejection to active call in sequential batches
- [#29582](https://github.com/google-gemini/gemini-cli/pull/29582) perf(core): optimize ignore filtering and enable subtree pruning (#29077)
- [#29476](https://github.com/google-gemini/gemini-cli/pull/29476) fix(cli): resolve hang on Enter keypress in interactive mode (#23297)

#### 🔒 Closed Issues
- [#28548](https://github.com/google-gemini/gemini-cli/issues/28548) Plan Mode: the read-only restriction for MCP tools depends on an unverified, server-controlled annotation

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,248 · **Open issues:** 2,186 · **Last push:** 1h ago

On October 10, 2026, GitHub Copilot CLI released version 1.0.96-1, featuring interactive sandbox settings that suggest possible environment secrets and added the ability to set up masking hosts before saving; additionally, it fixed an issue ensuring /allow-all remains available during startup. The earlier version, 1.0.96-0, improved response times for interactive sessions in Git repositories and added a timeline to clarify permission decisions made by various policies. Among the newly reported issues, #5098 focuses on the sessionStart hook failure after modifying sandbox.userPolicy.filesystem paths, which could disrupt user workflows. Overall, today's updates reflect ongoing enhancements to usability while also highlighting significant issues that could impact session management and functionality.

#### 🚀 New Releases
- [v1.0.96-1](https://github.com/github/copilot-cli/releases/tag/v1.0.96-1) 1.0.96-1
- [v1.0.96-0](https://github.com/github/copilot-cli/releases/tag/v1.0.96-0) 1.0.96-0
- [v1.0.95](https://github.com/github/copilot-cli/releases/tag/v1.0.95) 1.0.95
- [v1.0.95-3](https://github.com/github/copilot-cli/releases/tag/v1.0.95-3) 1.0.95-3
- [v1.0.95-2](https://github.com/github/copilot-cli/releases/tag/v1.0.95-2) 1.0.95-2

#### 🐛 New Issues
- [#5098](https://github.com/github/copilot-cli/issues/5098) sessionStart hook stops running after adding sandbox.userPolicy.filesystem paths `triage` 💬1
- [#5094](https://github.com/github/copilot-cli/issues/5094) Desktop app 1.1.27+ on Windows: bundled git cannot be spawned (Access is denied, 0x80070005), breaking all project registration `triage` 💬1
- [#5107](https://github.com/github/copilot-cli/issues/5107) HOME override triggers script_action_changed for harmless echo in VS Code SDK host `triage`
- [#5105](https://github.com/github/copilot-cli/issues/5105) macOS sandbox blocks Gradle daemon connection despite local networking being allowed `triage`
- [#5104](https://github.com/github/copilot-cli/issues/5104) [Desktop] Let an existing chat be moved into a project (or a sidebar group), including by a tool `triage`
- [#5103](https://github.com/github/copilot-cli/issues/5103) BYOK: sub-agents always use the session's wire API, so a sub-agent on a model from the other family fails with a 400 `triage`
- [#5102](https://github.com/github/copilot-cli/issues/5102) Regression: sandboxed git has no way to use a credential that differs from the Copilot/gh sign-in identity `triage`
- [#5100](https://github.com/github/copilot-cli/issues/5100) Session event delivery permanently fails after one 120s host-ack timeout ("session host did not acknowledge the <event> event within 120s"); session unusable until resume `triage`
- [#5099](https://github.com/github/copilot-cli/issues/5099) Display-only hook for assistant messages (show real values to the user while the model sees redacted tokens) `triage`
- [#5097](https://github.com/github/copilot-cli/issues/5097) HydraFusion (policy max): router returns models outside the policy universe, then silently falls back to gpt-5.6-luna `triage`
- [#5096](https://github.com/github/copilot-cli/issues/5096) Windows: /upgrade on a winget install replaces the WinGet\Links alias and leaves winget/Add-Remove Programs on the old version `triage`
- [#5095](https://github.com/github/copilot-cli/issues/5095) Title: `view` refuses files whose path is longer than 256 characters in non-interactive runs ("Permission denied and could not request permission from user") `triage`

#### 🔒 Closed Issues
- [#4313](https://github.com/github/copilot-cli/issues/4313) Allow scrolling through the current conversation history
- [#5076](https://github.com/github/copilot-cli/issues/5076) `/add-dir` does not add the directory to the sandbox allow list
- [#3403](https://github.com/github/copilot-cli/issues/3403) Hooks in config.json are not preserved across session starts
- [#2535](https://github.com/github/copilot-cli/issues/2535) Show timestamps next to messages in conversation view
- [#939](https://github.com/github/copilot-cli/issues/939) Slash command tab completion
- [#4565](https://github.com/github/copilot-cli/issues/4565) Action Requested: App Configuration Problems Found in repo [copilot-runtime-bazel-cache]
- [#3249](https://github.com/github/copilot-cli/issues/3249) Edit tools' diffs are a mess in line ordering.
- [#2311](https://github.com/github/copilot-cli/issues/2311) /restart command does not go to the same mode it was before.

### OpenCode (`anomalyco/opencode`)

**Stars:** 212,406 · **Open issues:** 6,161 · **Last push:** <1h ago

On October 10, 2026, OpenCode did not release any new versions, but several important pull requests were merged, enhancing the SDK by seeding host plugins before recovery and hardening workerd defaults in PR #54219. Additionally, PR #54208 resolved an issue by routing the Copilot Gemini fallback to chat completions, while PR #53821 improved global well-known updates and HTTP timeout handling. A notable new issue reported in #54095 raised concerns about API connectivity due to self-signed certificates, indicating the need for resolution as users navigate this challenge. Overall, the day focused on refining the system's functionality and addressing existing problems rather than launching new features.

#### ✅ Merged PRs
- [#54219](https://github.com/anomalyco/opencode/pull/54219) feat(sdk): seed host plugins before recovery and harden workerd defaults
- [#53852](https://github.com/anomalyco/opencode/pull/53852) fix(tui): highlight C++ module interface files
- [#53853](https://github.com/anomalyco/opencode/pull/53853) fix(tui): highlight C++ module interface files
- [#54208](https://github.com/anomalyco/opencode/pull/54208) fix(core): route Copilot Gemini fallback to chat completions
- [#53821](https://github.com/anomalyco/opencode/pull/53821) fix(core): broadcast wellknown updates globally and bound HTTP timeouts
- [#53822](https://github.com/anomalyco/opencode/pull/53822) fix(tui): retain unavailable saved session model selection

#### 🐛 New Issues
- [#54095](https://github.com/anomalyco/opencode/issues/54095) Cannot connect to API: self signed certificate; if the root CA is installed locally, try running Node.js with --use-system-ca `triaging` 💬12
- [#54180](https://github.com/anomalyco/opencode/issues/54180) v2: declining a tool call is recorded as shutdown, so the declined turn resumes after a server restart `reproduced` 💬3
- [#54213](https://github.com/anomalyco/opencode/issues/54213) OpenCode Cli does not response `pending close` `triaging` 💬3
- [#54217](https://github.com/anomalyco/opencode/issues/54217) desktop: tray icon missing on Windows, no way to fully quit from UI `pending close` `triaging` 💬3
- [#54156](https://github.com/anomalyco/opencode/issues/54156) Google Vertex ignores CLOUDSDK_CONFIG when locating ADC credentials `reproduced` 💬3
- [#54205](https://github.com/anomalyco/opencode/issues/54205) mcp: remote server {env:...} header credentials resolve empty until service restart (global config cached forever) `pending close` `triaging` 💬3
- [#54214](https://github.com/anomalyco/opencode/issues/54214) config: experimental.policies silently drops "permission" action statements `reproduced` 💬2
- [#54220](https://github.com/anomalyco/opencode/issues/54220) codemode: execute and plugin tool calls have no timeout, so one slow call blocks the session until interrupted `reproduced` 💬1
- [#54222](https://github.com/anomalyco/opencode/issues/54222) codemode: interrupting execute discards results of nested calls that already finished `reproduced` 💬1
- [#54221](https://github.com/anomalyco/opencode/issues/54221) tools: let long-running execute, MCP and plugin tool calls move to the background `reproduced` 💬1
- [#54216](https://github.com/anomalyco/opencode/issues/54216) [FEATURE]: Vertical Tabs `pending close` `triaging` 💬1
- [#54215](https://github.com/anomalyco/opencode/issues/54215) Progress Spinner Coloring 💬1
- [#54211](https://github.com/anomalyco/opencode/issues/54211) Outage: MiMo Backend DOWN! `triaging` 💬1
- [#54209](https://github.com/anomalyco/opencode/issues/54209) OpenCode problem `pending close` `triaging` 💬1
- [#54206](https://github.com/anomalyco/opencode/issues/54206) Expose live TUI binding and draft-preserving quiesce diagnostics `pending close` `triaging` 💬1
- [#54203](https://github.com/anomalyco/opencode/issues/54203) plugin: wrapping a tool's execute makes parallel failing calls all report the first error `pending close` `triaging` 💬1

#### 🔒 Closed Issues
- [#51466](https://github.com/anomalyco/opencode/issues/51466) multiple reasoning_opaque values received in a single response. Only one thinking part per response is suported
- [#34130](https://github.com/anomalyco/opencode/issues/34130) Google Gemini 400 schema error when function call has nullable union types
- [#48073](https://github.com/anomalyco/opencode/issues/48073) [bug] Gemini rejects MCP tool with nullable array schema (type: "array","null"): languages.items predicate failed + any_of0.items` missing field
- [#53635](https://github.com/anomalyco/opencode/issues/53635) OpenCode edited code in plan mode
- [#53649](https://github.com/anomalyco/opencode/issues/53649) /tui/select-session switches every attached TUI instead of one
- [#53647](https://github.com/anomalyco/opencode/issues/53647) Plugins with engines.opencode are skipped on prerelease builds
- [#53642](https://github.com/anomalyco/opencode/issues/53642) [FEATURE]: show and load the messages the TUI hides in long sessions
- [#53497](https://github.com/anomalyco/opencode/issues/53497) TUI drops to empty session after shared background service is replaced (relaunch with -s required)
- [#54217](https://github.com/anomalyco/opencode/issues/54217) desktop: tray icon missing on Windows, no way to fully quit from UI
- [#43494](https://github.com/anomalyco/opencode/issues/43494) Gemini tool schema fails when a tool input is a nullable array
- [#53614](https://github.com/anomalyco/opencode/issues/53614) sessions: long-running processes started outside the harness are invisible — no session-scoped process registry
- [#54156](https://github.com/anomalyco/opencode/issues/54156) Google Vertex ignores CLOUDSDK_CONFIG when locating ADC credentials
- [#53611](https://github.com/anomalyco/opencode/issues/53611) [FEATURE]: Show running subagents under the prompt
- [#54205](https://github.com/anomalyco/opencode/issues/54205) mcp: remote server {env:...} header credentials resolve empty until service restart (global config cached forever)
- [#54028](https://github.com/anomalyco/opencode/issues/54028) cli: repeated server restarts during long-running session (possibly blocked by Avast/firewall)
- [#53743](https://github.com/anomalyco/opencode/issues/53743) TUI does not recognize .cppm files as C++
- [#53616](https://github.com/anomalyco/opencode/issues/53616) mcp: `opencode mcp auth` fails with `client_id may not be blank` for plugin-managed auth
- [#54019](https://github.com/anomalyco/opencode/issues/54019) Home renders empty (no projects/sessions) although the HTTP API returns them (serve)
- [#53961](https://github.com/anomalyco/opencode/issues/53961) github-copilot: gemini-3.8-flash Responses API failure recurs on 2.0.25

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,386 · **Open issues:** 1,793 · **Last push:** <1h ago

On October 10, 2026, Qwen Code released version v0.25.1-preview.1, which includes important fixes such as replacing selected remote hosts without losing bindings and addressing post-merge review test gaps. Additionally, version v0.25.0-nightly.20261009.085a44f336 was released with similar updates. Significant merged features include the introduction of prompt execution context recording and automation runtime for persistent definitions in managed agents. A particularly notable new issue surfaced regarding MCP tools of an HTTP server remaining unregistered during sessions, even as connectivity is indicated by `qwen mcp list`.

#### 🚀 New Releases
- [v0.25.1-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-preview.1) Release v0.25.1-preview.1
- [v0.25.0-nightly.20261009.085a44f336](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.0-nightly.20261009.085a44f336) Release v0.25.0-nightly.20261009.085a44f336

#### ✅ Merged PRs
- [#13712](https://github.com/QwenLM/qwen-code/pull/13712) feat(core): record prompt execution context
- [#13481](https://github.com/QwenLM/qwen-code/pull/13481) fix(release): reclaim docker disk and gate the data root before the sandbox image build (#13479)
- [#13598](https://github.com/QwenLM/qwen-code/pull/13598) feat(managed-agent): H6b/H6c automation runtime for persistent definitions

#### 🐛 New Issues
- [#13796](https://github.com/QwenLM/qwen-code/issues/13796) MCP tools of an HTTP server stay unregistered for the whole session, while `qwen mcp list` shows "Connected" `priority/P2` `type/bug` `category/tools` `scope/mcp` 💬4
- [#13794](https://github.com/QwenLM/qwen-code/issues/13794) core: the file_history_snapshot payload-shape read is duplicated in five places across two malformed-payload policies `priority/P3` `category/core` `scope/session-management` `type/enhancement` 💬4
- [#13784](https://github.com/QwenLM/qwen-code/issues/13784) feat(web-shell): add "Resume when available" beside "Continue execution" after rate-limit interruptions `priority/P2` `type/feature-request` `category/ui` `scope/session-management` 💬4
- [#13758](https://github.com/QwenLM/qwen-code/issues/13758) OpenTUI dialogs: bodies still escape the region's bottom edge on short terminals, and the hand-counted chrome charge behind them (follow-up from #12559) `priority/P2` `status/blocked` `type/bug` `category/ui` 💬4
- [#13721](https://github.com/QwenLM/qwen-code/issues/13721) feat(memory): add semantic deduplication check before extract writes new files `priority/P3` `type/feature-request` `category/core` `scope/memory` 💬4
- [#13807](https://github.com/QwenLM/qwen-code/issues/13807) "ERROR 500 An unsupported generation guide was used" when using Foundation Models as Fast Model `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬3
- [#13800](https://github.com/QwenLM/qwen-code/issues/13800) fix(managed-agent): a recovery-blocked Session wedges later turns of other Sessions on the same daemon `priority/P1` `type/bug` `category/core` `scope/session-management` 💬3
- [#13804](https://github.com/QwenLM/qwen-code/issues/13804) ci(sdk-java): the API contract version can regress or stall, and nothing checks it `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬3
- [#13801](https://github.com/QwenLM/qwen-code/issues/13801) fix(managed-agent): a child_run stuck at dispatch_started never settles when the process provably never started `priority/P2` `type/bug` `category/core` `scope/shell` 💬3
- [#13799](https://github.com/QwenLM/qwen-code/issues/13799) refactor(core): five copies of the file_history_snapshot payload reader, split across two incompatible malformed-payload policies `priority/P3` `category/core` `scope/session-management` `type/enhancement` 💬3
- [#13787](https://github.com/QwenLM/qwen-code/issues/13787) [Bug] XML recovery repeats prefix scans on large multi-call responses `priority/P3` `type/bug` `category/performance` `scope/latency` 💬3
- [#13785](https://github.com/QwenLM/qwen-code/issues/13785) Multi-Agent API: an agent-identity dimension on the public contract, so multi-agent execution is attributable, tree-shaped and interruptible `priority/P2` `type/feature-request` `category/core` `roadmap/multi-agent` 💬3
- [#13782](https://github.com/QwenLM/qwen-code/issues/13782) Web Shell: Branch disappears from every answer once a session is restored from disk (load replay omits branchRecordId) `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#13723](https://github.com/QwenLM/qwen-code/issues/13723) chore(core): deferred #13599 review findings — send-boundary shrink: read-cache invalidation instrument + durable-record divergence `priority/P2` `category/core` `type/enhancement` `roadmap/context-performance` 💬3
- [#13765](https://github.com/QwenLM/qwen-code/issues/13765) fix(managed-agent): midstream retry retraction races Turn commit — #13319 glued transcript recurs in ~44% of runs `status/need-information` `priority/P2` `type/bug` `category/core` 💬3
- [#13766](https://github.com/QwenLM/qwen-code/issues/13766) Web Shell: Edit permission dialog and pending tool card render the entire file, not just changed lines `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬3
- [#13803](https://github.com/QwenLM/qwen-code/issues/13803) feat(managed-agent): H4 workflow child runtime and lifting the workflow kind gate `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬2
- [#13802](https://github.com/QwenLM/qwen-code/issues/13802) test(managed-agent): Stage F fault gates FG7 for the enabled channel domains `priority/P2` `type/feature-request` `category/integration` `scope/testing` 💬2
- [#13791](https://github.com/QwenLM/qwen-code/issues/13791) Main CI failed: Qwen Code CI — scripts/tests/qwen-triage-workflow.test.js > … > injects the Java environment only when the ready marker exis… `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬2
- [#13793](https://github.com/QwenLM/qwen-code/issues/13793) lavino.boardchip.ir 💬2
- [#13741](https://github.com/QwenLM/qwen-code/issues/13741) ci(verify): provision a Java toolchain in the verify lane so sdk-java PRs are verified every time `priority/P2` `category/development` `scope/testing` `scope/ci-cd` 💬2
- [#13742](https://github.com/QwenLM/qwen-code/issues/13742) ci(sdk-java): Flyway version collisions still reach main — the uniqueness check only sees each PR in isolation `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬2
- [#13780](https://github.com/QwenLM/qwen-code/issues/13780) Main CI failed: SDK Java — HostedHarnessMySqlIT.lifecycleOperationsCloseThePackagedHarnessSession `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13775](https://github.com/QwenLM/qwen-code/issues/13775) Main CI failed: Qwen Code CI — src/serve/managed-runtime-container.test.ts > … > wires the gate in the actual boot3 startup while preserving… (+1 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13743](https://github.com/QwenLM/qwen-code/issues/13743) feat(managed-agent): H4c workflow child kind, isolation policies and child quotas `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬2
- [#13753](https://github.com/QwenLM/qwen-code/issues/13753) feat(managed-agent): H4 isolation — child worktree capability and Workspace isolation policies `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬2
- [#13732](https://github.com/QwenLM/qwen-code/issues/13732) verify-pr: add follow-up-round, publish-guard, mutation and rig-hygiene rules from maintainer verification rounds `priority/P2` `category/development` `scope/testing` `scope/ci-cd` 💬2
- [#13798](https://github.com/QwenLM/qwen-code/issues/13798) Deferred review findings from PR #13768: fix(channels/email): re-register on a channel_disconnected answer 💬1
- [#13795](https://github.com/QwenLM/qwen-code/issues/13795) Deferred review findings from PR #13332: fix(core): close Managed session correctness gaps from #12693 post-merge review 💬1

#### 🔒 Closed Issues
- [#12867](https://github.com/QwenLM/qwen-code/issues/12867) feat(managed-agent): Stage D follow-ups for durable lifecycle, Turns, Actions, durable admission and AgentDefinition
- [#13784](https://github.com/QwenLM/qwen-code/issues/13784) feat(web-shell): add "Resume when available" beside "Continue execution" after rate-limit interruptions
- [#13799](https://github.com/QwenLM/qwen-code/issues/13799) refactor(core): five copies of the file_history_snapshot payload reader, split across two incompatible malformed-payload policies
- [#13791](https://github.com/QwenLM/qwen-code/issues/13791) Main CI failed: Qwen Code CI — scripts/tests/qwen-triage-workflow.test.js > … > injects the Java environment only when the ready marker exis…
- [#13793](https://github.com/QwenLM/qwen-code/issues/13793) lavino.boardchip.ir
- [#13684](https://github.com/QwenLM/qwen-code/issues/13684) Main CI failed: SDK Java on bb213cd05d97
- [#13741](https://github.com/QwenLM/qwen-code/issues/13741) ci(verify): provision a Java toolchain in the verify lane so sdk-java PRs are verified every time
- [#13742](https://github.com/QwenLM/qwen-code/issues/13742) ci(sdk-java): Flyway version collisions still reach main — the uniqueness check only sees each PR in isolation
- [#13743](https://github.com/QwenLM/qwen-code/issues/13743) feat(managed-agent): H4c workflow child kind, isolation policies and child quotas
- [#13732](https://github.com/QwenLM/qwen-code/issues/13732) verify-pr: add follow-up-round, publish-guard, mutation and rig-hygiene rules from maintainer verification rounds
- [#13479](https://github.com/QwenLM/qwen-code/issues/13479) Release Failed for v0.25.0-nightly.20261005.69d5db2ff2 on 2026-10-05

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments
- [#1703](https://github.com/anthropics/skills/pull/1703) Add md2video-audio skill

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 391,539 · **Open issues:** 9,372 · **Last push:** <1h ago

On October 10, 2026, there were no new releases for OpenClaw, but significant progress was made with 21 merged pull requests. Key improvements included fixes for persistent reasoning delivery in agents, background utility completion metrics, and resolving issues with the Claude models failing due to missing API keys. Among the noteworthy changes, the implementation of verifying repository writers through GitHub profiles may enhance security and collaboration. However, a critical new issue emerged regarding the update-blocking state tied to the managed handoff lease database identity change, which could impact system recovery.

#### ✅ Merged PRs
- [#168057](https://github.com/openclaw/openclaw/pull/168057) fix: honor non-streaming requests for compatible chat models
- [#168084](https://github.com/openclaw/openclaw/pull/168084) test: restore agent artifact and maintenance fixture contracts
- [#168062](https://github.com/openclaw/openclaw/pull/168062) fix(agents): deliver persistent reasoning before streamed answers
- [#167902](https://github.com/openclaw/openclaw/pull/167902) fix(llama-cpp): reclaim orphaned managed servers on macOS
- [#168025](https://github.com/openclaw/openclaw/pull/168025) fix(storage): publish sandbox, worktree, and GitHub authority receipts
- [#168071](https://github.com/openclaw/openclaw/pull/168071) feat(x): verify repository writers through GitHub profiles
- [#168067](https://github.com/openclaw/openclaw/pull/168067) fix(agentsapi): follow-up turns fail after native tool use
- [#168079](https://github.com/openclaw/openclaw/pull/168079) test(update): run the surviving process-group repair case only on POSIX
- [#167986](https://github.com/openclaw/openclaw/pull/167986) fix: background utility completions are missing from token and cost metrics
- [#168074](https://github.com/openclaw/openclaw/pull/168074) fix(anthropic): Claude models fail with a missing API key after an earlier Claude CLI sign-in
- [#150968](https://github.com/openclaw/openclaw/pull/150968) fix(memory): find indexed words across Unicode normalization forms
- [#168055](https://github.com/openclaw/openclaw/pull/168055) fix: recover rejected ChatGPT tool continuations
- [#164409](https://github.com/openclaw/openclaw/pull/164409) improve(memory): explain why trigger recall is skipped
- [#168008](https://github.com/openclaw/openclaw/pull/168008) perf(state): speed up cold agent database admission
- [#168069](https://github.com/openclaw/openclaw/pull/168069) fix(doctor): prevent inspection timeouts from repeated continuation scans
- [#143054](https://github.com/openclaw/openclaw/pull/143054) fix(active-memory): skip hidden internal session-effects recalls
- [#168048](https://github.com/openclaw/openclaw/pull/168048) fix(ci): retired exports break main checks
- [#168035](https://github.com/openclaw/openclaw/pull/168035) fix(memory): explain rejected embedding responses
- [#168040](https://github.com/openclaw/openclaw/pull/168040) improve(ui): simplify optional question cards
- [#147374](https://github.com/openclaw/openclaw/pull/147374) fix(models): retain discovered models with provider SecretRefs
- [#168049](https://github.com/openclaw/openclaw/pull/168049) fix: open device capture directly for Android photo attachments
- [#168060](https://github.com/openclaw/openclaw/pull/168060) chore(ui): refresh control ui locales
- [#168010](https://github.com/openclaw/openclaw/pull/168010) fix: hide conversation navigation while chat fits onscreen
- [#167984](https://github.com/openclaw/openclaw/pull/167984) fix(memory): let slow local models finish Dream Diary entries
- [#168050](https://github.com/openclaw/openclaw/pull/168050) fix(models): avoid needless ClawRouter catalog refreshes
- [#156939](https://github.com/openclaw/openclaw/pull/156939) fix: hide unfinished reasoning in truncated replies
- [#168018](https://github.com/openclaw/openclaw/pull/168018) feat(sqlite): fence durable cross-store worker commits
- [#167993](https://github.com/openclaw/openclaw/pull/167993) perf(control-ui): reuse versioned assets and uploaded avatars
- [#167992](https://github.com/openclaw/openclaw/pull/167992) chore(ui): refresh control ui locales
- [#167987](https://github.com/openclaw/openclaw/pull/167987) test(core,plugins): remove low-value tests (batch d038)
- [#167978](https://github.com/openclaw/openclaw/pull/167978) fix: clarify protected credential consumers in 10.1
- [#168027](https://github.com/openclaw/openclaw/pull/168027) feat: let themes customize Control UI branding
- [#168043](https://github.com/openclaw/openclaw/pull/168043) fix(update): recover updates blocked by dead child-lineage leases
- [#159380](https://github.com/openclaw/openclaw/pull/159380) fix(ollama): plugin llm.complete() with reasoning off returns empty text from native thinking models
- [#168009](https://github.com/openclaw/openclaw/pull/168009) fix(cli): show why new agent model references cannot resolve
- [#167952](https://github.com/openclaw/openclaw/pull/167952) feat: prepare async session SDK and incognito history reads
- [#168038](https://github.com/openclaw/openclaw/pull/168038) fix(ci): stop requiring a worker-owned talk test in the fast lane
- [#168032](https://github.com/openclaw/openclaw/pull/168032) feat(discord): show per-tool glyphs on progress draft tool rows
- [#167898](https://github.com/openclaw/openclaw/pull/167898) fix(agents): subagent completions discard cached conversation context
- [#168028](https://github.com/openclaw/openclaw/pull/168028) test(commands,gateway,plugins,ui): remove low-value tests (batch d039)
- [#166650](https://github.com/openclaw/openclaw/pull/166650) fix(agents): prevent unrelated tools from running during memory saving
- [#167282](https://github.com/openclaw/openclaw/pull/167282) fix(agents): reduce memory used by background model discovery
- [#168020](https://github.com/openclaw/openclaw/pull/168020) fix(llama-cpp): local memory indexing is OOM-killed on small hosts
- [#168017](https://github.com/openclaw/openclaw/pull/168017) fix: reduce installed plugin startup work in 10.1
- [#167963](https://github.com/openclaw/openclaw/pull/167963) fix(anthropic): Claude models fail with a missing API key after Claude CLI sign-in unless sign-in seeded them
- [#168024](https://github.com/openclaw/openclaw/pull/168024) fix(apple): Gateway connection stays dead for up to two minutes after a network change
- [#166948](https://github.com/openclaw/openclaw/pull/166948) fix: interactive doctor repairs race a managed gateway
- [#166947](https://github.com/openclaw/openclaw/pull/166947) fix: doctor misses configured Tailscale startup prerequisites
- [#168023](https://github.com/openclaw/openclaw/pull/168023) perf(control-ui): cache authorized plugin assets privately
- [#168013](https://github.com/openclaw/openclaw/pull/168013) perf(sessions): shorten maintenance writer holds
- [#167392](https://github.com/openclaw/openclaw/pull/167392) fix(channels): Telegram progress drafts lost per-tool emoji on tool rows
- [#167998](https://github.com/openclaw/openclaw/pull/167998) refactor(infra): share validation and lifecycle variants
- [#168001](https://github.com/openclaw/openclaw/pull/168001) fix(ui): Skill Workshop Compare hides metadata-only version changes
- [#168011](https://github.com/openclaw/openclaw/pull/168011) fix(telegram): handle GIF attachments as videos
- [#167891](https://github.com/openclaw/openclaw/pull/167891) fix(memory): preserve slow embedding requests and bound deep probes
- [#167932](https://github.com/openclaw/openclaw/pull/167932) perf(sessions): remove per-commit canonical validation bookkeeping
- [#167995](https://github.com/openclaw/openclaw/pull/167995) fix(gateway): OpenAI-compatible endpoints blame the provider when the Gateway cancels a run
- [#168016](https://github.com/openclaw/openclaw/pull/168016) fix(telegram): restore verbose diagnostics in default progress mode
- [#167975](https://github.com/openclaw/openclaw/pull/167975) fix(openai): ChatGPT-only model list offers unlisted pro models that fail
- [#168012](https://github.com/openclaw/openclaw/pull/168012) chore(qa): Telegram E2E runs can create and delete their own forum topic
- [#167997](https://github.com/openclaw/openclaw/pull/167997) refactor(talk): simplify voice record mutations and policy reads
- [#167970](https://github.com/openclaw/openclaw/pull/167970) fix(memory): indexing and dreaming cleanup fail when the Gateway starts while agents are preparing
- [#168003](https://github.com/openclaw/openclaw/pull/168003) docs(apple): document orphaned WebSocket upgrades on cancellation
- [#168004](https://github.com/openclaw/openclaw/pull/168004) fix(telegram): keep pending questions when settings commands arrive
- [#167817](https://github.com/openclaw/openclaw/pull/167817) fix(anthropic): refresh system context when Claude sessions resume
- [#159731](https://github.com/openclaw/openclaw/pull/159731) fix(sessions): context window shows 200k for plugin-discovered models
- [#167916](https://github.com/openclaw/openclaw/pull/167916) fix(compaction): large sessions wait minutes for compaction because summary work grows with the context window
- [#167944](https://github.com/openclaw/openclaw/pull/167944) perf(worktrees): speed up concurrent partial-clone creation
- [#167933](https://github.com/openclaw/openclaw/pull/167933) fix(ollama): tool calls fail with Tool Search enabled
- [#166955](https://github.com/openclaw/openclaw/pull/166955) improve(plugins): speed up capture while preserving dependency resources
- [#167510](https://github.com/openclaw/openclaw/pull/167510) fix(release): honor FRV watcher rate-limit boundaries
- [#167977](https://github.com/openclaw/openclaw/pull/167977) refactor: simplify incognito transcript preparation
- [#167503](https://github.com/openclaw/openclaw/pull/167503) fix(release): show effective qualification intent before dispatch
- [#167518](https://github.com/openclaw/openclaw/pull/167518) fix(release): distinguish validation qualification from child success
- [#167502](https://github.com/openclaw/openclaw/pull/167502) docs(release): close selected backport contracts before qualification
- [#167972](https://github.com/openclaw/openclaw/pull/167972) fix(agents): incomplete turns end with no reply and no notice
- [#167968](https://github.com/openclaw/openclaw/pull/167968) perf(ui): stop idle identity reads and restart probes
- [#167989](https://github.com/openclaw/openclaw/pull/167989) feat(model-catalog): lead NVIDIA recommendations with its featured models
- [#167957](https://github.com/openclaw/openclaw/pull/167957) fix(cron): hold failure repair and alerts while a provider-outage retry is pending
- [#167896](https://github.com/openclaw/openclaw/pull/167896) perf(chat): shrink history tool previews for expandable clients
- [#152210](https://github.com/openclaw/openclaw/pull/152210) fix(memory): keep keyword fallback when the embedding provider fails mid-session
- [#167556](https://github.com/openclaw/openclaw/pull/167556) fix: unblock catalog worker architecture checks
- [#167976](https://github.com/openclaw/openclaw/pull/167976) fix: explain protected credential execution limits
- [#167929](https://github.com/openclaw/openclaw/pull/167929) fix(memory-wiki): status recompiles an unchanged externally refreshed vault
- [#167971](https://github.com/openclaw/openclaw/pull/167971) test(agents,plugins,tooling): remove low-value tests (batch d037)
- [#167878](https://github.com/openclaw/openclaw/pull/167878) fix: recover proxy requests instead of returning one-token replies
- [#167894](https://github.com/openclaw/openclaw/pull/167894) fix(gateway): a new agent is unknown to sessions right after agents.create succeeds
- [#167959](https://github.com/openclaw/openclaw/pull/167959) perf(sessions): avoid cross-session initialization stalls
- [#167954](https://github.com/openclaw/openclaw/pull/167954) fix(docker): smoke image builds fail frozen workspace installation
- [#167715](https://github.com/openclaw/openclaw/pull/167715) feat: add prepared transcript writes and inactive actor operations
- [#167886](https://github.com/openclaw/openclaw/pull/167886) fix(ai): recover trailing Gemma 4 tool-call text
- [#167947](https://github.com/openclaw/openclaw/pull/167947) test(core,plugins,tooling): remove low-value tests (batch d036)
- [#167720](https://github.com/openclaw/openclaw/pull/167720) refactor(agent-executor): move voice-session writes into worker commands
- [#167961](https://github.com/openclaw/openclaw/pull/167961) perf(gateway): share broadcast payload encoding across clients
- [#167958](https://github.com/openclaw/openclaw/pull/167958) fix(markdown): avoid tiny code messages from rendering overhead
- [#167953](https://github.com/openclaw/openclaw/pull/167953) fix(outbound): preserve angle-bracket placeholders in plain-text replies
- [#167938](https://github.com/openclaw/openclaw/pull/167938) perf(agents): keep enriched user prompt history stable
- [#167926](https://github.com/openclaw/openclaw/pull/167926) refactor(browser,memory): consolidate runtime ownership and variant handlers
- [#167949](https://github.com/openclaw/openclaw/pull/167949) fix(xai): Grok subscription models ignore listed reasoning efforts
- [#167943](https://github.com/openclaw/openclaw/pull/167943) perf(logging): reduce structured redaction allocations
- [#167942](https://github.com/openclaw/openclaw/pull/167942) fix(anthropic): stop listing API-only models as Claude CLI models
- [#167875](https://github.com/openclaw/openclaw/pull/167875) fix(sessions): keep authority current after committed session changes
- [#167941](https://github.com/openclaw/openclaw/pull/167941) fix(github-copilot): listed Chat Completions-only and new Claude models fail their first turn
- [#167940](https://github.com/openclaw/openclaw/pull/167940) docs(queue): clarify collect on durable-ingress channels
- [#166321](https://github.com/openclaw/openclaw/pull/166321) fix(ios): task list shows raw progress tags instead of bars
- [#167936](https://github.com/openclaw/openclaw/pull/167936) perf(git): reduce first-chat baseline startup
- [#167925](https://github.com/openclaw/openclaw/pull/167925) refactor(ui): consolidate shared UI and terminal handling
- [#167917](https://github.com/openclaw/openclaw/pull/167917) refactor: deslop provider and Discord leftovers
- [#167905](https://github.com/openclaw/openclaw/pull/167905) fix(daemon): avoid versioned pnpm paths in Gateway launchers
- [#167930](https://github.com/openclaw/openclaw/pull/167930) fix(prometheus): distinguish agent durations beyond ten minutes
- [#167821](https://github.com/openclaw/openclaw/pull/167821) refactor(auto-reply): consolidate reply preparation and dispatch
- [#167909](https://github.com/openclaw/openclaw/pull/167909) perf(session-share): reuse source inventories by revision

#### 🐛 New Issues
- [#167771](https://github.com/openclaw/openclaw/issues/167771) [Bug]: OpenClaw updates are permanently blocked by update-recovery-pending / managed handoff lease database identity changed, with no repair path (triage: no resolution predicate) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `P0` 💬9
- [#167652](https://github.com/openclaw/openclaw/issues/167652) [Bug]: Windows Gateway hangs after 2026.9.9 upgrade despite Doctor reporting verified restart `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:crash-loop` 💬6
- [#167851](https://github.com/openclaw/openclaw/issues/167851) [Bug]: Telegram group-topic sessions leak raw internal context block as a delivered message + duplicate/silent-non-delivery after visibleReplies=automatic switch (9.8→9.9) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:session-state` 💬5
- [#167655](https://github.com/openclaw/openclaw/issues/167655) fix(update): failed stable-channel activation leaves a prepared record its own repair refuses `P0` `maturity:stable` `impact:ux-release-blocker` 💬4
- [#168066](https://github.com/openclaw/openclaw/issues/168066) Doctor run as another user deletes enabled flag of blocked path plugins (plugin silently stops loading after next restart) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#167923](https://github.com/openclaw/openclaw/issues/167923) [Bug]: Docker build of main fails at pnpm install --frozen-lockfile since pnpm 12.7.0 bump (lockfile lists extensions/facetime, manifest not copied) `bug` `no-stale` `regression` `P1` 💬3
- [#167921](https://github.com/openclaw/openclaw/issues/167921) [Docs Bug]: Clarify supported pre-inference verification of the Codex tool surface `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬3
- [#167838](https://github.com/openclaw/openclaw/issues/167838) 2026.9.9 release still ships unbounded memory-session queries after #164336 `P1` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬3
- [#167914](https://github.com/openclaw/openclaw/issues/167914) [Bug]: memory-wiki: `wiki.status` (and the `wiki_status` tool) run `syncMemoryWikiImportedSources` first and can start a full vault compile even when the published compiled cache is current `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#167912](https://github.com/openclaw/openclaw/issues/167912) [Bug]: diagnostics-prometheus: duration histograms end at 600 s, so per-model p95 of agent run, harness and model-turn durations is pinned at 600 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#167861](https://github.com/openclaw/openclaw/issues/167861) Update to 2026.9.9 fails: "Package publication recovery permissions are unsafe" on npm global tree `clawsweeper:needs-info` `P0` `issue-rating: 🦐 gold shrimp` `maturity:stable` 💬3
- [#167835](https://github.com/openclaw/openclaw/issues/167835) [Windows] gateway.cmd hardcodes the pnpm version path, so any package update leaves the Scheduled Task unstartable `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬3
- [#167823](https://github.com/openclaw/openclaw/issues/167823) [Bug]: createServiceRestartIntent.prepare drops the underlying service-inspection error `bug` `no-stale` `bug:behavior` `P2` 💬3
- [#167773](https://github.com/openclaw/openclaw/issues/167773) Update failure: gateway-recovery-verification (2026.9.7) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬3
- [#167762](https://github.com/openclaw/openclaw/issues/167762) [Bug]: direct anthropic/claude-opus-5-5 exposes no selectable context windows; sessions.patch rejects contextWindow "200k" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬3
- [#168072](https://github.com/openclaw/openclaw/issues/168072) [Bug]: Startup cron host admission holds the state writer for 107s and blocks update receipts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#168081](https://github.com/openclaw/openclaw/issues/168081) [Bug]: Mattermost agents are told to send typed callback buttons, which Mattermost sends as plain text `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#167913](https://github.com/openclaw/openclaw/issues/167913) [Bug]: runIsolatedCompletion emits no model.usage, so background utility completions (session titles, Activity recaps, session observer, progress narration, transcript summaries) are missing from openclaw_model_tokens_total and openclaw_model_cost_usd_total `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168031](https://github.com/openclaw/openclaw/issues/168031) [Bug]: 2026.9.9 Doctor maintenance never admitted while the systemd Gateway runs: repeated synchronous integrity_check blows the 5s service-inspection deadline `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#167799](https://github.com/openclaw/openclaw/issues/167799) [Bug]: claude-cli: Claude Code 2.1.292 prompt snapshots freeze the appended system prompt on every resumed live-session turn `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#167994](https://github.com/openclaw/openclaw/issues/167994) Update failure: managed-service-update-handoff (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167868](https://github.com/openclaw/openclaw/issues/167868) Session SQLite migration recovery report (session-sqlite-1790840736442-c2a5252c) `P2` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬2
- [#167869](https://github.com/openclaw/openclaw/issues/167869) Update failure: package-swap (2026.9.8) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#167883](https://github.com/openclaw/openclaw/issues/167883) Update failure: package-swap (2026.9.8) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#167885](https://github.com/openclaw/openclaw/issues/167885) Update validator fails in three distinct modes on a valid npm install (unsafe identity / recovery permissions / service-revalidation-failed) `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#167792](https://github.com/openclaw/openclaw/issues/167792) [Feature]: Workboard durable project graph and admission contract `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#167865](https://github.com/openclaw/openclaw/issues/167865) Cron failure alert reports "Cause: timeout" for non-model errors (channel 500, ENOSPC, runner/tool failures) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#167852](https://github.com/openclaw/openclaw/issues/167852) Update failure: candidate-state-snapshot (2026.9.8) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#167840](https://github.com/openclaw/openclaw/issues/167840) Update failure: doctor-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#167837](https://github.com/openclaw/openclaw/issues/167837) [Bug]: `openclaw acp` bridge drops assistant text that accompanies tool calls (plans, warnings never reach the ACP client) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#167834](https://github.com/openclaw/openclaw/issues/167834) [Feature]: User-editable per-channel delivery-format template (override/extend built-in inboundFormattingHints) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#167812](https://github.com/openclaw/openclaw/issues/167812) Update failure: package-swap (2026.9.8) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#167801](https://github.com/openclaw/openclaw/issues/167801) Update failure: package-swap (2026.9.8) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#167804](https://github.com/openclaw/openclaw/issues/167804) Update failure: package-swap (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167790](https://github.com/openclaw/openclaw/issues/167790) Update failure: gateway-recovery-verification (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167776](https://github.com/openclaw/openclaw/issues/167776) Update failure: package-swap (2026.9.8) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#167781](https://github.com/openclaw/openclaw/issues/167781) Update failure: package-swap (2026.9.8) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#167778](https://github.com/openclaw/openclaw/issues/167778) Service-definition reconciliation reports permanent `unknown-edit` drift for fields that Windows Task Scheduler itself forces/canonicalizes (`UseUnifiedSchedulingEngine`, `LogonTrigger/UserId`) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#167766](https://github.com/openclaw/openclaw/issues/167766) [Bug]: Terminal cleanup loses an admitted Codex completion recovery claim and stalls Slack DMs `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#167765](https://github.com/openclaw/openclaw/issues/167765) Update failure: package-swap (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167767](https://github.com/openclaw/openclaw/issues/167767) Update failure: updater-runtime-retention (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167659](https://github.com/openclaw/openclaw/issues/167659) [Bug]: Openclaw upgrade bugs `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#167573](https://github.com/openclaw/openclaw/issues/167573) fix: a hosted model catalog adoption fails a turn that has not called the model yet `agents` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#167704](https://github.com/openclaw/openclaw/issues/167704) Update failure: managed-service-update-handoff (2026.9.8) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#167712](https://github.com/openclaw/openclaw/issues/167712) Update failure: managed-service-preflight (2026.9.5) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#167718](https://github.com/openclaw/openclaw/issues/167718) Update failure: package-swap (2026.9.8) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#168088](https://github.com/openclaw/openclaw/issues/168088) Default ChatGPT-login compaction to Codex-style remote compaction V2, built as the next normal turn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#168089](https://github.com/openclaw/openclaw/issues/168089) [Bug]: Windows model directive tests remove session directories before database teardown 💬1
- [#168082](https://github.com/openclaw/openclaw/issues/168082) [Bug]: ask_user 900s timeout settlement writes the no_answer tool result with a stale expectedMutationAt fence and fails the run with SqliteTranscriptMutationConflictError `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#168070](https://github.com/openclaw/openclaw/issues/168070) Agent work keeps missing fundamentals (request parity, silent fallbacks, discarded paid work); add them to AGENTS.md `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#168053](https://github.com/openclaw/openclaw/issues/168053) feat: personalize the sidebar rail and separate navigation views `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#168000](https://github.com/openclaw/openclaw/issues/168000) [Bug]: after the 2026.9.8 → 2026.9.9 manual hop, a dead legacy child-lineage update lease blocks every update; update repair leaves it `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#168046](https://github.com/openclaw/openclaw/issues/168046) Memory dreaming promotion runs nightly and writes a stub for all three phases `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#168041](https://github.com/openclaw/openclaw/issues/168041) Update failure: package-swap (2026.9.8) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#168030](https://github.com/openclaw/openclaw/issues/168030) Inworld: realtime voice provider (speech-to-speech) for Talk and Voice Call `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#168026](https://github.com/openclaw/openclaw/issues/168026) Cron: a job blocked by the local-provider preflight is skipped silently forever `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#168021](https://github.com/openclaw/openclaw/issues/168021) [Bug]: memory-core: "dreaming trigger failed: Malformed agent session key" on every heartbeat when heartbeat session is named `heartbeat` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#168014](https://github.com/openclaw/openclaw/issues/168014) [Bug] Steering a running turn blocks that turn's context-engine advancement for good (steer metadata rewrite rotates the transcript generation, so the closed-turn read returns session-rebound) `P1` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#168015](https://github.com/openclaw/openclaw/issues/168015) Codex native auto-compaction clears transcriptByteCompactionLatch, so the next turn re-runs the byte-fuse preflight compaction `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#167990](https://github.com/openclaw/openclaw/issues/167990) [Bug]: claude-cli: sessions of one agent never share the system-prompt cache (Runtime session=/sessionUrl= in the cached block) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#167991](https://github.com/openclaw/openclaw/issues/167991) [Bug]: plugin admission capture hardlinks the installed plugin, so its own SKILL.md is rejected as "path must not be hardlinked" `P2` `impact:other` 💬1
- [#167988](https://github.com/openclaw/openclaw/issues/167988) Telegram: upgrading a basic group to a supergroup loses the bot's conversation history `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167980](https://github.com/openclaw/openclaw/issues/167980) [Bug]: Control UI stays blank in Chromium 114 WebViews (Telegram Android Mini App): Promise.withResolvers and other post-114 APIs used without fallback `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#167982](https://github.com/openclaw/openclaw/issues/167982) [Bug]: Text commands registered in a bundled channel's registerFull never reach handlePluginCommand (per-reply plugin registry loads in discovery mode) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#167981](https://github.com/openclaw/openclaw/issues/167981) [Feature]: Telegram Mini App: build launch URLs from gateway.publicOrigin when Tailscale is not the published ingress `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167973](https://github.com/openclaw/openclaw/issues/167973) Discord autoThread sends the first implicit message-tool reply to the parent channel `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#167967](https://github.com/openclaw/openclaw/issues/167967) [Bug]: Workboard keyed create silently reuses divergent payload, lacks created discriminator and durable cross-writer uniqueness contract (2026.9.9) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167956](https://github.com/openclaw/openclaw/issues/167956) [Feature]: Talk to Claw on Apple Watch should use an installed Enhanced/Premium system voice instead of the default `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167950](https://github.com/openclaw/openclaw/issues/167950) feat(inworld): expose speakingRate and the TTS-2 deliveryMode preset in the Inworld speech provider `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#167948](https://github.com/openclaw/openclaw/issues/167948) [Bug]: Crash loop on hosts without `statx` (Linux < 4.11): SQLite snapshot fingerprint uses `birthtimeMs`, which libuv aliases to `ctime` `bug` `regression` `impact:crash-loop` `P0` 💬1
- [#167911](https://github.com/openclaw/openclaw/issues/167911) [Feature]: diagnostics-prometheus: export session.stalled and session.long_running (stalled-session warnings have no metric) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167945](https://github.com/openclaw/openclaw/issues/167945) Plugin hook payload: expose native current-user text to before_prompt_build / llm_input events `P2` `impact:other` 💬1
- [#167924](https://github.com/openclaw/openclaw/issues/167924) Control UI history-recovery fixture waits for prefetch without navigation intent `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#167934](https://github.com/openclaw/openclaw/issues/167934) [Bug]: SQLite backup listing misreads a Git repository as a snapshot repository `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#167931](https://github.com/openclaw/openclaw/issues/167931) [Bug]: macOS app 2026.9.6+ ships without tree-sitter-bash.wasm, so node exec allowlist analysis always fails (SYSTEM_RUN_DENIED) `P1` `impact:other` 💬1
- [#167927](https://github.com/openclaw/openclaw/issues/167927) [Bug]: TUI client never receives approval cards that Control UI webapp and Telegram correctly receive for the same session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167920](https://github.com/openclaw/openclaw/issues/167920) [Bug]: model.usage silently fails to fire for continuation steps within multi-step tool-use turns — correlates with messages.groupChat.visibleReplies mode `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#167919](https://github.com/openclaw/openclaw/issues/167919) Question: supported mandatory pre-provider admission hook for model-call budget and approval enforcement `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:security` 💬1
- [#167910](https://github.com/openclaw/openclaw/issues/167910) Update failure: package-swap (2026.9.8) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#167904](https://github.com/openclaw/openclaw/issues/167904) [Feature]: Deliver requester-scoped (per-requester OAuth) MCP servers to the claude-cli runtime `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#167893](https://github.com/openclaw/openclaw/issues/167893) System status message: EXCLUDE mode behaves like INCLUDE — excluded recipients not receiving broadcast `P3` 💬1
- [#167889](https://github.com/openclaw/openclaw/issues/167889) sessions_spawn(runtime="acp") fails with Unknown agent id for claude/codex/gemini despite correct config, matching plugin versions, and installed CLI binaries `P1` `impact:session-state` 💬1
- [#167882](https://github.com/openclaw/openclaw/issues/167882) Update failure: gateway-recovery-verification (2026.9.7) `P0` `impact:ux-release-blocker` 💬1
- [#167877](https://github.com/openclaw/openclaw/issues/167877) Update failure: package-swap (2026.9.8) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#167876](https://github.com/openclaw/openclaw/issues/167876) Talk consultations lose caller authority after session setup completes `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#167867](https://github.com/openclaw/openclaw/issues/167867) [Bug]: New owner input after Control UI reconnect loses cron management authority despite current admin authentication `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#167866](https://github.com/openclaw/openclaw/issues/167866) [Bug]: 2026.9.8 → 2026.9.9 update blocked by recovery journal hard-linked into retained runtime `bug` `bug:crash` `P0` `impact:ux-release-blocker` 💬1
- [#167859](https://github.com/openclaw/openclaw/issues/167859) Control UI: typed /stop while the agent is running leaves queued turns, so the agent starts again right after the stop `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#167862](https://github.com/openclaw/openclaw/issues/167862) [Bug]: before_agent_finalize "revise" is ignored after any tool call, so the plugin-rejected draft is finalized `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#167858](https://github.com/openclaw/openclaw/issues/167858) [Feature]: Origin-authenticated continuation admission for finished channel tasks `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:session-state` 💬1
- [#167854](https://github.com/openclaw/openclaw/issues/167854) [Bug]: Home drops session notices once more than 20 sessions have pending activity (20-entry system-event queue) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167856](https://github.com/openclaw/openclaw/issues/167856) Update failure: candidate-state-snapshot (2026.9.8) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#167844](https://github.com/openclaw/openclaw/issues/167844) [Bug]: Any active/queued cron work blocks heartbeat ticks for ALL agents (cron-in-progress starvation on multi-agent gateways) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#167848](https://github.com/openclaw/openclaw/issues/167848) [Bug]: WhatsApp drops inbound messages emitted between socket open and inbox listener attach `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#167847](https://github.com/openclaw/openclaw/issues/167847) [Feature]: Decide registry diagnostic invalidation after removing the last configured plugin path `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167836](https://github.com/openclaw/openclaw/issues/167836) [Bug]: `openclaw acp` bridge never relays `ask_user` questions to the ACP client, so the turn blocks for the full question timeout `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167824](https://github.com/openclaw/openclaw/issues/167824) [Bug]: Update from 2026.8.2 to 2026.9.9: Doctor command custody refuses every subcommand ("managed handoff admission is invalid"), Doctor takes ~5 min `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#167831](https://github.com/openclaw/openclaw/issues/167831) iOS sidebar lacks session and navigation actions available in the Control UI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#167828](https://github.com/openclaw/openclaw/issues/167828) Update failure: package-swap (2026.9.8) 💬1
- [#167826](https://github.com/openclaw/openclaw/issues/167826) Update failure: package-swap (2026.9.8) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#167822](https://github.com/openclaw/openclaw/issues/167822) [Bug]: Update blocked by managed-service handoff and package recovery identity mismatch `bug` `bug:behavior` 💬1
- [#167820](https://github.com/openclaw/openclaw/issues/167820) Update failure: invalid-config (2026.9.9) `P0` `impact:ux-release-blocker` 💬1
- [#167815](https://github.com/openclaw/openclaw/issues/167815) Restart-required config deferral never converges: the blocker set GROWS during the 300s window, so `forcing restart` (0 ms drain) always fires — one blocker is itself restart-derived `P1` `impact:session-state` `impact:message-loss` `maturity:stable` 💬1
- [#167807](https://github.com/openclaw/openclaw/issues/167807) [Feature]: Choose an agent-avatar favicon shape `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#167810](https://github.com/openclaw/openclaw/issues/167810) iOS Talk Mode voice output is extremely quiet on speakerphone `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#167694](https://github.com/openclaw/openclaw/issues/167694) [v2026.9.9] Agent autonomy regression: auto-review blocks routine shared-infrastructure work that 9.5 agents could do `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#167805](https://github.com/openclaw/openclaw/issues/167805) Workboard: workboard.cards.list returns archived cards; large boards exceed the 50 MiB WS buffer and put Control UI in a reconnect loop `P1` `impact:other` 💬1
- [#167803](https://github.com/openclaw/openclaw/issues/167803) [Bug]: sessions_spawn fails for non-admin operators: spawned child is owned by the requester but sharing authorizes by createdActor only `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#167797](https://github.com/openclaw/openclaw/issues/167797) Withdrawn 💬1
- [#167795](https://github.com/openclaw/openclaw/issues/167795) [Bug]: Control UI shows internal requester context in user messages (claude-cli backend) `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#167793](https://github.com/openclaw/openclaw/issues/167793) [Feature]: allow contextPruning (cache-ttl) for custom `openai-completions` providers, and expose the mid-turn overflow recovery allowance `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167791](https://github.com/openclaw/openclaw/issues/167791) [Bug]: Android/Termux: Gateway and Doctor fail with EACCES creating SQLite read-only snapshot (hard links denied) `P1` `clawsweeper:source-repro` `impact:crash-loop` `issue-rating: 🦞 diamond lobster` 💬1
- [#167787](https://github.com/openclaw/openclaw/issues/167787) [Feature]: One long model request should not make cache-TTL pruning trim the running turn's tool results `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167786](https://github.com/openclaw/openclaw/issues/167786) [Feature]: Cache-TTL soft-trim notice should say it is context pruning and that the result can be re-fetched `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167784](https://github.com/openclaw/openclaw/issues/167784) [Bug]: npm-global update 2026.9.8 → 2026.9.9 fails at package-swap `bug` `regression` `P0` `maturity:stable` 💬1
- [#167777](https://github.com/openclaw/openclaw/issues/167777) `gateway restart` returns "safe restart requested; will restart momentarily (async)" with no status, so tooling cannot tell when the restart actually completes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167772](https://github.com/openclaw/openclaw/issues/167772) before_agent_finalize: honour `eligibleTriggers`, and only hold a run's replies when an eligible handler can revise it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167770](https://github.com/openclaw/openclaw/issues/167770) [Bug]: Tailscale serve route claim exits with no recovery — managed ingress stays down until a manual Gateway restart `P1` `impact:other` `maturity:stable` 💬1
- [#167768](https://github.com/openclaw/openclaw/issues/167768) [Bug]: Local Responses reasoning replay changes after session reload `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#167764](https://github.com/openclaw/openclaw/issues/167764) [Windows] state store WAL never checkpoints — write connection hangs in prepareWrite, WAL grows unbounded, agents get false "database is locked" error receipts `bug` `regression` `P1` `impact:message-loss` 💬1
- [#167758](https://github.com/openclaw/openclaw/issues/167758) [Bug]: ask_user progressText renders malformed Markdown table on control-ui `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#167752](https://github.com/openclaw/openclaw/issues/167752) [Bug]: Gateway shutdown with running stream cron jobs always warns 'stream owner stops failed' — shutdown retirement hits the already-sealed cron receipt authority `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#167747](https://github.com/openclaw/openclaw/issues/167747) Control UI omits alternate shared accounts from the existing-chat model picker `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#167742](https://github.com/openclaw/openclaw/issues/167742) claude-cli route emits no agent events while a tool call's input is being generated — chat goes silent during long Write/Edit streams `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#167738](https://github.com/openclaw/openclaw/issues/167738) [Bug]: browser tabs/open time out under slow host DNS: GET /tabs resolves every tab hostname serially inside the 3 s client budget `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#167741](https://github.com/openclaw/openclaw/issues/167741) [Bug]: Unset preferences in the Config form look switched off when their default is on `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#167716](https://github.com/openclaw/openclaw/issues/167716) [Bug]: Renaming or deleting a session group takes 12 seconds on a three-agent Gateway `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#167729](https://github.com/openclaw/openclaw/issues/167729) [Bug]: iOS session drawer downloads the full session list on every session event `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#167725](https://github.com/openclaw/openclaw/issues/167725) [Bug]: update repair records succeeded with empty verification after Doctor is deferred, masking the original failed update `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#167709](https://github.com/openclaw/openclaw/issues/167709) [Bug]: claude-cli WebChat turn fails as empty response after a delivered message(final=true) + NO_REPLY (internal-ui send not credited in automatic mode) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#167710](https://github.com/openclaw/openclaw/issues/167710) [Bug]: stranded-reply retry changes persistent session prompt and tool declarations `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167696](https://github.com/openclaw/openclaw/issues/167696) [Bug]: macOS Voice Wake-triggered Talk ignores configured session route `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#167688](https://github.com/openclaw/openclaw/issues/167688) [Bug]: Workboard lifecycle sync fails every minute with UNIQUE constraint on workboard_card_attempts.id when two cards fall back to the same session key `P1` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1

#### 🔒 Closed Issues
- [#159912](https://github.com/openclaw/openclaw/issues/159912) [Bug]: Memory background callbacks retain retired plugin registry after reload; indexing fails while health stays green
- [#156986](https://github.com/openclaw/openclaw/issues/156986) openclaw update hangs in update-candidate-state phase: runaway worker output (233MB+) with respawn loop (9.5)
- [#79950](https://github.com/openclaw/openclaw/issues/79950) Bug: async sessions_send results are not delivered cleanly to Telegram-bound requester session
- [#129750](https://github.com/openclaw/openclaw/issues/129750) [Bug]: OpenAI-compatible embedBatch exceeds DashScope text-embedding-v4's 10-item limit
- [#138403](https://github.com/openclaw/openclaw/issues/138403) Dream Diary narrative timeout hardcoded to 60s — slow local models always fall back to placeholder entries (no config option)
- [#131162](https://github.com/openclaw/openclaw/issues/131162) [Bug]: Explicit skill invocation does not satisfy foreground repair guard
- [#158271](https://github.com/openclaw/openclaw/issues/158271) [Bug]: `openclaw agent` turns flip messageToolPolicyHash, invalidating the claude-cli session (reason=message-policy) on every switch with chat/sessions.send turns
- [#110564](https://github.com/openclaw/openclaw/issues/110564) Compaction: use single-pass summarization when the summarizer's context window fits the whole history (skip forced map-reduce)
- [#167655](https://github.com/openclaw/openclaw/issues/167655) fix(update): failed stable-channel activation leaves a prepared record its own repair refuses
- [#77980](https://github.com/openclaw/openclaw/issues/77980) Bug: bootstrap token path lacks rate limiting, lockout, and alerting on failed verifies
- [#159769](https://github.com/openclaw/openclaw/issues/159769) [Bug]: 2026.9.4 upgrade silently pauses vector memory search: index identity label flips openai-compatible ↔ ollama across releases (config unchanged)
- [#113182](https://github.com/openclaw/openclaw/issues/113182) [Bug]: lane task timeout races legitimate turn completion, discarding the final assistant text (~26s window)
- [#143018](https://github.com/openclaw/openclaw/issues/143018) [Bug]: active-memory recall fails on plugin-internal sessions - "Plugin session ownership target not found" for freshly created memory sub-agent sessions
- [#167923](https://github.com/openclaw/openclaw/issues/167923) [Bug]: Docker build of main fails at pnpm install --frozen-lockfile since pnpm 12.7.0 bump (lockfile lists extensions/facetime, manifest not copied)
- [#152182](https://github.com/openclaw/openclaw/issues/152182) [Bug]: memory_search (provider: local): transient "index was built for <model>, expected fts-only" unavailable error when a search races the managed llama.cpp idle-stop/respawn
- [#104868](https://github.com/openclaw/openclaw/issues/104868) [Bug]: Gemma4 tool calls leaked as raw text at end of stream are never recovered
- [#126880](https://github.com/openclaw/openclaw/issues/126880) [Feature]: memory status — expose pending-delta detail; "dirty: true" is steady-state on active deployments
- [#167914](https://github.com/openclaw/openclaw/issues/167914) [Bug]: memory-wiki: `wiki.status` (and the `wiki_status` tool) run `syncMemoryWikiImportedSources` first and can start a full vault compile even when the published compiled cache is current
- [#167912](https://github.com/openclaw/openclaw/issues/167912) [Bug]: diagnostics-prometheus: duration histograms end at 600 s, so per-model p95 of agent run, harness and model-turn durations is pinned at 600
- [#167861](https://github.com/openclaw/openclaw/issues/167861) Update to 2026.9.9 fails: "Package publication recovery permissions are unsafe" on npm global tree
- [#167835](https://github.com/openclaw/openclaw/issues/167835) [Windows] gateway.cmd hardcodes the pnpm version path, so any package update leaves the Scheduled Task unstartable
- [#167823](https://github.com/openclaw/openclaw/issues/167823) [Bug]: createServiceRestartIntent.prepare drops the underlying service-inspection error
- [#127208](https://github.com/openclaw/openclaw/issues/127208) [Feature]: Add one-off /followup command
- [#167773](https://github.com/openclaw/openclaw/issues/167773) Update failure: gateway-recovery-verification (2026.9.7)
- [#157816](https://github.com/openclaw/openclaw/issues/157816) `openclaw` setup turn fails after an update: could not reach working inference — `prepared model runtime plugin generation was superseded`
- [#155769](https://github.com/openclaw/openclaw/issues/155769) Gateway restart orphans managed localService children; memory sync refused while status misreports
- [#167913](https://github.com/openclaw/openclaw/issues/167913) [Bug]: runIsolatedCompletion emits no model.usage, so background utility completions (session titles, Activity recaps, session observer, progress narration, transcript summaries) are missing from openclaw_model_tokens_total and openclaw_model_cost_usd_total
- [#168031](https://github.com/openclaw/openclaw/issues/168031) [Bug]: 2026.9.9 Doctor maintenance never admitted while the systemd Gateway runs: repeated synchronous integrity_check blows the 5s service-inspection deadline
- [#144263](https://github.com/openclaw/openclaw/issues/144263) [Bug]: memory index: local embedding provider stalls when a batch exceeds ~300s — no configurable request timeout
- [#167799](https://github.com/openclaw/openclaw/issues/167799) [Bug]: claude-cli: Claude Code 2.1.292 prompt snapshots freeze the appended system prompt on every resumed live-session turn
- [#167994](https://github.com/openclaw/openclaw/issues/167994) Update failure: managed-service-update-handoff (2026.9.8)
- [#167499](https://github.com/openclaw/openclaw/issues/167499) FRV watch repeats throttled reads before GitHub retry boundaries
- [#127423](https://github.com/openclaw/openclaw/issues/127423) Memory watcher changes during embedding can be republished and then cleared without follow-up sync
- [#138736](https://github.com/openclaw/openclaw/issues/138736) Diagnose intermittent local-model setup tool verification rejection
- [#161254](https://github.com/openclaw/openclaw/issues/161254) [Bug]: Oversized OpenAI-compatible requests return one-token replies instead of context errors
- [#167869](https://github.com/openclaw/openclaw/issues/167869) Update failure: package-swap (2026.9.8)
- [#167883](https://github.com/openclaw/openclaw/issues/167883) Update failure: package-swap (2026.9.8)
- [#167885](https://github.com/openclaw/openclaw/issues/167885) Update validator fails in three distinct modes on a valid npm install (unsafe identity / recovery permissions / service-revalidation-failed)
- [#127247](https://github.com/openclaw/openclaw/issues/127247) [Bug]: Chat and Embeddings routes coerce malformed OpenAI request fields
- [#138452](https://github.com/openclaw/openclaw/issues/138452) Managed llama.cpp model switching leaves preset and live router inventory inconsistent
- [#142414](https://github.com/openclaw/openclaw/issues/142414) [Bug]: Local memory search reinitializes the same provider across registrations
- [#159871](https://github.com/openclaw/openclaw/issues/159871) active-memory: HTTP 410 "model retired" from Ollama is classified as a transient `timeout`, retried 8×, and never fails over — recall silently dead since the model's retirement
- [#159812](https://github.com/openclaw/openclaw/issues/159812) [Bug]: 2026.9.3/2026.9.4 upgrade breaks api:ollama transport registration for custom lane-scoped provider ids
- [#143180](https://github.com/openclaw/openclaw/issues/143180) [Bug]: Tool Search Catalog silently strips tool-call arguments for local Ollama models (2026.9.3)
- [#167852](https://github.com/openclaw/openclaw/issues/167852) Update failure: candidate-state-snapshot (2026.9.8)
- [#167840](https://github.com/openclaw/openclaw/issues/167840) Update failure: doctor-failed (2026.9.4)
- [#142080](https://github.com/openclaw/openclaw/issues/142080) [Bug]: Talk treats queued consult as empty completion and loses adopted-run reply
- [#167812](https://github.com/openclaw/openclaw/issues/167812) Update failure: package-swap (2026.9.8)
- [#138723](https://github.com/openclaw/openclaw/issues/138723) [Bug][Regression] Codex native subagent completion cannot wake its parent run (not_streaming / no_active_run); parent hangs to the command-lane ceiling
- [#167801](https://github.com/openclaw/openclaw/issues/167801) Update failure: package-swap (2026.9.8)
- [#167804](https://github.com/openclaw/openclaw/issues/167804) Update failure: package-swap (2026.9.8)
- [#167790](https://github.com/openclaw/openclaw/issues/167790) Update failure: gateway-recovery-verification (2026.9.8)
- [#167776](https://github.com/openclaw/openclaw/issues/167776) Update failure: package-swap (2026.9.8)
- [#167781](https://github.com/openclaw/openclaw/issues/167781) Update failure: package-swap (2026.9.8)
- [#167765](https://github.com/openclaw/openclaw/issues/167765) Update failure: package-swap (2026.9.8)
- [#167767](https://github.com/openclaw/openclaw/issues/167767) Update failure: updater-runtime-retention (2026.9.8)
- [#167573](https://github.com/openclaw/openclaw/issues/167573) fix: a hosted model catalog adoption fails a turn that has not called the model yet
- [#167704](https://github.com/openclaw/openclaw/issues/167704) Update failure: managed-service-update-handoff (2026.9.8)
- [#167712](https://github.com/openclaw/openclaw/issues/167712) Update failure: managed-service-preflight (2026.9.5)
- [#167718](https://github.com/openclaw/openclaw/issues/167718) Update failure: package-swap (2026.9.8)
- [#164932](https://github.com/openclaw/openclaw/issues/164932) [Feature]: Reuse a same-process integrity proof for the shared state database during Gateway startup
- [#157385](https://github.com/openclaw/openclaw/issues/157385) [Bug]: MiMo inline thinking still visible when the stream carries no opening tag (residual shape of #156803)
- [#168000](https://github.com/openclaw/openclaw/issues/168000) [Bug]: after the 2026.9.8 → 2026.9.9 manual hop, a dead legacy child-lineage update lease blocks every update; update repair leaves it
- [#168041](https://github.com/openclaw/openclaw/issues/168041) Update failure: package-swap (2026.9.8)
- [#166644](https://github.com/openclaw/openclaw/issues/166644) [Bug]: File-backed memory flush regains ring-zero execution tools after projection
- [#167494](https://github.com/openclaw/openclaw/issues/167494) fix: release dispatch hides effective qualification selection
- [#167991](https://github.com/openclaw/openclaw/issues/167991) [Bug]: plugin admission capture hardlinks the installed plugin, so its own SKILL.md is rejected as "path must not be hardlinked"
- [#167517](https://github.com/openclaw/openclaw/issues/167517) [Bug]: release-validation status omits qualification and diagnostic drain
- [#167500](https://github.com/openclaw/openclaw/issues/167500) docs(release): require selected backport closure before qualification
- [#167948](https://github.com/openclaw/openclaw/issues/167948) [Bug]: Crash loop on hosts without `statx` (Linux < 4.11): SQLite snapshot fingerprint uses `birthtimeMs`, which libuv aliases to `ctime`
- [#167945](https://github.com/openclaw/openclaw/issues/167945) Plugin hook payload: expose native current-user text to before_prompt_build / llm_input events
- [#167931](https://github.com/openclaw/openclaw/issues/167931) [Bug]: macOS app 2026.9.6+ ships without tree-sitter-bash.wasm, so node exec allowlist analysis always fails (SYSTEM_RUN_DENIED)
- [#167403](https://github.com/openclaw/openclaw/issues/167403) [Feature]: add Google Antigravity CLI (agy) as an openclaw triage --agent option
- [#167910](https://github.com/openclaw/openclaw/issues/167910) Update failure: package-swap (2026.9.8)
- [#167893](https://github.com/openclaw/openclaw/issues/167893) System status message: EXCLUDE mode behaves like INCLUDE — excluded recipients not receiving broadcast
- [#167889](https://github.com/openclaw/openclaw/issues/167889) sessions_spawn(runtime="acp") fails with Unknown agent id for claude/codex/gemini despite correct config, matching plugin versions, and installed CLI binaries
- [#167882](https://github.com/openclaw/openclaw/issues/167882) Update failure: gateway-recovery-verification (2026.9.7)
- [#167877](https://github.com/openclaw/openclaw/issues/167877) Update failure: package-swap (2026.9.8)
- [#167866](https://github.com/openclaw/openclaw/issues/167866) [Bug]: 2026.9.8 → 2026.9.9 update blocked by recovery journal hard-linked into retained runtime
- [#167856](https://github.com/openclaw/openclaw/issues/167856) Update failure: candidate-state-snapshot (2026.9.8)
- [#167824](https://github.com/openclaw/openclaw/issues/167824) [Bug]: Update from 2026.8.2 to 2026.9.9: Doctor command custody refuses every subcommand ("managed handoff admission is invalid"), Doctor takes ~5 min
- [#167828](https://github.com/openclaw/openclaw/issues/167828) Update failure: package-swap (2026.9.8)
- [#167826](https://github.com/openclaw/openclaw/issues/167826) Update failure: package-swap (2026.9.8)
- [#167822](https://github.com/openclaw/openclaw/issues/167822) [Bug]: Update blocked by managed-service handoff and package recovery identity mismatch
- [#167820](https://github.com/openclaw/openclaw/issues/167820) Update failure: invalid-config (2026.9.9)
- [#167815](https://github.com/openclaw/openclaw/issues/167815) Restart-required config deferral never converges: the blocker set GROWS during the 300s window, so `forcing restart` (0 ms drain) always fires — one blocker is itself restart-derived
- [#167807](https://github.com/openclaw/openclaw/issues/167807) [Feature]: Choose an agent-avatar favicon shape
- [#166318](https://github.com/openclaw/openclaw/issues/166318) Bug: Android browser file picker greys out STL attachments in Control UI
- [#167805](https://github.com/openclaw/openclaw/issues/167805) Workboard: workboard.cards.list returns archived cards; large boards exceed the 50 MiB WS buffer and put Control UI in a reconnect loop
- [#167797](https://github.com/openclaw/openclaw/issues/167797) Withdrawn
- [#167795](https://github.com/openclaw/openclaw/issues/167795) [Bug]: Control UI shows internal requester context in user messages (claude-cli backend)
- [#167784](https://github.com/openclaw/openclaw/issues/167784) [Bug]: npm-global update 2026.9.8 → 2026.9.9 fails at package-swap
- [#167770](https://github.com/openclaw/openclaw/issues/167770) [Bug]: Tailscale serve route claim exits with no recovery — managed ingress stays down until a manual Gateway restart
- [#167764](https://github.com/openclaw/openclaw/issues/167764) [Windows] state store WAL never checkpoints — write connection hangs in prepareWrite, WAL grows unbounded, agents get false "database is locked" error receipts
- [#167758](https://github.com/openclaw/openclaw/issues/167758) [Bug]: ask_user progressText renders malformed Markdown table on control-ui
- [#167725](https://github.com/openclaw/openclaw/issues/167725) [Bug]: update repair records succeeded with empty verification after Doctor is deferred, masking the original failed update

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 252,301 · **Open issues:** 48,119 · **Last push:** <1h ago

On October 10, 2026, there were no new releases for Hermes Agent. However, a significant merged pull request (#135406) addressed a critical issue where test runs would leave detached gateways running after completion. Among new issues, the most notable was #135594, which reported a bug in the multiplexed gateway where the profile MCP tool allowlist was ignored when another profile configured the same-named server, allowing read-only profiles to access write tools. Additionally, issue #135872 raised concerns over the `computer_use` element with the `cua-driver 0.34`, citing an unknown argument error that could impact usability.

#### ✅ Merged PRs
- [#135406](https://github.com/NousResearch/hermes-agent/pull/135406) Test runs no longer leave detached gateways running after they finish

#### 🐛 New Issues
- [#135594](https://github.com/NousResearch/hermes-agent/issues/135594) [Bug][Security]: multiplexed gateway: profile MCP tool allowlist ignored when another profile configures a same-named server (read-only profile gets write tools) `type/bug` `comp/gateway` `tool/mcp` `area/config` 💬4
- [#135872](https://github.com/NousResearch/hermes-agent/issues/135872) computer_use element clicks refused on cua-driver 0.34: 'unknown argument element_index' `type/bug` `comp/tools` `P2` 💬2
- [#135867](https://github.com/NousResearch/hermes-agent/issues/135867) [Feature]: Field report + 5 proven patterns for phone→Tailscale→gateway companions (Windows boot race, tailnet-scoped firewall, wrapper migration, bridge-less HTTP chat, Termux as work node) `type/feature` `comp/gateway` `P3` `needs-decision` 💬2
- [#135881](https://github.com/NousResearch/hermes-agent/issues/135881) Bundled `hermes-agent` skill says AGENTS.md discovery is "cwd only", contradicting both the docs and the loader `type/docs` `duplicate` `comp/agent` `tool/skills` 💬1
- [#135836](https://github.com/NousResearch/hermes-agent/issues/135836) computer_use capture(som): 'estimated scale' hint uses full page extent, gives a bogus coordinate factor `type/bug` `duplicate` `comp/tools` `P2` 💬1
- [#135835](https://github.com/NousResearch/hermes-agent/issues/135835) computer_use on GNOME/Mutter Wayland: shell surfaces unclickable; scroll drops x/y and switches workspaces `type/bug` `comp/tools` `P2` 💬1
- [#135921](https://github.com/NousResearch/hermes-agent/issues/135921) [Bug]: Weixin/iLink silently discards outbound messages when the peer reply window expires (no retry, no queue, no error surfaced)
- [#135920](https://github.com/NousResearch/hermes-agent/issues/135920) [Feature]: Explicit remote-only Desktop mode: prevent unintended local backend activation
- [#135916](https://github.com/NousResearch/hermes-agent/issues/135916) [Feature]: Change auxiliary models at runtime like /model does for the main model in TUI `type/feature` `comp/cli` `comp/tui` `P3`
- [#135904](https://github.com/NousResearch/hermes-agent/issues/135904) browser: use_real_profile path never applies the auto --no-sandbox workaround (AppArmor userns hosts) `type/bug` `tool/browser` `P2`
- [#135905](https://github.com/NousResearch/hermes-agent/issues/135905) Approval buttons resolve the oldest pending approval, not the one clicked (Slack, Discord, other adapters) `type/bug` `duplicate` `comp/gateway` `comp/plugins`
- [#135910](https://github.com/NousResearch/hermes-agent/issues/135910) pm repair cannot commit a dependency environment on a case-insensitive filesystem: shutil.copytree dies with Errno 17 on the bundled CPython terminfo `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility`
- [#135900](https://github.com/NousResearch/hermes-agent/issues/135900) feat(memory): support lock-scoped precondition for MemoryStore.apply_batch `type/feature` `comp/agent` `comp/plugins` `tool/memory`
- [#135903](https://github.com/NousResearch/hermes-agent/issues/135903) feat(plugins): give dashboard plugin_api.py a supported ctx.llm facade `duplicate` `type/feature` `comp/plugins` `P3`
- [#135898](https://github.com/NousResearch/hermes-agent/issues/135898) Matrix: captioned file is cached under the caption text, losing filename/extension (ignores content.filename) `type/bug` `comp/plugins` `platform/matrix` `P3`
- [#135899](https://github.com/NousResearch/hermes-agent/issues/135899) Docker backend: skill_view returns host skill_dir / ${HERMES_SKILL_DIR}, so bundled skill scripts fail inside the sandbox `type/bug` `comp/agent` `tool/skills` `backend/docker`
- [#135897](https://github.com/NousResearch/hermes-agent/issues/135897) [Feature]: Desktop Plugins page — copyable plugin source (repo + pinned commit) and a way to mirror a remote backend's plugin set onto a new device `type/feature` `comp/plugins` `P3` `comp/desktop`
- [#135890](https://github.com/NousResearch/hermes-agent/issues/135890) disk-cleanup: quick cleanup can permanently delete backup-named files `type/feature` `comp/plugins` `P3` `needs-decision`
- [#135891](https://github.com/NousResearch/hermes-agent/issues/135891) disk-cleanup: quick does not revalidate scope or protected files for stored temp entries `type/bug` `comp/plugins` `area/config` `P2`
- [#135886](https://github.com/NousResearch/hermes-agent/issues/135886) capability probe (ignore)
- [#135883](https://github.com/NousResearch/hermes-agent/issues/135883) tests: portable-plugin fixtures hard-code app.darwin, so three hermes_cli tests fail on Windows `type/test` `comp/cli` `comp/plugins` `P3`
- [#135878](https://github.com/NousResearch/hermes-agent/issues/135878) [Bug]: macOS/launchd — `hermes update` burns its full ~31 min drain budget on gateways that answered `already_stopping` and never restart `type/bug` `comp/cli` `comp/gateway` `P2`
- [#135875](https://github.com/NousResearch/hermes-agent/issues/135875) [Feature]: Desktop window title should follow the active tab (window switcher shows every window as "Hermes") `type/feature` `P3` `comp/desktop`
- [#135873](https://github.com/NousResearch/hermes-agent/issues/135873) [Bug]: hermes auth refresh says it clears the cooldown but leaves model_cooldowns, so the model stays blocked `type/bug` `comp/cli` `area/auth` `P2`
- [#135863](https://github.com/NousResearch/hermes-agent/issues/135863) [Bug]: `hermes update --no-gateway-restart` still restarts gateway + dashboard when the update goes through the historical-updater takeover `type/bug` `comp/cli` `comp/gateway` `P2`
- [#135864](https://github.com/NousResearch/hermes-agent/issues/135864) [Bug]: delegate_task list hides sibling-thread subagents in group rooms, so fresh threads re-dispatch running work `type/bug` `comp/tools` `tool/delegate` `P2`
- [#135855](https://github.com/NousResearch/hermes-agent/issues/135855) [Bug]: Desktop model picker reads the Bedrock deployment scope as part of the model name ("Global.Anthropic.Claude Opus 4 5 20251001 V1:0") `type/bug` `provider/bedrock` `P3` `comp/desktop`
- [#135859](https://github.com/NousResearch/hermes-agent/issues/135859) [Bug]: Dashboard/Desktop settings ignore Managed Scope: pinned keys stay editable, save silently drops them and returns ok `type/bug` `comp/cli` `area/config` `P2`

#### 🔒 Closed Issues
- [#134960](https://github.com/NousResearch/hermes-agent/issues/134960) Windows: UTF-8 .ps1 without BOM breaks update hand-off under PowerShell 5.1 (CJK locale)
- [#135886](https://github.com/NousResearch/hermes-agent/issues/135886) capability probe (ignore)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,468 · **Open issues:** 8,657 · **Last push:** <1h ago

On October 10, 2026, there were no new releases for vLLM, but several significant pull requests were merged. Noteworthy changes include the introduction of a mono decode layer for DeepSeek-V4.1-Flash on MI355X, improvements to the Rust frontend with support for per-request stream intervals, and a critical bugfix addressing row-offset overflow in MRV2 implementation. Additionally, multiple bugs were reported, including one where the MTP speculative decoding could render response formats invalid for the Qwen3.8-Flash-Next, which has garnered attention from users. Overall, it was a routine maintenance day with emphasis on enhancing performance and user experience in the platform.

#### ✅ Merged PRs
- [#60397](https://github.com/vllm-project/vllm/pull/60397) [ROCm][Perf][DSv4.1] Mono decode layer for DeepSeek-V4.1-Flash on MI355X
- [#60466](https://github.com/vllm-project/vllm/pull/60466) [Feat][Frontend] structured decisions: DiffusionGemma read strategy
- [#60754](https://github.com/vllm-project/vllm/pull/60754) [MRV2] Miscellaneous code structure updates
- [#60725](https://github.com/vllm-project/vllm/pull/60725) [Test] Allow one fp8 step on K bytes in the kpool decode fuzz test
- [#60695](https://github.com/vllm-project/vllm/pull/60695) [Bugfix][Mooncake] Save the EAGLE attention proof with hybrid Mamba partial tails
- [#59485](https://github.com/vllm-project/vllm/pull/59485) [HiSparse] Report host-pool block residency as HiSparse metrics
- [#60345](https://github.com/vllm-project/vllm/pull/60345) [Perf] Support minimum KV splits configuration for TokenSpeed MLA decode
- [#51207](https://github.com/vllm-project/vllm/pull/51207) [Core] shm tensor arena for efficient cpu->gpu worker broadcast
- [#60724](https://github.com/vllm-project/vllm/pull/60724) [Test] Allow one bf16 ulp in the fused mHC post/pre residual check
- [#60925](https://github.com/vllm-project/vllm/pull/60925) [CI] Accept whitespace around /ci commands and reply instead of going silent
- [#60736](https://github.com/vllm-project/vllm/pull/60736) [Bugfix][MRV2] Use int64 index mappings to fix row-offset overflow
- [#47616](https://github.com/vllm-project/vllm/pull/47616) [Bugfix][Spec Decode] Trim token_ids/logprobs left past a stop string under speculative decoding
- [#60589](https://github.com/vllm-project/vllm/pull/60589) [Rust Frontend] Support `--stream-interval` and per-request `stream_interval`
- [#60913](https://github.com/vllm-project/vllm/pull/60913) [Docs] Document adaptive verification without a confidence head
- [#60748](https://github.com/vllm-project/vllm/pull/60748) [Bugfix][Structured Output] Decode choice specs as JSON in outlines and LMFE
- [#57169](https://github.com/vllm-project/vllm/pull/57169) [KV Cache] GLM-5.3-Flash: use the generic packed KV layout; CircularBufferSpec tail with speculative ring slots
- [#60449](https://github.com/vllm-project/vllm/pull/60449) [WideEP] Explain how to fix a too-old NCCL for DeepEP v2
- [#60714](https://github.com/vllm-project/vllm/pull/60714) [Bugfix] Reject max_num_scheduled_tokens=0 at config time instead of hanging
- [#52298](https://github.com/vllm-project/vllm/pull/52298) [Bugfix] Validate guidance tokenizer compatibility before EngineCore
- [#60894](https://github.com/vllm-project/vllm/pull/60894) [CI] Pin pydantic in the mypy pre-commit hook
- [#52110](https://github.com/vllm-project/vllm/pull/52110) [sharded state loader] support pp in sharded state loader
- [#60876](https://github.com/vllm-project/vllm/pull/60876) [Bugfix][Frontend] Reject beam search with echo and logprobs in /v1/completions
- [#60546](https://github.com/vllm-project/vllm/pull/60546) [Rust Frontend] Pass reasoning controls through render -> generate
- [#59861](https://github.com/vllm-project/vllm/pull/59861) [Bugfix][Rust Frontend] Pass through raw characters in byte-level decode
- [#60588](https://github.com/vllm-project/vllm/pull/60588) [Rust Frontend] Box rarely-set fields of per-token output types
- [#57035](https://github.com/vllm-project/vllm/pull/57035) [Bugfix] Treat max_tokens as output upper bound, not input-space reservation
- [#60715](https://github.com/vllm-project/vllm/pull/60715) [CI][Test] Allow 10% ngram acceptance drop under preemption on CUDA in test_async_scheduling_accuracy
- [#60872](https://github.com/vllm-project/vllm/pull/60872) [CI][ROCm] Wait for VRAM to settle before building LLM in test_full_graph
- [#60841](https://github.com/vllm-project/vllm/pull/60841) [Frontend] Add cache salt support to generative scoring
- [#57757](https://github.com/vllm-project/vllm/pull/57757) [Bugfix] Clean up async client sockets after event loop closure
- [#60728](https://github.com/vllm-project/vllm/pull/60728) [Frontend] Add return_mm_kwargs to render requests
- [#58871](https://github.com/vllm-project/vllm/pull/58871) [Build] Find compatible published wheels for precompiled installs
- [#60854](https://github.com/vllm-project/vllm/pull/60854) [Docs] Add Giga-Embeddings bidirectional Qwen3 usage to embed docs
- [#60446](https://github.com/vllm-project/vllm/pull/60446) [Bugfix][Kernel] Remove invalid NC from Kimi-K3 KDA autotune keys
- [#60614](https://github.com/vllm-project/vllm/pull/60614) [Security] Do not retain Phi-4 MM audio attention matrices
- [#59732](https://github.com/vllm-project/vllm/pull/59732) [ROCm][Perf] Fuse main QK-norm/RoPE/gate and KV-cache write into the AMD QSA prepare launch
- [#60840](https://github.com/vllm-project/vllm/pull/60840) [Bugfix] Fix pre-commit check
- [#60225](https://github.com/vllm-project/vllm/pull/60225) [Bugfix][LoRA] Reject PEFT adapter features vLLM does not implement
- [#57787](https://github.com/vllm-project/vllm/pull/57787) [XPU]Fix the accuracy issue when meet topk_ids=-1 on DP+EP scenarios
- [#60415](https://github.com/vllm-project/vllm/pull/60415) [Model] Add zerank-2 reranker
- [#59865](https://github.com/vllm-project/vllm/pull/59865) [XPU] fix fused_input_norm for MM
- [#59523](https://github.com/vllm-project/vllm/pull/59523) [ROCm] Enable the cuMem CUDA-graph pool offload on ROCm
- [#57307](https://github.com/vllm-project/vllm/pull/57307) [Tools] Recipes sweep workflow
- [#60053](https://github.com/vllm-project/vllm/pull/60053) [Docs] Fix VLLM_CPU_KVCACHE_SPACE default and units
- [#60763](https://github.com/vllm-project/vllm/pull/60763) [Bugfix][Spec Decode] Fix GLM-5.3-Flash DFlash2/EAGLE3 aux hidden-state capture with the upstream config
- [#60817](https://github.com/vllm-project/vllm/pull/60817) [CI Failure] Move MTEB tests to h200_35gb
- [#58860](https://github.com/vllm-project/vllm/pull/58860) [Bugfix][NIXL] Fix receive post-process for different P/D block sizes
- [#60359](https://github.com/vllm-project/vllm/pull/60359) [Bugfix][Structured Output] Reject unsupported regex inside groups
- [#51956](https://github.com/vllm-project/vllm/pull/51956) [XPU] Support register KV offload mmap region as pinned host memory on XPU
- [#46368](https://github.com/vllm-project/vllm/pull/46368) [Docs] Add Qwen2.5-Coder-7B-Instruct to batch invariance tested models
- [#56027](https://github.com/vllm-project/vllm/pull/56027) [XPU] fix online fp8_per_channel quantization
- [#60757](https://github.com/vllm-project/vllm/pull/60757) [CI] Enroll a third batch of five steps in automatic sharding
- [#60662](https://github.com/vllm-project/vllm/pull/60662) [CI] Enroll five more steps in automatic sharding

#### 🐛 New Issues
- [#60830](https://github.com/vllm-project/vllm/issues/60830) [Bug]: MTP speculative decoding makes response_format {"type": "json_schema", ...} invalid on request for Qwen3.8-Flash-Next `bug` `structured-output` `speculative-decoding` 💬7
- [#60904](https://github.com/vllm-project/vllm/issues/60904) [RFC]: A standard for MonoKernels in vllm/models `rocm` `RFC` `quantization` `kimi` 💬1
- [#60838](https://github.com/vllm-project/vllm/issues/60838) [Bug]: `--mamba-block-size` has no effect in any valid configuration after the removal of `mamba_cache_mode="all"` 💬4
- [#60860](https://github.com/vllm-project/vllm/issues/60860) [Bug]: DeepSeek-V4.1-Flash worker dies with `CUDA error: unspecified launch failure` during long-context decode with dspark spec decode (DP=3, TP=2, EP); Anthropic `/v1/messages` adapter then fails on the error chunk `bug` `deepseek` `quantization` `DSv4.1` 💬3
- [#60765](https://github.com/vllm-project/vllm/issues/60765) [Bug]: Qwen3.5 (hybrid GDN) models cannot run dflash speculative decoding with pipeline parallelism (missing supports_aux_hidden_states_over_pp opt-in) `speculative-decoding` 💬2
- [#60752](https://github.com/vllm-project/vllm/issues/60752) [Bug]: grouped_topk selects wrong experts with more than eight groups 💬2
- [#60845](https://github.com/vllm-project/vllm/issues/60845) [Bug]: CUDA graphs deadlock fully-sharded fused-MoE LoRA across TP ranks 💬1
- [#60778](https://github.com/vllm-project/vllm/issues/60778) [Performance]: Reduce load_weights synchronization overhead for DeepSeek V4 Flash weight updates on H200 `performance` `deepseek` `rl` `quantization` 💬1
- [#60866](https://github.com/vllm-project/vllm/issues/60866) [Usage]: How to reduce the number of Prometheus metrics exposed by vLLM? `usage` 💬1
- [#60871](https://github.com/vllm-project/vllm/issues/60871) [Bug]: Multi-backend block-size selection skips get_preferred_block_size 💬1
- [#60769](https://github.com/vllm-project/vllm/issues/60769) [Bug]: tool_choice="required" with the hermes structural tag drops parallel tool calls (separator forbids the template's newline) `structured-output` `tool-calling` 💬1
- [#60884](https://github.com/vllm-project/vllm/issues/60884) [Usage]: `usage` 💬1
- [#60865](https://github.com/vllm-project/vllm/issues/60865) [Bug]: DotsToolParser drops tool calls when request.tools is None and crashes on FunctionTool `bug` `tool-calling` 💬1
- [#60755](https://github.com/vllm-project/vllm/issues/60755) [Bug]: vLLM 0.31.0 Mooncake connector crashes after Decode timeout `bug` 💬1
- [#60829](https://github.com/vllm-project/vllm/issues/60829) [Bug]: `top_k_per_row_decode` raises an illegal memory access for runtime topK > 8192 instead of a clean error `rocm` 💬1
- [#60819](https://github.com/vllm-project/vllm/issues/60819) [Bug]: Multimodal requests with an encoder input exceeding the per-step admission capacity hang indefinitely (no error, no timeout) `multi-modality`
- [#60935](https://github.com/vllm-project/vllm/issues/60935) [Draft] [RFC]: Support dispatcher-native token dropping for MoE expert capacity `RFC`
- [#60931](https://github.com/vllm-project/vllm/issues/60931) WIP [RFC]: SupportsReload, a single post-load contract and reload verifier (follow-up to #59502) `quantization` `kimi` `k3`
- [#60932](https://github.com/vllm-project/vllm/issues/60932) [RFC]: Peer-device expert tier: run a subset of routed experts on a second GPU in the same host (out-of-tree plugin first, then a small seam in RoutedExperts)
- [#60929](https://github.com/vllm-project/vllm/issues/60929) [Bug][Spec Decode]: DeepGEMM warm-up covers only the target model; speculator GEMMs JIT-load in the serving hot path
- [#60928](https://github.com/vllm-project/vllm/issues/60928) [Bug]: Exception on a non-output TP rank is logged and the worker dequeues the next RPC, so ranks desync and collectives mispair (cross-node deadlock)
- [#60914](https://github.com/vllm-project/vllm/issues/60914) [Bug]: compressed-tensors MXFP4 MoE (`CutlassExpertsMxfp4`) crashes with an illegal memory access on GB200 (SM100) on main `bug` `quantization`
- [#60905](https://github.com/vllm-project/vllm/issues/60905) [Bug]: DeepSeek-V4-Pro returns wrong answers on long prompts (>~380k tokens) when --long-prefill-token-threshold=256 is set (v0.30.0) `deepseek` `DSv4`
- [#60875](https://github.com/vllm-project/vllm/issues/60875) [Bug]: /v1/completions returns HTTP 500 for use_beam_search + echo + logprobs
- [#60897](https://github.com/vllm-project/vllm/issues/60897) [Bug]: token_indices_to_sample underflows past the request's query start with PP > 1 spec decode
- [#60862](https://github.com/vllm-project/vllm/issues/60862) [Bug]: /v1/systemone noul questions without criteria lose label_mass to "Yes"/"No"
- [#60859](https://github.com/vllm-project/vllm/issues/60859) [Bug]: kv_cache_dtype="float16" on a bf16 model crashes the engine during CUDA-graph capture — RuntimeError: query and key must have the same dtype (flash_api.cpp:601) `bug`
- [#60847](https://github.com/vllm-project/vllm/issues/60847) [Bug]: EmbeddingGemma 2 fails at startup on sm_86 and sm_120: triton_prefill_attention needs 163840 B shared memory, limit is 101376 B
- [#60844](https://github.com/vllm-project/vllm/issues/60844) [Feature]: Zero-copy RDMA for the KV cache on DGX Spark (GB10): device memory is not registrable, host-pinned is
- [#60821](https://github.com/vllm-project/vllm/issues/60821) [Performance]: Triton-based attention runs without tensor cores on Turing (SM75) since Triton 3.3, so T4 prefill is up to 15x slower than FlashInfer
- [#60820](https://github.com/vllm-project/vllm/issues/60820) [Bug]: ECExampleConnector.has_cache_item() creates empty hash directories in shared storage on cache-miss lookups
- [#60811](https://github.com/vllm-project/vllm/issues/60811) [Bug]: GPT-OSS LoRA gate/up delta layout mismatch with enable_mixed_moe_lora_format=True `bug` `gpt-oss`
- [#60791](https://github.com/vllm-project/vllm/issues/60791) [Bug]: MiniMax-M3: PP startup, NIXL+PP prefill, NIXL+HMA+DSpark, offload+PP, Mooncake recompute loop `kv-connector` `minimax`
- [#60794](https://github.com/vllm-project/vllm/issues/60794) [Bug]: Sweep result paths collide and silently reuse measurements from another experiment
- [#60771](https://github.com/vllm-project/vllm/issues/60771) [Bug]: deepseek-v4-flash-0731 repeat and Garbled characters `bug` `deepseek` `DSv4`

#### 🔒 Closed Issues
- [#42474](https://github.com/vllm-project/vllm/issues/42474) [Bug]: vLLM rejects requests when max_tokens exceeds available context instead of clamping
- [#44985](https://github.com/vllm-project/vllm/issues/44985) [Bug]: vllm-0.22.0 fail to run "Qwen/Qwen3.5-9B" in offline `LLM` mode
- [#44688](https://github.com/vllm-project/vllm/issues/44688) [Performance]: Qwen3.6-35B-A3B-FP8 on RTX PRO 6000 Blackwell has very low decode throughput; missing FP8 MoE config for E=256,N=256
- [#44973](https://github.com/vllm-project/vllm/issues/44973) [Bug]: [ROCm][FLA] chunk_gated_delta_rule Triton compilation fails on MI210/gfx90a with num_stages=4
- [#60830](https://github.com/vllm-project/vllm/issues/60830) [Bug]: MTP speculative decoding makes response_format {"type": "json_schema", ...} invalid on request for Qwen3.8-Flash-Next
- [#45198](https://github.com/vllm-project/vllm/issues/45198) [Bug]: vllm hangs at Triton kernel JIT compilation during inference: _zero_kv_blocks_kernel with TP=2
- [#45231](https://github.com/vllm-project/vllm/issues/45231) [Feature]: MI300/MI325 DeepSeekv4 Pro (Functional Support & Recipes)
- [#44998](https://github.com/vllm-project/vllm/issues/44998) [Feature]: triton_scaled_mm uses an AMD-tuned fixed tile heuristic — leaves up to 1.82x on NVIDIA H800 (Hopper sm_90)
- [#45088](https://github.com/vllm-project/vllm/issues/45088) [Bug]: Vllm init fails when model-loader-extra-config option provided
- [#57030](https://github.com/vllm-project/vllm/issues/57030) MRV2 `StagedWriteTensor.apply_write` computes row offsets in int32 and walks off the end of the buffer once `row_idx * stride(0) > 2**31`
- [#43807](https://github.com/vllm-project/vllm/issues/43807) [RFC]: Deprecate `kv_both` for NIXLConnector and Enforce Explicit P/D Roles
- [#45079](https://github.com/vllm-project/vllm/issues/45079) [Bug]: [Anthropic] `cache_creation_input_tokens` and `cache_read_input_tokens` missing from `/v1/messages` usage response
- [#45156](https://github.com/vllm-project/vllm/issues/45156) [Bug]: cupy-cuda13x installed instead of cupy-cuda12x in CUDA 12.9 Docker image
- [#45257](https://github.com/vllm-project/vllm/issues/45257) [Bug]: max-num-seqs is not accurate when using async scheduling (especially affects P-D disaggregation prefills)
- [#45303](https://github.com/vllm-project/vllm/issues/45303) Performance tips for AMD MI210?
- [#58579](https://github.com/vllm-project/vllm/issues/58579) [ROCm][Perf][GLM-5.3-Flash]: Support GLM-5.3-Flash with rocm_sparse_attn_decode
- [#60708](https://github.com/vllm-project/vllm/issues/60708) [Feature]: [New Model]: Native support for Qwen3BidirectionalModel (ai-sage/Giga-Embeddings-instruct-480M-0826)
- [#44996](https://github.com/vllm-project/vllm/issues/44996) [RFC]: Fast Runtime Resize of a Pre-Built EP Topology
- [#45020](https://github.com/vllm-project/vllm/issues/45020) [Feature Request] SLEM (String-Level Exact Match) speculative decoding for heterogeneous vocabularies
- [#45023](https://github.com/vllm-project/vllm/issues/45023) [RFC] Add Top-nσ logit truncation example via custom logits processor
- [#45028](https://github.com/vllm-project/vllm/issues/45028) [Installation]: Blocked by CVE-2025-30165 & CVE-2024-11041 (Legacy V0 Engine)
- [#45069](https://github.com/vllm-project/vllm/issues/45069) [RFC]: Profiler support for CUDA graph capture tracing and roofline trace annotations
- [#45075](https://github.com/vllm-project/vllm/issues/45075) [Feature]: Make vLLM compatible with Torch 2.12
- [#45092](https://github.com/vllm-project/vllm/issues/45092) [Bug]: In a dual-machine mixed setup running DP, some nodes fail to reach all_reduce on time, causing Gloo backend 'connection reset by peer'
- [#45174](https://github.com/vllm-project/vllm/issues/45174) [Bug]: KV events replay buffer drops topic frame, breaking external index recovery
- [#45220](https://github.com/vllm-project/vllm/issues/45220) Offering a free security review — no strings attached
- [#45235](https://github.com/vllm-project/vllm/issues/45235) [Bug]: docker离线启动qwen3-asr不支持返回时间戳
- [#45332](https://github.com/vllm-project/vllm/issues/45332) [Bug] test_w8a8_block_fp8_fused_moe uses fixed atol that K=7168 quantization noise legitimately exceeds (fails on SM120/RTX PRO 6000)
- [#60349](https://github.com/vllm-project/vllm/issues/60349) [Bug]: `LLM.generate()` never returns when `max_num_scheduled_tokens=0`
- [#54569](https://github.com/vllm-project/vllm/issues/54569) [Bug]: FunASR get error result with fp16 dtype
- [#59828](https://github.com/vllm-project/vllm/issues/59828) [Bug][DiffusionGemma][CPU]: CPU async output snapshots can alias reused sampler buffers
- [#60587](https://github.com/vllm-project/vllm/issues/60587) [Bug] DeepSeek-V4-Flash-Vision-Exp fails at engine init on v0.31.0: deep_gemm_fp8_o_proj shape mismatch '[4, 4096] vs [4, 1024]' from BOTH sparse-MLA backends (sm_121)
- [#60048](https://github.com/vllm-project/vllm/issues/60048) [Doc]: VLLM_CPU_KVCACHE_SPACE: docs don't match code - no 4GB default anywhere, and values are GiB
- [#57759](https://github.com/vllm-project/vllm/issues/57759) [Bug]: FULL_AND_PIECEWISE capture fails intermittently with cudaErrorNotPermitted when Engram PLE cpu_offload is enabled under load
- [#60875](https://github.com/vllm-project/vllm/issues/60875) [Bug]: /v1/completions returns HTTP 500 for use_beam_search + echo + logprobs
- [#60223](https://github.com/vllm-project/vllm/issues/60223) [Bug]: LoRA adapters using PEFT features vLLM does not implement load without error and give wrong outputs
- [#60344](https://github.com/vllm-project/vllm/issues/60344) [Bug]: `validate_regex_is_buildable` (outlines backend) misses `\b` and backreferences inside groups
- [#60348](https://github.com/vllm-project/vllm/issues/60348) [Bug]: InternLM2 streaming tool parser drops characters from function arguments

### SGLang (`sgl-project/sglang`)

**Stars:** 36,933 · **Open issues:** 5,597 · **Last push:** <1h ago

On October 10, 2026, there were no new releases for SGLang. Significant developments included several merged pull requests, notably the fixing of the deterministic-inference hang related to prefill chunk alignment (#43444) and the addition of support for Qwen-Image 2.1 Turbo in the Diffusion library (#43391). Performance enhancements were also made, including improvements to MiniMax-H3's pipelined Ulysses copies and adjustments to CUDA graph configurations. A notable new issue was reported regarding a bug that causes CUDA VMM multimodal transport slice leaks when requests are aborted while still queued (#43402), signaling a potential area of concern for users.

#### ✅ Merged PRs
- [#43444](https://github.com/sgl-project/sglang/pull/43444) [Scheduler] Fix the deterministic-inference hang when a prefill chunk is shorter than its alignment
- [#42683](https://github.com/sgl-project/sglang/pull/42683) perf(kda): rebalance MTP verify precompute and state synchronization
- [#42982](https://github.com/sgl-project/sglang/pull/42982) [AMD][Fix] Saturate FP8 KV commits instead of reproducing e4m3fnuz NaN overflow
- [#43380](https://github.com/sgl-project/sglang/pull/43380) docs: add Wan-Animate-2 cookbook command picker
- [#43000](https://github.com/sgl-project/sglang/pull/43000) [sgl-router] Serve DeepSeek-V4.1 Flash through sglang-processor
- [#43461](https://github.com/sgl-project/sglang/pull/43461) [srt] Allow mixed chunk prefill on the Full prefill CUDA graph backend
- [#43391](https://github.com/sgl-project/sglang/pull/43391) [Diffusion] Support Qwen-Image 2.1 Turbo and checkpoint sampling grids
- [#43439](https://github.com/sgl-project/sglang/pull/43439) [Fix] Keep request-pool row generations monotonic across clear()
- [#43334](https://github.com/sgl-project/sglang/pull/43334) [XPU] Fix XPU CI breaks from #41105 (KDA chunk_offsets) and #42588 (int4 test tp_group)
- [#43178](https://github.com/sgl-project/sglang/pull/43178) [diffusion] comfyui: report the real runtime import error
- [#43337](https://github.com/sgl-project/sglang/pull/43337) [diffusion] perf: run MiniMax-H3's QK-norm + RoPE two rows per warp, bit-identical
- [#38671](https://github.com/sgl-project/sglang/pull/38671) [Fix] MiniMax H3: honor requested inference step count
- [#43361](https://github.com/sgl-project/sglang/pull/43361) [diffusion] perf: move MiniMax-H3's pipelined Ulysses copies off the SMs
- [#43447](https://github.com/sgl-project/sglang/pull/43447) Disable DualGemm fusion for Inkling dense MLP
- [#42810](https://github.com/sgl-project/sglang/pull/42810) [kernel] SwiGLU-OAI MXFP8 producer; move swizzled MXFP8 producers to ops/quantization
- [#39392](https://github.com/sgl-project/sglang/pull/39392) fix(dsv4): support R3 capture and MXFP4 online updates
- [#43432](https://github.com/sgl-project/sglang/pull/43432) support DeepEP v2 on GLM-5.3
- [#42156](https://github.com/sgl-project/sglang/pull/42156) [DSv4.1] mxfp8 dispatch cache
- [#43292](https://github.com/sgl-project/sglang/pull/43292) [MLX] Sync decode KV to the pool once at release, clamped to the owned prefix
- [#43291](https://github.com/sgl-project/sglang/pull/43291) [MLX] Read radix prefix slots from the model runner's `req_to_token` pool
- [#43284](https://github.com/sgl-project/sglang/pull/43284) [MLX] Drop a retracted request's runner state at its re-prefill
- [#43282](https://github.com/sgl-project/sglang/pull/43282) [MLX] Drain in-flight jobs before a retract-mode `pause_generation`
- [#43407](https://github.com/sgl-project/sglang/pull/43407) [PD] Use 1 to disable decode host receive and 0 for always-on
- [#41620](https://github.com/sgl-project/sglang/pull/41620) ci: diffusion-only option for the runner utilization report
- [#43211](https://github.com/sgl-project/sglang/pull/43211) [Fix] Unblock CUDA graph startup for hybrid parallelism
- [#42238](https://github.com/sgl-project/sglang/pull/42238) [Perf] Reduce multi-detokenizer router IPC sends
- [#43303](https://github.com/sgl-project/sglang/pull/43303) [cuda_graph] Size dp-local decode graphs by the runner's own gather requirement
- [#42614](https://github.com/sgl-project/sglang/pull/42614) [AMD] MiniMax-M3 indexer CP: packed scoring for EAGLE verify rows
- [#41845](https://github.com/sgl-project/sglang/pull/41845) [Fix] MiniMax-M3: default to the breakable prefill CUDA graph
- [#43259](https://github.com/sgl-project/sglang/pull/43259) [AMD] Run the MiniMax indexer CP test on MI35X, not MI300
- [#42987](https://github.com/sgl-project/sglang/pull/42987) [DSpark] Fold draft sampling for DeepSeek-V4.1 heads under AUTO
- [#31768](https://github.com/sgl-project/sglang/pull/31768) [Model] Add LLaDA2.2 Block Routing MoE support
- [#42845](https://github.com/sgl-project/sglang/pull/42845) [GLM-5.3-Flash] Enable breakable prefill CUDA graph by default
- [#43301](https://github.com/sgl-project/sglang/pull/43301) [Multimodal] Chunk and cache audio items whose offsets span several placeholder runs
- [#43177](https://github.com/sgl-project/sglang/pull/43177) Overlap scheduler startup with the data parallel controller
- [#43245](https://github.com/sgl-project/sglang/pull/43245) [moe] Fill num_token_non_padded for the customized A2A backend at EP 1
- [#42889](https://github.com/sgl-project/sglang/pull/42889) [Perf] Serialize OpenAI chat/completion responses in one pass
- [#43384](https://github.com/sgl-project/sglang/pull/43384) Fix torch.compile crash in fused gate-sigmoid-mul launcher
- [#42422](https://github.com/sgl-project/sglang/pull/42422) [diffusion] Fix TeaCache CFG state lifecycle and skip boundaries
- [#43327](https://github.com/sgl-project/sglang/pull/43327) [diffusion] perf: fuse MiniMax-H3's RMSNorm and indexed AdaLN under quality lossless
- [#43349](https://github.com/sgl-project/sglang/pull/43349) docs: add Clef accuracy results to the deployment wizard
- [#43164](https://github.com/sgl-project/sglang/pull/43164) [diffusion] perf: pipeline MiniMax-H3's Ulysses exchange against attention over the copy engine
- [#41259](https://github.com/sgl-project/sglang/pull/41259) [Frontend] Parallelize long chat prompt encoding
- [#41258](https://github.com/sgl-project/sglang/pull/41258) [AMD] Let the GLM DSA NextN draft declare its own shared-expert fusion architecture
- [#41030](https://github.com/sgl-project/sglang/pull/41030) [AMD] Eliminate remaining gfx95 FP8 scale relayout copies
- [#39696](https://github.com/sgl-project/sglang/pull/39696) [Performance] Batch Mooncake hybrid-pool metadata and puts
- [#42999](https://github.com/sgl-project/sglang/pull/42999) [sgl-router] Parse tool calls when serving chat through /generate
- [#35310](https://github.com/sgl-project/sglang/pull/35310) [diffusion] Allow per-role attention backend override
- [#38959](https://github.com/sgl-project/sglang/pull/38959) [PP+PD] Fix #38206 Reduce bootstrap consensus latency
- [#42941](https://github.com/sgl-project/sglang/pull/42941) [diffusion] model: support Wan-Animate-2
- [#35694](https://github.com/sgl-project/sglang/pull/35694) [mem_cache] Bound FlexKV checkpoint stores and restore DSPARK cache checks
- [#42523](https://github.com/sgl-project/sglang/pull/42523) test: allow bounded checkpoint lag in Mamba HiCache tests
- [#23772](https://github.com/sgl-project/sglang/pull/23772) fix(zimage): align SGLD CFG combine formula with diffusers Z-Image
- [#42998](https://github.com/sgl-project/sglang/pull/42998) [sgl-router] Serve /v1/chat/completions through /generate, with reasoning parsing
- [#42175](https://github.com/sgl-project/sglang/pull/42175) [Performance] Optimize Qwen3.8-Flash-Next BF16 decode on Blackwell
- [#43267](https://github.com/sgl-project/sglang/pull/43267) [diffusion] perf: tile MiniMax-H3's indexed modulation kernels by 2048 columns
- [#41601](https://github.com/sgl-project/sglang/pull/41601) docs: add thinking budget guide
- [#43321](https://github.com/sgl-project/sglang/pull/43321) Add BJWang-ant to CI_Permission
- [#43340](https://github.com/sgl-project/sglang/pull/43340) [NPU] Bump SGLANG_KERNEL_NPU_TAG to 2026.9.0.post9
- [#41492](https://github.com/sgl-project/sglang/pull/41492) [diffusion][model] Add native SANA-Video 2.0 support
- [#41887](https://github.com/sgl-project/sglang/pull/41887) Add blackwell dual gemm fusion support for MLP
- [#42570](https://github.com/sgl-project/sglang/pull/42570) [AMD] Set maxseq length limit for DSV4.1 BCG metadata buffers
- [#43319](https://github.com/sgl-project/sglang/pull/43319) [AMD] Patch aiter's group32 MXFP8 GEMM masked-scale fix
- [#43235](https://github.com/sgl-project/sglang/pull/43235) [Docs] Add Clef cookbook with selectable Clef Flash variant
- [#43336](https://github.com/sgl-project/sglang/pull/43336) [NPU] [DOC] remove --enable-torch-compile from Ascend support matrix
- [#43297](https://github.com/sgl-project/sglang/pull/43297) [LoRA][Test] Use the 0.9 ROUGE-L tolerance for the CUDA multi-LoRA batch test
- [#41706](https://github.com/sgl-project/sglang/pull/41706) Fix CFG normalization to use per-sample norm instead of batch-flattened norm
- [#36470](https://github.com/sgl-project/sglang/pull/36470) [diffusion] feat: enable breakable CUDA graphs for FLUX.2 Klein
- [#43269](https://github.com/sgl-project/sglang/pull/43269) [diffusion] fix: share the IPC all-to-all transport between AllToAll4D and USP
- [#43064](https://github.com/sgl-project/sglang/pull/43064) [diffusion] Remove unused helpers and write-only state
- [#42896](https://github.com/sgl-project/sglang/pull/42896) [Fix] Run attention on a padded extend batch's real rows
- [#28021](https://github.com/sgl-project/sglang/pull/28021) [diffusion] Enable channels_last_3d for Cosmos3 VAE
- [#42895](https://github.com/sgl-project/sglang/pull/42895) [Fix] Shard Kimi K3's shared experts over the TP group they sum over
- [#42936](https://github.com/sgl-project/sglang/pull/42936) [Refactor] Remove Kimi K3's own layer communication and let the consumer set an FFN's exit
- [#42898](https://github.com/sgl-project/sglang/pull/42898) [Refactor] Run Kimi K3's fused collectives through stage boundaries
- [#42893](https://github.com/sgl-project/sglang/pull/42893) [Fix] Kimi K3 KDA value head size and SiTU input alignment
- [#42894](https://github.com/sgl-project/sglang/pull/42894) [Refactor] Run Kimi K3 through stage boundaries
- [#42897](https://github.com/sgl-project/sglang/pull/42897) [Refactor] Support attention-TP dense FFNs and unpadded batches on stage boundaries
- [#42892](https://github.com/sgl-project/sglang/pull/42892) [Fix] Return an FFN's output to the attention rows at a pipeline handoff
- [#42899](https://github.com/sgl-project/sglang/pull/42899) [diffusion] Deduplicate UniPC solvers and Gemma3 shard loading
- [#42891](https://github.com/sgl-project/sglang/pull/42891) [Fix] Merge DeepSeek-V4 two-batch-overlap microbatches without a residual
- [#42997](https://github.com/sgl-project/sglang/pull/42997) [sgl-router] Serve /v1/completions through /generate, with the shared OpenAI layer

#### 🐛 New Issues
- [#43402](https://github.com/sgl-project/sglang/issues/43402) [Bug] CUDA VMM multimodal transport slice leaks when a request is aborted while still queued 💬2
- [#43313](https://github.com/sgl-project/sglang/issues/43313) SGLang-Diffusion Roadmap (2026 Q4) `diffusion` `roadmap` 💬1
- [#43418](https://github.com/sgl-project/sglang/issues/43418) Batch image outputs in server mode 💬1
- [#43294](https://github.com/sgl-project/sglang/issues/43294) [MegaMoE] W4A4 (mxf4xmxf4) target path for Kimi-K3: feature-completion patches + bs=1 perf/numerics findings 💬1
- [#43342](https://github.com/sgl-project/sglang/issues/43342) [Bug] RuntimeError: Failed at /sgl-workspace/sglang/python/sglang/kernels/jit/csrc/gemm/marlin/gptq_marlin_repack.cuh:311: size_n = 8608 is not divisible by tile_n_size = 64 💬1
- [#43273](https://github.com/sgl-project/sglang/issues/43273) [Bug] Glm47MoeDetector streaming emits invalid JSON for array/object/boolean values that aren't strict JSON ("1, 2", "True", empty) 💬1
- [#43287](https://github.com/sgl-project/sglang/issues/43287) [Bug] EAGLE + DP attention: idle verify crashes with AttributeError: 'EagleVerifyInput' object has no attribute 'kv_indptr' (triton, eager) 💬1
- [#43434](https://github.com/sgl-project/sglang/issues/43434) [Bug] Gemma4ForCausalLM loader ignores global_head_dim for full-attention layers — text-only Gemma‑4 A4B checkpoints fail to load (same weights load fine as Gemma4ForConditionalGeneration)
- [#43428](https://github.com/sgl-project/sglang/issues/43428) [Feature] Add native SmolLM3 support
- [#43413](https://github.com/sgl-project/sglang/issues/43413) [Bug] `--enable-deterministic-inference` does not make hybrid Mamba2 models (granite-4.0-h) batch-invariant
- [#43412](https://github.com/sgl-project/sglang/issues/43412) Speculative decoding crashes server on first non-greedy request: flashinfer verify-sampling op JIT fails (bundled cccl vs pip cu13 toolkit) and kills the process tree
- [#43411](https://github.com/sgl-project/sglang/issues/43411) [RFC] Native worker batching for ComfyUI diffusion requests
- [#43409](https://github.com/sgl-project/sglang/issues/43409) [Bug] [diffusion] /v1/images/edits accepts a mask upload but silently ignores it
- [#43395](https://github.com/sgl-project/sglang/issues/43395) ComfyUI-mode cannot load FLUX.1-schnell single-file checkpoints
- [#43379](https://github.com/sgl-project/sglang/issues/43379) [Feature] [Diffusion] Support LingBot-VLA 2.0
- [#43352](https://github.com/sgl-project/sglang/issues/43352) [Bug] runai_streamer: CPU-path tensors alias the streamer's staging buffers, so loaders that hold a tensor read overwritten bytes
- [#43351](https://github.com/sgl-project/sglang/issues/43351) [Feature] Support quality choices for Ascend NPU Diffusion
- [#43331](https://github.com/sgl-project/sglang/issues/43331) [Bug] CuTe DSL GDN decode reads the state pool transposed, producing garbage output
- [#43324](https://github.com/sgl-project/sglang/issues/43324) [Bug] EP standard dispatch: -1 sentinel aliases to last local expert, padded spec-verify rows overflow masked-GEMM per-expert m_max (OOB stores, engine crash)
- [#43314](https://github.com/sgl-project/sglang/issues/43314) MLLM Roadmap (2026 q4) `Multi-modal` `vlm` `roadmap`
- [#43304](https://github.com/sgl-project/sglang/issues/43304) [Feature] Metrics to localize bottlenecks in the multi-tokenizer / multi-detokenizer IPC path
- [#43263](https://github.com/sgl-project/sglang/issues/43263) [Playground] Verified cell: h100 / default / fp8 / low-latency / single

#### 🔒 Closed Issues
- [#11762](https://github.com/sgl-project/sglang/issues/11762) [Feature] Overlap Spec Support
- [#31023](https://github.com/sgl-project/sglang/issues/31023) [Bug] DSpark compact target-verify CUDA Graph transition can hit timing-sensitive illegal memory access on TP8
- [#33356](https://github.com/sgl-project/sglang/issues/33356) [Bug] DSpark large decode CUDA-Graph capture can hit non-deterministic illegal memory on TP8 (v0.5.16)
- [#32432](https://github.com/sgl-project/sglang/issues/32432) [RFC] Define Metadata, Workspace, and Stream-Ownership Contracts for Dynamic CUDA Graph Replay
- [#33625](https://github.com/sgl-project/sglang/issues/33625) [Feature] Add opt-in bounded-load routing-key affinity to SGLang Model Gateway
- [#29160](https://github.com/sgl-project/sglang/issues/29160) [Bug] GLM-5.2: A Very Difficult to Reproduce Operator Bug of MoE
- [#32833](https://github.com/sgl-project/sglang/issues/32833) [RFC] [MLX] Write down the per-step contract that a replacement event loop must satisfy
- [#32841](https://github.com/sgl-project/sglang/issues/32841) [RFC] Asynchronous completion handling for the HiCache NIXL storage backend
- [#33412](https://github.com/sgl-project/sglang/issues/33412) [Bug] DSPARK compact ragged-verify (SGLANG_RAGGED_VERIFY_MODE=compact) crashes decode CUDA-graph capture on SM120: IMA in fused_norm_rope_v2 c4 compressor store
- [#34111](https://github.com/sgl-project/sglang/issues/34111) [Bug] A cancelled grammar-constrained overlap request can still emit visible text before abort
- [#34205](https://github.com/sgl-project/sglang/issues/34205) [Bug] Aborted LoRA requests retain a LoRARegistry reference
- [#42415](https://github.com/sgl-project/sglang/issues/42415) fix(mlx): repeated chat returns unrelated text after native generation
- [#34239](https://github.com/sgl-project/sglang/issues/34239) [Bug] Qwen3.5-397B + NEXTN crashes with CUDA illegal memory access near 262144 context boundary on v0.5.16 (H800 TP8)
- [#34211](https://github.com/sgl-project/sglang/issues/34211) [Bug] [NPU] (v0.5.17)Eco-Tech/Qwen3.6-35B-A3B-w8a8 Model Served with four 910B: ValueError: Unsupported ModelSlim MoE schemes for layer mtp.layers.0.mlp.experts: W13='FLOAT', W2='FLOAT'
- [#34209](https://github.com/sgl-project/sglang/issues/34209) [Bug] /v1/responses API fails with 400 when stream parameter is not specified (None vs bool type mismatch)
- [#41490](https://github.com/sgl-project/sglang/issues/41490) [Feature] Support SANA-Video 2.0 (T2V and TI2V)
- [#43040](https://github.com/sgl-project/sglang/issues/43040) [Bug] In the -dp-size=2 scenario, when the --msprobe-dump-config parameter is used to collect profile data, only the data of one card is collected
- [#43175](https://github.com/sgl-project/sglang/issues/43175) [Bug] [diffusion] ComfyUI plugin reports 'sglang.multimodal_gen is not installed' for any import error
- [#35054](https://github.com/sgl-project/sglang/issues/35054) [Bug][Diffusion] TeaCache CFG lifecycle double resets serial CFG and leaks state with CFG parallel
- [#38206](https://github.com/sgl-project/sglang/issues/38206) [Performance][PP/PD] Bootstrap admission waits ~7.8s for consensus under PP16 concurrent prefill
- [#41705](https://github.com/sgl-project/sglang/issues/41705) [Bug] CFG normalization uses global (batch-flattened) norm instead of per-sample norm in multimodal_gen
- [#42409](https://github.com/sgl-project/sglang/issues/42409) [Feature] Cloudflare Clef support

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 130,660 · **Open issues:** 2,490 · **Last push:** 3h ago

Today, llama.cpp saw the release of multiple new versions, including b11539, which applied a deep nested JSON patch from upstream, and b11538, which addressed a rounding issue in CUDA for better CPU-GPU agreement under MSVC. Notable merged features included a chat API refactor in PR #30210 and a fix for an out-of-bounds write issue in ggml, ensuring enhanced stability. However, a significant concern arose with the new issue #30248 reporting a performance regression on SYCL, indicating potential challenges in maintaining performance consistency across platforms. Overall, the updates reflect ongoing efforts to improve performance and usability while also addressing critical bugs.

#### 🚀 New Releases
- [b11539](https://github.com/ggml-org/llama.cpp/releases/tag/b11539) b11539
- [b11538](https://github.com/ggml-org/llama.cpp/releases/tag/b11538) b11538
- [b11537](https://github.com/ggml-org/llama.cpp/releases/tag/b11537) b11537
- [b11535](https://github.com/ggml-org/llama.cpp/releases/tag/b11535) b11535
- [b11534](https://github.com/ggml-org/llama.cpp/releases/tag/b11534) b11534
- [b11533](https://github.com/ggml-org/llama.cpp/releases/tag/b11533) b11533
- [b11532](https://github.com/ggml-org/llama.cpp/releases/tag/b11532) b11532
- [b11531](https://github.com/ggml-org/llama.cpp/releases/tag/b11531) b11531
- [b11530](https://github.com/ggml-org/llama.cpp/releases/tag/b11530) b11530
- [b11529](https://github.com/ggml-org/llama.cpp/releases/tag/b11529) b11529

#### ✅ Merged PRs
- [#30214](https://github.com/ggml-org/llama.cpp/pull/30214) ci : set run-name for publish release
- [#30253](https://github.com/ggml-org/llama.cpp/pull/30253) vendor: apply deep nested json patch from upstream
- [#30229](https://github.com/ggml-org/llama.cpp/pull/30229) CUDA: fix round issue, under MSVC the CPU and GPU agree
- [#30160](https://github.com/ggml-org/llama.cpp/pull/30160) graph : reorder get_rows for embeddings
- [#30228](https://github.com/ggml-org/llama.cpp/pull/30228) ui: Models Manager Follow-up Improvements
- [#28331](https://github.com/ggml-org/llama.cpp/pull/28331) respect -fitc from llama-bench instead of using the benchmark context size
- [#29807](https://github.com/ggml-org/llama.cpp/pull/29807) CUDA: Remove redundant CUDA copies after SSM_SCAN
- [#30176](https://github.com/ggml-org/llama.cpp/pull/30176) opencl: fix kernel compilation for a6x GPUs
- [#30135](https://github.com/ggml-org/llama.cpp/pull/30135) ggml: fix OOB write in ggml_acc / ggml_set with negative offset
- [#30108](https://github.com/ggml-org/llama.cpp/pull/30108) model : use exact GELU for ModernBERT encoders
- [#30210](https://github.com/ggml-org/llama.cpp/pull/30210) chat : refactor API
- [#30223](https://github.com/ggml-org/llama.cpp/pull/30223) llama: keep the backend sampling graph static across ubatches
- [#30219](https://github.com/ggml-org/llama.cpp/pull/30219) webgpu: use 2D workgroup dispatch for all the ops which use 1D dispatch (e.g., rms_norm)
- [#30217](https://github.com/ggml-org/llama.cpp/pull/30217) meta : handle host views
- [#30145](https://github.com/ggml-org/llama.cpp/pull/30145) vulkan: fix rms_norm workgroup count overflow
- [#28636](https://github.com/ggml-org/llama.cpp/pull/28636) Convert: Support conversion to gguf for compressed-tensor mixed-precision NVFP4 checkpoint
- [#29375](https://github.com/ggml-org/llama.cpp/pull/29375) sycl : Q5_K reorder-layout MMVQ and fused GLU
- [#30203](https://github.com/ggml-org/llama.cpp/pull/30203) musa: drop mp_21 from the default architectures
- [#30216](https://github.com/ggml-org/llama.cpp/pull/30216) Fix CI: Fix models Backend webgpu by supporting GGML_OP_DUP
- [#30159](https://github.com/ggml-org/llama.cpp/pull/30159) server: use port 9931 by default
- [#29583](https://github.com/ggml-org/llama.cpp/pull/29583) ui : add the models manager
- [#30212](https://github.com/ggml-org/llama.cpp/pull/30212) ci: fix HIP quality check by ignoring the 320/256 FA kernel spill
- [#30209](https://github.com/ggml-org/llama.cpp/pull/30209) metal: add the 128/96 flash attention kernels
- [#30168](https://github.com/ggml-org/llama.cpp/pull/30168) CUDA: pass src1 precision to host MMQ config helpers
- [#30189](https://github.com/ggml-org/llama.cpp/pull/30189) hexagon: fix IM2COL patch-embed DMA ring overflow

#### 🐛 New Issues
- [#30248](https://github.com/ggml-org/llama.cpp/issues/30248) Eval bug: SYCL: performance regression on PP `bug-unconfirmed` 💬2
- [#30199](https://github.com/ggml-org/llama.cpp/issues/30199) Misc. bug: Flaky test-recurrent-state-rollback results on Intel Linux Vulkan `bug-unconfirmed` 💬2
- [#30252](https://github.com/ggml-org/llama.cpp/issues/30252) server : saving idle slots to the prompt cache stalls all requests for seconds with interleaved KV cells `bug-unconfirmed` 💬1
- [#30251](https://github.com/ggml-org/llama.cpp/issues/30251) Windows/Vulkan/gfx1151: repeated failed allocations poison device memory until reboot (driver-side leak; reproducible) 💬1
- [#30238](https://github.com/ggml-org/llama.cpp/issues/30238) Feature Request: Add support for configurable completion endpoints `enhancement` 💬1
- [#30225](https://github.com/ggml-org/llama.cpp/issues/30225) Feature Request: Stop lazy grammar trigger pattern search time from growing with buffer size `enhancement` 💬1
- [#30258](https://github.com/ggml-org/llama.cpp/issues/30258) Misc. bug: Smart App Control blocks DLLs in official Windows Vulkan bundles (b11429 / b11535) `bug-unconfirmed`
- [#30256](https://github.com/ggml-org/llama.cpp/issues/30256) Eval bug: Gemma 4 – json_schema grammar allows a thought channel although enable_thinking is false
- [#30250](https://github.com/ggml-org/llama.cpp/issues/30250) Misc. bug: `bug-unconfirmed`
- [#30246](https://github.com/ggml-org/llama.cpp/issues/30246) K2 Horizon: low/medium effort leaves final text and tool calls in reasoning_content
- [#30240](https://github.com/ggml-org/llama.cpp/issues/30240) Misc. bug: Vulkan: MUL_MAT_ID small tile hangs Intel Arc A770 (DG2) at small batch sizes → VK_ERROR_DEVICE_LOST `bug-unconfirmed`
- [#30237](https://github.com/ggml-org/llama.cpp/issues/30237) Misc. bug: Metal mul_mv destination offsets overflow for large batched outputs
- [#30235](https://github.com/ggml-org/llama.cpp/issues/30235) CUDA: Pascal DP4A MMQ config uses I=64 for Q8_0; I=128 gives +12% pp512 on sm_61
- [#30231](https://github.com/ggml-org/llama.cpp/issues/30231) Feature Request: Vectorize GEGLU and GELU `enhancement`
- [#30230](https://github.com/ggml-org/llama.cpp/issues/30230) Eval bug: Vulkan + mmproj: ~250x slower generation with a UD-Q3_K_XL quant of Qwen3.5-35B-A3B (same projector is fine with the IQ3_XXS quant)
- [#30224](https://github.com/ggml-org/llama.cpp/issues/30224) Eval bug: Mistral Small 4 CUDA expert down-projections fall back to CPU despite 37/37 layers offloaded `bug-unconfirmed`
- [#30204](https://github.com/ggml-org/llama.cpp/issues/30204) Eval bug: GLM-5.3-Flash + mmproj + --spec-type draft-mtp: every image request fails with "failed to process speculative batch" (Vulkan), no per-request opt-out
- [#30195](https://github.com/ggml-org/llama.cpp/issues/30195) Eval bug: EmbeddingGemma-2 vision is generating more tokens than set. `bug-unconfirmed`

#### 🔒 Closed Issues
- [#24795](https://github.com/ggml-org/llama.cpp/issues/24795) Eval bug: gemma4-assistant MTP draft model fails to load — "invalid vector subscript" (regression: works on b9553, broken on b9702/b9717)
- [#23210](https://github.com/ggml-org/llama.cpp/issues/23210) Eval bug: llama-server crashes on CUDA with Qwen3.6-27B
- [#25304](https://github.com/ggml-org/llama.cpp/issues/25304) [CUDA] cublasCreate_v2 resource allocation failure on first inference — regression between b9553 and b9870
- [#30033](https://github.com/ggml-org/llama.cpp/issues/30033) Eval bug: Performance degradation since (PR #29622) with unsloth/Qwen3.8-Flash-Next-GGUF:UD-IQ3_XXS and dual Intel B70
- [#27556](https://github.com/ggml-org/llama.cpp/issues/27556) HIP backend silently corrupts Qwen3.5-27B (Gated DeltaNet) inference on gfx1151 - oldest context lost; Vulkan correct at identical commit
- [#26949](https://github.com/ggml-org/llama.cpp/issues/26949) Eval bug: Metal: GGML_ASSERT(buf_src) failed in ggml_metal_buffer_set_tensor on Intel Mac with AMD discrete GPU (newBufferWithBytesNoCopy page-alignment requirement)
- [#27724](https://github.com/ggml-org/llama.cpp/issues/27724) input_video rejects data URLs: "Failed to load image or audio file" — data: URLs fall into the raw-base64 branch (accept_base64_uri=false)
- [#27767](https://github.com/ggml-org/llama.cpp/issues/27767) Eval bug: named/required tool_choice not enforced for Qwen3.6 templates when enable_thinking=false
- [#29868](https://github.com/ggml-org/llama.cpp/issues/29868) Eval bug: Qwen3.8-27B + `--spec-type draft-mtp` + `--split-mode tensor` on ROCm (2x RX 9060 XT) hard-freezes the whole machine
- [#27732](https://github.com/ggml-org/llama.cpp/issues/27732) Misc. bug:
- [#27740](https://github.com/ggml-org/llama.cpp/issues/27740) Misc. bug: pvs-studio -report
- [#27749](https://github.com/ggml-org/llama.cpp/issues/27749) Misc. bug:
- [#27769](https://github.com/ggml-org/llama.cpp/issues/27769) SYCL: flash attention returns a silently wrong answer for a quantised, non-contiguous KV view (Arc 140T, Xe-LPG)
- [#30171](https://github.com/ggml-org/llama.cpp/issues/30171) ggml-cuda: GGML_OP_NORM returns all-NaN rows for some constant inputs (one-pass variance)
- [#29406](https://github.com/ggml-org/llama.cpp/issues/29406) Eval bug: CUDA ROUND rounds half to even with an MSVC host compiler (test-backend-ops ROUND f16 fails)

### Ollama (`ollama/ollama`)

**Stars:** 182,547 · **Open issues:** 4,230 · **Last push:** 4h ago

On October 10, 2026, Ollama did not release any new versions but saw some significant developments in merged pull requests. Notably, PR #18908 addressed server-side concerns by skipping local model compatibility migration, while PR #18878 improved user experience by suppressing the Claude Code connector warning. Among the new issues raised, #18909 stands out as it requests an option to disable automatic model upgrades, indicating user interest in greater control over their model environments. Overall, it was a routine day punctuated by these enhancements and user requests.

#### ✅ Merged PRs
- [#18908](https://github.com/ollama/ollama/pull/18908) server: skip local model compatibility migration
- [#18878](https://github.com/ollama/ollama/pull/18878) launch: suppress Claude Code connector warning for Ollama

#### 🐛 New Issues
- [#18909](https://github.com/ollama/ollama/issues/18909) Option to disable automatic model upgrade `feature request` 💬1
- [#18890](https://github.com/ollama/ollama/issues/18890) Request to add d1-3B and d1-omni-600M `model`
- [#18898](https://github.com/ollama/ollama/issues/18898) Gemma4:12b throws: "Gemma4Assistant requires ctx_other to be set" `bug`

#### 🔒 Closed Issues
- [#18850](https://github.com/ollama/ollama/issues/18850) Request for good models on the cloud like Qwen 3.8 flash next , mimo v2.6 , hy4 , stepfun , laguna , refelction ai etc etc
- [#18876](https://github.com/ollama/ollama/issues/18876) Phone number verification
- [#18864](https://github.com/ollama/ollama/issues/18864) Probabilities output is messed up
- [#18909](https://github.com/ollama/ollama/issues/18909) Option to disable automatic model upgrade
- [#18575](https://github.com/ollama/ollama/issues/18575) /v1/chat/completions ignores max_tokens AND overrides the Modelfile num_predict default, leaving generation unbounded

### LiteLLM (`BerriAI/litellm`)

**Stars:** 60,693 · **Open issues:** 5,408 · **Last push:** <1h ago

Today, LiteLLM released version v1.106.0-dev.3, which includes enhanced security measures as all Docker images are now signed with cosign for integrity verification. Key merged features include the introduction of support for the Microsoft Decision 1 in the decisions API, improvements for the Admin UI allowing administrators to find and test decision models, and a new Databricks AI_decide provider for automated routing. Additionally, several critical bug fixes addressed issues such as the handling of Entra ID guest emails in the Edit Team Member modal and the problematic bridge conversion for chat responses that affected Databricks compatibility. Among the new issues reported, a significant bug related to the Mistral model was noted, where `reasoning_content` is incorrectly reported, potentially impacting users' experiences.

#### 🚀 New Releases
- [v1.106.0-dev.3](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-dev.3) v1.106.0-dev.3

#### ✅ Merged PRs
- [#45303](https://github.com/BerriAI/litellm/pull/45303) fix(gemini): map OpenAI voice names to Gemini prebuilt TTS voices
- [#45659](https://github.com/BerriAI/litellm/pull/45659) fix(databricks): keep #/$defs refs in json_schema response_format
- [#45706](https://github.com/BerriAI/litellm/pull/45706) ci: finish the lint, unit and smoke check layout
- [#45654](https://github.com/BerriAI/litellm/pull/45654) feat(ui): let admins find, call, and test decision models from the Admin UI
- [#43707](https://github.com/BerriAI/litellm/pull/43707) fix(ui): resolve the provider dropdown key to the slug the backend declares
- [#45579](https://github.com/BerriAI/litellm/pull/45579) fix(bedrock): keep GPT tool-result images beside the tool result
- [#44590](https://github.com/BerriAI/litellm/pull/44590) fix(bedrock): keep tool_reference results as text on converse
- [#45688](https://github.com/BerriAI/litellm/pull/45688) fix(ui): accept guest email addresses in member forms
- [#44994](https://github.com/BerriAI/litellm/pull/44994) fix(proxy): keep the mapped status on assistants and threads route errors
- [#45673](https://github.com/BerriAI/litellm/pull/45673) feat(azure_ai): support Microsoft-Decision-1 on the decisions API
- [#45684](https://github.com/BerriAI/litellm/pull/45684) docs(agents): ban semicolons and colons in human-facing text
- [#45626](https://github.com/BerriAI/litellm/pull/45626) feat(rust): add the Vertex AI Anthropic Messages config
- [#45614](https://github.com/BerriAI/litellm/pull/45614) feat(rust): add the DeepSeek Anthropic Messages config
- [#45611](https://github.com/BerriAI/litellm/pull/45611) refactor(rust): give Messages configs typed litellm params
- [#45642](https://github.com/BerriAI/litellm/pull/45642) refactor(rust): one LitellmParams type for a config and a caller
- [#45641](https://github.com/BerriAI/litellm/pull/45641) refactor(rust): type the Vertex AI connection params in auth-gcp
- [#45610](https://github.com/BerriAI/litellm/pull/45610) refactor(rust): type the AWS connection params in auth-aws
- [#45200](https://github.com/BerriAI/litellm/pull/45200) feat(decisions): add Databricks ai_decide as a /v1/decisions provider and auto-router decider
- [#45529](https://github.com/BerriAI/litellm/pull/45529) refactor(lens): connect LiteLLM to the independent Lens service
- [#45516](https://github.com/BerriAI/litellm/pull/45516) feat(policy-engine): stream detect-only post_call pipeline steps live when buffering is off
- [#45647](https://github.com/BerriAI/litellm/pull/45647) fix(model_prices): registry audit, perplexity agent api models and claude-sonnet-4-5 200k context
- [#45669](https://github.com/BerriAI/litellm/pull/45669) refactor(cost-map): remove openrouter rows, part 5 of 5
- [#45668](https://github.com/BerriAI/litellm/pull/45668) refactor(cost-map): remove openrouter rows, part 4 of 5
- [#45687](https://github.com/BerriAI/litellm/pull/45687) fix(ui): show the Microsoft 365 Copilot logo instead of the Azure one
- [#44782](https://github.com/BerriAI/litellm/pull/44782) fix(proxy): sign RDS IAM tokens for the database's own region
- [#45252](https://github.com/BerriAI/litellm/pull/45252) perf(proxy): keep stream end output and Redis cache debug strings off the event loop
- [#45667](https://github.com/BerriAI/litellm/pull/45667) refactor(cost-map): remove openrouter rows, part 3 of 5
- [#45545](https://github.com/BerriAI/litellm/pull/45545) fix(cost): preserve zero hourly cache write rates in pricing tiers
- [#45386](https://github.com/BerriAI/litellm/pull/45386) chore(github_copilot): sync model catalog with Copilot's served models
- [#45241](https://github.com/BerriAI/litellm/pull/45241) feat(github_copilot): per-user GitHub OAuth connections for Copilot credentials
- [#45158](https://github.com/BerriAI/litellm/pull/45158) feat(microsoft_365_copilot): add Microsoft 365 Copilot chat provider with OAuth token exchange
- [#45666](https://github.com/BerriAI/litellm/pull/45666) refactor(cost-map): remove openrouter rows, part 2 of 5
- [#45664](https://github.com/BerriAI/litellm/pull/45664) fix(bedrock): drop stop sequences for GPT 5.6 and newer instead of forwarding them to a 400
- [#45675](https://github.com/BerriAI/litellm/pull/45675) test(mcp): make scope-discovery server aliases digits-only
- [#45665](https://github.com/BerriAI/litellm/pull/45665) refactor(cost-map): remove openrouter rows, part 1 of 5
- [#45244](https://github.com/BerriAI/litellm/pull/45244) feat(proxy): track failed requests by HTTP status and caller
- [#45396](https://github.com/BerriAI/litellm/pull/45396) feat(ui): add Errors tab to Usage with failure rate, status and identity breakdowns
- [#43981](https://github.com/BerriAI/litellm/pull/43981) fix(bedrock): list the account's invocable models behind bedrock/* when check_provider_endpoint is on
- [#45473](https://github.com/BerriAI/litellm/pull/45473) feat(bedrock): default Grok on Bedrock to native Chat Completions, mint unique tool call ids and drop stop
- [#45661](https://github.com/BerriAI/litellm/pull/45661) test(decisions): add hosted_vllm /v1/decisions and provider-400 translation cases
- [#45404](https://github.com/BerriAI/litellm/pull/45404) feat(teams): let proxy admins grant team admins the right to raise their team budget
- [#45498](https://github.com/BerriAI/litellm/pull/45498) fix(rust): update serde_with for serialization advisory
- [#45640](https://github.com/BerriAI/litellm/pull/45640) fix(openrouter): bill Responses, Decisions and pass-through from OpenRouter usage.cost, always allow reasoning params
- [#45657](https://github.com/BerriAI/litellm/pull/45657) fix(cost-map): add 2026-10-22 deprecation_date to two together_ai rows
- [#45656](https://github.com/BerriAI/litellm/pull/45656) feat(pricing): add github_copilot/claude-haiku-5.5
- [#45636](https://github.com/BerriAI/litellm/pull/45636) chore(greptile): load nested AGENTS.md files as review context scoped to their directories
- [#45653](https://github.com/BerriAI/litellm/pull/45653) chore(cost-map): add openai gpt-rosalind-discovery from the pricing page
- [#45629](https://github.com/BerriAI/litellm/pull/45629) fix(ui): show team alias in key edit Team dropdown and allow clearing it
- [#45651](https://github.com/BerriAI/litellm/pull/45651) ci: run every build_and_test job in every CircleCI pipeline (#43152)
- [#43152](https://github.com/BerriAI/litellm/pull/43152) ci: run every build_and_test job in every CircleCI pipeline
- [#45639](https://github.com/BerriAI/litellm/pull/45639) feat(azure): add azure_ai/Microsoft-Decision-1
- [#45602](https://github.com/BerriAI/litellm/pull/45602) fix(proxy): classify /v1/messages pass-through streams as Anthropic on any host
- [#45527](https://github.com/BerriAI/litellm/pull/45527) feat(ui): show the public JWKS for LiteLLM-signed Anthropic credentials
- [#45530](https://github.com/BerriAI/litellm/pull/45530) test: fix stale and flaky tests across CircleCI, GHA and Buildkite
- [#45628](https://github.com/BerriAI/litellm/pull/45628) chore: ignore .mypy_cache
- [#45625](https://github.com/BerriAI/litellm/pull/45625) fix(liteadmin): detach keys from teams and default to Sonnet 5.5
- [#45621](https://github.com/BerriAI/litellm/pull/45621) fix(bedrock): add the bare Pegasus 1.5 row and take GPT-5.x context windows from the model cards
- [#45624](https://github.com/BerriAI/litellm/pull/45624) feat(rust): add the Vertex AI Anthropic Messages config on typed vertex params
- [#45616](https://github.com/BerriAI/litellm/pull/45616) test: move offline anthropic prompt caching tests to tests/unit
- [#45501](https://github.com/BerriAI/litellm/pull/45501) feat(decisions): add hosted_vllm provider
- [#45604](https://github.com/BerriAI/litellm/pull/45604) fix(ui): title usage overview chart "Daily usage" and label the model table "Top models"
- [#45568](https://github.com/BerriAI/litellm/pull/45568) test: move offline proxy auth, hook, spend and pass-through tests to tests/unit
- [#45554](https://github.com/BerriAI/litellm/pull/45554) test: move offline logging, secret manager and provider tests from legacy dirs to tests/unit
- [#45551](https://github.com/BerriAI/litellm/pull/45551) test: move offline router, retry and latency tests from local_testing to tests/unit
- [#45595](https://github.com/BerriAI/litellm/pull/45595) fix(model_prices): registry audit 2026-10-09, together qwen3.7-max price, azure kimi-k2.7-code retirement
- [#45491](https://github.com/BerriAI/litellm/pull/45491) fix(gemini): sync gemini deprecation dates with the changelog and deprecations page
- [#45500](https://github.com/BerriAI/litellm/pull/45500) fix(responses): keep a flagged hosted deployment's prompt cache breakpoint on the chat bridge
- [#45571](https://github.com/BerriAI/litellm/pull/45571) test: wait on conditions instead of wall-clock in guardrail parallelism and scope-option tests
- [#45565](https://github.com/BerriAI/litellm/pull/45565) refactor(types): replace Any with proven types in 3 files
- [#45401](https://github.com/BerriAI/litellm/pull/45401) fix(mcp): never forward the caller's LiteLLM key to MCP servers
- [#45534](https://github.com/BerriAI/litellm/pull/45534) chore: bump litellm-enterprise 0.1.75 -> 0.1.76, litellm-proxy-extras 0.4.107 -> 0.4.108
- [#45528](https://github.com/BerriAI/litellm/pull/45528) feat(ui): configure OpenAI workload identity federation from the LLM Credentials and Add Model forms
- [#45522](https://github.com/BerriAI/litellm/pull/45522) refactor(proxy): inject the clock into the v1 parallel request limiter and pin it in its tests
- [#45520](https://github.com/BerriAI/litellm/pull/45520) refactor(proxy): inject one UTC clock read per operation into gateway tracking, PTU rollup and Mavvrik export
- [#43944](https://github.com/BerriAI/litellm/pull/43944) fix(ui): let the model picker remove selections that are no longer available
- [#43148](https://github.com/BerriAI/litellm/pull/43148) feat(credentials): add display_name and make credential_name immutable on PATCH
- [#45523](https://github.com/BerriAI/litellm/pull/45523) test: update stale MCP call_tool and usage card assertions, add timeout headroom to request-log index boot test
- [#45509](https://github.com/BerriAI/litellm/pull/45509) ci: run only integration jobs on PR CircleCI pipelines and move router and guardrails suites to GHA
- [#45463](https://github.com/BerriAI/litellm/pull/45463) fix(anthropic): count a leading system run through count_tokens' system parameter
- [#45267](https://github.com/BerriAI/litellm/pull/45267) test(routing): wait on deployment registration instead of boot model-info traffic
- [#45480](https://github.com/BerriAI/litellm/pull/45480) ci: render lint, unit and smoke checks as <tier> / <job> with one collector per tier
- [#45301](https://github.com/BerriAI/litellm/pull/45301) fix(token_counter): price a base64 PDF document per page instead of as one image
- [#45496](https://github.com/BerriAI/litellm/pull/45496) fix(bedrock): add the claude-sonnet-4-5 EOL date from the Bedrock model card
- [#45464](https://github.com/BerriAI/litellm/pull/45464) feat(mcp): translate input requests and bind continuations
- [#45481](https://github.com/BerriAI/litellm/pull/45481) feat(ui): add the evaluation mode to the Add Model form
- [#45488](https://github.com/BerriAI/litellm/pull/45488) fix(bedrock): take gpt-6.1-sol context window from the Bedrock model card
- [#45485](https://github.com/BerriAI/litellm/pull/45485) fix(ci): import seed_tracing_fixtures from the pytest scripts path in rust trace tests
- [#45482](https://github.com/BerriAI/litellm/pull/45482) fix(bedrock): add gpt-6.1-sol ultrafast tier prices from the Bedrock model card
- [#45472](https://github.com/BerriAI/litellm/pull/45472) fix(router): match deployment pricing ids against the cost map only within the deployment's provider

#### 🐛 New Issues
- [#45546](https://github.com/BerriAI/litellm/issues/45546) [Bug]: Mistral: replayed `reasoning_content` is dropped instead of being sent as a `thinking` chunk; Mistral's docs say to always replay it `bug` `llm translation` 💬3
- [#45671](https://github.com/BerriAI/litellm/issues/45671) [Bug]: Claude models on Vertex AI fail at batch creation (404 batchPredictionJobs) — OpenAI batch translation doesn't cover Anthropic's native schema `llm translation` 💬2
- [#45618](https://github.com/BerriAI/litellm/issues/45618) [Bug]: chat->Responses->chat bridge converts string user content to text blocks, which breaks Databricks json_object ("must contain the word json" even when present) `llm translation` 💬2
- [#45586](https://github.com/BerriAI/litellm/issues/45586) [Bug]: Missing usage in a provider response is reported as 0 tokens, which can't be told apart from a real 0 `bug` `llm translation` 💬2
- [#45592](https://github.com/BerriAI/litellm/issues/45592) [Bug]: Edit Team Member modal rejects Entra ID guest emails (`#EXT#`), so their budget/limits can't be changed in the UI `bug` `llm translation` 💬2
- [#45605](https://github.com/BerriAI/litellm/issues/45605) [Bug]: custom_auth_run_common_checks never runs the key max_budget check (virtual_key_max_budget_check) on custom-auth requests `llm translation` 💬2
- [#45552](https://github.com/BerriAI/litellm/issues/45552) [Bug]: Responses API bridge returns reasoning output items without summary and with output_text content `bug` `llm translation` 💬2
- [#45573](https://github.com/BerriAI/litellm/issues/45573) [Bug]: Old agents/models/mcps not deregistered from Access Group `bug` 💬2
- [#45575](https://github.com/BerriAI/litellm/issues/45575) [Bug]: stream_chunk_builder drops Bedrock thinking_blocks that carry a signature but no text (Claude Sonnet 5, display omitted) `llm translation` 💬2
- [#45702](https://github.com/BerriAI/litellm/issues/45702) [Bug]: /v1/messages does not accumulate deployment-level tpm for native anthropic/... deployments `llm translation` 💬1
- [#45541](https://github.com/BerriAI/litellm/issues/45541) [Bug]: post_call holds a full copy of every response for the whole request `llm translation` 💬1
- [#45543](https://github.com/BerriAI/litellm/issues/45543) [Bug]: pre_call guardrails add litellm_metadata, which breaks tag-based routing and drops model_group / model_id from SpendLogs `bug` `llm translation` 💬1
- [#45563](https://github.com/BerriAI/litellm/issues/45563) [Bug]: Responses API bridge returns `response.reasoning` without the `summary` key `bug` `llm translation` 💬1
- [#45574](https://github.com/BerriAI/litellm/issues/45574) [Bug]: DB-stored models encrypted before LITELLM_SALT_KEY was set are silently dropped (no log, health stays OK) 💬1
- [#45584](https://github.com/BerriAI/litellm/issues/45584) [Bug]: Langfuse callback drops the trace of every successful /v1/systemone and /v1/decisions call ('DecisionsUsage' object has no attribute 'get') `llm translation` 💬1
- [#45561](https://github.com/BerriAI/litellm/issues/45561) [Bug]: Sync Responses API streaming never closes the reasoning item `bug` `llm translation` 💬1
- [#45564](https://github.com/BerriAI/litellm/issues/45564) [Bug]: Guardrail creation wizard clips content horizontally `bug` 💬1
- [#45504](https://github.com/BerriAI/litellm/issues/45504) Custom OpenAI-compatible wildcard discovery advertises OpenAI catalog for Tinker `llm translation` 💬1
- [#45536](https://github.com/BerriAI/litellm/issues/45536) [Bug]: Perplexity search drops search_recency_filter / date / language / mode params — fix #30752 never reached main `bug` 💬1
- [#45506](https://github.com/BerriAI/litellm/issues/45506) OpenRouter wildcard discovery loses vendor namespaces and endpoint model listing uses wrong path `llm translation` 💬1
- [#45515](https://github.com/BerriAI/litellm/issues/45515) [Feature]: Support OpenAI Decisions API as an auto-router classifier backend `llm translation`
- [#45617](https://github.com/BerriAI/litellm/issues/45617) [Bug]: Databricks json_schema response_format with $defs fails: DatabricksConfig inherits Anthropic ref_template and rewrites $ref to "/$defs/X" (missing "#") `llm translation`
- [#45576](https://github.com/BerriAI/litellm/issues/45576) [Bug]: Image inside a tool result 400s on Bedrock gpt-6.1-sol `llm translation`
- [#45676](https://github.com/BerriAI/litellm/issues/45676) [Bug]: Counting tokens for a base64 PDF has no cost bound, so a few uploads stall every token count on the worker `bug` `llm translation`
- [#45645](https://github.com/BerriAI/litellm/issues/45645) [Bug]: Responses API mid-stream 429 can be recorded against the fallback deployment and cool it down `llm translation`
- [#45596](https://github.com/BerriAI/litellm/issues/45596) [Bug]: langfuse_otel never sends the completion start time, so Langfuse shows no time to first token `llm translation`
- [#45588](https://github.com/BerriAI/litellm/issues/45588) [Bug]: OTel v2 omits first-chunk timing on streaming pass-through requests `llm translation`
- [#45587](https://github.com/BerriAI/litellm/issues/45587) [Bug]: OTel v2 metrics omit resolved provider labels on pass-through calls `llm translation`
- [#45578](https://github.com/BerriAI/litellm/issues/45578) [Feature]: Prometheus metrics for team-member budgets (max, remaining, time to reset)
- [#45558](https://github.com/BerriAI/litellm/issues/45558) [Bug]: Responses API bridge puts thinking text in `summary` or `content` based on streaming mode, not on what the provider returned `bug` `llm translation`
- [#45535](https://github.com/BerriAI/litellm/issues/45535) [Feature]: Opt-in TOON re-encoding of JSON tool results, only when it is smaller `llm translation`
- [#45508](https://github.com/BerriAI/litellm/issues/45508) [Feature]: Consider opting in to Anthropic's OSS Scanner `enhancement` `llm translation`

#### 🔒 Closed Issues
- [#24518](https://github.com/BerriAI/litellm/issues/24518) [Security]: litellm PyPI package (v1.82.7 + v1.82.8) compromised — full timeline and status
- [#10177](https://github.com/BerriAI/litellm/issues/10177) [Feature]: Dark Mode
- [#24037](https://github.com/BerriAI/litellm/issues/24037) [Bug]: /ui/chat returns 404 — Next.js static export missing index.html in chat/ directory
- [#31206](https://github.com/BerriAI/litellm/issues/31206) [Bug]: REDIS_CLUSTER_NODES causes proxy shutdown to fail
- [#39339](https://github.com/BerriAI/litellm/issues/39339) [Bug]: OpenAI reasoning-model prompt cache never carries forward through /v1/messages → Responses API bridge (encrypted_content dropped, even after #37953)
- [#31911](https://github.com/BerriAI/litellm/issues/31911) [Bug]: MCP tool auto-execution silently skipped for ollama_chat/ base models — raw tool_calls returned to client (works via openai/ route to same Ollama model)
- [#45592](https://github.com/BerriAI/litellm/issues/45592) [Bug]: Edit Team Member modal rejects Entra ID guest emails (`#EXT#`), so their budget/limits can't be changed in the UI
- [#31841](https://github.com/BerriAI/litellm/issues/31841) [Bug]: Callback blocked_user_check receives prisma_client=None during initialization
- [#31842](https://github.com/BerriAI/litellm/issues/31842) [Bug]: model_max_budget enforcement for end-users (customers) is not working
- [#32013](https://github.com/BerriAI/litellm/issues/32013) [Bug]: [Proxy] Log UI: Right-hand navigation panel is not visible in Firefox at 100% zoom
- [#32028](https://github.com/BerriAI/litellm/issues/32028) [Bug]: Anthropic S3 raw log: s3 file name does not match request_id in rds
- [#32047](https://github.com/BerriAI/litellm/issues/32047) Request Logs search by Request ID only filters the current page
- [#32112](https://github.com/BerriAI/litellm/issues/32112) Proxy: non-standard request param sent once is permanently re-injected into ALL subsequent requests to that deployment (in-memory state poisoning)
- [#32106](https://github.com/BerriAI/litellm/issues/32106) [Bug] DB-backed Router rebuild omits cache_responses when store_model_in_db=True — Redis response cache never hits
- [#43568](https://github.com/BerriAI/litellm/issues/43568) [Feature]: AWS Bedrock autodiscovery
- [#45617](https://github.com/BerriAI/litellm/issues/45617) [Bug]: Databricks json_schema response_format with $defs fails: DatabricksConfig inherits Anthropic ref_template and rewrites $ref to "/$defs/X" (missing "#")
- [#45576](https://github.com/BerriAI/litellm/issues/45576) [Bug]: Image inside a tool result 400s on Bedrock gpt-6.1-sol

### Unsloth (`unslothai/unsloth`)

**Stars:** 77,656 · **Open issues:** 683 · **Last push:** <1h ago

On October 10, 2026, there were no new releases for Unsloth. However, a number of significant pull requests were merged, including improvements to PDF handling in the Studio, where annotate marks will now persist on remounted pages (#13119). Enhancements to the installer were also made to improve downloading experiences with winget (#13172) and to silence specific error messages related to AppArmor security settings (#13125). Additionally, the Studio will now support maintaining queued prompts across model reloads (#13147) and prevent server issues from RAG PDF parsing (#13137). Notably, several new issues were reported, including a bug where the Windows Desktop version fails to open an existing API key file if the user profile path contains Unicode characters (#13123), which appears to be a priority for resolution.

#### ✅ Merged PRs
- [#13119](https://github.com/unslothai/unsloth/pull/13119) Studio: keep annotate marks on PDF pages and slides that remount
- [#13172](https://github.com/unslothai/unsloth/pull/13172) Installer differential: ignore winget's partly filled download bars
- [#13170](https://github.com/unslothai/unsloth/pull/13170) Clean machine install: assert the no-git path by what setup.ps1 prints after #12971
- [#13131](https://github.com/unslothai/unsloth/pull/13131) Studio: keep a failed folder link from spending its grant
- [#13143](https://github.com/unslothai/unsloth/pull/13143) Baseline the unsloth-zoo 2026.10.3 and dnspython 2.9.0 findings after review
- [#13147](https://github.com/unslothai/unsloth/pull/13147) Studio: keep queued prompts when the model is reloaded or switched
- [#13137](https://github.com/unslothai/unsloth/pull/13137) Studio: stop RAG PDF parsing from starving the server on scanned pages
- [#13117](https://github.com/unslothai/unsloth/pull/13117) Studio: stop with a clear error when a pre-cast text encoder fails and its dense shards were skipped
- [#13144](https://github.com/unslothai/unsloth/pull/13144) GRPO: train on video prompts instead of scoring them as text
- [#13136](https://github.com/unslothai/unsloth/pull/13136) Fix evaluate() under auto padding-free and keep compute_metrics rows per example
- [#13135](https://github.com/unslothai/unsloth/pull/13135) Studio: offer vLLM or SGLang when the default engine cannot run a quantized checkpoint
- [#13115](https://github.com/unslothai/unsloth/pull/13115) Studio: repair ROCm attention packages and bound Qwen-Image-2.1 math prefill
- [#13014](https://github.com/unslothai/unsloth/pull/13014) Studio: speculative decoding for the MLX inference backend
- [#13128](https://github.com/unslothai/unsloth/pull/13128) Keep Dia's audio pad token in fast generate
- [#12946](https://github.com/unslothai/unsloth/pull/12946) Decide accepts_loss_kwargs from the loss head so gradient accumulation gets num_items_in_batch for every model
- [#13132](https://github.com/unslothai/unsloth/pull/13132) Studio: install the llm-compressor-main shadow from a source archive instead of git
- [#13098](https://github.com/unslothai/unsloth/pull/13098) Studio: keep merged table cells in their columns when reading web pages
- [#13127](https://github.com/unslothai/unsloth/pull/13127) MLX decision training: Clef rows and predict take images
- [#13126](https://github.com/unslothai/unsloth/pull/13126) Studio: send Decision API images to the MLX engine for Clef
- [#13125](https://github.com/unslothai/unsloth/pull/13125) fix(install): silence the missing AppArmor userns sysctl read
- [#13134](https://github.com/unslothai/unsloth/pull/13134) README: install PyTorch before Unsloth on Windows so uv does not resolve an old Unsloth
- [#13133](https://github.com/unslothai/unsloth/pull/13133) Studio: load GGUF models on Windows when the user profile path is not ASCII
- [#13129](https://github.com/unslothai/unsloth/pull/13129) Studio: use the Vulkan llama.cpp bundle, not CPU, on Windows NVIDIA drivers below CUDA 12.4
- [#13130](https://github.com/unslothai/unsloth/pull/13130) Studio: fall back to the legacy stream when an older backend refuses a new chat field
- [#11733](https://github.com/unslothai/unsloth/pull/11733) fix(studio): repair orphan tool results during chat rendering
- [#13116](https://github.com/unslothai/unsloth/pull/13116) Studio: avoid repeated Qwen-Image-2.1 VAE tile OOMs on ROCm
- [#13090](https://github.com/unslothai/unsloth/pull/13090) Fix granite-vision 4-bit generate crash on transformers 4.x (nn.MultiheadAttention out_proj)
- [#13087](https://github.com/unslothai/unsloth/pull/13087) Load Qwen2.5-Omni checkpoints that name Qwen2_5OmniModel
- [#13072](https://github.com/unslothai/unsloth/pull/13072) SyntheticDataKit: take a port argument and move off 8000 when it is taken
- [#13066](https://github.com/unslothai/unsloth/pull/13066) Right-pad encoder-decoder tokenizers and load SeamlessM4T without auto_model
- [#13088](https://github.com/unslothai/unsloth/pull/13088) Make precomputed inputs_embeds train under gradient checkpointing
- [#13052](https://github.com/unslothai/unsloth/pull/13052) Point a 4-bit load that does not fit the GPU at offload_layers = "auto"
- [#13055](https://github.com/unslothai/unsloth/pull/13055) Repair RoPE for plain transformers loads after an Unsloth load (reward models in Online DPO / GRPO)
- [#13080](https://github.com/unslothai/unsloth/pull/13080) Load Whisper in FastModel without auto_model
- [#13108](https://github.com/unslothai/unsloth/pull/13108) Fix TRL PPOTrainer under Unsloth: rollout crash, sampling filters and left padding
- [#13053](https://github.com/unslothai/unsloth/pull/13053) Fix beam search (num_beams > 1) on the fast decode path
- [#13067](https://github.com/unslothai/unsloth/pull/13067) Fix PPOTrainer with an Unsloth policy (gradient checkpointing, generate, RoPE on value and reward models)
- [#13068](https://github.com/unslothai/unsloth/pull/13068) Let GPTQ checkpoints train and generate with LoRA
- [#13091](https://github.com/unslothai/unsloth/pull/13091) Fix LLaVA image token count when processor_config lacks num_additional_image_tokens
- [#13092](https://github.com/unslothai/unsloth/pull/13092) Keep paged bitsandbytes optimizer state paged on checkpoint resume
- [#13085](https://github.com/unslothai/unsloth/pull/13085) Turn torch.compile off on GPUs older than Volta
- [#13073](https://github.com/unslothai/unsloth/pull/13073) Keep slow tokenizers transformers cannot convert instead of crashing the load
- [#13111](https://github.com/unslothai/unsloth/pull/13111) Studio: head a decision score with its most likely level
- [#13069](https://github.com/unslothai/unsloth/pull/13069) Fix returned logit scaling and softcapping when labels are provided
- [#12605](https://github.com/unslothai/unsloth/pull/12605) Studio: show the context meter for active project chats
- [#13113](https://github.com/unslothai/unsloth/pull/13113) fix(chat): import branch threads parents-before-children on refresh
- [#13107](https://github.com/unslothai/unsloth/pull/13107) Studio: show Gemini's thinking in chat

#### 🐛 New Issues
- [#13140](https://github.com/unslothai/unsloth/issues/13140) [Feature] Studio: continue fine-tuning a saved LoRA adapter on a new dataset without merging 💬2
- [#13124](https://github.com/unslothai/unsloth/issues/13124) Unsloth Installer throws a "apparmor_restrict_unprivileged_userns" error if the file does not exist. `feature request` `bug` 💬1
- [#13123](https://github.com/unslothai/unsloth/issues/13123) [Bug] Windows Desktop: built-in GGUF loading fails to open an existing API key file under a Unicode user profile path `feature request` `bug` 💬1
- [#13160](https://github.com/unslothai/unsloth/issues/13160) [Bug] DecisionTrainer crashes on step 1 unless an inference pass runs first (compiled layer_norm backward: "expected size 8==8, stride 1222==1248") `feature request` `bug`
- [#13139](https://github.com/unslothai/unsloth/issues/13139) [Bug] Studio Export destination field resets to default while entering a custom path
- [#13138](https://github.com/unslothai/unsloth/issues/13138) [Bug] Website header Download link reloads current page instead of opening downloads
- [#13120](https://github.com/unslothai/unsloth/issues/13120) RoPE, RMSNorm and LayerNorm kernels overflow int32 offsets past 2^31 elements

#### 🔒 Closed Issues
- [#4504](https://github.com/unslothai/unsloth/issues/4504) [Bug] Fine-Tuning uses much more VRAM than advertised, causing OOMs; cannot actually fine-tune any big models
- [#1099](https://github.com/unslothai/unsloth/issues/1099) NotImplementedError: Make sure that a `_reorder_cache` function is correctly implemented in transformers.models.llama.modeling_llama to enable beam search for <class 'transformers.models.llama.modeling_llama.LlamaForCausalLM'>
- [#3603](https://github.com/unslothai/unsloth/issues/3603) Unexpected OOM Issue (7B GRPO QLora on H100 80GB)
- [#3943](https://github.com/unslothai/unsloth/issues/3943) Training starts quick and then after about 15 iterations jumps up to 200 hours
- [#3443](https://github.com/unslothai/unsloth/issues/3443) OOM-ing on Nvidia Jetson Orin Nano
- [#3366](https://github.com/unslothai/unsloth/issues/3366) Not able to run unsloth/gemma-3-4b-it-bnb-4bit in vllm
- [#884](https://github.com/unslothai/unsloth/issues/884) PPO
- [#3495](https://github.com/unslothai/unsloth/issues/3495) [Feature] FastVisionModel
- [#3560](https://github.com/unslothai/unsloth/issues/3560) [Bug] Cannot load qwen3-vl series with lora adapter on vllm.
- [#1494](https://github.com/unslothai/unsloth/issues/1494) Changes made in Unsloth and openInstruct to get a successful Online DPO run
- [#3308](https://github.com/unslothai/unsloth/issues/3308) [Bug] Installation on Windows with Conda fails due to aggressive PyTorch version replacement
- [#1998](https://github.com/unslothai/unsloth/issues/1998) Unsloth: Your GPU is too old!
- [#3292](https://github.com/unslothai/unsloth/issues/3292) [Bug] Intel: RuntimeError: could not create a primitive descriptor for the matmul primitive. Run workload with environment variable ONEDNN_VERBOSE=all to get additional diagnostic information.
- [#2726](https://github.com/unslothai/unsloth/issues/2726) How to Load Fine-Tuned Lora Model for ASR
- [#2325](https://github.com/unslothai/unsloth/issues/2325) [Feature] Qwen 2.5-Omni Support?
- [#2168](https://github.com/unslothai/unsloth/issues/2168) Resume Training from Checkpoint for GRPO (Qwen 2.5 3B) Results in OOM
- [#3728](https://github.com/unslothai/unsloth/issues/3728) [Bug] AssertionError("Mismatched type for bias between then block (<['256'], bf16>) and else block (<['256'], fp32>)")
- [#2560](https://github.com/unslothai/unsloth/issues/2560) [Feature] Please support Dia TTS
- [#9792](https://github.com/unslothai/unsloth/issues/9792) [Bug] AMD: Qwen3.8-27B V3 GGUF crashes after a context checkpoint on R9700 (Windows, Vulkan); V2 works
- [#3482](https://github.com/unslothai/unsloth/issues/3482) Unsloth QLoRA: DPO loss inconsistency with different gradient accumulation steps
- [#3550](https://github.com/unslothai/unsloth/issues/3550) [Bug] Granite 4.0 350M - H loading error
- [#2178](https://github.com/unslothai/unsloth/issues/2178) Use inputs_embeds in Trainer instead of input_ids
- [#2498](https://github.com/unslothai/unsloth/issues/2498) [Question] Is there a colab notebook for PPO?
- [#3961](https://github.com/unslothai/unsloth/issues/3961) Request for Notebook to Fine-Tune Qwen TTS (or Alternatives Using Existing Notebooks)
- [#3404](https://github.com/unslothai/unsloth/issues/3404) [Feature] Add FastVLM Finetune / Training
- [#3570](https://github.com/unslothai/unsloth/issues/3570) [Feature] deepseek-coder
- [#1977](https://github.com/unslothai/unsloth/issues/1977) How does one go about making their own unslothed model from any (or with some select preconditions) existing huggingface model
- [#1629](https://github.com/unslothai/unsloth/issues/1629) ValueError: Some modules are dispatched on the CPU or the disk
- [#10545](https://github.com/unslothai/unsloth/issues/10545) Security audit hf-stack lane is red on main: scan_packages baseline needs re-review after the unsloth-zoo bump
- [#10428](https://github.com/unslothai/unsloth/issues/10428) [Bug] Prompt queue gets cleared each time generation is stopped
- [#3808](https://github.com/unslothai/unsloth/issues/3808) [Feature] Create docs for exporting to `ONNX` format for webgpu inference support
- [#3491](https://github.com/unslothai/unsloth/issues/3491) Bitdistill
- [#3686](https://github.com/unslothai/unsloth/issues/3686) Feature Request: Beginner Conceptual Overview for Dataset Documentation
- [#3930](https://github.com/unslothai/unsloth/issues/3930) [Feature] GDPO: New GRPO modification for multi-reward RL
- [#3622](https://github.com/unslothai/unsloth/issues/3622) [Bug] Llama-4 loading error: AttributeError: SequentialLlama4TextExperts has no attribute down_proj
- [#3602](https://github.com/unslothai/unsloth/issues/3602) [Bug] 2048 RL notebook - trained model produces only random strategies (DGX Spark)
- [#2672](https://github.com/unslothai/unsloth/issues/2672) [Bug] granite-vision dtype RuntimeError
- [#2494](https://github.com/unslothai/unsloth/issues/2494) [Feature] I notice that the port is hardcoded for SyntheticDataKit
- [#2536](https://github.com/unslothai/unsloth/issues/2536) [Feature] Support Phi4 multimodal in Unsloth
- [#2225](https://github.com/unslothai/unsloth/issues/2225) 'unsloth/llava-v1.6-mistral-7b-hf' model inference ValueError: Image features and image tokens do not match: tokens: 1175, features 1176
- [#4453](https://github.com/unslothai/unsloth/issues/4453) [Feature] Unsloth Studio: Add dataset creation for TTS models
- [#3432](https://github.com/unslothai/unsloth/issues/3432) trainer.train() stuck in pytorch inductor compilation after 100-724 steps
- [#10385](https://github.com/unslothai/unsloth/issues/10385) [Bug] orcarouter/Qwen3.8-27B-Uncensored-MLX tokenizer_utils.py:229-237
- [#3485](https://github.com/unslothai/unsloth/issues/3485) reinforce(gspo) training didn't yield any improments
- [#10563](https://github.com/unslothai/unsloth/issues/10563) [Bug] AMD: 4-bit dequantize uses a GPU stream cached at import, not the current one (found on RX 7900 XTX)
- [#3675](https://github.com/unslothai/unsloth/issues/3675) [Bug] KTO Training CUDA Error with Large Vocabulary Models (Qwen3-VL)
- [#10549](https://github.com/unslothai/unsloth/issues/10549) [Bug] Unsloth layer mode and tensor mode are the same, fake BF16mode
- [#3938](https://github.com/unslothai/unsloth/issues/3938) [Bug] Can't finetune LiquidAI LFM2.5-VL-1.6B with vision
- [#4502](https://github.com/unslothai/unsloth/issues/4502) Why are old_logprob and new_logprob different and the coef_1!=1 in GRPO when num_iterations=1
- [#3627](https://github.com/unslothai/unsloth/issues/3627) [Bug] Models already trained - getting stuck at training run
- [#3493](https://github.com/unslothai/unsloth/issues/3493) [Feature] Add support for fish tts fishaudio/openaudio-s1-mini
- [#3661](https://github.com/unslothai/unsloth/issues/3661) [Feature]How to save the training logs？
- [#3353](https://github.com/unslothai/unsloth/issues/3353) [Feature] Add support for Lora-XS
- [#3562](https://github.com/unslothai/unsloth/issues/3562) [Feature] Add support to train Hunyuan Image 3.0
- [#3351](https://github.com/unslothai/unsloth/issues/3351) [Bug] Clarification of Model Slugs and Loading Options in Docs
- [#3364](https://github.com/unslothai/unsloth/issues/3364) [Bug] Abnormal repeated download model
- [#8406](https://github.com/unslothai/unsloth/issues/8406) [Bug] AMD: on Windows, a text GGUF is sent to the image model loader
- [#959](https://github.com/unslothai/unsloth/issues/959) Multiple Generation Similar to Huggingface `num_return_sequences`
- [#1573](https://github.com/unslothai/unsloth/issues/1573) Usage Guidance
- [#12533](https://github.com/unslothai/unsloth/issues/12533) [Bug] Unsloth Studio minor bug with the upper right hand corner Context Length meter.
- [#12860](https://github.com/unslothai/unsloth/issues/12860) [Unsloth Bug] Studio (Windows): FP8 text-encoder pre-quantization can exhaust the commit limit (os error 1455), then cascades into a missing-shard load failure
- [#3357](https://github.com/unslothai/unsloth/issues/3357) GRPO Fine-tuning Implementation and Vision_Utils Integration for Qwen2.5-VL Model
- [#3470](https://github.com/unslothai/unsloth/issues/3470) [Feature] Compute WER/CER metrics with Gemma3
- [#2097](https://github.com/unslothai/unsloth/issues/2097) ValueError: LoRA rank 32 is greater than max_lora_rank 16 despite my lora rank is 16
- [#10579](https://github.com/unslothai/unsloth/issues/10579) Why the update always take forever? It has to re-install all the already installed dependencies from scratch.
- [#3900](https://github.com/unslothai/unsloth/issues/3900) is:issue state:open AssertionError: expected size 2==2, stride 3684352==3236401 at dim=0; expected size 1799==1799, stride 2048==1799 at dim=1;
- [#3747](https://github.com/unslothai/unsloth/issues/3747) [Feature] Add Fine-Tuning Support for FastVLM Vision-Language Models
- [#4445](https://github.com/unslothai/unsloth/issues/4445) How to Add Entropy Metric Calculation and Logging in Unsloth GRPO Training
- [#3797](https://github.com/unslothai/unsloth/issues/3797) [Feature Request]: Support for T5/ByT5 (Encoder-Decoder) Architecture
- [#3940](https://github.com/unslothai/unsloth/issues/3940) [Feature]可以尝试引入FlashMHF吗？据说很省显存
- [#3257](https://github.com/unslothai/unsloth/issues/3257) [Feature] Add support for MM Lora Fine-tuning + FastModel inference for models like Mistral/Voxtral and Qwen-2.5-Omni
- [#3536](https://github.com/unslothai/unsloth/issues/3536) [Feature] Can the fine-tuning training be done using the MSE loss function instead?
- [#3957](https://github.com/unslothai/unsloth/issues/3957) How can I increase the GPU utilization while training / finetune an LLM with unsloth
- [#3282](https://github.com/unslothai/unsloth/issues/3282) [Feature] Can't load model "thuml/timer-base-84m"
- [#84](https://github.com/unslothai/unsloth/issues/84) [Feature Request] Support for TEQ
- [#3608](https://github.com/unslothai/unsloth/issues/3608) [Feature] Add support Longcat-flash compressed model
- [#3272](https://github.com/unslothai/unsloth/issues/3272) [Bug] Torch dynamo error when finetuning a Gemma 3 model
- [#3580](https://github.com/unslothai/unsloth/issues/3580) NotImplementedError when loading gpt-oss-20b-unsloth-bnb-4bit with FastLanguageModel
- [#3423](https://github.com/unslothai/unsloth/issues/3423) [Feature] Support for a pre-quantized bnb 4 bit version of hermes4-70b
- [#3290](https://github.com/unslothai/unsloth/issues/3290) [Feature] Can't load model "thuml/timer-base-84m" , this model seems to be missing a tokenizer.
- [#3481](https://github.com/unslothai/unsloth/issues/3481) [Bug] Why is the pad token of all QWEN VL models in Unsloth "<|vision_pad|>", while QWEN officially uses "pad_token": "<|endoftext|>"
- [#3427](https://github.com/unslothai/unsloth/issues/3427) Load the base model Qwen2.5-14B and pre-trained LoRA weights using Unsloth, and continue LoRA training.
- [#3456](https://github.com/unslothai/unsloth/issues/3456) [Bug] Remove the SFT patch due bug fixed on the SFT
- [#12695](https://github.com/unslothai/unsloth/issues/12695) [Unsloth Bug] Vulkan GGUF inference fails with ErrorOutOfDeviceMemory on Radeon 780M
- [#1397](https://github.com/unslothai/unsloth/issues/1397) Support finetuning of models like google/madlad400-10b-mt and facebook/seamless-m4t-v2-large
- [#2599](https://github.com/unslothai/unsloth/issues/2599) [Feature] Is it possible to make prompts dynamic (or iterable datasets) in GRPO training
- [#13093](https://github.com/unslothai/unsloth/issues/13093) Deleted project is blocking folder link for new projects
- [#12044](https://github.com/unslothai/unsloth/issues/12044) Supported native Windows / PyTorch 2.14 GPT-OSS 20B NF4/QLoRA training tuple?
- [#13094](https://github.com/unslothai/unsloth/issues/13094) [Bug] Server stopped unexpectedly while embedding documents
- [#10401](https://github.com/unslothai/unsloth/issues/10401) [Feature] Measure speculative-decoding acceptance rate for a target/draft pair
- [#3639](https://github.com/unslothai/unsloth/issues/3639) [Feature] More granular quantization options for VL models when using FastVisionModel
- [#10434](https://github.com/unslothai/unsloth/issues/10434) torchcodec ABI-stable exemption ignores index availability: cu128 has no 0.12+
- [#13124](https://github.com/unslothai/unsloth/issues/13124) Unsloth Installer throws a "apparmor_restrict_unprivileged_userns" error if the file does not exist.
- [#4481](https://github.com/unslothai/unsloth/issues/4481) [Feature] Add Qwen3 VL embedding SFT notebook
- [#3901](https://github.com/unslothai/unsloth/issues/3901) Support for GRPO multi-GPU training with Qwen2.5?
- [#13123](https://github.com/unslothai/unsloth/issues/13123) [Bug] Windows Desktop: built-in GGUF loading fails to open an existing API key file under a Unicode user profile path
- [#3583](https://github.com/unslothai/unsloth/issues/3583) [Feature] Shira implementation
- [#13010](https://github.com/unslothai/unsloth/issues/13010) [Bug] Unsupported durable request fields: sandbox_level
- [#3426](https://github.com/unslothai/unsloth/issues/3426) [Feature] Add support for GSPO-token
- [#13074](https://github.com/unslothai/unsloth/issues/13074) [Bug] Unable to load/process images in multimodal models despite support
- [#3334](https://github.com/unslothai/unsloth/issues/3334) [Help Needed]: Building Custom Multimodal Model with FastVisionModel (DINOv3 + LLaMA)
- [#3400](https://github.com/unslothai/unsloth/issues/3400) Kaggle - GPT OSS Data set
- [#13110](https://github.com/unslothai/unsloth/issues/13110) Ace-step cpp support
- [#11669](https://github.com/unslothai/unsloth/issues/11669) [Bug] Studio MLX: orphan tool result in replayed history breaks native chat template
- [#3783](https://github.com/unslothai/unsloth/issues/3783) [Bug] llava1.5-7b-hf ValueError: Image features and image tokens do not match: tokens: 575, features 2359296

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,129 · **Open issues:** 382 · **Last push:** 4h ago

On October 10, 2026, there were no new releases for AIBrix, but significant progress was made with multiple merged pull requests. Notable updates include the merging of #2963, which marks the cut for release v0.8.0-rc.1, alongside various bug fixes like #2955, addressing the handling of warm pods, and #2961, which corrects the runtime download status for nested and Hugging Face models. Additionally, #2949 improved tracking of KV block presence in the prefix index, while #2956 provided a comprehensive rewrite of the ModelClaim guide. Among new issues, #2966 highlighted a critical bug where RoleSet status calculation experiences a panic if a role omits replicas, indicating a need for immediate attention.

#### ✅ Merged PRs
- [#2953](https://github.com/vllm-project/aibrix/pull/2953) [CI] Cut avoidable waits from the installation E2E suite
- [#2963](https://github.com/vllm-project/aibrix/pull/2963) cut release v0.8.0-rc.1
- [#2955](https://github.com/vllm-project/aibrix/pull/2955) [Bug] Keep a claim on a warm pod that leaves the pool
- [#2949](https://github.com/vllm-project/aibrix/pull/2949) [Bug] Track KV block presence per tier and group in the prefix index
- [#2959](https://github.com/vllm-project/aibrix/pull/2959) [Bug] Fix flaky test_job_restore_after_mds_crash_during_in_progress (crash re-arms on restart)
- [#2961](https://github.com/vllm-project/aibrix/pull/2961) [Bug] Fix runtime download status for nested and Hugging Face models
- [#2951](https://github.com/vllm-project/aibrix/pull/2951) [Bug] Initialize the global router manager once
- [#2943](https://github.com/vllm-project/aibrix/pull/2943) [Bug] Keep a one-block prefix match from scoring zero
- [#2944](https://github.com/vllm-project/aibrix/pull/2944) [Bug] Skip LRU eviction when the interval is not positive
- [#2935](https://github.com/vllm-project/aibrix/pull/2935) [Misc] Refactor ModelWarmup reconciliation around one snapshot
- [#2956](https://github.com/vllm-project/aibrix/pull/2956) [Docs] Rewrite the ModelClaim guide, samples and validation runbook
- [#2950](https://github.com/vllm-project/aibrix/pull/2950) [Docs] Publish English and Chinese docs from one RTD project

#### 🐛 New Issues
- [#2966](https://github.com/vllm-project/aibrix/issues/2966) [Bug] RoleSet status calculation panics when a role omits replicas `kind/bug` `area/runtime` `area/orchestration` 💬1
- [#2965](https://github.com/vllm-project/aibrix/issues/2965) [Bug] An empty model directory is reported as downloaded, so the download never starts `kind/bug` `area/runtime` 💬1
- [#2962](https://github.com/vllm-project/aibrix/issues/2962) [RFC]: Support Encode/Prefill/Decode (EPD) Disaggregation in AIBrix Gateway `area/gateway` `kind/feature` `area/website` `area/kv-cache` 💬1
- [#2954](https://github.com/vllm-project/aibrix/issues/2954) [Bug][ModelClaim] The old engine keeps serving after its pod leaves the pool `kind/bug` `area/orchestration` 💬1
- [#2958](https://github.com/vllm-project/aibrix/issues/2958) [Bug] /v1/completions returns 400 when prompt is an array of strings or token ids `kind/bug` `area/gateway` `area/batch` 💬1
- [#2957](https://github.com/vllm-project/aibrix/issues/2957) [Bug] chat completions routing text ignores assistant tool_calls and writes the literal `null` for null content `kind/bug` `area/gateway` 💬1
- [#2952](https://github.com/vllm-project/aibrix/issues/2952) [RFC]: Normalize the token_load decode score by each pod's KV capacity `area/gateway` `kind/feature` `area/website` `area/runtime`

#### 🔒 Closed Issues
- [#2826](https://github.com/vllm-project/aibrix/issues/2826) [RFC]: Support external routing decisions in the Gateway plugin
- [#2867](https://github.com/vllm-project/aibrix/issues/2867) [RFC]: Share the token_load decode ledger across gateway replicas
- [#2938](https://github.com/vllm-project/aibrix/issues/2938) [Feature][ModelClaim] Get ModelClaim ready for v0.8.0
- [#2698](https://github.com/vllm-project/aibrix/issues/2698) [Docs] Add Chinese localization and language switching for the documentation site

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,069 · **Open issues:** 590 · **Last push:** 2h ago

On October 10, 2026, there were no new releases for the Semantic Router. Key developments included the merging of several notable pull requests, such as #4514, which lays the foundation for a fail-closed cross-model key-value connector, and #4265, adding fixed-policy controls for modality routing. Additionally, documentation synchronization efforts were made with #4799, and #4752 established version v0.4 as the default documentation, marking the latest as unreleased. However, the day saw an uptick in issues, particularly with #4790, which reports a bug where the Qdrant Router Memory Retrieve ignores access tracking, signaling a critical area for future attention and potential fixes. Other pertinent bugs reported include PII masking issues (#4776) and inconsistencies in runtime documentation checks (#4795).

#### ✅ Merged PRs
- [#4802](https://github.com/vllm-project/semantic-router/pull/4802) [Community] Add seven Workgroup Members
- [#4799](https://github.com/vllm-project/semantic-router/pull/4799) [Docs] Synchronize runtime tutorials and development install checks
- [#4780](https://github.com/vllm-project/semantic-router/pull/4780) [Bug] Keep model inventory pricing clear of row actions
- [#4514](https://github.com/vllm-project/semantic-router/pull/4514) [Feature] Add fail-closed cross-model KV connector foundation
- [#4265](https://github.com/vllm-project/semantic-router/pull/4265) [Research] Add fixed-policy controls for modality routing
- [#4751](https://github.com/vllm-project/semantic-router/pull/4751) [Feature] Move Ecosystem & partnerships into Community
- [#4752](https://github.com/vllm-project/semantic-router/pull/4752) [Docs] Add v0.4 docs version as the default, label Latest as unreleased
- [#4801](https://github.com/vllm-project/semantic-router/pull/4801) [Community] Remove duplicate Workgroup Member entries for Stefan Wang

#### 🐛 New Issues
- [#4790](https://github.com/vllm-project/semantic-router/issues/4790) [Bug] Qdrant Router Memory Retrieve ignores access tracking `bug` `accepted` `wg/agentic-context` 💬3
- [#4776](https://github.com/vllm-project/semantic-router/issues/4776) [Bug] PII masking leaves later copies of a repeated value in clear text `bug` `accepted` `wg/router-models-inference-runtime` 💬3
- [#4795](https://github.com/vllm-project/semantic-router/issues/4795) [Bug] Runtime documentation checks disagree with current development docs `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#4805](https://github.com/vllm-project/semantic-router/issues/4805) [Bug] Remote embedding batches reject reordered index 0 and accept duplicate zeros `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#4804](https://github.com/vllm-project/semantic-router/issues/4804) [Bug] A language rule's explicit threshold overrides other rules' default threshold `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#4803](https://github.com/vllm-project/semantic-router/issues/4803) [Bug] Embedding cache shares vectors between models without package digests `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#4792](https://github.com/vllm-project/semantic-router/issues/4792) [Bug] Translation banner suppression is an unenforced per-page is_mtpe opt-in `bug` `needs-acceptance` `wg/developer-experience-ecosystem` 💬2
- [#4793](https://github.com/vllm-project/semantic-router/issues/4793) [Feature] Route native System One requests through bounded decision model cascades `enhancement` `accepted` `in-progress` `wg/mom-routing` 💬2
- [#4782](https://github.com/vllm-project/semantic-router/issues/4782) [Bug] Runtime recovery reuses stale capabilities when model discovery fails `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#4791](https://github.com/vllm-project/semantic-router/issues/4791) [Test] Cover the benchmark run exit-code contract with unit tests `enhancement` `needs-acceptance` `wg/evaluation-quality` 💬1
- [#4784](https://github.com/vllm-project/semantic-router/issues/4784) [Bug] Valkey Router Memory Store can leave an ID-only record after a failed write `bug` `accepted` `wg/agentic-context` 💬1
- [#4812](https://github.com/vllm-project/semantic-router/issues/4812) [Feature] Model runtime: replay Vela 2.0 forest graphs on CUDA `needs-acceptance` `wg/router-models-inference-runtime`
- [#4810](https://github.com/vllm-project/semantic-router/issues/4810) [Test] Model runtime: record what the fused kernels and graphs buy on MI300X `needs-acceptance` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#4665](https://github.com/vllm-project/semantic-router/issues/4665) [Feature] Move Ecosystem & partnerships into Community (after Build with us / Open positions)
- [#4770](https://github.com/vllm-project/semantic-router/issues/4770) [Bug] Models inventory: Pricing column header truncated / not readablle
- [#3857](https://github.com/vllm-project/semantic-router/issues/3857) [Research] Lexical and label-prior controls for the modality-routing candidate experiment
- [#4480](https://github.com/vllm-project/semantic-router/issues/4480) [Docs] Document merge queue failure modes and the requeue workaround for contributors
- [#4795](https://github.com/vllm-project/semantic-router/issues/4795) [Bug] Runtime documentation checks disagree with current development docs
- [#4694](https://github.com/vllm-project/semantic-router/issues/4694) [Bug] Docs: the default docs describe a CLI that the stable release doesn't have
- [#4732](https://github.com/vllm-project/semantic-router/issues/4732) [Feature] Recipes: route a reasoning fleet with one decision-model call (decision-balance)
- [#4545](https://github.com/vllm-project/semantic-router/issues/4545) [Bug] Dashboard serves `listeners[].api_keys` in plaintext to the `read` role

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*