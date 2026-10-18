# 📡 AI Ecosystem Digest — 2026-10-18

> Generated 2026-10-18 00:41 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 151,746 | 17 | 18 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 129,649 | 14 | 2 | 9 | 1 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,428 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,268 | 5 | 0 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 215,319 | 36 | 20 | 20 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,546 | 23 | 14 | 0 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 392,288 | 133 | 110 | 211 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 254,697 | 30 | 1 | 1 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 94,008 | 23 | 9 | 46 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 37,256 | 13 | 18 | 48 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 131,531 | 13 | 4 | 11 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 183,638 | 9 | 6 | 4 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 61,448 | 10 | 27 | 101 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,194 | 12 | 1 | 8 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,148 | 4 | 2 | 11 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,205 | 15 | 15 | 7 | 0 |

---

## ✨ Highlights

- **Ollama** released [v0.40.7-rc0](https://github.com/ollama/ollama/releases/tag/v0.40.7) with significant updates.
- **Gemini CLI** announced the release of [v0.66.0-nightly.20261017.ged96faedf](https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0-nightly.20261017.ged96faedf).
- **OpenAI Codex** merged PR [#54949](https://github.com/openai/codex/pull/54949) to gate app-server WebSocket compression behind a feature flag.
- **OpenCode** faces a notable issue with [#56324](https://github.com/anomalyco/opencode/issues/56324) where free models fail in the TUI, garnering 40 comments.
- **Semantic Router** opened issue [#5210](https://github.com/vllm-project/semantic-router/issues/5210) regarding auth handler errors leading to 5 comments, highlighting persistent issues in dashboard authentication.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 151,746 · **Open issues:** 15,169 · **Last push:** 1h ago

On October 18, 2026, there were no releases or merged pull requests for Claude Code, indicating a routine maintenance day. Several new issues were raised, with a highlight being issue #103071, which proposes a feature for enabling computer use in the Claude Code CLI on Linux. Additionally, multiple bugs were reported, notably issue #103091, which details significant lock contention in the `.claude.json` file affecting performance with numerous VS Code windows open, leading to session freezes. Other issues include problems with permission prompts in auto mode (#103077) and a bug where the desktop app's voice dictation drops words (#103080).

#### 🐛 New Issues
- [#103071](https://github.com/anthropics/claude-code/issues/103071) [FEATURE] Computer use in the Claude Code CLI on Linux `enhancement` `platform:linux` `area:tools` 💬1
- [#103077](https://github.com/anthropics/claude-code/issues/103077) [BUG] permissions.ask rules do not prompt in auto mode (2.1.296, Windows); #88604 still reproduces `bug` `has repro` `platform:windows` `area:permissions` 💬1
- [#103091](https://github.com/anthropics/claude-code/issues/103091) [BUG] Windows: with 20+ VS Code windows, `.claude.json` lock contention stalls the CLI event loop for up to 110 s; sessions freeze mid-tool-call until the window is reloaded `bug` `has repro` `platform:windows` `area:core`
- [#103090](https://github.com/anthropics/claude-code/issues/103090) [Bug] Claude Code incorrectly refuses to look up a person's name in chat `bug` `platform:linux` `area:model` `needs-repro`
- [#103089](https://github.com/anthropics/claude-code/issues/103089) [Bug] Claude in Chrome extension not detected with --chrome; --chrome ignored on --resume
- [#103088](https://github.com/anthropics/claude-code/issues/103088) [Bug] Agent ignores critical disk space warnings in host environment `enhancement` `platform:linux` `area:core`
- [#103087](https://github.com/anthropics/claude-code/issues/103087) [DOCS] Clarify first-refusal stop controls for headless Claude Code 2.1.302 `documentation` `enhancement` `area:cli` `area:docs`
- [#103086](https://github.com/anthropics/claude-code/issues/103086) [BUG] Desktop app (Windows): Button presses in a mod Pane never reach the plugin (ui.press not raised), Select works `bug` `has repro` `platform:windows` `area:plugins`
- [#103085](https://github.com/anthropics/claude-code/issues/103085) provide clearer notice of nearing session limit `enhancement` `platform:windows` `area:cost` `area:tui`
- [#103084](https://github.com/anthropics/claude-code/issues/103084) Desktop app: text written before a question box (AskUserQuestion / next-step box) isn't shown `bug` `platform:macos` `area:ui` `area:desktop`
- [#103083](https://github.com/anthropics/claude-code/issues/103083) El proyecto que yo tengo solo tiene CI para cuando el pr es hacia main. y a vec… `bug` `area:tools`
- [#103082](https://github.com/anthropics/claude-code/issues/103082) some popups arent showing up, such as the popup request for Use Computer `bug` `area:tui` `needs-info`
- [#103081](https://github.com/anthropics/claude-code/issues/103081) First of all, it burned the usage with threads going into long context memory i…
- [#103080](https://github.com/anthropics/claude-code/issues/103080) [BUG] Desktop app (Code tab): voice dictation drops the last word(s) when the recording is stopped `bug` `platform:macos` `area:desktop`
- [#103079](https://github.com/anthropics/claude-code/issues/103079) [Bug] Inappropriate Safety Filter Flagging Non-Safety Content `bug` `duplicate` `platform:windows` `area:model`
- [#103074](https://github.com/anthropics/claude-code/issues/103074) [BUG] iOS app Code tab: long prompt box stops scrolling, so the end of the prompt can't be viewed or edited and gets sent incomplete `bug` `platform:ios` `area:ui`
- [#103078](https://github.com/anthropics/claude-code/issues/103078) [Bug] Claude Code refuses to create test accounts in staging environment `bug` `platform:macos` `area:model` `needs-repro`

#### 🔒 Closed Issues
- [#37793](https://github.com/anthropics/claude-code/issues/37793) Subagents fail with 'prompt is too long' when user has many MCP servers (tool definitions exceed 200k)
- [#25865](https://github.com/anthropics/claude-code/issues/25865) [BUG] Notion MCP connector serializes JSON object parameters as strings, breaking update/move/create operations
- [#16837](https://github.com/anthropics/claude-code/issues/16837) [BUG] Claude code does not obey values of MCP_TIMEOUT longer than 60 seconds
- [#45208](https://github.com/anthropics/claude-code/issues/45208) [BUG] GitHub MCP authenticate tool redirects OAuth flow to Google Drive consent screen instead of GitHub
- [#89145](https://github.com/anthropics/claude-code/issues/89145) [Bug] Anthropic API Error: 529 Overloaded
- [#82619](https://github.com/anthropics/claude-code/issues/82619) [BUG] Model fabricated a user-approval turn inside its own output and acted on it in the same generation
- [#89142](https://github.com/anthropics/claude-code/issues/89142) [Bug] Anthropic API Error: Unspecified
- [#89144](https://github.com/anthropics/claude-code/issues/89144) [Bug] Anthropic API Error: 529 Overloaded - Persistent Service Unavailability
- [#89163](https://github.com/anthropics/claude-code/issues/89163) [BUG]
- [#89159](https://github.com/anthropics/claude-code/issues/89159) Allow images to be pasted inline within the message text, not pinned to the top
- [#89157](https://github.com/anthropics/claude-code/issues/89157) [Bug] Agent ignores memory instructions for git diff and relies on --stat instead of full diff
- [#89154](https://github.com/anthropics/claude-code/issues/89154) [FEATURE] Font size zoom inside the File viewer pane (source & preview modes)
- [#89155](https://github.com/anthropics/claude-code/issues/89155) [FEATURE] File viewer: keep line position when toggling between source and preview modes
- [#89150](https://github.com/anthropics/claude-code/issues/89150) [BUG] Opus 5, Fable 5
- [#89149](https://github.com/anthropics/claude-code/issues/89149) [BUG] claude update failed
- [#89143](https://github.com/anthropics/claude-code/issues/89143) [Bug] Anthropic API Error: 529 Overloaded
- [#89139](https://github.com/anthropics/claude-code/issues/89139) [Bug] Claude 3.5 Sonnet model producing incoherent outputs and missing context
- [#99125](https://github.com/anthropics/claude-code/issues/99125) Parallel subagents consume 642k tokens, then session ends mid-edit without handoff

### OpenAI Codex (`openai/codex`)

**Stars:** 129,649 · **Open issues:** 23,204 · **Last push:** 1h ago

On October 18, 2026, the OpenAI Codex team released version 0.164.0-alpha.3, introducing several improvements, including the implementation of negotiated zstd compression for app-server WebSockets and a feature flag for WebSocket compression. Key merged pull requests included the preservation of model catalog caches during header credential rotations and support for typed content in contextual prompt fragments. Noteworthy new issues were raised, particularly #54924, which reports an installation failure with the error "OAuth state not found," attracting attention from the community. Overall, the day featured meaningful enhancements and the identification of significant user-reported challenges.

#### 🚀 New Releases
- [rust-v0.164.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.3) 0.164.0-alpha.3

#### ✅ Merged PRs
- [#54949](https://github.com/openai/codex/pull/54949) Gate app-server WebSocket compression behind a feature flag
- [#54946](https://github.com/openai/codex/pull/54946) Preserve model catalog caches across header credential rotation
- [#54945](https://github.com/openai/codex/pull/54945) Share additional tool declarations across response item clones
- [#54930](https://github.com/openai/codex/pull/54930) Add negotiated zstd compression to app-server WebSockets
- [#54776](https://github.com/openai/codex/pull/54776) Support typed content in contextual prompt fragments
- [#54766](https://github.com/openai/codex/pull/54766) Defer unknown TUI config fields to the shared strict-config policy
- [#54763](https://github.com/openai/codex/pull/54763) Stop applying macOS background priority to managed daemons
- [#54761](https://github.com/openai/codex/pull/54761) Upgrade `zip` to 9.0.0 and update plugin archive extraction
- [#54754](https://github.com/openai/codex/pull/54754) Reduce memory overhead in tool JSON schemas

#### 🐛 New Issues
- [#54924](https://github.com/openai/codex/issues/54924) OpenAI Developers installation fails: “OAuth state not found” `bug` `windows-os` `auth` `app` 💬3
- [#54952](https://github.com/openai/codex/issues/54952) Ultrafast OAuth requests report service_tier=default: no authoritative per-response tier confirmation `bug` 💬1
- [#54950](https://github.com/openai/codex/issues/54950) [Windows][IAB] Taobao rejected by site-safety gate before approval on app 26.1013.4894.0 `bug` `windows-os` `app` `browser` 💬1
- [#54941](https://github.com/openai/codex/issues/54941) Windowsデスクトップ／Cloud Work：予定実行時の権限情報の欠落、Computer Useの起動失敗、「常に許可」の保存・再利用の不具合 `bug` `windows-os` `sandbox` `app` 💬1
- [#54947](https://github.com/openai/codex/issues/54947) Windows: apply_patch fails inside an explicitly writable local project, but works in the visualizations directory `bug` `windows-os` `sandbox` `tool-calls` 💬1
- [#54943](https://github.com/openai/codex/issues/54943) [CLI] GPT-6 Astra intermittently returns completed final JSON missing terminal ]} `bug` `model-behavior` `exec` `CLI` 💬1
- [#54942](https://github.com/openai/codex/issues/54942) Windows: native application acceptance blocked before execution with no actionable approval path `bug` `windows-os` `sandbox` `tool-calls` 💬1
- [#54939](https://github.com/openai/codex/issues/54939) Codex repeatedly switches between saying work is complete, incomplete, and requires no further action `bug` `model-behavior` `CLI` 💬1
- [#54938](https://github.com/openai/codex/issues/54938) Max reasoning effort unavailable in Codex App despite working in ChatGPT view and mobile `bug` `windows-os` `app` 💬1
- [#54953](https://github.com/openai/codex/issues/54953) Running subagents incorrectly appear as Done `bug` `app` `subagent`
- [#54951](https://github.com/openai/codex/issues/54951) Windows Codex app-server exits with code 0 before turn/start response `bug` `windows-os` `CLI` `app-server`
- [#54948](https://github.com/openai/codex/issues/54948) [dot / Windows] Existing local Codex chat read fails with unsupported placement format version 1 despite computer shown as allowed `bug` `windows-os` `app` `dots`
- [#54944](https://github.com/openai/codex/issues/54944) Windows Computer Use: owned-modal set_value times out without completion/cancellation acknowledgement `bug` `windows-os` `tool-calls` `computer-use`
- [#54940](https://github.com/openai/codex/issues/54940) [Windows][dot] Cannot inspect and maintain an existing desktop automation end to end `bug` `windows-os` `app` `automations`

#### 🔒 Closed Issues
- [#36213](https://github.com/openai/codex/issues/36213) the new GPT SOL 5.6 is unfair for plus users , increase the usage for plus by 2x - or a secondary ratelimits on small models
- [#46888](https://github.com/openai/codex/issues/46888) [Windows] Maximized window extends behind translucent taskbar, causing white blurred strip

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,428 · **Open issues:** 750 · **Last push:** 23h ago

On October 17, 2026, Gemini CLI released version v0.66.0-nightly.20261017.ged96faedf, which introduces a banner indicating that the CLI is not optimized for Gemini 4, along with an updated README that removes obsolete content. Additionally, a CI fix was implemented to remove unsupported members' permissions in the unassign-inactive-assignees workflow. There were no merged pull requests or new issues reported in the last 24 hours, indicating a routine maintenance day with noteworthy documentation updates.

#### 🚀 New Releases
- [v0.66.0-nightly.20261017.ged96faedf](https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0-nightly.20261017.ged96faedf) Release v0.66.0-nightly.20261017.ged96faedf

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,268 · **Open issues:** 2,212 · **Last push:** 1d ago

On October 18, 2026, there were no new releases or merged pull requests for the GitHub Copilot CLI. However, five new issues were reported, highlighting potential regressions and bugs. Notably, issue #5177 concerns a regression in manual approval processes that no longer prompts for repository-mutating Git commands after the Copilot harness migration. Additionally, issue #5176 details a problem with the Linux sandbox where shell commands are terminated after approximately ten seconds due to a parent-death signal. Other issues include sign-in difficulties to an MCP server after expiration (#5175) and a problem with hard-denied Bash commands that attempt to change directories into newly created ones (#5173).

#### 🐛 New Issues
- [#5177](https://github.com/github/copilot-cli/issues/5177) Regression: Manual Approval no longer prompts for repository-mutating Git commands after Copilot harness migration `triage`
- [#5176](https://github.com/github/copilot-cli/issues/5176) Linux sandbox: shell commands are killed after ~10 s (bwrap parent-death signal bound to an exited thread) `triage`
- [#5175](https://github.com/github/copilot-cli/issues/5175) Copilot app: no way to sign in again to an MCP server whose sign-in expired (/mcp auth hint doesn't work, Customize tab shows green) `triage`
- [#5174](https://github.com/github/copilot-cli/issues/5174) Action Requested: App Configuration Problems Found in repo [copilot-runtime-bazel-cache] `triage`
- [#5173](https://github.com/github/copilot-cli/issues/5173) Bash commands that `cd` into a directory created in the same command are hard-denied without a prompt ("unusable session working directory") since 1.0.99-0 `area:permissions`

### OpenCode (`anomalyco/opencode`)

**Stars:** 215,319 · **Open issues:** 4,616 · **Last push:** <1h ago

On October 18, 2026, there were no new releases for OpenCode, but the team merged several important pull requests, including a fix for scrollable wide documentation tables in #56592 and updates to the mobile menu for keyboard accessibility in #56591. Notable enhancements to the console included improved marketing copy and fixed redirections with PRs #56589 and #56593. Additionally, the documentation saw corrections for contradictions in #56588 and formatting updates in #56568. Among the new issues, #56324 highlighted a critical problem where free models fail inside the official OpenCode TUI, indicating challenges for users on the Windows platform.

#### ✅ Merged PRs
- [#56592](https://github.com/anomalyco/opencode/pull/56592) fix(www): scroll wide docs tables and label the docs search
- [#56589](https://github.com/anomalyco/opencode/pull/56589) fix(console): fix marketing copy, stale stats and redirected links
- [#56593](https://github.com/anomalyco/opencode/pull/56593) fix(console): redirect /en URLs to the unprefixed English pages
- [#56591](https://github.com/anomalyco/opencode/pull/56591) fix(console): make the mobile menu and copy buttons keyboard accessible
- [#56588](https://github.com/anomalyco/opencode/pull/56588) docs(www): fix contradictions and typos in the v2 docs
- [#56595](https://github.com/anomalyco/opencode/pull/56595) perf(console): load only the IBM Plex Mono faces the site uses
- [#56594](https://github.com/anomalyco/opencode/pull/56594) feat(console): redirect /llms.txt to the docs index
- [#56587](https://github.com/anomalyco/opencode/pull/56587) fix(console): show an error when newsletter signup fails
- [#56568](https://github.com/anomalyco/opencode/pull/56568) docs(www): format yield* in Effect snippets
- [#56566](https://github.com/anomalyco/opencode/pull/56566) chore(console): remove the unused /temp page
- [#56565](https://github.com/anomalyco/opencode/pull/56565) fix(console): give marketing pages complete social preview tags
- [#56564](https://github.com/anomalyco/opencode/pull/56564) fix(console): take the page language from the URL only
- [#56534](https://github.com/anomalyco/opencode/pull/56534) fix: add v2 docs to the sitemap and fix its broken entries
- [#55881](https://github.com/anomalyco/opencode/pull/55881) test(app): fix races in the mobile timeline scroll e2e tests
- [#56532](https://github.com/anomalyco/opencode/pull/56532) docs(console): align card fee and billing wording with the billing page
- [#56531](https://github.com/anomalyco/opencode/pull/56531) fix(console): send localized changelog URLs to the changelog worker
- [#56535](https://github.com/anomalyco/opencode/pull/56535) fix(console): render FAQ answers in the server HTML
- [#56533](https://github.com/anomalyco/opencode/pull/56533) fix(console): give each marketing page a single meta description
- [#56529](https://github.com/anomalyco/opencode/pull/56529) fix(console): link header GitHub item to the repository root
- [#56300](https://github.com/anomalyco/opencode/pull/56300) chore: upgrade typecheck to TypeScript 7.0.2

#### 🐛 New Issues
- [#56324](https://github.com/anomalyco/opencode/issues/56324) Free models fail inside official OpenCode TUI with "free tier can only be used from within OpenCode" (Windows, v2.0.32) `severity:high` 💬40
- [#56442](https://github.com/anomalyco/opencode/issues/56442) Unable to log into Opencode web console `pending close` `triaging` 💬14
- [#56579](https://github.com/anomalyco/opencode/issues/56579) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56581](https://github.com/anomalyco/opencode/issues/56581) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56576](https://github.com/anomalyco/opencode/issues/56576) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56606](https://github.com/anomalyco/opencode/issues/56606) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56584](https://github.com/anomalyco/opencode/issues/56584) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56424](https://github.com/anomalyco/opencode/issues/56424) [Malware]Some people post "Easy install opencode method" in issues, but it contains malicious powerShell script 💬7
- [#56597](https://github.com/anomalyco/opencode/issues/56597) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56578](https://github.com/anomalyco/opencode/issues/56578) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56601](https://github.com/anomalyco/opencode/issues/56601) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56599](https://github.com/anomalyco/opencode/issues/56599) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56603](https://github.com/anomalyco/opencode/issues/56603) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56596](https://github.com/anomalyco/opencode/issues/56596) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56572](https://github.com/anomalyco/opencode/issues/56572) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56598](https://github.com/anomalyco/opencode/issues/56598) Opencode desktop app tells me that free models only can be used in OpenCode. I am trying to use it in opencode `pending close` `triaging` 💬3
- [#56590](https://github.com/anomalyco/opencode/issues/56590) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56560](https://github.com/anomalyco/opencode/issues/56560) API Key Expired `pending close` `triaging` 💬4
- [#56571](https://github.com/anomalyco/opencode/issues/56571) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56543](https://github.com/anomalyco/opencode/issues/56543) Free-tier models intermittently fail with "OpenCode's free tier can only be used from within OpenCode" when using the official desktop app `pending close` `triaging` 💬3
- [#56573](https://github.com/anomalyco/opencode/issues/56573) OpenCode's free tier can only be used from within OpenCode. Download it at https://opencode.ai and keep building. `pending close` `triaging` 💬3
- [#56604](https://github.com/anomalyco/opencode/issues/56604) Open code solutio `pending close` `triaging` 💬2
- [#56585](https://github.com/anomalyco/opencode/issues/56585) Free tier models (Big Pickle, Beam Free, Nemotron) fail with "free tier can only be used from within OpenCode" on official CLI and desktop app `pending close` `triaging` 💬1
- [#56556](https://github.com/anomalyco/opencode/issues/56556) The API keys disappear from the account, and the agent stops working, reporting: "This API key has expired..." `pending close` `triaging` 💬2
- [#56479](https://github.com/anomalyco/opencode/issues/56479) desktop: macOS app silently denied ~/Documents (missing NSDocumentsFolderUsageDescription) -> empty model selector 💬2
- [#56502](https://github.com/anomalyco/opencode/issues/56502) session permissions: deny rules don't bind API-created sessions (varying toolset + bash/shell name gap) 💬2
- [#56605](https://github.com/anomalyco/opencode/issues/56605) desktop: context meter shows 0 after compaction until the next message 💬1
- [#56602](https://github.com/anomalyco/opencode/issues/56602) config: V2 silently ignores MCP servers defined directly under `mcp` instead of `mcp.servers` 💬1
- [#56600](https://github.com/anomalyco/opencode/issues/56600) Opencode subscription `pending close` `triaging` 💬1
- [#56586](https://github.com/anomalyco/opencode/issues/56586) auth: expired Go API key error gives no recovery path and misdirects users 💬1
- [#56583](https://github.com/anomalyco/opencode/issues/56583) cli: npm CLI (1.19.3) crashes on shared opencode.db created by Desktop 2.0.32 — 'Database is not empty and has no session table' `pending close` `triaging` 💬1
- [#56582](https://github.com/anomalyco/opencode/issues/56582) models: allow model variants to override limit (context/output) 💬1
- [#56580](https://github.com/anomalyco/opencode/issues/56580) Error `pending close` `triaging` 💬1
- [#56575](https://github.com/anomalyco/opencode/issues/56575) OpenCOde `triaging` 💬1
- [#56574](https://github.com/anomalyco/opencode/issues/56574) docs: plugin session interrupt example uses continue instead of resume `reproduced` 💬1
- [#56563](https://github.com/anomalyco/opencode/issues/56563) tui: new session tab closes when its first slash command fails 💬1

#### 🔒 Closed Issues
- [#56579](https://github.com/anomalyco/opencode/issues/56579) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56581](https://github.com/anomalyco/opencode/issues/56581) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56576](https://github.com/anomalyco/opencode/issues/56576) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56606](https://github.com/anomalyco/opencode/issues/56606) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56584](https://github.com/anomalyco/opencode/issues/56584) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56597](https://github.com/anomalyco/opencode/issues/56597) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56578](https://github.com/anomalyco/opencode/issues/56578) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56601](https://github.com/anomalyco/opencode/issues/56601) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56599](https://github.com/anomalyco/opencode/issues/56599) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56603](https://github.com/anomalyco/opencode/issues/56603) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56596](https://github.com/anomalyco/opencode/issues/56596) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56572](https://github.com/anomalyco/opencode/issues/56572) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56590](https://github.com/anomalyco/opencode/issues/56590) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56571](https://github.com/anomalyco/opencode/issues/56571) ✅ [Easy Install] opencode — Latest Stable Release 2026
- [#56279](https://github.com/anomalyco/opencode/issues/56279) [FEATURE]: v1 TUI: show and load the messages a long session hides
- [#56276](https://github.com/anomalyco/opencode/issues/56276) lsp: LSP servers never start on file operations in v2.0.32 (custom and built-in)
- [#55567](https://github.com/anomalyco/opencode/issues/55567) It is not possible to select a model or agent mode for older conversations created before version 2.0.
- [#56270](https://github.com/anomalyco/opencode/issues/56270) sessions break when their folder is renamed outside opencode
- [#55561](https://github.com/anomalyco/opencode/issues/55561) Kimi K3 on OpenCode Go repeatedly stalls during reasoning and ends with incomplete streams
- [#56563](https://github.com/anomalyco/opencode/issues/56563) tui: new session tab closes when its first slash command fails

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,546 · **Open issues:** 1,884 · **Last push:** <1h ago

On October 18, 2026, Qwen Code released version v0.25.2-nightly.20261017.39c237af3b, which includes an important fix that allows the `team_plan_approval` to be admitted into the journal-only interrupted-turn settle function. There were no merged pull requests in the last 24 hours, but several new issues were opened, with #14494 highlighting a problem where the WorkspaceCsiSqlWorkerMySqlIT receives a 400 error due to a runtime broker invalid request on the MariaDB lane. Other notable issues include #14419, which addresses failures relating to the relay's response to command operation issues, and #14466, which concerns telemetry export problems leading to empty POST bodies. Overall, the day was focused on addressing these emerging challenges rather than introducing new features.

#### 🚀 New Releases
- [v0.25.2-nightly.20261017.39c237af3b](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.2-nightly.20261017.39c237af3b) Release v0.25.2-nightly.20261017.39c237af3b

#### 🐛 New Issues
- [#14494](https://github.com/QwenLM/qwen-code/issues/14494) test(managed-agent): WorkspaceCsiSqlWorkerMySqlIT gets 400 runtime_broker_invalid_request from tool-sessions:acquire on the MariaDB lane `priority/P1` `type/bug` `category/core` `scope/testing` 💬5
- [#14419](https://github.com/QwenLM/qwen-code/issues/14419) fix(cli): the Hosted Harness answers the relay's answered verb's store failures as 400 invalid_command_operation `priority/P2` `type/bug` `category/cli` `scope/session-management` 💬5
- [#14495](https://github.com/QwenLM/qwen-code/issues/14495) test(managed-agent): HostedBackgroundPublicationGate's wedge driver parses a half-written wire line `priority/P2` `type/bug` `category/core` `scope/testing` 💬4
- [#14453](https://github.com/QwenLM/qwen-code/issues/14453) fix(managed-agent): native storage registration refuses a root whose marker lands in its creation clock tick `priority/P1` `type/bug` `category/core` `scope/linux` 💬4
- [#14446](https://github.com/QwenLM/qwen-code/issues/14446) test(managed-agent): Stage F fault gates FG11 for the schedule and automation_run domains `priority/P2` `status/blocked` `type/feature-request` `category/integration` 💬4
- [#14466](https://github.com/QwenLM/qwen-code/issues/14466) Telemetry: OTLP/HTTP export (otlpProtocol "http") sends empty POST bodies — no spans reach the receiver although spans are produced `status/need-information` `priority/P2` `type/documentation` `category/telemetry` 💬4
- [#14508](https://github.com/QwenLM/qwen-code/issues/14508) Telemetry: emit reasoning effort as a span attribute (`gen_ai.request.reasoning_effort`) `priority/P3` `type/feature-request` `category/telemetry` `scope/analytics` 💬3
- [#14507](https://github.com/QwenLM/qwen-code/issues/14507) Feature Request: a supported way to enable LSP in the Qwen Code Desktop client `priority/P3` `type/feature-request` `category/configuration` `scope/settings` 💬3
- [#14504](https://github.com/QwenLM/qwen-code/issues/14504) managed-agent: R1-1 from #13109 (a Hosted MCP close after a lost owner release and a Broker replacement) was never fixed; whether it reproduces on lifecycle v2 is unverified `priority/P2` `type/bug` `category/core` `scope/mcp` 💬3
- [#14503](https://github.com/QwenLM/qwen-code/issues/14503) managed-agent: Hosted stdio MCP servers run uncontained: they can outlive a dead Runtime worker, and their descendants can survive a graceful close `priority/P2` `type/bug` `category/core` `scope/mcp` 💬3
- [#14502](https://github.com/QwenLM/qwen-code/issues/14502) managed-agent: a Runtime worker killed mid-Hook leaves Hook processes running in a cgroup unit nothing tracks `priority/P2` `type/bug` `category/core` `scope/linux` 💬3
- [#14492](https://github.com/QwenLM/qwen-code/issues/14492) Main CI failed: SDK Java — HostedExtensionsIT.publishedExtensionsSurviveHarnessReplacementCancellationAndCloseOnMySql `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#14477](https://github.com/QwenLM/qwen-code/issues/14477) SubagentStart hook additionalContext never reaches the subagent's first turn `priority/P2` `type/bug` `category/core` `roadmap/subagents-tools` 💬3
- [#14465](https://github.com/QwenLM/qwen-code/issues/14465) --disable-mcp-server: glob exclusions cannot be lifted in-session; enable paths report success while the server stays disconnected `priority/P2` `type/bug` `category/cli` `scope/mcp` 💬3
- [#14460](https://github.com/QwenLM/qwen-code/issues/14460) feat(managed-agent): a per-run public cancel for automation_run, the last task kind with no stop path `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#14455](https://github.com/QwenLM/qwen-code/issues/14455) Memory index: a title that fills the line budget still drops the description hook `priority/P3` `type/bug` `category/core` `scope/memory` 💬3
- [#14434](https://github.com/QwenLM/qwen-code/issues/14434) Managed agent: tool publication capacity exhaustion answers a generic 400 and blocks the Hosted Session on recovery `priority/P2` `type/bug` `category/integration` `scope/shell` 💬3
- [#14449](https://github.com/QwenLM/qwen-code/issues/14449) test(managed-agent): Stage F fault gates FG13 for the Hosted Hook domains `priority/P2` `status/blocked` `type/feature-request` `category/integration` 💬3
- [#14447](https://github.com/QwenLM/qwen-code/issues/14447) test(managed-agent): Stage F fault gates FG12 for the Hosted MCP domains `priority/P2` `status/blocked` `type/feature-request` `category/integration` 💬3
- [#14441](https://github.com/QwenLM/qwen-code/issues/14441) fix(runtime-broker): early 413 is withheld or dropped on JDK 23+ because sendJson closes the exchange before flushing `priority/P2` `type/bug` `category/platform` `status/ready-for-agent` 💬3
- [#14500](https://github.com/QwenLM/qwen-code/issues/14500) Main CI failed: Managed Agent gate — SessionRowLockOrderTest.mutationEntriesAcquireTheSessionRowLockBeforeAnyTurnRowAccess `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬2
- [#14481](https://github.com/QwenLM/qwen-code/issues/14481) [#12952 follow-up] G3 Step 3: accept the remaining recovery matrix rows `priority/P2` `category/core` `scope/testing` `scope/ci-cd` 💬2
- [#14476](https://github.com/QwenLM/qwen-code/issues/14476) Main CI failed: Managed Agent gate — ManagedActionsTest.approvalLeaseRenewsWhileDeliveryIsHeldPastItsInitialDeadline `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1

#### 🔒 Closed Issues
- [#13746](https://github.com/QwenLM/qwen-code/issues/13746) feat(managed-agent): H4f public task cancel and child task-event streams
- [#14494](https://github.com/QwenLM/qwen-code/issues/14494) test(managed-agent): WorkspaceCsiSqlWorkerMySqlIT gets 400 runtime_broker_invalid_request from tool-sessions:acquire on the MariaDB lane
- [#14167](https://github.com/QwenLM/qwen-code/issues/14167) feat(managed-agent): D7-3 the opt-in java_durable admission profile and its switch
- [#14387](https://github.com/QwenLM/qwen-code/issues/14387) managed-agent: a workflow child Turn whose Harness was killed mid-run is re-executed by the recovery instead of refused (found by the FG10d fault gate)
- [#13522](https://github.com/QwenLM/qwen-code/issues/13522) Main CI failed: Qwen Code CI — src/acp-integration/session/Session.test.ts > … > accounts for delegated work when a tool_call tool result re… (+1 more)
- [#13230](https://github.com/QwenLM/qwen-code/issues/13230) Main CI failed: Qwen Code CI on b3dda468f2e4
- [#13715](https://github.com/QwenLM/qwen-code/issues/13715) Main CI failed: E2E Tests — interactive/external-context-mem0-write.test.ts > … > 'uses two confirmations in default mode' (+7 more)
- [#13592](https://github.com/QwenLM/qwen-code/issues/13592) Main CI failed: Qwen Code CI on d03eafd4aace
- [#13581](https://github.com/QwenLM/qwen-code/issues/13581) Main CI failed: Qwen Code CI on 1753948e3ecb
- [#14291](https://github.com/QwenLM/qwen-code/issues/14291) Companion bundle reads the Node `navigator` global, so VS Code 1.14x logs `PendingMigrationError` twice on every activation
- [#14434](https://github.com/QwenLM/qwen-code/issues/14434) Managed agent: tool publication capacity exhaustion answers a generic 400 and blocks the Hosted Session on recovery
- [#14441](https://github.com/QwenLM/qwen-code/issues/14441) fix(runtime-broker): early 413 is withheld or dropped on JDK 23+ because sendJson closes the exchange before flushing
- [#14500](https://github.com/QwenLM/qwen-code/issues/14500) Main CI failed: Managed Agent gate — SessionRowLockOrderTest.mutationEntriesAcquireTheSessionRowLockBeforeAnyTurnRowAccess
- [#11772](https://github.com/QwenLM/qwen-code/issues/11772) Anthropic pipeline: assistant `thinking` blocks replayed without a `signature` are rejected by strict Anthropic-compatible servers (SGLang)

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

**Stars:** 392,288 · **Open issues:** 9,368 · **Last push:** <1h ago

On October 18, 2026, there were no new releases for OpenClaw, but several important pull requests were merged, enhancing the infrastructure and resolving various issues. Notably, PR #175944 improved the handling of native Git failures, while PR #174022 introduced a feature to display the Gateway connection state in the sidebar footer. Significant fixes included PR #175843, which ensured proper rechecking of placement stop authority, and PR #175924, which addressed chat recovery after transient session subscription changes. Among new issues, the bug report #175027 raised concerns about Android real-time Talk reusing archived backing sessions and rejecting GPT-Live agent consultations, highlighting potential operational challenges in session management. Overall, the day was marked by valuable refinements rather than major updates.

#### ✅ Merged PRs
- [#175944](https://github.com/openclaw/openclaw/pull/175944) refactor(infra): stop replaying native Git failures
- [#175939](https://github.com/openclaw/openclaw/pull/175939) refactor(infra): trust private timing bookkeeping
- [#175877](https://github.com/openclaw/openclaw/pull/175877) refactor(gateway): keep one advisory pending-work bucket per node
- [#175912](https://github.com/openclaw/openclaw/pull/175912) refactor: centralize core tool factory and replay facts
- [#175843](https://github.com/openclaw/openclaw/pull/175843) fix(ui): recheck placement stop authority after confirmation
- [#175924](https://github.com/openclaw/openclaw/pull/175924) fix: recover chat after a transient session subscription change
- [#174022](https://github.com/openclaw/openclaw/pull/174022) feat(ui): show the Gateway connection state in the sidebar footer
- [#175932](https://github.com/openclaw/openclaw/pull/175932) fix: offer publication on the first managed conversation turn
- [#175902](https://github.com/openclaw/openclaw/pull/175902) test(agents,integration,gateway): remove low-value tests (batch d243)
- [#175934](https://github.com/openclaw/openclaw/pull/175934) refactor(a2a): let the HTTP boundary own dispatch failures
- [#175556](https://github.com/openclaw/openclaw/pull/175556) improve(sessions): faster inbound reply capture on agents with many conversation deliveries
- [#175930](https://github.com/openclaw/openclaw/pull/175930) refactor(plugins): trust cached bundle skill inspection
- [#175929](https://github.com/openclaw/openclaw/pull/175929) fix: restore Windows agent readiness after database migration
- [#175900](https://github.com/openclaw/openclaw/pull/175900) fix(sessions): compact through symlinked state directories
- [#175829](https://github.com/openclaw/openclaw/pull/175829) refactor(agents): share keyed runtime and file queues
- [#175922](https://github.com/openclaw/openclaw/pull/175922) refactor(models): trust the catalog stamp error owner
- [#175608](https://github.com/openclaw/openclaw/pull/175608) improve(memory): reindex only changed chunks of an edited memory file
- [#175908](https://github.com/openclaw/openclaw/pull/175908) fix: omit inaccessible automations from session details
- [#146257](https://github.com/openclaw/openclaw/pull/146257) fix(codex): mirror persisted user admission
- [#145575](https://github.com/openclaw/openclaw/pull/145575) fix(cli): scope channel auth config writes
- [#175919](https://github.com/openclaw/openclaw/pull/175919) refactor(cli): remove unused runner fixture controls
- [#173830](https://github.com/openclaw/openclaw/pull/173830) fix(mcp): surface failed session cleanup in CLI checks
- [#175899](https://github.com/openclaw/openclaw/pull/175899) refactor(google): use the guarded video request deadline
- [#175874](https://github.com/openclaw/openclaw/pull/175874) refactor(commands): trim redundant owner commentary
- [#175778](https://github.com/openclaw/openclaw/pull/175778) refactor(sessions): simplify maintenance ownership
- [#175781](https://github.com/openclaw/openclaw/pull/175781) refactor(text): remove single-use code region projection cache
- [#175889](https://github.com/openclaw/openclaw/pull/175889) fix(agents): warn when model rollback preparation fails
- [#175876](https://github.com/openclaw/openclaw/pull/175876) test(core): remove low-value tests (batch d241)
- [#175885](https://github.com/openclaw/openclaw/pull/175885) test(database): refresh PostgreSQL conformance shard budgets
- [#175893](https://github.com/openclaw/openclaw/pull/175893) docs: show guests how to ask for a workspace refresh
- [#175833](https://github.com/openclaw/openclaw/pull/175833) refactor(acp): observe timeout cleanup failures once
- [#175823](https://github.com/openclaw/openclaw/pull/175823) refactor(agents): inline the private process stdin result
- [#175815](https://github.com/openclaw/openclaw/pull/175815) refactor(workers): trust synchronous pool preparation
- [#175804](https://github.com/openclaw/openclaw/pull/175804) refactor(skills): share source validation and simplify private failures
- [#175892](https://github.com/openclaw/openclaw/pull/175892) refactor(process): remove unused supervisor fixtures
- [#175872](https://github.com/openclaw/openclaw/pull/175872) fix(test): stabilize update and auth-refresh fixtures
- [#175890](https://github.com/openclaw/openclaw/pull/175890) fix(update): recover migrated Gateways after verification failure
- [#175864](https://github.com/openclaw/openclaw/pull/175864) refactor(gateway): prune worker history from resident inventory
- [#175859](https://github.com/openclaw/openclaw/pull/175859) fix: reuse session replicas through symlinked state paths
- [#175868](https://github.com/openclaw/openclaw/pull/175868) test(core,ui): remove low-value tests (batch d240)
- [#175760](https://github.com/openclaw/openclaw/pull/175760) refactor: simplify System Agent dependency ownership
- [#175866](https://github.com/openclaw/openclaw/pull/175866) test(ui,infra,agents,qa-lab): remove low-value tests (batch d239)
- [#175856](https://github.com/openclaw/openclaw/pull/175856) test(core,ui): remove low-value tests (batch d238)
- [#175881](https://github.com/openclaw/openclaw/pull/175881) refactor(process): remove dead child test fixtures
- [#175884](https://github.com/openclaw/openclaw/pull/175884) refactor(decisions): simplify advisory failure accounting
- [#175883](https://github.com/openclaw/openclaw/pull/175883) fix(chat): retain warm startup receipts after deferred mount
- [#175832](https://github.com/openclaw/openclaw/pull/175832) refactor(gateway): remove redundant lifecycle comments
- [#175860](https://github.com/openclaw/openclaw/pull/175860) fix(node): restore automatic updates for installed node services
- [#175870](https://github.com/openclaw/openclaw/pull/175870) refactor(plugins): read current metadata from its registered owner
- [#175875](https://github.com/openclaw/openclaw/pull/175875) refactor(mattermost): pass native request errors to retry owner
- [#175863](https://github.com/openclaw/openclaw/pull/175863) perf(sessions): reduce PostgreSQL turn preparation reads
- [#175873](https://github.com/openclaw/openclaw/pull/175873) fix(ci): repair Feishu dependency and SecretRef docs checks
- [#175867](https://github.com/openclaw/openclaw/pull/175867) refactor(daemon): remove dead Unix probe fixtures
- [#175871](https://github.com/openclaw/openclaw/pull/175871) fix: remove unused UI usage type exports
- [#175809](https://github.com/openclaw/openclaw/pull/175809) refactor(approvals): remove test-only forwarding selectors
- [#175769](https://github.com/openclaw/openclaw/pull/175769) fix(plugins): retain class adapter methods in session bindings
- [#175839](https://github.com/openclaw/openclaw/pull/175839) fix(build): prevent concurrent Control UI artifact failures
- [#175841](https://github.com/openclaw/openclaw/pull/175841) fix(tests): drain timed-out PostgreSQL preflight fixtures
- [#175830](https://github.com/openclaw/openclaw/pull/175830) test(infra,gateway,plugins): remove low-value tests (batch d237)
- [#175793](https://github.com/openclaw/openclaw/pull/175793) refactor(agents): trim redundant session and sandbox comments
- [#175857](https://github.com/openclaw/openclaw/pull/175857) fix(sessions): reject PostgreSQL postimages without admission
- [#175847](https://github.com/openclaw/openclaw/pull/175847) fix(tts): preserve unread preferences during updates
- [#175792](https://github.com/openclaw/openclaw/pull/175792) refactor(ai): retire obsolete Bun environment recovery
- [#175773](https://github.com/openclaw/openclaw/pull/175773) refactor(test): simplify daemon install and status fixtures
- [#175846](https://github.com/openclaw/openclaw/pull/175846) fix(gateway): handle history disconnects and batch Bun broadcasts
- [#175850](https://github.com/openclaw/openclaw/pull/175850) perf(gateway): trim redundant session tool event payloads
- [#175824](https://github.com/openclaw/openclaw/pull/175824) fix(update): avoid oversized runtime retention replies
- [#175858](https://github.com/openclaw/openclaw/pull/175858) refactor(agent): reuse retry sleep cancellation errors
- [#175854](https://github.com/openclaw/openclaw/pull/175854) refactor(daemon): remove dead Windows inventory fixtures
- [#175853](https://github.com/openclaw/openclaw/pull/175853) fix(gateway): prevent stale previews after broad invalidation
- [#175852](https://github.com/openclaw/openclaw/pull/175852) perf(gateway): omit session rows from hidden agent progress
- [#175787](https://github.com/openclaw/openclaw/pull/175787) refactor: keep internal core helpers with their owners
- [#175800](https://github.com/openclaw/openclaw/pull/175800) test(core,ui,scripts): remove low-value tests (batch d235)
- [#175620](https://github.com/openclaw/openclaw/pull/175620) refactor(ui): centralize supported-browser test fixtures
- [#175812](https://github.com/openclaw/openclaw/pull/175812) fix(database): avoid redundant recovery capture isolation
- [#175825](https://github.com/openclaw/openclaw/pull/175825) refactor(gateway): simplify terminal persistence handoff
- [#175797](https://github.com/openclaw/openclaw/pull/175797) test(doctor,gateway,scripts): remove low-value tests (batch d234)
- [#175761](https://github.com/openclaw/openclaw/pull/175761) refactor(plugins): use concrete runtime owners
- [#175844](https://github.com/openclaw/openclaw/pull/175844) fix(storage): scan large JSON members without regex backtracking
- [#175840](https://github.com/openclaw/openclaw/pull/175840) fix(ui): show saved model defaults after rejected saves
- [#175838](https://github.com/openclaw/openclaw/pull/175838) refactor(tts): carry the resolved saved provider preference
- [#175836](https://github.com/openclaw/openclaw/pull/175836) refactor(daemon): remove dead systemd inspection fixtures
- [#175776](https://github.com/openclaw/openclaw/pull/175776) improve(doctor): avoid duplicate integrity scans during upgrades
- [#175722](https://github.com/openclaw/openclaw/pull/175722) fix(chat): keep session filters when changing model settings
- [#175813](https://github.com/openclaw/openclaw/pull/175813) test(sessions,channels): remove low-value tests (batch d236)
- [#175818](https://github.com/openclaw/openclaw/pull/175818) perf(config): defer form schema generation during config reads
- [#175165](https://github.com/openclaw/openclaw/pull/175165) fix: keep linked account selection in fresh cron sessions
- [#174314](https://github.com/openclaw/openclaw/pull/174314) fix(ui): keep browser results inline on desktop and mobile
- [#175655](https://github.com/openclaw/openclaw/pull/175655) fix(cli): interactive setup works on PostgreSQL
- [#175779](https://github.com/openclaw/openclaw/pull/175779) test(agents,gateway,channels): remove low-value tests (batch d233)
- [#175717](https://github.com/openclaw/openclaw/pull/175717) refactor(usage): reuse the canonical provider cost index
- [#175828](https://github.com/openclaw/openclaw/pull/175828) refactor(daemon): remove dead definition fixture branches
- [#175827](https://github.com/openclaw/openclaw/pull/175827) refactor(openai): simplify realtime retirement flow
- [#175816](https://github.com/openclaw/openclaw/pull/175816) perf(ui): paint restored sidebar before mounting conversation
- [#175808](https://github.com/openclaw/openclaw/pull/175808) perf(doctor): scope and reuse maintenance table checks
- [#175729](https://github.com/openclaw/openclaw/pull/175729) feat(deepseek): search the web with the standalone Search API
- [#175819](https://github.com/openclaw/openclaw/pull/175819) perf(gateway): avoid display work in session sharing
- [#175758](https://github.com/openclaw/openclaw/pull/175758) refactor(agents): trim redundant lifecycle comments
- [#175740](https://github.com/openclaw/openclaw/pull/175740) refactor: share extension filesystem discovery helpers
- [#175744](https://github.com/openclaw/openclaw/pull/175744) fix(ui): align Usage intervals and context accounting
- [#175699](https://github.com/openclaw/openclaw/pull/175699) ci: default daily tests to Bun and retain dual release validation
- [#175806](https://github.com/openclaw/openclaw/pull/175806) fix: show recommended Wonder and distinct Muse model names
- [#174045](https://github.com/openclaw/openclaw/pull/174045) fix(ui): keep settings drafts and data through reconnects
- [#175807](https://github.com/openclaw/openclaw/pull/175807) refactor(daemon): remove dead service fixture alternatives
- [#175820](https://github.com/openclaw/openclaw/pull/175820) chore(i18n): refresh native locales
- [#175331](https://github.com/openclaw/openclaw/pull/175331) refactor(infra): omit empty transaction publication callbacks
- [#175811](https://github.com/openclaw/openclaw/pull/175811) fix: UI deadcode check rejects diagnostics fixture types
- [#175762](https://github.com/openclaw/openclaw/pull/175762) test(gateway,agents,cli): remove low-value tests (batch d232)
- [#175798](https://github.com/openclaw/openclaw/pull/175798) refactor(update): stop polling completed report refusals
- [#175764](https://github.com/openclaw/openclaw/pull/175764) test(gateway): cron live suites hang on a same-root forced run and ignore stored accounts
- [#175732](https://github.com/openclaw/openclaw/pull/175732) fix: refresh SQLite schema snapshots and stabilize Bun tests
- [#175737](https://github.com/openclaw/openclaw/pull/175737) test(agents,config,chat): remove low-value tests (batch d230)
- [#175648](https://github.com/openclaw/openclaw/pull/175648) test(gateway,agents,ui): remove low-value tests (batch d224)
- [#175749](https://github.com/openclaw/openclaw/pull/175749) refactor(native): rely on app deployment floors
- [#175795](https://github.com/openclaw/openclaw/pull/175795) refactor(daemon): remove dead runtime fixture alternatives
- [#175765](https://github.com/openclaw/openclaw/pull/175765) refactor(gateway): simplify public representation cache state
- [#175790](https://github.com/openclaw/openclaw/pull/175790) refactor(state): retire unused terminal-latch generations
- [#175788](https://github.com/openclaw/openclaw/pull/175788) refactor(codex): keep catalog currency on the index owner
- [#175720](https://github.com/openclaw/openclaw/pull/175720) fix(cli): infer web fetch fails on a default install with no fetch provider
- [#175777](https://github.com/openclaw/openclaw/pull/175777) fix(update): show progress while migrated updates finalize
- [#175796](https://github.com/openclaw/openclaw/pull/175796) fix(sqlite): dispatch synchronous read operations directly
- [#164529](https://github.com/openclaw/openclaw/pull/164529) fix(agents): warn once when a requester settle wake keeps hitting owner changes
- [#175789](https://github.com/openclaw/openclaw/pull/175789) refactor(ui): forbid retired redraw contracts
- [#175578](https://github.com/openclaw/openclaw/pull/175578) refactor(status): keep report assembly with command owners
- [#175743](https://github.com/openclaw/openclaw/pull/175743) test(ui,gateway,agents): remove low-value tests (batch d231)
- [#175742](https://github.com/openclaw/openclaw/pull/175742) refactor(agents): trim redundant tool execution comments
- [#175770](https://github.com/openclaw/openclaw/pull/175770) perf(sessions): reuse resident facts for durable turn preparation
- [#175780](https://github.com/openclaw/openclaw/pull/175780) refactor(test): remove dead Startup inventory fixture branches
- [#175672](https://github.com/openclaw/openclaw/pull/175672) test(control-ui): reproduce Team boot queries and warm snapshots
- [#175684](https://github.com/openclaw/openclaw/pull/175684) refactor(test): remove dead exec-policy fixture branches
- [#175786](https://github.com/openclaw/openclaw/pull/175786) refactor(ai): prepare continuation requests before claiming cache slots
- [#175675](https://github.com/openclaw/openclaw/pull/175675) fix(ci): restore WhatsApp successor socket lifecycle tests
- [#175785](https://github.com/openclaw/openclaw/pull/175785) refactor(ai): simplify automatic SSE fallback preference
- [#175721](https://github.com/openclaw/openclaw/pull/175721) refactor(ui): replace chat pane redraws with owner projections
- [#175656](https://github.com/openclaw/openclaw/pull/175656) fix(auth): saving an API key for a new agent fails with a database identity error
- [#175155](https://github.com/openclaw/openclaw/pull/175155) refactor(ui): keep private presentation with its page and host owners
- [#175767](https://github.com/openclaw/openclaw/pull/175767) fix(ui): stop redundant session reads during swarm updates
- [#175772](https://github.com/openclaw/openclaw/pull/175772) perf(ui): yield warm routing after sidebar restore
- [#175766](https://github.com/openclaw/openclaw/pull/175766) refactor(storage): trust supported runtime Zstd availability
- [#175757](https://github.com/openclaw/openclaw/pull/175757) refactor(update): validate runtime artifacts at publication
- [#175657](https://github.com/openclaw/openclaw/pull/175657) refactor(tools): build request-owned OpenAI wire descriptors
- [#175774](https://github.com/openclaw/openclaw/pull/175774) fix(sqlite): snapshot live databases through the online-backup owner
- [#175409](https://github.com/openclaw/openclaw/pull/175409) fix(heartbeat): isolated heartbeats resume the same native thread on every run
- [#175738](https://github.com/openclaw/openclaw/pull/175738) fix: refresh workspace bases with missing partial-clone contents
- [#175771](https://github.com/openclaw/openclaw/pull/175771) chore(catalog): recommend unversioned muse-wonder alias
- [#175768](https://github.com/openclaw/openclaw/pull/175768) perf(ui): reuse swarm descriptors across unchanged child updates
- [#175723](https://github.com/openclaw/openclaw/pull/175723) refactor(desktop): use native clocks and transport boundaries
- [#175747](https://github.com/openclaw/openclaw/pull/175747) fix(agents): reuse prepared metadata in planning and completion
- [#175752](https://github.com/openclaw/openclaw/pull/175752) perf(gateway): reduce Control UI bootstrap blocking
- [#175750](https://github.com/openclaw/openclaw/pull/175750) refactor(test): remove dead restart-health fixture branches
- [#175231](https://github.com/openclaw/openclaw/pull/175231) refactor(config): reuse channel account and group DM contracts
- [#175698](https://github.com/openclaw/openclaw/pull/175698) refactor(ui): consolidate page reads and canonical display facts
- [#175662](https://github.com/openclaw/openclaw/pull/175662) fix: honor quick integrity checks during historical upgrades
- [#175256](https://github.com/openclaw/openclaw/pull/175256) fix(codex): avoid repeated host compaction on native turns
- [#175753](https://github.com/openclaw/openclaw/pull/175753) fix(ci): retire unused provider environment alias
- [#175706](https://github.com/openclaw/openclaw/pull/175706) refactor(gateway): simplify plugin config application bookkeeping
- [#175309](https://github.com/openclaw/openclaw/pull/175309) fix: prompt cache misses on completion, heartbeat and non-owner turns
- [#175718](https://github.com/openclaw/openclaw/pull/175718) fix(sessions): reuse committed PostgreSQL publication facts
- [#175735](https://github.com/openclaw/openclaw/pull/175735) fix(update): avoid false restart failures after authentication rejection
- [#168778](https://github.com/openclaw/openclaw/pull/168778) fix(whatsapp): final replies disappear after unrelated reloads
- [#175724](https://github.com/openclaw/openclaw/pull/175724) test(agents, gateway, ui): remove low-value tests (batch d229)
- [#169145](https://github.com/openclaw/openclaw/pull/169145) fix(codex): oversized relay requests fail fast instead of retrying as 502
- [#175595](https://github.com/openclaw/openclaw/pull/175595) refactor(agents): consume canonical provider routes directly
- [#175728](https://github.com/openclaw/openclaw/pull/175728) refactor(test): remove dead connect CLI fixture branches
- [#175623](https://github.com/openclaw/openclaw/pull/175623) refactor(agents): remove redundant provider model comments
- [#175726](https://github.com/openclaw/openclaw/pull/175726) fix(daemon): preserve safety refusals during service-start recovery
- [#175688](https://github.com/openclaw/openclaw/pull/175688) test(gateway,ui,config): remove low-value tests (batch d227)
- [#174457](https://github.com/openclaw/openclaw/pull/174457) docs(cli-backends): say which Claude login supplies the history recovery boundary
- [#175641](https://github.com/openclaw/openclaw/pull/175641) improve(gateway): reduce retained compressed broadcast memory
- [#175653](https://github.com/openclaw/openclaw/pull/175653) refactor(test): remove dead infra fixture branches
- [#175727](https://github.com/openclaw/openclaw/pull/175727) test(ci): run fork-fixed files on Bun (b76e)
- [#175702](https://github.com/openclaw/openclaw/pull/175702) test(fixtures): remove low-value tests (batch d228)
- [#167445](https://github.com/openclaw/openclaw/pull/167445) fix: show deferred steering in the chat queue
- [#175671](https://github.com/openclaw/openclaw/pull/175671) test(qa, runtime): remove low-value tests (batch d226)
- [#175715](https://github.com/openclaw/openclaw/pull/175715) refactor(test): remove dead sessions CLI fixture branches
- [#175716](https://github.com/openclaw/openclaw/pull/175716) fix(daemon): preserve native cleanup through LaunchAgent inspection
- [#175617](https://github.com/openclaw/openclaw/pull/175617) refactor(state): simplify agent native admission
- [#175241](https://github.com/openclaw/openclaw/pull/175241) fix(ui): top bar resizes when leaving Settings at narrow widths
- [#175705](https://github.com/openclaw/openclaw/pull/175705) fix(test): make state reader cleanup fixtures runtime-independent
- [#175555](https://github.com/openclaw/openclaw/pull/175555) improve(memory): faster memory index admission on large full-text indexes
- [#175622](https://github.com/openclaw/openclaw/pull/175622) refactor(fs): share optional metadata and executable probes
- [#175679](https://github.com/openclaw/openclaw/pull/175679) refactor(ui): publish chat metadata without redraw callbacks
- [#175709](https://github.com/openclaw/openclaw/pull/175709) fix(daemon): retain native errors through systemd diagnostic fallback
- [#175697](https://github.com/openclaw/openclaw/pull/175697) fix(gateway): keep session row baselines across fact changes
- [#175676](https://github.com/openclaw/openclaw/pull/175676) refactor(chat): exercise pane owner publications in fixtures
- [#175604](https://github.com/openclaw/openclaw/pull/175604) refactor(subagents): simplify prepared registry postimages
- [#175629](https://github.com/openclaw/openclaw/pull/175629) fix(storage): reuse PostgreSQL read snapshot facts
- [#175703](https://github.com/openclaw/openclaw/pull/175703) fix(daemon): preserve cleanup failures in systemd capability inspection
- [#175668](https://github.com/openclaw/openclaw/pull/175668) fix(gateway): keep presence deltas compact during activity
- [#175674](https://github.com/openclaw/openclaw/pull/175674) perf(chat): reuse unchanged startup command catalogs
- [#175666](https://github.com/openclaw/openclaw/pull/175666) chore: update shared Bun pin to b76e4b4e67
- [#175660](https://github.com/openclaw/openclaw/pull/175660) test(agents,infra,gateway): remove low-value tests (batch d225)
- [#175689](https://github.com/openclaw/openclaw/pull/175689) fix: preserve cleanup failures during systemd peer inspection
- [#174259](https://github.com/openclaw/openclaw/pull/174259) fix(agents): enforce one isolated completion deadline
- [#175587](https://github.com/openclaw/openclaw/pull/175587) refactor(ui): project swarm hydration from its owner
- [#175553](https://github.com/openclaw/openclaw/pull/175553) fix(sessions): exclude transcript artifacts from model identity
- [#175664](https://github.com/openclaw/openclaw/pull/175664) refactor(test): remove dead state-reader fixture branches
- [#175574](https://github.com/openclaw/openclaw/pull/175574) refactor(ui): simplify snapshot database admission
- [#175677](https://github.com/openclaw/openclaw/pull/175677) fix(cli): restore malformed-config diagnostics before command startup
- [#175669](https://github.com/openclaw/openclaw/pull/175669) fix(daemon): surface node environment cleanup read failures
- [#175673](https://github.com/openclaw/openclaw/pull/175673) fix(ci): retire stale exports while preserving runtime guards
- [#175659](https://github.com/openclaw/openclaw/pull/175659) fix(doctor): inspect native assignments during maintenance writes
- [#175386](https://github.com/openclaw/openclaw/pull/175386) fix(context): /context lists same-named bootstrap files without paths
- [#175586](https://github.com/openclaw/openclaw/pull/175586) test: remove low-value tests (batch d221)
- [#175570](https://github.com/openclaw/openclaw/pull/175570) refactor(ui): retire chat lifecycle redraw requests
- [#175614](https://github.com/openclaw/openclaw/pull/175614) fix(tts): DeepInfra and OpenRouter speech times out on slow hosted synthesis
- [#174044](https://github.com/openclaw/openclaw/pull/174044) fix(ui): keep Gateway presentation through reconnects
- [#175615](https://github.com/openclaw/openclaw/pull/175615) fix(cli): TTS --output writes WAV audio into .mp3 files
- [#175650](https://github.com/openclaw/openclaw/pull/175650) perf(gateway): reduce Control UI session-page lookup work
- [#174590](https://github.com/openclaw/openclaw/pull/174590) fix(restart): surface stale Gateway cleanup failures
- [#175636](https://github.com/openclaw/openclaw/pull/175636) fix(backup): retain progress when archive creation is cancelled

#### 🐛 New Issues
- [#175027](https://github.com/openclaw/openclaw/issues/175027) [Bug]: Android realtime Talk reuses archived backing session and rejects GPT-Live agent consults `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬8
- [#175646](https://github.com/openclaw/openclaw/issues/175646) [Bug]: agents.defaults.utilityModel accepts routes that cannot run session-observer work; no config-time validation and the observer shutdown is log-only `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬5
- [#175869](https://github.com/openclaw/openclaw/issues/175869) Update failure: gateway-recovery-verification (2026.10.3) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#175861](https://github.com/openclaw/openclaw/issues/175861) [Bug]: Every installed agent-harness plugin joins every agent-runtime load plan, so an unused harness plugin (incl. node_modules) is re-captured on every agent turn `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#175794](https://github.com/openclaw/openclaw/issues/175794) [Bug]: Realtime Talk (gateway-relay) WebSocket bypasses managed proxy (proxy.proxyUrl) – "Realtime provider error" on egress-restricted hosts `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#175701](https://github.com/openclaw/openclaw/issues/175701) [Bug]: Gateway startup stalls and WhatsApp stays suppressed by restart-loop breaker on WSL2 (2026.10.4) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#175167](https://github.com/openclaw/openclaw/issues/175167) iOS voice notes silently fail transcription (hydrationSuppressed: true, never reaches STT provider) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬3
- [#175644](https://github.com/openclaw/openclaw/issues/175644) [Bug]: LM Studio native /api/v1 calls lose their Authorization header with a store-backed SecretRef - preload 401, JIT 8192 context, every run dies on context overflow `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬2
- [#175897](https://github.com/openclaw/openclaw/issues/175897) Agent database stays degraded with `DataCloneError: #<Object> could not be cloned` after successful `doctor --fix` migration (v28 → v31) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#175926](https://github.com/openclaw/openclaw/issues/175926) SQLite snapshot reclamation skips every cycle: Unrecognized snapshot directory `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#175865](https://github.com/openclaw/openclaw/issues/175865) Update failure: gateway-recovery-verification (2026.10.3) `P1` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#175831](https://github.com/openclaw/openclaw/issues/175831) [Bug]: node install writes dist/index.js (gateway entry), bypassing node-host launcher, so headless nodes never auto-update; Windows wrapper install fails spawn EINVAL `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬2
- [#175598](https://github.com/openclaw/openclaw/issues/175598) [Feature]: Check skill requires.bins inside the sandbox for sandboxed agents `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#175822](https://github.com/openclaw/openclaw/issues/175822) Update failure: gateway-recovery-verification (2026.10.4) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#175365](https://github.com/openclaw/openclaw/issues/175365) [Bug]: isolatedSession heartbeat resumes the same Codex thread on every run, so context grows until auto-compaction `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#175708](https://github.com/openclaw/openclaw/issues/175708) RFC: Improve Advisor efficiency with event-driven triggers and windowed context `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#175712](https://github.com/openclaw/openclaw/issues/175712) update: post-restart verification fails with `device identity required` after 2026.10.2 → 2026.10.4 (npm install) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#175582](https://github.com/openclaw/openclaw/issues/175582) Support multiple web search/fetch providers at once `P3` `impact:auth-provider` 💬2
- [#175380](https://github.com/openclaw/openclaw/issues/175380) [Bug]: Failed setup-inference probe leaves an unregistered browser container running `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#175369](https://github.com/openclaw/openclaw/issues/175369) Update failure: requested (2026.10.3) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#175400](https://github.com/openclaw/openclaw/issues/175400) [Bug]: doctor --fix cannot apply audit-events-v2 state DB migration on a service-managed gateway (2026.6.11 -> 2026.9.33 blocked) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#175373](https://github.com/openclaw/openclaw/issues/175373) [Bug]: doctor --fix silent for ~18 min: btrfs NOCOW repair copies the whole agent store dir and spawns getfacl/setfacl per file (2026.10.4) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#175429](https://github.com/openclaw/openclaw/issues/175429) Valid third-party npm plugin installs report provenance-invalid (npm counterpart of #164811) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#175304](https://github.com/openclaw/openclaw/issues/175304) session_status / Control UI: "Context: 793k/1M (76%)" is a stale snapshot while the real prompt is ~1.5k tokens `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#175281](https://github.com/openclaw/openclaw/issues/175281) [Bug]: projects.clone lease uses busyTimeoutMs 0 and fails sandboxed worktree spawns on ordinary SQLITE_BUSY `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#175270](https://github.com/openclaw/openclaw/issues/175270) Control UI: "Applying chat settings" stuck forever after a lost ack (queue item stays in waiting-model) `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:ux-friction` 💬2
- [#175148](https://github.com/openclaw/openclaw/issues/175148) Update failure: gateway-recovery-verification (2026.10.2) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#174994](https://github.com/openclaw/openclaw/issues/174994) [Bug]: reply sent while ask_user is pending kills the run - transcript rewrite conflict not retried on the resume path `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#175053](https://github.com/openclaw/openclaw/issues/175053) [Bug]: Immutable update preparation re-clones the full repository every run under the generic step timeout `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#175100](https://github.com/openclaw/openclaw/issues/175100) [Bug]: Linux Gateway startup refuses stale state locks when the old PID is reused as an unrelated worker TID `P1` `clawsweeper:source-repro` `impact:crash-loop` `issue-rating: 🦞 diamond lobster` 💬2
- [#175051](https://github.com/openclaw/openclaw/issues/175051) [Bug]: Immutable update preparation always fails: candidate build skips .d.ts while verifyPluginSdkExports requires dist/plugin-sdk/core.d.ts `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#175062](https://github.com/openclaw/openclaw/issues/175062) [Bug]: Background exec completion continuation loses conversations_send available to scheduled main run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#175061](https://github.com/openclaw/openclaw/issues/175061) [Bug]: Main systemEvent auto-delivery passes user-prefixed Weixin recipient to adapter, failing context lookup and send `P2` `impact:message-loss` 💬2
- [#175950](https://github.com/openclaw/openclaw/issues/175950) [Bug]: Android app replaces an already-shown assistant reply when a subagent completion arrives seconds later 💬1
- [#175915](https://github.com/openclaw/openclaw/issues/175915) [Bug]: Chat does not recover a transient session subscription change `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#175941](https://github.com/openclaw/openclaw/issues/175941) [Feature]: Support Codex Micro hardware controls in OpenClaw desktop `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#175909](https://github.com/openclaw/openclaw/issues/175909) Support prompt-created GPT-Live voice references `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#175910](https://github.com/openclaw/openclaw/issues/175910) fix: publication tool is missing from fresh managed conversations `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#175937](https://github.com/openclaw/openclaw/issues/175937) Code Mode loses parked work when its observer finishes successfully `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#175894](https://github.com/openclaw/openclaw/issues/175894) fix: respect automation read access in session details `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#175917](https://github.com/openclaw/openclaw/issues/175917) Support core Goals and continuation accounting on Codex cloud workers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#175913](https://github.com/openclaw/openclaw/issues/175913) [Bug]: Managed Git update aborts before checkout when recovery-state guard meets foreign maintenance after service stop `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#175904](https://github.com/openclaw/openclaw/issues/175904) Update failure: gateway-recovery-verification (2026.10.3) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#175905](https://github.com/openclaw/openclaw/issues/175905) Paired-node skill search and reads lose verified delivered instructions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#175901](https://github.com/openclaw/openclaw/issues/175901) Codex defers allowed tools when native discovery is unavailable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#175891](https://github.com/openclaw/openclaw/issues/175891) Session archival state is unrepresentable in the CLI and indistinguishable from a default filter in the tool `P2` `impact:session-state` 💬1
- [#175862](https://github.com/openclaw/openclaw/issues/175862) [Bug]: Gateway event loop stalls after a provider 429 when the fallback decision is next=none; the error final is never delivered `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#175851](https://github.com/openclaw/openclaw/issues/175851) [Bug]: a sub-agent loses a tool its own config allows when the requester's allowlist lacks it ("No callable tools remain", 2026.9.8) `P3` 💬1
- [#175848](https://github.com/openclaw/openclaw/issues/175848) Gateway RSS grows to ~2.2GB across fragmented V8 "App-Specific Tag 16" regions; WhatsApp listener degrades (app-silent) under pressure `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#175826](https://github.com/openclaw/openclaw/issues/175826) [Feature]: Android: match browser in-chat optional questions and native approval requests `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#175821](https://github.com/openclaw/openclaw/issues/175821) [Bug]: claude-cli manual /compact runs in a separate process, so the warm live session never adopts the compaction (status says ok, context unchanged) `P1` `impact:session-state` 💬1
- [#175803](https://github.com/openclaw/openclaw/issues/175803) [Feature]: Voice-scoped OAuth-only credential policy that fails closed before Platform fallback `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#175801](https://github.com/openclaw/openclaw/issues/175801) [Bug]: SIWC post-tool requests retain captured access and cannot reach safe request-level renewal `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#175802](https://github.com/openclaw/openclaw/issues/175802) [Bug]: Private-output stream suppression depends on prior source delivery `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬1
- [#175791](https://github.com/openclaw/openclaw/issues/175791) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#175782](https://github.com/openclaw/openclaw/issues/175782) [Feature]: Document running OpenClaw on tcr or a similar local subscription pool `P3` 💬1
- [#175784](https://github.com/openclaw/openclaw/issues/175784) Update failure: package-swap (2026.9.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#175710](https://github.com/openclaw/openclaw/issues/175710) Bug: refresh_base fails when a known partial-clone base lacks file contents `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#175748](https://github.com/openclaw/openclaw/issues/175748) [Bug]: Read tool wrapper throws TypeError when a base tool omits details `bug` `bug:behavior` `clawsweeper:bulk-filed` 💬1
- [#175746](https://github.com/openclaw/openclaw/issues/175746) [Bug]: Worker placement reuses stale parent model facts and skips change detection before dispatch `bug` `bug:behavior` `clawsweeper:bulk-filed` 💬1
- [#175745](https://github.com/openclaw/openclaw/issues/175745) Linux AppImage 2026.10.4: dashboard partially loads, then blanks on foreground interaction (Fedora/GNOME/Wayland) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#175739](https://github.com/openclaw/openclaw/issues/175739) [Bug]: Context window refresh can be overwritten by an in-flight pre-refresh model discovery `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#175736](https://github.com/openclaw/openclaw/issues/175736) [Bug]: Self-hosted base-URL prompt prefills the default, so typed URLs append to it `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#175734](https://github.com/openclaw/openclaw/issues/175734) [Bug]: Group mentionPatterns are stripped as substrings from slash-command arguments, corrupting paths (e.g. /acp spawn --cwd .../norma/...) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#175731](https://github.com/openclaw/openclaw/issues/175731) [Bug]: Orphaned tailscale serve foreground claim from a crashed Gateway blocks every restart (TAILSCALE_ROUTE_OWNERSHIP_CONFLICT loop) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#175730](https://github.com/openclaw/openclaw/issues/175730) [Bug]: shutdown maintenance pass outlives its parent; next start refused with 'state ... is undergoing offline maintenance' for minutes (27 refusals / 3 days, no alert) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#175704](https://github.com/openclaw/openclaw/issues/175704) Update failure: doctor-failed (2026.9.4) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#175700](https://github.com/openclaw/openclaw/issues/175700) [Bug]: memory-wiki OKF re-import silently erases human notes on concept pages `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#175690](https://github.com/openclaw/openclaw/issues/175690) [Feature]: Supported authenticated-source custody across first Gateway code loading `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:session-state` 💬1
- [#175681](https://github.com/openclaw/openclaw/issues/175681) Update failure: package-swap (2026.9.9) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#175670](https://github.com/openclaw/openclaw/issues/175670) [Bug]: claude-cli reuse-with-drift keeps a stale MCP tool catalog after gateway restart — session silently loses exec, spawned children inherit the loss `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#175665](https://github.com/openclaw/openclaw/issues/175665) Telegram: reactions in private-chat topics are routed to the base DM session, not the topic session `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#175663](https://github.com/openclaw/openclaw/issues/175663) [Feature]: Separate Control UI link origin so a tailnet-only Control UI can coexist with a public OAuth callback origin `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#175597](https://github.com/openclaw/openclaw/issues/175597) [Bug]: sessions_send reply is cut at 4,096 characters, and the requester isn't told `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#175541](https://github.com/openclaw/openclaw/issues/175541) CI: qualify tsc-ts with diagnostic and resource parity `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#175643](https://github.com/openclaw/openclaw/issues/175643) [Bug]: A failed plugin reload defers every later config apply, and no operator-facing surface reports it (config set, status, plugins list all look clean) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#175645](https://github.com/openclaw/openclaw/issues/175645) [Bug]: Authored NO_REPLY silence in a subagent announce run is classified as empty_response and burns the whole fallback chain `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#175618](https://github.com/openclaw/openclaw/issues/175618) Move Talk model-family Settings policy to its provider `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#175599](https://github.com/openclaw/openclaw/issues/175599) [Bug]: system event --session-key is never read when heartbeat.isolatedSession is true `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#175591](https://github.com/openclaw/openclaw/issues/175591) [Bug]: 2026.9.33 Gateway plugin source capture omits a declared nested dependency — @openclaw/discord fails to register (mdast-util-to-string) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#175581](https://github.com/openclaw/openclaw/issues/175581) Feature: Cloudflare Clef decisions through host CLI OAuth `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#175583](https://github.com/openclaw/openclaw/issues/175583) [Feature]: Let a provider place the resolved credential in a named request header `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:auth-provider` 💬1
- [#175503](https://github.com/openclaw/openclaw/issues/175503) Workspace synchronization conflicts on generated test caches and build locks `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#175545](https://github.com/openclaw/openclaw/issues/175545) Move Session Sources settings declarations to their plugins `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#175543](https://github.com/openclaw/openclaw/issues/175543) [Feature]: Add Bifrost as a bundled provider `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#175519](https://github.com/openclaw/openclaw/issues/175519) AutoReview is cancelled by Codex tool timeouts before the review finishes `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#175540](https://github.com/openclaw/openclaw/issues/175540) [Docs Bug]: Fresh macOS DMG installation triggers undocumented Git/Command Line Tools and Bun network permission prompts `bug` `docs` `no-stale` `P2` 💬1
- [#175533](https://github.com/openclaw/openclaw/issues/175533) [Bug]: Fresh macOS DMG install restricts OpenAI model picker to one model after API-key onboarding `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#175522](https://github.com/openclaw/openclaw/issues/175522) [Bug]: iOS embedded Settings gets HTTP 401 behind Basic Auth while native Gateway works `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#175516](https://github.com/openclaw/openclaw/issues/175516) Add `@sprintcx/openclaw-cliq` (Zoho Cliq) as an official external channel `P3` 💬1
- [#175440](https://github.com/openclaw/openclaw/issues/175440) fix: guest widget controls stay disabled when bootstrap requires operator read `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#175500](https://github.com/openclaw/openclaw/issues/175500) [Bug]: Telegram message-tool sends to another DM topic are not recorded in the destination session and create an empty account-qualified session `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#175505](https://github.com/openclaw/openclaw/issues/175505) Extend exec-denial guidance (EXEC_AUTO_REVIEW_DENIAL_GUIDANCE) to strictInlineEval + mac policy denial classes `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#175445](https://github.com/openclaw/openclaw/issues/175445) fix: nested widget results show duplicate live previews `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#175485](https://github.com/openclaw/openclaw/issues/175485) Workshop secret-exfiltration false positive on a historical cross-database-fetch note `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#175303](https://github.com/openclaw/openclaw/issues/175303) [Bug]: Typing keepalive loop can surface an unhandled rejection from onTick for plugin callers `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#175446](https://github.com/openclaw/openclaw/issues/175446) Bug: Windows: GitHub PAT verifies successfully but command execution rejects credential `bug` `regression` `P2` `impact:auth-provider` 💬1
- [#175441](https://github.com/openclaw/openclaw/issues/175441) [Bug]: tagged-provider streams re-render the whole reply twice per delta (5.7 s at 32 KB, 22.7 s at 64 KB of blocked Gateway CPU) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#175444](https://github.com/openclaw/openclaw/issues/175444) [Bug]: a leaked model control token makes every later streamed delta re-scan the whole reply `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#175439](https://github.com/openclaw/openclaw/issues/175439) [Bug]: every '<' in a streamed reply re-parses the whole answer's Markdown - HTML/JSX answers block the Gateway (0.9 s at 7 KB, 48 s at 60 KB) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#175434](https://github.com/openclaw/openclaw/issues/175434) Update failure: finalize-plugins (2026.9.8) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#175421](https://github.com/openclaw/openclaw/issues/175421) [Bug]: Zalo: inbound DMs containing a URL arrive as message.unsupported.received and are silently dropped `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#175418](https://github.com/openclaw/openclaw/issues/175418) Buzz cold-start recovery test intermittently times out waiting for the gateway to settle `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#175396](https://github.com/openclaw/openclaw/issues/175396) dispatch_action rejects all non-string tool arguments (array / boolean / number) `P2` `impact:other` 💬1
- [#175382](https://github.com/openclaw/openclaw/issues/175382) [Bug]: sessions_spawn with ACP runtime fails with Unknown agent id "claude" while /acp spawn succeeds `bug` `bug:behavior` `P2` `impact:session-state` 💬1
- [#175245](https://github.com/openclaw/openclaw/issues/175245) Doctor and session recover loop on a retained source deleted by `sessions cleanup --enforce`; post-session plugin migrations never run `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#175372](https://github.com/openclaw/openclaw/issues/175372) [Bug]: `/codex detach` (and re-running `/codex bind`) fails with "Telegram runtime not initialized" while `/session unbind` succeeds `bug` `no-stale` `bug:behavior` `P1` 💬1
- [#175360](https://github.com/openclaw/openclaw/issues/175360) [Bug] openclaw delegator fails with Inference setup probe cleanup did not finish safely `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#175355](https://github.com/openclaw/openclaw/issues/175355) [Feature]: memory temporal decay needs a floor or configurable curve (30-day half-life buries reference notes) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#175356](https://github.com/openclaw/openclaw/issues/175356) [Bug]: heartbeat-wake wait in cron has no deadline; run stays running until Gateway restart `P2` `impact:other` `clawsweeper:bulk-filed` 💬1
- [#175344](https://github.com/openclaw/openclaw/issues/175344) [Bug]: Chat /login blocks the channel lane during device sign-in; /login cancel is answered only when the sign-in is interrupted about 7 minutes after /login `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#175338](https://github.com/openclaw/openclaw/issues/175338) [Bug]: /models and models status name a saved profile while inference uses the provider's configured api-key `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#175333](https://github.com/openclaw/openclaw/issues/175333) [Bug]: openclaw configure, classic onboarding and agents add save new channel tokens as plaintext in openclaw.json `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#175305](https://github.com/openclaw/openclaw/issues/175305) [Bug]: Windows Gateway startup takes 5-14 min: channel-plugin dependency tree hard-linked 4x every boot, never reused, and materialized by read-only status --deep `P1` `impact:crash-loop` 💬1
- [#174909](https://github.com/openclaw/openclaw/issues/174909) DSML tool-call recovery never runs for DeepSeek models routed through OpenRouter `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#175292](https://github.com/openclaw/openclaw/issues/175292) [Bug]: Capability lease revoke aborts on the first throwing cleanup and blocks any retry `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#175290](https://github.com/openclaw/openclaw/issues/175290) [Bug]: Native binding lease update() retries conflicts forever, ignoring the waitMs deadline used by transact(), and can starve timers `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#175282](https://github.com/openclaw/openclaw/issues/175282) [Bug]: workboard_block rejects dispatcher-generated worker run ids (149 > 120 chars) `P2` `impact:other` `clawsweeper:bulk-filed` 💬1
- [#175286](https://github.com/openclaw/openclaw/issues/175286) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#175283](https://github.com/openclaw/openclaw/issues/175283) [Bug]: sessions_spawn worktree:true ignores cleanup:"delete" (reports keep; worktree left on disk) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` 💬1
- [#175271](https://github.com/openclaw/openclaw/issues/175271) Control UI: "Applying chat settings" stuck forever after a lost ack (queue item stays in waiting-model) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#175275](https://github.com/openclaw/openclaw/issues/175275) [Feature]: Requester-bound native delegation for plugin controllers `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#175264](https://github.com/openclaw/openclaw/issues/175264) [Bug]: a streamed phased final answer holding an open plain-text tool-call candidate re-parses the whole reply per delta (5 s at 12 KB, 207 s at 32 KB of blocked stream CPU) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#175215](https://github.com/openclaw/openclaw/issues/175215) [Bug]: Security audit exposure checks ignore exact channel-to-agent bindings `bug` `security` `bug:behavior` `P2` 💬1
- [#175214](https://github.com/openclaw/openclaw/issues/175214) [Bug]: WhatsApp quote-replies never set `is_reply_target`, so the replied-to message is not marked or pinned as `[reply target]` 💬1
- [#175208](https://github.com/openclaw/openclaw/issues/175208) [Feature]: Native complete private-channel roster for Microsoft Teams `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#175194](https://github.com/openclaw/openclaw/issues/175194) /models More and Try commands lose custom page size `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#175177](https://github.com/openclaw/openclaw/issues/175177) [Feature]: Slack opt-in root-mention-only admission before durable ingress `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#175156](https://github.com/openclaw/openclaw/issues/175156) [Bug]: streaming a reply that quotes or leaks tool-call XML outside code re-parses the whole reply per delta (quadratic Gateway CPU) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#175140](https://github.com/openclaw/openclaw/issues/175140) [Bug]: WebChat folds a turn's final answer into the tool-call row instead of rendering a clean message (2026.10.4, interleaved turn shape) `P2` `impact:message-loss` 💬1
- [#175128](https://github.com/openclaw/openclaw/issues/175128) [Bug]: Google Meet export omits requested document bodies when transcript entries are skipped `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#175117](https://github.com/openclaw/openclaw/issues/175117) [Feature]: Opt-in config for diagnostics.cacheTrace size and node limits so a trace row can hold a whole run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#174975](https://github.com/openclaw/openclaw/issues/174975) [Bug]: Conversation readers cannot open saved inline widgets `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1

#### 🔒 Closed Issues
- [#160521](https://github.com/openclaw/openclaw/issues/160521) Gateway crash: state DB read-admission seal -> "Worker environment inventory has closed" -> unhandled rejection in reconcileActive
- [#74848](https://github.com/openclaw/openclaw/issues/74848) [Bug]: macOS App node repeatedly disconnects with "cancelled" while CLI node works
- [#125570](https://github.com/openclaw/openclaw/issues/125570) [Bug]: Skill Workshop update apply overwrites the live skill's description, silently breaking skill routing
- [#138599](https://github.com/openclaw/openclaw/issues/138599) Auto-compaction deadlocks when session exceeds compaction model context window (reasoning-only -> retries exhausted -> stalled; manual compact succeeds)
- [#99659](https://github.com/openclaw/openclaw/issues/99659) [Bug]: Openclaw was OOM killed after companion app connected
- [#163434](https://github.com/openclaw/openclaw/issues/163434) age-based transcript trimming deletes the session header, and ensureTranscriptHeader cannot repair a partially trimmed transcript
- [#139098](https://github.com/openclaw/openclaw/issues/139098) One-shot automation session cannot be deleted: leftover non-terminal row in worker_session_placements (cloud worker placement identity changed)
- [#44789](https://github.com/openclaw/openclaw/issues/44789) [Bug]: openclaw 2026.03.11 partially config litellm
- [#166665](https://github.com/openclaw/openclaw/issues/166665) [Bug]: Failed byte-triggered compaction suppresses itself with no fallback, so a session's active transcript grows unbounded (150x maxActiveTranscriptBytes)
- [#171446](https://github.com/openclaw/openclaw/issues/171446) [Bug]: `openclaw update` loops in `validating — updater-runtime-retention`, ignores `--timeout`, and does heavy disk writes (2026.9.9 → 2026.10.3)
- [#169930](https://github.com/openclaw/openclaw/issues/169930) [Bug]: Telegram partial streaming leaves a cut-off preview before the final answer as a separate message
- [#114234](https://github.com/openclaw/openclaw/issues/114234) [Bug]: Usage-cost refresh lock is never releasable after a restart that reuses the owner PID (containers), permanently freezing the cache
- [#170032](https://github.com/openclaw/openclaw/issues/170032) Node4 npm-global update blocked: unsafe publication-recovery permissions and retained lease database identity refusal
- [#99856](https://github.com/openclaw/openclaw/issues/99856) [Bug]: OpenAI provider fails with "Invalid value: 'custom'" – tool parameter incompatibility
- [#149611](https://github.com/openclaw/openclaw/issues/149611) memory sync (watch) fires embed storm after 2026.9.4 upgrade - 100+ embed calls, 38 failures, no backoff
- [#160483](https://github.com/openclaw/openclaw/issues/160483) Plugin update stalls, then fails when live SQLite state cannot stabilize for read-only snapshot (2026.9.6)
- [#120884](https://github.com/openclaw/openclaw/issues/120884) [Bug]: iOS — software keyboard is not exposed to VoiceOver in chat (text field itself is fine)
- [#72111](https://github.com/openclaw/openclaw/issues/72111) MCP streamable-http transport — spawned server process times out
- [#122090](https://github.com/openclaw/openclaw/issues/122090) [CI] Flaky test: server-kernel.test.ts times out (120s) on compact-small-1 shard
- [#93741](https://github.com/openclaw/openclaw/issues/93741) Allow the `agent` RPC to offload images to `imageModel` for text-only models (opt-in)
- [#145993](https://github.com/openclaw/openclaw/issues/145993) Codex prompt annotation fingerprints prepared content instead of persisted admission
- [#120377](https://github.com/openclaw/openclaw/issues/120377) openclaw skills install still fails with EPERM on Windows: fallback copy succeeds but guardedRename of .fs-safe-move-*.tmp → target fails under gateway watcher
- [#161816](https://github.com/openclaw/openclaw/issues/161816) Embedded run wedged after successful preflight compaction: run registry drops while owner promise stays pending (compaction death loop)
- [#168794](https://github.com/openclaw/openclaw/issues/168794) [Bug]: Codex relay turns >32 MiB decoded image requests into retryable 502 errors
- [#125792](https://github.com/openclaw/openclaw/issues/125792) Managed llama.cpp embeddings server starts with the model's full context (32k x 4 slots), reserving ~5.3 GB; not configurable and models.ini is regenerated on every start
- [#144515](https://github.com/openclaw/openclaw/issues/144515) [Bug]: Skill collection review has no per-agent opt-out — one broken agent's weekly review can only be disabled by disabling every agent's
- [#174618](https://github.com/openclaw/openclaw/issues/174618) Update failure: gateway-recovery-verification (2026.10.4)
- [#115394](https://github.com/openclaw/openclaw/issues/115394) Feature Request: Auto-configure all provider models with enable/disable toggle per model in Desktop UI
- [#159107](https://github.com/openclaw/openclaw/issues/159107) [Bug]: Code Mode crabbox exec fails with "Environment exec has no matching captured tool authority"
- [#157627](https://github.com/openclaw/openclaw/issues/157627) [Feature]: Plugin-supported cross-channel /fork with reversible in-place fallback
- [#122772](https://github.com/openclaw/openclaw/issues/122772) [Bug]: The agent run failed before producing a reply.
- [#119962](https://github.com/openclaw/openclaw/issues/119962) Workboard Start omits Operator Notes from the agent prompt
- [#139178](https://github.com/openclaw/openclaw/issues/139178) Manual compaction timeout leaves Gateway draining and blocks recovery (2026.9.1-beta.1)
- [#169229](https://github.com/openclaw/openclaw/issues/169229) [Bug]: Successful Codex final replaced by generic Telegram failure without diagnostic cause
- [#169927](https://github.com/openclaw/openclaw/issues/169927) [Bug]: Multi-agent rooms: an agent cc'd by @mention can't stay silent in message_tool_only mode; its silence is posted as a run failure
- [#147370](https://github.com/openclaw/openclaw/issues/147370) Provider-level baseUrl ignored on Gateway route: preferDiscoveredTransport inverts baseUrl precedence for configured models
- [#90312](https://github.com/openclaw/openclaw/issues/90312) [Feature]: What pronoun do we give an autonomous non-human agent?
- [#121443](https://github.com/openclaw/openclaw/issues/121443) OpenAI Responses builders coerce reasoningSummary: null to summary: "auto"
- [#174024](https://github.com/openclaw/openclaw/issues/174024) [Bug] message tool returns 'Tool message not found' for all channels - OpenClaw 2026.10.4
- [#129005](https://github.com/openclaw/openclaw/issues/129005) [Bug]: OpenRouter+Anthropic cache_control regressed (fixed once in #17473, broken again on 2026.7.2)
- [#122834](https://github.com/openclaw/openclaw/issues/122834) Windows gateway restart path unreliable after active-turn crash
- [#175897](https://github.com/openclaw/openclaw/issues/175897) Agent database stays degraded with `DataCloneError: #<Object> could not be cloned` after successful `doctor --fix` migration (v28 → v31)
- [#175865](https://github.com/openclaw/openclaw/issues/175865) Update failure: gateway-recovery-verification (2026.10.3)
- [#175831](https://github.com/openclaw/openclaw/issues/175831) [Bug]: node install writes dist/index.js (gateway entry), bypassing node-host launcher, so headless nodes never auto-update; Windows wrapper install fails spawn EINVAL
- [#162328](https://github.com/openclaw/openclaw/issues/162328) Plugin reload that replaces a tool-result-middleware plugin breaks every in-flight run ("Tool output unavailable due to post-processing error")
- [#120328](https://github.com/openclaw/openclaw/issues/120328) [BUG] Pro subagents (deepseek-v4-pro) sporadically return no output on complex tasks
- [#175365](https://github.com/openclaw/openclaw/issues/175365) [Bug]: isolatedSession heartbeat resumes the same Codex thread on every run, so context grows until auto-compaction
- [#173423](https://github.com/openclaw/openclaw/issues/173423) Compaction cannot split a processed protected turn when accumulated tool results exceed the retention budget
- [#175712](https://github.com/openclaw/openclaw/issues/175712) update: post-restart verification fails with `device identity required` after 2026.10.2 → 2026.10.4 (npm install)
- [#126171](https://github.com/openclaw/openclaw/issues/126171) [Bug]: Native Codex compaction leaves no SQLite replay boundary, causing repeated memory-flush loop
- [#173950](https://github.com/openclaw/openclaw/issues/173950) 2026.10.2: Telegram run report includes both root and main/ bootstrap files
- [#175582](https://github.com/openclaw/openclaw/issues/175582) Support multiple web search/fetch providers at once
- [#175369](https://github.com/openclaw/openclaw/issues/175369) Update failure: requested (2026.10.3)
- [#158214](https://github.com/openclaw/openclaw/issues/158214) [Feature]: Allow plugin channels (e.g. buzz) as keys in messages.queue.byChannel
- [#134955](https://github.com/openclaw/openclaw/issues/134955) Skill Workshop quarantine consumes the pending authoring cap
- [#175400](https://github.com/openclaw/openclaw/issues/175400) [Bug]: doctor --fix cannot apply audit-events-v2 state DB migration on a service-managed gateway (2026.6.11 -> 2026.9.33 blocked)
- [#175373](https://github.com/openclaw/openclaw/issues/175373) [Bug]: doctor --fix silent for ~18 min: btrfs NOCOW repair copies the whole agent store dir and spawns getfacl/setfacl per file (2026.10.4)
- [#175304](https://github.com/openclaw/openclaw/issues/175304) session_status / Control UI: "Context: 793k/1M (76%)" is a stale snapshot while the real prompt is ~1.5k tokens
- [#165735](https://github.com/openclaw/openclaw/issues/165735) [Bug]: OpenRouter: omitting strict: false produces invalid browser arguments
- [#174879](https://github.com/openclaw/openclaw/issues/174879) [Bug]: Android Talk ends agent runs after 30 seconds and never speaks slower answers
- [#175270](https://github.com/openclaw/openclaw/issues/175270) Control UI: "Applying chat settings" stuck forever after a lost ack (queue item stays in waiting-model)
- [#174656](https://github.com/openclaw/openclaw/issues/174656) [Bug]: Goal Resume busy rejection becomes persistent unconfirmed recovery and blocks other controls
- [#164964](https://github.com/openclaw/openclaw/issues/164964) [Bug]: Crabbox: a configured settings.binary is silently replaced by a managed copy when its --version probe is not "supported"; the reason is never logged
- [#175053](https://github.com/openclaw/openclaw/issues/175053) [Bug]: Immutable update preparation re-clones the full repository every run under the generic step timeout
- [#175051](https://github.com/openclaw/openclaw/issues/175051) [Bug]: Immutable update preparation always fails: candidate build skips .d.ts while verifyPluginSdkExports requires dist/plugin-sdk/core.d.ts
- [#175061](https://github.com/openclaw/openclaw/issues/175061) [Bug]: Main systemEvent auto-delivery passes user-prefixed Weixin recipient to adapter, failing context lookup and send
- [#168896](https://github.com/openclaw/openclaw/issues/168896) [Docs Bug]: system event session-key reference promises a fallback for rejected targets
- [#175915](https://github.com/openclaw/openclaw/issues/175915) [Bug]: Chat does not recover a transient session subscription change
- [#175910](https://github.com/openclaw/openclaw/issues/175910) fix: publication tool is missing from fresh managed conversations
- [#175894](https://github.com/openclaw/openclaw/issues/175894) fix: respect automation read access in session details
- [#144972](https://github.com/openclaw/openclaw/issues/144972) [Bug]: `openclaw channels login` rewrites openclaw.json and enables the bundled `codex` plugin, which then errors on every agent run
- [#175891](https://github.com/openclaw/openclaw/issues/175891) Session archival state is unrepresentable in the CLI and indistinguishable from a default filter in the tool
- [#175851](https://github.com/openclaw/openclaw/issues/175851) [Bug]: a sub-agent loses a tool its own config allows when the requester's allowlist lacks it ("No callable tools remain", 2026.9.8)
- [#175821](https://github.com/openclaw/openclaw/issues/175821) [Bug]: claude-cli manual /compact runs in a separate process, so the warm live session never adopts the compaction (status says ok, context unchanged)
- [#175782](https://github.com/openclaw/openclaw/issues/175782) [Feature]: Document running OpenClaw on tcr or a similar local subscription pool
- [#175710](https://github.com/openclaw/openclaw/issues/175710) Bug: refresh_base fails when a known partial-clone base lacks file contents
- [#175748](https://github.com/openclaw/openclaw/issues/175748) [Bug]: Read tool wrapper throws TypeError when a base tool omits details
- [#175746](https://github.com/openclaw/openclaw/issues/175746) [Bug]: Worker placement reuses stale parent model facts and skips change detection before dispatch
- [#174504](https://github.com/openclaw/openclaw/issues/174504) [Bug]: Stale gateway process cleanup silently swallows internal failures and returns an empty list
- [#171959](https://github.com/openclaw/openclaw/issues/171959) [Bug]: Git backup restore leaks its private staging directory when the SQLite open fails
- [#173252](https://github.com/openclaw/openclaw/issues/173252) Matrix message read: before/after are described as ids but used as pagination tokens; an event id gets a raw HTTP 400
- [#175618](https://github.com/openclaw/openclaw/issues/175618) Move Talk model-family Settings policy to its provider
- [#175503](https://github.com/openclaw/openclaw/issues/175503) Workspace synchronization conflicts on generated test caches and build locks
- [#131028](https://github.com/openclaw/openclaw/issues/131028) [Bug]: Groq reasoning models ignore /think levels — resolveGroqReasoningCompatPatch is never wired into the runtime
- [#175545](https://github.com/openclaw/openclaw/issues/175545) Move Session Sources settings declarations to their plugins
- [#175519](https://github.com/openclaw/openclaw/issues/175519) AutoReview is cancelled by Codex tool timeouts before the review finishes
- [#175516](https://github.com/openclaw/openclaw/issues/175516) Add `@sprintcx/openclaw-cliq` (Zoho Cliq) as an official external channel
- [#175440](https://github.com/openclaw/openclaw/issues/175440) fix: guest widget controls stay disabled when bootstrap requires operator read
- [#175445](https://github.com/openclaw/openclaw/issues/175445) fix: nested widget results show duplicate live previews
- [#175303](https://github.com/openclaw/openclaw/issues/175303) [Bug]: Typing keepalive loop can surface an unhandled rejection from onTick for plugin callers
- [#168253](https://github.com/openclaw/openclaw/issues/168253) tts: auto TTS drops the voice reply when tts.maxTextLength is below the /tts limit prefs limit
- [#175446](https://github.com/openclaw/openclaw/issues/175446) Bug: Windows: GitHub PAT verifies successfully but command execution rejects credential
- [#175396](https://github.com/openclaw/openclaw/issues/175396) dispatch_action rejects all non-string tool arguments (array / boolean / number)
- [#175382](https://github.com/openclaw/openclaw/issues/175382) [Bug]: sessions_spawn with ACP runtime fails with Unknown agent id "claude" while /acp spawn succeeds
- [#175245](https://github.com/openclaw/openclaw/issues/175245) Doctor and session recover loop on a retained source deleted by `sessions cleanup --enforce`; post-session plugin migrations never run
- [#175356](https://github.com/openclaw/openclaw/issues/175356) [Bug]: heartbeat-wake wait in cron has no deadline; run stays running until Gateway restart
- [#174779](https://github.com/openclaw/openclaw/issues/174779) Hallucinated/undeclared tool call persisted in session history permanently breaks the primary model (GigaChat 400 → silent fallback on every turn)
- [#175305](https://github.com/openclaw/openclaw/issues/175305) [Bug]: Windows Gateway startup takes 5-14 min: channel-plugin dependency tree hard-linked 4x every boot, never reused, and materialized by read-only status --deep
- [#174909](https://github.com/openclaw/openclaw/issues/174909) DSML tool-call recovery never runs for DeepSeek models routed through OpenRouter
- [#175282](https://github.com/openclaw/openclaw/issues/175282) [Bug]: workboard_block rejects dispatcher-generated worker run ids (149 > 120 chars)
- [#175286](https://github.com/openclaw/openclaw/issues/175286) Update failure: plugin-target-unavailable (2026.9.4)
- [#166196](https://github.com/openclaw/openclaw/issues/166196) [Bug]: A wedged computer driver blocks every cloud-worker teardown (idle reclaim, Stop and `force`) while the summary still reports the desktop as usable
- [#169095](https://github.com/openclaw/openclaw/issues/169095) [Bug]: node-worker-launch-wire e2e fails on main: transcript persistence rejected with SessionActorStaleVersionError
- [#175214](https://github.com/openclaw/openclaw/issues/175214) [Bug]: WhatsApp quote-replies never set `is_reply_target`, so the replied-to message is not marked or pinned as `[reply target]`
- [#174308](https://github.com/openclaw/openclaw/issues/174308) [Bug]: Recurring automation auto-disable notice never reaches the configured failure-alert route (webhook/announce); it only rides a model turn, so a failing provider silences it
- [#166351](https://github.com/openclaw/openclaw/issues/166351) [Bug]: sessions.send runs an undispatched session on the Gateway after sessions.dispatch to an isolation=container node was refused
- [#175140](https://github.com/openclaw/openclaw/issues/175140) [Bug]: WebChat folds a turn's final answer into the tool-call row instead of rendering a clean message (2026.10.4, interleaved turn shape)
- [#170143](https://github.com/openclaw/openclaw/issues/170143) [Bug]: Crabbox warm-image allocation keeps forking an 'available' image whose provider checkpoint is gone (never verified, every create fails)
- [#174354](https://github.com/openclaw/openclaw/issues/174354) [Bug]: streamed marker-free replies re-parse the whole reply per delta (quadratic CPU in the reasoning and final-tag sanitizers)
- [#174975](https://github.com/openclaw/openclaw/issues/174975) [Bug]: Conversation readers cannot open saved inline widgets

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 254,697 · **Open issues:** 49,778 · **Last push:** <1h ago

On October 18, 2026, there were no new releases for Hermes Agent, but a notable merged pull request (#140376) fixed an issue with maintaining TLS functionality after an install-environment rotation. Among the new issues reported, the most significant is #140559, which raises concerns about skills installed mid-session only becoming active after a reset, potentially affecting user experience. Other bugs reported include a threading issue with Discord native slash commands (#140720) and problems with runtime downgrade behavior (#140418). These developments highlight ongoing challenges in the system that may require timely attention to enhance stability and usability.

#### ✅ Merged PRs
- [#140376](https://github.com/NousResearch/hermes-agent/pull/140376) fix(ssl): keep TLS working after an install-environment rotation (salvage #137341)

#### 🐛 New Issues
- [#140559](https://github.com/NousResearch/hermes-agent/issues/140559) Skills installed mid-session are only active after /reset `type/bug` `comp/agent` `tool/skills` `P2` 💬3
- [#140720](https://github.com/NousResearch/hermes-agent/issues/140720) [Bug]: Discord native slash kickoffs (/goal, /loop, /heartbeat) never auto-thread — the loop stays channel-scoped in the shared channel `type/bug` `comp/plugins` `tool/file` `platform/discord` 💬2
- [#140418](https://github.com/NousResearch/hermes-agent/issues/140418) [Bug]: runtime downgrade stop exits 0, but the shipped launchd plist parks exit 0 — a confirmed downgrade leaves the gateway down until someone notices `type/bug` `comp/gateway` `P2` `os/macos` 💬1
- [#140803](https://github.com/NousResearch/hermes-agent/issues/140803) [Bug]: messaging /kanban and /curator with a quote in the argument crash the handler (uncaught shlex ValueError) — session-side siblings were fixed, the messaging side was not 💬1
- [#140398](https://github.com/NousResearch/hermes-agent/issues/140398) On a local session, /voice tts turns on speech nothing can play `type/bug` `comp/gateway` `tool/tts` `P2` 💬1
- [#140403](https://github.com/NousResearch/hermes-agent/issues/140403) [Bug] Project skill stays quarantined after its content is fixed until every long-lived process restarts `type/bug` `comp/agent` `tool/skills` `P2` 💬1
- [#140786](https://github.com/NousResearch/hermes-agent/issues/140786) Merged consecutive user turn keeps the previous turn's timestamp after the persist override rewrites its content 💬1
- [#140719](https://github.com/NousResearch/hermes-agent/issues/140719) Gateway fixes (#134889), package 10: the gateway process, clients that fall behind, credentials and settings, Desktop session lists and history, and messaging order `type/bug` `comp/cli` `comp/gateway` `comp/acp` 💬1
- [#140718](https://github.com/NousResearch/hermes-agent/issues/140718) Async delegation completions can be silently stranded at delivery_state=pending, attempts=0 while the owner process is alive (orphan sweep skips live owners) `type/bug` `comp/gateway` `tool/delegate` `P2` 💬1
- [#140702](https://github.com/NousResearch/hermes-agent/issues/140702) Desktop App: Model selector uses stale catalog cache — new Nous Portal models not visible `type/bug` `provider/nous` `P2` `comp/desktop` 💬1
- [#140759](https://github.com/NousResearch/hermes-agent/issues/140759) Add a size or high-visibility control for the computer-use agent cursor `type/feature` `area/config` `P3` `comp/desktop`
- [#140805](https://github.com/NousResearch/hermes-agent/issues/140805) Desktop (Bots): opening a group conversation after an app restart forks the gateway room instead of opening it
- [#140744](https://github.com/NousResearch/hermes-agent/issues/140744) Multiplexed gateway: deleting or pruning a session in a secondary profile makes the launch profile refuse that id for good `type/bug` `comp/gateway` `P2` `area/sessions`
- [#140798](https://github.com/NousResearch/hermes-agent/issues/140798) Bot Mode: deliberate archive of a LIVE canonical Bot Chat is laundered into a recoverable end_reason and resurrects on reopen (#92687 follow-up)
- [#140751](https://github.com/NousResearch/hermes-agent/issues/140751) fix(opencode-go): support new service-account keys via current inference endpoint `type/bug` `comp/plugins` `area/auth` `area/config`
- [#140788](https://github.com/NousResearch/hermes-agent/issues/140788) Agent can't complete card payments in browser: card typing is forbidden and browser_vault_fill can't reach hosted card iframes or accept most card sources
- [#140794](https://github.com/NousResearch/hermes-agent/issues/140794) [Feature]: Lightpanda-native secure vault filling with reliable CDP session binding
- [#140747](https://github.com/NousResearch/hermes-agent/issues/140747) Email adapter: accept auth=pass for same-domain mail delivered by the recipient’s own MTA `type/security` `comp/plugins` `platform/email` `area/auth`
- [#140746](https://github.com/NousResearch/hermes-agent/issues/140746) [Feature]: Desktop sidebar — the sessions header + should always be New project `type/feature` `tool/file` `P3` `comp/desktop`
- [#140791](https://github.com/NousResearch/hermes-agent/issues/140791) [Bug]: Desktop Profiles screen 403s `profile_scope_mismatch` for every profile but the active one, and cannot delete/rename any profile (multiplex host, main @ e6f57427)
- [#140738](https://github.com/NousResearch/hermes-agent/issues/140738) [Bug]: gateway turn cleanup drops the session's write baselines; write_file refuses the agent's own file next turn `type/bug` `comp/agent` `comp/tools` `tool/file`
- [#140736](https://github.com/NousResearch/hermes-agent/issues/140736) [Bug]: /model can confirm Codex models the account cannot use (benches + account-listing known-absent are ignored) `type/bug` `comp/cli` `provider/openai` `area/auth`
- [#140737](https://github.com/NousResearch/hermes-agent/issues/140737) [Bug]: rate-limit failure copy discards the KNOWN cooldown deadline in the 60-120s band (prints 'Wait a minute' instead of the reset time) `type/bug` `comp/agent` `provider/openai` `P2`
- [#140731](https://github.com/NousResearch/hermes-agent/issues/140731) A caller-named API session id is refused for good once housekeeping prunes it `type/bug` `P2` `area/sessions`
- [#140729](https://github.com/NousResearch/hermes-agent/issues/140729) [Bug]: hermes update fails with Refusing to move this install `type/bug` `comp/cli` `P2` `area/sessions`
- [#140704](https://github.com/NousResearch/hermes-agent/issues/140704) [Bug]: command floors read heredoc bodies as shell: a quote in the body hides the next command from hardline and approvals.deny (rm -rf / approved under yolo) `type/security` `comp/tools` `tool/terminal` `P3`
- [#140726](https://github.com/NousResearch/hermes-agent/issues/140726) [Bug]: Kanban worker-log pane never auto-refreshes — logKey is invalidated nowhere and its refetchInterval is suspended when the window is unfocused `type/bug` `P2` `comp/desktop`
- [#140724](https://github.com/NousResearch/hermes-agent/issues/140724) [Feature]: Agent-callable forced MCP tool rediscovery for a configured server `type/feature` `tool/mcp` `P3` `area/profiles`
- [#140722](https://github.com/NousResearch/hermes-agent/issues/140722) [Bug]: Kanban worktree dispatch double-anchors the task's own worktree when the linked-worktree probe transiently fails `type/bug` `comp/cli` `P2`
- [#140716](https://github.com/NousResearch/hermes-agent/issues/140716) security/godmode: refusal scorer misses curly apostrophe (U+2019) — auto_jailbreak reports "already complies" and never tests a strategy `type/bug` `tool/file` `tool/skills` `P3`

#### 🔒 Closed Issues
- [#137255](https://github.com/NousResearch/hermes-agent/issues/137255) [Bug]: TLS clients die after an install-environment rotation — certifi's CA bundle path stays in the deleted directory

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 94,008 · **Open issues:** 8,979 · **Last push:** <1h ago

On October 18, 2026, there were no new releases for vLLM; however, a range of significant updates were merged, including bug fixes focused on improving stability and performance. Key fixes addressed issues such as race conditions in multimodal drift recovery and macOS build compatibility for the Rust frontend. Important enhancements include a performance boost in the parser for streamlining Qwen3 tool argument values, which reduced processing time dramatically, and a revert of a previous documentation addition regarding train-inference consistency. Additionally, a major new issue was reported, highlighting a fatal ValueError caused by the `/pause` command clearing the SHM multimodal cache, which could impact queued requests.

#### ✅ Merged PRs
- [#62081](https://github.com/vllm-project/vllm/pull/62081) [Bugfix][EPLB] Wait for pending expert buffer copies before NIXL READs
- [#61960](https://github.com/vllm-project/vllm/pull/61960) [CI][ROCm][Bugfix] DeepSeek V4.1: don't pass expert intermediate padding to AITER
- [#62210](https://github.com/vllm-project/vllm/pull/62210) [NIXL] Drop unreachable producer-side notif counting in push mode
- [#62177](https://github.com/vllm-project/vllm/pull/62177) [Bugfix][Rust Frontend] Fix macOS build: read inherited listener family from its address
- [#61118](https://github.com/vllm-project/vllm/pull/61118) [Bugfix] Enable inductor batch-invariant mode under VLLM_BATCH_INVARIANT
- [#62027](https://github.com/vllm-project/vllm/pull/62027) [Perf][Parser] Stream Qwen3 tool argument values incrementally (12 KB call: 2.1 s to 11 ms)
- [#59888](https://github.com/vllm-project/vllm/pull/59888) [Bugfix][Benchmarks] Name the real cause when the /tokenize alignment probe fails
- [#62041](https://github.com/vllm-project/vllm/pull/62041) [MRV2] Collect KV transfer results before the drafter runs
- [#46399](https://github.com/vllm-project/vllm/pull/46399) [Bugfix][Spec Decode] Disable dynamic speculative decoding for fixed-K proposers instead of crashing
- [#61933](https://github.com/vllm-project/vllm/pull/61933) [Rust Frontend] Validate bad_words limits during request lowering
- [#61692](https://github.com/vllm-project/vllm/pull/61692) [Benchmark] Add per-case kernel profiles to vllm bench forward
- [#57320](https://github.com/vllm-project/vllm/pull/57320) [Feature] Skip MLA weight absorption when weights are pre-processed
- [#62186](https://github.com/vllm-project/vllm/pull/62186) Revert "[Docs] Add train-inference consistency agent skill" (#61551)
- [#61551](https://github.com/vllm-project/vllm/pull/61551) [Docs] Add train-inference consistency agent skill
- [#62179](https://github.com/vllm-project/vllm/pull/62179) [Doc] Sync DeepSeek-V4.1-Flash recipe with vllm-project/recipes#1136, #1137
- [#61979](https://github.com/vllm-project/vllm/pull/61979) [Feature][LoRA][MoE] Expert LoRA for FlashInfer TRTLLM MXFP4 experts
- [#61743](https://github.com/vllm-project/vllm/pull/61743) [XPU] Fix Event init failure w/ external
- [#61365](https://github.com/vllm-project/vllm/pull/61365) [Bugfix] Fix Gemma 4 encoder CUDA graph capture OOM at startup
- [#61989](https://github.com/vllm-project/vllm/pull/61989) [Perf][Bugfix] Prefer MNNVL for single-node FlashInfer allreduce again
- [#58857](https://github.com/vllm-project/vllm/pull/58857) [Model] DeepSeek-V4/V4.1 VL: stream language-model weights instead of sorting the checkpoint
- [#61302](https://github.com/vllm-project/vllm/pull/61302) [Doc] Host model recipes in recipes/
- [#58778](https://github.com/vllm-project/vllm/pull/58778) [Bugfix][Core] Keep resumable sessions that stop while preempted
- [#61278](https://github.com/vllm-project/vllm/pull/61278) [ROCm][Perf] Use AITER tuned configs to select a4w4 gemm kernel instead of env var
- [#62087](https://github.com/vllm-project/vllm/pull/62087) [CI][Bugfix] Ignore AMD CI webhook no-op builds in /amd-ci run and retry
- [#62132](https://github.com/vllm-project/vllm/pull/62132) [Kernel]Add norm fused kernel for Step-5 Preview and Muse Spark Open
- [#47630](https://github.com/vllm-project/vllm/pull/47630) [Bugfix][OpenAI] Respect allowed_token_ids in beam search
- [#62114](https://github.com/vllm-project/vllm/pull/62114) [Bugfix][Frontend] Preserve token IDs in completion derender responses
- [#61174](https://github.com/vllm-project/vllm/pull/61174) [Bugfix][Spec Decode] Clear stale shared block-table rows
- [#61455](https://github.com/vllm-project/vllm/pull/61455) [Core][Spec Decode] Replace EAGLE group heuristics with explicit draft-layer tags
- [#61944](https://github.com/vllm-project/vllm/pull/61944) [Bugfix][Kernel] hadacore: don't load past the input on a partial last warp
- [#61809](https://github.com/vllm-project/vllm/pull/61809) [Bugfix] Validate draft-token capacity in forward benchmark
- [#61947](https://github.com/vllm-project/vllm/pull/61947) [Bugfix][Frontend] Preserve Cohere and Anthropic streaming errors
- [#62069](https://github.com/vllm-project/vllm/pull/62069) [Attention] Add CuTe DSL backend selection for MLA context prefill
- [#61876](https://github.com/vllm-project/vllm/pull/61876) [Bugfix][Frontend] Detokenize echoed prompts after truncation
- [#62126](https://github.com/vllm-project/vllm/pull/62126) [Kernel] Add FP32 router GEMM support for Step-5 Preview and Muse Spark Open
- [#60544](https://github.com/vllm-project/vllm/pull/60544) [Feature][MoRIIO] Support hybrid WRITE transfers with DSpark
- [#61996](https://github.com/vllm-project/vllm/pull/61996) [Perf][Sampler] Speed up the small-batch split top-p pipeline
- [#61992](https://github.com/vllm-project/vllm/pull/61992) [Bugfix] Remove extra args from CPU's compute slot mapping kernel
- [#61805](https://github.com/vllm-project/vllm/pull/61805) [CPU] Keep the hybrid block size across the engine core's config rerun
- [#62046](https://github.com/vllm-project/vllm/pull/62046) [Bugfix][Sampler] Carry the boundary tie count across blocks in the split top-p mask kernel
- [#61674](https://github.com/vllm-project/vllm/pull/61674) [Bugfix][KV Offload] Allow explicit SimpleCPUOffload block counts
- [#55671](https://github.com/vllm-project/vllm/pull/55671) [FlashInfer] Migrate autotune warmup to flashinfer.autotune_v2 managed cache
- [#61347](https://github.com/vllm-project/vllm/pull/61347) [RL][Frontend] Return weight-version spans on OpenAI completions and chat
- [#60934](https://github.com/vllm-project/vllm/pull/60934) [RL] Support per-parameter source layouts for NCCL M2N
- [#61883](https://github.com/vllm-project/vllm/pull/61883) [Chore] Use upstream Transformers InklingProcessor
- [#52968](https://github.com/vllm-project/vllm/pull/52968) [ROCm] attn res + sigmoid_mul + conv fusions

#### 🐛 New Issues
- [#62123](https://github.com/vllm-project/vllm/issues/62123) [Bug]: /pause clears SHM multimodal cache, can cause fatal ValueError for queued requests `bug` `multi-modality` 💬2
- [#62187](https://github.com/vllm-project/vllm/issues/62187) [Doc]: Out-of-tree quantization plugin guide uses the removed FusedMoE class and an outdated MoE method API `documentation` `quantization` 💬2
- [#62149](https://github.com/vllm-project/vllm/issues/62149) [Bug]: Qwen3.6-35B-A3B NVFP4 on Jetson AGX Thor (sm_110): illegal memory access in GDN `_warmup_prefill_kernels` on cold-cache boots (3 of 4); warm caches 0 of 3 `quantization` 💬2
- [#62220](https://github.com/vllm-project/vllm/issues/62220) [Bug]: DeepSeek V4.1 rejects reasoning_effort "medium" and "minimal" with 400 `tool-calling` `deepseek` `DSv4.1` 💬1
- [#62136](https://github.com/vllm-project/vllm/issues/62136) [Bug]: quantization="mxfp8" + moe_backend="humming" crashes weight conversion with a bare KeyError: 'weight_scale' — the MXFP8 oracle selects humming, then a third-party schema converter raises `bug` `quantization` 💬1
- [#62175](https://github.com/vllm-project/vllm/issues/62175) [Roadmap] Q4 2026 OPD Teacher Serving in vLLM 💬1
- [#62135](https://github.com/vllm-project/vllm/issues/62135) [Bug]: moe_backend="cutlass" with online FP8 raises a reason-free "vLLM CUTLASS FP8 MoE backend is disabled for this configuration." — every sibling backend reports the actual rejection reason via _make_log_unsupported `bug` `nvidia` `quantization` 💬1
- [#62121](https://github.com/vllm-project/vllm/issues/62121) [Bug]: Race condition in multimodal drift recovery causes HTTP 500 (AssertionError: Expected a cached item) `bug` `multi-modality` 💬1
- [#62143](https://github.com/vllm-project/vllm/issues/62143) [Bug]: Model Runner V2 hangs during speculative decoding warmup with pipeline parallelism `bug` `speculative-decoding` 💬1
- [#62118](https://github.com/vllm-project/vllm/issues/62118) [Bug]: Qwen3.8-Flash-Next (qwen4_exp) deadlocks on RTX 6000D (SM120) — hangs in JIT warmup and at first real request (GDN/hyperconnection kernels); Qwen3.8-27B works fine on the same box `bug` 💬1
- [#62217](https://github.com/vllm-project/vllm/issues/62217) [Bug][HiSparse]: Two admitted async KV loads stall the scheduler on host blocks `scheduler`
- [#62225](https://github.com/vllm-project/vllm/issues/62225) [Bug]: CPU backend — non-LoRA requests batched with LoRA requests get the adapter applied (silent wrong output) `bug` `cpu`
- [#62216](https://github.com/vllm-project/vllm/issues/62216) [Bug]: LMCache connector with use_native crashes the worker: no get_kv_events `kv-connector`
- [#62153](https://github.com/vllm-project/vllm/issues/62153) [Bug]: Mamba2 hybrid models crash once the prompt is longer than block_size (regression from #57329) `quantization`
- [#62156](https://github.com/vllm-project/vllm/issues/62156) [Bug]: sharded_state can't round-trip models with attention/KV-cache scale params (Missing keys ...attn.q_scale, k_scale, v_scale, prob_scale)
- [#62122](https://github.com/vllm-project/vllm/issues/62122) [Bug]: prompt_logprobs=0 bypasses fast-prefill guard, causing V1 crash or V2 silent errors `bug`
- [#62150](https://github.com/vllm-project/vllm/issues/62150) [RFC]: PD disaggregation + RL lifecycle (pause, sleep, abort) tracking `RFC` `kv-connector`
- [#62145](https://github.com/vllm-project/vllm/issues/62145) [RFC]: Request-scoped auxiliary decision heads on a shared generative backbone
- [#62144](https://github.com/vllm-project/vllm/issues/62144) [Bug]: NixlConnector P/D: pulls and deferred notifications against TTL-evicted remote agents block 60s per call in libfabric connect(), starving DP engines to death
- [#62134](https://github.com/vllm-project/vllm/issues/62134) [Bug]: speculative_config.method="ngram_gpu" with compilation_config.mode="NONE" kills engine init — ValueError: No compilation mode is set. `bug`
- [#62130](https://github.com/vllm-project/vllm/issues/62130) [Spec Decode] Compose grammar-constrained sampling with EAGLE speculative decoding `structured-output` `speculative-decoding`
- [#62124](https://github.com/vllm-project/vllm/issues/62124) [Bug]: FP8 MoE per-tensor + CUDA graphs causes cross-request contamination via padding row amax `bug` `quantization`
- [#62116](https://github.com/vllm-project/vllm/issues/62116) [Bug]: GDN chunk/prefill path overflows fp16 with a large fp32 SSM state (chunk-path follow-up to #54146)

#### 🔒 Closed Issues
- [#42911](https://github.com/vllm-project/vllm/issues/42911) [Bug]: vllm0.19.1 with llmcache with qwen3.6-27B-FP8 failed
- [#43457](https://github.com/vllm-project/vllm/issues/43457) [deepseek_v4 / DeepGEMM] paged_mqa_logits kernel asserts on next_n=3 → num_speculative_tokens capped at 1 on Hopper
- [#62002](https://github.com/vllm-project/vllm/issues/62002) [CI Failure]: B200 V1 Attention shard 1/6 — test_mla_backends.py::test_backend_correctness, CUTLASS_MLA and TOKENSPEED_MLA (glm dims, fp8 KV, TP4, mixed_small)
- [#45399](https://github.com/vllm-project/vllm/issues/45399) [Usage]: Inconsistent Embedding Outputs for Qwen3-Embedding-0.6B Across vLLM Versions – How to Fix/Pin Unique Vector Values?
- [#61045](https://github.com/vllm-project/vllm/issues/61045) [Bug]: Gemma 4 encoder CUDA graph capture allocates `max_frames_per_batch` full-image rows per budget (38.5 GiB with `--max-num-batched-tokens 4096`) and OOMs
- [#55746](https://github.com/vllm-project/vllm/issues/55746) [Bug]: bench serve drops custom headers when stopping the profiler
- [#58776](https://github.com/vllm-project/vllm/issues/58776) [Bug]: Resumable session that stops while preempted is dropped from every queue, and folds at num_computed_tokens=0
- [#61766](https://github.com/vllm-project/vllm/issues/61766) [Bug]: bench forward verify cases exceeding draft capacity trigger CUDA illegal memory access
- [#61997](https://github.com/vllm-project/vllm/issues/61997) [Bug]: Split top-p mask kernel restarts its tie count every 8192 entries and over-keeps boundary ties

### SGLang (`sgl-project/sglang`)

**Stars:** 37,256 · **Open issues:** 5,935 · **Last push:** <1h ago

On October 18, 2026, there were no new releases for SGLang, but several significant pull requests were merged, including a refactor of the TCPCG to consolidate attention eager regions and isolate the Inkling policy, as well as performance improvements in the DSv4.1 that reduce BCG metadata memory usage. Noteworthy fixes included addressing issues in the diffusion model related to stabilizing FLUX.3 serving and properly revalidating FP8/NVFP4 fast paths after attaching LoRA. On the issue front, a critical bug was reported where the `pause_generation(in_place)` followed by `pause_generation(abort)` caused the server to hang until intervention was necessary, highlighting ongoing challenges in managing state during model execution.

#### ✅ Merged PRs
- [#42288](https://github.com/sgl-project/sglang/pull/42288) [Refactor] TCPCG: Consolidate attention eager regions and isolate Inkling policy (4/9)
- [#44920](https://github.com/sgl-project/sglang/pull/44920) [Perf] DSv4.1: Reduce BCG metadata memory
- [#44934](https://github.com/sgl-project/sglang/pull/44934) [Fix] [AMD] deepseek-v4.1: Reject attention DP with encoder SWA bounded replay on ROCm
- [#42901](https://github.com/sgl-project/sglang/pull/42901) [Perf] deepseek-v4.1: Skip wasted layer 20 work on earlier prompt tokens under decoder bounded replay
- [#41745](https://github.com/sgl-project/sglang/pull/41745) [Refactor] nvfp4_online: Use explicit FlashInfer 4over6 config
- [#41343](https://github.com/sgl-project/sglang/pull/41343) [Feat] unified_cache: Support hybrid SWA + Mamba models in the Mooncake direct linker
- [#44114](https://github.com/sgl-project/sglang/pull/44114) [Perf] [NVIDIA] qsa: Keep sparse decode scratch in FP8 for FP8 KV pools
- [#44634](https://github.com/sgl-project/sglang/pull/44634) [Feat] diffusion: Add opt-in pi0.5 completion-boundary action batching
- [#40171](https://github.com/sgl-project/sglang/pull/40171) [Fix] diffusion/lora: revalidate FLUX.2 FP8/NVFP4 fast paths after LoRA attach
- [#43732](https://github.com/sgl-project/sglang/pull/43732) [Fix] diffusion: keep ZMQ ingress sockets on their configured port
- [#44493](https://github.com/sgl-project/sglang/pull/44493) [Fix] diffusion: stabilize FLUX.3 serving and reuse static conditioning
- [#44662](https://github.com/sgl-project/sglang/pull/44662) [Feat] diffusion: Per-task prompt enhancer config and the FLUX.3 Klein upsampler protocol
- [#44845](https://github.com/sgl-project/sglang/pull/44845) [Refactor] multimodal: Replace padding strategies with helpers
- [#43387](https://github.com/sgl-project/sglang/pull/43387) [Fix] unified_cache: Prevent misaligned Mamba checkpoints after speculative truncation
- [#44097](https://github.com/sgl-project/sglang/pull/44097) [Fix] unified-memory: Avoid gather scratch during Mamba and Conv compaction
- [#39294](https://github.com/sgl-project/sglang/pull/39294) [Fix] unified-memory: Bound joint reclaim and preserve cached prefixes
- [#43817](https://github.com/sgl-project/sglang/pull/43817) [Fix] hicache: Key MLA Mamba state per TP rank in the HF3FS backend
- [#44220](https://github.com/sgl-project/sglang/pull/44220) [Fix] cuda_graph: Wait for in-flight layer-wise cache loads before prefill graph replay
- [#43823](https://github.com/sgl-project/sglang/pull/43823) [Feat] VSA-H3: support sm80 (A100) with a raw-pointer Triton load path
- [#44251](https://github.com/sgl-project/sglang/pull/44251) [Perf] distributed: Skip the DLPack re-wrap of custom all-reduce results
- [#44881](https://github.com/sgl-project/sglang/pull/44881) [CI] pr-test-npu: Temporarily disable recommend-tests-from-coverage job
- [#44877](https://github.com/sgl-project/sglang/pull/44877) [Refactor] diffusion RL: Rollout controller as a scheduler-step plugin instead of mixins (sglang-miles port)
- [#44838](https://github.com/sgl-project/sglang/pull/44838) [Perf] deepseek_v4: fold the MegaAttention query layout into wq_b for block-FP8-as-MXFP8 checkpoints
- [#44376](https://github.com/sgl-project/sglang/pull/44376) [Fix] diffusion: Log LoRA merge decisions only on first evaluation
- [#44644](https://github.com/sgl-project/sglang/pull/44644) [Perf] kernels: Enter a JIT kernel's device guard only when the device differs
- [#44800](https://github.com/sgl-project/sglang/pull/44800) [Fix] hicache: Order write-back host copies after the forward that produced the KV
- [#44767](https://github.com/sgl-project/sglang/pull/44767) [Feat] rust-server: Serve /v1/tokenize and /v1/detokenize from the Rust frontend
- [#44850](https://github.com/sgl-project/sglang/pull/44850) [Fix] deepseek-v4.1: Serve prompt-logprob requests under decoder SWA bounded replay
- [#40516](https://github.com/sgl-project/sglang/pull/40516) [Fix] [NPU] qwen: Fix shared-expert routing with Ascend FuseEP
- [#44857](https://github.com/sgl-project/sglang/pull/44857) [Fix] deepseek-v4.1: Keep the cached KV of folded encoder replay rows
- [#44842](https://github.com/sgl-project/sglang/pull/44842) [Perf] deepseek_v4: run FlashInfer autotune for block-FP8 models served as MXFP8
- [#42787](https://github.com/sgl-project/sglang/pull/42787) [Refactor] dsv41: Shard Engram tables on hash-column boundaries
- [#44837](https://github.com/sgl-project/sglang/pull/44837) [Perf] deepseek_v4: fuse block-FP8 shared experts into MegaMoE for any 32-aligned block size
- [#44829](https://github.com/sgl-project/sglang/pull/44829) [Refactor] rust-server: name the literal arguments on the tokenize/detokenize paths
- [#44645](https://github.com/sgl-project/sglang/pull/44645) [CI] jit-kernel: Honor continue_on_error on scheduled runs
- [#44602](https://github.com/sgl-project/sglang/pull/44602) [Test] attention: Fix replicated attention test missing full_attention_interval
- [#44847](https://github.com/sgl-project/sglang/pull/44847) [Fix] megamoe: Support EPLB rebalance on SM100
- [#44849](https://github.com/sgl-project/sglang/pull/44849) [Feat] server-args: Add --enable-hicache alias for --enable-hierarchical-cache
- [#44597](https://github.com/sgl-project/sglang/pull/44597) [CI] glm5.2: Keep EOS in HiSparse needle test output
- [#44848](https://github.com/sgl-project/sglang/pull/44848) [Doc] cookbook: Allow PD with DSpark for DeepSeek-V4.1
- [#44720](https://github.com/sgl-project/sglang/pull/44720) [Fix] gateway: Drop unused npyz dev-dependency to unbreak builds after zip yank
- [#44790](https://github.com/sgl-project/sglang/pull/44790) [Doc] hicache: Explain HiCache host pool sizing with a storage backend
- [#44843](https://github.com/sgl-project/sglang/pull/44843) [Fix] unified_cache: Resize test allocator before allocating backed pages
- [#44403](https://github.com/sgl-project/sglang/pull/44403) [Perf] DSv4.1: Enable decoder bounded replay by default
- [#40131](https://github.com/sgl-project/sglang/pull/40131) [Fix] [NPU] attention: Use FIA TND for MLA prefix attention and add Gemma norm fallback
- [#44816](https://github.com/sgl-project/sglang/pull/44816) [Fix] megamoe: Respect request-pool limits in decode validation
- [#44764](https://github.com/sgl-project/sglang/pull/44764) [Feat] rust-server: Report Python's launch-time /server_info fields from the Rust frontend
- [#44771](https://github.com/sgl-project/sglang/pull/44771) [CI] lora: Use the canonical Llama model ID in eviction tests

#### 🐛 New Issues
- [#44897](https://github.com/sgl-project/sglang/issues/44897) [Bug] [AMD] --ep-dispatch-algorithm fake routes with the real correction bias on the aiter path 💬3
- [#44835](https://github.com/sgl-project/sglang/issues/44835) [Bug] With `pause_generation(in_place)` then `pause_generation(abort)`, the server hangs until killed by watchdog 💬2
- [#44895](https://github.com/sgl-project/sglang/issues/44895) [Bug] Gemma4 input_embeds request crashes target prefill with input_ids/inputs_embeds exclusivity error 💬2
- [#44932](https://github.com/sgl-project/sglang/issues/44932) [Bug] /v1/messages returns HTTP 500 for gpt-oss when the history contains a thinking block 💬1
- [#44931](https://github.com/sgl-project/sglang/issues/44931) [Bug] gpt-oss on /v1/chat/completions drops replayed reasoning: the template reads `thinking`, SGLang only forwards `reasoning_content` 💬1
- [#44870](https://github.com/sgl-project/sglang/issues/44870) [Bug] DeepSeek-V4.1: on ROCm, encoder SWA bounded replay rewrites the cached KV of the replayed tokens on every prefix hit 💬1
- [#44885](https://github.com/sgl-project/sglang/issues/44885) [Feature] kv-shard: Pass Q instead of KV for short prefills with long cached prefixes
- [#44872](https://github.com/sgl-project/sglang/issues/44872) [Feature] Support pending external linker lookup at native prefill admission
- [#44839](https://github.com/sgl-project/sglang/issues/44839) [Bug] With Speculative decoding + abort, completion can return more tokens than `max_tokens`
- [#44855](https://github.com/sgl-project/sglang/issues/44855) [Feature] Prepare registered radix cache backends before worker graph initialization
- [#44840](https://github.com/sgl-project/sglang/issues/44840) [Bug] `pause_generation(abort)` + `release_memory_occupation` right after a client disconnect crashes scheduler
- [#44834](https://github.com/sgl-project/sglang/issues/44834) [Bug] `update_weights_from_disk` after `release_memory_occupation` is accepted and crashes the scheduler (segfault in `weight_loader`)
- [#44832](https://github.com/sgl-project/sglang/issues/44832) [CI] Post-merge runs on main cancel each other in NPU/XPU/Xeon/MUSA/SMG workflows

#### 🔒 Closed Issues
- [#33632](https://github.com/sgl-project/sglang/issues/33632) [Feature] Optimize Per-Tensor FP8 GEMM on SM120
- [#34596](https://github.com/sgl-project/sglang/issues/34596) [Bug] MI355X Qwen3.5 MTP throughput is significantly behind B200/B300 on realistic agentic workloads
- [#38452](https://github.com/sgl-project/sglang/issues/38452) [Bug] UnifiedRadixCache: L3 storage is never consulted when a prefix survives only as backuped stubs after host-tier eviction
- [#35415](https://github.com/sgl-project/sglang/issues/35415) [Bug] MiniMax-H3 FL2VA + Turbo LoRA: `slice_lora_b_weights` crashes on merged/QKV linear layers with TP>1
- [#35388](https://github.com/sgl-project/sglang/issues/35388) [Bug] deepep FP8 MoE on GB300/sm_103 crashes in DeepGEMM m_grouped_fp8_fp4_gemm_nt_contiguous — UE8M0 scale-format mismatch (CUDA 719 / smxx_layout.cuh:131 assert)
- [#35354](https://github.com/sgl-project/sglang/issues/35354) [Bug] DSpark fails with NVFP4 target LM heads on DGX Spark
- [#35334](https://github.com/sgl-project/sglang/issues/35334) [Feature] Workload-Signature-Based Parallelism Advisor for Diffusion Serving
- [#35333](https://github.com/sgl-project/sglang/issues/35333) [Feature] Trajectory-Gated Regional Compilation for Stateful Diffusion Pipelines
- [#35332](https://github.com/sgl-project/sglang/issues/35332) [Feature] Side-Effect-Aware Step Reuse for Stateful Diffusion Pipelines
- [#35331](https://github.com/sgl-project/sglang/issues/35331) [Feature] Batched Candidate-Trajectory Ensembling for Stochastic Action Generation
- [#35301](https://github.com/sgl-project/sglang/issues/35301) https://github.com/sgl-project/sglang/issues/10038[Bug]
- [#35295](https://github.com/sgl-project/sglang/issues/35295) [Bug] Streaming ASR emits partial-word suffixes at word revisions
- [#35291](https://github.com/sgl-project/sglang/issues/35291) [Bug] MLA + fp8 KV: fa3 and flashinfer_mla dequantise the ENTIRE per-layer KV pool every layer, every forward (43.7% of a decode step on DeepSeek-R1 / 8xH200)
- [#35257](https://github.com/sgl-project/sglang/issues/35257) [Bug] DSA top-k v2: tie-overflow selection is not exact — silently returns wrong top-k members (follow-up to #30512 / #30645)
- [#35242](https://github.com/sgl-project/sglang/issues/35242) [Bug] qwen3.8-27b toolcall error
- [#35229](https://github.com/sgl-project/sglang/issues/35229) [Bug] Anthropic /v1/messages drops PD bootstrap fields during AnthropicMessagesRequest → ChatCompletionRequest conversion
- [#44870](https://github.com/sgl-project/sglang/issues/44870) [Bug] DeepSeek-V4.1: on ROCm, encoder SWA bounded replay rewrites the cached KV of the replayed tokens on every prefix hit
- [#43731](https://github.com/sgl-project/sglang/issues/43731) [Bug] [Diffusion] Concurrent instances: scheduler silently rebinds to port+42 and requests reach the other instance

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 131,531 · **Open issues:** 2,582 · **Last push:** 4h ago

On October 18, 2026, the llama.cpp project saw the release of several new versions, including b11716, which introduced support for Q1_0 and Q2_0 quantization on Hexagon, improving performance for matrix operations. Other notable updates include b11715, which enhanced HIP support for Q1_0 unpacking, and b11714, which added functionality to discover and download models from Hugging Face Hub. Key merged features included enhancements to CUDA for faster MMVQ operations on low-bit types (PR #30517) and support for the Kolibri-1 model (PR #30673). Additionally, a significant new issue was reported (#30704) regarding an evaluation bug that has caused Mellum to perform eight times slower on CUDA, indicating a pressing need for investigation and resolution.

#### 🚀 New Releases
- [b11716](https://github.com/ggml-org/llama.cpp/releases/tag/b11716) b11716
- [b11715](https://github.com/ggml-org/llama.cpp/releases/tag/b11715) b11715
- [b11714](https://github.com/ggml-org/llama.cpp/releases/tag/b11714) b11714
- [b11713](https://github.com/ggml-org/llama.cpp/releases/tag/b11713) b11713
- [b11712](https://github.com/ggml-org/llama.cpp/releases/tag/b11712) b11712
- [b11711](https://github.com/ggml-org/llama.cpp/releases/tag/b11711) b11711
- [b11710](https://github.com/ggml-org/llama.cpp/releases/tag/b11710) b11710
- [b11709](https://github.com/ggml-org/llama.cpp/releases/tag/b11709) b11709
- [b11707](https://github.com/ggml-org/llama.cpp/releases/tag/b11707) b11707
- [b11706](https://github.com/ggml-org/llama.cpp/releases/tag/b11706) b11706

#### ✅ Merged PRs
- [#30122](https://github.com/ggml-org/llama.cpp/pull/30122) hexagon: add support for Q1_0 and Q2_0
- [#29927](https://github.com/ggml-org/llama.cpp/pull/29927) ggml-cuda: HIP: use __builtin_amdgcn_perm for q1_0 unpacking
- [#30517](https://github.com/ggml-org/llama.cpp/pull/30517) CUDA: faster MMVQ for low-bit types
- [#29584](https://github.com/ggml-org/llama.cpp/pull/29584) ui : Discover & Download Models from HF Hub
- [#30674](https://github.com/ggml-org/llama.cpp/pull/30674) tests: give the random model generator a per-tensor filler table
- [#30519](https://github.com/ggml-org/llama.cpp/pull/30519) cuda : fix -Wtautological-compare in fattn vec dispatch
- [#29181](https://github.com/ggml-org/llama.cpp/pull/29181) cuda : add grouped experts top-k fusion
- [#30673](https://github.com/ggml-org/llama.cpp/pull/30673) model : add Kolibri-1 (Aleph-Alpha) support
- [#30619](https://github.com/ggml-org/llama.cpp/pull/30619) ci: added ABI reports as github artifact
- [#30693](https://github.com/ggml-org/llama.cpp/pull/30693) Granite switch decision 256 options
- [#30374](https://github.com/ggml-org/llama.cpp/pull/30374) sycl: fix prompt-processing regression after Q4_0/Q8_0 weight reorder

#### 🐛 New Issues
- [#30704](https://github.com/ggml-org/llama.cpp/issues/30704) Eval bug: Mellum 8x slower on CUDA since #30584 (ffn_moe_down MUL_MAT_ID falls back to CPU) 💬2
- [#30697](https://github.com/ggml-org/llama.cpp/issues/30697) Eval bug: --moe-cache-mib crashes at load on Vulkan (RX 6900 XT, Windows) `bug-unconfirmed` 💬2
- [#30726](https://github.com/ggml-org/llama.cpp/issues/30726) Metal: intermittent multi-minute stalls during large-context prompt processing (qwen4exp) - compute time normal, wall time balloons 10-50x 💬2
- [#30734](https://github.com/ggml-org/llama.cpp/issues/30734) ggml-rpc: heap OOB write via op_params/ne mismatch in 6 ops (pre-auth validation bypass) `bug-unconfirmed` 💬1
- [#30706](https://github.com/ggml-org/llama.cpp/issues/30706) Eval bug: When a model fails to load - the particular reason should be mentioned in the error message `bug-unconfirmed` 💬1
- [#30742](https://github.com/ggml-org/llama.cpp/issues/30742) qwen35: mmproj inference quality significantly lower than transformers on identical prompts
- [#30735](https://github.com/ggml-org/llama.cpp/issues/30735) Eval bug: Beam-1.0-501B-A23B-GGUF outputs within thinking block `bug-unconfirmed`
- [#30730](https://github.com/ggml-org/llama.cpp/issues/30730) Feature Request: Optimize Attention Mask Generation for Contiguous Sequences `enhancement`
- [#30724](https://github.com/ggml-org/llama.cpp/issues/30724) Misc. bug: ngram-cache drafting reads before the start of draft for inputs shorter than 4 tokens `bug-unconfirmed`
- [#30720](https://github.com/ggml-org/llama.cpp/issues/30720) Hexagon (v73): deterministic output corruption at large HTP buffer mappings on Motorola SM7550 — data corrupted regardless of op placement
- [#30702](https://github.com/ggml-org/llama.cpp/issues/30702) Eval bug: Metal backend silently produces corrupted output on Intel Mac with AMD GPU (no error, no CPU fallback) `bug-unconfirmed`
- [#30700](https://github.com/ggml-org/llama.cpp/issues/30700) Feature Request: MXFP4 on CUDA Blackwell could use MXFP8 activations via the mxf8f6f4 block-scaled MMA `enhancement`
- [#30698](https://github.com/ggml-org/llama.cpp/issues/30698) Eval bug: Regression in #30257: Gemma 4 with --mmproj and MTP (-md) aborts on startup with GGML_ASSERT(ubatch->embd_state) `bug-unconfirmed`

#### 🔒 Closed Issues
- [#27741](https://github.com/ggml-org/llama.cpp/issues/27741) Feature Request: Possible to support Qwen3.8-Flash-Next?
- [#28035](https://github.com/ggml-org/llama.cpp/issues/28035) Misc. bug: Performance: Vulkan ggml_vk_get_op_batch_size for GGML_OP_GET_ROWS always returns 0 on Apple M2 Fedora Asahi
- [#30695](https://github.com/ggml-org/llama.cpp/issues/30695) vulkan: ~3x decode regression with spec decode + large -c on multi-device systems since e0bcacc
- [#29452](https://github.com/ggml-org/llama.cpp/issues/29452) Misc. bug: [SYCL] failing on implicit GEMM / empty kernel during CONV_3D

### Ollama (`ollama/ollama`)

**Stars:** 183,638 · **Open issues:** 4,325 · **Last push:** <1h ago

On October 18, 2026, Ollama released version v0.40.7-rc0, which included key updates such as support for Responses on non-thinking models and enhancements to the llama-server for draft speculative type inference. Notable merged pull requests encompassed the integration of PPLX Decider v1.2 support and improvements in API rendering fields. Among the day's new issues, a significant concern was raised regarding a ROCm regression affecting Radeon Pro W5700, where an assertion failed, pointing to potential compatibility issues with earlier versions. Overall, the day was marked by substantive updates that enhance both functionality and user experience within the Ollama ecosystem.

#### 🚀 New Releases
- [v0.40.7-rc0](https://github.com/ollama/ollama/releases/tag/v0.40.7-rc0) v0.40.7

#### ✅ Merged PRs
- [#19095](https://github.com/ollama/ollama/pull/19095) api: populate show renderer/parser fields and add template_source
- [#19072](https://github.com/ollama/ollama/pull/19072) mlx: add PPLX Decider v1.2 support
- [#19064](https://github.com/ollama/ollama/pull/19064) llama-server: let llama-server infer the draft speculative type
- [#19010](https://github.com/ollama/ollama/pull/19010) openai: allow Responses effort on non-thinking models

#### 🐛 New Issues
- [#19075](https://github.com/ollama/ollama/issues/19075) ROCm regression on Radeon Pro W5700 (gfx1010): GGML_ASSERT(max_blocks_per_sm > 0) in Ollama 0.35.1 `bug` 💬4
- [#19085](https://github.com/ollama/ollama/issues/19085) Error: pull model manifest: 412 `bug` 💬2
- [#19078](https://github.com/ollama/ollama/issues/19078) Integer `seed` above 2^53 loses precision (options decoded as float64), so distinct seeds give identical output 💬2
- [#19086](https://github.com/ollama/ollama/issues/19086) Failed to pull model under proxied network environment `bug` 💬1
- [#19084](https://github.com/ollama/ollama/issues/19084) emory exhaustion (OOM freeze) on NVIDIA Jetson Orin (8GB RAM) due to unconstrained prompt caching `bug` 💬1
- [#19079](https://github.com/ollama/ollama/issues/19079) Cloud:DeepSeek-V4.1-Flash-1017 `model` `cloud`
- [#19093](https://github.com/ollama/ollama/issues/19093) Expose reasoning (thinking) token counts in API usage for thinking models `feature request`
- [#19089](https://github.com/ollama/ollama/issues/19089) `ollama ps` / `/api/ps` reports 586 MB for a 15 GB model on the llamacpp runner (gemma4:26b-a4b-it-qat, macOS)
- [#19090](https://github.com/ollama/ollama/issues/19090) d1-omni: one /v1/systemone request over ~6.5k tokens corrupts the runner (Vulkan iGPU), later requests return wrong answers with HTTP 200 until unload

#### 🔒 Closed Issues
- [#18817](https://github.com/ollama/ollama/issues/18817) Bug: "unsupported tensor size overflows" when importing GSQ-RCO quantized Qwen3.8-Flash-Next, despite qwen4exp architecture being supported
- [#18609](https://github.com/ollama/ollama/issues/18609) glm-ocr: 0.34.1+ returns HTTP 500 "prediction aborted, token repeat limit reached" for OCR requests that succeeded on 0.34.0
- [#19085](https://github.com/ollama/ollama/issues/19085) Error: pull model manifest: 412
- [#19086](https://github.com/ollama/ollama/issues/19086) Failed to pull model under proxied network environment
- [#19084](https://github.com/ollama/ollama/issues/19084) emory exhaustion (OOM freeze) on NVIDIA Jetson Orin (8GB RAM) due to unconstrained prompt caching
- [#19089](https://github.com/ollama/ollama/issues/19089) `ollama ps` / `/api/ps` reports 586 MB for a 15 GB model on the llamacpp runner (gemma4:26b-a4b-it-qat, macOS)

### LiteLLM (`BerriAI/litellm`)

**Stars:** 61,448 · **Open issues:** 5,541 · **Last push:** <1h ago

On October 18, 2026, LiteLLM released version 1.103.5, which includes new security features such as the verification of Docker image signatures using cosign for added integrity. Among the significant merged pull requests, notable changes include the introduction of configurable token count framing and model capabilities in PR #46777, as well as a fix for preserving spend across malformed output in PR #47184. Additionally, the team has introduced OpenInfer as an OpenAI-compatible provider, enhancing interoperability. However, a critical new bug was reported regarding the SAP GenAI Hub that incurs an overhead of approximately 870ms on every LLM call due to its deployment URL being fetched repeatedly.

#### 🚀 New Releases
- [v1.103.5](https://github.com/BerriAI/litellm/releases/tag/v1.103.5) v1.103.5

#### ✅ Merged PRs
- [#47199](https://github.com/BerriAI/litellm/pull/47199) feat(ui): show gateway URL and agent setup instructions after creating a key
- [#47202](https://github.com/BerriAI/litellm/pull/47202) fix(bedrock): take the 200K context window from the Claude Sonnet 4 model card
- [#40152](https://github.com/BerriAI/litellm/pull/40152) fix(baseten): forward reasoning_effort to Baseten Model API
- [#46777](https://github.com/BerriAI/litellm/pull/46777) feat(count_tokens)!: configurable token_count_framing and token_count_model, count source in the response
- [#47184](https://github.com/BerriAI/litellm/pull/47184) fix(batches): preserve spend across malformed output and metadata failures
- [#47196](https://github.com/BerriAI/litellm/pull/47196) fix(bedrock): add the July 7, 2026 EOL date to the Llama 3.1 405B and Llama 3.2 rows
- [#47100](https://github.com/BerriAI/litellm/pull/47100) fix(bedrock): send native structured output first on Opus 4.8 and Sonnet 5 and fall back to the json tool when Bedrock rejects it
- [#45497](https://github.com/BerriAI/litellm/pull/45497) fix(rag)!: use team provider credentials and allow viewer and JWT team access
- [#47017](https://github.com/BerriAI/litellm/pull/47017) feat(gateway): share router cooldowns and follow proxy key invalidations through Redis
- [#41034](https://github.com/BerriAI/litellm/pull/41034) feat(openinfer): add OpenInfer as an OpenAI-compatible provider
- [#46942](https://github.com/BerriAI/litellm/pull/46942) fix(proxy): count the whole minor line in the upgrade notice for patch releases
- [#46263](https://github.com/BerriAI/litellm/pull/46263) fix(router)!: stop a chat-mode Mantle deployment from rewriting the shared Responses routing row
- [#47162](https://github.com/BerriAI/litellm/pull/47162) fix(router)!: bound fake-streamed calls by the request timeout, not stream_timeout
- [#47157](https://github.com/BerriAI/litellm/pull/47157) fix(bedrock): backport #46307 and #46524 to rc/1.107.0
- [#47025](https://github.com/BerriAI/litellm/pull/47025) fix(ui): take the dashboard's user role and identity from the server
- [#47175](https://github.com/BerriAI/litellm/pull/47175) fix(logging): keep root logger INFO lines when json_logs is on and LITELLM_LOG is set
- [#47154](https://github.com/BerriAI/litellm/pull/47154) test(mcp): replace the live Linear MCP OAuth e2e tests with integration coverage
- [#47174](https://github.com/BerriAI/litellm/pull/47174) fix: backport the third batch of rc/1.107.0 CI triage fixes from main
- [#46947](https://github.com/BerriAI/litellm/pull/46947) fix: handle missing choice indices in streamed output recording
- [#47144](https://github.com/BerriAI/litellm/pull/47144) fix(router): read an application profile's base model from metadata on a cache hit
- [#47163](https://github.com/BerriAI/litellm/pull/47163) fix(count_tokens)!: answer 400 for Vertex partner models without a count API and OpenAI-shaped provider errors on /v1/responses/input_tokens
- [#47170](https://github.com/BerriAI/litellm/pull/47170) test(e2e): hold failing-request RSS to a loose ceiling over two measured batches
- [#47075](https://github.com/BerriAI/litellm/pull/47075) test(integration): report uncollected shard files as collection errors instead of crashing xdist
- [#47093](https://github.com/BerriAI/litellm/pull/47093) test(caching): assert sync cache-hit logging without depending on thread order
- [#47165](https://github.com/BerriAI/litellm/pull/47165) fix(proxy): warn at boot when a config environment_variables key replaces a value already set in the process environment
- [#47159](https://github.com/BerriAI/litellm/pull/47159) fix(vector-stores): backport #47021 to rc/1.107.0
- [#47148](https://github.com/BerriAI/litellm/pull/47148) fix(tests): wait for every thread of a killed worker before treating it as gone
- [#47143](https://github.com/BerriAI/litellm/pull/47143) test: backport the SDK logging drain to rc/1.107.0 (#46924)
- [#47160](https://github.com/BerriAI/litellm/pull/47160) test(e2e): enable prometheus_system on the redis chaos proxy config
- [#47152](https://github.com/BerriAI/litellm/pull/47152) test(integration): run the bedrock mantle prompt cache and output limit wire tests on their own proxy
- [#41150](https://github.com/BerriAI/litellm/pull/41150) fix(spend_logs): persist user email in spend log metadata so it shows in UI request logs
- [#47150](https://github.com/BerriAI/litellm/pull/47150) test(e2e): get_text_external accepts JSON next to text so a pod-log error reads as the Kubernetes Status, not a 406
- [#47156](https://github.com/BerriAI/litellm/pull/47156) fix(logging): run legacy s3 callback for streamed /v1/messages calls
- [#46662](https://github.com/BerriAI/litellm/pull/46662) fix(proxy): report requested model in streamed Responses response.model
- [#47021](https://github.com/BerriAI/litellm/pull/47021) fix(vector-stores): keep proxy context out of provider vector store metadata
- [#47155](https://github.com/BerriAI/litellm/pull/47155) fix(batches): handle empty models when logging batch cost
- [#46894](https://github.com/BerriAI/litellm/pull/46894) fix(proxy): route team key vector store calls to a team model of the store's provider
- [#47153](https://github.com/BerriAI/litellm/pull/47153) fix(mcp)!: backport the OAuth Delegate fields and gateway-owned DCR bridge client to rc/1.107.0 (#46941, #46940)
- [#46965](https://github.com/BerriAI/litellm/pull/46965) feat(guardrails): add num_retries to generic_guardrail_api for checks lost after connect
- [#47134](https://github.com/BerriAI/litellm/pull/47134) fix(vertex): match standalone 403 status tokens instead of any substring
- [#46513](https://github.com/BerriAI/litellm/pull/46513) fix(mcp): bound paginated tools/list by LITELLM_MCP_TOOL_LISTING_TIMEOUT
- [#47114](https://github.com/BerriAI/litellm/pull/47114) fix(model_prices): registry audit 2026-10-17, Perplexity decider v1.2 rows, Azure Mistral and Vertex Gemini deprecation dates
- [#46940](https://github.com/BerriAI/litellm/pull/46940) fix(mcp)!: register the gateway's own DCR client for bridge servers instead of relaying the caller's loopback redirect
- [#41523](https://github.com/BerriAI/litellm/pull/41523) fix(register_model)!: keep bedrock geo deployments priced across price data reloads
- [#46802](https://github.com/BerriAI/litellm/pull/46802) test(perf): qualify database upgrades with shared 5 RPS traffic
- [#46994](https://github.com/BerriAI/litellm/pull/46994) fix(proxy): let proxy_admin_viewer store its own MCP credentials
- [#43604](https://github.com/BerriAI/litellm/pull/43604) fix(otel): report cache hits at zero cost with a cache-hit flag in V1 and V2 spans
- [#47024](https://github.com/BerriAI/litellm/pull/47024) fix(presidio): stop overlapping entity spans from corrupting numbered PII tokens
- [#47142](https://github.com/BerriAI/litellm/pull/47142) test(integration): remove BUG skips for 2 tests that pass on main
- [#47141](https://github.com/BerriAI/litellm/pull/47141) test(cost): add tier 1 cost tracking cells and sync usage shapes for 2026-10-17
- [#47137](https://github.com/BerriAI/litellm/pull/47137) perf(proxy): gc.freeze() the startup heap once the proxy is up so gen-2 passes stop re-walking it
- [#47013](https://github.com/BerriAI/litellm/pull/47013) fix(responses): run pre_call guardrails on every Responses WebSocket turn and bill each turn its own guardrail cost
- [#47132](https://github.com/BerriAI/litellm/pull/47132) feat(deepinfra): add DeepSeek-V4.1-Flash and DeepSeek-V4.1-Flash-1017 to the cost map
- [#47136](https://github.com/BerriAI/litellm/pull/47136) test(translation): add claude-haiku-5-5 vertex ai cases
- [#47133](https://github.com/BerriAI/litellm/pull/47133) fix(cost-map): fall back to the bundled map when urlsplit rejects LITELLM_MODEL_COST_MAP_URL
- [#47138](https://github.com/BerriAI/litellm/pull/47138) fix(mcp)!: backport the ID-JAG signed resource claim cap to rc/1.107.0 (#47094)
- [#47094](https://github.com/BerriAI/litellm/pull/47094) fix(mcp)!: cap the ID-JAG credential by its signed resource claim and refuse a resource the gateway does not serve
- [#46960](https://github.com/BerriAI/litellm/pull/46960) feat(terraform)!: default the component images to the module release tag
- [#47130](https://github.com/BerriAI/litellm/pull/47130) test(translation): allow anthropic usage speed in cross-model contract
- [#47129](https://github.com/BerriAI/litellm/pull/47129) fix(backend): retain Prometheus metrics during startup
- [#47128](https://github.com/BerriAI/litellm/pull/47128) test(e2e): event_loop_stalls caps the request-handler bucket at 2, twice the gc-aware maximum
- [#46096](https://github.com/BerriAI/litellm/pull/46096) fix(anthropic): carry safeguard_results and stop_details in synthesized message_delta events
- [#47089](https://github.com/BerriAI/litellm/pull/47089) test(e2e): event_loop_stalls charges a hold to the longest gc pass that fits it, not to the sum of every pass since the last hold
- [#46102](https://github.com/BerriAI/litellm/pull/46102) fix(rust): add the dangerous-tool-use beta when an anthropic /v1/messages request carries safeguards
- [#43955](https://github.com/BerriAI/litellm/pull/43955) fix(anthropic): add the dangerous-tool-use beta when a /v1/messages request carries safeguards
- [#46896](https://github.com/BerriAI/litellm/pull/46896) test(translation): add sonnet 5.5 and gemini vertex rows to cross-model mid tier
- [#47117](https://github.com/BerriAI/litellm/pull/47117) test(translation): recapture azure ai claude bases after usage speed field
- [#47116](https://github.com/BerriAI/litellm/pull/47116) test(translation): recapture anthropic claude bases after usage speed field
- [#47058](https://github.com/BerriAI/litellm/pull/47058) feat(mcp): backport the ID-JAG stack to rc/1.107.0 (#46748, #46747, #46745, #47004)
- [#47045](https://github.com/BerriAI/litellm/pull/47045) fix(streaming): report the deployment's api_base when a stream fails mid-way
- [#47040](https://github.com/BerriAI/litellm/pull/47040) feat(bedrock): apply bedrock_request_metadata_fields on the /bedrock pass-through routes
- [#46539](https://github.com/BerriAI/litellm/pull/46539) feat(azure-ai): support Entra ID auth for Microsoft-Decision-1 on /v1/decisions and /v1/systemone
- [#46524](https://github.com/BerriAI/litellm/pull/46524) fix(bedrock)!: scan Claude invoke-with-response-stream passthrough output with post_call guardrails
- [#46307](https://github.com/BerriAI/litellm/pull/46307) fix(bedrock)!: stream Converse passthrough frames through post_call guardrails instead of buffering
- [#47090](https://github.com/BerriAI/litellm/pull/47090) fix!: backport the second batch of rc/1.107.0 CI triage fixes from main
- [#47087](https://github.com/BerriAI/litellm/pull/47087) test(e2e): warm the memory test up with two batches before the measured one
- [#46974](https://github.com/BerriAI/litellm/pull/46974) test(e2e): event_loop_stalls perf case fails on a gateway event-loop hold over 100 ms that is not on its allowlist
- [#47085](https://github.com/BerriAI/litellm/pull/47085) feat(pricing): backfill github_copilot prices from the Copilot pricing table
- [#47037](https://github.com/BerriAI/litellm/pull/47037) fix(cost): price exact cost-map names before price-free capability rules, and fix SCIM and MCP integration tests on CircleCI
- [#47019](https://github.com/BerriAI/litellm/pull/47019) fix(logging): keep the async request's logging payload when the sync success thread runs late
- [#47073](https://github.com/BerriAI/litellm/pull/47073) fix(caching): keep prompt cache usage on streamed cache hits
- [#47080](https://github.com/BerriAI/litellm/pull/47080) test(integration): send post-kill requests on a fresh connection in two worker-kill tests
- [#47072](https://github.com/BerriAI/litellm/pull/47072) test(e2e): keep the prompt-caching affinity test on the live provider
- [#47066](https://github.com/BerriAI/litellm/pull/47066) test(integration): write worker configs beside test-supplied configs
- [#47064](https://github.com/BerriAI/litellm/pull/47064) ci(cost map): remove the generated model prices JSON schema
- [#47039](https://github.com/BerriAI/litellm/pull/47039) fix(prometheus): set the remaining rate-limit gauges from decimal headers again
- [#46803](https://github.com/BerriAI/litellm/pull/46803) perf(cli): start lite without initializing the litellm SDK
- [#47027](https://github.com/BerriAI/litellm/pull/47027) test(e2e): assert the Vertex cache-creation billing contract in the prompt caching test
- [#44125](https://github.com/BerriAI/litellm/pull/44125) fix(mcp): log upstream exchange when an MCP health check fails
- [#46870](https://github.com/BerriAI/litellm/pull/46870) fix(bedrock): use native structured output on Haiku 5.5 and Sonnet 5.5, and fix Fable 5 and Sonnet 4.6 schema 400s
- [#47057](https://github.com/BerriAI/litellm/pull/47057) ci(cost map): classify token_count_model as an object key in the schema generator
- [#46709](https://github.com/BerriAI/litellm/pull/46709) fix(proxy): unset DB environment variables removed from the row on every worker by row revision
- [#47033](https://github.com/BerriAI/litellm/pull/47033) build(docker): cache the Rust extension build in its own stage
- [#47043](https://github.com/BerriAI/litellm/pull/47043) fix(proxy): backport the 1.107.0 rc triage fixes to rc/1.107.0
- [#46523](https://github.com/BerriAI/litellm/pull/46523) feat: add Nace Drex decisions provider
- [#46949](https://github.com/BerriAI/litellm/pull/46949) fix(responses): backport #46099 and #46109 to stable/1.103.x for v1.103.5
- [#47020](https://github.com/BerriAI/litellm/pull/47020) test(integration): expect a pre-token invalid prompt on a bridged stream to fall back
- [#47004](https://github.com/BerriAI/litellm/pull/47004) fix(proxy): keep the OIDC login refresh token as the ID-JAG subject when the SSO client is the ID-JAG client
- [#47023](https://github.com/BerriAI/litellm/pull/47023) test(e2e): repair fallback management test for config-owned fallbacks
- [#47022](https://github.com/BerriAI/litellm/pull/47022) docs(cost): rewrite stale completion_cost docstring
- [#46967](https://github.com/BerriAI/litellm/pull/46967) fix(openai): send chat completions through client.post so the SDK's per-message param transform stops holding the event loop

#### 🐛 New Issues
- [#47096](https://github.com/BerriAI/litellm/issues/47096) [Bug]: SAP GenAI Hub deployment_url re-fetched on every LLM call (~870ms overhead) `llm translation` 💬2
- [#47076](https://github.com/BerriAI/litellm/issues/47076) [Bug]: Helm migration Job OOMKilled at 1Gi since v1.105.x — prisma_migration.py runs prisma generate after migrating (1.15 GiB peak for a step that can't succeed in the non_root image) 💬2
- [#47046](https://github.com/BerriAI/litellm/issues/47046) [Bug] Vertex/Gemini context caching reorders the conversation when the cache_control block is not a prefix, and modify_params drops system_instruction `llm translation` 💬2
- [#47169](https://github.com/BerriAI/litellm/issues/47169) [Bug]: /v1/messages Responses bridge reorders tool calls and drops reasoning_text (strict thinking backends reject the replay) `llm translation` `claude code` 💬1
- [#47125](https://github.com/BerriAI/litellm/issues/47125) Complexity Router Tier Pin Flips Between Models Across Proxy Workers `llm translation` 💬1
- [#47082](https://github.com/BerriAI/litellm/issues/47082) [Bug]: DefaultCredentialsError in litellm/llms/vertex_ai/vertex_llm_base.py `bug` `llm translation` 💬1
- [#47179](https://github.com/BerriAI/litellm/issues/47179) [Bug]: fireworks_ai/ and ollama/ return an empty successful completion for a 200 whose body is not a completion `llm translation`
- [#47119](https://github.com/BerriAI/litellm/issues/47119) [Bug]: With no database configured, allow_requests_on_db_unavailable accepts any API key
- [#47062](https://github.com/BerriAI/litellm/issues/47062) [Bug]: Cold end-user spend counter is incremented by the full balance and blocks a user under budget
- [#47061](https://github.com/BerriAI/litellm/issues/47061) [Bug]: `/v1/images/generations` requests refused by the router never reach failure callbacks (chat ones do) `llm translation`

#### 🔒 Closed Issues
- [#8842](https://github.com/BerriAI/litellm/issues/8842) [Bug]: Router's async completion don't trigger CustomLogger callbacks
- [#19856](https://github.com/BerriAI/litellm/issues/19856) [Bug]: LiteLLM UI redirects to /ui/login after oauth2-proxy auth, bypassing Custom UI SSO handler
- [#32993](https://github.com/BerriAI/litellm/issues/32993) [Bug]: v1.92.0 release misses #32339 and completion(tools=...) still requires optional FastAPI
- [#42130](https://github.com/BerriAI/litellm/issues/42130) [Bug]: Presidio output_parse_pii corrupts text when analyzer spans overlap — placeholders spliced (<US_BANK_NUMBER_7>LICENSE_7>), characters after the entity eaten
- [#39715](https://github.com/BerriAI/litellm/issues/39715) [Bug]: DELETE /v1/files/{file_id} returns 500 "BedrockFilesConfig does not support file deletion" — Bedrock files cannot be cleaned up
- [#44748](https://github.com/BerriAI/litellm/issues/44748) [Bug]: concurrent /v1/messages calls sometimes answer 500 "dictionary changed size during iteration" while the spend row records a success
- [#33016](https://github.com/BerriAI/litellm/issues/33016) [Bug]: Bedrock Converse drops empty-user-message "continue" substitution for string content
- [#34357](https://github.com/BerriAI/litellm/issues/34357) [Feature]:Add OpenInfer Provider
- [#38543](https://github.com/BerriAI/litellm/issues/38543) [Bug]: model_info.mode is shared across deployments of the same provider model and cannot be cleared (v1.87.0+)
- [#46047](https://github.com/BerriAI/litellm/issues/46047) [Bug]: Streaming 500s with "unsupported operand type(s) for +: 'NoneType' and 'int'" when a backend chunk omits choices[].index
- [#34954](https://github.com/BerriAI/litellm/issues/34954) [Bug]: Gemini 429 quota errors intermittently map to BadRequestError — unanchored `"403" in error_str` precedes all 429 branches
- [#45055](https://github.com/BerriAI/litellm/issues/45055) [Bug]: Bedrock batch signing ignores credentials configured on the deployment
- [#45058](https://github.com/BerriAI/litellm/issues/45058) [Bug]: Titan embedding batch results record zero token usage and cost
- [#45063](https://github.com/BerriAI/litellm/issues/45063) [Bug]: Expired batches with successful output are retired without recording spend
- [#45074](https://github.com/BerriAI/litellm/issues/45074) [Bug]: Long-context ultrafast pricing fields are dropped from model metadata
- [#46804](https://github.com/BerriAI/litellm/issues/46804) [Feature]: "Key Usage" view on the Usage page (filter by virtual key, with token metrics)
- [#32996](https://github.com/BerriAI/litellm/issues/32996) [Bug] OTEL content events (enable_events) silently dropped: OTLP exporter raises "Invalid type NoneType" on None in log records
- [#33007](https://github.com/BerriAI/litellm/issues/33007) [Bug]: Skill Hub source link hardcodes /tree/main/, 404s for repos whose default branch is not "main"
- [#45062](https://github.com/BerriAI/litellm/issues/45062) [Bug]: Credential serialization drops the configured S3 endpoint for batch output retrieval
- [#45069](https://github.com/BerriAI/litellm/issues/45069) [Bug]: Internal LiteLLM parameters reach strict provider request bodies
- [#45057](https://github.com/BerriAI/litellm/issues/45057) [Bug]: Bedrock Scheduled batches are reported as validating
- [#45059](https://github.com/BerriAI/litellm/issues/45059) [Bug]: Deleting a Bedrock-backed file fails because delete transforms are unimplemented
- [#45068](https://github.com/BerriAI/litellm/issues/45068) [Bug]: Expose guardrail response metadata to callers through an opt-in response field
- [#45072](https://github.com/BerriAI/litellm/issues/45072) [Bug]: Validate managed file-list page limits instead of silently clamping them
- [#45073](https://github.com/BerriAI/litellm/issues/45073) [Bug]: Small managed file-list pages can hide readable files behind filtered rows
- [#45075](https://github.com/BerriAI/litellm/issues/45075) [Bug]: Responses WebSocket closes live prewarmed connections after 30 seconds
- [#45054](https://github.com/BerriAI/litellm/issues/45054) [Bug]: Anthropic safeguards are dropped or sent without the required beta

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,194 · **Open issues:** 386 · **Last push:** <1h ago

On October 18, 2026, there were no new releases for Unsloth, but several significant pull requests were merged, including improvements to the inline markdown table style in the Hub and enhanced filters and sorting options for the Studio. Other notable updates involved aligning toast icons on multi-line messages and modifications to handle GPU placement on ordinary hosts more effectively. Among the new issues, a critical bug was reported regarding the broken PyTorch link with AMD RDNA 2 GPUs, drawing attention from the community. Overall, the day's developments reflect ongoing enhancements in usability and functionality within the Unsloth ecosystem.

#### ✅ Merged PRs
- [#14087](https://github.com/unslothai/unsloth/pull/14087) Studio: use the inline markdown table style in the Hub, file previews and the composer draft
- [#14030](https://github.com/unslothai/unsloth/pull/14030) Studio: slide the selected pill on every segmented toggle
- [#14083](https://github.com/unslothai/unsloth/pull/14083) Studio Hub: On Device filters and sort, Exports & Fine-tunes, unsloth.ai links
- [#14082](https://github.com/unslothai/unsloth/pull/14082) Studio: align toast icons with the first line on multi-line toasts
- [#14058](https://github.com/unslothai/unsloth/pull/14058) Notebooks smoke: run the install cell the way Colab does
- [#14056](https://github.com/unslothai/unsloth/pull/14056) CUDA spoof: cover CUDA wheels on GPU-less runners, not only CPU wheels
- [#14053](https://github.com/unslothai/unsloth/pull/14053) Chat UI smoke: boot Studio with update checks off
- [#14020](https://github.com/unslothai/unsloth/pull/14020) Studio: keep automatic GPU placement inert on ordinary hosts

#### 🐛 New Issues
- [#14057](https://github.com/unslothai/unsloth/issues/14057) Every update broke pytorch link with GPU (AMD RDNA 2) `feature request` `bug` 💬5
- [#14086](https://github.com/unslothai/unsloth/issues/14086) [Bug] Recommend downloaded Audio Models don't show up in inventory `feature request` `bug` 💬4
- [#14070](https://github.com/unslothai/unsloth/issues/14070) Docs: Homebrew tab shows the winget command 💬1
- [#14061](https://github.com/unslothai/unsloth/issues/14061) Unsloth Desktop progress bars 💬1
- [#14063](https://github.com/unslothai/unsloth/issues/14063) Block compile breaks checkpoint recomputation on distributed runs: CheckpointError in the backward of step 1 💬1
- [#14055](https://github.com/unslothai/unsloth/issues/14055) [Bug] "undefined is not an object (evaluating 't.scrollbarGutter.includes')" on v0.1.908-beta MAC `feature request` `bug` 💬1
- [#14054](https://github.com/unslothai/unsloth/issues/14054) [Feature] Add OpenUI integration to Unsloth Studio Chat UI `feature request` 💬1
- [#14085](https://github.com/unslothai/unsloth/issues/14085) [Bug] Windows AMD gfx1201: ROCm launch failures after llama.cpp b11696 update, display flashing and hard lockup `feature request` `bug`
- [#14069](https://github.com/unslothai/unsloth/issues/14069) [Feature] Integrated GPU Power/Thermal Limit option to prevent system shutdowns `feature request`
- [#14068](https://github.com/unslothai/unsloth/issues/14068) [Bug] Sampling settings gets corrupted on preset save. `feature request` `bug`
- [#14067](https://github.com/unslothai/unsloth/issues/14067) ROCm PyTorch wasn't working out of the box `feature request` `bug`
- [#14052](https://github.com/unslothai/unsloth/issues/14052) [Bug] `feature request` `bug`

#### 🔒 Closed Issues
- [#14070](https://github.com/unslothai/unsloth/issues/14070) Docs: Homebrew tab shows the winget command

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,148 · **Open issues:** 421 · **Last push:** 3h ago

On October 18, 2026, AIBrix had no new releases, but several notable pull requests were merged, enhancing functionality and addressing critical bugs. Key additions include the feature to preview existing batch dataset details in the Console (PR #3101) and the implementation of ModelClaim placement priority (PR #3036). Bug fixes focused on improving the stability of the system, such as maintaining the KPA panic window across reconciles (PR #3122) and addressing issues with the routing of HTTP requests (PR #3132). Additionally, a significant new issue was raised regarding the AIBrix CI utilizing a disproportionate share of the vllm-project's shared GitHub-hosted runners (issue #3135).

#### ✅ Merged PRs
- [#3138](https://github.com/vllm-project/aibrix/pull/3138) [Misc] Record a SlowStartBatch panic before the batch is counted, by construction
- [#3122](https://github.com/vllm-project/aibrix/pull/3122) [Bug] Keep the KPA panic window across reconciles
- [#3101](https://github.com/vllm-project/aibrix/pull/3101) [Feat] Preview existing batch dataset details in Console
- [#3036](https://github.com/vllm-project/aibrix/pull/3036) [Feat] Add ModelClaim placement priority
- [#3139](https://github.com/vllm-project/aibrix/pull/3139) [Bug] Drop departed pod history from the preble sliding window
- [#3137](https://github.com/vllm-project/aibrix/pull/3137) [Bug] Return stored limits when creating an existing metadata user
- [#3136](https://github.com/vllm-project/aibrix/pull/3136) [Bug] Use the Pod address family for ModelAdapter EndpointSlices
- [#3127](https://github.com/vllm-project/aibrix/pull/3127) [Bug] Admit the PD decode pod before the prefill leg is sent
- [#3131](https://github.com/vllm-project/aibrix/pull/3131) [Bug] Load local-path adapters through the runtime sidecar
- [#3133](https://github.com/vllm-project/aibrix/pull/3133) [Bug] Add each model-router custom path to the HTTPRoute only once
- [#3132](https://github.com/vllm-project/aibrix/pull/3132) [Bug] Route /v1/images/generations through the per-model HTTPRoute

#### 🐛 New Issues
- [#3135](https://github.com/vllm-project/aibrix/issues/3135) [CI] AIBrix CI takes a large share of vllm-project's shared GitHub-hosted runners `area/testing` `kind/misc` `area/website` `area/runtime` 💬5
- [#3151](https://github.com/vllm-project/aibrix/issues/3151) [CI] Add label-controlled CI for external contributors `triage/needs-information` `kind/feature` `area/testing` `area/cicd` 💬2
- [#3149](https://github.com/vllm-project/aibrix/issues/3149) [Bug] KPA and APA keep scaling under steady load because the metric windows hold per-pod means `kind/bug` `area/orchestration` 💬1
- [#3143](https://github.com/vllm-project/aibrix/issues/3143) [Bug] An unhealthy remote tokenizer is re-probed on every prefix-cache request, adding up to 5s each `kind/bug` `area/gateway` 💬1

#### 🔒 Closed Issues
- [#3117](https://github.com/vllm-project/aibrix/issues/3117) [Bug] A NaN or Inf metric targetValue is accepted when the webhook is bypassed
- [#3115](https://github.com/vllm-project/aibrix/issues/3115) [Bug] SlowStartBatch counts a panicking callback as a success

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,205 · **Open issues:** 631 · **Last push:** 7h ago

On October 18, 2026, Semantic Router experienced a routine maintenance day with no new releases. Significant merged pull requests included enhancements to the Qdrant Router memory with access tracking, a provider-bound PII masking plugin, and improvements to the Dashboard's error handling for authentication. Additionally, various bug fixes were implemented, addressing issues such as a media worker exit delay and retry logic for Milvus memory inserts. A notable new issue emerged regarding the Dashboard's authentication handlers, which improperly return raw error text to clients, raising concerns over error management and user experience.

#### ✅ Merged PRs
- [#4796](https://github.com/vllm-project/semantic-router/pull/4796) [Bug] Reinforce Qdrant Router Memory retrieve with access tracking
- [#3806](https://github.com/vllm-project/semantic-router/pull/3806) [Router] Add a provider-bound PII masking plugin
- [#5162](https://github.com/vllm-project/semantic-router/pull/5162) [Test] Bound the serving bundle test's elapsed time below its window
- [#4978](https://github.com/vllm-project/semantic-router/pull/4978) [Bug] Use upsert when retrying Milvus memory insert
- [#5182](https://github.com/vllm-project/semantic-router/pull/5182) [Bug] Add platform guards for fcntl and Windows locking in CLI (#5093)
- [#5180](https://github.com/vllm-project/semantic-router/pull/5180) [Bug] Wait for the media workers to exit when the runtime stops
- [#5166](https://github.com/vllm-project/semantic-router/pull/5166) [Bug] Round the 429 Retry-After header up to whole seconds

#### 🐛 New Issues
- [#5210](https://github.com/vllm-project/semantic-router/issues/5210) [Bug] Dashboard auth handlers return the auth store's raw error text to the client `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬5
- [#5178](https://github.com/vllm-project/semantic-router/issues/5178) [Bug] Model runtime: a failed GPU load's cached memory makes every retry fail placement `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#5198](https://github.com/vllm-project/semantic-router/issues/5198) [CI/Build] The Dashboard backend job never uploads its test evidence `bug` `good first issue` `accepted` `ready-for-dev` 💬2
- [#5196](https://github.com/vllm-project/semantic-router/issues/5196) [Bug] The Dashboard Models editor cannot save a model that references a shared deployment `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#5192](https://github.com/vllm-project/semantic-router/issues/5192) [Bug] Builder opens and deletes the wrong signal when two signal types share a name `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#5194](https://github.com/vllm-project/semantic-router/issues/5194) [Bug] Saving a model in the Dashboard Models editor drops openai_compat_gateway from its backends `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#5208](https://github.com/vllm-project/semantic-router/issues/5208) [Bug] Native gateway returns an empty 200 when request body reading fails `needs-acceptance` `wg/data-plane-networking` 💬1
- [#5205](https://github.com/vllm-project/semantic-router/issues/5205) [CI/Build] The Dashboard backend job has no flake retry, so every load flake waits for a human rerun `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem`
- [#5199](https://github.com/vllm-project/semantic-router/issues/5199) [Test] Make the dashboard MCP lifecycle tests wait on events, not timers `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#5202](https://github.com/vllm-project/semantic-router/issues/5202) [Bug] Saving a Global Config card writes the Router defaults it shows into config.yaml `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#5201](https://github.com/vllm-project/semantic-router/issues/5201) [Feature] Model runtime: derive a Decision input ceiling at load and enforce it at admission `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5200](https://github.com/vllm-project/semantic-router/issues/5200) [Bug] Config: decision deployments accept a task-model `input` limit that nothing enforces `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5177](https://github.com/vllm-project/semantic-router/issues/5177) [Bug] Model runtime: SIGTERM leaves the media worker and its resource tracker behind `bug` `accepted` `wg/router-models-inference-runtime`
- [#5176](https://github.com/vllm-project/semantic-router/issues/5176) [Bug] Model runtime: d3 at --dtype float32 fails to load on gfx942 with pinned BF16 kernel choices `bug` `accepted` `wg/router-models-inference-runtime`
- [#5187](https://github.com/vllm-project/semantic-router/issues/5187) [Bug] Model runtime: packed Decision 3.0 forwards fail at --dtype float32 on GPUs `bug` `accepted` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#2330](https://github.com/vllm-project/semantic-router/issues/2330) [Feature] Define portable custom-signal observations for routing recipes
- [#5093](https://github.com/vllm-project/semantic-router/issues/5093) [Bug] The vllm-sr CLI imports fcntl unconditionally, so it cannot start on Windows
- [#4966](https://github.com/vllm-project/semantic-router/issues/4966) [Bug] Milvus Router Memory Store can insert duplicate rows when an insert is retried
- [#4790](https://github.com/vllm-project/semantic-router/issues/4790) [Bug] Qdrant Router Memory Retrieve ignores access tracking
- [#3566](https://github.com/vllm-project/semantic-router/issues/3566) [Feature] Add a provider-bound PII masking plugin
- [#5154](https://github.com/vllm-project/semantic-router/issues/5154) [Bug] The 429 Retry-After header truncates a fractional wait, so clients retry early or immediately
- [#3476](https://github.com/vllm-project/semantic-router/issues/3476) [Feature] Define trusted tool and MCP capability, authorization, and stage-role facts
- [#5118](https://github.com/vllm-project/semantic-router/issues/5118) [Bug] Incomplete explicit Set probabilities can produce false routing matches
- [#4852](https://github.com/vllm-project/semantic-router/issues/4852) [Bug] An unedited Builder Deploy of the shipped config fails validation
- [#5080](https://github.com/vllm-project/semantic-router/issues/5080) [Bug] Responses store: in-memory conversation chain traversal loops forever on cyclic previous_response_id
- [#5043](https://github.com/vllm-project/semantic-router/issues/5043) [Bug] llm_timeout_seconds silently truncates fractional values, ignoring sub-second classifier timeouts
- [#4430](https://github.com/vllm-project/semantic-router/issues/4430) [Bug] Builder Deploy erases ${VAR} references and rejects configs that require them
- [#5061](https://github.com/vllm-project/semantic-router/issues/5061) [Bug] Model runtime: test_gpu_execute lock test fails on a single-GPU CUDA host
- [#4413](https://github.com/vllm-project/semantic-router/issues/4413) [Bug] Benchmark receipt mutates the shared streamed-body response on every chunk
- [#5121](https://github.com/vllm-project/semantic-router/issues/5121) [Bug] Decision 3.0 multi-question requests fail on CUDA images: varlen_attn() got an unexpected keyword argument 'scale'

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*