# 📡 AI Ecosystem Digest — 2026-09-03

> Generated 2026-09-03 00:58 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 143,818 | 26 | 8 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 120,974 | 19 | 1 | 49 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,776 | 0 | 0 | 1 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,134 | 13 | 5 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 203,292 | 29 | 14 | 11 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,595 | 39 | 26 | 3 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 388,661 | 156 | 128 | 161 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 240,125 | 31 | 5 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 90,806 | 33 | 20 | 49 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 33,524 | 23 | 8 | 60 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 126,817 | 24 | 12 | 23 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 180,001 | 4 | 3 | 5 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 57,856 | 27 | 31 | 90 | 2 |
| [Unsloth](https://github.com/unslothai/unsloth) | 75,507 | 12 | 10 | 36 | 2 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,053 | 1 | 0 | 5 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,506 | 23 | 2 | 10 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.259](https://github.com/anthropics/claude-code/releases/tag/v2.1.259), addressing ongoing enhancements to its desktop app.  
- **OpenAI Codex** introduced multiple pre-release updates including [rust-v0.153.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.6) and significant work on input preservation alongside user feedback systems.  
- **OpenClaw** merged key features like a [UI fix](https://github.com/openclaw/openclaw/pull/136760) for session headers during Gateway reconnects, enhancing the user interface experience.  
- In **vLLM**, a new [bug](https://github.com/vllm-project/vllm/issues/54881) regarding skipped reasoning in Gemma 4 garnered 5 comments, indicating user demand for urgent attention.  
- **Semantic Router** faced scrutiny with a hot new issue reporting a [bug](https://github.com/vllm-project/semantic-router/issues/3333) in its jailbreak detection scoring, drawing 7 comments from the community.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 143,818 · **Open issues:** 14,894 · **Last push:** 2h ago

On September 3, 2026, Claude Code released version v2.1.259, introducing the `managedMcpServers` setting, allowing organizations to designate HTTP/SSE MCP servers for users, and the `--permission-prompts none` command for unattended headless hosts, which automatically denies any prompts while decisions continue in the active permission mode. There were no merged pull requests in the last 24 hours, but several new issues were reported, with #91528 highlighting a bug in the desktop app where crashes or interrupted updates can corrupt the session sidebar, potentially linked to an earlier noted problem. Other notable issues include persistent agent view access failures in #91652 and a rendering problem in the sidebar session groups after restart in #91635.

#### 🚀 New Releases
- [v2.1.259](https://github.com/anthropics/claude-code/releases/tag/v2.1.259) v2.1.259

#### 🐛 New Issues
- [#91528](https://github.com/anthropics/claude-code/issues/91528) [BUG] Desktop app: crash/interrupted update corrupts session sidebar — projects reset to "Other", titles/order lost, sessions appear merged (possible same root cause as #76430) `bug` `area:ui` `area:desktop` 💬3
- [#91652](https://github.com/anthropics/claude-code/issues/91652) Left arrow never opens agent view in some sessions (persistent for the whole session, retrying doesn't help) `bug` `area:tui` `needs-repro` `area:agent-view` 💬1
- [#91635](https://github.com/anthropics/claude-code/issues/91635) Sidebar session groups/pins stop rendering after restart (backend data intact, confirmed via list_sessions) `invalid` 💬1
- [#91648](https://github.com/anthropics/claude-code/issues/91648) [BUG] Windows: two Bash tool calls never return and never time out — main session deadlocks for 53 min; agent completions and user input queue behind the dead turn `bug` `platform:windows` `area:bash` `area:agents` 💬1
- [#91662](https://github.com/anthropics/claude-code/issues/91662) Claude Desktop (Windows, Store package) app window exits silently while a session idles with background subagents; no crash dump, no event-log entry `bug` `platform:windows` `area:agents` `area:desktop`
- [#91661](https://github.com/anthropics/claude-code/issues/91661) Fable 5.1 Incorrectly Flags ESP32 + W5500 Development Board Test Code as [cyber] `bug` `platform:windows` `area:model` `area:security`
- [#91656](https://github.com/anthropics/claude-code/issues/91656) Browser pane: opening any overlay (Annotate, settings, viewport) zooms the page to 2x until it is dismissed; recurs on every activation until the app is restarted `bug` `has repro` `platform:windows` `area:desktop`
- [#91660](https://github.com/anthropics/claude-code/issues/91660) [Feature Request] Add writable MCP tool to assign sessions to sidebar groups `enhancement` `platform:macos` `area:mcp` `area:desktop`
- [#91659](https://github.com/anthropics/claude-code/issues/91659) [Bug] Anthropic API Error: Content flagged by safeguards despite legitimate cybersecurity task `bug` `duplicate` `platform:macos` `area:model`
- [#91653](https://github.com/anthropics/claude-code/issues/91653) [Bug] UI layout misalignment after toggling agents view on Windows 11 `bug` `duplicate` `platform:windows` `area:tui`
- [#91658](https://github.com/anthropics/claude-code/issues/91658) [BUG] Cache-read is 96% of token volume (118x output); fan-out multiplies turns with no pre-execution projection — Max 20x drained in <48h `enhancement` `area:cost` `area:agents`
- [#91657](https://github.com/anthropics/claude-code/issues/91657) [Bug] Claude incorrectly claims bash instruction for file editing operations `bug` `platform:macos` `area:model` `needs-repro`
- [#91589](https://github.com/anthropics/claude-code/issues/91589) [BUG] Desktop Code tab: resumed session drops claude.ai connector tool schemas, array/number arguments sent as strings (-32602) `bug` `has repro` `platform:macos` `area:tools`
- [#91654](https://github.com/anthropics/claude-code/issues/91654) [BUG] Microsoft 365 connector never requests Calendars.ReadWrite / MailboxSettings.ReadWrite — calendar write tools fail with 403 even when connected `bug` `invalid`
- [#91655](https://github.com/anthropics/claude-code/issues/91655) Claude Desktop: interrupt during in-flight response hard-kills the whole session (live background tasks included) instead of aborting gracefully `duplicate` `platform:macos` `area:agents` `area:desktop`
- [#91651](https://github.com/anthropics/claude-code/issues/91651) [Bug] Fable Safety Filter False Positive on Public Open Source Code `bug` `platform:linux` `area:model` `needs-repro`
- [#91650](https://github.com/anthropics/claude-code/issues/91650) [BUG] Bash cd-compound-read guard prompts on absolute cd targets whenever a Read() deny rule exists (Windows Git Bash, 2.1.257-2.1.259) `bug` `has repro` `platform:windows` `area:bash`
- [#91649](https://github.com/anthropics/claude-code/issues/91649) [Desktop] Sort a project's Recents list by last message (the displayed timestamp column) `enhancement` `area:cowork` `area:desktop`
- [#91571](https://github.com/anthropics/claude-code/issues/91571) Windows: refresh-token rotation not persisted to .credentials.json; failed refresh blanks the store, locking out all fresh processes (2.1.220) `bug` `has repro` `platform:windows` `area:auth`
- [#91641](https://github.com/anthropics/claude-code/issues/91641) Remote MCP OAuth: shared user-scope refresh token breaks against IdPs with single-use refresh-token rotation (ODC) `bug` `has repro` `platform:macos` `area:auth`
- [#91647](https://github.com/anthropics/claude-code/issues/91647) I don't see any image attached to your message. Could you please share the bug report or image you'd like me to create a GitHub issue title for? Once you provide the details, I'll generate a concise, technical issue title following the format you specified `bug` `platform:windows` `needs-info`
- [#91646](https://github.com/anthropics/claude-code/issues/91646) autoUpdates: false in ~/.claude.json is ignored on native installs; updated twice in two days, once mid-session `bug` `platform:macos` `area:packaging`
- [#91645](https://github.com/anthropics/claude-code/issues/91645) [Cowork][Windows] CoworkVMService idle-shuts down the VM, then the app spins on the missing named pipe forever and never restarts the service `bug` `has repro` `platform:windows` `area:cowork`
- [#91644](https://github.com/anthropics/claude-code/issues/91644) Status line shows an opaque, undismissable "MR !<iid>" chip after creating a merge request; persists across restarts and leaks into other sessions `bug` `has repro` `platform:macos` `area:statusline`
- [#91643](https://github.com/anthropics/claude-code/issues/91643) plugin eval (macOS, ≥2.1.251): sandbox denies every Bash write — /private/tmp denyWrite covers the /tmp/e-* sandbox root `bug` `has repro` `platform:macos` `regression`
- [#91642](https://github.com/anthropics/claude-code/issues/91642) Scheduled-task CLI process does not exit after unattended run completes `duplicate` `platform:macos` `area:routines`

#### 🔒 Closed Issues
- [#75715](https://github.com/anthropics/claude-code/issues/75715) [Bug][cyber] Safety block halted legitimate security research mid-analysis (req_011Ccpq73vkqxNiqQbeWurAg)
- [#75714](https://github.com/anthropics/claude-code/issues/75714) [Bug][cyber] ClAudit false-positive while: “continue with file exam…” (req_011Ccpq6EYhVmFNc3bG1FVUc)
- [#75713](https://github.com/anthropics/claude-code/issues/75713) [Bug][cyber] Blocked legitimate firmware licensing-system reverse-engineering analysis (req_011Ccpq3XHh1yVM4MaoKrdVM)
- [#75556](https://github.com/anthropics/claude-code/issues/75556) [Bug][cyber] Safety block halts debugging of native code on personal authorized test device (req_011Ccoxyr95MfSF2yRjsJZ5k)
- [#75311](https://github.com/anthropics/claude-code/issues/75311) [Bug][cyber] Safety block halted a routine cloud-IAM tenant security audit mid-report (req_011CcPkE7Ne9nyS4y8TMkfzV)
- [#75309](https://github.com/anthropics/claude-code/issues/75309) [Bug][cyber] Safety filter blocked routine cloud IAM policy review/configuration request (req_011Ccn3fyJzr74vV5BBGw6tv)
- [#75306](https://github.com/anthropics/claude-code/issues/75306) [Bug][cyber] Safety block halted defensive-hardening writeup after a frustrated exclamation, no real cyber ris (req_011CcGvUjqu7wkujn86e122w)
- [#85937](https://github.com/anthropics/claude-code/issues/85937) [Correction] August USD 99.08 report withdrawn after Platform/API reconciliation

### OpenAI Codex (`openai/codex`)

**Stars:** 120,974 · **Open issues:** 14,955 · **Last push:** <1h ago

On September 3, 2026, Rust released three new alpha versions: 0.153.0-alpha.6, 0.153.0-alpha.5.1, and 0.153.0-alpha.5, each bringing various improvements to the framework. Significant merged pull requests include #42401, which introduces TUI collaboration modes, and #42395, which exposes the Codex version to commands. Meanwhile, several issues surfaced, with #42263 being notable as it reports a malfunction in the ChatGPT desktop app where the new chat page cannot switch to Codex, Search, or Temporary Chat upon first opening. Other emerging concerns include discrepancies in weekly quotas, suggesting user dissatisfaction with the system's resource management.

#### 🚀 New Releases
- [rust-v0.153.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.6) 0.153.0-alpha.6
- [rust-v0.153.0-alpha.5.1](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.5.1) 0.153.0-alpha.5.1
- [rust-v0.153.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.5) 0.153.0-alpha.5

#### ✅ Merged PRs
- [#42401](https://github.com/openai/codex/pull/42401) Discover TUI collaboration modes from the app server
- [#42399](https://github.com/openai/codex/pull/42399) Preserve restored input after resolved misalignment errors
- [#42397](https://github.com/openai/codex/pull/42397) Extract focused TUI logic into submodules
- [#42395](https://github.com/openai/codex/pull/42395) Expose the Codex version to commands and turn metadata
- [#42392](https://github.com/openai/codex/pull/42392) Support managed daemon updates on Windows
- [#42391](https://github.com/openai/codex/pull/42391) Authorize `apply_patch` in the executor path context
- [#42388](https://github.com/openai/codex/pull/42388) Recover deferred environments after provisioning failure
- [#42386](https://github.com/openai/codex/pull/42386) Expose loaded thread environments in app-server responses
- [#42385](https://github.com/openai/codex/pull/42385) Add experimental context management activation
- [#42384](https://github.com/openai/codex/pull/42384) Add an RMCP OAuth credential store adapter
- [#42383](https://github.com/openai/codex/pull/42383) Update rmcp to 3.2.0
- [#42381](https://github.com/openai/codex/pull/42381) Support managed app-server lifecycle on Windows
- [#42380](https://github.com/openai/codex/pull/42380) Require confirmation for safety-buffered retries
- [#42378](https://github.com/openai/codex/pull/42378) Route rollout reads through the canonical JSON decoder
- [#42377](https://github.com/openai/codex/pull/42377) Make app-server realtime sessions always available
- [#42375](https://github.com/openai/codex/pull/42375) Clean up Windows sandbox resources on app uninstall
- [#42374](https://github.com/openai/codex/pull/42374) Extract PID startup into a dedicated module
- [#42373](https://github.com/openai/codex/pull/42373) Add attributed exec process lifecycle telemetry
- [#42372](https://github.com/openai/codex/pull/42372) Add Luna Reserve usage fallback to the TUI
- [#42370](https://github.com/openai/codex/pull/42370) Improve MCP server startup error logging
- [#42369](https://github.com/openai/codex/pull/42369) Keep SQLite history projection moving past invalid records
- [#42366](https://github.com/openai/codex/pull/42366) List managed worktrees for a repository
- [#42364](https://github.com/openai/codex/pull/42364) Support graceful daemon shutdown on Windows
- [#42358](https://github.com/openai/codex/pull/42358) Extend rate limit reads with usage capabilities
- [#42356](https://github.com/openai/codex/pull/42356) Initialize questions in buffered replay test messages
- [#42354](https://github.com/openai/codex/pull/42354) Add free-form asynchronous user messages
- [#42353](https://github.com/openai/codex/pull/42353) Add experimental Windows sandbox service provisioning
- [#42351](https://github.com/openai/codex/pull/42351) Enable authenticated Windows sandbox provisioning
- [#42348](https://github.com/openai/codex/pull/42348) Add Windows sandbox client authentication
- [#42344](https://github.com/openai/codex/pull/42344) Prepare managed policy validation for Windows sandbox provisioning
- [#42342](https://github.com/openai/codex/pull/42342) Harden Windows sandbox provisioning file handling
- [#42341](https://github.com/openai/codex/pull/42341) Add Windows sandbox service lifecycle scaffolding
- [#42337](https://github.com/openai/codex/pull/42337) Add an authenticated Windows sandbox provisioning client
- [#42334](https://github.com/openai/codex/pull/42334) Add a Windows sandbox provisioning protocol
- [#42332](https://github.com/openai/codex/pull/42332) Package prepared runtimes with the voice host
- [#42330](https://github.com/openai/codex/pull/42330) Protect Windows sandbox binaries from inherited write access
- [#42328](https://github.com/openai/codex/pull/42328) Support durable reasoning configuration updates
- [#42326](https://github.com/openai/codex/pull/42326) Harden Windows control socket rendezvous
- [#42325](https://github.com/openai/codex/pull/42325) Render completed assistant messages directly during replay
- [#42324](https://github.com/openai/codex/pull/42324) Avoid executing PATH helpers before workspace trust
- [#42320](https://github.com/openai/codex/pull/42320) Make the app-server thread unload delay configurable
- [#42319](https://github.com/openai/codex/pull/42319) Show live context compaction status in the TUI
- [#42318](https://github.com/openai/codex/pull/42318) Support packaged managed Codex binary paths
- [#42316](https://github.com/openai/codex/pull/42316) Refactor exec-server startup futures
- [#42314](https://github.com/openai/codex/pull/42314) Preserve target-native cwd in permission approval requests
- [#42309](https://github.com/openai/codex/pull/42309) Separate Windows sandbox provisioning from ACL refresh
- [#42306](https://github.com/openai/codex/pull/42306) Stabilize the detached exec-server session resume test
- [#42298](https://github.com/openai/codex/pull/42298) Preserve retained answers across steer rollbacks
- [#42293](https://github.com/openai/codex/pull/42293) Preserve verified answers across history compaction

#### 🐛 New Issues
- [#42263](https://github.com/openai/codex/issues/42263) On first opening the ChatGPT desktop app, the new chat page cannot switch to Codex, Search, or Temporary Chat `bug` `windows-os` `app` 💬5
- [#42224](https://github.com/openai/codex/issues/42224) Pro Lite / Pro 5x: weekly quota depleted ~93% in one day after automatic reset despite comparable token volume `bug` `windows-os` `rate-limits` `app` 💬2
- [#42280](https://github.com/openai/codex/issues/42280) Weekly usage reset date advanced without restoring allowance `bug` `windows-os` `rate-limits` `app` 💬3
- [#42360](https://github.com/openai/codex/issues/42360) Swapping between chatgpt and codex on desktop app `bug` `windows-os` `app` 💬3
- [#42289](https://github.com/openai/codex/issues/42289) [Windows][Pets] 150% display scaling makes the floating pet non-interactive `bug` `windows-os` `app` `pets` 💬2
- [#42195](https://github.com/openai/codex/issues/42195) Windows Application Pane overlaps ChatGPT/Codex switcher dropdown, search button and notification button `bug` `windows-os` `app` 💬2
- [#42393](https://github.com/openai/codex/issues/42393) Remote compaction v2 fails `bug` `context` `app` 💬1
- [#42389](https://github.com/openai/codex/issues/42389) Conversation recap language is incorrectly inferred from timezone `bug` `windows-os` `context` `app` 💬1
- [#42387](https://github.com/openai/codex/issues/42387) Codex Desktop: chat history stops rendering after crash mid-turn (projection cursor never follows rollout file rotation) `bug` `windows-os` `app` `session` 💬1
- [#42382](https://github.com/openai/codex/issues/42382) Restore manual dragging for the floating task-status indicator `bug` `windows-os` `app` 💬1
- [#42379](https://github.com/openai/codex/issues/42379) Follow up questions block text `bug` `app` 💬1
- [#42376](https://github.com/openai/codex/issues/42376) Scheduled tasks fail with custom Responses providers when standalone function_call_output omits call_id `bug` `custom-model` `app` `app-server` 💬1
- [#42371](https://github.com/openai/codex/issues/42371) Unable to locate git hub directory `bug` `windows-os` `CLI` 💬1
- [#42400](https://github.com/openai/codex/issues/42400) [app-server] Expose custom ThreadStore injection `enhancement` `app-server`
- [#42398](https://github.com/openai/codex/issues/42398) codex exec fails in an outer read-only sandbox because installation_id requires write access `bug` `sandbox` `exec` `CLI`
- [#42396](https://github.com/openai/codex/issues/42396) Keep the curated Vercel plugin in sync with vercel/vercel-plugin `enhancement` `app` `skills`
- [#42394](https://github.com/openai/codex/issues/42394) SpreadsheetFile.render() multiplies imported rich-text font sizes by 100 before XLSX export `bug` `app`
- [#42390](https://github.com/openai/codex/issues/42390) https://github.com/openai/codex/issues/new?template=1-codex-app.yml&steps=Feedback%20ID%3A%20no-active-thread-01a06486-6ff5-7553-b185-69d32001ca1e `bug` `app`
- [#42336](https://github.com/openai/codex/issues/42336) Kling CLI plugin OAuth cannot authenticate in remote ChatGPT Work runtime `enhancement` `codex-web` `auth` `skills`

#### 🔒 Closed Issues
- [#42195](https://github.com/openai/codex/issues/42195) Windows Application Pane overlaps ChatGPT/Codex switcher dropdown, search button and notification button

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,776 · **Open issues:** 862 · **Last push:** 4h ago

On September 3, 2026, Gemini CLI released version v0.59.0-nightly.20260902.g4963a4456, featuring improvements in destination validation and connection routing within the web fetch utilities, thanks to the first contribution from @diegogodinezr. Additionally, a critical fix was merged addressing the enforcement of RFC 9207 issuer identification in the MCP OAuth flow, which enhances security in authentication processes. Notably, there were no new issues reported in the last 24 hours, indicating a smooth day in terms of stability and functionality.

#### 🚀 New Releases
- [v0.59.0-nightly.20260902.g4963a4456](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260902.g4963a4456) Release v0.59.0-nightly.20260902.g4963a4456

#### ✅ Merged PRs
- [#29117](https://github.com/google-gemini/gemini-cli/pull/29117) fix(core): enforce RFC 9207 issuer identification in MCP OAuth flow

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,134 · **Open issues:** 2,272 · **Last push:** 9h ago

On September 3, 2026, GitHub Copilot CLI released version 1.0.83-3, which included various fixes and changes. The prior version, 1.0.83-2, introduced notable enhancements, such as the ability for custom agents to list multiple models with a prioritization feature and added support for claude-fable-5.1. Improvements were also made to Linux sandboxes, with network egress now restricted to the configured proxy, and new requirements outlined for using proxy mode. Among the new issues logged today, #4695 stands out, addressing the unreliability of MCP OAuth token reuse across sessions due to duplicate cache-key entries, which has garnered three comments from the community.

#### 🚀 New Releases
- [v1.0.83-3](https://github.com/github/copilot-cli/releases/tag/v1.0.83-3) 1.0.83-3
- [v1.0.83-2](https://github.com/github/copilot-cli/releases/tag/v1.0.83-2) 1.0.83-2

#### 🐛 New Issues
- [#4695](https://github.com/github/copilot-cli/issues/4695) MCP OAuth tokens for HTTP servers not reliably reused across sessions — duplicate cache-key entries force repeated re-auth `triage` 💬3
- [#4692](https://github.com/github/copilot-cli/issues/4692) default Enterprise model `area:enterprise` `area:models` 💬3
- [#4699](https://github.com/github/copilot-cli/issues/4699) OOM crash (`JavaScript heap out of memory`) on long `--resume` sessions; crash dumps written into the user's cwd `triage`
- [#4696](https://github.com/github/copilot-cli/issues/4696) allow-all mode resets after long inactive period `triage` 💬1
- [#4703](https://github.com/github/copilot-cli/issues/4703) Per-agent provider selection for custom agents `triage`
- [#4702](https://github.com/github/copilot-cli/issues/4702) Windows: instruction file loaded twice due to \ vs / path-separator mismatch in dedup `triage`
- [#4701](https://github.com/github/copilot-cli/issues/4701) Permission-gate/tool-approval preview truncates full Windows paths `triage`
- [#4700](https://github.com/github/copilot-cli/issues/4700) `skillDirectories` setting from `settings.json` is not honored in ACP mode (`copilot --acp`) `triage`
- [#4698](https://github.com/github/copilot-cli/issues/4698) Cannot compact session `triage`
- [#4697](https://github.com/github/copilot-cli/issues/4697) /clear does not terminate previous stdio MCP server child processes (unlike /mcp reload ) `triage`
- [#4694](https://github.com/github/copilot-cli/issues/4694) WSL2: Copilot CLI 1.0.82 consumes ~31 GB RSS and ~57% CPU `triage`
- [#4693](https://github.com/github/copilot-cli/issues/4693) filter/scope session tabs & resume list by repository/solution `triage`
- [#4691](https://github.com/github/copilot-cli/issues/4691) Successful apply_patch writes are missing from session file attribution `area:sessions` `area:tools`

#### 🔒 Closed Issues
- [#3074](https://github.com/github/copilot-cli/issues/3074) Add an `/effort` command to quickly switch reasoning effort for the current model
- [#2630](https://github.com/github/copilot-cli/issues/2630) Bug Report: Custom agent `mcp-servers` not connected in CLI sub-agent or `--prompt` contexts
- [#4671](https://github.com/github/copilot-cli/issues/4671) 1.0.81 regression: OAuth login fails behind a TLS-inspecting HTTP proxy while 1.0.80 works
- [#4587](https://github.com/github/copilot-cli/issues/4587) Verify the released catalogue package
- [#4665](https://github.com/github/copilot-cli/issues/4665) sessionStart additionalContext duplicated on each turn and passed to subagents

### OpenCode (`anomalyco/opencode`)

**Stars:** 203,292 · **Open issues:** 5,600 · **Last push:** <1h ago

On September 3, 2026, OpenCode released v1.18.27, which included important bug fixes such as setting default provider header and streamed chunk timeouts to five minutes, thereby reducing the likelihood of slow model startups failing. Notable merged pull requests included a fix to disable bytecode until Bun 1.4.1 and a refactor to ensure the stability of plugin activation across failures and refreshes. A particularly pressing new issue emerged regarding the `thinking.adaptive.block_binding.prefix_mismatch_behavior`, which raised concerns over the permissibility of extra inputs. Additionally, users reported problems with the OpenCode Zen gateway rejecting Anthropic requests due to a block binding error, highlighting ongoing challenges in service integration.

#### 🚀 New Releases
- [v1.18.27](https://github.com/anomalyco/opencode/releases/tag/v1.18.27) v1.18.27

#### ✅ Merged PRs
- [#46933](https://github.com/anomalyco/opencode/pull/46933) fix(cli): disable bytecode until Bun 1.4.1
- [#46908](https://github.com/anomalyco/opencode/pull/46908) test(core): refuse network in the test harness
- [#46927](https://github.com/anomalyco/opencode/pull/46927) refactor(core): preserve normalized tool results
- [#46926](https://github.com/anomalyco/opencode/pull/46926) refactor(client): derive session inputs from pending items
- [#46684](https://github.com/anomalyco/opencode/pull/46684) fix(app): show review diffs for non-git VCS backends
- [#46919](https://github.com/anomalyco/opencode/pull/46919) fix(app): restore uniform new session tab width
- [#46924](https://github.com/anomalyco/opencode/pull/46924) refactor(client): edit streamed message targets directly
- [#46914](https://github.com/anomalyco/opencode/pull/46914) chore: bump gitlab-ai-provider to 6.13.0
- [#46918](https://github.com/anomalyco/opencode/pull/46918) fix(core): update plugin reload npm fixture
- [#46910](https://github.com/anomalyco/opencode/pull/46910) feat(cli): use endpoint-provided update packages
- [#46899](https://github.com/anomalyco/opencode/pull/46899) fix(core): keep plugin activation stable across failures and refreshes

#### 🐛 New Issues
- [#46729](https://github.com/anomalyco/opencode/issues/46729) [BUG] thinking.adaptive.block_binding.prefix_mismatch_behavior: Extra inputs are not permitted 💬5
- [#46777](https://github.com/anomalyco/opencode/issues/46777) google-vertex-anthropic: claude-sonnet-5 fails on every message in v1.18.26 ("Extra inputs are not permitted" / thinking.block_binding) — works in v1.18.20 💬5
- [#46760](https://github.com/anomalyco/opencode/issues/46760) [BUG]:`opencode run` returns {UnknownError} when the configured default model is deprecated 💬3
- [#46894](https://github.com/anomalyco/opencode/issues/46894) Billing dispute — unintended fallback consumed ~25% of my OpenCode Go limit 💬2
- [#46909](https://github.com/anomalyco/opencode/issues/46909) [Bug] OpenCode Zen gateway rejects Anthropic requests with block_binding extra input error 💬2
- [#46855](https://github.com/anomalyco/opencode/issues/46855) docs: opencode-deja missing from the Ecosystem plugins list 💬2
- [#46877](https://github.com/anomalyco/opencode/issues/46877) [FEATURE]: Restore DeepSeek V4 Flash quota on Go to pre-August levels 💬2
- [#46868](https://github.com/anomalyco/opencode/issues/46868) Bug: configuring clang-format, air or uv by name silently disables the formatter 💬2
- [#46870](https://github.com/anomalyco/opencode/issues/46870) Opencode Go: DeepSeek Zero Data Retention (ZDR) policy expired August 31 according to documentation
- [#46827](https://github.com/anomalyco/opencode/issues/46827) No scroll bal to scroll down on connected provider popup for connecting new provider 💬2
- [#46936](https://github.com/anomalyco/opencode/issues/46936) 你是真傻逼，给老子订阅掉了，操你妈 `needs:compliance` 💬1
- [#46932](https://github.com/anomalyco/opencode/issues/46932) muse spark 1.3 not have after add auth meta `needs:compliance` 💬1
- [#46931](https://github.com/anomalyco/opencode/issues/46931) OpenCode Go usage dashboard showing double cost for glm-5.3-flash 💬1
- [#46929](https://github.com/anomalyco/opencode/issues/46929) Allow agents to use a small/fast model for lightweight turns `needs:compliance` 💬1
- [#46891](https://github.com/anomalyco/opencode/issues/46891) github-copilot: accounts without entitlement appear connected but expose no models `2.0` 💬1
- [#46886](https://github.com/anomalyco/opencode/issues/46886) Random occasional stalls when using local vLLM provider 💬1
- [#46881](https://github.com/anomalyco/opencode/issues/46881) core: standalone signed-empty reasoning turns are replayed into later requests `2.0` 💬1
- [#46880](https://github.com/anomalyco/opencode/issues/46880) core: signature-only responses complete successfully with no visible output `2.0` 💬1
- [#46873](https://github.com/anomalyco/opencode/issues/46873) Legacy agent `tools` config overrides user `permission` rules in 1.18.26 💬1
- [#46861](https://github.com/anomalyco/opencode/issues/46861) Model.compatibility.toolSchema is never set — the Moonshot/Kimi tool-schema projection exists but is dead code 💬1
- [#46852](https://github.com/anomalyco/opencode/issues/46852) bug(desktop): tab-cycle shortcuts can follow route history 💬1
- [#46938](https://github.com/anomalyco/opencode/issues/46938) [Bug]: Desktop auto-update discards window tab layout (new window ID, old window state orphaned)
- [#46913](https://github.com/anomalyco/opencode/issues/46913) [FEATURE]: Bump gitlab-ai-provider to 6.13.0 (adds Claude Fable 5.1)
- [#46883](https://github.com/anomalyco/opencode/issues/46883) tui: token rate uses the final metadata burst instead of model-call duration `2.0`
- [#46872](https://github.com/anomalyco/opencode/issues/46872) /undo does not undo todos
- [#46867](https://github.com/anomalyco/opencode/issues/46867) [BUG]: DEP0169 url.parse() DeprecationWarning printed when a plugin is declared with a git spec
- [#46859](https://github.com/anomalyco/opencode/issues/46859) Empty image attachment is not caught because the guard reads the wrong part shape
- [#46858](https://github.com/anomalyco/opencode/issues/46858) Assistant message hangs forever (empty parts, never completes) on text-only turns in 1.18.25 — fixed by 1.18.26
- [#46856](https://github.com/anomalyco/opencode/issues/46856) [FEATURE]: propagate W3C trace context (traceparent/baggage) in MCP tools/call _meta per SEP-414

#### 🔒 Closed Issues
- [#46777](https://github.com/anomalyco/opencode/issues/46777) google-vertex-anthropic: claude-sonnet-5 fails on every message in v1.18.26 ("Extra inputs are not permitted" / thinking.block_binding) — works in v1.18.20
- [#36520](https://github.com/anomalyco/opencode/issues/36520) [FEATURE]: Please dont use Ctrl+B for background tasks
- [#46137](https://github.com/anomalyco/opencode/issues/46137) Auto-compaction never triggers for large-context models (hy3): isOverflow sees only single-message tokens
- [#45368](https://github.com/anomalyco/opencode/issues/45368) Compaction re-triggers after every step when a model does not report limit.output
- [#45367](https://github.com/anomalyco/opencode/issues/45367) Directory plugins load in filesystem order, and one plugin's hook error silently skips the rest
- [#45327](https://github.com/anomalyco/opencode/issues/45327) capabilities.toolcall is populated but never honored — tool_call: false still sends the full tool roster
- [#41372](https://github.com/anomalyco/opencode/issues/41372) [FEATURE]: Model capability class in metadata — size-appropriate prompts and tool behavior for small/local models
- [#46894](https://github.com/anomalyco/opencode/issues/46894) Billing dispute — unintended fallback consumed ~25% of my OpenCode Go limit
- [#46909](https://github.com/anomalyco/opencode/issues/46909) [Bug] OpenCode Zen gateway rejects Anthropic requests with block_binding extra input error
- [#46855](https://github.com/anomalyco/opencode/issues/46855) docs: opencode-deja missing from the Ecosystem plugins list
- [#46827](https://github.com/anomalyco/opencode/issues/46827) No scroll bal to scroll down on connected provider popup for connecting new provider
- [#45328](https://github.com/anomalyco/opencode/issues/45328) v1 session loop tells the model tools are disabled at max steps but still sends them (v2 runner strips them)
- [#44304](https://github.com/anomalyco/opencode/issues/44304) Zen recharge not credited
- [#46913](https://github.com/anomalyco/opencode/issues/46913) [FEATURE]: Bump gitlab-ai-provider to 6.13.0 (adds Claude Fable 5.1)

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,595 · **Open issues:** 1,257 · **Last push:** <1h ago

On September 3, 2026, Qwen Code released live-host-v0.2.0, which includes notable changes such as a fix for tunable ECS Vitest concurrency and advancements in the OpenTUI migration with batch 4 covering dialogs and commands. Among the merged pull requests, significant fixes were implemented to address the rate-limit interim monitor notification and adjustments to the serve routes daemon's CI-sized ACP handshake budget. Additionally, a critical new issue was reported concerning the Monitor pulse storm, which poses a denial-of-service risk to interactive sessions due to an ineffective ESC cancel and starved user input. The day saw a mix of improvements and challenges as the team continues to refine the platform.

#### 🚀 New Releases
- [live-host-v0.2.0](https://github.com/QwenLM/qwen-code/releases/tag/live-host-v0.2.0) Qwen Live Host v0.2.0

#### ✅ Merged PRs
- [#10848](https://github.com/QwenLM/qwen-code/pull/10848) fix(cli): rate-limit interim monitor notification turns (#10818)
- [#10846](https://github.com/QwenLM/qwen-code/pull/10846) fix(test): give the serve routes daemon a CI-sized ACP handshake budget
- [#10843](https://github.com/QwenLM/qwen-code/pull/10843) fix(ci): stop sandbox image prep from waiting on another run's tests

#### 🐛 New Issues
- [#10818](https://github.com/QwenLM/qwen-code/issues/10818) Monitor pulse storm can DoS an interactive session: ESC cancel is ineffective and user input is starved `priority/P1` `type/bug` `category/core` `scope/interactive` 💬3
- [#10859](https://github.com/QwenLM/qwen-code/issues/10859) Serve shell guard blocks every git command outside the session directory, cannot be configured or audited, and is not surfaced to the operator `priority/P3` `category/security` `scope/shell` `type/enhancement` 💬3
- [#10782](https://github.com/QwenLM/qwen-code/issues/10782) bug(channels): removed workspaces leave stale selections that block new starts `priority/P2` `type/bug` `category/core` `daemon` 💬3
- [#10860](https://github.com/QwenLM/qwen-code/issues/10860) `qwen serve`: built-in shell guard ignores the session approval mode, denies read-only Git and non-Git commands outside the session directory, and cannot be configured, audited, or surfaced to the operator `priority/P3` `category/security` `scope/shell` `type/enhancement` 💬2
- [#10850](https://github.com/QwenLM/qwen-code/issues/10850) ci: Dependency CVE audit fails repo-wide on new fast-uri/qs/uuid advisories (main lockfile) `priority/P1` `type/bug` `category/security` `scope/ci-cd` 💬2
- [#10833](https://github.com/QwenLM/qwen-code/issues/10833) Main CI failed: E2E Tests on 76c32fd5ea4a `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10840](https://github.com/QwenLM/qwen-code/issues/10840) Main CI failed: E2E Tests on 867bb94a1f31 `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬2
- [#10791](https://github.com/QwenLM/qwen-code/issues/10791) [core] Balanced content-only <thinking> blocks still leak to user-visible output `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬2
- [#10797](https://github.com/QwenLM/qwen-code/issues/10797) [core] Non-thinking scaffolding tags (tool-result blocks, system-reminders) echoed into user-visible output `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬2
- [#10832](https://github.com/QwenLM/qwen-code/issues/10832) Main CI failed: Qwen Code CI on cf86aa411fb9 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10834](https://github.com/QwenLM/qwen-code/issues/10834) Images returned by MCP tools bypass the read_file image budget and enter the context at full resolution `priority/P2` `type/bug` `category/tools` `scope/mcp` 💬2
- [#10823](https://github.com/QwenLM/qwen-code/issues/10823) Main CI failed: E2E Tests on 3e8d92a7291e `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10819](https://github.com/QwenLM/qwen-code/issues/10819) Main CI failed: E2E Tests on d50b0283ef1a `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10811](https://github.com/QwenLM/qwen-code/issues/10811) Main CI failed: E2E Tests on 5dc7547d4c76 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10804](https://github.com/QwenLM/qwen-code/issues/10804) Main CI failed: E2E Tests on cd1ac72874a6 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10822](https://github.com/QwenLM/qwen-code/issues/10822) Main CI failed: Qwen Code CI on 29baecd78067 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10815](https://github.com/QwenLM/qwen-code/issues/10815) Main CI failed: Qwen Code CI on f4937c18546a `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10776](https://github.com/QwenLM/qwen-code/issues/10776) Main CI failed: Qwen Code CI on 7df5ac6898a4 `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬2
- [#10789](https://github.com/QwenLM/qwen-code/issues/10789) Main CI failed: E2E Tests on bde667f8f87f `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10783](https://github.com/QwenLM/qwen-code/issues/10783) Main CI failed: E2E Tests on 6302411a200a `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬2
- [#10771](https://github.com/QwenLM/qwen-code/issues/10771) Main CI failed: E2E Tests on ec7caa2399cc `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10768](https://github.com/QwenLM/qwen-code/issues/10768) Main CI failed: E2E Tests on edfdbda89a73 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10821](https://github.com/QwenLM/qwen-code/issues/10821) bug(web-shell): Model picker disappears after opening New task twice `priority/P2` `type/bug` `category/ui` `scope/model-switching` 💬2
- [#10810](https://github.com/QwenLM/qwen-code/issues/10810) feat(serve): Replace runtime-wide Conversations ownership with session-scoped cross-daemon leases `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬2
- [#10816](https://github.com/QwenLM/qwen-code/issues/10816) feat(channels): add configurable inbound message prefix `priority/P3` `type/feature-request` `category/integration` 💬2
- [#10820](https://github.com/QwenLM/qwen-code/issues/10820) Release re-runs the unit suite main CI already ran: reuse a green CI verdict for the duplicated lane `priority/P2` `type/feature-request` `category/development` `scope/github-actions` 💬2
- [#10856](https://github.com/QwenLM/qwen-code/issues/10856) Release Failed for v0.22.3-nightly.20260902.8fde141a24 on 2026-09-02 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10853](https://github.com/QwenLM/qwen-code/issues/10853) Release Failed for v0.23.0 on 2026-09-02 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10852](https://github.com/QwenLM/qwen-code/issues/10852) Main CI failed: Qwen Code CI on 4f212873b59f `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10845](https://github.com/QwenLM/qwen-code/issues/10845) Release Failed for v0.23.0 on 2026-09-02 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10838](https://github.com/QwenLM/qwen-code/issues/10838) Release Failed for v0.23.0 on 2026-09-02 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10766](https://github.com/QwenLM/qwen-code/issues/10766) Main CI failed: E2E Tests on 3de2e676bd91 `type/bug` `status/ready-for-agent` `autofix/approved` 💬1
- [#10762](https://github.com/QwenLM/qwen-code/issues/10762) Main CI failed: E2E Tests on 8051bf02bd38 `type/bug` `status/ready-for-agent` `autofix/approved` 💬1
- [#10755](https://github.com/QwenLM/qwen-code/issues/10755) Release Failed for v0.22.3-nightly.20260902.77d41f48d3 on 2026-09-02 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10779](https://github.com/QwenLM/qwen-code/issues/10779) Release Failed for v0.22.3-nightly.20260902.7df5ac6898 on 2026-09-02 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10854](https://github.com/QwenLM/qwen-code/issues/10854) Deferred review findings from PR #10831
- [#10849](https://github.com/QwenLM/qwen-code/issues/10849) Deferred review findings from PR #10793
- [#10847](https://github.com/QwenLM/qwen-code/issues/10847) Deferred review findings from PR #10687
- [#10839](https://github.com/QwenLM/qwen-code/issues/10839) Deferred review findings from PR #10758

#### 🔒 Closed Issues
- [#10818](https://github.com/QwenLM/qwen-code/issues/10818) Monitor pulse storm can DoS an interactive session: ESC cancel is ineffective and user input is starved
- [#10859](https://github.com/QwenLM/qwen-code/issues/10859) Serve shell guard blocks every git command outside the session directory, cannot be configured or audited, and is not surfaced to the operator
- [#10782](https://github.com/QwenLM/qwen-code/issues/10782) bug(channels): removed workspaces leave stale selections that block new starts
- [#8977](https://github.com/QwenLM/qwen-code/issues/8977) fix(web-shell): retain manual session name after /clear
- [#10173](https://github.com/QwenLM/qwen-code/issues/10173) feat(cd): Reload project-scoped runtime configuration after /cd
- [#10833](https://github.com/QwenLM/qwen-code/issues/10833) Main CI failed: E2E Tests on 76c32fd5ea4a
- [#10840](https://github.com/QwenLM/qwen-code/issues/10840) Main CI failed: E2E Tests on 867bb94a1f31
- [#10688](https://github.com/QwenLM/qwen-code/issues/10688) fix(dws): prevent cross-conversation direct-message blocking
- [#10823](https://github.com/QwenLM/qwen-code/issues/10823) Main CI failed: E2E Tests on 3e8d92a7291e
- [#10819](https://github.com/QwenLM/qwen-code/issues/10819) Main CI failed: E2E Tests on d50b0283ef1a
- [#10811](https://github.com/QwenLM/qwen-code/issues/10811) Main CI failed: E2E Tests on 5dc7547d4c76
- [#10804](https://github.com/QwenLM/qwen-code/issues/10804) Main CI failed: E2E Tests on cd1ac72874a6
- [#10822](https://github.com/QwenLM/qwen-code/issues/10822) Main CI failed: Qwen Code CI on 29baecd78067
- [#10815](https://github.com/QwenLM/qwen-code/issues/10815) Main CI failed: Qwen Code CI on f4937c18546a
- [#10776](https://github.com/QwenLM/qwen-code/issues/10776) Main CI failed: Qwen Code CI on 7df5ac6898a4
- [#10740](https://github.com/QwenLM/qwen-code/issues/10740) Main CI failed: Qwen Code CI on aed0c0d920a1
- [#10725](https://github.com/QwenLM/qwen-code/issues/10725) Main CI failed: E2E Tests on d6c03908164d
- [#10789](https://github.com/QwenLM/qwen-code/issues/10789) Main CI failed: E2E Tests on bde667f8f87f
- [#10783](https://github.com/QwenLM/qwen-code/issues/10783) Main CI failed: E2E Tests on 6302411a200a
- [#10771](https://github.com/QwenLM/qwen-code/issues/10771) Main CI failed: E2E Tests on ec7caa2399cc
- [#10768](https://github.com/QwenLM/qwen-code/issues/10768) Main CI failed: E2E Tests on edfdbda89a73
- [#10821](https://github.com/QwenLM/qwen-code/issues/10821) bug(web-shell): Model picker disappears after opening New task twice
- [#10766](https://github.com/QwenLM/qwen-code/issues/10766) Main CI failed: E2E Tests on 3de2e676bd91
- [#10762](https://github.com/QwenLM/qwen-code/issues/10762) Main CI failed: E2E Tests on 8051bf02bd38
- [#10755](https://github.com/QwenLM/qwen-code/issues/10755) Release Failed for v0.22.3-nightly.20260902.77d41f48d3 on 2026-09-02
- [#10779](https://github.com/QwenLM/qwen-code/issues/10779) Release Failed for v0.22.3-nightly.20260902.7df5ac6898 on 2026-09-02

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

**Stars:** 388,661 · **Open issues:** 6,087 · **Last push:** <1h ago

There were no new releases from OpenClaw on September 3, 2026. However, the day saw significant development activity with key improvements, including the addition of a Discord invitation to the web UI (#123351) and a native Stop button for Slack agent sessions (#136706). Several notable fixes were merged, such as ensuring session headers remain visible during Gateway reconnects (#136760), preventing activity refresh storms from stalling replies (#136762), and addressing issues with Windows installations that left maintenance processes blocked (#136203). Among the new issues, a bug was reported where the command executor hangs when spawning SSH, related to a regression from previous versions (#136183), indicating ongoing challenges with recent updates.

#### ✅ Merged PRs
- [#123351](https://github.com/openclaw/openclaw/pull/123351) feat(ui): add Discord invitation to the web UI
- [#136760](https://github.com/openclaw/openclaw/pull/136760) fix(ui): keep session header visible during Gateway reconnects
- [#135531](https://github.com/openclaw/openclaw/pull/135531) fix(agents): show model reroutes in subagent completions
- [#136762](https://github.com/openclaw/openclaw/pull/136762) fix: prevent Activity refresh storms from stalling replies
- [#133449](https://github.com/openclaw/openclaw/pull/133449) fix(test): preserve boolean options in focused test runs
- [#136711](https://github.com/openclaw/openclaw/pull/136711) fix(ui): align board menu labels and sizing
- [#136758](https://github.com/openclaw/openclaw/pull/136758) fix(codex): stop post-tool summaries switching accounts and models
- [#136723](https://github.com/openclaw/openclaw/pull/136723) refactor(cron): catch evaluator cache regressions
- [#136759](https://github.com/openclaw/openclaw/pull/136759) perf: speed up plugin package ownership checks
- [#136737](https://github.com/openclaw/openclaw/pull/136737) fix: env-backed channel probes fail builds with incomplete module metadata
- [#136738](https://github.com/openclaw/openclaw/pull/136738) fix(gateway): apply runtime settings without restarting
- [#134826](https://github.com/openclaw/openclaw/pull/134826) fix(telegram): prioritize finals over CLI commentary
- [#136752](https://github.com/openclaw/openclaw/pull/136752) refactor(media): release and join blocked playback fixtures
- [#136756](https://github.com/openclaw/openclaw/pull/136756) fix: preserve reply code and enabled sibling channels
- [#136746](https://github.com/openclaw/openclaw/pull/136746) fix(skills): avoid worker compilation in focused command tests
- [#136743](https://github.com/openclaw/openclaw/pull/136743) refactor(usage): consolidate watcher lifecycle coverage
- [#136694](https://github.com/openclaw/openclaw/pull/136694) fix(ui): reduce blank time on initial page load
- [#135780](https://github.com/openclaw/openclaw/pull/135780) refactor(scripts): share response reader cancellation
- [#136735](https://github.com/openclaw/openclaw/pull/136735) fix(cli): keep node identity inspection from creating SQLite
- [#136730](https://github.com/openclaw/openclaw/pull/136730) fix: heartbeat failure notices omit why the check was refused
- [#135714](https://github.com/openclaw/openclaw/pull/135714) refactor(signal): share delivered conversation key
- [#136706](https://github.com/openclaw/openclaw/pull/136706) feat(slack): native Stop button, session status, and synced titles for Slack agent sessions
- [#136731](https://github.com/openclaw/openclaw/pull/136731) fix(docs-ci): docs config-examples check crashes on a newer local state database
- [#136728](https://github.com/openclaw/openclaw/pull/136728) ci: give Control UI shards more runner capacity
- [#136720](https://github.com/openclaw/openclaw/pull/136720) fix: CLI history returns newest messages for missing anchors
- [#135646](https://github.com/openclaw/openclaw/pull/135646) refactor(daemon): simplify platform path selection
- [#136655](https://github.com/openclaw/openclaw/pull/136655) fix(codex): avoid stale ancestor binaries during managed startup
- [#136579](https://github.com/openclaw/openclaw/pull/136579) docs: add v2026.9.1 release notes
- [#136609](https://github.com/openclaw/openclaw/pull/136609) fix(ui): align model provider refresh status
- [#136350](https://github.com/openclaw/openclaw/pull/136350) perf: speed up fence-aware message chunking
- [#136084](https://github.com/openclaw/openclaw/pull/136084) fix(cloud): keep source packaging and worker teardown reliable
- [#136458](https://github.com/openclaw/openclaw/pull/136458) fix(plugins): resolve packaged setup and TSX build artifacts
- [#136675](https://github.com/openclaw/openclaw/pull/136675) test(infra): use runtime stop handles in delivery tests
- [#136717](https://github.com/openclaw/openclaw/pull/136717) fix(sessions): correct worktree restore capacity advice
- [#136716](https://github.com/openclaw/openclaw/pull/136716) fix(skills): avoid eager discovery for ordinary replies
- [#136705](https://github.com/openclaw/openclaw/pull/136705) fix(gateway): keep Codex streams connected under load
- [#136572](https://github.com/openclaw/openclaw/pull/136572) perf(macos): reduce idle menu-bar CPU use
- [#136230](https://github.com/openclaw/openclaw/pull/136230) fix(ui): open native CLIs from Codex and Claude catalog +
- [#131735](https://github.com/openclaw/openclaw/pull/131735) fix(agents): catch background subagent completion rejections
- [#136574](https://github.com/openclaw/openclaw/pull/136574) fix(cli): emit snapshots for approval allowlist JSON no-ops
- [#135945](https://github.com/openclaw/openclaw/pull/135945) fix(agents): keep fenced code byte-for-byte through duplicate-block collapse
- [#136567](https://github.com/openclaw/openclaw/pull/136567) fix: release retired session metadata after short listings
- [#136678](https://github.com/openclaw/openclaw/pull/136678) fix(release): forward-port remaining 2026.9.1 harness repairs
- [#136550](https://github.com/openclaw/openclaw/pull/136550) fix(android): preserve settings conversation position
- [#136423](https://github.com/openclaw/openclaw/pull/136423) fix: deliver subagent completions after busy parent turns
- [#136463](https://github.com/openclaw/openclaw/pull/136463) fix(doctor): report unowned routes and repair account bindings
- [#136704](https://github.com/openclaw/openclaw/pull/136704) docs(slack): Agent View troubleshooting wrongly says a storage warning turns Agent View off
- [#136578](https://github.com/openclaw/openclaw/pull/136578) fix: unblock Windows Doctor and retained workspace recovery
- [#135859](https://github.com/openclaw/openclaw/pull/135859) refactor(scripts): share report CLI parse options
- [#136621](https://github.com/openclaw/openclaw/pull/136621) fix(release): unblock frozen candidate qualification
- [#136587](https://github.com/openclaw/openclaw/pull/136587) Let scheduled work use the agent's current tools
- [#135923](https://github.com/openclaw/openclaw/pull/135923) feat(android): let chat composer grow to 6 visible lines
- [#136695](https://github.com/openclaw/openclaw/pull/136695) test(doctor): use canonical contribution factory in tests
- [#136698](https://github.com/openclaw/openclaw/pull/136698) chore(compat): renew plugin-sdk subpath removal-pending records to 2026-10-01
- [#136295](https://github.com/openclaw/openclaw/pull/136295) ci: reduce sharding for seven-minute target
- [#136659](https://github.com/openclaw/openclaw/pull/136659) chore(ui): refresh control ui locales
- [#136667](https://github.com/openclaw/openclaw/pull/136667) refactor(test): centralize forwarded signal state
- [#136700](https://github.com/openclaw/openclaw/pull/136700) fix(deps): clear fast-uri and nodemailer release gate advisories
- [#133381](https://github.com/openclaw/openclaw/pull/133381) fix(gateway): distinguish socat forwards that name OpenClaw
- [#136519](https://github.com/openclaw/openclaw/pull/136519) fix(macos): notify when background sessions finish
- [#136688](https://github.com/openclaw/openclaw/pull/136688) test(logging): exercise real diagnostic progress events
- [#136683](https://github.com/openclaw/openclaw/pull/136683) fix(macos): deliver completion before notification status arrives
- [#136670](https://github.com/openclaw/openclaw/pull/136670) refactor(discord): inline message abort checks
- [#136685](https://github.com/openclaw/openclaw/pull/136685) fix(media): report fractional storage limits accurately
- [#136517](https://github.com/openclaw/openclaw/pull/136517) fix(plugins): refresh persisted registry when source mounts change
- [#135722](https://github.com/openclaw/openclaw/pull/135722) fix(ui): keep Inbox out of Settings
- [#136643](https://github.com/openclaw/openclaw/pull/136643) fix(android): keep refresh results and progress current
- [#135802](https://github.com/openclaw/openclaw/pull/135802) refactor(scripts): share bounded output tail
- [#136495](https://github.com/openclaw/openclaw/pull/136495) fix(skills): preserve canonical names through discovery and workshop
- [#136644](https://github.com/openclaw/openclaw/pull/136644) fix(agents): preserve CLI continuity for queued cold turns
- [#136681](https://github.com/openclaw/openclaw/pull/136681) fix(release): run dependency evidence from trusted tooling
- [#136650](https://github.com/openclaw/openclaw/pull/136650) feat(ui): skeletonize sharing member loading
- [#136649](https://github.com/openclaw/openclaw/pull/136649) feat(ui): standardize visibility menu options
- [#136648](https://github.com/openclaw/openclaw/pull/136648) feat(ui): embed visibility in face switch
- [#136647](https://github.com/openclaw/openclaw/pull/136647) feat(ui): add icons to chat face switch
- [#136646](https://github.com/openclaw/openclaw/pull/136646) fix(ui): center chat face switch
- [#136676](https://github.com/openclaw/openclaw/pull/136676) fix(gateway): avoid loading session storage during method discovery
- [#136672](https://github.com/openclaw/openclaw/pull/136672) docs(slack): explain Agent View DM sessions and how OpenClaw detects them
- [#136605](https://github.com/openclaw/openclaw/pull/136605) docs(plugins): align npm-first install guidance
- [#135219](https://github.com/openclaw/openclaw/pull/135219) fix(browser): separate tab enumeration budget from CDP handshake timeout
- [#129918](https://github.com/openclaw/openclaw/pull/129918) fix(config): make deeply nested CLI mutations stack-safe
- [#133151](https://github.com/openclaw/openclaw/pull/133151) fix(tui): route picker cancellation through shared input
- [#134413](https://github.com/openclaw/openclaw/pull/134413) fix(ui): show Default permission icon in the macOS composer
- [#136666](https://github.com/openclaw/openclaw/pull/136666) fix(backup): retain the active config through volatile filtering
- [#136038](https://github.com/openclaw/openclaw/pull/136038) test(parallel): remove private helper test facade
- [#136037](https://github.com/openclaw/openclaw/pull/136037) test(ai): remove bespoke package dependency scanner
- [#134368](https://github.com/openclaw/openclaw/pull/134368) fix(cron): stop suggesting account identities as recipients
- [#134603](https://github.com/openclaw/openclaw/pull/134603) fix(a2a): reject oversized JSON-RPC batches and responses
- [#133660](https://github.com/openclaw/openclaw/pull/133660) fix(agents): align Swarm completion guidance with delivery
- [#136658](https://github.com/openclaw/openclaw/pull/136658) refactor: test compile-cache startup through production entry points
- [#136668](https://github.com/openclaw/openclaw/pull/136668) fix: show profile picture for Me assignee
- [#136524](https://github.com/openclaw/openclaw/pull/136524) fix(agents): stop reporting unsent subagent completions as delivered
- [#136664](https://github.com/openclaw/openclaw/pull/136664) fix(sessions): unify target errors and reject blank agent selectors
- [#136606](https://github.com/openclaw/openclaw/pull/136606) fix(ui): keep question sessions to one line
- [#136657](https://github.com/openclaw/openclaw/pull/136657) fix: embedded session recall returns newest history for search hits
- [#135744](https://github.com/openclaw/openclaw/pull/135744) refactor(feishu): share provider prefix stripping
- [#136178](https://github.com/openclaw/openclaw/pull/136178) fix(signal): publish terminal status on permanent SSE rejection
- [#136627](https://github.com/openclaw/openclaw/pull/136627) fix(release): run frozen Docker lane contracts
- [#136654](https://github.com/openclaw/openclaw/pull/136654) improve: skip unused diagnostics during node selection
- [#134622](https://github.com/openclaw/openclaw/pull/134622) fix(proxy): isolate webhook rate limits by client
- [#136440](https://github.com/openclaw/openclaw/pull/136440) fix(ui): keep sent image bubbles stable on hover
- [#136641](https://github.com/openclaw/openclaw/pull/136641) fix(gateway): avoid false RSS critical alerts on small hosts
- [#136619](https://github.com/openclaw/openclaw/pull/136619) fix: Workboard task links recover after cursor rejection
- [#136325](https://github.com/openclaw/openclaw/pull/136325) fix(ci): run remaining trusted installs from tooling checkout
- [#136636](https://github.com/openclaw/openclaw/pull/136636) fix(nodes): preserve ambiguity between current node clients
- [#136633](https://github.com/openclaw/openclaw/pull/136633) fix(cli): preserve profile context in device approval hints
- [#136176](https://github.com/openclaw/openclaw/pull/136176) refactor(scripts): reuse startup trace duration predicate
- [#136626](https://github.com/openclaw/openclaw/pull/136626) refactor(terminal): reduce temporary memory for styled text
- [#136637](https://github.com/openclaw/openclaw/pull/136637) fix(ui): make board Remove action match its menu
- [#136557](https://github.com/openclaw/openclaw/pull/136557) fix(cli): complete Bash option values without duplicate prefixes
- [#136520](https://github.com/openclaw/openclaw/pull/136520) test(config): move schema hint test data out of production
- [#132266](https://github.com/openclaw/openclaw/pull/132266) fix: preserve hidden tool progress metadata through cloning
- [#136509](https://github.com/openclaw/openclaw/pull/136509) fix: doctor cannot load Teams state checker after a source build
- [#136600](https://github.com/openclaw/openclaw/pull/136600) fix(skills): correct read-only diagnosis and channel setup
- [#136599](https://github.com/openclaw/openclaw/pull/136599) fix(health): report active probes when the preferred account is unconfigured
- [#136596](https://github.com/openclaw/openclaw/pull/136596) fix(plugins): preserve inspection diagnostics and configured policy
- [#136286](https://github.com/openclaw/openclaw/pull/136286) fix(test): wait for complete CLI output before returning
- [#136564](https://github.com/openclaw/openclaw/pull/136564) fix(cli): run message plugin cleanup before exiting
- [#136505](https://github.com/openclaw/openclaw/pull/136505) docs: clarify OAuth token storage in container state
- [#126419](https://github.com/openclaw/openclaw/pull/126419) docs(gateway): document incognito session authorization for compatibility endpoints
- [#136504](https://github.com/openclaw/openclaw/pull/136504) fix(sms): reject excess concurrent webhook reads
- [#136483](https://github.com/openclaw/openclaw/pull/136483) test(auto-reply): remove redundant UTC timezone setup
- [#136614](https://github.com/openclaw/openclaw/pull/136614) fix(ui): remove group menu ellipses
- [#136620](https://github.com/openclaw/openclaw/pull/136620) fix(discord): missing response IDs falsely confirm delivery
- [#136628](https://github.com/openclaw/openclaw/pull/136628) fix(release): keep frozen plugin uninstall contract
- [#136537](https://github.com/openclaw/openclaw/pull/136537) fix(agents): prefer configured identity in CLI summaries
- [#136531](https://github.com/openclaw/openclaw/pull/136531) fix(oc-path): emit patches that preserve exact edit bytes
- [#136624](https://github.com/openclaw/openclaw/pull/136624) fix(release): use frozen package acceptance baseline
- [#136597](https://github.com/openclaw/openclaw/pull/136597) refactor(ui): keep images stable with less media rendering work
- [#136607](https://github.com/openclaw/openclaw/pull/136607) fix(ui): remove unwanted fade above task progress card
- [#136616](https://github.com/openclaw/openclaw/pull/136616) refactor(infra): retire session cost refresh test hooks
- [#136430](https://github.com/openclaw/openclaw/pull/136430) refactor(agents): test auth pins through embedded preparation
- [#136602](https://github.com/openclaw/openclaw/pull/136602) fix(ui): style notification preference controls
- [#136521](https://github.com/openclaw/openclaw/pull/136521) feat: show model sign-in method and account email
- [#136604](https://github.com/openclaw/openclaw/pull/136604) fix(gateway): correctly classify same-install CLI nodes
- [#136615](https://github.com/openclaw/openclaw/pull/136615) fix(skills): remove obsolete session-logs guidance
- [#136603](https://github.com/openclaw/openclaw/pull/136603) fix(ui): keep format-constrained settings editable in Form mode
- [#136569](https://github.com/openclaw/openclaw/pull/136569) fix(ui): clear equivalent Usage filters from their menus
- [#136465](https://github.com/openclaw/openclaw/pull/136465) fix(browser): isolate native action cancellation by page
- [#136532](https://github.com/openclaw/openclaw/pull/136532) test(cli): exercise the real config snapshot cache
- [#136542](https://github.com/openclaw/openclaw/pull/136542) improve(ui): expand session participant links
- [#136590](https://github.com/openclaw/openclaw/pull/136590) test(gateway): restore abort fixture env when cleanup fails
- [#136601](https://github.com/openclaw/openclaw/pull/136601) test(prompt-snapshots): generate Codex happy-path snapshots under a hermetic state dir
- [#136571](https://github.com/openclaw/openclaw/pull/136571) test(e2e): assert native Gateway client deadline budgets
- [#136566](https://github.com/openclaw/openclaw/pull/136566) fix(slack): replies to existing threads fail to send
- [#135410](https://github.com/openclaw/openclaw/pull/135410) fix(install): preserve portable Node extraction fallback
- [#136559](https://github.com/openclaw/openclaw/pull/136559) fix(slack): Agent View DMs lose their per-root sessions after a Gateway restart in HTTP mode
- [#136373](https://github.com/openclaw/openclaw/pull/136373) fix(plugins): reject ambiguous copied plugin paths
- [#133445](https://github.com/openclaw/openclaw/pull/133445) fix(line): distinguish monthly quota exhaustion from transient limits
- [#135588](https://github.com/openclaw/openclaw/pull/135588) fix(opencode-go): send OpenClaw User-Agent on native OpenCode Go routes
- [#136094](https://github.com/openclaw/openclaw/pull/136094) refactor(agents): use canonical subagent session rows
- [#136527](https://github.com/openclaw/openclaw/pull/136527) fix(ui): clarify session PR hover state
- [#136577](https://github.com/openclaw/openclaw/pull/136577) fix(ci): run the base-ref private-key scanner before package installs
- [#136366](https://github.com/openclaw/openclaw/pull/136366) feat(mobile): add dedicated version contract
- [#136580](https://github.com/openclaw/openclaw/pull/136580) refactor(routing): remove unused unknown-DM route wrapper
- [#136469](https://github.com/openclaw/openclaw/pull/136469) fix(tui): preserve authored hyperlink destinations
- [#136439](https://github.com/openclaw/openclaw/pull/136439) fix(ui): retain speaker names in conversation exports
- [#136220](https://github.com/openclaw/openclaw/pull/136220) fix(control-ui): show Gateway suspension in account footers
- [#136399](https://github.com/openclaw/openclaw/pull/136399) fix(plugins): speed up cold Doctor in built checkouts
- [#136478](https://github.com/openclaw/openclaw/pull/136478) test(e2e): report the inspect command outcome when the built-CLI proof fails
- [#136352](https://github.com/openclaw/openclaw/pull/136352) fix(android): mask credentials and correct secret input behavior

#### 🐛 New Issues
- [#135835](https://github.com/openclaw/openclaw/issues/135835) [Bug]: API key 耗尽充值后无法恢复 `bug` `no-stale` `bug:behavior` `P1` 💬8
- [#136262](https://github.com/openclaw/openclaw/issues/136262) openai-completions stream: occasional bare text_delta replaying the full accumulated text doubles message content (n → 2n → n oscillation) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬5
- [#135743](https://github.com/openclaw/openclaw/issues/135743) [Bug]: Startup blocks the event loop after `http server listening` — listAgentEntries() re-run per agent per model ref `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#136203](https://github.com/openclaw/openclaw/issues/136203) [Bug]: Windows de-DE 2026.8.2 upgrade leaves Doctor maintenance blocked and legacy workspace state behind `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬4
- [#136123](https://github.com/openclaw/openclaw/issues/136123) Windows (pt-BR): doctor --fix permanently blocked — schtasks runtime status parsing breaks on non-English locale, worse under UAC elevation `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬4
- [#136183](https://github.com/openclaw/openclaw/issues/136183) [Bug]: Command executor hangs when spawning ssh — SIGTERM while waiting for server banner (regression in 2026.8.1, persists in 2026.8.2) `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬4
- [#136200](https://github.com/openclaw/openclaw/issues/136200) [Bug]: Feishu quoted merged-forward messages expose only placeholder text `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬4
- [#136710](https://github.com/openclaw/openclaw/issues/136710) plugins.entries.*.enabled: schema says "restart required" but config.schema.lookup reports reloadKind=hot (2026.8.2) `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#136645](https://github.com/openclaw/openclaw/issues/136645) EXEC_NO_OUTPUT_PLACEHOLDER can never trigger for any non-zero exit — exit-code suffix is concatenated before the empty-output check `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#136525](https://github.com/openclaw/openclaw/issues/136525) [Bug]: current-session cron completions drop MEDIA attachments from Control UI transcript `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#135882](https://github.com/openclaw/openclaw/issues/135882) outbound sanitizer: duplicate-block collapse de-indents and deletes lines inside fenced code in delivered replies `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#136452](https://github.com/openclaw/openclaw/issues/136452) compaction.maxActiveTranscriptBytes is silently unenforced for heartbeat-driven sessions (unbounded transcript growth -> V8 OOM) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬3
- [#136547](https://github.com/openclaw/openclaw/issues/136547) [Bug]: macOS computer-control cursor remains visible after task completion `P3` `impact:ux-friction` 💬3
- [#135860](https://github.com/openclaw/openclaw/issues/135860) [Bug]: Remote iMessage attachments can be dropped before agent execution `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#136284](https://github.com/openclaw/openclaw/issues/136284) [Bug]: legacy .tmp-<uuid> memory-core shadow reindex files leak forever, invisible to the age-gated cleanup sweep `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#136148](https://github.com/openclaw/openclaw/issues/136148) [Bug]: Linux desktop app (2026.8.2 AppImage) — WebKitWebProcess crashes with SIGABRT, leaves blank window `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-info` 💬3
- [#136311](https://github.com/openclaw/openclaw/issues/136311) memory-core: Gateway reacquires reindex lock on every start, making the index unrepairable; 19 GB of orphaned memory-reindex-* temp DBs accumulate `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#136769](https://github.com/openclaw/openclaw/issues/136769) [Bug]: browser navigate intermittently times out at 20s on a healthy CDP target while snapshot/evaluate on the same target succeed `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#136724](https://github.com/openclaw/openclaw/issues/136724) [Bug]: Codex post-tool summaries can switch the selected account or model `maintainer` `P1` `clawsweeper:source-repro` `impact:auth-provider` 💬2
- [#136734](https://github.com/openclaw/openclaw/issues/136734) [Bug]: Secret egress proxy does not substitute store-secret sentinels in HTTPS request headers from exec (2026.8.2) 💬2
- [#136732](https://github.com/openclaw/openclaw/issues/136732) [Bug]: node identity inspection creates shared SQLite state `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#136708](https://github.com/openclaw/openclaw/issues/136708) tests: synchronize subprocess fixtures before deadline assertions `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#136671](https://github.com/openclaw/openclaw/issues/136671) [Bug]: CLI-imported history returns newest messages for missing anchors `maintainer` 💬2
- [#136653](https://github.com/openclaw/openclaw/issues/136653) Google Chat automatic replies can discard the typing thread `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#136576](https://github.com/openclaw/openclaw/issues/136576) [Bug]: macOS app advertises retired Tailscale /ui/ dashboard path `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#136059](https://github.com/openclaw/openclaw/issues/136059) Plugin-registered memory corpus supplements dropped in agent-scope tool execution (memory_search corpus=X -> "not-registered" while the same plugin's tools work) `P2` `impact:session-state` 💬2
- [#136638](https://github.com/openclaw/openclaw/issues/136638) Android settings refreshes can overwrite newer results and progress `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#136551](https://github.com/openclaw/openclaw/issues/136551) Control UI browser panel: "Screenshot fetch failed (401)" with gateway.auth.mode token `P2` `impact:auth-provider` `impact:ux-friction` 💬2
- [#136663](https://github.com/openclaw/openclaw/issues/136663) Blank sessions tail agent selectors silently choose a session owner `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#136656](https://github.com/openclaw/openclaw/issues/136656) [Bug]: embedded session recall ignores search-hit anchors `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#136515](https://github.com/openclaw/openclaw/issues/136515) fix: mounted bundled plugin source is replaced by packaged runtime and setup `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#136499](https://github.com/openclaw/openclaw/issues/136499) fix: doctor cannot load the Teams checker after a clean source build `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬2
- [#136630](https://github.com/openclaw/openclaw/issues/136630) Environment-substituted remote CDP profile is omitted from browser registry `P2` 💬2
- [#136593](https://github.com/openclaw/openclaw/issues/136593) [Bug]: same-install CLI nodes are not marked Gateway-local `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#136560](https://github.com/openclaw/openclaw/issues/136560) Codex terminal policy refusals are silently dropped on WhatsApp `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#136562](https://github.com/openclaw/openclaw/issues/136562) [Bug]: macOS menu bar keeps polling Devices and Automations after closing `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#136068](https://github.com/openclaw/openclaw/issues/136068) [Bug]: Native catalog + creates an unrunnable model chat instead of a CLI terminal `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#136357](https://github.com/openclaw/openclaw/issues/136357) [Bug]: copied state keeps managed plugin paths pointing to source after registry refresh `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#136385](https://github.com/openclaw/openclaw/issues/136385) Built Doctor needlessly transforms checkout plugins with compiled artifacts available `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#136047](https://github.com/openclaw/openclaw/issues/136047) Android Refresh chat can lose its forced health check to outbox reconciliation `maintainer` `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#135821](https://github.com/openclaw/openclaw/issues/135821) [Bug]: Control UI hides GPT-5.6 Sol xhigh/max/ultra when Codex is a fallback `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#136210](https://github.com/openclaw/openclaw/issues/136210) Browser: intermittent selected-mode target closure during first navigation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#136512](https://github.com/openclaw/openclaw/issues/136512) iOS native Talk Mode: directive line read aloud, duplicate reply bubbles, voice stuck until app relaunch `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#136492](https://github.com/openclaw/openclaw/issues/136492) [Bug]: 2026.8.2 fresh onboarding verifies OpenAI but leaves required Codex plugin uninstalled, blocking Gateway readiness `bug` `bug:behavior` `P0` `maturity:stable` 💬2
- [#136355](https://github.com/openclaw/openclaw/issues/136355) [Feature]: Let the macOS app open Control UI with a durable user identity `P3` 💬2
- [#136447](https://github.com/openclaw/openclaw/issues/136447) Bug: 2026.8.2 restricted cron turns reject legacy Codex managed policy without migration warning `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#136135](https://github.com/openclaw/openclaw/issues/136135) iOS chat.send fails with "session routing changed" on multi-agent gateway with explicit ownership `P1` `impact:session-state` `maturity:stable` 💬2
- [#136157](https://github.com/openclaw/openclaw/issues/136157) macOS browser sidebar cannot expand much beyond half the default window `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#136360](https://github.com/openclaw/openclaw/issues/136360) [Bug]: Internal runtime-context carrier (<<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>>) leaks as standalone visible turns on Microsoft Teams channel `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#136338](https://github.com/openclaw/openclaw/issues/136338) [Bug]: every SQLite session-entry patch decodes the session row four times, ~11 patches per turn cost a third of gateway throughput vs 2026.7.1-2 `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#136346](https://github.com/openclaw/openclaw/issues/136346) [Feature]: Required session authority boundary for durable ingress and protected actions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#136198](https://github.com/openclaw/openclaw/issues/136198) [Bug]: Strict transcript appends reject omitted optional storePath `bug` 💬2
- [#136326](https://github.com/openclaw/openclaw/issues/136326) [Bug]: backup fails for Nix-managed absolute config symlink `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135905](https://github.com/openclaw/openclaw/issues/135905) Session maintenance full-store scans on entry writes add ~4s to tested channel ingress; tested web UI ingress did not show the burst `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#136765](https://github.com/openclaw/openclaw/issues/136765) Bug: GitHub previews stay unavailable after dismissing a loading card `bug` `maintainer` 💬1
- [#136766](https://github.com/openclaw/openclaw/issues/136766) Model-fetch requests can block the Gateway event loop for 15+ minutes `bug` `regression` 💬1
- [#136757](https://github.com/openclaw/openclaw/issues/136757) 2026.8.2 regression: openai-compatible memory embed adapter sends all chunks in one request; split-on-error retry does not catch provider batch-size 400 `P2` `impact:session-state` 💬1
- [#136739](https://github.com/openclaw/openclaw/issues/136739) Codex context-engine bootstrap projection can bury the current request in historical tool payloads `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136733](https://github.com/openclaw/openclaw/issues/136733) USER.md bootstrap injection capped at 4,000 chars in 2026.8.2; bootstrapMaxChars cannot raise it `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136456](https://github.com/openclaw/openclaw/issues/136456) Bug: packaged setup-api artifacts disappear from plugin setup discovery `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#136455](https://github.com/openclaw/openclaw/issues/136455) Bug: standalone plugin builder silently skips TSX entries `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#136573](https://github.com/openclaw/openclaw/issues/136573) approvals: JSON no-op allowlist commands return empty stdout `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#136714](https://github.com/openclaw/openclaw/issues/136714) [Bug]: 2026.8.2 — every Codex sub-agent spawned via sessions_spawn is policy-restricted (loses native shell/read/apply_patch) because the built-in sub-agent deny list is outside the Codex safe-deny set `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136712](https://github.com/openclaw/openclaw/issues/136712) Add element-level feedback to shared Canvas HTML `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#136709](https://github.com/openclaw/openclaw/issues/136709) Channel auto-restart chain stays bound to a retired plugin registry generation after a plugins.* hot reload (2026.8.2) 💬1
- [#136707](https://github.com/openclaw/openclaw/issues/136707) [Bug]: Control UI media display 401s for Tailscale-Serve operator sessions under token auth: hello carries no deviceToken `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#136516](https://github.com/openclaw/openclaw/issues/136516) fix: restarting after a bundled source mount reuses the old packaged registry `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#136493](https://github.com/openclaw/openclaw/issues/136493) Skill lookup can select an earlier alias instead of the exact requested name `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#136617](https://github.com/openclaw/openclaw/issues/136617) Apple Watch: persist companion chat admission and reply receipts across app restarts `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#136686](https://github.com/openclaw/openclaw/issues/136686) [Feature]: Support identity-aware proxy sign-in across official Gateway clients `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136696](https://github.com/openclaw/openclaw/issues/136696) [Bug]: Failed relocating the shared auth store - persists even with doctor --fix `bug` `regression` `P2` `impact:auth-provider` 💬1
- [#136665](https://github.com/openclaw/openclaw/issues/136665) Verified backups can omit the active config under volatile paths `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#136684](https://github.com/openclaw/openclaw/issues/136684) [Bug]: followup queue drain reschedules itself on GatewayDrainingError, prolonging restart shutdown (563 retries / 4m46s observed) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#136674](https://github.com/openclaw/openclaw/issues/136674) Telegram: Handle edited messages to re-trigger conversation (like the Discord ask in #38505) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136662](https://github.com/openclaw/openclaw/issues/136662) Session target failures bypass the standard CLI JSON error envelope `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#136652](https://github.com/openclaw/openclaw/issues/136652) [Bug]: Icon cosmetics is wrong `bug` `bug:behavior` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#136640](https://github.com/openclaw/openclaw/issues/136640) Gateway RSS diagnostics report false critical pressure on small hosts `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#136635](https://github.com/openclaw/openclaw/issues/136635) Node names silently choose one current client instead of reporting ambiguity `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#136622](https://github.com/openclaw/openclaw/issues/136622) grep JSON intake can OOM on one oversized match or context record `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#136575](https://github.com/openclaw/openclaw/issues/136575) status --deep can repeatedly request pairing for a shared macOS CLI probe identity `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136632](https://github.com/openclaw/openclaw/issues/136632) Device approval preview loses active profile in copied command `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#136556](https://github.com/openclaw/openclaw/issues/136556) Bash completion loses choices or duplicates option prefixes after equals `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#136591](https://github.com/openclaw/openclaw/issues/136591) [Docs Bug]: Custodian diagnosis can mutate state and channel examples fail `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#136598](https://github.com/openclaw/openclaw/issues/136598) health: an unconfigured preferred account hides active probe results `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#136595](https://github.com/openclaw/openclaw/issues/136595) plugins: inspection loses policy for mixed-case declared IDs `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#136594](https://github.com/openclaw/openclaw/issues/136594) plugins: inspection silently omits partial-inventory diagnostics `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#136563](https://github.com/openclaw/openclaw/issues/136563) Local message commands skip registered plugin shutdown hooks `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#136642](https://github.com/openclaw/openclaw/issues/136642) [Feature]: First-party remote secure intake without VPN software `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136536](https://github.com/openclaw/openclaw/issues/136536) agents: list displays old workspace identity after set-identity succeeds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#136530](https://github.com/openclaw/openclaw/issues/136530) path: dry-run diff emits malformed unified patches `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#136631](https://github.com/openclaw/openclaw/issues/136631) Clean source CLI commands can rebuild dist from config mtimes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#136568](https://github.com/openclaw/openclaw/issues/136568) Usage checkbox menus leave equivalent typed filters stuck on `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#136464](https://github.com/openclaw/openclaw/issues/136464) Bug: browser action cancellation leaks across tabs and pending native work `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#136611](https://github.com/openclaw/openclaw/issues/136611) [Bug]: Model picker accepts placement-incompatible runtime for active node session `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#136613](https://github.com/openclaw/openclaw/issues/136613) Model failover: try the fallback once when the primary fails with a terminal (non-auth/billing/context) error before surfacing "request failed" `P1` `impact:message-loss` `impact:auth-provider` 💬1
- [#136592](https://github.com/openclaw/openclaw/issues/136592) System expert has no model fallback when its auth profile is temporarily unavailable `P1` `impact:auth-provider` 💬1
- [#136468](https://github.com/openclaw/openclaw/issues/136468) Bug: TUI URL-shaped link labels override their authored destinations `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#136437](https://github.com/openclaw/openclaw/issues/136437) Chat Markdown exports discard participant names `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#136584](https://github.com/openclaw/openclaw/issues/136584) [Feature]: Codex remote-exec cloud sessions should use the shared GitHub identity like OpenClaw workers `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#136538](https://github.com/openclaw/openclaw/issues/136538) channels: stalled capability callbacks exit the CLI before reporting timeout `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#136565](https://github.com/openclaw/openclaw/issues/136565) macOS microphone and speech-recognition activity persists while voice features are disabled `P2` `impact:security` 💬1
- [#136548](https://github.com/openclaw/openclaw/issues/136548) [Bug]: Doctor re-relocates completed main auth overlay; rowsMatch includes updated_at `P1` `impact:auth-provider` `maturity:stable` 💬1
- [#136441](https://github.com/openclaw/openclaw/issues/136441) Hidden session pane consumes Escape before the visible CI popover `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#136552](https://github.com/openclaw/openclaw/issues/136552) [Bug]: Isolated test state databases leak lifecycle locks into shared /tmp `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#136558](https://github.com/openclaw/openclaw/issues/136558) [Feature]: Pin agents and Agent sessions on the side bar. `enhancement` `P3` 💬1
- [#136555](https://github.com/openclaw/openclaw/issues/136555) [Feature]: Agent Icon in chat. `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#136443](https://github.com/openclaw/openclaw/issues/136443) Contained Control UI symlinks lose MIME or index preparation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#136442](https://github.com/openclaw/openclaw/issues/136442) Encoded Control UI asset names return 404 or the wrong file `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#136544](https://github.com/openclaw/openclaw/issues/136544) [Bug]: Devices page labels Apple Silicon app as MacIntel `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#136397](https://github.com/openclaw/openclaw/issues/136397) Chunked media downloads misreport decimal MiB size limits `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#136513](https://github.com/openclaw/openclaw/issues/136513) Subagent completion replay credits an in-flight handoff as delivered before terminal evidence `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#136489](https://github.com/openclaw/openclaw/issues/136489) [Bug]: Doctor reportedly repeats model configuration warnings many times in one invocation `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#136490](https://github.com/openclaw/openclaw/issues/136490) [Bug]: Native Claude CLI auth status is reportedly indeterminate while a direct prompt succeeds `impact:auth-provider` 💬1
- [#136488](https://github.com/openclaw/openclaw/issues/136488) [Bug]: Reported stale bootstrap content and sibling-file loss after symlink migration `P2` `impact:session-state` `impact:data-loss` 💬1
- [#136487](https://github.com/openclaw/openclaw/issues/136487) [Bug]: Requester settle-wake reports missing Gateway binding on 2026.8.1 `P1` `clawsweeper:needs-info` `impact:session-state` `impact:message-loss` 💬1
- [#136491](https://github.com/openclaw/openclaw/issues/136491) [Bug]: Verify health and operator visibility when legacy workspace state blocks a running ingress lane `P1` `impact:message-loss` 💬1
- [#136485](https://github.com/openclaw/openclaw/issues/136485) agents.files.* cannot read/write symlinked workspace files — agent identity save fails with `unsafe workspace file "IDENTITY.md"` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#136386](https://github.com/openclaw/openclaw/issues/136386) [Bug]: Isolated cron agentTurn exec denied — allowlist miss persists despite confirmed allowlist entries, and no CLI path administers the consulted agent bucket `P1` `impact:security` 💬1
- [#136471](https://github.com/openclaw/openclaw/issues/136471) Internal runtime context block leaking raw into visible Telegram messages; per-turn session IDs instead of persistent session `P1` `impact:session-state` `impact:security` `impact:ux-friction` 💬1
- [#136477](https://github.com/openclaw/openclaw/issues/136477) [Bug]: 2026.8.2 leaves orphaned active turn claims; Discord DM sessions cannot be reset or deleted `bug` `P1` `impact:session-state` `impact:message-loss` 💬1
- [#136480](https://github.com/openclaw/openclaw/issues/136480) [Feature]: Control UI: built-in agent presence layer (ambient animated avatar + activity-state effects) `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#136472](https://github.com/openclaw/openclaw/issues/136472) [Feature]: Enable Swarm by default with explicit opt-out `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#136467](https://github.com/openclaw/openclaw/issues/136467) Control UI: independent chats shown as nested 'child' sessions via creation-lineage parentSessionKey; no way to detach/flatten `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136415](https://github.com/openclaw/openclaw/issues/136415) Valid APNG icons return 404 instead of rendering in the Control UI `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#135937](https://github.com/openclaw/openclaw/issues/135937) [Bug]: secrets configure/apply cannot migrate the shared authProfiles store — audit --check never reaches clean on multi-agent gateways `P1` `impact:security` `impact:auth-provider` 💬1
- [#136453](https://github.com/openclaw/openclaw/issues/136453) gateway restart can leave the gateway stopped: launchctl bootstrap intermittently fails with I/O error and is not retried `P1` `impact:crash-loop` `maturity:stable` 💬1
- [#135779](https://github.com/openclaw/openclaw/issues/135779) Harden macOS health diagnostics `P2` `impact:security` 💬1
- [#136449](https://github.com/openclaw/openclaw/issues/136449) [Bug]: Incompatible Agent Sandbox backend is advertised as a cloud-worker profile `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136427](https://github.com/openclaw/openclaw/issues/136427) [Bug]: Windows Desktop UI clips config panels and chat bubbles at high display scaling `bug` `bug:behavior` `P2` 💬1
- [#136421](https://github.com/openclaw/openclaw/issues/136421) [Bug]: Unicode placeholder in MCP server env crashes gateway at HTTP-call time `P3` `clawsweeper:no-new-fix-pr` `issue-rating: 🦪 silver shellfish` `clawsweeper:bulk-filed` 💬1
- [#136431](https://github.com/openclaw/openclaw/issues/136431) [Feature]: per-trigger overall turn timeout (agents.defaults.timeoutSecondsByTrigger) — interactive turns need faster failover than cron/heartbeat `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136429](https://github.com/openclaw/openclaw/issues/136429) [Compatibility/Accessibility] Please support a forward path for Node 27 HEAD users `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136414](https://github.com/openclaw/openclaw/issues/136414) Expanded Markdown tables lose delegated file and session actions `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#136406](https://github.com/openclaw/openclaw/issues/136406) sessions tail reports done for recorded terminal failures `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#136405](https://github.com/openclaw/openclaw/issues/136405) memory_search hangs at 15s when remote embedding stalls; no per-call timeout/retry config `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136400](https://github.com/openclaw/openclaw/issues/136400) ACP-spawned harness agent reply fails to dispatch to a channel owned by a configured agent (runtime owner not published, blocks lane) `P1` `impact:message-loss` 💬1
- [#136394](https://github.com/openclaw/openclaw/issues/136394) [Bug]: OpenClaw cannot run gpt‑oss:20b on an offline machine `bug` `bug:crash` `P2` 💬1
- [#136392](https://github.com/openclaw/openclaw/issues/136392) Prepare npm and ClawHub releases before a recoverable publication button `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#136387](https://github.com/openclaw/openclaw/issues/136387) [Bug]: Control UI gateway restart silently deferred/dropped under active work — unit never restarted, no operator feedback `P1` `impact:other` `impact:ux-friction` 💬1
- [#136275](https://github.com/openclaw/openclaw/issues/136275) Managed local provider services can cause Gateway OOM termination `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#136383](https://github.com/openclaw/openclaw/issues/136383) [Bug] Control UI regression: the tab that initiates a turn stops updating in real time; only passive observer tabs render new messages live `bug` `regression` `P1` `impact:ux-friction` 💬1
- [#136378](https://github.com/openclaw/openclaw/issues/136378) [Bug]: Terminal retained inputs persist without clear separation or dismissal `P2` `impact:ux-friction` 💬1
- [#136376](https://github.com/openclaw/openclaw/issues/136376) [Feature]: Clear acknowledgement reactions after the final reply `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#136370](https://github.com/openclaw/openclaw/issues/136370) Discord guild-admin actions (channel-create) blocked even when sender is in commands.ownerAllowFrom `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#136367](https://github.com/openclaw/openclaw/issues/136367) Slack Socket Mode: auth.test times out in gateway, apps.connections.open returns 408 — both work from standalone Node.js `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#136358](https://github.com/openclaw/openclaw/issues/136358) [Feature]: honor sessions_spawn runTimeoutSeconds above 295s in the gateway launch budget `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136348](https://github.com/openclaw/openclaw/issues/136348) [Bug]: TOOLS.md → AGENTS.md migration silently truncates the bootstrap prompt past bootstrapMaxChars, and the warning vanishes with the legacy file `P2` `maturity:stable` 💬1
- [#136345](https://github.com/openclaw/openclaw/issues/136345) webchat (Control UI) duplicates pre-tool commentary text 2-3x per turn (2026.8.2) `P1` `impact:ux-friction` 💬1
- [#136339](https://github.com/openclaw/openclaw/issues/136339) [Bug]: cron session reaper aborts the whole sweep when a daily job's previous run session is claimed by its next run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#136341](https://github.com/openclaw/openclaw/issues/136341) Exec approvals migration gate permanently caches legacy-file absence `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136260](https://github.com/openclaw/openclaw/issues/136260) 2026.8.2 regression: inter-tool assistant text ("commentary") no longer streamed to channels — channel UI freezes during run, full text dumped at end `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136261](https://github.com/openclaw/openclaw/issues/136261) [Bug]: memory index --force fails on built-in zhipu/bailian embedding providers — item-count batch limit (64/20) not handled by splittable-error retry `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#136333](https://github.com/openclaw/openclaw/issues/136333) Heartbeat runs record no wake source/reason: five unexplained 5-minute polls on a 4h cadence are unattributable from logs, `system heartbeat last`, or heartbeat_outcomes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136328](https://github.com/openclaw/openclaw/issues/136328) cron tool: jobs outside the caller's authority are silently hidden and `get` says "not found", so agents report operator-owned jobs as deleted `P2` `impact:ux-friction` `clawsweeper:bulk-filed` 💬1
- [#136777](https://github.com/openclaw/openclaw/issues/136777) [Bug]: Placement reconciliation blocks unrelated node dispatch behind slow session `bug` `maintainer`
- [#136778](https://github.com/openclaw/openclaw/issues/136778) [Bug]: Node workspace origin clone falls back to multi-minute Gateway transfer `bug` `maintainer`

#### 🔒 Closed Issues
- [#96692](https://github.com/openclaw/openclaw/issues/96692) Slack thread replies can be generated but not delivered after origin tuple is lost
- [#134353](https://github.com/openclaw/openclaw/issues/134353) [Bug]: Xiaomi provider left with an empty install payload after 2026.7.1-2 -> 2026.8.1 upgrade; Gateway refuses to start
- [#134337](https://github.com/openclaw/openclaw/issues/134337) memory_search dirty maintenance repeatedly full-reindexes under concurrent writes
- [#135305](https://github.com/openclaw/openclaw/issues/135305) Session observer disables itself after delivery failures and silently drops announce-path Slack messages (error logged as empty {})
- [#134055](https://github.com/openclaw/openclaw/issues/134055) [Bug]: Slack DM threads stopped getting thread-scoped sessions after 2026.7.1-2
- [#135743](https://github.com/openclaw/openclaw/issues/135743) [Bug]: Startup blocks the event loop after `http server listening` — listAgentEntries() re-run per agent per model ref
- [#136123](https://github.com/openclaw/openclaw/issues/136123) Windows (pt-BR): doctor --fix permanently blocked — schtasks runtime status parsing breaks on non-English locale, worse under UAC elevation
- [#108975](https://github.com/openclaw/openclaw/issues/108975) Slack DM threads still serialize in 2026.7.1; add configurable per-thread session scope
- [#134186](https://github.com/openclaw/openclaw/issues/134186) Subagent completion announce cannot reach a busy claude-cli session: wake path reports no_active_run mid-turn, then the fallback announce run collides with the turn claim
- [#127948](https://github.com/openclaw/openclaw/issues/127948) [Bug]: WhatsApp group replies render as BLANK bubbles when the quote cache has expired (empty `conversation` in the quoted stub)
- [#134077](https://github.com/openclaw/openclaw/issues/134077) Model Providers counts web-tool credentials and duplicate auth aliases as configured LLM providers
- [#122233](https://github.com/openclaw/openclaw/issues/122233) Embedded run lane timeout can never fire: a blind 15s heartbeat resets its progress clock
- [#120633](https://github.com/openclaw/openclaw/issues/120633) Every inbound bot message throws "must declare runDispatchLifecycle" on 2026.7.2-beta.7 (regression; appears fixed on main)
- [#135882](https://github.com/openclaw/openclaw/issues/135882) outbound sanitizer: duplicate-block collapse de-indents and deletes lines inside fenced code in delivered replies
- [#135192](https://github.com/openclaw/openclaw/issues/135192) 2026.8.1 regressions: stale turn claims kill long runs; completion announcements dropped; symlink migration writes stale over-cap bootstrap content; ingress lane blocks silently on legacy state
- [#136547](https://github.com/openclaw/openclaw/issues/136547) [Bug]: macOS computer-control cursor remains visible after task completion
- [#135860](https://github.com/openclaw/openclaw/issues/135860) [Bug]: Remote iMessage attachments can be dropped before agent execution
- [#134329](https://github.com/openclaw/openclaw/issues/134329) [Bug]: Gateway fails to start on fresh linux fresh openclaw 2
- [#134621](https://github.com/openclaw/openclaw/issues/134621) [Bug]: macOS computer input executes, then result validation rejects it
- [#135658](https://github.com/openclaw/openclaw/issues/135658) [Bug]: 2026.8.2 delivers the synthesized "no final summary was produced" fallback for cron jobs that deliberately end with NO_REPLY after tool calls (2026.8.1 stayed silent)
- [#134683](https://github.com/openclaw/openclaw/issues/134683) [Bug]: Specific Dialogue Box is stuck at bottom of Session
- [#133432](https://github.com/openclaw/openclaw/issues/133432) [Bug]: Test wrapper corrupts passWithNoTests arguments
- [#136724](https://github.com/openclaw/openclaw/issues/136724) [Bug]: Codex post-tool summaries can switch the selected account or model
- [#136734](https://github.com/openclaw/openclaw/issues/136734) [Bug]: Secret egress proxy does not substitute store-secret sentinels in HTTPS request headers from exec (2026.8.2)
- [#136732](https://github.com/openclaw/openclaw/issues/136732) [Bug]: node identity inspection creates shared SQLite state
- [#136671](https://github.com/openclaw/openclaw/issues/136671) [Bug]: CLI-imported history returns newest messages for missing anchors
- [#136059](https://github.com/openclaw/openclaw/issues/136059) Plugin-registered memory corpus supplements dropped in agent-scope tool execution (memory_search corpus=X -> "not-registered" while the same plugin's tools work)
- [#136638](https://github.com/openclaw/openclaw/issues/136638) Android settings refreshes can overwrite newer results and progress
- [#136551](https://github.com/openclaw/openclaw/issues/136551) Control UI browser panel: "Screenshot fetch failed (401)" with gateway.auth.mode token
- [#133517](https://github.com/openclaw/openclaw/issues/133517) [Bug]: Swarm collectors are told to wait for completion notifications they never send
- [#136663](https://github.com/openclaw/openclaw/issues/136663) Blank sessions tail agent selectors silently choose a session owner
- [#136656](https://github.com/openclaw/openclaw/issues/136656) [Bug]: embedded session recall ignores search-hit anchors
- [#136515](https://github.com/openclaw/openclaw/issues/136515) fix: mounted bundled plugin source is replaced by packaged runtime and setup
- [#136499](https://github.com/openclaw/openclaw/issues/136499) fix: doctor cannot load the Teams checker after a clean source build
- [#136630](https://github.com/openclaw/openclaw/issues/136630) Environment-substituted remote CDP profile is omitted from browser registry
- [#136593](https://github.com/openclaw/openclaw/issues/136593) [Bug]: same-install CLI nodes are not marked Gateway-local
- [#124314](https://github.com/openclaw/openclaw/issues/124314) plugin.approval.request cannot use the local approval-runtime bypass — crashes on any bot device without operator.approvals pairing
- [#136562](https://github.com/openclaw/openclaw/issues/136562) [Bug]: macOS menu bar keeps polling Devices and Automations after closing
- [#136068](https://github.com/openclaw/openclaw/issues/136068) [Bug]: Native catalog + creates an unrunnable model chat instead of a CLI terminal
- [#136357](https://github.com/openclaw/openclaw/issues/136357) [Bug]: copied state keeps managed plugin paths pointing to source after registry refresh
- [#136385](https://github.com/openclaw/openclaw/issues/136385) Built Doctor needlessly transforms checkout plugins with compiled artifacts available
- [#133955](https://github.com/openclaw/openclaw/issues/133955) gateway.roles: verified-user rejection message overstates its scope, and rejected clients never pause reconnect
- [#126872](https://github.com/openclaw/openclaw/issues/126872) [Bug]: Slack Agent View DMs never get per-root sessions when threadless setSuggestedPrompts returns internal_error
- [#136047](https://github.com/openclaw/openclaw/issues/136047) Android Refresh chat can lose its forced health check to outbox reconciliation
- [#135821](https://github.com/openclaw/openclaw/issues/135821) [Bug]: Control UI hides GPT-5.6 Sol xhigh/max/ultra when Codex is a fallback
- [#135649](https://github.com/openclaw/openclaw/issues/135649) [Bug]: New MCP server Env/Headers entries can't be renamed off "custom-N" (redaction sentinel trips the rename guard)
- [#135472](https://github.com/openclaw/openclaw/issues/135472) check-lint: --extension-stripe rejects the unsplit extensions shard on unconstrained runners
- [#136492](https://github.com/openclaw/openclaw/issues/136492) [Bug]: 2026.8.2 fresh onboarding verifies OpenAI but leaves required Codex plugin uninstalled, blocking Gateway readiness
- [#136355](https://github.com/openclaw/openclaw/issues/136355) [Feature]: Let the macOS app open Control UI with a durable user identity
- [#136135](https://github.com/openclaw/openclaw/issues/136135) iOS chat.send fails with "session routing changed" on multi-agent gateway with explicit ownership
- [#135028](https://github.com/openclaw/openclaw/issues/135028) GitHub Connect flow should detect missing `gh` CLI and show installation guidance
- [#136157](https://github.com/openclaw/openclaw/issues/136157) macOS browser sidebar cannot expand much beyond half the default window
- [#135457](https://github.com/openclaw/openclaw/issues/135457) [Bug]: Control UI cron page never displays heartbeat scratch — "Heartbeat monitor" field is always empty
- [#125776](https://github.com/openclaw/openclaw/issues/125776) Codex dynamic tool progress duplicates a single call in Telegram
- [#136198](https://github.com/openclaw/openclaw/issues/136198) [Bug]: Strict transcript appends reject omitted optional storePath
- [#135905](https://github.com/openclaw/openclaw/issues/135905) Session maintenance full-store scans on entry writes add ~4s to tested channel ingress; tested web UI ingress did not show the burst
- [#131775](https://github.com/openclaw/openclaw/issues/131775) fix(systemd): remove service backups during uninstall
- [#136766](https://github.com/openclaw/openclaw/issues/136766) Model-fetch requests can block the Gateway event loop for 15+ minutes
- [#134697](https://github.com/openclaw/openclaw/issues/134697) [Bug]: Claude CLI compaction is silent and commentary bursts delay Telegram finals
- [#120713](https://github.com/openclaw/openclaw/issues/120713) [Bug]: completed Codex web_search remains active in Gateway diagnostics on v2026.7.1-2
- [#136757](https://github.com/openclaw/openclaw/issues/136757) 2026.8.2 regression: openai-compatible memory embed adapter sends all chunks in one request; split-on-error retry does not catch provider batch-size 400
- [#136456](https://github.com/openclaw/openclaw/issues/136456) Bug: packaged setup-api artifacts disappear from plugin setup discovery
- [#136455](https://github.com/openclaw/openclaw/issues/136455) Bug: standalone plugin builder silently skips TSX entries
- [#136573](https://github.com/openclaw/openclaw/issues/136573) approvals: JSON no-op allowlist commands return empty stdout
- [#136709](https://github.com/openclaw/openclaw/issues/136709) Channel auto-restart chain stays bound to a retired plugin registry generation after a plugins.* hot reload (2026.8.2)
- [#136516](https://github.com/openclaw/openclaw/issues/136516) fix: restarting after a bundled source mount reuses the old packaged registry
- [#135720](https://github.com/openclaw/openclaw/issues/135720) [Bug]: Inbox appears outside its navigation hosts
- [#136493](https://github.com/openclaw/openclaw/issues/136493) Skill lookup can select an earlier alias instead of the exact requested name
- [#136696](https://github.com/openclaw/openclaw/issues/136696) [Bug]: Failed relocating the shared auth store - persists even with doctor --fix
- [#133128](https://github.com/openclaw/openclaw/issues/133128) [Bug]: Ctrl+C does not cancel TUI pickers with modern keyboard input
- [#134409](https://github.com/openclaw/openclaw/issues/134409) [Bug]: Default permission icon is invisible in the macOS composer
- [#136665](https://github.com/openclaw/openclaw/issues/136665) Verified backups can omit the active config under volatile paths
- [#136662](https://github.com/openclaw/openclaw/issues/136662) Session target failures bypass the standard CLI JSON error envelope
- [#136640](https://github.com/openclaw/openclaw/issues/136640) Gateway RSS diagnostics report false critical pressure on small hosts
- [#136635](https://github.com/openclaw/openclaw/issues/136635) Node names silently choose one current client instead of reporting ambiguity
- [#136632](https://github.com/openclaw/openclaw/issues/136632) Device approval preview loses active profile in copied command
- [#136556](https://github.com/openclaw/openclaw/issues/136556) Bash completion loses choices or duplicates option prefixes after equals
- [#136591](https://github.com/openclaw/openclaw/issues/136591) [Docs Bug]: Custodian diagnosis can mutate state and channel examples fail
- [#136598](https://github.com/openclaw/openclaw/issues/136598) health: an unconfigured preferred account hides active probe results
- [#136595](https://github.com/openclaw/openclaw/issues/136595) plugins: inspection loses policy for mixed-case declared IDs
- [#136594](https://github.com/openclaw/openclaw/issues/136594) plugins: inspection silently omits partial-inventory diagnostics
- [#136563](https://github.com/openclaw/openclaw/issues/136563) Local message commands skip registered plugin shutdown hooks
- [#136536](https://github.com/openclaw/openclaw/issues/136536) agents: list displays old workspace identity after set-identity succeeds
- [#136530](https://github.com/openclaw/openclaw/issues/136530) path: dry-run diff emits malformed unified patches
- [#120718](https://github.com/openclaw/openclaw/issues/120718) Plugin tools cannot deliver local media files to chat channels
- [#136568](https://github.com/openclaw/openclaw/issues/136568) Usage checkbox menus leave equivalent typed filters stuck on
- [#136464](https://github.com/openclaw/openclaw/issues/136464) Bug: browser action cancellation leaks across tabs and pending native work
- [#136613](https://github.com/openclaw/openclaw/issues/136613) Model failover: try the fallback once when the primary fails with a terminal (non-auth/billing/context) error before surfacing "request failed"
- [#135538](https://github.com/openclaw/openclaw/issues/135538) opencode-go sends no OpenClaw User-Agent, contrary to OpenCode Go's documented client-identification requirement
- [#136592](https://github.com/openclaw/openclaw/issues/136592) System expert has no model fallback when its auth profile is temporarily unavailable
- [#131734](https://github.com/openclaw/openclaw/issues/131734) Gateway exits on unhandled rejection from background subagent completion
- [#136468](https://github.com/openclaw/openclaw/issues/136468) Bug: TUI URL-shaped link labels override their authored destinations
- [#136437](https://github.com/openclaw/openclaw/issues/136437) Chat Markdown exports discard participant names
- [#136538](https://github.com/openclaw/openclaw/issues/136538) channels: stalled capability callbacks exit the CLI before reporting timeout
- [#136548](https://github.com/openclaw/openclaw/issues/136548) [Bug]: Doctor re-relocates completed main auth overlay; rowsMatch includes updated_at
- [#136441](https://github.com/openclaw/openclaw/issues/136441) Hidden session pane consumes Escape before the visible CI popover
- [#135251](https://github.com/openclaw/openclaw/issues/135251) [Bug]: iOS opens existing sessions at the latest user-turn start instead of current output
- [#135249](https://github.com/openclaw/openclaw/issues/135249) [Bug]: iOS chat turns black after long-pressing an assistant message
- [#135217](https://github.com/openclaw/openclaw/issues/135217) [Bug]: Assistant message text cannot be selected or copied in the iOS app
- [#136558](https://github.com/openclaw/openclaw/issues/136558) [Feature]: Pin agents and Agent sessions on the side bar.
- [#129734](https://github.com/openclaw/openclaw/issues/129734) [Bug]: `config patch --file` crashes with JavaScript heap OOM on a deeply-nested object
- [#136443](https://github.com/openclaw/openclaw/issues/136443) Contained Control UI symlinks lose MIME or index preparation
- [#136442](https://github.com/openclaw/openclaw/issues/136442) Encoded Control UI asset names return 404 or the wrong file
- [#132452](https://github.com/openclaw/openclaw/issues/132452) [Bug]: Extension relay tab listing times out after fixed 3 s with many allowed tabs
- [#136397](https://github.com/openclaw/openclaw/issues/136397) Chunked media downloads misreport decimal MiB size limits
- [#123407](https://github.com/openclaw/openclaw/issues/123407) Issue on docs: Cli Reference Models Page
- [#135618](https://github.com/openclaw/openclaw/issues/135618) [Bug]: codexPlugins config mutation invalidates the active Codex harness until restart
- [#136490](https://github.com/openclaw/openclaw/issues/136490) [Bug]: Native Claude CLI auth status is reportedly indeterminate while a direct prompt succeeds
- [#136488](https://github.com/openclaw/openclaw/issues/136488) [Bug]: Reported stale bootstrap content and sibling-file loss after symlink migration
- [#136491](https://github.com/openclaw/openclaw/issues/136491) [Bug]: Verify health and operator visibility when legacy workspace state blocks a running ingress lane
- [#136477](https://github.com/openclaw/openclaw/issues/136477) [Bug]: 2026.8.2 leaves orphaned active turn claims; Discord DM sessions cannot be reset or deleted
- [#136415](https://github.com/openclaw/openclaw/issues/136415) Valid APNG icons return 404 instead of rendering in the Control UI
- [#136453](https://github.com/openclaw/openclaw/issues/136453) gateway restart can leave the gateway stopped: launchctl bootstrap intermittently fails with I/O error and is not retried
- [#136427](https://github.com/openclaw/openclaw/issues/136427) [Bug]: Windows Desktop UI clips config panels and chat bubbles at high display scaling
- [#136406](https://github.com/openclaw/openclaw/issues/136406) sessions tail reports done for recorded terminal failures
- [#134851](https://github.com/openclaw/openclaw/issues/134851) [Bug]: sessionless contextless CDP target bypasses worker crash guard
- [#136400](https://github.com/openclaw/openclaw/issues/136400) ACP-spawned harness agent reply fails to dispatch to a channel owned by a configured agent (runtime owner not published, blocks lane)
- [#136394](https://github.com/openclaw/openclaw/issues/136394) [Bug]: OpenClaw cannot run gpt‑oss:20b on an offline machine
- [#136387](https://github.com/openclaw/openclaw/issues/136387) [Bug]: Control UI gateway restart silently deferred/dropped under active work — unit never restarted, no operator feedback
- [#136275](https://github.com/openclaw/openclaw/issues/136275) Managed local provider services can cause Gateway OOM termination
- [#136383](https://github.com/openclaw/openclaw/issues/136383) [Bug] Control UI regression: the tab that initiates a turn stops updating in real time; only passive observer tabs render new messages live
- [#136378](https://github.com/openclaw/openclaw/issues/136378) [Bug]: Terminal retained inputs persist without clear separation or dismissal
- [#133702](https://github.com/openclaw/openclaw/issues/133702) Creation-only idle draft title preparation
- [#136348](https://github.com/openclaw/openclaw/issues/136348) [Bug]: TOOLS.md → AGENTS.md migration silently truncates the bootstrap prompt past bootstrapMaxChars, and the warning vanishes with the legacy file
- [#136345](https://github.com/openclaw/openclaw/issues/136345) webchat (Control UI) duplicates pre-tool commentary text 2-3x per turn (2026.8.2)
- [#118880](https://github.com/openclaw/openclaw/issues/118880) Agent run timeout notice fires while the underlying run is still executing (not cancelled), producing misleading failure + late duplicate completion messages
- [#136328](https://github.com/openclaw/openclaw/issues/136328) cron tool: jobs outside the caller's authority are silently hidden and `get` says "not found", so agents report operator-owned jobs as deleted
- [#131781](https://github.com/openclaw/openclaw/issues/131781) fix(systemd): protect tokens stored in service units

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 240,125 · **Open issues:** 38,584 · **Last push:** 1h ago

On September 3, 2026, Hermes Agent saw no new releases or merged pull requests. However, several notable issues were raised, including a bug in version v0.21.0 where conversations have duplicate stored history, significantly inflating the message count from 3 to 8. Additionally, users reported that the `hermes update` command does not generate a receipt upon successful execution, leading to lost in-flight receipts, and there were issues with the nous provider's chat completions consistently returning a 404 error. Other critical bugs involved failures in the Desktop managed SSH update process, as well as persistent location issues in the Dashboard, such as blank labels for checkpoints.

#### 🐛 New Issues
- [#101644](https://github.com/NousResearch/hermes-agent/issues/101644) [Bug]: v0.21.0 named /v1/responses conversations duplicate stored history (2 turns: 3 -> 8 messages) `type/bug` `comp/gateway` `provider/openai` `P2` 💬2
- [#101690](https://github.com/NousResearch/hermes-agent/issues/101690) `hermes update` writes no receipt on success: the stale-module purge evicts `hermes_cli.update_receipt` and loses the in-flight receipt `type/bug` `duplicate` `comp/cli` `P2` 💬2
- [#101673](https://github.com/NousResearch/hermes-agent/issues/101673) nous provider: meta/muse-spark-1.3-contributor catalog-listed but chat completions always 404 (same as #95837 for 1.2) `type/bug` `duplicate` `provider/nous` `P2` 💬2
- [#101516](https://github.com/NousResearch/hermes-agent/issues/101516) Desktop managed SSH update always reports failure: backend never writes receipt correlation_id `type/bug` `backend/ssh` `P2` `sweeper:risk-compatibility` 💬2
- [#101756](https://github.com/NousResearch/hermes-agent/issues/101756) MCP OAuth: async_auth_flow bridge drops the SDK's inner generator without aclose(), poisoning context.lock cross-task — every OAuth MCP server parks permanently `type/bug` `comp/tools` `tool/mcp` `area/auth` 💬1
- [#101536](https://github.com/NousResearch/hermes-agent/issues/101536) Parallel tool calls to the same tool are merged into one slot (Gemini native streaming) `type/bug` `duplicate` `comp/agent` `provider/gemini` 💬1
- [#101568](https://github.com/NousResearch/hermes-agent/issues/101568) fix(bot-mode): keep in-flight clarify prompts bound to renamed Group Chat `type/bug` `P2` `sweeper:risk-session-state` `comp/desktop` 💬1
- [#101741](https://github.com/NousResearch/hermes-agent/issues/101741) [Bug]: Revoking a permanent command approval has no effect — config reload merges instead of replacing `type/bug` `comp/tools` `area/auth` `area/config` 💬1
- [#101743](https://github.com/NousResearch/hermes-agent/issues/101743) [Bug]: Every checkpoint in the Dashboard list shows a blank label — `rollback.list` reads a `message` key the manager never emits `type/bug` `comp/tui` `P2` 💬1
- [#101746](https://github.com/NousResearch/hermes-agent/issues/101746) [Bug]: Dashboard ships 17 locales but always starts in English — `navigator.language` is never consulted `type/bug` `P3` `comp/dashboard` `area/i18n` 💬1
- [#101697](https://github.com/NousResearch/hermes-agent/issues/101697) Desktop remote gateway: basic-auth session never persisted (0 cookies in sign-in partition) → unbounded boot-retry loop on profile refresh `type/bug` `duplicate` `area/auth` `P2` 💬1
- [#101683](https://github.com/NousResearch/hermes-agent/issues/101683) Desktop: local directory links become broken text previews and local paths show Download `type/bug` `P2` `sweeper:risk-platform-windows` `comp/desktop` 💬1
- [#101684](https://github.com/NousResearch/hermes-agent/issues/101684) Desktop: allow hiding/removing the built-in "This device" (local) connection when no local backend exists `duplicate` `type/feature` `area/config` `P3` 💬1
- [#101769](https://github.com/NousResearch/hermes-agent/issues/101769) [Feature]: Profile switching should open existing bot chat instead of always creating a new session `type/feature` `P3` `sweeper:risk-session-state` `comp/desktop`
- [#101764](https://github.com/NousResearch/hermes-agent/issues/101764) [Feature]: [Desktop] Custom Endpoints: no way to keep only some discovered models `type/feature` `area/config` `P2` `sweeper:risk-compatibility`
- [#101760](https://github.com/NousResearch/hermes-agent/issues/101760) `hermes doctor` reports npm audit network failures as “no known vulnerabilities” `type/bug` `comp/cli` `P2` `area/install-update`
- [#101754](https://github.com/NousResearch/hermes-agent/issues/101754) Doc-code drift: cron docs claim skip_memory=True, code passes skip_memory=False `type/docs` `comp/cron` `tool/memory` `P3`
- [#101757](https://github.com/NousResearch/hermes-agent/issues/101757) [Bug]: Docker exec hermes tui throw local variable 'pt_key_to_sequence' error `type/bug` `comp/cli` `tool/tts` `area/docker`
- [#101748](https://github.com/NousResearch/hermes-agent/issues/101748) Dashboard still serves Electron renderer when Desktop-spawned (HERMES_DESKTOP=1 gap in #52945 fix) `type/bug` `area/config` `P2` `sweeper:risk-compatibility`
- [#101742](https://github.com/NousResearch/hermes-agent/issues/101742) [Bug]: Opening a session can silently land you in a sub-agent/branch transcript — `_session_latest_descendant` follows every child `type/bug` `tool/delegate` `P2` `sweeper:risk-session-state`
- [#101744](https://github.com/NousResearch/hermes-agent/issues/101744) [Bug]: `rollback.diff` silently truncates the diff at 4000 chars with no `truncated` flag `type/bug` `comp/tui` `P2`
- [#101745](https://github.com/NousResearch/hermes-agent/issues/101745) [Bug]: `api_server` port-conflict error tells you to run a command that can never work `type/bug` `comp/gateway` `area/config` `P2`
- [#101719](https://github.com/NousResearch/hermes-agent/issues/101719) Bot Chat capability-refresh rebuild persists a named profile's turns into the launch profile's state.db (_make_agent defaults session_db to _get_db()) `type/bug` `comp/tui` `P1` `sweeper:risk-session-state`
- [#101711](https://github.com/NousResearch/hermes-agent/issues/101711) [Bug]: providers: entries without base_url emit phantom picker rows that shadow same-named custom_providers (local model missing from /model) `type/bug` `comp/cli` `area/config` `P2`
- [#101712](https://github.com/NousResearch/hermes-agent/issues/101712) [Bug][Desktop]: interrupted-turn reconciliation 404-loops every ~5s — remounts session view and steals prompt focus, making typing/model-switch unusable `type/bug` `P2` `sweeper:risk-session-state` `comp/desktop`
- [#101708](https://github.com/NousResearch/hermes-agent/issues/101708) feat(relay): interactive /model picker over the relay prompt lane (follow-up to #101542) `type/feature` `comp/gateway` `P3`
- [#101705](https://github.com/NousResearch/hermes-agent/issues/101705) Bug: model-provider plugin fetch_models() ignored by model-switch validation — /v1/models probe returns wrong catalog `type/bug` `comp/cli` `comp/plugins` `area/config`
- [#101701](https://github.com/NousResearch/hermes-agent/issues/101701) Desktop (macOS): profile-rail tiles intermittently collapse to 2×2 px — unclickable, tooltip obscured by hand cursor `type/bug` `P3` `needs-repro` `comp/desktop`
- [#101695](https://github.com/NousResearch/hermes-agent/issues/101695) memory tool: top-level params dropped in tool-call transport (GLM-5.3/OpenRouter, late in long conversations) `type/bug` `comp/agent` `tool/memory` `provider/openrouter`
- [#101012](https://github.com/NousResearch/hermes-agent/issues/101012) `estimate_usage_cost` performs a blocking `GET {base_url}/models` on every process start, even for providers with a bundled price table `type/perf` `comp/agent` `P2` `area/usage-cost`
- [#101675](https://github.com/NousResearch/hermes-agent/issues/101675) Feature: Backend should record/serve connected Desktop client versions (observability) `type/feature` `comp/gateway` `P3` `needs-decision`

#### 🔒 Closed Issues
- [#98077](https://github.com/NousResearch/hermes-agent/issues/98077) [Field report]: state.db physical cross-B-tree corruption under SQLite 3.50.4 WAL; canonical writes continued after malformed detection
- [#101690](https://github.com/NousResearch/hermes-agent/issues/101690) `hermes update` writes no receipt on success: the stale-module purge evicts `hermes_cli.update_receipt` and loses the in-flight receipt
- [#101697](https://github.com/NousResearch/hermes-agent/issues/101697) Desktop remote gateway: basic-auth session never persisted (0 cookies in sign-in partition) → unbounded boot-retry loop on profile refresh
- [#86514](https://github.com/NousResearch/hermes-agent/issues/86514) file tools: per-task/per-path registry top-level keys never evicted (unbounded growth in long-lived gateway)
- [#101012](https://github.com/NousResearch/hermes-agent/issues/101012) `estimate_usage_cost` performs a blocking `GET {base_url}/models` on every process start, even for providers with a bundled price table

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 90,806 · **Open issues:** 7,367 · **Last push:** <1h ago

On September 3, 2026, there were no new releases for vLLM, but several significant updates were merged. Notably, improvements in performance were introduced with the addition of the fused GemmaRMSNorm path for eager execution and enhancements to DSV3 GEMM that deliver kernel performance improvements ranging from 12% to 81%. The Triton kernel-writing skill was also exposed to Claude, alongside adding infrastructure for new agents. Among new issues, a critical bug was reported regarding Gemma 4, which skips reasoning and repeats JSON when json_schema is enabled, indicating a need for urgent attention.

#### ✅ Merged PRs
- [#55012](https://github.com/vllm-project/vllm/pull/55012) [Perf][Rust Frontend] Coalesce decoded chunks per engine update
- [#55028](https://github.com/vllm-project/vllm/pull/55028) [Agents] Expose Triton kernel-writing skill to Claude
- [#55019](https://github.com/vllm-project/vllm/pull/55019) [Agents] Add Triton kernel-writing skill
- [#55026](https://github.com/vllm-project/vllm/pull/55026) [CI] Remove deleted nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16 and its arch aliases
- [#53678](https://github.com/vllm-project/vllm/pull/53678) [XPU] Add fused GemmaRMSNorm path for eager execution
- [#55023](https://github.com/vllm-project/vllm/pull/55023) [CI] Exclude nightly-dev tags from nightly DockerHub cleanup
- [#55011](https://github.com/vllm-project/vllm/pull/55011) [ROCm][CI] Extend Multimodal Processor Shard timeout on AMD CI
- [#54854](https://github.com/vllm-project/vllm/pull/54854) [Bugfix][Rust Frontend][Renderer] Align DeepSeek V4 historical developer message handling
- [#54565](https://github.com/vllm-project/vllm/pull/54565) [K3 Perf] Enable DSV3 GEMM for inner-contiguous and row-strided tensors, 12%~81% kernel performance improvement
- [#54989](https://github.com/vllm-project/vllm/pull/54989) [ROCm][CI] Fix false multi-node detection on native CI
- [#54996](https://github.com/vllm-project/vllm/pull/54996) [Bugfix][Tests] Stabilize B12X linear kernel checks
- [#54954](https://github.com/vllm-project/vllm/pull/54954) [CI][MoE] Moe kernels test cleanup
- [#54984](https://github.com/vllm-project/vllm/pull/54984) [CI/Build][ROCm] Guard the two CUDA-only tests in test_bf16_skinny_gemm
- [#54957](https://github.com/vllm-project/vllm/pull/54957) [Bugfix][CI] Set cudagraph_mode=FULL for the Ernie4.5-VL ViT cudagraph test
- [#54852](https://github.com/vllm-project/vllm/pull/54852) [CI][ROCm] Add DSpark evals
- [#54566](https://github.com/vllm-project/vllm/pull/54566) [New model][Multimodal] Add DeepSeek-V4-Flash-Vision-Exp support
- [#54991](https://github.com/vllm-project/vllm/pull/54991) [CI] Revert flaky `test_quark_int8_w8a8_moe`
- [#54980](https://github.com/vllm-project/vllm/pull/54980) [Docs] Add missing return annotations flagged by griffe
- [#54190](https://github.com/vllm-project/vllm/pull/54190) [BUILD] Bump cutlass to v4.7.1
- [#53829](https://github.com/vllm-project/vllm/pull/53829) [Bugfix][Model] Fix CohereASR streaming audio-token estimate (unit + subsampling)
- [#54660](https://github.com/vllm-project/vllm/pull/54660) [Perf] Avoid more h2d copies from non-pinned tensors
- [#51952](https://github.com/vllm-project/vllm/pull/51952) [NIXL] Use int32 array for indices to avoid intermediate conversion
- [#54918](https://github.com/vllm-project/vllm/pull/54918) [Bugfix][Multimodal] Scope cache hash kwargs by modality
- [#54817](https://github.com/vllm-project/vllm/pull/54817) [CI] Add Kimi-K3-pruned75-DSpark-TP4 gsm8k eval
- [#50883](https://github.com/vllm-project/vllm/pull/50883) [Bugfix][KV Offload] Scale UniformTypeKVCacheSpecs groups by DCP
- [#54872](https://github.com/vllm-project/vllm/pull/54872) [Bugfix][KV Offload] Ignore stale async lookup results
- [#49209](https://github.com/vllm-project/vllm/pull/49209) [Hardware][XPU] Register matmul and linear batch-invariant kernels for XPU
- [#51285](https://github.com/vllm-project/vllm/pull/51285) [Online quantization] Add targeted online quantization configuration based on user patterns
- [#54759](https://github.com/vllm-project/vllm/pull/54759) [Bugfix][KV Offload] Ensure tracker progress for oversized offers
- [#54803](https://github.com/vllm-project/vllm/pull/54803) [Bugfix] `adjust_dcp_kv_cache_interleave_size` for NixlConnector only
- [#53762](https://github.com/vllm-project/vllm/pull/53762) [CI] Include chat template fallbacks in package_data
- [#54751](https://github.com/vllm-project/vllm/pull/54751) [CI] Shard CPU jobs above the 24h P90 threshold
- [#54171](https://github.com/vllm-project/vllm/pull/54171) [Bugfix][ROCm][Build] fix profiler hang due to queue interposition bug
- [#54782](https://github.com/vllm-project/vllm/pull/54782) [Bugfix] Raise for unavailable piecewise CUDA graphs
- [#49869](https://github.com/vllm-project/vllm/pull/49869) [Model] Fix GLM-OCR MTP weight loading
- [#54893](https://github.com/vllm-project/vllm/pull/54893) [CI][Spec Decode] Add MTP placeholder-token regression coverage
- [#54898](https://github.com/vllm-project/vllm/pull/54898) [CI][ROCm] Prefetch safetensors weights in AMD CI
- [#53399](https://github.com/vllm-project/vllm/pull/53399) [ROCm][CI] Add MTP and other spec-decode acceptance coverage
- [#51667](https://github.com/vllm-project/vllm/pull/51667) [Bugfix] Fix cross-batch buffer race corrupting DiskBackend loads
- [#53437](https://github.com/vllm-project/vllm/pull/53437) [CI][AMD] Preserve diagnostics for unwritable checkouts
- [#52350](https://github.com/vllm-project/vllm/pull/52350) [CI] Shard LoRA TP distributed tests
- [#54913](https://github.com/vllm-project/vllm/pull/54913) [Bugfix] Fix launch render hanging on shutdown
- [#50504](https://github.com/vllm-project/vllm/pull/50504) [CI][Fix] Resolved the Ascend NPU test build image fail and add file dependencies
- [#52344](https://github.com/vllm-project/vllm/pull/52344) [CI] Shard entrypoints API-server tests
- [#54558](https://github.com/vllm-project/vllm/pull/54558) [CI] Batch the swap_blocks verification instead of copying block by block
- [#52352](https://github.com/vllm-project/vllm/pull/52352) [CI] Shard H100 MoE refactor integration tests
- [#51690](https://github.com/vllm-project/vllm/pull/51690) [KV Connector][Offloading] Look through UniformTypeKVCacheSpecs in the canonical portability gate
- [#45241](https://github.com/vllm-project/vllm/pull/45241) [Frontend] Add site-packages support for reasoning/tool parser plugins
- [#54859](https://github.com/vllm-project/vllm/pull/54859) [Kimi-K3] Bump FlashKDA to fix unstable inverse

#### 🐛 New Issues
- [#54881](https://github.com/vllm-project/vllm/issues/54881) [Bug]: Gemma 4 skips reasoning and repeats JSON when json_schema is enabled `bug` `structured-output` `tool-calling` 💬5
- [#54966](https://github.com/vllm-project/vllm/issues/54966) [CI][Refactor] Comprehensive `AiterExperts` test coverage and possible split `feature request` `rocm` `quantization` `kimi` 💬3
- [#54864](https://github.com/vllm-project/vllm/issues/54864) [RFC]: Truncate mode for `thinking_token_budget` `RFC` `tool-calling` 💬2
- [#54907](https://github.com/vllm-project/vllm/issues/54907) [Bug][DCP] GLM-5.3 dense prefill consumes uninitialized K rows on non-owner ranks `glm` 💬2
- [#54900](https://github.com/vllm-project/vllm/issues/54900) [Bug]: GLM-5.3 Quark MXFP4 Loading Issue `bug` `rocm` `quantization` `glm` 💬2
- [#54928](https://github.com/vllm-project/vllm/issues/54928) [Bug][SpecDecode] DFlash2 changes greedy Qwen3.8 thinking output at token 30, including K=1 and --enforce-eager `bug` `tool-calling` 💬1
- [#54992](https://github.com/vllm-project/vllm/issues/54992) Spec-decode on pre-Hopper runs without CUDA graphs on FlashInfer (prefill path, no capture) — is a decode-path spec mask feasible for fa2? 💬1
- [#54937](https://github.com/vllm-project/vllm/issues/54937) [Feature]: Tokenized Prompt as Input for Chat and Messages Endpoints when serving `feature request` 💬1
- [#54974](https://github.com/vllm-project/vllm/issues/54974) [Bug] modelopt NVFP4 MoE: mismatched w1/w3 global scales are detected, warned about, and then used anyway `quantization` 💬1
- [#54940](https://github.com/vllm-project/vllm/issues/54940) [RFC]: Container snapshot suspend and restore lifecycle 💬1
- [#54959](https://github.com/vllm-project/vllm/issues/54959) [Refactor] Complete the MOE oracle / linear kernel migration `feature request` `rocm` `quantization` 💬1
- [#54919](https://github.com/vllm-project/vllm/issues/54919) `[Performance]: Qwen3.8-Flash-Next long-prefill workload periodically starves active decode for 3-7 minutes on 2-node DGX Spark TP2` `bug` `quantization` 💬1
- [#54924](https://github.com/vllm-project/vllm/issues/54924) [Bug]: GLM-5.3 accuracy collapses on ROCm (GSM8K 91.6% -> 14.9%) after #53155 forces MRV1 `rocm` `quantization` `glm` 💬1
- [#55017](https://github.com/vllm-project/vllm/issues/55017) [Feature] Add native SM103 BF16 head-dim 512 Q1 decode routing `quantization`
- [#55013](https://github.com/vllm-project/vllm/issues/55013) EAGLE3 + sleep-mode Level 2 + CUDA graphs: illegal memory access at draft multi-step graph replay after wake
- [#55010](https://github.com/vllm-project/vllm/issues/55010) [Bug]: nvidia/Qwen3.8-2.4T-A95B-NVFP4 requires two unmerged fixes for compiled serving on Ampere `nvidia` `quantization`
- [#55008](https://github.com/vllm-project/vllm/issues/55008) [Bug]: CUTLASS FP8 linear kernel is selected on Ampere while the SM80 dispatch is INT8-only `nvidia` `quantization`
- [#55005](https://github.com/vllm-project/vllm/issues/55005) [Bug][CPU][Spec Decode]: CPU expand_kernel shim discards its output — non-greedy spec decode consumes uninitialized memory as temperature/top_k/top_p
- [#55000](https://github.com/vllm-project/vllm/issues/55000) [Bug]: DP8 P2P tier startup hangs while creating secondary NIXL/UCX agents `kv-connector`
- [#54997](https://github.com/vllm-project/vllm/issues/54997) compressed-tensors NVFP4 weights produce 0% acceptance in the eagle/MTP drafter under CUDA-graph capture (works with --enforce-eager) `speculative-decoding`
- [#54981](https://github.com/vllm-project/vllm/issues/54981) [Feature]: Support Sentence Transformers Transformer-Pooling-Dense CrossEncoders `feature request`
- [#54961](https://github.com/vllm-project/vllm/issues/54961) [Refactor] Standardize `benchmarks/kernels/` and support multi-device tuning `feature request`
- [#54950](https://github.com/vllm-project/vllm/issues/54950) [Usage] --dtype half is a performance trap on tensor-core-less Turing (GTX 16-series): fp32 is up to 9x faster for batched decode
- [#54947](https://github.com/vllm-project/vllm/issues/54947) [Usage]: vLLM did not stop generating tokens `usage`
- [#54945](https://github.com/vllm-project/vllm/issues/54945) [Bug] FlashInfer CUTLASS NVFP4 MoE gives different logits for identical requests (fused finalize); `use_fused_finalize=False` is bit-stable `nvidia`
- [#54933](https://github.com/vllm-project/vllm/issues/54933) [Bug]: Explicit scalar CUDA graph maximum can drop a required uniform-decode shape
- [#54926](https://github.com/vllm-project/vllm/issues/54926) [Bug]: Gemma 4 MTP + NIXL PD disaggregation — draft model KV not transferred, MTP ineffective `speculative-decoding` `kv-connector`
- [#54914](https://github.com/vllm-project/vllm/issues/54914) [Bug]: KV Cache Offloading AssertionError after several days of uptime with DeepSeek-V4-Pro on 3×8 H100 (TP8+DP3) `bug` `deepseek` `DSv4`
- [#54911](https://github.com/vllm-project/vllm/issues/54911) [Bug]: Request-level tools render ahead of the system prompt in DeepSeek-V3. `bug` `tool-calling` `deepseek`
- [#54870](https://github.com/vllm-project/vllm/issues/54870) [Bug]: `MooncakeStoreScheduler` fatal assert "Missing current block table for store request" when a KV load failure recovery (#19330) reschedules the request `bug`
- [#54906](https://github.com/vllm-project/vllm/issues/54906) [Bug]: thinking_token_budget ignored by Model Runner V2 with Qwen3.8 NVFP4 + MTP `tool-calling`
- [#54877](https://github.com/vllm-project/vllm/issues/54877) [Bug]: padded KV page reshape uses a spec-page stride against a kernel-block size, so as_strided over-requests storage by the split ratio `kimi`
- [#54866](https://github.com/vllm-project/vllm/issues/54866) DP engine startup stuck >50 min in MoE triton JIT warmup (MoEPrepareAndFinalizeNaiveDPEPModular) vs ~3 min single-node

#### 🔒 Closed Issues
- [#31479](https://github.com/vllm-project/vllm/issues/31479) [Feature]: Enable LoRA support for tower and connector in more MM models
- [#39407](https://github.com/vllm-project/vllm/issues/39407) [Bug]: Gemma 4 31B FP8_BLOCK checkpoint produces garbage repetitive output — logit saturation at softcap wall due to absorbed activation scales being double-applied
- [#36236](https://github.com/vllm-project/vllm/issues/36236) [Bug]: vllm fails to load continual pre-trained Qwen3.5-MoE model due to missing support for transformers 5.x renamed class (Qwen3_5MoeTextConfig)
- [#39790](https://github.com/vllm-project/vllm/issues/39790) [Performance]: Significant TTFT Regression with Speculative Decoding (EAGLE3)
- [#46861](https://github.com/vllm-project/vllm/issues/46861) [Bug]: Illegal CUDA memory access in flashinfer_trtllm MoE autotune on aarch64/Grace
- [#39940](https://github.com/vllm-project/vllm/issues/39940) [Performance]: Eagle3 speculative decoding latency regression in v0.19 vs v0.18
- [#39049](https://github.com/vllm-project/vllm/issues/39049) [Bug]: Gemma 4 FP8 dynamic quantization = gibberish output
- [#54087](https://github.com/vllm-project/vllm/issues/54087) [Bug]: torch profiler hangs on ROCm after rocprofiler-sdk 1.3.2 bump
- [#48095](https://github.com/vllm-project/vllm/issues/48095) [Bug]: GLM 5.2 forced toolcall left unparsed in content (glm 47 tool parser)
- [#54881](https://github.com/vllm-project/vllm/issues/54881) [Bug]: Gemma 4 skips reasoning and repeats JSON when json_schema is enabled
- [#49856](https://github.com/vllm-project/vllm/issues/49856) [Bug]: [MTP] ValueError when loading zai-org/GLM-OCR with MTP speculative decoding (model.layers.16.mtp_block uninitialized)
- [#39976](https://github.com/vllm-project/vllm/issues/39976) [Bug]: In case chunked prefill is enabled and max-num-batched-tokens > max-model-length the server does not start up and fails
- [#39663](https://github.com/vllm-project/vllm/issues/39663) [Bug]: Online FP8 quantization drops bias weights, which breaks Qwen2 and other models with bias=True
- [#39958](https://github.com/vllm-project/vllm/issues/39958) [Bug]: 投机推理时，异步调度场景，将 -1 作为spec token 赋值给了 input_ids
- [#49699](https://github.com/vllm-project/vllm/issues/49699) [Performance]: Compile mode 3 degrades triton w4a16 kernel performance in few request scenarios.
- [#39815](https://github.com/vllm-project/vllm/issues/39815) [Bug]: Gemma4 LoRA adapters zeroed out
- [#54992](https://github.com/vllm-project/vllm/issues/54992) Spec-decode on pre-Hopper runs without CUDA graphs on FlashInfer (prefill path, no capture) — is a decode-path spec mask feasible for fa2?
- [#53227](https://github.com/vllm-project/vllm/issues/53227) [Bug]: DeepSeek V4 streaming tool calls leak DSML markup into arguments
- [#53498](https://github.com/vllm-project/vllm/issues/53498) SimpleCPUOffloadConnector (eager): stored blocks never registered in hash map (lookup always misses) + requests finish with ~44% of blocks never stored (TODO: flush on finish)
- [#54997](https://github.com/vllm-project/vllm/issues/54997) compressed-tensors NVFP4 weights produce 0% acceptance in the eagle/MTP drafter under CUDA-graph capture (works with --enforce-eager)

### SGLang (`sgl-project/sglang`)

**Stars:** 33,524 · **Open issues:** 5,086 · **Last push:** <1h ago

On September 3, 2026, there were no new releases for SGLang, but several noteworthy pull requests were merged. Notable updates include a fix to preserve FP32 in the SM107 MXFP8 fallback, the introduction of the SGLANG_CRASH_ON_JIT_COMPILE feature to prevent on-the-fly JIT compilation, and significant improvements in CUDA graph and speculative execution output handling. Additionally, the CI process saw enhancements with graceful teardown for the PD and HiSparse server fixtures. Among new issues, the most concerning is the reported CUDA illegal memory access during QSA prefill kernel operations at around 22 concurrent requests on H20 TP8, highlighting a critical stability concern that may require immediate attention.

#### ✅ Merged PRs
- [#37489](https://github.com/sgl-project/sglang/pull/37489) [Fix] Preserve FP32 in SM107 MXFP8 fallback
- [#36615](https://github.com/sgl-project/sglang/pull/36615) Add SGLANG_CRASH_ON_JIT_COMPILE to forbid on-the-fly JIT compilation
- [#37329](https://github.com/sgl-project/sglang/pull/37329) Improve CUDA graph and speculative execution output handling
- [#37485](https://github.com/sgl-project/sglang/pull/37485) [CI] Graceful teardown for the PD and HiSparse server fixtures
- [#37487](https://github.com/sgl-project/sglang/pull/37487) Temporarily Remove GLM-5.3 Flash decode CP support
- [#37330](https://github.com/sgl-project/sglang/pull/37330) Reduce tokenizer overhead and offload CUDA VMM publication
- [#37669](https://github.com/sgl-project/sglang/pull/37669) [Fix] Apply the attention-CP broadcast result in PP dynamic-chunk profiling
- [#37469](https://github.com/sgl-project/sglang/pull/37469) [bench] Support real-traffic replay with early-stop-aware steady-state metrics in bench_one_batch_server
- [#37576](https://github.com/sgl-project/sglang/pull/37576) [Docs] GLM-5.3-Flash cookbook: drop stale EP caveat, add B300/H100/B200 FP8 speed data
- [#36630](https://github.com/sgl-project/sglang/pull/36630) [Sampling] Capture masks from sampler support
- [#37550](https://github.com/sgl-project/sglang/pull/37550) Converge the two SWA predicates, and stop conditioning the capture sink on the pool
- [#37560](https://github.com/sgl-project/sglang/pull/37560) Fix unified SWA: size a non-owner's v2p by the id space it must address
- [#37512](https://github.com/sgl-project/sglang/pull/37512) Build the unified read stream directly, without the page-table rectangle
- [#37511](https://github.com/sgl-project/sglang/pull/37511) Size the unified read-table grid from bs, and fuse the allocator's tombstone scatters
- [#37146](https://github.com/sgl-project/sglang/pull/37146) [PD] Optimize paged allocator free-list release
- [#37672](https://github.com/sgl-project/sglang/pull/37672) [CI] Install lmms-eval from PyPI, drop human-eval install, add clone token fallback
- [#37522](https://github.com/sgl-project/sglang/pull/37522) [CI] Re-enable GB300 jobs
- [#37505](https://github.com/sgl-project/sglang/pull/37505) [Fix] DP attention: correct the decode->extend prefix off-by-one
- [#36752](https://github.com/sgl-project/sglang/pull/36752) [Spec] Publish the final multi-layer EAGLE shared-read event
- [#29927](https://github.com/sgl-project/sglang/pull/29927) [SM120] DeepSeek-V4: DeepGEMM paged-MQA indexer +FP4 MoE+ page-split
- [#37471](https://github.com/sgl-project/sglang/pull/37471) [Bugfix] Load Qwen3.5 MTP embedding under PP
- [#35546](https://github.com/sgl-project/sglang/pull/35546) [EAGLE] Prune draft-extend logits to selected rows
- [#36970](https://github.com/sgl-project/sglang/pull/36970) perf(gdn): select ReplaySSM verify loop unrolling by shape
- [#34874](https://github.com/sgl-project/sglang/pull/34874) [MoonEP] MXFP4 experts for Kimi K3 on the DeepGEMM runner in symmetric memory
- [#35368](https://github.com/sgl-project/sglang/pull/35368) Update GLM-5.2 NVFP4 B200/B300 for AgentX HiCache
- [#37483](https://github.com/sgl-project/sglang/pull/37483) fix(disagg): poll receivers during decode preallocation
- [#37657](https://github.com/sgl-project/sglang/pull/37657) [Bugfix] Key CUDA graph dedup signatures on kernel function identity
- [#36723](https://github.com/sgl-project/sglang/pull/36723) [mem_cache] Make `free_swa` sync-free on `page_size == 1`
- [#36407](https://github.com/sgl-project/sglang/pull/36407) Fix native MoE handling of noncontiguous top-k IDs
- [#37649](https://github.com/sgl-project/sglang/pull/37649) [RL] Flag the from_numpy sincos position tables as not weight-checked
- [#37647](https://github.com/sgl-project/sglang/pull/37647) [CI] Authenticate and retry git clones in install scripts
- [#37353](https://github.com/sgl-project/sglang/pull/37353) [AMD] Enable FP4 indexer for Deepseek V4
- [#36987](https://github.com/sgl-project/sglang/pull/36987) [Docs] Replace stale diffusion compatibility matrix
- [#37480](https://github.com/sgl-project/sglang/pull/37480) [diffusion] model: support FastH3 (4-step VSA-distilled MiniMax-H3) with a VSA-H3 attention backend
- [#37586](https://github.com/sgl-project/sglang/pull/37586) [AMD] Run ROCm 7.0 shadow tests every two days
- [#37509](https://github.com/sgl-project/sglang/pull/37509) [Fix] Lock PP dynamic-chunk profiling requests before releasing through the tree cache
- [#37209](https://github.com/sgl-project/sglang/pull/37209) Add polisettyvarma into CI_PERMISSION list
- [#37340](https://github.com/sgl-project/sglang/pull/37340) [XPU] Add Regular Docker Image Release workflow for Intel XPU
- [#37504](https://github.com/sgl-project/sglang/pull/37504) [CI] Install sgl-eval from PyPI through the test extra
- [#37566](https://github.com/sgl-project/sglang/pull/37566) fix: restore missing get_component_forced_attn_backend import in minimax_h3
- [#34893](https://github.com/sgl-project/sglang/pull/34893) [Diffusion] Add MiniMax H3 cube sparse attention
- [#37441](https://github.com/sgl-project/sglang/pull/37441) [Diffusion] Admit explicit attention backends by capability
- [#37343](https://github.com/sgl-project/sglang/pull/37343) Fix nondeterministic FlashInfer GDN alignment test
- [#37327](https://github.com/sgl-project/sglang/pull/37327) Rust server: align launcher and request validation behavior
- [#37274](https://github.com/sgl-project/sglang/pull/37274) Allow custom policy for adaptive speculative decoding
- [#36646](https://github.com/sgl-project/sglang/pull/36646) [misc] Resolve SWA ownership at enqueue time for grouped free()
- [#37481](https://github.com/sgl-project/sglang/pull/37481) [mem_cache] Split duplicate insert frees at the SWA eviction floor
- [#37494](https://github.com/sgl-project/sglang/pull/37494) [Bugfix] Skip absent radix lock during cache cleanup
- [#37477](https://github.com/sgl-project/sglang/pull/37477) [Kernel] GLM 5.3 Flash related kernels (ported from #36507)
- [#37529](https://github.com/sgl-project/sglang/pull/37529) update CODEOWNERS
- [#37335](https://github.com/sgl-project/sglang/pull/37335) [Fix ] Fix Spark2.5 hybrid SWA config
- [#35443](https://github.com/sgl-project/sglang/pull/35443) Fix reasoning metrics and add TPOT to bench_multiturn
- [#37518](https://github.com/sgl-project/sglang/pull/37518) [AMD][CI] Exclude unavailable MI355X nodes and skip 4N nightly
- [#37508](https://github.com/sgl-project/sglang/pull/37508) [CI] Preserve NCCL 2.30.7 after dependency installs
- [#37252](https://github.com/sgl-project/sglang/pull/37252) [CI] Batch CPU test workers
- [#37422](https://github.com/sgl-project/sglang/pull/37422) [Diffusion] Add cumulative extra-high quality tier
- [#32733](https://github.com/sgl-project/sglang/pull/32733) [CPU] Support FP8 KV cache
- [#37230](https://github.com/sgl-project/sglang/pull/37230) [XPU][CI] Enable nightly-xpu-8-gpu suite: declare + wire runner job
- [#37297](https://github.com/sgl-project/sglang/pull/37297) [Bugfix] Avoid scanning crash-dump token buffers during GC
- [#36824](https://github.com/sgl-project/sglang/pull/36824) [Diffusion] Remove component loader capability switches

#### 🐛 New Issues
- [#37524](https://github.com/sgl-project/sglang/issues/37524) GLM-5.3-Flash bug tracking `bug` `GLM`
- [#37633](https://github.com/sgl-project/sglang/issues/37633) [Bug] QSA prefill kernel CUDA illegal memory access at ~22 concurrent requests on H20 TP8 (Qwen3.8-Flash-Next-FP8) 💬2
- [#37519](https://github.com/sgl-project/sglang/issues/37519) [Roadmap][Feature] Support T-Head PPU 💬2
- [#37559](https://github.com/sgl-project/sglang/issues/37559) [Bug] CUDA_ERROR_ILLEGAL_ADDRESS crash with --moe-a2a-backend megamoe on B300 (SM100) after sgl-deep-gemm 0.1.7 bump 💬2
- [#37554](https://github.com/sgl-project/sglang/issues/37554) Gateway: a worker whose metadata discovery failed is permanently registered as model_id "unknown" under IGW 💬2
- [#37609](https://github.com/sgl-project/sglang/issues/37609) [Bug] Spark2.5 MLP uses tanh-approximate GELU instead of reference GELU 💬1
- [#37579](https://github.com/sgl-project/sglang/issues/37579) [Bug] GLM-V (glm4v processor): stray multimodal placeholder strings in message text cause 500 "Mismatch: More IMAGE tokens found than corresponding data provided" 💬1
- [#37652](https://github.com/sgl-project/sglang/issues/37652) [Bug] `force_nonempty_content`: the answer stays stranded in reasoning_content when there's a single trailing space
- [#37650](https://github.com/sgl-project/sglang/issues/37650) [Bug] `HarmonyParser` never flushes
- [#37648](https://github.com/sgl-project/sglang/issues/37648) [Bug][ROCm] GLM-5.3-MXFP4 TP8 + EAGLE GPU memory fault under high-concurrency long-context load
- [#37646](https://github.com/sgl-project/sglang/issues/37646) [Bug] --enable-flashinfer-pure-allreduce is not available on 0.5.18
- [#37645](https://github.com/sgl-project/sglang/issues/37645) [Bug] glm45 reasoning parser returns the whole answer as reasoning_content (content empty) when the model skips thinking and stops on EOS
- [#37640](https://github.com/sgl-project/sglang/issues/37640) [Bug] sgl_kernel ships infllm_ops as a cp310-tagged extension inside an abi3 wheel: unimportable on Python != 3.10, and it carries no sm_121 code
- [#37639](https://github.com/sgl-project/sglang/issues/37639) [Bug] Spark2.5 attention output gate hardcodes sigmoid, ignores config gate_attn_act_mode
- [#37634](https://github.com/sgl-project/sglang/issues/37634) [Bug] 9 tool-call parsers drop arguments when one streaming increment has more than one complete call
- [#37608](https://github.com/sgl-project/sglang/issues/37608) [Bug] --tool-call-parser auto selects glm45 instead of spark25 for Spark-X2.5
- [#37606](https://github.com/sgl-project/sglang/issues/37606) [Bug] Prefill breakable CUDA graph reuses weak-ref'd break inputs across buckets → wrong greedy output / IMA; e2e validation of #37448
- [#37585](https://github.com/sgl-project/sglang/issues/37585) [Bug] GLM-5.3-Flash TP8 EAGLE target verify fails after MLP-sync token padding `bug`
- [#37590](https://github.com/sgl-project/sglang/issues/37590) [Bug] DP-attention scheduler crashes (NoneType len) when attn_tp_size>1 and attn_cp_size>1: request-broadcast source rank has work_reqs=None
- [#37561](https://github.com/sgl-project/sglang/issues/37561) [Bug] Kimi-K3 multi-node MegaMoE sparse-DP prefill CUDA graph deadlocks after PR #33871
- [#37553](https://github.com/sgl-project/sglang/issues/37553) custom_mask grows unbounded via torch.cat in EAGLE/DFlash speculative decoding
- [#37548](https://github.com/sgl-project/sglang/issues/37548) [GLM-5.3-Flash] NextN/MTP crashes on the first request: Glm5NextForConditionalGenerationNextN inherits DeepSeek's draft forward, embedding gather goes out of bounds at TP8
- [#37526](https://github.com/sgl-project/sglang/issues/37526) [CI] Test Escape Report: /rerun-test did not enforce registered test __main__ validation `nvidia`

#### 🔒 Closed Issues
- [#21774](https://github.com/sgl-project/sglang/issues/21774) [Bug] ROCm release & nightly images doesn't work with Thor-2 NIC
- [#28420](https://github.com/sgl-project/sglang/issues/28420) [RFC] Migrate UnifiedRadixCache logical backbone to Rust
- [#36018](https://github.com/sgl-project/sglang/issues/36018) [Bug] Kimi-K3 crash in v0.5.18 release
- [#36550](https://github.com/sgl-project/sglang/issues/36550) [Bug] GLM-5.3-Flash (glm5_next): worker abort (CUDA error in graph-replay context) at first decode token after cold prefill > 262144 tokens
- [#30082](https://github.com/sgl-project/sglang/issues/30082) [Bug] The performance of deepseekv4 failed to pass the test on the main branch
- [#32960](https://github.com/sgl-project/sglang/issues/32960) [Bug] Kimi-K3: a literal <|kimi_image_placeholder|> in message text returns 400 "More image placeholders than image prompts."
- [#37634](https://github.com/sgl-project/sglang/issues/37634) [Bug] 9 tool-call parsers drop arguments when one streaming increment has more than one complete call
- [#35438](https://github.com/sgl-project/sglang/issues/35438) [Bug] bench_multiturn ignores reasoning output and does not report TPOT

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 126,817 · **Open issues:** 2,382 · **Last push:** <1h ago

On September 3, 2026, llama.cpp saw several key updates, notably the release of version b10772, which added F16 support for unary operations in the ggml-hexagon backend, enhancing its computational capabilities. Additionally, version b10771 introduced the `mtmd_tokenize_from_parts()` function, while b10770 implemented fa-vec tunings for M3. The day also featured several important fixes, including addressing low-memory conditions in the metal backend and enhancing the server's ability to accept data URLs for inputs. However, new issues have emerged, notably #28234, which reports a compile bug related to Vulkan builds on Termux that fails to optimize shaders, highlighting ongoing challenges in optimizing the system across various platforms.

#### 🚀 New Releases
- [b10772](https://github.com/ggml-org/llama.cpp/releases/tag/b10772) b10772
- [b10771](https://github.com/ggml-org/llama.cpp/releases/tag/b10771) b10771
- [b10770](https://github.com/ggml-org/llama.cpp/releases/tag/b10770) b10770
- [b10769](https://github.com/ggml-org/llama.cpp/releases/tag/b10769) b10769
- [b10767](https://github.com/ggml-org/llama.cpp/releases/tag/b10767) b10767
- [b10766](https://github.com/ggml-org/llama.cpp/releases/tag/b10766) b10766
- [b10764](https://github.com/ggml-org/llama.cpp/releases/tag/b10764) b10764
- [b10763](https://github.com/ggml-org/llama.cpp/releases/tag/b10763) b10763
- [b10762](https://github.com/ggml-org/llama.cpp/releases/tag/b10762) b10762
- [b10760](https://github.com/ggml-org/llama.cpp/releases/tag/b10760) b10760

#### ✅ Merged PRs
- [#28273](https://github.com/ggml-org/llama.cpp/pull/28273) mtmd: fix idefics3 preproc
- [#27199](https://github.com/ggml-org/llama.cpp/pull/27199) finetune: fix no KV cache
- [#27701](https://github.com/ggml-org/llama.cpp/pull/27701) metal : fix memory query under low-memory conditions
- [#27735](https://github.com/ggml-org/llama.cpp/pull/27735) server : accept data: URLs for input_video and input_audio
- [#28228](https://github.com/ggml-org/llama.cpp/pull/28228) ggml-hexagon: add F16 support for unary ops
- [#28258](https://github.com/ggml-org/llama.cpp/pull/28258) ci : enable hf-jobs on self-hosted server-cuda
- [#28250](https://github.com/ggml-org/llama.cpp/pull/28250) mtmd: add mtmd_tokenize_from_parts()
- [#28133](https://github.com/ggml-org/llama.cpp/pull/28133) mtmd: support DeepSeek-V4-Flash-Vision-Exp
- [#28174](https://github.com/ggml-org/llama.cpp/pull/28174) common, server : enable preserve_reasoning kwarg by default, log its effective state
- [#28236](https://github.com/ggml-org/llama.cpp/pull/28236) addition of m3 in fa_vec_tuned_table
- [#27884](https://github.com/ggml-org/llama.cpp/pull/27884) ci : check for missing autoreleasepools
- [#27803](https://github.com/ggml-org/llama.cpp/pull/27803) Update ROCm to 10.0.0 release
- [#28154](https://github.com/ggml-org/llama.cpp/pull/28154) model: correctly support input vision for deepseek4
- [#28235](https://github.com/ggml-org/llama.cpp/pull/28235) ggml-cuda : remove unused vars
- [#27970](https://github.com/ggml-org/llama.cpp/pull/27970) CUDA + ggml: add sparse-fa for DSV4/GLM
- [#28231](https://github.com/ggml-org/llama.cpp/pull/28231) MTMD: Fix Qwen3-tts-0.6b
- [#28155](https://github.com/ggml-org/llama.cpp/pull/28155) Only request `VK_KHR_shader_bfloat16` extension if supported
- [#27891](https://github.com/ggml-org/llama.cpp/pull/27891) ggml: avoid KleidiAI init mutex on dispatch (#27078)
- [#28202](https://github.com/ggml-org/llama.cpp/pull/28202) hexagon: MUL_MAT and MUL_MAT_ID fusion and fixes
- [#27449](https://github.com/ggml-org/llama.cpp/pull/27449) vulkan: handle larger batch sizes (>4) efficiently for IQ3_S mat-vec …
- [#27961](https://github.com/ggml-org/llama.cpp/pull/27961) ggml-cpu : conditionally add SpacemiT IME kernel sources
- [#27632](https://github.com/ggml-org/llama.cpp/pull/27632) opencl: fix out‐of‐contract reads in the Adreno image kernels
- [#28217](https://github.com/ggml-org/llama.cpp/pull/28217) hexagon: add missing FARF logs for cpy/get_rows/set_rows/gdn ops

#### 🐛 New Issues
- [#28234](https://github.com/ggml-org/llama.cpp/issues/28234) Compile bug: Vulkan builds on Termux fail to optimize shaders. `bug-unconfirmed` 💬3
- [#28220](https://github.com/ggml-org/llama.cpp/issues/28220) spec: ~20x slowdown of speculative decoding when tensor split is user-provided or built with MSVC (500 ms/token stepping) 💬2
- [#28239](https://github.com/ggml-org/llama.cpp/issues/28239) [SYCL]Sysman free-memory query may be unavailable `bug-unconfirmed` 💬1
- [#28218](https://github.com/ggml-org/llama.cpp/issues/28218) spec: ~20x slowdown of speculative decoding when tensor split is user-provided or built with MSVC (500 ms/token stepping) 💬1
- [#28230](https://github.com/ggml-org/llama.cpp/issues/28230) Eval bug: mtmd_helper_bitmap_init_from_buf: failed to decode webp buffer `bug-unconfirmed` 💬1
- [#28224](https://github.com/ggml-org/llama.cpp/issues/28224) Compile bug: Microsoft Defender detects Trojan:Win32/Wacatac.B!ml in Windows llama.cpp binaries `bug-unconfirmed` 💬1
- [#28219](https://github.com/ggml-org/llama.cpp/issues/28219) spec: ~20x slowdown of speculative decoding when tensor split is user-provided or built with MSVC (500 ms/token stepping) 💬1
- [#28286](https://github.com/ggml-org/llama.cpp/issues/28286) Eval bug: draft-mtp + --parallel > 1 causes cross-slot content contamination (not HIP-graphs related)
- [#28282](https://github.com/ggml-org/llama.cpp/issues/28282) Misc. bug: CUDA illegal memory access on GLM-5.3-Flash (glm5next) long prefill at -ub 2048 (Blackwell/sm_120) `bug-unconfirmed`
- [#28281](https://github.com/ggml-org/llama.cpp/issues/28281) Bug: s390x ggml_vec_dot_q5_1_q8_1 reads an uninitialised accumulator
- [#28280](https://github.com/ggml-org/llama.cpp/issues/28280) server: hybrid-model slot livelocks on "erasing old context checkpoint" at the same position (qwen4exp, Vulkan, b10731)
- [#28276](https://github.com/ggml-org/llama.cpp/issues/28276) Misc. bug: a restored slot state prevents the prompt cache lookup, so a longer cached state is never found `bug-unconfirmed`
- [#28275](https://github.com/ggml-org/llama.cpp/issues/28275) docker: no SemVer tags / release builds missing
- [#28274](https://github.com/ggml-org/llama.cpp/issues/28274) Misc. bug: Llama Server bad CUDA build performance NVIDIA driver 610.88 with RTX 5080 `bug-unconfirmed`
- [#28266](https://github.com/ggml-org/llama.cpp/issues/28266) qwen4exp (Qwen3.8-Flash-Next): streaming multi-turn generation collapses to 1-5 tokens after ~2-8K accumulated tokens, HIP/gfx1100, non-deterministic onset
- [#28264](https://github.com/ggml-org/llama.cpp/issues/28264) Kimi-K3 vision: support mmproj projector type kimik3 (MoonViT-3d)
- [#28260](https://github.com/ggml-org/llama.cpp/issues/28260) Misc. bug: --ui-config-file requires to click "Reset to default" in settings to apply values `bug-unconfirmed`
- [#28255](https://github.com/ggml-org/llama.cpp/issues/28255) Eval bug: Missing documentation howto setup a draft model via ENVvar `bug-unconfirmed`
- [#28256](https://github.com/ggml-org/llama.cpp/issues/28256) Pathological reads on N-gram embedding model
- [#28252](https://github.com/ggml-org/llama.cpp/issues/28252) Whole-host hard lock during MTP draft catch-up prefill on multi-GPU tensor-split (b9745+)
- [#28251](https://github.com/ggml-org/llama.cpp/issues/28251) Eval bug: MoE models crashes llama with CUDA Error on first or second prompt. `bug-unconfirmed`
- [#28249](https://github.com/ggml-org/llama.cpp/issues/28249) wiring up jinja input marking
- [#28247](https://github.com/ggml-org/llama.cpp/issues/28247) Eval bug: [Vulkan] GGML_ASSERT(wg0 <= ctx->device->properties.limits.maxComputeWorkGroupCount on Intel Arc A770 when running Qwen 3.8 flash next `bug-unconfirmed`
- [#28241](https://github.com/ggml-org/llama.cpp/issues/28241) Eval bug: CUDA "illegal memory access" with -cmoe on Turing (sm_75) at exactly 94 prompt tokens `bug-unconfirmed`

#### 🔒 Closed Issues
- [#27021](https://github.com/ggml-org/llama.cpp/issues/27021) ROCm: TOP_K crashes with "invalid configuration argument" when ncols > 1024 (bitonic kernel block-size overflow; blocks DeepSeek V4 ctx > 128K)
- [#24438](https://github.com/ggml-org/llama.cpp/issues/24438) Misc. bug: ROCm/HIP backend achieves only ~40% of memory bandwidth on gfx1151 (Strix Halo) for MoE token generation
- [#25833](https://github.com/ggml-org/llama.cpp/issues/25833) Eval bug: b10063cannot run model https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf
- [#24382](https://github.com/ggml-org/llama.cpp/issues/24382) Eval bug: Special Token Injection
- [#28220](https://github.com/ggml-org/llama.cpp/issues/28220) spec: ~20x slowdown of speculative decoding when tensor split is user-provided or built with MSVC (500 ms/token stepping)
- [#28224](https://github.com/ggml-org/llama.cpp/issues/28224) Compile bug: Microsoft Defender detects Trojan:Win32/Wacatac.B!ml in Windows llama.cpp binaries
- [#28219](https://github.com/ggml-org/llama.cpp/issues/28219) spec: ~20x slowdown of speculative decoding when tensor split is user-provided or built with MSVC (500 ms/token stepping)
- [#25857](https://github.com/ggml-org/llama.cpp/issues/25857) qwen35moe Bug Report for llama.cpp
- [#25858](https://github.com/ggml-org/llama.cpp/issues/25858) test-quantize-fns: scratch buffers assume <=2 bytes/element, overflow for a wider vec_dot_type
- [#25866](https://github.com/ggml-org/llama.cpp/issues/25866) Metal: MTLDispatchTypeConcurrent dependency-tracking race on GCN/Vega (wave64) discrete GPUs — corrupted output and hard command-buffer failures
- [#27078](https://github.com/ggml-org/llama.cpp/issues/27078) Eval bug: KleidiAI dotprod GEMV ~3x slower than CPU repack for token generation on Apple M1 Max (Q4_0), while winning on Neoverse N1/N2 — no runtime escape when both compiled in
- [#28161](https://github.com/ggml-org/llama.cpp/issues/28161) Eval bug: `VK_KHR_shader_bfloat16` is requested even when unsupported

### Ollama (`ollama/ollama`)

**Stars:** 180,001 · **Open issues:** 3,882 · **Last push:** 2h ago

On September 3, 2026, Ollama did not see any new releases, but several important features and fixes were merged into the codebase. Notably, PR #18079 introduced image and audio input capabilities into the MLX engine, enhancing its functionality. Additionally, PR #18052 improved error handling by checking every fallible mlx-c call in the MLX bindings. The team also addressed a unit test issue in PR #18203 related to mtp_test, and performed a version bump for llama.cpp with PR #18199. Among new issues, #18195 raised a request for support of the `spark2_5` architecture, indicating growing interest in expanding compatibility for the platform.

#### ✅ Merged PRs
- [#18079](https://github.com/ollama/ollama/pull/18079) gemma4: image and audio input on the MLX engine
- [#18052](https://github.com/ollama/ollama/pull/18052) mlxrunner: check every fallible mlx-c call in the MLX bindings
- [#18203](https://github.com/ollama/ollama/pull/18203) mlx: fix mtp_test unit test
- [#18199](https://github.com/ollama/ollama/pull/18199) llama.cpp: version bump b10760
- [#17943](https://github.com/ollama/ollama/pull/17943) Report cached prompt tokens

#### 🐛 New Issues
- [#18195](https://github.com/ollama/ollama/issues/18195) Support `spark2_5` architecture (Spark-X2.5-4B / 1.7B) `model` 💬1
- [#18193](https://github.com/ollama/ollama/issues/18193) [Cloud] glm-5.3 can enter endless reasoning and eventually abort tasks in both OpenCode and ZCode, while official Z.AI works normally `bug` 💬2
- [#18190](https://github.com/ollama/ollama/issues/18190) GLM 5.3-Flash:Cloud `cloud`
- [#18188](https://github.com/ollama/ollama/issues/18188) "Restart Claude Desktop" in Ollama Apps never actually restarts the app — toggle silently reverts, no gateway config written `bug`

#### 🔒 Closed Issues
- [#17065](https://github.com/ollama/ollama/issues/17065) Ollama MLX vision models (tested with Gemma 4 12B and Qwen3.5 4B) do not appear to receive image input
- [#8008](https://github.com/ollama/ollama/issues/8008) Return prompt cache utilization on completion responses
- [#16700](https://github.com/ollama/ollama/issues/16700) gemma4 mlx capabilities

### LiteLLM (`BerriAI/litellm`)

**Stars:** 57,856 · **Open issues:** 4,883 · **Last push:** <1h ago

On September 3, 2026, LiteLLM released two new Docker-only versions, v1.99.1 and v1.97.1, which are available as container images but do not include PyPI packages. Significant merged features included the addition of a hybrid classifier that defers near tier boundaries and updates to the SSO verification process. Several important fixes were also implemented, addressing issues such as max_parallel_requests consuming RPM quota regardless of rejections and ensuring that HTTP(S)_PROXY settings are honored when using force_ipv4 with the httpx transport. Notably, a new bug reported in issue #39310 highlighted rendering issues with the Z.AI provider's credential form fields, drawing immediate attention from the community.

#### 🚀 New Releases
- [v1.99.1](https://github.com/BerriAI/litellm/releases/tag/v1.99.1) v1.99.1
- [v1.97.1](https://github.com/BerriAI/litellm/releases/tag/v1.97.1) v1.97.1

#### ✅ Merged PRs
- [#39257](https://github.com/BerriAI/litellm/pull/39257) fix(ui): paginate request logs by session groups server-side
- [#39428](https://github.com/BerriAI/litellm/pull/39428) feat(cli): pre-fill the SSO verification code in the browser when the proxy allows it
- [#35398](https://github.com/BerriAI/litellm/pull/35398) fix(mcp): fence an outbound-token write against an overlapping invalidation
- [#38131](https://github.com/BerriAI/litellm/pull/38131) fix(responses): keep provider response headers in streaming logging callbacks
- [#39447](https://github.com/BerriAI/litellm/pull/39447) fix(mcp): gate the connect-time OBO pre-flight on the key's allowed servers
- [#39317](https://github.com/BerriAI/litellm/pull/39317) fix(guardrails): forward mode and streaming params to crowdstrike_aidr handler
- [#39380](https://github.com/BerriAI/litellm/pull/39380) fix(proxy): stop leaking internal exception details to clients
- [#39443](https://github.com/BerriAI/litellm/pull/39443) fix(http_handler): honor HTTP(S)_PROXY / NO_PROXY when force_ipv4 uses the httpx transport
- [#39442](https://github.com/BerriAI/litellm/pull/39442) test(e2e/ui): give the seeded users passwords that pass the default password policy
- [#38936](https://github.com/BerriAI/litellm/pull/38936) fix(vector-store): resolve embedding credentials per request
- [#39366](https://github.com/BerriAI/litellm/pull/39366) fix(responses): keep namespace tools intact when a guardrail returns them unchanged
- [#39239](https://github.com/BerriAI/litellm/pull/39239) fix(router): route Claude Code subagents through session router
- [#39010](https://github.com/BerriAI/litellm/pull/39010) fix(ollama_chat): stamp finish_reason tool_calls when tool calls streamed before the done chunk
- [#39403](https://github.com/BerriAI/litellm/pull/39403) feat(router): add a hybrid classifier that defers near tier boundaries
- [#39187](https://github.com/BerriAI/litellm/pull/39187) fix: recover the v2 migration resolver from concurrent migrate deploy deadlocks
- [#39362](https://github.com/BerriAI/litellm/pull/39362) fix(bedrock_mantle): carry per-request AWS credentials into chat completions SigV4 signing
- [#39355](https://github.com/BerriAI/litellm/pull/39355) fix(messages): drop cache_control ttl on non-Anthropic /v1/messages passthrough
- [#39363](https://github.com/BerriAI/litellm/pull/39363) fix(hosted_vllm): forward truncate_prompt_tokens on rerank requests
- [#38791](https://github.com/BerriAI/litellm/pull/38791) fix(mcp): cap tools preview and test-connection at the listing timeout and name the unreachable upstream
- [#39091](https://github.com/BerriAI/litellm/pull/39091) chore(techdebt): clear fresh debt from the 2026-08-31 and 2026-09-01 windows
- [#35967](https://github.com/BerriAI/litellm/pull/35967) fix(bedrock): strip client_metadata from converse additionalModelRequestFields
- [#39364](https://github.com/BerriAI/litellm/pull/39364) fix(bedrock): honor BEDROCK_MANTLE_API_BASE on bedrock/mantle messages and chat URLs
- [#39391](https://github.com/BerriAI/litellm/pull/39391) fix(proxy): mark session/SSO/SAML cookies Secure behind a TLS-terminating reverse proxy
- [#39159](https://github.com/BerriAI/litellm/pull/39159) fix(anthropic): upgrade legacy thinking to adaptive on adaptive-only Claude models for chat, Bedrock Converse, Invoke, Vertex AI, and Databricks
- [#39276](https://github.com/BerriAI/litellm/pull/39276) feat(router): add heuristic v2 complexity routing
- [#39334](https://github.com/BerriAI/litellm/pull/39334) feat(python): unify Rust opt-in and bridge policy
- [#39333](https://github.com/BerriAI/litellm/pull/39333) refactor(python-bridge): declare sync and async routes once
- [#39332](https://github.com/BerriAI/litellm/pull/39332) fix(python-bridge): harden sync and async execution boundaries
- [#39031](https://github.com/BerriAI/litellm/pull/39031) refactor(python-bridge): split routes and add shared function tracing
- [#39420](https://github.com/BerriAI/litellm/pull/39420) test(bedrock): accept the router kwarg in the knowledge base search fake
- [#39378](https://github.com/BerriAI/litellm/pull/39378) test(proxy): verify NO_DOCS/NO_REDOC/NO_OPENAPI restrict every doc surface
- [#39423](https://github.com/BerriAI/litellm/pull/39423) feat(router): gate heuristic v2 to one admin slot
- [#39419](https://github.com/BerriAI/litellm/pull/39419) test: add interactive Rust Python parity harness
- [#39410](https://github.com/BerriAI/litellm/pull/39410) fix(proxy): build coordination Redis from REDIS_* env vars unconditionally
- [#39126](https://github.com/BerriAI/litellm/pull/39126) refactor(core): move audio transcription into core
- [#39417](https://github.com/BerriAI/litellm/pull/39417) feat(model_prices): add meta/muse-spark-1.3 and its contributor tier
- [#39293](https://github.com/BerriAI/litellm/pull/39293) fix(logging): redact credential query params from the uvicorn access log
- [#39404](https://github.com/BerriAI/litellm/pull/39404) feat(mcp): semantic tool search for the native MCP Gateway
- [#39260](https://github.com/BerriAI/litellm/pull/39260) refactor(utils): remove the dead get_api_key provider-key resolver
- [#39256](https://github.com/BerriAI/litellm/pull/39256) fix(proxy): word database 503s by whether the fault is transient
- [#39253](https://github.com/BerriAI/litellm/pull/39253) fix(proxy/db): keep prisma predicates from raising TypeError under a mocked prisma module
- [#39241](https://github.com/BerriAI/litellm/pull/39241) fix(spend): keep every-deployment scope on gateway cache-injection marks
- [#39271](https://github.com/BerriAI/litellm/pull/39271) fix(guardrails): track and tear down presidio sibling callbacks on delete and update
- [#39389](https://github.com/BerriAI/litellm/pull/39389) fix(agents): redact secret litellm_params fields from all /v1/agents responses
- [#39381](https://github.com/BerriAI/litellm/pull/39381) feat(auth): enforce configurable password policy and SSO-only login
- [#39379](https://github.com/BerriAI/litellm/pull/39379) fix(security): restrict and validate file uploads at /v1/files and /upload/logo
- [#39369](https://github.com/BerriAI/litellm/pull/39369) fix(otel): stamp Langfuse root observation input and output from the request task
- [#36811](https://github.com/BerriAI/litellm/pull/36811) fix(router): resolve realtime session model to routed deployment
- [#39396](https://github.com/BerriAI/litellm/pull/39396) feat(ui): update OpenAI preset model tiers
- [#39382](https://github.com/BerriAI/litellm/pull/39382) fix(ui): preserve full AgentCore runtime ARN in agent edit form
- [#39331](https://github.com/BerriAI/litellm/pull/39331) refactor(rust): standardize the core Error type
- [#39026](https://github.com/BerriAI/litellm/pull/39026) refactor(rust): extract domain-neutral Python interop
- [#39021](https://github.com/BerriAI/litellm/pull/39021) test(build): validate release wheel contracts
- [#39220](https://github.com/BerriAI/litellm/pull/39220) fix(proxy): route container create and list through model_list deployments
- [#39365](https://github.com/BerriAI/litellm/pull/39365) fix(proxy-extras): give prisma migrate deploy its own timeout budget
- [#39375](https://github.com/BerriAI/litellm/pull/39375) fix(proxy): share per-model budget counters across replicas through the spend counter cache
- [#39371](https://github.com/BerriAI/litellm/pull/39371) feat(agentcore-a2a): derive runtime session id from A2A message.contextId
- [#34788](https://github.com/BerriAI/litellm/pull/34788) fix(vector_stores): s3 vectors search router bypass + rag query config drop + ui error swallow
- [#38591](https://github.com/BerriAI/litellm/pull/38591) fix(headroom): stop re-compressing retrieved CCR content in client tool loops
- [#39188](https://github.com/BerriAI/litellm/pull/39188) fix(deps): raise the tornado and pypdf floors for six new advisories
- [#39341](https://github.com/BerriAI/litellm/pull/39341) fix(models): key Azure DeepSeek V4 Flash 0731 by its Foundry catalog id
- [#39249](https://github.com/BerriAI/litellm/pull/39249) fix: apply optional_pre_call_checks and reject unsupported router settings on /config/update
- [#39170](https://github.com/BerriAI/litellm/pull/39170) fix(models): registry audit 2026-09-01: openai realtime and long-context tiers, mistral aliases, voyage, xai, fireworks, together, scaleway, azure ai, govcloud, azure gov, cloudflare whisper, deprecation dates
- [#39128](https://github.com/BerriAI/litellm/pull/39128) fix: run access group key sync UPDATEs on the writer, not the read replica
- [#39176](https://github.com/BerriAI/litellm/pull/39176) fix(rerank): map provider errors with the resolved provider on sync and async paths
- [#39160](https://github.com/BerriAI/litellm/pull/39160) fix(gemini): return enabled thinking content by default
- [#35975](https://github.com/BerriAI/litellm/pull/35975) fix(helm): scale the classic chart's HPA out at the documented 60 percent CPU
- [#39238](https://github.com/BerriAI/litellm/pull/39238) feat(proxy): configurable display_name for the Anthropic-shaped /v1/models listing
- [#39246](https://github.com/BerriAI/litellm/pull/39246) test(e2e): read JUnit properties off the real collected pytest Item
- [#39069](https://github.com/BerriAI/litellm/pull/39069) feat(streaming): carry final response cost on streamed usage by default
- [#39194](https://github.com/BerriAI/litellm/pull/39194) fix(vertex): avoid duplicate DeepSeek OCR model namespace
- [#39340](https://github.com/BerriAI/litellm/pull/39340) feat(gemini): day-0 pricing for gemini-3.8-flash
- [#39297](https://github.com/BerriAI/litellm/pull/39297) fix(guardrails): run apply_guardrail-only providers in logging_only mode
- [#39291](https://github.com/BerriAI/litellm/pull/39291) fix(docker): install saml extra in litellm-backend image
- [#39161](https://github.com/BerriAI/litellm/pull/39161) feat(proxy): centralize Rust fallback and provenance
- [#39139](https://github.com/BerriAI/litellm/pull/39139) feat(python): unify Rust opt-in configuration
- [#39034](https://github.com/BerriAI/litellm/pull/39034) refactor(python-bridge): declare sync and async routes once
- [#39263](https://github.com/BerriAI/litellm/pull/39263) fix(python-bridge): harden sync and async route boundaries
- [#39127](https://github.com/BerriAI/litellm/pull/39127) refactor(rust): standardize the core Error type
- [#39233](https://github.com/BerriAI/litellm/pull/39233) fix(policy_engine): apply post_call pipeline text rewrites on streams
- [#39166](https://github.com/BerriAI/litellm/pull/39166) fix(bedrock): stop Converse crashing on bearer-token auth without SigV4 credentials
- [#37883](https://github.com/BerriAI/litellm/pull/37883) fix(search): forward search-tool params through the router, complete Parallel AI v1 param mapping
- [#39036](https://github.com/BerriAI/litellm/pull/39036) fix(guardrails): deliver modify_response block as valid SSE on streaming chat and Responses
- [#39231](https://github.com/BerriAI/litellm/pull/39231) feat(scim): add placeholder listing and merge so a shadowed account can be healed
- [#39216](https://github.com/BerriAI/litellm/pull/39216) fix(proxy): keep passthrough logging metadata and model_info dicts when team callbacks are wired
- [#39211](https://github.com/BerriAI/litellm/pull/39211) fix: stop deployment default API key limits leaking into provider requests
- [#39202](https://github.com/BerriAI/litellm/pull/39202) fix: normalize provider-specific cache token fields in OTel v2 usage
- [#39236](https://github.com/BerriAI/litellm/pull/39236) feat(prometheus): expose per-key and per-team rate limit allowed and used gauges
- [#39222](https://github.com/BerriAI/litellm/pull/39222) fix(datadog_llm_obs): send tool calls, tool results and cache tokens in DD's own fields
- [#39210](https://github.com/BerriAI/litellm/pull/39210) fix(bedrock): gate Converse cachePoint emission on model prompt caching support

#### 🐛 New Issues
- [#39310](https://github.com/BerriAI/litellm/issues/39310) [Bug]: Z.AI (Zhipu AI) provider now shows in dropdown but its credential/model form fields don't render `bug` `llm translation` `ui-dashboard` 💬1
- [#39290](https://github.com/BerriAI/litellm/issues/39290) [Bug]: OSV Scan Vulnerability `bug` `SDK` 💬1
- [#39309](https://github.com/BerriAI/litellm/issues/39309) [Bug]: Requests rejected by max_parallel_requests still consume RPM quota `bug` `proxy` 💬1
- [#39451](https://github.com/BerriAI/litellm/issues/39451) [Bug]: /v1/models omits mode for auto_router models even when set in model_info (max_input_tokens/max_output_tokens work fine) `llm translation` `claude code`
- [#39431](https://github.com/BerriAI/litellm/issues/39431) [Bug]: /v1/messages streaming delays message_start until the model's thinking pass finishes, even with no fallbacks configured `bug` `proxy` `llm translation`
- [#39394](https://github.com/BerriAI/litellm/issues/39394) [Bug]: /team/list omits a user's member teams in other orgs when they hold org_admin anywhere (_authorize_and_filter_teams if/elif)
- [#39385](https://github.com/BerriAI/litellm/issues/39385) [Bug]: per-callback turn_off_message_logging is ignored when a request fails, so opted-out logging destinations receive full prompts `proxy` `llm translation`
- [#39377](https://github.com/BerriAI/litellm/issues/39377) Request for maintainer review: pinned LiteLLM 1.99.0 conformance measurements `llm translation`
- [#39370](https://github.com/BerriAI/litellm/issues/39370) [Bug]: Reset-budget job never self-heals a budget_duration=null row with a stale budget_reset_at — spend is silently zeroed on every tick forever `bug` `proxy`
- [#39368](https://github.com/BerriAI/litellm/issues/39368) [Bug]: Team/user/key budget reset job silently defaults an unparseable budget_duration (e.g. "") to a daily reset `bug` `proxy`
- [#39367](https://github.com/BerriAI/litellm/issues/39367) [Bug]: Chart issues within Istio enabled set-up `bug`
- [#39359](https://github.com/BerriAI/litellm/issues/39359) [Feature]: Support timeout override for /mcp (per-route and per-request) `enhancement` `proxy`
- [#39354](https://github.com/BerriAI/litellm/issues/39354) [Bug]: Responses-to-Chat bridge keeps reasoning_effort dict when summary is set; strict OpenAI-compatible providers reject it (Codex CLI unusable) `llm translation`
- [#39353](https://github.com/BerriAI/litellm/issues/39353) [Bug]: gpt-5.4+ tools+reasoning bridge to /v1/responses doesn't recognize custom OpenAI api_base still backed by the real api.openai.com (e.g. PrivateLink) `llm translation`
- [#39342](https://github.com/BerriAI/litellm/issues/39342) [Bug]: Add baseten/zai-org/GLM-5.3 to the model pricing registry
- [#39339](https://github.com/BerriAI/litellm/issues/39339) [Bug]: OpenAI reasoning-model prompt cache never carries forward through /v1/messages → Responses API bridge (encrypted_content dropped, even after #37953) `proxy` `llm translation` `claude code`
- [#39322](https://github.com/BerriAI/litellm/issues/39322) [Bug]: least-busy starves deployments — response-cache hits drift the counter negative, ties always pick the first, and the counter isn't shared across workers `llm translation`
- [#39320](https://github.com/BerriAI/litellm/issues/39320) Datadog Observability - Cost & Auto-router - Follow-up request for PR #39222
- [#39319](https://github.com/BerriAI/litellm/issues/39319) Fix DualCache.batch_get_cache cross-event-loop Redis access
- [#39315](https://github.com/BerriAI/litellm/issues/39315) Email on key creation shows hashed token_id instead of plaintext key
- [#39313](https://github.com/BerriAI/litellm/issues/39313) [Bug]: image generation deployments with their own output_cost_per_image bill $0 or the map price `proxy`
- [#39312](https://github.com/BerriAI/litellm/issues/39312) [Feature]: Hello, may I ask if it is possible to add a context processing mechanism? `enhancement` `proxy`
- [#39284](https://github.com/BerriAI/litellm/issues/39284) [Feature]: 希望可以支持添加中文名称的模型 `enhancement` `docs`
- [#39283](https://github.com/BerriAI/litellm/issues/39283) IMP: Security Vulnerability submitted but no response
- [#39280](https://github.com/BerriAI/litellm/issues/39280) [Bug]: when an openai/<model> declares supports_reasoning=true in its model metadata, allow reasoning_effort and pass its value through unchanged. `bug` `llm translation` `ui-dashboard`
- [#39269](https://github.com/BerriAI/litellm/issues/39269) [Bug]: Bedrock Anthropic streaming fails in Claude Code with incomplete stream or internalServerException `llm translation` `claude code`
- [#39258](https://github.com/BerriAI/litellm/issues/39258) Error during LLM inference `llm translation`

#### 🔒 Closed Issues
- [#34530](https://github.com/BerriAI/litellm/issues/34530) [Bug]: osv-scan fails on every fork PR, gitpython 3.1.52 and postcss 8.5.13 need bumping
- [#38060](https://github.com/BerriAI/litellm/issues/38060) [Bug]: Paging counts messages instead of sessions in dashboard Logs view
- [#26784](https://github.com/BerriAI/litellm/issues/26784) [Bug] aresponses streaming on OpenAI emits Pydantic serializer warning: chat-completion Usage assigned to ResponseAPIUsage field
- [#19735](https://github.com/BerriAI/litellm/issues/19735) [Feature]: Include metadata for list_mcp_tools in StandardLoggingPayload
- [#24202](https://github.com/BerriAI/litellm/issues/24202) Missing eu./us. regional Bedrock model entries in model_prices_and_context_window.json
- [#28966](https://github.com/BerriAI/litellm/issues/28966) [Feature]: Model Retirement Tracking and Notifications in LiteLLM Dashboard
- [#14333](https://github.com/BerriAI/litellm/issues/14333) [Feature]: List access groups for each tool in /mcp-rest/tools/list
- [#18158](https://github.com/BerriAI/litellm/issues/18158) Document async_filter_deployments hook in CustomLogger for deployment filtering
- [#28935](https://github.com/BerriAI/litellm/issues/28935) [Bug]: dashboard request logs folded bug
- [#28940](https://github.com/BerriAI/litellm/issues/28940) [Feature]: Flexible configuration of context compression parameters for different models
- [#28977](https://github.com/BerriAI/litellm/issues/28977) Responses API response has wrong object field: "chat.completion" instead of "response"
- [#28995](https://github.com/BerriAI/litellm/issues/28995) [Bug]: API Error: 400 litellm.BadRequestError: OpenAIException - an assistant message with 'tool_calls' must be followed by tool messages responding to each 'tool_call_id'. The following tool_call_ids did not have response messages: Bash:0, Bash:1.
- [#34692](https://github.com/BerriAI/litellm/issues/34692) [Bug]: `ollama_chat` → Anthropic `/v1/messages` streaming sets `stop_reason: "end_turn"` (not `"tool_use"`) and emits a spurious empty leading text block when the turn contains a tool call
- [#29614](https://github.com/BerriAI/litellm/issues/29614) [Bug]: DATABASE_URL issue with prisma
- [#28927](https://github.com/BerriAI/litellm/issues/28927) [Bug]: MCP tool call with upstream isError:true is recorded as status:"success" — failures invisible to observability
- [#28928](https://github.com/BerriAI/litellm/issues/28928) [Bug]: MCP tool call HTTPException path leaves call_type empty and mcp_tool_call_metadata null
- [#28929](https://github.com/BerriAI/litellm/issues/28929) [Bug]: JSON-RPC protocol-level rejections on /mcp/ produce no standard_logging_object record
- [#28962](https://github.com/BerriAI/litellm/issues/28962) Gemini AI Studio 5xx responses leak as MaskedHTTPStatusError instead of ServiceUnavailableError (1.85.1)
- [#28978](https://github.com/BerriAI/litellm/issues/28978) Responses API: function_call not converted to tool_calls in mixed content assistant messages
- [#28979](https://github.com/BerriAI/litellm/issues/28979) [Bug]: /tag/daily/activity returns temporarily inflated spend causing false budget-exceeded detection
- [#28982](https://github.com/BerriAI/litellm/issues/28982) [Bug]: JSON repair utility breaks on tool call arguments ending inside a string or containing raw newlines
- [#28983](https://github.com/BerriAI/litellm/issues/28983) [Bug] POST /project/update with object_permission fails with 500 FieldNotFoundError
- [#32982](https://github.com/BerriAI/litellm/issues/32982) [Bug]: osv-scan fails on every external PR — soupsieve fix (#32643) has not propagated to litellm_oss_staging
- [#39290](https://github.com/BerriAI/litellm/issues/39290) [Bug]: OSV Scan Vulnerability
- [#36742](https://github.com/BerriAI/litellm/issues/36742) Realtime client_secrets: session.model silently overrides the Router's resolved model when using model groups/aliases
- [#39217](https://github.com/BerriAI/litellm/issues/39217) [Bug]: OSV Scan fails on fork PRs due to vulnerable pypdf and tornado locks
- [#39183](https://github.com/BerriAI/litellm/issues/39183) [Bug]: Codex CLI with Headroom on changes the name of MCP tools
- [#32973](https://github.com/BerriAI/litellm/issues/32973) [Bug]: legacy thinking={type:enabled, budget_tokens} not upgraded to adaptive on /chat/completions & Bedrock Converse for 4.6+ models (400), but works on /v1/messages
- [#38667](https://github.com/BerriAI/litellm/issues/38667) [Bug]: Key regenerate/update/delete fail with "cannot execute UPDATE in a read-only transaction" when DATABASE_URL_READ_REPLICA is set (access-group sync runs UPDATE via query_raw)
- [#38579](https://github.com/BerriAI/litellm/issues/38579) [Bug]: Bedrock bearer-token-only deployments fail /v1/chat/completions and /v1/responses with 'NoneType' object has no attribute 'access_key' since #37241
- [#35786](https://github.com/BerriAI/litellm/issues/35786) [Bug]: datadog_llm_observability callback: tool_calls and cache tokens sent in meta.metadata instead of their designated API fields (meta.output.messages[].tool_calls and span metrics)

### Unsloth (`unslothai/unsloth`)

**Stars:** 75,507 · **Open issues:** 1,387 · **Last push:** <1h ago

On September 3, 2026, Unsloth released v0.1.806-beta, enhancing the Qwen3.8-Flash and GLM-5.3-Flash models with MTP for up to 2x faster performance and incorporating 170+ improvements for training, chat, hardware, and overall performance, including smoother model loading and a more responsive UI with faster follow-up turns. Significant merged pull requests included enhancements to the Studio such as replaying web search results as initially sent, retaining typed content during chat shortening, and various fixes to improve functionality and security. Among new issues, the feature request for auto-loading audio models on demand was highlighted, reflecting ongoing development and user feedback.

#### 🚀 New Releases
- [v0.1.806-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.806-beta) 2x Faster Qwen3.8-Flash + GLM-5.3-Flash MTP
- [v0.1.805-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.805-beta) 2x Faster Qwen3.8-Flash + GLM-5.3-Flash MTP

#### ✅ Merged PRs
- [#10131](https://github.com/unslothai/unsloth/pull/10131) Studio: replay a web_search result the way the client sent it
- [#10101](https://github.com/unslothai/unsloth/pull/10101) Order the Ollama stop-token scan instead of leaving it to a set
- [#10165](https://github.com/unslothai/unsloth/pull/10165) Studio: keep what you typed with an image when a chat is shortened
- [#10096](https://github.com/unslothai/unsloth/pull/10096) Studio: stop generating when the client goes away
- [#10097](https://github.com/unslothai/unsloth/pull/10097) Add DeepSeek Harness to unsloth start
- [#10203](https://github.com/unslothai/unsloth/pull/10203) Bump install.sh / install.ps1 pin to unsloth>=2026.9.2
- [#10202](https://github.com/unslothai/unsloth/pull/10202) Publish only the wheel to PyPI, not the sdist
- [#10061](https://github.com/unslothai/unsloth/pull/10061) studio: find in page on Cmd/Ctrl+F
- [#10199](https://github.com/unslothai/unsloth/pull/10199) Versioning: 2026.9.2
- [#10198](https://github.com/unslothai/unsloth/pull/10198) Repin linuxdeploy-plugin-appimage after the 2026-09-01 upstream rebuild
- [#10195](https://github.com/unslothai/unsloth/pull/10195) Bump install.sh / install.ps1 pin to unsloth>=2026.9.1
- [#10192](https://github.com/unslothai/unsloth/pull/10192) Stop a localized Windows console from losing a child's whole output stream
- [#10152](https://github.com/unslothai/unsloth/pull/10152) Accept a multimodal processor in get_chat_template and construct_chat_template
- [#10181](https://github.com/unslothai/unsloth/pull/10181) Fix Studio preferring MTP sidecars over embedded heads
- [#10185](https://github.com/unslothai/unsloth/pull/10185) Fix the two stale source-text contract tests blocking every PR
- [#10186](https://github.com/unslothai/unsloth/pull/10186) Fix the frontend unit tests broken by a merge skew between #10161 and #10162
- [#10190](https://github.com/unslothai/unsloth/pull/10190) Stop the research cancellation tests failing on a busy CI runner
- [#10187](https://github.com/unslothai/unsloth/pull/10187) Security audit: re-approve fastmcp-slim 4.0.x and unsloth-zoo 2026.8.17
- [#10191](https://github.com/unslothai/unsloth/pull/10191) Update CODEOWNERS for current maintainers and code areas
- [#10112](https://github.com/unslothai/unsloth/pull/10112) Trim comments in studio/backend routes, utils and installers
- [#10175](https://github.com/unslothai/unsloth/pull/10175) Studio: align Run Settings and titlebar controls
- [#10167](https://github.com/unslothai/unsloth/pull/10167) Studio: fix OAuth sign-in for MCP servers like Notion
- [#10116](https://github.com/unslothai/unsloth/pull/10116) Trim comments in studio/backend core services and the unsloth package
- [#10115](https://github.com/unslothai/unsloth/pull/10115) Reflow comments in studio/backend/core/inference to 120 columns
- [#10118](https://github.com/unslothai/unsloth/pull/10118) Trim comments in the studiobench harness and unsloth_cli
- [#10064](https://github.com/unslothai/unsloth/pull/10064) Studio: test that a chat message keeps its identity (#9984)
- [#10117](https://github.com/unslothai/unsloth/pull/10117) Studio: show what changed in llama.cpp updates
- [#10166](https://github.com/unslothai/unsloth/pull/10166) Studio: stop Deep Research from throwing away a finished report
- [#10137](https://github.com/unslothai/unsloth/pull/10137) Stop the kwarg-spacing post-pass dying on Python 3.11
- [#10163](https://github.com/unslothai/unsloth/pull/10163) Studio: keep both branches when a chat's first message is edited
- [#10161](https://github.com/unslothai/unsloth/pull/10161) Studio: keep a reply's details when you edit its text
- [#10162](https://github.com/unslothai/unsloth/pull/10162) Studio: keep tool cards in place when you edit a reply
- [#10164](https://github.com/unslothai/unsloth/pull/10164) Studio: don't size attached documents by a local model on hosted chats
- [#5714](https://github.com/unslothai/unsloth/pull/5714) Studio: don't re-prompt after model produced a complete answer
- [#5696](https://github.com/unslothai/unsloth/pull/5696) studio: tighten MTP reload guards and asymmetric spec flags for #5582
- [#5787](https://github.com/unslothai/unsloth/pull/5787) Studio: dispatch on OpenAI agentic web_search action variants

#### 🐛 New Issues
- [#10207](https://github.com/unslothai/unsloth/issues/10207) [Feature] auto-load audio models on request as well `feature request` 💬1
- [#10227](https://github.com/unslothai/unsloth/issues/10227) [Bug] Custom model settings (context length, KV cache quantization) get ignored on model auto-load via api `feature request` `bug`
- [#10226](https://github.com/unslothai/unsloth/issues/10226) [Bug] Windows tool bar controls hidden by tooltips `feature request` `bug`
- [#10215](https://github.com/unslothai/unsloth/issues/10215) Deep research fails when using MLx models but works with GGUF models of the same family
- [#10208](https://github.com/unslothai/unsloth/issues/10208) [Feature] support audio-cpp / music generation `feature request`
- [#10211](https://github.com/unslothai/unsloth/issues/10211) Feature: Add Parallel's free authless Search MCP as a built-in web search option
- [#10193](https://github.com/unslothai/unsloth/issues/10193) [Studio] Keep install-time uv cache inside the Studio root `bug` `dependencies` `Studio`
- [#10173](https://github.com/unslothai/unsloth/issues/10173) `[Bug] llama.cpp prebuilt update fails on non-English Windows: nvidia-smi output decoded as UTF-8 → driver_cuda_version=None → "installer exited 2"`
- [#10178](https://github.com/unslothai/unsloth/issues/10178) Working with a repository - Add sandbox directory manually
- [#10177](https://github.com/unslothai/unsloth/issues/10177) C:/Program Files/Git/v1/responses reports a length-truncated answer as status completed
- [#10176](https://github.com/unslothai/unsloth/issues/10176) KV admission: the uncapped-cap exemption for tools is wider than the retry that motivates it
- [#10174](https://github.com/unslothai/unsloth/issues/10174) [Feature] How about bundling the runtime environment into the windows desktop installer? `feature request`

#### 🔒 Closed Issues
- [#3526](https://github.com/unslothai/unsloth/issues/3526) [Bug] ROCm hip_global.cpp Module Error.
- [#7380](https://github.com/unslothai/unsloth/issues/7380) [Bug] Strix Halo "llama-server crashed at startup on both the vision and text-only attempts -- a GPU driver/runtime initialization crash, not a model or vision-projector problem"
- [#8471](https://github.com/unslothai/unsloth/issues/8471) [Bug] Linux image APP Does not recognize AMD GPU.
- [#10170](https://github.com/unslothai/unsloth/issues/10170) [Bug] Please fill in your issue title here.
- [#10018](https://github.com/unslothai/unsloth/issues/10018) [Bug] Installer's Intel XPU Triton replacement fails silently, leaving triton-windows shadowing torch XPU Triton (setup.ps1:4717)`
- [#10130](https://github.com/unslothai/unsloth/issues/10130) [Bug] Run Settings UI and other UIs inconsistancy
- [#10173](https://github.com/unslothai/unsloth/issues/10173) `[Bug] llama.cpp prebuilt update fails on non-English Windows: nvidia-smi output decoded as UTF-8 → driver_cuda_version=None → "installer exited 2"`
- [#10146](https://github.com/unslothai/unsloth/issues/10146) [Bug] The tokenizer for Gemma4 doesn't have padding_side, error at get_chat_template.
- [#10169](https://github.com/unslothai/unsloth/issues/10169) [Bug] Studio passes repo-root mtp-*.gguf as --model-draft when the main GGUF embeds MTP
- [#10141](https://github.com/unslothai/unsloth/issues/10141) [Bug] Notion MCP OAuth token exchange fails with 401 "Client must not use multiple authentication methods"

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,053 · **Open issues:** 384 · **Last push:** 5h ago

On September 3, 2026, AIBrix did not release any new versions, but it saw significant activity with several merged pull requests. Key bug fixes included a solution to allow resumable downloads after failures when loading model adapters (#2029) and a fast-fail mechanism for direct-path LoRA adapters using S3/GCS/TOS URLs (#2654). Additionally, the team addressed issues with spurious malformed JSON errors (#2653) and fixed benchmark prompts that were exceeding target token lengths (#2655). A noteworthy feature was the consumption of the StormService `spec.mode` in the controller update path and PodAutoscaler (#2617). Furthermore, a new issue was raised regarding the auto-generation of batch job template configurations (#2650), highlighting ongoing enhancements in batch processing capabilities.

#### ✅ Merged PRs
- [#2029](https://github.com/vllm-project/aibrix/pull/2029) [Bug] Allows for resumable downloads after a failure when loading model adapters.
- [#2654](https://github.com/vllm-project/aibrix/pull/2654) [Bug] Fail fast when direct-path LoRA adapter uses s3/gcs/tos URL
- [#2653](https://github.com/vllm-project/aibrix/pull/2653) [Bug] Fix spurious malformed JSON errors on split SSE chunks
- [#2655](https://github.com/vllm-project/aibrix/pull/2655) [Bug] Fix benchmark prompts silently exceeding target token length
- [#2617](https://github.com/vllm-project/aibrix/pull/2617) [Feat] Consume StormService spec.mode in the controller update path and PodAutoscaler

#### 🐛 New Issues
- [#2650](https://github.com/vllm-project/aibrix/issues/2650) [Batch] Auto-generate batch job template configs 💬2

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,506 · **Open issues:** 427 · **Last push:** <1h ago

On September 3, 2026, there were no new releases for Semantic Router, but several notable merged pull requests marked the day. Among these, PR #3322 introduced a single evaluation pass for resolving on_error, while PR #3304 addressed a bug preventing previous_response_id continuations from inheriting conversation_id membership. Additionally, PR #3250 added a route action designed for prompt attack decisions, enhancing functionality in response handling. However, the emergence of issue #3333 raised concerns, as it reported that response jailbreak detection only scanned the first chunk and incorrectly assessed thresholds, highlighting a critical area for future attention and resolution.

#### ✅ Merged PRs
- [#3304](https://github.com/vllm-project/semantic-router/pull/3304) [Bug] Stop previous_response_id continuations from inheriting conversation_id membership
- [#3330](https://github.com/vllm-project/semantic-router/pull/3330) [CI/Build] Preserve validation for every main push
- [#3322](https://github.com/vllm-project/semantic-router/pull/3322) [Feature] Resolve on_error in a single evaluation pass
- [#3314](https://github.com/vllm-project/semantic-router/pull/3314) [Bug] Surface backend capability mismatch as a typed protocol error
- [#3327](https://github.com/vllm-project/semantic-router/pull/3327) [Bug] Pin CentOS base image to a resolvable stream10 digest with shell and dnf
- [#3361](https://github.com/vllm-project/semantic-router/pull/3361) [Community] Update Workgroup roster · 2026-09-02
- [#3264](https://github.com/vllm-project/semantic-router/pull/3264) [Test] Add local soak baseline harness
- [#3321](https://github.com/vllm-project/semantic-router/pull/3321) [Bug] Honor configured llm_timeout_seconds in VLLMClient HTTP timeout
- [#3301](https://github.com/vllm-project/semantic-router/pull/3301) [CI/Build] Unify Kind bootstrap for Operator and E2E
- [#3250](https://github.com/vllm-project/semantic-router/pull/3250) [Feature] Add route action for prompt attack decisions

#### 🐛 New Issues
- [#3333](https://github.com/vllm-project/semantic-router/issues/3333) [Bug] Response jailbreak detection scans only the first chunk and thresholds the wrong score `bug` `accepted` `wg/router-models-inference-runtime` 💬7
- [#3331](https://github.com/vllm-project/semantic-router/issues/3331) [Bug] Byte-replay bypasses forced include_usage; streamed usage goes unrecorded `bug` `accepted` `wg/data-plane-networking` 💬4
- [#3375](https://github.com/vllm-project/semantic-router/issues/3375) [Feature] Define Fusion quorum-failure fallback policies `enhancement` `accepted` `wg/mom-routing` 💬3
- [#3349](https://github.com/vllm-project/semantic-router/issues/3349) [Feature] Export provider prompt-cache read and write token metrics `enhancement` `accepted` `wg/data-plane-networking` 💬3
- [#3343](https://github.com/vllm-project/semantic-router/issues/3343) [Feature] Reset eligible history safely on topic change `enhancement` `accepted` `wg/agentic-context` 💬3
- [#3374](https://github.com/vllm-project/semantic-router/issues/3374) [Bug] Enforce Fusion quorum over usable panel responses `bug` `accepted` `wg/mom-routing` 💬3
- [#3381](https://github.com/vllm-project/semantic-router/issues/3381) [Bug] Multimodal text encoding fails instead of clamping past 512 tokens `accepted` `in-progress` `wg/router-models-inference-runtime` 💬3
- [#3346](https://github.com/vllm-project/semantic-router/issues/3346) [Feature] Deduplicate repeated context without changing conversation semantics `enhancement` `accepted` `wg/agentic-context` 💬3
- [#3325](https://github.com/vllm-project/semantic-router/issues/3325) [Bug] Preserve affected main validation across cancelled runs `bug` `accepted` `wg/evaluation-quality` 💬2
- [#3385](https://github.com/vllm-project/semantic-router/issues/3385) [Bug] RAG retrieval embeds only the first 512 tokens of a query `accepted` `wg/router-models-inference-runtime` 💬2
- [#3382](https://github.com/vllm-project/semantic-router/issues/3382) [Feature] Migrate the remaining candle models to the shared chunked attention kernel `accepted` `in-progress` `wg/router-models-inference-runtime` 💬2
- [#3362](https://github.com/vllm-project/semantic-router/issues/3362) [Bug] Closed issues keep stale delivery-state labels `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#3370](https://github.com/vllm-project/semantic-router/issues/3370) [Bug] CLI ignores the persisted CONTAINER_RUNTIME from runtime.env `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#3380](https://github.com/vllm-project/semantic-router/issues/3380) [Feature] Define bounded cross-model handoff envelopes at external runtime boundaries `enhancement` `accepted` `wg/agentic-context` 💬2
- [#3377](https://github.com/vllm-project/semantic-router/issues/3377) [Feature] Gate session model switches on calibrated recent-window progress evidence `enhancement` `accepted` `wg/agentic-context` 💬2
- [#3379](https://github.com/vllm-project/semantic-router/issues/3379) [Feature] Carry external agent lineage and delegated-role facts into model selection `enhancement` `accepted` `wg/agentic-context` 💬2
- [#3378](https://github.com/vllm-project/semantic-router/issues/3378) [Feature] Add native streaming for eligible final Looper stages `enhancement` `accepted` `wg/data-plane-networking` 💬2
- [#3376](https://github.com/vllm-project/semantic-router/issues/3376) [Feature] Add bounded multi-arm shadow comparison with blinded judging `enhancement` `accepted` `wg/mom-routing` 💬2
- [#3388](https://github.com/vllm-project/semantic-router/issues/3388) [Bug] Gemma embedding fails instead of clamping past 2048 tokens `bug` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#3387](https://github.com/vllm-project/semantic-router/issues/3387) [Bug] ReMoM last_n_tokens compaction cuts mid-rune and misjudges CJK budget `bug` `needs-acceptance` `wg/mom-routing` 💬1
- [#3389](https://github.com/vllm-project/semantic-router/issues/3389) [Bug] previous_response_id continuations inherit conversation_id membership they never requested `enhancement` `needs-acceptance`
- [#3373](https://github.com/vllm-project/semantic-router/issues/3373) [Feature] State which model-facing surfaces sample and which scan `needs-acceptance` `wg/router-models-inference-runtime`
- [#3372](https://github.com/vllm-project/semantic-router/issues/3372) [Feature] Make classifier input truncation observable `needs-acceptance` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#3325](https://github.com/vllm-project/semantic-router/issues/3325) [Bug] Preserve affected main validation across cancelled runs
- [#3389](https://github.com/vllm-project/semantic-router/issues/3389) [Bug] previous_response_id continuations inherit conversation_id membership they never requested

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*