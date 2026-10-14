# 📡 AI Ecosystem Digest — 2026-10-14

> Generated 2026-10-14 01:38 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 150,661 | 21 | 14 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 129,055 | 19 | 5 | 50 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,327 | 0 | 0 | 6 | 3 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,251 | 10 | 7 | 0 | 4 |
| [OpenCode](https://github.com/anomalyco/opencode) | 213,269 | 20 | 8 | 14 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,469 | 38 | 12 | 3 | 2 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 391,913 | 195 | 155 | 161 | 2 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 253,503 | 32 | 4 | 1 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,735 | 43 | 23 | 50 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | — | 0 | 0 | 0 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 131,093 | 7 | 10 | 32 | 10 |
| [Ollama](https://github.com/ollama/ollama) | — | 0 | 0 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 61,177 | 36 | 19 | 28 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 77,954 | 22 | 96 | 149 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,138 | 15 | 6 | 5 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,140 | 33 | 10 | 9 | 0 |

---

## ✨ Highlights

- **Gemini CLI** released [v0.65.0-nightly.20261014.g42c518220](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-nightly.20261014.g42c518220) along with other versions, marking notable updates in the tool.
- **OpenAI Codex** merged PR [#53816](https://github.com/openai/codex/pull/53816) to reject Guardian review threads during interactive CLI resume, enhancing user experience.
- **OpenClaw** addressed a significant bug with the new issue [#170724](https://github.com/openclaw/openclaw/issues/170724), reporting a macOS installation issue that garnered 7 comments.
- **llama.cpp** encountered a major problem highlighted in new issue [#30455](https://github.com/ggml-org/llama.cpp/issues/30455), where log output spamming raised concerns among users, amassing 8 comments.
- **vLLM** resolved issues concerning performance with new issue [#61485](https://github.com/vllm-project/vllm/issues/61485), receiving attention with 3 comments regarding the RedHatAI/diffusiongemma performance slowdown on specific hardware.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 150,661 · **Open issues:** 14,787 · **Last push:** 5h ago

On October 14, 2026, Claude Code did not release any new versions or merge any pull requests. However, several new issues emerged, with #101901 highlighting serious performance problems as the extension host crashes within seconds of launching multiple parallel background agent subagents on Windows. Other notable issues include #101922, which reports that Claude Code fails to function after a recent update to VS Code, and #101910, which proposes converting the current TUI editors for Plugins, Marketplace, and MCP to a web GUI when available. Overall, the day's developments reflect ongoing challenges with stability and user interface enhancements.

#### 🐛 New Issues
- [#101901](https://github.com/anthropics/claude-code/issues/101901) Extension host OOM-crashes within seconds to ~1 min of launching 2+ parallel background Agent subagents (Windows) `bug` `has repro` `platform:windows` `perf:memory` 💬3
- [#101910](https://github.com/anthropics/claude-code/issues/101910) [FEATURE] Convert the awkward Plugins, Marketpace and MCP editors in TUI to Web GUI (when available) `enhancement` `area:tui` `area:mcp` `area:plugins` 💬3
- [#101921](https://github.com/anthropics/claude-code/issues/101921) Desktop app (Code tab): session metadata disappears from the UI after switching organizations `bug` `platform:windows` `area:ui` `area:desktop` 💬1
- [#101733](https://github.com/anthropics/claude-code/issues/101733) [BUG] Desktop Files pane in Remote Control sessions: unsorted (raw readdir order), folders not expandable `bug` `has repro` `area:desktop` 💬1
- [#101909](https://github.com/anthropics/claude-code/issues/101909) [BUG] Desktop app (Windows) Code tab: Ctrl+Enter during a text-only response queues instead of send-now (app 2.31226.1.0, runtime 2.1.295) `bug` `has repro` `platform:windows` `area:desktop` 💬1
- [#101923](https://github.com/anthropics/claude-code/issues/101923) Spend-limit refusals on Oct 7 with no spend limit set (incident vmys9qn874h4): usage-credit purchases the same day, billing review requested
- [#101922](https://github.com/anthropics/claude-code/issues/101922) [BUG] Claude Code doesn't work after the last update of VS Code `bug`
- [#101918](https://github.com/anthropics/claude-code/issues/101918) Desktop: dictation overlay leaves a large empty area above the transcribed text `bug` `area:ui` `area:desktop`
- [#101920](https://github.com/anthropics/claude-code/issues/101920) [FEATURE] Mods API: timestamps (and usage) on $.session.messages() rows `enhancement` `area:plugins`
- [#101919](https://github.com/anthropics/claude-code/issues/101919) The interactive card can't be displayed in threads `bug` `area:claude-code-web` `platform:web`
- [#101917](https://github.com/anthropics/claude-code/issues/101917) [BUG] Cowork on iOS: skill proposal card (propose_skills) never renders, so there's no Save button `bug` `platform:ios` `area:cowork` `area:skills`
- [#101916](https://github.com/anthropics/claude-code/issues/101916) [FEATURE] Integrity protection for session history: resumed sessions silently accept edited transcripts `enhancement` `area:security`
- [#101915](https://github.com/anthropics/claude-code/issues/101915) SendMessage over Remote Control says "may be on an older version" for current-version peers on the same machine, which makes agents send the message again `bug` `platform:macos` `area:core`
- [#101914](https://github.com/anthropics/claude-code/issues/101914) [FEATURE] Let a plugin give its pane's Client the keyboard without a mouse click `enhancement` `platform:macos` `area:plugins`
- [#101913](https://github.com/anthropics/claude-code/issues/101913) [Bug] API Error: Safeguards Flagged Message as reasoning_extraction `bug` `duplicate` `platform:windows` `area:model`
- [#101912](https://github.com/anthropics/claude-code/issues/101912) [BUG] Read-only Bash search denied as Self-Modification again after native /permissions retry approval `bug` `platform:linux` `area:permissions`
- [#101911](https://github.com/anthropics/claude-code/issues/101911) [FEATURE] Add an option for progressive response rendering in Claude Code `enhancement` `area:tui`
- [#101843](https://github.com/anthropics/claude-code/issues/101843) [BUG] claude.ai connector: transient 403 (mcp_request_blocked) is cached as needs-auth; later sessions skip the connector and re-authorizing can't clear it `bug` `has repro` `platform:linux` `area:auth`
- [#101908](https://github.com/anthropics/claude-code/issues/101908) Claude writes Monitor log watchers (`tail -F | grep | while … break`) that never exit, so the task shows "Running" up to 30 min after the build ends `bug` `platform:macos` `area:tools` `model`
- [#101907](https://github.com/anthropics/claude-code/issues/101907) Bug Report: Missing Issue Details `bug` `platform:linux` `area:model` `needs-info`
- [#101905](https://github.com/anthropics/claude-code/issues/101905) [BUG] Canceled foreground subagent provider request has no terminal llm_request span `bug` `platform:macos` `area:agent-sdk`

#### 🔒 Closed Issues
- [#75210](https://github.com/anthropics/claude-code/issues/75210) [Bug][cyber] Safety block halted authorized reverse-engineering of my own drone's auth protocol, mid-secret-re (req_011CcnReWU19UF1bg7REcCRy)
- [#75104](https://github.com/anthropics/claude-code/issues/75104) [Bug][cyber] False-positive block on rooted-device SELinux/dev-mode setup for the user's own Android phone (req_011CcmzvbxgnDzowZjuRR3rJ)
- [#75227](https://github.com/anthropics/claude-code/issues/75227) [Bug][cyber] Safety block halted routine memory-dump analysis of a mobile game process for reverse engineering (req_011CcnXGX2KkGqEv89H61eRm)
- [#75175](https://github.com/anthropics/claude-code/issues/75175) [Bug][cyber] ClAudit false-positive while: “wire all of it together.... you did.. you got here to readin…” (req_011CcnFFi6C7cW65SFu9WLSb)
- [#75213](https://github.com/anthropics/claude-code/issues/75213) [Bug][cyber] Safeguard blocked a routine "finish the task" continuation message with no security content (req_011CcnRnv4YvFFpaz45AjrWk)
- [#75176](https://github.com/anthropics/claude-code/issues/75176) [Bug][cyber] False positive block during memory scan/watchpoint debugging tool development and testing (req_011CcnFJZScjXWEQuM7jUVN4)
- [#75225](https://github.com/anthropics/claude-code/issues/75225) [Bug][cyber] Safety filter blocked continued work on a drone auth plugin (RSA key-based protocol handshake cod (req_011CcnWhgbceAtzYUrYPwG71)
- [#85357](https://github.com/anthropics/claude-code/issues/85357) [Bug][aup] ClAudit false-positive while: “can you look at the config of my groups now?…” (req_011Cd1bhCAiShXTWS4a1R6LS)
- [#75187](https://github.com/anthropics/claude-code/issues/75187) [Bug][cyber] Safety filter blocked routine analysis of RSA-SHA256 key material extracted from own memory dump (req_011CcnJ2yHjMz3YQrqvLefKo)
- [#88614](https://github.com/anthropics/claude-code/issues/88614) [Bug][cyber] Blocked during Android device inspection and rootability assessment (req_011Ce1mvbe6Ktr2PpNQBHbjy)
- [#88613](https://github.com/anthropics/claude-code/issues/88613) [Bug][cyber] False positive while inspecting captured device traffic for unencrypted HTTP flows (req_011Ce1L8LvNSkpJcCLt6VFay)
- [#88612](https://github.com/anthropics/claude-code/issues/88612) [Bug][cyber] Local router DNS troubleshooting and firmware update packet inspection (req_011Ce1J6s72zjygpgBt5W5Jv)
- [#88611](https://github.com/anthropics/claude-code/issues/88611) [Bug][cyber] False positive while analyzing local packet captures during device firmware update (req_011Ce1J4t6WgbqX3FKCWz9Ta)
- [#99468](https://github.com/anthropics/claude-code/issues/99468) [Bug] Safeguard error when requesting video recommendations after image display

### OpenAI Codex (`openai/codex`)

**Stars:** 129,055 · **Open issues:** 22,353 · **Last push:** <1h ago

On October 14, 2026, OpenAI Codex released three alpha versions of Rust: 0.163.0-alpha.9, 0.163.0-alpha.8, and 0.163.0-alpha.10, with updates enhancing system performance. Significant merged pull requests include the addition of safe diagnostics for workspace routing configuration errors in PR #53805 and support for daemon installation from Windows WinGet packages in PR #53811. Notably, the identified issues include #53817, concerning a response stream disconnect on Windows desktops, which may impact user experience by causing context compaction failures. Overall, the day's advancements focus on stability improvements and expanding compatibility across platforms.

#### 🚀 New Releases
- [rust-v0.163.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.9) 0.163.0-alpha.9
- [rust-v0.163.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.8) 0.163.0-alpha.8
- [rust-v0.163.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10) 0.163.0-alpha.10

#### ✅ Merged PRs
- [#53816](https://github.com/openai/codex/pull/53816) Reject Guardian review threads during interactive CLI resume
- [#53811](https://github.com/openai/codex/pull/53811) Support daemon installation from Windows WinGet packages
- [#53805](https://github.com/openai/codex/pull/53805) Add safe diagnostics to workspace routing configuration errors
- [#53804](https://github.com/openai/codex/pull/53804) Keep the Agent command center visible during archive and delete
- [#53800](https://github.com/openai/codex/pull/53800) Wire background compaction into the turn lifecycle
- [#53797](https://github.com/openai/codex/pull/53797) Refresh Guardian reviews when review context changes
- [#53795](https://github.com/openai/codex/pull/53795) Use the bundled model catalog in the MCP startup invalidation test
- [#53794](https://github.com/openai/codex/pull/53794) Retain rollout migration locks across worker cancellation
- [#53790](https://github.com/openai/codex/pull/53790) Fix cancellation of macOS user-verification prompts
- [#53784](https://github.com/openai/codex/pull/53784) Forward client voice session IDs in realtime requests
- [#53781](https://github.com/openai/codex/pull/53781) Remove the product-gating TODO from `SkillPolicy`
- [#53780](https://github.com/openai/codex/pull/53780) Remove redundant Codex manual cache directory check
- [#53763](https://github.com/openai/codex/pull/53763) Enrich V2 capability discovery with resolved plugin and skill metadata
- [#53754](https://github.com/openai/codex/pull/53754) Support Command/Super shortcuts in the TUI keymap
- [#53753](https://github.com/openai/codex/pull/53753) Extend copy-on-select to composer text
- [#53751](https://github.com/openai/codex/pull/53751) Apply feature overrides when restarting the app-server daemon
- [#53747](https://github.com/openai/codex/pull/53747) Prefer remote Visualize installs over the bundled plugin
- [#53745](https://github.com/openai/codex/pull/53745) Remove `modelSlug` from the latest-model resolver output
- [#53736](https://github.com/openai/codex/pull/53736) Acquire and cache opt-in executor capability inventories via V2
- [#53733](https://github.com/openai/codex/pull/53733) Default Guardian v2 async classification to conversation mode
- [#53732](https://github.com/openai/codex/pull/53732) Reuse compiled search patterns across compressed rollouts
- [#53728](https://github.com/openai/codex/pull/53728) Preserve the remote cwd filter in the in-app resume picker
- [#53725](https://github.com/openai/codex/pull/53725) Render Markdown web links as labels in Rex
- [#53723](https://github.com/openai/codex/pull/53723) Wire V2 capability discovery through exec-server RPC
- [#53717](https://github.com/openai/codex/pull/53717) Enable Cyber access programs for API-key sessions by default
- [#53709](https://github.com/openai/codex/pull/53709) Separate MCP sandbox policy from launcher metadata
- [#53706](https://github.com/openai/codex/pull/53706) Preserve URLs and email addresses during external agent migration
- [#53701](https://github.com/openai/codex/pull/53701) Enable CLI Daybreak by default and enforce background-turn eligibility
- [#53699](https://github.com/openai/codex/pull/53699) Cancel Guardian V2 classifications that exceed the tool-call lag window
- [#53698](https://github.com/openai/codex/pull/53698) Interrupt and drain canceled classifier responses before socket reuse
- [#53693](https://github.com/openai/codex/pull/53693) Add keyboard selection support to the transcript view
- [#53691](https://github.com/openai/codex/pull/53691) Account for replay caches in encrypted compaction budgets
- [#53689](https://github.com/openai/codex/pull/53689) Constrain API-key model access programs to server support
- [#53678](https://github.com/openai/codex/pull/53678) Preserve inherited context in prediction forks
- [#53673](https://github.com/openai/codex/pull/53673) Publish Rust releases with the GitHub CLI
- [#53672](https://github.com/openai/codex/pull/53672) Keep discovered Apps tools available during startup recovery
- [#53670](https://github.com/openai/codex/pull/53670) Account for token usage from incomplete responses
- [#53668](https://github.com/openai/codex/pull/53668) Improve remote exec-server test startup diagnostics
- [#53660](https://github.com/openai/codex/pull/53660) Extract shared multi-agent v2 thread spawning
- [#53657](https://github.com/openai/codex/pull/53657) Share hook configuration across cloned hook views
- [#53654](https://github.com/openai/codex/pull/53654) Keep spawned children provisional until the spawn result returns
- [#53633](https://github.com/openai/codex/pull/53633) Add an environment API key fallback for Guardian Decisions
- [#53632](https://github.com/openai/codex/pull/53632) Stabilize write ordering in the shared message board scenario
- [#53631](https://github.com/openai/codex/pull/53631) Materialize the thread before testing a discovered daemon restart
- [#53628](https://github.com/openai/codex/pull/53628) Record truncation metrics for accepted Guardian review inputs
- [#53622](https://github.com/openai/codex/pull/53622) Preserve remote exec output until it is collected
- [#53620](https://github.com/openai/codex/pull/53620) Reuse background results for remote V2 compaction
- [#53617](https://github.com/openai/codex/pull/53617) Allow hiding native tools while retaining the multi-agent V2 runtime
- [#53614](https://github.com/openai/codex/pull/53614) Add infrastructure for speculative remote V2 compaction
- [#53606](https://github.com/openai/codex/pull/53606) Prepare compaction helpers for background requests

#### 🐛 New Issues
- [#53796](https://github.com/openai/codex/issues/53796) Windows elevated sandbox: OS-managed deny-read target fails after partial ACL update `bug` `windows-os` `sandbox` `CLI` 💬2
- [#53582](https://github.com/openai/codex/issues/53582) CLI: Removes leading tabs from display `bug` `TUI` `CLI` 💬2
- [#53823](https://github.com/openai/codex/issues/53823) [Windows][Computer Use] Mouse control appears to lock up when an elevated installer has focus `bug` `windows-os` `app` `computer-use` 💬1
- [#53822](https://github.com/openai/codex/issues/53822) [Windows desktop] Two ChatGPT Work conversations stuck at Processing; Stop and restart do not resolve it `bug` `windows-os` `app` `connectivity` 💬1
- [#53821](https://github.com/openai/codex/issues/53821) Windows browser launch and screen capture rejected without explanation `bug` `windows-os` `sandbox` `tool-calls` 💬1
- [#53815](https://github.com/openai/codex/issues/53815) [ChatGPT App] Completed response disappears and is replaced by “approval request is no longer active” `bug` `sandbox` `app` 💬1
- [#53820](https://github.com/openai/codex/issues/53820) Windows desktop 26.1007.2314.0: main-process crash during embedded browser tab teardown, window and tray disappear `bug` `windows-os` `app` `browser` 💬1
- [#53817](https://github.com/openai/codex/issues/53817) Windows desktop: response stream disconnect followed by failed remote context compaction `bug` `windows-os` `context` `app` 💬1
- [#53813](https://github.com/openai/codex/issues/53813) Windows Chrome control fails before tab inspection: required platform directory missing (0x80070003) `bug` `windows-os` `app` `browser` 💬1
- [#53809](https://github.com/openai/codex/issues/53809) Possible cybersecurity false positive interrupts isolated local PostgreSQL diagnostic on macOS `bug` `app` `safety-check` 💬1
- [#53807](https://github.com/openai/codex/issues/53807) [Agent-filed] GPT-6.1 Sol returns server_error when replaying one saved reasoning item (9 KB reproduction) `bug` `CLI` `session` 💬1
- [#53806](https://github.com/openai/codex/issues/53806) Codex app auto-review blocks CapCut access after failed export `bug` `sandbox` `app` `browser` 💬1
- [#53819](https://github.com/openai/codex/issues/53819) [WITHDRAWN] Not a product bug report `enhancement` `session`
- [#53818](https://github.com/openai/codex/issues/53818) [WITHDRAWN] Not a product bug report `bug` `model-behavior` `session`
- [#53824](https://github.com/openai/codex/issues/53824) macOS desktop: local Codex run appears to stop when leaving the chat `bug` `app` `session`
- [#53814](https://github.com/openai/codex/issues/53814) [Codex App][Goals] File-backed Goal prematurely completes after reading goal-objective.md instead of executing the actual task `bug` `model-behavior` `agent` `app`
- [#53812](https://github.com/openai/codex/issues/53812) Provide one-click synchronized updates for SSH-connected Codex hosts `enhancement` `app` `app-server` `remote`
- [#53810](https://github.com/openai/codex/issues/53810) Build provenance request for Codex Primary Runtime Windows x64 bundle 26.1011.11113 `documentation` `windows-os`
- [#53808](https://github.com/openai/codex/issues/53808) [ChatGPT Pro $200/month] Paid Python/shell/file tools fail with ClientError — acknowledged for weeks, still no working resolution `bug` `tool-calls` `connectivity`

#### 🔒 Closed Issues
- [#47559](https://github.com/openai/codex/issues/47559) VS Code agent sandbox fails before commands run: mountinfo path is not absolute
- [#53582](https://github.com/openai/codex/issues/53582) CLI: Removes leading tabs from display
- [#53819](https://github.com/openai/codex/issues/53819) [WITHDRAWN] Not a product bug report
- [#53818](https://github.com/openai/codex/issues/53818) [WITHDRAWN] Not a product bug report
- [#51721](https://github.com/openai/codex/issues/51721) Windows WinGet package cannot start app-server daemon: "the CLI package does not match this platform or executable"

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,327 · **Open issues:** 755 · **Last push:** <1h ago

On October 14, 2026, the Gemini CLI released version v0.65.0-nightly.20261014.g42c518220, which includes important fixes such as correcting the reverse search highlight index for expanding Unicode characters and treating whitespace-only UTF-16 and UTF-32 files as empty. The v0.65.0-preview.0 was also released, enforcing read-only workspace settings in untrusted folders and preventing duplicate tool response turns when resuming sessions. Notable merged pull requests include a fix to prevent session poisoning from rapid Ctrl-C interruptions and restoring debounced static UI refresh on terminal width changes. There were no new issues reported today, indicating a stable development environment.

#### 🚀 New Releases
- [v0.65.0-nightly.20261014.g42c518220](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-nightly.20261014.g42c518220) Release v0.65.0-nightly.20261014.g42c518220
- [v0.65.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0) Release v0.65.0-preview.0
- [v0.64.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0) Release v0.64.0

#### ✅ Merged PRs
- [#29739](https://github.com/google-gemini/gemini-cli/pull/29739) Changelog for v0.65.0-preview.0
- [#29723](https://github.com/google-gemini/gemini-cli/pull/29723) Update ROADMAP.md to no longer reference outdated 2025 roadmap
- [#29728](https://github.com/google-gemini/gemini-cli/pull/29728) fix(cli): prevent session poisoning on rapid Ctrl-C interruption
- [#29644](https://github.com/google-gemini/gemini-cli/pull/29644) fix(cli): restore debounced static UI refresh on terminal width changes
- [#29722](https://github.com/google-gemini/gemini-cli/pull/29722) fix(core): treat whitespace-only UTF-16 and UTF-32 files as empty
- [#29699](https://github.com/google-gemini/gemini-cli/pull/29699) fix(cli): correct reverse search highlight index for expanding unicode characters

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,251 · **Open issues:** 2,186 · **Last push:** <1h ago

On October 14, 2026, GitHub Copilot CLI released version 1.0.98-1, which added support for Gemini 4 Argon and improved session management by ensuring that the MCP status and /mcp commands remain synced after split-view switches, as well as retaining characters typed during startup. This release fixed issues related to session resumption and abandoned permission requests. Notably, the platform saw the introduction of new issues, including issue #5136, which requests support for attaching PDFs to GitHub issues from Copilot CLI, highlighting a need for enhanced document management within the tool. Other issues reported include problems with the handling of account policies and session naming. Overall, the day was marked by significant updates and user feedback aimed at improving the user experience.

#### 🚀 New Releases
- [v1.0.98-1](https://github.com/github/copilot-cli/releases/tag/v1.0.98-1) 1.0.98-1
- [v1.0.98-0](https://github.com/github/copilot-cli/releases/tag/v1.0.98-0) 1.0.98-0
- [v1.0.97](https://github.com/github/copilot-cli/releases/tag/v1.0.97) 1.0.97
- [v1.0.97-3](https://github.com/github/copilot-cli/releases/tag/v1.0.97-3) 1.0.97-3

#### 🐛 New Issues
- [#5136](https://github.com/github/copilot-cli/issues/5136) Support attaching PDFs to GitHub issues from Copilot CLI 💬1
- [#5133](https://github.com/github/copilot-cli/issues/5133) includeCoAuthoredBy: false is ignored in ACP mode (copilot --acp) `triage` 💬1
- [#5131](https://github.com/github/copilot-cli/issues/5131) Make copilot shut up and wait when i'm typing `triage`
- [#5130](https://github.com/github/copilot-cli/issues/5130) Constant error message around "Managed account policy" `triage`
- [#5137](https://github.com/github/copilot-cli/issues/5137) Expand thoughts by default `triage`
- [#5135](https://github.com/github/copilot-cli/issues/5135) /exit requires two attempts after resuming a session; /exit print quits immediately `triage`
- [#5134](https://github.com/github/copilot-cli/issues/5134) Windows: runaway MCP OAuth initialization opens repeated browser sessions; Maximum update depth exceeded `triage`
- [#5132](https://github.com/github/copilot-cli/issues/5132) Sessions missing names `triage`
- [#5129](https://github.com/github/copilot-cli/issues/5129) Provide a system-wide Windows installer for enterprise deployment `triage`
- [#5128](https://github.com/github/copilot-cli/issues/5128) Feature request: Allow renaming sessions from Sessions view and sidebar `area:sessions`

#### 🔒 Closed Issues
- [#285](https://github.com/github/copilot-cli/issues/285) Allow copilot-cli to write via tool to only specific files
- [#5136](https://github.com/github/copilot-cli/issues/5136) Support attaching PDFs to GitHub issues from Copilot CLI
- [#5045](https://github.com/github/copilot-cli/issues/5045) /compact repeatedly fails with empty model response using gpt-6.1-sol
- [#3757](https://github.com/github/copilot-cli/issues/3757) Content Exclusion Service fails closed (blocks all shell commands) after auth/token refresh — use-after-dispose (v1.0.61)
- [#3113](https://github.com/github/copilot-cli/issues/3113) Tool selection failure with certain MCP servers going from shell -> MCP -> shell -> MCP
- [#2833](https://github.com/github/copilot-cli/issues/2833) Bug: Plan approval in autopilot+fleet mode triggers execution with fleet dispatch ordering mismatch
- [#5017](https://github.com/github/copilot-cli/issues/5017) SCP-style remote retains leading slash in GitHub repository owner

### OpenCode (`anomalyco/opencode`)

**Stars:** 213,269 · **Open issues:** 4,219 · **Last push:** <1h ago

On October 14, 2026, there were no new releases for OpenCode, but several important pull requests were merged, including features that enhance plugin permissions and improve the user experience in the desktop interface, such as refined diff view colors and session token display enhancements. Critical fixes addressed issues with the Figma plugin's peer resolution and ensured proper handling of user message attachments. A noteworthy new issue reported is related to the integrated terminal on Windows, which fails due to an "opencode-pty" helper not being found in the system's PATH, indicating potential challenges for Windows users. Overall, while it was a routine maintenance day, the ongoing focus on plugin stability and usability enhancements stands out.

#### ✅ Merged PRs
- [#54930](https://github.com/anomalyco/opencode/pull/54930) feat(plugin): let plugins assert permissions
- [#55269](https://github.com/anomalyco/opencode/pull/55269) fix(plugin): resolve the figma plugin's peer from the workspace
- [#55264](https://github.com/anomalyco/opencode/pull/55264) chore(release): promote dev to production
- [#55263](https://github.com/anomalyco/opencode/pull/55263) fix(plugin): keep each Promise hook rejection on its own tool call
- [#52551](https://github.com/anomalyco/opencode/pull/52551) feat(desktop): refine diff view colors
- [#55224](https://github.com/anomalyco/opencode/pull/55224) docs: correct Cat Jam Free data policy
- [#54921](https://github.com/anomalyco/opencode/pull/54921) fix(core): discover system configuration directory at lowest precedence
- [#54101](https://github.com/anomalyco/opencode/pull/54101) feat(desktop): manage provider accounts and restore Console connect intro
- [#53570](https://github.com/anomalyco/opencode/pull/53570) feat(desktop): move session unread dots into tab container
- [#55259](https://github.com/anomalyco/opencode/pull/55259) docs: use supported policy action names
- [#54650](https://github.com/anomalyco/opencode/pull/54650) fix(session-ui): render user message attachments above text and admit inline files
- [#55254](https://github.com/anomalyco/opencode/pull/55254) fix(core): let v1 npm config target built-in provider routes
- [#53785](https://github.com/anomalyco/opencode/pull/53785) feat(desktop): show session tokens and cost on the session view
- [#55018](https://github.com/anomalyco/opencode/pull/55018) fix(app): retain raw media bytes up to 256 MiB for artifact previews

#### 🐛 New Issues
- [#55189](https://github.com/anomalyco/opencode/issues/55189) desktop: integrated terminal fails on Windows - "opencode-pty" helper not found in $PATH (503) 💬5
- [#55228](https://github.com/anomalyco/opencode/issues/55228) `session.environment` is not applied to subagent (child) sessions `reproduced` 💬4
- [#55271](https://github.com/anomalyco/opencode/issues/55271) ai: OpenAI Chat tool-content guard aborts session drain without identifying the offending part `triaging` 💬3
- [#55201](https://github.com/anomalyco/opencode/issues/55201) mcp: loopback OAuth callback treats code-less requests (incl. Chrome PNA preflights) as fatal authorization failures `reproduced` 💬3
- [#55250](https://github.com/anomalyco/opencode/issues/55250) tui: false "Session location unavailable" prompt after network reconnect `reproduced` 💬3
- [#55204](https://github.com/anomalyco/opencode/issues/55204) Queued user message is re-injected into model context once per agent step after an interrupted run 💬3
- [#55273](https://github.com/anomalyco/opencode/issues/55273) [FEATURE]: core: publish prompt preparation status before cold-location activation 💬2
- [#55214](https://github.com/anomalyco/opencode/issues/55214) Opencode doesn't stop the agents when I close the app! 💬2
- [#55275](https://github.com/anomalyco/opencode/issues/55275) migration: V1 "global" project sessions invisible in V2 session list after upgrade `pending close` `triaging` 💬1
- [#55272](https://github.com/anomalyco/opencode/issues/55272) core: CPU-heavy plugin setup and full-scope teardown starve the shared event loop `reproduced` 💬1
- [#55268](https://github.com/anomalyco/opencode/issues/55268) provider: big-pickle leaks chain-of-thought into visible text when reasoning contains the literal close-think tag 💬1
- [#55266](https://github.com/anomalyco/opencode/issues/55266) tui: free-tier model rejected for custom primary agent while build works `pending close` `triaging` 💬1
- [#55256](https://github.com/anomalyco/opencode/issues/55256) tui: compact number formatter shows "1000.0K" instead of "1.0M" between 999,950 and 999,999 `reproduced` 💬1
- [#55255](https://github.com/anomalyco/opencode/issues/55255) Windows: pwsh installed as a Store app-execution alias is not resolved, so the shell falls back to Windows PowerShell 5.1 💬1
- [#55253](https://github.com/anomalyco/opencode/issues/55253) migrate-v1: sessions invisible after upgrade (left on 'global' project) `pending close` `triaging` 💬1
- [#55243](https://github.com/anomalyco/opencode/issues/55243) A fork of a fork misses the prompt cache: its prompt_cache_key is the intermediate fork's id `reproduced` 💬1
- [#55242](https://github.com/anomalyco/opencode/issues/55242) [FEATURE]: Sync selected model across all agents (build/plan/subagents) `pending close` `triaging` 💬1
- [#55241](https://github.com/anomalyco/opencode/issues/55241) snapshot: leaked git index.lock permanently breaks file snapshots until manual cleanup `pending close` `triaging` 💬1
- [#55236](https://github.com/anomalyco/opencode/issues/55236) Is it much farther Papa Smurf? `pending close` `triaging` 💬1
- [#55235](https://github.com/anomalyco/opencode/issues/55235) V2 TUI: URL truncation in tool calls hides the hostname 💬1

#### 🔒 Closed Issues
- [#51107](https://github.com/anomalyco/opencode/issues/51107) V2 does not load managed config from `%ProgramData%\opencode` (V1 managed settings)
- [#54805](https://github.com/anomalyco/opencode/issues/54805) [FEATURE]: Add OpenCode as a supported client for the Figma remote MCP server
- [#42846](https://github.com/anomalyco/opencode/issues/42846) [FEATURE]: Plugins can't intercept outbound requests for AI-SDK models (http.request hook excludes the AI-SDK path)
- [#54418](https://github.com/anomalyco/opencode/issues/54418) TUI crash: Orphan text error: "No configured models" must have a <text> as a parent: box-687 above text-node-1456
- [#50331](https://github.com/anomalyco/opencode/issues/50331) plugin: parallel tool calls surface the first execute.before hook error for all failures
- [#54980](https://github.com/anomalyco/opencode/issues/54980) [FEATURE]: Free could display how much free usage is left
- [#54973](https://github.com/anomalyco/opencode/issues/54973) [BUG]: One malformed model field drops the whole provider from `providers`, with only a log warning
- [#54946](https://github.com/anomalyco/opencode/issues/54946) [BUG]: The TUI prompt grows past the bottom of the screen

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,469 · **Open issues:** 1,848 · **Last push:** <1h ago

On October 14, 2026, Qwen Code released version v0.25.2-preview.0, which introduced enhancements to the managed-agent's robustness and added the feature H4e-b2 for handling lead mailboxes via session messages. Additionally, v0.25.1-nightly.20261013.6212189f1f was released with the same updates for connector and broker stability. Significant merged pull requests included #14069, which consolidated persistence into a 32-table baseline, and #14014, which improved command ordering and interruptions in the managed-agent. Among the newly reported issues, #14115 drew attention for recognizing undiagnosable 400 errors in bodyless providers, highlighting a need for better error logging.

#### 🚀 New Releases
- [v0.25.2-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.2-preview.0) Release v0.25.2-preview.0
- [v0.25.1-nightly.20261013.6212189f1f](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-nightly.20261013.6212189f1f) Release v0.25.1-nightly.20261013.6212189f1f

#### ✅ Merged PRs
- [#14069](https://github.com/QwenLM/qwen-code/pull/14069) feat(managed-agent): consolidate persistence into a 32-table baseline
- [#14108](https://github.com/QwenLM/qwen-code/pull/14108) test(managed-agent): fix the shell lifecycle recovery journal-head assertions (#14103)
- [#14014](https://github.com/QwenLM/qwen-code/pull/14014) fix(managed-agent): order a sender's commands by commit sequence, and make the member restart IT interrupt a live wait

#### 🐛 New Issues
- [#14115](https://github.com/QwenLM/qwen-code/issues/14115) Bodyless provider 400s are undiagnosable: surface APIError errorResponse/headers/x-request-id in CLI error and OPENAI_ERROR log `priority/P2` `type/bug` `category/core` `scope/logging` 💬4
- [#14062](https://github.com/QwenLM/qwen-code/issues/14062) Hosted send_message inside its size bound can fail the sender's whole Turn: the encodeToolInput overflow is thrown, not refused `priority/P2` `type/bug` `category/tools` `scope/session-management` 💬4
- [#14075](https://github.com/QwenLM/qwen-code/issues/14075) Static mode: word-wrap orphans 1-2 characters when a line fills the terminal width `priority/P3` `type/bug` `category/ui` `scope/components` 💬4
- [#14063](https://github.com/QwenLM/qwen-code/issues/14063) Hosted session_command timeout text tells a member_message sender to "read the board"; repeating the send duplicates the message `priority/P2` `type/bug` `category/cli` `scope/session-management` 💬4
- [#14122](https://github.com/QwenLM/qwen-code/issues/14122) feat(managed-agent): Stage D7 the java_durable admission profile and its two durable-command prerequisites `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#14116](https://github.com/QwenLM/qwen-code/issues/14116) Managed Agent: a wake input committed before its Harness dies is not run until something unrelated loads the Session `priority/P1` `type/bug` `category/core` `scope/session-management` 💬3
- [#14114](https://github.com/QwenLM/qwen-code/issues/14114) ACP sessions never announce MCP tools discovered after session start (deferred-tool reminder not drained in ACP Session) `priority/P1` `type/bug` `category/integration` `scope/mcp` 💬3
- [#14112](https://github.com/QwenLM/qwen-code/issues/14112) OpenAI-compatible providers backed by vLLM: every request 400s — parameterless tools serialized without "parameters" + unsupported tool_choice:"required" `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬3
- [#14110](https://github.com/QwenLM/qwen-code/issues/14110) Build fails: packages/cli uses ink APIs not exported by pinned ink@7.0.3 `status/need-information` `priority/P2` `type/bug` `category/development` 💬3
- [#14095](https://github.com/QwenLM/qwen-code/issues/14095) shell permission analyzer: deferred review follow-ups from #12280 `priority/P2` `type/bug` `category/security` `scope/shell` 💬3
- [#14097](https://github.com/QwenLM/qwen-code/issues/14097) SGLang context overflow errors are missed or lose their token counts `priority/P2` `model/long-context` `type/bug` `category/core` 💬3
- [#14096](https://github.com/QwenLM/qwen-code/issues/14096) vLLM context overflow errors are not recognized, so reactive compaction never runs `priority/P2` `model/long-context` `type/bug` `category/core` 💬3
- [#14089](https://github.com/QwenLM/qwen-code/issues/14089) feat(memory): auto-recall hook context is not deduplicated against local memory `priority/P3` `type/feature-request` `category/core` `scope/memory` 💬3
- [#14072](https://github.com/QwenLM/qwen-code/issues/14072) Main CI failed: SDK Java — HostedOperatorRecoveryProbeTest.cleansOwnedProcessesWhenAnEscapedPidFailsOwnershipValidation `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬3
- [#14070](https://github.com/QwenLM/qwen-code/issues/14070) fix(managed-agent): concurrent takeover loads of one Session (message relay + coordinator) refuse one with 409 hosted_session_already_attached, costing the parked Turn a full backoff step `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#14065](https://github.com/QwenLM/qwen-code/issues/14065) tracking(core): arm-B A/B sample — delegated-answer format failures and one premature get_goal call `priority/P3` `category/core` `type/badcase` `roadmap/subagents-tools` 💬3
- [#14038](https://github.com/QwenLM/qwen-code/issues/14038) Update the Qwen Code logo in Desktop and Web Shell to the current brand mark `priority/P3` `type/feature-request` `category/ui` `scope/packaging` 💬3
- [#14041](https://github.com/QwenLM/qwen-code/issues/14041) qwen batch accepts path aliases for the same target and submits duplicate requests `priority/P2` `type/bug` `category/cli` `scope/commands` 💬3
- [#14049](https://github.com/QwenLM/qwen-code/issues/14049) Desktop: dragging files onto the chat does nothing (native drag-drop handler swallows drops) `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬3
- [#14047](https://github.com/QwenLM/qwen-code/issues/14047) [H4e follow-up] After a Harness crash in a child-result wake turn, the lead is never re-prompted: recovered answers sit unread until its next input `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#14051](https://github.com/QwenLM/qwen-code/issues/14051) Web Shell: open context usage details in place instead of appending cards to the conversation `priority/P3` `type/feature-request` `category/ui` `need-discussion` 💬3
- [#14054](https://github.com/QwenLM/qwen-code/issues/14054) test(managed-agent): Stage F fault gates FG8-FG10 for the capabilities enabled since FG7 `priority/P2` `type/feature-request` `category/integration` `scope/testing` 💬3
- [#14103](https://github.com/QwenLM/qwen-code/issues/14103) Main CI failed: SDK Java — HostedShellLifecycleRecoveryIT.publicDeletionRecoversOriginalResources(String)[1] (+3 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14105](https://github.com/QwenLM/qwen-code/issues/14105) Main CI failed: SDK Java — HostedShellLifecycleRecoveryIT.publicDeletionRecoversOriginalResources(String)[1] (+3 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14104](https://github.com/QwenLM/qwen-code/issues/14104) Main CI failed: SDK Java — HostedShellLifecycleRecoveryIT.publicDeletionRecoversOriginalResources(String)[1] (+3 more) `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬2
- [#14102](https://github.com/QwenLM/qwen-code/issues/14102) Main CI failed: SDK Java — HostedShellLifecycleRecoveryIT.publicDeletionRecoversOriginalResources(String)[1] (+3 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14106](https://github.com/QwenLM/qwen-code/issues/14106) Main CI failed: SDK Java — DurableLocalProcessRuntimeProvisionerTest.failedSpawnDoesNotRetryReconciliationForever (+4 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14101](https://github.com/QwenLM/qwen-code/issues/14101) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > parks an admitted prompt when model request preparation fails (+1 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14100](https://github.com/QwenLM/qwen-code/issues/14100) Main CI failed: E2E Tests on 58c59136ca6f `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14084](https://github.com/QwenLM/qwen-code/issues/14084) Main CI failed: Qwen Code CI — src/serve/hosted-approval-inline-limit.test.ts > completes native approval at 63500 content bytes ('allow') `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14040](https://github.com/QwenLM/qwen-code/issues/14040) docs(cli): arrowKeysScrollTranscript names Terminal.app, but Terminal.app does report the mouse wheel `status/needs-triage` `type/bug` 💬2
- [#14088](https://github.com/QwenLM/qwen-code/issues/14088) Main CI failed: E2E Tests on c3c38cf58337 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14085](https://github.com/QwenLM/qwen-code/issues/14085) Desktop app: context-usage ring missing from composer despite being bundled in every desktop release (model metadata not reaching the client) `priority/P2` `type/bug` `category/ui` `scope/macos` 💬2
- [#14060](https://github.com/QwenLM/qwen-code/issues/14060) Main CI failed: E2E Tests on 83ffe4540c7d `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14037](https://github.com/QwenLM/qwen-code/issues/14037) Main CI failed: SDK Java — ToolPublicationAsyncVerificationMySqlIT.transientVerificationErrorsRetryBeforeAndAfterClaim(boolean, String)[… `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14028](https://github.com/QwenLM/qwen-code/issues/14028) Main CI failed: Qwen Code CI — src/agents/workspace-agents/workspace-lock.test.ts > … > loses no roster update when two processes write at o… `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬2
- [#14125](https://github.com/QwenLM/qwen-code/issues/14125) Main CI failed: SDK Java on 163e4686191d `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#14126](https://github.com/QwenLM/qwen-code/issues/14126) Main CI failed: SDK Java — ManagedAgentServerIntegrationTest.retractionRenamesTheDeltaThatContinuedTheRetractedOne `type/bug` `status/ready-for-agent` `autofix/approved`

#### 🔒 Closed Issues
- [#12333](https://github.com/QwenLM/qwen-code/issues/12333) eval: verify tool-loading cost and task quality with local CLI A/B
- [#13535](https://github.com/QwenLM/qwen-code/issues/13535) feat(managed-agent): actor roles and tenant-isolation acceptance for production enablement
- [#14072](https://github.com/QwenLM/qwen-code/issues/14072) Main CI failed: SDK Java — HostedOperatorRecoveryProbeTest.cleansOwnedProcessesWhenAnEscapedPidFailsOwnershipValidation
- [#13092](https://github.com/QwenLM/qwen-code/issues/13092) Add SerpApi to Web Search MCP services document
- [#13838](https://github.com/QwenLM/qwen-code/issues/13838) fix(managed-agent): re-attachment of a child Session answers 409 hosted_session_already_attached after a control-plane kill (non-durable-local host profile)
- [#14038](https://github.com/QwenLM/qwen-code/issues/14038) Update the Qwen Code logo in Desktop and Web Shell to the current brand mark
- [#14041](https://github.com/QwenLM/qwen-code/issues/14041) qwen batch accepts path aliases for the same target and submits duplicate requests
- [#14049](https://github.com/QwenLM/qwen-code/issues/14049) Desktop: dragging files onto the chat does nothing (native drag-drop handler swallows drops)
- [#14103](https://github.com/QwenLM/qwen-code/issues/14103) Main CI failed: SDK Java — HostedShellLifecycleRecoveryIT.publicDeletionRecoversOriginalResources(String)[1] (+3 more)
- [#14084](https://github.com/QwenLM/qwen-code/issues/14084) Main CI failed: Qwen Code CI — src/serve/hosted-approval-inline-limit.test.ts > completes native approval at 63500 content bytes ('allow')
- [#14060](https://github.com/QwenLM/qwen-code/issues/14060) Main CI failed: E2E Tests on 83ffe4540c7d
- [#14037](https://github.com/QwenLM/qwen-code/issues/14037) Main CI failed: SDK Java — ToolPublicationAsyncVerificationMySqlIT.transientVerificationErrorsRetryBeforeAndAfterClaim(boolean, String)[…

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

**Stars:** 391,913 · **Open issues:** 9,559 · **Last push:** <1h ago

On October 14, 2026, OpenClaw released version 2026.10.5-beta.3, which enhanced gateway operations by ensuring that pnpm 12 installs maintain the Gateway service and the `openclaw` launcher, while also improving Windows and macOS update procedures to support scheduled tasks and Bun service commands. Additionally, version 2026.10.3 saw significant updates across 90 commits, though details are provided in the linked release notes and changelog. Among the merged pull requests, fixes included improvements to UI responsiveness during session composition, along with a performance enhancement for SQLite database operations. However, several notable new issues were reported, including a bug that causes Windows 2026.10.2 to take excessively long to become ready and an issue with a retry setup on macOS that leaves the Gateway update incomplete.

#### 🚀 New Releases
- [v2026.10.5-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.3) openclaw 2026.10.5-beta.3
- [v2026.10.3](https://github.com/openclaw/openclaw/releases/tag/v2026.10.3) openclaw 2026.10.3

#### ✅ Merged PRs
- [#171515](https://github.com/openclaw/openclaw/pull/171515) fix(ui): Pages pin sits outside the row highlight and pinned pages show no filled pin
- [#171518](https://github.com/openclaw/openclaw/pull/171518) fix(database): engine-aware admission transaction scope for publication anchors
- [#171431](https://github.com/openclaw/openclaw/pull/171431) fix(agents): finish async reasoning responses after prefix persistence
- [#171511](https://github.com/openclaw/openclaw/pull/171511) fix: keep New Session composer responsive while typing
- [#171449](https://github.com/openclaw/openclaw/pull/171449) perf(sessions): avoid repeated transcript backfills and cron scans
- [#171525](https://github.com/openclaw/openclaw/pull/171525) chore(ui): refresh control ui locales
- [#171384](https://github.com/openclaw/openclaw/pull/171384) fix(x): recover allowed mentions when authorization changes
- [#171504](https://github.com/openclaw/openclaw/pull/171504) fix(ci): restore release validation after worker heap backport
- [#171117](https://github.com/openclaw/openclaw/pull/171117) fix(desktop): stage source core and Codex in non-release Tauri builds
- [#171405](https://github.com/openclaw/openclaw/pull/171405) perf(sqlite): skip absent TEMP transcript trigger drops
- [#171443](https://github.com/openclaw/openclaw/pull/171443) feat(sdk): complete awaited SQLite compatibility migration paths
- [#171516](https://github.com/openclaw/openclaw/pull/171516) chore(database): classify 62 verified session worker and maintenance sites
- [#171509](https://github.com/openclaw/openclaw/pull/171509) fix(gateway): keep local access when tailnet denies Serve
- [#171430](https://github.com/openclaw/openclaw/pull/171430) fix: crowded mobile chat headers truncate session titles
- [#171479](https://github.com/openclaw/openclaw/pull/171479) fix(sessions): keep async metadata database opens off main thread
- [#171466](https://github.com/openclaw/openclaw/pull/171466) refactor(sessions): engine-owned transcript payload compression for PostgreSQL
- [#128282](https://github.com/openclaw/openclaw/pull/128282) fix(ai): clamp OpenAI Responses max_output_tokens to model capacity
- [#171336](https://github.com/openclaw/openclaw/pull/171336) perf(usage): bound session reports and retain visible results
- [#171463](https://github.com/openclaw/openclaw/pull/171463) refactor(ui): use native menus in the sidebar
- [#171456](https://github.com/openclaw/openclaw/pull/171456) fix(sqlite): avoid extra reads when idle workers retire
- [#171465](https://github.com/openclaw/openclaw/pull/171465) perf(process): attribute previously unscoped git launches
- [#171490](https://github.com/openclaw/openclaw/pull/171490) fix: keep Gateway startup alive with V8 contradiction exit mode
- [#171441](https://github.com/openclaw/openclaw/pull/171441) refactor(ui): replace New Session Web Awesome popovers
- [#171475](https://github.com/openclaw/openclaw/pull/171475) fix: settle database publications on their store anchors
- [#171502](https://github.com/openclaw/openclaw/pull/171502) fix(codex): preserve explicit Ultrafast opt-ins on October backport
- [#164175](https://github.com/openclaw/openclaw/pull/164175) fix: Claude CLI forgets announced sub-agent results on the next turn
- [#171381](https://github.com/openclaw/openclaw/pull/171381) chore(ui): refresh control ui locales
- [#171398](https://github.com/openclaw/openclaw/pull/171398) fix(plugins): make bundled Control UI assets reproducible across checkouts
- [#171180](https://github.com/openclaw/openclaw/pull/171180) fix(telegram): downgrade rich block tags in media captions
- [#166281](https://github.com/openclaw/openclaw/pull/166281) refactor(commands): reuse environment snapshots in tests
- [#169580](https://github.com/openclaw/openclaw/pull/169580) fix(state): move Gateway state consumers through existing workers
- [#164877](https://github.com/openclaw/openclaw/pull/164877) fix(slack): honor configured silence for implicit thread follow-ups
- [#171478](https://github.com/openclaw/openclaw/pull/171478) perf(sessions): reduce redundant compaction entry reads
- [#171450](https://github.com/openclaw/openclaw/pull/171450) perf(sessions): reuse committed facts across warmed turn readers
- [#171481](https://github.com/openclaw/openclaw/pull/171481) fix(sessions): refresh stale participants after canonical repair
- [#171461](https://github.com/openclaw/openclaw/pull/171461) fix(ci): restore the database port max-lines guard
- [#171480](https://github.com/openclaw/openclaw/pull/171480) fix(usage): keep session reads ahead of bulk refreshes
- [#164684](https://github.com/openclaw/openclaw/pull/164684) fix(usage-bar): render million-token counts as m in num verb
- [#158087](https://github.com/openclaw/openclaw/pull/158087) fix: drain accepted QA suites and cancel refused plugin retries
- [#171437](https://github.com/openclaw/openclaw/pull/171437) fix: preserve successful silent replies on October backport
- [#171448](https://github.com/openclaw/openclaw/pull/171448) perf(sessions): reuse bounded context metadata from actor receipts
- [#171458](https://github.com/openclaw/openclaw/pull/171458) perf(clickclack): eliminate SQL from warmed bound-message guards
- [#170210](https://github.com/openclaw/openclaw/pull/170210) fix(telegram): inline-button taps are timestamped with the card's send time instead of the tap
- [#170190](https://github.com/openclaw/openclaw/pull/170190) fix: suppress truncated silent replies across channels
- [#171462](https://github.com/openclaw/openclaw/pull/171462) refactor(ui): remove retired sidebar Lit helpers
- [#171468](https://github.com/openclaw/openclaw/pull/171468) fix: mobile scrolling jumps over visualizations
- [#171455](https://github.com/openclaw/openclaw/pull/171455) perf(status): batch session runtime metadata reads
- [#170766](https://github.com/openclaw/openclaw/pull/170766) fix(macos): preserve compatible newer Gateways during app recovery
- [#156603](https://github.com/openclaw/openclaw/pull/156603) feat(diagnostics): export turn prompt and final answer on message and run spans
- [#171459](https://github.com/openclaw/openclaw/pull/171459) fix(gateway): agent creation fails while another agent retires
- [#171452](https://github.com/openclaw/openclaw/pull/171452) fix(e2e): accept successful upgrades with informational Doctor findings
- [#171439](https://github.com/openclaw/openclaw/pull/171439) fix(doctor): keep diagnostics and legacy migrations within their profile
- [#171442](https://github.com/openclaw/openclaw/pull/171442) fix(gateway): keep authorized drains moving through transient poll failures
- [#171445](https://github.com/openclaw/openclaw/pull/171445) fix(heartbeat): keep outcome storage off the gateway thread
- [#171371](https://github.com/openclaw/openclaw/pull/171371) fix(gateway): keep large-fleet admission and catalog reads responsive
- [#171434](https://github.com/openclaw/openclaw/pull/171434) refactor(infra): centralize SQL publication identity
- [#171053](https://github.com/openclaw/openclaw/pull/171053) fix(irc): report disconnected accounts while reconnecting
- [#171362](https://github.com/openclaw/openclaw/pull/171362) chore(i18n): refresh native locales
- [#168852](https://github.com/openclaw/openclaw/pull/168852) refactor: migrate sidebar rendering to Solid 2
- [#171420](https://github.com/openclaw/openclaw/pull/171420) fix(update): retain diagnostics and stop shutdown reads
- [#170413](https://github.com/openclaw/openclaw/pull/170413) fix(update): success summary repeats settled plugin data/settings upgrades as pending
- [#155019](https://github.com/openclaw/openclaw/pull/155019) fix(agents): omit settled failed deliveries from parent context
- [#171396](https://github.com/openclaw/openclaw/pull/171396) perf(channels): avoid duplicate final-delivery custody writes
- [#171432](https://github.com/openclaw/openclaw/pull/171432) refactor(database): remove obsolete cutover plumbing
- [#171365](https://github.com/openclaw/openclaw/pull/171365) fix(channels): ingress claim refresh failures leave no diagnostic
- [#171436](https://github.com/openclaw/openclaw/pull/171436) chore: classify verified session worker database operations
- [#171423](https://github.com/openclaw/openclaw/pull/171423) perf(gateway): reuse prepared transcript event ancestors
- [#171419](https://github.com/openclaw/openclaw/pull/171419) fix(sessions): report committed publication failures
- [#171364](https://github.com/openclaw/openclaw/pull/171364) perf(sessions): retain native lineage and isolate cold readers
- [#170351](https://github.com/openclaw/openclaw/pull/170351) fix(update): agent databases falsely flagged as changed during snapshot capture
- [#169757](https://github.com/openclaw/openclaw/pull/169757) perf(sessions): move target lookups and callers to workers
- [#171404](https://github.com/openclaw/openclaw/pull/171404) refactor(sessions): route goal changes through the writer
- [#171407](https://github.com/openclaw/openclaw/pull/171407) refactor(sessions): use writer receipts for entry cache validity
- [#171342](https://github.com/openclaw/openclaw/pull/171342) perf(sqlite): autocommit warm participant and audit effects
- [#166993](https://github.com/openclaw/openclaw/pull/166993) fix(macos): allow gateway connections after unrelated local schema upgrades
- [#170754](https://github.com/openclaw/openclaw/pull/170754) fix: keep updates moving when optional cron inspection or snapshot cleanup fails
- [#171433](https://github.com/openclaw/openclaw/pull/171433) fix(usage): isolate reports from concurrent cache writes
- [#171418](https://github.com/openclaw/openclaw/pull/171418) perf(gateway): retain session list selection across runtime updates
- [#171429](https://github.com/openclaw/openclaw/pull/171429) chore(catalog): update recommended models (2026-10-13)
- [#171368](https://github.com/openclaw/openclaw/pull/171368) feat: add offline workboard database port command
- [#171386](https://github.com/openclaw/openclaw/pull/171386) perf(gateway): reduce redundant SQL in read RPCs
- [#171347](https://github.com/openclaw/openclaw/pull/171347) refactor(ui): use native menu for Usage exports
- [#171387](https://github.com/openclaw/openclaw/pull/171387) improve: reduce SQLite work in memory and Workboard tool calls
- [#171399](https://github.com/openclaw/openclaw/pull/171399) perf(gateway): settle session admissions after external drain
- [#171415](https://github.com/openclaw/openclaw/pull/171415) fix(runtime): close async cleanup and refresh gaps
- [#157766](https://github.com/openclaw/openclaw/pull/157766) fix(agents): retire warm CLI sessions before manual compaction
- [#171372](https://github.com/openclaw/openclaw/pull/171372) fix: isolate retained and incompatible secondary agent databases
- [#171353](https://github.com/openclaw/openclaw/pull/171353) perf(sessions): reuse prepared entry authority for source checks
- [#170785](https://github.com/openclaw/openclaw/pull/170785) refactor(ui): use native menu for model setup providers
- [#171428](https://github.com/openclaw/openclaw/pull/171428) fix(release): stable closeout fails after a non-Linux companion asset is withdrawn
- [#171400](https://github.com/openclaw/openclaw/pull/171400) perf(sessions): reuse resident facts for message rewrites
- [#171421](https://github.com/openclaw/openclaw/pull/171421) chore(sqlite): integrate remaining worker ownership evidence
- [#171390](https://github.com/openclaw/openclaw/pull/171390) fix(plugins): wait after refused lifecycle contention
- [#170487](https://github.com/openclaw/openclaw/pull/170487) feat: run Meta models through the Muse Code CLI agent runtime
- [#171341](https://github.com/openclaw/openclaw/pull/171341) perf(sessions): retain entry authority from worker publications
- [#171413](https://github.com/openclaw/openclaw/pull/171413) fix(ui): keep mobile session titles and layout menus compact
- [#171340](https://github.com/openclaw/openclaw/pull/171340) perf: publish session collaboration without host SQLite
- [#171323](https://github.com/openclaw/openclaw/pull/171323) improve(gateway): reduce idle database work for larger installations
- [#170768](https://github.com/openclaw/openclaw/pull/170768) fix(doctor): allow offline state repair for app-owned Gateways
- [#171283](https://github.com/openclaw/openclaw/pull/171283) refactor(ui): use owned modal lifecycle events
- [#170740](https://github.com/openclaw/openclaw/pull/170740) fix(macos): accept verified LaunchAgent bootstrap recovery during repair
- [#171375](https://github.com/openclaw/openclaw/pull/171375) improve(sessions): avoid repeated filesystem checks during turns
- [#152086](https://github.com/openclaw/openclaw/pull/152086) fix(feishu): fall back to a static reply when CardKit rejects the streaming final text
- [#171378](https://github.com/openclaw/openclaw/pull/171378) perf: batch usage refreshes after idle periods
- [#171354](https://github.com/openclaw/openclaw/pull/171354) perf(sessions): retire surplus idle transcript workers
- [#171393](https://github.com/openclaw/openclaw/pull/171393) docs: align cache and usage guidance with current owners
- [#171288](https://github.com/openclaw/openclaw/pull/171288) refactor(sessions): retire unused transcript transaction wrapper
- [#171330](https://github.com/openclaw/openclaw/pull/171330) fix(plugins): start enabled standalone plugin files with the Gateway
- [#171379](https://github.com/openclaw/openclaw/pull/171379) perf: reduce path resolution during plugin config validation
- [#171318](https://github.com/openclaw/openclaw/pull/171318) perf(gateway): coalesce idle maintenance wakeups
- [#171374](https://github.com/openclaw/openclaw/pull/171374) fix(update): defer optional diagnostics after candidate adoption
- [#169849](https://github.com/openclaw/openclaw/pull/169849) test(qa): join worker wire fixtures and refresh settlement notices
- [#171337](https://github.com/openclaw/openclaw/pull/171337) perf(sessions): reuse complete owner facts for warm reads
- [#171299](https://github.com/openclaw/openclaw/pull/171299) perf(sqlite): reuse scoped read workers across requests
- [#171322](https://github.com/openclaw/openclaw/pull/171322) perf(memory): move admission off the Gateway thread and reuse clean receipts
- [#171358](https://github.com/openclaw/openclaw/pull/171358) fix(gateway): avoid main-thread compile cache flush stalls
- [#171320](https://github.com/openclaw/openclaw/pull/171320) perf(gateway): park idle database maintenance behind owner receipts
- [#171346](https://github.com/openclaw/openclaw/pull/171346) refactor(ui): move install progress to native popovers
- [#170929](https://github.com/openclaw/openclaw/pull/170929) feat(gateway): ready workers for empty-workspace cloud sessions
- [#171215](https://github.com/openclaw/openclaw/pull/171215) fix(ui): scroll the Browser panel element under the wheel pointer
- [#171350](https://github.com/openclaw/openclaw/pull/171350) fix(database): preserve agent PostgreSQL schema contracts
- [#171349](https://github.com/openclaw/openclaw/pull/171349) refactor(ui): replace chat card and sidebar Web Awesome menus
- [#171095](https://github.com/openclaw/openclaw/pull/171095) chore(release): close out 2026.10.3 on main
- [#150791](https://github.com/openclaw/openclaw/pull/150791) fix(logs): keep initial lines when following a new log file
- [#171244](https://github.com/openclaw/openclaw/pull/171244) fix: public-session chat reloads bounce after deployment
- [#171356](https://github.com/openclaw/openclaw/pull/171356) perf(plugins): reuse inventory ownership preparation
- [#171345](https://github.com/openclaw/openclaw/pull/171345) perf: reduce fresh subagent admission database work
- [#171334](https://github.com/openclaw/openclaw/pull/171334) refactor(tests): share publication durability activation setup
- [#171339](https://github.com/openclaw/openclaw/pull/171339) refactor(sqlite): guard deprecated state and binding members
- [#171255](https://github.com/openclaw/openclaw/pull/171255) feat: choose a custom time to snooze sessions
- [#171319](https://github.com/openclaw/openclaw/pull/171319) perf: reduce plugin startup imports and repeated path resolution
- [#170727](https://github.com/openclaw/openclaw/pull/170727) refactor(ui): finish Solid new-session consumers
- [#171293](https://github.com/openclaw/openclaw/pull/171293) fix: preserve Codex trajectory events during cleanup
- [#171297](https://github.com/openclaw/openclaw/pull/171297) perf(sqlite): reuse admitted worker paths during database operations
- [#171307](https://github.com/openclaw/openclaw/pull/171307) fix(plugins): allow admitted hooks to share run context
- [#171326](https://github.com/openclaw/openclaw/pull/171326) fix(sessions): prevent bulk snapshot reads during session ID lookup
- [#171343](https://github.com/openclaw/openclaw/pull/171343) refactor(ui): use native menu for session group environments
- [#171309](https://github.com/openclaw/openclaw/pull/171309) fix: agent and config mutations time out during reload
- [#171357](https://github.com/openclaw/openclaw/pull/171357) chore(release): update appcast for 2026.10.3
- [#170565](https://github.com/openclaw/openclaw/pull/170565) refactor(ui): migrate Sessions filters to the native popover
- [#171308](https://github.com/openclaw/openclaw/pull/171308) fix(gateway): avoid stop-time lease deadlock and profile readiness wait
- [#171325](https://github.com/openclaw/openclaw/pull/171325) perf(github): coalesce publication target discovery
- [#171303](https://github.com/openclaw/openclaw/pull/171303) fix(gateway): keep sockets open after handler errors
- [#171327](https://github.com/openclaw/openclaw/pull/171327) fix(sessions): keep visible failures out of later model requests
- [#171344](https://github.com/openclaw/openclaw/pull/171344) chore(database): integrate merged session ownership evidence
- [#171332](https://github.com/openclaw/openclaw/pull/171332) perf(board): reduce repeated HTML widget shell work
- [#171338](https://github.com/openclaw/openclaw/pull/171338) test(sqlite): cover worker exit admission retention
- [#171216](https://github.com/openclaw/openclaw/pull/171216) fix(telegram): keep bare URLs tappable in rich messages when entity detection is skipped
- [#171222](https://github.com/openclaw/openclaw/pull/171222) fix(feishu): keep nested code fences intact in incoming posts
- [#171285](https://github.com/openclaw/openclaw/pull/171285) perf(workers): narrow skill and model catalog import graphs
- [#171333](https://github.com/openclaw/openclaw/pull/171333) chore(ui): refresh control ui locales
- [#171321](https://github.com/openclaw/openclaw/pull/171321) fix(auth): release readers admitted before agent initialization
- [#167459](https://github.com/openclaw/openclaw/pull/167459) fix: stale update receipts block valid updates
- [#171328](https://github.com/openclaw/openclaw/pull/171328) perf(chat): skip unmatched history activity scans
- [#171324](https://github.com/openclaw/openclaw/pull/171324) docs: publish release notes for v2026.10.3
- [#171269](https://github.com/openclaw/openclaw/pull/171269) fix(ui): preserve menu focus contracts and pinned popovers
- [#137112](https://github.com/openclaw/openclaw/pull/137112) fix(telegram): dice rolls no longer vanish before reaching the agent
- [#171292](https://github.com/openclaw/openclaw/pull/171292) fix: resume interrupted R2 backup verification and restore
- [#171277](https://github.com/openclaw/openclaw/pull/171277) perf(sessions): reuse actor facts for entry patches
- [#171316](https://github.com/openclaw/openclaw/pull/171316) test(gateway): await final catalog publication in performance samples
- [#171300](https://github.com/openclaw/openclaw/pull/171300) fix(sessions): keep lists available during native reattachment

#### 🐛 New Issues
- [#170724](https://github.com/openclaw/openclaw/issues/170724) [Bug]: macOS 2026.10.2 Retry setup leaves Gateway update incomplete `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬7
- [#170956](https://github.com/openclaw/openclaw/issues/170956) Windows: slow startup, unclean plugin shutdown, and schtasks permission error make restarts/updates unreliable `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬5
- [#171096](https://github.com/openclaw/openclaw/issues/171096) [Bug]: Linux/npm update 2026.10.2 → 2026.10.3 rolls back with post-core-update-failed on slow-disk NAS (SQLite lock contention exhausts validation/inspection budgets) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬4
- [#170774](https://github.com/openclaw/openclaw/issues/170774) Update failure: activating (2026.10.1) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬4
- [#170866](https://github.com/openclaw/openclaw/issues/170866) [Bug]: Telegram requester continuation has no final reply after model-runtime replacement refusal `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#170522](https://github.com/openclaw/openclaw/issues/170522) [Bug]: Malformed tool call is not continued when an earlier tool in the same turn failed `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#170654](https://github.com/openclaw/openclaw/issues/170654) [Bug]: Windows 2026.10.2 linked Codex install fails at plugins.lifecycle.lease `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬4
- [#171385](https://github.com/openclaw/openclaw/issues/171385) [Bug]: [Bug] GatewayLockNamespaceError 无法在Termux Proot Ubuntu容器运行新版，PID命名空间校验不兼容 `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#170803](https://github.com/openclaw/openclaw/issues/170803) CI flakes: stalled-recovery descendant PID race and installer-smoke BuildKit DNS 💬3
- [#171201](https://github.com/openclaw/openclaw/issues/171201) [Feature]: Tell plugins who resolved an approval (resolver identity on onResolution) `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬3
- [#171268](https://github.com/openclaw/openclaw/issues/171268) Update failure: package-swap (2026.9.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#171227](https://github.com/openclaw/openclaw/issues/171227) [Bug]:Talk realtime consult: second hand-off in a session fails with Anthropic 400 (role 'system' placement), likely from in-history system updates (#163461) `bug` `no-stale` `regression` `P1` 💬3
- [#171191](https://github.com/openclaw/openclaw/issues/171191) [Bug]: Non-interactive `openclaw update` auto-launches an autonomous AI repair agent with no opt-out (consent flow only exists in interactive mode) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬3
- [#170928](https://github.com/openclaw/openclaw/issues/170928) [Bug]: Windows 2026.10.2 gateway takes 7–9 minutes to become ready and remains intermittently unresponsive after readiness `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#170644](https://github.com/openclaw/openclaw/issues/170644) Gateway: hot reload during startup still escalates to self-restart ("could not schedule recovery for cron monitor") on 2026.10.2 — #135433 reproduces `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:crash-loop` 💬3
- [#170597](https://github.com/openclaw/openclaw/issues/170597) [Bug]: a forced Gateway stop leaves a dead-PID state-owner record; the restarted Gateway cannot verify ownership ("could not be verified; retry after maintenance finishes") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#170588](https://github.com/openclaw/openclaw/issues/170588) Update failure: package-swap (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#171406](https://github.com/openclaw/openclaw/issues/171406) [Bug]: Android/Termux: plugin install fails with "temp workspace directory has an untrusted owner" (fs-safe treats process.platform=android as non-Linux) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#171424](https://github.com/openclaw/openclaw/issues/171424) session-observer and isolated utility completions starve on adaptive-thinking models when maxTokens is not expanded `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#171394](https://github.com/openclaw/openclaw/issues/171394) Update failure: update (2026.10.2) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#171351](https://github.com/openclaw/openclaw/issues/171351) After #170612: Gateway main thread still saturated on an 810-agent default-layout fleet (per-call stat/realpath in session-store admission, full-config hash per model-catalog read) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#171409](https://github.com/openclaw/openclaw/issues/171409) [Bug]: update progress history stops because the state database is in offline maintenance `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#171139](https://github.com/openclaw/openclaw/issues/171139) [Bug]: Feishu rich-text ("post") messages drop files in the top-level files[] array — image/video attachments work, local-file uploads never download 💬2
- [#171140](https://github.com/openclaw/openclaw/issues/171140) [Bug]: Interrupted Codex parent with native subagents blocks replies and completion with another-runner/claimed-work errors `P1` `clawsweeper:needs-live-repro` `impact:session-state` `impact:message-loss` 💬2
- [#171296](https://github.com/openclaw/openclaw/issues/171296) [Android] Health screen: detailed status card has near-zero horizontal padding, inconsistent with summary card `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#171271](https://github.com/openclaw/openclaw/issues/171271) Update failure: package-swap (2026.9.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#171274](https://github.com/openclaw/openclaw/issues/171274) [Bug]: doctor --lint skill-workshop-tool-policy fails for the documented reader (prompt-injection) agent; no per-agent Workshop opt-out `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#171273](https://github.com/openclaw/openclaw/issues/171273) [Feature]: Webhook ingress for binary/multipart file uploads (e.g. iOS Shortcuts photos) into an agent session `P3` `clawsweeper:bulk-filed` 💬2
- [#171169](https://github.com/openclaw/openclaw/issues/171169) [Bug]: Codex Doctor `codex/managed-app-server` intermittently exits 141 with no JSON (empty stdin write races the short-lived `codex --version` child) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#171235](https://github.com/openclaw/openclaw/issues/171235) [Bug]: WhatsApp watchdog restarts a healthy socket every 120 min when no messages arrive (app-silent) `bug` `bug:behavior` `P2` `impact:other` 💬2
- [#171187](https://github.com/openclaw/openclaw/issues/171187) [Bug]: Config clobber snapshot returns a bare null on lock contention, indistinguishable from the no-forensics path `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#171124](https://github.com/openclaw/openclaw/issues/171124) [regression 2026.10.1] State-owner heartbeat watchdog treats host-level VM freeze as ownership loss and self-restarts the Gateway in a loop (no config to tune the 60s threshold) `P1` `impact:crash-loop` 💬2
- [#171126](https://github.com/openclaw/openclaw/issues/171126) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#171122](https://github.com/openclaw/openclaw/issues/171122) [Bug]: update-runtime retention path still aborts process census on PID 1 ("Could not classify PID 1: working directory is unavailable") on 2026.10.3 stable `P2` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#171098](https://github.com/openclaw/openclaw/issues/171098) [Bug]: Non-previewable chat attachments (e.g. .zip) have no visible download action; side panel fallback hides it too `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#171035](https://github.com/openclaw/openclaw/issues/171035) [Bug]: GitHub profile cleanup aborts the whole sweep on a single non-ENOENT directory read error `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#171061](https://github.com/openclaw/openclaw/issues/171061) [Feature]: Let plugin approvals from a chat channel reach another approval client when that channel's own forwarding is off `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#170856](https://github.com/openclaw/openclaw/issues/170856) [Bug]: Headless browser ignores all clicks and key presses while a site waits for a passkey `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` `P0` 💬2
- [#170878](https://github.com/openclaw/openclaw/issues/170878) Update failure: retired-state-format (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#170948](https://github.com/openclaw/openclaw/issues/170948) Update failure: gateway-recovery-verification (2026.9.8) `P2` `clawsweeper:needs-info` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬2
- [#171005](https://github.com/openclaw/openclaw/issues/171005) Update failure: reconcile:abandoned (2026.9.9) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#171076](https://github.com/openclaw/openclaw/issues/171076) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#171004](https://github.com/openclaw/openclaw/issues/171004) [Bug]: `openclaw update` is structurally guaranteed to fail on cross-schema updates (2026.9.4 → 2026.10.2): updater reopens the ledger with old code, its own guard refuses, 650s wasted per attempt — manual path is the only way (npm global, Windows) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#171022](https://github.com/openclaw/openclaw/issues/171022) doctor misclassifies resolved `${ENV}` `botToken` shorthand as plaintext `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#171036](https://github.com/openclaw/openclaw/issues/171036) [Bug]: Update maintenance drain silently swallows a failed gateway.suspend.resume `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#171120](https://github.com/openclaw/openclaw/issues/171120) [Feature]: support SubQ Snap decision models 💬2
- [#170985](https://github.com/openclaw/openclaw/issues/170985) Workboard automation nudge runs inherit the ended worker's plugin-runtime scope: script payload fails 'Plugin runtime changed' `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#171040](https://github.com/openclaw/openclaw/issues/171040) [Bug]: prepareBinaryAvailability re-reads PATH/PATHEXT/cwd for every candidate path, costing seconds on Windows `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#171018](https://github.com/openclaw/openclaw/issues/171018) [Bug]: 2026.10.1 - deferred agent-DB preparation superseded mid-startup; sessions stay UNAVAILABLE until the process exits `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#170666](https://github.com/openclaw/openclaw/issues/170666) [Bug]: macOS update keeps verifying the previous Gateway past the explicit --timeout budget after a live-start-crashing candidate `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#170939](https://github.com/openclaw/openclaw/issues/170939) Update 9.2→10.2 fails at doctor rehearsal ('copied data has unsafe ownership or links') and leaves state DB migrated after package rollback `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#170893](https://github.com/openclaw/openclaw/issues/170893) Workboard: dispatchWithOptions rejects maxStarts 0 at the Gateway handler, so the data-only sweep is unreachable over RPC/CLI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#170715](https://github.com/openclaw/openclaw/issues/170715) [Bug]: openclaw doctor fails when the context-engine plugin reads runtime config `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬2
- [#170762](https://github.com/openclaw/openclaw/issues/170762) [Bug]: Superseded startup model-runtime publication leaves gatewayLifecycleActive false; every agent run fails "published reply runtime missing" until restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:message-loss` 💬2
- [#170693](https://github.com/openclaw/openclaw/issues/170693) [Bug] 2026.9.6: permanently deferred session-migration files are re-scanned on every startup; enough of them exceed the migration lease and the gateway fails to start (78/CONFIG) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#170700](https://github.com/openclaw/openclaw/issues/170700) [Bug]: Windows git-source update fails in preflight-runtime-stage - candidate copy recursively expands extensions/*/node_modules/openclaw workspace symlink until EINVAL/path-length limits `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#170773](https://github.com/openclaw/openclaw/issues/170773) [Bug]: 2026.10.2 doctor --fix --non-interactive never finishes after upgrade from 2026.9.9 (endless sqlite-source-revision content-version respawn) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#170870](https://github.com/openclaw/openclaw/issues/170870) [Bug]: chat.history drops a cron wake's tool calls when a message is queued behind it (claude-cli) `P2` `impact:session-state` 💬2
- [#170798](https://github.com/openclaw/openclaw/issues/170798) Control UI repeats provider failures instead of showing retry progress 💬2
- [#170525](https://github.com/openclaw/openclaw/issues/170525) [Bug]: macOS lid-close sleep expires state-owner heartbeat and forces Gateway restart on wake (2026.10.2) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#170822](https://github.com/openclaw/openclaw/issues/170822) Docs feedback: /web/control-ui 💬2
- [#170682](https://github.com/openclaw/openclaw/issues/170682) Update failure: package-swap (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#170545](https://github.com/openclaw/openclaw/issues/170545) Update failure: update-executor-settlement (2026.9.9) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#171535](https://github.com/openclaw/openclaw/issues/171535) `openclaw agent` exits 1 "outcome unknown" when a live role change drops its connection, while the run keeps going `P2` `impact:ux-friction` 💬1
- [#171401](https://github.com/openclaw/openclaw/issues/171401) [Bug]: Async tool prefix persistence freezes active Responses reasoning blocks before terminal backfill `bug` 💬1
- [#171527](https://github.com/openclaw/openclaw/issues/171527) [Bug]: Cron agent-turn timeouts are retried with the same budget; no floor, default policy or warning for too-short timeoutSeconds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#171523](https://github.com/openclaw/openclaw/issues/171523) Update failure: updater-runtime-retention (2026.9.8) `P2` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-friction` 💬1
- [#171522](https://github.com/openclaw/openclaw/issues/171522) Update failure: package-swap (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#171513](https://github.com/openclaw/openclaw/issues/171513) [Bug]: Gateway lock has no holder-health check: frozen-but-alive owner (S0 standby mid-startup) blocks all starts until manual lock deletion — pid-liveness alone cannot fix this (#160061 escalation) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬1
- [#171512](https://github.com/openclaw/openclaw/issues/171512) Silent audio is reported as a failed transcription ("response missing text") instead of an empty transcript `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171505](https://github.com/openclaw/openclaw/issues/171505) [Bug]: Browser Talk on Gemini 3.8 Live drops spoken user turns from chat history `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171499](https://github.com/openclaw/openclaw/issues/171499) [Bug]: iOS push-to-talk drops the last words when released right after speaking `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171486](https://github.com/openclaw/openclaw/issues/171486) workboard: a card left in "review" blocks all further dispatch for the same owner; no first-class acceptance path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:not-repro-on-main` 💬1
- [#171487](https://github.com/openclaw/openclaw/issues/171487) workboard: let a card worker request a human decision without blocking the card for 24h `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#171485](https://github.com/openclaw/openclaw/issues/171485) [Bug]: 2026.10.3: Doctor cleanup blocked by PID 1 cwd permissions, leaving nlink=2 journal and blocking update repair `bug` `regression` `P1` `maturity:stable` 💬1
- [#171469](https://github.com/openclaw/openclaw/issues/171469) mcp doctor flags env-backed ${VAR} headers as literal sensitive values (checks the substituted config) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#171467](https://github.com/openclaw/openclaw/issues/171467) [Bug]: memory session indexing holds an agent-database read snapshot while a whole transcript is decoded and parsed, so passive WAL checkpoints cannot complete `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171464](https://github.com/openclaw/openclaw/issues/171464) Windows: gateway startup blocks ~6-7s (3.3s idle + 1.3s synchronous PowerShell spawns) before first log line `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#171473](https://github.com/openclaw/openclaw/issues/171473) CI: extension-package-boundary job runtime near its budget on hosted release runners (check-additional-extension-package-boundary) 💬1
- [#171472](https://github.com/openclaw/openclaw/issues/171472) CI flake: provider-local-service shutdown 'retired lease releases late' process tree did not stop (checks-windows-node-test) 💬1
- [#171471](https://github.com/openclaw/openclaw/issues/171471) CI flake: chat-stop-owned-exec slash Stop case hits strict-mode duplicate reply paragraph (checks-ui-e2e-real-gateway) 💬1
- [#171470](https://github.com/openclaw/openclaw/issues/171470) CI flake: doctor-agent-database-order lost-journal case exits 1 on command cleanup (checks-node-agentic-commands-runtime) 💬1
- [#171451](https://github.com/openclaw/openclaw/issues/171451) Support safe automation ownership transfer when changing chat accounts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#171446](https://github.com/openclaw/openclaw/issues/171446) [Bug]: `openclaw update` loops in `validating — updater-runtime-retention`, ignores `--timeout`, and does heavy disk writes (2026.9.9 → 2026.10.3) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#171438](https://github.com/openclaw/openclaw/issues/171438) Telegram outbound sends intermittently fail on dual-stack hosts: --dns-result-order=ipv4first alone is insufficient (add --no-network-family-autoselection) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#171034](https://github.com/openclaw/openclaw/issues/171034) [Bug]: Ingress claim refresh failure is swallowed instead of reclaiming the lease `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#171435](https://github.com/openclaw/openclaw/issues/171435) Update failure: gateway-recovery-verification (2026.10.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#171348](https://github.com/openclaw/openclaw/issues/171348) [Bug]: Retained unconfigured agent DB schema v21 disrupts main session and Gateway startup (2026.10.3) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#171422](https://github.com/openclaw/openclaw/issues/171422) Config switch to allow posting sign-in codes and verification URLs in a group when the operator allows it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#171416](https://github.com/openclaw/openclaw/issues/171416) [Bug]: Telegram streaming re-sanitizes the whole reply on every model delta once a preview is visible `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171410](https://github.com/openclaw/openclaw/issues/171410) [Bug]: update runtime cleanup keeps directories when systemd --user has no working directory `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#171408](https://github.com/openclaw/openclaw/issues/171408) [Bug]: failed update names runtime-verification-failed when the snapshot step exits 1 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171411](https://github.com/openclaw/openclaw/issues/171411) [Bug]: state database update.run holds for seconds waiting on host admission `P2` `impact:other` 💬1
- [#171403](https://github.com/openclaw/openclaw/issues/171403) [Bug]: prepared package activation unrecoverable — live = recorded previous generation, but prepare step changed its metadata so repair refuses 'object changed' and retire refuses 'prepared' `P1` `maturity:stable` `impact:ux-friction` 💬1
- [#171395](https://github.com/openclaw/openclaw/issues/171395) [Bug]: ACP-only agent ids (acp.allowedAgents) stay degraded after a slow startup: "secrets preparation has not published its auth store", cron maintenance fails every minute `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171391](https://github.com/openclaw/openclaw/issues/171391) [Docs Bug]: No guide for deploying from Pethost's one-click template `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171106](https://github.com/openclaw/openclaw/issues/171106) [Bug]: Telegram richMessages: media captions show <ul>/<li>/<aside>/<hr/> as literal text `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171195](https://github.com/openclaw/openclaw/issues/171195) [Bug]: claude-cli: the turn after an isolated sub-agent completion resumes a session with no record of it (no carried exchange where history replay is allowed, no session-gap note where it is withheld) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171382](https://github.com/openclaw/openclaw/issues/171382) Update failure: requested (2026.9.9) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#171108](https://github.com/openclaw/openclaw/issues/171108) [Bug]: Browser panel mouse wheel scrolls the window, not the element under the pointer `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171373](https://github.com/openclaw/openclaw/issues/171373) OpenClaw gateway blocked by Session SQLite migration conflicts `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#171380](https://github.com/openclaw/openclaw/issues/171380) workboard_claim rejects a card in "review" with "card dependencies are not done" although all parents are done `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171376](https://github.com/openclaw/openclaw/issues/171376) [Bug]: Control UI 2026.10.1 → 2026.10.3 fails post-update settlement on offline maintenance, leaving macOS Gateway stopped `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬1
- [#171367](https://github.com/openclaw/openclaw/issues/171367) Telegram hot channel restart fails on a disabled account SecretRef and escalates to a full gateway restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:crash-loop` 💬1
- [#171366](https://github.com/openclaw/openclaw/issues/171366) Stuck-session recovery aborts a run whose Code Mode exec is legitimately waiting (awaitResults) on nested sessions_spawn children `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#171369](https://github.com/openclaw/openclaw/issues/171369) [Bug]: active-memory recall-intent patterns missing French (FR) — default `mode: "escalate"` never fires for French users `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171363](https://github.com/openclaw/openclaw/issues/171363) [Bug]: Replies that quote tool-call XML make the Gateway re-parse the whole reply on every streamed delta `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171360](https://github.com/openclaw/openclaw/issues/171360) [Bug]: Gateway rescans the whole run's streamed text on every assistant delta `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171197](https://github.com/openclaw/openclaw/issues/171197) Codex harness: codex-trajectory-flush cleanup fails with "agent harness host capability is no longer active" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171352](https://github.com/openclaw/openclaw/issues/171352) Update failure: reconcile:abandoned (2026.10.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#171111](https://github.com/openclaw/openclaw/issues/171111) [Bug]: Telegram rich messages: bare URLs are not clickable when linkPreview is false `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171335](https://github.com/openclaw/openclaw/issues/171335) x402engine.app priced per call, settled on the XRP Ledger 💬1
- [#171165](https://github.com/openclaw/openclaw/issues/171165) backup verify/restore --from r2: single GetObject has no ranged resume; large archives fail with generic 'R2 download failed' (ECONNRESET mid-stream) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#171329](https://github.com/openclaw/openclaw/issues/171329) [Feature]: Emoji reactions in Control UI webchat via message react action `P3` `impact:ux-friction` 💬1
- [#171311](https://github.com/openclaw/openclaw/issues/171311) [Bug]: `openclaw update --no-restart` still restarts the running Gateway (installation-replaced watcher), then the update records a failure `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#171312](https://github.com/openclaw/openclaw/issues/171312) Legacy transcript verification rejects semantically equivalent media metadata `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171310](https://github.com/openclaw/openclaw/issues/171310) Talk: a close the Control UI makes because of a failure cancels the agent run it started; it should detach `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171304](https://github.com/openclaw/openclaw/issues/171304) [Feature]: Plugin hooks: let `before_prompt_build` attach persistent context images (`prependImages`) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#171102](https://github.com/openclaw/openclaw/issues/171102) [Bug]: Telegram replyToMode "first" is ignored for message-tool sends: every send replies to the question `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171276](https://github.com/openclaw/openclaw/issues/171276) secrets: native refresh for rotating third-party OAuth credentials (not model providers / MCP) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#171275](https://github.com/openclaw/openclaw/issues/171275) memory-wiki: executable, live-verified claims (check probes + verdicts as claim status/evidence) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#171272](https://github.com/openclaw/openclaw/issues/171272) [Feature]: Tamper-evident export for the audit ledger / agent traces (same-uid rewrite protection) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#171270](https://github.com/openclaw/openclaw/issues/171270) [Feature]: Native audited root-operation path for hardened Linux gateways (NoNewPrivileges) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#171266](https://github.com/openclaw/openclaw/issues/171266) [Bug]: Pending deferred migration for retired webhooks plugin can never clear; doctor tells users to run a fix that can't resolve it `P2` `impact:ux-friction` 💬1
- [#171196](https://github.com/openclaw/openclaw/issues/171196) Codex harness: finalize hooks don't run on many subagent wake-up turns `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬1
- [#171182](https://github.com/openclaw/openclaw/issues/171182) [Bug]: Reply turn cleanup that fails to release the database claim leaks the admission lease and permanently fences successor admission `bug` `bug:behavior` `clawsweeper:bulk-filed` 💬1
- [#171185](https://github.com/openclaw/openclaw/issues/171185) [Bug]: Worker admission boundary charges a server-side environment outage to the client credential rate-limit budget `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#171173](https://github.com/openclaw/openclaw/issues/171173) chat.send: after a gateway restart, resending the same idempotency key with edited plain-text input is admitted instead of returning `chat-request-conflict` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171093](https://github.com/openclaw/openclaw/issues/171093) [Bug]: Telegram progress mode: final answer is not a reply to the question with replyToMode first/batched `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171133](https://github.com/openclaw/openclaw/issues/171133) macOS native app: SQLite step failure lacks diagnostic context; request safe offline diagnostic `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#171132](https://github.com/openclaw/openclaw/issues/171132) In-flight channel turn fails with SessionTranscriptWriterClaimReboundError when a main-session cron job fires for the same session (2026.9.8) `P2` `impact:session-state` `impact:message-loss` 💬1
- [#171041](https://github.com/openclaw/openclaw/issues/171041) [Bug]: Slack pinned messages appear as blank rows in CLI output `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171056](https://github.com/openclaw/openclaw/issues/171056) Cron Account ID suggestions include display names that are not account IDs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171113](https://github.com/openclaw/openclaw/issues/171113) Update failure: managed-service-update-handoff (2026.9.8) `P2` `impact:ux-friction` 💬1
- [#171112](https://github.com/openclaw/openclaw/issues/171112) [Feature] QQBot channel: render the shared message 'presentation' buttons/select as QQ inline keyboards (clicks route back to the session) `P3` `impact:ux-friction` 💬1
- [#171078](https://github.com/openclaw/openclaw/issues/171078) [Bug]: Control UI Workboard catalog downloads full workboard.cards.list (17.7 MB) on every connect/change; desktop chat unusable `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#171107](https://github.com/openclaw/openclaw/issues/171107) [Feature]: Live screencast for browsers routed through a paired node `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#171043](https://github.com/openclaw/openclaw/issues/171043) [Bug]: Reply-path attachments fail with file-not-found for remote-canonical SSH sandbox workspaces (WebChat) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171085](https://github.com/openclaw/openclaw/issues/171085) sessions.compact --max-lines returns ok but long-lived sessions become unresponsive on the next turn; full session reset restores responsiveness (2026.10.2, Raspberry Pi 4 arm64) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#171087](https://github.com/openclaw/openclaw/issues/171087) [Bug]: voice-call tool does not explain the persistent task brief for outbound errands `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171083](https://github.com/openclaw/openclaw/issues/171083) workboard_specify: add optional expectedUpdatedAt (caller-side compare-and-set) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#171033](https://github.com/openclaw/openclaw/issues/171033) [Bug]: Partial sandbox cleanup skips durable removal-intent persistence when container removal is unconfirmed `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:not-repro-on-main` 💬1
- [#171013](https://github.com/openclaw/openclaw/issues/171013) Discord realtime: talk_voice set loses plugin instance scope; subsequent consults fail `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171049](https://github.com/openclaw/openclaw/issues/171049) Update failure: candidate-state-snapshot (2026.9.8) `P2` `impact:ux-friction` 💬1
- [#171071](https://github.com/openclaw/openclaw/issues/171071) [Bug]: cron agentTurn on sessionTarget current runs as a heartbeat turn and its heartbeat_respond(scratch:"") wipes the agent's real heartbeat monitor scratch `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#171068](https://github.com/openclaw/openclaw/issues/171068) [Bug]: Zhipu (GLM) via openai-completions: session auto-title call rejected (thinking off -> 400 err 1210), failure silently swallowed, new sessions left unnamed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#170974](https://github.com/openclaw/openclaw/issues/170974) [Bug]: openclaw tui --deliver on a channel session hangs on spinner after reply is delivered; Esc says "no active run" and can't recover `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170982](https://github.com/openclaw/openclaw/issues/170982) [Bug]: /compact over Telegram is aborted at 300s and replayed because handleCompactCommand never acknowledges ingress adoption `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170868](https://github.com/openclaw/openclaw/issues/170868) [Bug]: claude-cli children outlive a killed Gateway and record a false user refusal `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#171055](https://github.com/openclaw/openclaw/issues/171055) Update failure: invalid-config (2026.9.9) `P0` `impact:ux-release-blocker` 💬1
- [#171050](https://github.com/openclaw/openclaw/issues/171050) Usage query suggestions omit matching values beyond the first six catalog entries `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171048](https://github.com/openclaw/openclaw/issues/171048) Workboard: claim-token redaction blocks worker self-release; promote lacks origin-status validation; heartbeat turn embeds stale hardcoded scratch `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171024](https://github.com/openclaw/openclaw/issues/171024) [Feature]: Activity ring on the Meetings nav item while a transcript capture is recording or processing `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#170997](https://github.com/openclaw/openclaw/issues/170997) [Feature] memory FTS: add a CJK 'bigram' tokenizer (trigram yields 0 matches for 2-character Chinese queries) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170994](https://github.com/openclaw/openclaw/issues/170994) [Bug]: Plugin approval request fails with "Approval requester authority changed" when an unrelated session changes during the wait `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#170827](https://github.com/openclaw/openclaw/issues/170827) ACP turn replies silently dropped when turn exceeds 300s channel ingress handler-timeout; trigger message re-dispatched afterwards `P1` `clawsweeper:source-repro` `impact:message-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#170986](https://github.com/openclaw/openclaw/issues/170986) [Bug] 2026.10.2: slow session/state operations, SQLite lock contention and closed read scopes under cgroup memory pressure `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#170869](https://github.com/openclaw/openclaw/issues/170869) [Bug]: claude-cli spawn bypasses the child OOM-score policy, so the OOM killer picks the Gateway `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170976](https://github.com/openclaw/openclaw/issues/170976) [Feature]: Android: add a New Chat action on Overview `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170848](https://github.com/openclaw/openclaw/issues/170848) MCP OAuth login fails when authorization server registers loopback redirect URIs without port (Dropbox) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#170847](https://github.com/openclaw/openclaw/issues/170847) [Bug]: Large zstd transcript archive exceeds Node string limit during migration `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#170921](https://github.com/openclaw/openclaw/issues/170921) Clarify VISION.md deployment and contribution direction 💬1
- [#170910](https://github.com/openclaw/openclaw/issues/170910) [Feature]: Let trusted hosts attach protected per-call metadata to MCP tools `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#170837](https://github.com/openclaw/openclaw/issues/170837) refactor(feishu): retire incomplete dispatcher test doubles 💬1
- [#170872](https://github.com/openclaw/openclaw/issues/170872) [Bug]: exec completions from an isolated cron run are relayed through the main session's heartbeat, even with the heartbeat off 💬1
- [#170871](https://github.com/openclaw/openclaw/issues/170871) [Bug]: liveModelSwitchPending never clears for claude-cli runtime sessions 💬1
- [#170873](https://github.com/openclaw/openclaw/issues/170873) [Feature]: claude-cli runtime has no path to protected secret-store entries (Codex has gateway_exec) 💬1
- [#170881](https://github.com/openclaw/openclaw/issues/170881) [Bug]: Agent-initiated plugin reload through CLI/RPC waits on its own turn `bug` 💬1
- [#170854](https://github.com/openclaw/openclaw/issues/170854) [Feature]: Opt-in answer and question previews for browser notifications `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#170833](https://github.com/openclaw/openclaw/issues/170833) ACP post-abort retry can complete with no outbound payload at all `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#170843](https://github.com/openclaw/openclaw/issues/170843) Channel route bindings and hub agent picker ignore runtime.type: "acp" on agents.entries — native runtime serves instead `P2` `impact:ux-friction` 💬1
- [#170839](https://github.com/openclaw/openclaw/issues/170839) Telegram group mention gate silently drops messages — no feedback to sender or actionable log line `P2` `impact:ux-friction` 💬1
- [#170834](https://github.com/openclaw/openclaw/issues/170834) /acp spawn --bind succeeds but every follow-up fails: "runtime owner was not published" unless agents.entries.<id> exists `P1` `impact:message-loss` 💬1
- [#170818](https://github.com/openclaw/openclaw/issues/170818) Anthropic Claude 5 replies are held until message_stop with no opt-out (undocumented for direct Anthropic) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170817](https://github.com/openclaw/openclaw/issues/170817) [Bug]: Aborted chat.send prompt is replayed as a live request on the next turn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170744](https://github.com/openclaw/openclaw/issues/170744) [Feature]: Keep New conversation prominent across sidebar modes `enhancement` 💬1
- [#170788](https://github.com/openclaw/openclaw/issues/170788) [bug] 2026.9.9: 'Session key does not contain an agent id' — outbound policy preservation fails for WhatsApp session keys; sessions.compact also blocked by queued work `P2` `impact:session-state` `impact:ux-friction` 💬1
- [#170765](https://github.com/openclaw/openclaw/issues/170765) [Feature]: Configurable length limit for plugin approval descriptions (512 chars) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#170739](https://github.com/openclaw/openclaw/issues/170739) [Bug]: Cron failure-alert cooldown can be bypassed when the wall clock moves backward `bug` `bug:behavior` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#170737](https://github.com/openclaw/openclaw/issues/170737) [Feature]: Add NetMind as a bundled provider plugin `P3` `impact:ux-friction` 💬1
- [#170726](https://github.com/openclaw/openclaw/issues/170726) [Bug]: Outbound reply to recipient silently dropped when a parallel sub-agent completion is processed in the same turn (asymmetric, WhatsApp) 💬1
- [#170720](https://github.com/openclaw/openclaw/issues/170720) [Bug]: Required delivery failure resets a pre-existing execution error streak `bug` `bug:behavior` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#170710](https://github.com/openclaw/openclaw/issues/170710) Update failure: plugin-target-unavailable (2026.9.4) `P2` `impact:ux-friction` 💬1
- [#170686](https://github.com/openclaw/openclaw/issues/170686) Decision assistance prefilter is always skipped (pending-action-context) when active-memory registers its tool-authority before_prompt_build hook `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170679](https://github.com/openclaw/openclaw/issues/170679) Native per-platform gate results (passed/failed/skipped) for node exec / cloud workers `P3` `clawsweeper:bulk-filed` 💬1
- [#170678](https://github.com/openclaw/openclaw/issues/170678) Worktree-backed sessions_spawn is lost (no child, no worktree, unconfirmed admission) on Gateway hard restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-info` `impact:session-state` 💬1
- [#170681](https://github.com/openclaw/openclaw/issues/170681) Feature: graceful agent-initiated Gateway restart/update for autonomous, self-managing agents (opt-in) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#170661](https://github.com/openclaw/openclaw/issues/170661) [Feature]: per-agent Active Memory overrides (mode, model, timeoutMs) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170670](https://github.com/openclaw/openclaw/issues/170670) Browser extension: opt-in / on-demand connection instead of always-on relay `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#170645](https://github.com/openclaw/openclaw/issues/170645) MCP loopback tools/call never runs agent tool result middleware (CLI-backed runtimes bypass it) `P2` `impact:other` `clawsweeper:bulk-filed` 💬1
- [#170503](https://github.com/openclaw/openclaw/issues/170503) [Bug]: Claude CLI auth login falsely reports unauthenticated when 3s probe times out (WSL2, 2026.10.2) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#170620](https://github.com/openclaw/openclaw/issues/170620) [Bug]: autoclaw-productivity email pattern uses regex lookaround, rejected by OpenAI API `bug` `regression` 💬1
- [#170528](https://github.com/openclaw/openclaw/issues/170528) [Bug]: sessions.list thinkingLevels ignore reasoning: false (differs from models.list) `bug` `no-stale` `regression` `P2` 💬1
- [#170576](https://github.com/openclaw/openclaw/issues/170576) before_tool_call: MCP-loopback tool calls from claude-cli runs carry no ctx.requester (embedded and native relay do) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#170845](https://github.com/openclaw/openclaw/issues/170845) Reduce repeated main-thread work in hot JavaScript helpers

#### 🔒 Closed Issues
- [#97616](https://github.com/openclaw/openclaw/issues/97616) [Bug]: OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation and runtime degradation
- [#154834](https://github.com/openclaw/openclaw/issues/154834) [Bug]: failed subagent delivery recurs in every turn's runtime context
- [#45508](https://github.com/openclaw/openclaw/issues/45508) [Feature]: Self-hosted STT/TTS provider support in webchat (Route webchat TTS through the gateway instead of browser Speech API)
- [#103198](https://github.com/openclaw/openclaw/issues/103198) [Bug]: WebChat image attachments not mapped to media store path — image tool receives "image_0" instead of real file path
- [#152839](https://github.com/openclaw/openclaw/issues/152839) [Feature]: [Feature]: Handle openat2 ENOSYS gracefully when acquiring the gateway state lock
- [#77467](https://github.com/openclaw/openclaw/issues/77467) [Bug] MiniMax Portal OAuth token cannot auto-refresh — refreshOAuth method not implemented
- [#170724](https://github.com/openclaw/openclaw/issues/170724) [Bug]: macOS 2026.10.2 Retry setup leaves Gateway update incomplete
- [#124731](https://github.com/openclaw/openclaw/issues/124731) claude-cli backend silently drops queue-mode steering: cli reply handle exposes no message injection
- [#98870](https://github.com/openclaw/openclaw/issues/98870) [Bug]: Teams thread context omits newer replies when a channel thread has more than 50 replies
- [#139443](https://github.com/openclaw/openclaw/issues/139443) [feishu] Streaming card dies during long tool phases: 200850 idle timeout followed by ~1000 blind 300309 retries
- [#113049](https://github.com/openclaw/openclaw/issues/113049) Allow `stt-tts` mode in browser Talk (`talk.client.create`) so configured speech/TTS providers and local models can be used
- [#167336](https://github.com/openclaw/openclaw/issues/167336) [Bug]: active-memory recall sub-sessions ("memory search agent" rows) remain visible in the session list with System and Automation sessions hidden
- [#170774](https://github.com/openclaw/openclaw/issues/170774) Update failure: activating (2026.10.1)
- [#170522](https://github.com/openclaw/openclaw/issues/170522) [Bug]: Malformed tool call is not continued when an earlier tool in the same turn failed
- [#169829](https://github.com/openclaw/openclaw/issues/169829) Gateway self-restarts when the system wall clock steps backwards (state-ownership heartbeat uses wall clock)
- [#101083](https://github.com/openclaw/openclaw/issues/101083) [Bug]: IRC channel reports healthy while dead-looping reconnects on a non-recoverable login error
- [#157483](https://github.com/openclaw/openclaw/issues/157483) [Bug]: Manual /compact on claude-cli is discarded when the next turn reuses the live claude process
- [#171227](https://github.com/openclaw/openclaw/issues/171227) [Bug]:Talk realtime consult: second hand-off in a session fails with Anthropic 400 (role 'system' placement), likely from in-history system updates (#163461)
- [#167623](https://github.com/openclaw/openclaw/issues/167623) [Bug]:
- [#169391](https://github.com/openclaw/openclaw/issues/169391) [Bug]: Managed Linux host desktop never starts when another X server holds the first display only through its abstract socket
- [#168664](https://github.com/openclaw/openclaw/issues/168664) [Bug]: Control UI sidebar timer of a spawned session restarts at the spawn run's duration on every refresh during follow-up turns
- [#124852](https://github.com/openclaw/openclaw/issues/124852) [Bug]: sessions_spawn(runtime: acp, mode: run) calls ensureSession twice — one-shot acpx opens two backend sessions per spawn, the first is orphaned
- [#150165](https://github.com/openclaw/openclaw/issues/150165) [Bug]: Feishu merge_forward expansion drops sender and timestamp for every sub-message
- [#169071](https://github.com/openclaw/openclaw/issues/169071) [Bug]: Gateway fails to start / doctor fails with "native file copy failed (code=EIO)" on ZFS (FICLONE/reflink) — no fallback to JS copy
- [#170644](https://github.com/openclaw/openclaw/issues/170644) Gateway: hot reload during startup still escalates to self-restart ("could not schedule recovery for cron monitor") on 2026.10.2 — #135433 reproduces
- [#105593](https://github.com/openclaw/openclaw/issues/105593) Include produced message id on the Gateway `final` run event
- [#119244](https://github.com/openclaw/openclaw/issues/119244) OpenAI streaming failure reports zero usage instead of unknown/partial
- [#170597](https://github.com/openclaw/openclaw/issues/170597) [Bug]: a forced Gateway stop leaves a dead-PID state-owner record; the restarted Gateway cannot verify ownership ("could not be verified; retry after maintenance finishes")
- [#158813](https://github.com/openclaw/openclaw/issues/158813) [Bug]: Session follow-ups all fail after an assistant message carries a managed audio artifact, until the message is dropped via compact
- [#158876](https://github.com/openclaw/openclaw/issues/158876) [Bug]: bundled openai video provider still advertises sora-2 after the OpenAI Videos API shut down
- [#169171](https://github.com/openclaw/openclaw/issues/169171) Update failure: gateway-recovery-verification (2026.10.1)
- [#169016](https://github.com/openclaw/openclaw/issues/169016) [Bug]: sessions_spawn intermittently refused "changed before expected work could start" for an unchanged fresh child (persist guard reads no row)
- [#170588](https://github.com/openclaw/openclaw/issues/170588) Update failure: package-swap (2026.9.9)
- [#171351](https://github.com/openclaw/openclaw/issues/171351) After #170612: Gateway main thread still saturated on an 810-agent default-layout fleet (per-call stat/realpath in session-store admission, full-config hash per model-catalog read)
- [#171139](https://github.com/openclaw/openclaw/issues/171139) [Bug]: Feishu rich-text ("post") messages drop files in the top-level files[] array — image/video attachments work, local-file uploads never download
- [#171271](https://github.com/openclaw/openclaw/issues/171271) Update failure: package-swap (2026.9.5)
- [#171273](https://github.com/openclaw/openclaw/issues/171273) [Feature]: Webhook ingress for binary/multipart file uploads (e.g. iOS Shortcuts photos) into an agent session
- [#169922](https://github.com/openclaw/openclaw/issues/169922) [Bug]: Sandboxed agents cannot access their own image_generate/video_generate/music_generate outputs (follow-up to #75683)
- [#171169](https://github.com/openclaw/openclaw/issues/171169) [Bug]: Codex Doctor `codex/managed-app-server` intermittently exits 141 with no JSON (empty stdin write races the short-lived `codex --version` child)
- [#171235](https://github.com/openclaw/openclaw/issues/171235) [Bug]: WhatsApp watchdog restarts a healthy socket every 120 min when no messages arrive (app-silent)
- [#171187](https://github.com/openclaw/openclaw/issues/171187) [Bug]: Config clobber snapshot returns a bare null on lock contention, indistinguishable from the no-forensics path
- [#158765](https://github.com/openclaw/openclaw/issues/158765) [Feature]: Add a low-memory Qwen3.8 27B profile for Desktop Local AI using PrismML Bonsai 2
- [#158761](https://github.com/openclaw/openclaw/issues/158761) [Feature]: Make Desktop Local AI hardware-aware with multiple managed runtime profiles
- [#171124](https://github.com/openclaw/openclaw/issues/171124) [regression 2026.10.1] State-owner heartbeat watchdog treats host-level VM freeze as ownership loss and self-restarts the Gateway in a loop (no config to tune the 60s threshold)
- [#137281](https://github.com/openclaw/openclaw/issues/137281) tts: a free-text `[[tts:...]]` reply is stripped to nothing and delivered as "No reply was generated"
- [#142548](https://github.com/openclaw/openclaw/issues/142548) [Bug]: Telegram voice and M4A audio uploads can show 0:00 duration
- [#171004](https://github.com/openclaw/openclaw/issues/171004) [Bug]: `openclaw update` is structurally guaranteed to fail on cross-schema updates (2026.9.4 → 2026.10.2): updater reopens the ledger with old code, its own guard refuses, 650s wasted per attempt — manual path is the only way (npm global, Windows)
- [#171022](https://github.com/openclaw/openclaw/issues/171022) doctor misclassifies resolved `${ENV}` `botToken` shorthand as plaintext
- [#171036](https://github.com/openclaw/openclaw/issues/171036) [Bug]: Update maintenance drain silently swallows a failed gateway.suspend.resume
- [#171040](https://github.com/openclaw/openclaw/issues/171040) [Bug]: prepareBinaryAvailability re-reads PATH/PATHEXT/cwd for every candidate path, costing seconds on Windows
- [#171018](https://github.com/openclaw/openclaw/issues/171018) [Bug]: 2026.10.1 - deferred agent-DB preparation superseded mid-startup; sessions stay UNAVAILABLE until the process exits
- [#170666](https://github.com/openclaw/openclaw/issues/170666) [Bug]: macOS update keeps verifying the previous Gateway past the explicit --timeout budget after a live-start-crashing candidate
- [#170939](https://github.com/openclaw/openclaw/issues/170939) Update 9.2→10.2 fails at doctor rehearsal ('copied data has unsafe ownership or links') and leaves state DB migrated after package rollback
- [#170715](https://github.com/openclaw/openclaw/issues/170715) [Bug]: openclaw doctor fails when the context-engine plugin reads runtime config
- [#170762](https://github.com/openclaw/openclaw/issues/170762) [Bug]: Superseded startup model-runtime publication leaves gatewayLifecycleActive false; every agent run fails "published reply runtime missing" until restart
- [#170693](https://github.com/openclaw/openclaw/issues/170693) [Bug] 2026.9.6: permanently deferred session-migration files are re-scanned on every startup; enough of them exceed the migration lease and the gateway fails to start (78/CONFIG)
- [#163778](https://github.com/openclaw/openclaw/issues/163778) [Bug]: Stored Responses reasoning ciphertext is truncated when it contains a dotted routing suffix
- [#170700](https://github.com/openclaw/openclaw/issues/170700) [Bug]: Windows git-source update fails in preflight-runtime-stage - candidate copy recursively expands extensions/*/node_modules/openclaw workspace symlink until EINVAL/path-length limits
- [#156524](https://github.com/openclaw/openclaw/issues/156524) exec host=node ignores background/yieldMs and cannot return a process session, but docs imply it can
- [#170773](https://github.com/openclaw/openclaw/issues/170773) [Bug]: 2026.10.2 doctor --fix --non-interactive never finishes after upgrade from 2026.9.9 (endless sqlite-source-revision content-version respawn)
- [#170870](https://github.com/openclaw/openclaw/issues/170870) [Bug]: chat.history drops a cron wake's tool calls when a message is queued behind it (claude-cli)
- [#170798](https://github.com/openclaw/openclaw/issues/170798) Control UI repeats provider failures instead of showing retry progress
- [#170525](https://github.com/openclaw/openclaw/issues/170525) [Bug]: macOS lid-close sleep expires state-owner heartbeat and forces Gateway restart on wake (2026.10.2)
- [#170822](https://github.com/openclaw/openclaw/issues/170822) Docs feedback: /web/control-ui
- [#168621](https://github.com/openclaw/openclaw/issues/168621) Gateway shutdown leaves agent-database leases when an earlier final close step fails
- [#170682](https://github.com/openclaw/openclaw/issues/170682) Update failure: package-swap (2026.9.9)
- [#170409](https://github.com/openclaw/openclaw/issues/170409) [Bug]: Plugin Control UI panels (Workboard) unavailable when assets are hardlinked: readPluginControlUiAssets ignores the hardlink policy
- [#170233](https://github.com/openclaw/openclaw/issues/170233) [Bug]: Code Mode exec tool description rewrite invalidates the whole prompt cache on every catalog change
- [#170443](https://github.com/openclaw/openclaw/issues/170443) [Bug]: macOS prepared package journal blocks update after device-ID drift
- [#170388](https://github.com/openclaw/openclaw/issues/170388) Provider failover: inferSignalStatus misses mid-message HTTP status (e.g. Gemini "...error (503): ...") → no failover on 5xx/429
- [#170366](https://github.com/openclaw/openclaw/issues/170366) Update failure: package-swap (2026.10.1)
- [#170431](https://github.com/openclaw/openclaw/issues/170431) Update failure: package-swap (2026.9.9)
- [#170459](https://github.com/openclaw/openclaw/issues/170459) [Bug] Deferred gateway restart blocked for ~1h because the busy gate counts idle/orphaned child processes as active
- [#171535](https://github.com/openclaw/openclaw/issues/171535) `openclaw agent` exits 1 "outcome unknown" when a live role change drops its connection, while the run keeps going
- [#171401](https://github.com/openclaw/openclaw/issues/171401) [Bug]: Async tool prefix persistence freezes active Responses reasoning blocks before terminal backfill
- [#127560](https://github.com/openclaw/openclaw/issues/127560) OpenAI Responses sends max_output_tokens above the selected model capacity
- [#171485](https://github.com/openclaw/openclaw/issues/171485) [Bug]: 2026.10.3: Doctor cleanup blocked by PID 1 cwd permissions, leaving nlink=2 journal and blocking update repair
- [#171034](https://github.com/openclaw/openclaw/issues/171034) [Bug]: Ingress claim refresh failure is swallowed instead of reclaiming the lease
- [#169881](https://github.com/openclaw/openclaw/issues/169881) Telegram inline-button taps are timestamped with the source message's date, not the tap time
- [#171348](https://github.com/openclaw/openclaw/issues/171348) [Bug]: Retained unconfigured agent DB schema v21 disrupts main session and Gateway startup (2026.10.3)
- [#171411](https://github.com/openclaw/openclaw/issues/171411) [Bug]: state database update.run holds for seconds waiting on host admission
- [#171403](https://github.com/openclaw/openclaw/issues/171403) [Bug]: prepared package activation unrecoverable — live = recorded previous generation, but prepare step changed its metadata so repair refuses 'object changed' and retire refuses 'prepared'
- [#171106](https://github.com/openclaw/openclaw/issues/171106) [Bug]: Telegram richMessages: media captions show <ul>/<li>/<aside>/<hr/> as literal text
- [#171195](https://github.com/openclaw/openclaw/issues/171195) [Bug]: claude-cli: the turn after an isolated sub-agent completion resumes a session with no record of it (no carried exchange where history replay is allowed, no session-gap note where it is withheld)
- [#171108](https://github.com/openclaw/openclaw/issues/171108) [Bug]: Browser panel mouse wheel scrolls the window, not the element under the pointer
- [#150843](https://github.com/openclaw/openclaw/issues/150843) [Bug]: logs --follow skips initial records when the log file path changes
- [#171197](https://github.com/openclaw/openclaw/issues/171197) Codex harness: codex-trajectory-flush cleanup fails with "agent harness host capability is no longer active"
- [#171111](https://github.com/openclaw/openclaw/issues/171111) [Bug]: Telegram rich messages: bare URLs are not clickable when linkPreview is false
- [#167441](https://github.com/openclaw/openclaw/issues/167441) Bug: saved update receipts can suppress Dev updates and verified outcomes
- [#171335](https://github.com/openclaw/openclaw/issues/171335) x402engine.app priced per call, settled on the XRP Ledger
- [#171165](https://github.com/openclaw/openclaw/issues/171165) backup verify/restore --from r2: single GetObject has no ranged resume; large archives fail with generic 'R2 download failed' (ECONNRESET mid-stream)
- [#171329](https://github.com/openclaw/openclaw/issues/171329) [Feature]: Emoji reactions in Control UI webchat via message react action
- [#171102](https://github.com/openclaw/openclaw/issues/171102) [Bug]: Telegram replyToMode "first" is ignored for message-tool sends: every send replies to the question
- [#171266](https://github.com/openclaw/openclaw/issues/171266) [Bug]: Pending deferred migration for retired webhooks plugin can never clear; doctor tells users to run a fix that can't resolve it
- [#127491](https://github.com/openclaw/openclaw/issues/127491) Synology Chat accounts share one process-global outbound rate-limit queue
- [#171182](https://github.com/openclaw/openclaw/issues/171182) [Bug]: Reply turn cleanup that fails to release the database claim leaks the admission lease and permanently fences successor admission
- [#169208](https://github.com/openclaw/openclaw/issues/169208) [Bug]: Hook-pack fallback silently discards the reason a package-kind probe failed
- [#171093](https://github.com/openclaw/openclaw/issues/171093) [Bug]: Telegram progress mode: final answer is not a reply to the question with replyToMode first/batched
- [#171132](https://github.com/openclaw/openclaw/issues/171132) In-flight channel turn fails with SessionTranscriptWriterClaimReboundError when a main-session cron job fires for the same session (2026.9.8)
- [#169862](https://github.com/openclaw/openclaw/issues/169862) [Bug]: `plugins enable` hides its failure reason ("The CLI command failed") unless OPENCLAW_DEBUG=1
- [#171041](https://github.com/openclaw/openclaw/issues/171041) [Bug]: Slack pinned messages appear as blank rows in CLI output
- [#171056](https://github.com/openclaw/openclaw/issues/171056) Cron Account ID suggestions include display names that are not account IDs
- [#171113](https://github.com/openclaw/openclaw/issues/171113) Update failure: managed-service-update-handoff (2026.9.8)
- [#171112](https://github.com/openclaw/openclaw/issues/171112) [Feature] QQBot channel: render the shared message 'presentation' buttons/select as QQ inline keyboards (clicks route back to the session)
- [#171043](https://github.com/openclaw/openclaw/issues/171043) [Bug]: Reply-path attachments fail with file-not-found for remote-canonical SSH sandbox workspaces (WebChat)
- [#171013](https://github.com/openclaw/openclaw/issues/171013) Discord realtime: talk_voice set loses plugin instance scope; subsequent consults fail
- [#169674](https://github.com/openclaw/openclaw/issues/169674) [Bug]: doctor --fix NOCOW rewrite makes pre-startup-migration .bak originals permanently non-retirable by update cleanup (artifact-metadata-changed)
- [#171049](https://github.com/openclaw/openclaw/issues/171049) Update failure: candidate-state-snapshot (2026.9.8)
- [#170974](https://github.com/openclaw/openclaw/issues/170974) [Bug]: openclaw tui --deliver on a channel session hangs on spinner after reply is delivered; Esc says "no active run" and can't recover
- [#169185](https://github.com/openclaw/openclaw/issues/169185) [Bug]: Chat-header Delete removes only adopted Claude wrapper; native transcripts remain (2026.10.1)
- [#170982](https://github.com/openclaw/openclaw/issues/170982) [Bug]: /compact over Telegram is aborted at 300s and replayed because handleCompactCommand never acknowledges ingress adoption
- [#169972](https://github.com/openclaw/openclaw/issues/169972) [Bug]: Managed Codex web_search loses typed timeout and budget at WebSearchProviderError.toResult
- [#169807](https://github.com/openclaw/openclaw/issues/169807) [Bug]: Dead-lettered session deliveries are dropped without being counted or logged
- [#170868](https://github.com/openclaw/openclaw/issues/170868) [Bug]: claude-cli children outlive a killed Gateway and record a false user refusal
- [#171055](https://github.com/openclaw/openclaw/issues/171055) Update failure: invalid-config (2026.9.9)
- [#160641](https://github.com/openclaw/openclaw/issues/160641) [Bug] `tool_result_persist` / `before_message_write` return an unvalidated `message` that replaces the host transcript entry
- [#169192](https://github.com/openclaw/openclaw/issues/169192) fs.listDir (macOS node) returns directories only — document the folder-picker contract where agents can see it (or add includeFiles)
- [#170827](https://github.com/openclaw/openclaw/issues/170827) ACP turn replies silently dropped when turn exceeds 300s channel ingress handler-timeout; trigger message re-dispatched afterwards
- [#170869](https://github.com/openclaw/openclaw/issues/170869) [Bug]: claude-cli spawn bypasses the child OOM-score policy, so the OOM killer picks the Gateway
- [#170848](https://github.com/openclaw/openclaw/issues/170848) MCP OAuth login fails when authorization server registers loopback redirect URIs without port (Dropbox)
- [#165104](https://github.com/openclaw/openclaw/issues/165104) [Bug]: Control UI /steer and /redirect discard attached files on successful send
- [#169804](https://github.com/openclaw/openclaw/issues/169804) claude-cli runs marked failed after the final reply is persisted (writer claim / unsettled writer / caller authority), mostly sessions_send targets from cron (2026.9.9)
- [#170847](https://github.com/openclaw/openclaw/issues/170847) [Bug]: Large zstd transcript archive exceeds Node string limit during migration
- [#170837](https://github.com/openclaw/openclaw/issues/170837) refactor(feishu): retire incomplete dispatcher test doubles
- [#170872](https://github.com/openclaw/openclaw/issues/170872) [Bug]: exec completions from an isolated cron run are relayed through the main session's heartbeat, even with the heartbeat off
- [#170871](https://github.com/openclaw/openclaw/issues/170871) [Bug]: liveModelSwitchPending never clears for claude-cli runtime sessions
- [#170873](https://github.com/openclaw/openclaw/issues/170873) [Feature]: claude-cli runtime has no path to protected secret-store entries (Codex has gateway_exec)
- [#169944](https://github.com/openclaw/openclaw/issues/169944) [Bug]: browser open ignores timeoutMs: tab navigation hard-coded to 30 s and the tab is closed on expiry
- [#170843](https://github.com/openclaw/openclaw/issues/170843) Channel route bindings and hub agent picker ignore runtime.type: "acp" on agents.entries — native runtime serves instead
- [#170839](https://github.com/openclaw/openclaw/issues/170839) Telegram group mention gate silently drops messages — no feedback to sender or actionable log line
- [#170834](https://github.com/openclaw/openclaw/issues/170834) /acp spawn --bind succeeds but every follow-up fails: "runtime owner was not published" unless agents.entries.<id> exists
- [#170226](https://github.com/openclaw/openclaw/issues/170226) Gateway main thread stays ~99% busy after ready on an 810-agent fleet: pairwise realpath/stat path comparisons and repeated config stringify
- [#170744](https://github.com/openclaw/openclaw/issues/170744) [Feature]: Keep New conversation prominent across sidebar modes
- [#170159](https://github.com/openclaw/openclaw/issues/170159) [Bug]: Codex harness group-chat "Current user request" has no sender label, so the model misattributes speakers
- [#170788](https://github.com/openclaw/openclaw/issues/170788) [bug] 2026.9.9: 'Session key does not contain an agent id' — outbound policy preservation fails for WhatsApp session keys; sessions.compact also blocked by queued work
- [#169190](https://github.com/openclaw/openclaw/issues/169190) [bug] feishu config hot-reload orphans conversation binding and permanently wedges the session lane (SessionWorkStartChangedError); `openclaw` delegation tool fails with "requires an active run authority"
- [#168620](https://github.com/openclaw/openclaw/issues/168620) Memory corpus inventory leaks agent-database leases from the transcript Worker, forcing integrity checks after restart
- [#164840](https://github.com/openclaw/openclaw/issues/164840) [Bug]: Auto-discovered Python Whisper omits the configured language
- [#170737](https://github.com/openclaw/openclaw/issues/170737) [Feature]: Add NetMind as a bundled provider plugin
- [#170726](https://github.com/openclaw/openclaw/issues/170726) [Bug]: Outbound reply to recipient silently dropped when a parallel sub-agent completion is processed in the same turn (asymmetric, WhatsApp)
- [#170008](https://github.com/openclaw/openclaw/issues/170008) [Feature]: Config key for custom models whose endpoint resolves the model id itself
- [#170710](https://github.com/openclaw/openclaw/issues/170710) Update failure: plugin-target-unavailable (2026.9.4)
- [#169803](https://github.com/openclaw/openclaw/issues/169803) [Bug]: Thread replies can misread the current message as part of the thread starter note
- [#170679](https://github.com/openclaw/openclaw/issues/170679) Native per-platform gate results (passed/failed/skipped) for node exec / cloud workers
- [#170062](https://github.com/openclaw/openclaw/issues/170062) [Bug]: TTS-only assistant turns can disappear from later OpenAI Completions replay
- [#170027](https://github.com/openclaw/openclaw/issues/170027) [Bug]: TTS-only heartbeat replies are silently dropped before speech synthesis
- [#168252](https://github.com/openclaw/openclaw/issues/168252) slack: Markdown links to @, #, or ! destinations render as Slack broadcast, user, and channel mention tokens
- [#170645](https://github.com/openclaw/openclaw/issues/170645) MCP loopback tools/call never runs agent tool result middleware (CLI-backed runtimes bypass it)
- [#170503](https://github.com/openclaw/openclaw/issues/170503) [Bug]: Claude CLI auth login falsely reports unauthenticated when 3s probe times out (WSL2, 2026.10.2)
- [#170180](https://github.com/openclaw/openclaw/issues/170180) claude-cli: Opus 4.7/4.8 default to thinking off (MAX_THINKING_TOKENS=0) while the startup banner reports thinking=medium
- [#167592](https://github.com/openclaw/openclaw/issues/167592) [Bug]: A2A task references silently start replacement tasks
- [#170620](https://github.com/openclaw/openclaw/issues/170620) [Bug]: autoclaw-productivity email pattern uses regex lookaround, rejected by OpenAI API
- [#167591](https://github.com/openclaw/openclaw/issues/167591) [Bug]: A2A push configuration requests return the wrong unsupported error
- [#170528](https://github.com/openclaw/openclaw/issues/170528) [Bug]: sessions.list thinkingLevels ignore reasoning: false (differs from models.list)
- [#170845](https://github.com/openclaw/openclaw/issues/170845) Reduce repeated main-thread work in hot JavaScript helpers

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 253,503 · **Open issues:** 48,495 · **Last push:** <1h ago

There were no new releases for Hermes Agent today. The primary update was the merged pull request #138107, which ensured that the final vX.Y.Z Docker tag is published again. Notably, several new issues were reported, including bug #137838, which highlights that the macOS gateway is repeatedly exiting with a status of 75 after missed liveness probes, with the root cause still unconfirmed. Another significant issue is #138105, where the multiplex cron ticker causes excessive re-parsing and probing every 60 seconds, affecting the Discord heartbeat. These ongoing bugs suggest continued challenges in various functionalities of the platform.

#### ✅ Merged PRs
- [#138107](https://github.com/NousResearch/hermes-agent/pull/138107) fix(release): the final vX.Y.Z Docker tag is published again

#### 🐛 New Issues
- [#137838](https://github.com/NousResearch/hermes-agent/issues/137838) [Bug]: macOS gateway repeatedly exits 75 after missed liveness probes; root cause unconfirmed `type/bug` `comp/gateway` `tool/mcp` `P1` 💬6
- [#138115](https://github.com/NousResearch/hermes-agent/issues/138115) Subdirectory AGENTS.md hints miss container-absolute paths (/workspace/...) with the docker backend `type/bug` `comp/agent` `backend/docker` `P2` 💬2
- [#138105](https://github.com/NousResearch/hermes-agent/issues/138105) [Bug]: multiplex cron ticker does O(profiles) config re-parses and chmod/container probes every 60s, starving the Discord heartbeat `type/perf` `comp/gateway` `comp/cron` `platform/discord` 💬2
- [#138088](https://github.com/NousResearch/hermes-agent/issues/138088) Remote folder picker starts outside the managed files root `type/bug` `comp/cli` `area/config` `area/docker` 💬2
- [#138039](https://github.com/NousResearch/hermes-agent/issues/138039) [Bug]: over-cap checkpoint store flattens every project to one snapshot, ignoring max_snapshots (silent /rollback loss; residual of #79334) `type/bug` `comp/tools` `tool/file` `area/config` 💬1
- [#138108](https://github.com/NousResearch/hermes-agent/issues/138108) Matrix messages from eM Client fail to decrypt; removing Base64 padding fixes the standalone repro `type/bug` `comp/gateway` `platform/matrix` `P2` 💬1
- [#138094](https://github.com/NousResearch/hermes-agent/issues/138094) Dashboard Plugins page installs agent plugins into the dashboard's own profile, not the selected one `type/bug` `comp/cli` `comp/plugins` `P2` 💬1
- [#138047](https://github.com/NousResearch/hermes-agent/issues/138047) [Bug]: Desktop: first prompt in a new chat can vanish silently — never reaches tui_gateway, minted session left unpersisted for days `type/bug` `P2` `needs-repro` `sweeper:risk-session-state` 💬1
- [#138090](https://github.com/NousResearch/hermes-agent/issues/138090) read_file reports "File not found" for files it cannot access (permission denied / sandbox) `type/bug` `comp/tools` `tool/file` `P2` 💬1
- [#138052](https://github.com/NousResearch/hermes-agent/issues/138052) Treat the OpenCode relay's message-less 400 envelope as transient (it aborts turns and silently kills auto-titles) `type/bug` `comp/agent` `comp/plugins` `P3` 💬1
- [#137944](https://github.com/NousResearch/hermes-agent/issues/137944) [Bug] edge-tts==7.2.7 exact pin 403s on every synthesis after Microsoft Sec-MS-GEC rotation — 7.3.0 fixes `type/bug` `tool/tts` `P2` `sweeper:risk-compatibility` 💬1
- [#138053](https://github.com/NousResearch/hermes-agent/issues/138053) is_local_endpoint() treats Kubernetes cluster DNS (*.svc.cluster.local) as a local endpoint `type/bug` `comp/agent` `P2` 💬1
- [#138139](https://github.com/NousResearch/hermes-agent/issues/138139) [Feature]: Bump bundled Python from 3.14.7 to 3.15 - Windows uses the tail-calling interpreter now (~1.6x on pure-Python hot code, +2.8 MiB artifact)
- [#138135](https://github.com/NousResearch/hermes-agent/issues/138135) Feedback: weaker goal persistence and increased human supervision in daily use
- [#138133](https://github.com/NousResearch/hermes-agent/issues/138133) [Bug]: Telegram DM execution approval card unseen; terminal times out without consent
- [#138131](https://github.com/NousResearch/hermes-agent/issues/138131) update: dependencies sync still applies exclude-newer on user machines (setuptools==83.0.0 filtered) — _trust_core_lock drop doesn't cover this path `type/bug` `comp/cli` `P2` `python:uv`
- [#138129](https://github.com/NousResearch/hermes-agent/issues/138129) Withdrawn report `invalid` `P3`
- [#138121](https://github.com/NousResearch/hermes-agent/issues/138121) redeem_codex_reset_credit clears the cooldown of every Codex pool credential, including ones still at 100% `type/bug` `comp/agent` `comp/cli` `provider/openai`
- [#138123](https://github.com/NousResearch/hermes-agent/issues/138123) [Bug]: Internal wakes admitted just before a restart drain are still discarded `type/bug` `comp/gateway` `comp/cron` `P2`
- [#138112](https://github.com/NousResearch/hermes-agent/issues/138112) Apply provider-profile `default_headers` on the Anthropic Messages transport `type/bug` `comp/agent` `provider/anthropic` `P3`
- [#138118](https://github.com/NousResearch/hermes-agent/issues/138118) [Bug]: Desktop "Install from Git" rejects manifest-only language packs (catalog hermes-lang-it included) `type/bug` `P2` `comp/desktop` `Plugin Catalog`
- [#138103](https://github.com/NousResearch/hermes-agent/issues/138103) [Bug]: delegation.model without delegation.provider keeps the parent's wire, so subagents fail on Copilot and OpenCode Zen/Go `type/bug` `comp/agent` `tool/delegate` `provider/copilot`
- [#138109](https://github.com/NousResearch/hermes-agent/issues/138109) kanban: review respawn reuses implementer's model_override, defeating cross-provider review with no detection `type/bug` `comp/cron` `comp/plugins` `P3`
- [#138110](https://github.com/NousResearch/hermes-agent/issues/138110) kanban: no mechanism (webhook or otherwise) to notice CI going red on a PR after its task left review `type/feature` `comp/cron` `comp/plugins` `P3`
- [#138101](https://github.com/NousResearch/hermes-agent/issues/138101) [Bug]: Hermes Cloud: Telegram bot 401 from instance egress — valid token rejected, portal toggle reverts (cr-main, sjc) `type/bug` `comp/gateway` `platform/telegram` `provider/nous`
- [#138086](https://github.com/NousResearch/hermes-agent/issues/138086) [Bug][Windows][Desktop] Severe app-wide UI lag in long agent sessions across versions and hardware `type/perf` `P2` `needs-repro` `comp/desktop`
- [#138083](https://github.com/NousResearch/hermes-agent/issues/138083) Approval transports are never consulted in cron, `-q` or unattended-platform sessions `type/feature` `comp/tools` `comp/cron` `tool/terminal`
- [#138084](https://github.com/NousResearch/hermes-agent/issues/138084) [Bug]: Termux canary omits the MCP SDK; configured HTTP MCP servers register no tools `type/bug` `comp/cli` `tool/mcp` `P2`
- [#138078](https://github.com/NousResearch/hermes-agent/issues/138078) hermes doctor recommends migrating to `providers.<key>.api` — the key its own code calls legacy `type/bug` `comp/cli` `area/config` `P2`
- [#138081](https://github.com/NousResearch/hermes-agent/issues/138081) [Bug]: Dashboard /chat on Android: Gboard spelling corrections and double-space period resend the whole input line `type/bug` `P3` `comp/dashboard`
- [#138054](https://github.com/NousResearch/hermes-agent/issues/138054) Groq host clamp breaks gpt-oss models: none/default rejected, only low/medium/high accepted `type/bug` `duplicate` `comp/plugins` `P3`
- [#138057](https://github.com/NousResearch/hermes-agent/issues/138057) [Bug]: WebSocket upgrade rejected at different layers depending on transport (403 direct vs 401 via proxy) `type/bug` `comp/cli` `area/config` `P2`

#### 🔒 Closed Issues
- [#62182](https://github.com/NousResearch/hermes-agent/issues/62182) Status/error display shows internal 'custom' alias instead of user-configured provider name (e.g. ollama)
- [#77072](https://github.com/NousResearch/hermes-agent/issues/77072) [Bug]: usermod in stage2-hook.sh hangs indefinitely (uninterruptible sleep) when /opt/data contains rclone FUSE mounts — blocks s6 boot completely
- [#138129](https://github.com/NousResearch/hermes-agent/issues/138129) Withdrawn report
- [#85858](https://github.com/NousResearch/hermes-agent/issues/85858) MEMORY.md lost under concurrent Hermes instances sharing one profile (frozen-snapshot + full-file rewrite = last-writer-wins)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,735 · **Open issues:** 8,826 · **Last push:** <1h ago

On October 14, 2026, there were no new releases for vLLM; however, several significant pull requests were merged. Key updates included the automation of shard chat APIs, model evaluations, and tests, as well as added support for packed NVFP4 Qwen4Exp PLE embeddings. Performance enhancements were made with the addition of SM121 TP=2 merged QSA projection plans and improvements to GLM5.3 throughput by enabling fp8 kv cache by default. Notably, a new issue was reported regarding performance discrepancies with RedHatAI's diffusiongemma model, specifically when running on MI300/MI355 hardware with the AITER framework.

#### ✅ Merged PRs
- [#61475](https://github.com/vllm-project/vllm/pull/61475) [CI] Shard chat APIs, model evals and model tests automatically
- [#56273](https://github.com/vllm-project/vllm/pull/56273) [Quantization] Support packed NVFP4 Qwen4Exp PLE embeddings
- [#56716](https://github.com/vllm-project/vllm/pull/56716) [MRV2] Keep warmup out of the EPLB load stats
- [#60679](https://github.com/vllm-project/vllm/pull/60679) [CI][AMD] Gate Aiter MHA FA on dtype
- [#61230](https://github.com/vllm-project/vllm/pull/61230) [ROCm] Bump ROCm base images to AITER v1.25.0
- [#60465](https://github.com/vllm-project/vllm/pull/60465) [Feat] Add text-only OpenAI Decisions API
- [#59166](https://github.com/vllm-project/vllm/pull/59166) [Bugfix] Fix DSpark graph-padding handling in the DeepSeek-V4.1 MoE fused top-k
- [#60908](https://github.com/vllm-project/vllm/pull/60908) [Attention] Set ALWAYS cudagraph support for FA4
- [#61474](https://github.com/vllm-project/vllm/pull/61474) [CI] Shard batch invariance, Kimi prefix cache, EP eval and generate APIs automatically
- [#61477](https://github.com/vllm-project/vllm/pull/61477) [CI] Shard quantization, pooling, multimodal APIs, core kernels and PCP eval automatically
- [#60712](https://github.com/vllm-project/vllm/pull/60712) [Mooncake] Allow Mamba cache mode `none` for capacity-only workers
- [#61437](https://github.com/vllm-project/vllm/pull/61437) [Perf][Qwen4Exp] Add SM121 TP=2 merged QSA projection plans
- [#59482](https://github.com/vllm-project/vllm/pull/59482) [Build] DeepGEMM migration to torch Stable ABI
- [#61510](https://github.com/vllm-project/vllm/pull/61510) Revert "[Build] DeepGEMM migration to torch Stable ABI (#59482)"
- [#46685](https://github.com/vllm-project/vllm/pull/46685) Fix write-after-write hazard in xpu KV RoPE triton kernel
- [#60827](https://github.com/vllm-project/vllm/pull/60827) [Model] Kolibri 1 via the Transformers modeling backend
- [#60733](https://github.com/vllm-project/vllm/pull/60733) [Bugfix][MoE] Clamp BLOCK_SIZE_K to the FP8 quantization block in the batched Triton MoE
- [#60417](https://github.com/vllm-project/vllm/pull/60417) [HiSparse] Read GPU-resident KV directly for mixed and BF16 prefills
- [#60927](https://github.com/vllm-project/vllm/pull/60927) [GLM 5.3 Perf] Handle two elements at the same time for per token group quant, 2.8% E2E ITL improvement
- [#61207](https://github.com/vllm-project/vllm/pull/61207) [Bugfix][ROCm][Kimi-K3] Stage fused KDA decode weights after loading
- [#61420](https://github.com/vllm-project/vllm/pull/61420) [ROCm][CI] Drop the -inf padding check from the AITER MQA logits test
- [#60428](https://github.com/vllm-project/vllm/pull/60428) [NIXL] Bump CUDA 12 NIXL to 1.5.0
- [#59985](https://github.com/vllm-project/vllm/pull/59985) [Bugfix] Keep GateLinear batch invariant under VLLM_BATCH_INVARIANT
- [#60524](https://github.com/vllm-project/vllm/pull/60524) [Bugfix] Keep compressed-tensors wNa16 linear layers batch invariant
- [#61228](https://github.com/vllm-project/vllm/pull/61228) [GLM5.3 Perf] Enable fp8 kv cache for GLM5.3 Flash by default, 9.8% E2E Throughput Improvement
- [#59545](https://github.com/vllm-project/vllm/pull/59545) [KV Offload] Split replicated-layout pre-faulting across workers
- [#58918](https://github.com/vllm-project/vllm/pull/58918) [Bugfix][Compile] Replace Transformers AOT caching with graph caching
- [#55838](https://github.com/vllm-project/vllm/pull/55838) [Perf][Attention][MiniMax-M3] Select CUTLASS MSA by EAGLE3 decode shape
- [#60926](https://github.com/vllm-project/vllm/pull/60926) [Bugfix][Frontend] Expose completion response schemas in OpenAPI
- [#60096](https://github.com/vllm-project/vllm/pull/60096) [Model][MoE] Load MegaMoE experts directly into the DeepGEMM layout
- [#60654](https://github.com/vllm-project/vllm/pull/60654) [Attention] Fetch MLA prefill workspace at use instead of init
- [#57199](https://github.com/vllm-project/vllm/pull/57199) [ROCm][Perf] W4A16: speed up skinny GEMM decode, including speculative batches
- [#44343](https://github.com/vllm-project/vllm/pull/44343) [Perf][Feat] Add generic cuteDSL LL FP32 router (GEMM)
- [#59604](https://github.com/vllm-project/vllm/pull/59604) [Quantization] Add ModelOpt IQ2_XS, IQ2_XXS, and Q8_0 support via b12x
- [#61409](https://github.com/vllm-project/vllm/pull/61409) [CI] Run the Clef pooler test on GPU
- [#61323](https://github.com/vllm-project/vllm/pull/61323) [Model Loader] Keep norm layers neutral under dummy weight init
- [#52412](https://github.com/vllm-project/vllm/pull/52412) [Bugfix] Don't split a multimodal item that a prefill chunk starts exactly on
- [#60972](https://github.com/vllm-project/vllm/pull/60972) [Misc] Break chat_utils into more maintainable modules.
- [#53911](https://github.com/vllm-project/vllm/pull/53911) [Kernel] Fuse DeepEP-v2 decode globalize+align into one launch
- [#46754](https://github.com/vllm-project/vllm/pull/46754) [ROCM][Bugfix] Deferring to TRITON_ATTN backend for Prefix lm models instead of ROCM_ATTN and fixed minor bug in Gemma3 Multimodal code
- [#59463](https://github.com/vllm-project/vllm/pull/59463) [Core] Add lifecycle hooks for worker extensions
- [#61343](https://github.com/vllm-project/vllm/pull/61343) [Perf] per_token_group_quant_8bit: multiply by reciprocal instead of dividing per element
- [#60979](https://github.com/vllm-project/vllm/pull/60979) [Bugfix][Model][Rust Frontend] Qwen3_ASR: Handle ragged Qwen audio batches from Rust frontend
- [#55866](https://github.com/vllm-project/vllm/pull/55866) [Attention] Enable FA4 sparse MQA decode on Blackwell
- [#61401](https://github.com/vllm-project/vllm/pull/61401) [Bugfix] Load and apply Nemotron Super final vision LayerNorm
- [#60638](https://github.com/vllm-project/vllm/pull/60638) [MoRIIO] Require pending remote prefill for READ cache hits
- [#60468](https://github.com/vllm-project/vllm/pull/60468) [Perf] Warm up DeepGEMM MegaMoE kernels before serving
- [#61089](https://github.com/vllm-project/vllm/pull/61089) [Bugfix][Frontend] Forward --enable-log-outputs to the Cohere Chat v2
- [#60749](https://github.com/vllm-project/vllm/pull/60749) [Bugfix] Mask special added tokens in xgrammar JSON, regex and EBNF grammars
- [#60704](https://github.com/vllm-project/vllm/pull/60704) [Bugfix] Fix ReplaySSM ring shape assertion when TP does not divide Mamba2 n_groups

#### 🐛 New Issues
- [#61485](https://github.com/vllm-project/vllm/issues/61485) [ROCm][AMD][AITER][DiffusionGemma]: RedHatAI/diffusiongemma-26B-A4B-it-FP8-dynamic performance slower on MI300/MI355 with AITER on vs AITER off `bug` `rocm` 💬3
- [#61359](https://github.com/vllm-project/vllm/issues/61359) [Bug]: An explicit truncation_side drops the special tokens the tokenizer adds `bug` 💬2
- [#61406](https://github.com/vllm-project/vllm/issues/61406) [RFC]: vLLM Simulator: CPU-Based CI and Hardware-Aware Performance Simulation `RFC` `quantization` 💬2
- [#61486](https://github.com/vllm-project/vllm/issues/61486) [Bug]: [ROCm] Qwen4Exp (AMD path): PLE n-gram IDs read a stale query_start_loc tail during PIECEWISE CUDA-graph replay `bug` `rocm` `quantization` 💬2
- [#61490](https://github.com/vllm-project/vllm/issues/61490) [Bug]: `reset_prefix_cache(reset_running_requests=True)` during an in-flight prefill loses the request's prompt logprobs `bug` 💬2
- [#61327](https://github.com/vllm-project/vllm/issues/61327) [Doc]: Advisory GHSA-mm38-5g96-7j6x lists affected versions as <= 0.8.5, but the code it names ships in 0.10.2 to 0.24.x `documentation` 💬2
- [#61318](https://github.com/vllm-project/vllm/issues/61318) [Bug]: return_sampling_mask=True has two independent request-level preconditions (temperature > 0 and top_k > 0) that are reported one at a time, and only after the engine is already running `bug` 💬2
- [#61469](https://github.com/vllm-project/vllm/issues/61469) [Bug]: MiDashengLM-7B generates only out-of-vocab token 151872 (empty text), even for text-only prompts 💬1
- [#61487](https://github.com/vllm-project/vllm/issues/61487) [Bug]: HiSparse with --enable-dbo crashes in dbo_register_recv_hook; construction-time workspace reservations only size ubatch slot 0 `bug` 💬1
- [#61317](https://github.com/vllm-project/vllm/issues/61317) [Bug]: jit_monitor_mode="error" kills the engine on the first real request for hybrid mamba models — JIT warmup never covers precopy_mamba_align_fused_kernel `bug` 💬1
- [#61315](https://github.com/vllm-project/vllm/issues/61315) [Bug]: enable_lora with max_lora_rank=320 crashes engine startup on MoE models — AssertionError: fused_moe_lora_one_shot supports max_lora_rank<=128 `bug` 💬1
- [#61389](https://github.com/vllm-project/vllm/issues/61389) [Bug][MoRIIO] P-side remote decode completion skips FINISHED_STOPPED 💬1
- [#61372](https://github.com/vllm-project/vllm/issues/61372) [Bug][Rust Frontend] DeepSeek V4/V4.1 renderer rejects `latest_reminder`, which the Python encoder renders `bug` `deepseek` `DSv4` `rust` 💬1
- [#61436](https://github.com/vllm-project/vllm/issues/61436) test token issue 💬1
- [#61330](https://github.com/vllm-project/vllm/issues/61330) [Bug]: DFlash speculative decoding with gpt-oss target crashes with FA3 illegal memory access `bug` `speculative-decoding` `gpt-oss` 💬1
- [#61423](https://github.com/vllm-project/vllm/issues/61423) [RFC]: Re-evaluate per-iteration metrics as a foundation for orchestrator observability `RFC` 💬1
- [#61374](https://github.com/vllm-project/vllm/issues/61374) [Bug]: Regression after #58877: gpt-oss MXFP4 selects failing Triton MoE backend on Thor (SM110) `bug` `gpt-oss` `quantization` 💬1
- [#61337](https://github.com/vllm-project/vllm/issues/61337) [Bug]: DFlash drafter CUDA graph capture fails with FLEX_ATTENTION backend (seq_lens_cpu_upper_bound is None) `bug` 💬1
- [#61313](https://github.com/vllm-project/vllm/issues/61313) [Bug]: disable_hybrid_kv_cache_manager=True crashes engine startup on hybrid mamba models — ValueError: Failed to promote local KV cache specs to one unified type `bug` 💬1
- [#61316](https://github.com/vllm-project/vllm/issues/61316) [Bug]: fp8 kernel selection discards per-kernel rejection reasons — quantization="fp8_per_channel" surfaces as a misleading "Requires SM89+ for Cutlass FP8" with no indication of what actually failed `bug` `nvidia` `quantization` 💬1
- [#61539](https://github.com/vllm-project/vllm/issues/61539) [RFC]: Explicit row layouts for routed-expert capture
- [#61425](https://github.com/vllm-project/vllm/issues/61425) [Bug]: Chat Completions returns `annotations: null` (typed as one Annotation, not a list) and `usage.prompt_tokens_details: null`; strict OpenAI-schema validators reject both
- [#61483](https://github.com/vllm-project/vllm/issues/61483) $nftsolanapay
- [#61484](https://github.com/vllm-project/vllm/issues/61484) solanapaynftm
- [#61505](https://github.com/vllm-project/vllm/issues/61505) #humankindnessi$oVerFLOng
- [#61507](https://github.com/vllm-project/vllm/issues/61507) equality°diversity
- [#61481](https://github.com/vllm-project/vllm/issues/61481) nft$payflo
- [#61532](https://github.com/vllm-project/vllm/issues/61532) [Bug]: [KV Offload][P2P] Consumer frees load slots on abort-ack timeout while the producer's WRITE may still land
- [#61526](https://github.com/vllm-project/vllm/issues/61526) [Bug]: NixlConnector silently corrupts Mamba2 conv state under heterogeneous TP when n_groups is not divisible by TP (e.g. granite-4.0-h, n_groups=1)
- [#61478](https://github.com/vllm-project/vllm/issues/61478) [Feature]: TTL-based Eviction for KV Cache Blocks `feature request`
- [#61443](https://github.com/vllm-project/vllm/issues/61443) [Bug][Spec Decode] DFlash2 (SWA) draft group is never annotated `is_eagle_group` under the generic packed KV layout (GLM-5.3-Flash shape) `glm`
- [#61453](https://github.com/vllm-project/vllm/issues/61453) [Bug]: DP > 1 + MoE expert LoRA: each DP replica applies its own LoRA state to tokens gathered from all replicas (dropped or cross-applied expert delta)
- [#61439](https://github.com/vllm-project/vllm/issues/61439) temp skip
- [#61438](https://github.com/vllm-project/vllm/issues/61438) test temp
- [#61396](https://github.com/vllm-project/vllm/issues/61396) [RFC] [KV Offload]: Store trigger and store admission policies for the offloading manager (lazy offloading) `RFC`
- [#61383](https://github.com/vllm-project/vllm/issues/61383) [Bug]: Intermittent XGrammar request termination with V2 DFlash probabilistic drafting and block rejection `structured-output`
- [#61393](https://github.com/vllm-project/vllm/issues/61393) [Bug]: pythonic tool parsers stream wrong numbers in tool call arguments `tool-calling`
- [#61384](https://github.com/vllm-project/vllm/issues/61384) [Bug]: kimi_k2 treats later turns as already done reasoning on Kimi-K2-Thinking `tool-calling` `kimi`
- [#61373](https://github.com/vllm-project/vllm/issues/61373) [Bug] TieringOffloadingSpec fs-tier lookup succeeds but never triggers a promotion job (active_promotion_jobs stays 0)
- [#61366](https://github.com/vllm-project/vllm/issues/61366) [Bug]: LLM.__repr__ raises AttributeError when the worker model is not a torch module
- [#61341](https://github.com/vllm-project/vllm/issues/61341) 1 `bug` `kimi` `k3`
- [#61319](https://github.com/vllm-project/vllm/issues/61319) [Bug]: Greedy (temperature=0) decoding is not reproducible across repeated calls on the same engine for LiquidAI/LFM2-8B-A1B (hybrid mamba) `bug` `quantization`
- [#61314](https://github.com/vllm-project/vllm/issues/61314) [Bug]: quantization="fp8" + kv_cache_dtype="float16" on a bf16 model crashes at startup — same flash-attn dtype assert as #60859, now on the online-quant path `bug` `quantization`

#### 🔒 Closed Issues
- [#56389](https://github.com/vllm-project/vllm/issues/56389) [Bug]: DeepSeek-V4.1-Flash dsv4_topk Triton illegal memory access under high concurrency on H20; mitigated by max_num_seqs=256
- [#54359](https://github.com/vllm-project/vllm/issues/54359) [Bug][ROCm] GLM-5.3-Flash kpool indexer overwrites its own KV cache: backend advertises a kernel block size the kernels do not use
- [#52306](https://github.com/vllm-project/vllm/issues/52306) [Bug]: A multimodal item can still be split across prefill chunks with disable_chunked_mm_input=True
- [#60970](https://github.com/vllm-project/vllm/issues/60970) [Bug]: Qwen3-ASR with Rust frontend — EngineCore dies when a scheduler step batches unequal-length audio
- [#56832](https://github.com/vllm-project/vllm/issues/56832) [Bug]: --moe-backend marlin is applied to the unquantized MTP draft MoE and aborts (Qwen3.8-Flash-Next NVFP4 + speculative mtp)
- [#42398](https://github.com/vllm-project/vllm/issues/42398) [Feature]: Enhance the security protection of ZMQ communication
- [#56380](https://github.com/vllm-project/vllm/issues/56380) [Bug][ROCm] GLM-5.3-Flash indexer block-table mismatch on gfx942
- [#60346](https://github.com/vllm-project/vllm/issues/60346) [Bug]: `append_replayssm_ring` asserts for supported non-divisible Mamba group counts
- [#56272](https://github.com/vllm-project/vllm/issues/56272) [Feature] Support packed NVFP4 PLE tables in Qwen4Exp
- [#61315](https://github.com/vllm-project/vllm/issues/61315) [Bug]: enable_lora with max_lora_rank=320 crashes engine startup on MoE models — AssertionError: fused_moe_lora_one_shot supports max_lora_rank<=128
- [#61436](https://github.com/vllm-project/vllm/issues/61436) test token issue
- [#60580](https://github.com/vllm-project/vllm/issues/60580) [Bug]: xgrammar lets Muse Glimmer control tokens (<|eom|>, <|start|>, <|message|>) into JSON strings; muse_glimmer parser then silently truncates the answer
- [#61483](https://github.com/vllm-project/vllm/issues/61483) $nftsolanapay
- [#61484](https://github.com/vllm-project/vllm/issues/61484) solanapaynftm
- [#61505](https://github.com/vllm-project/vllm/issues/61505) #humankindnessi$oVerFLOng
- [#61507](https://github.com/vllm-project/vllm/issues/61507) equality°diversity
- [#61481](https://github.com/vllm-project/vllm/issues/61481) nft$payflo
- [#58959](https://github.com/vllm-project/vllm/issues/58959) [RFC]: Return logprobs aligned with sampling-mask token IDs for score centering
- [#60420](https://github.com/vllm-project/vllm/issues/60420) [Bug]: HiSparse: long prefill batched with decodes can OOM a running server
- [#61439](https://github.com/vllm-project/vllm/issues/61439) temp skip
- [#61438](https://github.com/vllm-project/vllm/issues/61438) test temp
- [#60820](https://github.com/vllm-project/vllm/issues/60820) [Bug]: ECExampleConnector.has_cache_item() creates empty hash directories in shared storage on cache-miss lookups
- [#61341](https://github.com/vllm-project/vllm/issues/61341) 1

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 131,093 · **Open issues:** 2,545 · **Last push:** 1h ago

On October 14, 2026, llama.cpp released several new versions, notably b11609, which fixed issues with the WebGPU's matrix ID handling for duplicate expert IDs, and b11608, addressing a critical escape token-related bug in the server that prevented stack overflow errors. Additionally, b11607 introduced changes to replace chat output strings with parts, and b11606 simplified error handling for backend search paths. Among the merged pull requests, the most significant included enhancements for Vulkan optimization and new matmul support for the SME2 architecture. A noteworthy new issue reported was a CUDA illegal memory access on Windows, particularly affecting certain model configurations with Flash Attention.

#### 🚀 New Releases
- [b11609](https://github.com/ggml-org/llama.cpp/releases/tag/b11609) b11609
- [b11608](https://github.com/ggml-org/llama.cpp/releases/tag/b11608) b11608
- [b11607](https://github.com/ggml-org/llama.cpp/releases/tag/b11607) b11607
- [b11606](https://github.com/ggml-org/llama.cpp/releases/tag/b11606) b11606
- [b11604](https://github.com/ggml-org/llama.cpp/releases/tag/b11604) b11604
- [b11603](https://github.com/ggml-org/llama.cpp/releases/tag/b11603) b11603
- [b11602](https://github.com/ggml-org/llama.cpp/releases/tag/b11602) b11602
- [b11601](https://github.com/ggml-org/llama.cpp/releases/tag/b11601) b11601
- [b11600](https://github.com/ggml-org/llama.cpp/releases/tag/b11600) b11600
- [b11598](https://github.com/ggml-org/llama.cpp/releases/tag/b11598) b11598

#### ✅ Merged PRs
- [#30451](https://github.com/ggml-org/llama.cpp/pull/30451) webgpu: (Fix CI) fix mul_mat_id with duplicate expert ids
- [#30243](https://github.com/ggml-org/llama.cpp/pull/30243) server : escape the special tokens without std::regex
- [#30389](https://github.com/ggml-org/llama.cpp/pull/30389) chat: replace output string with parts
- [#29533](https://github.com/ggml-org/llama.cpp/pull/29533) vulkan : split matmul dispatch when it would exceed maxComputeWorkGroupCount
- [#28367](https://github.com/ggml-org/llama.cpp/pull/28367) ggml : simplify backend search path error handling
- [#30472](https://github.com/ggml-org/llama.cpp/pull/30472) docs: update zDNN supported ops
- [#29219](https://github.com/ggml-org/llama.cpp/pull/29219) kleidiai: add SME2 Q4_K and Q6_K matmul support
- [#30119](https://github.com/ggml-org/llama.cpp/pull/30119) vulkan: Optimize pool_2d when the pooling window is large
- [#30453](https://github.com/ggml-org/llama.cpp/pull/30453) meta: recreate all subgraphs when the arena is reallocated
- [#30423](https://github.com/ggml-org/llama.cpp/pull/30423) hexagon: add configurable HTP DCVS/HMX power mode
- [#30446](https://github.com/ggml-org/llama.cpp/pull/30446) graph: pad the KQ bias of the no-cache attention
- [#30445](https://github.com/ggml-org/llama.cpp/pull/30445) graph: skip the LM head for pooled embeddings
- [#30405](https://github.com/ggml-org/llama.cpp/pull/30405) llama : do not map foreign ranges into a backend buffer
- [#30331](https://github.com/ggml-org/llama.cpp/pull/30331) model: load YaRN beta metadata for laguna models
- [#30447](https://github.com/ggml-org/llama.cpp/pull/30447) ggml-cpu : add AVX2 dot product for Q2_0
- [#29741](https://github.com/ggml-org/llama.cpp/pull/29741) vulkan: allow multiple devices to access gpu-visible host memory
- [#30023](https://github.com/ggml-org/llama.cpp/pull/30023) tests : consolidate context state tests into test-llama-context
- [#30452](https://github.com/ggml-org/llama.cpp/pull/30452) llama : fix log message
- [#30420](https://github.com/ggml-org/llama.cpp/pull/30420) cuda : warnings cleanup
- [#30327](https://github.com/ggml-org/llama.cpp/pull/30327) cuda : add GGML_CUDA_GRAPH_DEBUG and read env vars once
- [#30397](https://github.com/ggml-org/llama.cpp/pull/30397) Allow Qwen3.8 Flash Next to accept image embds for MTP
- [#30444](https://github.com/ggml-org/llama.cpp/pull/30444) spec: Remove tokens assert from dsv4 graph_mtp
- [#30443](https://github.com/ggml-org/llama.cpp/pull/30443) cuda : fix compiler warnings in mmq-load-tiles.cuh
- [#30441](https://github.com/ggml-org/llama.cpp/pull/30441) cuda : fix warnings from dead breaks
- [#30433](https://github.com/ggml-org/llama.cpp/pull/30433) convert : fix LoRA conversion with --outtype auto
- [#30255](https://github.com/ggml-org/llama.cpp/pull/30255) llama : skip logits buffer allocation when graph produces no logits
- [#30439](https://github.com/ggml-org/llama.cpp/pull/30439) graph : avoid reallocations in the "no cache" path
- [#29836](https://github.com/ggml-org/llama.cpp/pull/29836) ggml-zdnn: introduce Q8_0 mat mul
- [#30198](https://github.com/ggml-org/llama.cpp/pull/30198) models: remove redundant ggml_cont calls now supported by CUDA unary kernels
- [#30245](https://github.com/ggml-org/llama.cpp/pull/30245) hexagon: extend scalar DMA broadcasting support for binary ops
- [#30324](https://github.com/ggml-org/llama.cpp/pull/30324) ci : build OpenVINO releases with GGML_NATIVE=OFF and CPU backend variants
- [#30401](https://github.com/ggml-org/llama.cpp/pull/30401) ci : fix OpenVINO download links in release notes

#### 🐛 New Issues
- [#30455](https://github.com/ggml-org/llama.cpp/issues/30455) Misc. bug: llama-server spam log output `bug-unconfirmed` 💬8
- [#30436](https://github.com/ggml-org/llama.cpp/issues/30436) CUDA illegal memory access with flash attention on Windows releases (Gemma 4 12B QAT Q4_0 + mmproj, RTX 4080 Super), -fa off works 💬2
- [#30482](https://github.com/ggml-org/llama.cpp/issues/30482) Misc. bug: /v1/systemone returns 500 "the question and its options must fit in one batch" when two questions in a request share a prefix (-np >= 2)
- [#30478](https://github.com/ggml-org/llama.cpp/issues/30478) Misc. bug: drop in performance on A770 when FFN fusion is enabled `bug-unconfirmed`
- [#30465](https://github.com/ggml-org/llama.cpp/issues/30465) Feature Request: Model manager offline icons `enhancement`
- [#30460](https://github.com/ggml-org/llama.cpp/issues/30460) [RFC] GGML_TYPE_BF16X: fixed-rate near-lossless bfloat16 recompression (11.5 bpw)
- [#30458](https://github.com/ggml-org/llama.cpp/issues/30458) rpc : a tensor with oversized ne aborts ggml-rpc-server in deserialize_tensor

#### 🔒 Closed Issues
- [#28752](https://github.com/ggml-org/llama.cpp/issues/28752) Misc. bug: Severe drop in prompt processing speed after b10780 on Vulkan, RDNA3
- [#26497](https://github.com/ggml-org/llama.cpp/issues/26497) UI Bug: Configured MCP Servers don't show anymore
- [#28726](https://github.com/ggml-org/llama.cpp/issues/28726) Eval bug: OpenVINO backend crashes with STATUS_ILLEGAL_INSTRUCTION due to AVX-512
- [#29388](https://github.com/ggml-org/llama.cpp/issues/29388) Feature Request: avoid allocating logits buffer for encoder-only models
- [#29048](https://github.com/ggml-org/llama.cpp/issues/29048) Feature Request: Make HIP and CUDA crash compilation
- [#30307](https://github.com/ggml-org/llama.cpp/issues/30307) Eval bug: qwen4exp (Qwen3.8-Flash-Next) + MTP aborts on image input after #30257 (`GGML_ASSERT(ubatch.token …)` left in `graph_mtp`)
- [#30287](https://github.com/ggml-org/llama.cpp/issues/30287) Feature Request: Metal prefill speedup (~68%) on M5 Max (NAX / tensor API kernels)
- [#30396](https://github.com/ggml-org/llama.cpp/issues/30396) Eval bug: draft-mtp with Qwen3.6-35B-A3B on 2x RTX 5060 Ti (layer split): "CUDA error: the launch timed out" in MTP path at ~88K context
- [#30395](https://github.com/ggml-org/llama.cpp/issues/30395) Eval bug: draft-mtp with Qwen3.6-35B-A3B on 2x RTX 5060 Ti (layer split): "CUDA error: the launch timed out" in MTP path at ~88K context
- [#29532](https://github.com/ggml-org/llama.cpp/issues/29532) Eval bug: Vulkan matmul dispatch exceeds maxComputeWorkGroupCount with a small m and large n

### LiteLLM (`BerriAI/litellm`)

**Stars:** 61,177 · **Open issues:** 5,542 · **Last push:** <1h ago

Today, LiteLLM released version v1.106.0-rc.2, which emphasizes security by signing Docker images with cosign, ensuring integrity with a verifiable commit hash. Significant merged features include the introduction of AggregatingSink and fixed-bucket histograms in telemetry (PR #45487), as well as improvements to the UI, such as the simplification of LiteAdmin on the homepage (PR #46301) and the removal of beta markers from various features (PR #46305). Notably, a critical issue has emerged regarding a flaky test in the MCP server CI shard (issue #46212), which may impact the reliability of future builds. Overall, the day saw meaningful enhancements despite the ongoing attention to resolving these new challenges.

#### 🚀 New Releases
- [v1.106.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-rc.2) v1.106.0-rc.2

#### ✅ Merged PRs
- [#45487](https://github.com/BerriAI/litellm/pull/45487) feat(telemetry): add AggregatingSink, fixed-bucket histograms, Report and HttpExporter
- [#46267](https://github.com/BerriAI/litellm/pull/46267) fix(prometheus): skip custom metadata labels a metric already carries
- [#45484](https://github.com/BerriAI/litellm/pull/45484) feat(telemetry): add litellm.telemetry records, semantic group consent and sink protocol
- [#46314](https://github.com/BerriAI/litellm/pull/46314) fix(ui): drop deprecation banners from kept features and make the rest permanent
- [#45871](https://github.com/BerriAI/litellm/pull/45871) fix(vertex_ai): unwrap tool-emulated json_schema envelopes and send output_config.format for Claude
- [#46318](https://github.com/BerriAI/litellm/pull/46318) fix(cost_calculator): honour base_model when the deployment provider row has no rates, with a live-proxy integration test
- [#46317](https://github.com/BerriAI/litellm/pull/46317) docs(agents): steer tests away from implementation details and deliberate reverts
- [#46305](https://github.com/BerriAI/litellm/pull/46305) fix(ui): drop the beta marker from the dark mode toggle
- [#46313](https://github.com/BerriAI/litellm/pull/46313) fix(proxy): backport #44243 and #44508 to stable/1.105.x for v1.105.1
- [#46101](https://github.com/BerriAI/litellm/pull/46101) fix(openai): carry cache_control to prompt_cache_breakpoint on chat completions to gpt-5.6
- [#46309](https://github.com/BerriAI/litellm/pull/46309) feat(ui): backport #46260 Home What's new from day 0 support blog posts to rc/1.106.0
- [#46125](https://github.com/BerriAI/litellm/pull/46125) refactor(rust): move hook composition into shared host
- [#46301](https://github.com/BerriAI/litellm/pull/46301) feat(ui): simplify LiteAdmin on the homepage
- [#45388](https://github.com/BerriAI/litellm/pull/45388) chore(typing): clear 670 basedpyright Any errors by validating provider payloads at the boundary
- [#45996](https://github.com/BerriAI/litellm/pull/45996) refactor(rust): one stream codec shape per API format
- [#46105](https://github.com/BerriAI/litellm/pull/46105) fix(openai): carry cache_control to prompt_cache_breakpoint on /v1/responses to gpt-5.6
- [#46186](https://github.com/BerriAI/litellm/pull/46186) fix(proxy): bound SIGTERM connection wait by GRACEFUL_SHUTDOWN_TIMEOUT
- [#46225](https://github.com/BerriAI/litellm/pull/46225) fix(mcp): resolve a bare tool name on a single-server scope against that server
- [#43621](https://github.com/BerriAI/litellm/pull/43621) feat(realtime): proxy OpenAI Live sessions on /v1/live/sessions
- [#46281](https://github.com/BerriAI/litellm/pull/46281) fix(cost-map): set together_ai Qwen3.7-Max to published price and restore 2026-09-15 removal dates
- [#46185](https://github.com/BerriAI/litellm/pull/46185) fix(proxy): warn when --max_requests_before_restart runs with a single worker
- [#46280](https://github.com/BerriAI/litellm/pull/46280) feat(pricing): add github_copilot/gemini-4-argon
- [#46113](https://github.com/BerriAI/litellm/pull/46113) fix(proxy): broadcast team cache invalidation on team writes
- [#44788](https://github.com/BerriAI/litellm/pull/44788) fix(proxy): keep provider refusal, logprobs and system_fingerprint in chat completions
- [#46260](https://github.com/BerriAI/litellm/pull/46260) feat(ui): source Home What's new from day 0 support blog posts
- [#46206](https://github.com/BerriAI/litellm/pull/46206) fix(model-prices): add TokenHub rows, fix TokenHub DeepSeek-V4-Pro price, Bedrock Claude 3.5 Sonnet and Fireworks context windows, Together dates
- [#46261](https://github.com/BerriAI/litellm/pull/46261) test(unit): wait on the work itself instead of fixed sleeps
- [#45923](https://github.com/BerriAI/litellm/pull/45923) fix(logging): redact nested callback input and provider response fields

#### 🐛 New Issues
- [#46212](https://github.com/BerriAI/litellm/issues/46212) [Bug]: test_cold_concurrent_schema_validation_accepts_valid_arguments is flaky in the mcp-server CI shard `bug` 💬4
- [#46198](https://github.com/BerriAI/litellm/issues/46198) [Bug]: Dashboard calls admin-only license endpoint for non-admin users, flooding logs with ERROR stacktraces `bug` 💬2
- [#46209](https://github.com/BerriAI/litellm/issues/46209) TypeError: can only concatenate str (not "list") to str with mistral-medium-3-5 after a tool result (stream and non-stream) `llm translation` 💬2
- [#46247](https://github.com/BerriAI/litellm/issues/46247) [Bug]: bedrock_mantle with a geo inference profile (`us.openai.gpt-6.1-sol`) returns empty "completed" responses `llm translation` 💬2
- [#46142](https://github.com/BerriAI/litellm/issues/46142) [Bug]: Cross-thread import deadlock on first import — log filters resolve rust_bridge.catalog → types.secret_managers.main per record, then all logging breaks with KeyError: 'litellm' 💬1
- [#46295](https://github.com/BerriAI/litellm/issues/46295) [Bug]: Can't log in to MCP toolset URLs from Claude Code or Codex `claude code` 💬1
- [#46285](https://github.com/BerriAI/litellm/issues/46285) [Bug]: max_end_user_budget_id is dropped for end users without a row when the virtual key is cached 💬1
- [#46189](https://github.com/BerriAI/litellm/issues/46189) [Bug]: Usage "Last 7 days" preset selects eight inclusive calendar days `bug` 💬1
- [#46157](https://github.com/BerriAI/litellm/issues/46157) [Bug]: OCI provider: Cohere models fail on the call after a tool call (request shape, and citations use documentIds) `llm translation` 💬1
- [#46335](https://github.com/BerriAI/litellm/issues/46335) [Bug]: Admin UI settings cannot be edited if STORE_MODEL_IN_DB is false `bug`
- [#46233](https://github.com/BerriAI/litellm/issues/46233) [Bug]: model_info.base_model ignored for cost tracking on the chatgpt provider (spend stays 0) `llm translation`
- [#46322](https://github.com/BerriAI/litellm/issues/46322) [Bug]: Published OpenAI <3 constraint blocks Pydantic AI 2.55 after SDK 3 support merged `llm translation`
- [#46319](https://github.com/BerriAI/litellm/issues/46319) [Bug]: Cost Optimization page loads 30 days of /user/daily/activity/aggregated by default; memory spikes and the proxy slows on every page load `llm translation`
- [#46316](https://github.com/BerriAI/litellm/issues/46316) Dark mode logo not used on Connect/Chat pages
- [#46302](https://github.com/BerriAI/litellm/issues/46302) [Bug]: Pass-through guardrails on the unified apply_guardrail path are skipped when request_fields use more than one [*] `llm translation`
- [#46303](https://github.com/BerriAI/litellm/issues/46303) [Bug]: Intermittent Codex V2 agent-message decryption errors on GitHub Copilot Responses `bug` `llm translation`
- [#46286](https://github.com/BerriAI/litellm/issues/46286) [Bug]: Bedrock /v1/messages spend priced at the global rate for cross-region (eu.) profiles; streamed usage.cost uses the eu. rate `llm translation`
- [#46276](https://github.com/BerriAI/litellm/issues/46276) perf: 4-7x latency regression from v1.101.0 to v1.105.0 under load (new middleware + auth prefetch + double Redis calls)
- [#46254](https://github.com/BerriAI/litellm/issues/46254) [Bug]: Bedrock Converse cache points rejected by GLM 5.3 in toolConfig and directly after toolResult `llm translation`
- [#46229](https://github.com/BerriAI/litellm/issues/46229) [Bug]: Concurrent requests to the proxy /mcp endpoint cancel each other in flight (recurrence of #24522)
- [#46221](https://github.com/BerriAI/litellm/issues/46221) [Feature]: Clarify the STT normalization contract and accept consistency improvements `llm translation`
- [#46218](https://github.com/BerriAI/litellm/issues/46218) Per-deployment merge_system_message flag: hoist mid-conversation system messages for strict OpenAI-compatible backends (vLLM 400 'System message must be at the beginning') `llm translation`
- [#46216](https://github.com/BerriAI/litellm/issues/46216) [Bug]: Bedrock bare claude-3-5-sonnet ids list max_input_tokens 1000000 (regional siblings say 200000) `llm translation`
- [#46205](https://github.com/BerriAI/litellm/issues/46205) [Feature]: Let a deployment set a different timeout per service_tier (e.g. longer for flex) `enhancement` `llm translation`
- [#46202](https://github.com/BerriAI/litellm/issues/46202) [Bug]: Streaming tool call is silently dropped when delta.tool_calls is a single object instead of a list `llm translation`
- [#46195](https://github.com/BerriAI/litellm/issues/46195) [Feature]: Apply Google's free grounding quota when costing Gemini / Vertex AI grounding `llm translation`
- [#46182](https://github.com/BerriAI/litellm/issues/46182) [Bug]: router_settings allowed_fails: 3 never cools a deployment down, because 3 is the default `llm translation`
- [#46179](https://github.com/BerriAI/litellm/issues/46179) [Bug]: /v1/messages adapters: typeless or unknown tool_choice raises bare KeyError/ValueError (chat adapter) or silently becomes "auto" (Responses adapter) instead of a 400 `llm translation`
- [#46173](https://github.com/BerriAI/litellm/issues/46173) [Bug]: Error 500 using Claude Code `bug` `llm translation`
- [#46170](https://github.com/BerriAI/litellm/issues/46170) Typo in Palm decommission error: decommisioned → decommissioned
- [#46168](https://github.com/BerriAI/litellm/issues/46168) Guardrail hooks: Literals still list embeddings / audio_transcription
- [#46167](https://github.com/BerriAI/litellm/issues/46167) MLflow span typing never matches embedding calls (`call_type == "embeddings"`)
- [#46166](https://github.com/BerriAI/litellm/issues/46166) prompt_injection_detection accepts wrong call_type strings (silent skip on embeddings/transcription)
- [#46165](https://github.com/BerriAI/litellm/issues/46165) get_formatted_prompt: Literal out of sync with CallTypesLiteral (audio_transcription vs transcription)
- [#46158](https://github.com/BerriAI/litellm/issues/46158) helm: Chart appVersion (v1.85.1) lags far behind current LiteLLM release (1.106.0)
- [#46146](https://github.com/BerriAI/litellm/issues/46146) [Bug]: /v1/responses silently drops the top-level `moderation` param, so OpenAI moderation never runs `bug` `llm translation`

#### 🔒 Closed Issues
- [#32281](https://github.com/BerriAI/litellm/issues/32281) [Bug]: MCP tool conversion drops `function` wrapper key on /v1/chat/completions, causing 400 with hosted_vllm
- [#16060](https://github.com/BerriAI/litellm/issues/16060) [Bug]: Routing strategy "usage-based-routing-v2" erroneously finds no deployment to use
- [#32118](https://github.com/BerriAI/litellm/issues/32118) [Feature]: Support multiple API keys with rotation for search tools
- [#35677](https://github.com/BerriAI/litellm/issues/35677) [Bug]: Responses API — Anthropic structured output leaks the tool-call envelope as output_text for models off the native allowlist (claude-sonnet-5)
- [#35790](https://github.com/BerriAI/litellm/issues/35790) fix: json_tool_call response not unwrapped for Vertex AI Claude (parameter envelope)
- [#29826](https://github.com/BerriAI/litellm/issues/29826) MCP gateway: make ListResourcesResult.resources tolerant of missing field (upstream spec violations)
- [#32280](https://github.com/BerriAI/litellm/issues/32280) Passthrough /anthropic logging crashes with KeyError: 'content' on count_tokens (and other non-Messages) response bodies
- [#32425](https://github.com/BerriAI/litellm/issues/32425) [Bug]: Router cooldown policy silently ignores AllowedFailsPolicy.*AllowedFails=0 due to 'or' fallback
- [#41521](https://github.com/BerriAI/litellm/issues/41521) [Bug]: failed /v1/audio/speech calls write no LiteLLM_SpendLogs row (success rows and other routes' failure rows are written)
- [#32443](https://github.com/BerriAI/litellm/issues/32443) [Bug]: Virtual key is not allowed to call /v1/model/info
- [#32451](https://github.com/BerriAI/litellm/issues/32451) [Feature]: Control which Usage view dropdown options are visible to internal users
- [#32456](https://github.com/BerriAI/litellm/issues/32456) [Bug]: Bedrock Stability style-transfer is unusable via /v1/images/edits; no working channel for the required style_image
- [#32467](https://github.com/BerriAI/litellm/issues/32467) [Bug]: Groq Compound models (groq/compound and groq/compound-mini) are not recognized by LiteLLM
- [#32487](https://github.com/BerriAI/litellm/issues/32487) [Bug]: Streaming /v1/responses success logger crashes with "'dict' object has no attribute 'usage'" → no spend log written, request goes uncharged
- [#32528](https://github.com/BerriAI/litellm/issues/32528) [Bug]: LiteLLM Semantic Tool Search creates embeddings without batching, causing hangs and failures
- [#46142](https://github.com/BerriAI/litellm/issues/46142) [Bug]: Cross-thread import deadlock on first import — log filters resolve rust_bridge.catalog → types.secret_managers.main per record, then all logging breaks with KeyError: 'litellm'
- [#44831](https://github.com/BerriAI/litellm/issues/44831) [Bug]: MCP tools/call with an unprefixed tool name on /{server_name}/mcp resolves via the global tool-name mapping, not the server in the path (404 when cold, 403 when another server has a tool with the same name)
- [#41861](https://github.com/BerriAI/litellm/issues/41861) Gemini explicit cache creation drops lifecycle usage; spend callbacks omit creation and storage accounting
- [#46233](https://github.com/BerriAI/litellm/issues/46233) [Bug]: model_info.base_model ignored for cost tracking on the chatgpt provider (spend stays 0)

### Unsloth (`unslothai/unsloth`)

**Stars:** 77,954 · **Open issues:** 386 · **Last push:** <1h ago

On October 14, 2026, Unsloth released version v0.1.907-beta, which brought significant performance improvements, including UI/UX enhancements up to 10x faster for multiple chats and inference speeds that are up to 5x faster due to an impressive 95% cache hit rate. The update also introduced better compaction for API responses and restored drag-and-drop functionality for desktop users, supporting over three times as many files. Key merged pull requests included enhancements to the Studio environment, such as more efficient live denoising for diffusion language models and improvements to I2V availability caching. Notably, the version also addressed various bugs, including critical issues with chat inputs and desktop text-to-speech functions. New issues emerged, particularly concerning the UI transfer between modes and a troubling chat input bug following the previous update to v0.1.906-beta.

#### 🚀 New Releases
- [v0.1.907-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.907-beta) Large Performance Gains + More Browser Use

#### ✅ Merged PRs
- [#13670](https://github.com/unslothai/unsloth/pull/13670) Studio CI: click the composer itself in the dismiss_on_composer probe
- [#13667](https://github.com/unslothai/unsloth/pull/13667) Studio: key the i2v availability cache on the diffusers module, not its id
- [#13271](https://github.com/unslothai/unsloth/pull/13271) Native decode: read GQA KV heads in place instead of copying them per query head
- [#13268](https://github.com/unslothai/unsloth/pull/13268) GRPO DDP gradient sync: copy each averaged bucket back with one _foreach_copy_
- [#13611](https://github.com/unslothai/unsloth/pull/13611) Studio: keep data recipe seed inspect inside a managed account's workspace
- [#13484](https://github.com/unslothai/unsloth/pull/13484) Save each unsloth train run in its own folder
- [#13277](https://github.com/unslothai/unsloth/pull/13277) FP8 MoE + fast_inference: refuse unsupported checkpoints before vLLM loads, with a hint that works
- [#13600](https://github.com/unslothai/unsloth/pull/13600) Studio: emit --moe-cache-mib auto only where the cache measured faster, price the spill micro-batch
- [#13593](https://github.com/unslothai/unsloth/pull/13593) Studio: live denoising canvas for transformers diffusion LMs
- [#13480](https://github.com/unslothai/unsloth/pull/13480) Studio: point unsloth start at the right model when several are loaded
- [#13269](https://github.com/unslothai/unsloth/pull/13269) Tests: keep the zoo num_proc anchor tests meaningful once the zoo adopts the edit
- [#13280](https://github.com/unslothai/unsloth/pull/13280) QAT: fall back to the module forward for torchao NVFP4 / MX linears in fused LoRA
- [#13646](https://github.com/unslothai/unsloth/pull/13646) tests: accept a positional encoding on Path.read_text / write_text
- [#13478](https://github.com/unslothai/unsloth/pull/13478) Studio: send routine coding work to the local model with unsloth start --auto-route
- [#13482](https://github.com/unslothai/unsloth/pull/13482) Studio: reload a Clef as soon as the training run that unloaded it ends
- [#13325](https://github.com/unslothai/unsloth/pull/13325) fast_cross_entropy_loss: all-masked labels give loss 0 instead of NaN
- [#13592](https://github.com/unslothai/unsloth/pull/13592) Diffusion LMs: fast inference, live denoising frames and in-loop cancellation
- [#13596](https://github.com/unslothai/unsloth/pull/13596) Studio: KV cache dtype, GPU memory limit and seed for vLLM and SGLang loads
- [#13267](https://github.com/unslothai/unsloth/pull/13267) DDP LoRA: default find_unused_parameters=False so gradient checkpointing does not crash
- [#13483](https://github.com/unslothai/unsloth/pull/13483) Studio: pass Codex MCP and sub-agent tools to the model on /v1/responses
- [#13479](https://github.com/unslothai/unsloth/pull/13479) Studio: run Laya on the GPU by default and free it on unload
- [#13477](https://github.com/unslothai/unsloth/pull/13477) Studio: keep the local Claude agent from stopping on a small context window
- [#13342](https://github.com/unslothai/unsloth/pull/13342) Studio: train and chat with every text-diffusion LM family
- [#13332](https://github.com/unslothai/unsloth/pull/13332) Freeze the setup-time heap during Trainer.train(); add resume parity and memory-flat GPU tests
- [#13331](https://github.com/unslothai/unsloth/pull/13331) FP8 on ROCm: use the dequant path on archs without e4m3fn Triton support
- [#13270](https://github.com/unslothai/unsloth/pull/13270) FP8 LoRA: dequantize down_proj in the backward like gate and up
- [#13389](https://github.com/unslothai/unsloth/pull/13389) Skip bitsandbytes' per-parameter device sync in non-paged optimizer steps
- [#13487](https://github.com/unslothai/unsloth/pull/13487) Studio: let the Python tool open a SQLite file
- [#13640](https://github.com/unslothai/unsloth/pull/13640) Re-measure the Studio startup budget after the audio selector and thinking merges
- [#13489](https://github.com/unslothai/unsloth/pull/13489) Studio: stop dropping the page text after a menu with no closing tag
- [#13571](https://github.com/unslothai/unsloth/pull/13571) Studio: vLLM thinking effort levels, preserve thinking and auto-compact
- [#13633](https://github.com/unslothai/unsloth/pull/13633) Studio: hold the forced aligner against a folder delete; match compound audio.cpp size scopes in order
- [#13634](https://github.com/unslothai/unsloth/pull/13634) tests: click the inline Delete button #13615 put back on the action bar
- [#13485](https://github.com/unslothai/unsloth/pull/13485) Studio: keep ticked Word form check boxes in Chat with files
- [#13565](https://github.com/unslothai/unsloth/pull/13565) Studio: offer the precision folders of an MLX repo like GGUF quants
- [#13341](https://github.com/unslothai/unsloth/pull/13341) Diffusion LM training: compiled chunked loss with 0 graph breaks, plus per-family samplers
- [#13440](https://github.com/unslothai/unsloth/pull/13440) Nemotron-H fast_inference via vLLM weight sharing (fallback on older unsloth_zoo); drop vLLM-only kwargs on fallback
- [#13605](https://github.com/unslothai/unsloth/pull/13605) Studio MCP: never run server-side tools from the chat tool
- [#13627](https://github.com/unslothai/unsloth/pull/13627) Bump install.sh / install.ps1 pins to unsloth>=2026.10.5
- [#13545](https://github.com/unslothai/unsloth/pull/13545) Studio: set thinking traces apart from the answer and give tool rows kind icons
- [#13625](https://github.com/unslothai/unsloth/pull/13625) Studio: changing the thinking setting also resets Expand thinking
- [#13581](https://github.com/unslothai/unsloth/pull/13581) fix: update Codex client version to restore model discovery
- [#13608](https://github.com/unslothai/unsloth/pull/13608) Studio tests: restore stub, titlebar backdrop, and run the autoopt parity fixture with diffusers
- [#13517](https://github.com/unslothai/unsloth/pull/13517) Studio: fix the audio model selector's list, labels and search
- [#13615](https://github.com/unslothai/unsloth/pull/13615) Studio: inline message actions, matching response editor
- [#13617](https://github.com/unslothai/unsloth/pull/13617) tests: resolve every closure name in the restoreSettings sandbox
- [#13455](https://github.com/unslothai/unsloth/pull/13455) Studio: Auto drops serving slots before the MTP drafter
- [#13612](https://github.com/unslothai/unsloth/pull/13612) Fix the diffusion scheduler, parity, formatter and bundle reds on main
- [#13519](https://github.com/unslothai/unsloth/pull/13519) Studio: list, reveal and delete audio.cpp umbrella models by folder
- [#13591](https://github.com/unslothai/unsloth/pull/13591) FastSentenceTransformer: reuse the loaded model for Transformer subclass modules
- [#13573](https://github.com/unslothai/unsloth/pull/13573) Studio: LTX-2.5 GGUF quants (unsloth/LTX-2.5-GGUF)
- [#13531](https://github.com/unslothai/unsloth/pull/13531) Studio: fit MiniMax-H3 GGUF to a Vulkan host's GTT pool before rendering
- [#13610](https://github.com/unslothai/unsloth/pull/13610) Studio: trim comments in the video header sizes code
- [#13558](https://github.com/unslothai/unsloth/pull/13558) Studio: optional Chart view with labelled axes for weekly and cumulative token activity
- [#13602](https://github.com/unslothai/unsloth/pull/13602) Studio: faster browser agent page reads after a load, and leaner drags
- [#13515](https://github.com/unslothai/unsloth/pull/13515) Studio: fix audio.cpp partial downloads, aligner progress, CPU fallback
- [#13537](https://github.com/unslothai/unsloth/pull/13537) Studio: video component sizes from safetensors headers, measured peaks for every video family
- [#13597](https://github.com/unslothai/unsloth/pull/13597) Keep Mistral Small 3.2 tool definitions in training rows
- [#13456](https://github.com/unslothai/unsloth/pull/13456) Studio: keep the prompt cache across long tool chats and follow-up turns
- [#13562](https://github.com/unslothai/unsloth/pull/13562) Studio: add /compact and draw compactions where they happened
- [#13465](https://github.com/unslothai/unsloth/pull/13465) Studio: fix Spark-TTS training failing on None/config.yaml (BiCodec repo root unset)
- [#13514](https://github.com/unslothai/unsloth/pull/13514) Studio: keep the Transcribe loaded state and Eject in step with the sidecar
- [#13557](https://github.com/unslothai/unsloth/pull/13557) Studio: add a Download to folder for model downloads
- [#13569](https://github.com/unslothai/unsloth/pull/13569) Studio: pick the sampler on the Images page and load v-prediction SDXL checkpoints correctly
- [#13118](https://github.com/unslothai/unsloth/pull/13118) Studio: let coding agents use Unsloth Studio over MCP with API keys
- [#13590](https://github.com/unslothai/unsloth/pull/13590) Tests: follow the sidebar rename dialog and run the H3 compile-order test without diffusers
- [#13588](https://github.com/unslothai/unsloth/pull/13588) Studio: apply the tool output length setting to MCP tool results
- [#13471](https://github.com/unslothai/unsloth/pull/13471) Fix image inputs in Clef training and prediction
- [#13420](https://github.com/unslothai/unsloth/pull/13420) Studio: load sidebar chats, projects and training runs 20 at a time from the server
- [#13442](https://github.com/unslothai/unsloth/pull/13442) Studio setup: build the frontend in the background on source installs (setup.sh and setup.ps1)
- [#13583](https://github.com/unslothai/unsloth/pull/13583) studiobench UI parity: report a UI change the PR declares instead of failing
- [#13582](https://github.com/unslothai/unsloth/pull/13582) Make the weights_at_root call-site and diffusion autoopt parity tests host independent
- [#13578](https://github.com/unslothai/unsloth/pull/13578) Run non-LoRA PEFT adapters through their own forward in fast inference
- [#13561](https://github.com/unslothai/unsloth/pull/13561) Studio: downscale oversized image uploads and add crop to image inputs
- [#13580](https://github.com/unslothai/unsloth/pull/13580) Patch TRL's served-teacher, GOLD and SDFT distillation trainers
- [#13567](https://github.com/unslothai/unsloth/pull/13567) Pass str target_modules (regex or "all-linear") to PEFT on the Llama path
- [#13584](https://github.com/unslothai/unsloth/pull/13584) Let AWQ checkpoints train with LoRA
- [#13425](https://github.com/unslothai/unsloth/pull/13425) Fit Gemma 4 E2B on 8 GB cards on Windows and in Studio chat
- [#13404](https://github.com/unslothai/unsloth/pull/13404) perf(studio): enter Zoo's exact verify, NAX and packed gated-delta scopes on Unsloth Studio's own MLX paths
- [#13585](https://github.com/unslothai/unsloth/pull/13585) Parse each forward once in the per-step loss-kwargs walk
- [#13544](https://github.com/unslothai/unsloth/pull/13544) Keep torch's bundled flash on Hopper for narrow models under UNSLOTH_FLASH_ATTENTION_IMPL=auto
- [#13577](https://github.com/unslothai/unsloth/pull/13577) Studio: popups dim without blur, with a faint shadow; Settings a step darker
- [#13532](https://github.com/unslothai/unsloth/pull/13532) Studio: fix compressed pages, router paths and early empty reads in the browser panel
- [#13563](https://github.com/unslothai/unsloth/pull/13563) Prebuilt CUDA wheels: torch 2.11 for Windows x64
- [#13554](https://github.com/unslothai/unsloth/pull/13554) Studio: optional notification when a chat reply finishes in the background
- [#13586](https://github.com/unslothai/unsloth/pull/13586) Re-measure the Studio startup budget after the file history and agent merges
- [#13317](https://github.com/unslothai/unsloth/pull/13317) Studio: fp8 / mxfp8 image LoRA training on every aspect bucket, mxfp8 for biased linears, fp8 sm89 floor
- [#13529](https://github.com/unslothai/unsloth/pull/13529) Studio: Run scripts setting and per-site Unlabelled clicks rule for the browser agent
- [#13549](https://github.com/unslothai/unsloth/pull/13549) Studio: translate the chat welcome greeting in every locale
- [#13575](https://github.com/unslothai/unsloth/pull/13575) Studio: rename sidebar chats in the Rename chat dialog
- [#13574](https://github.com/unslothai/unsloth/pull/13574) Studio: Regenerate title in the chat header menu
- [#13547](https://github.com/unslothai/unsloth/pull/13547) Studio: list VS Code and Pi as coding agents and reorder the agent picker
- [#13505](https://github.com/unslothai/unsloth/pull/13505) Studio: browser agent can click at a point, move the mouse, drag, and run approved scripts
- [#13522](https://github.com/unslothai/unsloth/pull/13522) Studio: per-chat file history and /rewind
- [#13432](https://github.com/unslothai/unsloth/pull/13432) Studio: stop LTX-2 loads crashing Windows with an access violation on 32 GB machines
- [#13553](https://github.com/unslothai/unsloth/pull/13553) Studio: skip a DFlash drafter that an image would break under Auto
- [#13552](https://github.com/unslothai/unsloth/pull/13552) Fix int8-int4 QAT LoRA at low ranks and on tied-embedding models
- [#13535](https://github.com/unslothai/unsloth/pull/13535) Studio: run LoftQ when the LoftQ variant is selected
- [#13236](https://github.com/unslothai/unsloth/pull/13236) Studio: faster image LoRA training (fused AdamW, compile nf4 bases)
- [#13530](https://github.com/unslothai/unsloth/pull/13530) fix(studio): handle harmless Node helper stderr on Windows
- [#13405](https://github.com/unslothai/unsloth/pull/13405) Studio: run AutoRound checkpoints on vLLM, and tidy the engine dialog
- [#13555](https://github.com/unslothai/unsloth/pull/13555) Studio: let a model loaded at a set context reload on Auto
- [#13546](https://github.com/unslothai/unsloth/pull/13546) Studio: rounded-rectangle hover on the header model selector
- [#13524](https://github.com/unslothai/unsloth/pull/13524) Studio: keep Hub Run settings open on a first Chat visit
- [#13540](https://github.com/unslothai/unsloth/pull/13540) Studio: explicit XPU GPU ids on single-tile Intel hosts
- [#13551](https://github.com/unslothai/unsloth/pull/13551) Studio: size music waits for Metal and Vulkan, not only CPU
- [#13550](https://github.com/unslothai/unsloth/pull/13550) unsloth start opencode: detect OpenCode V2 installed as plain opencode
- [#13528](https://github.com/unslothai/unsloth/pull/13528) Studio: read ZE_AFFINITY_MASK the way Level Zero does
- [#13402](https://github.com/unslothai/unsloth/pull/13402) Studio: rename the composer's Code toggle to Tools
- [#13527](https://github.com/unslothai/unsloth/pull/13527) Studio: XPU native bf16 no longer depends on intel-ocloc
- [#13525](https://github.com/unslothai/unsloth/pull/13525) Studio: cap Qwen3.8 NPU context at 8192
- [#13443](https://github.com/unslothai/unsloth/pull/13443) Studio: transcribe with downloaded MLX speech-to-text models on Apple Silicon
- [#13543](https://github.com/unslothai/unsloth/pull/13543) Fix the exec-literal, encoding and formatter gates left red on main
- [#13421](https://github.com/unslothai/unsloth/pull/13421) Studio (AMD iGPU): split an iGPU row's total into VRAM and shared memory
- [#13413](https://github.com/unslothai/unsloth/pull/13413) Save int4 QAT LoRA models as real int4 with save_pretrained_torchao
- [#13534](https://github.com/unslothai/unsloth/pull/13534) Studio: run the Shutdown cleanup off the event loop
- [#13536](https://github.com/unslothai/unsloth/pull/13536) Studio: per-family diffusion tables move into the family registries
- [#13533](https://github.com/unslothai/unsloth/pull/13533) Re-measure the Studio startup budget after the Library and composer merges
- [#13507](https://github.com/unslothai/unsloth/pull/13507) Studio: reveal and delete for LM Studio, Ollama, custom-folder and other local models
- [#13419](https://github.com/unslothai/unsloth/pull/13419) Studio installer (AMD, Linux): no generic ROCm torch for RDNA 1 / Polaris when the arch is readable
- [#13233](https://github.com/unslothai/unsloth/pull/13233) Studio: train Z-Image LoRAs on attention and feed-forward
- [#13417](https://github.com/unslothai/unsloth/pull/13417) Turn off Granite 3.0-3.2 attention dropout on float16 loads
- [#13220](https://github.com/unslothai/unsloth/pull/13220) Studio: sample images during image LoRA training
- [#13434](https://github.com/unslothai/unsloth/pull/13434) test_packing_sdpa: take the loss path it reads labels from
- [#13486](https://github.com/unslothai/unsloth/pull/13486) Keep the saved Hugging Face login when from_pretrained gets a token
- [#13526](https://github.com/unslothai/unsloth/pull/13526) Format the diffusion auto-optimizer and LTX-2.5 prequant files
- [#13218](https://github.com/unslothai/unsloth/pull/13218) Studio: train image LoRAs with aspect-ratio buckets
- [#13278](https://github.com/unslothai/unsloth/pull/13278) Studio: scale the SDXL loss in fp16 and keep image LoRA training off devices it cannot use
- [#13210](https://github.com/unslothai/unsloth/pull/13210) Studio: random flip opt-in, plus checkpoint retention, caption dropout, LoRA dropout and timestep shift on the image Train tab
- [#13215](https://github.com/unslothai/unsloth/pull/13215) Studio: diffusion flow_shift is the effective shift, and min-SNR is recorded as unused for flow-matching runs
- [#13441](https://github.com/unslothai/unsloth/pull/13441) Studio: open a project source from the Sources tab
- [#13497](https://github.com/unslothai/unsloth/pull/13497) Studio: show pending llama.cpp, whisper.cpp and audio.cpp updates on one card
- [#13447](https://github.com/unslothai/unsloth/pull/13447) Studio: serve HTTPS from your own certificate (--ssl-certfile / --ssl-keyfile)
- [#13502](https://github.com/unslothai/unsloth/pull/13502) Studio: mark where a chat was compacted with an inline divider
- [#13439](https://github.com/unslothai/unsloth/pull/13439) Add unsloth start vscode: put the served model in VS Code's Copilot Chat model picker
- [#13491](https://github.com/unslothai/unsloth/pull/13491) Studio: Regenerate title only in the Library's chat menu
- [#13520](https://github.com/unslothai/unsloth/pull/13520) Studio: diffusion auto-optimizer core shared by the image and video load paths
- [#13448](https://github.com/unslothai/unsloth/pull/13448) Studio: offer a download for files edit_file creates
- [#13518](https://github.com/unslothai/unsloth/pull/13518) studio: dim selected Library cards, slightly tighter card corners
- [#13493](https://github.com/unslothai/unsloth/pull/13493) Studio: composer takes README-style files, dotfiles, Office templates and more media
- [#13513](https://github.com/unslothai/unsloth/pull/13513) Studio: never follow a symlink when linking a file into a tool workspace
- [#13516](https://github.com/unslothai/unsloth/pull/13516) Studio: seed LTX-2.5 fp8 / int8 loads from hosted pre-quantized DiTs
- [#13435](https://github.com/unslothai/unsloth/pull/13435) Studio: add --models-dir to unsloth studio for local model folders
- [#13488](https://github.com/unslothai/unsloth/pull/13488) Make UNSLOTH_STUDIO_KEEP_LEGACY=0 work through docker/run.sh
- [#13500](https://github.com/unslothai/unsloth/pull/13500) Studio: LTX-2.5 VAE fixture, catalog row and Video page defaults
- [#13509](https://github.com/unslothai/unsloth/pull/13509) studio: stronger light-mode Library card hover, centered time pill
- [#13426](https://github.com/unslothai/unsloth/pull/13426) Studio: composer accepts every document type chat with files parses
- [#13492](https://github.com/unslothai/unsloth/pull/13492) Studio: clip the browser page at the split handle while dragging it smaller
- [#13512](https://github.com/unslothai/unsloth/pull/13512) Update README.md

#### 🐛 New Issues
- [#13655](https://github.com/unslothai/unsloth/issues/13655) [Bug] UI did not transfer from Image Gen mode into Edit Mode (Qwen2.1) `feature request` `bug` 💬3
- [#13604](https://github.com/unslothai/unsloth/issues/13604) [Bug] “Chat input worked before updating from v0.1.905-beta to v0.1.906-beta. After the update, it disappears following the first reply, even in a plain chat without a Project.” `feature request` `bug` 💬1
- [#13560](https://github.com/unslothai/unsloth/issues/13560) [Bug] Unsloth Desktop TTS invalid repo_id error, "On Device" tab issue, and no chunking `feature request` `bug` 💬1
- [#13566](https://github.com/unslothai/unsloth/issues/13566) [Feature] support Tencent/WeMM-Embedding multi-modal embedding model `feature request` 💬1
- [#13576](https://github.com/unslothai/unsloth/issues/13576) [Bug] Third-Party MCP tools output still capped at 16000 chars. `feature request` `bug` 💬1
- [#13570](https://github.com/unslothai/unsloth/issues/13570) [Feature] Add OpeanAI compatible image-generation endpoints to image-model sources `feature request` 💬1
- [#13511](https://github.com/unslothai/unsloth/issues/13511) [Bug] Studio pairs --mmproj with --model-draft dflash; first image desyncs ctx_dft and poisons the slot 💬1
- [#13673](https://github.com/unslothai/unsloth/issues/13673) [Feature] give option to add timestamp on prompt responses `feature request`
- [#13666](https://github.com/unslothai/unsloth/issues/13666) [Feature] Vulkan fallback for ROCm-unsupported AMD cards in stable-diffusion.cpp `feature request`
- [#13663](https://github.com/unslothai/unsloth/issues/13663) [Bug] File embedding failure with unsloth/embeddinggemma-2 at indexing text stage `feature request` `bug`
- [#13662](https://github.com/unslothai/unsloth/issues/13662) [Bug] NO INSTALL END Win10 `feature request` `bug`
- [#13656](https://github.com/unslothai/unsloth/issues/13656) [Bug] Failure to enable Windows MXC Sandbox, unclear instructions `feature request` `bug`
- [#13644](https://github.com/unslothai/unsloth/issues/13644) [Bug] wrong text on mouse over after prompt response `feature request` `bug`
- [#13638](https://github.com/unslothai/unsloth/issues/13638) [Bug]: TypeError: Image in diffusion_prompt_cache.py causes CUBLAS error during Image Edit (Qwen-Image-2.1) `feature request` `bug`
- [#13629](https://github.com/unslothai/unsloth/issues/13629) Unsloth Desktop integrated browser does not respond to mouse clicks on Mac OS Golden Gate `feature request` `bug`
- [#13616](https://github.com/unslothai/unsloth/issues/13616) [Windows] Input box hidden behind taskbar — layout uses full screen height instead of work area
- [#13607](https://github.com/unslothai/unsloth/issues/13607) [Bug] Studio backend update fails after Bash caches relative ./bin/rm `feature request` `bug`
- [#13613](https://github.com/unslothai/unsloth/issues/13613) [Bug] New Model Hub filters do not work as expected + suggested improvements `feature request` `bug`
- [#13603](https://github.com/unslothai/unsloth/issues/13603) [Feature] OpenAI-compatible Fine-tuning Jobs API for Unsloth Studio `feature request`
- [#13598](https://github.com/unslothai/unsloth/issues/13598) [Feature] allow VRAM budget floor of 0% for multi-GPU spreading `feature request`
- [#13595](https://github.com/unslothai/unsloth/issues/13595) [Feature] allow 'new chat' window to save text when switching windows `feature request`
- [#13568](https://github.com/unslothai/unsloth/issues/13568) [Feature]efficient MoE serving with bandwidth-adaptive CPU–GPU co-execution ( q ⋆ policy), full-layer double-buffered prefill streaming, global LRU expert caching, graph-compatible execution `feature request`

#### 🔒 Closed Issues
- [#464](https://github.com/unslothai/unsloth/issues/464) AWQ support
- [#4626](https://github.com/unslothai/unsloth/issues/4626) [Bug] Failed to load model
- [#8529](https://github.com/unslothai/unsloth/issues/8529) [Bug] RX 5700XT doesn't recognize in Unsloth Desktop
- [#1794](https://github.com/unslothai/unsloth/issues/1794) support NPU?
- [#8532](https://github.com/unslothai/unsloth/issues/8532) [Feature] Ling 3.0
- [#4993](https://github.com/unslothai/unsloth/issues/4993) [Feature] unsloth studio feature and ui suggestions
- [#277](https://github.com/unslothai/unsloth/issues/277) Is it possible to add unsloth installation instructions using poetry?
- [#8716](https://github.com/unslothai/unsloth/issues/8716) Add parameter for custom SSL files .crt & .key - as an alternative to using Cloudflare
- [#2786](https://github.com/unslothai/unsloth/issues/2786) [Bug] Huge loss during Mistral3.1/3.2 SFT
- [#1439](https://github.com/unslothai/unsloth/issues/1439) Recent paper(s) about memory reduction improvements on optimizers
- [#3094](https://github.com/unslothai/unsloth/issues/3094) ValueError: Received inconsistently sized batches of images (1) and text (4) when conducting batch inference with image and text
- [#4660](https://github.com/unslothai/unsloth/issues/4660) [Feature] Unsloth studio Export chat configs to ollama
- [#3200](https://github.com/unslothai/unsloth/issues/3200) [Feature] Support SFT/GRPO fine tuning for DeepSeek-V3.1 on 4-8x H100
- [#2741](https://github.com/unslothai/unsloth/issues/2741) Is it possible to use GRPO with vllm and LoRA to fine-tune the Qwen3-MoE model?
- [#10904](https://github.com/unslothai/unsloth/issues/10904) [Feature] Allow Model to "Leave a Self Note" Before Compacting.
- [#13388](https://github.com/unslothai/unsloth/issues/13388) It is not yet possible to run Gemma4e2b on Windows.
- [#3030](https://github.com/unslothai/unsloth/issues/3030) [Question] LLM Agent Fine-Tuning
- [#285](https://github.com/unslothai/unsloth/issues/285) Add support for LISA ?
- [#1370](https://github.com/unslothai/unsloth/issues/1370) [Feature] Is QLora finetuning of 2:4 sparse models possible?
- [#1457](https://github.com/unslothai/unsloth/issues/1457) Feature: Insight into when a concept has been understood / grokked (code available)
- [#13473](https://github.com/unslothai/unsloth/issues/13473) [Bug] Drag & Drop has stopped working on Unsloth Desktop
- [#4685](https://github.com/unslothai/unsloth/issues/4685) [Bug] Out of Memory during multi-GPU training
- [#13461](https://github.com/unslothai/unsloth/issues/13461) [Feature] Multi-image Jev/Clef decision model training and prediction on PyTorch/CUDA
- [#5091](https://github.com/unslothai/unsloth/issues/5091) [Feature] Is there will be a support for steam deck?
- [#2857](https://github.com/unslothai/unsloth/issues/2857) [Bug] Subprocess.CalledProcessError
- [#2756](https://github.com/unslothai/unsloth/issues/2756) [Feature] Need Tool Call Training Jupyter
- [#3123](https://github.com/unslothai/unsloth/issues/3123) [Bug] Invalid dim size when increasing batch size more than 1 in orpheus tts fine-tuning
- [#10822](https://github.com/unslothai/unsloth/issues/10822) [Feature] One Click MCP Installs from an MCP Hub + Allow MCPs when Remote Access is On
- [#11245](https://github.com/unslothai/unsloth/issues/11245) [Feature] Redesign UI for this model loader notification
- [#1360](https://github.com/unslothai/unsloth/issues/1360) Add spectrum finetuning support
- [#1350](https://github.com/unslothai/unsloth/issues/1350) acceleration for low precision training and 1.58bit training by bitblas
- [#11664](https://github.com/unslothai/unsloth/issues/11664) [Feature] Feature request: vLLM support — thinking depth selection and context auto-compression
- [#13466](https://github.com/unslothai/unsloth/issues/13466) [Bug] Can't install Unsloth Studio
- [#10807](https://github.com/unslothai/unsloth/issues/10807) [Feature] Unsloth Cumulative Token Usage Tracker needs Actual Line Graphs
- [#4169](https://github.com/unslothai/unsloth/issues/4169) [Feature] Phi-4-multimodal
- [#1385](https://github.com/unslothai/unsloth/issues/1385) Train model using AdaLoRA, VeRA...
- [#3072](https://github.com/unslothai/unsloth/issues/3072) [Bug] Could not import module 'TimmWrapperModel'. Are this object's requirements defined correctly?
- [#13464](https://github.com/unslothai/unsloth/issues/13464) [Feature] give option for notification when prompt is done/returned
- [#10590](https://github.com/unslothai/unsloth/issues/10590) [Feature] Expose all image training parameters in GUI
- [#1562](https://github.com/unslothai/unsloth/issues/1562) Train with multiple candidate output token?
- [#8942](https://github.com/unslothai/unsloth/issues/8942) [Bug] AMD: on Windows, an iGPU next to a Radeon card shows inflated or Unknown VRAM
- [#4980](https://github.com/unslothai/unsloth/issues/4980) Cannot pass torchao_config = Int4WeightOnlyConfig() when saving an Int4 QAT gemma-4 model.
- [#4680](https://github.com/unslothai/unsloth/issues/4680) Multi-GPU DDP support for FastSentenceTransformer?
- [#4189](https://github.com/unslothai/unsloth/issues/4189) [Bug] Please fill in your issue title here.
- [#4847](https://github.com/unslothai/unsloth/issues/4847) [Bug] Gemma 4B Lora training The size of tensor a (697) must match the size of tensor b (2) at non-singleton dimension 2
- [#8818](https://github.com/unslothai/unsloth/issues/8818) [Feature] Parallelise studio/setup.sh downloads (llama.cpp prebuilt + T5 sidecars) to cut install time
- [#4929](https://github.com/unslothai/unsloth/issues/4929) [Feature Request] : Cloud GPU Backends, LFM2.5 Support, and Community Hub
- [#10872](https://github.com/unslothai/unsloth/issues/10872) [Feature] Steam-like multi-drive model library management
- [#4692](https://github.com/unslothai/unsloth/issues/4692) [Feature]Terminal command and Python script execution within session specific Docker Container
- [#3991](https://github.com/unslothai/unsloth/issues/3991) [Feature] Sequential attention pruning
- [#4024](https://github.com/unslothai/unsloth/issues/4024) "No images found" / "No valid samples" with DeepSeek-VL2
- [#13460](https://github.com/unslothai/unsloth/issues/13460) [Feature] Use Local command MCPs when Remote Access is enabled
- [#3089](https://github.com/unslothai/unsloth/issues/3089) LoRA_B matrices are not updated (remain zero) when training with unsloth/Llama-3.2-11B-Vision-bnb-4bit
- [#2907](https://github.com/unslothai/unsloth/issues/2907) Problems with completions in the reward function
- [#2981](https://github.com/unslothai/unsloth/issues/2981) Already found peft_config warning without any model/adapter merging
- [#3054](https://github.com/unslothai/unsloth/issues/3054) [Bug] Loss & gradient norm zero when full finetuning custom model & most layers frozen
- [#9977](https://github.com/unslothai/unsloth/issues/9977) [Bug] Unsloth Desktop crashes when I try to load the LTX-2-GGUF video model on Windows. exit code: 0xc0000005
- [#7997](https://github.com/unslothai/unsloth/issues/7997) [Bug] Cannot load Autoround model despite having auto-round installed.
- [#13476](https://github.com/unslothai/unsloth/issues/13476) [Bug] `unsloth start opencode` fails with `Unrecognized flag: --model in command opencode`
- [#10272](https://github.com/unslothai/unsloth/issues/10272) [Feature] Transcribe does not load/recognize mlx models
- [#2408](https://github.com/unslothai/unsloth/issues/2408) "RuntimeError: CUDA driver error: unknown error" when Fine Tuning Llama-3.2-11B-Vision-Instruct
- [#1395](https://github.com/unslothai/unsloth/issues/1395) Integration of this paper "Initialization using Update Approximation is a Silver Bullet for Extremely Efficient Low-Rank Fine-Tuning" into Unsloth
- [#462](https://github.com/unslothai/unsloth/issues/462) ThunderKittens：a simple yet faster flashattention alternative
- [#13367](https://github.com/unslothai/unsloth/issues/13367) [Feature] Add guidance for supervised overnight local training
- [#1652](https://github.com/unslothai/unsloth/issues/1652) how to Setting Default Output Format for Qwen2.5 Model Similar to DeepSeek-R1
- [#11683](https://github.com/unslothai/unsloth/issues/11683) [Feature] Option to disable automatic update checks for Unsloth Desktop, backend, and llama.cpp
- [#2864](https://github.com/unslothai/unsloth/issues/2864) [Bug] Kaggle issues finetuning Magistral - Detecting just one GPU?
- [#3002](https://github.com/unslothai/unsloth/issues/3002) LogSoftmaxBackward0 returns NaN during training on Kaggle versioned runs (Granite 2B 4bit)
- [#8531](https://github.com/unslothai/unsloth/issues/8531) [Feature] Auto update external JSON files for third-party IDE's (VS Code, Cursor, Codex, etc)
- [#4195](https://github.com/unslothai/unsloth/issues/4195) [Bug] Smart gradient offloading crashes with DeepSpeed ZeRO Stage 1/2 (grad_reduc is None)
- [#13418](https://github.com/unslothai/unsloth/issues/13418) [Feature] Studio: precision picker for MLX repos that keep each quant in a subfolder (2/4/6/8-bit), like LM Studio
- [#8872](https://github.com/unslothai/unsloth/issues/8872) [Bug] MTP Not working out of the box on 48GB GPU when Max Context + MTP doesn't fit in VRAM by default.
- [#13560](https://github.com/unslothai/unsloth/issues/13560) [Bug] Unsloth Desktop TTS invalid repo_id error, "On Device" tab issue, and no chunking
- [#13566](https://github.com/unslothai/unsloth/issues/13566) [Feature] support Tencent/WeMM-Embedding multi-modal embedding model
- [#4943](https://github.com/unslothai/unsloth/issues/4943) [Feature] K8s Chart?
- [#4376](https://github.com/unslothai/unsloth/issues/4376) [Feature]Dataset suggestion: WCY void-B resolution traces for epistemic humility fine-tuning
- [#3096](https://github.com/unslothai/unsloth/issues/3096) [Feature] Please add in Chat template for mistral 3.2 supporting tool calls
- [#13453](https://github.com/unslothai/unsloth/issues/13453) [Feature] allow manual compact conversation
- [#13458](https://github.com/unslothai/unsloth/issues/13458) [Bug] Spark-TTS training fails on BiCodec tokenizer load with FileNotFoundError ('...\None\config.yaml')
- [#11714](https://github.com/unslothai/unsloth/issues/11714) [Feature] Unsloth Studio: let the Images page pick the sampler (scheduler), not just the step count
- [#13576](https://github.com/unslothai/unsloth/issues/13576) [Bug] Third-Party MCP tools output still capped at 16000 chars.
- [#13570](https://github.com/unslothai/unsloth/issues/13570) [Feature] Add OpeanAI compatible image-generation endpoints to image-model sources
- [#2815](https://github.com/unslothai/unsloth/issues/2815) I have created a custom Callback for Clearml which gives seperate graphs for tran and val while training for unsloth
- [#2935](https://github.com/unslothai/unsloth/issues/2935) [Feature] SeleKT: Selective Knowledge Transfer finetuning technique
- [#2960](https://github.com/unslothai/unsloth/issues/2960) [Feature] Any plans to support WebGPU?
- [#11630](https://github.com/unslothai/unsloth/issues/11630) [Feature] Image manipulation tools for editing reference images
- [#3038](https://github.com/unslothai/unsloth/issues/3038) [Feature] understanding prompts and inputs during fine tuning.
- [#11513](https://github.com/unslothai/unsloth/issues/11513) [Feature] Omnivoice TTS fine tuning notebook
- [#13391](https://github.com/unslothai/unsloth/issues/13391) [Feature] Localize chat welcome greetings into i18n locale files
- [#13511](https://github.com/unslothai/unsloth/issues/13511) [Bug] Studio pairs --mmproj with --model-draft dflash; first image desyncs ctx_dft and poisons the slot
- [#13510](https://github.com/unslothai/unsloth/issues/13510) [Studio] MiniMax Music 3 generation always times out on Metal/CPU: MUSIC_SPECS["minimax_music3"] has no rtf, so the timeout heuristic uses the CUDA-calibrated 4.0 default
- [#13450](https://github.com/unslothai/unsloth/issues/13450) [Feature] allow per-conversation picked model / allow more than 1 model in use
- [#276](https://github.com/unslothai/unsloth/issues/276) Int4 transformer training [Feature Request]
- [#11745](https://github.com/unslothai/unsloth/issues/11745) [Feature] Unsloth Studio / Desktop: run React and TypeScript canvases, not just plain HTML
- [#8250](https://github.com/unslothai/unsloth/issues/8250) [Feature] Possibility to change the directory easily please
- [#13468](https://github.com/unslothai/unsloth/issues/13468) [Bug] Vision chat crashes on Gemma 4 E2B with CUDA device-side assert (NaN/inf in sampling), misreported as "out of memory"

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,138 · **Open issues:** 401 · **Last push:** <1h ago

On October 14, 2026, there were no new releases for AIBrix. Significant developments included the merging of PR #3063, which split the vLLM-Omni page into multi-modal serving guides, and various bug fixes addressing critical issues like the rounding of request trace bucket indexes (#3046) and preventing stale user totals in the VTC token tracker (#3048). The team also deprecated the least-request router in favor of a more efficient least-request-top-k routing method (#3061). Among the newly reported issues, #3056 raised a bug regarding SGLang priority-scheduling metrics, highlighting that metrics are misreported as a single priority count rather than the total queue.

#### ✅ Merged PRs
- [#3063](https://github.com/vllm-project/aibrix/pull/3063) [Docs] Split the vLLM-Omni page into multi-modal serving guides
- [#3046](https://github.com/vllm-project/aibrix/pull/3046) [Bug] Round request trace bucket indexes instead of truncating
- [#3048](https://github.com/vllm-project/aibrix/pull/3048) [Bug] Stop the VTC token tracker from keeping stale user totals
- [#3044](https://github.com/vllm-project/aibrix/pull/3044) [Bug] Keep a prefix's pods when one of its branches is evicted
- [#3061](https://github.com/vllm-project/aibrix/pull/3061) [Misc] Deprecate the least-request router in favor of least-request-top-k

#### 🐛 New Issues
- [#3056](https://github.com/vllm-project/aibrix/issues/3056) [Bug] SGLang priority-scheduling metrics are read as one priority's count instead of the queue total `kind/bug` `area/gateway` 💬3
- [#3041](https://github.com/vllm-project/aibrix/issues/3041) [Bug] Streamed /v1/completions without stream_options.include_usage is never charged against TPM `kind/bug` `area/gateway` 💬3
- [#3065](https://github.com/vllm-project/aibrix/issues/3065) [Bug] RayClusterFleet never requeues for its progress deadline, so stalled rollouts are not marked failed on time `kind/bug` `area/runtime` `area/orchestration` 💬2
- [#3039](https://github.com/vllm-project/aibrix/issues/3039) [Bug] Replica inflight admission decrements a Redis count it never incremented when the admit script fails `kind/bug` `area/gateway` 💬2
- [#3032](https://github.com/vllm-project/aibrix/issues/3032) [Bug] RayClusterFleet pause/resume conditions are written with Update and never persisted `kind/bug` `area/runtime` `area/orchestration` 💬2
- [#3037](https://github.com/vllm-project/aibrix/issues/3037) [Bug] Files API timestamps are off by the process UTC offset outside UTC `kind/bug` `area/batch` 💬2
- [#3053](https://github.com/vllm-project/aibrix/issues/3053) [Bug] Batch jobs in a local metastore are unreachable after upgrading from v0.7.0 to v0.8.0 `kind/bug` `area/batch` 💬1
- [#3051](https://github.com/vllm-project/aibrix/issues/3051) [Feature] Add non-preemptive placement priority for ModelClaim `kind/feature` `area/testing` `area/website` `area/scheduling` 💬1
- [#3049](https://github.com/vllm-project/aibrix/issues/3049) [Bug] Preble histogram keeps an entry for every tree node it has recorded `kind/bug` `area/gateway` 💬1
- [#3047](https://github.com/vllm-project/aibrix/issues/3047) [Bug] VTC token tracker keeps a user under totals it no longer has after a partial prune `kind/bug` `area/gateway` 💬1
- [#3045](https://github.com/vllm-project/aibrix/issues/3045) [Bug] Request trace never uses some log2 token buckets because the index is truncated `kind/bug` `area/gateway` 💬1
- [#3043](https://github.com/vllm-project/aibrix/issues/3043) [Bug] Evicting one branch of the Preble prefix tree drops pods from its parent prefix `kind/bug` `area/gateway` 💬1
- [#3034](https://github.com/vllm-project/aibrix/issues/3034) [Bug] Prefix-cache routing tokenizes requests twice, scores KV sync on the wrong tokens, and stalls on the tokenizer pool `kind/bug` `area/gateway` 💬1
- [#3031](https://github.com/vllm-project/aibrix/issues/3031) [Bug] A served model loses its pending count and output predictor when its only pod or its adapter is updated `kind/bug` `area/gateway` `area/orchestration` 💬1
- [#3055](https://github.com/vllm-project/aibrix/issues/3055) v0.9.0 Roadmap `kind/feature`

#### 🔒 Closed Issues
- [#2346](https://github.com/vllm-project/aibrix/issues/2346) v0.8.0 Roadmap
- [#3039](https://github.com/vllm-project/aibrix/issues/3039) [Bug] Replica inflight admission decrements a Redis count it never incremented when the admit script fails
- [#3032](https://github.com/vllm-project/aibrix/issues/3032) [Bug] RayClusterFleet pause/resume conditions are written with Update and never persisted
- [#3037](https://github.com/vllm-project/aibrix/issues/3037) [Bug] Files API timestamps are off by the process UTC offset outside UTC
- [#3029](https://github.com/vllm-project/aibrix/issues/3029) [Bug] TOS v1 downloads a model prefix that also has children as a single file
- [#2952](https://github.com/vllm-project/aibrix/issues/2952) [RFC]: Normalize the token_load decode score by each pod's KV capacity

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,140 · **Open issues:** 652 · **Last push:** <1h ago

On October 14, 2026, there were no new releases for the Semantic Router, but several important changes were made with merged pull requests. Noteworthy updates include the bug fix for rejecting GPUs without BF16 support in PR #4937 and addressing empty text blocks in Anthropic request translations with PR #4897. Additionally, PR #5006 introduced cross-request batching for Decision 3.0 content caches, enhancing the model runtime efficiency. Among new issues, PR #4997 highlights a feature request concerning the infrequent reuse of graphs in Decision 3.0's approximate profiles, indicating ongoing development and refinement in the model architecture.

#### ✅ Merged PRs
- [#4937](https://github.com/vllm-project/semantic-router/pull/4937) [Bug] Reject GPUs without BF16 support for BF16 weights
- [#4897](https://github.com/vllm-project/semantic-router/pull/4897) [Bug] Fix empty text blocks in Anthropic request translation
- [#4899](https://github.com/vllm-project/semantic-router/pull/4899) [Docs] Explain the merge-queue conversation-resolution gate
- [#4885](https://github.com/vllm-project/semantic-router/pull/4885) [Docs] Document the merge-queue freeze rule in AGENTS.md
- [#5037](https://github.com/vllm-project/semantic-router/pull/5037) [Bug] System One: 429 / 503 with Retry-After for a busy or unready deployment, 504 for an Engine-mode deadline
- [#5006](https://github.com/vllm-project/semantic-router/pull/5006) [Feature] Model runtime: Decision 3.0 content caches and cross-request batching
- [#5005](https://github.com/vllm-project/semantic-router/pull/5005) [Feature] Router: read a native request's model without scanning its media
- [#4858](https://github.com/vllm-project/semantic-router/pull/4858) [Bug] Do not mirror a rejected request to the shadow model
- [#4998](https://github.com/vllm-project/semantic-router/pull/4998) [Bug] Capture every runtime graph on one stream

#### 🐛 New Issues
- [#4997](https://github.com/vllm-project/semantic-router/issues/4997) [Feature] Model runtime: Decision 3.0 approximate profiles rarely reuse a graph `enhancement` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬4
- [#5003](https://github.com/vllm-project/semantic-router/issues/5003) [Feature] Router: read a native System One request without scanning its media `enhancement` `accepted` `wg/router-models-inference-runtime` 💬3
- [#5046](https://github.com/vllm-project/semantic-router/issues/5046) [Bug] ExtProc 502s every non-streaming response whose usage carries gateway metering fields `bug` `needs-acceptance` `wg/router-models-inference-runtime` 💬2
- [#5015](https://github.com/vllm-project/semantic-router/issues/5015) [Feature] Add a locked uv environment for the domain classifier data preparation `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬2
- [#5047](https://github.com/vllm-project/semantic-router/issues/5047) [CI/Build] valkey-glide has no Windows library, so the Windows build cannot complete `needs-acceptance` `wg/router-models-inference-runtime` 💬2
- [#4990](https://github.com/vllm-project/semantic-router/issues/4990) [Bug] TestServingOverALeaseBundlesEverySignalOfAStage flakes when the runner is CPU-starved `needs-acceptance` `wg/router-models-inference-runtime` 💬2
- [#5044](https://github.com/vllm-project/semantic-router/issues/5044) [CI/Build] The GOOS=windows build fails where the !windows constraint is missing `needs-acceptance` `wg/router-models-inference-runtime` 💬2
- [#4996](https://github.com/vllm-project/semantic-router/issues/4996) [Feature] Model runtime: read Decision 3.0 images once under the approximate profiles `enhancement` `wg/router-models-inference-runtime` 💬1
- [#5063](https://github.com/vllm-project/semantic-router/issues/5063) [Bug] Responses encoding strips the data-URL prefix from inline file_data `bug` `needs-acceptance` `wg/data-plane-networking` 💬1
- [#5058](https://github.com/vllm-project/semantic-router/issues/5058) [Feature] Model runtime: make decoder graph caches observable and workload-adaptive `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5008](https://github.com/vllm-project/semantic-router/issues/5008) [Bug] Model runtime: eager batches use up the decoder graph budget `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#4995](https://github.com/vllm-project/semantic-router/issues/4995) [Feature] Model runtime: capture Decision 3.0 forwards as graphs `enhancement` `accepted` `wg/router-models-inference-runtime` 💬1
- [#4994](https://github.com/vllm-project/semantic-router/issues/4994) [Bug] Model runtime: every graph capture leaves a BLAS workspace behind `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#5031](https://github.com/vllm-project/semantic-router/issues/5031) [Bug] Config audit test can read the audit before a PUT's activation is recorded `bug` `needs-acceptance` 💬1
- [#5024](https://github.com/vllm-project/semantic-router/issues/5024) [Feature] Add a locked uv environment for the RL model selection trainer `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5028](https://github.com/vllm-project/semantic-router/issues/5028) [Docs] Add a uv setup table to the training README and retire the hand-made modality lock `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5027](https://github.com/vllm-project/semantic-router/issues/5027) [Feature] Check that every training uv.lock is current in CI `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5026](https://github.com/vllm-project/semantic-router/issues/5026) [Feature] Document one torch build policy (CPU, CUDA, ROCm) for the training uv projects `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5025](https://github.com/vllm-project/semantic-router/issues/5025) [Feature] Run the training shell scripts and Make targets through uv `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5023](https://github.com/vllm-project/semantic-router/issues/5023) [Feature] Add a locked uv environment for the ML model selection trainer `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5022](https://github.com/vllm-project/semantic-router/issues/5022) [Feature] Add a locked uv environment for the MMLU-Pro solver LoRA experiment `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5065](https://github.com/vllm-project/semantic-router/issues/5065) [Feature] Model runtime: load FP8 and int4 Decision 3.0 packages `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5064](https://github.com/vllm-project/semantic-router/issues/5064) [Feature] Integrate ORACLE asynchronous task verification into Router Learning as an `outcome_verifier` plugin `enhancement` `needs-acceptance` `wg/mom-routing`
- [#5062](https://github.com/vllm-project/semantic-router/issues/5062) [Bug] Model runtime: placement refuses Decision 2.0 / Vela 2.0 models that fit (FP32 estimate ignores bf16_resident) `needs-acceptance` `wg/router-models-inference-runtime`
- [#5061](https://github.com/vllm-project/semantic-router/issues/5061) [Bug] Model runtime: test_gpu_execute lock test fails on a single-GPU CUDA host `needs-acceptance` `wg/router-models-inference-runtime`
- [#5057](https://github.com/vllm-project/semantic-router/issues/5057) [Bug] Contrastive jailbreak classifier produces false positives for benign phrase mentions `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5036](https://github.com/vllm-project/semantic-router/issues/5036) [Bug] System One: a full worker pool answers 503 systemone_unavailable instead of 429 overloaded `bug` `wg/router-models-inference-runtime`
- [#5004](https://github.com/vllm-project/semantic-router/issues/5004) [Feature] Model runtime: Decision 3.0 content caches and shared media passes under batching `enhancement` `wg/router-models-inference-runtime`
- [#5052](https://github.com/vllm-project/semantic-router/issues/5052) Verify evals on Papers with Code `needs-acceptance`
- [#5043](https://github.com/vllm-project/semantic-router/issues/5043) [Bug] llm_timeout_seconds silently truncates fractional values, ignoring sub-second classifier timeouts `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5041](https://github.com/vllm-project/semantic-router/issues/5041) [Bug] Dashboard Model Hub is missing the vLLM Semantic Router catalog logo `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#5035](https://github.com/vllm-project/semantic-router/issues/5035) [Feature] CLI: a restart policy for the containers vllm-sr serve creates `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#5032](https://github.com/vllm-project/semantic-router/issues/5032) [Bug] Nested parallel skip hides run-wide token and cost ceilings `needs-acceptance` `wg/mom-routing`

#### 🔒 Closed Issues
- [#4890](https://github.com/vllm-project/semantic-router/issues/4890) [Docs] Document the conversation-resolution gate in the merge-queue troubleshooting list
- [#4943](https://github.com/vllm-project/semantic-router/issues/4943) [Bug] Preset decision answers skip the confidence and probability bounds the other answer types get
- [#4924](https://github.com/vllm-project/semantic-router/issues/4924) [Bug] Decision 3.0 accepts GPUs without native BF16 support
- [#4881](https://github.com/vllm-project/semantic-router/issues/4881) [Docs] Document the merge-queue freeze rule in AGENTS.md
- [#4893](https://github.com/vllm-project/semantic-router/issues/4893) [Bug] Chat to Anthropic request translation writes empty text blocks for empty string content
- [#5003](https://github.com/vllm-project/semantic-router/issues/5003) [Feature] Router: read a native System One request without scanning its media
- [#4996](https://github.com/vllm-project/semantic-router/issues/4996) [Feature] Model runtime: read Decision 3.0 images once under the approximate profiles
- [#4845](https://github.com/vllm-project/semantic-router/issues/4845) [Bug] Shadow dispatch still mirrors a request the router rejected with an immediate error
- [#5036](https://github.com/vllm-project/semantic-router/issues/5036) [Bug] System One: a full worker pool answers 503 systemone_unavailable instead of 429 overloaded
- [#5004](https://github.com/vllm-project/semantic-router/issues/5004) [Feature] Model runtime: Decision 3.0 content caches and shared media passes under batching

_Quiet today: SGLang, Ollama_

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*