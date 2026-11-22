# 📡 AI Ecosystem Digest — 2026-11-22

> Generated 2026-11-22 02:51 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 156,584 | 15 | 0 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 136,068 | 14 | 8 | 25 | 0 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,973 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,447 | 6 | 6 | 1 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 228,441 | 32 | 10 | 11 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 30,850 | 27 | 10 | 11 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 395,001 | 138 | 107 | 173 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 265,216 | 20 | 5 | 3 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 97,319 | 19 | 8 | 25 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,909 | 9 | 19 | 52 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 135,937 | 28 | 10 | 26 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 187,799 | 12 | 2 | 2 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,671 | 21 | 21 | 101 | 2 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,924 | 14 | 0 | 47 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,198 | 7 | 2 | 7 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,515 | 8 | 13 | 5 | 0 |

---

## ✨ Highlights

- **Gemini CLI** released [v0.71.0-nightly.20261122.geecccfcd5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261122.geecccfcd5).
- **GitHub Copilot CLI** released [v1.0.115-6](https://github.com/github/copilot-cli/releases/tag/v1.0.115-6) and [v1.0.115-5](https://github.com/github/copilot-cli/releases/tag/v1.0.115-5).
- **Claude Code** merged PR [#63075](https://github.com/openai/codex/pull/63075) to prevent MCP reply POSTs from resolving pending requests.
- **OpenAI Codex** merged several important PRs, including [#63069](https://github.com/openai/codex/pull/63069) for adding an async user messaging opt-in for spawned subagents.
- Several new issues gained notable attention today, including **OpenCode**’s [#65501](https://github.com/anomalyco/opencode/issues/65501) regarding silent quits that appear as crashes, with 4 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 156,584 · **Open issues:** 15,963 · **Last push:** <1h ago

Today, there were no new releases or merged pull requests for Claude Code. However, several new issues were reported, with the most notable being issue #111596, which describes a bug in the macOS Claude Desktop app where using Cmd+Q causes the application to hang indefinitely during environment teardown, requiring a force-quit to relaunch. Additionally, issue #111613 highlights a bug in auto mode that prompts for edits through symlinks since version 2.1.327, while issue #111609 introduces a requested feature for an Admin API endpoint to check remaining prepaid credit balance. Other issues range from functionality quirks in Desktop apps to performance concerns, indicating a busy day of debugging and feature requests.

#### 🐛 New Issues
- [#111596](https://github.com/anthropics/claude-code/issues/111596) [BUG] Claude Desktop (macOS): Cmd+Q hangs forever in Node environment teardown; app can't be relaunched until force-quit `invalid` 💬3
- [#111614](https://github.com/anthropics/claude-code/issues/111614) Desktop app: background subagents prompt for every command while the parent session is in Bypass permissions mode `bug` `platform:windows` `area:agents` `area:permissions` 💬1
- [#111613](https://github.com/anthropics/claude-code/issues/111613) [Bug] Auto mode prompts for Edit through in-project symlink to external dir since 2.1.327 `bug` `platform:linux` `area:tools` `regression` 💬1
- [#111609](https://github.com/anthropics/claude-code/issues/111609) [FEATURE] Admin API endpoint for the remaining prepaid credit balance, including auto reloads `invalid` 💬1
- [#111616](https://github.com/anthropics/claude-code/issues/111616) [Desktop][macOS] Popout window not restored after idle "stealth" auto-update relaunch `bug` `platform:macos` `area:desktop`
- [#111615](https://github.com/anthropics/claude-code/issues/111615) [Bug] Timestamp retrieval takes minutes instead of sub-millisecond `bug` `platform:macos` `area:bash` `perf:reliability`
- [#111612](https://github.com/anthropics/claude-code/issues/111612) [BUG] Desktop SSH session overwrites the remote host's shared `~/.claude.json` `oauthAccount` with the Desktop account, so a VS Code session on that host (logged in as a different account) silently switches organization `bug` `platform:linux` `area:auth` `area:ide`
- [#111611](https://github.com/anthropics/claude-code/issues/111611) Idle Desktop sessions with Remote Control enabled each spin ~85% of a CPU core `bug` `platform:windows` `perf:cpu` `area:desktop`
- [#111610](https://github.com/anthropics/claude-code/issues/111610) [BUG] Urgent: headless -p / Agent SDK drops a plugin's MCP server for a same-URL claude.ai connector, so every mcp_tool hook fails (still on 2.1.330) `bug` `has repro` `platform:macos` `area:mcp`
- [#111608](https://github.com/anthropics/claude-code/issues/111608) [FEATURE] Show a persistent in-session indicator when Claude Code is billing an API key while a subscription is present `enhancement` `area:cost` `area:tui` `area:auth`
- [#111607](https://github.com/anthropics/claude-code/issues/111607) [BUG] Desktop: messages on "hold" during usage limit are lost when the session auto-resumes `bug` `has repro` `platform:windows` `area:desktop`
- [#111606](https://github.com/anthropics/claude-code/issues/111606) Remote Control threads started from a Claude project don't appear in the desktop app's sidebar `enhancement` `platform:macos` `area:skills` `area:desktop`
- [#111605](https://github.com/anthropics/claude-code/issues/111605) [BUG] SendMessage to an idle sibling subagent resumes it under the sender, so its later completions go to the sender instead of its spawner `bug` `has repro` `platform:linux` `area:agents`
- [#111604](https://github.com/anthropics/claude-code/issues/111604) it doing half and i need to use more tokens `bug` `area:cost` `needs-info`
- [#111603](https://github.com/anthropics/claude-code/issues/111603) [Desktop][Windows] Computer use leaves non-allowlisted app windows disabled (EnableWindow FALSE) - user can't left-click until re-enabled `bug` `platform:windows` `area:desktop`

### OpenAI Codex (`openai/codex`)

**Stars:** 136,068 · **Open issues:** 28,211 · **Last push:** <1h ago

There were no releases in the last 24 hours for OpenAI Codex, but several notable pull requests were merged. Key improvements include the addition of an async user messaging opt-in for spawned subagents (#63069), enhancements to the TUI experience such as keeping the transcript selection cursor visible (#63056), and the ability to select and copy Markdown blocks in the transcript (#63047). Additionally, significant fixes were made, including addressing clipboard text fallback issues in the TUI (#63022) and reporting HTTP MCP startup problems more clearly (#62906). Among new issues, #62925 highlights a concerning problem on Windows where the execution-location selector disappears, impacting local filesystem access for new Work sessions.

#### ✅ Merged PRs
- [#63075](https://github.com/openai/codex/pull/63075) Prevent MCP reply POSTs from resolving pending requests
- [#63069](https://github.com/openai/codex/pull/63069) Add an async user messaging opt-in for spawned subagents
- [#63058](https://github.com/openai/codex/pull/63058) Keep Cloud reply stream recovery retryable after transient failures
- [#63056](https://github.com/openai/codex/pull/63056) Keep the TUI transcript selection cursor visible
- [#63054](https://github.com/openai/codex/pull/63054) Suppress TUI completion popups in shell mode
- [#63047](https://github.com/openai/codex/pull/63047) Select and copy Markdown blocks in the transcript
- [#63046](https://github.com/openai/codex/pull/63046) Refresh the Code Mode exec catalog when helper signatures change
- [#63036](https://github.com/openai/codex/pull/63036) Complete named settings for TUI slash commands
- [#63022](https://github.com/openai/codex/pull/63022) Fix clipboard text fallback and guard pending pastes in the TUI
- [#63013](https://github.com/openai/codex/pull/63013) Support the Orca integrated terminal
- [#62990](https://github.com/openai/codex/pull/62990) Make Command Center easier to navigate in the TUI workspace
- [#62986](https://github.com/openai/codex/pull/62986) Dock the Agent Command Center beside the conversation
- [#62933](https://github.com/openai/codex/pull/62933) Skip empty permissions messages in the initial context
- [#62932](https://github.com/openai/codex/pull/62932) Fix reasoning summary config lookup and request snapshot
- [#62931](https://github.com/openai/codex/pull/62931) Forward TUI clipboard copies to Rex clients
- [#62906](https://github.com/openai/codex/pull/62906) Report HTTP MCP startup problems clearly in codex exec
- [#62905](https://github.com/openai/codex/pull/62905) Add a reasoning summary picker to `/config`
- [#62904](https://github.com/openai/codex/pull/62904) Use automatic reasoning summaries by default in the TUI
- [#62903](https://github.com/openai/codex/pull/62903) Enable concurrent reasoning summaries by default
- [#62898](https://github.com/openai/codex/pull/62898) Distinguish conversation item IDs from Responses IDs in traces
- [#62896](https://github.com/openai/codex/pull/62896) Allow model catalogs to set initial collaboration guidance
- [#62894](https://github.com/openai/codex/pull/62894) Add an opt-in indexed web search default
- [#62893](https://github.com/openai/codex/pull/62893) Broaden legacy fallback for MCP discovery over HTTP
- [#62889](https://github.com/openai/codex/pull/62889) Avoid temporary JSON buffers when sizing executed tool call metadata
- [#62888](https://github.com/openai/codex/pull/62888) Use a shared `ToolCallId` for dispatched tool invocations

#### 🐛 New Issues
- [#62925](https://github.com/openai/codex/issues/62925) [Windows][Work] Execution-location selector disappears; new Work sessions retain local filesystem access but cannot reach local loopback services `bug` `windows-os` `sandbox` `app` 💬12
- [#62918](https://github.com/openai/codex/issues/62918) [Windows] Send is disabled in new Work chats and the first relaunch reports “Connection for host ID local not found” `bug` `windows-os` `app` `connectivity` 💬8
- [#63052](https://github.com/openai/codex/issues/63052) [Windows][26.1117.4957.0] Native Computer Use init times out after earlier window-state continuation errors `bug` `windows-os` `app` `computer-use` 💬4
- [#63074](https://github.com/openai/codex/issues/63074) I'm using Astra6.2, but billing shows 6Astra `bug` `rate-limits` `app` 💬2
- [#63017](https://github.com/openai/codex/issues/63017) Compaction re-sends kept user messages with no time or provenance, so the model treats old instructions as new `bug` `model-behavior` `CLI` `context` 💬2
- [#63076](https://github.com/openai/codex/issues/63076) [Windows] Creating a timer from a project chat fails with MCP -32000 while Scheduled works `bug` `windows-os` `mcp` `tool-calls` 💬1
- [#63073](https://github.com/openai/codex/issues/63073) macOS Work: agent asks to resend an auto-generated Pasted text.txt prompt even though the attachment is intact `bug` `model-behavior` `app` 💬1
- [#63070](https://github.com/openai/codex/issues/63070) ChatGPT Desktop (macOS): tools from a custom MCP server that requires OAuth never reach a conversation; the same server with no auth does. Reproduced with a second vendor's server. `bug` `auth` `mcp` `app` 💬1
- [#63068](https://github.com/openai/codex/issues/63068) Codex VS Code extension uses Sol despite Terra Light selection `bug` `extension` `auth` `rate-limits` 💬1
- [#63066](https://github.com/openai/codex/issues/63066) ChatGPT Work: Ultrafast returns unknown parameter `stream_options.exclude_fields` (GPT-6.2 Sol) `bug`
- [#63065](https://github.com/openai/codex/issues/63065) macOS: scheduled turn cannot open a built-in browser tab while another chat is selected `bug` `app` `browser` `automations` 💬1
- [#63072](https://github.com/openai/codex/issues/63072) **Subject: Incorrect Cybersecurity Safety Block in VS Code Codex – VMware VPN and Shared Folder Access** `bug` `windows-os` `extension` `safety-check`
- [#63071](https://github.com/openai/codex/issues/63071) [Windows Desktop] Allow native in-chat hourly status checks for independent local jobs `enhancement` `model-behavior` `windows-os` `app`
- [#63067](https://github.com/openai/codex/issues/63067) Allow Remaining 5-Hour Codex Usage After Reaching the Weekly Limit `enhancement` `rate-limits` `app`

#### 🔒 Closed Issues
- [#24849](https://github.com/openai/codex/issues/24849) Agent output getting truncated in the middle of the terminal scrollback
- [#29719](https://github.com/openai/codex/issues/29719) Severe session sync issues between tui/desktop/mobile
- [#25622](https://github.com/openai/codex/issues/25622) TUI resize reflow emits full clear outside synchronized output, causing blank flash
- [#29629](https://github.com/openai/codex/issues/29629) Interrupt can merge queued follow-up input with later composer text into a single next-turn message
- [#62835](https://github.com/openai/codex/issues/62835) REGRESSION: Codex VS Code extension 26.1117.31558 repeatedly disconnects and hangs
- [#28284](https://github.com/openai/codex/issues/28284) /subagents active status dot is nearly indistinguishable in Ghostty default dark theme
- [#26813](https://github.com/openai/codex/issues/26813) @ file selector ignores path prefix instead of listing files relative to the provided path
- [#28637](https://github.com/openai/codex/issues/28637) VoiceOver focus gets trapped in Codex CLI input in Warp and announces internal MaybeHoverSecret value

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,973 · **Open issues:** 719 · **Last push:** 1h ago

On November 22, 2026, Gemini CLI released version v0.71.0-nightly.20261122.geecccfcd5, marking the latest update in its nightly release cycle, though no significant changes were highlighted in the full changelog. There were no merged pull requests or newly reported issues during this 24-hour period, indicating a day of routine maintenance without major developments. Overall, the day's activity was relatively quiet, with the version release being the primary focus for users monitoring updates in the Gemini CLI ecosystem.

#### 🚀 New Releases
- [v0.71.0-nightly.20261122.geecccfcd5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261122.geecccfcd5) Release v0.71.0-nightly.20261122.geecccfcd5

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,447 · **Open issues:** 2,181 · **Last push:** <1h ago

On November 22, 2026, GitHub Copilot CLI released v1.0.115-6 and v1.0.115-5, addressing several key improvements and fixes. The v1.0.115-6 update resolved issues regarding organization-required plugins and clarified the need for login upon using the /delegate command. Meanwhile, v1.0.115-5 improved the efficiency of long-running local sessions, allowing for reduced disk space use and faster resumption times. Notably, merged pull request #5310 fixed workspace permissions for container smoke tests, ensuring smoother operations. A significant new issue reported is #5544, which highlights a failure of the web_fetch command to accept public URLs resolved through Surge Fake-IP on the previous CLI version 1.0.114.

#### 🚀 New Releases
- [v1.0.115-6](https://github.com/github/copilot-cli/releases/tag/v1.0.115-6) 1.0.115-6
- [v1.0.115-5](https://github.com/github/copilot-cli/releases/tag/v1.0.115-5) 1.0.115-5

#### ✅ Merged PRs
- [#5310](https://github.com/github/copilot-cli/pull/5310) Fix container smoke-test workspace permissions

#### 🐛 New Issues
- [#5544](https://github.com/github/copilot-cli/issues/5544) web_fetch still rejects public URLs resolved to Surge Fake-IP on CLI 1.0.114 `triage` 💬2
- [#5549](https://github.com/github/copilot-cli/issues/5549) Add resume_session and suspend_session tools to session management, and a suspend action in the Sessions sidebar `triage`
- [#5550](https://github.com/github/copilot-cli/issues/5550) Built-in GitHub MCP read tools are unavailable to custom agents when `gh` is on `PATH` `triage`
- [#5547](https://github.com/github/copilot-cli/issues/5547) install.sh: VERSION=prerelease installs an older build than the latest stable release `triage`
- [#5546](https://github.com/github/copilot-cli/issues/5546) TLS handshake_failure to api.individual.githubcopilot.com (os error -2146893018) on filtered network `triage`
- [#5543](https://github.com/github/copilot-cli/issues/5543) Subagents started by other subagents can't be multi-turn: mode "background" is silently ignored and write_agent refuses them `triage`

#### 🔒 Closed Issues
- [#3558](https://github.com/github/copilot-cli/issues/3558) Duplicate Item Errors
- [#4874](https://github.com/github/copilot-cli/issues/4874) Add a method to /exit from Copilot CLI regardless of nested sessions
- [#2256](https://github.com/github/copilot-cli/issues/2256) Ability to permanently enable binaries like ls that persists across sessions
- [#1444](https://github.com/github/copilot-cli/issues/1444) Copilot CLI Infinite Loop on Empty bash Tool Call
- [#1696](https://github.com/github/copilot-cli/issues/1696) Resumed sessions could not request previously granted permissions
- [#1682](https://github.com/github/copilot-cli/issues/1682) Context Management

### OpenCode (`anomalyco/opencode`)

**Stars:** 228,441 · **Open issues:** 4,046 · **Last push:** <1h ago

There were no new releases from OpenCode in the last 24 hours, but significant progress was made with several merged pull requests enhancing the core features. Notably, #65506 introduced the ability to start voice using the latest GPT-Live model, while #65491 allowed users to list voice models from models.dev, significantly improving the app's voice capabilities. Additionally, #65493 fixed an issue with pinned tools displaying incomplete descriptions in the catalog, which should enhance user experience. Among new issues, #65501 has gained attention for causing desktop exits without a shutdown record, making it difficult to distinguish between a normal shutdown and a crash, highlighting an urgent area of focus for the development team.

#### ✅ Merged PRs
- [#65509](https://github.com/anomalyco/opencode/pull/65509) test(app): follow the OpenCode rename and Go-through-OpenCode connect flow in e2e
- [#65508](https://github.com/anomalyco/opencode/pull/65508) refactor(core): the command seam names its own types
- [#65449](https://github.com/anomalyco/opencode/pull/65449) refactor(core): a seam for commands that outlive the server
- [#65506](https://github.com/anomalyco/opencode/pull/65506) feat(app): start voice with the newest GPT-Live model the server lists
- [#65491](https://github.com/anomalyco/opencode/pull/65491) feat(core): list voice models from models.dev
- [#65452](https://github.com/anomalyco/opencode/pull/65452) refactor(core): ask an environment what it can do
- [#65493](https://github.com/anomalyco/opencode/pull/65493) fix(codemode): show pinned tools' full descriptions in the catalog
- [#65460](https://github.com/anomalyco/opencode/pull/65460) fix(session-ui): show the folder a search or listing ran in, not its parent
- [#63477](https://github.com/anomalyco/opencode/pull/63477) cli: port to native
- [#65487](https://github.com/anomalyco/opencode/pull/65487) test(core): remove a duplicate Agent import
- [#65269](https://github.com/anomalyco/opencode/pull/65269) fix(core): ask permission for shell commands the scanner can't analyze

#### 🐛 New Issues
- [#65501](https://github.com/anomalyco/opencode/issues/65501) desktop: exits with no shutdown record, so a silent quit cannot be told apart from a crash (2.3.2, Windows) `type/feature` `area/desktop` `version/v2` `platform/windows` 💬4
- [#65457](https://github.com/anomalyco/opencode/issues/65457) [BUG] TUI restores previous sessions as tabs after /exit even when tabs are disabled `type/bug` `area/tui` `version/v2` `platform/macos` 💬4
- [#65425](https://github.com/anomalyco/opencode/issues/65425) привет,большое уважение что работаете в рф `triaging` `type/support` 💬4
- [#65400](https://github.com/anomalyco/opencode/issues/65400) V1→V2 migration silently drops prompt caching for OpenAI-compatible Claude endpoints `type/bug` `status/repro-simulated` `area/providers` `version/v2` 💬3
- [#65510](https://github.com/anomalyco/opencode/issues/65510) models: High variant fails - prompt template only accepts xhigh/medium/low `type/bug` `area/providers` `version/v2` `platform/windows` 💬2
- [#65459](https://github.com/anomalyco/opencode/issues/65459) opencode `triaging` `type/support` 💬2
- [#65496](https://github.com/anomalyco/opencode/issues/65496) [BUG]: RAM Usage Through the Roof `triaging` `type/bug` `version/v2` `platform/macos` 💬1
- [#65473](https://github.com/anomalyco/opencode/issues/65473) mcp: remote server fails with 'Unexpected content type: null' when a server returns 202 for notifications/initialized `reproduced` `type/bug` `area/mcp` `version/v2` 💬2
- [#65514](https://github.com/anomalyco/opencode/issues/65514) Opencode OK - Big-Pickle Rogue Again, Default Operating Pattern = Destroy Before Accepting Instructions `triaging` `type/bug` `area/model-behavior` `inference/free-tier` 💬1
- [#65512](https://github.com/anomalyco/opencode/issues/65512) [FEATURE]: Archive multiple sessions from the Desktop sidebar `type/feature` `area/desktop` `version/v2` 💬1
- [#65511](https://github.com/anomalyco/opencode/issues/65511) DeepSeek 4.1 Flash Free tends to spew random garbage `type/bug` `area/model-behavior` `inference/free-tier` `version/v2` 💬1
- [#65507](https://github.com/anomalyco/opencode/issues/65507) [FEATURE]: Option to hide the copy-to-clipboard toast `type/feature` `area/tui` `version/v2` 💬1
- [#65504](https://github.com/anomalyco/opencode/issues/65504) [FEATURE]: Custom session categories with per-category visibility in the session picker `type/feature` `area/sessions-storage` 💬1
- [#65500](https://github.com/anomalyco/opencode/issues/65500) [FEATURE]: allow running the server without a password behind an auth proxy `type/feature` `area/service` `version/v2` `platform/linux` 💬1
- [#65499](https://github.com/anomalyco/opencode/issues/65499) Local GPU-accelerated voice dictation for OpenCode (Desktop + TUI) — whisper-ditado `type/feature` `area/plugins` `version/v2` 💬1
- [#65497](https://github.com/anomalyco/opencode/issues/65497) V1→V2 migration trusts the completed marker and never repairs sessions whose messages were never projected `type/bug` `area/sessions-storage` `version/v2` `platform/linux` 💬1
- [#65495](https://github.com/anomalyco/opencode/issues/65495) Guard remote recursive cleanup over SSH when PowerShell quoting introduces a drive-root operand `type/feature` `area/core` `version/v2` `platform/windows` 💬1
- [#65486](https://github.com/anomalyco/opencode/issues/65486) [FEATURE]: Persistent Desktop utility workspace across projects `type/feature` `area/desktop` `version/v2` 💬1
- [#65485](https://github.com/anomalyco/opencode/issues/65485) [FEATURE]: Managed skill installation receipts, pins and rollback `type/feature` `area/plugins` `version/v2` 💬1
- [#65484](https://github.com/anomalyco/opencode/issues/65484) [FEATURE]: Carry reviewed changes through commit and PR checks `type/feature` `area/desktop` `version/v2` 💬1
- [#65483](https://github.com/anomalyco/opencode/issues/65483) [FEATURE]: Previewable worktree cleanup policies `type/feature` `area/core` `version/v2` 💬1
- [#65482](https://github.com/anomalyco/opencode/issues/65482) [FEATURE]: Search external coding-agent transcript sources `type/feature` `area/sessions-storage` `version/v2` 💬1
- [#65481](https://github.com/anomalyco/opencode/issues/65481) [FEATURE]: Codex CLI workers with stable launch and resume identities `type/feature` `area/core` `version/v2` 💬1
- [#65480](https://github.com/anomalyco/opencode/issues/65480) [FEATURE]: Native Android and iOS Simulator workspaces `type/feature` `area/desktop` `version/v2` 💬1
- [#65479](https://github.com/anomalyco/opencode/issues/65479) [FEATURE]: View server-rendered browser tabs remotely `type/feature` `area/desktop` `version/v2` 💬1
- [#65478](https://github.com/anomalyco/opencode/issues/65478) [FEATURE]: Named destination browser profiles for worktrees `type/feature` `area/desktop` `version/v2` 💬1
- [#65477](https://github.com/anomalyco/opencode/issues/65477) [FEATURE]: Discard idle browser tabs with explicit exceptions `type/feature` `area/desktop` `version/v2` 💬1
- [#65476](https://github.com/anomalyco/opencode/issues/65476) [FEATURE]: Terminal web-link click preferences `type/feature` `area/desktop` `version/v2` 💬1
- [#65475](https://github.com/anomalyco/opencode/issues/65475) [FEATURE]: Choose the embedded address-bar search provider `type/feature` `area/desktop` `version/v2` 💬1
- [#65490](https://github.com/anomalyco/opencode/issues/65490) GitHub Copilot: OpenCode advertises PDF support for models routed to `/chat/completions` `type/bug` `status/repro-simulated` `area/providers` `version/v2` 💬1
- [#65474](https://github.com/anomalyco/opencode/issues/65474) Agent loop never exits when the system clock is corrected backwards mid-session `type/bug` `area/core` `inference/free-tier` `version/v1` 💬1
- [#65471](https://github.com/anomalyco/opencode/issues/65471) serve: ~14 FSEventStream registrations per session init — ephemeral serve spawns accumulate clients in macOS fseventsd `type/feature` `area/service` `version/v2` `platform/macos` 💬1

#### 🔒 Closed Issues
- [#65457](https://github.com/anomalyco/opencode/issues/65457) [BUG] TUI restores previous sessions as tabs after /exit even when tabs are disabled
- [#65425](https://github.com/anomalyco/opencode/issues/65425) привет,большое уважение что работаете в рф
- [#63981](https://github.com/anomalyco/opencode/issues/63981) [FEATURE]: Configurable editing tool selection and patch result style
- [#65510](https://github.com/anomalyco/opencode/issues/65510) models: High variant fails - prompt template only accepts xhigh/medium/low
- [#65459](https://github.com/anomalyco/opencode/issues/65459) opencode
- [#65512](https://github.com/anomalyco/opencode/issues/65512) [FEATURE]: Archive multiple sessions from the Desktop sidebar
- [#65511](https://github.com/anomalyco/opencode/issues/65511) DeepSeek 4.1 Flash Free tends to spew random garbage
- [#65500](https://github.com/anomalyco/opencode/issues/65500) [FEATURE]: allow running the server without a password behind an auth proxy
- [#65497](https://github.com/anomalyco/opencode/issues/65497) V1→V2 migration trusts the completed marker and never repairs sessions whose messages were never projected
- [#65474](https://github.com/anomalyco/opencode/issues/65474) Agent loop never exits when the system clock is corrected backwards mid-session

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 30,850 · **Open issues:** 2,507 · **Last push:** <1h ago

On November 22, 2026, Qwen Code released version v0.28.3-nightly.20261121.56ef346859, which included critical fixes to the CI process, such as using a live review bot for manual re-reviews and stabilizing gate names in the managed agent. Significant merged pull requests featured the re-pinning of the RHEL 10 rpm build root, enhancements to session title prioritization across devices, and the introduction of a contract-driven chat column for the web shell. Among the new issues reported, the persistent challenge of flaky tests in the CLI restart recovery process was highlighted, particularly in references to test cases related to SIGKILL scenarios. Overall, the day was marked by valuable updates and ongoing refinements to the testing framework.

#### 🚀 New Releases
- [v0.28.3-nightly.20261121.56ef346859](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.3-nightly.20261121.56ef346859) Release v0.28.3-nightly.20261121.56ef346859

#### ✅ Merged PRs
- [#18069](https://github.com/QwenLM/qwen-code/pull/18069) fix(ci): re-pin the RHEL 10 rpm build root to the current stream10 digest
- [#18048](https://github.com/QwenLM/qwen-code/pull/18048) refactor(managed-agent): use plaintext identity segments in OSS object keys
- [#18011](https://github.com/QwenLM/qwen-code/pull/18011) fix(web-shell): prioritize session titles across devices
- [#18067](https://github.com/QwenLM/qwen-code/pull/18067) fix(web-templates): re-track export renderer budget for ChatSurface copy
- [#18040](https://github.com/QwenLM/qwen-code/pull/18040) fix(ci): refuse verification without a prepared scratch directory
- [#17883](https://github.com/QwenLM/qwen-code/pull/17883) fix(web-shell): keep mobile Send above software keyboard
- [#18063](https://github.com/QwenLM/qwen-code/pull/18063) docs: mark the workspace artifact library design accepted (#18036)
- [#18036](https://github.com/QwenLM/qwen-code/pull/18036) docs: design the local-daemon workspace artifact library page
- [#18047](https://github.com/QwenLM/qwen-code/pull/18047) docs(managed-agent): design Action parking (stateless Harness phase 4)
- [#17952](https://github.com/QwenLM/qwen-code/pull/17952) feat(web-shell): add the contract-driven ChatSurface chat column
- [#18049](https://github.com/QwenLM/qwen-code/pull/18049) test(cli): synchronize restart recovery crash fixture

#### 🐛 New Issues
- [#18014](https://github.com/QwenLM/qwen-code/issues/18014) test+docs: durable state-directory preflight follow-ups from #17964 `priority/P3` `type/feature-request` `category/configuration` `category/development` 💬4
- [#18055](https://github.com/QwenLM/qwen-code/issues/18055) deflake: integration-tests/cli/qwen-serve-restart-recovery.test.ts › qwen serve — restart recovery > lists and continues a session after the daemon is SIGKILLed `priority/P2` `type/bug` `category/cli` `scope/testing` 💬3
- [#18053](https://github.com/QwenLM/qwen-code/issues/18053) deflake: packages/cli/src/serve/hosted-harness-session.test.ts › idle suspension > an admitted mutation resets the idle timer `priority/P2` `type/bug` `category/cli` `scope/testing` 💬3
- [#18043](https://github.com/QwenLM/qwen-code/issues/18043) fix(core): protect web_fetch binary-only spill from microcompaction clearing (F5 / R2-1 deferred from #17875) `priority/P2` `type/bug` `category/core` `scope/token-management` 💬3
- [#18042](https://github.com/QwenLM/qwen-code/issues/18042) fix(core): #17875 post-merge follow-up — media-strip drops the recovery handle (F1) + web_fetch success-return handle regressions (F2–F4) `priority/P1` `type/bug` `category/core` `scope/token-management` 💬3
- [#18030](https://github.com/QwenLM/qwen-code/issues/18030) feat(memory): share project auto-memory between a workspace and its Git worktrees `priority/P2` `type/feature-request` `category/core` `scope/memory` 💬3
- [#18027](https://github.com/QwenLM/qwen-code/issues/18027) deflake: integration-tests/interactive/tui-agent-loop-parity.test.ts › Ink TUI agent loop parity (experimental.unifiedAgentLoop) > a teammate report that starts a teammate turn `priority/P3` `type/bug` `category/development` `scope/testing` 💬3
- [#18068](https://github.com/QwenLM/qwen-code/issues/18068) Non-ASCII (Cyrillic) text renders as per-byte backslash-hex escapes (\D0\A2) in the TUI on Linux (opentui) `priority/P2` `type/bug` `category/ui` `scope/interactive` 💬2
- [#18061](https://github.com/QwenLM/qwen-code/issues/18061) /theme should accept a theme name, like /model and /effort do `priority/P3` `type/feature-request` `category/cli` `scope/commands` 💬2
- [#18059](https://github.com/QwenLM/qwen-code/issues/18059) Always Allow on a UNC / WSL path saves a rule that never matches `priority/P2` `type/bug` `category/core` `scope/windows` 💬2
- [#18050](https://github.com/QwenLM/qwen-code/issues/18050) deflake: integration-tests/cli/qwen-serve-restart-recovery.test.ts › qwen serve — restart recovery › lists and continues a session after the daemon is SIGKILLed `status/in-progress` `priority/P3` `type/bug` `category/development` 💬2
- [#18051](https://github.com/QwenLM/qwen-code/issues/18051) deflake: integration-tests/cli/qwen-serve-restart-recovery.test.ts › qwen serve — restart recovery › lists and continues a session after the daemon is SIGKILLed `priority/P3` `type/bug` `category/development` `scope/testing` 💬2
- [#18037](https://github.com/QwenLM/qwen-code/issues/18037) Windows: three core/utils assertions compare against POSIX literals while the code builds the path with path.join `status/in-progress` `priority/P3` `type/bug` `category/development` 💬2
- [#18033](https://github.com/QwenLM/qwen-code/issues/18033) Web Shell: pinned prompt pill (#15683) not rendered after direct session URL load (deep link / reload) — only after client-side navigation `priority/P3` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#18017](https://github.com/QwenLM/qwen-code/issues/18017) Web Shell: clicking the pinned prompt pill jumps to that message `priority/P3` `type/feature-request` `category/ui` `scope/web-shell` 💬2
- [#18015](https://github.com/QwenLM/qwen-code/issues/18015) Thinking toggle is a no-op for openai-reasoning profile when chat_template_kwargs.enable_thinking is pinned (SGLang/vLLM backends honor only ctk) `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬2
- [#18004](https://github.com/QwenLM/qwen-code/issues/18004) serve: read listener-slot occupancy offline (discovery record / daemon status) — #17479 A.4 follow-up `priority/P2` `category/cli` `type/enhancement` `daemon` 💬2
- [#17985](https://github.com/QwenLM/qwen-code/issues/17985) wait for shared peer endpoint cleanup `status/in-progress` `priority/P2` `type/bug` `category/core` 💬2
- [#18003](https://github.com/QwenLM/qwen-code/issues/18003) preserve generated UI revocation delivery `priority/P2` `type/bug` `category/core` `scope/session-management` 💬2
- [#18002](https://github.com/QwenLM/qwen-code/issues/18002) keep input open for all streamed turns `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬2
- [#18001](https://github.com/QwenLM/qwen-code/issues/18001) stop native REST requests after disposal `priority/P2` `type/bug` `category/core` `status/ready-for-agent` 💬2
- [#18000](https://github.com/QwenLM/qwen-code/issues/18000) preserve Unicode at transcript text limits `priority/P2` `type/bug` `category/ui` `scope/rendering` 💬2
- [#17999](https://github.com/QwenLM/qwen-code/issues/17999) reuse refreshed client registrations `priority/P2` `type/bug` `category/integration` `scope/session-management` 💬2
- [#17998](https://github.com/QwenLM/qwen-code/issues/17998) ignore invalid WebSocket message envelopes `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬2
- [#17996](https://github.com/QwenLM/qwen-code/issues/17996) preserve notification envelope session scope `status/in-progress` `priority/P2` `type/bug` `daemon` 💬2
- [#17993](https://github.com/QwenLM/qwen-code/issues/17993) propagate prompt input failures to query consumers `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬2
- [#17991](https://github.com/QwenLM/qwen-code/issues/17991) preserve completed bridge prompt outcomes `priority/P2` `type/bug` `category/integration` `scope/mcp` 💬2

#### 🔒 Closed Issues
- [#17957](https://github.com/QwenLM/qwen-code/issues/17957) Main CI failed: Managed Agent gate — RuntimeProviderPluginsTest.builtinProvidersAreTrulyOptionalOnTheApplicationClasspath
- [#17037](https://github.com/QwenLM/qwen-code/issues/17037) ci: hz3 /tmp is out of inodes — leftover verify work trees hold 92% of the tmpfs
- [#17834](https://github.com/QwenLM/qwen-code/issues/17834) deflake: packages/channels/dingtalk/src/managed-dingtalk-adapter.test.ts › managed DingTalk adapter outbox > keeps the recent window loadable at the shared cap (R2-1)
- [#18014](https://github.com/QwenLM/qwen-code/issues/18014) test+docs: durable state-directory preflight follow-ups from #17964
- [#17859](https://github.com/QwenLM/qwen-code/issues/17859) [Web Shell] iOS Safari keyboard covers Send on the welcome screen
- [#17337](https://github.com/QwenLM/qwen-code/issues/17337) fix(core): key persisted-output stub detection on ToolOutputRecovery.persistedOutputFiles
- [#16925](https://github.com/QwenLM/qwen-code/issues/16925) docs(mcp): "restart Qwen Code after adding a server" is outdated — mcpServers hot-reload without a restart
- [#18051](https://github.com/QwenLM/qwen-code/issues/18051) deflake: integration-tests/cli/qwen-serve-restart-recovery.test.ts › qwen serve — restart recovery › lists and continues a session after the daemon is SIGKILLed
- [#15785](https://github.com/QwenLM/qwen-code/issues/15785) Extension whose qwen-extension.json has a UTF-8 BOM is silently skipped
- [#17948](https://github.com/QwenLM/qwen-code/issues/17948) Release Failed for v0.28.2 on 2026-11-20

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

**Stars:** 395,001 · **Open issues:** 8,747 · **Last push:** <1h ago

There were no new releases for OpenClaw on November 22, 2026, but several important issues were merged. Key fixes included enhancements to the user interface, such as the removal of overlapping lines from the OpenClaw tool icon (PR #203376) and the adjustment of dashboard search alignment on mobile devices (PR #203279). Additionally, a new feature was added to the Control UI allowing users to browse and search Skills by ClawHub category (PR #202756). New issues included a reported bug regarding text wrapping in the iOS app's dream diary feature (issue #203191), highlighting ongoing challenges with the app's usability.

#### ✅ Merged PRs
- [#203369](https://github.com/openclaw/openclaw/pull/203369) fix: let guests file GitHub issues from project conversations
- [#203384](https://github.com/openclaw/openclaw/pull/203384) chore(ui): refresh control ui locales
- [#202733](https://github.com/openclaw/openclaw/pull/202733) fix(ui): keep the right-docked Home actions clear of the window controls
- [#203357](https://github.com/openclaw/openclaw/pull/203357) fix(ui): show app updates outside the conversation
- [#203358](https://github.com/openclaw/openclaw/pull/203358) feat: choose a harness for primary and fallback models in Settings
- [#203376](https://github.com/openclaw/openclaw/pull/203376) fix: remove overlapping lines from the OpenClaw tool icon
- [#203363](https://github.com/openclaw/openclaw/pull/203363) fix: hide Move to cloud when no cloud profile is available
- [#203356](https://github.com/openclaw/openclaw/pull/203356) fix: keep one model’s cooldown deadline off other models
- [#203368](https://github.com/openclaw/openclaw/pull/203368) fix(ui): skip archive exit animations outside the sidebar viewport
- [#203346](https://github.com/openclaw/openclaw/pull/203346) improve: show complete 30-day Usage reports sooner
- [#203366](https://github.com/openclaw/openclaw/pull/203366) chore(ui): refresh control ui locales
- [#203285](https://github.com/openclaw/openclaw/pull/203285) fix: keep Skill Workshop draft previews tidy and Undo on the skill page
- [#203360](https://github.com/openclaw/openclaw/pull/203360) chore(ui): refresh control ui locales
- [#203301](https://github.com/openclaw/openclaw/pull/203301) improve: open a new session from the mobile web rail
- [#200884](https://github.com/openclaw/openclaw/pull/200884) fix: show device-code sign-in steps on separate lines when the Gateway runs the login
- [#203355](https://github.com/openclaw/openclaw/pull/203355) improve: remove Copy link from Lobsterdex cards
- [#203337](https://github.com/openclaw/openclaw/pull/203337) fix(ui): wait for lazy content in chat fixtures
- [#203296](https://github.com/openclaw/openclaw/pull/203296) fix: show the full desktop size on the Systems phone toolbar
- [#203188](https://github.com/openclaw/openclaw/pull/203188) fix: keep neighboring chats apart when a sidebar group expands
- [#202756](https://github.com/openclaw/openclaw/pull/202756) feat: browse and search Skills by ClawHub category in the Control UI
- [#203310](https://github.com/openclaw/openclaw/pull/203310) fix: show clean initials when a Team Reports avatar fails
- [#203279](https://github.com/openclaw/openclaw/pull/203279) fix: align dashboard search with gallery cards on phones
- [#203307](https://github.com/openclaw/openclaw/pull/203307) fix: keep assignee names beside their avatars on phones
- [#203306](https://github.com/openclaw/openclaw/pull/203306) fix: let phone users return from the terminal session picker
- [#203305](https://github.com/openclaw/openclaw/pull/203305) fix: keep linked Workboard sessions readable on phones
- [#203298](https://github.com/openclaw/openclaw/pull/203298) fix: keep provider choices inside the model setup dialog
- [#203344](https://github.com/openclaw/openclaw/pull/203344) chore(ui): refresh control ui locales
- [#203295](https://github.com/openclaw/openclaw/pull/203295) fix: keep Infrastructure settings still when scrolling tabs on phones
- [#203291](https://github.com/openclaw/openclaw/pull/203291) fix: align stacked settings headings with their sections
- [#203290](https://github.com/openclaw/openclaw/pull/203290) fix: give portal previews the full page width on phones
- [#203280](https://github.com/openclaw/openclaw/pull/203280) fix: focus the skill name when opening its details
- [#203265](https://github.com/openclaw/openclaw/pull/203265) fix: align selected sessions and their details on phones
- [#203297](https://github.com/openclaw/openclaw/pull/203297) fix: replace the blocked chat composer with a workspace restore prompt
- [#203277](https://github.com/openclaw/openclaw/pull/203277) fix: align cloud device class fields on phones
- [#203268](https://github.com/openclaw/openclaw/pull/203268) fix: keep refresh aligned across Skills tabs on phones
- [#203262](https://github.com/openclaw/openclaw/pull/203262) fix(ui): align the Apps directory with its introduction on phones
- [#203318](https://github.com/openclaw/openclaw/pull/203318) fix: keep GitHub publication helpers off People cards
- [#203339](https://github.com/openclaw/openclaw/pull/203339) chore(ui): refresh control ui locales
- [#203259](https://github.com/openclaw/openclaw/pull/203259) fix: keep project search and device paths aligned in New Session
- [#203243](https://github.com/openclaw/openclaw/pull/203243) fix(ui): simplify activity summaries and separate agent milestones
- [#203223](https://github.com/openclaw/openclaw/pull/203223) fix: keep sidebar activity from saving an unfinished session name
- [#203183](https://github.com/openclaw/openclaw/pull/203183) fix: keep nested chats steady in the session sidebar
- [#203192](https://github.com/openclaw/openclaw/pull/203192) fix: refresh pinned agent cards when their reply arrives
- [#203216](https://github.com/openclaw/openclaw/pull/203216) fix: keep the People sidebar still when profiles refresh
- [#202591](https://github.com/openclaw/openclaw/pull/202591) fix(update): retire database snapshots of earlier updates after a verified update
- [#203321](https://github.com/openclaw/openclaw/pull/203321) fix: let Side chat finish long answers or stop just the answer
- [#203214](https://github.com/openclaw/openclaw/pull/203214) fix: keep Customize sidebar icons visible when another plugin changes
- [#203195](https://github.com/openclaw/openclaw/pull/203195) fix: keep keyboard focus when the Automations sidebar refreshes
- [#203322](https://github.com/openclaw/openclaw/pull/203322) fix: keep long lists of links intact in Side chat
- [#203309](https://github.com/openclaw/openclaw/pull/203309) fix: keep composer status text aligned when setup fails
- [#203294](https://github.com/openclaw/openclaw/pull/203294) fix: align wrapped browser approval messages on mobile
- [#203293](https://github.com/openclaw/openclaw/pull/203293) fix: align the memory import introduction on phones
- [#203282](https://github.com/openclaw/openclaw/pull/203282) fix: align page tabs with the text above them
- [#203278](https://github.com/openclaw/openclaw/pull/203278) fix: keep automation run outcomes and times readable on phones
- [#203267](https://github.com/openclaw/openclaw/pull/203267) fix: align Lobsterdex card descriptions and visit dates
- [#203335](https://github.com/openclaw/openclaw/pull/203335) chore(ui): refresh control ui locales
- [#203260](https://github.com/openclaw/openclaw/pull/203260) fix: align Activity tabs and panels on phones
- [#203231](https://github.com/openclaw/openclaw/pull/203231) fix: keep the focused device usable when Systems refreshes
- [#203332](https://github.com/openclaw/openclaw/pull/203332) fix: keep the focus ring around the meeting title
- [#203330](https://github.com/openclaw/openclaw/pull/203330) fix: align the desktop Inbox close and dismiss controls
- [#203327](https://github.com/openclaw/openclaw/pull/203327) fix: keep the Nostr profile’s unsaved notice readable
- [#203316](https://github.com/openclaw/openclaw/pull/203316) fix(workboard): keep fallback column radios beside their labels
- [#203246](https://github.com/openclaw/openclaw/pull/203246) fix(ui): paint the archived composer banner in the first frame
- [#203314](https://github.com/openclaw/openclaw/pull/203314) fix: align settings picker labels beside optional icons
- [#203324](https://github.com/openclaw/openclaw/pull/203324) fix: make release harness readiness checks reliable
- [#203315](https://github.com/openclaw/openclaw/pull/203315) fix: keep mobile member welcome focus rings visible
- [#203312](https://github.com/openclaw/openclaw/pull/203312) fix: align session menus in the mobile drawer
- [#203272](https://github.com/openclaw/openclaw/pull/203272) fix(ui): keep subagent avatars on completion
- [#203300](https://github.com/openclaw/openclaw/pull/203300) fix: describe subagent waiting as an ongoing status
- [#202590](https://github.com/openclaw/openclaw/pull/202590) fix(update): reclaim abandoned updater runtimes on a busy host
- [#203313](https://github.com/openclaw/openclaw/pull/203313) fix: restore the new-window icon size in Reports
- [#203253](https://github.com/openclaw/openclaw/pull/203253) fix: keep scheduled jobs recovering while accepted work runs
- [#203249](https://github.com/openclaw/openclaw/pull/203249) fix(ci): accept complete empty test selections in release evidence
- [#203264](https://github.com/openclaw/openclaw/pull/203264) fix: bring the Gateway back when a failed Windows update rolls back
- [#203228](https://github.com/openclaw/openclaw/pull/203228) fix: keep empty device search results visible during refresh
- [#203184](https://github.com/openclaw/openclaw/pull/203184) improve: group mobile composer shortcuts by plugin in the + menu
- [#203201](https://github.com/openclaw/openclaw/pull/203201) test(ui): include Code Mode in localized settings search
- [#201895](https://github.com/openclaw/openclaw/pull/201895) fix(ui): keep pinned sessions visible when switching a chat to Draft
- [#202446](https://github.com/openclaw/openclaw/pull/202446) fix(gateway): keep CLI run tools working after a plugin reload
- [#203302](https://github.com/openclaw/openclaw/pull/203302) fix: keep approval test waits within the test lifecycle
- [#203311](https://github.com/openclaw/openclaw/pull/203311) chore(ui): refresh control ui locales
- [#203274](https://github.com/openclaw/openclaw/pull/203274) fix: remove old chat questions and notices after reset
- [#202737](https://github.com/openclaw/openclaw/pull/202737) fix: keep plugin names stable when opening Templates
- [#202738](https://github.com/openclaw/openclaw/pull/202738) improve: distinguish Templates without artwork
- [#203247](https://github.com/openclaw/openclaw/pull/203247) fix: keep the Windows openclaw command on the current release after Git updates
- [#203241](https://github.com/openclaw/openclaw/pull/203241) fix: a running Gateway stops cleanly after an update replaces its files
- [#203287](https://github.com/openclaw/openclaw/pull/203287) improve: make the sidebar divider easier to see in light themes
- [#203275](https://github.com/openclaw/openclaw/pull/203275) fix(chat): keep launched agent names visible in narrow chats
- [#203284](https://github.com/openclaw/openclaw/pull/203284) fix: compact the macOS dashboard titlebar area
- [#201448](https://github.com/openclaw/openclaw/pull/201448) fix: keep your place while reading Activity
- [#203269](https://github.com/openclaw/openclaw/pull/203269) improve: keep selected device folders compact in new sessions
- [#200578](https://github.com/openclaw/openclaw/pull/200578) feat(update): run every Git install from releases and delete the in-place Git runner
- [#203207](https://github.com/openclaw/openclaw/pull/203207) improve: retire personal sections from the conversation sidebar
- [#203289](https://github.com/openclaw/openclaw/pull/203289) fix(crabbox): avoid extra runtime loading during version checks
- [#203281](https://github.com/openclaw/openclaw/pull/203281) fix: open the sidebar Pages menu without a loading placeholder
- [#202109](https://github.com/openclaw/openclaw/pull/202109) fix: test upgrades from released PostgreSQL installs
- [#203276](https://github.com/openclaw/openclaw/pull/203276) fix: stop offering Retry for removed chat automations
- [#203283](https://github.com/openclaw/openclaw/pull/203283) fix(talk): answer the first talk.catalog read with its snapshot
- [#203263](https://github.com/openclaw/openclaw/pull/203263) fix: retain both errors when approval test cleanup fails
- [#188973](https://github.com/openclaw/openclaw/pull/188973) fix(auth): CLI clients refuse to start after a macOS reboot renumbers the state volume
- [#202770](https://github.com/openclaw/openclaw/pull/202770) fix: reopen the model picker on Favorites when last chosen
- [#203107](https://github.com/openclaw/openclaw/pull/203107) fix: retain complete native release-validation evidence
- [#203255](https://github.com/openclaw/openclaw/pull/203255) fix: prevent tooltip Escape test failures during hover setup
- [#201759](https://github.com/openclaw/openclaw/pull/201759) fix: finish remote OpenClaw ID sign-out when the claw doesn't answer in time
- [#203252](https://github.com/openclaw/openclaw/pull/203252) fix: keep session durability faults scoped to their session
- [#201750](https://github.com/openclaw/openclaw/pull/201750) feat: OpenClaw ID protocol for unlinking a claw from its own computer
- [#203176](https://github.com/openclaw/openclaw/pull/203176) fix(subagents): wake a yielded requester for each ready child result
- [#201734](https://github.com/openclaw/openclaw/pull/201734) fix: say "signed out" when an OpenClaw ID browser signs out
- [#203190](https://github.com/openclaw/openclaw/pull/203190) test(gateway): observe preparation failure waiter rejections
- [#203177](https://github.com/openclaw/openclaw/pull/203177) fix: restore macOS setup detection with bundled Bun
- [#203236](https://github.com/openclaw/openclaw/pull/203236) fix: stop automatic updates from retrying the same failure every hour
- [#203239](https://github.com/openclaw/openclaw/pull/203239) ci: add fixed Linux Gateway cold-turn calibration
- [#203170](https://github.com/openclaw/openclaw/pull/203170) fix: stop an update before installing when a running Gateway blocks its database migration
- [#201766](https://github.com/openclaw/openclaw/pull/201766) fix: answer after tool-only turns when a context engine omits message timestamps
- [#203226](https://github.com/openclaw/openclaw/pull/203226) fix: let Windows Git installs use a folder directly under a drive root
- [#203235](https://github.com/openclaw/openclaw/pull/203235) fix: let config unset remove sections with default lists while the Gateway runs
- [#199699](https://github.com/openclaw/openclaw/pull/199699) feat(gateway): connect approved trusted-proxy CLI and TUI devices within their grant
- [#203234](https://github.com/openclaw/openclaw/pull/203234) fix: create Feishu Drive folders at the root when no parent is given
- [#203204](https://github.com/openclaw/openclaw/pull/203204) fix(e2e): isolate legacy survivor model credentials
- [#203152](https://github.com/openclaw/openclaw/pull/203152) fix: let updates stop a Gateway that OpenClaw reran under a compatible Node
- [#203218](https://github.com/openclaw/openclaw/pull/203218) fix(pr): reduce repeated hashing during baseline validation
- [#203185](https://github.com/openclaw/openclaw/pull/203185) fix: interrupted sessions still resume after a running Gateway's package is replaced in place
- [#203024](https://github.com/openclaw/openclaw/pull/203024) fix(update): let Doctor finish after a package rollback
- [#203199](https://github.com/openclaw/openclaw/pull/203199) fix: keep internal publication records out of Activity
- [#203181](https://github.com/openclaw/openclaw/pull/203181) perf(ci): avoid duplicate declaration path checks
- [#203212](https://github.com/openclaw/openclaw/pull/203212) refactor(test): remove unused Tailscale fixture mode
- [#203198](https://github.com/openclaw/openclaw/pull/203198) fix: retain child results behind live requester turns
- [#203196](https://github.com/openclaw/openclaw/pull/203196) fix: include remote models in catalog retention benchmarks
- [#193214](https://github.com/openclaw/openclaw/pull/193214) fix(worktrees): explain cold template refresh decisions
- [#203197](https://github.com/openclaw/openclaw/pull/203197) fix(ci): recognize complete native test failure reports
- [#202883](https://github.com/openclaw/openclaw/pull/202883) improve: reduce session sidebar work during streaming bursts
- [#203205](https://github.com/openclaw/openclaw/pull/203205) chore(ui): refresh control ui locales
- [#203193](https://github.com/openclaw/openclaw/pull/203193) refactor(test): remove unused QA replay controls
- [#203171](https://github.com/openclaw/openclaw/pull/203171) refactor(line): keep message constructors with templates
- [#203186](https://github.com/openclaw/openclaw/pull/203186) fix: unblock changed checks after channel module splits
- [#203173](https://github.com/openclaw/openclaw/pull/203173) fix(update): keep settled warnings out of failure reports
- [#203169](https://github.com/openclaw/openclaw/pull/203169) fix(ci): wait for native cron recovery without a polling deadline
- [#203166](https://github.com/openclaw/openclaw/pull/203166) refactor(perf): reuse heap helpers in connection benchmarks
- [#203182](https://github.com/openclaw/openclaw/pull/203182) chore(ui): refresh control ui locales
- [#201746](https://github.com/openclaw/openclaw/pull/201746) fix: let GPT-6 Luna chat again on the ChatGPT/Codex subscription route
- [#203147](https://github.com/openclaw/openclaw/pull/203147) fix: keep Windows plugins loading when the OpenClaw folder is spelled with different letter case
- [#203174](https://github.com/openclaw/openclaw/pull/203174) fix: keep Gemini NO_REPLY replies silent when the signature arrives on its own part
- [#203158](https://github.com/openclaw/openclaw/pull/203158) fix(github): release unused reader response bodies
- [#203146](https://github.com/openclaw/openclaw/pull/203146) refactor(qa-lab): centralize mock compaction summary selection
- [#203156](https://github.com/openclaw/openclaw/pull/203156) fix: preserve private child results during restart
- [#203161](https://github.com/openclaw/openclaw/pull/203161) test(twitch): drop redundant settled assertion
- [#203096](https://github.com/openclaw/openclaw/pull/203096) feat: move Code Mode, Tool Search and Templates out of Labs
- [#203164](https://github.com/openclaw/openclaw/pull/203164) chore(ui): refresh control ui locales
- [#203101](https://github.com/openclaw/openclaw/pull/203101) fix: distinguish Code Mode bridge errors from failed runs
- [#202781](https://github.com/openclaw/openclaw/pull/202781) fix(models): read the published owner inventory for picker menus after a config republish
- [#203118](https://github.com/openclaw/openclaw/pull/203118) fix(models): select a first model when a browser sign-in finds none
- [#203023](https://github.com/openclaw/openclaw/pull/203023) fix: stop clean updates warning about skipped agent database path repair
- [#202071](https://github.com/openclaw/openclaw/pull/202071) fix: show how to set up secure access when Connect a device can't make a code
- [#203139](https://github.com/openclaw/openclaw/pull/203139) fix: tell users to stop the Gateway before removing a kept update backup
- [#203094](https://github.com/openclaw/openclaw/pull/203094) fix: keep QA context from skipping automation steps
- [#203093](https://github.com/openclaw/openclaw/pull/203093) fix: resolve provider credentials without loading model runtime
- [#203092](https://github.com/openclaw/openclaw/pull/203092) fix: start fresh native work after its broker disconnects
- [#203138](https://github.com/openclaw/openclaw/pull/203138) fix(test): check queued hook accounts against refreshed config
- [#203122](https://github.com/openclaw/openclaw/pull/203122) refactor: share oversized provider response fixtures
- [#203132](https://github.com/openclaw/openclaw/pull/203132) fix: retain child results when restart aborts delivery
- [#203130](https://github.com/openclaw/openclaw/pull/203130) fix(state): keep large agent databases registered across startup upgrades
- [#203116](https://github.com/openclaw/openclaw/pull/203116) refactor(discord): keep reference helpers with target parsing
- [#203108](https://github.com/openclaw/openclaw/pull/203108) refactor(feishu): separate message parsing from bot runtime
- [#203127](https://github.com/openclaw/openclaw/pull/203127) fix(test): exercise invalid CPU ticks without topology changes
- [#203095](https://github.com/openclaw/openclaw/pull/203095) refactor(agents): separate pure model references from runtime normalization
- [#203123](https://github.com/openclaw/openclaw/pull/203123) chore(ui): refresh control ui locales
- [#203113](https://github.com/openclaw/openclaw/pull/203113) fix(session-events): wake yielded worktree turns after their first turn ends
- [#203117](https://github.com/openclaw/openclaw/pull/203117) fix(ci): stabilize saved config retry coverage
- [#201295](https://github.com/openclaw/openclaw/pull/201295) fix: plain ChatGPT sign-in on the Mac setup screen
- [#203084](https://github.com/openclaw/openclaw/pull/203084) refactor(msteams): separate attachment content from fetching
- [#203114](https://github.com/openclaw/openclaw/pull/203114) refactor(test): remove duplicate send preview cases
- [#203080](https://github.com/openclaw/openclaw/pull/203080) improve: reduce Gateway forwarding overhead during file bursts
- [#203044](https://github.com/openclaw/openclaw/pull/203044) feat: open shared sessions in their source Control UI

#### 🐛 New Issues
- [#203191](https://github.com/openclaw/openclaw/issues/203191) [Bug]: iOS app dream diary (Traumtagebuch) text does not wrap or scroll horizontally, cutting off text `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬5
- [#202954](https://github.com/openclaw/openclaw/issues/202954) [Bug]: auto-update campaign re-fails every ~2h with managed-service-stop-failed ("Gateway process changed during maintenance drain") on stable systemd user install; one dual-PID gateway cgroup observed `P2` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬4
- [#203065](https://github.com/openclaw/openclaw/issues/203065) [Bug]: macOS: app-owned bundled Gateway service stays on 2026.11.4, stale-service replacement skipped, credential recovery loop `bug` `no-stale` `bug:behavior` `clawsweeper:fix-shape-clear` 💬4
- [#203167](https://github.com/openclaw/openclaw/issues/203167) Codex cooldown persists after a successful GPT-6 Luna request `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬4
- [#202925](https://github.com/openclaw/openclaw/issues/202925) [Bug]:macOS 2026.11.5: update repair refuses executor ownership although shared lease is absent `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬4
- [#203121](https://github.com/openclaw/openclaw/issues/203121) [Bug]: Startup schema upgrade copies large provider rollout trees before Gateway listens `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬3
- [#203005](https://github.com/openclaw/openclaw/issues/203005) Retrying a 2026.9.37 npm update after rollback fails to acquire the agent maintenance lease `bug` `P1` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬3
- [#203326](https://github.com/openclaw/openclaw/issues/203326) [Bug]: Talk realtime consults fail with "No route-compatible authentication source is configured for openai" when OpenAI is only available via Codex subscription OAuth `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬2
- [#202916](https://github.com/openclaw/openclaw/issues/202916) [Bug]: FaceTime call is hung up with "SoX playback exited (0)" when audio is written right after the playback process is respawned (SoX takes a socket stdin for a fixed-length file) `bug` `no-stale` `bug:crash` `P1` 💬2
- [#203320](https://github.com/openclaw/openclaw/issues/203320) [Bug]: Skill Workshop experience review never completes - 32 KB excerpt budget exceeds the fixed 16_384 context budget `P2` `impact:other` 💬2
- [#203211](https://github.com/openclaw/openclaw/issues/203211) [Bug]: @openclaw/memory-lancedb 2026.11.5 and 2026.11.6 ship only the linux-x64-gnu LanceDB binding; Doctor refuses on macOS arm64 `bug` `no-stale` `regression` `P1` 💬2
- [#203019](https://github.com/openclaw/openclaw/issues/203019) [Bug]: System agent rejects GPT-6.2 Sol route on 2026.11.6 while subscription chat works `P2` `clawsweeper:needs-live-repro` `impact:auth-provider` `issue-rating: 🐚 platinum hermit` 💬2
- [#203175](https://github.com/openclaw/openclaw/issues/203175) [Bug]: `config unset` through a running Gateway is refused when the section holds an array that exists only as a runtime default (provider `models`, plugin schema defaults) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#203179](https://github.com/openclaw/openclaw/issues/203179) [Bug]: session_status reports API-key auth after switching a Codex subscription session to GPT-6.2 Astra `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬2
- [#203059](https://github.com/openclaw/openclaw/issues/203059) Update failure: invalid-config (2026.10.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#202888](https://github.com/openclaw/openclaw/issues/202888) Update failure: package-update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#203099](https://github.com/openclaw/openclaw/issues/203099) [Bug]: Worker protocol validators reject tool-call IDs longer than 256 characters `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#203079](https://github.com/openclaw/openclaw/issues/203079) [Feature]: Memory Reliability Contract (MRC) — common guarantees and conformance tests for all memory backends `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#203041](https://github.com/openclaw/openclaw/issues/203041) [Bug]: 工具失败日志只打印 operatorHint（吞掉真实错误）；memory-lancedb 依赖缺失并把 Gateway 主线程拖死 `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#203027](https://github.com/openclaw/openclaw/issues/203027) [Bug]: WebKit-wide Control UI bug in the 11.6 bundle `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#202915](https://github.com/openclaw/openclaw/issues/202915) [Bug]: FaceTime realtime calls: openclaw_agent_consult is always refused with "Gateway is temporarily unavailable" (consult runs under a released root) `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#202936](https://github.com/openclaw/openclaw/issues/202936) [Bug]: file secrets provider's 5 s read timeout fires during busy gateway startup: gateway aborts, or agent DB stays degraded until restart (2026.11.6, Windows) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#203390](https://github.com/openclaw/openclaw/issues/203390) Update finalization can abandon silently with no owner-facing alert (gateway serves new build while update run is recorded abandoned) `clawsweeper:intake:bug` `clawsweeper:intake:needs-repro` 💬1
- [#203391](https://github.com/openclaw/openclaw/issues/203391) Pre-update cron automations fail at agent-run start with Scheduled account unavailable until recreated; cron edit does not rebind `clawsweeper:intake:bug` `clawsweeper:intake:needs-repro` 💬1
- [#203387](https://github.com/openclaw/openclaw/issues/203387) [Bug]: Voice Call on GPT-Live never hears the caller after the opening greeting `clawsweeper:intake:bug` 💬1
- [#203385](https://github.com/openclaw/openclaw/issues/203385) [Feature]: Show last inbound and outbound activity in Channels account details `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203381](https://github.com/openclaw/openclaw/issues/203381) [Bug]: openclaw-429-fallback-bug-report `bug` `bug:crash` `P2` `impact:auth-provider` 💬1
- [#203378](https://github.com/openclaw/openclaw/issues/203378) Replayed inter-session messages should carry original sentAt/acceptedAt metadata `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203365](https://github.com/openclaw/openclaw/issues/203365) Withdrawn `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#203374](https://github.com/openclaw/openclaw/issues/203374) [Bug]: Chat image generation leaves the session stuck when the session model is text-only `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#203373](https://github.com/openclaw/openclaw/issues/203373) [data-loss] memoryFlush can commit empty or stale LLM output to MEMORY.md — agents' long-term memory truncated to 1 byte or silently rolled back `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:data-loss` 💬1
- [#203371](https://github.com/openclaw/openclaw/issues/203371) Make provider sign-in easy to find in plugin settings `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#203367](https://github.com/openclaw/openclaw/issues/203367) Update failure: update (2026.11.5) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#203361](https://github.com/openclaw/openclaw/issues/203361) Isolated automations accumulate unbounded session windows, and an oversized automation history cannot be deleted (2026.11.6) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#203359](https://github.com/openclaw/openclaw/issues/203359) backup create fails on PostgreSQL store anchors and leaves the Gateway state lease held (2026.11.6) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#203350](https://github.com/openclaw/openclaw/issues/203350) [Bug]: Goal token budgets undercount usage when context size stays flat `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203352](https://github.com/openclaw/openclaw/issues/203352) [Feature]: Link command approval history to the exact execution outcome `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203354](https://github.com/openclaw/openclaw/issues/203354) [Feature]: Finish a budgeted Goal with a partial handoff before spending the last tokens `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203353](https://github.com/openclaw/openclaw/issues/203353) [Feature]: Retry one failed native child task without recreating the parent run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203351](https://github.com/openclaw/openclaw/issues/203351) [Feature]: Bind Workboard verification verdicts to the artifact revision checked `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#203343](https://github.com/openclaw/openclaw/issues/203343) [Bug]: macOS app loops on "client credentials need recovery"; asks for a "matching CLI" that can't be installed (app 2026.11.6, app-owned runtime 2026.10.7) `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#203341](https://github.com/openclaw/openclaw/issues/203341) [Docs Bug]: local-models guide has no way to verify a two-step tool task `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#203342](https://github.com/openclaw/openclaw/issues/203342) [Feature]: test Chat Completions tool-result replay before a dependent tool call `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203333](https://github.com/openclaw/openclaw/issues/203333) OpenClaw update failure - 2026.10.3 to 2026.11.6 `P2` `impact:ux-friction` 💬1
- [#203329](https://github.com/openclaw/openclaw/issues/203329) [Bug]: System events sent to an iMessage-backed session are never delivered: the event's own id becomes an implicit reply reference ("iMessage message reference does not belong to the selected conversation") `bug` `bug:behavior` `P1` `clawsweeper:source-repro` 💬1
- [#203328](https://github.com/openclaw/openclaw/issues/203328) Expose the verified Discord speaker and finalized utterance to tool policy `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#203317](https://github.com/openclaw/openclaw/issues/203317) Update failure: update-recovery-pending (2026.11.1) `P0` `impact:ux-release-blocker` 💬1
- [#203304](https://github.com/openclaw/openclaw/issues/203304) Chat commands do not run while no model is configured `P2` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#203215](https://github.com/openclaw/openclaw/issues/203215) Control UI: answered question cards and session-observer notices survive /reset above the reset divider `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203286](https://github.com/openclaw/openclaw/issues/203286) Update failure: package-update (2026.11.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#203273](https://github.com/openclaw/openclaw/issues/203273) [Bug]: macOS reboot makes local client credentials stale when the volume device number changes `bug` `P1` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#203261](https://github.com/openclaw/openclaw/issues/203261) [Bug]: skill loader substitutes invocation arguments for literal $0/$1/$2 in SKILL.md body text — silently corrupts dollar amounts, regexes and code samples with no diagnostic `P2` `impact:ux-friction` 💬1
- [#203250](https://github.com/openclaw/openclaw/issues/203250) [Bug]: Claude CLI exec auto-review gets no conversation context, so owner-requested commands are denied `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#203124](https://github.com/openclaw/openclaw/issues/203124) [Bug]: macOS welcome setup detection fails in the bundled Bun Gateway `bug` `clawsweeper:source-repro` `P0` `issue-rating: 🦞 diamond lobster` 💬1
- [#203248](https://github.com/openclaw/openclaw/issues/203248) Node protocol: authenticated recovery of in-flight invocation results `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#203240](https://github.com/openclaw/openclaw/issues/203240) [Bug]: Editing a Markdown frontmatter key named null can delete the next field `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#203242](https://github.com/openclaw/openclaw/issues/203242) [Bug]: Session of an agent also visible in other agents session list `bug` `regression` `P2` `impact:ux-friction` 💬1
- [#203233](https://github.com/openclaw/openclaw/issues/203233) [Bug]: main/systemEvent automation cannot bind an inference account without changing payload type `bug` `regression` `P1` `impact:auth-provider` 💬1
- [#203208](https://github.com/openclaw/openclaw/issues/203208) [Bug]: feishu_drive create_folder always fails with 1061002 — root token lookup uses unauthenticated httpInstance `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203224](https://github.com/openclaw/openclaw/issues/203224) [Bug]: --skip-ui opens recovery chat after guided onboarding setup fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#203219](https://github.com/openclaw/openclaw/issues/203219) Browser Talk returns 401 when an OAuth proxy rewrites Authorization `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#203209](https://github.com/openclaw/openclaw/issues/203209) Windows MSIX: plugin install confirmation immediately cancels `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#203210](https://github.com/openclaw/openclaw/issues/203210) [Bug]: feishu_chat silently missing from agent tools for ClawHub installs — host-restricted gate drops it with no log `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203200](https://github.com/openclaw/openclaw/issues/203200) Update failure: gateway-stop-unverified (2026.11.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#203165](https://github.com/openclaw/openclaw/issues/203165) refactor(line): keep message constructors with templates `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203162](https://github.com/openclaw/openclaw/issues/203162) refactor(perf): reuse heap helpers in ClawHub and connection benchmarks `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203131](https://github.com/openclaw/openclaw/issues/203131) [Bug]: Gemini 3 NO_REPLY is delivered as text: a signature-only stream part is read as the whole answer (2026.11.5+) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203142](https://github.com/openclaw/openclaw/issues/203142) refactor(qa-lab): centralize mock compaction summary selection `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203163](https://github.com/openclaw/openclaw/issues/203163) refactor(nextcloud-talk): separate webhook decoding from queue lifecycle `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203153](https://github.com/openclaw/openclaw/issues/203153) Update failure: package-update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#203157](https://github.com/openclaw/openclaw/issues/203157) [Bug]: Worker sessions discard the whole model response when a single assistant message exceeds the 64KB transcript frame cap ("Worker inference result exceeds the transcript message limit.") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203150](https://github.com/openclaw/openclaw/issues/203150) [Bug]: A contextTokens-only override disables native thinking on GPT-6.2 Sol `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203148](https://github.com/openclaw/openclaw/issues/203148) Chat history loses retry advice when the session changes during a read `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203151](https://github.com/openclaw/openclaw/issues/203151) [Bug]: macOS desktop falls back from GPT-6.2 Sol with auth/401 on Codex 0.170.0 `P2` `impact:auth-provider` `impact:ux-friction` 💬1
- [#203143](https://github.com/openclaw/openclaw/issues/203143) [Bug]: SQLite file identity rejects signed inode numbers, so config reads fail on Amazon EFS after upgrading 2026.11.1 → 2026.11.6 `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203144](https://github.com/openclaw/openclaw/issues/203144) refactor(config): isolate gateway port selection `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203145](https://github.com/openclaw/openclaw/issues/203145) [Bug]: Pairing a new Control UI browser profile can remove an existing pairing and disable its automations `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#203140](https://github.com/openclaw/openclaw/issues/203140) [Bug]: Cron failure alert can record not-delivered despite a provider acknowledgment `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203141](https://github.com/openclaw/openclaw/issues/203141) Update failure: repairing (2026.9.4) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#203002](https://github.com/openclaw/openclaw/issues/203002) test: share oversized response stream construction `enhancement` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203111](https://github.com/openclaw/openclaw/issues/203111) [Feature]: Keep Discord reference helpers with target parsing `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203134](https://github.com/openclaw/openclaw/issues/203134) [Bug]: 2026.11.6: session stays wedged on "SQLite session entry changed before lifecycle upsert" minutes after a normal run ends, with no foreign writer; only a Gateway restart clears it `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#203105](https://github.com/openclaw/openclaw/issues/203105) refactor(feishu): separate message parsing from bot runtime `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203078](https://github.com/openclaw/openclaw/issues/203078) refactor(agents): separate pure model references from runtime normalization `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#203129](https://github.com/openclaw/openclaw/issues/203129) [Bug]: Mac app is incompatible with macOS 15 `bug` `bug:behavior` `P0` `impact:ux-release-blocker` 💬1
- [#203125](https://github.com/openclaw/openclaw/issues/203125) Restart resume always fails on Discord sessions: SessionBindingError "binding owner changed" (adapter registered after resume attempt) `P1` `impact:session-state` `impact:message-loss` 💬1
- [#203119](https://github.com/openclaw/openclaw/issues/203119) [Bug]: Terminal subagent run keeps cleanupHandled=false after batched requester settle and leaks a maxChildrenPerAgent slot (2026.11.6) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#203070](https://github.com/openclaw/openclaw/issues/203070) refactor(msteams): separate attachment content from fetching `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203110](https://github.com/openclaw/openclaw/issues/203110) openclaw update fails at pre-update SQLite header probe with spawnSync ETIMEDOUT (macOS 27.2.1 arm64) `P2` `impact:ux-friction` 💬1
- [#202986](https://github.com/openclaw/openclaw/issues/202986) refactor(outbound): isolate payload normalization from delivery effects `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202996](https://github.com/openclaw/openclaw/issues/202996) refactor(perf): share SQLite worker bootstrap `enhancement` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203088](https://github.com/openclaw/openclaw/issues/203088) refactor(utils): retire UTF-16 helpers from the host utility facade `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#203086](https://github.com/openclaw/openclaw/issues/203086) Codex dynamic-tool bridge callbacks inherit an old transport context instead of the owning run 💬1
- [#203085](https://github.com/openclaw/openclaw/issues/203085) Secret egress proxy startup deletes live owners' trust material and can still report ready `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#203082](https://github.com/openclaw/openclaw/issues/203082) [Bug]: local-archive backup always fails with "Backup manifest exceeds 1048576 byte limit" on installs with large session directories `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#202980](https://github.com/openclaw/openclaw/issues/202980) refactor(tts): separate caption eligibility from text helpers `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202995](https://github.com/openclaw/openclaw/issues/202995) test: consolidate repeated worker preload options `enhancement` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#203072](https://github.com/openclaw/openclaw/issues/203072) Thank you for creating OpenClaw 💬1
- [#202991](https://github.com/openclaw/openclaw/issues/202991) [Feature]: Share Bun native-policy test launch setup `enhancement` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#203071](https://github.com/openclaw/openclaw/issues/203071) refactor: separate numeric clamps from host utilities `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203036](https://github.com/openclaw/openclaw/issues/203036) refactor(channels): keep chunk-mode lookup in pure streaming readers `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#203035](https://github.com/openclaw/openclaw/issues/203035) Separate pure skill status queries from workspace discovery `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202999](https://github.com/openclaw/openclaw/issues/202999) refactor(usage): separate pricing preparation from formatting `enhancement` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203061](https://github.com/openclaw/openclaw/issues/203061) [Bug]: memory_search cuts every hit's snippet to 700 characters while the index stores chunks up to 1,600, so a fact in a chunk's second half is invisible to a consumer that reads only the snippet `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#203055](https://github.com/openclaw/openclaw/issues/203055) Feature: runtime-bound approval descriptions (anti-forgery approval binding) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#203051](https://github.com/openclaw/openclaw/issues/203051) [Bug]: Official Omarchy bar plugin repeatedly disconnects and leaves refresh or prompt acceptance unresolved `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#202943](https://github.com/openclaw/openclaw/issues/202943) [Feature]: Keep daemon port rendering with the status printer `enhancement` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203050](https://github.com/openclaw/openclaw/issues/203050) [Bug]: openclaw update cleanup fails on macOS APFS due to dynamic st_dev changes `P2` `impact:other` 💬1
- [#203049](https://github.com/openclaw/openclaw/issues/203049) [Bug]: iOS session dashboard "Done" returns to previous chat instead of the dashboard session's chat `P2` `maturity:stable` `impact:ux-friction` 💬1
- [#202942](https://github.com/openclaw/openclaw/issues/202942) refactor(cron): isolate CLI input parsing `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203046](https://github.com/openclaw/openclaw/issues/203046) [Bug]: macOS node connection churns every ~60s: client tick watchdog requires server `tick` events that are never delivered to unsubscribed node connections `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#202938](https://github.com/openclaw/openclaw/issues/202938) Keep hook event predicates independent of registry loading `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#203038](https://github.com/openclaw/openclaw/issues/203038) Codex bridge requests code mode for models without catalog metadata, which breaks vLLM/LiteLLM endpoints `P1` `clawsweeper:needs-live-repro` `impact:auth-provider` `issue-rating: 🐚 platinum hermit` 💬1
- [#202940](https://github.com/openclaw/openclaw/issues/202940) refactor: separate attachment marker formatting from provider errors `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202939](https://github.com/openclaw/openclaw/issues/202939) Separate Slack block rendering from HTTP rejection inspection `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202978](https://github.com/openclaw/openclaw/issues/202978) test(templates): consolidate registry package fixtures `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203021](https://github.com/openclaw/openclaw/issues/203021) [Bug]: Skill Workshop background experience review always fails "Unknown model: openai_https/…" — catalog has no openai_https provider `P2` `clawsweeper:needs-info` `impact:auth-provider` `issue-rating: 🦐 gold shrimp` 💬1
- [#202931](https://github.com/openclaw/openclaw/issues/202931) refactor(tts): separate delivery decisions from synthesis execution `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202893](https://github.com/openclaw/openclaw/issues/202893) Keep rerank execution out of provider registration `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#203006](https://github.com/openclaw/openclaw/issues/203006) Matrix progress previews are suppressed when final delivery uses the message tool `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202904](https://github.com/openclaw/openclaw/issues/202904) [Feature]: Keep video mode capabilities aligned in BytePlus and OpenRouter `enhancement` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202990](https://github.com/openclaw/openclaw/issues/202990) [Bug]: openclaw skills list ends with "passive skills refresh failed: worker task pool closed" `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202889](https://github.com/openclaw/openclaw/issues/202889) Keep one Talk configuration test suite across SwiftPM and iOS `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202923](https://github.com/openclaw/openclaw/issues/202923) refactor(cli): separate capability result contracts and output ownership `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202966](https://github.com/openclaw/openclaw/issues/202966) Installer sync must publish through pull requests `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202963](https://github.com/openclaw/openclaw/issues/202963) refactor: keep benchmark heap sampling setup consistent `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202959](https://github.com/openclaw/openclaw/issues/202959) doctor --fix enables the bundled browser plugin and widens plugins.allow when only browser.extensionRelay.allowLegacyAuth: false is configured `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#202958](https://github.com/openclaw/openclaw/issues/202958) Accepted chat turns fail across Telegram and WebChat with closed database execution admission (2026.11.4) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#202951](https://github.com/openclaw/openclaw/issues/202951) Supported linked-owner identity for iMessage DMs routed to separate gateways? `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#202947](https://github.com/openclaw/openclaw/issues/202947) [Bug]: Gateway logs "shutdown completed cleanly" then never exits — process killed by systemd SIGKILL on every restart (2026.11.6, Linux/systemd) `P1` `impact:crash-loop` `maturity:stable` 💬1
- [#202933](https://github.com/openclaw/openclaw/issues/202933) Model picker: auto-expand "All models" when a provider has ≤ 4 models `P3` `impact:ux-friction` 💬1
- [#202927](https://github.com/openclaw/openclaw/issues/202927) [Bug]: 2026.11.6 never resumes Telegram turns interrupted by a Gateway restart (SessionBindingError); please ship #191370 in a stable release `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#202917](https://github.com/openclaw/openclaw/issues/202917) [Bug]: FaceTime inbound calls are answered ~0.4 s after they arrive, before the realtime provider is ready — the caller sits in silence after pickup `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#202910](https://github.com/openclaw/openclaw/issues/202910) Realtime voice: consultPolicy "substantive" tells GPT-Live to call a tool it lacks (Voice Call) and is rejected by Discord `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#202913](https://github.com/openclaw/openclaw/issues/202913) Move automation notices out of the Control UI Inbox `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#202908](https://github.com/openclaw/openclaw/issues/202908) Matrix: session-binding bind() drops plugin metadata, so plugin-owned bindings fail ("plugin binding was created without plugin metadata") `P2` `impact:session-state` 💬1
- [#202900](https://github.com/openclaw/openclaw/issues/202900) [Bug]: A stream automation whose relay dies is marked restart-exhausted at once, and re-enabling it fails until a Gateway restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#202891](https://github.com/openclaw/openclaw/issues/202891) [Bug]: `plugins inspect` drops npm-pack provenance (artifactKind/sourcePath/integrity) since #202608 `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1

#### 🔒 Closed Issues
- [#163739](https://github.com/openclaw/openclaw/issues/163739) [Feature]: Make Control UI's Ctrl+Shift+A (Archive) configurable; it collides with browser shortcuts
- [#166678](https://github.com/openclaw/openclaw/issues/166678) [Feature]: Hide agents from the agent picker (WebUI, macOS, iOS) while keeping them spawnable
- [#163139](https://github.com/openclaw/openclaw/issues/163139) [Bug]: Windows plugins.reload fails preparing host-package link with EPERM and stalls Gateway
- [#162448](https://github.com/openclaw/openclaw/issues/162448) [Bug]: Linux desktop app minimize, maximize, and close buttons are overlapping side panel controls
- [#158817](https://github.com/openclaw/openclaw/issues/158817) [Bug]: Windows openclaw.cmd shim truncates multiline CLI arguments (e.g. --message) at the first line
- [#166336](https://github.com/openclaw/openclaw/issues/166336) Agent `automations` tool silently vanishes org-wide mid-session — run-level cron creator authority resolves falsy for every session (worker_turn_tool_authorities empty), persists across cold restarts, no config change and no logged event
- [#164620](https://github.com/openclaw/openclaw/issues/164620) [Feature]: Setting to disable the hosted plugin catalog feed
- [#164559](https://github.com/openclaw/openclaw/issues/164559) agent_end plugin hook fires once per model attempt: a 429 attempt that fails over under the same runId reports success=false with no final/willRetry field
- [#159663](https://github.com/openclaw/openclaw/issues/159663) [Feature]: Show the agent that ran the task on the task progress card
- [#177506](https://github.com/openclaw/openclaw/issues/177506) Skill Workshop reviews break the prompt-cache prefix on both sessions (measured: ~16.7M tokens dropped in one evening)
- [#158816](https://github.com/openclaw/openclaw/issues/158816) [Bug]: SKILL.md with a multi-line plain-scalar description is silently skipped - no warning on any CLI surface
- [#179492](https://github.com/openclaw/openclaw/issues/179492) [Bug]: Message steered into a run that before_agent_run blocks waits the full 120 s transcript-commit timeout
- [#158897](https://github.com/openclaw/openclaw/issues/158897) feat(memory-core): make Dreaming MEMORY.md promotion size budget configurable
- [#179382](https://github.com/openclaw/openclaw/issues/179382) A2A channel plugin: full A2A protocol v1.0 conformance (validated with a2a-tck)
- [#174849](https://github.com/openclaw/openclaw/issues/174849) ACP bridge drops session updates between prompts (sessions_spawn completions never reach the ACP client)
- [#184841](https://github.com/openclaw/openclaw/issues/184841) [Feature]: view_image can't read images a claude-cli agent saves in its own scratchpad
- [#179076](https://github.com/openclaw/openclaw/issues/179076) [Feature]: Make Decision assistance tool-prefilter timeout configurable
- [#201549](https://github.com/openclaw/openclaw/issues/201549) kimi-claw: image_generate tool calls dropped (xml_tool_call heuristic treats registered tool call as text)
- [#165312](https://github.com/openclaw/openclaw/issues/165312) [Bug]: Browser tab stays blocked after one screenshot timeout ("previous screenshot or emulation action was cancelled but is still running")
- [#191803](https://github.com/openclaw/openclaw/issues/191803) [Bug]: Control UI still hides reasoningDefault-based reasoning on 2026.10.10 (fix #173524 missing from release)
- [#203005](https://github.com/openclaw/openclaw/issues/203005) Retrying a 2026.9.37 npm update after rollback fails to acquire the agent maintenance lease
- [#201589](https://github.com/openclaw/openclaw/issues/201589) [Bug]: Windows — plugin peer-link audit compares host paths case-sensitively; channel stays blocked after update
- [#166696](https://github.com/openclaw/openclaw/issues/166696) [Bug]: plugins uninstall --dry-run rejects shadowed installs with “no authoritative package-owner metadata”
- [#165951](https://github.com/openclaw/openclaw/issues/165951) [Bug]: Official @openclaw/gitlab plugin declares an MCP server that's invisible to openclaw mcp CLI, blocking OAuth authorization
- [#201057](https://github.com/openclaw/openclaw/issues/201057) Update failure: update (2026.11.2)
- [#201058](https://github.com/openclaw/openclaw/issues/201058) [Bug]: cold Gateway startup on PostgreSQL fails during secrets plugin metadata preparation
- [#201098](https://github.com/openclaw/openclaw/issues/201098) [Bug]: Control UI allows selecting GPT-6.2 Sol although the selected Codex route rejects it
- [#190675](https://github.com/openclaw/openclaw/issues/190675) Telegram spooled replay: a photo whose getFile keeps timing out blocks its chat lane (up to 24 h) — media failures need a bounded fallback
- [#191502](https://github.com/openclaw/openclaw/issues/191502) [Bug]: sessions cleanup --fix-missing OOM on stable 2026.10.9; request narrow #177937 backport
- [#203320](https://github.com/openclaw/openclaw/issues/203320) [Bug]: Skill Workshop experience review never completes - 32 KB excerpt budget exceeds the fixed 16_384 context budget
- [#203175](https://github.com/openclaw/openclaw/issues/203175) [Bug]: `config unset` through a running Gateway is refused when the section holds an array that exists only as a runtime default (provider `models`, plugin schema defaults)
- [#201558](https://github.com/openclaw/openclaw/issues/201558) [Bug]: OpenAI OAuth re-login (`openclaw models auth login --provider openai --method oauth`) rewrites configured model rows' `thinkingLevelMap` (adds `{}`, drops `off: null`)
- [#201658](https://github.com/openclaw/openclaw/issues/201658) [Bug]: @openclaw/whatsapp 2026.11.5 no longer logs outbound "Sent message <id> -> <recipient>" lines; is the removal intended?
- [#201404](https://github.com/openclaw/openclaw/issues/201404) Update failure: update (2026.11.5)
- [#201513](https://github.com/openclaw/openclaw/issues/201513) [Bug]: `openai/gpt-6-luna` rejected with "does not support chat inference" on the ChatGPT/Codex subscription route since 2026.11.5
- [#203381](https://github.com/openclaw/openclaw/issues/203381) [Bug]: openclaw-429-fallback-bug-report
- [#203365](https://github.com/openclaw/openclaw/issues/203365) Withdrawn
- [#200749](https://github.com/openclaw/openclaw/issues/200749) models auth login: Gateway-backed login renders multi-line steps with literal \n (device-code box unreadable)
- [#203317](https://github.com/openclaw/openclaw/issues/203317) Update failure: update-recovery-pending (2026.11.1)
- [#203215](https://github.com/openclaw/openclaw/issues/203215) Control UI: answered question cards and session-observer notices survive /reset above the reset divider
- [#203273](https://github.com/openclaw/openclaw/issues/203273) [Bug]: macOS reboot makes local client credentials stale when the volume device number changes
- [#203124](https://github.com/openclaw/openclaw/issues/203124) [Bug]: macOS welcome setup detection fails in the bundled Bun Gateway
- [#203242](https://github.com/openclaw/openclaw/issues/203242) [Bug]: Session of an agent also visible in other agents session list
- [#203233](https://github.com/openclaw/openclaw/issues/203233) [Bug]: main/systemEvent automation cannot bind an inference account without changing payload type
- [#203208](https://github.com/openclaw/openclaw/issues/203208) [Bug]: feishu_drive create_folder always fails with 1061002 — root token lookup uses unauthenticated httpInstance
- [#203165](https://github.com/openclaw/openclaw/issues/203165) refactor(line): keep message constructors with templates
- [#203162](https://github.com/openclaw/openclaw/issues/203162) refactor(perf): reuse heap helpers in ClawHub and connection benchmarks
- [#203131](https://github.com/openclaw/openclaw/issues/203131) [Bug]: Gemini 3 NO_REPLY is delivered as text: a signature-only stream part is read as the whole answer (2026.11.5+)
- [#203142](https://github.com/openclaw/openclaw/issues/203142) refactor(qa-lab): centralize mock compaction summary selection
- [#203151](https://github.com/openclaw/openclaw/issues/203151) [Bug]: macOS desktop falls back from GPT-6.2 Sol with auth/401 on Codex 0.170.0
- [#203143](https://github.com/openclaw/openclaw/issues/203143) [Bug]: SQLite file identity rejects signed inode numbers, so config reads fail on Amazon EFS after upgrading 2026.11.1 → 2026.11.6
- [#202045](https://github.com/openclaw/openclaw/issues/202045) Control UI: Connect a device can't create a setup code on a new install and offers no way forward
- [#203002](https://github.com/openclaw/openclaw/issues/203002) test: share oversized response stream construction
- [#203111](https://github.com/openclaw/openclaw/issues/203111) [Feature]: Keep Discord reference helpers with target parsing
- [#203105](https://github.com/openclaw/openclaw/issues/203105) refactor(feishu): separate message parsing from bot runtime
- [#203078](https://github.com/openclaw/openclaw/issues/203078) refactor(agents): separate pure model references from runtime normalization
- [#203129](https://github.com/openclaw/openclaw/issues/203129) [Bug]: Mac app is incompatible with macOS 15
- [#203125](https://github.com/openclaw/openclaw/issues/203125) Restart resume always fails on Discord sessions: SessionBindingError "binding owner changed" (adapter registered after resume attempt)
- [#203070](https://github.com/openclaw/openclaw/issues/203070) refactor(msteams): separate attachment content from fetching
- [#203110](https://github.com/openclaw/openclaw/issues/203110) openclaw update fails at pre-update SQLite header probe with spawnSync ETIMEDOUT (macOS 27.2.1 arm64)
- [#202986](https://github.com/openclaw/openclaw/issues/202986) refactor(outbound): isolate payload normalization from delivery effects
- [#202996](https://github.com/openclaw/openclaw/issues/202996) refactor(perf): share SQLite worker bootstrap
- [#203086](https://github.com/openclaw/openclaw/issues/203086) Codex dynamic-tool bridge callbacks inherit an old transport context instead of the owning run
- [#202980](https://github.com/openclaw/openclaw/issues/202980) refactor(tts): separate caption eligibility from text helpers
- [#202995](https://github.com/openclaw/openclaw/issues/202995) test: consolidate repeated worker preload options
- [#203072](https://github.com/openclaw/openclaw/issues/203072) Thank you for creating OpenClaw
- [#202991](https://github.com/openclaw/openclaw/issues/202991) [Feature]: Share Bun native-policy test launch setup
- [#203036](https://github.com/openclaw/openclaw/issues/203036) refactor(channels): keep chunk-mode lookup in pure streaming readers
- [#203035](https://github.com/openclaw/openclaw/issues/203035) Separate pure skill status queries from workspace discovery
- [#202999](https://github.com/openclaw/openclaw/issues/202999) refactor(usage): separate pricing preparation from formatting
- [#202943](https://github.com/openclaw/openclaw/issues/202943) [Feature]: Keep daemon port rendering with the status printer
- [#203050](https://github.com/openclaw/openclaw/issues/203050) [Bug]: openclaw update cleanup fails on macOS APFS due to dynamic st_dev changes
- [#203049](https://github.com/openclaw/openclaw/issues/203049) [Bug]: iOS session dashboard "Done" returns to previous chat instead of the dashboard session's chat
- [#202942](https://github.com/openclaw/openclaw/issues/202942) refactor(cron): isolate CLI input parsing
- [#202938](https://github.com/openclaw/openclaw/issues/202938) Keep hook event predicates independent of registry loading
- [#202940](https://github.com/openclaw/openclaw/issues/202940) refactor: separate attachment marker formatting from provider errors
- [#202172](https://github.com/openclaw/openclaw/issues/202172) [Bug]: byte-triggered compaction counts the saved system prompt and tool schemas, so it fires early and latches on a freshly compacted chat
- [#202939](https://github.com/openclaw/openclaw/issues/202939) Separate Slack block rendering from HTTP rejection inspection
- [#202978](https://github.com/openclaw/openclaw/issues/202978) test(templates): consolidate registry package fixtures
- [#202931](https://github.com/openclaw/openclaw/issues/202931) refactor(tts): separate delivery decisions from synthesis execution
- [#202578](https://github.com/openclaw/openclaw/issues/202578) [Bug]: Telegram group gets no notice during a six-minute Codex capacity retry
- [#202893](https://github.com/openclaw/openclaw/issues/202893) Keep rerank execution out of provider registration
- [#202857](https://github.com/openclaw/openclaw/issues/202857) Use one connection-state input for iOS chat status
- [#202904](https://github.com/openclaw/openclaw/issues/202904) [Feature]: Keep video mode capabilities aligned in BytePlus and OpenRouter
- [#202823](https://github.com/openclaw/openclaw/issues/202823) Give shared iOS agent presentation its own existing owner
- [#202889](https://github.com/openclaw/openclaw/issues/202889) Keep one Talk configuration test suite across SwiftPM and iOS
- [#202859](https://github.com/openclaw/openclaw/issues/202859) Consolidate iOS speech-language selection ownership
- [#202923](https://github.com/openclaw/openclaw/issues/202923) refactor(cli): separate capability result contracts and output ownership
- [#202854](https://github.com/openclaw/openclaw/issues/202854) Remove duplicate iOS wake-word matching ownership
- [#202827](https://github.com/openclaw/openclaw/issues/202827) Test iOS speech segmentation without constructing the Talk manager
- [#202966](https://github.com/openclaw/openclaw/issues/202966) Installer sync must publish through pull requests
- [#202821](https://github.com/openclaw/openclaw/issues/202821) Decouple iOS node-service contracts from concrete controllers
- [#202963](https://github.com/openclaw/openclaw/issues/202963) refactor: keep benchmark heap sampling setup consistent
- [#202884](https://github.com/openclaw/openclaw/issues/202884) [Feature]: Let WhatsApp users schedule OpenClaw tasks from a DM
- [#202860](https://github.com/openclaw/openclaw/issues/202860) Separate chat presentation activity from transcript rendering
- [#202849](https://github.com/openclaw/openclaw/issues/202849) refactor(memory): isolate vector checks from cache persistence
- [#202851](https://github.com/openclaw/openclaw/issues/202851) refactor: keep attachment header inspection independent of image encoding
- [#202947](https://github.com/openclaw/openclaw/issues/202947) [Bug]: Gateway logs "shutdown completed cleanly" then never exits — process killed by systemd SIGKILL on every restart (2026.11.6, Linux/systemd)
- [#202844](https://github.com/openclaw/openclaw/issues/202844) [Feature]: Use one Google music output-format policy for metadata and execution
- [#202356](https://github.com/openclaw/openclaw/issues/202356) Inline-output browser test can poll subscription before its renderer is ready
- [#202933](https://github.com/openclaw/openclaw/issues/202933) Model picker: auto-expand "All models" when a provider has ≤ 4 models
- [#202842](https://github.com/openclaw/openclaw/issues/202842) refactor(tts): isolate automatic-mode schema from core config
- [#202847](https://github.com/openclaw/openclaw/issues/202847) Reuse shared Decision provider integration fixtures
- [#202908](https://github.com/openclaw/openclaw/issues/202908) Matrix: session-binding bind() drops plugin metadata, so plugin-owned bindings fail ("plugin binding was created without plugin metadata")
- [#202872](https://github.com/openclaw/openclaw/issues/202872) refactor(ui): keep workspace link helpers private
- [#202819](https://github.com/openclaw/openclaw/issues/202819) refactor: separate transcript summary data from generation
- [#202822](https://github.com/openclaw/openclaw/issues/202822) [Bug]: Onboarding run through npx prints bare `openclaw` next-step commands, which fail with "command not found"

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 265,216 · **Open issues:** 54,243 · **Last push:** <1h ago

Today, there were no new releases for Hermes Agent, but several important merged pull requests came through. Notably, PR #158166 implemented a fix for kanban cards that prevents those with no resolvable model from spawning, while PR #157430 migrated the gateway's backend functionalities with enhanced rollback features. Additionally, the CLI and TUI were updated through PR #140837 to provide better real-time status reports to the terminal. On the issue tracker, the most concerning new bug reported is #158640, which details a failure of Hermes Desktop on Windows to activate the primary Cloud gateway at startup, redirecting sessions incorrectly. Overall, the day reflected routine maintenance with a focus on smoothing out existing features and addressing critical bugs.

#### ✅ Merged PRs
- [#158166](https://github.com/NousResearch/hermes-agent/pull/158166) fix(kanban): refuse a card with no resolvable model before spawning, resolving it like the CLI
- [#157430](https://github.com/NousResearch/hermes-agent/pull/157430) feat(gateway): migrate --backends --apply/--restore/--status with rollback, a per-home run lock and the update marker (stacked on #157403)
- [#140837](https://github.com/NousResearch/hermes-agent/pull/140837) CLI and TUI report idle/working/blocked/done/error to the terminal over OSC 7501 (salvage #138152, #149976; port goose#12928)

#### 🐛 New Issues
- [#158640](https://github.com/NousResearch/hermes-agent/issues/158640) [Bug] Hermes Desktop on Windows fails to activate the primary Cloud gateway on startup and routes sessions to Local `type/bug` `comp/gateway` `area/config` `P2` 💬2
- [#158734](https://github.com/NousResearch/hermes-agent/issues/158734) kimi-k3 (kimi-coding provider): tool_call bridge receives empty arguments {} for all argument-bearing deferred tool calls `type/bug` `comp/agent` `tool/mcp` `provider/kimi` 💬1
- [#158699](https://github.com/NousResearch/hermes-agent/issues/158699) [Vision] Legacy vision_analyze prompt still requests exhaustive descriptions for targeted questions `type/perf` `comp/agent` `comp/tools` `tool/file` 💬1
- [#158709](https://github.com/NousResearch/hermes-agent/issues/158709) perm probe - please ignore/delete `P3` 💬1
- [#158750](https://github.com/NousResearch/hermes-agent/issues/158750) Desktop language packs: new <lang>.desktop.yaml overlay is not listed until the dashboard restarts; arrays and plural functions cannot be translated `type/bug` `comp/cli` `P2` `area/i18n`
- [#158746](https://github.com/NousResearch/hermes-agent/issues/158746) [Feature]: Desktop Capabilities → Skills opens as a store; installed skills and their on/off switches are hard to find `type/feature` `tool/skills` `P3` `comp/desktop`
- [#158509](https://github.com/NousResearch/hermes-agent/issues/158509) Canary release canary.20261122T000948Z-v0.23.3 is red (6 jobs) `type/bug` `P3` `install-e2e-red`
- [#158744](https://github.com/NousResearch/hermes-agent/issues/158744) [Feature]: Opt-in to fail closed when the managed scope is missing or malformed, and report it in config check / doctor `type/feature` `comp/cli` `area/config` `P3`
- [#158738](https://github.com/NousResearch/hermes-agent/issues/158738) [Bug]: Bot Desktop shared browser launches headless when browser.headed is unset, leaving Open Screen blank and breaking dock Browser with SingletonLock `type/bug` `comp/tools` `tool/browser` `tool/file`
- [#158737](https://github.com/NousResearch/hermes-agent/issues/158737) [Bug]: Smart approvals crashes with AttributeError when auxiliary LLM returns list content blocks `type/security` `comp/agent` `comp/tools` `tool/terminal`
- [#158736](https://github.com/NousResearch/hermes-agent/issues/158736) `[Windows] WhatsApp secondary profile bridge fails to start: [WinError 5] Access is denied (CREATE_BREAKAWAY_FROM_JOB)` `type/bug` `comp/cli` `comp/plugins` `platform/whatsapp`
- [#158735](https://github.com/NousResearch/hermes-agent/issues/158735) [Feature]: multilingual auto voice switch `type/feature` `comp/cli` `tool/tts` `area/config`
- [#158731](https://github.com/NousResearch/hermes-agent/issues/158731) [Bug]: tool call loses its name ("Unknown tool ''") when a chunk carries held-back text and the first tool_calls delta `type/bug` `comp/agent` `P2` `area/streaming`
- [#158729](https://github.com/NousResearch/hermes-agent/issues/158729) feat(desktop): hide Dictate button when STT is disabled (stt.enabled: false) `type/feature` `tool/file` `tool/tts` `area/config`
- [#158726](https://github.com/NousResearch/hermes-agent/issues/158726) [Bug]: gateway session-cache invalidation releases a mid-turn agent and aborts the in-flight stream (WinError 10058 / cache_evict_in_flight) `type/bug` `comp/gateway` `P2` `area/sessions`
- [#158723](https://github.com/NousResearch/hermes-agent/issues/158723) An old worker that outlives `hermes update` lazily imports a new-tree module that needs a name its loaded sibling lacks (`release_replaced_skill_view`) `type/bug` `comp/agent` `P2`
- [#158715](https://github.com/NousResearch/hermes-agent/issues/158715) Desktop composer can retain stale subagent rows while live progress continues `type/bug` `tool/delegate` `P2` `comp/desktop`
- [#158678](https://github.com/NousResearch/hermes-agent/issues/158678) web_search and web_extract dropped by check_web_api_key although hermes doctor reports both providers OK (ddgs + local extract) `type/bug` `comp/tools` `tool/web` `area/auth`
- [#158708](https://github.com/NousResearch/hermes-agent/issues/158708) t `P3`
- [#158702](https://github.com/NousResearch/hermes-agent/issues/158702) [Signal] HTTP Host header with forwarded port is rejected by signal-cli when using SSH tunneling `type/bug` `comp/gateway` `platform/signal` `P3`

#### 🔒 Closed Issues
- [#138147](https://github.com/NousResearch/hermes-agent/issues/138147) [Feature]: Support OSC 7501 Program Status Protocol in the CLI/TUI
- [#157791](https://github.com/NousResearch/hermes-agent/issues/157791) Scratch prune deletes a live process's provider-plugin frozen copy → `No module named '<module>'` on every new agent after ~24h
- [#156315](https://github.com/NousResearch/hermes-agent/issues/156315) Feature: emit OSC 7501 state sequences when running inside a Herdr pane (HC_TERMINAL_ID)
- [#158709](https://github.com/NousResearch/hermes-agent/issues/158709) perm probe - please ignore/delete
- [#158708](https://github.com/NousResearch/hermes-agent/issues/158708) t

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 97,319 · **Open issues:** 10,869 · **Last push:** 2h ago

On November 22, 2026, there were no new releases for vLLM, but several significant merged pull requests enhanced the project’s performance and stability. Noteworthy merges include improvements to the Inkling 2 Mini optimization on SM120 and an upgrade to PyTorch's cu135 nightly for better compatibility with the Rubin CI build. Bug fixes addressed issues like the normalization of native GTE positional embedding configurations and a critical security hardening related to input bounds. Among new issues, #69137 raised concerns about crashes due to unconditionally freeing blocks in the KV transfer scheduler, indicating potential instability in the LMCacheMPConnector during abort scenarios.

#### ✅ Merged PRs
- [#69168](https://github.com/vllm-project/vllm/pull/69168) [Perf][Inkling2-Mini] Improve small M GEMM on 5090 (sm120)
- [#69021](https://github.com/vllm-project/vllm/pull/69021) [Perf][Model] Inkling 2: keep the TMA k_group_partials path on SM12x
- [#68036](https://github.com/vllm-project/vllm/pull/68036) [CI/Build][NVIDIA] Use PyTorch's cu135 nightly for Rubin and document the ptxas 13.5.37 SM107 workaround
- [#69028](https://github.com/vllm-project/vllm/pull/69028) [Model] Add Inkling 2 Mini
- [#69013](https://github.com/vllm-project/vllm/pull/69013) [Model] Hy4-flash Cleanup
- [#53207](https://github.com/vllm-project/vllm/pull/53207) [Bugfix] Whisper prompt conditioning: use the real `<|startofprev|>` token
- [#69145](https://github.com/vllm-project/vllm/pull/69145) [Bugfix] Normalize native GTE positional embedding configuration
- [#69134](https://github.com/vllm-project/vllm/pull/69134) [CI] Use platform device in M-RoPE prompt embeds test
- [#68976](https://github.com/vllm-project/vllm/pull/68976) [Model] Add masked_token_ids to never sample given tokens
- [#69073](https://github.com/vllm-project/vllm/pull/69073) [Bugfix][Multimodal] Return 400 for unreadable embedding payloads
- [#54721](https://github.com/vllm-project/vllm/pull/54721) [Bugfix][Security] Complete input-bound hardening left incomplete by PR #51447
- [#68971](https://github.com/vllm-project/vllm/pull/68971) [XPU] skip not applied tests in lora/test_layer.py and test_config.py on XPU
- [#68921](https://github.com/vllm-project/vllm/pull/68921) [Perf][Model] Export ZAYA1 CCA prefill checkpoints
- [#68314](https://github.com/vllm-project/vllm/pull/68314) [Bugfix][EC Connector] Keep marker token embeddings for pruned Qwen3-VL video on encoder-only instances
- [#69101](https://github.com/vllm-project/vllm/pull/69101) [Doc] Add vLLM security review skill
- [#69065](https://github.com/vllm-project/vllm/pull/69065) [Kernel][GDN] Faster fused CUDA MTP decode for 16-bit recurrent state
- [#52794](https://github.com/vllm-project/vllm/pull/52794) [Bugfix][Security] Fix root path matching in auth middleware
- [#53473](https://github.com/vllm-project/vllm/pull/53473) [Bugfix][Security] Enforce prompt-count bound on pooling and scoring routes
- [#68249](https://github.com/vllm-project/vllm/pull/68249) [Security] Share media byte budgets across batched requests
- [#53131](https://github.com/vllm-project/vllm/pull/53131) [Security] Widen int32 pointer arithmetic to int64 in CUDA kernels
- [#69089](https://github.com/vllm-project/vllm/pull/69089) [Bugfix][Multimodal] Convert PIL video frames to RGB like PIL images
- [#68739](https://github.com/vllm-project/vllm/pull/68739) [Bugfix][Multimodal] Size rope_2d DP vision outputs from the spatial grid
- [#68831](https://github.com/vllm-project/vllm/pull/68831) [Perf][Multimodal] Encoder CUDA graphs for the Qwen3-Omni / Qwen3-ASR audio tower
- [#68600](https://github.com/vllm-project/vllm/pull/68600) [Bugfix] Honor batch invariance in manual FlashInfer norm fusion
- [#62516](https://github.com/vllm-project/vllm/pull/62516) [Attention][FlashInfer] DiffusionGemma: mixed causal/bidirectional attention on TRTLLM-Gen, default for text-only SM100/SM103

#### 🐛 New Issues
- [#69137](https://github.com/vllm-project/vllm/issues/69137) KV transfer scheduler frees blocks unconditionally in `_update_from_kv_xfer_finished` — assert crash reproduced with LMCacheMPConnector; in-flight transfers are not cancelled after request abort `kv-connector` `scheduler` 💬3
- [#69081](https://github.com/vllm-project/vllm/issues/69081) [Bug]: Inkling 2 Mini image: DSpark draft fails on SM120 (RTX PRO 6000) - reshape_and_cache_flash has no SM120 kernel (image built for 10.0/10.3 only) `inkling` 💬2
- [#69130](https://github.com/vllm-project/vllm/issues/69130) [Bug]: merge_attn_states reads the wrong token from a head-sliced suffix in Triton and native CUDA `bug` 💬2
- [#69082](https://github.com/vllm-project/vllm/issues/69082) [RFC]: Partial-block prefix caching as the default path for every KV cache group `RFC` `kv-cache-manager` 💬1
- [#69190](https://github.com/vllm-project/vllm/issues/69190) [Bug]: Qwen3 XML tool parser silently drops tool calls when Qwen3.8 INT4 emits <|im_start|> inside <tool_call> (thinking on) `tool-calling` 💬1
- [#69103](https://github.com/vllm-project/vllm/issues/69103) [Bug]: Inkling 2 Mini image on B200: tile-8 TRT-LLM-gen NVFP4 expert GEMM (t128x8x512_s5_..._c1x1x1) hits an illegal memory access during warmup on driver 610.57 (fine on 620.70) `bug` `inkling` 💬1
- [#69156](https://github.com/vllm-project/vllm/issues/69156) [Feature]: Inkling 2 Mini on Ampere/Ada (SM80/86/89) `quantization` `inkling` 💬1
- [#69185](https://github.com/vllm-project/vllm/issues/69185) [Bug]: Structured outputs with the outlines backend return 500 for models whose tokenizer has no eos_token (e.g. Inkling): get_outlines_vocabulary TypeError `rocm` `structured-output` `inkling` 💬1
- [#69115](https://github.com/vllm-project/vllm/issues/69115) [RFC]: [Rust Frontend] Speech-to-text APIs (`/v1/audio/transcriptions`, `/v1/audio/translations`) `rust` 💬1
- [#69114](https://github.com/vllm-project/vllm/issues/69114) [Doc]: Add an automatic tool-calling smoke check to the DeepSeek V4.1 Flash recipe `tool-calling` `deepseek` 💬1
- [#69117](https://github.com/vllm-project/vllm/issues/69117) [Doc]: Distinguish the KV-cache concurrency estimate from SLA capacity 💬1
- [#69183](https://github.com/vllm-project/vllm/issues/69183) [Bug]: compressed-tensors W4A8 int (CompressedTensorsWNA8Int) serves W4A16 on SM86: Marlin takes the layer, and with Humming forced, the groupwise fallback drops the int8 input `quantization`
- [#69173](https://github.com/vllm-project/vllm/issues/69173) [Bug]: hy_v4 tool parser returns an argument as a string when its schema uses allOf `tool-calling`
- [#69161](https://github.com/vllm-project/vllm/issues/69161) [Bug]: olmo3 tool parser: text before <function_calls> is dropped (stream=false) or the tool call is lost (stream=true) `tool-calling`
- [#69154](https://github.com/vllm-project/vllm/issues/69154) [Bug]: GLM-5.3-Flash + MTP + prefix caching on v0.34.0 (B200, TP4): silent constant-token degeneration ("locklock…"), MTP acceptance collapses to 0, persists for requests sharing the prefix `bug` `kimi` `kv-cache-manager` `glm`
- [#69152](https://github.com/vllm-project/vllm/issues/69152) [Performance]: Fused CUDA GDN MTP decode kernel stores a full recurrent state per draft token
- [#69139](https://github.com/vllm-project/vllm/issues/69139) [Bug]: Scheduler over-admits past max_num_seqs when it skips a resumed streaming-input session, and the GPU worker asserts "No free indices" `bug` `scheduler`
- [#69100](https://github.com/vllm-project/vllm/issues/69100) [Bug][KV Connector] `kv_load_failure_policy="recompute"` keeps failed-load blocks as prefix-cache hits, so other requests decode from never-loaded KV `bug`
- [#69084](https://github.com/vllm-project/vllm/issues/69084) [Bug]: Mooncake proxy stalls valid requests with min_tokens greater than one

#### 🔒 Closed Issues
- [#49205](https://github.com/vllm-project/vllm/issues/49205) [Bug]: StreamingParserEngine leaks a bare tag fragment (e.g. '<tool_') into content when a PreLexedTerminal supersedes a buffered text-token prefix of the same tag
- [#51347](https://github.com/vllm-project/vllm/issues/51347) [Bug]: Qwen3OmniMoeThinkerForConditionalGeneration does not support LoRA yet
- [#53206](https://github.com/vllm-project/vllm/issues/53206) [Bug]: Whisper transcription `prompt` corrupts decoding — `<|prev|>` is not a Whisper vocab token (should be `<|startofprev|>`)
- [#69063](https://github.com/vllm-project/vllm/issues/69063) [Bug]: follow-up to #55451: unreadable image_embeds payloads still return 500 (prompt_embeds returns 400 for the same bytes)
- [#65042](https://github.com/vllm-project/vllm/issues/65042) [Doc]: Docs use CLI flag names that `vllm serve` does not register
- [#69100](https://github.com/vllm-project/vllm/issues/69100) [Bug][KV Connector] `kv_load_failure_policy="recompute"` keeps failed-load blocks as prefix-cache hits, so other requests decode from never-loaded KV
- [#68587](https://github.com/vllm-project/vllm/issues/68587) [Bug]: Manual FlashInfer all-reduce + RMSNorm bypasses batch-invariant dispatch
- [#69084](https://github.com/vllm-project/vllm/issues/69084) [Bug]: Mooncake proxy stalls valid requests with min_tokens greater than one

### SGLang (`sgl-project/sglang`)

**Stars:** 38,909 · **Open issues:** 7,080 · **Last push:** <1h ago

Today there were no new releases for SGLang; however, multiple important pull requests were merged to enhance performance and fix existing issues. Notable changes include improvements to the diffusion modules, such as speeding up MiniMax-H3 video decoding on ROCm and optimizing the Ulysses pipeline pool. Additionally, a fix for the jit module ensures that benchmark marker clones maintain strides correctly. Among new issues, #52041 raises a significant concern where the stop_regex function can lead to a MemoryError with a 24-byte pattern, which may disrupt the scheduler, indicating a critical need for attention in the upcoming updates.

#### ✅ Merged PRs
- [#52180](https://github.com/sgl-project/sglang/pull/52180) [Fix] constrained: Let llguidance accept an EOS id the grammar itself ends on
- [#52171](https://github.com/sgl-project/sglang/pull/52171) [Perf] rust-server: Let a full request-log buffer drop lines instead of stalling workers
- [#52120](https://github.com/sgl-project/sglang/pull/52120) [Fix] hicache: Sample the explicit-size host budget once before any local rank pins
- [#51451](https://github.com/sgl-project/sglang/pull/51451) [Fix] diffusion: Load diffusers-format LoRAs saved with a transformer. prefix
- [#52027](https://github.com/sgl-project/sglang/pull/52027) [Perf] [AMD] diffusion: Speed up the MiniMax-H3 video VAE decode on ROCm (gfx950)
- [#52001](https://github.com/sgl-project/sglang/pull/52001) [Perf] diffusion: Keep the Ulysses pipeline pool through first-sight checks and grow it with headroom
- [#52039](https://github.com/sgl-project/sglang/pull/52039) [CI] diffusion: Isolate platform overrides in unit tests
- [#52051](https://github.com/sgl-project/sglang/pull/52051) [Perf] diffusion: Decode the MiniMax-H3 audio beside the video tiles
- [#52168](https://github.com/sgl-project/sglang/pull/52168) [Chore] release: Cherry-pick [Fix] moe: Pre-allocate the trtllm-gen MXFP4 MoE workspace at weight load to release/v1.0.0 (#51995)
- [#39071](https://github.com/sgl-project/sglang/pull/39071) [Perf] [AMD] qknorm: Use the fused in-place QK norm kernel on ROCm
- [#52054](https://github.com/sgl-project/sglang/pull/52054) [Feat] speculative: Apply exact per-row sampling penalties in verify
- [#44265](https://github.com/sgl-project/sglang/pull/44265) [Feat] [AMD] dsv4: Dispatch Mega-mHC prefill to aiter on gfx950
- [#52113](https://github.com/sgl-project/sglang/pull/52113) [Test] mem_cache: Give the stage-capacity test's stub scheduler _embedding_preserve_last_token_id
- [#51995](https://github.com/sgl-project/sglang/pull/51995) [Fix] moe: Pre-allocate the trtllm-gen MXFP4 MoE workspace at weight load
- [#51348](https://github.com/sgl-project/sglang/pull/51348) [Perf] [NVIDIA] deep_select: Opt-in multi-wave cluster top-k for long-tailed rows
- [#44651](https://github.com/sgl-project/sglang/pull/44651) [CI] diffusion: replace FLUX.1/2 nightlies and add FLUX.3 TP2 e2e
- [#52126](https://github.com/sgl-project/sglang/pull/52126) [Fix] jit: Import the rotation helper from marker.timing in the Gemma4 AR fusion benchmark
- [#52117](https://github.com/sgl-project/sglang/pull/52117) [Fix] jit: Keep strides when the benchmark marker clones inputs
- [#51563](https://github.com/sgl-project/sglang/pull/51563) [Refactor] diffusion/cosmos3: Decode on the main CFG rank only, like the generic stage
- [#51934](https://github.com/sgl-project/sglang/pull/51934) [Perf] [AMD] diffusion: Run the BigVGAN vocoder's convolutions in MIOpen's summation orders from Triton
- [#52050](https://github.com/sgl-project/sglang/pull/52050) [Perf] diffusion: Reuse the MP4 encoder's staging buffer for smaller frames
- [#52030](https://github.com/sgl-project/sglang/pull/52030) [Fix] diffusion: Fail the request whose Ulysses peer wait expired, and bound the head-group pipeline's waits
- [#44320](https://github.com/sgl-project/sglang/pull/44320) [Perf] [NPU] dcp: DSA extend gathers the prefix KV when that moves fewer bytes
- [#51954](https://github.com/sgl-project/sglang/pull/51954) [Fix] diffusion/media: Limit the environment inherited by local codecs
- [#51972](https://github.com/sgl-project/sglang/pull/51972) [Fix] diffusion/attention: Use private sample IDs for STA calibration artifacts
- [#51260](https://github.com/sgl-project/sglang/pull/51260) [Fix] diffusion: Do not report ready when a worker dies during warmup
- [#51928](https://github.com/sgl-project/sglang/pull/51928) [CI] ci-permissions: Add micyan01 and gausah01 with 30 min cooldown
- [#50150](https://github.com/sgl-project/sglang/pull/50150) [Feat] platforms: Let OOT platforms provide breakable graph backends (3/3)
- [#51783](https://github.com/sgl-project/sglang/pull/51783) [Fix] diffusion: Reject a LoRA adapter that matches no LoRA layer
- [#51965](https://github.com/sgl-project/sglang/pull/51965) [Perf] diffusion: Memoize MiniMax-H3 block AdaLN projections per timestep set
- [#51825](https://github.com/sgl-project/sglang/pull/51825) [Perf] diffusion: Quantize and LANCZOS-resize MiniMax-H3 image output on the GPU
- [#52085](https://github.com/sgl-project/sglang/pull/52085) [Test] weight_update: Stub the control-request barrier in the tensor-rank test
- [#51936](https://github.com/sgl-project/sglang/pull/51936) [Feat] marlin: Run MXFP8 (E4M3 weights, E8M0 group-32 scales) MoE experts on the Marlin kernel
- [#39754](https://github.com/sgl-project/sglang/pull/39754) [Fix] embedding: Keep the trailing [SEP] on auto-truncation and accumulate MEAN pooling in fp32
- [#51279](https://github.com/sgl-project/sglang/pull/51279) [Perf] paged-experts: pre-copy the next layer's predicted experts beside compute
- [#50602](https://github.com/sgl-project/sglang/pull/50602) [Perf] diffusion: Fuse ordered mean-square reductions in Nomas VAE
- [#52084](https://github.com/sgl-project/sglang/pull/52084) [CI] [AMD] qknorm: Register test_qknorm to the base-a-jit-kernel-unit stage
- [#51220](https://github.com/sgl-project/sglang/pull/51220) [Perf] [H20] fp8-gemm: Take the swapAB kernel for small-M block FP8 GEMM on H20
- [#50639](https://github.com/sgl-project/sglang/pull/50639) [Fix] diffusion: Align Krea-2 request sizes to the 16-pixel patch grid
- [#50243](https://github.com/sgl-project/sglang/pull/50243) [Feat] diffusion: Integrate FlashInfer Ulysses for Wan and MiniMax H3
- [#50929](https://github.com/sgl-project/sglang/pull/50929) [Fix] dsa: Make metadata kernel batch size a runtime arg to avoid per-bs Triton recompiles
- [#45087](https://github.com/sgl-project/sglang/pull/45087) [Fix] constrained: bound the compiled-grammar cache by host memory (LRU) to stop RSS growth with per-request schemas
- [#51237](https://github.com/sgl-project/sglang/pull/51237) [Fix] weight_update: Rebuild each CUDA-IPC tensor once for the target and draft runners
- [#48592](https://github.com/sgl-project/sglang/pull/48592) [Feat] speculative: Insert bounded prompt tail on extend in NGRAMWorker
- [#50088](https://github.com/sgl-project/sglang/pull/50088) [Fix] scheduler: Count the unprefilled part of a chunked request in total_tokens load
- [#51148](https://github.com/sgl-project/sglang/pull/51148) [Fix] gemm: Use int64 row offsets in block-scaled FP8/INT8 matmuls
- [#51210](https://github.com/sgl-project/sglang/pull/51210) [Fix] kernels/layernorm: Mask the padded hc stream in fused_hc_head
- [#51943](https://github.com/sgl-project/sglang/pull/51943) [Fix] cli: Detect the rtxpro6000 Cookbook hardware id as an RTX PRO 6000
- [#51957](https://github.com/sgl-project/sglang/pull/51957) [Feat] scheduler: Load-scaled class boundary and token budget for shortest-prefill-first
- [#51946](https://github.com/sgl-project/sglang/pull/51946) [Fix] rust-server: Serve /internal/peer only to the launch's own listeners
- [#51256](https://github.com/sgl-project/sglang/pull/51256) [Fix] mem_cache: Carry pending request-row resets across static KV storage swaps
- [#46540](https://github.com/sgl-project/sglang/pull/46540) [Fix] hicache: Move NIXL pages that are not whole O_DIRECT blocks

#### 🐛 New Issues
- [#52041](https://github.com/sgl-project/sglang/issues/52041) SGLang: stop_regex passes validation but a 24-byte pattern causes MemoryError that escapes the safety net and kills the scheduler 💬1
- [#52090](https://github.com/sgl-project/sglang/issues/52090) SGLang: /parse_function_call triggers catastrophic regex backtracking in tool call detectors, blocking the event loop from a single request 💬1
- [#52079](https://github.com/sgl-project/sglang/issues/52079) [Bug] FA4 hd256 on SM90 copies the whole paged KV cache on every call when the cache is a strided view (unified-memory pool) 💬1
- [#52191](https://github.com/sgl-project/sglang/issues/52191) [Bug] Diffusion orchestrator: deeply nested result frame escapes per-request handler and stops routing loop
- [#52108](https://github.com/sgl-project/sglang/issues/52108) [Bug] benchmark_vllm_vs_sglang_fused_moe_triton.py calls fused_moe with an outdated signature
- [#52091](https://github.com/sgl-project/sglang/issues/52091) SGLang: /get_weights_by_name materializes the full weight tensor before truncation, enabling memory exhaustion from a single request
- [#52059](https://github.com/sgl-project/sglang/issues/52059) [Bug] [XPU] Startup crash on WSL2 iGPU: torch.xpu.mem_get_info() requires Level Zero Sysman, unavailable under GPU-PV
- [#52040](https://github.com/sgl-project/sglang/issues/52040) SGLang: multimodal chunking parameters have no upper bound, enabling CPU and memory exhaustion from a single request
- [#52031](https://github.com/sgl-project/sglang/issues/52031) [Bug] update_weights_from_disk: the rollback after a failed load reloads the new checkpoint, not the original

#### 🔒 Closed Issues
- [#24703](https://github.com/sgl-project/sglang/issues/24703) [RFC] Refactor weight loading code
- [#20415](https://github.com/sgl-project/sglang/issues/20415) [Roadmap] Unified Hybrid Radix Cache Refactor
- [#40623](https://github.com/sgl-project/sglang/issues/40623) [Bug] Illegal memory access in the Triton fused-MoE kernel when `flashinfer_megamoe` is combined with EAGLE speculative decoding (GLM-5.2-NVFP4, sm_107)
- [#33397](https://github.com/sgl-project/sglang/issues/33397) [Bug] DeepSeek-V4-Flash-0731 on 2× H200: progressive output corruption under concurrency (dsv4 + DP attention)
- [#33642](https://github.com/sgl-project/sglang/issues/33642) [Bug] All schedulers hang in cuModuleLoadData on first EAGLE verify (DSA attention, PD-disagg decode), watchdog timeout
- [#40706](https://github.com/sgl-project/sglang/issues/40706) [Feature] Add FP8 SSM state pool (`--mamba-ssm-dtype float8`) for GDN hybrid models
- [#40094](https://github.com/sgl-project/sglang/issues/40094) Prefill CUDA graph reserves ~1.8 GB and starves quantized-KV long-context prefill on small cards (no auto-disable rule looks at free VRAM)
- [#51106](https://github.com/sgl-project/sglang/issues/51106) [Bug] `fused_hc_head`: wrong result when `hc_mult` is not a power of 2
- [#40797](https://github.com/sgl-project/sglang/issues/40797) [Bug] Sglang 0.5.17 crashing with the following stack trace
- [#39096](https://github.com/sgl-project/sglang/issues/39096) [Bug] --preferred-sampling-params is inert on /v1/chat/completions (re-report of #21816; the five get_param keys are affected too)
- [#40744](https://github.com/sgl-project/sglang/issues/40744) [Bug] DSV v4.1 Flash 2x4 H200 TP8/EP8 + DSPARK causes startup deadlock after DSpark draft weight load on dev-cu13-dsv41 and latest dev-cu13 image
- [#40739](https://github.com/sgl-project/sglang/issues/40739) [Bug] `qwen3_coder` non-streaming parser drops visible text after a valid tool call
- [#40735](https://github.com/sgl-project/sglang/issues/40735) [Bug] MiniMax-M3 incorrectly routes Ascend FuseEP through the normal MoE path
- [#40730](https://github.com/sgl-project/sglang/issues/40730) [Bug] PD retract rebootstrap is not pinned to the bound prefill DP rank unless the client supplied disagg_prefill_dp_rank
- [#40728](https://github.com/sgl-project/sglang/issues/40728) [Bug] `input_embeds` requests through `/open_session` crash the scheduler
- [#40723](https://github.com/sgl-project/sglang/issues/40723) [Bug] Leaked sgl_shm_mm_* segments fill /dev/shm -> permanent crashloop (load snapshot SIGBUS / NCCL ENOSPC) after a scheduler crash
- [#43094](https://github.com/sgl-project/sglang/issues/43094) num_matched_prefix_tokens stays 0 for cache-agnostic policies (fcfs, lof, random, routing-key)
- [#45077](https://github.com/sgl-project/sglang/issues/45077) [Bug] Unbounded compiled-grammar cache in BaseGrammarBackend leaks host memory with per-request JSON schemas
- [#51098](https://github.com/sgl-project/sglang/issues/51098) [Bug] `w8a8_block_fp8_matmul_triton`: row offset wraps for inputs with >= 2^31 elements

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 135,937 · **Open issues:** 2,635 · **Last push:** <1h ago

On November 22, 2026, llama.cpp released several versions, including b12626, which fixed a memset issue for non-UMA Vulkan devices, and b12625, addressing no_realloc problems for clef and vllm-decision2. Other updates included enhancements to reasoning effort handling in chat features and merging Parakeet rel-pos views to prevent out-of-bounds errors. Significant merged pull requests also tackled memory access patterns and various SYCL kernel optimizations. Among the newly reported issues, a notable bug (#32710) regarding perplexity returning NaN on CUDA during evaluation was highlighted, pointing to potential challenges in the ongoing development for the Inkling2 architecture.

#### 🚀 New Releases
- [b12626](https://github.com/ggml-org/llama.cpp/releases/tag/b12626) b12626
- [b12625](https://github.com/ggml-org/llama.cpp/releases/tag/b12625) b12625
- [b12624](https://github.com/ggml-org/llama.cpp/releases/tag/b12624) b12624
- [b12623](https://github.com/ggml-org/llama.cpp/releases/tag/b12623) b12623
- [b12622](https://github.com/ggml-org/llama.cpp/releases/tag/b12622) b12622
- [b12621](https://github.com/ggml-org/llama.cpp/releases/tag/b12621) b12621
- [b12620](https://github.com/ggml-org/llama.cpp/releases/tag/b12620) b12620
- [b12619](https://github.com/ggml-org/llama.cpp/releases/tag/b12619) b12619
- [b12618](https://github.com/ggml-org/llama.cpp/releases/tag/b12618) b12618
- [b12617](https://github.com/ggml-org/llama.cpp/releases/tag/b12617) b12617

#### ✅ Merged PRs
- [#32725](https://github.com/ggml-org/llama.cpp/pull/32725) vulkan : fix memset for unaligned ranges for non-UMA devices
- [#32754](https://github.com/ggml-org/llama.cpp/pull/32754) model: fix no_realloc for clef and vllm-decision2
- [#32763](https://github.com/ggml-org/llama.cpp/pull/32763) chat : pass reasoning_effort = none if supported
- [#32722](https://github.com/ggml-org/llama.cpp/pull/32722) mtmd : merge Parakeet rel-pos views to avoid OOB
- [#32669](https://github.com/ggml-org/llama.cpp/pull/32669) model: apply .scale tensors automatically + fix correctness
- [#32491](https://github.com/ggml-org/llama.cpp/pull/32491) mtmd: support kyutai/hibiki realtime full-duplex
- [#31109](https://github.com/ggml-org/llama.cpp/pull/31109) sycl: bound CONV_TRANSPOSE_1D input iteration
- [#30846](https://github.com/ggml-org/llama.cpp/pull/30846) Improvements to the Memory Access Pattern in `ggml_compute_forward_mul_mat_one_chunk`
- [#31998](https://github.com/ggml-org/llama.cpp/pull/31998) sycl: add IQ4_NL and IQ4_XS weight reorder
- [#32456](https://github.com/ggml-org/llama.cpp/pull/32456) sycl: column-blocked gated_delta_net kernel
- [#32685](https://github.com/ggml-org/llama.cpp/pull/32685) ui: open the context gauge panel on click as a popover
- [#31753](https://github.com/ggml-org/llama.cpp/pull/31753) sycl: add fused ADD, RMS_NORM, MUL and vectorize rms norm
- [#32698](https://github.com/ggml-org/llama.cpp/pull/32698) CUDA: abort on UB in fastdiv
- [#32466](https://github.com/ggml-org/llama.cpp/pull/32466) vulkan: unroll FA coopmat1 array due to a driver bug on AMD Windows
- [#31804](https://github.com/ggml-org/llama.cpp/pull/31804) vulkan: improve RDNA4 MMVQ performance for Q3_K, Q5_K and IQ4_XS
- [#32704](https://github.com/ggml-org/llama.cpp/pull/32704) model : inkling2_loop re-share the loop slots after the scale pass
- [#32720](https://github.com/ggml-org/llama.cpp/pull/32720) model : additional shortcut checks for OOB in hrm_text
- [#32279](https://github.com/ggml-org/llama.cpp/pull/32279) ggml-zdnn: fix ztensor load race condition
- [#32708](https://github.com/ggml-org/llama.cpp/pull/32708) ci: temporary disable no realloc case for mtmd
- [#32659](https://github.com/ggml-org/llama.cpp/pull/32659) ggml-cpu: fix nc aligment in tinyBLAS_Q0_PPC
- [#32679](https://github.com/ggml-org/llama.cpp/pull/32679) ci: switch ppc64le runners to ubuntu 26.04
- [#32650](https://github.com/ggml-org/llama.cpp/pull/32650) llama : remove fused lightning indexer gating
- [#32519](https://github.com/ggml-org/llama.cpp/pull/32519) llama : score only the k-pools of the ubatch sequences in QSA
- [#32551](https://github.com/ggml-org/llama.cpp/pull/32551) llama-grammar: Fix integer overflow
- [#31428](https://github.com/ggml-org/llama.cpp/pull/31428) sycl: Improve Grouped XMX GEMM by avoiding SLM staging
- [#30967](https://github.com/ggml-org/llama.cpp/pull/30967) docs: openvino backend details, fix SYCL docs

#### 🐛 New Issues
- [#32710](https://github.com/ggml-org/llama.cpp/issues/32710) Eval bug: inkling2_loop: perplexity nan on CUDA `bug-unconfirmed` 💬5
- [#32739](https://github.com/ggml-org/llama.cpp/issues/32739) Feature Request: Add tensor split mode support for the Inkling2 architecture `enhancement` 💬1
- [#32778](https://github.com/ggml-org/llama.cpp/issues/32778) inkling2: prompts longer than ~96 tokens produce all-'?' output from the first sampled token; server stays broken afterwards 💬2
- [#32780](https://github.com/ggml-org/llama.cpp/issues/32780) Compile bug: UI asset validation fails during build (v1.0.0 and v0.7.0) `bug-unconfirmed` 💬1
- [#32718](https://github.com/ggml-org/llama.cpp/issues/32718) inkling2_loop: co-locate per-pass KV and recurrent state with shared weights in multi-GPU layer split 💬2
- [#32745](https://github.com/ggml-org/llama.cpp/issues/32745) Inkling 2: raw `grammar` requests return empty content (no text-block prefix) 💬2
- [#32753](https://github.com/ggml-org/llama.cpp/issues/32753) Misc. bug: "reasoning_effort": "none" gives Inkling 2 the template's default effort (0.9) instead of 0 `bug-unconfirmed` 💬1
- [#32742](https://github.com/ggml-org/llama.cpp/issues/32742) Misc. bug: `bug-unconfirmed` 💬1
- [#32736](https://github.com/ggml-org/llama.cpp/issues/32736) Eval bug: ggml_cuda_compute_forward: TOP_K failed `bug-unconfirmed` 💬1
- [#32715](https://github.com/ggml-org/llama.cpp/issues/32715) Misc. bug: HF Filename with "imatrix" rejected `bug-unconfirmed` 💬1
- [#32785](https://github.com/ggml-org/llama.cpp/issues/32785) Misc. bug: Inkling 2 mini KV cache locality does not match layer placement. `bug-unconfirmed`
- [#32776](https://github.com/ggml-org/llama.cpp/issues/32776) Eval bug: draft-model speculative decoding ~2.2–2.4× slower on Qwen3.5 (Gated DeltaNet hybrid), CUDA — non-hybrid Qwen3 control loses only 10–18% at same acceptance `bug-unconfirmed`
- [#32772](https://github.com/ggml-org/llama.cpp/issues/32772) Refactor: Decoupling the KV buffer size from the logical context length
- [#32770](https://github.com/ggml-org/llama.cpp/issues/32770) test
- [#32769](https://github.com/ggml-org/llama.cpp/issues/32769) Eval bug: ggml-webgpu: Safari can't start the WebGPU backend (constant array over WebKit's 2,047-element limit); graph walk overflows its stack
- [#32768](https://github.com/ggml-org/llama.cpp/issues/32768) Feature Request: Optional cross-pass KV cache sharing (`loop_share_cache`) for `inkling2_loop` `enhancement`
- [#32764](https://github.com/ggml-org/llama.cpp/issues/32764) Feature Request: ggml-webgpu : expose all compatible adapters as separate devices `enhancement`
- [#32749](https://github.com/ggml-org/llama.cpp/issues/32749) Eval bug: RDNA1 token corruption on gpt-oss models with attention `bug-unconfirmed`
- [#32760](https://github.com/ggml-org/llama.cpp/issues/32760) Misc. bug: /v1/realtime?intent=transcription not working for Qwen3-ASR `bug-unconfirmed`
- [#32759](https://github.com/ggml-org/llama.cpp/issues/32759) server (Metal): no recovery after a command buffer failure - backend stays in permanent error state, 'Compute error.' forever
- [#32757](https://github.com/ggml-org/llama.cpp/issues/32757) Feature Request: SYCL: support the compact indexed attention bias (#32740) for Inkling 2
- [#32755](https://github.com/ggml-org/llama.cpp/issues/32755) inkling2_loop: garbage output when loop-layer experts run on CPU (--n-cpu-moe) with long prompts; correct with --override-tensor offloading only non-loop layers
- [#32744](https://github.com/ggml-org/llama.cpp/issues/32744) Misc. bug: MoE cache stores shared expert weights 3 times on looped models (inkling2_loop) `bug-unconfirmed`
- [#32743](https://github.com/ggml-org/llama.cpp/issues/32743) Misc. bug: Tied Gemma 4 embeddings use ~650 MiB extra GTT with default Vulkan placement
- [#32737](https://github.com/ggml-org/llama.cpp/issues/32737) Eval bug: Unknown error is always treated as out of memory `bug-unconfirmed`
- [#32732](https://github.com/ggml-org/llama.cpp/issues/32732) Misc. bug: inkling2_loop aborts on gfx1030/RDNA2 (ROCm 7.2) - f32 matmul with odd K falls back to hipBLAS, no rocBLAS kernel
- [#32712](https://github.com/ggml-org/llama.cpp/issues/32712) Eval bug: multimodal (mtmd) prompt processing ~3.5x slower on aarch64 CPU since b12211 (F16 mmproj); text-only unaffected
- [#32709](https://github.com/ggml-org/llama.cpp/issues/32709) Misc. bug: CUDA 13.5 build b12359 segfaults at --list-devices on WSL2 with RTX 5060 `bug-unconfirmed`

#### 🔒 Closed Issues
- [#30089](https://github.com/ggml-org/llama.cpp/issues/30089) Eval bug: llama.cpp server hangs (loops forever) at the same token when used from lm_eval
- [#29351](https://github.com/ggml-org/llama.cpp/issues/29351) ggml-cpu x86: Q8_0 dot product sign error when an int8 operand is -128 (non-VNNI mul_sum_i8_pairs_float)
- [#30161](https://github.com/ggml-org/llama.cpp/issues/30161) Feature Request: Decision 2.0 GGUF and systemone support
- [#30166](https://github.com/ggml-org/llama.cpp/issues/30166) Misc. bug: Vulkan: FLASH_ATTN_EXT wrong results on MoltenVK 1.4.2 + AMD RDNA1 when head size is not a multiple of subgroup size (Apple+AMD shuffle disable from #15846 still required)
- [#32745](https://github.com/ggml-org/llama.cpp/issues/32745) Inkling 2: raw `grammar` requests return empty content (no text-block prefix)
- [#31680](https://github.com/ggml-org/llama.cpp/issues/31680) Eval bug: POWER10: llamafile sgemm (MMA) produces corrupted output for Flint (MoE); correct with GGML_LLAMAFILE=OFF
- [#30174](https://github.com/ggml-org/llama.cpp/issues/30174) Metal: draft-mtp allocates up to ~15 GB host (malloc) memory during a ~96k-token session vs ~5 GB without spec (Qwen3.8-27B, 64 GB M4 Max)
- [#32753](https://github.com/ggml-org/llama.cpp/issues/32753) Misc. bug: "reasoning_effort": "none" gives Inkling 2 the template's default effort (0.9) instead of 0
- [#32770](https://github.com/ggml-org/llama.cpp/issues/32770) test
- [#32550](https://github.com/ggml-org/llama.cpp/issues/32550) Eval bug: Hang and OOM due to integer overflow in llama-grammar

### Ollama (`ollama/ollama`)

**Stars:** 187,799 · **Open issues:** 4,723 · **Last push:** 6h ago

On November 22, 2026, Ollama did not release any new versions. However, two notable pull requests were merged, including enhancements to the Inkling framework for Metal support, specifically addressing residual mixing and a follow-up improvement on Inkling functionality. Among the new issues reported, a significant concern was raised regarding the inability of the Inkling 2 Mini GGUF to load on Windows due to an "unknown architecture" error. Additionally, a critical crash issue was identified on the Jetson AGX Orin with CUDA out-of-memory errors when handling image requests, prompting a recommendation for a specific build configuration. Overall, the day was characterized by maintenance and bug tracking within the Ollama ecosystem.

#### ✅ Merged PRs
- [#19808](https://github.com/ollama/ollama/pull/19808) mlx: fuse Inkling residual mixing on Metal
- [#19806](https://github.com/ollama/ollama/pull/19806) mlx: inkling follow up

#### 🐛 New Issues
- [#19817](https://github.com/ollama/ollama/issues/19817) Windows: Inkling 2 Mini GGUF fails to load: unknown architecture (inkling2_loop/inkling2) and projector (inkling2v) `bug` 💬2
- [#19828](https://github.com/ollama/ollama/issues/19828) add CLI flag to hide animation `feature request` 💬1
- [#19826](https://github.com/ollama/ollama/issues/19826) llama.cpp: bump LLAMA_CPP_VERSION for inkling2_loop (Inkling 2 Mini GGUF)
- [#19815](https://github.com/ollama/ollama/issues/19815) Jetson AGX Orin (JetPack 6): every image request crashes with CUDA OOM in `cuMemAddressReserve` (VMM pool) – please build the JetPack runner with `GGML_CUDA_NO_VMM=ON` `bug` 💬1
- [#19829](https://github.com/ollama/ollama/issues/19829) qwen3.5 parser: a close tag the model writes as plain text ends thinking early
- [#19827](https://github.com/ollama/ollama/issues/19827) ollama launch pi ignores PI_CODING_AGENT_DIR
- [#19824](https://github.com/ollama/ollama/issues/19824) Prefer No Sysmem Fallback problem
- [#19823](https://github.com/ollama/ollama/issues/19823) Security Clarification: Ollama Cloud Third-Party Inference Providers and Potential Data Exposure
- [#19820](https://github.com/ollama/ollama/issues/19820) MLX: enable relative-attention kernels on Apple M4 Max (same applegpu_g16s as M4 Pro)
- [#19819](https://github.com/ollama/ollama/issues/19819) MLX: Inkling 2 prefix cache is fully evicted past ~64k tokens because the relative-attention prefill peak grows with context
- [#19818](https://github.com/ollama/ollama/issues/19818) Inkling 2: prefix cache recomputes up to 2k tokens per turn because restores must match the cold prefill batch split
- [#19809](https://github.com/ollama/ollama/issues/19809) Feature Request: Hardware-Aware Model Recommendations and Model Comparison `feature request`

#### 🔒 Closed Issues
- [#19817](https://github.com/ollama/ollama/issues/19817) Windows: Inkling 2 Mini GGUF fails to load: unknown architecture (inkling2_loop/inkling2) and projector (inkling2v)
- [#19824](https://github.com/ollama/ollama/issues/19824) Prefer No Sysmem Fallback problem

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,671 · **Open issues:** 5,383 · **Last push:** <1h ago

On November 22, 2026, LiteLLM released version v1.112.0-dev.2, which introduces a feature allowing operators to omit x-litellm-* response headers, as well as LTS version v1.108.15. Significant merged changes include the addition of CSV export functionality to the Request Logs page and a key fix that preserves split limits for shared HTTPX completions. An important new issue reported today is #53513, highlighting a problem with least-busy routing consistently selecting the first deployment during traffic ties. The day's updates reflect ongoing enhancements and fixes aimed at improving the overall stability and functionality of the platform.

#### 🚀 New Releases
- [v1.112.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.112.0-dev.2) v1.112.0-dev.2
- [v1.108.15](https://github.com/BerriAI/litellm/releases/tag/v1.108.15) 1.108.15 (LTS)

#### ✅ Merged PRs
- [#53501](https://github.com/BerriAI/litellm/pull/53501) feat(ui): add CSV export to the Request Logs page
- [#53485](https://github.com/BerriAI/litellm/pull/53485) feat(lens)!: forward Claude Code's traces and logs to Lens and stop sending the gateway's own records
- [#53499](https://github.com/BerriAI/litellm/pull/53499) fix(ui): show user email in log details drawer for internal users
- [#53496](https://github.com/BerriAI/litellm/pull/53496) refactor(ui): let the dashboard layout draw the page frame
- [#53391](https://github.com/BerriAI/litellm/pull/53391) fix(timeout): preserve split limits for shared httpx completions
- [#53431](https://github.com/BerriAI/litellm/pull/53431) fix(router): keep one caller's own bad credential from cooling down a shared deployment
- [#53376](https://github.com/BerriAI/litellm/pull/53376) fix(guardrails): show the /v1/messages web search tool to guardrails
- [#53489](https://github.com/BerriAI/litellm/pull/53489) fix(ui): filter Logs by public model group name
- [#53486](https://github.com/BerriAI/litellm/pull/53486) ci: restore a PR's handwritten description when an edit resets it to the placeholder
- [#53463](https://github.com/BerriAI/litellm/pull/53463) feat(gradium): add text-to-speech support for /v1/audio/speech (lts/1.108.x)
- [#53476](https://github.com/BerriAI/litellm/pull/53476) fix(ui): show saved user aliases after SSO
- [#53259](https://github.com/BerriAI/litellm/pull/53259) fix(proxy): accept any case of the bearer scheme on realtime auth
- [#53379](https://github.com/BerriAI/litellm/pull/53379) fix(proxy): preserve OAuth query parameters on configured pass-through routes
- [#53395](https://github.com/BerriAI/litellm/pull/53395) fix(anthropic): drop or reject sampling params under anthropic-version 2026-10-21 (lts)
- [#53407](https://github.com/BerriAI/litellm/pull/53407) fix(anthropic): drop or reject sampling params under anthropic-version 2026-10-21
- [#53440](https://github.com/BerriAI/litellm/pull/53440) fix(ui): unify header controls and hide page tab scrollbars
- [#53465](https://github.com/BerriAI/litellm/pull/53465) fix(caching): prevent duplicate success logging on cache hits (lts/1.108.x)
- [#52852](https://github.com/BerriAI/litellm/pull/52852) fix(caching): prevent duplicate success logging on cache hits
- [#53411](https://github.com/BerriAI/litellm/pull/53411) fix(anthropic)!: backport #48373 to lts/1.108.x, send extra_body fields at the top level
- [#53475](https://github.com/BerriAI/litellm/pull/53475) fix(ui): show when config.yaml controls cost margins
- [#53439](https://github.com/BerriAI/litellm/pull/53439) fix(http): stop advertising zstd so streamed responses survive per-event frames
- [#52897](https://github.com/BerriAI/litellm/pull/52897) test(spend): include cache and margin fields in daily activity expectations
- [#49896](https://github.com/BerriAI/litellm/pull/49896) test(e2e): run codex under the real model name as a team model, round trip and compaction
- [#46427](https://github.com/BerriAI/litellm/pull/46427) feat(gradium): add text-to-speech support for /v1/audio/speech
- [#53479](https://github.com/BerriAI/litellm/pull/53479) test(mcp): mask a per-test verb so the elicitation guardrail cannot redact a neighbouring test
- [#53474](https://github.com/BerriAI/litellm/pull/53474) test(proxy): expect the logs upload route to be retired and a keyless trace upload to answer 401
- [#53472](https://github.com/BerriAI/litellm/pull/53472) fix(ui): keep acronyms in English in the zh-CN locale
- [#53470](https://github.com/BerriAI/litellm/pull/53470) docs(agents): drop function names from the cost map rule
- [#53471](https://github.com/BerriAI/litellm/pull/53471) test(spend): assert ledger callback counts apart from wire command order in the remaining spend counter tests
- [#53459](https://github.com/BerriAI/litellm/pull/53459) fix(ui): show team metadata in settings
- [#53467](https://github.com/BerriAI/litellm/pull/53467) docs(ui): list the words the dashboard never translates
- [#53458](https://github.com/BerriAI/litellm/pull/53458) fix(sap): backport list-shaped reasoning_content handling to lts/1.108.x (#52741)
- [#53466](https://github.com/BerriAI/litellm/pull/53466) fix(ui): use one label for sidebar and page title
- [#53468](https://github.com/BerriAI/litellm/pull/53468) docs(agents): keep model capability flags in the cost map
- [#53460](https://github.com/BerriAI/litellm/pull/53460) test(integration): fix race in the Prometheus stored-credential 401 cell
- [#53270](https://github.com/BerriAI/litellm/pull/53270) feat(gemini): support Gemini Live Avatar on Vertex AI realtime
- [#53441](https://github.com/BerriAI/litellm/pull/53441) fix(gemini): backport keeping thought images out of message.images to lts/1.108.x
- [#53457](https://github.com/BerriAI/litellm/pull/53457) fix(ui): default Usage to month-to-date
- [#53266](https://github.com/BerriAI/litellm/pull/53266) fix(responses): answer Codex compaction_trigger on the chat-completions bridge
- [#53306](https://github.com/BerriAI/litellm/pull/53306) fix(anthropic): stream /v1/messages tool arguments that only arrive in done events
- [#53414](https://github.com/BerriAI/litellm/pull/53414) fix(bedrock): backport runtime endpoint routing for native chat and Responses to lts/1.108.x (#50582)
- [#53324](https://github.com/BerriAI/litellm/pull/53324) refactor(gateway): serve inference routes through one driver that also reports them to the router
- [#53011](https://github.com/BerriAI/litellm/pull/53011) feat(gateway): run callbacks through one native stage around each inference call
- [#53060](https://github.com/BerriAI/litellm/pull/53060) feat(gateway): share the router's cooldowns, usage and health through Redis
- [#53456](https://github.com/BerriAI/litellm/pull/53456) refactor(llms): move anthropic messages scalar helpers into python-compat
- [#53455](https://github.com/BerriAI/litellm/pull/53455) fix(harness)!: preserve unknown costs across agent sessions
- [#53417](https://github.com/BerriAI/litellm/pull/53417) fix(streaming): read missing generic chunk fields with defaults on lts/1.108.x (#43501)
- [#43501](https://github.com/BerriAI/litellm/pull/43501) fix(streaming): read missing generic chunk fields with defaults
- [#53283](https://github.com/BerriAI/litellm/pull/53283) fix(ui): align observability and portal page headers
- [#52871](https://github.com/BerriAI/litellm/pull/52871) test(cost): add tier 1 cost tracking cases for azure gpt-6.2-sol and Mantle gpt-6.2-sol, gpt-6.2-astra and gpt-6.1-terra
- [#53421](https://github.com/BerriAI/litellm/pull/53421) ci(lint): run the fast lint checks on pull requests again without compiling Rust
- [#53437](https://github.com/BerriAI/litellm/pull/53437) test(providers): cover ResetData in the internal params chat route matrix (#53398) [lts/1.108.x]
- [#53398](https://github.com/BerriAI/litellm/pull/53398) test(providers): cover ResetData in the internal params chat route matrix
- [#53445](https://github.com/BerriAI/litellm/pull/53445) fix(ui): preserve inherited models when extending a member key
- [#53331](https://github.com/BerriAI/litellm/pull/53331) chore(cost-map): rolling registry audit for November 21
- [#53424](https://github.com/BerriAI/litellm/pull/53424) test(proxy): expect only the logs upload route to be retired on each component
- [#53433](https://github.com/BerriAI/litellm/pull/53433) test(proxy): cover the logs handler now that the retired traces handler is gone
- [#53447](https://github.com/BerriAI/litellm/pull/53447) fix(proxy): stop key creation with per-model limits in an organization from returning 500
- [#53408](https://github.com/BerriAI/litellm/pull/53408) fix(azure_ai): use the v1 chat path for Azure OpenAI resource bases on lts/1.108.x
- [#53434](https://github.com/BerriAI/litellm/pull/53434) fix(ui): keep saved team policies visible after reload
- [#53311](https://github.com/BerriAI/litellm/pull/53311) fix(policy): drop refused temperatures on policy template enrichment calls
- [#50709](https://github.com/BerriAI/litellm/pull/50709) fix(gemini): keep thought images out of message.images
- [#53436](https://github.com/BerriAI/litellm/pull/53436) fix(responses): type the cold storage helpers with Mapping so ruff passes on main
- [#53430](https://github.com/BerriAI/litellm/pull/53430) fix(responses): type the cold storage helpers' spend log as a mapping
- [#53401](https://github.com/BerriAI/litellm/pull/53401) test(auth): expect null error param for blocked keys (#39540) [lts/1.108.x]
- [#53399](https://github.com/BerriAI/litellm/pull/53399) test(otel): backport excluded services matrix fixes (#51554, #51759) [lts/1.108.x]
- [#53284](https://github.com/BerriAI/litellm/pull/53284) fix(ui): align settings and catalog headers with Virtual Keys
- [#53278](https://github.com/BerriAI/litellm/pull/53278) fix(ui): align management page headers with Virtual Keys
- [#53383](https://github.com/BerriAI/litellm/pull/53383) fix(proxy): stop the MCP authorize login loop when the dashboard session key is dead
- [#52569](https://github.com/BerriAI/litellm/pull/52569) feat(skills): export download history as streamed CSV
- [#52790](https://github.com/BerriAI/litellm/pull/52790) feat(gateway): encode forwarding policy based on config, header, body etc
- [#53381](https://github.com/BerriAI/litellm/pull/53381) feat(harness): compare custom agents with supported harnesses
- [#53380](https://github.com/BerriAI/litellm/pull/53380) chore(ui): remove the Lens spend log wiring that Lens 0.2.0 no longer uses
- [#53196](https://github.com/BerriAI/litellm/pull/53196) fix(decisions): support the litellm_proxy provider (#51611, #53195) [lts/1.108.x]
- [#53195](https://github.com/BerriAI/litellm/pull/53195) fix(decisions): keep systemone confidence, extra fields and proxy cost on litellm_proxy calls
- [#50768](https://github.com/BerriAI/litellm/pull/50768) feat(vertex_ai): add Meta Muse models on Vertex AI
- [#53232](https://github.com/BerriAI/litellm/pull/53232) feat(proxy): add app groups with shared budgets and usage
- [#53375](https://github.com/BerriAI/litellm/pull/53375) feat(ui): show every budget that applies on the key overview
- [#53045](https://github.com/BerriAI/litellm/pull/53045) feat(proxy): require customer headers by gateway, team, or key
- [#53377](https://github.com/BerriAI/litellm/pull/53377) chore(cost-map): add fireworks_ai kimi-k3p1-pro-us at the published US-only rate
- [#53260](https://github.com/BerriAI/litellm/pull/53260) fix(auth): retry a team read that loses its database connection and answer 503 when the database is down
- [#53371](https://github.com/BerriAI/litellm/pull/53371) feat(ui): move team member defaults into their own team tab
- [#53226](https://github.com/BerriAI/litellm/pull/53226) feat(lens): strip agent harness context from what the gateway sends Lens
- [#53370](https://github.com/BerriAI/litellm/pull/53370) fix(bedrock): preserve native chat content cache checkpoints (#53322)
- [#53366](https://github.com/BerriAI/litellm/pull/53366) feat(harness): expose graded single-attempt evaluations
- [#53307](https://github.com/BerriAI/litellm/pull/53307) fix(bedrock): bill Nova embedding audio and video by the clip's length
- [#53363](https://github.com/BerriAI/litellm/pull/53363) test(integration): update two spend tests left stale by the rust spend log writer
- [#53184](https://github.com/BerriAI/litellm/pull/53184) fix(auth): carry the user row's email on refreshed session tokens
- [#53296](https://github.com/BerriAI/litellm/pull/53296) fix(bedrock): bill the text sent beside an image in a Nova embedding request
- [#53308](https://github.com/BerriAI/litellm/pull/53308) fix(cost): bill OpenAI token-priced aac and flac speech on the length of the returned audio
- [#53313](https://github.com/BerriAI/litellm/pull/53313) fix(proxy): the failure row after a failed fallback stands for the attempt the client saw
- [#53365](https://github.com/BerriAI/litellm/pull/53365) chore: bump litellm to 1.108.15 on lts/1.108.x
- [#53288](https://github.com/BerriAI/litellm/pull/53288) fix(proxy): accept audience and public_key_url in litellm_jwtauth
- [#53285](https://github.com/BerriAI/litellm/pull/53285) feat(lens): forward agent spans to Lens and record gateway calls in the agent's trace
- [#53272](https://github.com/BerriAI/litellm/pull/53272) test(translation): backport #53243 to lts/1.108.x, expect the bridged Messages system prompt as input
- [#53231](https://github.com/BerriAI/litellm/pull/53231) fix(vertex_ai): fail Gemini malformed replies with no output so retries and fallbacks run
- [#52466](https://github.com/BerriAI/litellm/pull/52466) feat(gateway): answer a stream the provider fails before any content with a retry or a fallback
- [#52428](https://github.com/BerriAI/litellm/pull/52428) feat(gateway): model restamping in rust gateway
- [#53325](https://github.com/BerriAI/litellm/pull/53325) refactor(auth-store): shape the cached virtual key in Rust and load it through one Python path
- [#51135](https://github.com/BerriAI/litellm/pull/51135) refactor(auth_cache_invalidation): move the invalidation channel to the native client
- [#51130](https://github.com/BerriAI/litellm/pull/51130) refactor(auth_cache): type auth cache keys and keep the cache always native

#### 🐛 New Issues
- [#53513](https://github.com/BerriAI/litellm/issues/53513) least-busy routing always picks the first deployment on ties, so sequential traffic never spreads 💬2
- [#53478](https://github.com/BerriAI/litellm/issues/53478) [Bug]: Vertex Claude Haiku 5.5 missing native structured-output flag silently falls back to an unforced JSON tool `llm translation` 💬2
- [#53338](https://github.com/BerriAI/litellm/issues/53338) [Bug]: Vertex Gemini image routes rebuild credentials and fetch a new OAuth token on every request (per-instance VertexBase cache) `llm translation` 💬1
- [#53385](https://github.com/BerriAI/litellm/issues/53385) [Bug]: /v1/extraction returns 500 when a Cloudflare Clairic list answer has null spans entries 💬1
- [#53344](https://github.com/BerriAI/litellm/issues/53344) [Bug]: Vector stores: connection not tested on save, store settings can't be edited `bug` 💬1
- [#53355](https://github.com/BerriAI/litellm/issues/53355) [Bug]: lite models update ignores the model id, so every update fails `llm translation` 💬1
- [#53300](https://github.com/BerriAI/litellm/issues/53300) Budget/spend clearance for LiteLLM proxy fleets (Screwtape.ai) 💬1
- [#53492](https://github.com/BerriAI/litellm/issues/53492) [Feature]: ElevenLabs Scribe v2 Realtime (scribe_v2_realtime) on /v1/realtime `llm translation`
- [#53493](https://github.com/BerriAI/litellm/issues/53493) [Bug]: Spend log details return 404 for request IDs containing slashes, even when URL-encoded
- [#53491](https://github.com/BerriAI/litellm/issues/53491) [Bug]: ElevenLabs transcription sends list params like keyterms as Python list text, so every keyterms request gets a 400
- [#53387](https://github.com/BerriAI/litellm/issues/53387) [Feature]: Support Cloudflare Clairic documents (PDF input) on /v1/extraction
- [#53386](https://github.com/BerriAI/litellm/issues/53386) [Bug]: /v1/extraction rejects Cloudflare Clairic enum, boolean, object and compute field types and object list items
- [#53322](https://github.com/BerriAI/litellm/issues/53322) [Bug]: Bedrock Runtime native Chat Completions drops prompt_cache_breakpoint with drop_params enabled `llm translation`
- [#53357](https://github.com/BerriAI/litellm/issues/53357) [Bug]: lite keys generate --spend is documented as the key limit but sets spent amount
- [#53356](https://github.com/BerriAI/litellm/issues/53356) [Bug]: lite credentials get/delete do not encode the name, so ? or # target another credential
- [#53346](https://github.com/BerriAI/litellm/issues/53346) [Feature]: Improve UX workflow for adding (Milvus) Vector Store `enhancement`
- [#53345](https://github.com/BerriAI/litellm/issues/53345) [Bug]: Gemini generateContent → Anthropic drops parallel calls to the same function and duplicates tool_result ids `llm translation`
- [#53343](https://github.com/BerriAI/litellm/issues/53343) [Bug]: Test searches in the Admin UI return 0 results for a Milvus collection unless its vector field happens to be named `book_intro_vector`. `bug`
- [#53340](https://github.com/BerriAI/litellm/issues/53340) Anthropic /v1/messages bridge: None completion_stream crashes mid-stream (AttributeError in _CombinedChunkSplitter) `llm translation`
- [#53339](https://github.com/BerriAI/litellm/issues/53339) [Perf]: Vertex Gemini image replies (10-55 MB) are gunzipped on the event loop; request Accept-Encoding: identity `llm translation`
- [#53301](https://github.com/BerriAI/litellm/issues/53301) Docs idea: Screwtape agent_fleet_compliance before paid tool/proxy spend

#### 🔒 Closed Issues
- [#43487](https://github.com/BerriAI/litellm/issues/43487) [Bug]: A partial generic streaming chunk is accepted and then raises KeyError
- [#53185](https://github.com/BerriAI/litellm/issues/53185) [Bug]: OAuth client_id query parameter rejected on pass-through GET
- [#50893](https://github.com/BerriAI/litellm/issues/50893) [Bug]: `stream_chunk_builder` raises `TypeError` when a provider streams `reasoning_content` as a list (GPT reasoning models)
- [#43166](https://github.com/BerriAI/litellm/issues/43166) [Feature]: Support Gemini Live Avatar (avatar_config / customized_avatar) in realtime Gemini/Vertex integration
- [#43153](https://github.com/BerriAI/litellm/issues/43153) [Bug]: Router retries re-execute auto-approved MCP tools after a failed follow-up model call
- [#46542](https://github.com/BerriAI/litellm/issues/46542) Streaming completion reports finish_reason "stop" when the stream ends without any finish reason
- [#44200](https://github.com/BerriAI/litellm/issues/44200) audio_speech: deployment-level input_cost_per_character is silently ignored — 200 with spend=0 and no x-litellm-response-cost header
- [#28026](https://github.com/BerriAI/litellm/issues/28026) [Feature]: Support Ollama text-to-image via litellm.image_generation (x/flux2-klein etc.)
- [#36928](https://github.com/BerriAI/litellm/issues/36928) [Bug]: interactions.create() silently drops response_format when routed via litellm_proxy (Gemini)
- [#47822](https://github.com/BerriAI/litellm/issues/47822) [Bug]: httpx.Timeout connect timeout ignored for non-OpenAI providers (e.g. mistral): supports_httpx_timeout allowlist too narrow
- [#52824](https://github.com/BerriAI/litellm/issues/52824) [Bug]: Proxy logs a /v1/responses cache hit twice (two SpendLogs rows) on the Responses→chat bridge for prompts ≥ 256 KiB (v1.108.0)
- [#53263](https://github.com/BerriAI/litellm/issues/53263) [Bug]: New spend logs omit Request/Response payloads despite prompt storage being enabled on v1.110.2
- [#28561](https://github.com/BerriAI/litellm/issues/28561) [Bug]: Bedrock rerank broken after upgrading from v1.83.14 to v1.85 - Unable to map request to provider
- [#37074](https://github.com/BerriAI/litellm/issues/37074) [Feature]: Add native OpenAI and Azure OpenAI Skills provider routing
- [#50706](https://github.com/BerriAI/litellm/issues/50706) [Bug]: Gemini thought images are returned in message.images next to the final image
- [#52845](https://github.com/BerriAI/litellm/issues/52845) [Bug]: Policy template enrich/suggest endpoints default to gpt-4o-mini (OpenAI shutdown Jan 14, 2027)
- [#53159](https://github.com/BerriAI/litellm/issues/53159) [Bug]: Responses bridge drops parallel tool-call arguments when OpenAI sends them only in `function_call_arguments.done`
- [#50953](https://github.com/BerriAI/litellm/issues/50953) [Bug]: `anthropic_messages` (/v1/messages) silently drops the top-level `diagnostics` field
- [#37142](https://github.com/BerriAI/litellm/issues/37142) Add "openrouter/deepseek-v4-pro" and "openrouter/deepseek-v4-flash" in "model_prices_and_context_window.json"
- [#37282](https://github.com/BerriAI/litellm/issues/37282) [Bug]: Missing pricing for GPT 5.6 models on azure foundry
- [#53322](https://github.com/BerriAI/litellm/issues/53322) [Bug]: Bedrock Runtime native Chat Completions drops prompt_cache_breakpoint with drop_params enabled

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,924 · **Open issues:** 554 · **Last push:** <1h ago

On November 22, 2026, there were no new releases for Unsloth, but several significant pull requests were merged. Key enhancements included improvements in multi-GPU support, such as splitting video steps across cards (#18789), and advancements in diffusion training, with updates like Krea-2 now training on its valid caption rows instead of 512 padded versions (#18788). The Studio also saw optimizations, including the introduction of an opt-in GRPO rollout tail cut for colocated vLLM (#18803) and a refresh of tests for the diffusion family (#18815). Notably, a bug was reported with Inkling-2-Mini-GGUF failing to load on the latest Docker version (#18757), drawing attention to potential deployment issues.

#### ✅ Merged PRs
- [#18810](https://github.com/unslothai/unsloth/pull/18810) Studio diffusion: a non-CUDA device has no reusable CUDA cache
- [#18788](https://github.com/unslothai/unsloth/pull/18788) Studio diffusion training: Krea-2 trains on its valid caption rows instead of 512 padded ones
- [#18771](https://github.com/unslothai/unsloth/pull/18771) Studio: data-parallel DiT LoRA training across GPUs (num_gpus)
- [#18770](https://github.com/unslothai/unsloth/pull/18770) Studio diffusion training: Auto trains on a frozen fp8 base on sm89+ cards
- [#18804](https://github.com/unslothai/unsloth/pull/18804) Studio LTX-2.x: drop the all-ones text mask so text cross-attention runs without a bias
- [#18798](https://github.com/unslothai/unsloth/pull/18798) Studio MiniMax-H3-Image: the streamed int8 GEMM route also installs the fused SwiGLU
- [#18789](https://github.com/unslothai/unsloth/pull/18789) Studio multi-GPU: split single-call video steps across two cards by tokens
- [#18787](https://github.com/unslothai/unsloth/pull/18787) Studio sd.cpp: keep text-encoder flash attention on (per-module --flash-attn instead of --diffusion-fa)
- [#18783](https://github.com/unslothai/unsloth/pull/18783) Studio: split large MPS attention calls into query chunks for every family on Apple Silicon
- [#18778](https://github.com/unslothai/unsloth/pull/18778) Studio video: Wan2.2 A14B accepts 4-step distill LoRA pairs, plus Lightning presets for images
- [#18766](https://github.com/unslothai/unsloth/pull/18766) Studio diffusion: FLUX.1 ConvRot INT8 fuses GELU and the attention output into the rotation, and shares one Q/K/V quant
- [#18796](https://github.com/unslothai/unsloth/pull/18796) Take the download statistics wait off the model load path
- [#18809](https://github.com/unslothai/unsloth/pull/18809) Lift the TRL cap to 1.18.2
- [#18795](https://github.com/unslothai/unsloth/pull/18795) Full fine-tune save: cast each output shard as it is written
- [#18803](https://github.com/unslothai/unsloth/pull/18803) Opt-in GRPO rollout tail cut for colocated vLLM
- [#18784](https://github.com/unslothai/unsloth/pull/18784) Studio multi-GPU: a split render records no learned activation peak
- [#18764](https://github.com/unslothai/unsloth/pull/18764) Loader: pass speculative_config through to vLLM only
- [#18815](https://github.com/unslothai/unsloth/pull/18815) Studio tests: refresh the diffusion family freeze for FastWan and stop dunders spreading the decode-rewrap scan
- [#18794](https://github.com/unslothai/unsloth/pull/18794) GRPO video: keep one copy of each prompt's videos instead of one per generation
- [#18777](https://github.com/unslothai/unsloth/pull/18777) FSDP2: synchronize before the native FSDP2 empty_cache calls
- [#18801](https://github.com/unslothai/unsloth/pull/18801) Studio diffusion training: block swap headroom is a share of free VRAM, not of the whole card
- [#18797](https://github.com/unslothai/unsloth/pull/18797) Studio: key the int8 CUTLASS race cache on the race code, not the whole GEMM file
- [#18793](https://github.com/unslothai/unsloth/pull/18793) Studio diffusion: HiDream experts run only on their routed tokens
- [#18792](https://github.com/unslothai/unsloth/pull/18792) Studio diffusion: fold the VAE nearest 2x upsample and 3x3 conv into one transposed conv
- [#18790](https://github.com/unslothai/unsloth/pull/18790) Studio video: Auto keeps INT8 attention off for the two-expert Wan 2.2 A14B
- [#18786](https://github.com/unslothai/unsloth/pull/18786) Studio diffusion: INT8 attention folds the sink residual into the attention kernel
- [#18808](https://github.com/unslothai/unsloth/pull/18808) Studio: run Inkling 2 with -ub 1024 when every expert stays on the GPU
- [#18781](https://github.com/unslothai/unsloth/pull/18781) Studio images: run nvidia/Qwen-Image-Flash on its own 4-step schedule
- [#18780](https://github.com/unslothai/unsloth/pull/18780) Studio video: tiny Wan decoder for live previews and an opt-in draft decode
- [#18779](https://github.com/unslothai/unsloth/pull/18779) Studio video: load the dense FastWan students with a 3-step DMD sampler
- [#18767](https://github.com/unslothai/unsloth/pull/18767) Add UNSLOTH_SYNC_REPORT: host-device syncs per optimizer step by call site
- [#18800](https://github.com/unslothai/unsloth/pull/18800) Studio: use the VRAM a small card has left when Auto offloads Inkling 2 (DSpark draft counted once, budget-sized fit margin)
- [#18768](https://github.com/unslothai/unsloth/pull/18768) Token balance: UNSLOTH_TOKEN_BALANCE=labels evens out supervised tokens per optimizer step
- [#18785](https://github.com/unslothai/unsloth/pull/18785) Tests: hold the gloo PP ranks at a barrier before tearing down the process group
- [#18754](https://github.com/unslothai/unsloth/pull/18754) Studio: size and offload both Inkling 2 looped GGUF layouts
- [#18761](https://github.com/unslothai/unsloth/pull/18761) CI: hold the HF=latest legs below transformers 5.24 until unsloth-zoo is ported
- [#18760](https://github.com/unslothai/unsloth/pull/18760) Security audit: re-review the transformers 5.24.0 testing_utils.py site in the package scan baseline
- [#18752](https://github.com/unslothai/unsloth/pull/18752) Studio tests: forget the served-vision answer between the two servers in the view_image offer test
- [#18745](https://github.com/unslothai/unsloth/pull/18745) Pipeline parallel: keep the frozen-prefix skip off on later stages
- [#18751](https://github.com/unslothai/unsloth/pull/18751) Studio: wallpaper chat masks only the composer's own box
- [#18750](https://github.com/unslothai/unsloth/pull/18750) Studio: permission pill shows its icon only when collapsed
- [#18743](https://github.com/unslothai/unsloth/pull/18743) Tests: read llama.py as UTF-8 in the vocab-parallel gloo test
- [#18739](https://github.com/unslothai/unsloth/pull/18739) Studio tests: seed the dense fast-LoRA parity input and hold its input grad to one fp32 ulp
- [#18625](https://github.com/unslothai/unsloth/pull/18625) Native TP: opt-in vocab-parallel lm_head and cross entropy
- [#18735](https://github.com/unslothai/unsloth/pull/18735) Windows No Compiler CI: measure again when only the file watcher failed
- [#18724](https://github.com/unslothai/unsloth/pull/18724) Security audit: re-pin seven reviewed unsloth-zoo 2026.11.8 sites in the package scan baseline
- [#18675](https://github.com/unslothai/unsloth/pull/18675) GRPO num_iterations > 1: take old logps from the first loss pass, not a separate forward

#### 🐛 New Issues
- [#18757](https://github.com/unslothai/unsloth/issues/18757) [Bug] Inkling-2-Mini-GGUF fails to load on latest Unsloth Studio Docker Version. `feature request` `bug` 💬6
- [#18763](https://github.com/unslothai/unsloth/issues/18763) [Bug] New AMD NPU issue Lemonade/FastflowLM - Listing NPU models failed: Extra data: line 2025 column 1 (char 73430) `feature request` `bug` 💬3
- [#18805](https://github.com/unslothai/unsloth/issues/18805) [Bug] Windows Strix Halo: host-shortfall check still forces mmap after carve-out fix (#17605 follow-up) 💬2
- [#18799](https://github.com/unslothai/unsloth/issues/18799) [Feature] Explicit Model information for each chat, for model tracking and performance evaluation `feature request` 💬1
- [#18819](https://github.com/unslothai/unsloth/issues/18819) [Feature] Add Goal Mode `feature request`
- [#18755](https://github.com/unslothai/unsloth/issues/18755) [Bug] The copyable Prompt token data is now not copyable `feature request` `bug` 💬1
- [#18759](https://github.com/unslothai/unsloth/issues/18759) [Bug] [Studio 2026.11.9] Qwen-Image-Edit GGUF: every generation fails with device mismatch in _adaln_continuous_forward `feature request` `bug` 💬1
- [#18802](https://github.com/unslothai/unsloth/issues/18802) LFM2.5-24B-A2B exposes raw tool-call syntax in Unsloth Studio `feature request` `bug`
- [#18791](https://github.com/unslothai/unsloth/issues/18791) Finetune request: HERL values on the abliterated Qwen 3.8 Flash Next (NVFP4) pool model — budget €100, open to sharing our failed-attempt data
- [#18749](https://github.com/unslothai/unsloth/issues/18749) [Feature] ML Intern mode for training models locally (inspired by HF) `feature request`
- [#18732](https://github.com/unslothai/unsloth/issues/18732) [Bug] GET to /api/system/hardware creates cuda context on gpu 0 `feature request` `bug`
- [#18726](https://github.com/unslothai/unsloth/issues/18726) [Bug] Gemini 4 model call - "Penalty is not enabled for this model (INVALID_ARGUMENT)" `feature request` `bug`
- [#18723](https://github.com/unslothai/unsloth/issues/18723) [Feature] Unsloth Translate: Add Official Amharic and Popular African Continent Languages Support (Gemma 4 Supports it) `feature request`
- [#18722](https://github.com/unslothai/unsloth/issues/18722) Cannot load a fine-tuned Q5_K_M GGUF: "quantization type 36 ... this build does not have"

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,198 · **Open issues:** 427 · **Last push:** 5h ago

On November 22, 2026, AIBrix witnessed a productive day in development, highlighted by the merging of several key pull requests. Notable changes include the revision of routing guides for the Chinese gateway (#3539) and the introduction of a fix to ensure that blacklisted pods are not incorrectly prioritized (#3531). Additionally, enhancements were made to the gateway metrics alignment (#3500) and the export of real-time request drain rates (#3502). Among the new issues reported, the most pressing concern is a bug affecting the standalone Envoy configuration that misroutes health check requests (#3536), indicating potential disruptions in service stability. Overall, it was a routine day with significant attention to bug fixes and performance optimizations.

#### ✅ Merged PRs
- [#3539](https://github.com/vllm-project/aibrix/pull/3539) [Docs] Fix the percentage and inline code in the Chinese gateway routing guides
- [#3543](https://github.com/vllm-project/aibrix/pull/3543) [Bug] Filter blacklisted pods on the candidate stage scout (#3541)
- [#3500](https://github.com/vllm-project/aibrix/pull/3500) [Misc] Align gateway outstanding request labels with shared gateway metrics
- [#3502](https://github.com/vllm-project/aibrix/pull/3502) [Bug] Export realtime_running_requests_drain_rate_1m from the gateway plugin
- [#3531](https://github.com/vllm-project/aibrix/pull/3531) [Bug] Do not carry a pod blacklist verdict over to a recreated pod
- [#3528](https://github.com/vllm-project/aibrix/pull/3528) [Bug] Report the auto-selected config profile and request-id on the requestsInflight 429
- [#3532](https://github.com/vllm-project/aibrix/pull/3532) [Feat] Enable remote running reader by default (#3442)

#### 🐛 New Issues
- [#3536](https://github.com/vllm-project/aibrix/issues/3536) [bug] standalone envoy config: /healthz is matched by the /health prefix route, so it goes to vllm instead of returning envoy's {"status":"ok"} `kind/bug` `area/gateway` `bug` `triage` 💬8
- [#3545](https://github.com/vllm-project/aibrix/issues/3545) [Feat] Eliminate remaining O(N) pod-filtering and prefix-cache FindCandidates allocations on the candidate-stage path `area/gateway` `triage/accepted` `kind/feature` 💬3
- [#3544](https://github.com/vllm-project/aibrix/issues/3544) [Bug] RayClusterFleet drops replica-set update errors during rolling scale-down `kind/misc` `area/runtime` `area/orchestration` 💬3
- [#3541](https://github.com/vllm-project/aibrix/issues/3541) [Bug] Blacklisted pods with zero load dominate the candidate stage's ranked slots and trigger O(N) fallbacks `kind/bug` `area/gateway` `triage/accepted` `area/kv-cache` 💬3
- [#3535](https://github.com/vllm-project/aibrix/issues/3535) [bug] standalone docker compose: metadata-service crash-loops on start because its command is passed to the image's aibrix_metadata entrypoint `kind/bug` `area/installation` `bug` `triage` 💬3
- [#3538](https://github.com/vllm-project/aibrix/issues/3538) [Bug] Gateway caches HTTPRoute readiness from a previous generation `kind/bug` `area/gateway` 💬2
- [#3537](https://github.com/vllm-project/aibrix/issues/3537) [RFC]: Document opt-in P2P distribution with ModelWarmup samples `kind/feature` `area/website` `area/runtime` `area/orchestration` 💬2

#### 🔒 Closed Issues
- [#3541](https://github.com/vllm-project/aibrix/issues/3541) [Bug] Blacklisted pods with zero load dominate the candidate stage's ranked slots and trigger O(N) fallbacks
- [#3513](https://github.com/vllm-project/aibrix/issues/3513) [Bug] The requestsInflight 429 lacks x-aibrix-config-profile, so a config-profile: auto client can't tell which cap it hit

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,515 · **Open issues:** 678 · **Last push:** <1h ago

Today saw no new releases for Semantic Router, but several important developments emerged in merged pull requests. Notable updates include the feature to run the fla-npu chunk on Ascend 910B1 (#6245) and the exposure of the invalid_tool_call conversation signal (#6926). Additionally, documentation was enhanced with the localization of the Team shell and shared Community navigation (#6913), while a bug fix was implemented to ensure the listener deadline is honored on the second structured-output call (#7117). On the issue tracker, the most significant concern is a bug (#7222) where a change refused with `RESTART_REQUIRED` still goes live through the Router's file reload, indicating potential stability issues.

#### ✅ Merged PRs
- [#6245](https://github.com/vllm-project/semantic-router/pull/6245) [Feature] Model runtime: run the fla-npu chunk on Ascend 910B1 and consent vela3_d3 to it
- [#6926](https://github.com/vllm-project/semantic-router/pull/6926) [Feature] Expose the invalid_tool_call conversation signal
- [#6913](https://github.com/vllm-project/semantic-router/pull/6913) [Docs] Localize the Team shell and shared Community navigation
- [#7117](https://github.com/vllm-project/semantic-router/pull/7117) [Bug] Honor the listener deadline on the second structured-output call
- [#7221](https://github.com/vllm-project/semantic-router/pull/7221) [Community] Add drivebyer to Data Plane reviewer rotation

#### 🐛 New Issues
- [#7222](https://github.com/vllm-project/semantic-router/issues/7222) [Bug] A change refused with `RESTART_REQUIRED` still goes live through the Router's file reload `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬4
- [#7220](https://github.com/vllm-project/semantic-router/issues/7220) [Feature] Route image requests using opt-in quality and layout signals `enhancement` `accepted` `wg/mom-routing` 💬4
- [#7239](https://github.com/vllm-project/semantic-router/issues/7239) [Bug] Session memory drops the final assistant answer after a tool call `bug` `accepted` `in-progress` `wg/agentic-context` 💬3
- [#7253](https://github.com/vllm-project/semantic-router/issues/7253) [Bug] Recipe conformance fails on main: blank-message probes still expect systemone_rejected `bug` `accepted` `in-progress` `wg/evaluation-quality` 💬3
- [#7232](https://github.com/vllm-project/semantic-router/issues/7232) [Bug] Messages-to-Chat streams end with incomplete tool-call arguments `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#7252](https://github.com/vllm-project/semantic-router/issues/7252) [Bug] The second structured-output call ignores decision timeout overrides `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#7250](https://github.com/vllm-project/semantic-router/issues/7250) [Bug] A superseded config reload deletes file-backed Router Replay history `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬1
- [#7264](https://github.com/vllm-project/semantic-router/issues/7264) [Bug] vllm-sr serve fails on glibc < 2.32 (e.g. Ubuntu 20.04): os.chmod(follow_symlinks=False) is unsupported `bug` `needs-acceptance` `wg/developer-experience-ecosystem`

#### 🔒 Closed Issues
- [#6933](https://github.com/vllm-project/semantic-router/issues/6933) [Bug] Router Replay and protection do not follow the model that answered or how upstream failed
- [#6252](https://github.com/vllm-project/semantic-router/issues/6252) [Bug] Preserve non-retryable status policy when reading error bodies fails
- [#6301](https://github.com/vllm-project/semantic-router/issues/6301) [Bug] Playground returns 403 HTTP error for non-localhost origins despite DASHBOARD_ALLOWED_ORIGINS variable set
- [#6920](https://github.com/vllm-project/semantic-router/issues/6920) [Feature] Expose the invalid_tool_call conversation signal
- [#6825](https://github.com/vllm-project/semantic-router/issues/6825) [Bug] Looper Fusion quorum E2E still expects 500 after model status passthrough
- [#6538](https://github.com/vllm-project/semantic-router/issues/6538) [Bug] A keyed listener that serves Chat and SystemOne lists no SystemOne models
- [#6026](https://github.com/vllm-project/semantic-router/issues/6026) [Docs] Restore zh-Hans text in the Team page and shared Community navigation
- [#6787](https://github.com/vllm-project/semantic-router/issues/6787) [Bug] Golden-answer recorder reverts hardware-scoped CUDA references to a generic cuda baseline
- [#7119](https://github.com/vllm-project/semantic-router/issues/7119) [Bug] Builder can deploy a different config than the preview shows
- [#7184](https://github.com/vllm-project/semantic-router/issues/7184) [Bug] A streamed tool call the upstream cuts off mid-arguments fails the whole response
- [#6236](https://github.com/vllm-project/semantic-router/issues/6236) [Feature] Model runtime: run the fla-npu chunk on Ascend 910B1 and consent vela3_d3 to it
- [#7116](https://github.com/vllm-project/semantic-router/issues/7116) [Bug] The second structured-output call ignores the listener timeout in standalone mode
- [#7123](https://github.com/vllm-project/semantic-router/issues/7123) [Bug] Dashboard reports rollback success when the Router rejects the target

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*