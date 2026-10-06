# 📡 AI Ecosystem Digest — 2026-10-06

> Generated 2026-10-06 02:43 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 149,532 | 31 | 0 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 127,964 | 16 | 1 | 39 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,240 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,243 | 9 | 9 | 0 | 4 |
| [OpenCode](https://github.com/anomalyco/opencode) | 211,896 | 0 | 46 | 15 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,323 | 27 | 11 | 0 | 3 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 391,453 | 118 | 86 | 102 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 251,464 | 22 | 10 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,230 | 20 | 28 | 50 | 1 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,804 | 12 | 25 | 52 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 130,411 | 21 | 23 | 32 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 182,273 | 7 | 3 | 7 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 60,173 | 34 | 16 | 84 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 77,243 | 7 | 48 | 145 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,125 | 2 | 5 | 6 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,036 | 26 | 3 | 4 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.290](https://github.com/anthropics/claude-code/releases/tag/v2.1.290), addressing various bugs.
- **OpenAI Codex** introduced multiple releases, including [rust-v0.162.0-alpha.16](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.16), enhancing the platform's capabilities.
- **OpenClaw** launched version [v2026.10.1-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.10.1-beta.1), incorporating significant fixes and improvements.
- The **Qwen Code** repository reported a hot new issue regarding [memory agent management](https://github.com/QwenLM/qwen-code/issues/13458), garnering 5 comments about the hardcoded limit.
- In the **Hermes Agent** repository, a critical bug was raised regarding model selection after fallback use, with [6 comments](https://github.com/NousResearch/hermes-agent/issues/133554) discussing its implications.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 149,532 · **Open issues:** 14,317 · **Last push:** 3h ago

On October 6, 2026, Claude Code released version v2.1.290, which introduced several enhancements including the addition of `serverToolUses` to the `turn.step` hook results, allowing better tracking of tool API calls, and the inclusion of `agentId` to the `tool.check` event to differentiate between subagent and main session permissions. Notably, new issues have emerged, with a high-profile bug (#99817) reporting that session transcripts are being deleted silently after 30 days without user consent or notification, raising significant concerns about data handling practices. Other notable new issues include a Windows hang problem while running the desktop app (#99751) and a feature request to prefill the rename input with the current session name (#99827).

#### 🚀 New Releases
- [v2.1.290](https://github.com/anthropics/claude-code/releases/tag/v2.1.290) v2.1.290

#### 🐛 New Issues
- [#99837](https://github.com/anthropics/claude-code/issues/99837) [Bug] Anthropic API Error: 403 Access to this model requires an access grant `bug` `platform:linux` `area:auth` 💬3
- [#99751](https://github.com/anthropics/claude-code/issues/99751) [BUG][Windows/Desktop] Code hangs ~7.5 min then ECONNREFUSED; bundled claude.exe works standalone `bug` `platform:windows` `area:networking` `area:desktop` 💬1
- [#99585](https://github.com/anthropics/claude-code/issues/99585) [BUG] Idle auto-update stops all sessions and Remote Control never comes back after the relaunch `bug` `platform:macos` `area:desktop` 💬1
- [#99827](https://github.com/anthropics/claude-code/issues/99827) [FEATURE] Prefill the rename input with the current session name `enhancement` `area:tui` 💬1
- [#99817](https://github.com/anthropics/claude-code/issues/99817) [BUG] Claude Code silently deletes session transcripts after 30 days with no consent, warning, or UI `bug` `duplicate` `platform:macos` `area:core` 💬1
- [#99813](https://github.com/anthropics/claude-code/issues/99813) Auto mode classifier blocks explicitly user-requested merges/deploys; typed approvals in headless claude -p (Slack/remote) never count `bug` `platform:wsl` `area:permissions` 💬1
- [#99841](https://github.com/anthropics/claude-code/issues/99841) Claude Code blocks explicitly authorized hardware monitoring setup on my PC without explaining why `bug` `platform:windows` `area:model` `model`
- [#99839](https://github.com/anthropics/claude-code/issues/99839) [security-guidance] Commit-review findings replaced by "claude.ai connectors are disabled" warning in the rewake notice `bug` `platform:macos` `area:hooks` `area:plugins`
- [#99840](https://github.com/anthropics/claude-code/issues/99840) [security-guidance] Reviews that fail with API errors (e.g. HTTP 401) are reported as clean and marked reviewed `bug` `platform:macos` `area:security` `area:plugins`
- [#99838](https://github.com/anthropics/claude-code/issues/99838) [Bug] macOS Gatekeeper rejection + TCC permissions reset on every Claude Code update `bug` `has repro` `platform:macos` `area:packaging`
- [#99836](https://github.com/anthropics/claude-code/issues/99836) [FEATURE] Claude Code Group by folder is misleading because it groups by repo. Add option to actually group by folder. `enhancement` `area:ui`
- [#99835](https://github.com/anthropics/claude-code/issues/99835) [Bug] Voice mode truncates input text on large messages without recovery `bug` `platform:macos` `area:tui`
- [#99834](https://github.com/anthropics/claude-code/issues/99834) Desktop app: 'auto mode classifier' refuses supervised Claude-in-Chrome actions while the session is in bypassPermissions `bug` `platform:macos` `area:permissions` `area:desktop`
- [#99833](https://github.com/anthropics/claude-code/issues/99833) [BUG] v2.1.290: --resume on opus-5-5/sonnet-5-5 re-writes the whole history to the prompt cache every time (haiku unaffected) `bug` `has repro` `platform:linux` `area:cost`
- [#99832](https://github.com/anthropics/claude-code/issues/99832) [BUG] CLAUDE_CODE_EXTRA_BODY thinking field is merged into WebSearch/WebFetch requests and breaks them (still on 2.1.290; follow-up to #56984)
- [#99831](https://github.com/anthropics/claude-code/issues/99831) [FEATURE] Desktop/Claude Code: stdio MCP servers duplicated per session (~1 GB each) and can't be started mid-session `enhancement` `platform:macos` `area:mcp` `perf:memory`
- [#99830](https://github.com/anthropics/claude-code/issues/99830) [BUG] "Waiting for API response · check your network" during thinking is a 60 s stall in the thinking-summary step (showThinkingSummaries: true), no network problem `bug` `has repro` `platform:macos` `area:tui`
- [#99829](https://github.com/anthropics/claude-code/issues/99829) [Feature Request] Add cybersecurity lab bypass allowlist for educational contexts `enhancement` `platform:linux` `area:security`
- [#99828](https://github.com/anthropics/claude-code/issues/99828) [BUG] Windows: VS Code extension ignores project permissions.allow because workspace trust is keyed by drive-letter case (c: vs C:) `bug` `has repro` `platform:windows` `platform:vscode`
- [#99826](https://github.com/anthropics/claude-code/issues/99826) [GitHub integration] `bug` `area:claude-code-web` `platform:web` `needs-info`
- [#99825](https://github.com/anthropics/claude-code/issues/99825) [GitHub integration] `bug` `github-integration`
- [#99823](https://github.com/anthropics/claude-code/issues/99823) [GitHub integration] `bug` `area:claude-code-web` `platform:web` `github-integration`
- [#99824](https://github.com/anthropics/claude-code/issues/99824) Agent failure: fixed a different problem than the one asked and reported it done `bug` `platform:macos` `area:model`
- [#99822](https://github.com/anthropics/claude-code/issues/99822) Agent failure: buried the user in process noise instead of moving the goal `bug` `platform:macos` `area:model` `area:agents`
- [#99821](https://github.com/anthropics/claude-code/issues/99821) Agent failure: treated a report's timestamp as the event's time `bug` `platform:macos` `area:model`
- [#99820](https://github.com/anthropics/claude-code/issues/99820) [BUG] Cloud scheduled tasks em modo auto: o classificador de permissao bloqueia acoes autorizadas pelo dono, e nao existe turno humano para aprovar `duplicate` `area:cowork` `area:permissions` `area:routines`
- [#99819](https://github.com/anthropics/claude-code/issues/99819) [FEATURE] Desktop app (Code tab): jump from a quoted reply back to the quoted passage `enhancement` `platform:macos` `area:ui` `area:desktop`
- [#99795](https://github.com/anthropics/claude-code/issues/99795) Headless (-p) sessions launched via Windows Task Scheduler deny already-allowlisted tool calls (Bash/PowerShell/Write/Edit); identical manual invocation never fails `bug` `platform:windows` `area:cli` `area:permissions`
- [#99816](https://github.com/anthropics/claude-code/issues/99816) [BUG] VS Code ext >=2.1.269: session history empty for RTL (Hebrew/Arabic) usernames — `claude auth status --json` reverses the config path (rendered via Ink) and the extension follows it `bug` `has repro` `platform:windows` `area:ide`
- [#99818](https://github.com/anthropics/claude-code/issues/99818) [BUG] Desktop Code tab: plugin Select/Input labels are read twice by VoiceOver `bug` `has repro` `platform:macos` `area:a11y`
- [#99812](https://github.com/anthropics/claude-code/issues/99812) [GitHub integration] `invalid` `github-integration`

### OpenAI Codex (`openai/codex`)

**Stars:** 127,964 · **Open issues:** 20,793 · **Last push:** <1h ago

On October 6, 2026, OpenAI Codex released rust-v0.160.1, which includes a crucial bug fix that preserves `SYSTEMROOT`, `TEMP`, and `TMP` when launching remote stdio MCP servers, enhancing the integration of Unix hosts with Windows executors. Additionally, alpha versions 0.162.0-alpha.15 and 0.162.0-alpha.16 were also released. Significant merged pull requests include #51230, which stabilizes session lookup pagination, and #51221, which separates environment requests from runtime selections. Among the newly reported issues, #51219 stands out, as users have encountered repeated rejections by the automatic reviewer despite having granted explicit permissions, highlighting potential problems with the permissions handling system.

#### 🚀 New Releases
- [rust-v0.160.1](https://github.com/openai/codex/releases/tag/rust-v0.160.1) 0.160.1
- [rust-v0.162.0-alpha.16](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.16) 0.162.0-alpha.16
- [rust-v0.162.0-alpha.15](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.15) 0.162.0-alpha.15

#### ✅ Merged PRs
- [#51230](https://github.com/openai/codex/pull/51230) Make session lookup pagination stable and report listing failures
- [#51223](https://github.com/openai/codex/pull/51223) Remove legacy personality template metadata
- [#51221](https://github.com/openai/codex/pull/51221) Separate environment requests from runtime selections
- [#51220](https://github.com/openai/codex/pull/51220) Honor the OTLP metrics temporality preference
- [#51217](https://github.com/openai/codex/pull/51217) Preserve review targets and scope misalignment continuation metadata
- [#51215](https://github.com/openai/codex/pull/51215) Measure raw MCP tool catalog sizes in telemetry
- [#51211](https://github.com/openai/codex/pull/51211) Reject sandbox-writable bubblewrap executables from PATH
- [#51209](https://github.com/openai/codex/pull/51209) Add ranked tool discovery to JavaScript code mode
- [#51207](https://github.com/openai/codex/pull/51207) Gate CLI Daybreak controls and selection behind an opt-in feature
- [#51206](https://github.com/openai/codex/pull/51206) Record initialization analytics for resumed subagents
- [#51203](https://github.com/openai/codex/pull/51203) Make apply_patch preserve line endings unconditionally
- [#51202](https://github.com/openai/codex/pull/51202) Distinguish namespace removals in incremental tool updates
- [#51200](https://github.com/openai/codex/pull/51200) Upgrade Bazel to 9.2.0 and refresh the module lockfile
- [#51198](https://github.com/openai/codex/pull/51198) Allow concurrent release builds while serializing publication
- [#51194](https://github.com/openai/codex/pull/51194) Add browser extension request headers to config requirements
- [#51193](https://github.com/openai/codex/pull/51193) Test thread archiving before the first turn
- [#51192](https://github.com/openai/codex/pull/51192) Wait for SIGCONT when resuming the TUI
- [#51191](https://github.com/openai/codex/pull/51191) Clean up Unix app-server control-socket startup lock files
- [#51188](https://github.com/openai/codex/pull/51188) Record base instructions in incremental tool history
- [#51186](https://github.com/openai/codex/pull/51186) Prevent stable release pointers from moving backward
- [#51185](https://github.com/openai/codex/pull/51185) Retry transient gRPC code-mode session admission failures
- [#51184](https://github.com/openai/codex/pull/51184) Remove obsolete Guardian thread-context enables from tests
- [#51158](https://github.com/openai/codex/pull/51158) Sign the PowerShell installer in Windows releases
- [#51157](https://github.com/openai/codex/pull/51157) Enforce required environment skills before model inference
- [#51156](https://github.com/openai/codex/pull/51156) Send base instructions as Responses input messages
- [#51140](https://github.com/openai/codex/pull/51140) Isolate Guardian checkpoint recovery flags per review attempt
- [#51139](https://github.com/openai/codex/pull/51139) Force fresh Guardian sessions for parent-checkpoint recovery
- [#51137](https://github.com/openai/codex/pull/51137) Recover Guardian reviews from parent checkpoints
- [#51133](https://github.com/openai/codex/pull/51133) Allow Guardian Decisions to fall back to `OPENAI_API_KEY`
- [#51121](https://github.com/openai/codex/pull/51121) Backport Windows remote MCP environment preservation to 0.160
- [#51126](https://github.com/openai/codex/pull/51126) Add promise settlement streaming helpers to code mode
- [#51119](https://github.com/openai/codex/pull/51119) Clarify incremental tool namespace updates in Responses Lite
- [#51117](https://github.com/openai/codex/pull/51117) Install full context in compaction replacement history
- [#51070](https://github.com/openai/codex/pull/51070) Preserve trusted-tool context in Guardian Decisions requests
- [#51067](https://github.com/openai/codex/pull/51067) Use issuing-step context for Guardian MCP elicitation reviews
- [#51065](https://github.com/openai/codex/pull/51065) Scope Guardian V2 response timing to snapshot sampling
- [#51064](https://github.com/openai/codex/pull/51064) Ignore stale refresh responses in agents overview tests
- [#51063](https://github.com/openai/codex/pull/51063) Honor prior cancellation before starting Codex delegates
- [#51061](https://github.com/openai/codex/pull/51061) Gate Guardian continuation tests on classifier request capture

#### 🐛 New Issues
- [#51234](https://github.com/openai/codex/issues/51234) Desktop sidebar: show task execution location and Dot involvement with icons `enhancement` `app` `dots` 💬2
- [#51197](https://github.com/openai/codex/issues/51197) Cloud task label obscures local Mac execution host and browser/plugin availability `bug` `app` `computer-use` `browser` 💬2
- [#51229](https://github.com/openai/codex/issues/51229) Dots sees my macbook that I am working and communicating as offline `bug` `app` `dots` 💬1
- [#51219](https://github.com/openai/codex/issues/51219) Automatic reviewer rejected my explicit permissions repeatedly `bug` `windows-os` `sandbox` `app` 💬1
- [#51218](https://github.com/openai/codex/issues/51218) [Windows] Code Review unavailable: bundled-plugin copy fails and encryption fallback checks the wrong errno `bug` `code-review` `windows-os` `app` 💬1
- [#51216](https://github.com/openai/codex/issues/51216) [Linux Desktop] Local Projects disappear after restarting Codex `bug` `app` `session` 💬1
- [#51214](https://github.com/openai/codex/issues/51214) dots: Add a unified view of current tasks, waits and schedules `enhancement` `app` `dots` 💬1
- [#51213](https://github.com/openai/codex/issues/51213) Dot disappears from sidebar and cloud chat input becomes disabled while background tasks continue running `bug` `windows-os` `app` `connectivity` 💬1
- [#51212](https://github.com/openai/codex/issues/51212) Pairing isn't working; I log in with Google—there's no error—but it gets stuck in a loop during the authorization flow for pairing ChatGPT on Android with Windows. `bug` `windows-os` `auth` `app` 💬1
- [#51225](https://github.com/openai/codex/issues/51225) [App] Default model picker presets are outdated and still prioritize GPT-5.6 models `enhancement` `app`
- [#51233](https://github.com/openai/codex/issues/51233) Automatic memory extraction OOMs on image-heavy rollouts and retries indefinitely `bug` `CLI` `memory` `performance`
- [#51231](https://github.com/openai/codex/issues/51231) Windows: “debug” is clipped in the ChatGPT/Codex selector subtitle `bug` `windows-os` `app`
- [#51227](https://github.com/openai/codex/issues/51227) Browser scroll is hard to click effectively and scroll `bug` `app` `browser`
- [#51226](https://github.com/openai/codex/issues/51226) error in trying to get dot to work on my app and change the art style `bug` `dots`
- [#51224](https://github.com/openai/codex/issues/51224) Need Easy account switching to ChatGPT Desktop Codex. `enhancement` `auth` `app`
- [#51222](https://github.com/openai/codex/issues/51222) Microphone issues `bug` `windows-os` `app`

#### 🔒 Closed Issues
- [#45126](https://github.com/openai/codex/issues/45126) `codex resume <unique-session-name>` fails whenever session lookup spans multiple pages

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,240 · **Open issues:** 782 · **Last push:** <1h ago

On October 6, 2026, Gemini CLI released version v0.64.0-nightly.20261006.gfb972b2f8, which includes important updates outlined in the full changelog compared to the previous nightly release. There were no merged pull requests or new issues reported in the last 24 hours. Overall, the day was routine maintenance, but the release of the new nightly version remains a noteworthy development.

#### 🚀 New Releases
- [v0.64.0-nightly.20261006.gfb972b2f8](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20261006.gfb972b2f8) Release v0.64.0-nightly.20261006.gfb972b2f8

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,243 · **Open issues:** 2,171 · **Last push:** <1h ago

On October 6, 2026, GitHub Copilot CLI released version 1.0.93-1, which includes important fixes and improvements from previous versions. Notably, version 1.0.93-0 resolved issues with warm language servers ensuring they remain active across LSP requests when sandboxing is disabled, and it also introduced functionality to expand truncated compact shell commands. The new version 1.0.92 added useful commands under `copilot config` for managing settings and featured a Ctrl+E environment picker for switching between local and cloud runs. Among new issues flagged, #5061 highlights a problem in which Copilot CLI 1.0.92 rejects standard Entra API scopes for remote MCP servers, indicating a need for attention. This day reflects focused enhancements, but also underscores ongoing challenges in compatibility and user experience.

#### 🚀 New Releases
- [v1.0.93-1](https://github.com/github/copilot-cli/releases/tag/v1.0.93-1) 1.0.93-1
- [v1.0.93-0](https://github.com/github/copilot-cli/releases/tag/v1.0.93-0) 1.0.93-0
- [v1.0.92](https://github.com/github/copilot-cli/releases/tag/v1.0.92) 1.0.92
- [v1.0.92-5](https://github.com/github/copilot-cli/releases/tag/v1.0.92-5) 1.0.92-5

#### 🐛 New Issues
- [#5061](https://github.com/github/copilot-cli/issues/5061) Copilot CLI 1.0.92 rejects standard Entra api:// scopes for remote MCP servers `triage`
- [#5060](https://github.com/github/copilot-cli/issues/5060) Turn off "Rewind on double Esc" `triage`
- [#5059](https://github.com/github/copilot-cli/issues/5059) Expose agentId in subagentStart hook for secure parent-child policy correlation `triage`
- [#5058](https://github.com/github/copilot-cli/issues/5058) Datadog MCP (mcp.datadoghq.com) OAuth token exchange fails: invalid_grant `triage`
- [#5057](https://github.com/github/copilot-cli/issues/5057) Project-level canvas extension discovery regressed between 1.0.87-0 and 1.0.90-0 (target_session_extensions always 0) `triage`
- [#5056](https://github.com/github/copilot-cli/issues/5056) The new color theme introduced in October is a regression (accessibility/readability) to the one used in September `triage`
- [#5055](https://github.com/github/copilot-cli/issues/5055) Support dynamic workflows (/workflows view) in BYOK / air-gapped sessions `triage`
- [#5054](https://github.com/github/copilot-cli/issues/5054) Automatic compaction keeps timing out ("summarizer did not settle within 300s") `triage`
- [#5053](https://github.com/github/copilot-cli/issues/5053) Regression in 1.0.89: ACP sessions stop indexing conversation history and usage in session-store.db `triage`

#### 🔒 Closed Issues
- [#4505](https://github.com/github/copilot-cli/issues/4505) Resumed session retains stale connection item IDs after interrupted response
- [#4155](https://github.com/github/copilot-cli/issues/4155) Gemini models return 400 Bad Request in Copilot CLI
- [#4715](https://github.com/github/copilot-cli/issues/4715) Allow built-in Agent Plugin Marketplaces to be blocked
- [#4519](https://github.com/github/copilot-cli/issues/4519) 400 "Missing namespace for function_call" for deferred/tool-search tools (e.g. extensions_manage) on 1.0.80
- [#4169](https://github.com/github/copilot-cli/issues/4169) `copilot -p` does not emit OTEL telemetry even with server-managed settings overrides
- [#2853](https://github.com/github/copilot-cli/issues/2853) /agent <name> - Allow direct invocation of agents by name
- [#2195](https://github.com/github/copilot-cli/issues/2195) Config corruption: PowerShell variable syntax in URLs crashes CLI on launch
- [#4561](https://github.com/github/copilot-cli/issues/4561) ACP: session/cancel is answered with stopReason "end_turn" instead of "cancelled"
- [#2363](https://github.com/github/copilot-cli/issues/2363) /update rerunning the prompt given in interactive mode(-i flag)

### OpenCode (`anomalyco/opencode`)

**Stars:** 211,896 · **Open issues:** 6,229 · **Last push:** <1h ago

On October 6, 2026, there were no new releases for OpenCode; however, several significant changes were made in merged pull requests. The GitLab AI provider was updated to version 6.19.0, and legacy OpenAI OAuth methods were renamed to Codex for better clarity. Notable fixes included resolving reasoning variants for GitLab Duo models and a temporary halt on syncing with the /models API for ChatGPT sign-ins due to ongoing OpenAI bugs. Additionally, work was completed to improve the user interface, such as fixing side panel tab clipping and enhancing message clarity in desktop sessions. Overall, the day was characterized by important maintenance and refinements rather than any major new features or issues.

#### ✅ Merged PRs
- [#53352](https://github.com/anomalyco/opencode/pull/53352) chore(core): bump gitlab-ai-provider to 6.19.0
- [#53467](https://github.com/anomalyco/opencode/pull/53467) fix(core): rename legacy OpenAI OAuth methods to Codex
- [#51082](https://github.com/anomalyco/opencode/pull/51082) fix(core): resolve reasoning variants for GitLab Duo models
- [#53345](https://github.com/anomalyco/opencode/pull/53345) chore: bump gitlab-ai-provider to 6.19.0
- [#53466](https://github.com/anomalyco/opencode/pull/53466) fix(core): temporarily stop syncing w/ /models api for sign in w/ chatgpt due to openai bugs
- [#52876](https://github.com/anomalyco/opencode/pull/52876) fix(session-ui): space errors and grouped updates in timeline
- [#53451](https://github.com/anomalyco/opencode/pull/53451) fix(core): clarify legacy ChatGPT OAuth method labels
- [#53445](https://github.com/anomalyco/opencode/pull/53445) fix(app): commit a staged revert before switching the selection
- [#53338](https://github.com/anomalyco/opencode/pull/53338) feat(desktop): clarify queued and pending steer messages
- [#53444](https://github.com/anomalyco/opencode/pull/53444) chore(app): autofix readable spacing in GUI packages
- [#53432](https://github.com/anomalyco/opencode/pull/53432) feat(core): wire native Vercel AI Gateway provider
- [#53315](https://github.com/anomalyco/opencode/pull/53315) fix(app): fix side panel tab clipping and alignment
- [#53332](https://github.com/anomalyco/opencode/pull/53332) feat(desktop): clarify running work in session headers
- [#53287](https://github.com/anomalyco/opencode/pull/53287) fix(core): install AI SDK v6 providers by default
- [#53441](https://github.com/anomalyco/opencode/pull/53441) test(cli): speed up managed service tests

#### 🔒 Closed Issues
- [#39875](https://github.com/anomalyco/opencode/issues/39875) [FEATURE]: Revert silent removal of Go privacy wording and provider attribution, and add telemetry + retention to privacy policy
- [#39829](https://github.com/anomalyco/opencode/issues/39829) [FEATURE]: Support Responses API for deepseek-v4-flash on opencode-go
- [#40502](https://github.com/anomalyco/opencode/issues/40502) [Bug] Web interface does not auto-refresh conversations in real-time
- [#21737](https://github.com/anomalyco/opencode/issues/21737) Custom @ai-sdk/anthropic provider loads correctly but drops API key at runtime when using custom baseURL
- [#32273](https://github.com/anomalyco/opencode/issues/32273) [FEATURE]:Support DeepSeek Native Web Search via Anthropic-Compatible API
- [#37760](https://github.com/anomalyco/opencode/issues/37760) [FEATURE]: stats for sessions in the current directory
- [#38973](https://github.com/anomalyco/opencode/issues/38973) [FEATURE]: Search session contents from session pickers
- [#39991](https://github.com/anomalyco/opencode/issues/39991) [Desktop] Fatal renderer error: "Stale read from <Show>" when opening a project folder
- [#43591](https://github.com/anomalyco/opencode/issues/43591) Opencode v2 crashed while running agent
- [#40945](https://github.com/anomalyco/opencode/issues/40945) permission.edit patterns are matched against worktree-relative paths — absolute/~ patterns silently never match (fail-open for deny rules)
- [#40649](https://github.com/anomalyco/opencode/issues/40649) High CPU usage while waiting for limit reset
- [#35053](https://github.com/anomalyco/opencode/issues/35053) opentui: fatal: Failed to create TextBuffer
- [#40373](https://github.com/anomalyco/opencode/issues/40373) desktop: renderer crash loop on launch when restored tab references deleted session (TypeError: reading 'directory')
- [#40653](https://github.com/anomalyco/opencode/issues/40653) build模式下错误的更新了flutter
- [#40614](https://github.com/anomalyco/opencode/issues/40614) [FEATURE]: Implement V2 manual compaction
- [#53172](https://github.com/anomalyco/opencode/issues/53172) v2 skills: disable-model-invocation is ignored in model discovery
- [#40968](https://github.com/anomalyco/opencode/issues/40968) Permission dialog approve button pushed off-screen and unclickable when shell command content is too long
- [#35881](https://github.com/anomalyco/opencode/issues/35881) kotlin-ls auto-install silently fails — creates empty cache dir, never spawns, no error logged
- [#39291](https://github.com/anomalyco/opencode/issues/39291) compaction sends mutated thinking block -> permanent 400 retry loop
- [#40709](https://github.com/anomalyco/opencode/issues/40709) [FEATURE] Docs: list claude-codex-windows-notify in ecosystem plugins
- [#39688](https://github.com/anomalyco/opencode/issues/39688) [Feature Request] Entrada por microfono / reconocimiento de voz
- [#40970](https://github.com/anomalyco/opencode/issues/40970) Session name is sometimes missing from notifications (notify plugin)
- [#40949](https://github.com/anomalyco/opencode/issues/40949) High CPU Usage in WSL when using Web
- [#40939](https://github.com/anomalyco/opencode/issues/40939) [Bug] "reasoning part 2 not found" error with Claude Opus 5 extended thinking (Anthropic provider)
- [#40928](https://github.com/anomalyco/opencode/issues/40928) Why is Nemotron 3 Ultra the only model that keeps its 1M context on the free tier?
- [#40915](https://github.com/anomalyco/opencode/issues/40915) Upstream Error
- [#40793](https://github.com/anomalyco/opencode/issues/40793) Permission prompt buttons unreachable for very long shell commands
- [#40777](https://github.com/anomalyco/opencode/issues/40777) Opencode Zen Deepseek V4 Flash Free (new) reasoning_effort produces wrong behaviour
- [#40672](https://github.com/anomalyco/opencode/issues/40672) windows中终端页面没办法滚动察看历史页面
- [#40665](https://github.com/anomalyco/opencode/issues/40665) Hindi Word
- [#39724](https://github.com/anomalyco/opencode/issues/39724) Bug: Qwen ASR API 400 - 'voice' property is required when using voice-to-text
- [#40570](https://github.com/anomalyco/opencode/issues/40570) [FEATURE]: Inquiry regarding usage limits and top-up options for free models in OpenCode Zen
- [#40640](https://github.com/anomalyco/opencode/issues/40640) 上传附件报错
- [#40643](https://github.com/anomalyco/opencode/issues/40643) Antigravity Gemini 3.1 Pro executing files in plan mode
- [#40639](https://github.com/anomalyco/opencode/issues/40639) Windows: background dependency install failed - @opencode-ai/plugin@local not found
- [#40628](https://github.com/anomalyco/opencode/issues/40628) project match error
- [#33749](https://github.com/anomalyco/opencode/issues/33749) Subcommand `ls`/`list` silently triggers `npm install ls@latest` — phantom package pollutes plugin cache
- [#40616](https://github.com/anomalyco/opencode/issues/40616) opencode session list silently outputs empty result (exit 0) when run in a git repo with an origin remote
- [#40972](https://github.com/anomalyco/opencode/issues/40972) [Bug] EISDIR crash on state.json.lock: stale directory prevents prompt sending after process kill
- [#40948](https://github.com/anomalyco/opencode/issues/40948) [FEATURE] Mixture of Agents (MoA) as a first-class model/preset
- [#34790](https://github.com/anomalyco/opencode/issues/34790) [FEATURE]: "review" agent commands improvements
- [#40676](https://github.com/anomalyco/opencode/issues/40676) opencode‑cli v1.18.13 freezes after selecting LLM‑runtime inside VS‑Code when CC‑Switch runs for Claude‑Code
- [#40660](https://github.com/anomalyco/opencode/issues/40660) [Bug] TAB completion for TUI options doesn't work
- [#40632](https://github.com/anomalyco/opencode/issues/40632) deepseek-v4-flash is text-only in models.dev but DeepSeek's official API supports image input
- [#40631](https://github.com/anomalyco/opencode/issues/40631) File references from Read tool show prohibited (forbidden) icon — cannot click to open/download
- [#40626](https://github.com/anomalyco/opencode/issues/40626) opencode models --refresh overwrites custom providers in /models picker

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,323 · **Open issues:** 1,678 · **Last push:** <1h ago

On October 6, 2026, Qwen Code released version 0.25.0, which introduces local workspace-agent collaboration through a new generic Broker provider alongside several updates to the desktop version and TypeScript SDK, including a managed runtime attestation client for Java. Notably, the desktop version also includes fixes for session creation diagnostics. Despite no merged PRs in the last 24 hours, several new issues have emerged, with #13480 highlighting a broken WeChat integration in the latest release and #13458 addressing concerns with memory agent configurations that are not adhering to user-scoped settings.

#### 🚀 New Releases
- [v0.25.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.0) Release v0.25.0
- [sdk-typescript-v0.1.18](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.18) SDK TypeScript Release v0.1.18
- [desktop-v0.25.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.25.0) Qwen Code Desktop v0.25.0

#### 🐛 New Issues
- [#13458](https://github.com/QwenLM/qwen-code/issues/13458) memory.agentMaxTurns ignored by user-scoped memory dream (hardcoded maxTurns = 8) `priority/P2` `type/bug` `category/configuration` `scope/memory` 💬5
- [#13487](https://github.com/QwenLM/qwen-code/issues/13487) bug(hosted-harness): cancelled tool-profile turns can re-enter later model context `priority/P2` `type/bug` `category/cli` `scope/session-management` 💬4
- [#13480](https://github.com/QwenLM/qwen-code/issues/13480) WeChat integration broken in v0.25.0: "please upgrade WeChat interface version in OpenClaw" `priority/P1` `type/bug` `category/integration` 💬4
- [#13463](https://github.com/QwenLM/qwen-code/issues/13463) bug(agents): cancelled managed-Agent input can be replayed into a later Host run `priority/P2` `type/bug` `category/core` `scope/session-management` 💬4
- [#13447](https://github.com/QwenLM/qwen-code/issues/13447) 加载需要鉴权的插件仓库时卡住 `priority/P1` `type/bug` `category/core` `scope/git` 💬4
- [#13441](https://github.com/QwenLM/qwen-code/issues/13441) bug: POSIX Shell cancellation leaves TERM-ignoring descendants after leader exit `priority/P2` `status/waiting-for-feedback` `type/bug` `category/core` 💬4
- [#13432](https://github.com/QwenLM/qwen-code/issues/13432) compaction: the server-reported context ceiling is parsed then dropped, so reactive recovery sizes against the inferred window `priority/P2` `type/bug` `category/core` `scope/token-management` 💬4
- [#13490](https://github.com/QwenLM/qwen-code/issues/13490) per-agent budget keys for background memory agents: one shared memory.agentMaxTurns drives five agents whose defaults differ `priority/P3` `category/configuration` `scope/memory` `scope/settings` 💬3
- [#13485](https://github.com/QwenLM/qwen-code/issues/13485) Bounded JSONL header reads consume the complete next physical line `priority/P2` `type/bug` `category/performance` `scope/session-management` 💬3
- [#13483](https://github.com/QwenLM/qwen-code/issues/13483) Fuzzy edits ending in a newline can delete the following blank line `status/in-review` `priority/P2` `type/bug` `category/tools` 💬3
- [#13474](https://github.com/QwenLM/qwen-code/issues/13474) Web shell shows 1000.0k instead of 1.0M for token counts just under a million `priority/P3` `type/bug` `category/ui` `scope/rendering` 💬3
- [#13473](https://github.com/QwenLM/qwen-code/issues/13473) Agent and workflow token counts of a million or more show as 1000k `priority/P3` `type/bug` `category/ui` `scope/rendering` 💬3
- [#13465](https://github.com/QwenLM/qwen-code/issues/13465) Background memory agents surface the raw terminate-mode token as the error message ("Failed to process /dream: MAX_TURNS") `priority/P3` `type/bug` `category/core` `scope/memory` 💬3
- [#13459](https://github.com/QwenLM/qwen-code/issues/13459) follow-up(extensions): surface the reason when an extension update check fails `priority/P2` `category/core` `scope/git` `scope/extensions` 💬3
- [#13444](https://github.com/QwenLM/qwen-code/issues/13444) fix(core): side-query output budget follow-ups from #13244 round-3 verification `priority/P3` `type/bug` `category/core` `scope/token-management` 💬3
- [#13478](https://github.com/QwenLM/qwen-code/issues/13478) test(core,cli,acp): pin the cancellation-recovery invariants left unwitnessed by #13436 `priority/P3` `category/development` `scope/session-management` `scope/testing` 💬2
- [#13477](https://github.com/QwenLM/qwen-code/issues/13477) security: `memory.agentMaxTurns` / `agentTimeoutMinutes` are honored from Workspace scope, so a cloned repo can remove the turn and time caps on all five auto-approved memory agents `priority/P2` `type/bug` `category/security` `scope/memory` 💬2
- [#13471](https://github.com/QwenLM/qwen-code/issues/13471) Main CI failed: SDK Java on 69d5db2ff242 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13456](https://github.com/QwenLM/qwen-code/issues/13456) Main CI failed: Qwen Code CI on 466119afed33 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#13440](https://github.com/QwenLM/qwen-code/issues/13440) Main CI failed: SDK Java — HostedPublicWorkspaceIT.durableCloseStopsOriginalWorkersAndRetainsHistoryAndFiles(boolean)[2] `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#13433](https://github.com/QwenLM/qwen-code/issues/13433) Main CI failed: Qwen Code CI — src/email-channel.test.ts > … > denies spoofed display names, self, lists, automated mail, bounces and ambigu… `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13491](https://github.com/QwenLM/qwen-code/issues/13491) LSP advertises dynamic registration support but rejects client/registerCapability 💬1
- [#13479](https://github.com/QwenLM/qwen-code/issues/13479) Release Failed for v0.25.0-nightly.20261005.69d5db2ff2 on 2026-10-05 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#13464](https://github.com/QwenLM/qwen-code/issues/13464) Deferred review findings from PR #13352: feat(managed-agent): prove Shell process-group stops with a worker ledger (M5c) 💬1
- [#13457](https://github.com/QwenLM/qwen-code/issues/13457) Deferred review findings from PR #13402: fix(managed-agent): serve SSE subscribers from a Condition instead of pinning ca 💬1
- [#13446](https://github.com/QwenLM/qwen-code/issues/13446) Deferred review findings from PR #13348: test(managed-agent): pin untested contracts from the #12692 R2 review 💬1
- [#13443](https://github.com/QwenLM/qwen-code/issues/13443) Deferred review findings from PR #13341: test(core): close #12693 post-merge review test and hygiene gaps 💬1

#### 🔒 Closed Issues
- [#10004](https://github.com/QwenLM/qwen-code/issues/10004) 🎉 #10000 — What 10,000 issues and PRs say about Qwen Code
- [#13122](https://github.com/QwenLM/qwen-code/issues/13122) agent hosts: re-enrollment after a 401 leaves the stale host row with a still-valid credential
- [#13280](https://github.com/QwenLM/qwen-code/issues/13280) Memory discovery loads QWEN.md / AGENTS.md from the directory above the git root
- [#13197](https://github.com/QwenLM/qwen-code/issues/13197) Vim-mode clipboard paste is broken on Windows: silent failure, CRLF pollution, and wrong linewise detection
- [#13178](https://github.com/QwenLM/qwen-code/issues/13178) memory: index budget is duplicated between indexer.ts and prompt.ts, and the reader still cuts mid-line
- [#13389](https://github.com/QwenLM/qwen-code/issues/13389) /context detail lists more MCP tokens than the MCP tools row
- [#13066](https://github.com/QwenLM/qwen-code/issues/13066) Release Failed for v0.24.8-preview.0 on 2026-09-29
- [#13397](https://github.com/QwenLM/qwen-code/issues/13397) Main CI failed: Qwen Code CI — src/serve/hosted-workspace-tool-turn.test.ts > reports an answer that loses the race to the expiry as expired
- [#13284](https://github.com/QwenLM/qwen-code/issues/13284) Main CI failed: E2E Tests on 66a627989443
- [#13425](https://github.com/QwenLM/qwen-code/issues/13425) Main CI failed: E2E Tests — interactive/hooks-command.test.ts > … > should display hooks dialog when /hooks command is entered
- [#13433](https://github.com/QwenLM/qwen-code/issues/13433) Main CI failed: Qwen Code CI — src/email-channel.test.ts > … > denies spoofed display names, self, lists, automated mail, bounces and ambigu…

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

**Stars:** 391,453 · **Open issues:** 9,427 · **Last push:** <1h ago

On October 6, 2026, OpenClaw released version v2026.10.1-beta.1, which introduced significant improvements including preserved session usage across registry changes and improved handling of queued cancellations and transcript aliases. Noteworthy merged pull requests addressed various issues, such as resolving cloud worker dispatch failures and releasing lifecycle locks after admission cancellations. Performance enhancements in the gateway improved acknowledgment of chat sends, while several bug fixes tackled issues with session messages and export guards. A particularly hot new issue reported involves a beta update hanging at the verifying stage after a Gateway restart, highlighting potential recovery challenges.

#### 🚀 New Releases
- [v2026.10.1-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.10.1-beta.1) openclaw 2026.10.1-beta.1

#### ✅ Merged PRs
- [#165669](https://github.com/openclaw/openclaw/pull/165669) fix(gateway): cloud worker dispatch fails with incomplete built import closure when an external plugin ships hidden dist chunks
- [#165898](https://github.com/openclaw/openclaw/pull/165898) fix(sessions): release lifecycle locks after queued admission cancellation
- [#165908](https://github.com/openclaw/openclaw/pull/165908) refactor(scripts): deslop scripts
- [#165769](https://github.com/openclaw/openclaw/pull/165769) fix(anthropic): preserve process exit errors after stdin closes
- [#165782](https://github.com/openclaw/openclaw/pull/165782) perf(gateway): unblock interrupted restart database close
- [#165907](https://github.com/openclaw/openclaw/pull/165907) refactor(agents-gateway): deslop agents and gateway
- [#165819](https://github.com/openclaw/openclaw/pull/165819) perf(session-entry): move cold and child patches to the worker
- [#165870](https://github.com/openclaw/openclaw/pull/165870) fix: Gemini turn fails instead of retrying when the stream is cut mid-frame
- [#165854](https://github.com/openclaw/openclaw/pull/165854) fix: doctor updates recover archives without leaving gateways stopped
- [#165773](https://github.com/openclaw/openclaw/pull/165773) refactor(routing): remove redundant route-target guards
- [#165608](https://github.com/openclaw/openclaw/pull/165608) perf(gateway): acknowledge chat sends before skill preparation
- [#165896](https://github.com/openclaw/openclaw/pull/165896) perf(workboard): speed up sessions board revision reads
- [#165897](https://github.com/openclaw/openclaw/pull/165897) perf(chat): bound history pages and reuse recovery cursors
- [#165644](https://github.com/openclaw/openclaw/pull/165644) perf(auth): move auth saves to workers and publish incrementally
- [#165803](https://github.com/openclaw/openclaw/pull/165803) perf(gateway): keep deferred database opens off readiness
- [#165891](https://github.com/openclaw/openclaw/pull/165891) test(state): deduplicate admission test routing
- [#165833](https://github.com/openclaw/openclaw/pull/165833) refactor(runtime): deslop runtime
- [#165832](https://github.com/openclaw/openclaw/pull/165832) fix: show embedding-only setup when llama.cpp chat exceeds RAM
- [#165883](https://github.com/openclaw/openclaw/pull/165883) refactor(channels): deslop channels
- [#165816](https://github.com/openclaw/openclaw/pull/165816) perf(workers): attribute task and writer request costs
- [#165876](https://github.com/openclaw/openclaw/pull/165876) fix: show why channel messages fall back from steering
- [#165886](https://github.com/openclaw/openclaw/pull/165886) test(state): run agent admission in the host-owned pool
- [#165887](https://github.com/openclaw/openclaw/pull/165887) perf(session-share): keep remote refreshes off catalog RPCs
- [#165878](https://github.com/openclaw/openclaw/pull/165878) fix(ui): stabilize sidebar agent menu layout check
- [#165871](https://github.com/openclaw/openclaw/pull/165871) fix(gateway): release settled work that blocks suspension
- [#165316](https://github.com/openclaw/openclaw/pull/165316) fix(update): avoid inflated counts in shallow checkouts
- [#165419](https://github.com/openclaw/openclaw/pull/165419) fix(matrix): keep attachment filenames out of agent body text
- [#165764](https://github.com/openclaw/openclaw/pull/165764) refactor(channels): persist feedback through transcript workers
- [#165858](https://github.com/openclaw/openclaw/pull/165858) perf(git): keep session diffs responsive in large repositories
- [#165879](https://github.com/openclaw/openclaw/pull/165879) fix(sessions): avoid false indexing notices during search
- [#165877](https://github.com/openclaw/openclaw/pull/165877) fix: verify ClawHub after release finalization retries
- [#165793](https://github.com/openclaw/openclaw/pull/165793) refactor(sessions): move strict harness transcript appends into workers
- [#165021](https://github.com/openclaw/openclaw/pull/165021) fix(a2a): fail closed on unresolved peer token references
- [#165867](https://github.com/openclaw/openclaw/pull/165867) test: stabilize flaky fixtures (batch f221)
- [#163645](https://github.com/openclaw/openclaw/pull/163645) feat(worker): add native inference runtime
- [#165851](https://github.com/openclaw/openclaw/pull/165851) fix(ci): unblock full lint for incognito and Bedrock tests
- [#165853](https://github.com/openclaw/openclaw/pull/165853) test(core,plugins): remove low-value tests (batch d220)
- [#165614](https://github.com/openclaw/openclaw/pull/165614) perf(gateway): prepare chat metadata reads off the main thread with live visibility checks
- [#165842](https://github.com/openclaw/openclaw/pull/165842) fix(test): wait for WhatsApp inbound work
- [#165840](https://github.com/openclaw/openclaw/pull/165840) perf(placement): retain sandbox authority through worker reads
- [#165834](https://github.com/openclaw/openclaw/pull/165834) perf(sessions): reduce repeated list search allocations
- [#165750](https://github.com/openclaw/openclaw/pull/165750) perf(worktrees): avoid warm checkout admission spawns
- [#165472](https://github.com/openclaw/openclaw/pull/165472) fix(ios): Debug builds nearly overflow the main-thread stack in the chat composer
- [#165821](https://github.com/openclaw/openclaw/pull/165821) refactor(runtime): deslop agents and gateway
- [#165659](https://github.com/openclaw/openclaw/pull/165659) fix(gateway): avoid membership authority test timeouts
- [#165788](https://github.com/openclaw/openclaw/pull/165788) fix(auto-reply): wait for source operations before draining followups
- [#165785](https://github.com/openclaw/openclaw/pull/165785) refactor(sessions): move Goal management into the agent executor
- [#165831](https://github.com/openclaw/openclaw/pull/165831) fix(voice-call): restore supported config migrations
- [#165828](https://github.com/openclaw/openclaw/pull/165828) docs: explain forced automation runs bypass condition gates
- [#165795](https://github.com/openclaw/openclaw/pull/165795) fix(ci): repair cleanup reliability and X artwork
- [#165628](https://github.com/openclaw/openclaw/pull/165628) refactor(sessions): wire incognito creation and entry patches to the shared actor binding (P7h2, inactive)
- [#158902](https://github.com/openclaw/openclaw/pull/158902) feat(protocol): define worker-local inference contracts
- [#165755](https://github.com/openclaw/openclaw/pull/165755) fix(ci): improve fixture cleanup and acceptance diagnostics
- [#165799](https://github.com/openclaw/openclaw/pull/165799) refactor(boards): move session admission and presentation reads to workers
- [#165658](https://github.com/openclaw/openclaw/pull/165658) perf(auth): settle OAuth refresh through workers
- [#165762](https://github.com/openclaw/openclaw/pull/165762) fix: preserve images returned by deferred tool calls
- [#164756](https://github.com/openclaw/openclaw/pull/164756) fix(heartbeat): let a conversation's chained command completions skip the interval wait
- [#165796](https://github.com/openclaw/openclaw/pull/165796) refactor(session-upstream-links): move lifecycle writes to the shared-state worker
- [#165814](https://github.com/openclaw/openclaw/pull/165814) fix(cron): defer maintenance until agent startup admission
- [#163875](https://github.com/openclaw/openclaw/pull/163875) fix: connect installed MCP plugins from HTTPS dashboards
- [#165591](https://github.com/openclaw/openclaw/pull/165591) perf(workers): expose request queue wait and duration
- [#165377](https://github.com/openclaw/openclaw/pull/165377) perf(sessions): reuse revision-bound transcript projection status
- [#165813](https://github.com/openclaw/openclaw/pull/165813) test(agents,cron,plugins): remove low-value tests (batch d219)
- [#165718](https://github.com/openclaw/openclaw/pull/165718) refactor(channels): deslop channels
- [#165759](https://github.com/openclaw/openclaw/pull/165759) perf(gateway): retain artifact summaries across authorized requests
- [#161838](https://github.com/openclaw/openclaw/pull/161838) fix(bedrock): prompt cache misses when tool registration order changes
- [#164951](https://github.com/openclaw/openclaw/pull/164951) fix(voice-call): keep continue poll deadline on the monotonic clock
- [#165760](https://github.com/openclaw/openclaw/pull/165760) refactor(core): deslop error and normalization paths
- [#151037](https://github.com/openclaw/openclaw/pull/151037) fix(browser): recover after harmless Chrome extension cleanup fails
- [#164656](https://github.com/openclaw/openclaw/pull/164656) fix: prevent internal recovery errors after queued turns
- [#165601](https://github.com/openclaw/openclaw/pull/165601) refactor(runtime): deslop error handling and normalization
- [#165640](https://github.com/openclaw/openclaw/pull/165640) improve(ui): pin agents directly from the switcher
- [#165651](https://github.com/openclaw/openclaw/pull/165651) test(cli, media, gateway): remove low-value tests (batch d215)
- [#165775](https://github.com/openclaw/openclaw/pull/165775) fix(sessions): compare link-stable identity when publishing the session membership store
- [#165747](https://github.com/openclaw/openclaw/pull/165747) fix(update): refuse before mutating when the managed unit is masked and never roll back for a masked restart
- [#165018](https://github.com/openclaw/openclaw/pull/165018) fix(irc): bound pending inbound line length
- [#165757](https://github.com/openclaw/openclaw/pull/165757) docs(reference): attribute each schema-history row to the release that published it
- [#165205](https://github.com/openclaw/openclaw/pull/165205) perf(sessions): serve session observer authority reads from workers
- [#165743](https://github.com/openclaw/openclaw/pull/165743) test(core,plugins): remove low-value tests (batch d217)
- [#165681](https://github.com/openclaw/openclaw/pull/165681) refactor(session-signals): move adoption and cleanup into the worker
- [#165679](https://github.com/openclaw/openclaw/pull/165679) fix: keep debug overlay animation tests stable under load
- [#165676](https://github.com/openclaw/openclaw/pull/165676) chore(ui): refresh control ui locales
- [#165729](https://github.com/openclaw/openclaw/pull/165729) test: stabilize flaky fixtures (batch f216)
- [#164305](https://github.com/openclaw/openclaw/pull/164305) fix(slack): Socket Mode logs a warning for every ping from another undici copy
- [#164687](https://github.com/openclaw/openclaw/pull/164687) fix(media): keep declared text MIME for UTF-16 attachments with a BOM
- [#165150](https://github.com/openclaw/openclaw/pull/165150) perf(sessions): share list views and send runner row updates
- [#165696](https://github.com/openclaw/openclaw/pull/165696) refactor(commands): deslop commands
- [#165454](https://github.com/openclaw/openclaw/pull/165454) refactor(sessions): wire incognito domain facades and deferred lifetimes to the actor (P7i, inactive)
- [#165660](https://github.com/openclaw/openclaw/pull/165660) refactor(cli): deslop CLI
- [#165711](https://github.com/openclaw/openclaw/pull/165711) fix(ci): await fixture completion before assertions and cleanup
- [#165708](https://github.com/openclaw/openclaw/pull/165708) perf(models): reuse prepared catalog routing facts
- [#165707](https://github.com/openclaw/openclaw/pull/165707) refactor(extensions): deslop non-channel tools
- [#165698](https://github.com/openclaw/openclaw/pull/165698) perf(workboard): reuse authorized Sessions board snapshots
- [#165695](https://github.com/openclaw/openclaw/pull/165695) fix(release): preserve ClawHub package families
- [#165703](https://github.com/openclaw/openclaw/pull/165703) fix: show failed Crabbox doctor checks in readiness errors
- [#165028](https://github.com/openclaw/openclaw/pull/165028) perf(sessions): serve remaining per-turn session authority reads from workers
- [#165600](https://github.com/openclaw/openclaw/pull/165600) perf(gateway): prepare sharing and custody authority through session workers
- [#165609](https://github.com/openclaw/openclaw/pull/165609) fix: recognize root-help renderer in dead-code checks
- [#165697](https://github.com/openclaw/openclaw/pull/165697) fix: restore status Git probe fixture for full checkouts
- [#165693](https://github.com/openclaw/openclaw/pull/165693) fix: preserve safe Testbox admission diagnostics
- [#165084](https://github.com/openclaw/openclaw/pull/165084) docs(release): stop requiring local provider preflight
- [#165405](https://github.com/openclaw/openclaw/pull/165405) fix: preserve accents in named legacy text attachments

#### 🐛 New Issues
- [#165860](https://github.com/openclaw/openclaw/issues/165860) [Bug]: Beta update can remain running at verifying after Gateway restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` 💬6
- [#165685](https://github.com/openclaw/openclaw/issues/165685) [Feature]: machine-readable reason on a registry-settled yielded collector, and a diagnostic for continuable parked yielded rows `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬6
- [#165745](https://github.com/openclaw/openclaw/issues/165745) [Bug]: deferred tool_call serializes MCP image blocks into text instead of preserving model-visible images `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#165617](https://github.com/openclaw/openclaw/issues/165617) fs-safe no-replace root move fails with EINVAL on QNAP (ZFS-backed shares) while plain renameat2(RENAME_NOREPLACE) works `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬4
- [#165705](https://github.com/openclaw/openclaw/issues/165705) [Bug]: 2026.9.8 Doctor blocked: SQLite snapshot worker exits 0 without JSON, snapshot passes preflight `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬4
- [#165501](https://github.com/openclaw/openclaw/issues/165501) heartbeat (isolatedSession) sessions have message tool filtered out, breaking cron-driven delivery even though plugin declares describeMessageTool `P1` `clawsweeper:needs-info` `impact:message-loss` `issue-rating: 🦐 gold shrimp` 💬4
- [#165686](https://github.com/openclaw/openclaw/issues/165686) [Bug]: Gateway sustained high CPU / event-loop starvation on Windows after upgrade to 2026.9.8 (Codex catalog churn + slow prep) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬4
- [#165563](https://github.com/openclaw/openclaw/issues/165563) fix: main dead-code checks fail after runtime cleanup and worker benchmarks `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#165903](https://github.com/openclaw/openclaw/issues/165903) [Bug]: Manual heartbeat run transcript is unavailable in Automations viewer `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#165638](https://github.com/openclaw/openclaw/issues/165638) [Bug]: Cloud worker dispatch fails with "incomplete built import closure" when @openclaw/codex is installed (node bootstrap skips dist/.setup/ in external plugins) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#165893](https://github.com/openclaw/openclaw/issues/165893) [Bug]: Codex model requests fall back to Ollama when global Codex plugin is untrusted `P2` `impact:auth-provider` `clawsweeper:bulk-filed` 💬3
- [#165731](https://github.com/openclaw/openclaw/issues/165731) [Bug]: ACP Claude binding fails when thinking level is "adaptive" (forwarded verbatim as adapter effort) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#165657](https://github.com/openclaw/openclaw/issues/165657) fix: restore Swift lint for ShellExecutor task results `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#165590](https://github.com/openclaw/openclaw/issues/165590) [Bug]: Unused media defaults aliases fail the export guard `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#165606](https://github.com/openclaw/openclaw/issues/165606) [Performance]: doctor --fix on 2026.9.8 still spends minutes in repeated SQLite maintenance/content-version checks `P1` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬3
- [#165604](https://github.com/openclaw/openclaw/issues/165604) [Bug]: Hardcoded 1 GiB package-integrity limit blocks npm update to 2026.9.8 `P0` `impact:ux-release-blocker` 💬3
- [#165566](https://github.com/openclaw/openclaw/issues/165566) Source watcher CI fixture can observe a package reread as the next source event `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#165559](https://github.com/openclaw/openclaw/issues/165559) [Bug]: Native heap-profile test fails on small residual frame allocations `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬3
- [#165557](https://github.com/openclaw/openclaw/issues/165557) [Bug]: Codex cancellation cleanup fixtures reject valid thread unsubscription `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#165553](https://github.com/openclaw/openclaw/issues/165553) bug: Copilot cancellation check relies on private listener ordering `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#165551](https://github.com/openclaw/openclaw/issues/165551) Architecture check fails on deferred plugin migration imports `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#165527](https://github.com/openclaw/openclaw/issues/165527) perf(macos): use cron events instead of polling the open status menu `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#165663](https://github.com/openclaw/openclaw/issues/165663) Gateway-spawned workers (Codex app-server, MCP service groups) not cleaned up after session/diagnostic work → high CPU/RSS, SQLite lock contention, WhatsApp pending-delivery notices `P1` `clawsweeper:source-repro` `impact:crash-loop` `issue-rating: 🦞 diamond lobster` 💬2
- [#165869](https://github.com/openclaw/openclaw/issues/165869) Updater retention temporarily invalidates checkout plugin skills `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165872](https://github.com/openclaw/openclaw/issues/165872) Code-mode `exec` returns `value: null` after `status: completed` for shell commands `P2` 💬2
- [#165845](https://github.com/openclaw/openclaw/issues/165845) [Bug]: PowerShell completion fixture times out after runner startup in nightly CI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#165850](https://github.com/openclaw/openclaw/issues/165850) Doctor --fix stops on every pass: session SQLite import rejects legacy sessions.json entries with flat pendingFinalDelivery state (2026.10.1-beta.1) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#165846](https://github.com/openclaw/openclaw/issues/165846) [Bug]: 2026.10.1-beta.1 image makes core Control UI unreadable under arbitrary UID (HTTP 503) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#165827](https://github.com/openclaw/openclaw/issues/165827) [Bug]: Plan-completion follow-up omits requested preview from final CLI reply `P2` `clawsweeper:needs-live-repro` `impact:message-loss` `issue-rating: 🐚 platinum hermit` 💬2
- [#165847](https://github.com/openclaw/openclaw/issues/165847) [Bug]: Nightly prepack rejects the published beta missing from update compatibility inventory `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165822](https://github.com/openclaw/openclaw/issues/165822) [Bug]: Linux beta update fails runtime retention on built core file changed after inventory `P2` `clawsweeper:no-new-fix-pr` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#165807](https://github.com/openclaw/openclaw/issues/165807) [Bug]: Managed update environment overrides explicit CLI TMPDIR with service default `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165786](https://github.com/openclaw/openclaw/issues/165786) crabbox: second create in a session fails as "already stopped" when the provider repeats tool-call ids `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165706](https://github.com/openclaw/openclaw/issues/165706) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#165701](https://github.com/openclaw/openclaw/issues/165701) Update failure: gateway-recovery-verification (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#165789](https://github.com/openclaw/openclaw/issues/165789) 2026.9.2 → 2026.9.8 upgrade field report (macOS): egress-proxy certs fail strict TLS, doctor --fix infinite loop, NO_PROXY blocked, upgrade-path breakage `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬2
- [#165709](https://github.com/openclaw/openclaw/issues/165709) [Bug]: Control UI: parent session keeps an unread dot from hidden subagent runs that cannot be marked read `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#165746](https://github.com/openclaw/openclaw/issues/165746) ACP: /new and /reset in a bound conversation remove the binding, so follow-ups leave the ACP session `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165673](https://github.com/openclaw/openclaw/issues/165673) [Bug]: Masked systemd --user unit makes the managed updater's own service restart fail — verification failure / spurious rollback of a healthy activation (docs gap) `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165675](https://github.com/openclaw/openclaw/issues/165675) [Bug]: Database schema-history docs mark every row "Unreleased" — operators cannot determine which release publishes which schema version `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬2
- [#165748](https://github.com/openclaw/openclaw/issues/165748) exec mode "ask" fails open: commands run with no approval card; flaps to approval-request-failed after restart `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` `impact:security` 💬2
- [#165735](https://github.com/openclaw/openclaw/issues/165735) [Bug]: OpenRouter: omitting strict: false produces invalid browser arguments `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165730](https://github.com/openclaw/openclaw/issues/165730) [Bug]: ACP Claude binding silently unavailable when agent command is a wrapper (model prefix not normalised) `P2` `impact:message-loss` `impact:auth-provider` 💬2
- [#165683](https://github.com/openclaw/openclaw/issues/165683) [Bug]: Realtime Talk forced consult fails during checking acknowledgment with persisted user turn replay-admission error (2026.9.8) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165433](https://github.com/openclaw/openclaw/issues/165433) [Bug]: chat.send rejects reconnect envelopes with unexpected property '__controlUiReconnectResume' when client is not an Operator UI client `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬2
- [#165704](https://github.com/openclaw/openclaw/issues/165704) Update failure: target-metadata-preflight (2026.9.4) `P2` `impact:ux-friction` 💬2
- [#165702](https://github.com/openclaw/openclaw/issues/165702) sessions_search/sessions_history fail with `Unknown agent id "claude"` on free ACP harness sessions `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬2
- [#165652](https://github.com/openclaw/openclaw/issues/165652) Crabbox readiness errors omit failed doctor checks after long reports `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165690](https://github.com/openclaw/openclaw/issues/165690) Status Git-probe fixture fails after shallow-history probes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165650](https://github.com/openclaw/openclaw/issues/165650) Testbox admission discards GitHub API failure diagnostics `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165653](https://github.com/openclaw/openclaw/issues/165653) Paired Vitest inventory references a deleted Gateway scope test `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165595](https://github.com/openclaw/openclaw/issues/165595) [Feature]: Supported agent update path for root-owned Linux installs with exact version and admin handoff `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#165602](https://github.com/openclaw/openclaw/issues/165602) [Bug]: npm global install includes native binaries for all OS/architectures instead of current platform only `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#165560](https://github.com/openclaw/openclaw/issues/165560) [Bug]: macOS CodeQL build crashes in the sidebar agent-scope picker `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165522](https://github.com/openclaw/openclaw/issues/165522) [Bug]: chat.inject notes render as run activity (and identical notes merge) in Control UI until history reload `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165899](https://github.com/openclaw/openclaw/issues/165899) Feature: select an exact package release through update.run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165892](https://github.com/openclaw/openclaw/issues/165892) [Bug]: WebChat collapses \n\n in long assistant replies (non-directive boundary) — revival of #20410, follow-up to #146330 `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#165888](https://github.com/openclaw/openclaw/issues/165888) Live provider catalog failures lose safe diagnostic causes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#165884](https://github.com/openclaw/openclaw/issues/165884) [Bug]: 2026.9.8 gateway fails startup in sessions.projection with shared-state reader error `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#165881](https://github.com/openclaw/openclaw/issues/165881) Update failure: gateway-recovery-verification (2026.9.6) `P0` `impact:ux-release-blocker` 💬1
- [#165848](https://github.com/openclaw/openclaw/issues/165848) [Bug]: ClawHub postpublish fails after a release finalization retry `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#165875](https://github.com/openclaw/openclaw/issues/165875) Update failure: verifying (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#165874](https://github.com/openclaw/openclaw/issues/165874) [Bug]: Browser plugin's Playwright connection never releases tabs closed in Chrome (iframe-heavy pages stay "open"), leaking ~2.3 MB of Gateway heap per tab `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#165865](https://github.com/openclaw/openclaw/issues/165865) Systems: reduce finished-worker clutter and identify runs by task/start time `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#165868](https://github.com/openclaw/openclaw/issues/165868) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#165857](https://github.com/openclaw/openclaw/issues/165857) [Bug]: system-owned every-kind crons stuck at arbitrary nextRunAtMs sentinel not repaired by startup convergence or cron clients (9.7) `P2` `impact:other` 💬1
- [#165838](https://github.com/openclaw/openclaw/issues/165838) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#165835](https://github.com/openclaw/openclaw/issues/165835) [Bug]: App-bundled node-worker openclaw dist missing dist/plugins/** files present in npm install at same version (2026.9.8) — plugins fail during register in worker `P1` `impact:other` 💬1
- [#165815](https://github.com/openclaw/openclaw/issues/165815) Managed llama.cpp setup refuses on fresh low-RAM profiles without mentioning the embedding-only path `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#165817](https://github.com/openclaw/openclaw/issues/165817) Docs: say that forced `automations run` bypasses trigger.script (condition gate) `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#165826](https://github.com/openclaw/openclaw/issues/165826) Update failure: gateway-recovery-verification (2026.9.8) `clawsweeper:needs-info` `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#165823](https://github.com/openclaw/openclaw/issues/165823) [Bug]: Matrix ignores messages.inbound debounce (debounceMs / byChannel.matrix) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#165810](https://github.com/openclaw/openclaw/issues/165810) Feature: optional startup warm of memory managers so the first search after restart isn't slow `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165808](https://github.com/openclaw/openclaw/issues/165808) Native Codex subagent completion is silently dropped after the parent's Codex thread rotates `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#165812](https://github.com/openclaw/openclaw/issues/165812) [Bug]: Queued system events (sessions_send notify) are glued into the next user message as System: lines and wait for the human to type `P2` `impact:session-state` `impact:ux-friction` `clawsweeper:bulk-filed` 💬1
- [#165811](https://github.com/openclaw/openclaw/issues/165811) [Bug]: Cron job targeting a live conversation (sessionTarget session:<key>) is always wrapped as an unattended run; no opt-out `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165791](https://github.com/openclaw/openclaw/issues/165791) Doctor backup worker SIGILLs loading sqlite-vec on pre-AVX Intel Macs `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#165787](https://github.com/openclaw/openclaw/issues/165787) [Bug]: Ollama tool calls emitted as plain text, never execute (NO_REPLY), no gateway errors — 2026.9.8 `bug` `regression` `impact:auth-provider` `P0` 💬1
- [#165770](https://github.com/openclaw/openclaw/issues/165770) [Bug]: Session recovery retains source conflict for failed ACP attempt with no primary transcript found `bug` `bug:behavior` `P3` `impact:session-state` 💬1
- [#165763](https://github.com/openclaw/openclaw/issues/165763) [Bug]: Control UI paste > 1000 chars reaches the model as EXTERNAL_UNTRUSTED_CONTENT (paste origin dropped before render) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#165768](https://github.com/openclaw/openclaw/issues/165768) [Bug]: Completed native Codex tasks with stale requester lifecycle keep plugin upgrade unfinished `bug` `P2` `impact:session-state` 💬1
- [#165598](https://github.com/openclaw/openclaw/issues/165598) feat(tts-local-cli): let the local CLI speech provider declare and select voices `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#165752](https://github.com/openclaw/openclaw/issues/165752) [Bug]: Embedded Browser panel types characters slower than operator input `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#165751](https://github.com/openclaw/openclaw/issues/165751) [Feature]: Support interactive Google OAuth via a user-controlled browser from embedded Browser panel `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165739](https://github.com/openclaw/openclaw/issues/165739) Codex harness: re-tasking an idle native child fails with 403 "Codex cannot verify the owner of this model request" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#165732](https://github.com/openclaw/openclaw/issues/165732) [Bug]: Persistent ACP binding never recovers after adapter restart (resume "Resource not found", messages dropped silently) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165726](https://github.com/openclaw/openclaw/issues/165726) [Feature]: Support trusted-proxy authentication for Fleet-managed cells `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165646](https://github.com/openclaw/openclaw/issues/165646) Update failure: unexpected-error (2026.9.3) 💬1
- [#165723](https://github.com/openclaw/openclaw/issues/165723) Talk realtime consult ignores claude-cli agentRuntime and session model pin (fails with Anthropic 'No API key found') `P1` `impact:auth-provider` 💬1
- [#165722](https://github.com/openclaw/openclaw/issues/165722) [Bug] File write tool shown as enabled/live in UI but absent from fresh Codex session `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#165717](https://github.com/openclaw/openclaw/issues/165717) [Bug]: Windows 2026.9.8 plugin install and rollback time out after replacement applied, with multi-minute event-loop stalls `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬1
- [#165714](https://github.com/openclaw/openclaw/issues/165714) [Bug]: Control UI drops one assistant reply from view after claude-cli session resume; next reply stored twice `P1` `clawsweeper:needs-info` `impact:session-state` `impact:message-loss` 💬1
- [#165677](https://github.com/openclaw/openclaw/issues/165677) Plugin SDK: allow transcript delta readers to decline cold restoration `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165700](https://github.com/openclaw/openclaw/issues/165700) [Bug]: Gateway restart stalls ~5 min on 'Another Gateway owner lease is still active' when macOS os.hostname() drifts (dead owner not reclaimed) `impact:message-loss` `impact:crash-loop` `P0` `maturity:stable` 💬1
- [#165699](https://github.com/openclaw/openclaw/issues/165699) Update failure: runtime-verification-failed (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#165689](https://github.com/openclaw/openclaw/issues/165689) [Feature]: Optional spoken checking acknowledgment for forced realtime Talk consults `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165688](https://github.com/openclaw/openclaw/issues/165688) [Bug]: Windows first-run AI access test fails with "Plugin codex is retiring" then succeeds on retry `P2` `clawsweeper:needs-info` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#165682](https://github.com/openclaw/openclaw/issues/165682) [Feature]: Narrate agent-consult progress in GPT-Live realtime Talk (forward run progress as speakable context) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165643](https://github.com/openclaw/openclaw/issues/165643) test: debug overlay browser checks can miss short-lived animations `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#165674](https://github.com/openclaw/openclaw/issues/165674) [Feature]: Linux parity for `gateway stop --disable` persistent suppression (macOS-only today) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165665](https://github.com/openclaw/openclaw/issues/165665) [Bug]: an unfinished agents.delete crash-loops the Gateway on the next cold start; delete results under-report what was left on disk `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-info` 💬1
- [#165668](https://github.com/openclaw/openclaw/issues/165668) iOS: reminders.list should include EKReminder.notes in OpenClawReminderPayload `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#165655](https://github.com/openclaw/openclaw/issues/165655) [Feature]: Speak with Eleven v4 models `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `impact:auth-provider` 💬1
- [#165314](https://github.com/openclaw/openclaw/issues/165314) [Bug]: Shallow Git update status overcounts commits despite a visible merge base `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#165654](https://github.com/openclaw/openclaw/issues/165654) xAI vision requests fail 426 on cli-chat-proxy: missing x-grok-client-version header (min 1.0.13 enforced) 💬1
- [#165642](https://github.com/openclaw/openclaw/issues/165642) [Bug]: macOS MCP stdio servers launched as bare `python3` get /usr/bin/python3 and fail as silent "Connection closed" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165649](https://github.com/openclaw/openclaw/issues/165649) fix: allocate Testboxes from available shared capacity `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165636](https://github.com/openclaw/openclaw/issues/165636) [Bug]: Matrix E2EE: received room keys are lost on hard kill within the 60 s crypto-snapshot window (reproduced on main, follow-up to #76611) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:data-loss` 💬1
- [#165633](https://github.com/openclaw/openclaw/issues/165633) Announce queue re-delivers errored/empty child results indefinitely; mid-turn re-delivery crashes parent reply turn `P2` `impact:session-state` 💬1
- [#165627](https://github.com/openclaw/openclaw/issues/165627) [Bug]: WhatsApp: Meta AI-bound messages are indistinguishable from self-chat at the plugin hook layer `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#165624](https://github.com/openclaw/openclaw/issues/165624) [Bug]: msteams inbound attachments fail with ~9s fetchWithSsrFGuard timeout; no configurable override `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165615](https://github.com/openclaw/openclaw/issues/165615) Discord message edit cannot update Components V2 cards: editMessage requires content and drops components, Discord rejects content on IS_COMPONENTS_V2 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#165584](https://github.com/openclaw/openclaw/issues/165584) fix: dead-code scan flags the active root-help renderer `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#165603](https://github.com/openclaw/openclaw/issues/165603) [Bug]: Hardcoded 1 GiB package-integrity limit blocks npm update to 2026.9.8 `P0` `impact:ux-release-blocker` 💬1
- [#165599](https://github.com/openclaw/openclaw/issues/165599) OpenAI chat completions: response lost after sessions_spawn - session stuck until gateway restart (2026.9.8) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#165592](https://github.com/openclaw/openclaw/issues/165592) Update failure: gateway-recovery-verification (2026.9.6) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#165594](https://github.com/openclaw/openclaw/issues/165594) Update failure: managed-service-preflight (2026.9.8) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#165588](https://github.com/openclaw/openclaw/issues/165588) Inbound context prefix survives the stripper and is stored a second time (claude-cli import) `P2` `impact:session-state` 💬1

#### 🔒 Closed Issues
- [#158095](https://github.com/openclaw/openclaw/issues/158095) [Bug]: A gateway worker keeps state-lifecycle after acquireSqliteWorkerLifecycle; every later acquire fails until restart
- [#158239](https://github.com/openclaw/openclaw/issues/158239) [Bug]: Gateway fails to start with "Session membership store changed before publication" under JS fs-safe fallback on slower hosts (kernel < 5.6)
- [#146004](https://github.com/openclaw/openclaw/issues/146004) [Bug] Subagent completion triggers unwanted channel-less dashboard heartbeat turn on 2026.9.3
- [#164459](https://github.com/openclaw/openclaw/issues/164459) Update failure: update-executor-settlement (2026.9.7)
- [#161734](https://github.com/openclaw/openclaw/issues/161734) [Bug]: Doctor archive migration repeats expensive admission checks in two transactions per unchanged archive
- [#114146](https://github.com/openclaw/openclaw/issues/114146) [Feature]: Add talk.realtime.providers.<id>.baseUrl for OpenAI Realtime-compatible providers
- [#160669](https://github.com/openclaw/openclaw/issues/160669) MiniMax M3.1-Flash: OpenAI-compatible route produces stream garbage and dropped messages; anthropic-messages route is clean
- [#148681](https://github.com/openclaw/openclaw/issues/148681) Update failure: finalize:doctor (2026.9.4)
- [#164528](https://github.com/openclaw/openclaw/issues/164528) [Bug]: openclaw update aborts during candidate validation/package-swap due to strict permission check on stale recovery directories
- [#147160](https://github.com/openclaw/openclaw/issues/147160) Update failure: finalize:doctor (2026.9.4)
- [#148755](https://github.com/openclaw/openclaw/issues/148755) [Bug]: 90s transient-retry window is consumed by the retried attempt, so tool-using turns get one retry and then surface "temporarily overloaded" with no fallback
- [#148847](https://github.com/openclaw/openclaw/issues/148847) [Bug]: iOS 27.0 app frequently freezes when returning from background
- [#149050](https://github.com/openclaw/openclaw/issues/149050) [Bug]: condition-trigger scripts have no MCP runtime — "MCP is not defined" before any tool call
- [#148545](https://github.com/openclaw/openclaw/issues/148545) Update failure: runtime-verification-failed (2026.9.3)Saved sanitized report: C:\Users\meand\.openclaw\update-reports\df05315326a5b97048865a31acde99d0273159e4a1e7a4555bab0145dd10f103.06df8ff682fd2190d6c59a2d3e5643855f5a12d188e1cd9d202fc106711583dd.md
- [#165745](https://github.com/openclaw/openclaw/issues/165745) [Bug]: deferred tool_call serializes MCP image blocks into text instead of preserving model-visible images
- [#164214](https://github.com/openclaw/openclaw/issues/164214) [Bug]: Package publication recovery permanently stuck in `publishing` after an external write to the live package (macOS, 2026.9.8)
- [#147040](https://github.com/openclaw/openclaw/issues/147040) [Bug]: "malformed JSON arguments" still reproduces on v2026.9.4 after #141323/#142176 fixes
- [#132888](https://github.com/openclaw/openclaw/issues/132888) Exec approval from a non-native approval channel is auto-cancelled (run-aborted) when the turn ends, so `/approve` can never succeed
- [#165705](https://github.com/openclaw/openclaw/issues/165705) [Bug]: 2026.9.8 Doctor blocked: SQLite snapshot worker exits 0 without JSON, snapshot passes preflight
- [#121597](https://github.com/openclaw/openclaw/issues/121597) [Bug]: Reasoning is not working with Self Hosted DeepSeekV4Flash DSpark
- [#148267](https://github.com/openclaw/openclaw/issues/148267) Update failure: plugin-target-unavailable (2026.9.4)
- [#144516](https://github.com/openclaw/openclaw/issues/144516) [Bug]: Custom-provider onboarding cannot define thinking levels
- [#165563](https://github.com/openclaw/openclaw/issues/165563) fix: main dead-code checks fail after runtime cleanup and worker benchmarks
- [#165638](https://github.com/openclaw/openclaw/issues/165638) [Bug]: Cloud worker dispatch fails with "incomplete built import closure" when @openclaw/codex is installed (node bootstrap skips dist/.setup/ in external plugins)
- [#165893](https://github.com/openclaw/openclaw/issues/165893) [Bug]: Codex model requests fall back to Ollama when global Codex plugin is untrusted
- [#147919](https://github.com/openclaw/openclaw/issues/147919) Update failure: plugin-target-unavailable (2026.9.3)
- [#165657](https://github.com/openclaw/openclaw/issues/165657) fix: restore Swift lint for ShellExecutor task results
- [#165590](https://github.com/openclaw/openclaw/issues/165590) [Bug]: Unused media defaults aliases fail the export guard
- [#147511](https://github.com/openclaw/openclaw/issues/147511) [Bug]: Control UI own messages flash left (peer) then snap right on refresh
- [#165606](https://github.com/openclaw/openclaw/issues/165606) [Performance]: doctor --fix on 2026.9.8 still spends minutes in repeated SQLite maintenance/content-version checks
- [#165604](https://github.com/openclaw/openclaw/issues/165604) [Bug]: Hardcoded 1 GiB package-integrity limit blocks npm update to 2026.9.8
- [#165566](https://github.com/openclaw/openclaw/issues/165566) Source watcher CI fixture can observe a package reread as the next source event
- [#165559](https://github.com/openclaw/openclaw/issues/165559) [Bug]: Native heap-profile test fails on small residual frame allocations
- [#149122](https://github.com/openclaw/openclaw/issues/149122) Update failure: unexpected-error (2026.9.4)
- [#165557](https://github.com/openclaw/openclaw/issues/165557) [Bug]: Codex cancellation cleanup fixtures reject valid thread unsubscription
- [#165553](https://github.com/openclaw/openclaw/issues/165553) bug: Copilot cancellation check relies on private listener ordering
- [#165551](https://github.com/openclaw/openclaw/issues/165551) Architecture check fails on deferred plugin migration imports
- [#145079](https://github.com/openclaw/openclaw/issues/145079) [Bug]: Gemini and Vertex AI turns fail with "Google SSE stream ended with an incomplete frame" instead of retrying when the stream is cut mid-event
- [#165872](https://github.com/openclaw/openclaw/issues/165872) Code-mode `exec` returns `value: null` after `status: completed` for shell commands
- [#165706](https://github.com/openclaw/openclaw/issues/165706) Update failure: global-install-failed (2026.9.4)
- [#165701](https://github.com/openclaw/openclaw/issues/165701) Update failure: gateway-recovery-verification (2026.9.7)
- [#158956](https://github.com/openclaw/openclaw/issues/158956) Update failure: reconcile:abandoned (2026.9.5)
- [#165673](https://github.com/openclaw/openclaw/issues/165673) [Bug]: Masked systemd --user unit makes the managed updater's own service restart fail — verification failure / spurious rollback of a healthy activation (docs gap)
- [#127562](https://github.com/openclaw/openclaw/issues/127562) Bedrock tool discovery order destabilizes cache-eligible request identity
- [#165675](https://github.com/openclaw/openclaw/issues/165675) [Bug]: Database schema-history docs mark every row "Unreleased" — operators cannot determine which release publishes which schema version
- [#165730](https://github.com/openclaw/openclaw/issues/165730) [Bug]: ACP Claude binding silently unavailable when agent command is a wrapper (model prefix not normalised)
- [#164266](https://github.com/openclaw/openclaw/issues/164266) Slack socket-mode logs a WARN per ping frame from foreign undici instances (19% of gateway log lines)
- [#148346](https://github.com/openclaw/openclaw/issues/148346) Update failure: plugin-target-unavailable (2026.9.3)
- [#165704](https://github.com/openclaw/openclaw/issues/165704) Update failure: target-metadata-preflight (2026.9.4)
- [#165652](https://github.com/openclaw/openclaw/issues/165652) Crabbox readiness errors omit failed doctor checks after long reports
- [#165690](https://github.com/openclaw/openclaw/issues/165690) Status Git-probe fixture fails after shallow-history probes
- [#165650](https://github.com/openclaw/openclaw/issues/165650) Testbox admission discards GitHub API failure diagnostics
- [#165653](https://github.com/openclaw/openclaw/issues/165653) Paired Vitest inventory references a deleted Gateway scope test
- [#147161](https://github.com/openclaw/openclaw/issues/147161) [Bug]: Sidebar parent row shows "execution failed" from a two-day-old child session with no age or origin cue
- [#91563](https://github.com/openclaw/openclaw/issues/91563) Dreaming deep phase: minUniqueQueries gate bypassed by day-diversity counting
- [#165560](https://github.com/openclaw/openclaw/issues/165560) [Bug]: macOS CodeQL build crashes in the sidebar agent-scope picker
- [#165522](https://github.com/openclaw/openclaw/issues/165522) [Bug]: chat.inject notes render as run activity (and identical notes merge) in Control UI until history reload
- [#146030](https://github.com/openclaw/openclaw/issues/146030) [Bug]: macOS app open/quit timeout with eight cooperative threads blocked in AppleEventPermissionProbe
- [#146724](https://github.com/openclaw/openclaw/issues/146724) [Bug]: context overflow at 20-26 messages on openai/gpt-5.6-sol — compaction runs, then overflows again (source=promptError)
- [#146399](https://github.com/openclaw/openclaw/issues/146399) Update failure: managed-service-preflight (2026.9.3)
- [#165881](https://github.com/openclaw/openclaw/issues/165881) Update failure: gateway-recovery-verification (2026.9.6)
- [#165848](https://github.com/openclaw/openclaw/issues/165848) [Bug]: ClawHub postpublish fails after a release finalization retry
- [#148829](https://github.com/openclaw/openclaw/issues/148829) [Bug]: Explicit auth order still round-robins healthy accounts after compaction
- [#165857](https://github.com/openclaw/openclaw/issues/165857) [Bug]: system-owned every-kind crons stuck at arbitrary nextRunAtMs sentinel not repaired by startup convergence or cron clients (9.7)
- [#165835](https://github.com/openclaw/openclaw/issues/165835) [Bug]: App-bundled node-worker openclaw dist missing dist/plugins/** files present in npm install at same version (2026.9.8) — plugins fail during register in worker
- [#165815](https://github.com/openclaw/openclaw/issues/165815) Managed llama.cpp setup refuses on fresh low-RAM profiles without mentioning the embedding-only path
- [#165817](https://github.com/openclaw/openclaw/issues/165817) Docs: say that forced `automations run` bypasses trigger.script (condition gate)
- [#148723](https://github.com/openclaw/openclaw/issues/148723) [Bug]: Home session repeatedly appears under Claude Code while runtime reports OpenAI Codex
- [#165812](https://github.com/openclaw/openclaw/issues/165812) [Bug]: Queued system events (sessions_send notify) are glued into the next user message as System: lines and wait for the human to type
- [#165770](https://github.com/openclaw/openclaw/issues/165770) [Bug]: Session recovery retains source conflict for failed ACP attempt with no primary transcript found
- [#165768](https://github.com/openclaw/openclaw/issues/165768) [Bug]: Completed native Codex tasks with stale requester lifecycle keep plugin upgrade unfinished
- [#163858](https://github.com/openclaw/openclaw/issues/163858) MCP plugin sign-in fails on operator-managed HTTPS gateways
- [#165646](https://github.com/openclaw/openclaw/issues/165646) Update failure: unexpected-error (2026.9.3)
- [#165723](https://github.com/openclaw/openclaw/issues/165723) Talk realtime consult ignores claude-cli agentRuntime and session model pin (fails with Anthropic 'No API key found')
- [#165722](https://github.com/openclaw/openclaw/issues/165722) [Bug] File write tool shown as enabled/live in UI but absent from fresh Codex session
- [#165700](https://github.com/openclaw/openclaw/issues/165700) [Bug]: Gateway restart stalls ~5 min on 'Another Gateway owner lease is still active' when macOS os.hostname() drifts (dead owner not reclaimed)
- [#165699](https://github.com/openclaw/openclaw/issues/165699) Update failure: runtime-verification-failed (2026.9.4)
- [#165643](https://github.com/openclaw/openclaw/issues/165643) test: debug overlay browser checks can miss short-lived animations
- [#165314](https://github.com/openclaw/openclaw/issues/165314) [Bug]: Shallow Git update status overcounts commits despite a visible merge base
- [#165654](https://github.com/openclaw/openclaw/issues/165654) xAI vision requests fail 426 on cli-chat-proxy: missing x-grok-client-version header (min 1.0.13 enforced)
- [#165633](https://github.com/openclaw/openclaw/issues/165633) Announce queue re-delivers errored/empty child results indefinitely; mid-turn re-delivery crashes parent reply turn
- [#163401](https://github.com/openclaw/openclaw/issues/163401) [Feature]: Gateway ClawHub catalog parity for plugins and skills, including bulk keyword search
- [#165584](https://github.com/openclaw/openclaw/issues/165584) fix: dead-code scan flags the active root-help renderer
- [#165603](https://github.com/openclaw/openclaw/issues/165603) [Bug]: Hardcoded 1 GiB package-integrity limit blocks npm update to 2026.9.8
- [#165592](https://github.com/openclaw/openclaw/issues/165592) Update failure: gateway-recovery-verification (2026.9.6)
- [#165588](https://github.com/openclaw/openclaw/issues/165588) Inbound context prefix survives the stripper and is stored a second time (claude-cli import)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 251,464 · **Open issues:** 48,070 · **Last push:** <1h ago

On October 6, 2026, there were no new releases or merged pull requests for Hermes Agent. The issue tracker saw a flurry of new bug reports, including significant ones like #133554, which prevents users from selecting an OpenAI model after a Copilot fallback, and #133620, which describes erratic sidebar behavior when switching profiles. Other notable bugs included #133568 concerning desktop composer losing trailing spaces after slash commands and #133628, which details a severe backend connection issue that degrades Windows host performance. Additionally, there was a new feature request in #133601 to expose local Desktop/CLI sessions through `hermes mcp serve` for read-only supervision, highlighting ongoing enhancements amidst these reported issues.

#### 🐛 New Issues
- [#133554](https://github.com/NousResearch/hermes-agent/issues/133554) [Bug]: Cannot select an OpenAI model after Copilot fallback has been used `type/bug` `comp/cli` `provider/openai` `provider/copilot` 💬6
- [#133620](https://github.com/NousResearch/hermes-agent/issues/133620) [Bug] [Human-Written]: When switching profiles, sidebar state gets wonky `type/bug` `P3` `sweeper:risk-session-state` `comp/desktop` 💬2
- [#133568](https://github.com/NousResearch/hermes-agent/issues/133568) [Bug]: Desktop composer drops the trailing space after a slash command committed before a line break `type/bug` `P3` `comp/desktop` 💬1
- [#133523](https://github.com/NousResearch/hermes-agent/issues/133523) Stale HERMES_HOME/desktop-build-stamp.json from an older version is never refreshed and reads as 'build outdated' `type/bug` `comp/cli` `P3` `sweeper:risk-compatibility` 💬1
- [#133608](https://github.com/NousResearch/hermes-agent/issues/133608) [Bug]: Desktop composer-images is never cleaned up — survives session delete, all sweeps, and most uninstalls `type/bug` `tool/vision` `P2` `sweeper:risk-session-state` 💬1
- [#133582](https://github.com/NousResearch/hermes-agent/issues/133582) Cron external worker sessions never register configured shell hooks — gateway, CLI and TUI all do `type/bug` `comp/cron` `area/config` `P2` 💬1
- [#133628](https://github.com/NousResearch/hermes-agent/issues/133628) [Bug]: Desktop renderer hammers a dead backend port with no backoff — ~20h connect ENOBUFS storm on loopback degrades the whole Windows host `type/bug` `P2` `sweeper:risk-platform-windows` `comp/desktop`
- [#133622](https://github.com/NousResearch/hermes-agent/issues/133622) [Bug]: `sudo` in a background process can never authenticate or prompt (local `spawn_local` skips the sudo rewrite; stdin is /dev/null) `type/bug` `tool/terminal` `backend/local` `P2`
- [#133623](https://github.com/NousResearch/hermes-agent/issues/133623) Built-in configuration for idle profile shutdown and state.db cleanup (to replace external GC script)? `type/feature` `question` `comp/cli` `comp/gateway`
- [#133616](https://github.com/NousResearch/hermes-agent/issues/133616) [Bug]: standalone MCP probes do not load enabled plugin secret sources `type/bug` `comp/cli` `comp/plugins` `tool/mcp`
- [#133612](https://github.com/NousResearch/hermes-agent/issues/133612) [Feature]: show model price and sale discount in the model submenu instead of on every row `type/feature` `P3` `comp/desktop` `area/usage-cost`
- [#133606](https://github.com/NousResearch/hermes-agent/issues/133606) Context-length resolution doesn't treat a custom/LiteLLM-style alias as dynamic: permanent cache poisoning + silently dropped model.context_length override `type/bug` `comp/agent` `provider/openai` `area/config`
- [#133602](https://github.com/NousResearch/hermes-agent/issues/133602) [Bug]: LSP typescript diagnostics always time out: first publishDiagnostics after didOpen is discarded as seed `type/bug` `comp/agent` `P2` `comp/lsp`
- [#133603](https://github.com/NousResearch/hermes-agent/issues/133603) background_review fork still fires pre_tool_call/post_tool_call under the parent session_id (follow-up to #107062) `type/bug` `comp/agent` `comp/plugins` `P3`
- [#133601](https://github.com/NousResearch/hermes-agent/issues/133601) [Feature]: expose local Desktop/CLI sessions through `hermes mcp serve` for read-only supervision `type/feature` `comp/cli` `tool/mcp` `P3`
- [#133595](https://github.com/NousResearch/hermes-agent/issues/133595) zai provider: glm-5.3-flash rejects reasoning_effort=medium on the standard endpoint (HTTP 400 / code 1210) `type/bug` `comp/agent` `comp/plugins` `provider/zai`
- [#133596](https://github.com/NousResearch/hermes-agent/issues/133596) [Bug]: computer_use screenshots embedded with no size cap; Claude DirectSDK 'Image base64 size exceeds API limit' evades image-shrink recovery `type/bug` `comp/tools` `tool/vision` `provider/anthropic`
- [#133587](https://github.com/NousResearch/hermes-agent/issues/133587) [Bug]: Built-in adapter construction failure prevents healthy gateway platforms from starting `type/bug` `comp/gateway` `platform/webhook` `P2`
- [#133574](https://github.com/NousResearch/hermes-agent/issues/133574) feat(skills): write support for custom skill subdirectories `type/feature` `comp/tools` `tool/skills` `P3`
- [#133575](https://github.com/NousResearch/hermes-agent/issues/133575) [Bug]: claude-subscription-directsdk-experimental: prompt cache gets stuck at a fixed floor for an entire session, non-advancing `type/perf` `comp/plugins` `provider/anthropic` `P3`
- [#133577](https://github.com/NousResearch/hermes-agent/issues/133577) [Bug]: secure_parent_dir() ignores HERMES_HOME_MODE -- credential writes re-lock HERMES_HOME to 0700 (regression of #6991) `type/bug` `comp/cli` `area/auth` `area/config`
- [#133576](https://github.com/NousResearch/hermes-agent/issues/133576) [Security] Ship a whole-process untrusted-input posture with brokered credentials, deny-by-default egress, and an executed compromise matrix `type/feature` `innovation` `comp/agent` `area/auth`

#### 🔒 Closed Issues
- [#133554](https://github.com/NousResearch/hermes-agent/issues/133554) [Bug]: Cannot select an OpenAI model after Copilot fallback has been used
- [#118958](https://github.com/NousResearch/hermes-agent/issues/118958) [Bug]: Discord slash commands from role-authorized users are rejected by the gateway (slash event never carries role_authorized)
- [#127830](https://github.com/NousResearch/hermes-agent/issues/127830) Update-check rev-list on tree:0 partial clone causes unbounded on-demand fetch storm (103 GB pack growth, continuous AV scanning)
- [#40880](https://github.com/NousResearch/hermes-agent/issues/40880) Dashboard auxiliary model slots ignore plugins — frontend uses hardcoded list
- [#130302](https://github.com/NousResearch/hermes-agent/issues/130302) [Bug]: Discord voice-channel speech from a role-authorized member never reaches the agent (voice source drops role_authorized)
- [#132373](https://github.com/NousResearch/hermes-agent/issues/132373) Let profiles (and plugins) register their own Automation Blueprints
- [#129514](https://github.com/NousResearch/hermes-agent/issues/129514) [Bug]: Pre-fix Desktop bundle-skew check on a tree:0 clone filled 434 GB of disk during `hermes update` (macOS) — follow-up to #125932
- [#129189](https://github.com/NousResearch/hermes-agent/issues/129189) feat(plugins): let register_auxiliary_task inherit a built-in slot, and group plugin slots in the auxiliary page
- [#132609](https://github.com/NousResearch/hermes-agent/issues/132609) [Feature]: Plugin API to start a new gateway session in a given profile
- [#130311](https://github.com/NousResearch/hermes-agent/issues/130311) [Bug]: Discord voice utterance in transcription is answered in another text channel after a /voice join rebind

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,230 · **Open issues:** 8,469 · **Last push:** <1h ago

The vLLM project released version 0.31.0, incorporating 717 commits from 307 contributors, with significant updates to its performance, notably the default adoption of the FlashMLA mega attention with V4.1 NVFP4 compressed KV cache and enhancements to DeepGEMM sparse MQA logits. Key bug fixes included addressing the Qwen4Exp FP8 PLE kernel compilation issue and a fix for malformed `$defs` in tool schemas which now returns a 400 status instead of a 500. Among the new issues, a performance concern was raised regarding hybrid Mamba prefix caching, indicating a 11-16% throughput drop on Nemotron-3.5-Lightning when cache misses occur. Overall, the release showcased critical improvements and highlighted emerging challenges in performance tuning.

#### 🚀 New Releases
- [v0.31.0](https://github.com/vllm-project/vllm/releases/tag/v0.31.0) v0.31.0

#### ✅ Merged PRs
- [#60142](https://github.com/vllm-project/vllm/pull/60142) [Bugfix] Fix Qwen4Exp FP8 PLE pinned lookup kernel failing to compile below SM89
- [#57750](https://github.com/vllm-project/vllm/pull/57750) [ROCm] Disable AITER attention query quantization on RDNA3
- [#55471](https://github.com/vllm-project/vllm/pull/55471) [Bugfix][NIXL] Recover locally invalidated pull peer metadata
- [#54850](https://github.com/vllm-project/vllm/pull/54850) [Bugfix][Frontend] Malformed `$defs` in a tool schema should be a 400, not a 500
- [#60107](https://github.com/vllm-project/vllm/pull/60107) [Bugfix][KVConnector][NIXL] Size per-region replicate flags by each region's block count
- [#60108](https://github.com/vllm-project/vllm/pull/60108) [Bugfix][KVConnector][NIXL] Return NumPy descriptors from mixed-memory local registration
- [#60041](https://github.com/vllm-project/vllm/pull/60041) [TEST][XPU][CI] Fix ci uva kernel test instability
- [#56720](https://github.com/vllm-project/vllm/pull/56720) [ROCm][DSv4.1][Perf] One-pass dequantize and a gather-sized grid for the compressed K cache
- [#56881](https://github.com/vllm-project/vllm/pull/56881) [Kimi-K3] Use the fused K/V pack kernel on the decode-context-parallel prefill path
- [#60036](https://github.com/vllm-project/vllm/pull/60036) [Bugfix][Structured Output] Cap JSON schema nesting to prevent 500s and API-server stalls
- [#60100](https://github.com/vllm-project/vllm/pull/60100) [CI][ROCm] Wait for engine teardown between LM Eval models
- [#60116](https://github.com/vllm-project/vllm/pull/60116) [CI] Fix test_mixed_warmup_gate after #57053
- [#59571](https://github.com/vllm-project/vllm/pull/59571) [Bugfix][MoE] Allow MiniMax2 routing in TRTLLM BF16 monolithic backend
- [#56531](https://github.com/vllm-project/vllm/pull/56531) [Bugfix] Route every speculation-capable row through the speculative path so recurrent state stays consistent
- [#47838](https://github.com/vllm-project/vllm/pull/47838) [Bugfix][Frontend] Preserve logprobs when top_logprobs is null
- [#59769](https://github.com/vllm-project/vllm/pull/59769) [CI] Read each profiler round's trace as it stops in test_gpu_profiler
- [#59879](https://github.com/vllm-project/vllm/pull/59879) [Bugfix][Frontend] Build tool-call grammars from the tools the prompt renders
- [#60073](https://github.com/vllm-project/vllm/pull/60073) [Frontend] Extract parse and assembly out of batch chat derender
- [#58949](https://github.com/vllm-project/vllm/pull/58949) [HiSparse] Log steady-state max concurrency and expose host-tier utilization gauges
- [#60062](https://github.com/vllm-project/vllm/pull/60062) [BugFix][Frontend] Pass reasoning_ended through render → generate (#60059)
- [#57053](https://github.com/vllm-project/vllm/pull/57053) [Bugfix][MRV2][Spec Decode] Honor dynamic K in autoregressive speculators, 1.2~1.3x kernel perf improvement
- [#56801](https://github.com/vllm-project/vllm/pull/56801) [watermark] compatibility validation
- [#60092](https://github.com/vllm-project/vllm/pull/60092) [Docs] Add reviewer area of interest for TheEpicDolphin
- [#59105](https://github.com/vllm-project/vllm/pull/59105) [Bugfix][Spec Decode] Reserve the bonus KV slot for fill-in DSpark
- [#59788](https://github.com/vllm-project/vllm/pull/59788) [Bugfix] Give each data-parallel engine its own global RNG streams
- [#52668](https://github.com/vllm-project/vllm/pull/52668) [ROCm][Perf] Use a stacked hipBLASLt GEMM for the bf16x3 router
- [#59975](https://github.com/vllm-project/vllm/pull/59975) [Bugfix] Fix Mamba page size AssertionError with spec decoding on GraniteMoeHybrid, FalconH1 and Zamba2
- [#59688](https://github.com/vllm-project/vllm/pull/59688) [Bugfix][HiSparse] Reject cudagraph_mode=FULL at startup
- [#59827](https://github.com/vllm-project/vllm/pull/59827) [Model] Add Nemotron 3.5 ASR transcription support
- [#60063](https://github.com/vllm-project/vllm/pull/60063) [CI/Build] Declare the video modality on the CohereCompass reference model
- [#57947](https://github.com/vllm-project/vllm/pull/57947) [ROCm][Perf] Reach the fused QSA pre-indexer from the AMD path
- [#59942](https://github.com/vllm-project/vllm/pull/59942) [Bugfix][Core] Retain encoder cache references for repeated multimodal inputs
- [#59977](https://github.com/vllm-project/vllm/pull/59977) Remove redundant dependency requirement for TPU
- [#60056](https://github.com/vllm-project/vllm/pull/60056) [CI/Build] Run the prefill token scoring test under batch invariance
- [#60060](https://github.com/vllm-project/vllm/pull/60060) [CI] Add CODEOWNERS for HiSparse
- [#58709](https://github.com/vllm-project/vllm/pull/58709) [Bugfix][Structured Output] Preserve literal values in Guidance disable_additional_properties
- [#59278](https://github.com/vllm-project/vllm/pull/59278) [Model] Extend device-side mm normalization to Kimi K2.5 / K3
- [#59211](https://github.com/vllm-project/vllm/pull/59211) [Model][GLM-5.3-Flash] Support DCP for the kpool sparse indexer
- [#60024](https://github.com/vllm-project/vllm/pull/60024) [LoRA] Remove tensorizer
- [#59771](https://github.com/vllm-project/vllm/pull/59771) [Test] Re-enable Voxtral HF reference test on Transformers v5
- [#59927](https://github.com/vllm-project/vllm/pull/59927) [Model][DeepSeek-V4] Make MegaMoE shared-expert finalize independent of linear post-load order
- [#59246](https://github.com/vllm-project/vllm/pull/59246) [Attention][MLA] Support fp8_ds_mla KV cache for NoPE-512 models on SM90
- [#59031](https://github.com/vllm-project/vllm/pull/59031) [Bugfix] Load stacked expert weights for non-gated MoE
- [#60023](https://github.com/vllm-project/vllm/pull/60023) [Bugfix][Qwen4Exp] Honor --kv-cache-dtype-skip-layers in QSA attention
- [#60027](https://github.com/vllm-project/vllm/pull/60027) [Perf][Qwen4Exp] Keep the HC up projection on the skinny GEMM path
- [#60022](https://github.com/vllm-project/vllm/pull/60022) [Security] Restrict Pillow image formats on untrusted media paths
- [#59443](https://github.com/vllm-project/vllm/pull/59443) [Bugfix][Qwen4Exp] Load PLE tables unquantized under Quark checkpoints
- [#59632](https://github.com/vllm-project/vllm/pull/59632) [Performance] Add SM121 TP=2 skinny-GEMM plans
- [#59873](https://github.com/vllm-project/vllm/pull/59873) [Bugfix][NIXL] Count heartbeats as remote engine activity
- [#56974](https://github.com/vllm-project/vllm/pull/56974) [Bugfix][GLM-5.3-Flash] Keep batch x heads out of gridDim.z in the GLM-5.3-Flash fused recurrent KDA kernel

#### 🐛 New Issues
- [#60008](https://github.com/vllm-project/vllm/issues/60008) [Performance]: Hybrid Mamba prefix caching (`mamba_cache_mode="align"`) costs 11-16% throughput on Nemotron-3.5-Lightning with no cache hits: per-group eager block-table ops, per-step align kernels outside CUDA graphs, and block-boundary prefill splits `performance` 💬5
- [#60059](https://github.com/vllm-project/vllm/issues/60059) [Bug]: `/inference/v1/generate` doesn't pass `reasoning_ended` or `reasoning_parser_kwargs`, so structured outputs start later than on `/v1/chat/completions` `bug` `structured-output` `tool-calling` 💬3
- [#60007](https://github.com/vllm-project/vllm/issues/60007) [Bug]: TRITON_MLA is not batch invariant under chunked prefill with `VLLM_BATCH_INVARIANT=1` (DeepSeek-V2-Lite, DeepSeek-V3.1) `bug` `deepseek` 💬3
- [#60101](https://github.com/vllm-project/vllm/issues/60101) [Bug][ROCm][MoRIIO] WRITE mode never completes with a TP4 prefill and a TP8 decode: only half of the decode ranks receive KV `rocm` 💬2
- [#60109](https://github.com/vllm-project/vllm/issues/60109) [Bug][HiSparse] GLM-5.3 TP8 on B200: illegal memory access when admitting a new request wave `bug` `glm` 💬2
- [#60044](https://github.com/vllm-project/vllm/issues/60044) [Feature]: Per-request prefix-cache miss attribution (prompt divergence vs. eviction) `feature request` 💬2
- [#60067](https://github.com/vllm-project/vllm/issues/60067) [Bug]: Pooling request with prompt length == max_model_len is accepted but never fully scheduled (engine spins, request never finishes) `pooling` 💬1
- [#60121](https://github.com/vllm-project/vllm/issues/60121) [Bug][ROCm] Slow EngineCore/worker teardown leaves VRAM held after shutdown, so the next engine fails its startup memory check `feature request` `rocm` 💬1
- [#60030](https://github.com/vllm-project/vllm/issues/60030) [Bug]: Triton top-p keeps the whole row when most of the vocab has zero fp32 probability 💬1
- [#60048](https://github.com/vllm-project/vllm/issues/60048) [Doc]: VLLM_CPU_KVCACHE_SPACE: docs don't match code - no 4GB default anywhere, and values are GiB `documentation` 💬1
- [#60151](https://github.com/vllm-project/vllm/issues/60151) [Bug]: Sparse weight patches fail on tied embeddings when lm_head and embed_tokens land in different chunks
- [#60072](https://github.com/vllm-project/vllm/issues/60072) [Tracking] HiSparse
- [#60138](https://github.com/vllm-project/vllm/issues/60138) [Feature]: Reload speculative draft model weights from a new checkpoint at runtime (online speculator updates) `speculative-decoding`
- [#60137](https://github.com/vllm-project/vllm/issues/60137) [Bug]: Paused streaming sessions deadlock the scheduler when the KV cache is full `scheduler`
- [#60124](https://github.com/vllm-project/vllm/issues/60124) [Bug][KV Connector] MultiConnector on prefill silently disables the hybrid KV cache manager, so a NixlConnector decode rejects every transfer with an opaque "NIXL compatibility hash mismatch" `kv-connector` `kv-cache-manager`
- [#60119](https://github.com/vllm-project/vllm/issues/60119) [Bug]: GLM-5.3-Flash NVFP4 on B300: CUDA illegal access persists with MTP disabled; blocking/eager reports persistent_topk `glm`
- [#60095](https://github.com/vllm-project/vllm/issues/60095) [Performance]: MRv2 token-logprob kernel reads the vocabulary twice and runs one program per row
- [#60093](https://github.com/vllm-project/vllm/issues/60093) [Bug]: enable_moe_shared_loras crashes at startup on 3D-weight MoE models
- [#60019](https://github.com/vllm-project/vllm/issues/60019) [Bug]: P2P KV offload tier runs NIXL peer registration synchronously inside the scheduler step, stalling all requests on the rank `kv-connector` `scheduler`
- [#60004](https://github.com/vllm-project/vllm/issues/60004) [Bug]: OffloadingConnector with LHBNC returns wrong output on CPU hits

#### 🔒 Closed Issues
- [#44576](https://github.com/vllm-project/vllm/issues/44576) [Usage]: Claude code does not work with vLLM
- [#44421](https://github.com/vllm-project/vllm/issues/44421) [RFC]: AMD Zen CPU CI Infrastructure for vLLM
- [#40875](https://github.com/vllm-project/vllm/issues/40875) [Bug]: ngram speculative decoding default prompt_lookup_min=2 causes tool-call output corruption on Qwen3-class models with structured output (config-only fix: prompt_lookup_min=8)
- [#52564](https://github.com/vllm-project/vllm/issues/52564) [Bug]: qwen3.8-27b-fp8 toolcall auto stop often
- [#44485](https://github.com/vllm-project/vllm/issues/44485) [Bug]: [0.22.0] When using Hidden State Extraction, if enable-prefix-caching is turned on, the length of hidden_states obtained will be inconsistent with the length of token_ids.
- [#44489](https://github.com/vllm-project/vllm/issues/44489) [Bug]: Online FP8 (`--quantization fp8`) over-allocates non-gated MoE `w13` (2×intermediate), causing OOM — NemotronH on a single GPU
- [#44641](https://github.com/vllm-project/vllm/issues/44641) [Bug][ROCm]: Build Failure Caused by Torch Version
- [#51779](https://github.com/vllm-project/vllm/issues/51779) [Bug]: Qwen3.5 GDN CUDA kernels promote BF16 Q/K normalization to FP32
- [#44426](https://github.com/vllm-project/vllm/issues/44426) [MRV2][Refactor] Migrate speculator feature flags into model code
- [#44440](https://github.com/vllm-project/vllm/issues/44440) [Feature][ROCm]: Add env-var gates for F2 (fused RMSNorm+MXFP4-quant) and F3 (fused RoPE+MLA KV-cache) in DeepSeek-V3 MXFP4 uplift
- [#44632](https://github.com/vllm-project/vllm/issues/44632) [Bug]: Missing logger output when api-server-count > 1 with internal DP (data parallel) load balancing enabled
- [#44637](https://github.com/vllm-project/vllm/issues/44637) [Bug]: Prefix caching causes IndexError in Qwen3.5-122B-A10B (BF16) on A2
- [#60059](https://github.com/vllm-project/vllm/issues/60059) [Bug]: `/inference/v1/generate` doesn't pass `reasoning_ended` or `reasoning_parser_kwargs`, so structured outputs start later than on `/v1/chat/completions`
- [#44451](https://github.com/vllm-project/vllm/issues/44451) KV events: BlockStored token_ids can span skipped Mamba align blocks while block_hashes omit them
- [#44531](https://github.com/vllm-project/vllm/issues/44531) [Bug]: mooncake+PD混部，高并发preempt，偶发服务宕机，ValueError: Counters can only be incremented by non-negative amounts
- [#44538](https://github.com/vllm-project/vllm/issues/44538) [Bug]: multimodal processor cache drops audio for use_audio_in_video, causing StopIteration / HTTP 400 (Qwen3-Omni)
- [#44578](https://github.com/vllm-project/vllm/issues/44578) [RFC] Add KVarN: Variance-Normalized KV-Cache Quantization (4-bit K, 2-bit V)
- [#44703](https://github.com/vllm-project/vllm/issues/44703) Benchmark request: mixed long-prefill / long-decode / repeated-prefix serving boundary
- [#58695](https://github.com/vllm-project/vllm/issues/58695) [Bug]: Guidance `disable_additional_properties` rewrites `const` and `enum` literal values
- [#57721](https://github.com/vllm-project/vllm/issues/57721) [Bug]: Mamba-hybrid models cannot start with speculative decoding. Mamba page padding is planned without the speculative widening
- [#59868](https://github.com/vllm-project/vllm/issues/59868) [Qwen4Exp] PLE pinned-host FP8 lookup will not compile on sm_86, so --engram-config cpu_offload is unusable on consumer Ampere
- [#59104](https://github.com/vllm-project/vllm/issues/59104) [Bug]: Fill-in DSpark underallocates KV lookahead and can overwrite target KV (synthetic CUDA repro)
- [#49106](https://github.com/vllm-project/vllm/issues/49106) [Bug]: False positive warning "Unexpected gate/up projection names" for non-gated MoE (Nemotron 3 Ultra / Nemotron H)
- [#59954](https://github.com/vllm-project/vllm/issues/59954) [Bug]: FlashInfer sampler runs JIT after has_flashinfer() disables FlashInfer, crashing startup without ninja
- [#59605](https://github.com/vllm-project/vllm/issues/59605) [Performance]: Qwen4Exp skinny decode GEMM has no SM12x plans; on GB10 (DGX Spark) BF16 projections fall back to cuBLAS SM80 WMMA kernels
- [#59871](https://github.com/vllm-project/vllm/issues/59871) [Bug]: NIXL: heartbeats do not refresh `engine_ttl`, so a decode instance evicts and re-handshakes a prefill engine it is waiting on
- [#56973](https://github.com/vllm-project/vllm/issues/56973) [Bug] GLM-5.3-Flash with TP=1 per rank (DP4) fails at CUDA-graph capture in fused_recurrent_kda: grid.z = batch x 64 heads exceeds 65535
- [#56197](https://github.com/vllm-project/vllm/issues/56197) [Bug]: --kv-cache-dtype int4_per_token_head aborts engine init for any head_size that is not a power of two

### SGLang (`sgl-project/sglang`)

**Stars:** 36,804 · **Open issues:** 5,514 · **Last push:** <1h ago

On October 6, 2026, there were no new releases for SGLang, but several notable features and fixes were merged. Key updates include the introduction of hybrid Mamba indexer host pools (#40915) and improvements in diffusion processes with fixes for concurrent server performance and management of oversized models (#41541, #41830). Documentation updates were made, such as relocating the GB300 AgentX recipe (#42167) and refreshing K2 Horizon checkpoint revisions (#42130). However, several new issues emerged, with a highlight on a bug (#42684) causing the NIXL backend to crash at startup due to a TypeError when a particular buffer configuration is set.

#### ✅ Merged PRs
- [#40915](https://github.com/sgl-project/sglang/pull/40915) Declare hybrid Mamba indexer host pool
- [#42609](https://github.com/sgl-project/sglang/pull/42609) [Diffusion] Fuse Anima FP32 split-half Q/K RoPE
- [#42552](https://github.com/sgl-project/sglang/pull/42552) [AMD] Add engram host/device address mapping
- [#42167](https://github.com/sgl-project/sglang/pull/42167) [Docs] GLM-5.2: move GB300 AgentX recipe to the agentic HiCache section and drop no-op settings
- [#41541](https://github.com/sgl-project/sglang/pull/41541) [Diffusion] Fix concurrent server perf dump writes across ranks
- [#42130](https://github.com/sgl-project/sglang/pull/42130) [Docs] Refresh K2 Horizon checkpoint revisions
- [#41830](https://github.com/sgl-project/sglang/pull/41830) [diffusion] kernels: take the Wan VAE decoder's remaining first-decode work off the request path
- [#41723](https://github.com/sgl-project/sglang/pull/41723) [diffusion] Fix the OOM hint's placement advice and add a 24 GB Wan2.1 recipe
- [#42657](https://github.com/sgl-project/sglang/pull/42657) [misc] Rename `SGLANG_OPT_SWA_RELEASE_LEAF_LOCK_AFTER_WINDOW` to `SGLANG_OPT_RELEASE_PREFILL_SWA`
- [#42270](https://github.com/sgl-project/sglang/pull/42270) [mem_cache] Make `release_kv_cache`'s final checkpoint an explicit `checkpoint` flag
- [#42537](https://github.com/sgl-project/sglang/pull/42537) [Session] Let a streaming session own its KV record and tree lock from the first turn
- [#42571](https://github.com/sgl-project/sglang/pull/42571) [CI] Drop the redundant and broken tc_piecewise tests
- [#40923](https://github.com/sgl-project/sglang/pull/40923) [ci] add renderer automatic labeler
- [#42285](https://github.com/sgl-project/sglang/pull/42285) [Refactor][TCPCG] Relocate shared graph tensor and DSA head-gate helpers (1/9)
- [#33883](https://github.com/sgl-project/sglang/pull/33883) [HiCache] Route --file-storage-path to the file storage backend
- [#42178](https://github.com/sgl-project/sglang/pull/42178) [DSA] k-pool: 256-token logical page so index page id = logical page id
- [#41737](https://github.com/sgl-project/sglang/pull/41737) [DFlash2] Keep the greedy selector walk in range for all-NaN score rows
- [#42297](https://github.com/sgl-project/sglang/pull/42297) [Speculative] Add opt-in block verification
- [#42545](https://github.com/sgl-project/sglang/pull/42545) [sgl-router] Improved policy balanced mode
- [#40158](https://github.com/sgl-project/sglang/pull/40158) fix: resolve QKV layout inference for MiniMax-H3 checkpoints
- [#41710](https://github.com/sgl-project/sglang/pull/41710) [diffusion] kernels: stop specializing on per-request sequence lengths
- [#41721](https://github.com/sgl-project/sglang/pull/41721) [diffusion] Stream an oversized DiT in auto mode instead of OOMing
- [#41833](https://github.com/sgl-project/sglang/pull/41833) [diffusion] warm the image writer and the HTTP route models at startup
- [#41722](https://github.com/sgl-project/sglang/pull/41722) [diffusion] Keep the DiT off component offload under explicit multi-GPU FSDP
- [#22441](https://github.com/sgl-project/sglang/pull/22441) [diffusion] Cache LTX-2 RoPE coords to avoid per-step recompute
- [#22813](https://github.com/sgl-project/sglang/pull/22813) Fix scheduler host not working when ipv6 in multi modal gen
- [#39523](https://github.com/sgl-project/sglang/pull/39523) [diffusion] model: restore folded H3 GGUF patch embedding
- [#42227](https://github.com/sgl-project/sglang/pull/42227) [Diffusion] Keep model compatibility details in cookbook recipes
- [#40761](https://github.com/sgl-project/sglang/pull/40761) [diffusion] Skip warmup preferred preload when it would OOM
- [#40095](https://github.com/sgl-project/sglang/pull/40095) [Diffusion][MiniMax-H3] Avoid full-video clone in VAE postprocessing
- [#41832](https://github.com/sgl-project/sglang/pull/41832) [diffusion] conditioning cache: recycle warmup-only entries at the first served store
- [#37549](https://github.com/sgl-project/sglang/pull/37549) [diffusion] feat: add --async-output-save to overlap output saving with the next request
- [#35857](https://github.com/sgl-project/sglang/pull/35857) [Diffusion][MiniMax-H3] Add community LoRA recipes and Kohya mapping
- [#42429](https://github.com/sgl-project/sglang/pull/42429) [sgl-router] Add reorg bucket config with per-group admission
- [#42572](https://github.com/sgl-project/sglang/pull/42572) [sgl-router] Point the design doc at the shared engine ranking
- [#42428](https://github.com/sgl-project/sglang/pull/42428) [sgl-router] Move pressure and prefix signals out of legacy policies
- [#28650](https://github.com/sgl-project/sglang/pull/28650) [diffusion][ROCm][Perf]: Set gfx942 AITER FMHA rounding mode to rtz instead of rtna
- [#33855](https://github.com/sgl-project/sglang/pull/33855) [diffusion] attention: Allow disabling sequence masking in SP
- [#42057](https://github.com/sgl-project/sglang/pull/42057) [Spec] LiLiCorr: named head MLPs and quantized head linears
- [#41906](https://github.com/sgl-project/sglang/pull/41906) [Diffusion] MiniMax-H3 fuse the video VAE decoder's RMSNorm and QK RoPE
- [#41641](https://github.com/sgl-project/sglang/pull/41641) [Diffusion] Keep generic warmup valid for step-floored models and stop reporting a failed warmup as warm
- [#41656](https://github.com/sgl-project/sglang/pull/41656) Fix XQA draft extend with FP8 KV cache in trtllm_mha
- [#42101](https://github.com/sgl-project/sglang/pull/42101) [Perf] Optimize MiMo local audio attention on Hopper
- [#42558](https://github.com/sgl-project/sglang/pull/42558) Revert "Revert "[AMD][ROCm] Keep cos_sin_cache fp32 on HIP for fused QSA indexer kernel (#41282)""
- [#42226](https://github.com/sgl-project/sglang/pull/42226) [Diffusion] Keep nightly regression baselines on a comparable methodology
- [#37261](https://github.com/sgl-project/sglang/pull/37261) [Feature] DeepEP v2: expanded (do_expand=True) prefill dispatch
- [#40785](https://github.com/sgl-project/sglang/pull/40785) [JIT] Fuse FP8 KV-cache quantization into the prefix-valid commit kernel
- [#42505](https://github.com/sgl-project/sglang/pull/42505) [diffusion] CI: relax the load latency check and extend the 2-GPU retry deadline
- [#41659](https://github.com/sgl-project/sglang/pull/41659) [DSv4.1] Prefill indexer: raw selection, row-pair schedule ids, no host syncs
- [#42539](https://github.com/sgl-project/sglang/pull/42539) [Session] Count streaming session KV by owner in pool accounting
- [#42541](https://github.com/sgl-project/sglang/pull/42541) Revert "[AMD][ROCm] Keep cos_sin_cache fp32 on HIP for fused QSA indexer kernel (#41282)"
- [#42543](https://github.com/sgl-project/sglang/pull/42543) [CI] Drop the echoed command from /rerun-test result replies

#### 🐛 New Issues
- [#42568](https://github.com/sgl-project/sglang/issues/42568) [Bug] `chain_speculative_sampling_triton` rejects every draft whose q rounds just above 1.0 (since #37134) 💬1
- [#42560](https://github.com/sgl-project/sglang/issues/42560) [Bug] Deprecated --dp-size N --enable-dp-attention resolves to dp_size=1 (attn_dp_size=N), so embedding integrations (NVIDIA Dynamo) register only DP rank 0; still present after #42348
- [#42684](https://github.com/sgl-project/sglang/issues/42684) [Bug] NIXL backend crashes at startup with TypeError when SGLANG_DISAGG_STAGING_BUFFER=1
- [#42672](https://github.com/sgl-project/sglang/issues/42672) [Bug] NPU HiCache: MHATokenToKVPoolHost crashes when the device k_buffer is a single tensor (since #40326)
- [#42653](https://github.com/sgl-project/sglang/issues/42653) [Bug] `--enable-unified-memory` on a hybrid-SWA model kills the scheduler, `alloc_token_slots` raises "Out of memory"
- [#42652](https://github.com/sgl-project/sglang/issues/42652) [Bug] `--enable-unified-memory` ignores `--max-total-tokens` on hybrid-Mamba models
- [#42648](https://github.com/sgl-project/sglang/issues/42648) [Bug] PP + EAGLE/MTP spec decoding crashes with --enable-mixed-chunk: 'EagleDraftInput' object has no attribute 'rids' in _pp_spec_rebuild_verify_input
- [#42601](https://github.com/sgl-project/sglang/issues/42601) [Bug] DSpark SPS profiler mis-reads the attention-DP rank count from /server_info
- [#42564](https://github.com/sgl-project/sglang/issues/42564) [Bug][ROCm] FLUX.2-dev fails on gfx1151: NVIDIA PTX inline assembly in residual_gate_add kernel
- [#42559](https://github.com/sgl-project/sglang/issues/42559) [Feature] Support Whisper speech translation (task="translate" / /v1/audio/translations)
- [#42548](https://github.com/sgl-project/sglang/issues/42548) [Bug] DeepSeek-V4 HiCache: SWA host pool is sized from the small SWA device pool, so idle prefixes miss the host tier long before the KV host pool fills
- [#42544](https://github.com/sgl-project/sglang/issues/42544) [Bug] /update_weights_from_disk: is_async / keep_pause / token_step have no effect, num_paused_requests is always 0

#### 🔒 Closed Issues
- [#37559](https://github.com/sgl-project/sglang/issues/37559) [Bug] CUDA_ERROR_ILLEGAL_ADDRESS in MXFP8FP4/W4A8 MegaMoE path on B300 with sgl-deep-gemm 0.1.7
- [#28018](https://github.com/sgl-project/sglang/issues/28018) [Bug] Gemma-4-31B QAT W4A16 CT fails gptq_marlin_repack on SM121
- [#33454](https://github.com/sgl-project/sglang/issues/33454) [Bug] DSpark verify window crosses the model context boundary and causes an illegal RoPE read
- [#33629](https://github.com/sgl-project/sglang/issues/33629) [Feature] Optimize FP8 Blockwise GEMM on SM120
- [#33706](https://github.com/sgl-project/sglang/issues/33706) [Feature] Support shared to sparse experts fusion for Qwen3.5 / Qwen3.6 MoE on SM120 (blockwise FP8)
- [#33720](https://github.com/sgl-project/sglang/issues/33720) [diffusion] MiniMax-H3 quality=high (Cache-DiT tier) topology-locked to 4xH200 — request 8xB300 audit
- [#33846](https://github.com/sgl-project/sglang/issues/33846) [AMD/ROCm] Kimi-K3 KDA prefill occasional hang at c=1: chunk_kda_fwd → tolist() → hipMemcpy D2H never returns
- [#33163](https://github.com/sgl-project/sglang/issues/33163) [Bug] deepseek-v4-flash toolcall error runner_backend from marlin to flashinfer_mxfp4
- [#35970](https://github.com/sgl-project/sglang/issues/35970) Diffusion LoRA auto mode statically merges post-load FP8 weights and crashes
- [#33579](https://github.com/sgl-project/sglang/issues/33579) [Bug] DSPARK/DFLASH spec v2 at page_size=1: req_to_token row too narrow for the decode reserve — silent KV slot leak at the context boundary
- [#33693](https://github.com/sgl-project/sglang/issues/33693) [Bug] deepseek v4 flash 0731版本启动失败
- [#29184](https://github.com/sgl-project/sglang/issues/29184) [RFC] Generalize cuda_graph_* server args / runner naming to a device-agnostic scheme (device_graph_*)
- [#27252](https://github.com/sgl-project/sglang/issues/27252) [Roadmap]Prefill Context Parallel Refactor
- [#33915](https://github.com/sgl-project/sglang/issues/33915) [Bug] FlashInfer backend drops attn_logit_softcapping: the cap is passed to the deprecated forward() instead of plan(), so gemma-2 and grok-1 run uncapped
- [#33902](https://github.com/sgl-project/sglang/issues/33902) [Bug] GLM streaming parsers forward unknown tools when SGLANG_FORWARD_UNKNOWN_TOOLS is disabled
- [#33901](https://github.com/sgl-project/sglang/issues/33901) [Bug] Glm47MoeDetector emits only the first of multiple tool calls in one final streaming increment
- [#33893](https://github.com/sgl-project/sglang/issues/33893) [Feature] Add SplitK to CuteDSL SM10X BF16 GEMM
- [#33867](https://github.com/sgl-project/sglang/issues/33867) [Bug] /v1/responses API fails with 400 when function_call_output output is an array
- [#32750](https://github.com/sgl-project/sglang/issues/32750) [Feature] PP Support PD + DSpark
- [#33828](https://github.com/sgl-project/sglang/issues/33828) MiniMax-H3 + DBCache: default residual_diff_threshold is inert, and T2VA cannot reach the documented quality bar
- [#33322](https://github.com/sgl-project/sglang/issues/33322) [Feature] Make diffusion LLM serving usable for RL rollout and high-throughput workloads
- [#33782](https://github.com/sgl-project/sglang/issues/33782) [Bug][Ascend NPU] MTP (NEXTN) crashes on glm-ocr
- [#41494](https://github.com/sgl-project/sglang/issues/41494) [Bug] GLM-5.3-Flash DSA k-pool indexer corrupts long-context (16K) NIAH needle digits — vLLM/transformers read the same inputs correctly
- [#40127](https://github.com/sgl-project/sglang/issues/40127) [Bug] [diffusion] MiniMax-H3 INT8 ConvRot checkpoints skip the head-interleaved QKV reorder, silently corrupting video/audio (same defect as #34227, non-FSDP path)
- [#38904](https://github.com/sgl-project/sglang/issues/38904) [Bug] MiniMax H3 GGUF text encoder fails loading folded Conv3D patch embedding

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 130,411 · **Open issues:** 2,523 · **Last push:** 1h ago

On October 6, 2026, llama.cpp released version 0.6.0, which introduces the `llama_batch_ext` extended batch API for mixed token and embedding inputs, alongside support for the GLM-5.3-Flash hybrid model and the new Clef decision model for text and vision tasks. Noteworthy merged features include enhancements to hexagon pooling operations and scalability updates for matmul and flash attention, as well as significant optimizations in CUDA for improved performance. However, several new issues emerged, including a reported performance degradation in evaluation tasks following recent updates, particularly affecting the Qwen3.6 model. Other concerns raised include high RAM usage during compilation and slow performance observed with CUDA ADD/GELU operations on the B200 model.

#### 🚀 New Releases
- [v0.6.0](https://github.com/ggml-org/llama.cpp/releases/tag/v0.6.0) v0.6.0
- [b11433](https://github.com/ggml-org/llama.cpp/releases/tag/b11433) b11433
- [b11430](https://github.com/ggml-org/llama.cpp/releases/tag/b11430) b11430
- [b11429](https://github.com/ggml-org/llama.cpp/releases/tag/b11429) b11429
- [b11425](https://github.com/ggml-org/llama.cpp/releases/tag/b11425) b11425
- [b11424](https://github.com/ggml-org/llama.cpp/releases/tag/b11424) b11424
- [b11418](https://github.com/ggml-org/llama.cpp/releases/tag/b11418) b11418
- [b11417](https://github.com/ggml-org/llama.cpp/releases/tag/b11417) b11417
- [b11415](https://github.com/ggml-org/llama.cpp/releases/tag/b11415) b11415
- [b11414](https://github.com/ggml-org/llama.cpp/releases/tag/b11414) b11414

#### ✅ Merged PRs
- [#29971](https://github.com/ggml-org/llama.cpp/pull/29971) hexagon: ssm-conv updates
- [#29995](https://github.com/ggml-org/llama.cpp/pull/29995) hexagon: add pool op support
- [#30016](https://github.com/ggml-org/llama.cpp/pull/30016) ci : add 1accel label
- [#29997](https://github.com/ggml-org/llama.cpp/pull/29997) llama.cpp : bump version to 0.6.0
- [#30008](https://github.com/ggml-org/llama.cpp/pull/30008) ci : skip container re-tagging when Require Docker is disabled
- [#29974](https://github.com/ggml-org/llama.cpp/pull/29974) hexagon: matmul and flash-atten scalability updates
- [#29987](https://github.com/ggml-org/llama.cpp/pull/29987) common, server : report model input/output modalities in GET /models
- [#29996](https://github.com/ggml-org/llama.cpp/pull/29996) sync : ggml
- [#29986](https://github.com/ggml-org/llama.cpp/pull/29986) CUDA: make the alloc_deps check batch independent
- [#29988](https://github.com/ggml-org/llama.cpp/pull/29988) vulkan: fix Flash Attention shmem write out of bounds
- [#29936](https://github.com/ggml-org/llama.cpp/pull/29936) vulkan: revert mul_mat_id tile selection PR #29182
- [#29990](https://github.com/ggml-org/llama.cpp/pull/29990) cuda: use the vector lightning indexer kernel on MUSA
- [#29989](https://github.com/ggml-org/llama.cpp/pull/29989) ci : add "Require Docker" flag to make-release workflow
- [#27990](https://github.com/ggml-org/llama.cpp/pull/27990) webui: Use toLocaleString() format consistently across chat message statistics
- [#29993](https://github.com/ggml-org/llama.cpp/pull/29993) ci : disable failing test on virtual Metal device
- [#29969](https://github.com/ggml-org/llama.cpp/pull/29969) server: support vision input for Clef
- [#29857](https://github.com/ggml-org/llama.cpp/pull/29857) CUDA: Optimize accumulation in mmq for NVFP4 type
- [#28498](https://github.com/ggml-org/llama.cpp/pull/28498) kv-cache: fix restoring mismatched KV cache rotation by saving exact rotation metadata
- [#29984](https://github.com/ggml-org/llama.cpp/pull/29984) ci : disable unused qemu in docker build
- [#29958](https://github.com/ggml-org/llama.cpp/pull/29958) llama : fix unexpected graph reallocation in the k-pool models
- [#29901](https://github.com/ggml-org/llama.cpp/pull/29901) cuda: tile the lightning indexer over keys and tokens for 4 heads
- [#24076](https://github.com/ggml-org/llama.cpp/pull/24076) server: reject partial media truncation
- [#29591](https://github.com/ggml-org/llama.cpp/pull/29591) vulkan: fix stale prealloc_y reuse across flash attention and soft_max
- [#29639](https://github.com/ggml-org/llama.cpp/pull/29639) vulkan: sparse flash attention for quantized K/V
- [#29978](https://github.com/ggml-org/llama.cpp/pull/29978) ci : winget urls must be separate strings
- [#29979](https://github.com/ggml-org/llama.cpp/pull/29979) ci : fix docker workflow permissions
- [#28479](https://github.com/ggml-org/llama.cpp/pull/28479) ggml-cpu : add Q8_0 IME1 matrix kernel for SpacemiT X60
- [#29912](https://github.com/ggml-org/llama.cpp/pull/29912) Fix undeclared identifiers when compiling with -DGGML_VULKAN_RUN_TESTS=ON
- [#29483](https://github.com/ggml-org/llama.cpp/pull/29483) webgpu: add MMVQ support for Q1_0/Q5_0/Q5_1/Q3_K/Q5_K/Q6_K/MXFP4
- [#29869](https://github.com/ggml-org/llama.cpp/pull/29869) metal : few-row MMA mat-mul and batched copies for speculative decoding
- [#29633](https://github.com/ggml-org/llama.cpp/pull/29633) CUDA: use MMVF for thin f16/bf16 mul_mat at small batch size
- [#29435](https://github.com/ggml-org/llama.cpp/pull/29435) CUDA: prefer whole-tile FlashAttention scheduling for efficient two-stage kernels

#### 🐛 New Issues
- [#29980](https://github.com/ggml-org/llama.cpp/issues/29980) Eval bug: prompt processing ~2x slower on Qwen3.6-35B-A3B since #29184 (fuse shared experts into MMVQ) `bug-unconfirmed` 💬4
- [#30004](https://github.com/ggml-org/llama.cpp/issues/30004) Misc. bug: CUDA ADD/GELU slower on B200 since PDL commit `bug-unconfirmed` 💬2
- [#30024](https://github.com/ggml-org/llama.cpp/issues/30024) Compile bug: high RAM usage `bug-unconfirmed` 💬1
- [#30005](https://github.com/ggml-org/llama.cpp/issues/30005) Misc. bug: qwen4exp indexer cache doubled by QSA kpool (row=2) and mirrored per device, costing ~400 MiB VRAM per GPU under `-sm tensor` `bug-unconfirmed` 💬1
- [#30007](https://github.com/ggml-org/llama.cpp/issues/30007) Eval bug: NemotronLabs-AI-for-Media-Sports-Tennis, loading issue `bug-unconfirmed` 💬1
- [#30006](https://github.com/ggml-org/llama.cpp/issues/30006) [Vulkan][Mali] Mali-G925: coopmat is a ~2.4x prefill pessimization (GGML_VK_DISABLE_COOPMAT=1 gives 2.36x)
- [#30033](https://github.com/ggml-org/llama.cpp/issues/30033) Eval bug: Performance degradation since (PR #29622) with unsloth/Qwen3.8-Flash-Next-GGUF:UD-IQ3_XXS and dual Intel B70 `bug-unconfirmed`
- [#30032](https://github.com/ggml-org/llama.cpp/issues/30032) qwen4exp QSA indexer OOMs once vision disables the scalar fast path (O(n_kv × ubatch) mask/score materialization) — the TODO in #29824 is this exact cost
- [#30029](https://github.com/ggml-org/llama.cpp/issues/30029) ?????? `bug-unconfirmed`
- [#30028](https://github.com/ggml-org/llama.cpp/issues/30028) Misc. bug: CPU flash attention produces NaN when the first key has an -inf score `bug-unconfirmed`
- [#30026](https://github.com/ggml-org/llama.cpp/issues/30026) Feature Request: Make llm_arch_supports_mixed_batch suitable for C and FFI consumers `enhancement`
- [#30025](https://github.com/ggml-org/llama.cpp/issues/30025) Feature Request: Make mtmd_get_memory_usage suitable for C and FFI consumers `enhancement`
- [#30018](https://github.com/ggml-org/llama.cpp/issues/30018) gemma4 : decode -5% since #29622 (bisected to 0bb496db, Vulkan / Arc B580)
- [#30010](https://github.com/ggml-org/llama.cpp/issues/30010) Eval bug: decode() failed: vk::Queue::submit: ErrorDeviceLost `bug-unconfirmed`
- [#30009](https://github.com/ggml-org/llama.cpp/issues/30009) vulkan: enable add_rms_fusion on Intel - test-backend-ops passes on Arc B580 (Xe2)
- [#30001](https://github.com/ggml-org/llama.cpp/issues/30001) Feature Request: Optimize long context decode: Enable `q8_0-q4_0` FlashAttention kernel without full ALL_QUANTS `enhancement`
- [#30000](https://github.com/ggml-org/llama.cpp/issues/30000) Eval bug: Vulkan prompt processing 16-19% slower for Q8_0 on RTX 5060 Ti (NV_coopmat2) since #25773
- [#29982](https://github.com/ggml-org/llama.cpp/issues/29982) Eval bug: Prompt processing speed halved with Muse Glimmer and dflash draft model after PR 28751 `bug-unconfirmed`
- [#29981](https://github.com/ggml-org/llama.cpp/issues/29981) Feature Request: shared native inference core for server, CLI and embedded applications `enhancement`
- [#29976](https://github.com/ggml-org/llama.cpp/issues/29976) Eval bug: llama-speculative tree mode aborts on missing logits
- [#29975](https://github.com/ggml-org/llama.cpp/issues/29975) Eval bug: llama-speculative changes the distribution at temp > 0

#### 🔒 Closed Issues
- [#27506](https://github.com/ggml-org/llama.cpp/issues/27506) Eval bug: [ROCm] Severe PPL explosion starting from b10040
- [#25333](https://github.com/ggml-org/llama.cpp/issues/25333) [bug] Built-in tools do not work when llama-server is running in router mode (--models-preset)
- [#27257](https://github.com/ggml-org/llama.cpp/issues/27257) Compile bug: Level Zero loader or headers not found, Level Zero support disabled
- [#25835](https://github.com/ggml-org/llama.cpp/issues/25835) Eval bug: VRAM leak with CUDA Graphs(Enable CUDA graphs on Volta+Turing #25749) on V100
- [#27009](https://github.com/ggml-org/llama.cpp/issues/27009) Feature Request: CUDA graphs for multi-slot decode via shape-stable padded u
- [#27612](https://github.com/ggml-org/llama.cpp/issues/27612) Eval bug: QWEN3.8:27b + lemonade server's rocm b10472 + cline (vscode) = tools partially working (MCP failures), while vulkan works flawlessly
- [#26837](https://github.com/ggml-org/llama.cpp/issues/26837) Eval bug: 3 GPU with tensor crashes
- [#29980](https://github.com/ggml-org/llama.cpp/issues/29980) Eval bug: prompt processing ~2x slower on Qwen3.6-35B-A3B since #29184 (fuse shared experts into MMVQ)
- [#27670](https://github.com/ggml-org/llama.cpp/issues/27670) Eval bug: Windows HIP gfx1201: Qwen3.6-35B-A3B NVFP4 loads, then first MUL_MAT fails with ROCm invalid argument
- [#29562](https://github.com/ggml-org/llama.cpp/issues/29562) Deterministic prefill crash at a fixed token position on qwen4exp (Qwen3.8-Flash-Next) under multi-GPU layer split — 4 runtimes, FA on/off, graphs on/off
- [#27187](https://github.com/ggml-org/llama.cpp/issues/27187) Eval bug: llama-server crashes with unhandled std::bad_function_call
- [#27214](https://github.com/ggml-org/llama.cpp/issues/27214) Misc. bug: -no-cnv has no effect on llama-cli; the process then blocks at ">" forever
- [#25200](https://github.com/ggml-org/llama.cpp/issues/25200) Eval bug: llama-server tools using utf8 for a filename instead of cp866 for windows.
- [#25577](https://github.com/ggml-org/llama.cpp/issues/25577) Feature request: generic layer-window hook - run layers [il_start, il_end) with an injectable/extractable boundary residual
- [#27505](https://github.com/ggml-org/llama.cpp/issues/27505) server: deadlock under sustained chat workload on Gemma 4 26B-A4B + Vulkan (regression between v194 and v0.2.0-dev)
- [#29951](https://github.com/ggml-org/llama.cpp/issues/29951) Feature Request: HTTP MCP server support
- [#27515](https://github.com/ggml-org/llama.cpp/issues/27515) Eval bug: --context-shift --no-kv-offload crashes
- [#27563](https://github.com/ggml-org/llama.cpp/issues/27563) Feature Request: Show Model Info dialog for unloaded models in Router Mode
- [#27564](https://github.com/ggml-org/llama.cpp/issues/27564) Feature Request: Model navigation and load controls in Router Model Info dialog (Follow-up to #27563)
- [#27577](https://github.com/ggml-org/llama.cpp/issues/27577) Eval bug: `-sm tensor` crashes with CUDA error on Pascal (sm_61) during graph compute — loads fine, all GPU subsets affected
- [#29909](https://github.com/ggml-org/llama.cpp/issues/29909) Compile bug: undeclared identifier ggml_vk_test_dequant and ggml_vk_test_dequant_matmul when compiling with -DGGML_VULKAN_RUN_TESTS=ON
- [#27989](https://github.com/ggml-org/llama.cpp/issues/27989) webui: Use `toLocaleString()` format consistently across chat message statistics
- [#29866](https://github.com/ggml-org/llama.cpp/issues/29866) Misc. bug: server_tokens::keep_first checks find_chunk(n - 1) instead of find_chunk(n), allowing partial media chunks

### Ollama (`ollama/ollama`)

**Stars:** 182,273 · **Open issues:** 4,175 · **Last push:** <1h ago

On October 6, 2026, Ollama saw significant updates with the merged PRs related to the MLX and llama.cpp repositories, including a version bump for MLX and a version update for llama.cpp. Key improvements were made to reduce model lookup and MLX decision request overhead, and latency issues following GPU idle were addressed, enhancing overall performance. One important new issue reported was the regression in glm-ocr version 0.35.1, which affected table recognition by returning plain text and causing infinite loops. Other notable issues included difficulties running the 'ollama run' command a second time and concerns over the ChatGPT Desktop connection being default-promoted.

#### ✅ Merged PRs
- [#18812](https://github.com/ollama/ollama/pull/18812) mlx: fix patch for recent mlx update
- [#18720](https://github.com/ollama/ollama/pull/18720) MLX: version bump
- [#18761](https://github.com/ollama/ollama/pull/18761) llama.cpp: version update
- [#18806](https://github.com/ollama/ollama/pull/18806) Reduce model lookup and MLX decision request overhead
- [#18807](https://github.com/ollama/ollama/pull/18807) mlx: mitigate high latency after GPU idle
- [#18470](https://github.com/ollama/ollama/pull/18470) test: split create integration tests out
- [#18722](https://github.com/ollama/ollama/pull/18722) openai: keep tool message content parts in one message

#### 🐛 New Issues
- [#18796](https://github.com/ollama/ollama/issues/18796) fails to run on a 2nd 'ollama run' `bug` 💬3
- [#18810](https://github.com/ollama/ollama/issues/18810) glm-ocr regression in 0.35.1: "Table Recognition:" returns plain text / loops, "token repeat limit reached" `bug` 💬2
- [#18808](https://github.com/ollama/ollama/issues/18808) Muse Glimmer 30B GGUF Broken `bug` 💬1
- [#18801](https://github.com/ollama/ollama/issues/18801) Please make the ChatGPT Desktop connection opt-in rather than default-promoted `feature request`
- [#18799](https://github.com/ollama/ollama/issues/18799) envconfig: integer-second durations can wrap into short timeouts
- [#18798](https://github.com/ollama/ollama/issues/18798) Responses API streaming: text followed by a function call shares output_index 0, message never closed, final output reordered
- [#18795](https://github.com/ollama/ollama/issues/18795) Ollama Cloud cached tokens always 0 — prompt_eval_cached_count is dropped by usage extractors `bug`

#### 🔒 Closed Issues
- [#18744](https://github.com/ollama/ollama/issues/18744) MLX engine: weights are unwired ~2 s after each request on macOS 27, so the first request after idle pages them back in
- [#18574](https://github.com/ollama/ollama/issues/18574) RagFlow Chat replies with the word 'assistant' or hangs
- [#18795](https://github.com/ollama/ollama/issues/18795) Ollama Cloud cached tokens always 0 — prompt_eval_cached_count is dropped by usage extractors

### LiteLLM (`BerriAI/litellm`)

**Stars:** 60,173 · **Open issues:** 5,184 · **Last push:** <1h ago

On October 6, 2026, there were no new releases for LiteLLM, but several significant merges were made, including the addition of chatGPT subscription rows for the gpt-6 family, and enhancements to the billing integration and trace analysis capabilities through the lens component. Key fixes were implemented for issues related to synchronization in speech provider calls and traced conversations, ensuring improved performance and stability. Among the newly reported issues, a notable bug was identified regarding the concurrent calls to the /v1/messages endpoint, which sometimes led to server errors despite recording a successful spend log. Overall, the day was primarily focused on maintenance and improvements without major new releases, highlighting continued efforts to refine existing features and address emerging issues.

#### ✅ Merged PRs
- [#44761](https://github.com/BerriAI/litellm/pull/44761) fix(ci): namespace claude session ids in tracing seeds and allowlist /v1/logs on backend
- [#44661](https://github.com/BerriAI/litellm/pull/44661) fix(gemini): stop replaying thinking block signatures to Gemini
- [#44752](https://github.com/BerriAI/litellm/pull/44752) test(integration): basic translation cases for the bedrock_invoke route
- [#44706](https://github.com/BerriAI/litellm/pull/44706) test(e2e): assert the sibling-replica cooldown through the router
- [#44758](https://github.com/BerriAI/litellm/pull/44758) feat(model_prices): add chatgpt subscription rows for the gpt-6 family
- [#44760](https://github.com/BerriAI/litellm/pull/44760) test(lens): use current worker protocol in billing integration
- [#44745](https://github.com/BerriAI/litellm/pull/44745) feat(lens): type to filter the traces agent dropdown
- [#44692](https://github.com/BerriAI/litellm/pull/44692) fix(lens): bound result recovery and preserve partial results
- [#44420](https://github.com/BerriAI/litellm/pull/44420) feat(prometheus): cap series per metric for every labeled metric
- [#44640](https://github.com/BerriAI/litellm/pull/44640) feat(lens): analyze trace workspaces with confined Python and compaction
- [#43396](https://github.com/BerriAI/litellm/pull/43396) feat(ui): configure cache-aware auto routing
- [#44753](https://github.com/BerriAI/litellm/pull/44753) feat(lens): show investigation names in findings table
- [#44741](https://github.com/BerriAI/litellm/pull/44741) test(integration): rename translation runner run to assert_translation
- [#44728](https://github.com/BerriAI/litellm/pull/44728) fix(deps): bump source-map-js, smol-toml, mako, multidict and werkzeug for OSV advisories
- [#44711](https://github.com/BerriAI/litellm/pull/44711) fix(lens): reconstruct native coding agent conversations
- [#44676](https://github.com/BerriAI/litellm/pull/44676) fix(responses): honor request cache controls on chat completions bridged to the Responses API
- [#44663](https://github.com/BerriAI/litellm/pull/44663) test(integration): basic translation cases for the openai_responses route
- [#44664](https://github.com/BerriAI/litellm/pull/44664) feat(ui): support native decisions endpoint in decision playground
- [#44278](https://github.com/BerriAI/litellm/pull/44278) feat: add Reka as an OpenAI-compatible provider
- [#44713](https://github.com/BerriAI/litellm/pull/44713) chore(deps): bump langgraph-sdk from 0.4.2 to 0.4.4
- [#44724](https://github.com/BerriAI/litellm/pull/44724) revert: restore stable/1.100.x to v1.100.4 plus the wolfi-base digest
- [#44719](https://github.com/BerriAI/litellm/pull/44719) test(rust_bridge): expect PartRow start_time and end_time as required LENS_CONTENT fields
- [#44622](https://github.com/BerriAI/litellm/pull/44622) ci: split slow unit shards and build the Rust bridge once per run
- [#44702](https://github.com/BerriAI/litellm/pull/44702) fix(lens): preserve span timestamps in investigation evidence
- [#44708](https://github.com/BerriAI/litellm/pull/44708) fix(build): rebuild the Rust bridge when uv sync sees Rust sources change
- [#44696](https://github.com/BerriAI/litellm/pull/44696) fix(lens): show investigation findings for agent traces
- [#44613](https://github.com/BerriAI/litellm/pull/44613) test(integration): point the scratch upgraded proxy's read replica at the scratch database
- [#44677](https://github.com/BerriAI/litellm/pull/44677) fix(proxy): let a listed team alias win over a same-named key alias in the customer model check
- [#44682](https://github.com/BerriAI/litellm/pull/44682) fix(lens): persist final coverage with source diagnostics
- [#44276](https://github.com/BerriAI/litellm/pull/44276) fix(router): retry a /v1/messages stream the provider drops before the first content chunk
- [#44693](https://github.com/BerriAI/litellm/pull/44693) chore: move PR template to PULL_REQUEST_TEMPLATE/general.md, add rust.md
- [#44683](https://github.com/BerriAI/litellm/pull/44683) refactor(rust): rename litellm-framing crate to litellm-framer
- [#43560](https://github.com/BerriAI/litellm/pull/43560) fix(spend-tracking): stop caching failed spend-log metadata lookups as confirmed misses
- [#44675](https://github.com/BerriAI/litellm/pull/44675) refactor(rust): derive string enum serde through strum and serde_with
- [#44667](https://github.com/BerriAI/litellm/pull/44667) test(integration): basic translation cases for the openai route
- [#44662](https://github.com/BerriAI/litellm/pull/44662) test(integration): basic translation cases for the gemini route
- [#44612](https://github.com/BerriAI/litellm/pull/44612) test(integration): assert the Messages API health probe on Mantle Claude
- [#44672](https://github.com/BerriAI/litellm/pull/44672) test(integration): basic translation cases for the azure route
- [#44610](https://github.com/BerriAI/litellm/pull/44610) feat(proxy): embed enterprise LiteAdmin MCP in LiteLLM images
- [#44670](https://github.com/BerriAI/litellm/pull/44670) fix(bedrock): add priority and flex prices for Grok 4.3, 4.6, 4.7 and Kimi K3
- [#44643](https://github.com/BerriAI/litellm/pull/44643) test(integration): pin the Claude-tokenizer recount for streamed claude-sonnet-5 no-usage cases
- [#44639](https://github.com/BerriAI/litellm/pull/44639) fix(vertex-ai): add deprecation_date to gemini-3.1-flash-lite-image
- [#44645](https://github.com/BerriAI/litellm/pull/44645) fix(lens): make tool steps and conversations readable
- [#44658](https://github.com/BerriAI/litellm/pull/44658) test(integration): azure_ai-route basic translation cases for six Claude models on messages, chat completions and responses
- [#44644](https://github.com/BerriAI/litellm/pull/44644) fix(ui): send null instead of $0 when a team's member default budget is cleared
- [#44665](https://github.com/BerriAI/litellm/pull/44665) feat(ui): declare shared search operators and flush queries on blur
- [#44620](https://github.com/BerriAI/litellm/pull/44620) fix(sso): let CLI and Claude Code gateway sign-in through on DISABLE_ADMIN_UI nodes
- [#43904](https://github.com/BerriAI/litellm/pull/43904) feat(proxy): limit which models an end user can call
- [#44472](https://github.com/BerriAI/litellm/pull/44472) feat(lens): restore compact navigation with live investigation review
- [#44615](https://github.com/BerriAI/litellm/pull/44615) test(integration): run the anthropic /v1/responses basic translation cases now that the bridge echoes request params
- [#44646](https://github.com/BerriAI/litellm/pull/44646) test(integration): bedrock_converse-route basic translation cases for six Claude models on messages, chat completions and responses
- [#44629](https://github.com/BerriAI/litellm/pull/44629) fix(ui): explain why team member reset spend is unavailable instead of hiding it
- [#44458](https://github.com/BerriAI/litellm/pull/44458) fix(cost): bill per-second transcription models outside chat modes
- [#44442](https://github.com/BerriAI/litellm/pull/44442) fix(logging): deduplicate streaming failure callbacks
- [#44632](https://github.com/BerriAI/litellm/pull/44632) fix(gemini): add priority tier audio input price to three Gemini rows
- [#44624](https://github.com/BerriAI/litellm/pull/44624) refactor(proxy): rename management/teams/access.py to authz.py
- [#43854](https://github.com/BerriAI/litellm/pull/43854) fix(openai/realtime): drop model from upstream URL for intent=transcription
- [#44609](https://github.com/BerriAI/litellm/pull/44609) feat(tracing)!: return only data from SQL queries
- [#44625](https://github.com/BerriAI/litellm/pull/44625) chore(harness): drop the unused Any import left in harness options
- [#44627](https://github.com/BerriAI/litellm/pull/44627) fix(harness): drop the unused Any import that fails ruff on main
- [#44438](https://github.com/BerriAI/litellm/pull/44438) fix(proxy): enforce internal-user model creation prohibition
- [#44460](https://github.com/BerriAI/litellm/pull/44460) fix(responses): report truncated bridged output as incomplete and echo request params
- [#44607](https://github.com/BerriAI/litellm/pull/44607) test(integration): anthropic-route basic translation cases for six Claude models on messages, chat completions and responses
- [#44604](https://github.com/BerriAI/litellm/pull/44604) fix(ui): restore inline Lens onboarding and responsive layout
- [#44478](https://github.com/BerriAI/litellm/pull/44478) refactor(types): replace Any with proven types in 137 files
- [#44603](https://github.com/BerriAI/litellm/pull/44603) fix(ui): make mobile sidebar and top bar responsive
- [#44461](https://github.com/BerriAI/litellm/pull/44461) ci: run unit selections from GHA test-path and drop the CircleCI unit jobs
- [#44591](https://github.com/BerriAI/litellm/pull/44591) refactor(tracing): generate existing HTTP request models from Rust schemas
- [#42645](https://github.com/BerriAI/litellm/pull/42645) feat(guardrails): add llm shield pii redaction and rehydration guardrail
- [#37777](https://github.com/BerriAI/litellm/pull/37777) fix(mcp): bind OAuth clients to their upstream issuer
- [#44436](https://github.com/BerriAI/litellm/pull/44436) fix(auto-router): align preview and serving default resolution
- [#44542](https://github.com/BerriAI/litellm/pull/44542) fix(caching): key response cache by router model group in litellm_metadata
- [#44477](https://github.com/BerriAI/litellm/pull/44477) chore!: retire the integrated ROI calculator
- [#44453](https://github.com/BerriAI/litellm/pull/44453) ci: move Postgres, MCP and Redis suites to CircleCI integration
- [#44585](https://github.com/BerriAI/litellm/pull/44585) fix(azure): set gpt-4o-transcribe retirement date from the retirement schedule
- [#44584](https://github.com/BerriAI/litellm/pull/44584) refactor(ui): extract shared timeline and time-range controls
- [#44580](https://github.com/BerriAI/litellm/pull/44580) refactor(rust): track ClickHouse migrations in a checksummed ledger
- [#44502](https://github.com/BerriAI/litellm/pull/44502) fix(ui): remove Top models by task card from Model Leaderboard
- [#44579](https://github.com/BerriAI/litellm/pull/44579) feat(ui): add persistent columns and loading skeletons to Lens runs
- [#44567](https://github.com/BerriAI/litellm/pull/44567) chore(cost-map): add azure retirement dates for gpt-4o-realtime-preview-2024-10-01 and jamba-instruct
- [#44556](https://github.com/BerriAI/litellm/pull/44556) refactor(mcp): fix Sequence/list return mismatch and collapse record_listed_tools wrapper
- [#43839](https://github.com/BerriAI/litellm/pull/43839) fix(guardrails): run the end-of-stream post_call scan when the client disconnects mid-stream
- [#42700](https://github.com/BerriAI/litellm/pull/42700) feat(proxy): add LITELLM_FIPS_MODE startup gate with provider assertion and loud password migration failure
- [#44537](https://github.com/BerriAI/litellm/pull/44537) refactor(ui): route dashboard URL state through nuqs parsers

#### 🐛 New Issues
- [#44546](https://github.com/BerriAI/litellm/issues/44546) [Bug]: aspeech calls a synchronous speech provider twice (Gemini TTS billed twice upstream) `llm translation` 💬3
- [#44560](https://github.com/BerriAI/litellm/issues/44560) [Bug]: output_config.effort is not translated to reasoning_effort for hosted_vllm via /v1/messages `bug` `llm translation` `claude code` 💬3
- [#44748](https://github.com/BerriAI/litellm/issues/44748) [Bug]: concurrent /v1/messages calls sometimes answer 500 "dictionary changed size during iteration" while the spend row records a success `bug` `llm translation` 💬1
- [#44685](https://github.com/BerriAI/litellm/issues/44685) [Bug]: Native OpenAI Responses calls can write duplicate spend-log rows in v1.102.0 `llm translation` 💬1
- [#44657](https://github.com/BerriAI/litellm/issues/44657) [Bug]: /v1/responses streaming: reasoning output_item.done omits encrypted_content (Bedrock Claude), so clients replay unsigned thinking and thinking is dropped on tool turns `bug` `llm translation` 💬1
- [#44559](https://github.com/BerriAI/litellm/issues/44559) [Bug]: OTel cost metric is not recorded when the cost is 0 💬1
- [#44575](https://github.com/BerriAI/litellm/issues/44575) [Bug]: latency-based-routing: LowestLatencyLoggingHandler callback not reliably registered, causing empty {model_group}_map latency cache `bug` 💬1
- [#44558](https://github.com/BerriAI/litellm/issues/44558) [Bug]: OTel GenAI histograms use the SDK's default (millisecond) bucket boundaries; seconds-valued durations collapse into one bucket 💬1
- [#44549](https://github.com/BerriAI/litellm/issues/44549) [Bug]: Gemini transcription repeats /v1beta when the deployment api_base already carries it (404) `llm translation` 💬1
- [#44540](https://github.com/BerriAI/litellm/issues/44540) [Bug]: Gemini TTS on chat completions rejects audio.format "wav", though gemini-3.8 TTS models return WAV `llm translation` 💬1
- [#44543](https://github.com/BerriAI/litellm/issues/44543) [Bug]: gpt-transcribe is routed to the whisper config, which sends verbose_json and gets a 400 `llm translation` 💬1
- [#44766](https://github.com/BerriAI/litellm/issues/44766) [Bug]: /organization/member_add returns 500 whenever user_email is sent for a user_id that does not exist
- [#44755](https://github.com/BerriAI/litellm/issues/44755) [Bug]: streamed Vertex AI pass-through spend ignores the regional endpoint uplift `bug` `llm translation`
- [#44742](https://github.com/BerriAI/litellm/issues/44742) [Bug]: streamed /v1/messages call the provider drops mid-stream writes no spend log row and skips the failure hooks `bug` `llm translation`
- [#44743](https://github.com/BerriAI/litellm/issues/44743) [Bug]: x-litellm-response-cost on non-streamed /v1/messages sometimes prices image output tokens at the text rate `bug` `llm translation`
- [#44694](https://github.com/BerriAI/litellm/issues/44694) [Bug]: Bedrock request metadata forwarding does not work for /embeddings `bug` `llm translation`
- [#44678](https://github.com/BerriAI/litellm/issues/44678) [Feature]: Add CoralBricks as a native provider `llm translation`
- [#44655](https://github.com/BerriAI/litellm/issues/44655) [Bug]: Response cache stores a chat completion with empty `choices`; each cache hit then returns 500 until the TTL ends `llm translation`
- [#44649](https://github.com/BerriAI/litellm/issues/44649) [Bug]: InfinityRerankConfig.transform_rerank_response double-wraps document dict from Cohere-v1-dialect rerank surfaces (pydantic ValidationError) `llm translation`
- [#44641](https://github.com/BerriAI/litellm/issues/44641) [Bug]: ollama_chat sends frequency_penalty as repeat_penalty and rejects presence_penalty
- [#44636](https://github.com/BerriAI/litellm/issues/44636) [Bug]: Hanging-request detector alerts completed requests and misses hangs behind the oldest batch
- [#44598](https://github.com/BerriAI/litellm/issues/44598) [Bug]: Claude structured outputs are dropped after output_config.format is rejected `llm translation`
- [#44623](https://github.com/BerriAI/litellm/issues/44623) [Bug]: uv.lock pins uvloop 0.22.1, which can close unrelated sockets after a cancelled connect `llm translation`
- [#44602](https://github.com/BerriAI/litellm/issues/44602) [Feature]: Accept 24 kHz input audio on Alibaba Token Plan realtime `llm translation`
- [#44589](https://github.com/BerriAI/litellm/issues/44589) [Feature]: Size-based spend-log cleanup with resumable runs and physical storage reclamation
- [#44578](https://github.com/BerriAI/litellm/issues/44578) [Feature]: Better Support for Local Cost Maps and hot reloads of costmap `enhancement`
- [#44566](https://github.com/BerriAI/litellm/issues/44566) Feature request: serve same-origin ZIP archives for Claude Desktop marketplace plugins `claude code`
- [#44568](https://github.com/BerriAI/litellm/issues/44568) Feature request: serve same-origin ZIP archives for Claude Desktop marketplace plugins `claude code`
- [#44557](https://github.com/BerriAI/litellm/issues/44557) [Bug]: JSON-configured provider scaleway/ rejects tools for chat completions (UnsupportedParamsError) `llm translation`
- [#44555](https://github.com/BerriAI/litellm/issues/44555) [Feature]: Add support to set budget based on monthly token usage per team/tenant `enhancement`
- [#44547](https://github.com/BerriAI/litellm/issues/44547) [Bug]: /v1/audio/speech through the Gemini speech-to-completion bridge writes no spend log `llm translation`
- [#44541](https://github.com/BerriAI/litellm/issues/44541) [Bug]: /v1/audio/speech returns a double WAV header for gemini-3.8 TTS models `llm translation`
- [#44539](https://github.com/BerriAI/litellm/issues/44539) [Bug]: Gemini chat completions drop `audioTranscription` parts (gemini-3.5-transcribe returns content=None) `llm translation`
- [#44538](https://github.com/BerriAI/litellm/issues/44538) [Bug]: /v1/audio/transcriptions with response_format=text logs zero usage `llm translation`

#### 🔒 Closed Issues
- [#44154](https://github.com/BerriAI/litellm/issues/44154) [Bug]: Background health check results are attributed to every deployment sharing the same `litellm_params.model`
- [#31557](https://github.com/BerriAI/litellm/issues/31557) Fallback chain silently fails when fallback model has smaller context window than primary
- [#31595](https://github.com/BerriAI/litellm/issues/31595) [Feature]: ADEPT Router for Template-Based Routing and SLM Distillation from Production Traffic
- [#31678](https://github.com/BerriAI/litellm/issues/31678) [Bug]: enable_weighted_failover does nothing on the /v1/messages path
- [#44685](https://github.com/BerriAI/litellm/issues/44685) [Bug]: Native OpenAI Responses calls can write duplicate spend-log rows in v1.102.0
- [#31682](https://github.com/BerriAI/litellm/issues/31682) baderror
- [#31692](https://github.com/BerriAI/litellm/issues/31692) [Feature]: add regional pricing for Bedrock qwen.qwen3-next-80b-a3b in eu-west-1
- [#31699](https://github.com/BerriAI/litellm/issues/31699) [Bug]: googleMaps + response_format on Vertex AI sends `responseFormat` (unsupported field), causing ~65-75% flaky 400 errors under concurrent load
- [#31700](https://github.com/BerriAI/litellm/issues/31700) [Bug]: Admin UI Playground model dropdown ignores Virtual Key model restrictions
- [#31702](https://github.com/BerriAI/litellm/issues/31702) salom
- [#31714](https://github.com/BerriAI/litellm/issues/31714) [Bug]: Fireworks cache-read tokens are not charged at cache-read rate
- [#31722](https://github.com/BerriAI/litellm/issues/31722) Streaming: response `model` is overridden to the requested model after a fallback (served deployment masked); non-streaming is correct
- [#42988](https://github.com/BerriAI/litellm/issues/42988) [Bug]: Streaming failure callbacks bypass duplicate logging guard and enqueue repeated S3 uploads
- [#44238](https://github.com/BerriAI/litellm/issues/44238) [Bug]: /v1/messages streaming: transport drop before first content is never retried (num_retries/max_retries ignored), surfaces as HTTP 500
- [#44081](https://github.com/BerriAI/litellm/issues/44081) Responses API bridge: `incomplete_details` always null, truncated output reported as `completed`, request sampling params not echoed
- [#44566](https://github.com/BerriAI/litellm/issues/44566) Feature request: serve same-origin ZIP archives for Claude Desktop marketplace plugins

### Unsloth (`unslothai/unsloth`)

**Stars:** 77,243 · **Open issues:** 916 · **Last push:** <1h ago

On October 6, 2026, there were no new releases for Unsloth, but several significant updates were merged into the codebase. Notable changes include the adjustment of the Studio chat interface to eliminate empty message bubbles under annotation-only messages and the enhancement of toast notifications with the composer's shadow. Additionally, the installation process for kernels has been improved by adding flash-attn and defaulting to installing every kernel. A new issue has emerged concerning the Qwen3.5 SFT model, where the loss goes NaN at a deterministic training step, raising concerns about training consistency. Overall, the day involved routine maintenance with a focus on improving user experience and backend functionalities.

#### ✅ Merged PRs
- [#12782](https://github.com/unslothai/unsloth/pull/12782) studio: even the gaps between the window button glyphs
- [#12781](https://github.com/unslothai/unsloth/pull/12781) Branch picker chevrons: give back the 24px hit target in the same 20px slot
- [#12744](https://github.com/unslothai/unsloth/pull/12744) install-kernels: add flash-attn and install every kernel by default
- [#12800](https://github.com/unslothai/unsloth/pull/12800) Studio: give toast notifications the composer's shadow
- [#12799](https://github.com/unslothai/unsloth/pull/12799) Studio chat: no empty bubble under annotation-only messages
- [#12757](https://github.com/unslothai/unsloth/pull/12757) Load the compiled class when auto_model is a concrete class
- [#12784](https://github.com/unslothai/unsloth/pull/12784) scan-packages baseline: re-review datasets 5.1.0's readline loop
- [#12783](https://github.com/unslothai/unsloth/pull/12783) MLX backend tests: answer zoo's _fusion_modules in the inference stub
- [#12746](https://github.com/unslothai/unsloth/pull/12746) Studio model picker: keep rows full width with overlay scrollbars, roomier On Device columns
- [#12715](https://github.com/unslothai/unsloth/pull/12715) Studio: use the edge Gemma 4 template for the QAT E2B/E4B repos
- [#12771](https://github.com/unslothai/unsloth/pull/12771) Provider URL validation tests: count only the lookups the code under test made
- [#12769](https://github.com/unslothai/unsloth/pull/12769) version-compat latest lanes: install requests, stop shadowing torchcodec
- [#12760](https://github.com/unslothai/unsloth/pull/12760) Transcript stream: never drop a phase change behind a newer update
- [#12763](https://github.com/unslothai/unsloth/pull/12763) Re-measure the Studio startup budget after the Sandbox tab and action bar rework
- [#12761](https://github.com/unslothai/unsloth/pull/12761) SDPA packed-segment test: gate the CUDA memory test on a real GPU
- [#12748](https://github.com/unslothai/unsloth/pull/12748) studiobench: delete through the reply's More menu, where #12735 moved it
- [#12747](https://github.com/unslothai/unsloth/pull/12747) Recount harness: bind the loader's msgs the history restore now estimates from
- [#12749](https://github.com/unslothai/unsloth/pull/12749) Live Monitor models disk: translate its labels and count every tile
- [#12736](https://github.com/unslothai/unsloth/pull/12736) Studio: seam-free tiled decode for every image VAE whose stock tiles fall under the floor (HunyuanImage-2.1 grid, Qwen-Image, slivers)
- [#12751](https://github.com/unslothai/unsloth/pull/12751) Deep research contract: follow the research Delete gate into the More menu item
- [#12739](https://github.com/unslothai/unsloth/pull/12739) Run bitsandbytes NF4 Linear4bit through Unsloth's NF4 kernels
- [#8319](https://github.com/unslothai/unsloth/pull/8319) fix: enable XPU support for tests with agnostic test selection
- [#12691](https://github.com/unslothai/unsloth/pull/12691) Studio: keep Wan2.2-5B's leading blocks resident under group offload
- [#12497](https://github.com/unslothai/unsloth/pull/12497) studio: enable anthropic studio tools
- [#12550](https://github.com/unslothai/unsloth/pull/12550) Studio: experimental Int8 Prefill run setting for MLX models
- [#12706](https://github.com/unslothai/unsloth/pull/12706) Unsloth Desktop/Studio audio: follow-ups from testing the Clone, Transcribe, Edit, Separate and Convert pages
- [#9399](https://github.com/unslothai/unsloth/pull/9399) Studio: extend automatic context compaction to MLX
- [#12741](https://github.com/unslothai/unsloth/pull/12741) offload_layers='auto': plan for batch size 2, re-plan at Trainer init for the real batch
- [#12740](https://github.com/unslothai/unsloth/pull/12740) SDPA: attend packed rows per segment instead of under a dense mask (2.9x less memory, 2.5x faster without flash-attn / xformers)
- [#12684](https://github.com/unslothai/unsloth/pull/12684) Studio: int8 ConvRot text encoder for Qwen-Image-2.1, fp8 fallback
- [#12347](https://github.com/unslothai/unsloth/pull/12347) Studio: in-app browser panel for chat
- [#10803](https://github.com/unslothai/unsloth/pull/10803) Studio: stop an IPv6 blackhole from killing the backend
- [#12707](https://github.com/unslothai/unsloth/pull/12707) Studio: whole-step CUDA graphs under offload on top of per-block graphs (L4 FLUX.1 16 GB 10% faster, HunyuanVideo-1.5 1 GiB lighter)
- [#12721](https://github.com/unslothai/unsloth/pull/12721) perf(studio): keep the MLX GPU warm for a bounded time after generation
- [#12694](https://github.com/unslothai/unsloth/pull/12694) Studio: per-block CUDA graphs under every offload mode, and compile below the offload hooks
- [#12734](https://github.com/unslothai/unsloth/pull/12734) Studio browser: annotate code on demand, no idle desktop polling, smaller page cache on low-memory machines
- [#8180](https://github.com/unslothai/unsloth/pull/8180) unsloth start vibe: launch Mistral Vibe against a running Unsloth server
- [#12215](https://github.com/unslothai/unsloth/pull/12215) Studio: add a Sandbox settings tab with a Windows MXC opt-in and one-click host preparation
- [#12272](https://github.com/unslothai/unsloth/pull/12272) Studio: one-click OS sandbox setup, faster sandbox checks, isolated cmd fallback on Windows
- [#7825](https://github.com/unslothai/unsloth/pull/7825) Windows installer: prefer uv-managed Python over global winget installs
- [#12698](https://github.com/unslothai/unsloth/pull/12698) Studio: seam-free LTX-2.3 video decode (untiled when it fits, VRAM-sized tiles otherwise)
- [#10830](https://github.com/unslothai/unsloth/pull/10830) Studio: resolve trust_remote_code off the event loop in /api/inference/status
- [#9281](https://github.com/unslothai/unsloth/pull/9281) unsloth: explain the real fix when nvidia-smi sees a GPU torch cannot use
- [#12735](https://github.com/unslothai/unsloth/pull/12735) Studio: tidy the message action bars, branch picker and fork icon
- [#12687](https://github.com/unslothai/unsloth/pull/12687) Studio: keep streamed int8 denoisers resident up to the measured fit
- [#12702](https://github.com/unslothai/unsloth/pull/12702) Studio: chunked VAE attention on ROCm when no fused kernel takes head dim 512 (fixes FLUX.1 2048x2048 OOM)
- [#11574](https://github.com/unslothai/unsloth/pull/11574) Studio: keep the exit code and the first error line when training dies
- [#9475](https://github.com/unslothai/unsloth/pull/9475) feat(studio): show estimated context usage before model load
- [#10182](https://github.com/unslothai/unsloth/pull/10182) fix(llama-prebuilt): print the correct hint for access-denied renames (WinError 5) instead of the scanner theory
- [#11430](https://github.com/unslothai/unsloth/pull/11430) Studio: cap tool-result text at 256 KB before it reaches the model
- [#12732](https://github.com/unslothai/unsloth/pull/12732) Add unsloth install-kernels for prebuilt xformers / causal_conv1d / mamba_ssm wheels
- [#9715](https://github.com/unslothai/unsloth/pull/9715) studio: dump the backend's own thread stacks while a stall is in progress
- [#12179](https://github.com/unslothai/unsloth/pull/12179) Studio: keep a list item's first paragraph on its bullet in fetched pages
- [#8729](https://github.com/unslothai/unsloth/pull/8729) Tell npm permission failures apart from a blocked registry (#8725)
- [#12692](https://github.com/unslothai/unsloth/pull/12692) Studio: "Denoising please wait..." status with step count, and a live denoising preview at no speed cost
- [#12711](https://github.com/unslothai/unsloth/pull/12711) Studio: keep using an already-downloaded prequant .pt; new users get the .safetensors twin
- [#12738](https://github.com/unslothai/unsloth/pull/12738) studio: keep the close glyph at its original size
- [#12703](https://github.com/unslothai/unsloth/pull/12703) Studio: flash attention by default for FLUX.2-klein on ROCm gfx11
- [#12701](https://github.com/unslothai/unsloth/pull/12701) Studio: fused RoPE for FLUX on ROCm (FLUX.2-klein 8% faster per image, pixel-identical)
- [#8747](https://github.com/unslothai/unsloth/pull/8747) Guard OAuth providers from legacy desktop clients
- [#12693](https://github.com/unslothai/unsloth/pull/12693) Studio: shared fused ConvRot act-quant kernel (L4 7.8% faster) and a G4 int8 GEMM tile table
- [#12612](https://github.com/unslothai/unsloth/pull/12612) Studio: make ConvRot the Z-Image-Turbo INT8 default
- [#12195](https://github.com/unslothai/unsloth/pull/12195) Studio: accept a SKILL.md saved with a UTF-8 byte order mark
- [#10084](https://github.com/unslothai/unsloth/pull/10084) fix(studio): allow loopback CORS origins and custom origin overrides in desktop mode
- [#10831](https://github.com/unslothai/unsloth/pull/10831) Manual placement: log the --fit verdict the launch actually carries
- [#10395](https://github.com/unslothai/unsloth/pull/10395) Studio: support source code files in workspace folders and project knowledge bases
- [#10583](https://github.com/unslothai/unsloth/pull/10583) fix: do not permanently purge RAG when a project is recreated
- [#6989](https://github.com/unslothai/unsloth/pull/6989) Studio: opt-in recursive scanning for custom model folders
- [#12104](https://github.com/unslothai/unsloth/pull/12104) Fix incomplete links showing [blocked] during chat streaming
- [#10075](https://github.com/unslothai/unsloth/pull/10075) studio: report a denied rename as a possible ACL fault, not a scanner
- [#12729](https://github.com/unslothai/unsloth/pull/12729) studio: round the window button glyphs
- [#12696](https://github.com/unslothai/unsloth/pull/12696) Studio: seam-free VAE tiles for Qwen-Image-2.1 on low-VRAM tiers (fixes thin horizontal / vertical lines)
- [#7008](https://github.com/unslothai/unsloth/pull/7008) Studio: hide iq4_nl KV cache where llama.cpp runs its attention on the CPU (#6272)
- [#8229](https://github.com/unslothai/unsloth/pull/8229) Fix attention support detection for trust_remote_code models
- [#12690](https://github.com/unslothai/unsloth/pull/12690) Studio: int8 activations on T4 for Qwen-Image (2.5x per step)
- [#12726](https://github.com/unslothai/unsloth/pull/12726) Offloaded embedding: one graph under compiled inference
- [#12103](https://github.com/unslothai/unsloth/pull/12103) Studio: return a missing number in a recipe dataset page as null
- [#12180](https://github.com/unslothai/unsloth/pull/12180) Studio: show a JSON seed's values as written in the Data Recipe preview
- [#11956](https://github.com/unslothai/unsloth/pull/11956) CLI: show a thinking model's reasoning with --think when attached to a running Unsloth
- [#9924](https://github.com/unslothai/unsloth/pull/9924) studio: report why launcher recovery failed, not that it was absent
- [#12727](https://github.com/unslothai/unsloth/pull/12727) Studio: resolve GET /v1/models/<id>:<quant> for an on-disk quant
- [#12398](https://github.com/unslothai/unsloth/pull/12398) Studio: bake a relocatable RUNPATH into the Linux llama.cpp source build
- [#10609](https://github.com/unslothai/unsloth/pull/10609) Studio: bound the code highlighter cache for tool cells, previews and READMEs
- [#12198](https://github.com/unslothai/unsloth/pull/12198) Studio: open a pasted-text upload without its <pasted_text> wrapper
- [#6601](https://github.com/unslothai/unsloth/pull/6601) fix(studio): accessibility improvements for screen reader users (NVDA/JAWS)
- [#12724](https://github.com/unslothai/unsloth/pull/12724) Studio: show the models drive in the Live Monitor when it is not the system disk
- [#9084](https://github.com/unslothai/unsloth/pull/9084) feat(install): add Intel GPU (XPU/SYCL) auto-detection and llama.cpp SYCL compilation
- [#12274](https://github.com/unslothai/unsloth/pull/12274) tests: skip two version_compat suites where the daily sweep has no torch
- [#9365](https://github.com/unslothai/unsloth/pull/9365) Studio: find a hand-added mmproj when the GGUF repo publishes none
- [#9873](https://github.com/unslothai/unsloth/pull/9873) Studio: pipeline linked-folder RAG ingestion
- [#5958](https://github.com/unslothai/unsloth/pull/5958) Add Qwen3.5 model defaults for Studio
- [#12728](https://github.com/unslothai/unsloth/pull/12728) Studio browser: hide tab menu items that don't apply, use the toolbar's reload icon
- [#10688](https://github.com/unslothai/unsloth/pull/10688) fix: stop false link-definition probes forcing full-document renders
- [#9703](https://github.com/unslothai/unsloth/pull/9703) fix: OOM for GPT OSS 120b on 183GB of VRAM (B200)
- [#9706](https://github.com/unslothai/unsloth/pull/9706) fix: [Bug] Tool_Calling does not work properly
- [#9265](https://github.com/unslothai/unsloth/pull/9265) [CHORE] Comment out dead LoRA/GELU code paths
- [#9528](https://github.com/unslothai/unsloth/pull/9528) Studio: separate active context from processed tokens
- [#10511](https://github.com/unslothai/unsloth/pull/10511) Studio: keep Switch Back visible for a snapshot-path chat
- [#9324](https://github.com/unslothai/unsloth/pull/9324) Track the pinned upstream UEmbed reference behind the parity test
- [#9323](https://github.com/unslothai/unsloth/pull/9323) Add the UEmbed unified training loss and its fine-tuning scripts
- [#10030](https://github.com/unslothai/unsloth/pull/10030) Load oci:// models via llmman serve
- [#9704](https://github.com/unslothai/unsloth/pull/9704) fix: [Bug] import unsloth failed and shows UnicodeDecodeError
- [#9689](https://github.com/unslothai/unsloth/pull/9689) Studio: bound repeated llama-server respawns after SIGKILL
- [#9647](https://github.com/unslothai/unsloth/pull/9647) studio: add keyboard shortcuts for UI zoom and scaling (Cmd/Ctrl + / - / 0)
- [#9361](https://github.com/unslothai/unsloth/pull/9361) Don't reuse a leftover incomplete isolated Node tree
- [#9322](https://github.com/unslothai/unsloth/pull/9322) Wire UEmbed offset pooling and SPLADE sparse output into FastSentenceTransformer
- [#9007](https://github.com/unslothai/unsloth/pull/9007) Windows: keep uv cache under the Studio root
- [#9363](https://github.com/unslothai/unsloth/pull/9363) Document sharing models and projects across login users
- [#9313](https://github.com/unslothai/unsloth/pull/9313) Studio: delete the models Studio only discovered, support files included
- [#10607](https://github.com/unslothai/unsloth/pull/10607) Studio: stop the SWA config probe from adding a phantom base model and refetching every load
- [#9616](https://github.com/unslothai/unsloth/pull/9616) Fix expected non-streaming cancellation handling
- [#10469](https://github.com/unslothai/unsloth/pull/10469) Studio: show the eject toast before the running-chats check
- [#10050](https://github.com/unslothai/unsloth/pull/10050) Studio: load S3 audio datasets — download the audio beside its manifest and point the manifest at it
- [#10303](https://github.com/unslothai/unsloth/pull/10303) feat(studio): type-to-activate search, composer and prompt inputs
- [#8850](https://github.com/unslothai/unsloth/pull/8850) Studio: search, sort, multi-select and collapse for project sources
- [#4456](https://github.com/unslothai/unsloth/pull/4456) studio: install torchcodec from the PyTorch cuXXX index on Linux aarch64
- [#5274](https://github.com/unslothai/unsloth/pull/5274) fix(install): route Linux Intel GPU hosts away from CPU-only torch
- [#10442](https://github.com/unslothai/unsloth/pull/10442) Studio: mention the leftover uv cache in uninstall
- [#8906](https://github.com/unslothai/unsloth/pull/8906) fix: pass force_download through to snapshot_download in _get_statistics
- [#8914](https://github.com/unslothai/unsloth/pull/8914) Fix connected/cloud Max Tokens fallback for MiniMax M3
- [#8970](https://github.com/unslothai/unsloth/pull/8970) [Feature] Reasoning effort slider / LM Studio Link Provider / Open Specific folder for project
- [#7051](https://github.com/unslothai/unsloth/pull/7051) feat: add Gefen-X (gefenx / gefenx_muon) optimizer integration
- [#4278](https://github.com/unslothai/unsloth/pull/4278) feat: add support for Phi-4-multimodal-instruct
- [#7605](https://github.com/unslothai/unsloth/pull/7605) docs: add 4GB VRAM QLoRA fine-tuning guide for consumer GPUs
- [#7665](https://github.com/unslothai/unsloth/pull/7665) Support pre-registered MCP OAuth clients
- [#10274](https://github.com/unslothai/unsloth/pull/10274) Prepare an exhausted call before the budget gate, so its replay parses
- [#6740](https://github.com/unslothai/unsloth/pull/6740) tests(version_compat): AST-based symbol checks and per-model drift coverage
- [#12699](https://github.com/unslothai/unsloth/pull/12699) Studio: stop writing the date into user messages
- [#10043](https://github.com/unslothai/unsloth/pull/10043) Chat: show the Thinking control for Ollama models that report the thinking capability
- [#10467](https://github.com/unslothai/unsloth/pull/10467) Studio: recount tokens when status sync adopts a resident GGUF
- [#12725](https://github.com/unslothai/unsloth/pull/12725) Revert "Studio: add per-model custom llama.cpp INI configuration (#10783)"
- [#9621](https://github.com/unslothai/unsloth/pull/9621) Studio: avoid duplicate llama-server option families
- [#12713](https://github.com/unslothai/unsloth/pull/12713) Allow compiled decode for gpt-oss
- [#9468](https://github.com/unslothai/unsloth/pull/9468) Migrate Anthropic smoke probes to v1
- [#10392](https://github.com/unslothai/unsloth/pull/10392) fix: correct easiet typo, README grammar, and duplicate issue-template frontmatter
- [#10069](https://github.com/unslothai/unsloth/pull/10069) fix(studio): serialize SQLite connection closes (#10022)
- [#9169](https://github.com/unslothai/unsloth/pull/9169) fix(studio): deduplicate local models by path
- [#9215](https://github.com/unslothai/unsloth/pull/9215) fix: allow attachment-only messages in prompt queue
- [#12720](https://github.com/unslothai/unsloth/pull/12720) Studio: panel-left / panel-right icons for open sidebars, API and home-wifi icons
- [#12722](https://github.com/unslothai/unsloth/pull/12722) Studio: fade Run settings at the edges it scrolls past
- [#12686](https://github.com/unslothai/unsloth/pull/12686) Studio: keep FlashAttention 4 inside a fullgraph compile
- [#12351](https://github.com/unslothai/unsloth/pull/12351) fix: preserve logits in fast cross entropy backward
- [#12528](https://github.com/unslothai/unsloth/pull/12528) fix: preserve shared upstream gradients in RoPE backward
- [#12688](https://github.com/unslothai/unsloth/pull/12688) Studio: request stream usage from llama.cpp connections so the context bar fills
- [#12705](https://github.com/unslothai/unsloth/pull/12705) Rename block_swap_layers to offload_layers

#### 🐛 New Issues
- [#12737](https://github.com/unslothai/unsloth/issues/12737) Qwen3.5 SFT: loss goes NaN at a deterministic step (any LR/optimizer/seed) — Qwen3 trains clean on same data `feature request` `bug` 💬2
- [#12745](https://github.com/unslothai/unsloth/issues/12745) [Bug] Images tab only show Reference/Edit, etc sections if its pinned to the sidebar `feature request` `bug` 💬1
- [#12798](https://github.com/unslothai/unsloth/issues/12798) pop up to update not updating keep poping up
- [#12768](https://github.com/unslothai/unsloth/issues/12768) [Feature] AirLLM low memory mode `feature request`
- [#12730](https://github.com/unslothai/unsloth/issues/12730) [Feature] Qwen 3.8 27b cannot see image generated by builtin tool call `feature request`
- [#12719](https://github.com/unslothai/unsloth/issues/12719) Make dial_host idempotent for already-bracketed IPv6 literals
- [#12714](https://github.com/unslothai/unsloth/issues/12714) drift loss curve for gemma4-12b text-only training

#### 🔒 Closed Issues
- [#8881](https://github.com/unslothai/unsloth/issues/8881) [Feature] reasoning effort slider / selector
- [#4073](https://github.com/unslothai/unsloth/issues/4073) [Feature Request] fast inference for LFM (and Mamba models)
- [#7527](https://github.com/unslothai/unsloth/issues/7527) [Bug] Fix Nemotron Attention Handling
- [#4539](https://github.com/unslothai/unsloth/issues/4539) [Feature] Unsloth/ Whisper/Large-v3 - S3 Bucket connection
- [#12372](https://github.com/unslothai/unsloth/issues/12372) [Unsloth Bug] Studio pages mmproj-F16.gguf from disk during generation — severe t/s regression since latest update; extra args shadow-stripped and --mlock rejected
- [#12708](https://github.com/unslothai/unsloth/issues/12708) [Bug] Think Toggle Fails to Suppress Internal Reasoning for gemma-4-E4B-it-qat-GGUF · UD-Q4_K_XL (Only Thought Process is Outputted)
- [#11785](https://github.com/unslothai/unsloth/issues/11785) [Bug] Exporting fine-tuned model to GGUF fails due to read-only permission in hugging face cache in unsloth studio
- [#8931](https://github.com/unslothai/unsloth/issues/8931) [Bug] Unsloth studio: install for Intel GPU (not only with vulkan llama.cpp)
- [#8798](https://github.com/unslothai/unsloth/issues/8798) [Feature] Desktop/Studio: Export and import downloaded models (.unsloth portable archive) for backup or transfer between computers
- [#8722](https://github.com/unslothai/unsloth/issues/8722) [Bug] ChatGPT/Codex subscription connection requires and rejects API key simultaneously
- [#6272](https://github.com/unslothai/unsloth/issues/6272) [Bug] Title: Q4_1 KV-cache causes 99% CPU load and 96°C thermal throttling . F16 KV-cache works fine
- [#3092](https://github.com/unslothai/unsloth/issues/3092) [Bug] Tool_Calling does not work properly
- [#10047](https://github.com/unslothai/unsloth/issues/10047) Issue with running Deepseek model causing another download
- [#10338](https://github.com/unslothai/unsloth/issues/10338) [Bug] Pressing "Switch Back" on a chat that was originally started with a local model, loads the model with 4096 context.
- [#9179](https://github.com/unslothai/unsloth/issues/9179) [Bug] When installing with --with-llama-cpp-dir Whisper.cpp fails to install
- [#9880](https://github.com/unslothai/unsloth/issues/9880) [Feature] Unsloth Desktop: add cors support or expose cors related options from llama.cpp
- [#6371](https://github.com/unslothai/unsloth/issues/6371) [Feature] Please add 2 options to enable Unsloth Studio to (1) scan all sub-directories, or even (2) scan the entier hard disks for LLMs and index them
- [#9646](https://github.com/unslothai/unsloth/issues/9646) [Accessibility] [Studio] UI Zoom & Scaling keyboard shortcuts (Cmd/Ctrl + / - / 0)
- [#9651](https://github.com/unslothai/unsloth/issues/9651) [Bug] fix the un-install file
- [#11388](https://github.com/unslothai/unsloth/issues/11388) [Feature] Remove Path information from Password Failure on Remote Access
- [#9327](https://github.com/unslothai/unsloth/issues/9327) [Feature] Kindly Expose Context Consumption Through API
- [#7802](https://github.com/unslothai/unsloth/issues/7802) [Bug] Installs Python on Windows
- [#9330](https://github.com/unslothai/unsloth/issues/9330) [Feature] Show estimated context usage before model load
- [#10300](https://github.com/unslothai/unsloth/issues/10300) [Bug] Workspace files with extensions (.cs/.php/.js/…) are still inaccessible for reading, writing, and indexing — continuation of topic #8843.
- [#9230](https://github.com/unslothai/unsloth/issues/9230) Studio: tool code cells still stream through the unbounded @streamdown/code token cache
- [#10529](https://github.com/unslothai/unsloth/issues/10529) Studio: an unanchored link definition probe can put an ordinary reply on the full-document render path
- [#9294](https://github.com/unslothai/unsloth/issues/9294) [Feature]Allow removal of old models that are no longer used
- [#10339](https://github.com/unslothai/unsloth/issues/10339) [Bug] Model doesn't want to unload, Pressing the red Circle next to the model causes this error
- [#8899](https://github.com/unslothai/unsloth/issues/8899) [Bug] get_statistics ignores force_download=False for repeat counter
- [#9586](https://github.com/unslothai/unsloth/issues/9586) Tests write to shared machine state: four open channels beyond install_manifest
- [#9443](https://github.com/unslothai/unsloth/issues/9443) Migrate the smoke probes to anthropic 1.x and lift the <1 pin
- [#10022](https://github.com/unslothai/unsloth/issues/10022) [Bug] Unsloth Studio can enter a permanent SQLite mutex deadlock under concurrent database connection activity, leaving the backend process alive but completely unresponsive.
- [#9164](https://github.com/unslothai/unsloth/issues/9164) [Bug] Unsloth Studio (Desktop): Doubled list of models shown in model hub
- [#9156](https://github.com/unslothai/unsloth/issues/9156) Escape on the message action bar More menu drops focus to body instead of returning it to the trigger
- [#9177](https://github.com/unslothai/unsloth/issues/9177) [Bug] {{$now}} prompt variable silently kills prefix caching (full prefill every request)
- [#11465](https://github.com/unslothai/unsloth/issues/11465) Unsloth Desktop: say why the training process died instead of "exited unexpectedly"
- [#8725](https://github.com/unslothai/unsloth/issues/8725) [Bug] Desktop app fails to install when Node > 20 installed
- [#10821](https://github.com/unslothai/unsloth/issues/10821) [Bug] Manual GPU mode logs `--fit: on` while passing `--fit off`, making a normal launch look like a failed GPU probe
- [#10567](https://github.com/unslothai/unsloth/issues/10567) Project recreated between the delete route's owner check and the scope purge loses RAG permanently
- [#11848](https://github.com/unslothai/unsloth/issues/11848) [Bug] "streamdown:incomplete-link" & "[blocked]" Showing In Streaming Response
- [#9259](https://github.com/unslothai/unsloth/issues/9259) [Feature] reflect symlinked model storage on secondary drives for Live Monitor disk usage
- [#9286](https://github.com/unslothai/unsloth/issues/9286) [Bug] Vision models downloaded by Unsloth Desktop do not detect mmproj, but the same models from LM Studio work
- [#12392](https://github.com/unslothai/unsloth/issues/12392) [Unsloth Studio] UNSLOTH_LLAMA_FORCE_COMPILE=1 source build gets an unusable RUNPATH -- fails immediately with "cannot open shared object file"
- [#9688](https://github.com/unslothai/unsloth/issues/9688) [Studio Bug] Repeated SIGKILL recovery replays the same load intent without a bound
- [#9185](https://github.com/unslothai/unsloth/issues/9185) [Studio Bug] Keystrokes dropped when typing outside focused primary inputs
- [#7653](https://github.com/unslothai/unsloth/issues/7653) [Bug] Google Calendar Remote MCP OAuth 2.0 Authentication Not Supported
- [#9210](https://github.com/unslothai/unsloth/issues/9210) [Studio Bug] Queue message button remains disabled when attaching files without text
- [#12673](https://github.com/unslothai/unsloth/issues/12673) Chat context bar never populates for llama.cpp/custom connections

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,125 · **Open issues:** 380 · **Last push:** <1h ago

On October 6, 2026, AIBrix had a routine maintenance day with no new releases but a significant focus on enhancing gateway functionalities through several merged pull requests. Notably, PR #2919 routed SGLang /v1/systemone requests through the gateway, while PR #2911 did the same for /v1/decisions requests, facilitating smoother data handling. Additionally, PR #2905 introduced a mechanism to put idle models to sleep, thereby optimizing resource management by allowing sleeping models to release their memory reservations per PR #2904. Of interest, a new issue (#2912) was raised regarding the optional nature of gateway model discovery and implementation of the ready-Pod listing.

#### ✅ Merged PRs
- [#2919](https://github.com/vllm-project/aibrix/pull/2919) [Feat] Route SGLang /v1/systemone requests through the gateway
- [#2916](https://github.com/vllm-project/aibrix/pull/2916) [Bug] Avoid repeated Redis image pulls
- [#2913](https://github.com/vllm-project/aibrix/pull/2913) [Feat] Make gateway model discovery optional and add ready-Pod listing
- [#2911](https://github.com/vllm-project/aibrix/pull/2911) [Feat] Route SGLang /v1/decisions requests through the gateway
- [#2905](https://github.com/vllm-project/aibrix/pull/2905) [Feat] Make room for a new model by putting idle ones to sleep
- [#2904](https://github.com/vllm-project/aibrix/pull/2904) [Feat] Let a sleeping model release its memory reservation

#### 🐛 New Issues
- [#2912](https://github.com/vllm-project/aibrix/issues/2912) [Feat] Make gateway model discovery optional and add ready-Pod listing `area/gateway` `kind/feature` `area/runtime` `area/orchestration` 💬1
- [#2914](https://github.com/vllm-project/aibrix/issues/2914) [Feat] Report unavailable gateway model discovery from /v1/models `area/gateway` `kind/feature` 💬1

#### 🔒 Closed Issues
- [#2780](https://github.com/vllm-project/aibrix/issues/2780) [Bug] With spec.mode unset and replicas > 1, a role-level PodAutoscaler seems to multiply the replica count by N
- [#2848](https://github.com/vllm-project/aibrix/issues/2848) [Bug] ModelRouter never recreates a missing HTTPRoute (deleted route, or model label added later)
- [#2882](https://github.com/vllm-project/aibrix/issues/2882) [Feature][ModelClaim] Make room for a new model by putting idle ones to sleep
- [#2881](https://github.com/vllm-project/aibrix/issues/2881) [Feature][ModelClaim] Let a sleeping model release its memory reservation
- [#2912](https://github.com/vllm-project/aibrix/issues/2912) [Feat] Make gateway model discovery optional and add ready-Pod listing

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,036 · **Open issues:** 645 · **Last push:** <1h ago

On October 6, 2026, Semantic Router had no new releases but saw several important features merged into the codebase. Notably, the addition of models such as GPT-5.4 mini, Phi-4-reasoning-plus, and ERNIE 4.5 21B A3B to the model catalog enhances the platform's capabilities. Additionally, Amazon Nova Lite was admitted to the built-in catalog, further expanding the resources available to users. Among newly reported issues, the bug concerning the L2→L1 cache promotion that resets the storedAt timestamp poses significant concerns for max-age freshness, making it a priority for resolution.

#### ✅ Merged PRs
- [#4102](https://github.com/vllm-project/semantic-router/pull/4102) [Feature] Add GPT-5.4 mini to the model catalog
- [#4103](https://github.com/vllm-project/semantic-router/pull/4103) [Feature] Add Phi-4-reasoning-plus to the Model Card catalog
- [#4101](https://github.com/vllm-project/semantic-router/pull/4101) [Feature] Add ERNIE 4.5 21B A3B as a built-in Model Card
- [#4108](https://github.com/vllm-project/semantic-router/pull/4108) [Feature] Admit Amazon Nova Lite to the built-in catalog

#### 🐛 New Issues
- [#4570](https://github.com/vllm-project/semantic-router/issues/4570) [Bug] L2→L1 cache promotion resets storedAt timestamp, breaking max-age freshness `accepted` `wg/data-plane-networking` 💬3
- [#4579](https://github.com/vllm-project/semantic-router/issues/4579) [Blog] Rewrite the Vela 2.0 post as a research article `accepted` `wg/router-models-inference-runtime` `documentation` 💬2
- [#4568](https://github.com/vllm-project/semantic-router/issues/4568) [Bug] Static selector incorrectly treats configured score of 1.0 as 'no score' `needs-acceptance` `wg/mom-routing` 💬1
- [#4612](https://github.com/vllm-project/semantic-router/issues/4612) Model runtime: read weights before taking the device lock, and two descriptor tidy-ups `needs-acceptance`
- [#4611](https://github.com/vllm-project/semantic-router/issues/4611) Choose the model runtime's OpenMP spin count from what a process serves `needs-acceptance`
- [#4609](https://github.com/vllm-project/semantic-router/issues/4609) [Feature] Add a clarification-loop integration recipe for Decision models
- [#4601](https://github.com/vllm-project/semantic-router/issues/4601) Decision-specific hooks still live in the model runtime's generic base `needs-acceptance`
- [#4603](https://github.com/vllm-project/semantic-router/issues/4603) Slim the router's ROCm image while keeping the release PyTorch stack `needs-acceptance`
- [#4600](https://github.com/vllm-project/semantic-router/issues/4600) Built-in families, engines and fixture writers are listed centrally in the model runtime `needs-acceptance`
- [#4602](https://github.com/vllm-project/semantic-router/issues/4602) Extend the model runtime's `mypy --strict` scope beyond the plugin API `needs-acceptance`
- [#4598](https://github.com/vllm-project/semantic-router/issues/4598) Managed `device: auto` deployments share one runtime process, even on a CPU-only host `needs-acceptance`
- [#4596](https://github.com/vllm-project/semantic-router/issues/4596) Remove the retired `gemma_model_path` / `bert_model_path` keys from the operator API, the CLI model and the router config `needs-acceptance`
- [#4597](https://github.com/vllm-project/semantic-router/issues/4597) The training contract still advertises the embedded Candle and ONNX Runtime router runtimes `needs-acceptance`
- [#4599](https://github.com/vllm-project/semantic-router/issues/4599) The runtime's `Health.status` mixes liveness (`alive`) with the readiness states `needs-acceptance`
- [#4591](https://github.com/vllm-project/semantic-router/issues/4591) [Bug] Router Memory Retrieve ignores ProjectID on Milvus and Valkey `needs-acceptance` `wg/agentic-context`
- [#4592](https://github.com/vllm-project/semantic-router/issues/4592) [Bug] Qdrant Router Memory ignores hybrid_search and adaptive_threshold `needs-acceptance` `wg/agentic-context`
- [#4589](https://github.com/vllm-project/semantic-router/issues/4589) [Bug] Dashboard External Models editor cannot save the shipped config `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#4587](https://github.com/vllm-project/semantic-router/issues/4587) [Bug] Dashboard Embedding Models editor cannot save the shipped config `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#4586](https://github.com/vllm-project/semantic-router/issues/4586) [Bug] The Elo selector resets restored category ratings on every start `needs-acceptance` `wg/mom-routing`
- [#4585](https://github.com/vllm-project/semantic-router/issues/4585) [Bug] Ollama's timing field is rejected by json validator `bug` `needs-acceptance` `wg/data-plane-networking`
- [#4583](https://github.com/vllm-project/semantic-router/issues/4583) [Bug] Config page treats a single-condition decision rule as unconditional and saves it as a catch-all `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#4582](https://github.com/vllm-project/semantic-router/issues/4582) [Test] Wait for the asynchronous audit write in the WebSocket handshake test `needs-acceptance` `wg/developer-experience-ecosystem`
- [#4581](https://github.com/vllm-project/semantic-router/issues/4581) [Bug] The looper dispatch path rewrites credential failures into a generic 500 `bug` `needs-acceptance` `wg/data-plane-networking`
- [#4578](https://github.com/vllm-project/semantic-router/issues/4578) [Bug] Anthropic tool-result error status is silently lost in OpenAI translation `bug` `needs-acceptance` `wg/data-plane-networking`
- [#4572](https://github.com/vllm-project/semantic-router/issues/4572) [Bug] The decision signal routes on answers that contradict the question asked `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#4566](https://github.com/vllm-project/semantic-router/issues/4566) [Bug] Hallucination spans from later answer chunks land on earlier copies of their text `bug` `needs-acceptance` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#4579](https://github.com/vllm-project/semantic-router/issues/4579) [Blog] Rewrite the Vela 2.0 post as a research article
- [#4556](https://github.com/vllm-project/semantic-router/issues/4556) [Blog] Vela 2.0: Towards Open Foundation Routing Models
- [#4609](https://github.com/vllm-project/semantic-router/issues/4609) [Feature] Add a clarification-loop integration recipe for Decision models

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*