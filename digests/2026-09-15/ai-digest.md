# 📡 AI Ecosystem Digest — 2026-09-15

> Generated 2026-09-15 01:13 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 145,065 | 19 | 4 | 2 | 2 |
| [OpenAI Codex](https://github.com/openai/codex) | 124,135 | 23 | 4 | 50 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,983 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,171 | 13 | 1 | 0 | 3 |
| [OpenCode](https://github.com/anomalyco/opencode) | 207,420 | 32 | 9 | 8 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,843 | 40 | 9 | 2 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 389,709 | 228 | 135 | 198 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 245,528 | 18 | 10 | 0 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 91,754 | 40 | 24 | 51 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 35,956 | 20 | 12 | 26 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 128,227 | 8 | 23 | 22 | 9 |
| [Ollama](https://github.com/ollama/ollama) | 180,960 | 5 | 5 | 4 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 58,737 | 23 | 10 | 50 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,169 | 11 | 11 | 68 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,087 | 2 | 1 | 5 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,803 | 11 | 4 | 5 | 0 |

---

## ✨ Highlights

- **Claude Code** released versions [v2.1.272](https://github.com/anthropics/claude-code/releases/tag/v2.1.272) and [v2.1.271](https://github.com/anthropics/claude-code/releases/tag/v2.1.271).
- **OpenAI Codex** made significant updates with the release of [rust-v0.155.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.5).
- In **OpenCode**, merged PR [#49081](https://github.com/anomalyco/opencode/pull/49081) restores queued attachments to the composer when editing.
- **Gemini CLI** introduced release [v0.61.0-nightly.20260914.g9c1b0a610](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260914.g9c1b0a610).
- The issue [#3801](https://github.com/vllm-project/semantic-router/issues/3801) in **Semantic Router**, discussing community workgroup issues, has received notable traction with 10 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 145,065 · **Open issues:** 12,520 · **Last push:** <1h ago

On September 15, 2026, Claude Code released version v2.1.272, which focuses on bug fixes and reliability improvements. The previous version, v2.1.271, introduced a fast mode for remote sessions and mouse support in the fullscreen configuration panel. Significant merged pull requests included enhancements to the diff functionality and telemetry tests. However, a critical new issue was reported (#94344), concerning a significant delay in PowerShell tool calls on Windows, which could impact user experience significantly. Additionally, several other bugs were noted, including issues with scheduled tasks and security vulnerabilities related to credential leaks.

#### 🚀 New Releases
- [v2.1.272](https://github.com/anthropics/claude-code/releases/tag/v2.1.272) v2.1.272
- [v2.1.271](https://github.com/anthropics/claude-code/releases/tag/v2.1.271) v2.1.271

#### ✅ Merged PRs
- [#94184](https://github.com/anthropics/claude-code/pull/94184) mods/diff: pinned header with body-only scroll, the built-in's list and base chords, wheel routing, and the DiffDialog off fullscreen
- [#93951](https://github.com/anthropics/claude-code/pull/93951) mods: the diff, sec-default and telemetry tests move next to the mods

#### 🐛 New Issues
- [#94344](https://github.com/anthropics/claude-code/issues/94344) [BUG] Desktop app on Windows: every new PowerShell tool call waits ~154 s before the command starts (dialog, permissions and host IPC ruled out); Bash is instant (same as #57960, closed stale; still present on 2.1.270) `bug` `has repro` `platform:windows` `area:tools` 💬2
- [#94415](https://github.com/anthropics/claude-code/issues/94415) [BUG] Cowork cloud scheduled task bound to a computer is permanently disabled (suspension_reason=device_absent) after one firing while the computer is asleep, and never auto-resumes `bug` `has repro` `platform:macos` `area:cowork`
- [#94414](https://github.com/anthropics/claude-code/issues/94414) [Bug] Opus model producing false claims in audit analysis `bug` `platform:macos` `area:model` `needs-repro`
- [#94413](https://github.com/anthropics/claude-code/issues/94413) [Bug] Agent validation checks pass incorrectly on broken deployments `bug` `platform:windows` `area:model` `area:agents`
- [#94412](https://github.com/anthropics/claude-code/issues/94412) [FEATURE] Support configuration storage outside MSIX AppData `enhancement` `platform:windows` `area:desktop`
- [#94399](https://github.com/anthropics/claude-code/issues/94399) [BUG] Cowork/Dispatch agent cannot see or reach local sessions on its own machine, and list_sessions returns empty instead of an access error `bug` `platform:macos` `area:cowork` `area:desktop`
- [#94357](https://github.com/anthropics/claude-code/issues/94357) Connector tool results return unusable payloads: Browserbase navigate dumps the internal page object, Claude Code Remote list_triggers returns 180 KB on one line `enhancement` `area:mcp` `area:cowork` `platform:web`
- [#94361](https://github.com/anthropics/claude-code/issues/94361) [BUG] claude-in-chrome Tab Context prints full URLs of every tab, leaking credentials in query strings `bug` `platform:macos` `area:mcp` `area:security`
- [#94395](https://github.com/anthropics/claude-code/issues/94395) [BUG] Cowork silently blocks plugin-bundled MCP `env` var expansion for any non-built-in name, contradicting documented `${VAR}` custom-secret support `bug` `has repro` `platform:windows` `area:mcp`
- [#94411](https://github.com/anthropics/claude-code/issues/94411) [BUG] Cowork (Windows): scheduled task with a folder + "Require this computer" won't save when the model is Haiku 4.5 — toast blames the folder name `bug` `platform:windows` `area:cowork`
- [#94195](https://github.com/anthropics/claude-code/issues/94195) [BUG] Account switch to separate Max 20x account shows Max email but Pro tier and hits exhausted-account limit `bug` `has repro` `platform:windows` `area:auth`
- [#94363](https://github.com/anthropics/claude-code/issues/94363) MCP tools permanently removed from session after transient server disconnect, even after reconnection (Microsoft 365 connector) `bug` `area:mcp`
- [#94356](https://github.com/anthropics/claude-code/issues/94356) Cowork: a custom MCP connector fails to connect with 502 CLIENT_HTTP_NOT_IMPLEMENTED from the MCP proxy, and only that connector, for a whole session `bug` `area:mcp` `area:cowork` `platform:web`
- [#94410](https://github.com/anthropics/claude-code/issues/94410) Desktop: ghost scheduled tasks fire every minute but are absent from UI, MCP list, and on-disk registry `bug` `has repro` `platform:macos` `area:desktop`
- [#94409](https://github.com/anthropics/claude-code/issues/94409) [BUG] Cloud Routine schedule cannot be edited — neither via API nor the routines UI `bug` `area:api` `area:claude-code-web` `platform:web`
- [#94408](https://github.com/anthropics/claude-code/issues/94408) Session permanently broken with 400 'unexpected end of data' after binary tool output (real-world case of #94055) `duplicate` `platform:macos` `area:bash`
- [#94407](https://github.com/anthropics/claude-code/issues/94407) [Bug] Space key conflict in agent view reply box prevents text input for new agent line `bug` `platform:linux` `area:agent-view`
- [#94406](https://github.com/anthropics/claude-code/issues/94406) Voice dictation in the desktop app drops words throughout the recording — output is fragments, not a transcript (macOS, v2.1.237) `bug` `has repro` `platform:macos` `area:desktop`
- [#94405](https://github.com/anthropics/claude-code/issues/94405) [BUG] Max 5x → Max 20x upgrade blocked by phone verification loop ("already verified") `bug` `invalid`

#### 🔒 Closed Issues
- [#86451](https://github.com/anthropics/claude-code/issues/86451) Auto mode classifier denies tool calls in bypassPermissions sessions (v2.1.231)
- [#94010](https://github.com/anthropics/claude-code/issues/94010) Desktop app: clear_session(self) reports success but never clears; the session then ignores incoming send_message
- [#87150](https://github.com/anthropics/claude-code/issues/87150) Startup config should be processed before first user prompt, not after
- [#91301](https://github.com/anthropics/claude-code/issues/91301) [FEATURE] Discussion mode: read and talk, no plan, no edits — the missing mode between chat and plan

### OpenAI Codex (`openai/codex`)

**Stars:** 124,135 · **Open issues:** 17,146 · **Last push:** <1h ago

On September 15, 2026, three new alpha releases of Codex were made available: rust-v0.155.0-alpha.5, rust-v0.155.0-alpha.4, and rust-v0.155.0-alpha.2.4. Key improvements from merged PRs included the addition of attachment upload and resolution APIs, enhanced support for package execution in the Windows sandbox, and the implementation of service-managed package registration for sandbox accounts. A particularly notable issue arose regarding Windows where users reported inconsistent auto-scrolling and viewport positioning in regular chats, which has garnered attention from five contributors. Overall, the day was focused on refining features and addressing emerging challenges.

#### 🚀 New Releases
- [rust-v0.155.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.5) 0.155.0-alpha.5
- [rust-v0.155.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.4) 0.155.0-alpha.4
- [rust-v0.155.0-alpha.2.4](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.2.4) 0.155.0-alpha.2.4

#### ✅ Merged PRs
- [#45559](https://github.com/openai/codex/pull/45559) Resume Windows sandbox registration refresh after service restarts
- [#45558](https://github.com/openai/codex/pull/45558) Seed missing daemon installs from complete local CLI packages
- [#45556](https://github.com/openai/codex/pull/45556) Add attachment upload and resolution APIs and pass stores into sessions
- [#45554](https://github.com/openai/codex/pull/45554) Use shared Bazel cache preparation in SDK CI
- [#45550](https://github.com/openai/codex/pull/45550) Add opt-in registered package execution to the Windows sandbox
- [#45549](https://github.com/openai/codex/pull/45549) Preserve streamed answers and plans when turns terminate
- [#45548](https://github.com/openai/codex/pull/45548) Honor prepared Unix socket permissions in Seatbelt
- [#45546](https://github.com/openai/codex/pull/45546) Move daemon packages out of the standalone CLI installation
- [#45544](https://github.com/openai/codex/pull/45544) Discourage logging full image generation results
- [#45543](https://github.com/openai/codex/pull/45543) Refactor image content to use a shared `ImageReference` type
- [#45542](https://github.com/openai/codex/pull/45542) Add service-managed package registration for Windows sandbox accounts
- [#45537](https://github.com/openai/codex/pull/45537) Move Guardian reviewer lifecycle into the extension
- [#45535](https://github.com/openai/codex/pull/45535) Classify tool analytics events by call origin
- [#45534](https://github.com/openai/codex/pull/45534) Honor explicit Unix socket grants in the Linux managed sandbox
- [#45533](https://github.com/openai/codex/pull/45533) Harden and share Windows sandbox identity helpers
- [#45529](https://github.com/openai/codex/pull/45529) Expose selected workspace routing in app-server account reads
- [#45528](https://github.com/openai/codex/pull/45528) Compress larger Windows release artifacts first
- [#45526](https://github.com/openai/codex/pull/45526) Stage Python runtime wheels directly from package directories
- [#45524](https://github.com/openai/codex/pull/45524) Enable MXC TTY launches and managed networking in the exec server
- [#45521](https://github.com/openai/codex/pull/45521) Move Guardian reviewer startup into the pool
- [#45520](https://github.com/openai/codex/pull/45520) Add dependencies to the Windows sandbox service
- [#45519](https://github.com/openai/codex/pull/45519) Restore collaboration mode when resuming threads
- [#45518](https://github.com/openai/codex/pull/45518) Route Guardian reviewers through ThreadManager for inline parents
- [#45517](https://github.com/openai/codex/pull/45517) Use a dedicated mock server in the provider enforcement test
- [#45516](https://github.com/openai/codex/pull/45516) Allow configuring the Guardian prompt template
- [#45515](https://github.com/openai/codex/pull/45515) Filter plugin-install test analytics by event type
- [#45513](https://github.com/openai/codex/pull/45513) Allow setting `daybreakEnabled` when starting a thread
- [#45509](https://github.com/openai/codex/pull/45509) Share MCP tool specs until search results are selected
- [#45506](https://github.com/openai/codex/pull/45506) Allow background persistence for steered user input
- [#45505](https://github.com/openai/codex/pull/45505) Add lifecycle tracing for unified exec
- [#45504](https://github.com/openai/codex/pull/45504) Allow ConPTY output to close after the last console client exits
- [#45503](https://github.com/openai/codex/pull/45503) Add revocable network policy primitives to the HTTP client
- [#45502](https://github.com/openai/codex/pull/45502) Add managed thread lifetimes with cancellation-safe startup
- [#45501](https://github.com/openai/codex/pull/45501) Render inline TeX math as Unicode in the TUI
- [#45499](https://github.com/openai/codex/pull/45499) Send local TUI images as portable attachments to remote app servers
- [#45496](https://github.com/openai/codex/pull/45496) Trace global user instruction loading
- [#45495](https://github.com/openai/codex/pull/45495) Expose effective login methods in config requirements
- [#45493](https://github.com/openai/codex/pull/45493) Make the Guardian deadline cancellation helper crate-private
- [#45492](https://github.com/openai/codex/pull/45492) Split Guardian V2 async scoring into focused modules
- [#45491](https://github.com/openai/codex/pull/45491) Remove Guardian subagent-spawner plumbing
- [#45489](https://github.com/openai/codex/pull/45489) Update `rustls` and AWS-LC dependencies in Cargo and Bazel lockfiles
- [#45487](https://github.com/openai/codex/pull/45487) Retain thread persistence acquisition through session cancellation
- [#45475](https://github.com/openai/codex/pull/45475) Fix fuzzy match scoring within Unicode lowercase expansions
- [#45463](https://github.com/openai/codex/pull/45463) Allow dedicated listeners for managed network proxies
- [#45461](https://github.com/openai/codex/pull/45461) Label rollout compression failures by stage and I/O error kind
- [#45459](https://github.com/openai/codex/pull/45459) Resolve enterprise-managed MCP registrations in the catalog
- [#45457](https://github.com/openai/codex/pull/45457) Fix clipboard routing for tmux and SSH sessions
- [#45455](https://github.com/openai/codex/pull/45455) Refactor Windows sandbox setup and service helpers
- [#45454](https://github.com/openai/codex/pull/45454) Preserve tabs in non-bracketed paste bursts
- [#45445](https://github.com/openai/codex/pull/45445) Attribute command and plugin analytics to the invoking model

#### 🐛 New Issues
- [#45479](https://github.com/openai/codex/issues/45479) Windows: Inconsistent auto-scrolling / viewport positioning in regular chats `bug` `windows-os` `app` 💬5
- [#45532](https://github.com/openai/codex/issues/45532) Using Playwright `bug` `windows-os` `app` `browser` 💬3
- [#45444](https://github.com/openai/codex/issues/45444) [Regression] Active long-running turn now stops when usage limit is reached instead of finishing the current task `bug` `rate-limits` 💬2
- [#45536](https://github.com/openai/codex/issues/45536) Enforceable task budgets and clearer usage controls in Codex `enhancement` `rate-limits` `app` 💬2
- [#45553](https://github.com/openai/codex/issues/45553) gpt-6-astra/low repeatedly hits cyber_policy during benign bug triage; Sol continuation unaffected `bug` `model-behavior` `app` `safety-check` 💬2
- [#45432](https://github.com/openai/codex/issues/45432) codex mcp add / mcp remove rewrite every [mcp_servers.*] entry, silently dropping comments and unknown keys `bug` `mcp` `CLI` `config` 💬2
- [#45562](https://github.com/openai/codex/issues/45562) macOS Desktop: completed turn returns empty items although history DB contains the final answer `bug` `app` `app-server` 💬1
- [#45552](https://github.com/openai/codex/issues/45552) Desktop: add a project-scoped Skills view for ChatGPT Projects `enhancement` `app` `skills` 💬1
- [#45551](https://github.com/openai/codex/issues/45551) Desktop: add a project-scoped Skills view for ChatGPT Projects `enhancement` `app` `skills` 💬1
- [#45545](https://github.com/openai/codex/issues/45545) Daybreak access warning `bug` `app` `safety-check` 💬1
- [#45561](https://github.com/openai/codex/issues/45561) Sites source retrieval: git-upload-pack returns HTTP 500 after successful authentication (Work and local Codex) `bug` `CLI` `connectivity`
- [#45560](https://github.com/openai/codex/issues/45560) Business Pro 20x plan consumption rate increased around 9/1 `bug` `windows-os` `rate-limits` `CLI`
- [#45557](https://github.com/openai/codex/issues/45557) Codex Android: Remote chat list is incomplete, unstable, and incorrectly sorted `bug` `session` `remote`
- [#45555](https://github.com/openai/codex/issues/45555) Codex Desktop local stdio MCP fails initialize while the same config works in Codex CLI `bug` `mcp` `app` `connectivity`
- [#45547](https://github.com/openai/codex/issues/45547) Codex desktop live voice: delegated browser agent cannot access the visible embedded tab `bug` `app` `subagent` `browser`
- [#45541](https://github.com/openai/codex/issues/45541) [Windows/Mobile Remote Voice] Voice session abruptly drops to text and loses context after reconnect `bug` `windows-os` `app` `connectivity`
- [#45540](https://github.com/openai/codex/issues/45540) Windows sandbox silently drops command output bursts larger than ~2 MiB `bug` `windows-os` `sandbox`
- [#45539](https://github.com/openai/codex/issues/45539) [Codex desktop] Per-project/session priority scheduling, independent of model and reasoning effort `enhancement` `app` `session`
- [#45538](https://github.com/openai/codex/issues/45538) FreeBSD: apply_patch can create files but update/delete fail because filesystem sandbox cannot be enforced `bug` `sandbox` `CLI` `tool-calls`
- [#45531](https://github.com/openai/codex/issues/45531) [IDE extension] Plugin detail page traps Codex sidebar with no way back to chat `bug` `extension` `skills`
- [#45530](https://github.com/openai/codex/issues/45530) Desktop remote SSH bootstrap times out after app-server starts `bug` `app` `connectivity` `app-server`
- [#45527](https://github.com/openai/codex/issues/45527) codex doctor omits spctl --assess and reports a false desktop security warning on macOS `bug` `CLI`
- [#45525](https://github.com/openai/codex/issues/45525) Custom catalogue models render a gray, chevronless composer pill (parity request custom vs native models) `enhancement` `custom-model` `app`

#### 🔒 Closed Issues
- [#41480](https://github.com/openai/codex/issues/41480) [macOS][26.825.41651] “Open in” submenu stays on “Loading available apps…” indefinitely
- [#44719](https://github.com/openai/codex/issues/44719) Usage counted via Windows App connected to Linux remote is double counting?
- [#45552](https://github.com/openai/codex/issues/45552) Desktop: add a project-scoped Skills view for ChatGPT Projects
- [#43116](https://github.com/openai/codex/issues/43116) [Windows] Chat turn navigator overlaps the rounded top-left chat corner

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,983 · **Open issues:** 841 · **Last push:** 23h ago

On September 15, 2026, Gemini CLI released version v0.61.0-nightly.20260914.g9c1b0a610, though no significant changes were detailed in the release notes. There were no merged pull requests or new issues reported in the last 24 hours, indicating a routine maintenance day for the project. Overall, the day was quiet with no major developments or discussions emerging from the community.

#### 🚀 New Releases
- [v0.61.0-nightly.20260914.g9c1b0a610](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260914.g9c1b0a610) Release v0.61.0-nightly.20260914.g9c1b0a610

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,171 · **Open issues:** 2,378 · **Last push:** <1h ago

On September 15, 2026, GitHub Copilot CLI released v1.0.84-8, introducing the ability to set the transcriptView to "concise" for grouped tool activity summaries, alongside improvements to pause and resume Agent Factory runs from the /factories dialog and a fix for model lists refreshing correctly after account changes. Previously, v1.0.84-7 addressed an issue with adaptive-only Claude models, ensuring they retain adaptive status, and corrected sessionEnd hooks in interactive sessions closed by /clear. Notably, new issues emerged, with #4843 highlighting that Copilot CLI colors do not respect terminal themes in Warp, drawing attention to its potential impact on user experience. Additionally, #4841 raised concerns about custom agent plan-mode sessions, which leave the Plan panel blank despite having a populated summary.

#### 🚀 New Releases
- [v1.0.84-8](https://github.com/github/copilot-cli/releases/tag/v1.0.84-8) 1.0.84-8
- [v1.0.84-7](https://github.com/github/copilot-cli/releases/tag/v1.0.84-7) 1.0.84-7
- [v1.0.84-6](https://github.com/github/copilot-cli/releases/tag/v1.0.84-6) 1.0.84-6

#### 🐛 New Issues
- [#4843](https://github.com/github/copilot-cli/issues/4843) Copilot CLI colors don't respect terminal theme in Warp `triage` 💬1
- [#4841](https://github.com/github/copilot-cli/issues/4841) Custom agent plan-mode sessions leave the Plan panel blank (plan_content empty while summary is populated) `triage` 💬1
- [#4837](https://github.com/github/copilot-cli/issues/4837) Policy-driven enabledPlugins installs the plugin but persists "enabled": false, so it never activates (1.0.83) — reproduces via device/MDM and repo-level settings `triage` 💬1
- [#4846](https://github.com/github/copilot-cli/issues/4846) Sandbox policies ignored for certain commands with "allow dev tool access" `triage`
- [#4845](https://github.com/github/copilot-cli/issues/4845) Sessions stuck permanently in "In use" state when not in use `triage`
- [#4844](https://github.com/github/copilot-cli/issues/4844) --yolo launch flag swallowed by the pre-auth fail-closed bypass cap, never re-applied once the policy resolves `triage`
- [#4842](https://github.com/github/copilot-cli/issues/4842) Concurrent MCP OAuth token-refresh for two servers cancels one reconnect (self-heals, but surfaces a false hard-failure error) `triage`
- [#4840](https://github.com/github/copilot-cli/issues/4840) BYOK Copilot CLI not working anymore with Deepseek `triage`
- [#4839](https://github.com/github/copilot-cli/issues/4839) Make option to disable taskbar icon `triage`
- [#4838](https://github.com/github/copilot-cli/issues/4838) `skill` tool intermittently fails in headless `-p` mode: "No model-invocable skills available" `triage`
- [#4836](https://github.com/github/copilot-cli/issues/4836) Grok 4.5: 351 tools fail with HTTP 400 instead of reporting the 350-tool limit `triage`
- [#4835](https://github.com/github/copilot-cli/issues/4835) Gemini Flash: one malformed MCP array enum breaks all prompts with HTTP 400 `triage`
- [#4834](https://github.com/github/copilot-cli/issues/4834) Support MCP 2026-07-28 Multi Round-Trip Requests (input_required) `triage`

#### 🔒 Closed Issues
- [#1029](https://github.com/github/copilot-cli/issues/1029) Reject and feedback on a tool call should trigger replanning for all other tool calls

### OpenCode (`anomalyco/opencode`)

**Stars:** 207,420 · **Open issues:** 5,788 · **Last push:** <1h ago

On September 15, 2026, OpenCode released version 1.18.31, which notably restored session model boundaries for loading, resuming, or forking sessions and improved remote config error handling during startup. In addition, a new feature was introduced that requests summarized adaptive thinking for GitHub Copilot models, reflecting community engagement. Among the merged pull requests, enhancements such as the addition of an effort variant alias and crucial fixes for queued attachments stand out. However, the day was marred by significant issues, including a report of a Trojan flag from Windows Defender on the OpenCode executable, highlighting ongoing security concerns that may need urgent addressing.

#### 🚀 New Releases
- [v1.18.31](https://github.com/anomalyco/opencode/releases/tag/v1.18.31) v1.18.31

#### ✅ Merged PRs
- [#49081](https://github.com/anomalyco/opencode/pull/49081) fix(app): restore queued attachments to the composer when editing
- [#49080](https://github.com/anomalyco/opencode/pull/49080) fix(app): drop 'Plus' prefix from queued attachment label
- [#49077](https://github.com/anomalyco/opencode/pull/49077) test(app): match renamed command field
- [#49078](https://github.com/anomalyco/opencode/pull/49078) feat(tui): add effort variant alias
- [#49075](https://github.com/anomalyco/opencode/pull/49075) test(ai): update Cloudflare gateway recordings
- [#48943](https://github.com/anomalyco/opencode/pull/48943) refactor(core): refactor model resolving logic, fix missing variant logic
- [#49065](https://github.com/anomalyco/opencode/pull/49065) feat(codemode): cross Set, RegExp, and URLSearchParams to the host in a useful form
- [#49067](https://github.com/anomalyco/opencode/pull/49067) test(codemode): follow the experimental instruction route rename

#### 🐛 New Issues
- [#48903](https://github.com/anomalyco/opencode/issues/48903) 1.18.30 (Homebrew, macOS arm64): every prompt fails with "failed to send prompt" — TypeError 'a.name' in SystemPrompt.environment 💬2
- [#49041](https://github.com/anomalyco/opencode/issues/49041) DeepSeek V4.1 Flash is down 💬9
- [#49047](https://github.com/anomalyco/opencode/issues/49047) Bug: Windows Defender/Antivirus flagged OpenCode executable as Trojan 💬6
- [#49021](https://github.com/anomalyco/opencode/issues/49021) [FEATURE]: BRING BACK THE OLD LAYOUT 💬3
- [#49038](https://github.com/anomalyco/opencode/issues/49038) [FEATURE]: propagate W3C traceparent on outbound LLM HTTP requests 💬4
- [#49033](https://github.com/anomalyco/opencode/issues/49033) Models get stuck on "Thinking" after a few hours 💬3
- [#49031](https://github.com/anomalyco/opencode/issues/49031) Unacceptable Regression: Tabbed Layout Breaks Professional Development Workflow 💬2
- [#49053](https://github.com/anomalyco/opencode/issues/49053) this issue is still relevant 💬2
- [#49028](https://github.com/anomalyco/opencode/issues/49028) pdf not readable by Z.AI/GLM 5.3 Flash through OpenCode 💬2
- [#49022](https://github.com/anomalyco/opencode/issues/49022) Upstream request failed 💬2
- [#49026](https://github.com/anomalyco/opencode/issues/49026) 可试图模型无法识别图片 💬2
- [#49029](https://github.com/anomalyco/opencode/issues/49029) After the update, other sessions and projects were lost; the system doesn’t load them and doesn’t display other projects in the sidebar. 💬2
- [#49044](https://github.com/anomalyco/opencode/issues/49044) Client SDK: 300 s undici headers timeout on session.prompt is not configurable — long turns die at ~302 s 💬2
- [#49043](https://github.com/anomalyco/opencode/issues/49043) Wow, I hate the new update 💬2
- [#49037](https://github.com/anomalyco/opencode/issues/49037) feat: propagate W3C traceparent on outbound LLM HTTP requests `needs:compliance` 💬2
- [#49017](https://github.com/anomalyco/opencode/issues/49017) Bug: SchemaError missing content, reasoning leak, identical edit string 💬2
- [#49083](https://github.com/anomalyco/opencode/issues/49083) Network interruption corrupts conversation state: reasoning encrypted_content was not issued to this caller 💬1
- [#49082](https://github.com/anomalyco/opencode/issues/49082) OpenCode unusable after moving project directory (iCloud Desktop & Documents sync) 💬1
- [#49073](https://github.com/anomalyco/opencode/issues/49073) [FEATURE]: Each project should have a dedicated `/tmp` dir 💬1
- [#49070](https://github.com/anomalyco/opencode/issues/49070) Docs only mention DeepSeek V4 Flash ZDR monthly renewed arrangement; no mention of V4.1 💬1
- [#49062](https://github.com/anomalyco/opencode/issues/49062) Meta Muse Spark 1.3 Contributor announces subagent invocation then stalls with no tool call 💬1
- [#49059](https://github.com/anomalyco/opencode/issues/49059) Windows arm64 desktop installer (1.18.31) never places OpenCode.exe; x64 is fine 💬1
- [#49057](https://github.com/anomalyco/opencode/issues/49057) [user_blocked] Muse Spark 1.3 Free access restricted via OpenCode Zen — no appeal path 💬1
- [#49050](https://github.com/anomalyco/opencode/issues/49050) ai aborts after writing </｜DSML｜tool_calls> 💬1
- [#49042](https://github.com/anomalyco/opencode/issues/49042) Agent loop runs 500+ steps with zero user input — no guard against runaway auto-continue 💬1
- [#49039](https://github.com/anomalyco/opencode/issues/49039) [Feature Request / Bug] Handle Rate Limit (Quota Exceeded 429) automatically with retry delay 💬1
- [#49034](https://github.com/anomalyco/opencode/issues/49034) [v2 Windows] v2.0.3 times out waiting for background service after local CLI install `2.0` 💬1
- [#49032](https://github.com/anomalyco/opencode/issues/49032) Desktop: sessions created before the Projects-sidebar update are invisible in search/sidebar (exact match on session.directory) 💬1
- [#49085](https://github.com/anomalyco/opencode/issues/49085) CLI fails with unrecognized flag --port when launched from editor extension
- [#49079](https://github.com/anomalyco/opencode/issues/49079) Qwen3.8 Flash: variant=xhigh silently disables reasoning by sending output_config.effort without thinking
- [#49063](https://github.com/anomalyco/opencode/issues/49063) node_modules FOD hash is calibrated against one bun version — breaks with any other
- [#49056](https://github.com/anomalyco/opencode/issues/49056) tui: assistant prose has uneven left and right margins

#### 🔒 Closed Issues
- [#48903](https://github.com/anomalyco/opencode/issues/48903) 1.18.30 (Homebrew, macOS arm64): every prompt fails with "failed to send prompt" — TypeError 'a.name' in SystemPrompt.environment
- [#49047](https://github.com/anomalyco/opencode/issues/49047) Bug: Windows Defender/Antivirus flagged OpenCode executable as Trojan
- [#49031](https://github.com/anomalyco/opencode/issues/49031) Unacceptable Regression: Tabbed Layout Breaks Professional Development Workflow
- [#49053](https://github.com/anomalyco/opencode/issues/49053) this issue is still relevant
- [#49026](https://github.com/anomalyco/opencode/issues/49026) 可试图模型无法识别图片
- [#49029](https://github.com/anomalyco/opencode/issues/49029) After the update, other sessions and projects were lost; the system doesn’t load them and doesn’t display other projects in the sidebar.
- [#49044](https://github.com/anomalyco/opencode/issues/49044) Client SDK: 300 s undici headers timeout on session.prompt is not configurable — long turns die at ~302 s
- [#49037](https://github.com/anomalyco/opencode/issues/49037) feat: propagate W3C traceparent on outbound LLM HTTP requests
- [#49017](https://github.com/anomalyco/opencode/issues/49017) Bug: SchemaError missing content, reasoning leak, identical edit string

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,843 · **Open issues:** 1,435 · **Last push:** <1h ago

On September 15, 2026, Qwen Code announced the release of version 0.23.4, which introduced significant changes such as the removal of configurable message-prefix filtering from channels and a fix for reading command hook timeouts in seconds. Additionally, the nightly build v0.23.4-nightly.20260914.f024b37689 included enhancements like improved testing for Windows inode gates and preservation of Linux observations and REPL diagnostics. Notably, merged pull request #11636 added a feature to track background result execution across the daemon and web shell, while #11831 fixed an issue related to resolving skill identity from the catalog for toggle guards. Among new issues, #11834 reported an API error related to empty function parameters, drawing attention to potential concerns in version 0.23.3.

#### 🚀 New Releases
- [v0.23.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.4) Release v0.23.4
- [v0.23.4-nightly.20260914.f024b37689](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.4-nightly.20260914.f024b37689) Release v0.23.4-nightly.20260914.f024b37689
- [cua-driver-rs-v0.20.8](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.8) cua-driver-rs v0.20.8
- [cua-driver-rs-v0.20.7](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.7) cua-driver-rs v0.20.7

#### ✅ Merged PRs
- [#11636](https://github.com/QwenLM/qwen-code/pull/11636) feat: track background result execution across daemon and web shell
- [#11831](https://github.com/QwenLM/qwen-code/pull/11831) fix(serve): resolve skill identity from the catalog for toggle guards

#### 🐛 New Issues
- [#11834](https://github.com/QwenLM/qwen-code/issues/11834) > 你好 ✕ [API Error: 400 invalid params, function parameters is empty (2013)] > /update ●︎ Qwen Code 0.23.3 已是最新！ `priority/P1` `type/bug` `category/core` `scope/content-generation` 💬6
- [#11849](https://github.com/QwenLM/qwen-code/issues/11849) Intermittent silent crash on 0.23.3, background shell and/or subagent completion most likely suspects `status/need-retesting` `priority/P1` `type/bug` `category/ui` 💬5
- [#11795](https://github.com/QwenLM/qwen-code/issues/11795) Permission queue is keyed on the ACP connection: one idle session's unanswered prompt blocks every other session on the daemon, indefinitely and silently `priority/P1` `type/bug` `category/cli` `scope/session-management` 💬5
- [#11887](https://github.com/QwenLM/qwen-code/issues/11887) [ACP] --acp ignores approval modes: tools auto-execute, never sends session/request_permission `status/need-information` `priority/P2` `type/documentation` `category/integration` 💬4
- [#11884](https://github.com/QwenLM/qwen-code/issues/11884) `/extensions` update flow shows no progress and never clears the "update available" state `priority/P2` `type/bug` `category/ui` `scope/components` 💬3
- [#11872](https://github.com/QwenLM/qwen-code/issues/11872) Web Terminal shows "[Error: PTY not available]" — @lydell/node-pty is declared but not bundled, and macOS code signing blocks locally installed prebuilds `priority/P1` `type/bug` `category/platform` `scope/macos` 💬3
- [#11862](https://github.com/QwenLM/qwen-code/issues/11862) hooks: a matcher ending in an escaped space loses it and stops matching `priority/P3` `type/bug` `category/core` `scope/settings` 💬3
- [#11851](https://github.com/QwenLM/qwen-code/issues/11851) security: isAsyncOperator treats \r/\v/\f/\u00a0 as bash word separators, so a Bash allow rule can cover a second command `priority/P1` `type/bug` `category/security` `scope/shell` 💬3
- [#11817](https://github.com/QwenLM/qwen-code/issues/11817) test(cli): useBoxMetrics loop-guard tests fail deterministically on Windows and under CI load since #11565 `priority/P1` `type/bug` `category/ui` `scope/rendering` 💬3
- [#11815](https://github.com/QwenLM/qwen-code/issues/11815) splitCompoundCommandSegments splits on an operator inside a trailing # comment `priority/P3` `type/bug` `category/core` `scope/shell` 💬3
- [#11895](https://github.com/QwenLM/qwen-code/issues/11895) review: dimension agents read the main checkout instead of the PR worktree — the brief gives only the diff's absolute path, never the worktree's `priority/P1` `type/bug` `category/cli` `scope/commands` 💬2
- [#11894](https://github.com/QwenLM/qwen-code/issues/11894) tokenLimits: DeepSeek's API model name `deepseek-flash` resolves to 128k/32k instead of the V4 1M/384k, so long sessions die on failed compression `priority/P2` `type/bug` `category/core` `scope/token-management` 💬2
- [#11890](https://github.com/QwenLM/qwen-code/issues/11890) Main CI failed: Qwen Code CI on f024b37689f3 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#11888](https://github.com/QwenLM/qwen-code/issues/11888) Linux - model selection windows appears under the main window. `status/need-information` `status/need-retesting` `priority/P2` `type/bug` 💬2
- [#11885](https://github.com/QwenLM/qwen-code/issues/11885) An extension whose directory was removed cannot be uninstalled or reinstalled by name `priority/P2` `type/bug` `category/core` `scope/extensions` 💬2
- [#11883](https://github.com/QwenLM/qwen-code/issues/11883) Extension update and uninstall fail on Windows with `EPERM` `priority/P1` `type/bug` `category/platform` `scope/extensions` 💬2
- [#11848](https://github.com/QwenLM/qwen-code/issues/11848) 64-bit NTFS file ids make `isSameFile` and the deletion-journal swap check fail open on Windows `priority/P2` `type/bug` `category/security` `scope/file-operations` 💬2
- [#11882](https://github.com/QwenLM/qwen-code/issues/11882) shell comment semantics: gate on the reported shell, and converge the two compound-command splitters `priority/P1` `type/bug` `category/core` `category/security` 💬2
- [#11878](https://github.com/QwenLM/qwen-code/issues/11878) Session Overview table never shows no-workspace (standalone) sessions, and even if it did, the row would open in the wrong context `priority/P2` `type/bug` `category/ui` `scope/session-management` 💬2
- [#11877](https://github.com/QwenLM/qwen-code/issues/11877) Identity comparators in conversation-workspace and acpAgent still fail open on volumes with file ids above 2^53 (follow-up from #11848) `priority/P2` `type/bug` `category/security` `scope/file-operations` 💬2
- [#11873](https://github.com/QwenLM/qwen-code/issues/11873) # Fatal uncaught `Minified React error #185` from Ink layout-listener `setState` during commit `status/need-retesting` `priority/P1` `type/bug` `category/ui` 💬2
- [#11846](https://github.com/QwenLM/qwen-code/issues/11846) web_search: cap calls per session `priority/P2` `type/feature-request` `category/tools` `scope/web-search` 💬2
- [#11867](https://github.com/QwenLM/qwen-code/issues/11867) feat(serve): make the daemon protocol a normative spec with a conformance merge gate `priority/P3` `type/feature-request` `category/development` `need-discussion` 💬2
- [#11869](https://github.com/QwenLM/qwen-code/issues/11869) feat(serve): Java control plane vertical slice (create → admit → SSE → event log → delete) `priority/P3` `status/blocked` `type/feature-request` `category/platform` 💬2
- [#11866](https://github.com/QwenLM/qwen-code/issues/11866) feat(serve): split bridge.ts along the control-plane / harness boundary `priority/P2` `type/feature-request` `category/core` `roadmap/multi-agent` 💬2
- [#11868](https://github.com/QwenLM/qwen-code/issues/11868) feat(serve): externalize the event/journal core to the data plane `priority/P2` `type/feature-request` `category/core` `category/performance` 💬2
- [#11858](https://github.com/QwenLM/qwen-code/issues/11858) chore(cli): harden the useBoxMetrics loop guard — budget is per instance while React's cap is per root (follow-up from #11835) `priority/P2` `type/bug` `category/ui` `scope/rendering` 💬2
- [#11850](https://github.com/QwenLM/qwen-code/issues/11850) use-box-metrics-loop-guard tests are timing-flaky: fail when the whole suite runs faster than the 16ms guard window `priority/P1` `type/bug` `category/ui` `scope/rendering` 💬2
- [#11847](https://github.com/QwenLM/qwen-code/issues/11847) Session recap (away summary) is always generated in English — no way to match the conversation language `priority/P3` `category/core` `scope/session-management` `type/enhancement` 💬2
- [#11838](https://github.com/QwenLM/qwen-code/issues/11838) Web Shell goal approval jumps on hover and hides its actions `priority/P2` `type/bug` `category/ui` `scope/components` 💬2
- [#11824](https://github.com/QwenLM/qwen-code/issues/11824) headless: a tool blocked by a hook prints "requires user approval… use -y" `priority/P2` `type/bug` `category/cli` `scope/non-interactive` 💬2
- [#11823](https://github.com/QwenLM/qwen-code/issues/11823) hooks: Claude Code tool names (Bash, Read, Write) never match in tool hook matchers `priority/P2` `type/bug` `category/core` `scope/settings` 💬2
- [#11811](https://github.com/QwenLM/qwen-code/issues/11811) bug(web-shell): No-workspace sessions fail over HTTP IP access `priority/P2` `type/bug` `category/ui` `daemon` 💬2
- [#11814](https://github.com/QwenLM/qwen-code/issues/11814) tools.disabled removes zoom_image from the registry but its schema is still sent to the model `status/need-information` `priority/P3` `type/bug` `category/tools` 💬2
- [#11810](https://github.com/QwenLM/qwen-code/issues/11810) [Web Shell] Deduplicate compression live announcements across the context card and panel `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#11870](https://github.com/QwenLM/qwen-code/issues/11870) Release Failed for v0.23.4 on 2026-09-14 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11832](https://github.com/QwenLM/qwen-code/issues/11832) Main CI failed: Qwen Code CI on ea1ad7f995a8 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11813](https://github.com/QwenLM/qwen-code/issues/11813) Main CI failed: Qwen Code CI on 351b5fc51a01 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11809](https://github.com/QwenLM/qwen-code/issues/11809) Main CI failed: E2E Tests on 1291d2a68dfa `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11892](https://github.com/QwenLM/qwen-code/issues/11892) Deferred review findings from PR #11614: feat(cli): add bwrap kernel sandbox backend for Linux

#### 🔒 Closed Issues
- [#11777](https://github.com/QwenLM/qwen-code/issues/11777) CI: required Test job intermittently SIGTERMs at the workspace→test:scripts handoff with all tests green
- [#10524](https://github.com/QwenLM/qwen-code/issues/10524) setup-worktree: corepack->npx fallback only fires on ENOENT; EACCES aborts bootstrap
- [#10015](https://github.com/QwenLM/qwen-code/issues/10015) feat(telemetry): expose context usage breakdown on LLM spans
- [#11846](https://github.com/QwenLM/qwen-code/issues/11846) web_search: cap calls per session
- [#11345](https://github.com/QwenLM/qwen-code/issues/11345) fix(dws): enforce disabled group and direct-message sources
- [#11838](https://github.com/QwenLM/qwen-code/issues/11838) Web Shell goal approval jumps on hover and hides its actions
- [#11824](https://github.com/QwenLM/qwen-code/issues/11824) headless: a tool blocked by a hook prints "requires user approval… use -y"
- [#11823](https://github.com/QwenLM/qwen-code/issues/11823) hooks: Claude Code tool names (Bash, Read, Write) never match in tool hook matchers
- [#11811](https://github.com/QwenLM/qwen-code/issues/11811) bug(web-shell): No-workspace sessions fail over HTTP IP access

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments
- [#514](https://github.com/anthropics/skills/pull/514) Add document-typography skill: typographic quality control for generated documents
- [#1615](https://github.com/anthropics/skills/pull/1615) Add scnet-hpc skill

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 389,709 · **Open issues:** 7,332 · **Last push:** <1h ago

On September 15, 2026, there were no new releases for OpenClaw. However, several important changes were merged, including a refactor of the backup functionality to offload outcome recording to a shared worker, and fixes addressing build issues, such as stabilizing the transcript reconciliation runtime and preventing TUI maturity runs from losing build output. Notably, improvements were made to the plugin lifecycle, preserving client attribution in unloaded replies and speeding up UTC inbound history formatting. One hot new issue emerged regarding plugin-owned CLI backends being skipped at Gateway startup when certain conditions are met, which has already drawn some attention within the community.

#### ✅ Merged PRs
- [#148378](https://github.com/openclaw/openclaw/pull/148378) refactor(backup): offload outcome recording to shared worker
- [#148561](https://github.com/openclaw/openclaw/pull/148561) fix(build): stabilize transcript reconciliation runtime
- [#148227](https://github.com/openclaw/openclaw/pull/148227) fix(wear): keep the selected session title after search
- [#147980](https://github.com/openclaw/openclaw/pull/147980) refactor(update): compact lifecycle test matrices
- [#147979](https://github.com/openclaw/openclaw/pull/147979) refactor(ai): compact OpenAI transport test matrices
- [#147981](https://github.com/openclaw/openclaw/pull/147981) refactor(infra): compact runtime environment test matrices
- [#147978](https://github.com/openclaw/openclaw/pull/147978) refactor(reply): compact runtime test matrices
- [#148566](https://github.com/openclaw/openclaw/pull/148566) fix(qa): prevent TUI maturity runs from losing build output
- [#148642](https://github.com/openclaw/openclaw/pull/148642) fix(7.33): Coding Plan validation fails with thinking disabled
- [#148565](https://github.com/openclaw/openclaw/pull/148565) fix(qa): keep plugin lifecycle fixtures on private registry
- [#148564](https://github.com/openclaw/openclaw/pull/148564) fix(ollama): use prepared Gateway in paired-node QA
- [#148563](https://github.com/openclaw/openclaw/pull/148563) fix(qa): accept canonical Telegram formatting across runtimes
- [#148634](https://github.com/openclaw/openclaw/pull/148634) fix(release): cross-OS checks fail without tooling dependencies
- [#148652](https://github.com/openclaw/openclaw/pull/148652) fix(ui): preview dashboard gallery while loading
- [#148648](https://github.com/openclaw/openclaw/pull/148648) improve: speed up UTC inbound history formatting
- [#148640](https://github.com/openclaw/openclaw/pull/148640) fix(ui): slow sidebar session-title hover scrolling
- [#148635](https://github.com/openclaw/openclaw/pull/148635) fix: stop chat metadata spinning after plugin retirement
- [#148463](https://github.com/openclaw/openclaw/pull/148463) improve(plugins): skip unnecessary startup path checks
- [#148539](https://github.com/openclaw/openclaw/pull/148539) refactor(sessions): return committed transcript parent
- [#148619](https://github.com/openclaw/openclaw/pull/148619) fix(gateway): preserve private continuation timeout receipts
- [#148537](https://github.com/openclaw/openclaw/pull/148537) fix(ui): preserve client attribution in unloaded replies
- [#148638](https://github.com/openclaw/openclaw/pull/148638) fix(discord): prevent hangs during voice join cleanup
- [#148438](https://github.com/openclaw/openclaw/pull/148438) refactor(infra): simplify diagnostic flag resolution
- [#148442](https://github.com/openclaw/openclaw/pull/148442) refactor: replace duplicated filesystem helpers with fs-safe
- [#148327](https://github.com/openclaw/openclaw/pull/148327) fix(config): preserve whitespace in exec provider arguments
- [#148625](https://github.com/openclaw/openclaw/pull/148625) fix(doctor): stopped private inputs replay after session repair
- [#147634](https://github.com/openclaw/openclaw/pull/147634) fix(ui): don't classify attributed user messages as peer while viewer is unknown
- [#148615](https://github.com/openclaw/openclaw/pull/148615) improve(memory): reduce session discovery work
- [#148616](https://github.com/openclaw/openclaw/pull/148616) improve(memory): reduce archive classification work
- [#148633](https://github.com/openclaw/openclaw/pull/148633) refactor(parallel): remove duplicate response parsing test
- [#148487](https://github.com/openclaw/openclaw/pull/148487) fix: prevent chat metadata failures during unrelated session updates
- [#148624](https://github.com/openclaw/openclaw/pull/148624) fix(ui): remove the sidebar account name tooltip
- [#148315](https://github.com/openclaw/openclaw/pull/148315) refactor(plugins): reuse default API entries
- [#148626](https://github.com/openclaw/openclaw/pull/148626) test: avoid repeated source imports in managed repair fixtures
- [#148627](https://github.com/openclaw/openclaw/pull/148627) fix(ui): save global model defaults without a success banner
- [#148631](https://github.com/openclaw/openclaw/pull/148631) fix(codex): reuse pending catalog reads after polling timeouts
- [#148600](https://github.com/openclaw/openclaw/pull/148600) fix: avoid false context-engine quarantine after scope closure
- [#147946](https://github.com/openclaw/openclaw/pull/147946) refactor(sessions): extract archive publication database kernels
- [#148628](https://github.com/openclaw/openclaw/pull/148628) fix: worker live-chat cap test races incoming previews
- [#148419](https://github.com/openclaw/openclaw/pull/148419) refactor(auto-reply): derive inline directive contract
- [#148418](https://github.com/openclaw/openclaw/pull/148418) refactor(status): derive summary contract from producer
- [#148256](https://github.com/openclaw/openclaw/pull/148256) fix(ui): recover repository sessions without workers
- [#148206](https://github.com/openclaw/openclaw/pull/148206) refactor(tts): reuse canonical numeric range validation
- [#148086](https://github.com/openclaw/openclaw/pull/148086) fix(ui): stop tab callbacks retaining previously focused content
- [#148608](https://github.com/openclaw/openclaw/pull/148608) fix(worktrees): prevent cleanup failures on large ignored trees
- [#148590](https://github.com/openclaw/openclaw/pull/148590) refactor: simplify assistant display-content selection
- [#148286](https://github.com/openclaw/openclaw/pull/148286) fix(plugins): avoid Gateway stalls during artifact cleanup
- [#148618](https://github.com/openclaw/openclaw/pull/148618) fix: make manual plugin reload coverage deterministic
- [#140309](https://github.com/openclaw/openclaw/pull/140309) fix(gateway): Tailscale serve fails at boot before the daemon connects
- [#148606](https://github.com/openclaw/openclaw/pull/148606) fix(memory): drain agent state before watcher fixture cleanup
- [#148610](https://github.com/openclaw/openclaw/pull/148610) improve(test): retain profiling timeout diagnostics
- [#148101](https://github.com/openclaw/openclaw/pull/148101) fix(memory): reduce stalls during forced session reindexing
- [#148591](https://github.com/openclaw/openclaw/pull/148591) test: publish native update fixture payloads atomically
- [#148554](https://github.com/openclaw/openclaw/pull/148554) refactor(ai): remove duplicate compact body-timeout case
- [#147971](https://github.com/openclaw/openclaw/pull/147971) perf: compile measured nested tool validation
- [#148602](https://github.com/openclaw/openclaw/pull/148602) fix(ci): split plugin SDK tests from services type graph
- [#148605](https://github.com/openclaw/openclaw/pull/148605) fix(ui): use a single chevron for the agent selector
- [#148597](https://github.com/openclaw/openclaw/pull/148597) chore(plugins): report config diagnostics after inspect test failure
- [#141181](https://github.com/openclaw/openclaw/pull/141181) fix(agents): disable per-attempt AsyncLocalStorage on lifecycle dispose
- [#140678](https://github.com/openclaw/openclaw/pull/140678) fix(file-transfer): roll back bound overwrites interrupted mid-write
- [#146557](https://github.com/openclaw/openclaw/pull/146557) feat: offload data-only keyed plugin state operations
- [#148549](https://github.com/openclaw/openclaw/pull/148549) perf(gateway): batch roster facts during session row projection
- [#148459](https://github.com/openclaw/openclaw/pull/148459) improve: reduce startup work for Activity recaps
- [#148499](https://github.com/openclaw/openclaw/pull/148499) fix: stabilize config include revision tests
- [#148577](https://github.com/openclaw/openclaw/pull/148577) perf(android): reduce outbox database reads
- [#148278](https://github.com/openclaw/openclaw/pull/148278) perf(memory): avoid durable leases during captured session preparation
- [#148579](https://github.com/openclaw/openclaw/pull/148579) test: remove redundant SDK export presence checks
- [#148593](https://github.com/openclaw/openclaw/pull/148593) improve(memory): reduce repeated day formatting in dreaming status
- [#148562](https://github.com/openclaw/openclaw/pull/148562) improve: avoid Docker validation for unrelated Node planning changes
- [#147388](https://github.com/openclaw/openclaw/pull/147388) feat(ui): show a status dot on the browser tab favicon
- [#148543](https://github.com/openclaw/openclaw/pull/148543) fix: show only the hand while sidebar sessions await input
- [#148372](https://github.com/openclaw/openclaw/pull/148372) fix(sqlite): distinguish async integrity checks from admission waits
- [#148587](https://github.com/openclaw/openclaw/pull/148587) fix(test): synchronize boundary watchdog readiness
- [#148303](https://github.com/openclaw/openclaw/pull/148303) improve: avoid repeated scans when inspecting all plugins
- [#148400](https://github.com/openclaw/openclaw/pull/148400) fix: prompt for sign-in when attachment access expires
- [#148364](https://github.com/openclaw/openclaw/pull/148364) refactor(projects): move recorded-root lookups off the Gateway event loop
- [#148467](https://github.com/openclaw/openclaw/pull/148467) fix: avoid full session reloads after participant updates
- [#148572](https://github.com/openclaw/openclaw/pull/148572) improve(sessions): avoid redundant cleanup reads
- [#148305](https://github.com/openclaw/openclaw/pull/148305) refactor(config): prepare task visibility configuration asynchronously
- [#148505](https://github.com/openclaw/openclaw/pull/148505) refactor(tasks): load maintenance cron facts asynchronously
- [#148555](https://github.com/openclaw/openclaw/pull/148555) test: share restart benchmark summary fixtures
- [#148301](https://github.com/openclaw/openclaw/pull/148301) fix(auto-reply): recover failed streamed reply tails without replaying prefixes
- [#148345](https://github.com/openclaw/openclaw/pull/148345) improve(markdown): reduce transcript scanning for code-heavy replies
- [#148489](https://github.com/openclaw/openclaw/pull/148489) fix: preserve compaction checkpoints in explicit session stores
- [#147661](https://github.com/openclaw/openclaw/pull/147661) fix: restore context reads for the installed official Teams plugin
- [#148036](https://github.com/openclaw/openclaw/pull/148036) fix(ui): preserve node picker focus during capacity refreshes
- [#148456](https://github.com/openclaw/openclaw/pull/148456) fix(ui): hide redundant sender labels in solo chats
- [#148553](https://github.com/openclaw/openclaw/pull/148553) improve(sessions): reduce metadata fetched during history cleanup
- [#148526](https://github.com/openclaw/openclaw/pull/148526) feat(desktop): redesign Gateway manager around web login
- [#148316](https://github.com/openclaw/openclaw/pull/148316) refactor(agents): reuse accepted Tool Search batch text
- [#148214](https://github.com/openclaw/openclaw/pull/148214) fix(worker): restore shell analysis in node sessions
- [#148291](https://github.com/openclaw/openclaw/pull/148291) fix: keep task progress collapsed while reading earlier messages
- [#148523](https://github.com/openclaw/openclaw/pull/148523) perf(workboard): reuse board snapshots during dispatch
- [#148485](https://github.com/openclaw/openclaw/pull/148485) chore(macos): update embedded Peekaboo to 4.4.0
- [#147659](https://github.com/openclaw/openclaw/pull/147659) fix: restore Slack downloads for installed official plugins
- [#148396](https://github.com/openclaw/openclaw/pull/148396) refactor(feishu): share the direct image send path
- [#148544](https://github.com/openclaw/openclaw/pull/148544) fix(gateway): cancel node readiness waits during shutdown
- [#148302](https://github.com/openclaw/openclaw/pull/148302) improve: avoid duplicate PCM buffers in Discord recordings
- [#148440](https://github.com/openclaw/openclaw/pull/148440) fix(agents): resume output-limited tool calls without repeating work
- [#148542](https://github.com/openclaw/openclaw/pull/148542) fix: reduce first chat history loading work
- [#147312](https://github.com/openclaw/openclaw/pull/147312) fix(android): keep sidebar stable while opening
- [#148238](https://github.com/openclaw/openclaw/pull/148238) improve: avoid temporary messages during tool-result budgeting
- [#148536](https://github.com/openclaw/openclaw/pull/148536) fix(test): preserve config health in isolated Gateway fixtures
- [#148407](https://github.com/openclaw/openclaw/pull/148407) fix: stop retired Pi, OpenCode, and shared-session catalog lookups
- [#148510](https://github.com/openclaw/openclaw/pull/148510) test(ci): guard wizard recovery worker routing
- [#148496](https://github.com/openclaw/openclaw/pull/148496) perf(models): reuse normalized plugin policy in catalog preparation
- [#148534](https://github.com/openclaw/openclaw/pull/148534) test(plugins): route setup lifecycle through the database broker
- [#148102](https://github.com/openclaw/openclaw/pull/148102) fix(hooks): avoid blocking CLI during relay lookup
- [#148366](https://github.com/openclaw/openclaw/pull/148366) fix: reduce repeated SQLite work in session operations
- [#148483](https://github.com/openclaw/openclaw/pull/148483) fix(ui): prioritize the conversation during chat startup
- [#148270](https://github.com/openclaw/openclaw/pull/148270) fix(audio): honor discovered transcription executable paths
- [#148492](https://github.com/openclaw/openclaw/pull/148492) improve: speed up reply context for configured timezones
- [#148509](https://github.com/openclaw/openclaw/pull/148509) test: restore registry facade lookup coverage
- [#148468](https://github.com/openclaw/openclaw/pull/148468) improve: reduce copying for single-frame node messages
- [#148392](https://github.com/openclaw/openclaw/pull/148392) improve(imessage): keep receipt recovery off the gateway thread
- [#148331](https://github.com/openclaw/openclaw/pull/148331) fix(cron): cancelled jobs log misleading timeout warnings
- [#148406](https://github.com/openclaw/openclaw/pull/148406) improve: reduce database reads when replacing multiple sessions
- [#148437](https://github.com/openclaw/openclaw/pull/148437) fix: keep session lists responsive with large subagent results
- [#148344](https://github.com/openclaw/openclaw/pull/148344) refactor(usage): simplify z.ai quota reporting
- [#148518](https://github.com/openclaw/openclaw/pull/148518) fix(plugins): restore search icons and separate official results
- [#148513](https://github.com/openclaw/openclaw/pull/148513) fix(codex): keep catalog reads shared under cache pressure
- [#148461](https://github.com/openclaw/openclaw/pull/148461) improve(memory): speed up timezone-aware dreaming scans
- [#148506](https://github.com/openclaw/openclaw/pull/148506) fix(logging): diagnostics overlap the startup spinner
- [#148061](https://github.com/openclaw/openclaw/pull/148061) fix(update): retain admitted service manager route
- [#148508](https://github.com/openclaw/openclaw/pull/148508) fix: preserve execution budgets and late task replies
- [#145409](https://github.com/openclaw/openclaw/pull/145409) fix(ui): forward selected themes to plugin tabs
- [#148352](https://github.com/openclaw/openclaw/pull/148352) test(canvas): retry Windows temp cleanup
- [#148368](https://github.com/openclaw/openclaw/pull/148368) improve: speed up offline plugin activation
- [#148433](https://github.com/openclaw/openclaw/pull/148433) fix(ci): Windows launcher checks fail without a full process snapshot
- [#148528](https://github.com/openclaw/openclaw/pull/148528) improve: keep focused CI beside documentation changes
- [#148524](https://github.com/openclaw/openclaw/pull/148524) fix(plugins): keep native CLI callbacks in their plugin runtime
- [#148484](https://github.com/openclaw/openclaw/pull/148484) fix: avoid decoding saved prompts during transcript discovery
- [#148427](https://github.com/openclaw/openclaw/pull/148427) fix: reduce cold history and profile-read latency
- [#147795](https://github.com/openclaw/openclaw/pull/147795) fix(ui): open and focus Side chat with /btw and /side
- [#148519](https://github.com/openclaw/openclaw/pull/148519) refactor(firecrawl): remove duplicate HTTPS guard coverage
- [#147528](https://github.com/openclaw/openclaw/pull/147528) fix(ui): prevent Control UI hangs on malformed progress content
- [#148184](https://github.com/openclaw/openclaw/pull/148184) refactor: format decoded Feishu forwarded messages directly
- [#148096](https://github.com/openclaw/openclaw/pull/148096) improve(startup): avoid loading file writers for secret metadata
- [#148428](https://github.com/openclaw/openclaw/pull/148428) fix: reduce repeated model-validation work before chat requests
- [#148504](https://github.com/openclaw/openclaw/pull/148504) test: route provider integration and wizard recovery tests correctly
- [#148393](https://github.com/openclaw/openclaw/pull/148393) perf(plugin-sdk): reduce API report pooling memory
- [#148385](https://github.com/openclaw/openclaw/pull/148385) fix(ui): avoid duplicate publication and PR status rows
- [#148465](https://github.com/openclaw/openclaw/pull/148465) improve: reuse prepared plugins in startup corpus tests
- [#148349](https://github.com/openclaw/openclaw/pull/148349) fix(agents): attribute tool preparation delays to the correct stages
- [#148394](https://github.com/openclaw/openclaw/pull/148394) refactor: remove redundant Parallels source checks
- [#148410](https://github.com/openclaw/openclaw/pull/148410) fix(test): avoid timeout failures before descendant readiness
- [#148471](https://github.com/openclaw/openclaw/pull/148471) fix: open browser side panel without creating a dashboard
- [#148515](https://github.com/openclaw/openclaw/pull/148515) fix(7.33): send documented Z.AI completion limits
- [#148420](https://github.com/openclaw/openclaw/pull/148420) refactor(qa-lab): derive Matrix E2EE client contract
- [#148421](https://github.com/openclaw/openclaw/pull/148421) refactor(cli): derive session display row contracts
- [#144836](https://github.com/openclaw/openclaw/pull/144836) fix(update): report dirty checkouts as failed updates
- [#148373](https://github.com/openclaw/openclaw/pull/148373) fix: filtered task lists repeatedly reload the open session
- [#148375](https://github.com/openclaw/openclaw/pull/148375) fix(deps): remove vulnerable markdown-it smartquotes parser
- [#148405](https://github.com/openclaw/openclaw/pull/148405) fix(subagents): preserve private completions across parent yield
- [#148376](https://github.com/openclaw/openclaw/pull/148376) fix(7.33): patch markdown smartquote denial of service
- [#148245](https://github.com/openclaw/openclaw/pull/148245) fix(ci): successful upgrade checks omit detailed receipts
- [#148482](https://github.com/openclaw/openclaw/pull/148482) fix(models): refresh device sign-in credentials before discovery
- [#148434](https://github.com/openclaw/openclaw/pull/148434) fix(codex): avoid startup timeouts behind filesystem work
- [#148476](https://github.com/openclaw/openclaw/pull/148476) refactor(ai): remove redundant tool-only recovery rotations
- [#148415](https://github.com/openclaw/openclaw/pull/148415) fix: avoid waiting for other agents when loading chat metadata
- [#147993](https://github.com/openclaw/openclaw/pull/147993) refactor: simplify update state and test setup
- [#148470](https://github.com/openclaw/openclaw/pull/148470) fix: allow ten minutes for managed worktree allocation
- [#148430](https://github.com/openclaw/openclaw/pull/148430) fix(desktop): avoid macOS startup crashes and repeated alerts
- [#148445](https://github.com/openclaw/openclaw/pull/148445) fix: reduce session inventory counting work
- [#148448](https://github.com/openclaw/openclaw/pull/148448) fix: reduce token-budget work before model requests
- [#148469](https://github.com/openclaw/openclaw/pull/148469) fix(auth): retain sign-in links for local clients
- [#147519](https://github.com/openclaw/openclaw/pull/147519) feat: add a desktop-first Systems workspace
- [#148343](https://github.com/openclaw/openclaw/pull/148343) perf: avoid callbacks for ordinary plugin member reads
- [#148414](https://github.com/openclaw/openclaw/pull/148414) fix(media): inspect files from the active task worktree
- [#147901](https://github.com/openclaw/openclaw/pull/147901) fix: make Activity recaps readable and resilient
- [#148451](https://github.com/openclaw/openclaw/pull/148451) fix(browser): enable paste into agent browser panels
- [#146059](https://github.com/openclaw/openclaw/pull/146059) fix(ui): clarify environment catalog loading
- [#148450](https://github.com/openclaw/openclaw/pull/148450) refactor: simplify timeout and announcement helpers
- [#148408](https://github.com/openclaw/openclaw/pull/148408) fix: fail test runs when a worker exits unexpectedly
- [#148425](https://github.com/openclaw/openclaw/pull/148425) test(ci): deduplicate database worker registry
- [#139320](https://github.com/openclaw/openclaw/pull/139320) fix(ai): recover Responses continuations rejected under Zero Data Retention
- [#148422](https://github.com/openclaw/openclaw/pull/148422) docs(plugins): correct media helper examples
- [#148377](https://github.com/openclaw/openclaw/pull/148377) chore(i18n): refresh native locales
- [#148444](https://github.com/openclaw/openclaw/pull/148444) fix(ui): restore Custodian wizard session recovery coverage
- [#148355](https://github.com/openclaw/openclaw/pull/148355) refactor: keep outbound queue operations on their admitted connection
- [#143649](https://github.com/openclaw/openclaw/pull/143649) fix(agents): classify timeout error payloads as fallback-eligible
- [#148439](https://github.com/openclaw/openclaw/pull/148439) refactor(synology-chat): remove duplicate user lookup TLS test
- [#147667](https://github.com/openclaw/openclaw/pull/147667) fix: preserve Feishu reads after official plugin installation
- [#148336](https://github.com/openclaw/openclaw/pull/148336) refactor(proxy-capture): separate capture operations from store lifecycle
- [#148335](https://github.com/openclaw/openclaw/pull/148335) refactor(cron): move scheduled-job loading off the caller thread
- [#148383](https://github.com/openclaw/openclaw/pull/148383) fix: continue tasks after provider context overflows
- [#148386](https://github.com/openclaw/openclaw/pull/148386) fix(backup): network-share backups fail verification and restore
- [#147657](https://github.com/openclaw/openclaw/pull/147657) fix: restore member and emoji reads in official Slack installs
- [#148384](https://github.com/openclaw/openclaw/pull/148384) fix(ci): stop mobile release archives fetching unrelated blobs
- [#148318](https://github.com/openclaw/openclaw/pull/148318) refactor(auto-reply): split dispatch delivery into modules
- [#148272](https://github.com/openclaw/openclaw/pull/148272) fix(runtime): use runtime-owned Worker loaders
- [#147724](https://github.com/openclaw/openclaw/pull/147724) fix(ui): tell checking for updates apart from updating
- [#148098](https://github.com/openclaw/openclaw/pull/148098) fix(gateway): forked conversations lose their selected project
- [#148118](https://github.com/openclaw/openclaw/pull/148118) fix(plugins): preserve live ClawHub package metadata
- [#148388](https://github.com/openclaw/openclaw/pull/148388) fix: preserve agent timeouts after background commands complete
- [#148087](https://github.com/openclaw/openclaw/pull/148087) chore(deps): upgrade fs-safe to 0.11.0
- [#148380](https://github.com/openclaw/openclaw/pull/148380) refactor(irc): remove duplicate all-emoji chunking test
- [#148242](https://github.com/openclaw/openclaw/pull/148242) fix: restore schedule controls after failed saves

#### 🐛 New Issues
- [#148584](https://github.com/openclaw/openclaw/issues/148584) [Bug]: Plugin-owned CLI backends skipped at Gateway startup when models.providers.<id>.api is a core built-in (Unknown CLI backend) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#148412](https://github.com/openclaw/openclaw/issues/148412) claude-cli/anthropic credential resolution silently differs per-agent with identical config (falls back to stale ANTHROPIC_API_KEY instead of CLAUDE_CODE_OAUTH_TOKEN) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬5
- [#148620](https://github.com/openclaw/openclaw/issues/148620) Exec-approvals auto-approval breaks permanently after a gateway restart — exec-approvals.sock is never recreated `P2` `impact:security` 💬4
- [#148387](https://github.com/openclaw/openclaw/issues/148387) Fresh install auto-enables the codex plugin and widens plugins.allow from a machine-written config default `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬4
- [#147796](https://github.com/openclaw/openclaw/issues/147796) zh-CN locale: untranslated strings in Settings → Automation (command toggle labels/descriptions) `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#147732](https://github.com/openclaw/openclaw/issues/147732) Control UI chat: paragraph-level (auto) RTL direction for mixed Persian/Arabic + English messages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#148253](https://github.com/openclaw/openclaw/issues/148253) openclaw update (2026.9.3 to 2026.9.4) results in update failure: global-install-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬4
- [#148614](https://github.com/openclaw/openclaw/issues/148614) Update failure: runtime-verification-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬3
- [#148498](https://github.com/openclaw/openclaw/issues/148498) [Bug]: show_widget misclassifies HTML payload when report is an empty object `bug` `no-stale` `bug:behavior` `P2` 💬3
- [#148031](https://github.com/openclaw/openclaw/issues/148031) [Bug]: Approval forwarding drops the text prompt while the channel's native approval handler is not running `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#147776](https://github.com/openclaw/openclaw/issues/147776) [Bug]: wiki_lint discards valid summary when details exceed middleware shape limit `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#148267](https://github.com/openclaw/openclaw/issues/148267) Update failure: plugin-target-unavailable (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬3
- [#148257](https://github.com/openclaw/openclaw/issues/148257) [Discussion]: Recover from truncated/invalid tool JSON per Anthropic docs? `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#147880](https://github.com/openclaw/openclaw/issues/147880) Heartbeat delivery route broken in 2026.9.4: commands.ownerAllowFrom schema mismatch `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#147951](https://github.com/openclaw/openclaw/issues/147951) [Bug]: 2026.9.4 native Codex app-server returns 502 on loopback backend-api/codex/responses `bug` `P2` `impact:auth-provider` `clawsweeper:not-repro-on-main` 💬3
- [#147824](https://github.com/openclaw/openclaw/issues/147824) [Bug]: Channel access: "Dismiss" stays idle while the dismiss request is pending `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#148033](https://github.com/openclaw/openclaw/issues/148033) Context-engine assemble() does not receive runtimeContext.senderId (afterTurn does), breaking sender-scoped recall `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#147997](https://github.com/openclaw/openclaw/issues/147997) [Bug]: Plugin-deferred embedded runs inherit released root-work ALS context → spurious GatewayDrainingError after /new (2026.9.4) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#147920](https://github.com/openclaw/openclaw/issues/147920) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬3
- [#147919](https://github.com/openclaw/openclaw/issues/147919) Update failure: plugin-target-unavailable (2026.9.3) `clawsweeper:not-repro-on-main` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬3
- [#148545](https://github.com/openclaw/openclaw/issues/148545) Update failure: runtime-verification-failed (2026.9.3)Saved sanitized report: C:\Users\meand\.openclaw\update-reports\df05315326a5b97048865a31acde99d0273159e4a1e7a4555bab0145dd10f103.06df8ff682fd2190d6c59a2d3e5643855f5a12d188e1cd9d202fc106711583dd.md `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#148601](https://github.com/openclaw/openclaw/issues/148601) [Bug]: doctor --fix / gateway status broken on Windows: scheduled-task runtime probe spawns powershell.exe with windowsHide:true, which makes Windows PowerShell 5.1 exit 2 with empty stdout `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `P0` 💬2
- [#148559](https://github.com/openclaw/openclaw/issues/148559) gpt-5.4-nano resolves to an indeterminate OpenAI route without an authored baseUrl, rejecting every credential `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬2
- [#148557](https://github.com/openclaw/openclaw/issues/148557) OAuth auth profile never resolves to a usable route when shared auth store ownership is state-db `P1` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬2
- [#148240](https://github.com/openclaw/openclaw/issues/148240) [Bug]: Side chat loses its direct read-only tool setup on configured gateways `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#148298](https://github.com/openclaw/openclaw/issues/148298) Add end-to-end regression coverage for subagent continuation and visible completion `enhancement` `P2` `impact:session-state` `impact:message-loss` 💬2
- [#148294](https://github.com/openclaw/openclaw/issues/148294) Unify subagent resume and completion ownership across entry points `enhancement` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#148145](https://github.com/openclaw/openclaw/issues/148145) [Feature]: carry the triggering error inside the stability bundle (forceExitAfterStabilityBundle detail) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#148436](https://github.com/openclaw/openclaw/issues/148436) Update failure: managed-service-preflight (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#148395](https://github.com/openclaw/openclaw/issues/148395) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#148449](https://github.com/openclaw/openclaw/issues/148449) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#148359](https://github.com/openclaw/openclaw/issues/148359) Update failure: database-schema-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#148356](https://github.com/openclaw/openclaw/issues/148356) Update failure: repairing (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#148346](https://github.com/openclaw/openclaw/issues/148346) Update failure: plugin-target-unavailable (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#148350](https://github.com/openclaw/openclaw/issues/148350) Update failure: managed-service-handoff-already-running (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#148341](https://github.com/openclaw/openclaw/issues/148341) [Bug]: Group-scoped Telegram specialist found as account-wide route after 2026.7.1-2 → 2026.9.3 upgrade `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#148328](https://github.com/openclaw/openclaw/issues/148328) [Bug]: Self-declared Skill collection review jobs fail every run on Codex-harness agents and cannot be disabled per job (fleet evidence, 2026.9.3) `P2` `impact:ux-friction` 💬2
- [#148321](https://github.com/openclaw/openclaw/issues/148321) Update failure: managed-service-handoff-already-running (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#148319](https://github.com/openclaw/openclaw/issues/148319) Update failure: fetch-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#148314](https://github.com/openclaw/openclaw/issues/148314) Update failure: database-schema-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#148306](https://github.com/openclaw/openclaw/issues/148306) Update failure: unexpected-error (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#148304](https://github.com/openclaw/openclaw/issues/148304) Daily `Current date:` line in system prompt defeats positional prefix caches (vLLM) — should be configurable/moved `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#148287](https://github.com/openclaw/openclaw/issues/148287) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#148283](https://github.com/openclaw/openclaw/issues/148283) Update failure: global-install-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#148280](https://github.com/openclaw/openclaw/issues/148280) [Bug]: tool_call dispatch self-conflicts with "SQLite transcript changed while preparing rewrite" on a slow tool, with no external interaction at all `P1` `impact:session-state` `impact:message-loss` 💬2
- [#148236](https://github.com/openclaw/openclaw/issues/148236) [bug] Alibaba DashScope/Bailian 429 "insufficient_quota" is misclassified as billing and disables the auth profile `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#148255](https://github.com/openclaw/openclaw/issues/148255) Update failure: database-schema-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#147772](https://github.com/openclaw/openclaw/issues/147772) doctor reports CRITICAL: OAuth dir missing for a pairing channel with no registered plugin `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#147860](https://github.com/openclaw/openclaw/issues/147860) [Bug]: update canary readiness polls to 127.0.0.1 are routed through env http_proxy → spurious runtime-verification-failed 💬2
- [#148232](https://github.com/openclaw/openclaw/issues/148232) Update failure: global-install-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#148148](https://github.com/openclaw/openclaw/issues/148148) [Bug]: Plugin hot-reload capture shim breaks bindings-based native addons (better-sqlite3) by confusing package-root detection `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#147975](https://github.com/openclaw/openclaw/issues/147975) channels list repeats missing-plugin policy checks for each catalog-only row `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#148183](https://github.com/openclaw/openclaw/issues/148183) Update failure: plugin-errors (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#148029](https://github.com/openclaw/openclaw/issues/148029) Slack: enforce long-message presentation guard across final, message tool, and cron delivery `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#147890](https://github.com/openclaw/openclaw/issues/147890) Plugin registry validation repeats an already complete content comparison `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#148016](https://github.com/openclaw/openclaw/issues/148016) Update failure: post-update-plugins (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#148015](https://github.com/openclaw/openclaw/issues/148015) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#147983](https://github.com/openclaw/openclaw/issues/147983) Update failure: plugin-target-unavailable (2026.9.3) `clawsweeper:not-repro-on-main` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#147710](https://github.com/openclaw/openclaw/issues/147710) Avoid repeated install-choice catalog work in non-interactive provider setup `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#147717](https://github.com/openclaw/openclaw/issues/147717) [Bug]: doctor --fix cannot complete legacy state migration until invalid config is manually repaired (2026.9.4 upgrade) `clawsweeper:needs-info` `impact:session-state` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#147912](https://github.com/openclaw/openclaw/issues/147912) Update failure: managed-service-preflight (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#147816](https://github.com/openclaw/openclaw/issues/147816) [Bug]: Agent Channels: "No channels found" appears while channel status is loading or has failed `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#147715](https://github.com/openclaw/openclaw/issues/147715) Code Mode result fitting repeats captured byte counts `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#147694](https://github.com/openclaw/openclaw/issues/147694) [Bug]: Browser tab cleanup queues start behind its own shutdown, adding per-tab timeout delays `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#147722](https://github.com/openclaw/openclaw/issues/147722) Control UI: cannot turn off Labs "Gateway Host Desktop" — desktop.host.enabled is a required boolean so the Labs reset patch is rejected `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#147739](https://github.com/openclaw/openclaw/issues/147739) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#147701](https://github.com/openclaw/openclaw/issues/147701) [Bug]: Robinhood MCP session DELETE returns 400 after successful catalog discovery `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#147704](https://github.com/openclaw/openclaw/issues/147704) Real-world autonomous business deployment: 105 operational challenges and improvement opportunities `enhancement` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#147690](https://github.com/openclaw/openclaw/issues/147690) Sub-agent completion announces direct-deliver to the owner's personal chat when the requester is an agent (AI orchestrator) `P2` `impact:ux-friction` 💬2
- [#147700](https://github.com/openclaw/openclaw/issues/147700) Heartbeat hint text suggests invalid config CLI syntax (YAML-style colon in key) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#147655](https://github.com/openclaw/openclaw/issues/147655) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#148659](https://github.com/openclaw/openclaw/issues/148659) [Bug]: macOS onboarding remains stuck after OpenRouter is configured and inference succeeds `bug` `bug:behavior` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#148613](https://github.com/openclaw/openclaw/issues/148613) Executing private continuation timeout is persisted as generic failure `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#148650](https://github.com/openclaw/openclaw/issues/148650) [Bug]: Memory indexer subprocess cannot resolve SecretRef credentials (401 auth failure) `bug` `bug:behavior` `P1` `impact:session-state` 💬1
- [#148568](https://github.com/openclaw/openclaw/issues/148568) Bug: subagent cleanup inherits closed async scope and quarantines context engine before factory entry `maintainer` `P1` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#148629](https://github.com/openclaw/openclaw/issues/148629) Slow Codex session catalog logs do not identify the waiting phase `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#148599](https://github.com/openclaw/openclaw/issues/148599) Idle worktree cleanup fails on large ignored dependency trees `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#148603](https://github.com/openclaw/openclaw/issues/148603) [Bug]: claude-cli turns persist only the last model call's usage (stream-start output tokens) — usage.cost and Usage undercount `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#148595](https://github.com/openclaw/openclaw/issues/148595) [Bug]: Installed plugin index fails manifest hashing with symlinked configured plugin roots `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#148339](https://github.com/openclaw/openclaw/issues/148339) Code-heavy replies repeatedly scan for absent transcript headers `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#148585](https://github.com/openclaw/openclaw/issues/148585) Skill Workshop: keep applied skills in the agent workspace for backup and versioning `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#148578](https://github.com/openclaw/openclaw/issues/148578) Node pairing to an already-configured Gateway hangs at "Connect your AI" (config reload race + stale setup.activate lock) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#148575](https://github.com/openclaw/openclaw/issues/148575) [Bug]: ModelRegistry drops contextTokens, widening Astra runtime budgets from 272k to 1.05M `maintainer` `P2` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#148573](https://github.com/openclaw/openclaw/issues/148573) [Feature]: Allow unpinning Home and organizing its conversation in session groups `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#148569](https://github.com/openclaw/openclaw/issues/148569) [Bug]: Queued compaction honors engine quarantine but next-turn assembly ignores it `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#148558](https://github.com/openclaw/openclaw/issues/148558) Rate-limit Retry-After of hours is slept inside the turn instead of failing over, so scheduled jobs die at model-call-started `P1` `impact:auth-provider` 💬1
- [#148556](https://github.com/openclaw/openclaw/issues/148556) Gateway process dies on transient fetch failure: unhandled TLSSocket 'error' in SSRF guard (custom lookup dials IPv6) `impact:crash-loop` `P0` 💬1
- [#148370](https://github.com/openclaw/openclaw/issues/148370) [Bug]: Android sidebar jitters and reflows during drawer animation `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#148550](https://github.com/openclaw/openclaw/issues/148550) [BUG] Display-layer attachment blocks persisted in assistant transcript crash every subsequent LLM request (undefined.trim) `impact:session-state` `P0` `impact:ux-release-blocker` 💬1
- [#148491](https://github.com/openclaw/openclaw/issues/148491) Reply context repeatedly constructs timezone validators for history timestamps `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#148466](https://github.com/openclaw/openclaw/issues/148466) Single-frame node duplex messages incur an extra assembly copy `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#148507](https://github.com/openclaw/openclaw/issues/148507) [Bug]: Plugin search loses package icons and local publication identity `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#148460](https://github.com/openclaw/openclaw/issues/148460) Repeated timezone formatter construction slows dreaming scans `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#148535](https://github.com/openclaw/openclaw/issues/148535) [Bug]: Windows: update canary fails — $OPENCLAW_STATE_DIR\ token (backslash form) not expanded in candidate snapshot `bug` `regression` `P0` `impact:ux-release-blocker` 💬1
- [#148541](https://github.com/openclaw/openclaw/issues/148541) `computer` tool in paired scope ignores node capabilities and hardcodes the V1 action set `P2` `impact:other` 💬1
- [#147719](https://github.com/openclaw/openclaw/issues/147719) [Bug]: /btw does not open the side chat or focus its composer `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#148531](https://github.com/openclaw/openclaw/issues/148531) browser snapshot prints nothing and exits 0 when the capture fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#148529](https://github.com/openclaw/openclaw/issues/148529) 2026.9.4: Gateway takes ~12 minutes from start to ready on a 632-agent fleet (2026.7.1-2: ~2 s), with a per-phase breakdown `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#148527](https://github.com/openclaw/openclaw/issues/148527) OpenAI image generation over ChatGPT sign-in silently ignores `model`, `size` and `quality`, and OpenClaw reports the request as if honoured `P2` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬1
- [#148308](https://github.com/openclaw/openclaw/issues/148308) [Bug]: Gateway silently loses its foreground Tailscale Serve claim when tailscaled restarts and never re-claims it (mode=serve) `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#148512](https://github.com/openclaw/openclaw/issues/148512) Control UI: transcript images and attachment cards sit flush against the message text `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#148411](https://github.com/openclaw/openclaw/issues/148411) Chat metadata for one agent waits on unrelated agent preparation `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#148490](https://github.com/openclaw/openclaw/issues/148490) [Bug]: WebChat auto-TTS replaces assistant text; tagged mode emits no audio in 2026.9.4 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#148486](https://github.com/openclaw/openclaw/issues/148486) [Bug]: skill_workshop plugin: missing Workshop-owned disposition for quarantined proposals `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#148480](https://github.com/openclaw/openclaw/issues/148480) [Enhancement]: Reuse restricted Codex completion context to avoid repeated cold history bootstraps `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#148479](https://github.com/openclaw/openclaw/issues/148479) [Bug]: MCP OAuth token renewal invalidates native Codex thread and forces cold history reload `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#148475](https://github.com/openclaw/openclaw/issues/148475) Control UI: investigate multi-second warm reload delay before HTML response `maintainer` `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` 💬1
- [#148474](https://github.com/openclaw/openclaw/issues/148474) Control UI: attribute remaining startup admission and reveal latency `maintainer` `P3` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#148458](https://github.com/openclaw/openclaw/issues/148458) [Feature]: Route Surface display clicks back into their owning conversation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#148454](https://github.com/openclaw/openclaw/issues/148454) Managed upgrade self-conflicts when legacy parent retains lease during migrated finalization `maintainer` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#148443](https://github.com/openclaw/openclaw/issues/148443) CI preflight fails on multiple PRs: split timing generation repeats files for core-runtime-infra-storage-state `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#148379](https://github.com/openclaw/openclaw/issues/148379) Mobile beta CI times out while archiving trusted scripts in a partial clone `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#148409](https://github.com/openclaw/openclaw/issues/148409) Feature: Compact source previews for researched chat answers `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#148357](https://github.com/openclaw/openclaw/issues/148357) Avoid sorting all body lines for wiki search snippets `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#148358](https://github.com/openclaw/openclaw/issues/148358) Azure OpenAI GPT-6 models require explicit reasoning_effort:none for tools compatibility `P2` `impact:auth-provider` 💬1
- [#148342](https://github.com/openclaw/openclaw/issues/148342) [Bug]: Remote CDP checks pass but tab opening fails with Docker sidecar localhost advertisement (2026.9.3) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#148332](https://github.com/openclaw/openclaw/issues/148332) Heartbeat monitors time out while only waiting behind busy work `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#148338](https://github.com/openclaw/openclaw/issues/148338) Channel-agnostic: empty inbound envelopes trigger phantom turn scheduling `P2` `impact:session-state` 💬1
- [#148324](https://github.com/openclaw/openclaw/issues/148324) openclaw-weixin (polling channel) replies fail 100% with PreparedModelCatalogConfigReplacedError since 2026.9.4 `P1` `impact:message-loss` 💬1
- [#148323](https://github.com/openclaw/openclaw/issues/148323) [Bug]: Expired xAI OAuth profile cannot reconnect from Models `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#148329](https://github.com/openclaw/openclaw/issues/148329) Codex app-server: authority-dependent dynamic tool descriptions rotate the bound thread on every origin change (full context re-sent uncached) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#148313](https://github.com/openclaw/openclaw/issues/148313) Feature request: per-Telegram-topic scoping for ambient heartbeat job `P3` 💬1
- [#148307](https://github.com/openclaw/openclaw/issues/148307) Error: database is locked on agent DB when session reclamation exceeds the 5s busy timeout (464 MB DB, 33 sessions, zero freelist) `clawsweeper:needs-info` `impact:session-state` `P0` `issue-rating: 🦐 gold shrimp` 💬1
- [#148297](https://github.com/openclaw/openclaw/issues/148297) Control UI duplicates selected final answers stored with toolUse stopReason `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#148284](https://github.com/openclaw/openclaw/issues/148284) Long formatted Telegram replies repeatedly parse text without role headers `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#148292](https://github.com/openclaw/openclaw/issues/148292) [Bug] Session auto-compaction: single attempt, no timeout, coupled to session's primary model — 23-minute hangs and stalled runs `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#148295](https://github.com/openclaw/openclaw/issues/148295) Parent sessions_send resumes execution without adopting the paused subagent task `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#147956](https://github.com/openclaw/openclaw/issues/147956) [Bug] Cron read-only snapshot cleanup throws without rollback guard `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#148322](https://github.com/openclaw/openclaw/issues/148322) openclaw status openclaw gateway status openclaw logs --follow openclaw doctor openclaw channels status --probe 💬1
- [#148296](https://github.com/openclaw/openclaw/issues/148296) Fire-and-forget sessions_send silently abandons replies after its wait expires `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#147964](https://github.com/openclaw/openclaw/issues/147964) [Bug] Unbounded watchedSessions array allows DoS via large replace payload `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#147968](https://github.com/openclaw/openclaw/issues/147968) [Bug] Insecure chmod handling leaves state.db sidecars world-readable on umask 022 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#148147](https://github.com/openclaw/openclaw/issues/148147) QA onboarding attribution can exhaust its timeout during runtime imports `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#148282](https://github.com/openclaw/openclaw/issues/148282) sessions_history returns only the newest N messages; offset cannot page back to a session's start `P2` `impact:session-state` 💬1
- [#148259](https://github.com/openclaw/openclaw/issues/148259) Reduce pending-output trimming work for exec bursts `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#148274](https://github.com/openclaw/openclaw/issues/148274) [Bug]: Slack exec completion can cross apps, DMs, and lose the originating thread `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬1
- [#148133](https://github.com/openclaw/openclaw/issues/148133) [Bug]: restart degrades to force-exit when server.close throws — close error never surfaces (restart_close_failed) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#148269](https://github.com/openclaw/openclaw/issues/148269) [Bug]: Telegram bot's own echoed message injected as trailing role:"user" turn, causing repetitive/incoherent model responses `bug` `bug:behavior` `P1` `impact:session-state` 💬1
- [#147952](https://github.com/openclaw/openclaw/issues/147952) Feature: expand chat CI monitoring into jobs and steps `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#148251](https://github.com/openclaw/openclaw/issues/148251) [Bug]: Telegram chat-window context reintroduces messages excluded by Control UI rewind `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#148249](https://github.com/openclaw/openclaw/issues/148249) [Bug]: Windows Node exec approval fails with "approval id does not match request" on 2026.9.4 `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#148246](https://github.com/openclaw/openclaw/issues/148246) [msteams] Bot Framework outbound auth ignores configured tenantId — App.cloud never gets tenant-specific loginTenant, silently breaks all replies for single-tenant bots `P1` `impact:message-loss` `impact:auth-provider` 💬1
- [#147868](https://github.com/openclaw/openclaw/issues/147868) Cold CLI metadata resolution snapshots shared SQLite state twice `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#147839](https://github.com/openclaw/openclaw/issues/147839) Bound backing-string retention in streamed visible text `maintainer` `P2` `clawsweeper:source-repro` `impact:crash-loop` 💬1
- [#148222](https://github.com/openclaw/openclaw/issues/148222) [Bug]: sessions_spawn subagents on embedded/Ollama models get zero tools — "inherited tools.allow" ceiling never includes tools outside OpenClaw's own bundled registry `P1` `impact:other` 💬1
- [#148210](https://github.com/openclaw/openclaw/issues/148210) claude-cli backend: add AskUserQuestion to the default --disallowedTools (siblings ScheduleWakeup/Monitor/CronCreate already excluded) so unbridged native questions fail fast instead of wedging the turn `P2` `impact:session-state` 💬1
- [#148205](https://github.com/openclaw/openclaw/issues/148205) [Feature]: Switch saved Gateways from the Android sidebar `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#148197](https://github.com/openclaw/openclaw/issues/148197) Avoid repeated sequence scans while paging chat history `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#148191](https://github.com/openclaw/openclaw/issues/148191) Add Grok Build native session catalog `P3` 💬1
- [#148189](https://github.com/openclaw/openclaw/issues/148189) [Bug]: classifyCompactionReason substring-matches "summary", so a context engine's benign idle status becomes summary_failed and kills the turn `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#148186](https://github.com/openclaw/openclaw/issues/148186) Memory promotion can persist YAML frontmatter as durable memory `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#148177](https://github.com/openclaw/openclaw/issues/148177) Avoid cumulative key-set copies while assembling plugin setup registrations `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#148169](https://github.com/openclaw/openclaw/issues/148169) [Bug]: Windows Openclaw onboard codex device code has incorrect URL link `bug` `bug:behavior` `P2` `impact:auth-provider` 💬1
- [#148006](https://github.com/openclaw/openclaw/issues/148006) [Bug]: `WebSocket closed 1006` from ChatGPT Responses transport ends the run unclassified and skips model fallback 💬1
- [#148164](https://github.com/openclaw/openclaw/issues/148164) [Bug]: Session-changes diff still reachable outside Git checkouts on the file-review path (#122147 gate not applied there) `P3` 💬1
- [#148160](https://github.com/openclaw/openclaw/issues/148160) Release fallback rejects reachable commits with large ref enumeration `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#148158](https://github.com/openclaw/openclaw/issues/148158) WeChat channel inbound dispatch fails with PreparedModelCatalogConfigReplacedError `impact:message-loss` `impact:auth-provider` `P0` `impact:ux-release-blocker` 💬1
- [#148140](https://github.com/openclaw/openclaw/issues/148140) [Bug]: QA web_open can outlive cancellation and lose browser cleanup ownership `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#148131](https://github.com/openclaw/openclaw/issues/148131) Env SecretRef on a bracket-quoted config key (e.g. models.providers["local.service"].apiKey) is skipped by the command secret gate `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#148119](https://github.com/openclaw/openclaw/issues/148119) Background exec tasks expose no real command output in task views (result is a generic placeholder) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#148115](https://github.com/openclaw/openclaw/issues/148115) [Bug]: Operator RPC can be sent before connect/hello-ok, causing 1008 PolicyViolation `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#148088](https://github.com/openclaw/openclaw/issues/148088) Heartbeat session silently falls back to claude-fable-5-1 after an auth-unknown history-resume error, and the wrong model's output is sent to the user unfiltered `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:session-state` 💬1
- [#148083](https://github.com/openclaw/openclaw/issues/148083) [Bug] Local (OpenAI-compatible) providers: `usage.contextUsage` anchor never populated → prompt-size estimation falls back to char-count heuristic → proactive compaction never fires, reactive compaction dead-ends `P2` `impact:session-state` 💬1
- [#148076](https://github.com/openclaw/openclaw/issues/148076) [Bug]: Completed subagent runs with failed settlement retry forever — `subagent completion owner changed before settlement` loop survives restarts, no CLI recovery path `P2` `impact:session-state` 💬1
- [#148056](https://github.com/openclaw/openclaw/issues/148056) [Feature]: Hardware-aware setup for local OCR and image understanding `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147777](https://github.com/openclaw/openclaw/issues/147777) [Bug]: Source capsule filesystem errors lack operation and source path `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#148065](https://github.com/openclaw/openclaw/issues/148065) [Feature]: Read GitHub references beside chat through plugin link readers `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#148062](https://github.com/openclaw/openclaw/issues/148062) [Feature]: Expose host-authenticated requester lineage to spawned tool hooks `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#148060](https://github.com/openclaw/openclaw/issues/148060) talk.providers.google.personaPrompt has no effect -- prepareSynthesis hook never called `P2` `impact:ux-friction` 💬1
- [#148053](https://github.com/openclaw/openclaw/issues/148053) [Bug]: Transient retry after a classified server_is_overloaded fails unclassified, discarding the reason — model fallback chain never consulted (reason=none) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#148054](https://github.com/openclaw/openclaw/issues/148054) [Feature]: Defer unused bundled LSP startup until capability discovery `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147947](https://github.com/openclaw/openclaw/issues/147947) [Bug]: Workboard lifecycle test asserts before SQLite sweep completion `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#147910](https://github.com/openclaw/openclaw/issues/147910) Session browsing repeatedly decodes unrelated saved state `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#148020](https://github.com/openclaw/openclaw/issues/148020) backup create --verify fails: portable path collision between case-only WhatsApp app-state-sync-key filenames `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#148000](https://github.com/openclaw/openclaw/issues/148000) Add explicit plugin entitlement for subagent.run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#147738](https://github.com/openclaw/openclaw/issues/147738) [Bug]: Stacked session owner avatars show a dark ring instead of a cutout `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147995](https://github.com/openclaw/openclaw/issues/147995) [Feature]: Add opt-in notices for automatic session resets `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147982](https://github.com/openclaw/openclaw/issues/147982) Simplify Gateway session-name precedence `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#147965](https://github.com/openclaw/openclaw/issues/147965) [Bug] Gateway metadata projection missing fallback for legacy sessions `P2` `impact:ux-friction` `clawsweeper:bulk-filed` 💬1
- [#147967](https://github.com/openclaw/openclaw/issues/147967) [Bug] Race condition in noteCronJobsStoreCommit under concurrent commits `P3` `clawsweeper:bulk-filed` 💬1
- [#147976](https://github.com/openclaw/openclaw/issues/147976) [Bug]: Session rows with three or more owners hide the "+N" counter behind the avatar `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#147966](https://github.com/openclaw/openclaw/issues/147966) [Feature] Add metrics for cron store revisions to detect hot churn `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147962](https://github.com/openclaw/openclaw/issues/147962) [Bug] Missing validation for cron job config revision race `P2` `impact:data-loss` `clawsweeper:bulk-filed` 💬1
- [#147963](https://github.com/openclaw/openclaw/issues/147963) [Docs Bug] Missing docs for cron store transaction hooks `P3` `clawsweeper:bulk-filed` 💬1
- [#147960](https://github.com/openclaw/openclaw/issues/147960) [Feature] Debounce presence broadcast to avoid thundering herd `P3` `clawsweeper:no-new-fix-pr` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#147957](https://github.com/openclaw/openclaw/issues/147957) [Bug] Session viewer presence replaceSet leaks on rapid disconnect `P2` `impact:ux-friction` `clawsweeper:bulk-filed` 💬1
- [#147959](https://github.com/openclaw/openclaw/issues/147959) [Bug] Cron store revision Map grows without pruning on hot path `P3` `clawsweeper:bulk-filed` 💬1
- [#147958](https://github.com/openclaw/openclaw/issues/147958) [Feature] Split grandfathered oversized files to restore tsgo incremental perf `P3` `clawsweeper:no-new-fix-pr` `issue-rating: 🦪 silver shellfish` `clawsweeper:bulk-filed` 💬1
- [#147937](https://github.com/openclaw/openclaw/issues/147937) Avoid repeated Android chat history preparation during streaming `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#147955](https://github.com/openclaw/openclaw/issues/147955) [Feature]: Scoped, resumable session inventory for agents `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#147938](https://github.com/openclaw/openclaw/issues/147938) Session progress cards are never reconciled at end of turn, so successful runs routinely end understated (2026.9.4) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147935](https://github.com/openclaw/openclaw/issues/147935) [Feature]: Add lifecycle-aware identity and handoff contracts for long-running agents `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#147906](https://github.com/openclaw/openclaw/issues/147906) feishu: final replies with code fences are routed to interactive cards, losing Feishu's native language label + copy button `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#147895](https://github.com/openclaw/openclaw/issues/147895) [Bug]: Feishu mid-turn text is never delivered when streaming.block.enabled is unset; agents.defaults.blockStreamingDefault is ignored `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#147874](https://github.com/openclaw/openclaw/issues/147874) Telegram established DMs drop provider chat_window on plain replies `P1` `impact:session-state` 💬1
- [#147857](https://github.com/openclaw/openclaw/issues/147857) [Bug]: 2026.9.4 sessions_spawn caps children at the caller session's tool ceiling — breaks existing coding-worker agents spawned from messaging/CLI-runtime mains, no changelog or doctor migration `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#147820](https://github.com/openclaw/openclaw/issues/147820) [Bug]: Worktrees: No managed worktrees appears while the inventory is loading `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147835](https://github.com/openclaw/openclaw/issues/147835) [Bug]: Settings: default policies and zero servers appear while the configuration read has failed `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147826](https://github.com/openclaw/openclaw/issues/147826) [Bug]: Channel reply dispatch permanently fails with `PreparedModelCatalogConfigReplacedError`, surviving process restart (follow-up to #128515) `bug` `bug:behavior` `impact:message-loss` `impact:auth-provider` 💬1
- [#147831](https://github.com/openclaw/openclaw/issues/147831) [Bug]: Channel access: no configured accounts is shown while the request inventory has failed `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147829](https://github.com/openclaw/openclaw/issues/147829) [Bug]: Memory: update instruction appears while the Gateway is reconnecting `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147823](https://github.com/openclaw/openclaw/issues/147823) [Bug]: Login: "Connect" remains idle while a manual connection attempt is pending `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147819](https://github.com/openclaw/openclaw/issues/147819) [Bug]: Agent Automations: No jobs assigned appears while jobs are loading or the read has failed `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147814](https://github.com/openclaw/openclaw/issues/147814) [Bug]: Tasks: empty task messages appear while the task list is loading or has failed `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147817](https://github.com/openclaw/openclaw/issues/147817) [Bug]: Labs: "Using default: Disabled" appears while the configuration read has failed `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147815](https://github.com/openclaw/openclaw/issues/147815) [Bug]: Agent Skills: "No skills found" appears while skills are loading or the request has failed `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#147812](https://github.com/openclaw/openclaw/issues/147812) cron isolated-agent setup timeout forces full gateway restart, killing live sessions `P2` `impact:session-state` `impact:crash-loop` 💬1
- [#147809](https://github.com/openclaw/openclaw/issues/147809) [Bug]: Plugins: details have no visible loading copy while fetching `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#147810](https://github.com/openclaw/openclaw/issues/147810) [Bug]: Settings: sections have no visible loading copy while fetching data `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#147808](https://github.com/openclaw/openclaw/issues/147808) [Bug]: Sessions: dialog says Create group while group creation is pending `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147803](https://github.com/openclaw/openclaw/issues/147803) [Bug]: Logbook: empty timeline says it is collecting snapshots while capture is off `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147801](https://github.com/openclaw/openclaw/issues/147801) [Bug]: Automations: Save changes says Saving while Run now is pending `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#147800](https://github.com/openclaw/openclaw/issues/147800) [Bug]: Skills: dependency button says Installing while saving the enabled setting `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147775](https://github.com/openclaw/openclaw/issues/147775) Reduce local HTML page-planning work for long styled Telegram messages `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#147757](https://github.com/openclaw/openclaw/issues/147757) Feature: keep System busyness visible as a compact widget `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#147789](https://github.com/openclaw/openclaw/issues/147789) Update failure: doctor-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#147769](https://github.com/openclaw/openclaw/issues/147769) [Feature]: Add SimSlim to iOS CI with stock release qualification `enhancement` `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#147759](https://github.com/openclaw/openclaw/issues/147759) [Bug]: WebChat prompts delayed 8–62 minutes after native Codex handoff/steering failures (2026.9.4) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#147745](https://github.com/openclaw/openclaw/issues/147745) [Bug]: Claude CLI transcript probe/resolvers ignore CLAUDE_CONFIG_DIR — harmless resume miss on 2026.9.3, session reset on EVERY turn on 2026.9.4 `P1` `impact:session-state` 💬1
- [#147740](https://github.com/openclaw/openclaw/issues/147740) Update failure: plugin-target-unavailable (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#147674](https://github.com/openclaw/openclaw/issues/147674) Reduce local conversion work for long styled Slack messages `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#147728](https://github.com/openclaw/openclaw/issues/147728) [Bug]: xAI OAuth inference 426s: x-grok-client-version carries OpenClaw's version, and isolated/utility completions omit the Grok headers entirely `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#147696](https://github.com/openclaw/openclaw/issues/147696) [Bug]: Chat history boundary still says "Show earlier" while earlier messages are loading `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#147693](https://github.com/openclaw/openclaw/issues/147693) [Bug]: CDP cancellation stops at handshake completion, leaving browser operations and gateway shutdown stuck `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#147681](https://github.com/openclaw/openclaw/issues/147681) FreeBSD: support foreground updates with verified service and package ownership `enhancement` `maintainer` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#147680](https://github.com/openclaw/openclaw/issues/147680) Maintenance: consolidate gateway protocol type export ownership `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#148658](https://github.com/openclaw/openclaw/issues/148658) [Bug]: macOS realtime Talk cancels multi-sentence replies with playback-overflow `bug` `bug:behavior`
- [#148003](https://github.com/openclaw/openclaw/issues/148003) [Feature]: capture Gateway CPU profiles without a debugger listener `enhancement` `maintainer`

#### 🔒 Closed Issues
- [#31331](https://github.com/openclaw/openclaw/issues/31331) [Bug]: Docker Install + Sandbox can't workspaceAccess at all
- [#99586](https://github.com/openclaw/openclaw/issues/99586) [Bug]: Runtime tool surface returns blank body after gateway-touching operations; container restart only briefly clears it
- [#135776](https://github.com/openclaw/openclaw/issues/135776) openclaw update leaves exact-pinned official channel plugins on the previous release (core/plugin version skew)
- [#132720](https://github.com/openclaw/openclaw/issues/132720) claude-cli 410 session_expired on 2026.9.1-beta.1 with valid paste-token (embedded runner); doctor migrates primary off claude-cli
- [#92206](https://github.com/openclaw/openclaw/issues/92206) [Bug]: tools.exec.security config not applied at runtime after gateway restart
- [#141409](https://github.com/openclaw/openclaw/issues/141409) [Bug]: Openclaw Update In Progress Message Issue
- [#148620](https://github.com/openclaw/openclaw/issues/148620) Exec-approvals auto-approval breaks permanently after a gateway restart — exec-approvals.sock is never recreated
- [#148253](https://github.com/openclaw/openclaw/issues/148253) openclaw update (2026.9.3 to 2026.9.4) results in update failure: global-install-failed (2026.9.3)
- [#140605](https://github.com/openclaw/openclaw/issues/140605) OpenClaw 2026.9.2 still leaks inbound metadata on Feishu DM (follow-up to #93966)
- [#122898](https://github.com/openclaw/openclaw/issues/122898) [Feature]: Add built-in file discovery tools for agents
- [#134726](https://github.com/openclaw/openclaw/issues/134726) [Bug]: managed update 2026.7.1-2 → 2026.8.1 fails global install verify on stock (non-hardened) npm config — shipped install-guard missing from packaged inventory
- [#135856](https://github.com/openclaw/openclaw/issues/135856) [Bug]: doctor --fix refuses maintenance on Windows with Spanish display language — schtasks locale not normalized before parsing
- [#135084](https://github.com/openclaw/openclaw/issues/135084) [Bug]: Memory-source provenance repair runs inline in first turn after upgrade — system-prompt stage blocked ~285s
- [#119515](https://github.com/openclaw/openclaw/issues/119515) [Bug]: CLI-driven `openclaw update` still strands the managed gateway; the failed-update recovery that closed #118244 is only wired into gateway-initiated updates
- [#141122](https://github.com/openclaw/openclaw/issues/141122) Gateway heap leak: a per-run AsyncLocalStorage is never .disable()d, so storageList grows without bound and taxes every async resource
- [#138531](https://github.com/openclaw/openclaw/issues/138531) [Bug]: # L5 — Upstream-issue: model-fallback triggert niet bij zachte providerfout (definitief, 2026-09-03)
- [#146841](https://github.com/openclaw/openclaw/issues/146841) Feature Request: Add privacy controls
- [#148031](https://github.com/openclaw/openclaw/issues/148031) [Bug]: Approval forwarding drops the text prompt while the channel's native approval handler is not running
- [#147776](https://github.com/openclaw/openclaw/issues/147776) [Bug]: wiki_lint discards valid summary when details exceed middleware shape limit
- [#147880](https://github.com/openclaw/openclaw/issues/147880) Heartbeat delivery route broken in 2026.9.4: commands.ownerAllowFrom schema mismatch
- [#145371](https://github.com/openclaw/openclaw/issues/145371) Terminal subagent projections rewrite linked flows on every Gateway restart
- [#147951](https://github.com/openclaw/openclaw/issues/147951) [Bug]: 2026.9.4 native Codex app-server returns 502 on loopback backend-api/codex/responses
- [#128455](https://github.com/openclaw/openclaw/issues/128455) [Feature]: Propagate workflow lineage and report ownership across remote agent handoffs
- [#128163](https://github.com/openclaw/openclaw/issues/128163) Feature: provide a durable, policy-driven incident pipeline for bounded self-healing
- [#147346](https://github.com/openclaw/openclaw/issues/147346) [Bug]: doctor --fix disables healthy skills on env-only readiness (false negative, e.g. sag with file-based key)
- [#147259](https://github.com/openclaw/openclaw/issues/147259) [Bug]: openclaw logs still creates SQLite WAL/SHM sidecars despite #116869 read-only fix
- [#143420](https://github.com/openclaw/openclaw/issues/143420) Forced drain timeout leaves background task records running; successor restart drains on them again
- [#135717](https://github.com/openclaw/openclaw/issues/135717) Maintenance lease heartbeat: startup-ready notification can be overtaken by the 5s timeout under a starved parent event loop
- [#121013](https://github.com/openclaw/openclaw/issues/121013) No stable release lets Opus 5 use its 1M context window: fix landed on main 2026-07-25, still unreleased; beta has its own reply-breaking regression
- [#120408](https://github.com/openclaw/openclaw/issues/120408) config patch hot-apply reports success but runtime reads stale config until gateway restart (new agents.entries.*, sandbox.docker.image)
- [#148145](https://github.com/openclaw/openclaw/issues/148145) [Feature]: carry the triggering error inside the stability bundle (forceExitAfterStabilityBundle detail)
- [#138954](https://github.com/openclaw/openclaw/issues/138954) GPT-6 Astra tool-calling fails on Zero Data Retention orgs: "Previous response cannot be used for this organization due to Zero Data Retention"
- [#148328](https://github.com/openclaw/openclaw/issues/148328) [Bug]: Self-declared Skill collection review jobs fail every run on Codex-harness agents and cannot be disabled per job (fleet evidence, 2026.9.3)
- [#148280](https://github.com/openclaw/openclaw/issues/148280) [Bug]: tool_call dispatch self-conflicts with "SQLite transcript changed while preparing rewrite" on a slow tool, with no external interaction at all
- [#147496](https://github.com/openclaw/openclaw/issues/147496) Update failure: runtime-verification-failed (2026.9.3)
- [#146010](https://github.com/openclaw/openclaw/issues/146010) Control UI deletion gives retry-only timeouts for pending results on offline device workers
- [#147772](https://github.com/openclaw/openclaw/issues/147772) doctor reports CRITICAL: OAuth dir missing for a pairing channel with no registered plugin
- [#147860](https://github.com/openclaw/openclaw/issues/147860) [Bug]: update canary readiness polls to 127.0.0.1 are routed through env http_proxy → spurious runtime-verification-failed
- [#148148](https://github.com/openclaw/openclaw/issues/148148) [Bug]: Plugin hot-reload capture shim breaks bindings-based native addons (better-sqlite3) by confusing package-root detection
- [#147975](https://github.com/openclaw/openclaw/issues/147975) channels list repeats missing-plugin policy checks for each catalog-only row
- [#148029](https://github.com/openclaw/openclaw/issues/148029) Slack: enforce long-message presentation guard across final, message tool, and cron delivery
- [#147890](https://github.com/openclaw/openclaw/issues/147890) Plugin registry validation repeats an already complete content comparison
- [#147710](https://github.com/openclaw/openclaw/issues/147710) Avoid repeated install-choice catalog work in non-interactive provider setup
- [#143713](https://github.com/openclaw/openclaw/issues/143713) [Bug]: macOS Control UI hangs in JavaScriptCore RegExp while handling WebSocket messages
- [#133245](https://github.com/openclaw/openclaw/issues/133245) [Bug]: Queued ingress expires while waiting behind another follow-up turn
- [#147715](https://github.com/openclaw/openclaw/issues/147715) Code Mode result fitting repeats captured byte counts
- [#147601](https://github.com/openclaw/openclaw/issues/147601) Reduce unnecessary Markdown work in progress notes
- [#147690](https://github.com/openclaw/openclaw/issues/147690) Sub-agent completion announces direct-deliver to the owner's personal chat when the requester is an agent (AI orchestrator)
- [#135937](https://github.com/openclaw/openclaw/issues/135937) [Bug]: secrets configure/apply cannot migrate the shared authProfiles store — audit --check never reaches clean on multi-agent gateways
- [#137414](https://github.com/openclaw/openclaw/issues/137414) [internal] Request stable npm release carrying f66a2c6a (PR #123235) and 8c5442c0 (PR #135713) so downstream packaging pipelines unblock
- [#137307](https://github.com/openclaw/openclaw/issues/137307) doctor recommends bootstrapMaxChars for USER.md's fixed 4,000-char cap; the correct suppression exists in the sibling renderer
- [#127363](https://github.com/openclaw/openclaw/issues/127363) Failed `git rebase --abort` is ignored before the updater restarts the Gateway
- [#127351](https://github.com/openclaw/openclaw/issues/127351) Failed Git dependency install is restart-safe after source-only rollback
- [#127350](https://github.com/openclaw/openclaw/issues/127350) Package update restarts an activated candidate after blocking post-install Doctor failure
- [#125578](https://github.com/openclaw/openclaw/issues/125578) [Bug]: Gateway restart-loops on doctor-fixable legacy config instead of applying registered migration
- [#122056](https://github.com/openclaw/openclaw/issues/122056) Doctor can stamp agent schema v17 without completing v17 migration
- [#119200](https://github.com/openclaw/openclaw/issues/119200) [Bug]: a throwing channel plugin migration callback crashes doctor/gateway startup
- [#148613](https://github.com/openclaw/openclaw/issues/148613) Executing private continuation timeout is persisted as generic failure
- [#148568](https://github.com/openclaw/openclaw/issues/148568) Bug: subagent cleanup inherits closed async scope and quarantines context engine before factory entry
- [#147495](https://github.com/openclaw/openclaw/issues/147495) [Bug]: Local/failed repository sessions have no UI path to (re)dispatch to a worker
- [#148599](https://github.com/openclaw/openclaw/issues/148599) Idle worktree cleanup fails on large ignored dependency trees
- [#139097](https://github.com/openclaw/openclaw/issues/139097) Gateway exits without retry when Tailscale is not ready at logon (serve claim NoState failure)
- [#147343](https://github.com/openclaw/openclaw/issues/147343) Control UI: status dot on the browser tab favicon (working, needs attention, done, disconnected)
- [#148339](https://github.com/openclaw/openclaw/issues/148339) Code-heavy replies repeatedly scan for absent transcript headers
- [#148558](https://github.com/openclaw/openclaw/issues/148558) Rate-limit Retry-After of hours is slept inside the turn instead of failing over, so scheduled jobs die at model-call-started
- [#148556](https://github.com/openclaw/openclaw/issues/148556) Gateway process dies on transient fetch failure: unhandled TLSSocket 'error' in SSRF guard (custom lookup dials IPv6)
- [#148370](https://github.com/openclaw/openclaw/issues/148370) [Bug]: Android sidebar jitters and reflows during drawer animation
- [#148550](https://github.com/openclaw/openclaw/issues/148550) [BUG] Display-layer attachment blocks persisted in assistant transcript crash every subsequent LLM request (undefined.trim)
- [#148491](https://github.com/openclaw/openclaw/issues/148491) Reply context repeatedly constructs timezone validators for history timestamps
- [#148466](https://github.com/openclaw/openclaw/issues/148466) Single-frame node duplex messages incur an extra assembly copy
- [#148507](https://github.com/openclaw/openclaw/issues/148507) [Bug]: Plugin search loses package icons and local publication identity
- [#148460](https://github.com/openclaw/openclaw/issues/148460) Repeated timezone formatter construction slows dreaming scans
- [#148535](https://github.com/openclaw/openclaw/issues/148535) [Bug]: Windows: update canary fails — $OPENCLAW_STATE_DIR\ token (backslash form) not expanded in candidate snapshot
- [#148541](https://github.com/openclaw/openclaw/issues/148541) `computer` tool in paired scope ignores node capabilities and hardcodes the V1 action set
- [#147719](https://github.com/openclaw/openclaw/issues/147719) [Bug]: /btw does not open the side chat or focus its composer
- [#148411](https://github.com/openclaw/openclaw/issues/148411) Chat metadata for one agent waits on unrelated agent preparation
- [#148486](https://github.com/openclaw/openclaw/issues/148486) [Bug]: skill_workshop plugin: missing Workshop-owned disposition for quarantined proposals
- [#147217](https://github.com/openclaw/openclaw/issues/147217) [Feature]: Contextual Systems sidebar and desktop workspace
- [#148458](https://github.com/openclaw/openclaw/issues/148458) [Feature]: Route Surface display clicks back into their owning conversation
- [#148379](https://github.com/openclaw/openclaw/issues/148379) Mobile beta CI times out while archiving trusted scripts in a partial clone
- [#147503](https://github.com/openclaw/openclaw/issues/147503) [Bug]: Updates page says "Updating…" while it is only checking for updates
- [#148357](https://github.com/openclaw/openclaw/issues/148357) Avoid sorting all body lines for wiki search snippets
- [#147576](https://github.com/openclaw/openclaw/issues/147576) Tauri desktop: save and switch Gateways independently of Primary
- [#148358](https://github.com/openclaw/openclaw/issues/148358) Azure OpenAI GPT-6 models require explicit reasoning_effort:none for tools compatibility
- [#148338](https://github.com/openclaw/openclaw/issues/148338) Channel-agnostic: empty inbound envelopes trigger phantom turn scheduling
- [#148324](https://github.com/openclaw/openclaw/issues/148324) openclaw-weixin (polling channel) replies fail 100% with PreparedModelCatalogConfigReplacedError since 2026.9.4
- [#148313](https://github.com/openclaw/openclaw/issues/148313) Feature request: per-Telegram-topic scoping for ambient heartbeat job
- [#148284](https://github.com/openclaw/openclaw/issues/148284) Long formatted Telegram replies repeatedly parse text without role headers
- [#148322](https://github.com/openclaw/openclaw/issues/148322) openclaw status openclaw gateway status openclaw logs --follow openclaw doctor openclaw channels status --probe
- [#148147](https://github.com/openclaw/openclaw/issues/148147) QA onboarding attribution can exhaust its timeout during runtime imports
- [#148282](https://github.com/openclaw/openclaw/issues/148282) sessions_history returns only the newest N messages; offset cannot page back to a session's start
- [#148259](https://github.com/openclaw/openclaw/issues/148259) Reduce pending-output trimming work for exec bursts
- [#148133](https://github.com/openclaw/openclaw/issues/148133) [Bug]: restart degrades to force-exit when server.close throws — close error never surfaces (restart_close_failed)
- [#148269](https://github.com/openclaw/openclaw/issues/148269) [Bug]: Telegram bot's own echoed message injected as trailing role:"user" turn, causing repetitive/incoherent model responses
- [#147952](https://github.com/openclaw/openclaw/issues/147952) Feature: expand chat CI monitoring into jobs and steps
- [#148246](https://github.com/openclaw/openclaw/issues/148246) [msteams] Bot Framework outbound auth ignores configured tenantId — App.cloud never gets tenant-specific loginTenant, silently breaks all replies for single-tenant bots
- [#147868](https://github.com/openclaw/openclaw/issues/147868) Cold CLI metadata resolution snapshots shared SQLite state twice
- [#147839](https://github.com/openclaw/openclaw/issues/147839) Bound backing-string retention in streamed visible text
- [#148222](https://github.com/openclaw/openclaw/issues/148222) [Bug]: sessions_spawn subagents on embedded/Ollama models get zero tools — "inherited tools.allow" ceiling never includes tools outside OpenClaw's own bundled registry
- [#148210](https://github.com/openclaw/openclaw/issues/148210) claude-cli backend: add AskUserQuestion to the default --disallowedTools (siblings ScheduleWakeup/Monitor/CronCreate already excluded) so unbridged native questions fail fast instead of wedging the turn
- [#148191](https://github.com/openclaw/openclaw/issues/148191) Add Grok Build native session catalog
- [#148169](https://github.com/openclaw/openclaw/issues/148169) [Bug]: Windows Openclaw onboard codex device code has incorrect URL link
- [#148006](https://github.com/openclaw/openclaw/issues/148006) [Bug]: `WebSocket closed 1006` from ChatGPT Responses transport ends the run unclassified and skips model fallback
- [#148164](https://github.com/openclaw/openclaw/issues/148164) [Bug]: Session-changes diff still reachable outside Git checkouts on the file-review path (#122147 gate not applied there)
- [#148158](https://github.com/openclaw/openclaw/issues/148158) WeChat channel inbound dispatch fails with PreparedModelCatalogConfigReplacedError
- [#148115](https://github.com/openclaw/openclaw/issues/148115) [Bug]: Operator RPC can be sent before connect/hello-ok, causing 1008 PolicyViolation
- [#146419](https://github.com/openclaw/openclaw/issues/146419) [Bug]: Slow-consumer 1008 close is destroyed by immediate terminate()
- [#148083](https://github.com/openclaw/openclaw/issues/148083) [Bug] Local (OpenAI-compatible) providers: `usage.contextUsage` anchor never populated → prompt-size estimation falls back to char-count heuristic → proactive compaction never fires, reactive compaction dead-ends
- [#148076](https://github.com/openclaw/openclaw/issues/148076) [Bug]: Completed subagent runs with failed settlement retry forever — `subagent completion owner changed before settlement` loop survives restarts, no CLI recovery path
- [#147777](https://github.com/openclaw/openclaw/issues/147777) [Bug]: Source capsule filesystem errors lack operation and source path
- [#148060](https://github.com/openclaw/openclaw/issues/148060) talk.providers.google.personaPrompt has no effect -- prepareSynthesis hook never called
- [#147947](https://github.com/openclaw/openclaw/issues/147947) [Bug]: Workboard lifecycle test asserts before SQLite sweep completion
- [#147910](https://github.com/openclaw/openclaw/issues/147910) Session browsing repeatedly decodes unrelated saved state
- [#147738](https://github.com/openclaw/openclaw/issues/147738) [Bug]: Stacked session owner avatars show a dark ring instead of a cutout
- [#147965](https://github.com/openclaw/openclaw/issues/147965) [Bug] Gateway metadata projection missing fallback for legacy sessions
- [#147182](https://github.com/openclaw/openclaw/issues/147182) [Bug]: Control UI PR status stays stale and shows Publishing for reads
- [#147967](https://github.com/openclaw/openclaw/issues/147967) [Bug] Race condition in noteCronJobsStoreCommit under concurrent commits
- [#147962](https://github.com/openclaw/openclaw/issues/147962) [Bug] Missing validation for cron job config revision race
- [#147963](https://github.com/openclaw/openclaw/issues/147963) [Docs Bug] Missing docs for cron store transaction hooks
- [#147957](https://github.com/openclaw/openclaw/issues/147957) [Bug] Session viewer presence replaceSet leaks on rapid disconnect
- [#147959](https://github.com/openclaw/openclaw/issues/147959) [Bug] Cron store revision Map grows without pruning on hot path
- [#147937](https://github.com/openclaw/openclaw/issues/147937) Avoid repeated Android chat history preparation during streaming
- [#146939](https://github.com/openclaw/openclaw/issues/146939) [Bug]: memory_get reads a different USER.md than memory_search with explicit agent ownership
- [#147874](https://github.com/openclaw/openclaw/issues/147874) Telegram established DMs drop provider chat_window on plain replies
- [#147298](https://github.com/openclaw/openclaw/issues/147298) [Bug]: QA Gateway teardown can lose final buffered log output
- [#147826](https://github.com/openclaw/openclaw/issues/147826) [Bug]: Channel reply dispatch permanently fails with `PreparedModelCatalogConfigReplacedError`, surviving process restart (follow-up to #128515)
- [#147812](https://github.com/openclaw/openclaw/issues/147812) cron isolated-agent setup timeout forces full gateway restart, killing live sessions
- [#147775](https://github.com/openclaw/openclaw/issues/147775) Reduce local HTML page-planning work for long styled Telegram messages
- [#147757](https://github.com/openclaw/openclaw/issues/147757) Feature: keep System busyness visible as a compact widget
- [#147524](https://github.com/openclaw/openclaw/issues/147524) [Bug]: Sidebar agent menu does not always center the agent name under its avatar
- [#147745](https://github.com/openclaw/openclaw/issues/147745) [Bug]: Claude CLI transcript probe/resolvers ignore CLAUDE_CONFIG_DIR — harmless resume miss on 2026.9.3, session reset on EVERY turn on 2026.9.4
- [#147740](https://github.com/openclaw/openclaw/issues/147740) Update failure: plugin-target-unavailable (2026.9.3)
- [#147674](https://github.com/openclaw/openclaw/issues/147674) Reduce local conversion work for long styled Slack messages
- [#144139](https://github.com/openclaw/openclaw/issues/144139) Configured models lose selectable context-window choices in the startup catalog
- [#147548](https://github.com/openclaw/openclaw/issues/147548) [Feature]: Verify real Feishu Gateway replies against Crabline

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 245,528 · **Open issues:** 43,172 · **Last push:** <1h ago

On September 14, 2026, Hermes Agent released version v0.21.3 (v2026.9.14), a patch update that consolidates approximately 338 pull requests since the last version, v0.21.2, primarily to ensure relevant sign-in fixes for remote gateways reach cloud agents through auto-updating. Noteworthy new issues include #111084, which addresses 18 open issues that have already been resolved, and #111272, highlighting a bug where a successful update combined with a gateway restart leads to a misleading "did not restart running gateways" warning during CLI startup and `hermes doctor` diagnostics. Additionally, issue #111294 reports an outstanding user experience problem where the tool appears stuck on an indeterminate spinner after results are generated. The blend of new bugs indicates ongoing refinements and the need for user experience enhancements as the team continues to develop and stabilize the platform.

#### 🚀 New Releases
- [v2026.9.14](https://github.com/nousresearch/hermes-agent/releases/tag/v2026.9.14) Hermes Agent v0.21.3 (v2026.9.14)

#### 🐛 New Issues
- [#111084](https://github.com/NousResearch/hermes-agent/issues/111084) [Wave] Stale duplicates: 18 open issues whose canonicals already landed — batch-close `type/refactor` `P3` `needs-decision` 💬8
- [#111272](https://github.com/NousResearch/hermes-agent/issues/111272) bug(update): successful update + gateway restart leaves `fleet_restart_pending` marker — every CLI startup and `hermes doctor` print a false "did not restart running gateways" warning `type/bug` `comp/cli` `comp/gateway` `P2` 💬3
- [#111294](https://github.com/NousResearch/hermes-agent/issues/111294) [Bug][Desktop] Turn appears stuck on a bare indeterminate spinner for minutes after tool results — silent post-tool compression gap; only Stop + "continue" recovers `type/bug` `comp/agent` `P2` `sweeper:risk-session-state` 💬2
- [#110974](https://github.com/NousResearch/hermes-agent/issues/110974) [Bug]: skills_guard path_traversal matches markdown doc links — a 3-level ../ link in a README blocks community skill installs `type/bug` `tool/skills` `P3` 💬2
- [#111304](https://github.com/NousResearch/hermes-agent/issues/111304) [Bug]: `approvals.mode: off` still prompts for `computer_use` actions until `/yolo` is enabled `type/bug` `duplicate` `comp/tools` `P2` 💬2
- [#111323](https://github.com/NousResearch/hermes-agent/issues/111323) [Bug]: managed llama-server never starts on newer llama.cpp builds — _spawn() pins the removed -dio flag `type/bug` `comp/agent` `comp/cli` `P2` 💬1
- [#111380](https://github.com/NousResearch/hermes-agent/issues/111380) Cron: toolset resolution failure falls back to the full default toolset (fail-open)
- [#111325](https://github.com/NousResearch/hermes-agent/issues/111325) Desktop: second Enter should steer a queued follow-up without interrupting `type/feature` `comp/tui` `P3`
- [#111365](https://github.com/NousResearch/hermes-agent/issues/111365) [Bug]: Gateway-spawned delegate_task children leak into session_search results
- [#111364](https://github.com/NousResearch/hermes-agent/issues/111364) [Wave] Telegram gateway reliability — logging, reconnect recovery, send_path_degraded replay
- [#111356](https://github.com/NousResearch/hermes-agent/issues/111356) test: auxiliary timeout FD-ownership assertion races owner-side deadline check
- [#111349](https://github.com/NousResearch/hermes-agent/issues/111349) [Feature]: TUI should always show the reasoning effort, and model switches shouldn't silently carry it over
- [#111333](https://github.com/NousResearch/hermes-agent/issues/111333) Wave: Matrix adapter reliability contracts (fail-loud delivery + MAS token refresh) `type/feature` `comp/gateway` `platform/matrix` `P2`
- [#111334](https://github.com/NousResearch/hermes-agent/issues/111334) skills/plugin scanner: remaining false-positive classes after Sep salvage (#96974 / #110218 / #111274 / #111254) `type/bug` `comp/plugins` `tool/skills` `P2`
- [#111335](https://github.com/NousResearch/hermes-agent/issues/111335) skills_guard: `destructive_root_rm` temp-root exemption is bypassable via `..` (`rm -rf /tmp/../etc`) `type/bug` `tool/skills` `P3`
- [#111338](https://github.com/NousResearch/hermes-agent/issues/111338) [Bug]: Desktop session-area flicker — unbounded slot-retry storm when profiles > maxBackends, and stale cron-scheduler profile list after profile delete `type/bug` `comp/cron` `P2` `comp/desktop`
- [#111317](https://github.com/NousResearch/hermes-agent/issues/111317) [Bug]: /journey does not show a skill created in the foreground (e.g. by /learn) until it has been used once `type/bug` `comp/cli` `tool/skills` `P3`
- [#111311](https://github.com/NousResearch/hermes-agent/issues/111311) [Bug]: Gemini 3.8 flash can't process images because of corrupted thought signature `type/bug` `comp/agent` `tool/vision` `provider/openrouter`

#### 🔒 Closed Issues
- [#103339](https://github.com/NousResearch/hermes-agent/issues/103339) [Bug] Second writer via `doctor --fix` / `repair_state_db_schema` / hosted_rooms still corrupts live-WAL state.db — upstream guards are fail-open; proposing a lazy flock single-writer gate (field-verified)
- [#111084](https://github.com/NousResearch/hermes-agent/issues/111084) [Wave] Stale duplicates: 18 open issues whose canonicals already landed — batch-close
- [#104851](https://github.com/NousResearch/hermes-agent/issues/104851) fix(computer_use): fallback to inputSchema check for element_token when driver capability map is empty (cua-driver 0.23.2+ compat)
- [#89527](https://github.com/NousResearch/hermes-agent/issues/89527) computer_use: per-tool `capabilities` from cua-driver are silently dropped, so `element_token` is never attached
- [#108846](https://github.com/NousResearch/hermes-agent/issues/108846) computer_use: element_index clicks always refused — MCP SDK drops cua-driver's non-spec `capabilities` field, so element_token is never attached
- [#104055](https://github.com/NousResearch/hermes-agent/issues/104055) fix(cron): bot-chat delivery resolves -p profile via $HOME, breaks from profile-scoped envs
- [#110974](https://github.com/NousResearch/hermes-agent/issues/110974) [Bug]: skills_guard path_traversal matches markdown doc links — a 3-level ../ link in a README blocks community skill installs
- [#111304](https://github.com/NousResearch/hermes-agent/issues/111304) [Bug]: `approvals.mode: off` still prompts for `computer_use` actions until `/yolo` is enabled
- [#92003](https://github.com/NousResearch/hermes-agent/issues/92003) [Bug]: Bot Mode group follow-ups can interrupt active turns and consume unseen deltas
- [#108355](https://github.com/NousResearch/hermes-agent/issues/108355) [Bug]: computer_use input never lands: click(element=) structurally refused (snapshot_id_required — wrapper passes no element_token/snapshot_id/window_id) and CGEvent px clicks are verified no-ops on Finder

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 91,754 · **Open issues:** 7,957 · **Last push:** <1h ago

On September 15, 2026, vLLM did not release any new versions but saw significant development with several important merged pull requests. Notable updates include bug fixes for the ROCm framework, enhancing performance with the dequantization of MXFP8 weights and improvements in the initialization of Ray NIXL agents for sharded RDT. Developers addressed several critical bugs, including a fix for hidden-state extraction that inflated KV cache memory requirements and a resolution for nondeterministic greedy LoRA decoding. The team also tackled new issues, with the most concerning being the RDNA3 fused MoE that hardcodes a 2x gated-activation factor, breaking compatibility with non-gated models. Overall, the day focused on crucial bug fixes and performance enhancements while maintaining system stability.

#### ✅ Merged PRs
- [#56560](https://github.com/vllm-project/vllm/pull/56560) [ROCm][DSv4.1][Perf] Dequantize the MXFP8 weight once when dot_scaled cannot be used
- [#56915](https://github.com/vllm-project/vllm/pull/56915) [Bugfix][Rust] Fix HF multi-turn dataset integration
- [#56687](https://github.com/vllm-project/vllm/pull/56687) [ROCm][Bugfix] Initialize Ray NIXL agents for sharded RDT
- [#56382](https://github.com/vllm-project/vllm/pull/56382) [Bugfix] Carry over queued work when materializing the dedicated stream
- [#56662](https://github.com/vllm-project/vllm/pull/56662) [Bugfix] Redact credentials from benchmark logs
- [#51104](https://github.com/vllm-project/vllm/pull/51104) [Rust][Benchmark] Support HF ShareGPT datasets in multi-turn mode
- [#56666](https://github.com/vllm-project/vllm/pull/56666) [MRV2] Run pooling post processing on non-final PP ranks
- [#52228](https://github.com/vllm-project/vllm/pull/52228) [Model Runner V2] Acceptance estimation for adaptive verification
- [#56513](https://github.com/vllm-project/vllm/pull/56513) [ROCm][DSV4.1][Perf] Fold the mHC post step into the delayed pre projection
- [#56169](https://github.com/vllm-project/vllm/pull/56169) [CI] Check target branch freshness before starting CI
- [#56866](https://github.com/vllm-project/vllm/pull/56866) [Bugfix][Rust Frontend] Restore prost test dependency
- [#55016](https://github.com/vllm-project/vllm/pull/55016) [Doc][Metrics] Fix spec-decode PromQL examples to use the exposed names
- [#56628](https://github.com/vllm-project/vllm/pull/56628) [ROCm][DSV4.1][Perf] Stride the DSA decode candidate mask over the live context
- [#55538](https://github.com/vllm-project/vllm/pull/55538) [Bugfix][DSA] Write nvfp4_ds_mla from the fused norm+rope kernel
- [#51204](https://github.com/vllm-project/vllm/pull/51204) [Quantization] Select linear backends per quantization
- [#51167](https://github.com/vllm-project/vllm/pull/51167) [Model] Voxtral Realtime: add support for `CUDAGraphMode.FULL_DECODE_ONLY`
- [#51084](https://github.com/vllm-project/vllm/pull/51084) [Profiler] Add Proton CUDA graph attribution for MRV2
- [#56633](https://github.com/vllm-project/vllm/pull/56633) [Perf][DSv4.1] Fold the mHC post block into the delayed pre projection
- [#56808](https://github.com/vllm-project/vllm/pull/56808) [CI] Initialize ubatch runner in cudagraph unit test
- [#55650](https://github.com/vllm-project/vllm/pull/55650) [Bugfix] Make KV cache and MFU log lines backend-neutral
- [#53793](https://github.com/vllm-project/vllm/pull/53793) [Perf][Kernel][Quantization] Fuse ReLU2 with static FP8 activation quantization
- [#56366](https://github.com/vllm-project/vllm/pull/56366) [Bugfix][Rust Frontend][Multimodal] Align DeepSeek V4.1 and Kimi K3 media with rendered placeholders
- [#56299](https://github.com/vllm-project/vllm/pull/56299) [Bugfix][Frontend] Support Responses text types in DeepSeek V4.1
- [#55624](https://github.com/vllm-project/vllm/pull/55624) [V1][Metrics] Support Sliding Window Attention (SWA) and hybrid layers in MFU/MBU estimation
- [#56309](https://github.com/vllm-project/vllm/pull/56309) [watermarking hardening] Add e2e test and basic GSM8K quality tests
- [#56338](https://github.com/vllm-project/vllm/pull/56338) [Rust Frontend] Forward per-request watermarking controls
- [#56071](https://github.com/vllm-project/vllm/pull/56071) [Model] Add support for Nanbeige4.2 (transformers backend)
- [#56722](https://github.com/vllm-project/vllm/pull/56722) [PCP][DCP] Declare FlashMLASparse MTP support at CP interleave > 1
- [#50894](https://github.com/vllm-project/vllm/pull/50894) [Bugfix] Scale KV page size for hidden states extraction with TP
- [#55133](https://github.com/vllm-project/vllm/pull/55133) [Spec Decode] Fix Qwen3 DSpark d2t requirement for padded-vocab drafts
- [#56467](https://github.com/vllm-project/vllm/pull/56467) [Docs] Move russellb to emeritus committer
- [#55071](https://github.com/vllm-project/vllm/pull/55071) [LoRA][Refactor] Unify multimodal LoRA token count hooks
- [#49417](https://github.com/vllm-project/vllm/pull/49417) [Bugfix] MiniCPM-V 4.6: fix ViT self-attn qkv weight loading
- [#56791](https://github.com/vllm-project/vllm/pull/56791) [Bugfix] Trim stale consequence claims from unannotated-eagle warning
- [#53696](https://github.com/vllm-project/vllm/pull/53696) [Bugfix][Models] Fix OpenPangu sleep mode with static sinks
- [#53721](https://github.com/vllm-project/vllm/pull/53721) [ROCm][Connector] SWA+HMA-support in MoRI-IO connector (Gemma4)
- [#56766](https://github.com/vllm-project/vllm/pull/56766) [CI] Keep OTel bytecode out of mounted checkouts
- [#55309](https://github.com/vllm-project/vllm/pull/55309) [Qwen3.8-Flash-Next] Fuse PLE residual and QSA output gate
- [#55823](https://github.com/vllm-project/vllm/pull/55823) [Bugfix][KV Offload] Reuse in-flight async lookup probes
- [#54934](https://github.com/vllm-project/vllm/pull/54934) [CI][CPU] Add speculative-decoding coverage to CPU CI
- [#51794](https://github.com/vllm-project/vllm/pull/51794) [ROCm][Perf] Enable CSA multi-stream overlap for DeepSeek-V4
- [#56671](https://github.com/vllm-project/vllm/pull/56671) [CI][Test] Mock CPU backend block sizes in kv_connector unit conftest
- [#56317](https://github.com/vllm-project/vllm/pull/56317) [Bugfix][NixlPush] Guard _remote_agents read in _do_send_reg_notif (X1)
- [#56729](https://github.com/vllm-project/vllm/pull/56729) [Security] Cap Qwen-VL video sampling knobs
- [#56786](https://github.com/vllm-project/vllm/pull/56786) [Bugfix][EPD] Preserve media processing options in encoder requests
- [#55176](https://github.com/vllm-project/vllm/pull/55176) [Frontend] Replace `VLLM_ENABLE_SCALE_OUT_ENDPOINTS` with `--enable-scale-out`
- [#50984](https://github.com/vllm-project/vllm/pull/50984) [Bugfix][Mooncake] Report failed remote KV loads to the scheduler
- [#54965](https://github.com/vllm-project/vllm/pull/54965) [ROCm][Perf] W4A16: keep skinny GEMM zero-points packed 4-bit
- [#55738](https://github.com/vllm-project/vllm/pull/55738) [Perf][GLM-5.3-Flash] Dense/masked-MHA sparse prefill for the NoPE (256, 0, 256) layout + skip the NoPE K concat
- [#56773](https://github.com/vllm-project/vllm/pull/56773) [Bugfix][CPU] Fix DeepSeek-R1 (FP8 MLA + MoE) correctness on CPU backend
- [#56016](https://github.com/vllm-project/vllm/pull/56016) [CPU][Profiler] Group torch profiler tables by input shape when record_shapes is on

#### 🐛 New Issues
- [#56790](https://github.com/vllm-project/vllm/issues/56790) [Bug]: RDNA3 fused MoE hardcodes 2x gated-activation factor, breaks non-gated (relu2) models — Nemotron-3 on gfx1100 `bug` `rocm` `quantization` 💬7
- [#56771](https://github.com/vllm-project/vllm/issues/56771) [Bug]: DeepSeek-V4.1-Flash + DSpark speculative decoding — illegal memory access in SM120 sparse-MLA prefill on long prompts `speculative-decoding` `deepseek` `DSv4.1` 💬4
- [#56795](https://github.com/vllm-project/vllm/issues/56795) [Bug]: Native KV offload advances next_stored_block_idx for every KV group when no keys were stored 💬3
- [#56774](https://github.com/vllm-project/vllm/issues/56774) [Bug]: Hidden-state extraction inflates KV cache memory requirements by 24× on a hybrid Mamba/MLA model `bug` `kimi` 💬3
- [#56830](https://github.com/vllm-project/vllm/issues/56830) [Bug]: Startup memory-profiling assertion aborts whenever free memory grows, contradicting documented support for GPU co-tenancy `bug` 💬2
- [#56832](https://github.com/vllm-project/vllm/issues/56832) [Bug]: --moe-backend marlin is applied to the unquantized MTP draft MoE and aborts (Qwen3.8-Flash-Next NVFP4 + speculative mtp) `quantization` 💬2
- [#56797](https://github.com/vllm-project/vllm/issues/56797) [Perf][Spec Decode] DeepSeek-V4.1-Flash DSpark mean acceptance length only 2.82 on GSM8K (k=5, 2×8 H20) `bug` `deepseek` `DSv4.1` 💬2
- [#56769](https://github.com/vllm-project/vllm/issues/56769) [Bug] Greedy LoRA decode nondeterministic on Qwen3.8-27B-FP8 (rank-64 Unsloth, linear_attn modules) 💬2
- [#56768](https://github.com/vllm-project/vllm/issues/56768) [RFC] Exact single-session HOT continuation for hybrid Mamba models `rocm` 💬2
- [#56868](https://github.com/vllm-project/vllm/issues/56868) [Bug]: GLM-5.3-Flash long-decode degeneration after accumulated reasoning decode `bug` `tool-calling` `quantization` `glm` 💬1
- [#56889](https://github.com/vllm-project/vllm/issues/56889) [Bug]: HiSparseConnector produces incoherent outputs on GLM-5.2 DEP8 `bug` `glm` 💬1
- [#56850](https://github.com/vllm-project/vllm/issues/56850) [Bug]: Kimi K3 reasoning parser returns chain-of-thought as content when generation is truncated mid-think `tool-calling` `kimi` `k3` 💬1
- [#56815](https://github.com/vllm-project/vllm/issues/56815) [Bug]: Engram async prefetch (#56512) reintroduces silent ctx-load decode flake on single-GPU Qwen4Exp PLE CPU-offload (nightlies past 2026-09-13) `bug` `quantization` 💬1
- [#56824](https://github.com/vllm-project/vllm/issues/56824) [Bug]: Engine startup on DGX Spark (GB10, unified memory) collapses host memory — NV_ERR_NO_MEMORY while MemAvailable reports ~22 GiB `quantization` 💬1
- [#56785](https://github.com/vllm-project/vllm/issues/56785) [Bug]: HiSparse MLA indexer crashes with CUDA error: invalid argument during piecewise cudagraph capture - logical_topk_ready is recorded inside the capture segment but waited on after eager_break_during_capture ends capture 💬1
- [#56745](https://github.com/vllm-project/vllm/issues/56745) [RFC]: Return `routed_experts` on the terminal streaming chunk `RFC` 💬1
- [#56772](https://github.com/vllm-project/vllm/issues/56772) [KV Connector][Offloading] Canonical MLA+DSA secondary transfers use TP-dependent row sizes 💬1
- [#56917](https://github.com/vllm-project/vllm/issues/56917) [Feature]: TP=2 graph capture + MTP speculative decoding crash on Arc B70 — fix already exists upstream, unmerged `feature request` `intel-gpu` `speculative-decoding`
- [#56916](https://github.com/vllm-project/vllm/issues/56916) [RFC]: Windowed Hidden-State Collection for vLLM Rollouts `RFC`
- [#56900](https://github.com/vllm-project/vllm/issues/56900) [Bug]: Qwen/Qwen1.5-MoE-A2.7B-Chat produces degenerate output with torch.compile (VLLM_COMPILE) but correct output without it on vLLM 0.28.0 (H100, torch 2.13.0+cu130); CUDA graphs, compile cache and custom_ops make no difference `torch.compile` `qwen` `quantization`
- [#56896](https://github.com/vllm-project/vllm/issues/56896) Port PR #55738 (GLM-5.3-Flash NoPE MLA prefill) to older vLLM trees + SM120 note `glm`
- [#56894](https://github.com/vllm-project/vllm/issues/56894) [KV Offload] Offload namespace records a different cache_dtype depending on the executor, so a TP1 MLA engine never shares blocks with mp engines
- [#56892](https://github.com/vllm-project/vllm/issues/56892) [Bug/Perf] DeepSeek-V4.1-Flash on SM120 (RTX PRO 6000 Blackwell, 8xTP): extremely low decode throughput with --enforce-eager; CUDA graphs unusable — please prioritize SM120 graph capture fix `deepseek` `DSv4.1`
- [#56887](https://github.com/vllm-project/vllm/issues/56887) [Bug]: moe_wna16_gemm (csrc/libtorch_stable/moe/moe_wna16.cu) is not run-to-run deterministic: split-K partial sums are combined with 16-bit atomicAdd `quantization`
- [#56880](https://github.com/vllm-project/vllm/issues/56880) [RFC]: Add NCP-OLMo support and NCP DFlash speculative decoding `speculative-decoding` `quantization`
- [#56871](https://github.com/vllm-project/vllm/issues/56871) [KV Offload] CPU offload capacity is divided by the number of KV cache groups on hybrid models: every `OffloadKey` (block_hash, group_idx) allocates a full multi-group chunk row
- [#56860](https://github.com/vllm-project/vllm/issues/56860) [RFC]: Per-position target token logprobs for prefill scoring `RFC`
- [#56851](https://github.com/vllm-project/vllm/issues/56851) [RFC]: Request level text and derender output on `/inference/v1/generate` `RFC`
- [#56847](https://github.com/vllm-project/vllm/issues/56847) [Feature]: Add decode-priority prefill cadence for single-node decode ITL `feature request`
- [#56840](https://github.com/vllm-project/vllm/issues/56840) [Bug]: pythonic / llama4_pythonic tool parsers return a tool call when streaming but raw text when not (trailing prose, leading-underscore names) `tool-calling`
- [#56837](https://github.com/vllm-project/vllm/issues/56837) [Bug] DeepSeek-V4.1 on sm_120 (RTX PRO 2000 Blackwell): no FlashInfer SM120 sparse-MLA kernel for (num_heads=64, topk=1152); FlashMLA sparse is SM90a/SM100f only `deepseek` `quantization` `DSv4.1`
- [#56829](https://github.com/vllm-project/vllm/issues/56829) [Bug]: cu129-nightly image ships torch 2.14.0+cu130 with cu129 torchvision/torchaudio, vllm serve dies on 'operator torchvision::nms does not exist'
- [#56828](https://github.com/vllm-project/vllm/issues/56828) [Bug][KV Offload][P2P] Peer-down on one rank does not fail loads or block new loads to sibling ranks of the same source
- [#56823](https://github.com/vllm-project/vllm/issues/56823) [Bug][KV Offload][P2P] Connect and lookup waits have no deadline, leaving requests in RETRY indefinitely
- [#56816](https://github.com/vllm-project/vllm/issues/56816) [RFC]: Add Watchdog for Engine and Worker Monitoring `RFC`
- [#56792](https://github.com/vllm-project/vllm/issues/56792) DSpark checkpoints exported in fill-in (DFlash 1+N) layout silently serve with <1% acceptance: the optional layout flag is absent from their configs, and the default anchor-first sampler is wrong for them
- [#56787](https://github.com/vllm-project/vllm/issues/56787) [Bug]: DFlash2 draft model fails torch.compile on XPU — dynamic-shape stride assert in custom-op fake kernel (workaround: disable compile on draft class) `intel-gpu` `speculative-decoding` `torch.compile`
- [#56770](https://github.com/vllm-project/vllm/issues/56770) [Bug]: compressed-tensors MXFP4 W4A16 is misclassified as W4A4 and dispatched to W4A4 kernel on SM100+ `bug` `quantization`
- [#56767](https://github.com/vllm-project/vllm/issues/56767) [Feature]: Compact LM Head fast path for fixed-candidate-set scoring (rerankers / relevance scoring) `feature request` `quantization`
- [#56759](https://github.com/vllm-project/vllm/issues/56759) [Bug]: Humming MoE permute scratch memory scales with number of MoE layers `bug`

#### 🔒 Closed Issues
- [#56696](https://github.com/vllm-project/vllm/issues/56696) [Bug]: --otlp-traces-endpoint initializes tracer but never sends spans (instrument_otel/manual_instrument_otel never invoked)
- [#38988](https://github.com/vllm-project/vllm/issues/38988) [Performance]: Qwen 3.5 27B Prefix Caching
- [#39060](https://github.com/vllm-project/vllm/issues/39060) [Feature]: Speculative Prefill — Draft-Assisted Sparse Prefill for TTFT Reduction
- [#56790](https://github.com/vllm-project/vllm/issues/56790) [Bug]: RDNA3 fused MoE hardcodes 2x gated-activation factor, breaks non-gated (relu2) models — Nemotron-3 on gfx1100
- [#40406](https://github.com/vllm-project/vllm/issues/40406) [vLLM IR] Port non-silu activations
- [#40608](https://github.com/vllm-project/vllm/issues/40608) [Kimi] Track Kimi K2.5/K2.6 MLA + EAGLE serving on Blackwell (DCP4/DCP8, FP8 KV, draft backend split)
- [#38916](https://github.com/vllm-project/vllm/issues/38916) [Bug]: Qwen3.5 Inference TimeoutError with flashinfer gdn backend
- [#38994](https://github.com/vllm-project/vllm/issues/38994) Qwen-3.5 9B often producing repetitive/garbled output with Intel Backend
- [#39682](https://github.com/vllm-project/vllm/issues/39682) [BUGS] vLLM V1 Engine Hangs After Weight Loading on Blackwell (sm_121) Multi-Node Ray Setup (TP=2)
- [#52567](https://github.com/vllm-project/vllm/issues/52567) [RFC]: First-class agentic inference support in vLLM
- [#54726](https://github.com/vllm-project/vllm/issues/54726) [Bug]: Qwen3.8-Flash-Next-FP8 + MooncakeStoreConnector fails at startup
- [#40934](https://github.com/vllm-project/vllm/issues/40934) [Bug]: --quantization fp8 fails on Qwen3.5 hybrid (qwen3_next gated delta net) with cutlass_scaled_mm Error Internal on GB10 sm_121
- [#55117](https://github.com/vllm-project/vllm/issues/55117) [Feature]: Let `vllm launch render` / `--tokens-only` override an inherited `VLLM_ENABLE_SCALE_OUT_ENDPOINTS=0` instead of failing startup
- [#56209](https://github.com/vllm-project/vllm/issues/56209) [Bug]: Beam Search ignores skip_special_tokens and exposes special tokens in decoded output
- [#36222](https://github.com/vllm-project/vllm/issues/36222) [Usage]: MoE flatten_tp_size should not unconditionally include dp_size — DP loses its original semantics for MoE layers
- [#40405](https://github.com/vllm-project/vllm/issues/40405) [vLLM IR] Port SiluAndMul
- [#41071](https://github.com/vllm-project/vllm/issues/41071) [Bug]: KeyError: 'layers.0.mlp.experts.w13_bias' when running quantized model on vLLM
- [#41477](https://github.com/vllm-project/vllm/issues/41477) [Bug]: Triton MXFP4 MoE kernel uses .tile::scatter4 PTX (Hopper/SM10 only) — fails on SM 12.1 (GB10/DGX Spark); Marlin fallback hits #37030
- [#50719](https://github.com/vllm-project/vllm/issues/50719) [Bug][PD][Mooncake] Decode requests stuck in WAITING_FOR_REMOTE_KVS and fail with Timeout waiting for P side ready
- [#56768](https://github.com/vllm-project/vllm/issues/56768) [RFC] Exact single-session HOT continuation for hybrid Mamba models
- [#56850](https://github.com/vllm-project/vllm/issues/56850) [Bug]: Kimi K3 reasoning parser returns chain-of-thought as content when generation is truncated mid-think
- [#51016](https://github.com/vllm-project/vllm/issues/51016) [Bug]: extract_hidden_states fails with TP>1 when KV page size < hidden-state per-token cost
- [#56668](https://github.com/vllm-project/vllm/issues/56668) [Bug]: 81 kv_connector unit tests fail on CPU-only machines since #54042 (No common block size for 16)
- [#56297](https://github.com/vllm-project/vllm/issues/56297) [Bug]: DeepSeek V4.1 rejects Responses API text content types

### SGLang (`sgl-project/sglang`)

**Stars:** 35,956 · **Open issues:** 5,328 · **Last push:** <1h ago

On September 15, 2026, there were no new releases in the SGLang ecosystem. Significant merged pull requests included the bumping of the `sgl-deep-gemm` library to version 0.2.0 and several key fixes, such as addressing serialization issues in `/model_info` when class config values are present and enhancements to CUDA VMM feature transport with the Rust frontend. Noteworthy among the new issues is #39342, which reports a bug related to corrupting mamba radix cache checkpoints on hybrid GDN models when using the `--enable-mixed-chunk` option. Additionally, issue #39412 highlights the silent dropping of bootstrap parameters on Rust frontend OpenAI endpoints, indicating potential challenges for users relying on these features.

#### ✅ Merged PRs
- [#38097](https://github.com/sgl-project/sglang/pull/38097) [HiCache] Remove duplicate benchmark result fields
- [#38939](https://github.com/sgl-project/sglang/pull/38939) [Rust] Use Dynamo native renderers when chat templates are missing
- [#39284](https://github.com/sgl-project/sglang/pull/39284) [Benchmark] Add an opt-out for the token-capacity check
- [#39237](https://github.com/sgl-project/sglang/pull/39237) Fix /model_info serialization when a config value is a class
- [#34981](https://github.com/sgl-project/sglang/pull/34981) [model-loader] Split weight loading from postprocessing
- [#39347](https://github.com/sgl-project/sglang/pull/39347) Allow CUDA VMM feature transport with the Rust frontend
- [#36625](https://github.com/sgl-project/sglang/pull/36625) [Logging] Downgrade missing TokenizerManager request state log to warning
- [#35233](https://github.com/sgl-project/sglang/pull/35233) [AMD] Fix registered HiCache host pointer aliases
- [#39371](https://github.com/sgl-project/sglang/pull/39371) bumping sgl-deep-gemm to 0.2.0
- [#39483](https://github.com/sgl-project/sglang/pull/39483) [dLLM] Add rwang5203 as code owner and grant CI permissions
- [#39318](https://github.com/sgl-project/sglang/pull/39318) Scope prefetch cache state to the request attempt
- [#39446](https://github.com/sgl-project/sglang/pull/39446) Reland fix(qsa): clamp the compress gather to the rows (#38346)
- [#38554](https://github.com/sgl-project/sglang/pull/38554) [Spec] Allow speculative workers to stage prefill shared reads
- [#39445](https://github.com/sgl-project/sglang/pull/39445) [DSV4.1] Multi-stream prepare for ratio-1/2 layers, fused ratio-1 verify compression, PDL on _q_rope_store
- [#39357](https://github.com/sgl-project/sglang/pull/39357) [PD] Preserve the prefill rank during rebootstrap
- [#39414](https://github.com/sgl-project/sglang/pull/39414) [DSV4.1] NVLink collectives, and the DSpark draft head's vocab gather on them
- [#39420](https://github.com/sgl-project/sglang/pull/39420) [DSV4.1] Record side-stream work right before its join to keep CUDA-graph replay on one stream
- [#38833](https://github.com/sgl-project/sglang/pull/38833) [NPU][CI] Add CANN 9.1.0 and Ascend a5 nightly suites
- [#39403](https://github.com/sgl-project/sglang/pull/39403) [NPU][CI] Fix sglang.test.ascend import failure in multi-node e2e pods
- [#39406](https://github.com/sgl-project/sglang/pull/39406) [AMD] GLM-5.2 MI355X MXFP4: bump image to 20260913, enable TOPK_V2
- [#39047](https://github.com/sgl-project/sglang/pull/39047) [NPU] Remove temperature/top_p from Qwen3.5-397B-A17B perf test
- [#38941](https://github.com/sgl-project/sglang/pull/38941) [Fix] Merge adjacent KV-row frees so a mid-page split under DCP cannot double-free
- [#38409](https://github.com/sgl-project/sglang/pull/38409) [Fix] Wait for PDL before reading DeepSeek V4 K cache locations
- [#39353](https://github.com/sgl-project/sglang/pull/39353) [NPU] Fix device mismatch in SWA mask for DSpark verify graph capture
- [#39405](https://github.com/sgl-project/sglang/pull/39405) [misc] Revert #38346, #33426, #39061 and #39219
- [#37413](https://github.com/sgl-project/sglang/pull/37413) [AMD][DSV4] feat: enable fp8 two-pool unified_kv on gfx950

#### 🐛 New Issues
- [#39342](https://github.com/sgl-project/sglang/issues/39342) [Bug] --enable-mixed-chunk corrupts mamba radix cache checkpoints on hybrid GDN models (mixed batch skips extra_buffer write, slot still donated) 💬2
- [#39412](https://github.com/sgl-project/sglang/issues/39412) [Bug] pd bootstrap params silently dropped on rust frontend openai endpoints 💬3
- [#39441](https://github.com/sgl-project/sglang/issues/39441) [Bug] [ROCm] DeepSeek-V4.1 FP4 indexer still exhausts HBM under long-context AgentX after #37660 💬1
- [#39467](https://github.com/sgl-project/sglang/issues/39467) [Tracking] Upstream remaining sglang-miles changes to main 💬1
- [#39444](https://github.com/sgl-project/sglang/issues/39444) [Bug] HiCache write_through does not fully persist first-seen prefixes before eviction 💬1
- [#39453](https://github.com/sgl-project/sglang/issues/39453) [Bug] DSA KPool decode JIT specializes on exact block-table width 💬1
- [#39429](https://github.com/sgl-project/sglang/issues/39429) [Perf] Fuse quantization and storage for existing fp4_mx_block16 KV cache 💬1
- [#39402](https://github.com/sgl-project/sglang/issues/39402) [Bug] ep_scatter_from_psum missing expert_start/num_experts args → TypeError on deepep_v2 prefill 💬1
- [#39400](https://github.com/sgl-project/sglang/issues/39400) [Bug]Unauthenticated PUT /route on Bootstrap HTTP allows route poisoning and metadata redirection 💬1
- [#39386](https://github.com/sgl-project/sglang/issues/39386) [Bug] [NPU] Ascend A3 inference of MiniMax H3 has precision issues 💬1
- [#39497](https://github.com/sgl-project/sglang/issues/39497) errors on model type `qwen4_exp` for nvidia/Qwen3.8-Flash-Next-NVFP4
- [#39455](https://github.com/sgl-project/sglang/issues/39455) [Bug] Marlin atomicAdd K-slice reduction is always on for n < 2048, k >= 2048 (dead `if not True:` guard) and is not disabled by --enable-deterministic-inference
- [#39442](https://github.com/sgl-project/sglang/issues/39442) [Bug] [ROCm] MEM profiling crashes TP server in _dump_snapshot with RuntimeError: stoi
- [#39428](https://github.com/sgl-project/sglang/issues/39428) [Bug] Unbounded memory growth via orphan bootstrap_room injection leads to OOM Kill
- [#39393](https://github.com/sgl-project/sglang/issues/39393) [Feature Request] Add pipeline-parallel support to Qwen4-Exp (`qwen4_exp.py`) — four gaps, working reference patches, and an undocumented mHC PP-boundary contract
- [#39367](https://github.com/sgl-project/sglang/issues/39367) [CI][PD] test_decode_hicache_file_backend_l3_reuses_decode_output_after_flush hangs: decode worker never leaves KVPoll.Bootstrapping
- [#39355](https://github.com/sgl-project/sglang/issues/39355) [Feature] [NPU] Add ScatterPaKvCache as an optional KV-cache write backend
- [#39351](https://github.com/sgl-project/sglang/issues/39351) [Bug] [NPU][MoE] AscendTPDispatcher downcasts FP32 routing weights to the hidden-state dtype
- [#39348](https://github.com/sgl-project/sglang/issues/39348) [Feature] [NPU] Add topology-aware CPU and NUMA affinity for Ascend worker ranks
- [#39343](https://github.com/sgl-project/sglang/issues/39343) 按照指导操作后，A5仍然无法拉起dsv4.1，报错如下：ValueError: The checkpoint you are trying to load has model type deepseek_v41 but Transformers does not recognize this architecture.

#### 🔒 Closed Issues
- [#25551](https://github.com/sgl-project/sglang/issues/25551) v0.5.12 DeepGemm regression on B300 (sm_103): CUDA_ERROR_ILLEGAL_ADDRESS in fp8_fp4_gemm_nt TMA descriptor init for shared-experts FP8 GEMM
- [#28312](https://github.com/sgl-project/sglang/issues/28312) [Bug] qwen3.5 mamba crash in 0.5.13
- [#23363](https://github.com/sgl-project/sglang/issues/23363) [Bug] KimiK2Detector streaming parser silently drops / hangs on multi-turn tool calls with long arguments (full rewrite proposed)
- [#31071](https://github.com/sgl-project/sglang/issues/31071) [Bug] EAGLE greedy verify lacks TP broadcast → ranks diverge on accepted tokens → collective deadlock (tp>1)
- [#31404](https://github.com/sgl-project/sglang/issues/31404) [Bug] [OpenAI-compat] HTTP server does not validate 'model' field per OpenAI spec
- [#31248](https://github.com/sgl-project/sglang/issues/31248) [Feature] Support CompressedTensorsW4A16Sparse24
- [#31475](https://github.com/sgl-project/sglang/issues/31475) [Bug] SGLANG_SHARED_EXPERT_TP1=1 corrupts output (R + ep_size·S) when the post-experts all-reduce is skipped (EP + dp-attention reduce-scatterv)
- [#31459](https://github.com/sgl-project/sglang/issues/31459) [Bug] Model Gateway silently rewrites MCP tool_choice="required" to "auto"
- [#38408](https://github.com/sgl-project/sglang/issues/38408) [Bug] test_expert_pack_mxfp4.py intermittently hangs while loading JIT extension
- [#39386](https://github.com/sgl-project/sglang/issues/39386) [Bug] [NPU] Ascend A3 inference of MiniMax H3 has precision issues
- [#39054](https://github.com/sgl-project/sglang/issues/39054) is_musa() graph-breaks TorchDynamo (gb0069) on the traced prefill path since b6c31b155c, killing tc_piecewise prefill CUDA-graph capture
- [#39107](https://github.com/sgl-project/sglang/issues/39107) [Feature] TRTLLM MLA target verification misses fused FP8 KV/Q preparation in forward_extend

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 128,227 · **Open issues:** 2,473 · **Last push:** 2h ago

On September 15, 2026, the llama.cpp project released version 0.4.1, which introduces support for the Maple 20B-A1B, Tencent Hy 4, and Spark2.5 architectures, along with enhancements in JSON schema handling, chat parsing, logging, and management of server child processes. Significant API changes include a modification to `llama_sampler_chain_n()` to return `int32_t` and the addition of `server_subproc` and `waiter` functions. Merged features from recent pull requests highlight improvements in CI processes, performance optimizations in code, and fixes for GPU-related issues. A notable new issue reported pertains to garbled output when combining Vulkan and Hexagon backends, which hints at potential compatibility concerns that could affect user experience.

#### 🚀 New Releases
- [v0.4.1](https://github.com/ggml-org/llama.cpp/releases/tag/v0.4.1) v0.4.1
- [b10970](https://github.com/ggml-org/llama.cpp/releases/tag/b10970) b10970
- [b10969](https://github.com/ggml-org/llama.cpp/releases/tag/b10969) b10969
- [b10964](https://github.com/ggml-org/llama.cpp/releases/tag/b10964) b10964
- [b10956](https://github.com/ggml-org/llama.cpp/releases/tag/b10956) b10956
- [b10955](https://github.com/ggml-org/llama.cpp/releases/tag/b10955) b10955
- [b10952](https://github.com/ggml-org/llama.cpp/releases/tag/b10952) b10952
- [b10951](https://github.com/ggml-org/llama.cpp/releases/tag/b10951) b10951
- [b10950](https://github.com/ggml-org/llama.cpp/releases/tag/b10950) b10950

#### ✅ Merged PRs
- [#28646](https://github.com/ggml-org/llama.cpp/pull/28646) webui: stop re-probing disabled /tools endpoint on every message
- [#28911](https://github.com/ggml-org/llama.cpp/pull/28911) ci : reuse build tag name when used instead of safe one
- [#28909](https://github.com/ggml-org/llama.cpp/pull/28909) CI: hip-quality-check: ignore fattn spill added in #28576
- [#28576](https://github.com/ggml-org/llama.cpp/pull/28576) HIP: fattn-mma: use fp32 accumulation on MFMA devices
- [#28186](https://github.com/ggml-org/llama.cpp/pull/28186) CI : Add ubuntu-cuda builds to release.yml
- [#28896](https://github.com/ggml-org/llama.cpp/pull/28896) qwen4exp: enable rms_norm + mul fusion
- [#28423](https://github.com/ggml-org/llama.cpp/pull/28423) Added gfx1103 to ubuntu rocm build
- [#28892](https://github.com/ggml-org/llama.cpp/pull/28892) cmake : remove precompiled headers
- [#28579](https://github.com/ggml-org/llama.cpp/pull/28579) scripts: Add script to verify API/ABI compatibility
- [#28900](https://github.com/ggml-org/llama.cpp/pull/28900) llama.cpp : bump version to 0.4.1
- [#28899](https://github.com/ggml-org/llama.cpp/pull/28899) sync : ggml
- [#28893](https://github.com/ggml-org/llama.cpp/pull/28893) tests : add fusion baseline README and broaden fusion CI triggers
- [#27000](https://github.com/ggml-org/llama.cpp/pull/27000) llama: add Maple 20B-A1B ternary MoE architecture (CPU)
- [#28865](https://github.com/ggml-org/llama.cpp/pull/28865) models : fix mimo2 swa pattern load
- [#28868](https://github.com/ggml-org/llama.cpp/pull/28868) models : fix incorrect uses of get_key_or_arr
- [#28776](https://github.com/ggml-org/llama.cpp/pull/28776) tests(s390x): add non-vxe build to tests
- [#28670](https://github.com/ggml-org/llama.cpp/pull/28670) sycl: rfc: Use radix select for top_k
- [#28882](https://github.com/ggml-org/llama.cpp/pull/28882) ggml-cpu : disable PCH and fix CACHE_LINE_SIZE ambiguity
- [#28859](https://github.com/ggml-org/llama.cpp/pull/28859) ci : trigger self-hosted CI on changes to ci/run.sh
- [#28857](https://github.com/ggml-org/llama.cpp/pull/28857) ci : remove gg_sum summary logic
- [#28704](https://github.com/ggml-org/llama.cpp/pull/28704) sycl : fix oneDNN scratchpad breaking the pool free order
- [#28749](https://github.com/ggml-org/llama.cpp/pull/28749) common : move llama_n_rs_seq to before llama_decode

#### 🐛 New Issues
- [#28902](https://github.com/ggml-org/llama.cpp/issues/28902) Misc. bug: M-RoPE embedding batches read batch.pos past the end of the documented n_tokens array `bug-unconfirmed` 💬5
- [#28891](https://github.com/ggml-org/llama.cpp/issues/28891) Garbled/degenerate output when combining Vulkan + Hexagon backends simultaneously (--device Vulkan0,HTP0) 💬2
- [#28877](https://github.com/ggml-org/llama.cpp/issues/28877) CUDA error: misaligned address in ggml_cuda_op_unary<op_sigmoid> with long prompts on RTX 5090 Laptop (sm_120) — regression between d3146f2b5 and ad6c66839 💬2
- [#28908](https://github.com/ggml-org/llama.cpp/issues/28908) rpc : single-threaded accept loop starves every connection after the first 💬1
- [#28904](https://github.com/ggml-org/llama.cpp/issues/28904) Feature Request: Hexagon FP8 weight support and DiT optimizations for HTP v79+ `enhancement` 💬1
- [#28917](https://github.com/ggml-org/llama.cpp/issues/28917) gemma4:26b concurrent decode loses EOS (length at num_predict); qwen3.8-27b IDENTICAL dual on same GB10/Ollama harness is 3/3 clean `bug-unconfirmed`
- [#28879](https://github.com/ggml-org/llama.cpp/issues/28879) llama-perplexity: perplexity is not precision-monotonic on hybrid GDN architectures (qwen3_5) — full F16 scores worse than Q4_K_M
- [#28878](https://github.com/ggml-org/llama.cpp/issues/28878) Eval bug: SIGSEGV in CPU compute path, thread-count-dependent race (Android/aarch64, Tensor G5), not content-dependent

#### 🔒 Closed Issues
- [#28275](https://github.com/ggml-org/llama.cpp/issues/28275) docker: no SemVer tags / release builds missing
- [#23033](https://github.com/ggml-org/llama.cpp/issues/23033) Eval bug: missing tensor 'blk.40.ssm_conv1d.weight'
- [#28441](https://github.com/ggml-org/llama.cpp/issues/28441) Eval bug: intermittent silent Qwen2.5-Omni audio corruption on Metal under system load (b10809)
- [#28660](https://github.com/ggml-org/llama.cpp/issues/28660) Eval bug: SYCL crash in ggml_sycl_pool_vmm::free - oneDNN scratchpad breaks LIFO pool order
- [#25908](https://github.com/ggml-org/llama.cpp/issues/25908) Misc. bug: speculative decoding (draft-simple): p_min default 0.00 collapses acceptance to 0.07; even at 0.9 acceptance spec is slower than plain decode (Vulkan/RDNA4)
- [#28722](https://github.com/ggml-org/llama.cpp/issues/28722) Eval bug: WebGPU hy_v4 crashes on macOS in test-llama-archs and test-save-load-state
- [#28858](https://github.com/ggml-org/llama.cpp/issues/28858) Eval bug: macOS arm64: heap corruption due to ggml-cpu precompiled header
- [#23948](https://github.com/ggml-org/llama.cpp/issues/23948) Feature request: (server) file upload API
- [#28891](https://github.com/ggml-org/llama.cpp/issues/28891) Garbled/degenerate output when combining Vulkan + Hexagon backends simultaneously (--device Vulkan0,HTP0)
- [#24888](https://github.com/ggml-org/llama.cpp/issues/24888) Eval bug: Malformed tokenizer metadata can cause ASan heap-buffer-overflow reads in vocab load
- [#26213](https://github.com/ggml-org/llama.cpp/issues/26213) Bug: Vulkan on Raspberry Pi 5 (V3D) — WG=512 / 16KB SMEM breaks inference
- [#26360](https://github.com/ggml-org/llama.cpp/issues/26360) Feature Request: vulkan - multi-token GQA FA packing like CUDA ncols1 x ncols2
- [#28863](https://github.com/ggml-org/llama.cpp/issues/28863) Research: ROCm/gfx1100: Qwen3.8-27B Q4_K_XL batch-1 tensor-split decode reaches only 1.31x one card, with per-card DRAM utilisation falling from 66% to 43%
- [#28831](https://github.com/ggml-org/llama.cpp/issues/28831) Eval bug: MiMo-V2.5-Pro fails to load with hparam error
- [#26351](https://github.com/ggml-org/llama.cpp/issues/26351) Misc. bug: Voxtral audio: a single clip is encoded twice by mtmd
- [#26355](https://github.com/ggml-org/llama.cpp/issues/26355) Request for a private security reporting channel - no vulnerability details
- [#26356](https://github.com/ggml-org/llama.cpp/issues/26356) Eval bug: Tool Call Performance degradation over sustained load on unified KV cache
- [#26359](https://github.com/ggml-org/llama.cpp/issues/26359) Misc. bug: llama-server returns a tool-call id that its own chat template then rejects (Ministral-8B, --jinja)
- [#26363](https://github.com/ggml-org/llama.cpp/issues/26363) Quantized T5 (Aya-101/mT5-XXL) produces garbage output on Vulkan backend, works correctly on CPU
- [#26365](https://github.com/ggml-org/llama.cpp/issues/26365) Feature Request: Enable split-mode row/tensor for kimi-k3-fullsize-vision branch
- [#26366](https://github.com/ggml-org/llama.cpp/issues/26366) gguf: SIGFPE on x86-64 from a zero tensor dimension (valid GGUF, accepted by gguf-py)
- [#26384](https://github.com/ggml-org/llama.cpp/issues/26384) Eval bug: deepseek_v4 over RPC (2-node Metal): empty assistant turns degenerate output to "====", then a worker-side graph failure kills the whole server (RPC has no error recovery)
- [#28299](https://github.com/ggml-org/llama.cpp/issues/28299) Misc. bug: llama-server web UI keeps sending GET /tools requests that return 403, tripping fail2ban

### Ollama (`ollama/ollama`)

**Stars:** 180,960 · **Open issues:** 4,003 · **Last push:** <1h ago

On September 15, 2026, Ollama released version v0.34.1, which includes significant updates such as a fix for the ChatGPT model selector spacing, eviction of prefix cache snapshots in active conversations, and an increased token repeat limit for the LLM. Notable merged pull requests from the day comprise the addition of a patch for the Docker build context, enhancements to the Apps layout refresh, and an updated ChatGPT Desktop integration. The team also addressed a few key issues, including intermittent "model not found" errors and plans to add support for the Qualcomm IQ-9075 NPU/GPU. Among the newly opened issues, the request to support ROCm 10 for Windows stands out as particularly noteworthy.

#### 🚀 New Releases
- [v0.34.1-rc1](https://github.com/ollama/ollama/releases/tag/v0.34.1-rc1) v0.34.1

#### ✅ Merged PRs
- [#18440](https://github.com/ollama/ollama/pull/18440) mlx: add mlx patch to docker build context
- [#18377](https://github.com/ollama/ollama/pull/18377) docs: add ChatGPT Desktop integration
- [#18235](https://github.com/ollama/ollama/pull/18235) MLX: version bump
- [#18372](https://github.com/ollama/ollama/pull/18372) app: refresh Apps layout and command copy feedback

#### 🐛 New Issues
- [#18445](https://github.com/ollama/ollama/issues/18445) Add support for Qualcomm IQ-9075 NPU/GPU `feature request` 💬1
- [#18441](https://github.com/ollama/ollama/issues/18441) MLX: structured output with thinking enabled prefixes JSON content with a stray "." `mlx`
- [#18442](https://github.com/ollama/ollama/issues/18442) gemma4:26b concurrent decode loses EOS (length at num_predict); qwen3.8-27b IDENTICAL dual on same GB10/Ollama harness is 3/3 clean `bug`
- [#18447](https://github.com/ollama/ollama/issues/18447) Intermittent "model xxx not found" errors `bug`
- [#18435](https://github.com/ollama/ollama/issues/18435) Support ROCm 10 for Windows `feature request`

#### 🔒 Closed Issues
- [#16714](https://github.com/ollama/ollama/issues/16714) Ollama Cloud - Prompt Cache Support
- [#15324](https://github.com/ollama/ollama/issues/15324) Proposal: Add Official Uninstall Documentation and Scripts
- [#18225](https://github.com/ollama/ollama/issues/18225) [Bug] 0.33.x: ~5x slower token generation than 0.32.13 on CUDA (RTX 3090) — same GPU, same model file
- [#18208](https://github.com/ollama/ollama/issues/18208) Long-lived Ollama runner (keep_alive -1) emits corrupted <unused49> output after coexisting with a second model, persists until runner restart
- [#18185](https://github.com/ollama/ollama/issues/18185) Custom GPU / CPU workload allocation per model

### LiteLLM (`BerriAI/litellm`)

**Stars:** 58,737 · **Open issues:** 5,052 · **Last push:** <1h ago

On September 15, 2026, there were no new releases in LiteLLM; however, several important pull requests were merged. Notable changes include the addition of a logging-only mode in model_armor that scans completed streams after delivery, and a fix in the health check system to skip unnecessary database writes. In the proxy, enhancements include predicting prompt-cache costs across deployments and resolving issues with the `x-litellm-call-id` when response metadata is incomplete. A significant new issue reported is the bug in the Admin UI, which causes full-page reloads and 404 errors during sidebar navigation, indicating ongoing challenges in user experience.

#### ✅ Merged PRs
- [#41132](https://github.com/BerriAI/litellm/pull/41132) fix(bedrock guardrails): derive contextual grounding source and query from plain messages
- [#40702](https://github.com/BerriAI/litellm/pull/40702) feat(model_armor): logging_only mode scans completed streams after delivery
- [#41145](https://github.com/BerriAI/litellm/pull/41145) fix(health): skip background health check DB writes when the latest-row read fails
- [#41131](https://github.com/BerriAI/litellm/pull/41131) fix(prompt_security): keep polling file sanitization through non-terminal statuses
- [#40877](https://github.com/BerriAI/litellm/pull/40877) feat(proxy): predict prompt-cache costs across deployments
- [#41142](https://github.com/BerriAI/litellm/pull/41142) ci(codeql): exclude noisy Python quality queries
- [#40955](https://github.com/BerriAI/litellm/pull/40955) chore(prices): sync Vertex AI prices: 14 models
- [#41056](https://github.com/BerriAI/litellm/pull/41056) fix(proxy): resolve x-litellm-call-id from response metadata when routes omit call_id
- [#40993](https://github.com/BerriAI/litellm/pull/40993) fix(health): skip background health check DB writes when the latest-row read fails
- [#41070](https://github.com/BerriAI/litellm/pull/41070) test: cover persisted updates and warmed authorization policies
- [#41141](https://github.com/BerriAI/litellm/pull/41141) fix(openai): keep extra_headers out of the chat request body on the httpx handler path
- [#41018](https://github.com/BerriAI/litellm/pull/41018) fix(utils): keep litellm params out of provider request bodies
- [#41066](https://github.com/BerriAI/litellm/pull/41066) test: add dedicated CircleCI integration contract foundation
- [#41048](https://github.com/BerriAI/litellm/pull/41048) chore(lint): graduate 12 rules from the strict-gate ratchet
- [#40196](https://github.com/BerriAI/litellm/pull/40196) fix(ui): let team admins grant a team all proxy models
- [#41023](https://github.com/BerriAI/litellm/pull/41023) fix(ui): move tags typed into key metadata JSON into the Tags field
- [#37762](https://github.com/BerriAI/litellm/pull/37762) feat(model_hub): surface model_info.description in Model Hub
- [#40991](https://github.com/BerriAI/litellm/pull/40991) fix(router): cool down team deployments on 429 when a sibling serves the same public model
- [#41113](https://github.com/BerriAI/litellm/pull/41113) fix(proxy): release max_parallel_requests slot when a realtime session ends without LLM callbacks
- [#41120](https://github.com/BerriAI/litellm/pull/41120) refactor(harness): expand independent trace coverage
- [#41102](https://github.com/BerriAI/litellm/pull/41102) fix(auth): load team membership once per request and skip prisma on an L1 hit
- [#41093](https://github.com/BerriAI/litellm/pull/41093) feat(model_info): provider-scoped fill_missing_for_providers backfill from fallback generalization rules
- [#41086](https://github.com/BerriAI/litellm/pull/41086) fix(proxy): keep org admins' own team memberships in other orgs visible on team list
- [#41064](https://github.com/BerriAI/litellm/pull/41064) fix(bedrock/realtime): propagate deferred Nova Sonic stream failures to the router
- [#41116](https://github.com/BerriAI/litellm/pull/41116) fix(cli): show routed models and session stats for LLM API keys
- [#41107](https://github.com/BerriAI/litellm/pull/41107) fix(proxy): hide default credentials login hint when UI_PASSWORD is set
- [#41118](https://github.com/BerriAI/litellm/pull/41118) refactor(prometheus): source PROXY_LLM_PROVIDER_FALLBACK from litellm.constants
- [#40930](https://github.com/BerriAI/litellm/pull/40930) fix(router): record flat retry attempts and cap retries from attempted_retries
- [#40817](https://github.com/BerriAI/litellm/pull/40817) fix(redis): log a timeout streak once per interval instead of one line per cache call
- [#41115](https://github.com/BerriAI/litellm/pull/41115) fix(utils): stop wrapper_async submitting the sync success handler twice
- [#41114](https://github.com/BerriAI/litellm/pull/41114) perf(proxy): serialize /model/info listing once with orjson
- [#41059](https://github.com/BerriAI/litellm/pull/41059) fix(prometheus): label pre-call rate limit failures with the resolved api_provider
- [#41058](https://github.com/BerriAI/litellm/pull/41058) fix(utils): stop wrapper_async submitting the sync success handler twice
- [#41061](https://github.com/BerriAI/litellm/pull/41061) perf(proxy): serialize /model/info listing once with orjson
- [#41096](https://github.com/BerriAI/litellm/pull/41096) feat(proxy): honor LITELLM_DISABLE_ACCESS_LOG_PATHS to drop noisy uvicorn access log lines
- [#40992](https://github.com/BerriAI/litellm/pull/40992) fix(ui): show the team alias on the model info page and in its raw JSON
- [#40995](https://github.com/BerriAI/litellm/pull/40995) fix(router): name the all-deployments-in-cooldown error on 429 responses
- [#40925](https://github.com/BerriAI/litellm/pull/40925) fix(proxy): forward provider request id headers on mapped error responses
- [#41106](https://github.com/BerriAI/litellm/pull/41106) feat(proxy): add general_settings.allowed_file_extensions for /v1/files uploads
- [#40562](https://github.com/BerriAI/litellm/pull/40562) fix(otel): cap per-index OpenInference message attributes span-wide
- [#41104](https://github.com/BerriAI/litellm/pull/41104) build(deps): re-suppress GHSA-h7x2-h6g9-p789 in osv-scan on main, mlflow still has no fixed release
- [#40976](https://github.com/BerriAI/litellm/pull/40976) feat(pricing): add azure gpt-chat-latest rates and drop retired friendliai llama-3.1 entries
- [#41054](https://github.com/BerriAI/litellm/pull/41054) perf(logging): skip correlation contextvar stamping when request_correlation_in_logs is off
- [#40627](https://github.com/BerriAI/litellm/pull/40627) fix(cost): bill cached realtime audio tokens at the audio cache-read rate
- [#40927](https://github.com/BerriAI/litellm/pull/40927) feat(jwt): allow virtual_key_claim_field per issuer
- [#40996](https://github.com/BerriAI/litellm/pull/40996) test(auth): freeze the cache clock in auth prefetch tests
- [#40107](https://github.com/BerriAI/litellm/pull/40107) feat(auth): force password reset for breached or admin-set passwords
- [#39562](https://github.com/BerriAI/litellm/pull/39562) feat(auth): add self-service password change and plug plaintext password leaks
- [#39321](https://github.com/BerriAI/litellm/pull/39321) feat(auth): add breached password detection to password policy
- [#41036](https://github.com/BerriAI/litellm/pull/41036) build(deps): re-suppress GHSA-h7x2-h6g9-p789 in osv-scan, mlflow still has no fixed release

#### 🐛 New Issues
- [#41029](https://github.com/BerriAI/litellm/issues/41029) [Bug]: Admin UI does a full page reload and a 404 prefetch storm on every sidebar navigation `bug` `ui-dashboard` 💬2
- [#41051](https://github.com/BerriAI/litellm/issues/41051) proxy-behavior: test_join_binds_the_membership_to_the_requested_team fails on main (org row missing from prefetched cache) 💬1
- [#41111](https://github.com/BerriAI/litellm/issues/41111) [Feature]: Generic Guardrail API cannot return modified tool calls, only block them `proxy` `llm translation` 💬1
- [#41084](https://github.com/BerriAI/litellm/issues/41084) [Bug]: Budget reset reads (and re-invalidates) end users with spend = 0 `bug` `proxy` 💬1
- [#41097](https://github.com/BerriAI/litellm/issues/41097) Aporia guardrail: modify and rephrase verdicts forward the original content 💬1
- [#41069](https://github.com/BerriAI/litellm/issues/41069) Feature: optional atomic buffering for tool-enabled streams before terminal integrity `llm translation` 💬1
- [#41049](https://github.com/BerriAI/litellm/issues/41049) [Bug]: Alibaba Cloud DeepSeek V4.1 Flash reasoning_content missing from streaming responses `llm translation` 💬1
- [#41067](https://github.com/BerriAI/litellm/issues/41067) [Bug]: Anthropic `/v1/messages` streaming loses prompt-cache accounting when bridged to an OpenAI-compatible upstream `bug` `llm translation` `ui-dashboard` `claude code` 💬1
- [#41042](https://github.com/BerriAI/litellm/issues/41042) Add Bourse as an OpenAI-compatible provider `enhancement` `llm translation` `potential-duplicate` 💬1
- [#41159](https://github.com/BerriAI/litellm/issues/41159) [Bug]: POST /v1/responses returns 500 with a raw TypeError when 'input' is omitted
- [#41135](https://github.com/BerriAI/litellm/issues/41135) [Feature]: Advertise the trusted IdP for enable_jwt_auth via RFC 9728 Protected Resource Metadata + 401 challenge, so native CLIs need only the proxy URL `proxy` `llm translation`
- [#41133](https://github.com/BerriAI/litellm/issues/41133) feat(guardrails): apply tool_calls returned by the Generic Guardrail API
- [#41109](https://github.com/BerriAI/litellm/issues/41109) [Bug]: Responses API streaming bridge duplicates the full response text within a single choice (gpt-5.4-mini, tools + prior function-call history) `llm translation`
- [#41091](https://github.com/BerriAI/litellm/issues/41091) [Bug]: Anthropic /v1/messages pass-through silently dispatches an empty messages array when all content blocks are unrecognised `llm translation`
- [#41089](https://github.com/BerriAI/litellm/issues/41089) [Bug]: a key can be attached to a project owned by another team, by an admin of only the key's team `proxy` `llm translation`
- [#41088](https://github.com/BerriAI/litellm/issues/41088) [Bug]: /key/update silently ignores project_id - a key's project can only be changed by rotating the key `proxy` `llm translation`
- [#41081](https://github.com/BerriAI/litellm/issues/41081) [Bug]: Responses WebSocket drops deployment custom_llm_provider before provider resolution `proxy` `llm translation`
- [#41080](https://github.com/BerriAI/litellm/issues/41080) [Bug]: Responses WebSocket requires a client API key when proxy master_key is unset `proxy` `llm translation`
- [#41068](https://github.com/BerriAI/litellm/issues/41068) Proposal: provider-neutral stream integrity adapter and state contract `llm translation`
- [#41043](https://github.com/BerriAI/litellm/issues/41043) [Bug]: bedrock/converse hoists mid-conversation role:"system" messages and collapses implicit prompt caching (#32730 fix only covers Invoke); bedrock/invoke is broken for the OpenAI models `llm translation` `claude code`
- [#41038](https://github.com/BerriAI/litellm/issues/41038) Custom loggers with message_logging off still receive assistant audio transcript and payload
- [#41035](https://github.com/BerriAI/litellm/issues/41035) Add Bourse as an OpenAI-compatible provider `enhancement` `llm translation` `docs`
- [#41032](https://github.com/BerriAI/litellm/issues/41032) [Feature]: Map stable session IDs to configurable provider affinity headers `enhancement` `proxy` `llm translation`

#### 🔒 Closed Issues
- [#26552](https://github.com/BerriAI/litellm/issues/26552) [Bug]: /v1/images/edits with mask fails — "Attempted to access streaming request content, without having called read()"
- [#28444](https://github.com/BerriAI/litellm/issues/28444) [Bug]: Post API hook is not enabled for passthrough endpoints
- [#38401](https://github.com/BerriAI/litellm/issues/38401) [Bug]: Bedrock Realtime acknowledges sessions before provider readiness and suppresses terminal stream failures
- [#25940](https://github.com/BerriAI/litellm/issues/25940) [Bug]: Langfuse telemetry fails with `AttributeError: 'NoneType' object has no attribute 'get'` in v1.83
- [#41029](https://github.com/BerriAI/litellm/issues/41029) [Bug]: Admin UI does a full page reload and a 404 prefetch storm on every sidebar navigation
- [#40972](https://github.com/BerriAI/litellm/issues/40972) [Feature]: Configurable deployment and credential database reload intervals
- [#30035](https://github.com/BerriAI/litellm/issues/30035) Output exceeds size limit
- [#30040](https://github.com/BerriAI/litellm/issues/30040) .
- [#38571](https://github.com/BerriAI/litellm/issues/38571) [Bug]: Bedrock Realtime hides provider throttles as normal WebSocket closes and lacks disconnect cleanup
- [#41133](https://github.com/BerriAI/litellm/issues/41133) feat(guardrails): apply tool_calls returned by the Generic Guardrail API

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,169 · **Open issues:** 1,371 · **Last push:** <1h ago

On September 15, 2026, there were no new releases for Unsloth; however, multiple significant pull requests were merged, including enhancements to device detection with the addition of an Ascend NPU (PR #10686) and improvements to the functionality of the Studio environment, such as stopping MLX native controls from duplicating in streamed replies (PR #10905). The Studio was also improved with a new Download Dataset button for Data Recipes (PR #10708) and optimizations around settings and caching to streamline processes. However, new issues emerged, particularly a bug (Issue #10929) where Unsloth displayed misleading errors when loading revoked Hugging Face models stored locally, resulting in additional hidden log errors. Overall, it was a day of noteworthy contributions focused on functionality, though no new versions were released.

#### ✅ Merged PRs
- [#10959](https://github.com/unslothai/unsloth/pull/10959) docker publish: drop the build caches
- [#10905](https://github.com/unslothai/unsloth/pull/10905) fix(studio): stop MLX native controls from duplicating in streamed replies
- [#10927](https://github.com/unslothai/unsloth/pull/10927) Studio: build the blocked-command alternation once instead of per call
- [#10843](https://github.com/unslothai/unsloth/pull/10843) fix(sentence_transformer): resolve device consistently with sibling branches instead of hardcoding cuda
- [#10686](https://github.com/unslothai/unsloth/pull/10686) feat(device_type): add Ascend NPU device detection
- [#10684](https://github.com/unslothai/unsloth/pull/10684) fix(chat_templates): remove CUDA hardcoded device from stopping criteria
- [#10683](https://github.com/unslothai/unsloth/pull/10683) Studio: raise the micro-batch for the projectors that abort llama-server on an image
- [#10909](https://github.com/unslothai/unsloth/pull/10909) Studio: a masked NVIDIA GPU must not install the CPU bundle over CUDA
- [#10908](https://github.com/unslothai/unsloth/pull/10908) Studio: an AMD Windows host without usable ROCm takes Vulkan, not the CPU bundle
- [#10759](https://github.com/unslothai/unsloth/pull/10759) Studio: Keep unfinished research reports
- [#10906](https://github.com/unslothai/unsloth/pull/10906) Studio: a CPU torch handover must not disarm the flavor invariant
- [#10708](https://github.com/unslothai/unsloth/pull/10708) Studio: add Download Dataset button for Data Recipes
- [#10673](https://github.com/unslothai/unsloth/pull/10673) Release GGUF context while tool approval is pending
- [#10919](https://github.com/unslothai/unsloth/pull/10919) Run the unsloth_zoo suite beside Core instead of inside it
- [#10920](https://github.com/unslothai/unsloth/pull/10920) Shard the Python 3.13 backend pytest leg three ways
- [#10758](https://github.com/unslothai/unsloth/pull/10758) Studio: Use saved Hugging Face login for model downloads
- [#10926](https://github.com/unslothai/unsloth/pull/10926) Studio: run the formatter on llama_cpp.py
- [#10197](https://github.com/unslothai/unsloth/pull/10197) Drop an MTP sidecar llama-server cannot load as --model-draft
- [#10820](https://github.com/unslothai/unsloth/pull/10820) feat(docker): add an AMD ROCm image, for RDNA2 through RDNA4 and CDNA
- [#10903](https://github.com/unslothai/unsloth/pull/10903) Use the dynamic cache for Gemma multimodal generation
- [#10897](https://github.com/unslothai/unsloth/pull/10897) Stop ten test assertions from measuring the runner instead of the code
- [#10851](https://github.com/unslothai/unsloth/pull/10851) fix(studio): share Run settings draft across sidebar and model picker
- [#10884](https://github.com/unslothai/unsloth/pull/10884) Honor user tensor_split when auto tensor-parallel planner returns an even split
- [#10860](https://github.com/unslothai/unsloth/pull/10860) Studio: block sandbox bypass via command-position substitutions in terminal tool
- [#10704](https://github.com/unslothai/unsloth/pull/10704) Studio: do not lose a DGX Spark's memory pool to the page cache when fitting context
- [#10648](https://github.com/unslothai/unsloth/pull/10648) Studio: answer current llama.cpp, whisper.cpp and Node installs from their markers
- [#10826](https://github.com/unslothai/unsloth/pull/10826) Docker Studio: keep unsloth-studio-update --ref from leaving Studio dead
- [#10680](https://github.com/unslothai/unsloth/pull/10680) use the bundled icon first, and retry the cloudflared download
- [#10253](https://github.com/unslothai/unsloth/pull/10253) Studio: drop MediaPageLink tooltip below titlebar controls on Windows
- [#10728](https://github.com/unslothai/unsloth/pull/10728) Prevent agent startup from waiting on model catalog scans
- [#10880](https://github.com/unslothai/unsloth/pull/10880) Studio: adapt macOS tray artwork to the menu bar appearance
- [#10651](https://github.com/unslothai/unsloth/pull/10651) Studio: keep a verified install when PyPI is unreachable and UV_OFFLINE is set
- [#10915](https://github.com/unslothai/unsloth/pull/10915) Studio: two edge failures the dependency-pass change left behind
- [#10247](https://github.com/unslothai/unsloth/pull/10247) Add Agent Skills support to Studio
- [#10914](https://github.com/unslothai/unsloth/pull/10914) Measure whether the runner label actually changes the queue wait
- [#10918](https://github.com/unslothai/unsloth/pull/10918) Move the two highest-fire workflows off the ubuntu-latest label onto the same image
- [#10480](https://github.com/unslothai/unsloth/pull/10480) Studio: read a video clip on MLX chat models
- [#10819](https://github.com/unslothai/unsloth/pull/10819) Studio: cap accelerate below 1.15 on Windows, where 1.15 breaks all ROCm training
- [#10649](https://github.com/unslothai/unsloth/pull/10649) Studio: skip dependency-pass steps whose evidence holds, and keep that evidence on Windows
- [#10916](https://github.com/unslothai/unsloth/pull/10916) The install suite spends 1940s resolving the same few thousand paths over and over
- [#10913](https://github.com/unslothai/unsloth/pull/10913) Unbreak main: three files drifted out of the formatter, and one reads a file with the platform encoding
- [#10623](https://github.com/unslothai/unsloth/pull/10623) Studio: add Server default for vLLM Min P
- [#10891](https://github.com/unslothai/unsloth/pull/10891) Allow fast_inference for Qwen3.5
- [#10733](https://github.com/unslothai/unsloth/pull/10733) perf(studio): integrate optional MLX MoE and decode optimizations
- [#10899](https://github.com/unslothai/unsloth/pull/10899) installer: stop condemning a warm uv cache for a directory uv never writes
- [#10893](https://github.com/unslothai/unsloth/pull/10893) Share one child interpreter, and one notebook prototype, where the work is identical
- [#10900](https://github.com/unslothai/unsloth/pull/10900) Give every pwsh call in the suite the private startup cache
- [#10886](https://github.com/unslothai/unsloth/pull/10886) Stop three studio meta-tests re-cutting and re-walking the same sources
- [#10882](https://github.com/unslothai/unsloth/pull/10882) Split Repo tests (CPU) into three shards, and take the shell suite off its critical path
- [#10874](https://github.com/unslothai/unsloth/pull/10874) Pass Q-GaLore optimizer options to bitsandbytes by name
- [#10896](https://github.com/unslothai/unsloth/pull/10896) Fix three CI failures that were not the PRs they failed on
- [#10790](https://github.com/unslothai/unsloth/pull/10790) Fix fp8 block dequant fallback on pre-sm89 GPUs
- [#10887](https://github.com/unslothai/unsloth/pull/10887) Accept the model transformers 5.x passes to create_optimizer
- [#10898](https://github.com/unslothai/unsloth/pull/10898) Run the Q-GaLore tests from the normal pytest job, not a workflow of their own
- [#10842](https://github.com/unslothai/unsloth/pull/10842) Advance the Q-GaLore Adam step counter once per update
- [#10828](https://github.com/unslothai/unsloth/pull/10828) Docker: stop JupyterLab from silently taking Studio's port, and correct three host-script messages
- [#10829](https://github.com/unslothai/unsloth/pull/10829) Docker Studio: keep Studio's data on a volume without pinning its code
- [#10638](https://github.com/unslothai/unsloth/pull/10638) Fail closed when Studio exposure prompt is aborted
- [#10885](https://github.com/unslothai/unsloth/pull/10885) Skip the backgrounded-raw-bind prompt test on Windows
- [#10813](https://github.com/unslothai/unsloth/pull/10813) Studio: Stop training the word None into CSV rows with blank cells
- [#10626](https://github.com/unslothai/unsloth/pull/10626) installer: the adaptive uv cache selection was unreachable on every writable install
- [#10827](https://github.com/unslothai/unsloth/pull/10827) Docker: drop the baked uv cache from the Studio image and correct its labels and Hub page
- [#10861](https://github.com/unslothai/unsloth/pull/10861) Fix RAG dense retrieval on older SQLite runtimes
- [#10841](https://github.com/unslothai/unsloth/pull/10841) Fix Q-GaLore quantization of single-sign groups
- [#10814](https://github.com/unslothai/unsloth/pull/10814) Studio: Stop Deep Research deleting links from code in its report
- [#10845](https://github.com/unslothai/unsloth/pull/10845) Replay tool-call arguments in the order the model generated (#10791)
- [#10816](https://github.com/unslothai/unsloth/pull/10816) Name the method on the uploaded model card
- [#10815](https://github.com/unslothai/unsloth/pull/10815) Studio: Estimate training memory correctly so the chat model can stay loaded

#### 🐛 New Issues
- [#10929](https://github.com/unslothai/unsloth/issues/10929) [Bug] Misleading error shown by Unsloth when revoked HF model, stored locally, is loaded; multiple errors seen in logs `feature request` `bug` 💬3
- [#10904](https://github.com/unslothai/unsloth/issues/10904) [Feature] Allow Model to "Leave a Self Note" Before Compacting. `feature request` 💬1
- [#10951](https://github.com/unslothai/unsloth/issues/10951) [Unsloth Desktop > API] Installed MLX model still fails auto-switch with 404 unless preloaded `feature request` `bug`
- [#10947](https://github.com/unslothai/unsloth/issues/10947) Strange errors
- [#10946](https://github.com/unslothai/unsloth/issues/10946) Unexpected overfit problem
- [#10945](https://github.com/unslothai/unsloth/issues/10945) Unable to launch because it still forces me to run the .bat
- [#10917](https://github.com/unslothai/unsloth/issues/10917) [Bug] Connection to certain cloud models fail due to Run settings including conflicting parameters `feature request` `bug`
- [#10923](https://github.com/unslothai/unsloth/issues/10923) Unsloth studio docker instructions don't save downloaded models.
- [#10921](https://github.com/unslothai/unsloth/issues/10921) [Bug] Memory usage growth since last llamacpp update `feature request` `bug`
- [#10912](https://github.com/unslothai/unsloth/issues/10912) [Bug] unsloth start pi: frequent "Error: terminated" / "Retry failed after 3 attempts: terminated" on slow CPU hosts
- [#10894](https://github.com/unslothai/unsloth/issues/10894) [Feature] UX Improvements for Audio Transcription & Image Generation Workflows `feature request`

#### 🔒 Closed Issues
- [#10559](https://github.com/unslothai/unsloth/issues/10559) [Unsloth Bug] llama-server crashes with GGML_ASSERT on image input for Gemma 4 (default ubatch too small)
- [#10355](https://github.com/unslothai/unsloth/issues/10355) [Bug] It ignores --tensor-split
- [#10637](https://github.com/unslothai/unsloth/issues/10637) [Feature]Download Dataset Button In Data Recipes
- [#10573](https://github.com/unslothai/unsloth/issues/10573) [Bug] Unsloth Desktop 0.1.807-beta (Windows) has "min_p and logit_bias not supported" when connected to vLLM
- [#6230](https://github.com/unslothai/unsloth/issues/6230) [Feature] AMD Docker support (mirrors the Blackwell from #5748)
- [#10817](https://github.com/unslothai/unsloth/issues/10817) [Bug] Unsloth Studio / Desktop: the Run settings sidebar and the model dropdown's Run settings page keep separate drafts and silently disagree
- [#6028](https://github.com/unslothai/unsloth/issues/6028) `FastVisionModel` breaks Gemma 4 (`gemma4_unified`) spatial localization vs plain transformers
- [#10835](https://github.com/unslothai/unsloth/issues/10835) [Bug] Safety check does not work with devised commands.
- [#9889](https://github.com/unslothai/unsloth/issues/9889) [Bug] Issue with context limit on DGX Spark
- [#10226](https://github.com/unslothai/unsloth/issues/10226) [Bug] Windows tool bar controls hidden by tooltips
- [#10791](https://github.com/unslothai/unsloth/issues/10791) [Unsloth Bug] Replayed tool calls sort argument keys, so llama-server re-processes every multi-parameter call (edit_file)

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,087 · **Open issues:** 379 · **Last push:** 1h ago

On September 15, 2026, there were no new releases for AIBrix, but several important bug fixes were merged, including enhancements to prevent adaptive concurrency backoff overflow (#2720), guard against zero throughput in SLOQueue (#2718), and scope BlockRemoved prefix eviction to the specific pod that sent it (#2723). Additionally, improvements were made to preserve byte-level request bodies on vLLM and TRT-LLM prefill/decode paths (#2725) and reduce flakes in the CI related to HTTPRoute caching and installation (#2721). Notably, a new feature was opened as issue #2727 to make the Kubernetes API client QPS and Burst configurable for the gateway-plugin, which has generated some discussion. Overall, the day focused on fine-tuning system robustness rather than introducing new features.

#### ✅ Merged PRs
- [#2720](https://github.com/vllm-project/aibrix/pull/2720) [Bug] Prevent adaptive concurrency backoff overflow
- [#2718](https://github.com/vllm-project/aibrix/pull/2718) [Bug] Guard SLOQueue.queueRank against zero throughput
- [#2723](https://github.com/vllm-project/aibrix/pull/2723) [Bug] Scope BlockRemoved prefix eviction to the pod that sent it
- [#2725](https://github.com/vllm-project/aibrix/pull/2725) [Bug] Preserve byte-level request body on vLLM and TRT-LLM PD prefill/decode paths
- [#2721](https://github.com/vllm-project/aibrix/pull/2721) [Bug][CI] Reduce HTTPRoute cache and installation E2E flakes

#### 🐛 New Issues
- [#2727](https://github.com/vllm-project/aibrix/issues/2727) [Feature] Make Kubernetes API client QPS and Burst configurable for gateway-plugin `area/gateway` `kind/feature` `area/orchestration` 💬4
- [#2724](https://github.com/vllm-project/aibrix/issues/2724) [Bug] vLLM/TRT-LLM PD paths still re-serialize the request body via map[string]any, breaking prompt_token_ids stability and prefix-cache reuse `kind/bug` `area/gateway` `area/kv-cache` 💬1

#### 🔒 Closed Issues
- [#2675](https://github.com/vllm-project/aibrix/issues/2675) [TEST] Restructure E2E tests and add PD protocol contract coverage

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,803 · **Open issues:** 556 · **Last push:** <1h ago

On September 15, 2026, there were no new releases for Semantic Router. Significant progress was made with several merged pull requests, including a fix to ensure the remote agent recipe setup is self-contained (#3802), publishing new vllm-sr images from the main branch (#3785), and adjustments to how prepared embeddings are managed, avoiding the treatment of default card capabilities as declarations (#3781). Additionally, enhancements were made to facilitate cross-model KV transfer wire headers (#3770) and to align the restored zh-Hans translation contract (#3777). A notable hot issue that emerged was the retraining of the jailbreak detector with attack labels focused on encoder models (#3787), highlighting ongoing research challenges in the field.

#### ✅ Merged PRs
- [#3802](https://github.com/vllm-project/semantic-router/pull/3802) [Bug] Make remote agent recipe setup and verification self-contained
- [#3785](https://github.com/vllm-project/semantic-router/pull/3785) [CI/Build] Publish vllm-sr images from main
- [#3781](https://github.com/vllm-project/semantic-router/pull/3781) [Bug] Own prepared embeddings on the router and stop treating default card capabilities as declarations
- [#3770](https://github.com/vllm-project/semantic-router/pull/3770) [Router] add cross-model KV transfer wire headers (#2976)
- [#3777](https://github.com/vllm-project/semantic-router/pull/3777) [Docs] Align restored zh-Hans translation contract

#### 🐛 New Issues
- [#3801](https://github.com/vllm-project/semantic-router/issues/3801) [Community] Workgroup Issues · 2026-09-14 – 2026-09-20 `community` `accepted` `owner/maintainers` 💬10
- [#3787](https://github.com/vllm-project/semantic-router/issues/3787) [Research] Retrain the jailbreak detector on attack labels with encoder models `accepted` `research` `wg/router-models-inference-runtime` 💬8
- [#3800](https://github.com/vllm-project/semantic-router/issues/3800) [Bug] LLM classifier signal fails when the classifier model reasons `bug` `accepted` `wg/router-models-inference-runtime` 💬4
- [#3797](https://github.com/vllm-project/semantic-router/issues/3797) [Bug] ProbeSpec sample/implementation mismatch `bug` `needs-acceptance` `wg/enterprise-environment` 💬2
- [#3793](https://github.com/vllm-project/semantic-router/issues/3793) [Bug] Support mistral.ai service_tier field in usage, chat completions API `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#3790](https://github.com/vllm-project/semantic-router/issues/3790) [Bug] TestLatestTutorialTaxonomyMatchesConfigHierarchy fails on main after zh-Hans current docs restore 💬1
- [#3804](https://github.com/vllm-project/semantic-router/issues/3804) [Bug] Insights lifecycle badges use no success color for successful requests `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#3794](https://github.com/vllm-project/semantic-router/issues/3794) [Feature] add support for additional containers to semantic-router deployment `enhancement` `needs-acceptance` `wg/enterprise-environment`
- [#3791](https://github.com/vllm-project/semantic-router/issues/3791) [Feature] streamed_body settings via SemanticRouter CRD `enhancement` `needs-acceptance` `wg/enterprise-environment`
- [#3798](https://github.com/vllm-project/semantic-router/issues/3798) [Feature] Add reasoning control to LLM classifier signals `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#3799](https://github.com/vllm-project/semantic-router/issues/3799) [Feature] Allow disabling the unused rationale field of LLM classifier signals `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#3562](https://github.com/vllm-project/semantic-router/issues/3562) [Community] Workgroup Issues · 2026-09-07 – 2026-09-13
- [#3780](https://github.com/vllm-project/semantic-router/issues/3780) [Bug] remote-embedding and routing-strategies E2E profiles fail on main after #3768 and #3760
- [#3784](https://github.com/vllm-project/semantic-router/issues/3784) [Bug] vllm-sr images are not published from main
- [#3790](https://github.com/vllm-project/semantic-router/issues/3790) [Bug] TestLatestTutorialTaxonomyMatchesConfigHierarchy fails on main after zh-Hans current docs restore

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*