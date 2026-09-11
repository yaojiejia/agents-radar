# 📡 AI Ecosystem Digest — 2026-09-11

> Generated 2026-09-11 00:51 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 144,674 | 20 | 3 | 1 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 123,108 | 24 | 3 | 49 | 5 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,901 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,153 | 14 | 2 | 1 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 206,476 | 30 | 11 | 3 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,757 | 27 | 15 | 1 | 5 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 389,398 | 229 | 139 | 231 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 244,219 | 25 | 3 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 91,442 | 16 | 8 | 29 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 35,777 | 27 | 12 | 66 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 127,754 | 11 | 6 | 18 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 180,598 | 9 | 8 | 6 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 58,467 | 27 | 22 | 55 | 2 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,000 | 10 | 4 | 35 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,078 | 3 | 3 | 8 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,722 | 11 | 3 | 6 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released multiple updates including [python-v0.154.0](https://github.com/openai/codex/releases/tag/python-v0.154.0) and [rust-v0.155.0-alpha.2.3](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.2.3).
- **Qwen Code** announced the release of [version 0.23.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3) and several other SDK updates.
- **Claude Code** merged [PR #93244](https://github.com/anthropics/claude-code/pull/93244) that includes significant API renames and telemetry fixes.
- **OpenClaw** resolved a major bug related to interrupted package activation in [issue #143752](https://github.com/openclaw/openclaw/issues/143752), garnering notable community attention with 6 comments.
- **Hermes Agent** faced user concerns with the [issue #107387](https://github.com/NousResearch/hermes-agent/issues/107387) about skill commands dropping prompts, attracting 6 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 144,674 · **Open issues:** 12,509 · **Last push:** 4h ago

On September 11, 2026, Claude Code released version 2.1.268, which introduced an improvement to the Claude apps gateway by ensuring that signed-in clients receive consistent pricing through managed settings in the `gateway.yaml` file. Additionally, a startup warning was added for gateways when `access_control.allow_cidrs` is empty, along with a one-time notification for requests from public addresses. Noteworthy merged changes included API renames, telemetry fixes, and adjustments to the diff backend as part of PR #93244. Among the emerging issues, the bug report #93490 highlights a significant problem where the `--resume` command fails to properly access the prompt cache on Fable 5.1, resulting in replayed context messages as plain strings instead of their intended content blocks.

#### 🚀 New Releases
- [v2.1.268](https://github.com/anthropics/claude-code/releases/tag/v2.1.268) v2.1.268

#### ✅ Merged PRs
- [#93244](https://github.com/anthropics/claude-code/pull/93244) mods: API renames, telemetry fixes, and a diff backend seam

#### 🐛 New Issues
- [#93490](https://github.com/anthropics/claude-code/issues/93490) [BUG] --resume never hits the prompt cache past the static prefix on Fable 5.1 (opus hits): session-start context message is replayed as a plain string instead of the content blocks it was sent with `bug` `has repro` `platform:macos` `area:cost` 💬2
- [#93489](https://github.com/anthropics/claude-code/issues/93489) light-ansi/dark-ansi themes render the header/status bar as white-on-white, unreadable until selected `bug` `has repro` `platform:macos` `area:tui` 💬1
- [#93498](https://github.com/anthropics/claude-code/issues/93498) I don't have access to the actual bug report content associated with that request ID. To generate an accurate GitHub issue title, I would need you to provide the details of the bug report, including: - What the issue is - Error messages (if any) - What be
- [#93497](https://github.com/anthropics/claude-code/issues/93497) [BUG] 日本語IME入力時のプロンプトの遅延により、誤入力・文字欠落が頻発する `bug` `platform:windows` `area:tui` `area:a11y`
- [#93496](https://github.com/anthropics/claude-code/issues/93496) [Feature Request] Support multiple commands in single line (e.g., /rename and /color together) `enhancement` `area:cli`
- [#93438](https://github.com/anthropics/claude-code/issues/93438) [Bug] Agent dispatch with isolation:"worktree" causes cwd state bleed into parent session `bug` `has repro` `platform:macos` `area:tools`
- [#93409](https://github.com/anthropics/claude-code/issues/93409) [BUG] remote-control: stale bridge-pointer re-adopts a deleted session → "registerWorker failed 404" on every launch `bug` `has repro` `platform:linux` `area:agent-view`
- [#93454](https://github.com/anthropics/claude-code/issues/93454) [BUG] Stale "connector requires authentication" reminder persists after successful MCP tool calls (plugin-bundled connectors, desktop app) `bug` `platform:windows` `area:mcp` `area:cowork`
- [#93495](https://github.com/anthropics/claude-code/issues/93495) Claude Desktop 1.49585.0 freezes: main thread deadlocks on synchronous UNUserNotificationCenter XPC call (macOS, regression of #57706) `bug` `has repro` `platform:macos` `area:desktop`
- [#93494](https://github.com/anthropics/claude-code/issues/93494) [BUG] Cowork (macOS): all outbound egress lost mid-session from BOTH the desktop workspace and the cloud container; file access unaffected `bug` `platform:macos` `area:cowork` `area:networking`
- [#93446](https://github.com/anthropics/claude-code/issues/93446) [BUG] `mcp add-json --client-secret` stores secret under headers-stripped key, login looks up headers-included key (#67528 closed as stale, still present in 2.1.267) `bug` `has repro` `platform:linux` `area:auth`
- [#93493](https://github.com/anthropics/claude-code/issues/93493) [Bug] Fable credits exhausted prematurely despite remaining usage quota `bug` `platform:macos` `area:cost`
- [#93492](https://github.com/anthropics/claude-code/issues/93492) [Bug] Session blocked by cybersecurity system `duplicate` `platform:windows` `area:tui`
- [#93491](https://github.com/anthropics/claude-code/issues/93491) [Feature Request] Add feedback submission without requiring transcript `enhancement` `platform:macos` `area:cli`
- [#93488](https://github.com/anthropics/claude-code/issues/93488) [Bug] Session lost after using arrow keys to move around in a long prompt... `bug` `platform:windows` `area:tui`
- [#93487](https://github.com/anthropics/claude-code/issues/93487) [Bug] Model fabricates authorization and misrepresents reasoning in live writes `bug` `area:model`
- [#93486](https://github.com/anthropics/claude-code/issues/93486) Prohibited-actions rule blocks user-authorized local VPN login script (OTP supplied by user, secret never leaves the device) `enhancement` `platform:windows` `area:model` `area:security`
- [#93485](https://github.com/anthropics/claude-code/issues/93485) [BUG] Cowork: local agent mode hardlinks workspace files into its session upload cache, and the cloud file bridge then refuses to read them (nlink > 1) `bug` `has repro` `platform:windows` `area:cowork`
- [#93484](https://github.com/anthropics/claude-code/issues/93484) [Bug] Model fallback to Opus triggered incorrectly by "cyber" keyword in reasoning `bug` `platform:macos` `area:model`
- [#93483](https://github.com/anthropics/claude-code/issues/93483) Artifact tool cannot move the share pin, so shared readers stay frozen on an old version `enhancement` `area:tools` `area:claude-code-web`

#### 🔒 Closed Issues
- [#57295](https://github.com/anthropics/claude-code/issues/57295) [BUG] Claude tries to get the project owner's attention with @Human, but that's me.
- [#68773](https://github.com/anthropics/claude-code/issues/68773) [Billing][Bug] Auto-recharge loop charged consumer plan 29x ($661) in error; Fin support admits malfunction but cannot escalate to a human
- [#86225](https://github.com/anthropics/claude-code/issues/86225) Claude Code published a user's personal information to a public GitHub issue, unprompted and unchecked

### OpenAI Codex (`openai/codex`)

**Stars:** 123,108 · **Open issues:** 16,534 · **Last push:** <1h ago

On September 11, 2026, OpenAI Codex released Python SDK version 0.154.0, introducing new `max` and `ultra` reasoning-effort values and adding `ExternalMessage` functionality to synchronous and asynchronous run calls. Additionally, the Rust SDK saw multiple alpha releases, culminating in version 0.155.0-alpha.2.3. Among the merged pull requests, notable enhancements include keeping voice sessions alive through mute and audio backlog (#44671) and improving error visibility in the command center (#44651). The day also saw significant user-reported issues, including complaints about models reaching capacity and a bug that caused the Codex app to use more resources than expected.

#### 🚀 New Releases
- [python-v0.154.0](https://github.com/openai/codex/releases/tag/python-v0.154.0) Python SDK 0.154.0
- [voice-cygwin-108b38cf67cbb731](https://github.com/openai/codex/releases/tag/voice-cygwin-108b38cf67cbb731) Cygwin build inputs and matching source for Windows voice
- [rust-v0.155.0-alpha.2.3](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.2.3) 0.155.0-alpha.2.3
- [rust-v0.155.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.2) 0.155.0-alpha.2
- [rust-v0.155.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.1) 0.155.0-alpha.1

#### ✅ Merged PRs
- [#44676](https://github.com/openai/codex/pull/44676) Resolve permission profiles with explicit execution-host path context
- [#44675](https://github.com/openai/codex/pull/44675) Refresh global instructions at model-request boundaries
- [#44671](https://github.com/openai/codex/pull/44671) Keep voice sessions alive through mute and audio backlog
- [#44670](https://github.com/openai/codex/pull/44670) Restrict login setup redirects to known platform origins
- [#44669](https://github.com/openai/codex/pull/44669) Resolve filesystem denials with explicit path context
- [#44666](https://github.com/openai/codex/pull/44666) Honor system reduced-motion preferences in the TUI
- [#44661](https://github.com/openai/codex/pull/44661) Trace tool call receipt, result readiness, and code-mode dispatch
- [#44659](https://github.com/openai/codex/pull/44659) Preserve turn triggers across delegated agent work
- [#44658](https://github.com/openai/codex/pull/44658) Keep Windows sandbox private desktops alive across helper exits
- [#44656](https://github.com/openai/codex/pull/44656) Attribute turn metrics to the models used during the turn
- [#44655](https://github.com/openai/codex/pull/44655) Honor thread-level plugin exclusions across runtime capabilities
- [#44654](https://github.com/openai/codex/pull/44654) Preserve missing environment variable diagnostics in Codex Doctor
- [#44651](https://github.com/openai/codex/pull/44651) Keep command center errors visible and preserve drafts
- [#44650](https://github.com/openai/codex/pull/44650) Enforce managed model provider selection and definitions
- [#44646](https://github.com/openai/codex/pull/44646) Honor thread analytics opt-outs when using shared clients
- [#44639](https://github.com/openai/codex/pull/44639) Block non-loopback inbound traffic for the Windows offline sandbox
- [#44636](https://github.com/openai/codex/pull/44636) Recover OAuth metadata discovery from 503 responses via OIDC
- [#44631](https://github.com/openai/codex/pull/44631) Focus the task list when reopening the agent command center
- [#44629](https://github.com/openai/codex/pull/44629) Add manual callback input to MCP OAuth login
- [#44628](https://github.com/openai/codex/pull/44628) Expose session analytics state in Responses turn metadata
- [#44626](https://github.com/openai/codex/pull/44626) Add bounded environment transport for MXC launch requests
- [#44622](https://github.com/openai/codex/pull/44622) Add `/voice settings` to choose a voice for future conversations
- [#44620](https://github.com/openai/codex/pull/44620) Support temporary and minimal filesystem grants in MXC
- [#44619](https://github.com/openai/codex/pull/44619) Allow discarded code mode tool responses to be garbage collected
- [#44617](https://github.com/openai/codex/pull/44617) Invalidate cached Guardian approvals for unscored permission widening
- [#44616](https://github.com/openai/codex/pull/44616) Simplify enterprise OAuth login helpers and expand callback tests
- [#44615](https://github.com/openai/codex/pull/44615) Treat non-interactive dumb terminals as warnings in `codex doctor`
- [#44613](https://github.com/openai/codex/pull/44613) Enable user verification for local Codex Desktop sessions
- [#44611](https://github.com/openai/codex/pull/44611) Preserve root turn attribution in turn-start events
- [#44606](https://github.com/openai/codex/pull/44606) Preserve whole diagnostic attachments and report incomplete uploads
- [#44586](https://github.com/openai/codex/pull/44586) Remove `repo_url` from skill invocation analytics events
- [#44580](https://github.com/openai/codex/pull/44580) Support symbolic `:root` filesystem policies in MXC
- [#44575](https://github.com/openai/codex/pull/44575) Tie network approval reviews to their originating execution
- [#44574](https://github.com/openai/codex/pull/44574) Use captured action settings for Guardian reviews
- [#44571](https://github.com/openai/codex/pull/44571) Allow extensions to select MCP protocol mode per HTTP server
- [#44570](https://github.com/openai/codex/pull/44570) Preserve Guardian authorization evidence until request budgeting
- [#44569](https://github.com/openai/codex/pull/44569) Preserve complete actions in Guardian approval reviews
- [#44564](https://github.com/openai/codex/pull/44564) Add app-server APIs for stored thread attachments
- [#44548](https://github.com/openai/codex/pull/44548) Add MIME-filtered resource listing for Codex Apps
- [#44544](https://github.com/openai/codex/pull/44544) Move Guardian reporting and denial accounting into the extension
- [#44536](https://github.com/openai/codex/pull/44536) Move Guardian reviewer settings and execution into the reviewer crate
- [#44523](https://github.com/openai/codex/pull/44523) Bound app-server stdio shutdown and handle Unix SIGTERM gracefully
- [#44521](https://github.com/openai/codex/pull/44521) Decouple session isolation from subagent attribution
- [#44493](https://github.com/openai/codex/pull/44493) Bound MCP descriptions separately from Guardian action JSON
- [#44492](https://github.com/openai/codex/pull/44492) Distinguish HTTP quota errors from rate limits
- [#44489](https://github.com/openai/codex/pull/44489) Reset cached WebSocket state when auth ownership changes
- [#44487](https://github.com/openai/codex/pull/44487) Preserve incoming prompts when pre-turn compaction fails
- [#44482](https://github.com/openai/codex/pull/44482) Improve Guardian retries and review failure reporting
- [#44472](https://github.com/openai/codex/pull/44472) Harden Code Mode tool-call completeness tracking

#### 🐛 New Issues
- [#44401](https://github.com/openai/codex/issues/44401) [Windows Desktop] 26.903.8094.0 app-server queue blocks plugins and Remote Control; recent history omitted after restart `bug` `windows-os` `app` `session` 💬9
- [#44516](https://github.com/openai/codex/issues/44516) [Windows][Codex Desktop][Pro] All models fail with "Selected model is at capacity" (server_overloaded) `bug` `windows-os` `app` `connectivity` 💬2
- [#44673](https://github.com/openai/codex/issues/44673) The Codex burned through my entire limit. `bug` `rate-limits` `app` 💬6
- [#44561](https://github.com/openai/codex/issues/44561) Turn off whimsy effect (astra stars) by default `enhancement` `TUI` `CLI` `config` 💬5
- [#44395](https://github.com/openai/codex/issues/44395) Selected model is at capacity. Please try a different model. `bug` `rate-limits` `app` 💬6
- [#44531](https://github.com/openai/codex/issues/44531) [Bug] Intermittent "Selected model is at capacity" errors in Codex Desktop (all models) on ChatGPT Pro `bug` `rate-limits` `app` 💬2
- [#44683](https://github.com/openai/codex/issues/44683) MCP server processes are re-spawned on every session/thread context and never reaped (Windows) `bug` `windows-os` `mcp` `CLI` 💬2
- [#44668](https://github.com/openai/codex/issues/44668) Astra reasoning level frequently reset to Medium `bug` `app` `config` 💬2
- [#44459](https://github.com/openai/codex/issues/44459) Codex app usage astronomically higher than CLI `bug` `rate-limits` `app` `subagent` 💬2
- [#44471](https://github.com/openai/codex/issues/44471) Codex CLI 0.154.0 hangs on startup on macOS after Homebrew upgrade `bug` `CLI` `performance` 💬2
- [#44634](https://github.com/openai/codex/issues/44634) [macOS] New voice chats initiate using Codex despite selecting ChatGPT operating mode `bug` `rate-limits` `app` 💬2
- [#44688](https://github.com/openai/codex/issues/44688) Codex Windows app: Please simplify project registration, folder linking, and restoring archived conversations `enhancement` `windows-os` `app` `session` 💬1
- [#44685](https://github.com/openai/codex/issues/44685) Possible overcounting of Codex weekly usage `bug` `windows-os` `rate-limits` `CLI` 💬1
- [#44679](https://github.com/openai/codex/issues/44679) [macOS] Drained purchased credits despite still having ~35% general usage left `bug` `rate-limits` `app` 💬1
- [#44677](https://github.com/openai/codex/issues/44677) Windows desktop: older messages repeatedly resurface instead of the latest conversation state `bug` `windows-os` `app` `session` 💬1
- [#44674](https://github.com/openai/codex/issues/44674) Repeated “content can’t be shown” notices interrupt ordinary conversation `bug` `CLI` `safety-check` 💬1
- [#44672](https://github.com/openai/codex/issues/44672) Codex desktop: reviewer safety block without visible findings or recovery controls `bug` `windows-os` `app` `safety-check` 💬1
- [#44687](https://github.com/openai/codex/issues/44687) [macOS App] 26.908.31457: route prefetch and AppRoutes fail with “r is not a function” `bug` `app`
- [#44686](https://github.com/openai/codex/issues/44686) Windows MSIX AppData redirection prevents Godot AI MCP from reconnecting after editor restart `bug` `windows-os` `mcp` `app`
- [#44684](https://github.com/openai/codex/issues/44684) Accessibility: improve Codex support for NVGT/BGT workflows used by blind audio-game developers `enhancement` `windows-os` `TUI` `CLI`
- [#44682](https://github.com/openai/codex/issues/44682) macOS GUI-launched Codex keeps a 256-file soft limit and never raises RLIMIT_NOFILE `bug` `CLI` `skills`
- [#44681](https://github.com/openai/codex/issues/44681) [macOS] Open in ChatGPT from a shared Codex chat flashes sidebar without opening a task `bug` `app` `session`
- [#44680](https://github.com/openai/codex/issues/44680) Linux desktop app.relaunch() sets NoNewPrivs on relaunch helper; inherited flag blocks sudo in full-access sessions `bug` `sandbox` `app`
- [#44678](https://github.com/openai/codex/issues/44678) Chrome side panel: expose Max thinking effort when available `enhancement` `extension`

#### 🔒 Closed Issues
- [#43344](https://github.com/openai/codex/issues/43344) Windows Codex: GPT-5.5 returns 404 model not found/no access in a brand-new conversation
- [#44683](https://github.com/openai/codex/issues/44683) MCP server processes are re-spawned on every session/thread context and never reaped (Windows)
- [#42920](https://github.com/openai/codex/issues/42920) Android Remote cannot start “No project” chats: generated directory fails project-trust validation on Debian

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,901 · **Open issues:** 823 · **Last push:** 8h ago

On September 11, 2026, the Gemini CLI team released version v0.61.0-nightly.20260910.ged2ac40df, which includes updates that can be reviewed in the full changelog for detailed changes. There were no merged pull requests or new issues reported during the last 24 hours, indicating a routine day for the project without significant developments beyond the nightly release.

#### 🚀 New Releases
- [v0.61.0-nightly.20260910.ged2ac40df](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260910.ged2ac40df) Release v0.61.0-nightly.20260910.ged2ac40df

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,153 · **Open issues:** 2,350 · **Last push:** 3h ago

On September 11, 2026, GitHub Copilot CLI released version 1.0.84-4, introducing the `copilot instruction list` and `copilot lsp list` commands to replace the previous `copilot plugins list --kind instruction` and `--kind lsp`. Additionally, the update added a `--json` option for multiple commands related to plugins and incorporated the `enable` and `disable` options for various Copilot functionalities. Among the merged pull requests, PR #4786 revised the notice regarding third-party services. A notably hot new issue, #4809, highlighted a problem with the native MCP connector that sends non-standard server/discover requests before initialization, leading to crashes in spec-compliant servers.

#### 🚀 New Releases
- [v1.0.84-4](https://github.com/github/copilot-cli/releases/tag/v1.0.84-4) 1.0.84-4

#### ✅ Merged PRs
- [#4786](https://github.com/github/copilot-cli/pull/4786) Revise notice regarding third-party services

#### 🐛 New Issues
- [#4809](https://github.com/github/copilot-cli/issues/4809) Native MCP connector sends non-standard server/discover request before initialize, violating MCP lifecycle spec and crashing spec-compliant servers 💬1
- [#4803](https://github.com/github/copilot-cli/issues/4803) /ask and /btw answers go blank while the dialog stays open `triage` 💬1
- [#4801](https://github.com/github/copilot-cli/issues/4801) trust/skip TLS verification for MCP HTTP servers `triage`
- [#4799](https://github.com/github/copilot-cli/issues/4799) avoid redownload if the previous update fails `triage` 💬1
- [#4810](https://github.com/github/copilot-cli/issues/4810) Scheduled automation fails when a non-default branch is checked out locally `triage`
- [#4807](https://github.com/github/copilot-cli/issues/4807) Idle Copilot CLI enters `FileWatch` event storm, consumes two CPU cores, and writes a 33+ GB log `triage`
- [#4806](https://github.com/github/copilot-cli/issues/4806) Custom agent `target` frontmatter property is documented for the CLI but has no effect `triage`
- [#4805](https://github.com/github/copilot-cli/issues/4805) Sessions become unrevivable: a stale `inuse.<pid>.lock` from a crashed host is never reclaimed on open `triage`
- [#4796](https://github.com/github/copilot-cli/issues/4796) Desktop app 1.1.17: COPILOT_ENTRA_AUTH_AUD (EMU audience) breaks MCP Entra sign-in with ENTRA_CONFIG 2002 - CLI on the same machine works `triage`
- [#4804](https://github.com/github/copilot-cli/issues/4804) Local sandbox 'Authenticate gh' silently uses an unrelated cached fine-grained PAT instead of active gh OAuth session, with no visibility into which credential is chosen `triage`
- [#4802](https://github.com/github/copilot-cli/issues/4802) PRU Quota Wiped Out, very likely related to enabling Assisted Permissions `triage`
- [#4800](https://github.com/github/copilot-cli/issues/4800) Copilot CLI OAuth login fails — CLI doesn't bind to port declared in its own CIMD client-metadata.json `triage`
- [#4798](https://github.com/github/copilot-cli/issues/4798) Support activation welcome cards for custom Copilot CLI agents `triage`
- [#4797](https://github.com/github/copilot-cli/issues/4797) Command legitimacy checker doesn't normalize `git -C path/to/dir --no-pager <subcommand>` `triage`

#### 🔒 Closed Issues
- [#4809](https://github.com/github/copilot-cli/issues/4809) Native MCP connector sends non-standard server/discover request before initialize, violating MCP lifecycle spec and crashing spec-compliant servers
- [#4779](https://github.com/github/copilot-cli/issues/4779) MCP discovery ISSUE

### OpenCode (`anomalyco/opencode`)

**Stars:** 206,476 · **Open issues:** 5,751 · **Last push:** <1h ago

On September 11, 2026, OpenCode saw key advancements with the merging of several important pull requests. Notably, PR #48357 introduced the ability to parse JSON text results from MCP tools without requiring an output schema, enhancing core functionalities. Additionally, PR #48376 addressed normalization of flat Responses stream errors, while PR #48393 refactored the TUI by extracting shared session rendering primitives. Among the newly reported issues, #48383 stands out, highlighting a connectivity problem with the FSB relay that causes the development agent to become unresponsive when hubConnected is false. Overall, the day primarily consisted of notable code improvements without any new releases.

#### ✅ Merged PRs
- [#48376](https://github.com/anomalyco/opencode/pull/48376) fix(ai): normalize flat Responses stream errors
- [#48393](https://github.com/anomalyco/opencode/pull/48393) refactor(tui): extract shared session rendering primitives
- [#48357](https://github.com/anomalyco/opencode/pull/48357) feat(core): parse JSON text results from MCP tools without an output schema

#### 🐛 New Issues
- [#48383](https://github.com/anomalyco/opencode/issues/48383) FSB relay reports hubConnected: false despite listener on 127.0.0.1:7225, causing dev agent to be unresponsive 💬4
- [#48389](https://github.com/anomalyco/opencode/issues/48389) Desktop 1.18.30: utility NodeService crashes intermittently on quit (SIGABRT/SIGSEGV) 💬4
- [#48384](https://github.com/anomalyco/opencode/issues/48384) TUI crash: ENOSPC: no space left on device, watch '/home/user/.local/state/opencode/beta/tui' `2.0` 💬3
- [#48364](https://github.com/anomalyco/opencode/issues/48364) Console Go: DeepSeek V4.1 Flash #max fails on long multi-step runs — reasoning_content not passed back (HTTP 400) 💬3
- [#48407](https://github.com/anomalyco/opencode/issues/48407) Refund request for accidental OpenCode Go monthly subscription charge `needs:compliance` 💬2
- [#48385](https://github.com/anomalyco/opencode/issues/48385) Session incorrectly associates FSB relay/hub connectivity issues with jumpstart, zv-prep, and glab-auth procedures 💬2
- [#48390](https://github.com/anomalyco/opencode/issues/48390) Cannot delete GitHub issues via API — only close with state_reason 💬2
- [#48398](https://github.com/anomalyco/opencode/issues/48398) [Bug] Compiled prompts fail in native Bun 1.4.2 builds because of a filesystem/search cycle 💬2
- [#48374](https://github.com/anomalyco/opencode/issues/48374) Невозможно оплатить 💬2
- [#48387](https://github.com/anomalyco/opencode/issues/48387) Session incorrectly conflated FSB troubleshooting with development-agent fixing `needs:compliance` 💬2
- [#48388](https://github.com/anomalyco/opencode/issues/48388) Session incorrectly conflated FSB troubleshooting with development-agent fixing `needs:compliance` 💬2
- [#48360](https://github.com/anomalyco/opencode/issues/48360) Unable to delete my account — deletion request (GDPR) 💬2
- [#48371](https://github.com/anomalyco/opencode/issues/48371) beta self-host hardening report: plugin cleanup, recall fix, run-path hook bypass, restart recovery 💬2
- [#48330](https://github.com/anomalyco/opencode/issues/48330) Copilot Legacy Plan(per request) fully consumed by a single prompt in opencode2 `2.0` 💬2
- [#48402](https://github.com/anomalyco/opencode/issues/48402) çalışmıyor `needs:compliance` 💬1
- [#48372](https://github.com/anomalyco/opencode/issues/48372) SystemPrompt.environment 💬1
- [#48396](https://github.com/anomalyco/opencode/issues/48396) demande `needs:compliance` 💬1
- [#48378](https://github.com/anomalyco/opencode/issues/48378) TUI: "esc interrupt" scanner streaks in COSMIC Terminal due to fallback-only glyph U+2B1D 💬1
- [#48377](https://github.com/anomalyco/opencode/issues/48377) [FEATURE]:Screen vision (screenshots) + browser control tools for the agent 💬1
- [#48375](https://github.com/anomalyco/opencode/issues/48375) GLM-5.3-Flash responses garbled 💬1
- [#48370](https://github.com/anomalyco/opencode/issues/48370) DeepSeek V4 Flash repeatedly returns "Sensitive words detected" as session context grows 💬1
- [#48369](https://github.com/anomalyco/opencode/issues/48369) Windows: bash tool call doesn't return until spawned descendant processes exit; stdio redirection is not a workaround (1.18.30) 💬1
- [#48365](https://github.com/anomalyco/opencode/issues/48365) beta: V1 plugins unloadable with no migration path, custom commands unreachable headless, no V2 plugin/API docs for agents `2.0` 💬1
- [#48356](https://github.com/anomalyco/opencode/issues/48356) [FEATURE]: v2 SDK: bind agent/model/variant options to queued prompts 💬1
- [#48361](https://github.com/anomalyco/opencode/issues/48361) `opencode2 run` and `background: true` tasks may cause premature exit `2.0` 💬1
- [#48404](https://github.com/anomalyco/opencode/issues/48404) V2 Workers AI ignores saved account ID when resolving the catalog endpoint `2.0`
- [#48400](https://github.com/anomalyco/opencode/issues/48400) [FEATURE]: Support source-aware permissions for skills
- [#48386](https://github.com/anomalyco/opencode/issues/48386) Desktop MCP toggle can fail or block on resource catalog refresh
- [#48379](https://github.com/anomalyco/opencode/issues/48379) CLI 1.18.30 Linux: npm-spec plugin in opencode.json never initializes (silent); identical code as a file:// plugin works
- [#48362](https://github.com/anomalyco/opencode/issues/48362) opentui: fatal: null is not an object (evaluating 's().tailHygiene')

#### 🔒 Closed Issues
- [#48383](https://github.com/anomalyco/opencode/issues/48383) FSB relay reports hubConnected: false despite listener on 127.0.0.1:7225, causing dev agent to be unresponsive
- [#48364](https://github.com/anomalyco/opencode/issues/48364) Console Go: DeepSeek V4.1 Flash #max fails on long multi-step runs — reasoning_content not passed back (HTTP 400)
- [#48385](https://github.com/anomalyco/opencode/issues/48385) Session incorrectly associates FSB relay/hub connectivity issues with jumpstart, zv-prep, and glab-auth procedures
- [#48390](https://github.com/anomalyco/opencode/issues/48390) Cannot delete GitHub issues via API — only close with state_reason
- [#48398](https://github.com/anomalyco/opencode/issues/48398) [Bug] Compiled prompts fail in native Bun 1.4.2 builds because of a filesystem/search cycle
- [#48374](https://github.com/anomalyco/opencode/issues/48374) Невозможно оплатить
- [#48387](https://github.com/anomalyco/opencode/issues/48387) Session incorrectly conflated FSB troubleshooting with development-agent fixing
- [#48388](https://github.com/anomalyco/opencode/issues/48388) Session incorrectly conflated FSB troubleshooting with development-agent fixing
- [#48360](https://github.com/anomalyco/opencode/issues/48360) Unable to delete my account — deletion request (GDPR)
- [#48371](https://github.com/anomalyco/opencode/issues/48371) beta self-host hardening report: plugin cleanup, recall fix, run-path hook bypass, restart recovery
- [#48378](https://github.com/anomalyco/opencode/issues/48378) TUI: "esc interrupt" scanner streaks in COSMIC Terminal due to fallback-only glyph U+2B1D

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,757 · **Open issues:** 1,378 · **Last push:** <1h ago

On September 11, 2026, Qwen Code released several updates, including version v0.23.3, which expanded reasoning presets for Kimi, Qwen, and DeepSeek, and included modifications to session registration. The desktop version was updated to v0.3.0, addressing issues like maintaining pending permissions across session refreshes. A significant merge was made with pull #11560, introducing a peer endpoint for cross-session messaging, enhancing external program integration. Among the new issues, #11574 drew attention for its impact on VS Code, where an extension update was reported to hide all prior session history due to a hardcoded sourceType filter.

#### 🚀 New Releases
- [v0.23.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3) Release v0.23.3
- [v0.23.3-nightly.20260910.c46cb85cf2](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260910.c46cb85cf2) Release v0.23.3-nightly.20260910.c46cb85cf2
- [sdk-typescript-v0.1.12](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.12) SDK TypeScript Release v0.1.12
- [desktop-v0.3.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.3.0) Qwen Code Desktop v0.3.0
- [desktop-v0.3.0-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.3.0-preview.0) Qwen Code Desktop v0.3.0-preview.0

#### ✅ Merged PRs
- [#11560](https://github.com/QwenLM/qwen-code/pull/11560) feat(sdk): add a peer endpoint so a program outside Qwen Code can join cross-session messaging

#### 🐛 New Issues
- [#11574](https://github.com/QwenLM/qwen-code/issues/11574) [VS Code] Extension update hides all prior session history: history dialog hardcodes sourceType filter, pre-0.23.x transcripts lack the metadata `priority/P2` `type/feature-request` `category/ui` `scope/session-management` 💬5
- [#11558](https://github.com/QwenLM/qwen-code/issues/11558) Any opened file in VSCode automatically selected for context `priority/P2` `type/bug` `category/ui` `scope/vscode` 💬5
- [#11591](https://github.com/QwenLM/qwen-code/issues/11591) perf(serve): workspace git status re-does a full index refresh on every call because of --no-optional-locks `priority/P2` `category/performance` `scope/git` `scope/latency` 💬3
- [#11590](https://github.com/QwenLM/qwen-code/issues/11590) bug: qwen code与非qwen的厂商模型可能有不兼容的地方，自动插入的metadata会导致发生"400 API 调用参数有误，请检查文档。" `priority/P1` `type/bug` `category/integration` `scope/content-generation` 💬3
- [#11579](https://github.com/QwenLM/qwen-code/issues/11579) Invalid model config reports a generic internal error on daemon surfaces `priority/P3` `status/blocked` `type/bug` `category/configuration` 💬3
- [#11511](https://github.com/QwenLM/qwen-code/issues/11511) vscode-ide-companion force-closes the superseded session on navigation, discarding in-flight work `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#11514](https://github.com/QwenLM/qwen-code/issues/11514) Qwen code companion VSCode extension problem `status/need-information` `priority/P3` `type/feature-request` `category/ui` 💬3
- [#11556](https://github.com/QwenLM/qwen-code/issues/11556) vscode-ide-companion 0.23.1 cannot work under Remote-SSH — webview stuck loading `status/need-information` `priority/P1` `type/bug` `category/integration` 💬3
- [#11554](https://github.com/QwenLM/qwen-code/issues/11554) bug(channels/feishu): rich messages and replies lose media, code and link context `priority/P2` `type/bug` `category/integration` 💬3
- [#11597](https://github.com/QwenLM/qwen-code/issues/11597) [Bug] MCP Error -32000: Connection closed on Windows 10 for all local STDIO servers (v1.0.0.3) Body: `status/need-retesting` `priority/P2` `type/bug` `category/integration` 💬2
- [#11580](https://github.com/QwenLM/qwen-code/issues/11580) Release Failed for v0.23.3 on 2026-09-10 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#11577](https://github.com/QwenLM/qwen-code/issues/11577) bug(goal): a checkpoint that fails on an overflowing window is retried with the identical request until the Goal stops `priority/P2` `type/bug` `category/core` `status/ready-for-human` 💬2
- [#11547](https://github.com/QwenLM/qwen-code/issues/11547) Web Shell: session list spinner never clears after a background shell finishes during a turn that errors out `priority/P2` `type/bug` `category/core` `scope/session-management` 💬2
- [#11569](https://github.com/QwenLM/qwen-code/issues/11569) fix(goal): clarify proposal settlement failure and recovery messages `priority/P3` `type/bug` `category/core` `scope/session-management` 💬2
- [#11564](https://github.com/QwenLM/qwen-code/issues/11564) web_search: design page titles for cited sources (split from #11490) `priority/P2` `type/feature-request` `category/tools` `scope/rendering` 💬2
- [#11550](https://github.com/QwenLM/qwen-code/issues/11550) qwen code causes prompt reprocessing on memory write `status/need-information` `priority/P2` `type/bug` `category/performance` 💬2
- [#11600](https://github.com/QwenLM/qwen-code/issues/11600) Main CI failed: Qwen Code CI on 07b1cd033e28 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11586](https://github.com/QwenLM/qwen-code/issues/11586) Main CI failed: E2E Tests on dfafbf240ea9 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11546](https://github.com/QwenLM/qwen-code/issues/11546) Main CI failed: Qwen Code CI on b3d022b35724 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11543](https://github.com/QwenLM/qwen-code/issues/11543) Main CI failed: Qwen Code CI on 1097b9fe0af3 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11539](https://github.com/QwenLM/qwen-code/issues/11539) Main CI failed: Qwen Code CI on b1ac3e297023 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11535](https://github.com/QwenLM/qwen-code/issues/11535) Main CI failed: Qwen Code CI on d8baa8730fc6 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11534](https://github.com/QwenLM/qwen-code/issues/11534) Main CI failed: Qwen Code CI on 53964ef7e272 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11528](https://github.com/QwenLM/qwen-code/issues/11528) Main CI failed: Qwen Code CI on ecae0371767e `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11599](https://github.com/QwenLM/qwen-code/issues/11599) Deferred review findings from PR #11169: fix(web-shell): close the trust-gate and bystander gaps in the local-files bridg
- [#11598](https://github.com/QwenLM/qwen-code/issues/11598) Deferred review findings from PR #11588: fix(ci): widen the review-salvage replay's timeline margin past contention stall
- [#11587](https://github.com/QwenLM/qwen-code/issues/11587) Deferred review findings from PR #11562: fix(cli): keep one-shot system reminders out of the user's own message

#### 🔒 Closed Issues
- [#7771](https://github.com/QwenLM/qwen-code/issues/7771) [Bug] Persisted mcp_config is not loaded into main-process MCP proxy at startup
- [#11489](https://github.com/QwenLM/qwen-code/issues/11489) Extension update drops all conversation history (v0.21.x → v0.23.x)
- [#11558](https://github.com/QwenLM/qwen-code/issues/11558) Any opened file in VSCode automatically selected for context
- [#11386](https://github.com/QwenLM/qwen-code/issues/11386) feat(serve): scale daemon workspaces past 25 — decouple registration from live runtimes with an LRU live set
- [#10056](https://github.com/QwenLM/qwen-code/issues/10056) [BUG][Qwen Desktop][MCP SSE] MCP tool call finishes but chat hangs indefinitely and permission is lost
- [#9831](https://github.com/QwenLM/qwen-code/issues/9831) What is your relationship with craft-agents-oss? The appearances are nearly identical, and the sessions are even shared.
- [#11580](https://github.com/QwenLM/qwen-code/issues/11580) Release Failed for v0.23.3 on 2026-09-10
- [#11547](https://github.com/QwenLM/qwen-code/issues/11547) Web Shell: session list spinner never clears after a background shell finishes during a turn that errors out
- [#11546](https://github.com/QwenLM/qwen-code/issues/11546) Main CI failed: Qwen Code CI on b3d022b35724
- [#11543](https://github.com/QwenLM/qwen-code/issues/11543) Main CI failed: Qwen Code CI on 1097b9fe0af3
- [#11539](https://github.com/QwenLM/qwen-code/issues/11539) Main CI failed: Qwen Code CI on b1ac3e297023
- [#11535](https://github.com/QwenLM/qwen-code/issues/11535) Main CI failed: Qwen Code CI on d8baa8730fc6
- [#11534](https://github.com/QwenLM/qwen-code/issues/11534) Main CI failed: Qwen Code CI on 53964ef7e272
- [#11528](https://github.com/QwenLM/qwen-code/issues/11528) Main CI failed: Qwen Code CI on ecae0371767e
- [#11505](https://github.com/QwenLM/qwen-code/issues/11505) Main CI failed: Qwen Code CI on 2e212144d3d8

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): run_eval.py always reports 0% recall — install the eval artifact as a real skill; fix Windows stream reading, trigger detection, and parallel workers
- [#514](https://github.com/anthropics/skills/pull/514) Add document-typography skill: typographic quality control for generated documents
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments
- [#1615](https://github.com/anthropics/skills/pull/1615) Add scnet-hpc skill
- [#538](https://github.com/anthropics/skills/pull/538) fix(pdf): correct case-sensitive file references in SKILL.md

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 389,398 · **Open issues:** 6,654 · **Last push:** <1h ago

On September 11, 2026, OpenClaw released version 2026.6.35, marking the final June 2026 Extended Stable (LTS) release, highlighting improvements in safety for provider and channel boundaries, including the rejection of oversized responses to enhance stability. Key merged features included the new CLI option to query and page run history from the CLI (#141777) and enhancements to session environments to improve searchability (#144453). Notably, high-priority issues emerged such as a bug concerning interrupted package activation that could leave the canonical CLI non-functional (#143752) and problems with Windows Scheduled Task configurations hindering unattended gateway runs (#143757).

#### 🚀 New Releases
- [v2026.6.35](https://github.com/openclaw/openclaw/releases/tag/v2026.6.35) openclaw 2026.6.35

#### ✅ Merged PRs
- [#133649](https://github.com/openclaw/openclaw/pull/133649) fix(line): report a webhook LINE will not deliver to
- [#141569](https://github.com/openclaw/openclaw/pull/141569) fix(cli): restore saved-account secrets for local inference
- [#143700](https://github.com/openclaw/openclaw/pull/143700) fix(ui): keep string-or-false Settings editable
- [#140902](https://github.com/openclaw/openclaw/pull/140902) fix(agents): include tool schema tokens in context-overflow precheck
- [#139534](https://github.com/openclaw/openclaw/pull/139534) fix(ai): prefer streamed tool-call arguments over stale output_item.done snapshot
- [#132116](https://github.com/openclaw/openclaw/pull/132116) fix(acp): omit inherited max for maintained Codex ACP
- [#144355](https://github.com/openclaw/openclaw/pull/144355) fix(state): wait for the state lifecycle before refusing retirement
- [#142145](https://github.com/openclaw/openclaw/pull/142145) fix(line): accept the shared block streaming settings
- [#141742](https://github.com/openclaw/openclaw/pull/141742) feat(cron): show readable timer wake timestamps
- [#144501](https://github.com/openclaw/openclaw/pull/144501) chore(i18n): refresh native locales
- [#136833](https://github.com/openclaw/openclaw/pull/136833) fix(sessions): reject placement-incompatible model changes before persisting
- [#141592](https://github.com/openclaw/openclaw/pull/141592) fix(ai): prevent terminal-less Responses streams with compression
- [#141777](https://github.com/openclaw/openclaw/pull/141777) feat(cron): query and page run history from the CLI
- [#121144](https://github.com/openclaw/openclaw/pull/121144) fix(discord): report parent channel denies for thread permissions
- [#137335](https://github.com/openclaw/openclaw/pull/137335) fix(cli): reject blank audit bounds
- [#144453](https://github.com/openclaw/openclaw/pull/144453) improve: make session environments searchable
- [#144513](https://github.com/openclaw/openclaw/pull/144513) improve: stop update CLI tests inheriting prior case state
- [#144491](https://github.com/openclaw/openclaw/pull/144491) feat(auth): sign in to OpenRouter from private chat
- [#137230](https://github.com/openclaw/openclaw/pull/137230) fix(feishu): reject excess concurrent webhook reads
- [#136967](https://github.com/openclaw/openclaw/pull/136967) fix(doctor): point USER.md bootstrap truncation at the fixed cap, not bootstrapMaxChars
- [#137969](https://github.com/openclaw/openclaw/pull/137969) fix(discord): honor configured line limits in durable sends
- [#144510](https://github.com/openclaw/openclaw/pull/144510) test(ui): reuse Full Access fixture provisioning
- [#137191](https://github.com/openclaw/openclaw/pull/137191) fix(infra): keep gateway restart timing correct when the system clock steps
- [#144210](https://github.com/openclaw/openclaw/pull/144210) fix(web-fetch): keep visible text after hidden HTML
- [#141527](https://github.com/openclaw/openclaw/pull/141527) docs: explain Control UI browser setup in Docker
- [#144512](https://github.com/openclaw/openclaw/pull/144512) chore(ui): refresh control ui locales
- [#144504](https://github.com/openclaw/openclaw/pull/144504) test(ci): avoid repeated QA Git grace waits
- [#144506](https://github.com/openclaw/openclaw/pull/144506) refactor(tests): simplify embedding batch JSON fixtures
- [#129625](https://github.com/openclaw/openclaw/pull/129625) fix(plugin-sdk): expose async embedding batch runtime
- [#144496](https://github.com/openclaw/openclaw/pull/144496) refactor(discord): remove unused classic model picker layout
- [#144481](https://github.com/openclaw/openclaw/pull/144481) refactor(chat): reuse canonical test helpers
- [#144509](https://github.com/openclaw/openclaw/pull/144509) refactor(tests): share Bedrock AWS SDK config inputs
- [#144497](https://github.com/openclaw/openclaw/pull/144497) fix(usage): clear timeline ranges after session replacement
- [#144156](https://github.com/openclaw/openclaw/pull/144156) fix(doctor): preserve reserved system agent ownership
- [#144505](https://github.com/openclaw/openclaw/pull/144505) refactor: reuse empty task summaries in status fixtures
- [#144498](https://github.com/openclaw/openclaw/pull/144498) fix(webchat): prevent duplicate commentary when item events overtake text
- [#144492](https://github.com/openclaw/openclaw/pull/144492) test(auth): share catalog fixture provider runtime
- [#144420](https://github.com/openclaw/openclaw/pull/144420) fix(models): share API-key editing and removal
- [#144354](https://github.com/openclaw/openclaw/pull/144354) fix(tts): preserve selected summary models
- [#144489](https://github.com/openclaw/openclaw/pull/144489) fix(tests): release singleton fixtures after assertion failures
- [#144485](https://github.com/openclaw/openclaw/pull/144485) refactor(tests): reuse Telegram settled receipt defaults
- [#144292](https://github.com/openclaw/openclaw/pull/144292) fix(agents): avoid sibling output limits for unlisted models
- [#144478](https://github.com/openclaw/openclaw/pull/144478) chore(ui): refresh control ui locales
- [#144367](https://github.com/openclaw/openclaw/pull/144367) fix(doctor): repair fails after removing a bundled plugin alias
- [#144438](https://github.com/openclaw/openclaw/pull/144438) fix(agents): preserve captured fallback model selections
- [#144472](https://github.com/openclaw/openclaw/pull/144472) refactor: share pending plugin claim test setup
- [#144048](https://github.com/openclaw/openclaw/pull/144048) fix(imessage): restore remote attachments for external installs
- [#144469](https://github.com/openclaw/openclaw/pull/144469) fix(deepseek): honor thinking controls for canonical Flash
- [#144266](https://github.com/openclaw/openclaw/pull/144266) fix(cron): forward claude-cli auth profile on scheduled runs to prevent OAuth expiration
- [#144448](https://github.com/openclaw/openclaw/pull/144448) fix(sqlite): speed up read-only snapshot startup
- [#144457](https://github.com/openclaw/openclaw/pull/144457) refactor(google): share media understanding metadata
- [#144466](https://github.com/openclaw/openclaw/pull/144466) fix(ci): keep catalog UI recordings opt-in
- [#144449](https://github.com/openclaw/openclaw/pull/144449) refactor(reply): share exported session tree layout
- [#143538](https://github.com/openclaw/openclaw/pull/143538) fix(update): report the built runtime instead of the unbuilt source version
- [#143995](https://github.com/openclaw/openclaw/pull/143995) fix(gateway): preserve conversation in terminal CLI history
- [#143661](https://github.com/openclaw/openclaw/pull/143661) Keep Slack threads responsive during queued turns
- [#144172](https://github.com/openclaw/openclaw/pull/144172) fix(mattermost): redact active credentials in errors
- [#144461](https://github.com/openclaw/openclaw/pull/144461) test: share active placement abandonment fixtures
- [#144451](https://github.com/openclaw/openclaw/pull/144451) fix: avoid shutdown hangs after database verifier IPC errors
- [#144456](https://github.com/openclaw/openclaw/pull/144456) chore(ui): refresh control ui locales
- [#143879](https://github.com/openclaw/openclaw/pull/143879) fix(channels): Slack native progress shows two task cards for one exec call
- [#144411](https://github.com/openclaw/openclaw/pull/144411) fix(release): set up Node before frozen admission
- [#144101](https://github.com/openclaw/openclaw/pull/144101) feat(android): review conversation changes and reference selected lines
- [#144379](https://github.com/openclaw/openclaw/pull/144379) fix(update): avoid preflight imports when scoping repair environment
- [#144450](https://github.com/openclaw/openclaw/pull/144450) fix: align provider discovery tests with loader-owned roots
- [#144329](https://github.com/openclaw/openclaw/pull/144329) feat(models): add credential-only sign-in and a provider login menu
- [#144431](https://github.com/openclaw/openclaw/pull/144431) fix(pr): recover partially written review transitions
- [#144446](https://github.com/openclaw/openclaw/pull/144446) refactor(tests): consolidate planner rejection coverage
- [#144441](https://github.com/openclaw/openclaw/pull/144441) refactor(discord): simplify action runtime dependencies
- [#144437](https://github.com/openclaw/openclaw/pull/144437) refactor(macos): remove duplicate wake-word gate tests
- [#144445](https://github.com/openclaw/openclaw/pull/144445) refactor(reply): remove duplicate follow-up context
- [#144432](https://github.com/openclaw/openclaw/pull/144432) fix(compaction): preserve configured fallback model selection
- [#144444](https://github.com/openclaw/openclaw/pull/144444) chore(ui): refresh control ui locales
- [#144434](https://github.com/openclaw/openclaw/pull/144434) refactor(gateway): remove device event forwarder
- [#144429](https://github.com/openclaw/openclaw/pull/144429) fix(agents): normalize bare model defaults with captured metadata
- [#144433](https://github.com/openclaw/openclaw/pull/144433) refactor(usage): keep cache state private and test its owner
- [#142866](https://github.com/openclaw/openclaw/pull/142866) fix(sessions): decode saved entries once per patch
- [#144413](https://github.com/openclaw/openclaw/pull/144413) fix(ui): task panel squeezes subagent transcripts beside Show earlier
- [#144442](https://github.com/openclaw/openclaw/pull/144442) fix(ui): limit chat integration descriptions to two lines
- [#144440](https://github.com/openclaw/openclaw/pull/144440) docs(changelog): finalize 2026.9.4 release notes
- [#144435](https://github.com/openclaw/openclaw/pull/144435) fix(ui): match Side chat typography to the main conversation
- [#144436](https://github.com/openclaw/openclaw/pull/144436) fix: report saved credentials and auth refresh failures
- [#144430](https://github.com/openclaw/openclaw/pull/144430) fix(usage): refresh details after a session is recreated
- [#144360](https://github.com/openclaw/openclaw/pull/144360) fix(logs): clear retired records when the tailed file disappears
- [#144425](https://github.com/openclaw/openclaw/pull/144425) refactor(tests): exercise real IRC send utilities
- [#144402](https://github.com/openclaw/openclaw/pull/144402) fix(release): repair updates and warm CLI continuity
- [#144428](https://github.com/openclaw/openclaw/pull/144428) fix: focus side-chat input when opening its panel
- [#144390](https://github.com/openclaw/openclaw/pull/144390) fix(docs): render parameter labels containing angle brackets
- [#144426](https://github.com/openclaw/openclaw/pull/144426) chore(ui): refresh control ui locales
- [#144423](https://github.com/openclaw/openclaw/pull/144423) fix(ui): show permission option icons in WebKit chat composer
- [#144421](https://github.com/openclaw/openclaw/pull/144421) fix(ci): speed up frozen-source admission checks
- [#144399](https://github.com/openclaw/openclaw/pull/144399) fix(ui): keep the model picker open across pane updates
- [#144417](https://github.com/openclaw/openclaw/pull/144417) fix(pdf): keep model selection and reporting consistent
- [#144236](https://github.com/openclaw/openclaw/pull/144236) fix(ci): check frozen contracts before release fanout
- [#144278](https://github.com/openclaw/openclaw/pull/144278) perf(agents): reuse bounded CLI prefix capture
- [#144302](https://github.com/openclaw/openclaw/pull/144302) fix(usage): keep total-only and cache-only footers
- [#144415](https://github.com/openclaw/openclaw/pull/144415) fix(claws): disclose memory source expansion from empty defaults
- [#144405](https://github.com/openclaw/openclaw/pull/144405) docs: fix repeated wording in personal account labels
- [#144407](https://github.com/openclaw/openclaw/pull/144407) docs: remove duplicate secret placeholder guidance
- [#144406](https://github.com/openclaw/openclaw/pull/144406) docs: remove repeated Docker plugin test summary
- [#144408](https://github.com/openclaw/openclaw/pull/144408) docs: remove repeated MCP Apps introduction
- [#144419](https://github.com/openclaw/openclaw/pull/144419) fix: stabilize paginated history eviction coverage
- [#144410](https://github.com/openclaw/openclaw/pull/144410) docs: correct token rate units in Prometheus example
- [#144409](https://github.com/openclaw/openclaw/pull/144409) docs: remove duplicate message prefix migration row
- [#143936](https://github.com/openclaw/openclaw/pull/143936) refactor(ai): compact provider error test cases
- [#144418](https://github.com/openclaw/openclaw/pull/144418) refactor(ui): reuse cron test element helper
- [#123084](https://github.com/openclaw/openclaw/pull/123084) fix(ui): render CJK emphasis and table line breaks
- [#144362](https://github.com/openclaw/openclaw/pull/144362) perf(plugins): reuse warm source-cache records before path normalization
- [#134496](https://github.com/openclaw/openclaw/pull/134496) fix: show exact fallback models in notices and status
- [#144412](https://github.com/openclaw/openclaw/pull/144412) feat(ui): compact the Mentions footer and surface Inbox settings
- [#144389](https://github.com/openclaw/openclaw/pull/144389) fix(docs): restore literal text in expandable titles
- [#144377](https://github.com/openclaw/openclaw/pull/144377) fix: preserve heartbeat outcomes across retries and cancellation
- [#143935](https://github.com/openclaw/openclaw/pull/143935) refactor(tui): compact session action test cases
- [#143934](https://github.com/openclaw/openclaw/pull/143934) refactor(feishu): compact channel action test cases
- [#143933](https://github.com/openclaw/openclaw/pull/143933) refactor(tui): compact command handler test cases
- [#143988](https://github.com/openclaw/openclaw/pull/143988) refactor(config): derive memory search types from schema
- [#144187](https://github.com/openclaw/openclaw/pull/144187) fix(config): honor the selected channel's DM wildcard capability
- [#143635](https://github.com/openclaw/openclaw/pull/143635) Keep Slack threads responsive during queued turns
- [#144381](https://github.com/openclaw/openclaw/pull/144381) fix(macos): extract app bundle identifiers without full plist JSON
- [#144386](https://github.com/openclaw/openclaw/pull/144386) refactor(tests): exercise real Twitch target utilities
- [#144340](https://github.com/openclaw/openclaw/pull/144340) refactor: remove unused ignore matcher compatibility
- [#143322](https://github.com/openclaw/openclaw/pull/143322) fix(discord): refuse unavailable model runtime selections
- [#144181](https://github.com/openclaw/openclaw/pull/144181) fix: preserve model login settings and refresh gateway auth
- [#144385](https://github.com/openclaw/openclaw/pull/144385) perf(ui): keep transcript history cached during worker setup
- [#144376](https://github.com/openclaw/openclaw/pull/144376) perf(tailscale): remove unreachable application search
- [#144382](https://github.com/openclaw/openclaw/pull/144382) refactor(ui): remove duplicate NO_REPLY test
- [#144393](https://github.com/openclaw/openclaw/pull/144393) fix(docs): restore the complete Show widget reference
- [#143943](https://github.com/openclaw/openclaw/pull/143943) test(live): retain fallback models for capped provider proof
- [#143957](https://github.com/openclaw/openclaw/pull/143957) test(matrix): accept raced top-level progress finals
- [#143966](https://github.com/openclaw/openclaw/pull/143966) fix(agents): retain embedded generated-media provenance
- [#143989](https://github.com/openclaw/openclaw/pull/143989) fix(qa): close Crabline after gateway shutdown
- [#143992](https://github.com/openclaw/openclaw/pull/143992) fix(qa): close Crabline after gateway shutdown
- [#144388](https://github.com/openclaw/openclaw/pull/144388) docs: restore the skill creation tutorial steps
- [#142746](https://github.com/openclaw/openclaw/pull/142746) fix(agents): preserve HTTP conversations with uppercase keys
- [#144365](https://github.com/openclaw/openclaw/pull/144365) perf(imessage): bound content work while coalescing messages
- [#143987](https://github.com/openclaw/openclaw/pull/143987) refactor(config): derive MCP server types from schema
- [#143985](https://github.com/openclaw/openclaw/pull/143985) refactor(config): derive hook types from schemas
- [#143986](https://github.com/openclaw/openclaw/pull/143986) refactor(config): derive agent defaults from schema
- [#144328](https://github.com/openclaw/openclaw/pull/144328) refactor(update): retire obsolete post-activation stop path
- [#144350](https://github.com/openclaw/openclaw/pull/144350) perf(agents): append ordered CLI reasoning deltas incrementally
- [#144338](https://github.com/openclaw/openclaw/pull/144338) fix(ci): prepare selected release native fixtures
- [#144343](https://github.com/openclaw/openclaw/pull/144343) perf(ui): adopt completed transcript indexes without copying
- [#144323](https://github.com/openclaw/openclaw/pull/144323) refactor(google): share image provider metadata
- [#144321](https://github.com/openclaw/openclaw/pull/144321) refactor(onboarding): retire dormant catalog validation
- [#144335](https://github.com/openclaw/openclaw/pull/144335) refactor(ui): test asset resolution through the real filesystem
- [#144309](https://github.com/openclaw/openclaw/pull/144309) test(auth): share stale fallback profile fixtures
- [#144284](https://github.com/openclaw/openclaw/pull/144284) fix(ui): keep retained conversation panes in stable slots
- [#144332](https://github.com/openclaw/openclaw/pull/144332) fix(doctor): preserve selected model context in tool diagnostics
- [#144342](https://github.com/openclaw/openclaw/pull/144342) refactor(models): remove superseded catalog paths
- [#144339](https://github.com/openclaw/openclaw/pull/144339) refactor(gateway): remove duplicate ready-status test
- [#144344](https://github.com/openclaw/openclaw/pull/144344) docs: remove migration commentary from Why OpenClaw
- [#144312](https://github.com/openclaw/openclaw/pull/144312) fix(docs): validate examples against source plugin schemas
- [#144133](https://github.com/openclaw/openclaw/pull/144133) docs: fix 20 link defects confirmed live in the verified backlog
- [#144330](https://github.com/openclaw/openclaw/pull/144330) fix: isolate task cancellation fixtures from background wakes
- [#144246](https://github.com/openclaw/openclaw/pull/144246) fix(sessions): include remote default branch changes in review
- [#144311](https://github.com/openclaw/openclaw/pull/144311) perf(cli): prepare ordered completion groups once
- [#144154](https://github.com/openclaw/openclaw/pull/144154) fix(crabbox): reuse managed CLI across QA and remote proof
- [#144305](https://github.com/openclaw/openclaw/pull/144305) perf(models): reuse the first-wins catalog identity index
- [#144300](https://github.com/openclaw/openclaw/pull/144300) refactor: share completed Matrix verification test setup
- [#143711](https://github.com/openclaw/openclaw/pull/143711) feat(control-ui): show plugin icons on tool calls
- [#129001](https://github.com/openclaw/openclaw/pull/129001) fix(auto-reply): queue instead of steering after a terminal source-reply receipt
- [#144275](https://github.com/openclaw/openclaw/pull/144275) fix(config): preserve literal provider-prefixed model IDs
- [#144195](https://github.com/openclaw/openclaw/pull/144195) fix: retain setup credentials after a failed connection check
- [#144254](https://github.com/openclaw/openclaw/pull/144254) fix(media): resolve image aliases with the request's metadata
- [#144285](https://github.com/openclaw/openclaw/pull/144285) refactor(image): share provider request dispatch
- [#144303](https://github.com/openclaw/openclaw/pull/144303) refactor(cron): remove duplicate delivery test
- [#144298](https://github.com/openclaw/openclaw/pull/144298) refactor(scripts): avoid duplicate SDK source scans
- [#144301](https://github.com/openclaw/openclaw/pull/144301) refactor(tests): simplify LM Studio JSON response fixtures
- [#144296](https://github.com/openclaw/openclaw/pull/144296) refactor(msteams): decode inline images during materialization
- [#144290](https://github.com/openclaw/openclaw/pull/144290) perf(plugins): avoid temporary collections in provider policy lookup
- [#144279](https://github.com/openclaw/openclaw/pull/144279) fix(docs): reject unpublished permalink routes
- [#144297](https://github.com/openclaw/openclaw/pull/144297) refactor: simplify Buzz directory relay test setup
- [#143881](https://github.com/openclaw/openclaw/pull/143881) fix(slack): honor relay proxy settings without direct fallback
- [#144287](https://github.com/openclaw/openclaw/pull/144287) fix(test): avoid plugin discovery in parent model matching
- [#144112](https://github.com/openclaw/openclaw/pull/144112) refactor(protocol): simplify generated schema registration
- [#144129](https://github.com/openclaw/openclaw/pull/144129) fix(ci): reject invalid frozen contracts for Docker aliases
- [#144274](https://github.com/openclaw/openclaw/pull/144274) test: share supervised commit request fixtures
- [#144267](https://github.com/openclaw/openclaw/pull/144267) refactor: retire unused setup mutation inputs
- [#144273](https://github.com/openclaw/openclaw/pull/144273) refactor(tests): share UI bootstrap deferred fixtures
- [#144264](https://github.com/openclaw/openclaw/pull/144264) refactor(doctor): remove duplicate fallback-notice test
- [#144127](https://github.com/openclaw/openclaw/pull/144127) fix(ui): keep snapshot builds visible when image loading fails
- [#144261](https://github.com/openclaw/openclaw/pull/144261) refactor(tests): share New Session agent roster inputs
- [#144247](https://github.com/openclaw/openclaw/pull/144247) test: exercise session cleanup through real queues
- [#144220](https://github.com/openclaw/openclaw/pull/144220) refactor: share resource cleanup for side questions
- [#144242](https://github.com/openclaw/openclaw/pull/144242) perf(build): skip hashes before mandatory cache restores
- [#144260](https://github.com/openclaw/openclaw/pull/144260) refactor: simplify stored goal fixtures in command tests
- [#143804](https://github.com/openclaw/openclaw/pull/143804) fix(cron): complete ownerless manual runs without timing out
- [#144239](https://github.com/openclaw/openclaw/pull/144239) fix(ui): avoid extra session reads after a queued refresh
- [#144257](https://github.com/openclaw/openclaw/pull/144257) fix(ci): shorten the full CLI test tail without more shards
- [#144206](https://github.com/openclaw/openclaw/pull/144206) perf(sqlite): reduce repeated plugin-state write compilation
- [#144249](https://github.com/openclaw/openclaw/pull/144249) refactor(tests): share MiniMax HTTP assertion fixtures
- [#144069](https://github.com/openclaw/openclaw/pull/144069) fix: Gateway restarts fail when child processes need forced cleanup
- [#144234](https://github.com/openclaw/openclaw/pull/144234) refactor(agents): remove unused pending message state
- [#143588](https://github.com/openclaw/openclaw/pull/143588) feat(models): align native sign-in and model runtime choices
- [#144228](https://github.com/openclaw/openclaw/pull/144228) refactor(ui): centralize Memory panel Gateway lifecycle ownership
- [#144224](https://github.com/openclaw/openclaw/pull/144224) fix(sessions): diagnose slow archive-pruning stages
- [#144230](https://github.com/openclaw/openclaw/pull/144230) perf(plugins): reuse completed metadata owners
- [#144238](https://github.com/openclaw/openclaw/pull/144238) fix: keep selected models in lightweight and worker inference
- [#144225](https://github.com/openclaw/openclaw/pull/144225) refactor(agents): remove duplicate OpenAI attribution test
- [#144041](https://github.com/openclaw/openclaw/pull/144041) fix(models): preserve session selections and enforce exact allowlists
- [#143819](https://github.com/openclaw/openclaw/pull/143819) fix(deepseek): preserve object-union tool arguments
- [#143525](https://github.com/openclaw/openclaw/pull/143525) fix(chat): keep earlier answers visible after tool continuations
- [#144217](https://github.com/openclaw/openclaw/pull/144217) test: cover real run ownership in queued compaction
- [#144219](https://github.com/openclaw/openclaw/pull/144219) fix(ui): release retired plugin attribution entries
- [#143503](https://github.com/openclaw/openclaw/pull/143503) fix(tooling): join memory profiler children within cleanup deadlines
- [#143961](https://github.com/openclaw/openclaw/pull/143961) fix(agents): preserve selected models through fallback and auth refresh
- [#144196](https://github.com/openclaw/openclaw/pull/144196) refactor(cron): share outcome application for scheduled and manual runs
- [#144185](https://github.com/openclaw/openclaw/pull/144185) test(update): keep staged Doctor checks at the package owner
- [#144215](https://github.com/openclaw/openclaw/pull/144215) refactor(imessage): remove unused persisted echo mirror
- [#144208](https://github.com/openclaw/openclaw/pull/144208) fix(update): keep retired handoff records from refusing unrelated sources
- [#144024](https://github.com/openclaw/openclaw/pull/144024) refactor: test provider HTTP policy through shared owners
- [#144197](https://github.com/openclaw/openclaw/pull/144197) improve(tests): close port fixtures on failure and report unavailable binds
- [#144211](https://github.com/openclaw/openclaw/pull/144211) refactor: reuse account setup in Twilio send tests
- [#144198](https://github.com/openclaw/openclaw/pull/144198) fix(plugin-state): reduce redundant quota work during large updates
- [#144201](https://github.com/openclaw/openclaw/pull/144201) test: consolidate QA UI raw capture fixtures
- [#144186](https://github.com/openclaw/openclaw/pull/144186) refactor(policy): preserve diagnostics with shared validation
- [#144168](https://github.com/openclaw/openclaw/pull/144168) fix(agents): clamp configured input caps to model windows
- [#143753](https://github.com/openclaw/openclaw/pull/143753) fix(webchat): expose inline uploads to file tools
- [#140983](https://github.com/openclaw/openclaw/pull/140983) fix(telegram): distinguish forum chats by topic title
- [#144070](https://github.com/openclaw/openclaw/pull/144070) fix(buzz): keep eligible rooms online and restore granted rooms
- [#144189](https://github.com/openclaw/openclaw/pull/144189) refactor(cron): derive schedule and state from wire contracts
- [#144194](https://github.com/openclaw/openclaw/pull/144194) refactor(agents): remove duplicate OpenAI routing test
- [#144138](https://github.com/openclaw/openclaw/pull/144138) refactor(wear): share initial state for phone changes
- [#144193](https://github.com/openclaw/openclaw/pull/144193) fix(ui): remove misleading links from position previews
- [#144182](https://github.com/openclaw/openclaw/pull/144182) fix(models): preserve exact authored pricing
- [#121871](https://github.com/openclaw/openclaw/pull/121871) fix(chat): stop duplicating a channel reply into two bubbles when it used reasoning
- [#144180](https://github.com/openclaw/openclaw/pull/144180) fix(models): keep catalog capabilities with their routes
- [#144188](https://github.com/openclaw/openclaw/pull/144188) refactor(tests): share OpenAI embedding batch inputs
- [#144167](https://github.com/openclaw/openclaw/pull/144167) refactor(cloud-workers): consolidate the snapshot feature surface
- [#143735](https://github.com/openclaw/openclaw/pull/143735) fix(msteams): ignore reactions outside allowed team channels
- [#143540](https://github.com/openclaw/openclaw/pull/143540) perf(cli): reuse prepared channel setup options

#### 🐛 New Issues
- [#143752](https://github.com/openclaw/openclaw/issues/143752) [Bug]: Interrupted package activation can strand the canonical CLI without package-only replay `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬6
- [#144516](https://github.com/openclaw/openclaw/issues/144516) [Bug]: Custom-provider onboarding cannot define thinking levels `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬5
- [#143757](https://github.com/openclaw/openclaw/issues/143757) [Bug]: Windows Scheduled Task default config cannot run the gateway unattended (InteractiveToken + LogonTrigger + wscript action); 90/181 s readiness timeout also shorter than cold boot `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬5
- [#143640](https://github.com/openclaw/openclaw/issues/143640) memory-core: full index publish runs in a single IMMEDIATE transaction, exhausting the 5s busy timeout of concurrent agent DB writes `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬5
- [#144066](https://github.com/openclaw/openclaw/issues/144066) [BUG]: gpt-5.4/gpt-5.4-mini intermittently misrouted to openai-codex instead of api.openai.com after a stale auth_profile_state.order entry survives profile removal `bug` `regression` `clawsweeper:needs-info` `impact:auth-provider` 💬4
- [#144424](https://github.com/openclaw/openclaw/issues/144424) Concurrent heartbeat lanes on unrelated dashboard sessions collide, trip real Anthropic 429s, and the retry backoff isn't honored (self-sustaining storm) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#143980](https://github.com/openclaw/openclaw/issues/143980) [Bug]: taskSuggestions.accept fails with "sessions.create cwd is unavailable: lstat '/workspace'" for Docker-sandboxed agents `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#144447](https://github.com/openclaw/openclaw/issues/144447) [Bug]: Git/dev update ends in managed-service-preflight after candidate startup deadline `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬3
- [#143646](https://github.com/openclaw/openclaw/issues/143646) Control UI: cron.sessionRetention renders 'Unsupported schema node' — normalizeUnion cannot merge a literal branch with a non-boolean scalar branch `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#144025](https://github.com/openclaw/openclaw/issues/144025) [Bug]: External iMessage plugin media contract is missed, silently skipping remote attachments `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#144306](https://github.com/openclaw/openclaw/issues/144306) [Feature]: Allow automations to deliver to a paired node so scheduled results can reach the app as notifications `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#144124](https://github.com/openclaw/openclaw/issues/144124) resolvePairingSetupAuthLabel reports misleading "no token or password" error for gateway.auth.mode none/trusted-proxy `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#144094](https://github.com/openclaw/openclaw/issues/144094) Gateway crash-loops under launchd on macOS: boots to "ready", then self-terminates within ~1s via [admission] closed: restart drain `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬3
- [#144006](https://github.com/openclaw/openclaw/issues/144006) [Bug]: explicit tts tool causes double delivery on Telegram `bug` `bug:behavior` `P2` `impact:message-loss` 💬3
- [#143685](https://github.com/openclaw/openclaw/issues/143685) [Bug]: Failed isolated sandbox runs leave created containers running until prune `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬3
- [#143580](https://github.com/openclaw/openclaw/issues/143580) Heartbeat lane: post-tool continuation sent without transcript → confused non-silent reply delivered to channel (2026.9.3) `P1` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬3
- [#144152](https://github.com/openclaw/openclaw/issues/144152) [Bug]: Channels page ignores plugin icons when channel and plugin IDs differ `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#143623](https://github.com/openclaw/openclaw/issues/143623) Telegram transport broken in 2026.9.3 — approval delivery fails `P1` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬2
- [#144150](https://github.com/openclaw/openclaw/issues/144150) web_fetch hidden-content sanitizer discards visible page content: hidden matched inside unrelated attribute values, and drop region runs to end of document on omitted end tags `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#144160](https://github.com/openclaw/openclaw/issues/144160) [Bug]: configured-fallback model inherits maxTokens from an unrelated models[0] row and labels it user-configured `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#144176](https://github.com/openclaw/openclaw/issues/144176) Device inventory memory bar always red on macOS due to os.freemem() misunderstanding `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#144325](https://github.com/openclaw/openclaw/issues/144325) [Bug]: dev update repair refuses migrations after removing a bundled Codex alias `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#144047](https://github.com/openclaw/openclaw/issues/144047) [Bug]: 2026.9.3 claude-cli backend: cron/isolated followup runs never forward the claude-cli auth profile (user turns do) → "OAuth session expired" on every scheduled job `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#144331](https://github.com/openclaw/openclaw/issues/144331) buzz: all threads in a room share one session, so concurrent thread conversations serialize (distinct from #144203) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#144357](https://github.com/openclaw/openclaw/issues/144357) [Bug]: Recorded update warnings corrupt plaintext transcripts output `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬2
- [#144148](https://github.com/openclaw/openclaw/issues/144148) [Bug]: heartbeat_respond scratch is not persisted when the heartbeat notifies (notify=true / needs_attention) on 2026.9.3 `impact:session-state` `impact:data-loss` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#144395](https://github.com/openclaw/openclaw/issues/144395) [Bug]: Tapping an automation reply notification opens the correct conversation but it renders empty `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#144401](https://github.com/openclaw/openclaw/issues/144401) Codex app-server display cap can emit foreign bytes into user-visible response `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:session-state` 💬2
- [#144203](https://github.com/openclaw/openclaw/issues/144203) buzz: channel restart drops in-flight inbound silently (Buzz inbound is not on the durable ingress queue) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#144286](https://github.com/openclaw/openclaw/issues/144286) LM Studio models onboarded with reasoning:true hang indefinitely on openai-completions (model finishes, agent stays 'pondering') `impact:auth-provider` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#144240](https://github.com/openclaw/openclaw/issues/144240) Hosted Molty instance has no browser binary for browser automation `P0` `impact:ux-release-blocker` 💬2
- [#144179](https://github.com/openclaw/openclaw/issues/144179) sessions delete permanently vetoed by a retired Codex binding generation on non-Codex sessions `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#143790](https://github.com/openclaw/openclaw/issues/143790) DeepSeek tool-schema normalisation drops all but the first `anyOf` variant for object unions, making MCP tools with union parameters uncallable `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#144191](https://github.com/openclaw/openclaw/issues/144191) install: fail closed when npm latest has no matching git tag `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#144137](https://github.com/openclaw/openclaw/issues/144137) [Bug]: Orphan claude-cli process spawned without --resume after CLI timeout, producing disconnected/contextless replies (2026.7.1-2, Telegram, claude-cli backend) `P1` `impact:session-state` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬2
- [#144132](https://github.com/openclaw/openclaw/issues/144132) Fresh-profile updates to npm stable initialize an incompatible database `maintainer` `clawsweeper:source-repro` `P0` `issue-rating: 🦞 diamond lobster` 💬2
- [#144114](https://github.com/openclaw/openclaw/issues/144114) Task status notifications copy runtime-owned detail they do not use `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#144103](https://github.com/openclaw/openclaw/issues/144103) openai-completions custom provider sends masked/sentinel Authorization header instead of real API key `P1` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬2
- [#143852](https://github.com/openclaw/openclaw/issues/143852) Skill-update maintenance job depends on abandoned/broken 'clawdhub' package instead of maintained 'clawhub' `P2` `impact:other` 💬2
- [#143821](https://github.com/openclaw/openclaw/issues/143821) active-memory: recall sub-agent runs for inter-session deliveries (sessions_send / subagent settle) in visible sessions `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#144035](https://github.com/openclaw/openclaw/issues/144035) [Bug]: SQLite admission warnings omit native/service timing and release details `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬2
- [#144059](https://github.com/openclaw/openclaw/issues/144059) chat.send truncates X status URLs before before_prompt_build hooks `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:session-state` 💬2
- [#143951](https://github.com/openclaw/openclaw/issues/143951) Exec-completion heartbeat wake with lightContext invalidates foreground KV cache `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#144019](https://github.com/openclaw/openclaw/issues/144019) [Bug]: Windows tray passes unsupported --node-version to install-cli.sh, setup cannot complete `P0` `impact:ux-release-blocker` 💬2
- [#144001](https://github.com/openclaw/openclaw/issues/144001) gateway install --runtime node duplicates env wrapper path instead of Node executable and entry point (macOS) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#143973](https://github.com/openclaw/openclaw/issues/143973) [Bug]: view_image tool results persist full base64 inline in transcript_events — 1.3% of events hold 80% of store bytes `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#143952](https://github.com/openclaw/openclaw/issues/143952) [Bug] apply_patch/write silent no-op when tool-result round-trip drops (2026.9.3) `P1` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬2
- [#143939](https://github.com/openclaw/openclaw/issues/143939) Slow artifact cleanup logs do not identify preparation work `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬2
- [#143902](https://github.com/openclaw/openclaw/issues/143902) [Feature]: Read-only, owner-scoped automation visibility for automation-run sessions (watchdog pattern) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#143915](https://github.com/openclaw/openclaw/issues/143915) [Feature]: Opt-in replaceable public-body streaming previews `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#143894](https://github.com/openclaw/openclaw/issues/143894) Model command tests collide with the managed-handoff legacy fixture `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬2
- [#143750](https://github.com/openclaw/openclaw/issues/143750) [Bug]: Update rollback can mutate packages and launchers after executor ownership is lost `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#143787](https://github.com/openclaw/openclaw/issues/143787) Heartbeat NO_REPLY re-commits and re-delivers the last final reply (2026.9.3) `P2` `impact:session-state` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬2
- [#143672](https://github.com/openclaw/openclaw/issues/143672) [Bug]: @openclaw/feishu 2026.9.3: all feishu_* tools unregistered in multi-account config (overlayMapPath credential check fails with ${VAR} SecretRefs) `bug` `regression` `P1` `impact:auth-provider` 💬2
- [#143638](https://github.com/openclaw/openclaw/issues/143638) UI-created sessions auto-nest under agent main and can no longer be pinned (regression) `P2` `impact:ux-friction` 💬2
- [#143632](https://github.com/openclaw/openclaw/issues/143632) Inbound iMessage messages re-delivered 2-3x into session context: ghost copies carry serialized internal context envelope in body (same message_id, dedupe not applied) `P2` `impact:session-state` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬2
- [#143581](https://github.com/openclaw/openclaw/issues/143581) Signal inbound message stuck in 'attempt disposed before transcript write' spool retry loop for ~23h — replies delayed hours until gateway restart (2026.9.3) `P1` `clawsweeper:needs-info` `impact:session-state` `impact:message-loss` 💬2
- [#143624](https://github.com/openclaw/openclaw/issues/143624) cron: timed-out current-target run still blocks manual admission after active markers clear `maintainer` `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬2
- [#144527](https://github.com/openclaw/openclaw/issues/144527) bundle-mcp: every isolated cron run leaks a session MCP runtime until live runtime limit (256) reached; mcp.sessionIdleTtlMs does not evict `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#144526](https://github.com/openclaw/openclaw/issues/144526) Prepare progress-card storage for asynchronous database operations `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#144522](https://github.com/openclaw/openclaw/issues/144522) Browser Talk never collects the spoken confirmation for high-impact tools, so voice-originated runs can never execute 💬1
- [#144443](https://github.com/openclaw/openclaw/issues/144443) Make New Session environment selection searchable and distinguish Auto mode `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#144515](https://github.com/openclaw/openclaw/issues/144515) [Bug]: Skill collection review has no per-agent opt-out — one broken agent's weekly review can only be disabled by disabling every agent's `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144514](https://github.com/openclaw/openclaw/issues/144514) Exec tool timeout (~900s) aborts the whole run as OPENCLAW_DIRECT_ABORT instead of returning a tool error `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#144471](https://github.com/openclaw/openclaw/issues/144471) [Bug]: WebChat duplicates commentary when a completed item overtakes its final text delta `maintainer` `P2` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#144502](https://github.com/openclaw/openclaw/issues/144502) WhatsApp mobile can't play TTS voice notes (48 kHz + Lavf vendor tag) — 'audio unavailable', download fails `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#144500](https://github.com/openclaw/openclaw/issues/144500) web_search: document and preflight Perplexity freshness/date-range conflict `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#144494](https://github.com/openclaw/openclaw/issues/144494) [Bug]: channels.start reports false for an admitted account omitted by plugin inventory `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#144493](https://github.com/openclaw/openclaw/issues/144493) [Bug]: Failed chunking upgrade hides available lexical memory `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#144487](https://github.com/openclaw/openclaw/issues/144487) [Bug]: Memory retries credit_balance_exhausted quota errors `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#144486](https://github.com/openclaw/openclaw/issues/144486) Expose native sub-agent (Agent/Task) result to plugins for at-source capture `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144476](https://github.com/openclaw/openclaw/issues/144476) exec auto-reviewer hard-caps output at 360 tokens → fails closed on long/complex commands `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#144477](https://github.com/openclaw/openclaw/issues/144477) Add a download action for assets opened in the Browser sidebar `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#144470](https://github.com/openclaw/openclaw/issues/144470) [Feature]: Log Signal envelope age and local ingress admission time `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144460](https://github.com/openclaw/openclaw/issues/144460) [Bug]: 2026.9.2 gateway hangs with main thread in futex wait; localhost health/RPC and graceful shutdown unresponsive `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬1
- [#144459](https://github.com/openclaw/openclaw/issues/144459) Update failure: unexpected-error (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#144093](https://github.com/openclaw/openclaw/issues/144093) [Feature]: Review conversation code changes in the Android app `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#144455](https://github.com/openclaw/openclaw/issues/144455) Turn dies with "no active tool authority snapshot"; reply generated but never delivered (message_tool_only path) `P1` `impact:message-loss` 💬1
- [#144378](https://github.com/openclaw/openclaw/issues/144378) [Bug]: refresh bundled provider model catalog for DeepSeek V4.1 renaming (and handle legacy model ids in releases) `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#144125](https://github.com/openclaw/openclaw/issues/144125) [Bug]: doctor reports the reserved system agent dir (agents/openclaw) as an orphan `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#144173](https://github.com/openclaw/openclaw/issues/144173) [Bug]: Mattermost API error text reflects the bot token when a server echoes request headers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#144422](https://github.com/openclaw/openclaw/issues/144422) Protect Gateway-initiated inline Git updates with an external recovery owner `maintainer` `P2` `impact:data-loss` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#144361](https://github.com/openclaw/openclaw/issues/144361) Warm plugin source-cache hits repeat filename normalization `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#144403](https://github.com/openclaw/openclaw/issues/144403) [Feature]: Compact the Mentions footer and surface shared Inbox notification settings `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#144380](https://github.com/openclaw/openclaw/issues/144380) Valid Mac bundle identifiers are lost when unrelated plist data cannot be serialized `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#144400](https://github.com/openclaw/openclaw/issues/144400) [Bug]: Heartbeat cron run stays `running` after its session finished, then fails with `FOREIGN KEY constraint failed`; the global `cron-in-progress` gate blocks every other agent meanwhile `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144374](https://github.com/openclaw/openclaw/issues/144374) Add toolsAllow filter to sessions_spawn for scoped subagent tool access `P2` `impact:security` 💬1
- [#144384](https://github.com/openclaw/openclaw/issues/144384) Unchanged worker setup invalidates cached transcript history `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#144398](https://github.com/openclaw/openclaw/issues/144398) [Bug]: Subsequent Codex sandbox turns fail against a retired exec-server URL `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#144375](https://github.com/openclaw/openclaw/issues/144375) Tailscale fallback search cannot reach its required binary path `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#144392](https://github.com/openclaw/openclaw/issues/144392) cli-backend silently drops session history when resume aborts (falls back to useResume=false with no warning) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#144391](https://github.com/openclaw/openclaw/issues/144391) [Feature]: Config-driven system prompt section overrides (global, per-agent, user-ready) `P3` 💬1
- [#144383](https://github.com/openclaw/openclaw/issues/144383) [Bug]: Review silently falls back to HEAD when the default branch cannot be resolved `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#144364](https://github.com/openclaw/openclaw/issues/144364) iMessage coalescing collects content beyond its output bounds `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#144349](https://github.com/openclaw/openclaw/issues/144349) Ordered CLI reasoning deltas repeatedly rebuild the full block order `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#144368](https://github.com/openclaw/openclaw/issues/144368) [Bug]: Skills watcher readiness restarts an unchanged warm Claude CLI session `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#144372](https://github.com/openclaw/openclaw/issues/144372) sessions_history: add server-side filtering, summary mode, and durable compaction archive `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144370](https://github.com/openclaw/openclaw/issues/144370) Persist and retry pending channel deliveries across gateway restart drain `P1` `clawsweeper:needs-info` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#144371](https://github.com/openclaw/openclaw/issues/144371) Emit channel-visible notice when session model switches `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144373](https://github.com/openclaw/openclaw/issues/144373) Add structured truncation flag to tool results `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144369](https://github.com/openclaw/openclaw/issues/144369) Session transcript: add per-turn origin attribution (main agent vs mirrored process, model ID) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144356](https://github.com/openclaw/openclaw/issues/144356) [Bug]: Updates fail on Linux installations with no Gateway service `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#144341](https://github.com/openclaw/openclaw/issues/144341) Transcript projections copy already completed lookup indexes `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#144358](https://github.com/openclaw/openclaw/issues/144358) [Bug]: Multi-account channel schemas erase catchall input/output types `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#144353](https://github.com/openclaw/openclaw/issues/144353) buzz: make the room-history budget (ENTRY_BYTES/CONTEXT_BYTES) configurable per account; 1 KB truncates the messages an agent is asked about `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144334](https://github.com/openclaw/openclaw/issues/144334) Control UI asset tests duplicate filesystem behavior behind a production facade `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#144283](https://github.com/openclaw/openclaw/issues/144283) Retained conversations reload when another pane is evicted `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#144336](https://github.com/openclaw/openclaw/issues/144336) Deferred config-reload restart (SIGUSR1) fails its shutdown step: "Failed to reset global singleton lifecycle state | service child cleanup identity lost" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#144205](https://github.com/openclaw/openclaw/issues/144205) [Bug]: All changes misses branch commits when origin/HEAD is absent `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#144310](https://github.com/openclaw/openclaw/issues/144310) Shell completion repeatedly resolves and registers adjacent command groups `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#144304](https://github.com/openclaw/openclaw/issues/144304) Configured model catalogs rebuild the first-wins identity index `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#144327](https://github.com/openclaw/openclaw/issues/144327) [Feature]: Restore progress-idle semantics for Codex timeoutSeconds across execution and Gateway ownership `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143683](https://github.com/openclaw/openclaw/issues/143683) Show plugin icons on chat tool calls `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#144235](https://github.com/openclaw/openclaw/issues/144235) [Bug]: frozen release workflows lack admission before downstream work `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#144295](https://github.com/openclaw/openclaw/issues/144295) Teams attachment discovery decodes inline images before materialization `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#144308](https://github.com/openclaw/openclaw/issues/144308) [Bug] Hours-long provider Retry-After is honored as a minimum wait by the transient-retry budget, so quota-exhaustion 429s never reach model fallback within a turn (2026.9.3) `P1` `impact:message-loss` `impact:auth-provider` 💬1
- [#144307](https://github.com/openclaw/openclaw/issues/144307) [Bug]: macOS Tailscale status probes can orphan and retain gigabytes when exposure is off `P2` `clawsweeper:needs-info` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬1
- [#144288](https://github.com/openclaw/openclaw/issues/144288) Provider policy lookup allocates temporary ownership sets and registry sorts `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#144299](https://github.com/openclaw/openclaw/issues/144299) Update failure: unexpected-error (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#144277](https://github.com/openclaw/openclaw/issues/144277) Avoid repeated copying of retained CLI output prefixes `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#144294](https://github.com/openclaw/openclaw/issues/144294) [Feature]: OTEL enhancements for skill and LLM evaluations `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#144291](https://github.com/openclaw/openclaw/issues/144291) Config hot-reload aborts every in-flight agent turn: "prepared model runtime plugin generation was superseded" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#144280](https://github.com/openclaw/openclaw/issues/144280) [Bug]: Managed update failure reports drop phases retained in the update ledger `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#144276](https://github.com/openclaw/openclaw/issues/144276) Control UI split view: balance panes command, even split by default, pane tint from session colour `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144270](https://github.com/openclaw/openclaw/issues/144270) [Bug]: Control UI reply preview clears during IME Escape `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#144245](https://github.com/openclaw/openclaw/issues/144245) Exercise session cleanup through its real writer queues `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#144265](https://github.com/openclaw/openclaw/issues/144265) [Bug]: sessions_send misclassifies visible dashboard spawn-child sessions and triggers stale runtime announce failures `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#144241](https://github.com/openclaw/openclaw/issues/144241) Skip destination validation for mandatory build cache restores `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#144263](https://github.com/openclaw/openclaw/issues/144263) [Bug]: memory index: local embedding provider stalls when a batch exceeds ~300s — no configurable request timeout `bug` `regression` `P2` `clawsweeper:needs-live-repro` 💬1
- [#144255](https://github.com/openclaw/openclaw/issues/144255) [Bug]: Control UI New Session caps native Codex reasoning at High `P2` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#144233](https://github.com/openclaw/openclaw/issues/144233) Remove unused pending messaging projections from agent subscriptions `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#144248](https://github.com/openclaw/openclaw/issues/144248) [Bug]: process poll can exit one-shot agents with code 13 `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#144250](https://github.com/openclaw/openclaw/issues/144250) [Bug]: Tool array and channel-context text mutate within one session, rewriting the Anthropic prompt prefix while prompt-cache reports no tracked cache input change `P2` `impact:other` 💬1
- [#144229](https://github.com/openclaw/openclaw/issues/144229) Reuse selected plugin metadata lifecycle resources during completion `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#144218](https://github.com/openclaw/openclaw/issues/144218) Release retired plugin attribution entries after catalog changes `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#144213](https://github.com/openclaw/openclaw/issues/144213) Remove redundant persisted iMessage echo state `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#144223](https://github.com/openclaw/openclaw/issues/144223) 2026.9.3 cloud workers: every turn on a freshly attached worker rejected with embedded-tool-authority mismatch; remote workspace never materializes `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#144216](https://github.com/openclaw/openclaw/issues/144216) Update failure: database-schema-preflight (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#144212](https://github.com/openclaw/openclaw/issues/144212) Session cleanup repeatedly validates large databases and miscounts archive storage `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#144207](https://github.com/openclaw/openclaw/issues/144207) [Bug]: [2026.9.3] heartbeat-main cron ignora cron.enabled: false `bug` `regression` `P2` `issue-rating: 🦪 silver shellfish` 💬1
- [#144204](https://github.com/openclaw/openclaw/issues/144204) [Hook pack install] `openclaw plugins install` rejects valid hook pack with `package.json missing openclaw.extensions` `P2` `impact:ux-friction` 💬1
- [#144200](https://github.com/openclaw/openclaw/issues/144200) [Bug]: Source launcher converts child signals into normal exit codes `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#144190](https://github.com/openclaw/openclaw/issues/144190) [Feature]: Workboard — support multi-project management for a single agent `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144184](https://github.com/openclaw/openclaw/issues/144184) Update failure: managed-service-handoff-failed (2026.9.3) `P0` `impact:ux-release-blocker` 💬1
- [#144171](https://github.com/openclaw/openclaw/issues/144171) [Bug]: Windows gateway permanently locked out by stale lock-reclaim dir after a restart crashes mid-reclaim `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `impact:crash-loop` 💬1
- [#144164](https://github.com/openclaw/openclaw/issues/144164) Bug: web_search never forwards sandboxed to provider resolution, so the sandboxed trust filter is a no-op `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#143865](https://github.com/openclaw/openclaw/issues/143865) zalouser: doctor legacy-config migration defers on undeclared promotion surface (missing singleAccountKeysToMove opt-out) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#144151](https://github.com/openclaw/openclaw/issues/144151) TTS stream cleaner mishandles a chunk split between the two opening brackets, leaking hidden speech text or swallowing the rest of the reply `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#144149](https://github.com/openclaw/openclaw/issues/144149) image_generate, video_generate and music_generate ignore tools.fs.workspaceOnly when loading local media references `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:security` 💬1
- [#143743](https://github.com/openclaw/openclaw/issues/143743) refactor(scripts): share dead-code scan orchestration `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#144139](https://github.com/openclaw/openclaw/issues/144139) Configured models lose selectable context-window choices in the startup catalog `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#144123](https://github.com/openclaw/openclaw/issues/144123) [Bug]: Docker-only frozen admission skips plugin and upgrade contracts `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#144134](https://github.com/openclaw/openclaw/issues/144134) [Feature]: Expose WebExtensions tab IDs alongside stable browser handles `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#144118](https://github.com/openclaw/openclaw/issues/144118) Internal fallback text (settled-finalization / storage-failure) is delivered to channel-bound sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144104](https://github.com/openclaw/openclaw/issues/144104) [BUG] Gateway CPU spin (~145% sustained) caused by memory-tdai plugin: Missing core module dist/extensionAPI.js after upgrade to 2026.9.x `P1` `impact:crash-loop` 💬1
- [#144100](https://github.com/openclaw/openclaw/issues/144100) [bug] /status reports Context >100% (e.g. "71k/33k (216%)") for Ollama models with 128k real context `P2` `impact:ux-friction` 💬1
- [#144040](https://github.com/openclaw/openclaw/issues/144040) [Bug]: docs navigation test is not aligned with Releases/Contributing split `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#143830](https://github.com/openclaw/openclaw/issues/143830) Paginated read results are falsely redacted during trajectory export `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#144063](https://github.com/openclaw/openclaw/issues/144063) [Bug]: "Gateway restart config-patch ok" notice is sent to the owner on the NEXT gateway start, hours after the config.patch, with the stale reason and a doctor --non-interactive recommendation `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#144064](https://github.com/openclaw/openclaw/issues/144064) [Feature]: Show last-used time and failure counters in models auth list `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#144057](https://github.com/openclaw/openclaw/issues/144057) [Bug]: Control UI shows "Control UI did not start" twice on the first open after an image upgrade, on a browser that had the previous build; Try again renders it `bug` `bug:behavior` `P2` `issue-rating: 🦪 silver shellfish` 💬1
- [#144052](https://github.com/openclaw/openclaw/issues/144052) Update failure: managed-service-handoff-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#143971](https://github.com/openclaw/openclaw/issues/143971) Review silently falls back to session diff when a file link cannot be opened `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#144042](https://github.com/openclaw/openclaw/issues/144042) Allow configured remote image origins in Control UI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#143818](https://github.com/openclaw/openclaw/issues/143818) [Withdrawn] `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#144027](https://github.com/openclaw/openclaw/issues/144027) [Bug]: Remote iMessage PDFs with ampersands in filenames are rejected before transfer `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#144016](https://github.com/openclaw/openclaw/issues/144016) [Bug]: opencode-go dispatch resolves models against the frozen seed catalog, not the live one `bug` `bug:behavior` `P1` `impact:auth-provider` 💬1
- [#144020](https://github.com/openclaw/openclaw/issues/144020) Session store wedged permanently by pending transcript archive export after session deletion (dispatch hard-fails until restart) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `impact:session-state` 💬1
- [#144013](https://github.com/openclaw/openclaw/issues/144013) @larksuite/openclaw-lark v2026.7.16 incompatible with OpenClaw 2026.9.3: LarkClient.runtime.config.loadConfig is not a function `P1` `impact:message-loss` 💬1
- [#144008](https://github.com/openclaw/openclaw/issues/144008) Multi-store sentinel "(multiple)" leaks into agent database paths — stray $HOME/(multiple).<agentId>.sqlite after the 2026.9.3 upgrade `P2` `impact:other` 💬1
- [#143998](https://github.com/openclaw/openclaw/issues/143998) Update failure: plugin-target-unavailable (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#143990](https://github.com/openclaw/openclaw/issues/143990) [Bug]: agents add wizard cannot recreate a deleted agent id when it stores auth `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#143756](https://github.com/openclaw/openclaw/issues/143756) Matrix: consolidate public message action parsing in one execution owner `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#143947](https://github.com/openclaw/openclaw/issues/143947) Consolidate Mattermost reaction dispatch `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#143970](https://github.com/openclaw/openclaw/issues/143970) Review file editor needs a word-wrap toggle for long lines `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#143963](https://github.com/openclaw/openclaw/issues/143963) Feature: Human-owner read-only view of direct (agent:main:main) sessions in webchat GUI `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143941](https://github.com/openclaw/openclaw/issues/143941) test(desktop): qualify Match over the default Crabbox node carrier `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#143946](https://github.com/openclaw/openclaw/issues/143946) [Feature]: Web Push "Agent finished" notifications can't be attributed to a session, unlike other categories `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143940](https://github.com/openclaw/openclaw/issues/143940) Add Staan (European search index) as a bundled web_search provider `P3` 💬1
- [#143932](https://github.com/openclaw/openclaw/issues/143932) [Bug]: cron agent turns fail with transcript idempotency key ...:terminal-error conflicts with admitted message (2026.9.3) `P1` `impact:session-state` 💬1
- [#143885](https://github.com/openclaw/openclaw/issues/143885) Expose current holders of slow session lifecycle queues `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#143918](https://github.com/openclaw/openclaw/issues/143918) Update failure: unexpected-error (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#143898](https://github.com/openclaw/openclaw/issues/143898) Cron: skip-missed tolerance for low-frequency schedules + exponential backoff for error retries after provider rate-limit bursts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143900](https://github.com/openclaw/openclaw/issues/143900) Control UI auto-opens "Ask OpenClaw" update-failure triage on every load; no durable dismiss/acknowledge `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143841](https://github.com/openclaw/openclaw/issues/143841) [Bug]: update may verify a replacement Gateway without its settle window `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#143876](https://github.com/openclaw/openclaw/issues/143876) Update failure: plugin-target-unavailable (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#143878](https://github.com/openclaw/openclaw/issues/143878) Grouped skill display in the chat composer's slash/$ picker (surface the grouped skill folders) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143843](https://github.com/openclaw/openclaw/issues/143843) Room event participation prompt regression between 2026.7.1-2 and 2026.9.1 causes meta-commentary in responses `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#143842](https://github.com/openclaw/openclaw/issues/143842) workboard dispatch stamps every ready card on every tick even when it starts no worker (metadata budget churn, evidence loss) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#143829](https://github.com/openclaw/openclaw/issues/143829) Feature: watch the live desktop in browser Picture-in-Picture `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#143800](https://github.com/openclaw/openclaw/issues/143800) Bug: CPU and event-loop delay are missing on Linux Bun `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#143825](https://github.com/openclaw/openclaw/issues/143825) Update failure: preflight-no-good-commit (2026.9.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#143826](https://github.com/openclaw/openclaw/issues/143826) Plan OpenClawPrime five-agent Server01 deployment 💬1
- [#143797](https://github.com/openclaw/openclaw/issues/143797) [Bug]: Unconfigured npm self-update fails post-plugin config validation `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#143794](https://github.com/openclaw/openclaw/issues/143794) Update failure: database-schema-preflight (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#143786](https://github.com/openclaw/openclaw/issues/143786) [Bug]: Doctor blocks upgrades when an implicit Codex preference has no installed plugin `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#143784](https://github.com/openclaw/openclaw/issues/143784) file_fetch always inlines images, making the documented mediaId -> file_write copy path unusable for image files `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143707](https://github.com/openclaw/openclaw/issues/143707) [Bug]: Claude CLI returns billing error when ample usage room exists `bug` `no-stale` `regression` `P1` 💬1
- [#143778](https://github.com/openclaw/openclaw/issues/143778) [Bug]: Telegram-topic cron jobs can persist duplicate topic routing `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#143764](https://github.com/openclaw/openclaw/issues/143764) [Docs Bug]: Vertex ADC path requires the literal credential value "gcp-vertex-credentials", undocumented `bug` `docs` `P2` `clawsweeper:source-repro` 💬1
- [#143630](https://github.com/openclaw/openclaw/issues/143630) [Bug]: `openclaw configure` install-loop for Moonshot provider — npm-spec installed plugin is never recognized as installed `bug` `regression` `impact:auth-provider` `P0` 💬1
- [#143678](https://github.com/openclaw/openclaw/issues/143678) Bug: full backups omit required external config include files `maintainer` `P2` `clawsweeper:source-repro` `impact:data-loss` 💬1
- [#143641](https://github.com/openclaw/openclaw/issues/143641) EmbeddedBlockChunker: forced breaks cut mid-sentence and leave code fences unbalanced `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#143740](https://github.com/openclaw/openclaw/issues/143740) [Bug]: Slack progress card waits for first complete preamble, causing a 10–19s silent gap `P2` `impact:ux-friction` 💬1
- [#143739](https://github.com/openclaw/openclaw/issues/143739) Docs feedback: /help `impact:session-state` `impact:message-loss` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#143733](https://github.com/openclaw/openclaw/issues/143733) openclaw security audit hangs indefinitely on Windows + 2026.9.3 (kills all CLI invocations) `security` `P2` `clawsweeper:needs-info` `impact:security` 💬1
- [#143718](https://github.com/openclaw/openclaw/issues/143718) Plugin hook cannot distinguish why a model call failed; errorCategory is present but uninformative `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#143656](https://github.com/openclaw/openclaw/issues/143656) refactor(tasks): share audit summary counting `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#143713](https://github.com/openclaw/openclaw/issues/143713) [Bug]: macOS Control UI hangs in JavaScriptCore RegExp while handling WebSocket messages `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬1
- [#143714](https://github.com/openclaw/openclaw/issues/143714) Heartbeat HEARTBEAT_OK triggers empty-response retry and bogus “resend request” message `maintainer` `P2` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬1
- [#143703](https://github.com/openclaw/openclaw/issues/143703) Update failure: verifying (2026.9.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#143701](https://github.com/openclaw/openclaw/issues/143701) 2026.9.2: background exec completion receives silent-delivery instructions while user task remains unfinished `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143694](https://github.com/openclaw/openclaw/issues/143694) [Bug]: acpx sessions_send rewrites valid ACP session as implicit native and returns ACP_SESSION_INIT_FAILED `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#143691](https://github.com/openclaw/openclaw/issues/143691) Update failure: unexpected-error (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#143654](https://github.com/openclaw/openclaw/issues/143654) Consolidate cloud worker protocol validation and workspace ownership `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#143650](https://github.com/openclaw/openclaw/issues/143650) Update failure: unexpected-error (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#143607](https://github.com/openclaw/openclaw/issues/143607) [Feature]: type in chat while an existing session loads `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#143617](https://github.com/openclaw/openclaw/issues/143617) [Feature]: Synology Chat — first-class plugin.approval surface (text rendering, setup guidance, tests) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143612](https://github.com/openclaw/openclaw/issues/143612) [Bug]: 9.2's builtin `dashboard` command unregisters the Telegram Mini App launcher `P1` `impact:ux-friction` 💬1
- [#143618](https://github.com/openclaw/openclaw/issues/143618) [Feature]: Zalo — first-class plugin.approval surface (text rendering, setup guidance, tests) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143614](https://github.com/openclaw/openclaw/issues/143614) [Feature]: Feishu — first-class plugin.approval support (card-first via typed interactions, text fallback) `P2` `impact:ux-friction` 💬1
- [#143619](https://github.com/openclaw/openclaw/issues/143619) [Bug] Feedback export CLI fails - diagnostics export also broken `P3` 💬1
- [#143616](https://github.com/openclaw/openclaw/issues/143616) [Feature]: Nextcloud Talk — first-class plugin.approval surface (text rendering, setup guidance, tests) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#143593](https://github.com/openclaw/openclaw/issues/143593) Doctor media migration leaves canonical archives inconsistent with exported files `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#143609](https://github.com/openclaw/openclaw/issues/143609) macOS LaunchAgent service-env does not refresh durable env changes on gateway restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#143608](https://github.com/openclaw/openclaw/issues/143608) Issue on docs `P3` 💬1
- [#143604](https://github.com/openclaw/openclaw/issues/143604) [Feature]: Complete keyboard navigation for the chat position rail `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#143596](https://github.com/openclaw/openclaw/issues/143596) Placed repository session falls back to Gateway-local execution when Codex node approval expires (misclassified as auth 401) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:security` 💬1
- [#143584](https://github.com/openclaw/openclaw/issues/143584) Plugin-wide plugin-state cap is enforced with a namespace-scoped eviction, so a full store can never self-heal (memory-core wedged fleet-wide for 24 days) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1

#### 🔒 Closed Issues
- [#125626](https://github.com/openclaw/openclaw/issues/125626) OpenClaw 2026.8.1 beta feedback
- [#139714](https://github.com/openclaw/openclaw/issues/139714) [Bug]: post-core update resume child admits an update_runs row it can never finalize — `openclaw status` reports "update in progress" forever
- [#132762](https://github.com/openclaw/openclaw/issues/132762) [Bug]: overflow retry can end successfully on a tool result without final delivery
- [#90711](https://github.com/openclaw/openclaw/issues/90711) [Bug] launchd plist StandardErrorPath hardcoded to /dev/null, hides all gateway stderr (5.28 regression)
- [#107972](https://github.com/openclaw/openclaw/issues/107972) media: agent-scoped roots expose sibling sandbox files
- [#141033](https://github.com/openclaw/openclaw/issues/141033) [Bug] `openclaw infer model run` local execution fails with "secret reference was not materialized by the active runtime" for account-owned provider secrets — same call with `--gateway` succeeds
- [#140770](https://github.com/openclaw/openclaw/issues/140770) [Bug]: context-overflow precheck ignores tool schemas, so max_tokens silently clamps to 1 and replies truncate
- [#91860](https://github.com/openclaw/openclaw/issues/91860) Discord message send ignores maxLinesPerMessage and splits CLI sends at 17 lines
- [#140948](https://github.com/openclaw/openclaw/issues/140948) [Bug]: Gateway crashes with PreparedModelRuntimeOwnerNotPublishedError due to plugin default config mismatch(FIXED)
- [#108893](https://github.com/openclaw/openclaw/issues/108893) [Bug]: Memory embeddings are destined to fail.
- [#143646](https://github.com/openclaw/openclaw/issues/143646) Control UI: cron.sessionRetention renders 'Unsupported schema node' — normalizeUnion cannot merge a literal branch with a non-boolean scalar branch
- [#139110](https://github.com/openclaw/openclaw/issues/139110) OpenAI Responses: stale output_item.done arguments override complete streamed and terminal tool arguments
- [#58574](https://github.com/openclaw/openclaw/issues/58574) [Feature]: readable `nextAt` value for cron job
- [#144025](https://github.com/openclaw/openclaw/issues/144025) [Bug]: External iMessage plugin media contract is missed, silently skipping remote attachments
- [#136338](https://github.com/openclaw/openclaw/issues/136338) [Bug]: every SQLite session-entry patch decodes the session row four times, ~11 patches per turn cost a third of gateway throughput vs 2026.7.1-2
- [#121401](https://github.com/openclaw/openclaw/issues/121401) Control UI: session Web search toggle can look enabled while tools.web.search.enabled is false
- [#143523](https://github.com/openclaw/openclaw/issues/143523) [Bug]: 2026.9.3 re-adds `--task-supervisor < NUL` to generated gateway.cmd (regression of #137813 / #138844)
- [#125842](https://github.com/openclaw/openclaw/issues/125842) [Feature]: Gateway serves its own session/trajectory data over an authenticated read API
- [#112857](https://github.com/openclaw/openclaw/issues/112857) [Feature]: Safe model routing — shadow-mode candidate admission and audit trail for managed tasks (Phase 0-1)
- [#131581](https://github.com/openclaw/openclaw/issues/131581) [Bug]: Codex ACP spawn rejects config-derived max thinking before session creation
- [#136611](https://github.com/openclaw/openclaw/issues/136611) [Bug]: Model picker accepts placement-incompatible runtime for active node session
- [#144150](https://github.com/openclaw/openclaw/issues/144150) web_fetch hidden-content sanitizer discards visible page content: hidden matched inside unrelated attribute values, and drop region runs to end of document on omitted end tags
- [#144160](https://github.com/openclaw/openclaw/issues/144160) [Bug]: configured-fallback model inherits maxTokens from an unrelated models[0] row and labels it user-configured
- [#144325](https://github.com/openclaw/openclaw/issues/144325) [Bug]: dev update repair refuses migrations after removing a bundled Codex alias
- [#144047](https://github.com/openclaw/openclaw/issues/144047) [Bug]: 2026.9.3 claude-cli backend: cron/isolated followup runs never forward the claude-cli auth profile (user turns do) → "OAuth session expired" on every scheduled job
- [#144148](https://github.com/openclaw/openclaw/issues/144148) [Bug]: heartbeat_respond scratch is not persisted when the heartbeat notifies (notify=true / needs_attention) on 2026.9.3
- [#142616](https://github.com/openclaw/openclaw/issues/142616) [Bug] openai-compat /v1/chat/completions: session keys containing ULID-shaped tokens are permanently fenced from the second turn (SessionWorkStartChangedError surfaced as opaque 500)
- [#144240](https://github.com/openclaw/openclaw/issues/144240) Hosted Molty instance has no browser binary for browser automation
- [#143790](https://github.com/openclaw/openclaw/issues/143790) DeepSeek tool-schema normalisation drops all but the first `anyOf` variant for object unions, making MCP tools with union parameters uncallable
- [#121643](https://github.com/openclaw/openclaw/issues/121643) [Bug] Control UI shows duplicate assistant bubbles for Telegram replies (delivery-mirror rendered; turn-start timestamp sorts before user message)
- [#142516](https://github.com/openclaw/openclaw/issues/142516) [Bug]: Android app posts no notification for gateway-injected assistant replies into its own node session (Wear companion does)
- [#144114](https://github.com/openclaw/openclaw/issues/144114) Task status notifications copy runtime-owned detail they do not use
- [#144103](https://github.com/openclaw/openclaw/issues/144103) openai-completions custom provider sends masked/sentinel Authorization header instead of real API key
- [#143852](https://github.com/openclaw/openclaw/issues/143852) Skill-update maintenance job depends on abandoned/broken 'clawdhub' package instead of maintained 'clawhub'
- [#143821](https://github.com/openclaw/openclaw/issues/143821) active-memory: recall sub-agent runs for inter-session deliveries (sessions_send / subagent settle) in visible sessions
- [#141000](https://github.com/openclaw/openclaw/issues/141000) [Bug]: Clock corrections distort bounded Codex turn timeouts
- [#144035](https://github.com/openclaw/openclaw/issues/144035) [Bug]: SQLite admission warnings omit native/service timing and release details
- [#144019](https://github.com/openclaw/openclaw/issues/144019) [Bug]: Windows tray passes unsupported --node-version to install-cli.sh, setup cannot complete
- [#140100](https://github.com/openclaw/openclaw/issues/140100) [Bug]: doctor --session-sqlite import drops every assistant message with provider "codex" (2026.9.2, legacy JSONL → SQLite)
- [#143939](https://github.com/openclaw/openclaw/issues/143939) Slow artifact cleanup logs do not identify preparation work
- [#143389](https://github.com/openclaw/openclaw/issues/143389) [Bug]: WhatsApp /new stalls ~82s on retained subagent tree; per-node scope.refresh repeats full traversal
- [#143894](https://github.com/openclaw/openclaw/issues/143894) Model command tests collide with the managed-handoff legacy fixture
- [#137257](https://github.com/openclaw/openclaw/issues/137257) [Bug]: `## Runtime` below SYSTEM_PROMPT_CACHE_BOUNDARY still voids the prefix cache — tool schemas serialize after the system message
- [#143750](https://github.com/openclaw/openclaw/issues/143750) [Bug]: Update rollback can mutate packages and launchers after executor ownership is lost
- [#115920](https://github.com/openclaw/openclaw/issues/115920) [Bug]: fs-safe reports EACCES as "path is not a regular file under root" (normalizePinnedWriteError catch-all, cf #72362)
- [#143169](https://github.com/openclaw/openclaw/issues/143169) memory_search aborts managed local embedding cold start before ready timeout
- [#143385](https://github.com/openclaw/openclaw/issues/143385) [Bug]: Codex successful Telegram delivery skips history coverage, replaying bulk history
- [#143545](https://github.com/openclaw/openclaw/issues/143545) [Bug]: check:changed fails on clean main since 2026-09-08 (overdue sdk compat record)
- [#138592](https://github.com/openclaw/openclaw/issues/138592) [Bug]: realtime `conversation.item.truncate` uses wall-clock, not audio played — rejected truncates leave the model believing it spoke
- [#143638](https://github.com/openclaw/openclaw/issues/143638) UI-created sessions auto-nest under agent main and can no longer be pinned (regression)
- [#133648](https://github.com/openclaw/openclaw/issues/133648) [Bug]: a LINE channel with Use webhook off receives nothing and still reports healthy
- [#142144](https://github.com/openclaw/openclaw/issues/142144) [Bug]: channels.line.streaming is rejected, so LINE cannot use the shared block streaming controls
- [#144522](https://github.com/openclaw/openclaw/issues/144522) Browser Talk never collects the spoken confirmation for high-impact tools, so voice-originated runs can never execute
- [#141745](https://github.com/openclaw/openclaw/issues/141745) [Feature]: Query and page automation run history from the CLI
- [#144443](https://github.com/openclaw/openclaw/issues/144443) Make New Session environment selection searchable and distinguish Auto mode
- [#144471](https://github.com/openclaw/openclaw/issues/144471) [Bug]: WebChat duplicates commentary when a completed item overtakes its final text delta
- [#144459](https://github.com/openclaw/openclaw/issues/144459) Update failure: unexpected-error (2026.9.3)
- [#144093](https://github.com/openclaw/openclaw/issues/144093) [Feature]: Review conversation code changes in the Android app
- [#144455](https://github.com/openclaw/openclaw/issues/144455) Turn dies with "no active tool authority snapshot"; reply generated but never delivered (message_tool_only path)
- [#144125](https://github.com/openclaw/openclaw/issues/144125) [Bug]: doctor reports the reserved system agent dir (agents/openclaw) as an orphan
- [#144173](https://github.com/openclaw/openclaw/issues/144173) [Bug]: Mattermost API error text reflects the bot token when a server echoes request headers
- [#144361](https://github.com/openclaw/openclaw/issues/144361) Warm plugin source-cache hits repeat filename normalization
- [#144403](https://github.com/openclaw/openclaw/issues/144403) [Feature]: Compact the Mentions footer and surface shared Inbox notification settings
- [#144380](https://github.com/openclaw/openclaw/issues/144380) Valid Mac bundle identifiers are lost when unrelated plist data cannot be serialized
- [#144384](https://github.com/openclaw/openclaw/issues/144384) Unchanged worker setup invalidates cached transcript history
- [#144375](https://github.com/openclaw/openclaw/issues/144375) Tailscale fallback search cannot reach its required binary path
- [#144391](https://github.com/openclaw/openclaw/issues/144391) [Feature]: Config-driven system prompt section overrides (global, per-agent, user-ready)
- [#144364](https://github.com/openclaw/openclaw/issues/144364) iMessage coalescing collects content beyond its output bounds
- [#144349](https://github.com/openclaw/openclaw/issues/144349) Ordered CLI reasoning deltas repeatedly rebuild the full block order
- [#144341](https://github.com/openclaw/openclaw/issues/144341) Transcript projections copy already completed lookup indexes
- [#144334](https://github.com/openclaw/openclaw/issues/144334) Control UI asset tests duplicate filesystem behavior behind a production facade
- [#144283](https://github.com/openclaw/openclaw/issues/144283) Retained conversations reload when another pane is evicted
- [#144205](https://github.com/openclaw/openclaw/issues/144205) [Bug]: All changes misses branch commits when origin/HEAD is absent
- [#144310](https://github.com/openclaw/openclaw/issues/144310) Shell completion repeatedly resolves and registers adjacent command groups
- [#144304](https://github.com/openclaw/openclaw/issues/144304) Configured model catalogs rebuild the first-wins identity index
- [#143683](https://github.com/openclaw/openclaw/issues/143683) Show plugin icons on chat tool calls
- [#144235](https://github.com/openclaw/openclaw/issues/144235) [Bug]: frozen release workflows lack admission before downstream work
- [#144295](https://github.com/openclaw/openclaw/issues/144295) Teams attachment discovery decodes inline images before materialization
- [#144308](https://github.com/openclaw/openclaw/issues/144308) [Bug] Hours-long provider Retry-After is honored as a minimum wait by the transient-retry budget, so quota-exhaustion 429s never reach model fallback within a turn (2026.9.3)
- [#144288](https://github.com/openclaw/openclaw/issues/144288) Provider policy lookup allocates temporary ownership sets and registry sorts
- [#144299](https://github.com/openclaw/openclaw/issues/144299) Update failure: unexpected-error (2026.9.3)
- [#144277](https://github.com/openclaw/openclaw/issues/144277) Avoid repeated copying of retained CLI output prefixes
- [#144245](https://github.com/openclaw/openclaw/issues/144245) Exercise session cleanup through its real writer queues
- [#144241](https://github.com/openclaw/openclaw/issues/144241) Skip destination validation for mandatory build cache restores
- [#144233](https://github.com/openclaw/openclaw/issues/144233) Remove unused pending messaging projections from agent subscriptions
- [#144250](https://github.com/openclaw/openclaw/issues/144250) [Bug]: Tool array and channel-context text mutate within one session, rewriting the Anthropic prompt prefix while prompt-cache reports no tracked cache input change
- [#144229](https://github.com/openclaw/openclaw/issues/144229) Reuse selected plugin metadata lifecycle resources during completion
- [#144218](https://github.com/openclaw/openclaw/issues/144218) Release retired plugin attribution entries after catalog changes
- [#144213](https://github.com/openclaw/openclaw/issues/144213) Remove redundant persisted iMessage echo state
- [#144204](https://github.com/openclaw/openclaw/issues/144204) [Hook pack install] `openclaw plugins install` rejects valid hook pack with `package.json missing openclaw.extensions`
- [#144184](https://github.com/openclaw/openclaw/issues/144184) Update failure: managed-service-handoff-failed (2026.9.3)
- [#143865](https://github.com/openclaw/openclaw/issues/143865) zalouser: doctor legacy-config migration defers on undeclared promotion surface (missing singleAccountKeysToMove opt-out)
- [#143743](https://github.com/openclaw/openclaw/issues/143743) refactor(scripts): share dead-code scan orchestration
- [#144123](https://github.com/openclaw/openclaw/issues/144123) [Bug]: Docker-only frozen admission skips plugin and upgrade contracts
- [#143356](https://github.com/openclaw/openclaw/issues/143356) [Bug]: Stop button remains after turn finishes; clicking it does nothing until page refresh
- [#144104](https://github.com/openclaw/openclaw/issues/144104) [BUG] Gateway CPU spin (~145% sustained) caused by memory-tdai plugin: Missing core module dist/extensionAPI.js after upgrade to 2026.9.x
- [#144100](https://github.com/openclaw/openclaw/issues/144100) [bug] /status reports Context >100% (e.g. "71k/33k (216%)") for Ollama models with 128k real context
- [#144040](https://github.com/openclaw/openclaw/issues/144040) [Bug]: docs navigation test is not aligned with Releases/Contributing split
- [#143830](https://github.com/openclaw/openclaw/issues/143830) Paginated read results are falsely redacted during trajectory export
- [#143971](https://github.com/openclaw/openclaw/issues/143971) Review silently falls back to session diff when a file link cannot be opened
- [#143818](https://github.com/openclaw/openclaw/issues/143818) [Withdrawn]
- [#144016](https://github.com/openclaw/openclaw/issues/144016) [Bug]: opencode-go dispatch resolves models against the frozen seed catalog, not the live one
- [#144013](https://github.com/openclaw/openclaw/issues/144013) @larksuite/openclaw-lark v2026.7.16 incompatible with OpenClaw 2026.9.3: LarkClient.runtime.config.loadConfig is not a function
- [#144008](https://github.com/openclaw/openclaw/issues/144008) Multi-store sentinel "(multiple)" leaks into agent database paths — stray $HOME/(multiple).<agentId>.sqlite after the 2026.9.3 upgrade
- [#143998](https://github.com/openclaw/openclaw/issues/143998) Update failure: plugin-target-unavailable (2026.9.3)
- [#143756](https://github.com/openclaw/openclaw/issues/143756) Matrix: consolidate public message action parsing in one execution owner
- [#143947](https://github.com/openclaw/openclaw/issues/143947) Consolidate Mattermost reaction dispatch
- [#143940](https://github.com/openclaw/openclaw/issues/143940) Add Staan (European search index) as a bundled web_search provider
- [#143932](https://github.com/openclaw/openclaw/issues/143932) [Bug]: cron agent turns fail with transcript idempotency key ...:terminal-error conflicts with admitted message (2026.9.3)
- [#143885](https://github.com/openclaw/openclaw/issues/143885) Expose current holders of slow session lifecycle queues
- [#143918](https://github.com/openclaw/openclaw/issues/143918) Update failure: unexpected-error (2026.9.3)
- [#134604](https://github.com/openclaw/openclaw/issues/134604) [Bug]: memory search results are not monotonic in --max-results; top-1 is not the highest-scoring hit
- [#143841](https://github.com/openclaw/openclaw/issues/143841) [Bug]: update may verify a replacement Gateway without its settle window
- [#143876](https://github.com/openclaw/openclaw/issues/143876) Update failure: plugin-target-unavailable (2026.9.3)
- [#143800](https://github.com/openclaw/openclaw/issues/143800) Bug: CPU and event-loop delay are missing on Linux Bun
- [#143826](https://github.com/openclaw/openclaw/issues/143826) Plan OpenClawPrime five-agent Server01 deployment
- [#122107](https://github.com/openclaw/openclaw/issues/122107) [Bug]: claude-cli Skill discovery breaks after any gateway restart short of a real process respawn (stale skillsSnapshot version, same class as #22517)
- [#143543](https://github.com/openclaw/openclaw/issues/143543) [Bug]: gateway restart writes its intent through a state migration it cannot be allowed to run
- [#143630](https://github.com/openclaw/openclaw/issues/143630) [Bug]: `openclaw configure` install-loop for Moonshot provider — npm-spec installed plugin is never recognized as installed
- [#143678](https://github.com/openclaw/openclaw/issues/143678) Bug: full backups omit required external config include files
- [#143641](https://github.com/openclaw/openclaw/issues/143641) EmbeddedBlockChunker: forced breaks cut mid-sentence and leave code fences unbalanced
- [#143740](https://github.com/openclaw/openclaw/issues/143740) [Bug]: Slack progress card waits for first complete preamble, causing a 10–19s silent gap
- [#143656](https://github.com/openclaw/openclaw/issues/143656) refactor(tasks): share audit summary counting
- [#136392](https://github.com/openclaw/openclaw/issues/136392) Prepare npm and ClawHub releases before a recoverable publication button
- [#143691](https://github.com/openclaw/openclaw/issues/143691) Update failure: unexpected-error (2026.9.3)
- [#143654](https://github.com/openclaw/openclaw/issues/143654) Consolidate cloud worker protocol validation and workspace ownership
- [#129452](https://github.com/openclaw/openclaw/issues/129452) Deepgram Flux models cannot be used for voice-note transcription (V2_MODEL_ON_V1_LISTEN_ENDPOINT)
- [#114602](https://github.com/openclaw/openclaw/issues/114602) [Bug]: Fallback-served turns record no tool.call/tool.result trajectory events (tool side effects invisible to audit)
- [#143650](https://github.com/openclaw/openclaw/issues/143650) Update failure: unexpected-error (2026.9.3)
- [#141078](https://github.com/openclaw/openclaw/issues/141078) Telegram status reactions keep stall timers after pre-dispatch cancellation
- [#143560](https://github.com/openclaw/openclaw/issues/143560) [Bug]: channels remove reports success for an account the channel does not have
- [#143575](https://github.com/openclaw/openclaw/issues/143575) Control UI: dashboard side panel needs one-click expand and restore
- [#143612](https://github.com/openclaw/openclaw/issues/143612) [Bug]: 9.2's builtin `dashboard` command unregisters the Telegram Mini App launcher
- [#143614](https://github.com/openclaw/openclaw/issues/143614) [Feature]: Feishu — first-class plugin.approval support (card-first via typed interactions, text fallback)
- [#143619](https://github.com/openclaw/openclaw/issues/143619) [Bug] Feedback export CLI fails - diagnostics export also broken
- [#143593](https://github.com/openclaw/openclaw/issues/143593) Doctor media migration leaves canonical archives inconsistent with exported files
- [#143608](https://github.com/openclaw/openclaw/issues/143608) Issue on docs
- [#143263](https://github.com/openclaw/openclaw/issues/143263) [Bug]: doctor recommends 'devices rotate --role node' for an operator-only-baseline device, but that rotation is always denied (scope-outside-approved-baseline)
- [#143473](https://github.com/openclaw/openclaw/issues/143473) [Feature]: Show sender identity in shared chat rail previews

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 244,219 · **Open issues:** 41,707 · **Last push:** <1h ago

On September 11, 2026, there were no new releases or merged pull requests for Hermes Agent. A variety of issues were reported, with notable highlights including a critical bug (#107387) where skill slash commands fail silently when routed to the slash worker, and another severe bug (#107484) affecting packaged Windows builds due to SDK GLOBALS being captured before namespace assignment. Additionally, there were multiple issues related to Kanban functionality, such as a missing module error (#107661) and an import issue (#107758). Among the feature requests, #107744 proposed per-task token and cost aggregation for fleet governance, reflecting ongoing enhancements in resource management.

#### 🐛 New Issues
- [#107387](https://github.com/NousResearch/hermes-agent/issues/107387) [bug] Skill slash commands silently drop the prompt when routed to the slash worker — "⚡ Loading skill: <name>" prints, nothing happens `type/bug` `comp/tui` `tool/skills` `P2` 💬6
- [#107484](https://github.com/NousResearch/hermes-agent/issues/107484) Packaged Windows build: ALL runtime disk plugins fail to load — SDK GLOBALS captured before namespace assignment (Object.keys(undefined)) `type/bug` `duplicate` `comp/plugins` `P1` 💬3
- [#107661](https://github.com/NousResearch/hermes-agent/issues/107661) [Bug]: "Kanban unavailable: kanban unavailable: No module named 'agent.session_activity'" `type/bug` `comp/cron` `area/docker` `P3` 💬3
- [#107700](https://github.com/NousResearch/hermes-agent/issues/107700) feat(secrets): source-apply still hydrates the process — handles for tool credentials, wrap for HTTP inject `type/feature` `comp/cli` `area/auth` `P3` 💬3
- [#107774](https://github.com/NousResearch/hermes-agent/issues/107774) [Bug][Desktop/macOS] Collapsed sidebar: open panel tabs paint over the titlebar cluster and cover the expand-sidebar button (unclickable) `type/bug` `P2` `comp/desktop` 💬2
- [#107758](https://github.com/NousResearch/hermes-agent/issues/107758) [Bug]: Kanban unavailable: kanban unavailable: cannot import name 'SKILL_EXCERPT_JOINT' from 'agent.skill_commands' (/app/venv/lib/python3.12/site-packages/agent/skill_commands.py) `type/bug` `duplicate` `comp/cron` `area/docker` 💬2
- [#107304](https://github.com/NousResearch/hermes-agent/issues/107304) desktop: every on-disk plugin fails to load in production builds ("Cannot convert undefined or null to object") `type/bug` `duplicate` `comp/plugins` `P1` 💬2
- [#107721](https://github.com/NousResearch/hermes-agent/issues/107721) Desktop: all runtime-loaded plugins fail after update ("Cannot convert undefined or null to object") `type/bug` `duplicate` `comp/plugins` `P1` 💬2
- [#107698](https://github.com/NousResearch/hermes-agent/issues/107698) docs(secrets): startup apply hydrates os.environ — warn, and point site/identity secrets at the vault `type/docs` `comp/cli` `area/auth` `P3` 💬2
- [#107800](https://github.com/NousResearch/hermes-agent/issues/107800) [Bug]: Desktop (tui_gateway): /prompt is hijacked by the system-prompt viewer; /compose silently discards composed text `type/bug` `comp/cli` `comp/tui` `P2` 💬1
- [#107784](https://github.com/NousResearch/hermes-agent/issues/107784) [Bug]: kanban dependency-kind block re-dispatches the worker with no new input (#28712 loop via a different path) `type/bug` `duplicate` `comp/cron` `P3` 💬1
- [#107780](https://github.com/NousResearch/hermes-agent/issues/107780) [Bug]: top-level --reasoning override is dropped when launching the TUI `type/bug` `comp/cli` `comp/tui` `area/config` 💬1
- [#107744](https://github.com/NousResearch/hermes-agent/issues/107744) Per-task (kanban board) token & cost aggregation for fleet governance `type/feature` `comp/cron` `P3` `area/usage-cost` 💬1
- [#107757](https://github.com/NousResearch/hermes-agent/issues/107757) [Feature]: Always show quantization for local models in the desktop picker `type/feature` `provider/ollama` `P3` `comp/desktop` 💬1
- [#107746](https://github.com/NousResearch/hermes-agent/issues/107746) /save crashes: GatewayRunner has no attribute 'get_adapter' (gateway/slash_commands_session.py:772) `type/bug` `duplicate` `comp/gateway` `platform/telegram` 💬1
- [#107718](https://github.com/NousResearch/hermes-agent/issues/107718) Kanban reliability audit: 19 lifecycle, dispatch, board-isolation, API atomicity, and attachment correctness bugs `type/bug` `comp/agent` `comp/cron` `P3` 💬1
- [#107665](https://github.com/NousResearch/hermes-agent/issues/107665) [Feature]: allow plugins to end the current turn with a controlled response (halt-turn directive) `type/feature` `comp/agent` `comp/plugins` `P3` 💬1
- [#107704](https://github.com/NousResearch/hermes-agent/issues/107704) feat(vault): identity kind (SSN/tax/passport number) — origin-bound fill, payment-class confirm, vision freeze `type/feature` `comp/agent` `tool/browser` `area/auth` 💬1
- [#107705](https://github.com/NousResearch/hermes-agent/issues/107705) docs(secrets): statements/passport scans are not vault items — wrap file tokens, do not read_file them `type/docs` `tool/browser` `area/auth` `P3` 💬1
- [#107752](https://github.com/NousResearch/hermes-agent/issues/107752) [Feature]: Include workspace cwd in NeMo Relay ATOF session and turn events `type/feature` `comp/agent` `comp/plugins` `P3`
- [#107756](https://github.com/NousResearch/hermes-agent/issues/107756) [Bug]: Garbled/distorted audio ("ığk ığk"-like noise) during voice mode on native Windows, persists after disabling TTS and beep `type/bug` `tool/tts` `P2` `needs-repro`
- [#107745](https://github.com/NousResearch/hermes-agent/issues/107745) [Feature]: Static model presets for explicit configuration reuse `type/feature` `comp/cli` `area/config` `P3`
- [#107727](https://github.com/NousResearch/hermes-agent/issues/107727) gateway restart crashes when a managed user unit is read-only `type/bug` `comp/cli` `comp/gateway` `area/nix`
- [#107706](https://github.com/NousResearch/hermes-agent/issues/107706) Desktop MCP editor loses startup timeout and can become stale or unwritable after profile changes `type/bug` `tool/mcp` `P2` `comp/desktop`
- [#107707](https://github.com/NousResearch/hermes-agent/issues/107707) Reach Windows loopback HTTP/SSE MCP servers from a WSL backend without exposing them on the LAN `type/feature` `tool/mcp` `P3` `comp/desktop`

#### 🔒 Closed Issues
- [#96391](https://github.com/NousResearch/hermes-agent/issues/96391) `hermes cron run` bypasses the per-fire usage audit — manual runs are invisible to cost auditing
- [#107484](https://github.com/NousResearch/hermes-agent/issues/107484) Packaged Windows build: ALL runtime disk plugins fail to load — SDK GLOBALS captured before namespace assignment (Object.keys(undefined))
- [#107304](https://github.com/NousResearch/hermes-agent/issues/107304) desktop: every on-disk plugin fails to load in production builds ("Cannot convert undefined or null to object")

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 91,442 · **Open issues:** 7,850 · **Last push:** <1h ago

On September 11, 2026, there were no new releases for vLLM, but several important pull requests were merged, including a bugfix that prevents zero-progress preemption cascades related to deferred KV frees (#49675) and another that explicitly sets the stop_sequence in streaming message_delta events (#55325). Notably, support was added for the DeepSeek-V4.1-Flash model in both Rust and Python frontends (#56208), alongside multiple performance and bugfix improvements for ROCm compatibility. Among the newly reported issues, a significant bug has arisen where the DeepSeek V4 Flash 0731 fails to start under specific configuration conditions, resulting in an assertion error during profiling (#56281).

#### ✅ Merged PRs
- [#49675](https://github.com/vllm-project/vllm/pull/49675) [Bugfix][Core] Stop zero-progress preemption cascades for deferred KV frees
- [#56191](https://github.com/vllm-project/vllm/pull/56191) [Proposal] Simplify noncompiled cudagraph fallback
- [#55325](https://github.com/vllm-project/vllm/pull/55325) [Bugfix] Set stop_sequence explicitly in streaming message_delta event
- [#54968](https://github.com/vllm-project/vllm/pull/54968) [XPU] Add forward_xpu to Mixer2RMSNormGated and FusedRMSNormGated
- [#56335](https://github.com/vllm-project/vllm/pull/56335) [CI/Build] Pin HyperCLOVAX V2 test model revision
- [#56098](https://github.com/vllm-project/vllm/pull/56098) [ROCm][Bugfix][Perf] Tune multi-stream shared experts use; wvSplitKrc fixes
- [#56228](https://github.com/vllm-project/vllm/pull/56228) [Model] DeepSeek-V4.1-Flash Model Definitions
- [#56208](https://github.com/vllm-project/vllm/pull/56208) [Model][Frontend] Support DeepSeek-V4.1-Flash in Rust and Python frontends
- [#56070](https://github.com/vllm-project/vllm/pull/56070) [Bugfix][Frontend] Check EC requirements for each metadata item
- [#56310](https://github.com/vllm-project/vllm/pull/56310) [Bugfix][Multimodal] Restore cached audio inputs with UUIDs
- [#56161](https://github.com/vllm-project/vllm/pull/56161) [Bugfix][ROCm] Create linear layer biases with `requires_grad=False`
- [#56190](https://github.com/vllm-project/vllm/pull/56190) [ROCm][Bugfix] Fix profiler in TheRock image
- [#55531](https://github.com/vllm-project/vllm/pull/55531) [KV Connector] Support symmetric DCP disagg for hybrid mamba models
- [#54192](https://github.com/vllm-project/vllm/pull/54192) [Bugfix] Avoid MistralCommonBackend for HF tokenizers
- [#53695](https://github.com/vllm-project/vllm/pull/53695) [ROCm][Feature] Support KV connectors with ROCM_AITER_UNIFIED_ATTN
- [#56145](https://github.com/vllm-project/vllm/pull/56145) [Core] MRV2 support for fast-prefill
- [#51692](https://github.com/vllm-project/vllm/pull/51692) [ROCm][Perf] Add bpreshuffled blockscaled fp8 GEMM
- [#56286](https://github.com/vllm-project/vllm/pull/56286) [Docs]: quote variable-bearing wheel URLs
- [#54889](https://github.com/vllm-project/vllm/pull/54889) [DCP][Kernel][Perf] Fuse the empty-shard LSE mask into the A2A pack kernel
- [#55579](https://github.com/vllm-project/vllm/pull/55579) [Bugfix][MoE] Fix batched CUTLASS workspace overallocation
- [#55710](https://github.com/vllm-project/vllm/pull/55710) [Bugfix] Honor explicit empty and zero CLI arguments
- [#56247](https://github.com/vllm-project/vllm/pull/56247) [CI/Build][CPU] Fix flaky rust downloads, broken prune flag, and triton-cpu cache coupling
- [#55819](https://github.com/vllm-project/vllm/pull/55819) [Perf] Use UVA-backed contents for MRV2 apply_write
- [#54157](https://github.com/vllm-project/vllm/pull/54157) [Mypy] Fix typing for R/S models
- [#43272](https://github.com/vllm-project/vllm/pull/43272) [Bugfix] Qwen3-VL(-MoE): pass architectures to with_hf_config for pipeline parallelism
- [#56264](https://github.com/vllm-project/vllm/pull/56264) [CI] Enable ruff `INP` to require `__init__.py` under `vllm/`
- [#55465](https://github.com/vllm-project/vllm/pull/55465) [Fast Start] Support fp4
- [#54574](https://github.com/vllm-project/vllm/pull/54574) [Feature][Spec Decode] MTP with separate (possibly quantized) lm head for nemotron
- [#51646](https://github.com/vllm-project/vllm/pull/51646) [Doc] Sync KV event medium terminology after #48123

#### 🐛 New Issues
- [#56217](https://github.com/vllm-project/vllm/issues/56217) [Feature]: DeepSeek-V4.1-Flash Kernels Integration & Optimization Tracker `feature request` `deepseek` `DSv4.1`
- [#56281](https://github.com/vllm-project/vllm/issues/56281) [Bug]: DeepSeek V4 Flash 0731 served with Data Parallel (DP > 1) + Expert Parallel + DSpark speculative decoding on v0.29.0 fails to start with Engine failing to start during `profile_run` with an `AssertionError` in `DPMetadata.make()`. `bug` `speculative-decoding` `deepseek` 💬3
- [#56209](https://github.com/vllm-project/vllm/issues/56209) [Bug]: Beam Search ignores skip_special_tokens and exposes special tokens in decoded output `bug` `rocm` `intel-gpu` 💬3
- [#56347](https://github.com/vllm-project/vllm/issues/56347) [Bug][ROCm]: DeepSeek-V4.1 segfaults on the 3rd decode token with FULL_DECODE_ONLY graphs unless --no-async-scheduling is set `rocm` `deepseek` `DSv4` 💬1
- [#56311](https://github.com/vllm-project/vllm/issues/56311) [Bug]: Persistent KV offload reuses blocks after changing RoPE scaling 💬1
- [#56280](https://github.com/vllm-project/vllm/issues/56280) [Bug]: Requests with Nemotron Image Embeddings Fail With `int(None)` `bug` 💬1
- [#56251](https://github.com/vllm-project/vllm/issues/56251) [Bug]: vLLM 并发缺陷报告：6 项确认缺陷 💬1
- [#56263](https://github.com/vllm-project/vllm/issues/56263) [Bug]: Tool parser non-streaming parse drops post-tool-call text that streaming returns `bug` `tool-calling` 💬1
- [#56206](https://github.com/vllm-project/vllm/issues/56206) [Bug]: v0.29.0 fails to start on SM110 (AGX Thor) — illegal memory access in Qwen GDN prefill warmup `qwen` `quantization` 💬1
- [#56363](https://github.com/vllm-project/vllm/issues/56363) [Bug]: Qwen3-VL fails when using modality-scoped image/video size kwargs (`images_kwargs` / `videos_kwargs`) `bug`
- [#56361](https://github.com/vllm-project/vllm/issues/56361) [Usage]: per-request metrics count parallel-sampling children, usage counts the request
- [#56297](https://github.com/vllm-project/vllm/issues/56297) [Bug]: DeepSeek V4.1 rejects Responses API text content types `deepseek` `DSv4.1`
- [#56283](https://github.com/vllm-project/vllm/issues/56283) [Bug]: --cpu-offload-gb is accepted, reported in non-default args, and then NoopOffloader is selected: weights are never offloaded `bug` `quantization`
- [#56272](https://github.com/vllm-project/vllm/issues/56272) [Feature] Support packed NVFP4 PLE tables in Qwen4Exp `quantization`
- [#56197](https://github.com/vllm-project/vllm/issues/56197) [Bug]: --kv-cache-dtype int4_per_token_head aborts engine init for any head_size that is not a power of two
- [#56180](https://github.com/vllm-project/vllm/issues/56180) Failed: Cuda error /workspace/csrc/custom_all_reduce.cuh:164 'invalid argument' `bug` `quantization`

#### 🔒 Closed Issues
- [#50706](https://github.com/vllm-project/vllm/issues/50706) [Bug]: Mistral3 (HF format): default text-only LLM() init fails in multimodal profiling — "Failed to apply PixtralProcessor on data={'text': '[IMG]'}"
- [#41871](https://github.com/vllm-project/vllm/issues/41871) [Bug]: Stale Triton kernel cache on DGX Spark (sm_121) produces silently garbled outputs — wiping ~/.triton/cache restores correctness
- [#43271](https://github.com/vllm-project/vllm/issues/43271) [Bug]: Qwen3-VL-MoE crashes at init with pipeline parallelism ("No model architectures are specified")
- [#42319](https://github.com/vllm-project/vllm/issues/42319) [Feature]: Add sink to MLA attention
- [#55845](https://github.com/vllm-project/vllm/issues/55845) [Bug] tencent/Hunyuan-A13B-Instruct fails with ImportError: cannot import name 'is_torch_fx_available' (trust_remote_code, transformers v5)
- [#49674](https://github.com/vllm-project/vllm/issues/49674) [Bug]: Deferred KV block frees cause zero-progress preemption cascades with async KV consumers
- [#55324](https://github.com/vllm-project/vllm/issues/55324) [Bug]: /v1/messages streaming omits stop_sequence from message_delta (exclude_unset)
- [#55709](https://github.com/vllm-project/vllm/issues/55709) [Bug]: CLI drops explicit empty prompts and zero token limits

### SGLang (`sgl-project/sglang`)

**Stars:** 35,777 · **Open issues:** 5,287 · **Last push:** <1h ago

On September 11, 2026, SGLang did not have any new releases but saw significant activity with 22 merged pull requests. Notable changes included the refactoring and unification of RoPE execution for DiT models in PR #33555 and enhancements for DeepSeek V4.1, such as the build of tool-call structural tags in PR #38951 and metadata clarifications in PR #38947. Additionally, several bug fixes were implemented, including a resolution for the kv-canary workspace accounting after graph capture (PR #38596) and fixes for the DeepSeek V4/V3.2 DSML tool-call parser in PR #38924. Among the new issues, #38769 raised concerns about the bundled NVSHMEM version bump due to a lacking feature critical for restrictive IB fabrics, highlighting challenges in maintaining compatibility with infrastructure updates.

#### ✅ Merged PRs
- [#33555](https://github.com/sgl-project/sglang/pull/33555) [Diffusion][Refactor] Refactor and unify RoPE execution for DiT models using RotaryEmbedding based on CustomOp
- [#38954](https://github.com/sgl-project/sglang/pull/38954) [Refactor] Generalize DeepSeek V4 compressed pool management
- [#38767](https://github.com/sgl-project/sglang/pull/38767) [AMD][CI] Retire the ROCm 7.0 kernel wheel
- [#38958](https://github.com/sgl-project/sglang/pull/38958) Fix dataclasses.asdict on the msgspec ServerArgs
- [#38404](https://github.com/sgl-project/sglang/pull/38404) [Deps] Retire the CUDA 12 lane
- [#35599](https://github.com/sgl-project/sglang/pull/35599) Support NemotronH_Omni_Reasoning_V3 in SGLang
- [#38596](https://github.com/sgl-project/sglang/pull/38596) Fix KV-canary workspace accounting after graph capture
- [#38566](https://github.com/sgl-project/sglang/pull/38566) [metrics] Report logical prefill token counts
- [#38951](https://github.com/sgl-project/sglang/pull/38951) DeepSeek V4.1: build the tool-call structural tag with the spaced DSML names
- [#38947](https://github.com/sgl-project/sglang/pull/38947) [Refactor] Clarify DeepSeek V4 metadata names for V4.1
- [#36655](https://github.com/sgl-project/sglang/pull/36655) [SM120] Use exact query-head widths for DeepSeek-V4 sparse MLA decode
- [#38169](https://github.com/sgl-project/sglang/pull/38169) [Spec] Stage Inkling MTP draft metadata before verify
- [#38952](https://github.com/sgl-project/sglang/pull/38952) Guard hc_split_sinkhorn against DP attention's empty idle batch
- [#38949](https://github.com/sgl-project/sglang/pull/38949) [Disagg] Support static DSpark PD for DeepSeek V4.1
- [#38558](https://github.com/sgl-project/sglang/pull/38558) [Spec] Support large MTP batches in short-convolution metadata
- [#38946](https://github.com/sgl-project/sglang/pull/38946) [Refactor] Remove prerelease DeepSeek V4.1 config aliases
- [#36631](https://github.com/sgl-project/sglang/pull/36631) [Sampling] Support sampling masks with overlap scheduling
- [#38855](https://github.com/sgl-project/sglang/pull/38855) fix(qsa): dequantize FP8 cached prefixes in the sparse prefill kernels
- [#38801](https://github.com/sgl-project/sglang/pull/38801) [Deps] Raise smg-grpc-servicer floor to >=0.9.0 to unbreak SMG E2E CI
- [#38748](https://github.com/sgl-project/sglang/pull/38748) [AMD] Quantize the bf16 MTP draft experts online to MXFP4 for Qwen3.5
- [#36773](https://github.com/sgl-project/sglang/pull/36773) docs: sync LMSYS SGLang blog cards
- [#38861](https://github.com/sgl-project/sglang/pull/38861) Make the remaining DeepSeek-V4.1 NVIDIA cells start
- [#37306](https://github.com/sgl-project/sglang/pull/37306) [Rust TreeCore] Support external cache linker
- [#38481](https://github.com/sgl-project/sglang/pull/38481) [HiCache] Account for newly pinned ancestors in load-back quota
- [#38349](https://github.com/sgl-project/sglang/pull/38349) [Radix Cache] Fix PureSWA tail release without insertion
- [#38527](https://github.com/sgl-project/sglang/pull/38527) Add INT4 and FP4 lanes to the Ling-3.0-flash-VL cookbook
- [#38826](https://github.com/sgl-project/sglang/pull/38826) [NPU][Hicache] Optimize HiCache L2 IO with Memfabric acc_offload
- [#38775](https://github.com/sgl-project/sglang/pull/38775) [NPU] Set DEEPEP_HYBRID_DEPLOYMENT for new DeepEP tests; switch glm5_2 to w8a8; tune nightly timeouts
- [#38879](https://github.com/sgl-project/sglang/pull/38879) [DeepSeek-V4.1] Optimize DSpark verify and MoE kernels on Blackwell
- [#38350](https://github.com/sgl-project/sglang/pull/38350) [HiCache] Fix side pools to use resolved host allocator
- [#38575](https://github.com/sgl-project/sglang/pull/38575) [AMD] Restore AITER verify runtime sizing reverted by #34647
- [#38881](https://github.com/sgl-project/sglang/pull/38881) [CI] Drop the GPTQ dynamic-config test for the deleted non-Marlin kernel
- [#38829](https://github.com/sgl-project/sglang/pull/38829) [kernel] DSA top-k v2: long-context cluster rework, and NaN padding for the lanes outside a row
- [#38249](https://github.com/sgl-project/sglang/pull/38249) [NPU] fix pp 2 hang on npu
- [#38844](https://github.com/sgl-project/sglang/pull/38844) [Cookbook] DeepSeek-V4.1: add the HiCache L2 knob to the Playground
- [#38839](https://github.com/sgl-project/sglang/pull/38839) Fix the DeepSeek-V4.1 reasoning example and make every NVIDIA cell start
- [#38830](https://github.com/sgl-project/sglang/pull/38830) [JIT] Port the expert-pack MXFP4 kernels to load_jit and fix their launch limits
- [#38842](https://github.com/sgl-project/sglang/pull/38842) Revert "[CI] Temporarily disable GB300 tests"
- [#38784](https://github.com/sgl-project/sglang/pull/38784) [Diffusion][Docs] Sync snapshot and MiniMax-H3 SubBlock features
- [#30575](https://github.com/sgl-project/sglang/pull/30575) [AMD] Enable Fast Triton Sparse MLA backend
- [#38834](https://github.com/sgl-project/sglang/pull/38834) [misc] Update CI permission
- [#38824](https://github.com/sgl-project/sglang/pull/38824) pyproject(xpu): drop human-eval git dep to unblock image build
- [#38336](https://github.com/sgl-project/sglang/pull/38336) [Test] Add offline Transformers loader compatibility checks
- [#31470](https://github.com/sgl-project/sglang/pull/31470) [NVIDIA] Support flashinfer Mega Moe
- [#38581](https://github.com/sgl-project/sglang/pull/38581) [AMD] Restore AMD CI registrations dropped by #37436
- [#32114](https://github.com/sgl-project/sglang/pull/32114) Delete cutlass_mla, non-Marlin GPTQ, AWQ AOT kernel, and Dual Chunk Flash Attention
- [#34459](https://github.com/sgl-project/sglang/pull/34459) Fix DeepSeek-V4 routing: sqrtsoftplus underflow and unfloored renorm
- [#38686](https://github.com/sgl-project/sglang/pull/38686) [AMD] Fix the diffusion perf fixture lookup
- [#38672](https://github.com/sgl-project/sglang/pull/38672) [AMD][CI] Fix UMBP test buffer after MoRI upgrade
- [#38694](https://github.com/sgl-project/sglang/pull/38694) [AMD][CI] Drop the dead miles ROCm 7.0 nightly image build
- [#38763](https://github.com/sgl-project/sglang/pull/38763) [AMD][CI] Publish ROCm 10 release images and kernel wheel
- [#38796](https://github.com/sgl-project/sglang/pull/38796) docker(xpu): install libssl-dev so JIT hicache_hash_cpp builds
- [#38804](https://github.com/sgl-project/sglang/pull/38804) Allow DP attention with DeepSeek V4.1 vision checkpoints
- [#38802](https://github.com/sgl-project/sglang/pull/38802) Add DeepSeek-V4.1 Flash cookbook
- [#33922](https://github.com/sgl-project/sglang/pull/33922) Fix Qwen3.5 GDN multi-item scoring
- [#38735](https://github.com/sgl-project/sglang/pull/38735) [router] Raise chat body cap to 32 MB for multimodal payloads
- [#34767](https://github.com/sgl-project/sglang/pull/34767) [CPU] Fix native KV hash compilation in Xeon image
- [#36098](https://github.com/sgl-project/sglang/pull/36098) Add missing test dependencies to pyproject.toml variants
- [#38677](https://github.com/sgl-project/sglang/pull/38677) [AMD] Update v4 args for agentic workload
- [#38732](https://github.com/sgl-project/sglang/pull/38732) [Simulator] Give the OFFLINE/BLOCKING comparison tolerances real headroom
- [#38753](https://github.com/sgl-project/sglang/pull/38753) [Config] msgspec.Struct for the config tier
- [#37495](https://github.com/sgl-project/sglang/pull/37495) [AMD] ci: move the miles nightlies from rocm700 to rocm10
- [#38752](https://github.com/sgl-project/sglang/pull/38752) [Config] One writer for the declaration stash; no exception to the write seal
- [#38665](https://github.com/sgl-project/sglang/pull/38665) docker(xpu): drop redundant setvars.sh from torch_memory_saver RUN
- [#35051](https://github.com/sgl-project/sglang/pull/35051) [XPU][Fix] Pack device-pointer tables as uint64 to avoid 64-bit address overflow
- [#38770](https://github.com/sgl-project/sglang/pull/38770) [CI] Temporarily disable GB300 tests

#### 🐛 New Issues
- [#38769](https://github.com/sgl-project/sglang/issues/38769) Bump bundled NVSHMEM to 3.7.2: 3.4.5 lacks NVSHMEM_IB_GID_INDEX, which restricted IB fabrics require 💬1
- [#38793](https://github.com/sgl-project/sglang/issues/38793) [Bug] H20 8card can't launch Qwen3.8-Flash-Next-FP8 💬1
- [#38788](https://github.com/sgl-project/sglang/issues/38788) [Bug] Scripted-runtime rid reuse loses a race with rid_to_state release, surfacing as a 60s recv timeout (3 tests red in test/manual/chunked_prefill) 💬1
- [#38846](https://github.com/sgl-project/sglang/issues/38846) [Feature] Expose the effective `max_running_requests` (after the mamba/linear-attention state-cache cap) in `/get_server_info`
- [#38818](https://github.com/sgl-project/sglang/issues/38818) Sync fork to upstream main (2026-09) — 82 conflicts, prerequisite for DeepSeek-V4.1 💬1
- [#38924](https://github.com/sgl-project/sglang/issues/38924) [Bug] DeepSeek V4/V3.2 DSML tool-call parser occasionally wraps arguments in a spurious "arguments"/"input" key
- [#38904](https://github.com/sgl-project/sglang/issues/38904) [Bug] MiniMax H3 GGUF text encoder fails loading folded Conv3D patch embedding
- [#38866](https://github.com/sgl-project/sglang/issues/38866) [HiCache] Track HybridLinear/Mamba pipeline-parallel correctness and support
- [#38902](https://github.com/sgl-project/sglang/issues/38902) [Feature] Store DeepSeek-V4.1 C1/C2 Main KV in packed FP4 on Hopper
- [#38899](https://github.com/sgl-project/sglang/issues/38899) [Bug] DSpark compact SPS profiling ignores forced budgets and fails on ragged mRoPE positions
- [#38889](https://github.com/sgl-project/sglang/issues/38889) [Feature] Move shared cache transfer types out of hicache_storage.py
- [#38871](https://github.com/sgl-project/sglang/issues/38871) [Bug] VisionFlash4Attention drops MiMo-style window attention and sinks
- [#38863](https://github.com/sgl-project/sglang/issues/38863) [Perf] xgrammar backend: rollback() does an O(N) list copy -> O(N^2) grammar bitmask cost under speculative decoding
- [#38815](https://github.com/sgl-project/sglang/issues/38815) [Bug] SWA branching attaches a later Mamba checkpoint to an earlier prefix `bug`
- [#38856](https://github.com/sgl-project/sglang/issues/38856) [Feature] Batched asynchronous Engram host-row prefetch
- [#38819](https://github.com/sgl-project/sglang/issues/38819) [Feature] End-to-end PD disaggregation + DSpark support for DeepSeek-V4.1
- [#38854](https://github.com/sgl-project/sglang/issues/38854) [Bug] Qwen3.5 hybrid (GDN) GPTQ checkpoint: `linear_attn.in_proj_ba` built as quantized although the checkpoint stores `in_proj_a/b` as bf16 → 96× "not found in params_dict", then `gptq_marlin_repack` fails (size_n=96)
- [#38849](https://github.com/sgl-project/sglang/issues/38849) [Bug] GLM 5.3 segfault on MI300 in SGLang scheduler
- [#38840](https://github.com/sgl-project/sglang/issues/38840) [Bug] Encoder-decoder KV cache: shared boundary page is double-freed when page_size > 1
- [#38821](https://github.com/sgl-project/sglang/issues/38821) [Bug] GLM-5.3-Flash vision: single JPEG data URL is misidentified as an unrelated bird on 8x H20
- [#38817](https://github.com/sgl-project/sglang/issues/38817) [Bug] RuntimeError: Promotion for Float8 Types is not supported, attempted to promote Float8_e4m3fn and BFloat16
- [#38795](https://github.com/sgl-project/sglang/issues/38795) [Bug] NVFP4 + flashinfer_cutlass + --speculative-adaptive: CUDA-graph capture raises "Unsupported moe_runner_backend ... Use flashinfer_cutlass instead" for the backend already in use
- [#38794](https://github.com/sgl-project/sglang/issues/38794) [Feature] Korean Localization for SGLang Cookbook
- [#38787](https://github.com/sgl-project/sglang/issues/38787) [Bug] DSA attention: `tl.constexpr` strides in `transform_index_page_table_{prefill,decode}_kernel` cause unbounded Triton recompiles and stall
- [#38785](https://github.com/sgl-project/sglang/issues/38785) pp scheduler in prefill node
- [#38773](https://github.com/sgl-project/sglang/issues/38773) [Bug] flashinfer_mxfp4 crashes on 0-token MoE batches
- [#38768](https://github.com/sgl-project/sglang/issues/38768) [Bug] Qwen3ForSequenceClassification retains random head bias when loading bias-free checkpoints

#### 🔒 Closed Issues
- [#24699](https://github.com/sgl-project/sglang/issues/24699) [Bug] Step3-VL and DeepSeek-OCR2 fail on JPEG image requests when GPU image decoding returns tensors
- [#32111](https://github.com/sgl-project/sglang/issues/32111) Deprecate CUTLASS MLA attention backend
- [#31969](https://github.com/sgl-project/sglang/issues/31969) [Feature] Support Multi-Item Scoring for Qwen3.5 GDN layers
- [#30931](https://github.com/sgl-project/sglang/issues/30931) [Build] Build without CUDA
- [#32112](https://github.com/sgl-project/sglang/issues/32112) Deprecate legacy (non-Marlin) GPTQ kernel and Dual Chunk Flash Attention backend
- [#30955](https://github.com/sgl-project/sglang/issues/30955) [Bug] [minilb] miss abort_request proxy
- [#30932](https://github.com/sgl-project/sglang/issues/30932) stop_regex buffer bound treats [^x] (single-char negated class) as unbounded, defeating the tail-buffering optimization
- [#30353](https://github.com/sgl-project/sglang/issues/30353) [Bug] Uppercase `--log-level` (e.g. `WARN`) hangs the HTTP server: unnormalized value forwarded to uvicorn raises `KeyError` before the socket binds
- [#35765](https://github.com/sgl-project/sglang/issues/35765) Support sampling masks without finite top-k
- [#38818](https://github.com/sgl-project/sglang/issues/38818) Sync fork to upstream main (2026-09) — 82 conflicts, prerequisite for DeepSeek-V4.1
- [#38605](https://github.com/sgl-project/sglang/issues/38605) [Bug] MiniMax-H3 FL2VA generates visually corrupted video with layerwise offloading
- [#35047](https://github.com/sgl-project/sglang/issues/35047) [Bug] Triton device-pointer tables use int64 and overflow on Intel XPU USM addresses

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 127,754 · **Open issues:** 2,474 · **Last push:** 2h ago

On September 11, 2026, the latest release of llama.cpp, version b10901, introduced CPU writes in Vulkan's ggml_backend_vk_cpy_tensor_async for idle contexts, addressing performance improvements for users. Additionally, version b10900 featured enhancements for topk_moe fusion during prefill, while b10899 optimized small matrix operations. Merged pull requests included optimizations for Vulkan operations and speculative fixes for decoding issues with DFlash. Notably, a significant new issue was raised regarding the detection of the special </think> token, which is currently misidentified as regular strings in the evaluation process.

#### 🚀 New Releases
- [b10901](https://github.com/ggml-org/llama.cpp/releases/tag/b10901) b10901
- [b10900](https://github.com/ggml-org/llama.cpp/releases/tag/b10900) b10900
- [b10899](https://github.com/ggml-org/llama.cpp/releases/tag/b10899) b10899
- [b10897](https://github.com/ggml-org/llama.cpp/releases/tag/b10897) b10897
- [b10896](https://github.com/ggml-org/llama.cpp/releases/tag/b10896) b10896
- [b10894](https://github.com/ggml-org/llama.cpp/releases/tag/b10894) b10894
- [b10893](https://github.com/ggml-org/llama.cpp/releases/tag/b10893) b10893
- [b10892](https://github.com/ggml-org/llama.cpp/releases/tag/b10892) b10892
- [b10891](https://github.com/ggml-org/llama.cpp/releases/tag/b10891) b10891
- [b10889](https://github.com/ggml-org/llama.cpp/releases/tag/b10889) b10889

#### ✅ Merged PRs
- [#28669](https://github.com/ggml-org/llama.cpp/pull/28669) models: clean up some dead switch branches in old models
- [#28268](https://github.com/ggml-org/llama.cpp/pull/28268) opencl: add bin kernel `kernel_gemm_noshuffle_q4_0_f32_32b_trans_ila_a8_bin`
- [#28618](https://github.com/ggml-org/llama.cpp/pull/28618) vulkan: use CPU writes in ggml_backend_vk_cpy_tensor_async if the context is idle
- [#28422](https://github.com/ggml-org/llama.cpp/pull/28422) vulkan: use add_alloc_dep to enable topk_moe fusion for prefill
- [#28587](https://github.com/ggml-org/llama.cpp/pull/28587) speculative: fix failed to decode mtmd chunk with DFlash
- [#28457](https://github.com/ggml-org/llama.cpp/pull/28457) vulkan: small M matrix optimizations for qwen
- [#28693](https://github.com/ggml-org/llama.cpp/pull/28693) ci : add self-hosted-gpu-cuda and server-sanitize to hf-jobs
- [#28687](https://github.com/ggml-org/llama.cpp/pull/28687) ci: Update WoA CUDA 13.4 builds to use 13.4.1 GA redistributables
- [#28700](https://github.com/ggml-org/llama.cpp/pull/28700) scripts : use sed instead of grep for version parsing [no ci]
- [#28691](https://github.com/ggml-org/llama.cpp/pull/28691) Increase tolerance for Add fusion tests
- [#28689](https://github.com/ggml-org/llama.cpp/pull/28689) convert : expand Nemotron H conversion fix
- [#28688](https://github.com/ggml-org/llama.cpp/pull/28688) tests : drop SYCL special-casing in test-backend-ops.cpp
- [#28341](https://github.com/ggml-org/llama.cpp/pull/28341) vulkan: use shared-memory reduction for dequant mul_mat_vec on Imagination PowerVR
- [#28330](https://github.com/ggml-org/llama.cpp/pull/28330) memory : avoid allocating V cache for indexer (it's not used) in Qwen3.8-Flash-Next (qwen4exp)
- [#28101](https://github.com/ggml-org/llama.cpp/pull/28101) vulkan : add command-buffer debug labels for GPU profilers
- [#28667](https://github.com/ggml-org/llama.cpp/pull/28667) ggml-cpu(s390x): add repack support for q4_0
- [#28606](https://github.com/ggml-org/llama.cpp/pull/28606) ggml-cpu(s390x): add Q1_0 vector intrinsic support
- [#28643](https://github.com/ggml-org/llama.cpp/pull/28643) model: fix all granite family parameter counts

#### 🐛 New Issues
- [#28679](https://github.com/ggml-org/llama.cpp/issues/28679) Eval bug: The </think> tag detection is detecting strings instead of the special </think> token `bug-unconfirmed` 💬3
- [#28703](https://github.com/ggml-org/llama.cpp/issues/28703) UI: Ability to select model to be used for chat title summarization `enhancement`
- [#28723](https://github.com/ggml-org/llama.cpp/issues/28723) Misc. bug: config-spawned stdio MCP server deadlocks permanently on tool call requests above ~1-5 KB `bug-unconfirmed`
- [#28719](https://github.com/ggml-org/llama.cpp/issues/28719) Misc. bug: gpu-cuda test-backend-ops fails fused ADD_ADD f16/f16 (1.02e-7 > 1e-7)
- [#28722](https://github.com/ggml-org/llama.cpp/issues/28722) Eval bug: WebGPU hy_v4 crashes on macOS in test-llama-archs and test-save-load-state `bug-unconfirmed`
- [#28721](https://github.com/ggml-org/llama.cpp/issues/28721) [Vulkan] Deep-context decode collapses ~8x on Intel Arc Pro B70 (Xe2); RDNA3 does not
- [#28720](https://github.com/ggml-org/llama.cpp/issues/28720) Misc. bug: gguf-split: invalid split limits are not validated `bug-unconfirmed`
- [#28718](https://github.com/ggml-org/llama.cpp/issues/28718) Misc. bug: 10900 fails with ggml-0.23.0 `bug-unconfirmed`
- [#28698](https://github.com/ggml-org/llama.cpp/issues/28698) Eval bug: tick() evicts models which are being requested -> requests fail due to http client error `bug-unconfirmed`
- [#28684](https://github.com/ggml-org/llama.cpp/issues/28684) Eval bug: libllama.so.0: undefined symbol: ggml_flash_attn_ext_set_n_kv_max `bug-unconfirmed`
- [#28680](https://github.com/ggml-org/llama.cpp/issues/28680) Misc. bug: CI syscl : tq1_0 is not handled by sycl backend `bug-unconfirmed`

#### 🔒 Closed Issues
- [#26179](https://github.com/ggml-org/llama.cpp/issues/26179) Eval bug: OpenVINO backend fails on gpt-oss-20b Q4_0/MXFP4 with incompatible reshape on attention weights
- [#28537](https://github.com/ggml-org/llama.cpp/issues/28537) Eval bug: on HIP, a sequence whose prompt shares a llama_decode() batch with another sequence's decode row gets corrupted logits, and every call reports success
- [#25724](https://github.com/ggml-org/llama.cpp/issues/25724) Misc. bug: Webui causing high CPU load in Firefox
- [#28296](https://github.com/ggml-org/llama.cpp/issues/28296) Feature Request: Potential unnecessary V-cache allocation for DSA / Lightning Indexer
- [#28719](https://github.com/ggml-org/llama.cpp/issues/28719) Misc. bug: gpu-cuda test-backend-ops fails fused ADD_ADD f16/f16 (1.02e-7 > 1e-7)
- [#26243](https://github.com/ggml-org/llama.cpp/issues/26243) Feature Request: vulkan: command-buffer debug labels for GPU profilers

### Ollama (`ollama/ollama`)

**Stars:** 180,598 · **Open issues:** 3,952 · **Last push:** <1h ago

On September 11, 2026, Ollama did not release any new versions, but several significant changes were merged, including a version bump for llama.cpp to b10864 and improvements to memory management in the mlxrunner for model loading and eviction. Notable fixes were made to the token repeat limit in llm, which was raised to 100, and the server now unifies capabilities by extracting GGUF metadata. Among new issues, the chat processing issue in the macOS GUI, which fails silently after approximately 6,000 tokens, has gained attention, indicating a potential challenge for users engaging in extensive conversations.

#### ✅ Merged PRs
- [#18327](https://github.com/ollama/ollama/pull/18327) mlx: scope array lifetimes instead of pinning and sweeping
- [#18374](https://github.com/ollama/ollama/pull/18374) llm: raise token repeat limit to 100 and return error instead of incomplete result
- [#18345](https://github.com/ollama/ollama/pull/18345) mlxrunner: check system free memory and wait for evicted runners before loading the next MLX model
- [#18353](https://github.com/ollama/ollama/pull/18353) mlxrunner: Evict prefix cache snapshots from the active conversation
- [#17858](https://github.com/ollama/ollama/pull/17858) server: extract GGUF metadata and unify capabilities
- [#18317](https://github.com/ollama/ollama/pull/18317) llama.cpp: version bump b10864

#### 🐛 New Issues
- [#18360](https://github.com/ollama/ollama/issues/18360) Request: Add cloud support for DeepSeek-V4.1-Flash `model` `cloud` 💬4
- [#18368](https://github.com/ollama/ollama/issues/18368) Chat processing fails silently after about 6k tokens with no GUI notification (macOS GUI) `bug` `app` `macos` 💬4
- [#18375](https://github.com/ollama/ollama/issues/18375) ChatGPT Error `bug` 💬1
- [#18370](https://github.com/ollama/ollama/issues/18370) Runner wedges in Vulkan ggml backend: one thread 100% CPU, GPU idle, generations never complete (0.24.0, AMD UMA APU) 💬1
- [#18373](https://github.com/ollama/ollama/issues/18373) Model loading performance regression `bug` 💬1
- [#18359](https://github.com/ollama/ollama/issues/18359) Native Gemma4 follow-up emits repeated unused50 and HTTP 200 EOF without done 💬1
- [#18361](https://github.com/ollama/ollama/issues/18361) install.sh should not use /usr/share/ollama as home directory for the new ollama user `bug` 💬1
- [#18369](https://github.com/ollama/ollama/issues/18369) qwen2.5vl:3b: one specific JPEG deterministically triggers "Unexpected empty grammar stack after accepting piece: ? (30)" — but only on GPU
- [#18357](https://github.com/ollama/ollama/issues/18357) Gemma3n tool model returns empty tool_calls via /v1 despite `tools` capability

#### 🔒 Closed Issues
- [#18360](https://github.com/ollama/ollama/issues/18360) Request: Add cloud support for DeepSeek-V4.1-Flash
- [#7547](https://github.com/ollama/ollama/issues/7547) Response returns 'null' for 'finish_reason'
- [#8967](https://github.com/ollama/ollama/issues/8967) when using deepseek-r1:1.5b cannot get token usage
- [#14117](https://github.com/ollama/ollama/issues/14117) glm-ocr: failed to fully read image, stopped with "done": false
- [#18178](https://github.com/ollama/ollama/issues/18178) [Cloud] DeepSeek V4.1 Flash request
- [#17783](https://github.com/ollama/ollama/issues/17783) Model size increase in memory - gemma4:31b-mlx
- [#16969](https://github.com/ollama/ollama/issues/16969) /api/tags omits "tools" capability for deepseek-r1 while /api/show reports it correctly
- [#18342](https://github.com/ollama/ollama/issues/18342) Command to dump the actual config use when running `ollama launch`

### LiteLLM (`BerriAI/litellm`)

**Stars:** 58,467 · **Open issues:** 4,998 · **Last push:** <1h ago

Today, LiteLLM released versions v1.100.1 and v1.101.0-rc.2, both of which emphasize the importance of verifying Docker image signatures using cosign, ensuring users maintain security with the pinned commit hash from commit `0112e53`. Among the notable merged pull requests, feature enhancements included the introduction of per-customer fallback budgets for end users in PR #40570 and granular key/team access control for Claude Code marketplace plugins in PR #40518. Additionally, several bug fixes were made, such as resolving issues with server capacity limits in PR #39683 and improving the handling of unknown model requests in PR #40622. A particularly pressing new issue was reported regarding end-user budget resets exceeding PostgreSQL's bind-variable limit, as outlined in issue #40564, which could impact user experience significantly.

#### 🚀 New Releases
- [v1.100.1](https://github.com/BerriAI/litellm/releases/tag/v1.100.1) v1.100.1
- [v1.101.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.101.0-rc.2) v1.101.0-rc.2

#### ✅ Merged PRs
- [#40638](https://github.com/BerriAI/litellm/pull/40638) test: fix stale completion response fixtures
- [#40636](https://github.com/BerriAI/litellm/pull/40636) fix(rate_limiter): skip non-Latin-1 x-litellm-priority header on /v1/messages
- [#40637](https://github.com/BerriAI/litellm/pull/40637) perf(mock): emit admission-time usage chunk on streaming mock_response
- [#40639](https://github.com/BerriAI/litellm/pull/40639) fix(reset_budget_job): reset end users by budget link, not by user id
- [#40542](https://github.com/BerriAI/litellm/pull/40542) feat(newrelic): export team max and remaining budget gauges to the Metric API
- [#40545](https://github.com/BerriAI/litellm/pull/40545) feat(proxy): offload spend tracking to a pod-local collector sidecar
- [#40613](https://github.com/BerriAI/litellm/pull/40613) feat(proxy): gate organization endpoints on an enterprise license
- [#40410](https://github.com/BerriAI/litellm/pull/40410) test(ocr): isolate native Rust bridge contracts
- [#40625](https://github.com/BerriAI/litellm/pull/40625) feat(wandb): default unmapped W&B models to reasoning-capable
- [#40622](https://github.com/BerriAI/litellm/pull/40622) fix(proxy): log rejected unknown-model requests under a placeholder model name
- [#40623](https://github.com/BerriAI/litellm/pull/40623) feat(proxy): let the in-container pgbouncer follow rotating RDS IAM and Azure Entra tokens
- [#40620](https://github.com/BerriAI/litellm/pull/40620) fix(redis): log an open circuit breaker once instead of a traceback per request and count sync timeouts as timeouts
- [#40604](https://github.com/BerriAI/litellm/pull/40604) feat(router): log exact classifier input and masked source request
- [#40629](https://github.com/BerriAI/litellm/pull/40629) chore(github): disable blank issues so filers must use a template
- [#35448](https://github.com/BerriAI/litellm/pull/35448) fix(proxy): let internal users read request/response for their own spend logs
- [#39683](https://github.com/BerriAI/litellm/pull/39683) feat(proxy): share database connections across workers with an in-container pgbouncer
- [#40626](https://github.com/BerriAI/litellm/pull/40626) test(proxy): pass the request to get_marketplace in the archive marketplace test
- [#38413](https://github.com/BerriAI/litellm/pull/38413) feat(redis): add ElastiCache IAM authentication
- [#39296](https://github.com/BerriAI/litellm/pull/39296) fix(proxy): resolve /v1/models limits from the deployment, not the alias
- [#39539](https://github.com/BerriAI/litellm/pull/39539) fix(proxy): dedup latest health checks in SQL and gate the DB save per window
- [#38724](https://github.com/BerriAI/litellm/pull/38724) fix(mcp): bind per-user OAuth credentials to the authenticated LiteLLM caller
- [#35091](https://github.com/BerriAI/litellm/pull/35091) fix(voyage): accept flat list[str] input for contextual embeddings
- [#40518](https://github.com/BerriAI/litellm/pull/40518) feat(proxy): granular key/team access control for Claude Code marketplace plugins
- [#40496](https://github.com/BerriAI/litellm/pull/40496) feat(claude-code): accept https zip archive plugin sources for skills
- [#40616](https://github.com/BerriAI/litellm/pull/40616) fix(mcp): reject initialize with 403 when the key grants no MCP servers
- [#40608](https://github.com/BerriAI/litellm/pull/40608) fix(router): classify encrypted delegated tasks with native Responses
- [#39190](https://github.com/BerriAI/litellm/pull/39190) fix(wandb): preserve reasoning_effort in chat completions
- [#40381](https://github.com/BerriAI/litellm/pull/40381) feat(rust_bridge): count budget-check input tokens in Rust on all LLM routes
- [#40610](https://github.com/BerriAI/litellm/pull/40610) fix(proxy): recreate the Prisma client when the writer session turns read-only
- [#40614](https://github.com/BerriAI/litellm/pull/40614) feat(terraform): prometheus metrics sidecar for the GCP Cloud Run gateway
- [#40387](https://github.com/BerriAI/litellm/pull/40387) fix(proxy): bound concurrent key and spend-counter DB lookups to stop prisma pool thrash
- [#40592](https://github.com/BerriAI/litellm/pull/40592) feat(gateway): launch the componentized gateway image through a pgbouncer-aware supervisor
- [#40594](https://github.com/BerriAI/litellm/pull/40594) perf(rust): count byte-level BPE tokens without the GPT-2 split regex
- [#40479](https://github.com/BerriAI/litellm/pull/40479) feat(infra): scale gateway on per-pod RPS and TPS in Helm and Terraform
- [#40530](https://github.com/BerriAI/litellm/pull/40530) feat(ocr): add core foundation and Mistral adapter
- [#40599](https://github.com/BerriAI/litellm/pull/40599) fix(router): strip Codex harness envelopes before classification
- [#40593](https://github.com/BerriAI/litellm/pull/40593) perf(proxy): reuse cached model group and deployment info in budget reservation
- [#40590](https://github.com/BerriAI/litellm/pull/40590) feat(mock): report admission-time input token count in mock_response usage
- [#40527](https://github.com/BerriAI/litellm/pull/40527) fix(terraform): restore d.Partial(true) on a rejected /key/update
- [#39237](https://github.com/BerriAI/litellm/pull/39237) fix(dashscope): remap chat-shaped api_base to the live rerank route
- [#38509](https://github.com/BerriAI/litellm/pull/38509) feat(pointfive): add the pointfive logging integration
- [#39272](https://github.com/BerriAI/litellm/pull/39272) ci(lint): gate top-level tests/e2e and litellm files in the diff-scoped lint steps
- [#40446](https://github.com/BerriAI/litellm/pull/40446) feat(bedrock): thread aws_session_tags into STS AssumeRole
- [#40581](https://github.com/BerriAI/litellm/pull/40581) fix(model_prices): registry audit 2026-09-10, absorb open pricing PRs
- [#40059](https://github.com/BerriAI/litellm/pull/40059) feat(prometheus): bucket latency by input sequence length
- [#40187](https://github.com/BerriAI/litellm/pull/40187) fix(s3_v2): freeze refreshable credentials before signing and retry 403 uploads with a fresh signature
- [#40485](https://github.com/BerriAI/litellm/pull/40485) fix(openai): drop tool schema regex patterns OpenAI's validator cannot compile
- [#40515](https://github.com/BerriAI/litellm/pull/40515) feat(proxy): list gateway models to Claude Code under Claude-shaped ids and serve requests on them
- [#38974](https://github.com/BerriAI/litellm/pull/38974) fix(proxy): surface runtime-registered callbacks in UI Logging page
- [#40525](https://github.com/BerriAI/litellm/pull/40525) fix(mcp): respect optional discovery capabilities and quiet unsupported methods
- [#40453](https://github.com/BerriAI/litellm/pull/40453) fix(mcp): challenge and scope gateway-owned server authentication
- [#40454](https://github.com/BerriAI/litellm/pull/40454) fix(mcp): report resolved upstream authentication in debug headers
- [#39863](https://github.com/BerriAI/litellm/pull/39863) fix(azure_ai): add passthrough config so router-model relays reach the deployment's own endpoint
- [#40504](https://github.com/BerriAI/litellm/pull/40504) refactor(ocr): move execution architecture into core
- [#40497](https://github.com/BerriAI/litellm/pull/40497) chore(ui): bump smol-toml to fix GHSA-7w5x-hrqm-74c2 osv-scan failure

#### 🐛 New Issues
- [#40564](https://github.com/BerriAI/litellm/issues/40564) [Bug]: End-user budget reset exceeds PostgreSQL's 32,767 bind-variable limit and never completes `bug` `proxy` 💬2
- [#40612](https://github.com/BerriAI/litellm/issues/40612) veriy 💬2
- [#40578](https://github.com/BerriAI/litellm/issues/40578) [Bug]: OpenAI-compatible streaming chunk_parser silently drops in-band `data: {"error": ...}` events (returns empty success instead of raising) `llm translation` 💬1
- [#40548](https://github.com/BerriAI/litellm/issues/40548) [Bug]: `Created By` and `Updated At` columns show `Unknown` / `Unknown date` for all model records in Model Management table `bug` `ui-dashboard` 💬1
- [#40575](https://github.com/BerriAI/litellm/issues/40575) [Bug]: Qwen3.8 tool result is not consumed via native Ollama provider, while OpenAI-compatible Ollama /v1 works `proxy` `llm translation` 💬1
- [#40566](https://github.com/BerriAI/litellm/issues/40566) [Bug]: Groqs failed tool schema error not correctly fed back `bug` `proxy` `llm translation` 💬1
- [#40582](https://github.com/BerriAI/litellm/issues/40582) [Bug]: parse_tool_call_arguments silently drops tool calls with concatenated JSON arguments — split_concatenated_json_objects exists but is not used on this path `bug` `proxy` `llm translation` 💬1
- [#40583](https://github.com/BerriAI/litellm/issues/40583) [Bug]: custom_code and tool_permission guardrails cannot see or block MCP tools sent via Anthropic /v1/messages format `bug` `llm translation` `claude code` 💬1
- [#40570](https://github.com/BerriAI/litellm/issues/40570) [Feature]: Fallback (shared) budget for end users — per-customer floor with a pooled overflow 💬1
- [#40519](https://github.com/BerriAI/litellm/issues/40519) [Bug]: Anthropic Responses bridge emits null reasoning item summary and crashes strict SDKs `proxy` `llm translation` 💬1
- [#40553](https://github.com/BerriAI/litellm/issues/40553) bug(proxy): public team aliases omit model metadata from /v1/models `llm translation`
- [#40598](https://github.com/BerriAI/litellm/issues/40598) [Bug]: Organization API does not enforce the enterprise license `bug` `proxy`
- [#40628](https://github.com/BerriAI/litellm/issues/40628) [Bug]: OpenAI image generation sends `extra_headers` in the JSON body `bug` `llm translation` `SDK`
- [#40601](https://github.com/BerriAI/litellm/issues/40601) [Feature]: Make Allowed Agents explicit instead of empty meaning all agents `proxy`
- [#40591](https://github.com/BerriAI/litellm/issues/40591) [Feature]: Add an environment kill switch for Responses WebSocket `proxy` `llm translation`
- [#40586](https://github.com/BerriAI/litellm/issues/40586) [Bug]: A2A message/send re-discovers agent card from well-known paths instead of using the registered agent_card_params, breaking agents (e.g. Azure AI Foundry) that serve their card elsewhere `proxy` `llm translation`
- [#40585](https://github.com/BerriAI/litellm/issues/40585) Feature request: X-Trust header support for human verification
- [#40580](https://github.com/BerriAI/litellm/issues/40580) Datadog Observability - Cost & Auto-router - Follow-up request for PR #39320
- [#40577](https://github.com/BerriAI/litellm/issues/40577) [Feature]: Support catalog-only models in the OpenAI-compatible model list `proxy` `llm translation`
- [#40576](https://github.com/BerriAI/litellm/issues/40576) [Feature]: add support and price for DeepSeek-V4.1-Flash `enhancement` `llm translation` `SDK`
- [#40567](https://github.com/BerriAI/litellm/issues/40567) [Feature]: implement tool search / deferred tool loading in the proxy for backends that don't support it `enhancement` `proxy` `llm translation`
- [#40563](https://github.com/BerriAI/litellm/issues/40563) [Bug]: Vertex AI Realtime (`gemini-3.5-transcribe-live-preview`) hardcodes `pcm16` sample rate to 24000, corrupting transcription quality `bug` `llm translation` `SDK`
- [#40559](https://github.com/BerriAI/litellm/issues/40559) [Feature]: Support configurable authenticated WebSocket passthrough endpoints `proxy`
- [#40557](https://github.com/BerriAI/litellm/issues/40557) [Feature Request]: Allow `internal view only` users to access Models and Playground tabs in LiteLLM Proxy UI
- [#40556](https://github.com/BerriAI/litellm/issues/40556) Add "deep-seek-flash" in "model_prices_and_context_window.json"
- [#40544](https://github.com/BerriAI/litellm/issues/40544) [Feature]: Optional Little Canary pre-call prompt-injection guardrail for chat text `proxy` `llm translation`
- [#40528](https://github.com/BerriAI/litellm/issues/40528) [Feature]: record stall escalations on the routing decision so they survive redaction and are attributable on the bill `enhancement` `proxy` `llm translation`

#### 🔒 Closed Issues
- [#23156](https://github.com/BerriAI/litellm/issues/23156) [Bug]: OpenAI GPT-5.4 tool calls with reasoning_effort fail through openai-agents sdk
- [#20495](https://github.com/BerriAI/litellm/issues/20495) [Bug]: MCP OAuth flow fails - temporary server doesn't inherit OAuth URLs
- [#34099](https://github.com/BerriAI/litellm/issues/34099) [Bug]: internal_user role never receives messages/response from /spend/logs/ui, even for own requests, despite store_prompts_in_spend_logs=true
- [#29715](https://github.com/BerriAI/litellm/issues/29715) [Bug]: OpenAPI MCP build_input_schema drops items/enum from inline parameter schemas
- [#29756](https://github.com/BerriAI/litellm/issues/29756) [Bug]: anthropic_messages: Inconsistent part-key normalization in gen_ai.input.messages OTel span attribute
- [#29766](https://github.com/BerriAI/litellm/issues/29766) [Bug]: /v1/audio/transcriptions collapses repeated known_speaker_references[]/known_speaker_names[] to the last value (breaks gpt-4o-transcribe-diarize multi-speaker)
- [#37611](https://github.com/BerriAI/litellm/issues/37611) [Bug]: Background health checks load the entire (unbounded) LiteLLM_HealthCheckTable into every worker each cycle → excessive/near-OOM memory + DB storms at scale
- [#40564](https://github.com/BerriAI/litellm/issues/40564) [Bug]: End-user budget reset exceeds PostgreSQL's 32,767 bind-variable limit and never completes
- [#29799](https://github.com/BerriAI/litellm/issues/29799) [Bug]: Hardcoded escape codes in format strings
- [#40612](https://github.com/BerriAI/litellm/issues/40612) veriy
- [#34069](https://github.com/BerriAI/litellm/issues/34069) Feature: Support aws_session_tags in Bedrock role assumption for CUR 2.0 cost attribution
- [#36275](https://github.com/BerriAI/litellm/issues/36275) [Bug]: /v1/responses with background:true returns completed but empty output when using polling_via_cache
- [#40548](https://github.com/BerriAI/litellm/issues/40548) [Bug]: `Created By` and `Updated At` columns show `Unknown` / `Unknown date` for all model records in Model Management table
- [#29786](https://github.com/BerriAI/litellm/issues/29786) [Bug]: Bedrock Limited Embedding Model Support
- [#33689](https://github.com/BerriAI/litellm/issues/33689) [Bug]: /v1/responses crashes with a Pydantic ValidationError when forcing a named tool call on Bedrock/Anthropic models
- [#40598](https://github.com/BerriAI/litellm/issues/40598) [Bug]: Organization API does not enforce the enterprise license
- [#40473](https://github.com/BerriAI/litellm/issues/40473) [Bug]: model map marks supports_minimal_reasoning_effort true for gpt-5.1 and gpt-5.4, but OpenAI rejects minimal on both
- [#38312](https://github.com/BerriAI/litellm/issues/38312) [Bug]: Background logging worker `TimeoutError`s under load — contention on unconfigurable Prisma-engine HTTP connection lock, not the Postgres connection pool
- [#40288](https://github.com/BerriAI/litellm/issues/40288) [Bug]: reasoning items rebuilt from lossy summary text on every turn, breaking prompt-cache byte-stability for OpenAI reasoning models behind /v1/messages
- [#40165](https://github.com/BerriAI/litellm/issues/40165) [Bug]: Bedrock request signing resolves AWS credentials synchronously, blocking the event loop for every concurrent request on that worker
- [#33401](https://github.com/BerriAI/litellm/issues/33401) [Bug]: Bedrock DeepSeek R1 rejects requests with `thinking`/`reasoning_effort` (400 Validation Error) — additionalModelRequestFields leak
- [#31868](https://github.com/BerriAI/litellm/issues/31868) [Bug]: Sonnet 5 Incorrect Pricing

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,000 · **Open issues:** 1,340 · **Last push:** <1h ago

There were no new releases for Unsloth on September 11, 2026. However, several significant merged pull requests included improvements to the Studio and CI, such as addressing issues with health wait budgets in MLX CI and ensuring better handling of diffusion loads on DGX Spark. Notable features implemented also involved maintaining the functionality of chat models and ensuring gradient checkpointing settings were honored during vision runs. Among the new issues, there's a possible regression reported regarding slow context reprocessing after tool calls, which could impact user experience. Overall, the day focused on enhancements and bug fixes without any major version changes.

#### ✅ Merged PRs
- [#10700](https://github.com/unslothai/unsloth/pull/10700) Unbreak main: raise the startup transfer budget to the margin it shipped with
- [#10674](https://github.com/unslothai/unsloth/pull/10674) MLX CI: give the llama-server health wait the same 180s budget as the other health waits
- [#10678](https://github.com/unslothai/unsloth/pull/10678) Send the thinking toggle to a "custom" provider
- [#10666](https://github.com/unslothai/unsloth/pull/10666) Studio: honor the vision run's gradient checkpointing setting
- [#10682](https://github.com/unslothai/unsloth/pull/10682) Keep the surrounding {{ }} when stripping bos_token from a chat template
- [#10677](https://github.com/unslothai/unsloth/pull/10677) Let a Deep Research handoff survive a preamble beside the tool call
- [#10705](https://github.com/unslothai/unsloth/pull/10705) Studio: stop refusing a diffusion load on a DGX Spark against its own download
- [#10726](https://github.com/unslothai/unsloth/pull/10726) Refuse to format when ruff cannot run, and stop the fixed-point guard skipping itself away in CI
- [#10566](https://github.com/unslothai/unsloth/pull/10566) Cover the restore of every variable the install.ps1 handoff block saves
- [#10504](https://github.com/unslothai/unsloth/pull/10504) Reduce comment volume across the installers, CLI, unsloth package and backend utilities
- [#10503](https://github.com/unslothai/unsloth/pull/10503) Reduce comment volume across the studio frontend and backend routes
- [#10502](https://github.com/unslothai/unsloth/pull/10502) Reduce comment volume across studio/backend/core
- [#10454](https://github.com/unslothai/unsloth/pull/10454) Studio: keep a chat working after switching to a model without tool support
- [#10616](https://github.com/unslothai/unsloth/pull/10616) fix: exclude padded logits from softcapped cross entropy
- [#10617](https://github.com/unslothai/unsloth/pull/10617) fix: materialize strided gradients before RMSNorm backward
- [#10703](https://github.com/unslothai/unsloth/pull/10703) Studio: recover the GPU capacity nvidia-smi will not report on a DGX Spark
- [#10694](https://github.com/unslothai/unsloth/pull/10694) Studio: fit the composer on narrow screens, and scale the greeting with it
- [#10652](https://github.com/unslothai/unsloth/pull/10652) Studio: end to end harness that measures whether a second studio update does nothing
- [#10664](https://github.com/unslothai/unsloth/pull/10664) Studio: keep the output a timed-out python or terminal call already produced
- [#10711](https://github.com/unslothai/unsloth/pull/10711) Windows No Compiler CI: see the intermediates the compiler cleaned up
- [#10689](https://github.com/unslothai/unsloth/pull/10689) CI: trigger Studio smokes on what they observe, run install matrices as a PR subset, fold Chat UI shards
- [#10667](https://github.com/unslothai/unsloth/pull/10667) Studio: keep an uploaded document's own name instead of replacing it with underscores
- [#10662](https://github.com/unslothai/unsloth/pull/10662) Studio: keep literal <think> text visible when the request turns thinking off
- [#10663](https://github.com/unslothai/unsloth/pull/10663) Studio: fail a Deep Research run when no step gathered any evidence
- [#10507](https://github.com/unslothai/unsloth/pull/10507) Block markerless execution-class tool-call promotion in Studio
- [#10669](https://github.com/unslothai/unsloth/pull/10669) Studio: stop pricing an Anthropic image by its base64 length in KV admission
- [#10646](https://github.com/unslothai/unsloth/pull/10646) Studio: gate GGML_CUDA_P2P on a confirmed NVLink fabric, not a product name
- [#10702](https://github.com/unslothai/unsloth/pull/10702) Raise the startup bundle budget to where main actually is
- [#10701](https://github.com/unslothai/unsloth/pull/10701) Read the installers' own code, not the scripts they emit
- [#10668](https://github.com/unslothai/unsloth/pull/10668) Studio: only strip a valid trailing __IMAGES__/__RAG_SOURCES__ envelope
- [#10584](https://github.com/unslothai/unsloth/pull/10584) Studio: stop a generation recovery deleting the turn's tool calls
- [#10555](https://github.com/unslothai/unsloth/pull/10555) Studio: keep the LoRA rank, alpha and variant when leaving CPT
- [#10558](https://github.com/unslothai/unsloth/pull/10558) Studio: size a local model by one copy of its weights
- [#10620](https://github.com/unslothai/unsloth/pull/10620) Fix scanned PDF uploads with local OCR fallback
- [#10654](https://github.com/unslothai/unsloth/pull/10654) Unbreak main: compare the autoload guard's conditions, not its exact text

#### 🐛 New Issues
- [#10698](https://github.com/unslothai/unsloth/issues/10698) [Bug] Possible Regression: Entire Context Being Reprocessed Slowly After Every Tool Call (With Set Seed) `feature request` `bug` 💬2
- [#10716](https://github.com/unslothai/unsloth/issues/10716) [Bug] Diffusion issues `feature request` `bug` 💬1
- [#10764](https://github.com/unslothai/unsloth/issues/10764) [Feature] Add get URL parameters for queries `feature request`
- [#10739](https://github.com/unslothai/unsloth/issues/10739) [Bug] network lost error and stop generating when away from browsers on android `feature request` `bug`
- [#10738](https://github.com/unslothai/unsloth/issues/10738) [Bug] Please fill in your issue title here. `feature request` `bug`
- [#10722](https://github.com/unslothai/unsloth/issues/10722) [Bug] Problems with the Windows/Powershe installer if your username profile contains spaces. `feature request` `bug`
- [#10691](https://github.com/unslothai/unsloth/issues/10691) [Unsloth Bug] DGX Spark reports no GPU after update despite detecting NVIDIA GB10 `bug`
- [#10699](https://github.com/unslothai/unsloth/issues/10699) [Bug] Studio CLI (Windows): unsloth start codex always fails with 'stdout is not a terminal' - agent TUI receives a piped stdout
- [#10695](https://github.com/unslothai/unsloth/issues/10695) Studio Images: user reports missing or unintuitive generation controls
- [#10696](https://github.com/unslothai/unsloth/issues/10696) Studio Hub: distinguish cached diffusion assets from an incomplete base-model download

#### 🔒 Closed Issues
- [#10613](https://github.com/unslothai/unsloth/issues/10613) Studio sets `GGML_CUDA_P2P=1` on non-NVLink GPUs (RTX 6000 Ada), silently corrupting all model output
- [#9919](https://github.com/unslothai/unsloth/issues/9919) [Bug] Image generation issue on DGX Spark
- [#10691](https://github.com/unslothai/unsloth/issues/10691) [Unsloth Bug] DGX Spark reports no GPU after update despite detecting NVIDIA GB10
- [#10619](https://github.com/unslothai/unsloth/issues/10619) [Bug] Studio PDF uploads reject scans or silently omit image-only pages

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,078 · **Open issues:** 377 · **Last push:** 6h ago

On September 11, 2026, AIBrix saw a day of routine maintenance with no new releases; however, several important changes were merged. Notably, PR #2696 introduced a local AIBrix workflow bot, while PR #2686 added vLLM-Omni video generation support, enhancing the project's capabilities. Additionally, a couple of bug fixes were implemented, including PR #2694, which corrected an issue related to scaling AIBRIX_TOKENIZER_* durations and PR #2699, which ensured that non-positive durations in LoadEnvDuration are now properly rejected. The team also addressed documentation improvements, with PR #2695 providing guidance on the repository agent and PR #2698 adding Chinese localization and a language switching feature for the documentation site. Noteworthy issues were submitted, including #2705, which reported a timeout in the unstructured gateway tests.

#### ✅ Merged PRs
- [#2696](https://github.com/vllm-project/aibrix/pull/2696) [Misc] Add local AIBrix workflow bot
- [#2699](https://github.com/vllm-project/aibrix/pull/2699) [Bug] Reject non-positive durations in LoadEnvDuration
- [#2697](https://github.com/vllm-project/aibrix/pull/2697) fix(telemetry): propagate PD routing traces
- [#2688](https://github.com/vllm-project/aibrix/pull/2688) [Gateway] Add strict PD mock contracts
- [#2695](https://github.com/vllm-project/aibrix/pull/2695) [Docs] Add repository agent guidance
- [#2694](https://github.com/vllm-project/aibrix/pull/2694) [Bug] Stop scaling AIBRIX_TOKENIZER_* durations by time.Second twice
- [#2686](https://github.com/vllm-project/aibrix/pull/2686) feat: add vLLM-Omni video generation support
- [#2689](https://github.com/vllm-project/aibrix/pull/2689) [Gateway] Apply AIBRIX_MIN_MATCH_PCT to the prefix_cache prefill policy

#### 🐛 New Issues
- [#2705](https://github.com/vllm-project/aibrix/issues/2705) [Bot Test] Unstructured gateway timeout report `area/gateway` `kind/misc` 💬1
- [#2704](https://github.com/vllm-project/aibrix/issues/2704) [Bot Test] Gateway RFC classification `area/gateway` `kind/feature` `area/cicd` 💬1
- [#2698](https://github.com/vllm-project/aibrix/issues/2698) [Docs] Add Chinese localization and language switching for the documentation site `kind/documentation` `help wanted` 💬1

#### 🔒 Closed Issues
- [#2705](https://github.com/vllm-project/aibrix/issues/2705) [Bot Test] Unstructured gateway timeout report
- [#2704](https://github.com/vllm-project/aibrix/issues/2704) [Bot Test] Gateway RFC classification
- [#2690](https://github.com/vllm-project/aibrix/issues/2690) PD router: crypto/rand shuffles and discarded V(4) log formatting dominate the selectMu critical section

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,722 · **Open issues:** 538 · **Last push:** 5h ago

On September 11, 2026, there were no new releases for Semantic Router; however, several significant updates were merged. Notably, the integration of Cloudflare Workers AI as a built-in serving provider was completed under PR #3655, which enhances the platform's flexibility. Additionally, a fix was implemented to correct the Dashboard navigation rendering with PR #3699, while PR #3697 addressed issues with the candle-binding `mkl` feature, ensuring proper static linking and discovery. New issues emerged, including a critical bug reported in #3709, where static selection fails to consider the matched domain's `model_scores`, indicating a need for prompt attention.

#### ✅ Merged PRs
- [#3700](https://github.com/vllm-project/semantic-router/pull/3700) [Docs] Add Ethan Jiang and PharosEast to Workgroup rosters
- [#3508](https://github.com/vllm-project/semantic-router/pull/3508) [Feature] Wire Looper calls to the shared connector
- [#3655](https://github.com/vllm-project/semantic-router/pull/3655) [Feature] Add Cloudflare Workers AI as a built-in serving provider
- [#3699](https://github.com/vllm-project/semantic-router/pull/3699) [Bug] Let Dashboard navigation render the new page
- [#3697](https://github.com/vllm-project/semantic-router/pull/3697) [Fix] Fix candle-binding `mkl` feature: static link + `hgemm_` shim + probe-based ocipkg discovery
- [#3447](https://github.com/vllm-project/semantic-router/pull/3447) [Test] Extend local soak baseline to SSE streaming responses

#### 🐛 New Issues
- [#3709](https://github.com/vllm-project/semantic-router/issues/3709) [Bug] Static selection ignores the matched domain's `model_scores` `bug` `accepted` `wg/mom-routing` 💬2
- [#3710](https://github.com/vllm-project/semantic-router/issues/3710) [Bug] Keyword rules never match keywords that start or end with a symbol or a non-ASCII letter `bug` `accepted` `wg/mom-routing` 💬2
- [#3708](https://github.com/vllm-project/semantic-router/issues/3708) [Bug] vLLM 0.21.0 non-streaming chat responses rejected by prompt_routed_experts `bug` `accepted` `wg/data-plane-networking` 💬1
- [#3706](https://github.com/vllm-project/semantic-router/issues/3706) [Bug] golang.org/x/text v0.37.0 is vulnerable to GO-2026-5970 (infinite loop / DoS) `bug` `accepted` `wg/evaluation-quality` 💬1
- [#3705](https://github.com/vllm-project/semantic-router/issues/3705) [Feature] Expose provider prompt-cache cost breakdown and cache savings `enhancement` `accepted` `wg/data-plane-networking` `watch/dwagent` 💬1
- [#3704](https://github.com/vllm-project/semantic-router/issues/3704) [Feature] Revalidate transformed request demand before backend dispatch `enhancement` `accepted` `wg/mom-routing` `watch/dwagent` 💬1
- [#3695](https://github.com/vllm-project/semantic-router/issues/3695) [Feature] Generate one Router configuration contract for CLI, Dashboard, and agents `enhancement` `accepted` `in-progress` `wg/enterprise-environment` 💬1
- [#3698](https://github.com/vllm-project/semantic-router/issues/3698) [Feature] Expose per-phase routing latency (signal/decision) at info level for end-to-end decomposition `enhancement` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3696](https://github.com/vllm-project/semantic-router/issues/3696) [Bug] candle-binding `mkl` feature does not build or load: undefined symbol `hgemm_` and missing `mkl_sequential` `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3703](https://github.com/vllm-project/semantic-router/issues/3703) [Feature] Make golangci-lint a real quality gate across Go modules `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#3702](https://github.com/vllm-project/semantic-router/issues/3702) [Enhancement] Enable additional bug-catching golangci-lint linters `enhancement` `go` `wg/developer-experience-ecosystem`

#### 🔒 Closed Issues
- [#3472](https://github.com/vllm-project/semantic-router/issues/3472) [Refactor] Define an ordered context-transformation plan and protected-turn IR
- [#3696](https://github.com/vllm-project/semantic-router/issues/3696) [Bug] candle-binding `mkl` feature does not build or load: undefined symbol `hgemm_` and missing `mkl_sequential`
- [#3702](https://github.com/vllm-project/semantic-router/issues/3702) [Enhancement] Enable additional bug-catching golangci-lint linters

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*