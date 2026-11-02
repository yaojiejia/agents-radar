# 📡 AI Ecosystem Digest — 2026-11-02

> Generated 2026-11-02 02:08 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 154,176 | 13 | 1 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 132,750 | 17 | 2 | 13 | 2 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,658 | 0 | 1 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,321 | 7 | 8 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 223,864 | 21 | 7 | 2 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,866 | 13 | 6 | 2 | 3 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 393,644 | 124 | 233 | 148 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 259,528 | 25 | 7 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 96,083 | 13 | 6 | 13 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,352 | 8 | 16 | 54 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 133,093 | 7 | 17 | 3 | 6 |
| [Ollama](https://github.com/ollama/ollama) | 185,607 | 6 | 3 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 62,501 | 9 | 11 | 0 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,933 | 11 | 22 | 164 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,174 | 5 | 0 | 3 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,362 | 9 | 17 | 0 | 0 |

---

## ✨ Highlights

- **Gemini CLI** released [v0.67.0-nightly.20261102.g6814e00d6](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261102.g6814e00d6).
- **Qwen Code** had multiple releases, including [v0.26.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.5) and [desktop-v0.26.5](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.26.5).
- **OpenAI Codex** merged [PR #58767](https://github.com/openai/codex/pull/58767) to validate `/fork` before consuming the composer draft.
- A notable new issue in **Claude Code** is [#106479](https://github.com/anthropics/claude-code/issues/106479), reporting dead keys not functioning on Windows, with 7 comments.
- **OpenCode** issue [#61122](https://github.com/anomalyco/opencode/issues/61122) highlights a core shell timeout issue, generating 6 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 154,176 · **Open issues:** 16,161 · **Last push:** 9h ago

On November 2, 2026, there were no new releases or merged pull requests for Claude Code. However, a variety of new issues were reported, with #106479 highlighting a significant bug affecting Spanish keyboard users on the Windows desktop app, where accented letters cannot be typed. Additionally, #106598 raised concerns about an unexpected usage-counting issue that led to exorbitant extra charges, while #106501 pointed out discrepancies between session management and model reporting that resulted in significant quota usage. Other notable issues included bugs related to the remote control feature and persistent problems with mobile push notifications. Overall, the day was characterized by routine maintenance, punctuated by several pressing user-reported issues.

#### 🐛 New Issues
- [#106479](https://github.com/anthropics/claude-code/issues/106479) [BUG] Windows desktop app: dead keys don't work, can't type accented letters (á, é, í, ó, ú) with Spanish (Latin America) keyboard `bug` `platform:windows` `area:desktop` 💬7
- [#106598](https://github.com/anthropics/claude-code/issues/106598) Possible usage-counting issue: weekly limit exhausted in one day and $155 in extra usage charges `bug` `area:cost` 💬2
- [#106501](https://github.com/anthropics/claude-code/issues/106501) Session started via `start_session` proposal card runs on the parent's model (Fable) while `get_session` reports `claude-opus-5-5`; Workflow agents silently inherit it — burned 43% of a weekly Fable quota in 31 minutes `bug` `platform:macos` `area:cost` `area:agents` 💬1
- [#106645](https://github.com/anthropics/claude-code/issues/106645) Me desaparecio la VISTA PERSONALIZADA que dice "Agentes" `bug` `needs-info` `area:agent-view`
- [#106644](https://github.com/anthropics/claude-code/issues/106644) [Bug] Excessive refusal and unrequested disclaimers on benign business question `bug` `platform:windows` `area:model`
- [#106643](https://github.com/anthropics/claude-code/issues/106643) [GitHub integration] `bug` `platform:web` `needs-info` `github-integration`
- [#106642](https://github.com/anthropics/claude-code/issues/106642) [FEATURE] Desktop app: bring back the Faster/Smarter effort slider (with Ultracode animation) `enhancement` `platform:windows` `area:ui` `area:desktop`
- [#106641](https://github.com/anthropics/claude-code/issues/106641) [BUG] Desktop tasks view marks a Workflow subagent "stalled" while it is blocked in a long foreground Bash call `bug` `platform:windows` `area:agent-view`
- [#106600](https://github.com/anthropics/claude-code/issues/106600) [Feature Request] Offer the German female voice from Claude voice mode for Read Aloud in the Windows desktop app `invalid` `area:desktop`
- [#106584](https://github.com/anthropics/claude-code/issues/106584) [BUG] Remote Control: reattach permanently fails with 403 instead of minting a new session `bug` `platform:macos` `area:networking` `area:desktop`
- [#106536](https://github.com/anthropics/claude-code/issues/106536) [BUG] Windows: background git calls with core.hooksPath=/dev/null make git-lfs write a stray dev/null/ hooks folder into the repo (no worktree) `bug` `has repro` `platform:windows` `area:tools`
- [#106492](https://github.com/anthropics/claude-code/issues/106492) [FEATURE] Claude Code Slides decks (Artifact tool): allow `direction` / `text-align-last` in the slide CSS subset — RTL (Persian/Arabic/Hebrew) decks can't be authored correctly `enhancement` `platform:windows` `area:a11y` `area:tools`
- [#106484](https://github.com/anthropics/claude-code/issues/106484) [BUG] Mobile push notifications do not work: PushNotification says "Mobile push requested" and nothing ever reaches the phone `duplicate` `platform:windows` `area:desktop`

#### 🔒 Closed Issues
- [#97467](https://github.com/anthropics/claude-code/issues/97467) [BUG] Paid Max 5x, weekly limit still enforced at Pro size (2nd paid week, support escalation unanswered for 5 days)

### OpenAI Codex (`openai/codex`)

**Stars:** 132,750 · **Open issues:** 25,993 · **Last push:** 2h ago

On November 2, 2026, the OpenAI Codex ecosystem saw the release of two new versions: rust-v0.167.0-alpha.3 and rust-v0.167.0-alpha.2. Key merged features included pull request #58767, which introduced validation for the `/fork` command before consuming the composer draft, and #58720, which prioritized pending approvals in the subagent picker to enhance user experience. Noteworthy issues were raised, especially #58655 and #58742, expressing concerns about the potential merging of ChatGPT and Codex usage quotas, which users fear could disrupt technical workflows, alongside issues with CLI goals stalling due to bad requests. These developments highlight ongoing user sentiment regarding workflow integrity and application performance.

#### 🚀 New Releases
- [rust-v0.167.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.3) 0.167.0-alpha.3
- [rust-v0.167.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.2) 0.167.0-alpha.2

#### ✅ Merged PRs
- [#58767](https://github.com/openai/codex/pull/58767) Validate `/fork` before consuming the composer draft
- [#58766](https://github.com/openai/codex/pull/58766) Distinguish update handoffs in TUI startup telemetry
- [#58757](https://github.com/openai/codex/pull/58757) Remove Bazel outputs from DotSlash release configs
- [#58751](https://github.com/openai/codex/pull/58751) Release superseded assistant text from live paginated history
- [#58727](https://github.com/openai/codex/pull/58727) Use local Bazel for voice release builds
- [#58722](https://github.com/openai/codex/pull/58722) Add naming and navigation helpers for TUI backend sessions
- [#58720](https://github.com/openai/codex/pull/58720) Prioritize pending approvals in the subagent picker
- [#58719](https://github.com/openai/codex/pull/58719) Wire native voice dependencies into full Rust CI
- [#58718](https://github.com/openai/codex/pull/58718) Support rendering TUI conversations within an inset area
- [#58717](https://github.com/openai/codex/pull/58717) Make Bazel checks advisory and pause Bazel release artifacts
- [#58716](https://github.com/openai/codex/pull/58716) Support OSC 52 clipboard forwarding through GNU screen
- [#58714](https://github.com/openai/codex/pull/58714) Sort agent center tasks by recency within status groups
- [#58713](https://github.com/openai/codex/pull/58713) Extract fresh session adoption from TUI session startup

#### 🐛 New Issues
- [#58655](https://github.com/openai/codex/issues/58655) [Feedback][Rate-Limits] Do NOT merge ChatGPT Web and Codex quotas in December—it breaks real technical workflows `enhancement` `rate-limits` 💬2
- [#58639](https://github.com/openai/codex/issues/58639) CLI goals repeatedly stall with {"detail":"Bad Request"}; /goal resume and restarting do not recover (0.166.0) `bug` `CLI` `agent` 💬5
- [#58742](https://github.com/openai/codex/issues/58742) Listen to your users!! Do not merge Chat and Codex/Work usage!! `enhancement` `rate-limits` 💬2
- [#58642](https://github.com/openai/codex/issues/58642) PPTX attachments leave Send spinning indefinitely in macOS desktop app (drag-and-drop and file picker) `bug` `app` 💬3
- [#58754](https://github.com/openai/codex/issues/58754) Codex Desktop migration: existing local projects disappeared from Projects sidebar after update `bug` `windows-os` `app` `session` 💬2
- [#58780](https://github.com/openai/codex/issues/58780) Windows Browser gates disagree with saved Always allow settings (26.1027.3384.0) `bug` `windows-os` `app` `browser` 💬2
- [#58723](https://github.com/openai/codex/issues/58723) [Plus feedback] Pilot sustainable usage increases, preserve ChatGPT/Codex value, and make agent quota costs auditable `enhancement` `rate-limits` `context` `subagent` 💬2
- [#58779](https://github.com/openai/codex/issues/58779) Windows MCP connector fails decoding HTTP responses; Linear works with HTTP/2 and bodyless 202 workaround `bug` `windows-os` `mcp` `app` 💬1
- [#58777](https://github.com/openai/codex/issues/58777) Reconnecting... waiting for network `bug` `app` `connectivity` 💬1
- [#58773](https://github.com/openai/codex/issues/58773) Windows 10: Computer Use screenshot timeouts and missing click geometry on 26.1027.30824 / Sky 0.7.13 `bug` `windows-os` `app` `computer-use` 💬1
- [#58772](https://github.com/openai/codex/issues/58772) Codex CLI cannot connect to Google Chrome `bug` `CLI` `computer-use` `browser` 💬1
- [#58771](https://github.com/openai/codex/issues/58771) Independent ChatGPT and Codex Desktop Applications `enhancement` `app` 💬1
- [#58770](https://github.com/openai/codex/issues/58770) [macOS][Chat][Projects] Existing project conversations can suddenly become persistently unopenable `bug` `app` `session` 💬1
- [#58781](https://github.com/openai/codex/issues/58781) Race condition: `/btw some-prompt-here` followed by Ctrl-/ switching can run the prompt on the main thread rather than the side `bug` `TUI` `CLI` `session`
- [#58778](https://github.com/openai/codex/issues/58778) Codex Desktop MCP approval-response bug blocks AST-MCP repository access `bug` `mcp` `app` `app-server`
- [#58775](https://github.com/openai/codex/issues/58775) VS Code extension: switching the Codex login requires Reload Window; add "Codex: Restart App Server" and respawn after an unexpected exit `enhancement` `extension` `auth` `app-server`
- [#58769](https://github.com/openai/codex/issues/58769) [Desktop/SSH] LaTeX preview drops remote project dependencies and compiles only document.tex `bug` `app` `remote`

#### 🔒 Closed Issues
- [#17764](https://github.com/openai/codex/issues/17764) Codex usage quota and credit balance appear inconsistent and possibly stuck.
- [#56760](https://github.com/openai/codex/issues/56760) Windows: Workspace Dependencies reinstall retains Node v24.19.0 in bundle 26.1017.22136

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,658 · **Open issues:** 770 · **Last push:** <1h ago

On November 2, 2026, Gemini CLI released version v0.67.0-nightly.20261102.g6814e00d6, which includes updates and improvements detailed in the full changelog. There were no merged pull requests or new issues reported within the last 24 hours, indicating a routine maintenance day for the project. Despite the lack of new features or issues, users may find the latest nightly build worth exploring for ongoing enhancements.

#### 🚀 New Releases
- [v0.67.0-nightly.20261102.g6814e00d6](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261102.g6814e00d6) Release v0.67.0-nightly.20261102.g6814e00d6

#### 🔒 Closed Issues
- [#28886](https://github.com/google-gemini/gemini-cli/issues/28886) GeminiCLI.com Feedback: [ISSUE]

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,321 · **Open issues:** 2,181 · **Last push:** 1d ago

On November 2, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI. The issue tracker saw several new reports, the most significant being issue #5318, which addresses a problem where the grep compaction feature corrupts filenames and line numbers while merging distinct files. Other notable entries include issue #5315, proposing a voice mode for Remote Control via GitHub Mobile, and issue #5313 about remote sessions getting stuck on "Working" indefinitely in the iOS app. The team will likely focus on these issues in upcoming developments.

#### 🐛 New Issues
- [#5318](https://github.com/github/copilot-cli/issues/5318) Copilot CLI grep compaction corrupts filenames and line numbers, and merges distinct files `triage` 💬1
- [#5315](https://github.com/github/copilot-cli/issues/5315) Remote Control: voice mode from GitHub Mobile (talk to the session, hear spoken replies) `triage` 💬1
- [#5319](https://github.com/github/copilot-cli/issues/5319) Cloud relay sessions are unavailable in this CLI configuration `triage`
- [#5317](https://github.com/github/copilot-cli/issues/5317) The checkpoint list in the system prompt changes after /compact, so the next call writes the prompt cache again `triage`
- [#5316](https://github.com/github/copilot-cli/issues/5316) Remote Control: show nested (child) sessions on GitHub Mobile and github.com, like the VS Code Agents window `triage`
- [#5314](https://github.com/github/copilot-cli/issues/5314) Support armv7l `triage`
- [#5313](https://github.com/github/copilot-cli/issues/5313) GitHub Mobile (iOS): Copilot CLI Remote Sessions Stuck on “Working” Indefinitely `triage`

#### 🔒 Closed Issues
- [#738](https://github.com/github/copilot-cli/issues/738) Tool name's mismatched between Copilot products
- [#4560](https://github.com/github/copilot-cli/issues/4560) Model "auto" always runs with reasoning effort disabled (reasoningEffort: null), and rejects any attempt to configure one
- [#1570](https://github.com/github/copilot-cli/issues/1570) Startup hint "No copilot instructions found" is misleading when user-level instructions exist
- [#4400](https://github.com/github/copilot-cli/issues/4400) Fix browser login URL wrapping and fallback
- [#2054](https://github.com/github/copilot-cli/issues/2054) Support Monday.com MCP
- [#5264](https://github.com/github/copilot-cli/issues/5264) Prompt is discarded after 'Submission failed' (host-ack timeout): composer cleared, not saved to history, delivered late or never
- [#4425](https://github.com/github/copilot-cli/issues/4425) Constrain `run_factory` to registered factory names to prevent repeated guesses
- [#4347](https://github.com/github/copilot-cli/issues/4347) Streaming long Markdown links repeatedly reflow tables

### OpenCode (`anomalyco/opencode`)

**Stars:** 223,864 · **Open issues:** 3,764 · **Last push:** <1h ago

On November 2, 2026, there were no new releases for OpenCode. Significant developments included the merging of PR #61132, which refactored the core by splitting the MCP connection from its location, and PR #61074, which fixed the core to reuse Console skill downloads and ensure skills are retained even if a download fails. Notably, new issues arose, including #61122, where users reported that the shell timeout does not start when process creation stalls, and #61010, which addresses a desynchronization issue in the TUI’s plan/build mode between the UI and agent. Other issues included commands in the OpenCode terminal failing to execute properly (#61109) and concurrent npm installations of plugins causing LockTimeoutErrors (#61131).

#### ✅ Merged PRs
- [#61132](https://github.com/anomalyco/opencode/pull/61132) refactor(core): split the MCP connection from its location
- [#61074](https://github.com/anomalyco/opencode/pull/61074) fix(core): reuse Console skill downloads and keep skills when a download fails

#### 🐛 New Issues
- [#61122](https://github.com/anomalyco/opencode/issues/61122) core: shell timeout never starts when process creation stalls `reproduced` 💬6
- [#61010](https://github.com/anomalyco/opencode/issues/61010) tui: plan/build mode state desyncs between UI and agent, causing unauthorized or refused work `triaging` 💬4
- [#61003](https://github.com/anomalyco/opencode/issues/61003) agent: degenerate meta-planning loop - turn produces zero output, reasoning leaks into reply `triaging` 💬3
- [#61125](https://github.com/anomalyco/opencode/issues/61125) 2 dias de task, Stop (não Delete), workspace sumiu. `triaging` 💬3
- [#61133](https://github.com/anomalyco/opencode/issues/61133) Windows: admin terminal opens C:\Windows\System32 as the project 💬2
- [#61127](https://github.com/anomalyco/opencode/issues/61127) Что делать `pending close` `triaging` 💬2
- [#61123](https://github.com/anomalyco/opencode/issues/61123) [FEATURE]: how to know the default model setting ? /models `triaging` 💬2
- [#61109](https://github.com/anomalyco/opencode/issues/61109) [BUG] The OpenCode terminal appears unable to execute commands properly. `triaging` 💬2
- [#61131](https://github.com/anomalyco/opencode/issues/61131) plugins: concurrent npm install of the same plugin across locations fails with LockTimeoutError 💬1
- [#61126](https://github.com/anomalyco/opencode/issues/61126) Обманывает `pending close` `triaging` 💬1
- [#61121](https://github.com/anomalyco/opencode/issues/61121) worktree_remove is gated only by edit, so a file-editing agent can delete its own worktree (uncommitted work included) 💬1
- [#61118](https://github.com/anomalyco/opencode/issues/61118) fix(core): avoid holding models.dev refresh lock across network timeout 💬1
- [#61119](https://github.com/anomalyco/opencode/issues/61119) fix(tui): retry writeJsonAtomic on transient EPERM rename collisions on Windows 💬1
- [#61117](https://github.com/anomalyco/opencode/issues/61117) [FEATURE]: Let plugins provide worktree setup command defaults 💬1
- [#61116](https://github.com/anomalyco/opencode/issues/61116) [FEATURE]: Expand synthetic updates in the web/desktop transcript 💬1
- [#61115](https://github.com/anomalyco/opencode/issues/61115) [DISCUSSION] Settings: order, priority and clarifications for agents, models, variants and providers 💬1
- [#61027](https://github.com/anomalyco/opencode/issues/61027) error in limits `pending close` `triaging` 💬1
- [#61113](https://github.com/anomalyco/opencode/issues/61113) TUI crash: Authentication required `triaging` 💬1
- [#61110](https://github.com/anomalyco/opencode/issues/61110) provider.opencode whitelist/blacklist has no effect on the built-in opencode (zen) provider's model picker `pending close` `triaging` 💬1
- [#61106](https://github.com/anomalyco/opencode/issues/61106) db: latest CLI (1.19.5) fails on DB migrated by desktop app ("Database is not empty and has no session table") `pending close` `triaging` 💬1
- [#61114](https://github.com/anomalyco/opencode/issues/61114) console: opencode-go still offers models and policies disabled for the workspace

#### 🔒 Closed Issues
- [#60792](https://github.com/anomalyco/opencode/issues/60792) Anthropic server-side fallback: summed iteration usage makes the next step see about twice the real prompt size
- [#60990](https://github.com/anomalyco/opencode/issues/60990) Free-tier BigPickle quota is exhausted almost instantly (1–5 min / ~5 messages), forcing a 24-hour cooldown
- [#60400](https://github.com/anomalyco/opencode/issues/60400) Open ai thoughts summaries not showing
- [#60982](https://github.com/anomalyco/opencode/issues/60982) Feature Request: Provide Node.js fallback or compatibility mode for older non-SSE4.2 CPUs
- [#60991](https://github.com/anomalyco/opencode/issues/60991) Free-tier quota is IP-bucketed, not account-bucketed: pre-exhausted shared IPs block users on their very first request
- [#60993](https://github.com/anomalyco/opencode/issues/60993) ## OpenCode Zen free-model quota exhausted after 1–2 prompts on v2
- [#60962](https://github.com/anomalyco/opencode/issues/60962) Issue you have used todays free messages.

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,866 · **Open issues:** 2,086 · **Last push:** <1h ago

On November 2, 2026, Qwen Code released version 0.26.5, which introduces bounded SQL history queries for Managed local H2 and Hosted MySQL, enhancing the ability to query recent messages and journal transactions. Additionally, the nightly build 0.26.5-nightly.20261101.7b4b353750 was made available, featuring a shared session event delivery loop and updates to CI processes. Among the merged pull requests, notable fixes include sanitization for goal approval text in the web shell and a test addressing two-server first release refusal issues. The day also saw the emergence of new issues, with the most pressing being the failure to publish the sandbox image for version 0.26.5, indicating potential setbacks in deployment processes.

#### 🚀 New Releases
- [v0.26.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.5) Release v0.26.5
- [v0.26.5-nightly.20261101.7b4b353750](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.5-nightly.20261101.7b4b353750) Release v0.26.5-nightly.20261101.7b4b353750
- [desktop-v0.26.5](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.26.5) Qwen Code Desktop v0.26.5

#### ✅ Merged PRs
- [#16080](https://github.com/QwenLM/qwen-code/pull/16080) fix(web-shell): sanitise goal approval text and edit paths
- [#16089](https://github.com/QwenLM/qwen-code/pull/16089) test(managed-agent): gate the two-server first release refusal

#### 🐛 New Issues
- [#16039](https://github.com/QwenLM/qwen-code/issues/16039) Sandbox image for 0.26.5 not published: release build job failed `type/bug` `scope/ci-cd` 💬3
- [#16088](https://github.com/QwenLM/qwen-code/issues/16088) Image paste is dropped silently when the clipboard also carries text `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#16063](https://github.com/QwenLM/qwen-code/issues/16063) VS Code companion spontaneously opens the extension's bundled generated-ui/main.js (Generated UI MCP server spawned as Electron GUI instead of Node) `priority/P2` `type/bug` `category/cli` `scope/mcp` 💬2
- [#16078](https://github.com/QwenLM/qwen-code/issues/16078) bug(permissions): remaining malformed rule shapes parse as inert without a report (`Bash(rm -rf /))`, `Bash)`) `priority/P2` `type/bug` `category/security` `scope/settings` 💬2
- [#16065](https://github.com/QwenLM/qwen-code/issues/16065) ci(smoke): web-shell E2E Smoke lane — settings-exclusions and lazy-session-preview @smoke tests fail under suite load, PR-independent `priority/P1` `type/bug` `category/development` `scope/testing` 💬2
- [#16058](https://github.com/QwenLM/qwen-code/issues/16058) fix(serve): session cd drops gated MCP approvals when the workspace configuration source is unchanged `priority/P2` `type/bug` `category/configuration` `scope/session-management` 💬2
- [#16057](https://github.com/QwenLM/qwen-code/issues/16057) Managed Agent --check ignores the configuration files the server reads from its working directory `priority/P2` `type/bug` `category/configuration` `status/ready-for-human` 💬2
- [#16086](https://github.com/QwenLM/qwen-code/issues/16086) Shared Channel sessions prevent request owners from approving their own tool calls `priority/P2` `type/bug` `category/authentication` `scope/session-management` 💬2
- [#16031](https://github.com/QwenLM/qwen-code/issues/16031) Release Failed for v0.26.4-nightly.20261031.06c1f98971 on 2026-11-01 `status/blocked` `type/bug` `autofix/skip` 💬2
- [#16036](https://github.com/QwenLM/qwen-code/issues/16036) feat(web-shell): surface task Q&A activity above the composer `priority/P3` `type/feature-request` `category/ui` `need-discussion` 💬2
- [#16092](https://github.com/QwenLM/qwen-code/issues/16092) Main CI failed: SDK Java — HostedWorkspaceToolTurnIT.cancellationRequiresPhysicalSettlementOnMySql `status/needs-triage` `type/bug` 💬1
- [#16093](https://github.com/QwenLM/qwen-code/issues/16093) Sandbox image for 0.26.5-nightly.20261101.7b4b353750 not published: release build job failed `type/bug` `scope/ci-cd`
- [#16091](https://github.com/QwenLM/qwen-code/issues/16091) Main CI failed: Qwen Code CI — src/utils/bun-pty.node-bun.test.ts > … > 'node': 300 no-gap toggles during a 5000-line flood stay byte-exact (+1 more) `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#15898](https://github.com/QwenLM/qwen-code/issues/15898) ci(managed-agent): Hosted process fault gates fail on main — postFailureLoads varies run to run
- [#12514](https://github.com/QwenLM/qwen-code/issues/12514) Session-commit registration does not cover every path or spelling that can land a commit (false "not made by the agent in this session" amend block)
- [#15600](https://github.com/QwenLM/qwen-code/issues/15600) Headless -p refuses read-only shell commands that use 2>&1: fd duplication is parsed as a write to a file named "&1"
- [#15744](https://github.com/QwenLM/qwen-code/issues/15744) Main CI failed: SDK Java — HostedWorkflowRelayFaultGatesIT.fg10bLostRepliesNeverRunAWorkflowTwiceOnMySql
- [#15537](https://github.com/QwenLM/qwen-code/issues/15537) bug(core): drained loop warning can be lost before model send while telemetry records delivery
- [#16025](https://github.com/QwenLM/qwen-code/issues/16025) Main CI failed: Qwen Code CI — src/config/settings.test.ts > … > ignores the workspace approval mode list [ 'default' ] in favor of the user… (+118 more)

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

**Stars:** 393,644 · **Open issues:** 7,732 · **Last push:** <1h ago

On November 2, 2026, there were no new releases for OpenClaw, but several important pull requests were merged, notably updating the runtime to version 0.10.0, which may influence future performance and compatibility. Fixes included addressing issues with the CLI's npm command handling on Windows and ensuring better management of browser audio during clock changes. A significant bug report was logged concerning the Talk agent-consult that improperly branches the user's spoken utterance from the visible transcript, highlighting a critical usability concern within the interaction model. Overall, the day's focus was primarily on routine maintenance and enhancements, with a few noteworthy improvements in stability and user experience.

#### ✅ Merged PRs
- [#190004](https://github.com/openclaw/openclaw/pull/190004) chore(tokenjuice): update runtime to 0.10.0
- [#190777](https://github.com/openclaw/openclaw/pull/190777) fix: align clean-install agent exec live expectations
- [#120232](https://github.com/openclaw/openclaw/pull/120232) fix(ci): route Knip cleanup owners to Windows
- [#190781](https://github.com/openclaw/openclaw/pull/190781) fix: restore prepared registry reuse for plugin subagent completions
- [#190775](https://github.com/openclaw/openclaw/pull/190775) fix(ui): distinguish hydrated composer readiness in warm probe
- [#190760](https://github.com/openclaw/openclaw/pull/190760) test(matrix): exercise the canonical approval error classifier
- [#187771](https://github.com/openclaw/openclaw/pull/187771) refactor: consolidate Codex fixture text-turn completion
- [#167259](https://github.com/openclaw/openclaw/pull/167259) fix(gateway): standing-grant cards can split emoji at display caps
- [#190762](https://github.com/openclaw/openclaw/pull/190762) fix(ci): terminate Android cleanup when emulator is unavailable
- [#190707](https://github.com/openclaw/openclaw/pull/190707) refactor(models): define compatibility at the schema owner
- [#190766](https://github.com/openclaw/openclaw/pull/190766) fix(meetings): keep browser audio alive through clock changes
- [#190767](https://github.com/openclaw/openclaw/pull/190767) fix(infra): avoid macOS Tailscale lookup on Linux and Windows
- [#190761](https://github.com/openclaw/openclaw/pull/190761) fix(cli): stop cloning the state database for Gateway RPC commands
- [#190758](https://github.com/openclaw/openclaw/pull/190758) fix(ci): align CLI announce proof with native steering
- [#190589](https://github.com/openclaw/openclaw/pull/190589) perf(control-ui): show placed dashboard conversations immediately
- [#190754](https://github.com/openclaw/openclaw/pull/190754) ci(ios): explain screenshot Xcode mismatch
- [#190736](https://github.com/openclaw/openclaw/pull/190736) test(matrix): check defaults against independent expectations
- [#190747](https://github.com/openclaw/openclaw/pull/190747) ci: support empty admission args on Bash 3.2
- [#190755](https://github.com/openclaw/openclaw/pull/190755) docs(release): identify FRV parent publish input
- [#190746](https://github.com/openclaw/openclaw/pull/190746) ci: add base scheduled upgrade survivor
- [#190626](https://github.com/openclaw/openclaw/pull/190626) refactor(ui): reuse shared UTF-16 hash
- [#190744](https://github.com/openclaw/openclaw/pull/190744) fix: explain model policy refusals when spawning agents
- [#190745](https://github.com/openclaw/openclaw/pull/190745) fix: honor explicit npm and npx commands on Windows
- [#190742](https://github.com/openclaw/openclaw/pull/190742) improve(test): speed up sidebar owner-filter E2E coverage
- [#190734](https://github.com/openclaw/openclaw/pull/190734) fix(plugins): install local file URLs on Windows
- [#190085](https://github.com/openclaw/openclaw/pull/190085) test(git): isolate nested repository fixtures
- [#190731](https://github.com/openclaw/openclaw/pull/190731) refactor: reuse pending promise owner in runner lanes
- [#190735](https://github.com/openclaw/openclaw/pull/190735) fix(queue): stop advertising ignored execution timeouts
- [#190733](https://github.com/openclaw/openclaw/pull/190733) improve: speed up session-management E2E tests
- [#187317](https://github.com/openclaw/openclaw/pull/187317) [2026.9.36] Escape terminal controls in gateway discovery
- [#187318](https://github.com/openclaw/openclaw/pull/187318) [2026.9.36] Avoid repeated native-reference namespace validation
- [#190723](https://github.com/openclaw/openclaw/pull/190723) fix(gateway): explain Tailscale ingress loss during recovery
- [#190196](https://github.com/openclaw/openclaw/pull/190196) fix(voice-call): preserve spaces after Unicode transcript overlaps
- [#188633](https://github.com/openclaw/openclaw/pull/188633) fix(macos): screen.record reports requested instead of recorded duration/fps
- [#190725](https://github.com/openclaw/openclaw/pull/190725) chore(matrix): trim unused send fixtures and assertions
- [#190643](https://github.com/openclaw/openclaw/pull/190643) fix(codex): retain compatible tool catalogs on settled local threads
- [#190730](https://github.com/openclaw/openclaw/pull/190730) fix: preserve multiline Slack, Feishu, and Zalo command arguments
- [#190729](https://github.com/openclaw/openclaw/pull/190729) fix(exec): preserve no-timeout results from macOS app nodes
- [#190726](https://github.com/openclaw/openclaw/pull/190726) fix(ci): avoid premature Talk title test failure
- [#190594](https://github.com/openclaw/openclaw/pull/190594) fix(computer): preserve field and browser typing whitespace
- [#190672](https://github.com/openclaw/openclaw/pull/190672) refactor(ui): share image lightbox item view
- [#190714](https://github.com/openclaw/openclaw/pull/190714) chore(matrix): remove retired text runtime fixtures
- [#190724](https://github.com/openclaw/openclaw/pull/190724) improve(test): reduce motion in session owner filter E2E
- [#190722](https://github.com/openclaw/openclaw/pull/190722) fix(discord): preserve compaction notices in progress mode
- [#190717](https://github.com/openclaw/openclaw/pull/190717) fix(discord): avoid false failure notices for queued thread answers
- [#190713](https://github.com/openclaw/openclaw/pull/190713) fix: account for Doctor backup receipts in mixed database test
- [#190716](https://github.com/openclaw/openclaw/pull/190716) fix(ci): align cold-storage fixtures with retained navigation
- [#190695](https://github.com/openclaw/openclaw/pull/190695) fix(google): Gemini models ignore configured topP
- [#190715](https://github.com/openclaw/openclaw/pull/190715) fix(active-memory): German recall questions skip deep recall
- [#190701](https://github.com/openclaw/openclaw/pull/190701) test: reuse PostgreSQL conformance worker result handling
- [#190700](https://github.com/openclaw/openclaw/pull/190700) fix(cua-computer): restore desktop element references with CUA 0.37
- [#190711](https://github.com/openclaw/openclaw/pull/190711) fix: clear the unused image lightbox export
- [#190704](https://github.com/openclaw/openclaw/pull/190704) fix(test): verify hover guard preserves declarations
- [#190708](https://github.com/openclaw/openclaw/pull/190708) test: share streamed installer help process setup
- [#190710](https://github.com/openclaw/openclaw/pull/190710) fix: preserve pasted links after Markdown reference citations
- [#190699](https://github.com/openclaw/openclaw/pull/190699) fix(ci): provision keyring for Gateway repo E2E
- [#190697](https://github.com/openclaw/openclaw/pull/190697) test: consolidate keyless session publication cases
- [#190690](https://github.com/openclaw/openclaw/pull/190690) fix(sessions): stop expanding archive reads from exhausting memory
- [#190706](https://github.com/openclaw/openclaw/pull/190706) fix(firecrawl): keep search and scrape keys with their scoped endpoints
- [#190680](https://github.com/openclaw/openclaw/pull/190680) test: share trusted proxy Control UI auth fixture
- [#190703](https://github.com/openclaw/openclaw/pull/190703) fix(voice-call): forward brief language to realtime transcription
- [#190698](https://github.com/openclaw/openclaw/pull/190698) fix: preserve per-message context in collected turns
- [#190587](https://github.com/openclaw/openclaw/pull/190587) refactor(video): separate provider host contracts
- [#190679](https://github.com/openclaw/openclaw/pull/190679) fix(test): restore QMD filesystem spy after assertions
- [#190628](https://github.com/openclaw/openclaw/pull/190628) fix(release): bound publication observation pressure
- [#190676](https://github.com/openclaw/openclaw/pull/190676) fix: unblock Doctor upgrades from beta v16 agent databases
- [#190678](https://github.com/openclaw/openclaw/pull/190678) test: share scheduled restart requester driver
- [#190689](https://github.com/openclaw/openclaw/pull/190689) fix(ci): keep Node-prefix diagnostics internal
- [#190688](https://github.com/openclaw/openclaw/pull/190688) fix(daemon): keep Node prefix helpers private
- [#190685](https://github.com/openclaw/openclaw/pull/190685) fix(cli): list cameras from legacy Windows nodes
- [#190674](https://github.com/openclaw/openclaw/pull/190674) fix: stop update child processes on timeout and cancellation
- [#190668](https://github.com/openclaw/openclaw/pull/190668) refactor(qa): share OTLP repeated message traversal
- [#190677](https://github.com/openclaw/openclaw/pull/190677) fix(ui): make goal Resume control icon-only
- [#190530](https://github.com/openclaw/openclaw/pull/190530) fix(status): honor selected context windows in usage reports
- [#190656](https://github.com/openclaw/openclaw/pull/190656) refactor(sessions): share pending input history eligibility
- [#190659](https://github.com/openclaw/openclaw/pull/190659) fix(test): pin memory flush fallback timezone
- [#190671](https://github.com/openclaw/openclaw/pull/190671) fix(test): restore one-shot process cleanup coverage
- [#190663](https://github.com/openclaw/openclaw/pull/190663) refactor(qa): share fixture cleanup list execution
- [#190665](https://github.com/openclaw/openclaw/pull/190665) fix(doctor): allow config promotion after plugin migration guidance changes
- [#190637](https://github.com/openclaw/openclaw/pull/190637) fix(agents): preserve direct command reply mode across recovery
- [#190669](https://github.com/openclaw/openclaw/pull/190669) fix(gateway): explain restart refusal after hostname drift
- [#190667](https://github.com/openclaw/openclaw/pull/190667) fix: bound transcript lists when meetings are inaccessible
- [#190632](https://github.com/openclaw/openclaw/pull/190632) fix(recovery): settle confirmed final deliveries before reporting exhausted retries
- [#190603](https://github.com/openclaw/openclaw/pull/190603) fix(gateway): distinguish healthy planned drains until their deadline
- [#190662](https://github.com/openclaw/openclaw/pull/190662) fix: keep documented history benchmark in unused-file checks
- [#190664](https://github.com/openclaw/openclaw/pull/190664) fix(agents): avoid empty tool schema settlement
- [#190639](https://github.com/openclaw/openclaw/pull/190639) fix(codex): settle restored children on matched parent completion
- [#190604](https://github.com/openclaw/openclaw/pull/190604) fix(codex): retry the original thread after a transient closing rejection
- [#190654](https://github.com/openclaw/openclaw/pull/190654) refactor(qa): reuse identity inspection proof completion
- [#190661](https://github.com/openclaw/openclaw/pull/190661) fix: GitHub identity setup failures lack a diagnostic cause
- [#190650](https://github.com/openclaw/openclaw/pull/190650) fix: clarify pending agent startup admission guidance
- [#190644](https://github.com/openclaw/openclaw/pull/190644) fix(oc-path): blank writes make Markdown fields unreadable
- [#190630](https://github.com/openclaw/openclaw/pull/190630) fix(ci): restore runtime module line limits
- [#190622](https://github.com/openclaw/openclaw/pull/190622) fix(daemon): diagnose split Node installations with effective repair advice
- [#190655](https://github.com/openclaw/openclaw/pull/190655) fix(ui): avoid duplicate CLI replies during transcript persistence
- [#190636](https://github.com/openclaw/openclaw/pull/190636) chore(test): remove implied CLI output tail assertions
- [#190653](https://github.com/openclaw/openclaw/pull/190653) fix: wait for Cron history reset in delivery tests
- [#190651](https://github.com/openclaw/openclaw/pull/190651) fix: isolate FaceTime fallback test disconnects
- [#190648](https://github.com/openclaw/openclaw/pull/190648) refactor(ui): share mutation target lookup
- [#190652](https://github.com/openclaw/openclaw/pull/190652) fix(doctor): reconcile missing retained duplicate archives
- [#190627](https://github.com/openclaw/openclaw/pull/190627) perf(agents): reuse tool schema projections across runs
- [#189769](https://github.com/openclaw/openclaw/pull/189769) fix(control-ui): keep cached Details progress until live facts differ
- [#190570](https://github.com/openclaw/openclaw/pull/190570) fix: keep PR read retirement helper private
- [#190491](https://github.com/openclaw/openclaw/pull/190491) refactor(image): separate provider host contracts
- [#190634](https://github.com/openclaw/openclaw/pull/190634) improve(test): speed up PostgreSQL preservation checks
- [#190330](https://github.com/openclaw/openclaw/pull/190330) chore(ui): add older-history paging depth benchmark
- [#190327](https://github.com/openclaw/openclaw/pull/190327) improve(ui): older chat history pages no longer rebuild every loaded row
- [#190631](https://github.com/openclaw/openclaw/pull/190631) test(ui): share deferred recovery hydration fixture
- [#190030](https://github.com/openclaw/openclaw/pull/190030) fix(packaging): exclude source-build ledgers from npm packages
- [#190614](https://github.com/openclaw/openclaw/pull/190614) fix: Windows singleton smoke fails after passing assertions
- [#190638](https://github.com/openclaw/openclaw/pull/190638) docs(sandbox): clarify container reuse, users, and daemon selection
- [#190598](https://github.com/openclaw/openclaw/pull/190598) fix(cron): let scheduled jobs read their own delivery receipts
- [#190596](https://github.com/openclaw/openclaw/pull/190596) chore(test): remove retired dreaming queue setup
- [#190629](https://github.com/openclaw/openclaw/pull/190629) chore(ui): refresh control ui locales
- [#190623](https://github.com/openclaw/openclaw/pull/190623) refactor(agents): share scheduled candidate start admission
- [#190625](https://github.com/openclaw/openclaw/pull/190625) fix: distinguish content-inventory failures in update reports
- [#190616](https://github.com/openclaw/openclaw/pull/190616) perf(sessions): reduce actor creation allocations
- [#190576](https://github.com/openclaw/openclaw/pull/190576) fix: refresh prepared PRs from the live target branch
- [#190617](https://github.com/openclaw/openclaw/pull/190617) fix: keep decision model help in an info tooltip
- [#190602](https://github.com/openclaw/openclaw/pull/190602) fix(ui): stabilize standalone picker geometry tests
- [#190599](https://github.com/openclaw/openclaw/pull/190599) refactor(copilot): share user turn recorder fixture
- [#190618](https://github.com/openclaw/openclaw/pull/190618) fix(config): redact inline environment credentials in config reads
- [#190592](https://github.com/openclaw/openclaw/pull/190592) refactor(update): reuse fresh package manager discovery
- [#190613](https://github.com/openclaw/openclaw/pull/190613) fix(talk): generate automatic titles for voice-only sessions
- [#190612](https://github.com/openclaw/openclaw/pull/190612) fix(daemon): clarify launchd inspection failures over SSH
- [#190611](https://github.com/openclaw/openclaw/pull/190611) fix(ci): remove unused media output type re-export
- [#190591](https://github.com/openclaw/openclaw/pull/190591) refactor(tooling): share lexical binding scope selection
- [#190335](https://github.com/openclaw/openclaw/pull/190335) test(anthropic): cover repeated stdin failure notifications
- [#190600](https://github.com/openclaw/openclaw/pull/190600) fix(ui): show restart resume notice timestamps
- [#190588](https://github.com/openclaw/openclaw/pull/190588) refactor(slack): remove duplicate threading regression
- [#190509](https://github.com/openclaw/openclaw/pull/190509) fix(tts): honor the channel output hint before the channel registry loads
- [#190597](https://github.com/openclaw/openclaw/pull/190597) docs(plugins): explain external channel secret artifacts
- [#190581](https://github.com/openclaw/openclaw/pull/190581) fix(test): catch trimmed system-agent secret echoes
- [#190590](https://github.com/openclaw/openclaw/pull/190590) fix(codex): preserve workspace instructions on restricted sandbox turns
- [#190583](https://github.com/openclaw/openclaw/pull/190583) refactor(doctor): share heartbeat retirement runner
- [#190586](https://github.com/openclaw/openclaw/pull/190586) chore(ui): retain sidebar deletion write diagnostics
- [#190579](https://github.com/openclaw/openclaw/pull/190579) improve(ai): reduce continuation commit overhead on long histories
- [#190580](https://github.com/openclaw/openclaw/pull/190580) improve(agents): spend less CPU escaping ordinary message text
- [#190571](https://github.com/openclaw/openclaw/pull/190571) fix(update): preserve unfinished handoff artifacts
- [#190578](https://github.com/openclaw/openclaw/pull/190578) refactor(qa): share Discord voice-state polling
- [#190577](https://github.com/openclaw/openclaw/pull/190577) fix: keep background command results in Discord auto-threads
- [#190465](https://github.com/openclaw/openclaw/pull/190465) feat(ui): preview background session starts on their route
- [#190466](https://github.com/openclaw/openclaw/pull/190466) fix(talk): retain readiness during relay startup
- [#190553](https://github.com/openclaw/openclaw/pull/190553) chore(test): remove duplicate memory search setup and checks
- [#190575](https://github.com/openclaw/openclaw/pull/190575) fix(update): clean npm git-source pack directories when steps throw
- [#190574](https://github.com/openclaw/openclaw/pull/190574) fix(daemon): show launcher inspection failures in gateway status
- [#190568](https://github.com/openclaw/openclaw/pull/190568) fix: isolate playback single-flight fixtures by MIME type
- [#190507](https://github.com/openclaw/openclaw/pull/190507) fix(boards): keep updated widget in place when placement names its current tab

#### 🐛 New Issues
- [#190584](https://github.com/openclaw/openclaw/issues/190584) [Bug]: Talk agent-consult orphan repair branches the user's spoken utterance off the visible transcript `P1` `impact:session-state` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬3
- [#190739](https://github.com/openclaw/openclaw/issues/190739) Update failure: package-install-omit-optional (2026.10.5) `clawsweeper:intake:bug` `clawsweeper:intake:needs-repro` 💬2
- [#190670](https://github.com/openclaw/openclaw/issues/190670) [Bug]: Requester gets no settle wake after a native subagent completes (2026.10.8), twice in one day `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#190684](https://github.com/openclaw/openclaw/issues/190684) [Bug]: Node-prefix helpers fail strict unused-export validation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#190666](https://github.com/openclaw/openclaw/issues/190666) Upgrade 2026.7.2-beta.6 → 2026.10.9: media-persistence refuses v16 agent DBs missing session_nodes_entry_valid_* triggers; doctor --fix deadlocks and Gateway can't start `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#190683](https://github.com/openclaw/openclaw/issues/190683) [Bug]: Stale quarantine row makes every agent-DB open SHA-256 the whole database twice (memory_search ~10 s, turn prep +10 s) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#190620](https://github.com/openclaw/openclaw/issues/190620) Feature: session export command — docs recommend exporting sessions, but there's no export `P3` `impact:ux-friction` 💬2
- [#190536](https://github.com/openclaw/openclaw/issues/190536) Plugin compatibility notices cite retirement dates that have already passed, and still say "keeps working until then" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#190658](https://github.com/openclaw/openclaw/issues/190658) [Bug]: git update fails with config-lock-refused because Doctor rewrites plugin migration obligation reason/command mid-run `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#190649](https://github.com/openclaw/openclaw/issues/190649) agents/loop-detection re-emits a pinned, stale counter on a ~1s timer for sessions with no active run `P2` `impact:other` 💬2
- [#190607](https://github.com/openclaw/openclaw/issues/190607) [Docs]: Isolated automation model precedence leaves out subagents.model, which outranks the agent's own model `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#190624](https://github.com/openclaw/openclaw/issues/190624) [Bug]: Update reports hide which content-inventory check failed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#190585](https://github.com/openclaw/openclaw/issues/190585) [Bug]: Voice-only (Talk) sessions never get an automatic title `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#190413](https://github.com/openclaw/openclaw/issues/190413) Telegram rich messages (Bot API 10.3 blocks) lose Markdown paragraph blank lines `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬2
- [#190476](https://github.com/openclaw/openclaw/issues/190476) memory-wiki: refreshing a synthesis without --status resets a curated status to active `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#190502](https://github.com/openclaw/openclaw/issues/190502) Update failure: finalize-doctor (2026.10.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#190493](https://github.com/openclaw/openclaw/issues/190493) [Feature]: iOS sidebar should order session groups by recent activity `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#190457](https://github.com/openclaw/openclaw/issues/190457) [Bug]: Active Memory spends its recall deadline rediscovering its bounded two-tool allowlist `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#190411](https://github.com/openclaw/openclaw/issues/190411) 2026.10.9: pending plugin migration hands voice-call an empty config, so a disabled plugin starts with defaults and the update rolls back `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#190424](https://github.com/openclaw/openclaw/issues/190424) [Feature]: Cover the session navigation owner with tests `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#190264](https://github.com/openclaw/openclaw/issues/190264) infer tts convert: add `--agent <id>` to apply an agent's TTS settings `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#190356](https://github.com/openclaw/openclaw/issues/190356) Update failure: package-verify (2026.10.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#190123](https://github.com/openclaw/openclaw/issues/190123) [Bug]: cron.add without agentId binds the caller's agent even when sessionTarget names another agent's session; the run fails 'SQLite session store path belongs to agent …' and the one-shot is disabled `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#190244](https://github.com/openclaw/openclaw/issues/190244) [Bug]: Talk gateway control drops whitespace-only transcript deltas `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#190261](https://github.com/openclaw/openclaw/issues/190261) [Bug]: unused-file audit rejects documented heap-profile preload `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬2
- [#190207](https://github.com/openclaw/openclaw/issues/190207) Native Codex child completion cannot resume yielded parent: caller authority no longer active `P2` `impact:message-loss` 💬2
- [#190149](https://github.com/openclaw/openclaw/issues/190149) [Bug]: macOS: #187000 fix does not cover remote-primary + local companion (and legacy managed-Node services) `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` `P0` 💬2
- [#190128](https://github.com/openclaw/openclaw/issues/190128) [Bug]: Browser config reload hits Memory Core stop timeout; rollback leaves reply dispatch unpublished `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#190073](https://github.com/openclaw/openclaw/issues/190073) [Bug]: exec auto-reviewer hard-denies ordinary commands as "reviewer-directed text" when a flag contains ignore and a path contains policy/system/prompt `P2` `clawsweeper:source-repro` `impact:security` `issue-rating: 🦞 diamond lobster` 💬2
- [#189997](https://github.com/openclaw/openclaw/issues/189997) Update tokenjuice plugin runtime to 0.10.0 `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#190784](https://github.com/openclaw/openclaw/issues/190784) Shutdown lifecycle test freezes the wrong grace-budget clock `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#190776](https://github.com/openclaw/openclaw/issues/190776) Clean-install agent exec live test rejects automatic Code Mode `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#190779](https://github.com/openclaw/openclaw/issues/190779) Docs: broken relative links found (fix available) `P3` 💬1
- [#190759](https://github.com/openclaw/openclaw/issues/190759) Android native qualification hangs in cleanup when the emulator never connects `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#190772](https://github.com/openclaw/openclaw/issues/190772) [Bug]: Managed Tailscale Serve recovery misses "must be root" denial and skips sudo fallback `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190773](https://github.com/openclaw/openclaw/issues/190773) [Bug]: Native iOS recurrent AUTH_RATE_LIMITED lockouts; separate captured missed-tick reconnect cancellation `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#190769](https://github.com/openclaw/openclaw/issues/190769) Gateway startup takes 2-3 minutes after a stale cron-authority lock `P2` `impact:ux-friction` 💬1
- [#190765](https://github.com/openclaw/openclaw/issues/190765) Gateway startup takes 2-3 minutes after a stale cron-authority lock `P2` `impact:ux-friction` 💬1
- [#190750](https://github.com/openclaw/openclaw/issues/190750) claude-cli usage-limit failure reaches the chat as a bare "Agent run failed" (reset time dropped) `P2` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬1
- [#190748](https://github.com/openclaw/openclaw/issues/190748) Discord: delete/edit cannot target the current DM when tools.message.crossContext is locked 💬1
- [#190749](https://github.com/openclaw/openclaw/issues/190749) Subagent settle re-runs a killed worker's parent turn repeatedly `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#190740](https://github.com/openclaw/openclaw/issues/190740) [Bug]: Microsoft Teams group chat: adding a broadcast group moves the routed agent to a new session (the `conversation:` prefix stays in the group-thread peer) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190741](https://github.com/openclaw/openclaw/issues/190741) [Bug]: Control UI: `isLoopbackHostname` does not count `.localhost` names, so Portals says "Remote portal ingress required" for a portal that opens `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190737](https://github.com/openclaw/openclaw/issues/190737) [Bug]: Agent read-modify-write replaced .env credentials with redaction markers on 2026.10.9 `bug` `bug:behavior` `P1` `impact:data-loss` 💬1
- [#190732](https://github.com/openclaw/openclaw/issues/190732) [Feature]: Browser control: per-profile opt-in to open that profile's own password-manager page (chrome://password-manager) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#190720](https://github.com/openclaw/openclaw/issues/190720) [Feature]: Let the selected memory plugin handle memory forget `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#190718](https://github.com/openclaw/openclaw/issues/190718) [Feature]: In a shared session, run each member's turn in that member's own required sandbox `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#190719](https://github.com/openclaw/openclaw/issues/190719) [Bug]: memory forget --json has no record that the selected memory plugin was not covered `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#190468](https://github.com/openclaw/openclaw/issues/190468) google: configured params.topP / top_p is never sent to Gemini (temperature from the same block is) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190709](https://github.com/openclaw/openclaw/issues/190709) Strict export scan rejects the stale ImageLightbox bridge export `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#190705](https://github.com/openclaw/openclaw/issues/190705) [Bug]: 2026.10.10-beta.5 drops the #179205 shared-OAuth deleted-peer fix (regression of #178908) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#190682](https://github.com/openclaw/openclaw/issues/190682) [Bug]: voice-call realtime transcription ignores the call's brief.language, so non-English speech is transcribed in the wrong language `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190702](https://github.com/openclaw/openclaw/issues/190702) [Bug]: Codex harness with code_mode_only models: native PreToolUse deny from `before_tool_call` is not honored for calls made from Code Mode `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#190694](https://github.com/openclaw/openclaw/issues/190694) [Bug]: Claw-managed agents cannot get tools.exec.mode=full or crossContext: live set breaks consent, manifest rejects the keys `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#190686](https://github.com/openclaw/openclaw/issues/190686) [Feature]: Read cached shared-state WAL health without general status preparation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#190687](https://github.com/openclaw/openclaw/issues/190687) Docs: disk-budget advice says "exporting and deleting unneeded sessions" but never names /export-session `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190681](https://github.com/openclaw/openclaw/issues/190681) [Bug]: macOS 26.7: updater still retains a runtime copy per update on ProcSafeError "unterminated Darwin environment" (#185342 not in 2026.10.10-beta.5 or 2026.10.9) `P2` `impact:other` 💬1
- [#190675](https://github.com/openclaw/openclaw/issues/190675) Telegram spooled replay: a photo whose getFile keeps timing out blocks its chat lane (up to 24 h) — media failures need a bounded fallback `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#190673](https://github.com/openclaw/openclaw/issues/190673) Follow-up / session-event replies skip sandbox MEDIA path normalization, so the whole reply is dropped `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190660](https://github.com/openclaw/openclaw/issues/190660) fix: unused-file check rejects documented history-depth benchmark `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190647](https://github.com/openclaw/openclaw/issues/190647) [Bug]: Session toolOverrides (mcpServers) are dropped on idle rollover but kept on /new and /reset `P2` `impact:session-state` `impact:data-loss` 💬1
- [#190640](https://github.com/openclaw/openclaw/issues/190640) [Bug]: WhatsApp connect/disconnect system events fill the agent main-session queue (20 entries) on quiet accounts `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#190635](https://github.com/openclaw/openclaw/issues/190635) [Feature]: Android setting to start Talk Mode when a wake word is detected `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#190561](https://github.com/openclaw/openclaw/issues/190561) fix: PR refresh reports current when its target branch has advanced `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190557](https://github.com/openclaw/openclaw/issues/190557) message tool allows unsolicited cross-chat sends (group turn -> owner DM) with no delivery scoping `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#190610](https://github.com/openclaw/openclaw/issues/190610) Feature request: make Browser Talk's documented 30-minute session TTL configurable (GPT-Live WebRTC) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#190605](https://github.com/openclaw/openclaw/issues/190605) [Bug]: Command automation announce masks codes, links and all-caps words on "login-looking" lines, with no opt-out `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#190606](https://github.com/openclaw/openclaw/issues/190606) [Bug]: wiki_apply update_metadata replaces the whole claims/questions/contradictions/sourceIds list (silent data loss) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#190595](https://github.com/openclaw/openclaw/issues/190595) [Bug]: Inbound reply-context bodies (e.g. voice-note transcripts) silently truncated at 2000 chars with …[omitted]… marker `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#190569](https://github.com/openclaw/openclaw/issues/190569) Utility model silently falls back to OpenAI with no auth, even when primary provider has none configured `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#190475](https://github.com/openclaw/openclaw/issues/190475) zalo: outbound sends (message tool, CLI, cron, heartbeat) ignore markdown.tables and post raw pipe tables `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190566](https://github.com/openclaw/openclaw/issues/190566) [Bug]: a provider whose models.providers.*.apiKey is a SecretRef 401s on every agent run — a literal string works `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬1
- [#190563](https://github.com/openclaw/openclaw/issues/190563) [Bug]: Cannot resume paused Codex chat: provider review/native thread mismatch `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#190528](https://github.com/openclaw/openclaw/issues/190528) [Bug]: memory_search stays stale ("A session was forgotten while memory indexing was running") until Gateway restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#190523](https://github.com/openclaw/openclaw/issues/190523) Lossless recovery for the timed out draining work before reply session rollover wedge: one queued sessions_send message (workaround + new trigger data, 2026.9.33) `impact:session-state` `P0` `impact:ux-release-blocker` 💬1
- [#190469](https://github.com/openclaw/openclaw/issues/190469) tui: multiline /btw in local mode runs as a main agent turn and is persisted to the session transcript `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190479](https://github.com/openclaw/openclaw/issues/190479) discord: edit action sends raw Markdown (tables, __bold__, mention aliases) while send of the same text is rendered `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190481](https://github.com/openclaw/openclaw/issues/190481) telegram: sticker action ignores silent: true, sendSticker still notifies recipients `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#190485](https://github.com/openclaw/openclaw/issues/190485) [Bug]: ask_user question card: valid answer rejected by parser (snake_case ids) and fallback options render unnumbered `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#190474](https://github.com/openclaw/openclaw/issues/190474) [Bug]: macOS primary UI/node auth fails with trusted-proxy + managed Tailscale Serve despite allowTailscale `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#190480](https://github.com/openclaw/openclaw/issues/190480) media/link understanding scope: rawKeyPrefix rule matches every session and agent-stripped keyPrefix never matches `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#190460](https://github.com/openclaw/openclaw/issues/190460) sessions cleanup --fix-dm-scope retires DM sessions that a route binding's dmScope still routes to `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190454](https://github.com/openclaw/openclaw/issues/190454) [Bug]: macOS app – subagent session view stops scrolling after switching sessions; ⌘R does not fix it, reopening the window does `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#190339](https://github.com/openclaw/openclaw/issues/190339) [Bug]: Literal heading tags appear when Telegram rich messages contain HTML headings `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#190344](https://github.com/openclaw/openclaw/issues/190344) Native PR provisioning spends excessive time bootstrapping cold and warm siblings `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🦪 silver shellfish` 💬1
- [#190427](https://github.com/openclaw/openclaw/issues/190427) Requester settle wake retries inside a retired plugin inventory and is then dropped silently: a parent never gets its children's results after a plugin hot reload `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#190378](https://github.com/openclaw/openclaw/issues/190378) [Bug]: buildCodeSpanIndex is not chunk-invariant when a backtick run is split across streamed chunks `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190357](https://github.com/openclaw/openclaw/issues/190357) [Bug]: Fast mode is unavailable for an Anthropic API key set in the config file or ANTHROPIC_API_KEY `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#190351](https://github.com/openclaw/openclaw/issues/190351) backup verify: memory jumps from ~1.4 GiB to >10 GiB mid-archive on large backups (node-tar tar.t pass); verify cannot complete `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#190338](https://github.com/openclaw/openclaw/issues/190338) [Bug]: WebChat iPhone images fail native loading in Docker sandbox: “media reference is not staged” `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#190337](https://github.com/openclaw/openclaw/issues/190337) [Bug] onboard: Xiaomi Token Plan config rolled back incompletely when gateway is not running `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:auth-provider` 💬1
- [#190332](https://github.com/openclaw/openclaw/issues/190332) Discord CDN SSRF policy should not union caller hostname allowlists `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#190307](https://github.com/openclaw/openclaw/issues/190307) Gateway restart leaves many agents permanently "degraded" (admission timeout), repair hint points to full `doctor --fix` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#190301](https://github.com/openclaw/openclaw/issues/190301) [Bug]: iOS chat: write-scoped operators cannot change Thinking or Fast mode `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#190293](https://github.com/openclaw/openclaw/issues/190293) [Bug]: `devices reject` / `devices remove` with an unknown id print only 'The CLI command failed.' and hide the unknown requestId/deviceId reason `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190201](https://github.com/openclaw/openclaw/issues/190201) fix: prepared PRs cannot integrate their target branch `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190216](https://github.com/openclaw/openclaw/issues/190216) [Bug]: ACP session/load of a long bridge session shows no history and continues in a different Gateway session `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#190270](https://github.com/openclaw/openclaw/issues/190270) secrets.egressProxy.enabled=true breaks gateway startup on Windows: "Secret egress proxy Worker is unavailable" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#190258](https://github.com/openclaw/openclaw/issues/190258) Tool-loop detection can never block a loop of three or more distinct calls (30-record history, block at 20); every Code Mode turn is one `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#190262](https://github.com/openclaw/openclaw/issues/190262) Session branches disappear when opened (branch switch rewrites transcript generation) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#190260](https://github.com/openclaw/openclaw/issues/190260) Hosted web_search reference markers change on every request; agents persist them in files and then loop "updating" them `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#190231](https://github.com/openclaw/openclaw/issues/190231) Share npm pin classification between updates and trust audits `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#190137](https://github.com/openclaw/openclaw/issues/190137) Local models on IPv4-mapped 127/8 loopback addresses use cloud watchdog timeouts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#190226](https://github.com/openclaw/openclaw/issues/190226) Consolidate duplicated Control UI native listener lifetimes `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#190243](https://github.com/openclaw/openclaw/issues/190243) status / channels list / doctor print Matrix DEP_PLUGIN_SDK warnings on installs without Matrix (core calls sync presence probe from async paths) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#190222](https://github.com/openclaw/openclaw/issues/190222) [Bug]: Native pre-consumption failure returns resend guidance internally but publishes no addressed chat notice (diagnostic repro) `P3` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬1
- [#190202](https://github.com/openclaw/openclaw/issues/190202) [Bug]: completion benchmark fails after provenance import relocation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#190215](https://github.com/openclaw/openclaw/issues/190215) Skill workshop: quiet/log-only mode for learned-skill announcements `P3` `impact:ux-friction` 💬1
- [#190198](https://github.com/openclaw/openclaw/issues/190198) [Bug]: Android Dashboard, Terminal and Desktop pages show "Not Found" when the Gateway serves the Control UI under a base path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#190197](https://github.com/openclaw/openclaw/issues/190197) [Feature]: Telegram: utility-model status narration in progress mode (Discord parity) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#190177](https://github.com/openclaw/openclaw/issues/190177) [Bug]: Doctor refuses the caller's own migration and the caller's Gateway reports worker policy changes when an older system Gateway unit runs as another account `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#190140](https://github.com/openclaw/openclaw/issues/190140) [Bug]: gateway status prints single-gateway advice when external supervision is configured `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#190148](https://github.com/openclaw/openclaw/issues/190148) [Bug]: macOS: Gateway status stays "Running"/"Using existing gateway" after the Gateway process exits; recovery is a no-op `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#190146](https://github.com/openclaw/openclaw/issues/190146) [Bug]: macOS Talk: pausing while the assistant is thinking/speaking leaves Talk stuck in "Thinking" after unpause `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#190150](https://github.com/openclaw/openclaw/issues/190150) [Bug]: OpenClawKit: one transport error during the device-token retry permanently stops using the stored device token `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#190152](https://github.com/openclaw/openclaw/issues/190152) [Bug]: macOS PortGuardian: an lsof failure or 5 s timeout is treated as "no listener" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#190147](https://github.com/openclaw/openclaw/issues/190147) [Bug]: macOS Debug settings: saving the prefilled "Session store" path pins every agent to the legacy single-file store `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#190145](https://github.com/openclaw/openclaw/issues/190145) [Bug]: macOS/iOS: a rejected stored device token is never cleared and the channel reconnects forever with the wrong problem text `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#190154](https://github.com/openclaw/openclaw/issues/190154) [Bug]: macOS Talk: CJK silence-timeout clamp keys on the app locale, not the recognition locale `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#190153](https://github.com/openclaw/openclaw/issues/190153) [Bug]: macOS Debug settings: "Attach only" toggle write failures are silent (error erased by the revert; success reported without a marker) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#190155](https://github.com/openclaw/openclaw/issues/190155) [Bug]: macOS Debug settings: "Sent kill to N." confirmation never displays `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#190151](https://github.com/openclaw/openclaw/issues/190151) [Bug]: macOS status menu: "Open session log in Code" does nothing and the Finder fallback is unreachable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#190117](https://github.com/openclaw/openclaw/issues/190117) WhatsApp group reactions omit sender when the current message ID is explicit `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#190113](https://github.com/openclaw/openclaw/issues/190113) [Feature]: Option for the Control UI to enforce allowedOrigins exactly, including loopback origins `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1

#### 🔒 Closed Issues
- [#42475](https://github.com/openclaw/openclaw/issues/42475) [Feature]: Per-agent cost budget enforcement at the gateway level
- [#144502](https://github.com/openclaw/openclaw/issues/144502) WhatsApp mobile can't play TTS voice notes (48 kHz + Lavf vendor tag) — 'audio unavailable', download fails
- [#143632](https://github.com/openclaw/openclaw/issues/143632) Inbound iMessage messages re-delivered 2-3x into session context: ghost copies carry serialized internal context envelope in body (same message_id, dedupe not applied)
- [#68105](https://github.com/openclaw/openclaw/issues/68105) [Bug]: RTL bidi isolation missing at gateway/outbound-reply boundary (Hebrew/Arabic punctuation renders on wrong side)
- [#139477](https://github.com/openclaw/openclaw/issues/139477) [Feature]: Honor `tools.toolSearch` for bundle-MCP CLI backends — the loopback MCP config hardcodes `alwaysLoad: true`
- [#122019](https://github.com/openclaw/openclaw/issues/122019) [Bug]: `openclaw update status` omits configured-plugin availability and irreversible migration risk
- [#56781](https://github.com/openclaw/openclaw/issues/56781) Feature request: fallback model chain for compaction and LCM summaryModel
- [#52184](https://github.com/openclaw/openclaw/issues/52184) [Feature]: Prefer Volta shim path over version-pinned Volta node path for macOS gateway LaunchAgent
- [#42408](https://github.com/openclaw/openclaw/issues/42408) [Bug/Docs]: local+hybrid memory_search quality can appear unstable due to extraPaths path drift + benchmark-file contamination
- [#38714](https://github.com/openclaw/openclaw/issues/38714) Request: Add Discord reaction event support to Hooks system
- [#144447](https://github.com/openclaw/openclaw/issues/144447) [Bug]: Git/dev update ends in managed-service-preflight after candidate startup deadline
- [#138279](https://github.com/openclaw/openclaw/issues/138279) Feature: ship Linux companion builds for aarch64 (deb + AppImage)
- [#137508](https://github.com/openclaw/openclaw/issues/137508) [Mobile UI] 键盘弹出后聊天内容被遮挡，输入区控件布局不合理
- [#124759](https://github.com/openclaw/openclaw/issues/124759) [Bug]: iOS app lags badly when 'show reasoning and tool activity' is enabled
- [#81595](https://github.com/openclaw/openclaw/issues/81595) observability: emit per-MCP-server sub-spans inside bundle-tools so cold-start cost is attributable
- [#46844](https://github.com/openclaw/openclaw/issues/46844) Feature: Talk Mode Idle Timeout / Auto-Deactivation After Voice Wake
- [#144306](https://github.com/openclaw/openclaw/issues/144306) [Feature]: Allow automations to deliver to a paired node so scheduled results can reach the app as notifications
- [#141604](https://github.com/openclaw/openclaw/issues/141604) [Bug]: model fallback chain aborts on a non-final hop and logs nothing, skipping remaining candidates
- [#140723](https://github.com/openclaw/openclaw/issues/140723) [Bug]: WebChat renders assistant text duplicated ×2–×3 — reasoning-only retries re-stream already-emitted text; aborted runs leave zero committed copies
- [#139188](https://github.com/openclaw/openclaw/issues/139188) feat(diagnostics-prometheus): expose provider subscription usage windows
- [#138098](https://github.com/openclaw/openclaw/issues/138098) feat(qa): portable evidence bundles and offline confidence replay
- [#118776](https://github.com/openclaw/openclaw/issues/118776) Leaf sub-agents keep sessions_yield but lose every tool that could produce the event it waits for
- [#103694](https://github.com/openclaw/openclaw/issues/103694) WARN on every boot: unknown format "google-duration" from remote MCP schema
- [#89477](https://github.com/openclaw/openclaw/issues/89477) [Feature]: optional cross-encoder rerank stage for memory search
- [#39343](https://github.com/openclaw/openclaw/issues/39343) Feature Request: Image batching / media group buffering at gateway layer
- [#141615](https://github.com/openclaw/openclaw/issues/141615) 2026.9.2 webchat: stuck 'Authenticated profile verification is unavailable' wedges all session/task RPCs until gateway restart
- [#143915](https://github.com/openclaw/openclaw/issues/143915) [Feature]: Opt-in replaceable public-body streaming previews
- [#142897](https://github.com/openclaw/openclaw/issues/142897) Slack: message text silently lost on duplicate/redelivered events (user_request arrives with empty text)
- [#142753](https://github.com/openclaw/openclaw/issues/142753) [Bug] settled-finalization-fallback text leaks to user-facing delivery channels (e.g. qqbot)
- [#142617](https://github.com/openclaw/openclaw/issues/142617) [Feature]: Link-handling preference in macOS app — default to sidebar browser or system browser
- [#142012](https://github.com/openclaw/openclaw/issues/142012) [Feature]: expose the Discord ingress adoption stall timeout (5-minute default drops messages queued behind long turns)
- [#141614](https://github.com/openclaw/openclaw/issues/141614) 2026.9.2: intermittent SIGTERM kills of exec-spawned ssh children, no approval/log trace
- [#102907](https://github.com/openclaw/openclaw/issues/102907) Azure OpenAI Responses throws 400 when prompt_cache_key is sent to endpoints that do not support it
- [#139217](https://github.com/openclaw/openclaw/issues/139217) [Bug]: Codex commentary is stored as stream fallback but never reaches Discord progress draft on 2026.9.1
- [#138323](https://github.com/openclaw/openclaw/issues/138323) [Feature]: Evolve Quick Chat into a universal context and action HUD
- [#138083](https://github.com/openclaw/openclaw/issues/138083) Feature request: let the agent request compaction itself (topic-shift aware context archiving)
- [#137922](https://github.com/openclaw/openclaw/issues/137922) [Bug] Control UI attachment previews show "Unavailable · Unavailable" in all WebKitGTK clients, including the official Linux companion
- [#137513](https://github.com/openclaw/openclaw/issues/137513) Add Fal H3 Max video model support
- [#136888](https://github.com/openclaw/openclaw/issues/136888) resource execution: add typed resource model and effective capacity snapshot
- [#131877](https://github.com/openclaw/openclaw/issues/131877) Auth profile first in the resolved order is skipped with nothing logged — selection is undiagnosable while the gateway is running
- [#126923](https://github.com/openclaw/openclaw/issues/126923) [Bug]: Codex conversation binding is lost after mid-turn Gateway restart; /new does not recover, manual /codex bind does
- [#91354](https://github.com/openclaw/openclaw/issues/91354) memory: Gemini embeddings still use inline batch requests after remote.batch.enabled=false, causing 429 on low quota
- [#65983](https://github.com/openclaw/openclaw/issues/65983) Background PTY exec runs can survive restart/session loss and become untracked orphan process trees
- [#54157](https://github.com/openclaw/openclaw/issues/54157) Doubao/BytePlus model catalog: cacheRead/cacheWrite pricing set to 0, missing context caching cost
- [#143185](https://github.com/openclaw/openclaw/issues/143185) Control UI 2026.9.3: assistant reply rendered twice (streamed blocks + turnRecap) despite a single stored transcript record
- [#142966](https://github.com/openclaw/openclaw/issues/142966) [Feature]: Two-column model picker (providers left, models right) for large multi-provider setups
- [#141581](https://github.com/openclaw/openclaw/issues/141581) llm_output.usage is undefined for google/gemini models, while openai populates it on the same gateway
- [#140646](https://github.com/openclaw/openclaw/issues/140646) Gateway hook to register a ledger row when any sub-agent primitive starts (incl. native Task/Agent CLI sidechains)
- [#140383](https://github.com/openclaw/openclaw/issues/140383) [Bug]: macOS app crashes in SwiftUI toolbar update: unregistered displayMode observer
- [#139316](https://github.com/openclaw/openclaw/issues/139316) Control UI: assistant reply renders twice when confirmed via delta history catch-up
- [#138642](https://github.com/openclaw/openclaw/issues/138642) Cover atomic managed skill-directory symlink replacement
- [#137799](https://github.com/openclaw/openclaw/issues/137799) Slack outbound (2026.9.1): markdown→mrkdwn conversion fully bypassed — bold delivered as literal text
- [#137584](https://github.com/openclaw/openclaw/issues/137584) [Bug]: 2026.9.1 official plugin update can time out on npm metadata while direct npm view succeeds
- [#137127](https://github.com/openclaw/openclaw/issues/137127) [Bug]: Ship native iOS Skill Workshop revision-hash fix missing from App Store 2026.8.10
- [#136674](https://github.com/openclaw/openclaw/issues/136674) Telegram: Handle edited messages to re-trigger conversation (like the Discord ask in #38505)
- [#135215](https://github.com/openclaw/openclaw/issues/135215) [Bug]: iOS composer strips line breaks and joins words in sent messages
- [#130673](https://github.com/openclaw/openclaw/issues/130673) [Bug]: Authenticated Claude CLI models show unknown auth in models list
- [#130246](https://github.com/openclaw/openclaw/issues/130246) browser snapshot returns an empty tree while a consent modal is open; only --interactive exposes the modal controls (no fallback, no snapshotDefaults knob)
- [#121572](https://github.com/openclaw/openclaw/issues/121572) Browser plugin: unbounded memory growth from Playwright CDP connection object registry (long-lived gateways leak ~90 MB/h under browser activity)
- [#118886](https://github.com/openclaw/openclaw/issues/118886) [Bug]: SQLite migration and compaction start without peak disk-space preflight
- [#168784](https://github.com/openclaw/openclaw/issues/168784) [Bug]: memory-wiki: a compile with no file updates and the same source generation still publishes a new compiled-cache row and deletes the active one
- [#143441](https://github.com/openclaw/openclaw/issues/143441) WebChat: raw DSML markup displayed instead of rendered tool call cards + content duplication
- [#142723](https://github.com/openclaw/openclaw/issues/142723) Feature: opt-in supervised TaskFlow with durable continuation and explicit endpoints
- [#142565](https://github.com/openclaw/openclaw/issues/142565) Cron session not woken when descendants settle; cron-direct-delivery fallback delivers descendant text instead of cron's own reply
- [#142521](https://github.com/openclaw/openclaw/issues/142521) [Feature]: Support empty ephemeral and multi-repository cloud workspaces
- [#142313](https://github.com/openclaw/openclaw/issues/142313) [Bug] No-caption image over the offload threshold is dropped by the empty-turn guard ("I didn't receive any text")
- [#142142](https://github.com/openclaw/openclaw/issues/142142) [Feature]: Add --offset and --limit pagination to automations list
- [#142141](https://github.com/openclaw/openclaw/issues/142141) feat: add an autopilot viral clipper Agent Plugin bundle
- [#142139](https://github.com/openclaw/openclaw/issues/142139) [Bug]: Codex runtime shows 18–26s inter-tool gaps and 300s pre-output stalls on 2026.9.2; switching runtime/model resolves it immediately
- [#141969](https://github.com/openclaw/openclaw/issues/141969) [Bug]: mid-turn overflow recovery and silent exec completion cause full-context LLM reruns
- [#141820](https://github.com/openclaw/openclaw/issues/141820) [Regression] 2026.8.2: GPT-5.6 Sol via native Codex is materially slower than the same model via OpenRouter
- [#141573](https://github.com/openclaw/openclaw/issues/141573) [Feature]: Clarify Windows PowerShell 5.1 vs PowerShell 7 support and expose the effective exec shell
- [#180927](https://github.com/openclaw/openclaw/issues/180927) WebChat shows the CLI assistant reply twice when block streaming is off
- [#141184](https://github.com/openclaw/openclaw/issues/141184) [Feature]: iOS compact floating chat composer and native navigation polish
- [#141002](https://github.com/openclaw/openclaw/issues/141002) [Bug]: Failed Windows launcher rewrite truncates the existing script
- [#140647](https://github.com/openclaw/openclaw/issues/140647) Wake-triggered agent turn: assistant reply not delivered to the turn's sourceChannel; OpenAI-compat completion returns empty / "No response from OpenClaw"
- [#140159](https://github.com/openclaw/openclaw/issues/140159) Feature request: expose semantic_vad/eagerness for OpenAI Realtime Talk (currently hardcoded to server_vad)
- [#139964](https://github.com/openclaw/openclaw/issues/139964) [Bug]: kill reconciliation window: precise-cancel entries don't suppress completion delivery
- [#139513](https://github.com/openclaw/openclaw/issues/139513) Bug: bailian/qwen3.7-plus request failed — Cannot read properties of undefined (reading 'trim')
- [#139472](https://github.com/openclaw/openclaw/issues/139472) Realtime voice: no asynchronous delegation - every agent-backed turn blocks the conversation (serial consults + autoRespondToAudio off)
- [#139453](https://github.com/openclaw/openclaw/issues/139453) [Feature]: Add attachments to Workboard card creation and editing
- [#139444](https://github.com/openclaw/openclaw/issues/139444) [feishu] Persistent collapsible panels for reasoning + tool calls in reply/streaming cards (follow-up to #75113)
- [#139279](https://github.com/openclaw/openclaw/issues/139279) Realtime voice: no timeout or progress cue during forced agent consult - caller hears dead silence for 100+ seconds
- [#139238](https://github.com/openclaw/openclaw/issues/139238) Feature request: user-facing notice for before_tool_call blocks (userNotice) — offload/defer blocks render as "⚠️ tool blocked" failures
- [#139172](https://github.com/openclaw/openclaw/issues/139172) Provider headers override (User-Agent) causes "model was not found by the provider" on UA-filtering relays [2026.9.1]
- [#139138](https://github.com/openclaw/openclaw/issues/139138) [Bug] DeepSeek fallback fails: tools[0] missing field 'type' on cross-protocol session switch (Anthropic→OpenAI)
- [#139091](https://github.com/openclaw/openclaw/issues/139091) progress-card reminder is only injected into non-main sessions — main-session users who follow the card in the UI get stale cards
- [#138809](https://github.com/openclaw/openclaw/issues/138809) Warning: Claude CLI session churn coincided with misdirected memory writes
- [#138664](https://github.com/openclaw/openclaw/issues/138664) [Feature]: AGENTS.md gets no compliance-priming line in the system prompt, unlike SOUL/MEMORY/USER.md
- [#138373](https://github.com/openclaw/openclaw/issues/138373) Gemini 2.5 Flash emits malformed print()-wrapped function calls, hard-aborts run instead of retrying (related to #1914)
- [#138019](https://github.com/openclaw/openclaw/issues/138019) Control UI web notifications play no sound on macOS (Chromium)
- [#137842](https://github.com/openclaw/openclaw/issues/137842) [Bug]: Control UI provider cards omit plugin-guided reconnect actions
- [#137566](https://github.com/openclaw/openclaw/issues/137566) agent exec reports an aborted run as "Agent run failed" in the JSON envelope
- [#136300](https://github.com/openclaw/openclaw/issues/136300) [Bug]: macOS native app - assistant messages duplicate during streaming; momentum scroll causes layout reflow; suggested-task cards cannot scroll
- [#135876](https://github.com/openclaw/openclaw/issues/135876) Automations single-pane: run provenance, typed completion causes; task-lane observability seam
- [#163900](https://github.com/openclaw/openclaw/issues/163900) [Bug]: memory-core budget compaction never removes "## Consolidated Memory" sections, so Dreaming promotion stalls once MEMORY.md is full
- [#133930](https://github.com/openclaw/openclaw/issues/133930) Control UI: Vietnamese (combining-mark) diacritics render decomposed/split — ship a Vietnamese webfont in the base build
- [#132481](https://github.com/openclaw/openclaw/issues/132481) `openclaw/feishu`: request spreadsheet read/write tools + two bugs (token invalidation after app version publish, opaque error for missing block:convert scope)
- [#131492](https://github.com/openclaw/openclaw/issues/131492) Long-running gateway on Linux/glibc: RSS ratchet from freed-but-retained native buffers — jemalloc guidance for production deployments
- [#131399](https://github.com/openclaw/openclaw/issues/131399) cron runs: expose persisted per-run configRevision
- [#130249](https://github.com/openclaw/openclaw/issues/130249) Async exec completions arrive context-free and can land in a different session than the one that issued the command
- [#130195](https://github.com/openclaw/openclaw/issues/130195) codex plugin: appServer.homeScope "user" still injects OpenClaw auth profile → "Codex subscription auth profile could not produce login credentials" (2026.8.1-beta.3)
- [#130154](https://github.com/openclaw/openclaw/issues/130154) gateway: spawned git child segfaults on the child side of fork, pre-exec (CoreFoundation is not fork-safe)
- [#128714](https://github.com/openclaw/openclaw/issues/128714) Duplicate tool call in one turn silently dropped, turn surfaced as incomplete despite unused retry budget
- [#126533](https://github.com/openclaw/openclaw/issues/126533) Drop MESSAGE_CREATE event when receiving-bot-account has isDefault=true AND a more-specific-scoped binding matches for the target channel
- [#57142](https://github.com/openclaw/openclaw/issues/57142) Webchat: autocomplete/suggestions for custom terms in chat input
- [#142002](https://github.com/openclaw/openclaw/issues/142002) [Bug]: Codex harness assistant replies do not mark Control UI sessions unread
- [#159531](https://github.com/openclaw/openclaw/issues/159531) Subagent completion handoff rotates an idle requester session to a new empty transcript after SessionTranscriptWriterClaimReboundError (2026.9.6)
- [#141211](https://github.com/openclaw/openclaw/issues/141211) Safeguard compaction on 2026.8.2: qualityGuard.maxRetries not visible in compaction-diag (attempt=1 maxAttempts=1) and post-audit truncation still yields latest_user_ask_not_reflected failures
- [#144630](https://github.com/openclaw/openclaw/issues/144630) memory-wiki: no opt-in way to scope shared-vault bridge reads for non-sandboxed agents
- [#144470](https://github.com/openclaw/openclaw/issues/144470) [Feature]: Log Signal envelope age and local ingress admission time
- [#144327](https://github.com/openclaw/openclaw/issues/144327) [Feature]: Restore progress-idle semantics for Codex timeoutSeconds across execution and Gateway ownership
- [#144307](https://github.com/openclaw/openclaw/issues/144307) [Bug]: macOS Tailscale status probes can orphan and retain gigabytes when exposure is off
- [#144276](https://github.com/openclaw/openclaw/issues/144276) Control UI split view: balance panes command, even split by default, pane tint from session colour
- [#144255](https://github.com/openclaw/openclaw/issues/144255) [Bug]: Control UI New Session caps native Codex reasoning at High
- [#144190](https://github.com/openclaw/openclaw/issues/144190) [Feature]: Workboard — support multi-project management for a single agent
- [#144064](https://github.com/openclaw/openclaw/issues/144064) [Feature]: Show last-used time and failure counters in models auth list
- [#143963](https://github.com/openclaw/openclaw/issues/143963) Feature: Human-owner read-only view of direct (agent:main:main) sessions in webchat GUI
- [#143898](https://github.com/openclaw/openclaw/issues/143898) Cron: skip-missed tolerance for low-frequency schedules + exponential backoff for error retries after provider rate-limit bursts
- [#143878](https://github.com/openclaw/openclaw/issues/143878) Grouped skill display in the chat composer's slash/$ picker (surface the grouped skill folders)
- [#143843](https://github.com/openclaw/openclaw/issues/143843) Room event participation prompt regression between 2026.7.1-2 and 2026.9.1 causes meta-commentary in responses
- [#143618](https://github.com/openclaw/openclaw/issues/143618) [Feature]: Zalo — first-class plugin.approval surface (text rendering, setup guidance, tests)
- [#143617](https://github.com/openclaw/openclaw/issues/143617) [Feature]: Synology Chat — first-class plugin.approval surface (text rendering, setup guidance, tests)
- [#143616](https://github.com/openclaw/openclaw/issues/143616) [Feature]: Nextcloud Talk — first-class plugin.approval surface (text rendering, setup guidance, tests)
- [#143241](https://github.com/openclaw/openclaw/issues/143241) [Feature]: Add bounded batch API-key import for auth profiles
- [#143132](https://github.com/openclaw/openclaw/issues/143132) Public migration-only entrypoint for shared-state SQLite
- [#143119](https://github.com/openclaw/openclaw/issues/143119) [Bug]: Successful nested sessions_yield immediately persists run_failed while child is still running
- [#143043](https://github.com/openclaw/openclaw/issues/143043) Regression in v2026.9.3: Workboard tab renders empty / broken because plugin adds `controlUi` block while main Control UI bundle still ships overlapping Workboard widgets
- [#143028](https://github.com/openclaw/openclaw/issues/143028) [Regression]: Discord tool/status reaction chain becomes eyes-only after 2026.9.3 (request opt-in restoration)
- [#142977](https://github.com/openclaw/openclaw/issues/142977) Telegram ingress: empty-body wrapper + duplicate delivery make agent announce stickers that were never sent
- [#142526](https://github.com/openclaw/openclaw/issues/142526) [Bug]: Terminal mobile-pairing QR inside tmux is not recognized by Android
- [#142464](https://github.com/openclaw/openclaw/issues/142464) [Bug]: Astra interprets chat-routing restriction as prohibiting bundled gog Gmail sends
- [#140387](https://github.com/openclaw/openclaw/issues/140387) Cron: agentTurn jobs report lastRunStatus ok when the payload never ran ("false green") — proposal: artifact-freshness criterion + job preflight
- [#138348](https://github.com/openclaw/openclaw/issues/138348) [Feature]: Bound scheduler pressure, restarts, and delivery
- [#136931](https://github.com/openclaw/openclaw/issues/136931) [Bug]: cron announce delivery skipped when CronSessionLifecycleClaimError fires but session actually completes
- [#150401](https://github.com/openclaw/openclaw/issues/150401) Provider errors with no HTTP status are not failover-eligible, so configured fallbacks are never attempted
- [#133486](https://github.com/openclaw/openclaw/issues/133486) macOS Talk Mode leaks localspeechrecognition: new SFSpeechRecognizer per session grows the service to 42 GB RSS
- [#132334](https://github.com/openclaw/openclaw/issues/132334) [Feature]: voice-call: agent cannot end its own call in classic conversation mode
- [#131588](https://github.com/openclaw/openclaw/issues/131588) [Feature]: Persist Control UI Sessions filters and sort preferences
- [#131563](https://github.com/openclaw/openclaw/issues/131563) [Bug]: iMessage bridge delivers one outbound bubble containing duplicated final reply plus usage footer
- [#129491](https://github.com/openclaw/openclaw/issues/129491) [Bug]: Usage provider cards falsely show Timeout under Gateway event-loop pressure
- [#128992](https://github.com/openclaw/openclaw/issues/128992) [Feature]: Telegram rich messages — embed local files via InputRichMessage.media (tg://photo?id=), route text+attachments through sendPayload
- [#128800](https://github.com/openclaw/openclaw/issues/128800) Gateway launchd plist should include fd-limit keys by default
- [#128245](https://github.com/openclaw/openclaw/issues/128245) [Bug]: delivery failure reclassifies successful task and mirrored flow as blocked
- [#128100](https://github.com/openclaw/openclaw/issues/128100) [Bug]: gpt-5.6-sol enters mixed read/exec exploration loops that evade recovery
- [#125910](https://github.com/openclaw/openclaw/issues/125910) [Bug]: Codex app-server-thread-bindings namespace hard-fails all runs at hardcoded 50k-row cap (reject-new, no TTL, no config) under one-shot OpenResponses workloads
- [#117596](https://github.com/openclaw/openclaw/issues/117596) feat: Kimi Coding provider usage/quota display (revival of #67593)
- [#171296](https://github.com/openclaw/openclaw/issues/171296) [Android] Health screen: detailed status card has near-zero horizontal padding, inconsistent with summary card
- [#190584](https://github.com/openclaw/openclaw/issues/190584) [Bug]: Talk agent-consult orphan repair branches the user's spoken utterance off the visible transcript
- [#137115](https://github.com/openclaw/openclaw/issues/137115) [Bug]: Projectless Codex Desktop sessions fragment into multiple catalog groups by date prefix
- [#135356](https://github.com/openclaw/openclaw/issues/135356) Discord reactions never trigger a real agent reply — enqueueRoutedSystemEvent should route through the component/interaction dispatch path
- [#164382](https://github.com/openclaw/openclaw/issues/164382) [Feature]: active-memory: log why lane 1 (trigger recall) was not attempted, e.g. agent not in config.agents
- [#134530](https://github.com/openclaw/openclaw/issues/134530) feat: allow thinking overrides on visible sessions_spawn
- [#132548](https://github.com/openclaw/openclaw/issues/132548) [Feature]: Save remote Gateway TTS output locally
- [#132270](https://github.com/openclaw/openclaw/issues/132270) [Feature]: State DB: fail-stop barriers against concurrent schema migration wiping operator data
- [#129793](https://github.com/openclaw/openclaw/issues/129793) [Bug]: message send can duplicate Telegram delivery after accepted-then-error
- [#128015](https://github.com/openclaw/openclaw/issues/128015) Compaction sidecar runs (summarizer, memory flush) share the parent session identity, corrupting cache diagnostics and session analytics
- [#172162](https://github.com/openclaw/openclaw/issues/172162) [Bug]: M4V attachments skip codec-aware playback and conversion
- [#112625](https://github.com/openclaw/openclaw/issues/112625) [Bug]: openclaw uninstall doesnt remove from .bashrc and commands
- [#170576](https://github.com/openclaw/openclaw/issues/170576) before_tool_call: MCP-loopback tool calls from claude-cli runs carry no ctx.requester (embedded and native relay do)
- [#185317](https://github.com/openclaw/openclaw/issues/185317) [Bug]: sessions_spawn "model not allowed" error omits the modelPolicy.allow fix guidance that the /model path already provides
- [#190739](https://github.com/openclaw/openclaw/issues/190739) Update failure: package-install-omit-optional (2026.10.5)
- [#182418](https://github.com/openclaw/openclaw/issues/182418) [Bug]: Reference-style Markdown citations consume the link-understanding budget and skip pasted URLs
- [#190684](https://github.com/openclaw/openclaw/issues/190684) [Bug]: Node-prefix helpers fail strict unused-export validation
- [#190666](https://github.com/openclaw/openclaw/issues/190666) Upgrade 2026.7.2-beta.6 → 2026.10.9: media-persistence refuses v16 agent DBs missing session_nodes_entry_valid_* triggers; doctor --fix deadlocks and Gateway can't start
- [#181348](https://github.com/openclaw/openclaw/issues/181348) [Bug]: nodes camera list reports "No cameras reported." for the Windows node — CLI reads payload.devices, node returns payload.cameras
- [#190620](https://github.com/openclaw/openclaw/issues/190620) Feature: session export command — docs recommend exporting sessions, but there's no export
- [#190658](https://github.com/openclaw/openclaw/issues/190658) [Bug]: git update fails with config-lock-refused because Doctor rewrites plugin migration obligation reason/command mid-run
- [#190649](https://github.com/openclaw/openclaw/issues/190649) agents/loop-detection re-emits a pinned, stale counter on a ~1s timer for sessions with no active run
- [#180337](https://github.com/openclaw/openclaw/issues/180337) [Docs Bug]: Sandbox docs misstate the default Docker user and omit session reuse and daemon selection
- [#190624](https://github.com/openclaw/openclaw/issues/190624) [Bug]: Update reports hide which content-inventory check failed
- [#190585](https://github.com/openclaw/openclaw/issues/190585) [Bug]: Voice-only (Talk) sessions never get an automatic title
- [#179870](https://github.com/openclaw/openclaw/issues/179870) [Bug]: Background exec completion in a Discord auto-thread is posted to the parent channel
- [#173396](https://github.com/openclaw/openclaw/issues/173396) [Bug]: Telegram rich-message replies show raw HTML lists in Control UI
- [#190476](https://github.com/openclaw/openclaw/issues/190476) memory-wiki: refreshing a synthesis without --status resets a curated status to active
- [#166323](https://github.com/openclaw/openclaw/issues/166323) [Bug]: Telegram DM topics (threaded mode): /acp spawn --bind here confirms binding but follow-ups still route to the default agent (2026.9.8)
- [#190411](https://github.com/openclaw/openclaw/issues/190411) 2026.10.9: pending plugin migration hands voice-call an empty config, so a disabled plugin starts with defaults and the update rolls back
- [#190244](https://github.com/openclaw/openclaw/issues/190244) [Bug]: Talk gateway control drops whitespace-only transcript deltas
- [#175128](https://github.com/openclaw/openclaw/issues/175128) [Bug]: Google Meet export omits requested document bodies when transcript entries are skipped
- [#190261](https://github.com/openclaw/openclaw/issues/190261) [Bug]: unused-file audit rejects documented heap-profile preload
- [#175194](https://github.com/openclaw/openclaw/issues/175194) /models More and Try commands lose custom page size
- [#164702](https://github.com/openclaw/openclaw/issues/164702) DataCloneError on Windows: is the "welded-in" Proxy behavior in `main` a long-term maintenance risk?
- [#190207](https://github.com/openclaw/openclaw/issues/190207) Native Codex child completion cannot resume yielded parent: caller authority no longer active
- [#190149](https://github.com/openclaw/openclaw/issues/190149) [Bug]: macOS: #187000 fix does not cover remote-primary + local companion (and legacy managed-Node services)
- [#164838](https://github.com/openclaw/openclaw/issues/164838) [Bug]: Later slash completions disappear when a draft starts with a command
- [#181696](https://github.com/openclaw/openclaw/issues/181696) [Bug]: a leaked plain-text tool call followed by a paragraph blocks the Gateway for 8.5 s at 32 KB after #175328
- [#171087](https://github.com/openclaw/openclaw/issues/171087) [Bug]: voice-call tool does not explain the persistent task brief for outbound errands
- [#171050](https://github.com/openclaw/openclaw/issues/171050) Usage query suggestions omit matching values beyond the first six catalog entries
- [#189997](https://github.com/openclaw/openclaw/issues/189997) Update tokenjuice plugin runtime to 0.10.0
- [#190776](https://github.com/openclaw/openclaw/issues/190776) Clean-install agent exec live test rejects automatic Code Mode
- [#190759](https://github.com/openclaw/openclaw/issues/190759) Android native qualification hangs in cleanup when the emulator never connects
- [#190769](https://github.com/openclaw/openclaw/issues/190769) Gateway startup takes 2-3 minutes after a stale cron-authority lock
- [#190765](https://github.com/openclaw/openclaw/issues/190765) Gateway startup takes 2-3 minutes after a stale cron-authority lock
- [#190748](https://github.com/openclaw/openclaw/issues/190748) Discord: delete/edit cannot target the current DM when tools.message.crossContext is locked
- [#190737](https://github.com/openclaw/openclaw/issues/190737) [Bug]: Agent read-modify-write replaced .env credentials with redaction markers on 2026.10.9
- [#184737](https://github.com/openclaw/openclaw/issues/184737) [Bug]: Command queue still accepts taskTimeoutMs and related options but never enforces them, so a stuck lane task runs unbounded
- [#187604](https://github.com/openclaw/openclaw/issues/187604) [Bug]: macOS node screen.record reports the requested durationMs/fps instead of the clamped values it recorded
- [#185266](https://github.com/openclaw/openclaw/issues/185266) Slack, Feishu and Zalo Personal join the lines of a multi-line /btw or /loop into one line
- [#190468](https://github.com/openclaw/openclaw/issues/190468) google: configured params.topP / top_p is never sent to Gemini (temperature from the same block is)
- [#190709](https://github.com/openclaw/openclaw/issues/190709) Strict export scan rejects the stale ImageLightbox bridge export
- [#190682](https://github.com/openclaw/openclaw/issues/190682) [Bug]: voice-call realtime transcription ignores the call's brief.language, so non-English speech is transcribed in the wrong language
- [#190681](https://github.com/openclaw/openclaw/issues/190681) [Bug]: macOS 26.7: updater still retains a runtime copy per update on ProcSafeError "unterminated Darwin environment" (#185342 not in 2026.10.10-beta.5 or 2026.10.9)
- [#190660](https://github.com/openclaw/openclaw/issues/190660) fix: unused-file check rejects documented history-depth benchmark
- [#190647](https://github.com/openclaw/openclaw/issues/190647) [Bug]: Session toolOverrides (mcpServers) are dropped on idle rollover but kept on /new and /reset
- [#190561](https://github.com/openclaw/openclaw/issues/190561) fix: PR refresh reports current when its target branch has advanced
- [#179344](https://github.com/openclaw/openclaw/issues/179344) Docs: how an external channel plugin declares its SecretRef targets (secret-contract-api) is undocumented
- [#178989](https://github.com/openclaw/openclaw/issues/178989) [Bug]: Sandboxed Codex agents lose AGENTS.md on policy-restricted turns when the sandbox remaps the workspace
- [#190475](https://github.com/openclaw/openclaw/issues/190475) zalo: outbound sends (message tool, CLI, cron, heartbeat) ignore markdown.tables and post raw pipe tables
- [#169718](https://github.com/openclaw/openclaw/issues/169718) [Bug] memory search: storage-error on short-term-lock acquire hides the real exception (use-after-close during shutdown)
- [#190523](https://github.com/openclaw/openclaw/issues/190523) Lossless recovery for the timed out draining work before reply session rollover wedge: one queued sessions_send message (workaround + new trigger data, 2026.9.33)
- [#190469](https://github.com/openclaw/openclaw/issues/190469) tui: multiline /btw in local mode runs as a main agent turn and is persisted to the session transcript
- [#188799](https://github.com/openclaw/openclaw/issues/188799) [Bug]: Direct Talk voice transcripts leave interaction time unset and disappear from recent session pages
- [#176244](https://github.com/openclaw/openclaw/issues/176244) web_fetch: markdown extraction merges table cells and flattens pre code indentation
- [#190339](https://github.com/openclaw/openclaw/issues/190339) [Bug]: Literal heading tags appear when Telegram rich messages contain HTML headings
- [#190344](https://github.com/openclaw/openclaw/issues/190344) Native PR provisioning spends excessive time bootstrapping cold and warm siblings
- [#190338](https://github.com/openclaw/openclaw/issues/190338) [Bug]: WebChat iPhone images fail native loading in Docker sandbox: “media reference is not staged”
- [#184207](https://github.com/openclaw/openclaw/issues/184207) Bug: xAI Talk disconnects when a VAD successor arrives without the interrupted terminal
- [#190201](https://github.com/openclaw/openclaw/issues/190201) fix: prepared PRs cannot integrate their target branch
- [#190216](https://github.com/openclaw/openclaw/issues/190216) [Bug]: ACP session/load of a long bridge session shows no history and continues in a different Gateway session
- [#188895](https://github.com/openclaw/openclaw/issues/188895) [Bug]: Native Windows local workspace preparation fails during Git initialization
- [#190231](https://github.com/openclaw/openclaw/issues/190231) Share npm pin classification between updates and trust audits
- [#190137](https://github.com/openclaw/openclaw/issues/190137) Local models on IPv4-mapped 127/8 loopback addresses use cloud watchdog timeouts
- [#190226](https://github.com/openclaw/openclaw/issues/190226) Consolidate duplicated Control UI native listener lifetimes
- [#186781](https://github.com/openclaw/openclaw/issues/186781) Feature: relative time labels overstate ages at day boundaries
- [#186744](https://github.com/openclaw/openclaw/issues/186744) Feature: relative time labels overstate ages at half-minute boundaries
- [#183856](https://github.com/openclaw/openclaw/issues/183856) [Bug]: /status as the first message after /new writes a retired top-level `channel` session field (doctor: legacy delivery fields)
- [#127324](https://github.com/openclaw/openclaw/issues/127324) [Bug]: cron overview and detail transitions lose keyboard focus
- [#190202](https://github.com/openclaw/openclaw/issues/190202) [Bug]: completion benchmark fails after provenance import relocation
- [#190215](https://github.com/openclaw/openclaw/issues/190215) Skill workshop: quiet/log-only mode for learned-skill announcements
- [#131993](https://github.com/openclaw/openclaw/issues/131993) [Bug]: investigate delayed peer prompt ordering after multiple TUI replies
- [#190177](https://github.com/openclaw/openclaw/issues/190177) [Bug]: Doctor refuses the caller's own migration and the caller's Gateway reports worker policy changes when an older system Gateway unit runs as another account
- [#190140](https://github.com/openclaw/openclaw/issues/190140) [Bug]: gateway status prints single-gateway advice when external supervision is configured
- [#185365](https://github.com/openclaw/openclaw/issues/185365) [Feature]: Decode managed inbound attachment filenames for display

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 259,528 · **Open issues:** 52,253 · **Last push:** <1h ago

On November 2, 2026, there were no new releases or merged pull requests for Hermes Agent, signifying a day of routine maintenance. However, several new issues were reported, with the most notable being issue #147653, which raises concerns about a false positive related to lifecycle guard blocking a local file-preparation command after an update. Additionally, issue #147699 addresses a problem in Slack where a link-unfurl message is mishandled, leading to message confusion. Other significant bugs reported include a ValueError on Windows devices (issue #147719) and mis-bucketing of task statuses in the Kanban dashboard (issue #147729). Overall, while there were no major updates, these ongoing discussions highlight areas for improvement within the platform.

#### 🐛 New Issues
- [#147653](https://github.com/NousResearch/hermes-agent/issues/147653) [Bug]: False positive: lifecycle guard blocks a local file-preparation command after update `type/bug` `comp/tools` `tool/terminal` `backend/local` 💬1
- [#147699](https://github.com/NousResearch/hermes-agent/issues/147699) Slack: when a link-unfurl message_changed is handled before the original message, the original becomes a second turn ("Steered into current run") `type/bug` `comp/gateway` `comp/plugins` `platform/slack` 💬1
- [#147758](https://github.com/NousResearch/hermes-agent/issues/147758) doctor: "Stale channel record" is a false positive — staleness check requires install.json, which only a desktop e2e fixture writes 💬1
- [#147719](https://github.com/NousResearch/hermes-agent/issues/147719) [Bug]: (desktop/tui-gateway) complete.path ValueError on Windows device paths — unguarded ntpath.relpath at tui_gateway/methods_complete.py:215 `type/bug` `P3` `os/windows` `comp/tui-gateway` 💬1
- [#147729](https://github.com/NousResearch/hermes-agent/issues/147729) [Bug]: Kanban dashboard mis-buckets out-of-workflow task statuses (e.g. legacy 'cancelled') into the todo column 💬1
- [#147739](https://github.com/NousResearch/hermes-agent/issues/147739) [Bug]: Shared browser profile refused forever after a container recreate: stale SingletonLock + retained launch record read as "a Chromium in another environment" 💬1
- [#147738](https://github.com/NousResearch/hermes-agent/issues/147738) [Bug]: Mobile app (Android beta) native sign-in opens /auth/callback twice — second redemption renders "invalid_grant" while the app still signs in 💬1
- [#147694](https://github.com/NousResearch/hermes-agent/issues/147694) Dashboard profile actions (Skills → Update, …) fail with UnscopedSecretError when gateway.multiplex_profiles is on and terminal.env_passthrough lists a secret `type/bug` `comp/cli` `comp/gateway` `area/auth` 💬1
- [#147766](https://github.com/NousResearch/hermes-agent/issues/147766) [Bug]: checkpoints stop for good when a nested repo's .git breaks after it was recorded as a gitlink
- [#147765](https://github.com/NousResearch/hermes-agent/issues/147765) [Feature]: Windows install should offer (never auto-apply) a Defender exclusion for the Hermes folder
- [#147759](https://github.com/NousResearch/hermes-agent/issues/147759) kanban: add a claim-time veto for per-model concurrency (every lifecycle hook is post-hoc, so plugins cannot refuse a claim)
- [#147756](https://github.com/NousResearch/hermes-agent/issues/147756) [Bug]: Desktop Bot relay strands settled replies without a new outbox push; restart does not recover claims
- [#147747](https://github.com/NousResearch/hermes-agent/issues/147747) [Bug]: Cron agent sessions never receive the firing profile's .env — mnemosyne_* tools silently operate on the default profile's memory bank
- [#147744](https://github.com/NousResearch/hermes-agent/issues/147744) [Setup]: python error
- [#147737](https://github.com/NousResearch/hermes-agent/issues/147737) Escaped quote in python -c script is flagged as malformed executable payload
- [#147736](https://github.com/NousResearch/hermes-agent/issues/147736) [Setup Showcase] hermes-environment: a measured CPU-only Hermes deployment (19 providers, 58 MCP servers, 596 skills)
- [#147720](https://github.com/NousResearch/hermes-agent/issues/147720) [Bug]: Profile-route subagents ignore the target profile’s toolsets (get the parent’s full toolset instead) `type/security` `comp/agent` `comp/plugins` `tool/terminal`
- [#147715](https://github.com/NousResearch/hermes-agent/issues/147715) [Bug]: Switch between same provider subscription `type/bug` `comp/agent` `provider/anthropic` `P2`
- [#147716](https://github.com/NousResearch/hermes-agent/issues/147716) [Bug]: Webapp on iPhone Safari: sidebar overlays chat, composer keyboard unreliable, "Resume failed – not_found" on existing sessions `type/bug` `P2` `comp/dashboard` `area/sessions`
- [#147710](https://github.com/NousResearch/hermes-agent/issues/147710) [Bug]: Routed model returned unsolicited weapons instructions mid-conversation (aion-3.5-mini) `type/bug` `comp/agent` `tool/tts` `P3`
- [#147732](https://github.com/NousResearch/hermes-agent/issues/147732) kimi-coding: live model discovery fails on gzip response, picker shows only stale static list
- [#147713](https://github.com/NousResearch/hermes-agent/issues/147713) [Bug]: a queued desktop gateway pick spends the dial budget while it waits `type/bug` `P2` `comp/desktop` `area/profiles`
- [#147697](https://github.com/NousResearch/hermes-agent/issues/147697) fix(pricing): OpenCode Zen and Go sessions record cost_status=unknown although models.dev ships both rate cards `type/bug` `comp/agent` `P2` `area/billing`
- [#147702](https://github.com/NousResearch/hermes-agent/issues/147702) Multiplexed gateway: a named profile's own plugin routes are unreachable under /p/<profile>/api/plugins/ `type/bug` `comp/gateway` `P3` `area/profiles`
- [#147704](https://github.com/NousResearch/hermes-agent/issues/147704) /diff turn [N]: show one turn's own changes, not the cumulative session diff `type/feature` `comp/cli` `P3`

#### 🔒 Closed Issues
- [#139135](https://github.com/NousResearch/hermes-agent/issues/139135) [Bug]: Discord async child completes but durable result stays pending and parent does not resume
- [#144006](https://github.com/NousResearch/hermes-agent/issues/144006) [Bug]: Discord thread delegate_task completions refused admission_conflict forever: the session-key fallback source never carries parent_chat_id
- [#141893](https://github.com/NousResearch/hermes-agent/issues/141893) Async delegation watcher retries stranded pending deliveries every 2s forever (no backoff, no attempt accounting)
- [#146136](https://github.com/NousResearch/hermes-agent/issues/146136) [Bug]: Plain Telegram group (no topics, group_sessions_per_user: false): delegate_task completions refused admission_conflict, delivered only on the next inbound turn
- [#145611](https://github.com/NousResearch/hermes-agent/issues/145611) [Bug]: Telegram forum-topic delegate_task completions refused admission_conflict forever; parent never notified
- [#143447](https://github.com/NousResearch/hermes-agent/issues/143447) [Bug]: Automation wakes refused admission_conflict forever when the lane's profile route postdates the session origin
- [#147737](https://github.com/NousResearch/hermes-agent/issues/147737) Escaped quote in python -c script is flagged as malformed executable payload

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 96,083 · **Open issues:** 9,723 · **Last push:** <1h ago

On November 2, 2026, there were no new releases for vLLM, but several important pull requests were merged, including improvements to the vectorization of specific operations in version DSv4.1 and a bug fix for the CUDA implementation of the in_proj_ba overlap. Additionally, performance enhancements were made by fusing padding skipping in MoE routing and resolving the per-layer KV dtype in attention runtime. A notable new issue was reported regarding Quark, where `exclude` entries written as weight names are not matched, disrupting MTP speculative decoding. Overall, the day focused on optimizations and bug fixes, maintaining the project's steady progress.

#### ✅ Merged PRs
- [#64914](https://github.com/vllm-project/vllm/pull/64914) [MRV2] Cap torch.topk rows in chunked prompt logprobs
- [#65008](https://github.com/vllm-project/vllm/pull/65008) [CI] Lower gpu_memory_utilization in test_gemma4_lora
- [#64816](https://github.com/vllm-project/vllm/pull/64816) [Perf][DSv4.1] Vectorize first-layer HC expansion copy
- [#65000](https://github.com/vllm-project/vllm/pull/65000) [Kernel] Batch invariance: combine the NVFP4 linear kernel overrides (follow-up to #62192)
- [#60543](https://github.com/vllm-project/vllm/pull/60543) [Bugfix][DSv4.1] Autotune the sparse indexer's wq_b GEMM
- [#63927](https://github.com/vllm-project/vllm/pull/63927) [Perf][KV Offload] Keep offload event metadata out of the cyclic GC
- [#64999](https://github.com/vllm-project/vllm/pull/64999) [Bugfix][GDN] Restore in_proj_ba overlap on CUDA
- [#56155](https://github.com/vllm-project/vllm/pull/56155) [Core][Attention] Resolve per-layer KV dtype in attention runtime
- [#63900](https://github.com/vllm-project/vllm/pull/63900) [KV Offload] Remove unused touch from CachePolicy and OffloadingManager
- [#63695](https://github.com/vllm-project/vllm/pull/63695) [KV Offload] Carry request context on raw stored events
- [#64955](https://github.com/vllm-project/vllm/pull/64955) [Perf][MoE] Fuse padding skipping in grouped and Muse prepared routing
- [#59961](https://github.com/vllm-project/vllm/pull/59961) [Bugfix][DSv3.2] Carry the shared indexer top-k across pipeline stages
- [#64607](https://github.com/vllm-project/vllm/pull/64607) [Recipe] Qwen3.5-397B-A17B: add the B200 NVFP4 TP2 agentic preset

#### 🐛 New Issues
- [#65034](https://github.com/vllm-project/vllm/issues/65034) [Bug]: Quark `exclude` entries written as weight names (e.g. `mtp.fc.weight`) are silently never matched, breaking MTP speculative decoding `bug` `rocm` `speculative-decoding` `quantization` 💬5
- [#65035](https://github.com/vllm-project/vllm/issues/65035) [Bug]: Anthropic Messages stream reports the whole prompt as input_tokens in message_start `rocm` 💬1
- [#64997](https://github.com/vllm-project/vllm/issues/64997) [Frontend]: Render requests: keep mm_metadata in the response when the tensors are omitted `feature request` 💬1
- [#64956](https://github.com/vllm-project/vllm/issues/64956) [Bug]: kv_cache_dtype="turboquant_3bit_nc" crashes on Phi-2 (head_size=80) — supports_head_size() claims "any positive value", but the Hadamard rotation is built at the next power of two (128×128) and matmul'd with an 80-dim key `bug` 💬1
- [#64953](https://github.com/vllm-project/vllm/issues/64953) [Bug]: `seed=-1` passes config validation and kills engine init inside `np.random.seed` ("Seed must be between 0 and 2**32 - 1") — while `SamplingParams` already treats `-1` as "no seed" `bug` 💬1
- [#65042](https://github.com/vllm-project/vllm/issues/65042) [Doc]: Docs use CLI flag names that `vllm serve` does not register
- [#65014](https://github.com/vllm-project/vllm/issues/65014) [Feature]: Update tilelang to 0.1.15 `feature request`
- [#64973](https://github.com/vllm-project/vllm/issues/64973) [RFC]: Hybrid KV Backend: Eliminating Disk Restore Pipeline Bubbles Without CPU Memory Bloat `RFC`
- [#64985](https://github.com/vllm-project/vllm/issues/64985) [Bug]: KV-sharing fast prefill hangs under async scheduling (non-blocking D2H copy of query_start_loc_cpu)
- [#64972](https://github.com/vllm-project/vllm/issues/64972) [Bug]: CudaPlatform.log_warnings() aborts startup on an unqueryable NVML device even when CUDA_VISIBLE_DEVICES excludes it
- [#64954](https://github.com/vllm-project/vllm/issues/64954) [Bug]: `--attention-backend TORCH_SDPA` passes config validation, then dies with "Backend TORCH_SDPA must be registered before use" — a ViT-only tag offered as a valid option, whose `ValueError` bypasses the "Selected backend ... is not valid" path `bug`
- [#64952](https://github.com/vllm-project/vllm/issues/64952) [Feature]: Add pipeline parallelism support for Qwen3.8-Flash-Next (Qwen4Exp) `feature request`
- [#64940](https://github.com/vllm-project/vllm/issues/64940) [Bug]: Responses API 500s on assistant message with empty content list `bug`

#### 🔒 Closed Issues
- [#47548](https://github.com/vllm-project/vllm/issues/47548) [Bug]: Combination of sleep mode and speculative decoding cause crash (ROCm / MI250)
- [#63170](https://github.com/vllm-project/vllm/issues/63170) [Bug]: GLM-5.x (DSA) under pipeline parallelism: reuse layers at a stage start read stale top-k indices
- [#47570](https://github.com/vllm-project/vllm/issues/47570) [Bug]: wrong cutlass Arch import
- [#47561](https://github.com/vllm-project/vllm/issues/47561) CUDA illegal memory access during speculator prefill CUDA graph capture on H100
- [#47528](https://github.com/vllm-project/vllm/issues/47528) [Bug]: DeepSeek-V4-Pro (DeepseekV4ForCausalLM, scale_fmt=ue8m0 / FP4 MoE) produces garbled / degenerate output under tensor parallelism (TP), while data parallelism + expert parallelism (DP+EP) works correctly
- [#64907](https://github.com/vllm-project/vllm/issues/64907) [Feature]: Batch-invariant Qwen GDN with prefix caching and MTP

### SGLang (`sgl-project/sglang`)

**Stars:** 38,352 · **Open issues:** 6,289 · **Last push:** <1h ago

Today in SGLang, there were no new releases, but multiple significant pull requests were merged, enhancing performance, fixing bugs, and refining features. Noteworthy updates include the addition of H20 configurations for the fused_moe in GLM-5.3-Flash TP8/TP4, and the implementation of the Triton softmax top-k router for Qwen3-Next, both aimed at improving model efficiency on NVIDIA and AMD platforms. Additionally, several fixes addressed issues such as freeing replaced MoE weights in humming, optimizing the KDA/GDN recurrent outputs, and enhancing dynamic batching for diffusion models. Among new issues reported, a critical bug regarding non-deterministic decoding in Qwen-Image 2.1 VAE was highlighted, which could affect reproducibility in AMD systems.

#### ✅ Merged PRs
- [#45089](https://github.com/sgl-project/sglang/pull/45089) [Perf] [NVIDIA] fused_moe: Add H20 configs for GLM-5.3-Flash TP8/TP4
- [#47236](https://github.com/sgl-project/sglang/pull/47236) [Perf] [AMD] moe/topk: Use the Triton softmax top-k router for Qwen3-Next (hidden 2048)
- [#45200](https://github.com/sgl-project/sglang/pull/45200) [Fix] humming: Free replaced MoE weights after each sublayer transform
- [#47373](https://github.com/sgl-project/sglang/pull/47373) [Perf] [NPU] attention: Support mlaprolog for kimik3
- [#43194](https://github.com/sgl-project/sglang/pull/43194) [Fix] diffusion: Cosmos3 Bug fixes
- [#47066](https://github.com/sgl-project/sglang/pull/47066) [Fix] kernels: Hash tensors over 8 GiB in gpu_tensor_hash
- [#47611](https://github.com/sgl-project/sglang/pull/47611) [Test] [Ascend] npu: Add GLM-5.2 2P2D gpqa cases and unify evalscope retry loop
- [#46225](https://github.com/sgl-project/sglang/pull/46225) [Fix] attention: Zero padded KDA/GDN recurrent outputs
- [#47744](https://github.com/sgl-project/sglang/pull/47744) [Fix] linear: Keep replicated outputs out of TP symmetric memory
- [#47173](https://github.com/sgl-project/sglang/pull/47173) [Refactor] [NPU] graph: Remove the NPU graph runner
- [#47804](https://github.com/sgl-project/sglang/pull/47804) [Refactor] environ: Rename the SGLANG_Q35MF_* runtime switches to SGLANG_OPT_* names
- [#47229](https://github.com/sgl-project/sglang/pull/47229) [Fix] kernels: Support OOT fused ops under torch.compile
- [#46274](https://github.com/sgl-project/sglang/pull/46274) [Fix] diffusion: Keep each request's rollout trajectory and conditioning under dynamic batching
- [#47605](https://github.com/sgl-project/sglang/pull/47605) [Feat] diffusion: LRU eviction for LoRA merge cache
- [#47601](https://github.com/sgl-project/sglang/pull/47601) [Test] model_loader: Cover unindexed Mistral shard filtering
- [#46883](https://github.com/sgl-project/sglang/pull/46883) [Chore] [AMD] docker: Build uTLX into the gfx950 rocm10 images
- [#46691](https://github.com/sgl-project/sglang/pull/46691) [Feat] [AMD] minimax: gfx950 MoE, router GEMV, block-fp8 GEMM and fp8 producer kernels
- [#46692](https://github.com/sgl-project/sglang/pull/46692) [Feat] [AMD] distributed: JIT quick all-reduce for TP4 on gfx950
- [#46255](https://github.com/sgl-project/sglang/pull/46255) [Fix] diffusion: LoRA alpha reload, auto-mode skip, critic coverage
- [#46690](https://github.com/sgl-project/sglang/pull/46690) [Feat] [AMD] minimax: gfx950 sparse attention, NVFP4 KV and DSpark verify kernels
- [#47758](https://github.com/sgl-project/sglang/pull/47758) [Fix] disagg: Give the decode queue test scheduler a tree_cache
- [#47716](https://github.com/sgl-project/sglang/pull/47716) [Fix] scheduler: Decide early result processing before scheduling the next batch
- [#47789](https://github.com/sgl-project/sglang/pull/47789) [CI] nightly: Disable the MiniMax-M3.1-Flash H200 test while it times out
- [#43900](https://github.com/sgl-project/sglang/pull/43900) [Refactor] scheduler: Route every step launch through one hook and count in-flight steps
- [#47736](https://github.com/sgl-project/sglang/pull/47736) [Fix] tests: Initialize DCP replay backend capability
- [#46328](https://github.com/sgl-project/sglang/pull/46328) [Perf] diffusion: opt-in Wan UMT5 padding trim (SGLANG_DIFFUSION_WAN_TEXT_PADDING)
- [#47612](https://github.com/sgl-project/sglang/pull/47612) [MiniMax-M3] Keep the fused q/k/v + index GEMM writable by online weight updates
- [#47180](https://github.com/sgl-project/sglang/pull/47180) [Perf] [AMD] dsa: Replicate the DCP query projection on the owned route
- [#40914](https://github.com/sgl-project/sglang/pull/40914) [Refactor] memory-pool: Build draft sidecar host pools from buffer info
- [#47474](https://github.com/sgl-project/sglang/pull/47474) [Fix] diffusion/bcg: Warm up LTX-2 two-stage at the output resolution
- [#47684](https://github.com/sgl-project/sglang/pull/47684) [Perf] attention: Round the DeepSeek-V4.1 dense indexer logits tiles to whole SM waves
- [#46395](https://github.com/sgl-project/sglang/pull/46395) [Feat] disagg: Write PD decode KV to the linker and skip pages the prefill already stored
- [#47488](https://github.com/sgl-project/sglang/pull/47488) [Fix] diffusion: Fail fast on offline runtime failures
- [#47686](https://github.com/sgl-project/sglang/pull/47686) [Perf] diffusion: Nomas camera attention reads each frame's value directly when camera_chunk_size is 1
- [#47732](https://github.com/sgl-project/sglang/pull/47732) [Fix] kv_events: Offset ipc endpoints per DP rank and finish shutdown when the queue is full
- [#45981](https://github.com/sgl-project/sglang/pull/45981) [CI] lora: Simplify LoRA tests and add a lora rerun group
- [#47727](https://github.com/sgl-project/sglang/pull/47727) [Fix] disaggregation: Call finalize_bootstrap outside the assert statement
- [#47725](https://github.com/sgl-project/sglang/pull/47725) [Fix] disaggregation: Initialize the bootstrap server loop and runner before the server thread starts
- [#38943](https://github.com/sgl-project/sglang/pull/38943) [Feat] dcp: Support breakable prefill CUDA graphs under decode context parallelism
- [#40708](https://github.com/sgl-project/sglang/pull/40708) [Perf] [AMD] qwen3.5: Route 512-expert softmax MoE routing through aiter topk_gating
- [#47704](https://github.com/sgl-project/sglang/pull/47704) [Fix] disaggregation: Match the whole bootstrap address when evicting a dead prefill's connections
- [#47121](https://github.com/sgl-project/sglang/pull/47121) [Perf] diffusion: Wan-Animate-2 1.7x faster denoising via exact FA3 in-context attention, opt-in FP8 reference K/V
- [#47723](https://github.com/sgl-project/sglang/pull/47723) [Doc] skills: Update the CI skills for the tier layout and current pipeline
- [#47619](https://github.com/sgl-project/sglang/pull/47619) [CI] ci: Re-tier CUDA tests across base, extra, nightly, and weekly by importance
- [#45065](https://github.com/sgl-project/sglang/pull/45065) [Fix] diffusion: Exit the worker after an unrecoverable device error
- [#44574](https://github.com/sgl-project/sglang/pull/44574) [Fix] multimodal: Keep shared-memory feature transport for multi-node pipeline parallelism
- [#46871](https://github.com/sgl-project/sglang/pull/46871) [Fix] diffusion: keep tied vocab tables on device under layerwise offload
- [#47670](https://github.com/sgl-project/sglang/pull/47670) [Fix] mem_cache: Keep K/V in separate allocations under torch.compile
- [#46685](https://github.com/sgl-project/sglang/pull/46685) [CI] [AMD] monokernels: Bump the sgl-amd-mono pin daily
- [#47705](https://github.com/sgl-project/sglang/pull/47705) [Refactor] memory-pool: Rename index key format to layout
- [#39880](https://github.com/sgl-project/sglang/pull/39880) [Feat] hicache: Add the fast_file local storage backend
- [#40916](https://github.com/sgl-project/sglang/pull/40916) [Refactor] memory-pool: Build QSA indexer host pools from buffer info
- [#47029](https://github.com/sgl-project/sglang/pull/47029) [Fix] attention: Compute extend attention KV offsets in int64
- [#46860](https://github.com/sgl-project/sglang/pull/46860) [Refactor] diffusion: normalize diffusers output layout in one place

#### 🐛 New Issues
- [#47801](https://github.com/sgl-project/sglang/issues/47801) [Bug] [AMD] diffusion: Qwen-Image 2.1 VAE decode is not deterministic at 1024x1024 on ROCm (math SDPA in the ROCm 7.2.1 PyTorch build, see ROCm/pytorch#3931)
- [#47797](https://github.com/sgl-project/sglang/issues/47797) [RFC] Define per-request speculative decoding opt-out execution semantics
- [#47783](https://github.com/sgl-project/sglang/issues/47783) <!-- ccr-overview-v2 -->
- [#47764](https://github.com/sgl-project/sglang/issues/47764) [Feature] attention: FlashInfer backend rejects ragged verify in CUDA graph
- [#47763](https://github.com/sgl-project/sglang/issues/47763) [RFC] Agent harness x SGLang: keep multi-turn agent prefixes cacheable
- [#47759](https://github.com/sgl-project/sglang/issues/47759) [Bug] Video input data still leak into logs at --log-requests-level 0/1
- [#47734](https://github.com/sgl-project/sglang/issues/47734) [Perf] sglang-kernel FA3 picks MmaPV_is_RS=false for hdim 128 non-causal on H200 (1.5-3% slower than flash-attn's hopper build)
- [#47710](https://github.com/sgl-project/sglang/issues/47710) [Bug] SM120: fused-A GEMM eligibility accepts K % 256 but the auto-selected CuTe DSL kernel asserts K % 1024 (hidden_size=3584 crashes)

#### 🔒 Closed Issues
- [#37216](https://github.com/sgl-project/sglang/issues/37216) [Bug] remote_instance weight loading fails with --pp-size 2 — TransferEngine info keyed by tp_rank
- [#32124](https://github.com/sgl-project/sglang/issues/32124) [Feature] Skip redundant DeepGEMM all-M warmup when a compatible JIT cache is restored
- [#37648](https://github.com/sgl-project/sglang/issues/37648) [Bug][ROCm] GLM-5.3-MXFP4 TP8 + EAGLE GPU memory fault under high-concurrency long-context load
- [#37646](https://github.com/sgl-project/sglang/issues/37646) [Bug] --enable-flashinfer-pure-allreduce is not available on 0.5.18
- [#37645](https://github.com/sgl-project/sglang/issues/37645) [Bug] glm45 reasoning parser returns the whole answer as reasoning_content (content empty) when the model skips thinking and stops on EOS
- [#37640](https://github.com/sgl-project/sglang/issues/37640) [Bug] sgl_kernel ships infllm_ops as a cp310-tagged extension inside an abi3 wheel: unimportable on Python != 3.10, and it carries no sm_121 code
- [#35433](https://github.com/sgl-project/sglang/issues/35433) [Bug] DeepSeek-V4 returns an empty response when the final message has role=system
- [#37590](https://github.com/sgl-project/sglang/issues/37590) [Bug] DP-attention scheduler crashes (NoneType len) when attn_tp_size>1 and attn_cp_size>1: request-broadcast source rank has work_reqs=None
- [#37553](https://github.com/sgl-project/sglang/issues/37553) custom_mask grows unbounded via torch.cat in EAGLE/DFlash speculative decoding
- [#37369](https://github.com/sgl-project/sglang/issues/37369) [Bug] GLM-5.3-Flash RunAI streaming can corrupt fused MLA weights
- [#37368](https://github.com/sgl-project/sglang/issues/37368) [Bug] NVFP4 online MoE loading can use overwritten RunAI streamer tensors
- [#37526](https://github.com/sgl-project/sglang/issues/37526) [CI] Test Escape Report: /rerun-test did not enforce registered test __main__ validation
- [#47382](https://github.com/sgl-project/sglang/issues/47382) [Doc][NPU] Various missing clarifications, prerequisites and validation steps in Ascend NPU documentation
- [#47602](https://github.com/sgl-project/sglang/issues/47602) [Test] Cover unindexed Mistral safetensors filtering
- [#38167](https://github.com/sgl-project/sglang/issues/38167) [Bug][Diffusion] MiniMax-H3: 1344x768 fails deterministically with "CUDA driver error: device not ready" on 12GB, and the failed request poisons the server
- [#47297](https://github.com/sgl-project/sglang/issues/47297) [Bug] diffusion: LingBot-Video-MoE crashes in text encoding under default layerwise offload (tied vocab table on CPU)

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 133,093 · **Open issues:** 2,598 · **Last push:** 1h ago

On November 2, 2026, llama.cpp released several new versions, including b12032 which introduced improvements for SYCL's LevelZero includes and libraries. Notably, b12031 added initial IQ3 support for OpenCL, enhancing compatibility with new hardware. The merged pull requests included a fix for numpy dependencies and further adjustments to SYCL as well. Among the new issues reported, a significant concern arose regarding SYCL performance on Intel Arc B60 multi-GPU setups, where a prefill operation exhibited drastically slower speeds compared to single GPU performance. This day showcased active development and user feedback addressing performance challenges across various platforms.

#### 🚀 New Releases
- [b12032](https://github.com/ggml-org/llama.cpp/releases/tag/b12032) b12032
- [b12031](https://github.com/ggml-org/llama.cpp/releases/tag/b12031) b12031
- [b12030](https://github.com/ggml-org/llama.cpp/releases/tag/b12030) b12030
- [b12029](https://github.com/ggml-org/llama.cpp/releases/tag/b12029) b12029
- [b12028](https://github.com/ggml-org/llama.cpp/releases/tag/b12028) b12028
- [b12027](https://github.com/ggml-org/llama.cpp/releases/tag/b12027) b12027

#### ✅ Merged PRs
- [#31508](https://github.com/ggml-org/llama.cpp/pull/31508) requirements : fix numpy dependencies
- [#31076](https://github.com/ggml-org/llama.cpp/pull/31076) sycl: Try PkgConfig for LevelZero includes / libs
- [#31338](https://github.com/ggml-org/llama.cpp/pull/31338) opencl: add initial iq3 support

#### 🐛 New Issues
- [#31510](https://github.com/ggml-org/llama.cpp/issues/31510) Misc. bug: SYCL (Intel Arc B60) — multi-GPU -sm layer + --cpu-moe is 100-1000x slower than single GPU: 5-token prefill takes 165 s on one host thread 💬2
- [#31503](https://github.com/ggml-org/llama.cpp/issues/31503) CUDA error: unsupported PTX toolchain on sm_75 (Tesla T4) with server-cuda13 builds 11176/11243/12030; build 12004 works 💬2
- [#31495](https://github.com/ggml-org/llama.cpp/issues/31495) Misc. bug: --spec-type draft-mtp cuts HIP prefill throughput by ~80% (Vulkan unaffected) 💬2
- [#31520](https://github.com/ggml-org/llama.cpp/issues/31520) Eval bug: gpt-oss-20b "<|channel|>final code<|message|>" header is rejected by the parser, server returns 500 `bug-unconfirmed`
- [#31516](https://github.com/ggml-org/llama.cpp/issues/31516) Eval bug: CPU decode ~30-45% slower on Intel hybrid CPUs with GCC >= 14 OpenMP builds (libgomp sets spin count to 1)
- [#31514](https://github.com/ggml-org/llama.cpp/issues/31514) Feature Request: separate cache types for the SWA and full-attention KV caches `enhancement`
- [#31509](https://github.com/ggml-org/llama.cpp/issues/31509) Eval bug: vulkan: random all-NaN logits on Radeon 680M, gone with integer dot product disabled `bug-unconfirmed`

#### 🔒 Closed Issues
- [#23769](https://github.com/ggml-org/llama.cpp/issues/23769) Crash with Vulcan on Intel B70 with MoE models (Qwen3.6-35B-A3B-MTP and Qwen3.6-35B-A3B)
- [#27329](https://github.com/ggml-org/llama.cpp/issues/27329) [CUDA][Blackwell] Qwen3.8-27B-NVFP4 decode hangs, CPU spin, no GPU work
- [#26088](https://github.com/ggml-org/llama.cpp/issues/26088) Eval bug: Gemma 4 31B enters `<unused49>` (token ID 62) infinite generation loop after long idle period, reproducible across multiple GGUF quant sources
- [#27364](https://github.com/ggml-org/llama.cpp/issues/27364) Misc. bug: token per second metrics broken
- [#28933](https://github.com/ggml-org/llama.cpp/issues/28933) qwen4_exp (Qwen3.8-Flash-Next): host-side memory (RSS+swap) grows during normal chat on a 128GB unified-memory system
- [#28939](https://github.com/ggml-org/llama.cpp/issues/28939) Eval bug: DeepSeek-v4-flash-vision exp. DSpark and Dflash not increase the tok gen speed.
- [#30001](https://github.com/ggml-org/llama.cpp/issues/30001) Feature Request: Optimize long context decode: Enable `q8_0-q4_0` FlashAttention kernel without full ALL_QUANTS
- [#28798](https://github.com/ggml-org/llama.cpp/issues/28798) Eval bug: SIGSEGV in `ggml_compute_forward_flash_attn_ext_tiled` (CPU) on long prompts — reproduces across multiple models/commits, workaround is `--flash-attn off`
- [#28969](https://github.com/ggml-org/llama.cpp/issues/28969) gguf-dump prints metadata keys and tensor names raw, allowing terminal escape sequence injection (OSC 8 hyperlinks, OSC 52 clipboard writes)
- [#29010](https://github.com/ggml-org/llama.cpp/issues/29010) GLM-5.3 (glm_moe_dsa) emits repeated '@' tokens instead of a response on CPU (ngl=0)
- [#29011](https://github.com/ggml-org/llama.cpp/issues/29011) Feature Request: MoE Browser Experts
- [#29017](https://github.com/ggml-org/llama.cpp/issues/29017) Misc. bug: Significant generation throughput drop when `presence_penalty > 0` with MTP enabled
- [#29023](https://github.com/ggml-org/llama.cpp/issues/29023) Misc. bug: UI Bug. Сhat message box grows above the top of the window on the empty chat screen (regression in b10824)
- [#29039](https://github.com/ggml-org/llama.cpp/issues/29039) Misc. bug: Vulkan flash_attn.comp writes past the end of Qf in the quantized (MMQ) path
- [#29044](https://github.com/ggml-org/llama.cpp/issues/29044) Eval bug: draft-mtp draft model fails to load with -ngl (vector::_M_range_check 1 >= 1); explicit -ts fixes it — likely NaN split when device reports 0 free
- [#29061](https://github.com/ggml-org/llama.cpp/issues/29061) Feature Request: Edge0 support and also direct safetensors
- [#31074](https://github.com/ggml-org/llama.cpp/issues/31074) Compile bug: [SYCL] Leverl Zero detection / support needs updating

### Ollama (`ollama/ollama`)

**Stars:** 185,607 · **Open issues:** 4,537 · **Last push:** 1d ago

On November 2, 2026, there were no new releases or merged pull requests for Ollama. However, several new issues were reported, including #19459, which highlights a loading failure for the Qwen3.8-27B hybrid-attention GGUFs due to a missing layer projection, and #19451, which concerns the installation on Linux that inadvertently overwrites the systemd service file. Additional issues include a timeout during CPU image processing for Gemma3 on Windows ARM64 (#19444) and a proposal (#19455) for opt-in token metrics logging per request. Overall, the day was characterized by routine maintenance and the emergence of several significant issues requiring attention.

#### 🐛 New Issues
- [#19459](https://github.com/ollama/ollama/issues/19459) Qwen3.8-27B hybrid-attention GGUFs fail to load: qwen3next: layer 64 missing attn_qkv/attn_gate projections 💬1
- [#19451](https://github.com/ollama/ollama/issues/19451) Installing on linux overwrites systemd service file `bug` 💬1
- [#19444](https://github.com/ollama/ollama/issues/19444) Windows ARM64: Gemma3 vision times out during CPU image processing 💬1
- [#19457](https://github.com/ollama/ollama/issues/19457) Long replies break deepseek-r1 / phi3.5 until the model is unloaded (context shift rescales cached keys)
- [#19455](https://github.com/ollama/ollama/issues/19455) Proposal: opt-in per-request token metrics logging
- [#19446](https://github.com/ollama/ollama/issues/19446) /api/embed ignores tokenizer.ggml.add_bos_token / add_eos_token, so the context limit is 1–2 tokens too small for models that set them to false

#### 🔒 Closed Issues
- [#19427](https://github.com/ollama/ollama/issues/19427) Gemma3:4b returns an empty JSON object with a long extraction prompt and structured output
- [#19424](https://github.com/ollama/ollama/issues/19424) Qwen models end the entire chat when thinking ends
- [#19451](https://github.com/ollama/ollama/issues/19451) Installing on linux overwrites systemd service file

### LiteLLM (`BerriAI/litellm`)

**Stars:** 62,501 · **Open issues:** 5,574 · **Last push:** <1h ago

On November 2, 2026, there were no new releases or merged pull requests for LiteLLM, indicating a routine maintenance day. Noteworthy among the newly reported issues is #49585, which highlights a broken CLA link in the CONTRIBUTING.md file, leading to a 'Bad credentials' error. Additionally, #49567 raises concerns about Gemini image requests that are returning a 200 OK status while failing to create corresponding SpendLogs entries, thus silently skipping necessary operations. Other significant bugs reported include metadata not being exported properly in OTel v2 (#49602) and the minimax provider failing to process top-level reasoning efforts correctly (#49574).

#### 🐛 New Issues
- [#49585](https://github.com/BerriAI/litellm/issues/49585) [Bug]: docs: CLA link in CONTRIBUTING.md returns 'Bad credentials' error `bug` 💬1
- [#49567](https://github.com/BerriAI/litellm/issues/49567) [Bug]: Gemini image requests return 200 OK but write no SpendLogs row (silent skip; state-dependent) `bug` `llm translation` 💬1
- [#49602](https://github.com/BerriAI/litellm/issues/49602) [Bug]: OTel v2: virtual key metadata is not exported as span attributes, even when allowlisted `bug` `llm translation`
- [#49596](https://github.com/BerriAI/litellm/issues/49596) Question: should custom pricing in model_list apply to the Anthropic pass-through route? `llm translation`
- [#49574](https://github.com/BerriAI/litellm/issues/49574) [Bug]: minimax provider silently drops top-level reasoning_effort (M3.1-Flash supports low|medium|high|max) `llm translation`
- [#49569](https://github.com/BerriAI/litellm/issues/49569) [Bug]: /a2a/{agent_id} answers an unparsable body outside JSON-RPC: -32603 / HTTP 500 for an empty body, an OpenAI-style 400 for malformed JSON `llm translation`
- [#49570](https://github.com/BerriAI/litellm/issues/49570) [Feature]: Bump a2a-sdk from 1.1.0 to 1.3.0 so the A2A gateway accepts agents that send newer fields
- [#49565](https://github.com/BerriAI/litellm/issues/49565) [Feature]: Add Webz.io News Search as a /search provider
- [#49551](https://github.com/BerriAI/litellm/issues/49551) [Bug]: Response cache ignores `api_base` — backend A's cached response served to backend B `bug`

#### 🔒 Closed Issues
- [#26494](https://github.com/BerriAI/litellm/issues/26494) Example: Singapore product catalog API (BuyWhere) as an agent tool via LiteLLM
- [#26170](https://github.com/BerriAI/litellm/issues/26170) [Bug] Ollama provider checks `litellm.api_base` global before explicit `api_base` kwarg (inconsistent with openai provider)
- [#26326](https://github.com/BerriAI/litellm/issues/26326) [Bug]: Fireworks AI streaming responses leak `<think>` tags into `content` instead of populating `reasoning_content`
- [#26507](https://github.com/BerriAI/litellm/issues/26507) [Bug]: mcp_semantic_tool_filter drops all tools when client sends MCP tool names with its own unique-ID suffix (e.g. LibreChat)
- [#34619](https://github.com/BerriAI/litellm/issues/34619) FAL.ai provider only supports a fraction of available models — hardcoded list vs. 200+ models on FAL
- [#34727](https://github.com/BerriAI/litellm/issues/34727) [Docs]: REDIS_URL prod warning is stale; the perf gap it cites is fixed
- [#48422](https://github.com/BerriAI/litellm/issues/48422) token_counter charges 85 tokens for images priced with the default auto detail
- [#34681](https://github.com/BerriAI/litellm/issues/34681) DualCache refresh can evict a fresh Redis batch-throttle entry at capacity
- [#34708](https://github.com/BerriAI/litellm/issues/34708) [Bug]: Hanging-request Slack alert always shows empty Key Alias / Team Alias (metadata read from wrong location at pre-call time)
- [#34710](https://github.com/BerriAI/litellm/issues/34710) [Bug]: [Security]: Raw virtual key persisted in cleartext under `user_api_key_hash` in standard logging metadata
- [#34719](https://github.com/BerriAI/litellm/issues/34719) [Bug]: RuntimeError: dictionary changed size during iteration in success_handler/failure_handler under concurrent logging

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,933 · **Open issues:** 468 · **Last push:** <1h ago

On November 2, 2026, there were no new releases for Unsloth, but a significant number of features and fixes were merged into the main branch. Noteworthy updates include PR #16407 introducing a unified flag and root mesh for various parallel processing types and PR #16442 updating Hugeicons to version 4.4.0. Additionally, PR #16428 adds support for recording float8 training precision fallback in the risky loader baseline, while PR #16405 clarifies that forced-float32 models will use float32 on GPUs lacking bfloat16 support. Among the newly reported issues, #16432 highlights a bug where the Gemini connection only loads the first page of 20 models, indicating a potential usability concern that users may face.

#### ✅ Merged PRs
- [#16407](https://github.com/unslothai/unsloth/pull/16407) UNSLOTH_PARALLEL: one flag and one root mesh for dp / tp / pp / cp, pipeline parallel from the environment, and a capability registry
- [#16442](https://github.com/unslothai/unsloth/pull/16442) Studio: update Hugeicons to 4.4.0
- [#16440](https://github.com/unslothai/unsloth/pull/16440) Profile stats tests: seed at noon, so a run just before midnight keeps the reply on today
- [#16437](https://github.com/unslothai/unsloth/pull/16437) Multi-account Playwright: record and retry once when the post-logout /login load never fires
- [#16439](https://github.com/unslothai/unsloth/pull/16439) Studio: shorten the Hugeicons trash and bookmark comments
- [#16431](https://github.com/unslothai/unsloth/pull/16431) Studio tests: chat width driver picks the presets by position, not by their copy
- [#16430](https://github.com/unslothai/unsloth/pull/16430) Studio tests: take the hub source baseline when the first test starts, not at collection
- [#16428](https://github.com/unslothai/unsloth/pull/16428) Risky loader baseline: record the float8 training precision fallback
- [#16426](https://github.com/unslothai/unsloth/pull/16426) Studio tests: best of five for the two single-sample nested-header linearity checks
- [#16412](https://github.com/unslothai/unsloth/pull/16412) Studio sandbox: remap the Windows spelling of /mnt/data-style paths
- [#16246](https://github.com/unslothai/unsloth/pull/16246) Tests: gpt-oss dense-expert reload fixture drops replaced experts' quant state
- [#16406](https://github.com/unslothai/unsloth/pull/16406) Pipeline parallel: carry the Qwen3-MoE router auxiliary loss across stages
- [#16410](https://github.com/unslothai/unsloth/pull/16410) Block compile: install the router_logits capture hooks before the first block compiles
- [#16224](https://github.com/unslothai/unsloth/pull/16224) Studio: run multi-GPU compile tests on real CUDA, fail on eager fallback
- [#16405](https://github.com/unslothai/unsloth/pull/16405) Full finetuning notice: say float32 for forced-float32 models on GPUs without bfloat16
- [#16198](https://github.com/unslothai/unsloth/pull/16198) Studio: make Show in folder work on Linux, and report when it can't
- [#16245](https://github.com/unslothai/unsloth/pull/16245) Studio tests: a separate engine port block for every xdist worker past 40
- [#16409](https://github.com/unslothai/unsloth/pull/16409) Studio: use the Hugeicons trash and bookmark-01 icons
- [#16237](https://github.com/unslothai/unsloth/pull/16237) Studio tests: skip the CUDA compiled-linear checks where production stays eager
- [#16408](https://github.com/unslothai/unsloth/pull/16408) Studio: customizable new-chat greeting
- [#16402](https://github.com/unslothai/unsloth/pull/16402) Studio: use the macOS system font (SF Pro) as the default UI font on Mac
- [#16226](https://github.com/unslothai/unsloth/pull/16226) Tests: run the RoPE 64-bit indexing metadata check on CPU-only runners
- [#16387](https://github.com/unslothai/unsloth/pull/16387) Add unsloth.precision: one registry for low-precision recipes, refusals and high-precision layers
- [#15967](https://github.com/unslothai/unsloth/pull/15967) Tests: pin bf16 support and the HF cache location in the GGUF preflight fixtures
- [#16259](https://github.com/unslothai/unsloth/pull/16259) Unsloth Studio MLX: Fast Verify toggle
- [#16204](https://github.com/unslothai/unsloth/pull/16204) Studio: search earlier turns for the user's question, not the tool loop's own notices
- [#16225](https://github.com/unslothai/unsloth/pull/16225) Tests: GQA routing oracle expects expanded K/V on torch without enable_gqa
- [#16244](https://github.com/unslothai/unsloth/pull/16244) GRPO PrefixGrouper: check the host-syncs layout test against the reference
- [#16229](https://github.com/unslothai/unsloth/pull/16229) Stub the device context in the packed fp32 routing test
- [#16236](https://github.com/unslothai/unsloth/pull/16236) Studio tests: compare the hub source restore against the inherited source
- [#15993](https://github.com/unslothai/unsloth/pull/15993) Studio: decode with CUDA graphs by default in the transformers chat backend
- [#16398](https://github.com/unslothai/unsloth/pull/16398) FSDP2 float16 with CPU offload: unscale CPU DTensor grads as local shards
- [#16401](https://github.com/unslothai/unsloth/pull/16401) Studio tests: data settings driver expects the named single-chat delete for one archived result
- [#16388](https://github.com/unslothai/unsloth/pull/16388) Studio: respawn a llama-server that ran out of GPU memory mid-session with more VRAM headroom
- [#16332](https://github.com/unslothai/unsloth/pull/16332) CLI: let train load models that need trust_remote_code
- [#16338](https://github.com/unslothai/unsloth/pull/16338) Studio: exit the inference worker instead of waiting to be killed
- [#16271](https://github.com/unslothai/unsloth/pull/16271) Studio: answer a collapsed On Device row from disk, not the Hub
- [#16103](https://github.com/unslothai/unsloth/pull/16103) Studio: run and hide MiniMax-M2 tool calls that llama-server leaves in content
- [#16392](https://github.com/unslothai/unsloth/pull/16392) Studio: keep Trick or Treat as a year-round theme, remove the Halloween extras
- [#16380](https://github.com/unslothai/unsloth/pull/16380) Studio: turn on spell checking in Linux Desktop
- [#16334](https://github.com/unslothai/unsloth/pull/16334) Studio: macOS system glass on Unsloth Desktop
- [#16397](https://github.com/unslothai/unsloth/pull/16397) Studio tests: pin the delete chat placeholder, not its wording
- [#16336](https://github.com/unslothai/unsloth/pull/16336) Studio: glass lens, and a hairline composer outline lit by what is behind it
- [#16041](https://github.com/unslothai/unsloth/pull/16041) Gemma 3: generate on the non-flex attention path instead of flex_attention's fallback
- [#15976](https://github.com/unslothai/unsloth/pull/15976) Decode CUDA graphs: opt-in whole-step capture for batch 1 (UNSLOTH_DECODE_CUDA_GRAPHS_FULL=1)
- [#16073](https://github.com/unslothai/unsloth/pull/16073) Flex attention on torch < 2.14: fitting tiles for short decode calls so a batch-size change does not leave the process on eager attention
- [#16285](https://github.com/unslothai/unsloth/pull/16285) Studio: serve the Decision API's pinned GGUFs from their ModelScope commits
- [#16253](https://github.com/unslothai/unsloth/pull/16253) Use tar.xz for Node downloads on macOS and Linux
- [#16347](https://github.com/unslothai/unsloth/pull/16347) CLI: inference and chat take images for vision models
- [#16384](https://github.com/unslothai/unsloth/pull/16384) Studio: never launch wxc-exec on Windows older than build 26100
- [#16254](https://github.com/unslothai/unsloth/pull/16254) Studio: decode video attachments instead of fetching a data URL
- [#16385](https://github.com/unslothai/unsloth/pull/16385) Studio: convert ShareGPT image lists in placeholder order
- [#16202](https://github.com/unslothai/unsloth/pull/16202) CLI: list-checkpoints reports an --outputs-dir outside the outputs folder as an error
- [#16381](https://github.com/unslothai/unsloth/pull/16381) Studio: let the background stay visible in open conversations
- [#16281](https://github.com/unslothai/unsloth/pull/16281) Studio: stop routing parakeet.cpp GGUFs as chat with a false llama.cpp update hint (#16273)
- [#16369](https://github.com/unslothai/unsloth/pull/16369) fix(providers): preserve all Anthropic system instructions
- [#16335](https://github.com/unslothai/unsloth/pull/16335) Studio: glass on every page when the background shows on all pages
- [#16333](https://github.com/unslothai/unsloth/pull/16333) Studio: Glass theme for the sidebar, composer and menus, glass without a background image, and drop the Classic and Minimal themes
- [#16140](https://github.com/unslothai/unsloth/pull/16140) Studio Flows: keep variable-frame-rate pacing in Edit Video
- [#16322](https://github.com/unslothai/unsloth/pull/16322) Desktop: stop the NVIDIA X11 flicker on WebKitGTK 2.54 (#16318)
- [#16132](https://github.com/unslothai/unsloth/pull/16132) Studio: keep a backticked tool-call tag in the answer instead of cutting it
- [#16218](https://github.com/unslothai/unsloth/pull/16218) Flows world: keep a replan raised while a plan call is in flight
- [#16241](https://github.com/unslothai/unsloth/pull/16241) Flows: a negated follow request no longer starts following
- [#16270](https://github.com/unslothai/unsloth/pull/16270) Studio: skip the startup manifest migration scan when nothing changed since a clean pass
- [#16139](https://github.com/unslothai/unsloth/pull/16139) Studio Flows: clone skinned GLB props with their own skeleton
- [#16227](https://github.com/unslothai/unsloth/pull/16227) Studio MLX: decode reply snapshots incrementally instead of re-decoding every id
- [#16136](https://github.com/unslothai/unsloth/pull/16136) Studio Flows: drop the recorded media variant when Studio reloads the model
- [#16238](https://github.com/unslothai/unsloth/pull/16238) Flows: record models loaded alongside so unload after run frees them
- [#16391](https://github.com/unslothai/unsloth/pull/16391) fix(studio): align settings sidebar rows with search field
- [#16239](https://github.com/unslothai/unsloth/pull/16239) Flows: count a model as downloaded only when its weights are cached
- [#16138](https://github.com/unslothai/unsloth/pull/16138) Studio Flows: enforce the HTTP block deadline and Stop on trickling bodies
- [#16232](https://github.com/unslothai/unsloth/pull/16232) Studio Flows: keep story sound cues across scene changes and drop stale ones
- [#16219](https://github.com/unslothai/unsloth/pull/16219) Flows world: hostiles added mid-play skip noises made before they existed
- [#16141](https://github.com/unslothai/unsloth/pull/16141) Studio Flows: refuse closing a door the player's body overlaps
- [#16143](https://github.com/unslothai/unsloth/pull/16143) Studio Flows: batch memory embedding requests within the input limit
- [#16233](https://github.com/unslothai/unsloth/pull/16233) Studio Flows: reuse village memory vectors only for the model that made them
- [#16217](https://github.com/unslothai/unsloth/pull/16217) Studio Flows: ask the Mayor once and fall back on an unparsable answer
- [#16240](https://github.com/unslothai/unsloth/pull/16240) Cancel a live story write on restart so write ahead is not held
- [#16137](https://github.com/unslothai/unsloth/pull/16137) Studio Flows: report notebook LoRA settings the import cannot forward
- [#16175](https://github.com/unslothai/unsloth/pull/16175) Studio: train on CPU when no GPU is found, and offer Install Training on GPU-less Chat only installs
- [#16390](https://github.com/unslothai/unsloth/pull/16390) Studio: say chats and projects are permanently deleted in delete dialogs
- [#16197](https://github.com/unslothai/unsloth/pull/16197) Reset the inference stance counter in for_inference
- [#16049](https://github.com/unslothai/unsloth/pull/16049) Flex attention: small shared-memory tiles for short no-grad calls so one short prompt does not leave the process on eager attention
- [#15997](https://github.com/unslothai/unsloth/pull/15997) Kernel cache key tag and readback-barrier key for every thread (checkpoint recompute, torch >= 2.12)
- [#16208](https://github.com/unslothai/unsloth/pull/16208) Docker: stop shipping SSH host keys in the Studio image
- [#16142](https://github.com/unslothai/unsloth/pull/16142) Studio Flows: create a named knowledge base once under parallel adds
- [#16372](https://github.com/unslothai/unsloth/pull/16372) Studio: list the video gallery from one folder scan and reuse unchanged sidecars
- [#16379](https://github.com/unslothai/unsloth/pull/16379) Studio Images: refuse a load whose resolved gated base the account cannot access
- [#16376](https://github.com/unslothai/unsloth/pull/16376) Studio: harden VAE encode dtype for Qwen-Image-2.1 GGUF Edit/Reference (#16375)
- [#16296](https://github.com/unslothai/unsloth/pull/16296) Studio: gate MiniMax-H3 Auto flash on a real flash SDPA kernel (#16294)
- [#16210](https://github.com/unslothai/unsloth/pull/16210) Studio: stop Terminal calls hanging when a command starts a background process
- [#16286](https://github.com/unslothai/unsloth/pull/16286) Studio: cheaper per-token work in web page Markdown extraction
- [#15931](https://github.com/unslothai/unsloth/pull/15931) Block CUDA graphs: auto mode stays off when decoder blocks span several devices
- [#15928](https://github.com/unslothai/unsloth/pull/15928) MoE: keep the fitted dW tile for float32 activations in the heuristic configs
- [#16251](https://github.com/unslothai/unsloth/pull/16251) Studio: tell the agent a project's working folder is where its tools run, so it reads the files instead of asking for them
- [#16302](https://github.com/unslothai/unsloth/pull/16302) Studio: stream durable chat run snapshots without re-parsing the stored request
- [#16188](https://github.com/unslothai/unsloth/pull/16188) Studio: stop the false "Could not sync pinned chats" toast during a desktop update
- [#16206](https://github.com/unslothai/unsloth/pull/16206) Docker: peel annotated tags to their commit when freezing refs
- [#16200](https://github.com/unslothai/unsloth/pull/16200) Studio Images: another account's loaded model no longer offers Generate
- [#16105](https://github.com/unslothai/unsloth/pull/16105) Studio: keep <function=...> tool-call parsing linear on long output
- [#16363](https://github.com/unslothai/unsloth/pull/16363) Studio: keep transcript listing rows while their files are unchanged
- [#16277](https://github.com/unslothai/unsloth/pull/16277) Studio: long chats stop re-rendering source badges per token and tool cards per run
- [#16311](https://github.com/unslothai/unsloth/pull/16311) Studio: Images and Video strips stop re-rendering every card per thumbnail and page
- [#16355](https://github.com/unslothai/unsloth/pull/16355) Studio: read each gallery PNG's recipe once while it is unchanged and resolve only symlinked clips
- [#16211](https://github.com/unslothai/unsloth/pull/16211) Give Claude its shell back when the local agent can't run a command
- [#16292](https://github.com/unslothai/unsloth/pull/16292) fix(studio): report why a model's security checks blocked it
- [#16209](https://github.com/unslothai/unsloth/pull/16209) Studio: reconnect a chat's MCP session after the server restarts
- [#16386](https://github.com/unslothai/unsloth/pull/16386) Tests: stub the new num_proc helpers in the no-torch venv, and read with utf-8 in the metadata cache test
- [#16383](https://github.com/unslothai/unsloth/pull/16383) Studio CI: run the web tools overlap timings serially
- [#16199](https://github.com/unslothai/unsloth/pull/16199) Studio: reuse each repo's partial verdict in the local model listing
- [#16299](https://github.com/unslothai/unsloth/pull/16299) Studio: Appearance > Code with a live preview, line numbers, word wrap and ligatures
- [#16301](https://github.com/unslothai/unsloth/pull/16301) Studio: greeting toggle in Appearance, and the composer stays put when the greeting is off
- [#16297](https://github.com/unslothai/unsloth/pull/16297) Studio: choose where the background image shows (new chat page, chats, or all pages)
- [#16361](https://github.com/unslothai/unsloth/pull/16361) Studio: run diffusion dataset upload file work on a worker thread
- [#16367](https://github.com/unslothai/unsloth/pull/16367) Studio: list the audio gallery from one folder scan and reuse unchanged sidecars
- [#16289](https://github.com/unslothai/unsloth/pull/16289) Studio: reuse the BOS probe encoding instead of tokenizing a long prompt twice
- [#16362](https://github.com/unslothai/unsloth/pull/16362) Studio: decode external provider images off the event loop
- [#16278](https://github.com/unslothai/unsloth/pull/16278) Studio export: save MLX merged and base pushes once into a reused folder
- [#16118](https://github.com/unslothai/unsloth/pull/16118) Studio: stop re-stripping the whole turn per token once tool markup is open
- [#16324](https://github.com/unslothai/unsloth/pull/16324) Studio video: decode reference audio once per request and stage H3 reference frames faster
- [#16146](https://github.com/unslothai/unsloth/pull/16146) Studio: cut repeated work in the local model listing
- [#16316](https://github.com/unslothai/unsloth/pull/16316) Studio model picker: On Device rows re-render only when their own data changes
- [#16265](https://github.com/unslothai/unsloth/pull/16265) Studio RAG: count chunking tokens in batches
- [#16310](https://github.com/unslothai/unsloth/pull/16310) Studio diffusion: change LoRA weights without reloading the adapter files
- [#16320](https://github.com/unslothai/unsloth/pull/16320) Studio: cache checkpoint losses per unchanged trainer_state and scan checkpoints off the event loop
- [#16287](https://github.com/unslothai/unsloth/pull/16287) Studio: background fit and position controls, outline strength slider, composer setting in Appearance, audio and library polish
- [#16306](https://github.com/unslothai/unsloth/pull/16306) Studio: copy tool schemas without deepcopy in the tool loop controller
- [#16288](https://github.com/unslothai/unsloth/pull/16288) Lean varlen: ask torch 2.15's backend selector instead of the removed _can_use_cudnn
- [#15927](https://github.com/unslothai/unsloth/pull/15927) FP8: float32 dequant before torch 2.14, no direct path under mismatched autocast
- [#16262](https://github.com/unslothai/unsloth/pull/16262) Studio: stream the recipe batch merge instead of loading a dataframe
- [#16346](https://github.com/unslothai/unsloth/pull/16346) Studio: resume the Gemma body brace scan from its last end instead of rewalking the open body every token
- [#16207](https://github.com/unslothai/unsloth/pull/16207) Studio: build the chat search index from a trimmed message view
- [#16266](https://github.com/unslothai/unsloth/pull/16266) Studio export: upload a reused folder's fresh files instead of saving the model twice
- [#16323](https://github.com/unslothai/unsloth/pull/16323) Studio: read a run's checkpoint state in the history listing only when the answer depends on it
- [#16293](https://github.com/unslothai/unsloth/pull/16293) SFT: answer the pre-tokenized cap check from Arrow lengths when they prove it
- [#16189](https://github.com/unslothai/unsloth/pull/16189) Import: scan installed distributions once while transformers and TRL import
- [#16370](https://github.com/unslothai/unsloth/pull/16370) Studio: ask ismount only where a directory's own stat can show a mount in the sandbox walk
- [#16190](https://github.com/unslothai/unsloth/pull/16190) Studio Images: encode gallery PNGs about 2x faster with byte-identical output
- [#16329](https://github.com/unslothai/unsloth/pull/16329) Studio: run the docx text rewrites over one unpacked part map instead of rezipping the archive after each
- [#16341](https://github.com/unslothai/unsloth/pull/16341) Studio Alpaca formatting: build the missing-input fallback once per batch
- [#16378](https://github.com/unslothai/unsloth/pull/16378) Studio: update managed Node (node: 24.22.1 -> 24.22.2)
- [#16353](https://github.com/unslothai/unsloth/pull/16353) Studio: list the dataset folder once per upload for the caption-stem check
- [#16174](https://github.com/unslothai/unsloth/pull/16174) Studio: overlap web image lookup with text search and independent URL reads in one tool batch
- [#16203](https://github.com/unslothai/unsloth/pull/16203) RL: read package versions once per trainer patch pass
- [#16366](https://github.com/unslothai/unsloth/pull/16366) Studio: reuse image header dimensions in the dataset labeling listing while the file is unchanged
- [#16307](https://github.com/unslothai/unsloth/pull/16307) Studio: keep unchanged Recipe Studio nodes and edges across a drag step
- [#16352](https://github.com/unslothai/unsloth/pull/16352) Studio: split seed Hub file names by string and compile split label matchers once
- [#16348](https://github.com/unslothai/unsloth/pull/16348) Studio: show right-to-left chat messages right to left
- [#16159](https://github.com/unslothai/unsloth/pull/16159) Studio: stream durable chat events without re-parsing stored payloads
- [#16339](https://github.com/unslothai/unsloth/pull/16339) Studio RAG: read each spreadsheet number format once per workbook
- [#16356](https://github.com/unslothai/unsloth/pull/16356) Studio: skip log redaction rules that cannot match a line
- [#16280](https://github.com/unslothai/unsloth/pull/16280) Studio: skip pymupdf4llm's table search on PDF pages that cannot hold a lined table
- [#16319](https://github.com/unslothai/unsloth/pull/16319) Studio: decode native attachment base64 with Uint8Array.fromBase64 when available
- [#16343](https://github.com/unslothai/unsloth/pull/16343) Studio RAG: compile the docx run XPath once and remember style list lookups per document
- [#16354](https://github.com/unslothai/unsloth/pull/16354) Studio: list saved voices with one folder lookup and one sidecar read each
- [#16358](https://github.com/unslothai/unsloth/pull/16358) Studio: walk record offsets and batch member writes in log export
- [#16213](https://github.com/unslothai/unsloth/pull/16213) Studio: skip unchanged messages when syncing a chat thread
- [#16205](https://github.com/unslothai/unsloth/pull/16205) Studio: share the loopback SSL context in one-shot llama-server calls
- [#16179](https://github.com/unslothai/unsloth/pull/16179) Studio: run cheap dataset formatting maps in process for in-memory datasets
- [#16374](https://github.com/unslothai/unsloth/pull/16374) Kaggle CI: install six beside the Kaggle client, and name an import failure as one
- [#16373](https://github.com/unslothai/unsloth/pull/16373) Notebooks CI: refresh the Colab oracle snapshots to the current GPU runtime
- [#16371](https://github.com/unslothai/unsloth/pull/16371) Studio tests: skip the real-prepare sandbox tests on a host without bubblewrap
- [#16360](https://github.com/unslothai/unsloth/pull/16360) Studio: warm the deferred SDXL speed profile off the render thread
- [#16364](https://github.com/unslothai/unsloth/pull/16364) Studio tests: a frozen background compile may be thawed more than once for one waiting compile

#### 🐛 New Issues
- [#16432](https://github.com/unslothai/unsloth/issues/16432) [Bug] gemini connection only loads first page of 20 models `feature request` `bug` 💬2
- [#16375](https://github.com/unslothai/unsloth/issues/16375) [Bug] Qwen-Image-2.1-GGUF can't work in Edit and Reference `feature request` `bug` 💬2
- [#16427](https://github.com/unslothai/unsloth/issues/16427) Minor UI: “MoE Layers on CPU” remains available when “GPU Layers” is set to 0 💬1
- [#16411](https://github.com/unslothai/unsloth/issues/16411) Regenerate title language is model-dependent — prompt carries no language instruction 💬1
- [#16395](https://github.com/unslothai/unsloth/issues/16395) [Bug] Can't use vulkan on my RX 5700 XT - Windows 10 22H2 `feature request` `bug` 💬1
- [#16443](https://github.com/unslothai/unsloth/issues/16443) [Bug] (fix included!) External text-to-speech fails when using OpenRouter / expects wav instead of mp3/pcm. `feature request` `bug`
- [#16436](https://github.com/unslothai/unsloth/issues/16436) Studio: loading another model during a generation fails with a misleading memory-not-released error
- [#16434](https://github.com/unslothai/unsloth/issues/16434) [Bug] Nonstream saved-connection replies discard refusal text
- [#16419](https://github.com/unslothai/unsloth/issues/16419) [Bug] Failed external-chat imports can skip newly appended turns
- [#16399](https://github.com/unslothai/unsloth/issues/16399) I’d like a setting to turn link previews on/off. `feature request`
- [#16368](https://github.com/unslothai/unsloth/issues/16368) [Bug] Anthropic connections drop earlier system instructions

#### 🔒 Closed Issues
- [#16263](https://github.com/unslothai/unsloth/issues/16263) [Bug] Decision API GGUF model fails to load when the model source is ModelScope: pinned HF revision 404s and _native_files has no default-branch fallback
- [#16193](https://github.com/unslothai/unsloth/issues/16193) [Bug] Gallery -> Show in Folder doesn't do anything
- [#16184](https://github.com/unslothai/unsloth/issues/16184) [Bug] Unsloth Desktop on Linux: spell check is dead
- [#16318](https://github.com/unslothai/unsloth/issues/16318) [Bug] Flickering on Linux (EPILEPSY WARNING)
- [#16201](https://github.com/unslothai/unsloth/issues/16201) RTL for some languages
- [#16178](https://github.com/unslothai/unsloth/issues/16178) [Bug] Studio: image generation returns 404 after a managed account loads a cached gated model
- [#16186](https://github.com/unslothai/unsloth/issues/16186) [Bug] [Critical Regression / Severity: Incident-level bug] Isolated install via UNSLOTH_STUDIO_HOME silently overwrites existing baseline venv
- [#16187](https://github.com/unslothai/unsloth/issues/16187) [Bug] `search_conversation` tool totally disappeared
- [#16267](https://github.com/unslothai/unsloth/issues/16267) [Bug] Studio: On Device model picker stalls ~20 min and times out — every cached GGUF is re-probed against Hugging Face on open
- [#16340](https://github.com/unslothai/unsloth/issues/16340) CLI: inference and chat cannot take an image, so a VLM can be trained but not used
- [#16273](https://github.com/unslothai/unsloth/issues/16273) [Bug] Can't load models
- [#16375](https://github.com/unslothai/unsloth/issues/16375) [Bug] Qwen-Image-2.1-GGUF can't work in Edit and Reference
- [#16185](https://github.com/unslothai/unsloth/issues/16185) [Bug] [Critical Regression / Severity: Incident-level bug] Isolated install via UNSLOTH_STUDIO_HOME silently overwrites existing baseline venv
- [#16169](https://github.com/unslothai/unsloth/issues/16169) [Bug] Sandbox error that ejects the model?
- [#16177](https://github.com/unslothai/unsloth/issues/16177) [Bug] Lost connection to the model server. It may have crashed -- try reloading the model.
- [#16331](https://github.com/unslothai/unsloth/issues/16331) CLI: no way to pass trust_remote_code, so models with custom code cannot load
- [#16330](https://github.com/unslothai/unsloth/issues/16330) CLI: unsloth inference logs a shutdown warning and waits 10-18s after a successful answer
- [#16248](https://github.com/unslothai/unsloth/issues/16248) Video attachments cannot be opened in a built app: the opener fetches a data URL, which the production CSP blocks
- [#16221](https://github.com/unslothai/unsloth/issues/16221) [Bug] ShareGPT image lists fail after passing dataset format checks
- [#16195](https://github.com/unslothai/unsloth/issues/16195) [Bug] `unsloth list-checkpoints --outputs-dir` prints a traceback for a folder outside Unsloth's outputs folder
- [#16303](https://github.com/unslothai/unsloth/issues/16303) My custom background disappears as soon as I open the chat
- [#16368](https://github.com/unslothai/unsloth/issues/16368) [Bug] Anthropic connections drop earlier system instructions

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,174 · **Open issues:** 396 · **Last push:** <1h ago

On November 2, 2026, there were no new releases for AIBrix; however, three significant pull requests were merged. Among them, PR #3365 added a CODEOWNERS file to establish area ownership, while PR #3366 refreshed the request schemas for OpenAI, vLLM, and SGLang, enhancing integration compatibility. Additionally, PR #3359 addressed a critical bug preventing HPA percent policies from losing a point or reaching zero, which could potentially impact scalability. In terms of new issues, several bugs were reported, with issue #3377 gaining attention for its cleanup process that leaves staged objects in upload scenarios, indicating a need for improved resource management in file handling.

#### ✅ Merged PRs
- [#3365](https://github.com/vllm-project/aibrix/pull/3365) [Misc] Add CODEOWNERS for area owners
- [#3366](https://github.com/vllm-project/aibrix/pull/3366) feat(openai-frontend): refresh OpenAI/vLLM/SGLang request schemas
- [#3359](https://github.com/vllm-project/aibrix/pull/3359) [Bug] Keep HPA percent policies from losing a point or reaching zero

#### 🐛 New Issues
- [#3377](https://github.com/vllm-project/aibrix/issues/3377) [Bug] Small-parts upload cleanup leaves staged objects after the first listing page `kind/bug` `triage/accepted` `area/batch` 💬4
- [#3376](https://github.com/vllm-project/aibrix/issues/3376) RoleSet finalizer skips role drain, so replica-mode StormService rollouts and scale-in delete pods without draining `kind/bug` `area/gateway` `area/testing` `area/website` 💬3
- [#3379](https://github.com/vllm-project/aibrix/issues/3379) [Bug] Files list returns too few files when hidden keys fill the S3 listing window `kind/bug` `area/batch` 💬3
- [#3372](https://github.com/vllm-project/aibrix/issues/3372) [Bug] Client can get an empty body for a non-2xx upstream response whose body arrives in more than one chunk `kind/bug` `area/gateway` `triage/accepted` 💬3
- [#3371](https://github.com/vllm-project/aibrix/issues/3371) [Bug] PD prefill leg never receives x-aibrix-mock-delay-ms, so TestPDFailureVLLMSynchronousPrefillRejected passes on the decode's 400 `kind/bug` `area/gateway` `triage/accepted` 💬2

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,362 · **Open issues:** 852 · **Last push:** 1h ago

There were no new releases or merged PRs for Semantic Router in the last 24 hours, indicating a day of routine maintenance. However, several new issues were reported, with the most significant being issue #5677, which highlights a bug related to the Omni Mini model generating a multi-GiB resample kernel for odd WAV sample rates. Other notable issues include #5683, where the same agent request yields different reasoning across various backends, and #5681, which addresses the /v1/responses endpoint returning a 404 error due to Redis store issues. These reports suggest ongoing challenges that may affect user experience and system reliability.

#### 🐛 New Issues
- [#5677](https://github.com/vllm-project/semantic-router/issues/5677) [Bug] Model runtime: Omni Mini builds a multi-GiB resample kernel for odd WAV sample rates `bug` `needs-acceptance` `wg/router-models-inference-runtime` 💬2
- [#5685](https://github.com/vllm-project/semantic-router/issues/5685) [Bug] Responses tool calls fail on the official async field `bug` `needs-acceptance` `wg/data-plane-networking`
- [#5684](https://github.com/vllm-project/semantic-router/issues/5684) [Feature] Let a Responses client stream from a Messages backend that signs its thinking `enhancement` `needs-acceptance` `wg/data-plane-networking`
- [#5683](https://github.com/vllm-project/semantic-router/issues/5683) [Bug] The same agent request gets different reasoning on Chat, Messages and Responses backends `bug` `needs-acceptance` `wg/data-plane-networking`
- [#5682](https://github.com/vllm-project/semantic-router/issues/5682) [Bug] Codex CLI 0.163 is refused at its first call `bug` `needs-acceptance` `wg/data-plane-networking`
- [#5681](https://github.com/vllm-project/semantic-router/issues/5681) [Bug] /v1/responses returns 404 when the default Redis store can't start `bug` `needs-acceptance` `wg/data-plane-networking`
- [#5680](https://github.com/vllm-project/semantic-router/issues/5680) [Bug] The Router doesn't log why it refused a request `bug` `needs-acceptance` `wg/data-plane-networking`
- [#5679](https://github.com/vllm-project/semantic-router/issues/5679) [Bug] Cached Messages streams from vLLM fail with usage_decreased `bug` `needs-acceptance` `wg/data-plane-networking`
- [#5674](https://github.com/vllm-project/semantic-router/issues/5674) [CI/Build] The draft-PR merge queue checks green but cannot merge: branch protection requires up-to-date branches `bug` `needs-acceptance` `wg/evaluation-quality`

#### 🔒 Closed Issues
- [#5416](https://github.com/vllm-project/semantic-router/issues/5416) [Feature] Add MiniMax M3.1 Flash catalog and provider support
- [#5277](https://github.com/vllm-project/semantic-router/issues/5277) [Bug] Check the input of the default decision deployment at config load
- [#2247](https://github.com/vllm-project/semantic-router/issues/2247) [Epic] Add a model-managed cross-encoder reranking runtime
- [#1610](https://github.com/vllm-project/semantic-router/issues/1610) [Feature] Harden deployed config projections and reconcile remaining gaps
- [#2974](https://github.com/vllm-project/semantic-router/issues/2974) [Epic] Develop routing-native Router Model families beyond BERT
- [#2860](https://github.com/vllm-project/semantic-router/issues/2860) [Benchmark] Complete cached-panel Grounding-aware Fusion efficacy A/B
- [#2396](https://github.com/vllm-project/semantic-router/issues/2396) [Epic] Unify native Router Model adapters and capability discovery
- [#3238](https://github.com/vllm-project/semantic-router/issues/3238) [Feature] Finalize the versioned MoM evaluation manifest and result schemas
- [#3177](https://github.com/vllm-project/semantic-router/issues/3177) [Epic] Build efficient, reliable, and explainable CI gates
- [#3167](https://github.com/vllm-project/semantic-router/issues/3167) [Epic] Make Dashboard configuration and diagnostics use canonical Router contracts
- [#2926](https://github.com/vllm-project/semantic-router/issues/2926) [Feature] Add ONNX Docker support for Arm64
- [#2744](https://github.com/vllm-project/semantic-router/issues/2744) [Config] Ship a minimal validator-valid quickstart config for first-run evaluation
- [#2733](https://github.com/vllm-project/semantic-router/issues/2733) [Feature] Emit bounded routing decision diagnostics as ExtProc dynamic metadata
- [#5624](https://github.com/vllm-project/semantic-router/issues/5624) [Bug] Grafana deployment dashboards keep three panels on retired windowed metrics
- [#5581](https://github.com/vllm-project/semantic-router/issues/5581) [Bug] The merge queue waits for a fresh /ci run every time Mergify updates the pull request at its head
- [#5520](https://github.com/vllm-project/semantic-router/issues/5520) [Bug] Selection-rejected requests (503 no_eligible_model) leave no record in router_replay when only per-decision replay plugins are configured
- [#5565](https://github.com/vllm-project/semantic-router/issues/5565) [Bug] Router Replay management API rejects pages larger than 4MB with 413 although it is served over plain HTTP

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*