# 📡 AI Ecosystem Digest — 2026-11-04

> Generated 2026-11-04 02:56 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 154,443 | 29 | 0 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 133,038 | 23 | 1 | 50 | 2 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,709 | 0 | 0 | 5 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,341 | 10 | 11 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 224,380 | 16 | 33 | 11 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,984 | 29 | 12 | 10 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 393,871 | 156 | 153 | 113 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 260,276 | 25 | 3 | 2 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 96,254 | 45 | 28 | 66 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,429 | 17 | 22 | 32 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 133,303 | 11 | 13 | 35 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 185,828 | 10 | 3 | 3 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 62,653 | 43 | 21 | 47 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,029 | 17 | 12 | 83 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,180 | 1 | 2 | 4 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,389 | 13 | 9 | 4 | 0 |

---

## ✨ Highlights

- **Claude Code** released [v2.1.318](https://github.com/anthropics/claude-code/releases/tag/v2.1.318) featuring updates to its functionality.
- **OpenAI Codex** published multiple releases including [rust-v0.168.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.1) and [libcap-v2.75](https://github.com/openai/codex/releases/tag/libcap-v2.75) enhancing its capabilities.
- **OpenClaw** released [v2026.10.10](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10) addressing various fixes and optimizations.
- A pivotal issue reported in **OpenAI Codex** highlights a costly [system failure](https://github.com/openai/codex/issues/59060) due to a reboot directive, attracting significant attention with 85 comments.
- **Qwen Code** faced multiple critical CI failures with issues like [E2E Tests](https://github.com/QwenLM/qwen-code/issues/16219) gaining considerable traction, evident with 11 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 154,443 · **Open issues:** 16,343 · **Last push:** 2h ago

On November 4, 2026, Claude Code released version 2.1.318, introducing several key features, including a record of user responses when enabling modifications and the addition of the `assume_role` function for AWS account integration. This version also includes an `effort` option on mod's `$.model.fork`, allowing low-effort side tasks to run concurrently. There were no merged pull requests in the last 24 hours, but several new issues were reported, notably a bug (#107009) where idle sessions on macOS consume significant CPU resources without being terminated. Additionally, users reported problems with the code tab sessions in desktop applications and difficulties with account management procedures.

#### 🚀 New Releases
- [v2.1.318](https://github.com/anthropics/claude-code/releases/tag/v2.1.318) v2.1.318

#### 🐛 New Issues
- [#107009](https://github.com/anthropics/claude-code/issues/107009) [BUG] macOS desktop: idle Claude Code session processes each use ~1 CPU core (system time, lock/yield spin) and are never reaped — v2.1.309 `bug` `platform:macos` `perf:cpu` `area:desktop` 💬1
- [#107102](https://github.com/anthropics/claude-code/issues/107102) [BUG] Claude Desktop 4.16336.0 (macOS): Code tab sessions no longer get the Artifact tool, so Design artifacts can't be created `bug` `platform:macos` `area:tools` `regression` 💬1
- [#107119](https://github.com/anthropics/claude-code/issues/107119) Claude Code login: account managed on the web, but the working Claude keeps the old (cancelled) account — and the error message points the wrong way `enhancement` `platform:windows` `area:auth` `platform:vscode`
- [#107118](https://github.com/anthropics/claude-code/issues/107118) [Bug] Claude gives incomplete time estimates, ends turns before starting next step, and rationalizes errors `bug` `platform:windows` `area:model`
- [#107117](https://github.com/anthropics/claude-code/issues/107117) [DOCS] MCP description and instructions limits are counted in UTF-16 code units, not characters `bug` `documentation` `area:mcp` `area:docs`
- [#107116](https://github.com/anthropics/claude-code/issues/107116) [Bug] UI spams "Goal not yet met" status repeatedly, making scrollback hard and possibly wasting tokens `bug` `platform:linux` `area:tui` `area:core`
- [#107115](https://github.com/anthropics/claude-code/issues/107115) [GitHub integration] `bug` `github-integration`
- [#107114](https://github.com/anthropics/claude-code/issues/107114) VS Code extension login fails in GitHub Codespaces (browser, github.dev) `bug` `area:auth` `area:ide` `platform:vscode`
- [#107113](https://github.com/anthropics/claude-code/issues/107113) [Bug] Claude refuses to delete its own GitLab comment on explicit user request `bug` `platform:macos` `area:model` `area:permissions`
- [#107112](https://github.com/anthropics/claude-code/issues/107112) [GitHub integration] `bug` `area:auth` `area:cowork` `github-integration`
- [#107111](https://github.com/anthropics/claude-code/issues/107111) [BUG] HTTP MCP: valid tools/list result (protocol 2026-07-28) thrown as "Error POSTing to endpoint"; /mcp shows "tools fetch failed · connected" `bug` `has repro` `platform:macos` `area:mcp`
- [#107110](https://github.com/anthropics/claude-code/issues/107110) [BUG] OSC 8 hyperlink href swallows full-width CJK punctuation that follows a URL `bug` `platform:macos` `platform:linux` `area:tui`
- [#107109](https://github.com/anthropics/claude-code/issues/107109) [Bug] Assistant message fabricates third-party privilege-escalation request and misattributes its origin `bug` `has repro` `platform:macos` `area:model`
- [#107108](https://github.com/anthropics/claude-code/issues/107108) [BUG] Remote Control (mobile): concurrent AskUserQuestion calls are shown in reverse order `bug` `has repro` `area:tools` `platform:android`
- [#107107](https://github.com/anthropics/claude-code/issues/107107) [GitHub integration] `bug` `needs-info` `github-integration`
- [#107106](https://github.com/anthropics/claude-code/issues/107106) Question: subscription limits for headless (-p / Agent SDK) use, and whether setting CLAUDE_CODE_ENTRYPOINT is allowed `question` `area:cost` `area:auth`
- [#107105](https://github.com/anthropics/claude-code/issues/107105) It says You've hit your 5-hour limit · resets 6:20pm... `bug` `platform:windows` `area:cost` `platform:vscode`
- [#107104](https://github.com/anthropics/claude-code/issues/107104) [BUG] Custom theme overrides are ignored for inline code in replies `bug` `has repro` `platform:linux` `area:tui`
- [#107103](https://github.com/anthropics/claude-code/issues/107103) It would be nice if I could give Claude a free pass to do whatever he sees fit.… `enhancement` `area:permissions`
- [#107101](https://github.com/anthropics/claude-code/issues/107101) [GitHub integration] `bug` `platform:web` `github-integration`
- [#107100](https://github.com/anthropics/claude-code/issues/107100) Task refusal other tools allow. `bug` `platform:windows` `area:model`
- [#107099](https://github.com/anthropics/claude-code/issues/107099) [FEATURE] Usage display when clicking the model selection button, like that in Antigravity extension in VS code `enhancement` `area:cost` `platform:vscode` `area:vscode`
- [#107097](https://github.com/anthropics/claude-code/issues/107097) [BUG] Claude Desktop (macOS): rootfs.img is half zeros but fully allocated, wastes ~5GB `bug` `has repro` `platform:macos` `area:cowork`
- [#107098](https://github.com/anthropics/claude-code/issues/107098) [BUG] Mouse escape sequences leak into prompt input as text `bug` `has repro` `platform:windows` `area:tui`
- [#107096](https://github.com/anthropics/claude-code/issues/107096) [BUG] Published mod types reject the $.model.fork effort API announced in v2.1.318 `bug` `has repro` `area:plugins`
- [#107095](https://github.com/anthropics/claude-code/issues/107095) [Bug] Cyber classifier false positive on authorized web pentest prompt `bug` `platform:windows` `area:model`
- [#107094](https://github.com/anthropics/claude-code/issues/107094) [BUG] Session titles set by a UserPromptSubmit hook never sync to app-hosted sessions (desktop / mobile) `bug` `has repro` `platform:windows` `area:hooks`
- [#107093](https://github.com/anthropics/claude-code/issues/107093) [FEATURE] Plan approval: "clear context" option and `showClearContextOnPlanAccept` are terminal-only (missing on Desktop and mobile) `enhancement` `area:desktop`
- [#107092](https://github.com/anthropics/claude-code/issues/107092) [FEATURE] Claude Android app: delete Remote Control sessions, not only archive them `enhancement` `platform:android`

### OpenAI Codex (`openai/codex`)

**Stars:** 133,038 · **Open issues:** 26,298 · **Last push:** <1h ago

On November 4, 2026, the OpenAI Codex released version rust-v0.168.0-alpha.1 and the unmodified libcap 2.75 source archive, which is used for building Bubblewrap in Codex's Linux musl packages. Significant merged pull requests included improvements to skill discovery that respect filesystem permissions and the addition of outcome metrics for skill reads and installation listings. The introduction of directional conversation focus shortcuts in workspace mode also stands out as a user experience enhancement. However, a particularly concerning new issue emerged regarding severe performance regression in Codex that resulted in unusually long task durations and abnormal weekly quota depletion, drawing significant attention from users.

#### 🚀 New Releases
- [rust-v0.168.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.1) 0.168.0-alpha.1
- [libcap-v2.75](https://github.com/openai/codex/releases/tag/libcap-v2.75) libcap 2.75 source archive

#### ✅ Merged PRs
- [#59299](https://github.com/openai/codex/pull/59299) Switch rusty_v8 to the openai-oss-forks repository
- [#59295](https://github.com/openai/codex/pull/59295) Add outcome metrics for skill reads and installation listings
- [#59291](https://github.com/openai/codex/pull/59291) Respect turn filesystem permissions during executor skill discovery
- [#59287](https://github.com/openai/codex/pull/59287) Add directional conversation focus shortcuts in workspace mode
- [#59282](https://github.com/openai/codex/pull/59282) Enable unified image budgeting by default
- [#59280](https://github.com/openai/codex/pull/59280) Respect filesystem permissions when discovering repository skills
- [#59279](https://github.com/openai/codex/pull/59279) Preserve filesystem authority when loading skills
- [#59278](https://github.com/openai/codex/pull/59278) Enforce current filesystem permissions when reading repository skills
- [#59275](https://github.com/openai/codex/pull/59275) Support API workload identity authentication
- [#59272](https://github.com/openai/codex/pull/59272) Preserve requested approval reviewers across policy overrides
- [#59268](https://github.com/openai/codex/pull/59268) Use measured durations to budget uploaded audio
- [#59263](https://github.com/openai/codex/pull/59263) Normalize loading bullets in the safety recourse snapshot test
- [#59260](https://github.com/openai/codex/pull/59260) Report auto-review overhead in turn critical-path analytics
- [#59258](https://github.com/openai/codex/pull/59258) Refactor sandbox request preparation by backend
- [#59257](https://github.com/openai/codex/pull/59257) Preserve prompt contrast when terminal colors are unavailable
- [#59256](https://github.com/openai/codex/pull/59256) Add OSC 777 notifications and improve approval notification text
- [#59255](https://github.com/openai/codex/pull/59255) Bind reusable backend clients to runtime authentication
- [#59254](https://github.com/openai/codex/pull/59254) Add stdin bearer authentication for exec-server registration
- [#59253](https://github.com/openai/codex/pull/59253) Clarify TUI reconnect status for HTTP 429 stream errors
- [#59251](https://github.com/openai/codex/pull/59251) Track automatic review overhead in critical-path durations
- [#59250](https://github.com/openai/codex/pull/59250) Expand Windows deny-read globs without invoking ripgrep
- [#59245](https://github.com/openai/codex/pull/59245) Expand per-turn critical path capture and split inference timing
- [#59242](https://github.com/openai/codex/pull/59242) Set seven-day garbage collection ages for Bazel caches
- [#59240](https://github.com/openai/codex/pull/59240) Mark deny-path parent directories created by the Windows MXC launcher
- [#59239](https://github.com/openai/codex/pull/59239) Honor Guardian's additional-context setting for tool outputs
- [#59238](https://github.com/openai/codex/pull/59238) Register the Guardian additional-context feature flag
- [#59237](https://github.com/openai/codex/pull/59237) Budget retained file audio during remote compaction
- [#59234](https://github.com/openai/codex/pull/59234) Enable uploaded audio with durable rejection recovery
- [#59233](https://github.com/openai/codex/pull/59233) Use resolved filesystem permissions in Windows sandbox policies
- [#59232](https://github.com/openai/codex/pull/59232) Suppress macOS warnings in the V8 libc++ Bazel build
- [#59231](https://github.com/openai/codex/pull/59231) Fix test fixtures for Bazel sandboxes and Windows voice runtimes
- [#59228](https://github.com/openai/codex/pull/59228) Handle `budget_reached` as a terminal session budget error
- [#59227](https://github.com/openai/codex/pull/59227) Preserve installer stderr when releasing the install lock
- [#59225](https://github.com/openai/codex/pull/59225) Revalidate Guardian denials when parent authorization changes
- [#59219](https://github.com/openai/codex/pull/59219) Use Bazel's zstd library for zstd-sys
- [#59217](https://github.com/openai/codex/pull/59217) Use the public managed-features constructor in the guardian config test
- [#59208](https://github.com/openai/codex/pull/59208) Add shortcuts to focus the main composer and side conversation
- [#59201](https://github.com/openai/codex/pull/59201) Add cloud client message submission and turn interruption
- [#59192](https://github.com/openai/codex/pull/59192) Resolve saved Daybreak preferences against advertised model programs
- [#59177](https://github.com/openai/codex/pull/59177) Wire shared runtime authentication through threads and API clients
- [#59167](https://github.com/openai/codex/pull/59167) Move agent message board cleanup into the app server
- [#59162](https://github.com/openai/codex/pull/59162) Move agent message board host integration to app-server
- [#59161](https://github.com/openai/codex/pull/59161) Clarify token-count and screen-ownership arguments in tests
- [#59159](https://github.com/openai/codex/pull/59159) Move Guardian unit tests into their owning crates
- [#59154](https://github.com/openai/codex/pull/59154) Expose thread APIs for message board access
- [#59139](https://github.com/openai/codex/pull/59139) Route message-board notifications through agent mailboxes
- [#59136](https://github.com/openai/codex/pull/59136) Parse Guardian review responses once
- [#59131](https://github.com/openai/codex/pull/59131) Clarify test failures and annotate a backend registration invariant
- [#59130](https://github.com/openai/codex/pull/59130) Add a shortcut to hide the focused side conversation pane
- [#59125](https://github.com/openai/codex/pull/59125) Add context to Guardian test setup failures

#### 🐛 New Issues
- [#59060](https://github.com/openai/codex/issues/59060) Told to reboot a server, it destroyed systemd, destroyed containers, ran random scripts, cost me $10,000+ `bug` `model-behavior` `CLI` 💬85
- [#59206](https://github.com/openai/codex/issues/59206) Regression: Windows Codex CLI browser access previously worked; now fails `bug` `windows-os` `exec` `CLI` 💬3
- [#59274](https://github.com/openai/codex/issues/59274) Codex for Mac reports usage exhausted and will not connect `bug` `rate-limits` `app` `connectivity` 💬3
- [#59262](https://github.com/openai/codex/issues/59262) Severe Codex performance regression: 30–90 minute tasks and abnormal weekly quota depletion `bug` `model-behavior` `windows-os` `rate-limits` 💬3
- [#59300](https://github.com/openai/codex/issues/59300) [Windows CLI] Previously working Chrome access now fails with browser access host unavailable; Desktop still works `bug` `windows-os` `CLI` `browser` 💬2
- [#59218](https://github.com/openai/codex/issues/59218) Windows 11: Computer Use geometry unavailable after readable WinForms state; request supported target/capture diagnostics `bug` `windows-os` `app` `computer-use` 💬2
- [#59301](https://github.com/openai/codex/issues/59301) macOS: severe typing lag in dot conversations recurs after dot recreation; same dot is responsive in Chrome `bug` `app` `performance` `dots` 💬1
- [#59296](https://github.com/openai/codex/issues/59296) Add a dedicated CODE_OF_CONDUCT.md with clear reporting and enforcement for abusive behavior `documentation` 💬1
- [#59297](https://github.com/openai/codex/issues/59297) [macOS/Windows Desktop] New Codex Cloud conversations work in Chrome but never appear in desktop sidebar `bug` `app` `session` 💬1
- [#59106](https://github.com/openai/codex/issues/59106) [Mobile] Add Read Aloud (text-to-speech) for Codex assistant responses `enhancement` `iOS` 💬1
- [#59290](https://github.com/openai/codex/issues/59290) read_thread single oversized turn blocks complete history; exposed tool lacks within-turn pagination `bug` `app` `app-server` 💬1
- [#59289](https://github.com/openai/codex/issues/59289) App Server keeps using a closed stdio MCP connection after `thread/resume` `bug` `mcp` `connectivity` `app-server` 💬1
- [#59288](https://github.com/openai/codex/issues/59288) [Feedback] Codex persists with unproductive plans instead of clarifying intent, replanning, or stopping `enhancement` `model-behavior` 💬1
- [#59283](https://github.com/openai/codex/issues/59283) Codex App refuses Sketch MCP write operations while Trae succeeds `bug` `model-behavior` `mcp` `app` 💬1
- [#59285](https://github.com/openai/codex/issues/59285) [Windows desktop 26.1029.7803.0] Opening an idle Unity workspace repeatedly launches Git/Git LFS subprocesses (view-dependent) `bug` `code-review` `windows-os` `app` 💬1
- [#59281](https://github.com/openai/codex/issues/59281) Codex Browser Use: clarify recovery after blocked internal new-tab URL `documentation` `app` `browser` 💬1
- [#59277](https://github.com/openai/codex/issues/59277) [Windows] XLSX/PPTX submission remains stuck after update to 26.1027.51404; local-path reads work `bug` `windows-os` `app` 💬1
- [#59276](https://github.com/openai/codex/issues/59276) [Linux][Chrome] Page actions fail immediately with undefined timeoutMs; discovery works (Desktop 26.1013.31256) `bug` `tool-calls` `app` `browser` 💬1
- [#59298](https://github.com/openai/codex/issues/59298) [macOS] Codex GPU service spikes to 175% CPU / 75% GPU and briefly makes desktop almost unusable `bug` `app` `performance`
- [#59294](https://github.com/openai/codex/issues/59294) Codex Desktop on Windows shows “No hooks found” for a trusted workspace with project hooks `bug` `windows-os` `app` `hooks`
- [#59293](https://github.com/openai/codex/issues/59293) Let worktree option activated clear in the composer `enhancement` `app`
- [#59286](https://github.com/openai/codex/issues/59286) Android Remote enrollment fails before browser authentication on software-only AndroidKeyStore device `bug` `auth` `app` `remote`
- [#59284](https://github.com/openai/codex/issues/59284) Android Codex Is Missing “Files” and “Changes,” Preventing Workspace File Browsing and Review `enhancement` `remote`

#### 🔒 Closed Issues
- [#32729](https://github.com/openai/codex/issues/32729) I’d like to suggest two small but useful features for Codex.

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,709 · **Open issues:** 767 · **Last push:** 1h ago

On November 4, 2026, Gemini CLI released version v0.67.0-nightly.20261104.g89e9d25d6, which includes several crucial fixes. Notably, it addresses stream failures during extension release downloads, preserves explicit model handling for gemini-2.5-flash in dynamic model resolution, and enhances support for SubagentStop event mapping in hook definitions. Additionally, merged pull requests from this period further solidified the tool's stability, with updates to ensure proper history replay handling during ACP sessions and implementing rootless podman support using the --userns=keep-id flag. There were no new issues reported today, marking a routine yet productive day for the project.

#### 🚀 New Releases
- [v0.67.0-nightly.20261104.g89e9d25d6](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261104.g89e9d25d6) Release v0.67.0-nightly.20261104.g89e9d25d6

#### ✅ Merged PRs
- [#30118](https://github.com/google-gemini/gemini-cli/pull/30118) fix(sandbox): supply --userns=keep-id for rootless podman
- [#30112](https://github.com/google-gemini/gemini-cli/pull/30112) fix(cli): await history replay before responding to ACP session/load
- [#30111](https://github.com/google-gemini/gemini-cli/pull/30111) fix(hooks): support SubagentStop event mapping and merge hook definitions
- [#30057](https://github.com/google-gemini/gemini-cli/pull/30057) fix(core): preserve explicit gemini-2.5-flash model in dynamic model resolution
- [#30100](https://github.com/google-gemini/gemini-cli/pull/30100) fix(cli): handle stream failures during extension release downloads

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,341 · **Open issues:** 2,186 · **Last push:** 3h ago

On November 4, 2026, GitHub Copilot CLI released version v1.0.106-7, which includes significant updates such as inline image rendering in Rex terminals, a new /code command for opening the current session in VS Code, and a Fusion tier setting in the configuration. Additionally, the built-in browser-use plugin was upgraded to 0.1.0, enhancing setup and integration, while Claude's token estimation was improved for better context budgeting. There were no merged pull requests reported in the last 24 hours; however, a notable new issue was raised regarding the managed settings fetch failing with the error "model: Expected string, received object" in version v1.0.105 on macOS. Other issues reported include complaints about the "connected connectors" failing to load and a 422 validation error from the managed settings endpoint that began affecting users after November 3.

#### 🚀 New Releases
- [v1.0.106-7](https://github.com/github/copilot-cli/releases/tag/v1.0.106-7) 1.0.106-7
- [v1.0.106-6](https://github.com/github/copilot-cli/releases/tag/v1.0.106-6) 1.0.106-6

#### 🐛 New Issues
- [#5342](https://github.com/github/copilot-cli/issues/5342) Managed settings fetch fails on every launch: "model: Expected string, received object" (v1.0.105, macOS) `triage` 💬1
- [#5347](https://github.com/github/copilot-cli/issues/5347) "Connected Connectors could not be loaded" on every interactive session, but succeeds in headless -p mode; underlying error only logged at debug level `triage` 💬1
- [#5346](https://github.com/github/copilot-cli/issues/5346) Managed settings endpoint returns 422 Validation Failed since 2026-11-03 (was working 2026-11-02, same CLI version) `triage` 💬1
- [#5349](https://github.com/github/copilot-cli/issues/5349) Support opening reports and plans when there are multiple in a session `triage`
- [#5348](https://github.com/github/copilot-cli/issues/5348) Add image paste support to ask_user `triage`
- [#5345](https://github.com/github/copilot-cli/issues/5345) read_agent returns nothing of a background agent's work when it failed, or after --resume `triage`
- [#5344](https://github.com/github/copilot-cli/issues/5344) OTel file exporter: option to stop writing metric records (file grows ~50-70 MB/day) `triage`
- [#5343](https://github.com/github/copilot-cli/issues/5343) BYOK: providers.json is ignored without COPILOT_PROVIDER_BASE_URL — no file-based activation; --model silently substitutes a subscription model `triage`
- [#5341](https://github.com/github/copilot-cli/issues/5341) CLI hangs at startup/resume after "Managed MCP policy application exceeded its settings settlement deadline" `triage`
- [#5340](https://github.com/github/copilot-cli/issues/5340) [Windows] PowerShell tool guidance: prefer -LiteralPath for file paths (brackets are wildcards with -Path) `triage`

#### 🔒 Closed Issues
- [#1148](https://github.com/github/copilot-cli/issues/1148) Copilot-cli changes all files it touches to have CRLF line endings even when the original file has LF line endings
- [#4335](https://github.com/github/copilot-cli/issues/4335) [ACP] toolCall.title contains high-level summary instead of executable command, hiding shell command in client approval modals
- [#5115](https://github.com/github/copilot-cli/issues/5115) ACP: /rename reports success but doesn't rename the session
- [#4555](https://github.com/github/copilot-cli/issues/4555) ACP: session/prompt unconditionally aborts the session, cancelling all running background sub-agents (interactive TUI does not)
- [#3942](https://github.com/github/copilot-cli/issues/3942) `copilot --acp` does not work with `--agent`
- [#2826](https://github.com/github/copilot-cli/issues/2826) /experimental ask-user should render Markdown tables correctly
- [#4536](https://github.com/github/copilot-cli/issues/4536) MCP tool result image content blocks are not surfaced to the model
- [#5293](https://github.com/github/copilot-cli/issues/5293) ACP: session/prompt response is held until an async bash shell exits, so clients appear stuck
- [#5206](https://github.com/github/copilot-cli/issues/5206) Explicit-approval requests silently denied in resumed sessions: 'could not request permission from user' / orchestrator 'permission request denied: unusable session working directory'
- [#5244](https://github.com/github/copilot-cli/issues/5244) Sub-agent detail view in /tasks does not allow expanding tool calls
- [#3912](https://github.com/github/copilot-cli/issues/3912) LSP Java (jdtls) on Windows: position-based ops return "No language server available" while workspaceSymbol works

### OpenCode (`anomalyco/opencode`)

**Stars:** 224,380 · **Open issues:** 3,968 · **Last push:** <1h ago

On November 4, 2026, there were no new releases in OpenCode, but several important pull requests were merged, including a refactor to run every benchmark with strobe (#60880) and enhancements to allow GUI plugins to render and add actions to code blocks (#61533). Key fixes included resolving an issue with location snapshots opened through a symlink (#61546) and making URLs clickable in various prompts and errors (#61514). Additionally, a notable new issue was reported regarding an OAuth Callback loopback connection refused on Linux during ChatGPT sign-in (#61503), drawing significant attention from the community.

#### ✅ Merged PRs
- [#60880](https://github.com/anomalyco/opencode/pull/60880) refactor: run every benchmark with strobe
- [#61546](https://github.com/anomalyco/opencode/pull/61546) fix(core): capture snapshots for a Location opened through a symlink
- [#61545](https://github.com/anomalyco/opencode/pull/61545) test(session-ui): ignore the story's own favicon in the favicon request check
- [#61538](https://github.com/anomalyco/opencode/pull/61538) fix(session-ui): let triple click select across link icons
- [#61533](https://github.com/anomalyco/opencode/pull/61533) feat(app): let GUI plugins render and add actions to code blocks
- [#61527](https://github.com/anomalyco/opencode/pull/61527) feat(plugin): add settings rows, selects and menu rows to ctx.ui
- [#61496](https://github.com/anomalyco/opencode/pull/61496) fix(core): expand ~ in a local MCP server's cwd
- [#61514](https://github.com/anomalyco/opencode/pull/61514) fix(app): make URLs in questions, MCP prompts and errors clickable
- [#61517](https://github.com/anomalyco/opencode/pull/61517) docs(plugin): show GUI plugins where session usage data lives
- [#61518](https://github.com/anomalyco/opencode/pull/61518) fix(cli): keep WebSocket upgrades working in the compiled binary
- [#61509](https://github.com/anomalyco/opencode/pull/61509) feat(app): let GUI plugin panels size the side region

#### 🐛 New Issues
- [#61503](https://github.com/anomalyco/opencode/issues/61503) OAuth Callback loopback connection refused / Timeout on Linux during ChatGPT Sign-in `pending close` `triaging` 💬5
- [#61504](https://github.com/anomalyco/opencode/issues/61504) [FEATURE]: Timeouts for permission requests 💬3
- [#61549](https://github.com/anomalyco/opencode/issues/61549) iOS receives generic push notifications. Secure notification pairing never completes. 💬2
- [#61425](https://github.com/anomalyco/opencode/issues/61425) Settled assistant messages regress to running when session.step.started is re-delivered in the solid client reducer `reproduced` 💬2
- [#61441](https://github.com/anomalyco/opencode/issues/61441) "Always allow" never matches shell commands that start with an env assignment or a redirect `reproduced` 💬2
- [#61359](https://github.com/anomalyco/opencode/issues/61359) tui: cold load of a UNC location returns 503 for agent/model/provider, prompt cannot be sent `reproduced` 💬2
- [#61382](https://github.com/anomalyco/opencode/issues/61382) compaction: hung summarizer request has no timeout, and a truncated stream is saved as a completed summary 💬2
- [#61519](https://github.com/anomalyco/opencode/issues/61519) Invalid opencode/openai-compatible-chat stream event only in Big Pickle model `triaging` 💬2
- [#61438](https://github.com/anomalyco/opencode/issues/61438) 有问题 `pending close` `triaging` 💬2
- [#61515](https://github.com/anomalyco/opencode/issues/61515) Question (there was no category to ask questions) `pending close` `triaging` 💬2
- [#61510](https://github.com/anomalyco/opencode/issues/61510) free plan usage gone instantly. `pending close` `triaging` 💬2
- [#61511](https://github.com/anomalyco/opencode/issues/61511) agent: Crouton Alpha stalls mid-turn and does not continue next steps `triaging` 💬2
- [#61542](https://github.com/anomalyco/opencode/issues/61542) 限额问题严重，求解除限额 `pending close` `triaging` 💬1
- [#61540](https://github.com/anomalyco/opencode/issues/61540) 做一个会话索引放到界面右侧 `pending close` `triaging` 💬1
- [#61539](https://github.com/anomalyco/opencode/issues/61539) 使用限制问题 `pending close` `triaging` 💬1
- [#61535](https://github.com/anomalyco/opencode/issues/61535) Getting warning to update, but running latest version `pending close` `triaging` 💬1

#### 🔒 Closed Issues
- [#59178](https://github.com/anomalyco/opencode/issues/59178) Free Models not available for more than 5 days without any free quota usage
- [#58756](https://github.com/anomalyco/opencode/issues/58756) Free usage exceeded. Subscribe to Go (but its even worse now + multiple bugs)
- [#59857](https://github.com/anomalyco/opencode/issues/59857) always showing You've used today's free messages. They reset at 5:58 AM.
- [#60124](https://github.com/anomalyco/opencode/issues/60124) Free message quota reset time keeps moving forward (Oct 29 → Oct 30) without any usage
- [#60149](https://github.com/anomalyco/opencode/issues/60149) OpenCode free-tier quota remains blocked after reset
- [#58455](https://github.com/anomalyco/opencode/issues/58455) Flint 40B only sent 12 requests to reach free limit
- [#59682](https://github.com/anomalyco/opencode/issues/59682) Usage limits reached immediately after 2 prompts
- [#60990](https://github.com/anomalyco/opencode/issues/60990) Free-tier BigPickle quota is exhausted almost instantly (1–5 min / ~5 messages), forcing a 24-hour cooldown
- [#59690](https://github.com/anomalyco/opencode/issues/59690) Usage limits reached immediately after 2 prompts - Need Attention
- [#59809](https://github.com/anomalyco/opencode/issues/59809) Title: [Bug] Unexpected Rate Limit Triggered at 25% Usage (Session Blocked After 4 Messages)
- [#59829](https://github.com/anomalyco/opencode/issues/59829) what?It was over before it even started.
- [#59867](https://github.com/anomalyco/opencode/issues/59867) OPENCODE KEEP "FREE LIMIT EXCEED"
- [#59888](https://github.com/anomalyco/opencode/issues/59888) reset message not work properly
- [#60092](https://github.com/anomalyco/opencode/issues/60092) You've used today's free messages. 升级到V2后，免费额度变少了？怎么回事？用的不畅快啊
- [#60232](https://github.com/anomalyco/opencode/issues/60232) free limit
- [#61503](https://github.com/anomalyco/opencode/issues/61503) OAuth Callback loopback connection refused / Timeout on Linux during ChatGPT Sign-in
- [#44162](https://github.com/anomalyco/opencode/issues/44162) Improve WebSocket reconnection reliability
- [#58751](https://github.com/anomalyco/opencode/issues/58751) free tier: FreeUsageLimitError depends on request size — long sessions always fail while new sessions succeed
- [#59911](https://github.com/anomalyco/opencode/issues/59911) Bug with the limit
- [#60409](https://github.com/anomalyco/opencode/issues/60409) OpenCode falsely claiming no messages left when reset has literally just happened
- [#60426](https://github.com/anomalyco/opencode/issues/60426) Usage limit hit fast
- [#61157](https://github.com/anomalyco/opencode/issues/61157) [FEATURE]:Thread for updates that anxious users can subscribe to
- [#61316](https://github.com/anomalyco/opencode/issues/61316) Free tier quota resets incorrectly despite no usage
- [#60994](https://github.com/anomalyco/opencode/issues/60994) [FEATURE]:
- [#60989](https://github.com/anomalyco/opencode/issues/60989) plugin: ReleaseError (metadata missing) aborts plugin load when multiple clients start together
- [#60996](https://github.com/anomalyco/opencode/issues/60996) Cannot connect to API: getaddrinfo ENOTFOUND opencode.ai
- [#61519](https://github.com/anomalyco/opencode/issues/61519) Invalid opencode/openai-compatible-chat stream event only in Big Pickle model
- [#61438](https://github.com/anomalyco/opencode/issues/61438) 有问题
- [#61515](https://github.com/anomalyco/opencode/issues/61515) Question (there was no category to ask questions)
- [#61510](https://github.com/anomalyco/opencode/issues/61510) free plan usage gone instantly.
- [#60988](https://github.com/anomalyco/opencode/issues/60988) [FEATURE]:
- [#54454](https://github.com/anomalyco/opencode/issues/54454) Snapshots fail for Locations opened through symlinked paths
- [#61187](https://github.com/anomalyco/opencode/issues/61187) [FEATURE]: Extensible Markdown code-block actions for GUI plugins

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,984 · **Open issues:** 2,123 · **Last push:** <1h ago

On November 4, 2026, Qwen Code experienced a routine maintenance day with no new releases. Among the significant merged pull requests, key improvements include #16225 and #16221, which enhance performance by allowing session commands and harness admission checks to bypass the tenant lock. Additionally, #16231 scopes the poll cursor file to the workspace, and #16224 provides a scratch runtime directory for the ACP parity rig. However, the day was marked by several notable issues, particularly #16219, which reports a failure in the main CI during E2E tests involving local extension installation and command verification. Other pressing issues include problems with the Managed Agent gate and E2E test timeouts, indicating ongoing challenges with system stability.

#### ✅ Merged PRs
- [#16067](https://github.com/QwenLM/qwen-code/pull/16067) fix(ci): resume linter archive downloads
- [#16254](https://github.com/QwenLM/qwen-code/pull/16254) test(integration): keep ACP parity runtime state out of the workspace (#16251)
- [#16260](https://github.com/QwenLM/qwen-code/pull/16260) fix(ci): drop the healthy-default apt gate and prefer the VPC intranet mirror
- [#16211](https://github.com/QwenLM/qwen-code/pull/16211) fix(ci): run desktop smoke headless on rpm roots without Xvfb
- [#16225](https://github.com/QwenLM/qwen-code/pull/16225) perf(managed-agent): take session commands off the tenant lock
- [#16221](https://github.com/QwenLM/qwen-code/pull/16221) perf(managed-agent): take harness admission checks off the tenant lock
- [#16231](https://github.com/QwenLM/qwen-code/pull/16231) fix(channels): scope the poll cursor file to the workspace
- [#16224](https://github.com/QwenLM/qwen-code/pull/16224) test(integration): give the ACP parity rig a scratch runtime directory
- [#16240](https://github.com/QwenLM/qwen-code/pull/16240) test(managed-agent): refresh concurrent membership snapshot
- [#16216](https://github.com/QwenLM/qwen-code/pull/16216) refactor(managed-agent): narrow EmbeddedRuntimeBroker to SessionQueryStore

#### 🐛 New Issues
- [#16219](https://github.com/QwenLM/qwen-code/issues/16219) Main CI failed: E2E Tests — cli/extensions-install.test.ts > installs a local extension, verifies a command, and updates it (+2 more) `status/needs-triage` `type/bug` 💬11
- [#16220](https://github.com/QwenLM/qwen-code/issues/16220) Main CI failed: Managed Agent gate — HostedWorkspaceConcurrencyIT.independentSessionsExecuteAndHandBackOnlyTheirOwnMembership `status/needs-triage` `type/bug` 💬8
- [#16214](https://github.com/QwenLM/qwen-code/issues/16214) ci: E2E "sandbox:docker" leg hits its 60-minute cap on pool hosts that rebuild the sandbox image cold `priority/P1` `type/bug` `category/development` `scope/ci-cd` 💬7
- [#16234](https://github.com/QwenLM/qwen-code/issues/16234) perf(managed-agent): Managed Runtime worker idles at 91 MiB, mostly modules it never runs `priority/P2` `type/bug` `category/performance` `scope/memory-usage` 💬6
- [#16227](https://github.com/QwenLM/qwen-code/issues/16227) GitHub channel can silently skip a comment created at the exact poll-cursor boundary second `priority/P2` `type/bug` `category/integration` `daemon` 💬5
- [#16228](https://github.com/QwenLM/qwen-code/issues/16228) GitHub channel posts duplicate "failed to process" error comments when a transient failure is retried `priority/P3` `type/bug` `category/integration` `status/ready-for-agent` 💬5
- [#16209](https://github.com/QwenLM/qwen-code/issues/16209) [Feature Request] Add embedded browser preview / UI inspector to Qwen Code Desktop `priority/P3` `type/feature-request` `category/ui` `roadmap/platform-distribution` 💬3
- [#16207](https://github.com/QwenLM/qwen-code/issues/16207) bug(daemon): durable scheduled tasks silently die after daemon restart when their bound session has since disappeared (failed to rehydrate, no warning, no catch-up) `priority/P1` `type/bug` `category/core` `scope/session-management` 💬3
- [#16187](https://github.com/QwenLM/qwen-code/issues/16187) bug(core): Anthropic requests time out after 300s despite a longer configured API timeout `status/in-progress` `priority/P2` `type/bug` `category/core` 💬3
- [#16188](https://github.com/QwenLM/qwen-code/issues/16188) ci: bot workflow burst exhausts GITHUB_TOKEN rate limit, blocking unrelated CI jobs `priority/P1` `type/bug` `scope/github-actions` `scope/ci-cd` 💬3
- [#16259](https://github.com/QwenLM/qwen-code/issues/16259) 单条 user 消息被 system-reminder / memory catalog 撑到 60KB+，真实指令被埋在中段，模型按"没有任务"回应 `status/need-information` `priority/P2` `type/bug` `category/core` 💬2
- [#16249](https://github.com/QwenLM/qwen-code/issues/16249) [Windows][CUA 0.27.0] Bitdefender detects Gen:Variant.Barys.381847 in official x64 ZIP and denies access `priority/P1` `type/bug` `category/security` `scope/windows` 💬2
- [#16244](https://github.com/QwenLM/qwen-code/issues/16244) bug(core): Qwen2-VL, Qwen2.5-VL and QVQ models are treated as text-only when the catalog has no entry `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬2
- [#16243](https://github.com/QwenLM/qwen-code/issues/16243) bug(core): Hugging Face TGI context overflow errors are not recognized, so reactive compaction never runs `priority/P2` `type/bug` `category/core` `scope/token-management` 💬2
- [#16233](https://github.com/QwenLM/qwen-code/issues/16233) Docs: add a Bellows integration page beside Zed and JetBrains `priority/P3` `type/documentation` `category/integration` `scope/ide` 💬2
- [#16215](https://github.com/QwenLM/qwen-code/issues/16215) bug(core): message deletion fails with "lacks reliable identities" for every turn before a compression checkpoint written without promptIds `priority/P1` `type/bug` `category/core` `scope/web-shell` 💬2
- [#16213](https://github.com/QwenLM/qwen-code/issues/16213) [Bug] Conditional rule reminder injected in a subagent is silently skipped in the parent session `priority/P2` `type/bug` `category/core` `roadmap/subagents-tools` 💬2
- [#16208](https://github.com/QwenLM/qwen-code/issues/16208) Review request: #15635 (QQ channel proactive delivery) is merge-ready but stalled on two approvals `category/integration` `status/ready-for-human` `need-discussion` 💬2
- [#16204](https://github.com/QwenLM/qwen-code/issues/16204) docs(web-search): list Keenable as a keyless MCP web search option `priority/P3` `type/documentation` `category/integration` `scope/mcp` 💬2
- [#16202](https://github.com/QwenLM/qwen-code/issues/16202) web-shell: remaining managed-host follow-ups left open by #15928 `status/in-review` `priority/P2` `type/bug` `category/ui` 💬2
- [#16184](https://github.com/QwenLM/qwen-code/issues/16184) Auto-memory catalog pruning playbook for the >10K always-on-context warning + 2 product pitfalls `priority/P3` `type/feature-request` `category/core` `scope/token-management` 💬2
- [#16178](https://github.com/QwenLM/qwen-code/issues/16178) Image-input refusal doesn't say the setting was already correct, or that it needs a restart `priority/P3` `category/core` `scope/content-generation` `scope/settings` 💬2
- [#16251](https://github.com/QwenLM/qwen-code/issues/16251) Release Failed for v0.26.6-nightly.20261103.42aeddc6d7 on 2026-11-03 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#16248](https://github.com/QwenLM/qwen-code/issues/16248) Release Failed for v0.26.7 on 2026-11-03 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#16191](https://github.com/QwenLM/qwen-code/issues/16191) Main CI failed: Qwen Code CI — daemon/session/DaemonSessionProvider.test.tsx > … > does NOT stop reconnect on session_closed with reason "la… (+93 more) `status/needs-triage` `type/bug` 💬1
- [#16232](https://github.com/QwenLM/qwen-code/issues/16232) Release Failed for v0.26.7-preview.0 on 2026-11-03 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#16253](https://github.com/QwenLM/qwen-code/issues/16253) Main CI failed: SDK Java — HostedWorkspaceConcurrencyIT.independentSessionsExecuteAndHandBackOnlyTheirOwnMembership `status/needs-triage` `type/bug`
- [#16250](https://github.com/QwenLM/qwen-code/issues/16250) Main CI failed: E2E Tests — interactive/mid-turn-submit-interactive.test.ts > … > holds a slash command back mid-turn and runs it once th… `status/needs-triage` `type/bug`
- [#16189](https://github.com/QwenLM/qwen-code/issues/16189) Main CI failed: Managed Agent gate — HostedAutomationFaultGatesIT.fg11cHarnessCrashesNeverRunTwiceOnMySql `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#16063](https://github.com/QwenLM/qwen-code/issues/16063) VS Code companion spontaneously opens the extension's bundled generated-ui/main.js (Generated UI MCP server spawned as Electron GUI instead of Node)
- [#14746](https://github.com/QwenLM/qwen-code/issues/14746) [Security] Project hooks in a cloned repo's .qwen/settings.json run at startup without any approval (folder trust is off by default)
- [#16039](https://github.com/QwenLM/qwen-code/issues/16039) Sandbox image for 0.26.5 not published: release build job failed
- [#16158](https://github.com/QwenLM/qwen-code/issues/16158) bug(core): OpenRouter `:exacto` model ids fall back to the default context window
- [#10695](https://github.com/QwenLM/qwen-code/issues/10695) Deferred review findings from PR #10672
- [#16187](https://github.com/QwenLM/qwen-code/issues/16187) bug(core): Anthropic requests time out after 300s despite a longer configured API timeout
- [#15542](https://github.com/QwenLM/qwen-code/issues/15542) Anthropic provider: JSON side queries fail with 400 on Claude Sonnet 5.5 / Opus 5.5 (forced tool_choice not supported)
- [#16162](https://github.com/QwenLM/qwen-code/issues/16162) Sandbox image for 0.26.6 not published: release build job failed
- [#15996](https://github.com/QwenLM/qwen-code/issues/15996) Web Shell on touch devices: the composer is re-focused after switching sessions and leaving a panel, so the phone keyboard keeps opening
- [#15877](https://github.com/QwenLM/qwen-code/issues/15877) Web Shell remote daemon connection requires unclear listener and origin setup
- [#16088](https://github.com/QwenLM/qwen-code/issues/16088) Image paste is dropped silently when the clipboard also carries text
- [#16251](https://github.com/QwenLM/qwen-code/issues/16251) Release Failed for v0.26.6-nightly.20261103.42aeddc6d7 on 2026-11-03

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

**Stars:** 393,871 · **Open issues:** 7,767 · **Last push:** <1h ago

On November 4, 2026, OpenClaw released version 2026.10.10, featuring 4,825 commits and updates to enhance performance and stability. Notable merged pull requests included fixes to prevent duplicate notifications in Feishu and resolve issues with user interface elements like the effort picker and session handling. Additionally, critical UI fixes addressed session branch caching and error displays for failed actions. The most pressing new issue reported involves bugs related to cloud worker turns, specifically citing runtime configuration preparation failures, indicating a potential impact on cloud functionalities.

#### 🚀 New Releases
- [v2026.10.10](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10) openclaw 2026.10.10

#### ✅ Merged PRs
- [#192489](https://github.com/openclaw/openclaw/pull/192489) fix(release): record openshell worker-cli review for the current bundler
- [#192482](https://github.com/openclaw/openclaw/pull/192482) fix(feishu): prevent duplicate tails with preview and block streaming
- [#192459](https://github.com/openclaw/openclaw/pull/192459) fix: stop repeatedly refreshing privacy-denied session lists
- [#192151](https://github.com/openclaw/openclaw/pull/192151) fix(ui): drop Default badge from the effort picker
- [#192435](https://github.com/openclaw/openclaw/pull/192435) fix(ui): stop Details from snapping new chats left
- [#192272](https://github.com/openclaw/openclaw/pull/192272) fix(ui): drop the New session title from the mobile draft header
- [#191875](https://github.com/openclaw/openclaw/pull/191875) fix(ui): restore admitted value when bad-input text blurs in number fields
- [#191576](https://github.com/openclaw/openclaw/pull/191576) fix(ui): keep session branch PR cache windows on elapsed time
- [#192388](https://github.com/openclaw/openclaw/pull/192388) refactor(gateway): consolidate approval replay filter tests
- [#191953](https://github.com/openclaw/openclaw/pull/191953) fix(gateway): guests cannot see who is online in the Users sidebar
- [#192462](https://github.com/openclaw/openclaw/pull/192462) fix(ui): toast sidebar session action failures
- [#192452](https://github.com/openclaw/openclaw/pull/192452) fix(worktrees): avoid slow snapshots of installed dependencies
- [#192444](https://github.com/openclaw/openclaw/pull/192444) fix: sessions of signed-in people never resume after restart on Gateways without roles
- [#192210](https://github.com/openclaw/openclaw/pull/192210) fix(ui): show the creating agent on agent-written session openings
- [#190843](https://github.com/openclaw/openclaw/pull/190843) fix: inherit repository workspaces in native child sessions
- [#192475](https://github.com/openclaw/openclaw/pull/192475) fix: keep remaining release fixtures runnable in module workspaces
- [#192469](https://github.com/openclaw/openclaw/pull/192469) fix: keep runtime catalog, relay and Feishu windows on elapsed time
- [#192468](https://github.com/openclaw/openclaw/pull/192468) fix(ci): recover failed test selections when job logs are oversized
- [#192412](https://github.com/openclaw/openclaw/pull/192412) fix(crabbox): explain reserved setup migration and preserve cleanup
- [#192395](https://github.com/openclaw/openclaw/pull/192395) refactor(update): share version comparison policy
- [#192410](https://github.com/openclaw/openclaw/pull/192410) refactor(agents): isolate image file results
- [#192467](https://github.com/openclaw/openclaw/pull/192467) chore(ci): remove ESP checks from mobile pipelines
- [#192390](https://github.com/openclaw/openclaw/pull/192390) fix(sandbox): dependency installs fail when image HOME is missing
- [#192023](https://github.com/openclaw/openclaw/pull/192023) improve(sessions): reduce unnecessary maintenance query rows
- [#192456](https://github.com/openclaw/openclaw/pull/192456) fix: keep release tooling fixtures runnable in module worktrees
- [#192370](https://github.com/openclaw/openclaw/pull/192370) fix(doctor): restore Logbook schema diagnostics in compiled workers
- [#192407](https://github.com/openclaw/openclaw/pull/192407) fix(doctor): skip unrelated recovery captures before hashing
- [#184507](https://github.com/openclaw/openclaw/pull/184507) fix(sessions): avoid extra maintenance scans for embedded archives
- [#192030](https://github.com/openclaw/openclaw/pull/192030) test(team-reports): cover public PostgreSQL store transport
- [#192020](https://github.com/openclaw/openclaw/pull/192020) fix(team-reports): recover after database connection loss
- [#192017](https://github.com/openclaw/openclaw/pull/192017) fix(workboard): recover after database connection loss
- [#192011](https://github.com/openclaw/openclaw/pull/192011) fix(logbook): recover after database connection loss
- [#192406](https://github.com/openclaw/openclaw/pull/192406) fix(doctor): allow slow original-state backups to finish
- [#192449](https://github.com/openclaw/openclaw/pull/192449) test(ui): align remaining rebuilt toast expectations
- [#191977](https://github.com/openclaw/openclaw/pull/191977) fix(logbook): prune files outside PostgreSQL transactions
- [#192391](https://github.com/openclaw/openclaw/pull/192391) fix: clarify PR recovery and delayed completion guidance
- [#191967](https://github.com/openclaw/openclaw/pull/191967) fix(sessions): skip disabled dashboard expiry queries
- [#192355](https://github.com/openclaw/openclaw/pull/192355) fix(ui): localize generated chat copy
- [#192194](https://github.com/openclaw/openclaw/pull/192194) fix(config): align PostgreSQL connection help with supported options
- [#192332](https://github.com/openclaw/openclaw/pull/192332) fix(ui): localize appearance validation and settings feedback
- [#192309](https://github.com/openclaw/openclaw/pull/192309) fix(ui): localize cron metadata and usage summaries
- [#192163](https://github.com/openclaw/openclaw/pull/192163) fix(ui): localize automation schedule wording
- [#191964](https://github.com/openclaw/openclaw/pull/191964) fix(tooling): reject async callbacks in remaining database helpers
- [#191968](https://github.com/openclaw/openclaw/pull/191968) test(matrix): protect chunk publication ordering
- [#191578](https://github.com/openclaw/openclaw/pull/191578) fix(browser): tab list fails when Chrome refuses to attach to a tab
- [#191924](https://github.com/openclaw/openclaw/pull/191924) fix(slack): keep replyBroadcast sends on the plugin action path
- [#192430](https://github.com/openclaw/openclaw/pull/192430) fix(test): isolate Codex startup lifetime fixtures
- [#191962](https://github.com/openclaw/openclaw/pull/191962) fix(test): include omitted PostgreSQL conformance suites
- [#192448](https://github.com/openclaw/openclaw/pull/192448) fix(ci): reconcile inherited test-line budget debt
- [#192305](https://github.com/openclaw/openclaw/pull/192305) fix(ui): localize skill and plugin feedback
- [#192329](https://github.com/openclaw/openclaw/pull/192329) fix: queued owner replies lose automation management
- [#192029](https://github.com/openclaw/openclaw/pull/192029) fix(proxy): serialize IPv6 debug proxy listener URLs
- [#192200](https://github.com/openclaw/openclaw/pull/192200) fix(ui): composer lightning reads larger than the provider mark
- [#192154](https://github.com/openclaw/openclaw/pull/192154) feat(ui): auto-load older sidebar sessions on scroll
- [#192146](https://github.com/openclaw/openclaw/pull/192146) fix(ui): cap the Subagents summary at two statuses
- [#192298](https://github.com/openclaw/openclaw/pull/192298) fix(mcp): honor model visibility and probe filters on nodes
- [#192432](https://github.com/openclaw/openclaw/pull/192432) chore(ui): refresh control ui locales
- [#192414](https://github.com/openclaw/openclaw/pull/192414) fix(ci): release fast lane can land unallocated test growth
- [#192431](https://github.com/openclaw/openclaw/pull/192431) test(ui): align toast expectations with error severity and stacked lanes
- [#192411](https://github.com/openclaw/openclaw/pull/192411) fix(sandbox): avoid cleanup delays when publishing dependency templates
- [#192403](https://github.com/openclaw/openclaw/pull/192403) feat(ci): capture prospective test launch inputs
- [#192381](https://github.com/openclaw/openclaw/pull/192381) fix(test): catch partial Codex deny exemptions
- [#192196](https://github.com/openclaw/openclaw/pull/192196) fix(ci): allow serial SDK API reports to finish
- [#191963](https://github.com/openclaw/openclaw/pull/191963) fix(ci): run PostgreSQL checks when its shard planner changes
- [#192404](https://github.com/openclaw/openclaw/pull/192404) improve(test): speed up config and device binding browser tests
- [#192016](https://github.com/openclaw/openclaw/pull/192016) improve(ui): show arrivals top right with a contextual session status
- [#192015](https://github.com/openclaw/openclaw/pull/192015) improve(ui): mark error toasts and split two-sentence copy
- [#192358](https://github.com/openclaw/openclaw/pull/192358) fix: avoid Gateway stalls while archiving large worktrees
- [#192399](https://github.com/openclaw/openclaw/pull/192399) fix(cron): preserve runs and pacing through unrelated MCP reloads
- [#192014](https://github.com/openclaw/openclaw/pull/192014) improve(ui): stack toasts in a center lane and an arrivals lane
- [#192368](https://github.com/openclaw/openclaw/pull/192368) fix: reclaim abandoned read-only database snapshots
- [#192013](https://github.com/openclaw/openclaw/pull/192013) improve(ui): rebuild toasts on one component with variants and a hover dismiss
- [#187963](https://github.com/openclaw/openclaw/pull/187963) docs: consolidate team server and team setup into one Multiplayer page
- [#192302](https://github.com/openclaw/openclaw/pull/192302) refactor(agents): separate MCP catalog metadata contracts
- [#191387](https://github.com/openclaw/openclaw/pull/191387) feat: run admitted MCP tools on the worker node that hosts them
- [#192363](https://github.com/openclaw/openclaw/pull/192363) fix(models): avoid redundant inspection of remote catalog snapshots
- [#192362](https://github.com/openclaw/openclaw/pull/192362) fix(agents): stop retaining completed tool calls
- [#192351](https://github.com/openclaw/openclaw/pull/192351) test(codex): observe lazy CLI module evaluation
- [#192052](https://github.com/openclaw/openclaw/pull/192052) feat(clawrouter): consume catalog-scoped native Gradium speech
- [#192060](https://github.com/openclaw/openclaw/pull/192060) fix(clawrouter): preserve Vercel native Messages transport
- [#192311](https://github.com/openclaw/openclaw/pull/192311) fix(memory-wiki): searches ending with a period return no pages
- [#192261](https://github.com/openclaw/openclaw/pull/192261) fix(update): keep exec SecretRefs cold during private rehearsal
- [#191062](https://github.com/openclaw/openclaw/pull/191062) fix(ui): preserve New Session test failure diagnostics
- [#192304](https://github.com/openclaw/openclaw/pull/192304) fix(ios): preserve screenshot failure diagnostics
- [#192297](https://github.com/openclaw/openclaw/pull/192297) fix(ci): FRV cancels in target admission when GitHub Git fetches are slow
- [#192270](https://github.com/openclaw/openclaw/pull/192270) fix(usage): avoid transcript scans when archive preparation fails
- [#192222](https://github.com/openclaw/openclaw/pull/192222) fix(ui): restore config save coverage after label normalization
- [#192279](https://github.com/openclaw/openclaw/pull/192279) refactor(templates): remove legacy manifest formats
- [#192290](https://github.com/openclaw/openclaw/pull/192290) test(ui): exercise approval decision uniqueness
- [#192313](https://github.com/openclaw/openclaw/pull/192313) fix(ci): reconcile 294 newly unallocated test lines
- [#191996](https://github.com/openclaw/openclaw/pull/191996) chore(ui): refresh control ui locales
- [#192312](https://github.com/openclaw/openclaw/pull/192312) fix(feishu): keep name cache windows on elapsed time
- [#192211](https://github.com/openclaw/openclaw/pull/192211) fix(cron): failure repair turns show a false error in WebChat when they answer NO_REPLY
- [#191500](https://github.com/openclaw/openclaw/pull/191500) fix: show guest avatars and resolve owner filter names
- [#192289](https://github.com/openclaw/openclaw/pull/192289) fix(test): prevent synthetic service PID ancestry collisions
- [#192288](https://github.com/openclaw/openclaw/pull/192288) fix(test): prevent hook fixtures from downloading package managers
- [#191570](https://github.com/openclaw/openclaw/pull/191570) fix(cron): honor explicit failure alert destinations before repair
- [#192291](https://github.com/openclaw/openclaw/pull/192291) docs(crabbox): require matching runtime pack for native proof
- [#192274](https://github.com/openclaw/openclaw/pull/192274) feat(ui): show plugin UI contributions as extensions
- [#192267](https://github.com/openclaw/openclaw/pull/192267) fix(ui): only preview six-digit hex colors in chat
- [#192271](https://github.com/openclaw/openclaw/pull/192271) fix(ios): avoid screenshot failures during Watch runtime cleanup
- [#191589](https://github.com/openclaw/openclaw/pull/191589) feat: let node-hosted MCP tools ask questions through the Gateway
- [#192275](https://github.com/openclaw/openclaw/pull/192275) fix(worktrees): bound registration waiting on repository operations
- [#192248](https://github.com/openclaw/openclaw/pull/192248) fix(desktop): extract Windows updates with zip 9.2.2
- [#192236](https://github.com/openclaw/openclaw/pull/192236) test(codex): require recovered oversized catalog row
- [#192186](https://github.com/openclaw/openclaw/pull/192186) improve(ui): shimmer the working subagent count in Details
- [#191947](https://github.com/openclaw/openclaw/pull/191947) fix(gateway): serve agent avatars to session-scoped readers
- [#192197](https://github.com/openclaw/openclaw/pull/192197) fix: keep restart recovery from starving scheduled jobs
- [#192273](https://github.com/openclaw/openclaw/pull/192273) fix(android): isolate reader scroll test locale
- [#192192](https://github.com/openclaw/openclaw/pull/192192) fix(ui): hide view-only subagents from person card recent sessions
- [#191152](https://github.com/openclaw/openclaw/pull/191152) fix(worktrees): keep pack maintenance converging beside fetch
- [#191483](https://github.com/openclaw/openclaw/pull/191483) fix(agents): recover dispatch after a temporary credential-store read failure
- [#191484](https://github.com/openclaw/openclaw/pull/191484) fix(codex): continue a settled thread after a remote executor upgrade

#### 🐛 New Issues
- [#191944](https://github.com/openclaw/openclaw/issues/191944) [Bug]: gateway stop / stop --force both fail on macOS with "Process ancestry could not be fully inspected" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬7
- [#192427](https://github.com/openclaw/openclaw/issues/192427) Update failure: update (2026.10.9) `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬5
- [#192175](https://github.com/openclaw/openclaw/issues/192175) [Bug]: 2026.10.10 crabbox setupEnv->setupSecrets migration impossible for OPENCLAW_* names; no supported way to deliver a Tailscale auth key to cloud workers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬3
- [#191818](https://github.com/openclaw/openclaw/issues/191818) [Bug]: 2026.10.10 still ships the claude-cli "no recorded inference account" automation failure — please backport #180492 `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#192141](https://github.com/openclaw/openclaw/issues/192141) Interrupted-turn continuation delivers boilerplate without original user message text (assistant misjudges real messages as empty) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#191961](https://github.com/openclaw/openclaw/issues/191961) [Bug]: Control UI: insertBefore DOMException on the session-less chat route (/chat/main/), also triggered by /new `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#192066](https://github.com/openclaw/openclaw/issues/192066) [Bug]: Update rehearsal omits credentials/, so exec SecretRef providers (1Password) fail at candidate-gateway-startup `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#192021](https://github.com/openclaw/openclaw/issues/192021) [Bug]: Agent DB admission-refusal error is replied to the inbound chat before session.sendPolicy is evaluated (leaks internal errors to denied/third-party chats) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬3
- [#191973](https://github.com/openclaw/openclaw/issues/191973) [Bug]: 2026.10.10 update canary omits plugins in ~/.openclaw/extensions; candidate-doctor-lint fails on plugins.slots.memory `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#191957](https://github.com/openclaw/openclaw/issues/191957) doctor --fix: NOCOW rewrite refused because doctor's own process holds the agent DB open `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬3
- [#191728](https://github.com/openclaw/openclaw/issues/191728) Update from 2026.10.10 to main fails: exec-approvals migration hits 'database is locked' `P1` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-friction` 💬3
- [#192009](https://github.com/openclaw/openclaw/issues/192009) [Feature]: Explicitly authorize cross-provider cron fallback accounts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#192442](https://github.com/openclaw/openclaw/issues/192442) [Bug]: 2026.10.10 cloud worker turns fail: "Runtime config is not prepared. Await captureRuntimeConfigAsyncReader()() first" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#191684](https://github.com/openclaw/openclaw/issues/191684) [Bug]: provider plugin instance permanently stale (PluginInstanceUnavailableError) after upstream LLM idle timeout — while transport-layer fetches and direct API calls still succeed `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#191738](https://github.com/openclaw/openclaw/issues/191738) [Bug]: Test-line budget debt reintroduced after #190939 blocks fully allocated PRs `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#192252](https://github.com/openclaw/openclaw/issues/192252) [Bug]: Delayed model selection in a new Android app chat `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#192255](https://github.com/openclaw/openclaw/issues/192255) [Bug]: iOS sidebar does not highlight active All Sessions, Gateway, or Settings destinations `bug` `no-stale` `bug:behavior` `P3` 💬2
- [#192229](https://github.com/openclaw/openclaw/issues/192229) [Bug]: Ollama thinking levels from /api/show (#168166) don't apply to explicitly configured models; High/Max/Ultra still send "high", xhigh refused (2026.10.10) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬2
- [#192067](https://github.com/openclaw/openclaw/issues/192067) [Bug]: Rehearsal Doctor copies voice-call realtime provider config (with its SecretRef) into talk.realtime `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#191822](https://github.com/openclaw/openclaw/issues/191822) Stuck-session recovery aborts subagent runs during context compaction (compaction not counted as progress) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#192188](https://github.com/openclaw/openclaw/issues/192188) [Bug]: an unanswerable turn on /v1/responses is finalized `completed` with empty output, and the finalization line names only a redacted sessionId `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#192068](https://github.com/openclaw/openclaw/issues/192068) [Bug]: Startup aborts on provider-scoped SecretRef failure of a non-required isolate owner (talk:realtime), contrary to secrets docs `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬2
- [#192120](https://github.com/openclaw/openclaw/issues/192120) cron: one-shot deleteAfterRun consumes the job even when every attempt dies on a provider transport error before the payload runs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#191960](https://github.com/openclaw/openclaw/issues/191960) [Bug]: tools.alsoAllow cannot enable the pdf tool: optional tool factories are gated by the bare profile policy `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#191993](https://github.com/openclaw/openclaw/issues/191993) [Bug]: 2026.10.10: Doctor cannot clear retained updater runtimes; journal nlink=2 blocks update `bug` `bug:behavior` `P1` `impact:ux-friction` 💬2
- [#191948](https://github.com/openclaw/openclaw/issues/191948) Update failure: gateway-recovery-verification (2026.10.10) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#191869](https://github.com/openclaw/openclaw/issues/191869) [Bug]: tools.sessions.allowThreadTargets cannot be enabled — config schema rejects tools.sessions at root, agents.defaults and agent entries (2026.10.10) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#191912](https://github.com/openclaw/openclaw/issues/191912) [Bug]: Codex turn startup reports a catalog updater failure when its executable is missing `bug` `bug:behavior` `P3` `clawsweeper:no-new-fix-pr` 💬2
- [#191627](https://github.com/openclaw/openclaw/issues/191627) Discord GPT-Live authentication failure on 2026.10.9; previously worked on 2026.9.9 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#191841](https://github.com/openclaw/openclaw/issues/191841) [Bug]: 2026.10.10 regression: 'native child reaping is unavailable' breaks all child process/exec execution on Linux with glibc < 2.31 (RHEL 8 / al8) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#191846](https://github.com/openclaw/openclaw/issues/191846) [Feature]: Native Control UI source-reply delivery for third-party background completions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#191855](https://github.com/openclaw/openclaw/issues/191855) [Bug]: Updater fails with false global-install-permission-denied (EACCES) on writable npm prefix; state capture refuses on root-owned .fseventsd (macOS 26.3) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#191864](https://github.com/openclaw/openclaw/issues/191864) [Bug]: Background skill-workshop review writing the session concurrently with an inbound user turn kills the reply with "Session transcript keyed user is outside the current turn" (2026.10.5) `P1` `impact:session-state` `impact:message-loss` 💬2
- [#191766](https://github.com/openclaw/openclaw/issues/191766) [Bug]: Version 10.9 cannot install QQBot `bug` `regression` `P2` `issue-rating: 🦪 silver shellfish` 💬2
- [#191705](https://github.com/openclaw/openclaw/issues/191705) Slow SQLite write lock (30-43s) under database.domain.execute; logs cannot identify culprit SQL `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#191783](https://github.com/openclaw/openclaw/issues/191783) [Bug]: 2026.10.10 memory reindex hangs forever with memory.search.remote.batch.enabled=true (OpenAI) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#191697](https://github.com/openclaw/openclaw/issues/191697) Update failure: retired-state-format (2026.10.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#191716](https://github.com/openclaw/openclaw/issues/191716) [Bug]: iOS app cannot load full conversation history while desktop shows older messages `bug` `bug:behavior` `P2` `clawsweeper:source-repro` 💬2
- [#191680](https://github.com/openclaw/openclaw/issues/191680) main is 219 lines over the test-lines ratchet ceiling; every test-adding PR fails baseline-ratchets `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬2
- [#192497](https://github.com/openclaw/openclaw/issues/192497) Update failure: reconcile:abandoned (2026.10.5) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#192496](https://github.com/openclaw/openclaw/issues/192496) [Bug]: Idle skills refresh still re-enters at 19-20 agents on 2026.10.10 (PR #170341 landed, symptom persists) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#192446](https://github.com/openclaw/openclaw/issues/192446) [Bug]: Feishu streaming card shows the last block twice when preview and block streaming are both on `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192498](https://github.com/openclaw/openclaw/issues/192498) stdio MCP server child processes are never reaped — duplicates accumulate (~140MB each) until container OOM `clawsweeper:intake:bug` `clawsweeper:intake:needs-repro` 💬1
- [#192416](https://github.com/openclaw/openclaw/issues/192416) [Bug]: Sessions owned by an ordinary profile never resume after restart on Gateways without roles (regression from #185730) `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#192486](https://github.com/openclaw/openclaw/issues/192486) Update failure: finalize:doctor (2026.9.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#192479](https://github.com/openclaw/openclaw/issues/192479) Mattermost: textChunkLimit is ignored when a reply carries a file `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192477](https://github.com/openclaw/openclaw/issues/192477) [Bug]: gateway restart flag-conflict errors print only "The CLI command failed." instead of the reason `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192393](https://github.com/openclaw/openclaw/issues/192393) refactor(update): consolidate version comparison policy `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#192472](https://github.com/openclaw/openclaw/issues/192472) [Feature]: Google Chat: opt-in per-thread sessions for threaded replies `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#192470](https://github.com/openclaw/openclaw/issues/192470) state.admission.fast-path spends 1-2.7s in SQL per admission (schema/integrity re-check inside a write transaction) `P2` `impact:other` 💬1
- [#192465](https://github.com/openclaw/openclaw/issues/192465) [Bug]: /v1/responses returns 500 "internal error" for the retryable "changed while starting work" rejection `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192463](https://github.com/openclaw/openclaw/issues/192463) [Bug]: Regression in 2026.10.10 — upgrading removes cross-provider fallback from existing cron jobs `P1` `impact:auth-provider` 💬1
- [#192460](https://github.com/openclaw/openclaw/issues/192460) [Bug]: WebChat keeps message(final=false) progress visible with Keep commentary off `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191888](https://github.com/openclaw/openclaw/issues/191888) [Bug]: Slack message tool drops replyBroadcast on thread sends `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192437](https://github.com/openclaw/openclaw/issues/192437) Update failure: gateway-recovery-verification (2026.10.9) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `P0` 💬1
- [#192434](https://github.com/openclaw/openclaw/issues/192434) [Bug]: Registered image provider is routed through a historical media alias `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#192405](https://github.com/openclaw/openclaw/issues/192405) Release fast lane can land unallocated test growth `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#192426](https://github.com/openclaw/openclaw/issues/192426) [Bug]: Within-limit GIF from view_image is sent to xAI as image/gif (400), then poisons the session so every later turn fails (2026.10.10) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192398](https://github.com/openclaw/openclaw/issues/192398) [Bug]: After a cron wake's run, the idle sessions.changed has no top-level hasActiveRun (2026.10.10) `P2` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬1
- [#192402](https://github.com/openclaw/openclaw/issues/192402) [Bug]: Stable Docker images still can't run the SQLite NOCOW repair on btrfs (#176595 trixie fix is only on main) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#192366](https://github.com/openclaw/openclaw/issues/192366) [Bug]: Managed llama.cpp setup fails on every Windows host: several b10809 release assets are now served truncated `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` `P0` 💬1
- [#192364](https://github.com/openclaw/openclaw/issues/192364) [Bug]: active_node in the relocated Runtime line busts the whole prompt cache on openai-completions when the macOS app quits or is next used `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192360](https://github.com/openclaw/openclaw/issues/192360) Control UI shows reloaded Claude CLI tool calls under raw MCP bridge names and loses their command and diff views `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192356](https://github.com/openclaw/openclaw/issues/192356) [Bug]: Claude CLI history drops whole tool results over 1 MiB — multi-image view_image results show only a placeholder `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192347](https://github.com/openclaw/openclaw/issues/192347) [Bug]: tts.auto "inbound" answers a text-only reply to a voice note with a voice note `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192342](https://github.com/openclaw/openclaw/issues/192342) [Bug]: Mattermost replyResolver and explicit mentions surface claude-cli NO_REPLY as empty_response (2026.10.10) `P2` `impact:ux-friction` 💬1
- [#192330](https://github.com/openclaw/openclaw/issues/192330) [Feature]: Workboard cards have no due date and edited events carry no before/after values, so a slipped deadline cannot be reconstructed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#192328](https://github.com/openclaw/openclaw/issues/192328) npx Quick start cannot keep the Gateway running after the terminal closes `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` `P0` 💬1
- [#192327](https://github.com/openclaw/openclaw/issues/192327) Plugin service cron handle add() records no inference account, so 2026.10.10 refuses every agent-turn job a plugin creates `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192178](https://github.com/openclaw/openclaw/issues/192178) [Bug]: Cron failure-repair NO_REPLY is an empty-response error again in WebChat (regression of PR 169684 via PR 188105) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192322](https://github.com/openclaw/openclaw/issues/192322) [Feature]: accept prompt_cache_key on /v1/responses so per-request sessions can share prompt cache `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#192318](https://github.com/openclaw/openclaw/issues/192318) [Bug]: ChatGPT Responses route ignores explicit prompt cache key, so isolated runs never share prompt cache `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192300](https://github.com/openclaw/openclaw/issues/192300) [Bug]: Intermittent authenticated history and health stalls on 2026.9.6 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#192287](https://github.com/openclaw/openclaw/issues/192287) Memory: native OpenAI embeddings reject freshly renewed OAuth with 401 invalid_authentication on 2026.10.10 `P2` `impact:auth-provider` 💬1
- [#192268](https://github.com/openclaw/openclaw/issues/192268) [Bug]: Missing MCP tools go unreported during embedded turns when OAuth authorization is required `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192256](https://github.com/openclaw/openclaw/issues/192256) [Bug]: Android new-chat plus button opens an existing chat instead `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#192253](https://github.com/openclaw/openclaw/issues/192253) [Bug]: Inbound context reports source_modality "image" for a text-only reply to a photo `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192227](https://github.com/openclaw/openclaw/issues/192227) [Bug]: exec.approvals.node.set fails: "no such table: agent_deletion_journal" (2026.10.10) `bug` `regression` `P1` `impact:security` 💬1
- [#192219](https://github.com/openclaw/openclaw/issues/192219) [Bug]: package declaration stage increases from 18 seconds to nearly 13 minutes `P2` `impact:other` 💬1
- [#192203](https://github.com/openclaw/openclaw/issues/192203) [Feature]: iOS: make the main session discoverable in the session lists `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#192201](https://github.com/openclaw/openclaw/issues/192201) [Bug]: MiniMax M3.1 GA id fix (#176955) still unreleased in v2026.10.10 — shipped build keeps the Preview-only id check, so MiniMax-M3.1-Flash resolves to adaptive-only and output_config.effort never reaches the wire `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#192195](https://github.com/openclaw/openclaw/issues/192195) [Bug]: 2026.10.10 left existing automations without an inference account; every scheduled job failed until each was manually re-bound `P1` `impact:auth-provider` `impact:ux-friction` 💬1
- [#192193](https://github.com/openclaw/openclaw/issues/192193) [Bug]: Codex turns fail with transcript admission identity changed `P1` `impact:session-state` `impact:message-loss` 💬1
- [#192177](https://github.com/openclaw/openclaw/issues/192177) [Feature]: Compact skill catalog omits descriptions entirely when descriptionMaxChars is 0 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#192158](https://github.com/openclaw/openclaw/issues/192158) [Bug]: Telegram rich messages show authored `<tg-time>` dates as raw markup instead of a Telegram date `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192157](https://github.com/openclaw/openclaw/issues/192157) [Feature]: Telegram rich messages: honor `<table compact>` (Bot API 10.3 `is_compact`, smaller cell padding) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#192156](https://github.com/openclaw/openclaw/issues/192156) [Feature]: Telegram rich messages: send authored `<blockquote expandable>` as a Bot API 10.3 expandable quote `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192153](https://github.com/openclaw/openclaw/issues/192153) [Bug]: xai provider on openai-responses drops runtime-context carriers every turn, breaking prefix-cache reuse (plugin-owned path not covered by #190440) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192139](https://github.com/openclaw/openclaw/issues/192139) Message-tool replies aren't treated as the turn's reply: WhatsApp group history never clears, and TUI shows a repeated final reply `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192123](https://github.com/openclaw/openclaw/issues/192123) Spawn broker: hardcoded 256 request cap should be configurable, and stale holders should be reaped `P1` `impact:other` 💬1
- [#192124](https://github.com/openclaw/openclaw/issues/192124) [Bug]: Manual /compact of a large claude-cli session is killed at the 180 s compaction window although Claude Code finishes in ~226 s (766k tokens) and emits no progress signal `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191834](https://github.com/openclaw/openclaw/issues/191834) Doctor database-size check makes a full private copy of every large database to read three header values `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192109](https://github.com/openclaw/openclaw/issues/192109) [Bug]: v2026.10.10 omitted merged Microsoft TTS fix and still ships node-edge-tts 1.2.10 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#192105](https://github.com/openclaw/openclaw/issues/192105) Control UI: Enter never submits in composer (only the send button works) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#192102](https://github.com/openclaw/openclaw/issues/192102) [Bug]: 2026.10.10 non-main agent refused on every boot: model publication supersession escapes startup retry (#172632 gap) `P1` `impact:message-loss` 💬1
- [#192086](https://github.com/openclaw/openclaw/issues/192086) [Bug]: diagnostics-otel delays Gateway shutdown by ~8 s when the OTLP collector is already gone `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192088](https://github.com/openclaw/openclaw/issues/192088) [Bug]: editing `env.vars.*` through `config.patch` restarts the Gateway (no reload rule for `env`), and the answer does not tell the caller when the restart happens `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#192090](https://github.com/openclaw/openclaw/issues/192090) [Perf]: Gateway cold start on a used state directory spends ~10 s in `config.auth` and ~4 s in `sessions.admission` (vs ~4.5 s / 0.1 s on fresh state) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#192089](https://github.com/openclaw/openclaw/issues/192089) [Feature]: accept SecretRefs in `skills.entries.*.env` so provider keys can leave the config file and the process environment `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#192041](https://github.com/openclaw/openclaw/issues/192041) fix(sandbox): remote-shell file paths are trimmed, addressing literal files as their siblings `P2` `clawsweeper:source-repro` `impact:data-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#192071](https://github.com/openclaw/openclaw/issues/192071) [Docs Bug]: releases index marks v2026.10.9 as (latest) while the page and npm both point at v2026.10.10 `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192061](https://github.com/openclaw/openclaw/issues/192061) [Bug]: Image size mismatches go unreported when using OpenAI subscription auth `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192049](https://github.com/openclaw/openclaw/issues/192049) [Bug]: Discord acknowledgement cleanup regression makes completed work look active `P2` `impact:ux-friction` 💬1
- [#192040](https://github.com/openclaw/openclaw/issues/192040) Feature: Gateway-owned incremental memory reindex without stopping the service `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#192031](https://github.com/openclaw/openclaw/issues/192031) [Bug]: Sessions whose first message starts with "/" never get a title (pasted paths, commands with content) `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#192025](https://github.com/openclaw/openclaw/issues/192025) [Bug]: Windows: PowerShell console windows flash on the desktop from console-less helpers (Scheduled Task probe, exec) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#192027](https://github.com/openclaw/openclaw/issues/192027) [Bug]: Windows: failed plugin reinstall (EPERM symlink) blocks every later config hot reload `P1` `impact:other` 💬1
- [#192008](https://github.com/openclaw/openclaw/issues/192008) Intermittent exec failure: 'service child cleanup identity lost: Direct shared-state reader requires current integrity admission' (cron triggers + Code Mode), clustered at :00 `P2` `impact:other` 💬1
- [#191990](https://github.com/openclaw/openclaw/issues/191990) Reduce discarded compiler work in the database CI guard `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191989](https://github.com/openclaw/openclaw/issues/191989) [UX][iOS] Make active-reply send behavior and “Steer now / Queue next” discoverable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#191988](https://github.com/openclaw/openclaw/issues/191988) [Feature]: Preserve trusted LAN endpoints so iOS can reconnect after a Gateway IP change `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#191987](https://github.com/openclaw/openclaw/issues/191987) Feature: support Anthropic message threads (beta message-threads-2026-08-12) in the Anthropic provider `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191975](https://github.com/openclaw/openclaw/issues/191975) [Feature]: Host-exec restricts build tasks to 4.8 GiB on a 20 GB RAM / 28 GB swap server `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191949](https://github.com/openclaw/openclaw/issues/191949) Docs: say whether archived-session deletion is limited to the creator, like archive `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191943](https://github.com/openclaw/openclaw/issues/191943) [Bug]: Config hot reload during active Telegram run strands session and dead-letters messages `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#191925](https://github.com/openclaw/openclaw/issues/191925) Improve Gateway downtime holding and retry guidance `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#191936](https://github.com/openclaw/openclaw/issues/191936) [Feature]: Expose the inference account in the Automations model picker `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191937](https://github.com/openclaw/openclaw/issues/191937) [Bug]: Automations model dropdown jumps back to the top while scrolling `P2` `impact:ux-friction` 💬1
- [#191928](https://github.com/openclaw/openclaw/issues/191928) claude-cli: turns entering a session through the gateway `agent` method / `openclaw agent --deliver` hash the full per-turn extraSystemPrompt, so every switch with channel turns drifts the system prompt and rewrites the whole prompt cache `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#191893](https://github.com/openclaw/openclaw/issues/191893) improve(ci): avoid parsing database lint source files twice `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191900](https://github.com/openclaw/openclaw/issues/191900) Control UI: channel setup text field loses keyboard focus after the Gateway rejects a reply `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191889](https://github.com/openclaw/openclaw/issues/191889) config unset leaves empty parent objects in the config file `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191880](https://github.com/openclaw/openclaw/issues/191880) refactor(test): consolidate model catalog manifest fixtures `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#191883](https://github.com/openclaw/openclaw/issues/191883) Unexpired Codex OAuth returns 401 for native embeddings on 2026.10.9 `P2` `impact:auth-provider` 💬1
- [#191847](https://github.com/openclaw/openclaw/issues/191847) [Bug]: 2026.10.10 – large session repeatedly kills the 512 MB SQLite worker (ERR_WORKER_OUT_OF_MEMORY); every turn in that session fails with "admission is closed" `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#191839](https://github.com/openclaw/openclaw/issues/191839) [Bug]: Bedrock discovery offers model IDs that fail with "on-demand throughput isn't supported" / "Model not found" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191831](https://github.com/openclaw/openclaw/issues/191831) [Bug]: Discord model picker cannot confirm Claude CLI runtime although Sonnet inference succeeds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#191814](https://github.com/openclaw/openclaw/issues/191814) [Bug]: Feishu health-monitor restart can leave account with live WS transport but stopped ingress — all events fail with 'Feishu ingress is stopped', status stays green `P1` `impact:message-loss` 💬1
- [#191773](https://github.com/openclaw/openclaw/issues/191773) Control UI: switching the chat's account in the model picker is ignored while a background history refresh runs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191803](https://github.com/openclaw/openclaw/issues/191803) [Bug]: Control UI still hides reasoningDefault-based reasoning on 2026.10.10 (fix #173524 missing from release) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#191786](https://github.com/openclaw/openclaw/issues/191786) [Bug]: Bundled Telegram plugin logs Plugin SDK deprecation warnings and shows a retiring-API notice `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191785](https://github.com/openclaw/openclaw/issues/191785) [Bug]: Channels built with the async approval factories drop nativeApprovals from the agent Runtime capabilities `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191784](https://github.com/openclaw/openclaw/issues/191784) [Bug]: 2026.10.10 a >256 MB session transcript blocks the agent's memory index; compact OOMs; no way to rotate `P1` `impact:session-state` 💬1
- [#191764](https://github.com/openclaw/openclaw/issues/191764) [Bug]: Failover classifier treats gemini-oauth 429 quota exhaustion as a short retryable rate limit and 404 unenrolled sign-in as model_not_found `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#191763](https://github.com/openclaw/openclaw/issues/191763) [Bug]: remote iMessage outbound attachments lose non-ASCII filenames — sanitizeTempFileName collapses CJK to stubs (中文.txt arrives as _-.txt) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191702](https://github.com/openclaw/openclaw/issues/191702) [Bug]: Synchronous read-only custom-provider streams fail with undefined.bind `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#191736](https://github.com/openclaw/openclaw/issues/191736) [Bug]: Cron summaries include progress text when using claude-cli `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191741](https://github.com/openclaw/openclaw/issues/191741) [Bug]: Android link previews reject advertised application/xhtml+xml responses `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191730](https://github.com/openclaw/openclaw/issues/191730) Agent-initiated Discord task handoff to an ordinary thread session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:session-state` 💬1
- [#191688](https://github.com/openclaw/openclaw/issues/191688) [Bug]: Voice call live transcript repeats the assistant's replies and never sends the caller's lines on realtime calls `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191725](https://github.com/openclaw/openclaw/issues/191725) [Feature]: openclaw update should offer an automated Node runtime upgrade path when the Node floor check fails `enhancement` 💬1
- [#191717](https://github.com/openclaw/openclaw/issues/191717) [Bug]: Control UI steering waits 15 minutes, then runtime_rejected leaves corrections queued `bug` `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#191714](https://github.com/openclaw/openclaw/issues/191714) voice-call: post-call report summary intermittently fails with GatewayDrainingError on a healthy gateway `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191690](https://github.com/openclaw/openclaw/issues/191690) [Bug]: Codex thread stays "claimed by active work" after turn completes (sessions_yield), wedging Discord session until gateway restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#191686](https://github.com/openclaw/openclaw/issues/191686) [Bug]: Telegram logs an ERROR for every typing action held back by a flood wait ("request not sent") `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191679](https://github.com/openclaw/openclaw/issues/191679) [Bug]: Envelope timestamps one hour behind on America/Vancouver host after BC stopped DST (cron correct) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#191678](https://github.com/openclaw/openclaw/issues/191678) [Bug]: Matrix polls show as "Unsupported event" in Element X `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191672](https://github.com/openclaw/openclaw/issues/191672) [Feature]: Dashboard widgets need stable anchoring across releases and a refresh contract (they drift/refactor with updates and never self-update) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#191657](https://github.com/openclaw/openclaw/issues/191657) [Bug]: Android chat: parallel Claude CLI tool calls cannot be opened and their results appear in separate tool groups `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191645](https://github.com/openclaw/openclaw/issues/191645) [Bug]: Telegram presentation buttons with `disabled: true` render as active and stay clickable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191648](https://github.com/openclaw/openclaw/issues/191648) [Bug]: Prompt-cache drop warnings blame max_completion_tokens when only the re-clamped output cap changed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191644](https://github.com/openclaw/openclaw/issues/191644) [Bug]: Telegram message sends silently drop effectId (no message_effect_id reaches the Bot API) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#191631](https://github.com/openclaw/openclaw/issues/191631) [Bug]: voice-call responseModel doesn't resolve model aliases `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#191629](https://github.com/openclaw/openclaw/issues/191629) [Bug]: Finalized Talk speech can hide an expired idle reset before the consult `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#191622](https://github.com/openclaw/openclaw/issues/191622) [Bug]: Publishing a PR from an agent main session moves it into a managed worktree with no way back `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#192500](https://github.com/openclaw/openclaw/issues/192500) refactor(update): consolidate handoff outcome classification

#### 🔒 Closed Issues
- [#159356](https://github.com/openclaw/openclaw/issues/159356) llama.cpp manager reports ready while embedding child exits; embedding requests return HTTP 500 Failed to read connection on OpenClaw 2026.9.6
- [#67419](https://github.com/openclaw/openclaw/issues/67419) Session context bloat: bootstrap files re-injected every turn, wasting 20-30% tokens
- [#155633](https://github.com/openclaw/openclaw/issues/155633) Add Databricks Unity Gateway as an official model provider
- [#159789](https://github.com/openclaw/openclaw/issues/159789) Close wedge: one failed native close permanently locks agent execution until gateway restart, while health stays green
- [#162768](https://github.com/openclaw/openclaw/issues/162768) [Bug]: OpenAI Codex model discovery hardcodes `client_version=0.158.0`, ignoring the configured external Codex app-server
- [#158922](https://github.com/openclaw/openclaw/issues/158922) claude-cli models report `available: false` after Gateway restart on main, hiding the Control UI Effort picker (regression after #157459)
- [#156632](https://github.com/openclaw/openclaw/issues/156632) [Feature]: Bounded launch contract for Swarm agents.run
- [#90074](https://github.com/openclaw/openclaw/issues/90074) OpenAI image generation uses direct API-key route instead of Codex OAuth when explicit provider config exists
- [#159740](https://github.com/openclaw/openclaw/issues/159740) [Bug]: Skill collection review monitor (wakeMode next-heartbeat) still fails with superseded prepared runtime generation on 2026.9.6 — residual case of #133692
- [#158966](https://github.com/openclaw/openclaw/issues/158966) browser: credentialed CDP WebSocket URLs reach model-facing tab results
- [#158068](https://github.com/openclaw/openclaw/issues/158068) [Feature]: Adaptive test-time compute for Swarm populations
- [#164870](https://github.com/openclaw/openclaw/issues/164870) [Feature]: Configurable plain-text abort triggers (session.abortTriggers) instead of a hardcoded multilingual list
- [#161208](https://github.com/openclaw/openclaw/issues/161208) [Bug]: Main-session heartbeats never reuse the Anthropic prompt cache (per-run time line sits on the only message cache marker)
- [#116601](https://github.com/openclaw/openclaw/issues/116601) [Bug]: MiniMax-M3 image capability on Anthropic route bypasses MiniMax-VL-01 and silently loses vision
- [#164947](https://github.com/openclaw/openclaw/issues/164947) Agent and child session model patches still persist defaults under explicit global scope
- [#164425](https://github.com/openclaw/openclaw/issues/164425) [Bug]: Plugin instances are force-retired at a fixed 5s drain budget independent of the 325s gateway shutdown budget
- [#161049](https://github.com/openclaw/openclaw/issues/161049) [Feature]: cron supervision beyond failures: overdue, skipped, and dead-man alerts
- [#159886](https://github.com/openclaw/openclaw/issues/159886) [Feature]: Resume a conversation stopped at a subscription limit once capacity returns
- [#159722](https://github.com/openclaw/openclaw/issues/159722) [Bug/Question] Background `exec` tasks appear to stall silently while the agent polls — reproduces the "idle wait between tool calls" from #140192
- [#169401](https://github.com/openclaw/openclaw/issues/169401) [Feature]: Let owned automations keep their explicit failure alert without owner-conversation repair
- [#167844](https://github.com/openclaw/openclaw/issues/167844) [Bug]: Any active/queued cron work blocks heartbeat ticks for ALL agents (cron-in-progress starvation on multi-agent gateways)
- [#164910](https://github.com/openclaw/openclaw/issues/164910) [Feature]: Add "Cancel current run" action to Automations page without changing job enabled state
- [#164895](https://github.com/openclaw/openclaw/issues/164895) Control UI renders one assistant message three times (server stores a single copy)
- [#164562](https://github.com/openclaw/openclaw/issues/164562) [Bug]: model.usage diagnostic event (cost tracking) never fires for sessions under a channel/topic model override
- [#164383](https://github.com/openclaw/openclaw/issues/164383) [Bug]: failed config hot reload ("still has active retained work" / "cannot replace itself") is never retried; runtime snapshot stays stale
- [#164324](https://github.com/openclaw/openclaw/issues/164324) Talk: the delegation holding line is hardcoded in Italian ("Un attimo, controllo.")
- [#164076](https://github.com/openclaw/openclaw/issues/164076) Memory index: sessions source is indexed while session search stays gated behind experimental.sessionMemory — content unretrievable and "Dirty: yes" never clears
- [#163703](https://github.com/openclaw/openclaw/issues/163703) Sandboxed agents silently lose core tools missing from tools.sandbox.tools.alsoAllow (+ daemon restart doesn't restart Gateway container)
- [#163668](https://github.com/openclaw/openclaw/issues/163668) Session SQLite migration recovery report (session-sqlite-1790959994047-f7659468)
- [#163263](https://github.com/openclaw/openclaw/issues/163263) [Feature]: no detection when two OpenClaw instances share the same channel app id
- [#162991](https://github.com/openclaw/openclaw/issues/162991) [Feature]: Configurable naming guideline for automatic dashboard session titles
- [#162596](https://github.com/openclaw/openclaw/issues/162596) [Feature]: Native ChatGPT/OpenAI compaction for the embedded OpenClaw runtime
- [#161856](https://github.com/openclaw/openclaw/issues/161856) Context precheck estimator overestimates prompt tokens (~2.3–2.6×), causing premature "prompt too large" refusals
- [#161531](https://github.com/openclaw/openclaw/issues/161531) macOS 13-agent install: Gateway RSS baseline jumped from ~1.1GB flat to oscillating 0.9-6.6GB right after 2026.8.2 -> 2026.9.6 upgrade (15-min sampled timeline inside)
- [#160451](https://github.com/openclaw/openclaw/issues/160451) Legacy exec.timeout emitted by Xiaomi MiMo is rejected without pre-validation argument normalization
- [#159523](https://github.com/openclaw/openclaw/issues/159523) WebChat: difficult to select and copy text from chat messages
- [#159018](https://github.com/openclaw/openclaw/issues/159018) [Bug]: chat history: stale older-page flights land after the reader leaves the boundary, and the loading flag can stick
- [#164952](https://github.com/openclaw/openclaw/issues/164952) [Feature]: Skill Workshop pending suggestions need a current-installed → proposed diff before Apply
- [#164765](https://github.com/openclaw/openclaw/issues/164765) [Feature]: Add a search message action to the Mattermost channel
- [#164191](https://github.com/openclaw/openclaw/issues/164191) Codex settled-turn finalization: one current-turn field over 64 KiB makes recovery context unavailable
- [#164006](https://github.com/openclaw/openclaw/issues/164006) [Feature]: warn agent/owner when AGENTS.md grows past bootstrapMaxChars — rules in the clipped middle are silently not injected
- [#163651](https://github.com/openclaw/openclaw/issues/163651) Batch agent SQLite snapshot and preflight operations in one CLI process
- [#163025](https://github.com/openclaw/openclaw/issues/163025) Workboard: safely archive eligible history before refusing a near-budget mutation
- [#162993](https://github.com/openclaw/openclaw/issues/162993) [Feature]: Remember Workboard search and filters across reloads
- [#162850](https://github.com/openclaw/openclaw/issues/162850) [Feature]: Add a dedicated label filter to Workboard
- [#162773](https://github.com/openclaw/openclaw/issues/162773) [Bug]: Control UI terminal panel: keyboard input not sent to gateway (terminal.input never logged, all browsers)
- [#162698](https://github.com/openclaw/openclaw/issues/162698) [Feature]: Configurable end-user model picker without provider/auth/runtime metadata
- [#162691](https://github.com/openclaw/openclaw/issues/162691) [Bug]: shared gateway shard invalidates state DB read admission between tests
- [#162465](https://github.com/openclaw/openclaw/issues/162465) A2A channel: allow sending structured data parts (and mediaType / taskId) from the message tool
- [#159570](https://github.com/openclaw/openclaw/issues/159570) [Feature]: Opt-in Skill Workshop experience review for persistent agentTurn automations
- [#147694](https://github.com/openclaw/openclaw/issues/147694) [Bug]: Browser tab cleanup queues start behind its own shutdown, adding per-tab timeout delays
- [#158900](https://github.com/openclaw/openclaw/issues/158900) Mid-turn auto-compaction fails with "prompt too large (precheck)" when a single tool result pushes the prompt over `contextTokens`, although the model window is much larger
- [#155236](https://github.com/openclaw/openclaw/issues/155236) Add a purpose/description field to node pairing requests and nodes list
- [#165045](https://github.com/openclaw/openclaw/issues/165045) [e2e] Avatar-anchor assertion passes without avatar (:is avatar/slot, session-suggestions)
- [#192066](https://github.com/openclaw/openclaw/issues/192066) [Bug]: Update rehearsal omits credentials/, so exec SecretRef providers (1Password) fail at candidate-gateway-startup
- [#191973](https://github.com/openclaw/openclaw/issues/191973) [Bug]: 2026.10.10 update canary omits plugins in ~/.openclaw/extensions; candidate-doctor-lint fails on plugins.slots.memory
- [#191957](https://github.com/openclaw/openclaw/issues/191957) doctor --fix: NOCOW rewrite refused because doctor's own process holds the agent DB open
- [#164961](https://github.com/openclaw/openclaw/issues/164961) [Feature]: Foreground-by-default policy with explicit opt-in for background tasks
- [#164957](https://github.com/openclaw/openclaw/issues/164957) [Bug]: hidden person mentions retain work after a pending hover is rejected
- [#164904](https://github.com/openclaw/openclaw/issues/164904) [Feature]: Add a poll message action to the Mattermost channel
- [#164865](https://github.com/openclaw/openclaw/issues/164865) [Bug]: Chrome extension profile screenshot times out on Windows/Chrome 154 while tabs and snapshots work
- [#164862](https://github.com/openclaw/openclaw/issues/164862) [Bug]: Open command menus retain stale choices after chat catalog refresh
- [#164736](https://github.com/openclaw/openclaw/issues/164736) [Bug]: Gateway 2026.9.4 (macOS arm64): recurring critical memory-pressure bursts (reason=rss_growth, heap up to ~4 GB) during dense streaming model calls
- [#164720](https://github.com/openclaw/openclaw/issues/164720) [Bug]: Status reports a selected memory plugin enabled despite its disabled entry
- [#164583](https://github.com/openclaw/openclaw/issues/164583) OpenAI strict schemas: sessions_history receives placeholder anchors (messageId: "x", all-zero UUID), causing repeated identical calls
- [#164472](https://github.com/openclaw/openclaw/issues/164472) [UX]: Talk has no persistent working indicator while delegated backend work runs
- [#164388](https://github.com/openclaw/openclaw/issues/164388) [Feature]: Desktop sharing on Linux requires a VNC server, which cannot run on a Wayland-only host
- [#164384](https://github.com/openclaw/openclaw/issues/164384) [Feature]: active-memory: first lane-1 lookup on a dirty memory index always times out (inline sync inside the 1.5 s preflight)
- [#164344](https://github.com/openclaw/openclaw/issues/164344) [Bug]: Codex completed finals accumulate in native payload construction after PR156144 (2026.9.7)
- [#164300](https://github.com/openclaw/openclaw/issues/164300) [Feature]: Add a per-session Preserve control independent of pinning
- [#164227](https://github.com/openclaw/openclaw/issues/164227) [Feature Request] exec/read tool results: stable truncation flag for agent-facing payload
- [#164167](https://github.com/openclaw/openclaw/issues/164167) buzz: a mentioned agent gets no thread context (not the root, not the replied-to message), and historyLimit's 1 KB budget is too small to compensate
- [#164145](https://github.com/openclaw/openclaw/issues/164145) [Feature]: Remove unused exec approval branches and registration argument
- [#164017](https://github.com/openclaw/openclaw/issues/164017) [Docs Bug]: No hosting guide for Everpod on the provider picker
- [#163881](https://github.com/openclaw/openclaw/issues/163881) [Bug]: monolithic extension test typecheck exhausts memory on a 20 GB host
- [#163749](https://github.com/openclaw/openclaw/issues/163749) config get reports "Unknown config path" for fields a bundled plugin declares through $defs
- [#163657](https://github.com/openclaw/openclaw/issues/163657) qianfan provider: DeepSeek models missing supportsStreamingUsage — responses buffer until fully generated
- [#163595](https://github.com/openclaw/openclaw/issues/163595) [Feature]: Browser preview card menu should open managed-tab and system-browser destinations unambiguously
- [#163584](https://github.com/openclaw/openclaw/issues/163584) [Bug]: Historical browser card/panel target shows "This tab is no longer available" with no reopen-URL recovery while the managed browser is running
- [#163581](https://github.com/openclaw/openclaw/issues/163581) [Bug]: A binding with session.dmScope "main" turns off the rememberAcrossConversations default and pauses memory search
- [#163454](https://github.com/openclaw/openclaw/issues/163454) [Feature]: Give MS Teams the thread-bound sessions (session.threadBindings) Discord, Telegram, Matrix, Feishu, and LINE already have
- [#163453](https://github.com/openclaw/openclaw/issues/163453) [Bug]: WAL split-brain tripwire fired on 2026.9.5 with a single gateway process (state/openclaw.sqlite)
- [#163413](https://github.com/openclaw/openclaw/issues/163413) [Feature]: Expose Codex reset-credit inventory and expiry dates through usage APIs
- [#163395](https://github.com/openclaw/openclaw/issues/163395) [Feature]: Control UI: name the requesting agent on the inline exec approval card
- [#163213](https://github.com/openclaw/openclaw/issues/163213) [Feature]: Owner-scoped session pins with conditional release
- [#163072](https://github.com/openclaw/openclaw/issues/163072) [Feature]: workboard — allow withholding a field or section from the worker prompt
- [#159238](https://github.com/openclaw/openclaw/issues/159238) [Feature]: configurable retention for rolling gateway logs (currently hard-coded 24 h)
- [#159162](https://github.com/openclaw/openclaw/issues/159162) docs: explain Screenpipe recorder setup in MCP recipes
- [#158990](https://github.com/openclaw/openclaw/issues/158990) [Bug]: Gateway temp log truncated on every CLI/gateway start destroys crash forensics (Windows)
- [#158924](https://github.com/openclaw/openclaw/issues/158924) [Bug]: Control UI sidebar agent card renders image avatar as a cropped sliver (image box overflows its 28x28 container)
- [#158920](https://github.com/openclaw/openclaw/issues/158920) [Feature]: Supported recovery coverage for opaque Workboard and native-harness state
- [#191728](https://github.com/openclaw/openclaw/issues/191728) Update from 2026.10.10 to main fails: exec-approvals migration hits 'database is locked'
- [#182178](https://github.com/openclaw/openclaw/issues/182178) [Bug]: Reasoning-only retry prompt is refused by Anthropic as reasoning_extraction on claude-opus-5-5 (anthropic-messages)
- [#192067](https://github.com/openclaw/openclaw/issues/192067) [Bug]: Rehearsal Doctor copies voice-call realtime provider config (with its SecretRef) into talk.realtime
- [#191993](https://github.com/openclaw/openclaw/issues/191993) [Bug]: 2026.10.10: Doctor cannot clear retained updater runtimes; journal nlink=2 blocks update
- [#191846](https://github.com/openclaw/openclaw/issues/191846) [Feature]: Native Control UI source-reply delivery for third-party background completions
- [#191864](https://github.com/openclaw/openclaw/issues/191864) [Bug]: Background skill-workshop review writing the session concurrently with an inbound user turn kills the reply with "Session transcript keyed user is outside the current turn" (2026.10.5)
- [#181412](https://github.com/openclaw/openclaw/issues/181412) [Bug]: provider setup text replies lose keyboard focus after validation errors
- [#163315](https://github.com/openclaw/openclaw/issues/163315) [Bug]: Ollama memory embeddings blocked when the configured Ollama host resolves into 0.0.0.0/8 (host.docker.internal under OrbStack)
- [#191680](https://github.com/openclaw/openclaw/issues/191680) main is 219 lines over the test-lines ratchet ceiling; every test-adding PR fails baseline-ratchets
- [#164550](https://github.com/openclaw/openclaw/issues/164550) [Bug]: Session context token count does not update during a long agent turn
- [#191360](https://github.com/openclaw/openclaw/issues/191360) [Bug]: Gateway pickers keep listing retired qwen-token-plan models after successful account discovery
- [#192446](https://github.com/openclaw/openclaw/issues/192446) [Bug]: Feishu streaming card shows the last block twice when preview and block streaming are both on
- [#192416](https://github.com/openclaw/openclaw/issues/192416) [Bug]: Sessions owned by an ordinary profile never resume after restart on Gateways without roles (regression from #185730)
- [#192393](https://github.com/openclaw/openclaw/issues/192393) refactor(update): consolidate version comparison policy
- [#192470](https://github.com/openclaw/openclaw/issues/192470) state.admission.fast-path spends 1-2.7s in SQL per admission (schema/integrity re-check inside a write transaction)
- [#192463](https://github.com/openclaw/openclaw/issues/192463) [Bug]: Regression in 2026.10.10 — upgrading removes cross-provider fallback from existing cron jobs
- [#191888](https://github.com/openclaw/openclaw/issues/191888) [Bug]: Slack message tool drops replyBroadcast on thread sends
- [#192405](https://github.com/openclaw/openclaw/issues/192405) Release fast lane can land unallocated test growth
- [#192356](https://github.com/openclaw/openclaw/issues/192356) [Bug]: Claude CLI history drops whole tool results over 1 MiB — multi-image view_image results show only a placeholder
- [#192342](https://github.com/openclaw/openclaw/issues/192342) [Bug]: Mattermost replyResolver and explicit mentions surface claude-cli NO_REPLY as empty_response (2026.10.10)
- [#192178](https://github.com/openclaw/openclaw/issues/192178) [Bug]: Cron failure-repair NO_REPLY is an empty-response error again in WebChat (regression of PR 169684 via PR 188105)
- [#192287](https://github.com/openclaw/openclaw/issues/192287) Memory: native OpenAI embeddings reject freshly renewed OAuth with 401 invalid_authentication on 2026.10.10
- [#192219](https://github.com/openclaw/openclaw/issues/192219) [Bug]: package declaration stage increases from 18 seconds to nearly 13 minutes
- [#192195](https://github.com/openclaw/openclaw/issues/192195) [Bug]: 2026.10.10 left existing automations without an inference account; every scheduled job failed until each was manually re-bound
- [#192193](https://github.com/openclaw/openclaw/issues/192193) [Bug]: Codex turns fail with transcript admission identity changed
- [#192123](https://github.com/openclaw/openclaw/issues/192123) Spawn broker: hardcoded 256 request cap should be configurable, and stale holders should be reaped
- [#191834](https://github.com/openclaw/openclaw/issues/191834) Doctor database-size check makes a full private copy of every large database to read three header values
- [#192102](https://github.com/openclaw/openclaw/issues/192102) [Bug]: 2026.10.10 non-main agent refused on every boot: model publication supersession escapes startup retry (#172632 gap)
- [#192049](https://github.com/openclaw/openclaw/issues/192049) [Bug]: Discord acknowledgement cleanup regression makes completed work look active
- [#192027](https://github.com/openclaw/openclaw/issues/192027) [Bug]: Windows: failed plugin reinstall (EPERM symlink) blocks every later config hot reload
- [#192008](https://github.com/openclaw/openclaw/issues/192008) Intermittent exec failure: 'service child cleanup identity lost: Direct shared-state reader requires current integrity admission' (cron triggers + Code Mode), clustered at :00
- [#191990](https://github.com/openclaw/openclaw/issues/191990) Reduce discarded compiler work in the database CI guard
- [#191209](https://github.com/openclaw/openclaw/issues/191209) iOS chat: Tool details label is oversized and accent-colored between tool rows
- [#187645](https://github.com/openclaw/openclaw/issues/187645) [Bug]: Android app browser panel: "This tab is no longer available" on cold start, panel never re-attaches to new tab
- [#191937](https://github.com/openclaw/openclaw/issues/191937) [Bug]: Automations model dropdown jumps back to the top while scrolling
- [#191928](https://github.com/openclaw/openclaw/issues/191928) claude-cli: turns entering a session through the gateway `agent` method / `openclaw agent --deliver` hash the full per-turn extraSystemPrompt, so every switch with channel turns drifts the system prompt and rewrites the whole prompt cache
- [#191211](https://github.com/openclaw/openclaw/issues/191211) iOS chat shows raw MCP bridge names instead of tool labels
- [#191893](https://github.com/openclaw/openclaw/issues/191893) improve(ci): avoid parsing database lint source files twice
- [#191880](https://github.com/openclaw/openclaw/issues/191880) refactor(test): consolidate model catalog manifest fixtures
- [#191883](https://github.com/openclaw/openclaw/issues/191883) Unexpired Codex OAuth returns 401 for native embeddings on 2026.10.9
- [#189136](https://github.com/openclaw/openclaw/issues/189136) Support Qoder models in native chat
- [#189134](https://github.com/openclaw/openclaw/issues/189134) Support Grok Build models in native chat
- [#191814](https://github.com/openclaw/openclaw/issues/191814) [Bug]: Feishu health-monitor restart can leave account with live WS transport but stopped ingress — all events fail with 'Feishu ingress is stopped', status stays green
- [#191773](https://github.com/openclaw/openclaw/issues/191773) Control UI: switching the chat's account in the model picker is ignored while a background history refresh runs
- [#191784](https://github.com/openclaw/openclaw/issues/191784) [Bug]: 2026.10.10 a >256 MB session transcript blocks the agent's memory index; compact OOMs; no way to rotate
- [#185717](https://github.com/openclaw/openclaw/issues/185717) [Bug]: Pull request list announces every row on each CI status poll
- [#185926](https://github.com/openclaw/openclaw/issues/185926) [Feature]: msteams: upload private and shared channel files to the channel's own SharePoint site
- [#191702](https://github.com/openclaw/openclaw/issues/191702) [Bug]: Synchronous read-only custom-provider streams fail with undefined.bind
- [#191736](https://github.com/openclaw/openclaw/issues/191736) [Bug]: Cron summaries include progress text when using claude-cli
- [#191688](https://github.com/openclaw/openclaw/issues/191688) [Bug]: Voice call live transcript repeats the assistant's replies and never sends the caller's lines on realtime calls
- [#191725](https://github.com/openclaw/openclaw/issues/191725) [Feature]: openclaw update should offer an automated Node runtime upgrade path when the Node floor check fails
- [#190980](https://github.com/openclaw/openclaw/issues/190980) [Bug]: Resumed reply after a plugin reload from Control UI is sent to the session's last external chat
- [#189886](https://github.com/openclaw/openclaw/issues/189886) Support plugin input rewrites for Codex-native tools
- [#187597](https://github.com/openclaw/openclaw/issues/187597) [Bug]: macOS Tailscale "Exposure: Off" deletes the whole gateway.auth block and restarts the Gateway
- [#187600](https://github.com/openclaw/openclaw/issues/187600) [Bug]: macOS ConfigStore offline fallback writes "__OPENCLAW_REDACTED__" over real secrets in openclaw.json
- [#191546](https://github.com/openclaw/openclaw/issues/191546) [Bug]: `npx openclaw` exits 1 with no message on an unsupported Node
- [#187018](https://github.com/openclaw/openclaw/issues/187018) [Bug]: Anthropic API setup omits workspace scope
- [#191453](https://github.com/openclaw/openclaw/issues/191453) [Bug]: Quick start stops the Gateway when the onboarding terminal closes
- [#191331](https://github.com/openclaw/openclaw/issues/191331) Live update recovery metadata inspection can fail during SQLite checkpoints
- [#191191](https://github.com/openclaw/openclaw/issues/191191) CI: measure adaptive test selection and its net compute cost
- [#189823](https://github.com/openclaw/openclaw/issues/189823) [Bug]: Parent sessions miss child approvals when session.store is customized
- [#191590](https://github.com/openclaw/openclaw/issues/191590) [Bug]: Overflow recovery compaction hides the degraded-summary warning

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 260,276 · **Open issues:** 52,629 · **Last push:** <1h ago

On November 3, 2026, Hermes Agent released version v0.22.7, a patch that incorporates approximately 174 merged pull requests since the last release, resulting in a stable version for the GitHub release, Microsoft Store app, Docker, and Hermes Cloud. Key changes include the removal of optional skills that the MCP catalog and related plugins cover, as well as an adjustment ensuring that skill installations reflect the current trust level after any changes to a repository's trust status. Notably, a new issue emerged regarding the kanban provider_override, where unknown providers could mistakenly fall through to a configured fallback. This highlight indicates ongoing challenges as users navigate the platform's new features and changes.

#### 🚀 New Releases
- [v0.22.7](https://github.com/nousresearch/hermes-agent/releases/tag/v0.22.7) Hermes Agent v0.22.7

#### ✅ Merged PRs
- [#148639](https://github.com/NousResearch/hermes-agent/pull/148639) Optional skills that the MCP catalog, catalog plugins, built-in web search or vendor skill repos cover are removed
- [#148648](https://github.com/NousResearch/hermes-agent/pull/148648) Skill installs apply the current trust level after a repo's trust changes, not a cached one

#### 🐛 New Issues
- [#148703](https://github.com/NousResearch/hermes-agent/issues/148703) Kanban provider_override: unknown provider can fall through to a configured fallback instead of failing admission 💬1
- [#148689](https://github.com/NousResearch/hermes-agent/issues/148689) Windows: `hermes acp` under a host whose job object forbids breakaway can't start a session (`windows_breakaway_unavailable`) 💬1
- [#148565](https://github.com/NousResearch/hermes-agent/issues/148565) [Bug]: MEDIA attachments delivered twice when the path contains a space (Windows) `type/bug` `comp/gateway` `platform/feishu` `platform/qqbot` 💬1
- [#148682](https://github.com/NousResearch/hermes-agent/issues/148682) [Bug]: Desktop drops image attachments from prompt.submit: the image.attach_bytes staging branch discards `mime`, so the submit filter removes the image 💬1
- [#148451](https://github.com/NousResearch/hermes-agent/issues/148451) [Bug]: scratch prune never re-runs inside a long-lived gateway (once-per-process gate), so idle entries pile up `type/bug` `comp/gateway` `P2` 💬1
- [#148657](https://github.com/NousResearch/hermes-agent/issues/148657) [Bug]: Docker backend — MEDIA files written by the (root) sandbox with mode 600 cannot be read by the gateway, so delivery fails and the agent never knows `type/security` `comp/gateway` `comp/tools` `platform/telegram` 💬1
- [#148663](https://github.com/NousResearch/hermes-agent/issues/148663) [Bug]: Docker backend — persisted MCP results announced with the host path when no sandbox exists yet, and the miss is reported as "expired" `type/bug` `comp/tools` `tool/file` `tool/code-exec` 💬1
- [#148719](https://github.com/NousResearch/hermes-agent/issues/148719) [Bug]: Gateway 旧进程残留无法自动清理 `bug`
- [#148718](https://github.com/NousResearch/hermes-agent/issues/148718) [Feature]: Host-themed ephemeral UI cards with a selection-back channel (ephemeral-ui reference kit)
- [#148717](https://github.com/NousResearch/hermes-agent/issues/148717) Bug report
- [#148714](https://github.com/NousResearch/hermes-agent/issues/148714) Context window maximum remains stale after switching to a smaller model
- [#148710](https://github.com/NousResearch/hermes-agent/issues/148710) [Bug]: a conflicted autostash restore discards every file that already merged
- [#148704](https://github.com/NousResearch/hermes-agent/issues/148704) [Bug]: Desktop applies wrong-installation roster metadata after MISROUTED (follow-up to #131853)
- [#148702](https://github.com/NousResearch/hermes-agent/issues/148702) API server: per-request opt-out for title generation and background review
- [#148701](https://github.com/NousResearch/hermes-agent/issues/148701) [Feature]: Operator-initiated pause of a RUNNING kanban worker with session-preserving resume (suspend mid-run without losing the run)
- [#148698](https://github.com/NousResearch/hermes-agent/issues/148698) [Bug]: Feishu redelivery of same message_id beyond 5-min dedup TTL hard-interrupts in-flight turn
- [#148697](https://github.com/NousResearch/hermes-agent/issues/148697) [Feature]: Per-task / per-subtree kanban pause with correct semantics across statuses (block can't touch gated todo; review lane ignores it)
- [#148691](https://github.com/NousResearch/hermes-agent/issues/148691) [Bug]: Nix install: `hermes desktop` dead-ends with "Desktop GUI source not found" while `hermes-desktop` is installed
- [#148686](https://github.com/NousResearch/hermes-agent/issues/148686) [Bug]: Webapp foreground transcript misses persisted user and assistant messages after disconnect
- [#148675](https://github.com/NousResearch/hermes-agent/issues/148675) [Bug]: MoA aggregator on openai-codex gets 0% prompt-cache hits (aux route lacks session headers; guidance breaks append-only prefix)
- [#148672](https://github.com/NousResearch/hermes-agent/issues/148672) [Bug]: Install.ps1 Trojan Detected - kaspersky `bug`
- [#148667](https://github.com/NousResearch/hermes-agent/issues/148667) [Feature]: 未読セッションがあるプロジェクトを太字・未読件数で分かるようにしてほしい
- [#148666](https://github.com/NousResearch/hermes-agent/issues/148666) [Bug] macOS: launchd's default TMPDIR counts as user-set, so Hermes never points TMPDIR at its scratch dir (prompt claim false on every Mac)
- [#148660](https://github.com/NousResearch/hermes-agent/issues/148660) [Bug]: Chromium installer reports ready without checking required Linux shared libraries `type/bug` `comp/cli` `comp/tools` `P2`
- [#148661](https://github.com/NousResearch/hermes-agent/issues/148661) Unified contacts: one person, many channels (config, not memory) `type/feature` `comp/plugins` `platform/whatsapp` `area/config`

#### 🔒 Closed Issues
- [#143414](https://github.com/NousResearch/hermes-agent/issues/143414) [Bug]: /new session rotation drops live reasoning in classic CLI — show_reasoning flag not re-synced to the fresh session
- [#140397](https://github.com/NousResearch/hermes-agent/issues/140397) [Bug]: Desktop repeats a tool row when a sealed call's completion arrives under a newer sequence
- [#148663](https://github.com/NousResearch/hermes-agent/issues/148663) [Bug]: Docker backend — persisted MCP results announced with the host path when no sandbox exists yet, and the miss is reported as "expired"

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 96,254 · **Open issues:** 9,813 · **Last push:** <1h ago

On November 4, 2026, vLLM saw no new releases, but several significant updates were merged to improve functionality and performance. Notably, merged pull requests included the addition of Qwen3-4B to documentation, a bugfix addressing `KeyError: 'weight_scale'` with Humming, and performance enhancements for procedures like Muse Spark Open Specialized Decode, which achieved an optimized GB300 decode speedup of 1.5x. Additionally, a persistent bug concerning the assertion error in sanity checks on Ascend 300I A2 was reported. Another significant issue arose with large `n` values in parallel sampling leading to high cross-request latency, highlighting ongoing challenges in the system.

#### ✅ Merged PRs
- [#63348](https://github.com/vllm-project/vllm/pull/63348) [Docs] Add Qwen3-4B and tidy Qwen entries in batch invariance tested models
- [#62234](https://github.com/vllm-project/vllm/pull/62234) [Bugfix][Spec Decode] Align speculator hidden norm in GLM-4.5/4.6 MoE and GLM-OCR MTP with GLM5Next to recycle post-final-hidden.
- [#64308](https://github.com/vllm-project/vllm/pull/64308) [Rust][Benchmark] Record ramp-up runs in the result JSON and filename
- [#64551](https://github.com/vllm-project/vllm/pull/64551) [Bugfix][Rust Frontend] Reject --dataset-path with synthetic vllm-bench datasets
- [#65300](https://github.com/vllm-project/vllm/pull/65300) [Perf][Core] Keep per-request token and block id lists out of the cyclic GC
- [#64077](https://github.com/vllm-project/vllm/pull/64077) [Perf] Muse Spark Open Specialized Decode: Optimized GB300 Decode (1.5x)
- [#65529](https://github.com/vllm-project/vllm/pull/65529) [Recipe] Kimi-K3: add B200 AgentX aggregated Mooncake preset
- [#62647](https://github.com/vllm-project/vllm/pull/62647) [Bugfix][Frontend] Materialize DeepSeek V4.1 content iterators before deepcopy
- [#64763](https://github.com/vllm-project/vllm/pull/64763) [ROCm][HY4] Use breakable graphs without torch.compile
- [#60989](https://github.com/vllm-project/vllm/pull/60989) [MRV2][Spec Decode] Refactor AR speculators and enable CUDA Graph for draft model
- [#56606](https://github.com/vllm-project/vllm/pull/56606) [Bugfix][Quantization] Fix online MoE weight conversion `KeyError: 'weight_scale'` with Humming
- [#62203](https://github.com/vllm-project/vllm/pull/62203) [Perf][ToolParser] Scan Kimi K3 streaming tool calls incrementally
- [#65284](https://github.com/vllm-project/vllm/pull/65284) [Rust][Benchmark] Keep transport failures visible in measured requests
- [#65087](https://github.com/vllm-project/vllm/pull/65087) [ROCm][Perf][MiniMax-M3.1] Four-wave decode top-k for the NVFP4 indexer
- [#59736](https://github.com/vllm-project/vllm/pull/59736) [Bugfix][Rust Frontend] Fail token-less streams in vllm-bench openai-chat
- [#65504](https://github.com/vllm-project/vllm/pull/65504) [Step5] Allow MegaMoE with pipeline parallelism
- [#64059](https://github.com/vllm-project/vllm/pull/64059) [Bugfix] Fix DFlash draft acceptance of 0 with FULL CUDA graphs
- [#65443](https://github.com/vllm-project/vllm/pull/65443) [CI][Test] Skip multi-node-only pipeline-parallel cases at collection
- [#57042](https://github.com/vllm-project/vllm/pull/57042) [Kernel] Accumulate ranks in absolute order in 2-stage custom all-reduce
- [#65331](https://github.com/vllm-project/vllm/pull/65331) [Bugfix][KV Connector] Mooncake store: register the committed blocks of an extensible KV cache
- [#64028](https://github.com/vllm-project/vllm/pull/64028) [CI/Build] Publish nightly EFA image to DockerHub
- [#64743](https://github.com/vllm-project/vllm/pull/64743) [Bugfix][Mistral] Carry token ids in stream state for byte-fallback tokens
- [#65046](https://github.com/vllm-project/vllm/pull/65046) [Bugfix][DSv4] Skip empty compressed indexer prefill chunks
- [#65274](https://github.com/vllm-project/vllm/pull/65274) [Bugfix] Step3 tool parser: coerce nullable and object/array parameters by schema
- [#65488](https://github.com/vllm-project/vllm/pull/65488) [Perf][Spec Decode] Pad DFlash draft inputs on extra programs of the same launch
- [#65100](https://github.com/vllm-project/vllm/pull/65100) [Perf][Spec Decode] Skip vocab blocks with no target token in the resample kernel
- [#65413](https://github.com/vllm-project/vllm/pull/65413) [Bugfix] Size the extensible KV cache from UMA-corrected free memory
- [#65319](https://github.com/vllm-project/vllm/pull/65319) [Core][KV Connector] Start capped async KV loads while the batch is full
- [#63419](https://github.com/vllm-project/vllm/pull/63419) [ROCm] Migrate Aiter sigmoid to topk_gating
- [#64559](https://github.com/vllm-project/vllm/pull/64559) [HiSparse] Remove dead code, unused custom-op arguments, and a stale connector check
- [#64580](https://github.com/vllm-project/vllm/pull/64580) [Kernel][DSA] Restore FP32 indexer MQA logits for non-DeepSeek models and add `indexer_logits_dtype`
- [#64916](https://github.com/vllm-project/vllm/pull/64916) [Spec Decode][Perf] Fuse DFlash2 candidate edge scoring into a Triton kernel
- [#57167](https://github.com/vllm-project/vllm/pull/57167) [Bugfix][MoE] Reject non-contiguous routing tensors
- [#65455](https://github.com/vllm-project/vllm/pull/65455) [KV Offload] Adapt to the new KVCR key adapter API
- [#65495](https://github.com/vllm-project/vllm/pull/65495) [CI][Test] Validate manual NVFP4 fusion in NVIDIA Qwen mixed-precision test
- [#64723](https://github.com/vllm-project/vllm/pull/64723) [Perf][Qwen3.5] (NVIDIA path) Fused AR+norm+quant
- [#63949](https://github.com/vllm-project/vllm/pull/63949) [ROCm][CI] Untrusted base builds wait for main's images instead of rebuilding them
- [#64132](https://github.com/vllm-project/vllm/pull/64132) [ROCm][CI] Bake the fast-exit plugin into the test image and fix the ray-compat pin strip
- [#65439](https://github.com/vllm-project/vllm/pull/65439) [CI][Tests] Remove timing dependence from Engram prefetch synchronization test
- [#65496](https://github.com/vllm-project/vllm/pull/65496) [Bugfix][MiniMax-M3] Don't emit MXFP8 from the input norm under sequence parallelism
- [#62565](https://github.com/vllm-project/vllm/pull/62565) [ROCm][Perf] Fix Kimi-K2.6 int4 MoE prefill regression on Triton 3.8 (gfx950 tuned config)
- [#64518](https://github.com/vllm-project/vllm/pull/64518) [Bugfix][Tool Parser] Keep raw text for string parameters with union/enum/$ref schemas (Muse, MiniCPM5, Poolside)
- [#62750](https://github.com/vllm-project/vllm/pull/62750) [Quantization] Block Hadamard input rotation for linear layers: online `mxfp4_hadamard32` and Quark online-rotation checkpoints
- [#65125](https://github.com/vllm-project/vllm/pull/65125) [Bugfix][Spec Decode] Muse Spark DSpark: initialize _context_kv_proj so the draft loads
- [#65459](https://github.com/vllm-project/vllm/pull/65459) [Bugfix][Frontend] Support min_tokens in the Anthropic Messages API
- [#63742](https://github.com/vllm-project/vllm/pull/63742) [Perf][Mamba] Use the shared checkpoint exporter for Mamba2 and drop ssd_checkpoint
- [#64989](https://github.com/vllm-project/vllm/pull/64989) [Bugfix][HiSparse] Release temporary device KV bindings after graph profiling
- [#65214](https://github.com/vllm-project/vllm/pull/65214) [HiSparse] Support the extensible KV cache
- [#65452](https://github.com/vllm-project/vllm/pull/65452) [Misc] Add LiteTopK acknowledgement to fused_mqa_topk
- [#65258](https://github.com/vllm-project/vllm/pull/65258) [Doc] MiniMax-M3.1-Flash: drop DEP4 c96 and c128 from the GB300 AgentX presets
- [#65457](https://github.com/vllm-project/vllm/pull/65457) [Bugfix] Keep the extensible tensor's PyCapsule_New prototype private
- [#65467](https://github.com/vllm-project/vllm/pull/65467) [Recipe] Kimi-K3: refresh B300 AgentX preset to InferenceX #4381 head
- [#65460](https://github.com/vllm-project/vllm/pull/65460) [CI] Enroll 1 step in automatic sharding: UMBP Connector TP2 Integration
- [#65216](https://github.com/vllm-project/vllm/pull/65216) [Frontend] Add granite_toolcall_parser for Granite 4.2 tool calling
- [#64241](https://github.com/vllm-project/vllm/pull/64241) [CI] Pin existing dependency hashes and enforce immutable references
- [#65230](https://github.com/vllm-project/vllm/pull/65230) [Quantization] Remove QuTLASS and fp_quant, run QuIP NVFP4 on Humming
- [#63801](https://github.com/vllm-project/vllm/pull/63801) [Perf][HiSparse] Prefetch speculative groups with bounded copy workers
- [#60418](https://github.com/vllm-project/vllm/pull/60418) [ROCm] [RDNA] [Perf] Add tuned configs for TRITON_ATTN kernel and swap places of TRITON_ATTN and ROCM_ATTN in priority list
- [#62633](https://github.com/vllm-project/vllm/pull/62633) [Perf][Kernel][DSv4.1] Swap-AB CuTe DSL decode attention for small TP2/TP4 steps
- [#65206](https://github.com/vllm-project/vllm/pull/65206) [Bugfix][Model] Share one RoPE cache across Muse Spark NVIDIA layers
- [#64317](https://github.com/vllm-project/vllm/pull/64317) [ROCm][Perf] Keep 32-bit buffer addressing for per-token-head KV and AITER cross-attention fallback
- [#56277](https://github.com/vllm-project/vllm/pull/56277) [MM] Mistral vision Encoder CG support
- [#65423](https://github.com/vllm-project/vllm/pull/65423) [Perf][Startup] Keep openai out of import vllm.config via lazy ToolServer import
- [#65322](https://github.com/vllm-project/vllm/pull/65322) [ROCm][Perf] W4A16: retune int4 skinny GEMM decode tuples for gfx115x
- [#65253](https://github.com/vllm-project/vllm/pull/65253) [Bugfix][Benchmark] Preserve inactive expert IDs in synthetic forward routing
- [#63754](https://github.com/vllm-project/vllm/pull/63754) [Fast Start] Support ModelOpt CUTLASS FP8 weight-cache restarts

#### 🐛 New Issues
- [#65523](https://github.com/vllm-project/vllm/issues/65523) [Bug]: MiMo-V2.6 video timestamps ignore real frame times (every clip is labelled 00:00–00:30) `bug` 💬2
- [#65332](https://github.com/vllm-project/vllm/issues/65332) [Bug]: Large `n` (parallel sampling) in /v1/chat/completions causes severe cross-request latency `bug` 💬2
- [#65550](https://github.com/vllm-project/vllm/issues/65550) [Bug]: After a full-prompt KV connector load, the recomputed last token's sliding window reads the null block `bug` 💬1
- [#65551](https://github.com/vllm-project/vllm/issues/65551) [Bug] AssertionError in sanity_check_mm_encoder_outputs on Ascend 300I A2 (vllm-ascend): multimodal embeddings is NoneType `multi-modality` 💬1
- [#65378](https://github.com/vllm-project/vllm/issues/65378) [Bug]: Extensible KV cache undersizes the KV cache on integrated (UMA) GPUs, down to 0 blocks: free memory read with raw cudaMemGetInfo `quantization` 💬1
- [#65447](https://github.com/vllm-project/vllm/issues/65447) [Feature]: Replace CUTLASS MXFP4 W4A4 MoE (CutlassExpertsMxfp4) with FlashInfer kernels on Blackwell `feature request` `nvidia` `quantization` 💬1
- [#65391](https://github.com/vllm-project/vllm/issues/65391) [Bug]: Resolve Triton kernel block sizes per platform instead of hardcoding them `bug` `structured-output` 💬1
- [#65465](https://github.com/vllm-project/vllm/issues/65465) [Bug][Spec Decode][Structured Output] Reverting #54442 reopens grammar-invalid proposal acceptance in async scheduling `structured-output` 💬1
- [#65456](https://github.com/vllm-project/vllm/issues/65456) [CI Failure][ROCm]: MI355 spec decode tests OOM with the extensible KV cache `rocm` `ci-failure` 💬1
- [#65401](https://github.com/vllm-project/vllm/issues/65401) [Bug]: get_top_k_tokens applies scaling and soft capping in the wrong order `bug` 💬1
- [#65411](https://github.com/vllm-project/vllm/issues/65411) [Bug]: /v1/messages renders consecutive assistant messages as separate turns `rocm` 💬1
- [#65390](https://github.com/vllm-project/vllm/issues/65390) [ROCm] A text-only model needs torchvision, and you find out 15 minutes into JIT compilation `rocm` 💬1
- [#65387](https://github.com/vllm-project/vllm/issues/65387) [Bug]: TP workers wedge permanently in Triton kernel launch (GDN layer_norm_fwd) with idle GPUs; Qwen3.5 + MTP, v0.29.0 💬1
- [#65385](https://github.com/vllm-project/vllm/issues/65385) [Bug]: GDN Triton/FLA prefill gives wrong, non-deterministic results on Hopper (H20) with triton 3.6: `chunk_scaled_dot_kkt_fwd` autotune configs with BK < K and num_warps >= 4 are broken `bug` `batch-invariance` 💬1
- [#65327](https://github.com/vllm-project/vllm/issues/65327) [Core]: DRY BlockPool.get_new_blocks with caching + metrics on/off variable factored out of the loop 💬1
- [#65560](https://github.com/vllm-project/vllm/issues/65560) [Tracking] Replace Marlin with Humming across NVIDIA architectures `RFC` `nvidia` `quantization`
- [#65548](https://github.com/vllm-project/vllm/issues/65548) [RFC]: Source Identity and Semantic Metadata for KV Cache Events `RFC`
- [#65545](https://github.com/vllm-project/vllm/issues/65545) [RFC]: Lifecycle hooks for endpoint plugins (readiness and graceful drain), with an out-of-tree Riva-compatible speech API
- [#65543](https://github.com/vllm-project/vllm/issues/65543) [RFC]: Scheduler-owned persistent state for streaming RNN-T ASR (model starts as a plugin) `scheduler`
- [#65533](https://github.com/vllm-project/vllm/issues/65533) [Bug]: GLM-4.7-AWQ on Blackwell (sm_120) produces degenerate/looping output on v0.25.1 but correct on v0.14.0 — regression in compiled AWQ-MoE kernels `bug` `quantization` `glm`
- [#65531](https://github.com/vllm-project/vllm/issues/65531) [Bug]: Precomputed image or video embeddings crash the engine when the encoder CUDA graph is on
- [#65515](https://github.com/vllm-project/vllm/issues/65515) [Performance]: Large CPU->GPU KV offload loads stall the worker thread inside cuMemcpyBatchAsync
- [#65513](https://github.com/vllm-project/vllm/issues/65513) [Performance]: Gemma 4 full-attention layers run the Triton kernel for the whole prefill whenever the batch carries image/video spans
- [#65503](https://github.com/vllm-project/vllm/issues/65503) [Feature]: vllm.Render for completions, Anthropic Messages, and Responses, with raw-JSON input and optional client-schema output
- [#65502](https://github.com/vllm-project/vllm/issues/65502) [RFC]: First-class, trusted forwarded prompt token IDs on the chat, Messages, and Responses routes
- [#65468](https://github.com/vllm-project/vllm/issues/65468) [Bug][Spec Decode] DSD K=0: draft-KV retention cost under batch-size ladders + tier-edge release design (with high-concurrency corroboration for #53426)
- [#65451](https://github.com/vllm-project/vllm/issues/65451) [Bug]: GLM-5.3 at max_model_len=1M crashes at startup on B300 (illegal memory access in TRT-LLM FMHA) since #64806 sparse-indexer decode chunking `glm`
- [#65440](https://github.com/vllm-project/vllm/issues/65440) [Feature]: CUDA 12 wheels for v0.33.x (torch 2.14.0 has cu126 only), and three stale CUDA gates that break CUDA 12.6 source builds
- [#65430](https://github.com/vllm-project/vllm/issues/65430) [Bug][Spec Decode][Structured Output] Reverting #54442 reopens grammar-invalid proposal acceptance in async scheduling `structured-output`
- [#65424](https://github.com/vllm-project/vllm/issues/65424) [Feature]: Add opt-in in-flight request deduplication for chat completions `feature request`
- [#65405](https://github.com/vllm-project/vllm/issues/65405) [Bug]: MoE w2_bias is added tp_size times under tensor parallelism
- [#65388](https://github.com/vllm-project/vllm/issues/65388) [Bug]: Scale-out `/render` drops `max_tokens: 16` (the `/v1/completions` default) from `sampling_params`, so `/inference/v1/generate` ignores the limit `bug`
- [#65384](https://github.com/vllm-project/vllm/issues/65384) [RFC]: Decouple Physical PCP Topology from Per-Forward Attention Layout and Draft Execution Policy `RFC`
- [#65364](https://github.com/vllm-project/vllm/issues/65364) [Bug]: [CPU] DeepSeek-V4 fails at the first decode step with KeyError: 'c1a' `bug` `deepseek` `quantization` `DSv4`
- [#65360](https://github.com/vllm-project/vllm/issues/65360) [Bug]: /inference/v1/generate usage omits reasoning_tokens in derender mode `bug`
- [#65359](https://github.com/vllm-project/vllm/issues/65359) [Proposal][Perf] Wire flashinfer's PcieIpcAllGatherWorkspace into CudaCommunicator.all_gather for latency-bound TP gathers
- [#65358](https://github.com/vllm-project/vllm/issues/65358) [Feature request] DeepGEMM MegaMoE: support SM120 (Blackwell workstation) GPUs
- [#65357](https://github.com/vllm-project/vllm/issues/65357) [Bug] Empty/missing string content on a developer message returns 500 (and leaks internal _image_indices) instead of a 400
- [#65328](https://github.com/vllm-project/vllm/issues/65328) [Bug]: shared streaming helper synthesizes delta_token_ids that serving never sends, changing engine behavior `tool-calling`
- [#65348](https://github.com/vllm-project/vllm/issues/65348) [Feature]: Rust frontend: allow fetching multimodal media from private/internal hosts `feature request` `multi-modality` `rust`
- [#65342](https://github.com/vllm-project/vllm/issues/65342) [Bug]: collective_rpc timeout does not bound enqueue wait on a full broadcast ring
- [#65337](https://github.com/vllm-project/vllm/issues/65337) [Bug]: GDN metadata builder hits CUDA device-side assert when adaptive verification trims a mixed prefill+spec batch `bug`
- [#65325](https://github.com/vllm-project/vllm/issues/65325) [Bug]: Requests queued during level-2 sleep run before `reload_weights` and return wrong output with HTTP 200
- [#65324](https://github.com/vllm-project/vllm/issues/65324) [Bug]: Requests queued during level-2 sleep run before `reload_weights` and return wrong output with HTTP 200
- [#65312](https://github.com/vllm-project/vllm/issues/65312) High-concurrency MTP on GLM-5.3 (H20 x8, batch 256): static K loses 10x; per-batch-size K table recovers it `glm`

#### 🔒 Closed Issues
- [#56851](https://github.com/vllm-project/vllm/issues/56851) [RFC]: Request level text and derender output on `/inference/v1/generate`
- [#50237](https://github.com/vllm-project/vllm/issues/50237) [Bug]: ROCm mixed KV-cache layouts abort speculative decoding with AssertionError
- [#48898](https://github.com/vllm-project/vllm/issues/48898) [Bug]: NVFP4 garbage output under torch.compile when per-rank K is not 32-aligned (TP8 on SM120): padded block-scale column reads stale memory; eager/Marlin/aligned-TP correct
- [#52415](https://github.com/vllm-project/vllm/issues/52415) [Bug] XPU qnorm/rope kernel: overlapping stores in one program corrupt the KV cache nondeterministically
- [#60408](https://github.com/vllm-project/vllm/issues/60408) [Bug][ROCm] gfx950: ROCM_AITER_UNIFIED_ATTN decode regressed in v0.31.0 (-19%, and MTP decode decays with context) - AITER 0.1.23's Gluon backend
- [#64106](https://github.com/vllm-project/vllm/issues/64106) [Bug]: Kimi-K3 on MI355X: --kv-cache-dtype fp8 silently breaks accuracy (GSM8K 0.975 -> 0.305)
- [#62606](https://github.com/vllm-project/vllm/issues/62606) [Bug][ROCm]: ROCM_AITER_UNIFIED_ATTN gives wrong output on gfx950 when a layer's KV cache is 2–4 GiB
- [#54206](https://github.com/vllm-project/vllm/issues/54206) [Bug]: Quark FSE compatibility check matches `shared_expert_gate`, silently disabling fused shared experts on Qwen MoE MXFP4
- [#64226](https://github.com/vllm-project/vllm/issues/64226) [Bug]: Rust vllm-bench saves ramp-up runs as fixed-rate results
- [#63587](https://github.com/vllm-project/vllm/issues/63587) [Bug]: DFlash draft acceptance drops to ~0 on 0.32.0 with FULL CUDA graphs (in-graph draft metadata, #60692)
- [#63514](https://github.com/vllm-project/vllm/issues/63514) [Bug]: `hadacore_transform` gives wrong results for odd row counts (INT4 per-token-head KV cache): garbage K/V and intermittent illegal memory access
- [#64953](https://github.com/vllm-project/vllm/issues/64953) [Bug]: `seed=-1` passes config validation and kills engine init inside `np.random.seed` ("Seed must be between 0 and 2**32 - 1") — while `SamplingParams` already treats `-1` as "no seed"
- [#59722](https://github.com/vllm-project/vllm/issues/59722) [Bug]: Rust vllm-bench openai-chat counts token-less streams as successful
- [#54644](https://github.com/vllm-project/vllm/issues/54644) [RFC]: Preemption victim-selection extension point (least-computed-first as the first built-in)
- [#65075](https://github.com/vllm-project/vllm/issues/65075) [Bug]: Bi-encoder scoring token limits fail with MistralTokenizer
- [#65551](https://github.com/vllm-project/vllm/issues/65551) [Bug] AssertionError in sanity_check_mm_encoder_outputs on Ascend 300I A2 (vllm-ascend): multimodal embeddings is NoneType
- [#63363](https://github.com/vllm-project/vllm/issues/63363) [RFC]: Keep per-request token lists out of EngineCore garbage collection
- [#65378](https://github.com/vllm-project/vllm/issues/65378) [Bug]: Extensible KV cache undersizes the KV cache on integrated (UMA) GPUs, down to 0 blocks: free memory read with raw cudaMemGetInfo
- [#65095](https://github.com/vllm-project/vllm/issues/65095) [Bug]: The message API doesn't support min_tokens for now
- [#65465](https://github.com/vllm-project/vllm/issues/65465) [Bug][Spec Decode][Structured Output] Reverting #54442 reopens grammar-invalid proposal acceptance in async scheduling
- [#61319](https://github.com/vllm-project/vllm/issues/61319) [Bug]: Greedy (temperature=0) decoding is not reproducible across repeated calls on the same engine for LiquidAI/LFM2-8B-A1B (hybrid mamba)
- [#65035](https://github.com/vllm-project/vllm/issues/65035) [Bug]: Anthropic Messages stream reports the whole prompt as input_tokens in message_start
- [#64538](https://github.com/vllm-project/vllm/issues/64538) [Bug]: Rust vllm-bench silently ignores --dataset-path with synthetic datasets (benchmarks random prompts instead of the user's file)
- [#65273](https://github.com/vllm-project/vllm/issues/65273) [Bug]: Step3 tool parser does not coerce nullable or object/array parameters
- [#64517](https://github.com/vllm-project/vllm/issues/64517) [Bug]: Muse, MiniCPM5 and Poolside V1 tool parsers JSON-decode string parameters not declared as plain "type": "string" (e.g. Optional[str])
- [#65205](https://github.com/vllm-project/vllm/issues/65205) [Bug]: Muse Spark (NVIDIA path): 46 private fp32 RoPE tables of 1M rows cost 11.5 GiB per GPU
- [#65179](https://github.com/vllm-project/vllm/issues/65179) CATHLEENANNTICO
- [#65388](https://github.com/vllm-project/vllm/issues/65388) [Bug]: Scale-out `/render` drops `max_tokens: 16` (the `/v1/completions` default) from `sampling_params`, so `/inference/v1/generate` ignores the limit

### SGLang (`sgl-project/sglang`)

**Stars:** 38,429 · **Open issues:** 6,403 · **Last push:** <1h ago

On November 4, 2026, SGLang did not release any new versions but saw significant activity with multiple merged pull requests. Notable merges included improvements in performance and fixes, such as the replacement of an 8K performance case with a 128K case in deepseek_v4 (#48160) and the localization of DeepGEMM Mega MoE weights across locality domains (#47976). Fixes also targeted several bugs, including issues with the HiCache backup for Qwen3.8-Flash-Next-FP8 (#48145) and crashes during model optimizations with the default settings on Blackwell (#48108). Additionally, the new issue regarding Mooncake's failure due to memory region registration raises significant concerns for ongoing testing and deployment.

#### ✅ Merged PRs
- [#48160](https://github.com/sgl-project/sglang/pull/48160) [Test] [NPU] deepseek_v4: Replace 8K perf case with 128K 1P1D case and add L2 host hit-rate checks
- [#48229](https://github.com/sgl-project/sglang/pull/48229) [Perf] dsv4: Expand the low-ratio indexer page table in one Triton kernel
- [#47976](https://github.com/sgl-project/sglang/pull/47976) [Perf] [NVIDIA] moe: Localize DeepGEMM Mega MoE weights across locality domains
- [#47935](https://github.com/sgl-project/sglang/pull/47935) [Perf] dsv41: Keep MXFP4 Engram tables packed and decode E2M1 in the gather
- [#48125](https://github.com/sgl-project/sglang/pull/48125) [Feat] unified_cache: Support MiniMax-M3.1 in the direct external linker
- [#47255](https://github.com/sgl-project/sglang/pull/47255) [Fix] disaggregation: Bind NIXL transfer workers to the rank's device
- [#48244](https://github.com/sgl-project/sglang/pull/48244) [Fix] dspark: Expand [N, H] staged embeds in the DeepSeek-V4 DSpark draft forward
- [#47944](https://github.com/sgl-project/sglang/pull/47944) [Fix] attention: Migrate FLA Triton kernels off tl.make_block_ptr
- [#48278](https://github.com/sgl-project/sglang/pull/48278) [Test] dspark: Register the simulated-bonus test for CUDA CI
- [#43911](https://github.com/sgl-project/sglang/pull/43911) [Fix] hisparse: Release HiSparse rows on the KV checksum mismatch and chunked abort exits
- [#47526](https://github.com/sgl-project/sglang/pull/47526) [Perf] Kimi-K3: Enable the fused KDA decode at 6 and 3 heads per rank
- [#47552](https://github.com/sgl-project/sglang/pull/47552) [Perf] R3: Keep the routed-expert host cache only on the output rank (1/3)
- [#48246](https://github.com/sgl-project/sglang/pull/48246) [Perf] deep_select: use the 3-CTA tier for non-paged bf16 top-512 too
- [#48266](https://github.com/sgl-project/sglang/pull/48266) [Chore] [NVIDIA] deep_select: List SM107 as supported
- [#46443](https://github.com/sgl-project/sglang/pull/46443) [Fix] diffusion: Fix rollout conditioning and scalar weight checksums
- [#48243](https://github.com/sgl-project/sglang/pull/48243) [Perf] dsv4: dequantize several KV tokens per program in the V4.1 paged dequant
- [#39799](https://github.com/sgl-project/sglang/pull/39799) [Fix] mem-cache: Budget the non-DSA EAGLE draft KV pool at its DCP-widened size
- [#47821](https://github.com/sgl-project/sglang/pull/47821) [Fix] [NPU] MOE: Skip MoE padded-row kernel launches for empty tensors in case of crashing on NPU
- [#48245](https://github.com/sgl-project/sglang/pull/48245) [Perf] dsv4: four chunks per thread in mega MoE pre-dispatch for prefill-sized batches
- [#48123](https://github.com/sgl-project/sglang/pull/48123) [Feat] RL: Store output store replay fields as layer blocks at layer splits
- [#43910](https://github.com/sgl-project/sglang/pull/43910) [Refactor] scheduler: Hold the waiting queue and the chunked slot in request lists
- [#46930](https://github.com/sgl-project/sglang/pull/46930) [Perf] hicache: Wait once per write_back eviction walk, not once per victim
- [#48119](https://github.com/sgl-project/sglang/pull/48119) [Refactor] tokenizer: Fold `TokenizerWorker` into `TokenizerManager`
- [#47955](https://github.com/sgl-project/sglang/pull/47955) [Perf] srt: Record per request whether an extend row completes its prompt
- [#48131](https://github.com/sgl-project/sglang/pull/48131) [CI] [AMD] nightly-disagg: Keep all MI355X CI settings in the repo and clean up after failed jobs
- [#41916](https://github.com/sgl-project/sglang/pull/41916) [Fix] sampling: Make top-k/top-p filtering consistent across sampling paths
- [#47969](https://github.com/sgl-project/sglang/pull/47969) [CI] [AMD] pr-test: Run the MI35x 1-GPU stage after MI300 stage-b; move test_flydsl_v4nm_decode to nightly
- [#47971](https://github.com/sgl-project/sglang/pull/47971) [CI] [AMD] diffusion/minimax-h3: Skip the group-attend contract test on ROCm
- [#48192](https://github.com/sgl-project/sglang/pull/48192) [Chore] mooncake: bump mooncake version to 0.3.14
- [#48099](https://github.com/sgl-project/sglang/pull/48099) [Perf] [NVIDIA] moe: Release localized Mega MoE originals so KV capacity matches non-localized
- [#47119](https://github.com/sgl-project/sglang/pull/47119) [Feat] sgl-router: Render MiniMax-M3 and M3.1 through sglang-processor
- [#47283](https://github.com/sgl-project/sglang/pull/47283) [Fix] [AMD] deepseek-v4: Respect AITER selection for Q-LoRA quantization

#### 🐛 New Issues
- [#48145](https://github.com/sgl-project/sglang/issues/48145) [Bug] Mooncake HiCache backup fails for Qwen3.8-Flash-Next-FP8 💬2
- [#48196](https://github.com/sgl-project/sglang/issues/48196) [CI] diffusion: Wan VAE decode time spikes on the 1-gpu-5090 sm* runners 💬2
- [#48221](https://github.com/sgl-project/sglang/issues/48221) [CI] Arm64: test_moe.py fails with missing sgl_kernel.fused_experts_cpu on main 💬1
- [#48108](https://github.com/sgl-project/sglang/issues/48108) [Bug] ModelOpt NVFP4 MoE crashes at warmup with AttributeError 'g1_scale_c' under the default --moe-runner-backend auto on Blackwell 💬1
- [#48300](https://github.com/sgl-project/sglang/issues/48300) [Feature][RFC] Preserve measured cache-write usage across PD handoff
- [#48260](https://github.com/sgl-project/sglang/issues/48260) [Bug] DSA models crash on first prefill with --cpu-offload-gb: breakable prefill CUDA graph replays the DSA indexer eager break with CPU-offloaded weights (mat2 is on cpu)
- [#48232](https://github.com/sgl-project/sglang/issues/48232) [RFC] Engine-free render service for sglang-processor over gRPC (Lower/Respond), including Messages and Responses
- [#48230](https://github.com/sgl-project/sglang/issues/48230) [Bug] PD + Mooncake: different DSA backends on prefill and decode silently corrupt the decode KV ("Requested address ... not found")
- [#48225](https://github.com/sgl-project/sglang/issues/48225) Add pinned model-file checksum verification to SGLang Diffusion loading
- [#48215](https://github.com/sgl-project/sglang/issues/48215) [Feature] diffusion: TP=2 support for GGUF with dynamic LoRA
- [#48206](https://github.com/sgl-project/sglang/issues/48206) [CI] PD: Mooncake 'Memory region not registered by any active device(s)' fails a whole class on the 8-gpu-h20 runners
- [#48172](https://github.com/sgl-project/sglang/issues/48172) [Bug] --tool-call-parser auto finds no parser on Qwen2.5-0.5B, Qwen3 2507 and Ling-mini-2.0, so tool calls come back as text
- [#48150](https://github.com/sgl-project/sglang/issues/48150) [Bug] fused_marlin_moe is not run-to-run deterministic on sm_90+ (atomic adds, moe_align_block_size token order); --enable-deterministic-inference does not cover it
- [#48144](https://github.com/sgl-project/sglang/issues/48144) [RFC] KV Cache Optimization for Cosmos3-Nano-Sim-Bimanual
- [#48141](https://github.com/sgl-project/sglang/issues/48141) [Bug] MiniMax H3 cookbook silently downscales 1440p video requests to 768p
- [#48127](https://github.com/sgl-project/sglang/issues/48127) [Bug] RadixArk/Muse-Glimmer-NVFP4 fails at load since #45632 (MXFP8 lm_head), and on Hopper also at DeepGEMM warmup
- [#48080](https://github.com/sgl-project/sglang/issues/48080) [Feature] Model registry: eager import of all model modules hides failures (one bad dependency → 0 models registered) and adds ~2 s startup

#### 🔒 Closed Issues
- [#36140](https://github.com/sgl-project/sglang/issues/36140) [Bug] DFLASH speculative decoding is not supported under PD disaggregation: spec_info None crash, then watchdog self-kill
- [#30760](https://github.com/sgl-project/sglang/issues/30760) [Bug] HiCache prefetch all_reduce deadlock with TP=4, no PP — mismatched call count in check_prefetch_progress
- [#36081](https://github.com/sgl-project/sglang/issues/36081) [Bug] DSV4F0731+DSPARK ERROR IN SGLANG 0.5.18
- [#36179](https://github.com/sgl-project/sglang/issues/36179) [Bug] When using hicache to enable L2/L3 storage in DeepSeek V4, token loop repetition occurs very frequently
- [#34513](https://github.com/sgl-project/sglang/issues/34513) [RFC] Agent-aware session affinity without routing keys: a router policy
- [#37579](https://github.com/sgl-project/sglang/issues/37579) [Bug] GLM-V (glm4v processor): stray multimodal placeholder strings in message text cause 500 "Mismatch: More IMAGE tokens found than corresponding data provided"
- [#35270](https://github.com/sgl-project/sglang/issues/35270) [Bug] Radix cache `evictable_size()` double-counts shared pages, killing the scheduler at idle
- [#37089](https://github.com/sgl-project/sglang/issues/37089) [Bug] Qwen3.8-Flash-Next W4A16 on A100 TP4: Marlin MoE invalid thread config; Triton MoE then hits QSA FA-CuTe capture failure
- [#38022](https://github.com/sgl-project/sglang/issues/38022) [Bug] A single malformed multimodal request takes down the whole engine, and client retries spread it node-by-node across the cluster
- [#37838](https://github.com/sgl-project/sglang/issues/37838) [Feature] DeepSeek-V4 trtllm attention backend: support PD disaggregation (uniform-FP8 KV layout in the PD handshake)
- [#36935](https://github.com/sgl-project/sglang/issues/36935) [Prefix Cache / Hybrid] Branch reuse silently collapses under LRU pressure when (kv_pool_tokens / chunked_prefill_size) > max_mamba_cache_size
- [#37936](https://github.com/sgl-project/sglang/issues/37936) Reproducible EAGLE `vectorized_gather_kernel` OOB with concurrent constrained tool request → NCCL abort / Xid 43
- [#37848](https://github.com/sgl-project/sglang/issues/37848) [Bug] Missing layer prefixes bypass per-module quantization setting
- [#37608](https://github.com/sgl-project/sglang/issues/37608) [Bug] --tool-call-parser auto selects glm45 instead of spark25 for Spark-X2.5
- [#31763](https://github.com/sgl-project/sglang/issues/31763) How should I configure the service to make the model return tool calls that comply with the OpenAI standard instead of XML format?
- [#38073](https://github.com/sgl-project/sglang/issues/38073) [NVFP4 MoE Marlin fallback] w13/w2_blockscale_swizzled dead copies waste ~3.5 GiB per GPU (SM80–SM90x)
- [#38013](https://github.com/sgl-project/sglang/issues/38013) [Bug]
- [#37904](https://github.com/sgl-project/sglang/issues/37904) [PDMux] scheduler event loop deadlocks in decode_stream.synchronize() when a mixed decode+split-prefill batch follows a >=4K-token prefill (hybrid GDN models)
- [#37765](https://github.com/sgl-project/sglang/issues/37765) [PD] Make request role and state-transfer shape explicit
- [#37912](https://github.com/sgl-project/sglang/issues/37912) [Bug] [Rust gateway] reasoning_effort: support full OpenAI 7-tier set (blocked on smg release)
- [#46444](https://github.com/sgl-project/sglang/issues/46444) [Bug] diffusion: Rollout conditioning misalignment and scalar weight checksum failure
- [#48039](https://github.com/sgl-project/sglang/issues/48039) [Bug] 'HashTopK' object has no attribute 'topk_config' during breakable prefill CUDA graph capture

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 133,303 · **Open issues:** 2,585 · **Last push:** <1h ago

On November 4, 2026, several new versions of llama.cpp were released: b12094 introduced a faster TOP_K for the backend sampler, and b12091 improved the saving and restoring of MTP hidden state. Notably, b12089 added support for Metis-1.6 models, while b12087 implemented Nemotron 3.5 Transcribe support, enhancing the model's capabilities significantly. In merged pull requests, new features included accurate support for the qwen3-vl video prompt format and enhancements to hexagon operations, both contributing to improved efficiency. Additionally, the new issue #31586 reported a CUDA error when loading DFlash with sm tensor, indicating a potential bug that may impact users.

#### 🚀 New Releases
- [b12094](https://github.com/ggml-org/llama.cpp/releases/tag/b12094) b12094
- [b12091](https://github.com/ggml-org/llama.cpp/releases/tag/b12091) b12091
- [b12090](https://github.com/ggml-org/llama.cpp/releases/tag/b12090) b12090
- [b12089](https://github.com/ggml-org/llama.cpp/releases/tag/b12089) b12089
- [b12088](https://github.com/ggml-org/llama.cpp/releases/tag/b12088) b12088
- [b12087](https://github.com/ggml-org/llama.cpp/releases/tag/b12087) b12087
- [b12086](https://github.com/ggml-org/llama.cpp/releases/tag/b12086) b12086
- [b12084](https://github.com/ggml-org/llama.cpp/releases/tag/b12084) b12084
- [b12083](https://github.com/ggml-org/llama.cpp/releases/tag/b12083) b12083
- [b12081](https://github.com/ggml-org/llama.cpp/releases/tag/b12081) b12081

#### ✅ Merged PRs
- [#31619](https://github.com/ggml-org/llama.cpp/pull/31619) mtmd: accurate support for qwen3-vl video prompt format
- [#30993](https://github.com/ggml-org/llama.cpp/pull/30993) model, mtmd: add chatterbox TTS support
- [#31114](https://github.com/ggml-org/llama.cpp/pull/31114) vulkan: skip maxStorageBufferRange pre-check for non-compute tensors
- [#31552](https://github.com/ggml-org/llama.cpp/pull/31552) hexagon: add TOP_K_MASK op
- [#31356](https://github.com/ggml-org/llama.cpp/pull/31356) gemma4: graph optimizations (massive gains on pp for E2B and E4B)
- [#31279](https://github.com/ggml-org/llama.cpp/pull/31279) hexagon: faster TOP_K for the backend sampler
- [#31596](https://github.com/ggml-org/llama.cpp/pull/31596) ui: run local browser tests in installed Chrome with its sandbox on
- [#30953](https://github.com/ggml-org/llama.cpp/pull/30953) hexagon: add DSV4_HC_PRE and DSV4_HC_POST ops
- [#30141](https://github.com/ggml-org/llama.cpp/pull/30141) speculative : save and restore MTP hidden state
- [#31583](https://github.com/ggml-org/llama.cpp/pull/31583) ggml-zdnn: fix fattn test failure
- [#31134](https://github.com/ggml-org/llama.cpp/pull/31134) model : Add support for Metis-1.6 models
- [#31608](https://github.com/ggml-org/llama.cpp/pull/31608) model : enable NVFP4 LFM3 ggufs
- [#30878](https://github.com/ggml-org/llama.cpp/pull/30878) delta_net_base: refactor conv state
- [#31471](https://github.com/ggml-org/llama.cpp/pull/31471) mtmd : add Nemotron 3.5 Transcribe support
- [#31598](https://github.com/ggml-org/llama.cpp/pull/31598) model : record layer inputs in LFM3 for spec dec
- [#31443](https://github.com/ggml-org/llama.cpp/pull/31443) qwen4exp: write the conv state tail without an intermediate cont
- [#31318](https://github.com/ggml-org/llama.cpp/pull/31318) ui: add Playwright harness for recording demo videos
- [#30375](https://github.com/ggml-org/llama.cpp/pull/30375) ggml: avoid signed overflow in ggml_roll bounds check
- [#31427](https://github.com/ggml-org/llama.cpp/pull/31427) conversion : use original model tensor names in _flush_nvfp4_experts
- [#31247](https://github.com/ggml-org/llama.cpp/pull/31247) cuda: potential fix for Q8_1 correction sum
- [#31391](https://github.com/ggml-org/llama.cpp/pull/31391) cuda : gather batched tensor reads into mapped host memory (PR to master)
- [#28967](https://github.com/ggml-org/llama.cpp/pull/28967) Add nccl support for multi-node tensor parallelism
- [#31579](https://github.com/ggml-org/llama.cpp/pull/31579) tools : reject mismatched shards in GGUF split merge
- [#30499](https://github.com/ggml-org/llama.cpp/pull/30499) meta: support GLM-5.3 next sm tensor
- [#31581](https://github.com/ggml-org/llama.cpp/pull/31581) metal : fix cpy kernel for dst non-contiguous in dim 0
- [#31079](https://github.com/ggml-org/llama.cpp/pull/31079) vulkan : fix out-of-bounds NVFP4 UE4M3 scale lookup
- [#31558](https://github.com/ggml-org/llama.cpp/pull/31558) llama : drop the redundant cnv from llm_attn_mask
- [#31292](https://github.com/ggml-org/llama.cpp/pull/31292) dsv4.1: fix llama-context tests with partial offload
- [#30662](https://github.com/ggml-org/llama.cpp/pull/30662) cuda : prevent premature eviction of graphs about to be used
- [#31339](https://github.com/ggml-org/llama.cpp/pull/31339) opencl: add initial iq4_xs support
- [#31556](https://github.com/ggml-org/llama.cpp/pull/31556) chat : allow constraint type after gpt-oss final channel
- [#31550](https://github.com/ggml-org/llama.cpp/pull/31550) ci : update the HIP VGPR spill ignore list for the kv_rows FA kernel argument
- [#31455](https://github.com/ggml-org/llama.cpp/pull/31455) webgpu : add ARANGE support
- [#31570](https://github.com/ggml-org/llama.cpp/pull/31570) kv-cache : never return 0 kv_rows for sequences without cells
- [#31446](https://github.com/ggml-org/llama.cpp/pull/31446) hexagon: tiled hvx permute

#### 🐛 New Issues
- [#31586](https://github.com/ggml-org/llama.cpp/issues/31586) Eval bug: CUDA error when loading DFlash with sm tensor `bug-unconfirmed` 💬3
- [#31626](https://github.com/ggml-org/llama.cpp/issues/31626) Misc. bug: server: a tool with an invalid schema in /v1/realtime crashes llama-server `bug-unconfirmed` 💬2
- [#31585](https://github.com/ggml-org/llama.cpp/issues/31585) Eval bug: granite_swa: per-layer RoPE theta (layer_rope_theta) is ignored `bug-unconfirmed` 💬2
- [#31629](https://github.com/ggml-org/llama.cpp/issues/31629) Misc. bug: The Vulkan coopmat_stage shared-memory budget undercounts the shader allocation `bug-unconfirmed` 💬1
- [#31603](https://github.com/ggml-org/llama.cpp/issues/31603) Eval bug: ~20% slower MoE prompt processing on RDNA1 (gfx1010) since #29948 (MMQ grid order change) `bug-unconfirmed` 💬1
- [#31618](https://github.com/ggml-org/llama.cpp/issues/31618) Feature Request: Support custom special_eog_ids `enhancement`
- [#31614](https://github.com/ggml-org/llama.cpp/issues/31614) Eval bug: Execution aborted when the NONE operation is present. `bug-unconfirmed`
- [#31601](https://github.com/ggml-org/llama.cpp/issues/31601) Misc. bug: Windows llama app cannot hide 'search models' results `bug-unconfirmed`
- [#31599](https://github.com/ggml-org/llama.cpp/issues/31599) Misc. bug: HIP/gfx906 MoE prompt processing 15–50% slower since #29948 `bug-unconfirmed`
- [#31588](https://github.com/ggml-org/llama.cpp/issues/31588) Misc. bug: Code incomplete looks too similar to Copy code `bug-unconfirmed`
- [#31573](https://github.com/ggml-org/llama.cpp/issues/31573) /slots publishes per-request token counts that reveal what a local tool-using agent did; options to limit it

#### 🔒 Closed Issues
- [#28860](https://github.com/ggml-org/llama.cpp/issues/28860) Eval bug: SYCL demands extreme scratchpad allocation (2GB+) when ngram-mod is enabled
- [#28239](https://github.com/ggml-org/llama.cpp/issues/28239) [SYCL]Sysman free-memory query may be unavailable
- [#30697](https://github.com/ggml-org/llama.cpp/issues/30697) Eval bug: --moe-cache-mib crashes at load on Vulkan (RX 6900 XT, Windows)
- [#29063](https://github.com/ggml-org/llama.cpp/issues/29063) Eval bug: VRAM usage increased from b10680 (SYCL backend)
- [#30252](https://github.com/ggml-org/llama.cpp/issues/30252) server : saving idle slots to the prompt cache stalls all requests for seconds with interleaved KV cells
- [#29867](https://github.com/ggml-org/llama.cpp/issues/29867) Eval bug: GLM-5.3-Flash decode stalls on Metal because fused Lightning Indexer falls back to CPU
- [#31586](https://github.com/ggml-org/llama.cpp/issues/31586) Eval bug: CUDA error when loading DFlash with sm tensor
- [#27727](https://github.com/ggml-org/llama.cpp/issues/27727) Eval bug: Garbled output from bartowski/huihui-ai_Qwen3-Coder-Next-abliterated-GGUF running in dockerised llama.cpp build from source for ROCM with gfx1150
- [#29142](https://github.com/ggml-org/llama.cpp/issues/29142) Eval bug: hardcoded 32GB VMM pool reservation (cuMemAddressReserve) fails on Jetson Orin iGPU — all multimodal image requests crash
- [#29148](https://github.com/ggml-org/llama.cpp/issues/29148) Eval bug: Qwen 3.8 Flash Next MTP fails to load
- [#29128](https://github.com/ggml-org/llama.cpp/issues/29128) Misc. bug: LoRA loader accepts a MoE expert-count mismatch, causing an OOB write in CPU MUL_MAT_ID
- [#29129](https://github.com/ggml-org/llama.cpp/issues/29129) Feature Request: Video with audio support
- [#31520](https://github.com/ggml-org/llama.cpp/issues/31520) Eval bug: gpt-oss-20b "<|channel|>final code<|message|>" header is rejected by the parser, server returns 500

### Ollama (`ollama/ollama`)

**Stars:** 185,828 · **Open issues:** 4,566 · **Last push:** 1h ago

On November 4, 2026, Ollama released version v0.40.15, marking a notable update with the integration of bundled CUDA libraries in-process on Linux and support for the MiMo V2.6 model. Key contributions included enhancing the launch process to automatically populate Pi models and addressing the CUDA integration for better performance. Among the new issues, a significant concern was raised regarding an AuthorizationError that occurs when a 401 response body is not valid JSON. Additionally, users reported problems with Linux video input for llama-server models and a CUDA error affecting Nvidia Pascal support in the previous version. Overall, the updates reflect ongoing enhancements and user feedback shaping future development.

#### 🚀 New Releases
- [v0.40.15-rc0](https://github.com/ollama/ollama/releases/tag/v0.40.15-rc0) v0.40.15

#### ✅ Merged PRs
- [#19460](https://github.com/ollama/ollama/pull/19460) launch: populate Pi models automatically
- [#19400](https://github.com/ollama/ollama/pull/19400) model: add MiMo V2.6 model support
- [#19433](https://github.com/ollama/ollama/pull/19433) mlx: load bundled CUDA libraries in-process on Linux

#### 🐛 New Issues
- [#19489](https://github.com/ollama/ollama/issues/19489) api: AuthorizationError lost when 401 response body is not valid JSON `bug` 💬2
- [#19504](https://github.com/ollama/ollama/issues/19504) pull: verify GGUF blobs during download to avoid post-pull re-hash latency 💬1
- [#19483](https://github.com/ollama/ollama/issues/19483) Ollama GitHub Issues `bug` 💬1
- [#19492](https://github.com/ollama/ollama/issues/19492) Responses API silently truncates oversized input with truncation disabled (0.40.13 and 0.40.14, Bonsai 27B) `bug` 💬1
- [#19490](https://github.com/ollama/ollama/issues/19490) format: HumanNumber rounds past its own unit boundary (999500 → "1000K" instead of "1M") `bug` 💬1
- [#19485](https://github.com/ollama/ollama/issues/19485) nvidia pascal support broken (CUDA error) in ver 0.40.13 `bug` 💬1
- [#19482](https://github.com/ollama/ollama/issues/19482) Ollama GitHub Issues `bug` 💬1
- [#19503](https://github.com/ollama/ollama/issues/19503) Linux video input for llama-server models
- [#19495](https://github.com/ollama/ollama/issues/19495) Windows: `cmake -G Ninja` builds the nested llama-server with the Visual Studio generator (CUDA install fails, CPU payload ships without llama-server.exe)
- [#19493](https://github.com/ollama/ollama/issues/19493) Tool call cut off by `num_predict` / `max_tokens` returns HTTP 500 on GGUF-template models

#### 🔒 Closed Issues
- [#19471](https://github.com/ollama/ollama/issues/19471) No support for EAI email addresses
- [#19485](https://github.com/ollama/ollama/issues/19485) nvidia pascal support broken (CUDA error) in ver 0.40.13
- [#19482](https://github.com/ollama/ollama/issues/19482) Ollama GitHub Issues

### LiteLLM (`BerriAI/litellm`)

**Stars:** 62,653 · **Open issues:** 5,668 · **Last push:** <1h ago

On November 4, 2026, LiteLLM announced the release of version v1.109.0-rc.1, featuring a crucial update that ensures all Docker images are signed with cosign for enhanced security. Significant improvements include the addition of Wally as an OpenAI-compatible provider and updates to the public AI Hub, which is now a searchable list with a details pane. Noteworthy bug fixes were implemented, addressing issues such as the Admin UI's raw spend-log read timeout in Postgres and a mid-stream failure in reasoning-only prefix calls. Among the newly reported issues, a critical bug was identified where the proxy exits at startup when the timezone is set to Asia/Calcutta, highlighting ongoing deployment challenges.

#### 🚀 New Releases
- [v1.109.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.109.0-rc.1) v1.109.0-rc.1

#### ✅ Merged PRs
- [#49802](https://github.com/BerriAI/litellm/pull/49802) feat(videos): serve custom_provider_map BaseVideoConfig providers on /v1/videos (#49785) [backport stable/1.106.x]
- [#49965](https://github.com/BerriAI/litellm/pull/49965) fix(proxy): cancel the Admin UI's raw spend-log reads in Postgres after 30s
- [#49227](https://github.com/BerriAI/litellm/pull/49227) fix(agentic)!: surface a failed agentic follow-up call instead of the pre-loop tool call
- [#49496](https://github.com/BerriAI/litellm/pull/49496) feat(ui): rebuild the public AI Hub as a searchable list with a details pane
- [#46063](https://github.com/BerriAI/litellm/pull/46063) fix(anthropic): answer an upstream Anthropic 529 as 529 overloaded_error on /v1/messages
- [#49987](https://github.com/BerriAI/litellm/pull/49987) ci: run the OSV scan on rc branches
- [#49985](https://github.com/BerriAI/litellm/pull/49985) chore(deps): align 1.108 dependency versions with main
- [#49973](https://github.com/BerriAI/litellm/pull/49973) fix(ui): send only shown SSO fields when editing, and keep env-row SSO values behind a blank stored value
- [#49981](https://github.com/BerriAI/litellm/pull/49981) fix(bedrock): map token counting on the alias Claude Sonnet 4.5 and Haiku 4.5 rows to bedrock-runtime
- [#49956](https://github.com/BerriAI/litellm/pull/49956) feat(auth): add link-only JWT mapping and remove route eligibility filtering
- [#49974](https://github.com/BerriAI/litellm/pull/49974) chore(cost-map): remove the 52 rows whose provider retired them before 2026
- [#45662](https://github.com/BerriAI/litellm/pull/45662) feat: add Wally as an OpenAI-compatible provider
- [#49919](https://github.com/BerriAI/litellm/pull/49919) fix(credentials): preserve stored info when patching credentials
- [#49952](https://github.com/BerriAI/litellm/pull/49952) fix(router): keep a deployment's token limits off the shared backend cost map key
- [#49883](https://github.com/BerriAI/litellm/pull/49883) feat(proxy): configure the request header buffer size
- [#49964](https://github.com/BerriAI/litellm/pull/49964) fix(vertex-ai): sync tier prices and retirement floors
- [#49532](https://github.com/BerriAI/litellm/pull/49532) fix(main)!: carry the full per-call price entry on the logging object instead of writing litellm.model_cost
- [#49978](https://github.com/BerriAI/litellm/pull/49978) chore: rebuild Admin UI bundle on rc/1.109.0
- [#49971](https://github.com/BerriAI/litellm/pull/49971) chore(blog): refresh the bundled blog posts backup with the latest 50 posts from the docs RSS feed
- [#49968](https://github.com/BerriAI/litellm/pull/49968) feat(cost-map): record deprecation_source on every dated row that has a known provider notice
- [#49962](https://github.com/BerriAI/litellm/pull/49962) test(e2e): repair rc/1.108.0 release qualification
- [#49967](https://github.com/BerriAI/litellm/pull/49967) test(mcp): hold the progress test's upstream notification acks until they are dispatched
- [#49528](https://github.com/BerriAI/litellm/pull/49528) feat(ui): rebuild the command palette on shadcn Command
- [#48600](https://github.com/BerriAI/litellm/pull/48600) feat(proxy): add general_settings.fips_mode startup gate
- [#49950](https://github.com/BerriAI/litellm/pull/49950) feat(model-catalog): add fedramp_uplift_multiplier
- [#49955](https://github.com/BerriAI/litellm/pull/49955) feat(model-catalog): read deprecation_source, the provider page or feed a row's deprecation_date was read from
- [#49831](https://github.com/BerriAI/litellm/pull/49831) fix(rate-limit): estimate embedding image and audio data URIs as media in TPM pre-call checks
- [#49922](https://github.com/BerriAI/litellm/pull/49922) fix(proxy): cancel /team/spend/by_user in Postgres after 30s
- [#49944](https://github.com/BerriAI/litellm/pull/49944) test(e2e): backport qualification repairs to rc/1.108.0
- [#47181](https://github.com/BerriAI/litellm/pull/47181) feat(ui): show user names instead of raw ids on detail pages
- [#49945](https://github.com/BerriAI/litellm/pull/49945) test(e2e): backport qualification repairs to rc/1.109.0
- [#49939](https://github.com/BerriAI/litellm/pull/49939) revert(bedrock): restore STS identity checks before #49763
- [#49789](https://github.com/BerriAI/litellm/pull/49789) feat(cost-map): record the provider's recommended replacement as successor_model on deprecating rows and report it from /model/deprecations
- [#49467](https://github.com/BerriAI/litellm/pull/49467) fix(proxy): omit cost headers for unpriced responses
- [#49763](https://github.com/BerriAI/litellm/pull/49763) fix(e2e): restore main qualification across providers and UI
- [#49724](https://github.com/BerriAI/litellm/pull/49724) fix(bedrock): backport #49692 to rc/1.109.0
- [#49771](https://github.com/BerriAI/litellm/pull/49771) fix(proxy): defer optional Prisma imports in SSO settings
- [#49484](https://github.com/BerriAI/litellm/pull/49484) refactor(ui): move teams, users and orgs text onto i18n
- [#49791](https://github.com/BerriAI/litellm/pull/49791) feat(model-catalog): read successor_model, the provider's recommended replacement for a deprecating row
- [#49361](https://github.com/BerriAI/litellm/pull/49361) fix(model_prices): consolidate verified provider metadata and pricing
- [#48886](https://github.com/BerriAI/litellm/pull/48886) fix(spend): read only the newest rows when paging sessions
- [#49895](https://github.com/BerriAI/litellm/pull/49895) fix(vertex-ai): drop batch prices from gemini-robotics-er-2-preview
- [#49871](https://github.com/BerriAI/litellm/pull/49871) fix(gemini): lower the gemini-3.5-flash-lite batch cache price and date the gemini-2.5-pro and 2.5-flash shutdown
- [#49832](https://github.com/BerriAI/litellm/pull/49832) fix(proxy): list slash-less wildcard groups like claude-* on /v1/models and /model/info
- [#49783](https://github.com/BerriAI/litellm/pull/49783) fix(anthropic)!: carry prompt_cache_breakpoint to cache_control on chat completions to Claude
- [#49710](https://github.com/BerriAI/litellm/pull/49710) fix(logging): keep the caller's call_type when chat completions are bridged to the Responses API
- [#49745](https://github.com/BerriAI/litellm/pull/49745) fix(proxy): let a config license unlock enterprise settings and spell "environment" right in license errors

#### 🐛 New Issues
- [#49813](https://github.com/BerriAI/litellm/issues/49813) [Bug]: Proxy exits at startup when TZ is Asia/Calcutta on a pip install, tzdata isn't installed `bug` `llm translation` 💬3
- [#49795](https://github.com/BerriAI/litellm/issues/49795) [Bug]: a reasoning-only prefix sets sent_first_chunk, so a mid-stream failure loses its fallback even though the client received nothing `bug` `llm translation` 💬3
- [#49842](https://github.com/BerriAI/litellm/issues/49842) [Bug]: Weekly budget reset can leave team/user/key spend fractionally negative `bug` `llm translation` 💬2
- [#49884](https://github.com/BerriAI/litellm/issues/49884) [Bug]: Redis circuit breaker stays HALF_OPEN forever when the probe fails with a non-connectivity error (e.g. READONLY after a primary failover) 💬2
- [#49829](https://github.com/BerriAI/litellm/issues/49829) [Feature]: Publish a stable release containing the opencode_go provider (#48140) `llm translation`
- [#49932](https://github.com/BerriAI/litellm/issues/49932) [Bug]: /engines/{model}/chat/completions and /openai/deployments/{model}/chat/completions return the provider model name without streaming `llm translation` 💬1
- [#49927](https://github.com/BerriAI/litellm/issues/49927) [Bug]: responses() sends temperature to OpenAI o-series models even with drop_params=True `llm translation` 💬1
- [#49936](https://github.com/BerriAI/litellm/issues/49936) [Bug]: OpenAI HTTP 403 raises APIError or BadRequestError instead of PermissionDeniedError `llm translation` 💬1
- [#49969](https://github.com/BerriAI/litellm/issues/49969) [Bug]: Bedrock Converse replays reasoningText.signature to non-Anthropic models (GLM 5.3) causing Bad Request `llm translation` 💬1
- [#49934](https://github.com/BerriAI/litellm/issues/49934) `POST /customer/block` blocks the customer, then returns HTTP 500 💬1
- [#49805](https://github.com/BerriAI/litellm/issues/49805) [Bug]: Transcription duration is missing for multipart tuples containing pathlib.Path `llm translation` 💬1
- [#49869](https://github.com/BerriAI/litellm/issues/49869) [Bug]: /a2a/{agent_id} answers JSON-RPC errors with HTTP 400 and drops a null request id 💬1
- [#49861](https://github.com/BerriAI/litellm/issues/49861) [Bug]: Can't use Openai-Agent Sandbox Agent with `LitellmModel` please help 🙏🏻🙏🏻 `bug` `llm translation`
- [#49845](https://github.com/BerriAI/litellm/issues/49845) [Bug]: OTel v2 MCP spans don't carry the request's session id 💬1
- [#49793](https://github.com/BerriAI/litellm/issues/49793) [Bug]: chat completions — a 200 the SDK cannot parse is raised as a 500/opaque APIError and loses its usage, so callers retry an already-billed request `llm translation` 💬1
- [#49775](https://github.com/BerriAI/litellm/issues/49775) [Bug]: HTTPS PDF image_url is sent to Anthropic as an image instead of a document `bug` `llm translation` 💬1
- [#49998](https://github.com/BerriAI/litellm/issues/49998) [Bug]: /v1/messages answers 503 "authentication database is temporarily unreachable" when the upstream call fails `llm translation`
- [#49963](https://github.com/BerriAI/litellm/issues/49963) [Bug]: Respawned worker reuses the CLI-minted DB token with NUM_WORKERS > 1 (AZURE_POSTGRESQL_AUTH / IAM_TOKEN_DB_AUTH) → P1010 after expiry `llm translation`
- [#49940](https://github.com/BerriAI/litellm/issues/49940) [Bug]: A stream that fails after it opens logs the raw provider exception class (e.g. AnthropicError) in error_information `llm translation`
- [#49938](https://github.com/BerriAI/litellm/issues/49938) [Bug]: Sync Router.responses() ignores the Router's num_retries and fallbacks, Router.aresponses() honours them `llm translation`
- [#49935](https://github.com/BerriAI/litellm/issues/49935) [Bug]: anthropic.messages.acreate(stream=True) on Bedrock raises the raw BedrockError for an exception event in the stream `llm translation`
- [#49933](https://github.com/BerriAI/litellm/issues/49933) [Bug]: Router stream=True with a Gemini deployment raises the raw VertexAIError (async) or a TypeError (sync) when the stream fails to open `llm translation`
- [#49931](https://github.com/BerriAI/litellm/issues/49931) [Bug]: anthropic.messages.acreate(stream=True) caches an empty reply from a non-Anthropic model and replays it on every repeat `llm translation`
- [#49930](https://github.com/BerriAI/litellm/issues/49930) [Bug]: Health probes cause context to be evicted `bug`
- [#49929](https://github.com/BerriAI/litellm/issues/49929) [Bug]: A cache hit returns finish_reason "tool_calls" for a stored Anthropic response that had "stop" `llm translation`
- [#49928](https://github.com/BerriAI/litellm/issues/49928) [Bug]: max_messages is counted on the translated chat messages for responses() and anthropic.messages on bridged providers `llm translation`
- [#49925](https://github.com/BerriAI/litellm/issues/49925) [Bug]: Cached responses() call on an Anthropic model fails with "provider returned a response with no 'choices'" `llm translation`
- [#49910](https://github.com/BerriAI/litellm/issues/49910) [Bug] Model Armor guardrail does not handle non-success invocationResult
- [#49909](https://github.com/BerriAI/litellm/issues/49909) [Bug] Model Armor guardrail skips Responses API input in v1.106.6
- [#49881](https://github.com/BerriAI/litellm/issues/49881) `POST /customer/block` blocks the customer, then returns HTTP 500
- [#49878](https://github.com/BerriAI/litellm/issues/49878) Managed Responses WebSocket turns write the request body into `SpendLogs.metadata`, not the `proxy_server_request` column, and skip redaction `bug` `llm translation`
- [#49875](https://github.com/BerriAI/litellm/issues/49875) [Bug]: Groq reasoning_effort causes 400 Bad Request on reasoning models `llm translation`
- [#49876](https://github.com/BerriAI/litellm/issues/49876) [Feature]: Structured MCP server, tool, arguments and caller info for pre_mcp_call guardrails
- [#49868](https://github.com/BerriAI/litellm/issues/49868) [Bug]: message/send fetches the agent card from the agent URL's path instead of the well-known URI at the origin, and fails when the card is not there
- [#49867](https://github.com/BerriAI/litellm/issues/49867) [Bug]: /a2a/{agent_id} forwards task methods with 0.3 wire names and without A2A-Version, so a 1.0 agent rejects every one of them
- [#49865](https://github.com/BerriAI/litellm/issues/49865) [Bug]: Azure AI Claude Mythos 5.1 has no cost-map entry and records zero spend `llm translation`
- [#49862](https://github.com/BerriAI/litellm/issues/49862) [Feature]: Support a Responses API integration path for Agents SDK sandbox tools `enhancement` `llm translation`
- [#49857](https://github.com/BerriAI/litellm/issues/49857) MCP dcr_bridge relay arm breaks RFC 9207: upstream redirect iss vs gateway-served issuer
- [#49848](https://github.com/BerriAI/litellm/issues/49848) [Bug]: Bedrock Converse omits strict field for native GPT JSON Schema output `bug` `llm translation`
- [#49844](https://github.com/BerriAI/litellm/issues/49844) [Bug]: OTel v2 langfuse_otel ignores langfuse_default_tags
- [#49827](https://github.com/BerriAI/litellm/issues/49827) [Bug]: FileNotFoundError in litellm/litellm_core_utils/default_encoding.py `bug` `llm translation`
- [#49780](https://github.com/BerriAI/litellm/issues/49780) [Bug]: mistral-large-4 still priced at $1.36 / $4.18, Mistral cut it to $0.70 / $2.10 `llm translation`
- [#49774](https://github.com/BerriAI/litellm/issues/49774) [Bug]: Unsupported Bedrock CountTokens calls cannot be skipped per deployment `bug` `llm translation`

#### 🔒 Closed Issues
- [#26147](https://github.com/BerriAI/litellm/issues/26147) [Bug]: "Response with id '{response_id}' not found" in /ui/chat with vllm
- [#31823](https://github.com/BerriAI/litellm/issues/31823) [Feature]: Provider quota pools and package-based routing
- [#35055](https://github.com/BerriAI/litellm/issues/35055) feat(cloudflare): add Workers AI image support
- [#35056](https://github.com/BerriAI/litellm/issues/35056) feat(cloudflare): add Workers AI audio support
- [#35064](https://github.com/BerriAI/litellm/issues/35064) [Bug]: Cann't find in UI the enable background_health_checks option
- [#46701](https://github.com/BerriAI/litellm/issues/46701) [Bug]: Azure AI Foundry Anthropic endpoints 400 when azure_ad_token leaks into request body
- [#49585](https://github.com/BerriAI/litellm/issues/49585) [Bug]: docs: CLA link in CONTRIBUTING.md returns 'Bad credentials' error
- [#47299](https://github.com/BerriAI/litellm/issues/47299) [Bug]: huggingface embeddings ignore the `timeout` parameter (sync and async)
- [#35036](https://github.com/BerriAI/litellm/issues/35036) [Feature]: Add `litellm-cli` parent group command for the offline SDK subcommands
- [#35071](https://github.com/BerriAI/litellm/issues/35071) [Bug]: Router Responses and Anthropic Messages ignore per-deployment retries and cooldown
- [#35093](https://github.com/BerriAI/litellm/issues/35093) [Bug]: Inconsistency between panels in UI dashboard
- [#35021](https://github.com/BerriAI/litellm/issues/35021) [Bug]: github_copilot provider drops reasoning_text/reasoning_opaque during streaming (works fine non-streaming)
- [#35066](https://github.com/BerriAI/litellm/issues/35066) [Bug]: SAP GenAI Hub Orchestration: `type: "file"` content parts rejected client-side, blocking native PDF input for Anthropic/Gemini
- [#35084](https://github.com/BerriAI/litellm/issues/35084) [Bug]: Incomplete documentation on pure litellm_config.yaml based setup for proxy server
- [#35095](https://github.com/BerriAI/litellm/issues/35095) UI: show the model family logo in the models table, not just the provider's
- [#35157](https://github.com/BerriAI/litellm/issues/35157) bug: /user/update does not persist object_permission through the object-permission table
- [#49934](https://github.com/BerriAI/litellm/issues/49934) `POST /customer/block` blocks the customer, then returns HTTP 500
- [#49775](https://github.com/BerriAI/litellm/issues/49775) [Bug]: HTTPS PDF image_url is sent to Anthropic as an image instead of a document
- [#47301](https://github.com/BerriAI/litellm/issues/47301) [Bug]: cohere embeddings ignore the `timeout` parameter in the sync path
- [#49780](https://github.com/BerriAI/litellm/issues/49780) [Bug]: mistral-large-4 still priced at $1.36 / $4.18, Mistral cut it to $0.70 / $2.10
- [#49042](https://github.com/BerriAI/litellm/issues/49042) [Bug]: Responses API rejects a LiteLLM response id in prompt_cache_options.comparison_response_id

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,029 · **Open issues:** 452 · **Last push:** <1h ago

On November 4, 2026, Unsloth released version v0.1.914-beta, introducing a new Glass theme with five customizable themes and enhanced options for backgrounds, greetings, and chats, alongside faster generation capabilities and expanded multi-GPU and CPU training options. Significant merged features included improvements to Unsloth Studio, such as the introduction of super cards in flows, making it easier to combine selected blocks, and enhancements to model loading and session consistency. Notably, users reported issues upgrading to the latest version, with bugs such as incomplete updates and UI lag during long conversations, highlighting ongoing challenges in software stability.

#### 🚀 New Releases
- [v0.1.914-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.914-beta) Glass Theme, Personalize & Faster Generation

#### ✅ Merged PRs
- [#16579](https://github.com/unslothai/unsloth/pull/16579) Studio: let managed accounts run terminal and Python tools on macOS
- [#15940](https://github.com/unslothai/unsloth/pull/15940) Unsloth Studio / Desktop: Flows super cards combine selected blocks into one card, with crossing wires as its ports
- [#15609](https://github.com/unslothai/unsloth/pull/15609) Unsloth Studio / Desktop: Flows uses Unsloth Studio's components and theme, light mode works
- [#16600](https://github.com/unslothai/unsloth/pull/16600) Tray status test: end the listener slice at its own close
- [#16594](https://github.com/unslothai/unsloth/pull/16594) Parallel env tests: pin UNSLOTH_RETURN_LOGITS unset for the packing checks
- [#16536](https://github.com/unslothai/unsloth/pull/16536) Studio: faster MLX load and reload, ready to serve when loaded
- [#16557](https://github.com/unslothai/unsloth/pull/16557) Sync the pad id to FastModel's fallback tokenizer
- [#16553](https://github.com/unslothai/unsloth/pull/16553) Studio Flows: can't, cannot and won't also negate a follow request
- [#16552](https://github.com/unslothai/unsloth/pull/16552) Studio Flows: keep the image variant record across Flows' own LoRA and ControlNet reloads
- [#16135](https://github.com/unslothai/unsloth/pull/16135) Studio Flows: bound round digits and chained multiplication in expressions
- [#16555](https://github.com/unslothai/unsloth/pull/16555) Studio Flows: tell embedding models apart when the server echoes the default alias
- [#16550](https://github.com/unslothai/unsloth/pull/16550) Studio Flows: give the carried-cue story test choice an id so the frontend typecheck passes
- [#16554](https://github.com/unslothai/unsloth/pull/16554) Bump install.sh / install.ps1 pins to unsloth>=2026.11.1
- [#16155](https://github.com/unslothai/unsloth/pull/16155) Preserve split-device compressed-tensors input transfers
- [#16462](https://github.com/unslothai/unsloth/pull/16462) Studio: show image generation time
- [#16546](https://github.com/unslothai/unsloth/pull/16546) Preserve prompt cache during deferred MCP tool search
- [#16476](https://github.com/unslothai/unsloth/pull/16476) Make page-in startup progress tests independent of host scheduling
- [#16400](https://github.com/unslothai/unsloth/pull/16400) Studio diffusion: skip settling for proven resident replans
- [#16468](https://github.com/unslothai/unsloth/pull/16468) Keep Studio windows signed in during concurrent session refresh
- [#16470](https://github.com/unslothai/unsloth/pull/16470) Keep a verified live Desktop backend after watchdog recovery
- [#15159](https://github.com/unslothai/unsloth/pull/15159) Block Swap: get_peft_model crashes on MoE models with offload_layers (evicted expert weights read as empty)
- [#16471](https://github.com/unslothai/unsloth/pull/16471) Respect interface scaling in Settings search and rich-paste badge
- [#16474](https://github.com/unslothai/unsloth/pull/16474) Studio: keep the loaded model when Switch back has to download a GGUF
- [#16523](https://github.com/unslothai/unsloth/pull/16523) Desktop: allow a custom backend port with UNSLOTH_DESKTOP_PORT
- [#16514](https://github.com/unslothai/unsloth/pull/16514) Studio: size audio.cpp TTS models from measured peaks and run TQ2_1 on the CPU
- [#16543](https://github.com/unslothai/unsloth/pull/16543) Fix Connections dropdown shrinking on scroll and hover
- [#16482](https://github.com/unslothai/unsloth/pull/16482) Studio: combine OpenCode Console and Go into one connection
- [#16544](https://github.com/unslothai/unsloth/pull/16544) Multi-LoRA overflow test: read the kernel source as UTF-8
- [#16542](https://github.com/unslothai/unsloth/pull/16542) ROCm progress test: model a feed that resolves the no-torch pair
- [#16537](https://github.com/unslothai/unsloth/pull/16537) MLX inference stub: answer the _FIRST_USE_WORK import zoo added
- [#16414](https://github.com/unslothai/unsloth/pull/16414) Prevent FP16 overflow in grouped multi-LoRA expert projections
- [#16417](https://github.com/unslothai/unsloth/pull/16417) Pipeline parallel: agree on overflow once when explicitly unscaling
- [#16535](https://github.com/unslothai/unsloth/pull/16535) GPU supervisor signal test: publish its handshake files atomically
- [#16393](https://github.com/unslothai/unsloth/pull/16393) FP8: keep rowwise _scaled_mm for float32 where cuBLAS supports it (torch < 2.14)
- [#16533](https://github.com/unslothai/unsloth/pull/16533) No-deps pair test: start PowerShell through the shared runner
- [#16167](https://github.com/unslothai/unsloth/pull/16167) Pipeline parallel: end a non-last stage without a graph break under torch.compile
- [#16532](https://github.com/unslothai/unsloth/pull/16532) No-torch install harness: model a feed that resolves the Unsloth / Zoo pair
- [#16531](https://github.com/unslothai/unsloth/pull/16531) Multi-LoRA cold compile test: read the source as utf-8
- [#16530](https://github.com/unslothai/unsloth/pull/16530) Scoped download tests: seed the Hub cache the offline path now pins
- [#16173](https://github.com/unslothai/unsloth/pull/16173) FSDP2: sum fp16 replicated gradients over unsynced micro-batches in float32
- [#15576](https://github.com/unslothai/unsloth/pull/15576) No-Triton import: hand the triton stub to unsloth importers without publishing it
- [#16521](https://github.com/unslothai/unsloth/pull/16521) Save Desktop Gallery batches with one folder choice
- [#16526](https://github.com/unslothai/unsloth/pull/16526) Parallel isolation guard: list the Hub download tests poll deadlines as benign timing
- [#16525](https://github.com/unslothai/unsloth/pull/16525) Worker stderr mirror: read once more after an empty read that raced the stop
- [#16524](https://github.com/unslothai/unsloth/pull/16524) Studio settings: size the composer Beta badge and the settings search offsets from the UI scale
- [#16147](https://github.com/unslothai/unsloth/pull/16147) Recover VAE storage after precision-conversion OOMs
- [#16502](https://github.com/unslothai/unsloth/pull/16502) Studio: offer only the reasoning levels a template allows and show its raise message
- [#16477](https://github.com/unslothai/unsloth/pull/16477) Studio: darken Liquid Glass 3D composers over bright wallpapers
- [#16480](https://github.com/unslothai/unsloth/pull/16480) Fix emoji reading in chat read-aloud
- [#16518](https://github.com/unslothai/unsloth/pull/16518) Studio: accept auto and all in custom GPU-layer arguments
- [#16501](https://github.com/unslothai/unsloth/pull/16501) Studio: save idle auto-unload seconds on Enter
- [#16413](https://github.com/unslothai/unsloth/pull/16413) Studio: keep a generated chat title in the conversation's language
- [#15574](https://github.com/unslothai/unsloth/pull/15574) PPO fused rollouts: keep TRL's scores when generate applies logits processors
- [#15575](https://github.com/unslothai/unsloth/pull/15575) Keep fused-loss engagement counters out of traced code
- [#16422](https://github.com/unslothai/unsloth/pull/16422) Studio Hub download: keep refs/main on the last complete snapshot under failed updates and concurrent workers
- [#16230](https://github.com/unslothai/unsloth/pull/16230) SDPA training on SM100: keep the caller's backend policy when avoiding cuDNN
- [#16171](https://github.com/unslothai/unsloth/pull/16171) Fix FSDP2 checkpoint planning across parameter swaps and accumulation
- [#16157](https://github.com/unslothai/unsloth/pull/16157) Resolve compatible Unsloth and Zoo pairs for all no-torch installs
- [#16416](https://github.com/unslothai/unsloth/pull/16416) Packed mRoPE attention: no graph break on warm packed rows
- [#16415](https://github.com/unslothai/unsloth/pull/16415) Multi-LoRA grouped experts: run the grouped support and parity probes only eagerly
- [#16418](https://github.com/unslothai/unsloth/pull/16418) Studio diffusion: a numbered shard without its index is not a complete snapshot
- [#16149](https://github.com/unslothai/unsloth/pull/16149) Studio Compare: keep the negative prompt on cells the Detailer pass still uses
- [#16134](https://github.com/unslothai/unsloth/pull/16134) Desktop: recheck the install fingerprint before accepting a cached capability answer
- [#16166](https://github.com/unslothai/unsloth/pull/16166) FSDP2 QAT export: count the converted copy in the writer's host RAM check
- [#16181](https://github.com/unslothai/unsloth/pull/16181) FSDP2 save: one writer for a tensor parallel x FSDP2 model
- [#16154](https://github.com/unslothai/unsloth/pull/16154) Studio diffusion prequant cache: do not count cgroup shmem as reclaimable
- [#16183](https://github.com/unslothai/unsloth/pull/16183) Packing: do not serve compiled inference_mode metadata to a training step
- [#16152](https://github.com/unslothai/unsloth/pull/16152) Studio video: load cached weights offline while the Hub is unreachable
- [#16180](https://github.com/unslothai/unsloth/pull/16180) FSDP2: average tp gradients over dp when every trainable param is ignored
- [#16492](https://github.com/unslothai/unsloth/pull/16492) chore: pre-commit autoupdate
- [#16158](https://github.com/unslothai/unsloth/pull/16158) Studio: carry FP8 / NVFP4 compile cache tags into render and compile threads
- [#13961](https://github.com/unslothai/unsloth/pull/13961) Prevent Desktop owner lockout before adding accounts
- [#16172](https://github.com/unslothai/unsloth/pull/16172) Flex small-smem tiles: keep float32 calls on the default tiles
- [#16153](https://github.com/unslothai/unsloth/pull/16153) Studio OpenAI API: refuse unsupported weights in selected JSONL chats
- [#16191](https://github.com/unslothai/unsloth/pull/16191) Decode graphs: preserve eager cache growth and reject stale replay
- [#16243](https://github.com/unslothai/unsloth/pull/16243) Studio: chat with LFM3-Audio-2B (text and speech in, text out)
- [#16156](https://github.com/unslothai/unsloth/pull/16156) FP8: strip activation_scale sources when matching the 16-bit save conversion
- [#16382](https://github.com/unslothai/unsloth/pull/16382) Studio: emit only the woff2 KaTeX fonts
- [#16133](https://github.com/unslothai/unsloth/pull/16133) Studio: keep style keywords inside quoted state labels in the Mermaid guard
- [#16151](https://github.com/unslothai/unsloth/pull/16151) Studio fine-tuning queue: do not start jobs cancelled during the batching probe
- [#16150](https://github.com/unslothai/unsloth/pull/16150) Studio sd.cpp install: treat ELF symbol-version mismatches as loader refusals
- [#16441](https://github.com/unslothai/unsloth/pull/16441) feat(studio): draft MLX tool, video, grammar, KV and LoRA replies
- [#16242](https://github.com/unslothai/unsloth/pull/16242) Studio: LFM3-Omni audio input, export, LoRA defaults and Stop for custom-code generate

#### 🐛 New Issues
- [#16573](https://github.com/unslothai/unsloth/issues/16573) [Bug] Update to unlosth desktop v0.1.914-beta does not complete `feature request` `bug` 💬2
- [#16605](https://github.com/unslothai/unsloth/issues/16605) [Bug] Please fill in your issue title here. `feature request` `bug` 💬1
- [#16602](https://github.com/unslothai/unsloth/issues/16602) [Bug] `search_conversation` tool totally disappeared (2nd time) `feature request` `bug` 💬1
- [#16561](https://github.com/unslothai/unsloth/issues/16561) [Bug] Unable to update to latest beta `feature request` `bug` 💬1
- [#16545](https://github.com/unslothai/unsloth/issues/16545) [Bug] + [Feature] Studio drops arbitrary chat_template_kwargs (e.g. verification) 💬1
- [#16547](https://github.com/unslothai/unsloth/issues/16547) [Bug] I found an interesting bug. `feature request` `bug` 💬1
- [#16520](https://github.com/unslothai/unsloth/issues/16520) [Feature] Release torch 2.13.0 and 2.14.0 extras to pypi `feature request` 💬1
- [#16611](https://github.com/unslothai/unsloth/issues/16611) Studio RAG HTML parser includes native hidden content in document text
- [#16551](https://github.com/unslothai/unsloth/issues/16551) macOS: managed-account Terminal/Python abort in dyld; allowing read-data on literal / restores execution `feature request` `bug`
- [#16603](https://github.com/unslothai/unsloth/issues/16603) [Bug] Regression: long conversations cause UI lag (web + desktop) `feature request` `bug`
- [#16601](https://github.com/unslothai/unsloth/issues/16601) [Feature] Title generation: own prompting possibilities `feature request`
- [#16593](https://github.com/unslothai/unsloth/issues/16593) [Bug] Please fill in your issue title here. `feature request` `bug`
- [#16586](https://github.com/unslothai/unsloth/issues/16586) [Bug] Model Hub Connect to paid LLMs are not always showing the newest models such as Kimi-3.2-pro `feature request` `bug`
- [#16574](https://github.com/unslothai/unsloth/issues/16574) [Feature] Background Image should also shown in chatting + Ability to set Search bar at bottom in New Chat `feature request`
- [#16538](https://github.com/unslothai/unsloth/issues/16538) [Bug] Studio: Dynamic MCP loading invalidates prompt cache on hybrid/recurrent models (17x slowdown) `feature request` `bug`
- [#16541](https://github.com/unslothai/unsloth/issues/16541) [Bug] Connections drop down menu shrinks when scrolling / mouse hover `feature request` `bug`
- [#16528](https://github.com/unslothai/unsloth/issues/16528) [Bug] S3 audio manifest-relative paths silently select a different recording on prefix-root collisions

#### 🔒 Closed Issues
- [#16484](https://github.com/unslothai/unsloth/issues/16484) [Bug] Auto unload on idle broken
- [#16100](https://github.com/unslothai/unsloth/issues/16100) [Feature] Unsloth Desktop - Add configuration for HTTP Port
- [#16479](https://github.com/unslothai/unsloth/issues/16479) Studio: loading a model cancels running chats silently, while unloading refuses without force_cancel_active
- [#16164](https://github.com/unslothai/unsloth/issues/16164) [Feature] shows how long it took to generate or edit each image
- [#16547](https://github.com/unslothai/unsloth/issues/16547) [Bug] I found an interesting bug.
- [#16192](https://github.com/unslothai/unsloth/issues/16192) [Feature] Make exporting all images practical
- [#16472](https://github.com/unslothai/unsloth/issues/16472) [Bug] (working fix included!) TTS reads emoji descriptions aloud instead of skipping emojis
- [#16411](https://github.com/unslothai/unsloth/issues/16411) Regenerate title language is model-dependent — prompt carries no language instruction
- [#16551](https://github.com/unslothai/unsloth/issues/16551) macOS: managed-account Terminal/Python abort in dyld; allowing read-data on literal / restores execution
- [#16538](https://github.com/unslothai/unsloth/issues/16538) [Bug] Studio: Dynamic MCP loading invalidates prompt cache on hybrid/recurrent models (17x slowdown)
- [#16541](https://github.com/unslothai/unsloth/issues/16541) [Bug] Connections drop down menu shrinks when scrolling / mouse hover
- [#16494](https://github.com/unslothai/unsloth/issues/16494) [Studio] Custom llama-server args reject `-ngl all` and `-ngl auto`, which llama.cpp accepts

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,180 · **Open issues:** 397 · **Last push:** 8h ago

On November 4, 2026, AIBrix had a routine day with no new releases, but notable development activity was observed with the merging of several pull requests. Key fixes included PR #3384, which addressed a bug by skipping hidden keys while listing files, and PR #3397, which introduced refreshed response schemas for the OpenAI frontend. Additionally, PR #3380 improved multipart upload cleanup by ensuring it follows listing pages, while PR #3354 ensured that the ModelClaim finalizer is retained even when runtime deactivation fails. A new issue was raised, #3399, which proposes reusing ModelWarmup-prepared model artifacts in ModelClaim runtimes, indicating ongoing enhancements in operational efficiency.

#### ✅ Merged PRs
- [#3384](https://github.com/vllm-project/aibrix/pull/3384) [Bug] Skip hidden keys while listing files
- [#3397](https://github.com/vllm-project/aibrix/pull/3397) feat(openai-frontend): refresh response schemas
- [#3380](https://github.com/vllm-project/aibrix/pull/3380) [Bug] Follow listing pages in multipart upload cleanup
- [#3354](https://github.com/vllm-project/aibrix/pull/3354) [Bug] Retain ModelClaim finalizer when runtime deactivation fails

#### 🐛 New Issues
- [#3399](https://github.com/vllm-project/aibrix/issues/3399) [Feature] Reuse ModelWarmup-prepared model artifacts in ModelClaim runtimes `kind/feature` `area/runtime` `area/orchestration` 💬2

#### 🔒 Closed Issues
- [#3379](https://github.com/vllm-project/aibrix/issues/3379) [Bug] Files list returns too few files when hidden keys fill the S3 listing window
- [#3377](https://github.com/vllm-project/aibrix/issues/3377) [Bug] Small-parts upload cleanup leaves staged objects after the first listing page

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,389 · **Open issues:** 827 · **Last push:** <1h ago

On November 4, 2026, there were no new releases for Semantic Router. However, several important pull requests were merged, including fixes for accepting default vLLM Responses extension fields and supporting reasoning content parts in responses. Notably, the addition of counterfactual evaluation for routing policies in research could enhance the system's decision-making capabilities. Among the new issues reported, a significant one (#5758) involves the Codex history incorrectly treating messages from different backends as one assistant message, which may affect user interactions. This implies ongoing challenges in managing backend communication effectively.

#### ✅ Merged PRs
- [#5454](https://github.com/vllm-project/semantic-router/pull/5454) [Bug] Accept default vLLM Responses extension fields
- [#5453](https://github.com/vllm-project/semantic-router/pull/5453) [Bug] Support Responses reasoning content parts
- [#5696](https://github.com/vllm-project/semantic-router/pull/5696) [Bug] Share vela3-fast forwards between requests on GPUs
- [#5373](https://github.com/vllm-project/semantic-router/pull/5373) [Research] Add counterfactual evaluation of routing policies

#### 🐛 New Issues
- [#5758](https://github.com/vllm-project/semantic-router/issues/5758) [Bug] Codex history reaches Chat and Messages backends as one assistant message per item `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬3
- [#5774](https://github.com/vllm-project/semantic-router/issues/5774) [Bug] Long coding-agent requests are refused on a context estimate they fit under `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#5739](https://github.com/vllm-project/semantic-router/issues/5739) [Bug] Images sent to a Responses backend lack the required detail field `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#5752](https://github.com/vllm-project/semantic-router/issues/5752) [Feature] recipe-lab sub-issue 8: bind a built-in recipe to a set of models from measured evidence `enhancement` `accepted` `wg/evaluation-quality` 💬2
- [#5744](https://github.com/vllm-project/semantic-router/issues/5744) [Docs] Codex through its built-in provider spends six seconds per run on a WebSocket the Router does not serve `accepted` `in-progress` `wg/data-plane-networking` `documentation` 💬1
- [#5743](https://github.com/vllm-project/semantic-router/issues/5743) [Bug] A PDF in a tool result ends an agent session on a model without file input `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#5742](https://github.com/vllm-project/semantic-router/issues/5742) [Docs] The listener timeout is described as an idle timeout but bounds the whole call `accepted` `in-progress` `wg/data-plane-networking` `documentation` 💬1
- [#5741](https://github.com/vllm-project/semantic-router/issues/5741) [Bug] A tool result with an image ends an agent session on Chat backends `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#5740](https://github.com/vllm-project/semantic-router/issues/5740) [Bug] The Router does not log why it ended a stream or name the type it refused `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#5736](https://github.com/vllm-project/semantic-router/issues/5736) Model runtime: Vela 3.0 d3 span and loading structure follow-ups `needs-acceptance` 💬1
- [#5780](https://github.com/vllm-project/semantic-router/issues/5780) [Bug] sr-bench: terminal verifier's task-pinned 1800s cap fails on slow links before grading starts `bug` `needs-acceptance` `wg/evaluation-quality`
- [#5779](https://github.com/vllm-project/semantic-router/issues/5779) [Bug] sr-bench session-aware evaluation never exercises conversation-scoped Router protection (missing x-conversation-id) `bug` `needs-acceptance` `wg/evaluation-quality`
- [#5765](https://github.com/vllm-project/semantic-router/issues/5765) [Bug] HTTP domain classifier skips its label mapping when it has no local model id `needs-acceptance`

#### 🔒 Closed Issues
- [#5515](https://github.com/vllm-project/semantic-router/issues/5515) [Feature] Serve the Vela 3.0 d3 sizes (vela3-lite and up) in the model runtime
- [#3856](https://github.com/vllm-project/semantic-router/issues/3856) [Research] Same-run evaluation harness for router-native model candidates
- [#3244](https://github.com/vllm-project/semantic-router/issues/3244) [Test] Qualify reference MoMs and wire release-candidate evaluation gates
- [#3243](https://github.com/vllm-project/semantic-router/issues/3243) [Feature] Publish reproducible MoM scorecards in model cards
- [#3242](https://github.com/vllm-project/semantic-router/issues/3242) [Feature] Produce MoM regression reports and failure slices
- [#3241](https://github.com/vllm-project/semantic-router/issues/3241) [Feature] Add objective-specific MoM evaluation pack registry and runners
- [#3240](https://github.com/vllm-project/semantic-router/issues/3240) [Feature] Build the MoM core suite and standalone-model comparison runner
- [#3239](https://github.com/vllm-project/semantic-router/issues/3239) [Feature] Validate MoM evaluation manifests and recipe conformance
- [#5695](https://github.com/vllm-project/semantic-router/issues/5695) [Bug] Model runtime: concurrent vela3-fast requests never share a forward

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*